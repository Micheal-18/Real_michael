import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
 base: process.env.VITE_GITHUB_PAGES === 'true' ? '/Real_michael/' : '/'
})
