# NodeJS

# 3 : Chrome's V8 Engine

- A js engine is a program that executes js code
- In 2008, Google created its own js engine called V8
- V8 is written in C++ and can be used independently or can be enbedded into other C++ programs
- That allows you to write your own C++ programs which can do everyting that v8 can do and more
- Your c++ program can run ECMAScript and additional features that you choose to incorporate

# 4 : JS Runtime
image

# 5 : What is Node.js?

**What can you build with Node.js?**
1. Traditional websites
2. Backend services like APIs
3. Real-time applications
4. Streaming services
5. CLI tools
6. Multiplayer games


- Node.js allows you to build complex and powerful applications
- Node js is an open-source, cross-platform JavaScript runtime environment
- It is not a language, it is not a framework and capable of executing JavaScript code outside a browser
- It can execute not only the standard ECMAScript language but also new features that are made available through C++ bindings using the V8 engine
- It consists of C++ files which form the core features and JavaScriptfiles which expose common utilities and some of the C++ features for consumption

# 06 : Hello World

- Executing JavaScript with Node

**Node REPL**
   1. Read
   2. Evaluate
   3. Print
   4. Loop

- Executing code in a JavaScript file in the command line

# 7 : Browser vs Node.js

- In the browser, most of the time what you are doing is interacting with the DOM, or other Web Platform APIs like Cookies. You don't have the document, window and all the other objects that are provided by the browser
- In the browser, we don't have all the nice APls that Node.js provides through its modules
- For example the filesystem access functionality
- With Node.js, you control the environment
- With a browser you are at the mercy of what the users choose

# 8 : Modules

- A module is an encapsulated and reusable chunk of code that has its own context
- In Node js, each file is treated as a separate module

**Types of Modules**
   1. Local modules - Modules that we create in our application
   2. Built-in modules - Modules that Node.js ships with out of the box
   3. Third party modules - Modules written by other developers that we can use in our application

# 9 : Local Modules

**CommonJS :**\
    -- CommonS is a standard that states how a module should be structured and shared\
    -- Node.js adopted CommonJS when it started out and is what you will see in code bases

**Summary :**\
    -- In node.js, each file is a module that is isolated by default\
    -- To load a module into another file, we use the require function\
    -- When index.js is executed, the code in the module is also executed\
    -- If the file we are requiring is a javascript file, we can skip specifying the extension and node.js will infer it on our behalf

# 10 : Module Exports

-- Module export name and import in index file name are not necessary to be same they can be different also or same also\

# 11 : Module Scope

**IIFE in node :**
    - Before a module's code is executed, Node.js will wrap it with a function wrapper that provides module scope
    - This saves us from having to worry about conflicting variables or functions
    - There is proper encapsulation and reusability is unaffected

**Summary :**
    - Each loaded module in Node. js is wrapped with an lIFE that provides private scoping of code
    - lIFE allows you to repeat variable or function names without any conflicts

-- IIFE = Imediate Invoke Function Expression\

# 12 : Module Wrapper

-- Every module in node js gets wrapped in an lIFE before being loaded\
-- IIFE helps keep top-level variables scoped to the module rather than the global object\
-- The lIFE that wraps every module contains 5 parameters which are pretty important for the functioning of a module\

-- (function(exports, require, module, **filename, **dirname) {\
  const superHero = "Batman";\
  console.log (superHero) ;\
  })

# 13 : Module Caching

-- See the code comments in file number 13\

# 14 : Import Export Patterns

-- See the code comments in file number 14 and 06\

# 15 : Module.exports vs Exports

-- See the code comments in file number 15\

# 16 : ES Modules

**CommonJS :**
     - Each file is treated as a module
     - Variables, functions, classes, etc. are not accessible to other files by default
     - Explicitly tell the module system which parts of your code should be exported via module.exports or exports
     - To import code into a file, use the require() function

**ES Modules :**
    - At the time Node.js was created, there was no built-in module system in JavaScript
    - Node js defaulted to CommonS as its module system
    - As of ES2015, JavaScript does have a standardized module system as part of the language itself
    - That module system is called EcmaScript Modules or ES Moc Codevolution M for short

**Summary :**
    - ES Modules is the ECMAScript standard for modules
    - It was introduced with ES2015
    - Node.js 14 and above support ES Modules
    - Instead of module.exports, we use the export keyword
    - The export can be default or named
    - We import the exported variables or functions using the import keyword
    - If it is a default export, we can assign any name while importing
    - If it is a named export, the import name must be the same

-- See the code of both file 16\

# 17 : Importing JSON and Watch Mode

**Importing JSON :**
    - JavaScript Object Notation
    - A data interchange format commonly used with web servers

-- To enter watch mode hit the command "node --watch filename"\
-- Watch mode is the new feature from node in that when there is a change in your file then it automatically runs the file you need not to have press the run file button\
-- To exit watch mode hit the command "ctrl + c"\

# 18 : Built-in Modules

-- Modules that Node.js ships with\
-- Also referred to as core modules\
-- Import the module before you can use it\
  • path
  • events
  • fs
  • stream
  • http

# 19 : Path Modules

-- See the only code of file 06 for from line 89\

**node: Protocol**
    - Makes it perfectly clear that the import is a Node.js builtin module
    - Makes the import identifier a valid absolute URL
    - Avoids conflicts for future Node.js built-in modules

# 20 Callback Pattern

**Callbacks :**
    - In JavaScript, functions are first class objects
    - A function can be passed as an argument to a function
    - A function can also be returned as values from other functions

**Types of Callbacks :**
  *Synchronous callbacks*
        -- A callback which is executed immediately is called a synchronous callback\
  *Asynchronous callbacks*
        -- A callback that is often used to continue or resume code execution after an asynchronous operation has completed\
        -- Callbacks are used to delay the execution of a function until a particular time or event has occurred\
        -- In Node.js have an asynchronous nature to prevent blocking of execution\
        -- Ex: reading data from a file, fetching data from a database or network request\

# 21 : Events Module

- The events module allows us to work with events in Node.js
- An event is an action or an occurrence that has happened in our application that we can respond to
- Using the events module, we can dispatch our own custom events and respond to those custom events in a non-blocking manner

**Events Module - Scenario :**
    - Let's say you're feeling hungry and head out to Dominos to have pizza
    - At the counter, you place your order for a pizza
    - When you place the order, the line cook sees the order on the screen and bakes the pizza for you
    - Order being placed is the event
    - Baking a pizza is a response to that event

- Go through code in file 06 from line 123

# 22 : Extending from EventEmitter

- Go through code for 22 both file and in file file 06 from line 138

# 23 : Character Sets and Encoding

**Character in binary format :**
    - V?
    - Computers will first convert the character to a number, then convert that number to its binary representation
    - Computers will first convert V to a number that represents V
    - 86 is the numeric representation of the character V
    - It is also called character code
    - How does the computer know V should be represented as 86

**Character Sets :**
    - Character Sets are predefined lists of characters represented by numbers
    - Popular character sets - Unicode and ASCIl
    - Unicode character set dictates that 86 should represent character V

**Character Encoding :**
    - Character encoding dictates how to represent a number in a character set as binary data before it can be stored in a computer
    - It dictates how many bits to use to represent the number
    - Example of a character encoding system is UTF-8
    - UTF-8 states that characters should be encoded in bytes (8 bits)
    - Eight 1s or 0s should be used to represent the code of any character in binary
    - 4 => 100 => 00000100
    - V => 86 => 01010110

- Similar guaidelines also exist on how images and videos should be encoded and stored in binary format

# 24 : Streams and Buffers

**Streams :**
    - Ex: a stream of data over the internet being moved from one computer to another
        - A stream is a sequence of data that is being moved from one point to another over time
    - Ex: a stream of data being transferred from one file to another within the same computer
        - Process streams of data in chunks as they arrive instead of entire data to be available before processing
    - Ex: watching a video on YouTube
        - The data arrives in chunks and you watch in chunks while the rest of the data arrives over time
    - Ex: transferring file contents from fileA to fileB
        - The contents arrive in chunks and you transfer in chunks while the remaining contents arrive over time

- Prevents unnecessary data downloads and memory usage

**Buffers :**
    - Area where people wait is nothing but the buffer Node.js cannot control the pace at which data arrives in the stream
    - It can only decide when is the right time to send the data for processing
    - If there is data already processed or too little data to process, Node puts the arriving data in a buffer
    - It is an intentionally small area that Node maintains in the runtime to process a stream of data

- Go through code and get data from websites

# 25 : Asynchronous JavaScript

- JavaScript is a synchronous, blocking, single-threaded language

**Synchronous :**
    - If we have two functions which log messages to the console, code executes top down, with only one line executing at any given time

**Blocking :**
    - No matter how long a previous process takes, the subsequent processes won't kick off until the former is completed
    - Web app runs in a browser and it executes an intensive chunk of code without returning the browser, the browser can appear to be frozen

**Single-threaded :**
    - A thread is simply a process that program can use to run a task
    - Each thread can only do one task
    - JavaScript has just the one thread called the main thread for executing any code

- fetchDataFromDB('endpoint') could take 1 second or even more
- During that time, we can't run any further code
- JavaScript, if it simply proceeds to the next line without waiting, we have an error because data is not what we expect it to be
- Just JavaScript is not enough
- We need new pieces which are outside of JavaScript to help us write asynchronous code
- For front-end, this is where web browsers come into play. For back-end, this is where Node.js comes into play
- Web browsers and Node.js define functions and APIs that allow us to register functions that should not be executed synchronously, and should instead be invoked asynchronously when some kind of event occurs
- For example, that could be the passage of time ( setTimeout or setinterval), the user's interaction with the mouse (addEventListener), data being read from a file system or the arrival of data over the network (callbacks, Promises, async-await)
- You can let your code do several things at the same time without stopping or blocking your main thread

**Summary :**
    - JavaScript is a synchronous, blocking, single-threaded language
    - This nature however is not beneficial for writing apps
    - We want non-blocking asynchronous behaviour which is made possible by a browser for FE and Node.js for backend
    - This style of programming where we don't block the main JavaScript thread is fundamental to Node.js and is at the heart of how some of the built-in module code is written

# 26 : fs Module

- The file system (fs) module allows you to work with the file system on your computer
- fs module internally uses the buffer

- const fileContent = fs.readFileSync("./26-fs-module.txt", "utf8") --> 1st is file path and utf-8 is encoding into readable string if utf-8 is not written it will give you buffer in binary
- Go through code once in file 06 from line 163

- flag: "a" for append the new data in file if not written then it will re-Write the data

# 27 : fs Promise Module

- Go through code once in file 06 from line 186

# 28 : Streams

**Types of Streams :**
    - Readable streams from which data can be read
    - Writable streams to which we can write data
    - Duplex streams that are both Readable and Writable
    - Transform streams that can modify or transform the data as it is written and read
    - Ex: Reading from a file as readable stream
    - Ex: Writing to a file as writable stream
    - Ex: Sockets as a duplex stream
    - Ex: File compression where you can write compressed data and read

- De-compressed data to and from a file as a transform stream

# 29 : Pipes

- It connects the readableStream to writeableStream
- Go through code in all files of 29

# 30 : HTTP Module

**How the web works :**
    - Computers connected to the internet are called clients and servers
    - Clients are internet-connected devices such as computers or mobile phones along with web-accessing software available on those devices such as a web browser
    - Servers on the other hand are computers that store web pages, sites, or apps

**НТТР :**
    - HTTP stands for Hypertext Transfer Protocol
    - A protocol that defines a format for clients and servers to speak to each other
    - The client sends an HTTP request and the server responds with an HTTP response

**HTTP and Node :**
    - We can create a web server using Node.js
    - Node.js has access to operating system functionality like networking
    - Node has an event loop to run tasks asynchronously and is perfect for creating web servers that can simultaneously handle large volumes of requests
    - The node server we create should still respect the HTTP format
    - The HTTP module allows creation of web servers that can transfer data over НТТР

# 31 : Creating a Node Server

- Go through code once
- To stop the server hit the command ctrl+c in the terminal

# 32 : JSON Response

- Go through code once

# 33 : HTML Response

- Go through code once

# 34 : HTML Template

- Go through code once

# 35 : HTTP Routing

- Go through code once

# 36 : Web Framework

- A framework simply abstracts the lower level code allowing you to focus on the
  requirements than the code itself
- For example, Angular, React, Vue are all framework/libraries that help you build user interfaces without having to rely on the lower level DOM API in JS
- There are frameworks to build web or mobile applications without having to rely on the HTTP module in node.js
- Ex: express, nest, hapi, koa and sails
- They build on top of the HTTP module making it easier for you to implement all the features

# 37 : Node Runtime Recap

- JavaScript code becomes Node.js code when it uses dependencies like V8, libuv, zlib, crypto etc, c/c++ features, JS Libraries

# 38 : libuv

**What?**
    - libuv is a cross platform open source library written in C language

**Why?**
    - handles asynchronous non-blocking operations in Node.js

**How?**
    - Thread pool
    - Event loop

# 39 : Thread Pool

**Main thread:**
    - "Hey libuv, I need to read file contents but that is a time consuming task. I don't want to block further code from being executed during this time. Can I offload this task to you?"

**Libuv:**
    - "Sure, main thread. Unlike you, who is single threaded, I have a pool of threads that I can use to run some of these time consuming tasks. When the task is done, the file contents are retrieved and the associated callback function can be run."

**Experiment 1 Inference**
    - Every method in node.js that has the "sync" suffix always runs on the main thread and is blocking

**Experiment 2 Inference**
    - A few async methods like fs.readFile and crypto.pbkdf2 run on a separate thread in libuv's thread pool. They do run synchronously in their own thread but as far as the main thread is concerned, it appears as if the method is running asynchronously

# 40 : Thread Pool Size

- Libuv's thread pool has 4 threads

**Experiment 3 Inference**
    - By increasing the thread pool size, we are able to improve the total time taken to run multiple calls of an asynchronous method like pbkdf2
    - Command for increase the size of thread pool : process.env.UV_THREADPOOL_SIZE = 5;

- Increasing the thread pool size can help with performance but that is limited by the number of available CPU cores

# 41 : Network I/O

- Although both crypto.pbkdf2 and https.request are asynchronous, https.request method does not seem to use the thread pool
- https.request does not seem to be affected by the number of CPU cores either

- https.request is a network input/output operation and not a CPU bound operation
- It does not use the thread pool
- Libuv instead delegates the work to the operating system kernel and whenever
  possible, it will poll the kernel and see if the request has completed

**Summary**
    - In Node.js, async methods are handled by libuv
    - They are handled in two different ways 1. Native async mechanism 2. Thread pool
    - Whenever possible, Libuv will use native async mechanisms in the OS so as to avoid blocking the main thread.
    - Since this is part of the kernel, there is different mechanism for each OS. We have epoll for Linux, Kqueue for MacOS and 10 Completion Port on Windows
    - Relying on native async mechanisms makes Node scalable as the only limitation is the operating system kernel
    - Example of this type is a network 1/0 operation
    - If there is no native async support and the task is file 1/0 or CPU intensive, libuv uses the thread pool to avoid blocking the main thread
    - Although the thread pool preserves asynchronicity with respect to Node's main thread, it can still become a bottleneck if all threads are busy

# 42 : Event Loop

- Watch the video from 1-44 to 6-00

- It is a C program and is part of libuv
- A design pattern that orchestrates or co-ordinates the execution of synchronous
  and asynchronous code in Node.js 1. Visual representation 2. Run a few experiments

- Take a image of picture shown in the video at 10-25

**Execution Order** 
    - User written synchronous JavaScript code takes priority over async code that the
    runtime would like to execute 
    - Only after the call stack is empty, the event loop comes into picture
    1. Any callbacks in the micro task queues are executed. First, tasks in the nextTick queue and only then tasks in the promise queue
    2. All callbacks within the timer queue are executed
    3. Callbacks in the micro task queues if present are executed. Again, first tasks in the nextTick queue and then tasks in the promise queue
    4. All callbacks within the 1/0 queue are executed
    5. Callbacks in the micro task queues if present are executed. nextTick queue followed by Promise queue.
    6. All callbacks in the check queue are executed
    7. Callbacks in the micro task queues if present are executed. Again, first tasks in the nextTick queue and then tasks in the promise queue
    8. All callbacks in the close queue are executed
    9. For one final time in the same loop, the micro task queues are executed. nextTick queue followed by promise queue. 
    - If there are more callbacks to be processed, the loop is kept alive for one more run and the same steps are repeated - On the other hand, if all callbacks are executed and there is no more code to process, the event loop exits.

**Few Questions**
    *Whenever an async task completes in libuv, at what point does Node decide to run the associated callback function on the call stack?*
        Callback functions are executed only when the call stack is empty. The normal flow of execution fill not be interrupted to run a callback function
    *What about async methods like setTimeout and setinterval which also delay the execution of a callback function?*
        setTimeout and setinterval callbacks are given first priority
    *If two async tasks such as setTimeout and readFile complete at the same time, how does Node decide which callback function to run first on the call stack?*
        Timer callbacks are executed before 1/0 callbacks even if both are ready at the exact same time

# 43 : Microtask Queues

- Go through code in file 06
- All user written synchronous JavaScript code takes priority over async code that the runtime would like to eventually execute
- Watch the video from 3-52 to 5-47
- All callbacks in nextTick queue are executed before callbacks in promise queue
- Watch the video 7-20 to 8-22
- Watch the video 10-50 to 12-55

**process.nextTick**
    - Use of process.nextTick is discouraged as it can cause the rest of the event loop to starve
    - If you endlessly call process.nextTick. the control will never make it past the microtask queue
    - Two main reasons to use process.nextTick
        1. To allow users to handle errors, cleanup any then unneeded resources, or perhaps try the request again before the event loop continues
        2. To allow a callback to run after the call stack has unwound but before the event loop continues

# 44 : Timer Queue

- Callbacks in the microtask queues are executed before callbacks in the timer queue
- Watch the video 3-05 to 5-09
- Callbacks in microtask queues are executed in between the execution of callbacks in the timer queue
- Timer queue callbacks are executed in FIFO order

# 45 : I/O Queue

- watch full video
- Callbacks in the microtask queues are executed before callbacks in the I/O queue
- When running setTimeout with delay 0ms and an I/O async method, the order of execution can never be guaranteed
- I/O queue callbacks are executed after Microtask queues callbacks and Timer queue callbacks
- To queue a callback function into the check queue, we can use a function called setlmmediate

# 46 : I/O Polling

- Watch full video
- I/O events are polled and callback functions are added to the I/O queue only after the I/O is complete

# 47 : Check Queue

- Watch full video
- Check queue callbacks are executed after Microtask queues callbacks, Timer queue callbacks and I/O queue callbacks are executed
- Microtask queues callbacks are executed after I/O callbacks and before check queue callbacks
-Microtask queues callbacks are executed in between check queue callbacks
- When running setTimeout with delay 0ms and setimmediate method, the order of execution can never be guaranteed

# 48 : Close Queue

- Close queue callbacks are executed after all other queues callbacks in a given iteration of the event loop

# Summary of Event Loop from #42 to #48

- The event loop is a C program that orchestrates or co-ordinates the execution of synchronous and asynchronous code in Node.js
- It co-ordinates the execution of callbacks in six different queues
- They are next lick, Promise, timer, /O, check and close queues

- We use process.nextTick method to queue into the nextTick queue
- We resolve or reject a Promise to queue into the Promise queue
- We use setTimeout or setinterval to queue into the timer queue
- Execute an async method to queue into the 1/0 queue
- Use set/mmediate function to queue into the check queue
- Attach close event listeners to queue into the close queue
- The order of execution follows the same order listed here
- nextTick and Promise queues are executed in between each queue and also in between each callback execution in the timer and check queues

# 49 : What is npm?

**What is npm?**
    - It is the world's largest software library
    - It is a software package manager

**npm is a Software Library**
    - npm is a library or a registry which contains code packages written by various developers
    - It is a large public database of JavaScript code that developers from all over the world can use to share and borrow code
    - If you author a "code package", you can publish it to the npm registry for others to use
    - If you come across a code package that is authored by someone else and solves the problem you have at hand, you can borrow that code without having to reinvent the wheel

**npm is a Software Package Manager**
    - A command line interface tool that lets us manage packages in a project

**npm and Other Package Managers**
    - Other package managers such as pnpm and Yarn
    - npm is the default package manager for Node.js

# 50 : Package.json

**What?**
     - package json is npm's configuration file - It is a json file that typically lives in the root directory of your package and holds various metadata relevant to the package

**Why?**
    - package.json is the central place to configure and describe how to interact with and run your package - It is primarily used by the прт CLI

custom package :
{
    "name": "Charvit Zalavadiya",
    "version": "1.0.0",
    "description": "Welcome to NodeJS packages",
    "keywords": [
    "CZ",
    "greet"
    ],
    "main": "50-index.js"
}

- To directly get the default package file hit the command "npm init --y"

# 51 : Installing Packages, #52 : Using Packages

- Visit the "npmjs.com" website to get all the information about how to install packages.

# 53 : Dependencies

- Hit the command npm install to intall all the dependencies at single command that are being used for project if by any chance you have deleted your "node modules" folder.

# 54 : Versioning

- If you want to install dependency at specific version then write the version like this: npm install upper-case@2.0.0

**Semantic Versioning**
  - SemVer - is one of the most widely adopted versioning systems
  - A simple set of rules and requirements that dictate how version numbers are assigned and incremented
  - It is crucial to keep a semantic and historical track of changes
  - Version numbers and the way they change convey meaning about the underlying code and what has been modified from one version to the next

**Versioning Rules**
  - When you fix a bug and the code stays backwards-compatible you increment the patch version.
  - For example 1.1.1 to 1.1.2
  - When you add new functionality but the code still stays backwards-compatible, you increment the minor version
  - You also reset the patch version to zero
  - For example 1.1.1 to 1.2.0
  - When you make changes and the code is no more backwards compatible, you increment the major version
  - You have to reset the minor and patch version to zero
  - For example 1.1.1 to 2.0.0.

**Few more points**
  - Semantic versioning always starts with 0.1.0
  - 0.Y.Z (a major version of zero) is used for initial development
  - When the code is production-ready, you increment to version 1.0.0
  - Even the simplest of changes has to be done with an increase in the version number

# 55 : Global Packages

- "npm install -g nodemon" here -g represents that install the nodemon package globally in the pc.
- nodemon is a kind of package which works like watch mode when there is change in your code then it will refresh the console.
- Global packages are not listed in dependencies.

# 56 : npm scripts

- An npm script is a convenient way to bundle common commands for use in a project
- They are typically entered in the command line in order to do something with the application
- npm scripts are stored in a project's package.son file, giving access to everyone who has access to the codebase
- They also ensure that everyone is using the same command with the same options
- Common use cases for npm scripts include building your project, starting a development server, compiling CSS, linting, minifying etc
- npm scripts are executed using the command npm run <SCRIPT_NAME>

# 57 : Publishing an npm Package

- npm adduser <username>
- npm publish
- Your npm package will have same name as your package name and it will be available at "npmjs.com/package/<npm package name>"

# 58 : Building CLI Tools

- CLI stands for Command Line Interface
- A program that you can run from the terminal
- Ex: npm and git

# 59 : CLI Options

- Watch the whole video to create custom CLI tool

# 60 : Interactive CLI Tools

- Watch the whole video

# 61 : Cluster Module

- Go through code

- Node is single threaded
- No matter how many cores you have, node only uses a single core of your CPU
- This is fine for I/O operations but if the code has long running and CPU intensive operations, your application might struggle from a performance point of view
- The cluster module enables the creation of child processes (also called workers) that run simultaneously
- All created workers share the same server port

- Master is only in charge of the workers
- Workers are in charge of handling incoming requests, reading files etc
- Each worker gets its own event loop, memory, and V8 instance

# 62 : Worker Threades Module

- The worker_threads module enables the use of threads that execute JavaScript in parallel
- Code executed in a worker thread runs in a separate child process, preventing it from blocking your main application
- The cluster module can be used to run multiple instances of Node.js that can distribute workloads
- worker_threads module allows running multiple application threads within a single Node.js instance
- When process isolation is not needed, that is, no separate instances of V8, event loop and memory are needed, you should use worker_threads

# 63 : Deploying Node.js App

- Watch the video