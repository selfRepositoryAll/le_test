const sum = (...arg) => {
    let total = null;
    arg.forEach((item) => {
        if (Number(item)) {
            total += Number(item)
        }
    });
    return total
}
console.log(sum(2, 3, 4, 'xx','33'))