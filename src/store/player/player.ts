import { ISong } from '@/types/ISong'
import { defineStore, storeToRefs } from 'pinia'
import { watch } from 'vue'
import { ElMessage } from 'element-plus'
import { useLocalSongStore } from '@/store/localsong/localsong'

// 时间格式化
function getTime(time: number) {
  const m = Math.floor(time / 60)
  const s = Math.ceil(time % 60)

  const mm = m < 10 ? '0' + m : m
  const ss = s < 10 ? '0' + s : s

  return mm + ':' + ss
}

export const usePlayerStore = defineStore('playerStore', {
  state: () => {
    return {
      audio: new Audio(),
      // 全局播放状态
      isPlay: false,
      // 播放前的加载状态
      isLoad: false, 
      isEnd: true,
      currentTime: 0,
      longTime: 0,
      // 正在播放的对象
      currentPlaySource: JSON.parse(localStorage.getItem('currentPlaySource')!) as ISong || {
        id: -1,
        imgSrc: '/src/assets/img/default.png',
        name: '未知',
        songer: '未知',
        album: '',
        audio: ''
      } as ISong,
      // 歌单的 id
      songlistID: 0,
      // 播放队列
      playQueue: JSON.parse(localStorage.getItem('playQueue')!) as ISong[] || [],
      timeout: null as any,
      type: ''
    }
  },
  getters: {
    /**
     * 
     * @returns 获取队列长度
     */
    getPlayQueueLen: (state) => {
      return state.playQueue.length
    },
    getLongTime: (state) => {
      return getTime(state.longTime)
    },
    getCurrentTime: (state) => {
      return getTime(state.currentTime)
    },
    /**
     * 
     * @param id 歌曲 id
     * @returns 返回 播放 / 暂停 的图标类名 
     * @desc 判断当前歌曲是否 正在播放
     */
    isPlayClass: (state) => {
      return (id: number) => {
        return state.isPlay && state.currentPlaySource.id === id
          ? 'icon-zanting'
          : 'icon-gl-play'
      }
    },
  },
  actions: {
    /**
     * 开始 / 暂停
     */
    togglePlay() {
      // 当前列表没有歌曲时
      if(this.playQueue.length === 0) return
      // 播放状态
      this.isPlay = !this.isPlay
      // 加载完成时才能控制
      if(!this.isLoad) {
        this.asyncPlay()
      }
    },
    /**
     * 
     * @param song 音乐对象
     * @desc 换源播放
     */
    play(song: ISong, type?: string) {
      if(type) this.type = type // 我喜欢 本地 最近播放 试听 播放动画
      // 防止连点
      if(this.isLoad) return

      this.isPlay = true
      this.isLoad = true
      this.isEnd = false
      // 时间（和进度）立即置为 0
      this.currentTime = 0
      clearInterval(this.timeout)
      this.currentPlaySource = {
        ...song
      }
      this.audio.src = song.audio
      // 加入最近播放
      useLocalSongStore().addToLatelySong(song, this.type)
      // 保存本地
      this.saveSongData()
      // 异步准备播放
      this.asyncPlay()
    },
    // 播放后的数据修改
    asyncPlay(callback?: () => void) {
      this.audio.play().then(res => {
        // 记录总时长
        this.longTime = this.audio.duration
        // 播放时回调
        if(callback) callback()
        // 加载完成时再次判断当前的播放状态
        if(this.isPlay) {
          this.isLoad = false
          // 是否结束
          this.isEnd = false
          this.timer()
        } else {
          this.pause()
        }
      })
    },
    pause() {
      this.audio.pause()
      this.isPlay = false
      this.isLoad = false
      clearInterval(this.timeout)
    },
    next() {
      // 当前列表没有歌曲时
      if(this.playQueue.length === 0) return
      const index = this.playQueue.findIndex(item => this.currentPlaySource.id === item.id)
      // 如果是最后一个，则从头开始
      if(index === this.playQueue.length - 1) {
        this.play(this.playQueue[0])
      } else {
        this.play(this.playQueue[index + 1])
      }
    },
    pre() {
      // 当前列表没有歌曲时
      if(this.playQueue.length === 0) return
      const index = this.playQueue.findIndex(item => this.currentPlaySource.id === item.id)
      // 如果是最后一个，则从头开始
      if(index === 0) {
        this.play(this.playQueue[this.playQueue.length - 1])
      } else {
        this.play(this.playQueue[index - 1])
      }
    },
    // 修改进度
    changeTime(val: number) {
      this.audio.currentTime = val / 100 * this.longTime
    },
     /**
     * 
     * @param queue 音乐队列对象
     * @desc 切换播放队列
     */
    changePlayQueue(queue: ISong[]) {
      this.playQueue = [...queue]
      this.saveSongData()
    },

    // 双击事件 一次性操作
    onDblChange(song: ISong, queue: ISong[], type?: string) {
      this.play(song, type)
      this.changePlayQueue(queue)
    },
    /** 
     * @param id 需要保存歌单的 
     * 
     * 1. 直接点击歌单进行播放
     * 2. 播放全部 
     */
    playBySonglist(id: number) {
      this.songlistID = id
    },
    timer() {
      this.timeout = setInterval(() => {
        // 每秒记录一次时间
        this.currentTime = this.audio.currentTime
        // 同时记录是否完成播放
        this.isEnd = this.audio.ended
      }, 1000)
    },
    /**
     * @desc 保存 正在播放 和 播放队列
     */
    saveSongData() {
      localStorage.setItem('currentPlaySource', JSON.stringify(this.currentPlaySource))
      localStorage.setItem('playQueue', JSON.stringify(this.playQueue))
    }
  }
})

export const watchPlayState = () => {
  const {
    audio,
    isPlay,
    isLoad,
    isEnd,
    currentTime,
    currentPlaySource,
    timeout
  } = storeToRefs(usePlayerStore())
  // 初始化播放源
  audio.value.src = currentPlaySource.value.audio
  // 歌曲错误时，自动切换下一首
  const toNext = () => {
    // 弹窗
    setTimeout(() => {
      ElMessage({
        type: 'error',
        message: '资源丢失，自动播放下一首',
        duration: 2000
      })

      isPlay.value = false
      isLoad.value = false
      isEnd.value = true
      usePlayerStore().next()
    }, 800)
  }

  // 歌曲报错时，跳下一首
  audio.value.addEventListener('error', toNext)

  watch(isEnd, (new_) => {
    if(new_) {
      clearInterval(timeout.value)
      isPlay.value = false
      isLoad.value = false
      isEnd.value = true
      currentTime.value = 0

      usePlayerStore().next()
    }
  })
}