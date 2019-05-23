// 原型式继承--类继承的封装
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

var newBook  = inheritObject(book);
newBook.name = 'ajax';
newBook.alikeBook.push('xml book');

var otherBook  = inheritObject(book);
otherBook.name = 'pwa';
otherBook.alikeBook.push('koa book');

// 字符串为基本类型,不会被共用
console.log(newBook);
console.log(otherBook);

// 数组为引用类型 ,继承的属性被共用, 后者覆盖前者
console.log(newBook.alikeBook);
console.log(otherBook.alikeBook);
