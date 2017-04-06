for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i) // 这样申明是
    })
    // console.log('i', i)
}
// 因为每次循环只会在自己的块作用域里面 
for (var i = 0; i < 10; i++) {
    setTimeout(() => {//setTimeout 是异步的里面的this是window
        console.log(i)
    })
}