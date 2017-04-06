/*这种修饰 确实不错 本来这个 decorate 最好的使用场景就是日志  不过中间件也有这个功能 */
class Math {
    @log
    add(a, b) {
        return a + b;
    }

    @log
    mulit(a, b) {
        return a * b
    }
}

function log(target, name, descriptor) {
    var oldValue = descriptor.value;

    descriptor.value = function () {//name 是属性名 descriptor 是对象
        console.log(`Calling "${name}" with`, arguments);
        return oldValue.apply(null, arguments);
    };

    return descriptor;
}

const math = new Math();

// passed parameters should get logged now
math.add(2, 4);
math.mulit(2, 4)