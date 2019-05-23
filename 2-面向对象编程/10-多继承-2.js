// 多继承 属性复制
var mix = function () {
  var i = 1,
      len = arguments.length,
      target = arguments[0], // 第一个参数为继承对象
      arg;
  // 遍历被继承的对象
  for(; i < len; i++) {
    arg = arguments[i];
    for (var property in arg) {
      target[property] = arg[property];
    }
  }
}

var book1 = {
  name: '设计模式',
  alike: ['css', 'JavaScript']
}

var book2 = {
  color: 'red',
  about: '一本有趣的前端书籍'
}


var otherBook = {
  id: 123,
}

mix(otherBook, book1, book2);
console.log(otherBook);
otherBook.alike.push('html');
console.log(otherBook);
console.log(book1);

