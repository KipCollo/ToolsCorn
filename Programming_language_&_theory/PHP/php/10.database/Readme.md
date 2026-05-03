# Database Connections


PHP is particularly strong in its ability to interact with databases. PHP sup­ports pretty much every database. PHP handles connecting to the database and communicating with it.
You don’t need to know the technical details for connecting to a database or for exchanging messages with it. You tell PHP the name of the database and where it is, and PHP handles the details. It connects to the database, passes your instructions to the database, and returns the database response to you.

PHP provides the application part, and MySQL provides the database part of a Web database application. You use the PHP language to write the programs that perform the application tasks. PHP is flexible enough to perform all the tasks that your application requires. It can be used for simple tasks (such as displaying a Web page) or for complicated tasks (such as accepting and veri­fying data that a user typed into an HTML form). One of the tasks that your application must do is move data into and out of the database — and PHP has built-in features to use when writing programs that move data into and out of a MySQL database.
PHP statements are embedded in your HTML files with PHP tags. When the task to be performed by the application requires storing or retrieving data,you use specific PHP statements designed to interact with a MySQL database.You use one PHP statement to connect to the correct database, telling PHP where the database is located, its name, and the password needed to connect to it. The database doesn’t need to be on the same machine as your Web site;PHP can communicate with a database across a network. You use another PHP statement to send instructions to MySQL. You send an SQL message across the connection, giving MySQL instructions for the task that you want done. MySQL returns a status message that shows whether it successfully performed the task. If there was a problem, it returns an error message. If your SQL message asked to retrieve some data, MySQL sends the data that you asked for, and PHP stores it in a temporary location where it is available to you.
You then use one or more PHP statements to complete the application task.For instance, you can use PHP statements to display data that you retrieved.Or you might use PHP statements to display a status message in the browser, informing the user that the data was saved.


Note:
1. We create one common file connection.php to save Database connectivity functionality.
2. We later call this SAME file in all our scripts
3. This is desirable since in future if the login credential would change , you do not need to make changed in each and every script


----------


## POSTGRESQL

- `pg_connect(string $connection_string,int $flags =0)`:-Opens a PostgreSQL connection specified by the connection_string.
If a second call is made to pg_connect() with same connection_string as an existing connection,the existing connection will be returned unless you pass `PGSQL_CONNECT_FORCE_NEW` as flag.



----------

## MySQL

PHP offers several MySQL drivers and plugins for accessing and handling MySQL.
The extensions listed support the MySQL protocol. Examples of compatible database servers are MariaDB Server,MySQL Server,Percona Server for MySQL, and TiDB.

There are several PHP APIs for accessing the MySQL database. Users can choose between the mysqli or PDO_MySQL extensions.

PHP has supported MySQL almost since the project’s inception, including an API with the version 2 release. In fact, using MySQL with PHP eventually became so commonplace that for several years the extension was enabled by default. But perhaps the most indicative evidence of the strong bonds between the two technology camps was the release of an updated MySQL extension with PHP 5, known as MySQL Improved (and typically referred to as mysqli).
MySQL Improved Extension.
The mysqli extension allows you to access the functionality provided by MySQL 4.1 and above.
Reason for extension:-
1. First, MySQL’s rapid evolution prevented users who were relying on the original extension from taking advantage of new features such as prepared statements, advanced connection options, and security enhancements.
2. Second, while the original extension certainly served programmers well, many considered the procedural interface outdated, preferring a native object-oriented interface that would not only more tightly integrate with other applications, but also offer the ability to extend that interface as desired.

A detailed list of the key enhancements follows:
1. Object oriented: The mysqli extension is encapsulated within a series of classes, encouraging use of what many consider to be a more convenient and efficient programming paradigm than PHP’s traditional procedural approach.
2. Prepared statements: Prepared statements eliminate overhead and inconvenience when working with queries intended for repeated execution, as is so often the case when building database-driven web sites. Prepared statements also offer another important security-related feature in that they prevent SQL injection attacks.
3. Transactional support: Although MySQL’s transactional capabilities are available in PHP’s original MySQL extension, the mysqli extension offers an object-oriented interface to these capabilities.
4. Enhanced debugging capabilities: The mysqli extension offers numerous methods for debugging queries, resulting in a more efficient development process.
5. Embedded server support: An embedded MySQL server library was introduced with the 4.0 release for users who are interested in running a complete MySQL server within a client application such as a kiosk or desktop program. The mysqli extension offers methods for connecting and manipulating these embedded MySQL databases.
6. Master/slave support: As of MySQL 3.23.15, MySQL offers support for replication,
although in later versions this feature has been improved substantially. Using the
mysqli extension, you can ensure queries are directed to the master server in a
replication configuration.
7. Dual procedural and object-oriented interface:- The mysqli extension features a dual interface. It supports the procedural and object-oriented programming paradigm.
Users migrating from the old mysql extension may prefer the procedural interface. The procedural interface is similar to that of the old mysql extension. In many cases, the function names differ only by prefix. Some mysqli functions take a connection handle as their first argument, whereas matching functions in the old mysql interface take it as an optional last argument.


**Installation**:- As of PHP 5, MySQL support is no longer bundled with the standard PHP distribution. Therefore, you need to explicitly configure PHP to take advantage of this extension.
Enabling the mysqli extension on the Linux/Unix platform is accomplished by configuring PHP using the --with-mysqli flag. This flag should point to the location of the mysql_config program available to MySQL 4.1 and greater.
To enable the mysqli extension on Windows, you need to uncomment the following line from the
php.ini file, or add it if it doesn’t exist:- extension=php_mysqli.dll

`Requirements`:- In order to have these functions available, you must compile PHP with support for the mysqli extension.
When running a PHP version before 7.1.16, or PHP 7.2 before 7.2.4, set MySQL 8 Server's default password plugin to mysql_native_password or else you will see errors similar to The server requested authentication method unknown to the client [caching_sha2_password] even when caching_sha2_password is not used.

This is because MySQL 8 defaults to caching_sha2_password, a plugin that is not recognized by the older PHP (mysqlnd) releases. Instead, change it by setting default_authentication_plugin=mysql_native_password in my.cnf. The caching_sha2_password plugin is fully supported as of PHP 7.4.4. For older releases, the mysql_xdevapi extension does support it.

`Installation`:- The mysqli extension was introduced with PHP version 5.0.0. The MySQL Native Driver was included in PHP version 5.3.0.

PHP’s mysqli extension offers all of the functionality provided by its predecessor, in addition to new features that have been added as a result of MySQL’s evolution into a full-featured database server.

**MySQLi**:- MySQLi is a PHP extension that allows PHP programs to connect with MySQL databases. This extension provides the capability to perform queries, retrieve data, and perform complex operations on MySQL databases using PHP. MySQLi comes with an object-oriented and procedural interface and supports prepared statements, multiple statements, and transactions.

Here's a basic example of using MySQLi to connect to a MySQL database:

    $servername = "localhost";
    $username = "username";
    $password = "password";
    $dbname = "myDB";
    
    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    
    // Check connection
    if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
    }
    echo "Connected successfully";

Visit the following resources to learn more:

- [@official@MySQLi](https://www.php.net/manual/en/book.mysqli.php)


**Connection**:- The MySQL server supports the use of different transport layers for connections. Connections use TCP/IP, Unix domain sockets or Windows named pipes.
The hostname *localhost* has a special meaning. It is bound to the use of Unix domain sockets. To open a TCP/IP connection to the localhost, *127.0.0.1* must be used instead of the hostname localhost.
Interaction with the MySQL database is bookended by connection setup and teardown, consisting of connecting to the server and selecting a database, and closing the connection, respectively. As is the case with almost every feature available to mysqli, you can do this by using either an object-oriented approach or a procedural approach.
If you choose to interact with the MySQL server using the object-oriented interface, you need to first instantiate the mysqli class via its constructor:- mysqli([string host [, string username [, string pswd [, string dbname [, int port, [string socket]]]]]])

```php
$mysqli = new mysqli("127.0.0.1", "user", "password", "database", 3306);
```

Once the connection has been made, you can start interacting with the database. If at one point you need to connect to another database server or select another database, you can use the connect() and select_db() methods. The connect() method accepts the same parameters as the constructor:

```php
// Instantiate the mysqli class
$mysqli = new mysqli();
// Connect to the database server and select a database
$mysqli->connect('localhost', 'catalog_user', 'secret', 'corporate');
```

You can choose a database using the $mysqli->select_db method.

```php
// Connect to the database server
$mysqli = new mysqli('localhost', 'catalog_user', 'secret');
// Select the database
$mysqli->select_db('corporate');
```

Once a database has been successfully selected, you can then execute database queries against it.Executing queries, such as selecting, inserting, updating, and deleting information with the mysqli extension.

mysqli_connect is a function alias of mysqli::__construct().

```php
mysqli_connect('127.0.0.1',"user","password");
```

Once a script finishes execution, any open database connections are automatically closed and the resources are recuperated. However, it’s possible that a page requires several database connections throughout the course of execution, each of which should be closed as appropriate.In any case, close() is responsible for closing the connection.

```php
// close the connection
$mysqli->close()
```

Connection parameter defaults - Depending on the connection function used, assorted parameters can be omitted. If a parameter is not provided, then the extension attempts to use the default values that are set in the PHP configuration file.


**Handling Connection Errors**:- The mysqli extension includes a few features that can be used to capture error messages, or alternatively you can use exceptions.You can use the mysqli_connect_errno() and mysqli_connect_error() methods to diagnose and display information about a MySQL connection error.
If mysqli exception mode is not enabled and a connection fails, then mysqli_connect() returns false instead of an object. The mysqli_connect_error() function can be used to fetch the connection error.

`Retrieving Error Codes` - Error numbers are often used in lieu of a natural-language message to ease software internationalization efforts and allow for customization of error messages. The errno() method returns the error code generated from the execution of the last MySQL function or 0 if no error occurred. Its prototype follows:

class mysqli {
    int errno
}

```php
$mysqli = new mysqli('localhost', 'catalog_user', 'secret', 'corporate');
printf("Mysql error number generated: %d", $mysqli->errno); //Mysql error number generated: 1045
```

`Retrieving Error Messages` - The error() method returns the most recently generated error message, or it returns an empty string if no error occurred. Its prototype follows:

class mysqli {
    string error
}

The message language is dependent upon the MySQL database server because the target language is passed in as a flag at server startup.

```php
$mysqli = new mysqli('localhost', 'catalog_user', 'secret', 'corporate');
if ($mysqli->errno) {
    printf("Unable to connect to the database:<br /> %s",$mysqli->error);
    exit();
}

// Unable to connect to the database:
// Access denied for user 'catalog_user'@'localhost' (using password: YES)
```

MySQL’s error messages are available in 20 languages and are stored in MYSQL-INSTALL-DIR/share/mysql/LANGUAGE/.

`Storing Connection Information in a Separate File`:- A connection to a MySQL server must be made within every script requiring access to a given database, it’s possible that connection calls may be strewn throughout a large number of files, making such changes difficult. The solution is to store this information in a separate file and then include that file in your script as necessary. For example, the mysqli constructor might be stored in a header file named mysql.connect.php, like so:

```php
<?php
// Connect to the database server
$mysqli = new mysqli('localhost', 'catalog_user', 'secret', 'corporate');
?>

//This file can then be included as necessary, like so:
<?php
include 'mysql.connect.php';
// begin database selection and queries.
?>
```


**Connection pooling**:- The mysqli extension supports persistent database connections, which are a special kind of pooled connections. By default, every database connection opened by a script is either explicitly closed by the user during runtime or released automatically at the end of the script. A persistent connection is not. Instead it is put into a pool for later reuse, if a connection to the same server using the same username, password, socket, port and default database is opened. Reuse saves connection overhead.

Every PHP process is using its own mysqli connection pool. Depending on the web server deployment model, a PHP process may serve one or multiple requests. Therefore, a pooled connection may be used by one or more scripts subsequently.


```php
$link = mysql_connect('your_host_name', 'your_username_for_host','your_password_for_host');

if (!$link) {
    die('could not connect ' . mysql_error());
} else {
    $db_selected = mysql_select_db('your_database_name', $link);
    if (!$db_selected) {
        die('could not connect ' . mysql_error());
    }
}
```

**Interacting with Database**:- The vast majority of your queries will revolve around creation, retrieval, update, and deletion tasks, collectively known as CRUD.

`Sending a Query to the Database`:- The method query() is responsible for sending the query to the database. Its prototype looks like this:

class mysqli {
    mixed query(string query [, int resultmode])
}

The optional resultmode parameter is used to modify the behavior of this method, accepting two values:
- MYSQLI_STORE_RESULT: Returns the result as a buffered set, meaning the entire set will be made available for navigation at once. This is the default setting. While this option comes at a cost of increased memory demands, it does allow you to work with the entire result set at once, which is useful when you’re trying to analyze or manage the set. For instance, you might want to determine how many rows are returned from a particular query, or you might want to immediately jump to a particular row in the set.
- MYSQLI_USE_RESULT: Returns the result as an unbuffered set, meaning the set will be retrieved on an as-needed basis from the server. Unbuffered result sets increase performance for large result sets, but disallow the opportunity to do various things with the result set, such as immediately determine how many rows have been found by the query or travel to a particular row offset. You should consider using this option when you’re trying to retrieve a very large number of rows because it will require less memory and produce a faster response time.

`Retrieving Data`:- Your application will spend the majority of its efforts retrieving and formatting requested data. To do so, you’ll send the SELECT query to the database, and then iterate over the results, outputting each row to the browser, formatted in any manner you please.
The following example retrieves the sku, name, and price columns from the products table, ordering the results by name. Each row of results is then placed into three appropriately named variables, and output to the browser.
Statements can be executed with the mysqli::query(), mysqli::real_query() and mysqli::multi_query(). The mysqli::query() function is the most common, and combines the executing statement with a buffered fetch of its result set, if any, in one call. Calling mysqli::query() is identical to calling mysqli::real_query() followed by mysqli::store_result().
mysqli::query -- mysqli_query — Performs a query on the database

Object-oriented style - public mysqli::query(string $query, int $result_mode = MYSQLI_STORE_RESULT): mysqli_result|bool
Procedural style - mysqli_query(mysqli $mysql, string $query, int $result_mode = MYSQLI_STORE_RESULT): mysqli_result|bool


```php
$mysqli = new mysqli('localhost', 'catalog_user', 'secret', 'corporate');

// Create the query
$query = 'SELECT sku, name, price FROM products ORDER by name';

// Send the query to MySQL
$result = $mysqli->query($query, MYSQLI_STORE_RESULT);

// Iterate through the result set
while(list($sku, $name, $price) = $result->fetch_row())
    printf("(%s) %s: \$%s <br />", $sku, $name, $price);
```


```php
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("example.com", "user", "password", "database");

$mysqli->query("DROP TABLE IF EXISTS test");
$mysqli->query("CREATE TABLE test(id INT)");

$query = "select * from admin";
mysqli_query($con,$query);
```


`Buffered result sets`: After statement execution, results can be either retrieved all at once or read row by row from the server. Client-side result set buffering allows the server to free resources associated with the statement's results as early as possible. Generally speaking, clients are slow consuming result sets. Therefore, it is recommended to use buffered result sets. mysqli::query() combines statement execution and result set buffering.
PHP applications can navigate freely through buffered results. Navigation is fast because the result sets are held in client memory. Please, keep in mind that it is often easier to scale by client than it is to scale the server.

```php
$result = $mysqli->query("SELECT id FROM test ORDER BY id ASC");
foreach ($result as $row) {
    echo " id = " . $row['id'] . "\n";
}
```

`Inserting, Updating, and Deleting Data`:- This is done using a SQL INSERT, UPDATE, or DELETE query, and it’s accomplished in exactly the same way as are SELECT queries.

```php
// Create the query
$query = "DELETE FROM products WHERE sku = 'TY232278'";
// Send the query to MySQL
$result = $mysqli->query($query, MYSQLI_STORE_RESULT);
// Tell the user how many rows have been affected
printf("%d rows have been deleted.", $mysqli->affected_rows);
```

