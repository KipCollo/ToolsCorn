# NoSQL

Not only SQL.

Strengths:-

1. Flexible
2. Scalable
3. Fast

NoSQL describes alternatives to traditional relational databases.It handles unstructured,large amount of data.
There are 4 main types of NoSQL databases that differ from each other:-

1. Key-value
2. Document
3. Wide-column
4. Graph

`Key-value storage` - Simple data storage.Useful for storing basic information like user profiles.It is highly scalable.
Useful for caching,session maanagement.
Redis,DynamoDB and Oracle NoSQL are popular key-value NoSQL database.

`Document database` - General purpose
Includes:- Apache CouchDB, MongoDB,Azure Cosmos DB.

`Wide column` - Subset f key-value.Uses Tables,rows and columns but can vary.Large volumes of data.Focuses on your app's queries.
Useful for Big Data
Includes:- Cassandra,HBase.

`Graph` - Stored in nodes that inherently show relationships via edges.
Used for social networks
Includes:- Neo4j, JanusGraph

# SQL vs NoSQL

When discussing databases, it's essential to understand the difference between SQL and NoSQL databases, as each has its own set of advantages and limitations. In this section, we'll briefly compare and contrast the two, so you can determine which one suits your needs better.

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
