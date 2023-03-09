<template>
  <div class="search-wrapper">
    <input 
     ref="input"
     type="text" 
     class="search" 
     @focus="isFoucs = true"
     >
    <!-- focus 显示 -->
    <el-icon 
     v-if="isFoucs" 
     size="14" 
     class="search-icon"
     @click="emits('cancel')"
     ><Close /></el-icon>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
const emits = defineEmits<{
  (n: 'cancel'): void
}>()
const input = ref()
const isFoucs = ref(false)
onMounted(() => {
  input.value.focus()
})
</script>

<style scoped lang="scss">
.search-wrapper {
  position: relative;
  min-width: 160px;
  flex-basis: 20%;
}
.search {
  box-sizing: border-box;
  // display: block;
  border: none;
  outline: none;
  width: 100%;
  padding: 7px 26px 7px 15px;
  
  border-radius: 999px;
  background-color: rgb(231, 231, 231);
  &::placeholder {
    font-size: 12px;
    padding-left: 26px;
    color: rgb(160, 160, 160);
    letter-spacing: 1px;
  }
  &:focus::placeholder {
    color: transparent;
  }
}
.search-icon {
  position: absolute;
  top: 8px;
  right: 9px;
  color: gray;
  z-index: 2;

  &:hover {
    color: var(--theme-color);
    cursor: pointer;
  }
}
</style>