# Persistence

Persistence refers to the characteristic of state that outlives the process that created it.Without this capability,state would only exist in RAM.

## ORM

Object/Relational Mapping refers to the technique of mapping data from an object model representation to a relational data model representation (and vice versa).

## JPA (Java Persistence API)

Persistence simply means that we would like our application’s data to outlive the applications process. In Java terms, we would like the state of (some of) our objects to live beyond the scope of the JVM so that the same state is available later.
JPA is a specification for ORM (Object-Relational Mapping), which maps Java objects to database tables and abstracts SQL operations.

The `Java Persistence API` provides an object/relational mapping facility to Java developers for managing relational data in Java applications. Java Persistence consists of three areas:

1. The Java Persistence API.
2. The query language.
3. Object/relational mapping metadata.

Key Features:

- Declarative mapping using annotations (@Entity, @Table, etc.).
- Entity relationships (@OneToOne, @OneToMany, etc.).
- JPQL (Java Persistence Query Language): Object-oriented query language.

Key Classes/Interfaces:

- EntityManager: Manages entities and transactions.
- Persistence: Bootstrap class for initializing JPA.
- Entities: Plain Old Java Objects (POJOs) annotated for persistence.

Limitation:- JPA is a specification, not an implementation. It needs a provider like Hibernate.

JPA as a Specification - JPA (Java Persistence API) is indeed a specification, which means it defines a set of rules and guidelines for object-relational mapping (ORM) and how Java objects are persisted in relational databases. JPA itself does not provide an implementation; it just defines the standards for ORM. Think of it as a contract that an ORM provider (like Hibernate, EclipseLink, or OpenJPA) follows to enable persistence functionality in Java.

JPA provides a set of annotations like @Entity, @Id, @GeneratedValue, @ManyToOne, @OneToMany, etc.
JPA also defines how data is persisted, retrieved, and queried, but it leaves the implementation details to the provider.


## Hibernate (JPA Provider)

Hibernate is a framework that implements the JPA specification and adds additional features for ORM and database interactions.

Key Features:

- Implements all JPA features.
- Provides advanced features like caching, lazy loading, and batch processing.
- Supports native SQL queries alongside JPQL.

Key Components:

- SessionFactory: Factory for managing database sessions.
- Session: Equivalent to EntityManager in JPA.
- Criteria API: For programmatically building queries.

Use Case: Hibernate is one of the most popular JPA providers due to its rich feature set and extensive documentation.

Hibernate as an Implementation of JPA - Hibernate is a popular JPA implementation. It adheres to the JPA specification, but it also includes additional features beyond JPA. Hibernate implements the rules defined by JPA, but it also adds its own set of advanced ORM capabilities, such as custom caching, automatic dirty checking, and more.

Hibernate can be used as the JPA provider. In fact, when you use JPA annotations in your code (like @Entity, @Id, etc.), Hibernate is the underlying implementation that handles the actual mapping between your Java objects and the database.

## JPA Configuration (Persistence Unit)

Create a persistence.xml file inside src/main/resources/META-INF/ to configure the persistence unit.

```xml
<persistence xmlns="https://jakarta.ee/xml/ns/persistence" version="3.0">
    <persistence-unit name="my-persistence-unit">
        <class>User</class>
        <properties>
            <!-- Database connection properties -->
            <property name="jakarta.persistence.jdbc.url" value="jdbc:mysql://localhost:3306/my_database"/>
            <property name="jakarta.persistence.jdbc.user" value="root"/>
            <property name="jakarta.persistence.jdbc.password" value="password"/>
            <property name="jakarta.persistence.jdbc.driver" value="com.mysql.cj.jdbc.Driver"/>

            <!-- Hibernate as JPA provider -->
            <property name="jakarta.persistence.provider" value="org.hibernate.jpa.HibernatePersistenceProvider"/>

            <!-- Hibernate properties -->
            <property name="hibernate.hbm2ddl.auto" value="update"/> <!-- Auto-create tables -->
            <property name="hibernate.dialect" value="org.hibernate.dialect.MySQLDialect"/>
            <property name="hibernate.show_sql" value="true"/> <!-- Show SQL in logs -->
        </properties>
    </persistence-unit>
</persistence>
```

JPA Implementation

This code demonstrates fetching data from the users table using JPA.

```java
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;

import java.util.List;

public class JPAExample {
    public static void main(String[] args) {
        // Create EntityManagerFactory and EntityManager
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("my-persistence-unit");
        EntityManager em = emf.createEntityManager();

        try {
            // Fetch all users from the database
            List<User> users = em.createQuery("SELECT u FROM User u", User.class).getResultList();

            // Print user details
            users.forEach(user -> 
                System.out.println("ID: " + user.getId() + ", Name: " + user.getName() + ", Email: " + user.getEmail())
            );

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            // Close the EntityManager and EntityManagerFactory
            em.close();
            emf.close();
        }
    }
}
```

How It Works

Entity Class:The User class is annotated with @Entity to map it to the users table in the database.The @Id and @GeneratedValue annotations specify the primary key and its auto-generation strategy.
Persistence Configuration:The persistence.xml file defines the persistence unit, database connection details, and JPA provider (Hibernate in this case).
EntityManager:The EntityManager is used to interact with the database.The createQuery method runs a JPQL query (SELECT u FROM User u) to fetch all users.
Resource Management:The EntityManager and EntityManagerFactory are properly closed to release resources.

## Advantages of Using JPA

1. Abstraction:- JPA abstracts SQL queries and low-level JDBC code, making database interactions simpler.
2. ORM Capabilities:- JPA maps Java objects directly to database tables, reducing boilerplate code.
3. Portability:- The same code can work with different databases by simply changing the configuration in persistence.xml.
4. Transaction Management:- Transactions are easier to manage compared to JDBC.

This implementation is clean, scalable, and leverages JPA for efficient database operations.

JPA abstracts SQL queries by allowing developers to interact with the database using Java objects and methods rather than writing raw SQL queries. It uses an Object-Relational Mapping (ORM) approach, where Java classes are mapped to database tables, and their fields correspond to table columns. Here's how JPA achieves query abstraction:

- Using Entity Classes Instead of Tables:- With JPA, you work with Java classes (entities) that represent database tables.Instead of manually constructing SQL statements, you manipulate these entities, and JPA translates the operations into SQL.

Example:

```java
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
}
```

How it is abstracted:- This User class is mapped to the users table in the database.You don’t need to write SQL INSERT INTO, SELECT, or UPDATE statements explicitly.

- Query Abstraction with JPQL:- JPA provides Java Persistence Query Language (JPQL), which is a high-level query language similar to SQL but operates on entity objects rather than table names.

Example:

```java
List<User> users = em.createQuery("SELECT u FROM User u WHERE u.name = :name", User.class)
                     .setParameter("name", "Alice")
                     .getResultList();
```

How it is abstracted:- The SELECT u FROM User u query operates on the User entity, not the users table.JPA automatically translates this JPQL query into the equivalent SQL:

```sql
SELECT * FROM users WHERE name = 'Alice';
```

- CRUD Operations Without SQL:- JPA provides methods for common database operations like Create, Read, Update, and Delete (CRUD). You don’t need to write SQL for these tasks.

Example: Persisting an Object (Insert)

```java
User user = new User();
user.setName("Charlie");
user.setEmail("charlie@example.com");

em.getTransaction().begin();
em.persist(user);
em.getTransaction().commit();
```

How it is abstracted:- The persist method inserts the object into the database.JPA generates the following SQL:

```sql
INSERT INTO users (name, email) VALUES ('Charlie', 'charlie@example.com');
```

Example: Updating an Object

```java
User user = em.find(User.class, 1L);
user.setEmail("newemail@example.com");

em.getTransaction().begin();
em.merge(user);
em.getTransaction().commit();
```

How it is abstracted:- The merge method updates the object in the database.
JPA generates:

```sql
UPDATE users SET email = 'newemail@example.com' WHERE id = 1;
```

- Relationships Abstracted:- JPA handles relationships (e.g., one-to-many, many-to-many) without requiring SQL joins.

Example:

```java
@Entity
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private User user; // Maps to the 'user_id' column in the orders table
}
```

How it is abstracted:- The @ManyToOne annotation maps a Java reference to a foreign key column in SQL.Fetching all orders with their users:

```java
List<Order> orders = em.createQuery("SELECT o FROM Order o", Order.class).getResultList();
```

JPA generates:

```sql
SELECT o.id, o.user_id FROM orders o;
```

- Automatic SQL Generation:- JPA automatically generates SQL based on annotations like @Entity, @Table, @Id, etc. For example:

Entity Class:

```java
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
}
```

Generated SQL for Table Creation:

```sql
CREATE TABLE users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255)
);
```

- Criteria API for Dynamic Queries:- For dynamic queries, JPA provides a Criteria API, allowing you to build queries programmatically in Java.

Example:

```java
CriteriaBuilder cb = em.getCriteriaBuilder();
CriteriaQuery<User> query = cb.createQuery(User.class);
Root<User> root = query.from(User.class);
query.select(root).where(cb.equal(root.get("name"), "Alice"));

List<User> users = em.createQuery(query).getResultList();
```

How it is abstracted:- This builds a SQL query dynamically without directly writing SQL:

```sql
SELECT * FROM users WHERE name = 'Alice';
```

Summary of Abstractions
Task- JDBC (Manual SQL)- JPA (Abstracted)
Entity Mapping- Write SQL for table operations.- Annotate Java classes, and let JPA map them.
Querying- Write SELECT statements manually.- Use JPQL or Criteria API for object-oriented queries.
Inserting Data- Use INSERT INTO queries.- Call persist() on an entity.
Updating Data- Write UPDATE statements.- Call merge() on an entity.
Relationships- Manually manage foreign keys.- Use annotations like @OneToMany, @ManyToOne.
Transactions- Explicitly manage commit/rollback in SQL.- Use EntityTransaction with abstracted methods.

JPA reduces the need for boilerplate SQL, minimizes error-prone code, and provides a cleaner, object-oriented approach to database interactions.

`Java Persistence API vs. Jakarta Persistence Layer`:- Java Persistence API (JPA) and Jakarta Persistence Layer (JPL) are both popular frameworks for managing relational data in Java applications. While JPA has been around for a longer time, JPL was introduced as part of the Jakarta EE specifications after Java EE was transferred to the Eclipse Foundation.

Java Persistence API (JPA) - Java Persistence API (JPA) is a Java specification for managing relational data in Java applications. It is part of the Java EE and Jakarta EE specifications and provides an Object-Relational Mapping (ORM) framework to map Java objects to relational database tables. JPA allows developers to interact with relational databases in an object-oriented way, abstracting the underlying SQL.

Jakarta Persistence Layer (JPL) - Jakarta Persistence Layer (JPL) is the successor to JPA and is part of the Jakarta EE specifications. It is built upon JPA and provides similar functionality for managing relational data in Java applications. The primary difference is the change of package names, from javax.persistence to jakarta.persistence.

Both Java Persistence API (JPA) and Jakarta Persistence Layer (JPL) provide robust frameworks for managing relational data in Java applications. They both offer similar functionality, and the primary difference is the change of package names.

Jakarta Persistence is the API for the management for persistence and object/relational mapping.


Challenges with JDBC:-

1. Error Handling
2. Key Management issues
3. Implementation varies
4. Potential of Errors
5. Verbose codes
