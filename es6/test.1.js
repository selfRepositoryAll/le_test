

var func = function (params) {
  return new Promise((resolve) => {
    setTimeout(function (params) {
      resolve('xxxxx')
    }, 5000);
  })
}
for (let i = 0; i < 10; i++) {
  console.log('i', i);
  (async function (params) {
   var res= await func().then((res)=>{
     console.log('res',res);
     return res
   })
    console.log('outerRes',res);
    console.log('--------------');
    console.log('0000000000000');
  })()
}
