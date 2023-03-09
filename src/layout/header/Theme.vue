<template>
  <!-- 换肤 -->
  <div>
    <el-popover placement="right" :width="300" trigger="click">
      <template #reference>
        <i class="iconfont icon-pifu" style="color: gray;" />
      </template>
      <el-button size="large" :plain="true" color="#5cd4b4" @click="toggleTheme(1)">默认</el-button>
      <el-button size="large" :plain="true" color="rgb(255, 177, 60)" @click="toggleTheme(2)">橘色</el-button>
    </el-popover>
  </div>
</template>

<script lang="ts" setup>
import { useColorMode } from '@vueuse/core'
// 颜色模式
const mode = useColorMode({
  modes: {
    normal: '',
    orange: 'orange'
  }
})
// 切换主题按钮
function toggleTheme(type: number) {
  if(type === 1) {
    mode.value = 'normal'
  } else if(type === 2) {
    mode.value = 'orange'
  }
}
</script>

<style scoped>
.iconfont:hover {
  cursor: pointer;
  color: var(--theme-color) !important;
}
</style>