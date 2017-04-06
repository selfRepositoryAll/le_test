// var ary=[11,33,1,2,3,3,3,3];
// var obj={};
// for(var i=0;i<ary.length;i++){
//     var cur=ary[i];
//     if(obj[cur]==cur){//将数组这个直接替换
//         ary[i]=ary[ary.length-1];
//         ary.length--;
//         i--;
//         continue;
//     }
//     // 如果这个对象没有 就赋值
//     obj[cur]=cur;
// }
// console.log(ary)















var ary=[3,4,4,4,4];
var obj={};
for(var i=0;i<ary.length;i++){
    var cur=ary[i]
    if(obj[cur]==cur){
        ary[i]=ary[ary.length-1];
        ary.length--;
        i--;// 数组塌陷的问题
        continue
    }
    obj[cur]=cur
}
console.log(ary)













































function unqiue(ary) {
    var obj={}
    for(var i=0;i<ary.length;i++){
        var cur =ary[i]
        if(obj[cur]==cur){
            ary[i]=ary[ary.length-1]
            ary.length--;
            i--;
            continue // 结束本次循环 继续下一次循环
        }
        obj[cur]=cur
    }
    return ary
}
var ary=[5,6,6,6]
console.log(unqiue(ary))



















function unique(ary) {
    var obj={}
    for(var i=0;i<ary.length;i++){
        var cur=ary[i]
        if(obj[cur]==cur){
            ary[ary.length-1]=ary[i]
            ary.length--
            i--;//会造成数组塌陷的问题 所以需要上去才可以
            continue
        }
        obj[cur]=cur
    }
    return ary
}
function bubbleSort(ary) {
    for(var i=0;i<ary.length-1;i++){
        for(var j=0;j<ary.length-1-i;j++){
            if(ary[j]>ary[j+1]){
                var temp=null;
                temp=ary[j]
                ary[j]=ary[j+1]
                ary[j+1]=temp
            }
        }
    }
    return ary
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
        var cur=ary[i]
        if(cur>pointValue){
            right.push(cur)
        }else {
            left.push(cur)
        }
    }
    return quickSort(left).concat([pointIndex],quickSort(right))
}
function insertSort(ary) {
    var newAry=ary[0]
    for(var i=0;i<ary.length-1;i++){
        var cur=ary[i]
        for(var j=newAry.length;i>=0;){
            if(cur>newAry[j]){
                newAry.splice(newAry.length,0,cur)
                break
            }else {
                j--
                if(j==-1){
                    newAry.unshift(cur)
                    continue
                }
            }
        }
    }
    return newAry
}
//
function sum() {
    var total=null;//以后可能赋值
    for(var i=0;i<arguments.length;i++){
        var cur=arguments[i]
        if(!isNaN(cur)){// nan有隐式转化功能 就不是就是true 是NAN就不能想加
            total+=Number(cur)
        }
    }
    return total
}
console.log(sum(3,4,66,'77','xxxx'))











