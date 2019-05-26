// 1. 参数适配

function doSomeThing1 (name, title, age, color, size, price) {
// todo
}
var name, title, age, color, size, price
doSomeThing1(name, title, age, color, size, price)

// 将多个参数合为一个对象
var obj = {
  name: name,
  title: title,
  age: age,
  color: color,
  size: size,
  price: price
}
function doSomeThing2 (obj) {
  // 设置默认值
  var _adapter = {
    name: 'Nike',
    title: 'Nothing is important',
    age: 12,
    color: 'red',
    size: 'L',
    price: 1000
  }
  for (var i in obj) {
    _adapter[i] = obj[i] || _adapter[i]
  }
}
doSomeThing2(obj)

// ---------------------------------------------------------
// 2. 数据适配

var arr = ['JavaScript', 'book', '编程语言', '$24']

arr2Obj(arr)
function arr2Obj (arr) {
  return {
    name: arr[0],
    type: arr[1],
    title: arr[2],
    price: arr[3]
  }
}

// -----------------------------------------------------------------
// 3. 服务器端数据适配
$.ajax({
  url: 'someAdress.php',
  success: function (data, status) {
    if (data) {
      doSomeThing(ajaxAdapter(data))
    }
  }
})
// 有时无法控制数据的格式, 则需要对接受的数据格式进行修改, 如下将数据改为数组形式
function ajaxAdapter (data) {
  return [data['key1'], data['key2'], data['key3']]
}
function doSomeThing (arg) {}
