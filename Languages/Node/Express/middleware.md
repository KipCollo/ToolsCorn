# Middleware

It's a function that accepts requests and passes the response either to another middleware function or to clients.To apply middleware, we utilize app.use() method.The method has one optional string parameter path & one mandatory function parameters callback e.g app.use('string param',function(req,res,next){})

## Types of Middlewares

- Built-In Middleware
- Third-Party Middleware
- Custom Middleware

**Built-In Middleware**: These middlewares are shipped with express module.
It includes:
  a. express.compress()
  b. express.static()
  c. express.json()
  d. express.urlencoded()
  e. Route handle methods i.e (req,res)=>{}

**Custom Middleware**: They are middleware created in our app.

syntax:

```js
    function <function_name>(request,response,next){
        //body
        next()
    }
```

**Third-Party Middleware**: They are middleware created by other devs and can be found in registries.

- express.compress():- This middleware allows for gzipping of transferred data and is usually placed in the very beginning of an Express.js app configuration to precede the other middleware and routes. The express.compress() is good without extra params, but here they are just in case (gzip uses core Node.js module zlib⁴ and just passes these options to it):

• chunkSize (default: 16*1024)
• windowBits
• level
• memLevel
• strategy
• filter: function that by default tests for the Content-Type header to be json, text or javascript

- express.logger():- This middleware keeps track of all the requests. It takes either an options object or a format string, e.g.,

```js
app.use(express.logger()); //vanilla logger
app.use(express.logger('short'));
app.use(express.logger('dev'));
```

Supported options:
• format: a string with an output format; see token string
• stream: the output stream to use defaults to stdout, but could be anything else, e.g., a file or a another stream
• buffer number of milliseconds for the buffer interval, defaults to 1000ms if not set or not a number
• immediate boolean value which when set to true makes the logger write log line on request instead of response

- express.json():- If the request has a MIME type of application/json, this middleware will try to parse the request payload as JSON. The result will be put in the req.body object and passed to the next middlewares and routes.
We can pass the following options as properties:
• strict: boolean true or false; if it’s true (default), then a 400 status error will be passed to next()
callback when first character is not [ or {
• reviver: is a second parameter to JSON.parse() function which transforms the output; more
info at MDN⁷
• limit: max byte size; disabled by default

- express.urlencoded():- This express.urlencoded() middleware parses only requests with the x-ww-form-urlencoded header. It utilizes qs⁸ module’s querystirng.parse() function and puts the resulting JS object into req.body.
We can also pass the limit parameter similar to the express.json() middleware above, e.g.,

```js
app.use(express.urlencoded({limit:10000});
```

- express.session():- This middleware must have express.cookeParser() enabled before its definition. The express.session() takes these options:
Options
• key: cookie name defaulting to connect.sid
• store: session store instance, usually Redis object (more about it in the Redis chapter)
• secret: session cookie is signed with this secret to prevent tampering, usually just a random
string
• cookie: session cookie settings, defaulting to { path: ‘/’, httpOnly: true, maxAge: null }
• proxy: boolean that says to trust the reverse proxy when setting secure cookies (via “x-
forwarded-proto”)
By default, sessions are stored in the memory. However, we can use Redis for persistence and for
sharing sessions between multiple machines. For more information on Express.js sessions, please
refer to the Tips and Tricks part.
