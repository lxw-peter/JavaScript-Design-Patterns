/**
 * 寄生式继承 继承原型
 * 传递参数 subClass 子类
 * 传递参数 superClass 父类
 */
function inheritPrototype(subClass, superClass) {
  // 复制一份父类的原型副本保存在变量中
  var p = inheritObject(superClass.prototype);
  // 修正因为重写子类原型导致子类的 constructor 属性被修改
  p.constructor = subClass;
  // 设置子类的原型
  subClass.prototype = p;
}

// 原型式继承
function inheritObject(o) {
  // 声明一个过滤函数对象
  function F() {};
  // 过渡对象的原型继承父对象
  F.prototype = o;
  // 返回过渡对象的一个实例, 该实例的原型继承了父对象
  return new F();
}

// 类式继承
// 声明父类
function SuperClass(id) {
  this.books = ['javascript', 'html', 'css'];
  this.id = id;
}

// 为父类添加共有方法
SuperClass.prototype.showBooks = function () {
  console.log(this.books);
}

// 声明子类 --构造函数式继承
function SubClass(id, time) {
  // 继承父类
  // 由于call 可以更改函数的作用环境, 因此在子类中, 对superClass调用这个方法就是将子类中的变量在父类中执行一遍,
  //  由于父类中是给this绑定属性的, 因此子类自然继承了父类的共有属性
  SuperClass.call(this, id);
  this.time = time;
}

inheritPrototype(SubClass, SuperClass);

// 为子类添加共有方法
SubClass.prototype.getTime = function () {
  console.log(this.time);
};

var sub1 = new SubClass(121, 2012);
var sub2 = new SubClass(345, 2018);
console.log(sub1);
console.log(sub2);

sub1.books.push('pwa');
console.log(sub1.books);
console.log(sub2.books);

