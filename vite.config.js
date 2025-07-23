import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
 base: process.env.NODE_ENV === "production" && process.env.GITHUB_ACTIONS
    ? "/Real_michael/"
    : "/"
})
