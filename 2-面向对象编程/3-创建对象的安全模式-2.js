var Book = function (id, bookName, price) {
  if (this instanceof Book) {
    this.id = id;
    this.bookName = bookName;
    this.price = price;
  } else {
    return new Book(id, bookName, price);
  }
}

var book = Book(234, 'javascript', '30');
console.log(book.id);
console.log(book.bookName);
console.log(book.price);
