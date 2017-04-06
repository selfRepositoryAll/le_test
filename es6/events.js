const EventEmitter = require('events');

let emitter = new EventEmitter();
// 注册的不是匿名函数 就可以
emitter.on('myEvent', function sth () {
  emitter.on('myEvent', sth);
  console.log('hi');
});

emitter.emit('myEvent');
//------------- 匿名函数 无法处理 所以会一直执行下去 知道 内存爆掉
const EventEmitter = require('events');

let emitter = new EventEmitter();

emitter.on('myEvent', () => {
  console.log('hi');
  emitter.emit('myEvent');
});

emitter.emit('myEvent')