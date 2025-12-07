# Spring

The `Spring framework` is a very popular and widely used Java framework for building web and enterprise applications originally created by Rod Johnson. Spring at its core is a dependency injection container that provides flexibility to configure beans in multiple ways, such as XML, Annotations, and JavaConfig.

The Spring framework was created primarily as a dependency injection container, but it is much more than that.

Spring was created to address the complexity of enterprise application development, and makes it possible to use plain-vanilla JavaBeans to achieve things that were previously only possible with EJBs. But Spring’s usefulness isn’t limited to server-side development. Any Java application can benefit from Spring in terms of simplicity, testability, and loose coupling.

The Spring Framework is a lightweight solution for building your enterprise-ready applications.Spring is modular, allowing you to use only those parts that you need, without having to bring in the rest. You can use the IoC container, with any web framework on top, but you can also use only the Hibernate integration code or the JDBC abstraction layer. The Spring Framework supports declarative transaction management, remote access to your logic through RMI or web services, and various options for persisting your data. It offers a full-featured MVC framework, and enables you to integrate AOP transparently into your software.

Spring is designed to be non-intrusive, meaning that your domain logic code generally has no dependencies on the framework itself. In your integration layer (such as the data access layer), some dependencies on the data access technology and the Spring libraries will exist. However, it should be easy to isolate these dependencies from the rest of your code base.

Spring enables you to build applications from "plain old Java objects" (POJOs) and to apply enterprise services non-invasively to POJOs. This capability applies to the Java SE programming model and to full and partial Java EE.It makes J2EE app development easier.

- Drawbacks of J2EE

1. Tightly coupled - Applications should extend Servlet,EJB.
2. HeavyWeight - App startup takes more extra processing.
3. Boilerplate code - Common code is repeated in multiple places todo some activities.
4. Cross cutting concerns - Doesn't support security,transaction.., needs to be implemented manually.

Rod Johnson developed Spring due to J2EE drawbacks.It was originally called interace21.

- Advantages of spring

1. Makes app dev easier.
2. Light weight
3. Modularity
4. POJO development: Doesn't need extending or implementing any spring f/w classes.
5. Loosely coupled and Unit test code.

Spring can be used to develop:

1. Standalone apps
2. Web applications
3. Distributed Apps
4. Reactive Programming
5. Batch Apps
6. Security

To develop diff types of apps, Spring teams introduced many modules is spring framework.

Features of Spring framework:-
1. IoC
2. AOP(Aspect Oriented Fraamework)
3. Data Access Framework
4. Spring MVC

To back up its attack on Java complexity, Spring employs four key strategies:

1. Lightweight and minimally invasive development with plain old Java objects(POJOs)
2. Loose coupling through dependency injection and interface orientation
3. Declarative programming through aspects and common conventions
4. Boilerplate reduction through aspects and templates

Spring is very popular for several reasons:

- Spring’s dependency injection approach encourages writing testable code
- Easy-to-use and powerful database transaction management capabilities
- Spring simplifies integration with other Java frameworks, like the JPA/Hibernate ORM and Struts/JSF web frameworks
- State-of-the-art Web MVC framework for building web applications

Spring avoids (as much as possible) littering your application code with its API.Spring almost never forces you to implement a Spring-specific interface or extend a Spring-specific class. Instead, the classes in a Spring-based application often have no indication that they’re being used by Spring. At worst, a class may be annotated with one of Spring’s annotations, but is otherwise a POJO.

Despite their simple form, POJOs can be powerful. One of the ways Spring empowers POJOs is by assembling them using dependency injection.

With DI objects are given their dependencies at creation time by some third party that coordinates each object in the system. Objects aren’t
expected to create or obtain their dependencies—dependencies are injected into the objects that need them.

## History of Spring and the Spring Framework

Spring came into being in 2003 as a response to the complexity of the early J2EE specifications.The Spring programming model does not embrace the Jakarta EE platform specification; rather, it integrates with carefully selected individual specifications from the traditional EE umbrella:
1. Servlet API (JSR 340)
2. WebSocket API (JSR 356)
3. Concurrency Utilities (JSR 236)
4. JSON Binding API (JSR 367)
5. Bean Validation (JSR 303)
6. JPA (JSR 338)
7. JMS (JSR 914)
8. JTA/JCA setups for transaction coordination.

The Spring Framework also supports the Dependency Injection (JSR 330) and Common Annotations (JSR 250) specifications, which application developers may choose to use instead of the Spring specific mechanisms provided by the Spring Framework. Originally, those were based on common javax packages.

## Modules

The Spring Framework consists of features organized into about 20 modules.When you download and unzip the Spring Framework distribution, you’ll find 20 different JAR files in the dist directory.
These modules are grouped into Core Container, Data Access/Integration, Web, AOP (Aspect Oriented Programming), Instrumentation, and Test.

Spring Framework Runtime:

1. Data access/Intergration: JDBC, ORM, OXM, JMS, Transactions
2. Web: Websocket,Servlet,Web,Portlet
3. AOP
4. Aspects
5. Instrumentation
6. Messaging
7. Core Container: Beans,Core,Context,SpEL
8. Test
9. Security.

- `Core Container`:- The Core Container consists of the Core, Beans, Context, and Expression Language modules.
    1. The Core and Beans modules provide the fundamental parts of the framework, including the IoC and Dependency Injection features. The BeanFactory is a sophisticated implementation of the factory pattern. It removes the need for programmatic singletons and allows you to decouple the configuration and specification of dependencies from your actual program logic.
    2. The Context module builds on the solid base provided by the Core and Beans modules: it is a means to access objects in a framework-style manner that is similar to a JNDI registry. The Context module inherits its features from the Beans module and adds support for internationalization (using, for example, resource bundles), event-propagation, resource-loading, and the transparent creation of contexts by, for example, a servlet container. The Context module also supports Java EE features such as EJB, JMX ,and basic remoting. The ApplicationContext interface is the focal point of the Context module.
    3. The Expression Language module provides a powerful expression language for querying and manipulating an object graph at runtime. It is an extension of the unified expression language (unified EL) as specified in the JSP 2.1 specification. The language supports setting and getting property values, property assignment, method invocation, accessing the context of arrays, collections and indexers, logical and arithmetic operators, named variables, and retrieval of objects by name from Spring’s IoC container. It also supports list projection and selection as well as common list aggregations.
    4. Context support module
- `Data Access/Integration`:- The Data Access/Integration layer consists of the JDBC, ORM, OXM, JMS and Transaction modules.
    1. The JDBC module provides a JDBC-abstraction layer that removes the need to do tedious JDBC coding and parsing of database-vendor specific error codes.
    2. The ORM module provides integration layers for popular object-relational mapping APIs, including JPA, JDO, and Hibernate. Using the ORM package you can use all of these O/R-mapping frameworks in combination with all of the other features Spring offers, such as the simple declarative transaction management feature mentioned previously.
    3. The OXM module provides an abstraction layer that supports Object/XML mapping implementations for JAXB, Castor,XMLBeans, JiBX and XStream.
    4. The Java Messaging Service (JMS) module contains features for producing and consuming messages.
    5. The Transaction module supports programmatic and declarative transaction management for classes that implement special interfaces and for all your POJOs (plain old Java objects)
- `Web`:- The Web layer consists of the Web, Web-Servlet, WebSocket and Web-Portlet modules.
    1. Spring’s Web module provides basic web-oriented integration features such as multipart file-upload functionality and the initialization of the IoC container using servlet listeners and a web-oriented application context. It also contains the web-related parts of Spring’s remoting support.
    2. The Web-Servlet module contains Spring’s model-view-controller (MVC) implementation for web applications. Spring’s MVC framework provides a clean separation between domain model code and web forms, and integrates with all the other features of the Spring Framework.
    3. The Web-Portlet module provides the MVC implementation to be used in a portlet environment and mirrors the functionality of Web-Servlet module.
- `AOP and Aspects`:-Spring’s AOP module provides an AOP Alliance-compliant aspect-oriented programming implementation allowing you to define, for example, method-interceptors and pointcuts to cleanly decouple code that implements functionality that should be separated. Using source-level metadata functionality, you can also incorporate behavioral information into your code, in a manner similar to that of .NET attributes.
    - The separate Aspects module provides integration with AspectJ.
- `Instrumentation`:- The Instrumentation module provides class instrumentation support and classloader implementations to be used in certain application servers.
- `Test`:-  The Test module supports the testing of Spring components with JUnit or TestNG. It provides consistent loading of Spring ApplicationContexts and caching of those contexts. It also provides mock objects that you can use to test your code in isolation.

Spring’s declarative transaction management features make the web application fully transactional, just as it would be if you used EJB container-managed transactions. All your custom business logic can be implemented with simple POJOs and managed by Spring’s IoC container. Additional services include support for sending email and validation that is independent of the web layer, which lets you choose where to execute validation rules. Spring’s ORM support is integrated with JPA,

Hibernate and and JDO; for example, when using Hibernate, you can continue to use your existing mapping files and standard Hibernate SessionFactory configuration. Form controllers seamlessly integrate the web-layer with the domain model,removing the need for ActionForms or other classes that transform HTTP parameters to values for your domain model.

When you need to access existing code through web services, you can use Spring’s Hessian-, Burlap-, Rmi- or JaxRpcProxyFactory classes. Enabling remote access to existing applications is not difficult.

The Spring Framework also provides an access and abstraction layer for Enterprise JavaBeans, enabling you to reuse your existing POJOs and wrap them in stateless session beans for use in scalable, fail-safe web applications that might need declarative security.

## CORE SPRING CONTAINER

The centerpiece of the Spring Framework is a container that manages how the beans in a Spring-enabled application are created, configured, and managed. Within this module you’ll find the Spring bean factory, which is the portion of Spring that provides dependency injection. Building upon the bean factory, you’ll find several implementations of Spring’s application context, each of which provides a different way to configure Spring.

In addition to the bean factory and application context, this module also supplies many enterprise services such as email, JNDI access, EJB integration, and scheduling.
All of Spring’s modules are built on top of the core container. You’ll implicitly use these classes when you configure your application.

## SPRING’S AOP MODULE

Spring provides rich support for aspect-oriented programming in its AOP module.
This module serves as the basis for developing your own aspects for your Spring-enabled application. Like DI, AOP supports loose coupling of application objects. But
with AOP, application-wide concerns (such as transactions and security) are decoupled from the objects to which they’re applied.

## DATA ACCESS AND INTEGRATION

Working with JDBC often results in a lot of boilerplate code that gets a connection,creates a statement, processes a result set, and then closes the connection. Spring’s
JDBC and data access objects (DAO) module abstracts away the boilerplate code so that you can keep your database code clean and simple, and prevents problems that result
from a failure to close database resources.

This module also builds a layer of meaningful exceptions on top of the error messages given by several database servers. No more trying to decipher cryptic and proprietary SQL error messages!
For those who prefer using an object-relational mapping (ORM) tool over straight JDBC, Spring provides the ORM module. Spring’s ORM support builds on the DAO support, providing a convenient way to build DAOs for several ORM solutions. Spring doesn’t attempt to implement its own ORM solution, but does provide hooks into several popular ORM frameworks, including Hibernate, Java Persistence API, Java Data Objects, and iBATIS SQL Maps. Spring’s transaction management supports each of
these ORM frameworks as well as JDBC.

This module also includes a Spring abstraction over the Java Message Service (JMS) for asynchronous integration with other applications through messaging. And, as of
Spring 3.0, this module includes the object-to-XML mapping features that were originally part of the Spring Web Services project.

In addition, this module uses Spring’s AOP module to provide transaction management services for objects in a Spring application.

## WEB AND REMOTING

The Model-View-Controller (MVC) paradigm is a commonly accepted approach to building web applications such that the user interface is separate from the application logic. Java has no shortage of MVC frameworks, with Apache Struts, JSF, WebWork, and Tapestry among the most popular MVC choices.
Even though Spring integrates with several popular MVC frameworks, its web and remoting module comes with a capable MVC framework that promotes Spring’s loosely coupled techniques in the web layer of an application. This framework comes in two forms: a servlet-based framework for conventional web applications and a portlet-based application for developing against the Java portlet API.

In addition to user-facing web applications, this module also provides several remoting options for building applications that interact with other applications.
Spring’s remoting capabilities include Remote Method Invocation (RMI), Hessian, Burlap,JAX-WS, and Spring’s own HTTP invoker.

## TESTING

Recognizing the importance of developer-written tests, Spring provides a module dedicated to testing Spring applications.
Within this module you’ll find a collection of mock object implementations for writing unit tests against code that works with JNDI, servlets, and portlets. For integration-level testing, this module provides support for loading a collection of beans in a Spring application context and working with the beans in that context.

## Features

1. Core technologies: dependency injection, events, resources, i18n, validation, data binding, type conversion, SpEL, AOP.
2. Testing: mock objects, TestContext framework, Spring MVC Test, WebTestClient.
3. Data Access: transactions, DAO support, JDBC, ORM, Marshalling XML.
4. Spring MVC and Spring WebFlux web frameworks.
5. Integration: remoting, JMS, JCA, JMX, email, tasks, scheduling, cache and observability.
6. Languages: Kotlin, Groovy, dynamic languages.

## Core Technologies

This part of the reference documentation covers all the technologies that are absolutely integral to the Spring Framework.

Foremost amongst these is the Spring Framework’s Inversion of Control (IoC) container. A thorough treatment of the Spring Framework’s IoC container is closely followed by comprehensive coverage of Spring’s Aspect-Oriented Programming (AOP) technologies. The Spring Framework has its own AOP framework, which is conceptually easy to understand and which successfully addresses the 80% sweet spot of AOP requirements in Java enterprise programming.

Coverage of Spring’s integration with AspectJ (currently the richest — in terms of features — and certainly most mature AOP implementation in the Java enterprise space) is also provided.

AOT processing can be used to optimize your application ahead-of-time. It is typically used for native image deployment using GraalVM.

In a Spring based application, main components are:

1. Spring configuration XML file: This is used to configure Spring application
2. API Interfaces: Definition of API interfaces for functions provided by application
3. Implementation: Application code with implementation of APIs
4. Aspects: Spring Aspects implemented by application
5. Client: Application at client side that is used for accessing functions

Spring framework uses many Design patterns. Some of these patterns are:
- Singleton – By default beans defined in spring config files are singleton. These are based on Singleton pattern.
- Template – This pattern is used in many classes like-JdbcTemplate, RestTemplate, JmsTemplate, JpaTemplate etc.
- Dependency Injection – This pattern is the core behind the design of BeanFactory and ApplicationContext.
- Proxy – Aspect Oriented Programming (AOP) heavily uses proxy design pattern.
- Front Controller – DispatcherServlet in Spring is based on FrontController pattern to ensure that incoming requests are dispatched to other controllers.
- Factory pattern – To create an instance of an object, BeanFactory is used. This is based on Factory pattern.
- View Helper – Spring has multiple options to separating core code from presentation in views. Like- Custom JSP tags, Velocity macros etc.

In Spring Framework, following are some of the best practices:

1. We can Divide spring bean configurations based on their concerns such as spring-jdbc.xml, spring-security.xml.
2. It is better to avoid version numbers in schema reference. This makes sure that we have the latest config files.
3. It is a good practice to configure bean dependencies as much as possible. Unless there is a good reason, we try to avoid autowiring.
4. For spring beans that are used in multiple contexts in Spring MVC,we can create them in root context and initialize with listener.
5. Spring framework provides many features and modules. We should just use what we need for our application. An extra dependency has to be removed
6. For application properties, it is good to create a property file and read it in Spring configuration file.
7. Annotations are useful for smaller applications, but for larger applications annotations can become an overhead. It is easier to maintain if all the configurations are in xml files.
8. When we are doing AOP, we have to make sure to keep the Joinpoint as narrow as possible to avoid Advice on unwanted methods.
9. We should use right annotation for components or services. For services use @Service and for DAO beans use @Repository.
10. Dependency Injection (DI) has to be used when there is real benefit.It should not be used just for the sake of loose coupling.

## The Spring portfolio

The whole Spring portfolio includes several frameworks and libraries that build upon the core Spring Framework and upon each other. All together, the entire
Spring portfolio brings the Spring programming model to almost every facet of Java development.

`SPRING WEB FLOW`:- Spring Web Flow builds upon Spring’s core MVC framework to provide support for building conversational, flow-based web applications that guide users toward a goal (think wizards or shopping carts).

`SPRING WEB SERVICES`:- Although the core Spring Framework provides for declaratively publishing Spring beans as web services, those services are based on an arguably architecturally inferior contract-last model. The contract for the service is determined from the bean’s interface. Spring Web Services offers a contract-first web services model where service implementations are written to satisfy the service contract.

`SPRING SECURITY`:- Security is a critical aspect of many applications. Implemented using Spring AOP,Spring Security offers a declarative security mechanism for Spring-based applications.

`SPRING INTEGRATION`:- Many enterprise applications must interact with other enterprise applications. Spring Integration offers implementations of several common integration patterns in Spring’s declarative style.

`SPRING BATCH`:- When it’s necessary to perform bulk operations on data, nothing beats batch processing. If you’re going to be developing a batch application, you can leverage Spring’s robust, POJO-oriented development model to do it using Spring Batch.

`SPRING SOCIAL`:- Social networking is a rising trend on the internet, and more and more applications are being outfitted with integration into social networking sites such as Facebook and Twitter. If this is the kind of thing that interests you, then you’ll want to look at Spring Social, a social networking extension to Spring.

`SPRING MOBILE`:- Mobile applications are another significant area of software development. Smartphones and tablet devices are taking over as the preferred client for many users.Spring Mobile is a new extension to Spring to support development of mobile web applications.
Related to Spring Mobile is the Spring Android project.

`SPRING DYNAMIC MODULES`:- Spring Dynamic Modules (Spring-DM) blends Spring’s declarative dependency injection with OSGi’s dynamic modularity. Using Spring-DM, you can build applications that are composed of several distinct, highly cohesive, loosely coupled modules that publish and consume services declaratively within the OSGi framework.
It should be noted that due to its tremendous impact in the world of OSGi, the Spring-DM model for declarative OSGi services has been formalized into the OSGi
specification itself as the OSGi Blueprint Container. In addition, SpringSource has transitioned Spring-DM to the Eclipse project as a part of the Gemini family of OSGi projects and is now known as Gemini Blueprint.

`SPRING LDAP`:- In addition to dependency injection and AOP, another common technique applied throughout the Spring Framework is to create template-based abstractions around unnecessarily complex operations such as JDBC queries or JMS messaging. Spring LDAP brings Spring-style template-based access to LDAP, eliminating the boilerplate
code that’s commonly involved in LDAP operations.

`SPRING RICH CLIENT`:- Web-based applications seem to have stolen the spotlight from traditional desktop applications. But if you’re one of the few still developing Swing applications, you’ll want to check out Spring Rich Client, a rich application toolkit that brings the power of Spring to Swing.

`SPRING.NET`:- You don’t have to abandon dependency injection and AOP if you’re put on a .NET project. Spring.NET offers the same loose-coupling and aspect-oriented features of Spring, but for the .NET platform.
In addition to the core DI and AOP functionality, Spring.NET comes with several modules for simplifying .NET development, including modules for working with
ADO.NET, NHibernate, ASP.NET, and MSMQ.

`SPRING-FLEX`:- Adobe’s Flex and AIR offer one of the most powerful options for rich internet application development. When those rich user interfaces need to interact with Java code on the server side, they can use a remoting and messaging technology known as BlazeDS.
The Spring-Flex integration package enables Flex and AIR applications to communicate with server-side Spring beans using BlazeDS. It also includes an addon for Spring
Roo to enable rapid application development of Flex applications.

`SPRING ROO`:-As more and more developers are basing their work on Spring, a set of common idioms and best practices has emerged around Spring and its related frameworks. At the same time, frameworks such as Ruby on Rails and Grails have arisen with a script-driven development model that makes simple work of building applications.
Spring Roo provides an interactive tooling environment that enables rapid development of Spring applications, pulling together the best practices that have been
identified over the past few years.
What differentiates Roo from these other rapid application development frameworks is that it produces Java code using the Spring Framework. The outcome is an
honest-to-goodness Spring application, not a separate framework coded in a language that’s foreign to many corporate development organizations.

`SPRING BOOT`:- Spring greatly simplifies many programming tasks, reducing or even eliminating much of the boilerplate code you might normally be required to write without it.
Spring Boot is an exciting new project that takes an opinionated view of developing with Spring to simplify Spring itself.
Spring Boot heavily employs automatic configuration techniques that can eliminate most (and in many cases, all) Spring configuration. It also provides several starter
projects to help reduce the size of your Spring project build files, whether you’re using Maven or Gradle.

## Maven "Bill Of Materials" Dependency

It is possible to accidentally mix different versions of Spring JARs when using Maven. For example, you may find that a third-party library, or another Spring project, pulls in a transitive dependency to an older release. If you forget to explicitly declare a direct dependency yourself, all sorts of unexpected issues can arise.

To overcome such problems Maven supports the concept of a "bill of materials" (BOM) dependency. You can import the spring-framework-bom in your dependencyManagement section to ensure that all spring dependencies (both direct and transitive) are at the same version.

```xml
<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-framework-bom</artifactId>
            <version>4.0.9.RELEASE</version>
            <type>pom</type>
            <scope>import</scope>
        </dependency>
    </dependencies>
</dependencyManagement>
```

An added benefit of using the BOM is that you no longer need to specify the <version> attribute when depending on Spring Framework artifacts:

```xml
<dependencies>
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-context</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-web</artifactId>
    </dependency>
<dependencies>
```

### Gradle Dependency Management

To use the Spring repository with the Gradle build system, include the appropriate URL in the repositories section:

```groovy
repositories {
    mavenCentral()
    // and optionally...
    maven { url "http://repo.spring.io/release" }
}
```

You can change the repositories URL from /release to /milestone or /snapshot as appropriate. Once a repository has been configured, you can declare dependencies in the usual Gradle way:

dependencies {
    compile("org.springframework:spring-context:4.0.9.RELEASE")
    testCompile("org.springframework:spring-test:4.0.9.RELEASE")
}

### Ivy Dependency Management

If you prefer to use Ivy to manage dependencies then there are similar configuration options.

To configure Ivy to point to the Spring repository add the following resolver to your ivysettings.xml:

```xml
<resolvers>
    <ibiblio name="io.spring.repo.maven.release"
            m2compatible="true"
            root="http://repo.spring.io/release/"/>
</resolvers>
```

You can change the root URL from /release/ to /milestone/ or /snapshot/ as appropriate.

Once configured, you can add dependencies in the usual way. For example (in ivy.xml):

```xml
<dependency org="org.springframework"
    name="spring-core" rev="4.0.9.RELEASE" conf="compile->runtime"/>
```

## Distribution Zip Files

Although using a build system that supports dependency management is the recommended way to obtain the Spring Framework, it is still possible to download a distribution zip file.

Distribution zips are published to the Spring Maven Repository (this is just for our convenience, you don’t need Maven or any other build system in order to download them).

To download a distribution zip open a web browser to http://repo.spring.io/release/org/springframework/spring and select the appropriate subfolder for the version that you want. Distribution files end -dist.zip, for example spring-framework-4.0.9.RELEASE-RELEASE-dist.zip. Distributions are also published for milestones and snapshots.

Logging

Logging is a very important dependency for Spring because a) it is the only mandatory external dependency, b) everyone likes to see some output from the tools they are using, and c) Spring integrates with lots of other tools all of which have also made a choice of logging dependency. One of the goals of an application developer is often to have unified logging configured in a central place for the whole application, including all external components. This is more difficult than it might have been since there are so many choices of logging framework.

The mandatory logging dependency in Spring is the Jakarta Commons Logging API (JCL). We compile against JCL and we also make JCL Log objects visible for classes that extend the Spring Framework. It’s important to users that all versions of Spring use the same logging library: migration is easy because backwards compatibility is preserved even with applications that extend Spring. The way we do this is to make one of the modules in Spring depend explicitly on commons-logging (the canonical implementation of JCL), and then make all the other modules depend on that at compile time. If you are using Maven for example, and wondering where you picked up the dependency on commons-logging, then it is from Spring and specifically from the central module called spring-core.

The nice thing about commons-logging is that you don’t need anything else to make your application work. It has a runtime discovery algorithm that looks for other logging frameworks in well known places on the classpath and uses one that it thinks is appropriate (or you can tell it which one if you need to). If nothing else is available you get pretty nice looking logs just from the JDK (java.util.logging or JUL for short). You should find that your Spring application works and logs happily to the console out of the box in most situations, and that’s important.
Not Using Commons Logging

Unfortunately, the runtime discovery algorithm in commons-logging, while convenient for the end-user, is problematic. If we could turn back the clock and start Spring now as a new project it would use a different logging dependency. The first choice would probably be the Simple Logging Facade for Java ( SLF4J), which is also used by a lot of other tools that people use with Spring inside their applications.

There are basically two ways to switch off commons-logging:

Exclude the dependency from the spring-core module (as it is the only module that explicitly depends on commons-logging)
Depend on a special commons-logging dependency that replaces the library with an empty jar (more details can be found in the SLF4J FAQ) 

To exclude commons-logging, add the following to your dependencyManagement section:

```xml
<dependencies>
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-core</artifactId>
        <version>4.0.9.RELEASE</version>
        <exclusions>
            <exclusion>
                <groupId>commons-logging</groupId>
                <artifactId>commons-logging</artifactId>
            </exclusion>
        </exclusions>
    </dependency>
</dependencies>
```

Now this application is probably broken because there is no implementation of the JCL API on the classpath, so to fix it a new one has to be provided. In the next section we show you how to provide an alternative implementation of JCL using SLF4J as an example.
Using SLF4J

SLF4J is a cleaner dependency and more efficient at runtime than commons-logging because it uses compile-time bindings instead of runtime discovery of the other logging frameworks it integrates. This also means that you have to be more explicit about what you want to happen at runtime, and declare it or configure it accordingly. SLF4J provides bindings to many common logging frameworks, so you can usually choose one that you already use, and bind to that for configuration and management.

SLF4J provides bindings to many common logging frameworks, including JCL, and it also does the reverse: bridges between other logging frameworks and itself. So to use SLF4J with Spring you need to replace the commons-logging dependency with the SLF4J-JCL bridge. Once you have done that then logging calls from within Spring will be translated into logging calls to the SLF4J API, so if other libraries in your application use that API, then you have a single place to configure and manage logging.

A common choice might be to bridge Spring to SLF4J, and then provide explicit binding from SLF4J to Log4J. You need to supply 4 dependencies (and exclude the existing commons-logging): the bridge, the SLF4J API, the binding to Log4J, and the Log4J implementation itself. In Maven you would do that like this

```xml
<dependencies>
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-core</artifactId>
        <version>4.0.9.RELEASE</version>
        <exclusions>
            <exclusion>
                <groupId>commons-logging</groupId>
                <artifactId>commons-logging</artifactId>
            </exclusion>
        </exclusions>
    </dependency>
    <dependency>
        <groupId>org.slf4j</groupId>
        <artifactId>jcl-over-slf4j</artifactId>
        <version>1.5.8</version>
    </dependency>
    <dependency>
        <groupId>org.slf4j</groupId>
        <artifactId>slf4j-api</artifactId>
        <version>1.5.8</version>
    </dependency>
    <dependency>
        <groupId>org.slf4j</groupId>
        <artifactId>slf4j-log4j12</artifactId>
        <version>1.5.8</version>
    </dependency>
    <dependency>
        <groupId>log4j</groupId>
        <artifactId>log4j</artifactId>
        <version>1.2.14</version>
    </dependency>
</dependencies>
```

That might seem like a lot of dependencies just to get some logging. Well it is, but it is optional, and it should behave better than the vanilla commons-logging with respect to classloader issues, notably if you are in a strict container like an OSGi platform. Allegedly there is also a performance benefit because the bindings are at compile-time not runtime.

A more common choice amongst SLF4J users, which uses fewer steps and generates fewer dependencies, is to bind directly to Logback. This removes the extra binding step because Logback implements SLF4J directly, so you only need to depend on two libraries not four ( jcl-over-slf4j and logback). If you do that you might also need to exclude the slf4j-api dependency from other external dependencies (not Spring), because you only want one version of that API on the classpath.
Using Log4J

Many people use Log4j as a logging framework for configuration and management purposes. It’s efficient and well-established, and in fact it’s what we use at runtime when we build and test Spring. Spring also provides some utilities for configuring and initializing Log4j, so it has an optional compile-time dependency on Log4j in some modules.

To make Log4j work with the default JCL dependency ( commons-logging) all you need to do is put Log4j on the classpath, and provide it with a configuration file ( log4j.properties or log4j.xml in the root of the classpath). So for Maven users this is your dependency declaration:

```xml
<dependencies>
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-core</artifactId>
        <version>4.0.9.RELEASE</version>
    </dependency>
    <dependency>
        <groupId>log4j</groupId>
        <artifactId>log4j</artifactId>
        <version>1.2.14</version>
    </dependency>
</dependencies>
```

And here’s a sample log4j.properties for logging to the console:

```java
log4j.rootCategory=INFO, stdout

log4j.appender.stdout=org.apache.log4j.ConsoleAppender
log4j.appender.stdout.layout=org.apache.log4j.PatternLayout
log4j.appender.stdout.layout.ConversionPattern=%d{ABSOLUTE} %5p %t %c{2}:%L - %m%n

log4j.category.org.springframework.beans.factory=DEBUG
```

## Runtime Containers with Native JCL

Many people run their Spring applications in a container that itself provides an implementation of JCL. IBM Websphere Application Server (WAS) is the archetype. This often causes problems, and unfortunately there is no silver bullet solution; simply excluding commons-logging from your application is not enough in most situations.

To be clear about this: the problems reported are usually not with JCL per se, or even with commons-logging: rather they are to do with binding commons-logging to another framework (often Log4J). This can fail because commons-logging changed the way they do the runtime discovery in between the older versions (1.0) found in some containers and the modern versions that most people use now (1.1). Spring does not use any unusual parts of the JCL API, so nothing breaks there, but as soon as Spring or your application tries to do any logging you can find that the bindings to Log4J are not working.

In such cases with WAS the easiest thing to do is to invert the class loader hierarchy (IBM calls it "parent last") so that the application controls the JCL dependency, not the container. That option isn’t always open, but there are plenty of other suggestions in the public domain for alternative approaches, and your mileage may vary depending on the exact version and feature set of the container.

## Spring 2.5

In November 2007, the Spring team released version 2.5 of the Spring Framework.The significance of Spring 2.5 was that it marked Spring’s embrace of annotation-driven development. Prior to Spring 2.5, XML-based configuration was the norm. But Spring 2.5 introduced several ways of using annotations to greatly reduce the amount
of XML needed to configure Spring:
1. Annotation-driven dependency injection through the @Autowired annotation and fine-grained auto-wiring control with @Qualifier.
2. Support for JSR-250 annotations, including @Resource for dependency injection of a named resource, as well as @PostConstruct and @PreDestroy for life-cycle methods.
3. Auto-detection of Spring components that are annotated with @Component (or one of several stereotype annotations).
4. An all-new annotation-driven Spring MVC programming model that greatly simplifies Spring web development.
5. A new integration test framework that’s based on JUnit 4 and annotations.

Even though annotations were the big story of Spring 2.5, there’s more:
1. Full Java 6 and Java EE 5 support, including JDBC 4.0, JTA 1.1, JavaMail 1.4, and JAX-WS 2.0.
2. A new bean-name pointcut expression for weaving aspects into Spring beans by their name.
3. Built-in support for AspectJ load-time weaving.
4. New XML configuration namespaces, including the context namespace for configuring application context details and a jms namespace for configuring
message-driven beans.
5. Support for named parameters in SqlJdbcTemplate.

## Spring 3.0

Spring one-upped itself with the continuation of the annotation-driven theme and several new features:
1. Full-scale REST support in Spring MVC, including Spring MVC controllers that respond to REST-style URLs with XML, JSON, RSS, or any other appropriate
response. We’ll look into Spring 3’s new REST support in chapter 11.
2. A new expression language that brings Spring dependency injection to a new level by enabling injection of values from a variety of sources, including other
beans and system properties. We’ll dig into Spring’s expression language in the next chapter.
3. New annotations for Spring MVC, including @CookieValue and @RequestHeader, to pull values from cookies and request headers, respectively. We’ll see
how to use these annotations as we look at Spring MVC in chapter 7.
4. A new XML namespace for easing configuration of Spring MVC.
5. Support for declarative validation with JSR-303 (Bean Validation) annotations.
6. Support for the new JSR-330 dependency injection specification.
7. Annotation-oriented declaration of asynchronous and scheduled methods.
8. A new annotation-based configuration model that allows for nearly XML-free
9. Spring configuration. We’ll see this new configuration style in the next chapter.
10. The Object-to-XML (OXM) mapping functionality from the Spring Web Services project has been moved into the core Spring Framework.

## Spring 3.1

Spring 3.1 had several useful new features and improvements, many of which were focused on simplifying and improving configuration. In addition, Spring 3.1 provided
declarative caching support as well as many improvements to Spring MVC. Here’s a brief list of some of the highlights of Spring 3.1:
1. To address the common issue of selecting distinct configurations for various environments (such as development, test, and production), Spring 3.1 introduced environment profiles. Profiles make it possible, for instance, to select a different data source bean depending on which environment the application is deployed in.
2. Building on Spring 3.0’s Java-based configuration, Spring 3.1 added several enable annotations to switch on certain features of Spring with a single annotation.
3. Declarative caching support made its way into Spring, making it possible to declare caching boundaries and rules with simple annotations, similar to how you could already declare transaction boundaries.
4. A new c namespace brought constructor injection the same succinct attribute-oriented style as Spring 2.0’s p namespace brought to property injection.
5. Spring began to support Servlet 3.0, including the ability to declare servlets and filters in Java-based configuration instead of web.xml.
6. Improvements to Spring’s JPA support made it possible to completely configure JPA in Spring without needing a persistence.xml file.

Spring 3.1 also included several enhancements to Spring MVC:
1. Automatic binding of path variables to model attributes
2. @RequestMapping - produces and consumes attributes, for matching against a request’s Accept and Content-Type headers
3. A @RequestPart annotation that enables binding parts of a multipart request to handler method parameters
4. Support for flash attributes (attributes that survive a redirect) and a Redirect Attributes type to carry the flash attributes between requests

Just as important as what was new in Spring 3.1 is what was no longer available in Spring as of Spring 3.1. Specifically, Spring’s JpaTemplate and JpaDaoSupport classes
were deprecated in favor of native EntityManager usage. Even though they were deprecated, they were still around in Spring 3.2. But you shouldn’t use them, because they
weren’t upgraded to support JPA 2.0 and have been removed in Spring 4.

## Spring 3.2

Whereas Spring 3.1 was largely focused on configuration improvements with a small set of other enhancements, including Spring MVC enhancements, Spring 3.2 was primarily
a Spring MVC-focused release. Spring MVC 3.2 boasted the following improvements:
1. Spring 3.2 controllers can take advantage of Servlet 3’s asynchronous requests to spin off request processing in separate threads, freeing up the servlet thread to process more requests.
2. Although Spring MVC controllers have been easily testable as POJOs since Spring 2.5, Spring 3.2 included a Spring MVC test framework for writing richer
tests against controllers, asserting their behavior as controllers, but without a servlet container.
3. In addition to improved controller testing, Spring 3.2 included support for testing RestTemplate-based clients without sending requests to the real REST endpoint.
4. An @ControllerAdvice annotation enables common @ExceptionHandler,@InitBinder, and @ModelAttributes methods to be collected in a single class and applied to all controllers.
5. Prior to Spring 3.2, full content negotiation support was only available via ContentNegotiatingViewResolver. But in Spring 3.2, full content negotiation became available throughout Spring MVC, even on controller methods relying on message converters for content consumption and production.
6. Spring MVC 3.2 included a new @MatrixVariable annotation for binding a request’s matrix variables to handler method parameters.
7. The abstract base class AbstractDispatcherServletInitializer can be used for conveniently configuring DispatcherServlet without web.xml. Likewise, a
subclass named AbstractAnnotationConfigDispatcherServletInitializer can be used when you wish to configure Spring with Java-based configuration.
8. The ResponseEntityExceptionHandler class was added to be used as an alternative to DefaultHandlerExceptionResolver. ResponseEntityExceptionHandler methods return ResponseEntity<Object> instead of ModelAndView.
9. RestTemplate and @RequestBody arguments support generic types.
10. RestTemplate and @RequestMapping methods support the HTTP PATCH method.
11. Mapped interceptors support URL patterns to be excluded from interceptor processing.

Although Spring MVC was the main story of Spring 3.2, a few other non-MVC improvements were added as well. Here are a few of the most interesting new features in
Spring 3.2:
1. @Autowired, @Value, and @Bean annotations can be used as meta-annotations to create custom injection and bean-declaration annotations.
2. The @DateTimeFormat annotation no longer has a hard dependency on JodaTime. If JodaTime is present, it is used. Otherwise, SimpleDateFormat is used.
3. Spring’s declarative caching support has initial support for JCache 0.5.
4. You can define global formats for parsing and rendering dates and times.
5. Integration tests can configure and load a WebApplicationContext.
6. Integration tests can test against request- and session-scoped beans.

## Spring 4.0

Spring 4.0 is the freshest release of Spring available. There are a lot of exciting new features in Spring 4.0, including the following:
1. Spring now includes support for WebSocket programming, including support for JSR-356: Java API for WebSocket.
2. Recognizing that WebSocket offers a low-level API, screaming for a higher-level abstraction, Spring 4.0 includes a higher level message-oriented programming
model on top of WebSocket that’s based on SockJS and includes STOMP subprotocol support.
3. A new messaging module with many types carried over from the Spring Integration project. This messaging module supports Spring’s SockJS/STOMP support.It also includes template-based support for publishing messages.
4. Spring 4.0 is one of the first (if not the first) Java frameworks to support Java 8 features, including lambdas. Among other things, this makes working with certain callback interfaces (such as RowMapper with JdbcTemplate) much cleaner and easier to read.
5. Along with Java 8 support comes support for JSR-310: Data and Time API, offering the opportunity for developers to work with dates and times in a richer API
than that offered with java.util.Date or java.util.Calendar.
6. A smooth programming experience for applications developed in Groovy has also been added, essentially enabling a Spring application to be developed easily entirely in Groovy. With this comes the BeanBuilder from Grails, enabling Spring applications to be configured with Groovy.
7. Generalized support for conditional bean creation has been added, wherein beans can be declared to be created only if a developer-defined condition is met.
8. Spring 4.0 also includes a new asynchronous implementation of Spring’s RestTemplate that returns immediately but allows for callbacks once the operation completes.
9. Support for many JEE specs has been added, including JMS 2.0, JTA 1.2, JPA 2.1,and Bean Validation 1.1.
