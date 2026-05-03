# Service-oriented Software Engineering

The development of the Web in the 1990s revolutionized organizational information exchange. Client computers could gain access to information on remote servers outside their own organizations. However, access was solely through a web browser, and direct access to the information by other programs was not practical. This meant that opportunistic connections between servers, where, for example, a program could query a number of catalogs from different suppliers, were not possible.

To get around this problem, `web services` were developed that allowed programs to access and update resources available on the web. Using a web service, organizations that wish to make their information accessible to other programs can do so by defining and publishing a programmatic web service interface. This interface defines the data available and how it can be accessed and used.

A web service is an instance of a more general notion of a service, which Lovelock et al. (Lovelock et al., 1996) defined as: 
`an act or performance offered by one party to another. Although the process may be tied to a physical product, the performance is essentially intangible and does not normally result in ownership of any of the factors of production.`

Services are a natural development of software components where the component model is, in essence, a set of standards associated with web services. A web service can therefore be defined as:
`A loosely coupled, reusable software component that encapsulates discrete functionality, which may be distributed and programmatically accessed. A web service is a service that is accessed using standard Internet and XML-based protocols.`

A critical distinction between a service and a software component, as defined in component-based software engineering, is that services should be independent and loosely coupled. That is, they should always operate in the same way, irrespective of their execution environment. They should not rely on external components that may have different functional and non-functional behavior. Therefore, web services do not have a “requires” interface that, in CBSE, defines the other system components that must be present. A web service interface is simply a “provides” interface that defines the service functionality and parameters.
Service-oriented systems are a way of developing distributed systems where the system components are stand-alone services, executing on geographically distributed computers. Services are platform and implementation-language independent. Software systems can be constructed by composing local services and external services from different providers, with seamless interaction between the services in the system.

**Service-oriented architecture**:- Service-oriented architecture (SOA) is an architectural style based on the idea that executable services can be included in applications. Services have well-defined, published interfaces, and applications can choose whether or not these are appropriate. An important idea underlying SOA is that the same service may be available from different providers and that applications could make a runtime decision of which service provider to use.

```
XML technologies(XML,XSD,XSLT)

Support (WS-Security, WS-Addressing, ...)
        |
Process (WS-BPEL)
        |
Service definition (UDDI, WSDL)
        |
Messaging (SOAP)
    
Transport (HTTP, HTTPS, SMTP, ...)
```

The development and use of internationally agreed standards is fundamental to SOA. As a result, service-oriented architectures have not suffered from the incompatibilities that normally arise with technical innovations, where different suppliers maintain their proprietary version of the technology.
Web service protocols cover all aspects of service-oriented architectures, from the basic mechanisms for service information exchange (SOAP) to programming language standards (WS-BPEL). These standards are all based on XML, a human and machine-readable notation that allows the definition of structured data where text is tagged with a meaningful identifier. XML has a range of supporting technologies, such as XSD for schema definition, which are used to extend and manipulate XML descriptions. Erl (Erl 2004) provides a good summary of XML technologies and their role in web services.

Briefly, the fundamental standards for service-oriented architectures are:
1. `SOAP` - This is a message interchange standard that supports communication between services. It defines the essential and optional components of messages passed between services. Services in a service-oriented architecture are sometimes called SOAP-based services.
2. `WSDL` - The Web Service Description Language (WSDL) is a standard for service interface definition. It sets out how the service operations (operation names, parameters, and their types) and service bindings should be defined.
3. `WS-BPEL` - This is a standard for a workflow language that is used to define process programs involving several different services.


## RESTful services

The initial developments of web services and service-oriented software engineering were standards-based, with XML-based messages exchanged between services. This is a general approach that allows for the development of complex services, dynamic service binding, and control over quality of service and service dependability.
However, as services were developed, it emerged that most of these were single-function services with relatively simple input and output interfaces. Service users were not really interested in dynamic binding and the use of multiple service providers. They rarely use web service standards for quality of service, reliability, and so forth.

The problem is that web services standards are “heavyweight” standards that are sometimes overly general and inefficient. Implementing these standards requires a considerable amount of processing to create, transmit, and interpret the associated XML messages. This slows down communications between services, and, for high-throughput systems, additional hardware may be required to deliver the quality of service required.
In response to this situation, an alternative “lightweight” approach to web service architecture has been developed. This approach is based on the REST architectural style, where REST stands for Representational State Transfer.

General resource actions:-

```
            CREATE
              |
DELETE---> Resource<-----READ
              |
            UPDATE
```

Web resources:-

```
                 CREATE
                   |
DELETE--->Web-accessible Resource R<-----READ
                   |
                 UPDATE
```

`REST` is an architectural style based on transferring representations of resources from a server to a client. It is the style that underlies the web as a whole and has been used as a much simpler method than SOAP/WSDL for implementing web service interfaces.

REST API constraints-
1. Client-Server architecture
2. Cacheability.
3. Statelessness
4. Uniform interface.

The fundamental element in a RESTful architecture is a `resource`. Essentially, a resource is simply a data element such as a catalog and a medical record, or a document, such as this book chapter. In general, resources may have multiple representations; that is, they can exist in different formats.

In a RESTful architecture, everything is represented as a resource. Resources have a unique identifier, which is their URL. Resources are a bit like objects, with four fundamental polymorphic operations associated with them:-

1. Create - bring resource into existence
2. Read - return a representation of the resource.
3. Update - change value of the resource.
4. Delete - make resource inaccessible.

The Web is an example of a system that has a RESTful architecture. Web pages are resources, and the unique identifier of a web page is its URL.
The web protocols http and https are based on four actions, namely, POST, GET,PUT, and DELETE.These map onto the basic resource operations:

1. POST is used to create a resource. It has associated data that defines the resource.
2. GET is used to read the value of a resource and return that to the requestor in the specified representation, such as XHTML, that can be rendered in a web browser.
3. PUT is used to update the value of a resource.
4. DELETE is used to delete the resource.

REST is not an alternative to HTTP. In fact, REST requires HTTP to work.
Engineers didn't move away from HTTP; they created REST to standardize how we use HTTP. Before REST, people used HTTP in very messy ways.

Messy" HTTP (Old way)	                                 RESTful HTTP (The Standard)
GET /deleteUser?id=10	                                   DELETE /users/10
It used the "GET" verb to delete things (dangerous!).	   It uses the correct verb for the correct action.
Every developer had their own weird rules.	               Every developer follows the same "Grammar."

All services, in some way, operate on data.SOAP-based services execute actions on this database to return particular values from it. RESTful services (Richardson and Ruby 2007) access the data directly.
When a RESTful approach is used, the data is exposed and is accessed using its URL. RESTful services use http or https protocols, with the only allowed actions being POST, GET, PUT, and DELETE. Therefore, the weather data for each place in the database might be accessed using URLs such as:

http://weather-info-example.net/temperatures/boston
http://weather-info-example.net/temperatures/edinburgh


An important difference between RESTful services and SOAP-based services is that RESTful services are not exclusively XML-based. So, when a resource is requested, created, or changed, the representation may be specified. This is important for RESTful services because representations such as JSON (Javascript Object Notation), as well as XML, may be used. These can be processed more efficiently than XML-based notations, thus reducing the overhead involved in a service call.

A fundamental design principle for RESTful services is that they should be `stateless`. That is, in an interaction session, the resource itself should not include any state information, such as the time of the last request. Instead, all necessary state information should be returned to the requestor. If state information is required in later requests, it should be returned to the server by the requestor.
RESTful services have become more widely used over the past few years because of the widespread use of mobile devices. These devices have limited processing capabilities, so the lower overhead of RESTful services allows better system performance. They are also easy to use with existing websites—implementing a RESTful API for a website is usually fairly straightforward.
