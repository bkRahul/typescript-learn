//primitive type
var day = 1;
var firstName = 'Rahul';
var nothing = null;
//object types
var today = new Date();
today.getMonth();
//array
var colors = ['red', 'green', 'blue'];
var numbers = [1, 2, 3];
//function
var logNumber = function (numbers) {
    console.log(numbers);
};
logNumber(10);
//classes
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var car = new Car();
//Object literal
var person = {
    name: 'Rahul',
    age: 20
};
