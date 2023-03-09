import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { onlineRouter } from './online'

const mineRouter = {
  path: '/my-music',
  redirect: '/my-music/download',
  children: [
    // 我喜欢
    {
      path: 'love',
      name: 'love',
      meta: { title: '我喜欢', keepAlive: true },
      component: () => import('../view/mine/love/Love.vue')
    },
    // 本地和下载
    {
      path: 'download',
      name: 'download',
      meta: { title: '本地和下载', keepAlive: true },
      component: () => import('../view/mine/download/DownLoad.vue')
    },
    // 最近播放
    {
      path: 'lately',
      name: 'lately',
      meta: { title: '最近播放', keepAlive: true },
      component: () => import('../view/mine/lately/Lately.vue')
    },
    // 试听列表
    {
      path: 'audition',
      name: 'audition',
      meta: { title: '试听列表', keepAlive: true },
      component: () => import('../view/mine/audition/Audition.vue')
    }
  ]
} as RouteRecordRaw

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/online-music'
    },
    // 在线音乐
    onlineRouter,

    // 我的音乐
    mineRouter,

    // 数据库 歌单
    {
      path: '/songDetail/:id',
      name: 'songDetail',
      component: () => import('@/view/songDetail/SongDetail.vue')
    },
    // 用户 歌单
    {
      path: '/userSongDetail/:id',
      name: 'userSongDetail',
      component: () => import('@/view/songDetail/UserSongDetail.vue')
    },
    // 用户 界面
    {
      path: '/userDetail/:id',
      name: 'userDetail',
      component: () => import('@/view/songDetail/UserDetail.vue')
    },
    // 404
    { 
      path: '/:pathMatch(.*)*', 
      name: '404', 
      component: () => import('@/view/404.vue')
    }
  ]
})

export default router