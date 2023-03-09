<template>
  <!-- 播放 下载 -->
  <Sticky :top="54">
    <SongBtn 
     :data="songbtn" 
     :is-collapse="false" 
     style="padding-top: 10px;" 
     @click-btn="onClickBtn"
     />
  </Sticky>
  <!-- 歌曲表头 -->
  <Sticky :top="96">
    <div style="padding: 20px 0 9px;">
      <SongHead />
    </div>
  </Sticky>
  <!-- 歌曲列表 -->
  <SongList :data="love_song" from="我喜欢" />
</template>

<script lang="ts" setup>
import Sticky from '@/components/Sticky.vue'
import SongBtn from '../../SongBtn.vue'
import SongHead from '../../SongHead.vue'
import SongList from '../../SongList.vue'
import { useLoginStore } from '@/store/login/login'
import { useButtonEmits } from '@/hooks/useBtnEmits'
const loginStore = useLoginStore()
// 事件处理
const { btnEmits } = useButtonEmits()
// 配置操作按钮
const songbtn = [
  { icon: 'icon-gl-play', text: '播放全部', type: 'play' },
  { icon: 'icon-xiazai',  text: '下载',     type: 'download' },
  { icon: 'icon-duoxuan', text: '批量操作', type: 'operate' }
]
// 读取 歌曲
const love_song = loginStore.info.love.songs
// 点击操作按钮
const onClickBtn = (item: (typeof songbtn)[number]) => {
  if(item.type === 'play') {
    btnEmits[item.type](love_song, '我喜欢')
  } else {
    btnEmits[item.type]()
  }
}
</script>

<style scoped>

</style>