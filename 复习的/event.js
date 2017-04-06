// 先绑定事件
function on(ele, type, fn) {
    if (addEventListener in window) {
        ele.addEventListener(type, fn, false)//这是在事件冒泡的阶段执行这个函数
    } else {
        if (!ele['Event' + type]) {
            ele['Event' + type] = [];
            // 在ie下绑定的这个匿名函数 是无法移除的
            ele.attachEvent(`on${type}`, function () {
                run.call(ele)//这个函数执行的时候让里面的 this变成ele 要不就是window
            })
        }
        var a = ele['Event' + type]
        for (var i = 0; i < a.length; i++) {
            if (a[i] == fn)return // 我明白了这个on绑定是一个一个的执行不是 不是 async.parallel 同时执行
        }
        a.push(fn)
    }
}
// 移除 事件 要删除的事件成为null 整个数组不要发生变化
function off(ele, type, fn) {
    if (removeEventListener in window) {
        ele.removeEventListener(type, fn, false)
    } else {
        // 在ie下那个数组放在元素的身上 这个
        var a = ele['Event' + type]
        for (var i = 0; i < a.length; i++) {
            if ( a[i] == fn) {
                a[i] = null
                return // 已经找了 就不需要往下面执行了
            }
        }
    }
}
// 这个是真真的函数执行
function run() {
    // 因为ie的问题 因为这run 执行在ie下面执行所以我们就不需要 在判断了
    var e = window.event //事件源 也是可以的
    var type = e.type
    if (!e.target) {// ie下是 e.srcElement
        e.target = e.srcElement //
        e.pageX = '';// scrollTop clientHeight
        e.pageY = '';
        e.stopPropagation = function () {
            e.cancelBubble = true
        }
        e.preventDefault = function () {
            e.returnValue = false
        }
    }
    var a = this['Event' + type]
    for (var i = 0; i < a.length; i++) {
        if (typeof a[i] !== 'function') {
            a.splice(i, 1)
            i--;
            continue
        }
        // 这个才是正真的执行改变this执行
        a[i].call(this, e)
    }
}