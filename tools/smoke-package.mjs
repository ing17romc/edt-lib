import { execFileSync, execSync } from 'node:child_process';
import { mkdirSync, rmSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const repoRoot = process.cwd();
const tempRoot = path.resolve(repoRoot, '.tmp', 'package-smoke');
const tarballScript = path.resolve(repoRoot, 'node_modules', 'typescript', 'bin', 'tsc');
const viteScript = path.resolve(repoRoot, 'node_modules', 'vite', 'bin', 'vite.js');

const run = (command, args, cwd) => {
  execFileSync(command, args, {
    cwd,
    stdio: 'inherit',
  });
};

const writeJson = (filePath, value) => {
  writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`);
};

let tarballPath = '';

try {
  const packResult = JSON.parse(execSync('npm pack --json', {
    cwd: repoRoot,
    encoding: 'utf8',
  }))[0];

  tarballPath = path.resolve(repoRoot, packResult.filename);

  rmSync(tempRoot, { recursive: true, force: true });
  mkdirSync(path.join(tempRoot, 'src'), { recursive: true });

  writeJson(path.join(tempRoot, 'package.json'), {
    name: 'edt-lib-package-smoke',
    private: true,
    type: 'module',
  });

  writeJson(path.join(tempRoot, 'tsconfig.json'), {
    compilerOptions: {
      target: 'ES2020',
      module: 'ESNext',
      moduleResolution: 'Bundler',
      jsx: 'react-jsx',
      strict: true,
      skipLibCheck: true,
      esModuleInterop: true,
      allowSyntheticDefaultImports: true,
    },
    include: ['src'],
  });

  writeFileSync(path.join(tempRoot, 'vite.config.ts'), `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
`);

  writeFileSync(path.join(tempRoot, 'index.html'), `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>edt-lib smoke test</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`);

  writeFileSync(path.join(tempRoot, 'src', 'env.d.ts'), `declare module '*.css';
declare module '*.scss';
`);

  writeFileSync(path.join(tempRoot, 'src', 'main.tsx'), `import React from 'react';
import ReactDOM from 'react-dom/client';
import 'edt-lib/index.scss';
import { Button, ThemeProvider } from 'edt-lib';

function App() {
  return (
    <ThemeProvider defaultTheme="system" ssrFallbackTheme="light">
      <Button>Smoke test</Button>
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
`);

  execSync(`npm install --no-package-lock --no-save "${tarballPath}"`, {
    cwd: tempRoot,
    stdio: 'inherit',
  });
  run(process.execPath, [tarballScript, '--project', 'tsconfig.json', '--noEmit'], tempRoot);
  run(process.execPath, [viteScript, 'build'], tempRoot);
  run(process.execPath, ['--input-type=module', '-e', `import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
require.resolve('edt-lib/styles.css');
require.resolve('edt-lib/index.scss');
console.log('Resolved public stylesheet subpaths successfully.');
`], tempRoot);
} finally {
  rmSync(tempRoot, { recursive: true, force: true });

  if (tarballPath) {
    rmSync(tarballPath, { force: true });
  }
}
