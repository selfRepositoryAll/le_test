// then的第二个参数和 catch 什么区别
const fn = () => {
  return new Promise((resolve, reject) => {
    const count = Math.round(Math.random() + 1)
    console.log('count', count);
    if (count == 1) {
      reject(count)
    } else {
      resolve(count)
    }
  })
}
fn().then((resolve) => {
  console.log(resolve);
},(reject)=>{
  console.log('---------');
}).catch((reject) => {
  console.log(reject);
})