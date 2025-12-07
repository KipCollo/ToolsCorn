# Relational Databases

A **relational database** is a type of database that stores and organizes data in a structured way. It uses a structure that allows data to be identified and accessed in relation to other data in the database. Data in a relational database is stored in various data tables, each of which has a unique key identifying every row.

Relational databases are made up of a set of tables with data that fits into a predefined category. Each table has at least one data category in a column, and each row contains a certain data instance for the categories defined in the columns.

For example, consider an 'Employees' table:

| EmployeeId | FirstName | LastName | Email                 |
|------------|-----------|----------|-----------------------|
| 1          | John      | Doe      | john.doe@example.com  |
| 2          | Jane      | Doe      | jane.doe@example.com  |
| 3          | Bob       | Smith    | bob.smith@example.com |

In this table, 'EmployeeId', 'FirstName', 'LastName' and 'Email' are categories, and each row represents a specific employee.

## Relationships

The term "relational database" comes from the concept of a relation—a set of tuples that the database organizes into rows and columns. Each row in a table represents a relationship among a set of values.

Relational databases use `keys` to create links between tables. A `primary key` is a unique identifier for a row of data. A `foreign key` is a column or combination of columns used to establish and enforce a link between the data in two tables.

Consider an additional 'Orders' table:

| OrderId | EmployeeId | Product  |
|---------|------------|----------|
| 1       | 3          | Apples   |
| 2       | 1          | Bananas  |
| 3       | 2          | Cherries |

In the 'Orders' table, 'EmployeeId' serves as the foreign key creating a relationship between 'Orders' and 'Employees'.
This allows queries that involve data in both tables, like "Find all orders placed by John Doe".

```sql
SELECT Orders.OrderId, Orders.Product, Employees.FirstName, Employees.LastName
FROM Orders
INNER JOIN Employees ON Orders.EmployeeId = Employees.EmployeeId;
```

The above SQL code is an example of how to retrieve data from a relational database using a `JOIN` clause to combine rows from two or more tables.
Overall, relational databases provide a powerful mechanism for defining relationships within data and enabling efficient data retrieval.

## RDBMS Benefits and Limitations

Here are some of the benefits of using an RDBMS:

- **Structured Data**: RDBMS allows data storage in a structured way, using rows and columns in tables. This makes it easy to manipulate the data using SQL (Structured Query Language), ensuring efficient and flexible usage.
- **ACID Properties**: ACID stands for Atomicity, Consistency, Isolation, and Durability. These properties ensure reliable and safe data manipulation in a RDBMS, making it suitable for mission-critical applications.
- **Normalization**: RDBMS supports data normalization, a process that organizes data in a way that reduces data redundancy and improves data integrity.
- **Scalability**: RDBMSs generally provide good scalability options, allowing for the addition of more storage or computational resources as the data and workload grow.
- **Data Integrity**: RDBMS provides mechanisms like constraints, primary keys, and foreign keys to enforce data integrity and consistency, ensuring that the data is accurate and reliable.
- **Security**: RDBMSs offer various security features such as user authentication, access control, and data encryption to protect sensitive data.

Here are some of the limitations of using an RDBMS:

- **Complexity**: Setting up and managing an RDBMS can be complex, especially for large applications. It requires technical knowledge and skills to manage, tune, and optimize the database.
- **Cost**: RDBMSs can be expensive, both in terms of licensing fees and the computational and storage resources they require.
- **Fixed Schema**: RDBMS follows a rigid schema for data organization, which means any changes to the schema can be time-consuming and complicated.
- **Handling of Unstructured Data**: RDBMSs are not suitable for handling unstructured data like multimedia files, social media posts, and sensor data, as their relational structure is optimized for structured data.
- **Horizontal Scalability**: RDBMSs are not as easily horizontally scalable as NoSQL databases. Scaling horizontally, which involves adding more machines to the system, can be challenging in terms of cost and complexity.

## SQL [Structured Query Language]

SQL stands for Structured Query Language and is a language used to manage data stored in a relational database.
Relational databases organize data in the form of tables.

## Roadmap

1. Introduction - Includes:-
   - SQL definitions,Why learn It,Database and Types,SQL Commands,SQL Components, SQL Coding Style
2. Query Data(SELECT) :- SELECT,FROM,WHERE,ORDER BY, GROUP BY,HAVING,DISTINCT,TOP, QUERY ORDER & EXECUTION.
3. Data Definition(DDL):- CREATE,ALTER,DROP
4. Data Manipulation(DML):- INSERT, UPDATE,DELETE
5. Filtering Data:-
   - Comparison Operators
   - Logical Operators
   - BETWEEN, IN,LIKE
6. Combining Data:-
   - Joining Data - Basic Joins(INNER,LEFT,RIGHT,FULL Join), Advanced Joins(LEFT,RIGHT,FULL Anti Join,Cross Join)
   - SET Operators - UNION,UNION ALL,EXCEPT,INTERSECT
7. Row-Level Functions:- String, Number, date & time,Null functions, Case Statements
8. Aggregate & Analytical Functions:- aggregate Functions,Window basics,Window Aggregate func,Window Ranking Func, Window Value Func.
9. Advanced SQL Techniques:- Subqueries, CTE, Views,CTAS table & Temp tables,Stored Procedure,Triggers
10. Performance and Optimizations:- Indexes,Partitions.
11. AI & SQL

`Comments` - Comments are written to make our code more readable for other programmers. They are meant for humans only and are ignored by the DBMS
To add comments to our program, 

- we type two hyphens, followed by a space.
- Alternatively, we can also use the # symbol as shown below:
- Last, but not least, if we want to type multiple lines comments, we can use the /*...*/ symbols:


```sql
-- Using SELECT to display messages

# This is another way to add comment

/* This is a comment
This is also a comment
This is the third comment */
```

Filtering Data- Insert,update,delete
Sorting and Limiting Data - Order by,limit,distinct
Aggregating data - count(),sum(),avg(),min(),max(),group by,having
Set operations - Union,union all,intersect,except
Views - create view,drop view,alter view,insert into view,update view
Subqueries -  subqueries in SELECT,subqueries in WHERE,suqueries in FROM
Transcations - Begin transaction,commit,rollback,savepoint,set transaction isolation level
Window functions - row_number(),rank(),dense_rank(),ntile(),lead(),lag(),sum() over(),AVG() OVER(),PARTITION BY,ORDER BY
Date and Time functions - getdate(),current_timestamp,dateadd(),datediff(),datepart(),date_format(),now(),extract(),timestampdiff()
Triggers - create trigger,drop trigger,after insert/update/delete,before insert/update/delete
Conditional logic - ifnull(),coalesce(),case when
Date Modification - where,and ,or, not, in, between,like,is null,is not null,exists
Common table expressions - with cte as,recursive cte,with temporary cte
Indexing - Create index,drop index,unique index,full-text index,composite index
Joins - Inner,left,right,full,cross,self join.


# What are Relational Databases?

Relational databases are a type of database management system (DBMS) that stores and organizes data in a structured format called tables. These tables are made up of rows, also known as records or tuples, and columns, which are also called attributes or fields. The term "relational" comes from the fact that these tables can be related to one another through keys and relationships.

## Key Concepts

- **Table**: A table is a collection of data organized into rows and columns. Each table has a unique name and represents a specific object or activity in the database.
- **Row**: A row is a single entry in a table, containing a specific instance of data. Each row in a table has the same columns and represents a single record.
- **Column**: A column is a data field in a table, representing a specific attribute of the data. Columns have a unique name and a specific data type.
- **Primary Key**: A primary key is a column (or a set of columns) in a table that uniquely identifies each row. No two rows can have the same primary key value.
- **Foreign Key**: A foreign key is a column (or a set of columns) in a table that refers to the primary key of another table. It is used to establish relationships between tables.

## Relationships

One of the main advantages of a relational database is its ability to represent relationships between tables. These relationships could be one-to-one, one-to-many, or many-to-many relationships. They allow for efficient querying and manipulation of related data across multiple tables.

- **One-to-One**: This is a relationship where a row in one table has a single corresponding row in another table. For example, a person could have a single passport, and a passport can only belong to one person.
- **One-to-Many**: This is a relationship where a row in one table can have multiple corresponding rows in another table. For example, a customer can have multiple orders, but an order can only belong to one customer.
- **Many-to-Many**: This is a relationship where multiple rows in one table can have multiple corresponding rows in another table. To represent a many-to-many relationship, a third table, called a junction table or associative table, is needed. For example, a student can enroll in multiple courses, and a course can have multiple students enrolled.

## Advantages of Relational Databases

Relational databases offer several advantages in terms of efficiency, flexibility, and data integrity:

- **Structured Data**: The table-based organization of relational databases makes them well-suited for handling structured data, which has a consistent structure and can be easily mapped to the columns and rows of a table.
- **Data Integrity**: Relational databases use primary and foreign keys to maintain consistent relationships between related data, reducing the chances of data inconsistency and redundancy.
- **Scalability**: Relational databases can handle large amounts of structured data and can be scaled to accommodate growing data requirements.
- **Querying**: The SQL (Structured Query Language) is used for querying, updating, and managing relational databases, providing a powerful and standardized way to access and manipulate the data.

In summary, relational databases are a powerful and versatile tool for storing and managing structured data. Their ability to represent relationships among data and to ensure data integrity make them the backbone of many applications and services.



# RDBMS Benefits and Limitations

## Benefits

- **Structured Data**: RDBMS allows data storage in a structured way, using rows and columns in tables. This makes it easy to manipulate the data using SQL (Structured Query Language), ensuring efficient and flexible usage.

- **ACID Properties**: ACID stands for Atomicity, Consistency, Isolation, and Durability. These properties ensure reliable and safe data manipulation in a RDBMS, making it suitable for mission-critical applications.

- **Normalization**: RDBMS supports data normalization, a process that organizes data in a way that reduces data redundancy and improves data integrity.

- **Scalability**: RDBMSs generally provide good scalability options, allowing for the addition of more storage or computational resources as the data and workload grow.

- **Data Integrity**: RDBMS provides mechanisms like constraints, primary keys, and foreign keys to enforce data integrity and consistency, ensuring that the data is accurate and reliable.

- **Security**: RDBMSs offer various security features such as user authentication, access control, and data encryption to protect sensitive data.

## Limitations

- **Complexity**: Setting up and managing an RDBMS can be complex, especially for large applications. It requires technical knowledge and skills to manage, tune, and optimize the database.

- **Cost**: RDBMSs can be expensive, both in terms of licensing fees and the computational and storage resources they require.

- **Fixed Schema**: RDBMS follows a rigid schema for data organization, which means any changes to the schema can be time-consuming and complicated.

- **Handling of Unstructured Data**: RDBMSs are not suitable for handling unstructured data like multimedia files, social media posts, and sensor data, as their relational structure is optimized for structured data.

- **Horizontal Scalability**: RDBMSs are not as easily horizontally scalable as NoSQL databases. Scaling horizontally, which involves adding more machines to the system, can be challenging in terms of cost and complexity.

In conclusion, choosing an RDBMS such as PostgreSQL depends on the type of application, data requirements, and scalability needs. Knowing the benefits and limitations can help you make an informed decision and select the best-fit solution for your project.



# RDBMS Concepts

Relational Database Management Systems (RDBMS) are a type of database management system which stores and organizes data in tables, making it easy to manipulate, query, and manage the information. They follow the relational model defined by E.F. Codd in 1970, which means that data is represented as tables with rows and columns.


## Tables and Relations

A table (also known as a relation) is a collection of rows (tuples) and columns (attributes). Each row represents a specific record, and each column represents an attribute of that record. The columns define the structure of the table and the type of data that can be stored in it.

```markdown
Example:

| id | first_name | last_name |
|----|------------|-----------|
| 1  | John       | Doe       |
| 2  | Jane       | Smith     |
```

## Keys

- Primary Key: A primary key is a unique identifier for each record in the table. It can be a single column or a combination of columns. No two rows can have the same primary key value.
- Foreign Key: A foreign key is a column (or a set of columns) that references the primary key of another table, establishing a relationship between the two tables.

## Data Types

RDBMS supports various data types for storing different types of data. Some of the common data types include:

- Integer (int)
- Floating-point (float, real)
- Numeric (decimal, number)
- DateTime (date, time, timestamp)
- Character (char, varchar, text)
- Boolean (bool)

## Schema

The schema is the structure that defines tables, views, indexes, and their relationships in a database. It includes the definition of attributes, primary and foreign keys, and constraints that enforce data integrity.

## Normalization

Normalization is the process of organizing data in a database to reduce redundancy, eliminate data anomalies, and ensure proper relationships between tables. There are multiple levels of normalization, referred to as normal forms (1NF, 2NF, 3NF, etc.).

## ACID Properties

ACID (Atomicity, Consistency, Isolation, Durability) is a set of properties that ensure database transactions are reliable and maintain data integrity:

- Atomicity: All operations in a transaction succeed or fail as a unit.
- Consistency: The database remains in a consistent state before and after a transaction.
- Isolation: Transactions are isolated from each other, ensuring that their execution does not interfere with one another.
- Durability: Once a transaction is committed, its effects are permanently saved in the database.

## SQL

Structured Query Language (SQL) is the standard language used to communicate with a relational database. SQL is used to insert, update, delete, and retrieve data in the tables, as well as manage the database itself.

In conclusion, understanding RDBMS concepts is essential for working with PostgreSQL and other relational databases. Familiarity with these concepts will allow you to design efficient database schemas, use SQL effectively, and maintain data integrity in your applications.
