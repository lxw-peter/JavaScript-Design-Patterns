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

// 声明子类
function SubClass(id) {
  // 继承父类
  // 由于call 可以更改函数的作用环境, 因此在子类中, 对superClass调用这个方法就是将子类中的变量在父类中执行一遍,
  //  由于父类中是给this绑定属性的, 因此子类自然继承了父类的共有属性
  SuperClass.call(this, id);
}

// 创建第一个子类的实例
var sub1 = new SubClass(11);

// 创建第一个子类的实例
var sub2 = new SubClass(211);

sub1.books.push('pwa');

console.log(sub1);
console.log(sub2);
// 子类并没有继承父类的原型方法
sub2.showBooks();  // TypeError: sub2.showBooks is not a function



