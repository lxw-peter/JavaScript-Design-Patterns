var CheckObject = function () {
    return {
        checkName : function () {
            console.log('检查名字')
        },
        checkEmail : function () {
            console.log('检查邮件')
        },
        checkPassword : function () {
            console.log('检查密码')
        }
    }
};


var check = new CheckObject();
// 可以继承
check.checkPassword()