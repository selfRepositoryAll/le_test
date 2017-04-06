var str='https://www.baidu.com/s?wd=babel-node&rsv_spt=1&rsv_iqid=0xe1266cd200018ea7&issp=1&f=8&rsv_bp=0&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=1&rsv_sug3=2&rsv_sug1=1&rsv_sug7=001&rsv_n=2'
var reg=/([^?=$]+)=([^?=$]+)/g// 不能开头和结尾
var obj={}
str.replace(reg,function () {
    obj[arguments[1]]=arguments[2]
})
console.log(obj)
var url = 'http://www1.w3cfuns.com/tools.php?mod=regex';
String.prototype.queryURLParameter = function () {
    var reg = /([^$=?]+)=([^$=?]+)/g
    var obj = {};
    this.replace(reg, function () {
        obj[arguments[1]] = arguments[2]
    })
    return obj
};
console.log(url.queryURLParameter())











var ary=[]























