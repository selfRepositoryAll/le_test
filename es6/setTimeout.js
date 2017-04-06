// console.time('xxx');
// const ary = []
// for (let i = 0; i < 100000000; i++) {
//     ary.push('xxx')
// }
// console.timeEnd('xxx');
// process.nextTick(() => {
//     console.log('nextTick callback');
// })
// setImmediate(() => {
//     console.log('vvvvv');
// })
// setTimeout(function () {
//     console.time('');
//     const ary = []
//     for (let i = 0; i < 100000000; i++) {
//         ary.push('xxx')
//     }
//     console.log('nextTick xxxxxxxxx');
// }, 3000);

var set = new Set();
set.add(1);
set.add(2)
for ( let key of set.keys()) {
    console.log('key', key);
}

var items = new Set([1, 2, 3, 4, 5]);
var set=items.forEach((value, index)=>{
console.log('item',value);
console.log('index',index );
})
var set = new Set([...items].map((item)=>{
return item*2
}));
// var array = Array.from(items);
// console.log([...items]);
// console.log('array',array);