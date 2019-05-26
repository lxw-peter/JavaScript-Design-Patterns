// 桥接模式: 在系统沿着多个维度变化的同时 , 又不增加其复杂度并达到解耦

var span = document.getElementById('userInfo')
span.onmouseover = function () {
  this.style.color = 'red'
  this.style.backgroundColor = '#ddd'
}

span.onmouseout = function () {
  this.style.color = '#333'
  this.style.backgroundColor = '#f5f5f5'
}

// 对相同的逻辑做抽象提取
function changeColor (dom, color, bg) {
  dom.style.color = color
  dom.style.backgroundColor = bg
}
span.onclick = function () {
  changeColor(this, 'green', 'pink')
}
