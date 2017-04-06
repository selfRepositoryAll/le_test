为什么node增加中间层
多少并发量用java 比较好，
多少用node中间层比较好，
什么需求，什么场景下，增加这个node中间层，你们怎么决定增加这个中间层
有具体的实际数据说明吗？

做的平台的数据是怎么来的，后台从大数据那边拿过来然后做的处理；
最终的数据是怎么来的;

第三方直播平台 和音频库平台不好用，对于谁不好用，都有什么问题？怎么决定改造的；


具体题目:
1: 请尽可能多的说出标签语义化的？
a标签是功能性的标签  有一些自定义的样式，可以少写css
2:css题目:
有一个div   1)在内容高度不足的一屏幕的情况下 显示在屏幕的右下方
            2) 在内容超出一屏幕的情况下 ，显示在内容的最下方
            提示定位肯定没错 使用内容的高度

3:class 继承的问题:
    写一个  A 类，有length 和len的属性 同时有一个方法 run 
     (请说明 this.run={} A.prototype.run={}的区别 )
    2:写一个B 拥有A的属性和方法，同时拥有speak的方法
    假如使用es6的extends 说出做了什么？

4:
var a=1;
function test() {// 现将私有变量赋值 然后进行预解释
    a=2;
    console.log(a)//2
    console.log(this.a)//1
    var a;
    console.log(a)//2
}
test()
// 5 这个题做对了
var a=0;
var b={
    a:1,
    b:2,
    c:{
        a:3,
        b:4,
        c:{
            a:5,
            b:6,
            c:function () {
                console.log(this.a)
            }
        }
    }
}
var f=b.c.c.c
b.c.c.c()
f()

6:
for(var i=0;i<10;i++){
    setTimeout(function () {
        console.log('i',i)
    })
}
//一共有几种处理方法
/*第一种*/
for(var i=0;i<10;i++){
    (function () {
        console.log(i)
    })(i)
}
/* 还有其他方法*/




扩展部分
react 源码是怎么实现的 diff算法的具体实现 
你说是同级 比较  那我的dom结构越深越好 平层就不好了？
vue的源码 你说是 Object.defineProperty()// set get具体做什么？ vue具体做了什么 

场景1:我们选用框架，一个常常的列表，一旦报错，页面能不能用？这都是我们需要考虑的问题

koa 为什么要用koa 你的初衷是什么 为什么不用express 和原生？
中间件的实现原理是什么
1: 重复的代码 例如cookie的赋值和 bodyparse 暂时就一个
next() 的作用是什么？
为什么所有的中间件是先进去 然后再反向出来的机制？

typeScript的除了增加函数的设计感之外还有什么？
es7和decorate的什么场景下会使用？






