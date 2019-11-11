function debounce (fn, timeForWait = 1000) {
  fn.timerId = null
  console.log('发起请求')
  return function () {
    let args = [].slice.call(arguments)
    if (fn.timerId) {
      clearTimeout(fn.timerId)
      fn.timerId = null
    }
    fn.timerId = setTimeout(_ => {
      fn(...args)
    }, timeForWait)
  }
}
window.addEventListener('scroll', debounce(function () {
  console.log(111)
}))
