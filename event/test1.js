function Events() {
    this._events={}
}
// 发布事件
Events.prototype.emit=function (type) {
// 我要出执行函数
 var args=Array.prototype.slice.call(arguments,1)//
    var cur=this._events[type]
    var that=this
    if(cur){
     cur.forEach((item)=>{
         item.apply(that,args)
     })
    }
}
// 订阅事件
Events.prototype.on=function (type,callback) {
// 首先把所有的
    if(this._events[type]){
        this._events[type].push(callback)
    }else {
        this._events[type]=[callback]
    }
}
Events.prototype.remove=function (type,callback) {
    this._events[type]=this._events[type].filter((item)=>{
        return  item!=callback
    })
}
function cry() {
    //console.log('cry',arguments) [].slice
    var res=Array.from(arguments)
    console.log('res',res)
    console.log('cry')
}
function money() {
    console.log('money')
}
var girl=new Events()
//实力原型上
girl.on('girl',cry)
girl.on('girl',money)
// 去执行  使用原型继承
girl.emit('girl','xxxx')
girl.remove('girl',cry)
girl.emit('girl')
