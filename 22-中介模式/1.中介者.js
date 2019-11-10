// 中介者模式: 通过中介者对象封装一系列对象之间的交互,使对象之间不再相互引用降低它们之间的耦合

let Mediator = (function () {
  let _msg = {}
  return {
    register: function (type, action) {
      if (_msg[type]) {
        _msg[type].push(action)
      } else {
        _msg[type] = []
        _msg[type].push(action)
      }
    },
    send: function (type) {
      if (_msg[type]) {
        _msg[type].forEach(msg => msg && msg())
      }
    },
    get: function () {
      console.log(_msg)
    }
  }
})()

// Mediator.register('demo', function () {
//   console.log('first')
// })

// Mediator.register('demo', function () {
//   console.log('second')
// })

// Mediator.send('demo')
// Mediator.get()
