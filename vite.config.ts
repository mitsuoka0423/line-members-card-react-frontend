import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  root: resolve(__dirname, 'src'),
  resolve: {
    alias: [
      {
        find: /^~\/(.*)/,
        replacement: resolve(__dirname, 'src/$1'),
      },
    ],
  },
  // server: {
  //   https: {
  //     key: fs.readFileSync('./localhost-key.pem'),
  //     cert: fs.readFileSync('./localhost.pem'),
  //   }
  // },
});
