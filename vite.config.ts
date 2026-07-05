import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  css: {
    // Inline (empty) PostCSS config so Vite doesn't pick up stray
    // postcss.config.js files from ancestor directories.
    postcss: { plugins: [] },
  },
})
