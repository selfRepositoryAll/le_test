const str='xxxx';
console.log(str.length);
// console.log(Buffer.from(str));
console.log('byteLength',Buffer.byteLength(str,'utf8'));
const arr= new Uint16Array(2)// 数组类型的buffer
arr[0]=5000;
arr[1]=4000
console.log(arr.buffer);
const buffer=Buffer.from(arr.buffer)
console.log('buffer',buffer);
arr[0]=9000;
console.log('buffer',buffer);// 确实可以改变


const arrayBuffer=new ArrayBuffer(10)
console.log('ArrayBuffer',Buffer.from(arrayBuffer,0,6).length);
const ab = new ArrayBuffer(10);
const buf = Buffer.from(ab, 0, 2);

// 输出: 2
console.log(buf.length);
const data=new Uint16Array(7);//这样是产生7位的数组buffer
const data1=new BufferArray('xxxxxxxxxxxxxxxxxxxxxx')
