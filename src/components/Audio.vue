<template>
  <audio ref="audioRef" :src="playerStore.currentPlaySource.audio" @loadedmetadata="play" controls />
  <button @click="play()">asdsa</button>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { usePlayerStore } from '@/store/player/player'
const playerStore = usePlayerStore()
const audioRef = ref<HTMLMediaElement>()

function play() {
  audioRef.value?.play()
}
function pause() {
  audioRef.value?.pause()
}
watch(() => playerStore.isPlay, (isPlay) => {
  if(isPlay) play()
  if(!isPlay) pause()
})
</script>

<style scoped>

</style>