<template>
  <!-- 本周上新 -->
  <Title title="本周上新" :hidden-link="true" />
  <Row> 
    <template v-for="item, index in news">
      <Col :class="hiddenClass(index)">
        <SongCard :data="item"/> 
      </Col>
    </template>
  </Row>
  <!-- 各类标签 -->
  <div class="tag">
    <div class="tag-item" v-for="item in tags">
      <i :class="`icon iconfont ${ item.icon }`"></i>
      <span class="text">{{ item.text }}</span>
    </div>
  </div>
  <!-- 推荐节目 -->
  <div style="margin-top: 20px;">
    <Title title="推荐节目" :hidden-link="true">
      <div class="play-all">
        <el-icon class="icon" size="22"><CaretRight /></el-icon>
        <span class="text">播放全部</span>
      </div>
    </Title>
    <div class="tuijian">
      <template v-for="item in tuijian">
        <SongPanel :data="item"/>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import Title from '@/components/Title.vue'
import SongCard from '@/components/SongCard.vue'
import Row from '@/components/Row.vue'
import Col from '@/components/Col.vue'
import SongPanel from '@/components/SongPanel.vue'
import { tuijian } from '@/data/musichome'

const news = [
  { imgSrc: '/src/assets/img/music-home/sound-station/a1.png', title: '音乐日记' },
  { imgSrc: '/src/assets/img/music-home/sound-station/a2.png', title: '仙逆 | 男女双播 | 精品' },
  { imgSrc: '/src/assets/img/music-home/sound-station/a3.png', title: '音乐乐不了情' },
  { imgSrc: '/src/assets/img/music-home/sound-station/a4.png', title: '梨花剧场' },
  { imgSrc: '/src/assets/img/music-home/sound-station/a5.png', title: '365读书 | 每天一篇名家经典' },
  { imgSrc: '/src/assets/img/music-home/sound-station/a6.png', title: '一首歌曲一个故事' },
] as any[]
const tags = [
  { icon: 'icon-shu', text: '有声书' },
  { icon: 'icon-shouye', text: '儿童' },
  { icon: 'icon-yinle1', text: '音乐节目' },
  { icon: 'icon-aixin', text: '情感生活' },
  { icon: 'icon-zuichun', text: '脱口秀' },
  { icon: 'icon-dianshi', text: '综艺娱乐' },
  { icon: 'icon-youxiji', text: 'ACG' },
  { icon: 'icon-tushu', text: '人文历史' },
  { icon: 'icon-yanjing', text: '新闻资讯' }
]
// 第 4, 5 个需要响应式
const hiddenClass = computed(() => {
  return (index: number) => {
    return {
      'hidden-1179-and-down': index === 4,
      'hidden-1339-and-down': index === 5
    }
  }
})
</script>

<style scoped lang="scss">
.tag {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;

  user-select: none;
  margin-top: 50px;
}
.tag-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 74px;
  border-radius: 3px;
  background-color: var(--progress-bg);
  color: var(--font-color-shallow);
  .icon {
    font-size: 24px;
  }
  .text {
    font-size: 12px;
    margin-top: 7px;
    
  }
  &:hover {
    cursor: pointer;
    color: var(--theme-color);
    background-color: var(--aside-item-hover-bg);
  }
}
// 推荐节目
.play-all {
  display: flex;
  align-items: center;
  padding: 5px 14px 5px 7px;
  border-radius: 999px;
  color: #000;
  background-color: var(--progress-bg);
  transition: all .2s;
  .text {
    font-size: 12.5px;
  }
  &:hover {
    cursor: pointer;
    background-color: var(--aside-item-hover-bg);
  }
}
.tuijian {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  & > div {
    overflow: hidden;
  }
}
</style>