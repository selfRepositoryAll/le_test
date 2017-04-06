/* interface 是可以继承的 class 也是可以继承的 */
class Greeter {
    greeting: string;// 这边只是定义了私有属性的 类型
    constructor(message: string) {// 哈哈 没有继承的话 就可以不用写super 这个东西
        this.greeting = message;//在es6中要通过 现在也是这样只不过没有
    }

    greet() {
        return "Hello, " + this.greeting;
    }
}
class GGG extends Greeter {
    constructor(greeting: string) {
        super(greeting)
    }

    age() {
        console.log()
    }
}
let greeter = new Greeter("world");
let ddd = new GGG('XX')


// class 的继承 extends 和 super



interface Obj {
    (age: number, name: string):boolean
}
let createFn: Obj
createFn = function (age,name) {
    return false
}
createFn(22,'xx')




class Greet {
    greeting: string;

    constructor(message: string) {
        this.greeting = message
    }

    greet() {
        return 'hello  ' + this.greeting
    }
}
