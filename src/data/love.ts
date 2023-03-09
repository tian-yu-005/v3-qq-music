import { Maps } from './useImport'
const loveImg = import.meta.glob('@/assets/img/love/*.png', { eager: true }) as any

// 我喜欢
const lova_maps = Maps(loveImg)

export {
  lova_maps
}