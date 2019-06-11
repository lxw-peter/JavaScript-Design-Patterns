(function () {
  function addMsgItem (e) {
    var text = e.args.text
    var ul = $('msg')
    var li = createEle('li')
    var span = createEle('span')
    li.innerHTML = text
    span.onclick = function () {
      ul.removeChild(li)
      Observer.fire('removeCommentMessage', {
        num: -1
      })
    }
    li.appendChild(span)
    ul.appendChild(li)
  }
  Observer.register('addCommentMessage', addMsgItem)
})();

(function () {
  function changeMsgNum (e) {
    var num = e.args.num
    $('msg_num').innerHTML = parseInt($('msg_num').innerHTML) + num
  }
  Observer
    .register('addCommentMessage', changeMsgNum)
    // .register('removeCommentMessage', changeMsgNum)
})();

(function () {
  $('user_submit').onclick = function () {
    var text = $('user_input')
    if (text.value === '') return
    Observer.fire('addCommentMessage', {
      text: text.value,
      num: 1
    })
    text.value = ''
  }
})()
function $ (id) {
  return document.getElementById(id)
}
function createEle (ele) {
  return document.createElement(ele)
}
