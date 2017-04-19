// 处理url
var url='http://test.sense.letv.cn/#/scene?tags=type-doc%2Cowner-yangchongduo&_k=3zq6w8';
var obj={};
var reg=/([^?#&=]+)=([^?#&=]+)/g
url.replace(reg,function () {
    obj[arguments[0]]=arguments[1]
});
console.log(obj);
//reg 的处理;
// 千分符