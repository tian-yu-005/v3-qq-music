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

const diantai = [
  {
    type: '热门',
    list: [
      { imgSrc: '/src/assets/img/diantai/a1.png', title: '随心听' },
      { imgSrc: '/src/assets/img/diantai/a2.png', title: '抖音神曲' },
      { imgSrc: '/src/assets/img/diantai/a3.png', title: '深度催眠' },
      { imgSrc: '/src/assets/img/diantai/a4.png', title: '情感治愈站' },
      { imgSrc: '/src/assets/img/diantai/a5.png', title: 'KTV必点歌' },
      { imgSrc: '/src/assets/img/diantai/a6.png', title: '经典' },
      { imgSrc: '/src/assets/img/diantai/a7.png', title: '网络流行' },
      { imgSrc: '/src/assets/img/diantai/a8.png', title: '热门翻唱' },
      { imgSrc: '/src/assets/img/diantai/a9.png', title: '助眠白噪音' },
      { imgSrc: '/src/assets/img/diantai/a10.png', title: '热歌' },
      { imgSrc: '/src/assets/img/diantai/a11.png', title: '精选招牌歌' },
      { imgSrc: '/src/assets/img/diantai/a12.png', title: '平静' },
      { imgSrc: '/src/assets/img/diantai/a13.png', title: '车载' },
      { imgSrc: '/src/assets/img/diantai/a14.png', title: '情歌' }
    ]
  },
  {
    type: '主题',
    list: [
      { imgSrc: '/src/assets/img/diantai/c1.png', title: '国漫原生' },
      { imgSrc: '/src/assets/img/diantai/c2.png', title: '经典日漫' },
      { imgSrc: '/src/assets/img/diantai/c3.png', title: '日漫新番' },
      { imgSrc: '/src/assets/img/diantai/c4.png', title: '综艺' }
    ]
  },
  {
    type: '曲风',
    list: [
      { imgSrc: '/src/assets/img/diantai/b1.png', title: '欧美流行' },
      { imgSrc: '/src/assets/img/diantai/b2.png', title: '电音' },
      { imgSrc: '/src/assets/img/diantai/b3.png', title: '流行' },
      { imgSrc: '/src/assets/img/diantai/b4.png', title: '古风' },
      { imgSrc: '/src/assets/img/diantai/b5.png', title: '民谣' }
    ]
  }
] as any[]
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