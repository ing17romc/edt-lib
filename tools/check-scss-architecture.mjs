import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const rootDir = process.cwd();
const targetDirs = ['src/components', 'src/static'];
const styleExtension = '.scss';
const allowedSassModules = new Set(['sass:color', 'sass:map']);
const allowedSharedStyles = new Set(['palette', 'typography', 'spacing']);
const importPattern = /@(use|import)\s+['"]([^'"]+)['"]/g;

const walk = async (dir) => {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const nextPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      return walk(nextPath);
    }

    return entry.isFile() && nextPath.endsWith(styleExtension) ? [nextPath] : [];
  }));

  return files.flat();
};

const isAllowedStyleImport = (specifier) => {
  if (allowedSassModules.has(specifier)) {
    return true;
  }

  const normalized = specifier.replace(/\\/g, '/');
  const match = normalized.match(/(?:^|\/)(palette|typography|spacing)$/);

  if (!match) {
    return false;
  }

  return allowedSharedStyles.has(match[1]) && normalized.includes('../styles/');
};

const validateFile = async (filePath) => {
  const content = await readFile(filePath, 'utf8');
  const violations = [];

  for (const match of content.matchAll(importPattern)) {
    const [, kind, specifier] = match;

    if (kind === 'import') {
      violations.push(`uses disallowed @import "${specifier}"`);
      continue;
    }

    if (!isAllowedStyleImport(specifier)) {
      violations.push(`uses disallowed @use "${specifier}"`);
    }
  }

  return violations.map((message) => `${path.relative(rootDir, filePath)}: ${message}`);
};

const main = async () => {
  const files = (await Promise.all(targetDirs.map((dir) => walk(path.join(rootDir, dir))))).flat();
  const violations = (await Promise.all(files.map((filePath) => validateFile(filePath)))).flat();

  if (violations.length > 0) {
    console.error('SCSS architecture violations found:\n');
    console.error(violations.join('\n'));
    process.exitCode = 1;
    return;
  }

  console.log(`SCSS architecture check passed for ${files.length} files.`);
};

await main();
