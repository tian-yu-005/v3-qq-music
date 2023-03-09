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

const categoryList = [
  { imgSrc: '/src/assets/img/music-home/category-list/a1.png', playerCount: '1329.7万', title: '90后粤语：越成长越懂歌词', user: '越夜粤冷' },
  { imgSrc: '/src/assets/img/music-home/category-list/a2.png', playerCount: '75.4万',   title: '抖音热歌 | 火爆全网超好听', user: '泽其' },
  { imgSrc: '/src/assets/img/music-home/category-list/a3.png', playerCount: '37.4万',   title: '日系萌嗓！可爱预警，指数已爆表', user: '永远喜欢酒伴仙' },
  { imgSrc: '/src/assets/img/music-home/category-list/a4.png', playerCount: '75.1万',   title: '情窦初开 | 想要甜甜的恋爱', user: '安可' },
  { imgSrc: '/src/assets/img/music-home/category-list/a5.png', playerCount: '115.1万',  title: '治愈英语歌｜温柔的灵魂终将相遇', user: 'ৡৢ落 尘ৡৢ' },
  { imgSrc: '/src/assets/img/music-home/category-list/a6.png', playerCount: '69.1万',   title: '前奏秒杀 • 让你循环的纯音', user: 'Catch丶秋' },
  { imgSrc: '/src/assets/img/music-home/category-list/a7.png', playerCount: '237.4万',  title: '值得收藏的100首华语好歌', user: '柳云歌' },
  { imgSrc: '/src/assets/img/music-home/category-list/a8.png', playerCount: '75.4万',   title: '偷心盗贼！抖音最火女声歌曲', user: '星野一' },
  { imgSrc: '/src/assets/img/music-home/category-list/a9.png', playerCount: '37.4万',   title: '你中学时代用过哪句歌词写情书？', user: 'Mandy from SANLITUNER' },
  { imgSrc: '/src/assets/img/music-home/category-list/a10.png', playerCount: '75.1万',  title: '欧美粉必听！收藏过百万热歌全集', user: '星野一' },
  { imgSrc: '/src/assets/img/music-home/category-list/a11.png', playerCount: '115.1万', title: '100+车载英文歌 : 来，跟着唱', user: '✧𝗆𝗂𝗌𝗌小梨ꦿ᭄࿐' },
  { imgSrc: '/src/assets/img/music-home/category-list/a12.png', playerCount: '69.1万',  title: '神仙打架！一人一首歌，唱入心扉', user: '反派大魔王' },
  { imgSrc: '/src/assets/img/music-home/category-list/a13.png', playerCount: '115.1万', title: '甜度爆表│甜甜的恋爱，我也想要', user: '枯萎的花' },
  { imgSrc: '/src/assets/img/music-home/category-list/a14.png', playerCount: '69.1万',  title: '港乐流行歌，“粤”听“粤”钟意', user: '反派大魔王' },
] as any[]
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