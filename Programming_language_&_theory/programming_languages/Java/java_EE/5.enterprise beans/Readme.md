# Enterprise Beans

Enterprise beans are Java EE components that implement `Enterprise JavaBeans (EJB)` technology.EJB is POJO-based.
Enterprise JavaBeans (EJB) is a platform for building portable, reusable, and scalable business applications using the Java programming language.

EJB was inspired by the distributed computing ideas of technologies such as CORBA and was intended to add scalability to server-side applications.
EJB is dependent on, such as the Java Naming and Directory Interface (JNDI), Java Remote Method Invocation (RMI), or the Java Messaging Service (JMS).

From a developer’s point of view, an EJB is a piece of Java code that executes in a specialized runtime environment called the EJB container, which provides a
number of component services. The persistence services are provided by a specialized framework called the persistence provider.

Enterprise beans run in the `EJB container`, a runtime environment within the Application Server(EJB Container - GlassFish server). Although transparent to the application developer, the EJB container provides system-level services such as transactions and security to its enterprise beans. These services enable you to quickly build and deploy enterprise beans, which form the core of transactional Java EE applications.

EJB is a server-side middleware technology. This means that it must be integrated with other technologies to fulfill its mission.

- `POJO`:- This is a plain Java Object

```java
class Pojo{
    private String name;
    private int Id;

    public String toString(){
        return name + ";" + Id;
    }
}
```

- `Java Beans(JB)`:-
  
1. Must contain a constructor with no arguements.
2. Doesn't declare any public instance variables.
3. Must contain getters and setters methods for properties
4. It is common ,though not required, for Java bean to implement **Serializable Interfaces**.

NB: Serializable interface is a tagging interface in java.io package that indicates that a class contains get, set and is methods that another class can use to read and write an object's instance to and from persistent database.As result some servlet engines can save and restore this objects if necessary i.e Tomcat containers save objects's state before it shutdowns and restore when it starts.

```java
class JavaBean implements Serializable{

    private String name;
    private int Id;

    //NoargsConstructor
    public JavaBean(){

    }

    //getters and setters
    public void setName(String name){
        this.name=name;
    }

    public String getName(){
        return name;
    }
}

```

`Enterprise Bean` - Written in the Java programming language, an enterprise bean is a server-side component that encapsulates the business logic of an application. The business logic is the code that fulfills the purpose of the application. 

Benefits of Enterprise Beans:-

1. Enterprise beans simplify the development of large, distributed applications because the EJB container provides system-level services to enterprise beans, the bean developer can concentrate on solving business problems. The EJB container, rather than the bean developer, is responsible for system-level services such as transaction management and security authorization.
2. The beans rather than the clients contain the application’s business logic, the client developer can focus on the presentation of the client. The client developer does not have to code the routines that implement business rules or access databases. As a result, the clients are thinner, a benefit that is particularly important for clients that run on small devices.
3. Enterprise beans are portable components, the application assembler can build new applications from existing beans. These applications can run on any compliant Java EE server provided that they use the standard APIs.
4. Open Java EE standard - EJB is a critical part of the Java EE standard.


You should consider using enterprise beans if your application has any of the following requirements:

1. The application must be scalable. To accommodate a growing number of users, you may need to distribute an application’s components across multiple machines. Not only can the enterprise beans of an application run on different machines, but also their location will remain transparent to the clients.
2. Transactions must ensure data integrity. Enterprise beans support transactions, the mechanisms that manage the concurrent access of shared objects.
3. The application will have a variety of clients. With only a few lines of code, remote clients can easily locate enterprise beans. These clients can be thin, various, and numerous.

EJB functions as both a component and a framework:-

`EJB as a component`:- Refers to the server-side components that you can use to build parts of your application, such as the business logic or persistence code. Many of us tend to associate the term component with developing complex and heavyweight CORBA, Microsoft COM+ code.

There are three types of EJB components: session beans, message-driven beans, and entities. Session beans and message-driven beans are used to implement business logic in an EJB application, and entities are used for persistence.

Components can be reusable.

`EJB as a framework`:- EJB components live in a container. Together, the components, or EJBs, and the container can be viewed as a framework that provides valuable services for enterprise application development.
The container provides the services(Transactions,Security,Persistence,Remoteability,Interceptors,Timers,State Management,Messaging) to the EJB components in a rather elegant new way: metadata annotations are used to preconfigure the EJBs by specifying the type of services to add when the container deploys the EJBs.

As a framework, the EJB container provides these kinds of common functionality as out-of-the-box services so that your EJB components can use them in your
applications.

EJB lets you turn your application into a web services with ease(service-oriented architecture (SOA) and interoperability).
The EJB framework is a standard Java technology with an open specification.


EJBs are regular Java objects that may be configured using metadata annotations.

## Layered architectures and EJB

Most enterprise applications contain a large number of components.
For server-side development, the dominant pattern is layered architectures. In a layered architecture, components are grouped into tiers. Each tier in the application has a well-defined purpose.

EJB allows you to build applications using two different layered architectures:- the traditional four-tier architecture and domain-driven design (DDD).

`Traditional four-tier layered architecture`:- In this architecture, 

1. The presentation layer is responsible for rendering the graphical user interface (GUI) and handling user input. The presentation layer passes down each request for application functionality to the business logic layer.
2. The business logic layer is the heart of the application and contains workflow and processing logic(defines the business rules).The business logic layer retrieves data from and saves data into the database by utilizing the persistence tier. 
3. The persistence layer provides a high-level object-oriented (OO) abstraction over the database layer(deals with interactions with the database.). 
4. The database layer typically consists of a relational database management system (RDBMS) like Oracle, DB2, or SQL Server.

The bean types called session beans and message-driven beans (MDBs) reside in and use the services in the business logic tier, and the bean types called entities reside in and use services in the persistence tier.

`Domain-driven design`:- DDD emphasizes that domain objects should contain business logic.Domain objects are known as entities in EJB 3.
The entities defined by EJB 3 Java Persistence API (JPA) support OO features, such as inheritance or polymorphism. It’s easy to implement a persistence object model with the EJB 3 JPA. More importantly, you can easily add business logic to your entities, so that implementing a rich domain model with EJB 3 is a trivial task.

Note, though, that many people don’t like adding complex business logic in the domain object itself and prefer creating a layer for procedural logic referred to as the service layer or application layer.The application layer is similar to the business logic layer of the traditional four-tier architecture, but is much thinner.


Whether you use the traditional four-tier architecture or a layered architecture with DDD, you can use entities to model domain objects, including modeling state and behavior.

## EJB types

Types of Enterprise Beans

1. Session - Performs a task for a client; optionally may implement a web service.
2. Message-Driven - Acts as a listener for a particular messaging type, such as the Java Message Service API.
3. Entities.

Session beans and message-driven beans (MDBs) are used to build business logic, and they live in the container, which manages these beans and provides services to them. Entities are used to model the persistence part of an application. Like the container, it is the persistence provider that manages entities. A persistence provider is pluggable within the container and is abstracted behind the Java Persistence API (JPA).

Note - Entity beans have been replaced by Java Persistence API entities.

A `session bean` encapsulates business logic that can be invoked programmatically by a client over local, remote, or web service client views. To access an application that is deployed on the server, the client invokes the session bean's methods. The session bean performs work for its client, shielding it from complexity by executing business tasks inside the server.

A session bean is invoked by a client for the purpose of performing a specific business operation, such as checking the credit history for a customer. The name session
implies that a bean instance is available for the duration of a “unit of work” and does not survive a server crash or shutdown.

It represents a single client inside the Application Server. To access an application that is deployed on the server, the client invokes the session bean’s methods. The session bean performs work for its client, shielding the client from complexity by executing business tasks inside the server.

A session bean is similar to an interactive session. A session bean is not shared; it can have only one client, in the same way that an interactive session can have only one user. Like an interactive session, a session bean is not persistent. (That is, its data is not saved to a database.) When the client terminates, its session bean appears to terminate and is no longer associated with the client.

A session bean is not persistent. (That is, its data is not saved to a database.)

A session bean can model any application logic functionality. There are two types of session beans: stateful and stateless.
State Management Modes:- There are three types of session beans: stateful, Singleton and stateless.

1. Stateful Session Beans - The state of an object consists of the values of its instance variables. In a stateful session bean, the instance variables represent the state of a unique client-bean session. Because the client interacts (“talks”) with its bean, this state is often called the conversational state.

The state is retained for the duration of the client-bean session. If the client removes the bean or terminates, the session ends and the state disappears. This transient nature of the state is not a problem, however, because when the conversation between the client and the bean ends there is no need to retain the state.
Stateless Session Beans.

A stateful session bean automatically saves bean state between client invocations without your having to write any additional code. A typical example of a
state-aware process is the shopping cart for a web merchant like Amazon.

2. Singleton: Single shared instance. Used for shared configuration or caching.

3. A stateless session bean does not maintain a conversational state with the client. When a client invokes the methods of a stateless bean, the bean’s instance variables may contain a state specific to that client, but only for the duration of the invocation. When the method is finished, the client-specific state should not be retained. Clients may, however, change the state of instance variables in pooled stateless beans, and this state is held over to the next invocation of the pooled stateless bean. Except during method invocation, all instances of a stateless bean are equivalent, allowing the EJB container to assign an instance to any client. That is, the state of a stateless session bean should apply accross all clients.

Because stateless session beans can support multiple clients, they can offer better scalability for applications that require large numbers of clients. Typically, an application requires fewer stateless session beans than stateful session beans to support the same number of clients.
stateless session beans do not maintain any state and model application services that can be completed in a single client invocation. You could build stateless
session beans for implementing business processes such as charging a credit card or checking customer credit history.
A stateless session bean can implement a web service, but other types of enterprise beans cannot.

When to Use Session Beans

In general, you should use a session bean if the following circumstances hold:

1. At any given time, only one client has access to the bean instance.
2. The state of the bean is not persistent, existing only for a short period (perhaps a few hours).
3. The bean implements a web service.

Stateful session beans are appropriate if any of the following conditions are true:

1. The bean’s state represents the interaction between the bean and a specific client.
2. The bean needs to hold information about the client across method invocations.
3. The bean mediates between the client and the other components of the application, presenting a simplified view to the client.
4. Behind the scenes, the bean manages the work flow of several enterprise beans.

To improve performance, you might choose a stateless session bean if it has any of these traits:

1. The bean’s state has no data for a specific client.
2. In a single method invocation, the bean performs a generic task for all clients. For example, you might use a stateless session bean to send an email that confirms an online order.

A session bean can be invoked either locally or remotely using Java RMI. A stateless session bean can be exposed as a web service.

A `message-driven bean` is an enterprise bean that allows Java EE applications to process messages asynchronously. It normally acts as a JMS message listener, which is similar to an event listener except that it receives JMS messages instead of events. The messages can be sent by any Java EE component (an application client, another enterprise bean, or a web component) or by a JMS application or system that does not use Java EE technology.Message-driven beans can process JMS messages or other kinds of messages.

MDBs process business logic.
MDBs are different in one important way: clients never invoke MDB methods directly. Instead, MDBs are triggered by messages sent to a messaging server, which enables sending asynchronous messages between system components. Some typical examples of messaging servers are IBM WebSphere MQ, SonicMQ, Oracle Advanced Queueing,
and TIBCO. MDBs are typically used for robust system integration or asynchronous processing.

An example of messaging is sending an inventory-restocking request from an automated retail system to a supply-chain management system.


`Entities and the Java Persistence API` - Persistence is the ability to have data contained in Java objects automatically stored into a relational database like Oracle, SQL Server, and DB2. Persistence in EJB 3 is managed by the JPA. It automatically persists the Java objects using a technique called object-relational mapping (ORM). ORM is essentially the process of mapping data held in Java objects to database tables using configuration. It relieves you of the task of writing low-level, boring, and complex JDBC code to persist objects into a database.

The frameworks that provide ORM capability to perform automated persistence are known as ORM frameworks.ORM framework performs transparent persistence by making use of object-relational mapping metadata that defines how objects are mapped to database tables.

In EJB 3 terms, a persistence provider is essentially an ORM framework that supports the EJB 3 Java Persistence API (JPA). The JPA defines a standard for

1. The creation of ORM configuration metadata for mapping entities to relational tables
2. The EntityManager API—a standard API for performing CRUD (create,read, update, and delete)/persistence operations for entities
3. The Java Persistence Query Language (JPQL), for searching and retrieving persisted application data.

Since JPA standardizes ORM frameworks for the Java platform, you can plug in ORM products like JBoss Hibernate, Oracle TopLink, or BEA Kodo as the underlying JPA “persistence provider” for your application.

## EJB

When you build a simple Java class, you need a Java Virtual Machine (JVM) to execute it. In a similar way to execute session beans and MDBs you need an EJB container, and to run your entities you need a persistence provider.

A `Java EE container` is an application server solution that supports EJB 3, a web container, and other Java EE APIs and services. BEA WebLogic Server, Sun Microsystems’s GlassFish,IBM WebSphere, JBoss Application Server, and Oracle Application Server 10g are examples of Java EE containers.

If you install a Java EE–compliant application server such as GlassFish, it will contain a preconfigured web container, EJB container, and a JPA provider. However, some vendors and open source projects may provide only a web container such as Tomcat or an EJB 3–compliant persistence provider such as Hibernate.These containers provide limited functionality compared to what you get with a complete Java EE 5 container.

Java EE container typically contains web and EJB containers and a persistence provider.The stateless session bean (Credit Check EJB) and stateful session bean (Cart EJB) are deployed and run in the EJB container. Entities are deployed and run within an EJB persistence provider and can be accessed by either web or EJB container component.

Enterprise JavaBeans (EJB) is a server-side component architecture that simplifies the process of building enterprise-class distributed component applications in Java. By using EJB, you can write scalable, reliable, and secure applications without writing your own complex distributed component framework. EJB is about rapid application development for the server side; you can quickly and easily construct server-side components in Java by leveraging a prewritten distributed infrastructure provided by the industry. EJB is designed to support application portability and reusability across any vendor’s enterprise middleware services.

