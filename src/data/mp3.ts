import { Maps } from './useImport'
const mp3 = import.meta.glob('@/assets/mp3/*.mp3', { eager: true }) as any
// 精选
const mp3_maps = Maps(mp3)

export {
  mp3_maps
}

