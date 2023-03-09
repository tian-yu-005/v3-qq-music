<template>
  <!-- 各类榜单 -->
  <el-row style="margin-top: 10px;">
    <el-col v-for="item in rank"
     :lg="8" :sm="12" 
     class="col"
    >
      <div class="item">
        <!-- 左边 -->
        <SongCard 
         class="song-card" 
         :data="item"
         :hidden-desc="true" 
         :close-transform="true"
         />
        <!-- 右边 -->
        <div class="rank-text">
          <h3>{{ item.type }}</h3>
          <p>1 {{ item.list[0] }}</p>
          <p>2 {{ item.list[1] }}</p>
          <p>3 {{ item.list[2] }}</p>
        </div>
      </div>
    </el-col>
  </el-row>

  <!-- 地区榜  全球榜 -->
  <template v-for="key in Object.keys(rank_all)">
    <Title :title="rank_all[key].title" :hidden-link="true" />
    <el-row :gutter="20">
      <template v-for="val in rank_all[key].rank">
        <el-col :lg="4" :sm="6" :xs="8">
          <SongCard 
            class="song-card-2"
            :data="val"
            :hidden-desc="true" 
            />
        </el-col>
      </template>
    </el-row>
  </template>
</template>

<script lang="ts" setup>
import SongCard from '@/components/SongCard.vue'
import Title from '@/components/Title.vue'
import { rank, rank_all } from '@/data/rank'

</script>

<style scoped lang="scss">
$song-card-w: 150px;
.col {
  padding-right: 20px;
  margin-bottom: 20px;
  transition: all .3s;
  &:hover {
    transform: translateY(-8px);
  }
}
.item {
  // border: 3px solid blue;
  display: flex;
  border-radius: 8px;
  background-color: var(--progress-bg);
  .song-card {
    flex-shrink: 0;
    width: $song-card-w;
    height: $song-card-w;
    // border: 2px solid red;
  }
  .rank-text {
    padding: 10px 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    // border: 2px solid green;
    width: calc(100% - $song-card-w - 32px); /* 2 * 16px 内边距 */
    h3 {
      font-size: 19px;
    }
    p {
      color: var(--font-color-shallow);
      font-size: 13px;

      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  &:hover {
    cursor: pointer;
  }
}
.song-card-2 {
  max-height: 150px;
  margin-bottom: 24px;
  height: 100%;
}
</style>