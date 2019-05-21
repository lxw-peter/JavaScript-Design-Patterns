var Car = (function () {
  // 私有属性 -- 变量
  var carNum = 1;
  // 私有方法 -- 函数
  function checkId(){};
  // 创建类
  function _car(newId, newName, newPrice) {
    var name, price;
    function checkCar() {};
    this.getName = function(){};
    this.getPrice = function(){};
    this.setName = function(){};
    this.setPrice = function(){};
    // 公有属性
    this.id = newId;
    this.name = newName;
    this.price = newPrice;

    // 公有方法
    this.copy = function(){};
    // 构造器
    this.setName(name);
    this.setPrice(price);
    carNum++;
    if (carNum > 1) {
      console.log('只生产100台汽车');
    }
  }
  // 构建原型
  _car.prototype = {
    hasDoor: false,
    display: function () {console.log('display')}
  }
  return _car;
})();


var car = new Car(10, 'Tank', '100万');
console.log(car);
console.log(car.hasDoor);
car.display();