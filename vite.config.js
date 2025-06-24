import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/projeto-leo/', // 👈 ESSA LINHA É ESSENCIAL
  plugins: [react()],
})
