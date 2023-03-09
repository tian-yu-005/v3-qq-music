<template>
  <div class="header">
    <!-- 回退-前进 -->
    <div class="pre-next">
      <el-icon class="icon" @click="$router.go(-1)"><ArrowLeft /></el-icon>
      <el-icon class="icon" @click="$router.go(1)"><ArrowRight /></el-icon>
    </div>
    <!-- 搜索框 -->
    <SearchWrapper />
    <!-- 用户头像 -->
    <User style="margin-left: auto;" />
    <!-- 换肤 -->
    <Theme style="margin-left: 20px;" />
  </div>
</template>

<script lang="ts" setup>
import User from './User.vue'
import Theme from './Theme.vue'
import SearchWrapper from './SearchWrapper.vue'
</script>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
}
// 历史
.pre-next {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-basis: 55px;
  margin-right: 20px;
  .icon {
    font-size: 18px;
    color: var(--font-color-shallow);
    &:hover {
      color: var(--theme-color);
      cursor: pointer;
    }
  }
}
</style>