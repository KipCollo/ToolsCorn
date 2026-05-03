# APIs

API is the acronym for Application Programming Interface, which is a software intermediary that allows two applications to talk to each other.It refers to any interface that lets two software components communicate.It does NOT have to use the internet.
Can be libraries, SDKs, OS interfaces, or web-based.Examples:- Java API,Mobile Phone Camera API,Windows API,Payment API,(REST API, SOAP API (these are web APIs)).

API Design
API Development
API Documentation
API Testing
API Mocking and Virtualization
API Governance
API Monitoring
OpenAPI & Swagger

Traditionally, an API was provided by a software library that could be linked into an application either statically or dynamically at runtime, allowing reuse of procedures and functions for specific problems, such as OpenGL for 3D graphics, or libraries for TCP/IP networking. Such APIs are still common, but a growing number of APIs are now made available over the internet as RESTful web services.

API is a boundary between one part of a software system and another. It defines a set of operations that one component provides for other parts of the system (or other systems) to use.
An API handles requests from clients on behalf of users. Clients may be web browsers, mobile apps, devices in the Internet of Things, or other APIs. The API services requests according to its internal logic and then at some point returns a response to the client. The implementation of the API may require talking to other “backend” APIs, provided by databases or processing systems.

A UI also provides a boundary to a software system and restricts the operations that can be performed. What distinguishes an API from a UI is that an API is explicitly designed to be easy to interact with by other software, while a UI is designed to be easy for a user to interact with directly.



## Web Services

Web Service = An API that works over the internet (web).
Web services are services available over the web.
Components of web services:-
1. WSDL
2. UDDI

Web services are a standardized way for different software applications to communicate with each other over a network, typically the internet, by exchanging messages. They enable interoperable machine-to-machine interaction and can be built on different platforms and written in different languages, making them ideal for connecting diverse systems in distributed applications. Web services use protocols like SOAP and technologies like XML and WSDL to define, describe, and discover their functions.

How they work

    Communication: A client application sends a request to the web service.
    Protocol: The request is sent over standard protocols, most commonly HTTP, with the message formatted in a standardized way (e.g., XML for SOAP).
    Description: The web service's capabilities are described in a file, often using Web Services Description Language (WSDL). This file provides all the details needed for another application to interact with the service.
    Interaction: The client uses the WSDL to understand the message format and operations and sends a message to the service's endpoint (a specific URL).
    Response: The web service processes the request and sends back a response, typically in XML format. 

Key characteristics

    Interoperability: They are built on open standards, allowing applications written in different programming languages and running on different operating systems to communicate seamlessly.
    Standardized protocols: They use standard message protocols like SOAP and transport protocols like HTTP to ensure universal understanding.
    XML-based: They use XML to format messages for structured data exchange.
    Decoupled: Applications are loosely-coupled, meaning they can be updated independently without affecting the other party, as long as the interface remains the same. 

Common uses

    Connecting diverse systems: Integrating different applications, such as a Java application on Linux with a .NET application on Windows.
    Building distributed applications: Creating applications that span multiple systems and platforms.
    Providing APIs: Offering a public or private interface for other developers to use a service's functionality.
    Enabling mashups: Combining different web services and content to create new applications. 

Service Providers publishes an interface for web services that describes all attributes of the web service.This is XML based interface and is called Web Services Descriptive Language(WSDL).

A web service provider publishes web service(through WSDL) on an online directory from where consumers can query and search the web services.This online registry/directory is called UUID(Universal Description,Discovery  and Integration).

WSDL exists in SOAP but not in REST, and why REST is still considered a web service even without WSDL.
REST meets that definition because:
- It runs over HTTP
- It exposes endpoints
- It allows interoperable communication
- It returns data (JSON/XML)

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


## Web APIs


A Web API is an interface that allows applications to interact with each other over HTTP or HTTPS protocols. It provides a set of rules and protocols for building and interacting with software applications. There are many types of Web APIs like REST and GraphQL

A Web API (Application Programming Interface) is a set of rules and protocols that allows different software applications to communicate with each other over the internet, typically using HTTP/HTTPS. It defines how clients (like web browsers or mobile apps) can request and receive data or functionality from a server.
Key characteristics and concepts of Web APIs:

    Client-Server Interaction:
    A client sends a request to a server, which processes the request and sends a response back to the client. This communication happens over a network.
    Endpoints:
    Web APIs expose specific URLs (endpoints) that clients can access to perform different actions or retrieve different types of data.
    HTTP Methods:
    Standard HTTP methods like GET (retrieve data), POST (create data), PUT (update data), and DELETE (remove data) are commonly used to define the type of action a client wants to perform on a resource.
    Data Formats:
    Data exchanged between the client and server is typically formatted as JSON (JavaScript Object Notation) or XML, with JSON being the more prevalent choice due to its lightweight nature and ease of integration with JavaScript.
    Statelessness (in RESTful APIs):
    In the context of RESTful Web APIs, each request from a client to a server contains all the necessary information to understand the request, and the server does not store any client session state between requests.
    Authorization and Authentication:
    Web APIs often require mechanisms to verify the identity of the client (authentication) and determine what actions they are authorized to perform (authorization), frequently using tokens or API keys.
    Types of Web APIs:
        Browser APIs: Built directly into web browsers, these allow JavaScript to interact with browser functionalities and the surrounding computer environment (e.g., Web Audio API, Web Speech API, IndexedDB API).
        Third-party APIs: Provided by external services or platforms, enabling developers to integrate functionalities from those platforms into their own applications (e.g., Spotify Web API, Google Maps API).
        RESTful APIs: A specific architectural style for building Web APIs that adheres to the principles of Representational State Transfer (REST), emphasizing statelessness and the use of standard HTTP methods. 

Web APIs are fundamental to modern web development, enabling the creation of dynamic, interactive, and interconnected applications.


`REST API` - A REST API is a type of Web API that adheres to the principles of REST. REST principles emphasize statelessness, easy-to-use and self-descriptive messages, and a layered structures to facilitate the caching of components to help scaling.
`GraphQL API` - GraphQL is a query language for APIs that provide a more flexible and efficient approach to data retrieval. REST exposes multiple endpoints for different resources, but GraphQL exposes a single endpoint for all interactions. This single endpoint allows clients to request exactly the data they need, down to individual fields on objects. 



There are several popular approaches to exposing remote APIs:
1. `Remote Procedure Call (RPC) APIs` expose a set of procedures or functions that can be called by clients over a network connection. The RPC style is designed to resemble normal procedure calls as if the API were provided locally. RPC APIs often use compact binary formats for messages and are very efficient, but usually require the client to install specific libraries (known as stubs) that work with a single API. The gRPC framework from Google (https://grpc.io) is an example of a modern RPC approach. The older SOAP (Simple Object Access Protocol) framework, which uses XML for messages, is still widely deployed.
2. A variant of the RPC style known as `Remote Method Invocation (RMI)` uses object-oriented techniques to allow clients to call methods on remote objects as if they were local. RMI approaches used to be very popular, with technologies such as CORBA and Enterprise Java Beans (EJBs) often used for building large enterprise systems. The complexity of these frameworks has led to a decline in their use.
3. The `REST (REpresentational State Transfer)` style was developed by Roy Fielding to describe the principles that led to the success of HTTP and the web and was later adapted as a set of principles for API design. In contrast to RPC, RESTful APIs emphasize standard message formats and a small number of generic operations to reduce the coupling between a client and a specific API. Use of hyperlinks to navigate the API reduce the risk of clients breaking as the API evolves over time.
4. Some APIs are mostly concerned with efficient querying and filtering of large data sets, such as SQL databases or the `GraphQL framework` from Facebook (https://graphql.org). In these cases, the API often only provides a few operations and a complex query language allows the client significant control over what data is returned.


Different API styles are suitable for different environments. For example, an organization that has adopted a microservices architecture might opt for an efficient RPC framework to reduce the overhead of API calls. This is appropriate because the organization controls all of the clients and servers in this environment and can manage distributing new stub libraries when they are required. On the other hand, a widely used public API might be better suited to the REST style using a widely used format such as JSON to maximize interoperability with different types of clients.

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
`OpenAPI Document` - An OpenAPI Document is a single JSON or YAML document that conforms to the OpenAPI Specification. An OpenAPI Document compatible with OAS 3.*.* contains a required openapi field which designates the version of the OAS that it uses.
`Schema`:- A "schema" is a formal description of syntax and structure. This document serves as the schema for the OpenAPI Specification format; a non-authoritative JSON Schema based on this document is also provided on spec.openapis.org for informational purposes. This specification also uses schemas in the form of the Schema Object.
`Path Templating` -  Path templating refers to the usage of template expressions, delimited by curly braces ({}), to mark a section of a URL path as replaceable using path parameters.
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
