<template>
  <div class="search-result-wrapper">
    <div class="search-result">
      <!-- 我的音乐 -->
      <div class="mine" v-if="$props.data['mine'].length > 0">
        <h4>我的音乐</h4>
        <div class="group">
          <template v-for="item, index in $props.data['mine']">
            <div 
             v-if="index < 4"
             class="group-item mine-item" 
             @click="$emit('click-item', item)"
             >
              <span>{{ item.name }}</span>
              <span>{{ item.from }}</span>
            </div>
          </template>
        </div>
      </div>
      <!-- 在线音乐 -->
      <div class="online" v-if="$props.data['online'].length > 0">
        <h4>在线音乐</h4>
        <!-- 单曲 -->
        <div class="group">
          <span class="group-item-type">单曲</span>
          <template v-for="item, index in $props.data['online']">
            <div 
             v-if="index < 8"
             class="group-item" 
             @click="$emit('click-item', item)"
             >{{ item.name }} - {{ item.songer }}</div>
          </template>
        </div>
        <!-- 专辑 -->
        <!-- <div class="group">
          <span class="group-item-type">专辑</span>
          <div class="group-item online-item">
            <img class="album-img" src="/src/assets/img/hot/251001.png" alt="" width="30">
            <span class="text">等你下课 - 周杰伦</span>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  data?: any
}>()
defineEmits<{
  (n: 'click-item', item: any): void
}>()
</script>

<style scoped lang="scss">
.search-result-wrapper {
  box-sizing: border-box;
  width: 400px;
  padding: 7px;
  border-radius: 7px;
  background-color: var(--search-result-bg);
}
.search-result {
  h4 {
    font-weight: normal;
    font-size: 14px;
    padding-bottom: 6px;
    border-bottom: 1px solid var(--progress-bg);
  }
  // 每个组的公共部分
  .group {
    // border: 1px solid red;
    position: relative;
    padding-left: 48px;
    margin: 5px 0;
    .group-item {
      user-select: none;
      font-size: 13px;
      padding: 6px 8px;
      border-radius: 3px;
      &:hover {
        cursor: pointer;
        background-color: var(--aside-item-hover-bg);
      }
    }
  }
}
// 我的音乐
.mine-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  span:nth-child(1) {
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-right: 7px;
  }
  span:nth-child(2) {
    color: var(--font-color-search);
  }
}
// 在线音乐
.online-item {
  display: flex;
  align-items: center;
  .text {
    margin-left: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
// 标题
.group-item-type { 
  position: absolute;
  top: 8px;
  left: 18px;
  font-size: 13px;
}
// 专辑图片
.album-img {
  border-radius: 3px;
}
</style>