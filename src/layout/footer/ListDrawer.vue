<template>
  <Transition name="mask">
    <!-- 遮罩层 -->
    <div class="mask" v-if="$props.show" @click="$emit('close')"></div>
  </Transition>
  <Transition name="drawer">
    <!-- 弹出层 -->
    <div class="list-drawer" v-if="$props.show">
      <!-- 顶部，absolute -->
      <div class="title-wrapper">
        <div class="title">
          <p>播放队列</p>
          <div class="else">
            <span>{{ $props.data!.length }}首歌曲</span>
            <span><i class="iconfont icon-duoxuan" /></span>
            <span><i class="iconfont icon-shanchu" /></span>
          </div>
        </div>
      </div>
      <!-- 歌曲列表 -->
      <el-scrollbar :always="true">
        <div class="list-wrapper">
          <template v-for="item, index in $props.data">
            <div :class="['item-wrapper', {
                'active': currentActive === index,
                'play': playerStore.currentPlaySource.id === item.id
              }]"
              @click="currentActive = index"
              >
              <div class="item">
                <!-- 双击切换 -->
                <div class="text" @dblclick="playerStore.play(item)">
                  <p>{{ item.name }}</p>
                  <p><span>{{ item.songer }}</span></p>
                </div>
                <div class="time">02:21</div>
                <!-- 默认隐藏控件 -->
                <div class="controls">
                  <i :class="['iconfont', playerStore.isPlayClass(item.id)]" @click="onClickIcon(item)" />
                  <i :class="['iconfont', loginStore.isLoveClass(item.id)]" @click="btnEmits['love'](item)" />
                  <i class="iconfont icon-gengduocaozuo" />
                </div>
              </div>
            </div>
          </template>
        </div>
      </el-scrollbar>
      <!-- 收起按钮，absolute -->
      <div class="up">
        <div class="wrapper">
          <div class="btn" @click="$emit('close')">
            <i class="iconfont icon-yinleliebiao"></i>
            <span>收起</span>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ISong } from '@/types/ISong'
import { usePlayerStore } from '@/store/player/player'
import { useLoginStore } from '@/store/login/login'
import { useButtonEmits } from '@/hooks/useBtnEmits'

defineProps<{
  isPlay?: boolean
  show?: boolean
  data?: ISong[]
}>()
defineEmits<{
  (n: 'close'): void
}>()
const playerStore = usePlayerStore()
const loginStore = useLoginStore()
const { btnEmits } = useButtonEmits()
const currentActive = ref(-1)

// 播放图标
const onClickIcon = (item: any) => {
  // 点击自身 开始，暂停
  if(playerStore.currentPlaySource.id === item.id) {
      playerStore.togglePlay()
  } else {
    // 点击其他换源
    playerStore.play(item)
  }
}
</script>

<style scoped lang="scss">
$pl: 22px;
$font-gray: rgb(156, 156, 156);
// 点击时
@mixin currentActive() {
  &.active {
    @include showControls();
    background-color: var(--aside-item-hover-bg);
  }
}
// 播放时
@mixin currentPlay() {
  &.play {
    .item .text p {
      color: var(--theme-color);
    }
  }
}
// 文本宽度，时长，操作按钮
@mixin showControls() {
  .item {
    .text {
      width: 135px;
    }
    .time {
      display: none;
    }
    // 增加一个
    .controls {
      display: flex;
    }
  }
}
// 遮罩层
.mask {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, .4);
}
// 遮罩层动画
.mask-enter-active,
.mask-leave-active {
  transition: background-color 0.2s ease;
}
 // false -> true 行为变化之前 0 -> 0.4
.mask-enter-from,
 // true -> false 行为变化之后 0.4 -> 0
.mask-leave-to { 
  background-color: rgba(0, 0, 0, 0);
}
// 抽屉
.list-drawer {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 270px;
  transform: translate(0);
  padding-top: 100px;
  padding-bottom: 70px;
  background-color: var(--aside-bg);
  z-index: 100;
  box-shadow: -1px 0 5px var(--right-bg);
}

// 抽屉动画
.drawer-enter-active,
.drawer-leave-active {
  transition: transform 0.2s ease;
}
 // false -> true 行为变化之前
.drawer-enter-from,
 // true -> false 行为变化之后
.drawer-leave-to { 
  transform: translate(270px);
}
// 顶部
.title-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  box-sizing: border-box;
  height: 100px;
  padding: 24px $pl 20px;
  .title {
    user-select: none;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p {
      font-size: 20px;
    }
    .else {
      display: flex;
      align-items: center;
      span {
        color: var(--font-gray);
      }
      span:nth-child(1) {
        font-size: 12px;
        margin-right: auto;
      }
      span:nth-child(3) {
        margin-left: 16px;
      }
      span:nth-child(2), 
      span:nth-child(3) {
        &:hover {
          cursor: pointer;
          color: var(--theme-color);
        }
      }
    }
  }
}
// 歌曲队列
.list-wrapper {
  .item-wrapper {
    padding: 16px $pl;
    &:hover {
      background-color: var(--aside-item-hover-bg);
      @include showControls();
    }
    @include currentActive(); // 用于点击选中
    @include currentPlay();   // 用于播放选中
  }
}
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  // 曲名和作者
  .text {
    width: 175px;
    p {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      &:nth-child(1) {
        font-size: 14px;
      }
      &:nth-child(2) {
        font-size: 12px;
        color: var(--font-color-shallow);
        margin-top: 6px;
      }
    }
  }
  // 时长
  .time {
    align-self: flex-end;
    font-size: 12.5px;
    color: var(--font-color-shallow);
  }
  // 经过显示操作按钮
  .controls {
    display: none;
    align-items: center;
    .iconfont {
      font-size: 16px;
      margin-left: 8px;
      &:hover {
        cursor: pointer;
        color: var(--theme-color) !important;
      }
      // 空心
      &.icon-aixin:hover {
        color: orangered !important;
      }
      // 满心
      &.icon-w_aixin {
        color: orangered;
        opacity: .8;
        &:hover {
          color: orangered !important;
          opacity: 1;
        }
      }
    }
  }
}
// 收起按钮
.up {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;align-items: center;
  box-sizing: border-box;
  height: 70px;
  padding: 0 $pl;
  padding-top: 5px;
  font-size: 12px;
  color: var(--font-gray);
  .wrapper {
    width: 100%;
    height: 100%;
    display: flex;align-items: center;justify-content: flex-end;
    border-top: 1px solid var(--el-border-color-light);
    .btn {
      user-select: none;
      display: inline-flex;
      align-items: center;
      .iconfont {
        font-size: 20px;
      }
      &:hover {
        cursor: pointer;
        color: var(--theme-color);
      }
    }
  }
}
</style>