// import { Utils } from '../8-单例模式/2-函数命名空间'
var dom = null
var paper = 0
var num = 5
var i = 0

var articles = []
for (var x = 0; x < 100; x++) {
  var news = `这是第${x}条新闻`
  articles.push(news)
}
var len = articles.length
for (;i < len; i++) {
  dom = document.createElement('div')
  dom.innerHTML = articles[i]
  if (i >= num) {
    dom.style.display = 'none'
  }
  Utils.g('news_box').appendChild(dom)
}
Utils.g('next_page').onclick = function () {
  var div = Utils.g('news_box').getElementsByTagName('div')
  var j = 0
  var k = 0
  var n = 0
  n = ++paper % Math.ceil(len / num) * num
  for (;j < len; j++) {
    div[j].style.display = 'none'
  }
  for (;k < 5; k++) {
    if (div[n + k]) {
      div[n + k].style.display = 'block'
    }
  }
}
