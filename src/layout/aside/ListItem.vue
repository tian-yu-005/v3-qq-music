<template>
  <!-- contextMenu 右键 -->
  <!-- 开启右键编辑 -->
  <template v-if="props.contextMenu">
    <el-popover :width="170" trigger="contextmenu" :hide-after="0" transition="linear">
      <template #default>
        <!-- 自定义右键菜单 -->
        <slot name="context-menu" />
      </template>
      <template #reference>
        <!-- 图标 + 文字 -->
        <div :class="['list-item', {
         'active': route.path.includes(props.data[props.prop!])
         }]" 
         @click="emits('click-list-item', props.data)"
         >
          <i v-if="props.data.icon" :class="`iconfont ${ props.data.icon }`" :style="{ 'font-size': props.data.size }" />
          <span class="text">{{ props.data.title }}</span>
          <!-- 播放动画 -->
          <PlayAnimation class="PlayAnimation" v-if="props.showAnimation" />
        </div>
      </template>
    </el-popover>
  </template>
  <!-- contextMenu 右键 -->
  <!-- 关闭右键编辑 -->
  <template v-else>
    <!-- 图标 + 文字 -->
    <div :class="['list-item', {
     'active': route.path.includes(props.data[props.prop!])
     }]" 
     @click="emits('click-list-item', props.data)"
     @contextmenu.prevent
     >
      <i v-if="props.data.icon" :class="`iconfont ${ props.data.icon }`" />
      <span class="text">{{ props.data.title }}</span>
      <!-- 播放动画 -->
      <PlayAnimation class="PlayAnimation" v-if="props.showAnimation" />
    </div>
  </template>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'

const PlayAnimation = defineAsyncComponent(() => import('./PlayAnimation.vue'))

const props = defineProps<{
  data?: any
  prop?: string
  /**
   * 开启播放动画
   */
  showAnimation?: boolean
  /**
   * 开启右键编辑
   */
   contextMenu?: boolean
}>()
const emits = defineEmits<{
  (n: 'click-list-item', songlist: any): void
}>()
const route = useRoute()
</script>

<style scoped lang="scss">
.list-item {
  position: relative;
  margin: 12px 25px;
  padding-left: 10px;
  padding-right: 20px;
  height: 34px;
  line-height: 34px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  .iconfont {
    margin-right: 7px;
    font-size: 24px;
  }
  // 
  .text {
    font-size: 13.5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  // 动画组件
  .PlayAnimation {
    position: absolute;
    right: 12px;
    top: 13px;
  }
  &:hover {
    cursor: pointer;
    background-color: var(--aside-item-hover-bg);
  }
  &.active {
    background-color: var(--theme-color);
    color: #ebebeb;
  }
}
</style>