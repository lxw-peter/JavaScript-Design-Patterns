var LoopImages = function (imgArr, container) {
  this.imagesArray = imgArr;
  this.container = container;

}

LoopImages.prototype = {
  createImage : function() {},
  changeImage : function() {},
  getImageLength: function() {
    return this.imagesArray.length;
  }
}

// 上下滑动切换类
var SlideLoopImg = function(imgArr, container) {
  LoopImages.call(this, imgArr, container);
}


SlideLoopImg.prototype = new LoopImages();
SlideLoopImg.prototype.changeImage = function() {
    console.log('修改上下滑动图片切换方法');
}


// 渐影切换类
var FadeLoopImg = function(imgArr, container, arrow) {
  LoopImages.call(this, imgArr, container);
  this.arrow = arrow;
}


FadeLoopImg.prototype = new LoopImages();
FadeLoopImg.prototype.changeImage =  function() {
    console.log('修改渐影切换图片方法');
}
FadeLoopImg.prototype.getContainer = function () {
  return this.container;
}

// 测试用例

// 实例化渐影切换图片类
var fadeImg = new FadeLoopImg(
  [
    '01.png',
    '02.png',
    '03.png',
    '04.png',
  ], 
  'fade', 
  [
    'left.jpg',
    'right.png',
  ]
)

console.log(fadeImg.container);
fadeImg.changeImage();
console.log(fadeImg.getImageLength());
console.log(fadeImg.getContainer());