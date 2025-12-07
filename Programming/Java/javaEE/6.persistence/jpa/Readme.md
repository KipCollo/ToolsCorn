# Java Persistence API

JPA(Java Persistence API) is an object-relational mapping specification that makes it easier to convert between the business objects and the relational database of an application.Also known as ORM.

JPA offers several features that make it easier to use than JDBC.

1. JPA can automatically create database tables based on relationships between business objects.
2. JPA can automatically convert between objects and rows in a relational database.
3. JPA can automatically perform joins to satisfy relationships between objects.

JPA runs on top of JDBC.As a result, it's compatible with any database that has a JDBC driver.

There are several implementations of JPA.All of them follow the JPA specification.Full Java EE servers typically provide their own implementation of JPA.`Glassfish` uses `TopLink`, and `WildFly` uses `Hibernate`.When you use `Tomcat` you can choose the JPA implementation.Other implementation is `EcipseLink`.

## Entity

An entity is a lightweight persistence domain object.Entities support inheritance, polymorphic associations, and polymorphic queries.
Typically an entity represents a table in a relational database, and each entity instance corresponds to a row in that table. The primary programming artifact of an entity is the entity class, although entities can use helper classes or that are used to represent the state of the entity.

When working with JPA, business objects are known as entities and are managed by an entity manager.In a full Java EE server such as Glassfish,the server provides a built-in entity manager that includes advanced features such as automatic transaction rollback.


- **Entity Class**:- The entity class must be annotated with the Entity annotation or declared as an entity in the XML descriptor.
    1. The entity class must be a top-level class or a static inner class. An enum, record, or interface may not be designated as an entity.
    2. The entity class must have a public or protected constructor with no parameters, which is called by the persistence provider runtime to instantiate the entity.The entity class may have additional constructors for use by the application.
    3. The entity class must be non-final. Every method and persistent instance variable of the entity class must be non-final.

An entity might be an abstract class, or it might be a concrete class. An entity may extend a non-entity class, or it may extend another entity class. A non-entity class may extend an entity class.

The persistent state of an entity is represented by instance variables, which may correspond to JavaBeans properties.
An instance variable may be directly accessed only within the methods of the entity, by the entity instance itself. An instance variable of an entity must not be directly accessed by a client of the entity. The state of the entity is available to clients only through the methods of the entity—that is, via accessor (getter/setter) methods, or via other business methods.

To turn a normal business class into an entity, you code annotations in the class.These annotations specify how the class should be stored in a database,and they specify how one class relates to another.Because these classes are just plain old java objects(POJOs) with annotations,you can still use these classes without JPA.In that case, the annotations are ignored.

The persistent state of an entity is represented either through persistent fields or persistent properties. These fields or properties use object/relational mapping annotations to map the entities and entity relationships to the relational data in the underlying data store.

- An entity class must follow these requirements:
  1. The class must be annotated with the javax.persistence.Entity annotation.
  2. The class must have a public or protected, no-argument constructor. The class may have other constructors.
  3. The class must not be declared final. No methods or persistent instance variables must be declared final.
  4. If an entity instance be passed by value as a detached object, such as through a session bean’s remote business interface, the class must implement the Serializable interface.
  5. Entities may extend both entity and non-entity classes, and non-entity classes may extend entity classes.
  6. Persistent instance variables must be declared private, protected, or package-private, and can only be accessed directly by the entity class’s methods. Clients must access the entity’s state through accessor or business methods.

- **Persistent Fields and Properties in Entity Classes**:- The persistent state of an entity is accessed by the persistence provider runtime via either:
    1. property access using JavaBeans-style property accessors.
    2. field access, that is, direct access to instance variables.

The instance variables of a class must have private, protected, or package visibility, independent of whether field access or property access is used. When property access is used, the property accessor methods must be public or protected.

The type of a persistent field or property of an entity class may be:

- any basic type listed below including any Java enum type.
- an entity type or a collection of some entity type.
- an embeddable class.
- a collection of a basic type or embeddable type.

- The fields or properties must be of the following Java language types:
  1. Java primitive types
  2. java.lang.String
  3. Wrappers of Java primitive types
  4. java.math.BigInteger
  5. java.math.BigDecimal
  6. java.util.Date
  7. java.util.Calendar
  8. java.sql.Date
  9. java.sql.Time
  10. java.sql.TimeStamp
  11. User-defined serializable types
  12. byte[]
  13. Byte[]
  14. char[]
  15. Character[]
  16. Enumerated types
  17. Other entities and/or collections of entities
  18. Embeddable classes
  19. Collection of bsic type or embaeddable type.

Object/relational mapping metadata may be specified to customize the object/relational mapping and the loading and storing of the entity state and relationships
- The placement of object/relational mapping annotations depends on whether property access or field access is used:
    1. When field access is used, mapping annotations must be placed on instance variables, and the persistence provider runtime accesses instance variables directly. Every non-transient instance variable not annotated with the Transient annotation is persistent.
    2. When property-based access is used, mapping annotations must be placed on getter methods , and the persistence provider runtime accesses persistent state via the property accessor methods. Every property not annotated with the Transient annotation is persistent.
Mapping annotations must not be applied to fields or properties marked transient or Transient, since those fields and properties are not persistent.

Collection-valued persistent fields and properties must use the supported Java collection interfaces regardless of whether the entity uses persistent fields or properties. The following collection interfaces may be used:- java.util.Collection,java.util.Set,java.util.List,java.util.Map.
Use of the generic variants of these collection types is strongly encouraged, for example, Set<Order> is preferred to the raw type Set.

A collection implementation type such as HashSet or ArrayList may be used by the application to initialize a collection-valued field or property before the entity is made persistent. Once the entity becomes managed (or detached),subsequent access to the collection must be through the interface type

`Persistent Attribute Type`:- The enumeration jakarta.persistence.metamodel.Attribute.PersistentAttributeType defines a classification of persistent entity attributes: BASIC for basic attributes, EMBEDDED for embedded attributes, ELEMENT_COLLECTION for element collections,and MANY_TO_ONE, ONE_TO_ONE, ONE_TO_MANY, and MANY_TO_MANY for associations of the indicated multiplicity. Each persistent attribute of an entity belongs to exactly one of the listed types.
It is an error for an attribute of an entity to be annotated with mapping annotations indicating conflicting persistent attribute types. For example, an field may not be annotated @Basic @Embedded, @ManyToOne @ElementCollection, or @OneToOne @ManyToMany. The persistence provider must detect such contradictory combinations of mapping annotations and report the error


Entities may either use persistent fields or persistent properties. If the mapping annotations are applied to the entity’s instance variables, the entity uses persistent fields. If the mapping annotations are applied to the entity’s getter methods for JavaBeans-style properties, the entity uses persistent properties. You cannot apply mapping annotations to both fields and properties in a single entity.

Object/relational mapping metadata may be specified to customize the object/relational mapping and the loading and storing of the entity state and relationships.

- `Persistent Fields`:- If the entity class uses persistent fields, the Persistence runtime accesses entity class instance variables directly. All fields not annotated javax.persistence.Transient or not marked as Java transient will be persisted to the data store. The object/relational mapping annotations must be applied to the instance variables.
Persistent Properties

If the entity uses persistent properties, the entity must follow the method conventions of JavaBeans components. JavaBeans-style properties use getter and setter methods that are typically named after the entity class’s instance variable names. For every persistent property property of type Type of the entity, there is a getter method getProperty and setter method setProperty. If the property is a boolean, you may use isProperty instead of getProperty. For example, if a Customer entity uses persistent properties, and has a private instance variable called firstName, the class defines a getFirstName and setFirstName method for retrieving and setting the state of the firstName instance variable.

The method signature for single-valued persistent properties are as follows:

Type getProperty()
void setProperty(Type type)


**Primary Keys and Entity Identity**:- Each entity has a unique object identifier. A customer entity, for example, might be identified by a customer number. The unique identifier, or primary key, enables clients to locate a particular entity instance.
Every entity must have a primary key. An entity may have either a simple or a composite primary key.The value of its primary key uniquely identifies an entity instance within a persistence context and to operations of the EntityManager.

The primary key must be declared by:
1. The entity class that is the root of the entity hierarchy, or
2. A mapped superclass that is a (direct or indirect) superclass of all entity classes in the entity hierarchy.

A primary key must be defined exactly once in each entity hierarchy.

1. A primary key comprises one or more fields or properties of the entity class.
2. A simple `primary key` is a single persistent field or property of the entity class whose type is one of the legal simple primary key types listed below. The Id annotation or id XML element must be used to identify the simple primary key.
3. A `composite primary key` must correspond to either a single persistent field or property, or to a set of fields or properties.A primary key class must be defined to represent the composite primary key.Composite primary keys must be defined in a primary key class. Composite primary keys are denoted using the javax.persistence.EmbeddedId and javax.persistence.IdClass annotations.
    - If the composite primary key corresponds to a single field or property of the entity, the EmbeddedId annotation identifies the primary key, and the type of the annotated field or property is the primary key class.
    - Otherwise, when the composite primary key corresponds to multiple fields or properties, the Id annotation identifies the fields and properties which comprise the composite key, and the IdClass annotation must specify the primary key class.Simple primary keys use the javax.persistence.Id annotation to denote the primary key property or field.

The primary key, or the property or field of a composite primary key, must be one of the following Java language types:
- Java primitive types
- Java primitive wrapper types
- java.lang.String
- java.util.UUID
- java.util.Date (the temporal type should be DATE)
- java.time.LocalDate
- java.sql.Date

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

The following primary key class is a composite key, the orderId and itemId fields together uniquely identify an entity.

```java
public final class LineItemKey implements Serializable {
    public Integer orderId;
    public int itemId;

    public LineItemKey() {}

    public LineItemKey(Integer orderId, int itemId) {
        this.orderId = orderId;
        this.itemId = itemId;
    }

    public boolean equals(Object otherOb) {
        if (this == otherOb) {
            return true;
        }
        if (!(otherOb instanceof LineItemKey)) {
            return false;
        }
        LineItemKey other = (LineItemKey) otherOb;
        return (
                    (orderId==null?other.orderId==null:orderId.equals
                    (other.orderId)
                    )
                    &&
                    (itemId == other.itemId)
                );
    }

    public int hashCode() {
        return (
                    (orderId==null?0:orderId.hashCode())
                    ^
                    ((int) itemId)
                );
    }

    public String toString() {
        return "" + orderId + "-" + itemId;
    }
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


**Entity Relationships**:- Relationships among entities may be one-to-one, one-to-many, many-to-one, or many-to-many. Relationships are polymorphic.
If there is an association between two entities, one of the following relationship modeling annotations must be applied  to the corresponding persistent property or field of the referencing entity: OneToOne, OneToMany, ManyToOne, ManyToMany. For associations that do not specify the target type (e.g., where Java generic types are not used for collections), it is necessary to specify the entity that is the target of the relationship.
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

`CascadeType`:- Defines the set of cascadable operations that are propagated to the associated entity. The value cascade=ALL is equivalent to cascade={PERSIST, MERGE, REMOVE, REFRESH, DETACH}.

Cascade delete relationships are specified using the cascade=REMOVE element specification for @OneToOne and @OneToMany relationships. For example:

@OneToMany(cascade=REMOVE, mappedBy="customer")
public Set<Order> getOrders() { return orders; }


**Inheritance**:- Entities support class inheritance, polymorphic associations, and polymorphic queries. They can extend non-entity classes, and non-entity classes can extend entity classes. Entity classes can be both abstract and concrete.
Both abstract and concrete classes can be annotated with the Entity annotation, mapped as entities, and queried for as entities.

`Abstract Entities classes`:- An abstract class may be declared an entity by decorating the class with @Entity. Abstract entities differ from concrete entities only in that they cannot be instantiated.
Abstract entities can be queried just like concrete queries. If an abstract entity is the target of a query, the query operates on all the concrete subclasses of the abstract entity.

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

`Mapped Superclasses`:- Entities may inherit from superclasses that contain persistent state and mapping information, but are not entities. That is, the superclass is not decorated with the @Entity annotation, and is not mapped as an entity by the Java Persistence provider. These superclasses are most often used when you have state and mapping information common to multiple entity classes.
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


`Entity Inheritance Mapping Strategies`:- The mapping of class hierarchies is specified through metadata.
You can configure how the Java Persistence provider maps inherited entities to the underlying datastore by decorating the root class of the hierarchy with the javax.persistence.Inheritance annotation. There are three mapping strategies that are used to map the entity data to the underlying database:

There are three basic strategies that are used when mapping a class or class hierarchy to a relational database:
1. a single table per class hierarchy
2. a joined subclass strategy, in which fields that are specific to a subclass are mapped to a separate table than the fields that are common to the parent class, and a join is performed to instantiate the subclass.
3. a table per concrete entity class

An implementation is required to support the single table per class hierarchy inheritance mapping strategy and the joined subclass strategy.


The strategy is configured by setting the strategy element of @Inheritance to one of the options defined in the javax.persistence.InheritanceType enumerated type:

public enum InheritanceType {
    SINGLE_TABLE,
    JOINED,
    TABLE_PER_CLASS
};

The default strategy is InheritanceType.SINGLE_TABLE, and is used if the @Inheritance annotation is not specified on the root class of the entity hierarchy.
The Single Table per Class Hierarchy Strategy

With this strategy, which corresponds to the default InheritanceType.SINGLE_TABLE, all classes in the hierarchy are mapped to a single table in the database. This table has a discriminator column, a column that contains a value that identifies the subclass to which the instance represented by the row belongs.

The discriminator column can be specified by using the javax.persistence.DiscriminatorColumn annotation on the root of the entity class hierarchy.

Table 24-1 @DiscriminatorColumn Elements

Type
	

Name
	

Description

String
	

name
	

The name of the column in the table to be used as the discriminator column. The default is DTYPE. This element is optional.

DiscriminatorType
	

discriminatorType
	

The type of the column to be used as a discriminator column. The default is DiscriminatorType.STRING. This element is optional.

String
	

columnDefinition
	

The SQL fragment to use when creating the discriminator column. The default is generated by the Persistence provider, and is implementation-specific. This element is optional.

String
	

length
	

The column length for String-based discriminator types. This element is ignored for non-String discriminator types. The default is 31. This element is optional.

The javax.persistence.DiscriminatorType enumerated type is used to set the type of the discriminator column in the database by setting the discriminatorType element of @DiscriminatorColumn to one of the defined types. DiscriminatorType is defined as:

public enum DiscriminatorType {
    STRING,
    CHAR,
    INTEGER
};

If @DiscriminatorColumn is not specified on the root of the entity hierarchy and a discriminator column is required, the Persistence provider assumes a default column name of DTYPE, and column type of DiscriminatorType.STRING.

The javax.persistence.DiscriminatorValue annotation may be used to set the value entered into the discriminator column for each entity in a class hierarchy. You may only decorate concrete entity classes with @DiscriminatorValue.

If @DiscriminatorValue is not specified on an entity in a class hierarchy that uses a discriminator column, the Persistence provider will provide a default, implementation-specific value. If the discriminatorType element of @DiscriminatorColumn is DiscriminatorType.STRING, the default value is the name of the entity.

This strategy provides good support for polymorphic relationships between entities and queries that cover the entire entity class hierarchy. However, it requires the columns that contain the state of subclasses to be nullable.
The Table per Concrete Class Strategy

In this strategy, which corresponds to InheritanceType.TABLE_PER_CLASS, each concrete class is mapped to a separate table in the database. All fields or properties in the class, including inherited fields or properties, are mapped to columns in the class’s table in the database.

This strategy provides poor support for polymorphic relationships, and usually requires either SQL UNION queries or separate SQL queries for each subclass for queries that cover the entire entity class hierarchy.

Support for this strategy is optional, and may not be supported by all Java Persistence API providers. The default Java Persistence API provider in the Application Server does not support this strategy.
The Joined Subclass Strategy

In this strategy, which corresponds to InheritanceType.JOINED, the root of the class hierarchy is represented by a single table, and each subclass has a separate table that only contains those fields specific to that subclass. That is, the subclass table does not contain columns for inherited fields or properties. The subclass table also has a column or columns that represent its primary key, which is a foreign key to the primary key of the superclass table.

This strategy provides good support for polymorphic relationships, but requires one or more join operations to be performed when instantiating entity subclasses. This may result in poor performance for extensive class hierarchies. Similarly, queries that cover the entire class hierarchy require join operations between the subclass tables, resulting in decreased performance.

Some Java Persistence API providers, including the default provider in the Application Server, require a discriminator column in the table that corresponds to the root entity when using the joined subclass strategy. If you are not using automatic table creation in your application, make sure the database table is set up correctly for the discriminator column defaults, or use the @DiscriminatorColumn annotation to match your database schema. For information on discriminator columns, see The Single Table per Class Hierarchy Strategy.


## Managing Entities

Entities are managed by the entity manager, which is represented by javax.persistence.EntityManager instances. Each EntityManager instance is associated with a persistence context: a set of managed entity instances that exist in a particular data store.

A persistence context is a set of entity instances in which for any given persistent entity identity there is a unique entity instance. Within the persistence context, the entity instances and their lifecycle are managed i.e defines the scope under which particular entity instances are created, persisted, and removed. 

The EntityManager interface defines the methods that are used to interact with the persistence context.The EntityManager API is used to create and remove persistent entity instances, to find persistent entities by primary key, and to query over persistent entity types.

The EntityManager acts as a factory for instances of Query, which are used to control query execution. Query, TypedQuery, StoredProcedureQuery, and related interfaces.
The set of entities that can be managed by a given EntityManager instance is defined by a persistence unit. A persistence unit defines the set of all classes that are related or grouped by the application, and which must be colocated in their mapping to a single database.

Each EntityManager belongs to an EntityManagerFactory with an associated persistence unit.Entities belonging to the same persistence unit may participate in associations. An EntityManager may only manage instances of entities belonging to its persistence unit.Jakarta Persistence features several mechanisms allowing user-written code to react to events occurring within the persistence context.


The **EntityManager interface** defines the methods used to interact with its persistence context. The EntityManager API is used to create and remove persistent entity instances, to find persistent entities by primary key, and to query over persistent entity types.
The EntityManager API creates and removes persistent entity instances, finds entities by the entity’s primary key, and allows queries to be run on entities.

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

**Operations on the persistence context**:- Managing an Entity Instance’s Life Cycle:- You manage entity instances by invoking operations on the entity by means of an EntityManager instance. Entity instances are in one of four states: new, managed, detached, or removed.

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

- Persisting Entity Instances:- New entity instances become managed and persistent either by invoking the persist method, or by a cascading persist operation invoked from related entities that have the cascade=PERSIST or cascade=ALL elements set in the relationship annotation. This means the entity’s data is stored to the database when the transaction associated with the persist operation is completed. If the entity is already managed, the persist operation is ignored, although the persist operation will cascade to related entities that have the cascade element set to PERSIST or ALL in the relationship annotation. If persist is called on a removed entity instance, it becomes managed. If the entity is detached, persist will throw an IllegalArgumentException, or the transaction commit will fail.

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

- Removing Entity Instances:- Managed entity instances are removed by invoking the remove method, or by a cascading remove operation invoked from related entities that have the cascade=REMOVE or cascade=ALL elements set in the relationship annotation. If the remove method is invoked on a new entity, the remove operation is ignored, although remove will cascade to related entities that have the cascade element set to REMOVE or ALL in the relationship annotation. If remove is invoked on a detached entity it will throw an IllegalArgumentException, or the transaction commit will fail. If remove is invoked on an already removed entity, it will be ignored. The entity’s data will be removed from the data store when the transaction is completed, or as a result of the flush operation.

```java
public void removeOrder(Integer orderId) {
    try {
        Order order = em.find(Order.class, orderId);
        em.remove(order);
    }...
}
```

In this example, all LineItem entities associated with the order are also removed, as Order.getLineItems has cascade=ALL set in the relationship annotation.

- Synchronizing Entity Data to the Database:- The state of persistent entities is synchronized to the database when the transaction with which the entity is associated commits. If a managed entity is in a bidirectional relationship with another managed entity, the data will be persisted based on the owning side of the relationship.
To force synchronization of the managed entity to the data store, invoke the flush method of the entity. If the entity is related to another entity, and the relationship annotation has the cascade element set to PERSIST or ALL, the related entity’s data will be synchronized with the data store when flush is called.
If the entity is removed, calling flush will remove the entity data from the data store.




**Query APIs**:- The Query and TypedQuery APIs are used for the execution of both static queries and dynamic queries. These APIs also support parameter binding and pagination control. The StoredProcedureQuery API is used for the execution of queries that invoke stored procedures defined in the database.





**Querying Entities**:- The Java Persistence API provides the following methods for querying entities.

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

**Query APIs**:- The `Query` and `TypedQuery` APIs are used for the execution of both static queries and dynamic queries. These APIs also support parameter binding and pagination control. The `StoredProcedureQuery` API is used for the execution of queries that invoke stored procedures defined in the database.


`Queries and Flush Mode`:-

**Entity Listeners and Callback Methods**:- A method may be designated as a lifecycle callback method to receive notification of entity lifecycle events. A lifecycle
callback method can be defined on an entity class, a mapped superclass, or an entity listener class associated with an entity or mapped superclass. An entity listener class is a class whose methods are invoked in response to lifecycle events on an entity. Any number of entity listener classes can be defined for an entity class or mapped superclass.

Default entity listeners — entity listener classes whose callback methods apply to all entities in the persistence unit —can be specified by means of the XML descriptor.

Lifecycle callback methods and entity listener classes are defined by means of metadata annotations or the XML descriptor. When annotations are used, one or more entity listener classes are denoted using the EntityListeners annotation on the entity class or mapped superclass. If multiple entity listeners are defined, the order in which they are invoked is determined by the order in which they are specified in the EntityListeners annotation. The XML descriptor may be used as an alternative to specify the invocation order of entity listeners or to override the order specified in metadata annotations.

Any subset or combination of annotations may be specified on an entity class, mapped superclass, or listener class. A single class must not have more than one lifecycle callback method for the same lifecycle event. The same method may be used for multiple callback events.

Multiple entity classes and mapped superclasses in an inheritance hierarchy may define listener classes and/or lifecycle callback methods directly on the class.

`@EntityListeners`:- Specifies the callback listener classes to be used for an entity or mapped superclass. This annotation may be applied to an entity class or mapped superclass.
    Class[] value() - The callback listener classes.


## Query Language

The Jakarta Persistence query language is a string-based query language used to define queries over entities and their persistent state. It enables the application developer to specify the semantics of queries in a portable way, independent of the particular database schema in use in an enterprise environment. The full range of the language may be used in both static and dynamic queries.

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

## Metamodel API

This specification provides a set of interfaces for dynamically accessing a metamodel representing the managed classes of a persistence unit. Instances of metamodel types may be obtained either:
1. via programmatic lookup using an instance of the interface Metamodel obtained from the EntityManagerFactory or EntityManager by calling getMetamodel().
2. in a typesafe way, using static metamodel classes.

A static metamodel class is a class with static members providing direct typesafe access to metamodel objects representing the persistent members of a given managed class.


## Critea API

The Jakarta Persistence Criteria API is used to define queries through the construction of object-based query definition objects, rather than use of the string-based approach of the Jakarta Persistence query language.

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

## Entity Managers and Persistence Contexts

**Persistence Contexts** - A persistence context is a set of managed entity instances in which for any persistent entity identity there is a unique entity instance. Within the persistence context, the entity instances and their lifecycle are managed by the entity manager.

In Jakarta EE environments, a JTA transaction typically involves calls across multiple components. Such components may often need to access the same persistence context within a single transaction. To facilitate such use of entity managers in Jakarta EE environments, when an entity manager is injected into a component or looked up directly in the JNDI naming context, its persistence context will automatically be propagated with the current JTA transaction, and the EntityManager references that are mapped to the same persistence unit will provide access to this same persistence context within the JTA transaction. This propagation of persistence contexts by the Jakarta EE container avoids the need for the application to pass references to EntityManager instances from one component to another. An entity manager for which the container manages the persistence context in this manner is termed a container-managed entity manager. A container-managed entity manager’s lifecycle is managed by the Jakarta EE container.

In less common use cases within Jakarta EE environments, applications may need to access a persistence context that is “stand-alone”—i.e. not propagated along with the JTA transaction across the EntityManager references for the given persistence unit. Instead, each instance of creating an entity manager causes a new isolated persistence context to be created that is not accessible through other EntityManager references within the same transaction. These use cases are supported through the createEntityManager methods of the EntityManagerFactory interface. An entity manager that is used by the application to create and destroy a persistence context in this manner is termed an application-managed entity manager. An application-managed entity manager’s lifecycle is managed by the application.

Both container-managed entity managers and application-managed entity managers and their persistence contexts are required to be supported in Jakarta EE web containers and EJB containers. Within an EJB environment, container-managed entity managers are typically used.

In Java SE environments and in Jakarta EE application client containers, only application-managed entity managers are required to be


**Obtaining an EntityManager**:- The entity manager for a persistence context is obtained from an entity manager factory.
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

## Entity Packaging

A persistence unit is a logical grouping that includes:
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

**persistence.xml file**:- A persistence.xml file defines a persistence unit. The persistence.xml file is located in the META-INF directory of the root of the persistence unit. It may be used to specify:
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

**Persistence Units**:- A persistence unit defines a set of all entity classes that are managed by EntityManager instances in an application. This set of entity classes represents the data contained within a single data store.
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

**Annotated Classes in the Root of the Persistence Unit**:- By default, in the Java EE environment, the root of the persistence unit is searched for annotated managed persistence classes—classes with an Entity, Embeddable, MappedSuperclass, or Converter annotation—and mapping metadata annotations found on these classes are processed. Where mapping annotations are missing, the classes are mapped using mapping annotation defaults.

This behavior is disabled if the exclude-unlisted-classes of the persistence.xml file is specified as true. In this case, an annotated persistence class located in the root of the persistence unit is not included in the persistence unit unless it is explicitly listed in a class element of the persistence.xml file or in a mapping file.
In the Java SE environment, this behavior is not required. Portable Java SE applications should explicitly list each persistence class in a class element of the persistence.xml file or in a mapping file. The exclude-unlisted-classes element is not intended for use in Java SE environments.




## Container and Provider Contracts for Deployment & Bootstrapping




## Metadata Annotations

These annotations and types are in the package jakarta.persistence.

- **Entity**:-The Entity annotation specifies that the class is an entity. This annotation is applied to the entity class.
`@Entity`:- Specifies that the class is an entity. This annotation is applied to the entity class.
    - name - (Optional) The entity name. Defaults to the unqualified name of the entity class. This name is used to refer to the entity in queries(context). The name must not be a reserved literal in the Jakarta Persistence query language.

- **Callback Annotations**:-

`@Transient`:- Specifies that the property or field is not persistent. It is used to annotate a property or field of an entity class, mapped superclass, or embeddable class.


- `@Table`:- Specifies the primary table for the annotated entity. Additional tables may be specified using SecondaryTable or SecondaryTables annotation.If no Table annotation is specified for an entity class, the default values apply.
    1. name - (Optional) The name of the table.Defaults to the entity name.
    2. catalog - (Optional) The catalog of the table.Defaults to the default catalog.
    3. schema - (Optional) The schema of the table.Defaults to the default schema for user.
    4. uniqueConstraints - (Optional) Unique constraints that are to be placed on the table. These are only used if table generation is in effect. These constraints apply in addition to any constraints specified by the Column and JoinColumn annotations and constraints entailed by primary key mappings.Defaults to no additional constraints.
    5. indexes - (Optional) Indexes for the table. These are only used if table generation is in effect. Note that it is not necessary to specify an index for a primary key, as the primary key index will be created automatically.


## Metadata for ORM

The object/relational mapping metadata is part of the application domain model contract. It expresses requirements and expectations on the part of the application as to the mapping of the entities and relationships of the application domain to a database. Queries (and, in particular, SQL queries) written against the database schema that corresponds to the application domain model are dependent upon the mappings expressed by means of the object/relational mapping metadata. The implementation of this specification must assume this application dependency upon the object/relational mapping metadata and insure that the semantics and requirements expressed by that mapping are observed.
The use of object/relational mapping metadata to control schema generation.


**Annotations for Object/Relational Mapping**:- These annotations and types are in the package jakarta.persistence.
XML metadata may be used as an alternative to these annotations, or to override or augment annotations.

- `Access Annotation`:- The Access annotation is used to specify an access type to be applied to an entity class, mapped superclass, or embeddable class, or to a specific attribute of such a class.
 - AccessType - value(Required) - The access type to be applied to the class or attribute


- `@Basic`:- The simplest type of mapping to a database column. The Basic annotation can be applied to a persistent property or instance variable of any of the following types: Java primitive types, wrappers of the primitive types, String, java. math. BigInteger, java. math. BigDecimal, java. util. Date, java. util. Calendar, java. sql. Date, java. sql. Time, java. sql. Timestamp, byte[], Byte[], char[], Character[], enums, and any other type that implements java. io. Serializable.
The use of the Basic annotation is optional for persistent fields and properties of these types. If the Basic annotation is not specified for such a field or property, the default values of the Basic annotation will apply.
- fetch() - (Optional) Defines whether the value of the field or property should be lazily loaded or must be eagerly fetched. The EAGER strategy is a requirement on the persistence provider runtime that the value must be eagerly fetched. The LAZY strategy is a hint to the persistence provider runtime. If not specified, defaults to EAGER.


- `@Column`:- Specifies the mapped column for a persistent property or field. If no Column annotation is specified, the default values apply.Can be annotated at field or method.The parameters can include:-
    1. name - (Optional) The name of the column. Defaults to the property or field name.
    2. unique - (Optional) Whether the column is a unique key. This is a shortcut for the UniqueConstraint annotation at the table level and is useful for when the unique key constraint corresponds to only a single column. This constraint applies in addition to any constraint entailed by primary key mapping and to constraints specified at the table level.
    3. nullable - (Optional) Whether the database column is nullable.
    4. insertable - (Optional) Whether the column is included in SQL INSERT statements generated by the persistence provider.
    5. updatable - (Optional) Whether the column is included in SQL UPDATE statements generated by the persistence provider.
    6. columnDefinition - (Optional) The SQL fragment that is used when generating the DDL for the column.Defaults to the generated SQL to create a column of the inferred type.
    7. table - (Optional) The name of the table that contains the column. If absent the column is assumed to be in the primary table.
    8. length - (Optional) The column length. (Applies only if a string-valued column is used.)


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


- `@GeneratedValue`:- Provides for the specification of generation strategies for the values of primary keys.The GeneratedValue annotation may be applied to a primary key property or field of an entity or mapped superclass in conjunction with the Id annotation. The use of the GeneratedValue annotation is only required to be supported for simple primary keys. Use of the GeneratedValue annotation is not supported for derived primary keys.
    1. GenerationType strategy() default AUTO - (Optional) The primary key generation strategy that the persistence provider must use to generate the annotated entity primary key.
    2. String generator() default ""; - (Optional) The name of the primary key generator to use as specified in the SequenceGenerator or TableGenerator annotation.Defaults to the id generator supplied by persistence provider
`GenerationType `:- Defines the types of primary key generation strategies.
    1. TABLE - Indicates that the persistence provider must assign primary keys for the entity using an underlying database table to ensure uniqueness.
    2. SEQUENCE - Indicates that the persistence provider must assign primary keys for the entity using a database sequence.
    3. IDENTITY - Indicates that the persistence provider must assign primary keys for the entity using a database identity column.
    4. UUID - Indicates that the persistence provider must assign primary keys for the entity by generating an RFC 4122 Universally Unique IDentifier.
    5. AUTO - Indicates that the persistence provider should pick an appropriate strategy for the particular database. The AUTO generation strategy may expect a database resource to exist, or it may attempt to create one. A vendor may provide documentation on how to create such resources in the event that it does not support schema generation or cannot create the schema resource at runtime.
Generation strategy of key:-
1. GenerationType.AUTO -  Default generation type and lets the persistence provider choose the generation strategy.If you use Hibernate as persistence provider,it selects a generation strategy based on database-specific dialect.Most popular database uses GenerationType.SEQUENCE
2. GenerationType.IDENTITY - It relies on auto-incremented database column and lets database generate new value with each insert operation.Not good for JDBC batch operations.
3. GenerationType.SEQUENCE - Is used to generate primary key values and uses a database sequence to generate unique values.It requires additional select statements to get next value from a database sequence,but this has no performance impact on most applications.
  The @SequenceGenerator lets you define the name of generator and schema of db sequence and allocation size.
4. GenerationType.TABLE - Rarely used nowadays


- `@Id`:- Specifies the primary key of an entity. The field or property to which the Id annotation is applied should be one of the following types: any Java primitive type; any primitive wrapper type; String; java. util. Date; java. sql. Date; java. math. BigDecimal; java. math. BigInteger.
The mapped column for the primary key of the entity is assumed to be the primary key of the primary table. If no Column annotation is specified, the primary key column name is assumed to be the name of the primary key property or field.
Always use Wrapper classes over primitive type coz primitive has a default value while wrapper is null.

```java
@GeneratedValue(strategy = GenerationType.SEQUENCE,generator ="product_generator")
@SequenceGenerator(name ="product_generator",sequenceName="product_sequence_name",allocationSize=1)

@GeneratedValue(strategy = GenerationType.TABLE,generator ="product_id_generator")
@TableGenerator(name ="product_id_generator",table="product__name",allocationSize=1,pkColumnName="id_name",valueColumnName="id_value")
```

Example:-

```java
@Entity
@Table(name= "products", schema = "ecommerce", uniqueConstraints={@UniqueConstraint=(name="cln_unique",columnNames="email"),@UniqueConstraint=(name="cln_unique",columnNames="pass")})
public class Product{

   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private int id;
   private String email
   @Column(name="pass", nullable = false)
   private String password
}
```


`@Blob`:- Specifies that a persistent property or field should be persisted as a large object to a database-supported large object type.
Portable applications should use the Lob annotation when mapping to a database Lob type. The Lob annotation may be used in conjunction with the Basic annotation or the ElementCollection annotation when the element collection value is of basic type. A Lob may be either a binary or character type.

```java
@Lob @Basic(fetch=LAZY)
@Column(name="REPORT")
protected String report;
```

```java
@Lob @Basic(fetch=LAZY)
@Column(name="EMP_PIC", columnDefinition="BLOB NOT NULL")
protected byte[] pic;
```

- `@JoinColumn Annotation`:- The JoinColumn annotation is used to specify a column for joining an entity association or element collection.
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


- `@OneToOne`:- Specifies a single-valued association to another entity that has one-to-one multiplicity. It is not normally necessary to specify the associated target entity explicitly since it can usually be inferred from the type of the object being referenced. If the relationship is bidirectional, the non-owning side must use the mappedBy element of the OneToOne annotation to specify the relationship field or property of the owning side.
    1. mappedBy - (Optional) The field that owns the relationship. This element is only specified on the inverse (non-owning) side of the association.
    2. cascade - (Optional) The operations that must be cascaded to the target of the association.By default no operations are cascaded.
    3. fetch - (Optional) Whether the association should be lazily loaded or must be eagerly fetched. The EAGER strategy is a requirement on the persistence provider runtime that the associated entity must be eagerly fetched. The LAZY strategy is a hint to the persistence provider runtime.
    4. orphanRemoval - (Optional) Whether to apply the remove operation to entities that have been removed from the relationship and to cascade the remove operation to those entities.
The OneToOne annotation may be used within an embeddable class to specify a relationship from the embeddable class to an entity class. If the relationship is bidirectional and the entity containing the embeddable class is on the owning side of the relationship, the non-owning side must use the mappedBy element of the OneToOne annotation to specify the relationship field or property of the embeddable class. The dot (".") notation syntax must be used in the mappedBy element to indicate the relationship attribute within the embedded attribute. The value of each identifier used with the dot notation is the name of the respective embedded field or property.
 
```java
// On Customer class:
@OneToOne(optional=false)
@JoinColumn(name="CUSTREC_ID", unique=true, nullable=false, updatable=false)
public CustomerRecord getCustomerRecord() { return customerRecord; }
 
// On CustomerRecord class:
 @OneToOne(optional=false, mappedBy="customerRecord")
public Customer getCustomer() { return customer; }
```


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


**Object/Relational Metadata Used in Schema Generation**:-


## XML ORM Descriptor

The XML object/relational mapping descriptor serves as both an alternative to and an overriding mechanism for Java language metadata annotations.




In modern applications, it's a best practice to use JPA annotations rather than Hibernate-specific annotations because:

1. Portability: JPA annotations are part of the Java EE specification and are therefore standardized. By using JPA, your code can run with any JPA-compliant provider (e.g., Hibernate, EclipseLink, or OpenJPA). If you use Hibernate-specific annotations, your code becomes tightly coupled to Hibernate, making it harder to switch to another ORM provider if needed.
2. Abstraction: JPA provides a level of abstraction over the underlying ORM implementation. When you use JPA annotations, your code is less dependent on the specific ORM framework you're using (in this case, Hibernate). The goal is to write portable, standard code that follows JPA rules, while Hibernate simply implements these rules behind the scenes.

Spring's Choice: In a Spring application, especially with Spring Data JPA, you typically don't need to worry about the underlying ORM provider (like Hibernate) because Spring abstracts that away. You only need to use the JPA annotations, and Spring Data will use the configured JPA provider (which can be Hibernate by default) to handle the actual database interactions.
