var CheckObject = function () {
    this.checkName = function () {
        console.log('检查名字')
    },
    this.checkEmail = function () {
        console.log('检查邮件')
    },
    this.checkPassword = function () {
        console.log('检查密码')
    }
};


var check = new CheckObject();
// 可以继承
check.checkEmail();
