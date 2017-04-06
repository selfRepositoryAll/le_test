interface SquareConfig {
    color?: string;
    width?: number;
    [props:string]:any//请查看下面尽管没有这个属性也是可以的 不过我感觉这个意义不大
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        // Error: Property 'clor' does not exist on type 'SquareConfig'
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySquare = createSquare({colorr: "black"});
//在没有 [props:string]:any 就行类型断言就可以了 告诉typeScript 我们已经知道你在做什么
let mySuqer=createSquare({coo:'block'} as SquareConfig)

