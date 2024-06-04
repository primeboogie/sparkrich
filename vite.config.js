import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias:{
      '@': '/src',
      '@assets': '/src/assets' ,
      '@css': '/src/assets/css' ,
      '@pages': '/src/pages' ,
      '@comp': '/src/components',
    },
  },
})
// C18927