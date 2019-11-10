
(function () {
  function addMsgItem (e) {
    var text = e.args.text
    var ul = $('msg')
    var li = createEle('li')
    li.innerHTML = text
    var removeBtn = createEle('button')
    removeBtn.innerHTML = '删除'
    removeBtn.className = 'removeBtn'
    removeBtn.style.float = 'right'
    removeBtn.onclick = function () {
      ul.removeChild(li)
      Observer.fire('removeCommentMessage', {
        num: -1
      })
    }
    li.appendChild(removeBtn)
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
  Observer.register('removeCommentMessage', changeMsgNum)
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
