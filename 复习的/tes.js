class Events {
    constructor() {
        this._events = {}

    }
    on(type, callback) {
        this._events[type] ? this._events[type].push(callback) : this._events[type] = [callback]
    }
    emit(type) {
        const args = [].slice.call(arguments, 1);
        const that = this;
        const a = this._events[type]
        if (a) {
            a.map((item) => {
                item.apply(that, args)
            })
        }
    }
    remove(type, callback) {
        this._events[type] = this._events[type].filter((item) => {
            return item != callback
        })
    }
}


//this指向  事件源 顺序 重复性问题
// 绑定事件
const on = (ele, type, callback) => {
    if ('addEventListener' in window) {
        ele.addEventListener(type, callback, false)
    } else {
        if (!ele['Events' + type]) {
            ele['Events' + type] = []
            ele.attachEvent(`on${type}`, function(){
                run.call(ele)
            })
        }
        const a = ele['Events' + type]
        if (a) {
            a.map((item) => {
                if (item == callback) returnF
            })
        }
        a.push(callback)
    }
}
// 移除事件
const off = (ele, type, callback) => {
    if('removeEventListener' in window){
        ele.removeEventListener(type,callback,false)
    }else{
        const a=ele['Events'+type]
        if(a){
            a.map((item)=>{
                if(item ===callback){
                    item =null
                    return
                }
            })
        }
    }
}
// 运行
const run = () => {
    // this是ele
    const e=window.event;
    const type=e.type;
    const a=this['Events'+type]
    if(a){
        for(let i=0;i<a.length;i++){
            if(typeof a[i]==='function'){
                a[i].call(this,e)// 把 事件源传进去
            }else{
                a.splice(i,1)
                i--;
                continue
            }
        }
    }
}


























