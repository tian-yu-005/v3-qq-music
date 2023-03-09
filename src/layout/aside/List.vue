<template>
  <div class="list" @contextmenu.prevent>
    <!-- openPanel 面板 -->
    <!-- 默认带有类标题 -->
    <div class="item tag-title" v-if="props.title && !props.openPanel">{{ props.title }}</div>
    <!-- openPanel 面板 -->
    <!-- 创建的歌单，操作按钮 -->
    <div class="item songlist" v-if="props.openPanel">
      <span class="hover" style="margin-right: auto;" @click="toggleState()">{{ props.title }}</span>
      
      <el-icon 
       v-if="!props.hiddenAdd"
       class="hover" size="16" color="#444" 
       title="新建歌单"
       @click="add()"
       ><Plus /></el-icon>
      
      <el-icon class="hover" size="16" style="margin-left: 9px;"
       :title="state ? '收起' : '展开'"
       @click="toggleState()"
       >
        <ArrowUpBold v-if="state" />
        <ArrowDownBold v-else />
      </el-icon>
    </div>

    <!-- 标签导航 -->
    <div class="group-wrapper" v-show="state">
      <!-- openPanel 面板 -->
      <!-- 用于添加 自定义歌单 -->
      <input 
       v-if="isEdit"
       ref="input"
       type="text" 
       class="item input" 
       v-model="inputValue"
       @blur="obBlur()"
       >
        <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, nextTick } from 'vue'
import { useLoginStore } from '@/store/login/login'
import { ISongList } from '@/types/ISong'

const loginStore = useLoginStore()

const props = defineProps<{
  title?: string
  /**
   * 开启面板功能（添加，折叠）
   */
  openPanel?: boolean
  hiddenAdd?: boolean
}>()
const emits = defineEmits<{
  (n: 'input-blur-add', inputValue: string): void
}>()

// 收起 展开
const state = ref(true)
const toggleState = () => state.value = !state.value
// 输入框
const isEdit = ref(false)
const input = ref<HTMLElement>()
// 双向绑定，初始值为一个递归的默认字符串（'新建歌单' + index）
const inputValue = ref(createName(loginStore.getCreateList))
// 递归返回默认的 `歌单名字`
function createName(data: ISongList[], i: number = 1): string {
  const has = data.some(item => item.title === '新建歌单' + i)
  return has ? createName(data, i + 1) : '新建歌单' + i
}
// 添加按钮
const add = () => {
  isEdit.value = true
  nextTick(() => {
    input.value?.focus()
  })
}
// 失焦回调
const obBlur = () => {
  // 回调添加歌单的事件
  emits('input-blur-add', inputValue.value)
  isEdit.value = false
  // 同步更新 inputValue
  inputValue.value = createName(loginStore.getCreateList)
}
</script>

<style scoped>
.list {
  user-select: none;
  margin-top: 20px;
}
/* 类标题 */
.tag-title {
  color: var(--font-color-shallow);
  font-size: 12px;
}
/* 创建歌单 */
.songlist {
  color: var(--font-color-shallow);
  font-size: 12px;
}
.songlist .hover:hover {
  cursor: pointer;
  color: #000;
}
.item {
  position: relative;
  margin: 12px 25px;
  padding-left: 10px;
  height: 34px;
  line-height: 34px;
  border-radius: 5px;
  display: flex;
  align-items: center;
}
.input {
  box-sizing: border-box;
  border-radius: 0;
  font-size: 13px;
  border: 1px solid gray;
  outline: none;
}
</style>