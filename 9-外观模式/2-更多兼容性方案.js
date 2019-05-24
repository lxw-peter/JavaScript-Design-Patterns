var getEvent = function (event) {
  return event || window.event
}

var getTarget = function (event) {
  event = getEvent(event)
  return event.target || event.srcElement
}

var preventDefault = function (event) {
  event = getEvent(event)
  if (event.preventDefault) {
    event.preventDefault()
    // IE浏览器
  } else {
    event.returnValue = false
  }
}
