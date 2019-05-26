var telInput = document.getElementById('tel_input')
var tleWarnText = document.getElementById('tel_warn_text')
var tleDemoText = document.getElementById('tel_demo_text')

telInput.onclick = function () {
  tleWarnText.style.display = 'inline-block'
}

// 现在给输入框增加一个点击事件
telInput.onclick = function () {
  tleWarnText.style.display = 'inline-block'
  tleDemoText.style.display = 'inline-block'
}
