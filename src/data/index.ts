import type { ISong, ISongList } from '@/types/ISong'
import { officialList } from './musichome'
import { hotlist, hot_2 } from './hot'
import { info } from './user'
import { IUser } from '@/types/IUser'

// 模拟数据库
// 模拟数据库
// 模拟数据库
const allList = [
  // 100
  ...officialList,
  // 200
  ...hotlist,
  // 251
  ...hot_2,
  // 300 / 10000
  ...getSonglistByInfo(info)
] as ISongList[]

const songs = function() {
  const songs = [] as ISong[]
  allList.map(songlist => {
    return songlist.list
  })
    .forEach(list => {
      songs.push(...list)
    })
  return songs
}

// 所有歌单数据
export default allList

export {
  songs
}


function getSonglistByInfo(info: IUser[]): ISongList[] {
  const love_songlist = [] as any
  const create_songlist = [] as any
  info.forEach(item => {
    love_songlist.push(...item.love.songlist)
    create_songlist.push(...item.createlist)
  })
  return [...love_songlist,...create_songlist]
}
