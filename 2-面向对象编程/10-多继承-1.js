// 单继承 属性继承
var extend = function(target, source) {
  // 遍历原对象中的属性
  for (var property in source) {
    target[property] = source[property];
  }
  return target;
}

var book = {
  name: '设计模式',
  alike: ['css', 'JavaScript']

}

var antherBook = {
  color: 'red',
}

extend(antherBook, book);

console.log(antherBook);
antherBook.alike.push('html');
console.log(antherBook);
console.log(book);
