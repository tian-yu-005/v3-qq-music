import { ISong } from '@/types/ISong'
import { defineStore } from 'pinia'
import { lova_maps } from '@/data/love'
import { mp3_maps } from '@/data/mp3'

export const useLocalSongStore = defineStore('song', {
  state: () => {
    return {
      // 本地和下载
      localDownload: JSON.parse(localStorage.getItem('localDownload')!) || {
        localsong: [
          {
            id: 15,
            imgSrc: lova_maps['a15'],
            name: 'Beautiful In White (Demo)', songer: 'Westlife', album: 'Beautiful In White (Demo)',
            audio: mp3_maps['Beautiful In White']
          },
          {
            id: 1,
            imgSrc: lova_maps['a12'],
            name: '纯纯的夏天', songer: 'LIKPIA', album: 'LIKPIA的夏天',
            audio: mp3_maps['纯纯的夏天']
          },
          {
            id: 16,
            imgSrc: lova_maps['a16'],
            name: '愚昧', songer: '陈雪凝', album: '愚昧',
            audio: mp3_maps['愚昧']
          }
        ] as ISong[],
        downsong: [
          {
            id: 1,
            imgSrc: lova_maps['a12'],
            name: '纯纯的夏天', songer: 'LIKPIA', album: 'LIKPIA的夏天',
            audio: mp3_maps['纯纯的夏天']
          },
          {
            id: 14,
            imgSrc: lova_maps['a14'],
            name: '春娇与志明', songer: '街道办GDC / 欧阳耀莹', album: '春娇与志明',
            audio: mp3_maps['春娇与志明']
          },
          {
            id: 6,
            imgSrc: lova_maps['a5'],
            name: '房间', songer: '刘瑞琦', album: '私房歌',
            audio: mp3_maps['房间']
          },
        ] as ISong[],
        downvideo: [] as ISong[]
      },
      // 最近播放
      lately: JSON.parse(localStorage.getItem('lately')!) as {
        songs: ISong[]
        video: any
      } || {
        songs: [] as ISong[],
        video: [] as any
      },
      // 试听列表
      audition: []
    }
  },
  getters: {
    // 本地和下载
    localsong_len: (state) => {
      return state.localDownload.localsong.length
    },
    downsong_len: (state) => {
      return state.localDownload.downsong.length
    },
    downvideo_len: (state) => {
      return state.localDownload.downvideo.length
    },
    // 最近播放
    getLatelySongsLen: (state) => {
      return state.lately.songs.length <= 20 ? state.lately.songs.length : 20
    },
    getLatelyVideoLen: (state) => {
      return state.lately.video.length <= 20 ? state.lately.video.length : 20
    },
    // 最近播放
    getLatelySong: (state) => {
      return state.lately.songs
    },
    // 本地歌曲
    getLocalsong: (state) => {
      return state.localDownload.localsong
    },
    // 下载歌曲
    getDownsong: (state) => {
      return state.localDownload.downsong
    }
  },
  actions: {
    /**
     * 
     * @param song 
     * @param from 播放的位置来源，方便标记动画，和判断是否为最近播放
     * @desc 添加到最近播放
     */
    addToLatelySong(song: ISong, from?: string) {
      const latelySong = this.lately.songs
      if (from === '最近播放') return
      const isLately = latelySong.some(item => item.id === song.id)
      // 不存在则直接添加
      if (!isLately) {
        latelySong.unshift(song)
      } else {
        // 存在则 删除后 再添加
        const index = latelySong.findIndex(item => item.id === song.id)
        latelySong.splice(index, 1)
        latelySong.unshift(song)
      }
      // 超出 20 个开始出列
      if (latelySong.length > 20) {
        latelySong.pop()
      }
      // 存本地
      this.saveLately()
    },

    // 存本地歌曲
    saveLocalDownload() {
      const localDownload = this.localDownload
      localStorage.setItem('localDownload', JSON.stringify(localDownload))
    },
    saveLately() {
      const lately = this.lately
      localStorage.setItem('lately', JSON.stringify(lately))
    }
  }
})
