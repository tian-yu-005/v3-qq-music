<template>
  <!-- 图片 -->
  <Row>
    <Col><img src="/src/assets/img/music-home/jingxuan/a1.png" alt=""></Col>
    <Col><img src="/src/assets/img/music-home/jingxuan/a2.png" alt=""></Col>
    <Col class="hidden-1339-and-down">
      <img src="/src/assets/img/music-home/jingxuan/a3.png" alt="">
    </Col>
  </Row>
  <!-- 官方歌单 -->
  <div style="margin-top: 14px;">
    <Title title="官方歌单" @click-link="a">
      <span class="subheading">官方甄选订阅歌单</span>
    </Title>
    <Row> 
      <template v-for="item, index in officialList">
        <Col :class="hiddenClass(index)">
          <SongCard :data="item"/> 
        </Col>
      </template>
    </Row>
  </div>
  <!-- 推荐有声电台 -->
  <div style="margin-top: 14px;">
    <Title title="推荐有声电台" @click-link="a"></Title>
    <Row> 
      <template v-for="item, index in hot_diantai">
        <Col :class="hiddenClass(index)">
          <SongCard :data="item"/> 
        </Col>
      </template>
    </Row>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import Title from '@/components/Title.vue'
import SongCard from '@/components/SongCard.vue'
import Row from '@/components/Row.vue'
import Col from '@/components/Col.vue'
import type { ISongList } from '@/types/ISong'
import { officialList } from '@/data/musichome'

const hot_diantai = [
  { imgSrc: '/src/assets/img/music-home/jingxuan/c1.png', playerCount: '52.7万', title: '频率FM' },
  { imgSrc: '/src/assets/img/music-home/jingxuan/c2.png', playerCount: '1.2万', title: '西方音乐历史漂亮指南' },
  { imgSrc: '/src/assets/img/music-home/jingxuan/c3.png', playerCount: '434.8万', title: '重生之人渣反派自救系统丨我也想好好过日子啊！' },
  { imgSrc: '/src/assets/img/music-home/jingxuan/c4.png', playerCount: '1734.6万', title: '活人禁忌|精品多人剧' },
  { imgSrc: '/src/assets/img/music-home/jingxuan/c5.png', playerCount: '616.5万', title: '巴啦啦小魔仙之魔法星缘堡梦幻主题曲' },
  { imgSrc: '/src/assets/img/music-home/jingxuan/c6.png', playerCount: '407.0万', title: '有问题，找一禅 | 解答你的情感疑惑' },
] as ISongList[]

// 第 4, 5 个需要响应式
const hiddenClass = computed(() => {
  return (index: number) => {
    return {
      'hidden-1179-and-down': index === 4,
      'hidden-1339-and-down': index === 5
    }
  }
})

function a() {
  alert('查看更多!')
}
</script>

<style scoped lang="scss">
img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  }
}
.subheading {
  font-size: 13px;
  color: rgb(158, 158, 158);
}
</style>