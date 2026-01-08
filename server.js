import fs from"fs"
import http, { get } from "http"
import path from "path"
import { fileURLToPath } from "url";
import querystring from "querystring"

const server = http.createServer((req,res)=>{

const __filename = fileURLToPath(import.meta.url); // retrieves url and converts it to path
const __dirname = path.dirname(__filename); // converts it to directory

    if(req.method === "GET"){
        
        if(req.url=== "/"){
        const filepath = path.join(__dirname ,"public","index.html");
        fs.readFile(filepath,(err,data)=>{
            if(err){
                res.writeHead(500);
                res.end("Error Loading page");
                return;
            }
            res.writeHead(200,{"Content-Type" : "text/html"});
            res.end(data);
        })

    } else if(req.url=== "/style.css"){

        const csspath = path.join(__dirname,"public","style.css");
        fs.readFile(csspath,(err,data)=>{
            if(err){
                res.writeHead(500);
                res.end("Css not found");
                return;
            }
            res.writeHead(200,{"Content-Type":" text/css "})
            res.end(data)
        })
    }
    } else if(req.method === "POST" && req.url === "/login"){

        let body = "";
        req.on("data", chunk => body += chunk);
        req.on("end", () => {
        const { username, password } = querystring.parse(body);
        fs.readFile(path.join(__dirname, "data", "users.json"), "utf8", (err, data) => {
            if (err) {
            res.writeHead(500);
            res.end("Server error");
            return;
            }
            const users = JSON.parse(data);
            const user = users.find(u => u.username === username && u.password === password);
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end(user ? "Login successful" : "Invalid credentials");  
    })
    }
    )
    }
});



server.listen(3000,()=>{
    console.log("Server is active and listening")
})