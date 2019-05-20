var Human = function(param) {
  this.skill = param && param.skill || '保密';
  this.hobby = param && param.hobby || '保密';
}
Human.prototype = {
  getSkill: function() {
    return this.skill;
  },
  getHobby: function () {
    return this.hobby;
  }
}
// 实例化姓名类
var Named = function(name) {
  var that = this;
  (function (name, that) {
      that.wholeName = name;
      if(name.indexOf(' ') > -1) {
        that.FirstName = name.slice(0, name.indexOf(' '));
        that.SecondName = name.slice(name.indexOf(' '));
      }
  })(name, that);
}

// 实例化职位类
var Work = function (work) {
  var that = this;
  (function (work, that) {
    switch (work) {
      case 'code':
        that.work = '工程师';
        that.workDescription = '每天沉醉于编程'
        break;
      case 'UI':
      case 'UE':
        that.work = '设计师';
        that.workDescription = '设计更似一种艺术';
        break;
      case 'teach':
        that.work = '教师';
        that.workDescription = '分享一种快乐';
      default:
        this.work = work;
        that.workDescription = '暂无该职业相关描述';
        break;
    }
  })(work, that);  
}

// 更换期望的职业
Work.prototype.changeWork = function (work) {
  this.work = work;
}
// 添加对职业的描述
Work.prototype.changeDescription = function (content) {
  this.workDescription = content;
}

// 创建应聘者 -- 完整的对象局部创建
var Person = function(name, work) {
  var _person = new Human();
  _person.name = new Named(name);
  _person.work = new Work(work);
  return _person;
}

var person = new Person('Tom Bob', 'code');

console.log(person);
// 修改工作描述
person.work.changeDescription('996');

console.log(person);

