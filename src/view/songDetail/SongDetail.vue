<template>
  <Scroll class="scroll-main" v-if="!isLoad">
    <!-- 歌单头 -->
    <HeadDetail :img-src="detail.imgSrc" :title="detail.title">
      <template #user>
        <el-avatar class="avatar" size="small" :src="detail.avatar" @click="goUser(detail.user)" />
        <span class="user" @click="goUser(detail.user)">{{ detail.user }}</span>
        <span class="tag" v-for="item in detail.tags">{{ '#' + item }}</span>
      </template>
      <template #introduce>
        <span :title="detail.detail">{{ detail.detail }}</span>
      </template>
      <template #btn>
        <el-button class="btn" round type="primary"
         @click="onClickBtn('play')"
         >
          <i class="iconfont icon-gl-play" /> &nbsp;
          <span>播放全部</span>
        </el-button>
        <el-button class="btn" round color="rgb(240, 240, 240)"
         @click="onClickBtn('collect')"
         >
          <i :class="['iconfont', loginStore.isCollectClass(detail.id)[0]]" /> &nbsp;
          <span>{{ loginStore.isCollectClass(detail.id)[1] }}</span>
        </el-button>
      </template>
    </HeadDetail>

    <!-- 歌曲 评论 -->
    <el-tabs v-model="currentTab" @tab-click="tabClick">
      <el-tab-pane :label="'歌曲 ' + detail.list.length" name="first">
        <SongHead style="margin: 12px 0;" />
        <SongList :data="detail.list" :offical-mode="true" />
      </el-tab-pane>
      <el-tab-pane label="评论" name="second"><i>暂无评论</i></el-tab-pane>
    </el-tabs>
  </Scroll>

  <div class="scroll-main" v-else v-loading="isLoad" />
</template>

<script lang="ts" setup>
import { ref, reactive, defineAsyncComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ISongList } from '@/types/ISong'
import { useLoginStore } from '@/store/login/login'
import { useButtonEmits } from '@/hooks/useBtnEmits'
import HeadDetail from './components/HeadDetail.vue'
import { info } from '@/data/user'

const Scroll = defineAsyncComponent(() => import('@/components/Scroll.vue'))
const SongHead = defineAsyncComponent(() => import('../mine/SongHead.vue'))
const SongList = defineAsyncComponent(() => import('../mine/SongList.vue'))

const route = useRoute()
const router = useRouter()
const loginStore = useLoginStore()
// 事件处理
const {
  btnEmits
} = useButtonEmits()
let detail = reactive<ISongList>({
  id: -1,
  imgSrc: '',
  playerCount: '',
  title: '',
  user: '',
  avatar: '',
  tags: [],
  detail: '',
  list: []
})
const isLoad = ref(true)
const currentTab = ref('first')
// 点击操作按钮
const onClickBtn = (type: string) => {
  if(type === 'play') {
    btnEmits[type](detail.list, detail.title)
  } else if(type === 'collect') {
    btnEmits[type](detail)
  }
}
// 点击 歌曲 / 评论
const tabClick = () => {

}
// 加载数据
async function loadData() {
  const id = Number(route.params.id as string)
  const res = await loginStore.getSonglistDetail(id)
  
  if(res.code === 200) {
    detail = res.data!
    isLoad.value = false
  } else {
    router.push({ name: '404' })
  }
}
loadData()

const goUser = (userName: string) => {
  const one = info.find(item => item.name === userName)
  if(one) {
    router.push('/userDetail/' + one.id)
  } else {
    alert('没有该用户')
  }
}
</script>

<style scoped lang="scss">
.scroll-main {
  height: $scroll-main;
}
// user-slot
.user {
  font-size: 13px;
}
.tag {
  font-size: 13px;
  color: var(--font-color-shallow);
}
.avatar:hover {
  cursor: pointer;
}
.user {
  margin: 0 18px 0 8px;
}
.tag {
  margin-right: 8px;
}
.avatar:hover ~ .user,
.user:hover {
  cursor: pointer;
  color: var(--theme-color);
}
// 配置按钮
.btn {
  width: 114px;
  span {
    font-size: 13.2px;
  }
  .iconfont {
    font-size: 18px;
    // 满心
    &.icon-w_aixin {
      color: orangered;
      opacity: 1;
    }
  }
}
</style>