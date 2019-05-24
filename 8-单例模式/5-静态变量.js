var Conf = (function () {
  var _conf = {
    MAX_NUM: 100,
    MIN_NUM: 1,
    COUNT: 1000
  }
  return {
    // 取值方法
    get: function (name) {
      return _conf[name] ? _conf[name] : null
    }
  }
})()

var count = Conf.get('u')
console.log(count)
