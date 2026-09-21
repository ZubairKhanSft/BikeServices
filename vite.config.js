import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-router-dom': resolve(__dirname, 'src/shims/react-router-dom.js'),
      'react-helmet-async': resolve(__dirname, 'src/shims/react-helmet-async.js'),
    },
  },
})
