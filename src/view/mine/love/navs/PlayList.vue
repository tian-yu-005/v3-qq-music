<template>
  <Sticky :top="54">
    <SongBtn2 />
  </Sticky>
  
  <el-row :gutter="20">
    <template v-for="item in play_list">
      <el-col :lg="4" :md="6" :sm="8" :xs="8" style="margin-top: 20px;">
        <SongCard 
         :data="item"
         :sub-title="item.user"
         :total="item.list.length.toString()"
         :hidden-slot="true"
         />
      </el-col>
    </template>
  </el-row>
</template>

<script lang="ts" setup>
import Sticky from '@/components/Sticky.vue'
import SongBtn2 from '../../SongBtn2.vue'
import SongCard from '@/components/SongCard.vue'
import { useLoginStore } from '@/store/login/login'
import { ISongList } from '@/types/ISong'

const loginStore = useLoginStore()
// 读取 歌单
const play_list = loginStore.info.love.songlist as ISongList[]
</script>

<style scoped>

</style>