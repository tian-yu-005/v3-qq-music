<template>
  <Scroll class="scroll-main">
    <h1 class="title">推荐</h1>
    <!-- 其余内容 -->
    <div style="padding-bottom: 24px;">
      <Title :title="subtitle" />
      <!-- 今日推荐 -->
      <div class="grid-hot">
        <div class="grid-item">
          <div class="item">
            <Player />
          </div>
          <div class="text">个性电台</div>
        </div>
        <template v-for="item, index in hotlist">
          <div :class="['grid-item', hiddenClass(index)]">
            <div class="item">
              <SongCard 
               :data="item"
               :hiddenSlot="true"
               :closeTransform="true"
               style="height: 100%;" 
               />
            </div>
          </div>
        </template>
      </div>

      <br>
      <Title title="你的歌单宝藏库" />
      <div class="songlist">
        <template  v-for="item, index in hot_2">
          <div :class="['item', hiddenClass(index)]">
            <SongCard :data="item"/>
          </div>
        </template>
      </div>

      <!-- 大家都在听 -->
        <Title title="大家都在听" :hidden-link="true">
          <div class="play-all">
            <el-icon class="icon" size="22"><CaretRight /></el-icon>
            <span class="text">播放全部</span>
          </div>
        </Title>
        <div class="tuijian">
          <template v-for="item in hot_3">
            <SongPanel :data="item"/>
          </template>
        </div>
        
    </div>
  </Scroll>
</template>

<script lang="ts" setup>
import Title from '@/components/Title.vue'
import Player from '@/components/Player.vue'
import SongCard from '@/components/SongCard.vue'
import SongPanel from '@/components/SongPanel.vue'
import { computed } from 'vue'
import { useLoginStore } from '@/store/login/login'
import { hotlist, hot_2, hot_3 } from '@/data/hot'


const loginStore = useLoginStore()
const subtitle = computed(() => {
  if(loginStore.info.name === '点击登录') return '今日为你推荐'
  return `Hi ${ loginStore.info.name } 今日为你推荐`
})

// 第 3, 4 个需要响应式
const hiddenClass = computed(() => {
  return (index: number) => {
    return {
      'hidden-1179-and-down': index === 2,
      'hidden-1339-and-down': index === 3
    }
  }
})

</script>

<style scoped lang="scss">
$nav-height: 50px;
.scroll-main {
  height: $scroll-main;
}
.title {
  height: $nav-height;
  line-height: $nav-height;
}
.grid-hot {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  gap: 16px;
  .grid-item {
    position: relative;
    padding-bottom: 30px;
    // grid 布局
    overflow: hidden;
    .item {
      height: 100%;
      // word-wrap: break-word;
    }
    .text {
      position: absolute;
      bottom: 0;
      left: 0;
      font-size: 13.5px;
      &:hover {
        cursor: pointer;
        color: var(--theme-color);
      }
    }
  }
}


// 歌单
.songlist {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  // border: 1px solid red;
}
// 大家都在听
.play-all {
  display: flex;
  align-items: center;
  padding: 5px 14px 5px 7px;
  border-radius: 999px;
  color: #000;
  background-color: rgb(228, 228, 228);
  transition: all .2s;
  .text {
    font-size: 12.5px;
  }
  &:hover {
    cursor: pointer;
    background-color: rgb(224, 224, 224);
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

@media screen and (max-width: 1339px) {
  .grid-hot {
    grid-template-columns: 2fr 1fr 1fr 1fr;
  }
  .songlist {
    grid-template-columns: repeat(5, 1fr);
  }
}
@media screen and (max-width: 1179px) {
  .grid-hot {
    grid-template-columns: 2fr 1fr 1fr;
  }
  .songlist {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>