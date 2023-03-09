<template>
  <div class="songpanel-wrapper">
    <!-- 喜欢 -->
    <i class="iconfont icon-aixin love item"></i>
    <!-- 歌曲图片 -->
    <div class="img item">
      <img :src="$props.data?.imgSrc" alt="">
    </div>
    <!-- 歌曲描述 -->
    <div class="desc item">
      <div class="title">{{ $props.data?.name }}</div>
      <div class="sub-title">{{ $props.data?.songer }}</div>
    </div>
    <!-- 操作按钮 -->
    <OptionBtn 
     class="option-btn item" 
     :icons="icons" 
     :is-play-class="playerStore.isPlayClass($props.data?.id!)"
     />
  </div>
</template>
<script lang="ts" setup>
import OptionBtn from '@/components/OptionBtn.vue'
import { usePlayerStore } from '@/store/player/player'
import { ISong } from '@/types/ISong'

const props = defineProps<{
  data?: ISong
}>()
const playerStore = usePlayerStore()
// 歌曲操作按钮
const icons = [
  { icon: 'icon-gl-play', text: '播放歌曲', type: 'play-one' },
  { icon: 'icon-tianjia', text: '添加歌曲', type: 'add' },
  { icon: 'icon-xiazai', text: '下载', type: 'download' },
  { icon: 'icon-gengduocaozuo', text: '更多操作', type: 'optionEdit' }
]

</script>
<style scoped lang="scss">
$base-w: 140px;
$optionbtn-w: 100px;
.iconfont {
  font-size: 18px;
  color: gray;
  &:hover {
    cursor: pointer;
    color: var(--theme-color);
  }
}
.songpanel-wrapper {
  height: 64px;
  line-height: 64px;
  border-radius: 3px;
  padding: 9px 6px;
  .item {
    float: left;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      border-radius: 4px;
    }
  }
  // 歌曲图片
  .img {
    margin: 0 12px;
    img {
      user-select: none;
    }
  }
  // 歌曲描述
  .desc {
    line-height: 1;
    font-size: 13.5px;
    width: calc(100% - $base-w);
    .title, .sub-title {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .title {
      margin: 12px 0 8px;
    }
    .sub-title {
      color: gray;
      &:hover {
        cursor: pointer;
      }
    }
  }
  // 操作按钮
  .option-btn {
    float: right;
    display: none;
  }
  // 经过显示操作按钮
  &:hover {
    background-color: var(--aside-item-hover-bg);
    .option-btn {
      display: flex;
    }
    // 改变文本宽度
    .desc {
      width: calc(100% - $base-w - $optionbtn-w);
    }
  }
  
}
</style>