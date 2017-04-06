var A=function () {
    this.name='xxx'
}
A.prototype.multiple=function () {
    console.log('multiple')
}
var B=function () {
    this.age='yyy'
}
B.__proto__= new A()
//B.prototype=new A() // 这是原生的继承
// 只会继承共有的使用
B.prototype.speak=function () {
    console.log('speak')
}
var b=new B()
B.multiple()