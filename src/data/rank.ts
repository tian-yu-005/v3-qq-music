import { Maps } from './useImport'

// 获取 rank 下的所有图片
const rankImg = import.meta.glob('@/assets/img/music-home/rank/*.png', { eager: true }) as any

const maps = Maps(rankImg)

const rank = [
  { imgSrc: maps['a1'], playerCount: '1863.4万', type: '飙升榜', list: ['花好月圆夜- Lil Ghost小鬼', '听- 张杰', '乌梅子酱- 李荣浩'] },
  { imgSrc: maps['a2'], playerCount: '1990.0万', type: '热歌榜', list: ['乌梅子酱- 李荣浩', '就让这大雨全部落下- 容祖儿', '偏爱- 张芸京'] },
  { imgSrc: maps['a3'], playerCount: '13.3万', type: '新歌榜', list: ['循迹- 王子健', '是妈妈是女儿- 黄绮珊/希林娜依高', '谁- 肖曲冰'] },
  { imgSrc: maps['a4'], playerCount: '795.3万', type: '流行指数榜', list: ['乌梅子酱- 李荣浩', '我们的歌- 王力宏', '谁- 肖曲冰'] },
  { imgSrc: maps['a5'], playerCount: '140.3万', type: '喜力电音榜', list: ['冰川之泪 Tears from the lce River- 考拉kora', 'Best Gift- HoworD', 'Starlight- Drenchill/Jorik Burema'] },
  { imgSrc: maps['a6'], playerCount: '11.2万', type: '腾讯音乐人原创榜', list: ['怀旧金曲之页', '循迹- 王子健', '1987（Band）- 厌想'] },
  { imgSrc: maps['a7'], playerCount: '305.0万', type: '听歌识曲榜', list: ['回忆观影券- IN-K/王忻辰', '爱如火- 那艺娜', '我记得- 赵雷'] },
  { imgSrc: maps['a8'], playerCount: '145.0万', type: 'MV榜', list: ['乌梅子酱- 李荣浩', '花开忘忧- 周深', '부석순 (SEVENTEEN)- BSS/李泳知'] }
] as any[]

const rank_all = {
  'place': {
    title: '地区榜',
    rank: [
      { imgSrc: maps['b1'], playerCount: '140.9万' },
      { imgSrc: maps['b2'], playerCount: '91.7万' },
      { imgSrc: maps['b3'], playerCount: '43.2万' },
      { imgSrc: maps['b4'], playerCount: '194.0万' },
      { imgSrc: maps['b5'], playerCount: '181.7万' },
      { imgSrc: maps['b6'], playerCount: '52.7万' }
    ]
  },
  'world': {
    title: '全球榜',
    rank: [
      { imgSrc: maps['c1'], playerCount: '197.0万' },
      { imgSrc: maps['c2'], playerCount: '191.9万' },
      { imgSrc: maps['c3'], playerCount: '52.2万' },
      { imgSrc: maps['c4'], playerCount: '42.1万' },
      { imgSrc: maps['c5'], playerCount: '26.8万' },
      { imgSrc: maps['c6'], playerCount: '41.5万' },
      { imgSrc: maps['c7'], playerCount: '35.5万' },
      { imgSrc: maps['c8'], playerCount: '53.2万' }
    ]
  }
} as any

export {
  rank,
  rank_all
}