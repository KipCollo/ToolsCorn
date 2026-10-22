# APIs

API is the acronym for `Application Programming Interface`, is a software intermediary that allows two applications to talk to each other.It refers to any interface that lets two software components communicate.It does NOT have to use the internet.
API is a boundary between one part of a software system and another. It defines a set of operations that one component provides for other parts of the system (or other systems) to use.
An API handles requests from clients on behalf of users. Clients may be web browsers, mobile apps, devices in the Internet of Things, or other APIs. The API services requests according to its internal logic and then at some point returns a response to the client. The implementation of the API may require talking to other “backend” APIs, provided by databases or processing systems.

Can be libraries, SDKs, OS interfaces, or web-based.
Examples:- Java API,Mobile Phone Camera API,Windows API,Payment API,(REST API, SOAP API (these are web APIs)).

Traditionally, an API was provided by a software library that could be linked into an application either statically or dynamically at runtime, allowing reuse of procedures and functions for specific problems, such as OpenGL for 3D graphics, or libraries for TCP/IP networking. Such APIs are still common, but a growing number of APIs are now made available over the internet as web apis.

A UI also provides a boundary to a software system and restricts the operations that can be performed. What distinguishes an API from a UI is that an API is explicitly designed to be easy to interact with by other software, while a UI is designed to be easy for a user to interact with directly.

- API intro
- API types - public ,private, partner, composite.
- API architecture - REST, GraphQL, SOAP, gRPC, WebSockets, WebHooks.
- API secutiry - Authentication, Rate limiting, Authorization, Encryption.
- API Design - RESTful conventions, versioning,pagination,HATEOS
  API Development
- API Documentation - OpenAPI & Swagger, Postman, Redoc, DapperDox, Slate, Readme
- API Testing - SoapUI, JMeter, Newman, Postman, Katalon studio, Insomnia, Pact, Rest-Assured.
  API Mocking and Virtualization
  API Governance
  API Monitoring

## Web APIs

A Web API is an interface that allows applications to interact with each other over HTTP or HTTPS protocols. It provides a set of rules and protocols for building and interacting with software applications. There are many types of Web APIs like REST and GraphQL
A Web API (Application Programming Interface) is a set of rules and protocols that allows different software applications to communicate with each other over the internet, typically using HTTP/HTTPS. It defines how clients (like web browsers or mobile apps) can request and receive data or functionality from a server

Web APIs are fundamental to modern web development, enabling the creation of dynamic, interactive, and interconnected applications.
Types of Web APIs:

1.  Browser APIs: Built directly into web browsers, these allow JavaScript to interact with browser functionalities and the surrounding computer environment (e.g., Web Audio API, Web Speech API, IndexedDB API).
2.  Third-party APIs: Provided by external services or platforms, enabling developers to integrate functionalities from those platforms into their own applications (e.g., Spotify Web API, Google Maps API).
3.  RESTful APIs: A specific architectural style for building Web APIs that adheres to the principles of Representational State Transfer (REST), emphasizing statelessness and the use of standard HTTP methods.

Key characteristics and concepts of Web APIs:

- `Client-Server Interaction`:- A client sends a request to a server, which processes the request and sends a response back to the client. This communication happens over a network.
- `Endpoints`:- Web APIs expose specific URLs (endpoints) that clients can access to perform different actions or retrieve different types of data.
- `HTTP Methods`:- Standard HTTP methods like GET (retrieve data), POST (create data), PUT (update data), and DELETE (remove data) are commonly used to define the type of action a client wants to perform on a resource.
- `Data Formats`:- Data exchanged between the client and server is typically formatted as JSON (JavaScript Object Notation) or XML, with JSON being the more prevalent choice due to its lightweight nature and ease of integration with JavaScript.
- `Statelessness (in RESTful APIs)`:- In the context of RESTful Web APIs, each request from a client to a server contains all the necessary information to understand the request, and the server does not store any client session state between requests.
- `Authorization and Authentication`:- Web APIs often require mechanisms to verify the identity of the client (authentication) and determine what actions they are authorized to perform (authorization), frequently using tokens or API keys.

A Web API is a broad term for an interface that allows two applications to interact over the HTTP/HTTPS protocol, which includes lightweight styles like REST, GraphQL, or WebSockets. A Web Service, traditionally, is a more restricted type of network-based interface that relies on specific W3C standards and stricter communication protocols (like SOAP).

There are several popular approaches to exposing remote APIs:

1. `Remote Procedure Call (RPC) APIs` expose a set of procedures or functions that can be called by clients over a network connection. The RPC style is designed to resemble normal procedure calls as if the API were provided locally. RPC APIs often use compact binary formats for messages and are very efficient, but usually require the client to install specific libraries (known as stubs) that work with a single API. The gRPC framework from Google (https://grpc.io) is an example of a modern RPC approach. The older SOAP (Simple Object Access Protocol) framework, which uses XML for messages, is still widely deployed.
2. A variant of the RPC style known as `Remote Method Invocation (RMI)` uses object-oriented techniques to allow clients to call methods on remote objects as if they were local. RMI approaches used to be very popular, with technologies such as CORBA and Enterprise Java Beans (EJBs) often used for building large enterprise systems. The complexity of these frameworks has led to a decline in their use.
3. The `REST (REpresentational State Transfer)` style was developed by Roy Fielding to describe the principles that led to the success of HTTP and the web and was later adapted as a set of principles for API design. In contrast to RPC, RESTful APIs emphasize standard message formats and a small number of generic operations to reduce the coupling between a client and a specific API. Use of hyperlinks to navigate the API reduce the risk of clients breaking as the API evolves over time.
   `REST API` - A REST API is a type of Web API that adheres to the principles of REST. REST principles emphasize statelessness, easy-to-use and self-descriptive messages, and a layered structures to facilitate the caching of components to help scaling.
4. Some APIs are mostly concerned with efficient querying and filtering of large data sets, such as SQL databases or the `GraphQL framework` from Facebook (https://graphql.org). In these cases, the API often only provides a few operations and a complex query language allows the client significant control over what data is returned.
   `GraphQL API` - GraphQL is a query language for APIs that provide a more flexible and efficient approach to data retrieval. REST exposes multiple endpoints for different resources, but GraphQL exposes a single endpoint for all interactions. This single endpoint allows clients to request exactly the data they need, down to individual fields on objects.
5. `MQTT` - Lightweight messaging protocol ideal for low-bandwidth networks, popular IoT scenarios.

Different API styles are suitable for different environments. For example, an organization that has adopted a microservices architecture might opt for an efficient RPC framework to reduce the overhead of API calls. This is appropriate because the organization controls all of the clients and servers in this environment and can manage distributing new stub libraries when they are required. On the other hand, a widely used public API might be better suited to the REST style using a widely used format such as JSON to maximize interoperability with different types of clients.

**Web Services** - Web services are a standardized way for different software applications to communicate with each other over a network, typically the internet, by exchanging messages. They enable interoperable machine-to-machine interaction and can be built on different platforms and written in different languages, making them ideal for connecting diverse systems in distributed applications. Web services use protocols like SOAP and technologies like XML and WSDL to define, describe, and discover their functions.

A web service is a set of open protocols and standards that allow data to be exchanged between different applications or systems. Web services can be used by software programs written in a variety of programming languages and running on a variety of platforms to exchange data via computer networks such as the Internet in a similar way to inter-process communication on a single computer.

Any software, application, or cloud technology that uses standardized web protocols (HTTP or HTTPS) to connect, interoperate, and exchange data messages – commonly XML (Extensible Markup Language) – across the internet is considered a web service.
Web services have the advantage of allowing programs developed in different languages to connect with one another by exchanging data over a web service between clients and servers. A client invokes a web service by submitting an XML request, which the service responds with an XML response.

Mostly, there are two kinds of Web Services that should be remembered in your next API testing interview:

1. SOAP (Simple Object Access Protocol) – an XML-based method to expose web services.
2. Web services developed in the REST style are referred to as RESTful web services. These web services use HTTP methods to implement the concept of REST architecture. A RESTful web service usually defines a URI, Uniform Resource Identifier a service, that provides resource representation like JSON and a set of HTTP methods.

Web services are services available over the web.Components of web services:-

1. WSDL
2. UDDI

How they work:-

- Communication: A client application sends a request to the web service.
- Protocol: The request is sent over standard protocols, most commonly HTTP, with the message formatted in a standardized way (e.g., XML for SOAP).
- Description: The web service's capabilities are described in a file, often using Web Services Description Language (WSDL). This file provides all the details needed for another application to interact with the service.
- Interaction: The client uses the WSDL to understand the message format and operations and sends a message to the service's endpoint (a specific URL).
- Response: The web service processes the request and sends back a response, typically in XML format.

Key characteristics

1. `Interoperability`: They are built on open standards, allowing applications written in different programming languages and running on different operating systems to communicate seamlessly.
2. `Standardized protocols`: They use standard message protocols like SOAP and transport protocols like HTTP to ensure universal understanding.
3. `XML-based`: They use XML to format messages for structured data exchange.
4. `Decoupled`: Applications are loosely-coupled, meaning they can be updated independently without affecting the other party, as long as the interface remains the same.

Common uses

- Connecting diverse systems: Integrating different applications, such as a Java application on Linux with a .NET application on Windows.
- Building distributed applications: Creating applications that span multiple systems and platforms.
- Providing APIs: Offering a public or private interface for other developers to use a service's functionality.
- Enabling mashups: Combining different web services and content to create new applications.

Service Providers publishes an interface for web services that describes all attributes of the web service.This is XML based interface and is called Web Services Descriptive Language(WSDL).
A web service provider publishes web service(through WSDL) on an online directory from where consumers can query and search the web services.This online registry/directory is called UUID(Universal Description,Discovery and Integration).

WSDL exists in SOAP but not in REST, and why REST is still considered a web service even without WSDL.REST meets that definition because:

1. It runs over HTTP.
2. It exposes endpoints.
3. It allows interoperable communication
4. It returns data (JSON/XML)

So REST is a type of web service, just like SOAP.

SOAP = Protocol

SOAP web services follow strict standards:

- WSDL (Web Services Description Language) required
- Describes operations, messages, data types, bindings, location
- Similar to a contract between client and server

SOAP without WSDL is basically invalid.

REST = Architectural Style

REST is flexible and lightweight.
It does not require WSDL because it doesn’t strictly define operations or message formats.
Instead, REST uses:

- HTTP methods to describe actions GET, POST, PUT, DELETE
- URL paths to represent resources
- JSON to exchange data
- OpenAPI/Swagger as optional documentation (not required)

REST Doesn’t Use WSDL because REST is based on the concept of resources, not functions.
SOAP uses functions/operations so it needs WSDL to define them.

- Web services should have a higher level of security than the Secure Socket Layer (SSL) (SSL). Entrust Secure Transaction Platform is the only way to attain this level of security. This level of security is required for web services in order to assure dependable transactions and secure confidential information.

soap--->wsdl------xml
rest---->swagger--json/yaml

- URL-Uniform Resource locator e.g <https://www.collo.com>
- URI -Uniform Resource Identifier e.g <https://www.collo.com/resource1>, <https://www.collo.com/resource1/rest>.It can be one-to-one or many-to-one resource locator.It cant be many-to-one.

### SOAP

Simple Object Access Protocol (SOAP) is a message protocol for exchanging information between systems and applications. When it comes to application programming interfaces (APIs), a SOAP API is developed in a more structured and formalized way. SOAP messages can be carried over a variety of lower-level protocols, including the web-related Hypertext Transfer Protocol (HTTP),SMTP.

- SOAP (Simple Object Access Protocol)(JAXWS)

SOAP stands for “Simple Object Access Protocol.” It is a transport-independent messaging protocol. SOAP is built on sending XML data in the form of SOAP Messages. A document known as an XML document is attached to each message. Only the structure of the XML document, not the content, follows a pattern. The best thing about Web services and SOAP is that everything is sent through HTTP, the standard web protocol.

A root element known as the element is required in every SOAP document. In an XML document, the root element is the first element. The “envelope” is separated into two halves. The header comes first, followed by the body. The routing data, or information that directs the XML document to which client it should be sent to, is contained in the header. The real message will be in the body.

- UDDI (Universal Description, Discovery, and Integration)

UDDI is a standard for specifying, publishing and discovering a service provider’s online services. It provides a specification that aids in the hosting of data via web services. UDDI provides a repository where WSDL files can be hosted so that a client application can discover a WSDL file to learn about the various actions that a web service offers. As a result, the client application will have full access to the UDDI, which serves as a database for all WSDL files.
The UDDI registry will hold the required information for the online service, just like a telephone directory has the name, address, and phone number of a certain individual. So that a client application may figure out where it is.

- WSDL (Web Services Description Language)

If a web service can’t be found, it can’t be used. The client invoking the web service should be aware of the location of the web service. Second, the client application must understand what the web service does in order to invoke the correct web service. The WSDL, or Web services description language, is used to accomplish this. The WSDL file is another XML-based file that explains what the web service does to the client application. The client application will be able to understand where the web service is located and how to use it by using the WSDL document.

---

### REST

REST is an acronym for REpresentational State Transfer and an architectural style for distributed hypermedia systems. Roy Fielding first presented it in 2000 in his famous dissertation. Since then, it has become one of the most widely used approaches for building web-based APIs (Application Programming Interfaces).
REST, or REpresentational State Transfer, is an architectural style for providing standards between computer systems on the web, making it easier for systems to communicate with each other.

A REST API (Representational State Transfer Application Programming Interface) is an architectural style for designing networked applications, particularly web services. It utilizes standard web protocols, primarily HTTP, to facilitate communication between different software systems.

A REST API provides endpoints that allow clients to communicate with a server over the internet. Each endpoint represents a specific resource or action, such as retrieving data,creating new data, updating existing data, or deleting data. Clients send requests to these endpoints using HTTP methods like GET, POST, PUT, PATCH, and DELETE, and the server responds with the requested data or performs the requested action.

This client-server communication follows the principles of REST (Representational State Transfer), which emphasizes statelessness, a uniform interface, and resource-based interactions.

REST APIs leverage standard HTTP methods (verbs) to perform operations on resources. So, in total, REST APIs support these seven HTTP methods:

1. GET – Retrieve data (with response body). Retrieve a resource or collection of resources
2. POST – Create a new resource.
3. PUT – Update/replace an existing resource.
4. PATCH – Partially update an existing resource.
5. DELETE – Remove a resource.
6. OPTIONS – Fetch allowed HTTP methods for a resource.
7. HEAD – Retrieve only headers (without response body).

_Benefits of using REST APIs_:

1. Simplicity and Ease of Use:- Leverages familiar HTTP protocols and concepts, making them relatively straightforward to design and consume.
2. Scalability:- Statelessness and client-server separation contribute to easier scaling of applications.
3. Flexibility and Platform Independence:- Clients can be developed in various programming languages and on different platforms.
4. Loose Coupling:- Client and server can evolve independently without tightly coupled dependencies.

REST is not a protocol or a standard, it is an architectural style. During the development phase, API developers can implement REST in a variety of ways.Like the other architectural styles, REST also has its guiding principles and constraints. These principles must be satisfied if a service interface is to be referred to as RESTful.

REpresentational State Transfer (REST) is an architectural style that defines a set of constraints to be used for creating web services. REST API is a way of accessing web services in a simple and flexible way without having any processing.
REST technology is generally preferred to the more robust Simple Object Access Protocol (SOAP) technology because REST uses less bandwidth, simple and flexible making it more suitable for internet usage. It’s used to fetch or give some information from a web service. All communication done via REST API uses only HTTP request.

In HTTP there are five methods that are commonly used in a REST-based Architecture i.e., POST, GET, PUT, PATCH, and DELETE. These correspond to create, read, update, and delete (or CRUD) operations respectively. There are other methods which are less frequently used like OPTIONS and HEAD.

- What is a resource -Understand resource as the concept of a user. Don't think about the table in your database, think about an abstraction of a user with their set of attributes.
- What is a representation in my example?-A JSON document can be used to represent the state of a particular resource. A resource can have many representations, such as JSON and/or XML documents, and the client can use content negotiation to request different representations of the same resource.
- What is a state transfer or when does this happens in my example?-The state of a given resource can be retrieved and manipulated using representations.

A GET request, for example, allows you to retrieve a representation of the state of a resource, sent in the response payload. A PUT request, for example, allows you to replace the state of a resource with the state defined by the representation enclosed in the request payload.

Consider a user resource with attributes such as id and name stored somehow in your server:

```
ID: 1
Name: John Doe
```

These details make the state of the resource.

A URL such as /users/1 can be used to locate the resource in your server.

Requests such as GET, PUT and DELETE can be performed against this URL to retrieve/manipulate the state of the resource using representations, such as JSON and/or XML documents (other representations can be supported according to your needs):

```json
{
  "id": 1,
  "name": "John Doe"
}
```

```xml
<user>
  <id>1</id>
  <name>John Doe</name>
</user>
```

Old web features included; HTTP,Methods & URL.REST API extended the features and added Resource,URI,Representation,Uniform Interface & HATEOAS

1. Resource- A resource can be any object the API can offer info about.i.e interface,images,file,method & database
2. URI-A Uniform Resource Identifier (URI), formerly Universal Resource Identifier, is a unique sequence of characters that identifies an abstract or physical resource,
   such as resources on a webpage, mail address, phone number,books, real-world objects such as people and places, concepts.
3. Representation- client and server exchange representations of a resource, which reflect its current state or its desired state. REST is a way for two machines to transfer the state of a resource via representations.Format request and response data is rep.i.e json,xml,text,html
4. Uniform Interface-
5. HATEOAS-

- When apps follow the above principles;it becomes resful services

When designing REST over HTTP, URLs are used to locate the resources, HTTP methods are used to express the operations over the resources and representations such as JSON and/or XML documents are used to represent the state of the resource. HTTP headers can be used to exchange some metadata about the request and response while HTTP status code are used to inform the client regarding the status of the operation.

**Principles of REST** - REST is based on some constraints and principles that promote simplicity, scalability, and statelessness in the design. The six guiding principles or constraints of the RESTful architecture are:

1. `Uniform Interface` - By applying the principle of generality to the components interface, we can simplify the overall system architecture and improve the visibility of interactions.Uses standard HTTP methods and URIs for interaction - Identification of resources,Manipulation of resources through these representations,self-descrptive messages,Hypermedia As The Engine Of Application State(HATEOS).Multiple architectural constraints help in obtaining a uniform interface and guiding the behavior of components.
   The following four constraints can achieve a uniform REST interface:
   - Identification of resources – The interface must uniquely identify each resource involved in the interaction between the client and the server.
   - Manipulation of resources through representations – The resources should have uniform representations in the server response. API consumers should use these representations to modify the resource state in the server.
   - Self-descriptive messages – Each resource representation should carry enough information to describe how to process the message. It should also provide information on the additional actions that the client can perform on the resource.
   - Hypermedia as the engine of application state – The client should have only the initial URI of the application. The client application should dynamically drive all other resources and interactions with the use of hyperlinks.

In simpler words, REST defines a consistent and uniform interface for interactions between clients and servers. For example, the HTTP-based REST APIs make use of the standard HTTP methods (GET, POST, PUT, DELETE, etc.) and the URIs (Uniform Resource Identifiers) to identify resources.

2. `Client-Server` - The client-server design pattern enforces the separation of concerns, which helps the client and the server components evolve independently.By separating the user interface concerns (client) from the data storage concerns (server), we improve the portability of the user interface across multiple platforms and improve scalability by simplifying the server components.
   While the client and the server evolve, we have to make sure that the interface/contract between the client and the server does not break.

3. `Stateless` - Statelessness mandates that each request from the client to the server must contain all of the information necessary to understand and complete the request.The server cannot take advantage of any previously stored context information on the server.For this reason, the client application must entirely keep the session state.
4. `Cacheable` - The cacheable constraint requires that a response should implicitly or explicitly label itself as cacheable or non-cacheable.If the response is cacheable, the client application gets the right to reuse the response data later for equivalent requests and a specified period.Responses can be cached to improve performance.
5. `Layered System` - The layered system style allows an architecture to be composed of hierarchical layers by constraining component behavior. In a layered system, each component cannot see beyond the immediate layer they are interacting with.APIs can have multiple layers for security, load balancing, etc. A layman’s example of a layered system is the MVC pattern. The MVC pattern allows for a clear separation of concerns, making it easier to develop, maintain, and scale the application.
6. `Code on Demand (Optional)` - REST also allows client functionality to be extended by downloading and executing code in the form of applets or scripts.The downloaded code simplifies clients by reducing the number of features required to be pre-implemented. Servers can provide part of the features delivered to the client in the form of code, and the client only needs to execute the code.

A Web API (or Web Service) conforming to the REST architectural style is called a REST API (or RESTful API).

**Resource** - The key abstraction of information in REST is a resource. Any information that we can name can be a resource. For example, a REST resource can be a document or image, a temporal service, a collection of other resources, or a non-virtual object (e.g., a person).

The state of the resource at any particular time is known as the resource representation. The resource representations consist of:- `the data`, `the metadata describing the data` and `the hypermedia links that can help the clients transition to the next desired state`.
A REST API consists of an assembly of interlinked resources. This set of resources is known as the REST API’s resource model.

_Resource Identifiers_ - REST uses resource identifiers to identify each resource involved in the interactions between the client and the server components.
_Hypermedia_ - The data format of a representation is known as a media type. The media type identifies a specification that defines how a representation is to be processed.

A RESTful API looks like hypertext. Every addressable unit of information carries an address, either explicitly (e.g., link and id attributes) or implicitly (e.g., derived from the media type definition and representation structure).
Hypertext (or hypermedia) means the simultaneous presentation of information and controls such that the information becomes the affordance through which the user (or automaton) obtains choices and selects actions.

Remember that hypertext does not need to be HTML (or XML or JSON) on a browser. Machines can follow links when they understand the data format and relationship types.

_Self-Descriptive_ - Further, resource representations shall be self-descriptive: the client does not need to know if a resource is an employee or a device. It should act based on the media type associated with the resource.So in practice, we will create lots of custom media types – usually one media type associated with one resource.
Every media type defines a default processing model. For example, HTML defines a rendering process for hypertext and the browser behavior around each element.

Media Types have no relation to the resource methods GET/PUT/POST/DELETE/… other than the fact that some media type elements will define a process model that goes like “anchor elements with an href attribute create a hypertext link that, when selected, invokes a retrieval request (GET) on the URI corresponding to the CDATA-encoded href attribute.”

In simpler words, REST defines a consistent and uniform interface for interactions between clients and servers. For example, the HTTP-based REST APIs make use of the standard HTTP methods (GET, POST, PUT, DELETE, etc.) and the URIs (Uniform Resource Identifiers) to identify resources.

**HATEOAS** is an acronym for Hypermedia As The Engine Of Application State, it's the concept that when sending information over a RESTful API the document received should contain everything the client needs in order to parse and use the data i.e they don't have to contact any other endpoint not explicitly mentioned within the Document.

**Resource Design**:- The resource should always be prural nouns in the API endpoint and is one instance resource should be retrieved,pass the id in the URL.
(GET /accounts, GET /accounts/1).
In case of nested resources(resource under resource),the resources should be accessible as follows.(GET /accounts/1/payments/56).
Use the HTTP methods to specify what to do with resources.With methods GET,POST,PUT,PATCH,DELETE you can provide CRUD functionality(Create,Read,Update,Delete).

An idempotent operation means that making multiple identical requests will not change the server state beyond the first request.
Idempotent methods: GET, PUT, DELETE, HEAD, OPTIONS
Non-idempotent methods: POST, PATCH

Example: Calling DELETE /users/123 multiple times should delete the user once and return the same response.

Securing a REST API-

1. Authentication: Use OAuth 2.0, JWT, or API keys
2. Authorization: Implement role-based access control (RBAC)
3. CORS (Cross-Origin Resource Sharing): Restrict API access to trusted origins
4. Rate Limiting & Throttling: Prevent abuse by limiting API calls.API rate limiting restricts the number of API requests a user or client can make in a specific time period. Example: 1000 requests per hour per user.Used to prevent abuse and ensure fair usage.
5. Input Validation & Sanitization: Prevent SQL Injection, XSS attacks
6. HTTPS: Encrypt data in transit.

Types of API authentication methods:-

- Basic Authentication – Uses username: password (Base64 encoded).
- Bearer Token Authentication – Uses a token in the Authorization header.
- OAuth 2.0 – Secure authorization framework for third-party access.
- JWT (JSON Web Token) – Used for stateless authentication.
- API Keys – A unique key provided to authenticate requests.

Data format - XML, JSON, HTML,plain text.
Uses Standard HTTP methods for resource manipulation, making it stateless and efficient.

### gRPC

gRPC is a high-performance, open source universal RPC framework from Google.Uses Protocol Buffers for data serialization and provides a structured and strongly-typed contract for services.

RPC stands for Remote Procedure Call, there's an ongoing debate on what the g stands for. RPC is a protocol that allows a program to execute a procedure of another program located on another computer. The great advantage is that the developer doesn’t need to code the details of the remote interaction. The remote procedure is called like any other function. But the client and the server can be coded in different languages.

Visit the following resources to learn more:

- [gRPC Website](https://grpc.io/)
- [gRPC Docs](https://grpc.io/docs/)
- [What Is GRPC?](https://www.wallarm.com/what/the-concept-of-grpc)
- [What Is GRPC?](https://www.youtube.com/watch?v=hVrwuMnCtok)

Data format - JSON, XML,Protobuf, Thrift, FlatBuffers.

### Graphql

GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.

GraphQL is a query language and runtime system for APIs (application programming interfaces).It is used to build and consume web service APIs. It is designed to provide a flexible and efficient way for clients to request data from servers, and it is often used as an alternative to REST (representational state transfer) APIs.

One of the main features of GraphQL is its ability to specify exactly the data that is needed, rather than receiving a fixed set of data from an endpoint. This allows clients to request only the data that they need, and it reduces the amount of data that needs to be transferred over the network.

GraphQL also provides a way to define the structure of the data that is returned from the server, allowing clients to request data in a predictable and flexible way. This makes it easier to build and maintain client applications that depend on data from the server.

GraphQL is widely used in modern web and mobile applications, and it is supported by a large and active developer community.
Data formats - JSON.

Visit the following resources to learn more:

- [GraphQL Official Website](https://graphql.org/)
- [The Fullstack Tutorial for GraphQL](https://www.howtographql.com/)
- [GraphQL Tutorials](https://odyssey.apollographql.com/)
- [GraphQL Course for Beginners](https://www.youtube.com/watch?v=ed8SzALpx1Q)

GraphQL allows clients to make a single API call to request exactly the data they need, in a predictable format. This allows for more efficient and flexible data retrieval, compared to traditional REST APIs where the client has to make multiple API calls to different endpoints, and may receive more data than it needs.

With GraphQL, the client defines the structure of the data it needs, by sending a query to the server. The server then returns the requested data in the same structure, as defined by the query. The client can also make mutations to update or create data on the server.

To learn more, visit the following links:

- [@official@Introduction to GraphQL](https://graphql.org/learn/)
- [@official@Getting started with GraphQL](https://graphql.org/)
- [@feed@Explore top posts about GraphQL](https://app.daily.dev/tags/graphql?ref=roadmapsh)

GraphQL is a query language for your API, and a server-side runtime for executing queries using a type system you define for your data. GraphQL isn't tied to any specific database or storage engine and is instead backed by your existing code and data.

A GraphQL service is created by defining types and fields on those types, then providing functions for each field on each type.

- [@article@Tutorial - What is graphQL?](https://www.howtographql.com/basics/0-introduction/)
- [@feed@Explore top posts about GraphQL](https://app.daily.dev/tags/graphql?ref=roadmapsh)

_Problems GraphQL Solves_ - GraphQL solves several problems commonly faced when building APIs, including:

1. `Over-fetching`: With REST APIs, the client often receives more data than it needs, resulting in wasted bandwidth and slow performance. GraphQL allows the client to specify exactly the data it needs, reducing over-fetching.
2. `Under-fetching`: With REST, the client often has to make multiple requests to different endpoints to gather all the data it needs, resulting in additional latency and complexity. GraphQL allows the client to request all the necessary data in a single request.
3. `Inefficient versioning`: With REST, creating a new endpoint for each version of an API can quickly become cumbersome and hard to maintain. GraphQL allows for seamless versioning by adding new fields and types, rather than creating new endpoints.
4. `Lack of flexibility`: REST APIs are typically fixed, meaning that the client has to work with the data structure provided by the API. GraphQL allows the client to request exactly the data it needs and receive it in a predictable format, increasing flexibility.

_Thinking in Graphs_ - "Thinking in Graphs" is a mindset or approach when working with GraphQL. It refers to the way that data is organized and queried in GraphQL, which is based on the concept of a graph.

In GraphQL, data is represented as a graph, where nodes represent objects and edges represent relationships between them. This allows for a more flexible and intuitive way of querying data, as the client can specify exactly the data it needs by following the relationships between nodes in the graph.

- [@official@GraphQL - Thinking in Graphs](https://graphql.org/learn/thinking-in-graphs/)

_GraphQL on the Frontend_ - In GraphQL, the frontend refers to the client-side of the application, typically the web or mobile app that the end-user interacts with.
When using GraphQL on the frontend, developers can use a GraphQL client library, such as Apollo Client or Relay, to interact with the GraphQL server. These libraries provide a way to easily send GraphQL queries and mutations to the server and handle the response.

By using GraphQL on the frontend, developers can benefit from the flexibility and efficiency of GraphQL when querying data. Instead of having to make multiple REST API calls or hardcode data into the frontend, the client can specify exactly the data it needs in a single request, and the server will return it in a predictable format.

- [@article@Get started with GraphQL on the frontend](https://www.howtographql.com/react-apollo/0-introduction/)
- [@feed@Explore top posts about Frontend Development](https://app.daily.dev/tags/frontend?ref=roadmapsh)

_GraphQL on the Backend_ - In GraphQL, the backend refers to the server-side of the application, where the data is stored and processed.
When using GraphQL on the backend, developers can create a GraphQL server that handles the incoming GraphQL queries and mutations from the frontend. This can be implemented using a GraphQL library or framework, such as Apollo Server, Express-GraphQL, or GraphQL-Java.

The GraphQL server is responsible for handling the incoming queries and mutations, validating them against a schema, and executing them by fetching data from the database or other data sources. The server then returns the requested data to the client in a predictable format, as defined by the schema.

Learn more from the following links:

- [@article@How to use GraphQL in Backend?](https://www.howtographql.com/)
- [@feed@Explore top posts about Backend Development](https://app.daily.dev/tags/backend?ref=roadmapsh)

**GraphQL Queries** - GraphQL is a query language for APIs. It provides a simple and flexible syntax for making requests to a server to retrieve specific data. In GraphQL, a query is a request made to the server to fetch data. The query specifies the fields of the data that should be returned, and the server responds with the requested data.

A GraphQL query is structured as a single object, with a "query" or "mutation" field at the top level. The "query" field is used to retrieve data, while the "mutation" field is used to make changes to the data. The query is written in a specific format and is executed by the server to retrieve the requested data.

- [@official@What are GraphQL Queries?](https://graphql.org/learn/queries/)
- [@feed@Explore top posts about GraphQL](https://app.daily.dev/tags/graphql?ref=roadmapsh)

In GraphQL, a query is a request made by the client to the server to retrieve data. Queries are used to fetch data from the server and are structured as a hierarchical tree of fields, which correspond to the properties of the data being requested.

Learn more from following links:

- [@official@Introduction of GraphQL - Query](https://graphql.org/learn/queries/)

_Fields_ - In GraphQL, fields are the individual pieces of data that can be queried or modified. They represent the properties of the data being requested or modified, and are the building blocks of queries and mutations.

Fields are defined in the GraphQL schema, which is a blueprint of the data that can be queried and modified. The schema defines the types of data that can be queried, and the fields that are available for each type.

- [@official@GraphQL: Types and Fields](https://graphql.org/learn/queries/#fields)

_Aliases_ - Aliases in GraphQL are a way to rename fields when they are requested in a query. They are useful in situations where a field is requested multiple times, but with different arguments, or when the field has a name that is not suitable for the client's usage. They make it easy to distinguish and work with fields in the response and make the query more readable.

- [@official@What are GraphQL Aliases?](https://graphql.org/learn/queries/#aliases)

_Arguments_ - Arguments in GraphQL are pieces of information that are passed to a field or a directive to specify additional details about how the field should be executed. They can be used to filter, sort, or paginate data, or to specify additional options when creating, updating, or deleting data. They can be passed as key-value pairs, defined as variables, and can be optional or required.

- [@official@GraphQL - Arguments](https://graphql.org/learn/queries/#arguments)

_Directives_ - Directives in GraphQL are a way to modify the execution of a query or a field. They are used to add additional behavior or validation to a query or a field, and can be applied to fields, operations (queries and mutations) and fragments. Directives can take one or more arguments to configure their behavior, and can be defined by the developer or used one of the built-in directives provided by GraphQL.

- [@official@Directives in GraphQL](https://graphql.org/learn/queries/#directives)

_Variables_ - Variables in GraphQL are a way to pass dynamic values to a query or a mutation. They allow the client to make a query more dynamic and flexible by passing in different values for the same argument. They are defined in the query or mutation using the **$** symbol followed by the variable name and a type, and their values must be passed in a separate JSON object. They also are type-safe, this means that variables must be passed values that are of the same type as defined in the query.

- [@article@GraphQL Variables](https://dgraph.io/docs/graphql/api/variables/)
- [@official@Intro to Variables in GraphQL](https://graphql.org/learn/queries/#variables)

_Fragments_ - In GraphQL, a fragment is a reusable piece of a GraphQL query that can be used to retrieve specific fields from one or more types of data. A fragment is defined using the "fragment" keyword, followed by the name of the fragment and the type of data it is querying. The fields to be retrieved are then specified within curly braces.

- [@official@Intro to Fragments in GraphQL](https://graphql.org/learn/queries/#fragments)

**Mutations** - In GraphQL, a mutation is a type of query used to make changes to the data on the server, such as creating, updating, or deleting data. A mutation is structured similarly to a query, but with a "mutation" field at the top level instead of a "query" field.

The mutation includes fields that specify the data to be changed, the operation to be performed (create, update or delete) and also can include arguments to specify the specific data to be affected.

- [@official@Getting started with Mutations](https://graphql.org/learn/queries/#mutations)

In GraphQL, a mutation is a type of query used to make changes to data on the server. It is used to create, update, or delete data, and is structured similarly to a query, but with a "mutation" field at the top level instead of a "query" field.

A mutation typically includes fields that specify the data to be changed and the operation to be performed (e.g. "create", "update", or "delete"). It can also include arguments to specify the specific data to be affected.

_Multiple Mutation Fields_ - In GraphQL, it is possible to perform multiple mutations in a single query by including multiple "mutation" fields in the query. This is called "batching" or "chaining" mutations.

- [@official@Guide to Multiple fields in mutations](https://graphql.org/learn/queries/#multiple-fields-in-mutations)

_Operation Name_ - In GraphQL, an operation name is an optional identifier that can be used to uniquely identify a query or a mutation in a document containing multiple operations. It can be used to provide more meaningful names for operations, making it easier to understand the purpose of the operation and to identify it in the event of an error.

- [@official@Intro to Operation Name](https://graphql.org/learn/queries/#operation-name)

**Subscriptions** - In GraphQL, subscriptions are a way to push real-time updates to the client. They allow a client to subscribe to a specific event or data change on the server, and receive updates in real-time as soon as the event occurs or the data changes.

Subscriptions are defined on the server and are structured similar to queries and mutations. They have a "subscription" field at the top level, followed by the fields that define the event or data change to be subscribed to.

- [@article@How GraphQL Subscriptions Work?](https://the-guild.dev/blog/subscriptions-and-live-queries-real-time-with-graphql)

In GraphQL, subscriptions are a way to push real-time updates to the client. They allow a client to subscribe to specific events or data changes on the server, and receive updates in real-time as soon as the event occurs or the data changes. Subscriptions are defined on the server and are structured similarly to queries and mutations.

A subscription includes a "subscription" field at the top level, followed by the fields that define the event or data change to be subscribed to. The client can initiate the subscription by sending the subscription query to the server, and the server will keep the connection open, listening for new events or data changes. Once the event occurs, or the data changes, the server will send the updated data to the client through the open connection.

- [@article@Subscriptions and Live Queries - Real Time with GraphQL](https://the-guild.dev/blog/subscriptions-and-live-queries-real-time-with-graphql)

_Event Based Subscriptions_ - Event-based subscriptions in GraphQL are a way to push real-time updates to the client based on specific events that occur on the server. These events can be triggered by external sources such as user actions, sensor data, or other systems, or by internal actions such as database updates.

With event-based subscriptions, the client can subscribe to a specific event or set of events and receive updates in real-time as soon as the event occurs. This allows the client to receive notifications about important changes in the system without the need to constantly poll the server for updates.

_Live Queries_ - In GraphQL, live queries, also known as "real-time queries" or "subscriptions to queries", is a way to push real-time updates to the client, when the data that is being queried changes on the server. It allows the client to subscribe to a specific query and receive updates in real-time as soon as the data changes.

With live queries, the client can subscribe to a specific query and receive updates when the data that is being queried changes on the server. The client can also specify the fields and arguments of the query, and the server will only send updates for the fields that the client has requested.

- [@article@GraphQL Live Queries](https://the-guild.dev/blog/collecting-graphql-live-query-resource-identifier-with-graphql-tools)

_Defer Stream Directives_ - In GraphQL, the "defer" and "stream" directives are used to control the handling of fields and their associated data. These directives allow developers to control how data is fetched and sent over the network, and can be used to optimize the performance of a GraphQL API.

The "defer" directive is used to delay the fetching of a field's data until the data is actually needed by the client. This can be useful for improving the performance of an API by reducing the amount of data that needs to be fetched upfront.

- [@article@Defer and Stream in GraphQL](https://the-guild.dev/graphql/yoga-server/docs/features/defer-stream)

**Schema** - In GraphQL, a schema is a blueprint that defines the types, fields, and operations (queries and mutations) that are available to clients. The schema is the contract between the client and the server, specifying what data can be requested and how it can be modified.

A GraphQL schema is defined using the GraphQL Schema Definition Language (SDL), which is a human-readable syntax for defining the structure of a GraphQL API. The SDL includes keywords such as **type**, **query**, **mutation**, **field**, and **argument** to define the different components of a schema.

- [@official@Get started with Schema](https://graphql.org/learn/schema/)

`Type System` - GraphQL is a strongly typed language. Type System defines various data types that can be used in a GraphQL application. The type system helps to define the schema, which is a contract between client and server. The commonly used GraphQL data types are as follows:

- Scalar
- Object
- Query
- Mutation
- Enum

- [@official@Get started with Type system](https://graphql.org/learn/schema/#type-system)

_Fields_ - In GraphQL, a field is a unit of data that can be queried or manipulated in a request. Each field has a name, a type, and an optional description. Fields are defined within an object type in a GraphQL schema.

Each field in a GraphQL schema can return a scalar value (such as a string or an integer) or another object, allowing for the creation of complex, nested data structures. The fields can also take arguments, which allows to filter or modify the data being returned.

- [@official@GraphQL: Types and Fields](https://graphql.org/learn/queries/#fields)

_Scalars_ - Scalars are “leaf” values in GraphQL. There are several built-in scalars, and you can define custom scalars, too. (Enums are also leaf values.) The built-in scalars are:

- String, like a JSON or Ruby string
- Int, like a JSON or Ruby integer
- Float, like a JSON or Ruby floating point decimal
- Boolean, like a JSON or Ruby boolean (true or false)
- ID, which a specialized String for representing unique object identifiers
- ISO8601DateTime, an ISO 8601-encoded datetime
- ISO8601Date, an ISO 8601-encoded date
- JSON, This returns arbitrary JSON (Ruby hashes, arrays, strings, integers, floats, booleans and nils). Take care: by using this type, you completely lose all GraphQL type safety. Consider building object types for your data instead.
- BigInt, a numeric value which may exceed the size of a 32-bit integer

- [@official@Get started with Scalars in GraphQL](https://graphql.org/learn/schema/#scalar-types)

_Enums_ - Enums also called as enumeration types are a special kind of scalar that is restricted to a particular set of allowed values. This allows you to:

- Validate that any arguments of this type are one of the allowed values
- Communicate through the type system that a field will always be one of a finite set of values

- [@official@What are Enums?](https://graphql.org/learn/schema/#enumeration-types)

_Objects_ - In GraphQL, an object is a type that represents a group of fields. Objects can be used to define the structure of a query or a mutation. Each field of an object can return a scalar value (such as a string or an integer) or another object, allowing for the creation of complex, nested data structures. In a GraphQL schema, objects are defined using the **type** keyword, followed by the object's name and a set of fields in curly braces.

- [@official@Object Types and Fields](https://graphql.org/learn/schema/#object-types-and-fields)
- [@official@Object Types](https://graphql.org/graphql-js/object-types/)

_Lists_ - In GraphQL, a list is a type that represents an ordered collection of items. Lists are defined using square brackets, with the type of the items inside.
Lists are used to represent an array of items in a GraphQL schema, and can be used as the return type for a field in an object type. Lists can contain any type of items, including scalars and other objects, and can also be nested within other lists.

- [@official@Get started with Lists](https://graphql.org/learn/schema/#lists-and-non-null)

_Interfaces_ - In GraphQL, an interface is a type that defines a set of fields that a type must implement. Interfaces are defined using the interface keyword, and can be used to define common fields for multiple types.

In GraphQL, lists can also be used within interfaces to define the return type for fields.

- [@official@Get started with Interfaces](https://graphql.org/learn/schema/#interfaces)

_Unions_ - Unions are useful in cases where a field can return multiple types and you want to handle those types differently in your client. They also allow for more flexibility in how you structure your schema, as you can group types together that share common fields.

Unions don't allow to specify a common set of fields to be queried across multiple types, but it allows to handle multiple types differently in your client.

- [@official@Get started with Union in GraphQL](https://graphql.org/learn/schema/#union-types)

_Arguments_ - In GraphQL, an argument is a value that is passed to a field in a query or mutation. Arguments allow you to filter or modify the data being returned by a field. Arguments are defined within a field in a GraphQL schema, and have a name, a type, and an optional default value.

To learn more, visit the following links:

- [@official@Get started with Arguments in GraphQL](https://graphql.org/learn/schema/#arguments)

**Execution** - In GraphQL, execution refers to the process of executing a query or mutation and returning the result to the client. The execution process includes several steps such as parsing, validation, and data retrieval, that are performed by the GraphQL engine to produce the final response to the client.

- [@official@Get Started with Execution in GraphQL](https://graphql.org/learn/execution/)
- [@official@Intro to Execution](https://graphql.org/graphql-js/execution/)

_Root Fields_ - In GraphQL, the root fields are the top-level fields that are available to clients in a query or mutation. They are defined in the schema and are the entry point for client requests. The root fields represent the operations that can be performed on the data, such as querying for data or modifying data.

There are two types of root fields in GraphQL:

- `Query`: defines the fields that can be queried to retrieve data from the server.
- `Mutation`: defines the fields that can be used to create, update, or delete data on the server.

- [@official@Get Started with Root Feilds](https://graphql.org/learn/execution/#root-fields-resolvers)

_Resolvers_ - In GraphQL, a resolver is a function that is responsible for fetching the data for a field in a query or mutation. Resolvers are defined in the schema and are executed by the GraphQL server when a query or mutation is received.

Each field in a GraphQL schema has a corresponding resolver function that is responsible for returning the data for that field. The resolver function can retrieve the data from a database, a third-party API, or any other source, and return it to the client.

- [@article@Guide to Resolver](https://the-guild.dev/blog/better-type-safety-for-resolvers-with-graphql-codegen)

- `Synchronous` - In GraphQL, a resolver is a function that is responsible for fetching the data for a field in a query or mutation. Resolvers are defined in the schema and are executed by the GraphQL server when a query or mutation is received.

A synchronous resolver is a type of resolver that runs and completes its execution before returning any value. It directly returns the result of the computation, without waiting for any external event such as a database query or a third-party API call.

- `Asynchronous` - In GraphQL, a resolver is a function that is responsible for fetching the data for a field in a query or mutation. Resolvers are defined in the schema and are executed by the GraphQL server when a query or mutation is received.

An asynchronous resolver is a type of resolver that runs, but instead of returning the final value, it returns a promise that will be resolved with the final value. This allows the resolver to wait for an external event such as a database query or a third-party API call to complete before returning the result.

- [@official@Get Started with Asynchronous](https://graphql.org/learn/execution/#asynchronous-resolvers)

- `Scalar Coercion` - In GraphQL, scalar coercion is the process of converting a value from one type to another, as it flows through the resolvers. This is needed when the input value for a field does not match the expected type, but can still be successfully converted to the correct type.

Scalar coercion can be implemented in the resolvers by using the **GraphQLScalarType** constructor to define a custom scalar type and providing a **coerce** function that can convert the input value to the correct type.

- [@official@Get started with Scalar coercion](https://graphql.org/learn/execution/#scalar-coercion)

- `Lists` - In GraphQL, a list is a type that represents an ordered collection of items. Lists can be used as the return type for a field in a query or mutation, and can contain any type of items, including scalars and objects.

The resolver function for a list field can retrieve the data from a database or a third-party API and return it as an array.

- [@official@Get started with Lists and Non-Null](https://graphql.org/learn/schema/#lists-and-non-null)

_Validation_ - In GraphQL, validation refers to the process of ensuring that a query or mutation adheres to the rules defined in the schema. This includes verifying that the query or mutation only accesses fields and types that are defined in the schema, and that the input values for fields are of the correct type and within the specified constraints.

GraphQL servers perform validation on all incoming queries and mutations to ensure that they are valid before executing them. If a query or mutation is invalid, the server will return an error, indicating which parts of the query or mutation are invalid and why.

Validation in GraphQL refers to the process of checking whether a GraphQL query or mutation conforms to the rules and constraints defined in the GraphQL schema. This can include checking that the query or mutation includes the required fields, that the arguments passed to a field are of the correct type, and that the values passed to fields or arguments fall within the expected range.

Learn more from the following links:

- [@official@Get Started with Validation in GraphQL](https://graphql.org/learn/validation/)

_Producing The Result_ - In GraphQL, producing the result refers to the process of generating the final response to a query or mutation. This includes executing the resolvers for the selected fields, gathering the data, and formatting the response according to the requirements of the query or mutation.

When a client sends a query or mutation to a GraphQL server, the server performs several steps to produce the result:

- Parsing: The query or mutation is parsed and converted into an abstract syntax tree (AST)
- Validation: The query or mutation is validated against the schema to ensure that it is well-formed and adheres to the schema definition.
- Execution: The resolvers for the selected fields are executed, and the data is retrieved from the data source.
- Formatting: The data is formatted and organized into the final response, according to the requirements of the query or mutation.

Learn more from the following links:

- [@official@Get Started with GraphQL](https://graphql.org/learn/)

**Apollo** - Apollo is a platform for building a unified graph, a communication layer that helps you manage the flow of data between your application clients (such as web and native apps) and your back-end services.

- [Apollo Website](https://www.apollographql.com)
- [Official Docs](https://www.apollographql.com/docs/)
- [Official YouTube Channel](https://www.youtube.com/c/ApolloGraphQL/)
- [GraphQL With React Tutorial - Apollo Client](https://www.youtube.com/watch?v=YyUWW04HwKY)

**Relay Modern** - Relay is a JavaScript client used in the browser to fetch GraphQL data. It's a JavaScript framework developed by Facebook for managing and fetching data in React applications. It is built with scalability in mind in order to power complex applications like Facebook. The ultimate goal of GraphQL and Relay is to deliver instant UI-response interactions.

- [Official Website](https://relay.dev/)
- [Introduction to Relay modern](https://relay.dev/docs/)

## API Documentation

API documentation is a set of instructions that tells developers and other interested parties how to use your API and its services for a specific end.

The abstraction has four components only.

Contract Definition - You describe what the API guarantees.This is independent of code, language, or framework.
Core elements:

1. What resources exist.
2. What operations are allowed.
3. What inputs are accepted.
4. What outputs are produced.
5. What errors can occur.

Shape Specification - You express the structure of all data exchanged.This does not depend on JSON vs XML vs Protobuf.
Core elements:

1. Field names
2. Types
3. Constraints
4. Relationships
5. Required vs optional
6. Enumerations
   This is the invariant schema layer.

Interaction Semantics - You describe the behavior associated with each endpoint.
Core elements:

1. HTTP verb meaning
2. Idempotency expectations
3. Side effects
4. Pagination rules
5. Filtering rules
6. Authentication rules

This is the behavioral abstraction.

Discoverability Surface - You expose the contract to external consumers in a readable form.

Tools vary (OpenAPI, Swagger UI, ReDoc, Postman collections), but the abstraction remains:

1. A machine-readable description for tooling
2. A human-readable description for developers
3. A consistent reference for integration

This is the discoverability layer.

Open api spec

The OpenAPI Specification (OAS) defines a standard, language-agnostic interface to RESTful APIs which allows both humans and computers to discover and understand the capabilities of the service without access to source code, documentation, or through network traffic inspection. When properly defined, a consumer can understand and interact with the remote service with a minimal amount of implementation logic.

An OpenAPI definition can then be used by documentation generation tools to display the API, code generation tools to generate servers and clients in various programming languages, testing tools, and many other use cases.

Tools and Specifications for RESTful API Documentation:
Several tools and specifications facilitate the creation and management of RESTful API documentation:

1. OpenAPI Specification (formerly Swagger):- A widely adopted, language-agnostic standard for describing REST APIs. It allows for the generation of interactive documentation, client SDKs, and server stubs.
2. Postman:- A popular API platform that includes features for building, testing, and documenting APIs.
3. RAML (RESTful API Modeling Language):- Another specification for describing REST APIs, focusing on human readability and ease of use.
4. API Blueprint:- A markdown-based language for designing and documenting APIs.

**OpenAPI**:- OpenAPI Specification (formerly Swagger Specification) is an API description format for REST APIs. An OpenAPI file allows you to describe your entire API, including:

1. Available endpoints (/users) and operations on each endpoint (GET /users, POST /users)
2. Operation parameters Input and output for each operation
3. Authentication methods
4. Contact information, license, terms of use, and other information.

API specifications can be written in YAML or JSON. The format is easy to learn and readable to both humans and machines.
The OpenAPI Specification (OAS) defines a standard, language-agnostic interface to HTTP APIs which allows both humans and computers to discover and understand the capabilities of the service without access to source code, documentation, or through network traffic inspection. When properly defined, a consumer can understand and interact with the remote service with a minimal amount of implementation logic.
An OpenAPI Description can then be used by documentation generation tools to display the API, code generation tools to generate servers and clients in various programming languages, testing tools, and many other use cases.

`OpenAPI Description` - An OpenAPI Description (OAD) formally describes the surface of an API and its semantics. It is composed of an entry document, which must be an OpenAPI Document, and any/all of its referenced documents. An OAD uses and conforms to the OpenAPI Specification, and MUST contain at least one paths field, components field, or webhooks field.
`OpenAPI Document` - An OpenAPI Document is a single JSON or YAML document that conforms to the OpenAPI Specification. An OpenAPI Document compatible with OAS 3._._ contains a required openapi field which designates the version of the OAS that it uses.
`Schema`:- A "schema" is a formal description of syntax and structure. This document serves as the schema for the OpenAPI Specification format; a non-authoritative JSON Schema based on this document is also provided on spec.openapis.org for informational purposes. This specification also uses schemas in the form of the Schema Object.
`Path Templating` - Path templating refers to the usage of template expressions, delimited by curly braces ({}), to mark a section of a URL path as replaceable using path parameters.
Each template expression in the path MUST correspond to a path parameter that is included in the Path Item itself and/or in each of the Path Item's Operations. An exception is if the path item is empty, for example due to ACL constraints, matching path parameters are not required.
The value for these path parameters MUST NOT contain any unescaped "generic syntax" characters described by RFC3986: forward slashes (/), question marks (?), or hashes (#).
`Media Types` - Media type definitions are spread across several resources. The media type definitions SHOULD be in compliance with RFC6838.

**Swagger**:- Swagger is a set of open-source tools built around the OpenAPI Specification that can help you design, build, document, and consume REST APIs. The major Swagger tools include:

1. Swagger Editor – browser-based editor where you can write OpenAPI definitions.
2. Swagger UI – renders OpenAPI definitions as interactive documentation.
3. Swagger Codegen – generates server stubs and client libraries from an OpenAPI definition.
4. Swagger Editor Next (beta) – browser-based editor where you can write and review OpenAPI and AsyncAPI definitions.
5. Swagger Core – Java-related libraries for creating, consuming, and working with OpenAPI definitions.
6. Swagger Parser – standalone library for parsing OpenAPI definitions.
7. Swagger APIDom – provides a single, unifying structure for describing APIs across various description languages and serialization formats.

## JSON APIs

JSON or JavaScript Object Notation is an encoding scheme that is designed to eliminate the need for an ad-hoc code for each application to communicate with servers that communicate in a defined way. JSON API module exposes an implementation for data stores and data structures, such as entity types, bundles, and fields.
