//删除给定数组中的第二项和第三项，并且在得到的新的数组中第一项后面添加一个新的值

var arr1 = ['a', 'b', 'c', 'd', 'e'];
var arr2 = arr1.splice(1, 2, 'newvalue')
console.log(arr2)
console.log(arr1)