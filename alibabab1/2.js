//输出对象中值大于2的key的数组
var data = {a: 1, b: 2, c: 3, d: 4};
var date=Object.keys(data).filter(function (x) {
    return data[x]>2;
})
console.log(date)
//期待输出：[“c”,”d”]