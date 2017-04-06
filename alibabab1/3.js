//在空白处填入适当的代码使输出结果成立：
function showMoney( ) {
    return this.money
};

var personA = new Object;
var personB = new Object;

personA.money= "100";
personB.money= "150";

personA.showMoney= showMoney;
personB.showMoney= showMoney;


//输出结果：
console.log(personA.showMoney( )); //"100"
console.log(personB.showMoney( )); //"150"