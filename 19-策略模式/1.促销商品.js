var PriceStrategy = (function () {
  var stragtegy = {
    return30: function (price) {
      // +price 转换为数字类型
      return +price - parseInt(price / 100) * 30
    },
    return50: function (price) {
      // +price 转换为数字类型
      return +price - parseInt(price / 100) * 50
    },
    percent90: function (price) {
      // JavaScript在处理小数乘除法有bug, 故运算前转化为整数
      return price * 100 * 90 / 10000
    },
    percent80: function (price) {
      return price * 100 * 80 / 10000
    },
    percent50: function (price) {
      return price * 100 * 50 / 10000
    }
  }
  return function (algorithm, price) {
    return stragtegy[algorithm] && stragtegy[algorithm](price)
  }
})()

var price1 = PriceStrategy('return50', '314.86')
console.log(price1)
var price2 = PriceStrategy('percent50', '314.86')
console.log(price2)
