// 过一段时间内存不足
// var ary = []
// while (true) {
//     ary.push(1)
// }
// 没有出现内容泄漏
// let arr = [];
// while (true) {
//     arr.push(); 
// }

// buffer
// let arr = [];
// while(true)
//   arr.push(new Buffer(1000));

var tasks = []
const out = (timeout) => new Promise((resolve, reject) => {
  setTimeout(resolve, timeout);
});
for (var i = 0; i < 5; i++) {
  tasks.push(out(i))
};
Promise.all().then(() => {

})









