const fs=require('fs')
const load=(path)=>{
    return new Promise((resolve,reject)=>{
        fs.readFile(path,'utf-8',(err,data)=>{
            err?reject(err):resolve(data)
        })
    })
}
const promise1=load('./text.txt')
const promise2=load('./text1.txt');
Promise.all([promise1,promise2]).then((array)=>{
    console.log('array',array);
})