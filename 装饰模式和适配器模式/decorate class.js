/*
类添加方法或者修改方法（通过被装饰类的 prototype）：*/
function decorateArmour(num) {
    return function(target, key, descriptor) {
        const method = descriptor.value;
        let moreDef = num || 100;
        let ret;
        descriptor.value = (...args)=>{
            args[0] += moreDef;
            ret = method.apply(target, args);
            return ret;
        }
        return descriptor;
    }
}


function addFunc(target) {
    console.log('target',target);//
    target.prototype.addFunc = () => {
        return 'i am addFunc'
    }
    return target;
}

@addFunc
class Man{
    constructor(def = 2,atk = 3,hp = 3){
        this.init(def,atk,hp);
    }

    @decorateArmour(20)
    init(def,atk,hp){
        this.def = def; // 防御值
        this.atk = atk;  // 攻击力
        this.hp = hp;  // 血量
    }
    toString(){
        return `防御力:${this.def},攻击力:${this.atk},血量:${this.hp}`;
    }
}

var tony = new Man();
console.log(`当前状态 ===> ${tony}`)
console.log(tony.addFunc());

// 输出：当前状态 ===> 防御力:22,攻击力:3,血量:3
// 输出：i am addFunc