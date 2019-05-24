function createPop(type, text) {
    var o = new Object();
    o.content = text;
    o.show = function() {
        // TODO 显示方法
    };
    
    if( type === 'alert' ) {
        console.log('alert');
    }
    if( type === 'prompt' ) {
        console.log('prompt');        
    }
    if( type === 'confirm' ) {
        console.log('confirm');        
    }
    // 将对象返回
    return o;
}

var userNameAlert = createPop('alert', '用户名不能多于16个字母或数字');
console.log(userNameAlert);
