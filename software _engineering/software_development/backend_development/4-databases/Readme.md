# Databases

A `database` is a collection of useful data of one or more related organizations structured in a way to make data an asset to the organization. A `database management system` is a software designed to assist in maintaining and extracting large collections of data in a timely fashion.

- [@article@Oracle: What is a Database?](https://www.oracle.com/database/what-is-database/)
- [@article@Prisma.io: What are Databases?](https://www.prisma.io/dataguide/intro/what-are-databases)
- [@feed@Explore top posts about Backend Development](https://app.daily.dev/tags/backend?ref=roadmapsh)

In backend systems, Database is implemented using disk-based storage.This is because it is cheap and has more capacity.

---

## Relational Databases

`Relational Databases` - A relational database is a type of database that stores and provides access to data points that are related to one another. Relational databases store data in a series of tables. Interconnections between the tables are specified as foreign keys. A foreign key is a unique reference from one row in a relational table to another row in a table, which can be the same table but is most commonly a different table.

Visit the following resources to learn more:

- [Relational Databases](https://www.ibm.com/cloud/learn/relational-databases)
- [51 Years of Relational Databases](https://learnsql.com/blog/codd-article-databases/)
- [Databases and SQL](https://www.edx.org/course/databases-5-sql)
- [Intro To Relational Databases](https://www.udacity.com/course/intro-to-relational-databases--ud197)
- [What is Relational Database](https://youtu.be/OqjJjpjDRLc)

**ACID** - ACID are the four properties of relational database systems that help in making sure that we are able to perform the transactions in a reliable manner. It's an acronym which refers to the presence of four properties: atomicity, consistency, isolation and durability

- [@article@What is ACID Compliant Database?](https://retool.com/blog/whats-an-acid-compliant-database/)
- [@article@What is ACID Compliance?: Atomicity, Consistency, Isolation](https://fauna.com/blog/what-is-acid-compliance-atomicity-consistency-isolation)
- [@video@ACID Explained: Atomic, Consistent, Isolated & Durable](https://www.youtube.com/watch?v=yaQ5YMWkxq4)

**Database Normalization** - Database normalization is the process of structuring a relational database in accordance with a series of so-called normal forms in order to reduce data redundancy and improve data integrity. It was first proposed by Edgar F. Codd as part of his relational model.

Normalization entails organizing the columns (attributes) and tables (relations) of a database to ensure that their dependencies are properly enforced by database integrity constraints. It is accomplished by applying some formal rules either by a process of synthesis (creating a new database design) or decomposition (improving an existing database design).

- [@article@What is Normalization in DBMS (SQL)? 1NF, 2NF, 3NF, BCNF Database with Example](https://www.guru99.com/database-normalization.html)
- [@article@Database normalization](https://en.wikipedia.org/wiki/Database_normalization)
- [@video@Basic Concept of Database Normalization](https://www.youtube.com/watch?v=xoTyrdT9SZI)
- [@feed@Explore top posts about Database](https://app.daily.dev/tags/database?ref=roadmapsh)

_Database Indexes_ - An index is a data structure that you build and assign on top of an existing table that basically looks through your table and tries to analyze and summarize so that it can create shortcuts.

- [@article@An in-depth look at Database Indexing](https://www.freecodecamp.org/news/database-indexing-at-a-glance-bb50809d48bd/)
- [@video@Database Indexing Explained](https://www.youtube.com/watch?v=-qNSXK7s7_w)
- [@feed@Explore top posts about Database](https://app.daily.dev/tags/database?ref=roadmapsh)

_Sharding strategies_ - Sharding strategy is a technique to split a large dataset into smaller chunks (logical shard) in which we distribute these chunks in different machines/database nodes in order to distribute the traffic load. It’s a good mechanism to improve the scalability of an application. Many databases support sharding, but not all.

- [@article@Wikipedia - Sharding in Database Architectures](<https://en.wikipedia.org/wiki/Shard_(database_architecture)>)
- [@article@How sharding a database can make it faster](https://stackoverflow.blog/2022/03/14/how-sharding-a-database-can-make-it-faster/)
- [@feed@Explore top posts about Backend Development](https://app.daily.dev/tags/backend?ref=roadmapsh)

**SQL databases** - These are the standard structured databases (A.K.A relational databases) where you need to define the schema for your data (essentially the data structures you’re dealing with), and then you’ll use a language called [SQL (Structured Query Language)](https://roadmap.sh/sql) to interact with the data inside it. Most backend developers will interact with SQL databases at some point in their career, as this is the most common type of database.

- [@article@Relational Databases](https://www.ibm.com/cloud/learn/relational-databases)
- [@article@51 Years of Relational Databases](https://learnsql.com/blog/codd-article-databases/)
- [@course@Databases and SQL](https://www.edx.org/course/databases-5-sql)
- [@article@Intro To Relational Databases](https://www.udacity.com/course/intro-to-relational-databases--ud197)
- [@video@What is Relational Database](https://youtu.be/OqjJjpjDRLc)
- [@feed@Explore top posts about Backend Development](https://app.daily.dev/tags/backend?ref=roadmapsh)

_PostgreSQL_ - PostgreSQL, also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and SQL compliance.

- [@roadmap@Visit Dedicated PostgreSQL DBA Roadmap](/postgresql-dba)
- [@official@Official Website](https://www.postgresql.org/)
- [@article@Learn PostgreSQL - Full Tutorial for Beginners](https://www.postgresqltutorial.com/)
- [@video@Learn PostgreSQL Tutorial - Full Course for Beginners](https://www.youtube.com/watch?v=qw--VYLpxG4)
- [@video@Postgres tutorial for Beginners](https://www.youtube.com/watch?v=eMIxuk0nOkU)
- [@feed@Explore top posts about PostgreSQL](https://app.daily.dev/tags/postgresql?ref=roadmapsh)

_Oracle_ - Oracle Database Server or sometimes called Oracle RDBMS or even simply Oracle is a world leading relational database management system produced by Oracle Corporation.

- [@official@Official Website](https://www.oracle.com/database/)
- [@article@Official Docs](https://docs.oracle.com/en/database/index.html)
- [@video@Oracle SQL Tutorial for Beginners](https://www.youtube.com/watch?v=ObbNGhcxXJA)
- [@feed@Explore top posts about Oracle](https://app.daily.dev/tags/oracle?ref=roadmapsh)

_SQLite_ - SQLite is a relational database management system that is embedded into the end program. It is self-contained, serverless, zero-configuration, transactional SQL database engine.

- [@official@SQLite website](https://www.sqlite.org/index.html)
- [@article@SQLite Tutorial](https://www.sqlitetutorial.net/)
- [@feed@Explore top posts about SQLite](https://app.daily.dev/tags/sqlite?ref=roadmapsh)

_MariaDB_ - MariaDB server is a community developed fork of MySQL server. Started by core members of the original MySQL team, MariaDB actively works with outside developers to deliver the most featureful, stable, and sanely licensed open SQL server in the industry. MariaDB was created with the intention of being a more versatile, drop-in replacement version of MySQL

- [@official@MariaDB website](https://mariadb.org/)
- [@article@MariaDB vs MySQL](https://www.guru99.com/mariadb-vs-mysql.html)
- [@article@W3Schools - MariaDB tutorial ](https://www.w3schools.blog/mariadb-tutorial)
- [@video@MariaDB Tutorial For Beginners in One Hour](https://www.youtube.com/watch?v=_AMj02sANpI)
- [@feed@Explore top posts about Infrastructure](https://app.daily.dev/tags/infrastructure?ref=roadmapsh)

_MySQL_ - MySQL is an incredibly popular open source relational database management system (RDBMS). MySQL can be used as a stand-alone client or in conjunction with other services to provide database connectivity. The **M** in LAMP stack stands for MySQL; that alone should provide an idea of its prevalence.

- [@official@MySQL website](https://www.mysql.com/)
- [@article@W3Schools - MySQL tutorial ](https://www.w3schools.com/mySQl/default.asp)
- [@video@MySQL tutorial for beginners](https://www.youtube.com/watch?v=7S_tz1z_5bA)
- [@article@MySQL for Developers](https://planetscale.com/courses/mysql-for-developers/introduction/course-introduction)
- [@article@MySQL Tutorial](https://www.mysqltutorial.org/)
- [@feed@Explore top posts about MySQL](https://app.daily.dev/tags/mysql?ref=roadmapsh)

_MS SQL_ - MS SQL (or Microsoft SQL Server) is the Microsoft developed relational database management system (RDBMS). MS SQL uses the T-SQL (Transact-SQL) query language to interact with the relational databases. There are many different versions and editions available of MS SQL

- [@article@MS SQL website](https://www.microsoft.com/en-ca/sql-server/)
- [@article@Tutorials for SQL Server](https://docs.microsoft.com/en-us/sql/sql-server/tutorials-for-sql-server-2016?view=sql-server-ver15)
- [@video@SQL Server tutorial for beginners](https://www.youtube.com/watch?v=-EPMOaV7h_Q)

**Transactions** - In short, a database transaction is a sequence of multiple operations performed on a database, and all served as a single logical unit of work — taking place wholly or not at all. In other words, there's never a case where only half of the operations are performed and the results saved.

- [@article@What are Transactions?](https://fauna.com/blog/database-transaction)

---

## Non-Relational Databases

**NoSQL databases** - NoSQL databases offer data storage and retrieval that is modelled differently to "traditional" relational databases. NoSQL databases typically focus more on horizontal scaling, eventual consistency, speed and flexibility and is used commonly for big data and real-time streaming applications.
NoSQL is often described as a BASE system (**B**asically **A**vailable, **S**oft state, **E**ventual consistency) as opposed to SQL/relational which typically focus on ACID (Atomicity, Consistency, Isolation, Durability). Common NoSQL data structures include key-value pair, wide column, graph and document.
_NoSQL databases_ - As the name implies, these are not your standard SQL databases; in fact, within this category, there are columnar databases, document-based ones (such as MongoDB), key-value-based ones (like Redis), and more. They don’t use predefined data structures, giving you more flexibility and control over what you can store and how you store it. Backend developers will deal with only a handful of these, as there are many different sub-types, and more are created every year.

Some examples of these databases are:

- MongoDB, a document-based database (see here a mongoDB roadmap if you’re interested).
- Redis, an in-memory key-value pair database.
- Neo4J, a graph database.
- ElasticSearch, a document-based search engine.

In the end, the decision between SQL and NoSQL is about trade-offs and figuring out what works best for your particular use case.

- [@article@NoSQL Explained](https://www.mongodb.com/nosql-explained)
- [@video@How do NoSQL Databases work](https://www.youtube.com/watch?v=0buKQHokLK8)
- [@video@SQL vs NoSQL Explained](https://www.youtube.com/watch?v=ruz-vK8IesE)
- [@feed@Explore top posts about NoSQL](https://app.daily.dev/tags/nosql?ref=roadmapsh)

**Document Databases** -

_MongoDB_ is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License (SSPL).

- [@roadmap@Visit Dedicated MongoDB Roadmap](/mongodb)
- [@article@MongoDB Website](https://www.mongodb.com/)
- [@article@MongoDB Documentation](https://docs.mongodb.com/)
- [@article@MongoDB Online Sandbox](https://mongoplayground.net/)
- [@article@Learning Path for MongoDB Developers](https://learn.mongodb.com/catalog)
- [@article@Dynamo DB Docs](https://docs.aws.amazon.com/dynamodb/index.html)
- [@article@Official Developers Guide](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html)
- [@feed@Explore top posts about Backend Development](https://app.daily.dev/tags/backend?ref=roadmapsh)

**Graph databases** - A graph database stores nodes and relationships instead of tables, or documents. Data is stored just like you might sketch ideas on a whiteboard. Your data is stored without restricting it to a pre-defined model, allowing a very flexible way of thinking about and using it.

- [@article@What is a Graph Database?](https://neo4j.com/developer/graph-database/)
- [@article@Graph Databases VS Relational Databases](https://www.freecodecamp.org/news/graph-database-vs-relational-database/)
- [@feed@Explore top posts about Backend Development](https://app.daily.dev/tags/backend?ref=roadmapsh)

*Neo4j*n- Neo4j AuraDB is a fast, reliable, scalable, and completely automated Neo4j graph database, provided as a cloud service.

- [Official Website](https://neo4j.com/)
- [Official Docs](https://neo4j.com/docs/)
- [Neo4j (Graph Database) Crash Course](https://www.youtube.com/watch?v=8jNPelugC2s)

**Key-Value Databases** -A key-value database (KV database) is a type of database that stores data as a collection of key-value pairs. In a KV database, each piece of data is identified by a unique key, and the value is the data associated with that key.
KV databases are designed for fast and efficient storage and retrieval of data, and they are often used in applications that require high performance and low latency. They are particularly well-suited for storing large amounts of unstructured data, such as log data and user profiles.

Some popular KV databases include Redis, Memcached, and LevelDB. These databases are often used in combination with other types of databases, such as relational databases or document databases, to provide a complete and scalable data storage solution.

- [@article@Key-Value Databases - Wikipedia](https://en.wikipedia.org/wiki/Key-value_database)
- [@feed@Explore top posts about Backend Development](https://app.daily.dev/tags/backend?ref=roadmapsh)

`Redis` - Redis is an open source (BSD licensed), in-memory **data structure store** used as a database, cache, message broker, and streaming engine. Redis provides data structures such as [strings](https://redis.io/topics/data-types-intro#strings), [hashes](https://redis.io/topics/data-types-intro#hashes), [lists](https://redis.io/topics/data-types-intro#lists), [sets](https://redis.io/topics/data-types-intro#sets), [sorted sets](https://redis.io/topics/data-types-intro#sorted-sets) with range queries, [bitmaps](https://redis.io/topics/data-types-intro#bitmaps), [hyperloglogs](https://redis.io/topics/data-types-intro#hyperloglogs), [geospatial indexes](https://redis.io/commands/geoadd), and [streams](https://redis.io/topics/streams-intro). Redis has built-in [replication](https://redis.io/topics/replication), [Lua scripting](https://redis.io/commands/eval), [LRU eviction](https://redis.io/topics/lru-cache), [transactions](https://redis.io/topics/transactions), and different levels of [on-disk persistence](https://redis.io/topics/persistence), and provides high availability via [Redis Sentinel](https://redis.io/topics/sentinel) and automatic partitioning with [Redis Cluster](https://redis.io/topics/cluster-tutorial).

- [@official@Redis Website](https://redis.io/)
- [@video@Redis in 100 Seconds](https://www.youtube.com/watch?v=G1rOthIU-uo)
- [@feed@Explore top posts about Redis](https://app.daily.dev/tags/redis?ref=roadmapsh)

**Column Databases** - A `wide-column database` (sometimes referred to as a column database) is similar to a relational database. It store data in tables, rows and columns. However in opposite to relational databases here each row can have its own format of the columns. Column databases can be seen as a two-dimensional key-value database. One of such database system is _Apache Cassandra_.

Warning: <a href="https://en.wikipedia.org/wiki/Wide-column_store#Wide-column_stores_versus_columnar_databases">note that a "columnar database" and a "column database" are two different terms!</a>

- [@article@Apache Cassandra](https://cassandra.apache.org/_/index.html)
- [@video@Apache Cassandra - Course for Beginners](https://www.youtube.com/watch?v=J-cSy5MeMOA)
- [@feed@Explore top posts about Backend Development](https://app.daily.dev/tags/backend?ref=roadmapsh)

**Timeseries databases** -

_InfluxDB_ - InfluxDB was built from the ground up to be a purpose-built time series database; i.e., it was not repurposed to be time series. Time was built-in from the beginning. InfluxDB is part of a comprehensive platform that supports the collection, storage, monitoring, visualization and alerting of time series data. It’s much more than just a time series database.

- [@article@InfluxDB Website](https://www.influxdata.com/)
- [@article@Time series database](https://www.influxdata.com/time-series-database/)
- [@feed@Explore top posts about Backend Development](https://app.daily.dev/tags/backend?ref=roadmapsh)

**Realtime databases** - A real-time database is broadly defined as a data store designed to collect, process, and/or enrich an incoming series of data points (i.e., a data stream) in real time, typically immediately after the data is created.

[Firebase](https://firebase.google.com/)
[RethinkDB](https://rethinkdb.com/)

---

## ORMs

Object/Relational Mapping refers to the technique of mapping data from an object model representation to a relational data model representation (and vice versa).
ORMs (or Object Relational Mappings) serve as an abstraction layer between the database and your application.You don’t want to create marshaling and unmarshaling code every time you run a raw query on a database. This causes issues of bugs and also huge security problems that these unprotected systems can have.
Object-Relational Mapping (ORM) is a technique that lets you query and manipulate data from a database using an object-oriented paradigm. When talking about ORM, most people are referring to a library that implements the Object-Relational Mapping technique, hence the phrase "an ORM".

- [@article@Object Relational Mapping - Wikipedia](https://en.wikipedia.org/wiki/Object–relational_mapping)
- [@article@What is an ORM and how should I use it?](https://stackoverflow.com/questions/1279613/what-is-an-orm-how-does-it-work-and-how-should-i-use-one)
- [@article@What is an ORM, how does it work, and how should I use one?](https://stackoverflow.com/a/1279678)
- [@feed@Explore top posts about Backend Development](https://app.daily.dev/tags/backend?ref=roadmapsh)

1. Python - SQLAlchemy.
2. PHP - Doctrine.
3. Ruby - ActiveRecord.
4. Java - Hibernate.
5. Laravel - Eloquent ORM.
6. Node - Prisma & TypeORM.

---

## Database Migrations

Migrations are a way to manage and evolve your database schema over time. As your application grows and its requirements change, you'll need to modify the database schema to accommodate new features or enhancements.
Migrations are like version control for your database, allowing your team to define and share the application's database schema definition. If you have ever had to tell a teammate to manually add a column to their local database schema after pulling in your changes from source control, you've faced the problem that database migrations solve.

_Key Concepts_: -

- `Migration`: A migration is a single unit of change that affects the schema or data in a database. Each migration encapsulates an operation such as creating, altering, or dropping tables, indices, or constraints.
- `Migration History`: The sequence of applied migrations is the migration history, and it helps you keep track of the transformations applied to the schema over time. Typically, migrations are tracked using a dedicated table in the database that logs applied migrations and their order.
- `Up and Down Migrations`: Each migration typically consists of two operations – an "up" operation that applies the change, and a "down" operation that rolls back the change if needed. The up operation moves the schema forward, while the down operation reverts it.

_Benefits of Migrations_:-

- `Version Control`: Migrations help to version control your database schema, making it easier to collaborate with team members and review schema changes in the same way you review application code.
- `Consistency`: Migrations promote a consistent and reproducible approach to managing schema changes across various environments (e.g., development, testing, production).
- `Testability`: Migrations allow you to test the effect of schema changes in isolated environments before deploying them to production.
- `Deployability`: Migrations facilitate automated deployment processes and help reduce the risk of human error during database schema updates.
- `Rollback`:You can easily roll back.

_Migration Strategies_ - Learn how to run database migrations effectively. Especially zero downtime multi-phase schema migrations. Rather than make all changes at once, do smaller incremental changes to allow old code, and new code to work with the database at the same time, before removing old code, and finally removing the parts of the database schema which is no longer used.

- [@article@Databases as a Challenge for Continuous Delivery](https://phauer.com/2015/databases-challenge-continuous-delivery/)

1. The Laravel Schema facade provides database agnostic support for creating and manipulating tables across all of Laravel's supported database systems.
2. Java - Liquibase & Flyway.
3. dbmate
4. go-migrate
5. prisma

## Scaling

**N plus one problem** - The N+1 query problem happens when your code executes N additional query statements to fetch the same data that could have been retrieved when executing the primary query.

- [In Detail Explanation of N+1 Problem](https://medium.com/doctolib/understanding-and-fixing-n-1-query-30623109fe89)

**Profiling Performance** - There are several ways to profile the performance of a database:

- Monitor system performance: You can use tools like the Windows Task Manager or the Unix/Linux top command to monitor the performance of your database server. These tools allow you to see the overall CPU, memory, and disk usage of the system, which can help identify any resource bottlenecks.
- Use database-specific tools: Most database management systems (DBMSs) have their own tools for monitoring performance. For example, Microsoft SQL Server has the SQL Server Management Studio (SSMS) and the sys.dm_os_wait_stats dynamic management view, while Oracle has the Oracle Enterprise Manager and the v$waitstat view. These tools allow you to see specific performance metrics, such as the amount of time spent waiting on locks or the number of physical reads and writes.
- Use third-party tools: There are also several third-party tools that can help you profile the performance of a database. Some examples include SolarWinds Database Performance Analyzer, Quest Software Foglight, and Redgate SQL Monitor. These tools often provide more in-depth performance analysis and can help you identify specific issues or bottlenecks.
- Analyze slow queries: If you have specific queries that are running slowly, you can use tools like EXPLAIN PLAN or SHOW PLAN in MySQL or SQL Server to see the execution plan for the query and identify any potential issues. You can also use tools like the MySQL slow query log or the SQL Server Profiler to capture slow queries and analyze them further.
- Monitor application performance: If you are experiencing performance issues with a specific application that is using the database, you can use tools like Application Insights or New Relic to monitor the performance of the application and identify any issues that may be related to the database.

Have a look at the documentation for the database that you are using.

**Failure Modes** - There are several different failure modes that can occur in a database, including:

- Read contention: This occurs when multiple clients or processes are trying to read data from the same location in the database at the same time, which can lead to delays or errors.
- Write contention: This occurs when multiple clients or processes are trying to write data to the same location in the database at the same time, which can lead to delays or errors.
- Thundering herd: This occurs when a large number of clients or processes try to access the same resource simultaneously, which can lead to resource exhaustion and reduced performance.
- Cascade: This occurs when a failure in one part of the database system causes a chain reaction that leads to failures in other parts of the system.
- Deadlock: This occurs when two or more transactions are waiting for each other to release a lock on a resource, leading to a standstill.
- Corruption: This occurs when data in the database becomes corrupted, which can lead to errors or unexpected results when reading or writing to the database.
- Hardware failure: This occurs when hardware components, such as disk drives or memory, fail, which can lead to data loss or corruption.
- Software failure: This occurs when software components, such as the database management system or application, fail, which can lead to errors or unexpected results.
- Network failure: This occurs when the network connection between the database and the client is lost, which can lead to errors or timeouts when trying to access the database.
- Denial of service (DoS) attack: This occurs when a malicious actor attempts to overwhelm the database with requests, leading to resource exhaustion and reduced performance.

## CAP Theorem

CAP is an acronym that stands for Consistency, Availability and Partition Tolerance. According to CAP theorem, any distributed system can only guarantee two of the three properties at any point of time. You can't guarantee all three properties at once.

Visit the following resources to learn more:

- [@article@What is CAP Theorem?](https://www.bmc.com/blogs/cap-theorem/)
- [@article@CAP Theorem - Wikipedia](https://en.wikipedia.org/wiki/CAP_theorem)
- [@article@An Illustrated Proof of the CAP Theorem](https://mwhittaker.github.io/blog/an_illustrated_proof_of_the_cap_theorem/)
- [@article@CAP Theorem and its applications in NoSQL Databases](https://www.ibm.com/uk-en/cloud/learn/cap-theorem)
- [@video@What is CAP Theorem?](https://www.youtube.com/watch?v=_RbsFXWRZ10)

## Seeding
