/* 状态模式： 当一个对象非的内部状态发生改变时，会导致其行为的改变
目的： 讲条件判断的不同结果转化为状态对象的内部状态
*/
var ResultState = (function () {
  var States = {
    state0: function () {
      console.log('这是第一种情况')
    },
    state1: function () {
      console.log('这是第二种情况')
    },
    state2: function () {
      console.log('这是第三种情况')
    },
    state3: function () {
      console.log('这是第四种情况')
    }
  }
  function show (result) {
    States['state' + result] && States['state' + result]()
  }
  return {
    show: show
  }
})()

ResultState.show(3)
