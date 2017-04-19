//1: 对象或者是子执行函数
var utils=(function () {
    function data() {
        console.log('data')
    }
    return{
        data:data
    }
})();
// 模块化开发
//2: 自治性函数  这个不是 如果自治行函数 闭包如果被外面的占用就不好了
~function () {
   // 不好 
}();
// es6 出的{} 块级作用域 是非常好的
{
    let name='xxx'; // 无法进行预解释 不能重新赋值 然后在加上会计作用域
    let name='xxxx'
}
console.log(name);
// let
// let 声明的作用域是不允许