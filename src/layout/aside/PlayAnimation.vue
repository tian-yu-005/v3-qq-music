<template>
  <!-- 播放动画 -->
  <div class="play-animation">
    <span v-for="item in h" :style="{
      height: item + 'px'
    }"/>
  </div>
</template>

<script lang="ts" setup>
const h = [4, 8, 5, 10]

</script>

<style scoped lang="scss">
@mixin playLoad($start, $i, $duration, $delay) {
  animation: playLoad-#{ $i } $duration $delay linear infinite;
  @keyframes playLoad-#{ $i } {
    0% {
      height: $start;
    }
    25% {
      height: 10px;
    }
    50% {
      height: 2px;
    }
    100% {
      height: $start;
    }
  }
}
// 播放动画
.play-animation {
    width: 15px;
    height: 10px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    & > span {
      width: 3px;
      height: 10px;
      background-color: var(--theme-color);
      mix-blend-mode: multiply;
    }
    span:nth-child(1) {
      @include playLoad(4, 1, 1.5s, .4s)
    }
    span:nth-child(2) {
      @include playLoad(8, 2, 1.5s, .3s)
    }
    span:nth-child(3) {
      @include playLoad(5, 3, 1.5s, .2s)
    }
    span:nth-child(4) {
      @include playLoad(9, 4, 1.5s, .1s)
    }
    
  }
</style>