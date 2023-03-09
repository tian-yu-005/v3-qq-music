import { RouteRecordRaw } from 'vue-router'
export const musicHome = [
  {
    path: '/online-music/music-home',
    redirect: { name: 'jing-xuan' }
  },
  {
    path: 'jing-xuan',
    name: 'jing-xuan',
    component: () => import('@/view/online/music-home/navs/JingXuan.vue')
  },
  {
    path: 'sound-station',
    name: 'sound-station',
    component: () => import('@/view/online/music-home/navs/SoundStation.vue')
  },
  {
    path: 'rank',
    name: 'rank',
    component: () => import('@/view/online/music-home/navs/Rank.vue')
  },
  {
    path: 'songer',
    name: 'songer',
    component: () => import('@/view/online/music-home/navs/Songer.vue')
  },
  {
    path: 'category-list',
    name: 'category-list',
    component: () => import('@/view/online/music-home/navs/CategoryList.vue')
  },
  {
    path: 'album',
    name: 'album',
    component: () => import('@/view/online/music-home/navs/Album.vue')
  }
] as RouteRecordRaw[]