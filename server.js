const http= require("http")
const fs = require("fs")
const path =require("path")


const { stringify } = require("querystring")

const server= http.createServer((req,res)=>{

    if (req.url==="/"){
        const filePath = path.join(__dirname, "./project/index.html");
        fs.readFile(filePath, "utf8", (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                return res.end("Error loading HTML file");
            }

            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
        
    }
    else if(req.url==="/about"){
        res.writeHead(200,{"content-type":"application/json"})
        data={
            name:"josh",
            role:"trainer"
        }
        res.end(JSON.stringify(data));
        
    }
    else if(req.url==="/about/contact"){
        res.writeHead(200,{"content-type":"text/html"})
        res.write("<h1>hello from js as HTML </h1>")
         res.end();
    }
    else {
        res.writeHead(200,{"content-type":"text/html"})
        res.write("<h1 style='color:red'>404 not found </h1>")
         res.end();
    }
  


})


server.listen(3000,()=>{
    console.log("server is running on http://localhost:3000")
}
)