import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/v3/mail/send': {
        target: 'https://api.sendgrid.com',
        changeOrigin: true,
        secure: true,
      },
    },
  },
});
