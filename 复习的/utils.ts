var util = require('util');
function Parent(name,age){
    this.name = name;
    this.age = age;
    this.aa = '123'
}
Parent.prototype.smile="笑";
function Child(){
    this.eat = '吃'
}
Parent.prototype.play="玩";
//只继承共有方法
//Child.prototype = new Parent();
// 下面这两种是一个样的
//Child.prototype.__proto__ = Parent.prototype;
/*Child.prototype = Object.create(Parent.prototype);
 var child = new Child();
 console.log(child.smile);*/
//继承 param1是子构造函数 param2是父类
util.inherits(Child,Parent);
var child = new Child();
console.log(child.aa);
console.log(child.play);