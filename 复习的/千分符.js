var str = '1000000000';
var reg=/^([1-9]\d{0,2})((?:\d{3})+)$/;
var str1=str.replace(reg,function(){
    return RegExp.$1+','+RegExp.$2.match(/\d{3}/g)
})
console.log(str1)




var reg=/^([1-9]\d{0,2})((?:\d{3})+)$/


var str = '100000000000000';
    //用数组的方法？ 第一字符传是可以循环的  倒叙是非常的好的，因为从后面去肯定是3位的取
    var newStr = '';
    /*var count=0*/
    for (var i = str.length-1; i >= 0; i--) {
        if (count % 3 == 0 && count != 0) {
            newStr += ','
        }
        newStr += str.substr(i, 1);
        count++
    }
    console.log(newStr)
    //因为字符传是无法反转的所以我们才需要装成数组
    console.log(newStr.split('').reverse().join(''))