# Node.js Modules

We split our code into different files to maintain, organize and reuse code whenever possible. A module system allows us to split and include code and import code written by other developers whenever required. In simple terms, a module is nothing but a JavaScript file. Node.js has many built-in modules that are part of the platform and comes with Node.js installation, for example, HTTP, fs, path, and more.

A module in Node.js is a collection of independent and reusable code that can be imported into any Node.js application. The Node.js runtime software comes with the V8 JavaScript engine, bundled with a number of core modules, that perform important server-side tasks, such as managing event loop, perform file IO and operating system-specific functions etc.

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


# Nodejs common modules

These are the common modules that come with `Node.js` out of the box. This module provides tools or APIs for performing out certain standard `Node.js` operations. like interacting with the file system, url parsing, or logging information to the console.

# Builtin modules

Built-in modules are already installed with `Node.js`, so you don't need to install them with any package manager (yarn, npm, etc.).

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
