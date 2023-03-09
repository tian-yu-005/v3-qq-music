<template>
  <Scroll class="scroll-main">
    <template v-if="loginStore.isLogin">
      <!-- 标题 + 分类导航 -->
      <Navs title="我喜欢" :list="navs" @click-nav-item="onClickNav" />
      <!-- 二级导航 -->
      <component :is="compoenet_"></component>
    </template>
    <template v-else>
      <h3>请先登录</h3>
    </template>
  </Scroll>
</template>

<script lang="ts" setup>
import { computed, shallowRef, defineAsyncComponent } from 'vue'
import Scroll from '@/components/Scroll.vue'
import Navs from '@/components/Navs.vue'
import { useLoginStore } from '@/store/login/login'
// 歌曲 歌单 专辑
// 默认打开 歌曲，其余可以异步加载优化
const Song = defineAsyncComponent(() => import('./navs/Song.vue'))
const PlayList = defineAsyncComponent(() => import('./navs/PlayList.vue'))
const Album = defineAsyncComponent(() => import('./navs/Album.vue'))

const loginStore = useLoginStore()
// 歌曲数量会发生变化（添加 / 移除）
const navs = computed(() => [
  { title: '歌曲', len: loginStore.songs_len, component: Song },
  { title: '歌单', len: loginStore.songlist_len, component: PlayList },
  { title: '专辑', len: loginStore.album_len, component: Album },
  // { title: '主播电台', len: loginStore.diantai_len, component: '', },
  // { title: '视频', len: loginStore.video_len, component: '', }
])

const compoenet_ = shallowRef(Song)
// 二级导航点击事件
const onClickNav = (navItem: any) => {
  compoenet_.value = navItem.component
}
</script>

<style scoped lang="scss">

.scroll-main {
  height: $scroll-main;
}
</style>