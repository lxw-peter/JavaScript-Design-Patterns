// 原型式继承
function inheritObject(o) {
  // 声明一个过滤函数对象
  function F() {};
  // 过渡对象的原型继承父对象
  F.prototype = o;
  // 返回过渡对象的一个实例, 该实例的原型继承了父对象
  return new F();
}

var book = {
  name: 'js book',
  alikeBook: ['css', 'html', 'javascript']
}

function createBook(obj) {
  // 通过原型继承方式创建新对象
  var o = inheritObject(obj);
  // 拓展新对象
  o.getName = function () {
    console.log(this.name);
  };
  // 返回拓展后的新对象
  return o;
}  


var newBook  = createBook(book);
newBook.name = 'ajax';
newBook.alikeBook.push('xml book');


var otherBook  = createBook(book);
otherBook.name = 'pwa';
otherBook.alikeBook.push('koa book');


console.log(newBook);
console.log(otherBook);

newBook.getName();
otherBook.getName();

// 数组为引用类型 ,继承的属性被共用, 后者覆盖前者
console.log(newBook.alikeBook);
console.log(otherBook.alikeBook);

// TODO 没看懂 inheritObject(obj) 运行的结果