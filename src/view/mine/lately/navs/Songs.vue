<template>
  <!-- 播放 下载 -->
  <Sticky :top="54">
    <div style="padding-top: 10px;">
      <SongBtn 
       :data="songbtn" 
       :is-collapse="true" 
       @click-btn="onClickBtn"
       />
    </div>
  </Sticky>
  <!-- 歌曲表头 -->
  <Sticky :top="96">
    <div style="padding: 20px 0 9px;">
      <SongHead />
    </div>
  </Sticky>
  <!-- 歌曲列表，最近播放至多显示10条 -->
  <SongList :data="lately_song" from="最近播放" />
</template>

<script lang="ts" setup>
import Sticky from '@/components/Sticky.vue'
import SongBtn from '../../SongBtn.vue'
import SongHead from '../../SongHead.vue'
import SongList from '../../SongList.vue'
import { useLocalSongStore } from '@/store/localsong/localsong'
import { useButtonEmits } from '@/hooks/useBtnEmits'
import { computed } from 'vue'

const localSongStore = useLocalSongStore()
// 事件处理
const { btnEmits } = useButtonEmits()
// 配置操作按钮
const songbtn = [
  { icon: 'icon-gl-play', text: '播放全部', type: 'play' },
  { icon: 'icon-xiazai', text: '下载',     type: 'download' },
  { icon: 'icon-duoxuan', text: '批量操作', type: 'operate' }
]
// 读取 歌曲
const lately_song = computed(() => localSongStore.lately.songs.filter(
  (item, index) => index < 20
))

// 点击操作按钮
const onClickBtn = (item: (typeof songbtn)[number]) => {
  if(item.type === 'play') {
    btnEmits[item.type](lately_song.value, '最近播放')
  } else {
    btnEmits[item.type]()
  }
}
</script>

<style scoped>

</style>