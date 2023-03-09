<template>
  <!-- 筛选标签 -->
  <div class="types">
    <div class="type" v-for="item in tag_all">
      <div v-for="val in item.tags" class="item">
        <el-button 
         :type="val === currentTag[item.group] ? 'primary' : ''"
         class="btn"
         @click="toggle(item.group, val)"
         >{{ val }}</el-button>
      </div>
    </div>

    <!-- 歌曲风格标签 -->
    <div class="else_type">
      <el-dropdown placement="bottom" :teleported="false">
        <span class="text">
          {{ currentTag[3] }}&nbsp;
          <el-icon>
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <template v-for="val, index in else_type.tags">
              <el-dropdown-item
               :divided="index > 0"
               @click="toggle(3, val)"
               > 
               &nbsp;&nbsp;&nbsp;{{ val }}&nbsp;&nbsp;&nbsp; 
              </el-dropdown-item>
            </template>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
  <!-- 歌手头像 -->
  <el-row :gutter="16">
    <template v-for="item, index in displaySonger">
      <el-col :lg="4" :sm="6" :xs="8" class="songers">
        <div class="item">
          <div class="img"><img :src="item.imgSrc" alt="" v-if="index < 12"></div>
          <div class="text"><span>{{ item.name }}</span></div>
        </div>
      </el-col>
    </template>
  </el-row>
    
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import filterSongerByTags from '@/hooks/useFilter'
// 原始数据
const songer = [
  { imgSrc: '/src/assets/img/music-home/songer/b1.png', name: '周杰伦', tags: ['港台', '男', '流行'] },
  { imgSrc: '/src/assets/img/music-home/songer/b2.png', name: '林俊杰', tags: ['港台', '男', '流行'] },
  { imgSrc: '/src/assets/img/music-home/songer/b3.png', name: 'G.E.M. 邓紫棋', tags: ['港台', '女', '流行'] },
  { imgSrc: '/src/assets/img/music-home/songer/b4.png', name: '陈奕迅', tags: ['港台', '男', '流行'] },
  { imgSrc: '/src/assets/img/music-home/songer/b5.png', name: '薛之谦', tags: ['内地', '男', '流行'] },

  { imgSrc: '/src/assets/img/music-home/songer/c8.png', name: 'SING女团', tags: ['内地', '组合', '国风'] },
  { imgSrc: '/src/assets/img/music-home/songer/c1.png', name: '七叔（叶泽浩）', tags: ['内地', '男', '国风'] },
  { imgSrc: '/src/assets/img/music-home/songer/c2.png', name: '邓寓君(等什么君)', tags: ['内地', '女', '国风'] },
  { imgSrc: '/src/assets/img/music-home/songer/c3.png', name: '阿悠悠', tags: ['内地', '女', '国风'] },
  { imgSrc: '/src/assets/img/music-home/songer/c4.png', name: '音阙诗听', tags: ['内地', '组合', '国风'] },
  { imgSrc: '/src/assets/img/music-home/songer/c5.png', name: '司南', tags: ['内地', '女', '国风'] },
  { imgSrc: '/src/assets/img/music-home/songer/c6.png', name: '艾辰', tags: ['内地', '男', '国风'] },
  { imgSrc: '/src/assets/img/music-home/songer/c7.png', name: '叶炫清', tags: ['内地', '女', '国风'] },
  

  { imgSrc: '/src/assets/img/music-home/songer/a1.png', name: '队长', tags: ['内地', '男', '说唱'] },
  { imgSrc: '/src/assets/img/music-home/songer/a2.png', name: '街道办GDC', tags: ['内地', '组合', '说唱'] },
  { imgSrc: '/src/assets/img/music-home/songer/a3.png', name: 'Lil Ghost小鬼', tags: ['内地', '男', '说唱'] },
  { imgSrc: '/src/assets/img/music-home/songer/a4.png', name: 'A1 TRIP', tags: ['内地', '组合', '说唱'] },
  { imgSrc: '/src/assets/img/music-home/songer/a5.png', name: '王以太', tags: ['内地', '男', '说唱'] },
  { imgSrc: '/src/assets/img/music-home/songer/a6.png', name: '潘玮柏', tags: ['港台', '男', '说唱'] },
  { imgSrc: '/src/assets/img/music-home/songer/a7.png', name: '南征北战NZBZ', tags: ['内地', '组合', '说唱'] },
  { imgSrc: '/src/assets/img/music-home/songer/a8.png', name: '考拉kora', tags: ['内地', '女', '说唱'] },
  { imgSrc: '/src/assets/img/music-home/songer/a9.png', name: '满舒克', tags: ['内地', '男', '说唱'] },
  { imgSrc: '/src/assets/img/music-home/songer/a10.png', name: 'NINEONE #', tags: ['内地', '女', '说唱'] },
  
  
  { imgSrc: '/src/assets/img/music-home/songer/a11.png', name: 'Mad Clown (매드 클라운)', tags: ['韩国', '男', '说唱'] },
  { imgSrc: '/src/assets/img/music-home/songer/a12.png', name: 'Epik High (에픽하이)', tags: ['韩国', '组合', '说唱'] },
  { imgSrc: '/src/assets/img/music-home/songer/a13.png', name: 'B.I (金韩彬)', tags: ['韩国', '男', '说唱'] },
  { imgSrc: '/src/assets/img/music-home/songer/a14.png', name: '田小娟 (전소연)', tags: ['韩国', '女', '说唱'] },
  { imgSrc: '/src/assets/img/music-home/songer/a15.png', name: 'Janet Suhh (자넷서)', tags: ['韩国', '女', '说唱'] },

  { imgSrc: '/src/assets/img/music-home/songer/d1.png', name: 'Ayasa绚沙', tags: ['日本', '女', '流行'] },
  { imgSrc: '/src/assets/img/music-home/songer/d2.png', name: '花澤香菜 (はなざわ かな)', tags: ['日本', '女', '流行'] },
  { imgSrc: '/src/assets/img/music-home/songer/d3.png', name: '鎖那 (さな)', tags: ['日本', '女', '流行'] }
]
// 需要筛选
const displaySonger = ref([...songer])
// 需要遍历的所有类别
const tag_all = [
  { group: 1, tags: ['全部', '内地', '港台', '韩国', '欧美', '日本'] },
  { group: 2, tags: ['全部', '男', '女', '组合'] }
]
const else_type = { group: 3, tags: ['全部', '流行', '说唱', '国风'] }
// 当前选中的所有类别
const currentTag = reactive<any>({
  '1': '全部',  // 高亮
  '2': '全部',  // 高亮
  
  '3': '全部'   // 赋值显示
})

// 标签点击事件
function toggle(group: any, val: any) {
  // 1. 重新赋值
  currentTag[group] = val
  // 2. 改变页面数据
  const filters = filterSongerByTags(songer, Object.values(currentTag))
  displaySonger.value = [...filters]
}

</script>

<style scoped lang="scss">
// 地区 男女组合 标签
.types {
  position: relative;
  margin-top: 10px;
  margin-bottom: 32px;
  .type {
    margin-bottom: 10px;
    .item {
      // border: 1px solid red;
      display: inline-block;
      margin-right: 12px;
      margin-bottom: 10px;
      .btn {
        padding: 0 28px;
        border-radius: 999px;
        font-size: 13.5px;
      }
    }
  }
}
// 歌曲风格标签
.else_type {
  position: absolute;
  right: 20px;
  bottom: 12px;

  
  .text {
    cursor: pointer;
    display: flex;
    align-items: center;
    color: rgb(162, 162, 162) !important;
    &:hover {
      color: var(--theme-color);
    }
  }
}
// 歌手头像
.songers {
  // border: 1px solid green;
  .item {
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 24px;
    .img {
      img {
        width: 100%;
        max-width: 180px;
        border-radius: 50%;
        &:hover {
          cursor: pointer;
        }
      }
    }
    .text {
      margin-top: 16px;
      width: 84%;
      text-align: center;

      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      span {
        &:hover {
          cursor: pointer;
          user-select: none;
          color: var(--theme-color);
        }
      }
      // border: 1px solid red;
    }
  }
}
</style>