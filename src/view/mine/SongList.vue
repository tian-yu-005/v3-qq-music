<template>
  <!-- 每一首 歌曲 -->
  <template v-for="song, index in props.data">
    <div :class="['song', {
        'active': currentActive === index,
        'currentPlay': playerStore.currentPlaySource.id === song.id
      }]"
      @click="currentActive = index"
      >
      <div class="name">
        <!-- 爱心 -->
        <i :class="['iconfont', loginStore.isLoveClass(song.id)]" 
         @click="btnEmits['love'](song)"
         />
        <!-- 双击切换 -->
        <span 
         class="text" 
         @dblclick="playerStore.onDblChange(song, props.data!, props.from)"
         >{{ song.name }}</span>
        <!-- 鼠标经过显示操作按钮 -->
        <OptionBtn 
         class="controls" 
         :icons="icons" 
         :is-login="loginStore.isLogin"
         :isPlayClass="playerStore.isPlayClass(song.id)" 
         @click-icon="onClickIcon($event, song)"
         >
          <template #add-menu>
            <ContextMenu :list="addMenu(song)" @click-item="onClickItem($event, song)" />
          </template>
          <template #more-menu>
            <ContextMenu 
             v-if="props.officalMode"
             :list="officalMoreMenu" 
             @click-item="onClickItem2($event, song)" />
            <ContextMenu 
             v-else
             :list="userMoreMenu" 
             @click-item="onClickItem2($event, song)" />
          </template>
          
        </OptionBtn>
      </div>
      <!-- 多个歌手 -->
      <div class="songer">
        <template v-for="val, index in songers(song.songer)">
          <span v-if="index === 0" :title="val">{{ val }}</span>
          <template v-else>
            /
            <span :title="val">{{ val }}</span>
          </template>
        </template>
      </div>
      <!-- 专辑 -->
      <div class="album"><span>{{ song.album }}</span></div>
    </div>
  </template>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import OptionBtn from '@/components/OptionBtn.vue'
import ContextMenu from '@/components/ContextMenu.vue'
import type { ISong } from '@/types/ISong'
import { usePlayerStore } from '@/store/player/player'
import { useLoginStore } from '@/store/login/login'
import { useButtonEmits } from '@/hooks/useBtnEmits'
import { useSongList } from './useSongList'
import { ElMessage } from 'element-plus'
const props = defineProps<{
  data?: ISong[]
  // 列表名，歌单名
  from?: string
  /**
   * `更多操作` 菜单配置组模式（个人，官方）
   * 
   * 默认采用个人，包含删除操作
   */
  officalMode?: boolean
}>()
const playerStore = usePlayerStore()
const loginStore = useLoginStore()
// 事件处理
const { btnEmits } = useButtonEmits()
const {
  icons,
  songers,
  addMenu,
  userMoreMenu,
  officalMoreMenu
} = useSongList()
// 选中索引
const currentActive = ref(-1)

/**
 * @param item 该条歌曲上 打开菜单列表的每一项
 * @param song 该条歌曲的数据
 */
const onClickItem = (item: any, song: ISong) => {
  btnEmits[item.type](item, song)
}
const onClickItem2 = (item: any, song: ISong) => {
  if(item.type === 'play-one') {
    btnEmits[item.type](song, props.data, props.from)
  } else if(item.type === 'delete') {
    btnEmits[item.type](song.id, props.from)
  }
}

// 操作按钮
const onClickIcon = (iconBtn: any, item: ISong) => {
  // 调用`按钮事件集合`，处理相应的类型
  if(iconBtn.type === 'play-one') {
    btnEmits[iconBtn.type](item, props.data, props.from)
  } else if(iconBtn.type === 'add') {
    // 没有登录则提示
    if(!loginStore.isLogin) return ElMessage.error('请先登录')
  } else if(iconBtn.type === 'more') {
    // 会打开菜单，交由菜单处理，这里无需处理
  } else {
    btnEmits[iconBtn.type]()
  }
}
</script>

<style scoped lang="scss">
$hover-bg: #ededed93;
// 点击时
@mixin currentActive() {
  &.active {
    @include showControls();
    background-color: var(--aside-item-hover-bg);
  }
}
// 播放时
@mixin currentPlay() {
  &.currentPlay {
    color: var(--theme-color);
  }
}
// 文本宽度，操作按钮
@mixin showControls() {
  .name {
    .text {
      width: calc(100% - 150px);
    }
    .controls {
      display: flex;
    }
  }
}
.song {
  user-select: none;
  box-sizing: border-box;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px 0;
  border-radius: 2px;
  // 公共样式
  & > div {
    padding-left: 7px;
    font-size: 13.5px;
    letter-spacing: 1px;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  // 歌曲
  .name {
    flex-basis: 38%;
    min-width: 43%;
    
    display: flex;
    align-items: center;
    .iconfont {
      font-size: 17px;
      margin-right: 4px;
      // 空心
      &.icon-aixin {
        color: gray;
        &:hover{
          color: orangered !important;
        }
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
      &:hover {
        cursor: pointer;
      }
    }
    // 曲名
    .text {
      width: calc(100% - 30px);
      line-height: 2;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    // 控件
    .controls {
      display: none;
      margin-left: auto;
    }
  }
  .songer {
    flex-basis: 31%;
  }
  .album {
    flex-basis: 31%;
  }
  .songer span:hover,
  .album span:hover {
    cursor: pointer;
    color: var(--theme-color);
  }
  
  &:hover {
    background-color: var(--aside-item-hover-bg);
    
    @include showControls();
  }
  @include currentActive();
  @include currentPlay();
}
</style>