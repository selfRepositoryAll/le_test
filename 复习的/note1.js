typeof  constructor instanceof  Object.prototype.toString.call()
null object undefined
null undefined bollean string number object
typeof NaN =number

兼容性问题:dom2级事件
Function.prototype.myBind = function myBind(context) {
    var _this = this;
    var outerArg = Array.prototype.slice.call(arguments, 1);

    if ("bind" in Function.prototype) {
        //_this.bind(context, outerArg);//->fn.bind(obj,[100,200]) fn中的this是obj,num1->[100,200] num2->undefined
        //->fn.bind.apply(fn,[obj,100,200])
        outerArg.unshift(context); // push pop shift unshift
        return _this.bind.apply(_this, outerArg);
    }

    //->IE6~8
    return function () {
        var innerArg = Array.prototype.slice.call(arguments, 0);
        _this.apply(context, outerArg.concat(innerArg));
    }
};
//bind()// 返回一个匿名函数
fn.bind()//改变this指向 和参数的问题
Function.prototype.myBind=function (context) {
    var _this=this;
    var outerArg=Array.prototype.slice.call(arguments,1)
    if('bind' in Function.prototype){
        outerArg.unshift(context)
        return _this.bind.apply(_this,outerArg)
    }
    return function () {
        var innerArg=Array.prototype.splice.call(arguments,0)
        _this.apply(context,outerArg.concat(innerArg))
    }
}

// 则是bind 兼容性的问题
var utils=(function () {
    var name=function () {

    }
    return {name:name}
})()
// 这个闭包不会消失 我们可以放在属性上//






//  观察者模式


// 处理兼容性的问题 dom2级事件 e.type offset e.target e.srcElement
e.pagex e.pageY //
// 获取css的属性 通过
window.getComputedStyle()
ele.currentStyle //
navigator.userAgent/// /
window.event //
this指向  window 是事件源e.target 做可以了;;






function on(ele,type,fn) {
    if(addEventListener in window){
        ele.addEventListener(type,fn,false)//这是冒泡阶段
    }else {
        if(!ele['Event'+type]){
            ele['Event'+type]=[];
            ele.attachEvent(`on${type}`,function () {
                run.call(ele) /// 这样就可以在run里面获取到了
            })
        }
        var a=ele[`Event${type}`]
        for(var i=0;i<a.length;i++){
            if(a[i]===fn)return
        }
        a.push(fn)
    }
}
// 这个真是的删除数组
function run() {

}
//这个只是将 数组变成null

function remove() {

}




class Events {
    constructor(){
        this._events={}
    }
    on(type,fn){
        if(this){

        }
    }
    emit(){

    }
    off(){

    }
}







