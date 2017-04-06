const createValidator = (target, validate) => {
    return new Proxy(target, {
        _validator: validate,
        set(target, key, value){
            let validate=this._validator[key]
            if(!!validate(value)){
                return value
            }else {
                throw new Error(`Type is error`)
            }
        }
    })
}
const PersonValidate = {
    name(val){
        return typeof val == 'string'
    },
    age(val){
        return typeof val == 'number'
    }
}
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
        return createValidator(this, PersonValidate)
    }
}
const data=new Person('xxx',44)
data.age='222'

// 校验器和主逻辑  你可以无限扩展 personValidators 校验器的内容