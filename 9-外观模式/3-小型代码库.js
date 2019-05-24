var A = {
  g: function (id) {
    return document.getElementById(id)
  },
  css: function (id, key, value) {
    this.g(id).style[key] = value
  },
  attr: function (id, key, value) {
    this.g(id)[key] = value
  },
  html: function (id, html) {
    this.g(id).innerHTML = html
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
}
