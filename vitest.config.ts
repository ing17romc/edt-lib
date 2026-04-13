import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        importers: [],
      },
    },
  },
  resolve: {
    alias: {
      components: resolve(dirname, 'src/components'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    css: {
      modules: {
        classNameStrategy: 'non-scoped',
      },
    },
    setupFiles: ['./src/setupTests.ts'],
    include: ['src/**/*.test.tsx'],
  },
});

