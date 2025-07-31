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
          three: ['three', '@react-three/fiber', '@react-three/drei'],
        },
      },
      onwarn(warning, warn) {
        // Ignore eval warnings from lottie.js and three.js
        if (warning.code === 'EVAL' && (warning.id?.includes('lottie.js') || warning.id?.includes('three'))) {
          return;
        }
        warn(warning);
      }
    },
  },
  // Ensure proper asset handling
  assetsInclude: ['**/*.pdf'],
  // Define environment variables
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
  },
})