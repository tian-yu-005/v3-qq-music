<template>
  <el-scrollbar v-bind="$attrs" always @scroll="scroll">
    <div class="scroll-wrapper">
      <slot></slot>
    </div>

    <!-- 置顶 -->
    <button class="backTop" @click="backTop" v-if="show">
      <el-icon size="16"><ArrowUp /></el-icon>
    </button>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const show = ref(false)
function backTop() {
  document.querySelector('.scroll-wrapper')!.scrollIntoView({ behavior: 'smooth' })
}
function scroll({ scrollTop }: any) {
  if(scrollTop >= 50) show.value = true
  else show.value = false
}
</script>

<style scoped lang="scss">
.scroll-wrapper {
  padding: 0 36px;
}
.backTop {
  position: fixed; 
  right: 30px; 
  bottom: 100px;
  z-index: 50;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px;
  border: 1px solid rgb(184, 184, 184);
  color: rgb(184, 184, 184);
  background-color: #fff;
  border-radius: 1px;
  opacity: .8;
  &:hover {
    cursor: pointer;
    color: var(--theme-color);
    border-color: var(--theme-color);
  }
}
</style>