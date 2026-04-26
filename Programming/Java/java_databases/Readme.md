# Java SE Technologies - Database

Data is information. A piece of data is one fact, such as your first name. A database is an organized collection of data.

- `Java DB`:- Is Oracle's supported distribution of the open source Apache Derby database. Its ease of use, standards compliance, full feature set, and small footprint make it the ideal database for Java developers. Java DB is written in the Java programming language, providing "write once, run anywhere" portability. It can be embedded in Java applications, requiring zero administration by the developer or user. It can also be used in client server mode. Java DB is fully transactional and provides a standard SQL interface as well as a JDBC 4.1 compliant driver.JavaDB is no longer included in recent versions of the JDK.
- `Java Data Objects (JDO)`:- Is a standard interface-based Java model abstraction of persistence. Application programmers can use JDO technology to directly store Java domain model instances into the persistent store (database). Benefits include ease of programming, application portability, database independence, high performance, and optional integration with Enterprise JavaBeans (EJB).
- `The Java Database Connectivity (JDBC)`:- Is the industry standard for database-independent connectivity between the Java programming language and a wide range of databases SQL databases and other tabular data sources, such as spreadsheets or flat files. The JDBC API provides a call-level API for SQL-based database access.JDBC technology allows you to use the Java programming language to exploit "Write Once, Run Anywhere" capabilities for applications that require access to enterprise data. With a JDBC technology-enabled driver, you can connect all corporate data even in a heterogeneous environment.

A relational database is a database that is organized into tables, which consist of rows and columns.
There are two main ways to access a relational database from Java:
1. Java Database Connectivity (JDBC): Accesses data as rows and columns.
2. Java Persistence API (JPA): Accesses data through Java objects using a concept called object-­relational mapping (ORM). The idea is that you don’t have to write as much code, and you get your data in Java objects.

The relationship among java.sql, javax.sql, JPA, Hibernate, and Spring Data revolves around managing databases in Java applications. Each provides specific capabilities, often working together to simplify database interactions.

java.sql - Low-level database connectivity using JDBC.Direct database access.
javax.sql- Extends java.sql with advanced JDBC features like connection pooling.Builds on java.sql.
JPA- High-level abstraction for ORM, maps Java objects to database tables.Uses javax.sql for connections.
Hibernate- A JPA provider with additional ORM features.Implements JPA.
Spring Data- Simplifies working with JPA (or other databases) in Spring applications.Leverages JPA/Hibernate.


When it comes to connecting to datasources and accessing data using the JDK there are 2 packages that you will want to look into: 

- [Package `javax.sql`](https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/package-summary.html)
- [Package `java.sql`](https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/package-summary.html)


-----------------


## java.sql (Pure JDBC)

Provides the API for accessing and processing data stored in a data source (usually a relational database) using the JavaTM programming language.
Limitation:-

1. Low-Level API: Requires writing SQL manually and managing resources (connections, statements) explicitly.
2. No object-relational mapping (ORM) capabilities.


- https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/java/sql/package-summary.html

1. Making a connection with a database via the DriverManager facility
    - DriverManager class -- makes a connection with a driver.Manages database connections.
    - SQLPermission class -- provides permission when code running within a Security Manager, such as an applet, attempts to set up a logging stream through the DriverManager
    - Driver interface -- provides the API for registering and connecting drivers based on JDBC technology ("JDBC drivers"); generally used only by the DriverManager class.Supports creation of data connection.
    - DriverPropertyInfo class -- provides properties for a JDBC driver; not used by the general user
2. Sending SQL statements to a database
    - Statement -- used to send basic SQL statements.Includes methods for executing text queries.
    - PreparedStatement -- used to send prepared statements or basic SQL statements (derived from Statement).Rep. precompiled & stored query.
    - CallableStatement -- used to call database stored procedures (derived from PreparedStatement)
    - Connection interface -- provides methods for creating statements and managing connections and their properties.Represents a connection to a database.Rep. connection btwn client & SQL databse server.
    - Savepoint -- provides savepoints in a transaction
3. Retrieving and updating the results of a query
    - ResultSet interface -- Retrieves results of queries.
4. Standard mappings for SQL types to classes and interfaces in the Java programming language
    - Array interface -- mapping for SQL ARRAY
    - Blob interface -- mapping for SQL BLOB
    - Clob interface -- mapping for SQL CLOB
    - Date class -- mapping for SQL DATE
    - NClob interface -- mapping for SQL NCLOB
    - Ref interface -- mapping for SQL REF
    - RowId interface -- mapping for SQL ROWID
    - Struct interface -- mapping for SQL STRUCT
    - SQLXML interface -- mapping for SQL XML
    - Time class -- mapping for SQL TIME
    - Timestamp class -- mapping for SQL TIMESTAMP
    - Types class -- provides constants for SQL types
5. Custom mapping an SQL user-defined type (UDT) to a class in the Java programming language
    - SQLData interface -- specifies the mapping of a UDT to an instance of this class
    - SQLInput interface -- provides methods for reading UDT attributes from a stream
    - SQLOutput interface -- provides methods for writing UDT attributes back to a stream
6. Metadata
    - DatabaseMetaData interface -- provides information about the database server.
    - ResultSetMetaData interface -- provides information about the columns of a ResultSet object.Contains info about ResultSet, including attribute names and types.
    - ParameterMetaData interface -- provides information about the parameters to PreparedStatement commands
7. Exceptions
    - SQLException -- thrown by most methods when there is a problem accessing data and by some methods for other reasons
    - SQLWarning -- thrown to indicate a warning
    - DataTruncation -- thrown to indicate that data may have been truncated
    - BatchUpdateException -- thrown to indicate that not all commands in a batch update executed successfully

A JDBC application loads an appropriate driver using the Driver interface, connects to the database using the Connection interface, creates and executes SQL statements using the Statement interface, and processes the result using the ResultSet interface if the statements return results. Note that some statements, such as SQL data definition statements and SQL data modification statements, do not return results.Methods like getInt(), getString(), etc., are used to extract column values.

**Database Drivers**:- Before you can connect to database,you must make a database driver avalable to your application.There are 4 JDBC database drivers you can use:-

1. Type 1 - `A JDBC-ODBC bridge driver` converts JDBC calls into ODBC calls tha access the DBMS protocol.The ODBC driver must be installed on the client machine.
2. Type 2 - A `native protocol partly Java driver` converts JDBC calls in the native DBMS protocol.Since this conversion takes place on the client, some binary code must be installed on client machine.
3. Type 3 - A `net protocol all Java driver` converts JDBC calls into a net protocol that's independent of any native DBMS protocol.Then,middleware software running on a server converts the net protocol to the native DBMS protocol.Since this conversion takes place on server side,no installation is required on client machine.
4. Type 4 - A `native protocol all Java driver` converts JDBC calls into a native DBMS protocol.Since this conversion takes place on server side,no installation is required on client machine.

To use the JDBC API with a particular database management system, you need a JDBC technology-based driver to mediate between JDBC technology and the database. 

If you want to connect to a MYSQL database,you use the type-4 driver named Connector/J.To install the database driver,you must add the JAR file that contains the database driver to the classpath.
Do not use a semicolon (;) to end the Oracle SQL command in a Java program. The semicolon may not work with the Oracle JDBC drivers. It does work, however, with the other drivers.

If you are working with older version of Java,though,you need to use the `forName` method of Class to explicitly load the driver before you call getConnection method.

```java
//loading database driver prior to JDBC 4.0
Class.forName("com.mysql.jdbc.Driver")
```

**Connecting to Database**:- The first step in doing anything with a database is connecting to it.

`Building a JDBC URL`:- To access a website, you need to know its URL. To access your email, you need to know your username and password. JDBC is no different. To access a database, you need to know this information about it.
Unlike web URLs, JDBC URLs have a variety of formats. They have three parts in common. The first piece is always the same. It is the protocol jdbc.The second part is the subprotocol, which is the name of the database, such as hsqldb, mysql, or postgres. The third part is the subname, which is a database-­specific format. Colons (:) separate the three parts.
The subname typically contains information about the database such as its location and/or name. The syntax varies. You need to know about the three main parts. You don’t need to memorize the subname formats.

```java
jdbc:postgresql://localhost/zoo
jdbc:oracle:thin:@123.123.123.123:1521:zoo
jdbc:mysql://localhost:3306
jdbc:mysql://localhost:3306/zoo?profileSQL=true
```

NOTE:- Port is optional when using the default location.

`Getting a Database Connection`:- To connect to a database, use the static method getConnection(databaseURL) in the DriverManager class, as follows:

```java
Connection connection = DriverManager.getConnection(databaseURL);//where databaseURL is the unique identifier of the database on the Internet.
```

three parameters that are passed to getConnection(). The first is the JDBC URL.The second is the username for accessing the database, and the third is the password for accessing the database.
`DriverManager` class:- It is the basic service for managing a set of JDBC drivers.Before you can access or modify the data in database,you must connect to the database.To get a connection to the database,you use the *getConnection()* method of the *DriverManager* class to return a Connection object.This method requires three arguements:- URL of the database, username, Password.
The DriverManager class uses the factory pattern, which means that you call a static method to get a Connection rather than calling a constructor.The factory pattern means that you can get any implementation of the interface when calling the method.The nice thing about the factory pattern is that it takes care of the logic of creating a class for you. You don’t need to know the name of the class that implements Connection, and you don’t need to know how it is created. You are probably a bit curious, though.

DriverManager looks through any drivers it can find to see whether they can handle the JDBC URL. If so, it creates a Connection using that Driver. If not, it gives up and throws a SQLException.

Since getConnection method of DriverManager class throws an SQLException, you need to handle this exception whenever you connect to database.With JDBC 4.0 you can use an enhanced for statement to loop through any exceptions that are nested within SQLException object.

`Connection Interface`: A connection (session) with a specific database. SQL statements are executed and results are returned within the context of a connection.
A Connection object's database is able to provide information describing its tables, its supported SQL grammar, its stored procedures, the capabilities of this connection, and so on. This information is obtained with the `getMetaData` method.
The Connection interface handles transactions and specifies how they are processed.

By default, a new connection is in autocommit mode, and all its SQL statements are executed and committed as individual transactions. The commit occurs when the statement completes or the next execute occurs, whichever comes first. In the case of statements returning a result set, the statement completes when the last row of the result set has been retrieved or the result set has been closed. If a single statement returns multiple results, the commit occurs when all the results have been retrieved. You can use the setAutoCommit(false) method to disable autocommit, so that all SQL statements are grouped into one transaction that is terminated by a call to either the commit() or the rollback() method. The rollback() method undoes all the changes made by the transaction.

Note: When configuring a Connection, JDBC applications should use the appropriate Connection method such as setAutoCommit or setTransactionIsolation. Applications should not invoke SQL commands directly to change the connection's configuration when there is a JDBC method available. By default a Connection object is in auto-commit mode, which means that it automatically commits changes after executing each statement. If auto-commit mode has been disabled, the method commit must be called explicitly in order to commit changes; otherwise, database changes will not be saved.


**STATEMENTS**:- If a Connection object can be envisioned as a cable linking your program to a database, an object of Statement can be viewed as a cart that delivers SQL statements for execution by the database and brings the result back to the program.
Once a connection to a particular database is established, it can be used to send SQL statements from your program to the database. The `Statement interface` is used to execute static SQL statements that don’t contain any parameters. The `PreparedStatement interface`, extending Statement, is used to execute a precompiled SQL statement with or without parameters.Since the SQL statements are precompiled, they are efficient for repeated executions.A PreparedStatement object is created using the prepareStatement method in the Connection interface.
Once a Connection object is created,you can create statements for executing SQL statements as follows:

```java
Statement statement = connection.createStatement();
```

`Statement createStatement()` - Creates a Statement object for sending SQL statements to the database. SQL statements without parameters are normally executed using Statement objects.The object used for executing a static SQL statement and returning the results it produces.If the same SQL statement is executed many times, it may be more efficient to use a PreparedStatement object.Result sets created using the returned Statement object will by default be type TYPE_FORWARD_ONLY and have a concurrency level of CONCUR_READ_ONLY. The holdability of the created result sets can be determined by calling getHoldability.

Each time a Java application sends a new SQL statement to the database server,the server checks the statement for syntax errors,prepares a plan for executing the statement, and executes the statement.If same statement is sent again,though,the database server checks to see whether it has already received one exactly like that.If so,server doesn't have to check its syntax and prepare an execution plan for it so the server just executes it.This improves performance of database operations.To take advantage of this database feature,Java provides for use of *prepared statements*.This feature lets you send statements to the database server that get executed repeatedly by accepting parameter values sent to it.That improves databse performance because the database server only has to check the syntax plan for each statement.

`PreparedStatement prepareStatement(String sql)`: Creates a PreparedStatement object for sending parameterized SQL statements to the database.A SQL statement with or without IN parameters can be pre-compiled and stored in a PreparedStatement object. This object can then be used to efficiently execute this statement multiple times.Result sets created using the returned PreparedStatement object will by default be type TYPE_FORWARD_ONLY and have a concurrency level of CONCUR_READ_ONLY. The holdability of the created result sets can be determined by calling getHoldability.
Note: This method is optimized for handling parametric SQL statements that benefit from precompilation. If the driver supports precompilation, the method prepareStatement will send the statement to the database for precompilation. Some drivers may not support precompilation. In this case, the statement may not be sent to the database until the PreparedStatement object is executed. This has no direct effect on users; however, it does affect which methods throw certain SQLException objects.
While it is possible to run SQL directly with Statement, you shouldn’t.PreparedStatement is far superior for the following reasons:
1. Performance: In most programs, you run similar queries multiple times. When you use PreparedStatement, the database software often devises a plan to run the query well and remembers it.
2. Security: You are protected against an attack called SQL injection when using a PreparedStatement correctly
3. Readability: It’s nice not to have to deal with string concatenation in building a query string with lots of parameters.
4. Future use: Even if your query is being run only once or doesn’t have any parameters,you should still use a PreparedStatement. That way, future editors of the code won’t add a variable and have to remember to change to PreparedStatement then.

`CallableStatement prepareCall(String sql)`: Creates a CallableStatement object for calling database stored procedures. The CallableStatement object provides methods for setting up its IN and OUT parameters, and methods for executing the call to a stored procedure.Result sets created using the returned CallableStatement object will by default be type TYPE_FORWARD_ONLY and have a concurrency level of CONCUR_READ_ONLY. The holdability of the created result sets can be determined by calling getHoldability.
Note: This method is optimized for handling stored procedure call statements. Some drivers may send the call statement to the database when the method prepareCall is done; others may wait until the CallableStatement object is executed. This has no direct effect on users; however, it does affect which method throws certain SQLExceptions.

`String nativeSQL(String sql)`: Converts the given SQL statement into the system's native SQL grammar. A driver may convert the JDBC SQL grammar into its system's native SQL grammar prior to sending it. This method returns the native form of the statement that the driver would have sent.

SQL data definition language (DDL) and update statements can be executed using executeUpdate(String sql), and an SQL query statement can be executed using executeQuery(String sql). The result of the query is returned in ResultSet.
The object used for executing a static SQL statement to db server for execution and returning the results it produces.By default, only one ResultSet object per Statement object can be open at the same time. Therefore, if the reading of one ResultSet object is interleaved with the reading of another, each must have been generated by different Statement objects. All execution methods in the Statement interface implicitly close a current ResultSet object of the statement if an open one exists.


**Modifying Data**:- `Update, Insert and Delete Data`:- To modify data in database,you use the *executeUpdate* method of Statement object to execute SQL statements that add,update and delete data.Since this method has been part of Java since 1.0 of JDBC,it should work for all JDBC drivers.The method takes the SQL statement to run as a parameter. It returns the number of rows that were inserted, deleted, or changed.
The `executeUpdate` method is older method that works with most JDBC Drivers.Although there are some newer methods that require less SQL code,they may not work properly with all JDBC drivers.The executeUpdate returns an int value that identifies the number of records affected by SQL statement.When you work with the executeUpdate method, you just pass an SQL statement to the database.


```java
//Adding a Record
String query = "INSERT INTO Product (ProductCode, ProductDescription, ProductPrice) " +
               "VALUES (' " + product.getCode() + " ', " + " ' " product.getDescription() + " ', " +  " ' " product.getPrice() + " ')";
Statement statement = connection.createStatement();
int rowCount = statement.executeUpdate(query);

// Update a record
String query = "UPDATE Product SET " + "ProductCode = '" + product.getCode() + "', " + "ProductDescription = '" + product.getDescription() + " ', " + 
        "ProductPrice = '" + product.getPrice() + " '" +
        "WHERE ProductCode = '" + product.getCode() + "'";
Statement statement = connection.createStatement();
int rowCount = statement.executeUpdate(query);

// Delete a record
String query = "DELETE FROM Product " + "WHERE ProductCode = ' " + productCode +  "'";
Statement statement = connection.createStatement();
int rowCount = statement.executeUpdate(query);
```

- `Executing a PreparedStatement`:- Now that we have a PreparedStatement, we can run the SQL statement. The method for running SQL varies depending on what kind of SQL statement it is. Remember that you aren’t expected to be able to read SQL, but you do need to know what the first keyword means.
Result of prepared statememt is the same each time the query is executed,even though the product code changes each time based on parameter value sent to SQL statement.In contrast, if you don't use a prepared statement,the database server treats each statement as new statement,which degrades database performance.

```java
//Adding a Record
String query = "INSERT INTO Product (ProductCode, ProductDescription, ProductPrice) VALUES (?, ?, ?)";
PreparedStatement ps = connection.prepareStatement(query);
ps.setString(1, product.getCode());
ps.setString(2, product.getDescription());
ps.setString(3, product.getPrice());
ps.executeUpdate();

// Update a record
String query = "UPDATE Product SET ProductCode = ? ProductDescription = ? ProductPrice = ? WHERE ProductCode = ?";
PreparedStatement ps = connection.prepareStatement(query);
ps.setString(1, product.getCode());
ps.setString(2, product.getDescription());
ps.setString(3, product.getPrice());
ps.setString(4, product.getCode());
ps.executeUpdate();

// Delete a record
String query = "DELETE FROM Product WHERE ProductCode = ? ";
PreparedStatement ps = connection.prepareStatement(query);
ps.setString(1 ,productCode)
ps.executeUpdate();
```


`Generated Keys and Batch Operations`:- In production code, inserts often need generated primary keys. Use `RETURN_GENERATED_KEYS` and read with `getGeneratedKeys()`. For high-volume writes, use `addBatch()` and `executeBatch()` to reduce round trips.

```java
String sql = "INSERT INTO post(title, slug, date, time_to_read, tags) VALUES (?, ?, ?, ?, ?)";
try (PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS)) {
    ps.setString(1, post.title());
    ps.setString(2, post.slug());
    ps.setDate(3, java.sql.Date.valueOf(post.date()));
    ps.setInt(4, post.timeToRead());
    ps.setString(5, post.tags());
    ps.executeUpdate();
    try (ResultSet keys = ps.getGeneratedKeys()) {
        if (keys.next()) {
            long generatedId = keys.getLong(1);
        }
    }
}
```

Batch performance notes:
- Run batches inside a transaction.
- Use moderate batch sizes (for example 100 to 1000).
- For very large imports, stream records instead of loading all rows in memory.

**Retrieving Data**:- Once you connect to a database, you're ready to retrieve data.To retrieve data in database,you use the *executeQuery* method of Statement object to execute SQL statements that retrieves data.

```java
Statement statement = connection.createStatement();
String sql = "SELECT UserID FROM Users WHERE Email = 'collins@gmail.com'";
ResultSet userID = statement.executeQuery(sql);//Resultset with one row and column
ResultSet products = statement.executeQuery("SELECT * FROM Products");//Mulitple rows and columns

String query = "SELECT ProductCode, ProductDescription, ProductPrice FROM Product WHERE ProductCode = ?";
PreparedStatement ps = connection.prepareStatement(query);
ps.setString(1 ,productCode)
ResultSet product = ps.executeQuery();
```

`ResultSet`: A table of data representing a database result set, which is usually generated by executing a statement that queries the database.When working with a ResultSet, most of the time, you will write a loop to look at each row.
A ResultSet object maintains a cursor pointing to its current row of data. Initially the cursor is positioned before the first row. Then, you can use the methods of ResultSet object to move the cursor.The next method moves the cursor to the next row, and because it returns false when there are no more rows in the ResultSet object, it can be used in a while loop to iterate through the result set.
A default ResultSet object is not updatable and has a cursor that moves forward only. Thus, you can iterate through it only once and only from the first row to the last row. It is possible to produce ResultSet objects that are scrollable and/ or updatable.

1. next() - Moves the cursor to the next row in result set.
2. last() - Moves the cursor to the last row in result set.
3. close() - Releases the result set's resources.
4. getRow() - returns an int value that identifies the current row of the result set.

On the first loop iteration, rs.next() returns true, and the cursor moves to point to the first row of data. On the second loop iteration, rs.next() returns true again, and the cursor moves to point to the second row of data. The next call to rs.next() returns false. The cursor advances past the end of the data. The false signifies that there is no more data available to get.

```java
while(products.next()){
    //statement to process each record.
}
```

When the cursor is positioned on the row that you want to get data from,you can use the methods getXXXX(int columnIndex) or getXXXX(String columnName).

```java
String code = products.getString(1);
String description = products.getString(2);
double price = products.getDouble(3);

String code = products.getString("code");
String description = products.getString("description");
double price = products.getDouble("price");

Product product = new Product(products.getString(1), products.getString(2),products.getDouble(3));
```

Processing Data with execute() - There’s a third method called execute() that can run either a query or an update. It returns a boolean so that we know whether there is a ResultSet. That way, we can call the proper method to get more detail. The pattern looks like this:

```java
boolean isResultSet = ps.execute();
if (isResultSet) {
    try (ResultSet rs = ps.getResultSet()) {
        System.out.println("ran a query");
    }
} else {
int result = ps.getUpdateCount();
System.out.println("ran an update");
}
```

If the PreparedStatement refers to sql that is a SELECT, the boolean is true, and we can get the ResultSet. If it is not a SELECT, we can get the number of rows updated.

`Fetch Size, Timeouts, Cancellation, and Exception Codes`:- For large reads and resilient operations, tune statement behavior and inspect error metadata.

```java
PreparedStatement ps = connection.prepareStatement("SELECT id, title FROM post");
ps.setFetchSize(500);
ps.setQueryTimeout(10);

try (ResultSet rs = ps.executeQuery()) {
    while (rs.next()) {
        // process rows
    }
} catch (SQLException ex) {
    String sqlState = ex.getSQLState();
    int vendorCode = ex.getErrorCode();
    System.err.println("SQLState=" + sqlState + ", vendorCode=" + vendorCode);
}
```

Cancellation can be triggered with `Statement.cancel()` (typically from another thread). SQLState and vendor error code values help classify retryable versus non-retryable failures.


**Database Metadata**:- The database metadata such as database URL, username, JDBC driver name can be obtained using the DatabaseMetaData interface and result set metadata such as table
column count and column names can be obtained using the ResultSetMetaData interface.
BSAQWZS XC 
JDBC provides the DatabaseMetaData interface for obtaining database-wide information,and the ResultSetMetaData interface for obtaining information on a specific ResultSet.


**Controlling Data with Transactions**:- Until now, any changes we made to the database took effect right away. A commit is like saving a file.However, you can change this behavior to control commits yourself. A transaction is when one or more statements are grouped with the final results committed or rolled back. Rollback is like closing a file without saving. All the changes from the start of the transaction are discarded.

```java
conn.setAutoCommit(false);
conn.rollback();
```

We turn off autocommit mode and declare that we will handle transactions ourselves. Most databases support disabling autocommit mode. If a database does not, it will throw a SQLException

`Bookmarking with Savepoints`:- You can use savepoints to have more control of the rollback point.

```java
conn.setAutoCommit(false);
Savepoint sp1 = conn.setSavepoint();
// database code
Savepoint sp2 = conn.setSavepoint("second savepoint");
// database code
conn.rollback(sp2);
// database code
conn.rollback(sp1);
```

You can only use savepoints when you are controlling the transaction.The name is optional and typically included in the toString() if you print the savepoint reference.

Connection APIs for transactions:-
- setAutoCommit(boolean b) - Sets mode for whether to commit right away.
- commit() - Saves data in database.
- rollback() - Gets rid of statements already made.
- rollback(Savepoint sp) - Goes back to state at Savepoint
- setSavepoint() - Creates bookmark.
- setSavepoint(String name)- Creates bookmark with name.

`Isolation Levels and Trade-Offs`:- Choose the lowest isolation level that preserves correctness for your use case.

- `READ_UNCOMMITTED` - fastest, allows dirty reads.
- `READ_COMMITTED` - common default; prevents dirty reads.
- `REPEATABLE_READ` - stable row reads, with higher locking cost.
- `SERIALIZABLE` - strongest consistency, highest contention risk.

```java
conn.setAutoCommit(false);
conn.setTransactionIsolation(Connection.TRANSACTION_READ_COMMITTED);
// transactional work
conn.commit();
```

Practical rule: start with `READ_COMMITTED`, increase isolation only for proven consistency anomalies, then reassess latency and lock behavior.


**Closing Database Resources**:- Resource Management:-The try-with-resources statement ensures that the Connection, PreparedStatement, and ResultSet objects are closed automatically, avoiding resource leaks.
The resources need to be closed in a specific order. The ResultSet is closed first, followed by the PreparedStatement (or CallableStatement) and then the Connection.
While it is a good habit to close all three resources, it isn’t strictly necessary.Closing a JDBC resource should close any resources that it created. In particular, the following are true:
1. Closing a Connection also closes PreparedStatement (or CallableStatement) and ResultSet.
2. Closing a PreparedStatement (or CallableStatement) also closes the ResultSet.

It is important to close resources in the right order. This avoids both resource leaks and exceptions.



Transaction pattern with rollback safety:-

```java
public void transfer(DataSource dataSource, String fromId, String toId, BigDecimal amount) throws SQLException {
    String debitSql = "UPDATE account SET balance = balance - ? WHERE id = ?";
    String creditSql = "UPDATE account SET balance = balance + ? WHERE id = ?";

    Connection conn = dataSource.getConnection();
    try {
        conn.setAutoCommit(false);
        conn.setTransactionIsolation(Connection.TRANSACTION_READ_COMMITTED);

        try (PreparedStatement debit = conn.prepareStatement(debitSql);
             PreparedStatement credit = conn.prepareStatement(creditSql)) {
            debit.setBigDecimal(1, amount);
            debit.setString(2, fromId);
            debit.executeUpdate();

            credit.setBigDecimal(1, amount);
            credit.setString(2, toId);
            credit.executeUpdate();
        }

        conn.commit();
    } catch (SQLException ex) {
        conn.rollback();
        throw ex;
    } finally {
        conn.close();
    }
}
```


Code style for this layer:

```java
String sql = "SELECT id, title FROM post WHERE id = ?";
try (Connection conn = DriverManager.getConnection(url, user, pass);
     PreparedStatement ps = conn.prepareStatement(sql)) {
    ps.setString(1, id);
    try (ResultSet rs = ps.executeQuery()) {
        while (rs.next()) {
            System.out.println(rs.getString("title"));
        }
    }
}
```

```java
@Service
public class JdbcService {

    private final DataSource dataSource;

    public JdbcService(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    public List<Post> findAll() throws SQLException {
        String sql = "select * from Post";
        List<Post> posts = new ArrayList<>();

        try (Connection conn = dataSource.getConnection();
             PreparedStatement preparedStatement = conn.prepareStatement(sql);
             ResultSet rs = preparedStatement.executeQuery()) {

            while (rs.next()) {
                posts.add(new Post(
                        rs.getString("id"),
                        rs.getString("title"),
                        rs.getString("slug"),
                        rs.getDate("date").toLocalDate(),
                        rs.getInt("time_to_read"),
                        rs.getString("tags"),
                        rs.getInt("version")));
            }
        }

        return posts;
    }
}
```

```java
String insertSql = "INSERT INTO post(id, title, slug) VALUES (?, ?, ?)";
try (Connection conn = DriverManager.getConnection(url, user, pass);
     PreparedStatement ps = conn.prepareStatement(insertSql, Statement.RETURN_GENERATED_KEYS)) {
    ps.setString(1, postId);
    ps.setString(2, title);
    ps.setString(3, slug);
    ps.executeUpdate();
}
```

```java
try (Connection conn = DriverManager.getConnection(url, user, pass)) {
    conn.setAutoCommit(false);
    Savepoint savepoint = conn.setSavepoint();

    try (PreparedStatement update = conn.prepareStatement("UPDATE account SET balance = balance - ? WHERE id = ?")) {
        update.setBigDecimal(1, amount);
        update.setString(2, fromId);
        update.executeUpdate();
    }

    conn.commit();
} catch (SQLException ex) {
    // rollback in real code
}
```


--------------


## javax.sql (DataSource and Pooling)

Extends java.sql by adding advanced features for JDBC, focusing on connection pooling and distributed transactions.Provides the API for server side data source access and processing from the JavaTM programming language. This package supplements the java.sql package and, as of the version 1.4 release, is included in the Java Platform, Standard Edition (Java SETM). It remains an essential part of the Java Platform, Enterprise Edition (Java EETM).(https://docs.oracle.com/en/java/javase/21/docs/api/java.sql/javax/sql/package-summary.html)
Applications use the DataSource and RowSet APIs directly, but the connection pooling and distributed transaction APIs are used internally by the middle-tier infrastructure.

The javax.sql package provides for the following:

1. The DataSource interface as an alternative to the DriverManager for establishing a connection with a data source.A factory for managing connections. More robust than DriverManager.(`javax.sql` replaces direct `DriverManager` usage with `DataSource` and pooling support.)`DataSource`, connection pooling, distributed transaction interfaces.
2. Connection pooling and Statement pooling.ConnectionPoolDataSource: Provides connection pooling support.(Pool configuration and operational tuning.)
3. Distributed transactions
4. Rowsets - Easier handling of tabular data with support for disconnected operation.
5. ConnectionPoolDataSource: Provides connection pooling support.

Improvement over `java.sql`:
- Better connection lifecycle management.
- Better scalability under concurrency.
- Externalized connection configuration.

Use Case:

- Applications requiring performance optimizations (via connection pooling).
- Foundation for higher-level frameworks like JPA and Spring Data.

- **Using a DataSource Object to Make a Connection**:- The javax.sql package provides the preferred way to make a connection with a data source. The DriverManager class, the original mechanism, is still valid, and code using it will continue to run. However, the newer DataSource mechanism is preferred because it offers many advantages over the DriverManager mechanism.These are the main advantages of using a DataSource object to make a connection:
    1. Changes can be made to a data source's properties, which means that it is not necessary to make changes in application code when something about the data source or driver changes.(DataSource can be registered with a naming service (like JNDI), allowing you to change database properties without touching your application code.)
    2. Connection and Statement pooling and distributed transactions are available through a DataSource object that is implemented to work with the middle-tier infrastructure.Connections made through the DriverManager do not have connection and statement pooling or distributed transaction capabilities.

A DataSource object can be implemented to work with the middle tier infrastructure so that the connections it produces will be pooled for reuse. An application that uses such a DataSource implementation will automatically get a connection that participates in connection pooling. A DataSource object can also be implemented to work with the middle tier infrastructure so that the connections it produces can be used for distributed transactions without any special coding.
A logical name for the data source is registered with a naming service that uses the Java Naming and Directory InterfaceTM (JNDI) API, usually by a system administrator or someone performing the duties of a system administrator. An application can retrieve the DataSource object it wants by doing a lookup on the logical name that has been registered for it. The application can then use the DataSource object to create a connection to the physical data source it represents.

Driver vendors provide DataSource implementations. A particular DataSource object represents a particular physical data source, and each connection the DataSource object creates is a connection to that physical data source.

```java
private static DataSource getDataSource() {
    MysqlDataSource dataSource = new MysqlDataSource();
    dataSource.setURL("jdbc:mysql://localhost:3306/my_database");
    dataSource.setUser("root");
    dataSource.setPassword("password");
    return dataSource;
}
public static DataSource dataSource(){
    PGSimpleDataSource dataSource = new PGSimpleDataSource();
    dataSource.setURL(JDBC_URL);
    dataSource.setUser(JDBC_USER);
    dataSource.setPassword(JDBC_PASSWORD);
    dataSource.setConnectTimeout(2000);
    return dataSource;
}

Connection connection = dataSource.getConnection()
```

You can replace MysqlDataSource with a third-party library like HikariCP or Apache DBCP for better connection pooling support in production environments. This will make the javax.sql implementation even more efficient.

```java
HikariConfig config = new HikariConfig();
config.setJdbcUrl("jdbc:postgresql://localhost:5432/app");
config.setUsername("app_user");
config.setPassword("secret");
config.setMaximumPoolSize(20);
config.setMinimumIdle(2);

DataSource pooledDataSource = new HikariDataSource(config);
try (Connection conn = dataSource.getConnection()) {
    // normal JDBC work
}

// Close DataSource (optional, typically managed by the application lifecycle)
((HikariDataSource) dataSource).close();
```

**Connection Pooling**:- Connection pooling is a technique used to enhance the performance and scalability of applications that interact with a database. It involves creating and maintaining a pool (a cache) of pre-established database connections that can be reused by the application, instead of creating and closing a new connection each time a database operation is performed.Instead of opening and closing a new physical connection for every single query (which is slow), javax.sql allows for a "pool" of connections that are reused, drastically improving speed.
Opening a connection to a database is a time-consuming process that can degrade an application's performance.As a result,it's a common programming practise to create a collection of Connection objects and store them in another object commonly known as `database connection pool(DBCP)`.Then, the Connection objects in the pool are shared by all users of a web application.This limits the nuber of times that connections are opened as well as total number of Connection objects.
When one of the threads needs to perform a database operation,the thread gets a Connectin object from the ConnectionPool object and uses Connection object to do operation.When it finishes,it returns the Connection object to the pool.

Connection Pooling and Statement Pooling - Connections made via a DataSource object that is implemented to work with a middle tier connection pool manager will participate in connection pooling. This can improve performance dramatically because creating new connections is very expensive. Connection pooling allows a connection to be used and reused, thus cutting down substantially on the number of new connections that need to be created.
Connection pooling is totally transparent. It is done automatically in the middle tier of a Java EE configuration, so from an application's viewpoint, no change in code is required. An application simply uses the DataSource.getConnection method to get the pooled connection and uses it the same way it uses any Connection object.

The classes and interfaces used for connection pooling are:- ConnectionPoolDataSource, PooledConnection, ConnectionEvent, ConnectionEventListener, StatementEvent, StatementEventListener.
The `connection pool manager`, a facility in the middle tier of a three-tier architecture, uses these classes and interfaces behind the scenes. When a ConnectionPoolDataSource object is called on to create a PooledConnection object, the connection pool manager will register as a ConnectionEventListener object with the new PooledConnection object. When the connection is closed or there is an error, the connection pool manager (being a listener) gets a notification that includes a ConnectionEvent object.
If the connection pool manager supports Statement pooling, for PreparedStatements, which can be determined by invoking the method DatabaseMetaData.supportsStatementPooling, the connection pool manager will register as a StatementEventListener object with the new PooledConnection object. When the PreparedStatement is closed or there is an error, the connection pool manager (being a listener) gets a notification that includes a StatementEvent object.

- How Connection Pooling Works
    1. Pool Initialization:- At application startup, a pool of database connections is created and managed by a connection pooling library or framework.
    2. Connection Reuse:- When an application needs to interact with the database, it requests a connection from the pool.The application uses the connection to execute queries or updates.
    3. Connection Return:- After completing its task, the application returns the connection to the pool instead of closing it.The connection is now available for reuse by other parts of the application.
    4. Dynamic Management:- The pool dynamically manages the number of connections based on demand, creating new connections or closing unused ones when necessary.

Benefits of Connection Pooling

- Improved Performance:-Avoids the overhead of repeatedly creating and closing database connections, which can be resource-intensive.
- Reduced Latency:- Connections are readily available in the pool, leading to faster database access.
- Better Resource Utilization:- Limits the number of open connections to the database, preventing overloading.
- Scalability:- Supports high-concurrency environments by efficiently managing database connections.
- Configurable:- Parameters like the maximum number of connections, idle timeout, and connection validation can be tuned based on application requirements.

Key Parameters in Connection Pooling

1. Maximum Connections (maxPoolSize):-The maximum number of connections the pool can hold at a time.
2. Minimum Idle Connections (minIdle):-The minimum number of idle connections that should always be available in the pool.
3. Connection Timeout:-The time an application waits for a connection from the pool before throwing an exception if no connection is available.
4. Idle Timeout:-The time a connection can remain idle in the pool before being closed.
5. Validation Query:-A simple SQL query executed to check if a connection is still valid before it’s handed over to an application.

Pool tuning checklist (production):

1. Keep `maximumPoolSize` aligned with database capacity and concurrent load.
2. Configure `connectionTimeout` for fail-fast behavior on pool exhaustion.
3. Set `maxLifetime` below database/network connection kill thresholds.
4. Tune `idleTimeout` for controlled pool shrink behavior.
5. Enable leak detection in lower environments to catch unclosed connections.

```java
spring.datasource.hikari.maximum-pool-size=20
spring.datasource.hikari.minimum-idle=5
spring.datasource.hikari.connection-timeout=30000
spring.datasource.hikari.idle-timeout=600000
spring.datasource.hikari.max-lifetime=1800000
spring.datasource.hikari.leak-detection-threshold=5000
```

- `Common Connection Pooling Libraries`:- Although you can write code for your own connection pool,this code is already available from third-party sources.As a result,you always want to use a connection pool already developed and tested by someone else.Then,you can install and customize that connection pool so it works with your database.
    - HikariCP:-A lightweight and fast connection pooling library.Highly efficient and widely used in modern applications.
    - Apache DBCP (Database Connection Pooling):-Part of Apache Commons, offering a robust pooling mechanism.
    - C3P0:-A reliable connection pooling library with extensive configuration options.
    - Tomcat JDBC Connection Pool:-A connection pooling implementation provided by the Apache Tomcat project.


**Distributed Transactions** - This allows a single transaction to span multiple databases or resources (e.g., updating a database and sending a message to a queue simultaneously).As with pooled connections, connections made via a DataSource object that is implemented to work with the middle tier infrastructure may participate in distributed transactions. This gives an application the ability to involve data sources on multiple servers in a single transaction.
The classes and interfaces used for distributed transactions are:- XADataSource, XAConnection.These interfaces are used by the transaction manager; an application does not use them directly.

The `XAConnection interface` is derived from the PooledConnection interface, so what applies to a pooled connection also applies to a connection that is part of a distributed transaction. A transaction manager in the middle tier handles everything transparently. The only change in application code is that an application cannot do anything that would interfere with the transaction manager's handling of the transaction. Specifically, an application cannot call the methods Connection.commit or Connection.rollback, and it cannot set the connection to be in auto-commit mode (that is, it cannot call Connection.setAutoCommit(true)).
An application does not need to do anything special to participate in a distributed transaction. It simply creates connections to the data sources it wants to use via the DataSource.getConnection method, just as it normally does. The transaction manager manages the transaction behind the scenes. The `XADataSource interface` creates XAConnection objects, and each XAConnection object creates an XAResource object that the transaction manager uses to manage the connection.

Transactions in pooled connections work the same as normal JDBC transactions, but with one critical constraint:- The connection is reused, so its state must be reset before returning to the pool.

**Rowsets** -  These are enhanced versions of the standard ResultSet. They allow you to work with data even when disconnected from the database and are easier to pass around as JavaBeans.The RowSet interface works with various other classes and interfaces behind the scenes. These can be grouped into three categories.

- `Event Notification`:-
    - RowSetListener`:- A RowSet object is a JavaBeansTM component because it has properties and participates in the JavaBeans event notification mechanism. The RowSetListener interface is implemented by a component that wants to be notified about events that occur to a particular RowSet object. Such a component registers itself as a listener with a rowset via the RowSet.addRowSetListener method.
    When the RowSet object changes one of its rows, changes all of it rows, or moves its cursor, it also notifies each listener that is registered with it. The listener reacts by carrying out its implementation of the notification method called on it.
    - RowSetEvent:- As part of its internal notification process, a RowSet object creates an instance of RowSetEvent and passes it to the listener. The listener can use this RowSetEvent object to find out which rowset had the event.
- `Metadata`:-
    - RowSetMetaData`:- This interface, derived from the ResultSetMetaData interface, provides information about the columns in a RowSet object. An application can use RowSetMetaData methods to find out how many columns the rowset contains and what kind of data each column can contain.
    The RowSetMetaData interface provides methods for setting the information about columns, but an application would not normally use these methods. When an application calls the RowSet method execute, the RowSet object will contain a new set of rows, and its RowSetMetaData object will have been internally updated to contain information about the new columns.
- `The Reader/Writer Facility`:- A RowSet object that implements the RowSetInternal interface can call on the RowSetReader object associated with it to populate itself with data. It can also call on the RowSetWriter object associated with it to write any changes to its rows back to the data source from which it originally got the rows. A rowset that remains connected to its data source does not need to use a reader and writer because it can simply operate on the data source directly.
    - RowSetInternal:- By implementing the RowSetInternal interface, a RowSet object gets access to its internal state and is able to call on its reader and writer. A rowset keeps track of the values in its current rows and of the values that immediately preceded the current ones, referred to as the original values. A rowset also keeps track of (1) the parameters that have been set for its command and (2) the connection that was passed to it, if any. A rowset uses the RowSetInternal methods behind the scenes to get access to this information. An application does not normally invoke these methods directly.
    - RowSetReader:- A disconnected RowSet object that has implemented the RowSetInternal interface can call on its reader (the RowSetReader object associated with it) to populate it with data. When an application calls the RowSet.execute method, that method calls on the rowset's reader to do much of the work. Implementations can vary widely, but generally a reader makes a connection to the data source, reads data from the data source and populates the rowset with it, and closes the connection. A reader may also update the RowSetMetaData object for its rowset. The rowset's internal state is also updated, either by the reader or directly by the method RowSet.execute.
    - RowSetWriter:- A disconnected RowSet object that has implemented the RowSetInternal interface can call on its writer (the RowSetWriter object associated with it) to write changes back to the underlying data source. Implementations may vary widely, but generally, a writer will do the following:
        1. Make a connection to the data source
        2. Check to see whether there is a conflict, that is, whether a value that has been changed in the rowset has also been changed in the data source
        3. Write the new values to the data source if there is no conflict
        4. Close the connection

The RowSet interface may be implemented in any number of ways, and anyone may write an implementation. Developers are encouraged to use their imaginations in coming up with new ways to use rowsets.

```java
CachedRowSet rowSet = RowSetProvider.newFactory().createCachedRowSet();

// Set query and connection
rowSet.setCommand("SELECT id, name, email FROM users");
rowSet.execute(conn);

// Close connection (RowSet is now disconnected)
conn.close();

// Iterate through data
while (rowSet.next()) {
    int id = rowSet.getInt("id");
    String name = rowSet.getString("name");
    String email = rowSet.getString("email");
}

rowSet.absolute(1); // move to first row
rowSet.updateString("name", "Updated Name");
rowSet.updateRow();
```

Types in javax.sql.rowset
- CachedRowSet – disconnected, most used
- JdbcRowSet – connected, like ResultSet
- WebRowSet – XML-based
- FilteredRowSet – filtering capability
- JoinRowSet – join multiple RowSets

Use CachedRowSet for most practical cases where you want reduced DB connection usage and better scalability.

JDBC CRUD with try-with-resources and PreparedStatement:-

```java
public int createProduct(DataSource dataSource, Product product) throws SQLException {
    String sql = "INSERT INTO Product (ProductCode, ProductDescription, ProductPrice) VALUES (?, ?, ?)";
    try (Connection conn = dataSource.getConnection();
         PreparedStatement ps = conn.prepareStatement(sql)) {
        ps.setString(1, product.getCode());
        ps.setString(2, product.getDescription());
        ps.setBigDecimal(3, product.getPrice());
        return ps.executeUpdate();
    }
}

public int updateProduct(DataSource dataSource, Product product) throws SQLException {
    String sql = "UPDATE Product SET ProductDescription = ?, ProductPrice = ? WHERE ProductCode = ?";
    try (Connection conn = dataSource.getConnection();
         PreparedStatement ps = conn.prepareStatement(sql)) {
        ps.setString(1, product.getDescription());
        ps.setBigDecimal(2, product.getPrice());
        ps.setString(3, product.getCode());
        return ps.executeUpdate();
    }
}

public int deleteProduct(DataSource dataSource, String productCode) throws SQLException {
    String sql = "DELETE FROM Product WHERE ProductCode = ?";
    try (Connection conn = dataSource.getConnection();
         PreparedStatement ps = conn.prepareStatement(sql)) {
        ps.setString(1, productCode);
        return ps.executeUpdate();
    }
}
```


## Spring Database

`DAO Support`:- The Data Access Object (DAO) support in Spring is aimed at making it easy to work with data access technologies (such as JDBC, Hibernate, or JPA) in a consistent way. This lets you switch between the aforementioned persistence technologies fairly easily, and it also lets you code without worrying about catching exceptions that are specific to each technology.
Some of the benefits of using Spring DAO are:

1. It makes it easier to work on different data access methods like JDBC, Hibernate etc.
2. It provides a consistent and common way to deal with different data access methods.
3. Spring DAO makes it easier to switch between different data persistence frameworks.
4. No need for catching framework specific exceptions.

`Data-acces Exception`:- Spring provides a convenient translation from technology-specific exceptions like SQLException to its own exception class hierarchy with the DataAccessException as the root exception. These exceptions wrap the original exception so there is never any risk that one might lose any information as to what might have gone wrong.

In addition to JDBC exceptions, Spring can also wrap Hibernate-specific exceptions, converting them from proprietary, checked exceptions (in the case of versions of Hibernate prior to Hibernate 3.0), to a set of focused runtime exceptions (the same is true for JDO and JPA exceptions). This allows one to handle most persistence exceptions, which are non-recoverable, only in the appropriate layers, without having annoying boilerplate catch-and-throw blocks and exception declarations in one’s DAOs. (One can still trap and handle exceptions anywhere one needs to though.)

One way Spring helps you insulate your data-access tier from the rest of your application is by providing a consistent exception hierarchy that’s used across all of its supported persistence options.You can’t do anything with JDBC without being forced to catch SQLException. SQLException means something went wrong while trying to access a database. But there’s little about that exception that tells you what went wrong or how to deal with it.

Some common problems that might cause a SQLException to be thrown include these:
1. The application is unable to connect to the database.
2. The query being performed has errors in its syntax.
3. The tables and/or columns referred to in the query don’t exist.
4. An attempt was made to insert or update values that violate a database constraint.

Many of the problems that trigger a SQLException can’t be remedied in a catch block. Most SQLExceptions that are thrown indicate a fatal condition. If the application can’t connect to the database, that usually means the application will be unable to continue. Likewise, if there are errors in the query, little can be done about it at runtime.Spring JDBC provides a hierarchy of data-access exceptions that solve problems.In contrast to JDBC, Spring provides several data-access exceptions, each descriptive of the problem for which they’re thrown.

Even though Spring’s exception hierarchy is far richer than JDBC’s simple SQLException, it isn’t associated with any particular persistence solution. This means you can count on Spring to throw a consistent set of exceptions, regardless of which persistence provider you choose. This helps to keep your persistence choice confined to the data-access layer.
All of spring exceptions are rooted with DataAccessException. What makes DataAccessException special is that it’s an unchecked exception. In other words, you don’t have to catch any of the data-access exceptions thrown from Spring.

`Annotations used for configuring DAO or Repository classes`:- The best way to guarantee that your Data Access Objects (DAOs) or repositories provide exception translation is to use the @Repository annotation. This annotation also allows the component scanning support to find and configure your DAOs and repositories without having to provide XML configuration entries for them.

```java
@Repository
public class SomeMovieFinder implements MovieFinder {
// ...
}
```

Any DAO or repository implementation will need to access to a persistence resource, depending on the persistence technology used; for example, a JDBC-based repository will need access to a JDBC DataSource; a JPA-based repository will need access to an EntityManager. The easiest way to accomplish this is to have this resource dependency injected using one of the @Autowired,, @Inject, @Resource or @PersistenceContext annotations.

```java
@Repository
public class JpaMovieFinder implements MovieFinder {
    @PersistenceContext
    private EntityManager entityManager;
// ...
}
```

If you are using the classic Hibernate APIs than you can inject the SessionFactory:

```java
@Repository
public class HibernateMovieFinder implements MovieFinder {
    private SessionFactory sessionFactory;
    @Autowired
    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }
// ...
}
```

For typical JDBC support,ou would have the DataSource injected into an initialization method where you would create a JdbcTemplate and other data access support classes like SimpleJdbcCall etc using this DataSource.

```java
@Repository
public class JdbcMovieFinder implements MovieFinder {
    private JdbcTemplate jdbcTemplate;
    @Autowired
    public void init(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }
    // ...
}
```


### Spring JDBC

Introduced in the early Spring Framework days. It handles the "ceremony"—opening/closing connections and translating SQL exceptions into Spring’s Hierarchy.
You only provide the SQL and a RowMapper. It’s still very much "SQL-first."
Spring Boot 3.2 introduced the JdbcClient, a modern, fluent API that makes JdbcTemplate even more readable.

#### Spring JDBC (JdbcTemplate)

The [`JdbcTemplate`](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/jdbc/core/JdbcTemplate.html) can be used directly for many data access purposes, supporting any kind of JDBC Operation. This class simplifies the use of JDBC and helps to avoid common errors. It executes core JDBC workflow, leaving application code to provide SQL and extract results.

- `JdbcTemplate`, `NamedParameterJdbcTemplate`, `RowMapper`.

Improvement over `javax.sql`:
- Same SQL control, less ceremony.
- Consistent exception translation (`DataAccessException`).


`NamedParameterJdbcTemplate, SimpleJdbcInsert, and SimpleJdbcCall`:-

1. `NamedParameterJdbcTemplate` improves readability for SQL with many parameters.
2. `SimpleJdbcInsert` reduces insert boilerplate.
3. `SimpleJdbcCall` simplifies stored procedure calls.


- **JDBC database access**:- You can choose among several approaches to form the basis for your JDBC database access. In addition to three flavors of the JdbcTemplate, a new SimpleJdbcInsert and SimplejdbcCall approach optimizes database metadata, and the RDBMS Object style takes a more object-oriented approach similar to that of JDO Query design.All approaches require a JDBC 2.0-compliant driver, and some advanced features require a JDBC 3.0 driver.
    1. JdbcTemplate is the classic Spring JDBC approach and the most popular. This "lowest level" approach and all others use a JdbcTemplate, this class provides simple access to a database through JDBC and simple indexed-parameter queries.
    2. NamedParameterJdbcTemplate wraps a JdbcTemplate to provide named parameters instead of the traditional JDBC "?" placeholders. This approach provides better documentation and ease of use when you have multiple parameters for an SQL statement.This JDBC template class enables you to perform queries where values are bound to named parameters in SQL, rather than indexed parameters.
    3. SimpleJdbcInsert and SimpleJdbcCall optimize database metadata to limit the amount of necessary configuration. This approach simplifies coding so that you only need to provide the name of the table or procedure and provide a map of parameters matching the column names. This only works if the database provides adequate metadata. If the database doesn’t provide this metadata, you will have to provide explicit configuration of the parameters.
    4. RDBMS Objects including MappingSqlQuery, SqlUpdate and StoredProcedure requires you to create reusable and thread-safe objects during initialization of your data access layer. This approach is modeled after JDO Query wherein you define your query string, declare parameters, and compile the query. Once you do that, execute methods can be called multiple times with various parameter values passed in.
    5. SimpleJdbcTemplate—This version of the JDBC template takes advantage of Java 5 features such as autoboxing, generics, and variable parameter lists to simplify how a JDBC template is used.

In terms of databases, Spring Data JDBC requires a dialect to abstract common SQL functionality over vendor-specific flavours. Spring Data JDBC includes direct support for the following databases:- DB2,H2,HSQLDB,MariaDB,Microsoft SQL Server,MySQL,Oracle,Postgres

- `package hierachry`:- The Spring Framework’s JDBC abstraction framework consists of four different packages, namely core, datasource, object, and support.
    - The org.springframework.jdbc.core package contains the JdbcTemplate class and its various callback interfaces, plus a variety of related classes. A subpackage named org.springframework.jdbc.core.simple contains the SimpleJdbcInsert and SimpleJdbcCall classes. Another subpackage named org.springframework.jdbc.core.namedparam contains the NamedParameterJdbcTemplate class and the related support classes.
    - The org.springframework.jdbc.datasource package contains a utility class for easy DataSource access, and various simple DataSource implementations that can be used for testing and running unmodified JDBC code outside of a Java EE container. A subpackage named org.springfamework.jdbc.datasource.embedded provides support for creating in-memory database instances using Java database engines such as HSQL and H2.
    - The org.springframework.jdbc.object package contains classes that represent RDBMS queries, updates, and stored procedures as thread safe, reusable objects.
    - The org.springframework.jdbc.support package provides SQLException translation functionality and some utility classes. Exceptions thrown during JDBC processing are translated to exceptions defined in the org.springframework.dao package. This means that code using the Spring JDBC abstraction layer does not need to implement JDBC or RDBMS-specific error handling. All translated exceptions are unchecked, which gives you the option of catching the exceptions from which you can recover while allowing other exceptions to be propagated to the caller.


**JDBC templates**:- Spring’s JDBC framework will clean up your JDBC code by shouldering the burden of resource management and exception handling. This leaves you free to write only the code necessary to move data to and from the database.Spring framework provides JdbcTemplate class that contains many convenient methods for regular tasks like- converting data into primitives or objects, executing prepared or callable statements etc.This class makes it very easy to work with database in our Application and it also provides good support for custom error handling in database access code.

*JdbcTemplate*:- Spring JDBC support is rooted in the `JdbcTemplate` class. JdbcTemplate provides a means by which developers can perform SQL operations against a relational database without all the ceremony and boilerplate typically required when working with JDBC.
Although JDBC gives you an API that works closely with your database, you’re responsible for handling everything related to accessing the database. This includes managing database resources and handling exceptions.Much of JDBC code is boilerplate for creating connections and statements and handling exceptions.
The fact is that all that JDBC boilerplate code is important. Cleaning up resources and handling errors is what makes data access robust. Without it, errors would go undetected and resources would be left open, leading to unpredictable code and resource leaks.

The JdbcTemplate class is the central class in the JDBC core package. It handles the creation and release of resources, which helps you avoid common errors such as forgetting to close the connection.It performs the basic tasks of the core JDBC workflow such as statement creation and execution, leaving application code to provide SQL and extract results. The JdbcTemplate class executes SQL queries,update statements and stored procedure calls, performs iteration over ResultSets and extraction of returned parameter values. It also catches JDBC exceptions and translates them to the generic, more informative, exception hierarchy defined in the org.springframework.dao package.It also retrieves Auto-generated Keys.

When you use the JdbcTemplate for your code, you only need to implement callback interfaces,giving them a clearly defined contract. The PreparedStatementCreator callback interface creates a prepared statement given a Connection provided by this class, providing SQL and any necessary parameters. The same is true for the CallableStatementCreator interface, which creates callable statements. The RowCallbackHandler interface extracts values from each row of a ResultSet.

The JdbcTemplate can be used within a DAO implementation through direct instantiation with a DataSource reference, or be configured in a Spring IoC container and given to DAOs as a bean reference.

`Note`:- The DataSource should always be configured as a bean in the Spring IoC container. In the first case the bean is given to the service directly; in the second case it is given to the prepared template.
All SQL issued by this class is logged at the DEBUG level under the category corresponding to the fully qualified class name of the template instance (typically JdbcTemplate, but it may be different if you are using a custom subclass of the JdbcTemplate class).


Examples of JdbcTemplate class usage:-

`Querying (SELECT)`: Some query methods return a single value. To retrieve a count or a specific value from one row, use queryForObject(..).The latter converts the returned JDBC Type to the Java class that is passed in as an argument. If the type conversion is invalid, then an InvalidDataAccessApiUsageException is thrown.

```java
//The following query gets the number of rows in a relation
int rowCount = this.jdbcTemplate.queryForObject("select count(*) from t_actor",Integer.class);

//A simple query using a bind variable:
int countOfActorsNamedJoe = this.jdbcTemplate.queryForObject("select count(*) from t_actor where first_name = ?", Integer.class, "Joe");

//Querying for a String:
String lastName = this.jdbcTemplate.queryForObject("select last_name from t_actor where id = ?",new Object[]{1212L}, String.class);

//Querying and populating a single domain object:
Actor actor = this.jdbcTemplate.queryForObject(
    "select first_name, last_name from t_actor where id = ?",
    new Object[]{1212L},
    new RowMapper<Actor>() {
        public Actor mapRow(ResultSet rs, int rowNum) throws SQLException {
            Actor actor = new Actor();
            actor.setFirstName(rs.getString("first_name"));
            actor.setLastName(rs.getString("last_name"));
            return actor;
    }
});

//Querying and populating a number of domain objects:
List<Actor> actors = this.jdbcTemplate.query(
    "select first_name, last_name from t_actor",
    new RowMapper<Actor>() {
        public Actor mapRow(ResultSet rs, int rowNum) throws SQLException {
            Actor actor = new Actor();
            actor.setFirstName(rs.getString("first_name"));
            actor.setLastName(rs.getString("last_name"));
            return actor;
        }
});
```

If the last two snippets of code actually existed in the same application, it would make sense to remove the duplication present in the two RowMapper anonymous inner classes, and extract them out into a single class (typically a static inner class) that can then be referenced by DAO methods as needed.
For example, it may be better to write the last code snippet as follows:

```java
public List<Actor> findAllActors() {
    return this.jdbcTemplate.query( "select first_name, last_name from t_actor", new ActorMapper());
}

private static final class ActorMapper implements RowMapper<Actor> {
    public Actor mapRow(ResultSet rs, int rowNum) throws SQLException {
        Actor actor = new Actor();
        actor.setFirstName(rs.getString("first_name"));
        actor.setLastName(rs.getString("last_name"));
        return actor;
    }
}
```


In addition to the single result query methods, several methods return a list with an entry for each row that the query returned.The most generic method is queryForList(..) which returns a List where each entry is a Map with each entry in the map representing the column value for that row. If you add a method to the above example to retrieve a list of all the rows.

```java
public List<Map<String, Object>> getList() {
    return this.jdbcTemplate.queryForList("select * from mytable");
}
```


`Updating (INSERT, UPDATE, and DELETE) with JdbcTemplate` - You can use the update(..) method to perform insert, update, and delete operations. Parameter values are usually provided as variable arguments or, alternatively, as an object array.

```java
this.jdbcTemplate.update("insert into t_actor (first_name, last_name) values (?, ?)", "Leonor", "Watling");
this.jdbcTemplate.update("update t_actor set last_name = ? where id = ?","Banjo", 5276L);
this.jdbcTemplate.update("delete from t_actor where id = ?",Long.valueOf(actorId));
```


`Other jdbcTemplate operations`:- You can use the execute(..) method to execute any arbitrary SQL, and as such the method is often used for DDL statements. It is heavily overloaded with variants taking callback interfaces, binding variable arrays, and so on.

```java
this.jdbcTemplate.execute("create table mytable (id integer, name varchar(100))");
```

All that a JdbcTemplate needs in order to do its work is a DataSource. This makes it easy enough to configure a JdbcTemplate bean in Spring with the following @Bean method:

```java
@Bean
public JdbcTemplate jdbcTemplate(DataSource dataSource) {
    return new JdbcTemplate(dataSource);
}
```

The following example invokes a simple stored procedure.

```java
this.jdbcTemplate.update("call SUPPORT.REFRESH_ACTORS_SUMMARY(?)",Long.valueOf(unionId));
```


`Retrieving auto-generated keys`:- An update() convenience method supports the retrieval of primary keys generated by the database. This support is part of the JDBC 3.0 standard.The method takes a PreparedStatementCreator as its first argument, and this is the way the required insert statement is specified. The other argument is a KeyHolder, which contains the generated key on successful return from the update. There is not a standard single way to create an appropriate PreparedStatement (which explains why the method signature is the way it is).

```java
final String INSERT_SQL = "insert into my_test (name) values(?)";
final String name = "Rob";
KeyHolder keyHolder = new GeneratedKeyHolder();
jdbcTemplate.update(
    new PreparedStatementCreator() {
        public PreparedStatement createPreparedStatement(Connection connection) throws SQLException {
            PreparedStatement ps = connection.prepareStatement(INSERT_SQL, new String[] {"id"});
            ps.setString(1, name);
            return ps;
    }
},
keyHolder);
```


Instances of the JdbcTemplate class are threadsafe once configured. This is important because it means that you can configure a single instance of a JdbcTemplate and then safely inject this shared reference into multiple DAOs (or repositories). The JdbcTemplate is stateful, in that it maintains a reference to a DataSource, but this state is not conversational state.
A common practice when using the JdbcTemplate class (and the associated NamedParameterJdbcTemplate classes) is to configure a DataSource in your Spring configuration file, and then dependency-inject that shared DataSource bean into your DAO classes; the JdbcTemplate is created in the setter for the DataSource. This leads to DAOs that look in part like the following:

```java
public class JdbcCorporateEventDao implements CorporateEventDao {
    private JdbcTemplate jdbcTemplate;
    public void setDataSource(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }
    // JDBC-backed implementations of the methods on the CorporateEventDao follow...
}
```

The corresponding configuration might look like this.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xmlns:context="http://www.springframework.org/schema/context"
xsi:schemaLocation="
http://www.springframework.org/schema/beans
http://www.springframework.org/schema/beans/spring-beans.xsd
http://www.springframework.org/schema/context
http://www.springframework.org/schema/context/spring-context.xsd">
<bean id="corporateEventDao" class="com.example.JdbcCorporateEventDao">
<property name="dataSource" ref="dataSource"/>
</bean>
<bean id="dataSource" class="org.apache.commons.dbcp.BasicDataSource" destroy-method="close">
<property name="driverClassName" value="${jdbc.driverClassName}"/>
<property name="url" value="${jdbc.url}"/>
<property name="username" value="${jdbc.username}"/>
<property name="password" value="${jdbc.password}"/>
</bean>
<context:property-placeholder location="jdbc.properties"/>
</beans>
```

An alternative to explicit configuration is to use component-scanning and annotation support for dependency injection. In this case you annotate the class with @Repository (which makes it a candidate for component-scanning) and annotate the DataSource setter method with @Autowired.

```java
@Repository
public class JdbcCorporateEventDao implements CorporateEventDao {
private JdbcTemplate jdbcTemplate;
@Autowired
public void setDataSource(DataSource dataSource) {
this.jdbcTemplate = new JdbcTemplate(dataSource);
}
// JDBC-backed implementations of the methods on the CorporateEventDao follow...
}
```

The corresponding XML configuration file would look like the following:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xmlns:context="http://www.springframework.org/schema/context"
xsi:schemaLocation="
http://www.springframework.org/schema/beans
http://www.springframework.org/schema/beans/spring-beans.xsd
http://www.springframework.org/schema/context
http://www.springframework.org/schema/context/spring-context.xsd">
<!-- Scans within the base package of the application for @Component classes to configure as beans
-->
<context:component-scan base-package="org.springframework.docs.test" />
<bean id="dataSource" class="org.apache.commons.dbcp.BasicDataSource" destroy-method="close">
<property name="driverClassName" value="${jdbc.driverClassName}"/>
<property name="url" value="${jdbc.url}"/>
<property name="username" value="${jdbc.username}"/>
<property name="password" value="${jdbc.password}"/>
</bean>
<context:property-placeholder location="jdbc.properties"/>
</beans>
```

If you are using Spring’s JdbcDaoSupport class, and your various JDBC-backed DAO classes extend from it, then your sub-class inherits a setDataSource(..) method from the JdbcDaoSupport class.You can choose whether to inherit from this class. The JdbcDaoSupport class is provided as a convenience only.
Regardless of which of the above template initialization styles you choose to use (or not), it is seldom necessary to create a new instance of a JdbcTemplate class each time you want to execute SQL.Once configured, a JdbcTemplate instance is threadsafe. You may want multiple JdbcTemplate instances if your application accesses multiple databases, which requires multiple DataSources, and subsequently multiple differently configured JdbcTemplates.


Here, the DataSource is injected via constructor injection. The dataSource bean being referenced can be any implementation of javax.sql.DataSource.
Now you can wire the jdbcTemplate bean into your repository and use it to access the database.


```java
@Repository
public class JdbcSpitterRepository implements SpitterRepository {
   private JdbcOperations jdbcOperations;

   @Inject
   public JdbcSpitterRepository(JdbcOperations jdbcOperations) {
      this.jdbcOperations = jdbcOperations;
    }
...
}
```

Here JdbcSpitterRepository is annotated with @Repository, which qualifies it to be automatically created by component-scanning. And its constructor is annotated with @Inject so that when it’s created, it will be given a JdbcOperations object. JdbcOperations is an interface defining operations implemented by JdbcTemplate. By injecting a JdbcOperations instead of the concrete JdbcTemplate, JdbcSpitterRepository is able to remain loosely coupled to JdbcTemplate via the JdbcOperations interface.

Just because you don’t see a lot of boilerplate code doesn’t mean it’s not there. It’s cleverly hidden in the JDBC template class. When the update() method is called, JdbcTemplate gets a connection, creates a statement, and executes the insert SQL.
Internally, JdbcTemplate catches any SQLExceptions that may be thrown. It then translates the generic SQLException into one of the more specific data-access exceptions.Because Spring’s data-access exceptions are all runtime exceptions, you don’t have to catch them.


*NamedParameterJdbcTemplate*:- The NamedParameterJdbcTemplate class adds support for programming JDBC statements using named parameters, as opposed to programming JDBC statements using only classic placeholder ( '?') arguments. The NamedParameterJdbcTemplate class wraps a JdbcTemplate, and delegates to the wrapped JdbcTemplate to do much of its work. This section describes only those areas of the NamedParameterJdbcTemplate class that differ from the JdbcTemplate itself; namely, programming JDBC statements using named parameters.

```java
// some JDBC-backed DAO class...
private NamedParameterJdbcTemplate namedParameterJdbcTemplate;
public void setDataSource(DataSource dataSource) {
    this.namedParameterJdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
}
public int countOfActorsByFirstName(String firstName) {
    String sql = "select count(*) from T_ACTOR where first_name = :first_name";
    SqlParameterSource namedParameters = new MapSqlParameterSource("first_name", firstName);
    return this.namedParameterJdbcTemplate.queryForObject(sql, namedParameters, Integer.class);
}
```


*SimpleJdbc classes*:- The SimpleJdbcInsert and SimpleJdbcCall classes provide a simplified configuration by taking advantage of database metadata that can be retrieved through the JDBC driver. This means there is less to configure up front, although you can override or turn off the metadata processing if you prefer to provide all the details in your code.


**Embedded database support**: The org.springframework.jdbc.datasource.embedded package provides support for embedded Java database engines. Support for HSQL, H2, and Derby is provided natively. You can also use an extensible API to plug in new embedded database types and DataSource implementations.
An embedded database is useful during the development phase of a project because of its lightweight nature. Benefits include ease of configuration, quick startup time, testability, and the ability to rapidly evolve SQL during development.

`Creating an embedded database instance using Spring XML`:- If you want to expose an embedded database instance as a bean in a Spring ApplicationContext, use the embedded-database tag in the spring-jdbc namespace:

```xml
<jdbc:embedded-database id="dataSource">
<jdbc:script location="classpath:schema.sql"/>
<jdbc:script location="classpath:test-data.sql"/>
</jdbc:embedded-database>
```

The preceding configuration creates an embedded HSQL database populated with SQL from schema.sql and testdata.sql resources in the classpath. The database instance is made available to the Spring container as a bean of type javax.sql.DataSource. This bean can then be injected into data access objects as needed.

`Creating an embedded database instance programmatically`:- The EmbeddedDatabaseBuilder class provides a fluent API for constructing an embedded database programmatically. Use this when you need to create an embedded database instance in a standalone environment, such as a data access object unit test:

```java
EmbeddedDatabaseBuilder builder = new EmbeddedDatabaseBuilder();
EmbeddedDatabase db = builder.setType(H2).addScript("my-schema.sql").addScript("my-test-data.sql").build();
// do stuff against the db (EmbeddedDatabase extends javax.sql.DataSource)
db.shutdown()
```

- Spring JDBC embedded database support can be extended in two ways:
    - Implement EmbeddedDatabaseConfigurer to support a new embedded database type, such as Apache Derby.
    - Implement DataSourceFactory to support a new DataSource implementation, such as a connection pool, to manage embedded database connections.


`Using HSQL`:- Spring supports HSQL 1.8.0 and above. HSQL is the default embedded database if no type is specified explicitly. To specify HSQL explicitly, set the type attribute of the embedded-database tag to HSQL. If you are using the builder API, call the setType(EmbeddedDatabaseType) method with EmbeddedDatabaseType.HSQL.
`Using H2`:- Spring supports the H2 database as well. To enable H2, set the type attribute of the embedded database tag to H2. If you are using the builder API, call the setType(EmbeddedDatabaseType) method with EmbeddedDatabaseType.H2.
`Using Derby`:- Spring also supports Apache Derby 10.5 and above. To enable Derby, set the type attribute of the embedded-database tag to Derby. If using the builder API, call the setType(EmbeddedDatabaseType) method with EmbeddedDatabaseType.Derby.


*Testing data access logic with an embedded database*:- Embedded databases provide a lightweight way to test data access code. The following is a data access unit test template that uses an embedded database:

```java
public class DataAccessUnitTestTemplate {
    private EmbeddedDatabase db;

    @Before
    public void setUp() {
        // creates an HSQL in-memory database populated from default scripts
        // classpath:schema.sql and classpath:data.sql
        db = new EmbeddedDatabaseBuilder().addDefaultScripts().build();
    }

    @Test
    public void testDataAccess() {
        JdbcTemplate template = new JdbcTemplate(db);
        template.query(...);
    }

    @After
    public void tearDown() {
        db.shutdown();
    }
}
```

*Testing with Testcontainers*:- Embedded databases are useful for fast feedback, but Testcontainers gives production-like integration confidence using real database engines.

```java
@Testcontainers
@SpringBootTest
class PostRepositoryIntegrationTest {

    @Container
    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>("postgres:16-alpine");

    @DynamicPropertySource
    static void configure(DynamicPropertyRegistry registry) {
        registry.add("spring.datasource.url", postgres::getJdbcUrl);
        registry.add("spring.datasource.username", postgres::getUsername);
        registry.add("spring.datasource.password", postgres::getPassword);
    }
}
```

This approach catches SQL dialect differences, transaction behavior differences, and migration regressions early.

**Logging**:- Spring Data JDBC does little to no logging on its own. Instead, the mechanics of JdbcTemplate to issue SQL statements provide logging. Thus, if you want to inspect what SQL statements are run, activate logging for Spring’s NamedParameterJdbcTemplate or MyBatis.
You may also want to set the logging level to DEBUG to see some additional information. To do so, edit the application.properties file to have the following content:

```java
logging.level.org.springframework.jdbc=DEBUG
```

All SQL issued by this class is logged at the DEBUG level under the category corresponding to the fully qualified class name of the template instance (typically JdbcTemplate, but it may be different if you use a custom subclass of the JdbcTemplate class).


```java
String sql = "SELECT * FROM post WHERE slug = :slug AND time_to_read <= :maxRead";
MapSqlParameterSource params = new MapSqlParameterSource()
    .addValue("slug", slug)
    .addValue("maxRead", 10);
List<Post> result = namedParameterJdbcTemplate.query(sql, params, rowMapper);
```

```java
@Service
public class PostService {

    private final JdbcTemplate jdbcTemplate;

    public PostService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<Post> findAll() {
        return jdbcTemplate.query("select * from Post",(rs,rowNum) -> new Post(
                rs.getString("id"),
                rs.getString("title"),
                rs.getString("slug"),
                rs.getDate("date").toLocalDate(),
                rs.getInt("time_to_read"),
                rs.getString("tags")
        ));
    }
}

```

Code style for this layer:

```java
String sql = "SELECT id, title, slug, date, time_to_read, tags FROM post WHERE id = ?";
return jdbcTemplate.query(sql, rowMapper, id).stream().findFirst();
```

```java
@Service
@Transactional
public class JdbcTemplatePostService implements PostService {

    private static final Logger log = LoggerFactory.getLogger(JdbcTemplatePostService.class);
    private final JdbcTemplate jdbcTemplate;

    public JdbcTemplatePostService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    private final RowMapper<Post> rowMapper = (rs, rowNum) -> new Post(
            rs.getString("id"),
            rs.getString("title"),
            rs.getString("slug"),
            rs.getDate("date").toLocalDate(),
            rs.getInt("time_to_read"),
            rs.getString("tags")
    );

    public List<Post> findAll() {
        var sql = "SELECT id,title,slug,date,time_to_read,tags FROM post";
        return jdbcTemplate.query(sql, rowMapper);
    }

    public Optional<Post> findById(String id) {
        var sql = "SELECT id,title,slug,date,time_to_read,tags FROM post WHERE id = ?";
        try {
            return Optional.ofNullable(jdbcTemplate.queryForObject(sql, rowMapper, id));
        } catch (DataAccessException ex) {
            log.info("Post not found: " + id);
            return Optional.empty();
        }
    }

    public void create(Post post) {
        String sql = "INSERT INTO post(id,title,slug,date,time_to_read,tags) values(?,?,?,?,?,?)";
        int insert = jdbcTemplate.update(sql, post.id(), post.title(), post.slug(), post.date(), post.timeToRead(), post.tags());
        if (insert == 1) {
            log.info("New Post Created: " + post.title());
        }
    }

    public void batchCreate(Collection<Post> posts, int batchSize) {
        String sql = "INSERT INTO post(id,title,slug,date,time_to_read,tags) values(?,?,?,?,?,?)";
        int[][] rowsCreated = jdbcTemplate.batchUpdate(sql,
                posts,
                batchSize,
                (ps, argument) -> {
                    ps.setString(1, argument.id());
                    ps.setString(2, argument.title());
                    ps.setString(3, argument.slug());
                    ps.setDate(4, java.sql.Date.valueOf(argument.date()));
                    ps.setInt(5, argument.timeToRead());
                    ps.setString(6, argument.tags());
                });

        log.info("Batch Update Created: " + rowsCreated[0].length + " rows");
    }

    public void update(Post post, String id) {
        String sql = "update post set title = ?, slug = ?, date = ?, time_to_read = ?, tags = ? where id = ?";
        int update = jdbcTemplate.update(sql, post.title(), post.slug(), post.date(), post.timeToRead(), post.tags(), id);
        if (update == 1) {
            log.info("Post Updated: " + post.title());
        }
    }

    public void delete(String id) {
        String sql = "delete from post where id = ?";
        int delete = jdbcTemplate.update(sql, id);
        if (delete == 1) {
            log.info("Post Deleted: " + id);
        }
    }
}
```

```java
RowMapper<Post> rowMapper = (rs, rowNum) -> new Post(
    rs.getString("id"),
    rs.getString("title"),
    rs.getString("slug"),
    rs.getDate("date").toLocalDate(),
    rs.getInt("time_to_read"),
    rs.getString("tags")
);

List<Post> posts = jdbcTemplate.query("SELECT id, title, slug, date, time_to_read, tags FROM post", rowMapper);

int deleted = jdbcTemplate.update("DELETE FROM post WHERE id = ?", id);
```

```java
MapSqlParameterSource params = new MapSqlParameterSource()
    .addValue("slug", slug)
    .addValue("maxRead", 10);
List<Post> result = namedParameterJdbcTemplate.query(
    "SELECT * FROM post WHERE slug = :slug AND time_to_read <= :maxRead",
    params,
    rowMapper
);
```


#### Spring JDBC Client (JdbcClient)

Spring Boot 3.2 adds auto-configuration for Spring Framework's new `JdbcClient`. This is a fluent JdbcClient with common JDBC query and update operations, supporting JDBC-style positional as well as Spring-style named parameters with a convenient unified facade for JDBC PreparedStatement execution.
The [`JdbcClient`](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/jdbc/core/simple/JdbcClient.html) is a A fluent JdbcClient with common JDBC query and update operations, supporting JDBC-style positional as well as Spring-style named parameters with a convenient unified facade for JDBC PreparedStatement execution.

Delegates to JdbcTemplate and NamedParameterJdbcTemplate. For complex JDBC operations — for example, batch inserts and stored procedure calls — you may use those lower-level template classes directly, or alternatively SimpleJdbcInsert and SimpleJdbcCall.

An example for retrieving a query result as a java.util.Optional:

```java
Optional<Integer> value = client.sql("SELECT AGE FROM CUSTOMER WHERE ID = :id")
    .param("id", 3)
    .query(Integer.class)
    .optional();
```


JdbcClient create/update with named params

```java
public int create(Post post) {
    return jdbcClient.sql("""
            INSERT INTO post(id, title, slug, date, time_to_read, tags)
            VALUES (:id, :title, :slug, :date, :timeToRead, :tags)
            """)
            .param("id", post.id())
            .param("title", post.title())
            .param("slug", post.slug())
            .param("date", post.date())
            .param("timeToRead", post.timeToRead())
            .param("tags", post.tags())
            .update();
}
```

------------------

Create a `Post` record that will represent a single post in our application: 

```java
public record Post(
        String id,
        String title,
        String slug,
        LocalDate date,
        int timeToRead,
        String tags
) {}
```

```java
public interface PostService {
    List<Post> findAll();
    Optional<Post> findById(String id);
    void create(Post post);
    void update(Post post, String id);
    void delete(String id);

}
```


```java
@Service
@Transactional
public class JdbcTemplatePostService implements PostService {

    private static final Logger log = LoggerFactory.getLogger(JdbcTemplatePostService.class);
    private final JdbcTemplate jdbcTemplate;

    public JdbcTemplatePostService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    RowMapper<Post> rowMapper = (rs, rowNum) -> new Post(
            rs.getString("id"),
            rs.getString("title"),
            rs.getString("slug"),
            rs.getDate("date").toLocalDate(),
            rs.getInt("time_to_read"),
            rs.getString("tags")
    );

    public List<Post> findAll() {
        var sql = "SELECT id,title,slug,date,time_to_read,tags FROM post";
        return jdbcTemplate.query(sql, rowMapper);
    }

    public Optional<Post> findById(String id) {
        var sql = "SELECT id,title,slug,date,time_to_read,tags FROM post WHERE id = ?";
        Post post = null;
        try {
            post = jdbcTemplate.queryForObject(sql,rowMapper,id);
        } catch (DataAccessException ex) {
            log.info("Post not found: " + id);
        }

        return Optional.ofNullable(post);
    }

    public void create(Post post) {
        String sql = "INSERT INTO post(id,title,slug,date,time_to_read,tags) values(?,?,?,?,?,?)";
        int insert = jdbcTemplate.update(sql,post.id(),post.title(),post.slug(),post.date(),post.timeToRead(),post.tags());
        if(insert == 1) {
            log.info("New Post Created: " + post.title());
        }
    }

    public void batchCreate(Collection<Post> posts, int batchSize) {
        String sql = "INSERT INTO post(id,title,slug,date,time_to_read,tags) values(?,?,?,?,?,?)";
        int[][] rowsCreated = jdbcTemplate.batchUpdate(sql,
                posts,
                batchSize,
                (ps, argument) -> {
                    ps.setString(1, argument.id());
                    ps.setString(2, argument.title());
                    ps.setString(3, argument.slug());
                    ps.setDate(4, java.sql.Date.valueOf(argument.date()));
                    ps.setInt(5, argument.timeToRead());
                    ps.setString(6, argument.tags());
                });

        log.info("Batch Update Created: " + rowsCreated[0].length + " rows");
    }

    public void update(Post post, String id) {
        String sql = "update post set title = ?, slug = ?, date = ?, time_to_read = ?, tags = ? where id = ?";
        int update = jdbcTemplate.update(sql,post.title(),post.slug(),post.date(),post.timeToRead(),post.tags(),id);
        if(update == 1) {
            log.info("Post Updated: " + post.title());
        }
    }

    public void delete(String id) {
        String sql = "delete from post where id = ?";
        int delete = jdbcTemplate.update(sql,id);
        if(delete == 1) {
            log.info("Post Deleted: " + id);
        }
    }

}
```

```java
@Service
@Transactional
public class JdbcClientPostService implements PostService {

    private static final Logger log = LoggerFactory.getLogger(JdbcClientPostService.class);
    private final JdbcClient jdbcClient;

    public JdbcClientPostService(JdbcClient jdbcClient) {
        this.jdbcClient = jdbcClient;
    }

    public List<Post> findAll() {
        return jdbcClient.sql("SELECT id,title,slug,date,time_to_read,tags FROM post")
                .query(Post.class)
                .list();
    }

    @Override
    public Optional<Post> findById(String id) {
        return jdbcClient.sql("SELECT id,title,slug,date,time_to_read,tags FROM post WHERE id = :id")
                .param("id", id)
                .query(Post.class)
                .optional();
    }

    @Override
    public void create(Post post) {
        var updated = jdbcClient.sql("INSERT INTO post(id,title,slug,date,time_to_read,tags) values(?,?,?,?,?,?)")
                .params(List.of(post.id(),post.title(),post.slug(),post.date(),post.timeToRead(),post.tags()))
                .update();

        Assert.state(updated == 1, "Failed to create post " + post.title());
    }

    @Override
    public void update(Post post, String id) {
        var updated = jdbcClient.sql("update post set title = ?, slug = ?, date = ?, time_to_read = ?, tags = ? where id = ?")
                .params(List.of(post.title(), post.slug(), post.date(), post.timeToRead(), post.tags(), id))
                .update();

        Assert.state(updated == 1, "Failed to update post " + post.title());
    }

    @Override
    public void delete(String id) {
        var updated = jdbcClient.sql("delete from post where id = :id")
                .param("id", id)
                .update();

        Assert.state(updated == 1, "Failed to delete post " + id);
    }
}
```


### Refactored: Exception handling helper for SQLState-aware retries

```java
public boolean isRetryable(SQLException ex) {
    String sqlState = ex.getSQLState();
    if (sqlState == null) return false;
    // 40xxx is often transaction rollback class (vendor dependent)
    return sqlState.startsWith("40");
}
```


---------------

### Spring Data JDBC

Spring Data JDBC provide repository(CrudRepository) support for the Java Database Connectivity (JDBC) APIs. It eases development of applications with a consistent programming model that need to access SQL data sources.You just define an interface; Spring generates the standard CRUD SQL for you.
Spring Data JDBC, part of the larger Spring Data family(released around 2018), makes it easy to implement JDBC based repositories. This module deals with enhanced support for JDBC based data access layers. It makes it easier to build Spring powered applications that use data access technologies.

1. Helps in keeping the database code clean and simple.
2. Prevents problems that result from a failure to close database resources.
3. Provides a layer of useful exceptions on top of the error messages given by different database servers.
4. Based on Spring’s AOP module.
5. Provides transaction management services for objects in a Spring application.

Spring Data JDBC aims to be much simpler conceptually, by embracing the following design decisions:

1. If you load an entity, SQL statements get run. Once this is done, you have a completely loaded entity. No lazy loading or caching is done.
2. If you save an entity, it gets saved. If you do not, it does not. There is no dirty tracking and no session.

JDBC lets you work with data at a much lower level than the persistence frameworks. You’re in full control of how your application reads and manipulates data. This includes allowing you to access and manipulate individual columns in a database. This fine-grained approach to data access comes in handy in applications, such as reporting applications, where it doesn’t make sense to organize the data into objects just to then unwind it back into raw data.
Spring’s JDBC framework will clean up your JDBC code by shouldering the burden of resource management and exception handling. This leaves you free to write only the code necessary to move data to and from the database.The Spring Framework takes care of all the low-level details that can make JDBC such a tedious API to develop with.i.e Open the Connection,Prepare and execute the statement, set up the loop to iterate through the results(if any),process the exception, handle transactions , close the connection,statement and resultset.
Unlike JPA, there is no lazy loading, no caching, and no dirty tracking. When you call a method, the SQL runs immediately. It's predictable and transparent.

The Spring Data JDBC project applies core Spring concepts to the development of solutions that use JDBC databases aligned with Domain-driven design principles. We provide a “template” as a high-level abstraction for storing and querying aggregates.

`Advanced Spring Data JDBC Notes`:-

1. Spring Data JDBC is aggregate-oriented, not a full ORM.
2. No lazy loading and no dirty-checking session, so behavior is predictable.
3. Save operations can rewrite aggregate state, so define aggregate boundaries carefully.
4. Use callbacks and auditing for cross-cutting domain rules.


In terms of databases, Spring Data JDBC requires a dialect to abstract common SQL functionality over vendor-specific flavours. Spring Data JDBC includes direct support for the following databases:- DB2, H2,HSQLDB,MariaDB,Microsoft SQL Server,MySQL,Oracle,PostgreSQL.If you use a different database then your application won’t start up.

`Dialects` - Spring Data JDBC uses implementations of the interface JdbcDialect to encapsulate behavior that is specific to a database or its JDBC driver. By default, the AbstractJdbcConfiguration attempts to determine the dialect from the database configuration by obtaining a connection and registering the correct JdbcDialect. You override AbstractJdbcConfiguration.jdbcDialect(NamedParameterJdbcOperations) to customize dialect selection.
If you use a database for which no dialect is available, then your application won’t start up. In that case, you’ll have to ask your vendor to provide a JdbcDialect implementation. Alternatively, you can implement your own JdbcDialect.

Dialects are resolved by DialectResolver from a JdbcOperations instance, typically by inspecting Connection.getMetaData().
You can let Spring auto-discover your JdbcDialect by registering a class that implements org.springframework.data.jdbc.core.dialect.DialectResolver$JdbcDialectProvider through META-INF/spring.factories. DialectResolver discovers dialect provider implementations from the class path using Spring’s SpringFactoriesLoader. To do so:
- Implement your own JdbcDialect.
- Implement a JdbcDialectProvider returning the JdbcDialect.
- Register the provider by creating a spring.factories resource under META-INF and perform the registration by adding a line org.springframework.data.jdbc.core.dialect.DialectResolver$JdbcDialectProvider=<fully qualified name of your JdbcDialectProvider>`.


**Repository Abstraction**:-

- *CrudRepository<T, ID>*:- Extends Repository.Provides basic CRUD operations (e.g., save(), findById(), delete()).Interface for generic CRUD operations on a repository for a specific type.Built-in CRUD Methods:-Repositories come with built-in methods for standard CRUD operations:
    1. save(T entity) - Saves or updates an entity.
    2. findById(ID id)- Retrieves an entity by its primary key.
    3. findAll() - Retrieves all entities.
    4. deleteById(ID id)- Deletes an entity by its primary key.
    5. delete(T entity) - Deletes a specific entity.
    6. count() - Returns the count of entities.
    7. existsById(ID id) - Checks if an entity exists by its primary key.


```java
public interface CrudRepository<T, ID> extends Repository<T, ID> {
    <S extends T> S save(S entity);
    <S extends T> Iterable<S> saveAll(Iterable<S>);
    Optional<T> findById(ID id);
    Iterable<T> findAll();
    Iterable<T> findAllById(Iterable<ID>);
    boolean existsById(ID id);
    long count();
    void deleteById(ID);
    void delete(T entity);
    void deleteAllById(Iterable<? extends ID>);
    void deleteAll(Iterable<? extends T>);
    void deleteAll();
}
```

- *ListCrudRepository*:- 

```java
public interface ListCrudRepository<T, ID> extends CrudRepository<T, ID> {<S extends T> List<S> saveAll(Iterable<S>);
    List<T> findAll();
    List<T> findAllById(Iterable<ID>);
}
```

`CrudRepository save() New`:- We can use the CrudRepository.save() method to either create or update our @Entity instance in the database.
In this specific example, we call save() with a new object. The JPA provider can tell this is a new object because the generated primary key value is currently unassigned. An object type has a default value of null in Java. Our primitive int type has a default value of 0 in Java.

```java
songsRepo.save(song);
```

The following shows the SQL that is generated by JPA provider to add the new object to the database.

```sql
select next value for reposongs_song_sequence
insert into reposongs_song (artist, released, title, id) values (?, ?, ?, ?)
```

`CrudRepository save() Update Existing`:- The CrudRepository.save() method is an "upsert".
1. if the @Entity is new, the repository will call EntityManager.persist 
2. if the @Entity exists, the repository will call EntityManager.merge to update the database.


```java
Song updatedSong = Song.builder()
    .id(song.getId())
    .title("new title")
    .artist(song.getArtist())
    .build();
//when persisting update
songsRepo.save(updatedSong);
```

The following snippet shows the SQL executed by the repository/EntityManager during the save() — where it must first determine if the object exists in the database before calling SQL INSERT or UPDATE.

```sql
select ... from reposongs_song song0_ where song0_.id=?
binding parameter [1] as [INTEGER] - [1]

update reposongs_song set artist=?, released=?, title=? where id=? ②
binding parameter [1] as [VARCHAR] - [The Beach Boys]
binding parameter [2] as [DATE] - [2010-06-07]
binding parameter [3] as [VARCHAR] - [new title]
binding parameter [4] as [INTEGER] - [1]
```

EntityManager.merge() performs SELECT to determine if assigned primary key exists and loads that state.
EntityManager.merge() performs UPDATE to modify state of existing @Entity in database.


**Configuration**:- The Spring Data JDBC repositories support can be activated by an annotation through Java configuration, as the following example shows:

```java
@Configuration
@EnableJdbcRepositories //@EnableJdbcRepositories creates implementations for interfaces derived from Repository.                                                      
class ApplicationConfig extends AbstractJdbcConfiguration { //AbstractJdbcConfiguration provides various default beans required by Spring Data JDBC.

    //Creates a DataSource connecting to a database. This is required by the following two bean methods.
    @Bean
    DataSource dataSource() {                                                         
        EmbeddedDatabaseBuilder builder = new EmbeddedDatabaseBuilder();
        return builder.setType(EmbeddedDatabaseType.HSQL).build();
    }

    //Creates the NamedParameterJdbcOperations used by Spring Data JDBC to access the database.
    @Bean
    NamedParameterJdbcOperations namedParameterJdbcOperations(DataSource dataSource) { 
        return new NamedParameterJdbcTemplate(dataSource);
    }

    //Spring Data JDBC utilizes the transaction management provided by Spring JDBC.
    @Bean
    TransactionManager transactionManager(DataSource dataSource) {                     
        return new DataSourceTransactionManager(dataSource);
    }
}
```

The configuration class in the preceding example sets up an embedded HSQL database by using the EmbeddedDatabaseBuilder API of spring-jdbc. The DataSource is then used to set up NamedParameterJdbcOperations and a TransactionManager. We finally activate Spring Data JDBC repositories by using the @EnableJdbcRepositories. If no base package is configured, it uses the package in which the configuration class resides. Extending AbstractJdbcConfiguration ensures various beans get registered. Overwriting its methods can be used to customize the setup (see below).

This configuration can be further simplified by using Spring Boot. With Spring Boot a DataSource is sufficient once the starter spring-boot-starter-data-jdbc is included in the dependencies. Everything else is done by Spring Boot.


**Persisting Entities**:- Saving an aggregate can be performed with the CrudRepository.save(…) method. If the aggregate is new, this results in an insert for the aggregate root, followed by insert statements for all directly or indirectly referenced entities.

`Loading Aggregates`:- Spring Data JDBC offers two ways how it can load aggregates:

1. The traditional and before version 3.2 the only way is really simple: Each query loads the aggregate roots, independently if the query is based on a CrudRepository method, a derived query or an annotated query. If the aggregate root references other entities those are loaded with separate statements.
2. Spring Data JDBC 3.2 allows the use of Single Query Loading. With this an arbitrary number of aggregates can be fully loaded with a single SQL query. This should be significantly more efficient, especially for complex aggregates, consisting of many entities.Currently, Single Query Loading is restricted in different ways:
    - The aggregate must not have nested collections, this includes Map. The plan is to remove this constraint in the future.
    - The aggregate must not use AggregateReference or embedded entities. The plan is to remove this constraint in the future.
    - The database dialect must support it. Of the dialects provided by Spring Data JDBC all but H2 and HSQL support this. H2 and HSQL don’t support analytic functions (aka windowing functions).
    - It only works for the find methods in CrudRepository, not for derived queries and not for annotated queries. The plan is to remove this constraint in the future.
    - Single Query Loading needs to be enabled in the JdbcMappingContext, by calling setSingleQueryLoadingEnabled(true).

If any condition is not fulfilled Spring Data JDBC falls back to the default approach of loading aggregates.

`ID Generation`:- Spring Data uses identifier properties to identify entities. That is, looking these up or creating statements targeting a particular row. The ID of an entity must be annotated with Spring Data’s @Id annotation.
When your database has an auto-increment column for the ID column, the generated value gets set in the entity after inserting it into the database.If you annotate the identifier property additionally with @Sequence a database sequence will be used to obtain values for the id if the underlying Dialect supports sequences.

Otherwise, Spring Data does not attempt to insert values of identifier columns when the entity is new and the identifier value defaults to its initial value. That is 0 for primitive types and null if the identifier property uses a numeric wrapper type such as Long.

One important constraint is that, after saving an entity, the entity must not be new anymore. Note that whether an entity is new is part of the entity’s state. With auto-increment columns, this happens automatically, because the ID gets set by Spring Data with the value from the ID column.

Primary key properties (annotated with @Id) may also be annotated with @Sequence. The presence of the @Sequence annotation indicates that the property’s initial value should be obtained from a database sequence at the time when the object is saved. The ability of the database to generate a sequence is determined by the used database dialect. In the absence of the @Sequence annotation, it is assumed that the value for the corresponding column is automatically generated by the database upon row insertion.
The following dialects support Sequences:- H2,HSQL,PostgreSQL,DB2,Oracle,Microsoft SQL Server.Note that MySQL does not support sequences.


`Template API`:- As an alternative to repositories Spring Data JDBC offers the JdbcAggregateTemplate as a more direct means to load and persist entities in a relational database. To a large extent, repositories use JdbcAggregateTemplate to implement their features.

1. Accessing the JdbcAggregateTemplate - JdbcAggregateTemplate is intended to be used as a Spring bean. If you have set up your application to include Spring Data JDBC, you can configure a dependency on JdbcAggregateTemplate in any Spring bean, and the Spring Framework injects a properly configured instance.
This includes fragments you use to implement custom methods for your Spring Data Repositories, letting you to use JdbcAggregateTemplate to customize and extend your repositories.
2. Persisting - JdbcAggregateTemplate offers three types of methods for persisting entities: save, insert, and update. Each comes in two flavors: Operating on single aggregates, named exactly as mentioned above, and with an All suffix operation on an Iterable.save does the same as the method of same name in a repository.insert and update skip the test if the entity is new and assume a new or existing aggregate as indicated by their names.
3. Querying - JdbcAggregateTemplate offers a considerable array of methods for querying aggregates and about collections of aggregates. There is one type of method that requires special attention. That’s the methods taking a Query as an argument. They allow the execution of programmatically constructed queries, as follows:- template.findOne(query(where("name").is("Gandalf")), Person.class);
    - The Query returned by the query method defines the list of columns to select, a where clause (through a CriteriaDefinition), and specification of limit and offset clauses.
    - The Criteria class, of which where is a static member, provides implementations of org.springframework.data.relational.core.query.CriteriaDefinition[], which represent the where-clause of the query.


`Optimistic Locking`:- Spring Data supports optimistic locking by means of a numeric attribute that is annotated with @Version on the aggregate root. Whenever Spring Data saves an aggregate with such a version attribute two things happen:

1. The update statement for the aggregate root will contain a where clause checking that the version stored in the database is actually unchanged.
2. If this isn’t the case an OptimisticLockingFailureException will be thrown.

Also, the version attribute gets increased both in the entity and in the database so a concurrent action will notice the change and throw an OptimisticLockingFailureException if applicable as described above.This process also applies to inserting new aggregates, where a null or 0 version indicates a new instance and the increased instance afterwards marks the instance as not new anymore, making this work rather nicely with cases where the id is generated during object construction for example when UUIDs are used.

During deletes the version check also applies but no version is increased.


`Example`:- First you will need to update the `Post` Record with the appropriate Spring Data annotations: 

```java
public record Post(
        @Id
        String id,
        String title,
        String slug,
        LocalDate date,
        int timeToRead,
        String tags,
        @Version
        Integer version
) {

}
```

Create `PostRepository.java` which will give us all of the CRUD functionality we need out of the box. You can also use Query Derivation to define your own custom queries. 

```java
public interface PostRepository extends ListCrudRepository<Post,Integer> {
    Optional<Post> findBySlug(String slug);
}
```

To complete the Spring Data example you can update the `CommandLineRunner`:

```java
@SpringBootApplication
public class Application {

    private static final Logger log = LoggerFactory.getLogger(Application.class);

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Bean
    CommandLineRunner commandLineRunner(PostRepository repository) {
        return args -> {
            repository.save(new Post("1234","Hello, World!","hello-world", LocalDate.now(),10,"Spring Boot",null));
            List<Post> posts = repository.findAll();
            System.out.println(posts);

            Optional<Post> hello = repository.findBySlug("hello-world");
            System.out.println(hello);
        };
    }

}
```


```java
@Component
class PostBeforeConvertCallback implements BeforeConvertCallback<Post> {
    @Override
    public Post onBeforeConvert(Post aggregate) {
        return new Post(
                aggregate.id(),
                aggregate.title(),
                aggregate.slug().toLowerCase(),
                aggregate.date(),
                aggregate.timeToRead(),
                aggregate.tags(),
                aggregate.version()
        );
    }
}
```

Enable auditing with `@EnableJdbcAuditing`, then use `@CreatedDate` and `@LastModifiedDate` in your aggregate fields.

Spring Data JDBC aggregate with auditing fields:-

```java
@Table("post")
public record PostAggregate(
        @Id String id,
        String title,
        String slug,
        LocalDate date,
        int timeToRead,
        String tags,
        @CreatedDate Instant createdAt,
        @LastModifiedDate Instant updatedAt,
        @Version Integer version
) {
}
```

**Logging**:- Spring Data JDBC does little to no logging on its own. Instead, the mechanics of JdbcTemplate to issue SQL statements provide logging. Thus, if you want to inspect what SQL statements are run, activate logging for Spring’s NamedParameterJdbcTemplate or MyBatis.
You may also want to set the logging level to DEBUG to see some additional information. To do so, edit the application.properties file to have the following content:

logging.level.org.springframework.jdbc=DEBUG


**Schema Creation**:- When working with SQL databases, the schema is an essential part. Spring Data JDBC supports a wide range of schema options yet when starting with a domain model it can be challenging to come up with an initial domain model. To assist you with a code-first approach, Spring Data JDBC ships with an integration to create database change sets using Liquibase.


**Transactionality**:- The methods of CrudRepository instances are transactional by default. For reading operations, the transaction configuration readOnly flag is set to true. All others are configured with a plain @Transactional annotation so that default transaction configuration applies If you need to tweak transaction configuration for one of the methods declared in a repository, redeclare the method in your repository interface,


--------------


## Migrations

To bring your database changes in line with other development efforts,keep them in under version control and enable automatic safe deployments.
Database schema changes can differ from application changes.When you introduce new columns in existing tables in database you can't just redeploy new schema.Existing data in production means State.Drop Create approach is definitely not valid instead you take approach that respects existing data and incrementally add schema changes called `Daabase migration approach`.
This approach e.g when adding new column instead of drop-table scripts you'd have alter table add column scripts that will make sure you keep integrity of existing data but also tracks what migrations you already run.
Database migrations is a way to manage changes to your database schema over time.
1. Helps in tracking changes.
2. Database deployments
3. Recovery when using rollbacks.

You can use transactions for multiple changes.

`Migration and Operations Guidance`:-

1. Use Flyway or Liquibase to version schema changes.
2. Use `EXPLAIN` or `EXPLAIN ANALYZE` for query tuning.
3. Track SQL duration, slow query logs, and connection pool saturation.
4. Enforce least privilege with separate runtime and migration users.

`Migration Template`:- As for migration template in liquibase you have explicit file that serves as a ledger of changes called changelog and unit of changes it contains are called change sets.Flyway uses implicit approach where you use file naming schemes to tell the tool that this script should be run as a unit of change.
To mark whether a change has been run and provide deployment information, both tools create tables the first time you run migration in certain databse and store change name along with checksum of change content.By default liquibase creates database_change_log table and flyway flyway_schema_history table.

The database migration template files are just plain text files and can be stored in your source control alongside your application code.They can be integrated in your CI/CD pipeline bringing in line your database changes with the rest of the automatic deployment process.

DB migrations wer primarily design for relational databases that have schema.

**Flyway**:-

Flyway will look for a db folder called migration in resources i.e `db/migration` folder.

```java
spring.flyway.enabled=true
spring.flyway.locations=classpath:db/migration
spring.flyway.baseline-on-migrate=true
spring.flyway.user=
spring.flyway.password=
spring.flyway.baseline-description=init
spring.flyway.baseline-version=0
```

Common migration naming:
- `V1__init.sql`
- `V2__add_post_index.sql`
- `V3__add_version_column.sql`

```sql
-- V1__init_database.sql
create table payment (
   id                       bigserial not null,
   order_id                 bigint,
   payment_fee              decimal(19,2),
   amount                   decimal(19,2),
   payment_method           varchar(255),
   payment_status           varchar(255),
   created_on               timestamp(6),
   last_modified_on         timestamp(6),
   checkout_id              varchar(255),
   gateway_transaction_id   varchar(255),
   failure_message          varchar(255),
   PRIMARY KEY (id)
);

-- V1__add_payment_provider_table.sql
create table payment_provider (
   id                           varchar(255) not null,
   is_enabled                   boolean,
   name                         varchar(255),
   configure_url                varchar(255),
   landing_view_component_name  varchar(255),
   additional_settings          text,
   PRIMARY KEY (id)
);

```


**Liquibase**:-
