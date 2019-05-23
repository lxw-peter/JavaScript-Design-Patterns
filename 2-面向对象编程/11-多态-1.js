// 同一种方法多种调用方式

function add() {
  var arg = arguments;
  var len = arguments.length;
  switch(len) {
    case 0:
      return 10;
    case 1:
      return 10 + arg[0];
    case 2: 
      return arg[0] + arg[1];
  }
}

console.log(add());
console.log(add(23, 33));
console.log(add(12));
