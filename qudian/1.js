var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
console.log(bar)
console.log(foo)
{
    n:1;
    x:{n:2}
}