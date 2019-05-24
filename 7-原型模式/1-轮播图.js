var LoopImages = function (imgArr, container) {
  this.imagesArray = imgArr;
  this.container = container;
  this.createImage =function() {};
  this.changeImage =function() {};
}

// 上下滑动切换类
var SlideLoopImg = function(imgArr, container) {
  LoopImages.call(this, imgArr, container);
  this.changeImage = function() {
    console.log('修改上下滑动图片切换方法');
  }
}

// 渐影切换类
var FadeLoopImg = function(imgArr, container, arrow) {
  LoopImages.call(this, imgArr, container);
  this.arrow = arrow;
  this.changeImage = function() {
    console.log('修改渐影切换图片方法')
  }
}

// 实例化渐影切换图片类
var fadeImg = new FadeLoopImg(
  [
    '01.png',
    '02.png',
    '03.png',
    '04.png',
  ], 
  'slide', 
  [
    'left.jpg',
    'right.png',
  ]
)

fadeImg.changeImage();