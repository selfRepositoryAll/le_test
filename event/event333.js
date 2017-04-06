function Events() {
    this._events = {}
}
Events.prototype.on = function (type, callback) {
    this._events[type] ? this._events.push(callback) : this._events[type] = [callback]
}
Events.prototype.emit = function (type) {
    var arg = [].slice.call(arguments, 1)
    var that = this;
    this._events[type] ? this._events[type].map((item) => {
            item.apply(that, item)
        }) : null
}
Events.prototype.off = function (type,callback) {
    this._events[type]=this._events[type].filter((item)=>{
        return callback!=item
    })
}

var girl = new Events()
function cry() {
    console.log('cry')
}
girl.on('xx', cry);
girl.emit('xx');
girl.off('xx', cry);

