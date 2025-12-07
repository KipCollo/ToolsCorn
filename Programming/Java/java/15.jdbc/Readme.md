# JDBC (Java Database Connectivity)

The Java Database Connectivity (JDBC) API provides universal data access from the Java programming language. Using the JDBC API, you can access virtually any data source, from relational databases to spreadsheets and flat files.

A relational database is accessed through Structured Query Language (SQL). SQL is a programming language used to interact with database records. JDBC works by sending a
SQL command to the database and then processing the response.

To write Java code that works with a database,you can use JDBC.The JDBC API is a set of Java interfaces and classes used to write Java programs for accessing and manipulating relational databases. Since a JDBC driver serves as the interface to facilitate communications between JDBC and a proprietary database, JDBC drivers are database specific and are normally provided by the database vendors.
You need MySQL JDBC drivers to access the MySQL database, and Oracle JDBC drivers to access the Oracle database.

The core JDBC API is stored in in the java.sql package,which comes as part of the Standard Edition of Java.
The JDBC API is a Java application program interface to generic SQL databases that enables Java developers to develop DBMS-independent Java applications using a uniform interface.The JDBC API consists of classes and interfaces for establishing connections with databases, sending SQL statements to databases, processing the results of SQL statements, and obtaining database metadata. Four key interfaces are needed to develop any database application using Java: Driver, Connection, Statement, and ResultSet. These interfaces define a framework for generic SQL database access. The JDBC API defines these interfaces, and the JDBC driver vendors provide the implementation for the interfaces. Programmers use these interfaces.

## Java.sql Package

Provides the API for accessing and processing data stored in a data source (usually a relational database) using the JavaTM programming language.
The java.sql package contains API for the following:

1. Making a connection with a database via the DriverManager facility
    - DriverManager class -- makes a connection with a driver
    - SQLPermission class -- provides permission when code running within a Security Manager, such as an applet, attempts to set up a logging stream through the DriverManager
    - Driver interface -- provides the API for registering and connecting drivers based on JDBC technology ("JDBC drivers"); generally used only by the DriverManager class
    - DriverPropertyInfo class -- provides properties for a JDBC driver; not used by the general user
2. Sending SQL statements to a database
    - Statement -- used to send basic SQL statements
    - PreparedStatement -- used to send prepared statements or basic SQL statements (derived from Statement)
    - CallableStatement -- used to call database stored procedures (derived from PreparedStatement)
    - Connection interface -- provides methods for creating statements and managing connections and their properties
    - Savepoint -- provides savepoints in a transaction
3. Retrieving and updating the results of a query
    - ResultSet interface
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
    - DatabaseMetaData interface -- provides information about the database
    - ResultSetMetaData interface -- provides information about the columns of a ResultSet object
    - ParameterMetaData interface -- provides information about the parameters to PreparedStatement commands
7. Exceptions
    - SQLException -- thrown by most methods when there is a problem accessing data and by some methods for other reasons
    - SQLWarning -- thrown to indicate a warning
    - DataTruncation -- thrown to indicate that data may have been truncated
    - BatchUpdateException -- thrown to indicate that not all commands in a batch update executed successfully

A JDBC application loads an appropriate driver using the Driver interface, connects to the database using the Connection interface, creates and executes SQL statements using the Statement interface, and processes the result using the ResultSet interface if the statements return results. Note that some statements, such as SQL data definition statements and SQL data modification statements, do not return results.

## Database Drivers

Before you can connect to database,you must make a database driver avalable to your application.There are 4 JDBC database drivers you can use:-

1. Type 1 - `A JDBC-ODBC bridge driver` converts JDBC calls into ODBC calls tha access the DBMS protocol.The ODBC driver must be installed on the client machine.
2. Type 2 - A `native protocl partly Java driver` converts JDBC calls in the native DBMS protocol.Since this conversion takes place on the client, some binary code must be installed on client machine.
3. Type 3 - A `net protocol all Java driver` converts JDBC calls into a net protocl that's independent of any native DBMS protocol.Then,middleware software running on a server converts the net protocol to the native DBMS protocol.Since this conversion takes place on server side,no installation is required on client machine.
4. Type 4 - A `native protocol all Java driver` converts JDBC calls into a native DBMS protocol.Since this conversion takes place on server side,no installation is required on client machine.

If you want to connect to a MYSQL database,you use the type-4 driver named Connector/J.To install the database driver,you must add the JAR file that contains the database driver to the classpath.

If you are working with older version of Java,though,you need to use the `forName` method of Class to explicitly load the driver before you call getConnection method.

```java
//loading database driver prior to JDBC 4.0
Class.forName("com.mysql.jdbc.Driver")
```

## Connecting to Database

To connect to a database, use the static method getConnection(databaseURL) in the DriverManager class, as follows:

```java
Connection connection = DriverManager.getConnection(databaseURL);
```

where databaseURL is the unique identifier of the database on the Internet.

`DriverManager` class:- It is the basic service for managing a set of JDBC drivers.
- Before you can access or modify the data in database,you must connect to the database.To get a connection to the database,you use the**getConnection()** method of the **DriverManager** class to return a Connection object.This method requires three arguements:-
    1. URL of the database
    2. username
    3. Password

Building a JDBC URL:- To access a website, you need to know its URL. To access your email, you need to know your username and password. JDBC is no different. To access a database, you need to know this information about it.

Unlike web URLs, JDBC URLs have a variety of formats. They have three parts in common. The first piece is always the same. It is the protocol jdbc.The second part is the subprotocol, which is the name of the database, such as hsqldb, mysql, or postgres. The third part is the subname, which is a database-­specific format. Colons (:) separate the three parts.

The subname typically contains information about the database such as its location and/or name. The syntax varies. You need to know about the three main parts. You don’t
need to memorize the subname formats.

Examples:-

```java
jdbc:postgresql://localhost/zoo
jdbc:oracle:thin:@123.123.123.123:1521:zoo
jdbc:mysql://localhost:3306
jdbc:mysql://localhost:3306/zoo?profileSQL=true
```

NOTE:- Port is optional when using the default location.

Since getConnection method of DriverManager class throws an SQLException, you need to handle this exception whenever you connect to database.With JDBC 4.0 you can use an enhanced for statement to loop through any exceptions that are nested within SQLException object.

The DriverManager class uses the factory pattern, which means that you call a static method to get a Connection rather than calling a constructor.The factory pattern means that you can get any implementation of the interface when calling the method.
The nice thing about the factory pattern is that it takes care of the logic of creating a class for you. You don’t need to know the name of the class that implements Connection, and you don’t need to know how it is created. You are probably a bit curious, though.

DriverManager looks through any drivers it can find to see whether they can handle the JDBC URL. If so, it creates a Connection using that Driver. If not, it gives up and throws a SQLException.

Since the getConnection method of DriverManager class throws an SQLException,you need to handle this exception whenever you connect to database.

`Connection Interface`: A connection (session) with a specific database. SQL statements are executed and results are returned within the context of a connection.
A Connection object's database is able to provide information describing its tables, its supported SQL grammar, its stored procedures, the capabilities of this connection, and so on. This information is obtained with the `getMetaData` method.

Note: When configuring a Connection, JDBC applications should use the appropriate Connection method such as setAutoCommit or setTransactionIsolation. Applications should not invoke SQL commands directly to change the connection's configuration when there is a JDBC method available. By default a Connection object is in auto-commit mode, which means that it automatically commits changes after executing each statement. If auto-commit mode has been disabled, the method commit must be called explicitly in order to commit changes; otherwise, database changes will not be saved.


```java

try {

        //loading database driver prior to JDBC 4.0
        Class.forName("com.mysql.jdbc.Driver")

        String dbURL = "jdbc:mysql://localhost:3306/my_database"; //MySQL
        String url ="jdbc:postgresql://localhost:5432/dbName";//PostgreSQL
        String username = "root";
        String password = "password";

        Connection conn = DriverManager.getConnection(dbURL,username,password);
}
catch (SQLException e){

    for(Throwable t: e)
        t.printStackTrace();
}
```


## STATEMENTS

If a Connection object can be envisioned as a cable linking your program to a database, an object of Statement can be viewed as a cart that delivers SQL statements for execution by the database and brings the result back to the program. Once a Connection object is created,you can create statements for executing SQL statements as follows:

```java
Statement statement = connection.createStatement();
```

Once a connection to a particular database is established, it can be used to send SQL statements from your program to the database. The Statement interface is used to execute static SQL statements that don’t contain any parameters. The PreparedStatement interface, extending Statement, is used to execute a precompiled SQL statement with or without parameters.
Since the SQL statements are precompiled, they are efficient for repeated executions.A PreparedStatement object is created using the prepareStatement method in the
Connection interface.

`Statement createStatement()` - Creates a Statement object for sending SQL statements to the database. SQL statements without parameters are normally executed using Statement objects. If the same SQL statement is executed many times, it may be more efficient to use a PreparedStatement object.
Result sets created using the returned Statement object will by default be type TYPE_FORWARD_ONLY and have a concurrency level of CONCUR_READ_ONLY. The holdability of the created result sets can be determined by calling getHoldability.

`PreparedStatement prepareStatement(String sql)`: Creates a PreparedStatement object for sending parameterized SQL statements to the database.
A SQL statement with or without IN parameters can be pre-compiled and stored in a PreparedStatement object. This object can then be used to efficiently execute this statement multiple times.
Note: This method is optimized for handling parametric SQL statements that benefit from precompilation. If the driver supports precompilation, the method prepareStatement will send the statement to the database for precompilation. Some drivers may not support precompilation. In this case, the statement may not be sent to the database until the PreparedStatement object is executed. This has no direct effect on users; however, it does affect which methods throw certain SQLException objects.
Result sets created using the returned PreparedStatement object will by default be type TYPE_FORWARD_ONLY and have a concurrency level of CONCUR_READ_ONLY. The holdability of the created result sets can be determined by calling getHoldability.

Each time a JAva applicatin sends a new SQL statement to the database server,the server checks the statement for syntax errors,prepares a plan for executing the statement, and executes the statement.If same statement is sent again,though,the database server checks to see whether it has already received one exactly like that.If so,server doesn't have to check its syntax and prepare an execution plan for it so the server just executes it.This improves performance of database operations.

To take advantage of this database feature,Java provides for use of **prepared statements**.This feature lets you send statements to the database server that get executed repeatedly by accepting parameter values sent to it.That improves databse performance because the database server only has to check the syntax plan for each statement.

`CallableStatement prepareCall(String sql)`: Creates a CallableStatement object for calling database stored procedures. The CallableStatement object provides methods for setting up its IN and OUT parameters, and methods for executing the call to a stored procedure.
Note: This method is optimized for handling stored procedure call statements. Some drivers may send the call statement to the database when the method prepareCall is done; others may wait until the CallableStatement object is executed. This has no direct effect on users; however, it does affect which method throws certain SQLExceptions.
Result sets created using the returned CallableStatement object will by default be type TYPE_FORWARD_ONLY and have a concurrency level of CONCUR_READ_ONLY. The holdability of the created result sets can be determined by calling getHoldability.

`String nativeSQL(String sql)`: Converts the given SQL statement into the system's native SQL grammar. A driver may convert the JDBC SQL grammar into its system's native SQL grammar prior to sending it. This method returns the native form of the statement that the driver would have sent.

SQL data definition language (DDL) and update statements can be executed using executeUpdate(String sql), and an SQL query statement can be executed using executeQuery(String sql). The result of the query is returned in ResultSet.

The object used for executing a static SQL statement to db server for execution and returning the results it produces.By default, only one ResultSet object per Statement object can be open at the same time. Therefore, if the reading of one ResultSet object is interleaved with the reading of another, each must have been generated by different Statement objects. All execution methods in the Statement interface implicitly close a current ResultSet object of the statement if an open one exists.

Statement is an interface that both PreparedStatement and CallableStatement extend. A Statement and a PreparedStatement are similar to each other, except that a PreparedStatement takes parameters, while a Statement does not. A Statement just executes whatever SQL query you give it.

While it is possible to run SQL directly with Statement, you shouldn’t.PreparedStatement is far superior for the following reasons:

1. Performance: In most programs, you run similar queries multiple times. When you use PreparedStatement, the database software often devises a plan to run the query well
and remembers it.
2. Security: You are protected against an attack called SQL injection when using a PreparedStatement correctly
3. Readability: It’s nice not to have to deal with string concatenation in building a query string with lots of parameters.
4. Future use: Even if your query is being run only once or doesn’t have any parameters,you should still use a PreparedStatement. That way, future editors of the code won’t add a variable and have to remember to change to PreparedStatement then.

- Executing a PreparedStatement:- Now that we have a PreparedStatement, we can run the SQL statement. The method for running SQL varies depending on what kind of SQL statement it is. Remember that you aren’t expected to be able to read SQL, but you do need to know what the first keyword means.

**Modifying Data**:- `Update, Insert and Delete Data`:- To modify data in database,you use the **executeUpdate** method of Statement object to execute SQL statements that add,update and delete data.Since this method has been part of Java since 1.0 of JDBC,it should work for all JDBC drivers.

Let’s start with statements that change the data in a table. Those are SQL statements that begin with DELETE, INSERT, or UPDATE. They typically use a method called executeUpdate().The name is a little tricky because the SQL UPDATE statement is not the only statement that uses this method.
The method takes the SQL statement to run as a parameter. It returns the number of rows that were inserted, deleted, or changed.

When you work with the executeUpdate method, you just pass an SQL statement to the database.

```java
//Adding a Record
String query = "INSERT INTO Product (ProductCode, ProductDescription, ProductPrice) " +
               "VALUES (' " + product.getCode() + " ', " +
                        " ' " product.getDescription() + " ', " + 
                        " ' " product.getPrice() + " ')";
Statement statement = connection.createStatement();
int rowCount = statement.executeUpdate(query);


// Update a record
String query = "UPDATE Product SET " +
        "ProductCode = '" + product.getCode() + "', " + 
        "ProductDescription = '" + product.getDescription() + " ', " + 
        "ProductPrice = '" + product.getPrice() + " '" +
        "WHERE ProductCode = '" + product.getCode() + "'";
Statement statement = connection.createStatement();
int rowCount = statement.executeUpdate(query);


// Delete a record
String query = "DELETE FROM Product " +
                "WHERE ProductCode = ' " + productCode +  "'";
Statement statement = connection.createStatement();
int rowCount = statement.executeUpdate(query);
```


Result of prepared statememt is the same each time the query is executed,even though the product code changes each time based on parameter value sent to SQL statement.In contrast, if you don't use a prepared statement,the database server treats each statement as new statement,which degrades databse performance.

```java
//Adding a Record
String query = "INSERT INTO Product (ProductCode, ProductDescription, ProductPrice) " +
               "VALUES (?, ?, ?)";
PreparedStatement ps = connection.prepareStatement();
ps.setString(1, product.getCode());
ps.setString(2, product.getDescription());
ps.setString(3, product.getPrice());
ps.executeUpdate(query);

// Update a record
String query = "UPDATE Product SET " +
        "ProductCode = ? " + 
        "ProductDescription = ? " + 
        "ProductPrice = ?" +
        "WHERE ProductCode = ?";
PreparedStatement ps = connection.prepareStatement();
ps.setString(1, product.getCode());
ps.setString(2, product.getDescription());
ps.setString(3, product.getPrice());
ps.setString(4, product.getCode());
ps.executeUpdate(query);

// Delete a record
String query = "DELETE FROM Product " +
                "WHERE ProductCode = ? ";
PreparedStatement ps = connection.prepareStatement(query);
ps.setString(1 ,productCode)
ps.executeUpdate(query);


// Return a Result set
String query = "SELECT ProductCode, ProductDescription, ProductPrice " +
        "FROM Product WHERE ProductCode = ?";
PreparedStatement ps = connection.prepareStatement(query);
ps.setString(1 ,productCode)
ResultSet product = ps.executeQuery();
```

The `executeUpdate` method is older method that works with most JDBC Drivers.Although there are some newer methods that require less SQL code,they may not work properly with all JDBC drivers.The executeUpdate returns an int value that identifies the number of records affected by SQL statement.


**Retrieving Data**:- Once you connect to a database, you're ready to retrieve data.To retrieve data in database,you use the **executeQuery** method of Statement object to execute SQL statements that retrieves data.
`Statement`: The object used for executing a static SQL statement and returning the results it produces.

```java
Statement statement = connection.createStatement();
ResultSet userID = statement.executeQuery("SELECT UserID FROM Users WHERE Email = 'collins@gmail.com'");//Resultset with one row and column
ResultSet products = statement.executeQuery("SELECT * FROM Products");//Mulitple rows and columns
```

When a result set is created,the cursor is positioned before the first row.Then, you can use the methods of ResultSet object to move the cursor.

- `ResultSet`: A table of data representing a database result set, which is usually generated by executing a statement that queries the database.
A ResultSet object maintains a cursor pointing to its current row of data. Initially the cursor is positioned before the first row. The next method moves the cursor to the next row, and because it returns false when there are no more rows in the ResultSet object, it can be used in a while loop to iterate through the result set.
A default ResultSet object is not updatable and has a cursor that moves forward only. Thus, you can iterate through it only once and only from the first row to the last row. It is possible to produce ResultSet objects that are scrollable and/ or updatable. The following code fragment, in which con is a valid Connection object, illustrates how to make a result set that is scrollable and insensitive to updates by others, and that is updatable.
1. next() - Moves the cursor to the next row in result set.
2. last() - Moves the cursor to the last row in result set.
3. close() - Releases the result set's resources.
4. getRow() - returns an int value that identifies the current row of the result set.

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


Product product = new Product(products.getString(1),
                                products.getString(2),
                                products.getDouble(3));
```

Processing Data with execute()
There’s a third method called execute() that can run either a query or an update. It returns a boolean so that we know whether there is a ResultSet. That way, we can call the proper method to get more detail. The pattern looks like this:

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
Using the Correct Method What do you think happens if we use the wrong method for a SQL statement? Let’s take a look:

```java
var sql = "SELECT * FROM names";
try (var ps = conn.prepareStatement(sql)) {
}
var result = ps.executeUpdate();
```

Database Connection:-The DriverManager.getConnection() method establishes a connection to the database using the provided JDBC URL, username, and password.
SQL Query Execution:-A PreparedStatement is created to execute the query. It is a safer option as it helps prevent SQL injection.
Result Processing:-The ResultSet object retrieves data returned by the SQL query. Methods like getInt(), getString(), etc., are used to extract column values.
Resource Management:-The try-with-resources statement ensures that the Connection, PreparedStatement, and ResultSet objects are closed automatically, avoiding resource leaks.

NOTE:- JDBC Driver: Ensure the MySQL JDBC driver (mysql-connector-java) is added to your project classpath.

There are five key interfaces of JDBC. The interfaces are declared in the JDK.For example “Collections and Generics,” has interface List and the concrete class ArrayList.
With JDBC, the concrete classes come from the JDBC driver. Each database has a different JAR file with these classes. For example, PostgreSQL’s JAR is called something like postgresql-­9.4–1201.jdbc4.jar. MySQL’s JAR is called something like mysql-­connector-­java-­5.1.36.jar. The exact name depends on the vendor and version of the driver JAR.

This driver JAR contains an implementation of these key interfaces along with a number of other interfaces. The key is that the provided implementations know how to communicate with a database. There are also different types of drivers.

With JDBC, you use only the interfaces in your code and never the implementation classes directly. In fact, they might not even be public classes.

- java.sql package defines collection of interfaces and classes that allows programs to interact with DB:

1. Drivers - Supports creation of data connection.
2. Connection - Rep. connection btwn client & SQL databse server.
3. DatabaseMetaData - Contains info about database server.
4. Statement - Includes methods for executing text queries.
5. PreparedStatement - Rep. precompiled & stored query.
6. CallableStatement - Execute SQL stored procedures.
7. ResultSet - Contains results of execution of select query.
8. ResultSetMetadata  - Contains info about ResultSet, including attribute names and types.

To use the JDBC API with a particular database management system, you need a JDBC technology-based driver to mediate between JDBC technology and the database.Before connecting to db, you must make **database driver** available for your app.

Caution
Do not use a semicolon (;) to end the Oracle SQL command in a Java program. The semicolon may not work with the Oracle JDBC drivers. It does work, however, with the
other drivers used in this book.

Note
The Connection interface handles transactions and specifies how they are processed.
By default, a new connection is in autocommit mode, and all its SQL statements are executed and committed as individual transactions. The commit occurs when the statement completes or the next execute occurs, whichever comes first. In the case of statements returning a result set, the statement completes when the last row of the result set has been retrieved or the result set has been closed. If a single statement returns multiple results, the commit occurs when all the results have been retrieved. You can use the setAutoCommit(false) method to disable autocommit, so that all SQL statements are grouped into one transaction that is terminated by a call to either the commit() or the rollback() method. The rollback() method undoes all the changes made by the transaction.


## Database Metadata

The database metadata such as database URL, username, JDBC driver name can be obtained using the DatabaseMetaData interface and result set metadata such as table
column count and column names can be obtained using the ResultSetMetaData interface.
BSAQWZS XC 

JDBC provides the DatabaseMetaData interface for obtaining database-wide information,and the ResultSetMetaData interface for obtaining information on a specific ResultSet.





## javax.sql (Advanced JDBC)

Provides the API for server side data source access and processing from the JavaTM programming language. This package supplements the java.sql package and, as of the version 1.4 release, is included in the Java Platform, Standard Edition (Java SETM). It remains an essential part of the Java Platform, Enterprise Edition (Java EETM).

It extends java.sql by adding advanced features for JDBC, focusing on connection pooling and distributed transactions.

Use Case:

- Applications requiring performance optimizations (via connection pooling).
- Foundation for higher-level frameworks like JPA and Spring Data.

The javax.sql package provides for the following:

1. The DataSource interface as an alternative to the DriverManager for establishing a connection with a data source.A factory for managing connections. More robust than DriverManager.
2. Connection pooling and Statement pooling.ConnectionPoolDataSource: Provides connection pooling support.
3. Distributed transactions
4. Rowsets - Easier handling of tabular data with support for disconnected operation.

Applications use the DataSource and RowSet APIs directly, but the connection pooling and distributed transaction APIs are used internally by the middle-tier infrastructure.
Using a DataSource Object to Make a Connection
The javax.sql package provides the preferred way to make a connection with a data source. The DriverManager class, the original mechanism, is still valid, and code using it will continue to run. However, the newer DataSource mechanism is preferred because it offers many advantages over the DriverManager mechanism.

These are the main advantages of using a DataSource object to make a connection:

1. Changes can be made to a data source's properties, which means that it is not necessary to make changes in application code when something about the data source or driver changes.
2. Connection and Statement pooling and distributed transactions are available through a DataSource object that is implemented to work with the middle-tier infrastructure. 3. Connections made through the DriverManager do not have connection and statement pooling or distributed transaction capabilities.

Driver vendors provide DataSource implementations. A particular DataSource object represents a particular physical data source, and each connection the DataSource object creates is a connection to that physical data source.

A logical name for the data source is registered with a naming service that uses the Java Naming and Directory InterfaceTM (JNDI) API, usually by a system administrator or someone performing the duties of a system administrator. An application can retrieve the DataSource object it wants by doing a lookup on the logical name that has been registered for it. The application can then use the DataSource object to create a connection to the physical data source it represents.

A DataSource object can be implemented to work with the middle tier infrastructure so that the connections it produces will be pooled for reuse. An application that uses such a DataSource implementation will automatically get a connection that participates in connection pooling. A DataSource object can also be implemented to work with the middle tier infrastructure so that the connections it produces can be used for distributed transactions without any special coding.
Connection Pooling and Statement Pooling
Connections made via a DataSource object that is implemented to work with a middle tier connection pool manager will participate in connection pooling. This can improve performance dramatically because creating new connections is very expensive. Connection pooling allows a connection to be used and reused, thus cutting down substantially on the number of new connections that need to be created.

Connection pooling is totally transparent. It is done automatically in the middle tier of a Java EE configuration, so from an application's viewpoint, no change in code is required. An application simply uses the DataSource.getConnection method to get the pooled connection and uses it the same way it uses any Connection object.

The classes and interfaces used for connection pooling are:

- ConnectionPoolDataSource
- PooledConnection
- ConnectionEvent
- ConnectionEventListener
- StatementEvent
- StatementEventListener

The connection pool manager, a facility in the middle tier of a three-tier architecture, uses these classes and interfaces behind the scenes. When a ConnectionPoolDataSource object is called on to create a PooledConnection object, the connection pool manager will register as a ConnectionEventListener object with the new PooledConnection object. When the connection is closed or there is an error, the connection pool manager (being a listener) gets a notification that includes a ConnectionEvent object.

If the connection pool manager supports Statement pooling, for PreparedStatements, which can be determined by invoking the method DatabaseMetaData.supportsStatementPooling, the connection pool manager will register as a StatementEventListener object with the new PooledConnection object. When the PreparedStatement is closed or there is an error, the connection pool manager (being a listener) gets a notification that includes a StatementEvent object.

Distributed Transactions
As with pooled connections, connections made via a DataSource object that is implemented to work with the middle tier infrastructure may participate in distributed transactions. This gives an application the ability to involve data sources on multiple servers in a single transaction.

The classes and interfaces used for distributed transactions are:

- XADataSource
- XAConnection

These interfaces are used by the transaction manager; an application does not use them directly.

The XAConnection interface is derived from the PooledConnection interface, so what applies to a pooled connection also applies to a connection that is part of a distributed transaction. A transaction manager in the middle tier handles everything transparently. The only change in application code is that an application cannot do anything that would interfere with the transaction manager's handling of the transaction. Specifically, an application cannot call the methods Connection.commit or Connection.rollback, and it cannot set the connection to be in auto-commit mode (that is, it cannot call Connection.setAutoCommit(true)).

An application does not need to do anything special to participate in a distributed transaction. It simply creates connections to the data sources it wants to use via the DataSource.getConnection method, just as it normally does. The transaction manager manages the transaction behind the scenes. The XADataSource interface creates XAConnection objects, and each XAConnection object creates an XAResource object that the transaction manager uses to manage the connection.
Rowsets
The RowSet interface works with various other classes and interfaces behind the scenes. These can be grouped into three categories.

- Event Notification
RowSetListener
A RowSet object is a JavaBeansTM component because it has properties and participates in the JavaBeans event notification mechanism. The RowSetListener interface is implemented by a component that wants to be notified about events that occur to a particular RowSet object. Such a component registers itself as a listener with a rowset via the RowSet.addRowSetListener method.

When the RowSet object changes one of its rows, changes all of it rows, or moves its cursor, it also notifies each listener that is registered with it. The listener reacts by carrying out its implementation of the notification method called on it.

- RowSetEvent
As part of its internal notification process, a RowSet object creates an instance of RowSetEvent and passes it to the listener. The listener can use this RowSetEvent object to find out which rowset had the event.

- Metadata
RowSetMetaData
This interface, derived from the ResultSetMetaData interface, provides information about the columns in a RowSet object. An application can use RowSetMetaData methods to find out how many columns the rowset contains and what kind of data each column can contain.

The RowSetMetaData interface provides methods for setting the information about columns, but an application would not normally use these methods. When an application calls the RowSet method execute, the RowSet object will contain a new set of rows, and its RowSetMetaData object will have been internally updated to contain information about the new columns.

- The Reader/Writer Facility
A RowSet object that implements the RowSetInternal interface can call on the RowSetReader object associated with it to populate itself with data. It can also call on the RowSetWriter object associated with it to write any changes to its rows back to the data source from which it originally got the rows. A rowset that remains connected to its data source does not need to use a reader and writer because it can simply operate on the data source directly.

- RowSetInternal
By implementing the RowSetInternal interface, a RowSet object gets access to its internal state and is able to call on its reader and writer. A rowset keeps track of the values in its current rows and of the values that immediately preceded the current ones, referred to as the original values. A rowset also keeps track of (1) the parameters that have been set for its command and (2) the connection that was passed to it, if any. A rowset uses the RowSetInternal methods behind the scenes to get access to this information. An application does not normally invoke these methods directly.

- RowSetReader
A disconnected RowSet object that has implemented the RowSetInternal interface can call on its reader (the RowSetReader object associated with it) to populate it with data. When an application calls the RowSet.execute method, that method calls on the rowset's reader to do much of the work. Implementations can vary widely, but generally a reader makes a connection to the data source, reads data from the data source and populates the rowset with it, and closes the connection. A reader may also update the RowSetMetaData object for its rowset. The rowset's internal state is also updated, either by the reader or directly by the method RowSet.execute.

- RowSetWriter
A disconnected RowSet object that has implemented the RowSetInternal interface can call on its writer (the RowSetWriter object associated with it) to write changes back to the underlying data source. Implementations may vary widely, but generally, a writer will do the following:

Make a connection to the data source
Check to see whether there is a conflict, that is, whether a value that has been changed in the rowset has also been changed in the data source
Write the new values to the data source if there is no conflict
Close the connection

The RowSet interface may be implemented in any number of ways, and anyone may write an implementation. Developers are encouraged to use their imaginations in coming up with new ways to use rowsets.

Using the javax.sql package improves the handling of database connections by leveraging connection pooling via a DataSource. Below is the restructured version of the code to use javax.sql.

```java
import javax.sql.DataSource;
import com.mysql.cj.jdbc.MysqlDataSource; // MySQL DataSource class
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class JavaxSQLExample {

    // Method to create a DataSource
    private static DataSource getDataSource() {
        MysqlDataSource dataSource = new MysqlDataSource();
        dataSource.setURL("jdbc:mysql://localhost:3306/my_database");
        dataSource.setUser("root");
        dataSource.setPassword("password");
        return dataSource;
    }

    public static void main(String[] args) {
        // SQL query
        String query = "SELECT id, name, email FROM users";

        // Get the DataSource
        DataSource dataSource = getDataSource();

        // Try-with-resources to ensure resources are closed automatically
        try (Connection connection = dataSource.getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(query);
             ResultSet resultSet = preparedStatement.executeQuery()) {

            // Check connection
            System.out.println("Connected to the database using DataSource!");

            // Process the result set
            while (resultSet.next()) {
                int id = resultSet.getInt("id");
                String name = resultSet.getString("name");
                String email = resultSet.getString("email");

                System.out.println("ID: " + id + ", Name: " + name + ", Email: " + email);
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
```

Key Differences in this Implementation

1. DataSource Usage:- A DataSource is used instead of directly managing connections with DriverManager.MysqlDataSource from com.mysql.cj.jdbc is configured with the database URL, username, and password.
2. Connection Pooling:- Most DataSource implementations (e.g., HikariCP, Apache DBCP) support connection pooling by default, improving performance by reusing connections.
3. Simpler Connection Handling:- The application code doesn't need to manage low-level connection details, making it easier to switch between databases or pooling implementations.

You can replace MysqlDataSource with a third-party library like HikariCP or Apache DBCP for better connection pooling support in production environments. This will make the javax.sql implementation even more efficient.

## Connection Pooling

Opening a connection to a database is a time-consuming process that can degrade an application's perfomance.As a result,it's common programming practise to create a collection of Connection objects and store them in another object commonly known as a `database connection pool`.This limits the number of times that connections are opened as well as total number of Connection objects.

Connection pooling is a technique used to enhance the performance and scalability of applications that interact with a database. It involves creating and maintaining a pool (a cache) of pre-established database connections that can be reused by the application, instead of creating and closing a new connection each time a database operation is performed.

How Connection Pooling Works

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

Key Takeaways

1. Connection pooling is critical for high-performance database-driven applications.
2. It reduces the cost of database connection management by reusing existing connections.
3. Libraries like HikariCP make it easy to implement efficient connection pooling in Java applications.

`Common Connection Pooling Libraries`:-

- HikariCP:-A lightweight and fast connection pooling library.Highly efficient and widely used in modern applications.
- Apache DBCP (Database Connection Pooling):-Part of Apache Commons, offering a robust pooling mechanism.
- C3P0:-A reliable connection pooling library with extensive configuration options.
- Tomcat JDBC Connection Pool:-A connection pooling implementation provided by the Apache Tomcat project.

```java
import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class ConnectionPoolingExample {
    public static void main(String[] args) {
        // Configure HikariCP
        HikariConfig config = new HikariConfig();
        config.setJdbcUrl("jdbc:mysql://localhost:3306/my_database");
        config.setUsername("root");
        config.setPassword("password");
        config.setMaximumPoolSize(10); // Max connections
        config.setMinimumIdle(2);     // Min idle connections

        // Create DataSource
        DataSource dataSource = new HikariDataSource(config);

        // SQL query
        String query = "SELECT id, name, email FROM users";

        try (Connection connection = dataSource.getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(query);
             ResultSet resultSet = preparedStatement.executeQuery()) {

            // Process the result set
            while (resultSet.next()) {
                int id = resultSet.getInt("id");
                String name = resultSet.getString("name");
                String email = resultSet.getString("email");

                System.out.println("ID: " + id + ", Name: " + name + ", Email: " + email);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        // Close DataSource (optional, typically managed by the application lifecycle)
        ((HikariDataSource) dataSource).close();
    }
}
```




# Java SE Technologies - Database

## Java DB

Is Oracle's supported distribution of the open source Apache Derby database. Its ease of use, standards compliance, full feature set, and small footprint make it the ideal database for Java developers. Java DB is written in the Java programming language, providing "write once, run anywhere" portability. It can be embedded in Java applications, requiring zero administration by the developer or user. It can also be used in client server mode. Java DB is fully transactional and provides a standard SQL interface as well as a JDBC 4.1 compliant driver.JavaDB is no longer included in recent versions of the JDK.

## Java Data Objects (JDO)

Is a standard interface-based Java model abstraction of persistence. Application programmers can use JDO technology to directly store Java domain model instances into the persistent store (database). Benefits include ease of programming, application portability, database independence, high performance, and optional integration with Enterprise JavaBeans (EJB).

## The Java Database Connectivity (JDBC)

Is the industry standard for database-independent connectivity between the Java programming language and a wide range of databases SQL databases and other tabular data sources, such as spreadsheets or flat files. The JDBC API provides a call-level API for SQL-based database access.JDBC technology allows you to use the Java programming language to exploit "Write Once, Run Anywhere" capabilities for applications that require access to enterprise data. With a JDBC technology-enabled driver, you can connect all corporate data even in a heterogeneous environment.

There are two main ways to access a relational database from Java:

1. Java Database Connectivity (JDBC): Accesses data as rows and columns.
2. Java Persistence API (JPA): Accesses data through Java objects using a concept called object-­relational mapping (ORM). The idea is that you don’t have to write as much code, and you get your data in Java objects.

The relationship among java.sql, javax.sql, JPA, Hibernate, and Spring Data revolves around managing databases in Java applications. Each provides specific capabilities, often working together to simplify database interactions.

**java.sql (Core JDBC API)**:- java.sql provides the foundation for database connectivity in Java using JDBC (Java Database Connectivity). It allows executing SQL statements, managing connections, and handling result sets.

Key Components:

- DriverManager: Manages database connections.
- Connection: Represents a connection to a database.
- Statement/PreparedStatement: Executes SQL queries.
- ResultSet: Retrieves results of queries.

Limitation:

- Low-Level API: Requires writing SQL manually and managing resources (connections, statements) explicitly.
- No object-relational mapping (ORM) capabilities.

**javax.sql (Advanced JDBC)**:- Extends java.sql by adding advanced features for JDBC, focusing on connection pooling and distributed transactions.

Key Components:

- DataSource: A factory for managing connections. More robust than DriverManager.
- ConnectionPoolDataSource: Provides connection pooling support.
- RowSet: Easier handling of tabular data with support for disconnected operation.

Use Case:

- Applications requiring performance optimizations (via connection pooling).
- Foundation for higher-level frameworks like JPA and Spring Data.

**JPA (Java Persistence API)**:-JPA is a specification for ORM (Object-Relational Mapping), which maps Java objects to database tables and abstracts SQL operations.

Key Features:

- Declarative mapping using annotations (@Entity, @Table, etc.).
- Entity relationships (@OneToOne, @OneToMany, etc.).
- JPQL (Java Persistence Query Language): Object-oriented query language.

Key Classes/Interfaces:

- EntityManager: Manages entities and transactions.
- Persistence: Bootstrap class for initializing JPA.
- Entities: Plain Old Java Objects (POJOs) annotated for persistence.

Limitation:

JPA is a specification, not an implementation. It needs a provider like Hibernate.

**Hibernate (JPA Provider)**:- Hibernate is a framework that implements the JPA specification and adds additional features for ORM and database interactions.

Key Features:

- Implements all JPA features.
- Provides advanced features like caching, lazy loading, and batch processing.
- Supports native SQL queries alongside JPQ- K- Components:
- SessionFactory: Factory for managing database sessions.
- Session: Equivalent to EntityManager in JPA.
- Criteria API: For programmatically building queries.

Use Case: Hibernate is one of the most popular JPA providers due to its rich feature set and extensive documentation.

**Spring Data**:- Spring Data is a high-level abstraction layer over JPA (or other persistence technologies) that simplifies database access in Spring applications.

Key Features:

- Repositories: Predefined CRUD operations with minimal boilerplate.Example: JpaRepository, CrudRepository.
- Query Methods: Derive queries from method names (findByName, findByAgeGreaterThan).
- Integration with other persistence APIs like MongoDB, Cassandra, etc.

Key Components:

- JpaRepository: Extends JPA with additional features like pagination and sorting.
- Custom Queries: Supports JPQL, native SQL, and @Query annotations.

Use Case: Spring Data eliminates boilerplate code in Spring applications, making it easier to implement complex persistence logic.

java.sql - Low-level database connectivity using JDBC.Direct database access.
javax.sql- Extends java.sql with advanced JDBC features like connection pooling.Builds on java.sql.
JPA- High-level abstraction for ORM, maps Java objects to database tables.Uses javax.sql for connections.
Hibernate- A JPA provider with additional ORM features.Implements JPA.
Spring Data- Simplifies working with JPA (or other databases) in Spring applications.Leverages JPA/Hibernate.

Spring Data manages repository abstractions.
Hibernate handles ORM and implements JPA.
JPA abstracts SQL using entities.
javax.sql provides the DataSource for connections.
java.sql is used internally for executing SQL queries.
