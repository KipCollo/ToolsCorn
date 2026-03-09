# Database Connections

## POSTGRESQL

- `pg_connect(string $connection_string,int $flags =0)`:-Opens a PostgreSQL connection specified by the connection_string.
If a second call is made to pg_connect() with same connection_string as an existing connection,the existing connection will be returned unless you pass `PGSQL_CONNECT_FORCE_NEW` as flag.



------

## MySQL

PHP offers several MySQL drivers and plugins for accessing and handling MySQL.
The extensions listed support the MySQL protocol. Examples of compatible database servers are MariaDB Server,MySQL Server,Percona Server for MySQL, and TiDB.

There are several PHP APIs for accessing the MySQL database. Users can choose between the mysqli or PDO_MySQL extensions.

### MySQLi

MySQL Improved Extension.
The mysqli extension allows you to access the functionality provided by MySQL 4.1 and above.

`Dual procedural and object-oriented interface`:- The mysqli extension features a dual interface. It supports the procedural and object-oriented programming paradigm.
Users migrating from the old mysql extension may prefer the procedural interface. The procedural interface is similar to that of the old mysql extension. In many cases, the function names differ only by prefix. Some mysqli functions take a connection handle as their first argument, whereas matching functions in the old mysql interface take it as an optional last argument.


**Connection**:- The MySQL server supports the use of different transport layers for connections. Connections use TCP/IP, Unix domain sockets or Windows named pipes.
The hostname *localhost* has a special meaning. It is bound to the use of Unix domain sockets. To open a TCP/IP connection to the localhost, *127.0.0.1* must be used instead of the hostname localhost.

```php
$mysqli = new mysqli("127.0.0.1", "user", "password", "database", 3306);
```

mysqli_connect is a function alias of mysqli::__construct().
If mysqli exception mode is not enabled and a connection fails, then mysqli_connect() returns false instead of an object. The mysqli_connect_error() function can be used to fetch the connection error.

```php
mysqli_connect('127.0.0.1',"user","password");
```

Connection parameter defaults - Depending on the connection function used, assorted parameters can be omitted. If a parameter is not provided, then the extension attempts to use the default values that are set in the PHP configuration file.

`Connection pooling`:- The mysqli extension supports persistent database connections, which are a special kind of pooled connections. By default, every database connection opened by a script is either explicitly closed by the user during runtime or released automatically at the end of the script. A persistent connection is not. Instead it is put into a pool for later reuse, if a connection to the same server using the same username, password, socket, port and default database is opened. Reuse saves connection overhead.

Every PHP process is using its own mysqli connection pool. Depending on the web server deployment model, a PHP process may serve one or multiple requests. Therefore, a pooled connection may be used by one or more scripts subsequently.


**Executing Statements**:- Statements can be executed with the mysqli::query(), mysqli::real_query() and mysqli::multi_query(). The mysqli::query() function is the most common, and combines the executing statement with a buffered fetch of its result set, if any, in one call. Calling mysqli::query() is identical to calling mysqli::real_query() followed by mysqli::store_result().
mysqli::query -- mysqli_query — Performs a query on the database

Object-oriented style - public mysqli::query(string $query, int $result_mode = MYSQLI_STORE_RESULT): mysqli_result|bool
Procedural style - mysqli_query(mysqli $mysql, string $query, int $result_mode = MYSQLI_STORE_RESULT): mysqli_result|bool

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


**Installation**:- 

`Requirements`:- In order to have these functions available, you must compile PHP with support for the mysqli extension.
When running a PHP version before 7.1.16, or PHP 7.2 before 7.2.4, set MySQL 8 Server's default password plugin to mysql_native_password or else you will see errors similar to The server requested authentication method unknown to the client [caching_sha2_password] even when caching_sha2_password is not used.

This is because MySQL 8 defaults to caching_sha2_password, a plugin that is not recognized by the older PHP (mysqlnd) releases. Instead, change it by setting default_authentication_plugin=mysql_native_password in my.cnf. The caching_sha2_password plugin is fully supported as of PHP 7.4.4. For older releases, the mysql_xdevapi extension does support it.

`Installation`:- The mysqli extension was introduced with PHP version 5.0.0. The MySQL Native Driver was included in PHP version 5.3.0.
