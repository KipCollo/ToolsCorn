# Database

Laravel makes interacting with databases extremely simple across a variety of supported databases using raw SQL, a fluent query builder, and the Eloquent ORM. Currently, Laravel provides first-party support for five databases:

1. MariaDB 10.3+ (Version Policy)
2. MySQL 5.7+ (Version Policy)
3. PostgreSQL 10.0+ (Version Policy)
4. SQLite 3.26.0+
5. SQL Server 2017+ (Version Policy)

Additionally, MongoDB is supported via the mongodb/laravel-mongodb package, which is officially maintained by MongoDB.

## Configuration

The configuration for Laravel's database services is located in your application's `config/database.php` configuration file. In this file, you may define all of your database connections, as well as specify which connection should be used by default. Most of the configuration options within this file are driven by the values of your application's environment variables. Examples for most of Laravel's supported database systems are provided in this file.

By default, Laravel's sample environment configuration is ready to use with Laravel Sail, which is a Docker configuration for developing Laravel applications on your local machine. However, you are free to modify your database configuration as needed for your local database.

- **SQLite Configuration**:- SQLite databases are contained within a single file on your filesystem. You can create a new SQLite database using the touch command in your terminal: touch database/database.sqlite. After the database has been created, you may easily configure your environment variables to point to this database by placing the absolute path to the database in the DB_DATABASE environment variable:

```env
DB_CONNECTION=sqlite
DB_DATABASE=/absolute/path/to/database.sqlite
```

By default, foreign key constraints are enabled for SQLite connections. If you would like to disable them, you should set the DB_FOREIGN_KEYS environment variable to false:

```env
DB_FOREIGN_KEYS=false
```

If you use the Laravel installer to create your Laravel application and select SQLite as your database, Laravel will automatically create a database/database.sqlite file and run the default database migrations for you.


- **Microsoft SQL Server Configuration**:- To use a Microsoft SQL Server database, you should ensure that you have the `sqlsrv` and `pdo_sqlsrv` PHP extensions installed as well as any dependencies they may require such as the Microsoft SQL ODBC driver.

`Configuration Using URLs` - Typically, database connections are configured using multiple configuration values such as host, database, username, password, etc. Each of these configuration values has its own corresponding environment variable. This means that when configuring your database connection information on a production server, you need to manage several environment variables.
Some managed database providers such as AWS and Heroku provide a single database "URL" that contains all of the connection information for the database in a single string. An example database URL may look something like the following:

mysql://root:password@127.0.0.1/forge?charset=UTF-8

These URLs typically follow a standard schema convention: - driver://username:password@host:port/database?options

For convenience, Laravel supports these URLs as an alternative to configuring your database with multiple configuration options. If the url (or corresponding DB_URL environment variable) configuration option is present, it will be used to extract the database connection and credential information.

`Read and Write Connections` - Sometimes you may wish to use one database connection for SELECT statements, and another for INSERT, UPDATE, and DELETE statements. Laravel makes this a breeze, and the proper connections will always be used whether you are using raw queries, the query builder, or the Eloquent ORM.

To see how read / write connections should be configured, let's look at this example:

```php
'mysql' => [
    'read' => [
        'host' => [
            '192.168.1.1',
            '196.168.1.2',
        ],
    ],
    'write' => [
        'host' => [
            '196.168.1.3',
        ],
    ],
    'sticky' => true,
 
    'database' => env('DB_DATABASE', 'laravel'),
    'username' => env('DB_USERNAME', 'root'),
    'password' => env('DB_PASSWORD', ''),
    'unix_socket' => env('DB_SOCKET', ''),
    'charset' => env('DB_CHARSET', 'utf8mb4'),
    'collation' => env('DB_COLLATION', 'utf8mb4_unicode_ci'),
    'prefix' => '',
    'prefix_indexes' => true,
    'strict' => true,
    'engine' => null,
    'options' => extension_loaded('pdo_mysql') ? array_filter([
        PDO::MYSQL_ATTR_SSL_CA => env('MYSQL_ATTR_SSL_CA'),
    ]) : [],
],
```

Note that three keys have been added to the configuration array: read, write and sticky. The read and write keys have array values containing a single key: host. The rest of the database options for the read and write connections will be merged from the main mysql configuration array.

You only need to place items in the read and write arrays if you wish to override the values from the main mysql array. So, in this case, 192.168.1.1 will be used as the host for the "read" connection, while 192.168.1.3 will be used for the "write" connection. The database credentials, prefix, character set, and all other options in the main mysql array will be shared across both connections. When multiple values exist in the host configuration array, a database host will be randomly chosen for each request.

`The sticky Option`:- The sticky option is an optional value that can be used to allow the immediate reading of records that have been written to the database during the current request cycle. If the sticky option is enabled and a "write" operation has been performed against the database during the current request cycle, any further "read" operations will use the "write" connection. This ensures that any data written during the request cycle can be immediately read back from the database during that same request. It is up to you to decide if this is the desired behavior for your application.

`Running SQL Queries`:- Once you have configured your database connection, you may run queries using the DB facade. The DB facade provides methods for each type of query: select, update, insert, delete, and statement.
To run a basic SELECT query, you may use the select method on the DB facade:

```php
<?php
 
namespace App\Http\Controllers;
 
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\View\View;
 
class UserController extends Controller
{
    /**
     * Show a list of all of the application's users.
     */
    public function index(): View
    {
        $users = DB::select('select * from users where active = ?', [1]);
        return view('user.index', ['users' => $users]);
    }
}
```

The first argument passed to the select method is the SQL query, while the second argument is any parameter bindings that need to be bound to the query. Typically, these are the values of the where clause constraints. Parameter binding provides protection against SQL injection.
The select method will always return an array of results. Each result within the array will be a PHP stdClass object representing a record from the database:

```php
use Illuminate\Support\Facades\DB;
 
$users = DB::select('select * from users');
foreach ($users as $user) {
    echo $user->name;
}
```

`Selecting Scalar Values`:- Sometimes your database query may result in a single, scalar value. Instead of being required to retrieve the query's scalar result from a record object, Laravel allows you to retrieve this value directly using the scalar method:

```php
$burgers = DB::scalar(
    "select count(case when food = 'burger' then 1 end) as burgers from menu"
);
```

`Selecting Multiple Result Sets`:- If your application calls stored procedures that return multiple result sets, you may use the selectResultSets method to retrieve all of the result sets returned by the stored procedure:

```php
[$options, $notifications] = DB::selectResultSets(
    "CALL get_user_options_and_notifications(?)", $request->user()->id
);
```

`Using Named Bindings`:- Instead of using ? to represent your parameter bindings, you may execute a query using named bindings:

```php
$results = DB::select('select * from users where id = :id', ['id' => 1]);
```

`Running an Insert Statement`:- To execute an insert statement, you may use the insert method on the DB facade. Like select, this method accepts the SQL query as its first argument and bindings as its second argument:

```php
use Illuminate\Support\Facades\DB;
 
DB::insert('insert into users (id, name) values (?, ?)', [1, 'Marc']);
```

Running an Update Statement

The update method should be used to update existing records in the database. The number of rows affected by the statement is returned by the method:

```php
use Illuminate\Support\Facades\DB;
 
$affected = DB::update(
    'update users set votes = 100 where name = ?',
    ['Anita']
);
```

Running a Delete Statement

The delete method should be used to delete records from the database. Like update, the number of rows affected will be returned by the method:

```php
use Illuminate\Support\Facades\DB;
 
$deleted = DB::delete('delete from users');
```

Running a General Statement

Some database statements do not return any value. For these types of operations, you may use the statement method on the DB facade:

```php
DB::statement('drop table users');
```

Running an Unprepared Statement

Sometimes you may want to execute an SQL statement without binding any values. You may use the DB facade's unprepared method to accomplish this:

```php
DB::unprepared('update users set votes = 100 where name = "Dries"');
```

Since unprepared statements do not bind parameters, they may be vulnerable to SQL injection. You should never allow user controlled values within an unprepared statement.
Implicit Commits

When using the DB facade's statement and unprepared methods within transactions you must be careful to avoid statements that cause implicit commits. These statements will cause the database engine to indirectly commit the entire transaction, leaving Laravel unaware of the database's transaction level. An example of such a statement is creating a database table:

```php
DB::unprepared('create table a (col varchar(1) null)');
```

Please refer to the MySQL manual for a list of all statements that trigger implicit commits.
Using Multiple Database Connections

If your application defines multiple connections in your config/database.php configuration file, you may access each connection via the connection method provided by the DB facade. The connection name passed to the connection method should correspond to one of the connections listed in your config/database.php configuration file or configured at runtime using the config helper:

```php
use Illuminate\Support\Facades\DB;
 
$users = DB::connection('sqlite')->select(/* ... */);
```

You may access the raw, underlying PDO instance of a connection using the getPdo method on a connection instance:

```php
$pdo = DB::connection()->getPdo();
```

Listening for Query Events

If you would like to specify a closure that is invoked for each SQL query executed by your application, you may use the DB facade's listen method. This method can be useful for logging queries or debugging. You may register your query listener closure in the boot method of a service provider:

```php
<?php
 
namespace App\Providers;
 
use Illuminate\Database\Events\QueryExecuted;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\ServiceProvider;
 
class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        // ...
    }
 
    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        DB::listen(function (QueryExecuted $query) {
            // $query->sql;
            // $query->bindings;
            // $query->time;
            // $query->toRawSql();
        });
    }
}
```

Monitoring Cumulative Query Time

A common performance bottleneck of modern web applications is the amount of time they spend querying databases. Thankfully, Laravel can invoke a closure or callback of your choice when it spends too much time querying the database during a single request. To get started, provide a query time threshold (in milliseconds) and closure to the whenQueryingForLongerThan method. You may invoke this method in the boot method of a service provider:

```php
<?php
 
namespace App\Providers;
 
use Illuminate\Database\Connection;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\ServiceProvider;
use Illuminate\Database\Events\QueryExecuted;
 
class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        // ...
    }
 
    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        DB::whenQueryingForLongerThan(500, function (Connection $connection, QueryExecuted $event) {
            // Notify development team...
        });
    }
}
```

Database Transactions

You may use the transaction method provided by the DB facade to run a set of operations within a database transaction. If an exception is thrown within the transaction closure, the transaction will automatically be rolled back and the exception is re-thrown. If the closure executes successfully, the transaction will automatically be committed. You don't need to worry about manually rolling back or committing while using the transaction method:

```php
use Illuminate\Support\Facades\DB;
 
DB::transaction(function () {
    DB::update('update users set votes = 1');
 
    DB::delete('delete from posts');
});
```

Handling Deadlocks

The transaction method accepts an optional second argument which defines the number of times a transaction should be retried when a deadlock occurs. Once these attempts have been exhausted, an exception will be thrown:

```php
use Illuminate\Support\Facades\DB;
 
DB::transaction(function () {
    DB::update('update users set votes = 1');
 
    DB::delete('delete from posts');
}, 5);
```

Manually Using Transactions

If you would like to begin a transaction manually and have complete control over rollbacks and commits, you may use the beginTransaction method provided by the DB facade:

```php
use Illuminate\Support\Facades\DB;
 
DB::beginTransaction();
```

You can rollback the transaction via the rollBack method:

```php
DB::rollBack();
```

Lastly, you can commit a transaction via the commit method:

```php
DB::commit();
```

The DB facade's transaction methods control the transactions for both the query builder and Eloquent ORM.


## Connecting to the Database CLI

If you would like to connect to your database's CLI, you may use the db Artisan command:

```bash
php artisan db
```

If needed, you may specify a database connection name to connect to a database connection that is not the default connection:

```bash
php artisan db mysql
```

Inspecting Your Databases - Using the db:show and db:table Artisan commands, you can get valuable insight into your database and its associated tables. To see an overview of your database, including its size, type, number of open connections, and a summary of its tables, you may use the db:show command:

```bash
php artisan db:show
```

You may specify which database connection should be inspected by providing the database connection name to the command via the --database option:

```bash
php artisan db:show --database=pgsql
```

If you would like to include table row counts and database view details within the output of the command, you may provide the --counts and --views options, respectively. On large databases, retrieving row counts and view details can be slow:

```bash
php artisan db:show --counts --views
```

In addition, you may use the following Schema methods to inspect your database:

```php
use Illuminate\Support\Facades\Schema;
 
$tables = Schema::getTables();
$views = Schema::getViews();
$columns = Schema::getColumns('users');
$indexes = Schema::getIndexes('users');
$foreignKeys = Schema::getForeignKeys('users');
```

If you would like to inspect a database connection that is not your application's default connection, you may use the connection method:

```php
$columns = Schema::connection('sqlite')->getColumns('users');
```

Table Overview - If you would like to get an overview of an individual table within your database, you may execute the db:table Artisan command. This command provides a general overview of a database table, including its columns, types, attributes, keys, and indexes:

```bash
php artisan db:table users
```

Monitoring Your Databases - Using the db:monitor Artisan command, you can instruct Laravel to dispatch an Illuminate\Database\Events\DatabaseBusy event if your database is managing more than a specified number of open connections.

To get started, you should schedule the db:monitor command to run every minute. The command accepts the names of the database connection configurations that you wish to monitor as well as the maximum number of open connections that should be tolerated before dispatching an event:

```bash
php artisan db:monitor --databases=mysql,pgsql --max=100
```

Scheduling this command alone is not enough to trigger a notification alerting you of the number of open connections. When the command encounters a database that has an open connection count that exceeds your threshold, a DatabaseBusy event will be dispatched. You should listen for this event within your application's AppServiceProvider in order to send a notification to you or your development team:

```php
use App\Notifications\DatabaseApproachingMaxConnections;
use Illuminate\Database\Events\DatabaseBusy;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Notification;
 
/**
 * Bootstrap any application services.
 */
public function boot(): void
{
    Event::listen(function (DatabaseBusy $event) {
        Notification::route('mail', 'dev@example.com')
                ->notify(new DatabaseApproachingMaxConnections(
                    $event->connectionName,
                    $event->connections
                ));
    });
}
```


## Migrations

Migrations are like version control for your database, allowing your team to define and share the application's database schema definition. If you have ever had to tell a teammate to manually add a column to their local database schema after pulling in your changes from source control, you've faced the problem that database migrations solve.
The Laravel Schema facade provides database agnostic support for creating and manipulating tables across all of Laravel's supported database systems. Typically, migrations will use this facade to create and modify database tables and columns.

`Generating Migrations` - You may use the make:migration Artisan command to generate a database migration. The new migration will be placed in your database/migrations directory. Each migration filename contains a timestamp that allows Laravel to determine the order of the migrations:

`Migration Structure` - A migration class contains two methods: up and down. The up method is used to add new tables, columns, or indexes to your database, while the down method should reverse the operations performed by the up method.


## Seeding

Laravel includes the ability to seed your database with data using seed classes. All seed classes are stored in the database/seeders directory. By default, a DatabaseSeeder class is defined for you. From this class, you may use the call method to run other seed classes, allowing you to control the seeding order.
Mass assignment protection is automatically disabled during database seeding.
