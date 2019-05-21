var CheckObject = {
    checkName: function() {
        // 验证姓名
    },
    checkEmail: function() {
        // 验证邮箱
    },
    checkPassword: function() {
        // 验证密码    
    }
}
CheckObject.checkName();
CheckObject.checkEmail();
CheckObject.checkPassword();


// 另一种方式
var CheckObject = {
    checkName: function() {
        // 验证姓名
        return this;
    },
    checkEmail: function() {
        // 验证邮箱
        return this;
    },
    checkPassword: function() {
        // 验证密码
        return this;
    }
}
CheckObject.checkName().checkEmail().checkPassword();