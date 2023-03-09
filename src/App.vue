<script setup lang="ts">
import Home from './view/Home.vue'
import { useLocalSongStore } from '@/store/localsong/localsong'
import { watchPlayState } from '@/store/player/player'
const localSongStore = useLocalSongStore()
// 加载本地和下载
localSongStore.saveLocalDownload()
watchPlayState()

</script>

<template>
  <Home></Home>
</template>

<style scoped>
</style>
