// 01, 02, 03, 04, 05
// Go through ReadMe file


// 06
// console.log("Hello World!");


// 07, 08
// Go through ReadMe file


// 09
// const addFn = require("./09-add");

// const sum1 = addFn(4,6)
// const sum2 = addFn(40,6)
// console.log(sum1)
// console.log(sum2)


// 10
// Go through ReadMe file


// 11
// require("./11-module-scope-1");
// require("./11-module-scope-2");


// 12
// Go through ReadMe file


// 13
// caching
// const superHero = require("./13-module-caching")
// console.log(superHero.getName())
// superHero.setName("superman")
// console.log(superHero.getName())

// const newSuperHero = require("./13-module-caching")
// console.log(newSuperHero.getName())

// no caching
// const superHero = require("./13-module-caching")

// const batman = new superHero("Batman")
// console.log(batman.getName())
// batman.setName("Bruce Wayne")
// console.log(batman.getName())

// const superman = new superHero("Superman")
// console.log(superman.getName())


// 14
// direct import
// const add = require("./14-import-export-patterns")
// console.log(add(3,7))

// importing object
// const math = require("./14-import-export-patterns")
// console.log(math.add(4,7))
// console.log(math.sub(4,7))
// console.log("*********")
// const {add, sub} = math     // destructuring
// console.log(add(4,7))
// console.log(sub(4,7))


// 15 
// Go through ReadMe file


//16
// see the 16th files


// 17
// const data = require("./17-importing-json-and-watch-mode-data.json")
// console.log(data)


// 18
// Go through ReadMe file


// 19
// const path = require("node:path")
// console.log(__filename)
// console.log(__dirname)

// console.log(path.basename(__filename))
// console.log(path.basename(__dirname))

// console.log(path.extname(__filename))
// console.log(path.extname(__dirname))

// console.log(path.parse(__filename))
// console.log(path.format(path.parse(__filename)))

// console.log(path.isAbsolute(__filename))
// console.log(path.isAbsolute("./09-add.js"))

// console.log(path.join("f1", "f2", "index.html"))
// console.log(path.join(__dirname, "09-add.js"))

// console.log(path.resolve("f1", "f2", "index.html"))


// 20
// function greet(name){
//     console.log(`Hello ${name}`)
// }
// function greetMe(greetFn){
//     const name = "Charvit Zalavadiya"
//     greetFn(name)
// }
// greetMe(greet);


// 21
// const eventEmitter = require("node:events");
// const emitter = new eventEmitter
// emitter.on('order-pizza', (size, type)=>{
//     console.log(`order confirmed ! Baking ${size} size ${type} pizza`)
// })
// emitter.on("order-pizza", (size)=>{
//     if(size === "large")
//         console.log("you have ordered large pizza")
//     else
//         console.log("you have ordered regular pizza")
// })
// emitter.emit('order-pizza', "large", "margerita")


// 22
// const shop = require("./22-extending-from-emitter-1")
// const machine = require("./22-extending-from-emitter-2")
// const drink = new machine()
// const pizza = new shop()
// pizza.on("order", (size, type)=>{
//     console.log(`order confirmed ! Baking ${size} size ${type} pizza`)
//     drink.serveDrink(size)
// })
// pizza.order("large", "margerita")
// pizza.order("regular", "7 chizzy")


// 23
// Go through ReadMe file


// 24
// const buffer = new Buffer.from("Charvit")
// buffer.write("MERN")
// console.log(buffer.toString())
// console.log(buffer)
// console.log(buffer.toJSON())


// 26
// const fs = require("node:fs")
// console.log("1")
// const fileContent = fs.readFileSync("./26-fs-module-1.txt", "utf8")           // synchronous reading of file
// console.log(fileContent)
// console.log("2")
// fs.readFile("./26-fs-module-1.txt", "utf8", (error, data) => {            // asynchronous reading of file
//     if(error)
//         console.log(error)
//     else
//         console.log(data)
// })
// console.log("3");

// fs.writeFileSync("./26-fs-module-2.txt", "Synchronous writing in new file you can add content in existing file also by giving that file's path.");
// fs.writeFile("./26-fs-module-2.txt", " Asynchronous writing in existing file", {flag:"a"} , (err) => {
    //     if(err)
    //         console.log(err)
    //     else
    //         console.log("Async written successfully")
    // })
    
    
// 27
// const fs = require("node:fs/promises")
// m1
// console.log("1")
// fs.readFile("./26-fs-module-1.txt", "utf8")
// .then((data) => console.log(data))
// .catch((error) => console.log(error))
// console.log("2")

// m2
// async function readFile(){
//     try{
//         const data = await fs.readFile("./26-fs-module-1.txt", "utf8")
//         console.log(data)
//     }
//     catch(error){
//         console.log(error)
//     }
// }


// 28
// const fs = require("node:fs")
// const readableStream = fs.createReadStream("./28-streams-1.txt", {
//     encoding: "utf8",
//     highWaterMark: 2,
// })
// const writeableStream = fs.createWriteStream("./28-streams-2.txt")
// readableStream.on("data", (chunk)=>{
//     console.log(chunk)
//     writeableStream.write(chunk)
// })


// 29
// const fs = require("node:fs")
// const zlib = require("node:zlib")
// const gzip = zlib.createGzip();
// const readableStream = fs.createReadStream("./29-pipes-1.txt", {
//     encoding: "utf8",
//     highWaterMark: 2,
// })
// readableStream.pipe(gzip).pipe(fs.WriteStream("./29-pipes-2.txt.gz"));            // created zip file with .gz extension which is contains utf-8 endocoded data
// const writeableStream = fs.createWriteStream("./29-pipes-2.txt")
// readableStream.pipe(writeableStream)


//31
// const http = require("node:http")
// const server = http.createServer((req, res)=>{
//     res.writeHead(200, {"Content-Type": "text/plain"});
//     res.end("Hello world from a node learner!")
// })
// server.listen(3000, ()=>{
//     console.log("Server is running on the port 3000")
// })


// 32
// const http = require("node:http")
// const server = http.createServer((req, res)=>{
//     const superHero = {
//         firstName: "Bruce",
//         lastName: "Wayne"
//     };
//     res.writeHead(200, {"Content-Type": "application/json"});
//     res.end(JSON.stringify(superHero))
// })
// server.listen(3000, ()=>{
//     console.log("Server is running on the port 3000")
// })


// 33
// const http = require("node:http")
// const fs = require("node:fs")
// const server = http.createServer((req, res)=>{
//     const language = "Node JS"
//     res.writeHead(200, {"Content-Type": "text/html"});
//     let html = fs.readFileSync("33-html-response.html", "utf8")
//     html = html.replace("{{language}}", language)
//     res.end(html)
//     fs.createReadStream(__dirname + "33-html-response.html").pipe(res)           // it more efficient and preferable method to show html file
// })
// server.listen(3000, ()=>{
//     console.log("Server is running on the port 3000")
// })


// 34
// const http = require("node:http")
// const fs = require("node:fs")
// const server = http.createServer((req, res)=>{
//     // res.end(req.url)

//     if(req.url === "/"){
//         res.writeHead(200, {"Content-Type": "text/plain"})
//         res.end("Home Page")
//     }
//     else if(req.url === "/aboutme"){
//         res.writeHead(200, {"Content-Type": "text/plain"})
//         res.end("About Me Page")
//     }
//     else if(req.url === "/api"){
//         res.writeHead(200, {"Content-Type": "application/json"})
//         res.end(JSON.stringify({
//             firstName: "Bruce",
//             lastName: "Wayne"
//         }))
//     }
//     else{
//         res.writeHead(404)
//         res.end("There is no page !")
//     }
// })
// server.listen(3000, ()=>{
//     console.log("Server is running on the port 3000")
// })


// 39
// const crypto = require("node:crypto")
// const start = Date.now()
// // exp1
// // crypto.pbkdf2Sync("Password", "salt", 100000, 512, "sha512")
// // crypto.pbkdf2Sync("Password", "salt", 100000, 512, "sha512")
// // crypto.pbkdf2Sync("Password", "salt", 100000, 512, "sha512")
// // console.log("Hash : ", Date.now() - start)

// // exp 2
// const max = 3
// for(let i=0; i<max; i++){
//     crypto.pbkdf2("Password", "salt", 100000, 512, "sha512", ()=>{
//         console.log(`Hash : ${i+1}`, Date.now() - start)
//     })
// }


// 40
// const crypto = require("node:crypto")
// // exp 3
// process.env.UV_THREADPOOL_SIZE = 5;
// const start = Date.now()
// const max = 5
// for(let i=0; i<max; i++){
//     crypto.pbkdf2("Password", "salt", 100000, 512, "sha512", ()=>{
//         console.log(`Hash : ${i+1}`, Date.now() - start)
//     })
// }


// 41
// const https = require("node:https")
// const max = 2
// const start = Date.now();
// for(let i=0; i<max; i++){
//     https.request("https://www.google.com", (res) => {
//         res.on("data", ()=>{});
//         res.on("end", () => {
//             console.log(`Request ${i+1}`, Date.now() - start)
//         })
//     })
//     .end();
// }


// 43
// console.log("1")
// process.nextTick(() => console.log("process.nextTick 1"))
// console.log("2")

Promise.resolve.then(() => console.log("Promise.resolve 1"))
process.nextTick(() => console.log("process.nextTick 1"))