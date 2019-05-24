
// 登录提示框
var LoginAlert = function (text) {
    this.content = text;
}

LoginAlert.prototype.show = function () {
    // TODO 显示提示框
}

// var userNameAlert = new LoginAlert('用户名不能多于16个字母或数字');
// userNameAlert.show();

// var passwordAlert = new LoginAlert('输入密码不正确');
// passwordAlert.show();


// 警示框有登录按钮
var LoginConfirm = function (text) {
    this.content = text;
}

LoginConfirm.prototype.show = function () {
    // TODO 显示确认框
};



// 登录成功给出自定义提示框， 有确认取消按钮， 并且有提示语
var LoginPrompt = function (text) {
    this.content = text;
}
LoginPrompt.prototype.show = function () {
    // TODO 显示提示框
};


var popFactory = function (name, text) {
    switch(name) {
        case 'alert':
            return new LoginAlert(text);
        case 'confirm':
            return new LoginConfirm(text);
        case 'prompt':
            return new LoginPrompt(text);
    }
}

console.log(popFactory('alert', '你好啊'));