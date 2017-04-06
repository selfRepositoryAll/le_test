function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        // Error: Property 'clor' does not exist on type 'SquareConfig'
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ colorr: "black" });
//在没有 [props:string]:any 就行类型断言就可以了 告诉typeScript 我们已经知道你在做什么
var mySuqer = createSquare({ coo: 'block' });
