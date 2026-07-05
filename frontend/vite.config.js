import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite dev server runs on port 5173 (matches the backend CORS config).
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
})
