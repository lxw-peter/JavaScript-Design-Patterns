var CheckObject = function () {};
CheckObject.checkName = function () {
    console.log('检查名字')
}
CheckObject.checkEmail = function () {
    console.log('检查邮件')
}
CheckObject.checkPassword = function () {
    console.log('检查密码')
}

var check = new CheckObject();
// 无法继承
check.checkPassword();  // TypeError: check.checkPassword is not a function 
