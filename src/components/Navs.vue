<template>
  <!-- <div> -->
    <h1 class="title" v-if="props.title">{{ props.title }}</h1>
    <div class="nav-wrapper">
      <el-scrollbar>
        <div class="nav">
          <div 
           v-for="item, index in props.list"
           :key="index"
           :class="['nav-item', {
            'nav-item-active': props.route ? (item.name === $route.name) : (index === currentIndex)
            }]"
           @click="onClickNav(item, index)" 
           >
            {{ item.title }}{{ item.len }}
          </div>
        </div>
      </el-scrollbar>
    </div>
  <!-- </div> -->
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const props = defineProps<{
  title?: string
  list?: any[]
  route?: boolean
}>()
const emits = defineEmits<{
  (n: 'click-nav-item', navItem: any, index: number): void
}>()
const currentIndex = ref(0)

const onClickNav = (item: any, index: any) => {
  // 记录组件内的索引
  currentIndex.value = index
  emits('click-nav-item', item, index)
}
</script>

<style scoped lang="scss">
.title {
  height: $title-height;
  line-height: $title-height;
}
/* 分类导航 */
.nav-wrapper {
  user-select: none;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;

  width: 100%;
  padding-bottom: 1px;
  margin: 16px 0 0;
  background-color: var(--right-bg);
}
.nav {
  box-sizing: border-box;
  display: flex;
  height: $nav-height;
  padding: 12px 0;
  background-color: var(--right-bg);
  .nav-item {
    flex-shrink: 0;
    position: relative;
    font-size: 14px;
    letter-spacing: 1px;
    margin-right: 54px;
    &:hover {
      cursor: pointer;
      color: var(--theme-color);
    }
    &.nav-item-active {
      color: var(--theme-color);
    }
    &.nav-item-active::after {
      position: absolute;
      bottom: 0;
      left: 50%;
      margin-left: -12px;

      content: "";
      width: 24px;
      height: 3.5px;
      border-radius: 999px;
      background-color: var(--theme-color);
    }
  }
}
</style>