const http = require('http')
const https = require('https')

const server = http.createServer((request,response)=>{
    // console.log(request);
    console.log(request.url);

    // response.writeHead(200,{
    //     'content-type':'text/plain'
    // })
    // response.write('<div>hello</div>');

    // let data=''

    // request.on('data',(chunk)=>{
    //     data+=chunk
    // })

    // response.on('end',()=>{
    // })

    https.get('https://www.xiaomiyoupin.com/mtop/mf/cat/list',(result)=>{
        let data = '';
        result.on('data',(chunk)=>{
            data+=chunk
        })
        result.on('end',()=>{
            response.writeHead(200,{
                'content-type':'application/json;charset=utf-8'
            })
            response.write(data);
            response.end()
        })
    })


})

server.listen(8080,()=>{
    console.log("localhost:8080");
})

// node 浏览器端debug
// node --inspect --inspect-brk server.js