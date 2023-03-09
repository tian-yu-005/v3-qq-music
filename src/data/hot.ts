import type { ISong, ISongList } from '@/types/ISong' 
// 推荐 201
const hotlist = [
  {
    id: 201,
    imgSrc: '/src/assets/img/hot/a2.png',
    playerCount: '',
    title: '每日30首',
    user: 'QQ音乐官方歌单',
    avatar: '/src/assets/img/logo.webp',
    tags: [],
    detail: '甄选私人好品味：今日份的yihuik苡慧、安苏羽、赵希予等歌手一定值得你的期待',
    list: [
      {
        id: 201001,
        imgSrc: '/src/assets/img/hot/a201001.png',
        name: '烟袋斜街',
        songer: '接个吻，开一枪',
        album: '烟袋斜街',
        audio: '/src/assets/mp3/烟袋斜街.mp3'
      },
      {
        id: 201002,
        imgSrc: '/src/assets/img/hot/a201002.png',
        name: '后会无期',
        songer: 'G.E.M. 邓紫棋',
        album: '后会无期 电影原声带',
        audio: '/src/assets/mp3/后会无期.mp3'
      }
    ]
  },
  {
    id: 202,
    imgSrc: '/src/assets/img/hot/a202.png',
    playerCount: '',
    title: '百万收藏',
    user: 'QQ音乐官方歌单',
    avatar: '/src/assets/img/logo.webp',
    tags: [],
    detail: 'QQ音乐用户常听的人气好歌都在这里，歌单中每一首歌都超过百万收藏。歌单每日更新，点击红心收藏吧！',
    list: [
      {
        id: 202001,
        imgSrc: '/src/assets/img/hot/a202001.png',
        name: 'Insomnia (불면증) (失眠症)',
        songer: '辉星 (휘성)',
        album: 'Insomnia (불면증) (失眠症)',
        audio: '/src/assets/mp3/失眠症.mp3'
      },
      {
        id: 202002,
        imgSrc: '/src/assets/img/hot/a202002.png',
        name: '朗朗晴天',
        songer: '羽生まゐご',
        album: '浮世巡り',
        audio: '/src/assets/mp3/朗朗晴空.mp3'
      }
    ]
  },
  {
    id: 203,
    imgSrc: '/src/assets/img/hot/a2.png',
    playerCount: '',
    title: '每日30首',
    user: 'QQ音乐官方歌单',
    avatar: '/src/assets/img/logo.webp',
    tags: [],
    detail: '甄选私人好品味：今日份的yihuik苡慧、安苏羽、赵希予等歌手一定值得你的期待',
    list: [
      {
        id: 203001,
        imgSrc: '/src/assets/img/hot/a201001.png',
        name: '烟袋斜街',
        songer: '接个吻，开一枪',
        album: '烟袋斜街',
        audio: '/src/assets/mp3/烟袋斜街.mp3'
      },
      {
        id: 203002,
        imgSrc: '/src/assets/img/hot/a201002.png',
        name: '后会无期',
        songer: 'G.E.M. 邓紫棋',
        album: '后会无期 电影原声带',
        audio: '/src/assets/mp3/后会无期.mp3'
      }
    ]
  },
  {
    id: 204,
    imgSrc: '/src/assets/img/hot/a202.png',
    playerCount: '',
    title: '百万收藏',
    user: 'QQ音乐官方歌单',
    avatar: '/src/assets/img/logo.webp',
    tags: [],
    detail: 'QQ音乐用户常听的人气好歌都在这里，歌单中每一首歌都超过百万收藏。歌单每日更新，点击红心收藏吧！',
    list: [
      {
        id: 204001,
        imgSrc: '/src/assets/img/hot/a202001.png',
        name: 'Insomnia (불면증) (失眠症)',
        songer: '辉星 (휘성)',
        album: 'Insomnia (불면증) (失眠症)',
        audio: '/src/assets/mp3/失眠症.mp3'
      },
      {
        id: 204002,
        imgSrc: '/src/assets/img/hot/a202002.png',
        name: '朗朗晴天',
        songer: '羽生まゐご',
        album: '浮世巡り',
        audio: '/src/assets/mp3/朗朗晴空.mp3'
      }
    ]
  }
] as ISongList[]

// 歌单宝藏库 251
const hot_2 = [
  {
    id: 251,
    imgSrc: '/src/assets/img/hot/b1.png',
    playerCount: '322.0万',
    title: '宝藏日语丨世界与你环环相扣',
    user: '深',
    avatar: '/src/assets/user/a1.png',
    tags: ['日语', '治愈'],
    detail: '我在梦的彼岸相望. 你是否还愿意在我的心怀中弥漫. 花朵凌乱蜜糖，夏日的风淡淡熏染过悲伤. 我想开口. 这城市的街角相遇,而天空依然在你的世界里飘荡忧愁. 啊喂—— 可真是莫名其妙呢. 怎么眼泪止不住的流下. 遮掩住了视线. 那时候，阳光好像冷了.',
    list: [
      {
        id: 251001,
        imgSrc: '/src/assets/img/hot/251001.png',
        name: 'また君と (再度和你)',
        songer: 'JAY\'ED / Ms.OOJA',
        album: 'また君と (再度和你)',
        audio: '/src/assets/mp3/再度和你.mp3'
      },
      {
        id: 251002,
        imgSrc: '/src/assets/img/hot/251002.png',
        name: '心做し',
        songer: '鹿乃 (かの)',
        album: 'メリー (Merry)',
        audio: '/src/assets/mp3/无心.mp3'
      }
    ]
  },
  {
    id: 252,
    imgSrc: '/src/assets/img/hot/b2.png',
    playerCount: '34.6万',
    title: '日系女声：绚烂樱花下の至纯至美',
    user: 'Y',
    avatar: '/src/assets/user/a1.png',
    tags: ['日语', '治愈'],
    detail: '温柔治愈的日系女声，像暖暖的阳光，让人充满活力。 希望这个歌单能为你带来心情的晴天。',
    list: [
      {
        id: 252001,
        imgSrc: '/src/assets/img/hot/252001.png',
        name: '美しきもの',
        songer: 'Sound Horizon',
        album: 'Roman',
        audio: '/src/assets/mp3/美丽之物.mp3'
      },
      {
        id: 251002,
        imgSrc: '/src/assets/img/hot/252002.png',
        name: '轻飘飘',
        songer: '牧野由依',
        album: '轻飘飘',
        audio: '/src/assets/mp3/轻飘飘.mp3'
      }
    ]
  },
  {
    id: 253,
    imgSrc: '/src/assets/img/hot/b3.png',
    playerCount: '845.2万',
    title: '抖音神曲，深邃旋律撩人耳',
    user: '琉璃',
    avatar: '/src/assets/user/a1.png',
    tags: ['网络歌曲'],
    detail: '在众多的抖音神曲里，可能你会无从下手，这些都是精选收藏量高又好听的歌曲。 闲暇时间听一听还是挺不错的，不用找了，你喜欢的歌都在这里。',
    list: [
      {
        id: 253001,
        imgSrc: '/src/assets/img/hot/253001.png',
        name: '侧脸',
        songer: '于果',
        album: '侧脸',
        audio: '/src/assets/mp3/侧脸.mp3'
      },
      {
        id: 253002,
        imgSrc: '/src/assets/img/hot/253002.png',
        name: '必杀技',
        songer: '古巨基',
        album: '游戏基',
        audio: '/src/assets/mp3/必杀技.mp3'
      }
    ]
  },
  {
    id: 254,
    imgSrc: '/src/assets/img/hot/b4.png',
    playerCount: '4311.1万',
    title: 'bilibili百万点击超燃剪辑BGM',
    user: '好',
    avatar: '/src/assets/user/a1.png',
    tags: ['英语', '背景音乐'],
    detail: '只有最火最燃的超级踩点剪辑视频BGM。',
    list: [
      {
        id: 254001,
        imgSrc: '/src/assets/img/hot/254001.png',
        name: 'Fool For You',
        songer: 'Kastra',
        album: 'Fool For You',
        audio: '/src/assets/mp3/Fool For You.mp3'
      },
      {
        id: 254002,
        imgSrc: '/src/assets/img/hot/254002.png',
        name: 'Take Me Hand',
        songer: 'DAISHI DANCE (ダイシ・ダンス)',
        album: 'WONDER Tourism',
        audio: ''
      }
    ]
  },
  {
    id: 255,
    imgSrc: '/src/assets/img/hot/b5.png',
    playerCount: '22.6万',
    title: '「纯音乐」去掉心中的烦躁不安',
    user: '波鲁克',
    avatar: '/src/assets/user/a1.png',
    tags: ['治愈', '电子', '快乐'],
    detail: '心情不好的话，不妨听听这些歌曲，让这一首首纯音乐，去掉你内心的烦恼与忧愁。',
    list: [
      {
        id: 255001,
        imgSrc: '/src/assets/img/hot/255001.png',
        name: 'Wind With Clouds',
        songer: 'Little End',
        album: 'Wind With Clouds',
        audio: ''
      },
      {
        id: 255002,
        imgSrc: '/src/assets/img/hot/255002.png',
        name: 'Faded',
        songer: 'George Will',
        album: 'Faded',
        audio: ''
      }
    ]
  },
  {
    id: 256,
    imgSrc: '/src/assets/img/hot/b6.png',
    playerCount: '3951.3万',
    title: '治愈女声 | 温柔融化昨夜的冰雪',
    user: '星月总.倾雪凌',
    avatar: '/src/assets/user/a1.png',
    tags: ['治愈', '国语'],
    detail: '温柔女声，照亮你的心灵。最近丧的小可爱越来越多，用黑头的小伙伴也越来越多，人间还有光啊！为了一个不爱你的人不值得，没有人会永远留在你身边，但会一直有人记得你。答应我，一定要好好的，好好的',
    list: [
      {
        id: 256001,
        imgSrc: '/src/assets/img/hot/255001.png',
        name: 'Wind With Clouds',
        songer: 'Little End',
        album: 'Wind With Clouds',
        audio: ''
      },
      {
        id: 256002,
        imgSrc: '/src/assets/img/hot/255002.png',
        name: 'Faded',
        songer: 'George Will',
        album: 'Faded',
        audio: ''
      }
    ]
  },
  {
    id: 257,
    imgSrc: '/src/assets/img/hot/b7.png',
    playerCount: '1.2万',
    title: 'B站热门BGM：极致的听觉盛宴',
    user: '波鲁克',
    avatar: '/src/assets/user/a1.png',
    tags: ['治愈', '电子', '快乐'],
    detail: '心情不好的话，不妨听听这些歌曲，让这一首首纯音乐，去掉你内心的烦恼与忧愁。',
    list: [
      {
        id: 257001,
        imgSrc: '/src/assets/img/hot/255001.png',
        name: 'Wind With Clouds',
        songer: 'Little End',
        album: 'Wind With Clouds',
        audio: ''
      },
      {
        id: 257002,
        imgSrc: '/src/assets/img/hot/255002.png',
        name: 'Faded',
        songer: 'George Will',
        album: 'Faded',
        audio: ''
      }
    ]
  },
  {
    id: 258,
    imgSrc: '/src/assets/img/hot/b8.png',
    playerCount: '95.3万',
    title: '青春 • 学生时代上课偷听的歌',
    user: '波鲁克',
    avatar: '/src/assets/user/a1.png',
    tags: ['治愈', '电子', '快乐'],
    detail: '心情不好的话，不妨听听这些歌曲，让这一首首纯音乐，去掉你内心的烦恼与忧愁。',
    list: [
      {
        id: 258001,
        imgSrc: '/src/assets/img/hot/255001.png',
        name: 'Wind With Clouds',
        songer: 'Little End',
        album: 'Wind With Clouds',
        audio: ''
      },
      {
        id: 258002,
        imgSrc: '/src/assets/img/hot/255002.png',
        name: 'Faded',
        songer: 'George Will',
        album: 'Faded',
        audio: ''
      }
    ]
  },
  {
    id: 259,
    imgSrc: '/src/assets/img/hot/b9.png',
    playerCount: '496.5万',
    title: '粤语男声 | 最是情深不负你',
    user: '波鲁克',
    avatar: '/src/assets/user/a1.png',
    tags: ['治愈', '电子', '快乐'],
    detail: '心情不好的话，不妨听听这些歌曲，让这一首首纯音乐，去掉你内心的烦恼与忧愁。',
    list: [
      {
        id: 259001,
        imgSrc: '/src/assets/img/hot/255001.png',
        name: 'Wind With Clouds',
        songer: 'Little End',
        album: 'Wind With Clouds',
        audio: ''
      },
      {
        id: 259002,
        imgSrc: '/src/assets/img/hot/255002.png',
        name: 'Faded',
        songer: 'George Will',
        album: 'Faded',
        audio: ''
      }
    ]
  },
  {
    id: 260,
    imgSrc: '/src/assets/img/hot/b10.png',
    playerCount: '2.4亿',
    title: '「欧美」听一遍就会跟着和的英文歌',
    user: '波鲁克',
    avatar: '/src/assets/user/a1.png',
    tags: ['治愈', '电子', '快乐'],
    detail: '心情不好的话，不妨听听这些歌曲，让这一首首纯音乐，去掉你内心的烦恼与忧愁。',
    list: [
      {
        id: 260001,
        imgSrc: '/src/assets/img/hot/255001.png',
        name: 'Wind With Clouds',
        songer: 'Little End',
        album: 'Wind With Clouds',
        audio: ''
      },
      {
        id: 260002,
        imgSrc: '/src/assets/img/hot/255002.png',
        name: 'Faded',
        songer: 'George Will',
        album: 'Faded',
        audio: ''
      }
    ]
  },
  {
    id: 261,
    imgSrc: '/src/assets/img/hot/b11.png',
    playerCount: '893.2万',
    title: '爆燃游戏BGM｜以热血力挽狂澜',
    user: '波鲁克',
    avatar: '/src/assets/user/a1.png',
    tags: ['治愈', '电子', '快乐'],
    detail: '心情不好的话，不妨听听这些歌曲，让这一首首纯音乐，去掉你内心的烦恼与忧愁。',
    list: [
      {
        id: 261001,
        imgSrc: '/src/assets/img/hot/255001.png',
        name: 'Wind With Clouds',
        songer: 'Little End',
        album: 'Wind With Clouds',
        audio: ''
      },
      {
        id: 261002,
        imgSrc: '/src/assets/img/hot/255002.png',
        name: 'Faded',
        songer: 'George Will',
        album: 'Faded',
        audio: ''
      }
    ]
  },
  {
    id: 262,
    imgSrc: '/src/assets/img/hot/b12.png',
    playerCount: '100.2万',
    title: '可爱到犯规了！萌系日语快安利上',
    user: '波鲁克',
    avatar: '/src/assets/user/a1.png',
    tags: ['治愈', '电子', '快乐'],
    detail: '心情不好的话，不妨听听这些歌曲，让这一首首纯音乐，去掉你内心的烦恼与忧愁。',
    list: [
      {
        id: 262001,
        imgSrc: '/src/assets/img/hot/255001.png',
        name: 'Wind With Clouds',
        songer: 'Little End',
        album: 'Wind With Clouds',
        audio: ''
      },
      {
        id: 262002,
        imgSrc: '/src/assets/img/hot/255002.png',
        name: 'Faded',
        songer: 'George Will',
        album: 'Faded',
        audio: ''
      }
    ]
  },
] as ISongList[]

// 大家都在听
const hot_3 = [
  {
    id: 103001,
    imgSrc: '/src/assets/img/music-home/jingxuan/b103001.png',
    name: '彼女は旅に出る',
    songer: '鎖那 (さな)',
    album: 'Hush a by little girl',
    audio: '/src/assets/mp3/彼女は旅に出る.mp3'
  },
  {
    id: 103002,
    imgSrc: '/src/assets/img/music-home/jingxuan/b103002.png',
    name: '勾指起誓',
    songer: 'Semi',
    album: '勾指起誓',
    audio: '/src/assets/mp3/Semi - 勾指起誓.mp3'
  },
  {
    id: 105001,
    imgSrc: '/src/assets/img/music-home/jingxuan/b105001.png',
     
    name: 'Slow Down',
    songer: 'Sineself / Angel Pieters',
    album: 'Slow Down',
    audio: '/src/assets/mp3/Slow Down.mp3'
  },
  {
    id: 105002,
    imgSrc: '/src/assets/img/music-home/jingxuan/b105002.png',
     
    name: 'Fool For You',
    songer: 'Kastra',
    album: 'Fool For You',
    audio: '/src/assets/mp3/Fool For You.mp3'
  },
  {
    id: 101001,
    imgSrc: '/src/assets/img/music-home/jingxuan/b101001.png',
    name: '小城夏天',
    songer: 'LBI利比',
    album: '小城夏天',
    audio: '/src/assets/mp3/小城夏天.mp3'
  },
  {
    id: 101002,
    imgSrc: '/src/assets/img/music-home/jingxuan/b101002.png',
    name: '心愿便利贴',
    songer: '王欣宇',
    album: '心愿便利贴',
    audio: '/src/assets/mp3/心愿便利贴.mp3'
  }
] as ISong[]

export {
  hotlist,
  hot_2,
  hot_3
}
