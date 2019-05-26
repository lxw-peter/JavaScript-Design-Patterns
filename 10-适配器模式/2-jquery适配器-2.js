// 有一个 B库要与jQuery做适配
var B = {
  g: function (id) {
    return document.getElementById(id)
  },
  on: function (id, type, fn) {
    var dom = this.g(id)
    if (dom.addEventListenter) {
      dom.addEventListenter(type, fn, false)
    } else if (dom.attachEvent) {
      dom.attachEvent('on' + type, fn)
    } else {
      dom['on' + type] = fn
    }
  }
  // ...
}

B.on(window, 'onload', function () {
  // do something
})

// 适配
B.g = function (id) {
  return $(id).get(0)
}
B.on = function (id, type, fn) {
  var dom = typeof id === 'string' ? $('#' + id) : $(id)
  dom.on(type, fn)
}
