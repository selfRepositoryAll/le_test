var data={
    name:'xxx'
}
var proxy=new Proxy(data,{
    set(target,key,value){
        if(typeof value =='string'){
            console.log('xxx')
            return Reflect.set(target,key,value)
        }
    }
});
proxy.name='ccccc';
