<template>
  <div class="song-btn2">
    <el-button 
      class="btn" round
      color="rgb(240, 240, 240)"
      >
      <i class="iconfont icon-duoxuan" /> &nbsp;
      <span>批量操作</span>
    </el-button>
    <div 
     v-if="!show" 
     class="search-btn" 
     @click="showSearch"
     >
      <el-icon > <component is="Search"></component> </el-icon>
      <span>搜索</span>
    </div>
     
    <Transition>
      <SongSearch v-if="show" @cancel="closeSearch" />
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import SongSearch from '@/components/SongSearch.vue'
const show = ref(false)
const showSearch = () => {
  show.value = true
}
const closeSearch = () => {
  show.value = false
}
</script>

<style scoped lang="scss">
.song-btn2 {
  padding: 10px 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btn {
  width: 114px;
  span {
    font-size: 13.5px;
  }
}
.search-btn {
  display: flex;
  align-items: center;
  font-size: 13.5px;
  border-radius: 3px;
  padding: 6px 10px;
  span {
    margin-left: 5px;
  }
  &:hover {
    cursor: pointer;
    background-color: rgb(218, 218, 218);
  }
}
</style>