// 
var Demo = function() {};
Demo.prototype = {
  show: function() {
    console.log('成功了');
  }
}
var d = new Demo();
d.show(); //成功了

var dd = Demo();
d.show(); // Uncaught TypeError


// 安全模式 -- 防止遗漏 new 关键字
var Demo = function() {
  if (!this instanceof Demo) {
    return new Demo();
  }
};
