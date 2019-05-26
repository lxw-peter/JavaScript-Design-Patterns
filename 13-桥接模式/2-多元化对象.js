// 一个小游戏, 有人, 精灵, 小球都有运行单元, 精灵, 小球有颜色单元

// 运动单元
function Speed (x, y) {
  this.x = x
  this.y = y
}
Speed.prototype.run = function () {
  console.log('运动起来')
}

// 着色单元

function Color (cl) {
  this.color = cl
}

Color.prototype.draw = function () {
  console.log('着色')
}

function Shape (sp) {
  this.shape = sp
}

Shape.prototype.change = function () {
  console.log('改变形状')
}

function Speak (wd) {
  this.word = wd
}

Speak.prototype.say = function () {
  console.log(this.word)
}

// 球
function Ball (x, y, c) {
  this.speed = new Speed(x, y)
  this.color = new Color(c)
}

Ball.prototype.init = function () {
  this.speed.run()
  this.color.draw()
}

// 人
function People (x, y, w) {
  this.speed = new Speed(x, y)
  this.word = new Speak(w)
}

People.prototype.init = function () {
  this.speed.run()
  this.word.say()
}

// 精灵
function Spirite (x, y, c, s) {
  this.speed = new Speed(x, y)
  this.color = new Color(c)
  this.shape = new Shape(s)
}

Spirite.prototype.init = function () {
  this.speed.run()
  this.color.draw()
  this.shape.change()
}

var p = new People(10, 12, '老子天下第一')
console.log(p)
p.init()

var pika = new Spirite(33, 67, 'yellow', '闪电')
console.log(pika)
pika.init()

var footBall = new Ball(10, 20, 'white-black')
console.log(footBall)
footBall.init()
