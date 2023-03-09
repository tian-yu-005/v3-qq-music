<template>
  <Search 
   v-model:val="searchValue"
   @on-focus="onFocus" 
   @on-blur="onBlur"
   >
    <SearchResult v-if="show" :data="data" @click-item="onClickItem" />
  </Search>
</template>

<script lang="ts" setup>
import { 
  ref,
  reactive,
  watchEffect, 
  defineAsyncComponent,
  WatchStopHandle  
} from 'vue'

import { useRouter } from 'vue-router'
import Search from '@/components/Search.vue'
import { ISong } from '@/types/ISong'
import { useSearch } from '@/hooks/useSearch'
import { usePlayerStore } from '@/store/player/player'
import { useLocalSongStore } from '@/store/localsong/localsong'
const SearchResult = defineAsyncComponent(() => import('@/layout/header/SearchResult.vue'))
// 搜索逻辑
const {
  search,
  allHas
} = useSearch()
// 播放器仓库
const playerStore = usePlayerStore()
// 本地仓库
const localSongStore = useLocalSongStore()
const router = useRouter()
// 输入框
const searchValue = ref('')
// 搜索结果
const show = ref(false)
// 结果数据
let data = reactive({})
const froms = {
  '我喜欢': (song: ISong) => {
    router.push('/my-music/love')
    playerStore.play(song, '我喜欢')
    playerStore.changePlayQueue(localSongStore.getLatelySong)
  },
  '本地歌曲': (song: ISong) => {
    router.push('/my-music/download')
    playerStore.play(song, '本地和下载')
    playerStore.changePlayQueue(localSongStore.getLocalsong)
  },
  '下载歌曲': (song: ISong) => {
    router.push('/my-music/download')
    playerStore.play(song, '本地和下载')
    playerStore.changePlayQueue(localSongStore.getDownsong)
  },
  '历史播放': (song: ISong) => {
    router.push('/my-music/lately')
    playerStore.play(song, '最近播放')
    playerStore.changePlayQueue(localSongStore.getLatelySong)
  }
} as any
let unwatch = null as unknown as WatchStopHandle
// 聚焦
const onFocus = () => {
  unwatch = watchEffect(watchFn)
}
// 失焦
const onBlur = () => {
  unwatch()
  setTimeout(() => {
    show.value = false
  }, 150)
}
function watchFn() {
  if(searchValue.value.trim() !== '') {
    const v = searchValue.value.trim()
    show.value = allHas(v)
    if(show.value) {
      data = search(v)
    }
  } else {
    show.value = false
  }
}
// 点击跳转播放
const onClickItem = (item: any) => {
  // 我的音乐
  if(item.from) {
    const { from, ...song } = item
    froms[from](song)
  } else {
    // 在线音乐
    playerStore.play(item, ' ')
    playerStore.changePlayQueue(localSongStore.getLatelySong)
  }
}
</script>

<style scoped>

</style>