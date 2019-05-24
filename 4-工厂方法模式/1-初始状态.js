var Java = function (content) {
    this.content = content;
    (function (content) {
        var div = document.createElement('div');
        div.innerHTML = content;
        div.style.color = 'green';
        document.getElementById('container').appendChild(div);
    })(content);
}

var Php = function (content) {
  this.content = content;
  (function (content) {
      var div = document.createElement('div');
      div.innerHTML = content;
      div.style.color = 'pink';
      document.getElementById('container').appendChild(div);
  })(content);
}

var Javascript = function (content) {
  this.content = content;
  (function (content) {
      var div = document.createElement('div');
      div.innerHTML = content;
      div.style.color = 'red';
      document.getElementById('container').appendChild(div);
  })(content);
}

// 工厂模式
function JobFactory(type, content) {
  switch (type) {
    case 'Java':
      return new Java(content);
    case 'Php':
      return new Php(content);
    case 'Javascript':
      return new Javascript(content);
    default:
      break;
  }
}