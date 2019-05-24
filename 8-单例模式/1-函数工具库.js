// 以下方式容易造成变量污染

function g (id) {
  return document.getElementById(id)
}

function css (id, key, value) {
  g(id)[key] = value
}

function html (id, value) {
  g(id).innerHTML = value
}

function on (id, type, fn) {
  g(id)['on' + type] = fn
}
