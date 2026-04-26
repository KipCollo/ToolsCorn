# Web Services

Web services are client and server applications that communicate over the World Wide Web's (WWW) HyperText Transfer Protocol (HTTP). As described by the World Wide Web Consortium (W3C), web services provide a standard means of interoperating between software applications running on a variety of platforms and frameworks.
Web services are characterized by their great interoperability and extensibility as well as their machine-processable descriptions, thanks to the use of XML. Web services can be combined in a loosely coupled way to achieve complex operations. Programs providing simple services can interact with each other to deliver sophisticated added-value services.

Web services comprise a set of messaging protocols, programming standards, and network registration and discovery facilities. When they are used together, these features enable the publication of business functions to authorized parties over the Internet from any device connected to the Web.
A Web service is a software application identified by a Universal Resource Identifier (URI), whose interfaces and binding are capable of being defined, described, and discovered by XML artifacts. A Web service supports direct interactions with other software applications using XML-based messages and Internet-based products.

- **Types of Web Services**:-

On the conceptual level, a service is a software component provided through a network-accessible endpoint. The service consumer and provider use messages to exchange invocation request and response information in the form of self-containing documents that make very few assumptions about the technological capabilities of the
receiver.
On a technical level, web services can be implemented in various ways. The two types of web services discussed in this section can be distinguished as "big" web services and "RESTful" web services.

A Web service:

1. Exposes and describes itself—A Web service defines its functionality and attributes so that other applications can understand it. By providing a Web Service Description Language (WSDL) file, a Web service makes its functionality available to other applications.
2. Enables other services to locate it on the Web—A Web service can be registered in a Universal Description, Discover, and Integration (UDDI) Registry so that applications can locate it.
3. Can be invoked—Once a Web service has been located and examined, the remote application can invoke the service using an Internet standard protocol.
4. A Web service style is either two-way request and response, or one-way. It can use either synchronous or asynchronous communication. However, the fundamental
unit of exchange between a Web service client and a Web service, of either style or type of communication, is a message.

Web services offer a standards-based infrastructure through which any business can do the following:

1. Offer appropriate internal business processes as value-added services that can be used by other organizations
2. Integrate its internal business processes and dynamically link them with those of its business partners

## Building Web Services with JAX-WS

JAX-WS stands for Java API for XML Web Services. JAX-WS is a technology for building web services and clients that communicate using XML. JAX-WS allows developers to write message-oriented as well as RPC-oriented web services.

In JAX-WS, a web service operation invocation is represented by an XML-based protocol such as SOAP. The SOAP specification defines the envelope structure, encoding rules, and conventions for representing web service invocations and responses. These calls and responses are transmitted as SOAP messages (XML files) over HTTP.

Although SOAP messages are complex, the JAX-WS API hides this complexity from the application developer. On the server side, the developer specifies the web service operations by defining methods in an interface written in the Java programming language. The developer also codes one or more classes that implement those methods. Client programs are also easy to code.
A client creates a proxy (a local object representing the service) and then simply invokes methods on the proxy. With JAX-WS, the developer does not generate or parse SOAP messages. It is the JAX-WS runtime system that converts the API calls and responses to and from SOAP messages.

With JAX-WS, clients and web services have a big advantage: the platform independence of the Java programming language. In addition, JAX-WS is not restrictive: a JAX-WS client can access a web service that is not running on the Java platform, and vice versa. This flexibility is possible because JAX-WS uses technologies defined by the World Wide Web Consortium (W3C): HTTP, SOAP, and the Web Service Description Language (WSDL). WSDL specifies an XML format for describing a service as a set of endpoints operating on messages.

## Resources

Using JAX-RS a Web resource is implemented as a resource class and requests are handled by resource methods.
A `resource class` is a Java class that uses JAX-RS annotations to implement a corresponding Web resource. Resource classes are POJOs that have at least one method annotated with `@Path` or a request method designator.
Root resource classes are "plain old Java objects" (POJOs) that are either annotated with @Path or have at least one method annotated with @Path or a request method designator, such as @GET, @PUT, @POST, or @DELETE. Resource methods are methods of a resource class annotated with a request method designator.


## RESTful Web Services with JAX-RS

Java API for RESTful Web Services (JAX-RS, defined in JSR 339).
JAX-RS makes it easy for developers to build RESTful web services using the Java programming language.

RESTful web services are loosely coupled, lightweight web services that are particularly well suited for creating APIs for clients spread out across the internet.
Representational State Transfer (REST) is an architectural style of client-server application centered around the transfer of representations of resources through requests and responses. In the REST architectural style, data and functionality are considered resources and are accessed using Uniform Resource Identifiers (URIs), typically links on the Web. The resources are represented by documents and are acted upon by using a set of simple, well-defined operations.

For example, a REST resource might be the current weather conditions for a city. The representation of that resource might be an XML document, an image file, or an HTML page. A client might retrieve a particular representation, modify the resource by updating its data, or delete the resource entirely.
The REST architectural style is designed to use a stateless communication protocol, typically HTTP. In the REST architecture style, clients and servers exchange representations of resources by using a standardized interface and protocol.

The following principles encourage RESTful applications to be simple, lightweight, and fast:

`Resource identification through URI`: A RESTful web service exposes a set of resources that identify the targets of the interaction with its clients. Resources are identified by URIs, which provide a global addressing space for resource and service discovery.
`Uniform interface`: Resources are manipulated using a fixed set of four create, read, update, delete operations: PUT, GET, POST, and DELETE. PUT creates a new resource, which can be then deleted by using DELETE. GET retrieves the current state of a resource in some representation. POST transfers a new state onto a resource.
`Self-descriptive messages`: Resources are decoupled from their representation so that their content can be accessed in a variety of formats, such as HTML, XML, plain text, PDF, JPEG, JSON, and other document formats. Metadata about the resource is available and used, for example, to control caching, detect transmission errors, negotiate the appropriate representation format, and perform authentication or access control.
`Stateful interactions through links`: Every interaction with a resource is stateless; that is, request messages are self-contained. Stateful interactions are based on the concept of explicit state transfer. Several techniques exist to exchange state, such as URI rewriting, cookies, and hidden form fields. State can be embedded in response messages to point to valid future states of the interaction.



**Accessing REST Resources with the JAX-RS Client API**:- The JAX-RS Client API provides a high-level API for accessing any REST resources, not just JAX-RS services. The Client API is defined in the javax.ws.rs.client package.
The Client API is designed to be fluent, with method invocations chained together to configure and submit a request to a REST resource in only a few lines of code.

```java
Client client = ClientBuilder.newClient();
String name = client.target("http://example.com/webapi/hello")
                     .request(MediaType.TEXT_PLAIN)
                     .get(String.class);
```

## API Documentation

swagger-core is based on OpenAPI specification.
swagger-core is an open source Java implementation of Swagger/OpenAPI, providing:

1. swagger-models: OpenAPI specification Java implementation
2. swagger-core: resolves (annotated) java POJOs into OpenAPI schemas, handles serialization/deserialization and provides an integration mechanism.
3. swagger-jaxrs2: resolves JAX-RS (annotated) resources into an OpenAPI definition, and provides an integration mechanism.
4. swagger-annotations: a set of annotations to declare and manipultate output generated by swagger-core, swagger-jaxrs2 and/or other projects.
5. swagger-maven-plugin (since 2.0.5): provides a maven plugin to resolve an OpenAPI definition at build time (using swagger-jaxrs2).
6. swagger-gradle-plugin (since 2.0.5): provides a gradle plugin to resolve an OpenAPI definition at build time (using swagger-jaxrs2).
