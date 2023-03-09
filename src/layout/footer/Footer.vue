<template>
  <!-- 滑块 -->
  <Slider 
    v-model:rang="val" 
    @drag-start="dragStart"
    @drag-end="dragEnd"
    />
  <!-- 信息 -->
  <div class="player-panel-wrapper">
    <div class="player-panel">
      <!-- 歌曲描述 -->
      <div class="detail">
        <div class="img" title="展开歌曲详情页">
          <img :src="playerStore.currentPlaySource.imgSrc" alt="">
          <div class="mask"><i class="iconfont icon-up"></i></div>
        </div>
        <div class="desc">
          <div class="title-name">{{ playerStore.currentPlaySource.name }} - {{ playerStore.currentPlaySource.songer }}</div>
          <OptionBtn 
            :icons="icons" 
            :is-love-class="loginStore.isLoveClass(playerStore.currentPlaySource.id)"
            style="padding-left: 0;"
            @click-icon="onClickIcon"
            >
            <template #more-menu>
              <ContextMenu :list="moreMenu" />
            </template>
          </OptionBtn>
        </div>
      </div>
      <!-- 播放控件 -->
      <PlayController class="controls" />
      <div class="time">
        <!-- 时长 -->
        <span class="timeout">{{ playerStore.getCurrentTime }} / {{ playerStore.getLongTime }}</span>
        <span class="geci">词</span>
        <!-- 抽屉按钮 -->
        <span 
          :class="['list-btn', {
          'isPlay': playerStore.isPlay
          }]" 
          title="播放队列" 
          @click="show = true">
          <i class="iconfont icon-yinleliebiao"></i>
          <span>{{ playerStore.getPlayQueueLen }}</span>
        </span>
      </div>
    </div>
  </div>

  <ListDrawer 
   :show="show" 
   :data="playerStore.playQueue"
   @close="show = false" 
   />
</template>

<script lang="ts" setup>
import { ref, watchPostEffect } from 'vue'
import Slider from '@/components/slider/Slider.vue'
import OptionBtn from '@/components/OptionBtn.vue'
import PlayController from '@/components/PlayController.vue'
import ListDrawer from './ListDrawer.vue'
import ContextMenu from '@/components/ContextMenu.vue'
import { usePlayerStore } from '@/store/player/player'
import { useLoginStore } from '@/store/login/login'
import { useButtonEmits } from '@/hooks/useBtnEmits'

const playerStore = usePlayerStore()
const loginStore = useLoginStore()
// 事件处理
const {
  btnEmits
} = useButtonEmits()
// 进度条的值
const val = ref(0)
// 播放队列 抽屉
const show = ref(false)
const icons = [
  { icon: 'icon-aixin', text: '我喜欢', type: 'love' },
  { icon: 'icon-xiazai', text: '下载', type: 'download' },
  { icon: 'icon-gengduocaozuo', text: '更多操作', type: 'more' },
  { icon: 'icon-pinglun', text: '评论', type: 'comment' }
]
const moreMenu = [
{ icon: 'icon-aixin', text: '我喜欢', type: 'love' }
]

// 动态显示进度条
function showProgress() {
  val.value = playerStore.currentTime / playerStore.longTime * 100
}
let unwatch = watchPostEffect(showProgress)
// 按住准备拖动
const dragStart = () => {
  unwatch()
}
// 拖动结束
const dragEnd = (valu: number) => {
  playerStore.isPlay = true
  // 播放后 回调改变当前的进度
  playerStore.asyncPlay(() => playerStore.changeTime(valu))
  unwatch = watchPostEffect(showProgress)
}
// 操作按钮
const onClickIcon = (iconBtn: (typeof icons)[number]) => {
  const song = playerStore.currentPlaySource
  // 调用`按钮事件集合`，处理相应的类型
  if(iconBtn.type === 'more') {

  } else {
    btnEmits[iconBtn.type](song)
  }
}
</script>

<style scoped lang="scss">
$img-w: 42px;
$desc-l: 12px;
.player-panel-wrapper {
  padding: 6px 36px 15px;
  box-sizing: border-box;
  height: calc(100% - 17px);
  .player-panel {
    position: relative;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
// 歌曲描述
.detail {
  display: flex;
  max-width: 32%;
  height: 100%;
  margin-right: 40px;
  // border: 1px solid red;
  .img {
    position: relative;
    width: $img-w;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      border-radius: 4px;
    }
    .mask {
      display: none;
      justify-content: center;
      align-items: center;

      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 4px;
      background-color: rgba(0, 0, 0, 0.3);
      .iconfont {
        font-size: 30px;
        color: rgb(196, 196, 196);
      }
    }
    &:hover {
      cursor: pointer;
    }
    &:hover .mask {
      display: flex;
    }
  }
  .desc {
    width: calc(100% - $img-w - $desc-l);
    margin-left: $desc-l;
    font-size: 12.5px;
    .title-name {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

  }
}
// 控制器
.controls {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
.time {
  user-select: none;
  color: var(--font-color-shallow);
  display: flex;
  align-items: center;
  font-size: 12.5px;
  // 词
  .geci {
    font-size: 15px;
    margin: 0 7px;
  }
  // 播放列表
  .list-btn {
    margin-right: -14px;
    width: 50px;
    display: flex;
    align-items: center;
    .iconfont {
      font-size: 20px;
    }
    // 正在播放
    &.isPlay {
      cursor: pointer;
      color: var(--theme-color);
    }
  }
  .geci,
  .list-btn {
    // user-select: none;
    &:hover {
      cursor: pointer;
      color: var(--theme-color);
    }
  }
}
</style>