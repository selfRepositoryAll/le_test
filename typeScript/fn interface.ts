interface FnShape{
    (str:string,num:number):boolean
}
//牛气  设计函数的时候必须这样
let fn:FnShape
fn=function (str,num) {
    console.log('str',str)
    console.log('num',num)
    return false
}
fn('x',2)