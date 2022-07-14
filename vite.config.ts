import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [react()],
    build: {
      outDir: 'dist',
    },
    // define: {
    //   API_HOST: env.VITE_LIFF_API_ENDPOINT,
    // },
    // server: {
    //   https: {
    //     key: fs.readFileSync('./localhost-key.pem'),
    //     cert: fs.readFileSync('./localhost.pem'),
    //   }
    // },
  };
});
