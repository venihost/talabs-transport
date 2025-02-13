import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/talabs-transport/',
  build: {
    rollupOptions: {
      input: {
        main: './src/main.jsx'
      }
    }
  }
})