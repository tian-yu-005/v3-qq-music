// 歌曲,歌单 的 评论
interface IComment {
  user: string
  avatar: string
  time: string
  desc: string
  likeCount: number // 点赞数量
}
// 歌曲
interface ISong {
  id: number
  imgSrc: string
  /**
   * 曲名
   */
  name: string
  songer: string
  /**
   * 专辑名
   */
  album: string
  audio: string
}
// 歌单
interface ISongList {
  id: number // 100
  imgSrc: string
  playerCount: string // 播放量
  title: string // 歌单标题

  user: string  // 用户
  avatar: string // 头像
  tags: string[] //
  detail: string
  // 所有歌曲
  list: ISong[]
  // 所有评论
  // comments: IComment[]
}

export type {
  ISong,
  ISongList
}