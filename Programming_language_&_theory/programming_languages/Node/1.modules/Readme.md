# Node.js Modules

We split our code into different files to maintain, organize and reuse code whenever possible. A module system allows us to split and include code and import code written by other developers whenever required. In simple terms, a module is nothing but a JavaScript file. Node.js has many built-in modules that are part of the platform and comes with Node.js installation, for example, HTTP, fs, path, and more.

A module in Node.js is a collection of independent and reusable code that can be imported into any Node.js application. The Node.js runtime software comes with the V8 JavaScript engine, bundled with a number of core modules, that perform important server-side tasks, such as managing event loop, perform file IO and operating system-specific functions etc.


*Nodejs common modules* - These are the common modules that come with `Node.js` out of the box. This module provides tools or APIs for performing out certain standard `Node.js` operations. like interacting with the file system, url parsing, or logging information to the console.Built-in modules are already installed with `Node.js`, so you don't need to install them with any package manager (yarn, npm, etc.).

command that lists all the built-in modules:

```js
const builtinModules = require('repl')._builtinLibs;
console.log(builtinModules);

//output
[
  'assert',             'assert/strict',       'async_hooks',
  'buffer',             'child_process',       'cluster',
  'console',            'constants',           'crypto',
  'dgram',              'diagnostics_channel', 'dns',
  'dns/promises',       'domain',              'events',
  'fs',                 'fs/promises',         'http',
  'http2',              'https',               'inspector',
  'inspector/promises', 'module',              'net',
  'os',                 'path',                'path/posix',
  'path/win32',         'perf_hooks',          'process',
  'punycode',           'querystring',         'readline',
  'readline/promises',  'repl',                'stream',
  'stream/consumers',   'stream/promises',     'stream/web',
  'string_decoder',     'sys',                 'timers',
  'timers/promises',    'tls',                 'trace_events',
  'tty',                'url',                 'util',
  'util/types',         'v8',                  'vm',
  'wasi',               'worker_threads',      'zlib'
]
```


- **fs**: dealing with the system files.Provides functions for working with files and directories.
- **os**: provides information about the operation system.
- **net**: to build clients and servers.Provides low-level networking functionality.
- **path**: to handle file paths.
- **url**: help in parsing and building URL strings.
- **http**: making Node.js transfer data over HTTP.
- **console**: to log information in the console.
- **assert**: provides a set of assertion tests.
- **process**: provides information about, and control over, the current process.Provides information about the current Node.js process and allows you to interact with the operating system.
- **cluster**: able to creating child processes that runs simultaneously and share the same server port.
- **perf_hooks**: provides APIs for performance measurement
- **crypto**: to handle OpenSSL cryptographic functions.Provides functions for cryptography and secure hashing.
- **Buffer**: provides APIs to handling streams of binary data.
- **DNS**: enables name resolution.
- **events**: for handling existing events and creating custom events.
- **child_processes**: provides the ability to spawn subprocesses.
- **REPL**: provides a Read-Eval-Print-Loop (REPL) implementation that is available both as a standalone program or includible in other applications.
- **readline**: provides an interface for reading data from a Readable stream one line at a time.
- **util**: supports the needs of Node.js internal APIs.Provides utility functions for working with data and strings.
- **querystring**: provides utilities for parsing and formatting URL query strings.
- **string_decoder**: provides an API for decoding Buffer objects into strings.
- **tls**: provides an implementation of the Transport Layer Security (TLS) and Secure Socket Layer (SSL) protocols.
- **stream**: Provides a basic framework for working with streams of data.


## Working with Files

You can programmatically manipulate files in Node.js with the built-in `fs` module. The name is short for “file system,” and the module contains all the functions you need to read, write, and delete files on the local machine.

`Fs module` - File System or fs module is a built in module in Node that enables interacting with the file system using JavaScript. All file system operations have synchronous, callback, and promise-based forms, and are accessible using both CommonJS syntax and ES6 Modules.
`path module` - The `path` module provides utilities for working with file and directory paths. It's built-in to Node.js core and can simply be used by requiring it.

process.cwd() - The `process.cwd()` method returns the current working directory of the Node.js process.


*Glob* - The glob pattern is most commonly used to specify filenames, called wildcard characters, and strings, called wildcard matching.
- \_\_dirname - The `__dirname` in a node script returns the path of the folder where the current JavaScript file resides. `__filename` and `__dirname` are used to get the filename and directory name of the currently executing file.
- \_\_filename - The `__filename` in Node.js returns the filename of the executed code. It gives the absolute path of the code file. The following approach covers implementing `__filename` in the Node.js project.

```js
const os = require('node:fs')

var cpu = os.readdirSync('../')
console.log(cpu)

var cpu = os.readdir('../',function(err,files)){
   if(err) console.log('Error', err);
   else console.log('Result', files);
}
console.log(cpu)
```


## Http module

Used when creating network applications i.e creating server eg web server.On a web server, the HTTP server is responsible for processing and answering incoming requests. Upon receiving a request, an HTTP server checks if the requested URL matches an existing file. If so, the web server sends the file content back to the browser.

Most of the web servers support server-side scripts, using scripting languages or redirecting the task to an application server which retrieves data from a database and performs complex logic and then sends a result to the HTTP client through the Web server.

CLIENT---->WEB SERVER------->APP SERVER(communicate by FILE SYSTEM)------>DATABASE(or EXTERNAL SYSTEM)

1. Client - This layer consists of web browsers, mobile browsers or applications which can make HTTP requests to the web server.
2. Server - This layer has the Web server which can intercept the requests made by the clients and pass them the response.
3. Business - This layer contains the application server which is utilized by the web server to do the required processing. This layer interacts with the data layer via
the database or some external programs.
4. Data - This layer contains the databases or any other source of data.

*Creating WEB SERVER* - 

1. Loading the module -const http = require('http');
2. CREATE A SERVER- We use http instance created and call createServer() method. **http.createServer()**.
3. We then bind it to port using listen() method

```js
const http = require('http');
const server =  http.createServer();
server.listen(3000);

//Shorthand way:
http.createServer().listen(3000)

//ROUTING
if(requestAnimationFrame.url==='/some/path'){
  //response
}
```

```js
const http = require('http')

http.createServer((req,res)=>{

    if (req.url==='/api/home') {
        res.writeHead(200,{'content-type':'text/html'})
        res.write("This is homepage..")
        res.end()
    }

    if(req.url ==='/api'){
      res.write(JSON.stringify([1,2,3]))
      res.end()
    }
}).listen(3000)
```


## OS module

The node:os module provides operating system-related utility methods and properties. It can be accessed using:

```js
const os = require('node:os');
```

```js
const os = require('node:os')

var cpu = os.networkInterfaces()
console.log(cpu)

var cpu = os.machine()
console.log(cpu)

var cpu = os.cpus()
console.log(cpu)
```


## Path module

The `node:path` module provides utilities for working with file and directory paths. It can be accessed using:

```js
const path = require('node:path');
```

*Methods* - The path.dirname() method returns the directory name of a path, similar to the Unix dirname command. Trailing directory separators are ignored, see path.sep.
The path.extname() method returns the extension of the path, from the last occurrence of the . (period) character to end of string in the last portion of the path. If there is no . in the last portion of the path, or if there are no . characters other than the first character of the basename of path (see path.basename()) , an empty string is returned.


## Events

```js
const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial',(num1,num2)=>{
   console.log("Tutorial event occurred..")
   console.log(num1 + num2);
})

eventEmitter.emit('tutorial',1,2);

class Person extends EventEmitter{
   constructor(name){
      super();
      this._name = name;
   }

   get name(){
      return this._name
   }
}

let collo = new Person('Collo')
collo.on('name',()=>{
   console.log(`My name is ${collo.name}`)
})

collo.emit('name')
```


## global keyword

`Global object` - It is globally available in any files in browsers and in Node runtime.It includes:-

1. console.log()
2. setTimeout()
3. clearTimeout()
4. setInterval()
5. clearInterval()


In browsers, the top-level scope is the global scope, and its global object is called the `window` object. Within the browser, `var something` will define a new global variable inside the `window` object.

```js
window.console.log("");//also console.log()
```

In Node.js,we use the **global** object. The top-level scope is **not** the global scope; `var something` inside a Node.js module will be local to that module.

```js
global.console.log("");//also console.log()
```

Every Node application has one file or module that is a main module.
In Node, every file is a module.The variables and functions defined in that file are scoped to that module,they are not available outside that module.

# CommonJS vs ESM

CommonJS and ES (EcmaScript) are module systems used in Node. CommonJS is the default module system. However, a new module system was recently added to NodeJS - ES modules. CommonJS modules use the require() statement for module imports and module.exports for module exports while it's import and export for ES.

Module properties includes:-

```js
console.log(module);
```

1. export - use `module.exports` keyword.
2. load - use `require` keyword.

Node does not directly execute the code.It always wrap the module inside an immediately invoked function called `Module wrapper function`.

```js
(function (exports,require,module,__filename,__dirname){
  //your file or module
})
```


- We don’t have the window object in Node.
- The global object in Node is “global”.
- Unlike browser applications, variables we define are not added to the “global” object.
- Every file in a Node application is a module. Node automatically wraps the code
in each file with an IIFE (Immediately-invoked Function Expression) to create
scope. So, variables and functions defined in one file are only scoped to that file
and not visible to other files unless explicitly exported.
- To export a variable or function from a module, you need to add them to module.exports:
module.exports.sayHello = sayHello;
- To load a module, use the require function. This function returns the module.exports object exported from the target module:
const logger = require(‘./logger’);
- Node has a few built-in modules that enable us to work with the file system, path
objects, network, operating system, etc.
- EventEmitter is one of the core classes in Node that allows us to raise (emit) and
handle events. Several built-in classes in Node derive from EventEmitter.
- To create a class with the ability to raise events, we should extend EventEmitter:
class Logger extends EventEmitter {
}


---

## Custom modules

Modules are the collection of JavaScript codes in a separate logical file that can be used in external applications based on their related functionality. There are two ways to create modules in Node.js i.e. either via CommonJS or ESM.

```js
//sum.js
const add = (num1,num2)=> num1 + num2;

module.exports = add
```

```js
//cust.js
const add = (num1,num2)=> num1 + num2;
const PI  =3.14;
class MathsObj{
  constructor(){
    console.log("Math obj")
  }
}
module.exports.add = add;
module.exports.PI= PI;
module.exports.MathsObj = MathsObj;

//Alternative to export
module.exports ={ sum: sum, PI : PI, MathsObj: MathsObj}
```

```js

const sum = require('./sum');
const cust =require('./cust');
sum(1,3)
cust.add(2,9)
cust.PI;
new cust.MathsObj();
```


```js
const sub =(num1,num2)=> num1 - num2
const PI= 3.14;
class Calculate{
   constructor(){
      console.log("Calculate obj....")
   }
}

module.exports.sub =sub;
module.exports.PI=PI
module.exports.Calculate = Calculate;
```

```js
const mats = require("./mats")
const cust =require("./cust")
console.log(mats(1,3))
console.log(cust.PI)
console.log(cust.sub(5,3))
new cust.Calculate()
```
