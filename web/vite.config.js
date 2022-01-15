import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src', 'components'),
      '@contexts': path.resolve(__dirname, 'src', 'contexts'),
      '@hooks': path.resolve(__dirname, 'src', 'hooks'),
      '@layouts': path.resolve(__dirname, 'src', 'layouts'),
      '@lib': path.resolve(__dirname, 'src', 'lib'),
      '@pages': path.resolve(__dirname, 'src', 'pages'),
      '@routes': path.resolve(__dirname, 'src', 'routes'),
      '@services': path.resolve(__dirname, 'src', 'services'),
      '@styles': path.resolve(__dirname, 'src', 'styles'),
      '@utils': path.resolve(__dirname, 'src', 'utils'),
      '@assets': path.resolve(__dirname, 'src', 'assets'),
    },
  },
})
