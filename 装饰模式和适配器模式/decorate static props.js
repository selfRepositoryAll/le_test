/* 运行代码是 babel-node 1.js    */
function decorateArmour(target, key, descriptor) { //代理好像之前的 //描述符
    console.log(key)//key 属性名
    console.log(target)// Man {}
    console.log(descriptor.value) // 函数也会放在value
    const method = descriptor.value;
    let moreDef = 100;
    let ret;
    descriptor.value = (...args)=>{
        console.log(args)
        args[0] += moreDef;
        debugger
        ret = method.apply(target, args);
       // return ret; // 有没有都一样
    }
   // return descriptor; // 有没有都一样
}

class Man{
    constructor(def = 2,atk = 3,hp = 3){
        this.init(def,atk,hp);
    }
   //@decorateArmour 修饰的是init这个函数啊
    @decorateArmour
    init(def,atk,hp){
        console.log(def,atk,hp)
        this.def = def; // 防御值
        this.atk = atk;  // 攻击力
        this.hp = hp;  // 血量
    }
    toString(){
        return `防御力:${this.def},攻击力:${this.atk},血量:${this.hp}`;
    }
}

var tony = new Man();

console.log(`当前状态 ===> ${tony}`);
