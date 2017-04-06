function insertSort(ary) {
    var newAry = [];
    newAry.push(ary[0]);
    for (var i = 1; i < ary.length; i++) {//这边为什么是1;尽管ary的数组没变，但是我们假装拿过来了，假如从0开始newAry整体的长度会增加一个
        var cur = ary[i];
        for (var j = newAry.length - 1; j >= 0;) {// 现在拿出右手中的每个值
            if (cur < newAry[j]) {
                j--;//只有比他小才能继续往前比 j--;
                if (j === -1) {//当和索引[0]还是执行j--；等于-1；直接放在最前面就行；
                    newAry.unshift(cur);
                }
            } else {// 那就放在最后一个
                newAry.splice(j + 1, 0, cur);
                break;//j=-1;break跳出本层循环，外面的循环继续进行;
            }
        }
    }
    return newAry
}
var ary = [12, 45, 6, 2, 45];
console.log(insertSort(ary))


function insertSort(ary) {
    var newAry = []
    newAry.push(ary[0])
    for (var i = 0; i < ary.length; i++) {
        var cur = ary[i]
        for (var j = newAry.length - 1; j >= 0;) {
            if (cur < newAry[j]) {//小的在前面
                j--
                if (j === -1) {
                    newAry.unshift(cur)
                } else {
                    // 后面这个数截取的个数
                    newAry.splice(newAry.length, 0, cur)
                    break
                }
            }
        }
    }
}


// 冒泡 快速 插入
function bubbleSort(ary) {
    for (var i = 0; i < ary.length - 1; i++) {
        for (var j = 0; j < ary.length - 1 - i; j++) {
            if (ary[j] > ary[j + 1]) {
                var temp = null
                temp = ary[j]
                ary[j] = ary[j + 1]
                ary[j + 1] = temp
            }
        }
    }
}
function quickSort(ary) {
    if(ary.length==1){
        return ary
    }
    var pointIndex=Math.floor(ary.length/2)
    var pointValue=ary.splice(pointIndex,1)[0]
    var left=[]
    var right=[]
    for(var i=0;i<ary.length;i++){
        var cur =ary[i]
        if(cur<pointValue){
            left.push(cur)
        }else {
            right.push(cur)
        }
    }
    return quickSort(left).concat([pointValue],quickSort(right))
}





















function insertSort(ary) {
    var newAry=[]
    newAry.push(ary[0])
    for(var i=0;i<ary.length;i++){
        var cur =ary[i]
        for(var j=newAry.length-1;j>=0;){
            if(newAry[j]>cur){
                j--
                if(j==-1){
                    newAry.unshift(cur)
                }
            }else {
                newAry.splice(newAry.length,0,cur)
                break
            }
        }
    }
    return newAry
}































