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