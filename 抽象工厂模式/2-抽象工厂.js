var VehicleFactory = function (subType, superType) {
    // 判断抽象工厂中是否有改抽象类
    if(typeof VehicleFactory[superType] === 'function') {
        function F() {}
        F.prototype = new VehicleFactory[superType]();
        subType.constructor = subType;
        subType.prototype = new F();
    } else {
        throw new Error('未创建该抽象类');
    }
};

// 小汽车
VehicleFactory.Car = function () {
    this.type = 'car';
};
VehicleFactory.Car.prototype = {
    getPrice: function () {
        console.log('价格为： 100万');
    },
    getSpeed: function () {
        console.log('速度： 120km/h')

    }
};

// 公交车
VehicleFactory.Bus = function () {
    this.type = 'bus';
};
VehicleFactory.Bus.prototype = {
    getPrice: function () {
        console.log('价格为： 100万');
    },
    getSpeed: function () {
        console.log('速度： 120km/h')

    }
};

// 火车抽象类
VehicleFactory.Truck = function () {
    this.type = 'truck';
};
VehicleFactory.Truck.prototype = {
    getPrice: function () {
        console.log('价格为： 100万');
    },
    getSpeed: function () {
        console.log('速度： 120km/h');

    }
};

// 宝马汽车子类
var BMW = function (price, speed) {
    this.price = price;
    this.speed = speed;
};
VehicleFactory(BMW, 'Car');
// 重写父类的方法
BMW.prototype.getPrice = function(){
    return this.price;
};
BMW.prototype.getSpeed = function(){
    return this.speed;
};

var car = new BMW('价格： 35万', '速度: 100km/h');
console.log(car.type);
console.log(car.getPrice());
console.log(car.getSpeed());