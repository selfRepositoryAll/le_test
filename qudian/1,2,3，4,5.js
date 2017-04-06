// 最简单直接的方法  闭包
// for (var i=0;i<5;i++){
//     ~function (j) {
//         setTimeout(()=>{
//             console.log(j)
//         })
//     }(i)
// }
// 2:块级作用域
// for(let i=0;i<5;i++){
//     console.log(i)
// }
//3: promise.all 多个异步顺次执行
// var tasks=[]
// var sleep=(i)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(i)
//             resolve()
//         })
//     })
// }
// for(var i=0;i<5;i++){
//     tasks.push(sleep(i))
// }
// Promise.all(tasks).then(()=>{
//     console.log('xxxxxxxx')
// });
// async await
// const sleep=(i)=>{
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log(i)
//             res()
//         })
//     })
// }
// ( async function () {
//     for(var i=0;i<5;i++){
//          await sleep(i)
//     }
//     console.log('xxxxxxx')
// })()
// 利用promise 读取文件和写文件
const fs=require('fs')
// var promise=new Promise((resolve,reject)=>{
//     fs.readFile('./ycd.txt','utf-8',(err,data)=>{
//         console.log('data',data);
//         err?reject(err):null;
//         resolve(data)
//     })
// })
// promise.then((data)=>{
//     fs.writeFile('./ddd.txt',data)
// });
// 利用async await 
var readFile=()=>{
    return new Promise((resolve,reject)=>{
        fs.readFile('./y.txt','utf-8',(err,data)=>{
            err?reject(err):resolve(data)
        })
    })
}
var writeFile=(data)=>{
    return new Promise((resolve,reject)=>{
        fs.writeFile('./ddddd.txt',data,(err)=>{
            err?reject(err):resolve()
        })
    })
}
(async ()=>{
    const data= await readFile().then((data)=>{
        console.log(data)
        return `${data}xxxxxxxxxxxxxxxxxxxxxxx`
    },(err)=>{
        //throw new Error(err.Error)
        console.log(err)
       console.log(err.path)
    });
    await writeFile(data)
    console.log('---------------');
})()








