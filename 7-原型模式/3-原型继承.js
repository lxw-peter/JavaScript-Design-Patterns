function prototypeExcend() {
  var F = function () {},
      i = 0,
      args = arguments,
      len = args.length;
  for (; i < len; i++) {
    // 遍历每个模板对象中的属性
    for (var j in args[i]) {
      // 将属性复制到缓存类原型中
      F.prototype[j] = args[i][j];
    }
  }
  return new F();
}

var penguin = prototypeExcend(
  {
    speed: 20,
    swim: function () {
      console.log('游泳速度: ' + this.speed);
    }
  },
  {
    run: function (speed) {
      console.log('蹦跑速度: ' + speed);
    }
  },
  {
    jump: function() {
      console.log('跳跃动作')
    }
  }
)

penguin.swim();
penguin.run(80);
penguin.jump();