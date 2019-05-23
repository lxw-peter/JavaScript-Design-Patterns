// 类式继承
// 声明父类
function SuperClass() {
  this.superValue = true;
}

// 为父类添加共有方法
SuperClass.prototype.getSuperValue = function () {
  return this.superValue;
}

// 声明子类
function SubClass() {
  this.subValue = false;
}

// 继承父类
SubClass.prototype = new SuperClass();
// 为子类添加共有方法
SubClass.prototype.getSubValue = function () {
  return this.subValue;
};


var sub = new SubClass();

console.log(sub);  // SuperClass { subValue: false }
console.log(sub.getSubValue());  // false
console.log(sub.getSuperValue()); // true


// instanceof 用于判断前面的对象是否是后面类(对象)的实例
console.log(sub instanceof SubClass);  // true
console.log(sub instanceof SuperClass); //true 
console.log(SubClass instanceof SuperClass); // false
console.log(SubClass.prototype instanceof SuperClass); // true   SubClass.prototype 是 SuperClass 的实例

console.log(sub instanceof Object); // true

// 类式继承有两个缺点 : 
// 一. 由于子类是通过原型 prototype 对父类实例化.继承了父类,所有父类的共有属性是引用类型,就会在子类中被所有实例共享, 
//     因此一个子类的实例更改了子类原型从父类构造器中继承来的共有属性就会直接影响到其他子类
// 二. 由于子类是通过原型 prototype 对父类实例化实现的, 因此在创建父类的时候无法向父类传递参数, 
//     因而在实例化父类的时候也无法对父类构造函数的属性进行初始化
