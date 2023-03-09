import { Maps } from './useImport'
const diantaiImg = import.meta.glob('@/assets/img/diantai/*.png', { eager: true }) as any
// 精选
const diantai_maps = Maps(diantaiImg)

const diantai = [
  {
    type: '热门',
    list: [
      { imgSrc: diantai_maps['a1'], title: '随心听' },
      { imgSrc: diantai_maps['a2'], title: '抖音神曲' },
      { imgSrc: diantai_maps['a3'], title: '深度催眠' },
      { imgSrc: diantai_maps['a4'], title: '情感治愈站' },
      { imgSrc: diantai_maps['a5'], title: 'KTV必点歌' },
      { imgSrc: diantai_maps['a6'], title: '经典' },
      { imgSrc: diantai_maps['a7'], title: '网络流行' },
      { imgSrc: diantai_maps['a8'], title: '热门翻唱' },
      { imgSrc: diantai_maps['a9'], title: '助眠白噪音' },
      { imgSrc: diantai_maps['a10'], title: '热歌' },
      { imgSrc: diantai_maps['a11'], title: '精选招牌歌' },
      { imgSrc: diantai_maps['a12'], title: '平静' },
      { imgSrc: diantai_maps['a13'], title: '车载' },
      { imgSrc: diantai_maps['a14'], title: '情歌' }
    ]
  },
  {
    type: '主题',
    list: [
      { imgSrc: diantai_maps['c1'], title: '国漫原生' },
      { imgSrc: diantai_maps['c2'], title: '经典日漫' },
      { imgSrc: diantai_maps['c3'], title: '日漫新番' },
      { imgSrc: diantai_maps['c4'], title: '综艺' }
    ]
  },
  {
    type: '曲风',
    list: [
      { imgSrc: diantai_maps['b1'], title: '欧美流行' },
      { imgSrc: diantai_maps['b2'], title: '电音' },
      { imgSrc: diantai_maps['b3'], title: '流行' },
      { imgSrc: diantai_maps['b4'], title: '古风' },
      { imgSrc: diantai_maps['b5'], title: '民谣' }
    ]
  }
] as any[]

export {
  diantai
}