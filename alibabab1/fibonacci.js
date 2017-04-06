/**
 *@desc: fibonacci
 *@param: count {Number}
 *@return: result {Number} 第count个fibonacci值，计数从0开始
 fibonacci数列为：[1, 1, 2, 3, 5, 8, 13, 21, 34 …]
 则getNthFibonacci(0)返回值为1
 则getNthFibonacci(4)返回值为5
 */
function getNthFibonacci(count) {
    var ary=[1,1]
    var i=1
    while (ary.length<=count){
        var res=ary[i]+ary[i-1]
        ary.push(res)
        i++
    }
    return ary[count]

}
console.log(getNthFibonacci(5))
//var ary=[1, 1, 2, 3, 5, 8, 13, 21, 34]; //
