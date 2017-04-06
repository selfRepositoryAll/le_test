var A=function () {
    this.name='xxx'
/*    this.face=function () {
        console.log('face') //这个位置的face
    }*/
}
A.prototype.face=function () {
    console.log('face')//这个位置的face和this.face 有什么不同
}
var B=function () { //如何继承私有的
    this.age='99'
    A.call(this)
}
B.prototype=Object.create(A.prototype)
B.prototype.speak=function () {
    console.log('speak')
}
// 也是不可以设置的
/*B.prototype.__proto__.prototype.face=function () {
    console.log('smile')
}*/
console.log(B.prototype.__proto__===A.prototype)
var bbb=new B()
console.dir(bbb)
console.dir(A)