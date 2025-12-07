# NODE

Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project! Node.js runs the V8 JavaScript engine, Google Chrome's core, outside the browser. This allows Node.js to be very performant. A Node.js app runs in a single process, without creating a new thread for every request. Node.js provides a set of asynchronous I/O primitives in its standard library that prevent JavaScript code from blocking and generally, libraries in Node.js are written using non-blocking paradigms, making blocking behavior the exception rather than the norm.

It is used for server-side programming, and primarily deployed for non-blocking, event-driven servers, such as traditional web sites and back-end API services, but was originally designed with real-time, push-based architectures in mind. Every browser has its own version of a JS engine, and node.js is built on Google Chrome’s V8 JavaScript engine

Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project! Node.js runs the V8 JavaScript engine, Google Chrome's core, outside the browser. This allows Node.js to be very performant. A Node.js app runs in a single process, without creating a new thread for every request. Node.js provides a set of asynchronous I/O primitives in its standard library that prevent JavaScript code from blocking and generally, libraries in Node.js are written using non-blocking paradigms, making blocking behavior the exception rather than the norm.

It's a runtime for executing js code.Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.

Node.js is an open source, cross-platform runtime environment for developing server-side and networking applications. Node.js applications are written in JavaScript, and can be run within the Node.js runtime on OS X, Microsoft Windows, and Linux.It's used to write APIs.

Node.js = Runtime Environment + JavaScript Library

Node.js was written initially by Ryan Dahl in 2009, about thirteen years after the introduction of the first server-side JavaScript environment, Netscape's LiveWire Pro Web. The initial release supported only Linux and Mac OS X. Its development and maintenance were led by Dahl and later sponsored by Joyent.

`Nodejs vs Browser` - Both the browser and Node.js use JavaScript as their programming language. Building apps that run in the browser is entirely different than building a Node.js application. Even though it's always JavaScript, some key differences make the experience radically different.

## Features of Node.js

1. Asynchronous and Event Driven − All APIs of Node.js library are asynchronous, that is, non-blocking. It essentially means a Node.js based server never waits for
an API to return data. The server moves to the next API after calling it and a notification mechanism of Events of Node.js helps the server to get a response from
the previous API call.
2. Single Threaded but Highly Scalable − Node.js uses a single threaded model with event looping. Event mechanism helps the server to respond in a non-blocking
way and makes the server highly scalable as opposed to traditional servers which create limited threads to handle requests. Node.js uses a single threaded program
and the same program can provide service to a much larger number of requests than traditional servers like Apache HTTP Server.
3. No Buffering − Node.js applications never buffer any data. These applications simply output the data in chunks.

## Why node

1. Node.js is a cross-platform runtime, perfect for a wide range of use cases. 
2. Its huge community makes it easy to get started.
3. It uses the V8 engine to compile JavaScript and runs at lightning-fast speeds. 
4. Node.js applications are very scalable and maintainable. 
5. Cross-platform support allows the creation of all kinds of applications - desktop apps, software as a service, and even mobile applications.
6. Node.js is perfect for data-intensive and real-time applications since it uses an event-driven, non-blocking I/O model, making it lightweight and efficient. 
7. With such a huge community, a vast collection of Node.js packages is available to simplify and boost development.

## Running Node.js Code

The usual way to run a Node.js program is to run the globally available `node` command (once you install Node.js) and pass the name of the file you want to execute.
When you install Node it comes with:

```bash
npx --v
npm --v
node --v
```

Node is a runtime environment for executing JS code.
- Essentially, Node is a C++ program that embeds Chrome’s v8 engine, the fastest JS engine in the world.
- We use Node to build fast and scalable networking applications. It’s a perfect choice for building RESTful services.
- Node applications are single-threaded. That means a single thread is used to serve all clients.
- Node applications are asynchronous or non-blocking by default. That means when the application involves I/O operations (eg accessing the file system or the
network), the thread doesn’t wait (or block) for the result of the operation. It is released to serve other clients.
- This architecture makes Node ideal for building I/O-intensive applications.
- You should avoid using Node for CPU-intensive applications, such as a video encoding service. Because while executing these operations, other clients have to wait for the single thread to finish its job and be ready to serve them.
- In Node, we don’t have browser environment objects such as window or the document object. Instead, we have other objects that are not available in browsers, such as objects for working with the file system, network, operating system, etc.

## Keep App Running

In Node.js, you need to restart the process to make changes take effect. This adds an extra step to your workflow. You can eliminate this extra step by using `nodemon` to restart the process automatically.

Since Node.js 18.11.0, you can run Node with the `--watch` flag to reload your app everytime a file is changed. So you don't need to use `nodemon` anymore.

**Nodemon** - In Node.js, you need to restart the process to make changes take effect. This adds an extra step to your workflow. You can eliminate this extra step by using [nodemon](https://nodemon.io/) or [PM2](https://pm2.keymetrics.io/docs/usage/quick-start/) to restart the process automatically.

`nodemon` is a command-line interface (CLI) utility developed by [@rem](https://twitter.com/rem) that wraps your Node app, watches the file system, and automatically restarts the process.
