<template>
  <!-- 歌单头 -->
  <div class="detail-wrapper">
    <div class="detail">
      <div class="left">
        <!-- 图片 -->
        <img :src="$props.imgSrc" alt="" :style="{
          'border-radius': $props.round ? '999px' : '7px'
        }">
      </div>
      <div class="right">
        <!-- title -->
        <div class="title-slot">
          <span :title="$props.title">{{ $props.title }}</span>
        </div>
        <!-- user -->
        <div class="user-slot">
          <slot name="user" />
        </div>
        <!-- introduce -->
        <div class="introduce-slot">
          <slot name="introduce">
            精心完善歌单信息有机会获得推荐，让更多用户看到你的大作
          </slot>
        </div>
        <!-- SongBtn -->
        <div class="btn-slot">
          <slot name="btn" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  imgSrc?: string
  title?: string
  round?: boolean
}>()
</script>

<style scoped>
.detail-wrapper {
  padding: 14px 0;
}
.detail {
  height: 170px;
  display: flex;
}
.detail .left {
  flex-shrink: 0;
  margin-right: 26px;
}
.detail .left img {
  width: 100%;
  height: 100%;
  border-radius: 7px;
}
.detail .right {
  width: calc(100% - 280px);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
/* 标题 */
.title-slot {
  font-size: 32px;
  font-weight: bold;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
/* 用户 */
.user-slot {
  display: flex;
  align-items: center;
}
/* 简介 */
.introduce-slot {
  font-size: 13px;
  color: var(--font-color-shallow);

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>