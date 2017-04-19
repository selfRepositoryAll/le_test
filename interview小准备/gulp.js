//数组去重
var ary=[1,2,2,2,2];
var obj={}
for(var i=0;i<ary.length;i++){
    var item =ary[i];
    if(obj[item]==item){// 就是重复了删除
        ary.splice(i,1)// 删除就可以了
        i--;// 数组塌陷的问题
        continue
    }
    // 赋值就可以了
    obj[item]=item
}
console.log(ary);

