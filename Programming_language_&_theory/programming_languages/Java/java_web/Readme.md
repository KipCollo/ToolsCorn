# Web Applications

A `web applications` is a set of web pages generated in response to user requests.The internet has many different types of web applications,such as search engines,online stores,auctions,news sites,games.

A web application is a dynamic extension of a web or application server.There are two types of web applications:

1. `Presentation-oriented`: A presentation-oriented web application generates interactive web pages containing various types of markup language (HTML, XHTML, XML, and so on) and dynamic content in response to requests.
2. `Service-oriented`: A service-oriented web application implements the endpoint of a web service. Presentation-oriented applications are often clients of service-oriented web applications.

- Based on the type of web pages they render,there are 3 types of web components:
   1. Static web components/static web pages/passive web pags  - Generate static web pages.E.g HTML files.These content of web pages will remain same for all requests.E.g about us page,contact us,terms and conditions.
   2. Dynamic web pages/Active web pages - Generate dynamic web pages.The content of web pages will change based on the input values of request or based pn time of requests generation.E.g Gmail inbox,stock values page.
   3. Helper web components:- These components or files do not generate any web pages directly but they help other web comps in the generation of web pages.E.g image files,video files,javascript,css files.

**Java Web applications**:- In the Java 2 platform, web components provide the dynamic extension capabilities for a web server. Web components are either Java servlets, JSP pages, or web service endpoints.

Client(Browser)<------>[Web Server<---->Servlet/JSP Engine(JDK)<----->Database Server]

The client sends an HTTP request to the web server. A web server that implements Java Servlet and JavaServer Pages technology converts the request into an HTTPServletRequest object. This object is delivered to a web component, which can interact with JavaBeans components or a database to generate dynamic content. The web component can then generate an HTTPServletResponse or it can pass the request to another web component. Eventually a web component generates a HTTPServletResponse object. The web server converts this object to an HTTP response and returns it to the client.

`Servlets` are Java programming language classes that dynamically process requests and construct responses. `JSP` pages are text-based documents that execute as servlets but allow a more natural approach to creating static content. Although servlets and JSP pages can be used interchangeably, each has its own strengths.
Servlets are best suited for service-oriented applications (web service endpoints are implemented as servlets) and the control functions of a presentation-oriented application, such as dispatching requests and handling nontextual data. JSP pages are more appropriate for generating text-based markup such as HTML, Scalable Vector Graphics (SVG), Wireless Markup Language (WML), and XML.
Since the introduction of Java Servlet and JSP technology, additional Java technologies and frameworks for building interactive web applications have been developed.This includes: `JavaServer Faces`,`JavaServer Pages Standard Tag Library`.

A web application (sometimes shortened to web app) is a collection of servlets, Java-Server Pages (JSPs), HTML documents,images, templates, and other web resources that are set up in such a way as to be portably deployed across any servlet-enabled web server.

In early days,Java used to make `applets`.These are Java apps that can be downloaded from web site and run within web browser.However,Microsoft Internet Explorer stopped supporting new versions of Java.As result applets lost their appeal and dev switched to servlets and JSPs.These tech allowed devs to write java web apps that run on server.
Ever since late 1990s when Java servlets and JavaServer Pages(JSPs) came into widespread use,website developers have been switching from CGI scripting languages to servlets and JSPs.

Java Servlet technology is the foundation of all the web application technologies.Each technology adds a level of abstraction that makes web application prototyping and development faster and the web applications themselves more maintainable, scalable, and robust.

There are many ways to develop java web applications.When developing Java web applications,you typically use parts of `Java Enterprise Edition(Java EE)` specification.This specification describes how web servers can interact with all Java web technologies including servlets,JavaServer Pages(JSP),JavaServer Pages(JSF),Enterprise JavaBeans(EJB),JPA and many more.

*Servlet/JSP*:- In a well-structured servlet/JSP application,`servlets` stores Java code that does server-side processing, and `JavaServer Pages`(JSPs) store HTML that defines user interface.This HTML typically contains CSS and Javascript files.To run web applications that uses servlets and JSPs,you only need to work with servlet/JSP part of Java EE specification.
Since servlet/JSP API is relatively low level API,it doesn't do much work for dev.However,the Servlet/JSP API gives dev a high degree of control over HTML,CSS and Javascript returned to browser.In addition, the servlet/JSP API is foundation for any other Java Web approach.

*JSF*:- JavaServer Faces(JSF) is designed to replace both servlets and JSPs.Provides a higher level API that does more work for programmer.When you use JSF you typically use more Java EE features than in Sevlet/JSP approach.You can use Enterprise JavaBeans(EJBs) to define server-side components.

*Spring Framework*:- It is also a higher-level API that does more work for programmer than Servlet/JSP API.However, due to the way it's structured,the Spring Framework still gives developer a higher degree of control over HTML,CSS and Javascript returned to browser.

Framework is a special software that is built on the top technologies having ability to generate common logics dynamically to simplify application development.If we use technologies to develop apps to,we need to write both common logics and app specifics logics e.g servlet,jsp based web app development gives burden to programmer coz he has to take care both common logics and app specific logics.
If we use framework to develop the Apps,programmers just need only App sepcifics logics coz the common logics will be genefrated dynamicallly.E.g Spring MVC,JSF,Struts internally uses Servlet,JSP technologies.

NB:- Develop small scale website using Servlet,JSP technologies and medium scale and large scale web sites using frameworks like Spring MVC,JSF.


`Web Application Lifecycle` - A web application consists of web components; static resource files, such as images and cascading style sheets (CSS); and helper classes and libraries. The web container provides many supporting services that enhance the capabilities of web components and make them easier to develop. However, because a web application must take these services into account, the process for creating and running a web application is different from that of traditional stand-alone Java classes.

The process for creating, deploying, and executing a web application can be summarized as follows:

1. Develop the web component code.
2. Develop the web application deployment descriptor, if necessary.
3. Compile the web application components and helper classes referenced by the components.
4. Optionally, package the application into a deployable unit.
5. Deploy the application into a web container.
6. Access a URL that references the web application.


**Web Modules**:- In the Java EE architecture, web components and static web content files such as images are called web resources. A web module is the smallest deployable and usable unit of web resources.
A Java EE web module corresponds to a web application as defined in the Java Servlet specification.
In addition to web components and web resources, a web module can contain other files:

1. Server-side utility classes (database beans, shopping carts, and so on). Often these classes conform to the JavaBeans component architecture.
2. Client-side classes (applets and utility classes).

A web module has a specific structure. The top-level directory of a web module is the document root of the application. The document root is where JSP pages, client-side classes and archives, and static web resources, such as images, are stored.
The document root contains a subdirectory named WEB-INF, which contains the following files and directories:
- web.xml: The web application deployment descriptor.
- Tag library descriptor files.
- classes: A directory that contains server-side classes: servlets, utility classes, and JavaBeans components.
- tags: A directory that contains tag files, which are implementations of tag libraries.
- lib: A directory that contains JAR archives of libraries called by server-side classes.

If your web module does not contain any servlets, filter, or listener components then it does not need a web application deployment descriptor. In other words, if your web module only contains JSP pages and static files then you are not required to include a web.xml file
A web module can be deployed as an unpacked file structure or can be packaged in a JAR file known as a web archive (WAR) file. Because the contents and use of WAR files differ from those of JAR files, WAR file names use a .war extension. The web module just described is portable; you can deploy it into any web container that conforms to the Java Servlet Specification.

To deploy a WAR on the Application Server, the file must also contain a runtime deployment descriptor. The runtime deployment descriptor is an XML file that contains information such as the context root of the web application and the mapping of the portable names of an application’s resources to the Application Server’s resources. The Application Server web application runtime DD is named sun-web.xml and is located in the WEB-INF directory along with the web application DD.
`Deployment Tool`:- Once you've tested your servlets and JSPs on your computer or an intranet,you may want to deploy your web app on the Internet.To do that, you need to get a web host.One way to do that is to find an Internet service provider(ISP) that provides web hosting that supports servlets and JSPs.
After you get a web host, you need to transfer your files to web server.To do that, you can use File Transfer Protocol(FTP).The easiest way to use FTP is to use an FTP client such as FileZilla client.


- **Web servers**:- Responsibilities of web servers:-
    1. Listens to client(browser) requests continuously through demon process.
    2. Takes requests from clients and handover them to web containers.
    3. Provide middleware services
    4. Provides container like servlet containers.
    5. Provide Admin console to manage web applications like start,stop,reload operations on web apps.

*Standalone Servlet Containers* - A `standalone servlet container` is a server that includes built-in support for servlets. Such a container has the advantage that everything works right out of the box. One disadvantage, however, is that you have to wait for a new release of the web server to get the latest servlet support. Another disadvantage is that server vendors generally support only the vendor-provided JVM. Web servers that provide standalone support include those in the following list.

1. Apache's Tomcat Server, the official reference implementation for how a servlet container should support servlets. Written entirely in Java, and freely available under an open source license. All the source code is available and anyone can help with its development. This server can operate standalone or as an add-on providing Apache or other servers with servlet support. It can even be used as an embedded container. Along with Tomcat, Apache develops the standard implementation of the javax.servlet and javax.servlet.http package.
2. iPlanet (Netscape) Web Server Enterprise Edition (Version 4.0 and later), perhaps the most popular web server to provide built-in servlet support. Some benchmarks show this server to have the fastest servlet implementation. Beware that, while Versions 3.51 and 3.6 of this server had built-in servlet support, those servers supported only the early Servlet API 1.0 and suffered from a number of bugs so significant the servlet support was practically unusable. To use servlets with Netscape 3.x servers, use an add-on servlet container.
3. Zeus Web Server, a web server some consider the fastest available. Its feature list is quite long and includes servlet support.
4. Caucho's Resin, an open source container that prides itself on performance. It can run in standalone mode or as an add-on to many servers
5. Gefion Software's LiteWebServer, a small (just over 100K) servlet container intended for uses, such as bundling with demos, where small size matters.
6. World Wide Web Consortium's Jigsaw Server, open source and written entirely in Java
7. Sun's Java Web Server, the server that started it all. This server was the first server to implement servlets and acted as the effective reference implementation for Servlet API 2.0. It's written entirely in Java (except for two native code libraries that enhance its functionality but are not needed). Sun has discontinued development on the server, concentrating now on iPlanet/Netscape products as part of the Sun-Netscape Alliance.

`Application servers` are a growing area of development. An application server offers server-side support for developing enterprise-based applications. Most Java-based application support servlets and the rest of the Java 2, Enterprise Edition, (J2EE) specification. These servers include:

1. BEA System's WebLogic Application Server, one of the first and most famous Java-based application servers.
2. Orion Application Server, a high-end but relatively low-priced server, written entirely in Java.
3. Enhydra Application Server, an open source server from Lutris.
4. Oracle's Application Server, a server designed for integration with an Oracle database.
5. Silverstream Application Server, a fully compliant J2EE server that also started with a servlet focus.
6. Allaire's JRun Server (formerly from Live Software), a simple servlet container that grew to an advanced container providing
many J2EE technologies including EJB, JTA, and JMS.
7. GlassFish
8. Jboss
9. Web Logic
10. Wildfly

`Add-on Servlet Containers`:- An add-on servlet container functions as a plug-in to an existing server—it adds servlet support to a server that was not originally designed with servlets in mind or to a server with a poor or outdated servlet implementation. Add-on servlet containers have been written for many servers including Apache, iPlanet's FastTrack Server and Enterprise Server, Microsoft's Internet Information Server and Personal Web Server, O'Reilly's WebSite, Lotus Domino's Go Webserver, StarNine's WebSTAR, and Apple's
AppleShare IP. Add-on servlet containers include the following:

1. New Atlanta's ServletExec, a plug-in designed to support servlets on all the popular web servers on all the popular operating systems. Includes a free debugger.
2. The Java-Apache project's JServ module, a freely available open source servlet container that adds servlet support to the extremely popular Apache server. Development has completed on JServ, and the Tomcat Server (acting as a plug-in) is the replacement for JServ.
3. Apache's Tomcat Server, as discussed previously, Tomcat may be plugged into other servers including Apache,iPlanet/Netscape, and IIS.

`Embeddable Servlet Containers`:-An embeddable container is generally a lightweight servlet deployment platform that can be embedded in another application. That application becomes the true server. Embeddable servlet containers include the following:

1. Apache's Tomcat Server, while generally used standalone or as an add-on, this server also can be embedded into another application when necessary. Because this server is open source, development on most other embeddable containers has stopped.
2. Anders Kristensen's Nexus Web Server, a freely available servlet runner that implements most of the Servlet API and can be easily embedded in Java applications.


Based on the place where the web components execute there are two types of web components:-

`Client side web components`:-These web components whose code come for browser for execution from webserver when it is requested.E.g HTML files,Javascript files.
`Server side web components`:- These components reside and execute in web server by receiving request from browser.E.g servlet,php,jsp.

With respect to web application,HTML,servlet,JSP,ajax,jquery,Spring MVC are called frontend technologies.


## Tomcat

The Apache Tomcat® software is an open source implementation of the Jakarta Servlet, Jakarta Pages, Jakarta Expression Language, Jakarta WebSocket, Jakarta Annotations and Jakarta Authentication specifications. These specifications are part of the Jakarta EE platform.

Tomcat can be used as both web server and the servlet and JSP engine for web applications.

The Jakarta EE platform is the evolution of the Java EE platform. Tomcat 10 and later implement specifications developed as part of Jakarta EE. Tomcat 9 and earlier implement specifications developed as part of Java EE.

The Apache Tomcat software is developed in an open and participatory environment and released under the Apache License version 2. The Apache Tomcat project is intended to be a collaboration of the best-of-breed developers from around the world. We invite you to participate in this open development project. To learn more about getting involved, click here.

Apache Tomcat software powers numerous large-scale, mission-critical web applications across a diverse range of industries and organizations. Some of these users and their stories are listed on the PoweredBy wiki page.

- **Tomcat's directories & files**:- These are some of the key tomcat directories:

1. /bin - Startup, shutdown, and other scripts. The *.sh files (for Unix systems) are functional duplicates of the *.bat files (for Windows systems). Since the Win32 command-line lacks certain functionality, there are some additional files in here.(Holds binary files that let you start and stop Tomcat)
2. /conf - Configuration files and related DTDs. The most important file in here is server.xml. It is the main configuration file for the container.
3. /logs - Log files are here by default.
4. /webapps - This is where your webapps go.It contains few web applications that come with Tomcat.
5. /lib - Contains the JAR files that contain the Java classes libraries that are available to all web applications running on the server.
6. /work - Used by Tomcat to store the source code and class files for the servlets that the JSP engine generates.
7. /temp - Temporary files used by JVM.

In Tomcat home directory, you can also find two text files.The RELEASE_NOTES file contains some general information about the current release of Tomcat.
The running.txt file contains more information about installing,running,starting and stopping Tomcat.

Java based web server.
Has two built-in containers:-

1. Servlet container name- CATALINA
2. JSP container name - JASPER

**Port**:- Default port is 8080.
If you want to change the port for Tomcat, you modify server.xml file stored in Tomcat's conf directory.

**Deploy and Run web app**:-Once you install Tomcat,you can manually deploy a web application.

`Deploying`:- There are two ways of deploying web application.

1. The easiset way is to use Web Archive(WAR) files,which is a Java Archive(JAR) file that contains all of the directories and files for a web application.If you use IDE to develop web app,the IDE will usually create a WAR file for tha application when you build the app.To use a WAR for deployment,you copy the WAR file into Tomcat's webapps directory.Then,Tomcat will expand the WAR file into proper directory structure.
2. If you don't have a WAR file available,you can manually deploy a web application by copying the directories and files for the application into Tomcat's webapps directory.

`Running`:- Once you've copied the files for a web application to the appropriate directory,you can manually run the pages for web application by entering a URL that points to a web page.
Start Tomcat and enyer URL for application into your browser.

**Web Application Manager**:-Tomcat comes with a web-based tool known as Web Application Manager that allows you to stop, start and undeploy individual applications that are running on the Tomcat server.

Before you can start the Tomcat Web Application Manageryou must edit the tomcat-users.xml that's in Tomcat's conf diretory so it includes a username and password for manager role.
Once you do that,you can start the manager just as you would start any web application.In particular,you can start a web browser and enter URL for the manager application.

Once you start the Web Application Manager,it will display all of the web applications that are running on specified Tomcat server.To stop any of these applications,you can click on the Stop button for the application.Then,once the application has stopped,you can start it by clicking on its Start button.However,if you just want to reload all of servlets application,you can click on Reload button.

`Undeploy`:- To do that, you can click on the Undeploy link for application.This deletes all files for web application from Tomcat server.

When you write servlets and JSPs,the classes and methods of servlet API shelter you from having to work directly with HTTP.


## Service-Oriented (Web Services)

`JAX-WS` stands for Java API for XML Web Services. JAX-WS is a technology for building web services and clients that communicate using XML. JAX-WS allows developers to write message-oriented as well as RPC-oriented web services.

In JAX-WS, a web service operation invocation is represented by an XML-based protocol such as SOAP. The SOAP specification defines the envelope structure, encoding rules, and conventions for representing web service invocations and responses. These calls and responses are transmitted as SOAP messages (XML files) over HTTP.

Although SOAP messages are complex, the JAX-WS API hides this complexity from the application developer. On the server side, the developer specifies the web service operations by defining methods in an interface written in the Java programming language. The developer also codes one or more classes that implement those methods. Client programs are also easy to code. A client creates a proxy (a local object representing the service) and then simply invokes methods on the proxy. With JAX-WS, the developer does not generate or parse SOAP messages. It is the JAX-WS runtime system that converts the API calls and responses to and from SOAP messages.

With JAX-WS, clients and web services have a big advantage: the platform independence of the Java programming language. In addition, JAX-WS is not restrictive: a JAX-WS client can access a web service that is not running on the Java platform, and vice versa. This flexibility is possible because JAX-WS uses technologies defined by the World Wide Web Consortium (W3C): HTTP, SOAP, and the Web Service Description Language (WSDL). WSDL specifies an XML format for describing a service as a set of endpoints operating on messages.

`Setting the Port`:- Several files in the JAX-WS examples depend on the port that you specified when you installed the Application Server. The tutorial examples assume that the server runs on the default port, 8080. If you have changed the port, you must update the port number in the following file before building and running the JAX-WS examples:


## Servlet/JSP Web Development

Web components are supported by the services of a runtime platform called a web container. A web container provides services such as request dispatching, security, concurrency, and life-cycle management. It also gives web components access to APIs such as naming, transactions, and email.Certain aspects of web application behavior can be configured when the application is installed, or deployed, to the web container. The configuration information is maintained in a text file in XML format called a web application deployment descriptor (DD).

In the Java EE platform, web components provide the dynamic extension capabilities for a web server. Web components can be Java servlets, web pages implemented with JavaServer Faces technology, web service endpoints, or JSP pages.

**Components of Java Web App**:- Java EE specification describes how servlet/JSP engine should interact with web server.Since all Servlet/JSP engines must implement this specification,all servlet/JSPs code works similarly.In theory, this makes servlet/JSPs code portable btwn servlet/JSP engine and web servers.In practise,there are diffs btwn each servlet/JSPs engine and web server.as result you need to make some modifications to your code when switching servlet/JSPs engine or web servers.

To run java app,server must run servlet/JSP engine or servlet/JSP container.It allows web server to run servlets and JSPs.
In the Java EE platform, web components provide the dynamic extension capabilities for a web server. Web components can be Java servlets, web pages implemented with JavaServer Faces technology, web service endpoints, or JSP pages.

Servlets are Java programming language classes that dynamically process requests and construct responses. Java technologies, such as JavaServer Faces and Facelets, are used for building interactive web applications. (Frameworks can also be used for this purpose.) Although servlets and JavaServer Faces and Facelets pages can be used to accomplish similar things, each has its own strengths. Servlets are best suited for service-oriented applications (web service endpoints can be implemented as servlets) and the control functions of a presentation-oriented application, such as dispatching requests and handling nontextual data. JavaServer Faces and Facelets pages are more appropriate for generating text-based markup, such as XHTML, and are generally used for presentation-oriented applications.

Certain aspects of web application behavior can be configured when the application is installed, or deployed, to the web container. The configuration information can be specified using Java EE annotations or can be maintained in a text file in XML format called a web application deployment descriptor (DD). A web application DD must conform to the schema described in the Java Servlet specification.

`Tomcat` is a free,open-source servlet/JSP engine that was developed by Jakarta project at Apahe Software Foundation.This engine is the official reference implementation of servlet/JSP specification set forth by Sun.
For a servlet/JSP engine to work properly,the engine must be able to access the JDk that comes as part of Java SE.The JDK contains the Java Compiler and core classes for working with with Java.It also contains JRE that's necessary for running compiled Java classes.

**Java Web Application Architecture**:- It uses three layers:-

1. The presentation layer/user interface layer - Consists of HTML pages and JSPs.Typically, a web designer will work on the HTML stored in these pages to create look and feel of the user interface.
2. The business rues layer - Uses servlets to control the flow of the application.These servlets can call other Java classes to store or retrieve data from database,and may forward results to a JSP or another servlet.A JavaBean is used to temporarily store and process data.
3. The Data access - It works with data that's stored on the server's disk.Consist of classes that read and write data that's stored on sever's disk data,database,text files,binary files,XML files.

- `Model 1 Architecture` -With this architecture,a JSP is responsible for handling both request and response of application.The JSP interacts with Java classes and objects that represents the data of the business objects in application and provides method to do business processing.To save the data of business classes,the application maps the data to a database or files.
The JSPs uses regular Java classes to store data of the application and do business processing of the application.
Model 1 works for application with limited processing requirements,but not recommended for most applications.The JSPs become cluttered with scriplets and code becomes difficult to maintain.

- `Model 2 architecture (Model-View-Controller (MVC) pattern)`:- A pattern is standard approach used by programmers to solve common programming problems.One of the pattern is Model-View-Controller. Has three layers:- model,view and controller.
   1. Models defines the business layer of the application.Usually implemented by *JavaBeans*. Classes in these layer the data for business objects and provides methods that do business processing.
   2. View defines presentation layer of the application.MVC apps uses HTML documents or JSPs to present view to the browser.
   3. The Controller manages flow of the application,and this work is done by the servlets.

A servlet reads any parameters available from request which comes from view.Then,if necessary,the servlet updates the model and saves it in data store.Finally, based on logic that's coded in servlet,the servlet forwards the model to one of several posible JSPs for presentation.
Most applications need to map the data in the model to a data store but JavaBeans don't provide methods for storing their own data.Instead, data classes like UserIo class provides those methods.That separates business logic from I/O operations.


`Folder Structure`:- By having everyone agree on exactly where files in a web application are to be placed and agreeing on a standard configuration file format, a web app can be transferred from one server to another easily without requiring any extra server administration.

Each web application should have a root directory.This directory can be referred to as `document root directory` or just `document root`.All other of other directories and files for applicatin must subordinate to this document root directory.
- /(root)-The top directory containing subdirectories typically containing HTML and JSP files for the app.
- The WEB-INF Directory-This directory must contain web.xml file.This directory is not accessible from web.The files there are not served directly to the client; instead, they contain Java classes and configuration information for the web app. The directory behaves like a JAR file's META-INF directory: it contains meta information about the archive contents.The WEB-INF directory also has subordinate directories:-
   1. The WEB-INF/classes directory contains the class files for this web app's servlets and support classes.
   2. WEB-INF/lib contains classes stored in JAR files. For convenience, server class loaders automatically look to WEB-INF/classes and WEB-INF/lib when loading classes—no extra install steps are necessary.
- META-INF -Contains context.xml. The file is used to configure web app context.Example is when you want to use database connection pool available in Tomcat.

To organize classes that you create for the application,you can store the in packages.


**Tools For Web Application Development**:-

`IDE`:- Integrated Development Environment is a tool that provides all of the functionality that you need for developing web applications.
Two of the most popular IDEs for developing Java web applications are NetBeans and Eclipse.Both are open-source, and both are available for free.
Other IDEs are JBuilder,Intellij IDEA.


### Servlet

The Java language was originally intended for use in small, embedded devices. It was first hyped as a language for developing elaborate client-side web content in the form of applets.But until the last few years, Java's potential as a server-side development platform had been sadly overlooked. Now, Java has come to be recognized as a language ideally suited for server-side development.

A `servlet` is a Java™ technology-based Web component, managed by a container, that generates dynamic content(web pages) for a web application. Like other Java technology-based components, servlets are platform-independent Java classes that are compiled to platform-neutral byte code that can be loaded dynamically into and run by a Java technology-enabled Web server.
A servlet is a small, pluggable extension to a server that enhances the server's functionality. Servlets allow developers to extend and customize any Java-enabled web or application server with a hitherto unknown degree of portability, flexibility, and ease.
A servlet is a small Java program that runs within a Web server.

Jakarta Servlet is a corner stone web framework that can act as a presentation-oriented as well as a service-oriented web application.
Jakarta Servlet intends to reduce the boilerplate code needed to convert the HTTP request into a Java object and to offer a Java object as an HTTP response, and to manage all the lifecycle around them.It is a key component of server-side Java development.Servlets receive and respond to requests from Web clients, usually across HTTP, the HyperText Transfer Protocol.

Since all Servlet/JSP engines must implement the Servlet/JSP part of Java EE specification, all servlet/JSP engine should work similarly.This makes servlet/JSP code portable between servlet/JSP engines and application servers.

Initially, Common Gateway Interface (CGI) scripts were the main technology used to generate dynamic content. Although widely used, CGI scripting technology has a number of shortcomings, including platform dependence and lack of scalability. To address these limitations, Java Servlet technology was created as a portable way to provide dynamic, user-oriented content.

A servlet is a generic server extension—a Java class that can be loaded dynamically to expand the functionality of a server. Servlets are commonly used with web servers, where they can take the place of CGI scripts. A servlet is similar to a proprietary server extension, except that it runs inside a Java Virtual Machine (JVM) on the server , so it is safe and portable. Servlets operate solely within the domain of the server: unlike applets, they do not require support for Java in the web browser.

Unlike CGI and FastCGI, which must use multiple processes to handle separate programs and/or separate requests, servlets can all be handled by separate threads within the same process or by threads within multiple processes spread across a number of backend servers. This means that servlets are also efficient and scalable. Because servlets run with bidirectional communication to the web server, they can interact very closely with the server to do things that are not possible with CGI scripts.
Another advantage of servlets is that they are portable: both across operating systems as we are used to with Java and also across web servers.

An `HTTP servlet` is a special type of servlet that handles an HTTP request and provides an HTTP response, usually in the form of an HTML page. The most common use of WebLogic HTTP servlets is to create interactive applications using standard Web browsers for the client-side presentation while WebLogic Server handles the business logic as a server-side process. WebLogic HTTP servlets can access databases, Enterprise JavaBeans,messaging APIs, HTTP sessions, and other facilities of WebLogic Server


Comparing Servlets with Other Technologies:- In functionality, servlets provide a higher level abstraction than Common Gateway Interface (CGI) programs but a lower level of abstraction than that provided by web frameworks such as JavaServer Faces.

Servlets have the following advantages over other server extension mechanisms:

1. They are generally much faster than CGI scripts because a different process model is used.
2. They use a standard API that is supported by many Web servers.
3. They have all the advantages of the Java programming language, including ease of development and platform independence.
4. They can access the large set of APIs available for the Java platform.

**The Power of Servlets**:-

1. `Portability`:- Because servlets are written in Java and conform to a well-defined and widely accepted API, they are highly portable across operating systems and across server implementations. You can develop a servlet on a Windows NT machine running the Tomcat server and later deploy it effortlessly on a high-end Unix server running the iPlanet/Netscape Application Server. With servlets, you can truly "write once, serve everywhere."
2. `Power`:- Servlets can harness the full power of the core Java APIs: networking and URL access, multithreading, image manipulation, data compression, database connectivity (JDBC), object serialization, internationalization, remote method invocation (RMI), and legacy integration (CORBA). Servlets can also take advantage of the J2EE platform that includes support for Enterprise JavaBeans (EJBs), distributed transactions (JTS), standardized messaging (JMS), directory lookup (JNDI), and advanced database access (JDBC 2.0). The list of standard APIs available to servlets continues to grow, making the task of web application development faster, easier, and more reliable.
3. `Efficiency and Endurance`:- Servlet invocation is highly efficient. Once a servlet is loaded, it remains in the server's memory as a single object instance.Thereafter, the server invokes the servlet to handle a request using a simple, lightweight method invocation. Unlike with CGI, there's no process to spawn or interpreter to invoke, so the servlet can begin handling the request almost immediately. Multiple, concurrent requests are handled by separate threads, so servlets are highly scalable.


**Servlet Container**:- `Servlet/JSP Containers`, sometimes called `servlet/JSP engines`, are Web server extensions that provide servlet functionality. Servlets interact with Web clients via a request/response paradigm implemented by the servlet container.The server must run web server software.In addition,to work with servlets and JSPs,the server must also run a servlet/JSP engines.For a servlet/JSP engine to work properly,the engine must be able to access the JDK that comes as part of Java SE.The JDK contains the Java compiler and core classes for working with Java and JRE for running compiled classes.
The container manages the lifecycle of a servlet.JVM cannot automate the process of object creation,management,method calls so we cannot execute Servlet and JSP directly through JVM.Containers can do this automation process.

The servlet container is a part of a Web server or application server that provides the network services over which requests and responses are sent, decodes MIME-based requests, and formats MIME-based responses. A servlet container also contains and manages servlets through their lifecycle.

A servlet container can be built into a host Web server, or installed as an add-on component to a Web Server via that server’s native extension API. Servlet containers can also be built into or possibly installed into Web-enabled application servers.Servers like Weblogic will get built-in JDK/JRE during installation whereas Servers like Tomcat will use JDK/JRE installed on the computer.

All servlet containers must support HTTP as a protocol for requests and responses, but additional request/response-based protocols such as HTTPS (HTTP over SSL) may be supported. The required versions of the HTTP specification that a container must implement are HTTP/1.1 and HTTP/2. When supporting HTTP/2, servlet containers must support the “h2” and “h2c” protocol identifiers. This implies all servlet containers must support ALPN. Because the container may have a caching mechanism described in RFC 7234 (HTTP/1.1 Caching), it may modify requests from the clients before delivering them to the servlet, may modify responses produced by servlets before sending them to the clients, or may respond to requests without delivering them to the servlet under the compliance with RFC 7234.

A servlet container may place security restrictions on the environment in which a servlet executes. In a Java Platform, Standard Edition (J2SE, v.1.3 or above) or Java Platform, Enterprise Edition (Java EE, v.1.3 or above) environment, these restrictions should be placed using the permission architecture defined by the Java platform. For example some application servers may limit the creation of a Thread object to insure that other components of the container are not negatively impacted.

Java SE 8 is the minimum version of the underlying Java platform with which servlet containers must be built.

Every server has built-in middleware services.This includes:- Security, Transaction, Logging, Auditing.


A **servlet** is a Java programming language class that directly or indirectly implements the jakarta.servlet.Servlet interface. The jakarta.servlet and jakarta.servlet.http packages provide interfaces and classes for writing servlets. All servlets must implement the jakarta.servlet.Servlet interface, which defines lifecycle methods such as init, service, and destroy.A servlet is a java class that extends HttpServlet class and runs on server within a servlet container.

Unlike a regular Java program, and just like an applet, a servlet does not have a main( ) method. Instead, certain methods of a servlet are invoked by the server in the process of handling requests. Each time the server dispatches a request to a servlet, it invokes the servlet's service( ) method.

A servlet is a Java programming language class that is used to extend the capabilities of servers that host applications accessed by means of a request-response programming model. Although servlets can respond to any type of request, they are commonly used to extend the applications hosted by web servers. For such applications, Java Servlet technology defines HTTP-specific servlet classes.

The following is a typical sequence of events:-

1. A client (e.g., a Web browser) accesses a Web server and makes an HTTP request.
2. The request is received by the Web server and handed off to the servlet container.The servlet container can be running in the same process as the host Web server,
in a different process on the same host, or on a different host from the Web server for which it processes requests.
3. The servlet container determines which servlet to invoke based on the configuration of its servlets, and calls it with objects representing the request and response.
4. The servlet uses the request object to find out who the remote user is, what HTTP POST parameters may have been sent as part of this request, and other relevant data. The servlet performs whatever logic it was programmed with, and generates data to send back to the client. It sends this data back to the client via the response object.
5. Once the servlet has finished processing the request, the servlet container ensures that the response is properly flushed, and returns control back to the host Web server.


Servlets use classes and interfaces from two packages: `javax.servlet` and `javax.servlet.http`.The javax.servlet package contains classes and interfaces to support generic, protocol-independent servlets. These classes are extended by the classes in the javax.servlet.http package to add HTTP-specific functionality. The top-level package name is javax instead of the familiar java, to indicate that the Servlet API is an Optional Package (formerly called a Standard Extension).


**Creating a Servlet**:- The `javax.servlet` and `javax.servlet.http` packages provide interfaces and classes for writing servlets. All servlets must implement the `Servlet interface`, which defines life-cycle methods. When implementing a generic service, you can use or extend the `GenericServlet` class provided with the Java Servlet API. The `HttpServlet class` provides methods, such as doGet and doPost, for handling HTTP-specific services.

The *Servlet interface* is the central abstraction of the Java Servlet API. Defines methods that all servlets must implement.This interface defines methods to initialize a servlet, to service requests, and to remove a servlet from the server. These are known as life-cycle methods and are called in the following sequence:
1. The servlet is constructed, then initialized with the init method.
2. Any calls from clients to the service method are handled.
3. The servlet is taken out of service, then destroyed with the destroy method, then garbage collected and finalized.

All servlets implement this interface either directly, or more commonly, by extending a class that implements the interface. The two classes in the Java Servlet API that implement the Servlet interface are `GenericServlet` and `HttpServlet`.A protocol-independent servlet should subclass GenericServlet, while an HTTP servlet should subclass HttpServlet, which is itself a subclass of GenericServlet with added HTTP-specific functionality. For most purposes, Developers will extend HttpServlet to implement their servlets.

*GenericServlet class* defines a generic, protocol-independent implementation of the Servlet interface. GenericServlet implements the `Servlet` and `ServletConfig interfaces`(It handles the internal storage of the ServletConfig object during initialization and also lets you call methods like getServletContext() and getInitParameter() directly without calling getServletConfig()).
GenericServlet makes writing servlets easier. It provides simple versions of the lifecycle methods init and destroy and of the methods in the ServletConfig interface( provides the empty, no-argument init() method you can easily override without managing super.init(config)). GenericServlet also implements the log method, declared in the `ServletContext interface`.
It leaves the service(ServletRequest, ServletResponse) method abstract.You (or a subclass like HttpServlet) must implement this method to handle incoming traffic.
A generic servlet should override its service( ) method to handle requests as appropriate for the servlet. The service( ) method accepts two parameters: a request object and a response object. The request object tells the servlet about the request, while the response object is used to return a response.
It is necessary when, for example, RMI or CORBA objects act as servlets.

*HttpServlet class* provides an abstract class to be subclassed to create an HTTP servlet suitable for a Web site. A subclass of HttpServlet must override at least one method, usually one of these:- doGet(if the servlet supports HTTP GET requests), doPost(for HTTP POST requests), doPut(for HTTP PUT requests), doDelete(for HTTP DELETE requests), init and destroy(to manage resources that are held for the life of the servlet), getServletInfo (hich the servlet uses to provide information about itself).However, HTTP servlets generally don't touch doTrace( ) or doOptions( ). For these, the default implementations are almost always sufficient.
There's almost no reason to override the service method. service handles standard HTTP requests by dispatching them to the handler methods for each HTTP request type (the doXXX methods listed above).
HTTP servlet usually does not override the service( ) method. Instead, it overrides doGet( ) to handle GET requests and doPost( ) to handle POST requests. An HTTP servlet can override either or both of these methods, depending on the type of requests it needs to handle. The service( ) method of HttpServlet handles the setup and dispatching to all the doXXX( ) methods, which is why it usually should not be overridden.

The remainder in the javax.servlet and javax.servlet.http packages are largely support classes. For example, the ServletRequest and ServletResponse classes in javax.servlet provide access to generic server requests and responses,while HttpServletRequest and HttpServletResponse in javax.servlet.http provide access to HTTP requests and responses. The javax.servlet.http package also contains an HttpSession interface that provides built-in session tracking functionality and a Cookie class that allows you to quickly set up and process HTTP cookies.

In a typical Jakarta Servlet based web application, the class must extend jakarta.servlet.http.HttpServlet and override one of the doXxx methods where Xxx represents the HTTP method of interest.

```java
public class StudentServlet extends HttpServlet{

    @Override
    public void doPost(HttpRequesst request, HttpResponse response)throws ServletException,IOException
    {
        ...
    }
}
```

Servlets typically run on multithreaded servers, so be aware that a servlet must handle concurrent requests and be careful to synchronize access to shared resources. Shared resources include in-memory data such as instance or class variables and external objects such as files, database connections, and network connections.


**Servlet Life Cycle**:- A servlet is managed through a well defined life cycle that defines how it is loaded and instantiated, is initialized, handles requests from clients, and is taken out of service. This life cycle is expressed in the API by the init, service, and destroy methods of the javax.servlet.Servlet interface that all servlets must implement directly or indirectly through the GenericServlet or HttpServlet abstract classes.

When the server loads this servlet, the server creates a single instance to handle every request made of the servlet.

The servlet lifecycle allows servlet containers to address both the performance and resource problems of CGI and the security concerns of low-level server API programming. A common way to execute servlets is for the servlet container to run all its servlets in a single Java Virtual Machine ( JVM). By placing all the servlets into the same JVM, the servlets can efficiently share data with one another, yet they are prevented by the Java language from accessing one another's private data. Servlets can persist between requests inside the JVM as object instances. This takes up far less memory than full-fledged processes, yet servlets still are able to efficiently maintain references to external resources.

The life cycle of a servlet is controlled by the container in which the servlet has been deployed. When a request is mapped to a servlet, the container performs the following steps.
1. If an instance of the servlet does not exist, the web container
    a. Loads the servlet class.
    b. Creates an instance of the servlet class.
    c. Initializes the servlet instance by calling the init method.
2. Invokes the service method, passing request and response objects.
3. If the container needs to remove the servlet, it finalizes the servlet by calling the servlet’s destroy method.

It's perfectly legal for a servlet to be loaded, created, and instantiated in its own JVM, only to be destroyed and garbage collected without handling any client requests or after handling just one request. Any servlet container that makes this a habit, however,probably won't last long on the open market.
At the time the code for a servlet is loaded, the server creates a single instance. That single instance handles every request made of the servlet. This improves performance in three ways:
1. It keeps the memory footprint small.
2. It eliminates the object creation overhead that would otherwise be necessary to create a new servlet object. A servlet can already be loaded in a virtual machine when a request comes in, letting it begin executing right away.
3. It enables persistence. A servlet can have already loaded anything it's likely to need during the handling of a request. For example, a database connection can be opened once and used repeatedly thereafter. The connection can even be used by a group of servlets. Another example is a shopping cart servlet that loads in memory the price list along with information about its recently connected clients. Yet another servlet may choose to cache entire pages of output to save time if it receives the same request again.

From the servlet developer's perspective, each client is another thread that calls the servlet via the service( ), doGet( ), or doPost( ) methods.

- `Init and Destroy` - servlets can define init( ) and destroy( ) methods. The server calls a servlet's init( ) method after the server constructs the servlet instance and before the servlet handles any requests. The server calls the destroy( ) method after the servlet has been taken out of service and all pending requests to the servlet have completed or timed out.
Depending on the server and the web application configuration, the init( ) method may be called at any of these times:
1. When the server starts.
2. When the servlet is first requested, just before the service( ) method is invoked.
3. At the request of the server administrator.

In any case, init( ) is guaranteed to be called and completed before the servlet handles its first request.
The init( ) method is typically used to perform servlet initialization — creating or loading objects that are used by the servlet in the handling of its requests. During the init( ) method a servlet may want to read its initialization (init) parameters. These parameters are given to the servlet itself and are not associated with any single request. They can specify initial values, like where a counter should begin counting, or default values, perhaps a template to use when not specified by the request. Init parameters for a servlet are set in the web.xml deployment descriptor, although some servers have graphical interfaces for modifying this file.
init(ServletConfig config): This runs exactly once when the servlet is first loaded. It’s typically used for heavy lifting like opening a database connection or reading configuration parameters.
destroy(): Like init, this runs only once at the very end of the servlet's life. It gives the servlet a chance to clean up resources (closing those database connections or threads) before the JVM reclaims the memory.


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

`service(ServletRequest req, ServletResponse res)`: This is the engine room. It’s called for every client request. In a standard HttpServlet, this method automatically dispatches the request to the appropriate handler, like doGet() or doPost().

You can monitor and react to events in a servlet’s life cycle by defining listener objects whose methods get invoked when life-cycle events occur. To use these listener objects you must define and specify the listener class.


In addition to the life-cycle methods, the Servlet interface provides the `getServletConfig method`, which the servlet can use to get any startup information(Returns a `ServletConfig object` that contains information about a single servlet's configuration), and the `getServletInfo method`, which allows the servlet to return basic information about itself, such as author, version, and copyright.


*ServletConfig*:-A servlet configuration object used by a servlet container to pass information to a servlet during initialization.

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


**Retrieving Information**:- To build a successful web application, you often need to know a lot about the environment in which it is running. You may need to find out about the server that is executing your servlets or the specifics of the client that is sending requests. And no matter what kind of environment the application is running in, you most certainly need information about the requests that the application is handling.

A number of methods provide servlets access to this information. For the most part, each method returns one specific result.

- *The Servlet*:- Each registered servlet name can have specific initialization (init) parameters associated with it. Init parameters are available to the servlet at any time; they are set in the web.xml deployment descriptor and generally used in init( ) to set initial or default values for a servlet or to customize the servlet's behavior in some way.

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


- *The Server*:- A servlet can find out much about the server in which it is executing. It can learn the hostname, listening port, and server software, among other things. A servlet can display this information to a client, use it to customize its behavior based on a particular server package, or even use it to explicitly restrict the machines on which the servlet will run.

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


- *The Client*:- For each request, a servlet has the ability to find out about the client machine and, for pages requiring authentication, about the actual user. This information can be used for logging access data, associating information with individual users, or restricting access to certain clients.


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


**The Request object**:- The request object encapsulates all information from the client request. In the HTTP protocol, this information is transmitted from the client to the server in the HTTP headers and the message body of the request.

`ServletRequest`- Defines an object to provide client request information to a servlet. The servlet container creates a ServletRequest object and passes it as an argument to the servlet's service method.A ServletRequest object provides data including parameter name and values, attributes, and an input stream. Interfaces that extend ServletRequest can provide additional protocol-specific data (for example, HTTP data is provided by HttpServletRequest.)

1. String getParameter(String name) -Returns the value of a request parameter as a String, or null if the parameter does not exist.
2. void setAttribute(String name, Object o)- Stores an attribute in this request
3. Object getAttribute(String name)- Returns the value of the named attribute as an Object, or null if no attribute of the given name exists.

`HttpServletRequest`-Extends the ServletRequest interface to provide request information for HTTP servlets.The servlet container creates an HttpServletRequest object and passes it as an argument to the servlet's service methods (doGet, doPost, etc).

1. Cookie[] getCookies()- Returns an array containing all of the Cookie objects the client sent with this request.
2. HttpSession getSession()-Returns the current session associated with this request, or if the request does not have a session, creates one.
3. HttpSession getSession(boolean create)-Returns the current HttpSession associated with this request or, if there is no current session and create is true, returns a new session.

*Request Parameters method*:- Each access to a servlet can have any number of request parameters associated with it. These parameters are typically name/value pairs that tell the servlet any extra information it needs to handle the request.Request parameters for the servlet are the strings sent by the client to a servlet container as part of its request.They are name of values sent when user clicks submit button.
HTTP Protocol Parameters:- When the request is an HttpServletRequest object,and conditions set out in ”When Parameters Are Available” are met, the container populates the parameters from the URI query string and POST-ed data.An HTTP servlet gets its request parameters as part of its query string (for GET requests) or as encoded POST data (for POST requests), or sometimes both. Fortunately, every servlet retrieves its parameters the same way, using `getParameter( )` and `getParameterValues( )`.

- The following are the conditions that must be met before post form data will be populated to the parameter set:
    - The request is an HTTP or HTTPS request.
    - The HTTP method is POST.
    - The content type is application/x-www-form-urlencoded.
    - The servlet has made an initial call of any of the getParameter family of methods on the request object.

If the conditions are not met and the post form data is not included in the parameter set, the post data must still be available to the servlet via the request object’s input stream. If the conditions are met, post form data will no longer be available for reading directly from the request object’s input stream.

The parameters are stored as a set of name-value pairs. Multiple parameter values can exist for any given parameter name. The following methods of the ServletRequest interface are available to access parameters.

The `getParameter(String param) method` returns value of the specified parameter as a string if it exists or null if it doesn't.Often,this value is defined in Value attribute of the control in HTML pages or JSP.For textbox,that's usually value entered by user.For a group of radio radio buttons or a combo box,that's value of the button or item selected by user.For checkboxes or independent radio buttons that have Value attribute,the method returns that value if or button is selected and null if not.For checkboxes or independent radio buttons that don't have value attribute,though the method returns "on" value if checkbox or button is selected and null if not.
The `getParameterValues(String param) method` retrieves multiple values for one parameter name.It returns an array of String objects containing all the parameter values associated with a parameter name. The value returned from the getParameter method must be the first value in the array of String objects returned by getParameterValues.Useful for controls like controls like list boxes that allow multiple selections.After returning array of the String Objects,you can use a loop to get values.
The `getParameterMap method` returns a java.util.Map of the parameter of the request, which contains names as keys and parameter values as map values.Data from the query string and the post body are aggregated into the request parameter set. Query string data is presented before post body data. For example, if a request is made with a query string of a=hello and a post body of a=goodbye&a=world, the resulting parameter set would be ordered a=(hello, goodbye, world).Path parameters that are part of a GET request (as defined by HTTP 1.1) are not exposed by these APIs. They must be parsed from the String values returned by the getRequestURI method or the getPathInfo method.
`getPrameterNames() method` returns an Enumeration object that contains names of all parameters contained in request.If request has no parameters,the method returns an empty Enumeration object.You can search through Enumeration object to get parameter names,and you can use the getParameter method to return value of each parameter name.Enumeration object is a collection that can be searched element by element.To determine if more element exist in the collection,you can use hasMoreElements method,which returns a Boolean value.And to get next element in the collection,you can use nextElement method

Finally, a servlet can retrieve the raw query string of the request with `getQueryString( )`.This method returns the raw query string (encoded GET parameter information) of the request or null if there was no query string.This low-level information is rarely useful for handling form data. It's best for handling a single unnamed value, as in /servlet/Sqrt?576, where the returned query string is 576.

- `Attributes`:- Attributes are objects associated with a request. Attributes may be set by the container to express information that otherwise could not be expressed via the API,or may be set by a servlet to communicate information to another servlet (via the RequestDispatcher). Attributes are accessed with the following methods of the ServletRequest interface:
    1. getAttribute(String name) Returns the value of specified attribute as an Object type.If no attribute exists for specified name,this method returns a null value.
    2. getAttributeNames
    3. setAttribute(String name,Object o) Stores any objject in the request as an attribute and specifies a name of the attribute.Attributes are reset between requests.

Only one attribute value may be associated with an attribute name.Attribute names beginning with the prefixes of java. and javax. are reserved for definition by this specification. Similarly, attribute names beginning with the prefixes of sun., com.sun., oracle and com.oracle are reserved for definition by Oracle Corporation. It is suggested that all attributes placed in the attribute set be named in accordance with the reverse domain name convention suggested by the Java Programming Language Specification1 for package naming.

When you use MVC pattern, your servlets often need to forward a request object to a JSP or another servlet.First you need to store any object in request object, you use the `setAttribute` method.Once you store an object in request object,you can use the `getAttribute` method to retrieve the object.The request attributes are reset between requests.As a result if you store an Object as request attribute and forward that request to a JSP,that object will only be available to that JSP and won't be available in later sessions.These methods are often used in conjuction with a RequestDispatcher object that's used to forward a request.


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


- **File upload** - Servlet container allows files to be uploaded when data is sent as multipart/form-data.In prior versions of the Servlet specification, implementing file upload required the use of external libraries or complex input processing. The Java Servlet specification now helps to provide a viable solution to the problem in a generic and portable way. Java Servlet technology now supports file upload out of the box, so any web container that implements the specification can parse multipart requests and make mime attachments available through the HttpServletRequest object.
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


**Response**:-

- *The Structure of a Response*:- An HTTP servlet can return three kinds of things to the client: a single status code, any number of HTTP headers, and a response body. A status code is an integer value that describes, as you would expect, the status of the response. The status code can indicate success or failure, or it can tell the client software to take further action to finish the request. The numerical status code is often accompanied by a reason phrase that describes the status in prose better understood by a human. Usually, a status code works behind the scenes and is interpreted by the browser software. Sometimes, especially when things go wrong, a browser may show the status code to the user. The most famous status code is probably the 404 Not Found code, sent by a web server when it cannot locate a requested URL.

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

*Constructing Responses*:- A response contains data passed between a server and the client. All responses implement the ServletResponse interface. This interface defines methods that allow you to operate on.

`Retrieve an output stream to use to send data to the client.` - To send character data, use the `PrintWriter` returned by the response’s `getWriter method`. To send binary data in a Multipurpose Internet Mail Extensions (MIME) body response, use the `ServletOutputStream` returned by `getOutputStream`. To mix binary and text data, as in a multipart response, use a `ServletOutputStream` and manage the character sections manually.

The charset for the MIME body response can be specified explicitly using any of the following techniques: per request, per web-app (using ServletContext.setRequestCharacterEncoding(java.lang.String), deployment descriptor), and per container (for all web applications deployed in that container, using vendor specific configuration). If multiple of the preceding techniques have been employed, the priority is the order listed. For per request, the charset for the response can be specified explicitly using the `setCharacterEncoding(String)`, `setCharacterEncoding(Charset)` and `setContentType(java.lang.String)` methods, or implicitly using the `setLocale(java.util.Locale)` method. Explicit specifications take precedence over implicit specifications. If no charset is explicitly specified, ISO-8859-1 will be used.
The setCharacterEncoding, setContentType, or setLocale method must be called before getWriter and before committing the response for the character encoding to be used. This allows the methods to return an object that uses the proper content type.
A registry of content type names is kept by the Internet Assigned Numbers Authority (IANA) at http://www.iana.org/assignments/media-types/.

Indicate whether to buffer output with the `setBufferSize(int)` method. By default, any content written to the output stream is immediately sent to the client.
Buffering allows content to be written before anything is sent back to the client, thus providing the servlet with more time to set appropriate status codes and headers or forward to another web resource. The method must be called before any content is written or before the response is committed.These methods are provided on the ServletResponse interface to allow buffering operations to be performed whether the servlet is using a ServletOutputStream or a Writer.

The `getBufferSize` method returns the size of the underlying buffer being used. If no buffering is being used, this method must return the int value of 0 (zero).The servlet can request a preferred buffer size by using the `setBufferSize` method.The buffer assigned is not required to be the size requested by the servlet, but must be at least as large as the size requested. This allows the container to reuse a set of fixed size buffers, providing a larger buffer than requested if appropriate. The method must be called before any content is written using a ServletOutputStream or Writer. If any content has been written or the response object has been committed, this method must throw an IllegalStateException.

The `isCommitted` method returns a boolean value indicating whether any response bytes have been returned to the client. The `flushBuffer` method forces content in the buffer to be written to the client.The `reset` method clears data in the buffer when the response is not committed.Headers, status codes and the state of calling getWriter or getOutputStream set by the servlet prior to the reset call must be cleared as well. The `resetBuffer` method clears content in the buffer if the response is not committed without clearing the headers and status code.
If the response is committed and the reset or resetBuffer method is called, an IllegalStateException must be thrown. The response and its associated buffer will be unchanged.
When using a buffer, the container must immediately flush the contents of a filled buffer to the client. If this is the first data that is sent to the client, the response is considered to be committed.

Set localization information, such as locale and character encoding.

```java
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

**Mapping Servlets** - Before you can request a servlet, you must use the `web.xml` file or `@WebServlet` annotations to map the servlets in an application.If you use both techniques to map a servlet name to the same URL,the mapping in web.xml overrides the mapping in the annotation.

`Using xml`:-

<servlet-class> - Specifies class for servlet.Note that this element includes the packages and name for the class but not .class extension.
<servlet-name> - Specifies a unique name for the servlet that's used to identify servley within web.xml. This element is required for both servlet element and servlet-mapping element and maps each servlet-mapping element to servlet element.
<url-pattern> - Specifies the URL or URLs that are mapped to specified servlet.This pattern must begin with a front slash,but URL pattern can specify a virtual directory or file that doesn't exist.

```xml
 <!-- Servlet Mapping -->
    <servlet>
        <servlet-name>name</servlet-name>
        <servlet-class>com.kipcollo.ExampleServlet</servlet-class>
    </servlet>
    <servlet-mapping>
        <servlet-name>name</servlet-name>
        <url-pattern>/home</url-pattern>
    </servlet-mapping>
```

`@WebServlet` annotation is used to declare a Servlet. This annotation is processed by the container at deployment time and the corresponding servlet made available at the specified URL patterns.
Use the @WebServlet annotation to define a servlet component in a web application. This annotation is specified on a class and contains metadata about the servlet being declared. The annotated servlet must specify at least one URL pattern. This is done by using the urlPatterns or value attribute on the annotation. All other attributes are optional, with default settings. Use the value attribute when the only attribute on the annotation is the URL pattern; otherwise, use the urlPatterns attribute when other attributes are also used.

Classes annotated with @WebServlet must extend the jakarta.servlet.http.HttpServlet class.

```java
@WebServlet("/home")
public class HomeServlet extends Httpservlet{
    .....
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


**Internationalization**:- Clients may optionally indicate to a Web server what language they would prefer the response be given in. This information can be communicated from the client using the Accept-Language header along with other mechanisms described in the HTTP/1.1 specification. The following methods are provided in the ServletRequest interface to determine the preferred locale of the sender:

getLocale - The getLocale method will return the preferred locale for which the client wants to accept content. See section 14.4 of RFC 7231 (HTTP/1.1) for more information about how the Accept-Language header must be interpreted to determine the preferred language of the client.
getLocales - The getLocales method will return an Enumeration of Locale objects indicating, in decreasing order starting with the preferred locale, the locales that are acceptable to the client.

If no preferred locale is specified by the client, the locale returned by the getLocale,method must be the default locale for the servlet container and the getLocales
method must contain an enumeration of a single Locale element of the default locale.

Internationalization in HTTP is primarily defined through content negotiation mechanisms that allow a client to request a specific language or a server to indicate the language of the content. These are detailed in the HTTP/1.1 specification (RFC 7231, which obsoleted RFC 2616) and relevant W3C guidelines.Key HTTP headers for internationalization (i18n) include:Accept-Language (Request Header): Used by the client to indicate which languages the client understands (e.g., Accept-Language: fr-CH, fr;q=0.9, en;q=0.8).Content-Language (Entity Header): Used by the server to describe the natural language(s) of the intended audience for the enclosed entity (e.g., Content-Language: de-DE).Core Principles Defined in HTTP/Web Standards:Language Negotiation: The process of matching a user's preferences to available localized resources, as described in W3C Web Services Internationalization Usage Scenarios.Character Encoding: HTTP supports UTF-8, which is central to internationalization to allow characters from different languages to be displayed correctly, as noted in W3C's About Internationalization.Location: While the core headers are in the HTTP spec, broader architectural guidance is maintained by the W3C Internationalization Activity.


**Dispatching Requests**:- When building a Web application, it is often useful to forward processing of a request to another servlet, or to include the output of another servlet in the response.
The RequestDispatcher interface provides a mechanism to accomplish this.
When asynchronous processing is enabled on the request, the AsyncContext allows a user to dispatch the request back to the servlet container.

`RequestDispatcher` defines an object that receives requests from the client and sends them to any resource (such as a servlet, HTML file, or JSP file) on the server. The servlet container creates the RequestDispatcher object, which is used as a wrapper around a server resource located at a particular path or given by a particular name.
This interface is intended to wrap servlets, but a servlet container can create RequestDispatcher objects to wrap any type of resource.

- Obtaining a RequestDispatcher:- An object implementing the RequestDispatcher interface may be obtained from the ServletContext via the following methods:
    1. The getRequestDispatcher method takes a String argument describing a path within the scope of the ServletContext. This path must be relative to the root of the ServletContext and begin with a ‘/’, or be empty. The method uses the path to look up a servlet, using the servlet path matching rules in Chapter 12, “Mapping Requests to Servlets”, wraps it with a RequestDispatcher object, and returns the resulting object. If no servlet can be resolved based on the given path, a RequestDispatcher is provided that returns the content for that path.
    2. The getNamedDispatcher method takes a String argument indicating the name of a servlet known to the ServletContext. If a servlet is found, it is wrapped with a RequestDispatcher object and the object is returned. If no servlet is associated with the given name, the method must return null.


**Servlet Collaboration**:- Servlets running together in the same server have several ways to communicate with one another. There are two main styles of servlet collaboration:

`Sharing information`:- This involves two or more servlets sharing state or resources. For example, a set of servlets managing an online store could share the store's product inventory count or share a database connection. Session tracking is a special case of sharing information.
`Sharing Control`:- This involves two or more servlets sharing control of the request. For example, one servlet could receive the request but let another servlet handle some or all of the request-handling responsibilities.

In the past (before Servlet API 2.1) we would have listed another style of collaboration: `direct manipulation`.With this style of collaboration, a servlet could obtain a direct reference to another through the getServlet( ) method and invoke methods on the other servlet. This style of collaboration is no longer supported; the getServlet( ) method has been deprecated and defined to return null for API 2.1 and later.The reason: a servlet may be destroyed by the web server at any time, so nothing but the server should hold a direct reference to a servlet. Everything that could be done with getServlet( ) can be accomplished better and safer using the alternatives.

*Sharing Information*:- Oftentimes servlets cooperate by sharing some information. The information may be state information, a shared resource, a resource factory, or anything. In Servlet API 2.0 and earlier there were no built-in mechanisms by which servlets could share information.

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


*Sharing Control*:- For more dynamic collaboration, servlets can share control of the request. First, a servlet can forward an entire request, doing some preliminary processing and then passing off the request to another component. Second, a servlet can include in its response a bit of content generated by another component, essentially creating a programmatic server-side include. Conceptually, if you think of the resulting page like a screen, a forward gives another servlet full control of the screen, while an include injects only a section of content into the screen at some point.
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
- To call a servlet you either:-
    1. Forward the Request and Response.
    2. Redirect Response-To redirect response you use redirect method of response object.Typically used when you transfer control to URL outside your application.

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


**Sessions & Cookies**:- The Hypertext Transfer Protocol (HTTP) is by design a stateless protocol. To build effective Web applications, it is imperative that requests from a particular client be associated with each other. Many strategies for session tracking have evolved over time, but all are difficult or troublesome for the programmer to use directly.
Keeping track of users as they move around a web site is known as `session tracking`.

A browser on a client requests a page from a web server.After the web server returns the page,it drops the connection.Then, if the browser makes additional requests the web server has no way to associate the browser with its previous requests.Since HTTP doesn't maintain state, it is known as stateless protocol.In contrast FTP maintains state between requests so it is stateful protocol.

*Session tracking in Java*:- A browser on a client request a JSP or servlet from web server,which passes the request to the servlet engine.Then, the servlet engine checks if the request includes an ID for java session.If it doesn't, the servlet engine creates a unique ID for the session plus a `session object` that can be used to store the data for the session.From that point on,the web server uses the session ID to relate each browser request to session object,even though the server still drops the HTTP connection after returning each page.
By default,the servlet API uses a `cookie` to store the session ID within the client's browser.This is an extension of the HTTP protocol.Then,when the next request is made,this cookie is added to the request.However,if cookies have been disabled within the browser,this type of session tracking won't work.
To get around this problem,the servlet API provides a way to rewrite the URLs so it includes the session ID.This is known as `URL encoding`.It works even if cookies have been disabled within the browser.However,there are several problems - URL encoding presents a securiy hole that can allow session hijacking and also can cause site to malfunction if the user bookmarks a page that contains a session ID.You have to provide for this encoding in your servlets and JSPs.In contrast, cookies are automatically used for session tracking so you don't have to provide any code for them.

*SESSIONS*: Since the session object is a built-in JSP object,you only need to get a session object when you're working with servlets.To do that,you can call the `getSession method` of `request object`.Then,if the session object doesn't exist,this method creates a new one.Usually,though,it just accesses the one that already exists.
A session is created when browser makes the first request to a site.It is destroyed when session ends.

This specification defines a simple `HttpSession interface` that allows a servlet container to use any of several approaches to track a user’s session without involving the Application Developer in the nuances of any one approach.It provides a way to identify a user across more than one page request or visit to a Web site and to store information about that user.
The servlet container uses this interface to create a session between an HTTP client and an HTTP server. The session persists for a specified time period, across more than one connection or page request from the user. A session usually corresponds to one user, who may visit a site many times. The server can maintain a session in many ways such as using cookies or rewriting URLs.

- This interface allows servlets to
    1. View and manipulate information about a session, such as the session identifier, creation time, and last accessed time.
    2. Bind objects to sessions, allowing user information to persist across multiple user connections.

When an application stores an object in or removes an object from a session, the session checks whether the object implements HttpSessionBindingListener. If it does, the servlet notifies the object that it has been bound to or unbound from the session. Notifications are sent after the binding methods complete. For session that are invalidated or expire, notifications are sent after the session has been invalidated or expired.
When container migrates a session between VMs in a distributed container setting, all session attributes implementing the HttpSessionActivationListener interface are notified.
A servlet should be able to handle cases in which the client does not choose to join a session, such as when cookies are intentionally turned off. Until the client joins the session, isNew returns true. If the client chooses not to join the session, getSession will return a different session on each request, and isNew will always return true.
Session information is scoped only to the current web application (ServletContext), so information stored in one context will not be directly visible in another.

This object is only valid within the scope of the HTTP request from which it was obtained. Once the processing of that request returns to the container, this object must not be used. If there is a requirement to access the session outside of the scope of an HTTP request then this must be done via #getAccessor().

From `session object`,you can call the `setAttribute method` to set any object as an attribute of current session.Similarly, you can use the `getAttribute method` to return any attribute you have set.When you set an attribute in the request object,the attributes are removed after the request has been completed.However,when you set an attribute in session object,the attribute are available until the user closes the browser,until the session times out, or until you use the `removeAttribute method` to remove attribute from session object.

```java
HttpSession session = request.getSession();
Cart cat = new Cart();
session.setAttribute("cart",cart);

Cart cart = (Cart)session.getAttribute("cart");//If no attribute exists for specified name,this method returns null value.
session.removeAttribute("cart");
```

The session object is a built-in JSP object.As a result, you don't need to create the session object when working with JSPs.

*Session Tracking Mechanisms* - The following sections describe approaches to tracking a user’s sessions:-

`Cookies`:- Session tracking through HTTP cookies is the most used session tracking mechanism and is required to be supported by all servlet containers.The container sends a cookie to the client. The client will then return the cookie on each subsequent request to the server, unambiguously associating the request with a session. The standard name of the session tracking cookie must be JSESSIONID.
Containers may allow the name of the session tracking cookie to be customized through container specific configuration.

```xml
<!-- web.xml -->
<session-config>
    <cookie-config>
        <name>MYSESSIONID</name>
    </cookie-config>
</session-config>
```

All servlet containers MUST provide an ability to configure whether or not the container marks the session tracking cookie as HttpOnly. The established configuration must apply to all contexts for which a context specific configuration has not been established.
If a web application configures a custom name for its session tracking cookies, the same custom name will also be used as the name of the URI parameter if the session id is encoded in the URL (provided that URL rewriting has been enabled).

You can create cookies to store any type of string data.Once you create a cookie,you include it in the server's response to the browser.Then,the browser will store the cookie on the client machine,and it will send it back to the server with all subsequent requests.
Once you have stored a cookie on a browser's PC,you can use it to make your web application work for the user.You can use it to allow users to skip login and registration forms that gather data like user name,password,address, or credit card data.Also to customize page that display information like weather reports,sports scores and stock quotations.You can also focus advertising like banner ads that target user's interests.

A per-session cookie that holds the session ID is automatically created for each session.That cookie is used to relate the browser to session obect.
You can also create and send other cookies to user's browser.You can use these cookies to access user-specific data that's stored in a file or database.

To create and use cookies,you use the constructors and methods.Afetr you use the constructors of the Cookie class to create a cookie,you can use the methods of this class to set parameters for the cookie and to get its name and value.Then, you can use the addCookie method of the response object to add cookie to the browser's PC.And you can use the getCookies method of the request object to get an array of all cookies on the browser's PC.

There are two types of cookies:- per-session cookie and persistent cookie.
per-session cookie - Is stored on the browser until user closes the browser,persistent cookie can be stored on user's hard disk up to 3 years.

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


`SSL Sessions` - Secure Sockets Layer, the encryption technology used in the HTTPS protocol, has a built-in mechanism allowing multiple requests from a client to be unambiguously identified as being part of a session. A servlet container can easily use this data to define a session.

The HttpServletRequest interface provides the getCookies method to obtain an array of cookies that are present in the request. These cookies are data sent from the client to the server on every request that the client makes. Typically, the only information that the client sends back as part of a cookie is the cookie name and the cookie value. Other cookie attributes that can be set when the cookie is sent to the browser, such as comments, are not typically returned. The specification also allows for the cookies to be HttpOnly cookies. HttpOnly cookies indicate to the client that they should not be exposed to client-side scripting code (It’s not filtered out unless the client knows to look for this attribute). The use of HttpOnly cookies helps mitigate certain kinds of cross-site scripting attacks.

- `URL Rewriting`:- URL rewriting is the lowest common denominator of session tracking. When a client will not accept a cookie, URL rewriting may be used by the server as the basis for session tracking. URL rewriting involves adding data, a session ID, to the URL path that is interpreted by the container to associate the request with a session.

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


```xml
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
```


**Configuring Servlets**:- Configuring or mapping servlet is making underlying Servlet container recognize our servlet class to manage its lifecycle and to map/link one or more requests urls.
Prior to servlet 3.0 specification(Tomcat 7.0), you had to use the web.xml to map a servlet to a URL.With servlet 3.0 specification and later,you can use the @Webservlet annotation to map a servlet to one or more URL patterns.The advantage of this approach is that it requires less code.


*Web.xml*:- You define servlets as a part of a Web application in several entries in the J2EE standard Web Application deployment descriptor, web.xml. The web.xml file is located in the WEB-INF directory of your Web application.Use it if the servlet component class are pre-defined class like ActionServlets(struts),DispatcherServlet(Spring mvc),FacesServlet(jsf).

The web.xml file in the WEB-INF directory is known as a `deployment descriptor`. This file contains configuration information. about the web app in which it resides. It's an XML file with a standardized DTD. The DTD contains more than 50 tags, allowing full control over the web app's behavior. The deployment descriptor file controls servlet registration, URL mappings, welcome files,and MIME types, as well as advanced features like page-level security constraints and how a servlet should behave in a distributed environment.

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

   



    <display-name>helloWorld</display-name>
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


*Annotation based configurations*-Servlet Annotations are introduced in Servlet API 3.0 (JEE 5.0, JSE 5.0)(Tomcat 7.0). These annotations are used to avoid writing the web.xml file.Use if the servlet component is user-defined class.

The web container initializes a servlet after loading and instantiating the servlet class and before delivering requests from clients. To customize this process to allow the servlet to read persistent configuration data, initialize resources, and perform any other one-time activities, you can either override the init method of the Servlet interface or specify the initParams attribute of the @WebServlet annotation. The initParams attribute contains a @WebInitParam annotation. If it cannot complete its initialization process, a servlet throws an UnavailableException.


*Using Programmatic Approach(100% Java code approach)*- Use servletContext.addServlet() method.Use this for pre-defined Servlet component class like DispatcherServlet and you want to avoid xml driven configurations from application development.


**Requesting a Servlet**:-

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

**Annotations and pluggability**:- In a web application, classes using annotations will have their annotations processed only if they are located in the WEB-INF/classes directory, or if they are packaged in a jar file located in WEB-INF/lib within the application.

The web application deployment descriptor contains a metadata-complete attribute on the web-app element. This attribute defines whether this deployment descriptor and any web fragments, if any, are complete, or whether the class files available to this module and packaged with this application should be examined for annotations that specify deployment information. Deployment information, in this sense, refers to any information that could have been specified by the deployment descriptor or fragments, but instead is specified as annotations on classes.
If the value of the metadata-complete attribute is specified as true, the deployment tool must ignore any annotations that specify such deployment information in the class files packaged in the web application.

If the metadata-complete attribute is not specified, or its value is false, the deployment tool must examine the class files of the application for such annotations.
Note that a true value for metadata-complete does not preempt the processing of all annotations.

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
9. WebServlet -Annotation used to declare a servlet.

The following annotations from related packages are also covered by the web.xml and associated fragments.

From javax.annotation:- PostConstruct, PreDestroy, Resource, Resources
From javax.annotation.security:- DeclareRoles,RunAs
From javax.annotation.sql:- DataSourceDefinition,DataSourceDefinitions
From javax.ejb:- EJB, EJBs
From javax.jms:- JMSConnectionFactoryDefinition,JMSConnectionFactoryDefinitions,JMSDestinationDefinition,JMSDestinationDefinitions
From javax.mail:- MailSessionDefinition,MailSessionDefinitions
From javax.persistence:- PersistenceContext,PersistenceContexts,PersistenceUnit,PersistenceUnits
From javax.resource:- AdministeredObjectDefinition,AdministeredObjectDefinitions,ConnectionFactoryDefinition,ConnectionFactoryDefinitions


**Security**:- Security is the science of keeping sensitive information in the hands of authorized users. On the Web, this boils down to four important issues:

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

*HTTP Authentication*:- HTTP protocol provides built-in authentication support—called basic authentication—based on a simple challenge/response, username/password model. With this technique, the web server maintains a database of usernames and passwords and identifies certain resources (files, directories, servlets, etc.) as protected. When a user requests access to a protected resource, the server responds with a request for the client's username and password. At this point, the browser usually pops up a dialog box where the user enters the information, and that input is sent back to the server as part of a second authorized request. If the submitted username and password match the information in the server's database, access is granted. The whole authentication process is handled by the server itself.

- Three types of authentication:-
    1. `Basic authantication` causes the browser to display a dialog box that requests a username and a password.then,when the user enters a username and password,it sends this data as a plain text to the server so the server can attempt to authorize the user.since you don't have to code a form for this type of authentication,it is easy to implement.However,you can't control the appearance of this dialog box.
    Basic authentication alone is very weak. It provides no confidentiality, no integrity, and only the most basic authentication. The problem is that passwords are transmitted over the network, thinly disguised by a well-known and easily reversed Base64 encoding. Anyone monitoring the TCP/IP data stream has full and immediate access to all the information being exchanged, including the username and password, unless there is additional SSL encryption employed.Plus, passwords are often stored on the server in clear text, making them vulnerable to anyone cracking into the server's filesystem. While it's certainly better than nothing, sites that rely exclusively on basic authentication cannot be considered really secure.
    2. `Digest authentication` is a variation on the basic authentication scheme. Instead of transmitting a password over the network directly, a digest of the password is used instead. The digest is produced by taking a hash (using the very secure MD5 encryption algorithm) of the username, password, URI, HTTP request method, and a randomly generated nonce value provided by the server.Uses MD5 algorithm.
    Both sides of the transaction know the password and use it to compute digests. If the digests match, access is granted. Transactions are thus somewhat more secure than they would be otherwise because digests are valid for only a single URI request and nonce value. The server, however, must still maintain a database of the original passwords. And, as of this writing, digest authentication is not supported by very many browsers.
    3. `Form` allows programmer esign choice of form page for gathering credentials.

`Configuring HTTP Authentication`:- In versions of the Servlet API before 2.2, the technique for configuring authentication varied depending on the server. Beginning with API 2.2, the technique has been standardized and now configuration of security policies can be accomplished in a portable manner using the web.xml deployment descriptor.

Role-based authentication - Using tags in the web application deployment descriptor, security constraints can be set up to indicate that certain pages in the web application are to be accessed only by users with certain credentials. Servlets use role-based authorization to manage access. With this model, access permissions are granted to an abstract entity called a security role , and access is allowed only to users or groups of users who are part of that given role.

*Form-Based Authentication*:- Servlets can also perform authentication without relying on HTTP authentication, by using HTML forms instead. Using this technique allows users to enter your site through a well-designed, descriptive and friendly login page.

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


**SSL(secure connection)** - To prevent others from reading data that is transmitted over the Internet,you can use the `Secure Sockets Layer(SSL)`.This is the protocol that lets you transfer data between the server and client over a secure connection.

To determine if you're transmitting data over a secure connection,you can read the URL.If it starts with https rather than http,then you're transmitting data over a secure connection.In addition, a small lock icon appears in the lower right of the browser when you're using a secure connection.
With a regular HTTP connection,all data is sent as unencrypted plain text.As a result,if a hacker intercepts this data,it is easy to read.With secure connection,though,all data is encrypted before it's transferred between the client and server.Although a hacker can still intercept this data,he won't be able to read it unless he break encryption code.


`TLS`:- Transport Layer Security is another protocol that's used for working with secure connections.It is more advanced than SSL, but works similarly.

Due to the time it takes to encrypt and decrypt the data that's sent across a secure connection,secure connections are noticeably slower than regular HTTP connections.As a result,you usually use secure connections only when your application passes sensitive data between client & server.

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


**Listeners**:- Starting with servlet 2.3 Specification,you can add a listenr to a web application.For example,you can create a listener class that contains code that's executed when your web app starts or you can create a listener class that contains code that's executed every time a user starts a new session.

A `listener` is a class that listens for various events that can occur during the lifecycle of a web application and provides methods that are executed when those events occur.
Used in configuring profiles e.g dev,prod.


**Filters**:- Starting with servlet 2.3 specification, you can add a filter to your web application.Filters are Java components that allow on the fly transformations of payload and header information in both the request into a resource and the response from a resource.

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


Loading Servlets, Context Listeners, and Filters

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



### JSP

JSPs are Web pages coded with an extended HTML that makes it possible to embed Java code in a Web page. JSPs can call custom Java classes, called taglibs, using HTML-like tags.
`JavaServer Pages (JSPs)` are a Sun Microsystems specification for combining Java with HTML to provide dynamic content for Web pages. When you create dynamic content, JSPs are more convenient to write than HTTP servlets because they allow you to embed Java code directly into your HTML pages, in contrast with HTTP servlets, in which you embed HTML inside Java code.

JavaServer Pages are built on top of servlets.When a JSP is first requested,the JSp engine translates it into a servlet and compiles it.Then,the servlet is run by servlet engine.For subsequent requests,the JSP engine runs the servlet that corresponds to the JSP.

The WebLogic appc compiler `weblogic.appc` generates JSPs and validates descriptors. You can also precompile JSPs into the WEB-INF/classes/ directory or as a JAR file under WEB-INF/lib/ and package the servlet class in the Web archive to avoid compiling in the server. Servlets and JSPs may require additional helper classes to be deployed with the Web application.

Because JSP is part of the J2EE standard, you can deploy JSPs on a variety of platforms,including WebLogic Server. In addition, third-party vendors and application developers can provide JavaBean components and define custom JSP tags that can be referenced from a JSP page to provide dynamic content.

JSPs enable you to separate the dynamic content of a Web page from its presentation. It caters to two different types of developers: HTML developers, who are responsible for the graphical design of the page, and Java developers, who handle the development of software to create the dynamic content
JSP code runs on web server in JSP servlet engines.JSP servlet engine dynamically generates HTML and sends HTML output to client's browser.

When you code a JSP,you can use the methods of the `request object` in your scriplet or expressions.Since you don't have to explicitly create this object when you code JSPs,this object is sometimes referred to as `imlicit request object`.

**JSP Tags**- JSP Tags includes:-

1. Scriplet
2. JSP Expression
3. Comment
4. Declaration
5. Directive


`Scriplet`:- Used to code one or more Java statements that end with senmicolon.
To code a scriptlet that contains one or more Java statements, you use the <% and %> tags.Once the scriplet is executed,the values for parameters are available as variables to the rest of the page.
To get the values of the parameters that are passed to the JSP, you can use the getParameter method of implicit request object named request.

```jsp
<%
string firstName= request.getParameter("firstName");
string firstName= request.getParameter("lastName");
%>
```

`JSP Expressions`: To code an expression that can be converted to a string, you use the <%= and %> tags.If an expression evaluates to a primitive type like an int value or a double value,the JSP will automatically convert the primitive type to a string that represents the value.
If the expression evaluates to an object,the JSP will call the object's toString method to get a string that represents the object.As a result,if you code an expression that evaluates to an object, you  need to make sure that the object has a toString method that returns a String that represents the value.Otherwise,the object will use the toString method of the Object class,which includes the class name and hash code for the object.

```jsp
<td><%=firstName%></td>
<td><%=lastName%></td>
```

NOTE:- When coding a scriplet or an expression,you can use any of the methods of the implicit request object.

`Comments`:- Tells JSP Engine to ignore code.When you code JSP comments,they are not compiled or executed.When you code HTML comments,they are compiled and executed but browser won't display them.When you code Java comments within sciplets,they are not compiled or executed.

```jsp
<!--HTML Comment -->
<%-- <p>jsp comments <%=new Date()%> </p>--%>
<% // User user = new User()%>
```

`JSP Declarations`:- Used to declare instance variables and methods.When a JSP is requested for the first time,one instance of the JSP is created and loaded into memory,and a thread is started that executes Java code in the JSP.For each subsequent request request for JSP,another thread is started that access the one instance of the JSP.When you code variables in scriplets,they are known as local variables, and each thread gets its own copy of each local variable.However,you can also declare instance variables that can be shared between all of threads that are accessing a JSP.To do that,you use JSP declarations.

```jsp
<%! int globalCount = 0; %>
```

`JSP Directive`:- Used for setting conditions that apply to entire JSP.
You can use directive to import classes in a JSP,you use the import attribute of page directive.To code a page directive for importing classes,you code the starting tag and the word page followed by the Import attribute.Within the quotation marks after the equals sign for this attribute,you code the names of the Java classes that you want to import.
You can also use page directive to define other conditions like error handling and content type conditions.

```jsp
<%@ page import="java.util.Date"%>
<%@ page contentType="text/html; charset=UTF-8" page Encoding="UTF-8" %>
```

If you want to include the same block of code in several JSPs, you can store the code in a separate file.Then,you can include the code in that file in a JSP.Files like this are often referred to as *includes*.

```jsp
<%@ include file="/icludes/header.html"%>
--
<%@ include file="/icludes/footer.html"%>
```

```jsp
<jsp:include page="/includes/header.html"/>
```

To include a file at compile-time,you use the include directive.To do that, you code a JSP directive tag.
To include a file at runtime,you use the include action.To do that,you code the jsp:include tag.Within this tag,you set the page attribute to relative path of the include file.
When you include a file at compile-time,the code within the file becomes part of generated servlet.The advantage of this approach is that it allows the servlet engine to return a response to the browser more quickly.However,if you make change to the included file,the change might not be displayed until JSP is modified and recompiled.

If you are certain that the include files won't change often,you use the include directive.If yu want to display information that may change regularly,and you need to guarantee that these cahnges be displayed immediately,you should use include action.


**JSP Tags for JavaBeans**:-

Standard JSP tags for working with JavaBean class reduces amount of Java code in your JSPs.
The standard JSP tags for working with JavaBeans are an older technology that was widely used before JSP 2.0 specification.

All of the JSP tags for working with JavaBeans use XML syntax.

`useBean` tag: It is used to access a bean and if necessary,create a bean from the JavaBean class.After the bean has been created,the `getProperty ` tags display the values of the properties that have been set in the bean.

```jsp
<jsp:useBean id="beanName" class="package.Class" scope="scopeValue"/>
```

The id attribute specifies the name that's used to access the bean,the class attribute specifies the package and class of the bean,and the scope attribute specifies the scope of the bean.
When you code the scope attribute,you can soecify one of four values: page,request,session and application.
The value of the scope attribute specifies the object that stores the bean and that determines how long the bean will be available to the rest of the appliaction.If you don't specify the scope attribute,the scope will be set to "page" by default,which means that bean will only be available to current JSP.

If a bean that matches the attributes specified in useBean tag exists,this tag creates a reference to that object.Otherwise,the useBean tag creates a new Object by calling zero-argument constructor of specified class.

`getProperty & setProperty`:- Once you code a useBean tag to access or create a bean,you can use the getProperty tag to get the values stored in the bean,and you can use the setProperty tag to set the values stored in the bean.
To get the value of a property that's stored in a bean,you code a getProperty tag.The name attribute specifies the name of the bean,so it should match the id attribute of useBean tag.

```jsp
<jsp:getProperty name="beanName" property="propertyName"/>
<jsp:setProperty name="beanName" property="propertyName" value="value"/>
```

To code special characters within an attribute,you can use escape sequences.However, if you enclose an attribute in double quotes,you don't need to use escape sequences for single quotes.Conversely,if you enclose an attribute in single quotes,you don't need to use the escape sequence for double quotes.


*Configuring Java Server Pages (JSPs)* - In order to deploy Java Server Pages (JSP) files, you must place them in the root (or in a subdirectory below the root) of a Web application. You define JSP configuration parameters in subelements of the jsp-descriptor element in the WebLogic-specific deployment descriptor, weblogic.xml. These parameters define the following functionality:

1. Options for the JSP compiler
2. Debugging
3. How often WebLogic Server checks for updated JSPs that need to be recompiled
4. Character encoding


**JSP Expression Language(EL)**:- SExpression Language(EL) was inroduced with JSP 2.0 to reduce the amount of scripting in your applications.
The JSP Expression Language(EL) provides a compact syntax that lets you get data from JavaBeans,maps,arrays and lists that have been stored as attributes of a web application.

`Advantages`:-
1. EL makes it easy to access nested properties.
2. EL lets you access collections such as arrays,maps,lists.
3. EL handles null values better than JSP tags.
4. EL provides functionality that isn't available from standard JSP tags e.g lets you work with HTTP headers,cookies and context initialization parameters.Also lets you perform calculations and comparisons.

```java
User user = new User(firstName,lastName,email);
session.setAttribute("user",user);
```

Standard JSP tags used to access a User object named user stored in session:-

```jsp
<jsp:useBean id="user" scope="session" class="business.User"/>
<table cellspacing="5" cellpadding="5" border="1">
    <tr>
       <td align="right">First name:</td>
       <td><jsp:getProperty name="user" proprty="firstName"/></td>
    </tr>
    <tr>
       <td align="right">Last name:</td>
       <td><jsp:getProperty name="user" proprty="lastName"/></td>
    </tr>
    <tr>
       <td align="right">Email:</td>
       <td><jsp:getProperty name="user" proprty="email"/></td>
    </tr>
</table>
```

JSP that uses EL to access a User object named user stored in session:-

```jsp
<table cellspacing="5" cellpadding="5" border="1">
    <tr>
       <td align="right">First name:</td>
       <td>{user.firstName}</td>
    </tr>
    <tr>
       <td align="right">Last name:</td>
       <td>{user.lastName}</td>
    </tr>
    <tr>
       <td align="right">Email:</td>
       <td>{user.email}</td>
    </tr>
</table>
```

Whenever you use EL,you begin by coding a dollar sign($) followed by an opening brackets({) and a closing bracket(}).Then you code the expression within the braces.

```jsp
${attribute}
```

NB:- You don't have to specify the scope when you use EL.Instead,EL automatically searches through all scopes starting with smallets scope(page scope) and moving towards largest scope(application scope).
The sequence of scpes that Java searches to find the attribute:-
1. page - The bean is stored in the implicit PageContext object.
2. request - The bean is stored in the HttpServletRequest object.
3. session - The bean is stored in the HttpSession object.
4. application - The bean is stored in the ServletContext object.

EL use the dot operator to specify the property of a JavaBean going to be displayed.The code on the left operator must specify a JavaBean or a map, and the code to the right of the operator must specify a JavaBean property or a map key.

```jsp
${attribute.property}
```

`Scope`:- Since Java automaatically searches through the scope objects when you use EL,you typically don't need to use the implicit EL objects for specifying scope.However,if you have a naming conflict,you may need to use them.
When you work with these objects,you should be aware that they are all maps.As a result,you can use the dot operator to specify a key when you want to return the object for that key.
The implicit EL objects for specifying scope incldes:-
1. page - pageScope
2. request - requestScope
3. sessioon - sessionScope
4. application - applicationScope

```jsp
${scope.attribute.property}
```

```jsp
<p>Hello ${scope.sessionScope.firstName}</p>
```

`[] operator`:- Although this operator can be used to work with JavaBeans and maps, it is commonly used to work with arrays and lists.

```jsp
${attribute["propertyKeyOrIndex"]}
```

**JSP Standard Tag Library**:- The JSP Standard Tag Library(JSTL) provides tags for common tasks that need to be performed in JSPs.
Before you can use JSTL tags within JSP,you must code a taglib directive to specify the URI and prefix for the JSTL library.

```jsp
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
```


**Request a JSP**:- After you code a JSP, you need to be able to request it.That way, you can view it in browser.

*Request with HTTP Get method*:-

`HTML form` - When you use this technique,you code the action attribute of form to provide a path and filename that point to this JSP.You can use the Method attribute to specify the HTTP method that's used for request.By default Get method is used in Form tag.
When you use Get method to request JSP from another page,any parameters that are passed to the JSP will be displayed in browser's URL address.

```jsp
<form action="email_entry.jsp" mthod="get">
```

`Using a tag` - When you use an a tag,it always uses te HTTP Get method,and you can append parameters to the end of the URL.

```jsp
<a href="email.jsp?name=Colllo&email=demo@gmail"> Email </a>
```

`Using URL` - You can request JSP by entering its URL into a browser.

```http
http://localhost:8080/email.jsp?name=Collo
```

*Request with HTTP Post* -


**JSP errors**:- As you develop JSPs,you will encounter errors.
There are two common errors that you will encounter when working with JSPs.HTTP Status 404 means server received the HTTP request but couldn't find requested resource.
HTTP Status 500 means that server received request and ound resource but couldn't fill the request.This usually means that JSP engine wasn't able to compile JSP due to coding error in JSP.



--------------------


## JSF



-------------------



## Webservlet and Spring MVC

The Web-Servlet module contains Spring’s model-view-controller (MVC) implementation for web applications. Spring’s MVC framework provides a clean separation between domain model code and web forms, and integrates with all the other features of the Spring Framework.
Used to develop `web applications` and `distributed applications`.

Spring Web MVC is the original web framework built on the Servlet API and has been included in the Spring Framework from the very beginning.Servlets and JSP can develop web apps but has alot of boilerplate code and mixing of business logic and presentation logic.

Spring MVC simplifies web development with its separation of concern and robust and scalable capabilities.It provides a variety of annotations that simplify the development of web applications by allowing developers to define behavior and configurations directly in their code.

Parallel to Spring Web MVC, Spring Framework 5.0 introduced a reactive-stack web framework, `Spring WebFlux`,which is also based on its source module (spring-webflux).

The `Spring Web model-view-controller (MVC)` framework is designed around a `DispatcherServlet` that dispatches requests to handlers, with configurable handler mappings, view resolution, locale, timezone and theme resolution as well as support for uploading files. The default handler is based on the @Controller and @RequestMapping annotations, offering a wide range of flexible handling methods.With the introduction of Spring 3.0, the @Controller mechanism also allows you to create RESTful Web sites and applications, through the @PathVariable annotation and other features.

Spring’s view resolution is extremely flexible. A `Controller` is typically responsible for preparing a model `Map` with data and selecting a view name but it can also write directly to the response stream and complete the request. View name resolution is highly configurable through file extension or Accept header content type negotiation, through bean names, a properties file, or even a custom `ViewResolver` implementation. The model (the M in MVC) is a Map interface, which allows for the complete abstraction of the view technology. You can integrate directly with template based rendering technologies such as JSP, Velocity and Freemarker, or directly generate XML, JSON, Atom, and many other types of content. The model Map is simply transformed into an appropriate format, such as JSP request attributes, a Velocity template model.

`Spring Web Flow` - Spring Web Flow (SWF) aims to be the best solution for the management of web application page flow.SWF integrates with existing frameworks like Spring MVC and JSF, in both Servlet and Portlet environments. If you have a business process (or processes) that would benefit from a conversational model as opposed to a purely request model, then SWF may be the solution.
SWF allows you to capture logical page flows as self-contained modules that are reusable in different situations, and as such is ideal for building web application modules that guide the user through controlled navigations that drive business processes.

**Features of Spring Web MVC**:- Spring’s web module includes many unique web support features:

1. Clear separation of role: In Spring MVC, each role like- controller, validator, command object, form object, model object, DispatcherServlet, handler mapping, view resolver etc. is fulfilled by a specialized object.
2. Reusability: Spring MVC promotes reusable business code that reduces the need for duplication. We can use existing business objects as command or form objects instead of copying them to extend a particular framework base class.
3. Flexible Model Transfer: Spring MVC Model transfer supports easy integration with other view technologies as well.
4. Customizable binding and validation: In Spring MVC, we can to custom binding between Requests and Controllers.Even validation can be done on non-String values as well.
5. JSP form tag library: From Spring 2.0, there is a powerful JSP form tag library that makes writing forms in JSP pages much easier.
6. Customizable locale, time zone and theme resolution:Spring MVC supports customization in locale, timezone etc.
7. Powerful and straightforward configuration of both framework and application classes as JavaBeans.This configuration capability includes easy referencing across contexts, such as from web controllers to business objects and validators.


**The Benefits of Spring MVC**:-

When writing a Model 2 application without a framework, it is your responsibility to write a dispatcher servlet and controller classes. Your dispatcher servlet must be capable of doing these things:

1. Determine from the URI what action to invoke.
2. Instantiate the correct controller class.
3. Populate a form bean with request parameter values.
4. Call the correct method in the controller object.
5. Forward control to a view (JSP page).

Spring MVC is an MVC framework that employs a dispatcher servlet that invokes methods in controllers and forwards control to a view. This is the first benefit of using Spring MVC: You don’t need to write your own dispatcher servlet. Here is the list of features that Spring MVC is equipped with to make development more rapid.

1. Spring MVC provides a dispatcher servlet, saving your writing one.
2. Spring MVC employs an XML-based configuration file that you can edit without recompiling the application.
3. Spring MVC instantiates controller classes and populates beans with user inputs.
4. Spring MVC automatically binds user input with the correct type. For example, Spring MVC can automatically parse a string and sets a property of type float or decimal.
5. Spring MVC validates user input and redirects the user back to the input form if validation failed. Input validation is optional and can be done programmatically or declaratively. On top of that, Spring MVC provides built-in validators for most of the tasks you may encounter when building a web application.
6. Spring MVC is part of the Spring framework. You get everything Spring has to offer.
7. Spring MVC supports internationalization and localization. This means, you can display messages in multiple languages depending on the user locale.
8. Spring MVC supports multiple view technologies. Most of the time you’ll be using JSP, but other technologies are supported, including Velocity and FreeMarker.


### Web Applications

Using servlets and JSPs we can develop web apps but dev has to write lots of boiler-plate codes.Boiler-plate code is code common for all apps,i.e

1. converting HTTP request params into java bean.i.e getting email = req.getParameter("email") from HttpRequest ,then converting it into Java Object i.e ,setting fields with req params customer.setMail("email").Suppose in a project there is 100 servlets then we'll need to prepare 100 java Beans.
2. There's mixing of business logic and presentation logics.In servlet class you write both business and presentation logics,hence changing business or presentation logic is difficult.

To overcome those problems,Spring MVC was introduced.
- Spring MVC helps to remove boilerplate code with help of FrontController(DispatcherServlet).
- It separates business logic from presentation logics.
- Its one of Gang of Four design Pattern.It includes 3 design patterns: trategy,Observer and Composite.

The entry point of every Spring web application is the DispatcherServlet.

- **MVC Architecture**:- Has 5 components - 
    1. `FrontController(DispatcherServlet)`-Spring MVC is designed around the front controller pattern where a central Servlet, the DispatcherServlet, provides a shared algorithm for request processing, while actual work is performed by configurable delegate components. This model is flexible and supports diverse workflows.
    Takes care common processing logic that should be applied to all request coming into applications.It will bind URL patterns i.e *.htm,*.web,*.mvc,*.do,*.action..etc
    The DispatcherServlet needs to be declared and mapped according to the Servlet specification by using Java configuration or in web.xml. In turn, the DispatcherServlet uses Spring configuration to discover the delegate components it needs for request mapping, view resolution, exception handling, and more.
    2. `Handler Mapping(RequestMapping)`-Helps in identifying the controller to be used for a request.Based on URI,Handler Mapping will return controller name then DispatcherServlet will execute the controller.
    3. `Controller`-Responsible for processing logics to handle the request.Always gives logical name as response to DispatcherServlet.The DispatcherServlet will send logical name to ViewResolver.
    4. `ViewResolver`-Converts logical name into physical names.i.e fail---fail.jsp,orders---order.jsp.
    5. `View`-Views is rendering/displaying the data.i.e what format to display data.Different views are available ie pdf,webpage,excel.We can change one view to another in view layer. i.e   Jsp----------->Thymeleaf


```
                 1                           2
  CLIENT-------------->DispatcherServlet----------------->HandlerMapping
 |                        |   |   |          3
 |                        |   |   |----------><---------------Controller
 |                        |   |              4
 |   Http Response        |   |------------><--------------ViewRessolver
  -------<-------------VIEW
```


The first stop in the request’s travels is at Spring’s DispatcherServlet. Like most Java-based web frameworks, Spring MVC funnels requests through a single front controller servlet. A front controller is a common web application pattern where a single servlet delegates responsibility for a request to other components of an application to perform actual processing. In the case of Spring MVC, DispatcherServlet is the front controller.

The DispatcherServlet’s job is to send the request on to a Spring MVC controller.A controller is a Spring component that processes the request. But a typical application may have several controllers, and DispatcherServlet needs some help deciding which controller to send the request to. So the DispatcherServlet consults one or more handler mappings to figure out where the request’s next stop will be. The handler mapping pays particular attention to the URL carried by the request when making its decision.
Once an appropriate controller has been chosen, DispatcherServlet sends the request to the chosen controller. At the controller, the request drops off its payload (the information submitted by the user) and patiently waits while the controller processes that information. (Actually, a well-designed controller performs little or no processing itself and instead delegates responsibility for the business logic to one or more service objects.)
The logic performed by a controller often results in some information that needs to be carried back to the user and displayed in the browser. This information is referred to as the model. But sending raw information back to the user isn’t sufficient—it needs to be formatted in a user-friendly format, typically HTML. For that, the information needs to be given to a view, typically a JavaServer Page (JSP).
One of the last things a controller does is package up the model data and identify the name of a view that should render the output. It then sends the request, along with the model and view name, back to the DispatcherServlet.

So that the controller doesn’t get coupled to a particular view, the view name passed back to DispatcherServlet doesn’t directly identify a specific JSP. It doesn’t even necessarily suggest that the view is a JSP. Instead, it only carries a logical name that will be used to look up the actual view that will produce the result. The DispatcherServlet consults a view resolver to map the logical view name to a specific view implementation, which may or may not be a JSP.

Now that DispatcherServlet knows which view will render the result, the request’s job is almost over. Its final stop is at the view implementation, typically a JSP, where it delivers the model data. The request’s job is finally done. The view will use the model data to render output that will be carried back to the client by the response object.


**DISPATCHERSERVLET**: Spring’s web MVC framework is, like many other web MVC frameworks, request-driven, designed around a central Servlet that dispatches requests to controllers and offers other functionality that facilitates the development of web applications. Spring’s `DispatcherServlet` however, does more than just that. It is completely integrated with the Spring IoC container and as such allows you to use every other feature that Spring has.
DispatcherServlet is the centerpiece of Spring MVC. It’s where the request first hits the framework, and it’s responsible for routing the request through all the other components.

The `DispatcherServlet` is an actual Servlet (it inherits from the HttpServlet base class), and as such is declared in the web.xml of your web application. You need to map requests that you want the DispatcherServlet to handle, by using a URL mapping in the same web.xml file. This is standard Java EE Servlet configuration; the following example shows such a DispatcherServlet declaration and mapping:

```xml
<web-app>
    <servlet>
        <servlet-name>example</servlet-name>
        <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
        <load-on-startup>1</load-on-startup>
    </servlet>
    <servlet-mapping>
        <servlet-name>example</servlet-name>
        <url-pattern>/example/*</url-pattern>
    </servlet-mapping>
</web-app>
```

In turn, the DispatcherServlet uses Spring configuration to discover the delegate components it needs for request mapping, view resolution,exception handling, and more.

In a Servlet 3.0+ environment, you also have the option of configuring the Servlet container programmatically. Below is the code based equivalent of the above web.xml example:

```java
public class MyWebApplicationInitializer implements WebApplicationInitializer {
    @Override
    public void onStartup(ServletContext container) {
        ServletRegistration.Dynamic registration = container.addServlet("dispatcher", new DispatcherServlet());
        registration.setLoadOnStartup(1);
        registration.addMapping("/example/*");
    }
}
```

`WebApplicationInitializer` is an interface provided by Spring MVC that ensures your code-based configuration is detected and automatically used to initialize any Servlet 3 container. An abstract base class implementation of this interace named `AbstractDispatcherServletInitializer` makes it even easier to register the DispatcherServlet by simply specifying its servlet mapping.

The above is only the first step in setting up Spring Web MVC. You now need to configure the various beans used by the Spring Web MVC framework (over and above the DispatcherServlet itself).
In the Web MVC framework, each DispatcherServlet has its own WebApplicationContext, which inherits all the beans already defined in the root WebApplicationContext. These inherited beans can be overridden in the servlet-specific scope, and you can define new scope-specific beans local to a given Servlet instance.

DispatcherServlet   <-------------------------------->WebApplicationContext   <-------------------------------------------------------->WebApplicationContext(s)
(awaiting incoming HttpServletRequests)       (contains controllers,view resolvers,locale resolvers and other web-related beans)         (contains middle-tier services,datasources)

Upon initialization of a DispatcherServlet, Spring MVC looks for a file named `[servlet-name]-servlet.xml` in the WEB-INF directory of your web application and creates the beans defined there, overriding the definitions of any beans defined with the same name in the global scope.

The WebApplicationContext is an extension of the plain ApplicationContext that has some extra features necessary for web applications. It differs from a normal ApplicationContext in that it is capable of resolving themes and that it knows which Servlet it is associated with (by having a link to the ServletContext). The WebApplicationContext is bound in the ServletContext, and by using static methods on the RequestContextUtils class you can always look up the WebApplicationContext if you need access to it.





Spring MVC web application can have more than one DispatcherServlets.Each DispatcherServlet has to operate in its own namespace. It has to load its own ApplicationContext with mappings, handlers, etc.Only the root application context will be shared among these Servlets.

`Spring MVC DispatcherServlet` - Spring MVC comes with a dispatcher servlet that you can instantly use. Its fully qualified name is org.springframework.web.servlet.DispatcherServlet.
Configuration essentials:
- web.xml registers DispatcherServlet in legacy setups.
- Java-based config uses @EnableWebMvc and a WebMvcConfigurer implementation.

To use this servlet, you need to configure it in your deployment descriptor (web.xml file) using the servlet and servlet-mapping elements, like this.

```xml
<web-app>
 <listener>
  <listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>
 </listener>
 <context-param>
  <param-name>contextConfigLocation</param-name>
  <!--<param-value>/WEB-INF/applicationContext.xml</param-value> -->
  <param-value>classpath:/applicationContext.xml</param-value> 
 </context-param>

 <servlet>
  <servlet-name>dispatcher</servlet-name>
  <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
  <load-on-startup>1</load-on-startup>
 </servlet>

 <servlet-mapping>
  <servlet-name>app</servlet-name>
   <!-- map htm,mvc,do requests to the DispatcherServlet --> 
  <url-pattern>/app/*.htm,*.mvc,*.do</url-pattern>

  <!-- map all requests to the DispatcherServlet -->
   <url-pattern>/</url-pattern>
 </servlet-mapping>
</web-app>
```

The load-on-startup element under <servlet> is optional. If it is present, it will load the servlet and call its init method when the application is started. Without the load-on-startup element, the servlet will be loaded when it is first requested.
By itself the dispatcher servlet will use many default components that come with Spring MVC. In addition, at initialization it will look for a configuration file in the WEB-INF directory of the application. The name of the XML file must conform to this pattern `servletName-servlet.xml` where servletName is the name given to the Spring dispatcher servlet in the deployment descriptor. If you have given the servlet the name dispatcher, you will need to have a dispatcher-servlet.xml file under the WEB-INF directory of your application directory.

However, you can place your Spring MVC configuration file anywhere within your application directory as long as you tell the dispatcher servlet where to find it. You do this by using an init-param element under the servlet declaration. The init-param element would have a param-name element that has the value contextConfigLocation. It would also have a param-value element containing the path to your configuration file. For example, you can change the default name and location of the configuration file to /WEB-INF/config/simple-config.xml by using this init-param element.

```xml
<servlet>
   <servlet-name>springmvc</servlet-name>
   <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>

   <init-param>
      <param-name>contextConfigLocation</param-name>
      <param-value>/WEB-INF/config/simple-config.xml</param-value>
   </init-param>
   <load-on-startup>1</load-on-startup>
</servlet>
```

When a request hits i.e <http://localhost:8080/login.htm>,a new Servlet container is created and creates an object of DispatcherSevlet class.DispatcherServlet always looks for <servlet-name>-servlet.xml file e.g dispatcher-servlet.xml and creates a spring container.In spring container there is controllers,viewresolver,handlermapping beans.

`Java Config`:- When web container starts,it will look for web.xml,if not found it looks for ServletContainerInitializer.This will internally call SpringServletContainerInitializer which internally calls WebApplicationInitializer then AbstractContextLoaderListener then AbstractDispatcherServletInitializer then AbstractAnnotationConfigDispatcherServletInitializer.

```java
import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

public class SpittrWebAppInitializer extends AbstractAnnotationConfigDispatcherServletInitializer {
   @Override
   protected String[] getServletMappings() {
      return new String[] { "/" };
   }
   @Override
   protected Class<?>[] getRootConfigClasses() {
      return new Class<?>[] { RootConfig.class };
   }

   @Override
   protected Class<?>[] getServletConfigClasses() {
      return new Class<?>[] { WebConfig.class };
   }
}
```

The first method, getServletMappings(), identifies one or more paths that DispatcherServlet will be mapped to. In this case, it’s mapped to /, indicating that it will be the application’s default servlet. It will handle all requests coming into the application.
Under the covers, AbstractAnnotationConfigDispatcherServletInitializer creates both a DispatcherServlet and a ContextLoaderListener. The @Configuration classes returned from getServletConfigClasses() will define beans for DispatcherServlet’s application context. Meanwhile, the @Configuration class’s returned getRootConfigClasses() will be used to configure the application context created by ContextLoaderListener.
In this case, your root configuration is defined in RootConfig, whereas DispatcherServlet’s configuration is declared in WebConfig.

`ENABLING SPRING MVC` - Just as there are several ways of configuring DispatcherServlet, there’s more than one way to enable Spring MVC components. Historically, Spring has been configured using XML, and there’s an <mvc:annotation-driven> element that you can use to enable annotation-driven Spring MVC.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:mvc="http://www.springframework.org/schema/mvc"
       xsi:schemaLocation="
           http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
           http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context.xsd
           http://www.springframework.org/schema/mvc http://www.springframework.org/schema/mvc/spring-mvc.xsd">

    <context:component-scan base-package="com.kipcollo.controller"/>

    <mvc:annotation-driven/>

    <bean class="org.springframework.web.servlet.view.InternalResourceViewResolver">
        <property name="prefix" value="/WEB-INF/jsp/"/>
        <property name="suffix" value=".jsp"/>
    </bean>

</beans>
```

```java
@Configuration
@EnableWebMvc
public class WebConfig {
}
```

This will work, and it will enable Spring MVC. But it leaves a lot to be desired:
1. No view resolver is configured. As such, Spring will default to using BeanNameViewResolver, a view resolver that resolves views by looking for beans whose
ID matches the view name and whose class implements the View interface.
2. Component-scanning isn’t enabled. Consequently, the only way Spring will find any controllers is if you declare them explicitly in the configuration.
3. As it is, DispatcherServlet is mapped as the default servlet for the application and will handle all requests, including requests for static resources, such as images and stylesheets (which is probably not what you want in most cases).
Therefore, you need to add a bit more configuration in WebConfig on top of this bare minimum Spring MVC configuration to make it useful.

```java
@Configuration
@EnableWebMvc
@ComponentScan("spitter.web")
public class WebConfig extends WebMvcConfigurerAdapter{

   @Bean
   public ViewResolver viewResolver() {
   InternalResourceViewResolver resolver = new InternalResourceViewResolver();
   resolver.setPrefix("/WEB-INF/views/");
   resolver.setSuffix(".jsp");
   resolver.setExposeContextBeansAsAttributes(true);
   return resolver;
}

   @Override
   public void configureDefaultServletHandling(
      DefaultServletHandlerConfigurer configurer) {
   configurer.enable();
   }
}
```

WebConfig class extends WebMvcConfigurerAdapter and overrides its configureDefaultServletHandling() method. By calling enable() on the given
DefaultServletHandlerConfigurer, you’re asking DispatcherServlet to forward requests for static resources to the servlet container’s default servlet and not to try to
handle them itself.

Applications can declare the infrastructure beans listed in Special Bean Types that are required to process requests. The DispatcherServlet checks the WebApplicationContext for each special bean. If there are no matching bean types, it falls back on the default types listed in DispatcherServlet.properties.

In most cases, the MVC Config is the best starting point. It declares the required beans in either Java or XML and provides a higher-level configuration callback API to customize it.Spring Boot relies on the MVC Java configuration to configure Spring MVC and provides many extra convenient options.
In Spring container there is:controllers,viewressolver,handler mapping.
The following example of the Java configuration registers and initializes the DispatcherServlet, which is auto-detected by the Servlet container

```java
public class MyWebApplicationInitializer implements WebApplicationInitializer {

 @Override
 public void onStartup(ServletContext servletContext) {

  // Load Spring web application configuration
  AnnotationConfigWebApplicationContext context = new AnnotationConfigWebApplicationContext();
  context.register(AppConfig.class);

  // Create and register the DispatcherServlet
  DispatcherServlet servlet = new DispatcherServlet(context);
  ServletRegistration.Dynamic registration = servletContext.addServlet("app", servlet);
  registration.setLoadOnStartup(1);
  registration.addMapping("/app/*");
 }
}
```

Spring Boot follows a different initialization sequence. Rather than hooking into the lifecycle of the Servlet container, Spring Boot uses Spring configuration to bootstrap itself and the embedded Servlet container. Filter and Servlet declarations are detected in Spring configuration and registered with the Servlet container.

Child container --Spring MVC related bean like Controller,RequestMapping classes,ViewResolver are created in child container.Will be created by DispatcherServlet with help of xml or Java config.
Container parent --Non-MVC classes e.g Service,DAO,Transaction will be created in Parent container.ContextLoaderListener is responsible for creating parent container with help of `applicationContext.xml`
If we create independent container then they can't share object,that's why we should go for hierarchial containers.If there are any non-MVC classes present in classpath,DispatcherServlet looks for ParentContainer,if it is created then only child container will be created.

`Context Hierarchy`:- DispatcherServlet expects a WebApplicationContext (an extension of a plain ApplicationContext) for its own configuration. WebApplicationContext has a link to the ServletContext and the Servlet with which it is associated. It is also bound to the ServletContext such that applications can use static methods on RequestContextUtils to look up the WebApplicationContext if they need access to it.

For many applications, having a single WebApplicationContext is simple and suffices. It is also possible to have a context hierarchy where one root WebApplicationContext is shared across multiple DispatcherServlet (or other Servlet) instances, each with its own child WebApplicationContext configuration.

The root WebApplicationContext typically contains infrastructure beans, such as data repositories and business services that need to be shared across multiple Servlet instances. Those beans are effectively inherited and can be overridden (that is, re-declared) in the Servlet-specific child WebApplicationContext, which typically contains beans local to the given Servlet.
When DispatcherServlet starts up, it creates a Spring application context and starts loading it with beans declared in the configuration files or classes that it’s given. With the getServletConfigClasses() method, you’ve asked that DispatcherServlet load its application context with beans defined in the WebConfig configuration class (using Java configuration).

WebApplicationContext is the child of plain ApplicationContext. It is used in web applications. It provides features to deal with web-related components like-controllers, view resolvers etc.A Web Application can have multiple WebApplicationContext to handle requests.Each DispatcherServlet is associated with one WebApplicationContext.
Creating a spring container.

```java
//Normal Container creation - Standalone apps:- Creating a container for standalone application:
ApplicationContext context= new XMLApplicationContext();
ApplicationContext context= new AnnotationConfigApplicationContext();
ApplicationContext context= new ClassPathXmlApplicationContext();

//Web Container Creation
ApplicationContext context= new XMLWebApplicationContext();
AnnotationConfigWebApplicationContext context = new AnnotationConfigWebApplicationContext();
```

But in Spring web applications, there’s often another application context. This other application context is created by ContextLoaderListener.Whereas DispatcherServlet is expected to load beans containing web components such as controllers, view resolvers, and handler mappings, ContextLoaderListener is expected to load the other beans in your application. These beans are typically the middle-tier and data-tier components that drive the back end of the application.
In case we have enabled annotations in Spring config file, it also scans the packages and configures any bean annotated with @Component, @Controller, @Repository or @Service annotations.
ContextLoaderListener is a listener to start up and shut down Spring’s root WebApplicationContext. ContextLoaderListener links the lifecycle of ApplicationContext to the lifecycle of the ServletContext. It automates the creation of ApplicationContext. It can also be used to define shared beans used across different spring contexts.

If an application context hierarchy is not required, applications can return all configuration through getRootConfigClasses() and null from getServletConfigClasses().
If an application context hierarchy is not required, applications may configure a “root” context only and leave the contextConfigLocation Servlet parameter empty.

```xml
<!--applicationContext.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="
           http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
           http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context.xsd">

    <context:component-scan base-package="com.kipcollo.service"/>
    <context:annotation-config/>

</beans>
```

```java
@Configuration
@ComponentScan(basePackages={"com.kipcollo.service"},excludeFilters={@Filter(type=FilterType.ANNOTATION, value=EnableWebMvc.class)})
public class RootConfig {
}
```


`Special Bean Types`:- The DispatcherServlet delegates to special beans to process requests and render the appropriate responses. By “special beans” we mean Spring-managed Object instances that implement framework contracts. Those usually come with built-in contracts, but you can customize their properties and extend or replace them.

1. HandlerMapping - Map a request to a handler along with a list of interceptors for pre- and post-processing. The mapping is based on some criteria, the details of which vary by HandlerMapping implementation.The two main HandlerMapping implementations are RequestMappingHandlerMapping (which supports @RequestMapping annotated methods) and SimpleUrlHandlerMapping (which maintains explicit registrations of URI path patterns to handlers).
2. HandlerAdapter - Help the DispatcherServlet to invoke a handler mapped to a request, regardless of how the handler is actually invoked. For example, invoking an annotated controller requires resolving annotations. The main purpose of a HandlerAdapter is to shield the DispatcherServlet from such details.
3. HandlerExceptionResolver- Strategy to resolve exceptions, possibly mapping them to handlers, to HTML error views, or other targets. See Exceptions.
4. ViewResolver - Resolve logical String-based view names returned from a handler to an actual View with which to render to the response. See View Resolution and View Technologies.
5. LocaleResolver, LocaleContextResolver - Resolve the Locale a client is using and possibly their time zone, in order to be able to offer internationalized views. See Locale.
6. ThemeResolver - Resolve themes your web application can use — for example, to offer personalized layouts. See Themes.
7. MultipartResolver - Abstraction for parsing a multi-part request (for example, browser form file upload) with the help of some multipart parsing library. See Multipart Resolver.
8. FlashMapManager - Store and retrieve the “input” and the “output” FlashMap that can be used to pass attributes from one request to another, usually across a redirect.


**HANDLER MAPPING**:- The mechanism that decides which controller method handles which URL.
In previous versions of Spring, users were required to define one or more HandlerMapping beans in the web application context to map incoming web requests to appropriate handlers.With the introduction of annotated controllers, you generally don’t need to do that because the RequestMappingHandlerMapping automatically looks for `@RequestMapping` annotations on all `@Controller` beans.


`Using xml`

```xml
<bean id="userController" class="com.example.UserController"/>

<bean class="org.springframework.web.servlet.handler.SimpleUrlHandlerMapping">
    <property name="mappings">
        <props>
            <prop key="/user/list">userController</prop>
            <prop key="/user/add">userController</prop>
        </props>
    </property>
</bean>
```

`Using Annotatins`:- In Spring MVC, we use @RequestMapping annotation to map a web request to either a class or a handler method.
In @RequestMapping we can specify the path of URL as well as HTTP method like- GET, PUT, POST etc.@RequestMapping also supports specifying HTTP Headers as attributes.We can also map different media types produced by a controller in @RequestMapping. We use HTTP Header Accepts for this purpose.
You can use the @RequestMapping annotation to map requests to controllers methods. It has various attributes to match by URL, HTTP method, request parameters, headers, and media types. You can use it at the class level to express shared mappings or at the method level to narrow down to a specific endpoint mapping.

All modern annotations:
1. @RequestMapping
2. @GetMapping
3. @PostMapping
4. @PutMapping
5. @DeleteMapping
6. @PatchMapping

- @RequestMapping - Annotation for mapping web requests onto methods in request-handling classes with flexible method signatures.Both Spring MVC and Spring WebFlux support this annotation.Can be used both at the class and at the method level.Cannot be used in conjunction with other @RequestMapping annotations that are declared on the same element (class, interface, or method)
    1. String[] consumes- Narrows the primary mapping by media types that can be consumed by the mapped handler.
    2. String[] headers - The headers of the mapped request, narrowing the primary mapping.
    3. RequestMethod[] method - The HTTP request methods to map to, narrowing the primary mapping: GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE, TRACE.
    4. String name - Assign a name to this mapping.
    5. String[] params - The parameters of the mapped request, narrowing the primary mapping.
    6. String[] path - The path mapping URIs — for example, "/profile".
    7. String[] produces - Narrows the primary mapping by media types that can be produced by the mapped handler.
    8. String[] value - The path mapping URIs — for example, "/profile".

```java
@Controller
@RequestMapping("/api")//class level
public class Customer {

    @RequestMapping("/home")// Method level
    public String hello(){
        return "home";
    }

    @RequestMapping(value={"/student","/teacher"},//Multiple URI
         method=RequestMethod.GET//HTTP Methods
         produces={MediaType.APPLICATION_XML_VALUE,MediaType.APPLICATION_JSON_VALUE},
         consumes=MediaType.APPLICATION_XML_VALUE)
    public Student getStudent(){
        Student student = new Student(1, "Collins", "Finalist");
        return student;
    }
}
```

```java
@RequestMapping(value = "/home", method = RequestMethod.GET)

@PostMapping(value="/save", consumes="application/json", produces="application/json")
public User save(@RequestBody User user) { }

@RequestMapping(value="/info", method={RequestMethod.GET, RequestMethod.POST},headers = "Accept=application/json")
public String info() { }
```

- @PostMapping - Annotation for mapping HTTP POST requests onto specific handler methods.
- @PutMapping - Annotation for mapping HTTP PUT requests onto specific handler methods.
- @RequestAttribute - Annotation to bind a method parameter to a request attribute.
- @GetMapping - Annotation for mapping HTTP GET requests onto specific handler methods.is a composed annotation that acts as a shortcut for @RequestMapping(method = RequestMethod.GET).
- @DeleteMapping - Annotation for mapping HTTP DELETE requests onto specific handler methods.
- @PatchMapping - Annotation for mapping HTTP PATCH requests onto specific handler methods.


**CONTROLLERS**:- Controllers provide access to the application behavior that you typically define through a service interface. Controllers interpret user input and transform it into a model that is represented to the user by the view. Spring implements a controller in a very abstract way, which enables you to create a wide variety of controllers.
Spring 2.5 introduced an annotation-based programming model for MVC controllers that uses annotations such as @RequestMapping, @RequestParam, @ModelAttribute, and so on. This annotation support is available for both Servlet MVC and Portlet MVC. Controllers implemented in this style do not have to extend specific base classes or implement specific interfaces. Furthermore, they do not usually have direct dependencies on Servlet or Portlet APIs, although you can easily configure access to Servlet or Portlet facilities.

In Spring MVC, controllers are just classes with methods that are annotated with `@Controller` or extends `Controller interface` to declare the kind of requests they’ll handle.A component that handles incoming requests.
There are two ways to write controllers: Either by implementing Controller interface or using annotations.


`Legacy Controller (implements Controller interface)`:- Used before annotations. Mapping was defined in XML, not on the controller class.Controller is an interface in Spring MVC. It receives HttpServletRequest and HttpServletResponse in web app just like an HttpServlet, but it is able to participate in an MVC flow.Controllers are similar to a Struts Action in a Struts based Web application.
Spring recommends that the implementation of Controller interface should be a reusable, thread-safe class, capable of handling multiple HTTP requests throughout the lifecycle of an application.It is preferable to implement Controller by using a JavaBean.Controller interprets user input and transforms it into a model. The model is represented to the user by a view.
Spring implements a controller in a very generic way. This enables us to create a wide variety of controllers.

```java
public interface Controller{
 ModelandView handleRequest(HandleServletRequest req,HandleServletResponse res)
}
```

```java
public class HomeController implements Controller{

   @Override
   ModelandView handleRequest(HandleServletRequest req,HandleServletResponse res){
   ModelandView mav= new ModelandView();
   mav.setViewName("/home")

   return mav;
 }
}

public class UserController extends MultiActionController {

    public ModelAndView list(HttpServletRequest req, HttpServletResponse res) {
        return new ModelAndView("user-list");
    }

    public ModelAndView add(HttpServletRequest req, HttpServletResponse res) {
        return new ModelAndView("user-add");
    }
}
```


`Defining a controller with @Controller`:- The @Controller annotation indicates that a particular class serves the role of a controller. Spring does not require you to extend any controller base class or reference the Servlet API. However, you can still reference Servlet-specific features if you need to.

The @Controller annotation acts as a stereotype for the annotated class, indicating its role. The dispatcher scans such annotated classes for mapped methods and detects @RequestMapping annotations

Classes annotated with the @Controller, handle HTTP requests and return responses. They can contain methods that process input and return view names with model data through ModelAndView objects or String view names.


```java
@Controller
public class HelloWorldController {
    @RequestMapping("/helloWorld")
    public String helloWorld(Model model) {
        model.addAttribute("message", "Hello World!");
        return "helloWorld";
    }
}
```

You can define annotated controller beans explicitly, using a standard Spring bean definition in the dispatcher’s context. However, the @Controller stereotype also allows for autodetection, aligned with Spring general support for detecting component classes in the classpath and auto-registering bean definitions for them.

To enable autodetection of such annotated controllers, you add component scanning to your configuration.Add the controller in the controller subpackage so that it is picked up by the @ComponentScan annotation: Use the spring-context schema as shown in the following XML snippet:

```xml
<context:component-scan base-package="org.springframework.samples.petclinic.web"/>
```



*Defining @RequestMapping handler methods*:- An @RequestMapping handler method can have a very flexible signatures.Most arguments can be used in arbitrary order with the only exception of `BindingResult` arguments.

Note:- Spring 3.1 introduced a new set of support classes for @RequestMapping methods called `RequestMappingHandlerMapping` and `RequestMappingHandlerAdapter` respectively.They are recommended for use and even required to take advantage of new features in Spring MVC 3.1 and going forward. The new support classes are enabled by default from the MVC namespace and with use of the MVC Java config but must be configured explicitly if using neither.

Supported method argument types - The following are the supported method arguments:
1. Request or response objects (Servlet API). Choose any specific request or response type, for example ServletRequest or HttpServletRequest.
2. Session object (Servlet API): of type HttpSession. An argument of this type enforces the presence of a corresponding session. As a consequence, such an argument is never null.
3. java.util.Locale for the current request locale, determined by the most specific locale resolver available, in effect, the configured LocaleResolver in a Servlet environment.
4. @PathVariable annotated parameters for access to URI template variables.
5. org.springframework.http.HttpMethod for the HTTP request method.
6. java.io.OutputStream / java.io.Writer for generating the response’s content. This value is the raw OutputStream/Writer as exposed by the Servlet API.
7. java.security.Principal containing the currently authenticated user.
8. @MatrixVariable annotated parameters for access to name-value pairs located in URI path segments.
9. @RequestParam annotated parameters for access to specific Servlet request parameters. Parameter values are converted to the declared method argument type.




The `Errors` or `BindingResult` parameters have to follow the model object that is being bound immediately as the method signature might have more that one model object and Spring will create a separate BindingResult instance for each of them so the following sample won’t work:

```java
@RequestMapping(method = RequestMethod.POST)
public String processSubmit(@ModelAttribute("pet") Pet pet, Model model, BindingResult result) { ... }
```

Note, that there is a Model parameter in between Pet and BindingResult. To get this working you have to reorder the parameters as follows:

```java
@RequestMapping(method = RequestMethod.POST)
public String processSubmit(@ModelAttribute("pet") Pet pet, BindingResult result, Model model) { ... }
```


`Using @ModelAttribute on a method`:- The @ModelAttribute annotation can be used on methods or on method arguments.
An @ModelAttribute on a method indicates the purpose of that method is to add one or more model attributes. Such methods support the same argument types as @RequestMapping methods but cannot be mapped directly to requests. Instead @ModelAttribute methods in a controller are invoked before @RequestMapping methods, within the same controller.

```java
// Add one attribute
// The return value of the method is added to the model under the name "account"
// You can customize the name via @ModelAttribute("myAccount")
@ModelAttribute
public Account addAccount(@RequestParam String number) {
    return accountManager.findAccount(number);
}

// Add multiple attributes
@ModelAttribute
public void populateModel(@RequestParam String number, Model model) {
    model.addAttribute(accountManager.findAccount(number));
    // add more ...
}
```

@ModelAttribute methods are used to populate the model with commonly needed attributes for example to fill a drop-down with states or with pet types, or to retrieve a command object like Account in order to use it to represent the data on an HTML form.

A controller can have any number of @ModelAttribute methods. All such methods are invoked before @RequestMapping methods of the same controller.@ModelAttribute methods can also be defined in an @ControllerAdvice-annotated class and such methods apply to many controllers.
The @ModelAttribute annotation can be used on @RequestMapping methods as well. In that case the return value of the @RequestMapping method is interpreted as a model attribute rather than as a view name. The view name is derived from view name conventions instead much like for methods returning void.


- *Passing model data to the view*: The method is given a `Model` as a parameter so that it can populate the model with the data list it retrieves.
The Model is essentially a map (that is, a collection of key-value pairs) that will be handed off to the view so that the data can be rendered to the client. When addAttribute() is called without specifying a key, the key is inferred from the type of object being set as the value.

```java
@Controller
@RequestMapping("/students")
public class HomeController{

   @RequestMapping(method=GET)
   public String students(Model model){
      model.addAttribute("key",value)
      return "students";
 }
}
```

Likewise, if you’d prefer to work with a non-Spring type, you can ask for a java.util.Map instead of Model.

```java
public String students(Map model)
```

Now that there’s data in the model,when the view is a JSP, the model data is copied into the request as request attributes.
Therefore, the .jsp file can use JavaServer Pages Standard Tag Library’s (JSTL) <c:forEach> tag to render the list.


- *Accepting request input*: Spring MVC provides several ways that a client can pass data into a controller’s handler method. These include
    1. Query parameters
    2. Form parameters
    3. Path variables

Taking query parameters - Query parameters are a common way to pass information to a controller in a request.Query strings are used to extract the query string data from uri.In query string data is optional,if you will not send then default value will be used.

- @PathVariable - Annotation which indicates that a method parameter should be bound to a URI template variable.Binds request parameters to the method parameters and extracts query parameters from the URL. It can handle multiple parameter types. It supports the following attributes:-
    1. required: Specifies if the parameter is mandatory
    2. defaultValue: Default value if the parameter is missing
    3. value/name: Parameter name

```java
@RequestMapping(method=RequestMethod.GET)
public List<Spittle> spittles(
      @RequestParam(name="max",required=false,default="10") long max,
      @RequestParam("count") int count) {
   return spittleRepository.findSpittles(max, count);
}
```

Taking input via path parameters:- Used to etract uri path data from uri.Data is mandatory,if you will not send data 404 error is thrown.
To accommodate path variables, Spring MVC allows for placeholders in an @RequestMapping path. The placeholders are names surrounded by curly braces ({ and }). Although all the other parts of the path need to match exactly for the request to be handled, the placeholder can carry any value.

- @RequestParam - Annotation which indicates that a method parameter should be bound to a web request parameter.

Here’s a handler method that uses placeholders to accept a Spittle ID as part of the path:

```java
@RequestMapping(value="/{spittleId}", method=RequestMethod.GET)
public String spittle(@PathVariable("spittleId") long spittleId,Model model) {
   model.addAttribute(spittleRepository.findOne(spittleId));
   return "spittle";
}
```

Query parameters and path parameters are fine for passing small amounts of data on a request. But often you need to pass a lot of data (perhaps data coming from a form submission), and query parameters are too awkward and limited for that.

- Processing forms: Web applications typically do more than just push content out to the user. Most also let users participate in the conversation by filling out forms and submitting data back into the application. Spring MVC controllers are well-suited for form processing as well as serving content.
There are two sides to working with forms: displaying the form and processing the data the user submits from the form.

```java
@RequestMapping(value="/register", method=GET)
public String showRegistrationForm() {
   return "registerForm";
}
```

Because the view name is registerForm, you’ll need a JSP named registerForm.jsp. This JSP must include an HTML <form> where the user will enter information to sign up with the application.

- Writing a form-handling controller: When processing the POST request from the registration form, the controller needs to accept the form data and save the form data. Finally, in order to prevent a duplicate submission (such as might happen if the user clicked their browser’s Refresh button), it should redirect the browser.
As part of that POST request, user information is passed as parameters on the request to simulate a form being submitted.

When handling a POST request, it’s usually a good idea to send a redirect after the POST has completed processing so that a browser refresh won’t accidentally submit the
form a second time.


`Validation, Data Binding, and Type Conversion` - There are pros and cons for considering validation as business logic, and Spring offers a design for validation and data binding that does not exclude either one of them. Specifically, validation should not be tied to the web tier and should be easy to localize, and it should be possible to plug in any available validator. Considering these concerns, Spring provides a Validator contract that is both basic and eminently usable in every layer of an application.

Data binding is useful for letting user input be dynamically bound to the domain model of an application (or whatever objects you use to process user input). Spring provides the aptly named DataBinder to do exactly that. The Validator and the DataBinder make up the validation package, which is primarily used in but not limited to the web layer.

The BeanWrapper is a fundamental concept in the Spring Framework and is used in a lot of places. However, you probably do not need to use the BeanWrapper directly. Because this is reference documentation, however, we feel that some explanation might be in order. We explain the BeanWrapper in this chapter, since, if you are going to use it at all, you are most likely do so when trying to bind data to objects.

Spring’s DataBinder and the lower-level BeanWrapper both use PropertyEditorSupport implementations to parse and format property values. The PropertyEditor and PropertyEditorSupport types are part of the JavaBeans specification and are also explained in this chapter. Spring’s core.convert package provides a general type conversion facility, as well as a higher-level format package for formatting UI field values. You can use these packages as simpler alternatives to PropertyEditorSupport implementations. They are also discussed in this chapter.

Spring supports Java Bean Validation through setup infrastructure and an adaptor to Spring’s own Validator contract. Applications can enable Bean Validation once globally, as described in Java Bean Validation, and use it exclusively for all validation needs. In the web layer, applications can further register controller-local Spring Validator instances per DataBinder, as described in Configuring a DataBinder, which can be useful for plugging in custom validation logic.
Resources


- Validating forms: You can take advantage of Spring’s support for the Java Validation API (a.k.a. JSR-303). Starting with Spring 3.0, Spring supports the Java Validation API in Spring MVC. No extra configuration is required to make Java Validation work in Spring MVC. You just need to make sure an implementation of the Java API, such as Hibernate Validator, is in the project’s classpath.
The Java Validation API defines several annotations that you can put on properties to place constraints on the values of those properties. All of these annotations are in the javax.validation.constraints package.
The controller is annotated with @Valid to indicate to Spring that the command object has validation constraints that should be enforced.
@ModelAttribute - Annotation that binds a method parameter or method return value to a named model attribute, exposed to a web view.Binds a method parameter or method return value to a named model attribute and automatically populates the object with data from the form submissions.

Validation ensures:

1. Data integrity in your APIs.
2. Better user experience with meaningful error messages.
3. Reduced bugs in the business logic.


Handle Errors with @ExceptionHandler:- Customize error responses for invalid data.

```java
@ControllerAdvice
public class GlobalExceptionHandler{
   @ExceptionHandler(MethodArgumentNotValidException.class)
   public ResponseEntity<Map<String,String>> handleValidationExceptions(@MethodArgumentNotValidException ex){
      Map<String,String> errors = new HashMap<>();
      ex.getBindingResult().getFieldErrors().forEach(error -> errors.put(
         error.getField(), error.getDefaultMessage()
      ));
      return new ResponseEntity<>(errors,HttpStatus.BAD_REQUEST);
   }
}
```

Extracts validation errors and returns them as a structured JSON response.

- Best Practices for Validation
   1. Validate at the DTO level using annotations.
   2. Use custom constraints for specific requirements.
   3. Handle exceptions globally with @ControllerAdvice.
   4. Avoid mixing validation logic with business logic.

Bean Validation:-  Bean Validation provides a common way of validation through constraint declaration and metadata for Java applications. To use it, you annotate domain model properties with declarative validation constraints which are then enforced by the runtime. There are built-in constraints, and you can also define your own custom constraints.


```java
public class User{
    @NotNull
    private String username;
    @NotNull
    private String password
}
---
@RequestMapping("/user")
public String login(@Valid @ModelAttribute User user,BindingResult result,Model model){
    if(result.hasErrors()){
        model.addAttrribute("status","false");
        return user;
    }

    model.addAttribute("status","true");
    return user;
}

```

```jsp
<form action="<%=contextPath%>/sample/form" method="post">
    <c:if test="${status== false}">
        <p>Error</p>
    <c:if test="${status== true}">
        <p>Successful</p>        
```

In Spring MVC framework we can use MultipartResolver interface to upload a file. We need to make configuration changes to make it work. After uploading the file, we have to create Controller handler method to process the uploaded file in application.


- *Reading Data from Request Body*:- Generally,HTTP request body will send data in from of POST method.ModelAttribute will take care of reading form data and bind to JavaBean,during binding,if any errors are found then `BindingResult` will be executed which will hold all errors details.


**VIEW RESOLVER(Rendering web views)**:- Controllers populate the model with some data and then pass the model off to a view for rendering.
Decoupling request-handling logic in the controller from the view-rendering of a view is an important feature of Spring MVC. If the controller methods were directly responsible for producing HTML, it would be difficult to maintain and update the view without getting your hands dirty in request-handling logic. At most, the controller methods and view implementations should agree on the contents of the model; apart from that, they should keep an arms-length distance from each other.

Spring’s view resolvers helps Spring determine which actual view implementation it should use to render the model.
Spring MVC defines an interface named `ViewResolver` that looks a little something like this:

```java
public interface ViewResolver {
   View resolveViewName(String viewName, Locale locale)
      throws Exception;
}
```

The resolveViewName() method, when given a view name and a Locale, returns a View instance. View is another interface that looks like this:

```java
public interface View {
   String getContentType();
   void render(Map<String, ?> model,
      HttpServletRequest request,
      HttpServletResponse response) throws Exception;
}
```

The View interface’s job is to take the model, as well as the servlet request and response objects, and render output into the response.

Although you can write your own custom implementations of ViewResolver and View, and although there are some special cases where that’s necessary, typically you needn’t worry yourself with these interfaces.
Spring comes with 13 view resolvers to translate logical view names into physical view implementations:-
1. BeanNameViewResolver - Resolves views as beans in the Spring application context whose ID is the same as the view name.
2. ContentNegotiatingViewResolver - Resolves views by considering the content type desired by the client and delegating to another view resolver that can produce that type.
3. FreeMarkerViewResolver - Resolves views as FreeMarker templates.
4. InternalResourceViewResolver - Resolves views as resources internal to the web application (typically JSPs).
5. JasperReportsViewResolver - Resolves views as JasperReports definitions.
6. ResourceBundleViewResolver - Resolves views from a resource bundle (typically a properties file).
7. TilesViewResolver - Resolves views as Apache Tile definitions, where the tile ID is the same as the view name. Note that there are two different TilesViewResolver implementations, one each for Tiles 2.0 and Tiles 3.0.
8. UrlBasedViewResolver - Resolves views directly from the view name, where the view name matches the name of a physical view definition.
9. VelocityLayoutViewResolver - Resolves views as Velocity layouts to compose pages from different Velocity templates.
10. VelocityViewResolver - Resolves views as Velocity templates.
11. XmlViewResolver - Resolves views as bean definitions from a specified XML file. Similar to BeanNameViewResolver.
12. XsltViewResolver - Resolves views to be rendered as the result of an XSLT transformation.


**VIEWS**:-

`Creating JSP views`:- Spring supports JSP views in two ways:
- InternalResourceViewResolver can be used to resolve view names into JSP files. Moreover, if you’re using JavaServer Pages Standard Tag Library (JSTL)
tags in your JSP pages, InternalResourceViewResolver can resolve view names into JSP files fronted by JstlView to expose JSTL locale and resource bundle
variables to JSTL’s formatting and message tags.
- Spring provides two JSP tag libraries, one for form-to-model binding and one providing general utility features.

Whether or not you use JSTL or intend to use Spring’s JSP tag libraries, it’s important to configure a view resolver to resolve JSP views. Although a few of Spring’s other view resolvers could be used to map view names to JSP files, InternalResourceViewResolver is the simplest and most commonly used view resolver for this task.

`Configuring a JSP-ready view resolver`: Whereas some view resolvers, such as ResourceBundleViewResolver, directly map a logical view name to a specific implementation of the View interface, InternalResourceViewResolver takes a more indirect approach. It follows a convention whereby a prefix and a suffix are attached to the view name to determine the physical path to a view resource in the same web application.

As an example, consider the simple case where the logical view name is home. It’s a common practice to place JSP files under the web application’s WEB-INF folder to prevent direct access.
If you were to keep all your JSP files in /WEB-INF/views/, and if your home page JSP is named home.jsp, then you could derive the physical view path by prefixing the logical
view name home with /WEB-INF/views/ and adding a suffix of .jsp.

You can configure InternalResourceViewResolver to apply this convention when resolving views by configuring it with this @Bean-annotated method:

```java
@Bean
public ViewResolver viewResolver() {
   InternalResourceViewResolver resolver = new InternalResourceViewResolver();
   resolver.setPrefix("/WEB-INF/views/");
   resolver.setSuffix(".jsp");
   return resolver;
}
```

Optionally, if you prefer to use Spring’s XML-based configuration, you can configure InternalResourceViewResolver like this:

```xml
<bean id="viewResolver" 
   class="org.springframework.web.servlet.view.InternalResourceViewResolver"
   p:prefix="/WEB-INF/views/"
   p:suffix=".jsp" />
```

With this configuration of InternalResourceViewResolver in place, you can expect it to resolve logical view names into JSP files such as this:
- home resolves to /WEB-INF/views/home.jsp
- productList resolves to /WEB-INF/views/productList.jsp
- books/detail resolves to /WEB-INF/views/books/detail.jsp


**Handling exceptions**:- No matter what happens, good or bad, the outcome of a servlet request is a servlet response. If an exception occurs during request processing, the outcome is still a servlet response. Somehow, the exception must be translated into a response.

Spring MVC Framework provides following mechanisms to help us achieve exception handling:
1. Controller Based: A developer can define exception handler methods in a Controller class. To do so, they have to annotate the methods with @ExceptionHandler annotation.
2. Global Exception Handler: Spring provides @ControllerAdvice annotation for exception handling as cross-cutting concern. We can mark any class as global exception handler by using this annotation.
3. HandlerExceptionResolver implementation: Spring Framework provides HandlerExceptionResolver interface that can be implemented to create a global exception handler.

The simplest way to handle an exception is to map it to the HTTP status code to be placed on the response.

Spring offers a handful of ways to translate exceptions to responses:
1. Certain Spring exceptions are automatically mapped to specific HTTP status codes.
2. An exception can be annotated with @ResponseStatus to map it to an HTTP status code.
3. A method can be annotated with @ExceptionHandler to handle the exception.

The simplest way to handle an exception is to map it to the HTTP status code to be placed on the response.

- `Mapping exceptions to HTTP status codes`:- Out of the box, Spring automatically maps a dozen of its own exceptions to appropriate status codes.
    1. BindException - 400 - Bad Request
    2. ConversionNotSupportedException -500 - Internal Server Error
    3. HttpMediaTypeNotAcceptableException - 406 - Not Acceptable
    4. HttpMediaTypeNotSupportedException - 415 - Unsupported Media Type
    5. HttpMessageNotReadableException - 400 - Bad Request
    6. HttpMessageNotWritableException - 500 - Internal Server Error
    7. HttpRequestMethodNotSupportedException - 405 - Method Not Allowed
    8. MethodArgumentNotValidException - 400 - Bad Request
    9. MissingServletRequestParameterException - 400 - Bad Request
    10. MissingServletRequestPartException - 400 - Bad Request
    11. NoSuchRequestHandlingMethodException - 404 - Not Found
    12. TypeMismatchException - 400 - Bad Request

The exceptions are usually thrown by Spring itself as the result of something going wrong in DispatcherServlet or while performing validation. For example, if DispatcherServlet can’t find a controller method suitable to handle a request, a NoSuchRequestHandlingMethodException will be thrown, resulting in a response with a status code of 404 (Not Found).
Although these built-in mappings are helpful, they do no good for any application exceptions that may be thrown. Fortunately, Spring offers a way to map exceptions to HTTP status codes via the @ResponseStatus annotation.

```java
@RequestMapping(value="/{spittleId}", method=RequestMethod.GET)
public String spittle( @PathVariable("spittleId") long spittleId,Model model) {
    Spittle spittle = spittleRepository.findOne(spittleId);
    if (spittle == null) { throw new SpittleNotFoundException();}
    model.addAttribute(spittle);
    return "spittle";
}
```

Here, a Spittle is retrieved by its ID from the SpittleRepository. If findOne() returns a Spittle object, that Spittle is put into the model, and the view whose name is spittle is tasked with rendering it in the response. But if findOne() returns null, then a SpittleNotFoundException is thrown. For now, SpittleNotFoundException is a simple unchecked exception that looks like this:

```java
public class SpittleNotFoundException extends RuntimeException {
    public SpittleNotFoundException(String message){
        super(message);
    }
}
```

If the spittle() method is called on to handle a request, and the given ID comes up empty, the SpittleNotFoundException will (by default) result in a response with a 500 (Internal Server Error) status code. In fact, in the event of any exception that isn’t otherwise mapped, the response will always have a 500 status code. But you can change that by mapping SpittleNotFoundException otherwise.
When SpittleNotFoundException is thrown, it’s a situation where a requested resource isn’t found. The HTTP status code of 404 is precisely the appropriate response status code when a resource isn’t found. So, let’s use @ResponseStatus to map SpittleNotFoundException to HTTP status code 404.

```java
@ResponseStatus(value=HttpStatus.NOT_FOUND,reason="Spittle Not Found")
public class SpittleNotFoundException extends RuntimeException {
}
```

@ResponseStatus - Marks a method or exception class with the status ResponseStatus.code() and ResponseStatus.reason() that should be returned.

After introducing this @ResponseStatus annotation, if a SpittleNotFoundException were to be thrown from a controller method, the response would have a status code of 404 and a reason of Spittle Not Found.

`Exception-handling methods`:- Mapping exceptions to status codes is simple and sufficient for many cases. But what if you want the response to carry more than just a status code that represents the error that occurred, Rather than treat the exception generically as some HTTP error, maybe you’d like to handle the exception the same way you might handle the request itself.

If @ExceptionHandler methods can handle exceptions thrown from any handler method in the same controller class, you might be wondering if there’s a way they can handle exceptions thrown from handler methods in any controller. As of Spring 3.2 they certainly can, but only if they’re defined in a controller advice class.


**Advising controllers**:- Certain aspects of controller classes might be handier if they could be applied broadly across all controllers in a given application. @ExceptionHandler methods, for instance, could prove useful in handling exceptions across multiple controllers. If a particular exception is thrown from multiple controller classes, you might find yourself duplicating the same @ExceptionHandler method in all of those controllers. Or, to avoid the duplication, you might create a base controller class that all of your controllers could extend to inherit the common @ExceptionHandler method.
Spring 3.2 brings another option to the table: controller advice. A controller advice is any class that’s annotated with @ControllerAdvice and has one or more of the following kinds of methods:
1. @ExceptionHandler-annotated
2. @InitBinder-annotated
3. @ModelAttribute-annotated

Those methods in an @ControllerAdvice-annotated class are applied globally across all @RequestMapping-annotated methods on all controllers in an application.
The @ControllerAdvice annotation is itself annotated with @Component. Therefore,an @ControllerAdvice-annotated class will be picked up by component-scanning, just like an @Controller-annotated class.

One of the most practical uses for @ControllerAdvice is to gather all @ExceptionHandler methods in a single class so that exceptions from all controllers are handled consistently in one place.

```java
@ControllerAdvice
public class AppWideExceptionHandler {
    @ExceptionHandler(DuplicateSpittleException.class)
    public String duplicateSpittleHandler() {
    return "error/duplicate";}
}
```

@ControllerAdvice - Specialization of @Component for classes that declare @ExceptionHandler, @InitBinder, or @ModelAttribute methods to be shared across multiple @Controller classes.
@ExceptionHandler - Annotation for handling exceptions in specific handler classes and/or handler methods.

Now, if a DuplicateSpittleException is thrown from any controller method, no matter which controller it’s in, this duplicateSpittleHandler() method will be called to handle the exception. The @ExceptionHandler-annotated method can be written much like an @RequestMapping-annotated method.


Spring MVC is not used in developing web applications commonly nowadays coz:-
1. Web container is required.
2. Takes more processing time.
3. Not lightweight.

Market is using Javascript MVC frameworks to develop web applications instead of Java MVC e.g Angular,React,Vue.


**Locales**:- Most parts of Spring’s architecture support internationalization, just as the Spring web MVC framework does. `DispatcherServlet` enables you to automatically resolve messages using the client’s locale.This is done with `LocaleResolver` objects.
When a request comes in, the DispatcherServlet looks for a locale resolver, and if it finds one it tries to use it to set the locale. Using the `RequestContext.getLocale()` method, you can always retrieve the locale that was resolved by the locale resolver.

In addition to automatic locale resolution, you can also attach an interceptor to the handler mapping to change the locale under specific circumstances, for example, based on a parameter in the request.

Locale resolvers and interceptors are defined in the `org.springframework.web.servlet.i18n` package and are configured in your application context in the normal way.


**Spring’s multipart (file upload) support8**:- Spring’s built-in multipart support handles file uploads in web applications. You enable this multipart support with pluggable `MultipartResolver` objects, defined in the `org.springframework.web.multipart package`. Spring provides one MultipartResolver implementation for use with Commons FileUpload and another for use with Servlet 3.0 multipart request parsing.
By default, Spring does no multipart handling, because some developers want to handle multiparts themselves. You enable Spring multipart handling by adding a multipart resolver to the web application’s context. Each request is inspected to see if it contains a multipart. If no multipart is found, the request continues as expected. If a multipart is found in the request, the MultipartResolver that has been declared in your context is used. After that, the multipart attribute in your request is treated like any other attribute.


---

### (Distributed Applications)Web Services

Starting with Spring 3.0, Spring introduced first-class support for creating REST APIs. And Spring’s REST implementation has continued to evolve through Spring.
Spring’s REST support builds on Spring MVC.
The REST capabilities are provided by the Spring MVC module (same module that provides model-view-controller capabilities). It is not a JAX-RS implementation and can be seen as a Spring alternative to the JAX-RS standard.


**The fundamentals of REST**:-

- `Representational`- REST resources can be represented in virtually any form, including XML, JavaScript Object Notation (JSON), or even HTML—whatever form best suits the consumer of those resources.
- `State` — When working with REST, you’re more concerned with the state of a resource than with the actions you can take against resources.
- `Transfer` — REST involves transferring resource data, in some representational form, from one application to another.

Resources in REST are identified and located with URLs. There are no strict rules regarding RESTful URL structure, but the URL should identify a resource, not bark a command to the server. Again, the focus is on things, not actions.

Spring has long had some of the ingredients needed for exposing REST resources.Starting with version 3.0, however, Spring began adding enhancements to Spring MVC to provide first-class REST support.Spring supports the creation of REST resources in the following ways:
1. Controllers can handle requests for all HTTP methods, including the four primary REST methods: GET, PUT, DELETE, and POST. Spring 3.2 and higher also supports the PATCH method.
2. The @PathVariable annotation enables controllers to handle requests for parameterized URLs (URLs that have variable input as part of their path).
3. Resources can be represented in a variety of ways using Spring views and view resolvers, including View implementations for rendering model data as XML,JSON, Atom, and RSS.
4. The representation best suited for the client can be chosen using ContentNegotiatingViewResolver.
5. View-based rendering can be bypassed altogether using the @ResponseBody annotation and various HttpMethodConverter implementations.
6. Similarly, the @RequestBody annotation, along with HttpMethodConverter implementations, can convert inbound HTTP data into Java objects passed in to a controller’s handler methods.
7. Spring applications can consume REST resources using RestTemplate.


NOTE:- Although Spring supports a variety of formats for representing resources, you aren’t obligated to use them all when defining your REST API.JSON and XML are often sufficient representations expected by most clients.
Certainly, if you’ll be presenting content to be consumed by a human, you should probably support HTML formatted resources. Depending on the nature of the resource and the requirements of your application, you may even choose to present the resource as a PDF document or an Excel spreadsheet.
For non-human consumers, such as other applications or code that invokes your REST endpoints, the leading choices for resource representation are XML and JSON.
It’s easy enough to support both of these options using Spring, so there’s no need to make a choice.

Spring offers two options to transform a resource’s Java representation into the representation that’s shipped to the client:
- `Content negotiation` — A view is selected that can render the model into a representation to be served to the client.
- `Message conversion` — A message converter transforms an object returned from the controller into a representation to be served to the client.

**Negotiating resource representation**:- When a controller’s handler method finishes, a logical view name is usually returned. If the method doesn’t directly return a logical view name (if the method returns void, for example), the logical view name is derived from the request’s URL. DispatcherServlet then passes the view name to a view resolver, asking it to help determine which view should render the results of the request.

In a human-facing web application, the view chosen is almost always rendered as HTML; view resolution is a one-dimensional activity. If the view name matches a view,then that’s the view you go with.When it comes to resolving view names into views that can produce resource representations, there’s an additional dimension to consider. Not only does the view need to match the view name, but the view also needs to be chosen to suit the client. If the client wants JSON data, then an HTML-rendering view won’t do—even if the view name matches.

Spring’s ContentNegotiatingViewResolver is a special view resolver that takes the content type that the client wants into consideration. In it’s simplest possible form, ContentNegotiatingViewResolver can be configured like this:

```java
@Bean
public ViewResolver cnViewResolver() {
return new ContentNegotiatingViewResolver();
}
```

A lot is going on in that simple bean declaration. Understanding how ContentNegotiatingViewResolver works involves getting to know the content-negotiation two-step:
1. Determine the requested media type(s).
2. Find the best view for the requested media type(s).

`DETERMINING THE REQUESTED MEDIA TYPES`:- The first step in the content-negotiation two-step is determining what kind of resource representation the client wants.
ContentNegotiatingViewResolver considers the Accept header and uses whatever media types it asks for, but only after it first looks at the URL’s file extension. If the URL has a file extension on the end, ContentNegotiatingViewResolver tries to figure out the desired type based on that extension. If the extension is .json, then the desired content type must be application/json. If it’s .xml, then the client is asking for application/xml. Of course, an .html extension indicates that the client wants the resource represented as HTML (text/html).

If the file extension doesn’t produce any usable clues for the media type, then the Accept header in the request is considered. In that case, the Accept header’s value indicates the MIME type(s) that the client wants; there’s no need to look it up. In the end, if there is no Accept header and the extension is no help, ContentNegotiatingViewResolver falls back to / as the default content type, meaning the client has to take whatever representation the server sends it.

Once a content type has been determined, it’s time for ContentNegotiatingViewResolver to resolve the logical view name into a View for rendering the model. Unlike Spring’s other view resolvers, ContentNegotiatingViewResolver doesn’t resolve views on its own. Instead, it delegates to other view resolvers, asking them to resolve the view.
ContentNegotiatingViewResolver asks the other view resolvers to resolve the logical view name into a view. Every view that’s resolved is added to a list of candidate views. With the candidate view list assembled, ContentNegotiatingViewResolver cycles through all the requested media types, trying to find a view from among the candidate views that produces a matching content type. The first match found is the one that’s used to render the model.

`INFLUENCING HOW MEDIA TYPES ARE CHOSEN`:-


The key benefit of using ContentNegotiatingViewResolver is that it layers REST resource representation on top of the Spring MVC with no change in controller code.The same controller method that serves human-facing HTML content can also serve JSON or XML to a non-human client.
Content negotiation is a convenient option when there’s a great deal of overlap between your human and non-human interfaces. In practice, though, human-facing views rarely deal at the same level of detail as a REST API. The benefit of ContentNegotiatingViewResolver isn’t realized when there isn’t much overlap between the human and non-human interfaces.
ContentNegotiatingViewResolver also has a serious limitation. As a ViewResolver implementation, it only has an opportunity to determine how a resource is rendered to a client. It has no say in what representations a controller can consume from the client. If the client is sending JSON or XML, then ContentNegotiatingViewResolver isn’t much help.

Because of these limitations, it is not generally preferred to use ContentNegotiatingViewResolver. Instead,I lean heavily toward using Spring’s message converters for producing resource representations.

**HTTP message converters**:- Message conversion is a more direct way to transform data produced by a controller into a representation that’s served to a client. When using message conversion,DispatcherServlet doesn’t bother with ferrying model data to a view. In fact, there is no model, and there is no view. There is only data produced by the controller and a resource representation produced when a message converter transforms that data.
Spring comes with a variety of message converters to handle the most common object-to-representation conversion needs.

1. AtomFeedHttpMessageConverter - Converts Rome Feed objects to and from Atom feeds (media type application/atom+xml).Registered if the Rome library is present on the classpath.
2. BufferedImageHttpMessageConverter - Converts BufferedImage to and from image binary data.
3. ByteArrayHttpMessageConverter - Reads and writes byte arrays. Reads from all media types (*/*), and writes as application/octet-stream.
4. FormHttpMessageConverter - Reads content as application/x-www-form-urlencoded into a MultiValueMap<String,String>. Also writes MultiValueMap<String,String> as application/x-www-form-urlencoded and MultiValueMap<String, Object> as multipart/form-data.
5. Jaxb2RootElementHttpMessage - ConverterReads and writes XML (either text/xml or application/xml) to and from JAXB2-annotated objects. Registered if JAXB v2 libraries are present on the classpath.
6. MappingJacksonHttpMessageConverter - Reads and writes JSON to and from typed objects or untyped HashMaps. Registered if the Jackson JSON library is present on the classpath.
7. MappingJackson2HttpMessageConverter - Reads and writes JSON to and from typed objects or untyped HashMaps. Registered if the Jackson 2 JSON library is present on the classpath.
8. MarshallingHttpMessageConverter - Reads and writes XML using an injected marshaler and unmarshaler. Supported (un)marshalers include Castor, JAXB2, JIBX, XMLBeans, and XStream.
9. ResourceHttpMessageConverter - Reads and writes org.springframework.core.io.Resource.
10. RssChannelHttpMessageConverter - Reads and writes RSS feeds to and from Rome Channel objects. Registered if the Rome library is present on the classpath.
11. SourceHttpMessageConverter - Reads and writes XML to and from javax.xml.transform.Source objects.
12. StringHttpMessageConverter - Reads all media types (*/*) into a String. Writes String to text/plain.
13. XmlAwareFormHttpMessageConverter - An extension of FormHttpMessageConverter that adds support for XML-based parts using a SourceHttpMessageConverter.

For example, suppose the client has indicated via the request’s Accept header that it can accept application/json. Assuming that the Jackson JSON library is in the application’s classpath, the object returned from the handler method is given to MappingJacksonHttpMessageConverter for conversion into a JSON representation to be returned to the client. On the other hand, if the request header indicates that the client prefers text/xml, then Jaxb2RootElementHttpMessageConverter is tasked  with producing an XML response to the client.

Note that all but five of the HTTP message converters are registered by default, so no Spring configuration is required to use them. But you may need to add additional libraries to your application’s classpath to support them. For instance, if you want to use MappingJacksonHttpMessageConverter to convert JSON messages to and from Java objects, you’ll need to add the Jackson JSON Processor library to the classpath. Similarly, the JAXB library is required for Jaxb2RootElementHttpMessageConverter to convert messages between XML and Java objects. And the Rome library is required for AtomFeedHttpMessageConverter and RssChannelHttpMessageConverter when the message comes in Atom or RSS format.


`RETURNING RESOURCE STATE IN THE RESPONSE BODY`:- Normally, when a handler method returns a Java object (anything other than String or an implementation of View), that object ends up in the model for rendering in the view. But if you’re going to employ message conversion, you need to tell Spring to skip the normal model/view flow and use a message converter instead. There are a handful of ways to do this, but the simplest is to annotate the controller method with @ResponseBody.

```java
@RequestMapping(method=RequestMethod.GET,produces="application/json")
public @ResponseBody List<Spittle> spittles(){}
```

The @ResponseBody annotation tells Spring that you want to send the returned object as a resource to the client, converted into some representational form that the client can accept. More specifically, DispatcherServlet considers the request’s Accept header and looks for a message converter that can give the client the representation it wants.
For illustration’s sake, if the client’s Accept header specifies that the client will accept application/json, and if the Jackson JSON library is in the application’s classpath, then either MappingJacksonHttpMessageConverter or MappingJackson2HttpMessageConverter will be chosen (depending on which version of Jackson is in the classpath). The message converter will convert the Spittle list returned from the controller into a JSON document that will be written to the body of the response.


`RECEIVING RESOURCE STATE IN THE REQUEST BODY`:- A REST API can also receive resource representations from the client. It’d be inconvenient if your controller had to convert a JSON or XML representation sent from a client into an object it can use.
Just as @ResponseBody tells Spring to employ a message converter when sending data to a client, the @RequestBody tells Spring to find a message converter to convert a resource representation coming from a client into an object.

```java
@RequestMapping(method=RequestMethod.POST,consumes="application/json")
public @ResponseBody Spittle saveSpittle(@RequestBody Spittle spittle) {}
```

@RequestBody - Annotation indicating a method parameter should be bound to the body of the web request.Spring treats result of method as response.Converts response to JSON.Binds HTTP request body to method parameter and automatically deserialize JSON/XML. It is used in POST or PUT requests to read data sent by the client and supports content negotiations.
@ResponseBody - Annotation that indicates a method return value should be bound to the web response body.Indicates that the method returns the data directly to the HTTP response body,bypassing the view resolution. This is used in RESTful APIs and can automatically serialize objects to JSON/XML.


`DEFAULTING CONTROLLERS FOR MESSAGE CONVERSION`:- The @ResponseBody and @RequestBody annotations are succinct yet powerful ways to engage Spring’s message converters when handling requests. But if you’re writing a controller that has several methods, all of which should use message conversion, then those annotations get somewhat repetitive.
Spring 4.0 introduced the @RestController annotation to help with that. If you annotate your controller class with @RestController instead of @Controller, Spring applies message conversion to all handler methods in the controller. You don’t need to annotate each method with @ResponseBody.

@RestController - A convenience annotation that is itself annotated with @Controller and @ResponseBody.Used to develop RESTful web apps.Used to define a controller class that handles RESTful web services. It returns data directly (like JSON) instead of views,eliminating the need for @ResponseBody on each method.
It is a specialized version of the @Controller that combines @Controller and @ResponseBody. It is specifically designed for RESTful web services where every method returns data rather than a view.

```java
@RestController
@RequestMapping("/spittles")
public class SpittleController {
    @RequestMapping(method=RequestMethod.GET,produces="application/json")
    public List<Spittle> spittles(){}

    @RequestMapping(method=RequestMethod.POST,consumes="application/json")
    public Spittle saveSpittle(@RequestBody Spittle spittle) {}
}
```

Neither of the handler methods are annotated with @ResponseBody. But because the controller is annotated with @RestController, the objects returned from those methods will still go through message conversion to produce a resource representation for the client.


**Validation**:- Use @Valid to validate incoming request data automatically.
@Validated - Variant of JSR-303's jakarta. validation. Valid, supporting the specification of validation groups. Designed for convenient use with Spring's JSR-303 support but not JSR-303 specific.
Can be used, for example, with Spring MVC handler methods arguments. Supported through org. springframework. validation. SmartValidator's validation hint concept, with validation group classes acting as hint objects.

```java
@RestController
@Validated
@RequestMapping("/user")
public class UserController{
   @PostMapping
   public ResponseEntity<String> createUser(@Valid @RequestBody UserRequest request){
        return ResponseEntity.ok("user created");
   }

    //Validating PathVariable
    @GetMapping("/{userId}")
    public ResponseEntity<User> getUserById(@PathVariable 
                            @Min(value = 1,message = "{min_user_id_value}")  Integer userId) throws UsernotFoundException {
        return ResponseEntity.status(HttpStatus.OK).body(userService.getUserById(userId));
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity<User> getUserById(@PathVariable 
                            @Min(value = 1,message = "${min_user_id_value}")  Integer userId) throws UsernotFoundException {
        return ResponseEntity.status(HttpStatus.OK).body(userService.deleteUser(userId));
    }

    //Validating RequestParam
    @GetMapping
    public ResponseEntity<User> getUserBetween(
        @RequestParam(defaultValue = "2025-10-01") @PastOrPresent(message = "{start_date}") LocalDate startDate,
        @RequestParam(defaultValue = "2025-12-01") @PastOrPresent(message = "{end_date}") LocalDate endDate) throws UsernotFoundException {
        return ResponseEntity.status(HttpStatus.OK).body(userService.getUserBetweeen(startDate,endDate));
    }

    //validating dto
    @PostMapping("/register")
    public void register(@Valid @RequestBody UserRequest request){
        authService.register(request);
   }
}

//message.properties
min_user_id_value="User Id must be greater than 1"
start_date=
end_date=
```

When a method returns more than one error,e.g getUserBetween can return two errors at once.

```java
@ExceptionHandler(ConstraintViolationException.class)
public ResponseEntity<List<ErrorDTO>> handleInternalError(ConstraintViolationException exception){
    List<ErrorDTO> errorDTO = exception.getConstraintViolations()
            .stream()
            .map(error -> ErrorDTO.builder()
                .message(error.getMessage())
                .code(HttpStatus.BAD_REQUEST.value())
                .status(HttpStatus.BAD_REQUEST)
                .timestamp(LocalDateTime.now())
                .build())
            .toList();

    return ResponseEntity.status(errorDTO.get(0).getStatus()).body(errorDTO);
}

    @ExceptionHandler
    public ResponseEntity<List<ErrorDTO>> methodArg(MethodArgumentNotValidException exception){
        List<ErrorDTO> errorDTO = exception.
                getBindingResult().getAllErrors().stream()
                .map(error -> ErrorDTO.builder()
                        .message(error.getDefaultMessage())
                        .code(HttpStatus.BAD_REQUEST.value())
                        .status(HttpStatus.BAD_REQUEST)
                        .timestamp(LocalDateTime.now())
                        .build())
                .toList();

        return ResponseEntity.status(errorDTO.get(0).getStatus()).body(errorDTO);
    }
```

@Valid: Automatically triggers validation based on annotations in the UserRequest class.

- Use built-in annotations to validate fields in your DTOs

```java
public class UserRequest{

   @NotNull(message ="Name cannot be null")
   private String name;

   @Email(message ="Invalid Email")
   private String email;

   @Size(min =10, max =10, message ="Phone must be 10 digits")
   private String email;
}
```


**Pagination**:- Spring Boot provides many features to support Pagination natively. 
As of Spring version 3.3, a class PagedModel is available to enable the serialization of a page in the API. The last section describes the old approach providing our own implementation.

```java
@GetMapping("/tutorials")
public ResponseEntity<Map<String, Object>> getAllTutorialsPage(
    @RequestParam(required = false) String title,
    @RequestParam(defaultValue = "0") int page,
    @RequestParam(defaultValue = "3") int size,
    @RequestParam(defaultValue = "id,desc") String[] sort)
```


**Data Transfer Object (DTO)**:- is a design pattern used to transfer data between software application subsystems or layers, particularly over a network or between different parts of a system like a client and a server. Think of DTOs as specialized containers that carry data from one place to another without containing any business logic.
A DTO is typically a simple object with no business logic — just fields and corresponding getters/setters. It acts as a structured data container that defines exactly what information should be shared between different parts of your application.

```java
// Simple DTO example
public class UserDTO {
    private String name;
    private String email;

    public UserDTO(String name, String email) {
        this.name = name;
        this.email = email;
    }

    // Getters and Setters
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
}
```

DTOs solve several critical problems in modern software development by creating a clear boundary between your internal domain models and the data you expose externally. This separation is particularly valuable when building APIs, microservices, or any system where different layers need to communicate.
Key scenarios where DTOs shine:

1. API Communication: REST APIs, GraphQL endpoints, and RPC calls
2. Serialization/Deserialization: Converting objects to JSON, XML, or other formats
3. Data Privacy: Controlling what sensitive information gets exposed
4. Network Optimization: Reducing payload size by including only necessary fields
5. Version Management: Maintaining API compatibility while evolving internal models

Benefits of Using DTOs:-

1. `Encapsulation and Security` - DTOs act as a protective barrier around your internal domain models. They expose only the necessary data fields, protecting sensitive information like passwords, internal IDs, or business logic details.
2. `Simplified API Responses` - DTOs allow you to craft responses that include exactly what your API consumers need, reducing payload size and improving performance.
3. `Decoupling Layers` - DTOs create a clean separation between your data persistence layer (database entities) and your presentation layer (API responses), making your application more maintainable and flexible.
4. `Improved Testability` - By isolating data structures, DTOs make unit testing easier and more focused. You can test your API layer independently from your domain logic.
5. `Validation and Transformation` - DTOs serve as excellent input models where you can apply validation rules and transform raw user input into domain-specific structures.

Records can be used for DTOs to avoid relying on Lombok. Records automatically give us a concise syntax, built-in immutability, generated equals, hashCode, and toString methods, and clear intent without extra boilerplate.

```java
// Java Record (Java 14+) - Immutable, concise
public record UserRecord(String name, String email, LocalDateTime createdAt, boolean active) {
    
    // Compact constructor for validation and normalization
    public UserRecord {
        if (name == null || name.isBlank()) {
            throw new IllegalArgumentException("Name cannot be blank");
        }
        if (email == null || !email.contains("@")) {
            throw new IllegalArgumentException("Invalid email format");
        }
        // Normalize name
        name = name.trim();
        email = email.toLowerCase().trim();
    }
}
```

```java
// Records with Bean Validation
public record CreateUserRecord(
    @NotBlank(message = "Name is required")
    @Size(min = 2, max = 50, message = "Name must be between 2 and 50 characters")
    String name,
    
    @Email(message = "Invalid email format")
    @NotBlank(message = "Email is required")
    String email,
    
    @Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$", 
             message = "Password must be at least 8 characters with letters and numbers")
    String password,
    
    @Valid
    AddressRecord address
) {
    // Validation logic in compact constructor
    public CreateUserRecord {
        if (name != null) {
            name = name.trim();
        }
        if (email != null) {
            email = email.toLowerCase().trim();
        }
    }
}
```


**Serving more than resources**:- The @ResponseBody annotation is helpful in transforming a Java object returned from a controller to a resource representation to send to the client.A good REST API does more than transfer resources between the client and server. It also gives the client additional metadata to help the client understand the resource or know what has just taken place in the request.


`Communicating errors to the client`:-

```java
@RequestMapping(value="/{id}", method=RequestMethod.GET)
public @ResponseBody Spittle spittleById(@PathVariable long id) {
return spittleRepository.findOne(id);
}
```

That ID is passed in to the id parameter and used to look up a Spittle from the repository by calling findOne(). The Spittle returned from findOne() will be returned from the handler method, and message conversion will take care of producing a resource representation consumable by the client.If spittleById() returns null, the body of the response is empty. No useful data is returned to the client. Meanwhile, the default HTTP status code carried on the response is 200 (OK), which means everything is fine.
But everything is not fine. The client asks for a Spittle, but it gets nothing. It receives neither a Spittle nor any indication that anything is wrong.At the least, the status code shouldn’t be 200. It should be 404 (Not Found) to tell the client that what they asked for wasn’t found. And it would be nice if the response body carried an error message instead of being empty.
Spring offers a few options for dealing with such scenarios:
1. Status codes can be specified with the @ResponseStatus annotation.
2. Controller methods can return a ResponseEntity that carries more metadata concerning the response.
3. An exception handler can deal with the error cases, leaving the handler methods to focus on the path.

```java
public User getUserById(Integer userId) {
    return userRepository.findById(userId).orElseThrow(()-> new UsernotFoundException("User with ID " + userId + " NOT FOUND"));
}
```

```java
public class UsernotFoundException extends RuntimeException {
    public UsernotFoundException(String message) {
        super(message);
    }
}
```

`RESPONSEENTITY`:- As an alternative to @ResponseBody, controller methods can return a ResponseEntity.ResponseEntity is an object that carries metadata (such as headers and the status code) about a response in addition to the object to be converted to a resource representation.
ResponseEntity represents the whole HTTP response,status code,headers and body.
ResponseEntity is a generic type.Consequently,we can use any type as the response type.

```java
return new ResponseEntity<>("Custom header set",headers,HttpStatus.OK)
```

Furthermore,ResponseEntity provides two nested builder interfaces: HeadersBuilder and its subinterface, BodyBuilder.Therefore,we can access their capabilities through static methods of ResponseEntity.
The simplest case is a response with a body and HTTP 200 response code.

```java
return ResponseEntity.ok("Created user");
```

In addition,we can use the BodyBuilder status(HttpStatus status) and the BodyBuilder status(int status) methods to set any HTTP status.

```java
return ResponseEntity.status(HttpStatus.CREATED).body("User created");
```

We can also set custom headers:-

```java
return ResponseEntity.ok().header("Custom-Header","foo").body("User created");
```

Since BodyBuilder.body() returns a ResponseEntity instead of BodyBuilder, it should be last call.
NOTE: In HeaderBuilder we can't set any properties of the response body.

Because ResponseEntity allows you to specify the response’s status code, it seems like a good choice for communicating an HTTP 404 error when the Spittle can’t be found.


```java
@RequestMapping(value="/{id}", method=RequestMethod.GET)
public ResponseEntity<Spittle> spittleById(@PathVariable long id) {
    Spittle spittle = spittleRepository.findOne(id);
    HttpStatus status = spittle != null ? HttpStatus.OK : HttpStatus.NOT_FOUND;
    return new ResponseEntity<Spittle>(spittle, status);
}
```

A new ResponseEntity is created to carry the Spittle and the status code to the client.
In addition to carrying response headers, a status code, and a payload, ResponseEntity implies the semantics of @ResponseBody, so the payload will be rendered into the response body just as if the method were annotated with @ResponseBody. There’s no need to annotate the method with @ResponseBody if it returns ResponseEntity.

```java
@GetMapping("/{userId}")
public ResponseEntity<?> getUserById(@PathVariable Integer userId){
    try {
        return ResponseEntity.status(HttpStatus.OK).body(userService.getUserById(userId));
    } catch (UsernotFoundException e) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
    }
}
```

```bash
User with ID 103 NOT FOUND
```

Now the client is given a proper status code if the Spittle it asks for can’t be found. But the body of the response is still empty in that case. You’d like for the body to carry additional error information.Let’s try again. First, define an Error object to carry the error information:

```java
public class Error {
    private int code;
    private String message;

    public Error(int code, String message) {
        this.code = code;
        this.message = message;
    }
    public int getCode() {
        return code;
    }
    public String getMessage() {
        return message;
    }
}
```

```java
@RequestMapping(value="/{id}", method=RequestMethod.GET)
public ResponseEntity<?> spittleById(@PathVariable long id) {
    Spittle spittle = spittleRepository.findOne(id);
    if (spittle == null) {
        Error error = new Error(4, "Spittle [" + id + "] not found");
        return new ResponseEntity<Error>(error, HttpStatus.NOT_FOUND);
    }
    return new ResponseEntity<Spittle>(spittle, HttpStatus.OK);
}
```

Now this controller method should behave as you wish. If the Spittle is found, it’s returned, wrapped in a ResponseEntity with a status code of 200 (OK). On the other hand, if findOne() returns null, you construct an Error object and return it wrapped in a ResponseEntity with a status code of 404 (Not Found).

First, it’s a bit more involved than when we started. There’s a bit more logic involved, including a conditional statement. And the fact that the method returns ResponseEntity<?> feels wrong. The generic use of ResponseEntity leaves too much open for interpretation or mistake.Fortunately, you can fix this with an error handler.

```java
@GetMapping("/{userId}")
public ResponseEntity<User> getUserById(@PathVariable Integer userId) throws UsernotFoundException {
    return ResponseEntity.status(HttpStatus.OK).body(userService.getUserById(userId));
}
```

```bash
{
    "timestamp": "2025-12-05T20:14:25.078+00:00",
    "status": 500,
    "error": "Internal Server Error",
    "path": "/users/103"
}
```


`HANDLING ERRORS & EXCEPTIONS`:-

```java
@ExceptionHandler(SpittleNotFoundException.class)
public ResponseEntity<Error> spittleNotFound(SpittleNotFoundException e) {
    long spittleId = e.getSpittleId();
    Error error = new Error(4, "Spittle [" + spittleId + "] not found");
    return new ResponseEntity<Error>(error, HttpStatus.NOT_FOUND);
}
```

The @ExceptionHandler annotation can be applied to controller methods to handle specific exceptions. Here, it’s indicating that if a SpittleNotFoundException is thrown from any of the handler methods in the same controller, the spittleNotFound() method should be called to handle that exception.

```java
public class SpittleNotFoundException extends RuntimeException {
    private long spittleId;
    public SpittleNotFoundException(long spittleId) {
        this.spittleId = spittleId;
    }
    public long getSpittleId() {
        return spittleId;
    }
}
```

Now you can remove most of the error handling from the spittleById() method:

```java
@RequestMapping(value="/{id}", method=RequestMethod.GET)
public ResponseEntity<Spittle> spittleById(@PathVariable long id) {
    Spittle spittle = spittleRepository.findOne(id);
    if (spittle == null) { throw new SpittleNotFoundException(id); }
    return new ResponseEntity<Spittle>(spittle, HttpStatus.OK);
}
```

Knowing that the error handler method always returns an Error and always responds with an HTTP status code of 404 (Not Found), you can apply a similar cleanup process to spittleNotFound():

```java
@ExceptionHandler(SpittleNotFoundException.class)
@ResponseStatus(HttpStatus.NOT_FOUND)
public @ResponseBody Error spittleNotFound(SpittleNotFoundException e) {
    long spittleId = e.getSpittleId();
    return new Error(4, "Spittle [" + spittleId + "] not found");
}
```

@ResponseStatus - Marks method or exception class with HTTP status code and reason. It is possible to provide a custom reason message.


```java
@GetMapping("/{userId}")
public ResponseEntity<User> getUserById(@PathVariable Integer userId) throws UsernotFoundException {
    return ResponseEntity.status(HttpStatus.OK).body(userService.getUserById(userId));
}
```

```java
public class ErrorDTO {
    private String message;
    private HttpStatus status;
    private Integer code;
    private LocalDateTime timestamp;
    //NoArgsConstructor
    //AllArgsConstructor
    //setters and getters
}
```

@RestControllerAdvice - A convenience annotation that is itself annotated with @ControllerAdvice and @ResponseBody.

```java
@RestControllerAdvice
public class ExceptionController {

    @ExceptionHandler(UsernameNotFoundException.class)
    public ResponseEntity<ErrorDTO> handleUserNotFoundException(UsernotFoundException exception){
        ErrorDTO errorDTO = new ErrorDTO();
        errorDTO.setMessage(exception.getMessage());
        errorDTO.setCode(HttpStatus.NOT_FOUND.value());
        errorDTO.setStatus(HttpStatus.NOT_FOUND);
        errorDTO.setTimestamp(LocalDateTime.now());

        return ResponseEntity.status(errorDTO.getStatus()).body(errorDTO);
    }
}

```

```sh
{
    "message": "User with ID 103 NOT FOUND",
    "status": "NOT_FOUND",
    "code": 404,
    "timestamp": "2025-12-05T23:58:08.262514567"
}
```

```java
@Getter
@Setter
public class User{
    @JsonProperty("f-name")
    String firstName;
    String lastName;
    @JsonProperty("pass")
    String password;
}
```


**API Versioning**:- At the core of server-side handling is the ApiVersionStrategy, a key contract with knowledge of all application preferences for API versioning. It can resolve, parse, and validate request versions; it knows about the range of supported versions; and it can help to send deprecation hints in the response.

You configure it through the MVC config or the WebFlux config.

```java
@Configuration
public class WebConfiguration implements WebMvcConfigurer {

	@Override
	public void configureApiVersioning(ApiVersionConfigurer configurer) {
		configurer.useRequestHeader("API-Version");
	}
}
```

For Spring Boot applications, there are equivalent properties for the same. For example:

```java
spring.mvc.apiversion.use.header=API-Version
```

Once configured, this is then available to support API versioning in request handling.
For annotated controllers, you can use the new version attribute of the @RequestMapping annotation and its specialized forms such as @GetMapping:

```java
@RestController
public class AccountController {
	@GetMapping(path = "/account/{id}", version = "1.1") 
	public Account getAccount() {
	}
}
```

If the API version is in a request header, query param, or media type, there is nothing further to do in the mappings.
If the API version is in the path, it must be declared as a URI variable (with any name), for example, "/api/{version}". Typically, this is best configured externally as a common path prefix for all handlers through the Path Matching options, so that it does not need to be repeated in every mapping.
By default, the request version is parsed into a semantic version with major, minor, and patch values where minor and patch values are set to 0 if not present. This is important in order to be able to compare versions. The parser can be customized or replaced if you want to use a date or any other format.

```java
@GetMapping
@GetMapping("v2")

@GetMapping
@GetMapping(header="version-2")
```


**Internalization**:-

```java
@GetMapping(path = "/hello-world-internationalized")
	public String helloWorldInternationalized() {
		Locale locale = LocaleContextHolder.getLocale();
		return messageSource.getMessage("good.morning.message", null, "Default Message", locale );
		
		//return "Hello World V2"; 
		
		//1:
		//2:
//		- Example: `en` - English (Good Morning)
//		- Example: `nl` - Dutch (Goedemorgen)
//		- Example: `fr` - French (Bonjour)
//		- Example: `de` - Deutsch (Guten Morgen)

}
```


-------------------


## Spring Boot Web

Spring Boot is well suited for web application development. You can create a self-contained HTTP server by using embedded Tomcat, Jetty, Undertow, or Netty. Most web applications use the `spring-boot-starter-web` module to get up and running quickly. You can also choose to build reactive web applications by using the `spring-boot-starter-webflux` module.

Initialization steps are typically as follows:
1. Initializing the DispatcherServlet of Spring MVC.
2. Setting up an encoding filter to ensure that client requests are encoded correctly.
3. Setting up a view resolver to tell Spring where to find our views and in which dialect they are written (jsp, Thymeleaf templates, and so on).
4. Configuring static resources locations (css, js).
5. Configuring supported locales and resource bundles.
6. Configuring a multipart resolver for file uploads to work.
7. Including tomcat or jetty to run our application on a web server.
8. Setting up the error pages (For example 404).

However, Spring Boot handles all that work for us. Because this configuration is typically up to your application, you can come up with an unlimited amount of combinations.
Spring boot, in a way, is an opinionated Spring project configurator. It is based on conventions and will enforce them on your project by default.

`Spring MVC Auto-configuration`:- Spring Boot provides auto-configuration for Spring MVC that works well with most applications.
The auto-configuration adds the following features on top of Spring’s defaults:

1. Inclusion of ContentNegotiatingViewResolver and BeanNameViewResolver beans.
2. Support for serving static resources, including support for WebJars.
3. Automatic registration of Converter, GenericConverter, and Formatter beans.
4. Support for HttpMessageConverters.
5. Automatic registration of MessageCodesResolver.
6. Static index.html support.
7. Automatic use of a ConfigurableWebBindingInitializer bean.

If you want to keep those Spring Boot MVC customizations and make more MVC customizations (interceptors, formatters, view controllers, and other features), you can add your own @Configuration class of type WebMvcConfigurer but without @EnableWebMvc.

To make Spring web app:

1. Create a maven project
2. Add dependencies to pom.xml(spring core,MVC,jackson,validator)
3. Configure required beans in configuration using xml or java-config(DispatcherServlet,Viewresolver,Controller)
4. Write web.xml
5. Write controller class
6. configure annotations e,g(@requestBody)
