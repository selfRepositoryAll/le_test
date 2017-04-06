var string = 'yangchongduo'
console.log(string.split('').reverse().join(''))
var ary = []// 不知道要运行多少次就使用while
while (ary.length < 4) {
    var res = Math.round(Math.random() * (60) + 2)
    console.log(res)
    if (ary.indexOf(res) == -1) {
        ary.push(res)
    }
}
console.log(ary)