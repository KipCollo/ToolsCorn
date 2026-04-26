# ORM

Object/Relational Mapping refers to the technique of mapping data from an object model representation to a relational data model representation (and vice versa).

Reasons for ORM:-
1. Problem of Granularity - When using JDBC,working with two tables can be hard,one can prefer to have many classes with fewer tables,hence number of classes mapping to the number of tables in database sometimes does not match.
2. Problem of subtype - OOP supports inheritance but inheritance is not defined explicitly in any standardized RDBMS.
3. Problem of Association - OOP represents associations(has-a relationship) using object references but RDBMS association is by foreign key column.
4. Problem of identity - Java defines similarity using == and equals but RDBMS uses a primary key.
5. Problem of data navigation - Java uses . operator to navigate but RDBMS uses JOINS to navigate.

The solutions of the problem above is solved by ORM
1. ORM resolves Object_Relational impedance mismatch.
2. Handles lower-level interaction with database.
3. Helps developer get rid of messy SQL.
4. Database independent.


## Java Persistence API

- JPA(Java Persistence API) is an object-relational mapping specification that makes it easier to convert between the business objects and the relational database of an application.JPA offers several features that make it easier to use than JDBC.
    1. JPA can automatically create database tables based on relationships between business objects.
    2. JPA can automatically convert between objects and rows in a relational database.
    3. JPA can automatically perform joins to satisfy relationships between objects.

JPA runs on top of JDBC.As a result, it's compatible with any database that has a JDBC driver.
There are several implementations of JPA.All of them follow the JPA specification.Full Java EE servers typically provide their own implementation of JPA.`Glassfish` uses `TopLink`, and `WildFly` uses `Hibernate`.When you use `Tomcat` you can choose the JPA implementation.Other implementation is `EcipseLink`,`MyBatis`.


**Entity**:- An entity is a lightweight persistence domain object.Entities support inheritance, polymorphic associations, and polymorphic queries.
Typically an entity represents a table in a relational database, and each entity instance corresponds to a row in that table. The primary programming artifact of an entity is the entity class, although entities can use helper classes or that are used to represent the state of the entity.

When working with JPA, business objects are known as entities and are managed by an entity manager.In a full Java EE server such as Glassfish,the server provides a built-in entity manager that includes advanced features such as automatic transaction rollback.
To turn a normal business class into an entity, you code annotations in the class.These annotations specify how the class should be stored in a database,and they specify how one class relates to another.Because these classes are just plain old java objects(POJOs) with annotations,you can still use these classes without JPA.In that case, the annotations are ignored..

- *Entity Class*:- An entity class must follow these requirements:
    1. The entity class must be annotated with the Entity annotation(javax.persistence.Entity) or declared as an entity in the XML descriptor.
    2. The entity class must be a top-level class or a static inner class. An enum, record, or interface may not be designated as an entity.
    3. The entity class must have a public or protected constructor with no parameters, which is called by the persistence provider runtime to instantiate the entity.The entity class may have additional constructors for use by the application.
    4. The entity class must be non-final. Every method and persistent instance variable of the entity class must be non-final.
    5. If an entity instance must be passed by value as a detached object, such as through a session bean’s remote business interface, the class must implement the Serializable interface.
    6. An entity might be an abstract class, or it might be a concrete class. An entity may extend a non-entity class, or it may extend another entity class. A non-entity class may extend an entity class.
    7. Persistent instance variables must be declared private, protected, or package-private, and can only be accessed directly by the entity class’s methods. Clients must access the entity’s state through accessor or business methods.

The persistent state of an entity is represented by instance variables, which may correspond to JavaBeans properties.The persistent state of an entity is represented either through persistent fields or persistent properties. These fields or properties use object/relational mapping annotations to map the entities and entity relationships to the relational data in the underlying data store.
An instance variable may be directly accessed only within the methods of the entity, by the entity instance itself. An instance variable of an entity must not be directly accessed by a client of the entity. The state of the entity is available to clients only through the methods of the entity—that is, via accessor (getter/setter) methods, or via other business methods.

On the other hand, the entity class may be either concrete or abstract, and it may have any number of additional constructors.An entity class may be a static inner class.
Every entity class must be annotated @Entity.

```java
@Entity
class Book {
    Book() {}
    ...
}
```

Alternatively, the class may be identified as an entity type by providing an XML-based mapping for the class.

Mapping entities using XML - When XML-based mappings are used, the <entity> element is used to declare an entity class:/home/collins/Documents/02_Computer_Science/01_Programming/Java/Projects/java_databases

```xml
<entity-mappings>
    <package>org.hibernate.example</package>

    <entity class="Book">
        <attributes> ... </attributes>
    </entity>

</entity-mappings>
```

- `@Entity`:- Specifies that the class is an entity. This annotation is applied to the entity class.
    - name - (Optional) The entity name. Defaults to the unqualified name of the entity class. This name is used to refer to the entity in queries(context). The name must not be a reserved literal in the Jakarta Persistence query language.

- `@Table`:- Specifies the primary table for the annotated entity. Additional tables may be specified using SecondaryTable or SecondaryTables annotation.If no Table annotation is specified for an entity class, the default values apply.
    1. name - (Optional) The name of the table.Defaults to the entity name.
    2. catalog - (Optional) The catalog of the table.Defaults to the default catalog.
    3. schema - (Optional) The schema of the table.Defaults to the default schema for user.
    4. uniqueConstraints - (Optional) Unique constraints that are to be placed on the table. These are only used if table generation is in effect. These constraints apply in addition to any constraints specified by the Column and JoinColumn annotations and constraints entailed by primary key mappings.Defaults to no additional constraints.
    5. indexes - (Optional) Indexes for the table. These are only used if table generation is in effect. Note that it is not necessary to specify an index for a primary key, as the primary key index will be created automatically.

```java
@Table(name= "products", schema = "ecommerce", uniqueConstraints={@UniqueConstraint=(name="cln_unique",columnNames="email"),@UniqueConstraint=(name="cln_unique",columnNames="pass")})
public class Product{}
```

- *Persistent Fields and Properties in Entity Classes*:- The persistent state of an entity is accessed by the persistence provider runtime via either:
    1. property access using JavaBeans-style property accessors.
    2. field access, that is, direct access to instance variables.

The instance variables of a class must have private, protected, or package visibility, independent of whether field access or property access is used. When property access is used, the property accessor methods must be public or protected.

- The type of a persistent field or property of an entity class may be:
    1. any basic type listed below including any Java enum type.
    2. an entity type or a collection of some entity type.
    3. an embeddable class.
    4. a collection of a basic type or embeddable type.

The fields or properties must be of the following Java language types:- Java primitive types, java.lang.String, Wrappers of Java primitive types, java.math.BigInteger, java.math.BigDecimal, java.util.Date, java.util.Calendar, java.sql.Date, java.sql.Time, java.sql.TimeStamp, User-defined serializable types, byte[], Byte[], char[], Character[], Enumerated types, Other entities and/or collections of entities, Embeddable classes, Collection of basic type or embaeddable type.

Object/relational mapping metadata may be specified to customize the object/relational mapping and the loading and storing of the entity state and relationships
- The placement of object/relational mapping annotations depends on whether property access or field access is used:
    1. When field access is used, mapping annotations must be placed on instance variables, and the persistence provider runtime accesses instance variables directly. Every non-transient instance variable not annotated with the Transient annotation is persistent.
    2. When property-based access is used, mapping annotations must be placed on getter methods , and the persistence provider runtime accesses persistent state via the property accessor methods. Every property not annotated with the Transient annotation is persistent.

Mapping annotations must not be applied to fields or properties marked transient or Transient, since those fields and properties are not persistent.

Collection-valued persistent fields and properties must use the supported Java collection interfaces regardless of whether the entity uses persistent fields or properties. The following collection interfaces may be used:- java.util.Collection,java.util.Set,java.util.List,java.util.Map. Use of the generic variants of these collection types is strongly encouraged, for example, Set<Order> is preferred to the raw type Set.
A collection implementation type such as HashSet or ArrayList may be used by the application to initialize a collection-valued field or property before the entity is made persistent. Once the entity becomes managed (or detached),subsequent access to the collection must be through the interface type.

<!-- `Persistent Attribute Type`:- The enumeration jakarta.persistence.metamodel.Attribute.PersistentAttributeType defines a classification of persistent entity attributes: BASIC for basic attributes, EMBEDDED for embedded attributes, ELEMENT_COLLECTION for element collections,and MANY_TO_ONE, ONE_TO_ONE, ONE_TO_MANY, and MANY_TO_MANY for associations of the indicated multiplicity. Each persistent attribute of an entity belongs to exactly one of the listed types.
It is an error for an attribute of an entity to be annotated with mapping annotations indicating conflicting persistent attribute types. For example, an field may not be annotated @Basic @Embedded, @ManyToOne @ElementCollection, or @OneToOne @ManyToMany. The persistence provider must detect such contradictory combinations of mapping annotations and report the error


Entities may either use persistent fields or persistent properties. If the mapping annotations are applied to the entity’s instance variables, the entity uses persistent fields. If the mapping annotations are applied to the entity’s getter methods for JavaBeans-style properties, the entity uses persistent properties. You cannot apply mapping annotations to both fields and properties in a single entity.

Object/relational mapping metadata may be specified to customize the object/relational mapping and the loading and storing of the entity state and relationships.

- `Persistent Fields`:- If the entity class uses persistent fields, the Persistence runtime accesses entity class instance variables directly. All fields not annotated javax.persistence.Transient or not marked as Java transient will be persisted to the data store. The object/relational mapping annotations must be applied to the instance variables.
Persistent Properties

If the entity uses persistent properties, the entity must follow the method conventions of JavaBeans components. JavaBeans-style properties use getter and setter methods that are typically named after the entity class’s instance variable names. For every persistent property property of type Type of the entity, there is a getter method getProperty and setter method setProperty. If the property is a boolean, you may use isProperty instead of getProperty. For example, if a Customer entity uses persistent properties, and has a private instance variable called firstName, the class defines a getFirstName and setFirstName method for retrieving and setting the state of the firstName instance variable.

The method signature for single-valued persistent properties are as follows:

Type getProperty()
void setProperty(Type type) -->


**Primary Keys and Entity Identity**:- Each entity has a unique object identifier. A customer entity, for example, might be identified by a customer number. The unique identifier, or primary key, enables clients to locate a particular entity instance.
Every entity must have a primary key. An entity may have either a `simple` or a `composite` primary key.The value of its primary key uniquely identifies an entity instance within a persistence context and to operations of the EntityManager.

- The primary key must be declared by:
    1. The entity class that is the root of the entity hierarchy, or
    2. A mapped superclass that is a (direct or indirect) superclass of all entity classes in the entity hierarchy.

A primary key must be defined exactly once in each entity hierarchy.

- A primary key comprises one or more fields or properties of the entity class.
    1. A `simple primary key` is a single persistent field or property of the entity class whose type is one of the legal simple primary key types listed below. The Id annotation or id XML element must be used to identify the simple primary key.
    2. A `composite primary key` must correspond to either a single persistent field or property, or to a set of fields or properties.A primary key class must be defined to represent the composite primary key.Composite primary keys must be defined in a primary key class. Composite primary keys are denoted using the javax.persistence.EmbeddedId and javax.persistence.IdClass annotations.
        - If the composite primary key corresponds to a single field or property of the entity, the EmbeddedId annotation identifies the primary key, and the type of the annotated field or property is the primary key class.
        - Otherwise, when the composite primary key corresponds to multiple fields or properties, the Id annotation identifies the fields and properties which comprise the composite key, and the IdClass annotation must specify the primary key class.Simple primary keys use the javax.persistence.Id annotation to denote the primary key property or field.

The primary key, or the property or field of a composite primary key, must be one of the following Java language types:- Java primitive types, Java primitive wrapper types, java.lang.String, java.util.UUID, java.util.Date (the temporal type should be DATE), java.time.LocalDate, java.sql.Date.

If a primary key field or property has type java.util.Date, the temporal type must be explicitly specified as DATE using the Temporal annotation or by equivalent XML.
If the primary key is a composite primary key derived from the primary key of another entity, the primary key may contain an attribute whose type is that of the primary key of the referenced entity.
An entity with a primary key involving any type other than the types listed above is not portable. If the primary key is generated by the persistence provider and its type is not long, int, java.util.UUID,java.lang.String, java.lang.Long, or java.lang.Integer, the entity is not portable.
Floating point types should never be used in primary keys. If you use a generated primary key, only integral types will be portable.

The following rules apply to composite primary keys:
1. The primary key class may be a non-abstract regular Java class with a public or protected constructor with no parameters. Alternatively, the primary key class may be any Java record type, in which case it need not have a constructor with no parameters.
2. The access type (FIELD or PROPERTY) of a primary key class is determined by the access type of the entity for which it is the primary key, unless the primary key is an embedded id and an explicit access type is specified using the Access annotation.
3. If property-based access is used, the properties of the primary key class must be public or protected.
4. The primary key class must define equals and hashCode methods. The semantics of value equality for these methods must be consistent with the database equality for the database types to which the key is mapped.
5. A composite primary key must either be represented and mapped as an embeddable class (see Section 11.1.17) or it must be represented as an id class and mapped to multiple fields or properties of the entity class (see Section 11.1.23).
6. If the composite primary key class is represented as an id class, the names of primary key fields or properties of the primary key class and those of the entity class to which the id class is mapped must correspond and their types must be the same.

A primary key class must meet these requirements:

1. The access control modifier of the class must be public.
2. The properties of the primary key class must be public or protected if property-based access is used.
3. The class must have a public default constructor.
4. The class must implement the hashCode() and equals(Object other) methods.
5. The class must be serializable.
6. A composite primary key must be represented and mapped to multiple fields or properties of the entity class, or must be represented and mapped as an embeddable class.
7. If the class is mapped to multiple fields or properties of the entity class, the names and types of the primary key fields or properties in the primary key class must match those of the entity class.

*Identifier attributes*:- An identifier attribute is usually a field But also it may be a property:

```java
//field
@Id
Long id;

//property
private Long id;

@Id
Long getId() { return id; }
void setId(Long id) { this.id = id; }
```

An identifier attribute must be annotated @Id or @EmbeddedId.
Identifier values may be:

- assigned by the application, that is, by your Java code, or
- generated and assigned by Hibernate.

`@Id`:- Specifies the primary key of an entity. The field or property to which the Id annotation is applied should be one of the following types: any Java primitive type; any primitive wrapper type; String; java. util. Date; java. sql. Date; java. math. BigDecimal; java. math. BigInteger.
The mapped column for the primary key of the entity is assumed to be the primary key of the primary table. If no Column annotation is specified, the primary key column name is assumed to be the name of the primary key property or field.
Always use Wrapper classes over primitive type coz primitive has a default value while wrapper is null.

```java
@Id
private Integer id;
```

*Generated identifiers*:- An identifier is often system-generated, in which case it should be annotated @GeneratedValue:

```java
@Id 
@GeneratedValue
Long id;
```

- `@GeneratedValue`:- Provides for the specification of generation strategies for the values of primary keys.The GeneratedValue annotation may be applied to a primary key property or field of an entity or mapped superclass in conjunction with the Id annotation. The use of the GeneratedValue annotation is only required to be supported for simple primary keys. Use of the GeneratedValue annotation is not supported for derived primary keys.
    1. GenerationType strategy() default AUTO - (Optional) The primary key generation strategy that the persistence provider must use to generate the annotated entity primary key.
    2. String generator() default ""; - (Optional) The name of the primary key generator to use as specified in the SequenceGenerator or TableGenerator annotation.Defaults to the id generator supplied by persistence provider

- `GenerationType `:- Defines the types of primary key generation strategies.JPA defines the following strategies for generating ids:-
    1. TABLE - Indicates that the persistence provider must assign primary keys for the entity using an underlying database table to ensure uniqueness.
    2. SEQUENCE - Indicates that the persistence provider must assign primary keys for the entity using a database sequence.Is used to generate primary key values and uses a database sequence to generate unique values.It requires additional select statements to get next value from a database sequence,but this has no performance impact on most applications.
    The @SequenceGenerator lets you define the name of generator and schema of db sequence and allocation size.
    3. IDENTITY - Indicates that the persistence provider must assign primary keys for the entity using a database identity column.Long or Integer - An identity or autoincrement column.It relies on auto-incremented database column and lets database generate new value with each insert operation i.e autoincrement.Not good for JDBC batch operations.
    4. UUID - Indicates that the persistence provider must assign primary keys for the entity by generating an RFC 4122 Universally Unique IDentifier.UUID or String - A Java UUID.Hard to implement fetch by id.
    5. AUTO - Indicates that the persistence provider should pick an appropriate strategy for the particular database. The AUTO generation strategy may expect a database resource to exist, or it may attempt to create one. A vendor may provide documentation on how to create such resources in the event that it does not support schema generation or cannot create the schema resource at runtime. Default generation type and lets the persistence provider choose the generation strategy.If you use Hibernate as persistence provider,it selects a generation strategy based on database-specific dialect.Most popular database uses GenerationType.SEQUENCE. Long or Integer - Selects SEQUENCE, TABLE, or UUID based on the identifier type and capabilities of the database

System-generated identifiers, or surrogate keys make it easier to evolve or refactor the relational data model. If you have the freedom to define the relational schema, we recommend the use of surrogate keys.

```java
@GeneratedValue(strategy=SEQUENCE, generator="CUST_SEQ")
@GeneratedValue(strategy=TABLE, generator="CUST_GEN")

@GeneratedValue(strategy = GenerationType.SEQUENCE,generator ="product_generator")
@SequenceGenerator(name ="product_generator",sequenceName="product_sequence_name",allocationSize=50)//after restarting application,new primary key will be update by the value i.e 52 instead of 3

@GeneratedValue(strategy = GenerationType.TABLE,generator ="product_id_generator")
@TableGenerator(name ="product_id_generator",table="product__name",allocationSize=1,pkColumnName="id_name",valueColumnName="id_value")
```

UUID is generated in Java code:

```java
@Id
@GeneratedValue 
UUID id;  // AUTO strategy selects UUID based on the field type
```

IDENTITY - This id maps to a SQL identity, auto_increment, or bigserial column:

```java
@Id 
@GeneratedValue(strategy = GenerationType.IDENTITY) 
Long id;
```

The @SequenceGenerator and @TableGenerator annotations allow further control over SEQUENCE and TABLE generation respectively.

```java
@SequenceGenerator(name="bookSeq", sequenceName="seq_book", initialValue = 5, allocationSize=10)
```

Values are generated using a database sequence defined as follows:

```sql
create sequence seq_book start with 5 increment by 10
```

Notice that Hibernate doesn’t have to go to the database every time a new identifier is needed. Instead, a given process obtains a block of ids, of size allocationSize, and only needs to hit the database each time the block is exhausted.
If you let Hibernate export your database schema, the sequence definition will have the right start with and increment values. But if you’re working with a database schema managed outside Hibernate, make sure the initialValue and allocationSize members of @SequenceGenerator match the start with and increment specified in the DDL.
Any identifier attribute may now make use of the generator named bookSeq :

```java
@Id
@GeneratedValue(strategy=SEQUENCE, generator="bookSeq") // reference to generator defined elsewhere
Long id;
```

Actually, it’s extremely common to place the @SequenceGenerator annotation on the @Id attribute that makes use of it:

```java
@Id
@GeneratedValue(strategy=SEQUENCE, generator="bookSeq") // reference to generator defined below
@SequenceGenerator(name="bookSeq", sequenceName="seq_book", initialValue = 5, allocationSize=10)
Long id;
```

JPA id generators may be shared between entities. A @SequenceGenerator or @TableGenerator must have a name,and may be shared between multiple id attributes. This fits somewhat uncomfortably with the common practice of annotating the @Id attribute which makes use of the generator!
As you can see, JPA provides quite adequate support for the most common strategies for system-generated ids. However, the annotations themselves are a bit more intrusive than they should be, and there’s no well-defined way to extend this framework to support custom strategies for id generation. Nor may @GeneratedValue be used on a property not annotated @Id . Since custom id generation is a rather common requirement, Hibernate provides a very carefully-designed framework for user-defined Generator s, which we’ll discuss in User-defined generators.

- *Composite identifiers*:- If your database uses composite keys, you’ll need more than one identifier attribute. There are two ways to map composite keys in JPA:
    1. using an @IdClass.
    2. using an @EmbeddedId.

Perhaps the most immediately-natural way to represent this in an entity class is with multiple fields annotated @Id, for example:

```java
@Entity
@IdClass(BookId.class)
class Book {
    Book() {}

    @Id
    String isbn;
    @Id
    int printing;
}
```

You write a separate class with fields that match the identifier attributes of the entity. Every such id class must override equals() and hashCode() . Of course, the easiest way to satisfy these requirements is to declare the id class as a record.

```java
record BookId(String isbn,int printing) {}
```

The `@IdClass` annotation of the Book entity identifies BookId as the id class to use for that entity.

This is not our preferred approach. Instead, we recommend that the BookId class be declared as an @Embeddable type:

```java
@Embeddable
record BookId(String isbn,int printing) {}
```

Now the entity class may reuse this definition using @EmbeddedId , and the @IdClass annotation is no longer required:

```java
@Entity
class Book {
    Book() {}

    @EmbeddedId
    BookId bookId;
}
```


**Entity Versions**:- An entity might have a version, a persistent field or property used by the persistence provider to perform optimistic locking.
The version field or property holds a version number or timestamp identifying the revision of the entity data held by an entity class instance. In the course of performing lifecycle operations involving the entity instance, the persistence provider gets and sets the version field or property of the entity instance to determine or modify its version number or timestamp. The Version annotation or version XML element must be used to explicitly identify the version field or property of an entity.

An entity class may access the state of its version field or property or export a method which allows other user-written code to access the version, but user-written code must not directly modify the value of the version field or property of an entity instance after the entity is made persistent.With the exception of only the persistence provider is permitted to set or update the entity version. If the application does directly modify the value of the version field or property of an entity instance after it is made persistent, the behavior is undefined.

The version must be of one of the following basic types:
- int, Integer, short, Short, long, Long.
- java.time.LocalDateTime, java.time.Instant, or java.sql.Timestamp.

A portable application must not declare a version field or property with any other type.
An entity class should have at most one version. A portable application must not define an entity class having more than one version field or property.
The version should be declared by the root entity class in an entity class hierarchy, or by one of its mapped superclasses. A portable application must not declare a version field or property in a subclass of the root class of an entity class hierarchy.


**Entity Relationships**:- Relationships among entities may be one-to-one, one-to-many, many-to-one, or many-to-many.
Relationships are polymorphic.If there is an association between two entities, one of the following relationship modeling annotations must be applied  to the corresponding persistent property or field of the referencing entity: @OneToOne, @OneToMany, @ManyToOne, @ManyToMany. For associations that do not specify the target type (e.g., where Java generic types are not used for collections), it is necessary to specify the entity that is the target of the relationship.
Equivalent XML elements may be used as an alternative to these mapping annotations.

These annotations mirror common practice in relational database schema modeling. The use of the relationship modeling annotations allows the object/relationship mapping of associations to the relational database schema to be fully defaulted, to provide an ease-of-development facility.

Relationships may be bidirectional or unidirectional. A bidirectional relationship has both an owning side and an inverse (non-owning) side. A unidirectional relationship has only an owning side. The owning side of a relationship determines the updates to the relationship in the database.

`Unidirectional Relationships`:- In a unidirectional relationship, only one entity has a relationship field or property that refers to the other. For example, LineItem would have a relationship field that identifies Product, but Product would not have a relationship field or property for LineItem. In other words, LineItem knows about Product, but Product doesn’t know which LineItem instances refer to it.

`Bidirectional Relationships`:- In a bidirectional relationship, each entity has a relationship field or property that refers to the other entity. Through the relationship field or property, an entity class’s code can access its related object. If an entity has a related field, then the entity is said to “know” about its related object. For example, if Order knows what LineItem instances it has and if LineItem knows what Order it belongs to, then they have a bidirectional relationship.
Bidirectional relationships must follow these rules:

1. The inverse side of a bidirectional relationship must refer to its owning side by using the mappedBy element of the @OneToOne, @OneToMany, or @ManyToMany annotation. The mappedBy element designates the property or field in the entity that is the owner of the relationship.
2. The many side of many-to-one bidirectional relationships must not define the mappedBy element. The many side is always the owning side of the relationship.
3. For one-to-one bidirectional relationships, the owning side corresponds to the side that contains the corresponding foreign key.
4. For many-to-many bidirectional relationships either side may be the owning side.

The relationship modeling annotation constrains the use of the cascade=REMOVE specification. The cascade=REMOVE specification should only be applied to associations that are specified as OneToOne or OneToMany. Applications that apply  cascade=REMOVE to other associations are not portable.

Queries and Relationship Direction:- Java Persistence query language queries often navigate across relationships. The direction of a relationship determines whether a query can navigate from one entity to another. For example, a query can navigate from LineItem to Product but cannot navigate in the opposite direction. For Order and LineItem, a query could navigate in both directions, because these two entities have a bidirectional relationship.

Cascade Deletes and Relationships:- Entities that use relationships often have dependencies on the existence of the other entity in the relationship. For example, a line item is part of an order, and if the order is deleted, then the line item should also be deleted. This is called a cascade delete relationship.
<!-- 
`CascadeType`:- Defines the set of cascadable operations that are propagated to the associated entity. The value cascade=ALL is equivalent to cascade={PERSIST, MERGE, REMOVE, REFRESH, DETACH}.

Cascade delete relationships are specified using the cascade=REMOVE element specification for @OneToOne and @OneToMany relationships. For example:

@OneToMany(cascade=REMOVE, mappedBy="customer")
public Set<Order> getOrders() { return orders; } -->


*Associations*:- An association is a relationship between entities. We usually classify associations based on their multiplicity. If E and F are both entity classes, then:

- a one-to-one association relates at most one unique instance E with at most one unique instance of F,
- a many-to-one association relates zero or more instances of E with a unique instance of F, and
- a many-to-many association relates zero or more instances of E with zero or more instance of F.

An association between entity classes may be either:

1. unidirectional, navigable from E to F but not from F to E, or
2. bidirectional, and navigable in either direction.

There are three annotations for mapping associations: @ManyToOne, @OneToMany, and @ManyToMany. They share some common annotation members:

1. cascade - Persistence operations which should cascade to the associated entity; a list of CascadeTypes - {}
2. fetch - Whether the association is eagerly fetched or may be proxied -LAZY for @OneToMany and @ManyToMany, EAGER for @ManyToOne.
3. targetEntity - The associated entity class - Determined from the attribute type declaration
4. optional - For a @ManyToOne or @OneToOne association, whether the association can be null - true
5. mappedBy - For a bidirectional association, an attribute of the associated entity which maps the association - By default, the association is assumed unidirectional

`Many-to-one`:- A many-to-one association is the most basic sort of association. It maps completely naturally to a foreign key in the database.
The @ManyToOne annotation marks the "to one" side of the association, so a unidirectional many-to-one association looks like this:

```java
class Book {
    @Id
    @GeneratedValue
    Long id;

    @ManyToOne(fetch=LAZY)
    Publisher publisher;

    ...
}
```

A very unfortunate misfeature of JPA is that @ManyToOne associations are fetched eagerly by default. This is almost never what we want. Almost all associations should be lazy.The only scenario in which fetch=EAGER makes sense is if we think there’s always a very high probability that the associated object will be found in the second-level cache.Whenever this isn’t the case, remember to explicitly specify fetch=LAZY.

Most of the time, we would like to be able to easily navigate our associations in both directions. We do need a way to get the Publisher of a given Book, but we would also like to be able to obtain all the Books belonging to a given publisher.
To make this association bidirectional, we need to add a collection-valued attribute to the Publisher class, and annotate it @OneToMany.

Hibernate needs to proxy unfetched associations at runtime. Therefore, the many-valued side must be declared using an interface type like Set or List, and never using a concrete type like HashSet or ArrayList.
To indicate clearly that this is a bidirectional association, and to reuse any mapping information already specified in the Book entity, we must use the mappedBy annotation member to refer back to Book.publisher.

```java
@Entity
class Publisher {
    @Id
    @GeneratedValue
    Long id;

    @OneToMany(mappedBy="publisher")
    Set<Book> books;

    ...
}
```

The Publisher.books field is called the unowned side of the association.
Now, we passionately hate the stringly-typed mappedBy reference to the owning side of the association. Thankfully, the Metamodel Generator gives us a way to make it a bit more typesafe:

```java
@OneToMany(mappedBy=Book_.PUBLISHER) // get used to doing it this way!
Set<Book> books;
```

To modify a bidirectional association, we must change the owning side.
Changes made to the unowned side of an association are never synchronized to the database. If we desire to change an association in the database, we must change it from the owning side. Here, we must set Book.publisher.


`Many-to-many`:- A unidirectional many-to-many association is represented as a collection-valued attribute. It always maps to a separate association table in the database.
A many-to-many association must be annotated @ManyToMany:

```java
@Entity
class Book {
    @Id @GeneratedValue
    Long id;

    @ManyToMany
    Set<Author> authors;

    ...
}
```

If the association is bidirectional, we add a very similar-looking attribute to Book, but this time we must specify mappedBy to indicate that this is the unowned side of the association:

```java
@Entity
class Book {
    @Id
    @GeneratedValue
    Long id;

    @ManyToMany(mappedBy=Author_.BOOKS)
    Set<Author> authors;
    ...
}
```

- `@ManyToMany`:- A ManyToMany annotation defines a many-valued association with many-to-many multiplicity. If the collection is defined using generics to specify the element type, the associated target entity class does not need to be specified; otherwise it must be specified.
Every many-to-many association has two sides, the owning side and the non-owning, or inverse, side. If the association is bidirectional, either side may be designated as the owning side. If the relationship is bidirectional, the non-owning side must use the mappedBy element of the ManyToMany annotation to specify the relationship field or property of the owning side.
The join table for the relationship, if not defaulted, is specified on the owning side.
The ManyToMany annotation may be used within an embeddable class contained within an entity class to specify a relationship to a collection of entities.If the relationship is bidirectional and the entity containing the embeddable class is the owner of the relationship, the non-owning side must use the mappedBy element of the ManyToMany annotation to specify the relationship field or property of the embeddable class. The dot ("." ) notation syntax must be used in the mappedBy element to indicate the relationship attribute within the embedded attribute. The value of each identifier used with the dot notation is the name of the respective embedded field or property.

A Many-to-Many relationship takes into consideration two tables (the ones which are going to relate) and a middle table negotiating between both.
The reason why we need to implement a middle table when dealing with many-to-many data, it’s because data is going to be fixed on both the two tables, therefore we can’t go on saving data randomly on one of them (or both) to save the data dealing/transaction.
Without a middle table, we’d be infringing norms and principles about database scalation.Our middle entity will hold the negotiation records between the two tables which are dealing data.

When working with these kind of relationships we got to manually incorporate our middle table in the Java code with a specific annotation: @JoinTable.

```java
//Owner class
@ManyToMany(fetch = FetchType.EAGER,cascade = CascadeType.PERSIST)
@JoinTable(name="pets",
    joinColumns = {@JoinColumn(name= "owner_id", referencedColumnName = "ownerId")},
    inverseJoinColumns = {@JoinColumn(name= "pet_id", referencedColumnName = "petId")}
)
public Set<Pet> pets = new HashSet<>();

//Pet class
@ManyToMany(mappedBy="pets",fetch = FetchType.EAGER,cascade = CascadeType.PERSIST)
public Set<Owner> owners= new HashSet<>();

@ManyToMany(targetEntity=com.acme.PhoneNumber.class)
public Set getPhones() { return phones; }

@ManyToMany(targetEntity=com.acme.Customer.class, mappedBy="phones")
public Set getCustomers() { return customers; }
```

- `@OneToOne`:- Specifies a single-valued association to another entity that has one-to-one multiplicity. It is not normally necessary to specify the associated target entity explicitly since it can usually be inferred from the type of the object being referenced. If the relationship is bidirectional, the non-owning side must use the mappedBy element of the OneToOne annotation to specify the relationship field or property of the owning side.
    1. mappedBy - (Optional) The field that owns the relationship. This element is only specified on the inverse (non-owning) side of the association.
    2. cascade - (Optional) The operations that must be cascaded to the target of the association.By default no operations are cascaded.
    3. fetch - (Optional) Whether the association should be lazily loaded or must be eagerly fetched. The EAGER strategy is a requirement on the persistence provider runtime that the associated entity must be eagerly fetched. The LAZY strategy is a hint to the persistence provider runtime.
    4. orphanRemoval - (Optional) Whether to apply the remove operation to entities that have been removed from the relationship and to cascade the remove operation to those entities.
The OneToOne annotation may be used within an embeddable class to specify a relationship from the embeddable class to an entity class. If the relationship is bidirectional and the entity containing the embeddable class is on the owning side of the relationship, the non-owning side must use the mappedBy element of the OneToOne annotation to specify the relationship field or property of the embeddable class. The dot (".") notation syntax must be used in the mappedBy element to indicate the relationship attribute within the embedded attribute. The value of each identifier used with the dot notation is the name of the respective embedded field or property.
 
```java
// On Customer class:
@OneToOne(optional=false)
@JoinColumn(name="CUSTREC_ID",referencedColumnName ="id", unique=true, nullable=false, updatable=false)
public CustomerRecord getCustomerRecord() { return customerRecord; }
 
// On CustomerRecord class:
@OneToOne(optional=false, mappedBy="customerRecord")
public Customer getCustomer() { return customer; }

//Owner class
@OneToOne(cascade = CascadeType.ALL)//when you fetch owner, the pet is also fetched.
@JoinColumn(name="pet_id", referencedColumnName = "id", unique = true)
private Pet pet

//Pet class
private Integer id;
```

One-to-one (first way):- The simplest sort of one-to-one association maps to a foreign key column with a UNIQUE constraint.A one-to-one association must be annotated @OneToOne:

```java
@Entity
class Author {
    @Id 
    @GeneratedValue
    Long id;

    @OneToOne(optional=false, fetch=LAZY)
    Person author;
    ...
}
```

We can make this association bidirectional by adding a reference back to the Author in the Person entity:

```java
@Entity
class Person {
    @Id 
    @GeneratedValue
    Long id;

    @OneToOne(mappedBy = Author_.PERSON)
    Author author;

    ...
}
```

One-to-one (second way):- An arguably more elegant way to represent such a relationship is to share a primary key between the two tables.
To use this approach, the Author class must be annotated like this:

```java
@Entity
class Author {
    @Id
    Long id;

    @OneToOne(optional=false, fetch=LAZY)
    @MapsId
    Person author;
    ...
}
```

Notice that, compared with the previous mapping,the @Id attribute is no longer a @GeneratedValue and, instead, the author association is annotated @MapsId.This lets Hibernate know that the association to Person is the source of primary key values for Author.
Here, there’s no extra foreign key column in the Author table, since the id column holds the identifier of Person. That is, the primary key of the Author table does double duty as the foreign key referring to the Person table.


`@OneToMany`:- Specifies a many-valued association with one-to-many multiplicity.
If the collection is defined using generics to specify the element type, the associated target entity type need not be specified; otherwise the target entity class must be specified. If the relationship is bidirectional, the mappedBy element must be used to specify the relationship field or property of the entity that is the owner of the relationship.
The OneToMany annotation may be used within an embeddable class contained within an entity class to specify a relationship to a collection of entities. If the relationship is bidirectional, the mappedBy element must be used to specify the relationship field or property of the entity that is the owner of the relationship. When the collection is a java. util. Map, the cascade element and the orphanRemoval element apply to the map value.

```java
// In Customer class:
@OneToMany(cascade=ALL, mappedBy="customer")
public Set<Order> getOrders() { return orders; }
 
// In Order class:
@ManyToOne
@JoinColumn(name="CUST_ID", nullable=false)
public Customer getCustomer() { return customer; }
```

- `@JoinColumn Annotation`:- The JoinColumn annotation is used to specify a column for joining an entity association or element collection.The parameters include:-
    1. name - The name of the foreign key column. The table in which it is found depends upon the context.
        - If the join is for a OneToOne or ManyToOne mapping using a foreign key mapping strategy, the foreign key column is in the table of the source entity or embeddable.
        - If the join is for a unidirectional OneToMany mapping using a foreign key mapping strategy, the foreign key is in the table of the target entity.
        - If the join is for a ManyToMany mapping or for a OneToOne or bidirectional ManyToOne/OneToMany mapping using a join table, the foreign key is in a join table.
        - If the join is for an element collection, the foreign key is in a collection table.
        Default (only applies if a single join column is used): The concatenation of the following: the name of the referencing relationship property or field of the referencing entity or embeddable class; `_`; the name of the referenced primary key column. If there is no such referencing relationship property or field in the entity, or if the join is for an element collection, the join column name is formed as the concatenation of the following: the name of the entity; "_"; the name of the referenced primary key column.
    2. referencedColumnName -  The name of the column referenced by this foreign key column.
        - When used with entity relationship mappings other than the cases described here, the referenced column is in the table of the target entity.
        - When used with a unidirectional OneToMany foreign key mapping, the referenced column is in the table of the source entity.
        - When used inside a JoinTable annotation, the referenced key column is in the entity table of the owning entity, or inverse entity if the join is part of the inverse join definition.
        - When used in a CollectionTable mapping, the referenced column is in the table of the entity containing the collection.
        Default (only applies if single join column is being used): The same name as the primary key column of the referenced table.
    3. unique - Whether the property is a unique key. This is a shortcut for the UniqueConstraint annotation at the table level and is useful for when the unique key constraint is only a single field. It is not necessary to explicitly specify this for a join column that corresponds to a primary key that is part of a foreign key.Default is false.
If the JoinColumn annotation itself is defaulted, a single join column is assumed and the default values.
The name annotation element defines the name of the foreign key column. The remaining annotation elements (other than referencedColumnName) refer to this column and have the same semantics as for the Column annotation.
If the referencedColumnName element is missing, the foreign key is assumed to refer to the primary key of the referenced table.
Support for referenced columns that are not primary key columns of the referenced table is optional. Applications that use such mappings will not be portable.
The foreignKey annotation element is used to specify or control the generation of a foreign key constraint when schema generation is in effect. If this element is not specified, the persistence provider’s default foreign key strategy will apply.If more than one JoinColumn annotation is applied to a field or property, both the name and the referencedColumnName elements must be specified in each such JoinColumn annotation.

```java
@ManyToOne
@JoinColumn(name="ADDR_ID")
public Address getAddress() { return address; }

@OneToMany
@JoinColumn(name="CUST_ID") // join column is in table for Order
public Set<Order> getOrders() { return orders; }
```


**Inheritance**:- Entities support class inheritance, polymorphic associations, and polymorphic queries. They can extend non-entity classes, and non-entity classes can extend entity classes. Entity classes can be both abstract and concrete.
Both abstract and concrete classes can be annotated with the Entity annotation, mapped as entities, and queried for as entities.

Abstract Entities classes - An abstract class may be declared an entity by decorating the class with @Entity. Abstract entities differ from concrete entities only in that they cannot be instantiated.They can be queried just like concrete queries. If an abstract entity is the target of a query, the query operates on all the concrete subclasses of the abstract entity.

```java
@Entity
public abstract class Employee {
    @Id
    protected Integer employeeId;
    ...
}
@Entity
public class FullTimeEmployee extends Employee {
    protected Integer salary;
    ...
}
@Entity
public class PartTimeEmployee extends Employee {
    protected Float hourlyWage;
}
```

There are three basic strategies that are used when mapping a class or class hierarchy to a relational database:
1. A single table per class hierarchy.
2. A joined subclass strategy, in which fields that are specific to a subclass are mapped to a separate table than the fields that are common to the parent class, and a join is performed to instantiate the subclass.
3. A table per concrete entity class.

Entity Inheritance Mapping Strategies - The mapping of class hierarchies is specified through metadata.You can configure how the Java Persistence provider maps inherited entities to the underlying datastore by decorating the root class of the hierarchy with the @Inheritance annotation.
The strategy is configured by setting the strategy element of @Inheritance to one of the options defined in the javax.persistence.InheritanceType enumerated type:

```java
public enum InheritanceType {
    SINGLE_TABLE,
    JOINED,
    TABLE_PER_CLASS
};
```

The default strategy is InheritanceType.SINGLE_TABLE, and is used if the @Inheritance annotation is not specified on the root class of the entity hierarchy.

`The Single Table per Class Hierarchy Strategy`:- With this strategy, which corresponds to the default InheritanceType.SINGLE_TABLE, all classes in the hierarchy are mapped to a single table in the database. This table has a discriminator column, a column that contains a value that identifies the subclass to which the instance represented by the row belongs.
An implementation is required to support the single table per class hierarchy inheritance mapping strategy and the joined subclass strategy.

- The discriminator column can be specified by using the @DiscriminatorColumn annotation on the root of the entity class hierarchy.@DiscriminatorColumn Elements includes:-
    1. String name - The name of the column in the table to be used as the discriminator column. The default is DTYPE. This element is optional.
    2. DiscriminatorType discriminatorType - The type of the column to be used as a discriminator column. The default is DiscriminatorType.STRING. This element is optional.
    3. String columnDefinition - The SQL fragment to use when creating the discriminator column. The default is generated by the Persistence provider, and is implementation-specific. This element is optional.
    4. String length - The column length for String-based discriminator types. This element is ignored for non-String discriminator types. The default is 31. This element is optional.

The javax.persistence.DiscriminatorType enumerated type is used to set the type of the discriminator column in the database by setting the discriminatorType element of @DiscriminatorColumn to one of the defined types. DiscriminatorType is defined as:

```java
public enum DiscriminatorType {
    STRING,
    CHAR,
    INTEGER
};
```

If @DiscriminatorColumn is not specified on the root of the entity hierarchy and a discriminator column is required, the Persistence provider assumes a default column name of DTYPE, and column type of DiscriminatorType.STRING.

@DiscriminatorValue annotation may be used to set the value entered into the discriminator column for each entity in a class hierarchy. You may only decorate concrete entity classes with @DiscriminatorValue.If @DiscriminatorValue is not specified on an entity in a class hierarchy that uses a discriminator column, the Persistence provider will provide a default, implementation-specific value. If the discriminatorType element of @DiscriminatorColumn is DiscriminatorType.STRING, the default value is the name of the entity.

This strategy provides good support for polymorphic relationships between entities and queries that cover the entire entity class hierarchy also has a single table. However, it requires the columns that contain the state of subclasses to be nullable.

```java
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "category")
@Entity
class Pet{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    String name;
    Gender gender
}

@DiscriminatorValue("Domestic")
@Entity
class DomesticPet extends Pet{
    LocalDate dob;
}

@DiscriminatorValue("Wild")
@Entity
class WildPet extends Pet{
    String birthPlace;
}
```

|   PetID | name       | gender      | dob        | birth_place         | category    |
| ------- | ---------- | ----------- | -----------| ------------ -------|-------------|
| 1       | Tommy      | Male        | 09-09-2020 | NULL                | Domestic    |
| 2       | Muffin     | Female      | NULL       | Colo National Park  | Wild        |


`The Table per Concrete Class Strategy`:- In this strategy, which corresponds to InheritanceType.TABLE_PER_CLASS, each concrete class is mapped to a separate table in the database. All fields or properties in the class, including inherited fields or properties, are mapped to columns in the class’s table in the database.
This strategy provides poor support for polymorphic relationships, and usually requires either SQL UNION queries or separate SQL queries for each subclass for queries that cover the entire entity class hierarchy.

Support for this strategy is optional, and may not be supported by all Java Persistence API providers. The default Java Persistence API provider in the Application Server does not support this strategy.
Does not support GenerationType.IDENTITY.It also has alots of redundant data.

```java
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
@DiscriminatorColumn(name = "category")
@Entity
class Pet{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    String name;
    Gender gender
}

@Table(name="domestic_pet")
@Entity
class DomesticPet extends Pet{
    LocalDate dob;
}

@Table(name="wild_pet")
@Entity
class WildPet extends Pet{
    String birthPlace;
}
```

pet_table:-- Does not contain values

|   ID    | name       | gender      |
| ------- | ---------- | ----------- |


domestic_pet_table:-

|   ID |  name        | dob          | gender  |
| -----|----------- -----------------|---------|
| 1    |  Tommy       |  09-09-2020  | Male    |

wild_pet_table:-

|   ID |  name        | birth_place          | gender  |
| -----|----------- -------------------------|---------|
| 2    |  Muffin      |  Colo National Park  | female  |

pet_table_SEQ:- Stores the next primary key value.

| next_val |
|----------|


`The Joined Subclass Strategy`:- In this strategy, which corresponds to InheritanceType.JOINED, the root of the class hierarchy is represented by a single table, and each subclass has a separate table that only contains those fields specific to that subclass. That is, the subclass table does not contain columns for inherited fields or properties. The subclass table also has a column or columns that represent its primary key, which is a foreign key to the primary key of the superclass table.

This strategy provides good support for polymorphic relationships, but requires one or more join operations to be performed when instantiating entity subclasses. This may result in poor performance for extensive class hierarchies. Similarly, queries that cover the entire class hierarchy require join operations between the subclass tables, resulting in decreased performance.

Some Java Persistence API providers, including the default provider in the Application Server, require a discriminator column in the table that corresponds to the root entity when using the joined subclass strategy. If you are not using automatic table creation in your application, make sure the database table is set up correctly for the discriminator column defaults, or use the @DiscriminatorColumn annotation to match your database schema.

```java
@Inheritance(strategy = InheritanceType.JOINED)
@Entity
class Pet{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    String name;
    Gender gender
}

@Table(name="domestic_pet")
@Entity
class DomesticPet extends Pet{
    LocalDate dob;
}

@Table(name="wild_pet")
@Entity
class WildPet extends Pet{
    String birthPlace;
}
```

pet_table:-

|   ID    | name       | gender      |
| ------- | ---------- | ----------- |
| 1       | Tommy      | Male        |
| 2       | Muffin     | Female      |

domestic_pet_table:-

|   ID |  dob        |
| -----| ------------|
| 1    | 09-09-2020  |

wild_pet_table:-

|   ID |  birth_place        |
| -----| --------------------|
| 2    | Colo National Park  |


*Mapped Superclasses*:- Entities may inherit from superclasses that contain persistent state and mapping information, but are not entities. That is, the superclass is not decorated with the @Entity annotation, and is not mapped as an entity by the Java Persistence provider. These superclasses are most often used when you have state and mapping information common to multiple entity classes.
Typically, the purpose of such a mapped superclass is to define state and mapping information that is common to multiple entity classes.
A mapped superclass, unlike an entity, is not queryable and must not be passed as an argument to EntityManager or Query operations. Persistent relationships defined by a mapped superclass must be unidirectional.

Both abstract and concrete classes may be specified as mapped superclasses. The MappedSuperclass annotation (or mapped-superclass XML descriptor element) is used to designate a mapped superclass.
A class designated as a mapped superclass has no separate table defined for it. Its mapping information is applied to the entities that inherit from it.

```java
@MappedSuperclass
public class Employee {
    @Id
    protected Integer employeeId;
    ...
}
@Entity
public class FullTimeEmployee extends Employee {
    protected Integer salary;
    ...
}
@Entity
public class PartTimeEmployee extends Employee {
    protected Float hourlyWage;
    ...
}
```

Mapped superclasses do not have any corresponding tables in the underlying datastore. Entities that inherit from the mapped superclass define the table mappings. For instance, in the code sample above the underlying tables would be FULLTIMEEMPLOYEE and PARTTIMEEMPLOYEE, but there is no EMPLOYEE table.


`Non-Entity Classes in the Entity Inheritance Hierarchy`:- Entities may have non-entity superclasses, and these superclasses can be either abstract or concrete. The state of non-entity superclasses is non-persistent, and any state inherited from the non-entity superclass by an entity class is non-persistent.
Non-entity superclasses may not be used in EntityManager or Query operations. Any mapping or relationship annotations in non-entity superclasses are ignored.

```java
public class Cart {
    protected Integer operationCount; // transient state
    public Cart() {
        operationCount = 0;
    }
}

@Entity
public class ShoppingCart extends Cart {
    Collection<Item> items = new Vector<Item>();
    public ShoppingCart() {
        super();
    }

    public void addItem(Item item) {
        items.add(item);
        incrementOperationCount();
    }
}
```


**Managing Entities**:- Entities are managed by the entity manager, which is represented by javax.persistence.EntityManager instances. Each EntityManager instance is associated with a persistence context: a set of managed entity instances that exist in a particular data store.
A persistence context is a set of entity instances in which for any given persistent entity identity there is a unique entity instance. Within the persistence context, the entity instances and their lifecycle are managed i.e defines the scope under which particular entity instances are created, persisted, and removed. 

The EntityManager acts as a factory for instances of Query, which are used to control query execution. Query, TypedQuery, StoredProcedureQuery, and related interfaces.
The set of entities that can be managed by a given EntityManager instance is defined by a persistence unit. A persistence unit defines the set of all classes that are related or grouped by the application, and which must be colocated in their mapping to a single database.

Each EntityManager belongs to an EntityManagerFactory with an associated persistence unit.Entities belonging to the same persistence unit may participate in associations. An EntityManager may only manage instances of entities belonging to its persistence unit.Jakarta Persistence features several mechanisms allowing user-written code to react to events occurring within the persistence context.

The *EntityManager interface* defines the methods used to interact with its persistence context. The EntityManager API is used to create and remove persistent entity instances, to find persistent entities by primary key, and to query over persistent entity types and allows queries to be run on entities..

`Container-Managed Entity Managers`:- With a container-managed entity manager, an EntityManager instance’s persistence context is automatically propagated by the container to all application components that use the EntityManager instance within a single Java Transaction Architecture (JTA) transaction.
JTA transactions usually involve calls across application components. To complete a JTA transaction, these components usually need access to a single persistence context.This occurs when an EntityManager is injected into the application components by means of the javax.persistence.PersistenceContext annotation. The persistence context is automatically propagated with the current JTA transaction, and EntityManager references that are mapped to the same persistence unit provide access to the persistence context within that transaction. By automatically propagating the persistence context, application components don't need to pass references to EntityManager instances to each other in order to make changes within a single transaction. The Java EE container manages the lifecycle of container-managed entity managers.
To obtain an EntityManager instance, inject the entity manager into the application component:

```java
@PersistenceContext
EntityManager em;
```

`Application-Managed Entity Managers`:- The persistence context is not propagated to application components, and the life cycle of EntityManager instances is managed by the application.
Application-managed entity managers are used when applications need to access a persistence context that is not propagated with the JTA transaction across EntityManager instances in a particular persistence unit. In this case, each EntityManager creates a new, isolated persistence context. The EntityManager, and its associated persistence context, is created and destroyed explicitly by the application.
Applications create EntityManager instances in this case by using the createEntityManager method of javax.persistence.EntityManagerFactory.

To obtain an EntityManager instance, you first must obtain an EntityManagerFactory instance by injecting it into the application component by means of the javax.persistence.PersistenceUnit annotation:

```java
@PersistenceUnit
EntityManagerFactory emf;
```

Then, obtain an EntityManager from the EntityManagerFactory instance:

```java
EntityManager em = emf.createEntityManager();
```

Application-managed entity managers don't automatically propagate the JTA transaction context. Such applications need to manually gain access to the JTA transaction manager and add transaction demarcation information when performing entity operations. The javax.transaction.UserTransaction interface defines
methods to begin, commit, and roll back transactions. Inject an instance of UserTransaction by creating an instance variable annotated with @Resource:

```java
@Resource
UserTransaction utx;
```

To begin a transaction, call the UserTransaction.begin method. When all the entity operations are complete, call the UserTransaction.commit method to commit the
transaction. The UserTransaction.rollback method is used to roll back the current transaction.
The following example shows how to manage transactions in an application that uses an application-managed entity manager:

```java
@PersistenceUnit
EntityManagerFactory emf;
EntityManager em;

@Resource
UserTransaction utx;
em = emf.createEntityManager();
try {
    utx.begin();
    em.persist(SomeEntity);
    em.merge(AnotherEntity);
    em.remove(ThirdEntity);
    utx.commit();
} catch (Exception e) {
    utx.rollback();
}
```

*Operations on the persistence context*:- Managing an Entity Instance’s Life Cycle:- You manage entity instances by invoking operations on the entity by means of an EntityManager instance. Entity instances are in one of four states: new, managed, detached, or removed.

1. New entity instances have no persistent identity and are not yet associated with a persistence context.
2. Managed entity instances have a persistent identity and are associated with a persistence context.
3. Detached entity instances have a persistent identify and are not currently associated with a persistence context.
4. Removed entity instances have a persistent identity, are associated with a persistent context, and are scheduled for removal from the data store.

The following important operations let us interact with the persistence context and schedule modifications to the data:

1. persist(Object entity) - Make a transient object persistent and schedule a SQL insert statement for later execution.Make an instance managed and persistent.
2. remove(Object entity) - Make a persistent object transient and schedule a SQL delete statement for later execution.Remove the entity instance.
3. merge(T entity) - Copy the state of a given detached object to a corresponding managed persistent instance and return the persistent object.Merge the state of the given entity into the current persistence context.
4. detach(Object) - Disassociate a persistent object from a session without affecting the database
5. clear() - Empty the persistence context and detach all its entities
6. flush() - Detect changes made to persistent objects association with the session and synchronize the database state with the state of the session by executing SQL insert , update , and delete statements.

Notice that persist() and remove() have no immediate effect on the database, and instead simply schedule a command for later execution. Also notice that there’s no update() operation for a stateful session. Modifications are automatically detected when the session is flushed.

Methods for reading and locking data:- Except for getReference() , the following operations all result in immediate access to the database:

1. find(Class,Object) - Obtain a persistent object given its type and its id
2. find(Class,Object,LockModeType) - Obtain a persistent object given its type and its id, requesting the given optimistic or pessimistic lock mode
3. getReference(Class,id) - Obtain a reference to a persistent object given its type and its id, without actually loading its state from the database
4. getReference(Object) - Obtain a reference to a persistent object with the same identity as the given detached instance, without actually loading its state from the database
5. refresh(Object) - Refresh the persistent state of an object using a new SQL select to retrieve its current state from the database
6. refresh(Object,LockModeType) - Refresh the persistent state of an object using a new SQL select to retrieve its current state from the database, requesting the given optimistic or pessimistic lock mode
7. lock(Object, LockModeType) - Obtain an optimistic or pessimistic lock on a persistent object.

Any of these operations might throw an exception. Now, if an exception occurs while interacting with the database, there’s no good way to resynchronize the state of the current persistence context with the state held in database tables.
Therefore, a session is considered to be unusable after any of its methods throws an exception.

Each of the operations above affects a single entity instance passed as an argument. But there’s a way to set things up so that an operation will propagate to associated entities.

`Cascading persistence operations` - It’s quite often the case that the lifecycle of a child entity is completely dependent on the lifecycle of some parent. This is especially common for many-to-one and one-to-one associations, though it’s very rare for many-to-many associations.
For example, it’s quite common to make an Order and all its Item s persistent in the same transaction, or to delete a Project and its Files s at once. This sort of relationship is sometimes called a whole/part-type relationship.
Cascading is a convenience which allows us to propagate one of the operations listed in Operations on the persistence context from a parent to its children. To set up cascading, we specify the cascade member of one of the association mapping annotations,usually @OneToMany or @OneToOne .

```java
@Entity
Order {
...
@OneToMany(mappedby=Item_.ORDER,
            cascade={PERSIST,REMOVE,REFRESH},// cascade persist(), remove(), and refresh() from Order to Item
            orphanRemoval=true// also remove() orphaned Items
)
Set<Item> items;
...
}
```

Orphan removal indicates that an Item should be automatically deleted if it is removed from the set of items belonging to its parent Order .


Finding Entities Using the EntityManager:- The EntityManager.find method is used to look up entities in the data store by the entity's primary key:

```java
@PersistenceContext
EntityManager em;
public void enterOrder(int custID, CustomerOrder newOrder) {
    Customer cust = em.find(Customer.class, custID);
    cust.getOrders().add(newOrder);
    newOrder.setCustomer(cust);
}
```

- `Persisting Entity Instances`:- New entity instances become managed and persistent either by invoking the persist method, or by a cascading persist operation invoked from related entities that have the cascade=PERSIST or cascade=ALL elements set in the relationship annotation. This means the entity’s data is stored to the database when the transaction associated with the persist operation is completed. If the entity is already managed, the persist operation is ignored, although the persist operation will cascade to related entities that have the cascade element set to PERSIST or ALL in the relationship annotation. If persist is called on a removed entity instance, it becomes managed. If the entity is detached, persist will throw an IllegalArgumentException, or the transaction commit will fail.

```java
@PersistenceContext
EntityManager em;
...
public LineItem createLineItem(Order order, Product product,int quantity) {
    LineItem li = new LineItem(order, product, quantity);
    order.getLineItems().add(li);
    em.persist(li);
    return li;
}
```

The persist operation is propagated to all entities related to the calling entity that have the cascade element set to ALL or PERSIST in the relationship annotation.

```java
@OneToMany(cascade=ALL, mappedBy="order")
public Collection<LineItem> getLineItems() {
    return lineItems;
}
```

```java
@Override
public void save(Owner owner){
    try(EntityManager em = emf.createEntityManager()){
        EntityTransaction et = em.getTransaction();
        et.begin();
        em.persist(owner);
        et.commit();
    }
}
```


- `Removing Entity Instances`:- Managed entity instances are removed by invoking the remove method, or by a cascading remove operation invoked from related entities that have the cascade=REMOVE or cascade=ALL elements set in the relationship annotation. If the remove method is invoked on a new entity, the remove operation is ignored, although remove will cascade to related entities that have the cascade element set to REMOVE or ALL in the relationship annotation. If remove is invoked on a detached entity it will throw an IllegalArgumentException, or the transaction commit will fail. If remove is invoked on an already removed entity, it will be ignored. The entity’s data will be removed from the data store when the transaction is completed, or as a result of the flush operation.

```java
public void removeOrder(Integer orderId) {
    try {
        Order order = em.find(Order.class, orderId);
        em.remove(order);
    }...
}
```

In this example, all LineItem entities associated with the order are also removed, as Order.getLineItems has cascade=ALL set in the relationship annotation.

- `Synchronizing Entity Data to the Database`:- The state of persistent entities is synchronized to the database when the transaction with which the entity is associated commits. If a managed entity is in a bidirectional relationship with another managed entity, the data will be persisted based on the owning side of the relationship.
To force synchronization of the managed entity to the data store, invoke the flush method of the entity. If the entity is related to another entity, and the relationship annotation has the cascade element set to PERSIST or ALL, the related entity’s data will be synchronized with the data store when flush is called.
If the entity is removed, calling flush will remove the entity data from the data store.



**Query APIs**:- The `Query` and `TypedQuery` APIs are used for the execution of both static queries and dynamic queries. These APIs also support parameter binding and pagination control. The `StoredProcedureQuery` API is used for the execution of queries that invoke stored procedures defined in the database.


*Querying Entities*:- The Java Persistence API provides the following methods for querying entities.

1. The Java Persistence query language (JPQL) is a simple, string-based language similar to SQL used to query entities and their relationships.
2. The Criteria API is used to create typesafe queries using Java programming language APIs to query for entities and their relationships.

Both JPQL and the Criteria API have advantages and disadvantages.

Just a few lines long, JPQL queries are typically more concise and more readable than Criteria queries. Developers familiar with SQL will find it easy to learn the syntax of JPQL. JPQL named queries can be defined in the entity class using a Java programming language annotation or in the application's deployment descriptor.JPQL queries are not typesafe, however, and require a cast when retrieving the query result from the entity manager. This means that type-casting errors may not be caught at compile time. JPQL queries don't support open-ended parameters.

Criteria queries allow you to define the query in the business tier of the application.Although this is also possible using JPQL dynamic queries, Criteria queries provide better performance because JPQL dynamic queries must be parsed each time they are called. Criteria queries are typesafe and therefore don't require casting, as JPQL queries do. The Criteria API is just another Java programming language API and doesn't require developers to learn the syntax of another query language. Criteria queries are typically more verbose than JPQL queries and require the developer to create several objects and perform operations on those objects before submitting the query to the entity manager.

`Creating Queries`:- The EntityManager.createQuery and EntityManager.createNamedQuery methods are used to query the datastore using Java Persistence query language queries.
The createQuery method is used to create dynamic queries, queries that are defined directly within an application’s business logic.

```java
public List findWithName(String name) {
return em.createQuery(
    "SELECT c FROM Customer c WHERE c.name LIKE :custName")
    .setParameter("custName", name)
    .setMaxResults(10)
    .getResultList();
}
```

The createNamedQuery method is used to create static queries, queries that are defined in metadata using the javax.persistence.NamedQuery annotation. The name element of @NamedQuery specifies the name of the query that will be used with the createNamedQuery method. The query element of @NamedQuery is the query.

```java
@NamedQuery(
    name="findAllCustomersWithName",
    query="SELECT c FROM Customer c WHERE c.name LIKE :custName"
)
```

Here’s an example of createNamedQuery, which uses the @NamedQuery defined above.

```java
@PersistenceContext
public EntityManager em;
...
customers = em.createNamedQuery("findAllCustomersWithName")
    .setParameter("custName", "Smith")
    .getResultList();
```

Named Parameters in Queries - Named parameters are parameters in a query that are prefixed with a colon (:). Named parameters in a query are bound to an argument by the javax.persistence.Query.setParameter(String name, Object value) method. In the following example, the name argument to the findWithName business method is bound to the :custName named parameter in the query by calling Query.setParameter.

```java
public List findWithName(String name) {
    return em.createQuery(
        "SELECT c FROM Customer c WHERE c.name LIKE :custName")
        .setParameter("custName", name)
        .getResultList();
}
```

Named parameters are case-sensitive, and may be used by both dynamic and static queries.

Positional Parameters in Queries - You may alternately use positional parameters in queries, instead of named parameters. Positional parameters are prefixed with a question mark (?) followed the numeric position of the parameter in the query. The Query.setParameter(integer position, Object value) method is used to set the parameter values.

In the following example, the findWithName business method is rewritten to use input parameters:

```java
public List findWithName(String name) {
    return em.createQuery(
        “SELECT c FROM Customer c WHERE c.name LIKE ?1”)
        .setParameter(1, name)
        .getResultList();
}
```

Input parameters are numbered starting from 1. Input parameters are case-sensitive, and may be used by both dynamic and static queries.

`Queries and Flush Mode`:-

**Entity Listeners and Callback Methods**:- A method may be designated as a lifecycle callback method to receive notification of entity lifecycle events. A lifecycle callback method can be defined on an entity class, a mapped superclass, or an entity listener class associated with an entity or mapped superclass. An entity listener class is a class whose methods are invoked in response to lifecycle events on an entity. Any number of entity listener classes can be defined for an entity class or mapped superclass.

Default entity listeners — entity listener classes whose callback methods apply to all entities in the persistence unit —can be specified by means of the XML descriptor.

Lifecycle callback methods and entity listener classes are defined by means of metadata annotations or the XML descriptor. When annotations are used, one or more entity listener classes are denoted using the EntityListeners annotation on the entity class or mapped superclass. If multiple entity listeners are defined, the order in which they are invoked is determined by the order in which they are specified in the EntityListeners annotation. The XML descriptor may be used as an alternative to specify the invocation order of entity listeners or to override the order specified in metadata annotations.

Any subset or combination of annotations may be specified on an entity class, mapped superclass, or listener class. A single class must not have more than one lifecycle callback method for the same lifecycle event. The same method may be used for multiple callback events.

Multiple entity classes and mapped superclasses in an inheritance hierarchy may define listener classes and/or lifecycle callback methods directly on the class.

`@EntityListeners`:- Specifies the callback listener classes to be used for an entity or mapped superclass. This annotation may be applied to an entity class or mapped superclass.
    Class[] value() - The callback listener classes.


**Query Language**:- The Jakarta Persistence query language is a string-based query language used to define queries over entities and their persistent state. It enables the application developer to specify the semantics of queries in a portable way, independent of the particular database schema in use in an enterprise environment. The full range of the language may be used in both static and dynamic queries.

The Jakarta Persistence query language is a query specification language for string-based dynamic queries and static queries expressed through metadata. It is used to define queries over the persistent entities defined by this specification and their persistent state and relationships.The query language allows you to write portable queries that work regardless of the underlying data store.

The Jakarta Persistence query language can be compiled to a target language, such as SQL, of a database or other persistent store. This allows the execution of queries to be shifted to the native language facilities provided by thendatabase, instead of requiring queries to be executed on the runtime representation of the entity state. As a result,query methods can be optimizable as well as portable.

The query language uses the abstract persistence schemas of entities, including their relationships, for its data model and defines operators and expressions based on this data model. The scope of a query spans the abstract schemas of related entities that are packaged in the same persistence unit. The query language uses an SQL-like syntax to select objects or values based on entity abstract schema types and relationships among them.

The term abstract persistence schema refers to the persistent schema abstraction (persistent entities, their state, and their relationships) over which Jakarta Persistence queries operate. Queries over this persistent schema abstraction are translated into queries that are executed over the database schema to which entities are mapped.
Queries may be defined in metadata annotations or the XML descriptor. The abstract schema types of a set of entities can be used in a query if the entities are defined in the same persistence unit as the query. Path expressions allow for navigation over relationships defined in the persistence unit.

**Query Language Terminology**:- The following list defines some of the terms in query terminology:-

1. `Abstract schema`: The persistent schema abstraction (persistent entities, their state, and their relationships) over which queries operate. The query language translates queries over this persistent schema abstraction into queries that are executed over the database schema to which entities are mapped.
2. `Abstract schema type`: The type to which the persistent property of an entity evaluates in the abstract schema. That is, each persistent field or property in an entity has a corresponding state field of the same type in the abstract schema. The abstract schema type of an entity is derived from the entity class and the metadata information provided by Java language annotations.
3. `Backus-Naur Form (BNF)`: A notation that describes the syntax of high-level languages.
4. `Navigation`: The traversal of relationships in a query language expression. The navigation operator is a period.
5. `Path expression`: An expression that navigates to an entity's state or relationship field.
6. `State field`: A persistent field of an entity.
7. `Relationship field`: A persistent field of an entity whose type is the abstract schema type of the related entity.

**Statement Types**:- A Jakarta Persistence query language statement may be either a select statement, an update statement, or a delete statement.

In BNF syntax, a query language statement is defined as:
QL_statement ::= select_statement | update_statement | delete_statement

Any Jakarta Persistence query language statement may be constructed dynamically or may be statically defined in a metadata annotation or XML descriptor element.
All statement types may have parameters.

- `Select Statements`:- A select query is a string with the following clauses:
    1. a SELECT clause, which determines the type of the objects or values to be selected.
    2. a FROM clause, which provides declarations that designate the domain to which the expressions specified in the other clauses of the query apply.
    3. an optional WHERE clause, which may be used to restrict the results that are returned by the query.
    4. an optional GROUP BY clause, which allows query results to be aggregated in terms of groups.
    5. an optional HAVING clause, which allows filtering over aggregated groups.
    6. an optional ORDER BY clause, which may be used to order the results that are returned by the query.

In BNF syntax, a select query is defined by:

select_query ::= [select_clause]? from_clause [where_clause] [groupby_clause] [having_clause] [orderby_clause]

Every select statement has a FROM clause. The square brackets [] in the BNF indicate that the other clauses are optional.

- `Update and Delete Statements`:- Update and delete statements provide bulk operations over sets of entities.

In BNF syntax, these operations are defined by:
update_statement ::= update_clause [where_clause]
delete_statement ::= delete_clause [where_clause]

The update and delete clauses determine the type of the entities to be updated or deleted. The WHERE clause may be used to restrict the scope of the update or delete operation.


**Metamodel API**:- This specification provides a set of interfaces for dynamically accessing a metamodel representing the managed classes of a persistence unit. Instances of metamodel types may be obtained either:
1. via programmatic lookup using an instance of the interface Metamodel obtained from the EntityManagerFactory or EntityManager by calling getMetamodel().
2. in a typesafe way, using static metamodel classes.

A static metamodel class is a class with static members providing direct typesafe access to metamodel objects representing the persistent members of a given managed class.


**Critea API**:- The Jakarta Persistence Criteria API is used to define queries through the construction of object-based query definition objects, rather than use of the string-based approach of the Jakarta Persistence query language.

The Jakarta Persistence Criteria API, like the Jakarta Persistence query language is based on the abstract persistence schema of entities, their embedded objects, and their relationships as its data model. This abstract persistence schema is materialized in the form of metamodel objects over which the Criteria API operates. The semantics of criteria queries are designed to reflect those of Jakarta Persistence query language queries.

The syntax of the Criteria API is designed to allow the construction of an object-based query “graph”, whose nodes correspond to the semantic query elements.
Java language variables can be used to reference individual nodes in a criteria query object as it is constructed and/or modified. Such variables, when used to refer to the entities and embeddable types that constitute the query domain, play a role analogous to that of the identification variables of the Jakarta Persistence query language.


The `jakarta.persistence.criteria` API interfaces are designed both to allow criteria queries to be constructed in a strongly-typed manner, using metamodel objects to provide type safety, and to allow for string-based use as an alternative:

- Metamodel objects are used to specify navigation through joins and through path expressions . Typesafe navigation is achieved by specification of the source and target types of the navigation.
- Strings may be used as an alternative to metamodel objects, whereby joins and navigation are specified by use of strings that correspond to attribute names.

Using either the approach based on metamodel objects or the string-based approach, queries can be constructed both statically and dynamically. Both approaches are equivalent in terms of the range of queries that can be expressed and operational semantics.

`Constructing Criteria Queries`:- A criteria query is constructed through the creation and modification of an instance of the CriteriaQuery interface.
The CriteriaBuilder interface is used to construct CriteriaQuery, CriteriaUpdate, and CriteriaDelete objects. The CriteriaBuilder implementation is accessed through the getCriteriaBuilder method of the EntityManager or EntityManagerFactory interface.
For example:

```java
@PersistenceUnit
EntityManagerFactory emf;
CriteriaBuilder cb = emf.getCriteriaBuilder();
```

**Entity Managers and Persistence Contexts**

*Persistence Contexts* - A persistence context is a set of managed entity instances in which for any persistent entity identity there is a unique entity instance. Within the persistence context, the entity instances and their lifecycle are managed by the entity manager.

In Jakarta EE environments, a JTA transaction typically involves calls across multiple components. Such components may often need to access the same persistence context within a single transaction. To facilitate such use of entity managers in Jakarta EE environments, when an entity manager is injected into a component or looked up directly in the JNDI naming context, its persistence context will automatically be propagated with the current JTA transaction, and the EntityManager references that are mapped to the same persistence unit will provide access to this same persistence context within the JTA transaction. This propagation of persistence contexts by the Jakarta EE container avoids the need for the application to pass references to EntityManager instances from one component to another. An entity manager for which the container manages the persistence context in this manner is termed a container-managed entity manager. A container-managed entity manager’s lifecycle is managed by the Jakarta EE container.

In less common use cases within Jakarta EE environments, applications may need to access a persistence context that is “stand-alone”—i.e. not propagated along with the JTA transaction across the EntityManager references for the given persistence unit. Instead, each instance of creating an entity manager causes a new isolated persistence context to be created that is not accessible through other EntityManager references within the same transaction. These use cases are supported through the createEntityManager methods of the EntityManagerFactory interface. An entity manager that is used by the application to create and destroy a persistence context in this manner is termed an application-managed entity manager. An application-managed entity manager’s lifecycle is managed by the application.

Both container-managed entity managers and application-managed entity managers and their persistence contexts are required to be supported in Jakarta EE web containers and EJB containers. Within an EJB environment, container-managed entity managers are typically used.

In Java SE environments and in Jakarta EE application client containers, only application-managed entity managers are required to be

*Obtaining an EntityManager*:- The entity manager for a persistence context is obtained from an entity manager factory.
When container-managed entity managers are used (in Jakarta EE environments), the application does not interact with the entity manager factory. The entity managers are obtained directly through dependency injection or from JNDI, and the container manages interaction with the entity manager factory transparently to the application.

When application-managed entity managers are used, the application must use the entity manager factory to manage the entity manager and persistence context lifecycle.
An entity manager must not be shared among multiple concurrently executing threads, as the entity manager and persistence context are not required to be threadsafe. Entity managers must only be accessed in a single-threaded manner.


`Obtaining an Entity Manager in the Jakarta EE Environment`:- ontainer-managed entity manager is obtained by the application through dependency injection or through direct lookup of the entity manager in the JNDI namespace. The container manages the persistence context lifecycle and the creation and the closing of the entity manager instance transparently to the application.
The PersistenceContext annotation is used for entity manager injection. The type element specifies whether a transaction-scoped or extended persistence context is to be used.The synchronization element specifies whether the persistence context is always automatically joined to the current transaction (the default) or is not joined to the current transaction unless the joinTransaction method is invoked by the application. The unitName element may optionally be specified to designate the persistence unit whose entity manager factory is used by the container.

```java
@PersistenceContext
EntityManager em;

@PersistenceContext(type=PersistenceContextType.EXTENDED)
EntityManager orderEM;
```

```java
@Stateless
@PersistenceContext(name="OrderEM")
public class MySessionBean implements MyInterface {
    @Resource
    SessionContext ctx;
    public void doSomething() {
        EntityManager em = (EntityManager)ctx.lookup("OrderEM");
        // ...
    }
}
```

`Obtaining an Application-managed Entity Manager`:- An application-managed entity manager is obtained by the application from an entity manager factory.
The EntityManagerFactory API used to obtain an application-managed entity manager is the same independent of whether this API is used in Jakarta EE or Java SE environments.

Obtaining an Entity Manager Factory - The EntityManagerFactory interface is used by the application to create an application-managed entity manager.
Each entity manager factory provides entity manager instances that are all configured in the same manner (e.g.,configured to connect to the same database, use the same initial settings as defined by the implementation, etc.)
More than one entity manager factory instance may be available simultaneously in the JVM.
Methods of the EntityManagerFactory interface are threadsafe.

Obtaining an Entity Manager Factory in a Jakarta EE Container - Within a Jakarta EE environment, an entity manager factory can be injected using the PersistenceUnit annotation or obtained through JNDI lookup. The unitName element may optionally be specified to designate the persistence unit whose entity manager factory is used.

```java
@PersistenceUnit
EntityManagerFactory emf;
```

Obtaining an Entity Manager Factory in a Java SE Environment - Outside a Jakarta EE container environment, the jakarta.persistence.Persistence class is the bootstrap class that provides access to an entity manager factory. The application creates an entity manager factory by calling the createEntityManagerFactory method of the jakarta.persistence.Persistence class.

```java
EntityManagerFactory emf = jakarta.persistence.Persistence.createEntityManagerFactory("order-persistence-unit");
EntityManager em = emf.createEntityManager();
```

Obtaining an Entity Manager Factory for a programmatically-defined persistence unit - The class jakarta.persistence.PersistenceConfiguration may be used to programmatically define and configure a persistence unit as an alternative to packaging a persistence.xml file, mapping files, and classes inside an archive

```java
DataSource datasource = (DataSource) new InitialContext().lookup("java:global/jdbc/MyOrderDB");
EntityManagerFactory emf =new PersistenceConfiguration()
    .name("OrderManagement")
    .jtaDataSource(datasource)
    .mappingFile("ormap.xml")
    .managedClass(Order.class)
    .managedClass(Customer.class)
    .createEntityManagerFactory();
```

```java
Map<String,String> map = new HashMap<>();
map.set("hibernate.show_sql","true")
EntityManagerFactory emf = new HibernatePersistenceProvider()
                .createContainerEntityManagerFactory(new CustomPersistenceInfo(),map);
```

EntityManagerFactory Interface - An EntityManagerFactory may be used by the application to obtain an application-managed entity manager. When the application has finished using the entity manager factory, and/or at application shutdown, the application should close the entity manager factory. Once an entity manager factory has been closed, all its entity managers are considered to be in the closed state.
An EntityManagerFactory also provides access to information and services that are global to the persistence unit. This includes access to the second level cache that is maintained by the persistence provider and to the PersistenceUnitUtil interface.

**Entity Packaging**:- A persistence unit is a logical grouping that includes:
1. an entity manager factory and its entity managers, together with their configuration information.
2. the set of managed classes included in the persistence unit and managed by entity managers created by the entity manager factory.
3. mapping metadata (in the form of metadata annotations and/or XML metadata) specifying the mapping of these classes to the database.


`Persistence Unit Packaging`:- Within Jakarta EE environments, any EJB-JAR, WAR, EAR, or application client JAR can define a persistence unit. Any number of persistence units may be defined within these scopes.
A persistence unit may be packaged:

- within one or more jar files contained within a WAR or EAR,
- as a set of classes within an EJB-JAR file or in the WAR classes directory, or
- as a combination of these, as defined below.

A persistence unit is defined by a persistence.xml file. The jar file or directory whose META-INF directory contains the persistence.xml file is termed the root of the persistence unit. In Jakarta EE environments, the root of a persistence unit must be either:
1. an EJB-JAR file,
2. the WEB-INF/classes directory of a WAR file ,
3. a jar file in the WEB-INF/lib directory of a WAR file,
4. a jar file in the library directory or an EAR, or
5. an application client JAR file.

It is not required that an EJB-JAR or WAR file containing a persistence unit be packaged in an EAR unless the persistence unit contains extra persistence classes in addition to those contained within the EJB-JAR or WAR.

A persistence unit must have a name. The name of the persistence unit must be unique within a given EJB-JAR file,within a given WAR file, within a given application client JAR, or within an EAR.

The persistence.xml file may be used to define more than one persistence unit within the same scope.
All persistence classes defined at the level of the Jakarta EE EAR must be accessible to other Jakarta EE components in the application—that is, to all components loaded by the application classloader—such that if the same entity class is referenced by two different Jakarta EE components (which may be using different persistence units), the referenced class is the same identical class.

In Java SE environments, the metadata mapping files, jar files, and classes described in the following sections can be used. To insure the portability of a Java SE application, it is necessary to explicitly list the managed persistence classes included in the persistence unit using the class element of the persistence.xml file.

*persistence.xml file*:- A persistence.xml file defines a persistence unit. The persistence.xml file is located in the META-INF directory of the root of the persistence unit. It may be used to specify:
1. managed persistence classes included in the persistence unit,
2. object/relational mapping information for those classes,
3. scripts for use in schema generation and bulk loading of data, and
4. other configuration information for the persistence unit and for the entity managers and entity manager factory of the persistence unit.
This information may be defined by containment or by reference.

The object/relational mapping information can take the form of:
1. annotations on the managed persistence classes included in the persistence unit,
2. an orm.xml file contained in the META-INF directory of the root of the persistence unit,
3. one or more XML files accessible on the classpath and referenced from the persistence.xml file, or
4. any combination of the previous options.

The managed persistence classes may be:
1. contained within the root of the persistence unit,
2. specified by reference—that is, by naming the classes, class archives, or XML mapping files (which in turn reference classes) that are accessible on the application classpath, or
3. specified by any combination of these means.


The root element of the persistence.xml file is the persistence element. The persistence element consists of one or more persistence-unit elements.
The persistence-unit element consists of the name and transaction-type attributes and the following sub-elements: description, provider, jta-data-source, non-jta-data-source, mapping-file, jar-file, class, exclude-unlisted-classes, shared-cache-mode, validation-mode, and properties.
The name attribute is required; the other attributes and elements are optional.

```xml
<persistence xmlns="https://jakarta.ee/xml/ns/persistence" version="3.2">
    <persistence-unit name="demo">
        <description> This unit manages orders and customers.It does not rely on any vendor-specific features and can therefore be deployed to any persistence provider.
        </description>
        <jta-data-source>jdbc/MyOrderDB</jta-data-source>
        <mapping-file>ormap.xml</mapping-file>
        <jar-file>MyOrderApp.jar</jar-file>
        <class>com.widgets.Order</class>
        <class>com.widgets.Customer</class>
    </persistence-unit>
</persistence>

<persistence>
    <persistence-unit name="OrderManagement2">
        <description> This unit manages inventory for auto parts.It depends on features provided by the com.acme.persistence implementation.</description>
        <provider>com.acme.AcmePersistence</provider>
        <jta-data-source>jdbc/MyPartDB</jta-data-source>
        <mapping-file>ormap2.xml</mapping-file>
        <jar-file>MyPartsApp.jar</jar-file>
        <properties>
            <property name="com.acme.persistence.sql-logging" value="on"/>
        </properties>
    </persistence-unit>
</persistence>
```

`name`:- The name attribute defines the name of the persistence unit. This name is used to identify the persistence unit referred to by a PersistenceContext or PersistenceUnit annotation and in the programmatic API for creating an entity manager factory.

`transaction-type`:- The transaction-type attribute specifies whether entity managers created by the entity manager factory for the persistence unit are JTA entity managers or resource-local entity managers. The value of this element must be JTA or RESOURCE_LOCAL:
1. JTA means that a JTA data source is provided—either as specified by the jta-data-source element, or by the container.
2. In a Jakarta EE environment, RESOURCE_LOCAL usually means that a non-JTA datasource is provided.

If the transaction-type is not explicitly specified, its value is defaulted:
1. in a Jakarta EE environment, the default is JTA.
2. in a Java SE environment, the default is RESOURCE_LOCAL.

`description`:- The description element provides optional descriptive information about the persistence unit.

`provider`:- The provider element specifies the name of a provider-specific implementation of jakarta.persistence.spi.PersistenceProvider. The provider element is optional, but should be explicitly specified if the application depends on the use of a particular persistence provider.

`qualifier`:- The qualifier element specifies the fully-qualified class name of an annotation annotated jakarta.inject.Qualifier. This qualifier annotation may be used to disambiguate the persistence unit for the purposes of dependency injection.

`scope`:- The scope element specifies the fully-qualified class name of an annotation annotated jakarta.inject.Scope or jakarta.enterprise.context.NormalScope. This scope annotation may be used to determine the scope of a persistence context for the purposes of dependency injection.

`jta-data-source, non-jta-data-source`:- In Jakarta EE environments:
1. the jta-data-source element specifies the JNDI name of a JTA data source, and/or
2. the non-jta-data-source element specifies the JNDI name of a non-JTA data source.

The specified data source is used by the persistence provider to obtain database connections. If neither element is specified, the deployer must specify a data source at deployment, or a default data source must be provided by the container.
In Java SE environments, these elements may be used, or the data source information may be specified by other means, depending upon the requirements of the provider.

`mapping-file, jar-file, class, exclude-unlisted-classes`:- The following classes must be implicitly or explicitly denoted as managed persistence classes to be included within a persistence unit:
1. entity classes;
2. embeddable classes;
3. mapped superclasses;
4. converter classes.

The set of managed persistence classes managed by a persistence unit is specified using one or more of the following:
- annotated managed persistence classes contained in the root of the persistence unit (unless the exclude-unlisted-classes element is specified);
- one or more object/relational mapping XML files;
- one or more JAR files to be searched for classes;
- an explicit list of classes.


The set of entities managed by the persistence unit is the union of these sources, with the mapping metadata annotations (or annotation defaults) for any given class being overridden by the XML mapping information file if there are both annotations and XML mappings for that class. The minimum portable level of overriding is at the level of the persistent field or property.
The classes and/or jars that named as part of a persistence unit must be on the classpath; referencing them from the persistence.xml file does not cause them to be placed on the classpath.
All classes must be on the classpath to ensure that entity managers from different persistence units that map the same class will be accessing the same identical class.


```xml
<persistence xmlns="http://java.sun.com/xml/ns/persistence"
            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
            xsi:schemaLocation="http://java.sun.com/xml/ns/persistence https://jakarta.ee/xml/ns/persistence/persistence_3_0.xsd"
        version="2.0">
    <persistence-unit name="my-persistence-unit">
        <class>org.hibernate.example.Book</class>
        <class>org.hibernate.example.Author</class>
        <properties>
            <!-- PostgreSQL -->
            <property name="jakarta.persistence.jdbc.url"
                        value="jdbc:postgresql://localhost/example"/>
            <!-- Credentials -->
            <property name="jakarta.persistence.jdbc.user" value="gavin"/>
            <property name="jakarta.persistence.jdbc.password" value="hibernate"/>
            <!-- Automatic schema export -->
            <property name="jakarta.persistence.schema-generation.database.action"
                    value="drop-and-create"/>
            <!-- SQL statement logging -->
            <property name="hibernate.show_sql" value="true"/>
            <property name="hibernate.format_sql" value="true"/>
            <property name="hibernate.highlight_sql" value="true"/>
        </properties>
    </persistence-unit>
</persistence>
```

```java
public class CustomPersistenceInfo implements PersistenceUnitInfo {
    @Override
    public String getPersistenceUnitName() {
        return "my-persistence-unit";
    }

    @Override
    public String getPersistenceProviderClassName() {
        return "org.hibernate.jpa.HibernatePersistenceProvider";
    }

    @Override
    public PersistenceUnitTransactionType getTransactionType() {
        return PersistenceUnitTransactionType.RESOURCE_LOCAL;
    }

    @Override
    public DataSource getJtaDataSource() {
        HikariDataSource dataSource = new HikariDataSource();
        dataSource.setJdbcUrl("jdbc:mysql://localhost:3306/customer");
        dataSource.setUsername("root");
        dataSource.setPassword("root");
        return dataSource;
    }

    @Override
    public DataSource getNonJtaDataSource() {
        return null;
    }

    @Override
    public List<String> getMappingFileNames() {
        return List.of();
    }

    @Override
    public List<URL> getJarFileUrls() {
        return List.of();
    }

    @Override
    public URL getPersistenceUnitRootUrl() {
        return null;
    }

    @Override
    public List<String> getManagedClassNames() {
        return List.of("org.hibernate.example.Book","org.hibernate.example.Author");
    }

    @Override
    public boolean excludeUnlistedClasses() {
        return false;
    }

    @Override
    public SharedCacheMode getSharedCacheMode() {
        return null;
    }

    @Override
    public ValidationMode getValidationMode() {
        return null;
    }

    @Override
    public Properties getProperties() {
        return null;
    }

    @Override
    public String getPersistenceXMLSchemaVersion() {
        return "";
    }

    @Override
    public ClassLoader getClassLoader() {
        return null;
    }

    @Override
    public void addTransformer(ClassTransformer transformer) {

    }

    @Override
    public ClassLoader getNewTempClassLoader() {
        return null;
    }
}
```

*Persistence Units*:- A persistence unit defines a set of all entity classes that are managed by EntityManager instances in an application. This set of entity classes represents the data contained within a single data store.
Persistence units are defined by the persistence.xml configuration file. The following is an example persistence.xml file:

```xml
<persistence>
    <persistence-unit name="OrderManagement">
    <description>This unit manages orders and customers.It does not rely on any vendor-specific features and can therefore be deployed to any persistence provider.
    </description>
    <jta-data-source>jdbc/MyOrderDB</jta-data-source>
    <jar-file>MyOrderApp.jar</jar-file>
    <class>com.widgets.CustomerOrder</class>
    <class>com.widgets.Customer</class>
    </persistence-unit>
</persistence>
```

The jta-data-source (for JTA-aware data sources) and non-jta-data-source (for non-JTA-aware data sources) elements specify the global JNDI name of the data source
to be used by the container.
The JAR file or directory whose META-INF directory contains persistence.xml is called the root of the persistence unit. The scope of the persistence unit is determined by the persistence unit's root. Each persistence unit must be identified with a name that is unique to the persistence unit's scope.

Persistent units can be packaged as part of a WAR or EJB JAR file or can be packaged as a JAR file that can then be included in an WAR or EAR file.

- If you package the persistent unit as a set of classes in an EJB JAR file,persistence.xml should be put in the EJB JAR's META-INF directory.
- If you package the persistence unit as a set of classes in a WAR file, persistence.xml should be located in the WAR file's WEB-INF/classes/META-INF directory.
- If you package the persistence unit in a JAR file that will be included in a WAR or EAR file, the JAR file should be located in either
    – The WEB-INF/lib directory of a WAR
    – Or the EAR file's library directory

Each EntityManager belongs to an EntityManagerFactory with an associated persistence unit. A persistence unit defines a set of related entities which map to a single database. Entities belonging to the same persistence unit may participate in associations. An EntityManager may only manage instances of entities belonging to its persistence unit. The definition of persistence units is described in Chapter 8. An EntityManagerFactory might have an associated second-level cache.

Jakarta Persistence features several mechanisms allowing user-written code to react to events occurring within the persistence context.

`Persistence`:- Bootstrap class that is used to obtain an EntityManagerFactory in Java SE environments. It may also be used to cause schema generation to occur.
The Persistence class is available in a Jakarta EE container environment as well; however, support for the Java SE bootstrapping APIs is not required in container environments.
The Persistence class is used to obtain a PersistenceUtil instance in both Jakarta EE and Java SE environments.


**Database Schema Creation**:- The persistence provider can be configured to automatically create the database tables, load data into the tables, and remove the tables during application deployment using standard properties in the application's deployment descriptor. These tasks are typically used during the development phase of a release, not against a production database.

The following is an example of a persistence.xml deployment descriptor that specifies that the provider should drop all database artifacts using a provided script,create the artifacts with a provided script, and load data from a provided script when the application is deployed:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<persistence version="2.1" xmlns="http://xmlns.jcp.org/xml/ns/persistence"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/persistence
    http://xmlns.jcp.org/xml/ns/persistence/persistence_2_1.xsd">
    <persistence-unit name="examplePU" transaction-type="JTA">
    <jta-data-source>java:global/ExampleDataSource</jta-data-source>
    <properties>
        <property name="javax.persistence.schema-generation.database.action" value="drop-and-create"/>
        <property name="javax.persistence.schema-generation.create-source" value="script"/>
        <property name="javax.persistence.schema-generation.create-script-source" value="META-INF/sql/create.sql" />
        <property name="javax.persistence.sql-load-script-source" value="META-INF/sql/data.sql" />
        <property name="javax.persistence.schema-generation.drop-source" value="script" />
        <property name="javax.persistence.schema-generation.drop-script-source" value="META-INF/sql/drop.sql" />
    </properties>
    </persistence-unit>
</persistence>
```

`Configuring an Application to Create or Drop Database Tables`:- The javax.persistence.schema-generation.database.action property is used to specify the action taken by the persistence provider when an application is deployed.If the property is not set, the persistence provider will not create or drop any database artifacts.

Schema Creation Actions:-
1. none - No schema creation or deletion will take place.
2. create - The provider will create the database artifacts on application deployment. The artifacts will remain unchanged after application redeployment.
3. drop-and-create - Any artifacts in the database will be deleted, and the provider will create the database artifacts on deployment.
4. drop - Any artifacts in the database will be deleted on applicationdeployment.

*Annotated Classes in the Root of the Persistence Unit*:- By default, in the Java EE environment, the root of the persistence unit is searched for annotated managed persistence classes—classes with an Entity, Embeddable, MappedSuperclass, or Converter annotation—and mapping metadata annotations found on these classes are processed. Where mapping annotations are missing, the classes are mapped using mapping annotation defaults.

This behavior is disabled if the exclude-unlisted-classes of the persistence.xml file is specified as true. In this case, an annotated persistence class located in the root of the persistence unit is not included in the persistence unit unless it is explicitly listed in a class element of the persistence.xml file or in a mapping file.
In the Java SE environment, this behavior is not required. Portable Java SE applications should explicitly list each persistence class in a class element of the persistence.xml file or in a mapping file. The exclude-unlisted-classes element is not intended for use in Java SE environments.


**Container and Provider Contracts for Deployment & Bootstrapping**:-


`@Transient`:- Specifies that the property or field is not persistent. It is used to annotate a property or field of an entity class, mapped superclass, or embeddable class.

**Metadata for ORM**:- The object/relational mapping metadata is part of the application domain model contract. It expresses requirements and expectations on the part of the application as to the mapping of the entities and relationships of the application domain to a database. Queries (and, in particular, SQL queries) written against the database schema that corresponds to the application domain model are dependent upon the mappings expressed by means of the object/relational mapping metadata. The implementation of this specification must assume this application dependency upon the object/relational mapping metadata and insure that the semantics and requirements expressed by that mapping are observed.
The use of object/relational mapping metadata to control schema generation.

*Annotations for Object/Relational Mapping*:- These annotations and types are in the package jakarta.persistence.XML metadata may be used as an alternative to these annotations, or to override or augment annotations.

- `Access Annotation`:- The Access annotation is used to specify an access type to be applied to an entity class, mapped superclass, or embeddable class, or to a specific attribute of such a class.
 - AccessType - value(Required) - The access type to be applied to the class or attribute


- `@Basic`:- The simplest type of mapping to a database column. The Basic annotation can be applied to a persistent property or instance variable of any of the following types: Java primitive types, wrappers of the primitive types, String, java. math. BigInteger, java. math. BigDecimal, java. util. Date, java. util. Calendar, java. sql. Date, java. sql. Time, java. sql. Timestamp, byte[], Byte[], char[], Character[], enums, and any other type that implements java. io. Serializable.
The use of the Basic annotation is optional for persistent fields and properties of these types. If the Basic annotation is not specified for such a field or property, the default values of the Basic annotation will apply.
- fetch() - (Optional) Defines whether the value of the field or property should be lazily loaded or must be eagerly fetched. The EAGER strategy is a requirement on the persistence provider runtime that the value must be eagerly fetched. The LAZY strategy is a hint to the persistence provider runtime. If not specified, defaults to EAGER.

```java
@Basic(fetch=LAZY)
protected String getName() { return name; }
```

- `@Column`:- Specifies the mapped column for a persistent property or field. If no Column annotation is specified, the default values apply.Can be annotated at field or method.The parameters can include:-
    1. name - (Optional) The name of the column. Defaults to the property or field name.
    2. unique - (Optional) Whether the column is a unique key. This is a shortcut for the UniqueConstraint annotation at the table level and is useful for when the unique key constraint corresponds to only a single column. This constraint applies in addition to any constraint entailed by primary key mapping and to constraints specified at the table level.
    3. nullable - (Optional) Whether the database column is nullable.
    4. insertable - (Optional) Whether the column is included in SQL INSERT statements generated by the persistence provider.
    5. updatable - (Optional) Whether the column is included in SQL UPDATE statements generated by the persistence provider.
    6. columnDefinition - (Optional) The SQL fragment that is used when generating the DDL for the column.Defaults to the generated SQL to create a column of the inferred type.
    7. table - (Optional) The name of the table that contains the column. If absent the column is assumed to be in the primary table.
    8. length - (Optional) The column length. (Applies only if a string-valued column is used.)

```java
@Column(name="DESC", nullable=false, length=512)
public String getDescription() { return description;}
@Column(name="ORDER_COST", updatable=false, precision=12, scale=2)
public BigDecimal getCost() {return cost;}
```


- `@Enumerated`:- Specifies that a persistent property or field should be persisted as a enumerated type. The Enumerated annotation may be used in conjunction with the Basic annotation, or in conjunction with the ElementCollection annotation when the element collection value is of basic type. If the enumerated type is not specified or the Enumerated annotation is not used, the EnumType value is assumed to be ORDINAL.
`EnumType`:- Defines mapping for enumerated types. The constants of this enumerated type specify how a persistent property or field of an enumerated type should be persisted.Includes:- ORDINAL,STRING.

```java
    public enum EmployeeStatus {FULL_TIME, PART_TIME, CONTRACT}
    public enum SalaryRate {JUNIOR, SENIOR, MANAGER, EXECUTIVE}
 
    @Entity public class Employee {
        public EmployeeStatus getStatus() {...}
        ...
        @Enumerated(STRING)
        public SalaryRate getPayScale() {...}
        ...
    }
```


`@Blob`:- Specifies that a persistent property or field should be persisted as a large object to a database-supported large object type.
Portable applications should use the Lob annotation when mapping to a database Lob type. The Lob annotation may be used in conjunction with the Basic annotation or the ElementCollection annotation when the element collection value is of basic type. A Lob may be either a binary or character type.

```java
@Lob @Basic(fetch=LAZY)
@Column(name="REPORT")
protected String report;

@Lob @Basic(fetch=LAZY)
@Column(name="EMP_PIC", columnDefinition="BLOB NOT NULL")
protected byte[] pic;
```



*Object/Relational Metadata Used in Schema Generation*:-


**XML ORM Descriptor**:- The XML object/relational mapping descriptor serves as both an alternative to and an overriding mechanism for Java language metadata annotations.

In modern applications, it's a best practice to use JPA annotations rather than Hibernate-specific annotations because:

1. Portability: JPA annotations are part of the Java EE specification and are therefore standardized. By using JPA, your code can run with any JPA-compliant provider (e.g., Hibernate, EclipseLink, or OpenJPA). If you use Hibernate-specific annotations, your code becomes tightly coupled to Hibernate, making it harder to switch to another ORM provider if needed.
2. Abstraction: JPA provides a level of abstraction over the underlying ORM implementation. When you use JPA annotations, your code is less dependent on the specific ORM framework you're using (in this case, Hibernate). The goal is to write portable, standard code that follows JPA rules, while Hibernate simply implements these rules behind the scenes.

Spring's Choice: In a Spring application, especially with Spring Data JPA, you typically don't need to worry about the underlying ORM provider (like Hibernate) because Spring abstracts that away. You only need to use the JPA annotations, and Spring Data will use the configured JPA provider (which can be Hibernate by default) to handle the actual database interactions.

**JPA Configuration (Persistence Unit)**:- Create a persistence.xml file inside src/main/resources/META-INF/ to configure the persistence unit.

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


---------------


## Hibernate ORM

Hibernate is a powerful and widely used open-source java-based Object Relational Mapping framework.
Hibernate is an Object/Relational Mapping solution for Java environments.It maps Java classes to database tables (and from Java data types to SQL data types), but also provides data query and retrieval facilities.It reduces development time otherwise spent with manual data handling in SQL and JDBC.
Developed in 2001 by Gavin King as a replacement for EJB2 style entity beans.Hibernate 3.0 release contained support for annotations.Hibernate 3.5 release contained support for JPA 2.0 Specification.
The Hibernate project began in 2001, when Gavin King’s frustration with Entity Beans in EJB 2 boiled over. It quickly overtook other open source and commercial contenders to become the most popular persistence solution for Java.

Hibernate may not be the best solution for data-centric applications that only use stored-procedures to implement the business logic in the database, it is most useful with object-oriented domain models and business logic in the Java-based middle-tier.Hibernate was the inspiration behind the Java (now Jakarta) Persistence API, or JPA, and includes a complete implementation of the latest revision of this specification.
JPA and Hibernate were designed to work in conjunction with handwritten SQL.

Hibernate is an open-source ORM (Object Relational Mapping) framework for Java. It simplifies database interaction by letting you work with Java objects instead of raw SQL. It implements the JPA specification and sits between your application and the database.

Developed by Gavin King, now maintained by Red Hat
Implements JPA (Jakarta Persistence API)
Handles SQL generation, connection pooling, caching, and transactions
ORM - Object Relational Mapping
ORM bridges the gap between object-oriented Java code and relational databases. Instead of writing INSERT or SELECT statements, you work with plain Java objects (POJOs).

Why Hibernate over JDBC - JDBC works, but it is verbose, error-prone, and forces you to manage everything manually. Hibernate abstracts all of that away.

```
Feature	               |  JDBC          |	Hibernate
---------------------------------------------------------------------
SQL writing	           |  Manual        |   Auto-generated
Object mapping         |  Manual	    |   Automatic
Caching	               |  None built-in	|  First and second level
Transaction management |  Manual	    |  Declarative
Boilerplate code	   |  High	        |  Minimal
Portability	           | DB-specific SQL|	Dialect-based
```

- As an Object/Relational Mapping (ORM) framework, Hibernate is concerned with data persistence as it applies to relational databases (via JDBC).Hibernate 6 and Hibernate Reactive are now core components of Quarkus 3.We can think of the API of Hibernate in terms of three basic elements:-
    1. an implementation of the JPA-defined APIs, most importantly, of the interfaces EntityManagerFactory and EntityManager , and of the JPA-defined O/R mapping annotations,
    2. a native API exposing the full set of available functionality, centered around the interfaces SessionFactory, which extends EntityManagerFactory , and Session which extends EntityManager.
    3. A set of mapping annotations which augment the O/R mapping annotations defined by JPA, and which may be used with the JPA-defined interfaces, or with the native API.

Hibernate also offers a range of SPIs for frameworks and libraries which extend or integrate with Hibernate.

- Persistence-related code comes in two layers:
    1. A representation of our data model in Java, which takes the form of a set of annotated entity classes.
    2. A larger number of functions which interact with Hibernate’s APIs to perform the persistence operations associated with your various transactions.This code must:
        - manage transactions and sessions,
        - interact with the database via the Hibernate session,
        - fetch and prepare data needed by the UI, and
        - handle failures.

Responsibility for transaction and session management, and for recovery from certain kinds of failure, is best handled in some sort of framework code.

Most people implement the domain model as a set of what we used to call "Plain Old Java Objects", that is, as simple Java classes with no direct dependencies on technical infrastructure, nor on application logic which deals with request processing, transaction management, communications, or interaction with the database.

Testing persistence logic - When we write tests for our persistence logic, we’re going to need:
- A database, with:-
    1. an instance of the schema mapped by our persistent entities, and
    2. a set of test data, in a well-defined state at the beginning of each test.

"Dynamic" models - We love representing entities as classes because the classes give us a type-safe model of our data. But Hibernate also has the ability to represent entities as detyped instances of java.util.Map.

Advantages of hibernate:-

- Suppoerts caching of data maing application faster.
- Provides easy to use CRUD operations,helping dev get rid of messy SQL.
- Has strong query language.
- Supports JPA specification.

```
Database Information---------
                            | configure
                            |                      buildSessionFactory()        openSession()      beginTransaction()
                            -----------Configuration----------------sessionFactory--------session----------Transaction
                            |
                            | addAnnotatedClass()
Mapping Information----------
```


Hibernate Architecture Overview:-

```
Application
    |
    v
SessionFactory  <--- Configuration (hibernate.cfg.xml or annotations)
    |
    v
Session  <--- Wraps JDBC Connection
    |
    v
Transaction
    |
    v
Database (via JDBC Driver)
```


Key components:

Configuration - loads Hibernate settings
SessionFactory - heavyweight, one per database, thread-safe
Session - lightweight, one per request/transaction, not thread-safe
Transaction - wraps DB operations
Query / Criteria - for executing HQL or JPQL queries

Core Concepts
Entity Class and POJO
A POJO (Plain Old Java Object) becomes a Hibernate entity when you annotate it with @Entity. It must have a no-arg constructor and a primary key field.

@Entity
@Table(name = "employees")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String department;

    // no-arg constructor required
    public Employee() {}

    // getters and setters
}
Rules for an entity class:

Must not be final
Must have a public or protected no-arg constructor
Must have at least one @Id field
Fields should be private with getters/setters
Session and SessionFactory
SessionFactory is created once when the application starts. It is expensive to build but cheap to use. Think of it as a factory that produces Session objects.

Session is the primary interface to interact with the database. It represents a single unit of work and wraps a JDBC connection.

// Build SessionFactory (do this once, on startup)
SessionFactory sessionFactory = new Configuration()
    .configure("hibernate.cfg.xml")
    .buildSessionFactory();

// Open a session for each unit of work
Session session = sessionFactory.openSession();
Transaction tx = session.beginTransaction();

// ... do work ...

tx.commit();
session.close();
Persistence Context
The persistence context is an in-memory cache of entities that Hibernate manages during a session. Every entity loaded or saved goes into this context.

Tracks changes automatically (dirty checking)
Ensures identity - same DB row returns the same Java object
Synchronizes state to DB at flush time
Three entity states:

Transient - object created but not associated with any session
Persistent - associated with an active session, tracked by Hibernate
Detached - was persistent, session is now closed
Employee emp = new Employee(); // Transient

session.save(emp);             // Persistent - Hibernate tracks this

session.close();               // emp becomes Detached
First-Level Cache
First-level cache is scoped to the Session. It is enabled by default and cannot be disabled. When you load the same entity twice in the same session, the second call hits cache, not the database.

Employee e1 = session.get(Employee.class, 1L); // hits DB
Employee e2 = session.get(Employee.class, 1L); // hits L1 cache, no DB call

System.out.println(e1 == e2); // true - same object reference


ORM frameworks provide an abstraction layer over the actual persistence technology being used
(usually a relational database), allowing developers to focus on the object-oriented details of their
domain model, rather than lower-level database concerns. There is an inherent impedance mismatch
between the relational-table world of databases and the object-oriented world of Java, making an
effective ORM abstraction difficult to implement. This impedance mismatch is due to the fundamental
differences between relational databases and object-oriented languages, such as Java. For example,
relational databases don’t implement core object-oriented principles such as polymorphism,
encapsulation, and accessibility. Furthermore, the notion of equality is vastly different between Java and
SQL. We will discuss some of these differences throughout this book, examining approaches to bridging
the gap between a SQL database and a Java domain model.
Hibernate represented a significant step in bridging this gap by offering a powerful open source
framework for expressing an object-oriented domain model, and defining the ways in which the tables
and columns of a database synchronized with the object instances and properties in JavaBeans.

**CONFIGURATION AND  BOOTSTRAP**:- The four basic ways to obtain an instance of Hibernate:

1. Using the standard JPA-defined XML, and the operation Persistence.createEntityManagerFactory():- Usually chosen when portability between JPA implementations is important.
2. Using the Configuration class to construct a SessionFactory:- When portability between JPA implementations is not important, this option is quicker, adds some flexibility and saves a typecast.
3. Using the more complex APIs defined in org.hibernate.boot:- Used primarily by framework integrators.
4. By letting the container take care of the bootstrap process and of injecting the SessionFactory or EntityManagerFactory:- Used in a container environment like WildFly or Quarkus.

Hibernate in containers:- Actually, the last option is extremely popular, since every major Java application server and microservice framework comes with built-in support for Hibernate. Such container environments typically also feature facilities to automatically manage the lifecycle of an EntityManager or Session and its association with container-managed transactions.

If you’re using Hibernate outside of a container environment, you’ll need to:
- include Hibernate ORM itself, along with the appropriate JDBC driver, as dependencies of your project, and
- configure Hibernate with information about your database, by specifying configuration properties.

First, add the following dependency to your project:- org.hibernate.orm:hibernate-core:{version}, Where {version} is the version of Hibernate you’re using.

```xml
<dependency>
    <groupId>org.hibernate.orm</groupId>
    <artifactId>hibernate-core</artifactId>
    <version>${hibernate.version}</version>
</dependency>
```

You’ll also need to add a dependency for the JDBC driver for your database.

1. PostgreSQL or CockroachDB -org.postgresql:postgresql:{version}
2. MySQL or TiDB-com.mysql:mysql-connector-j:{version}
3. MariaDB-org.mariadb.jdbc:mariadb-java-client:{version}
4. DB2-com.ibm.db2:jcc:{version}
5. SQL Server-com.microsoft.sqlserver:mssql-jdbc:${version}
6. Oracle-com.oracle.database.jdbc:ojdbc11:${version}
7. H2-com.h2database:h2:{version}
8. HSQLDB-org.hsqldb:hsqldb:{version}

Where {version} is the latest version of the JDBC driver for your databse.


`Conﬁguration using JPA XML`:- Sticking to the JPA-standard approach, we would provide a file named persistence.xml , which we usually place in the META-INF directory of a persistence archive, that is, of the .jar file or directory which contains our entity classes.In resources/META-INF.

```xml
<persistence xmlns="http://java.sun.com/xml/ns/persistence"
            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
            xsi:schemaLocation="http://java.sun.com/xml/ns/persistence https://jakarta.ee/xml/ns/persistence/persistence_3_0.xsd"
        version="2.0">
    <persistence-unit name="org.hibernate.example">
        <class>org.hibernate.example.Book</class>
        <class>org.hibernate.example.Author</class>
        <properties>
            <property name="jakarta.persistence.jdbc.url" value="jdbc:postgresql://localhost/example"/>
            <!-- Credentials -->
            <property name="jakarta.persistence.jdbc.user" value="gavin"/>
            <property name="jakarta.persistence.jdbc.password" value="hibernate"/>
            <!-- Automatic schema export -->
            <property name="jakarta.persistence.schema-generation.database.action"
                    value="drop-and-create"/>
            <!-- SQL statement logging -->
            <property name="hibernate.show_sql" value="true"/>
            <property name="hibernate.format_sql" value="true"/>
            <property name="hibernate.highlight_sql" value="true"/>
        </properties>
    </persistence-unit>
</persistence>
```

We may obtain an EntityManagerFactory by calling Persistence.createEntityManagerFactory() :

```java
EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("org.hibernate.example");
```
If necessary, we may override configuration properties specified in persistence.xml :

```java
EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("org.hibernate.example",
    Map.of(AvailableSettings.JAKARTA_JDBC_PASSWORD, password));
```


`Conﬁguration using Hibernate API`:- Alternatively, the venerable class Configuration allows an instance of Hibernate to be configured in Java code.

```java
SessionFactory sessionFactory = new Configuration()
                    //add annotated classes
                    .addAnnotatedClass(Book.class)
                    .addAnnotatedClass(Author.class)

                    //database configs
                    .setProperty(AvailableSettings.JAKARTA_JDBC_URL, "jdbc:postgresql://localhost/example")
                    .setProperty(AvailableSettings.JAKARTA_JDBC_USER, user)
                    .setProperty(AvailableSettings.JAKARTA_JDBC_PASSWORD, password)
                    .setProperty(AvailableSettings.JAKARTA_HBM2DDL_DATABASE_ACTION,Action.SPEC_ACTION_DROP_AND_CREATE)
                    .setProperty(AvailableSettings.SHOW_SQL,true)
                    .setProperty(AvailableSettings.FORMAT_SQL,true)
                    .setProperty(AvailableSettings.HIGHLIGHT_SQL,true)

                    // Create a new SessionFactory
                    .buildSessionFactory();
```

The Configuration class has survived almost unchanged since the very earliest (pre-1.0) versions of Hibernate, and so it doesn’t look particularly modern. On the other hand, it’s very easy to use, and exposes some options that persistence.xml doesn’t support.


`hibernate.cfg.xml`:- Using hibernate xml.Place it in src/main/resources/hibernate.cfg.xml for gradle and maven.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE hibernate-configuration PUBLIC
    "-//Hibernate/Hibernate Configuration DTD 3.0//EN"
    "<http://hibernate.sourceforge.net/hibernate-configuration-3.0.dtd>">

<hibernate-configuration>
    <session-factory>

        <!-- Database connection -->
        <property name="hibernate.connection.driver_class">com.mysql.cj.jdbc.Driver</property>
        <property name="hibernate.connection.url">jdbc:mysql://localhost:3306/mydb</property>
        <property name="hibernate.connection.username">root</property>
        <property name="hibernate.connection.password">password</property>

        <!-- Dialect -->
        <property name="hibernate.dialect">org.hibernate.dialect.MySQL8Dialect</property>

        <!-- Show SQL in console -->
        <property name="hibernate.show_sql">true</property>
        <property name="hibernate.format_sql">true</property>
        <property name="hibernate.highlight_sql"> true</property>

        <!-- Schema generation -->
        <property name="hibernate.hbm2ddl.auto">update</property>

        <!-- Entity class mapping -->
        <mapping class="com.example.Employee"/>

    </session-factory>
</hibernate-configuration>
```

`Conﬁguration using Hibernate properties ﬁle`:- If we’re using the Hibernate Configuration API, but we don’t want to put certain configuration properties directly in the Java code, we can specify them in a file named hibernate.properties , and place the file in the root classpath.

```java
jakarta.persistence.jdbc.url=
jakarta.persistence.jdbc.user=hibernate
jakarta.persistence.jdbc.password=zAh7mY$2MNshzAQ5
hibernate.show_sql=true
hibernate.hbm2ddl.auto=update
hibernate.format_sql=true
hibernate.highlight_sql=true
hibernate.dialect=

// 1. Loads hibernate.properties automatically from the classpath root
Configuration cfg = new Configuration(); 

// 2. Manually register each @Entity class
cfg.addAnnotatedClass(User.class);
cfg.addAnnotatedClass(Product.class);

// 3. Build the factory
ServiceRegistry serviceRegistry = new StandardServiceRegistryBuilder()
    .applySettings(cfg.getProperties())
    .build();

SessionFactory sessionFactory = cfg.buildSessionFactory(serviceRegistry);
```

A
Key Properties Explained
Property	Values	Description
hibernate.dialect	MySQL8Dialect, PostgreSQLDialect, etc.	Tells Hibernate which SQL dialect to use
show_sql	true / false	Prints generated SQL to console
format_sql	true / false	Pretty prints SQL output
hbm2ddl.auto	create, create-drop, update, validate, none	Controls schema generation
hbm2ddl.auto values:

create - drops and recreates schema on startup
create-drop - drops schema on shutdown (good for tests)
update - updates schema without dropping data
validate - validates schema, throws error if mismatch
none - does nothing (recommended for production)


*Properties*:-

`Built-in connection pool size`:- By default, Hibernate uses a simplistic built-in connection pool. This pool is not meant for use in production.
Pooling JDBC connections is an extremely important performance optimization. You can set the size of Hibernate’s built-in connection pool using this property

hibernate.connection.pool_size - The size of the built-in connection pool

`Logging the generated SQL`:- To see the generated SQL as it’s sent to the database, you have two options.
- One way is to set the property hibernate.show_sql to true, and Hibernate will log SQL direct to the console. You can make the output much more readable by enabling formatting or highlighting. These settings really help when troubleshooting the generated SQL statements.
    1. hibernate.show_sql - If true, log SQL directly to the console
    2. hibernate.format_sql - If true, log SQL in a multiline, indented format
    3. hibernate.highlight_sql - If true, log SQL with syntax highlighting via ANSI escape codes
- Alternatively, you can enable debug-level logging for the category org.hibernate.SQL using your preferred SLF4J logging implementation.
For example, if you’re using Log4J 2 (as above in Optional dependencies), add these lines to your log4j2.properties file:

```java
// SQL execution
logger.hibernate.name = org.hibernate.SQL
logger.hibernate.level = debug
// JDBC parameter binding
logger.jdbc-bind.name=org.hibernate.orm.jdbc.bind
logger.jdbc-bind.level=trace
// JDBC result set extraction
logger.jdbc-extract.name=org.hibernate.orm.jdbc.extract
logger.jdbc-extract.level=trace
```

Hibernate makes relational data visible to a program written in Java, in a natural and typesafe form,making it easy to write complex queries and work with their results,letting the program easily synchronize changes made in memory with the database, respecting the ACID properties of transactions, and allowing performance optimizations to be made after the basic persistence logic has already been written.

In the broadest sense, Hibernate categorizes types into two groups:

1. Value types
2. Entity types

Value types

A value type is a piece of data that does not define its own lifecycle. It is, in effect, owned by an entity, which defines its lifecycle.
Value types are further classified into three sub-categories:

1. Basic types -in mapping the Contact table, all attributes except for name would be basic types. Basic types are discussed in detail in Basic types
2. Embeddable types-the name attribute is an example of an embeddable type, which is discussed in details in Embeddable types
3. Collection types-collection types are also a distinct category among value types.


**ENTITIES**:- An entity is a Java class which represents data in a relational database table.The entity maps or maps to the table.An entity might aggregate data from multiple tables

An entity has attributes—properties or fields—which map to columns of the table. Every entity must have an identifier or id, which maps to the primary key of the table. The id allows us to uniquely associate a row of the table with an instance of the Java class, at least within a given persistence context.

An instance of a Java class cannot outlive the virtual machine to which it belongs. But we may think of an entity instance having a lifecycle which transcends a particular instantiation in memory. By providing its id to Hibernate, we may re-materialize the instance in a new persistence context, as long as the associated row is present in the database. Therefore, the operations persist() and remove() may be thought of as demarcating the beginning and end of the lifecycle of an entity, at least with respect to persistence.

Thus, an id represents the persistent identity of an entity, an identity that outlives a particular instantiation in memory. And this is an important difference between entity class itself and the values of its attributes—the entity has a persistent identity, and a well-defined lifecycle with respect to persistence, whereas a String or List representing one of its attribute values doesn’t.

An entity usually has associations to other entities. Typically, an association between two entities maps to a foreign key in one of the database tables. A group of mutually associated entities is often called a domain model, though data model is also a perfectly good term.

*Entity classes*:- An entity must:

1. Be a non-final class,
2. With a non-private constructor with no parameters.



Since the orm.xml mapping file format defined by the JPA specification was modelled closely on the annotation-based mappings, it’s usually easy to go back and forth between the two options.

*Access types*:- Each entity class has a default access type, either:

1. direct field access, or
2. property access.

Hibernate automatically determines the access type from the location of attribute-level annotations. Concretely:

- if a field is annotated @Id, field access is used
- if a getter method is annotated @Id, property access is used.

Mapping annotations should be placed consistently:

- if @Id annotates a field, the other mapping annotations should also be applied to fields.
- if @Id annotates a getter, the other mapping annotations should be applied to getters.

An entity class like Book, which does not extend any other entity class, is called a root entity. Every root entity must declare an identifier attribute.

*Entity class inheritance*:- An entity class may extend another entity class.

```java
@Entity
class AudioBook extends Book {
    AudioBook() {}
    ...
}
```

A subclass entity inherits every persistent attribute of every entity it extends.

A root entity may also extend another class and inherit mapped attributes from the other class. But in this case, the class which declares the mapped attributes must be annotated **@MappedSuperclass**.

```java
@MappedSuperclass
class Versioned {
    ...
}

@Entity
class Book extends Versioned {
    ...
}
```

A root entity class must declare an attribute annotated @Id, or inherit one from a @MappedSuperclass. A subclass entity always inherits the identifier attribute of the root entity. It may not declare its own @Id attribute.

**Primary Keys**:- Besides option provided by JPA,hibernate extends that and adds:-

*Natural keys as identifiers*:- Not every identifier attribute maps to a (system-generated) surrogate key. Primary keys which are meaningful to the user of the system are called natural keys.
When the primary key of a table is a natural key, we don’t annotate the identifier attribute @GeneratedValue, and it’s the responsibility of the application code to assign a value to the identifier attribute.

```java
@Entity
class Book {
    @Id
    String isbn;
    @NaturalId
    String email;
    // @NaturalId
    // String mobile;
}
```

Of particular interest are natural keys which comprise more than one database column, and such natural keys are called composite keys.
`@NaturalId` is provided only by Hibernate.

```java
//getting data by natural id
session.bySimpleNaturalId(Book.class).load(email);//single natural id
session.byNaturalId(Book.class).using("email",email).using("mobile",mobile).load();//multiple natural ids
```

*Version attributes*:- An entity may have an attribute which is used by Hibernate for optimistic lock checking. A version attribute is usually of type Integer, Short, Long, LocalDateTime, OffsetDateTime, ZonedDateTime, or Instant.

```java
@Version
LocalDateTime lastUpdated;
```

Version attributes are automatically assigned by Hibernate when an entity is made persistent, and automatically incremented or updated each time the entity is updated.

If an entity doesn’t have a version number, which often happens when mapping legacy data, we can still do optimistic locking. The @OptimisticLocking annotation lets us
specify that optimistic locks should be checked by validating the values of ALL fields, or only the DIRTY fields of the entity. And the @OptimisticLock annotation lets us selectively exclude certain fields from optimistic locking.

The @Id and @Version attributes we’ve already seen are just specialized examples of basic attributes


*Entity types*:- Entities, by nature of their unique identifier, exist independently of other objects whereas values do not. Entities are domain model classes which correlate to rows in a database table, using a unique identifier. Because of the requirement for a unique identifier, entities exist independently and define their own lifecycle. The Contact class itself would be an example of an entity.

Byte:- By default, Hibernate maps values of Byte / byte to the TINYINT JDBC type.

```java
// these will both be mapped using TINYINT
Byte wrapper;
byte primitive;
```

Short:- By default, Hibernate maps values of Short / short to the SMALLINT JDBC type.

```java
// these will both be mapped using SMALLINT
Short wrapper;
short primitive;
```

Integer:- By default, Hibernate maps values of Integer / int to the INTEGER JDBC type.

```java
// these will both be mapped using INTEGER
Integer wrapper;
int primitive;
```

Long:- By default, Hibernate maps values of Long / long to the BIGINT JDBC type.

```java
// these will both be mapped using BIGINT
Long wrapper;
long primitive;
```

BigInteger:- By default, Hibernate maps values of BigInteger to the NUMERIC JDBC type.

```java
// will be mapped using NUMERIC
BigInteger wrapper;
```

Double:- By default, Hibernate maps values of Double to the DOUBLE, FLOAT, REAL or NUMERIC JDBC type depending on the capabilities of the database

```java
// these will be mapped using DOUBLE, FLOAT, REAL or NUMERIC
// depending on the capabilities of the database
Double wrapper;
double primitive;
```

A specific type can be influenced using any of the JDBC type influencers covered in JdbcType section.

If @JdbcTypeCode is used, the Dialect is still consulted to make sure the database supports the requested type. If not, an appropriate type is selected

Float:- By default, Hibernate maps values of Float to the FLOAT, REAL or NUMERIC JDBC type depending on the capabilities of the database.

```java
// these will be mapped using FLOAT, REAL or NUMERIC
// depending on the capabilities of the database
Float wrapper;
float primitive;
```

A specific type can be influenced using any of the JDBC type influencers covered in Mapping basic values section.

If @JdbcTypeCode is used, the Dialect is still consulted to make sure the database supports the requested type. If not, an appropriate type is selected
BigDecimal:- By default, Hibernate maps values of BigDecimal to the NUMERIC JDBC type.

```java
// will be mapped using NUMERIC
BigDecimal wrapper;
```

Character:- By default, Hibernate maps Character to the CHAR JDBC type.

```java
// these will be mapped using CHAR
Character wrapper;
char primitive;
```

String:- By default, Hibernate maps String to the VARCHAR JDBC type.

```java
// will be mapped using VARCHAR
String string;

// will be mapped using CLOB
@Lob
String clobString;
```

Optionally, you may specify the maximum length of the string using @Column(length=…​), or using the @Size annotation from Hibernate Validator. For very large strings, you can use one of the constant values defined by the class org.hibernate.Length, for example:

```java
@Column(length=Length.LONG)
private String text;
```

Alternatively, you may explicitly specify the JDBC type LONGVARCHAR, which is treated as a VARCHAR mapping with default length=Length.LONG when no length is explicitly specified:

```java
@JdbcTypeCode(Types.LONGVARCHAR)
private String text;
```

If you use Hibernate for schema generation, Hibernate will generate DDL with a column type that is large enough to accommodate the maximum length you’ve specified.

*Enumerated types*:- An enumerated type is considered a sort of basic type, but since most databases don’t have a native ENUM type, JPA provides a special @Enumerated annotation to specify how the enumerated values should be represented in the database:by default, an enum is stored as an integer, the value of its ordinal() member, but if the attribute is annotated @Enumerated(STRING), it will be stored as a string, the value of its name() member.

//here, an ORDINAL encoding makes sense

```java
@Enumerated
@Basic(optional=false)
DayOfWeek dayOfWeek;

//but usually, a STRING encoding is better
@Enumerated(EnumType.STRING)
@Basic(optional=false)
Status status;
```

In Hibernate 6, an enum annotated @Enumerated(STRING) is mapped to:

- a VARCHAR column type with a CHECK constraint on most databases, or
- an ENUM column type on MySQL.

Any other enum is mapped to a TINYINT column with a CHECK constraint.

In most cases, storing an integer encoding of the enum value makes the relational data harder to interpret.Even considering DayOfWeek , the encoding to integers is ambiguous. If you check java.time.DayOfWeek , you’ll notice that SUNDAY is encoded as 6 . But in the country I was born, SUNDAY is the first day of the week!
So we prefer @Enumerated(STRING) for most enum attributes.

Postgres supports named ENUM types, which must be declared using a DDL CREATE TYPE statement. Sadly, these ENUM types aren’t well-integrated with the language nor well-supported by the Postgres JDBC driver, so Hibernate doesn’t use them by default. But if you would like to use a named enumerated type on Postgres, just annotate your enum attribute like this:

```java
@JdbcTypeCode(SqlTypes.NAMED_ENUM)
@Basic(optional=false)
Status status;
```

The limited set of pre-defined basic attribute types can be stretched a bit further by supplying a converter.


*Embeddable objects*:- An embeddable object is a Java class whose state maps to multiple columns of a table, but which doesn’t have its own persistent identity. That is, it’s a class with mapped attributes, but no @Id attribute.
An embeddable object can only be made persistent by assigning it to the attribute of an entity. Since the embeddable object does not have its own persistent identity, its lifecycle with respect to persistence is completely determined by the lifecycle of the entity to which it belongs.

An embeddable class must be annotated @Embeddable instead of @Entity.

```java
@Embeddable
class Name {

    @Basic(optional=false)
    String firstName;

    @Basic(optional=false)
    String lastName;

    String middleName;

    Name() {}

    Name(String firstName, String middleName, String lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
    }

    ...
}
```

An embeddable class must satisfy the same requirements that entity classes satisfy, with the exception that an embeddable class has no @Id attribute. In particular, it must have a constructor with no parameters.

Alternatively, an embeddable type may be defined as a Java record type:

```java
@Embeddable
record Name(String firstName, String middleName, String lastName) {}
```

In this case, the requirement for a constructor with no parameters is relaxed.
We may now use our Name class (or record) as the type of an entity attribute:

```java
@Entity
class Author {
    @Id @GeneratedValue
    Long id;
    Name name;
    ...
}
```

Embeddable types can be nested. That is, an @Embeddable class may have an attribute whose type is itself a different @Embeddable class.

*Collections mapped to SQL arrays*:- Unfortunately, JPA doesn’t define a standard way to map SQL arrays, but here’s how we can do it in Hibernate:

```java
@Array(length=7)
DayOfWeek[] daysOfWeek; // stored as a SQL ARRAY type
```

The @Array annotation is optional, but it’s important to limit the amount of storage space the database allocates to the ARRAY column. By writing @Array(length=7) here, we specified that DDL should be generated with the column type TINYINT ARRAY[7] .


**OBJECT/RELATIONAL MAPPING TECHNIQUES**:- Given a domain model— that is, a collection of entity classes decorated with annotations— Hibernate will infer a complete relational schema, and even export it to your database.
The resulting schema will be entirely sane and reasonable, though if you look closely, you’ll find some flaws. For example, every VARCHAR column will have the same length, VARCHAR(255) .
Hibernate SQL case convention:-
1. query language identifiers are written in lowercase.
2. table names are written in MixedCase.
3. column names are written in camelCase.

Mapping domain model is done in two ways:-
1. Using Annotations
2. Using xml

*Using Annotations*:- 

- `Mapping to tables`:- The following annotations specify exactly how elements of the domain model map to tables of the relational model:
    1. @Table - Map an entity class to its primary table
    2. @SecondaryTable - Define a secondary table for an entity class
    3. @JoinTable - Map a many-to-many or many-to-one association to its association table
    4. @CollectionTable - Map an @ElementCollection to its table

The first two annotations are used to map an entity to its primary table and, optionally, one or more secondary tables.

- `Mapping entities to tables`:- By default, an entity maps to a single table, which may be specified using @Table:

```java
@Entity
@Table(name="People")
class Person { ... }
```

However, the @SecondaryTable annotation allows us to spread its attributes across multiple secondary tables.

```java
@Entity
@Table(name="Books")
@SecondaryTable(name="Editions")
class Book { ... }
```

- The @Table annotation can do more than just specify a name:
    1. name - The name of the mapped table
    2. schema - The schema to which the table belongs
    3. catalog - The catalog to which the table belongs
    4. uniqueConstraints - One or more @UniqueConstraint annotations declaring multi-column unique constraints
    5. indexes - One or more @Index annotations each declaring an index

- The @SecondaryTable annotation is even more interesting:
    1. name - The name of the mapped table
    2. schema - The schema to which the table belongs
    3. catalog - The catalog to which the table belongs
    4. uniqueConstraints - One or more @UniqueConstraint annotations declaring multi-column unique constraints
    5. indexes - One or more @Index annotations each declaring an index
    6. pkJoinColumns - One or more @PrimaryKeyJoinColumn annotations, specifying primary key column mappings
    7. foreignKey - An @ForeignKey annotation specifying the name of the FOREIGN KEY constraint on the @PrimaryKeyJoinColumns

`Mapping associations to tables`:- The @JoinTable annotation specifies an association table, that is, a table holding foreign keys of both associated entities. This annotation is usually used with @ManyToMany associations:

```java
@Entity
class Book {
    ...
    @ManyToMany
    @JoinTable(name="BooksAuthors")
    Set<Author> authors;
    ...
}
```

But it’s even possible to use it to map a @ManyToOne or @OneToOne association to an association table.

```java
@Entity
class Book {
    ...

    @ManyToOne(fetch=LAZY)
    @JoinTable(name="BookPublisher")
    Publisher publisher;

    ...
}
```

Here, there should be a UNIQUE constraint on one of the columns of the association table.

```java
@Entity
class Author {
    ...

    @OneToOne(optional=false, fetch=LAZY)
    @JoinTable(name="AuthorPerson")
    Person author;

    ...
}
```

Here, there should be a UNIQUE constraint on both columns of the association table.
@JoinTable annotation members Annotation member  Purpose

1. name:- The name of the mapped association table
2. schema:- The schema to which the table belongs
3. catalog- The catalog to which the table belongs
4. uniqueConstraints - One or more @UniqueConstraint annotations declaring multi-column unique constraints
5. indexes - One or more @Index annotations each declaring an index
6. joinColumns - One or more @JoinColumn annotations, specifying foreign key column mappings to the table of the owning side
7. inverseJoinColumns - One or more @JoinColumn annotations, specifying foreign key column mappings to the table of the unowned side
8. foreignKey - An @ForeignKey annotation specifying the name of the FOREIGN KEY constraint on the joinColumnss
9. inverseForeignKey - An @ForeignKey annotation specifying the name of the FOREIGN KEY constraint on the inverseJoinColumnss

`Mapping to columns`:- These annotations specify how elements of the domain model map to columns of tables in the relational model:

1. @Column:- Map an attribute to a column
2. @JoinColumn- Map an association to a foreign key column
3. @PrimaryKeyJoinColumn - Map the primary key used to join a secondary table with its primary, or a subclass table in JOINED inheritance with its root class table
4. @OrderColumn- Specifies a column that should be used to maintain the order of a List.
5. @MapKeyColumn - Specified a column that should be used to persist the keys of a Map.

We use the @Column annotation to map basic attributes.

1. name - The name of the mapped column
2. table - The name of the table to which this column belongs
3. length - The length of a VARCHAR , CHAR , or VARBINARY column type
4. precision - The decimal digits of precision of a FLOAT , DECIMAL , NUMERIC , or TIME , or TIMESTAMP column type
5. scale - The scale of a DECIMAL or NUMERIC column type, the digits of precision that occur to the right of the decimal point
6. unique - Whether the column has a UNIQUE constraint
7. nullable - Whether the column has a NOT NULL constraint
8. insertable - Whether the column should appear in generated SQL INSERT statements
9. updatable - Whether the column should appear in generated SQL UPDATE statements
10. columnDefinition - A DDL fragment that should be used to declare the column

```java
@Entity
@Table(name="Books")
@SecondaryTable(name="Editions")
class Book {
    @Id @GeneratedValue
    @Column(name="bookId") // customize column name
    Long id;

    @Column(length=100, nullable=false) // declare column as VARCHAR(100) NOT NULL
    String title;

    @Column(length=17, unique=true, nullable=false) // declare column as VARCHAR(17) NOT NULL UNIQUE
    String isbn;

    @Column(table="Editions", updatable=false) // column belongs to the secondary table, and is never updated
    int edition;
}
```

The @JoinColumn annotation is used to customize a foreign key column.

1. name - The name of the mapped foreign key column
2. table - The name of the table to which this column belongs
3. referencedColumnName - The name of the column to which the mapped foreign key column refers
4. unique - Whether the column has a UNIQUE constraint
5. nullable - Whether the column has a NOT NULL constraint
6. insertable - Whether the column should appear in generated SQL INSERT statements
7. updatable - Whether the column should appear in generated SQL UPDATE statements
8. columnDefinition - A DDL fragment that should be used to declare the column
9. foreignKey - A @ForeignKey annotation specifying the name of the FOREIGN KEY constraint
A foreign key column doesn’t necessarily have to refer to the primary key of the referenced table. It’s quite acceptable for the foreign key to refer to any other unique key of the referenced entity, even to a unique key of a secondary table.

```java
@Entity
@Table(name="Items")
class Item {
    ...
    @ManyToOne(optional=false ) // implies nullable=false
    @JoinColumn(name = "bookIsbn", referencedColumnName = "isbn",// a reference to a non-PK column
    foreignKey = @ForeignKey(name="ItemsToBooksBySsn")) // supply a name for the FK constraint
    Book book;
...
}
```

NOTE:- that the foreignKey member is completely optional and only affects DDL generation.If you don’t supply an explicit name using @ForeignKey , Hibernate will generate a quite ugly name. The reason for this is that the maximum length of foreign key names on some databases is extremely constrained, and we need to avoid collisions. To be fair, this is perfectly fine if you’re only using the generated DDL for testing.

For composite foreign keys we might have multiple @JoinColumn annotations:

```java
@Entity
@Table(name="Items")
class Item {
    ...
    @ManyToOne(optional=false)
    @JoinColumn(name = "bookIsbn", referencedColumnName = "isbn")
    @JoinColumn(name = "bookPrinting", referencedColumnName = "printing")
    Book book;
...
}
```

If we need to specify the @ForeignKey , this starts to get a bit messy:

```java
@Entity
@Table(name="Items")
class Item {
    ...
    @ManyToOne(optional=false)
    @JoinColumns(value = {@JoinColumn(name = "bookIsbn", referencedColumnName = "isbn"),
    @JoinColumn(name = "bookPrinting", referencedColumnName = "printing")},foreignKey = @ForeignKey(name="ItemsToBooksBySsn"))
    Book book;
...
}
```

TODO @CreationTimestamp,@UpdateTimestamp

*Using xml*:-

```xml
<hibernate-mapping package="com.kipcollo.entity">
    <class name="Owner" table="owner_table">
        <id name="id" type="int" column="id"/>
        <property name="firstName" type="java.lang.String" column="first_name" not-null="true"/>
        <property name="gender" column="gender">
            <type name="org.hibernate.type.EnumType" >
                <param name="enumClass">com.kipcollo.Gender</param>
            </type>
        </property>
    </class>
</hibernate-mapping>
```



- **INTERACTING WITH DATABASE**:- To interact with the database, that is, to execute queries, or to insert, update, or delete data, we need an instance of one of the following objects:
    1. JPA EntityManager
    2. Hibernate Session
    3. Hibernate StatelessSession

The Session interface extends EntityManager and so the only difference between the two interfaces is that Session offers a few more operations.
Actually, in Hibernate, every EntityManager is a Session and you can narrow it like this:

```java
Session session = entityManager.unwrap(Session.class);
```

An instance of Session (or of EntityManager ) is a stateful session. It mediates the interaction between your program and the database via a operations on a persistence context.Stateful sessions certainly have their advantages, but they’re more difficult to reason about, and when something goes wrong, the error messages can be more difficult to understand.
A stateless session doesn’t have a persistence context.It’s a simpler programming model, and lets the developer interact with the database more directly.

- *Persistence Contexts*:- A persistence context is a sort of cache; we sometimes call it the "first-level cache", to distinguish it from the second-level cache.For every entity instance read from the database within the scope of a persistence context, and for every new entity made persistent within the scope of the persistence context, the context holds a unique mapping from the identifier of the entity instance to the instance itself.Thus, an entity instance may be in one of three states with respect to a given persistence context:
    1. transient — never persistent, and not associated with the persistence context.
    2. persistent — currently associated with the persistence context.
    3. detached — previously persistent in another session, but not currently associated with this persistence context.

At any given moment, an instance may be associated with at most one persistence context.
The lifetime of a persistence context usually corresponds to the lifetime of a transaction, though it’s possible to have a persistence context that spans several database-level transactions that form a single logical unit of work.

A persistence context—i.e, a Session or EntityManager — absolutely positively must not be shared between multiple threads or between concurrent transactions.
Container-managed persistence contexts - In a container environment, the lifecycle of a persistence context scoped to the transaction will usually be managed for you.

There are several reasons we like persistence contexts:-
1. They help avoid data aliasing: if we modify an entity in one section of code, then other code executing within the same persistence context will see our modification.
2. They enable automatic dirty checking: after modifying an entity, we don’t need to perform any explicit operation to ask Hibernate to propagate that change back to the database. Instead, the change will be automatically synchronized with the database when the session is flushed.
3. They can improve performance by avoiding a trip to the database when a given entity instance is requested repeatedly in a given unit of work.
4. They make it possible to transparently batch together multiple database operations.

A persistence context also allows us to detect circularities when performing operations on graphs of entities. (Even in a stateless session, we need some sort of temporary cache of the entity instances we’ve visited while executing a query.)
On the other hand, stateful sessions come with some very important restrictions, since:

- persistence contexts aren’t threadsafe, and can’t be shared across threads.
- a persistence context can’t be reused across unrelated transactions, since that would break the isolation and atomicity of the transactions.

Furthermore, a persistence context holds a hard references to all its entities, preventing them from being garbage collected. Thus,the session must be discarded once a unit of work is complete.


*Creating a session*:-

`JPA EntityManager`:- Sticking with standard JPA-defined APIs, we saw how to obtain an EntityManagerFactory in Configuration using JPA XML. It’s quite
unsurprising that we may use this object to create an EntityManager:

```java
EntityManager entityManager = entityManagerFactory.createEntityManager();
```

When we’re finished with the EntityManager , we should explicitly clean it up:

```java
entityManager.close();
```

`Hibernate Session`:- On the other hand, if we’re starting from a SessionFactory , as described in Configuration using Hibernate API, we may use:

```java
Session session = sessionFactory.openSession();
```

But we still need to clean up:

```java
session.close();
```

`Container Environments`:- Injecting the EntityManager- If you’re writing code for some sort of container environment, you’ll probably obtain the EntityManager by some sort of dependency injection. For example, in Java (or Jakarta) EE you would write:

```java
@PersistenceContext EntityManager entityManager;
```

In Quarkus, injection is handled by CDI:

```java
@Inject EntityManager entityManager;
```

Outside a container environment, we’ll also have to write code to manage database transactions.


*Managing transactions*:- 

`JPA-standard APIs`:- The EntityTransaction interface allows us to control database transactions.You control everything yourself. The idiom we recommend is the following:

```java
EntityManager entityManager = entityManagerFactory.createEntityManager();
EntityTransaction tx = entityManager.getTransaction();
try {
    tx.begin();
    //do some work
    ...
    tx.commit();
} catch (Exception e) {
    if(tx.isActive()) tx.rollback();
    throw e;
} finally{
    entityManager.close();
}
```

`Hibernate’s native APIs`:- We might write something really similar, but since this sort of code is extremely tedious, we have a much nicer option:

```java
sessionFactory.inTransaction(session -> { //do the work
    ...
});
```

`container environment`:- The container itself is usually responsible for managing transactions. In Java EE or Quarkus,you’ll probably indicate the boundaries of the transaction using the @Transactional annotation.

```java
@Transactional
public void createUser(String name) {
        User user = new User();
        user.setName(name);

        entityManager.persist(user);

        // no commit() call
        // no rollback() call
    }
```

JPA doesn’t have a standard way to set the transaction timeout, but Hibernate does:

```java
session.getTransaction().setTimeout(30); // 30 seconds
```


*Operations on the persistence context*:- The following important operations let us interact with the persistence context and schedule modifications to the data:

- Methods for modifying data and managing the persistence context -
    1. persist(Object) - Make a transient object persistent and schedule a SQL insert statement for later execution
    2. remove(Object) - Make a persistent object transient and schedule a SQL delete statement for later execution
    3. merge(Object) - Copy the state of a given detached object to a corresponding managed persistent instance and return the persistent object
    4. detach(Object) - Disassociate a persistent object from a session without affecting the database
    5. clear() - Empty the persistence context and detach all its entities
    6. flush() - Detect changes made to persistent objects association with the session and synchronize the database state with the state of the session by executing SQL insert , update , and delete statements

Notice that persist() and remove() have no immediate effect on the database, and instead simply schedule a command for later execution. Also notice that there’s no update() operation for a stateful session. Modifications are automatically detected when the session is flushed.

```java
User user = entityManager.find(User.class, 1);
entityManager.remove(user);

user.setName("John");
entityManager.flush();
```

`create new row`:- There are two ways to create a row in database:-
- save() - Object save(Object object) - Accepts object to be saved,assigns the identifier and returns the saved object with identifier.Part of hibernate only.Deprecated since Hibernate 6.
- persist() - void persist(Object object) - Accepts object to be saved,assigns identifier but doesn't return anything.Part of both JPA and Hibernate.Should be used as a standard.

```java
Session session = sessionFactory.openSession();
Transaction transaction transaction = session.beginTransaction();
User user = new User();
session.persist(user);
transaction.commit();
```

`Read a row`:- There are two ways to read a row from the database.- 
- load() - <T> T load(Class<T> entityType,Object primaryKey) - Accepts entity datatype and primary key.If data exists then returns the object else throws ObjectNotFoundException when properties of objects are accessed first time.Part of hibernate only.Deprecated since Hibernate 6.
- get() - <T> T get(Class<T> entityType,Object primaryKey) - Accepts entity data type and primary key.If data exists then returns the object else returns null.Part of Hibernate only.Should be used as a standard.

```java
Session session = sessionFactory.openSession();
session.get(User.class, userId);
```

`Update a row`:- There are 2 ways to update a row in the database.
- update() - void update(Object entity):- Accepts object to be updated.Updates a row but doesn't return anything.Part of hibernate only.Deprecated since Hibernate 6.
- merge() - <T> T merge(T entity) - Accepts object to be updated.Updates the row and returns updated object.Part of JPA and Hibernate.Should be used as a standard.

```java
Session session = sessionFactory.openSession();
Transaction transaction transaction = session.beginTransaction();
User user = session.get(User.class, userId);
user.setName("updatedName");
session.merge(user);
transaction.commit();
```

`Delete a row`:- There are 2 ways to delete a row in the database.
- delete() - void delete(Object entity) - Accepts object to be deleted,deletes the row but doesn't return anything.Part of Hibernate only.Deprecated since Hibernate 6.
- remove() - void remove(Object entity) - Accepts object to be deleted,deletes the row but doesn't return anything.Part of JPA and Hibernate.Should be used as a standard.

```java
Session session = sessionFactory.openSession();
Transaction transaction transaction = session.beginTransaction();
User user = session.get(User.class, userId);
session.remove(user);
transaction.commit();
```

On the other hand, except for getReference() , the following operations all result in immediate access to the database:
- Methods for reading and locking data:-
    1. find(Class,Object)Obtain a persistent object given its type and its id
    2. find(Class,Object,LockModeType)Obtain a persistent object given its type and its id, requesting the given optimistic or pessimistic lock mode
    3. getReference(Class,id) - Obtain a reference to a persistent object given its type and its id, without actually loading its state from the database
    4. getReference(Object) - Obtain a reference to a persistent object with the same identity as the given detached instance, without actually loading its state from the database
    5. refresh(Object) - Refresh the persistent state of an object using a new SQL select to retrieve its current state from the database
    6. refresh(Object,LockModeType) - Refresh the persistent state of an object using a new SQL select to retrieve its current state from the database, requesting the given optimistic or pessimistic lock mode 
    7. lock(Object, LockModeType) - Obtain an optimistic or pessimistic lock on a persistent object
Any of these operations might throw an exception. Now, if an exception occurs while interacting with the database, there’s no good way to resynchronize the state of the current persistence context with the state held in database tables.
Therefore, a session is considered to be unusable after any of its methods throws an exception.

```java
User user = entityManager.find(User.class, 1);
User user = entityManager.getReference(User.class, 1);
entityManager.refresh(user);
entityManager.lock(user, LockModeType.PESSIMISTIC_WRITE);
```


`Queries`:- Hibernate features three complementary ways to write queries:-

1. the Hibernate Query Language, an extremely powerful superset of JPQL, which abstracts most of the features of modern dialects of SQL,
2. the JPA criteria query API, along with extensions, allowing almost any HQL query to be constructed programmatically via a typesafe API, and, of course
3. for when all else fails, native SQL queries.


`Limits, pagination, and ordering`:- If a query might return more results than we can handle at one time, we may specify:
- a limit on the maximum number of rows returned.
- optionally, an offset, the first row of an ordered result set to return.

The offset is used to paginate query results.

There’s two ways to add a limit or offset to a HQL or native SQL query:
1. using the syntax of the query language itself, for example, offset 10 rows fetch next 20 rows only , or
2. using the methods setFirstResult() and setMaxResults() of the SelectionQuery interface.

- Methods for query limits, pagination, and ordering
    1. setMaxResults() - Set a limit on the number of results returned by a query - JPA Standard
    2. setFirstResult() - Set an offset on the results returned by a query -  JPA Standard
    3. setPage() - Set the limit and offset by specifying a Page object - Not JPA Standard  
    4. setOrder() - Specify how the query results should be ordered - Not JPA Standard
    5. getResultCount()Determine how many results the query would return in the absence of any limit or offset - Not JPA Standard

```java
// Using methods
List<User> users = entityManager
    .createQuery("from User", User.class)
    .setFirstResult(10)   // skip first 10 rows
    .setMaxResults(5)     // get next 5 rows
    .getResultList();

//Using query syntax (HQL/SQL style)
List<User> users = entityManager
    .createQuery("from User order by id offset 10 rows fetch next 5 rows only", User.class)
    .getResultList();

// Ordering
List<User> users = entityManager
    .createQuery("from User order by name asc", User.class)
    .getResultList();

//count total results
Long count = entityManager
    .createQuery("select count(u) from User u", Long.class)
    .getSingleResult();
```


**Hibernate Entity Lifecycle**:-

Application <-------------------Persistence Context-----------------> Database

**Caching**:- 

`First-Level Cache`:- Enabled by default, always active.Scoped to the Session - lives and dies with the session
Cannot be turned off
Automatically used when you call session.get() multiple times for the same entity

`Second-Level Cache`:- Shared across sessions within the same SessionFactory.Disabled by default - you must configure it
Useful for read-heavy, rarely-changing data (like reference tables)

Common providers: Ehcache, Infinispan, Hazelcast

```xml
<!-- hibernate.cfg.xml -->
<property name="hibernate.cache.use_second_level_cache">true</property>
<property name="hibernate.cache.region.factory_class">
    org.hibernate.cache.ehcache.EhCacheRegionFactory
</property>
```

```java
@Entity
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)  // enable L2 cache for this entity
public class Country {
    @Id
    private Long id;
    private String name;
}
```

Cache Concurrency Strategies:

READ_ONLY - Data never changes (best performance)
READ_WRITE - Data changes occasionally
NONSTRICT_READ_WRITE - Occasional updates, stale data acceptable
TRANSACTIONAL - Full transactional integrity needed

Query Cache - caches query result sets (not just entities). Must be explicitly enabled per query.

```java
session.createQuery("FROM Country", Country.class)
    .setCacheable(true)
    .getResultList();
```

**COMPILE-TIME TOOLING**:-


**TUNING AND PERFORMANCE**


---------------


## Spring ORM

The Spring Framework supports integration with the Java Persistence API (JPA) and supports native Hibernate for resource management, data access object (DAO) implementations, and transaction strategies. For example, for Hibernate, there is first-class support with several convenient IoC features that address many typical Hibernate integration issues. You can configure all of the supported features for OR (object relational) mapping tools through Dependency Injection. They can participate in Spring’s resource and transaction management, and they comply with Spring’s generic transaction and DAO exception hierarchies. The recommended integration style is to code DAOs against plain Hibernate or JPA APIs.

Spring adds significant enhancements to the ORM layer of your choice when you create data access applications.The benefits of using the Spring Framework to create your ORM DAOs include:The benefits of using the Spring Framework to create your ORM DAOs include:
1. Easier testing. Spring’s IoC approach makes it easy to swap the implementations and configuration locations of Hibernate SessionFactory instances, JDBC DataSource instances, transaction managers, and mapped object implementations (if needed). This in turn makes it much easier to test each piece of persistence-related code in isolation.
2. Common data access exceptions. Spring can wrap exceptions from your ORM tool, converting them from proprietary(potentially checked) exceptions to a common runtime DataAccessException hierarchy. This feature lets you handle most persistence exceptions, which are non-recoverable, only in the appropriate layers, without annoying boilerplate catches,throws, and exception declarations. You can still trap and handle exceptions as necessary.Remember that JDBC exceptions (including DB-specific dialects) are also converted to the same hierarchy, meaning that you can perform some operations with JDBC within a consistent programming model.
3. Integrated transaction management. You can wrap your ORM code with a declarative, aspect-oriented programming (AOP) style method interceptor either through the @Transactional annotation or by explicitly configuring the transaction AOP advice in an XML configuration file.In both cases, transaction semantics and exception handling (rollback and so on) are handled for you.


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

Spring supports following Object Relational Mapping (ORM) frameworks:
1. Hibernate
2. Java Persistence API (JPA)
3. TopLink
4. Java Data Objects (JDO)
5. Apache Object Relational Bridge (ORB)


Spring Data JPA in a traditional Spring application, without the auto-configuration features of Spring Boot. In this case, the setup requires some manual configuration, but you still get the power of Spring Data JPA for repository management.

Spring Configuration (applicationContext.xml) - For traditional Spring (non-Boot) projects, you will need to configure your data source, JPA entity manager factory, and transaction manager in your Spring XML configuration file (applicationContext.xml).

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

The persistence layer often serves as the foundation upon which an application is built. Building on top of this foundation are the three core components of a standard Spring-based persistence tier: the domain model, the Data Access Object layer, and the service facade.


### Hibernate

Spring encourages design practices that help to keep all of your application’s dependencies decoupled. Whether it be an external framework, an application component, or even Spring or Hibernate themselves, ensuring that collaborating components are not directly tied together helps prevent the concerns of one layer from leaking into another. By delegating all your wiring details to Spring, you not only simplify your code base by relieving the need to create infrastructural “access code,” you also ensure that components are kept distinct. Coding to interfaces and using Spring’s ORM abstractions and generic exception hierarchy can help to achieve these goals.

**HIBERNATE**:- Hibernate is an open source persistence framework.It provides not only basic object-relational mapping but also all the other sophisticated features you’d expect from a full-featured ORM tool, such as caching, lazy loading, eager fetching, and distributed caching.

Natively, the main interface for working with Hibernate is org.hibernate.Session.The Session interface provides basic data-access functionality such as the ability to save, update, delete, and load objects from the database. Through the Hibernate Session, an application’s repository performs all of its persistence needs.
The standard way to get a reference to a Hibernate Session object is through an implementation of Hibernate’s SessionFactory interface. Among other things, SessionFactory is responsible for opening, closing, and managing Hibernate Sessions.

Spring’s support for Hibernate offers a template class to abstract Hibernate persistence. Historically, `HibernateTemplate` was the way to work with Hibernate in a Spring application.HibernateTemplate took care of the intricacies of working with Hibernate by catching Hibernate-specific exceptions and rethrowing them as one of Spring’s unchecked data access exceptions.
One of the responsibilities of HibernateTemplate is to manage Hibernate Sessions. This involves opening and closing sessions as well as ensuring one session per transaction. Without HibernateTemplate, you’d have no choice but to clutter your DAOs with boilerplate session management code.

The downside of HibernateTemplate is that it’s somewhat intrusive. When we use Spring’s HibernateTemplate in a DAO (whether directly or through HibernateDaoSupport), the DAO class is coupled to the Spring API.
Even though HibernateTemplate is still around, it’s no longer considered the best way of working with Hibernate. `Contextual sessions`, introduced in Hibernate 3, are a way in which Hibernate itself manages one Session per transaction. There’s no need for HibernateTemplate to ensure this behavior. This keeps your DAO classes free of Spring-specific code.

Spring provides two ways to use Hibernate:
1. We can extend HibernateDAOSupport and apply an AOP interceptor node to use Hibernate.
2. We can also use HibernateTemplate and Callback to access Hibernate. This is based on Inversion of Control.

We can use following steps for integrating Spring and Hibernate:
- Add dependencies for Spring and Hibernate in pom.xml
- Implement DAO from HibernateDaoSupport
- Use Hibernate functions via getHibernateTemplate() method


Annotation-Based Configuration - In modern Spring Boot projects, application.properties handles Hibernate config:

```java
spring.datasource.url=jdbc:mysql://localhost:3306/mydb
spring.datasource.username=root
spring.datasource.password=password
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
spring.jpa.database-platform=org.hibernate.dialect.MySQL8Dialect
```

### Spring JPA

The Spring JPA, available under the org.springframework.orm.jpa package, offers comprehensive support for the Java Persistence API while being aware of the underlying implementation in order to provide additional features.
With the Spring 2.0 release came the premiere of Spring integration with JPA.

The first step toward using JPA with Spring is to configure an entity manager factory as a bean in the Spring application context.

JPA-based applications use an implementation of EntityManagerFactory to get an instance of an EntityManager. The JPA specification defines two kinds of entity managers:
1. Application-managed—Entity managers are created when an application directly requests one from an entity manager factory. With application-managed entity managers, the application is responsible for opening or closing entity managers and involving the entity manager in transactions. This type of entity manager is most appropriate for use in standalone applications that don’t run in a Java EE container.
2. Container-managed—Entity managers are created and managed by a Java EE container. The application doesn’t interact with the entity manager factory at all. Instead, entity managers are obtained directly through injection or from JNDI. The container is responsible for configuring the entity manager factories.This type of entity manager is most appropriate for use by a Java EE container that wants to maintain so me control over JPA configuration beyond what’s specified in persistence.xml.

Both kinds of entity manager implement the same EntityManager interface. The key difference isn’t in the EntityManager itself, but rather in how the EntityManager is created and managed. Application-managed EntityManagers are created by an EntityManagerFactory obtained by calling the createEntityManagerFactory() method of the PersistenceProvider. Meanwhile, container-managed EntityManagerFactorys are obtained through PersistenceProvider’s createContainerEntityManagerFactory() method.


---------------


## Spring Data JPA

Spring Data JPA is an abstracton layer on top of JPA to reduce the amount of boilerplate code required to implement data eccess object(DAO).Spring Data JPA builds on JPA/Hibernate.The Spring-specific layer.Spring Data JPA, part of the larger Spring Data family, makes it easy to easily implement JPA-based (Java Persistence API) repositories. It makes it easier to build Spring-powered applications that use data access technologies.

JDBC/SQL provided a lot of capabilities to interface with the database, but with a significant amount of code required. JPA simplified the mapping, but as you observed with the JPA DAO implementation — there was still a modest amount of boilerplate code. Spring Data JPA Repository leverages the capabilities and power of JPA to map @Entity classes to the database but also further eliminates much of the boilerplate code remaining with JPA by leveraging Dynamic Interface Proxy techniques.

Implementing a data access layer for an application can be quite cumbersome. Too much boilerplate code has to be written to execute the simplest queries. Add things like pagination, auditing, and other often-needed options, and you end up lost.
Spring Data JPA provides repository support for JPA-based mappings.
Spring Data JPA aims to significantly improve the implementation of data access layers by reducing the effort to the amount that’s actually needed. As a developer you write your repository interfaces using any number of techniques, and Spring will wire it up for you automatically. You can even use custom finders or query by example and Spring will write the query for you!.

It uses Hibernate as default JPA provider.

**Spring Data JPA Repository**:- Spring Data JPA provides repository support for JPA-based mappings.We start off by writing no mapping code — just interfaces associated with our @Entity and primary key type — and have Spring Data JPA implement the desired code. The Spring Data JPA interfaces are layered — offering useful tools for interacting with the database. Our primary @Entity types will have a repository interface declared that inherit from JpaRepository and any custom interfaces we optionally define.
The extends path was modified some with the latest version of Spring Data Commons, but the JpaRepository ends up being mostly the same by the time the interfaces get merged at the bottom of the inheritance tree.

Spring Data is a high-level abstraction layer over JPA (or other persistence technologies) that simplifies database access in Spring applications.

`JpaRepository<T, ID>`:- Extends PagingAndSortingRepository.Adds JPA-specific methods like flush() and saveAndFlush().All it's methods are transactional.This gives CRUD, pagination, sorting, query derivation, batch operations, and projections.
JPA specific extension of org.springframework.data.repository.Repository.

```java
public interface JpaRepository<T, ID> extends PagingAndSortingRepository<T, ID> {
    void flush();
    <S extends T> S saveAndFlush(S entity);
    void deleteAllInBatch();
    void deleteAllByIdInBatch(Iterable<ID> ids);
}
```


Example:-

```java
@Entity
@NoArgsConstructor
public class User{
    @Id
    private Integer id;
}
```

```java
public interface UserRepository extends JpaRepository<User,Integer>{}
```


**Configuration**:- Assuming your repository and entity classes are in a package below the class annotated with @SpringBootApplication — all that is necessary is the @EnableJpaRepositories to enable the necessary auto-configuration to instantiate the repository.

```java
@SpringBootApplication
@EnableJpaRepositories
public class JPAUserApp {}
```

If, however, your repository or entities are not located in the default packages scanned, their packages can be scanned with configuration options to the @EnableJpaRepositories and @EntityScan annotations.

```java
@EnableJpaRepositories(basePackageClasses = {UserRepository.class})
@EntityScan(basePackageClasses = {User.class})
```


`Injection` - With the repository interface declared and the JPA repository support enabled, we can then successfully inject the repository into our application.

```java
@Autowired
private UserRepository userRepo;
```


**Embedded Database**:-



Supports JPQL, native SQL, and @Query annotations.


*Query derivation* - Method names encode predicate logic.

```java
List<User> findByEmailAndActive(String email, boolean active);
```

Spring generates the JPQL using the entity metadata.

*@Query*:- You can inject JPQL or native SQL directly.

```java
@Query("select u from User u where u.email = :email")
```

Suitable when derivation becomes unreadable.

*Projections*:- Three kinds: interface-based, class-based DTO, and dynamic projections.
Spring automatically maps query results into the projection type, avoiding entity loading when not needed.


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




Relationship Annotations
@OneToOne
One entity maps to exactly one instance of another.

@Entity
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "address_id", referencedColumnName = "id")
    private Address address;
}
@OneToMany and @ManyToOne
One department has many employees. Each employee belongs to one department.

// Department side (One)
@Entity
public class Department {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(mappedBy = "department", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Employee> employees = new ArrayList<>();
}

// Employee side (Many)
@Entity
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "department_id")
    private Department department;
}
mappedBy tells Hibernate that the other side owns the relationship
The owning side (the one with @JoinColumn) controls the foreign key
@ManyToMany
Students can enroll in many courses. Each course has many students.

@Entity
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToMany
    @JoinTable(
        name = "student_course",
        joinColumns = @JoinColumn(name = "student_id"),
        inverseJoinColumns = @JoinColumn(name = "course_id")
    )
    private List<Course> courses = new ArrayList<>();
}

@Entity
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToMany(mappedBy = "courses")
    private List<Student> students = new ArrayList<>();
}
CascadeType Quick Reference
CascadeType	Effect
PERSIST	Saves child when parent is saved
MERGE	Updates child when parent is merged
REMOVE	Deletes child when parent is deleted
REFRESH	Refreshes child when parent is refreshed
DETACH	Detaches child when parent is detached
ALL	All of the above


CRUD Operations
Hibernate CRUD operations
Save and Persist
Session session = sessionFactory.openSession();
Transaction tx = session.beginTransaction();

Employee emp = new Employee();
emp.setName("Alice");
emp.setDepartment("Engineering");

session.save(emp);      // Hibernate-specific, returns generated ID
// OR
session.persist(emp);   // JPA standard, returns void

tx.commit();
session.close();
save() returns the generated identifier immediately
persist() is JPA-standard and does not guarantee immediate INSERT
Get and Load
// get() - hits DB immediately, returns null if not found
Employee emp = session.get(Employee.class, 1L);

// load() - returns a proxy, hits DB only when you access fields
// throws ObjectNotFoundException if not found (not null)
Employee emp = session.load(Employee.class, 1L);
Use get() when you are unsure whether the record exists. Use load() only when you are certain the record is there.

Update
// For detached objects
session.update(emp);

// merge() - safer, works for both detached and transient
session.merge(emp);

// Automatic dirty checking - no explicit update needed for persistent objects
Session session = sessionFactory.openSession();
Transaction tx = session.beginTransaction();

Employee emp = session.get(Employee.class, 1L); // persistent
emp.setName("Bob");  // just change the field

tx.commit(); // Hibernate detects the change and fires UPDATE automatically
session.close();
Delete
Session session = sessionFactory.openSession();
Transaction tx = session.beginTransaction();

Employee emp = session.get(Employee.class, 1L);
session.delete(emp); // or session.remove(emp) in JPA

tx.commit();
session.close();
6. HQL and JPQL
Basics of HQL
HQL (Hibernate Query Language) is object-oriented SQL. You write queries against entity class names and field names, not table names and column names. Hibernate translates them to native SQL.

// Basic SELECT
List<Employee> employees = session
    .createQuery("FROM Employee", Employee.class)
    .getResultList();

// WHERE clause
List<Employee> result = session
    .createQuery("FROM Employee WHERE department = :dept", Employee.class)
    .setParameter("dept", "Engineering")
    .getResultList();

// SELECT specific fields
List<String> names = session
    .createQuery("SELECT e.name FROM Employee e", String.class)
    .getResultList();

// JOIN
List<Employee> result = session
    .createQuery("FROM Employee e JOIN FETCH e.department WHERE e.department.name = :deptName", Employee.class)
    .setParameter("deptName", "Engineering")
    .getResultList();
Named Queries
Named queries are defined once (usually on the entity) and reused by name. They are parsed and validated at startup, which catches errors early.

@Entity
@NamedQuery(
    name = "Employee.findByDepartment",
    query = "FROM Employee WHERE department.name = :deptName"
)
public class Employee {
    // ...
}

// Usage
List<Employee> employees = session
    .createNamedQuery("Employee.findByDepartment", Employee.class)
    .setParameter("deptName", "Engineering")
    .getResultList();
Pagination
List<Employee> page = session
    .createQuery("FROM Employee ORDER BY name", Employee.class)
    .setFirstResult(0)   // offset - starts from 0
    .setMaxResults(10)   // page size
    .getResultList();
7. Fetching Strategies
Lazy vs Eager Loading
Fetching strategy decides when related entities are loaded from the database.

Strategy	When data is loaded	Default for
LAZY	Only when you access the field	@OneToMany, @ManyToMany
EAGER	Immediately with the parent	@ManyToOne, @OneToOne
// Lazy - employees not loaded until you call dept.getEmployees()
@OneToMany(mappedBy = "department", fetch = FetchType.LAZY)
private List<Employee> employees;

// Eager - employees always loaded with department
@OneToMany(mappedBy = "department", fetch = FetchType.EAGER)
private List<Employee> employees;
General rule: prefer LAZY loading. Use EAGER only when you always need the related data.

N+1 Problem
The N+1 problem happens when loading N parent entities triggers N additional queries to load their children, resulting in N+1 total queries to the database.

// BAD - triggers N+1
List<Department> departments = session
    .createQuery("FROM Department", Department.class)
    .getResultList();

for (Department dept : departments) {
    dept.getEmployees(); // fires a separate query for EACH department
}
// Result: 1 query for departments + N queries for employees = N+1 queries
Fix: use JOIN FETCH

// GOOD - loads everything in one query
List<Department> departments = session
    .createQuery("FROM Department d JOIN FETCH d.employees", Department.class)
    .getResultList();
N+1 Query Problem vs JOIN FETCH

9. Transactions
Transaction Lifecycle
Every database write operation must happen inside a transaction. Hibernate does not auto-commit by default.

Session session = sessionFactory.openSession();
Transaction tx = null;

try {
    tx = session.beginTransaction();

    // your database operations here
    session.save(employee);

    tx.commit();         // writes changes to DB

} catch (Exception e) {
    if (tx != null) tx.rollback();  // undo everything on error
    e.printStackTrace();
} finally {
    session.close();     // always close the session
}
With Spring's @Transactional:

@Service
public class EmployeeService {

    @Transactional
    public void saveEmployee(Employee emp) {
        employeeRepository.save(emp);
        // Spring manages begin, commit, and rollback automatically
    }
}
ACID Properties
Property	Meaning
Atomicity	All operations succeed or none do
Consistency	Data is always in a valid state before and after
Isolation	Concurrent transactions do not interfere with each other
Durability	Committed data survives system failure
Isolation Levels:

Level	Dirty Read	Non-Repeatable Read	Phantom Read
READ_UNCOMMITTED	possible	possible	possible
READ_COMMITTED	prevented	possible	possible
REPEATABLE_READ	prevented	prevented	possible
SERIALIZABLE	prevented	prevented	prevented
10. Schema Design and Best Practices
Hibernate Entity Relationship 
Normalization vs Denormalization
Normalization - reduce redundancy, split data into related tables. Better for write-heavy systems. Easier to maintain.
Denormalization - combine related data into fewer tables. Better for read-heavy systems. Improves query performance at the cost of redundancy.
Hibernate works better with normalized schemas but can handle denormalized designs too.

Efficient Mapping Strategies
Use @ManyToOne instead of @OneToMany as the owning side where possible
Avoid bidirectional relationships unless you genuinely need to navigate both ways
Use mappedBy correctly - only one side should own the relationship
Prefer List over Set for ordered collections, but Set for unordered to avoid duplicates
// Good practice - explicit column definitions
@Column(name = "created_at", nullable = false, updatable = false)
private LocalDateTime createdAt;

// Good practice - use @Index for frequently queried columns
@Table(name = "employees", indexes = {
    @Index(name = "idx_email", columnList = "email"),
    @Index(name = "idx_department", columnList = "department_id")
})
Performance Considerations
Always close sessions - use try-with-resources or finally blocks
Use pagination for large result sets - never load all rows
Avoid FetchType.EAGER on collections
Use JOIN FETCH only when you need related data in the same query
Enable second-level cache for reference/static data
Use batch inserts for bulk operations
// Batch inserts - configure batch size in properties
// hibernate.jdbc.batch_size=50

for (int i = 0; i < 1000; i++) {
    session.save(new Employee("emp_" + i));
    if (i % 50 == 0) {
        session.flush();  // write batch to DB
        session.clear();  // clear L1 cache to avoid memory issues
    }
}
11. Common Pitfalls
LazyInitializationException
This is one of the most common Hibernate errors. It happens when you try to access a lazily loaded collection or association after the session is already closed.

// BAD - session closes after this method returns
public Department findDepartment(Long id) {
    Session session = sessionFactory.openSession();
    Department dept = session.get(Department.class, id);
    session.close(); // session closed here
    return dept;
}

// Later...
dept.getEmployees().size(); // LazyInitializationException - session is gone
Fixes:

Use JOIN FETCH to load required associations eagerly within the session
Use @Transactional to keep session open until the method returns
Use DTOs to avoid returning entities outside the session boundary
Use Hibernate.initialize(dept.getEmployees()) explicitly before closing session
N+1 Query Issue
Already covered in Section 7. Quick summary:

Root cause: lazy loading inside a loop
Detection: enable show_sql and count your queries
Fix: use JOIN FETCH or @EntityGraph
// @EntityGraph approach (JPA standard)
@EntityGraph(attributePaths = {"employees"})
List<Department> findAll(); // Spring Data JPA method
Improper Session Handling
Never share a Session across threads - it is not thread-safe
Never leave sessions open - causes connection pool exhaustion
Always use transactions for writes - reads may work without them but writes are unreliable without explicit transaction boundaries
// BAD - storing session as a field
public class EmployeeService {
    private Session session = sessionFactory.openSession(); // wrong
}

// GOOD - open and close per operation
public Employee findById(Long id) {
    try (Session session = sessionFactory.openSession()) {
        return session.get(Employee.class, id);
    }
}
12. Hibernate vs JPA
The Difference
JPA (Jakarta Persistence API) is a specification - it defines a standard set of interfaces and annotations for ORM in Java. Hibernate is the most popular implementation of that specification.

Think of JPA as the interface and Hibernate as the class that implements it.

Aspect	JPA	Hibernate
Type	Specification (API)	Implementation
Package	jakarta.persistence.*	org.hibernate.*
Portability	High - works with any JPA provider	Tied to Hibernate
Features	Standard features only	JPA + Hibernate-specific extras
Query language	JPQL	HQL (superset of JPQL)
EntityManager	EntityManager	Session (also implements EntityManager)
Code Comparison
// JPA style (portable, works with EclipseLink too)
EntityManagerFactory emf = Persistence.createEntityManagerFactory("my-pu");
EntityManager em = emf.createEntityManager();
em.getTransaction().begin();
em.persist(employee);
em.getTransaction().commit();
em.close();

// Hibernate native style
SessionFactory sf = new Configuration().configure().buildSessionFactory();
Session session = sf.openSession();
session.beginTransaction();
session.save(employee);
session.getTransaction().commit();
session.close();
When to Use What
Use JPA when you want portability and do not need Hibernate-specific features. Standard choice for enterprise apps.
Use Hibernate-specific APIs when you need features like Hibernate filters, second-level cache fine-tuning, batch processing helpers, or advanced fetch profiles.
In practice: use JPA annotations and EntityManager for all standard operations, and reach for Hibernate-specific APIs only when JPA falls short.
JPA & Hibernate Architecture
Quick Reference Card
Session Methods
Method	Description
session.save(obj)	Persists new entity, returns ID
session.persist(obj)	JPA-standard persist
session.get(Class, id)	Loads by ID, returns null if not found
session.load(Class, id)	Returns proxy, throws if not found
session.update(obj)	Updates detached entity
session.merge(obj)	Merges detached or transient entity
session.delete(obj)	Deletes entity
session.flush()	Syncs session state to DB
session.clear()	Clears first-level cache
session.evict(obj)	Removes specific entity from cache
Common Annotations Summary
Annotation	Purpose
@Entity	Marks class as persistent entity
@Table(name="...")	Maps to specific table
@Id	Primary key field
@GeneratedValue	Auto-generate primary key
@Column	Maps field to column with constraints
@Transient	Field not persisted
@OneToOne	One-to-one relationship
@OneToMany	One-to-many relationship
@ManyToOne	Many-to-one relationship
@ManyToMany	Many-to-many relationship
@JoinColumn	Specifies foreign key column
@JoinTable	Specifies join table for many-to-many
@Cache	Enables second-level caching
@NamedQuery	Defines reusable named HQL query
hbm2ddl.auto Quick Reference
Value	Creates	Drops	Use for
create	Yes	On startup	Development only
create-drop	Yes	On shutdown	Unit testing
update	Alters if needed	Never	Dev / staging
validate	Never	Never	Production (safe)
none	Never	Never	Production (explicit SQL)
Conclusion
Hibernate simplifies database interaction by abstracting complex SQL into clean, object-oriented code, allowing developers to focus on business logic instead of low-level data handling. With features like automatic mapping, caching, and transaction management, and its seamless use with frameworks like Spring Boot, Hibernate remains an essential tool for building scalable and maintainable Java backend applications. If you found this helpful, consider sharing it with your friends and peers.

