function createEle (ele) {
  return document.createElement(ele)
}
var Alert = function (data) {
  if (!data) return
  this.content = data.content
  this.panel = createEle('div')
  this.contentNode = createEle('p')
  this.confirmBtn = createEle('span')
  this.closeBtn = createEle('b')
  this.panel.className = 'alert'
  this.closeBtn.className = 'a-close'
  this.contentNode.className = 'content'
  this.confirmBtn.className = 'confirm'
  this.closeBtn.innerHTML = 'X'
  this.confirmBtn.innerHTML = data.confirm || '确认'
  this.contentNode.innerHTML = this.content
  this.success = data.success || function () {}
  this.fail = data.fail || function () {}
}

Alert.prototype = {
  init: function () {
    this.panel.appendChild(this.closeBtn)
    this.panel.appendChild(this.contentNode)
    this.panel.appendChild(this.confirmBtn)
    document.body.appendChild(this.panel)
    this.bindEvent()
    this.show()
  },
  bindEvent: function () {
    var _this = this
    this.closeBtn.onclick = function () {
      _this.fail()
      _this.hide()
    }
    this.confirmBtn.onclick = function () {
      _this.success()
      _this.hide()
    }
  },
  hide: function () {
    this.panel.style.display = 'none'
  },
  show: function () {
    this.panel.style.display = 'block'
  }
}

// 右侧按钮提示框
var RightAlert = function (data) {
  Alert.call(this, data)
  this.confirmBtn.className = this.confirmBtn.className + 'right'
}
RightAlert.prototype = new Alert()

// 标题提示框
var TitleAlert = function (data) {
  Alert.call(this, data)
  this.title = data.title
  this.titleNode = createEle('h3')
  this.titleNode.className = 'title'
  this.titleNode.innerHTML = this.title
}
// 继承基本提示框方法
TitleAlert.prototype = new Alert()
TitleAlert.prototype.init = function () {
  this.panel.insertBefore(this.titleNode, this.panel.firstChild)
  Alert.prototype.init.call(this)
}

// 带有取消按钮的弹出框
var CancelAlert = function (data) {
  TitleAlert.call(this, data)
  this.cancel = data.cancel
  this.cancelBtn = createEle('span')
  this.cancelBtn.className = 'cancel'
  this.cancelBtn.innerHTML = this.cancel || '取消'
}
CancelAlert.prototype = new Alert()
CancelAlert.prototype.init = function () {
  TitleAlert.prototype.init.call(this)
  this.panel.appendChild(this.cancelBtn)
}
CancelAlert.prototype.bindEvent = function () {
  var _this = this
  TitleAlert.prototype.bindEvent.call(_this)
  this.cancelBtn.onclick = function () {
    _this.fail()
    _this.hide()
  }
}

new CancelAlert({
  title: '提示标题',
  content: '梅西不拿金球也伟大',
  success: function () {
    console.log('ok')
  },
  fail: function () {
    console.log('cancel')
  }
}).init()
