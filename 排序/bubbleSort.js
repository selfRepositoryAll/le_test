/*function bubbleSort(ary) {
    for (var i = 0; i < ary.length - 1; i++) {
        //这个j 一定回从0开始
        for (var j = 0; j < ary.length - 1 - i; j++) {
            if (ary[j] > ary[j + 1]) {
                var temp = null;
                temp = ary[j];
                ary[j] = ary[j + 1];
                ary[j + 1] = temp;
            }
        }
    }
    return ary;
}
var ary = [12, 45, 6, 2, 45];
console.log(bubbleSort(ary))*/














const bubbleSort=(ary)=>{
    console.log(ary)
    for(let i=0;i<ary.length-1;i++){
        //这个循环就是为了能够循环没有其他作用
        for(let j=0;j<ary.length-1-i;j++){
            if(ary[j]>ary[j+1]){
                let temp=null;
                temp=ary[j+1]
                ary[j+1]=ary[j]
                ary[j]=temp
            }
        }
    }
    return ary
}
// 冒泡搞定
const ary=[11,34,3,5,6]
console.log(bubbleSort(ary))














const quickSort=(ary)=>{
    if(ary.length<=1){
        return ary
    }
    var point =Math.round(ary.length/2)
    var pointValue=ary.splice(point,1)[0];
    var left=[];
    var right=[]
    for(var i=0;i<ary.length;i++){
        var cur=ary[i]
        if(cur>pointValue){
            right.push(cur)
        }else {
            left.push(cur)
        }
    }
    return quickSort(left).concat([pointValue],quickSort(right))
}
console.log(quickSort(ary))
































