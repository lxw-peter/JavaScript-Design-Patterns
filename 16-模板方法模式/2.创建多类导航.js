// 格式化字符串方法
function formateString (str, data) {
  return str.replace(/\{\{(\w+)\}\}/g, function (match, key) {
    return (typeof data[key] === 'undefined' ) ? '' : data[key]
  })
}

var Nav = function (data) {
  this.item = '<a href="{{href}}" title="{{title}}">{{name}}</a>'
  this.html = ''
  for (var i = 0, len = data.length; i < len; i++) {
    this.html += formateString(this.item, data[i])
  }
  return this.html
}

var NumNav = function (data) {
  var tpl = '<b>{{num}}</b>'
  for (var i = data.length - 1; i >= 0; i--) {
    data[i].name += formateString(tpl, data[i])
  }
  return Nav.call(this, data)
}

var LinkNav = function (data) {
  var tpl = '<span>: {{link}}</span><br>'
  for (var i = data.length - 1; i >= 0; i--) {
    data[i].name += formateString(tpl, data[i])
  }
  return Nav.call(this, data)
}

var nav1 = document.getElementById('nav1')
nav1.innerHTML = NumNav([
  {
    href: 'http://www.baidu.com',
    title: '百度一下，你就知道',
    name: '百度',
    num: '10'
  },
  {
    href: 'http://www.taobao.com',
    title: '淘宝商城',
    name: '淘宝',
    num: '3'
  },
  {
    href: 'http://www.qq.com',
    title: '腾讯首页',
    name: '腾讯',
    num: '8'
  },
  {
    href: 'http://www.jd.com',
    title: '',
    name: '京东',
    num: '8'
  }
]
)

var nav2 = document.getElementById('nav2')
nav2.innerHTML = LinkNav([
  {
    href: 'http://www.baidu.com',
    title: '百度一下，你就知道',
    link: 'http://www.baidu.com',
    name: '百度',
    num: '10'
  },
  {
    href: 'http://www.taobao.com',
    title: '淘宝商城',
    link: 'http://www.taobao.com',
    name: '淘宝',
    num: '3'
  },
  {
    href: 'http://www.qq.com',
    title: '腾讯首页',
    link: 'http://www.qq.com',
    name: '腾讯',
    num: '8'
  },
  {
    href: 'http://www.jd.com',
    title: '',
    link: 'http://www.jd.com',
    name: '京东',
    num: '8'
  }
]
)
