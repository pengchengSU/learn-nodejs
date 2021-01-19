const http = require('http')
const url = require('url')

const server = http.createServer((req,res)=>{
    let urlstr = req.url
    let urlobj = url.parse(urlstr,true)
    console.log(urlobj);
    switch(urlobj.pathname){
        case '/api/data':
            res.write(`${urlobj.query.cb}("hello")`);
            break;
        default:
            res.write('page not found')
    }
    res.end()
})

server.listen(8080,()=>{
    console.log("localhost:8080");
})


// bootcdn.cn
// npx http-server  -p 9000
// p => padding