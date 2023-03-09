import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'
import './icons/iconfont.css'
import './theme/theme.css'
// import 'element-plus/theme-chalk/display.css' // 断点隐藏

const app = createApp(App)
app.use(router)

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(createPinia())

app.mount('#app')