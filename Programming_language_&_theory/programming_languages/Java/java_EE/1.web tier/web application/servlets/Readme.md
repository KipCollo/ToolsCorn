# Servlet

The Java language was originally intended for use in small, embedded devices. It was first hyped as a language for developing elaborate client-side web content in the form of applets.But until the last few years, Java's potential as a server-side development platform had been sadly overlooked. Now, Java has come to be recognized as a language ideally suited for server-side development.

A `servlet` is a Java™ technology-based Web component, managed by a container, that generates dynamic content(web pages) for a web application. Like other Java technology-based components, servlets are platform-independent Java classes that are compiled to platform-neutral byte code that can be loaded dynamically into and run by a Java technology-enabled Web server. .

Jakarta Servlet is a corner stone web framework that can act as a presentation-oriented as well as a service-oriented web application. Jakarta Servlet intends to reduce the boilerplate code needed to convert the HTTP request into a Java object and to offer a Java object as an HTTP response, and to manage all the lifecycle around them.

Java servlets are a key component of server-side Java development. A servlet is a small, pluggable extension to a server that enhances the server's functionality. Servlets allow developers to extend and customize any Java-enabled web or application server with a hitherto unknown degree of portability, flexibility, and ease.

Since all Servlet/JSP engines must implement the Servlet/JSP part of Java EE specification, all servlet/JSP engine should work similarly.This makes servlet/JSP code portable between servlet/JSP engines and application servers.

Initially, Common Gateway Interface (CGI) scripts were the main technology used to generate dynamic content. Although widely used, CGI scripting technology has a number of shortcomings, including platform dependence and lack of scalability. To address these limitations, Java Servlet technology was created as a portable way to provide dynamic, user-oriented content.
A servlet is a small Java program that runs within a Web server. Servlets receive and respond to requests from Web clients, usually across HTTP, the HyperText Transfer Protocol.

A servlet is a generic server extension—a Java class that can be loaded dynamically to expand the functionality of a server. Servlets are commonly used with web servers, where they can take the place of CGI scripts. A servlet is similar to a proprietary server extension, except that it runs inside a Java Virtual Machine (JVM) on the server , so it is safe and portable. Servlets operate solely within the domain of the server: unlike applets, they do not require support for Java in the web browser.

Unlike CGI and FastCGI, which must use multiple processes to handle separate programs and/or separate requests, servlets can all be handled by separate threads within the same process or by threads within multiple processes spread across a number of backend servers. This means that servlets are also efficient and scalable. Because servlets run with bidirectional communication to the web server, they can interact very closely with the server to do things that are not possible with CGI scripts.
Another advantage of servlets is that they are portable: both across operating systems as we are used to with Java and also across web servers.

An HTTP servlet is a special type of servlet that handles an HTTP request and provides an HTTP response, usually in the form of an HTML page. The most common use of WebLogic HTTP servlets is to create interactive applications using standard Web browsers for the client-side presentation while WebLogic Server handles the business logic as a server-side process. WebLogic HTTP servlets can access databases, Enterprise JavaBeans,messaging APIs, HTTP sessions, and other facilities of WebLogic Server

A servlet is a Java programming language class that is used to extend the capabilities of servers that host applications accessed by means of a request-response programming model. Although servlets can respond to any type of request, they are commonly used to extend the applications hosted by web servers. For such applications, Java Servlet technology defines HTTP-specific servlet classes.

The following is a typical sequence of events:-

1. A client (e.g., a Web browser) accesses a Web server and makes an HTTP request.
2. The request is received by the Web server and handed off to the servlet container.The servlet container can be running in the same process as the host Web server,
in a different process on the same host, or on a different host from the Web server for which it processes requests.
3. The servlet container determines which servlet to invoke based on the configuration of its servlets, and calls it with objects representing the request and response.
4. The servlet uses the request object to find out who the remote user is, what HTTP POST parameters may have been sent as part of this request, and other relevant data. The servlet performs whatever logic it was programmed with, and generates data to send back to the client. It sends this data back to the client via the response object.
5. Once the servlet has finished processing the request, the servlet container ensures that the response is properly flushed, and returns control back to the host Web server.

Servlets use classes and interfaces from two packages: javax.servlet and javax.servlet.http. The javax.servlet package contains classes and interfaces to support generic, protocol-independent servlets. These classes are extended by the classes in the javax.servlet.http package to add HTTP-specific functionality. The top-level package name is javax instead of the familiar java, to indicate that the Servlet API is an Optional Package (formerly called a Standard Extension).
Every servlet must implement the javax.servlet.Servlet interface. Most servlets implement this interface by extending one of two special classes: javax.servlet.GenericServlet or javax.servlet.http.HttpServlet. A protocol-independent servlet should subclass GenericServlet, while an HTTP servlet should subclass HttpServlet, which is itself a subclass of GenericServlet with added HTTP-specific functionality.

Unlike a regular Java program, and just like an applet, a servlet does not have a main( ) method. Instead, certain methods of a servlet are invoked by the server in the process of handling requests. Each time the server dispatches a request to a servlet, it invokes the servlet's service( ) method.

Comparing Servlets with Other Technologies:- In functionality, servlets provide a higher level abstraction than Common Gateway Interface (CGI) programs but a lower level of abstraction than that provided by web frameworks such as JavaServer Faces.

Servlets have the following advantages over other server extension mechanisms:

1. They are generally much faster than CGI scripts because a different process model is used.
2. They use a standard API that is supported by many Web servers.
3. They have all the advantages of the Java programming language, including ease of development and platform independence.
4. They can access the large set of APIs available for the Java platform.

## The Power of Servlets

1. `Portability`:- Because servlets are written in Java and conform to a well-defined and widely accepted API, they are highly portable across operating systems and across server implementations. You can develop a servlet on a Windows NT machine running the Tomcat server and later deploy it effortlessly on a high-end Unix server running the iPlanet/Netscape Application Server. With servlets, you can truly "write once, serve everywhere."
2. `Power`:- Servlets can harness the full power of the core Java APIs: networking and URL access, multithreading, image manipulation, data compression, database connectivity (JDBC), object serialization, internationalization, remote method invocation (RMI), and legacy integration (CORBA). Servlets can also take advantage of the J2EE platform that includes support for Enterprise JavaBeans (EJBs), distributed transactions (JTS), standardized messaging (JMS), directory lookup (JNDI), and advanced database access (JDBC 2.0). The list of standard APIs available to servlets continues to grow, making the task of web application development faster, easier, and more reliable.
3. `Efficiency and Endurance`:- Servlet invocation is highly efficient. Once a servlet is loaded, it remains in the server's memory as a single object instance.Thereafter, the server invokes the servlet to handle a request using a simple, lightweight method invocation. Unlike with CGI, there's no process to spawn or interpreter to invoke, so the servlet can begin handling the request almost immediately. Multiple, concurrent requests are handled by separate threads, so servlets are highly scalable.

## Servlet Container

`Servlet/JSP Containers`, sometimes called `servlet/JSP engines`, are Web server extensions that provide servlet functionality. Servlets interact with Web clients via a request/response paradigm implemented by the servlet container.The server must run web server software.In addition,to work with servlets and JSPs,the server must also run a servlet/JSP engines.For a servlet/JSP engine to work properly,the engine must be able to access the JDK that comes as part of Java SE.The JDK contains the Java compiler and core classes for working with Java and JRE for running compiled classes.

The container manages the lifecycle of a servlet.JVM cannot automate the process of object creation,management,method calls so we cannot execute Servlet and JSP directly through JVM.Containers can do this automation process.

The servlet container is a part of a Web server or application server that provides the network services over which requests and responses are sent, decodes MIME-based requests, and formats MIME-based responses. A servlet container also contains and manages servlets through their lifecycle.
A servlet container can be built into a host Web server, or installed as an add-on component to a Web Server via that server’s native extension API. Servlet containers can also be built into or possibly installed into Web-enabled application servers.

All servlet containers must support HTTP as a protocol for requests and responses, but additional request/response-based protocols such as HTTPS (HTTP over SSL) may be supported. The required versions of the HTTP specification that a container must implement are HTTP/1.1 and HTTP/2. When supporting HTTP/2, servlet containers must support the “h2” and “h2c” protocol identifiers. This implies all servlet containers must support ALPN. Because the container may have a caching mechanism described in RFC 7234 (HTTP/1.1 Caching), it may modify requests from the clients before delivering them to the servlet, may modify responses produced by servlets before sending them to the clients, or may respond to requests without delivering them to the servlet under the compliance with RFC 7234.

A servlet container may place security restrictions on the environment in which a servlet executes. In a Java Platform, Standard Edition (J2SE, v.1.3 or above) or Java Platform, Enterprise Edition (Java EE, v.1.3 or above) environment, these restrictions should be placed using the permission architecture defined by the Java platform. For example some application servers may limit the creation of a Thread object to insure that other components of the container are not negatively impacted.

Java SE 8 is the minimum version of the underlying Java platform with which servlet containers must be built.

Servers like Weblogic will get built-in JDK/JRE during installation whereas Servers like Tomcat will use JDK/JRE installed on the computer.
Every server has built-in middleware services.This includes:-

1. Security
2. Transaction
3. Logging
4. Auditing

## Creating a Servlet

The `javax.servlet` and `javax.servlet.http` packages provide interfaces and classes for writing servlets. All servlets must implement the Servlet interface, which defines life-cycle methods. When implementing a generic service, you can use or extend the `GenericServlet` class provided with the Java Servlet API. The HttpServlet class provides methods, such as doGet and doPost, for handling HTTP-specific services.

`Creating a servlet`:- In a typical Jakarta Servlet based web application, the class must extend jakarta.servlet.http.HttpServlet and override one of the doXxx methods where Xxx represents the HTTP method of interest.

```java
public class StudentServlet extends HttpServlet{

    @Override
    public void doPost(HttpRequesst request, HttpResponse response)throws ServletException,IOException
    {
        ...
    }
}
```

- **HttpServlet class**-Provides an abstract class to be subclassed to create an HTTP servlet suitable for a Web site. A subclass of HttpServlet must override at least one method, usually one of these:
 1. doGet, if the servlet supports HTTP GET requests
 2. doPost, for HTTP POST requests
 3. doPut, for HTTP PUT requests
 4. doDelete, for HTTP DELETE requests
 5. init and destroy, to manage resources that are held for the life of the servlet
 6. getServletInfo, which the servlet uses to provide information about itself

There's almost no reason to override the service method. service handles standard HTTP requests by dispatching them to the handler methods for each HTTP request type (the doXXX methods listed above).
Servlets typically run on multithreaded servers, so be aware that a servlet must handle concurrent requests and be careful to synchronize access to shared resources. Shared resources include in-memory data such as instance or class variables and external objects such as files, database connections, and network connections.

**GenericServlet**:- Defines a generic, protocol-independent servlet. To write an HTTP servlet for use on the Web, extend jakarta. servlet. http. HttpServlet instead.
GenericServlet implements the Servlet and ServletConfig interfaces. GenericServlet may be directly extended by a servlet, although it's more common to extend a protocol-specific subclass such as HttpServlet.
GenericServlet makes writing servlets easier. It provides simple versions of the lifecycle methods init and destroy and of the methods in the ServletConfig interface. GenericServlet also implements the log method, declared in the ServletContext interface.


The **Servlet interface**:- is the central abstraction of the Java Servlet API. Defines methods that all servlets must implement.All servlets implement this interface either directly, or more commonly, by extending a class that implements the interface. The two classes in the Java Servlet API that implement the Servlet interface are `GenericServlet` and `HttpServlet`. For most purposes, Developers will extend HttpServlet to implement their servlets.

This interface defines methods to initialize a servlet, to service requests, and to remove a servlet from the server. These are known as life-cycle methods and are called in the following sequence:
1. The servlet is constructed, then initialized with the init method.
2. Any calls from clients to the service method are handled.
3. The servlet is taken out of service, then destroyed with the destroy method, then garbage collected and finalized.

A protocol-independent servlet should subclass GenericServlet, while an HTTP servlet should subclass HttpServlet, which is itself a subclass of GenericServlet with added HTTP-specific functionality.

A servlet is a Java programming language class that directly or indirectly implements the jakarta.servlet.Servlet interface. The jakarta.servlet and jakarta.servlet.http packages provide interfaces and classes for writing servlets. All servlets must implement the jakarta.servlet.Servlet interface, which defines lifecycle methods such as init, service, and destroy.A servlet is a java class that extends HttpServlet class and runs on server within a servlet container.

Unlike a regular Java program, and just like an applet, a servlet does not have a main( ) method. Instead, certain methods of a servlet are invoked by the server in the process of handling requests. Each time the server dispatches a request to a servlet, it invokes the servlet's service( ) method.

A generic servlet should override its service( ) method to handle requests as appropriate for the servlet. The service( ) method accepts two parameters: a request object and a response object. The request object tells the servlet about the request, while the response object is used to return a response.

In contrast, an HTTP servlet usually does not override the service( ) method. Instead, it overrides doGet( ) to handle GET requests and doPost( ) to handle POST requests. An HTTP servlet can override either or both of these methods, depending on the type of requests it needs to handle. The service( ) method of HttpServlet handles the setup and dispatching to all the doXXX( ) methods, which is why it usually should not be overridden.

The remainder in the javax.servlet and javax.servlet.http packages are largely support classes. For example, the ServletRequest and ServletResponse classes in javax.servlet provide access to generic server requests and responses,while HttpServletRequest and HttpServletResponse in javax.servlet.http provide access to HTTP requests and responses. The javax.servlet.http package also contains an HttpSession interface that provides built-in session tracking functionality and a Cookie class that allows you to quickly set up and process HTTP cookies.

A generic servlet should override its service( ) method to handle requests as appropriate for the servlet. The service( ) method accepts two parameters: a request object and a response object. The request object tells the servlet about the request,while the response object is used to return a response.

In contrast, an HTTP servlet usually does not override the service( ) method. Instead, it overrides doGet( ) to handle GET requests and doPost( ) to handle POST requests. An HTTP servlet can override either or both of these methods, depending on the type of requests it needs to handle. The service( ) method of HttpServlet handles the setup and dispatching to all the doXXX( ) methods, which is why it usually should not be overridden

An HTTP servlet can override the doPut( ) and doDelete( ) methods to handle PUT and DELETE requests, respectively.However, HTTP servlets generally don't touch doTrace( ) or doOptions( ). For these, the default implementations are almost always sufficient.
The remainder in the javax.servlet and javax.servlet.http packages are largely support classes. For example, the
ServletRequest and ServletResponse classes in javax.servlet provide access to generic server requests and responses,while HttpServletRequest and HttpServletResponse in javax.servlet.http provide access to HTTP requests and responses. The javax.servlet.http package also contains an HttpSession interface that provides built-in session tracking functionality and a Cookie class that allows you to quickly set up and process HTTP cookies.


## Life cycle

- `Servlet Life Cycle`:- A servlet is managed through a well defined life cycle that defines how it is loaded and instantiated, is initialized, handles requests from clients, and is taken out of service. This life cycle is expressed in the API by the init, service, and destroy methods of the javax.servlet.Servlet interface that all servlets must implement directly or indirectly through the GenericServlet or HttpServlet abstract classes.

When the server loads this servlet, the server creates a single instance to handle every request made of the servlet.

The servlet lifecycle allows servlet containers to address both the performance and resource problems of CGI and the security concerns of low-level server API programming. A common way to execute servlets is for the servlet container to run all its servlets in a single Java Virtual Machine ( JVM). By placing all the servlets into the same JVM, the servlets can efficiently share data with one another, yet they are prevented by the Java language from accessing one another's private data. Servlets can persist between requests inside the JVM as object instances. This takes up far less memory than full-fledged processes, yet servlets still are able to efficiently maintain references to external resources.

The life cycle of a servlet is controlled by the container in which the servlet has been deployed. When a request is mapped to a servlet, the container performs the following steps.
1. If an instance of the servlet does not exist, the web container
    a. Loads the servlet class.
    b. Creates an instance of the servlet class.
    c. Initializes the servlet instance by calling the init method.
2. Invokes the service method, passing request and response objects.

If the container needs to remove the servlet, it finalizes the servlet by calling the servlet’s destroy method.

It's perfectly legal for a servlet to be loaded, created, and instantiated in its own JVM, only to be destroyed and garbage collected without handling any client requests or after handling just one request. Any servlet container that makes this a habit, however,probably won't last long on the open market.
At the time the code for a servlet is loaded, the server creates a single instance. That single instance handles every request made of the servlet. This improves performance in three ways:
1. It keeps the memory footprint small.
2. It eliminates the object creation overhead that would otherwise be necessary to create a new servlet object. A servlet can already be loaded in a virtual machine when a request comes in, letting it begin executing right away.
3. It enables persistence. A servlet can have already loaded anything it's likely to need during the handling of a request. For example, a database connection can be opened once and used repeatedly thereafter. The connection can even be used by a group of servlets. Another example is a shopping cart servlet that loads in memory the price list along with information about its recently connected clients. Yet another servlet may choose to cache entire pages of output to save time if it receives the same request again.

From the servlet developer's perspective, each client is another thread that calls the servlet via the service( ), doGet( ), or doPost( ) methods

- `Init and Destroy` - servlets can define init( ) and destroy( ) methods. The server calls a servlet's init( ) method after the server constructs the servlet instance and before the servlet handles any requests. The server calls the destroy( ) method after the servlet has been taken out of service and all pending requests to the servlet have completed or timed out.
Depending on the server and the web application configuration, the init( ) method may be called at any of these times:
1. When the server starts
2. When the servlet is first requested, just before the service( ) method is invoked
3. At the request of the server administrator

In any case, init( ) is guaranteed to be called and completed before the servlet handles its first request.
The init( ) method is typically used to perform servlet initialization—creating or loading objects that are used by the servlet in the handling of its requests. During the init( ) method a servlet may want to read its initialization (init) parameters. These parameters are given to the servlet itself and are not associated with any single request. They can specify initial values, like where a counter should begin counting, or default values, perhaps a template to use when not specified by the request. Init parameters for a servlet are set in the web.xml deployment descriptor, although some servers have graphical interfaces for modifying this file.

```xml
<init-param>
    <param-name> initial </param-name>
    <param-value> 1000 </param-value>
    <description> The initial value for the counter </description>
</init-param>
```

```java
@Override
public void init() throws ServletException {
    String init = getInitParameter("initial");

    if(init != null) {
        counter = Integer.parseInt(init);
    } else
        counter = 0;
    }
```

You can monitor and react to events in a servlet’s life cycle by defining listener objects whose methods get invoked when life-cycle events occur. To use these listener objects you must define and specify the listener class.

In addition to the life-cycle methods, this interface provides the `getServletConfig` method, which the servlet can use to get any startup information(Returns a ServletConfig object that contains information about a single servlet's configuration), and the `getServletInfo` method, which allows the servlet to return basic information about itself, such as author, version, and copyright.

**ServletConfig**:-A servlet configuration object used by a servlet container to pass information to a servlet during initialization.

- String getServletName() - Returns the name of this servlet instance. The name may be provided via server administration, assigned in the web application deployment descriptor, or for an unregistered (and thus unnamed) servlet instance it will be the servlet's class name.
- ServletContext getServletContext() - Returns a reference to the ServletContext in which the caller is executing.
- String getInitParameter(String name) - Gets the value of the initialization parameter with the given name
- Enumeration<String> getInitParameterNames() - Returns the names of the servlet's initialization parameters as an Enumeration of String objects, or an empty Enumeration if the servlet has no initialization parameters.

`Request Handling Methods`:- The basic Servlet interface defines a service method for handling client requests.This method is called for each request that the servlet container routes to an instance of a servlet.
The handling of concurrent requests to a Web application generally requires that the Web Developer design servlets that can deal with multiple threads executing within the service method at a particular time.Generally the Web container handles concurrent requests to the same servlet by concurrent execution of the service method on different threads.

- `HTTP Specific Request Handling Methods`:- The HttpServlet abstract subclass adds additional methods beyond the basic Servlet interface that are automatically called by the service method in the HttpServlet class to aid in processing HTTP-based requests. These methods are:
    1. doGet for handling HTTP GET requests
    2. doPost for handling HTTP POST requests
    3. doPut for handling HTTP PUT requests
    4. doDelete for handling HTTP DELETE requests
    5. doHead for handling HTTP HEAD requests
    6. doOptions for handling HTTP OPTIONS requests
    7. doTrace for handling HTTP TRACE requests

Typically when developing HTTP-based servlets, a Servlet Developer will only concern himself with the doGet and doPost methods. The other methods are considered to be methods for use by programmers very familiar with HTTP programming.

`Number of Instances`:- The servlet declaration which is either via the annotation-“Annotations and pluggability” or part of the deployment descriptor of the Web
application containing the servlet “Deployment Descriptor”, controls how the servlet container provides instances of the servlet.
For a servlet not hosted in a distributed environment (the default), the servlet container must use only one instance per servlet declaration. However, for a servlet
implementing the SingleThreadModel interface, the servlet container may instantiate multiple instances to handle a heavy request load and serialize requests to a particular instance.
In the case where a servlet was deployed as part of an application marked in the deployment descriptor as distributable, a container may have only one instance per
servlet declaration per Java Virtual Machine (JVM™)1. However, if the servlet in a distributable application implements the SingleThreadModel interface, the container
may instantiate multiple instances of that servlet in each JVM of the container.

The use of the SingleThreadModel interface guarantees that only one thread at a time will execute in a given servlet instance’s service method. It is important to
note that this guarantee only applies to each servlet instance, since the container may choose to pool such objects. Objects that are accessible to more than one servlet
instance at a time, such as instances of HttpSession, may be available at any particular time to multiple servlets, including those that implement SingleThreadModel.
It is recommended that a developer take other means to resolve those issues instead of implementing this interface, such as avoiding the usage of an instance variable or
synchronizing the block of the code accessing those resources. The SingleThreadModel Interface is deprecated in this version of the specification.


`Service Method`:- The service provided by a servlet is implemented in the service method of a GenericServlet, in the doMethod methods (where Method can take the value Get, Delete, Options, Post, Put, or Trace) of an HttpServlet object, or in any other protocol-specific methods defined by a class that implements the Servlet interface. The term service method is used for any method in a servlet class that provides a service to a client.

The general pattern for a service method is to extract information from the request, access external resources, and then populate the response, based on that information. For HTTP servlets, the correct procedure for populating the response is to do the following:

1. Retrieve an output stream from the response.
2. Fill in the response headers.
3. Write any body content to the output stream.

Response headers must always be set before the response has been committed. The web container will ignore any attempt to set or add headers after the response has been committed.


**Servlet Context**:- The ServletContext interface defines a servlet’s view of the Web application within which the servlet is running. The Container Provider is responsible for providing an implementation of the ServletContext interface in the servlet container. Using the ServletContext object, a servlet can log events, obtain URL references to resources,and set and store attributes that other servlets in the context can access.

Defines a set of methods that a servlet uses to communicate with its servlet container, for example, to get the MIME type of a file, dispatch requests, or write to a log file.
There is one context per "web application" per Java Virtual Machine. (A "web application" is a collection of servlets and content installed under a specific subset of the server's URL namespace such as / catalog and possibly installed via a .war file.)
In the case of a web application marked "distributed" in its deployment descriptor, there will be one context instance for each virtual machine. In this situation, the context cannot be used as a location to share global information (because the information won't be truly global). Use an external resource like a database instead.
The ServletContext object is contained within the ServletConfig object, which the Web server provides the servlet when the servlet is initialized.

A ServletContext is rooted at a known path within a Web server. For example, a servlet context could be located at http://example.com/catalog. All requests that begin with the /catalog request path, known as the context path, are routed to the Web application associated with the ServletContext.

- `Initialization Parameters`:-  The following methods of the ServletContext interface allow the servlet access to context initialization parameters associated with a Web application as specified by the Application Developer in the deployment descriptor:
    1. getInitParameter(String name) -Returns a String object that contains value of the specified initialization parameter.If parameter doesn't exist,this method returns a null value.
    2. getInitParameterNames - Initialization parameters are used by an Application Developer to convey setupminformation. Typical examples are a Webmaster’s e-mail address, or the name of a system that holds critical data.

- `Configuration methods`:-  The following methods are added to ServletContext since Servlet 3.0 to enable programmatic definition of servlets, filters and the url pattern that they map to.
These methods can only be called during the initialization of the application either from the contexInitialized method of a ServletContextListener implementation or from the onStartup method of a ServletContainerInitializer implementation. In addition to adding Servlets and Filters, one can also look up an instance of a Registration object corresponding to a Servlet or Filter or a map of all the Registration objects for the Servlets or Filters. If the ServletContext passed to the ServletContextListener’s contextInitialized method where the ServletContextListener was neither
declared in web.xml or web-fragment.xml nor annotated with @WebListener then an UnsupportedOperationException MUST be thrown for all the methods defined in ServletContext for programmatic configuration of servlets, filters and listeners.

- `Context Attributes`:- A servlet can bind an object attribute into the context by name. Any attribute bound into a context is available to any other servlet that is part of the same Web application. The following methods of ServletContext interface allow access to this functionality:
    1. setAttribute
    2. getAttribute
    3. getAttributeNames
    4. removeAttribute

NOTE:- To get initialization parameter that's available to all servlets,you use the getInitParameter method of ServletContext objects, to get an initialization parameter for a specific servlet,you use the getInitParameter method of ServletConfig object.


**ServletContainerInitializer**:- Interface which allows a library/ runtime to be notified of a web application's startup phase and perform any required programmatic registration of servlets, filters, and listeners in response to it.
Implementations of this interface may be annotated with HandlesTypes, in order to receive (at their onStartup method) the Set of application classes that implement, extend, or have been annotated with the class types specified by the annotation.
If an implementation of this interface does not use HandlesTypes annotation, or none of the application classes match the ones specified by the annotation, the container must pass a null Set of classes to onStartup.
Implementations of this interface must be declared by a JAR file resource located inside the META-INF/ services directory and named for the fully qualified class name of this interface, and will be discovered using the runtime's service provider lookup mechanism or a container specific mechanism that is semantically equivalent to it. In either case, ServletContainerInitializer services from web fragment JAR files excluded from an absolute ordering must be ignored, and the order in which these services are discovered must follow the application's classloading delegation model.


## Retrieving Information

To build a successful web application, you often need to know a lot about the environment in which it is running. You may need to find out about the server that is executing your servlets or the specifics of the client that is sending requests. And no matter what kind of environment the application is running in, you most certainly need information about the requests that the application is handling.

A number of methods provide servlets access to this information. For the most part, each method returns one specific result.

- **The Servlet**:- Each registered servlet name can have specific initialization (init) parameters associated with it. Init parameters are available to the servlet at any time; they are set in the web.xml deployment descriptor and generally used in init( ) to set initial or default values for a servlet or to customize the servlet's behavior in some way.


`Getting a Servlet Init Parameter`:- A servlet uses the getInitParameter( ) method for access to its init parameters:

```java
public String ServletConfig.getInitParameter(String name)
```

This method returns the value of the named init parameter or null if it does not exist. The return value is always a single String. It is up to the servlet to interpret the value.
The GenericServlet class implements the ServletConfig interface and thus provides direct access to the getInitParameter ( ) method. This means the method can be called like this:

```java
public void init() throws ServletException {
 String greeting = getInitParameter("greeting");
}
```

A servlet that needs to establish a connection to a database can use its init parameters to define the details of the connection. We can assume a custom establishConnection( ) method to abstract away the details of JDBC.

```java
java.sql.Connection con = null;

public void init() throws ServletException {
    String host = getInitParameter("host");
    int port = Integer.parseInt(getInitParameter("port"));
    String db = getInitParameter("db");
    String user = getInitParameter("user");
    String password = getInitParameter("password");
    String proxy = getInitParameter("proxy");

    con = establishConnection(host, port, db, user, password, proxy);
}
```

`Getting Servlet Init Parameter Names`:- A servlet can examine all its init parameters using getInitParameterNames( ):

```java
public Enumeration ServletConfig.getInitParameterNames()
```

This method returns the names of all the servlet's init parameters as an Enumeration of String objects or an empty Enumeration if no parameters exist. It's most often used for debugging.
The GenericServlet class additionally makes this method directly available to servlets.

```java
Enumeration enum = getInitParameterNames();
    while (enum.hasMoreElements()) {
        String name = (String) enum.nextElement();
        out.println(name + ": " + getInitParameter(name));
}
```

`Getting a Servlet's Name`:-Also in the ServletConfig interface there's a method that returns the servlet's registered name:

```java
public String ServletConfig.getServletName()
```

If the servlet is unregistered, the method returns the servlet's class name. This method proves useful when writing to logs and when storing a servlet instance's state information into a shared resource such as a database or the servlet's SessionContext

```java
String name = getServletName();
ServletContext context = getServletContext();
Object value = context.getAttribute(name + ".state");
```

Using the servlet name in the key, each servlet instance can easily keep a separate attribute value within the shared context.


- **The Server**:- A servlet can find out much about the server in which it is executing. It can learn the hostname, listening port, and server software, among other things. A servlet can display this information to a client, use it to customize its behavior based on a particular server package, or even use it to explicitly restrict the machines on which the servlet will run.

`Getting Information About the Server`:- A servlet gains most of its access to server information through the ServletContext object in which it executes. Before API 2.2, the ServletContext was generally thought of as a reference to the server itself. Since API 2.2 the rules have changed and there now must be a different ServletContext for each web application on the server. The ServletContext has become a reference to the web application, not a reference to the server. For simple server queries, there's not much difference.

There are five methods that a servlet can use to learn about its server: two that are called using the ServletRequest object passed to the servlet and three that are called from the ServletContext object in which the servlet is executing.

A servlet can get the name of the server and the port number for a particular request with getServerName( ) and getServerPort( ), respectively:

```java
public String ServletRequest.getServerName()
public int ServletRequest.getServerPort()
```

These methods are attributes of ServletRequest because the values can change for different requests if the server has more than one name (a technique called virtual hosting). The returned name might be something like www.servlets.com while the returned port might be something like 8080.


The getServerInfo( ) and getAttribute( ) methods of ServletContext provide information about the server software and its attributes:

```java
public String ServletContext.getServerInfo()
public Object ServletContext.getAttribute(String name)
```

getServerInfo( ) - returns the name and version of the server software, separated by a slash. The string returned might be something like Tomcat Web Server/3.2. Some servers add extra information at the end describing the server operating environment.
getAttribute( ) - returns the value of the named server attribute as an Object or null if the attribute does not exist. Servers have the option to place hardcoded attributes in the context for use by servlets. You can think of this method as a back door through which a servlet can get extra information about its server.The only mandatory attribute a server must make available is an attribute named javax.servlet.context.tempdir, which provides a java.io.File reference to a directory private to this context.

Servlets can also add their own attributes to the context using the setAttribute( ) method.Attribute names should follow the same convention as package names. The package names java.* and javax.* are reserved for use by the Java Software division of Sun Microsystems, and com.sun.* is reserved for use by Sun Microsystems. You can see your
server's documentation for a list of its attributes. A listing of all current attributes stored by the server and other servlets can be obtained using getAttributeNames( ) :

```java
public Enumeration ServletContext.getAttributeNames()
```

Because these methods are attributes of the ServletContext in which the servlet is executing, you have to call them through that object:

```java
String serverInfo = getServletContext().getServerInfo();
```


- **The Client**:- For each request, a servlet has the ability to find out about the client machine and, for pages requiring authentication, about the actual user. This information can be used for logging access data, associating information with individual users, or restricting access to certain clients.


`Getting Information About the Client Machine`:- A servlet can use getRemoteAddr( ) and getRemoteHost( ) to retrieve the IP address and hostname of the client machine, respectively:

```java
public String ServletRequest.getRemoteAddr()
public String ServletRequest.getRemoteHost()
```

Both values are returned as String objects. The information comes from the socket that connects the server to the client, so the remote address and hostname may be that of a proxy server. An example remote address might be 192.26.80.118 while an example remote host might be dist.engr.sgi.com.
The IP address or remote hostname can be converted to a java.net.InetAddress object using InetAddress.getByName ( ):

```java
InetAddress remoteInetAddress = InetAddress.getByName(req.getRemoteAddr());
```


- **The Request**:- The request object encapsulates all information from the client request. In the HTTP protocol, this information is transmitted from the client to the server in the HTTP headers and the message body of the request.

*ServletRequest*- Defines an object to provide client request information to a servlet. The servlet container creates a ServletRequest object and passes it as an argument to the servlet's service method.

A ServletRequest object provides data including parameter name and values, attributes, and an input stream. Interfaces that extend ServletRequest can provide additional protocol-specific data (for example, HTTP data is provided by HttpServletRequest.)

1. String getParameter(String name) -Returns the value of a request parameter as a String, or null if the parameter does not exist.
2. void setAttribute(String name, Object o)- Stores an attribute in this request
3. Object getAttribute(String name)- Returns the value of the named attribute as an Object, or null if no attribute of the given name exists.

*HttpServletRequest*-Extends the ServletRequest interface to provide request information for HTTP servlets.The servlet container creates an HttpServletRequest object and passes it as an argument to the servlet's service methods (doGet, doPost, etc)

1. Cookie[] getCookies()- Returns an array containing all of the Cookie objects the client sent with this request.
2. HttpSession getSession()-Returns the current session associated with this request, or if the request does not have a session, creates one.
3. HttpSession getSession(boolean create)-Returns the current HttpSession associated with this request or, if there is no current session and create is true, returns a new session.

- `Request Parameters`:- Each access to a servlet can have any number of request parameters associated with it. These parameters are typically name/value pairs that tell the servlet any extra information it needs to handle the request.
An HTTP servlet gets its request parameters as part of its query string (for GET requests) or as encoded POST data (for POST requests), or sometimes both. Fortunately, every servlet retrieves its parameters the same way, using getParameter( ) and getParameterValues( ):
HTTP Protocol Parameters:- Request parameters for the servlet are the strings sent by the client to a servlet container as part of its request. When the request is an HttpServletRequest object,and conditions set out in ”When Parameters Are Available” are met, the container populates the parameters from the URI query string and POST-ed data.
The parameters are stored as a set of name-value pairs. Multiple parameter values can exist for any given parameter name. The following methods of the ServletRequest interface are available to access parameters:

1. getParameter(String param) - Returns value of the specified parameter as a string if it exists or null if it doesn't.Often,this value is defined in Value attribute of the control in HTML pages or JSP.For textbox,that's usually value entered by user.For a group of radio radio buttons or a combo box,that's value of the button or item selected by user.For checkboxes or independent radio buttons that have Value attribute,the method returns that value if or button is selected and null if not.For checkboxes or independent radio buttons that don't have value attribute,though the method returns "on" value if checkbox or button is selected and null if not.
2. The getParameterValues(String param) - .Retrieves multiple values for one parameter name.method returns an array of String objects containing all the parameter values associated with a parameter name. The value returned from the getParameter method must be the first value in the array of String objects returned by getParameterValues.useful for controls like controls like list boxes that allow multiple selections.After returning array of the String Objects,you can use a loop to get values.
3. The getParameterMap- method returns a java.util.Map of the parameter of the request, which contains names as keys and parameter values as map values.Data from the query string and the post body are aggregated into the request parameter set. Query string data is presented before post body data. For example, if a request is made with a query string of a=hello and a post body of a=goodbye&a=world, the resulting parameter set would be ordered a=(hello, goodbye, world).Path parameters that are part of a GET request (as defined by HTTP 1.1) are not exposed by these APIs. They must be parsed from the String values returned by the getRequestURI method or the getPathInfo method.
4. getParameterValues
5. getParameterMap
6. getPrameterNames()- Returns an Enumeration object that contains names of all parameters contained in request.If request has no parameters,the method returns an empty Enumeration object.You can search through Enumeration object to get parameter names,and you can use the getParameter method to return value of each parameter name.Enumeration object is a collection that can be searched element by element.To determine if more element exist in the collection,you can use hasMoreElements method,which returns a Boolean value.And to get next element in the collection,you can use nextElement method.

The following are the conditions that must be met before post form data will be populated to the parameter set:

1. The request is an HTTP or HTTPS request.
2. The HTTP method is POST.
3. The content type is application/x-www-form-urlencoded.
4. The servlet has made an initial call of any of the getParameter family of methods on the request object.

If the conditions are not met and the post form data is not included in the parameter set, the post data must still be available to the servlet via the request object’s input stream. If the conditions are met, post form data will no longer be available for reading directly from the request object’s input stream.

Finally, a servlet can retrieve the raw query string of the request with getQueryString( ):

```java
public String ServletRequest.getQueryString()
```

This method returns the raw query string (encoded GET parameter information) of the request or null if there was no query string.
This low-level information is rarely useful for handling form data. It's best for handling a single unnamed value, as in /servlet/Sqrt?576, where the returned query string is 576.



- `Attributes`:- Attributes are objects associated with a request. Attributes may be set by the container to express information that otherwise could not be expressed via the API,or may be set by a servlet to communicate information to another servlet (via the RequestDispatcher). Attributes are accessed with the following methods of the ServletRequest interface:

1. getAttribute(String name) Returns the value of specified attribute as an Object type.If no attribute exists for specified name,this method returns a null value.
2. getAttributeNames
3. setAttribute(String name,Object o) Stores any objject in the request as an attribute and specifies a name of the attribute.Attributes are reset between requests.

Only one attribute value may be associated with an attribute name.Attribute names beginning with the prefixes of java. and javax. are reserved for definition by this specification. Similarly, attribute names beginning with the prefixes of sun., com.sun., oracle and com.oracle are reserved for definition by Oracle Corporation. It is suggested that all attributes placed in the attribute set be named in accordance with the reverse domain name convention suggested by the Java Programming Language Specification1 for package naming.

When you use MVC pattern, your servlets often need to forward a request object to a JSP or another servlet.First you need to store any object in request object, you use the `setAttribute` method.Once you store an object in request object,you can use the `getAttribute` method to retrieve the object.The request attributes are reset between requests.As a result if you store an Object as request attribute and forward that request to a JSP,that object will only be available to that JSP and won't be available in later sessions.

These methods are often used in conjuction with a RequestDispatcher object that's used to forward a request.


`Getting Information from Requests`:- A request contains data passed between a client and the servlet. All requests implement the ServletRequest interface. This interface defines methods for accessing the following information:

1. Parameters, which are typically used to convey information between clients and servlets
2. Object-valued attributes, which are typically used to pass information between the web container and a servlet or between collaborating servlets
3. Information about the protocol used to communicate the request and about the client and server involved in the request
4. Information relevant to localization

You can also retrieve an input stream from the request and manually parse the data. To read character data, use the BufferedReader object returned by the request’s getReader method. To read binary data, use the ServletInputStream returned by getInputStream.

HTTP servlets are passed an HTTP request object, HttpServletRequest, which contains the request URL, HTTP headers, query string, and so on. An HTTP request URL contains the following parts: `http://[host]:[port][request-path]?[query-string]`

The request path is further composed of the following elements:

1. Context path: A concatenation of a forward slash (/) with the context root of the servlet’s web application.
2. Servlet path: The path section that corresponds to the component alias that activated this request. This path starts with a forward slash (/).
3. Path info: The part of the request path that is not part of the context path or the servlet path.

You can use the getContextPath, getServletPath, and getPathInfo methods of the HttpServletRequest interface to access this information. Except for URL encoding differences between the request URI and the path parts, the request URI is always comprised of the context path plus the servlet path plus the path info.

Query strings are composed of a set of parameters and values. Individual parameters are retrieved from a request by using the getParameter method. There are two ways to generate query strings.

1. A query string can explicitly appear in a web page.
2. A query string is appended to a URL when a form with a GET HTTP method is submitted.


- **File upload** - Servlet container allows files to be uploaded when data is sent as multipart/form-data.n prior versions of the Servlet specification, implementing file upload required the use of external libraries or complex input processing. The Java Servlet specification now helps to provide a viable solution to the problem in a generic and portable way. Java Servlet technology now supports file upload out of the box, so any web container that implements the specification can parse multipart requests and make mime attachments available through the HttpServletRequest object.
A new annotation, `javax.servlet.annotation.MultipartConfig`, is used to indicate that the servlet on which it is declared expects requests to be made using the multipart/form-data MIME type. Servlets that are annotated with `@MultipartConfig` can retrieve the Part components of a given multipart/form-data request by calling the request.getPart(String name) or request.getParts() method.

The servlet container provides multipart/form-data processing if any one of the following conditions is met.
1. The servlet handling the request is annotated with the @MultipartConfig.
2. Deployment descriptors contain a multipart-config element for the servlet handling the request.How data in a request of type multipart/form-data is made available depends on whether the servlet container provides multipart/form-data processing:

- If the servlet container provides multipart/form-data processing, the data is made available through the following methods in HttpServletRequest:
public Collection<Part> getParts() - Each part provides access to the headers, content type related with it and the content via the Part.getInputStream method.
public Part getPart(String name) - For parts with form-data as the Content-Disposition, but without a filename,the string value of the part will also be available through the getParameter and getParameterValues methods on HttpServletRequest, using the name of them part.

If the servlet container does not provide the multi-part/form-data processing, the data will be available through the HttpServletReuqest.getInputStream.

- `@MultipartConfig Annotation`:- The @MultipartConfig annotation supports the following optional attributes.
    1. location: An absolute path to a directory on the file system. The location attribute does not support a path relative to the application context. This location is used to store files temporarily while the parts are processed or when the size of the file exceeds the specified fileSizeThreshold setting. The default location is "".
    2. fileSizeThreshold: The file size in bytes after which the file will be temporarily stored on disk. The default size is 0 bytes.
    3. MaxFileSize: The maximum size allowed for uploaded files, in bytes. If the size of any uploaded file is greater than this size, the web container will throw an exception (IllegalStateException). The default size is unlimited.
    4. maxRequestSize: The maximum size allowed for a multipart/form-data request, in bytes. The web container will throw an exception if the overall size of all uploaded files exceeds this threshold. The default size is unlimited.

For, example, the @MultipartConfig annotation could be constructed as follows:

```java
@MultipartConfig(location="/tmp", fileSizeThreshold=1024*1024,maxFileSize=1024*1024*5, maxRequestSize=1024*1024*5*5)
```

Instead of using the @MultipartConfig annotation to hard-code these attributes in your file upload servlet, you could add the following as a child element of the servlet configuration element in the web.xml file:

```xml
<multipart-config>
    <location>/tmp</location>
    <max-file-size>20848820</max-file-size>
    <max-request-size>418018841</max-request-size>
    <file-size-threshold>1048576</file-size-threshold>
</multipart-config>
```


Request Path Elements
The request path that leads to a servlet servicing a request is composed of many important sections. The following elements are obtained from the request URI path and exposed via the request object:

Context Path: The path prefix associated with the ServletContext that this servlet is a part of. If this context is the “default” context rooted at the base of the Web server’s URL name space, this path will be an empty string. Otherwise, if the context is not rooted at the root of the server’s name space, the path starts with a / character but does not end with a / character.
Servlet Path: The path section that directly corresponds to the mapping which activated this request. This path starts with a ’/’ character except in the case where the request is matched with the ‘/*’ or ““ pattern, in which case it is an empty string.
PathInfo: The part of the request path that is not part of the Context Path or the Servlet Path. It is either null if there is no extra path, or is a string with a leading ‘/’.

The following methods exist in the HttpServletRequest interface to access this information:

getContextPath
getServletPath
getPathInfo
It is important to note that, except for URL encoding differences between the request URI and the path parts, the following equation is always true:
requestURI = contextPath + servletPath + pathInfo


## Sending Information

- **The Structure of a Response**:- An HTTP servlet can return three kinds of things to the client: a single status code, any number of HTTP headers, and a response body. A status code is an integer value that describes, as you would expect, the status of the response. The status code can indicate success or failure, or it can tell the client software to take further action to finish the request. The numerical status code is often accompanied by a reason phrase that describes the status in prose better understood by a human. Usually, a status code works behind the scenes and is interpreted by the browser software. Sometimes, especially when things go wrong, a browser may show the status code to the user. The most famous status code is probably the 404 Not Found code, sent by a web server when it cannot locate a requested URL.

The response body is the main content of the response. For an HTML page, the response body is the HTML itself. For a graphic, the response body contains the bytes that make up the image. A response body can be of any type and of any length; the client knows what to expect by reading and interpreting the HTTP headers in the response.

A servlet can buffer its response body to give it some extra flexibility, but once any response body has been sent the response is considered committed and the status code and headers cannot be altered.
The response object encapsulates all information to be returned from the server to the client. In the HTTP protocol, this information is transmitted from the server to
the client either by HTTP headers or the message body of the request.

`ServletResponse`-Defines an object to assist a servlet in sending a response to the client. The servlet container creates a ServletResponse object and passes it as an argument to the servlet's service method.

`HttpServletResponse`-Extends the ServletResponse interface to provide HTTP-specific functionality in sending a response. For example, it has methods to access HTTP headers and cookies.The servlet container creates an HttpServletResponse object and passes it as an argument to the servlet's service methods (doGet, doPost, etc).
HTTP response objects, javax.servlet.http.HttpServletResponse, have fields representing HTTP headers, such as the following:

1. Status codes, which are used to indicate the reason a request is not satisfied or that a request has been redirected.
2. Cookies, which are used to store application-specific information at the client. Sometimes, cookies are used to maintain an identifier for tracking a user’s session (see Session Tracking).

A generic servlet is much simpler than an HTTP servlet—it returns only a response body to its client. It's possible, however, for a subclass of GenericServlet to present an API that divides this single response body into a more elaborate structure, giving the appearance of returning multiple items. In fact, this is exactly what HTTP servlets do. At the lowest level, a web server sends its entire response as a stream of bytes to the client. Any methods that set status codes or headers are abstractions above that.


**Constructing Responses**:- A response contains data passed between a server and the client. All responses implement the ServletResponse interface. This interface defines methods that allow you to operate on.

Retrieve an output stream to use to send data to the client.
To send character data, use the `PrintWriter` returned by the response’s `getWriter method`. To send binary data in a Multipurpose Internet Mail Extensions (MIME) body response, use the `ServletOutputStream` returned by `getOutputStream`. To mix binary and text data, as in a multipart response, use a `ServletOutputStream` and manage the character sections manually.

The charset for the MIME body response can be specified explicitly using any of the following techniques: per request, per web-app (using ServletContext.setRequestCharacterEncoding(java.lang.String), deployment descriptor), and per container (for all web applications deployed in that container, using vendor specific configuration). If multiple of the preceding techniques have been employed, the priority is the order listed. For per request, the charset for the response can be specified explicitly using the `setCharacterEncoding(String)`, `setCharacterEncoding(Charset)` and `setContentType(java.lang.String)` methods, or implicitly using the `setLocale(java.util.Locale)` method. Explicit specifications take precedence over implicit specifications. If no charset is explicitly specified, ISO-8859-1 will be used.
The setCharacterEncoding, setContentType, or setLocale method must be called before getWriter and before committing the response for the character encoding to be used. This allows the methods to return an object that uses the proper content type.

Indicate the content type (for example, text/html) being returned by the response with the setContentType(String) method. This method must be called before the response is committed. A registry of content type names is kept by the Internet Assigned Numbers Authority (IANA) at http://www.iana.org/assignments/media-types/.

Indicate whether to buffer output with the `setBufferSize(int)` method. By default, any content written to the output stream is immediately sent to the client.
Buffering allows content to be written before anything is sent back to the client, thus providing the servlet with more time to set appropriate status codes and headers or forward to another web resource. The method must be called before any content is written or before the response is committed.
These methods are provided on the ServletResponse interface to allow buffering operations to be performed whether the servlet is using a ServletOutputStream or a Writer.
The getBufferSize method returns the size of the underlying buffer being used. If no buffering is being used, this method must return the int value of 0 (zero).
The servlet can request a preferred buffer size by using the setBufferSize method.
The buffer assigned is not required to be the size requested by the servlet, but must be at least as large as the size requested. This allows the container to reuse a set of fixed size buffers, providing a larger buffer than requested if appropriate. The method must be called before any content is written using a ServletOutputStream or Writer. If any content has been written or the response object has been committed, this method must throw an IllegalStateException.
The isCommitted method returns a boolean value indicating whether any response bytes have been returned to the client. The flushBuffer method forces content in the buffer to be written to the client.
The reset method clears data in the buffer when the response is not committed.
Headers, status codes and the state of calling getWriter or getOutputStream set by the servlet prior to the reset call must be cleared as well. The resetBuffer method clears content in the buffer if the response is not committed without clearing the headers and status code.
If the response is committed and the reset or resetBuffer method is called, an IllegalStateException must be thrown. The response and its associated buffer will be unchanged.
When using a buffer, the container must immediately flush the contents of a filled buffer to the client. If this is the first data that is sent to the client, the response is considered to be committed.

Set localization information, such as locale and character encoding.


```java
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class HelloWorld extends HttpServlet {
    public void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        res.setContentType("text/html");
        PrintWriter out = res.getWriter();

        out.println("<HTML>");
        out.println("<HEAD><TITLE>Hello World</TITLE></HEAD>");
        out.println("<BODY>");
        out.println("<BIG>Hello World</BIG>");
        out.println("</BODY></HTML>");
    }
}
```


- `Convenience Methods`:- The following convenience methods exist in the HttpServletResponse interface:

1. sendRedirect -The sendRedirect method will set the appropriate headers and content body to redirect the client to a different URL. It is legal to call this method with a relative URL path, however the underlying container must translate the relative path to a fully qualified URL for transmission back to the client. If a partial URL is given and, for whatever reason, cannot be converted into a valid URL, then this method must throw an IllegalArgumentException.
2. sendError - The sendError method will set the appropriate headers and content body for an error message to return to the client. An optional String argument can be provided to the sendError method which can be used in the content body of the error.

These methods will have the side effect of committing the response, if it has not already been committed, and terminating it. No further output to the client should
be made by the servlet after these methods are called. If data is written to the response after these methods are called, the data is ignored.
If data has been written to the response buffer, but not returned to the client (i.e. the response is not committed), the data in the response buffer must be cleared and
replaced with the data set by these methods. If the response is committed, these methods must throw an IllegalStateException.

```java
// How to redirect a response relative to the current directory
response.sendRedirect("join_email_list.html");
// How to redirect a response relative to the servlet engine
response.sendRedirect("/musicStore/email/join_email_list.jsp");
// How to redirect a response to a different web server
response.sendRedirect("http://www.murach.com/email/");
```


**Debugging**:-

`Print debugging Data to console`:- You can print debugging messages to the console for servlet engine.To do that,you can use the println method of System.out or System.err objects.You can use these messages to help track the methods that are executed or to view value of variables.
When you use println statements to check value of variable,you'll often want to include the name of the class and name of variable.
When you use println statements to print debugging data to the console,this data may be printed to different locations depending on your development environment.If you're using IDE,the data will be printed to the Tomcat tab of output window.If you're using Tomcat in stand-alone environment,data will be printed inside a Tomcat console.


```java
String email = request.getParameter("email");
System.out.println("AddToEmailServlet email: " + email);
```

`Print debugging data to log file`:- If you want to keep a permanent history of some key debugging data,you can print debugging data to a log file.Although each servlet engine uses log files a little different,you should be able to use log methods with any servlet engine.
To write data to a log file,you can use two log methodss of HttpServlet class.

log(String message) - Writes specified message to server's log file.
log(String message,Throwable t) - Writes specified message to server's log file,followed by stack trace for the exception.
stack trace is a series of messages that presents the chain of method calls that precede current method.

Tomcat stores its log file in its logs directory.Within this directory,Tomcat stores several types of log files with one file of each type for each date(tomcat/localhost.year-month-date.log).

```java
log("email" + email);

try{
    UserIO.add(user,path);
} catch(IOException e){
    log("Exception occurred.", e)
}
```


## Internationalization

Clients may optionally indicate to a Web server what language they would prefer the response be given in. This information can be communicated from the client using the Accept-Language header along with other mechanisms described in the HTTP/1.1 specification. The following methods are provided in the ServletRequest interface to determine the preferred locale of the sender:

getLocale - The getLocale method will return the preferred locale for which the client wants to accept content. See section 14.4 of RFC 7231 (HTTP/1.1) for more information about how the Accept-Language header must be interpreted to determine the preferred language of the client.
getLocales - The getLocales method will return an Enumeration of Locale objects indicating, in decreasing order starting with the preferred locale, the locales that are acceptable to the client.

If no preferred locale is specified by the client, the locale returned by the getLocale,method must be the default locale for the servlet container and the getLocales
method must contain an enumeration of a single Locale element of the default locale.


## Dispatching Requests

When building a Web application, it is often useful to forward processing of a request to another servlet, or to include the output of another servlet in the response.
The RequestDispatcher interface provides a mechanism to accomplish this.

When asynchronous processing is enabled on the request, the AsyncContext allows a user to dispatch the request back to the servlet container.

`RequestDispatcher`:- Defines an object that receives requests from the client and sends them to any resource (such as a servlet, HTML file, or JSP file) on the server. The servlet container creates the RequestDispatcher object, which is used as a wrapper around a server resource located at a particular path or given by a particular name.
This interface is intended to wrap servlets, but a servlet container can create RequestDispatcher objects to wrap any type of resource.

- Obtaining a RequestDispatcher:- An object implementing the RequestDispatcher interface may be obtained from the ServletContext via the following methods:

1. The getRequestDispatcher method takes a String argument describing a path within the scope of the ServletContext. This path must be relative to the root of the
ServletContext and begin with a ‘/’, or be empty. The method uses the path to look up a servlet, using the servlet path matching rules in Chapter 12, “Mapping
Requests to Servlets”, wraps it with a RequestDispatcher object, and returns the resulting object. If no servlet can be resolved based on the given path, a
RequestDispatcher is provided that returns the content for that path.
2. The getNamedDispatcher method takes a String argument indicating the name of a servlet known to the ServletContext. If a servlet is found, it is wrapped with a
RequestDispatcher object and the object is returned. If no servlet is associated with the given name, the method must return null.

## Servlet Collaboration

Servlets running together in the same server have several ways to communicate with one another. There are two main styles of servlet collaboration:

`Sharing information`:- This involves two or more servlets sharing state or resources. For example, a set of servlets managing an online store could share the store's product inventory count or share a database connection. Session tracking is a special case of sharing information.
`Sharing Control`:- This involves two or more servlets sharing control of the request. For example, one servlet could receive the request but let another servlet handle some or all of the request-handling responsibilities.

In the past (before Servlet API 2.1) we would have listed another style of collaboration: direct manipulation . With this style of collaboration, a servlet could obtain a direct reference to another through the getServlet( ) method and invoke methods on the other servlet. This style of collaboration is no longer supported; the getServlet( ) method has been deprecated and defined to return null for API 2.1 and later. The reason: a servlet may be destroyed by the web server at any time, so nothing but the server should hold a direct reference to a servlet. Everything that could be done with getServlet( ) can be accomplished better and safer using the alternatives.

- **Sharing Information**:- Oftentimes servlets cooperate by sharing some information. The information may be state information, a shared resource, a resource factory, or anything. In Servlet API 2.0 and earlier there were no built-in mechanisms by which servlets could share information.

`Sharing with the ServletContext`:- A servlet retrieves the ServletContext for its web application using the getServletContext( ) call. A servlet may use the context as if it were a Hashtable or Map, with the following methods.

```java
public void ServletContext.setAttribute(String name, Object o)
public Object ServletContext.getAttribute(String name)
public Enumeration ServletContext.getAttributeNames()
public void ServletContext.removeAttribute(String name)
```

The setAttribute( ) method binds an object under a given name. Any existing binding with the same name is replaced. Attribute names should follow the same convention as package names to avoid overwriting one another.
The getAttribute( ) method retrieves the object bound under the given name or null if the attribute does not exist. The call may also retrieve server-specific hard-coded attributes (for example, javax.servlet.context.tempdir)
The getAttributeNames( ) method returns an Enumeration, which contains the names of all the bound attributes or an empty Enumeration if there are no bindings.
The removeAttribute( ) method removes the object bound under the given name or does nothing if the attribute does not exist. It's a good idea to remove attributes that are no longer needed to reduce memory bloat.

```java
ServletContext context = getServletContext();
context.setAttribute("com.costena.special.burrito", "Pollo Adobado");
context.setAttribute("com.costena.special.day", new Date());
```

```java
ServletContext context = getServletContext(); 
String burrito = (String)context.getAttribute("com.costena.special.burrito");
Date day = (Date)context.getAttribute("com.costena.special.day");
```

`Sharing with Another ServletContext`:- Using the ServletContext to share information has the beneficial effect that each web application has its own unique information store. There's no risk of accidental name collisions or even name collisions from the same application deployed twice on a server.
However, sometimes information needs to be shared between web contexts. In this situation, there are two choices. First, use an external information repository such as a singleton or database, or, second, use special hooks to directly access another context.

A servlet can obtain a handle to another context on the same server using the getContext( ) hook in its own context:

```java
public ServletContext ServletContext.getContext(String uripath)
```

This method returns the ServletContext containing the specified URI path. The given path must be absolute (beginning with /) and is interpreted based on the server's document root. This method allows a servlet to gain access to a context outside its own. In a security-conscious or distributed environment,the servlet container may return null for any and all paths.

```java
ServletContext myContext = getServletContext();
ServletContext otherContext = myContext.getContext("/burritostore/index.html");
String burrito = otherContext.getAttribute("com.costena.special.burrito");
Date day = (Date)otherContext.getAttribute("com.costena.special.day");
```

- **Sharing Control**:- For more dynamic collaboration, servlets can share control of the request. First, a servlet can forward an entire request, doing some preliminary processing and then passing off the request to another component. Second, a servlet can include in its response a bit of content generated by another component, essentially creating a programmatic server-side include. Conceptually, if you think of the resulting page like a screen, a forward gives another servlet full control of the screen, while an include injects only a section of content into the screen at some point.
This delegation ability gives servlets more flexibility and allows for better abstraction. Using delegation, a servlet can construct its response as a collection of content generated by various web server components. This functionality is especially important to JavaServer Pages, where it often happens that one servlet preprocesses a request, then hands off the request to a JSP page for completion.

`Getting a Request Dispatcher`:- To support request delegation, Servlet API 2.1 introduced the javax.servlet.RequestDispatcher interface. A servlet gets a RequestDispatcher instance using the getRequestDispatcher( ) method on its request object. This method returns a RequestDispatcher that can dispatch to the component (servlet, JSP, static file, etc.) found at the given URI path:

```java
public RequestDispatcher ServletRequest.getRequestDispatcher(String path)
```

The provided path may be relative, although it cannot extend outside the current servlet context. You can use the getContext( ) method for dispatching outside the current context. There's no way to dispatch to a context on another server. If the path begins with a / it is interpreted as relative to the current context root. If the path contains a query string, the parameters are added to the beginning of the receiving component's parameter set. The method returns null if the servlet container cannot return a RequestDispatcher for any reason.

```java
public RequestDispatcher ServletContext.getRequestDispatcher(String path)
```

The difference here is that the version in ServletContext (introduced in API 2.1) accepts only absolute URLs (beginning with a slash) while the version in ServletRequest (introduced in API 2.2) accepts both absolute URLs and relative URLs.
Consequently, there's no reason to use the method in ServletContext. It exists only for historical reasons and can be considered deprecated although officially it's not.
It's also possible to get a RequestDispatcher for a resource specified by name instead of by path, using getNamedDispatcher( ) in ServletContext:

```java
public RequestDispatcher ServletContext.getNamedDispatcher(String name)
```

This allows dispatching to resources that are not necessarily publicly available. Servlets (and JSP paes also) may be given names via the web application deployment descriptor The method returns null if the context cannot return a dispatcher for any reason.
RequestDispatcher has two methods, forward( ) and include( ). The forward( ) method hands off the entire request to the delegate. The include( ) method adds the delegate's output to the calling servlet's response but leaves the calling servlet in control.

`Dispatching a Forward`:- The forward( ) method forwards a request from a servlet to another resource on the server. The method allows one servlet to do preliminary processing of a request and another resource to generate the response. Unlike a sendRedirect( ), a forward( ) operates entirely within the server, and the client cannot tell the forward occurred. Information can be passed to the delegate using an attached query string or using request attributes set with the setAttribute( ) method.

Forwading and Redirecting Requests:- When you use MVC pattern,your servlets often need to forward a request objet to a JSP or another servlet.But first, sometimes you need to store a business object in the request object.
To store any object in the request object,you can use the `setAttribute` method.Once you store an object in the request object,you can use the `getAttribute` method to retrieve the object.
When you work with request attributes,you should realize that the attribues are reset between requests.

```java
int id = 1;
User user = new User();
request.setAttribute("user", user)
request.setAttribute("id",new Integer(id))

User user = (User) request.getAttribute("user");
User user = (Integer) request.getAttribute("id");
```

- To call a servlet you either:-
    1. Forward the Request and Response.
    2. Redirect Response-To redirect response you use redirect method of response object.Typically used when you transfer control to URL outside your application.

`Forwarding a request and a response`:-To forward the request and response objects from a servlet,you begin by calling the `getServletContext` method from the HttpServlet class to return a ServletContext object.Then, you call the getRequestDispatcher method of servletContext object to return a RequestDispatcher object.Within this method,you must code a URL that start with slash so it is relative to root directory of current web application.Then you use the forward method to forward the request and response objects to HTML page,JSP or servlet specified by URL.

```java
//How to forward the request to an HTML page
String url = "/display_email_entry.html";
RequestDispatcher dispatcher = getServletContext().getRequestDispatcher(url);
dispatcher.forward(request, response);

//How to forward the request to a JSP
String url = "/display_email_entry.jsp";
RequestDispatcher dispatcher = getServletContext().getRequestDispatcher(url);
dispatcher.forward(request, response);

// How to forward the request to a servlet
String url = "/cart/displayInvoice";
RequestDispatcher dispatcher = getServletContext().getRequestDispatcher(url);
dispatcher.forward(request, response);
```


## Sessions & Cookies

The Hypertext Transfer Protocol (HTTP) is by design a stateless protocol. To build effective Web applications, it is imperative that requests from a particular client be associated with each other. Many strategies for session tracking have evolved over time, but all are difficult or troublesome for the programmer to use directly.
This specification defines a simple `HttpSession` interface that allows a servlet container to use any of several approaches to track a user’s session without involving the Application Developer in the nuances of any one approach.

Keeping track of users as they move around a web site is known as `session tracking`.
A browser on a client requests a page from a web server.After the web server returns the page,it drops the connection.Then, if the browser makes additional requests the web server has no way to associate the browser with its previous requests.Since HTTP doesn't maintain state, it is known as stateless protocol.In contrast FTP maintains state between requests.

A browser on a client request a JSP or servlet from web server,which passes the request to the servlet engine.Then, the servlet engine checks if the request includes an ID for java session.If it doesn't, the servlet engine creates a unique ID for the session plus a `session object` that can be used to store the data for the session.From that point on,the web server uses the session ID to relate each browser request to session object,even though the server still drops the HTTP connection after returning each page.
By default,the servlet API uses a `cookie` to store the session ID within the client's browser.This is an extension of the HTTP protocol.Then,when the next request is made,this cookie is added to the request.However,if cookies have been disabled within the browser,this type of session tracking won't work.
To get around this problem,the servlet API provides a way to rewrite the URLs so it includes the session ID.This is known as `URL encoding`.It works even if cookies have been disabled within the browser.However,you have to provide for this encoding in your servlets and JSPs.In contrast, cookies are automatically used for session tracking so you don't have to provide any code for them.

- **SESSIONS**: Since the session object is a built-in JSP object,you only need to get a session object when you're working with servlets.To do that,you can call the getSession method of request object.Then,if the session object doesn't exist,this method creates a new one.Usually,though,it just accesses the one that already exists.
A session is created when browser makes the first request to a site.It is destroyed when session ends.

`HttpSession` - Provides a way to identify a user across more than one page request or visit to a Web site and to store information about that user.
The servlet container uses this interface to create a session between an HTTP client and an HTTP server. The session persists for a specified time period, across more than one connection or page request from the user. A session usually corresponds to one user, who may visit a site many times. The server can maintain a session in many ways such as using cookies or rewriting URLs.

- This interface allows servlets to
    1. View and manipulate information about a session, such as the session identifier, creation time, and last accessed time
    2. Bind objects to sessions, allowing user information to persist across multiple user connections
When an application stores an object in or removes an object from a session, the session checks whether the object implements HttpSessionBindingListener. If it does, the servlet notifies the object that it has been bound to or unbound from the session. Notifications are sent after the binding methods complete. For session that are invalidated or expire, notifications are sent after the session has been invalidated or expired.
When container migrates a session between VMs in a distributed container setting, all session attributes implementing the HttpSessionActivationListener interface are notified.
A servlet should be able to handle cases in which the client does not choose to join a session, such as when cookies are intentionally turned off. Until the client joins the session, isNew returns true. If the client chooses not to join the session, getSession will return a different session on each request, and isNew will always return true.
Session information is scoped only to the current web application (ServletContext), so information stored in one context will not be directly visible in another.
This object is only valid within the scope of the HTTP request from which it was obtained. Once the processing of that request returns to the container, this object must not be used. If there is a requirement to access the session outside of the scope of an HTTP request then this must be done via #getAccessor().

From session object,you can call the setAttribute method to set any object as an attribute of current session.Similarly, you can use th getAttribute method to return any attribute you have set.
When you set an attribute in the request object,the attributes are removed after the request has been completed.However,when you set an attribute in session object,the attribute are available until the user closes the browser,until the session times out, or until you use the remove Attribute method to remove attribute from session object.

getSession() - Returns the HttpSession object associated with this request. If the request is not associated with a session, this method creates a new HttpSession object and returns it.

setAttribute(String name, Object o) - Stores any object in the session as an attribute and specifies a name for the attribute.
getAttribute(String name) - Returns the value of the specified attribute as an Object type.If no attribute exists for specified name,this method returns null value.
removeAttribute(String name) - Removes the specified attribute from this session.

```java
HttpSession session = request.getSession();
Cart cat = new Cart();
session.setAttribute("cart",cart);

Cart cart = (Cart)session.getAttribute("cart");
session.removeAttribute("cart");
```

The session object is a built-in JSP object.As a result, you don't need to create the session object when working with JSPs.

Session Tracking Mechanisms - The following sections describe approaches to tracking a user’s sessions

- **Cookies**:- Session tracking through HTTP cookies is the most used session tracking mechanism and is required to be supported by all servlet containers.
The container sends a cookie to the client. The client will then return the cookie on each subsequent request to the server, unambiguously associating the request with a session. The standard name of the session tracking cookie must be JSESSIONID.
Containers may allow the name of the session tracking cookie to be customized through container specific configuration.
All servlet containers MUST provide an ability to configure whether or not the container marks the session tracking cookie as HttpOnly. The established configuration must apply to all contexts for which a context specific configuration has not been established (see SessionCookieConfig javadoc for more details).
If a web application configures a custom name for its session tracking cookies, the same custom name will also be used as the name of the URI parameter if the session id is encoded in the URL (provided that URL rewriting has been enabled).


`COOKIE`:- You can create cookies to store any type of string data.Once you create a cookie,you include it in the server's response to the browser.Then,the browser will store the cookie on the client machine,and it will send it back to the server with all subsequent requests.
Once you have stored a cookie on a browser's PC,you can use it to make your web application work for the user.You can use it to allow users to skip login and registration forms that gather data like user name,password,address, or credit card data.Also to customize page that display information like weather reports,sports scores and stock quotations.You can also focus advertising like banner ads that target user's interests.

A per-session cookie that holds the session ID is automatically created for each session.That cookie is used to relate the browser to session obect.
You can also create and send other cookies to user's browser.You can use these cookies to access user-specific data that's stored in a file or database.

To create and use cookies,you use the constructors and methods.Afetr you use the constructors of the Cookie class to create a cookie,you can use the methods of this class to set parameters for the cookie and to get its name and value.Then, you can use the addCookie method of the response object to add cookie to the browser's PC.And you can use the getCookies method of the request object to get an array of all cookies on the browser's PC.

Cookie(String name, String value) - Creates a cookie with the specified name and value.

The methods of the Cookie class:-
1. setMaxAge(int maxAgeInSeconds) - To create a persistent cookie, set the cookie’s maximum age to a positive number. To create a per-session cookie, set the cookie’s maximum age to –1. Then, the cookie will be deleted when the user exits the browser.
2. setPath(String path) - To allow the entire application to access the cookie, set the cookie’s path to “/”.
3. getName() - Returns a string for the name of the cookie.
4. getValue()- Returns a string that contains the value of the cookie.


```java
Cokie userId = new Cookie("userId", userId);
userId.setMaxAge(60*60*24*365*2);//set age to 2 years
userId.setPath("/");//allow access by entire application
response.addCookie(userId);

Cookie[] cooikes = request.getCookies();
String cookieName = "userId";
String cookieValue = "";
for(int i=0;i <cookies.length;i++){
    Cookie cookie = cookies[i];
    if (cookieName.equals(cookie.getName()))
        cookieValue = cookieValue.getValue();
}
```


SSL Sessions
Secure Sockets Layer, the encryption technology used in the HTTPS protocol, has a built-in mechanism allowing multiple requests from a client to be unambiguously identified as being part of a session. A servlet container can easily use this data to define a session.

The HttpServletRequest interface provides the getCookies method to obtain an array of cookies that are present in the request. These cookies are data sent from the
client to the server on every request that the client makes. Typically, the only information that the client sends back as part of a cookie is the cookie name and the
cookie value. Other cookie attributes that can be set when the cookie is sent to the browser, such as comments, are not typically returned. The specification also allows for the cookies to be HttpOnly cookies. HttpOnly cookies indicate to the client that they should not be exposed to client-side scripting code (It’s not filtered out unless the client knows to look for this attribute). The use of HttpOnly cookies helps mitigate certain kinds of cross-site scripting attacks.

- **URL Rewriting**:- URL rewriting is the lowest common denominator of session tracking. When a client will not accept a cookie, URL rewriting may be used by the server as the basis for session tracking. URL rewriting involves adding data, a session ID, to the URL path that is interpreted by the container to associate the request with a session.

```java
public void doGet(HttpServletRequest req,HttpServletResponse res){
    int i = Integer.parseInt(req.getParameter("num1"));
    int j = Integer.parseInt(req.getParameter("num2"));

    int k =i+ j;
    res.sendRedirect("sq?k" + k);
}
```

```java
public void doGet(HttpServletRequest req,HttpServletResponse res){
    int k = Integer.parseInt(req.getParameter("k"));

    int k =k*k;
    
}
```

<localhost:8080/sq?k=>

The session ID must be encoded as a path parameter in the URL string. The name of the parameter must be jsessionid. Here is an example of a URL containing encoded
path information: http://www.example.com/catalog/index.html;jsessionid=1234
URL rewriting exposes session identifiers in logs, bookmarks, referer headers, cached HTML,
and the URL bar. URL rewriting should not be used as a session tracking mechanism where
cookies or SSL sessions are supported and suitable.

Session Integrity
Web containers must be able to support the HTTP session while servicing HTTP requests from clients that do not support the use of cookies. To fulfill this requirement, Web containers commonly support the URL rewriting mechanism.



## Configuring and Mapping Servlets

Configuring or mapping servlet is making underlying Servlet container recognize our servlet class to manage its lifecycle and to map/lnk one or more requests urls

Before you can request a servlet, you must use the web.xml file or @WebServlet annotations to map the servlets in an application.If you use both techniques to map a servlet name to the same URL,the mapping in web.xml overrides the mapping in the annotation.

Prior to servlet 3.0 specification(Tomcat 7.0), you had to use the web.xml to map a servlet to a URL.With servlet 3.0 specification and later,you can use the @Webservlet annotation to map a servlet to one or more URL patterns.The advantage of this approach is that it requires less code.

`XML and DTDs`:- XML stands for Extensible Markup Language.[] It's a universal syntax for structuring data, created as an activity of the World Wide Web Consortium (W3C) beginning in 1996. Since its standardization early in 1998 it has taken the Web by storm.
XML is similar to HTML in that both take content and "mark it up" using tags that begin and end with angle brackets, such as <title> and </title>. XML serves a different purpose than HTML, however. The tags in an XML document don't define how the text should be displayed but rather explain the meaning of the text. It's an "extensible" markup language because new tags can be created with their own meaning, as appropriate for the document being written. XML works especially well as a flat file format because it's a standard, well-defined, platform-independent technique for describing hierarchical data, and there are numerous tools to support the reading, writing, and manipulation of XML files.The rules for writing XML are more strict than for HTML. 
1. First, XML tags are case sensitive. <servlet> and <SERVLET> are not the same. 
2. Second, all tags that begin must end. If there's a begin tag <servlet> there must be an end tag </servlet>—although for convenience the empty tag syntax <servlet/> may be substituted as a synonym for an immediate begin and end tag pairing <servlet></servlet>. 
3. Third, nested elements must not overlap. So it's legal to have <outside><inside>data</inside></outside> while it's illegal to have <outside><inside>data</outside></inside>. Fourth and finally, all attribute values must be surrounded by quotes, either single or double. This means <servlet id="0"/> is fine while <servlet id=0/> is not. 

Documents that follow these rules are called well-formed and will be successfully parsed by automated tools.
Beyond these rules, there are ways to explicitly declare a structure for the tags within an XML file. A specification of this sort is called a Document Type Definition, or DTD. A DTD explicitly states what tags are allowed in a compliant XML file, what type of data those tags are to contain, as well as where in the hierarchy the tags can (or must) be placed. Each XML file can be declared to follow a certain DTD. Files that perfectly conform to their declared DTD are called valid. XML is used with servlets as the storage format for configuration files. XML also can be used by servlets to help with content creation

The structure of the web.xml file is not in itself important at this point; what's important is the fact that having a deployment descriptor file allows configuration information to be specified in a server-independent manner, greatly simplifying the deployment process. Because of deployment descriptors, not only are simple servlets portable, but you can now transfer whole self-contained subsections of your site between servers.
Over time it's likely that a commercial market for WAR files will develop. WAR files will become pluggable web components, capable of being downloaded and installed and put to work right away—no matter what your operating system or web server.
Deployment descriptors also provide web-hosting companies with a convenient way to support multiple customers on the same server. Customers can be given control over their individual domains. They can individually manage servlet registration.


Various URL mapping rules can be specified in the deployment descriptor. There are four types of mappings, searched in the following order:

Explicit mappings, like /hello.html or /images/chart.gif, containing no wildcards. This mapping style is useful when replacing an existing page.
Path prefix mappings, such as /lite/*, /dbfile/*, or /catalog/item/*. These mappings begin with a /, end with a /*, and handle all requests beginning with that prefix (not counting the context path). This mapping style allows a servlet to control an entire virtual hierarchy. For example, the servlet handling /dbfile/*may serve files from a database, while the servlet handling /lite/* may serve files from the filesystem automatically gzipped.
Extension mappings, such as *.wm or*.jsp. These mappings begin with a * and handle all requests ending with that suffix. This mapping style lets a servlet operate on all files of a given extension. For example, a servlet can be assigned to handle files ending in *.jsp to support JavaServer Pages. (In fact, this is an implicit mapping mandated by the servlet specification.)
The default mapping, /. This mapping specifies the default servlet for the web app, to be used if no other matches occur. It's identical to the reduced path prefix mapping (/*) except this mapping matches after extension mappings. This gives control over how basic files are served—a powerful ability, but one that should not be used lightly.

When there's a collision between mappings, exact matches take precedence over path prefix matches, and path prefix matches take precedence over extension matches. The default mapping is invoked only if no other matches occur. Longer string matches within a category take precedence over shorter matches within a category.

All the files under server_root/webapps/ROOT belong to a single web application (the root one). To simplify deployment, these files can be bundled into a single archive file and deployed to another server merely by placing the archive file into a specific directory. These archive files have the extension .war, which stands for web application archive. WAR files are actually JAR files (created using the jar utility) saved with an alternate extension. Using the JAR format allows WAR files to be stored in compressed form and have their contents digitally signed. The .war file extension was chosen over .jar to let people and tools know to treat them differently.


`Web.xml`:- You define servlets as a part of a Web application in several entries in the J2EE standard Web Application deployment descriptor, web.xml. The web.xml file is located in the WEB-INF directory of your Web application.
Use it if the servlet component class are pre-defined class like ActionServlets(struts),DispatcherServlet(Spring mvc),FacesServlet(jsf).

The deployment descriptor (the web.xml file) includes the following configurations:
1. A display-name element that specifies the name that tools use to identify the application.
2. A set of filter elements that identify servlet filters contained in the application.
3. A set of filter-mapping elements that identify which servlets will have their requests or responses filtered by the filters identified by the filter elements. A filter-mapping element can define more than one servlet mapping and more than one URL pattern for a particular filter.
4. A set of servlet elements that identify all the servlet instances of the application.
5. A set of servlet-mapping elements that map the servlets to URL patterns. More than oneURL pattern can be defined for a particular servlet.
6. A set of error-page mappings that map exception types to an HTML page, so that the HTML page opens when an exception of that type is thrown by the application.

- The first line should be an XML declaration that indicates the version of XML and the character of the document.Then, the web-app element specifies the version of Java EE specification being used.These elements are same from one web application to another, and they are usually generated by your IDE.
- After web-app element, the servlet element declares the servlet.Here,the servlet-name element specifies an internal name that's used to uniquely identify the servlet within web.xml file.then, the the servlet-class element specifies the package and name of the class for the servlet.
- After servlet element, the servlet-mapping element maps the servlet to a URL.Here,the servlet-name element identifies the servlet by specifying the name that's used in servlet element.Then, the url-pattern element maps the servlet to the URL in root directory.
- Finally, this web.xml sets a couple of other configuration settings for the application.First, session-config element sets the session timeout.As a result, any resources that are associated with a user will be released if the user hasn't ccessed the session within classidied time.Seond, there is welcome-file-list which when a user requests the root directory of the application,The HTML page will be displayed.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app version="6.0" xmlns="https://jakarta.ee/xml/ns/jakartaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="https://jakarta.ee/xml/ns/jakartaee
                             https://jakarta.ee/xml/ns/jakartaee/web-app_6_0.xsd">

    <!-- Servlet Mapping -->
    <servlet>
        <servlet-name>name</servlet-name>
        <servlet-class>com.kipcollo.ExampleServlet</servlet-class>
    </servlet>
    <servlet-mapping>
        <servlet-name>name</servlet-name>
        <url-pattern>/home</url-pattern>
    </servlet-mapping>

    <!-- Session Configuration -->
    <session-config>
        <!-- Session timeout in minutes -->
        <session-timeout>30</session-timeout>

    <!-- Optional: Cookie-based session tracking -->
    <cookie-config>
        <name>JSESSIONID</name>
        <http-only>true</http-only>
        <secure>true</secure> <!-- Set to true if using HTTPS -->
        <max-age>-1</max-age> <!-- Session cookie (expires when browser closes) -->
    </cookie-config>

        <!-- Optional: Tracking mode (COOKIE, URL, SSL) -->
        <tracking-mode>COOKIE</tracking-mode>
    </session-config>

    <!-- Welcome file -->
    <welcome-file-list>
        <welcome-file>index.html</welcome-file>
        <welcome-file>index.jsp</welcome-file>
    </welcome-file-list>

     <!-- Character Encoding Filter (optional but recommended) -->
    <filter>
        <filter-name>encodingFilter</filter-name>
        <filter-class>org.springframework.web.filter.CharacterEncodingFilter</filter-class>
        <init-param>
            <param-name>encoding</param-name>
            <param-value>UTF-8</param-value>
        </init-param>
        <init-param>
            <param-name>forceEncoding</param-name>
            <param-value>true</param-value>
        </init-param>
    </filter>

    <filter-mapping>
        <filter-name>encodingFilter</filter-name>
        <url-pattern>/*</url-pattern>
    </filter-mapping>

    <!-- Context parameters (optional) -->
    <context-param>
        <param-name>contextConfigLocation</param-name>
        <param-value>/WEB-INF/spring-config.xml</param-value>
    </context-param>

</web-app>
```

With the Tomcat server, server_root/webapps/ROOT is the default context mapped to the root path "/ ". This means that servlets placed under server_root/webapps/ROOT/WEB-INF/classes can be accessed, as we saw earlier, using thepath /servlet/HelloWorld. With Tomcat, this default context mapping can be changed and new mappings can be added by editing the server_root/conf/server.xml serverwide configuration file. Other servers configure mappings in different ways; see your server's documentation for details.
The web.xml file in the WEB-INF directory is known as a deployment descriptor . This file contains configuration information. about the web app in which it resides. It's an XML file with a standardized DTD. The DTD contains more than 50 tags, allowing full control over the web app's behavior. The deployment descriptor file controls servlet registration, URL mappings, welcome files,and MIME types, as well as advanced features like page-level security constraints and how a servlet should behave in a distributed environment.

- `Annotation based configurations`-Servlet Annotations are introduced in Servlet API 2.5 (JEE 5.0, JSE 5.0). These annotations are used to avoid writing the web.xml file.Use if the servlet component is user-defined class.
@WebServlet annotation is used to declare a Servlet. This annotation is processed by the container at deployment time and the corresponding servlet made available at the specified URL patterns.

```java
@WebServlet
public class Servlet extends Httpservlet{
    .....
}
```

Use the @WebServlet annotation to define a servlet component in a web application. This annotation is specified on a class and contains metadata about the servlet being declared. The annotated servlet must specify at least one URL pattern. This is done by using the urlPatterns or value attribute on the annotation. All other attributes are optional, with default settings. Use the value attribute when the only attribute on the annotation is the URL pattern; otherwise, use the urlPatterns attribute when other attributes are also used.
`@WebServlet`:- Annotation used to declare a servlet.This annotation is processed by the container at deployment time, and the corresponding servlet made available at the specified URL patterns.

```java
public @interface WebServlet {
    String name() default "";//The name of the servlet. Returns: the name of the servlet
    String[] value() default {};// The URL patterns of the servlet. Returns: the URL patterns of the servlet
    String[] urlPatterns() default {};//The URL patterns of the servlet. Returns: the URL patterns of the servlet
    String displayName() default "";//The display name of the servlet. Returns: the display name of the servlet
}
```


Classes annotated with @WebServlet must extend the jakarta.servlet.http.HttpServlet class.

```java
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;

@WebServlet("/example")
public class ExampleServlet extends HttpServlet {
    ...
}
```

If you want to map a servlet to multiple URLs,you can use the urlPatterns attribute of the @WebServlet annotation

```java
@WebServlet(urlPatterns ={"/example","/email"})
public class ExampleServlet extends HttpServlet {
    ...
}
```

By default,the internal name that's used for the servlet is the same as the name of the servlet.If this leads to a naming conflict,you can use the name attribute to specify a unique internal name of servlet.


```java
@WebServlet(name = "NewServletName", urlPatterns ={"/example"})
public class ExampleServlet extends HttpServlet {
    ...
}
```

The web container initializes a servlet after loading and instantiating the servlet class and before delivering requests from clients. To customize this process to allow the servlet to read persistent configuration data, initialize resources, and perform any other one-time activities, you can either override the init method of the Servlet interface or specify the initParams attribute of the @WebServlet annotation. The initParams attribute contains a @WebInitParam annotation. If it cannot complete its initialization process, a servlet throws an UnavailableException.

- `Using Programmatic Approach(100% Java code approach)`- Use servletContext.addServlet() method.Use this for pre-defined Servlet component class like DispatcherServlet and you want to avoid xml driven configurations from application development.


## Requesting a Servlet

After you create and map servlet,you can request the servlet.
There are 3 ways you can request a servlet.

1. Enter its URL into a browser.
2. Use a form tag.
3. Use an anchor tag.

```htm
http://localhost:8080/user/add?action=add&firstName=Collins

<form action="add">

<a href="add?action=add">Add User</a>
```


## Annotations and pluggability

In a web application, classes using annotations will have their annotations processed only if they are located in the WEB-INF/classes directory, or if they are packaged in a jar file located in WEB-INF/lib within the application.

The web application deployment descriptor contains a “metadata-complete” attribute on the web-app element. This attribute defines whether this deployment descriptor and any web fragments, if any, are complete, or whether the class files available to this module and packaged with this application should be examined for annotations that specify deployment information. Deployment information, in this sense, refers to any information that could have been specified by the deployment descriptor or fragments, but instead is specified as annotations on classes.
If the value of the “metadata-complete” attribute is specified as true, the deployment tool must ignore any annotations that specify such deployment information in the class files packaged in the web application. Please see Section 8.2.3, “Assembling the descriptor from web.xml, web-fragment.xml and annotations” on page 8-82, Section 8.4, “Processing annotations and fragments” on
page 8-97 and Section 15.5.1, “Handling of metadata-complete” on page 15-194 for additional details on the handling of “metadata-complete”.
If the “metadata-complete” attribute is not specified, or its value is false, the deployment tool must examine the class files of the application for such annotations.
Note that a true value for “metadata-complete” does not preempt the processing of all annotations, only those listed below.

Annotations that do not have equivalents in the deployment XSD include javax.servlet.annotation.HandlesTypes and all of the CDI-related annotations. These annotations must be processed during annotation scanning, regardless of the value of “metadata-complete”.
When EJBs are packaged in a .war file, and the .war file contains an ejb-jar.xml file, the metadata-complete attribute of the ejb-jar.xml file determines the processing of the annotations for enterprise beans. If there is no ejb-jar.xml file, and the web.xml specifies the metadata-complete attribute as “true”, these annotations are processed as though there were an ejb-jar.xml file whose metadata-complete attribute was specified as “true”. See the Enterprise
JavaBeans™ specification for requirements pertaining to annotations for EJBs.
The following are the annotations in javax.servlet. All of these have corresponding deployment descriptor metadata covered by the Web xsd.From javax.servlet.annotation:

1. HandlesTypes -This annotation is used to declare the class types that a ServletContainerInitializer can handle.
2. HttpConstraint -This annotation is used within the ServletSecurity annotation to represent the security constraints to be applied to all HTTP protocol methods for which a corresponding HttpMethodConstraint element does NOT occur within the ServletSecurity annotation.
3. HttpMethodConstraint -This annotation is used within the ServletSecurity annotation to represent security constraints on specific HTTP protocol messages.
4. MultipartConfig -Annotation that may be specified on a Servlet class, indicating that instances of the Servlet expect requests that conform to the multipart/form-data MIME type.
5. ServletSecurity -This annotation is used on a Servlet implementation class to specify security constraints to be enforced by a Servlet container on HTTP protocol messages.
6. WebFilter -Annotation used to declare a servlet filter.
7. WebInitParam -This annotation is used on a Servlet or Filter implementation class to specify an initialization parameter.
8. WebListener -This annotation is used to declare a WebListener.
9. @WebServlet -Annotation used to declare a servlet.

The following annotations from related packages are also covered by the web.xml and associated fragments.

From javax.annotation:- PostConstruct, PreDestroy, Resource, Resources
From javax.annotation.security:- DeclareRoles,RunAs
From javax.annotation.sql:- DataSourceDefinition,DataSourceDefinitions
From javax.ejb:- EJB, EJBs
From javax.jms:- JMSConnectionFactoryDefinition,JMSConnectionFactoryDefinitions,JMSDestinationDefinition,JMSDestinationDefinitions
From javax.mail:- MailSessionDefinition,MailSessionDefinitions
From javax.persistence:- PersistenceContext,PersistenceContexts,PersistenceUnit,PersistenceUnits
From javax.resource:- AdministeredObjectDefinition,AdministeredObjectDefinitions,ConnectionFactoryDefinition,ConnectionFactoryDefinitions


## Security

Security is the science of keeping sensitive information in the hands of authorized users. On the Web, this boils down to four important issues:

`Authentication`:- Being able to verify the identities of the parties involved
`Authorization`:- Limiting access to resources to a select set of users or programs
`Confidentiality`:- Ensuring that only the parties involved can understand the communication
`Integrity`:- Being able to verify that the content of the communication is not changed during transmission

Authentication, authorization, confidentiality, and integrity are all linked by digital certificate technology. Digital certificates allow web servers and clients to use advanced cryptographic techniques to handle identification and encryption in a secure manner. Thanks to Java's built-in support for digital certificates, servlets are an excellent platform for deploying secure web applications that use digital certificate technology.

Security is also about making sure that crackers can't gain access to the sensitive data on your web server. Because Java was designed from the ground up as a secure, network-oriented language, it is possible to leverage the built-in security features and make sure that server add-ons from third parties are almost as safe as the ones you write yourself.

Although you can restrict access to certain parts of a web application by writing custom servlets and JSPs to work directly with HTTP requests and responses,doing that can be time-consuming and error-prone.That's why most modern servlet containers such as Tomcat provide a built-in way to restrict access to certain part of a web application.This is known as `container-managed security` or `container-managed authentication`.


In security Apps,the place where username,password and roles are maintained is called Security Realm or Authentication Info Provider.
There are two components of Security implementation:-
- Authentication provider/Security Realm
- Authentication Manager

`Authentication Provider/Security Realm`:- It is where usernames,passwords and roles will be stored and managed and will be used for authentication and authorities activities.E.g xml files,properties files,Database software,LDAp servers.
Tomcat server gives support only for xml file by default.

`Authentication Manager`:- It is a component that performs both authentication and authorization activities by talking to security realm.
There are two types of Authentication manager:-

1. Programmatic Authentication Manager - We need to develop Authentication Manager manually to perform authentication and autherization activities.
2. Declarative Auth Manager - By adding entries in web.xml, we can use the underlying server/container supplied ready made Auth Manager to perform authentication and autherization activities.
The declarative Auth Manager can perform Authentication in four modes:- BASIC,DIGEST,FORM,CLIENT-CERT.

- Using xml files as Authentication provider:- Locate the tomcat-users.xml file and insert the roles and users.

```xml
<role rolename="ROLE_CUSTOMER"/>
<role rolename="ROLE_ADMIN"/>
<user username="Collins" password="Collins" roles="ROLE_CUSTOMER">
<user username="admin" password="admin" roles="ROLE_ADMIN">
```

**HTTP Authentication**:- HTTP protocol provides built-in authentication support—called basic authentication—based on a simple challenge/response, username/password model. With this technique, the web server maintains a database of usernames and passwords and identifies certain resources (files, directories, servlets, etc.) as protected. When a user requests access to a protected resource, the server responds with a request for the client's username and password. At this point, the browser usually pops up a dialog box where the user enters the information, and that input is sent back to the server as part of a second authorized request. If the submitted username and password match the information in the server's database, access is granted. The whole authentication process is handled by the server itself.

- Three types of authentication:-
    1. `Basic authantication` causes the browser to display a dialog box that requests a username and a password.then,when the user enters a username and password,it sends this data as a plain text to the server so the server can attempt to authorize the user.since you don't have to code a form for this type of authentication,it is easy to implement.However,you can't control the appearance of this dialog box.
    Basic authentication alone is very weak. It provides no confidentiality, no integrity, and only the most basic authentication. The problem is that passwords are transmitted over the network, thinly disguised by a well-known and easily reversed Base64 encoding. Anyone monitoring the TCP/IP data stream has full and immediate access to all the information being exchanged, including the username and password, unless there is additional SSL encryption employed.Plus, passwords are often stored on the server in clear text, making them vulnerable to anyone cracking into the server's filesystem. While it's certainly better than nothing, sites that rely exclusively on basic authentication cannot be considered really secure.
    2. `Digest authentication` is a variation on the basic authentication scheme. Instead of transmitting a password over the network directly, a digest of the password is used instead. The digest is produced by taking a hash (using the very secure MD5 encryption algorithm) of the username, password, URI, HTTP request method, and a randomly generated nonce value provided by the server.Uses MD5 algorithm.
    Both sides of the transaction know the password and use it to compute digests. If the digests match, access is granted. Transactions are thus somewhat more secure than they would be otherwise because digests are valid for only a single URI request and nonce value. The server, however, must still maintain a database of the original passwords. And, as of this writing, digest authentication is not supported by very many browsers.
    3. `Form` allows programmer esign choice of form page for gathering credentials.

`Configuring HTTP Authentication`:- In versions of the Servlet API before 2.2, the technique for configuring authentication varied depending on the server. Beginning with API 2.2, the technique has been standardized and now configuration of security policies can be accomplished in a portable manner using the web.xml deployment descriptor.

Role-based authentication - Using tags in the web application deployment descriptor, security constraints can be set up to indicate that certain pages in the web application are to be accessed only by users with certain credentials. Servlets use role-based authorization to manage access. With this model, access permissions are granted to an abstract entity called a security role , and access is allowed only to users or groups of users who are part of that given role.

**Form-Based Authentication**:- Servlets can also perform authentication without relying on HTTP authentication, by using HTML forms instead. Using this technique allows users to enter your site through a well-designed, descriptive and friendly login page.

Many banks and other online services have chosen to use form-based authentication. Implementing such a system is relatively straightforward with servlets because form-based authentication is built into Servlet API 2.2.

```xml
<login-config>
    <auth-method>
        FORM <!-- BASIC, DIGEST, FORM, CLIENT-CERT -->
    </auth-method>
    <form-login-config> <!-- only useful for FORM -->
        <form-login-page>
            /loginpage.html
        </form-login-page>
        <form-error-page>
            /errorpage.html
        </form-error-page>
    </form-login-config>
</login-config>
```

Any time the server receives a request for a protected resource, the server checks if the user has already logged in. For example, a server might look for a Principal object stored in the user's HttpSession object. Should the server locate a Principal, the roles of the Principal are compared to those required to access the resource. The user is granted access only if the Principal belongs to the required role. Should the server not locate a Principal or should the Principal not belong to any of the allowed roles, the client is redirected to the login page (but first the server records, probably in the user's HttpSession object, the URL that was originally requested).
The login page contains a form where the user can enter and submit his username and password back to the server. Only if the username and password are valid and belong to a Principal in an allowed role for the originally requested resource is access granted, in which case the server politely redirects the user to that resource. In any other case, the server redirects the client to the error page.

The login page must include a form with special values to ensure the proper data is submitted in the right way to the server. The form must be a POST to the URL j_security_check (no leading slash, although some servers have been known to erroneously require it) with a username sent as j_username and a password sent as j_password. For example:

```htm
<FORM METHOD=POST ACTION="j_security_check">
Username: <INPUT TYPE=TEXT NAME="j_username"><br>
Password: <INPUT TYPE=PASSWORD NAME="j_password"><br>
<INPUT TYPE=SUBMIT>
</FORM>
```

Compared with basic authentication, form-based login has the advantage that the user can enter your site through a friendly and descriptive login page. It shares the problem with basic authentication that the password is transmitted in plain text unless the communication channel has been secured by other means.
Both Basic and form-based login also have the problem that they support no standard logout mechanism. Calling session.invalidate( ) is likely to have that effect for form-based login, but there are no guarantees. Both also rely on the server to validate users, even though there are cases where validation should be done in ways not supported by the server (for example, some banks require an account number, password, and PIN for access). To solve these problems, we can implement custom authentication.


## SSL(secure connection)

To prevent others from reading data that is transmitted over the Internet,you can use the `Secure Sockets Layer(SSL)`.This is the protocol that lets you transfer data between the server and client over a secure connection.

To determine if you're transmitting data over a secure connection,you can read the URL.If it starts with https rather than http,then you're transmitting data over a secure connection.In addition, a small lock icon appears in the lower right of the browser when you're using a secure connection.
With a regular HTTP connection,all data is sent as unencrypted plain text.As a result,if a hacker intercepts this data,it is easy to read.With secure connection,though,all data is encrypted before it's transferred between the client and server.Although a hacker can still intercept this data,he won't be able to read it unless he break encryption code.


`TLS`:- Transport Layer Security is another protocol that's used for working with secure connections.It is more advanced than SSL, but works similarly.

Due to the time it takes to encrypt and decrypt the data that's sent across a secure connection,secure connections are noticeably slower than regular HTTP connections.As a result,you usually use secure connections only when your application passes sensitive data between client & server.

## HTTP Requests and Responses

When you write servlets and JSPs,the classes and methods of servlet API shelter you from having to work directly with HTTP.


**Working with Request & Response**:-

`Getting request header`:- A servlet can access the headers of an HTTP request through the following methods of the HttpServletRequest interface:

1. getHeader(String headerName) - The getHeader method returns a header given the name of the header. There can be multiple headers with the same name, e.g. Cache-Control headers, in an HTTP request. If there are multiple headers with the same name, the getHeader method returns the first header in the request.
2. getHeaders - The getHeaders method allows access to all the header values associated with a particular header name, returning an Enumeration of String objects.
3. getHeaderNames - Returns an Enumeration object that contains the names of all headers for the request.
 
Headers may contain String representations of int or Date data. The following convenience methods of the HttpServletRequest interface provide access to header data in a one of these formats:

1. getIntHeader(String headerName) - If the getIntHeader method cannot translate the header value to an int, a NumberFormatException is thrown. 
2. getDateHeader(String headerName) - If the getDateHeader method cannot translate the header to a Date object, an IllegalArgumentException is thrown.

`Convenience methods for working with request headers`:-

getContentType() - 


`Setting status code`:- Most of the time,the web server automatically sets the status code for an HTTP response.However,if you need to set the status code,you can use the *setStatus* method.To specify the value for this code,you can use either an integer value or one of the fields of the *response* objet.

```java
response.setStatus(404);
response.setStatus(response.SC_NOT_FOUND)
```


`Setting response headers`:- The web server usually sets headers of an HTTP response.However,if you need to set a response header you can use the following methods of the HttpServletResponse interface:

1. setHeader(String name, String value) - The setHeader method sets a header with a given name and value. A previous header is replaced by the new header. Where a set of header values exist for the name, the values are cleared and replaced with the new value.
2. addHeader - The addHeader method adds a header value to the set with a given name. If there are no headers already associated with the name, a new set is created.

Headers may contain data that represents an int or a Date object. The following convenience methods of the HttpServletResponse interface allow a servlet to set a
header using the correct formatting for the appropriate data type:

1. setIntHeader(String name, int value)
2. setDateHeader(String name, long value) - Accepts a long value that represents date in milliseconds since January 1, 1970 00:00:00 GMT.
3. addIntHeader
4. addDateHeader

`Convenience methods for working with response headers`:-

setContentType(String mimeType)
addCookie(Cookie cookie)


## Listeners

Starting with servlet 2.3 Specification,you can add a listenr to a web application.For example,you can create a listener class that contains code that's executed when your web app starts or you can create a listener class that contains code that's executed every time a user starts a new session.

A `listener` is a class that listens for various events that can occur during the lifecycle of a web application and provides methods that are executed when those events occur.
Used in configuring profiles e.g dev,prod.


## Filters

Starting with servlet 2.3 specification, you can add a filter to your web application.
Filters are Java components that allow on the fly transformations of payload and header information in both the request into a resource and the response from a resource.

A filter is a Java class that is invoked in response to a request for a resource in a Web application. Resources include Java Servlets, JavaServer pages (JSP), and static resources such as HTML pages or images. A filter intercepts the request and can examine and modify the response and request objects or execute other tasks.

A filter can intercept an HTTP request and execute code before or after the requested servlet or JSP is executed.As a result, filters are ideal for handling cross-cutting concerns,which are aspects of an application that cut across different parts of an application.

The Java Servlet API classes and methods that provide a lightweight framework for filtering active and static content. It describes how filters are configured in a Web
application, and conventions and semantics for their implementation.You can chain two or more filters together.

`Filter`:- A filter is a reusable piece of code that can transform the content of HTTP requests, responses, and header information. Filters do not generally create a response or respond to a request as servlets do, rather they modify or adapt the requests for a resource, and modify or adapt responses from a resource.
Filters can act on dynamic or static content. For the purposes of this chapter,dynamic and static content are referred to as Web resources.
Among the types of functionality available to the developer needing to use filters are the following:

1. The accessing of a resource before a request to it is invoked.
2. The processing of the request for a resource before it is invoked.
3. The modification of request headers and data by wrapping the request in customized versions of the request object.
4. The modification of response headers and response data by providing customized versions of the response object.
5. The interception of an invocation of a resource after its call.
6. Actions on a servlet, on groups of servlets, or static content by zero, one, or more filters in a specifiable order.

`Benefits of filters include`:-

1. *Modular code*.They allow you to create modular code that can be applied to different parts of an application.I.e the requested servlet doesn't need to hae any knowledge of the filter.As a result,you should be able to turn a filter on or off without affecting behavior of servlet.
2. *Flexible code*.They allow you to create flexible code.this works because you use an application's web.xml file to control when filters are executed.As aresult,you can easily apply filters to different parts of an application,and you can easily turn on or off. 

Filters are ideal for handling cross cutting concerns,e.g a filter can be used write data to a log file,handle authentication, or compress a response.In addition, a filter can be used to handle image type conversions,localizations,XSL transformations,caching.
If your servlet container already provides the type of functionality you need,it's usually easier and less error-prone to use the built-in functionality.As a result,before you code a custom filter to handle a complex task such as compressing responses,you should check the documentation for your servlet container to see if it already provides this type of functionality.

Examples of Filtering Components

- Authentication filters
- Logging and auditing filters
- Image conversion filters
- Data compression filters
- Encryption filters
- Tokenizing filters
- Filters that trigger resource access events
- XSL/T filters that transform XML content
- MIME-type chain filters
- Caching filters

Note: The filter can modify the headers only if the response has not already been committed

Filters can be useful for the following functions:

1. Implementing a logging function
2. Implementing user-written security functionality
3. Debugging
4. Encryption
5. Data compression
6. Modifying the response sent to the client. (However, post processing the response can degrade the performance of your application.)


`How Filters Work`:- You define filters in the context of a Web application. A filter intercepts a request for a specific named resource or a group of resources (based on a URL pattern) and executes the code in the filter. For each resource or group of resources, you can specify a single filter or multiple filters that are invoked in a specific order, called a chain.

When a filter intercepts a request, it has access to the javax.servlet.ServletRequest and javax.servlet.ServletResponse objects that provide access to the HTTP request and response, and a javax.servlet.FilterChain object. The FilterChain object contains a list of filters that can be invoked sequentially. When a filter has completed its work, the filter can either call the next filter in the chain, block the request, throw an exception, or invoke the originally requested resource.

After the original resource is invoked, control is passed back to the filter at the bottom of the list in the chain. This filter can then examine and modify the response headers and data, block the request, throw an exception, or invoke the next filter up from the bottom of the chain. This process continues in reverse order up through the chain of filters.


- `Adding a filter`.Adding a filter to an application works similarly to adding a servlet to an application.To start,you must code a class for the filter.Then,you add some code to the web.xml file to map the filter to one or more URL patterns.

A filter class must implement the **Filter** interface that includes the init,doFilter, and destroy methods that are called when the filter is initialized,executed, and destroyed.
The **init method** accepts a FilterConfig object as a parameter.You can use this object's getFilterName method to get the name of the filter,and you can use its getServletContext method to get the servletContext object for the application.
The **doFilter** method accepts ServletRequest and ServletResponse objects as parameters.You can cast these objects to the HttpServletRequest and HttpServletResponse objects.
The doFilter method also accepts a FilterChain object.You can use the doFilter method of this object to forward the request and response to the next filter or servlet in the chain.

- `Writing a Filter Class`:-To write a filter class, implement the javax.servlet.Filter interface; You must implement the following methods of this interface:
    1. init(FilterConfig filterConfig)-Called by the web container to indicate to a filter that it is being placed into service.
    2. destroy() -Called by the web container to indicate to a filter that it is being taken out of service.
    3. doFilter(ServletRequest request, ServletResponse response, FilterChain chain) -The doFilter method of the Filter is called by the container each time a request/response pair is passed through the chain due to a client request for a resource at the end of the chain.
You use the doFilter() method to examine and modify the request and response objects, perform other tasks such as logging, invoke the next filter in the chain, or
block further processing.Several other methods are available on the FilterConfig object for accessing the name of the filter, the ServletContext and the filter's initialization attributes.

To access the next item in the chain (either another filter or the original resource, if that is the next item in the chain), call the FilterChain.doFilter() method.

`Configuring Filters`:- You configure filters as part of a Web application, using the application's web.xml deployment descriptor. In the deployment descriptor, you specify the filter and then map the filter to a URL pattern or to a specific servlet in the Web application. You can specify any number of filters.

To configure a filter:- Add a filter declaration to web.xml. The filter element declares a filter, defines a name for the filter, and specifies the Java class that executes the filter. The filter element must directly follow the context-param element and directly precede the listener and servlet elements. For example:

```xml
<context-param>Param</context-param>
<filter>
<icon>
<small-icon>MySmallIcon.gif</small-icon>
<large-icon>MyLargeIcon.gif</large-icon>
</icon>
<filter-name>myFilter</filter-name>
<display-name>My Filter</display-name>
<description>This is my filter</description>
<filter-class>examples.myFilterClass</filter-class>
</filter>
<listener>Listener</listener>
<servlet>Servlet</servlet>
```

The icon, description, and display-name elements are optional.

Configuring a Chain of Filters - WebLogic Server creates a chain of filters by creating a list of all the filter mappings that match an incoming HTTP request. The ordering of the list is determined by the following sequence:

1. Filters where the filter-mapping element contains a url-pattern that matches the request are added to the chain in the order they appear in the web.xml deployment descriptor.
2. Filters where the filter-mapping element contains a servlet-name that matches the request are added to the chain after the filters that match a URL pattern.
3. The last item in the chain is always the originally requested resource.In your filter class, use the FilterChain.doFilter() method to invoke the next item in the chain


**Wrappers**:- The HttpServletRequestWrapper and HttpServletResponseWrapper classes implement a design pattern known as `wrapper pattern` or `decorator pattern`.The classes contains methods that call all of the methods of underlying interface or class.As a result,when you extend these classes,you only need to add new methods or override existing methods.

The `HttpServletRequestWrapper` class implements the HttpServletRequest interface by providing methods that call the methods of underlying HttpServletRequest interface.As a result,if you code a class that extends the HttpServletRequestWrapper class, all of existing methods already work.Then,to add new functionality,you can add a method that dosn't exist in HttpServletRequest interface.Or,to modify the existing functionality,you can override one of methods of the HttpServletRequest class.
When you extend the HttpServletResponseWrapper class,you can use the getResponse method to return the underlying HttpServletResponse object.


## Loading Servlets, Context Listeners, and Filters

Servlets, Context Listeners, and Filters are loaded and destroyed in the following order:
Order of loading:

1. Context Listeners
2. Filters
3. Servlets
Order of destruction:

1. Servlets
2. Filters
3. Context Listeners

Servlets and filters are loaded in the same order they are defined in the web.xml file
and unloaded in reverse order. Context listeners are loaded in the following order:

1. All context listeners in the web.xml file in the order as specified in the file
2. Packaged JAR files containing tag library descriptors
3. Tag library descriptors in the WEB-INF directory