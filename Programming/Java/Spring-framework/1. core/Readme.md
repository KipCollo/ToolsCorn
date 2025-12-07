# Spring Core

The Core Container consists of the Core, Beans, Context, and Expression Language modules.

1. `The Core and Beans modules` provide the fundamental parts of the framework, including the IoC and Dependency Injection features. The BeanFactory is a sophisticated implementation of the factory pattern. It removes the need for programmatic singletons and allows you to decouple the configuration and specification of dependencies from your actual program logic.Spring Core Container is the core of Spring framework. It gives the basic functionality of the Spring. All the parts of Spring Framework are built on top of Core Container.Its main use is to provide Dependency Injection (DI) and Inversion of control (IOC) features.
2. `The Context module` builds on the solid base provided by the Core and Beans modules: it is a means to access objects in a framework-style manner that is similar to a JNDI registry. The Context module inherits its features from the Beans module and adds support for internationalization (using, for example, resource bundles), event-propagation, resource-loading, and the transparent creation of contexts by, for example, a servlet container. The Context module also supports Java EE features such as EJB, JMX ,and basic remoting. The ApplicationContext interface is the focal point of the Context module.
3. `The Expression Language module` provides a powerful expression language for querying and manipulating an object graph at runtime. It is an extension of the unified expression language (unified EL) as specified in the JSP 2.1 specification. The language supports setting and getting property values, property assignment, method invocation, accessing the context of arrays, collections and indexers, logical and arithmetic operators, named variables, and retrieval of objects by name from Spring’s IoC container. It also supports list projection and selection as well as common list aggregations.

At its core, Spring offers a container, often referred to as the Spring application context, that creates and manages application components. These components, or beans,are wired together inside the Spring application context to make a complete application, much like bricks, mortar, timber, nails, plumbing, and wiring are bound together to make a house.
The act of wiring beans together is based on a pattern known as dependency injection(DI). Rather than have components create and maintain the life cycle of other beans that they depend on, a dependency-injected application relies on a separate entity(the container) to create and maintain all components and inject those into the beans that need them. This is done typically through constructor arguments or property accessor methods.


-----

## Spring Core

Following SOLID principle,The Single Responsibility Principle(SRP) states that every class should have one responsibility.
Every class would have multiple classes if we follow the SRP.For every class, developer should create the objects and when the application is running,these objects should interact with another object.
Dependent is an object which is depending on another object to get some information,Dependency is an object required by another object to carry out functionality.

When creating objects that is dependent or dependecny,we use the construtor or field to add the object as dependecny and dependent.

```java
public class Pedigree{
   public void eat(){
      // impl
   }
}

public class Dog{
   private Pedigree pedigree;

   public Dog(){
      this.pedigree = new Pedigree();
   }
}

public class DogOwner{
   Dog dog = new Dog();
}
```

The advantage of this approach is that there is proper encapsulation since dependents doesn't know the internal details of their dependency.
The drawbacks is that it is tightly coupled e.g the Dog only eats Pedigree only, if you want to add other food,you need to modify the Dog class., we can't write unit test cases.


To overcome those problems:- The communication between objects should be done using the `Interface approach`.

```java
public interface Food{
   public void eat();
}

public class Pedigree implements Food{
   public void eat(){
      // impl
   }
}

public class Meat implements Food{
   public void eat(){
      // impl
   }
}

public class Dog{
   private Food food;

   public Dog(Food food){
      this.food = food;
   }

   public void eat(){
      this.food.eat();
   }
}

public class DogOwner{

   Food food = new Pedigree();
   Dog dog = new Dog(food);
}
```

The advantage of these method is that it is loosely coupled, can be easily tested.
The drawback is that it breaks the encapsulation, i.e the dependents knows the dependency(e.g DogOwner knows which food Dog eats.)Also it creates unnecessary dependencies between unrelated classes and objects.


To overcome those problems,the `Dependency Injection` concept was introduced.

```java
public interface Food{
   public void eat();
}

public class Pedigree implements Food{
   public void eat(){
      // impl
   }
}

public class Meat implements Food{
   public void eat(){
      // impl
   }
}

public class Dog{
   private Food food;

   public Dog(Food food){
      this.food = food;
   }

   public void eat(){
      this.food.eat();
   }
}

public class DogOwner{
   private Dog dog;

   DogOwner dog = new DogOwner(Dog dog){
      this.dog = dog;
   }
}
```

In above code,the developer does not create any object.The object is created by the dependency injection framework i.e Spring core.
Using spring core, spring will create the required objects and supply to the application.

To provide and get the objects,In spring core there are three steps:-
1. Configuration.
2. Depency Injector.
3. Accessing the Beans:- Use the beans or Get the beans.


- **Spring configuration**:- Spring is a container-based framework. But if you don’t configure Spring, then it’s an empty container and doesn’t serve much purpose. We need to configure Spring to tell it what beans it should contain and how to wire those beans so that they can work together.

In Spring, configurations are used to define beans and their dependencies. This can be done using XML configuration files, Java-based configuration, or annotations. The most common approach is using Java-based configuration with @Configuration and @Bean annotations.It does not create objects instead it just provides instruction of:

1. Objects to be created
2. How to be created i.e create Pedigree object using default Constructor.
3. What dependencies to inject i.e create DogOwner object and inject into Pedigree object.

Spring supports three ways to provide configuration metadata to Spring Container:

1. XML based configuration: We can specify configuration data in an XML file.
2. Annotation-based configuration: We can use Annotations to specify configuration. This was introduced in Spring 2.5.
3. Java-based configuration: This is introduced from Spring 3.0. We can embed annotations like @Bean, @Import, @Configuration in Java code to specify configuration metadata.


A Spring Bean definition contains configuration metadata for bean.This configuration metadata is used by Spring container to:

1. Create the bean
2. Manage its lifecycle
3. Resolve its dependencies

When declaring beans in XML, the root element of the Spring configuration file is the <beans> element from Spring’s beans schema. A typical Spring configuration XML
file looks like this:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.springframework.org/schema/beans
        http://www.springframework.org/schema/beans/spring-beans-3.0.xsd">

    <!-- Bean declarations go here -->
</beans>
```

Within the <beans> you can place all of your Spring configuration, including <bean> declarations. But the beans namespace isn’t the only Spring namespace you’ll
encounter. All together, the core Spring Framework comes with ten configuration namespaces:-

1. aop - Provides elements for declaring aspects and for automatically proxying @AspectJ-annotated classes as Spring aspects.
2. beans - The core primitive Spring namespace, enabling declaration of beans and how they should be wired.
3. context - Comes with elements for configuring the Spring application context, including the ability to autodetect and autowire beans and injection of objects not directly managed by Spring.
4. jee - Offers integration with Java EE APIs such as JNDI and EJB.
5. jms - Provides configuration elements for declaring message-driven POJOs.
6. lang - Enables declaration of beans that are implemented as Groovy, JRuby, or BeanShell scripts.
7. mvc - Enables Spring MVC capabilities such as annotation-oriented controllers, view controllers, and interceptors.
8. oxm - Supports configuration of Spring’s object-to-XML mapping facilities.
9. tx - Provides for declarative transaction configuration.
10. util - A miscellaneous selection of utility elements. Includes the ability to declare collections as beans and support for property placeholder elements.

In addition to the namespaces that come with the Spring Framework, many of the members of the Spring portfolio, such as Spring Security, Spring Web Flow, and
Spring Dynamic Modules, also provide their own Spring configuration namespace.

The <bean> element is the most basic configuration unit in Spring. It tells Spring to create an object for you.The id attribute gives the bean a name by which it’ll be referred to in the Spring container.


The configurations will be given to Dependency injector

Configurations(i.e config.xml)--------->Dependency injector


- **Dependency Injector**:- It reads the configurations files and validates it and creates container(in-memory logical memory partition in JVM) to store BeanFactory reference.It then loads the spring bean configuration file and places metadat in the logical memory partition.The Logical memory partition is called IOC container.
Spring container holds all the objects references by `Dependency Injector`.

Example:-

```java
BeanFactory factory = new XMLBeanFactory(new ClassPathResource("xml file"))
```


- **Accessing the Beans**:- If you want object you just get it from the container instead of creating manually.The bean factory instance goes to the IoC container and search for the bean with given id, if not found it throws exception and exits the application.If found,it will read the corresponding class name and loads the class into JVM memory and instatiates the object of the class.

```java
DogOwner dogOwner = factory.getBean("dogOwner");
```

Java applications — a loose term that runs the gamut from constrained applets to n-tier server-side enterprise applications — typically consist of objects that collaborate to form the application proper. Thus the objects in an application have dependencies on each other.

Although the Java platform provides a wealth of application development functionality, it lacks the means to organize the basic building blocks into a coherent whole, leaving that task to architects and developers. True, you can use design patterns such as Factory, Abstract Factory, Builder, Decorator, and Service Locator to compose the various classes and object instances that make up an application. However, these patterns are simply that: best practices given a name, with a description of what the pattern does, where to apply it, the problems it addresses, and so forth. Patterns are formalized best practices that you must implement yourself in your application.

The Spring Framework Inversion of Control (IoC) component addresses this concern by providing a formalized means of composing disparate components into a fully working application ready for use. The Spring Framework codifies formalized design patterns as first-class objects that you can integrate into your own application(s). Numerous organizations and institutions use the Spring Framework in this manner to engineer robust, maintainable applications.

The Spring Framework does not force you to use everything within it; it is not an all-or-nothing solution. Existing front-ends built with Struts, Tapestry, JSF or
other UI frameworks can be integrated with a Spring-based middle-tier, which allows you to use Spring transaction features.
You simply need to wire up your business logic using an ApplicationContext and use a WebApplicationContext to integrate your web layer.

Inversion of Control (IOC) principle is the base of Spring framework. It supports dependency injection in an application. With Dependency Injection, a programmer has to write minimal code. It also makes easier to test an application.It also manages the lifecycle and collaboration of the objects.
- collaboration - managing dependencies.
- lifecycle - instantion and destruction of objects.


**Spring IoC Container**:- Spring avoids (as much as possible) littering your application code with its API.Spring almost never forces you to implement a Spring-specific interface or extend a
Spring-specific class. Instead, the classes in a Spring-based application often have no indication that they’re being used by Spring. At worst, a class may be annotated with one of Spring’s annotations, but is otherwise a POJO.

Container is just like HashMap<Key, Value> where key is id and value is classname.Spring uses Reflection to create objects in JVM.

The Spring IoC Container is responsible for:

1. Creating the objects
2. Configuring the objects
3. Managing dependency between objects (with dependency injection(DI))
4. Wiring the objects together
5. Managing complete lifecycle of objects

- Managing dependencies can include:
   1. Dependency Lookup: The developer writes code to manually get the object from container.
   2. Dependency Injection: Automatic provision of objects from container.

NB: Objects reference is stored in containers but objects are stored in JVM.
Spring will use `reflections` to create the objects inside the JVM.

DI/IoC does not require a framework, it's a principle not a tool.Frameworks like spring and Guice automate the wiring process using a context/container.Doing it manually gives you control but increases boilerplate.Using context just automates object creation and lifecycle management.
`IoC(Inversion of Controller)`:- Inversion A--->B---->C If class have multiple dependencies and is accessed by one class.
Can be:

1. DI(Dependency Injection)
2. Guice


- **Dependency Injection** is a software design pattern. It is used to implement Inversion of Control (IOC) in Spring framework. As per this pattern, we do not create objects in an application by calling new. Rather, we describe how an object should be created. In this way creation of an object is not tightly coupled with another object.
A container is responsible for creating and wiring the objects. The container can call injecting code and wire the objects as per the configuration at runtime.

There are four roles in Dependency Injection:
- Service object(s) to be used.
- Client object that depends on the service.
- Interface that defines how client uses services.
- Injector responsible for constructing services and injecting them into client.

A typical enterprise application does not consist of a single object (or bean in the Spring parlance). Even the simplest application has a few objects that work together to present what the end-user sees as a coherent application.

Dependency injection (DI) is a specialized form of IoC, whereby objects define their dependencies (that is, the other objects they work with) only through constructor arguments, arguments to a factory method, or properties that are set on the object instance after it is constructed or returned from a factory method. The IoC container then injects those dependencies when it creates the bean. It is a process whereby objects define their dependencies, that is, the other objects they work with, only through constructor arguments, arguments to a factory method, or properties that are set on the object instance after it is constructed or returned from a factory method. The container then injects those dependencies when it creates the bean. This process is fundamentally the inverse, hence the name Inversion of Control (IoC), of the bean itself controlling the instantiation or location of its dependencies by using direct construction of classes, or a mechanism such as the Service Locator pattern.

dependent(target): It is an object which is depending on another object to get some info.
dependency(source): It is an object required by another object to carry out the functionality.

Dependency Injection (DI) pattern has following advantages:
1. Dependency Injection reduces coupling between a class and its dependencies.
2. With Dependency Injection (DI), we can do concurrent or independent software development. Two teams can work parallel on classes that will be used by each other.
3. In Dependency Injection (DI), the client can be configured in multiple ways. It needs to just work with the given interface. Rest of the implementation can be changed and configured for different features.
4. Dependency injection is also used to export a system's configuration details into configuration files. So we can configure same application run in different environments based on configuration. E.g. Run in Test environment, UAT environment, and Production environment.
5. Dependency Injection (DI) applications provide more ease and flexibility of testing. These can be tested in isolation in Unit Test.
6. Dependency injection (DI) isolates client from the impact of design and implementation changes. Therefore, it promotes reusability,testability and maintainability.

Dependency Injection (DI) pattern has following disadvantages:
1. Most of the time Dependency Injection forces developers to use an injection framework like Spring. This causes dependency on a framework.
2. With Dependency Injection, clients are dependent on the configuration data. This becomes extra task for developers when the application does not need so many custom configuration values.
3. Code is difficult to trace and read in Dependency Injection. DI separates behavior from construction of objects.
4. Dependency injection increases complexity in the linkages between classes. It may become harder to manage such complexity outside the implementation of a class.

Most important benefit is that it leads to loose coupling within objects. With loose coupling it is easier to change the application with new requirements.
IOC Container in Spring supports both the Eager instantiation as well as lazy loading of beans.

Despite their simple form, POJOs can be powerful. One of the ways Spring empowers POJOs is by assembling them using dependency injection.With DI objects are given their dependencies at creation time by some third party that coordinates each object in the system. Objects aren’t expected to create or obtain their dependencies—dependencies are injected into the objects that need them.

Spring framework provides two types of Dependency Injection mechanism:

1. Constructor-based Dependency Injection: Spring container can invoke a class constructor with a number of arguments. This represents a dependency on other class.
2. Setter-based Dependency Injection: Spring container can call setter method on a bean after creating it with a no-argument constructor or no-argument static factory method to instantiate another bean.

Main differences between Setter and Constructor Injection (DI) in Spring are:

1. Priority: Setter based injection has higher priority than a constructor based injection in Spring. If an application uses Setter as well as Constructor injection, Spring container uses the Setter injection.
2. Partial dependency: We can inject partial dependency by using Setter injection. In Constructor injection, it is not possible to do just a partial dependency injection. E.g. If there are two properties in a class, we can use Setter method to inject just one property in the class.
3. Flexibility: Setter injection gives more flexibility in introducing changes. One can easily change the value by Setter injection. In case of Constructor injection a new bean instance has to be created always.
4. Readability: Setter injection is more readable than Constructor injection. Generally Setter method name is similar to dependency class being used in setter method.
5. Constructor injection is Used when dependency is final.

Although Setter based Dependency Injection has higher priority than Constructor based DI, there are some disadvantages of it.
1. No Guarantee: In Setter based DI, there is no guarantee that a certain dependency is injected or not. We may have an object with partial or no dependency. Whereas in Constructor based DI, an object in not created till the time all the dependencies are ready.
2. Security: One can use Setter based DI to override another dependency. This can cause Security breach in a Spring application.
3. Circular Dependency: Setter based DI can cause circular dependency between objects. Where as Constructor based DI will throw ObjectCurrentlyInCreationException if there is a circular dependency during the creation of an object.

It is recommended to use Constructor-based DI for mandatory dependencies. Whereas Setter-based DI is used for optional dependencies.

Main differences between Dependency Injection (DI) and Factory Pattern are:
1. Coupling: Factory pattern adds tight coupling between an object,factory and dependency. In case of DI, there is no coupling between objects. We just mention the dependencies on different objects and container resolves and introduces these dependencies.
2. Easier Testing: DI is easier to test, since we can inject the mock objects as dependency in Test environment. In case of Factory pattern, we need to create actual objects for testing.
3. Flexibility: DI allows for switching between different DI frameworks easily. It gives flexibility in the choice of DI framework.
4. Container: DI always needs a container for injecting the dependencies. This leads to extra overhead as well as extra code in your application. In factory pattern, you can just use POJO classes to implement the application without any container.
5. Cleaner Code: DI code is much cleaner than Factory pattern based code. In DI, we do not need to add extra code for factory methods.


The act of creating associations between application components is commonly referred to as wiring. In Spring, there are many ways to wire components together, but a common approach has always been via XML.

Spring application can be configured by an XML file. This file contains information of classes and how these classes are configured and introduced to each other.
Spring IoC container uses some kind of configuration metadata. This configuration metadata represents how an application developer tells the Spring container to instantiate, configure, and assemble the objects in your application. This configuration metadata is stored in Spring configuration file.
The other ways of specifying configuration metadata are Java based configuration and Annotation based configuration.


`Dependency Management and Naming Conventions`:- Dependency management and dependency injection are different things. To get those nice features of Spring into your application (like dependency injection) you need to assemble all the libraries needed (jar files) and get them onto your classpath at runtime, and possibly at compile time. These dependencies are not virtual components that are injected, but physical resources in a file system (typically). The process of dependency management involves locating those resources, storing them and adding them to classpaths. Dependencies can be direct (e.g. my application depends on Spring at runtime), or indirect (e.g. my application depends on commons-dbcp which depends on commons-pool). The indirect dependencies are also known as "transitive" and it is those dependencies that are hardest to identify and manage.

To refer to Spring library modules in this guide we use a shorthand naming convention spring-* or spring-*.jar, where * represents the short name for the module (e.g. spring-core, spring-webmvc, spring-jms, etc.). The actual jar file name that you use is normally the module name concatenated with the version number (e.g. spring-core-4.0.9.RELEASE.jar).

- Each release of the Spring Framework will publish artifacts to the following places:
   1. Maven Central, which is the default repository that Maven queries, and does not require any special configuration to use. Many of the common libraries that Spring depends on also are available from Maven Central and a large section of the Spring community uses Maven for dependency management, so this is convenient for them. The names of the jars here are in the form spring-*-<version>.jar and the Maven groupId is org.springframework.
   2. In a public Maven repository hosted specifically for Spring. In addition to the final GA releases, this repository also hosts development snapshots and milestones. The jar file names are in the same form as Maven Central, so this is a useful place to get development versions of Spring to use with other libraries deployed in Maven Central. This repository also contains a bundle distribution zip file that contains all Spring jars bundled together for easy download. 

Two of the most fundamental and important packages in Spring are the org.springframework.beans and org.springframework.context packages. Code in these packages provides the basis for Spring's Inversion of Control (alternately called Dependency Injection) features. The BeanFactory provides an advanced configuration mechanism capable of managing beans (objects) of any nature, using potentially any kind of storage facility. The ApplicationContext builds on top of the BeanFactory (it's a subclass) and adds other functionality such as easier integration with Springs AOP features, message resource handling (for use in internationalization), event propagation, declarative mechanisms to create the ApplicationContext and optional parent contexts, and application-layer specific contexts such as the WebApplicationContext, among other enhancements.

BeanFactory provides the configuration framework and basic functionality, while the ApplicationContext adds enhanced capabilities to it, some of them perhaps more J2EE and enterprise-centric. In general, an ApplicationContext is a complete superset of a BeanFactory, and any description of BeanFactory capabilities and behavior should be considered to apply to ApplicationContexts as well.

Users are sometimes unsure whether a BeanFactory or an ApplicationContext are best suited for use in a particular situation. Normally when building most applications in a J2EE-environment, the best option is to use the ApplicationContext, since it offers all the features of the BeanFactory and adds on to it in terms of features, while also allowing a more declarative approach to use of some functionality, which is generally desirable.

The main usage scenario when you might prefer to use the BeanFactory is when memory usage is the greatest concern (such as in an applet where every last kilobyte counts), and you don't need all the features of the ApplicationContext.

Core support package for annotations, meta-annotations, and merged annotations with attribute overrides.Found in package **org.springframework.core.annotation**.
It is the base module for all other modules.Used to manage th Object dependencies.It includes the Core Container.

Contains core utilities of the framework,DI abstractions and core framework infrastructure.
Provides basic classes for exception handling and version detection, and other core helpers that are not specific to any part of the framework.
Provides the fundamental parts of the framework, including IoC and Dependency Injection features.It is base for all other modules.It is used to manage object dependencies.In dev with multiple classes,if we want to communicate one object to other we use interface.Using this module spring will create required objects and supply to app.

Key features are:-

1. Core container interfaces(BeanFactory,Resource..)
2. Dependency injection infrastructure
3. Type conversion system.
4. Utility classes(ReflectionUtils,Assert,StringUtils)

Includes essential classes like `BeanFactory`, which is simplest container for managing beans.
IoC abstrcation provided by spring-core:-
1. BeanFactory -root IoC container interface.
2. Resource - abstraction for loading resource(e.g XML files).
3. Common utility and support classes that other modules use for DI.

- Offers low-level functionality like:-
    1. Resource Loading(Resource abstraction)
    2. Type conversion system
    3. Reflection utilities.

It does not know about XML or annotations - just core mechanisms.

Spring container:- In a Spring-based application, your application objects will live within the Spring container.The container will create the objects, wire them together, configure them, and manage their complete lifecycle from cradle to grave (or new to finalize(), as the case may be).
The container is at the core of the Spring Framework. Spring’s container uses dependency injection (DI) to manage the components that make up an application.
This includes creating associations between collaborating components. As such, these objects are cleaner and easier to understand, support reuse, and are easy to unit test.

There’s no single Spring container. Spring comes with several container implementations that can be categorized into two distinct types. `Bean factories` (defined by the org.springframework.beans.factory.BeanFactory interface) are the simplest of containers, providing basic support for DI. `Application contexts` (defined by the org.springframework.context.ApplicationContext interface) build on the notion of a bean factory by providing application framework services, such as the ability to resolve textual messages from a properties file and the ability to publish application events to interested event listeners.

Although it’s possible to work with Spring using either bean factories or application contexts, bean factories are often too low-level for most applications. Therefore, application contexts are preferred over bean factories.

The container gets its instructions on what objects to instantiate, configure, and assemble by reading configuration metadata. The configuration metadata is represented in XML, Java annotations, or Java code. It allows you to express the objects that compose your application and the rich interdependencies between such objects.

- `Spring Beans`:-Any Java Object managed by Spring Framework.Spring uses IoC(Bean factory or Application Context) to manage these objects.It aims to simplify the complex Enterprise Java application development.
A Spring Bean is a plain old Java object (POJO) that is created and managed by a Spring container.


The IoC container includes:

1. BeanFactory
2. ApplicationContext

The org.springframework.beans and org.springframework.context packages are the basis for Spring Framework’s IoC container. The BeanFactory interface provides an advanced configuration mechanism capable of managing any type of object. ApplicationContext is a sub-interface of BeanFactory. It adds easier integration with Spring’s AOP features; message resource handling (for use in internationalization), event publication; and application-layer specific contexts such as the WebApplicationContext for use in web applications.



## Loading PROPERTIES file and Getting values.

```properties file
userName=collo
password = collo
```

```java

Java.util.Properties p = new Properties();
p.load("properties file");

String userName = p.getProperty("userName");
String password = p.getProperty("password");
```

- Instead of writing the Java code you can use **@PropertySource Annotation**. Used to load properties file.
When it is executed environment container is created.


```java
PropertySource(classpath:{filename path})
```

```xml
<bean class="org.springframework.beans.factory.config.PropertyPlaceHolderConfigurer">
 <property name="locations" value="classpath:app.properties"/>
<bean/>
```

- Reading/Getting value from properties file.

1. Using Environment Class Object - provided by spring.

- org.springframework.core.env.Environment class is configured as bean in spring container,this happens during app startup.To get the bean from container,
you use @Autowired

```file.properties
name=collo
pass=collo
```

```java

@PropertySource(classpath:file.properties)
public class Config{

    @Autowired
    Environment environment;

    environment.getProperty("name");

}

```

2. Using @Value annotation - Used

```java

@Value("${name}")
private String name;
```

- PropertySourcesPlaceholderConfigurer will recognize the @Value annotation.
- You can set deafult values in @Value(${propertyKey:value})

```java 
@Configuration
@PropertySource(classpath:"app.yaml")

@Bean
Environment env

@Bean
public PropertySourcesPlaceholderConfigurer propertySourcesPlaceholderConfigurer() {
    return new PropertySourcesPlaceholderConfigurer();
}
```

**Loading Properties file based on ENVIRONMENT/profiles**:- Environment could be:

1. Test
2. Development
3. Production

- Without spring:
Configure profile name(dev,test,prod) in server configuration.
i.e
catalina.properties
 environment=dev

During startup, all value wil be set to JVM
  System.setProperty("env");

- With Spring:
@Profile- used to get env value from jvm which was set during app startup.can be used in class,method level.

For standalone apps,set env using the options

1. System.setProperty("environment","dev")
2. spring.profiles.active=dev

For web apps:

1. Tomcat: catalina.properties-->env=dev
2. Jboss: server.xml----->env=dev

If we use docker,set env inside Dockerfile.

Whenever we set env values,during app startup it will be set in jvm.

Spring profiles provide a way to define envie=ronment-specific configurations within spring application.They allow developers to active certain beans or configurations based on the environment the application is running in,such as development,testing,or production.

Usage:

- `Defining profiles`:- Use te @Profile annotation on @Component,@Configuration or @ConfigurationPrperties classes to assocciate them with specific profile.

```java
@Configuration
@Profile("dev")
public class DevConfig{
    //Configuration for development environment
}
```

- `Activating profiles`:- Set the spring.profiles.active property in your application.properties or application.yaml file.

```java
spring.profiles.active=dev
```

Getting env values from JVM:-

1. Using System.getProperty("env")
   String env = System.getProperty("env")

2. Using profiles annotation,it internally uses System.getProperty()


------


## Spring Bean

Implements IoC container using `BeanFactory` and bean definitions.Works closely with with spring-core.

In Spring, objects aren’t responsible for finding or creating the other objects that they need to do their jobs. Instead, they’re given references to the objects that they collaborate with by the container.
The act of creating these associations between application objects is the essence of dependency injection (DI) and is commonly referred to as wiring.

Responsible for defining,creating,configuring and managing beans.
Contains classes for:-

1. Bean definitions(BeanDefinition)
2. Bean scopes(singleton,prototype,etc..)
3. Bean Lifecycle methods(@PostConstruct, @PreDestroy)
4. Bean creation
5. Dependency resolution
6. Property injection
7. XML parsing for <bean> elements.

Uses the core functionality from spring-core to perform actual dependency injection and bean lifecycle management.

There can be more than one bean in a Spring application. But all these Beans are instantiated and assembled by Spring container.Developer provides configuration metadata to Spring container for creating and managing the lifecycle of Spring Bean.
Its main purpose is Bean instantiation,configuration and lifecycle management.

**Bean Overview(Definitions)**:- A Spring IoC container manages one or more beans. These beans are created with the configuration metadata that you supply to the container (for example, in the form of XML <bean/> definitions,Java Annotations or Java code).
Within the container itself, these bean definitions are represented as BeanDefinition objects, which contain (among other information) the following metadata:

- A package-qualified class name: typically, the actual implementation class of the bean being defined.
- Bean behavioral configuration elements, which state how the bean should behave in the container (scope, lifecycle callbacks, and so forth).
- References to other beans that are needed for the bean to do its work. These references are also called collaborators or dependencies.
- Other configuration settings to set in the newly created object — for example, the size limit of the pool or the number of connections to use in a bean that manages a connection pool.

This metadata translates to a set of properties that make up each bean definition. The following table describes these properties:

1. Class - Instantiating Beans
2. Name - Naming Beans
3. Scope - Bean Scopes
4. Constructor arguments - Dependency Injection
5. Properties - Dependency Injection
6. Autowiring mode - Autowiring Collaborators
7. Lazy initialization mode - Lazy initialized Beans
8. Initialization method - Initialization Callbacks
9. Destruction method - Destruction Callbacks

**The BeanFactory**:- The BeanFactory is the actual container which instantiates, configures, and manages a number of beans. These beans typically collaborate with one another, and thus have dependencies between themselves.These dependencies are reflected in the configuration data used by the BeanFactory (although some dependencies may not be visible as configuration data, but rather be a function of programmatic interactions between beans at runtime).

A BeanFactory is represented by the interface org.springframework.beans.factory.BeanFactory, for which there are multiple implementations. The most commonly used simple BeanFactory implementation is org.springframework.beans.factory.xml.XmlBeanFactory. (This should be qualified with the reminder that ApplicationContexts are a subclass of BeanFactory, and most users end up using XML variants of ApplicationContext).

BeanFactory is the main class that helps in implementing Inversion of Control pattern in Spring. It is based on the factory design pattern. It separates the configuration and dependencies of an application from the rest of application code.
Implementations of BeanFactory like XmlBeanFactory class are used by applications built with Spring.

XMLBeanFactory is the most popular implementation of BeanFactory in Spring.
XMLBeanFactory is one of the most useful implementation of BeanFactory in Spring. This factory loads its beans based on the definitions mentioned in an XML file.
Spring container reads bean configuration metadata from an XML file and creates a fully configured application with the help of XMLBeanFactory class.

A Bean in Spring framework goes through following phases in its lifecycle.

1. Initialization and creation: Spring container gets the definition of Bean from XML file and instantiates the Bean. It populates all the properties of Bean as mentioned in the bean definition.
-2. Setting the Behavior of Bean: In case a Bean implements BeanNameAware interface, Spring uses setBeanName() method to pass the bean’s id. In case a Bean implements BeanFactoryAware interface, Spring uses setBeanFactory() to pass the BeanFactory to bean.
3. Post Processing: Spring container uses postProcesserBeforeInitialization() method to call BeanPostProcessors associated with the bean. Spring calls afterPropertySet() method to call the specific initialization methods.In case there are any BeanPostProcessors of a bean, the postProcessAfterInitialization() method is called.
4. Destruction: During the destruction of a bean, if bean implements DisposableBean, Spring calls destroy() method.

XMLBeanFactory implements BeanFactory(Mostly for standalone applications)

```java
BeanFactory factory = new XmlBeanFactory(new ClassPathresource("config.xml"));

ClassPathResource res = new ClassPathResource("beans.xml");
XmlBeanFactory factory = new XmlBeanFactory(res);
```

- Processes:
   1. Reads and validates xml config files
   2. If valid, the XMLBeanFactory creates inmemory logical partition in JVM
   3. It loads the springbean configs and place metadata for config in logical partition.
   4. Logical memory created is called IoC and returns reference of IoC container as BeanFactory
   5. You can access the object

The beanFactory searches the bean from the container by its id name if not found it throws exception and exits.If found it will load the class into JVM memory and instantiates the object of the class.

```java
Object obj = beanFactory.getBean("objectName")
```

In Spring, the objects that form the backbone of your application and that are managed by the Spring IoC container are called beans. A bean is an object that is instantiated, assembled, and otherwise managed by a Spring IoC container. Otherwise, a bean is simply one of many objects in your application. Beans, and the dependencies among them, are reflected in the configuration metadata used by a container.

**Beans Scope**:- It is lifecycle of a bean in container.i.e when bean is created till it is destroyed.
In general a Spring Bean is singleton. Evert bean has an attributenamed "singleton". If its value is true then bean is a singleton. If its value is false then bean is a prototype bean.By default the value of this attribute is true. Therefore, by default all the beans in spring framework are singleton in nature.

When the container dispenses a bean (either through wiring or as the result of a call to the container’s getBean() method) it’ll always hand out the exact same instance of the bean.

Spring framework support seven types of scopes for a Bean. Out of these only five scopes are available for a web-awareApplicationContext application:

- `singleton` - (Default) Scopes a single bean definition to a single object instance for each Spring IoC container.ONE OBJECT per CONTAINER per BEAN definition.Created during container startup and stay in container till it is destroyed(container life =singleton). Singleton scope is not same as Java singleton pattern(In java singleton is one object for all application).DEFAULT.
singleton: This is the default scope of a bean. Under this scope, there is a single object instance of bean per Spring IoC container.

NEVER inject protoype into singleton.

```xml
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
                           http://www.springframework.org/schema/beans/spring-beans.xsd">

    <bean id="mySingletonBean" class="com.kipcollo.beans.MySingletonBean" scope="singleton"/>
</beans>
```

- `prototype` - Scopes a single bean definition to any number of object instances.For every request new bean is created.Once object is completed it gets destroyed.Container doesn't hold  bean reference.Useful when bean is holding instance variable since it varies from each other.
prototype: Under this scope a single bean definition can have multiple object instances.
Never inject a short-lived bean into a longer lived bean.
- `request` - Scopes a single bean definition to the lifecycle of a single HTTP request. That is, each HTTP request has its own instance of a bean created off the back of a single bean definition. Only valid in the context of a web-aware Spring ApplicationContext.
request: In this scope, a single bean definition remains tied to the lifecycle of a single HTTP request. Each HTTP request will have
its own instance of a bean for a single bean definition. It is only valid in the context of a web-aware Spring ApplicationContext.
- `session` - Scopes a single bean definition to the lifecycle of an HTTP Session. Only valid in the context of a web-aware Spring ApplicationContext.
session: Under this scope, a single bean definition is tied to the lifecycle of an HTTP Session. Each HTTP Session will have one instance of bean. It is also valid in the context of a web-aware Spring ApplicationContext.
- `application` - Scopes a single bean definition to the lifecycle of a ServletContext. Only valid in the context of a web-aware Spring ApplicationContext.
application: This scope, limits a single bean definition to the lifecycle of a ServletContext. It is also valid in the context of a web-aware Spring ApplicationContext.
- `globalSession` - This scope, ties a single bean definition to the lifecycle of a global HTTP Session. It is generally valid in a Portlet context. It is also valid in the context of a web-aware Spring ApplicationContext.
- `websocket` - Scopes a single bean definition to the lifecycle of a WebSocket. Only valid in the context of a web-aware Spring ApplicationContext.
When you create a bean definition, you create a recipe for creating actual instances of the class defined by that bean definition. The idea that a bean definition is a recipe is important, because it means that, as with a class, you can create many object instances from a single recipe.
websocket: In this scope, a single bean definition is tied to the lifecycle of a WebSocket. It is also valid in the context of a web-aware Spring ApplicationContext.

In configuration xml, we can specify the scope of bean in its definition. This is used by container to decide the scope of bean in Spring.
When declaring a <bean> in Spring, you have the option of declaring a scope for that bean.
E.g.

```xml
<bean id="userService" class="com.um.UserService" scope="prototype"/>
```

In general, we use prototype scope for all stateful beans and singleton scope for stateless beans.Since a stateless bean does not maintain any state, we can use the same object instance again and again. Singleton scope bean serves the same purpose.
In a stateful bean, there is a need to maintain the state in each request, it is necessary to use a new instance of object with each call. A Prototype scope bean ensures that we get a new instance each time we request for the object.

A Bean in Spring has two main groups of lifecycle methods.
- Initialization Callbacks: Once all the necessary properties of a Bean are set by the container, Initialization Callback methods are used for performing initialization work. A developer can implement method afterPropertiesSet() for this work.
- Destruction Callbacks: When the Container of a Bean is destroyed, it calls the methods in DisposableBean to do any cleanup work.There is a method called destroy() that can be used for this purpose to make Destruction Callbacks.
Recent recommendation from Spring is to not use these methods, since it can strongly couple your code to Spring code.

Spring framework allows developers to override the lifecycle methods of a Bean. This is used for writing any custom behavior for Bean.

A bean that is used as a property of another bean is known as Inner bean. It can be defined as a <bean/> element in <property/> or <constructor-arg/> tags.
It is not mandatory for an Inner bean to have id or a name. These are always anonymous.Inner bean does not need a scope. By default it is of prototype scope.

Spring promotes Dependency Injection (DI) in code. It gives support for injecting not only objects but also collection of objects.We can inject collections like- list, set, map etc. in Spring.Following tags can be used for this purpose:
1. <list> : This type is used for injecting a list of values. In a <list> duplicates are allowed.
2. <set> : This type is used for injecting a set of values. As per set property, duplicates are not allowed.
3. <map> : This type is used for injecting name-value pairs in form of map. Name and value can be of any type that is allowed for a map.
4. <props> : This type is used to inject a collection of String based name-value. It is like a properties file.

A Spring container is responsible for injecting dependencies between beans. This process of connecting beans is called wiring.Developer mentions in configuration file, the dependencies between beans. And Spring container reads these dependencies and wires the beans on creation.

**A bean’s life**:- In a traditional Java application, the lifecycle of a bean is simple. Java’s new keyword is used to instantiate the bean (or perhaps it’s deserialized) and it’s ready to use. Once the bean is no longer in use, it’s eligible for garbage collection.
In contrast, the lifecycle of a bean within a Spring container is more elaborate.A bean factory performs several setup steps before a bean is ready to use.

1. Spring instantiates the bean.
2. Spring injects values and bean references into the bean’s properties.
3. If the bean implements BeanNameAware, Spring passes the bean’s ID to the setBeanName() method.
4. If the bean implements BeanFactoryAware, Spring calls the setBeanFactory() method, passing in the bean factory itself.
5. If the bean implements ApplicationContextAware, Spring will call the setApplicationContext() method, passing in a reference to the enclosing application context.
6. If any of the beans implement the BeanPostProcessor interface, Spring calls their postProcessBeforeInitialization() method.
7. If any beans implement the InitializingBean interface, Spring calls their afterPropertiesSet() method. Similarly, if the bean was declared with an init-method, then the specified initialization method will be called.
8. If there are any beans that implement BeanPostProcessor, Spring will call their postProcessAfterInitialization() method.
9. At this point, the bean is ready to be used by the application and will remain in the application context until the application context is destroyed.
10. If any beans implement the DisposableBean interface, then Spring will call their destroy() methods. Likewise, if any bean was declared with a destroy method, then the specified method will be called.

An empty container isn’t much good by itself; it doesn’t contain anything unless you put something in it.
To achieve the benefits of Spring DI, we must wire our application objects into the Spring container.

```java
public interface Food{
   void type();
}

public class Pedigree implements Food{
   @Override
   public void type(){
      // impl
   }
}

public class Meat implements Food{
   @Override
   public void type(){
      // impl
   }
}

public class Dog{
   private Food food;

   public Dog(Food food){
      this.food = food;
   }

   public void eat(){
      this.food.type();
   }
}

public class DogOwner{
   private Dog dog;

   public DogOwner(Dog dog){
      this.dog = dog;
   }
}


public class Main{
   public  static void main(String args[]){
      BeanFacory factory = new XmlBeanFacory(new ClassPathResource("beans.xml"));
      DogOwner owner = (DogOwner) factory.getBean(DogOwner.class);
   }
}
```

```xml
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
                           http://www.springframework.org/schema/beans/spring-beans.xsd">

    <bean id="objectName" class="com.example.MyBean"/>
    <bean id="pedigree" class ="com.kipcollo.Pedigree"/>
    <bean id="dog" class="com.kipcollo.Dog">
      <constructor-arg ref="pedigree"/>
    </bean>
   <bean id="dogOwner" class="com.kipcollo.DogOwner">
      <constructor-arg ref="dog"/>
    </bean>
</beans>
```


------

## Spring Context 

This package builds on the beans package to add support for message sources and for the Observer design pattern, and the ability for application objects to obtain resources using a consistent API.
There is no necessity for Spring applications to depend on ApplicationContext or even BeanFactory functionality explicitly. One of the strengths of the Spring architecture is that application objects can often be configured without any dependency on Spring-specific APIs.

Builds on the core and beans modules.Provides a framework-style that manages the complete application lifecycle.
Introduces `ApplicationContext` an advanced container that supports:

1. Internatiolization(i18n).
2. Event propagation.
3. Resource Loading.
4. Annotation-based configuration(@ComponentScan,)

Integrates other services such as:
- Environment abstraction(profile,properties)
- support for Java EE features(JNDI, EJB integration)

Includes:

1. Application context
2. UI support
3. Validation
4. JNDI, EJB support & Remoting Mail

Provides the central interface(ApplicationContext) for Spring Application.

BeanFactory provides the configuration framework and basic functionality, and the ApplicationContext adds more enterprise-specific functionality. The ApplicationContext is a complete superset of the BeanFactory, and is used exclusively in this chapter in descriptions of Spring’s IoC container.
Several implementations of the ApplicationContext interface are supplied out-of-the-box with Spring. In standalone applications it is common to create an instance of ClassPathXmlApplicationContext or FileSystemXmlApplicationContext. While XML has been the traditional format for defining configuration metadata you can instruct the container to use Java annotations or code as the metadata format by providing a small amount of XML configuration to declaratively enable support for these additional metadata formats.

The interface org.springframework.context.ApplicationContext represents the Spring IoC container and is responsible for instantiating, configuring, and assembling the aforementioned beans.
ApplicationContext - While the beans package provides basic functionality for managing and manipulating beans, often in a programmatic way, the context package adds ApplicationContext, which enhances BeanFactory functionality in a more framework-oriented style.

The basis for the context package is the ApplicationContext interface, located in the org.springframework.context package.Deriving from the BeanFactory interface, it provides all the functionality of BeanFactory. To allow working in a more framework-oriented fashion, using layering and hierarchical contexts, the context package also provides the following:

- MessageSource, providing access to messages in, i18n-style
- Access to resources, such as URLs and files
- Event propagation to beans implementing the ApplicationListener interface
- Loading of multiple (hierarchical) contexts, allowing each to be focused on one particular layer, for example the web layer of an application 

**Application contexts and Resource paths**:- In a Spring application, an application context loads bean definitions and wires them together. The Spring application context is fully responsible for the creation of and wiring of the objects that make up the application. Spring comes with several implementations of its application context, each primarily differing only in how they load their configuration.

Constructing application context - An application context constuctor (for a specific application context type) generally takes a string or array of strings as the location path(s) of the resource(s) such as XML files that make up the definition of the context.
ApplcationContext extends BeanFactory and implements several classes:(Mostly standalone,web apps,I18n apps,AOP,Application Events).ApplicationContext in Spring can be implemented in one of the following ways:

1. `FileSystemXmlApplicationContext`: If we want to load the definitions of beans from an XML file then FileSystemXmlApplicationContext is used. The full path of XML bean configuration file is provided to the constructor.
2. `ClassPathXmlApplicationContext`: To loads the definitions of beans from an XML file in the CLASSPATH, we use ClassPathXmlApplicationContext. It is used for application context embedded in jars.
3. `WebXmlApplicationContext`: To provide configuration for a web application WebXmlApplicationContext is used. While the application is running, it is read only. But it can be reloaded if underlying application supports it.
4. `AnnotationConfigApplicationContext`: Loads a Spring application context from one or more Java-based configuration classes
5. `AnnotationConfigWebApplicationContext`: Loads a Spring web application context from one or more Java-based configuration classes

Loading an application context from the file system or from the classpath is similar to how you load beans into a bean factory. For example, here’s how you’d load a FileSystemXmlApplicationContext:

```java
ApplicationContext context = new FileSystemXmlApplicationContext("c:/foo.xml");
ApplicationContext ctx = new ClassPathXmlApplicationContext("conf/appContext.xml");

ApplicationContext context = new ClassPathXmlApplicationContext("config.xml")//XML based
ApplicationContext context = new AnnotationConfigApplicationContext("JavaConfig.class")//Java based config
```

Similarly, you can load an application context from within the application’s classpath using ClassPathXmlApplicationContext:

```java
ApplicationContext context = new ClassPathXmlApplicationContext("foo.xml");
```

In Spring we can specify configuration by using a file or classpath.
In FileSystemResource we have to give absolute path / relative path of Spring Configuration file spring-config.xml file.
In ClassPathResource Spring looks for Spring Configuration file spring-config.xml in ClassPath. Therefore, developer has to include spring-config.xml in classpath.
ClassPathResource looks for configuration file in CLASSPATH, whereas FileSystemResource looks for configuration file in file system.

Spring framework provides following five events for Context:
ContextRefreshedEvent:- Whenever ApplicationContext is initialized or refreshed, Spring publishes this event. We can also raise it by using refresh() method on ConfigurableApplicationContext interface.
ContextStartedEvent: When ApplicationContext is started using start() method on ConfigurableApplicationContext interface, ContextStartedEvent is published. We can poll database or restart any stopped application after receiving this event.
ContextStoppedEvent: Spring publishes this event when ApplicationContext is stopped using stop() method on ConfigurableApplicationContext interface. This is used for doing any cleanup work.
ContextClosedEvent: Once the ApplicationContext is closed using close() method, ContextClosedEvent is published. Once a context is closed, it is the last stage of its lifecycle. After this it cannot be refreshed or restarted.
RequestHandledEvent: This is a web specific event that informs to all beans that an HTTP request has been serviced.

The difference between using FileSystemXmlApplicationContext and ClassPathXmlApplicationContext is that FileSystemXmlApplicationContext will look for foo.xml in a specific location within the file system, whereas ClassPathXmlApplicationContext will look for foo.xml anywhere in the classpath (including JAR files).

A bean goes through several steps between creation and destruction in the Spring container. Each step is an opportunity to customize how the bean is managed in Spring.
With an application context in hand, you can retrieve beans from the Spring container by calling the context’s getBean() method.

ApplicationContext in Spring provides following benefits:

1. Bean factory methods: These are used to access application components
2. Load File Resources: It helps in loading file resources in a generic fashion
3. Publish Events: It enables publishing events to registered listeners
4. Internationalization Support: Ability to resolve messages to support internationalization
5. Parent Context: Ability to inherit from a parent context

Main differences between ApplicationContext and BeanFactory are:

1. Automatic BeanPostProcessor registration: BeanFactory does not support BeanPostProcessor registration. Whereas ApplicationContext support this.
2. Automatic BeanFactoryPostProcessor registration: BeanFactory also does not allow Automatic BeanFactoryPostProcessor registration. Whereas ApplicationContext allows this.
3. MessageSource access: BeanFactory is not convenient for MessageSource access. ApplicationContext is quite convenient for MessageSource access.
4. ApplicationEvent: We cannot publish ApplicationEvent with BeanFactory. But ApplicationContext provides ability to publish ApplicationEvent.

Spring documentation recommends using ApplicationContext in almost all the cases. ApplicationContext has all the functionality of BeanFactory.


`@Scope` - When used as a type-level annotation in conjunction with @Component, @Scope indicates the name of a scope to use for instances of the annotated type.

```java
@Component
@Scope("singleton")// @scope(ConfigurableBeanFactory.SCOPE_PROTOTYPE)
public class MySingletonBean {
    // Bean definition
}
```

```java
@Component
@Scope("application")
public class MyApplicationBean {
    // Bean definition
}
```

`Lazy Initialisation`:- Lazy initialisation could be;

1. Bean will not be initialized until reference/called by another bean.
2. Explicitly called from ApplicationContext.

@Lazy can be annotated with class level or method level.Can be used with @Autowire(introduced in Spring  3.0).It is used to create the object when first request comes instead of scan and create object during startup.Indicates whether a bean is to be lazily initialized.
Default scope of bean is singleton,Generally they are pre-initialised to discover errors in configuration.To initialize bean lazilly, we use @Lazy annotation in java config or lazy-init attribute in XML config app.If we want early initialisation,we use @Lazy(value="false")


**Bean configurations**:-

`XML-based Configuration`:- Defining Beans: Beans can be defined in an XML configuration file using the <bean> tag(`spring-config.xml`).

```xml
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
                           http://www.springframework.org/schema/beans/spring-beans.xsd">

    <bean id="objectName" class="com.example.MyBean"/>
    <bean id="pedigree" class ="com.kipcollo.Pedigree"/>
    <bean id="dog" class="com.kipcollo.Dog">
      <constructor-arg ref="dog"/>
    </bean>
</beans>
```

```java
ApplicationContext context = new ClassPathXmlApplicationContext("config.xml")//XML based
```

- Drawbacks of XML:-
   1. Need to learn xml to work with xml configurations.
   2. It is not type safety.Can't recognize error during compile time.
   3. Less readable.
   4. It has many configurations properties.
   5. Difficult to maintain.

To overcome these problems,we should use Java Config.


`Java-based Configuration`:- @Configuration: Indicates that a class declares one or more @Bean methods and may be processed by the Spring container to generate bean definitions and service requests.
Uses Java classes annotated with @Configuration and bean methods annotated with @Bean.

Defining a configuration class - The @Configuration annotation serves as a clue to Spring that this class will contain one or more Spring bean declarations. Those bean declarations are just methods that are annotated with @Bean.
- Using @Configuration - It declares a class as full configuration class.The class must be non-final and public.@Bean declares bean configuration inside configuration class.

```java
package com.springinaction.springidol;
import org.springframework.context.annotation.Configuration;
@Configuration
public class SpringIdolConfig {
   // Bean declaration methods go here
}
```

Declaring a simple bean:-

```java
@Bean
public Performer duke() {
   return new Juggler();
}
```

```java
@Configuration
public class BeansConfig {

    @Bean
    public Food food(){
        return new Pedigree();
    }

    @Bean
    public Dog dog(){
        return new Dog(food());
    }
}
```

@Bean: Indicates that a method produces a bean to be managed by the Spring container.

```java
ApplicationContext context = new AnnotationConfigApplicationContext("BeansConfig.class")//Java based config
```

@Configuration annotation - This annotation is used in a class to indicate that this is class is the primary source of bean definitions. This class can also contain inter-bean dependencies that are annotated by @Bean annotation.
Spring allows for using @Bean annotation on methods that are declared in classes not annotated with @Configuration. This is known as “lite” mode. In this mode, bean methods can be declared in a @Component or a plain java class without any annotation.In the “lite” mode, @Bean methods cannot declare inter-bean dependencies.
It is recommended that one @Bean method should not invoke another @Bean method in 'lite' mode.
Spring recommends that @Bean methods declared within @Configuration classes should be used for full configuration. This kind of full mode can prevent many bugs.


`Annotation-based Configuration`:- @ComponentScan: Configures component scanning directives for use with @Configuration classes.
Uses annotations such as @Component, @Autowired, @Configuration, and @Bean within Java classes.

```java
@Configuration
@ComponentScan(basePackages = "com.example")
public class AppConfig {
}
```

@Component: Indicates that a class is a Spring component.

```java
@Component
public class MyComponent {
}
```

@Autowired: Marks a constructor, field, setter method, or config method to be autowired by Spring's dependency injection facilities.

```java
public interface Food {
    String type();
}

@Component("meat")
@Primary
public class Meat implements Food{
    @Override
    public String type() {
        return "Meat";
    }
}

@Component("pedigree")
public class Pedigree implements Food{
    @Override
    public String type() {
        return "Pedigree";
    }
}

@Component
public class Dog {

    private final Food food;

    @Autowired
    public Dog(Food food) {
        this.food = food;
    }

    public void eat() {
        System.out.println("Dog is Eating " + food.type());
    }
}

AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);
Dog dog = (Dog)context.getBean("dog");
dog.eat();
```


**Dependency injection**:- Spring supports three types of dependency injection:

1. Constructor Injection: Dependencies are provided through a class constructor.

```java
@Component
public class MyService {
    private final MyRepository myRepository;

    @Autowired
    public MyService(MyRepository myRepository) {
        this.myRepository = myRepository;
    }
}
```

```xml
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
                           http://www.springframework.org/schema/beans/spring-beans.xsd">

    <bean id="myRepository" class="com.example.MyRepositoryImpl"/>

    <bean id="myService" class="com.example.MyService">
        <constructor-arg ref="myRepository"/>
    </bean>
</beans>
```

```java
@Configuration
public class AppConfig {
    
    @Bean
    public MyRepository myRepository() {
        return new MyRepositoryImpl();
    }

    @Bean
    public MyService myService(MyRepository myRepository) {
        return new MyService(myRepository);
    }
}
```

2. Setter Injection: Dependencies are provided through setter methods.

```java
@Component
public class MyService {
    private MyRepository myRepository;

    @Autowired
    public void setMyRepository(MyRepository myRepository) {
        this.myRepository = myRepository;
    }
}
```

```xml
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
                           http://www.springframework.org/schema/beans/spring-beans.xsd">

    <bean id="myRepository" class="com.example.MyRepositoryImpl"/>

    <bean id="myService" class="com.example.MyService">
        <property name="myRepository" ref="myRepository"/>
    </bean>
</beans>
```

```java
@Configuration
public class AppConfig {
    
    @Bean
    public MyRepository myRepository() {
        return new MyRepositoryImpl();
    }

    @Bean
    public MyService myService(Repository myRepository) {
        MyService myservice= new MyService();
        myService.setRepository(myRepository);
        return myService;
    }
}
```

We use `@Required annotation` to a property to check whether the property has been set or not.Spring container throws BeanInitializationException @Required annotated property is not set. if the When we use @Required annotation, we have to register RequiredAnnotationBeanPostProcessor in Spring config file.It is used to make dependency mandatory for setter injection.

3. Field Injection: Dependencies are provided directly to fields.
It is not recommended since unit testing will be hard as dependencies is hidden and doesn't support conditiond

```java
@Component
public class MyService {
    @Autowired
    private MyRepository myRepository;
}
```

Field injection is not directly supported in XML configuration. However, you can achieve similar functionality by using setter injection.

**Importing and mixing configurations**:- In a typical Spring application, you’re likely to need to use both automatic and explicit configuration.And even if you favor JavaConfig for explicit configuration, there may be times when XML configuration is the best choice.
Fortunately, none of the configuration options available in Spring are mutually exclusive. You’re free to mix component scanning and autowiring with JavaConfig and/or XML configuration.
The first thing to know about mixing configuration styles is that when it comes to autowiring, it doesn’t matter where the bean to be wired comes from. Autowiring considers all beans in the Spring container, regardless of whether they were declared in JavaConfig or XML or picked up by component scanning.

`Referencing XML configuration in JavaConfig`:- Pretend for a moment that CDPlayerConfig is getting unwieldy and you want to split it apart.What you could do is break out the BlankDisc bean from CDPlayerConfig into its own CDConfig class.
You need a wayto bring the two configuration classes together. One way is to import CDConfig from CDPlayerConfig using the @Import annotation

```java
@Configuration
@Import(CDConfig.class)
public class CDPlayerConfig{}
```

Or, better yet, you can leave @Import out of CDPlayerConfig and instead create a higher-level SoundSystemConfig that uses @Import to bring both configurations together:

```java
@Configuration
@Import({CDPlayerConfig.class, CDConfig.class})
public class SoundSystemConfig {
}
```

Now let’s suppose that (for whatever reason) you want to configure the BlankDisc bean in XML.With BlankDisc being declared in XML,you can have Spring load it it rest of Java-based configuration using the @ImportResource annotation.

```java
@Configuration
@Import(CDPlayerConfig.class)
@ImportResource("classpath:cd-config.xml")
public class SoundSystemConfig {
}
```

`Referencing JavaConfig in XML configuration`:- In XML, you can use the <import> element to split up the XML configuration.

```xml
<import resource="cd-config.xml" />
```

The <import> element only works to import other XML configuration files, and there isn’t an XML element whose job it is to import JavaConfig classes.To import a JavaConfig class into an XML configuration,you use the the <bean> element.

```xml
<bean class="soundsystem.CDConfig" />
```

**Minimizing XML and Java configuration in Spring**:- We have declared beans using the <bean> element and inject <bean> with values using either the <constructor-arg> or <property> element or using the annotation `@Configuration` and `@Bean`. That’s all well and good for a small application where you only have a handful of beans. But as your application grows, so will the amount of XML or Java configuration you’ll write.

Fortunately, Spring offers a few tricks to help cut down on the amount of XML and Java configuration required:

1. Autowiring helps reduce or even eliminate the need for <property> and <constructor-arg> elements by letting Spring automatically figure out how to wire bean dependencies.
2. Autodiscovery takes autowiring a step further by letting Spring figure out which classes should be configured as Spring beans, reducing the need for the <bean> element.

When used together, autowiring and autodiscovery can dramatically reduce the amount of XML Spring configuration. Often you’ll need only a handful of lines of XML, regardless of how many beans are in your Spring application context.


`Automatically wiring bean properties(Autowiring)` When it comes to automatically wiring beans with their dependencies, Spring has a lot of clues to work from. As a result, Spring provides four flavors of autowiring:
- byName—Attempts to match all properties of the autowired bean with beans that have the same name (or ID) as the properties. Properties for which there’s no matching bean will remain unwired.
- byType—Attempts to match all properties of the autowired bean with beans whose types are assignable to the properties. Properties for which there’s no matching bean will remain unwired.
- constructor—Tries to match up a constructor of the autowired bean with beans whose types are assignable to the constructor arguments.
- autodetect—Attempts to apply constructor autowiring first. If that fails, byType will be tried.

Each of these options has its pros and cons.
Default autowiring - If you find yourself putting the same autowire attribute on every bean in your application context (or even most of them), you can simplify things by asking Spring to apply the same autowiring style to all beans that it creates. All you need to do is add a default-autowire attribute to the root <beans> element:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.springframework.org/schema/beans
        http://www.springframework.org/schema/beans/spring-beans-3.0.xsd"
    default-autowire="byType">
</beans>
```

By default, default-autowire is set to none, indicating that no beans should be autowired unless they’re individually configured for autowiring with the autowire attribute.

Autowiring is a feature of Spring in which container can automatically wire/connect the beans by reading the configuration file.
Developer has to just define “autowire” attribute in a bean.Spring resolves the dependencies automatically by looking at this attribute of beans that are autowired.

There are five modes of Autowiring supported by Spring framework:
- no: This is default setting for Autowiring. In this case, we use “ref” mode to mention the explicit bean that is being referred for wiring. E.g. In this example Employee bean refers Manager bean.

```xml
<bean id="employee" class="com.dept.Employee">
   <property name="manager" ref="manager" />
</bean>
<bean id="manager" class="com.dept.Manager" />
```

- byName: In this case, Spring container tries to match beans by name during Autowiring. If the name of a bean is same as the name of bean referred in autowire byname, then it automatically wires it.E.g. In following example, Manager bean is wired to Employee bean by Name.

```xml
<bean id="employee" class="com.dept.Employee" autowire="byName" />
<bean id="manager" class="com.dept.Manager" />
```

- byType: In this case, Spring container check the properties of beans referred with attribute byType. Then it matches the type of bean and wires. If it finds more than one such bean of that type, it throws a fatal exception. E.g. In following example, Manager bean is wired by type toEmployee bean.

```xml
<bean id="employee" class="com.dept.Employee" autowire="byType" />
<bean id="manager" class="com.dept.Manager" />
```

- constructor: In this case, Spring container looks for byType attribute in constructor argument. It tries to find the bean with exact name. If it finds more than one bean of same name, it throws fatal exception.This case is similar to byType case.E.g. In following example “constructor” mode is used for autowiring.

```xml
<bean id="employee" class="com.dept.Employee" autowire="constructor" />
<bean id="manager" class="com.dept.Manager" />
```

- autodetect: This is an advanced mode for autowiring. In this case, by default Spring tries to find a constructor match. If it does not find constructor then it uses autowire by Type.E.g. This is an example of autodetect Autowiring.

```xml
<bean id="employee" class="com.dept.Employee" autowire="autodetect" />
<bean id="manager" class="com.dept.Manager" />
```

Autowiring is a great feature in Spring. It can be used in most of the cases. But there are certain scenarios in which Autowiring may not work.
1. Explicit wiring: Since Autowiring is done by Spring, developer does not have full control on specifying the exact class to be used. It is preferable to use Explicit wiring in case of full control over wiring.
2. Primitive Data types: Autowiring does not allow wiring of properties that are based on primitive data types like- int, float etc.Spring allows injecting null or empty String values.


`Wiring with annotations`:- Since Spring 2.5, one of the most interesting ways of wiring beans in Spring has been to use annotations to automatically wire bean properties. Autowiring with annotations isn’t much different than using the autowire attribute in XML. But it does allow for more fine-grained autowiring, where you can selectively annotate certain properties for autowiring.

Annotation wiring isn’t turned on in the Spring container by default. So, before we can use annotation-based autowiring, we’ll need to enable it in our Spring configuration. The simplest way to do that is with the <context:annotation-config> element from Spring’s context configuration namespace:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xmlns:context="http://www.springframework.org/schema/context"
xsi:schemaLocation="http://www.springframework.org/schema/beans
http://www.springframework.org/schema/beans/spring-beans-3.0.xsd
http://www.springframework.org/schema/context
http://www.springframework.org/schema/context/spring-context-3.0.xsd">
<context:annotation-config />
<!-- bean declarations go here -->
</beans>
```

<context:annotation-config> tells Spring that you intend to use annotation-based wiring in Spring. Once it’s in place you can start annotating your code to indicate that
Spring should automatically wire values into properties, methods, and constructors.

Spring 3 supports a few different annotations for autowiring:
1. Spring’s own @Autowired annotation
2. The @Inject annotation from JSR-330
3. The @Resource annotation from JSR-250

We can reduce the spring configuration code using the `@Component` and `@Autowired` annotations.

Using **@Autowired**:-

```java
@Autowired
public Instrumentalist(Instrument instrument) {
    this.instrument = instrument;
}

@Autowired
private Instrument instrument;

@Autowired
public void setInstrument(Instrument instrument) {
this.instrument = instrument;
}
```

There are a couple of circumstances that could keep @Autowired from getting its job done. Specifically, there must be exactly one bean that’s applicable for wiring into the @Autowired property or parameter. If there are no applicable beans or if multiple beans could be autowired, then @Autowired will run into some trouble.
Fortunately, there’s a way that we can help @Autowired out in those circumstances.

OPTIONAL AUTOWIRING - By default, @Autowired has a strong contract, requiring that the thing it annotates is wired. If no bean can be wired into the @Autowired-annotated property or argument,then autowiring fails (with a nasty NoSuchBeanDefinitionException). That may be what you want—to have Spring fail early when autowiring goes bad rather than later with a NullPointerException.
But it’s also possible that the property being wired is truly optional and a null value is acceptable. In that case, you can configure optional autowiring by setting
@Autowired’s required attribute to false. For example:

```java
@Autowired(required=false)
private Instrument instrument;
```

`Addressing ambiguity in autowiring`:- Autowiring is a huge help because it reduces the amount of explicit configuration necessary to assemble application components.
But autowiring only works when exactly one bean matches the desired result.When there’s more than one matching bean, the ambiguity prevents Spring from autowiring the property, constructor argument, or method parameter.

```java
@Autowired
public void setDessert(Dessert dessert) {
   this.dessert = dessert;
}

@Component
public class Cake implements Dessert { ... }

@Component
public class Cookies implements Dessert { ... }

@Component
public class IceCream implements Dessert { ... }
```

Because all three implementations are annotated by @Component, they’re all picked up during component-scanning and created as beans in the Spring application context.
Then, when Spring tries to autowire the Dessert parameter in setDessert(), it doesn’t have a single, unambiguous choice.
Spring offers a couple of options. You can declare one of the candidate beans as the primary choice, or you can use qualifiers to help Spring narrow its choices to a single candidate.

Designating a primary bean - When declaring beans, you can avoid autowiring ambiguity by designating one of the candidate beans as a primary bean. In the event of any ambiguity, Spring will choose the primary bean over any other candidate beans.
You can express that favorite choice in Spring using the @Primary annotation. @Primary can be used either alongside @Component for beans that are component-scanned or alongside @Bean for beans declared in Java configuration.
@Primary- Indicates that a bean should be given preference when multiple candidates are qualified to autowire a single-valued dependency.

```java
@Component
@Primary
public class IceCream implements Dessert { ... }

@Bean
@Primary
public Dessert iceCream() {
return new IceCream();
}
```

If you’re configuring your beans in XML, you’re not left out. The <bean> element has a primary attribute to specify a primary bean:

```xml
<bean id="iceCream" class="com.desserteater.IceCream" primary="true" />
```

No matter how you designate a primary bean, the effect is the same.

Qualifying autowired beans - The limitation of primary beans is that @Primary doesn’t limit the choices to a single unambiguous option. It only designates a preferred option. When there’s more than one primary, there’s not much else you can do to narrow the choices further.
In contrast, Spring’s qualifiers apply a narrowing operation to all candidate beans, ultimately arriving at the single bean that meets the prescribed qualifications. If ambiguity still exists after applying all qualifiers, you can always apply more qualifiers to narrow the choices further.
The @Qualifier annotation is the main way to work with qualifiers. It can be applied alongside @Autowired or @Inject at the point of injection to specify which bean you want to be injected.
@Qualifier annotation to mark a bean as ready for auto wiring. This annotation is used along with @Autowired annotation to specify the exact bean for auto wiring by Spring container.

```java
@Autowired
@Qualifier("iceCream")
public void setDessert(Dessert dessert) {
   this.dessert = dessert;
}
```

Applying standards-based autowiring with **@Inject**: In an effort to unify the programming model among the various dependency injection frameworks, the Java Community Process recently published the Dependency Injection for Java specification. Known in the Java Community Process as JSR-330 or more commonly as at inject, this specification brings a common dependency injection model to Java. As of Spring 3, Spring supports the at inject model.2
The centerpiece of JSR-330 is the @Inject annotation. This annotation is an almost complete drop-in replacement for Spring’s @Autowired annotation. So, instead of using the Spring-specific @Autowired annotation, you might choose to use @Inject on the instrument property:

```java
@Inject
public void setDessert(Dessert dessert) {
   this.dessert = dessert;
}
```

Just like @Autowired, @Inject can be used to autowire properties, methods, and constructors. Unlike @Autowired, @Inject doesn’t have a required attribute. Therefore,
@Inject-annotated dependencies are expected to be fulfilled, failing with an exception if they’re not.


QUALIFYING @INJECTED PROPERTIES - like @Autowired, the @Inject annotation is prone to ambiguous bean definitions. @Inject’s answer to the @Qualifier annotation is the @Named annotation.
The @Named annotation works much like Spring’s @Qualifier, as you can see here:

```java
@Inject
@Named("iceCream")
public void setDessert(Dessert dessert) {
   this.dessert = dessert;
}
```

The key difference between Spring’s @Qualifier and JSR-330’s @Named is one of semantics. Whereas @Qualifier helps narrow the selection of matching beans (using the bean’s ID by default), @Named specifically identifies a selected bean by its ID.

Using expressions with annotation injection - As long as you’re using annotations to autowire bean references into your Spring beans, you may want to also use annotations to wire simpler values. Spring 3.0 introduced @Value, a new wiring annotation that lets you wire primitive values such as int,boolean, and String using annotations.

```java
@Value("Eruption")
private String song;
```


`Automatically discovering beans`:- When you added <context:annotation-config> to your Spring configuration, you told Spring that you wanted it to honor a certain set of annotations in the beans that you declared and to use those beans to guide bean wiring. Even though <context:annotation-config> can go a long way toward eliminating most uses of <property> and <constructor-arg> elements from your Spring configuration, you still must explicitly declare beans using <bean>.

The <context:component-scan> element does everything that <context:annotation-config> does, plus it configures Spring to automatically discover beans and declare them for you.Most (or all) of the beans in your Spring application can be declared and wired without using <bean>.
To configure Spring for autodiscovery, use <context:component-scan> instead of <context:annotation-config>:

```xml
<beans xmlns="http://www.springframework.org/schema/beans"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xmlns:context="http://www.springframework.org/schema/context"
xsi:schemaLocation="http://www.springframework.org/schema/beans
    http://www.springframework.org/schema/beans/spring-beans-3.0.xsd
    http://www.springframework.org/schema/context
    http://www.springframework.org/schema/context/spring-context-3.0.xsd">

    <context:component-scan
        base-package="com.springinaction.springidol">
    </context:component-scan>
</beans>
```

The <context:component-scan> element works by scanning a package and all of its subpackages, looking for classes that could be automatically registered as beans in the Spring container. The base-package attribute tells <context:component-scan> the package to start its scan from.

Component scanning isn’t turned on by default, however. You’ll still need to write an explicit configuration to tell Spring to seek out classes annotated with @Component and to create beans from them.

```java
package soundsystem;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan(basePackages="com.kipcollo","com.collo")
@ComponentScan(basePackageClasses={Demo.class,A.class})
public class CDPlayerConfig {
}
```

componentscan is the process of spring looking for identifing presence of @Component annotation and then create objects.
@ComponentScan - Configures component scanning directives for use with @Configuration classes.Either basePackageClasses() or basePackages() (or its alias value()) may be specified to define specific packages to scan. If specific packages are not defined, scanning will occur recursively beginning with the package of the class that declares this annotation.It is disabled by default.
If it was enabled by default, then spring has to search in every class in classpath which could be many classes.It will take so much of processing time on scanning.
If the class does not have @Component,the @ComponentScan will still scan @Bean.i.e some features does not have @Component e.g DataSource,JdbcTemplate only use @Bean.

Annotating beans for autodiscovery - By default, <context:component-scan> looks for classes that are annotated with one of a handful of special stereotype annotations:
1. @Component—A general-purpose stereotype annotation indicating that the class is a Spring bean.
2. @Controller—Indicates that the class defines a Spring MVC controller
3. @Repository—Indicates that the class defines a data repository
4. @Service—Indicates that the class defines a service
5. Any custom annotation that is itself annotated with @Component

```java
package com.springinaction.springidol;
import org.springframework.stereotype.Component;
@Component
public class Guitar implements Instrument {
    public void play() {
        System.out.println("Strum strum strum");
   }
}
```

When Spring scans the com.springinaction.springidol package, it’ll find that Guitar is annotated with @Component and will automatically register it in Spring. By
default, the bean’s ID will be generated by camel-casing the class name. In the case of Guitar that means that the bean ID will be guitar.

```java
@Component("eddie")
public class Instrumentalist implements Performer {
// ...
}
```

In this case, we’ve specified a bean ID as a parameter to @Component. The bean ID would’ve been “instrumentalist,” but to keep it consistent with the previous examples,we’ve explicitly named it eddie.

Filtering component-scans:- As it turns out, <context:component-scan> is flexible with regard to how it scans for bean candidates. By adding <context:include-filter> and/or <context:exclude- filter> subelements to <context:component-scan>, you can tweak component-scanning behavior to your heart’s content.

Spring allows for Java-based configuration in which a developer can specify configuration by using Java-based annotations. This feature was introduced in Spring 3.0.
You can use annotations like- @Configuration, @Bean, @Import and @DependsOn in Java classes for specifying the configuration.

From Spring 2.5 version it is possible to provide configuration by using annotation.To turn this configuration on, we need <context:annotation-config/> in spring XML file. to mention
Now developer can use annotations like @Required, @Autowired, @Qualifier etc. in a class file to specify the configuration for beans.Spring container can use this information from annotation for creating and wiring the beans.

To use Annotation based wiring, we need to turn on Annotation based configuration in Spring.By default, Annotation based configuration is switched off in Spring. To turn it is we can specify <context:annotation-config/> element in Spring config file. Once it is turned on, we can use @Autowired annotation or @Required annotation in a Java class for wiring in Spring.

We can use @Autowired annotation to auto wire a bean on a setter method, constructor or a field. @Autowired auto wiring is done by matching the data type.
Before using @Autowired annotation we have to register AutowiredAnnotationBeanPostProcessor. This can be done by including <context:annotation-config /> in bean configuration file.

RequiredAnnotationBeanPostProcessor can be enabled in two ways in Spring:
1. Include <context:annotation-config />
2. Add Spring context and <context:annotation-config /> in bean mconfiguration file.
E.g.

```xml
<beans
...
xmlns:context="http://www.springframework.org/schema/context"
...
   http://www.springframework.org/schema/context
   http://www.springframework.org/schema/context/spring-context-2.5.xsd">
...
<context:annotation-config />
...
</beans>
```

Include RequiredAnnotationBeanPostProcessor configuration file in bean E.g.

```xml
<beans xmlns="http://www.springframework.org/schema/beans"
   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
   xsi:schemaLocation="http://www.springframework.org/schema/beans
   http://www.springframework.org/schema/beans/spring-beans-2.5.xsd">

   <bean class="org.springframework.beans.factory.annotation.RequiredAnnotationBeanP">
      <bean id="BookBean" class="com.foo.Book">
      <property name="action" value="price" />
      <property name="type" value="1" />
   </bean>
   <bean id="AuthorBean" class="com.foo.Author">
      <property name="name" value="Rowling" />
   </bean>
</beans>
```

**Stereotype Annotations**:- Are used to tag classes for which spring beans needs to be automatically created in application context(Spring IoC container).Define in the packge **org.springframework.stereotype**.

It includes:

- `@Component` :Any annotation meta-annotated with @Component is considered a stereotype annotation which makes the annotated class eligible for classpath scanning.If you don't give a name, then default will be the class name.

```java
@Component("component")
public class MyComponent {
    public String hello(){
        return "Hello Component";
    }
}
```

- `@Controller`: Indicates that an annotated class is a "Controller" (e.g. a web controller).Serves as a specialization of @Component, allowing for implementation classes to be autodetected through classpath scanning

```java
@Controller
public class MyService {

    public String hello(){
        return "Hello controller";
    }
}
```

- `@Service`: This annotation is a general-purpose stereotype.Serves as a specialization of @Component, allowing for implementation classes to be autodetected through classpath scanning.May also indicate that a class is a "Business Service Facade"

```java
@Service
public class MyService {

    public String hello(){
        return "Hello Service";
    }
}
```

- `@Repository`:  "a mechanism for encapsulating storage, retrieval, and search behavior which emulates a collection of objects".This annotation is a general-purpose stereotype.A class thus annotated is eligible for Spring DataAccessException translation when used in conjunction with a PersistenceExceptionTranslationPostProcessor.serves as a specialization of @Component, allowing for implementation classes to be autodetected through classpath scanning.

```java
@Repository
public class MyRepo {

    public String hello(){
        return "Hello Repo";
    }
}
```

- `@Indexed`: Indicate that the annotated element represents a stereotype for the index. The index allows retrieving the candidate components (i.e. fully qualified name) based on a stereotype. This annotation instructs the generator to index the element on which the annotated element is present or if it implements or extends from the annotated element. The stereotype is the fully qualified name of the annotated element.

```java
@SpringBootApplication
public class DemoApplication {

    public static void main(String[] args) {
     SpringApplication.run(DemoApplication.class, args);
     MyService cust=context.getBean(MyService.class);
    System.out.println(cust.hello());

    Customer custController = context.getBean(Customer.class);
    System.out.println(custController.hello());

    MyRepo custRepo = context.getBean(MyRepo.class);
     System.out.println(custRepo.hello());

     MyComponent comp = (MyComponent) context.getBean("component");
     System.out.println(comp.hello());
 }

}
```

NOTE:

1. Manual Config: Developer writes config manually
 - xml config
 - java based config

2. Automatic Config
- Using Spring Annotations.

```java
public interface Food{
   void type();
}

@Component("pedigree")
public class Pedigree implements Food{
   @Override
   public void type(){
      // impl
   }
}

@Component("meat")
public class Meat implements Food{
   @Override
   public void type(){
      // impl
   }
}

@Component
public class Dog{
   private Food food;

   @Autowired
   public Dog(Food food){
      this.food = food;
   }

   public void eat(){
      this.food.type();
   }
}

@Component
public class DogOwner{
   private Dog dog;

   @Autowired
   public DogOwner(Dog dog){
      this.dog = dog;
   }
}

@Configuration
@ComponentScan(basePackages ="")
public class AppConfig{}

public class Main{
   public  static void main(String args[]){
      AnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext(AppConfig.class);
      DogOwner owner = ctx.getBean(DogOwner.class);
   }
}
```

**Environment & Profiles**:-

`Profiles`:- In version 3.1, Spring introduced bean profiles. To use profiles, you must gather all the varying bean definitions into one or more profiles and then make sure the proper profile is active when your application is deployed in each environment.
In Java configuration, you can use the @Profile annotation to specify which profile a bean belongs to.

```java
@Configuration
@Profile("dev")
public class DevelopmentProfileConfig {}

@Configuration
@Profile("prod")
public class ProductionProfileConfig {}
```

In Spring 3.1, you could only use the @Profile annotation at the class level. Starting with Spring 3.2, however, you can use @Profile at the method level, alongside the @Bean annotation. This makes it possible to combine both bean declarations into a single configuration class.

```java
@Configuration
public class DataSourceConfig {
@Bean(destroyMethod="shutdown")
@Profile("dev")
//impl

@Bean
@Profile("prod")
}
```

`Activating profiles`:- Spring honors two separate properties when determining which profiles are active: spring.profiles.active and spring.profiles.default. If spring.profiles.active is set, then its value determines which profiles are active. But if spring.profiles.active isn’t set, then Spring looks to spring.profiles.default. If neither spring.profiles.active nor spring.profiles.default is set, then there are no active profiles, and only those beans that aren’t defined as being in a profile are created.
There are several ways to set these properties:
1. As initialization parameters on DispatcherServlet
2. As context parameters of a web application
3. As JNDI entries
4. As environment variables
5. As JVM system properties
6. Using the @ActiveProfiles annotation on an integration test class

You’ve probably noticed that the word profiles is plural in spring.profiles.active and spring.profiles.default. This means you can activate multiple profiles at the same time by listing the profile names, separated by commas.

```java
 System.setProperty("spring.profiles.active", "dev");
 ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);
DogOwner dogOwner = (DogOwner) context.getBean("dogOwner");
dogOwner.dogName();
```

**Conditional beans**:- Suppose you want one or more beans to be configured if and only if some library is available in the application’s classpath. Or let’s say you want a bean to be created only if a certain other bean is also declared. Maybe you want a bean to be created if and only if a specific environment variable is set.
Until Spring 4, it was difficult to achieve this level of conditional configuration, but Spring 4 introduced a new @Conditional annotation that can be applied to @Bean methods. If the prescribed condition evaluates to true, then the bean is created. Otherwise the bean is ignored.

```java
@Bean
@Conditional(MagicExistsCondition.class)
public MagicBean magicBean() {
return new MagicBean();
}
```

As you can see, @Conditional is given a Class that specifies the condition—in this case, MagicExistsCondition. @Conditional comes paired with a Condition interface:

```java
public interface Condition {
   boolean matches(ConditionContext ctxt,AnnotatedTypeMetadata metadata);
}
```

The class given to @Conditional can be any type that implements the Condition interface. As you can see, it’s a straightforward interface to implement, requiring only that you provide an implementation for the matches() method. If the matches() method returns true, then the @Conditional-annotated beans are created. If matches() returns false, then those beans aren’t created.

**Runtime value injection**:- Sometimes hard-coded values are fine as in wiring beans with defined values. Other times, however, you may want to avoid hard-coded values and let the values be determined at runtime. For those cases,
Spring offers two ways of evaluating values at runtime:
1. Property placeholders
2. The Spring Expression Language (SpEL)

`Injecting external values`:-The simplest way to resolve external values in Spring is to declare a property source and retrieve the properties via the Spring Environment or using @Value annotation.

To load the p properties file,you use the following boilerplate code:

```java
Properties p = new Properties();
p.load("sample.properties")

String username = p.getProperty("username");
String password = p.getProperty("password");
```

Instead of doing all that you can use @PropertySource annotation.


```java
@Configuration
@PropertySource("classpath:/com/soundsystem/app.properties")
public class ExpressiveConfig {
@Autowired
Environment env;

env.getProperty("disc.title");
env.getProperty("dis.artist");
}
```

@PropertySource references a file named app.properties in the classpath.
The properties file is loaded into Spring’s Environment, from which it can be retrieved later.

RESOLVING PROPERTY PLACEHOLDERS - Spring has always supported the option of externalizing properties into a properties file and then plugging them into Spring beans using placeholder values. In Spring wiring, placeholder values are property names wrapped with ${ ... }.

```xml
<bean id="sgtPeppers"
class="soundsystem.BlankDisc"
c:_title="${disc.title}"
c:_artist="${disc.artist}" />
```

When relying on component-scanning and autowiring to create and initialize your application components, there’s no configuration file or class where you can specify the placeholders. Instead, you can use the @Value annotation.
In order to use placeholder values, you must configure either a PropertyPlaceholderConfigurer bean or a PropertySourcesPlaceholderConfigurer bean. Starting with Spring 3.1, PropertySourcesPlaceholderConfigurer is preferred because it resolves placeholders against the Spring Environment and its set of property sources.

```java
@Bean
public
static PropertySourcesPlaceholderConfigurer placeholderConfigurer() {
return new PropertySourcesPlaceholderConfigurer();
}
```


------


## Spring Expression Language

Spring 3 introduced Spring Expression Language (SpEL), a powerful yet succinct way of wiring values into a bean’s properties or constructor arguments using expressions
that are evaluated at runtime. Using SpEL, you can pull off amazing feats of bean wiring that would be much more difficult (or in some cases impossible) using other
wiring techniques.

SpEL has a lot of tricks up its sleeves, including the following:
1. The ability to reference beans by their IDs
2. Invoking methods and accessing properties on objects
3. Mathematical, relational, and logical operations on values
4. Regular expression matching
5. Collection manipulation

SpEL can also be used for purposes other than dependency injection. Spring Security, for example, supports defining security constraints using SpEL expressions. And if you’re using Thymeleaf templates as the views in your Spring MVC application, those templates can use SpEL expressions to reference model data.

SpEL expressions are framed with #{ ... }, much as property placeholders are framed with ${ ... }. What follows is possibly one of the simplest SpEL expressions you can write:
#{1}

Stripping away the #{ ... } markers, what’s left is the body of a SpEL expression,which is a numeric constant. It probably won’t surprise you much to learn that this
expression evaluates to the numeric value of 1.
Of course, you’re not likely to use such a simple expression in a real application.You’re more likely to build up more interesting expressions, such as this one:
#{T(System).currentTimeMillis()}

Ultimately this expression evaluates to the current time in milliseconds at the moment when the expression is evaluated. The T() operator evaluates java.lang.System as a
type so that the staticcurrentTimeMillis() method can be invoked.

SpEL expressions can also refer to other beans or properties on those beans. For example, the following expression evaluates to the value of the artist property on a
bean whose ID is sgtPeppers:

#{sgtPeppers.artist}

You can also refer to system properties via the systemProperties object:

#{systemProperties['disc.title']}

When injecting properties and constructor arguments on beans that are created via component-scanning, you can use the @Value annotation

```java
public BlankDisc(
   @Value("#{systemProperties['disc.title']}") String title,
   @Value("#{systemProperties['disc.artist']}") String artist) {
this.title = title;
this.artist = artist;
}
```

In XML configuration, you can pass in the SpEL expression to the value attribute of <property> or <constructor-arg>, or as the value given to a p-namespace or cnamespace entry. For example, here’s the XML declaration of the BlankDisc bean that has its constructor arguments set from a SpEL expression:

```xml
<bean id="sgtPeppers"
   class="soundsystem.BlankDisc"
   c:_title="#{systemProperties['disc.title']}"
   c:_artist="#{systemProperties['disc.artist']}" />
```
