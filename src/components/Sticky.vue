<template>
  <div :class="['sticky', { 'top': true }]">
    <slot />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  top?: number
}>()
const top = `calc(${ props.top + 'px' } + 1px)`
</script>

<style scoped lang="scss">
.sticky {
  position: sticky;
  left: 0;
  z-index: 10;
  background-color: var(--right-bg);
  &.top {
    top: v-bind(top);
  }
}
</style>