<template>
  <List title="创建的歌单" open-panel @input-blur-add="createSongList">
    <!-- 个人歌单列表 -->
    <template v-for="songlist in create_list">
      <ListItem 
       :data="songlist" 
       prop="id"
       :show-animation="showAnimation(songlist)"
       :context-menu="true"
       @click-list-item="pushList($event, 1)"
       >
        <!-- 右键菜单 -->
        <template #context-menu>
          <ContextMenu :list="menuList" @click-item="emitHandle($event, songlist)" />
        </template>
      </ListItem>
    </template>
  </List>
  <List title="收藏的歌单" open-panel :hidden-add="true" @input-blur-add="createSongList">
    <!-- 收藏歌单列表 -->
    <template v-for="songlist in loginStore.getCollectList">
      <ListItem 
       :data="songlist" 
       prop="id"
       :show-animation="showAnimation(songlist)"
       :context-menu="true"
       @click-list-item="pushList($event, 2)"
       >
        <!-- 右键菜单 -->
        <template #context-menu>
          <ContextMenu :list="menuList2" @click-item="menuHandle($event, songlist)" />
        </template>
      </ListItem>
    </template>
  </List>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import List from './List.vue'
import ListItem from './ListItem.vue'
import ContextMenu from '@/components/ContextMenu.vue'

import { ElMessage, ElMessageBox } from 'element-plus'
import { useLoginStore } from '@/store/login/login'
import { usePlayerStore } from '@/store/player/player'
import { ISongList } from '@/types/ISong'
import { useButtonEmits } from '@/hooks/useBtnEmits'

const loginStore = useLoginStore()
const playerStore = usePlayerStore()
const { btnEmits } = useButtonEmits()
const router = useRouter()

// 个人歌单 菜单
const menuList = [
  { icon: 'icon-shanchu', text: '删除',   type: 'delete' },
  {                 text: '重命名', type: 'rename' }
]
// 收藏歌单 菜单
const menuList2 = [
  { icon: 'icon-shanchu', text: '取消收藏',   type: 'collect' },
]
// 个人歌单的列表，需要倒序
const create_list = computed(() => [...loginStore.getCreateList].reverse())
// 组件动画状态
const showAnimation = computed(() => {
  return (songlist: any) => 
    playerStore.type === songlist.title &&
    playerStore.isPlay
})
// 创建歌单
const createSongList = (val: string) => {
  if(val.trim().length === 0) {
    return ElMessageBox.alert('歌单名称不能为空', 'QQ音乐', {
      confirmButtonText: '确定',
      type: 'warning'
    })
  }
  loginStore.createList(val)
}
/**
 * 
 * @param songlist 
 * @param type 1 创建的歌单 2 收藏的歌单
 * @desc 跳转歌单
 */
const pushList = (songlist: any, type: 1 | 2) => {
  if(type === 1) {
    router.push('/userSongDetail/' + songlist.id)
  } else if(type === 2) {
    router.push('/songDetail/' + songlist.id)
  }
}
/**
 * 
 * @param contextMenu 右键菜单项
 * @param songlist 选中的当前歌单
 */
const emitHandle = (contextMenu: any, songlist: ISongList) => {
  typeFn[contextMenu.type](songlist)
}
const menuHandle = (menu: any, songlist: ISongList) => {
  btnEmits[menu.type](songlist)
}
// 事件处理集合
const typeFn = {
  // 删除歌单
  'delete': (songlist: ISongList) => {
    ElMessageBox.confirm('确认删除歌单？', 'QQ音乐', {
      confirmButtonText: '删除',
      cancelButtonText: '取消',
      type: 'warning',
      beforeClose: async (action, instance, done) => {
        if (action === 'confirm') {
          instance.confirmButtonLoading = true
          instance.confirmButtonText = '稍等...'
          // 等待网络请求
          const res = await loginStore.deleteSonglist(songlist.id)
          if(res) {
            done()
            setTimeout(() => {
              instance.confirmButtonLoading = false
            }, 300)
            loginStore.saveInfo()
          } else {
            
          }
        } else {
          done()
        }
      }
    })
      .then(() => {
        ElMessage({
          type: 'success',
          message: '删除成功',
        })
      })
      .catch(() => {})
  },
  // 重命名
  'rename': (item: ISongList) => {
    ElMessageBox.prompt('重新命名该歌单', item.title, {
      confirmButtonText: '修改',
      cancelButtonText: '取消',
      inputPattern: /\S/,
      inputErrorMessage: '歌单名称不能为空',
      inputValue: item.title
    })
      .then(async ({ value }) => {
        const res = await loginStore.changeSonglistTitle(item.id, value)
        if(res) {
          ElMessage({
            type: 'success',
            message: `修改成功`,
          })
          loginStore.saveInfo()
        }
      })
      .catch(() => {})
  }
} as any
</script>

<style scoped>

</style>