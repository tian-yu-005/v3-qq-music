<template>
  <div class="player-controller">
    <i class="type iconfont icon-order"></i>
    <i class="pre iconfont icon-pre" title="上一首" @click="pre()"></i>
    <i 
     :class="`play iconfont ${ playerStore.isPlay ? 'icon-pause' : 'icon-play' }`" 
     title="切换播放" 
     @click="playerStore.togglePlay()"
     />
    <i class="next iconfont icon-next" title="下一首" @click="next()"></i>
    <i class="sound iconfont icon-sound" title="音量"></i>
  </div>
</template>

<script lang="ts" setup>
import { usePlayerStore } from '@/store/player/player'
import { throttle } from '@/hooks/useThrottle'
const playerStore = usePlayerStore()

// 节流
const pre = throttle(playerStore.pre, 500)
const next = throttle(playerStore.next, 500)

</script>

<style scoped lang="scss">
.iconfont {
  vertical-align: middle;
  margin: 0 5px;
  &.play, &.pause {
    font-size: 38px;
    color: var(--theme-color);
  }
  &.pre, &.next {
    font-size: 24px;
  }
  &.type, &.sound {
    font-size: 20px;
  }
  &:hover {
    cursor: pointer;
    color: var(--theme-color);
  }
  &:not(.play, .pause):active {
    box-shadow: 0 0 1px #000;
  }
}
</style>