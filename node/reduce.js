// const ary = [1, 4, 5, 6, 7];
// var data=ary.reduce((pre,curr)=>{
//     console.log(pre)
//     return pre
// },Promise.resolve(100))
// // var str=[ '<!DOCTYPE html>\r\n<html lang="en">\r\n<head>\r\n    <meta charset="UTF-8">\r\n    <title></title>\r\n</head>\r\n<body>\r\n<img src="images/banner_01.png" alt="">\r\n</body>\r\n</html>' ]
// //
// // console.log(str.join(""))
// var fn=()=>{
//     return Promise.resolve('xxx')
// }
// fn().then((data)=>{
//     console.log(data)
// })
var ary = [];
var fn = () => {
    return ary.reduce((pre, nextPre) => {
        console.log(pre)
    }, Promise.resolve(100))
};
console.log(fn())