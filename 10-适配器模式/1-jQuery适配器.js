// var A = function (arg) {
//   if (typeof arg === 'function') {
//     window.onload = arg
//   } else if (typeof arg === 'string') {
//     return document.querySelector(arg)
//   }
// }

// A.prototype.on = function (type, fn) {
//   var dom = this
//   if (dom.addEventListenter) {
//     return dom.addEventListenter(type, fn, false)
//   } else if (dom.attachEvent) {
//     return dom.attachEvent('on' + type, fn)
//   } else {
//     dom['on' + type] = fn
//     return dom['on' + type]
//   }
// }

// 假设有一个类似 jQuery 的库A, 现在无法满足新需求, 因此引入jQuery, 为此需要使用适配器
var A = function () {}
var jQuery = (function () {})()
A(function () {
  A('#container').on('click', function () {
    alert('success')
  })
})

window.A = A = jQuery
