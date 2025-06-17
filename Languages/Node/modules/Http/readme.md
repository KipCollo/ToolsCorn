# Http module

Used when creating network applications i.e creating server eg web server.On a web server, the HTTP server is responsible for processing and answering incoming requests. Upon receiving a request, an HTTP server checks if the requested URL matches an existing file. If so, the web server sends the file content back to the browser.

Most of the web servers support server-side scripts, using scripting languages or redirecting the task to an application server which retrieves data from a database and
performs complex logic and then sends a result to the HTTP client through the Web server.

CLIENT---->WEB SERVER------->APP SERVER(communicate by FILE SYSTEM)------>DATABASE(or EXTERNAL SYSTEM)

1. Client - This layer consists of web browsers, mobile browsers or applications which can make HTTP requests to the web server.
2. Server - This layer has the Web server which can intercept the requests made by the clients and pass them the response.
3. Business - This layer contains the application server which is utilized by the web server to do the required processing. This layer interacts with the data layer via
the database or some external programs.
4. Data - This layer contains the databases or any other source of data.

## Creating WEB SERVER

1. Loading the module -const http = require('http');
2. CREATE A SERVER- We use http instance created and call createServer() method. **http.createServer()**.
3. We then bind it to port using listen() method

 ```js
 const server =  http.createServer()
 server.listen(3000)

 //Shorthand way:
 http.createServer().listen(3000)

 //ROUTING
 if(requestAnimationFrame.url==='/some/path'){
    //response
 }
```
