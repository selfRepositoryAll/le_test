const http = require('http');
const url = require('url');
const app = http.createServer((req, res) => {
    const urlObj = url.parse(req.url, true),
        pathname = urlObj.pathname,
        query = urlObj.query;
    console.log(pathname)
    if (pathname == '/index') {
        //access-control-allow-origin
        res.setHeader('access-control-allow-origin','*')
        res.end(JSON.stringify('hello world'))
    }
})
app.listen(3000, () => {
    console.log('server has created')
})
// 有webpack的时候我们是可以通过 webpack的插件来生成  htmlplugin 在没有webpack的情况下我们要自己
// 现在一般使用 webpack-dev-server 服务 会帮我处理
// 不想使用 koa2 webpack-der-middle webpack-hot-middle 集合koa2 启动服务
//什么都没有的情况下 单纯使用node 的话 就需要读取html css 然后再 静态资源全都要放在cdn
// 缓存的话 就更多了 cdn缓存  dns缓存开发环境下 hash 最好不要 生产环境下使用 thunkhash 是 最好的利用浏览器的缓存
