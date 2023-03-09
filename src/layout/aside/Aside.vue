<template>
  <div class="aside">
    <div class="logo">
      <img :src="logo" width="30" height="30" alt="QQ音乐">
      <span class="logo-title">QQ音乐</span>
    </div>
    <div style="height: calc(100vh - 60px)">
      <el-scrollbar height="calc(100vh - 60px)" class="sc">
        <List title="在线音乐" >
          <template v-for="item in online">
            <ListItem :data="item" prop="name" @click-list-item="push"/>
          </template>
        </List>
        <List title="我的音乐">
          <template v-for="item in mine">
            <ListItem 
              :data="item" 
              prop="name"
              :show-animation="showAnimation(item)" 
              @click-list-item="push"
              />
          </template>
        </List>
        <!-- 必须登录 -->
        <!-- 必须登录 -->
        <!-- 必须登录 -->
        <AuthorList v-if="loginStore.isLogin" />
      </el-scrollbar>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineAsyncComponent, nextTick, ref } from 'vue'
import { useRouter } from 'vue-router'

import logo from '@/assets/img/logo.webp'
import List from './List.vue'
import ListItem from './ListItem.vue'
import { useLoginStore } from '@/store/login/login'
import { usePlayerStore } from '@/store/player/player'
// 优化未登录时
const AuthorList = defineAsyncComponent(() => import('./AuthorList.vue'))

const playerStore = usePlayerStore()
const loginStore = useLoginStore()
const router = useRouter()

// 在线音乐
const online = [
  { 
    icon: 'icon-tuijian', title: '推荐', path: '/online-music/hot', name: 'hot' 
  },
  { 
    icon: 'icon-yinle', title: '音乐馆', path: '/online-music/music-home', name: 'music-home' 
  },
  {
    icon: 'icon-shipin', title: '视频', path: '/online-music/vedio', name: 'vedio'
  },
  {
    icon: 'icon-diantai', title: '电台', path: '/online-music/diantai', name: 'diantai'
  }
]

// 我的音乐
const mine = ref([
  { icon: 'icon-diannaobangongdianzi', title: '本地和下载', path: '/my-music/download', name: 'download' },
  { icon: 'icon-zuijinlaifang', title: '最近播放', path: '/my-music/lately', name: 'lately' },
  { icon: 'icon-yinleliebiao', title: '试听列表', path: '/my-music/audition', name: 'audition' }
])
nextTick(() => {
  if(loginStore.isLogin) {
    mine.value.unshift({ icon: 'icon-w_aixin', title: '我喜欢', path: '/my-music/love', name: 'love' })
  }
})

// 左侧导航
const push = (item: any) => {
  router.push(item.path)
}
// 组件动画状态
const showAnimation = computed(() => {
  return (item: any) => 
    playerStore.type === item.title &&
    playerStore.isPlay
})

</script>

<style scoped lang="scss">
.aside {
  // box-sizing: border-box;
  // background-color: var(--aside-bg);
}
.logo {
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 32px;
}

.logo-title {
  font-size: 18px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  margin-left: 3px;
}
</style>