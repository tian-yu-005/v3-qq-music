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
  <!-- 歌曲列表 -->
  <SongList :data="local_song" from="本地和下载" />
</template>

<script lang="ts" setup>
import Sticky from '@/components/Sticky.vue'
import SongBtn from '../../SongBtn.vue'
import SongHead from '../../SongHead.vue'
import SongList from '../../SongList.vue'
import { useLocalSongStore } from '@/store/localsong/localsong'
import { useButtonEmits } from '@/hooks/useBtnEmits'
import { ISong } from '@/types/ISong'

const localSongStore = useLocalSongStore()
// 事件处理
const { btnEmits } = useButtonEmits()
// 配置操作按钮
const songbtn = [
  { icon: 'icon-gl-play', text: '播放全部', type: 'play' },
  { icon: 'icon-tianjia', text: '添加',     type: 'add' },
  { icon: 'icon-duoxuan', text: '批量操作', type: 'operate' },
  { icon: 'icon-fuzhi', text: '匹配歌曲', type: '' },
  { icon: 'icon-yun', text: '本地歌曲恢复助手', type: '' },
  { icon: 'icon-shengji', text: '升级音质', type: '' }
]
// 读取 本地歌曲
const local_song = localSongStore.localDownload.localsong as ISong[]
// 点击操作按钮
const onClickBtn = (item: (typeof songbtn)[number]) => {
  if(item.type === 'play') {
    btnEmits[item.type](local_song, '本地和下载')
  } else {
    btnEmits[item.type]()
  }
}
</script>

<style scoped>

</style>