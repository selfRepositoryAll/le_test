组织语言
call 继承私有的
继承共有的属性 prototype

A.prototype=new B()// 私有和共有 全会当做共有的
A.prototype=Object.create(B.prototype)// create就是通过
A.prototype.__proto__=B.prototype;//
Object.create=function (par) {
    var F=function () {}
    F.prototype=par
    return new F()//
}
A.prototype.__proto__=B.prototype


es6中的extends 继承了私有和共有的 call 和上面的任何一个都可以只继承共有的
node中的util.inherits（）//这个也是继承共有的
