var ary=[3,4,5,6,7,8]
console.log(ary.splice(4,1));// 这不是纯函数
ary.splice(ary.length,0,99)
console.log(ary)
const arr=[3,4,5,6,7,8]
arr.slice(3,5)// 是索引和string一样的性质
console.log(arr.slice(3,5))
console.log('----')
console.log(arr.toString().split(',').map((item)=>{
    return Number(item)
}))

console.log(arr.reverse((a,b)=>{
    return a-b
}))
const string='yangchongduo'
console.log(string.indexOf('o'))
console.log(string.lastIndexOf('o'))



