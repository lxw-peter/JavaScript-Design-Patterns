var Utils = {
  g: function (id) {
    return document.getElementById(id)
  },

  css: function (id, key, value) {
    this.g(id)[key] = value
  },

  html: function (id, value) {
    this.g(id).innerHTML = value
  },

  on: function (id, type, fn) {
    this.g(id)['on' + type] = fn
  }
}
// module.exports = Utils
