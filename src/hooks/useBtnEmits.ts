import { ISong, ISongList } from "@/types/ISong"
import { usePlayerStore } from '@/store/player/player'
import { useLoginStore } from '@/store/login/login'
import { ElMessage, ElMessageBox } from 'element-plus'

export const useButtonEmits = () => {
  const playerStore = usePlayerStore()
  const loginStore = useLoginStore()
  /**
   * play 播放全部 play-one 播放歌曲 add 添加歌曲 
   * 
   * love 我喜欢 collect 收藏 download 下载 operate 批量操作
   * 
   *  share 分享 report 举报 optionEdit 更多操作 comment 评论
   */
  const btnEmits = {
    // 播放全部
    'play': (songs: ISong[], type?: string) => {
      if(!songs || songs.length === 0) {
        return alert('该歌单没有数据')
      }
      playerStore.onDblChange(songs[0], songs, type)
    },
    /**
     * @param type 播放的位置（我喜欢， 本地与下载...）
     * @desc 播放歌曲
     */
    'play-one': (song: ISong, songs: ISong[], from: string) => {
      // 如果与当前歌曲相同，则触发切换
      if(playerStore.currentPlaySource.id === song.id) {
        playerStore.togglePlay()
      } else {
        // 否则 换源，队列
        playerStore.play(song, from)
        playerStore.changePlayQueue(songs)
      }
    },
    // 添加歌曲 根据 id 查找对应的歌单，将歌曲添加到歌单中
    'add': (item: any, song: ISong) => {
      const one = loginStore.getCreateList.find(songlist => songlist.id === item.id)
      if(one) {
        one.list.unshift(song)
        ElMessage.success('成功添加 1 首歌曲')
        // 保存
        loginStore.saveInfo()
      }
    },
    'delete': (songId: number, from: string) => {
      ElMessageBox.confirm('确认删除该歌单歌曲？', 'QQ音乐', {
        confirmButtonText: '删除',
        cancelButtonText: '取消',
        type: 'warning',
        beforeClose: async (action, instance, done) => {
          if (action === 'confirm') {
            instance.confirmButtonLoading = true
            instance.confirmButtonText = '稍等...'
            // 等待网络请求
            const res = await loginStore.deleteSong(songId, from)
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
    // 我喜欢
    'love': (song: ISong) => {
      // 判断是否登录了
      if(!loginStore.isLogin) {
        return ElMessage({
          type: 'error',
          message: '请先登录'
        })
      }

      const is = loginStore.info.love.songs.some(item => item.id === song.id)
      // 有 则弹框提示移除
      if(is) {
        ElMessageBox.confirm('确认删除歌单歌曲？', 'QQ音乐', {
          confirmButtonText: '删除',
          cancelButtonText: '取消',
          type: 'warning',
          beforeClose: (action, instance, done) => {
            if(action === 'confirm') {
              loginStore.removeInLove(song.id)
              done()
            } else {
              done()
            }
          }
        })
          .then(() => {
            ElMessage({
              type: 'success',
              message: '删除成功'
            })
          })
          .catch(() => {})
      } else {
        // 没有 则添加
        loginStore.addToLove(song)
        ElMessage({
          type: 'success',
          message: '已添加到我喜欢'
        })
      }
    },
    // 收藏
    'collect': (songlist: ISongList) => {
      // 判断是否登录了
      if(!loginStore.isLogin) {
        return ElMessage({
          type: 'error',
          message: '请先登录'
        })
      }
      const is = loginStore.getCollectList.some(item => item.id === songlist.id)
      if(is) {
        ElMessageBox.confirm('确认删除该条收藏的歌单？', 'QQ音乐', {
          confirmButtonText: '删除',
          cancelButtonText: '取消',
          type: 'warning',
          beforeClose: (action, instance, done) => {
            if(action === 'confirm') {
              loginStore.removeInCollect(songlist.id)
              done()
            } else {
              done()
            }
          }
        })
          .then(() => {
            ElMessage({
              type: 'success',
              message: '取消收藏'
            })
          })
          .catch(() => {})
      } else {
        // 没有 则添加
        loginStore.addToCollect(songlist)
        ElMessage({
          type: 'success',
          message: '已添加到收藏'
        })
      }
    },
    // 下载
    'download': () => {
      alert('我要 下载')
    },
    // 批量操作
    'operate': () => {
      alert('我要 批量操作')
    },
    // 分享
    'share': () => {
      alert('我要 分享')
    },
    // 举报
    'report': () => {
      alert('我要 举报')
    },
    // 更多操作
    'more': () => {
      alert('我要 操作')
    },
    // 评论
    'comment': () => {
      alert('我要 评论')
    }
  } as {
    [n: string]: (...data: any) => void
  }

  return {
    btnEmits
  }
}