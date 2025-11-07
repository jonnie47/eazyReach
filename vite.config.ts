import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    proxy: {
      // Proxy WordPress static assets
      '/wp-content': {
        target: 'https://blogs.vocallabs.ai',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path,
      },
      '/wp-includes': {
        target: 'https://blogs.vocallabs.ai',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path,
      },
      // Proxy blog routes
      '/blogs': {
        target: 'https://blogs.vocallabs.ai',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path,
        configure: (proxy) => {
          proxy.on('proxyReq', (proxyReq) => {
            proxyReq.setHeader('Referer', 'https://blogs.vocallabs.ai/');
            proxyReq.setHeader('Origin', 'https://blogs.vocallabs.ai');
          });
        },
      },
      '/blog': {
        target: 'https://blogs.vocallabs.ai',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path,
        configure: (proxy) => {
          proxy.on('proxyReq', (proxyReq) => {
            proxyReq.setHeader('Referer', 'https://blogs.vocallabs.ai/');
            proxyReq.setHeader('Origin', 'https://blogs.vocallabs.ai');
          });
        },
      },
    },
  },
});
