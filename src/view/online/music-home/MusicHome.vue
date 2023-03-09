<template>
  <Scroll class="scroll-main">
    <!-- 标题 + 分类导航 -->
    <Navs 
     :route="true"
     :title="title" 
     :list="navs"
     @click-nav-item="pushNav"
     />
    <!-- 其余内容 -->
    <router-view></router-view>
  </Scroll>
</template>

<script lang="ts" setup>
import Scroll from '@/components/Scroll.vue'
import Navs from '@/components/Navs.vue'
import { INav } from '@/types/INav'
import { useRoute, useRouter } from 'vue-router'
// 路由对象
const route = useRoute()
const router = useRouter()

const title = route.meta.title as string

// 导航数据
const navs = [
  { title: '精选', name: 'jing-xuan' },
  { title: '有声电台', name: 'sound-station' },
  { title: '排行', name: 'rank' },
  { title: '歌手', name: 'songer' },
  { title: '分类歌单', name: 'category-list' },
  { title: '数字专辑', name: 'album' }
] as INav[]
// 切换导航
const pushNav = (navItem: INav) => {
  router.push({ name: navItem.name })
}


</script>

<style scoped lang="scss">
.scroll-main {
  height: $scroll-main;
}

</style>