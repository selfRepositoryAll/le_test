function Events() {
    this._events = {}
}
Events.prototype.on = function (eventName, callback) {
    if (this._events[eventName]) {
        this._events[eventName].push(callback)
    } else {
        this._events[eventName] = [callback]
    }

}
Events.prototype.emit = function (eventName) {
    // 这点好像没什么用发送其他参数的时候有用
    var args = Array.prototype.slice.call(arguments, 1)
    var that=this
    var cur=this._events[eventName]
    if(cur){
        cur.forEach((item)=>{
            console.log(args)
            item.apply(that,args)
        })
    }
}
Events.prototype.remove=function (eventName, callback) {
    this._events[eventName]=this._events[eventName].filter((item)=>{
        return item!=callback
    })
}
function cry() {
    console.log('cry')
}
function money() {
    console.log('moeny')
}
var girl = new Events()
girl.on('girl', cry)
girl.on('girl',money)
//订阅完成之后就发布
girl.emit('girl')
girl.remove('girl',money)
girl.emit('girl')