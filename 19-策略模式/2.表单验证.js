var InputStrategy = (function () {
  var strategy = {
    // 判断是否为空
    isNull: function (value) {
      // return /\s+/.test(value) ? '请输入内容' : ''  此方法有问题, 因为空格已在check方法中被清除
      return value.length === 0 ? '请输入内容' : ''
    },
    // 判断是否为数组
    isNumber: function (value) {
      return /^[0-9]+(\.[0-9]+)?$/.test(value) ? '' : '请输入数字'
    },
    // 判断是否为电话
    isPhone: function (value) {
      return /^\d{3}-\d{8}$|^\d{4}-\d{7}$/.test(value) ? '' : '请输入正确的电话号码格式,如: 010-12345678或3300-1234567'
    }
  }
  return {
    check: function (type, value) {
      value = value.replace(/^\s+|\s+$/g, '')
      return strategy[type] ? strategy[type](value) : '没有该类型的检测方法'
    },
    // 拓展方法
    addStrategy: function (type, fn) {
      strategy[type] = fn
    }
  }
})()
var value1 = ' s'
var result1 = InputStrategy.check('isNull', value1)
console.log(result1)

var value2 = '1ad23'
var result2 = InputStrategy.check('isNumber', value2)
console.log(result2)
