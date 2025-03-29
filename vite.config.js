import { defineConfig } from 'vite';

export default defineConfig({
  root: './',
  build: {
    outDir: 'dist',
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'tailwindcss']
  },
  
  server: {
    port: 5000 // ou qualquer outra porta disponível
  },
});
