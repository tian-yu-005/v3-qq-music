<template>
  <!-- 容器层 -->
  <div class="wrapper" 
   @mouseover="onOver" 
   @mouseleave="onleave"
   @mousedown.left="onButtonDown($event)"
   >
    <div class="slider-wrapper">
      <!-- 滑块组件 -->
      <div ref="sliderRef" class="slider">
        <!-- 已加载的进度条 -->
        <div class="slider-range" :style="{ width: slider.currentPosition }">
          <div 
           v-show="slider.isDragging || slider.isHover"
           class="slider-control"
           ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import useSlider from './use-slider'

const props = defineProps<{
  // 百分比
  rang?: number
}>()
const emits = defineEmits<{
  // 双向绑定
  (n: 'update:rang', modelValue?: number): void
  (n: 'dragStart', val: number): void
  (n: 'dragging', val: number): void
  (n: 'dragEnd', val: number): void
}>()
const sliderRef = ref<HTMLElement>()

const { 
  slider,
  onButtonDown,
  onOver,
  onleave
} = useSlider(sliderRef, props, emits)

</script>

<style scoped lang="scss">
@use 'sass:math';
$slider-size: 10px;
@mixin cursorPointer(){
  &:hover {
    cursor: pointer;
  }
}
// 容器层
.wrapper {
  box-sizing: border-box;
  width: 100%;
  padding: 7px 0;
}
.slider-wrapper {
  width: 100%;
  height: 3px;
  background-color: var(--progress-bg);
}
// 滑块组件
.slider {
  position: relative;
  width: calc(100% - $slider-size/2);
  height: 3px;
  background-color: var(--progress-bg);
  // 已加载的进度条
  .slider-range {
    position: relative;
    top: 0;
    left: 0;
    height: 100%;
    // width: 20%; // !!!
    background-color: var(--theme-color);

    // 滑块控制器
    .slider-control {
      position: absolute;
      // left: 20%; // !!!
      top: 50%;
      margin-top: math.div(-$slider-size, 2);
      right: math.div(-$slider-size, 2);
  
      width: $slider-size;
      height: $slider-size;
      border-radius: 50%;
      background-color: var(--theme-color);
      
      @include cursorPointer();
    }
  }
  @include cursorPointer();
}
</style>