import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

const reactPlugin = react();
const tsconfigPathsPlugin = tsconfigPaths();

export default defineConfig({
  plugins: [reactPlugin, tsconfigPathsPlugin],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/configs/test/setup.ts'],
    exclude: ['node_modules', 'dist', 'e2e', '**/*.spec.ts'],
    coverage: {
      provider: 'v8',
      all: true,
      include: ['src/**/*.{ts,tsx}'],
      exclude: [
        'src/**/index.ts',
        'src/test/**',
        'src/**/*.test.*',
        'src/**/*.spec.*',
        'src/**/*.stories.*',
        'src/**/*.styled.*',
        'src/**/*.types.*',
        'src/vite-env.d.ts',
        'src/main.tsx',
      ],
      reporter: ['text', 'html', 'lcov'],
      reportsDirectory: 'coverage',
      // threshold config for vitest v2 coverage-v8
      thresholds: {
        lines: 90,
        functions: 90,
        branches: 90,
        statements: 90,
      },
    },
  },
});
