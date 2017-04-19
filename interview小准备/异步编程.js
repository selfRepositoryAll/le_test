//异步编程 输出12345
//1:这是弊端
// for (var i = 0; i < 5; i++) {
//     setTimeout(function() {
//         console.log(new Date, i);
//     }, 1000);
// }

// console.log(new Date, i);
//2: 闭包的概念
// for(var i=0;i<5;i++){
//     (function (i) {
//         setTimeout(()=>{
//             console.log(i)
//         },1000)
//     })(i)
// }
//3：// 两个东西 i是全局的变量 let 的i 每次循环都会重新产生一个变量 每次产生块级的作用域就
// for(let i=0;i<5;i++){
//     setTimeout(()=>{
//        console.log(i)
//     },1000)
// };
//4 使用promise.all去执行
// var ary=[];
// const promise=(i)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(i)
//             resolve()
//         })
//     })
// }
// for(var i=0;i<5;i++){
//     ary.push(promise(i))
// }
// Promise.all(ary).then(()=>{
//     console.log('xxxxxxxxxxx')
// });
// 终极处理方案 async await
const promise=(i)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(i)
            resolve()
        },1000*i)
    })
}
(async ()=>{
    for(var i=0;i<5;i++){
        await promise(i)
    }
    console.log('------------------')
})()