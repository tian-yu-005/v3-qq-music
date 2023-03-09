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
// 歌单
interface IRank {
  imgSrc: string
  playerCount: string
}
interface IRankAll {
  [n: string]: {
    title: string
    rank: IRank[]
  }
}

const rank = [
  { imgSrc: '/src/assets/img/music-home/rank/a1.png', playerCount: '1863.4万', type: '飙升榜', list: ['花好月圆夜- Lil Ghost小鬼', '听- 张杰', '乌梅子酱- 李荣浩'] },
  { imgSrc: '/src/assets/img/music-home/rank/a2.png', playerCount: '1990.0万', type: '热歌榜', list: ['乌梅子酱- 李荣浩', '就让这大雨全部落下- 容祖儿', '偏爱- 张芸京'] },
  { imgSrc: '/src/assets/img/music-home/rank/a3.png', playerCount: '13.3万', type: '新歌榜', list: ['循迹- 王子健', '是妈妈是女儿- 黄绮珊/希林娜依高', '谁- 肖曲冰'] },
  { imgSrc: '/src/assets/img/music-home/rank/a4.png', playerCount: '795.3万', type: '流行指数榜', list: ['乌梅子酱- 李荣浩', '我们的歌- 王力宏', '谁- 肖曲冰'] },
  { imgSrc: '/src/assets/img/music-home/rank/a5.png', playerCount: '140.3万', type: '喜力电音榜', list: ['冰川之泪 Tears from the lce River- 考拉kora', 'Best Gift- HoworD', 'Starlight- Drenchill/Jorik Burema'] },
  { imgSrc: '/src/assets/img/music-home/rank/a6.png', playerCount: '11.2万', type: '腾讯音乐人原创榜', list: ['怀旧金曲之页', '循迹- 王子健', '1987（Band）- 厌想'] },
  { imgSrc: '/src/assets/img/music-home/rank/a7.png', playerCount: '305.0万', type: '听歌识曲榜', list: ['回忆观影券- IN-K/王忻辰', '爱如火- 那艺娜', '我记得- 赵雷'] },
  { imgSrc: '/src/assets/img/music-home/rank/a8.png', playerCount: '145.0万', type: 'MV榜', list: ['乌梅子酱- 李荣浩', '花开忘忧- 周深', '부석순 (SEVENTEEN)- BSS/李泳知'] }
] as any[]

const rank_all = {
  'place': {
    title: '地区榜',
    rank: [
      { imgSrc: '/src/assets/img/music-home/rank/b1.png', playerCount: '140.9万' },
      { imgSrc: '/src/assets/img/music-home/rank/b2.png', playerCount: '91.7万' },
      { imgSrc: '/src/assets/img/music-home/rank/b3.png', playerCount: '43.2万' },
      { imgSrc: '/src/assets/img/music-home/rank/b4.png', playerCount: '194.0万' },
      { imgSrc: '/src/assets/img/music-home/rank/b5.png', playerCount: '181.7万' },
      { imgSrc: '/src/assets/img/music-home/rank/b6.png', playerCount: '52.7万' }
    ]
  },
  'world': {
    title: '全球榜',
    rank: [
      { imgSrc: '/src/assets/img/music-home/rank/c1.png', playerCount: '197.0万' },
      { imgSrc: '/src/assets/img/music-home/rank/c2.png', playerCount: '191.9万' },
      { imgSrc: '/src/assets/img/music-home/rank/c3.png', playerCount: '52.2万' },
      { imgSrc: '/src/assets/img/music-home/rank/c4.png', playerCount: '42.1万' },
      { imgSrc: '/src/assets/img/music-home/rank/c5.png', playerCount: '26.8万' },
      { imgSrc: '/src/assets/img/music-home/rank/c6.png', playerCount: '41.5万' },
      { imgSrc: '/src/assets/img/music-home/rank/c6.png', playerCount: '35.5万' },
      { imgSrc: '/src/assets/img/music-home/rank/c6.png', playerCount: '53.2万' }
    ]
  }
} as any
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