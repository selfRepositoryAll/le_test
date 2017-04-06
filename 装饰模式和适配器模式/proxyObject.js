// 对类的校验
// 通过校验器和主逻辑的分离
// 校验器  主要业务逻辑


function createValidator(target, validator) {
    return new Proxy(target, {
        _validator: validator,
        set(target, key, value, proxy) {
            if (target.hasOwnProperty(key)) {
                let validator = this._validator[key];
                if (!!validator(value)) {
                    //console.log('xxxx')
                    return Reflect.set(target, key, value, proxy);
                } else {
                    throw Error(`Cannot set ${key} to ${value}. Invalid.`);
                }
            } else {
                throw Error(`${key} is not a valid property`)
            }
        }
    });
}
const personValidators = {
    name(val) {
        return typeof val === 'string';
    },
    age(val) {
        return typeof age === 'number' && age > 18;
    }
};
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        return createValidator(this, personValidators);
    }
}
const bill = new Person('Bill', 25);
bill.name='xxx'
bill.age = 15
// 以下操作都会报错
// bill.name = 0;
// bill.age = 'Bill';
// bill.age = 15;