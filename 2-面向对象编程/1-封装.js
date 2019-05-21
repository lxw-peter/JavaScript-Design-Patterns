// 面向对象编程就是将需求抽象成一个对象, 然后针对这个对象分析这个对象分析其特征(属性)与动作(方法). 这个对象称之为类.
// 创建一个类
var Book = function (id, bookName, price) {
  this.id = id;
  this.bookName = bookName;
  this.price = price;
}

Book.prototype = {
  display: function () {}
}

// Book.prototype.display = function(){};

var book = new Book(10, 'javascript设计模式', 50);
console.log(book);


/*  
                      Book (prototype)
                |---->constructor---------|
                |     display             |
                |                         |
book -----------|                         |
__proto__       |                         |
id              |                         |
bookName        |                         |
price           |                         |
                |                         |
                |      Book <-------------|
                |------prototype
                       id
                       bookName
                       price

*/


// 属性与方法封装

var Car = function (id, name, price) {
  // 私有属性 -- 变量
  var num = 1;
  // 私有方法 -- 函数
  function checkId(){};
  // 特权方法
  this.getName = function(){};
  this.getPrice = function(){};
  this.setName = function(){};
  this.setPrice = function(){};
  // 对象公有属性
  this.id = id;
  // 对象公有方法
  this.copy = function(){};
  // 构造器
  this.setName(name);
  this.setPrice(price);
}

// 类的静态公有属性(对象不能访问)
Car.isChinese = true;
// 类静态公有方法(对象不能访问)
Car.resetTime = function() {
  console.log('new')
}

Car.prototype = {
  // 共有属性
  isJsBook: false,
  // 共有方法
  display: function () {}
}
