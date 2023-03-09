import { storeToRefs } from 'pinia'
import { useLoginStore } from '@/store/login/login'
import { useLocalSongStore } from '@/store/localsong/localsong'
import { Ref, ref, computed } from 'vue'
import { songs } from '@/data/index'

export const useSearch = () => {
  // 我喜欢
  const {
    getLoveSong
  } = storeToRefs(useLoginStore())
  // 本地 / 下载 / 最近播放
  const {
    getLocalsong,
    getDownsong,
    getLatelySong
  } = storeToRefs(useLocalSongStore())

  const mine = computed(() => [
    { from: '我喜欢', list: getLoveSong },
    { from: '本地歌曲', list: getLocalsong },
    { from: '下载歌曲', list: getDownsong },
    { from: '历史播放', list: getLatelySong }
  ])
  const online = [...songs()]
  
  // 判断是否存在
  const has = (data: Ref<any>, val: string) => {
    return data.value.some((item: any) => item.name.includes(val))
  }
  // 有一个找到了，就显示
  const allHas = (val: string) => {
    return mine.value.some(item => has(item.list, val)) || 
      online.some(item => item.name.includes(val))
  }
  
  
  const search = (val: string) => {
    // 我的音乐搜索
    const mineMap = [] as any
    mine.value.forEach((item: any) => {
      // 将 from 加入到 同级的 list 中
      item.list.value.map((v: any) => {
        if(v.name.includes(val)) {
          return {
            ...v,
            from: item.from
          }
        }
      })
        // 依次添加
        .forEach((v: any) => {
          if(v !== undefined) {
            mineMap.push(v)
          }
        })
    })
    // 在线音乐搜索
    const onlineMap = online.filter(item => item.name.includes(val))

    return {
      'online': onlineMap,
      'mine': mineMap
    }
  }

  return {
    /**
    * val 输入的值
    * 
    * 查找筛选
    */
    search,
    /**
     * 找到一个就返回 true
     */
    allHas
  }
}