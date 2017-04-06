//创建全局函数
function obj(name){
    if(name){
        this.name = name;
    }
    return this;//返回this引用 有name的时候 this是window
}
obj.prototype.name = "name2";//设置原型对象
var a = obj("name1");//直接调用函数，this等于window，a等于window。
var b = new obj;//等价于var b = new obj();调用函数实例化对象，this指向obj。
console.log(a.name)
console.log(b.name)