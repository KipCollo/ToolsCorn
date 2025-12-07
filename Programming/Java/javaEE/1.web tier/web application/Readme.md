# Web Applications

A web application (sometimes shortened to web app) is a collection of servlets, Java-Server Pages (JSPs), HTML documents,images, templates, and other web resources that are set up in such a way as to be portably deployed across any servlet-enabled web server.
A web application is a dynamic extension of a web or application server.There are two types of web applications:

1. `Presentation-oriented`: A presentation-oriented web application generates interactive web pages containing various types of markup language (HTML, XHTML, XML, and so on) and dynamic content in response to requests. Development of presentation-oriented web applications Internationalizing and Localizing Web Applications, JavaServer Faces Technology,Java Servlet Technology.
2. `Service-oriented`: A service-oriented web application implements the endpoint of a web service. Presentation-oriented applications are often clients of service-oriented web applications. Development of service-oriented web applications , "Building Web Services with JAX-WS," "Building RESTful Web Services with JAX-RS," "Web Services.

In early days,Java used to make**applets**.These are Java apps that can be downloaded from web site and run within web browser.However,Microsoft Internet Explorer stopped supporting new versions of Java.As result applets lost their appeal and dev switched to servlets and JSPs.These tech allowed devs to write java web apps that run on server.

Ever since late 1990s when Java servlets and JavaServer Pages(JSPs) came into widespread use,website developers have been switching from CGI scripting languages to servlets and JSPs.

In the Java 2 platform, web components provide the dynamic extension capabilities for a web  server. Web components are either Java servlets, JSP pages, or web service endpoints. The client sends an HTTP request to the web server. A web server that implements Java Servlet and JavaServer Pages technology converts the request into an HTTPServletRequest object. This object is delivered to a web component, which can interact with JavaBeans components or a database to generate dynamic content. The web component can then generate an HTTPServletResponse or it can pass the request to another web component. Eventually a web component generates a HTTPServletResponse object. The web server converts this object to an HTTP response and returns it to the client.

## Presentation-Oriented

`Servlets` are Java programming language classes that dynamically process requests and construct responses. `JSP` pages are text-based documents that execute as servlets but allow a more natural approach to creating static content. Although servlets and JSP pages can be used interchangeably, each has its own strengths. Servlets are best suited for service-oriented applications (web service endpoints are implemented as servlets) and the control functions of a presentation-oriented application, such as dispatching requests and handling nontextual data. JSP pages are more appropriate for generating text-based markup such as HTML, Scalable Vector Graphics (SVG), Wireless Markup Language (WML), and XML.

Since the introduction of Java Servlet and JSP technology, additional Java technologies and frameworks for building interactive web applications have been developed.This includes: JavaServer Faces,JavaServer Pages Standard Tag Library.Java Servlet technology is the foundation of all the web application technologies

Web components are supported by the services of a runtime platform called a web container. A web container provides services such as request dispatching, security, concurrency, and life-cycle management. It also gives web components access to APIs such as naming, transactions, and email.Certain aspects of web application behavior can be configured when the application is installed, or deployed, to the web container. The configuration information is maintained in a text file in XML format called a web application deployment descriptor (DD).

In the Java EE platform, web components provide the dynamic extension capabilities for a web server. Web components can be Java servlets, web pages implemented with JavaServer Faces technology, web service endpoints, or JSP pages.

There are two types of web pages:-
1. static web pages/passive web pags - These content of web pages will remain same for all requests.E.g about us page,contact us,terms and conditions.
2. Dynamic web pages/Active web pages - The content of web pages will change based on the input values of request or based pn time of requests generation.E.g Gmail inbox,stock values page.

Based on the type of web pages they render,there are 3 types of web components:
- Static web components - Generate static web pages.E.g HTML files.
- Dynamic web pages - Generate dynamic web pages.E.g servlet,jsp.
- Helper web components:- These components or files do not generate any web pages directly but they help other web comps in the generation of web pages.E.g image files,video files,javascript,css files.

Framework is a specia; software that is built on the top technologies having ability to generate common logics dynamically to simplify application development.If we use technologies to develop apps to,we need to write both common logics and app specifics logics e.g servlet,jsp based web app development gives burden to programmer coz he has to take care both common logics and app specific logics.
If we use framework to develop the Apps,programmers just need only App sepcifics logics coz the common logics will be genefrated dynamicallly.E.g Spring MVC,JSF,Struts internally uses Servlet,JSP technologies.

NB:- Develop small scale website using Servlet,JSP technologies and medium scale and large scale web sites using frameworks like Spring MVC,JSF.

**Components of Java Web App**:- Java EE specification describes how servlet/JSP engine should interact with web server.Since all Servlet/JSP engines must implement this specification,all servlet/JSPs code works similarly.In theory, this makes servlet/JSPs code portable btwn servlet/JSP engine and web servers.In practise,there are diffs btwn each servlet/JSPs engine and web server.as result you need to make some modifications to your code when switching servlet/JSPs engine or web servers.

Client(Browser)<------>[Web Server<---->Servlet/JSP Engine(JDK)<----->Database Server]

The client sends an HTTP request to the web server. A web server that implements Java Servlet and JavaServer Pages technology converts the request into an HTTPServletRequest object. This object is delivered to a web component, which can interact with JavaBeans components or a database to generate dynamic content. The web component can then generate an HTTPServletResponse or can pass the request to another web component. A web component eventually generates a HTTPServletResponse object. The web server converts this object to an HTTP response and returns it to the client.

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

`Model 1 Architecture` -With this architecture,a JSP is responsible for handling both request and response of application.The JSP interacts with Java classes and objects that represents the data of the business objects in application and provides method to do business processing.To save the data of business classes,the application maps the data to a database or files.

The JSPs uses regular Java classes to store data of the application and do business processing of the application.

Model 1 works for application with limited processing requirements,but not recommended for most applications.The JSPs become cluttered with scriplets and code becomes difficult to maintain.

`Model 2 architecture (Model-View-Controller (MVC) pattern)`:- A pattern is standard approach used by programmers to solve common programming problems.One of the pattern is Model-View-Controller. Has three layers:- model,view and controller.

Models defines the business layer of the application.Usually implemented by *JavaBeans*. Classes in these layer the data for business objects and provides methods that do business processing.

View defines presentation layer of the application.MVC apps uses HTML documents or JSPs to present view to the browser.

The Controller manages flow of the application,and this work is done by the servlets.

A servlet reads any parameters available from request which comes from view.Then,if necessary,the servlet updates the model and saves it in data store.Finally, based on logic that's coded in servlet,the servlet forwards the model to one of several posible JSPs for presentation.
Most applications need to map the data in the model to a data store but JavaBeans don't provide methods for storing their own data.Instead, data classes like UserIo class provides those methods.That separates business logic from I/O operations.


## Web Application Lifecycle

A web application consists of web components; static resource files, such as images and cascading style sheets (CSS); and helper classes and libraries. The web container provides many supporting services that enhance the capabilities of web components and make them easier to develop. However, because a web application must take these services into account, the process for creating and running a web application is different from that of traditional stand-alone Java classes.

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

`Folder Structure`:- By having everyone agree on exactly where files in a web application are to be placed and agreeing on a standard configuration file format, a web app can be transferred from one server to another easily without requiring any extra server administration.

Each web application should have a root directory.This directory can be referred to as `document root directory` or just `document root`.All other of other directories and files for applicatin must subordinate to this document root directory.
- /(root)-The top directory containing subdirectories typically containing HTML and JSP files for the app.
- The WEB-INF Directory-This directory must contain web.xml file.This directory is not accessible from web.The files there are not served directly to the client; instead, they contain Java classes and configuration information for the web app. The directory behaves like a JAR file's META-INF directory: it contains meta information about the archive contents.The WEB-INF directory also has subordinate directories:-
   1. The WEB-INF/classes directory contains the class files for this web app's servlets and support classes.
   2. WEB-INF/lib contains classes stored in JAR files. For convenience, server class loaders automatically look to WEB-INF/classes and WEB-INF/lib when loading classes—no extra install steps are necessary.
- META-INF -Contains context.xml. The file is used to configure web app context.Example is when you want to use database connection pool available in Tomcat.

To organize classes that you create for the application,you can store the in packages.

A web module can be deployed as an unpacked file structure or can be packaged in a JAR file known as a web archive (WAR) file. Because the contents and use of WAR files differ from those of JAR files, WAR file names use a .war extension. The web module just described is portable; you can deploy it into any web container that conforms to the Java Servlet Specification.

To deploy a WAR on the Application Server, the file must also contain a runtime deployment descriptor. The runtime deployment descriptor is an XML file that contains information such as the context root of the web application and the mapping of the portable names of an application’s resources to the Application Server’s resources.


**Tools For Web Application Development**:-

`IDE`:- Integrated Development Environment is a tool that provides all of the functionality that you need for developing web applications.
Two of the most popular IDEs for developing Java web applications are NetBeans and Eclipse.Both are open-source, and both are available for free.
Other IDEs are JBuilder,Intellij IDEA.

`Deployment Tool`:- Once you've tested your servlets and JSPs on your computer or an intranet,you may want to deploy your web app on the Internet.To do that, you need to get a web host.One way to do that is to find an Internet service provider(ISP) that provides web hosting that supports servlets and JSPs.
After you get a web host, you need to transfer your files to web server.To do that, you can use File Transfer Protocol(FTP).The easiest way to use FTP is to use an FTP client such as FileZilla client.



## Service-Oriented (Web Services)

`JAX-WS` stands for Java API for XML Web Services. JAX-WS is a technology for building web services and clients that communicate using XML. JAX-WS allows developers to write message-oriented as well as RPC-oriented web services.

In JAX-WS, a web service operation invocation is represented by an XML-based protocol such as SOAP. The SOAP specification defines the envelope structure, encoding rules, and conventions for representing web service invocations and responses. These calls and responses are transmitted as SOAP messages (XML files) over HTTP.

Although SOAP messages are complex, the JAX-WS API hides this complexity from the application developer. On the server side, the developer specifies the web service operations by defining methods in an interface written in the Java programming language. The developer also codes one or more classes that implement those methods. Client programs are also easy to code. A client creates a proxy (a local object representing the service) and then simply invokes methods on the proxy. With JAX-WS, the developer does not generate or parse SOAP messages. It is the JAX-WS runtime system that converts the API calls and responses to and from SOAP messages.

With JAX-WS, clients and web services have a big advantage: the platform independence of the Java programming language. In addition, JAX-WS is not restrictive: a JAX-WS client can access a web service that is not running on the Java platform, and vice versa. This flexibility is possible because JAX-WS uses technologies defined by the World Wide Web Consortium (W3C): HTTP, SOAP, and the Web Service Description Language (WSDL). WSDL specifies an XML format for describing a service as a set of endpoints operating on messages.

`Setting the Port`:- Several files in the JAX-WS examples depend on the port that you specified when you installed the Application Server. The tutorial examples assume that the server runs on the default port, 8080. If you have changed the port, you must update the port number in the following file before building and running the JAX-WS examples:


## HTTP Requests and Responses

`HTTP request` - The first line of an HTTP request is known as request line.This line contains the request method,the request URL, and the request protocol.The request method is Get or Post,but other methods are also supported by HTTP.The request protocol is usually HTTP 1.1,but could be HTTP 1.0 or HTTP 1.2

After request line,an HTTP request contains the request headers.These headers contain information about client that's making the request.

`MIME(Multipurpose Internet Mail Extension) types` commonly used by HTTP.

## Web servers

Responsibilities of web servers:-

1. Listens to client(browser) requests continuously through demon process.
2. Takes requests from clients and handover them to web containers.
3. Provide middleware services
4. Provides container like servlet containers.
5. Provide Admin console to manage web applications like start,stop,reload operations on web apps.

## Standalone Servlet Containers

A `standalone servlet container` is a server that includes built-in support for servlets. Such a container has the advantage that everything works right out of the box. One disadvantage, however, is that you have to wait for a new release of the web server to get the latest servlet support. Another disadvantage is that server vendors generally support only the vendor-provided JVM. Web servers that provide standalone support include those in the following list.

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