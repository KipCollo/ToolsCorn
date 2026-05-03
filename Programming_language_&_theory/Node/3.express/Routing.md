# Routing

Express.js provides a way to organize routes.

## app.VERB()

Each route is defined via a method call on an application object with a URL pattern as the first parameter — Regular Expressions¹ (RegExps) are also supported — that is app.METHOD(path,
[callback...], callback); for example:

```js
app.get('api/v1/stories/', function(res, req){
...
})
```

or, for a POST method:

```js
app.post('/api/v1/stories', function(req,res){
...
})
```

The callbacks that we pass to get() or post() methods are called request handlers (more info on them in the Request Handlers chapter), because they take requests (req), process them and write to response (res) objects. For example:

```js
app.get('/about', function(req,res){
res.send('About Us: ...');
});
```

We can have multiple request handlers, hence the name middleware. They accept a third parameter/function next, calling which (next()) will switch the execution flow to the next handler:

```js
app.get('/api/v1/stories/:id', function(req,res, next) {
//do authorization
//if not authorized or there is an error
// return next(error);
//if authorized and no errors
return next();
}), function(req,res, next) {
//extract id and fetch the object from the database
//assuming no errors, save story in the request object
req.story = story;
return next();
}), function(req,res) {
//output the result of the database search
res.send(res.story);
});
```

Where ID of a story in a URL pattern is a query string parameter, which we need for finding matching
items in the database.
We can have multiple request handlers defined, which are extremely helpful in reusing the code for
authentication, validation and loading of resources:

```js
app.get('/admin',
function(req,res,next) {
//check active session, i.e.,
//make sure the request has cookies associated with a valid user session
//check if the user has administrator privileges
return next();
}, function(req,res,next){
//load the information required for admin dashboard
//such as user list, preferences, sensitive info
return next();
}, function(req, res) {
//render the information with proper templates
//finish response with a proper status
res.end();
})
```

• app.get(): retrieves entity or a list of entities
• app.head(): same as GET, only without the body
• app.post(): submits a new entity
• app.put(): updates an entity by complete replacement
• app.path(): updates an entity partially
• app.del(): deletes existing entity
• app.options(): retrieves the capabilities of the server

## app.all()

The app.all() method allows the execution of specified request handlers on a particular path no matter what the HTTP method of the request is. This procedure might be a lifesaver when defining global or namespaced logic, e.g.,

```js
app.all('*', userAuth);
...
app.all('/api/*', apiAuth)
```

## Request Handlers

Request handlers in Express.js are strikingly similar to callbacks in the core Node.js http.createServer() method, because they’re just functions (anonymous, named or methods) with req and res parameters:

## Request

Express request object is a wrapper for a core Node.js http.request object. It has some neat functionality, but in its essence it supports everything that the native **http.request** can do.

- req.params:- In the preceding chapter Extracting Parameters, we covered how to set up middleware to process data taken from the URLs of the requests. However, sometimes it’s more convenient just to get such values from within a specific request handler directly. For this, there’s a req.params object, which is an array with key value pairs.
We can add the following route to req/app.js:

```js
app.get('/params/:role/:name/:status', function(req, res) {
console.log(req.params)
res.end();
})
```

- req.body:- The req.body object is a magic that’s provided to us via enabling express.bodyParser() middleware (or either one of its children — more on that in the Type of Middleware chapter above).
Again, let’s reuse our previous project and add this route to see how the req.body object works,remembering that app.use(express.bodyParser()); is in the code already:

```js
app.post('/body', function(req, res){
console.log(req.body);
res.end(JSON.stringify(req.body)+'\n');
});
```

- req.route:- The req.route object simply has the current route’s information such as:

• path: original URL pattern of the request
• method: HTTP method of the request
• keys: list of parameters in the URL pattern (i.e., values prefixed with :)
• regexp: Express.js-generated pattern for the path
• params: req.params object
We can add the console.log(req.route); statement to our req.params route from the example above like this:

```js
app.get('/params/:role/:name/:status', function(req, res) {
console.log(req.params);
console.log(req.route);
res.end();
});
```

- req.files:- req.files is used to handle file uploads. It is similar to req.body and is turned on either by express.bodyParser() or express.multipart() middlewares. Express.js (and other modules behind the scene) process the request data (which is usually a form) and give us extensive information in the req.files.FIELD_NAME object.
To illustrate how req.files works, let’s add this route to the req project:

```js
app.post('/upload', function(req, res){
console.log(req.files.archive);
//read req.files.archive.path
//process the data
//save the data
res.end();
})
```

We can create a file for upload with $ node -e. Let’s say we have a legacy system archive of user
names and roles in a CSV format:

The req.files.archive will have lots of useful attributes and methods. The most important of them
are:
• name: file name
• path: path to the file on the server
• type: file type
• size: size of the file
In addition, req.files.archive could be processed as a stream. This is important when we need to
handle large files such as video/audio data and we want to start operating with it without waiting
until the last byte of the file is loaded.

- req.header() and req.get():- The req.header and req.get methods are identical and allow for retrieval of the request headers by their names. The naming is case-insensitive:

```js
app.get('content-type');
app.header('content-type');
```

There are plenty of other objects in the Express.js Request:
• req.accepts(): true if a passed string (single or comma separated values) or an array of MIME types (or extensions) matches against the request Accept header, false if there’s no match (API¹)
• req.accepted: an array of accepted MIME types (API²)
• req.is(): true if a passed MIME type string matches the Content-Type header types, false if there’s no match (API³)
• req.ip: the IP address of the request, please see trust proxy configuration for proxy situations (API⁴)
• req.ips: an array of IPs when trust proxy config is enabled (API⁵)
• req.path: string with a URL path of the request (API⁶)
• req.host: value from the Host header of the request (API⁷)
• req.fresh: true if request is fresh based on Last-Modified and ETag headers, false otherwise
(API⁸)
• req.stale: opposite of req.fresh (API⁹)
• req.xhr: true if the request is an AJAX call via X-Requested-With header and its XML-
HttpRequest value (API¹⁰)
• req.protocol: request protocol value, e.g., http or https (API¹¹)
• req.secure: true if the request protocol is https (API¹²)
• req.subdomains: array of subdomains from the Host header (API¹³)
• req.originalUrl: unchangeable value of the request URL (API¹⁴)
• req.acceptedLanguages: array of language code (e.g., en-us, en) from the request’s Accept-
Language header (API¹⁵)
• req.acceptsLanguage(): true if a passed language code is in the request header (API¹⁶)
• req.acceptedCharsets: array of charsets (e.g., iso-8859-5) from the request’s Accept-Charset
header (API¹⁷)
• req.acceptsCharset(): true if a passed charset is in the request header (API¹⁸)

## Response

The Express.js response object — which we get inside of the request handler callbacks — is the same good old Node.js http.response object¹ but on steroids. If someone ever wrote a web server with only core Node.js modules, there’s only the res.end() method² that finishes the request. The Express.js response object contains many convenient wrappers, like res.json() or res.send().

- res.render():- The res.render() is the staple of Express.js. From our previous examples and from the function’s name, you could guess that it has something to do with generating HTML out of templates (such as Jade, Handlebars, or EJS) and data.
The method takes three parameters, but only one is mandatory: template name in a string format.
The template name can be with or without an extension.
Here is an example of a simple setup for the home page route in the res/app.js file:

```js
app.get('/render', function(req, res) {
res.render('render');
});
```

The new render.jade file looks static for now:

```js
extends layout

block content
h1= 'Express.js Guide'
p Welcome to the Express.js Guide Response example!
```

NOTE:- Jade uses Python/Haml-like syntax, which takes into account white spaces and tabs — be
careful with the markup. We can use = as a print command (h1 tag) or nothing (p tag). For
more information, please visit the official documentation³.

- res.locals():- The res.locals() object is another way to pass data to the templates so they both can be compiled minto HTML. The first way is to pass data as a parameter to the res.render() method as outlined
above:

```js
app.get('/render-title', function(req, res) {
res.render('index', {title: 'Express.js Guide'});
});
```

However, with res.locals, we can achieve the same thing. Our object will be available inside of the template:

```js
app.get('/locals', function(req, res){
res.locals = { title: 'Express.js Guide' };
res.render('index');
});
```

Again, the index.jade Jade template remains the same:

```js
extends layout

block content
h1= title
p Welcome to #{title}
```

- res.set():- The res.set() method is an alias of res.header() (or the other way around) and serves as a wrapper for the Node.js http core module’s response.setHeader() function⁶. The main difference is that res.set() is smart enough to call itself recursively when we pass multiple header-value pairs to it in the form of an object.
Here is an example of setting a single response header:

```js
app.get('/set-html', function(req, res) {
//some code
res.set('Content-type', 'text/html');
res.end('<html><body>' +
'<h1>Express.js Guide</h1>' +
'</body></html>');
});
```

- res.status():- The res.status() accepts an HTTP status code⁷ number and sends it in response. The only difference between its core counterpart⁸ is that res.status() is chainable:

```js
app.get('/status', function(req, res) {
res.status(200).send('alive');
});
```

- res.send():- The res.send() method lies somewhere between high-level res.render() and low-level res.end().The res.send() conveniently outputs any data application thrown at it (such as strings, JavaScript objects, and even Buffers) with automatically generated proper HTTP headers, e.g., Content-Length,ETag or Cache-Control.
Due to its omnivorous behavior (cause by arguments.length), res.send() can be used in countless
ways:

1. Status code number: res.send(500); for Server Error or res.send(200); for OK
2. String: res.send('success');
3. Object: res.send({message: 'success'}); or res.send({message: 'error'});
4. Array: res.send([{title: 'Express.js Guide'}, {title: 'Rapid Prototyping with JS'}]);
5. Buffer: res.send(new Buffer('Express.js Guide'));

The status code and data parameters can be combined, for example:

```js
app.get('/send-ok', function(req, res) {
res.send(200, {message: 'Data was submitted successfully.'});
});
```

The headers generated by res.send() might be overwritten if specified explicitly before. For example, Buffer type will have Content-Type as application/octet-stream but we can change it to text/plain with:

```js
app.get('/send-buf', function(req, res) {
res.set('Content-Type', 'text/plain');
res.send(new Buffer('CSV data in text format'));
});
```

- res.json():- The res.json() method is a convenient way of sending JSON data. It’s equivalent to res.send() when data passed is Array or Object type. In other cases, res.json() forces data conversion with JSON.stringify(). By default, the header Content-Type is set to application/json, but can be overwritten prior to res.json() with res.set().

The most common use of res.json() is with appropriate status codes:

```js
app.get('/json', function(req, res) {
res.json(200, [{title: 'Express.js Guide', tags: 'node.js express.js'},
{title: 'Rapid Prototyping with JS', tags: 'backbone.js, node.js, mongodb'},
{title: 'JavaScript: The Good Parts', tags: 'javascript'}
]);
});
```

- res.jsonp():- The res.jsonp() method is similar to res.json(), but provides JSONP response. That is, the JSON data is wrapped in a JavaScript function call, e.g., processResponse({...});. This is usually used for cross-domain calls support. By default, Express.js uses a callback name to extract the name of the callback function. It’s possible to override this value with json callback name settings (more on that in the Settings chapter). If there is no proper callback specified in the query string of the request (e.g., ?callback=cb), then the response is simply JSON.

Assume that we need to serve CSV data to a front-end request via JSONP:

```js
app.get('/', function (req, res) {
res.jsonp(200, [{title: 'Express.js Guide', tags: 'node.js express.js'},
{title: 'Rapid Prototyping with JS', tags: 'backbone.js, node.js, mongodb'},
{title: 'JavaScript: The Good Parts', tags: 'javascript'}
]);
});
```

- res.redirect():- Sometimes it’s needed just to redirect users/requests to another route. We can use absolute, relative or full paths:

```js
res.redirect('/admin');
res.redirect('../users');
res.redirect('http://rapidprototypingwithjs.com');
```

By default, res.redirect() sends 302: Found/Temporarily Moved status code⁹. Of course we can configure it to our liking in the same manner as res.send(), i.e., passing the first status code number
as the first parameter:

```js
res.redirect(301, 'http://rpjs.co');
```

Other Response Methods and Properties

• res.get(): string value of response header for a passed header type (API¹⁰)
• res.cookie(): takes cookie key-value pair and sets it on response (API¹¹)
• res.clearCookie(): takes cookie key/name and optional path parameter to clear the cookies(API¹²)
• res.location(): takes relative, absolute or full paths as a string and sets that value to Location response header (API¹³)
• res.charset: the charset value of the response (API¹⁴)
• res.type(): takes a string and sets it as a value of Content-Type header (API¹⁵)
• res.format(): takes an object as a mapping of types and responses and executes them according to Accepted request header (API¹⁶)
• res.attachment(): takes optional filename as a string and sets Content-Disposition (and if filename provided Content-Type) header(s) to attachment and file type accordingly (API¹⁷)
• res.sendfile(): takes path to a file on the server and various options and callback parameters, and sends the file to the requester (API¹⁸)
• res.download(): takes same params as res.sendfile(), and sets Content-Disposition and calls res.sendfile() (API¹⁹)
• res.links(): takes an object of URLs to populate Links response header (API²⁰)
