# REST

REST is an acronym for REpresentational State Transfer and an architectural style for distributed hypermedia systems. Roy Fielding first presented it in 2000 in his famous dissertation. Since then, it has become one of the most widely used approaches for building web-based APIs (Application Programming Interfaces). 
REST, or REpresentational State Transfer, is an architectural style for providing standards between computer systems on the web, making it easier for systems to communicate with each other.
REST was first defined by Roy Fielding in his 2000 Dotoral dissertation
A REST API provides endpoints that allow clients to communicate with a server over the internet. Each endpoint represents a specific resource or action, such as retrieving data,creating new data, updating existing data, or deleting data. Clients send requests to these endpoints using HTTP methods like GET, POST, PUT, PATCH, and DELETE, and the server responds with the requested data or performs the requested action.

REST is not a protocol or a standard, it is an architectural style. During the development phase, API developers can implement REST in a variety of ways.
Like the other architectural styles, REST also has its guiding principles and constraints. These principles must be satisfied if a service interface is to be referred to as RESTful.
A Web API (or Web Service) conforming to the REST architectural style is called a REST API (or RESTful API).

This client-server communication follows the principles of REST (Representational State Transfer), which emphasizes statelessness, a uniform interface, and resource-based interactions.

So, in total, REST APIs support these seven HTTP methods:
1. GET – Retrieve data (with response body).
2. POST – Create a new resource.
3. PUT – Update/replace a resource.
4. PATCH – Partially update a resource.
5. DELETE – Remove a resource.
6. OPTIONS – Fetch allowed HTTP methods for a resource.
7. HEAD – Retrieve only headers (without response body).

## Principles of REST

REST is based on some constraints and principles that promote simplicity, scalability, and statelessness in the design. The six guiding principles or constraints of the RESTful architecture are:

 Uniform Interface

By applying the principle of generality to the components interface, we can simplify the overall system architecture and improve the visibility of interactions. Multiple architectural constraints help in obtaining a uniform interface and guiding the behavior of components.

The following four constraints can achieve a uniform REST interface:

    Identification of resources – The interface must uniquely identify each resource involved in the interaction between the client and the server.
    Manipulation of resources through representations – The resources should have uniform representations in the server response. API consumers should use these representations to modify the resource state in the server.
    Self-descriptive messages – Each resource representation should carry enough information to describe how to process the message. It should also provide information on the additional actions that the client can perform on the resource.
    Hypermedia as the engine of application state – The client should have only the initial URI of the application. The client application should dynamically drive all other resources and interactions with the use of hyperlinks.

In simpler words, REST defines a consistent and uniform interface for interactions between clients and servers. For example, the HTTP-based REST APIs make use of the standard HTTP methods (GET, POST, PUT, DELETE, etc.) and the URIs (Uniform Resource Identifiers) to identify resources.
1.2. Client-Server

The client-server design pattern enforces the separation of concerns, which helps the client and the server components evolve independently.

By separating the user interface concerns (client) from the data storage concerns (server), we improve the portability of the user interface across multiple platforms and improve scalability by simplifying the server components.

While the client and the server evolve, we have to make sure that the interface/contract between the client and the server does not break.
1.3. Stateless

Statelessness mandates that each request from the client to the server must contain all of the information necessary to understand and complete the request.

The server cannot take advantage of any previously stored context information on the server.

For this reason, the client application must entirely keep the session state.
1.4. Cacheable

The cacheable constraint requires that a response should implicitly or explicitly label itself as cacheable or non-cacheable.

If the response is cacheable, the client application gets the right to reuse the response data later for equivalent requests and a specified period.
1.5. Layered System

The layered system style allows an architecture to be composed of hierarchical layers by constraining component behavior. In a layered system, each component cannot see beyond the immediate layer they are interacting with.

A layman’s example of a layered system is the MVC pattern. The MVC pattern allows for a clear separation of concerns, making it easier to develop, maintain, and scale the application.
1.6. Code on Demand (Optional)

REST also allows client functionality to be extended by downloading and executing code in the form of applets or scripts.

The downloaded code simplifies clients by reducing the number of features required to be pre-implemented. Servers can provide part of the features delivered to the client in the form of code, and the client only needs to execute the code.
2. What is a Resource?

The key abstraction of information in REST is a resource. Any information that we can name can be a resource. For example, a REST resource can be a document or image, a temporal service, a collection of other resources, or a non-virtual object (e.g., a person).

The state of the resource at any particular time is known as the resource representation. The resource representations consist of:

    the data
    the metadata describing the data
    and the hypermedia links that can help the clients transition to the next desired state.

    A REST API consists of an assembly of interlinked resources. This set of resources is known as the REST API’s resource model.

2.1. Resource Identifiers

REST uses resource identifiers to identify each resource involved in the interactions between the client and the server components.
2.2. Hypermedia

The data format of a representation is known as a media type. The media type identifies a specification that defines how a representation is to be processed.

A RESTful API looks like hypertext. Every addressable unit of information carries an address, either explicitly (e.g., link and id attributes) or implicitly (e.g., derived from the media type definition and representation structure).

    Hypertext (or hypermedia) means the simultaneous presentation of information and controls such that the information becomes the affordance through which the user (or automaton) obtains choices and selects actions.

    Remember that hypertext does not need to be HTML (or XML or JSON) on a browser. Machines can follow links when they understand the data format and relationship types.
    — Roy Fielding

2.3. Self-Descriptive

Further, resource representations shall be self-descriptive: the client does not need to know if a resource is an employee or a device. It should act based on the media type associated with the resource.

So in practice, we will create lots of custom media types – usually one media type associated with one resource.

Every media type defines a default processing model. For example, HTML defines a rendering process for hypertext and the browser behavior around each element.

    Media Types have no relation to the resource methods GET/PUT/POST/DELETE/… other than the fact that some media type elements will define a process model that goes like “anchor elements with an href attribute create a hypertext link that, when selected, invokes a retrieval request (GET) on the URI corresponding to the CDATA-encoded href attribute.”



In simpler words, REST defines a consistent and uniform interface for interactions between clients and servers. For example, the HTTP-based REST APIs make use of the standard HTTP methods (GET, POST, PUT, DELETE, etc.) and the URIs (Uniform Resource Identifiers) to identify resources.
1.2. Client-Server

The client-server design pattern enforces the separation of concerns, which helps the client and the server components evolve independently.

By separating the user interface concerns (client) from the data storage concerns (server), we improve the portability of the user interface across multiple platforms and improve scalability by simplifying the server components.

While the client and the server evolve, we have to make sure that the interface/contract between the client and the server does not break.
1.3. Stateless

Statelessness mandates that each request from the client to the server must contain all of the information necessary to understand and complete the request.

The server cannot take advantage of any previously stored context information on the server.

For this reason, the client application must entirely keep the session state.
1.4. Cacheable

The cacheable constraint requires that a response should implicitly or explicitly label itself as cacheable or non-cacheable.

If the response is cacheable, the client application gets the right to reuse the response data later for equivalent requests and a specified period.
1.5. Layered System

The layered system style allows an architecture to be composed of hierarchical layers by constraining component behavior. In a layered system, each component cannot see beyond the immediate layer they are interacting with.

A layman’s example of a layered system is the MVC pattern. The MVC pattern allows for a clear separation of concerns, making it easier to develop, maintain, and scale the application.
1.6. Code on Demand (Optional)

REST also allows client functionality to be extended by downloading and executing code in the form of applets or scripts.

The downloaded code simplifies clients by reducing the number of features required to be pre-implemented. Servers can provide part of the features delivered to the client in the form of code, and the client only needs to execute the code.
2. What is a Resource?

The key abstraction of information in REST is a resource. Any information that we can name can be a resource. For example, a REST resource can be a document or image, a temporal service, a collection of other resources, or a non-virtual object (e.g., a person).

The state of the resource at any particular time is known as the resource representation. The resource representations consist of:

    the data
    the metadata describing the data
    and the hypermedia links that can help the clients transition to the next desired state.

    A REST API consists of an assembly of interlinked resources. This set of resources is known as the REST API’s resource model.

2.1. Resource Identifiers

REST uses resource identifiers to identify each resource involved in the interactions between the client and the server components.
2.2. Hypermedia

The data format of a representation is known as a media type. The media type identifies a specification that defines how a representation is to be processed.

A RESTful API looks like hypertext. Every addressable unit of information carries an address, either explicitly (e.g., link and id attributes) or implicitly (e.g., derived from the media type definition and representation structure).

    Hypertext (or hypermedia) means the simultaneous presentation of information and controls such that the information becomes the affordance through which the user (or automaton) obtains choices and selects actions.

    Remember that hypertext does not need to be HTML (or XML or JSON) on a browser. Machines can follow links when they understand the data format and relationship types.
    — Roy Fielding

2.3. Self-Descriptive

Further, resource representations shall be self-descriptive: the client does not need to know if a resource is an employee or a device. It should act based on the media type associated with the resource.

So in practice, we will create lots of custom media types – usually one media type associated with one resource.

Every media type defines a default processing model. For example, HTML defines a rendering process for hypertext and the browser behavior around each element.

    Media Types have no relation to the resource methods GET/PUT/POST/DELETE/… other than the fact that some media type elements will define a process model that goes like “anchor elements with an href attribute create a hypertext link that, when selected, invokes a retrieval request (GET) on the URI corresponding to the CDATA-encoded href attribute.”






key characteristics of REST APIs:-

- `Stateless`: Each request from a client must contain all the necessary information, as the server does not store session data.
- `Client-Server Architecture`: The client and server are independent.
- `Cacheable`: Responses can be cached to improve performance.
- `Layered System`: APIs can have multiple layers for security, load balancing, etc.
- `Uniform Interface`: Uses standard HTTP methods and URIs for interaction - Identification of resources,Manipulation of resources through these representations,self-descrptive messages,Hypermedia As The Engine Of Application State(HATEOS)
- `Code on Demand`(Optional)

**HATEOAS** is an acronym for <b>H</b>ypermedia <b>A</b>s <b>T</b>he <b>E</b>ngine <b>O</b>f <b>A</b>pplication <b>S</b>tate, it's the concept that when sending information over a RESTful API the document received should contain everything the client needs in order to parse and use the data i.e they don't have to contact any other endpoint not explicitly mentioned within the Document.


**Resource Design**:- The resource should always be prural nouns in the API endpoint and is one instance resource should be retrieved,pass the id in the URL.
(GET /accounts, GET /accounts/1).
In case of nested resources(resource under resource),the resources should be accessible as follows.(GET /accounts/1/payments/56).
Use the HTTP methods to specify what to do with resources.With methods GET,POST,PUT,PATCH,DELETE you can provide CRUD functionality(Create,Read,Update,Delete).


An idempotent operation means that making multiple identical requests will not change the server state beyond the first request.
Idempotent methods: GET, PUT, DELETE, HEAD, OPTIONS
Non-idempotent methods: POST, PATCH

Example: Calling DELETE /users/123 multiple times should delete the user once and return the same response.

Securing a REST API-

Authentication: Use OAuth 2.0, JWT, or API keys
Authorization: Implement role-based access control (RBAC)
CORS (Cross-Origin Resource Sharing): Restrict API access to trusted origins
Rate Limiting & Throttling: Prevent abuse by limiting API calls.API rate limiting restricts the number of API requests a user or client can make in a specific time period. Example: 1000 requests per hour per user.Used to prevent abuse and ensure fair usage.
Input Validation & Sanitization: Prevent SQL Injection, XSS attacks
HTTPS: Encrypt data in transit

Types of API authentication methods:-

Basic Authentication – Uses username: password (Base64 encoded).
Bearer Token Authentication – Uses a token in the Authorization header.
OAuth 2.0 – Secure authorization framework for third-party access.
JWT (JSON Web Token) – Used for stateless authentication.
API Keys – A unique key provided to authenticate requests.




A REST API (Representational State Transfer Application Programming Interface) is an architectural style for designing networked applications, particularly web services. It utilizes standard web protocols, primarily HTTP, to facilitate communication between different software systems. 
Key characteristics and principles of REST APIs:

    Statelessness:
    Each request from a client to the server contains all the necessary information for the server to process it. The server does not store any client-specific context between requests.
    Client-Server Architecture:
    The client and server are distinct entities, allowing for independent development and evolution.
    Uniform Interface:
    A consistent and standardized way of interacting with resources, typically achieved through HTTP methods and resource-based URLs.
    Resource-Based:
    Information is exposed as "resources," which are identified by unique Uniform Resource Locators (URLs).
    Use of Standard HTTP Methods:
    REST APIs leverage standard HTTP methods (verbs) to perform operations on resources:
        GET: Retrieve a resource or collection of resources.
        POST: Create a new resource.
        PUT: Update or replace an existing resource.
        PATCH: Partially update an existing resource.
        DELETE: Remove a resource. 
    Representations:
    Resources are represented in various formats, most commonly JSON (JavaScript Object Notation) or XML (Extensible Markup Language).
    Hypermedia as the Engine of Application State (HATEOAS):
    Resources can include links to related resources, guiding the client through the application's state transitions. 

Benefits of using REST APIs:

    Simplicity and Ease of Use:
    Leverages familiar HTTP protocols and concepts, making them relatively straightforward to design and consume.
    Scalability:
    Statelessness and client-server separation contribute to easier scaling of applications.
    Flexibility and Platform Independence:
    Clients can be developed in various programming languages and on different platforms.
    Loose Coupling:
    Client and server can evolve independently without tightly coupled dependencies.