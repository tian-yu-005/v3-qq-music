import { musicHome } from './musicHome'

export const onlineRouter = {
  path: '/online-music',
  redirect: { name: 'hot' },
  children: [
    // 推荐
    {
      path: 'hot',
      name: 'hot',
      meta: { title: '推荐' },
      component: () => import('@/view/online/hot/Hot.vue')
    },
    // 音乐馆
    {
      path: 'music-home',
      name: 'music-home',
      meta: { title: '音乐馆' },
      component: () => import('@/view/online/music-home/MusicHome.vue'),
      children: [
        ...musicHome
      ]
    },
    // 视频
    {
      path: 'vedio',
      name: 'vedio',
      meta: { title: '视频' },
      component: () => import('@/view/online/vedio/Vedio.vue')
    },
    // 电台
    {
      path: 'diantai',
      name: 'diantai',
      meta: {  title: '电台' },
      component: () => import('@/view/online/diantai/DianTai.vue')
    }
  ]
}