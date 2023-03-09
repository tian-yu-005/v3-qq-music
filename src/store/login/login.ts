import { defineStore } from 'pinia'
import { info } from '@/data/user'
import allList from '@/data/index'
import login from '@/assets/img/login.png'

import type { IResult } from '@/types/IResult'
import type { IUser } from '@/types/IUser'
import type { ILogin } from '@/types/ILogin'
import { ISong, ISongList } from '@/types/ISong'

type ResultUserPromise = Promise<IResult<IUser | null>>
type ResultSonglistPromise = Promise<IResult<ISongList | null>>

function wait<T>(data: T, wait: number) {
  return new Promise<T>((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, wait)
  })
}

export const useLoginStore = defineStore('login', {
  state: () => {
    return {
      isLogin: JSON.parse(localStorage.getItem('isLogin')!) as boolean || false,
      info: (JSON.parse(localStorage.getItem('info')!) || {
        id: 0,
        username: '', 
        password: '',
        avatar: login,
        name: '点击登录',
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
      }) as IUser
    }
  },
  getters: {
    // 我喜欢
    songs_len: (state) => {
      return state.info.love.songs.length
    },
    getLoveSong: (state) => {
      return state.info.love.songs
    },
    songlist_len: (state) => {
      return state.info.love.songlist.length
    },
    album_len: (state) => {
      return state.info.love.album.length
    },
    diantai_len: (state) => {
      return state.info.love.diantai.length
    },
    video_len: (state) => {
      return state.info.love.video.length
    },
    /** 获取创建的歌单 */
    getCreateList: (state) => {
      return state.info.createlist
    },
    /** 获取收藏的歌单 */
    getCollectList: (state) => {
      return state.info.love.songlist
    },
    /**
     * 
     * @param id 歌曲 id
     * @returns 返回 满心 / 空心 的图标类名 
     * @desc 判断是否是 我喜欢
     */
    isLoveClass: (state) => {
      // 如果找到了，说明是 我喜欢的
      return (id: number) => {
        return state.info.love.songs.some(item => item.id === id) 
          ? 'icon-w_aixin'
          : 'icon-aixin'
      }
    },
    isCollectClass: (state) => {
      return (id: number) => {
        return state.info.love.songlist.some(item => item.id === id)
          ? ['icon-w_aixin', '取消收藏']
          : ['icon-aixin', '收藏']
      }
    }
  },
  actions: {
    // 登录
    login(userInfo: ILogin): ResultUserPromise {
      const one = info.find(item => 
        item.username === userInfo.username &&
        item.password === userInfo.password
      )
      return one ? 
        wait({
          code: 200,
          msg: '操作成功！'
        }, 800) : 
        wait({
          code: 401,
          msg: '账号或密码错误！'
        }, 800)
    },
    // 获取本地用户数据
    getInfo(userInfo: ILogin): ResultUserPromise {
      const one = info.find(item => 
        item.username === userInfo.username &&
        item.password === userInfo.password
      )
      return wait({
        code: 200,
        msg: '操作成功！',
        data: one
      }, 800)
    },
    /**
     * 
     * @param id 
     * @returns 
     * @desc 获取数据库歌单
     */
    getSonglistDetail(id: number): ResultSonglistPromise {
      const one = allList.find(item => item.id === id)
      return one ? 
        wait({
          code: 200,
          msg: '操作成功',
          data: one
        }, 600) : 
        wait({
          code: 500,
          msg: '不存在该数据',
          data: null
        }, 600)
    },
    /**
     * 
     * @param id 
     * @returns 
     * @desc 获取用户歌单
     */
    getUserSonglistDetail(id: number): ResultSonglistPromise {
      const one = this.info.createlist.find(item => item.id === id)
      return one ? 
        wait({
          code: 200,
          msg: '操作成功',
          data: one
        }, 600) : 
        wait({
          code: 500,
          msg: '不存在该数据',
          data: null
        }, 600)
    },
    /**
     * 
     * @param id 用户 id
     * @returns 
     * @desc 获取其他用户信息
     */
    getOtherUserInfo(userId: number): ResultUserPromise {
      const one = info.find(item => item.id === userId)
      return one ? 
        wait({
          code: 200,
          msg: '操作成功',
          data: one
        }, 600) : 
        wait({
          code: 500,
          msg: '不存在该数据',
          data: null
        }, 600)
    },
    /**
     * @param song 歌曲对象
     * @desc 加入喜欢
     */
    addToLove(song: ISong) {
      this.info.love.songs.unshift(song)
      this.saveInfo()
    },
    /**
     * @param id 歌曲 id
     * @desc 从我喜欢中移除
     */
    removeInLove(id: number) {
      const index = this.info.love.songs.findIndex(item => item.id === id)
      this.info.love.songs.splice(index, 1)
      this.saveInfo()
    },
    /**
     * @param songlist 歌单
     * @desc 加入收藏
     */
    addToCollect(songlist: ISongList) {
      this.info.love.songlist.unshift(songlist)
      this.saveInfo()
    },
    /**
     * @param id 歌单 id
     * @desc 从收藏中移除
     */
    removeInCollect(id: number) {
      const index = this.info.love.songlist.findIndex(item => item.id === id)
      this.info.love.songlist.splice(index, 1)
      this.saveInfo()
    },
    // 创建自定义歌单
    createList(val: string) {
      const last = this.info.createlist[this.info.createlist.length - 1]
      const next_id = last!.id + 1
      
      this.info.createlist.push({
        id: next_id,
        imgSrc: '@/assets/img/default.png',
        playerCount: '',
        title: val,
        user: this.info.name,
        avatar: this.info.avatar,
        tags: [],
        detail: '',
        list: []
      })
      // 更新用户数据
      this.saveInfo()
    },
    // 修改歌单名
    changeSonglistTitle(id: number, val: string) {
      const one = this.info.createlist.find(item => item.id === id)
      if(one) {
        setTimeout(() => {
          one.title = val
        }, 800)
      }
      return one ?
        wait(true, 800) :
        wait(false, 800)
    },
    // 删除歌单
    deleteSonglist(id: number) {
      const index = this.info.createlist.findIndex(item => item.id === id)
      if(index !== -1) {
        setTimeout(() => {
          this.info.createlist.splice(index, 1)
        }, 500)
      }
      return index !== -1 ?
        wait(true, 500) :
        wait(false, 500)
    },
    // 在创建的歌单中 删除某一首歌曲
    deleteSong(songId: number, from: string) {
      const one = this.info.createlist.find(item => item.title === from)
      if(one) {
        const index = one.list.findIndex(song => song.id === songId)
        if(index !== -1) {
          setTimeout(() => {
            one.list.splice(index, 1)
          }, 500)
        }
        return index !== -1 ?
          wait(true, 500) :
          wait(false, 500)
      }
    },
    // 退出登录
    exitLogin() {

    },
    // 储存本地
    saveLoginResult() {
      this.isLogin = true
      localStorage.setItem('isLogin', JSON.stringify(this.isLogin))
    },
    saveInfo() {
      const newInfo = this.info
      localStorage.setItem('info', JSON.stringify(newInfo))
    }
  }
})