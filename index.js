const http = require("node:http")
const server = http.createServer((req,res)=>{
    res.end("hello every body can do it");
})
 server.listen(3001,()=>{
    console.log("listening on port 3001")
})






