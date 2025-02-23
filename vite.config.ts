import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://vishwas557bs.github.io/myportfolio/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});