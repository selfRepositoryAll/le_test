var isNumber = function isNumber(value){
    if(typeof value === 'string'){
        value = Number(value);
    }
    return typeof value === 'number' && isFinite(value);
}

var add = function(x, y){
    var r1, r2, m;
    try{
        r1 = x.toString().split(".")[1].length;
    }catch(e){
        r1 = 0;
    }
    try{
        r2 = y.toString().split(".")[1].length;
    }catch(e){
        r2 = 0;
    }
    m = Math.pow(10, Math.max(r1, r2));
    return (x * m + y * m) / m;
}
function sum(){
    var i,a=0;
    for(i=0;i<arguments.length;i++){
        if(isNumber(arguments[i])){
            a = add(a, Number(arguments[i]));
        }
    }
    return a;
}
console.log(sum(5, null, -5));
console.log(sum('1.0', false, 1, true, 1, 'A', 1, 'B', 1, 'C', 1, 'D', 1, 'E', 1, 'F', 1, 'G', 1));
console.log(sum(0.1,0.2));