export const debounce = (fn: () => void, wait: number) => {
  let timer = null as any
  return function() {
    if(timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn()
    }, wait)
  }
}