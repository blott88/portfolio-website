// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './', // Ensure this points to the root directory where the `index.html` is located
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: './public/index.html', // Ensure this path is correct
    },
  },
});
