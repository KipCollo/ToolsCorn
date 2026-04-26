# Java EE Containers(Java EE Servers and Containers)

Normally, thin-client multitiered applications are hard to write because they involve many lines of intricate code to handle transaction and state management, multithreading, resource pooling, and other complex low-level details. The component-based and platform-independent Java EE architecture makes applications easy to write because business logic is organized into reusable components.
In addition, the Java EE server provides underlying services in the form of a container for every component type. Because you do not have to develop these services yourself,you are free to concentrate on solving the business problem at hand.

**Container Services**:- `Containers` are the interface between a component and the low-level, platform-specific functionality that supports the component. Before it can be executed, a web, enterprise bean, or application client component must be assembled into a Java EE module and deployed into its container.

The assembly process involves specifying container settings for each component in the Java EE application and for the Java EE application itself. Container settings customize the underlying support provided by the Java EE server, including such services as security, transaction management, Java Naming and Directory Interface (JNDI) API lookups, and remote connectivity. Here are some of the highlights.

1. The Java EE security model lets you configure a web component or enterprise bean so that system resources are accessed only by authorized users.
2. The Java EE transaction model lets you specify relationships among methods that make up a single transaction so that all methods in one transaction are treated as a single unit.
3. JNDI lookup services provide a unified interface to multiple naming and directory services in the enterprise so that application components can access these services.
4. The Java EE remote connectivity model manages low-level communications between clients and enterprise beans. After an enterprise bean is created, a client invokes methods on it as if it were in the same virtual machine.

Because the Java EE architecture provides configurable services, components within the same application can behave differently based on where they are deployed. For example, an enterprise bean can have security settings that allow it a certain level of access to database data in one production environment and another level of database access in another production environment.

The container also manages nonconfigurable services, such as enterprise bean and servlet lifecycles, database connection resource pooling, data persistence, and access to the Java EE platform APIs.

*Container Types*- The deployment process installs Java EE application components in the Java EE containers
The server and containers are as follows:

1. Java EE server: The runtime portion of a Java EE product. A Java EE server provides EJB and web containers.
2. EJB container: Manages the execution of enterprise beans for Java EE applications. Enterprise beans and their container run on the Java EE server.
3. Web container: Manages the execution of web pages, servlets, and some EJB components for Java EE applications. Web components and their container run on the Java EE server.
4. Application client container: Manages the execution of application client components. Application clients and their container run on the client.
5. Applet container: Manages the execution of applets. Consists of a web browser and a Java Plug-in running on the client together.


`Java EE Containers(Jakarta EE containers)`:- Jakarta EE containers are runtime environments that provides standard services specified by the Jakarta EE specifications.Examples of such services are security,messaging,threads,data source,loggimg,Network.
The Jakarta EE containers provide APIs that applications use to access these services.Java EE server provides underlying services in the form of a container for every component type. Because you do not have to develop these services yourself, you are free to concentrate on solving the business problem at hand.

All Java EE code you write as a developer runs in runtime environment,`Java EE Container(Jakarta EE containers)`.It envelops your application code.The container can mediate or intercept calls to and from the application code, and insert other kinds of logic that qualify and modify the calls to and from the application code.

The Java EE server container is itself made up of two other containers: the `web container` and the `Enterprise JavaBeans (EJB) container`. 

The `web container` is the part of the Java EE environment devoted to running the web components in a Java EE application: the web pages,Java servlets, and other Java EE web components that can interact with clients connecting to the Java EE application with standard web protocols. 

The `EJB container` is the part of the Java EE environment that is devoted to running the application logic part of the Java EE application.Enterprise JavaBeans are Java classes that contain and manipulate the core data structures of the Java EE application. Finally, the database tier of the Java EE platform holds all application data that the Java EE application needs to exist longer than the scope of a single session of the application,or simply between different steps in the application that are separated in time.

In the Java EE platform, dependency injection can be applied to all resources a component needs, effectively hiding the creation and lookup of resources from application code. Dependency injection can be used in Enterprise JavaBeans (EJB) containers, web containers, and application clients. Dependency injection allows the Java EE container to automatically insert references to other required components or resources, using annotations.

- Enterprise capabilities were initially built into JDK.With time,they were separated out:-
  1. J2EE - Java 2 Platform Enterprise Edition
  2. Java EE - Java Platform Enterprise Edition(Rebranding)
  3. Jakarta EE(Oracle gave Java EE rights to Eclipse Foundation)

J2EE: Servlet,JSP,RMI,EJB

A `Java EE server` is a server application that implements the Java EE platform APIs and provides standard Java EE services. Java EE servers are sometimes called application servers, because they allow you to serve application data to clients, much as web servers serve web pages to web browsers.

Java EE servers host several application component types that correspond to the tiers in a multitiered application. The Java EE server provides services to these components in the form of a container.

Java EE containers are the interface between the component and the lower-level functionality provided by the platform to support that component. The functionality of the container is defined by the platform and is different for each component type. Nonetheless, the server allows the different component types to work together to provide functionality in an enterprise application.

The Web Container-The web container is the interface between web components and the web server. A web component can be a servlet or a JavaServer Faces Facelets page. The container manages the component’s life cycle, dispatches requests to application components, and provides interfaces to context data, such as information about the current request.

The EJB Container-The EJB container is the interface between enterprise beans, which provide the business logic in a Java EE application, and the Java EE server. The EJB container runs on the Java EE server and manages the execution of an application’s enterprise beans.

The Application Client Container-The application client container is the interface between Java EE application clients (special Java SE applications that use Java EE server components) and the Java EE server. The application client container runs on the client machine and is the gateway between the client application and the Java EE server components that the client uses.

Normally, thin-client multitiered applications are hard to write because they involve many lines of intricate code to handle transaction and state management, multithreading, resource pooling, and other complex low-level details. The component-based and platform-independent Java EE architecture makes applications easy to write because business logic is organized into reusable components. In addition, the 




Jakarta EE specifications (modules) and their corresponding reference implementations (runtimes) as of the current Jakarta EE 10–11 ecosystem.

- **Web & Presentation Layer**:-
  1. Jakarta Servlet -	HTTP request/response handling	- Apache Tomcat(Catalina), Eclipse Jetty, Undertow
  2. Jakarta Pages (JSP) -	Server-side page rendering	- Apache Jasper (Tomcat’s JSP engine)
  3. Jakarta Expression Language (EL) -	Unified expression evaluation in JSP/JSF -	Eclipse EL, Apache EL
  4. Jakarta Faces (JSF)	- Component-based web UI framework	- Mojarra (Eclipse), MyFaces (Apache)
  5. Jakarta WebSocket	- Real-time bi-directional communication -	Tyrus (Eclipse), Undertow WebSocket
  6. Jakarta Server Pages Tag Library (JSTL) -	Common JSP tags	Eclipse JSTL

- **Business Logic / Application Layer**:-
  1. Jakarta CDI (Contexts and Dependency Injection)	- Dependency injection, scopes, lifecycle -	Weld (Eclipse), OpenWebBeans (Apache)
  2. Jakarta Interceptors	- Cross-cutting concerns like logging/transactions -	Included in Weld or OpenWebBeans
  3. Jakarta Transactions (JTA) -	Declarative/Programmatic transactions -	Narayana (Red Hat), Atomikos, Bitronix
  4. Jakarta Batch	- Batch job processing	- Eclipse Batch (JBeret)
  5. Jakarta Enterprise Beans (EJB)	- Distributed business components	- OpenEJB (Apache TomEE), GlassFish EJB
  6. Jakarta Contexts and Dependency Injection (CDI Lite)	- Lightweight dependency injection for SE	- Part of Weld Lite

- **Persistence & Data Layer**:-
  1. Jakarta Persistence (JPA) -	ORM and entity management -	EclipseLink, Hibernate ORM, Apache OpenJPA
  2. Jakarta Data	- Repository-style data access (new spec) -	Eclipse Data (early implementation)
  3. Jakarta NoSQL	- Access to NoSQL databases	- Eclipse JNoSQL
  4. Jakarta Transactions (JTA)- 	Transaction management (shared with business layer)	- Narayana, Atomikos, Bitronix
  5. Jakarta Validation (Bean Validation) -	Declarative validation	- Hibernate Validator, Eclipse Krazo Validation

- **Web Services & Communication**:-
  1. Jakarta RESTful Web Services (JAX-RS) -	REST API development	- Jersey (Eclipse), RESTEasy, Apache CXF
  2. Jakarta XML Web Services (JAX-WS)	- SOAP web services	- Metro (Eclipse), Apache CXF
  3. Jakarta JSON Processing (JSON-P)	- JSON streaming and object model APIs	- Eclipse Parsson
  4. Jakarta JSON Binding (JSON-B)	- JSON ↔ POJO binding	- Eclipse Yasson
  5. Jakarta Messaging (JMS)	- Messaging (e.g., ActiveMQ, RabbitMQ)	- Eclipse OpenMQ, Apache ActiveMQ Artemis
  6. Jakarta Mail	- Email sending and receiving	- Eclipse Angus
  7. Jakarta Activation	- MIME type and data handling	- Eclipse Angus Activation
  8. Jakarta Connectors (JCA) - 	Resource adapter integration -	IronJacamar, GlassFish Connector
  9. Jakarta WebSocket	- Bidirectional comms	- Tyrus, Undertow WebSocket

- **Platform & Infrastructure**:-
  1. Jakarta Annotations	- Common annotations used across specs	- Eclipse Annotations
  2. Jakarta Dependency Injection -	Core dependency injection - SPI	Weld, OpenWebBeans
  3. Jakarta Security	Authentication and authorization	- Soteria
  4. Jakarta Authorization (JACC)	- Policy-based security	- GlassFish JACC, WildFly JACC
  5. Jakarta Authentication (JASPIC)	- Pluggable authentication modules	- GlassFish Auth
  6. Jakarta Concurrency	- Managed threads, executors	- Eclipse Concurrency
  7. Jakarta EE Platform / Web Profile / Core Profile -	Bundled specifications -	Provided by application servers (GlassFish, Payara, WildFly, Open Liberty)

- **Additional Modules**:-
  1. Jakarta SOAP with Attachments (SAAJ)	- Attachments for SOAP	- Metro, Apache CXF
  2. Jakarta XML Binding (JAXB) -	XML ↔ Java binding	- Eclipse MOXy, JAXB RI
  3. Jakarta XML RPC -	Remote procedure calls (legacy)	- GlassFish RPC (deprecated)
  4. Jakarta Faces Flow	- JSF navigation and flow control -	Mojarra, MyFaces
  5. Jakarta Servlet Filters	- Request preprocessing	- Built into Servlet containers (Tomcat, Jetty, Undertow)

- **Full Jakarta EE Runtime Servers**:-

1. GlassFish / Eclipse GlassFish	- Official Jakarta EE reference implementation
2. Payara Server	- Production-ready GlassFish derivative
3. WildFly	- Red Hat’s Jakarta EE implementation
4. Open Liberty	- IBM’s lightweight modular runtime
5. Apache TomEE -	Tomcat + EJB + JPA + CDI + JAX-RS
6. Helidon, Quarkus, Micronaut	- Lightweight, Jakarta-compatible microservice frameworks


## Runtimes

Below are the Jakarta modules and runtimes that can be executed standalone (outside a full Jakarta EE application server).
Standalone means they can run in plain Java SE, with no servlet container or EE runtime required.

1. Standalone-Capable Runtimes:- These work entirely on their own:

- Eclipse Angus (Mail + Activation):- Full mail + attachment handling in any Java app - Sending emails, file attachments
- Hibernate ORM (JPA) - ORM engine for relational databases - Data persistence, CRUD operations
- EclipseLink (JPA) - Alternative standalone JPA provider - Database persistence
- Hibernate Validator (Jakarta Validation) - Bean validation framework - Input validation
- Eclipse Yasson (JSON-B) - JSON <-> POJO mapping - JSON serialization/deserialization
- Eclipse Parsson (JSON-P) - JSON parsing/streaming - Read/write JSON
- Eclipse MOXy (JAXB) - XML ↔ Java binding - XML serialization
- Jersey / RESTEasy (JAX-RS) - REST API engine; can run embedded - REST API in embedded Jetty/Grizzly
- Tyrus (WebSocket) - WebSocket client/server - Real-time communication
- Weld SE (CDI) - CDI in standalone Java SE - Dependency injection in console apps
- JBeret (Jakarta Batch) -	Batch jobs in Java SE	Job scheduling, processing
- Narayana (JTA) -	Transaction manager	Manual transaction management.
- Eclipse JNoSQL	- NoSQL database access	MongoDB, Cassandra, Redis, etc.

2. Embedded / Semi-Standalone:- These can run standalone but often embed lightweight web servers:
Embedded means the runtime (like Tomcat, Jetty, or Undertow) runs inside your own Java application, rather than your app being deployed into it.

- Tomcat (Embedded)	- Can run inside any Java app using tomcat-embed-core.jar
- Jetty (Embedded)	- Lightweight HTTP server embeddable in Java apps
- Undertow (Embedded)	- Used in Quarkus and WildFly; can be run programmatically
- Grizzly (Jersey integration)	- Used for running REST endpoints without full server