# Data Access

Concerned with data access and the interaction between the data access layer and the business or service layer.
The Data Access/Integration layer consists of the JDBC, ORM, OXM, JMS and Transaction modules.

1. `The JDBC module` provides a JDBC-abstraction layer that removes the need to do tedious JDBC coding and parsing of database-vendor specific error codes.
2. `The ORM module` provides integration layers for popular object-relational mapping APIs, including JPA, JDO, and Hibernate. Using the ORM package you can use all of these O/R-mapping frameworks in combination with all of the other features Spring offers, such as the simple declarative transaction management feature mentioned previously.
3. `The OXM module` provides an abstraction layer that supports Object/XML mapping implementations for JAXB, Castor, XMLBeans, JiBX and XStream.
4. `The Transaction module` supports programmatic and declarative transaction management for classes that implement special interfaces and for all your POJOs (plain old Java objects).


**Spring Data**:- Spring Data is a high-level abstraction layer over JPA (or other persistence technologies) that simplifies database access in Spring applications.

Key Features:

- Repositories: Predefined CRUD operations with minimal boilerplate.Example: JpaRepository, CrudRepository.
- Query Methods: Derive queries from method names (findByName, findByAgeGreaterThan).
- Integration with other persistence APIs like MongoDB, Cassandra, etc.

Key Components:

- JpaRepository: Extends JPA with additional features like pagination and sorting.
- Custom Queries: Supports JPQL, native SQL, and @Query annotations.

Use Case: Spring Data eliminates boilerplate code in Spring applications, making it easier to implement complex persistence logic.

**Spring Data**:- Spring Data eliminates boilerplate code in Spring applications, making it easier to implement complex persistence logic.
Spring Data’s mission is to provide a familiar and consistent, Spring-based programming model for data access while still retaining the special traits of the underlying data store.

It makes it easy to use data access technologies, relational and non-relational databases, map-reduce frameworks, and cloud-based data services. This is an umbrella project which contains many subprojects that are specific to a given database. The projects are developed by working together with many of the companies and developers that are behind these exciting technologies.
Spring comes with a family of data access frameworks that integrate with a variety of data access technologies.
Whether you’re persisting your data via direct JDBC, iBATIS, or an object relational mapping (ORM) framework such as Hibernate, Spring removes the tedium of data access from your persistence code. Instead, you can lean on Spring to handle the low-level data access work for you so that you can turn your attention to managing your application’s data.

Spring Data also supports several NoSQL databases, including MongoDB, Neo4j,and Redis. This not only includes support for automatic repositories, but also template-based data access and mapping annotations.

To avoid scattering persistence logic across all components in the application, it’s good to factor database access into one or more components that are focused on that task. Such components are commonly called data-access objects (DAOs) or repositories.
To avoid coupling the application to any particular data-access strategy, properly written repositories should expose their functionality through interfaces.

The service objects access the repositories through interfaces. This has a couple of positive consequences. First, it makes your service objects easily testable, because they’re not coupled to a specific data-access implementation. In fact you could create mock implementations of these data-access interfaces. That would
allow you to test your service object without ever having to connect to the database, which would significantly speed up your unit tests and rule out the chance of a test failure due to inconsistent data.

In addition, the data-access tier is accessed in a persistence technology–agnostic manner. The chosen persistence approach is isolated to the repository, and only the relevant data-access methods are exposed through the interface. This makes for a flexible application design and allows the chosen persistence framework to be swapped out with minimal impact on the rest of the application. If the implementation details of the data-access tier were to leak into other parts of the application, the entire application would become coupled with the data-access tier, leading to a rigid application design.

Features

- Powerful repository and custom object-mapping abstractions
- Dynamic query derivation from repository method names
- Implementation domain base classes providing basic properties
- Support for transparent auditing (created, last changed)
- Possibility to integrate custom repository code
- Easy Spring integration via JavaConfig and custom XML namespaces
- Advanced integration with Spring MVC controllers
- Experimental support for cross-store persistence

Main modules

1. Spring Data Commons - Core Spring concepts underpinning every Spring Data module.
2. Spring Data JDBC - Spring Data repository support for JDBC.
3. Spring Data R2DBC - Spring Data repository support for R2DBC.
4. Spring Data JPA - Spring Data repository support for JPA.
5. Spring Data KeyValue - Map based repositories and SPIs to easily build a Spring Data module for key-value stores.
6. Spring Data LDAP - Spring Data repository support for Spring LDAP.
7. Spring Data MongoDB - Spring based, object-document support and repositories for MongoDB.
8. Spring Data Redis - Easy configuration and access to Redis from Spring applications.
9. Spring Data REST - Exports Spring Data repositories as hypermedia-driven RESTful resources.
10. Spring Data for Apache Cassandra - Easy configuration and access to Apache Cassandra or large scale, highly available, data oriented Spring applications.
11. Spring Data for Apache Geode - Easy configuration and access to Apache Geode for highly consistent, low latency, data oriented Spring applications.

Community modules

1. Spring Data Aerospike - Spring Data module for Aerospike.
2. Spring Data ArangoDB - Spring Data module for ArangoDB.
3. Spring Data Couchbase - Spring Data module for Couchbase.
4. Spring Data Azure Cosmos DB - Spring Data module for Microsoft Azure Cosmos DB.
5. Spring Data Cloud Datastore - Spring Data module for Google Datastore.
6. Spring Data Cloud Spanner - Spring Data module for Google Spanner.
7. Spring Data DynamoDB - Spring Data module for DynamoDB.
8. Spring Data Elasticsearch - Spring Data module for Elasticsearch.
9. Spring Data Hazelcast - Provides Spring Data repository support for Hazelcast.
10. Spring Data Jest - Spring Data module for Elasticsearch based on the Jest REST client.
11. Spring Data Neo4j - Spring-based, object-graph support and repositories for Neo4j.
12. Oracle NoSQL Database SDK for Spring Data - Spring Data module for Oracle NoSQL Database and Oracle NoSQL Cloud Service.
13. Spring Data Vault - Vault repositories built on top of Spring Data KeyValue.
14. Spring Data YugabyteDB - Spring Data module for YugabyteDB distributed SQL database.

spring-context: The core Spring framework that provides dependency injection and context management.
spring-data-jpa: This is the Spring Data project that integrates JPA with Spring, enabling easier data access via repositories.
hibernate-core: Hibernate is the JPA implementation used by Spring Data JPA to manage the ORM (mapping between Java objects and database tables).
mysql-connector-java: The JDBC driver needed to connect Spring to a MySQL database.
spring-orm: Provides integration for ORM frameworks like Hibernate with Spring's transaction management.
dbcp2: Provides a connection pool for efficient handling of database connections.

These dependencies work together to provide an end-to-end solution for managing database operations in a Spring application, from connecting to the database to handling transactions and simplifying data access using JPA.


## Spring Data Annotations

Spring Data provides an abstraction over data storage technologies.Therefore, business logic code can be much more independent of underlying persistence implementation.It also simplifies handling of implementation-dependant details of data storage.

- @Transactional - When we want to configure transactional behaviour of a method

```java
@Transactional
void pay(){
    ---
}
```

If we apply to class level,it works on all methods inside the class.However, we can override its effects by applying it on a specific method.It has many configuration options.

- @NoRepositoryBean -
- @Param - We can pass named parameters to our queries using @Param

```java
@Query("FROM Person p WHERE p.name=:name")
Person findByName(@Param("name") String name);
```

We refer to parameter with the :name syntax

- @Id - It marks a field in a model class as the Primary Key

```java
class Person{
    @Id
    Long id;
}
```

It's implementation-independent,it makes a model class easy to use with multiple data store engines.

- @Transient - Used to mark a field in model class as transient.Hence the data storage engine won't read or write this field's value:

```java
class Person{
    @Transient
    int age;
}
```

Transient is implementation-independent which makes it convenient to use with multiple data stre implementations

- @CreatedBy,LastModifiedBy,@CreatedDate,@LastModifiedDate - We can audit our model classes with these annotatins.Spring automatically populaes the annotated fields with principal who created the object,last modifiedit and date of creation and lst modification.

```java
class Person{
    @CreatedBy
    User creator;
    @LastModifiedBy
    User modifier;
    @CreatedDate
    Date createdAt;
    @LastModifiedDate
    Date modifiedAt;
}
```

## Spring Data JPA Annotations

- @Query -We can provide JPQL implementation for repository method:

```java
@Query("SELECT COUNT(*) FROM Person p")
long getPersonCount();
```

We can use named parameters

```java
@Query("SELECT FROM Person p WHERE p.name =:name")
Person findByName(@Param("name") String name);
```

We can use nativeSQL queries,if we set nativeQuery argument to true.

```java
@Query(value="SELECT AVG(p.age) FROM Person p",nativeQuery=true)
int getAverageAge();
```

- @Procedure - We can easily call repository call stored procedures from repositories.

```java
@NamedStoredProcedureQueries({
    @NamedStoredProcedureQuery(
        name ="count_by_name",
        procedureName ="person.count_by_name",
        parameters =(
            @StoredProcedureParameter(
                mode =ParameterMode.IN,
                name ="name",
                type =String.class),
            @StoredProcedureParameter(
                mode =ParameterMode.OUT,
                name ="count",
                type =Long.class),
        )
    )
})
class Person{}
```

```java
@Procedure(name= "count_by_name")
long getCountByName(@Param("name") String name);
```

- @Lock - We can configure the lock mode when we execute a repository query method:

```java
@Lock(LockModeType.NONE)
@Query("SELECT COUNT(*)) FROM Person p")
long getPersonCount();
```

The available lock modes include: (READ,WRITE,OPTIMISTIC,OPTIMISTIC_FORCE_INCREMENT,PESSIMISTIC_READ,PESSIMISTIC_WRITE,PESSIMISTIC_FORCE_INCREMENT,NONE)

- @Modifying - We can modify data with a repository method with the annotation

```java
@Modifying
@Query("UPDATE Person p SET p.name =:name WHERE p.id= :id")
void changeName(@Param("id") long id, @Param("name") String name);
```

@EnabeJpaRepositories - To use JPA repositories,we have to indicate it to Spring.We can do this with @EnableJpaRepositories.NB: We have to use with @Configuration

```java
@Configuration
@enableJpaRepositories
class PersistenceJPAConfig{}
```

Spring will look for repositories in the sub packages of the configurations class.We can alter this behaviour with basePckages argument.

```java
@Configuration
@enableJpaRepositories(basePackages="com.kipcolo.models")
class PersistenceJPAConfig{}
```

## Templating data access

A template method defines the skeleton of a process.
A template method delegates the implementation-specific portions of the process to an interface. Different implementations of this interface define specific implementations of this portion of the process.

This is the same pattern that Spring applies to data access. No matter what technology you’re using, certain data-access steps are required. For example, you always need
to obtain a connection to your data store and clean up resources when you’re done.These are the fixed steps in a data-access process. But each data-access method you
write is slightly different. You query for different objects and update the data in different ways. These are the variable steps in the data-access process.

Spring separates the fixed and variable parts of the data-access process into two distinct classes: templates and callbacks. Templates manage the fixed part of the process,
whereas your custom data-access code is handled in callbacks.


Spring’s data-access template classes take responsibility for common data-access duties. For application-specific tasks, it calls back into a custom callback object.
Spring’s template classes handle the fixed parts of data access—controlling transactions, managing resources, and handling exceptions. Meanwhile, the specifics of data access as they pertain to your application—creating statements, binding parameters, and marshaling result sets—are handled in the callback implementation.

Spring comes with several data-access templates, each suitable for a different persistence mechanism.

1. jca.cci.core.CciTemplate - JCA CCI connections.
2. jdbc.core.JdbcTemplate - JDBC connections.
3. jdbc.core.namedparam.NamedParameterJdbcTemplate - JDBC connections with support for named parameters.
4. jdbc.core.simple.SimpleJdbcTemplate - JDBC connections, simplified with Java 5 constructs (deprecated in Spring 3.1)
5. orm.hibernate3.HibernateTemplate - Hibernate 3.x+ sessions.
6. orm.ibatis.SqlMapClientTemplate - iBATIS SqlMap clients.
7. orm.jdo.JdoTemplate - Java Data Object implementations
8. orm.jpa.JpaTemplate - Java Persistence API entity managers.


## Configuring a data source

Regardless of which form of Spring-supported data access you use, you’ll likely need to configure a reference to a data source. Spring offers several options for configuring data-source beans in your Spring application, including these:
1. Data sources that are defined by a JDBC driver.
2. Data sources that are looked up by JNDI.
3. Data sources that pool connections.

Recommended - Draws its connections from a connection pool(retrieve the pooled data source from an application server via JNDI.)

- `Using JDBC driver-based data sources`:- The simplest data source you can configure in Spring is one that’s defined through a JDBC driver. Spring offers three such data-source classes to choose from (all in the org.springframework.jdbc.datasource package):
    1. DriverManagerDataSource—Returns a new connection every time a connection is requested. Unlike DBCP’s BasicDataSource, the connections provided by DriverManagerDataSource aren’t pooled.
    2. SimpleDriverDataSource—Works much the same as DriverManagerDataSource except that it works with the JDBC driver directly to overcome class loading issues that may arise in certain environments, such as in an OSGi container.
    3. SingleConnectionDataSource—Returns the same connection every time a connection is requested. Although SingleConnectionDataSource isn’t exactly a pooled data source, you can think of it as a data source with a pool of exactly one connection.

Example on how you’d configure a DriverManagerDataSource bean:

```java
@Bean
public DataSource dataSource() {
    DriverManagerDataSource ds = new DriverManagerDataSource();
    ds.setDriverClassName("org.h2.Driver");
    ds.setUrl("jdbc:h2:tcp://localhost/~/spitter");
    ds.setUsername("sa");
    ds.setPassword("");

    return ds;
}
```

In XML, the DriverManagerDataSource can be configured as follows:

```xml
<bean id="dataSource"
    class="org.springframework.jdbc.datasource.DriverManagerDataSource"
    p:driverClassName="org.h2.Driver"
    p:url="jdbc:h2:tcp://localhost/~/spitter"
    p:username="sa"
    p:password=""
/>
```

The only significant difference with these data-source beans as compared to the pooling data-source beans is that because they don’t provide a connection pool, there are no pool configuration properties to set.Although these data sources are great for small applications and running in development, you should seriously consider the implications of using them in a production application. Because SingleConnectionDataSource has one and only one database connection to work with, it doesn’t work well in multithreaded applications and is best limited to use in testing. At the same time, even though DriverManagerDataSource and SimpleDriverDataSource are both capable of supporting multiple threads, they incur a performance cost for creating a new connection each time a connection is requested. Because of these limitations, I strongly recommend using pooled data sources.

- `Using a pooled data source`:- If you’re unable to retrieve a data source from JNDI, the next best thing is to configure a pooled data source directly in Spring. Although Spring doesn’t provide a pooled data source, plenty of suitable ones are available, including the following open source options:
    1. Apache Commons DBCP (http://jakarta.apache.org/commons/dbcp)
    2. c3p0 (http://sourceforge.net/projects/c3p0/)
    3. BoneCP (http://jolbox.com/)

Most of these connection pools can be configured as a data source in Spring in a way that resembles Spring’s own DriverManagerDataSource or SingleConnectionDataSource. For example, here’s how you might configure DBCP’s BasicDataSource:

```java
<bean id="dataSource" class="org.apache.commons.dbcp.BasicDataSource"
    p:driverClassName="org.h2.Driver"
    p:url="jdbc:h2:tcp://localhost/~/spitter"
    p:username="sa"
    p:password=""
    p:initialSize="5"
    p:maxActive="10"
/>
```

Or, if you prefer Java configuration, the pooled DataSource bean can be declared like this:

```java
@Bean
public BasicDataSource dataSource() {
    BasicDataSource ds = new BasicDataSource();
    ds.setDriverClassName("org.h2.Driver");
    ds.setUrl("jdbc:h2:tcp://localhost/~/spitter");
    ds.setUsername("sa");
    ds.setPassword("");
    ds.setInitialSize(5);
    ds.setMaxActive(10);

    return ds;
}
```


- `Using JNDI data sources`:- Spring applications are often deployed to run in a Java EE application server such as WebSphere or JBoss, or even a web container like Tomcat. These servers allow you to configure data sources to be retrieved via JNDI. The benefit of configuring data sources in this way is that they can be managed completely external to the application, allowing the application to ask for a data source when it’s ready to access the database.Moreover, data sources managed in an application server are often pooled for greater performance and can be hot-swapped by system administrators.

With Spring, you can configure a reference to a data source that’s kept in JNDI and wire it into the classes that need it as if it were just another Spring bean. The <jee:jndi-lookup> element from Spring’s jee namespace makes it possible to retrieve any object, including data sources, from JNDI and make it available as a Spring bean. For example, if your application’s data source were configured in JNDI, you might use <jee:jndi-lookup> like this to wire it into Spring:

```xml
<jee:jndi-lookup id="dataSource" jndi-name="/jdbc/SpitterDS" resource-ref="true" />
```

The jndi-name attribute is used to specify the name of the resource in JNDI. If only the jndi-name property is set, then the data source will be looked up using the name given as is. But if the application is running in a Java application server, you’ll want to set the resource-ref property to true so that the value given in jndi-name will be prepended with java:comp/env/.
Alternatively, if you’re using Java configuration, you can use JndiObjectFactoryBean to look up the DataSource from JNDI:

```java
@Bean
public JndiObjectFactoryBean dataSource() {
    JndiObjectFactoryBean jndiObjectFB = new JndiObjectFactoryBean();
    jndiObjectFB.setJndiName("jdbc/SpittrDS");
    jndiObjectFB.setResourceRef(true);
    jndiObjectFB.setProxyInterface(javax.sql.DataSource.class);

    return jndiObjectFB;
}
```

- `Using an embedded data source`: An embedded database runs as part of your application instead of as a separate database server that your application connects to. Although it’s not very useful in production settings, an embedded database is a perfect choice for development and testing purposes. That’s because it allows you to populate your database with test data that’s reset every time you restart your application or run your tests.Spring’s jdbc namespace makes configuring an embedded database simple.


---------------

## Transaction Management(Transaction Module)

The Spring Framework provides a consistent abstraction for transaction management that delivers the following benefits:
1. A consistent programming model across different transaction APIs, such as Java Transaction API (JTA), JDBC, Hibernate, and the Java Persistence API (JPA).
2. Support for declarative transaction management.
3. A simpler API for programmatic transaction management than complex transaction APIs, such as JTA.
4. Excellent integration with Spring’s data access abstractions.

Transaction Management module of Spring framework supports all of ORM frameworks as well as JDBC.

What is a Transaction in Spring Data JPA?

A transaction is a mechanism used to ensure that a set of operations either all succeed or all fail, preserving data consistency. In the context of Spring Data JPA, a transaction is a sequence of operations (such as database CRUD operations) that are executed as a single unit of work.
Why are Transactions Important?

    Atomicity: A transaction ensures that all database operations are treated as a single unit. If one operation fails, none of the operations will be committed to the database.
    Consistency: Transactions ensure that the database remains in a consistent state before and after the transaction is executed.
    Isolation: Transactions ensure that concurrent transactions do not interfere with each other.
    Durability: Once a transaction is committed, its effects are permanent.

Spring and Transaction Management

In Spring, transaction management is handled via the Spring Transaction Management API. Spring provides both programmatic and declarative transaction management. Declarative transaction management is commonly used in Spring Data JPA as it is simple and requires minimal code.
Types of Transaction Management in Spring

    Programmatic Transaction Management:
        Transactions are managed using the PlatformTransactionManager API. This requires manual handling of transaction start, commit, and rollback.
    Declarative Transaction Management:
        This is done using annotations (@Transactional) or XML configuration.
        In Spring Data JPA, declarative transactions are much more commonly used, as it allows for cleaner, more readable code.

Using @Transactional in Spring Data JPA

The @Transactional annotation is the primary mechanism for handling transactions declaratively in Spring. You can apply it at the method level or the class level.
1. @Transactional on Methods

Applying @Transactional to a method means that all database operations inside the method will be executed within a single transaction. If an exception occurs, the transaction will be rolled back.

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Transactional
    public void updateUserInfo(Long userId, String newName, String newEmail) {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        user.setName(newName);
        user.setEmail(newEmail);
        userRepository.save(user);
    }
}

    @Transactional: Ensures that the updateUserInfo method will run within a single transaction. If an exception occurs, all changes will be rolled back.

2. @Transactional on Classes

You can also apply @Transactional at the class level. This means all methods in that class will participate in transactions.

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void updateUserInfo(Long userId, String newName, String newEmail) {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        user.setName(newName);
        user.setEmail(newEmail);
        userRepository.save(user);
    }

    public void deleteUser(Long userId) {
        userRepository.deleteById(userId);
    }
}

    @Transactional at the class level: This means that all methods in this class are transactional by default. You can override this behavior on a per-method basis if needed.

Key Attributes of @Transactional

The @Transactional annotation has several important attributes that allow you to configure the transaction behavior.

    propagation:
        Defines how the transaction should behave in the presence of an existing transaction.
        Common values:
            REQUIRED (default): If there’s an existing transaction, the method will join it. If no transaction exists, a new one will be created.
            REQUIRES_NEW: Always starts a new transaction, suspending the current one if necessary.
            SUPPORTS: Executes the method within the current transaction if one exists, or without a transaction if none exists.
            NOT_SUPPORTED: Executes the method without a transaction, suspending any existing transaction.

    Example:

@Transactional(propagation = Propagation.REQUIRES_NEW)
public void someMethod() {
    // Will start a new transaction regardless of whether one exists.
}

isolation:

    Defines the isolation level for the transaction (i.e., how the transaction should behave in the presence of concurrent transactions).
    Common values:
        READ_COMMITTED (default): Only reads committed data.
        READ_UNCOMMITTED: Allows reading uncommitted data.
        REPEATABLE_READ: Prevents non-repeatable reads within the transaction.
        SERIALIZABLE: The strictest isolation level, preventing any concurrent transactions.

Example:

@Transactional(isolation = Isolation.SERIALIZABLE)
public void someMethod() {
    // Ensures the transaction is executed with the strictest isolation level.
}

timeout:

    Specifies the maximum time (in seconds) that a transaction can run before it is automatically rolled back.

Example:

@Transactional(timeout = 5)  // 5 seconds
public void someMethod() {
    // Will be rolled back automatically if execution exceeds 5 seconds.
}

readOnly:

    Specifies whether the transaction is read-only, which can be used for optimization purposes.
    readOnly = true indicates that the method only reads data and does not modify the database.

Example:

@Transactional(readOnly = true)
public List<User> getAllUsers() {
    return userRepository.findAll();
}

rollbackFor:

    Defines which exceptions should cause a rollback of the transaction. By default, Spring only rolls back on unchecked exceptions (RuntimeException) and errors (Error).

Example:

    @Transactional(rollbackFor = Exception.class)
    public void someMethod() throws Exception {
        // Will rollback on checked exceptions as well.
    }

Rollback Behavior

By default, Spring only rolls back the transaction in case of unchecked exceptions (i.e., RuntimeException and Error). If you want to trigger a rollback for checked exceptions as well, you can use the @Transactional annotation's rollbackFor attribute.

Example: Rollback on SQLException (a checked exception)

@Transactional(rollbackFor = SQLException.class)
public void someMethod() throws SQLException {
    // Will rollback if SQLException occurs
}

Transaction Management with Multiple Data Sources

If you have multiple data sources in a Spring Boot application, Spring allows you to manage transactions across multiple databases using @Transactional combined with @Primary annotations for specifying the main data source, or using multiple PlatformTransactionManager beans.
Transaction Propagation Example

Consider a scenario where one method calls another method that is also transactional:

@Service
public class OrderService {

    @Autowired
    private PaymentService paymentService;

    @Transactional
    public void placeOrder(Order order) {
        // Step 1: Save the order
        orderRepository.save(order);

        // Step 2: Process payment
        paymentService.processPayment(order.getPayment());

        // Step 3: Update stock
        updateStock(order);
    }
}

@Service
public class PaymentService {

    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public void processPayment(Payment payment) {
        // Start a new transaction, even if one exists in the calling method
        paymentRepository.save(payment);
    }
}

    Propagation.REQUIRES_NEW: Ensures that the processPayment method runs in a new transaction, independent of the placeOrder method's transaction. Even if the outer method fails, the inner method's transaction (payment processing) will be committed or rolled back independently.

Conclusion

Transactions are critical for ensuring that database operations are executed reliably and consistently. In Spring Data JPA, you can manage transactions declaratively using the @Transactional annotation. It simplifies the handling of transactions, ensures data integrity, and helps maintain consistency, even in the presence of errors.

By combining transaction management with repository methods, you can control the boundaries of your data operations while keeping your code clean and easy to maintain.


Spring framework provides support for two types of Transaction
Management:
Programmatic: In this method, we have to manage Transaction by
programming explicitly. It provides flexibility to a developer, but it
is not easier to maintain.
Declarative: In this approach, we can separate Transaction
Management from the Application Business code. We can use
annotations or XML based configuration to manage the transactions
in declarative approach.


Main benefits provided by Spring Transaction Management are:
Consistent: By using Spring Transaction management, we can use
consistent programming model across different transaction APIs
like- JPA, JDBC, JTA, Hibernate, JPA, JDO etc.
Simplicity: Spring TM provides simple API for managing the
transaction programmatically.
Declarative: Spring also supports annotation or xml based
declarative transaction management.
Integration: Spring Transaction management is easier to integrate
with other data access abstractions of Spring.


In Spring, Declarative Transaction Management is the preferred
choice. This method is very less invasive and it has very less
impact in Application Business Logic.
Although Declarative method gives less flexibility than
Programmatic method, it is simpler to use and easier to maintain in
long run.


### Data Access with R2DBC

R2DBC ("Reactive Relational Database Connectivity") is a community-driven specification effort to standardize access to SQL databases using reactive patterns.


## Using Object-XML Mappers

Object-XML Mapping (O-X mapping for short) is the act of converting an XML document to and from an object. This conversion process is also known as XML Marshalling, or XML Serialization.


-------------

## Spring Data

[Spring Data’s](https://spring.io/projects/spring-data) mission is to provide a familiar and consistent, Spring-based programming model for data access while still retaining the special traits of the underlying data store.
**Repository abstraction**:- You do not write DAO classes. You define an interface. Spring generates the implementation at runtime.
The central interface in the Spring Data repository abstraction is Repository. It takes the domain class to manage as well as the identifier type of the domain class as type arguments. This interface acts primarily as a marker interface to capture the types to work with and to help you to discover interfaces that extend this one.

A `repository` in Spring Data JPA is an abstraction for the data access layer(DAO). It provides an easy way to interact with the database using methods for standard CRUD operations (Create, Read, Update, Delete) and additional custom queries. Repositories in Spring Data JPA are part of the Repository abstraction in the Spring Data project, which simplifies database access.
Repositories eliminate the need for boilerplate code like writing SQL queries or implementing DAO (Data Access Object) interfaces, letting developers focus on business logic.

Repositories: Predefined CRUD operations with minimal boilerplate. Example: JpaRepository, CrudRepository.
Query Methods: Derive queries from method names (findByName, findByAgeGreaterThan).
Integration with other persistence APIs like MongoDB, Cassandra, etc.

Spring Data repositories simplify database interactions by providing pre-implemented methods for CRUD operations, powerful query derivation capabilities, and extensibility through custom implementations. They are a key feature of Spring Data JPA, enabling developers to focus on business logic rather than writing boilerplate DAO code.
The Spring Data JPA interfaces are layered — offering useful tools for interacting with the database. Our primary @Entity types will have a repository interface declared that inherit from JpaRepository and any custom interfaces we optionally define.

- Hierarchy of Repositories in Spring Data - Spring Data repositories are organized into a hierarchy:-
    1. Repository<T, ID> - marker interface capturing the @Entity class and primary key type. Everything extends from this type.
    2. CrudRepository<T,ID> - depicts many of the CRUD capabilities.
    3. PagingAndSortingRepository<T,ID> - Spring Data provides some nice end-to-end support for sorting and paging. This interface adds some sorting and paging to the findAll() query method provided in CrudRepository.
    4. ListPagingAndSortingRepository<T,ID> - overrides the PagingAndSorting-based Iterable<T> return type to be a List<T>
    5. ListCrudRepository - overrides all CRUD-based Iterable<T> return types with List<T>
    6. QueryByExampleExecutor<T> - provides query-by-example methods that use prototype @Entity instances and configured matchers to locate matching results
    7. JpaRepository<T, ID> - brings together PagingAndSortingRepository,the and CrudRepository, QueryByExampleExecutor interfaces and adds several methods of its own. Unique to JPA,there are methods related to flush and working with JPA references.
    8. SongsRepositoryCustom/SongsRepositoryCustomImpl - we can write our own extensions for complex or compound — while taking advantage of an EntityManager and existing repository methods


- `Repository<T, ID>`:- The base interface for Spring Data repositories.It's a marker interface (empty interface) and is not meant to be used directly.Central repository marker interface. Captures the domain type to manage as well as the domain type's id type. General purpose is to hold type information as well as being able to discover interfaces that extend this one during classpath scanning for easy Spring bean creation.
Domain repositories extending this interface can selectively expose CRUD methods by simply declaring methods of the same signature as those declared in CrudRepository.

```java
public interface Repository<T, ID> {}
```

- `PagingAndSortingRepository<T, ID>`:- Extends CrudRepository.Adds methods for pagination and sorting.Repository fragment to provide methods to retrieve entities using the pagination and sorting abstraction. In many cases this will be combined with CrudRepository or similar or with manually added methods to provide CRUD functionality.
    1. Pagination: Use Pageable to define page size, page number, and sorting.
    2. Sorting: Use Sort to define sorting criteria. Determines the order which matching results are returned.

```java
public interface PagingAndSortingRepository<T, ID> extends Repository<T, ID> {
    Iterable<T> findAll(Sort sort);
    Page<T> findAll(Pageable pageable);
}

public interface ListPagingAndSortingRepository<T, ID> extends PagingAndSortingRepository<T, ID> {
    List<T> findAll(Sort);
}
```

Use Paging and Sorting for Collection Queries - All queries that return a collection should seriously consider adding paging and sorting parameters. Small test databases can become significantly populated production databases over time and cause eventual failure if paging and sorting are not applied to unbounded collection query return methods.

Sorting - Sorting can be performed on one or more properties and in ascending and descending order.

```java
List<Song> byReleased = songsRepository.findAll(Sort.by("released").descending().and(Sort.by("id").ascending()));
```

Sort.by() adds the extra SQL order by clause.

```sql
select ...
from reposongs_song s1_0
order by s1_0.released desc,s1_0.id
```

Paging - Paging permits the caller to designate how many instances are to be returned in a call and the offset to start that group (called a page or slice) of instances.

Example:

The snippet below shows an example of using one of the factory methods of Pageable to create a PageRequest definition using page size (limit), offset, and sorting criteria. If many pages are traversed — it is advised to sort by a property that will produce a stable sort over time during table modifications.

```java
Page<User> usersPage = userRepository.findAll(PageRequest.of(0, 10, Sort.by("name")));

//given
int offset = 0;
int pageSize = 3;
Pageable pageable = PageRequest.of(offset/pageSize, pageSize, Sort.by("released"));

//when
Page<Song> songPage = songsRepository.findAll(pageable);
```

Page Result:- The page result is represented by a container object of type Page<T>, which extends Slice<T>.
The PagingAndSortingRepository<T,ID> interface always returns a Page<T>, which will provide:
1. the sequential number of the page/slice
2. the requested size of the page/slice
3. the number of elements found
4. the total number of elements available in the database

- When to Use Which Interface:-
    1. CrudRepository: Use when you only need basic CRUD operations.
    2. PagingAndSortingRepository: Use when you need pagination and sorting.
    3. JpaRepository: Use when you need JPA-specific features like batch operations and saveAndFlush().

In most cases, developers use JpaRepository because it includes all the features of the other two.


- *Derived Query Methods*:- Spring Data JPA can automatically generate query methods based on the naming conventions of methods in the repository interface.This provides a more self-documenting version of similar queries we could have formed with query-by-example.

For example:

```java
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    List<User> findByName(String name);
    List<User> findByEmailContaining(String emailSubstring);
    List<User> findByAgeGreaterThan(int age);
}
```

findByName(String name): Finds users with a specific name.
findByEmailContaining(String emailSubstring): Finds users whose email contains a specific substring.
findByAgeGreaterThan(int age): Finds users older than a certain age.

Spring Data JPA parses the method names and translates them into appropriate JPQL or SQL queries.
The resulting SQL is the same as if we implemented it using query-by-example or JPA query language.

Query Keywords - Spring Data has several keywords, followed by By, that it looks for starting the interface method name. Those with multiple terms can be used interchangeably.
1. Query - find,read,get,query,search,stream.
2. Count - count.
3. Exists - exists.
4. Delete - delete, remove.
5. Distinct
6. Is,Equals
7. Not
8. IsNull,IsNotNull
9. StartingWith,EndingWith,Containing
10. LessThan,LessThanEqual,GreaterThan,GreaterThanEqual,Between
11. Before,After
12. In
13. OrderBy

- Multiple Fields - We can define queries using one or more fields using And and Or.

```java
List<Song> findByTitleNullAndReleasedAfter(LocalDate date);
```

The resulting SQL shows that a query is performed looking for null title and released after the LocalDate provided.

```sql
select ...
from reposongs_song s1_0
where s1_0.title is null and s1_0.released>?
```


- Custom Queries Using @Query:- If derived query methods are not sufficient, you can use the @Query annotation to write custom JPQL or native SQL queries.

```java
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends JpaRepository<User, Long> {
    @Query("SELECT u FROM User u WHERE u.name = :name")
    List<User> findUsersByName(@Param("name") String name);

    @Query(value = "SELECT * FROM user WHERE email LIKE %:email%", nativeQuery = true)
    List<User> findUsersByEmail(@Param("email") String email);
}
```

JPQL Query: Defined with JPQL (Java Persistence Query Language).
Native Query: Defined with native SQL (nativeQuery = true).

- Pagination and Sorting:- Spring Data JPA provides support for pagination and sorting through the PagingAndSortingRepository and JpaRepository interfaces.

```java
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

public interface UserRepository extends JpaRepository<User, Long> {
    Page<User> findAll(Pageable pageable);
    List<User> findAll(Sort sort);
}
```


- Custom Repository Implementations:- You can define custom methods and provide your own implementations by extending your repository interface.

Example:

Define a custom repository interface:

```java
public interface CustomUserRepository {
    List<User> findUsersCustomLogic();
}
```

Implement the interface:

```java
@Repository
public class CustomUserRepositoryImpl implements CustomUserRepository {
    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public List<User> findUsersCustomLogic() {
        String jpql = "SELECT u FROM User u WHERE u.customField = 'customValue'";
        return entityManager.createQuery(jpql, User.class).getResultList();
    }
}
```

Combine it with your repository:

```java
public interface UserRepository extends JpaRepository<User, Long>, CustomUserRepository {
    }
```

Now, UserRepository has both standard JPA methods and custom methods.

- `save`
    1. The save() method allows us to save an entity to DB.Saving an entity acn be performed with CrudRepository.save(..) method.It persists or merges the given entity by using underlying JPA EntityManager.If the entity has not been persisted,Spring Data JPA saves the entity with a call to the entityManager.persist(..) method.Otherwise,it calls the entityManager.merge(..) method.
    2. The saveAll() method allows us to save multiple entities to table.Belongs to CrudRepository.It returns a list of Iteraable objects.
- `Retrieve Data`:
    1. The findById() method allows us to get or retrieve an entity based on a given id(Primary Key) from the Database,It belongs to CrudRepository interface.It returns Optional of type Entity
    2. The findAll() method allows us to get or retrieve all the entities from database table.Belongs to CrudRepository.It returns list of Iterable objects.
- `Delete`
    1. The deleteById() method allows us to delete an entity by id from the database table.Belongs to CrudRepository.It returns void.
    2. The delete() method allows us to delete an entity from the database table.Belongs to CrudRepository.Returns void.
    3. The deleteAll() allows us to delete all the entities from database table.Belongs to CrudRepository.It returns void.
- `count` - The count() method allows us to count the number of records that exists in database table.Belongs to CrudRepository.It returns long(numbers of records)
- `Exist` - The existsById() method allows us to check if the entity exixts with a given id in database table.Belongs to CrudRepository.It returns a Boolean(true or false).



## NoSQL

### MongoDB

MongoDB is one of the most popular open source document databases available.Spring Data MongoDB brings MongoDB to Spring applications in three ways:
1. Annotations for object-to-document mapping
2. Template-based database access with MongoTemplate
3. Automatic runtime repository generation

Spring Data MongoDB offers automatic repository generation for MongoDB-based data access.
Spring Data MongoDB also offers annotations to map Java objects to documents.(Spring Data JPA doesn’t need to offer such annotations for JPA because the JPA specification itself defines object-to-relational mapping annotations.) Moreover, Spring Data MongoDB provides for template-based MongoDB data access for several common document manipulation tasks.


`Enabling MongoDB`:- In order to effectively work with Spring Data MongoDB, you’re going to need a few essential beans in your Spring configuration. First, you’ll need to configure a MongoClient bean to be able to access the MongoDB database. You’ll also need a MongoTemplate bean to be able to perform template-based data access against the database.
Optionally, but desirably, you’ll want to enable Spring Data MongoDB’s automatic repository generation.

```java
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.core.MongoFactoryBean;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.repository.config;
import com.mongodb.Mongo;
@Configuration
@EnableMongoRepositories(basePackages="orders.db")//Enable MongoDB repositories
public class MongoConfig {
   @Bean
   public MongoFactoryBean mongo() { //MongoClient bean
      MongoFactoryBean mongo = new MongoFactoryBean();
      mongo.setHost("localhost");
      return mongo;
   }
   @Bean
   public MongoOperations mongoTemplate(Mongo mongo) {//MongoTemplate bean
      return new MongoTemplate(mongo, "OrdersDB");
   }
}  
```

Rather than declare those beans directly, the configuration class could extend AbstractMongoConfiguration and override its getDatabaseName() and mongo() methods.

```java
@Configuration
@EnableMongoRepositories("orders.db")
public class MongoConfig extends AbstractMongoConfiguration {
   @Override
   protected String getDatabaseName() {
      return "OrdersDB";
   }
   @Override
   public Mongo mongo() throws Exception {
      return new MongoClient();
   }
}
```

If your MongoDB server is running on a different server, you can specify that when you create MongoClient:

```java
public Mongo mongo() throws Exception {
return new MongoClient("mongodbserver");
}
```

It’s also possible that your MongoDB server is listening on a port other than the default (27017). In that case, you should also specify the port when creating MongoClient:

```java
public Mongo mongo() throws Exception {
return new MongoClient("mongodbserver", 37017);
}
```

And if your MongoDB server is running in a production setting, I’d hope that you have authentication enabled. In that case, you’ll need to provide your application’s credentials in order to access the database.

```java
@Autowired
private Environment env;

@Override
public Mongo mongo() throws Exception {
   MongoCredential credential =
      MongoCredential.createMongoCRCredential(
         env.getProperty("mongo.username"),"OrdersDB",env.getProperty("mongo.password").toCharArray());
      return new MongoClient(new ServerAddress("localhost", 37017),Arrays.asList(credential));
}
```

Spring Data MongoDB can also be configured in XML.


`Spring Data Mongo Annotations`:- MongoDB doesn’t come with its own object-to-document mapping annotations. Spring Data MongoDB seized the opportunity to fill that gap with a handful of annotations that you can use to map your Java types to MongoDB documents.

- @Document - This annotation marks a class domain object that we want to persist to database.

```java
@Document
class User{}
```

It allows us to choose name of collection we want to use

```java
@Document(collection="user")
class User{}
```

- @Field - We can configure the name of a field we want to use when MongoDB persists the document

```java
@Document(collection="user")
class User{

    @Field
    String emailAddress;
}
```

- @Query - We can provide a finder query on a MongoDB repository method:

```java
@Query("{'name': ?0}")
List<User> findUserByName(String name);
```

- @EnableMongoRepositories - To use MongoDB repositories,we have to indicate it to spring.We can do this with @EnableMongoRepositories

```java
@Configuration
@EnableMongoRepositories
class MongoConfig{}
```

Spring will look for repositories in the sub packages of the configurations class.We can alter this behaviour with basePckages argument.

```java
@Configuration
@EnableMongoRepositories(basePackages ="com.kipcollo.repository")
class MongoConfig{}
```


`Accessing MongoDB with MongoTemplate`: You’ve already configured a MongoTemplate bean, either explicitly or by extending AbstractMongoConfiguration in your configuration class. All you need to do is inject it wherever it will be used:

```java
@Autowired
MongoOperations mongo;
```

MongoOperations is an interface that MongoTemplate implements, and it’s good form to not work with the concrete implementation directly, especially when it’s injected.
MongoOperations exposes several useful methods for working with a MongoDB document database.

```java
Order order = new Order();
... // set properties and add line items
mongo.save(order, "order");

String orderId = ...;
Order order = mongo.findById(orderId, Order.class);

List<Order> chucksOrders = mongo.find(Query.query(
Criteria.where("client").is("Chuck Wagon")), Order.class);

mongo.remove(order);
```

Typically, you’d inject MongoOperations into a repository class of your own design and use its operations to implement the repository methods. But if you don’t want to
bother writing the repository yourself, then Spring Data MongoDB can automatically generate a repository implementation for you at runtime.

`MongoDB repository`:- Create an interface that you can generate the repository implementation from and extend MongoRepository.

```java
public interface OrderRepository extends MongoRepository<Order, String> {
}
```

Because OrderRepository extends MongoRepository, it transitively extends the Repository marker interface.
Any interface that extends Repository will have an implementation automatically generated at runtime.

The MongoRepository interface has two parameters. The first is the type of @Document-annotated object that this repository deals with. The second is the type of
the @Id-annotated property.




### Redis

Redis is an advanced key-value store. It is similar to memcached but the dataset is not volatile, and values can be strings, exactly like in memcached, but also
lists, sets, and ordered sets. All this data types can be manipulated with atomic operations to push/pop elements, add/remove elements, perform server side
union, intersection, difference between sets, and so forth. Redis supports different kind of sorting abilities.

Spring Data Redis provides easy configuration and access to Redis from Spring applications. It offers both low-level and high-level abstractions for interacting with the store, freeing the user from infrastructural concerns.

Spring Data support for Redis contains a wide range of features:
• RedisTemplate and ReactiveRedisTemplate helper class that increases productivity when performing common Redis operations. Includes integrated serializa-
tion between objects and values.
• Exception translation into Spring’s portable Data Access Exception hierarchy.
• Automatic implementation of Repository interfaces, including support for custom query methods.
• Feature-rich Object Mapping integrated with Spring’s Conversion Service.
• Annotation-based mapping metadata that is extensible to support other metadata formats.
• Transactions and Pipelining.
• Redis Cache integration through Spring’s Cache abstraction.
• Redis Pub/Sub Messaging and Redis Stream Listeners.
• Redis Collection Implementations for Java such as RedisList or RedisSet.

Why Spring Data Redis

The Spring Framework is the leading full-stack Java/JEE application framework. It provides a lightweight container and a non-invasive programming model enabled by the
use of dependency injection, AOP, and portable service abstractions.
NoSQL storage systems provide an alternative to classical RDBMS for horizontal scalability and speed. In terms of implementation, key-value stores represent one of the
largest (and oldest) members in the NoSQL space.
The Spring Data Redis (SDR) framework makes it easy to write Spring applications that use the Redis key-value store by eliminating the redundant tasks and boilerplate
code required for interacting with the store through Spring’s excellent infrastructure support.

Redis Support High-level View: The Redis support provides several components.For most tasks, the high-level abstractions and support services are the best choice.Note that, at any point, you can move between layers.For example, you can get a low-level connection (or even the native library) to communicate directly with Redis.

Drivers

1. RedisConnection and RedisConnectionFactory
2. Configuring the Lettuce Connector
3. Configuring the Jedis Connector

One of the first tasks when using Redis and Spring is to connect to the store through the IoC container. To do that, a Java connector (or binding) is required. No matter the library you choose, you need to use only one set of Spring Data Redis APIs (which behaves consistently across all connectors). The
org.springframework.data.redis.connection package and its RedisConnection and RedisConnectionFactory interfaces for working with and retrieving active connections to Redis

- RedisConnection and RedisConnectionFactory: RedisConnection provides the core building block for Redis communication, as it handles the communication with the Redis backend. It also automatically translates underlying connecting library exceptions to Spring’s consistent DAO exception hierarchy so that you can switch connectors without any code changes, as the operation semantics remain the same.

Active RedisConnection objects are created through RedisConnectionFactory . In addition, the factory acts as PersistenceExceptionTranslator objects,meaning that, once declared, they let you do transparent exception translation. For example, you can do exception translation through the use of the @Repository annotation and AOP.

If you need to share (stateful) Redis resources, like connections, across multiple Threads, for performance reasons or otherwise, then you should acquire the native connection and use the Redis client library (driver) API directly. Alternatively, you can use the RedisTemplate , which acquires and manages connections for operations (and Redis commands) in a Thread-safe manner. See documentation on RedisTemplate for more details.

Depending on the underlying configuration, the factory can return a new connection or an existing connection (when a pool or shared native connection is used).

The easiest way to work with a RedisConnectionFactory is to configure the appropriate connector through the IoC container and inject it into the using class.
Unfortunately, currently, not all connectors support all Redis features. When invoking a method on the Connection API that is unsupported by the underlying library, an
UnsupportedOperationException is thrown.

- Configuring the Lettuce Connector: Lettuce is a Netty-based open-source connector supported by Spring Data Redis through the org.springframework.data.redis.connection.lettuce package.

Add the following to the pom.xml files dependencies element:

```xml
<dependencies>
<!-- other dependency elements omitted -->
<dependency>
<groupId>io.lettuce</groupId>
<artifactId>lettuce-core</artifactId>
<version>6.3.2.RELEASE</version>
</dependency>
</dependencies>
```

The following example shows how to create a new Lettuce connection factory:

```java
@Configuration
class AppConfig {
@Bean
public LettuceConnectionFactory redisConnectionFactory() {
return new LettuceConnectionFactory(new RedisStandaloneConfiguration("server", 6379));
}
}
```

There are also a few Lettuce-specific connection parameters that can be tweaked. By default, all LettuceConnection instances created by the
LettuceConnectionFactory share the same thread-safe native connection for all non-blocking and non-transactional operations. To use a dedicated connection each
time, set shareNativeConnection to false . LettuceConnectionFactory can also be configured to use a LettucePool for pooling blocking and transactional
connections or all connections if shareNativeConnection is set to false .

The following example shows a more sophisticated configuration, including SSL and timeouts, that uses LettuceClientConfigurationBuilder :

```java
@Bean
public LettuceConnectionFactory lettuceConnectionFactory() {
LettuceClientConfiguration clientConfig = LettuceClientConfiguration.builder()
.useSsl().and()
.commandTimeout(Duration.ofSeconds(2))
.shutdownTimeout(Duration.ZERO)
.build();
return new LettuceConnectionFactory(new RedisStandaloneConfiguration("localhost", 6379), clientConfig);
}
```

Lettuce integrates with Netty’s native transports, letting you use Unix domain sockets to communicate with Redis. Make sure to include the appropriate native transport dependencies that match your runtime environment.

The following example shows how to create a Lettuce Connection factory for a Unix domain socket at /var/run/redis.sock :

```java
@Configuration
class AppConfig {
JAVA
@Bean
public LettuceConnectionFactory redisConnectionFactory() {
return new LettuceConnectionFactory(new RedisSocketConfiguration("/var/run/redis.sock"));
}
}
```

- Configuring the Jedis Connector: Jedis is a community-driven connector supported by the Spring Data Redis module through the org.springframework.data.redis.connection.jedis package.
Add the following to the pom.xml files dependencies element:

```xml
<dependencies>
<!-- other dependency elements omitted -->
<dependency>
<groupId>redis.clients</groupId>
<artifactId>jedis</artifactId>
<version>5.0.2</version>
</dependency>
</dependencies>
```

In its simplest form, the Jedis configuration looks as follow:

```java
@Configuration
class AppConfig {
@Bean
public JedisConnectionFactory redisConnectionFactory() {
return new JedisConnectionFactory();
}
}
```

For production use, however, you might want to tweak settings such as the host or password, as shown in the following example:

```java
@Configuration
class RedisConfiguration {
@Bean
public JedisConnectionFactory redisConnectionFactory() {
RedisStandaloneConfiguration config = new RedisStandaloneConfiguration("server", 6379);
return new JedisConnectionFactory(config);
}
}
```

Connection Modes

1. Redis Standalone
2. Write to Master, Read from Replica
3. Redis Sentinel
4. Redis Cluster

Redis can be operated in various setups. Each mode of operation requires specific configuration that is explained in the following sections.

- Redis Standalone: The easiest way to get started is by using Redis Standalone with a single Redis server,Configure LettuceConnectionFactory or JedisConnectionFactory , as shown in the following example:

```java
@Configuration
class RedisStandaloneConfiguration {

/**
* Lettuce
*/
@Bean
public RedisConnectionFactory lettuceConnectionFactory() {
return new LettuceConnectionFactory(new RedisStandaloneConfiguration("server", 6379));
}

/**
* Jedis
*/
@Bean
public RedisConnectionFactory jedisConnectionFactory() {
return new JedisConnectionFactory(new RedisStandaloneConfiguration("server", 6379));
}
}
```

- Write to Master, Read from Replica: The Redis Master/Replica setup — without automatic failover (for automatic failover see: Sentinel) — not only allows data to be safely stored at more nodes. It also allows,by using Lettuce, reading data from replicas while pushing writes to the master. You can set the read/write strategy to be used by using LettuceClientConfiguration ,as shown in the following example:

```java
@Configuration
class WriteToMasterReadFromReplicaConfiguration {

@Bean
public LettuceConnectionFactory redisConnectionFactory() {
LettuceClientConfiguration clientConfig = LettuceClientConfiguration.builder()
   .readFrom(REPLICA_PREFERRED)
    .build();

RedisStandaloneConfiguration serverConfig = new RedisStandaloneConfiguration("server", 6379);
return new LettuceConnectionFactory(serverConfig, clientConfig);
}
}
```

Note: For environments reporting non-public addresses through the INFO command (for example, when using AWS), use RedisStaticMasterReplicaConfiguration instead of
RedisStandaloneConfiguration . Please note that RedisStaticMasterReplicaConfiguration does not support Pub/Sub because of missing Pub/Sub message propagation
across individual servers

Redis Sentinel- For dealing with high-availability Redis, Spring Data Redis has support for Redis Sentinel, using RedisSentinelConfiguration , as shown in the following example:

```java
/**
* Lettuce
*/
@Bean
public RedisConnectionFactory lettuceConnectionFactory() {
RedisSentinelConfiguration sentinelConfig = new RedisSentinelConfiguration()
.master("mymaster")
.sentinel("127.0.0.1", 26379)
.sentinel("127.0.0.1", 26380);
return new LettuceConnectionFactory(sentinelConfig);
}

/**
* Jedis
*/
@Bean
public RedisConnectionFactory jedisConnectionFactory() {
RedisSentinelConfiguration sentinelConfig = new RedisSentinelConfiguration()
.master("mymaster")
.sentinel("127.0.0.1", 26379)
.sentinel("127.0.0.1", 26380);
return new JedisConnectionFactory(sentinelConfig);
}
```

RedisSentinelConfiguration can also be defined through RedisSentinelConfiguration.of(PropertySource) , which lets you pick up the following properties:

Configuration Properties:

• spring.redis.sentinel.master : name of the master node.
• spring.redis.sentinel.nodes : Comma delimited list of host:port pairs.
• spring.redis.sentinel.username : The username to apply when authenticating with Redis Sentinel (requires Redis 6)
• spring.redis.sentinel.password : The password to apply when authenticating with Redis Sentinel
• spring.redis.sentinel.dataNode.username : The username to apply when authenticating with Redis Data Node
• spring.redis.sentinel.dataNode.password : The password to apply when authenticating with Redis Data Node
• spring.redis.sentinel.dataNode.database : The database index to apply when authenticating with Redis Data Node

Sometimes, direct interaction with one of the Sentinels is required. Using RedisConnectionFactory.getSentinelConnection() or RedisConnection.getSentinelCommands() gives you access to the first active Sentinel configured.

- Redis Cluster: Cluster support is based on the same building blocks as non-clustered communication. RedisClusterConnection , an extension to RedisConnection , handles the communication with the Redis Cluster and translates errors into the Spring DAO exception hierarchy. RedisClusterConnection instances are created with the
RedisConnectionFactory , which has to be set up with the associated RedisClusterConfiguration , as shown in the following example:

Example 1. Sample RedisConnectionFactory Configuration for Redis Cluster

```java
@Component
@ConfigurationProperties(prefix = "spring.redis.cluster")
public class ClusterConfigurationProperties {
/*
* spring.redis.cluster.nodes[0] = 127.0.0.1:7379
* spring.redis.cluster.nodes[1] = 127.0.0.1:7380
* ...
*/
List<String> nodes;
/**
* Get initial collection of known cluster nodes in format {@code host:port}.
*
* @return
*/
public List<String> getNodes() {
return nodes;
}
public void setNodes(List<String> nodes) {
this.nodes = nodes;
}
}
@Configuration
public class AppConfig {
/**
* Type safe representation of application.properties
*/
@Autowired ClusterConfigurationProperties clusterProperties;
public @Bean RedisConnectionFactory connectionFactory() {
return new LettuceConnectionFactory(
new RedisClusterConfiguration(clusterProperties.getNodes()));
}
}
```

Note: RedisClusterConfiguration can also be defined through RedisClusterConfiguration.of(PropertySource) , which lets you pick up the following properties:
Configuration Properties
• spring.redis.cluster.nodes : Comma-delimited list of host:port pairs.
• spring.redis.cluster.max-redirects : Number of allowed cluster redirections.

The initial configuration points driver libraries to an initial set of cluster nodes. Changes resulting from live cluster reconfiguration are kept only in the native driver and are not written back to the configuration

