var str=`   <img src="./sunflower.png" alt="">
    <img src="./sunflower.png" alt="">
</body>

</html>
<script src='./index.js'>
</script>
`
var filename='index.js'
var file='http://js.letvcdn.com/lc06_VisionMember/201703/08/17/11/index.js'
var srcRef=new RegExp(`src=[\'\"]?([^\'\"]*)${filename}[\'\"]?`,'ig')
//var srcRegJS = /src=[\'\"]?([^\'\"]*)\.js[\'\"]?/ig;
console.log(srcRef)
var data=str.replace(srcRef,function () {
    console.log(arguments);
    return `src="${file}"`
});
console.log(data)



//var srcRef= new RegExp(`href=[\"\']([^\'\"]*)${filename}[\"\']`,'ig')
//var srcRef=new RegExp(`src="[\'\"]?([^\'\"]*)${filename}[\'\"]?"`,'ig')
//var back_reg = /url\(['"]([^)]+)['"]\)/g
// var  back_reg=new RegExp(`url\([\'\"]?([^\'\"]+)${filename}[\'\"]\)`,'g')
// console.log(back_reg)
// var back_reg= /url\(([^\)]+)\)/gi
// var  back_reg=new RegExp(`url\(([^\)]+${filename})\)`,'g')
//var srcReg = /src=([\'\"]?([^\'\"]*)[\'\"])?/ig;