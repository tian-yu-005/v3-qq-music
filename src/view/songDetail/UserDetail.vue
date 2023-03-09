<template>
  <Scroll class="scroll-main" v-if="!isLoad">
    <!-- 歌单头 -->
    <HeadDetail :img-src="detail.avatar" round :title="detail.name">
      <template #user>
        <span class="user">官方认证：{{ detail.officialToken }}</span>
      </template>
      <template #introduce>
        <span>
          <span>粉丝：</span><span class="count">{{ detail.fansCount }}</span>
        </span>
        &nbsp;
        <span>
          <span>关注：</span><span class="count">{{ detail.attentionCount }}</span>
        </span>
      </template>
      <template #btn>
        <el-button 
         v-if="$route.params.id !== loginStore.info.id.toString()" 
         round type="primary" style="width: 114px;"
         >
          <el-icon><Plus /></el-icon>
          <span>关注</span>
        </el-button>
      </template>
    </HeadDetail>

    <!-- 歌曲 评论 -->
    <el-tabs v-model="currentTab">
      <el-tab-pane label="我喜欢" name="1">

        <el-tabs v-model="currentTab2" class="tab-2">
          <el-tab-pane label="歌曲" name="1-1"><i>歌曲</i></el-tab-pane>
          <el-tab-pane label="歌单" name="1-2"><i>歌单</i></el-tab-pane>
          <el-tab-pane label="专辑" name="1-3"><i>专辑</i></el-tab-pane>
          <el-tab-pane label="视频" name="1-4"><i>视频</i></el-tab-pane>
        </el-tabs>
        
      </el-tab-pane>
      <el-tab-pane label="创建的歌单" name="2"><i>暂无歌单</i></el-tab-pane>
    </el-tabs>
  </Scroll>

  <div class="scroll-main" v-else v-loading="isLoad" />
</template>

<script lang="ts" setup>
import { ref, reactive, defineAsyncComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useLoginStore } from '@/store/login/login'
import { IUser } from '@/types/IUser'
import HeadDetail from './components/HeadDetail.vue'
const Scroll = defineAsyncComponent(() => import('@/components/Scroll.vue'))
const SongHead = defineAsyncComponent(() => import('../mine/SongHead.vue'))
const SongList = defineAsyncComponent(() => import('../mine/SongList.vue'))

const route = useRoute()
const router = useRouter()
const loginStore = useLoginStore()


const isLoad = ref(true)
const currentTab = ref('1')
const currentTab2 = ref('1-1')
let detail = reactive<IUser>({
  id: 0,
  username: '', 
  password: '',
  avatar: '/src/assets/img/default.png',
  name: '',
  officialToken: '',
  fansCount: '',
  attentionCount: '',
  love: {
    songs: [],
    songlist: [],
    album: [],
    diantai: [],
    video: [],
  },
  createlist: []
})
// 加载数据
async function loadData() {
  const id = Number(route.params.id as string)
  const res = await loginStore.getOtherUserInfo(id)
  
  if(res.code === 200) {
    detail = res.data!
    isLoad.value = false
  } else {
    router.push({ name: '404' })
  }
}
loadData()

</script>

<style lang="scss">
.scroll-main {
  height: $scroll-main;
}
.user {
  font-size: 13px;
  color: var(--font-color-shallow);
}
.count:hover {
  cursor: pointer;
  color: var(--theme-color);
}
.tab-2 {
 .el-tabs__active-bar {
  display: none;
 }
}
// .el-tabs__header,
// .el-tabs__nav,
// .el-tabs__item {
//   border: none !important;
// }
</style>