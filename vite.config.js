import vue from '@vitejs/plugin-vue'
import ssr from 'vite-plugin-ssr/plugin'

export default {
  plugins: [
    vue(),
    ssr()
  ],
  resolve: {
    alias: {
      '@': __dirname
    }
  },
  build: {
    ssrManifest: true
  }
}
