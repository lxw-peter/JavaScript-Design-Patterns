var Car = function () {};
Car.prototype = {
    getPrice: function () {
        console.log('价格为： 100万');
    },
    getSpeed: function () {
        console.log('速度： 120km/h')
    }
};
var car = new Car();
car.getPrice();
car.getSpeed();
