// 数组的方法
const ary=new  Array('日','一','二','三','四','五','六')
//console.log(ary)
const day=new Date().getDay()
console.log(`今天是星期${ary[day]}`)
// string
var string='今天是星期';
var day1='日一二三四五六'.charAt(new Date().getDay())
console.log(`${string}${day1}`)