/*JS中常用的继承有以下几种方式(子类想要继承父类中的属性和方法)
 1)原型继承(我们项目中最常用的一种继承方式)
 A、子类的原型指向父类的一个实例即可 ->原理不是把父类中的方法直接的继承复制过来一份,而是通过原型链的查找机制一级级的向上查找使用的(参考图"原型继承.png")
 B、原型继承是把父类中私有和公有的属性和方法都当做子类中公有的
 C、子类可以通过原型链的查找机制把父类原型上的属性和方法进行添加、修改、删除,如果这样操作完成后,我们父类的其他实例都会受到影响 ->子类重父类的方法->类的重写,例如：c.__proto__.__proto__.getX=function(){} 相当于子类重写了父类原型上的公有的方法*/
function Parent() {
    this.x = 100;
}
Parent.prototype.getX = function () {
    console.log(this.x);
};
function Children() {
    this.x = 200;
}
Children.prototype = new Parent;
var c = new Children;

/*2)call继承
 A、在子类的函数体中,把父类当做一个普通的函数执行,让父类执行的时候里面的this变为子类的一个实例,这样就相当于直接的给子类的实例增加私有的属性和方法
 B、call继承只能继承父类私有的属性和方法,而且继承过来后也是子类实例自己私有的
 C、call继承是直接的把父类中的私有属性和方法相当于克隆一份直接的给子类*/
function Parent() {
    this.x = 100;
    this.writeX = function () {
    }
}
Parent.prototype.getX = function () {
    console.log(this.x);
};
function Children() {
    //this->Children的实例c
    Parent.call(this);//把Parent当做普通的函数执行,让里面的this变为c ->在执行的时候相当于c.x=100、c.writeX=function...
}
var c = new Children;
var d = new Children;
console.log(c.writeX === d.writeX);//-->false


/*3)冒充对象继承
 A、在子类的函数体中,我们创建一个父类的实例,然后把这个实例当做一个普通的对象进行遍历,在每一次遍历的时候,把父类中私有/公有的属性和方法,都当做子类实例的私有属性和方法进行存储
 B、父类的私有和公有都可以继承,而是是相当于复制了一份继承过来的
 C、继承过来的都是子类实例私有的属性和方法*/
//看来是无法继承 共有的属性和方法的
function Parent() {
    this.x = 100;
    this.writeX = function () {
    }
}
Parent.prototype.getX = function () {
    console.log(this.x);
};
function Children() {
    var temp = new Parent();
    //temp就是Parent的一个实例:x、writeX、getX
    for (var key in temp) {
        this[key] = temp[key];
    }
    temp = null;//
}
var c = new Children;
var d = new Children;
console.log(c.getX === d.getX);
/*
 4)混合模式继承
 原型继承和call继承/冒充对象继承,任意一个组合到一起来实现的,一般来说都是和call继承组合*/
function Parent() {
    this.x = 100;
    this.writeX = function () {
    }
}
Parent.prototype.getX = function () {
    console.log(this.x);
};
function Children() {
    Parent.call(this);
}
Children.prototype = new Parent;
var c = new Children;