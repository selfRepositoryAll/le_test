// 三个方法
//绑定三个方法
const on = (ele, type, callback) => {
    if ('addEventListener' in window) {
        ele.addEventListener(type, callback, false)
    } else {
        if (!ele[`Events${type}`]) {
            // 为了存放需要绑定的函数
            ele[`Events${type}`] = [];
            ele.attachEvent(`on${type}`, function () {
                run.call(ele)
            })
        }
        var a = ele[`Events${type}`];
        for (var i = 0; i < a.length; i++) {
            if (a[i] == callback)return ;// 肯定是一个一个的过来的
        }
        a.push(callback)
    }
};
const off = (ele, type, callback) => {
    if ('removeEventListener' in window) {
        ele.removeEventListener(type, callback, false)
    } else {
        var a = ele[`Events${type}`];
        if (a) {//
            for (var i = 0; i < a.length; i++) {
                if (a[i] == callback) {
                    a[i] = null
                }
            }
        }
    }
};
const run = () => {
// 开始要真正的去执行去了
    var e=window.event;
    var type=e.type; // 这样才可以通过
    var a=this[`Event${type}`];
    if(a){
        for(var i=0;i<a.length;i++){
            if(typeof a[i]!=='function'){
                a.splice(i,1);
                i--;
                continue
            }
            a[i].call(this,e)//执行的时候改变真正的this指向 同时将事件源穿进去
        }
    }

};