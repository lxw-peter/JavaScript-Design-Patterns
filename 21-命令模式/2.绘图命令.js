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
    // 填充字体
    fillText: function (text, x, y) {
      ctx.fillText(text, x, y)
    },
    // 开启路径
    beginPath: function () {
      ctx.beginPath()
    },
    // 移动画笔
    moveTo: function (x, y) {
      ctx.moveTo(x, y)
    },
    // 画笔连线
    lineTo: function (x, y) {
      ctx.lineTo(x, y)
    },
    // 绘制弧线
    arc: function (x, y, r, begin, end, dir) {
      ctx.arc(x, y, r, begin, end, dir)
    },
    // 填充
    fill: function () {
      ctx.fill()
    },
    // 描边
    stroke: function () {
      ctx.stroke()
    }
  }
  return {
    // 给一个fn命名, 替换arguments.callee()
    execute: function fn (msg) {
      if (!msg) return
      if (msg.length) {
        for (var i = 0, len = msg.length; i < len; i++) {
          fn(msg[i]) // 替换arguments.callee()
        }
      } else {
        msg.param = [msg.param]
        Action[msg.command].apply(Action, msg.param)
      }
    }
  }
})()
CanvasCommand.execute([
  { command: 'fillStyle', param: 'red' },
  { command: 'fillRect', param: [20, 20, 100, 100] }
])
