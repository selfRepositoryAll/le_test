for (var i = 0; i < 5; i++) {
    ((j) => {
        setTimeout(function () {
            console.log(Date.now(), j)
        }, j * 1000);
    })(i)
}
setTimeout(function () {
    console.log(Date.now(), i)
}, 1000 * i);
//使用借助 promise
var tasks = []
const out = (i) => new Promise((resolve, reject) => {
    setTimeout(function () {
        console.log(Date.now(), i);
        resolve()
    }, i * 1000);
})
for (var i = 0; i < 5; i++) {
    tasks.push(out(i))
}
Promise.all(tasks).then(() => {
    setTimeout(function () {
        console.log(Date.now(), i);
    }, 1000);
})
//---------------async await---------
// 模拟其他语言中的 sleep，实际上可以是任何异步操作
const sleep = (timeountMS) => new Promise((resolve, reject) => {
    setTimeout(resolve, timeountMS);
});
(async ()=>{
    for (var i = 0; i < 5; i++) {
        await sleep(1000)
        console.log(Date.now(), i)
    }
    await sleep(1000);
    console.log(Date.now(), i)
})()





