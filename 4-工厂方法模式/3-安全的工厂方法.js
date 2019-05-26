// 安全模式创建的工厂类
var Factory = function (type, content) {
  if (this instanceof Factory) {
    var s = new this[type](content)
    return s
  } else {
    return new Factory(type, content)
  }
}

// 工厂原型中设置创建所有类型数据对象的基类
Factory.prototype = {
  Java: function (content) {
    this.content = content;
    (function (content) {
      var div = document.createElement('div')
      div.innerHTML = content
      div.style.color = 'green'
      document.getElementById('container').appendChild(div)
      console.log(div)
    })(content)
  },
  Php: function (content) {
    this.content = content;
    (function (content) {
      var div = document.createElement('div')
      div.innerHTML = content
      div.style.color = 'pink'
      document.getElementById('container').appendChild(div)
      console.log(div)
    })(content)
  },
  Javascript: function (content) {
    this.content = content;
    (function (content) {
      var div = document.createElement('div')
      div.innerHTML = content
      div.style.color = 'red'
      document.getElementById('container').appendChild(div)
      console.log(div)
    })(content)
  }
  // ...
}

// 数据结构
var data = [
  { type: 'Javascript', content: 'JavaScript真棒!' },
  { type: 'Php', content: 'Php真棒!' },
  { type: 'Java', content: 'Java真棒!' }
]

// 循环创建指定科目的广告
window.onload = function () {
  for (let i = 0, len = data.length; i < len; i++) {
    Factory(data[i].type, data[i].content)
  }
}
