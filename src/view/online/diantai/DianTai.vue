<template>
  <Scroll class="scroll-main">
    <!-- 播放器 -->
    <Player class="player"/>

    <br>
    <!-- 多层数据遍历 -->
    <template v-for="item in diantai">
      <Title :title="item.type" :hidden-link="true" />
      <div class="grid">
        <template v-for="val in item.list">
          <div class="grid-item">
            <SongCard 
             :data="val"
             :hidden-slot="true"
             />
            </div>
        </template>
      </div>
    </template>
  </Scroll>
</template>

<script lang="ts" setup>
import Scroll from '@/components/Scroll.vue'
import Player from '@/components/Player.vue'
import Title from '@/components/Title.vue'
import SongCard from '@/components/SongCard.vue'
import { diantai } from '@/data/diantai'

</script>

<style scoped lang="scss">
.scroll-main {
  height: $scroll-main;
}
.player {
  width: 370px;
  height: 170px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
}


@media screen and (max-width: 1339px) {
  .grid {
    grid-template-columns: repeat(5, 1fr);
  }
}
@media screen and (max-width: 1179px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>