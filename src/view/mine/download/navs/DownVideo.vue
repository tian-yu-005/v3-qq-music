<template>
  <!-- 播放 下载 -->
  <Sticky :top="54">
    <div style="padding-top: 10px;">
      <SongBtn 
       :data="songbtn" 
       :is-collapse="false" 
       @click-btn="onClickBtn"
       />
    </div>
  </Sticky>
  <h1>我的视频</h1>
</template>

<script lang="ts" setup>
import Sticky from '@/components/Sticky.vue'
import SongBtn from '../../SongBtn.vue'
import SongHead from '../../SongHead.vue'
import SongList from '../../SongList.vue'
import { useLocalSongStore } from '@/store/localsong/localsong'
import { useButtonEmits } from '@/hooks/useBtnEmits'

const localSongStore = useLocalSongStore()
// 事件处理
const { btnEmits } = useButtonEmits()
// 配置操作按钮
const songbtn = [
  { icon: 'icon-gl-play', text: '播放全部', type: 'play' },
  { icon: 'icon-duoxuan', text: '批量操作', type: 'operate' }
]
// 配置歌曲列表
const download_video = localSongStore.localDownload.downvideo
// 点击操作按钮
const onClickBtn = (item: (typeof songbtn)[number]) => {
  btnEmits[item.type](download_video)
}
</script>

<style scoped>

</style>