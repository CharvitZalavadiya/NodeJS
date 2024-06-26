// with cluster

const cluster = require("node:cluster")
const http = require("node:http")
const os = require("node:os")

console.log(os.cpus().length)
if(cluster.isMaster){
    console.log(`master process ${process.id} is running`)
    cluster.fork();
    cluster.fork();
}
else{
    console.log(`worker ${process.id} started`)

    const server = http.createServer((req, res) => {
        if(req.url === "/"){
            res.writeHead(200, {"Content-Type": "text/plain"})
            res.end("Home Page")
        }
        else if(req.url === "slow"){
            for (let i=0; i<999; i++){
                res.writeHead(200, {"Content-Type": "text/plain"})
                res.end("Slow Page")
            }
        }
    })
    
    server.listen(8000, () => console.log("Server on 8000 port"))
}