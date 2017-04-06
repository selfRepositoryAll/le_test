var http = require('http')
var url = require('url')
var fs=require('fs')
http.createServer((req, res) => {
    // console.log('url',url.parse)
    var urlObj = url.parse(req.url,true)
    var pathname = urlObj.pathname
    if (pathname === '/index') {
       // res.writeHead({'name':'age'})
        var responseHeaders = {
            'name':'age',
            "access-control-allow-origin": "*",
            "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
            "access-control-allow-headers": "content-type, accept",
            "access-control-max-age": 10,
            "Content-Type": "application/json"
        };
        var contentFile=fs.createReadStream('./1.html','utf-8')
        var selfHeader={"name":"age"}
        res.setHeader("name","age")
        res.setHeader("access-control-max",10)
        // 告诉浏览器以什么方式解析 因为是html所以是text/html  换成application/json是不同
        res.writeHeader(200,{'Content-type':'text/html;charset=utf-8'})
        //res.write('杨虫多')
        contentFile.pipe(res)
    }
    if(pathname=='/data'){
        res.writeHeader(200,{'Content-type':'application/json'})
        res.end(JSON.stringify({'name':'ycd'}))
    }
}).listen(80, () => {
    console.log('server has created')
})
process.on('exit',(code)=>{
    console.log(code)
})