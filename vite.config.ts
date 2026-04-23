import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages base path
const isGitHubPages = process.env.GITHUB_PAGES === 'true'
const base = isGitHubPages ? '/tes-psiko-deret-angka/' : '/'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: base,
})
