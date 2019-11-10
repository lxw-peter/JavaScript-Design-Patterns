
// 显隐导航组件

function showHideNavWidget (mod, tag, showOrHide) {
  let modEle = document.getElementById(mod)
  let tagELe = modEle.getElementsByTagName(tag)
  showOrHide = (!showOrHide || showOrHide === 'hide') ? 'hidden' : 'visible'
  for (let i = tagELe.length - 1; i >= 0; i--) {
    tagELe[i].style.visibility = showOrHide
  }
}
// 收藏模块
;(function () {
  Mediator.register('hideAllNavNum', function () {
    showHideNavWidget('collection', 'b', false)
  })
  Mediator.register('showAllNavNum', function () {
    showHideNavWidget('collection', 'b', true)
  })
  Mediator.register('hideAllNavUrl', function () {
    showHideNavWidget('collection', 'span', false)
  })
  Mediator.register('showAllNavUrl', function () {
    showHideNavWidget('collection', 'span', true)
  })
})();

(function () {
  let hideNum = document.getElementById('hide_num')
  let hideUrl = document.getElementById('hide_url')
  hideNum.onchange = function () {
    if (hideNum.checked) {
      Mediator.send('hideAllNavNum')
    } else {
      Mediator.send('showAllNavNum')
    }
  }
  hideUrl.onchange = function () {
    if (hideUrl.checked) {
      Mediator.send('hideAllNavUrl')
    } else {
      Mediator.send('showAllNavUrl')
    }
  }
})()
