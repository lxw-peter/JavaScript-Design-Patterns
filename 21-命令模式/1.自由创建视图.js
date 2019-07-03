// 模拟实现模块示例
/* var viewCommand = (function () {
  // 方法集合
  var Action = {
    create: function () {
      // 创建方法
    },
    display: function () {}
  }
  // 命令接口
  return function execute () {}
})() */

var viewCommand = (function () {
  var tpl = {
    product: [
      '<div>',
      '<img src="{#src#}"/>',
      '<p>{#text#}</p>',
      '</div>'
    ].join(''),
    title: [
      '<div class="title">',
      '<div class="main">',
      '<h2>{#title#}</h2>',
      '<p>{#tips#}</p>',
      '</div>',
      '</div>'
    ].join('')
  }
  var html = ''
  function formateString (str, obj) {
    return str.replace(/\{#(\w+)#\}/g, function (match, key) {
      return obj[key]
    })
  }
  var Action = {
    create: function (data, view) {
      if (data.length) {
        for (var i = 0, len = data.length; i < len; i++) {
          html += formateString(tpl[view], data[i])
        }
      } else {
        html += formateString(tpl[view], data)
      }
    },
    display: function (container, data, view) {
      if (data) {
        this.create(data, view)
      }
      document.getElementById(container).innerHTML = html
      html = ''
    }
  }
  return function execute (msg) {
    msg.param = Object.prototype.toString.call(msg.param) === '[object Array]'
      ? msg.param
      : [msg.param]
    Action[msg.command].apply(Action, msg.param)
  }
})()

var productData = [
  {
    src: '../images/1.png',
    text: '绽放的桃花'
  },
  {
    src: '../images/2.png',
    text: '阳光的温馨'
  },
  {
    src: '../images/3.png',
    text: '镜头前的绿色'
  }
]
var titleData = {
  title: '夏日里的一片温馨',
  tips: '暖暖的温情带给人们家的感受'
}

// 标题模块
viewCommand({
  command: 'display',
  param: ['title', titleData, 'title']
})

//  创建一张图片
viewCommand({
  command: 'display',
  param: [
    'product',
    {
      src: '../images/4.png',
      text: '迎着朝阳的野菊花'
    },
    'product'
  ]
})

//  创建多张图片
viewCommand({
  command: 'display',
  param: ['product', productData, 'product']
})
