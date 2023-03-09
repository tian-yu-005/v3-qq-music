
import type { ISong, ISongList } from '@/types/ISong'
import b1 from '@/assets/img/hot/b1.png'
import b2 from '@/assets/img/hot/b2.png'
import a3 from '@/assets/img/music-home/category-list/a3.png'
import logo from '@/assets/img/logo.webp'
import { Maps } from './useImport'
import { mp3_maps } from './mp3'

const jingxuanImg = import.meta.glob('@/assets/img/music-home/jingxuan/*.png', { eager: true }) as any
const songerImg = import.meta.glob('@/assets/img/music-home/songer/*.png', { eager: true }) as any
const cateImg = import.meta.glob('@/assets/img/music-home/category-list/*.png', { eager: true }) as any
// 精选
const maps = Maps(jingxuanImg)
// 有声电台
const songer_maps = Maps(songerImg)
// 分类歌单
const cate_maps = Maps(cateImg)


// 精选
/** 官方歌单 */
const officialList = [
  {
    id: 101,
    imgSrc: b2,
    playerCount: '429.8万',
    title: '甜蜜告白！你喜欢我吧，我很甜的',
    user: 'QQ音乐官方歌单',
    avatar: logo,
    tags: ['流行', '甜蜜'],
    detail: '要不你就喜欢我吧，我很甜的 甜蜜蜜，甜丝丝，你一出现，空气都变得很香甜~',
    list: [
      {
        id: 101001,
        imgSrc: maps['b101001'],
        name: '小城夏天',
        songer: 'LBI利比',
        album: '小城夏天',
        audio: mp3_maps['小城夏天']
      },
      {
        id: 101002,
        imgSrc: maps['b101002'],
        name: '心愿便利贴',
        songer: '王欣宇',
        album: '心愿便利贴',
        audio: mp3_maps['心愿便利贴']
      }
    ]
  },
  {
    id: 102,
    imgSrc: maps['b101002'],
    playerCount: '1269.8万',
    title: '神仙日语歌｜超治愈，猛女必备',
    user: 'QQ音乐官方歌单',
    avatar: logo,
    tags: ['日语', '治愈', '流行'],
    detail: '每个人的心底都藏着似海的温柔,天边泛黄的云彩也会带来温柔的风,深海的鲸落也会给予最后的温柔。往昔的理想与梦想,此刻终于将它们实现,天空是如此清澈,感觉充满了无限的勇气我要告诉你,不管你在世界的哪个地方,我们终将再次相逢。',
    list: [
      {
        id: 102001,
        imgSrc: maps['b102001'],
         
        name: '打上花火',
        songer: 'DAOKO (ダヲコ) / 米津玄師 (よねづ けんし)',
        album: '打上花火 (初回限定盤)',
        audio: ''
      },
      {
        id: 102002,
        imgSrc: maps['b102002'],
         
        name: '恋爱循环',
        songer: '华语群星',
        album: '',
        audio: ''
      }
    ]
  },
  {
    id: 103,
    imgSrc: a3,
    playerCount: '755.7万',
    title: '日系萌嗓！可爱预警，指数已爆表',
    user: 'QQ音乐官方歌单',
    avatar: logo,
    tags: ['日语'],
    detail: '健康可爱，值得期待。没心没肺，快乐加倍！愿你眼里的星星温柔泛滥，人间至善，超级可爱的日系曲调呀，进入耳朵后整个心都会被软萌化哦，凑近你的耳朵，融化你的心哟。',
    list: [
      {
        id: 103001,
        imgSrc: maps['b103001'],
        name: '彼女は旅に出る',
        songer: '鎖那 (さな)',
        album: 'Hush a by little girl',
        audio: mp3_maps['彼女は旅に出る']
      },
      {
        id: 103002,
        imgSrc: maps['b103002'],
        name: '勾指起誓',
        songer: 'Semi',
        album: '勾指起誓',
        audio: mp3_maps['Semi - 勾指起誓']
      }
    ]
  },
  {
    id: 104,
    imgSrc: b1,
    playerCount: '322.9万',
    title: '宝藏日语丨世界与你环环相扣',
    user: 'QQ音乐官方歌单',
    avatar: logo,
    tags: ['日语', '治愈'],
    detail: '我在梦的彼岸相望. 你是否还愿意在我的心怀中弥漫. 花朵凌乱蜜糖，夏日的风淡淡熏染过悲伤. 我想开口. 这城市的街角相遇,而天空依然在你的世界里飘荡忧愁. 啊喂—— 可真是莫名其妙呢. 怎么眼泪止不住的流下. 遮掩住了视线. 那时候，阳光好像冷了',
    list: [
      {
        id: 104001,
        imgSrc: maps['b104001'],
         
        name: 'aLIEz',
        songer: 'SawanoHiroyuki[nZk] (泽野弘之)',
        album: 'O1',
        audio: mp3_maps['aLIEz']
      },
      {
        id: 104002,
        imgSrc: maps['b104002'],
         
        name: 'Brave Shine',
        songer: 'Aimer (エメ)',
        album: 'Brave Shine',
        audio: ''
      }
    ]
  },
  {
    id: 105,
    imgSrc: maps['b105'],
    playerCount: '8519.9万',
    title: '声音撩到停不下来的欧美金曲',
    user: 'QQ音乐官方歌单',
    avatar: logo,
    tags: ['英语', '流行'],
    detail: '声音太魅惑了吧！！！ 欧美耳控福利！！！猛女落泪（っ╥╯﹏╰╥c）',
    list: [
      {
        id: 105001,
        imgSrc: maps['b105001'],
         
        name: 'Slow Down',
        songer: 'Sineself / Angel Pieters',
        album: 'Slow Down',
        audio: mp3_maps['Slow Down']
      },
      {
        id: 105002,
        imgSrc: maps['b105002'],
         
        name: 'Fool For You',
        songer: 'Kastra',
        album: 'Fool For You',
        audio: mp3_maps['Fool For You']
      }
    ]
  },
  {
    id: 106,
    imgSrc: maps['b106'],
    playerCount: '123.8万',
    title: '清纯女声｜甜蜜缭绕·温柔怀绪',
    user: 'QQ音乐官方歌单',
    avatar: logo,
    tags: ['国语', '甜蜜', '情歌'],
    detail: '甜蜜缭绕的情话配上温柔似水的声线，字里行间充满着浓浓爱意。',
    list: [
      {
        id: 106001,
        imgSrc: maps['b106001'],
         
        name: '静悄悄',
        songer: '旺仔小乔',
        album: '静悄悄',
        audio: mp3_maps['静俏俏']
      },
      {
        id: 106002,
        imgSrc: maps['b106002'],
         
        name: '南半球与北海道',
        songer: '范倪Liu',
        album: '南半球与北海道',
        audio: mp3_maps['南半球与北海道']
      }
    ]
  }
] as ISongList[]

const hot_diantai = [
  { imgSrc: maps['c1'], playerCount: '52.7万', title: '频率FM' },
  { imgSrc: maps['c2'], playerCount: '1.2万', title: '西方音乐历史漂亮指南' },
  { imgSrc: maps['c3'], playerCount: '434.8万', title: '重生之人渣反派自救系统丨我也想好好过日子啊！' },
  { imgSrc: maps['c4'], playerCount: '1734.6万', title: '活人禁忌|精品多人剧' },
  { imgSrc: maps['c5'], playerCount: '616.5万', title: '巴啦啦小魔仙之魔法星缘堡梦幻主题曲' },
  { imgSrc: maps['c6'], playerCount: '407.0万', title: '有问题，找一禅 | 解答你的情感疑惑' },
] as ISongList[]

// 有声电台
/** 推荐节目 */
const tuijian = [
  {
    id: 101001,
    imgSrc: maps['b101001'],
    name: '小城夏天',
    songer: 'LBI利比',
    album: '小城夏天',
    audio: mp3_maps['小城夏天']
  },
  {
    id: 101002,
    imgSrc: maps['b101002'],
    name: '心愿便利贴',
    songer: '王欣宇',
    album: '心愿便利贴',
    audio: mp3_maps['心愿便利贴']
  },
  {
    id: 102001,
    imgSrc: maps['b102001'],
    name: '打上花火',
    songer: 'DAOKO (ダヲコ) / 米津玄師 (よねづ けんし)',
    album: '打上花火 (初回限定盤)',
    audio: ''
  },
  {
    id: 102002,
    imgSrc: maps['b102002'],
    name: '恋爱循环',
    songer: '华语群星',
    album: '',
    audio: ''
  },
  {
    id: 103001,
    imgSrc: maps['b103001'],
    name: '彼女は旅に出る',
    songer: '鎖那 (さな)',
    album: 'Hush a by little girl',
    audio: mp3_maps['彼女は旅に出る']
  },
  {
    id: 103002,
    imgSrc: maps['b103002'],
    name: '勾指起誓',
    songer: 'Semi',
    album: '勾指起誓',
    audio: mp3_maps['Semi - 勾指起誓']
  },
  {
    id: 104001,
    imgSrc: maps['b104001'],
    name: 'aLIEz',
    songer: 'SawanoHiroyuki[nZk] (泽野弘之)',
    album: 'O1',
    audio: mp3_maps['aLIEz']
  },
  {
    id: 104002,
    imgSrc: maps['b104002'],
    name: 'Brave Shine',
    songer: 'Aimer (エメ)',
    album: 'Brave Shine',
    audio: ''
  },
  {
    id: 105001,
    imgSrc: maps['b105001'],
    name: 'Slow Down',
    songer: 'Sineself / Angel Pieters',
    album: 'Slow Down',
    audio: mp3_maps['Slow Down']
  },
  {
    id: 105002,
    imgSrc: maps['b105002'],
    name: 'Fool For You',
    songer: 'Kastra',
    album: 'Fool For You',
    audio: mp3_maps['Fool For You']
  },
  {
    id: 106001,
    imgSrc: maps['b106001'],
    name: '静悄悄',
    songer: '旺仔小乔',
    album: '静悄悄',
    audio: mp3_maps['静俏俏']
  },
  {
    id: 106002,
    imgSrc: maps['b106002'],
    name: '南半球与北海道',
    songer: '范倪Liu',
    album: '南半球与北海道',
    audio: mp3_maps['南半球与北海道']
  }
] as ISong[]

// 歌手
const songer = [
  { imgSrc: songer_maps['b1'], name: '周杰伦', tags: ['港台', '男', '流行'] },
  { imgSrc: songer_maps['b2'], name: '林俊杰', tags: ['港台', '男', '流行'] },
  { imgSrc: songer_maps['b3'], name: 'G.E.M. 邓紫棋', tags: ['港台', '女', '流行'] },
  { imgSrc: songer_maps['b4'], name: '陈奕迅', tags: ['港台', '男', '流行'] },
  { imgSrc: songer_maps['b5'], name: '薛之谦', tags: ['内地', '男', '流行'] },
  { imgSrc: songer_maps['c8'], name: 'SING女团', tags: ['内地', '组合', '国风'] },
  { imgSrc: songer_maps['c1'], name: '七叔（叶泽浩）', tags: ['内地', '男', '国风'] },
  { imgSrc: songer_maps['c2'], name: '邓寓君(等什么君)', tags: ['内地', '女', '国风'] },
  { imgSrc: songer_maps['c3'], name: '阿悠悠', tags: ['内地', '女', '国风'] },
  { imgSrc: songer_maps['c4'], name: '音阙诗听', tags: ['内地', '组合', '国风'] },
  { imgSrc: songer_maps['c5'], name: '司南', tags: ['内地', '女', '国风'] },
  { imgSrc: songer_maps['c6'], name: '艾辰', tags: ['内地', '男', '国风'] },
  { imgSrc: songer_maps['c7'], name: '叶炫清', tags: ['内地', '女', '国风'] },
  { imgSrc: songer_maps['a1'], name: '队长', tags: ['内地', '男', '说唱'] },
  { imgSrc: songer_maps['a2'], name: '街道办GDC', tags: ['内地', '组合', '说唱'] },
  { imgSrc: songer_maps['a3'], name: 'Lil Ghost小鬼', tags: ['内地', '男', '说唱'] },
  { imgSrc: songer_maps['a4'], name: 'A1 TRIP', tags: ['内地', '组合', '说唱'] },
  { imgSrc: songer_maps['a5'], name: '王以太', tags: ['内地', '男', '说唱'] },
  { imgSrc: songer_maps['a6'], name: '潘玮柏', tags: ['港台', '男', '说唱'] },
  { imgSrc: songer_maps['a7'], name: '南征北战NZBZ', tags: ['内地', '组合', '说唱'] },
  { imgSrc: songer_maps['a8'], name: '考拉kora', tags: ['内地', '女', '说唱'] },
  { imgSrc: songer_maps['a9'], name: '满舒克', tags: ['内地', '男', '说唱'] },
  { imgSrc: songer_maps['a10'], name: 'NINEONE #', tags: ['内地', '女', '说唱'] },
  { imgSrc: songer_maps['a11'], name: 'Mad Clown (매드 클라운)', tags: ['韩国', '男', '说唱'] },
  { imgSrc: songer_maps['a12'], name: 'Epik High (에픽하이)', tags: ['韩国', '组合', '说唱'] },
  { imgSrc: songer_maps['a13'], name: 'B.I (金韩彬)', tags: ['韩国', '男', '说唱'] },
  { imgSrc: songer_maps['a14'], name: '田小娟 (전소연)', tags: ['韩国', '女', '说唱'] },
  { imgSrc: songer_maps['a15'], name: 'Janet Suhh (자넷서)', tags: ['韩国', '女', '说唱'] },
  { imgSrc: songer_maps['d1'], name: 'Ayasa绚沙', tags: ['日本', '女', '流行'] },
  { imgSrc: songer_maps['d2'], name: '花澤香菜 (はなざわ かな)', tags: ['日本', '女', '流行'] },
  { imgSrc: songer_maps['d3'], name: '鎖那 (さな)', tags: ['日本', '女', '流行'] }
]

// 分类歌单
const categoryList = [
  { imgSrc: cate_maps['a1'], playerCount: '1329.7万', title: '90后粤语：越成长越懂歌词', user: '越夜粤冷' },
  { imgSrc: cate_maps['a2'], playerCount: '75.4万',   title: '抖音热歌 | 火爆全网超好听', user: '泽其' },
  { imgSrc: cate_maps['a3'], playerCount: '37.4万',   title: '日系萌嗓！可爱预警，指数已爆表', user: '永远喜欢酒伴仙' },
  { imgSrc: cate_maps['a4'], playerCount: '75.1万',   title: '情窦初开 | 想要甜甜的恋爱', user: '安可' },
  { imgSrc: cate_maps['a5'], playerCount: '115.1万',  title: '治愈英语歌｜温柔的灵魂终将相遇', user: 'ৡৢ落 尘ৡৢ' },
  { imgSrc: cate_maps['a6'], playerCount: '69.1万',   title: '前奏秒杀 • 让你循环的纯音', user: 'Catch丶秋' },
  { imgSrc: cate_maps['a7'], playerCount: '237.4万',  title: '值得收藏的100首华语好歌', user: '柳云歌' },
  { imgSrc: cate_maps['a8'], playerCount: '75.4万',   title: '偷心盗贼！抖音最火女声歌曲', user: '星野一' },
  { imgSrc: cate_maps['a9'], playerCount: '37.4万',   title: '你中学时代用过哪句歌词写情书？', user: 'Mandy from SANLITUNER' },
  { imgSrc: cate_maps['a10'], playerCount: '75.1万',  title: '欧美粉必听！收藏过百万热歌全集', user: '星野一' },
  { imgSrc: cate_maps['a11'], playerCount: '115.1万', title: '100+车载英文歌 : 来，跟着唱', user: '✧𝗆𝗂𝗌𝗌小梨ꦿ᭄࿐' },
  { imgSrc: cate_maps['a12'], playerCount: '69.1万',  title: '神仙打架！一人一首歌，唱入心扉', user: '反派大魔王' },
  { imgSrc: cate_maps['a13'], playerCount: '115.1万', title: '甜度爆表│甜甜的恋爱，我也想要', user: '枯萎的花' },
  { imgSrc: cate_maps['a14'], playerCount: '69.1万',  title: '港乐流行歌，“粤”听“粤”钟意', user: '反派大魔王' },
] as any[]

export {
  officialList,
  hot_diantai,
  tuijian,
  songer,
  categoryList
}