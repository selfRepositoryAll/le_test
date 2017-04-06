
// let obj = {  
//     getGiantFile: function(fileId) {
//         console.log('----------------')
//         console.log(fileId)

//      }
// };
// obj2 = new Proxy(obj, {  
//     get(target, key, proxy) {
//         console.log(key)
//      //   console.log(proxy)
//         // return function(...args) {
//         //     const id = args[0];
//         //     let isEnroute = checkEnroute(id);
//         //     let isDownloading = checkStatus(id);      
//         //     let cached = getCached(id);
//         //     if (isEnroute || isDownloading) {
//         //         return false;
//         //     }
//         //     if (cached) {
//         //         return cached;
//         //     }
//         //     return Reflect.apply(target[key], target, args);
//         // }
//     }
// });

// obj.getGiantFile(100)

var test = {

}
var obj = new Proxy({}, {
  get: function (target, key, receiver) {
    console.log(`getting ${key}!`);
    return Reflect.get(target, key, receiver);
  },
  set: function (target, key, value, receiver) {
    console.log(target)
    console.log(`setting ${key}!`);
    return Reflect.set(target, key, value, receiver);
  }
});
obj.count = 1
//webpack ftp gulp;

