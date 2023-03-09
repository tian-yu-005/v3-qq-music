<template>
  <!-- 背景层 -->
  <div class="wrapper"> 
    <!-- 容器层 （边距） -->
    <div class="player-wrapper">
      <!-- 内容层 -->
      <div class="player">
        <div class="img">
          <img :src="playerStore.currentPlaySource.imgSrc" alt="">
          <!-- 播放图标 -->
          <div class="mask">
            <i 
             class="play iconfont icon-play" 
             title="播放该歌单" 
             />
          </div>
        </div>
        <div class="detail">
          <div class="title">{{ playerStore.currentPlaySource.name }}</div>
          <div class="author"><span>{{ playerStore.currentPlaySource.songer }}</span></div>

          <OptionBtn 
           :icons="icons" 
           :is-love-class="loginStore.isLoveClass(playerStore.currentPlaySource.id)"

           
           style="padding: 0;" 
           />
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
import OptionBtn from '@/components/OptionBtn.vue'
import { usePlayerStore } from '@/store/player/player'
import { useLoginStore } from '@/store/login/login'
import { useButtonEmits } from '@/hooks/useBtnEmits'
const playerStore = usePlayerStore()
const loginStore = useLoginStore()
// 歌曲操作按钮
const icons = [
  { icon: 'icon-next', text: '下一首', type: 'next' },
  { icon: 'icon-aixin', text: '我喜欢', type: 'love' },
  { icon: 'icon-huanyipi', text: '换一组', type: '' },
  { icon: 'icon-pinglun', text: '评论', type: 'comment' }
]
</script>

<style scoped lang="scss">
$raduis: 8px;
$img-w: 120px;
.wrapper {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 10px 0;
  border-radius: $raduis;
  background-image: linear-gradient(to top, #e0e0e0, #737373);
  .player-wrapper {
    // border: 1px solid red;
    box-sizing: border-box;
    width: 80%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    // padding: 30px;
  }
}

.wrapper:hover .player-wrapper .player .mask {
  display: flex;
}
.player {
  // border: 2px solid green;
  display: flex;
  width: 100%;
  .img {
    position: relative;
    width: $img-w;
    height: $img-w;
    // border: 2px solid red;
    flex-shrink: 0;
    
    img {
      width: 100%;
      height: 100%;
      border-radius: $raduis;
    }
    // 遮罩层
    .mask {
      display: none;
      justify-content: center;
      align-items: center;

      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      border-radius: 8px;
      background-color: #47474777;
      .play {
        font-size: 58px;
        color: #fff;
        &:hover {
          color: var(--theme-color);
        }
      }
    }
    &:hover {
      cursor: pointer;
    }
  }
  .detail {
    flex-grow: 1;
    max-width: calc(100% - $img-w);
    
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    box-sizing: border-box;
    padding-left: 18px;
    // border: 2px solid red;
    .title, 
    .author {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .title {
      color: #fff;
      font-size: 16px;
    }
    .author {
      color: #cfcfcf;
      font-size: 13px;
      span:hover {
        cursor: pointer;
      }
    }
  }
}
</style>