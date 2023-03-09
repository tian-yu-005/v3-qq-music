<template>
  <Scroll class="scroll-main">
    <!-- 标题 + 分类导航 -->
    <Navs 
      title="本地和下载" 
      :list="navs"
      @click-nav-item="onClickNav"
      />
      <!-- 二级导航 -->
      <component :is="currentComponent"></component>
  </Scroll>
</template>

<script lang="ts" setup>
import { computed, shallowRef, defineAsyncComponent } from 'vue'
import Scroll from '@/components/Scroll.vue'
import Navs from '@/components/Navs.vue'
import { useLocalSongStore } from '@/store/localsong/localsong'

const LocalSong = defineAsyncComponent(() => import('./navs/LocalSong.vue'))
const DownSong = defineAsyncComponent(() => import('./navs/DownSong.vue'))
const DownVideo = defineAsyncComponent(() => import('./navs/DownVideo.vue'))

const localSongStore = useLocalSongStore()
// 导航数据
const navs = computed(() => [
  { title: '本地歌曲', len: localSongStore.localsong_len, component: LocalSong },
  { title: '下载歌曲', len: localSongStore.downsong_len, component: DownSong },
  { title: '下载视频', len: localSongStore.downvideo_len, component: DownVideo }
])

const currentComponent = shallowRef(LocalSong)
// 切换导航
const onClickNav = (navItem: any) => {
  currentComponent.value = navItem.component
}
</script>

<style scoped lang="scss">
.scroll-main {
  height: $scroll-main;
}
</style>