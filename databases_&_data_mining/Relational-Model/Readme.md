# Relational Databases

A **relational database** is a type of database that stores and organizes data in a structured way. It uses a structure that allows data to be identified and accessed in relation to other data in the database. Data in a relational database is stored in various data tables, each of which has a unique key identifying every row.
Relational databases are a type of database management system (DBMS) that stores and organizes data in a structured format called tables. These tables are made up of rows, also known as records or tuples, and columns, which are also called attributes or fields. The term "relational" comes from the fact that these tables can be related to one another through keys and relationships.

The relational model has three apects:

1. Structural aspect - The data in database is perceived by the user as tables, and nothing but tables.
2. Integrity aspect - Those tables satisfy certain integirity constraints.
3. Manipulative aspects - The operators available to the user for manipulating those tables-e.g for purpose of data retrieval - are operators that derive tables from tables.Of those operators,3 particularly important ones are restrict,project and join.
   - `restrict` operation extracts specified rows from a table.NB - Restrict is sometimes called `select`.Prefer restrict because the operator is not same as SELECt of SQL.
   - `project` operation extracts specified columns from a table.
   - `join` operatiom combines two tables into one on the basis of common values in a common column.

Relational databases are made up of a set of tables with data that fits into a predefined category. Each table has at least one data category in a column, and each row contains a certain data instance for the categories defined in the columns.

For example, consider an 'Employees' table:

| EmployeeId | FirstName | LastName | Email                 |
|------------|-----------|----------|-----------------------|
| 1          | John      | Doe      | john.doe@example.com  |
| 2          | Jane      | Doe      | jane.doe@example.com  |
| 3          | Bob       | Smith    | bob.smith@example.com |

In this table, 'EmployeeId', 'FirstName', 'LastName' and 'Email' are categories, and each row represents a specific employee.

| OrderId | EmployeeId | Product  |
|---------|------------|----------|
| 1       | 3          | Apples   |
| 2       | 1          | Bananas  |
| 3       | 2          | Cherries |

Restrict:

Employee where LastName = Doe                   

| EmployeeId | FirstName | LastName | Email                 |
|------------|-----------|----------|-----------------------|
| 1          | John      | Doe      | john.doe@example.com  |
| 2          | Jane      | Doe      | jane.doe@example.com  |


Project:

Orders over EmployeeId, Product                 

| EmployeeId | Product  |
|------------|----------|
| 3          | Apples   |
| 1          | Bananas  |
| 2          | Cherries |

Join:

Order and Employees over Employee

| OrderId | EmployeeId | Product  | FirstName | LastName | Email                 |
|---------|------------|----------|-----------|----------|-----------------------|
| 1       | 3          | Apples   | Bob       | Smith    | bob.smith@example.com |
| 2       | 1          | Bananas  | John      | Doe      | john.doe@example.com  |
| 3       | 2          | Cherries | Jane      | Doe      | jane.doe@example.com  |                  



NOTE:-

1. Relational systems require only that the database be perceived by the user as tables.Tables are logical structure in a relational system,not physical structure.At physical level,in fact,the system is free to store the data any way it likes - using sequantial files,indexing,hashing,pointer chains,compression and so on - provided only that it can map stored representation to tables at logical level.
2. Relational databases abide by principle, `Information Principle`: The entire information content of the database is represented in one and only one way - as explicit values in columns positions in row in tables.


Relational model consists of following components:-

1. An open-ended collection of scalar types(including in particular the type boolean or truth value).
2. A relation type generator and an intended interpretation for relations of types generated thereby
3. Facilitates for defining relation variables of such generated relation types.
4. A relational assignment operation for assigning relation values to such relation variables.
5. An open-ended collection of generic relational operators(the relational algebra) for deriving relation values from other relation values.


## Key Concepts

- `Table`: A table is a collection of data organized into rows and columns. Each table has a unique name and represents a specific object or activity in the database.
- `Row`: A row is a single entry in a table, containing a specific instance of data. Each row in a table has the same columns and represents a single record.
- `Column`: A column is a data field in a table, representing a specific attribute of the data. Columns have a unique name and a specific data type.
- `Primary Key`: A primary key is a column (or a set of columns) in a table that uniquely identifies each row. No two rows can have the same primary key value.
- `Foreign Key`: A foreign key is a column (or a set of columns) in a table that refers to the primary key of another table. It is used to establish relationships between tables.


## RDBMS Concepts

Relational Database Management Systems (RDBMS) are a type of database management system which stores and organizes data in tables, making it easy to manipulate, query, and manage the information. They follow the relational model defined by E.F. Codd in 1970, which means that data is represented as tables with rows and columns.

**Tables and Relations**:- 
`Relation` is a mathematical term for a table.
A `table` (also known as a relation) is a collection of rows (tuples) and columns (attributes). Each row represents a specific record, and each column represents an attribute of that record. The columns define the structure of the table and the type of data that can be stored in it.
The number and order of the columns is fixed, and each column has a name. The number of rows is variable — it reflects how much data is stored at a given moment. SQL does not make any guarantees about the order of the rows in a table. When a table is read, the rows will appear in an unspecified order,unless sorting is explicitly requested.Furthermore, SQL does not assign unique identifiers to rows, so it is possible to have several completely identical rows in a table. This is a consequence of the mathematical model that underlies SQL but is usually not desirable.

```markdown
Example:

| id | first_name | last_name |
|----|------------|-----------|
| 1  | John       | Doe       |
| 2  | Jane       | Smith     |
```

**Keys**:-

- Primary Key: A primary key is a unique identifier for each record in the table. It can be a single column or a combination of columns. No two rows can have the same primary key value.
- Foreign Key: A foreign key is a column (or a set of columns) that references the primary key of another table, establishing a relationship between the two tables.

**Data Types**:- RDBMS supports various data types for storing different types of data. Some of the common data types include:

- Integer (int)
- Floating-point (float, real)
- Numeric (decimal, number)
- DateTime (date, time, timestamp)
- Character (char, varchar, text)
- Boolean (bool)

**Schema**:- The schema is the structure that defines tables, views, indexes, and their relationships in a database. It includes the definition of attributes, primary and foreign keys, and constraints that enforce data integrity.

**Normalization**:- Normalization is the process of organizing data in a database to reduce redundancy, eliminate data anomalies, and ensure proper relationships between tables. There are multiple levels of normalization, referred to as normal forms (1NF, 2NF, 3NF, etc.).

**ACID Properties**:- ACID (Atomicity, Consistency, Isolation, Durability) is a set of properties that ensure database transactions are reliable and maintain data integrity:

- Atomicity: All operations in a transaction succeed or fail as a unit.
- Consistency: The database remains in a consistent state before and after a transaction.
- Isolation: Transactions are isolated from each other, ensuring that their execution does not interfere with one another.
- Durability: Once a transaction is committed, its effects are permanently saved in the database.


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

One of the main advantages of a relational database is its ability to represent relationships between tables. These relationships could be one-to-one, one-to-many, or many-to-many relationships. They allow for efficient querying and manipulation of related data across multiple tables.

- `One-to-One`: This is a relationship where a row in one table has a single corresponding row in another table. For example, a person could have a single passport, and a passport can only belong to one person.
- `One-to-Many`: This is a relationship where a row in one table can have multiple corresponding rows in another table. For example, a customer can have multiple orders, but an order can only belong to one customer.
- `Many-to-Many`: This is a relationship where multiple rows in one table can have multiple corresponding rows in another table. To represent a many-to-many relationship, a third table, called a junction table or associative table, is needed. For example, a student can enroll in multiple courses, and a course can have multiple students enrolled.


## RDBMS Benefits and Limitations

Relational databases offer several advantages in terms of efficiency, flexibility, and data integrity:
Here are some of the benefits of using an RDBMS:

- `Structured Data`: RDBMS allows data storage in a structured way, using rows and columns in tables. This makes it easy to manipulate the data using SQL (Structured Query Language), ensuring efficient and flexible usage.
- `ACID Properties`: ACID stands for Atomicity, Consistency, Isolation, and Durability. These properties ensure reliable and safe data manipulation in a RDBMS, making it suitable for mission-critical applications.
- `Normalization`: RDBMS supports data normalization, a process that organizes data in a way that reduces data redundancy and improves data integrity.
- `Scalability`: RDBMSs generally provide good scalability options, allowing for the addition of more storage or computational resources as the data and workload grow.
- `Data Integrity`: RDBMS provides mechanisms like constraints, primary keys, and foreign keys to enforce data integrity and consistency, ensuring that the data is accurate and reliable.
- `Security`: RDBMSs offer various security features such as user authentication, access control, and data encryption to protect sensitive data.
- `Querying`: The SQL (Structured Query Language) is used for querying, updating, and managing relational databases, providing a powerful and standardized way to access and manipulate the data.

Here are some of the limitations of using an RDBMS:

- `Complexity`: Setting up and managing an RDBMS can be complex, especially for large applications. It requires technical knowledge and skills to manage, tune, and optimize the database.
- `Cost`: RDBMSs can be expensive, both in terms of licensing fees and the computational and storage resources they require.
- `Fixed Schema`: RDBMS follows a rigid schema for data organization, which means any changes to the schema can be time-consuming and complicated.
- `Handling of Unstructured Data`: RDBMSs are not suitable for handling unstructured data like multimedia files, social media posts, and sensor data, as their relational structure is optimized for structured data.
- `Horizontal Scalability`: RDBMSs are not as easily horizontally scalable as NoSQL databases. Scaling horizontally, which involves adding more machines to the system, can be challenging in terms of cost and complexity.


## SQL [Structured Query Language]

SQL is the standard language for relational systems.Was originally developed by IBM Research in early 1970s.Was first implemented on a large scale in IBM prototype called System R

SQL stands for Structured Query Language and is a language used to manage data stored in a relational database.
Structured Query Language (SQL) is the standard language used to communicate with a relational database. SQL is used to insert, update, delete, and retrieve data in the tables, as well as manage the database itself.


## Relational Algebra

The relational algebra is a collection of operators that take relations as their operands and return a relation as their result.The first version of the algebra was defined by Codd.
The original algebra had 8 operators,two groups of four each:

1. The traditional set operators `union`, `intersection`, `difference` and the `Certesian product`(all of them modified somewhat to take account of the fact that their operands are specifically relations instead of arbitrary sets).
2. The special trelational operators `restrict`(also known as `select`),`project`,`join` and `divide`.