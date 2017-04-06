var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/* interface 是可以继承的 class 也是可以继承的 */
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message; //在es6中要通过 现在也是这样只不过没有
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var GGG = (function (_super) {
    __extends(GGG, _super);
    function GGG(greeting) {
        _super.call(this, greeting);
    }
    GGG.prototype.age = function () {
        console.log();
    };
    return GGG;
}(Greeter));
var greeter = new Greeter("world");
var ddd = new GGG('XX');
var createFn;
createFn = function (age, name) {
    return false;
};
createFn(22, 'xx');
var Greet = (function () {
    function Greet(message) {
        this.greeting = message;
    }
    Greet.prototype.greet = function () {
        return 'hello  ' + this.greeting;
    };
    return Greet;
}());
