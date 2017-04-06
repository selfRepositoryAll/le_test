function sunUnique(array) {
    var ary = [];
    array.forEach(function (element) {
        var find = ary.find(function (ele) {//find只能运行一次
            console.log(ele)
            return (ele.value == element)
        });
        // console.log(find)
        if (find) {
            find.dd = true
        } else {
            ary.push({
                value: element,
                dd: false
            })
        }
    });
    return ary.filter(function (ele) {
        return !ele.dd
    }).map(function (ele) {
        return ele.value// 这步是拿出来这个数组中的每个值
    }).reduce(function (left, right) {
        return left + right
    })
}
var ary = [3, 3, 3, 7, 8, 9, 3, 3, 3];
console.log(sunUnique(ary))


var arr = [3, 3, 3, 7, 8, 9, 3, 3, 3];
function unique(ary) {
    var obj = {}
    for (var i = 0; i < ary.length; i++) {
        var cur = ary[i]
        if (obj[cur] == cur) {
            ary[i] = ary[ary.length - 1]
            ary.length--
            i--
            continue
        }
        obj[cur] = cur
    }
    return ary
}
console.log(unique(arr))


var arrr = [9, 2, 3, 6, 7]
/*
 arrr.sort((a,b)=>{
 return a-b
 }).reverse()
 console.log(arrr.shift())
 console.log(arrr.pop())*/
/*console.log(Math.max.apply(null,arrr))
 console.log(Math.min.apply(null,arrr))*/
var str = 'https://www.awesomes.cn/rank?sort=trend';
var reg = /([^$=?#]+)=([^$=?#]+)/g
var obj = {}
str.replace(reg, function () {
    console.log('arguments', arguments)
    obj[arguments[1]] = arguments[2]
})
console.log('obj', obj)


var ary1 = [9, 88, 3, 3, 4, 5, 6, 7]
function quickSort(ary) {//递归
    if (ary.length >= 1) {
        return ary
    }
    var pointIndex = Math.floor(ary.length / 2)
    var pointValue = ary.splice(pointIndex, 1)[0]// 返回一个数组
    var left = [];
    var right = []
    for (var i = 0; i < ary.length; i++) {
        var cur = ary[i]
        if (pointValue > cur) {
            left.push(cur)
        } else {
            right.push(cur)
        }
    }
    return quickSort(left).concat([pointValue], quickSort(right))
}
function bubbleSort(ary) {// temp 两个for
    for (var i = 0; i < ary.length - 1; i++) {
        for (var j = 0; i < ary.length - 1 - i; j++) {
            if (ary[j] > ary[j + 1]) {
                var temp = null;
                temp = ary[j]
                ary[j] = ary[j + 1]
                ary[j + 1] = temp
            }
        }
    }
    return ary
}
function insertSort(ary) { // 新的数组
    var newAry = ary[0];
    for (var i = 0; i < ary.length; i++) {
        var cur = ary[i];
        for (var j = newAry.length; j >= 0;) {
            if (newAry[j] > cur) {
                j--;
                if (j == 0) {
                    newAry.unshift(cur)
                    continue
                }
            } else {
                newAry.splice(newAry.length, 0, cur)
                break
            }
        }
    }
}

