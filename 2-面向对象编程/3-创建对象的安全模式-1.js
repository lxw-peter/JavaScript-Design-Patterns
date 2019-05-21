var Book = function (id, bookName, price) {
  this.id = id;
  this.bookName = bookName;
  this.price = price;
}

var book = Book(234, 'javascript', '30');
// 浏览器环境下
// 没有实例化时, this 指向的是 window
console.log(book);  // undefined;
console.log(window.id);  // 234
console.log(window.bookName); // javascript
console.log(book.price); // 30
