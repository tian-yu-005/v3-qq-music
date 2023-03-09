<template>
  <div>
    <!-- 开启折叠 -->
    <template v-if="props.isCollapse">
      <template v-for="item, index in props.data">
        <!-- <= 3 渲染 全部 -->
        <template v-if="!ishiddenBy_3">
          <el-button
           round
           style="width: 114px;"
           :type="btnStyle(index)[0]"
           :color="btnStyle(index)[1]"
           @click="$emit('click-btn', item)"
           >
            <i :class="`iconfont ${ item.icon }`" /> &nbsp;
            <span>{{ item.text }}</span>
          </el-button>
        </template>
        <!-- > 3 渲染 2 个 -->
        <template v-if="ishiddenBy_3 && index < 2">
          <el-button
            round
            style="width: 114px;"
           :type="btnStyle(index)[0]"
           :color="btnStyle(index)[1]"
           @click="$emit('click-btn', item)"
           >
            <i :class="`iconfont ${ item.icon }`" /> &nbsp;
            <span>{{ item.text }}</span>
          </el-button>
        </template>
      </template>
      <!-- 集合按钮 -->
      <el-dropdown trigger="click"  v-if="ishiddenBy_3" style="margin-left: 12px;">
        <el-button icon="MoreFilled" circle color="rgb(240, 240, 240)"/>
        <template #dropdown>
          <el-dropdown-menu>
            <template v-for="item, index in props.data">
              <!-- >= 3 的部分收起 -->
              <el-dropdown-item v-if="index >= 2" @click="$emit('click-btn', item)">
                <i :class="`iconfont ${ item.icon }`" /> &nbsp;
                <span>{{ item.text }}</span>
              </el-dropdown-item>
            </template>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </template>
    <!-- 不折叠 -->
    <template v-else>
      <template v-for="item, index in props.data">
        <el-button 
         round
         style="width: 114px;"
         :type="btnStyle(index)[0]"
         :color="btnStyle(index)[1]"
         @click="$emit('click-btn', item)"
         >
          <i :class="`iconfont ${ item.icon }`" /> &nbsp;
          <span>{{ item.text }}</span>
        </el-button>
      </template>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
const props = defineProps<{
  isCollapse?: boolean
  data?: {
    type?: string
    icon: string
    text: string
  }[]
}>()
defineEmits<{
  (n: 'click-btn', item: any): void
}>()
const btnStyle = computed(() => {
  return (index: any) => {
    return [
      index === 0 ? 'primary' : '',
      index === 0 ? '' : 'rgb(240, 240, 240)'
    ] as any
  }
})
const ishiddenBy_3 = computed(() => {
  return props.data?.length! > 3
})
</script>

<style scoped>
.iconfont {
  font-size: 18px;
}
.iconfont ~ span {
  font-size: 13.2px;
}
</style>