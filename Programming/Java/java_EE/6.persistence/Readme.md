# Persistence

Persistence refers to the characteristic of state that outlives the process that created it.Without this capability,state would only exist in RAM.
Persistence simply means that we would like our application’s data to outlive the applications process. In Java terms, we would like the state of (some of) our objects to live beyond the scope of the JVM so that the same state is available later.

Challenges with JDBC:-

1. Error Handling
2. Key Management issues
3. Implementation varies
4. Potential of Errors
5. Verbose codes

## ORM

Object/Relational Mapping refers to the technique of mapping data from an object model representation to a relational data model representation (and vice versa).

- **JPA (Java Persistence API)**:-JPA is a specification for ORM (Object-Relational Mapping), which maps Java objects to database tables and abstracts SQL operations.Java Persistence consists of three areas:
    1. The Java Persistence API.
    2. The query language.
    3. Object/relational mapping metadata.

JPA as a Specification - JPA (Java Persistence API) is indeed a specification, which means it defines a set of rules and guidelines for object-relational mapping (ORM) and how Java objects are persisted in relational databases. JPA itself does not provide an implementation; it just defines the standards for ORM. Think of it as a contract that an ORM provider (like Hibernate, EclipseLink, or OpenJPA) follows to enable persistence functionality in Java.
JPA also defines how data is persisted, retrieved, and queried, but it leaves the implementation details to the provider.

Advantages of Using JPA

1. Abstraction:- JPA abstracts SQL queries and low-level JDBC code, making database interactions simpler.
2. ORM Capabilities:- JPA maps Java objects directly to database tables, reducing boilerplate code.
3. Portability:- The same code can work with different databases by simply changing the configuration in persistence.xml.
4. Transaction Management:- Transactions are easier to manage compared to JDBC.

This implementation is clean, scalable, and leverages JPA for efficient database operations.JPA reduces the need for boilerplate SQL, minimizes error-prone code, and provides a cleaner, object-oriented approach to database interactions.

Key Features:

- Declarative mapping using annotations (@Entity, @Table, etc.).
- Entity relationships (@OneToOne, @OneToMany, etc.).
- JPQL (Java Persistence Query Language): Object-oriented query language.JPA abstracts SQL queries by allowing developers to interact with the database using Java objects and methods rather than writing raw SQL queries. It uses an Object-Relational Mapping (ORM) approach, where Java classes are mapped to database tables, and their fields correspond to table columns. Here's how JPA achieves query abstraction.

Key Classes/Interfaces:

- EntityManager: Manages entities and transactions.
- Persistence: Bootstrap class for initializing JPA.
- Entities: Plain Old Java Objects (POJOs) annotated for persistence.

Limitation:- JPA is a specification, not an implementation. It needs a provider like Hibernate.

- **Hibernate (JPA Provider)**:- Hibernate is a framework that implements the JPA specification and adds additional features for ORM and database interactions.Hibernate as an Implementation of JPA - Hibernate is a popular JPA implementation. It adheres to the JPA specification, but it also includes additional features beyond JPA. Hibernate implements the rules defined by JPA, but it also adds its own set of advanced ORM capabilities, such as custom caching, automatic dirty checking, and more.
Use Case: Hibernate is one of the most popular JPA providers due to its rich feature set and extensive documentation.

Key Features:

- Implements all JPA features.
- Provides advanced features like caching, lazy loading, and batch processing.
- Supports native SQL queries alongside JPQ- K- Components:
- SessionFactory: Factory for managing database sessions.
- Session: Equivalent to EntityManager in JPA.
- Criteria API: For programmatically building queries.

Key Components:

- SessionFactory: Factory for managing database sessions.
- Session: Equivalent to EntityManager in JPA.
- Criteria API: For programmatically building queries.


- **Jakarta Persistence Layer**:- Java Persistence API (JPA) and Jakarta Persistence Layer (JPL) are both popular frameworks for managing relational data in Java applications. While JPA has been around for a longer time, JPL was introduced as part of the Jakarta EE specifications after Java EE was transferred to the Eclipse Foundation.

`Java Persistence API (JPA)` - Java Persistence API (JPA) is a Java specification for managing relational data in Java applications. It is part of the Java EE and Jakarta EE specifications and provides an Object-Relational Mapping (ORM) framework to map Java objects to relational database tables. JPA allows developers to interact with relational databases in an object-oriented way, abstracting the underlying SQL.

`Jakarta Persistence Layer (JPL)` - Jakarta Persistence Layer (JPL) is the successor to JPA and is part of the Jakarta EE specifications. It is built upon JPA and provides similar functionality for managing relational data in Java applications. The primary difference is the change of package names, from javax.persistence to jakarta.persistence.

Both Java Persistence API (JPA) and Jakarta Persistence Layer (JPL) provide robust frameworks for managing relational data in Java applications. They both offer similar functionality, and the primary difference is the change of package names.

Jakarta Persistence is the API for the management for persistence and object/relational mapping.
