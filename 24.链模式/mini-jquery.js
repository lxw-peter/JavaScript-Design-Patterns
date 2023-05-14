/**
 * 1. 选择器
 * 2. css  设置css
 * 3. attr 设置属性
 * 4. on   添加事件
 * 5. trigger 触发事件
 * 6. text 设置文本
 * 7. html 设置html
 * 8. append 添加元素
 */

class LXW {
  constructor(selector) {
    this.ele = document.querySelector(selector);
  }
  text(str) {
    this.ele.innerText = str;
    return this;
  }
  html(str) {
    this.ele.innerHTML = str;
    return this;
  }
  on(type, fn) {
    this.ele.addEventListener(type, fn);
    return this;
  }
  css(...rest) {
    let len = rest.length;
    if (len < 1) {
      return this;
    }
    if (len === 1) {
      if (typeof rest[0] === 'string') {
        return window.getComputedStyle(this.ele, false)[rest[0]];
      } else if (typeof rest[0] === 'object') {
        for (let style in rest[0]) {
          for (let i = len - 1; i >= 0; i--) {
            this.ele.style[this.camelCase(style)] = rest[0][style];
          }
        }
      }
    } else if (len === 2) {
      for (let i = len - 1; i >= 0; i--) {
        this.ele.style[this.camelCase(rest[0])] = rest[1];
      }
    }
    return this;
  }
  camelCase(str) {
    return str.replace(/-(\w)/g, function (match, letter) {
      return letter.toUpperCase();
    });
  }
  attr(...rest) {
    let len = rest.length;
    if (len < 1) {
      return this;
    }
    if (len === 1 && typeof rest[0] === 'object') {
      for (let attr in rest[0]) {
        this.ele.setAttribute(attr, rest[0][attr]);
      }
    } else if (len === 2) {
      const [attr, value] = rest;
      this.ele.setAttribute(attr, value);
    }
    return this;
  }
  trigger(type) {}
}

export default function (selector) {
  return new LXW(selector);
}
