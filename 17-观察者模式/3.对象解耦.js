import Observer from './1.观察者模式'
var Student = function (result) {
  var that = this
  that.result = result
  that.say = function () {
    console.log(that.result)
  }
}
Student.prototype.answer = function (question) {
  Observer.register(question, this.say)
}
Student.prototype.sleep = function (question) {
  console.log(this.result + ' ' + question + ' 已被注销')
}

var Teacher = function () {}
Teacher.prototype.ask = function (question) {
  console.log('问题是：' + question)
  Observer.fire(question)
}

var s1 = new Student('学生1 回答问题')
var s2 = new Student('学生2 回答问题')
var s3 = new Student('学生3 回答问题')
s1.answer('你叫什么名字？')
s1.answer('你今年多大？')
s2.answer('你叫什么名字？')
s3.answer('你叫什么名字？')
s3.sleep('你今年多大？')
var teacher = new Teacher()
teacher.ask('你叫什么名字？')
teacher.ask('你今年多大？')
