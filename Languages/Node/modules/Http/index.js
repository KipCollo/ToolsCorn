const http = require('http')

http.createServer((req,res)=>{

    if (req.url==='/api/home') {
        res.writeHead(200,{'content-type':'text/html'})
        res.write("This is homepage..")
        res.end()
    }
}).listen(3000)

