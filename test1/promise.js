const load=()=>{
    return new Promise((resolve)=>{
        resolve('xxx')
    })
}
var a=new Promise((resolve)=>{
    load().then(resolve)
});
a.then((data)=>{
    console.log(data)
})
