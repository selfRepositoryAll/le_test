/*var xhr=new XMLHttpRequest()
 xhr.open('type','url',false)
 xhr.onreadystatechange=function () {
 if(xhr.readyState===400&&/^2\d{2}$/.test(xhr.status)){

 }
 }
 xhr.send()// post请求发送的东西
 // 这是标准的浏览器  IE下呢
 ActiveXObject //有参数
 addEventListener()
 removeEventListener()
 attachEvent('on'+type)// 绑定点击事件 可以重复 事件池 里面只有一个就可以了
 detachEvent()//参数的不同
 // this有五种情况
 ~function () {
 }()*/// 永远是window
/*函数的执行
 fn没有任何执行体的时候用   window
 有执行体就是执行体
 事件的绑定  就是谁


 继承  原型继承 和call  apply bind 集成*/
// 数组去重
var ary = [3, 4, 5, 5, 5]
var obj = {}
for (var i = 0; i < ary.length; i++) {
    var cur = ary[i]
    if(obj[cur]==cur){
        // 删除此项
        ary[i]=ary[ary.length-1]
        ary.length--
        i--
        continue
    }
    obj[cur]=cur
}
console.log('ary',ary)// 这是去重
// 插入排序
function innerSort(ary) {
    var newAry=ary[0]
    for(var i=0;i<ary.length;i++ ){
        var cur=ary[i]
        for(var j=newAry.length-1;j>=0;){
            if(cur<newAry[j]){
                j--;
                if(j==0){
                    newAry.unshift(cur)
                    continue
                }
            }else {
                newAry.splice(newAry.length,0,cur)
                break
            }
        }
    }
    return newAry
}
//
function insertSort(ary) { // 新的数组
    var newAry = [];
    newAry.push(ary[0])
    for (var i = 1; i < ary.length; i++) {// 这边要从1 开始因为第一位已经没有了
        var cur = ary[i];
        for (var j = newAry.length-1; j >= 0;) {
            if (newAry[j] > cur) {
                j--;
                if (j == -1) {
                    newAry.unshift(cur)
                }
            } else {
                newAry.splice(j+1, 0, cur)
                break
            }
        }
    }
    return newAry
}
var ary=[11,22,3,4,5,6]
console.log(insertSort(ary))

/*

function  insertSort(ary){
    var newAry=[];
    newAry.push(ary[0]);
    for(var i=1;i<ary.length;i++){//这边为什么是1;尽管ary的数组没变，但是我们假装拿过来了，假如从0开始newAry整体的长度会增加一个
        var cur=ary[i];
        for(var j=newAry.length-1;j>=0;){
            if(cur<newAry[j]){
                j--;//只有比他小才能继续往前比 j--;
                if(j===-1){//当和索引[0]还是执行j--；等于-1；直接放在最前面就行；
                    newAry.unshift(cur);
                }
            }else{
                newAry.splice(j+1,0,cur);
                break;//j=-1;break跳出本层循环，外面的循环继续进行;
            }
        }
    }
    return newAry
}
var ary=[12,45,6,2,45];
console.log(insertSort(ary))
*/
