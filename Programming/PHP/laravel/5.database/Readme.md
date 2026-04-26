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


--------------


## Migrations

Migrations are like version control for your database, allowing your team to define and share the application's database schema definition. If you have ever had to tell a teammate to manually add a column to their local database schema after pulling in your changes from source control, you've faced the problem that database migrations solve.
The Laravel Schema facade provides database agnostic support for creating and manipulating tables across all of Laravel's supported database systems. Typically, migrations will use this facade to create and modify database tables and columns.

`Generating Migrations` - You may use the make:migration Artisan command to generate a database migration. The new migration will be placed in your database/migrations directory. Each migration filename contains a timestamp that allows Laravel to determine the order of the migrations:

`Migration Structure` - A migration class contains two methods: up and down. The up method is used to add new tables, columns, or indexes to your database, while the down method should reverse the operations performed by the up method.

You may use the make:migration Artisan command to generate a database migration. The new migration will be placed in your database/migrations directory. Each migration filename contains a timestamp that allows Laravel to determine the order of the migrations:

```sh
php artisan make:migration create_flights_table
```

Laravel will use the name of the migration to attempt to guess the name of the table and whether or not the migration will be creating a new table. If Laravel is able to determine the table name from the migration name, Laravel will pre-fill the generated migration file with the specified table. Otherwise, you may simply specify the table in the migration file manually.

If you would like to specify a custom path for the generated migration, you may use the --path option when executing the make:migration command. The given path should be relative to your application's base path.


**Squashing Migrations**:- As you build your application, you may accumulate more and more migrations over time. This can lead to your database/migrations directory becoming bloated with potentially hundreds of migrations. If you would like, you may "squash" your migrations into a single SQL file. To get started, execute the schema:dump command:

```sh
php artisan schema:dump
 
# Dump the current database schema and prune all existing migrations...
php artisan schema:dump --prune
```

When you execute this command, Laravel will write a "schema" file to your application's database/schema directory. The schema file's name will correspond to the database connection. Now, when you attempt to migrate your database and no other migrations have been executed, Laravel will first execute the SQL statements in the schema file of the database connection you are using. After executing the schema file's SQL statements, Laravel will execute any remaining migrations that were not part of the schema dump.

If your application's tests use a different database connection than the one you typically use during local development, you should ensure you have dumped a schema file using that database connection so that your tests are able to build your database. You may wish to do this after dumping the database connection you typically use during local development:

```sh
php artisan schema:dump
php artisan schema:dump --database=testing --prune
```

You should commit your database schema file to source control so that other new developers on your team may quickly create your application's initial database structure.
Migration squashing is only available for the MariaDB, MySQL, PostgreSQL, and SQLite databases and utilizes the database's command-line client.

**Migration Structure**:- A migration class contains two methods: up and down. The up method is used to add new tables, columns, or indexes to your database, while the down method should reverse the operations performed by the up method.
Within both of these methods, you may use the Laravel schema builder to expressively create and modify tables.For example, the following migration creates a flights table:

```php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
 
return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('flights', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('airline');
            $table->timestamps();
        });
    }
 
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::drop('flights');
    }
};
```

*Setting the Migration Connection*:- If your migration will be interacting with a database connection other than your application's default database connection, you should set the $connection property of your migration:

```php
/**
 * The database connection that should be used by the migration.
 *
 * @var string
 */
protected $connection = 'pgsql';
 
/**
 * Run the migrations.
 */
public function up(): void
{
    // ...
}
```

*Skipping Migrations*:- Sometimes a migration might be meant to support a feature that is not yet active and you do not want it to run yet. In this case you may define a shouldRun method on the migration. If the shouldRun method returns false, the migration will be skipped:

```php
use App\Models\Flight;
use Laravel\Pennant\Feature;
 
/**
 * Determine if this migration should run.
 */
public function shouldRun(): bool
{
    return Feature::active(Flight::class);
}
```


**Running Migrations**:- To run all of your outstanding migrations, execute the migrate Artisan command:

```sh
php artisan migrate
```

If you would like to see which migrations have already run and which are still pending, you may use the migrate:status Artisan command:

```sh
php artisan migrate:status
```

If you provide the --step option to the migrate command, the command will run each migration as its own batch, allowing you to roll back individual migrations later using the migrate:rollback command:

```sh
php artisan migrate --step
```

If you would like to see the SQL statements that will be executed by the migrations without actually running them, you may provide the --pretend flag to the migrate command:

```sh
php artisan migrate --pretend
```

*Isolating Migration Execution*:- If you are deploying your application across multiple servers and running migrations as part of your deployment process, you likely do not want two servers attempting to migrate the database at the same time. To avoid this, you may use the isolated option when invoking the migrate command.
When the isolated option is provided, Laravel will acquire an atomic lock using your application's cache driver before attempting to run your migrations. All other attempts to run the migrate command while that lock is held will not execute; however, the command will still exit with a successful exit status code:

```sh
php artisan migrate --isolated
```

To utilize this feature, your application must be using the memcached, redis, dynamodb, database, file, or array cache driver as your application's default cache driver. In addition, all servers must be communicating with the same central cache server.


*Forcing Migrations to Run in Production*:- Some migration operations are destructive, which means they may cause you to lose data. In order to protect you from running these commands against your production database, you will be prompted for confirmation before the commands are executed. To force the commands to run without a prompt, use the --force flag:

```sh
php artisan migrate --force
```

*Rolling Back Migrations*:- To roll back the latest migration operation, you may use the rollback Artisan command. This command rolls back the last "batch" of migrations, which may include multiple migration files:

```sh
php artisan migrate:rollback
```

You may roll back a limited number of migrations by providing the step option to the rollback command. For example, the following command will roll back the last five migrations:

```sh
php artisan migrate:rollback --step=5
```

You may roll back a specific "batch" of migrations by providing the batch option to the rollback command, where the batch option corresponds to a batch value within your application's migrations database table. For example, the following command will roll back all migrations in batch three:

```sh
php artisan migrate:rollback --batch=3
```

If you would like to see the SQL statements that will be executed by the migrations without actually running them, you may provide the --pretend flag to the migrate:rollback command:

```sh
php artisan migrate:rollback --pretend
```

The migrate:reset command will roll back all of your application's migrations:

```sh
php artisan migrate:reset
```

*Roll Back and Migrate Using a Single Command*:- The migrate:refresh command will roll back all of your migrations and then execute the migrate command. This command effectively re-creates your entire database:

```sh
php artisan migrate:refresh
 
# Refresh the database and run all database seeds...
php artisan migrate:refresh --seed
```

You may roll back and re-migrate a limited number of migrations by providing the step option to the refresh command. For example, the following command will roll back and re-migrate the last five migrations:

```sh
php artisan migrate:refresh --step=5
```

Drop All Tables and Migrate
The migrate:fresh command will drop all tables from the database and then execute the migrate command:

```sh
php artisan migrate:fresh
 
php artisan migrate:fresh --seed
```

By default, the migrate:fresh command only drops tables from the default database connection. However, you may use the --database option to specify the database connection that should be migrated. The database connection name should correspond to a connection defined in your application's database configuration file:

```sh
php artisan migrate:fresh --database=admin
```

The migrate:fresh command will drop all database tables regardless of their prefix. This command should be used with caution when developing on a database that is shared with other applications.

**Tables**

*Creating Tables*:- To create a new database table, use the create method on the Schema facade. The create method accepts two arguments: the first is the name of the table, while the second is a closure which receives a Blueprint object that may be used to define the new table:

```php
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
 
Schema::create('users', function (Blueprint $table) {
    $table->id();
    $table->string('name');
    $table->string('email');
    $table->timestamps();
});
```

When creating the table, you may use any of the schema builder's column methods to define the table's columns.

`Determining Table / Column Existence`:- You may determine the existence of a table, column, or index using the hasTable, hasColumn, and hasIndex methods:

```php
if (Schema::hasTable('users')) {
    // The "users" table exists...
}
 
if (Schema::hasColumn('users', 'email')) {
    // The "users" table exists and has an "email" column...
}
 
if (Schema::hasIndex('users', ['email'], 'unique')) {
    // The "users" table exists and has a unique index on the "email" column...
}
```

`Database Connection and Table Options`:- If you want to perform a schema operation on a database connection that is not your application's default connection, use the connection method:

```php
Schema::connection('sqlite')->create('users', function (Blueprint $table) {
    $table->id();
});
```

In addition, a few other properties and methods may be used to define other aspects of the table's creation. The engine property may be used to specify the table's storage engine when using MariaDB or MySQL:

```php
Schema::create('users', function (Blueprint $table) {
    $table->engine('InnoDB');
 
    // ...
});
```

The charset and collation properties may be used to specify the character set and collation for the created table when using MariaDB or MySQL:

```php
Schema::create('users', function (Blueprint $table) {
    $table->charset('utf8mb4');
    $table->collation('utf8mb4_unicode_ci');
 
    // ...
});
```

The temporary method may be used to indicate that the table should be "temporary". Temporary tables are only visible to the current connection's database session and are dropped automatically when the connection is closed:

```php
Schema::create('calculations', function (Blueprint $table) {
    $table->temporary();
 
    // ...
});
```

If you would like to add a "comment" to a database table, you may invoke the comment method on the table instance. Table comments are currently only supported by MariaDB, MySQL, and PostgreSQL:

```php
Schema::create('calculations', function (Blueprint $table) {
    $table->comment('Business calculations');
 
    // ...
});
```

*Updating Tables*:- The table method on the Schema facade may be used to update existing tables. Like the create method, the table method accepts two arguments: the name of the table and a closure that receives a Blueprint instance you may use to add columns or indexes to the table:

```php
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
 
Schema::table('users', function (Blueprint $table) {
    $table->integer('votes');
});
```

`Renaming / Dropping Tables`:- To rename an existing database table, use the rename method:

```php
use Illuminate\Support\Facades\Schema;
 
Schema::rename($from, $to);
```

To drop an existing table, you may use the drop or dropIfExists methods:

```php
Schema::drop('users');
 
Schema::dropIfExists('users');
```

`Renaming Tables With Foreign Keys`:- Before renaming a table, you should verify that any foreign key constraints on the table have an explicit name in your migration files instead of letting Laravel assign a convention based name. Otherwise, the foreign key constraint name will refer to the old table name.


**Columns**
*Creating Columns*:- The table method on the Schema facade may be used to update existing tables. Like the create method, the table method accepts two arguments: the name of the table and a closure that receives an Illuminate\Database\Schema\Blueprint instance you may use to add columns to the table:

```php
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
 
Schema::table('users', function (Blueprint $table) {
    $table->integer('votes');
});
```

- *Available Column Types*:- The schema builder blueprint offers a variety of methods that correspond to the different types of columns you can add to your database tables. Each of the available methods are listed in the table below:
    - Boolean Types - boolean
    - String & Text Types - char,longText,mediumText,string,text,tinyText
    - Numeric Types - bigIncrements,bigInteger,decimal,double,float,id,increments,integer,mediumIncrements,mediumInteger,smallIncrements,smallInteger,tinyIncrements,tinyInteger,unsignedBigInteger,unsignedInteger,unsignedMediumInteger,unsignedSmallInteger,unsignedTinyInteger.
    - Date & Time Types:- dateTime,dateTimeTz,date,time,timeTz,timestamp,timestamps,timestampsTz,softDeletes,softDeletesTz,year.
    - Binary Types:- binary
    - Object & Json Types:- json,jsonb
    - UUID & ULID Types:- ulid,ulidMorphs,uuid,uuidMorphs,nullableUlidMorphs,nullableUuidMorphs.
    - Spatial Types:- geography,geometry
    - Relationship Types:-foreignId,foreignIdFor,foreignUlid,foreignUuid,morphs,nullableMorphs
    - Specialty Types:- enum,set,macAddress,ipAddress,rememberToken,vector

bigIncrements()
The bigIncrements method creates an auto-incrementing UNSIGNED BIGINT (primary key) equivalent column:

$table->bigIncrements('id');

bigInteger()
The bigInteger method creates a BIGINT equivalent column:

$table->bigInteger('votes');

binary()
The binary method creates a BLOB equivalent column:

$table->binary('photo');

When utilizing MySQL, MariaDB, or SQL Server, you may pass length and fixed arguments to create VARBINARY or BINARY equivalent column:

$table->binary('data', length: 16); // VARBINARY(16)
 
$table->binary('data', length: 16, fixed: true); // BINARY(16)

boolean()
The boolean method creates a BOOLEAN equivalent column:

$table->boolean('confirmed');

char()
The char method creates a CHAR equivalent column with of a given length:

$table->char('name', length: 100);

dateTimeTz()
The dateTimeTz method creates a DATETIME (with timezone) equivalent column with an optional fractional seconds precision:

$table->dateTimeTz('created_at', precision: 0);

dateTime()
The dateTime method creates a DATETIME equivalent column with an optional fractional seconds precision:

$table->dateTime('created_at', precision: 0);

date()
The date method creates a DATE equivalent column:

$table->date('created_at');

decimal()
The decimal method creates a DECIMAL equivalent column with the given precision (total digits) and scale (decimal digits):

$table->decimal('amount', total: 8, places: 2);

double()
The double method creates a DOUBLE equivalent column:

$table->double('amount');

enum()
The enum method creates a ENUM equivalent column with the given valid values:

$table->enum('difficulty', ['easy', 'hard']);

Of course, you may use the Enum::cases() method instead of manually defining an array of allowed values:

use App\Enums\Difficulty;
 
$table->enum('difficulty', Difficulty::cases());

float()
The float method creates a FLOAT equivalent column with the given precision:

$table->float('amount', precision: 53);

foreignId()
The foreignId method creates an UNSIGNED BIGINT equivalent column:

$table->foreignId('user_id');

foreignIdFor()
The foreignIdFor method adds a {column}_id equivalent column for a given model class. The column type will be UNSIGNED BIGINT, CHAR(36), or CHAR(26) depending on the model key type:

$table->foreignIdFor(User::class);

foreignUlid()
The foreignUlid method creates a ULID equivalent column:

$table->foreignUlid('user_id');

foreignUuid()
The foreignUuid method creates a UUID equivalent column:

$table->foreignUuid('user_id');

geography()
The geography method creates a GEOGRAPHY equivalent column with the given spatial type and SRID (Spatial Reference System Identifier):

$table->geography('coordinates', subtype: 'point', srid: 4326);

Support for spatial types depends on your database driver. Please refer to your database's documentation. If your application is utilizing a PostgreSQL database, you must install the PostGIS extension before the geography method may be used.

geometry()
The geometry method creates a GEOMETRY equivalent column with the given spatial type and SRID (Spatial Reference System Identifier):

$table->geometry('positions', subtype: 'point', srid: 0);

Support for spatial types depends on your database driver. Please refer to your database's documentation. If your application is utilizing a PostgreSQL database, you must install the PostGIS extension before the geometry method may be used.

id()
The id method is an alias of the bigIncrements method. By default, the method will create an id column; however, you may pass a column name if you would like to assign a different name to the column:

$table->id();

increments()
The increments method creates an auto-incrementing UNSIGNED INTEGER equivalent column as a primary key:

$table->increments('id');

integer()
The integer method creates an INTEGER equivalent column:

$table->integer('votes');

ipAddress()
The ipAddress method creates a VARCHAR equivalent column:

$table->ipAddress('visitor');

When using PostgreSQL, an INET column will be created.

json()
The json method creates a JSON equivalent column:

$table->json('options');

When using SQLite, a TEXT column will be created.

jsonb()
The jsonb method creates a JSONB equivalent column:

$table->jsonb('options');

When using SQLite, a TEXT column will be created.

longText()
The longText method creates a LONGTEXT equivalent column:

$table->longText('description');

When utilizing MySQL or MariaDB, you may apply a binary character set to the column in order to create a LONGBLOB equivalent column:

$table->longText('data')->charset('binary'); // LONGBLOB

macAddress()
The macAddress method creates a column that is intended to hold a MAC address. Some database systems, such as PostgreSQL, have a dedicated column type for this type of data. Other database systems will use a string equivalent column:

$table->macAddress('device');

mediumIncrements()
The mediumIncrements method creates an auto-incrementing UNSIGNED MEDIUMINT equivalent column as a primary key:

$table->mediumIncrements('id');

mediumInteger()
The mediumInteger method creates a MEDIUMINT equivalent column:

$table->mediumInteger('votes');

mediumText()
The mediumText method creates a MEDIUMTEXT equivalent column:

$table->mediumText('description');

When utilizing MySQL or MariaDB, you may apply a binary character set to the column in order to create a MEDIUMBLOB equivalent column:

$table->mediumText('data')->charset('binary'); // MEDIUMBLOB

morphs()
The morphs method is a convenience method that adds a {column}_id equivalent column and a {column}_type VARCHAR equivalent column. The column type for the {column}_id will be UNSIGNED BIGINT, CHAR(36), or CHAR(26) depending on the model key type.

This method is intended to be used when defining the columns necessary for a polymorphic Eloquent relationship. In the following example, taggable_id and taggable_type columns would be created:

$table->morphs('taggable');

nullableMorphs()
The method is similar to the morphs method; however, the columns that are created will be "nullable":

$table->nullableMorphs('taggable');

nullableUlidMorphs()
The method is similar to the ulidMorphs method; however, the columns that are created will be "nullable":

$table->nullableUlidMorphs('taggable');

nullableUuidMorphs()
The method is similar to the uuidMorphs method; however, the columns that are created will be "nullable":

$table->nullableUuidMorphs('taggable');

rememberToken()
The rememberToken method creates a nullable, VARCHAR(100) equivalent column that is intended to store the current "remember me" authentication token:

$table->rememberToken();

set()
The set method creates a SET equivalent column with the given list of valid values:

$table->set('flavors', ['strawberry', 'vanilla']);

smallIncrements()
The smallIncrements method creates an auto-incrementing UNSIGNED SMALLINT equivalent column as a primary key:

$table->smallIncrements('id');

smallInteger()
The smallInteger method creates a SMALLINT equivalent column:

$table->smallInteger('votes');

softDeletesTz()
The softDeletesTz method adds a nullable deleted_at TIMESTAMP (with timezone) equivalent column with an optional fractional seconds precision. This column is intended to store the deleted_at timestamp needed for Eloquent's "soft delete" functionality:

$table->softDeletesTz('deleted_at', precision: 0);

softDeletes()
The softDeletes method adds a nullable deleted_at TIMESTAMP equivalent column with an optional fractional seconds precision. This column is intended to store the deleted_at timestamp needed for Eloquent's "soft delete" functionality:

$table->softDeletes('deleted_at', precision: 0);

string()
The string method creates a VARCHAR equivalent column of the given length:

$table->string('name', length: 100);

text()
The text method creates a TEXT equivalent column:

$table->text('description');

When utilizing MySQL or MariaDB, you may apply a binary character set to the column in order to create a BLOB equivalent column:

$table->text('data')->charset('binary'); // BLOB

timeTz()
The timeTz method creates a TIME (with timezone) equivalent column with an optional fractional seconds precision:

$table->timeTz('sunrise', precision: 0);

time()
The time method creates a TIME equivalent column with an optional fractional seconds precision:

$table->time('sunrise', precision: 0);

timestampTz()
The timestampTz method creates a TIMESTAMP (with timezone) equivalent column with an optional fractional seconds precision:

$table->timestampTz('added_at', precision: 0);

timestamp()
The timestamp method creates a TIMESTAMP equivalent column with an optional fractional seconds precision:

$table->timestamp('added_at', precision: 0);

timestampsTz()
The timestampsTz method creates created_at and updated_at TIMESTAMP (with timezone) equivalent columns with an optional fractional seconds precision:

$table->timestampsTz(precision: 0);

timestamps()
The timestamps method creates created_at and updated_at TIMESTAMP equivalent columns with an optional fractional seconds precision:

$table->timestamps(precision: 0);

tinyIncrements()
The tinyIncrements method creates an auto-incrementing UNSIGNED TINYINT equivalent column as a primary key:

$table->tinyIncrements('id');

tinyInteger()
The tinyInteger method creates a TINYINT equivalent column:

$table->tinyInteger('votes');

tinyText()
The tinyText method creates a TINYTEXT equivalent column:

$table->tinyText('notes');

When utilizing MySQL or MariaDB, you may apply a binary character set to the column in order to create a TINYBLOB equivalent column:

$table->tinyText('data')->charset('binary'); // TINYBLOB

unsignedBigInteger()
The unsignedBigInteger method creates an UNSIGNED BIGINT equivalent column:

$table->unsignedBigInteger('votes');

unsignedInteger()
The unsignedInteger method creates an UNSIGNED INTEGER equivalent column:

$table->unsignedInteger('votes');

unsignedMediumInteger()
The unsignedMediumInteger method creates an UNSIGNED MEDIUMINT equivalent column:

$table->unsignedMediumInteger('votes');

unsignedSmallInteger()
The unsignedSmallInteger method creates an UNSIGNED SMALLINT equivalent column:

$table->unsignedSmallInteger('votes');

unsignedTinyInteger()
The unsignedTinyInteger method creates an UNSIGNED TINYINT equivalent column:

$table->unsignedTinyInteger('votes');

ulidMorphs()
The ulidMorphs method is a convenience method that adds a {column}_id CHAR(26) equivalent column and a {column}_type VARCHAR equivalent column.

This method is intended to be used when defining the columns necessary for a polymorphic Eloquent relationship that use ULID identifiers. In the following example, taggable_id and taggable_type columns would be created:

$table->ulidMorphs('taggable');

uuidMorphs()
The uuidMorphs method is a convenience method that adds a {column}_id CHAR(36) equivalent column and a {column}_type VARCHAR equivalent column.

This method is intended to be used when defining the columns necessary for a polymorphic Eloquent relationship that use UUID identifiers. In the following example, taggable_id and taggable_type columns would be created:

$table->uuidMorphs('taggable');

ulid()
The ulid method creates a ULID equivalent column:

$table->ulid('id');

uuid()
The uuid method creates a UUID equivalent column:

$table->uuid('id');

vector()
The vector method creates a vector equivalent column:

$table->vector('embedding', dimensions: 100);

When utilizing PostgreSQL, the pgvector extension must be loaded before vector columns can be created:

Schema::ensureVectorExtensionExists();

year()
The year method creates a YEAR equivalent column:

$table->year('birth_year');

Column Modifiers
In addition to the column types listed above, there are several column "modifiers" you may use when adding a column to a database table. For example, to make the column "nullable", you may use the nullable method:

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
 
Schema::table('users', function (Blueprint $table) {
    $table->string('email')->nullable();
});

The following table contains all of the available column modifiers. This list does not include index modifiers:

Modifier	Description
->after('column')	Place the column "after" another column (MariaDB / MySQL).
->autoIncrement()	Set INTEGER columns as auto-incrementing (primary key).
->charset('utf8mb4')	Specify a character set for the column (MariaDB / MySQL).
->collation('utf8mb4_unicode_ci')	Specify a collation for the column.
->comment('my comment')	Add a comment to a column (MariaDB / MySQL / PostgreSQL).
->default($value)	Specify a "default" value for the column.
->first()	Place the column "first" in the table (MariaDB / MySQL).
->from($integer)	Set the starting value of an auto-incrementing field (MariaDB / MySQL / PostgreSQL).
->instant()	Add or modify the column using an instant operation (MySQL).
->invisible()	Make the column "invisible" to SELECT * queries (MariaDB / MySQL).
->lock($mode)	Specify a lock mode for the column operation (MySQL).
->nullable($value = true)	Allow NULL values to be inserted into the column.
->storedAs($expression)	Create a stored generated column (MariaDB / MySQL / PostgreSQL / SQLite).
->unsigned()	Set INTEGER columns as UNSIGNED (MariaDB / MySQL).
->useCurrent()	Set TIMESTAMP columns to use CURRENT_TIMESTAMP as default value.
->useCurrentOnUpdate()	Set TIMESTAMP columns to use CURRENT_TIMESTAMP when a record is updated (MariaDB / MySQL).
->virtualAs($expression)	Create a virtual generated column (MariaDB / MySQL / SQLite).
->generatedAs($expression)	Create an identity column with specified sequence options (PostgreSQL).
->always()	Defines the precedence of sequence values over input for an identity column (PostgreSQL).
Default Expressions
The default modifier accepts a value or an Illuminate\Database\Query\Expression instance. Using an Expression instance will prevent Laravel from wrapping the value in quotes and allow you to use database specific functions. One situation where this is particularly useful is when you need to assign default values to JSON columns:

<?php
 
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Query\Expression;
use Illuminate\Database\Migrations\Migration;
 
return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('flights', function (Blueprint $table) {
            $table->id();
            $table->json('movies')->default(new Expression('(JSON_ARRAY())'));
            $table->timestamps();
        });
    }
};

Support for default expressions depends on your database driver, database version, and the field type. Please refer to your database's documentation.

Column Order
When using the MariaDB or MySQL database, the after method may be used to add columns after an existing column in the schema:

$table->after('password', function (Blueprint $table) {
    $table->string('address_line1');
    $table->string('address_line2');
    $table->string('city');
});

Instant Column Operations
When using MySQL, you may chain the instant modifier onto a column definition to indicate that the column should be added or modified using MySQL's "instant" algorithm. This algorithm allows certain schema changes to be performed without a full table rebuild, making them nearly instantaneous regardless of table size:

$table->string('name')->nullable()->instant();

Instant column additions can only append columns to the end of the table, so the instant modifier cannot be combined with the after or first modifiers. In addition, the algorithm does not support all column types or operations. If the requested operation is incompatible, MySQL will raise an error.

Please refer to MySQL's documentation to determine which operations are compatible with instant column modifications.

DDL Locking
When using MySQL, you may chain the lock modifier onto column, index, or foreign key definitions to control table locking during schema operations. MySQL supports several lock modes: none allows concurrent reads and writes, shared allows concurrent reads but blocks writes, exclusive blocks all concurrent access, and default lets MySQL choose the most appropriate mode:

$table->string('name')->lock('none');
 
$table->index('email')->lock('shared');

If the requested lock mode is incompatible with the operation, MySQL will raise an error. The lock modifier may be combined with the instant modifier to further optimize schema changes:

$table->string('name')->instant()->lock('none');

Modifying Columns
The change method allows you to modify the type and attributes of existing columns. For example, you may wish to increase the size of a string column. To see the change method in action, let's increase the size of the name column from 25 to 50. To accomplish this, we simply define the new state of the column and then call the change method:

Schema::table('users', function (Blueprint $table) {
    $table->string('name', 50)->change();
});

When modifying a column, you must explicitly include all the modifiers you want to keep on the column definition - any missing attribute will be dropped. For example, to retain the unsigned, default, and comment attributes, you must call each modifier explicitly when changing the column:

Schema::table('users', function (Blueprint $table) {
    $table->integer('votes')->unsigned()->default(1)->comment('my comment')->change();
});

The change method does not change the indexes of the column. Therefore, you may use index modifiers to explicitly add or drop an index when modifying the column:

// Add an index...
$table->bigIncrements('id')->primary()->change();
 
// Drop an index...
$table->char('postal_code', 10)->unique(false)->change();

Renaming Columns
To rename a column, you may use the renameColumn method provided by the schema builder:

Schema::table('users', function (Blueprint $table) {
    $table->renameColumn('from', 'to');
});

*Dropping Columns*:- To drop a column, you may use the dropColumn method on the schema builder:

```php
Schema::table('users', function (Blueprint $table) {
    $table->dropColumn('votes');
});
```

You may drop multiple columns from a table by passing an array of column names to the dropColumn method:

```php
Schema::table('users', function (Blueprint $table) {
    $table->dropColumn(['votes', 'avatar', 'location']);
});
```

`Available Command Aliases`:- Laravel provides several convenient methods related to dropping common types of columns. Each of these methods is described in the table below:

$table->dropMorphs('morphable'); - Drop the morphable_id and morphable_type columns.
$table->dropRememberToken(); - Drop the remember_token column.
$table->dropSoftDeletes(); - Drop the deleted_at column.
$table->dropSoftDeletesTz(); - Alias of dropSoftDeletes() method.
$table->dropTimestamps(); - Drop the created_at and updated_at columns.
$table->dropTimestampsTz(); - Alias of dropTimestamps() method.


**Indexes**

*Creating Indexes*:- The Laravel schema builder supports several types of indexes. The following example creates a new email column and specifies that its values should be unique. To create the index, we can chain the unique method onto the column definition:

```php
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
 
Schema::table('users', function (Blueprint $table) {
    $table->string('email')->unique();
});
```

Alternatively, you may create the index after defining the column. To do so, you should call the unique method on the schema builder blueprint. This method accepts the name of the column that should receive a unique index:

```php
$table->unique('email');
```
You may even pass an array of columns to an index method to create a compound (or composite) index:

$table->index(['account_id', 'created_at']);

When creating an index, Laravel will automatically generate an index name based on the table, column names, and the index type, but you may pass a second argument to the method to specify the index name yourself:

$table->unique('email', 'unique_email');

*Available Index Types*:- Laravel's schema builder blueprint class provides methods for creating each type of index supported by Laravel. Each index method accepts an optional second argument to specify the name of the index. If omitted, the name will be derived from the names of the table and column(s) used for the index, as well as the index type. Each of the available index methods is described in the table below:

$table->primary('id'); - Adds a primary key.
$table->primary(['id', 'parent_id']); - Adds composite keys.
$table->unique('email'); - Adds a unique index.
$table->index('state');	 - Adds an index.
$table->fullText('body'); - Adds a full text index (MariaDB / MySQL / PostgreSQL).
$table->fullText('body')->language('english'); - Adds a full text index of the specified language (PostgreSQL).
$table->spatialIndex('location'); - Adds a spatial index (except SQLite).

Online Index Creation
By default, creating an index on a large table can lock the table and block reads or writes while the index is being built. When using PostgreSQL or SQL Server, you may chain the online method onto an index definition to create the index without locking the table, allowing your application to continue reading and writing data during index creation:

$table->string('email')->unique()->online();

When using PostgreSQL, this adds the CONCURRENTLY option to the index creation statement. When using SQL Server, this adds the WITH (online = on) option.

Renaming Indexes
To rename an index, you may use the renameIndex method provided by the schema builder blueprint. This method accepts the current index name as its first argument and the desired name as its second argument:

$table->renameIndex('from', 'to')

Dropping Indexes
To drop an index, you must specify the index's name. By default, Laravel automatically assigns an index name based on the table name, the name of the indexed column, and the index type. Here are some examples:

Command	Description
$table->dropPrimary('users_id_primary');	Drop a primary key from the "users" table.
$table->dropUnique('users_email_unique');	Drop a unique index from the "users" table.
$table->dropIndex('geo_state_index');	Drop a basic index from the "geo" table.
$table->dropFullText('posts_body_fulltext');	Drop a full text index from the "posts" table.
$table->dropSpatialIndex('geo_location_spatialindex');	Drop a spatial index from the "geo" table (except SQLite).
If you pass an array of columns into a method that drops indexes, the conventional index name will be generated based on the table name, columns, and index type:

Schema::table('geo', function (Blueprint $table) {
    $table->dropIndex(['state']); // Drops index 'geo_state_index'
});

Foreign Key Constraints
Laravel also provides support for creating foreign key constraints, which are used to force referential integrity at the database level. For example, let's define a user_id column on the posts table that references the id column on a users table:

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
 
Schema::table('posts', function (Blueprint $table) {
    $table->unsignedBigInteger('user_id');
 
    $table->foreign('user_id')->references('id')->on('users');
});

Since this syntax is rather verbose, Laravel provides additional, terser methods that use conventions to provide a better developer experience. When using the foreignId method to create your column, the example above can be rewritten like so:

Schema::table('posts', function (Blueprint $table) {
    $table->foreignId('user_id')->constrained();
});

The foreignId method creates an UNSIGNED BIGINT equivalent column, while the constrained method will use conventions to determine the table and column being referenced. If your table name does not match Laravel's conventions, you may manually provide it to the constrained method. In addition, the name that should be assigned to the generated index may be specified as well:

Schema::table('posts', function (Blueprint $table) {
    $table->foreignId('user_id')->constrained(
        table: 'users', indexName: 'posts_user_id'
    );
});

You may also specify the desired action for the "on delete" and "on update" properties of the constraint:

$table->foreignId('user_id')
    ->constrained()
    ->onUpdate('cascade')
    ->onDelete('cascade');

An alternative, expressive syntax is also provided for these actions:

Method	Description
$table->cascadeOnUpdate();	Updates should cascade.
$table->restrictOnUpdate();	Updates should be restricted.
$table->nullOnUpdate();	Updates should set the foreign key value to null.
$table->noActionOnUpdate();	No action on updates.
$table->cascadeOnDelete();	Deletes should cascade.
$table->restrictOnDelete();	Deletes should be restricted.
$table->nullOnDelete();	Deletes should set the foreign key value to null.
$table->noActionOnDelete();	Prevents deletes if child records exist.
Any additional column modifiers must be called before the constrained method:

$table->foreignId('user_id')
    ->nullable()
    ->constrained();

Dropping Foreign Keys
To drop a foreign key, you may use the dropForeign method, passing the name of the foreign key constraint to be deleted as an argument. Foreign key constraints use the same naming convention as indexes. In other words, the foreign key constraint name is based on the name of the table and the columns in the constraint, followed by a "_foreign" suffix:

$table->dropForeign('posts_user_id_foreign');

Alternatively, you may pass an array containing the column name that holds the foreign key to the dropForeign method. The array will be converted to a foreign key constraint name using Laravel's constraint naming conventions:

$table->dropForeign(['user_id']);

Toggling Foreign Key Constraints
You may enable or disable foreign key constraints within your migrations by using the following methods:

Schema::enableForeignKeyConstraints();
 
Schema::disableForeignKeyConstraints();
 
Schema::withoutForeignKeyConstraints(function () {
    // Constraints disabled within this closure...
});

SQLite disables foreign key constraints by default. When using SQLite, make sure to enable foreign key support in your database configuration before attempting to create them in your migrations.

Events
For convenience, each migration operation will dispatch an event. All of the following events extend the base Illuminate\Database\Events\MigrationEvent class:

Class	Description
Illuminate\Database\Events\MigrationsStarted	A batch of migrations is about to be executed.
Illuminate\Database\Events\MigrationsEnded	A batch of migrations has finished executing.
Illuminate\Database\Events\MigrationStarted	A single migration is about to be executed.
Illuminate\Database\Events\MigrationEnded	A single migration has finished executing.
Illuminate\Database\Events\NoPendingMigrations	A migration command found no pending migrations.
Illuminate\Database\Events\SchemaDumped	A database schema dump has completed.
Illuminate\Database\Events\SchemaLoaded	An existing database schema dump has loaded.

-------------


## Seeding

Laravel includes the ability to seed your database with data using seed classes. All seed classes are stored in the database/seeders directory. By default, a DatabaseSeeder class is defined for you. From this class, you may use the call method to run other seed classes, allowing you to control the seeding order.
Mass assignment protection is automatically disabled during database seeding.
