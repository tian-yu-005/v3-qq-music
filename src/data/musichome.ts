import type { ISong, ISongList } from '@/types/ISong'
// 精选
/** 官方歌单 */
const officialList = [
  {
    id: 101,
    imgSrc: '/src/assets/img/hot/b2.png',
    playerCount: '429.8万',
    title: '甜蜜告白！你喜欢我吧，我很甜的',
    user: 'QQ音乐官方歌单',
    avatar: '/src/assets/img/logo.webp',
    tags: ['流行', '甜蜜'],
    detail: '要不你就喜欢我吧，我很甜的 甜蜜蜜，甜丝丝，你一出现，空气都变得很香甜~',
    list: [
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
    ]
  },
  {
    id: 102,
    imgSrc: '/src/assets/img/music-home/jingxuan/b101002.png',
    playerCount: '1269.8万',
    title: '神仙日语歌｜超治愈，猛女必备',
    user: 'QQ音乐官方歌单',
    avatar: '/src/assets/img/logo.webp',
    tags: ['日语', '治愈', '流行'],
    detail: '每个人的心底都藏着似海的温柔,天边泛黄的云彩也会带来温柔的风,深海的鲸落也会给予最后的温柔。往昔的理想与梦想,此刻终于将它们实现,天空是如此清澈,感觉充满了无限的勇气我要告诉你,不管你在世界的哪个地方,我们终将再次相逢。',
    list: [
      {
        id: 102001,
        imgSrc: '/src/assets/img/music-home/jingxuan/b102001.png',
         
        name: '打上花火',
        songer: 'DAOKO (ダヲコ) / 米津玄師 (よねづ けんし)',
        album: '打上花火 (初回限定盤)',
        audio: ''
      },
      {
        id: 102002,
        imgSrc: '/src/assets/img/music-home/jingxuan/b102002.png',
         
        name: '恋爱循环',
        songer: '华语群星',
        album: '',
        audio: ''
      }
    ]
  },
  {
    id: 103,
    imgSrc: '/src/assets/img/music-home/category-list/a3.png',
    playerCount: '755.7万',
    title: '日系萌嗓！可爱预警，指数已爆表',
    user: 'QQ音乐官方歌单',
    avatar: '/src/assets/img/logo.webp',
    tags: ['日语'],
    detail: '健康可爱，值得期待。没心没肺，快乐加倍！愿你眼里的星星温柔泛滥，人间至善，超级可爱的日系曲调呀，进入耳朵后整个心都会被软萌化哦，凑近你的耳朵，融化你的心哟。',
    list: [
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
      }
    ]
  },
  {
    id: 104,
    imgSrc: '/src/assets/img/hot/b1.png',
    playerCount: '322.9万',
    title: '宝藏日语丨世界与你环环相扣',
    user: 'QQ音乐官方歌单',
    avatar: '/src/assets/img/logo.webp',
    tags: ['日语', '治愈'],
    detail: '我在梦的彼岸相望. 你是否还愿意在我的心怀中弥漫. 花朵凌乱蜜糖，夏日的风淡淡熏染过悲伤. 我想开口. 这城市的街角相遇,而天空依然在你的世界里飘荡忧愁. 啊喂—— 可真是莫名其妙呢. 怎么眼泪止不住的流下. 遮掩住了视线. 那时候，阳光好像冷了',
    list: [
      {
        id: 104001,
        imgSrc: '/src/assets/img/music-home/jingxuan/b104001.png',
         
        name: 'aLIEz',
        songer: 'SawanoHiroyuki[nZk] (泽野弘之)',
        album: 'O1',
        audio: '/src/assets/mp3/aLIEz.mp3'
      },
      {
        id: 104002,
        imgSrc: '/src/assets/img/music-home/jingxuan/b104002.png',
         
        name: 'Brave Shine',
        songer: 'Aimer (エメ)',
        album: 'Brave Shine',
        audio: ''
      }
    ]
  },
  {
    id: 105,
    imgSrc: '/src/assets/img/music-home/jingxuan/b105.png',
    playerCount: '8519.9万',
    title: '声音撩到停不下来的欧美金曲',
    user: 'QQ音乐官方歌单',
    avatar: '/src/assets/img/logo.webp',
    tags: ['英语', '流行'],
    detail: '声音太魅惑了吧！！！ 欧美耳控福利！！！猛女落泪（っ╥╯﹏╰╥c）',
    list: [
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
      }
    ]
  },
  {
    id: 106,
    imgSrc: '/src/assets/img/music-home/jingxuan/b106.png',
    playerCount: '123.8万',
    title: '清纯女声｜甜蜜缭绕·温柔怀绪',
    user: 'QQ音乐官方歌单',
    avatar: '/src/assets/img/logo.webp',
    tags: ['国语', '甜蜜', '情歌'],
    detail: '甜蜜缭绕的情话配上温柔似水的声线，字里行间充满着浓浓爱意。',
    list: [
      {
        id: 106001,
        imgSrc: '/src/assets/img/music-home/jingxuan/b106001.png',
         
        name: '静悄悄',
        songer: '旺仔小乔',
        album: '静悄悄',
        audio: '/src/assets/mp3/静俏俏.mp3'
      },
      {
        id: 106002,
        imgSrc: '/src/assets/img/music-home/jingxuan/b106002.png',
         
        name: '南半球与北海道',
        songer: '范倪Liu',
        album: '南半球与北海道',
        audio: '/src/assets/mp3/南半球与北海道.mp3'
      }
    ]
  }
] as ISongList[]

// 有声电台
/** 推荐节目 */
const tuijian = [
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
  },
  {
    id: 102001,
    imgSrc: '/src/assets/img/music-home/jingxuan/b102001.png',
    name: '打上花火',
    songer: 'DAOKO (ダヲコ) / 米津玄師 (よねづ けんし)',
    album: '打上花火 (初回限定盤)',
    audio: ''
  },
  {
    id: 102002,
    imgSrc: '/src/assets/img/music-home/jingxuan/b102002.png',
    name: '恋爱循环',
    songer: '华语群星',
    album: '',
    audio: ''
  },
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
    id: 104001,
    imgSrc: '/src/assets/img/music-home/jingxuan/b104001.png',
    name: 'aLIEz',
    songer: 'SawanoHiroyuki[nZk] (泽野弘之)',
    album: 'O1',
    audio: '/src/assets/mp3/aLIEz.mp3'
  },
  {
    id: 104002,
    imgSrc: '/src/assets/img/music-home/jingxuan/b104002.png',
    name: 'Brave Shine',
    songer: 'Aimer (エメ)',
    album: 'Brave Shine',
    audio: ''
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
    id: 106001,
    imgSrc: '/src/assets/img/music-home/jingxuan/b106001.png',
    name: '静悄悄',
    songer: '旺仔小乔',
    album: '静悄悄',
    audio: '/src/assets/mp3/静俏俏.mp3'
  },
  {
    id: 106002,
    imgSrc: '/src/assets/img/music-home/jingxuan/b106002.png',
    name: '南半球与北海道',
    songer: '范倪Liu',
    album: '南半球与北海道',
    audio: '/src/assets/mp3/南半球与北海道.mp3'
  }
] as ISong[]

export {
  officialList,
  tuijian
}