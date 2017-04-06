/*
//统计出现次数最多的单词(可能是多个)，及出现多少次
var str='abcAAAABBBB';
var re=/[a-z]/gi;
var obj={};
str.replace(re,function(){
    var cur=arguments[0].toLowerCase();//拿到每个单词的小写；
    if(obj[cur]){//给控对象赋值：把单词当作属性名，出现次数当作属性值；
        obj[cur]++;
    }else{
        obj[cur]=1;
    }
})
console.log(obj)
var max=0;
var ary=[];//Object {a: 5, b: 5, c: 1}
for(var k in obj){
    if(obj[k]>max){
        max=obj[k];
    }
}
for(var k in obj){//对象中，谁的属性值等于以上我们求出的最大值；那么谁的属性名就是我们要找的；
    if(obj[k]==max){
        ary.push(k)
    }
}
console.log(max)
console.log(ary)
























// 单利模式 构造函数 工厂 原型模式 观察者模式
var fn=(function () {

})();





*/








var string='aaaaaccdddDD'
var reg=/[a-z]/gi
obj={}
string.replace(reg,function () {
    var count=arguments[0].toLocaleLowerCase()
    if(obj[count]){
        obj[count]++
    }else {
        obj[count]=1// 0+0 是不对的
    }
})
console.log(obj)
var max=0;
for(var k in obj){
    if(obj[k]>=max){
        max=obj[k]
    }
}
console.log('max',max)
var ary=[]
for(var k in obj){
    if(max==obj[k]){
        ary.push(k)
    }
}
console.log('ary',ary)
console.log(ary.join(' '))


