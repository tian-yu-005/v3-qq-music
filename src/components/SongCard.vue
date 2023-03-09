<template>
  <div class="card-wrapper">
    <!-- 框框 -->
    <div :class="['card', {
     'hover-transform': !$props.closeTransform
     }]"
     >
      <img :src="$props.data?.imgSrc" alt="" >
      <!-- 自定义内容 -->
      <div class="slot" v-if="!$props.hiddenSlot">
        <el-icon size="14"><Headset /></el-icon>
        <span class="slot-text">{{ $props.data?.playerCount }}</span>
      </div>
      <!-- 播放按钮 -->
      <div class="mask" @click.self="push($props.data!)">
        <i 
         class="play iconfont icon-play" 
         title="播放该歌单" 
         @click="play($props.data!)"
         />
      </div>
      <div class="total" v-if="$props.total">
        {{ $props.total + '首' }}
      </div>
    </div>
    <!-- 描述文字 -->
    <div class="card-description" v-if="$props.data?.title" @click="push($props.data!)">
      <span>{{ $props.data?.title }}</span>
    </div>
    <!-- 副文本 -->
    <div class="card-subheading" v-if="$props.subTitle">
      <span>{{ $props.subTitle }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import type { ISongList } from '@/types/ISong'
import { usePlayerStore } from '@/store/player/player'
const playerStore = usePlayerStore()
defineProps<{
  data?: ISongList

  closeTransform?: boolean
  hiddenSlot?: boolean
  subTitle?: string

  total?: string
}>()
const router = useRouter()
// 点击跳转 歌单详情
const push = (item: ISongList) => {
  if(item.id) {
    router.push({ path: '/songDetail/' + item.id })
  }
}
// 通过歌单进行的播放
function play(data: ISongList) {
  if(!data.list || data.list.length === 0) return alert('该歌单没有数据')

  playerStore.onDblChange(data.list[0], data.list)
}
</script>

<style scoped lang="scss">
// 显示播放按钮
.mask {
  display: none;
  justify-content: center;
  align-items: center;
  
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: rgba($color: #000000, $alpha: .5);
  .play {
    font-size: 58px;
    color: #fff;
    &:hover {
      color: var(--theme-color);
    }
  }
}
// 播放量
.slot {
  position: absolute;
  bottom: 10px;
  right: 8px;

  display: flex;
  align-items: center;

  padding: 4px 12px;
  border-radius: 999px;
  color: #fff;
  background-color: rgba($color: #000000, $alpha: .8);
  .slot-text {
    font-size: 12px;
    margin-left: 3px;
  }
}
.card {
  // border: 1px solid red;
  position: relative;
  border-radius: 8px;
  height: 100%;
  transition: all .3s;
  &:hover {
    cursor: pointer;
    &.hover-transform {
      transform: translateY(-8px);
    }
    .mask {
      display: flex;
    }
    .slot {
      display: none;
    }
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: inherit;
    // border: 1px solid red;
  }
}
// 描述文本
.card-description,
.card-subheading {
  word-break: break-all; // 单词拆分换行
  font-size: 13px;
  line-height: 21px;
  span:hover {
    cursor: pointer;
    color: var(--theme-color);
  }
}
.card-description {
  max-width: 185px;
  margin-top: 10px;
}
.card-subheading {
  color: var(--font-color-shallow);
}

.total {
  position: absolute;
  left: 12px;
  bottom: 16px;
  color: #fff;
}
</style>