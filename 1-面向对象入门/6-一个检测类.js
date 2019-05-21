var CheckObject = function () {};

CheckObject.prototype.checkName = function () {
    console.log('检查名字')
},
CheckObject.prototype.checkEmail = function () {
    console.log('检查邮件')
},
CheckObject.prototype.checkPassword = function () {
    console.log('检查密码')
}

// 或者使用下列方法
CheckObject.prototype = {
    checkName = function () {
        console.log('检查名字');
        return this;
    },
    checkEmail = function () {
        console.log('检查邮件');
        return this;
    },
    checkPassword = function () {
        console.log('检查密码');
        return this;
    }
}

var check = new CheckObject();
check.checkEmail().checkPassword().checkName();