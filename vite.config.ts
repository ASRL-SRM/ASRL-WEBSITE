import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // 🔁 Replace with your repo name if it's different
  plugins: [react()],
})