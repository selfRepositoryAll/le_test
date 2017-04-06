function printLable(lab:{label:string}){
    console.log(lab.label)
}
let myObj={size:10,label:'size 10 object'}
printLable(myObj)
//下面是接口的写法
interface labelString{
    label:string
}
function print(lab:labelString){
    console.log(lab.label)
}
print(myObj)