<template>
  <div class="banner-item"
   :style="{
    transform: `translateX(${ props.index * 100 }%)`
   }">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>

const props = defineProps<{
  index: number
}>()


</script>

<style scoped>
.banner-item {
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  border: 1px solid red;
}
</style>