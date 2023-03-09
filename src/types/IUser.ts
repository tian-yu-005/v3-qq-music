import type { ISong, ISongList } from '@/types/ISong'
interface ILove {
  songs: ISong[]
  songlist: ISongList[]
  album: any[]
  diantai: any[]
  video: any[]
}

interface IUser {
  id: number
  username: string
  password: string
  avatar: string
  name: string
  // 官方认证
  officialToken: string
  fansCount: string
  attentionCount: string

  love: ILove
  createlist: ISongList[]
}

export type {
  ILove,
  IUser
}