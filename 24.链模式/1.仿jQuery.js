let A = function (selector) {
  return new A.fn.init(selector)
}

A.fn = A.prototype = {
  constructor: A,
  length: 0,
  init: function (selector) {
    this.length = 0
    if (~selector.indexOf('#')) {
      this[0] = document.querySelector(selector)
      this.length = 1
    } else {
      let doms = document.querySelectorAll(selector)
      this.length = doms.length
      for (let i = 0, len = doms.length - 1; i < len; i++) {
        this[i] = doms[i]
      }
    }
    this.selector = selector
    return this
  },
  size: function () {
    return this.length
  }
}
A.fn.init.prototype = A.fn
A.extend = A.fn.extend = function (...rest) {
  let i = 1
  let len = rest.length
  let target = rest[0]
  let j
  if (i === len) {
    target = this
    i--
  }
  for (;i < len; i++) {
    for (j in rest[i]) {
      target[j] = rest[i][j]
    }
  }
  return target
}
A.fn.extend({
  on: (function () {
    return function (type, fn) {
      let i = this.length - 1
      for (;i >= 0; i--) {
        this[i].addEventListener(type, fn, false)
      }
      return this
    }
  })(),
  camelCase: function (str) {
    return str.replace(/-(\w)/g, function (match, letter) {
      return letter.toUpperCase()
    })
  },
  css: function (...rest) {
    let len = rest.length
    if (this.length < 1) {
      return this
    }
    if (len === 1) {
      if (typeof rest[0] === 'string') {
        return window.getComputedStyle(this[0], false)[rest[0]]
      } else if (typeof rest[0] === 'object') {
        for (let style in rest[0]) {
          for (let i = this.length - 1; i >= 0; i--) {
            this[i].style[this.camelCase(style)] = rest[0][style]
          }
        }
      }
    } else if (len === 2) {
      for (let i = this.length - 1; i >= 0; i--) {
        this[i].style[this.camelCase(rest[0])] = rest[1]
      }
    }
  },
  attr: function (...rest) {
    let len = rest.length
    if (!this.length) {
      return this
    }
    if (len === 1) {
      if (typeof rest[0] === 'string') {
        return this[0].getAttribute(rest[0])
      } else if (typeof rest[0] === 'object') {
        for (let i in rest[0]) {
          for (let j = this.length - 1; j >= 0; j--) {
            this[j].setAttribute(i, rest[0][j])
          }
        }
      }
    } else if (len === 2) {
      for (let j = this.length - 1; j >= 0; j--) {
        this[j].setAttribute(rest[0], rest[1])
      }
    }
    return this
  },
  html: function (...rest) {
    let len = rest.length
    if (len === 0) {
      return this[0] && this[0].innerHTML
    } else {
      for (let i = this.length - 1; i >= 0; i--) {
        this[i].innerHTML = rest
      }
    }
    return this
  }
})
