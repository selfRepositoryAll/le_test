let name='xx';
for(let i=0;i<10;i++){
    setTimeout(()=>{
        console.log(i)
    });
    console.log(name)
};
// 利用promise.all[] 处理 或者使用async await最好
