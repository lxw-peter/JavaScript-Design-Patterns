// 装饰者模式: 在不改变原对象的基础上, 通过对其进行包装拓展(添加属性或者方法)是原有对象可以满足用户的更复杂要求
var telInput = document.getElementById('tel_input')
var tleWarnText = document.getElementById('tel_warn_text')

telInput.onclick = function () {
  tleWarnText.style.display = 'inline-block'
}

// 在原有事件下新增一个事件

var decorator = function (input, fn) {
  var input_ele = document.getElementById(input)
  if (typeof input_ele.click === 'function') {
    var oldClickFn = input_ele.onclick
    input_ele.onclick = function () {
      oldClickFn()
      fn()
    }
  } else {
    input_ele.onclick = fn
  }
}

decorator('tel_input', function () {
  var tleDemoText = document.getElementById('tel_demo_text')
  tleDemoText.style.display = 'inline-block'
})

// decorator方法增加事件类型参数(type),则可为不同类型的事件添加方法
var newDecorator = function (id, type, fn) {
  var dom = typeof id === 'string' ? document.getElementById(id) : id
  if (typeof dom[type] === 'function') {
    var oldFn = dom[type]
    dom[type] = function () {
      oldFn()
      fn()
    }
  } else {
    dom[type] = fn
  }
}

newDecorator('tel_input', 'onblur', function () {
  var tleDemoText = document.getElementById('tel_demo_text')
  tleDemoText.style.display = 'none'
})
