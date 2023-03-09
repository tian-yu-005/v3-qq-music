<template>
  <div class="search-wrapper">
    <!-- 搜索框 -->
    <input 
     class="search" 
     type="text" 
     aria-autocomplete="none"
     v-model="searchValue" 
     @input="$emit('update:val', searchValue)"
     @focus.prevent="$emit('onFocus')"
     @blur="$emit('onBlur')"
     >
    <!-- 搜索图标 -->
    <el-icon size="14" class="search-icon"><Search /></el-icon>
    <div class="result-wrapper">
      <!-- 搜索结果 -->
      <slot />
    </div>
  </div>

</template>

<script lang="ts" setup>
import { ref } from 'vue'

defineProps<{
  val?: string
}>()
defineEmits<{
  (n: 'update:val', newValue: string): void
  (n: 'onFocus'): void
  (n: 'onBlur'): void
}>()
const searchValue = ref('')

</script>

<style scoped lang="scss">
.search-wrapper {
  position: relative;
  min-width: 160px;
  flex-basis: 20%;
}
// 搜索框
.search {
  box-sizing: border-box;
  border: none;
  outline: none;
  width: 100%;
  padding: 7px 26px 7px 15px;
  font-size: 14px;
  border-radius: 999px;
  background-color: var(--progress-bg);
}
// 搜索图标
.search-icon {
  position: absolute;
  top: 8px;
  right: 9px;
  // color: gray;
  color: var(--font-color-shallow);
  z-index: 2;
  &:hover {
    color: var(--theme-color);
    cursor: pointer;
  }
}
// 搜索结果
.result-wrapper {
  position: absolute;
  top: 32px;
  z-index: 200;
}
</style>