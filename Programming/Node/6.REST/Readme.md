# RESTful Services

REST stands for REpresentational State Transfer. REST is a web standard based architecture that uses HTTP Protocol. It revolves around resources where every component
is a resource and a resource is accessed by a common interface using HTTP standard methods.

A REST Server simply provides access to resources and a REST client accesses and modifies the resources using HTTP protocol. Here each resource is identified by URIs/
global IDs. REST uses various representation to represent a resource, for example, text, JSON, XML, but JSON is the most popular one.

## RESTful Web Services

A web service is a collection of open protocols and standards used for exchanging data between applications or systems. Software applications written in various programming languages and running on various platforms can use web services to exchange data over computer networks like the Internet in a manner similar to inter-process communication on a single computer. This interoperability (e.g., communication between Java and Python, or Windows and Linux applications) is due to the use of open standards.

Web services based on REST Architecture are known as RESTful web services. These web services use HTTP methods to implement the concept of REST architecture. A RESTful web service usually defines a URI, Uniform Resource Identifier, which provides resource representation such as JSON and a set of HTTP Methods.

Web services based on REST Architecture are known as RESTful web services. These webservices uses HTTP methods to implement the concept of REST architecture. A RESTful web service usually defines a URI, Uniform Resource Identifier a service, which provides resource representation such as JSON and set of HTTP Methods

* Getting Data

```js
app.get("route",function(request,response){

});
```

* Adding/Posting Data

```ts
app.post("/route",function(req,res){

});
```

* Updating Whole Data

```js
app.put("route",function(request,response){

});
```

* Updating part of Data

```js
app.patch("route",function(request,response){

});
```

* Deleting Data

```ts
app.delete("/route",function(req,res){

});
```
