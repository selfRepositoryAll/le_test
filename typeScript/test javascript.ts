/* 目的是test private  */
class A{
    private name:string
    constructor(message:string){
        this.name=message
    }
    fn(){
        return `xxxxx  ${this.name}`
    }
}
var x=new A('XXXXXXXXX')
console.log(x.fn())//
console.dir(x)