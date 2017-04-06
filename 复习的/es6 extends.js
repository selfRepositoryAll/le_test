class Person{
    //构造函数
    constructor(name){
        this.name = 'xxxxx';
        this.hobbies = {};
    }
    get hobby(){
        return Object.keys(this.hobbies).join(';');
    }
    set hobby(hobby){
        this.hobbies[hobby]= hobby;
    }
    //可以通过类来调用
    static add(a,b){
        return a+b;
    }
    getName(){
        console.log(this.name);
    }
}


class Teacher extends Person{
    constructor(name){
        super(name);
        console.log(name)
        this.age = 9;
    }
}
var teacher = new Teacher();
console.dir(teacher)
//console.log(teacher.name,teacher.age);