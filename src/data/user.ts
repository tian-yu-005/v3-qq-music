import type { IUser } from '@/types/IUser'

const info = [
  {
    id: 501,
    username: 'tianyu', 
    password: '123',
    avatar: '/src/assets/img/user/a.png',
    name: '天域宝宝',
    officialToken: '歌单达人',
    fansCount: '3',
    attentionCount: '4',
    // 我喜欢
    love: {
      songs: [
        { 
          id: 1,
          imgSrc: '/src/assets/img/love/a12.png',
             name: '纯纯的夏天', songer: 'LIKPIA', album: 'LIKPIA的夏天', 
          audio: '/src/assets/mp3/纯纯的夏天.mp3'        
        },
        { 
          id: 2,
          imgSrc: '/src/assets/img/love/a1.png',
             name: 'Curtain Call', songer: 'Steam Phunk / Lucy Neville', album: 'Curtain Call',
          audio: '/src/assets/mp3/Curtain Call.mp3'
        },
        { 
          id: 3,
          imgSrc: '/src/assets/img/love/a2.png',
             name: 'Fiction', songer: 'Adib Sin / Azuria Sky', album: 'Fiction',
          audio: 'http://dl.stream.qqmusic.qq.com/C400001eTRh71pQg1C.m4a?guid=8455912432&vkey=B5D6586F27E475E02644F00B892302F83325702F30F216A6CF3A4F307790A5E7351B3EA447DCD90CB8FE7EB3C8CF029F6C4851468CE77874&uin=&fromtag=120032'
        },
        { 
          id: 4,
          imgSrc: '/src/assets/img/love/a3.png',
             name: '何必', songer: '陈小满', album: '何必',
          audio: '/src/assets/mp3/何必.mp3'
        },
        { 
          id: 5,
          imgSrc: '/src/assets/img/love/a4.png',
             name: 'Into You', songer: 'Matisse & Sadko / Hanne Mjøen', album: 'Into You',
          audio: '/src/assets/mp3/Into You.mp3'
        },
        { 
          id: 6,
          imgSrc: '/src/assets/img/love/a5.png',
             name: '房间', songer: '刘瑞琦', album: '私房歌',
          audio: '/src/assets/mp3/房间.mp3'
        },
        { 
          id: 7,
          imgSrc: '/src/assets/img/love/a6.png',
             name: '青空', songer: 'Candy_Wind', album: '雨之翼',
          audio: '/src/assets/mp3/青空.mp3'        
        },
        { 
          id: 8,
          imgSrc: '/src/assets/img/love/a7.png',
             name: '樱花草', songer: '苏白睡醒啦', album: '苏白睡醒啦',
          audio: '/src/assets/mp3/樱花草.mp3'        
        },
        { 
          id: 9,
          imgSrc: '/src/assets/img/love/a8.png',
             name: '被祝福的精灵', songer: '张斯函', album: '被祝福的精灵',
          audio: 'http://dl.stream.qqmusic.qq.com/C400000TqD8g0GYGPH.m4a?guid=6750134406&vkey=E71C6035E3EB451CD46837D43DFC6F68611B76B7B267DD820F1E810E4036F7FCE07E22D5FC1CCCA6FF26E349F5470EC9DCFE6DDC72884E7D&uin=&fromtag=120032'        
        },
        { 
          id: 10,
          imgSrc: '/src/assets/img/love/a9.png',
             name: '失眠飞行', songer: 'Grey Marcelo / 一坨柴火鸡', album: '失眠飞行',
          audio: 'http://dl.stream.qqmusic.qq.com/RS02060kWS4a2Vgc3A.mp3?guid=1468593152&vkey=CCBB3A3C4EE76034305CC6B7C0D1AF6D59609D5F16875AEA271D89B68C9B64FBC0A7297CE51E702F1B9183C72B9A130E283F10692BD526E9&uin=&fromtag=120052'
        },
        { 
          id: 11,
          imgSrc: '/src/assets/img/love/a10.png',
             name: '追想轮回', subName: '《永远的7日之都》游戏主题曲', songer: 'MYTH & ROID', album: '追想轮回',
          audio: 'http://dl.stream.qqmusic.qq.com/C400000JbX5S4VBiOm.m4a?guid=4206811792&vkey=E9A74591C6627F434F396A73FFCB569D9C00040FB9171D6B8F201EEF6B8E9D1FB89178421186C03868729071DEAC0C5B18A6DD22768217B5&uin=&fromtag=120032'        
        },
        { 
          id: 12,
          imgSrc: '/src/assets/img/love/a11.png',
             name: '起风了（旧版）', subName: '原曲：《ヤキモチ》——高桥优', songer: '买辣椒也用券', album: '起风了 (旧版)',
          audio: '/src/assets/mp3/起风了.mp3' 
        },
        { 
          id: 13,
          imgSrc: '/src/assets/img/love/a13.png',
             name: '平凡之路', songer: '朴树', album: '猎户星座',
          audio: '/src/assets/mp3/平凡之路.mp3'
        },
        { 
          id: 14,
          imgSrc: '/src/assets/img/love/a14.png',
             name: '春娇与志明', songer: '街道办GDC / 欧阳耀莹', album: '春娇与志明',
          audio: '/src/assets/mp3/春娇与志明.mp3'
        },
        { 
          id: 15,
          imgSrc: '/src/assets/img/love/a15.png',
             name: 'Beautiful In White (Demo)', songer: 'Westlife', album: 'Beautiful In White (Demo)',
          audio: '/src/assets/mp3/Beautiful In White.mp3' 
        },
        { 
          id: 16,
          imgSrc: '/src/assets/img/love/a16.png',
             name: '愚昧', songer: '陈雪凝', album: '愚昧',
          audio: '/src/assets/mp3/愚昧.mp3' 
        }
      ],
      songlist: [
        { 
          id: 301,
          imgSrc: '/src/assets/img/love/b1.png',
          playerCount: '',
          title: '这！就是原创',
          user: 'QQ音乐官方歌单',
          avatar: '/src/assets/img/logo.webp',
          tags: ['国语', '现场音乐'],
          detail: '《这！就是原创》是由腾讯音乐娱乐集团、优酷视频、灿星共同制作的原创音乐人竞技成长秀节目。该节目共12期，由大左主持，总决赛由大左与白若溪主持。该节目由萧敬腾、陈粒、王嘉尔担任原创捕手，从百余位优秀唱作人中挑选出40名“原创猛兽”来召唤华语音乐原创力。歌单收录了这就是原创节目中的精彩舞台，快来收藏一起听歌吧！',
          list: [] // 70
        },
        { 
          id: 302,
          imgSrc: '/src/assets/img/love/b2.png',
          title: '十年之约 | QQ飞车手游找回青春的记忆',
          user: '顾念晨',
          avatar: '/src/assets/img/love/b2-2.png',
          tags: ['背景音乐'],
          detail: '我是09年7月注册老用户，对于这张单，有太多太多想要说的话 27号手游正式服上线以后马上就顶着流量下载了 QQ飞车，四亿玩家的竞速梦想，手游4700万玩家抢先预约 2018年，是QQ飞车上线的十周年，十年来，它陪伴我们90后走过了一个又一个春夏秋冬，陪我们度过了那个最美好的青春 后来，大家慢慢都长大了，工作学业成了最为主要的事情，也都很少再上线了 但我相信，在现在手游盛行的时代下，当QQ飞车手游上线，大家还是会非常激动和感叹，跑一把手游，纪念我们的青春，还是曾经的手感，感觉又回到了曾经一起玩飞车的时光 QQ飞车，好久不见，十年青春，我们陪你 封面选自版本《魔法变装季》 小橘子在向你招手呐!',
          list: [] //151
        },
        { 
          id: 303,
          imgSrc: '/src/assets/img/love/b3.png',
          title: '游戏运动专用丨300首纯电音，瞬间五杀',
          user: 'DesTiny',
          avatar: '/src/assets/img/love/b3-3.png',
          tags: ['电子'],
          detail: '歌单为（节奏控）（电音控）（游戏）必备歌单 300余首精心挑选纯音乐让你大饱耳福！ 电子音乐如同海洋一般的无边，跟着节奏抖起腿来！ 带上耳机，任由电子的冲击！Here we go！',
          list: [] // 324
        },
        { 
          id: 304,
          imgSrc: '/src/assets/img/love/b4.png',
          title: '那些在抖音火爆的宝藏单曲',
          user: '个性化特供',
          avatar: '/src/assets/img/love/b4-4.png',
          tags: ['国语', '网络歌曲'],
          detail: '一见钟情的原因，就是，我的眼里只有你。 只有你才能救我命，作用像是服用硝苯地平。 可不可以给我你的微信，可不可以来了解我的内心。播放全部取消收藏更多',
          list: [] // 48
        },
        { 
          id: 305,
          imgSrc: '/src/assets/img/love/b5.png',
          title: '站内弹幕9999+日语歌曲',
          user: '歌单狂魔',
          avatar: '/src/assets/img/love/b5-5.png',
          tags: ['日语', '流行'],
          detail: '站内弹幕9999+日语歌曲，虽然听不懂日语但是弹幕还是一定要发的！播放全部取消收藏更多',
          list: [] // 16
        },
        { 
          id: 306,
          imgSrc: '/src/assets/img/love/b6.png',
          title: '「日系/伤感」日系女声x伤感纯音，我想哭了',
          user: '不吃鱼的怪猫',
          avatar: '/src/assets/img/love/b6-6.png',
          tags: ['ACG', '伤感', '寂寞'],
          detail: '曾经有一个没有名字的怪物，他想要一个名字，于是他到世界各地去寻找属于自己的名字。它知道世界很大，所以把自己分成了两个，一个往西一个往东，往东的怪物遇到了一个弱小的铁匠，它向铁匠说：把你的名字给我，我让你强壮。铁匠同意了，于是它向铁匠口中爬去，，于是铁匠成了小镇的大力士，过不久，口中怪物觉得无聊了就把铁匠吃掉了，然后继续往东行走，走到了一个国家，偷偷进入宫殿看见一个生病不起的王子，对王子说：把你的名字给我，我让你健康成长，于是王子同意了。怪物爬向王子口中，从此王子健康快乐的生活起来了，怪物很喜欢这里，于是拼命忍受肚子饿，但是忍不了多久，怪物吃掉了王宫中的所有人只留下了王子的身体，继续在里面呆着，向东继续前进。终于与向西的怪物相遇了，向东的怪物对向西的怪物说：我有名字了。向西的怪物却说：我不需要名字，我也很开心。于是向东的怪物吃掉了像西的怪物，然后站在原地遐想；约翰，多么好听的名字，可是却没有人叫这个名字。――没有名字的怪物',
          list: [] // 20
        },
        { 
          id: 307,
          imgSrc: '/src/assets/img/love/b7.png',
          title: '编辑推荐：日语热歌',
          user: 'QQ音乐官方歌单',
          avatar: '/src/assets/img/logo.webp',
          tags: ['日语', '流行'],
          detail: '编辑推荐的日语热歌，根据数据来看，大家仍听往年歌曲较多，同时，新歌势头也不可忽视。播放全部取消收藏更多',
          list: [] // 103
        },
        { 
          id: 308,
          imgSrc: '/src/assets/img/love/b8.png',
          title: '青春仓促：百首日语追忆与你的时光',
          user: '星缀城南',
          avatar: '/src/assets/img/love/b8-8.png',
          tags: ['日语', '伤感'],
          detail: '青春的梦想绚丽于时光的扉页，逝去的光阴珍藏起过往的时日，春去秋来，一晃又是三年过去了，任天边云彩更迭，任身边面孔变换，可我依旧不能忘怀，曾经伫立在校园的门口，守候你的笑容。',
          list: [] // 100
        },
        { 
          id: 309,
          imgSrc: '/src/assets/img/love/b9.png',
          title: '300首经典纯音乐，听完手机内存不足！',
          user: '小沐沐',
          avatar: '/src/assets/img/love/b9-9.png',
          tag: ['轻音乐', '背景音乐'],
          detail: '趁现在有空，我随便写点。',
          list: [] // 303
        },
        { 
          id: 310,
          imgSrc: '/src/assets/img/love/b10.png',
          title: '「日系萌曲」清新治愈的小萌音',
          user: '南風.',
          avatar: '/src/assets/img/love/b10-10.png',
          tags: ['日语', '治愈', 'ACG'],
          detail: '说到萌音，一般我们会联想到可爱啊、洗脑、买嗲等等.然而持有萌音的声优和歌手们也想要来一点小清新风格。',
          list: [] // 23
        },
        { 
          id: 311,
          imgSrc: '/src/assets/img/love/b11.png',
          title: '次元党专享：百首日系女声精选集',
          user: '私に闻いて风i',
          avatar: '/src/assets/img/love/b11-11.png',
          tags: ['日语', 'ACG', '流行'],
          detail: '这次我来换下标题，希望大家还会喜欢。',
          list: [] // 110
        }
      ],
      album: [
        { 
          id: 312,
          imgSrc: '/src/assets/img/love/c1.png',
          title: 'All About Love 关于爱 Allt er ást',
          songer: '周柏豪',
          time: '2018-12-10',
          type: 'POP流行',
          list: [] // 9
        }
      ],
      diantai: [],
      video: []
    },
    createlist: [
      {
        id: 10001,
        imgSrc: '/src/assets/img/mySonglist/a1.png',
        playerCount: '',
        title: '吉他',
        user: '天域宝宝',
        avatar: '/src/assets/img/user/a.png',
        tags: ['民谣'],
        detail: '',
        list: [
          {
            id: 10001001,
            imgSrc: '/src/assets/img/mySonglist/a1.png',
              
            name: 'Like A Star',
            songer: 'Youngso Kim',
            album: 'UTOPIA',
            audio: '/src/assets/mp3/Like A Star .mp3'
          }
        ]
      },
      {
        id: 10002,
        imgSrc: '/src/assets/img/mySonglist/a2.png',
        playerCount: '',
        title: '高评论1w+',
        user: '天域宝宝',
        avatar: '/src/assets/img/user/a.png',
        tags: [],
        detail: '',
        list: [
          {
            id: 10002001,
            imgSrc: '/src/assets/img/mySonglist/a2.png',
              
            name: '微微',
            songer: '傅如乔',
            album: '微微',
            audio: '/src/assets/mp3/微微.mp3'
          },
          {
            id: 10002002,
            imgSrc: '/src/assets/img/mySonglist/a2-2.png',
              
            name: '青春大概',
            songer: '上上',
            album: '我在未来等你 电视剧原声专辑',
            audio: '/src/assets/mp3/青春大概.mp3'
          }
        ]
      },
      {
        id: 10003,
        imgSrc: '/src/assets/img/mySonglist/a3.png',
        playerCount: '',
        title: '新',
        user: '天域宝宝',
        avatar: '/src/assets/img/user/a.png',
        tags: [],
        detail: '',
        list: [
          {
            id: 10003001,
            imgSrc: '/src/assets/img/mySonglist/a3.png',
              
            name: 'Walk Thru Fire',
            songer: 'Vicetone / Meron Ryan',
            album: 'Walk Thru Fire',
            audio: '/src/assets/mp3/Walk Thru Fire.mp3'
          },
          {
            id: 10003002,
            imgSrc: '/src/assets/img/mySonglist/a3-2.png',
              
            name: '尽管我们手中空无一物',
            songer: 'RAM WIRE (ラムワイヤー)',
            album: '尽管我们手中空无一物',
            audio: '/src/assets/mp3/尽管我们手中空无一物.mp3'
          },
          {
            id: 10003003,
            imgSrc: '/src/assets/img/mySonglist/a3-3.png',
              
            name: '虽然歌声无形',
            songer: 'RAM WIRE (ラムワイヤー)',
            album: 'FLOWER',
            audio: '/src/assets/mp3/虽然歌声无形.mp3'
          }
        ]
      },
      {
        id: 10004,
        imgSrc: '/src/assets/img/mySonglist/a4.png',
        playerCount: '',
        title: '纯音乐',
        user: '天域宝宝',
        avatar: '/src/assets/img/user/a.png',
        tags: [],
        detail: '',
        list: [
          {
            id: 10004001,
            imgSrc: '/src/assets/img/mySonglist/a4.png',
              
            name: '逝去的夏天',
            songer: 'Ciela',
            album: 'Beauteous Rain (美丽的雨)',
            audio: '/src/assets/mp3/逝去的夏天.mp3'
          },
          {
            id: 10004002,
            imgSrc: '/src/assets/img/mySonglist/a4-2.png',
              
            name: '秋姐妹鸣泣之时',
            songer: 'ばんばんしー',
            album: '秋姐妹鸣泣之时',
            audio: '/src/assets/mp3/秋姐妹鸣泣之时.mp3'
          }
        ]
      }
    ]
  }
] as IUser[]
export {
  info
}