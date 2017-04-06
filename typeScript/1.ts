let isDONE: boolean = false
let ary: number[] = [2, 3, 4]// 普通的方式
let arr: Array<number> = [2, 3, 4, 5]//数组泛型
let str: string = `i m ${isDONE}`
console.log(str)
//定义一个接口
/*interface name{
 age:boolean,
 ary:number[]
 }*/
// 元组 Tuple 就是一个 知道变量的类型和length的数组
let s: [number, string];
s = [6, 'x']//换成
//console.log(s[0].()) 可以知道方法
let strr:any='fs.createRead';
//类型断言
let lengthNumber:number=(<string>strr).length
console.log(lengthNumber)
