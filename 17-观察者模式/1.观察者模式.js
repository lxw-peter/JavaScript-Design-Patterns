var Observer = (function () {
  var _message = {}
  return {
    register: function (type, fn) {
      if (typeof _message[type] === 'undefined') {
        _message[type] = [fn]
      } else {
        _message[type].push(fn)
      }
    },
    fire: function (type, args) {
      if (!_message[type]) {
        return
      }
      var events = {
        type,
        args: args || {}
      }
      for (var i = 0, len = _message[type].length; i < len; i++) {
        _message[type][i].call(this, events)
      }
    },
    remove: function (type, fn) {
      if (_message[type] instanceof Array) {
        var i = _message[type].length - 1
        for (;i >= 0; i--) {
          _message[type][i] === fn && _message[type].splice(i, 1)
        }
      }
    }
  }
})()

Observer.register('test', function (e) {
  console.log(e.type, e.args.msg)
})

Observer.fire('test', { msg: '参数' })
