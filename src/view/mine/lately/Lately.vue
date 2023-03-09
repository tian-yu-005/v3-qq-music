<template>
  <Scroll class="scroll-main">
    <!-- 标题 + 分类导航 -->
    <Navs 
      title="最近播放" 
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

const Songs = defineAsyncComponent(() => import('./navs/Songs.vue'))
const Video = defineAsyncComponent(() => import('./navs/Video.vue'))

const localSongStore = useLocalSongStore()
const currentComponent = shallowRef(Songs)
// 导航数据
const navs = computed(() => [
  { title: '歌曲', len: localSongStore.getLatelySongsLen, component: Songs },
  { title: '视频', len: localSongStore.getLatelyVideoLen, component: Video }
])
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