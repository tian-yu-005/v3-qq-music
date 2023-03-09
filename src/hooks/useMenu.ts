import { ref } from 'vue'
import router from '@/router/index'
import type { IMenu } from '@/types/IMenu'

class Menu {
  constructor() {
    // 初始化构建一次
    this.getRouters()
  }
  // 路由菜单
  menus = ref<IMenu[]>()
  // 路由菜单重构
  getRouters() {
    this.menus.value = router.getRoutes().filter(item => {
      return item.children.length > 0
    }).map(item => {
      return {
        tag: item.meta.tag,
        children: item.children.map(val => {
          return {
            ...val.meta,
            name: val.name
          }
        })
      }
    }) as IMenu[]
  }
}

export default new Menu