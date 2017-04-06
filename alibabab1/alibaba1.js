// 下面输出结果是 [1,2,3,4,]
function foo(x) {
	// body...
	console.log(arguments)
	return x
}
foo(1, 2, 3, 4)

function foo(x) {
	console.log(arguments)
		// body...
	return x
}(1, 2, 3, 5)
 ! function(x) {
	console.log(arguments) //现在都是 类数组 不是正真的数组
	return x
}(1, 2, 3, 4)



function foo() {
	bar.apply(null, arguments)
}
function bar(x) {
	console.log(arguments)
}
foo(1, 2, 3)