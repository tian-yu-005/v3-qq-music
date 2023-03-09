<template>
  <div class="song-head">
    <span class="name">歌曲</span>
    <span class="songer">歌手</span>
    <span class="album">专辑</span>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">
.song-head {
  user-select: none;
  display: flex;
  justify-content: space-between;
  .name {
    flex-basis: 38%;
    min-width: 43%;
  }
  .songer {
    flex-basis: 31%;
  }
  .album {
    flex-basis: 31%;
  }
  & > span {
    padding-left: 7px;
    font-size: 13px;
    color: var(--font-color-shallow);
    letter-spacing: 1px;
  }
  &:hover {
    cursor: pointer;
  }
}
</style>