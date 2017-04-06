function Parent() {
    this.name = 100;
}
Parent.prototype.getX = function () {
    console.log(this.x);
};
function Children() {
    this.x = 200;
    Parent.call(this)
}//这个完美的继承  我们在react 中 props 是因为我们
//
/*Children.prototype=new Parent() // 不好
Children.prototype=Object.create(Parent.prototype)*/
Children.prototype.__proto__=Parent.prototype
var child=new Children()
console.dir(child)