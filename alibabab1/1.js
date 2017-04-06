//填写内容让下面代码支持a.name = “name1”; b.name = “name2”;
/*
function Obj(name){
    var value={name}
    return value
}
Obj.prototype.name= "name2";
var a = Obj("name1");
var b = new Obj;
console.log(a.name)
console.log(b.name)// 有静态属性 但是bab
*/


///
//填写内容让下面代码支持a.name = “name1”; b.name = “name2”;
function Obj(name){
    var value={name}
    return value
}
Obj.prototype.fff= function () {
    return 'name2'
};
var a = Obj("name1");
var b = new Obj();
console.log(a.name)
console.log(b.fff())