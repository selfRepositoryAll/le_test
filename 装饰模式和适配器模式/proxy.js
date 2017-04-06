const data = {
  name: 'xxx',
  age: 44
};
//代理后面更的是对象  拦击功能
const proxy = new Proxy(data, {
  get(target, key, value) {
    console.log('get');
    return value
    // console.log('target', target);
    // console.log('key', key);
    // console.log('value', value);
  },
  set(target, key, value) {
    console.log('target', target);
    console.log('key', key);
    console.log('value', value);
    if (typeof value !== Number) {
      console.log('错误了')
    }
  }
})
// 这就是代理模式的好处 两个对象 分别有set get 等等
console.log('name', proxy.age);
proxy.name = '222';
// x现在只是对对象做了 代理我们可以