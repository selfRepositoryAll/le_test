/* 目的是test private  */
var A = (function () {
    function A(message) {
        this.name = message;
    }
    A.prototype.fn = function () {
        return "xxxxx  " + this.name;
    };
    return A;
}());
var x = new A('XXXXXXXXX');
console.log(x.fn()); //
console.dir(x);
