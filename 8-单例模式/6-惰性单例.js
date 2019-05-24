var LazySingle = (function () {
  var _instance = null
  function Single () {
    return {
      publicMethod: function () {
        console.log('methods')
      },
      publicProperty: '1.0'
    }
  }
  return function () {
    if (!_instance) {
      _instance = Single()
    }
    // 返回单例
    return _instance
  }
})()

console.log(LazySingle().publicProperty)
LazySingle().publicMethod()
