import { reactive, watchEffect, ref, Ref } from 'vue'

export default function useSlider(el: Ref<HTMLElement | undefined>, props: any, emits: any) {
  const sliderWidth = ref(0)
  const sliderLeft = ref(0)

  const slider = reactive({
    isHover: false,
    isClick: false,
    // 拖动状态
    isDragging: false,
    // 当前进度
    currentPosition: '0',
    // 点击时参照物
    startX: 0,
    startPosition: 0,
    // 结束时限制范围在 1 ~ 100
    newPosition: 0
  })
  // 设置定位
  const setPosition = (newPosition: number) => {
    if(newPosition < 0) newPosition = 0
    if(newPosition > 100) newPosition = 100

    slider.currentPosition = newPosition + '%'
    // 将最新的值返回给用户
    emits('update:rang', Math.round(newPosition))
  }
  // 获取 滑块组件的宽度
  watchEffect(() => {
    // getBoundingClientRect()
    sliderLeft.value = el.value?.getBoundingClientRect().left!
    sliderWidth.value = el.value?.clientWidth!
    // 根据外部 动态更新
    setPosition(props.rang)
  })
  // 侦听屏幕变化重新计算
  window.addEventListener('resize', () => {
    sliderWidth.value = el.value?.clientWidth!
  })
  window.addEventListener('scroll', () => {
    sliderLeft.value = el.value?.getBoundingClientRect().left!
  })
  // 鼠标按下触发
  const onButtonDown = (e: MouseEvent) => {
    e.preventDefault()
    onDragStart(e)
    window.addEventListener('mousemove', onDragging)
    window.addEventListener('mouseup', onDragEnd)
  }
  // 拖动前
  const onDragStart = (e: MouseEvent) => {
    slider.isClick = true
    // 保存按钮点击的位置
    slider.startX = e.clientX
    // 直接更改进度条
    const distance = parseFloat(`${ ((e.clientX - sliderLeft.value) / sliderWidth.value) * 100 }`)
    setPosition(distance)
    // 保存原来的进度（以此为参照物）
    slider.startPosition = parseFloat(slider.currentPosition)
    
    emits('dragStart', Math.round(slider.newPosition))
  }
  // 拖动中
  const onDragging = (e: MouseEvent) => {
    slider.isDragging = true // 正在拖动
    // 变化量
    const distance = parseFloat(`${ (e.clientX - slider.startX) / sliderWidth.value * 100 }`)
    slider.newPosition = slider.startPosition + distance
    setPosition(slider.newPosition)

    emits('dragging', Math.round(slider.newPosition))
  }
  // 拖动结束
  const onDragEnd = (e: MouseEvent) => {
    slider.isClick = false
    slider.isDragging = false
    // 清除事件
    window.removeEventListener('mousemove', onDragging)
    window.removeEventListener('mouseup', onDragEnd)
    
    // 抬手之后的距离
    let distance = parseFloat(`${ (e.clientX - sliderLeft.value) / sliderWidth.value * 100 }`)
    if(distance < 0) distance = 0
    if(distance > 100) distance = 100
    emits('dragEnd', Math.round(distance))
  }

  const onOver = () => {
    slider.isHover = true
  }
  const onleave = () => {
    slider.isHover = false
  }

  return {
    slider,
    onButtonDown,
    onOver,
    onleave
  }
}