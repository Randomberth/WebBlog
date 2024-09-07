import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  root: '/',
  plugins: [react()],
  base:'https://Randomberth.github.io/TestBlog/'
})

