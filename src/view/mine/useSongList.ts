import { computed } from 'vue'
import { ISong } from "@/types/ISong"
import { useLoginStore } from '@/store/login/login'

export const useSongList = () => {
  const loginStore = useLoginStore()

  // 歌曲操作按钮
  const icons = [
    { icon: 'icon-gl-play', text: '播放歌曲', type: 'play-one' },
    { icon: 'icon-tianjia', text: '添加歌曲', type: 'add' },
    { icon: 'icon-xiazai', text: '下载', type: 'download' },
    { icon: 'icon-gengduocaozuo', text: '更多操作', type: 'more' }
  ]

  // 多个歌手 （格式： 1 / 2 / 3）
  const songers = computed(() => {
    return (songer: string) => {
      return songer.split('/')
    }
  })

  // add 图标菜单
  const addMenu = (song: ISong) => {
    return loginStore.getCreateList.map(songlist => {
      // 当前歌曲 进行遍历判断是否存在
      const one = songlist.list.find(s => s.id === song.id)
      return one ? {
        id: songlist.id,
        text: songlist.title,
        type: 'add',
        disable: true // 存在 则禁用对应的行
      } : {
        id: songlist.id,
        text: songlist.title,
        type: 'add',
      }
    })
  }
  // more 图标菜单（个人）
  const userMoreMenu = [
    { icon: 'icon-gl-play', text: '播放', type: 'play-one' },
    { icon: 'icon-shanchu', text: '删除', type: 'delete' }
  ]
  // more 图标菜单（官方）
  const officalMoreMenu = [
    { icon: 'icon-gl-play', text: '播放', type: 'play-one' }
  ]

  return {
    icons,
    songers,
    addMenu,
    userMoreMenu,
    officalMoreMenu
  }
}