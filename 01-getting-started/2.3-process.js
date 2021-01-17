const http = require('http')

function main(argv){
    console.log(argv);
}
main(process.argv.slice(2))
console.log(process.argv)


const server = http.createServer((request,response)=>{
    let url = request.url
    response.write(url)
    response.end()
})

server.listen(8090,"localhost",()=>{
    console.log("localhost:8090")
})

// nvm list
// nvm use 14.15.0
// nvm alias default 14.15.0

