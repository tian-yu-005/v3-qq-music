<template>
  <Sticky :top="54">
    <SongBtn2 />
  </Sticky>
  
  <el-row :gutter="20">
    <template v-for="item in album_list">
      <el-col :lg="4" :md="6" :sm="8" :xs="8" style="margin-top: 20px;">
        <SongCard 
         :data="item"
         :sub-title="item.songer"
         :total="item.songs"
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

const loginStore = useLoginStore()
// 配置歌曲列表
const album_list = loginStore.info.love.album
</script>

<style scoped>

</style>