var Flyweight = (function () {
  var created = []
  function create () {
    var dom = document.createElement('div')
    Utils.g('news_box').appendChild(dom)
    created.push(dom)
    return dom
  }
  return {
    getDiv: function () {
      if (created.length < 5) {
        return create()
      } else {
        var div = created.shift()
        created.push(div)
        return div
      }
    }
  }
})()

var paper = 0
var num = 5
var articles = []
for (var x = 0; x < 99; x++) {
  var news = `这是第${x}条新闻`
  articles.push(news)
}
var len = articles.length
for (var i = 0; i < 5; i++) {
  if (articles[i]) {
    Flyweight.getDiv().innerHTML = articles[i]
  }
}

Utils.g('next_page').onclick = function () {
  if (articles.length < 5) return

  var j = 0
  var n = ++paper * num % len
  for (;j < 5; j++) {
    if (articles[n + j]) {
      Flyweight.getDiv().innerHTML = articles[n + j]
    } else if (articles[n + j] - len) {
      Flyweight.getDiv().innerHTML = articles[n + j - len]
    } else {
      Flyweight.getDiv().innerHTML = ''
    }
  }
}
