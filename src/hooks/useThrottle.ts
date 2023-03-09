function throttle(fn: () => void, wait: number) {
  let flag = true
  return function() {
    if(flag) {
      flag = false
      setTimeout(() => {
        flag = true
        fn()
      }, wait)
    }
  }
}

export {
  throttle
}