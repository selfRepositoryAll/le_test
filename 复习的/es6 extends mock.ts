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
}
//这样只会继承共有的 私有的是没有的 call就可以了 这样可以通过原型链 修改A 的东西
B.prototype.__proto__=A.prototype
B.prototype.speak=function () {
    console.log('speak')
}
//不能设置呢？
/*B.prototype.__proto__.prototype.face=function () {
    console.log('smile')
}*/
console.log(B.prototype.__proto__===A.prototype)
var bbb=new B()
console.dir(bbb)
console.dir(A)