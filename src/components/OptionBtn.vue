<template>
  <!-- :style="wrapperHeight" -->
  <div class="optionbtn-wrapper" >
    <template v-for="item in props.icons">
      <!-- 播放按钮 有 2 种状态 -->
      <template v-if="item.type === 'play-one'">
        <i 
         :class="['iconfont', props.isPlayClass]" 
         @click="$emit('click-icon', item)"
         />
      </template>
      <!-- 我喜欢按钮 有 2 种状态 -->
      <template v-else-if="item.type === 'love'">
        <i 
         :class="['iconfont', props.isLoveClass]" 
         @click="$emit('click-icon', item)"
         />
      </template>
      <!-- 添加按钮 有菜单 -->
      <template v-else-if="item.type === 'add'">
        <!-- 判断是否有登录 -->
        <template v-if="props.isLogin">
          <el-popover :width="170" trigger="click" :hide-after="0" transition="linear">
            <template #default>
              <slot name="add-menu"  />
            </template>
            <template #reference>
              <i :class="`iconfont ${ item.icon }`" @click="$emit('click-icon', item)" />
            </template>
          </el-popover>
        </template>
        <template v-else>
          <i :class="`iconfont ${ item.icon }`" @click="$emit('click-icon', item)" />
        </template>
        
      </template>
      <!-- 更多操作 有菜单 -->
      <template v-else-if="item.type === 'more'">
        <el-popover :width="170" trigger="click" :hide-after="0" transition="linear">
          <template #default>
            <slot name="more-menu" />
          </template>
          <template #reference>
            <i :class="`iconfont ${ item.icon }`" @click="$emit('click-icon', item)" />
          </template>
        </el-popover>
      </template>
      <!-- 其余只有一种 -->
      <template v-else>
        <i 
         :class="`iconfont ${ item.icon }`" 
         @click="$emit('click-icon', item)"
         />
      </template>
    </template>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  height?: number
  icons?: {
    icon: string
    text: string
    type: string
  }[]
  isLogin?: boolean
  /** 播放 / 暂停 图标类名 */
  isPlayClass?: string
  /** 满心 / 空心 图标类名 */
  isLoveClass?: string
}>()
defineEmits<{
  /**
   * @param IconBtn 按钮数据
   */
  (n: 'click-icon', IconBtn: any): void
}>()
</script>

<style scoped lang="scss">
.iconfont {
  font-size: 18px;
  color: var(--font-color-shallow);
  &:hover {
    cursor: pointer;
    color: var(--theme-color) !important;
  }
  // 空心
  &.icon-aixin:hover {
    color: orangered !important;
  }
  // 满心
  &.icon-w_aixin {
    color: orangered;
    opacity: .8;
    &:hover {
      color: orangered !important;
      opacity: 1;
    }
  }
}
.optionbtn-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;

  user-select: none;
  width: 100px;
  height: 32px;
  padding: 0 8px;
}
</style>