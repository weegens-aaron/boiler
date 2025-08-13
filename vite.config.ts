import { defineConfig, type PluginOption } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
const reactPlugin: PluginOption = react();
const tsconfigPathsPlugin: PluginOption = tsconfigPaths();

export default defineConfig({
  plugins: [reactPlugin, tsconfigPathsPlugin],
  server: {
    port: 3000,
    strictPort: false,
    open: false,
  },
  preview: {
    port: 3001,
    strictPort: false,
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
        },
      },
    },
  },
});
