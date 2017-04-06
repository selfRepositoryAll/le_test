//promise.all 直接是resolve('data')
// var fn = () => {
//     return new Promise((resolve, reject) => {
//         resolve('xxxx')
//     })
// };
// var fn1 = () => {
//     return new Promise((resolve, reject) => {
//         resolve('yyyyyyy')
//     })
// };
// var ary = [fn(), fn1()]
// Promise.all(ary).then((data) => {
//     console.log(data)
// })

// 2:return 放在[]里面的还是promise 但是data 是通过then里面的return 返回的
var loader=function () {
    console.log('cccccccccccccc')
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('----------------');
            resolve('xxxxxxxxxxxxxxxxxxxxx')
        },1000)

    })
};
var data=loader().then((data)=>{
    console.log(data)
    return `${data}????????`
});
// console.log(data);
Promise.all([data]).then((data)=>{
    console.log(data)
})