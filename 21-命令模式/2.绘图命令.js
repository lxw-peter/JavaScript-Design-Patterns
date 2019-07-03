var CanvasCommand = (function () {
  var canvas = document.getElementById('canvas')
  var ctx = canvas.getContext('2d')
  var Action = {
    // 填充色彩
    fillStyle: function (c) {
      ctx.fillStyle = c
    },
    // 填充矩形
    fillRect: function (arg) {
      // if (arg.length < 4) return
      // var [x, y, width, height] = arg
      var x = arg[0]
      var y = arg[1]
      var width = arg[2]
      var height = arg[3]

      ctx.fillRect(x, y, width, height)
    },
    // 描述色彩
    strokeStyle: function (c) {
      ctx.strokeStyle = c
    },
    // 描述矩形
    strokeRect: function (...arg) {
      if (arg.length < 4) return
      var [x, y, width, height] = arg
      ctx.strokeRect(x, y, width, height)
    },
    fillText: function (text, x, y) {
      ctx.fillText(text, x, y)
    },
    beginPath: function () {
      ctx.beginPath()
    },
    moveTo: function (x, y) {
      ctx.moveTo(x, y)
    },
    lineTo: function (x, y) {
      ctx.lineTo(x, y)
    },
    arc: function (x, y, r, begin, end, dir) {
      ctx.arc(x, y, r, begin, end, dir)
    },
    fill: function () {
      ctx.fill()
    },
    stroke: function () {
      ctx.stroke()
    }
  }
  return {
    execute: function (msg) {
      if (!msg) return
      if (msg.length) {
        for (var i = 0, len = msg.length; i < len; i++) {
          arguments.callee(msg[i])
        }
      } else {
        msg.param = Object.prototype.toString(msg.param) === '[object Array]'
          ? msg.param
          : [msg.param]
        Action[msg.command].apply(Action, msg.param)
      }
    }
  }
})()
CanvasCommand.execute([
  { command: 'fillStyle', param: 'red' },
  { command: 'fillRect', param: [20, 20, 100, 100] }
])
