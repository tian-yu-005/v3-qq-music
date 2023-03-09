<template>
  <!-- 标签 -->
  <el-row :gutter="12">
    <template v-for="item in tags">
      <el-col :sm="4" :xs="6">
        <div class="tag-item">{{ item.tag }}</div>
      </el-col>
    </template>
  </el-row>
  <!-- 精选歌单 -->
  <Title title="精选歌单" :hidden-link="true"></Title>
  <el-row :gutter="20">
    <template v-for="item in categoryList">
      <el-col :lg="4" :span="6">
        <SongCard 
         :data="item"
         :sub-title="item.user"
         style="margin-bottom: 26px;"
         />
      </el-col>
    </template>
  </el-row>
</template>

<script lang="ts" setup>
import Title from '@/components/Title.vue'
import SongCard from '@/components/SongCard.vue'
import { categoryList } from '@/data/musichome'

const tags = [
  { tag: '全部' },
  { tag: '官方歌单' },
  { tag: '流行' },
  { tag: '说唱' },
  { tag: '国风' },
  { tag: '轻音乐' },
  { tag: '摇滚' },
  { tag: '私藏' },
  { tag: '电子' }
]
</script>

<style scoped lang="scss">
.tag-item {
  user-select: none;
  font-size: 13px;
  line-height: 34px;
  border-radius: 4px;
  text-align: center;
  margin-bottom: 12px;
  background-color: var(--progress-bg);
  &:hover {
    cursor: pointer;
    color: var(--theme-color);
    background-color: var(--aside-item-hover-bg);
  }
}
</style>