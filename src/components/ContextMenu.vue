<template>
  <div class="menu">
    <template v-for="item in $props.list">
      <!-- 禁用的样式 -->
      <template v-if="item.disable">
        <div :class="['menu-item', { 'disable': item.disable }]">
          <i v-if="item.icon" :class="`icon iconfont ${ item.icon }`"
           />
          <span class="text">{{ item.text }}</span>
        </div>
      </template>
      <!-- 启用 -->
      <template v-else>
        <div class="menu-item" @click="$emit('click-item', item)" :title="item.text">
          <i v-if="item.icon" :class="`icon iconfont ${ item.icon }`"
           />
          <span class="text">{{ item.text }}</span>
        </div>
      </template>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { ISongList } from '@/types/ISong'
defineProps<{
  /** 列表显示的数据 */
  list: any
}>()
defineEmits<{
  (n: 'click-item', item: any, songlist?: ISongList): void
}>()

</script>

<style scoped lang="scss">
.menu {
  user-select: none;
  margin: 0 -12px;
}
.menu-item {
  position: relative;
  display: flex;
  align-items: center;
  padding: 7px 7px 7px 44px;

  .icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 12px;

    font-size: 16px;
  }
  .text {
    color: #000;
    font-size: 13px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &:hover {
    cursor: pointer;
    background-color: var(--aside-item-hover-bg);
  }
}
// 菜单禁用状态
.disable {
  .text {
    color: rgba($color: #747474, $alpha: 1.0);
  }
  &:hover {
    cursor: default;
    background-color: transparent;
  }
}
</style>