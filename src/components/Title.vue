<template>
  <div class="title-wrapper">
    <div class="title">{{ props.title }}</div>
    <slot></slot>

    <div 
     v-if="!props.hiddenLink"
     class="link" 
     @click="$emit('click-link')"
     >更多 ></div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title?: string
  hiddenLink?: boolean
}>()
defineEmits<{
  (n: 'click-link'): void
}>()
</script>

<style scoped lang="scss">
.title-wrapper {
  display: flex;
  align-items: center;

  letter-spacing: 1px;
  padding: 16px 0;
}
.title {
  font-size: 22px;
  margin-right: 16px;
}
.link {
  margin-left: auto;
  font-size: 13px;
  color: var(--font-color-shallow);
  &:hover {
    color: var(--theme-color);
    cursor: pointer;
  }
}
</style>