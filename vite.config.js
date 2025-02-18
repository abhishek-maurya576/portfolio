import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          styling: ['styled-components', 'framer-motion'],
        },
      },
      onwarn(warning, warn) {
        // Ignore eval warnings from lottie.js
        if (warning.code === 'EVAL' && warning.id?.includes('lottie.js')) {
          return;
        }
        warn(warning);
      }
    },
  },
})