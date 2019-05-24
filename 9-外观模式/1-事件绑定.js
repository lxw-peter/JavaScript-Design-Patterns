// 外观模式 --提供一个简单的高级接口, 简化了对复杂的底层接口不统一的使用需求

function addEvent (dom, type, fn) {
  if (dom.addEventListenter) {
    dom.addEventListenter(type, fn, false)
  } else if (dom.attachEvent) {
    dom.attachEvent('on' + type, fn)
  } else {
    dom['on' + type] = fn
  }
}

var myInput = document.getElementById('myInput')
addEvent(myInput, 'focus', function () {
  console.log('focus')
})
addEvent(myInput, 'input', function () {
  console.log('input')
})
addEvent(myInput, 'blur', function () {
  console.log('blur')
})
