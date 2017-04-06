const url=require('url')
const http=require('http');
const reg='/\.(html|css|js)/i'
const app=http.createServer((req,res)=>{
    const objUrl=url.parse(req.url,true);
    const pathName=objUrl.pathname;
    const query=objUrl.query;
    if(reg.test(pathName)){
        const suffix=reg.exec(pathName)[1].toUpperCase // 获取mimeType

    }
})
app.listen(3000,()=>{
    console.log('server has created')
})
var reg=/\.(html|css|js)/i
console.log(reg.exec('index.html'))