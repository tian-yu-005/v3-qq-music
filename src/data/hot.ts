import type { ISong, ISongList } from '@/types/ISong' 
import logo from '@/assets/img/logo.webp'
import a1 from '@/assets/user/a1.png'
import { Maps } from './useImport'
import { mp3_maps } from './mp3'

const hotImg = import.meta.glob('@/assets/img/hot/*.png', { eager: true }) as any

const maps = Maps(hotImg)

// 推荐 201
const hotlist = [
  {
    id: 201,
    imgSrc: maps['a2'],
    playerCount: '',
    title: '每日30首',
    user: 'QQ音乐官方歌单',
    avatar: logo,
    tags: [],
    detail: '甄选私人好品味：今日份的yihuik苡慧、安苏羽、赵希予等歌手一定值得你的期待',
    list: [
      {
        id: 201001,
        imgSrc: maps['a201001'],
        name: '烟袋斜街',
        songer: '接个吻，开一枪',
        album: '烟袋斜街',
        audio: mp3_maps['烟袋斜街']
      },
      {
        id: 201002,
        imgSrc: maps['a201002'],
        name: '后会无期',
        songer: 'G.E.M. 邓紫棋',
        album: '后会无期 电影原声带',
        audio: mp3_maps['后会无期']
      }
    ]
  },
  {
    id: 202,
    imgSrc: maps['a202'],
    playerCount: '',
    title: '百万收藏',
    user: 'QQ音乐官方歌单',
    avatar: logo,
    tags: [],
    detail: 'QQ音乐用户常听的人气好歌都在这里，歌单中每一首歌都超过百万收藏。歌单每日更新，点击红心收藏吧！',
    list: [
      {
        id: 202001,
        imgSrc: maps['a202001'],
        name: 'Insomnia (불면증) (失眠症)',
        songer: '辉星 (휘성)',
        album: 'Insomnia (불면증) (失眠症)',
        audio: mp3_maps['失眠症']
      },
      {
        id: 202002,
        imgSrc: maps['a202002'],
        name: '朗朗晴天',
        songer: '羽生まゐご',
        album: '浮世巡り',
        audio: mp3_maps['朗朗晴空']
      }
    ]
  },
  {
    id: 203,
    imgSrc: maps['a2'],
    playerCount: '',
    title: '每日30首',
    user: 'QQ音乐官方歌单',
    avatar: logo,
    tags: [],
    detail: '甄选私人好品味：今日份的yihuik苡慧、安苏羽、赵希予等歌手一定值得你的期待',
    list: [
      {
        id: 203001,
        imgSrc: maps['a201001'],
        name: '烟袋斜街',
        songer: '接个吻，开一枪',
        album: '烟袋斜街',
        audio: mp3_maps['烟袋斜街']
      },
      {
        id: 203002,
        imgSrc: maps['a201002'],
        name: '后会无期',
        songer: 'G.E.M. 邓紫棋',
        album: '后会无期 电影原声带',
        audio: mp3_maps['后会无期']
      }
    ]
  },
  {
    id: 204,
    imgSrc: maps['a202'],
    playerCount: '',
    title: '百万收藏',
    user: 'QQ音乐官方歌单',
    avatar: logo,
    tags: [],
    detail: 'QQ音乐用户常听的人气好歌都在这里，歌单中每一首歌都超过百万收藏。歌单每日更新，点击红心收藏吧！',
    list: [
      {
        id: 204001,
        imgSrc: maps['a202001'],
        name: 'Insomnia (불면증) (失眠症)',
        songer: '辉星 (휘성)',
        album: 'Insomnia (불면증) (失眠症)',
        audio: mp3_maps['失眠症']
      },
      {
        id: 204002,
        imgSrc: maps['a202002'],
        name: '朗朗晴天',
        songer: '羽生まゐご',
        album: '浮世巡り',
        audio: mp3_maps['朗朗晴空']
      }
    ]
  }
] as ISongList[]

// 歌单宝藏库 251
const hot_2 = [
  {
    id: 251,
    imgSrc: maps['b1'],
    playerCount: '322.0万',
    title: '宝藏日语丨世界与你环环相扣',
    user: '深',
    avatar: a1,
    tags: ['日语', '治愈'],
    detail: '我在梦的彼岸相望. 你是否还愿意在我的心怀中弥漫. 花朵凌乱蜜糖，夏日的风淡淡熏染过悲伤. 我想开口. 这城市的街角相遇,而天空依然在你的世界里飘荡忧愁. 啊喂—— 可真是莫名其妙呢. 怎么眼泪止不住的流下. 遮掩住了视线. 那时候，阳光好像冷了.',
    list: [
      {
        id: 251001,
        imgSrc: maps['251001'],
        name: 'また君と (再度和你)',
        songer: 'JAY\'ED / Ms.OOJA',
        album: 'また君と (再度和你)',
        audio: mp3_maps['再度和你']
      },
      {
        id: 251002,
        imgSrc: maps['251002'],
        name: '心做し',
        songer: '鹿乃 (かの)',
        album: 'メリー (Merry)',
        audio: mp3_maps['无心']
      }
    ]
  },
  {
    id: 252,
    imgSrc: maps['b2'],
    playerCount: '34.6万',
    title: '日系女声：绚烂樱花下の至纯至美',
    user: 'Y',
    avatar: a1,
    tags: ['日语', '治愈'],
    detail: '温柔治愈的日系女声，像暖暖的阳光，让人充满活力。 希望这个歌单能为你带来心情的晴天。',
    list: [
      {
        id: 252001,
        imgSrc: maps['252001'],
        name: '美しきもの',
        songer: 'Sound Horizon',
        album: 'Roman',
        audio: mp3_maps['美丽之物']
      },
      {
        id: 251002,
        imgSrc: maps['252002'],
        name: '轻飘飘',
        songer: '牧野由依',
        album: '轻飘飘',
        audio: mp3_maps['轻飘飘']
      }
    ]
  },
  {
    id: 253,
    imgSrc: maps['b3'],
    playerCount: '845.2万',
    title: '抖音神曲，深邃旋律撩人耳',
    user: '琉璃',
    avatar: a1,
    tags: ['网络歌曲'],
    detail: '在众多的抖音神曲里，可能你会无从下手，这些都是精选收藏量高又好听的歌曲。 闲暇时间听一听还是挺不错的，不用找了，你喜欢的歌都在这里。',
    list: [
      {
        id: 253001,
        imgSrc: maps['253001'],
        name: '侧脸',
        songer: '于果',
        album: '侧脸',
        audio: mp3_maps['侧脸']
      },
      {
        id: 253002,
        imgSrc: maps['253002'],
        name: '必杀技',
        songer: '古巨基',
        album: '游戏基',
        audio: mp3_maps['必杀技']
      }
    ]
  },
  {
    id: 254,
    imgSrc: maps['b4'],
    playerCount: '4311.1万',
    title: 'bilibili百万点击超燃剪辑BGM',
    user: '好',
    avatar: a1,
    tags: ['英语', '背景音乐'],
    detail: '只有最火最燃的超级踩点剪辑视频BGM。',
    list: [
      {
        id: 254001,
        imgSrc: maps['254001'],
        name: 'Fool For You',
        songer: 'Kastra',
        album: 'Fool For You',
        audio: mp3_maps['Fool For You']
      },
      {
        id: 254002,
        imgSrc: maps['254002'],
        name: 'Take Me Hand',
        songer: 'DAISHI DANCE (ダイシ・ダンス)',
        album: 'WONDER Tourism',
        audio: ''
      }
    ]
  },
  {
    id: 255,
    imgSrc: maps['b5'],
    playerCount: '22.6万',
    title: '「纯音乐」去掉心中的烦躁不安',
    user: '波鲁克',
    avatar: a1,
    tags: ['治愈', '电子', '快乐'],
    detail: '心情不好的话，不妨听听这些歌曲，让这一首首纯音乐，去掉你内心的烦恼与忧愁。',
    list: [
      {
        id: 255001,
        imgSrc: maps['255001'],
        name: 'Wind With Clouds',
        songer: 'Little End',
        album: 'Wind With Clouds',
        audio: ''
      },
      {
        id: 255002,
        imgSrc: maps['255002'],
        name: 'Faded',
        songer: 'George Will',
        album: 'Faded',
        audio: ''
      }
    ]
  },
  {
    id: 256,
    imgSrc: maps['b6'],
    playerCount: '3951.3万',
    title: '治愈女声 | 温柔融化昨夜的冰雪',
    user: '星月总.倾雪凌',
    avatar: a1,
    tags: ['治愈', '国语'],
    detail: '温柔女声，照亮你的心灵。最近丧的小可爱越来越多，用黑头的小伙伴也越来越多，人间还有光啊！为了一个不爱你的人不值得，没有人会永远留在你身边，但会一直有人记得你。答应我，一定要好好的，好好的',
    list: [
      {
        id: 256001,
        imgSrc: maps['255001'],
        name: 'Wind With Clouds',
        songer: 'Little End',
        album: 'Wind With Clouds',
        audio: ''
      },
      {
        id: 256002,
        imgSrc: maps['255002'],
        name: 'Faded',
        songer: 'George Will',
        album: 'Faded',
        audio: ''
      }
    ]
  },
  {
    id: 257,
    imgSrc: maps['b7'],
    playerCount: '1.2万',
    title: 'B站热门BGM：极致的听觉盛宴',
    user: '波鲁克',
    avatar: a1,
    tags: ['治愈', '电子', '快乐'],
    detail: '心情不好的话，不妨听听这些歌曲，让这一首首纯音乐，去掉你内心的烦恼与忧愁。',
    list: [
      {
        id: 257001,
        imgSrc: maps['255001'],
        name: 'Wind With Clouds',
        songer: 'Little End',
        album: 'Wind With Clouds',
        audio: ''
      },
      {
        id: 257002,
        imgSrc: maps['255002'],
        name: 'Faded',
        songer: 'George Will',
        album: 'Faded',
        audio: ''
      }
    ]
  },
  {
    id: 258,
    imgSrc: maps['b8'],
    playerCount: '95.3万',
    title: '青春 • 学生时代上课偷听的歌',
    user: '波鲁克',
    avatar: a1,
    tags: ['治愈', '电子', '快乐'],
    detail: '心情不好的话，不妨听听这些歌曲，让这一首首纯音乐，去掉你内心的烦恼与忧愁。',
    list: [
      {
        id: 258001,
        imgSrc: maps['255001'],
        name: 'Wind With Clouds',
        songer: 'Little End',
        album: 'Wind With Clouds',
        audio: ''
      },
      {
        id: 258002,
        imgSrc: maps['255002'],
        name: 'Faded',
        songer: 'George Will',
        album: 'Faded',
        audio: ''
      }
    ]
  },
  {
    id: 259,
    imgSrc: maps['b9'],
    playerCount: '496.5万',
    title: '粤语男声 | 最是情深不负你',
    user: '波鲁克',
    avatar: a1,
    tags: ['治愈', '电子', '快乐'],
    detail: '心情不好的话，不妨听听这些歌曲，让这一首首纯音乐，去掉你内心的烦恼与忧愁。',
    list: [
      {
        id: 259001,
        imgSrc: maps['255001'],
        name: 'Wind With Clouds',
        songer: 'Little End',
        album: 'Wind With Clouds',
        audio: ''
      },
      {
        id: 259002,
        imgSrc: maps['255002'],
        name: 'Faded',
        songer: 'George Will',
        album: 'Faded',
        audio: ''
      }
    ]
  },
  {
    id: 260,
    imgSrc: maps['b10'],
    playerCount: '2.4亿',
    title: '「欧美」听一遍就会跟着和的英文歌',
    user: '波鲁克',
    avatar: a1,
    tags: ['治愈', '电子', '快乐'],
    detail: '心情不好的话，不妨听听这些歌曲，让这一首首纯音乐，去掉你内心的烦恼与忧愁。',
    list: [
      {
        id: 260001,
        imgSrc: maps['255001'],
        name: 'Wind With Clouds',
        songer: 'Little End',
        album: 'Wind With Clouds',
        audio: ''
      },
      {
        id: 260002,
        imgSrc: maps['255002'],
        name: 'Faded',
        songer: 'George Will',
        album: 'Faded',
        audio: ''
      }
    ]
  },
  {
    id: 261,
    imgSrc: maps['b11'],
    playerCount: '893.2万',
    title: '爆燃游戏BGM｜以热血力挽狂澜',
    user: '波鲁克',
    avatar: a1,
    tags: ['治愈', '电子', '快乐'],
    detail: '心情不好的话，不妨听听这些歌曲，让这一首首纯音乐，去掉你内心的烦恼与忧愁。',
    list: [
      {
        id: 261001,
        imgSrc: maps['255001'],
        name: 'Wind With Clouds',
        songer: 'Little End',
        album: 'Wind With Clouds',
        audio: ''
      },
      {
        id: 261002,
        imgSrc: maps['255002'],
        name: 'Faded',
        songer: 'George Will',
        album: 'Faded',
        audio: ''
      }
    ]
  },
  {
    id: 262,
    imgSrc: maps['b12'],
    playerCount: '100.2万',
    title: '可爱到犯规了！萌系日语快安利上',
    user: '波鲁克',
    avatar: a1,
    tags: ['治愈', '电子', '快乐'],
    detail: '心情不好的话，不妨听听这些歌曲，让这一首首纯音乐，去掉你内心的烦恼与忧愁。',
    list: [
      {
        id: 262001,
        imgSrc: maps['255001'],
        name: 'Wind With Clouds',
        songer: 'Little End',
        album: 'Wind With Clouds',
        audio: ''
      },
      {
        id: 262002,
        imgSrc: maps['255002'],
        name: 'Faded',
        songer: 'George Will',
        album: 'Faded',
        audio: ''
      }
    ]
  },
] as ISongList[]

export {
  hotlist,
  hot_2
}
