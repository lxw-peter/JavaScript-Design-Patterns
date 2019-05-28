// 组合模式: 又称为整体模式, 将对象组合成树形结构以表示'部分整体的层次结构'. 组合模式使得用户对单个对象和组合的使用具有一致性

/*
 一个新闻模块:
 1. 文字新闻
 2. 带直播图标的文字新闻
 3. 已分类的文字新闻
 4. 图片新闻
 5. 文字新闻和图片新闻在一行显示
 */

/**
 * 寄生式继承 继承原型
 * 传递参数 subClass 子类
 * 传递参数 superClass 父类
 */
function inheritPrototype (subClass, superClass) {
  // 复制一份父类的原型副本保存在变量中
  var p = inheritObject(superClass.prototype)
  // 修正因为重写子类原型导致子类的 constructor 属性被修改
  p.constructor = subClass
  // 设置子类的原型
  subClass.prototype = p
}

// 原型式继承
function inheritObject (o) {
  // 声明一个过滤函数对象
  function F () {};
  // 过渡对象的原型继承父对象
  F.prototype = o
  // 返回过渡对象的一个实例, 该实例的原型继承了父对象
  return new F()
}

/**
 * News 虚拟父类
 */
var News = function () {
  // 子组件容器
  this.children = []
  this.element = null
}

News.prototype = {
  init: function () {
    throw new Error('请重写方法')
  },
  add: function () {
    throw new Error('请重写方法')
  },
  getElement: function () {
    throw new Error('请重写方法')
  }
}

// 容器类构造函数
var Container = function (id, parent) {
  News.call(this)
  this.id = id
  this.parent = parent
  this.init()
}
// 寄生式继承父类原型方法
inheritPrototype(Container, News)

// 构建方法
Container.prototype.init = function () {
  this.element = document.createElement('ul')
  this.element.id = this.id
  this.element.className = 'new-container'
}

Container.prototype.add = function (child) {
  this.children.push(child)
  this.element.appendChild(child.getElement())
  return this
}

Container.prototype.getElement = function () {
  return this.element
}

Container.prototype.show = function () {
  this.parent.appendChild(this.element)
}

var Item = function (classname) {
  News.call(this)
  this.classname = classname || ''
  this.init()
}

inheritPrototype(Item, News)

Item.prototype.init = function () {
  this.element = document.createElement('li')
  this.element.className = this.classname
}

Item.prototype.add = function (child) {
  this.children.push(child)
  this.element.appendChild(child.getElement())
  return this
}

Item.prototype.getElement = function () {
  return this.element
}

var NewsGroup = function (classname) {
  News.call(this)
  this.classname = classname || ''
  this.init()
}

inheritPrototype(NewsGroup, News)

NewsGroup.prototype.init = function () {
  this.element = document.createElement('div')
  this.element.className = this.classname
}

NewsGroup.prototype.add = function (child) {
  this.children.push(child)
  this.element.appendChild(child.getElement())
  return this
}

NewsGroup.prototype.getElement = function () {
  return this.element
}

var ImgNews = function (url, href, classname) {
  News.call(this)
  this.url = url || ''
  this.href = href || ''
  this.classname = classname || 'normal'
  this.init()
}

inheritPrototype(ImgNews, News)

ImgNews.prototype.init = function () {
  this.element = document.createElement('a')
  var img = new Image()
  img.src = this.url
  this.element.appendChild(img)
  this.element.className = 'img-news ' + this.classname
  this.element.href = this.href
}

ImgNews.prototype.add = function () {}

ImgNews.prototype.getElement = function () {
  return this.element
}

var IconNews = function (text, href, type) {
  News.call(this)
  this.text = text || ''
  this.href = href || ''
  this.type = type || 'video'
  this.init()
}

inheritPrototype(IconNews, News)

IconNews.prototype.init = function () {
  this.element = document.createElement('a')
  this.element.innerHTML = this.text
  this.element.className = 'icon' + this.type
  this.element.href = this.href
}

IconNews.prototype.add = function () {}

IconNews.prototype.getElement = function () {
  return this.element
}

var EasyNews = function (text, href) {
  News.call(this)
  this.text = text || ''
  this.href = href || ''
  this.init()
}

inheritPrototype(EasyNews, News)

EasyNews.prototype.init = function () {
  this.element = document.createElement('a')
  this.element.innerHTML = this.text
  this.element.className = 'text'
  this.element.href = this.href
}

EasyNews.prototype.add = function () {}

EasyNews.prototype.getElement = function () {
  return this.element
}

var TypeNews = function (text, href, type, pos) {
  News.call(this)
  this.text = text || ''
  this.href = href || '#'
  this.type = type || ''
  this.pos = pos || 'left'
  this.init()
}

inheritPrototype(TypeNews, News)

TypeNews.prototype.init = function () {
  this.element = document.createElement('a')
  if (this.pos === 'left') {
    this.element.innerHTML = '[' + this.type + '] ' + this.text
  } else {
    this.element.innerHTML = this.text + ' [' + this.type + ']'
  }
  this.element.className = 'text'
  this.element.href = this.href
}

TypeNews.prototype.add = function () {}

TypeNews.prototype.getElement = function () {
  return this.element
}

var news1 = new Container('news', document.body)
news1.add(
  new Item('normal').add(
    new IconNews('梅西不拿金球也伟大', '#', 'video')
  )
).add(
  new Item('normal').add(
    new IconNews('保护强国强队用意明显', '#', 'live')
  )
).add(
  new Item('normal').add(
    new NewsGroup('has-img').add(
      new ImgNews('../images/1.png', '#', 'small')
    ).add(
      new EasyNews('从256斤成功变型男', '#')
    ).add(
      new EasyNews('电动跑车300马每小时', '#')
    )
  )
).add(
  new Item('normal').add(
    new TypeNews('AK47不愿为费城打球', '#', 'NBA', 'left')
  )
).add(
  new Item('normal').add(
    new TypeNews('火车速度达到350km/h', '#', '科技', 'right')
  )
).show()
