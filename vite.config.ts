import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import ElementPlus from 'unplugin-element-plus/vite'
import setupPluginEl from './vite/autoImportEl'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ...setupPluginEl(),
    // 按需导入 message... 样式
    ElementPlus({
      useSource: true
    })
  ],
  base: './',
  // base: '/v3-qq-music/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') 
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 全局使用
        additionalData: `
          @use "@/theme.scss";
          @use "@/theme/normal.scss" as *;
        `
      }
    }
  }
})
