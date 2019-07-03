// TODO 需求不明确, 待单元测试
var sentData = function (data, type, dom) {
  var xhr = new XMLHttpRequest()
  var url = ''
  xhr.onload = function (event) {
    if (xhr.status >= 200 && (xhr.status < 300 || xhr.status === 304)) {
      dealData(xhr.responseText, type, dom)
    } else {
      throw new Error('请求失败')
    }
  }
  for (var i in data) {
    url += '&' + i + '=' + data[i]
  }
  xhr.open('get', url, true)
  xhr.send(null)
}
var dealData = function (data, type, dom) {
  var dataType = Object.prototype.toString.call(data)
  switch (type) {
    case 'sug':
      if (dataType === '[object Array]') {
        return createSug(data, dom)
      }
      if (dataType === '[object Object]') {
        var newData = []
        for (var i in data) {
          newData.push(data[i])
          return createSug(newData, dom)
        }
      }
      return createSug([data], dom)
    case 'validate':
      return createValidataResult(data, dom)
  }
}

function createSug (data, dom) {
  var i = 0
  var len = data.length
  var html = ''
  for (; i < len; i++) {
    html += '<li>' + data[i] + '</li>'
  }
  // 显示提示框
  $('ul_info').innerHTML = html
}

function createValidataResult (data, dom) {
  $('span_info').innerHTML = data
}
function $ (ele) {
  if (!ele) return
  return document.getElementById(ele)
}
