# Database

A database is a collection of data organized in some format so that the data can be easily accessed, managed and updated.
Database management system (DBMS), the software that interacts with end users, applications, and the database itself to capture and analyze the data.The DBMS additionally encompasses the core facilities provided to administer the database. 

Existing DBMSs provide various functions that allow management of a database and its data which can be classified into four main functional groups:

1. Data definition – Creation, modification and removal of definitions that detail how the data is to be organized.
2. Update – Insertion, modification, and deletion of the data itself.
3. Retrieval – Selecting data according to specified criteria (e.g., a query, a position in a hierarchy, or a position in relation to other data) and providing that data either directly to the user, or making it available for further processing by the database itself or by other applications. The retrieved data may be made available in a more or less direct form without modification, as it is stored in the database, or in a new form obtained by altering it or combining it with existing data from the database.
4. Administration – Registering and monitoring users, enforcing data security, monitoring performance, maintaining data integrity, dealing with concurrency control, and recovering information that has been corrupted by some event such as an unexpected system failure.

Both a database and its DBMS conform to the principles of a particular database model. "Database system" refers collectively to the database model, database management system, and database.

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

## External, conceptual, and internal views

A database management system provides three views of the database data:

1. The external level defines how each group of end-users sees the organization of data in the database. A single database can have any number of views at the external level.
2. The conceptual level (or logical level) unifies the various external views into a compatible global view.[39] It provides the synthesis of all the external views. It is out of the scope of the various database end-users, and is rather of interest to database application developers and database administrators.
3. The internal level (or physical level) is the internal organization of data inside a DBMS. It is concerned with cost, performance, scalability and other operational matters. It deals with storage layout of the data, using storage structures such as indexes to enhance performance. Occasionally it stores data of individual views (materialized views), computed from generic data, if performance justification exists for such redundancy. It balances all the external views' performance requirements, possibly conflicting, in an attempt to optimize overall performance across all activities.