<template>
  <div class="banner-wrapper">
    <div class="banner">
      <slot></slot>
    </div>
    <div class="points">
      <div class="con" v-for="item, index in 3">
        <span :class="['point', {
          active: true
        }]"></span>
      </div>
    </div>

    <div class="switch switch-left"></div>
    <div class="switch switch-right"></div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
.banner-wrapper {
  border: 1px solid red;
}
.banner {
  position: relative;
  width: 100%;
  min-height: 180px;
  overflow: auto;
  background-color: rgba(197, 197, 197, 0.829);
}
.points {
  // border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  .con {
    // display: inline-block;
    
    padding: 9px;
    .point {
      display: block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: rgb(164, 164, 164);
      &.active {
        background-color: #000;
      }
    }
    &:hover {
      cursor: pointer;
    }
    &:hover .point {
      background-color: $theme-color;
    }
    
  }
}

/* 箭头 */
.switch {
  position: absolute;
  display: none;
}
</style>