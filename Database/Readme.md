# Database

A `database` is a collection of data organized in some format so that the data can be easily accessed, managed and updated.A database is a set of related data organised in rows and columns in a book or computer.


`Database management system (DBMS)`, the software that interacts with end users, applications, and the database itself to capture and analyze the data.The DBMS additionally encompasses the core facilities provided to administer the database.
A DBMS is the software system that allows users to define, create and maintain a database and provides controlled access to the data. It is basically a collection of programs that enables users to store, modify, and extract information from a database as per the requirements. The DBMS is an intermediate layer between programs and the data. Programs access the DBMS, which then accesses the data.
Clients (Services or applications) interact with databases through queries (remote or otherwise) to Create, Retrieve, Update and Delete (CRUD) data within a database. This process is facilitated through a Database Management System (DBMS). Additionally, a DBMS also provides tools for maintenance such as running security checks, ensuring data integrity, backup and recovery.

Existing DBMSs provide various functions that allow management of a database and its data which can be classified into four main functional groups:

1. Data definition – Creation, modification and removal of definitions that detail how the data is to be organized.
2. Update – Insertion, modification, and deletion of the data itself.
3. Retrieval – Selecting data according to specified criteria (e.g., a query, a position in a hierarchy, or a position in relation to other data) and providing that data either directly to the user, or making it available for further processing by the database itself or by other applications. The retrieved data may be made available in a more or less direct form without modification, as it is stored in the database, or in a new form obtained by altering it or combining it with existing data from the database.
4. Administration – Registering and monitoring users, enforcing data security, monitoring performance, maintaining data integrity, dealing with concurrency control, and recovering information that has been corrupted by some event such as an unexpected system failure.

`Database systems` give a set of tools for storing, searching and managing this information.
A Database System is the combination of data (in a Database), a software (the database application that manages the database), the Hardware (in which the software is installed) and Users. This course will majorly focus on the software. A system is composed of several components that together achieve a common objective.


Physically, `database servers` are dedicated computers that hold the actual databases and run only the DBMS and related software. Database servers are usually multiprocessor computers, with generous memory and RAID disk arrays used for stable storage. Hardware database accelerators, connected to one or more servers via a high-speed channel, are also used in large-volume transaction processing environments. DBMSs are found at the heart of most database applications. DBMSs may be built around a custom multitasking kernel with built-in networking support, but modern DBMSs typically rely on a standard operating system to provide these functions.

## Classification

1. An `in-memory database` is a database that primarily resides in main memory, but is typically backed-up by non-volatile computer data storage. Main memory databases are faster than disk databases, and so are often used where response time is critical, such as in telecommunications network equipment.
2. An `active database` includes an event-driven architecture which can respond to conditions both inside and outside the database. Possible uses include security monitoring, alerting, statistics gathering and authorization. Many databases provide active database features in the form of database triggers.
3. A `cloud database` relies on cloud technology. Both the database and most of its DBMS reside remotely, "in the cloud", while its applications are both developed by programmers and later maintained and used by end-users through a web browser and Open APIs.
4. `Data warehouses` archive data from operational databases and often from external sources such as market research firms. The warehouse becomes the central source of data for use by managers and other end-users who may not have access to operational data. For example, sales data might be aggregated to weekly totals and converted from internal product codes to use UPCs so that they can be compared with ACNielsen data. Some basic and essential components of data warehousing include extracting, analyzing, and mining data, transforming, loading, and managing data so as to make them available for further use.
5. A `deductive database` combines logic programming with a relational database.
6. A `distributed database` is one in which both the data and the DBMS span multiple computers.
7. A `document-oriented` database is designed for storing, retrieving, and managing document-oriented, or semi structured, information. Document-oriented databases are one of the main categories of NoSQL databases.
8. An `embedded database` system is a DBMS which is tightly integrated with an application software that requires access to stored data in such a way that the DBMS is hidden from the application's end-users and requires little or no ongoing maintenance.
9. `End-user databases` consist of data developed by individual end-users. Examples of these are collections of documents, spreadsheets, presentations, multimedia, and other files. Several products exist to support such databases.
10. A `federated database system `comprises several distinct databases, each with its own DBMS. It is handled as a single database by a federated database management system (FDBMS), which transparently integrates multiple autonomous DBMSs, possibly of different types (in which case it would also be a heterogeneous database system), and provides them with an integrated conceptual view.
 Sometimes the term multi-database is used as a synonym for federated database, though it may refer to a less integrated (e.g., without an FDBMS and a managed integrated schema) group of databases that cooperate in a single application. In this case, typically middleware is used for distribution, which typically includes an atomic commit protocol (ACP), e.g., the two-phase commit protocol, to allow distributed (global) transactions across the participating databases.
11. `A graph database` is a kind of NoSQL database that uses graph structures with nodes, edges, and properties to represent and store information. General graph databases that can store any graph are distinct from specialized graph databases such as triplestores and network databases.
12. An` array` DBMS is a kind of NoSQL DBMS that allows modeling, storage, and retrieval of (usually large) multi-dimensional arrays such as satellite images and climate simulation output.
13. In a `hypertext or hypermedia database`, any word or a piece of text representing an object, e.g., another piece of text, an article, a picture, or a film, can be hyperlinked to that object. Hypertext databases are particularly useful for organizing large amounts of disparate information. For example, they are useful for organizing online encyclopedias, where users can conveniently jump around the text. The World Wide Web is thus a large distributed hypertext database.
14. A `knowledge base` (abbreviated KB, kb or Δ[22][23]) is a special kind of database for knowledge management, providing the means for the computerized collection, organization, and retrieval of knowledge. Also a collection of data representing problems with their solutions and related experiences.
15. A `mobile database` can be carried on or synchronized from a mobile computing device.
16. `Operational databases` store detailed data about the operations of an organization. They typically process relatively high volumes of updates using transactions. Examples include customer databases that record contact, credit, and demographic information about a business's customers, personnel databases that hold information such as salary, benefits, skills data about employees, enterprise resource planning systems that record details about product components, parts inventory, and financial databases that keep track of the organization's money, accounting and financial dealings.
17. A `parallel database` seeks to improve performance through parallelization for tasks such as loading data, building indexes and evaluating queries.
The major parallel DBMS architectures which are induced by the underlying hardware architecture are:
         -   Shared memory architecture, where multiple processors share the main memory space, as well as other data storage.
         -   Shared disk architecture, where each processing unit (typically consisting of multiple processors) has its own main memory, but all units share the other storage.
         -   Shared-nothing architecture, where each processing unit has its own main memory and other storage.
18. `Probabilistic databases` employ fuzzy logic to draw inferences from imprecise data.
19. `Real-time databases` process transactions fast enough for the result to come back and be acted on right away.
20. A `spatial database` can store the data with multidimensional features. The queries on such data include location-based queries, like "Where is the closest hotel in my area?".
21. A `temporal database` has built-in time aspects, for example a temporal data model and a temporal version of SQL. More specifically the temporal aspects usually include valid-time and transaction-time.
22. A `terminology-oriented` database builds upon an object-oriented database, often customized for a specific field.
23. An `unstructured data` database is intended to store in a manageable and protected way diverse objects that do not fit naturally and conveniently in common databases. It may include email messages, documents, journals, multimedia objects, etc. The name may be misleading since some objects can be highly structured. However, the entire possible object collection does not fit into a predefined structured framework. Most established DBMSs now support unstructured data in various ways, and new dedicated DBMSs are emerging.

## Database languages

Database languages are special-purpose languages, which allow one or more of the following tasks, sometimes distinguished as sublanguages:

- Data control language (DCL) – controls access to data;
- Data definition language (DDL) – defines data types such as creating, altering, or dropping tables and the relationships among them;
- Data manipulation language (DML) – performs tasks such as inserting, updating, or deleting data occurrences;
- Data query language (DQL) – allows searching for information and computing derived information.

Database languages are specific to a particular data model. Notable examples include:

1. SQL combines the roles of data definition, data manipulation, and query in a single language. It was one of the first commercial languages for the relational model, although it departs in some respects from the relational model as described by Codd (for example, the rows and columns of a table can be ordered). SQL became a standard of the American National Standards Institute (ANSI) in 1986, and of the International Organization for Standardization (ISO) in 1987. The standards have been regularly enhanced since and are supported (with varying degrees of conformance) by all mainstream commercial relational DBMSs.[30][31]
2. OQL is an object model language standard (from the Object Data Management Group). It has influenced the design of some of the newer query languages like JDOQL and EJB QL.
3. XQuery is a standard XML query language implemented by XML database systems such as MarkLogic and eXist, by relational databases with XML capability such as Oracle and Db2, and also by in-memory XML processors such as Saxon.
4. SQL/XML combines XQuery with SQL.

A database language may also incorporate features like:

- DBMS-specific configuration and storage engine management
- Computations to modify query results, like counting, summing, averaging, sorting, grouping, and cross-referencing
- Constraint enforcement (e.g. in an automotive database, only allowing one engine type per car)
- Application programming interface version of the query language, for programmer convenience

## Models

Underlying the structure of a database is a `data model`. A model is a collection of conceptual tools for describing data, data relationships, data semantics, and consistency constraints.
A database model is a type of data model that determines the logical structure of a database and fundamentally determines in which manner data can be stored, organized, and manipulated. The most popular example of a database model is the relational model (or the SQL approximation of relational), which uses a table-based format.

Common logical data models for databases include:

1. Navigational databases
   -  Hierarchical database model
   -  Network model
   -  Graph database
2. Relational model
3. Entity–relationship model
   -  Enhanced entity–relationship model
4. Object model
5. Document model
6. Entity–attribute–value model
7. Star schema

An object–relational database combines the two related structures.

Physical data models include:
   - Inverted index
   - Flat file

Other models include:
   - Multidimensional model
   - Array model
   - Multivalue model

Specialized models are optimized for particular types of data:
   - XML database
   - Semantic model
   - Content store
   - Event store
   - Time series model


`Entity-Relationship Model`:- The entity-relationship (E-R) data model is based on a perception of a real world that consists of a collection of basic objects, called entities, and of relationships among these objects. An entity is a "thing" or "object" in the real world that is distinguishable from other objects.For example, each person is an entity, and bank accounts can be considered as entities.
Entities are described in a database by a set of attributes. For example, the attributes account-number and balance may describe one particular account in a bank, and they form attributes of the account entity set.

A relationship is an association among several entities. For example, a depositor relationship associates a customer with each account that she has. The set of all entities of the same type and the set of all relationships of the same type are termed an entity set and relationship set, respectively. The overall logical structure (schema) of a database can be expressed graphically by an E-R diagram, which is built up from the following components:
1. Rectangles, which represent entity sets
2. Ellipses, which represent attributes
3. Diamonds, which represent relationships among entity sets
4. Lines, which link attributes to entity sets and entity sets to relationships

In addition to entities and relationships, the E-R model represents certain constraints to which the contents of a database must conform. One important constraint is mapping cardinalities, which express the number of entities to which another entity can be associated via a relationship set. For example, if each account must belong to only one customer, the E-R model can express that constraint.


`Relational Model`:- The relational model uses a collection of tables to represent both data and the relationships among those data. Each table has multiple columns, and each column has a unique name.
The relational model is at a lower level of abstraction than the E-R model.
Database designs are often carried out in the E-R model, and then translated to the relational model.


`Object-oriented data model` is another data model that has seen increasing attention. The object-oriented model can be seen as extending the E-R model with notions of encapsulation, methods (functions), and object identity.


The `object-relational data model` combines features of the object-oriented data model and relational data model.


`Semi-structured data models` permit the specification of data where individual data items of the same type may have different sets of attributes. This is in contrast with the data models mentioned earlier, where every data item of a particular type must have the same set of attributes. The extensible markup language (XML) is widely used to represent semi-structured data.


`The network data model and the hierarchical data model`, preceded the relational data model. These models were tied closely to the underlying implementation, and complicated the task of modeling data.
As a result they are little used now, except in old database code that is still in service in some places.


## External, conceptual, and internal views

A database management system provides three views of the database data:

1. The external level defines how each group of end-users sees the organization of data in the database. A single database can have any number of views at the external level.
2. The conceptual level (or logical level) unifies the various external views into a compatible global view.It provides the synthesis of all the external views. It is out of the scope of the various database end-users, and is rather of interest to database application developers and database administrators.
3. The internal level (or physical level) is the internal organization of data inside a DBMS. It is concerned with cost, performance, scalability and other operational matters. It deals with storage layout of the data, using storage structures such as indexes to enhance performance. Occasionally it stores data of individual views (materialized views), computed from generic data, if performance justification exists for such redundancy. It balances all the external views' performance requirements, possibly conflicting, in an attempt to optimize overall performance across all activities.

## CAP Theorem

Includes:- Consistency,Availability and Partition Tolerance

1. CP - MongoDB,HBase,Redis
2. C - RDBMS
3. CA - Neo4j
4. AP - CouchDB,Cassandra,DynamoDB

## Data consistency Models

1. ACID(relational) - Atomic,Consistent,isolated,Durable
2. BASE(NoSQL) - Basic availability,Soft state,Eventual consistency

# Relational Database

They are structured,reliable and consistent.

Includes:-

1. Microsoft SQL Server
2. mySQL
3. postgreSQL

Stregths:-

1. Reliable
2. Consistent
3. Excellent integrity.

Suited for business transactions.

## Types

1. Relational - Structured tables,Data integrity,complex queries,ACID compliance,security control,foreign keys.
2. Document - JSON document,Flexible schema,varying structure,seni-structured data,content management,Automated sharding.Includes MongoDB,CouchDB,Firebase
3. In-memory - Real-time data,low latency,data caching,gaming applications,high-speed processing.Includes Redis,Hazelcast,Memcache,Apache geode.
4. Graph - complex relationships,graph structures,transversal social networks,pattern recognition,Knowledge graphs.Includes - neo4j, arangoDB,OrientDB community edition,JanusGraph
5. Time-series - Temporal data,fast data retrieval,IoT data,Monitoring logs,Trend analysis,Data compression.Includes- Timescale,open tsdb,timescale,kx
6. Spatial - Geographic data,location-based queries,Maps and GIS,Spatial indexing,Earth science,Geospatial apps.Includes - Oracle,PostGIS,geomesa,Amazon aurora.

## SQL Databases

SQL (Structured Query Language) databases are also known as relational databases. They have a predefined schema, and data is stored in tables consisting of rows and columns. SQL databases follow the ACID (Atomicity, Consistency, Isolation, Durability) properties to ensure reliable transactions. Some popular SQL databases include MySQL, PostgreSQL, and Microsoft SQL Server.

**Advantages of SQL databases:**

- **Predefined schema**: Ideal for applications with a fixed structure.
- **ACID transactions**: Ensures data consistency and reliability.
- **Support for complex queries**: Rich SQL queries can handle complex data relationships and aggregation operations.
- **Scalability**: Vertical scaling by adding more resources to the server (e.g., RAM, CPU).

**Limitations of SQL databases:**

- **Rigid schema**: Data structure updates are time-consuming and can lead to downtime.
- **Scaling**: Difficulties in horizontal scaling and sharding of data across multiple servers.
- **Not well-suited for hierarchical data**: Requires multiple tables and JOINs to model tree-like structures.

## NoSQL Databases

NoSQL (Not only SQL) databases refer to non-relational databases, which don't follow a fixed schema for data storage. Instead, they use a flexible and semi-structured format like JSON documents, key-value pairs, or graphs. MongoDB, Cassandra, Redis, and Couchbase are some popular NoSQL databases.

**Advantages of NoSQL databases:**

- **Flexible schema**: Easily adapts to changes without disrupting the application.
- **Scalability**: Horizontal scaling by partitioning data across multiple servers (sharding).
- **Fast**: Designed for faster read and writes, often with a simpler query language.
- **Handling large volumes of data**: Better suited to managing big data and real-time applications.
- **Support for various data structures**: Different NoSQL databases cater to various needs, like document, graph, or key-value stores.

**Limitations of NoSQL databases:**

- **Limited query capabilities**: Some NoSQL databases lack complex query and aggregation support or use specific query languages.
- **Weaker consistency**: Many NoSQL databases follow the BASE (Basically Available, Soft state, Eventual consistency) properties that provide weaker consistency guarantees than ACID-compliant databases.

## MongoDB: A NoSQL Database

This guide focuses on MongoDB, a popular NoSQL database that uses a document-based data model. MongoDB has been designed with flexibility, performance, and scalability in mind. With its JSON-like data format (BSON) and powerful querying capabilities, MongoDB is an excellent choice for modern applications dealing with diverse and large-scale data.

- [@article@NoSQL vs. SQL Databases](https://www.mongodb.com/nosql-explained/nosql-vs-sql)
- [@feed@Explore top posts about NoSQL](https://app.daily.dev/tags/nosql?ref=roadmapsh)


## Database Users

There are various types of database users. They are differentiated by the way they expect to interact with the system These include;

1. End users – These type of users use the database system to achieve some goal. They interact with the DBMS through an application that allows them to access only specific applications that they have been authorized to. They are also called Naïve users. They invoke one of the permanent application programs that have been written previously. Examples of such users include people accessing database over the web, bank tellers, clerical staff, etc
2. Application programmers - These types of users write software to allow end users to interface with the database system. They interact with system through DML calls.
3. Database Administrator (DBA) – These types of users design and manage the whole database system.
4. Database Specialized users– These type of users write specialized database applications that do not fit into the traditional data processing framework. These category of users are mainly programmers who’s main role is to write the database software itself.
