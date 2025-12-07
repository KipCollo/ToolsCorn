# Data Access

Concerned with data access and the interaction between the data access layer and the business or service layer.
The Data Access/Integration layer consists of the JDBC, ORM, OXM, JMS and Transaction modules.

1. `The JDBC module` provides a JDBC-abstraction layer that removes the need to do tedious JDBC coding and parsing of database-vendor specific error codes.
2. `The ORM module` provides integration layers for popular object-relational mapping APIs, including JPA, JDO, and Hibernate. Using the ORM package you can use all of these O/R-mapping frameworks in combination with all of the other features Spring offers, such as the simple declarative transaction management feature mentioned previously.
3. `The OXM module` provides an abstraction layer that supports Object/XML mapping implementations for JAXB, Castor, XMLBeans, JiBX and XStream.
4. `The Transaction module` supports programmatic and declarative transaction management for classes that implement special interfaces and for all your POJOs (plain old Java objects).

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

Regardless of which form of Spring-supported data access you use, you’ll likely need to configure a reference to a data source. Spring offers several options for configuring
data-source beans in your Spring application, including these:
1. Data sources that are defined by a JDBC driver
2. Data sources that are looked up by JNDI
3. Data sources that pool connections

For production-ready applications, I recommend using a data source that draws its connections from a connection pool. When possible, I prefer to retrieve the pooled
data source from an application server via JNDI.

`Using JNDI data sources`:- Spring applications are often deployed to run in a Java EE application server such as WebSphere or JBoss, or even a web container like Tomcat. These servers allow you to configure data sources to be retrieved via JNDI. The benefit of configuring data sources in this way is that they can be managed completely external to the application, allowing the application to ask for a data source when it’s ready to access the database.
Moreover, data sources managed in an application server are often pooled for greater performance and can be hot-swapped by system administrators.

With Spring, you can configure a reference to a data source that’s kept in JNDI and wire it into the classes that need it as if it were just another Spring bean. The
<jee:jndi-lookup> element from Spring’s jee namespace makes it possible to retrieve any object, including data sources, from JNDI and make it available as a
Spring bean. For example, if your application’s data source were configured in JNDI, you might use <jee:jndi-lookup> like this to wire it into Spring:

```xml
<jee:jndi-lookup id="dataSource"
jndi-name="/jdbc/SpitterDS"
resource-ref="true" />
```

The jndi-name attribute is used to specify the name of the resource in JNDI. If only the jndi-name property is set, then the data source will be looked up using the name
given as is. But if the application is running in a Java application server, you’ll want to set the resource-ref property to true so that the value given in jndi-name will be prepended with java:comp/env/.
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

`Using a pooled data source`:- If you’re unable to retrieve a data source from JNDI, the next best thing is to configure a pooled data source directly in Spring. Although Spring doesn’t provide a pooled data source, plenty of suitable ones are available, including the following open source options:
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
p:maxActive="10" />
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

`Using JDBC driver-based data sources`:- The simplest data source you can configure in Spring is one that’s defined through a JDBC driver. Spring offers three such data-source classes to choose from (all in the org.springframework.jdbc.datasource package):
1. DriverManagerDataSource—Returns a new connection every time a connection is requested. Unlike DBCP’s BasicDataSource, the connections provided by DriverManagerDataSource aren’t pooled.
2. SimpleDriverDataSource—Works much the same as DriverManagerDataSource except that it works with the JDBC driver directly to overcome class loading issues that may arise in certain environments, such as in an OSGi container.
3. SingleConnectionDataSource—Returns the same connection every time a connection is requested. Although SingleConnectionDataSource isn’t exactly a pooled data source, you can think of it as a data source with a pool of exactly one connection.

Configuring any of these data sources is similar to how you configured DBCP’s BasicDataSource. For example, here’s how you’d configure a DriverManagerDataSource
bean:

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
p:password="" />
```

The only significant difference with these data-source beans as compared to the pooling data-source beans is that because they don’t provide a connection pool, there are
no pool configuration properties to set.
Although these data sources are great for small applications and running in development, you should seriously consider the implications of using them in a production application. Because SingleConnectionDataSource has one and only one database connection to work with, it doesn’t work well in multithreaded applications
and is best limited to use in testing. At the same time, even though DriverManagerDataSource and SimpleDriverDataSource are both capable of supporting multiple threads, they incur a performance cost for creating a new connection each time a connection is requested. Because of these limitations, I strongly recommend using pooled
data sources

`Using an embedded data source`: An embedded database runs as part of your application instead of as a separate database server that your application connects to. Although it’s not very useful in production settings, an embedded database is a perfect choice for development and testing purposes. That’s because it allows you to populate your database with test data that’s reset every time you restart your application or run your tests.
Spring’s jdbc namespace makes configuring an embedded database simple.


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




-------------

## DAO Support

The Data Access Object (DAO) support in Spring is aimed at making it easy to work with data access technologies (such as JDBC, Hibernate, or JPA) in a consistent way. This lets you switch between the aforementioned persistence technologies fairly easily, and it also lets you code without worrying about catching exceptions that are specific to each technology.
Some of the benefits of using Spring DAO are:

1. It makes it easier to work on different data access methods like JDBC, Hibernate etc.
2. It provides a consistent and common way to deal with different data access methods.
3. Spring DAO makes it easier to switch between different data persistence frameworks.
4. No need for catching framework specific exceptions.


**Data-acces Exception**:- Spring provides a convenient translation from technology-specific exceptions like SQLException to its own exception class hierarchy with the DataAccessException as the root exception. These exceptions wrap the original exception so there is never any risk that one might lose any information as to what might have gone wrong.

In addition to JDBC exceptions, Spring can also wrap Hibernate-specific exceptions, converting them from proprietary, checked exceptions (in the case of versions of Hibernate prior to Hibernate 3.0), to a set of focused runtime exceptions (the same is true for JDO and JPA exceptions). This allows one to handle most persistence exceptions, which are non-recoverable, only in the appropriate layers, without having annoying boilerplate catch-and-throw blocks and exception declarations in one’s DAOs. (One can still trap and handle exceptions anywhere one needs to though.)

One way Spring helps you insulate your data-access tier from the rest of your application is by providing a consistent exception hierarchy that’s used across all of its supported persistence options.
You can’t do anything with JDBC without being forced to catch SQLException. SQLException means something went wrong while trying to access a database. But there’s little about that exception that tells you what went wrong or how to deal with it.

Some common problems that might cause a SQLException to be thrown include these:
1. The application is unable to connect to the database.
2. The query being performed has errors in its syntax.
3. The tables and/or columns referred to in the query don’t exist.
4. An attempt was made to insert or update values that violate a database constraint.

Many of the problems that trigger a SQLException can’t be remedied in a catch block. Most SQLExceptions that are thrown indicate a fatal condition. If the application can’t connect to the database, that usually means the application will be unable to continue. Likewise, if there are errors in the query, little can be done about it at runtime.
Spring JDBC provides a hierarchy of data-access exceptions that solve problems.In contrast to JDBC, Spring provides several data-access exceptions, each descriptive of the problem for which they’re thrown.

Even though Spring’s exception hierarchy is far richer than JDBC’s simple SQLException, it isn’t associated with any particular persistence solution. This means you can count on Spring to throw a consistent set of exceptions, regardless of which persistence provider you choose. This helps to keep your persistence choice confined to the data-access layer.
All of spring exceptions are rooted with DataAccessException. What makes DataAccessException special is that it’s an unchecked exception. In other words, you don’t have to catch any of the data-access exceptions thrown from Spring.


**Annotations used for configuring DAO or Repository classes**:- The best way to guarantee that your Data Access Objects (DAOs) or repositories provide exception translation is to use the @Repository annotation. This annotation also allows the component scanning support to find and configure your DAOs and repositories without having to provide XML configuration entries for them.

```java
@Repository
public class SomeMovieFinder implements MovieFinder {
// ...
}
```

Any DAO or repository implementation will need to access to a persistence resource, depending on the persistence technology used; for example, a JDBC-based repository will need access to a JDBC DataSource; a JPA-based repository will need access to an EntityManager. The easiest way to accomplish this is to have this resource dependency injected using one of the @Autowired,, @Inject, @Resource or @PersistenceContext annotations.

```java
@Repository
public class JpaMovieFinder implements MovieFinder {
    @PersistenceContext
    private EntityManager entityManager;
// ...
}

@Repository
public class HibernateMovieFinder implements MovieFinder {
    private SessionFactory sessionFactory;
    @Autowired
    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }
// ...
}
```

For typical JDBC support,ou would have the DataSource injected into an initialization method where you would create a JdbcTemplate and other data access support classes like SimpleJdbcCall etc using this DataSource.

```java
@Repository
public class JdbcMovieFinder implements MovieFinder {
    private JdbcTemplate jdbcTemplate;
    @Autowired
    public void init(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }
    // ...
}
```

### Data Access with JDBC

Spring Data JDBC, part of the larger Spring Data family, makes it easy to implement JDBC based repositories. This module deals with enhanced support for JDBC based data access layers. It makes it easier to build Spring powered applications that use data access technologies.

1. Helps in keeping the database code clean and simple.
2. Prevents problems that result from a failure to close database resources.
3. Provides a layer of useful exceptions on top of the error messages given by different database servers.
4. Based on Spring’s AOP module
5. Provides transaction management services for objects in a Spring application

JDBC lets you work with data at a much lower level than the persistence frameworks. You’re in full control of how your application reads and manipulates data. This includes allowing you to access and manipulate individual columns in a database. This fine-grained approach to data access comes in handy in applications, such as reporting applications, where it doesn’t make sense to organize the data into objects just to then unwind it back into raw data.

**Spring Data JDBC**:- Spring Data JDBC provide repository support for the Java Database Connectivity (JDBC) APIs. It eases development of applications with a consistent programming model that need to access SQL data sources.
Spring Data JDBC aims to be much simpler conceptually, by embracing the following design decisions:

1. If you load an entity, SQL statements get run. Once this is done, you have a completely loaded entity. No lazy loading or caching is done.
2. If you save an entity, it gets saved. If you do not, it does not. There is no dirty tracking and no session.

`JDBC database access`:- You can choose among several approaches to form the basis for your JDBC database access. In addition to three flavors of the JdbcTemplate, a new SimpleJdbcInsert and SimplejdbcCall approach optimizes database metadata, and the RDBMS Object style takes a more object-oriented approach similar to that of JDO Query design.All approaches require a JDBC 2.0-compliant driver, and some advanced features require a JDBC 3.0 driver.

- JdbcTemplate is the classic Spring JDBC approach and the most popular. This "lowest level" approach and all others use a JdbcTemplate under the covers.
- NamedParameterJdbcTemplate wraps a JdbcTemplate to provide named parameters instead of the traditional JDBC "?" placeholders. This approach provides better documentation and ease of use when you have multiple parameters for an SQL statement.
- SimpleJdbcInsert and SimpleJdbcCall optimize database metadata to limit the amount of necessary configuration. This approach simplifies coding so that you only need to provide the name of the table or procedure and provide a map of parameters matching the column names. This only works if the database provides adequate metadata. If the database doesn’t provide this metadata, you will have to provide explicit configuration of the parameters.
- RDBMS Objects including MappingSqlQuery, SqlUpdate and StoredProcedure requires you to create reusable and thread-safe objects during initialization of your data access layer. This approach is modeled after JDO Query wherein you define your query string, declare parameters, and compile the query. Once you do that, execute methods can be called multiple times with various parameter values passed in.

In terms of databases, Spring Data JDBC requires a dialect to abstract common SQL functionality over vendor-specific flavours. Spring Data JDBC includes direct support for the following databases:

1. DB2
2. H2
3. HSQLDB
4. MariaDB
5. Microsoft SQL Server
6. MySQL
7. Oracle
8. Postgres

Spring JDBC support is rooted in the `JdbcTemplate` class. JdbcTemplate provides a means by which developers can perform SQL operations against a relational database
without all the ceremony and boilerplate typically required when working with JDBC.

Although JDBC gives you an API that works closely with your database, you’re responsible for handling everything related to accessing the database. This includes managing database resources and handling exceptions.Much of JDBC code is boilerplate for creating connections and statements and handling exceptions.
The fact is that all that JDBC boilerplate code is important. Cleaning up resources and handling errors is what makes data access robust. Without it, errors would go
undetected and resources would be left open, leading to unpredictable code and resource leaks. So not only do you need this code, but you also need to make sure it’s
correct.

Spring’s JDBC framework will clean up your JDBC code by shouldering the burden of resource management and exception handling. This leaves you free to write only the
code necessary to move data to and from the database.
For JDBC, Spring comes with three template classes to choose from:
- JdbcTemplate—The most basic of Spring’s JDBC templates, this class provides simple access to a database through JDBC and simple indexed-parameter queries.
- NamedParameterJdbcTemplate—This JDBC template class enables you to perform queries where values are bound to named parameters in SQL, rather than indexed parameters.
- SimpleJdbcTemplate—This version of the JDBC template takes advantage of Java 5 features such as autoboxing, generics, and variable parameter lists to simplify how a JDBC template is used.

The Spring Framework’s JDBC abstraction framework consists of four different packages:
1. core: The org.springframework.jdbc.core package contains the JdbcTemplate class and its various callback interfaces, plus a variety of related classes. A subpackage named org.springframework.jdbc.core.simple contains the SimpleJdbcInsert and SimpleJdbcCall classes.Anothersubpackage named org.springframework.jdbc.core.namedparam contains the NamedParameterJdbcTemplate class and the related support classes. See Using the JDBC Core Classes to Control Basic JDBC Processing and Error Handling, JDBC Batch Operations, and Simplifying JDBC Operations with the SimpleJdbc Classes.

JDBC core classes to control basic JDBC processing, including error handling. It includes the following topics:
1. Using JdbcTemplate
2. Using NamedParameterJdbcTemplate
3. Using SQLExceptionTranslator
4. Running Statements
5. Running Queries
6. Updating the Database
7. Retrieving Auto-generated Keys


**JDBC templates**:- Spring’s JDBC framework will clean up your JDBC code by shouldering the burden of resource management and exception handling. This leaves you free to write only the code necessary to move data to and from the database.
Spring framework provides JdbcTemplate class that contains many convenient methods for regular tasks like- converting data into primitives or objects, executing prepared or callable statements etc.This class makes it very easy to work with database in our Application and it also provides good support for custom error handling in database access code.

The JdbcTemplate class:
1. Runs SQL queries
2. Updates statements and stored procedure calls
3. Performs iteration over ResultSet instances and extraction of returned parameter values.
4. Catches JDBC exceptions and translates them to the generic, more informative, exception hierarchy defined in the org.springframework.dao package.

When you use the JdbcTemplate for your code, you need only to implement callback interfaces, giving them a clearly defined contract. Given a Connection provided by the JdbcTemplate class, the PreparedStatementCreator callback interface creates a prepared statement, providing SQL and any necessary parameters. The same is true for the CallableStatementCreator interface, which creates callable statements. The RowCallbackHandler interface extracts values from each row of a ResultSet.
You can use JdbcTemplate within a DAO implementation through direct instantiation with a DataSource reference, or you can configure it in a Spring IoC container and give it to DAOs as a bean reference.

The DataSource should always be configured as a bean in the Spring IoC container.In the first case the bean is given to the service directly; in the second case it is given to the prepared template.

All that a JdbcTemplate needs in order to do its work is a DataSource. This makes it easy enough to configure a JdbcTemplate bean in Spring with the following @Bean
method:

```java
@Bean
public JdbcTemplate jdbcTemplate(DataSource dataSource) {
return new JdbcTemplate(dataSource);
}
```

Here, the DataSource is injected via constructor injection. The dataSource bean being referenced can be any implementation of javax.sql.DataSource.
Now you can wire the jdbcTemplate bean into your repository and use it to access the database.


```java
Repository
public class JdbcSpitterRepository implements SpitterRepository {
   private JdbcOperations jdbcOperations;
   @Inject
   public JdbcSpitterRepository(JdbcOperations jdbcOperations) {
      this.jdbcOperations = jdbcOperations;
}
...
}
```

Here JdbcSpitterRepository is annotated with @Repository, which qualifies it to be automatically created by component-scanning. And its constructor is annotated with
@Inject so that when it’s created, it will be given a JdbcOperations object. JdbcOperations is an interface defining operations implemented by JdbcTemplate. By
injecting a JdbcOperations instead of the concrete JdbcTemplate, JdbcSpitterRepository is able to remain loosely coupled to JdbcTemplate via the JdbcOperations interface.
+
Just because you don’t see a lot of boilerplate code doesn’t mean it’s not there. It’s cleverly hidden in the JDBC template class. When the update() method is called,
JdbcTemplate gets a connection, creates a statement, and executes the insert SQL.
Internally, JdbcTemplate catches any SQLExceptions that may be thrown. It then translates the generic SQLException into one of the more specific data-access exceptions.
Because Spring’s data-access exceptions are all runtime exceptions, you don’t have to catch them.

`Logging`Spring Data JDBC does little to no logging on its own. Instead, the mechanics of JdbcTemplate to issue SQL statements provide logging. Thus, if you want to inspect what SQL statements are run, activate logging for Spring’s NamedParameterJdbcTemplate or MyBatis.

You may also want to set the logging level to DEBUG to see some additional information. To do so, edit the application.properties file to have the following content:

```java
logging.level.org.springframework.jdbc=DEBUG
```

All SQL issued by this class is logged at the DEBUG level under the category corresponding to the fully qualified class name of the template instance (typically JdbcTemplate, but it may be different if you use a custom subclass of the JdbcTemplate class).

`Querying (SELECT)`:-The following query gets the number of rows in a relation:

```java
int rowCount = this.jdbcTemplate.queryForObject("select count(*) from t_actor",Integer.class);
int countOfActorsNamedJoe = this.jdbcTemplate.queryForObject("select count(*) from t_actor where first_name = ?", Integer.class, "Joe");
```


`Updating (INSERT, UPDATE, and DELETE) with JdbcTemplate` - You can use the update(..) method to perform insert, update, and delete operations. Parameter values are usually provided as variable arguments or, alternatively, as an object array.

```java
this.jdbcTemplate.update("insert into t_actor (first_name, last_name) values (?, ?)", "Leonor", "Watling");
this.jdbcTemplate.update("update t_actor set last_name = ? where id = ?","Banjo", 5276L);
this.jdbcTemplate.update("delete from t_actor where id = ?",Long.valueOf(actorId));
```



### Data Access with R2DBC

R2DBC ("Reactive Relational Database Connectivity") is a community-driven specification effort to standardize access to SQL databases using reactive patterns.


### Object Relational Mapping(ORM) Data Access

The Spring Framework supports integration with Hibernate, Java Persistence API (JPA) and Java Data Objects (JDO) for resource management, data access object (DAO) implementations, and transaction strategies.

As applications become more complex, so do our persistence requirements. We need to be able to map object properties to database columns and have our statements and queries created for us, freeing us from typing an endless string of question marks. We also need features that are more sophisticated:
1. Lazy loading—As object graphs become more complex, you sometimes don’t want to fetch entire relationships immediately.Lazy loading allows you to grab data only as it’s needed.
2. Eager fetching—This is the opposite of lazy loading. Eager fetching allows you to grab an entire object graph in one query saving you from costly round-trips.
3. Cascading—Sometimes changes to a database table should result in changes to other tables as well.

Several frameworks are available that provide these services. The general name for these services is object-relational mapping (ORM). Using an ORM tool for your persistence layer can save you literally thousands of lines of code and hours of development time. This lets you switch your focus from writing error-prone SQL code to addressing your application’s requirements.

Spring provides support for several persistence frameworks, including Hibernate,iBATIS, Java Data Objects (JDO), and the Java Persistence API (JPA).Spring’s support for ORM frameworks provides integration points to the frameworks as well as some additional services:
1. Integrated support for Spring declarative transactions
2. Transparent exception handling
3. Thread-safe, lightweight template classes
4. DAO support classes
5. Resource management

Spring Data JPA in a traditional Spring application, without the auto-configuration features of Spring Boot. In this case, the setup requires some manual configuration, but you still get the power of Spring Data JPA for repository management.

Spring Configuration (applicationContext.xml)

For traditional Spring (non-Boot) projects, you will need to configure your data source, JPA entity manager factory, and transaction manager in your Spring XML configuration file (applicationContext.xml).

```xml
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
                           http://www.springframework.org/schema/beans/spring-beans-4.3.xsd
                           http://www.springframework.org/schema/jpa
                           http://www.springframework.org/schema/jpa/spring-jpa-2.0.xsd">

    <!-- DataSource configuration -->
    <bean id="dataSource" class="org.apache.commons.dbcp2.BasicDataSource">
        <property name="driverClassName" value="com.mysql.cj.jdbc.Driver" />
        <property name="url" value="jdbc:mysql://localhost:3306/my_database" />
        <property name="username" value="root" />
        <property name="password" value="password" />
    </bean>

    <!-- EntityManagerFactory configuration -->
    <bean id="entityManagerFactory" class="org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean">
        <property name="dataSource" ref="dataSource" />
        <property name="packagesToScan" value="com.example.domain" />
        <property name="jpaVendorAdapter">
            <bean class="org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter">
                <property name="showSql" value="true" />
                <property name="generateDdl" value="true" />
            </bean>
        </property>
    </bean>

    <!-- Transaction Manager configuration -->
    <bean id="transactionManager" class="org.springframework.orm.jpa.JpaTransactionManager">
        <property name="entityManagerFactory" ref="entityManagerFactory" />
    </bean>

    <!-- Enable JPA repositories -->
    <context:component-scan base-package="com.example.repository" />
</beans>
```

    dataSource: Configures the database connection.
    entityManagerFactory: Configures the JPA EntityManager to manage entities.
    transactionManager: Manages JPA transactions.


Spring supports following Object Relational Mapping (ORM) frameworks:
1. Hibernate
2. Java Persistence API (JPA)
3. TopLink
4. Java Data Objects (JDO)
5. Apache Object Relational Bridge (ORB)

We can use following steps for integrating Spring and Hibernate:
Add dependencies for Spring and Hibernate in pom.xml
Implement DAO from HibernateDaoSupport
Use Hibernate functions via getHibernateTemplate() method


**HIBERNATE**:- Hibernate is an open source persistence framework.It provides not only basic object-relational mapping but also all the other sophisticated features you’d expect from a full-featured ORM tool, such as caching, lazy loading, eager fetching, and distributed caching.

Natively, the main interface for working with Hibernate is org.hibernate.Session.The Session interface provides basic data-access functionality such as the ability to save, update, delete, and load objects from the database. Through the Hibernate Session, an application’s repository performs all of its persistence needs.
The standard way to get a reference to a Hibernate Session object is through an implementation of Hibernate’s SessionFactory interface. Among other things, SessionFactory is responsible for opening, closing, and managing Hibernate Sessions.

Spring’s support for Hibernate offers a template class to abstract Hibernate persistence. Historically, `HibernateTemplate` was the way to work with Hibernate in a Spring application.HibernateTemplate took care of the intricacies of working with Hibernate by catching Hibernate-specific exceptions and rethrowing them as one of Spring’s unchecked data access exceptions.
One of the responsibilities of HibernateTemplate is to manage Hibernate Sessions. This involves opening and closing sessions as well as ensuring one session per transaction. Without HibernateTemplate, you’d have no choice but to clutter your DAOs with boilerplate session management code.

The downside of HibernateTemplate is that it’s somewhat intrusive. When we use Spring’s HibernateTemplate in a DAO (whether directly or through HibernateDaoSupport), the DAO class is coupled to the Spring API.
Even though HibernateTemplate is still around, it’s no longer considered the best way of working with Hibernate. `Contextual sessions`, introduced in Hibernate 3, are a way in which Hibernate itself manages one Session per transaction. There’s no need for HibernateTemplate to ensure this behavior. This keeps your DAO classes free of Spring-specific code.

Spring provides two ways to use Hibernate:
We can extend HibernateDAOSupport and apply an AOP
interceptor node to use Hibernate.
We can also use HibernateTemplate and Callback to access
Hibernate. This is based on Inversion of Control.


**Spring and the Java Persistence API**:- The Java Persistence API (JPA) emerged out of the rubble of EJB 2’s entity beans as the next-generation Java persistence standard. JPA is a POJO-based persistence mechanism
that draws ideas from both Hibernate and Java Data Objects (JDO) and mixes Java 5 annotations in for good measure.
With the Spring 2.0 release came the premiere of Spring integration with JPA. The irony is that many blame (or credit) Spring with the demise of EJB. But now that
Spring provides support for JPA, many developers are recommending JPA for persistence in Spring-based applications. In fact, some say that Spring-JPA is the dream team
for POJO development.
The first step toward using JPA with Spring is to configure an entity manager factory as a bean in the Spring application context.

JPA-based applications use an implementation of EntityManagerFactory to get an instance of an EntityManager. The JPA specification defines two kinds of entity managers:
1. Application-managed—Entity managers are created when an application directly requests one from an entity manager factory. With application-managed entity
managers, the application is responsible for opening or closing entity managers and involving the entity manager in transactions. This type of entity manager is
most appropriate for use in standalone applications that don’t run in a Java EE container.
2. Container-managed—Entity managers are created and managed by a Java EE container. The application doesn’t interact with the entity manager factory at
all. Instead, entity managers are obtained directly through injection or from JNDI. The container is responsible for configuring the entity manager factories.
This type of entity manager is most appropriate for use by a Java EE container that wants to maintain so me control over JPA configuration beyond what’s specified in persistence.xml.

Both kinds of entity manager implement the same EntityManager interface. The key difference isn’t in the EntityManager itself, but rather in how the EntityManager is created and managed. Application-managed EntityManagers are created by an EntityManagerFactory obtained by calling the createEntityManagerFactory() method of
the PersistenceProvider. Meanwhile, container-managed EntityManagerFactorys are obtained through PersistenceProvider’s createContainerEntityManagerFactory() method.


**Spring Data JPA**:- Spring Data JPA, part of the larger Spring Data family, makes it easy to easily implement JPA-based (Java Persistence API) repositories. It makes it easier to build Spring-powered applications that use data access technologies.
Implementing a data access layer for an application can be quite cumbersome. Too much boilerplate code has to be written to execute the simplest queries. Add things like pagination, auditing, and other often-needed options, and you end up lost.

Spring Data JPA aims to significantly improve the implementation of data access layers by reducing the effort to the amount that’s actually needed. As a developer you write your repository interfaces using any number of techniques, and Spring will wire it up for you automatically. You can even use custom finders or query by example and Spring will write the query for you!.

It uses Hibernate as default JPA provider.

The central interface in the Spring Data repository abstraction is Repository. It takes the domain class to manage as well as the identifier type of the domain class as type arguments. This interface acts primarily as a marker interface to capture the types to work with and to help you to discover interfaces that extend this one.
Spring Data JPA is an abstracton layer on top of JPA to reduce the amount of boilerplate code required to implement data eccess object(DAO).Spring Data JPA builds on JPA/Hibernate.The Spring-specific layer.

`Repository abstraction`:- You do not write DAO classes. You define an interface. Spring generates the implementation at runtime.
**Repository in Spring Data JPA** - A `repository` in Spring Data JPA is an abstraction for the data access layer(DAO). It provides an easy way to interact with the database using methods for standard CRUD operations (Create, Read, Update, Delete) and additional custom queries. Repositories in Spring Data JPA are part of the Repository abstraction in the Spring Data project, which simplifies database access.
Repositories eliminate the need for boilerplate code like writing SQL queries or implementing DAO (Data Access Object) interfaces, letting developers focus on business logic.

Spring Data repositories simplify database interactions by providing pre-implemented methods for CRUD operations, powerful query derivation capabilities, and extensibility through custom implementations. They are a key feature of Spring Data JPA, enabling developers to focus on business logic rather than writing boilerplate DAO code.

Hierarchy of Repositories in Spring Data - Spring Data repositories are organized into a hierarchy:

- `Repository<T, ID>`:- The base interface for Spring Data repositories.It's a marker interface (empty interface) and is not meant to be used directly.
Central repository marker interface. Captures the domain type to manage as well as the domain type's id type. General purpose is to hold type information as well as being able to discover interfaces that extend this one during classpath scanning for easy Spring bean creation.
Domain repositories extending this interface can selectively expose CRUD methods by simply declaring methods of the same signature as those declared in CrudRepository.

```java
public interface Repository<T, ID> {}
```

- `CrudRepository<T, ID>`:- Extends Repository.Provides basic CRUD operations (e.g., save(), findById(), delete()).
Interface for generic CRUD operations on a repository for a specific type.

```java
public interface CrudRepository<T, ID> extends Repository<T, ID> {
    <S extends T> S save(S entity);
    Optional<T> findById(ID id);
    Iterable<T> findAll();
    void delete(T entity);
    boolean existsById(ID id);
}
```

- `PagingAndSortingRepository<T, ID>`:- Extends CrudRepository.Adds methods for pagination and sorting.
Repository fragment to provide methods to retrieve entities using the pagination and sorting abstraction. In many cases this will be combined with CrudRepository or similar or with manually added methods to provide CRUD functionality.

```java
public interface PagingAndSortingRepository<T, ID> extends CrudRepository<T, ID> {
    Iterable<T> findAll(Sort sort);
    Page<T> findAll(Pageable pageable);
}
```

- `JpaRepository<T, ID>`:- Extends PagingAndSortingRepository.Adds JPA-specific methods like flush() and saveAndFlush().All it's methods are transactional.
JPA specific extension of org.springframework.data.repository.Repository.

```java
public interface JpaRepository<T, ID> extends PagingAndSortingRepository<T, ID> {
    void flush();
    <S extends T> S saveAndFlush(S entity);
    void deleteAllInBatch();
    void deleteAllByIdInBatch(Iterable<ID> ids);
}
```

- When to Use Which Interface:-
    1. CrudRepository: Use when you only need basic CRUD operations.
    2. PagingAndSortingRepository: Use when you need pagination and sorting.
    3. JpaRepository: Use when you need JPA-specific features like batch operations and saveAndFlush().

In most cases, developers use JpaRepository because it includes all the features of the other two.

Features of Repositories - Built-in CRUD Methods:-Repositories come with built-in methods for standard CRUD operations:

1. save(T entity) - Saves or updates an entity.
2. findById(ID id)- Retrieves an entity by its primary key.
3. findAll() - Retrieves all entities.
4. deleteById(ID id)- Deletes an entity by its primary key.
5. delete(T entity) - Deletes a specific entity.
6. count() - Returns the count of entities.
7. existsById(ID id) - Checks if an entity exists by its primary key.

- Derived Query Methods:- Spring Data JPA can automatically generate query methods based on the naming conventions of methods in the repository interface.

For example:

```java
public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findByName(String name);
    List<User> findByEmailContaining(String emailSubstring);
    List<User> findByAgeGreaterThan(int age);
}
```

findByName(String name): Finds users with a specific name.
findByEmailContaining(String emailSubstring): Finds users whose email contains a specific substring.
findByAgeGreaterThan(int age): Finds users older than a certain age.

Spring Data JPA parses the method names and translates them into appropriate JPQL or SQL queries.

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

Pagination: Use Pageable to define page size, page number, and sorting.
Sorting: Use Sort to define sorting criteria.

Example:

```java
Page<User> usersPage = userRepository.findAll(PageRequest.of(0, 10, Sort.by("name")));
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


Spring Data is a high-level abstraction layer over JPA (or other persistence technologies) that simplifies database access in Spring applications.

Key Features:
Repositories: Predefined CRUD operations with minimal boilerplate. Example: JpaRepository, CrudRepository.
Query Methods: Derive queries from method names (findByName, findByAgeGreaterThan).
Integration with other persistence APIs like MongoDB, Cassandra, etc.

Key Components:
JpaRepository: Extends JPA with additional features like pagination and sorting.
Custom Queries: Supports JPQL, native SQL, and @Query annotations.

Core points:

Example:
public interface UserRepository extends JpaRepository<User, Long> {}
This gives CRUD, pagination, sorting, query derivation, batch operations, and projections.

Query derivation.
Method names encode predicate logic.
Example:
List<User> findByEmailAndActive(String email, boolean active);
Spring generates the JPQL using the entity metadata.

@Query.
You can inject JPQL or native SQL directly.
Example:
@Query("select u from User u where u.email = :email")
Suitable when derivation becomes unreadable.

Projections.
Three kinds: interface-based, class-based DTO, and dynamic projections.
Spring automatically maps query results into the projection type, avoiding entity loading when not needed.

Specification API.
For dynamic, predicate-composition queries.
A Specification<T> builds a Predicate via JPA Criteria.
You combine with .and() and .or() to build arbitrary filters.

Auditing.
@CreatedDate, @LastModifiedDate, @CreatedBy, @LastModifiedBy.
Requires @EnableJpaAuditing.
Spring injects timestamps and principals automatically.

Transaction boundaries.
Key rule: service layer owns transactions.
Use @Transactional only on service methods.
Repository methods run inside the active transaction.
Spring manages the EntityManager automatically.

EntityManager handling.
You rarely inject it, but you can.
Repositories run on a shared transactional EntityManager.
You can still use @PersistenceContext inside custom repository fragments.

Custom repository fragments.
When a query is too complex for MethodName or @Query and requires imperative logic, add a custom fragment.
Example:
UserRepository extends JpaRepository<User, Long>, UserRepositoryCustom
Then implement UserRepositoryCustomImpl with custom EntityManager logic.

Paging and sorting.
Pageable, Page<T>, Slice<T>.
Spring generates count queries unless you override.Used extensively for REST APIs.

Lazy loading in web apps.
When entities leave the transactional boundary, proxies break.
Solutions: DTO mapping at service layer, fetch joins, entity graphs, or OpenEntityManagerInView (avoid in complex domains).

EntityGraph.
Declarative eager loading on a specific repository method.
Example:
@EntityGraph(attributePaths = {"roles"})
Tells JPA to issue a fetch join for selected associations.

Batch operations.
saveAll, delete in batches, or bulk updates via @Modifying @Query.
Remember: bulk JPQL updates bypass first-level cache; clear persistence context afterwards.

Integration with Spring Boot.
Auto-configures DataSource, JPA vendor adapter, EntityManagerFactory, and transaction manager.
You focus on repositories and domain models only.

Schema generation.
Controlled via properties: hibernate.ddl-auto=create|update|validate|none.
Use schema.sql / data.sql for deterministic DDL/DML in production.

Testing.
@DataJpaTest loads only JPA components, uses H2 by default, rolls back after each test.

Event system.
Domain events: @DomainEvents, @AfterDomainEventPublication.
Also repository events: @HandleBeforeSave, @HandleAfterSave, etc., via RepositoryEventListener.


## Using Object-XML Mappers

Object-XML Mapping (O-X mapping for short) is the act of converting an XML document to and from an object. This conversion process is also known as XML Marshalling, or XML Serialization.


-------------


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
