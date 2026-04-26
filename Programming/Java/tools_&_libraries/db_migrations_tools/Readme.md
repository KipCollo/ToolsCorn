# Database Migrations

## Liquibase

Liquibase is a database schema change management solution that enables you to revise and release database changes faster and safer from development to production.

`Changelog`:- With Liquibase, you use a text-based changelog file to sequentially list all changes made to your database. This ledger helps Liquibase audit your database and execute any changes that are not yet applied. You can store and version your changelog in any source control tool.
A `changeset` is the basic unit of change in Liquibase. You store all your changesets in your Changelog. Your changesets contain Change Types that specify what each change does, like creating a new table or adding a column to an existing table.

Liquibase is a Java-based application that runs on minimal hardware. To use Liquibase, Java must be installed on your host machine.
Liquibase is a database schema change management solution that enables you to revise and release database changes faster and safer from development to production.
To start using Liquibase quickly and easily, you can write your migration scripts in SQL.

To take advantage of database abstraction abilities that allow you to write changes once and deploy to different database platforms, you can specify database-agnostic changes in XML, JSON, or YAML.

- changesets - Define database changes
- changelog - Add databse changes to a file.
- update - Run command to deploy database changes.
- DATABASECHANGELOG and DATABASECHANGELOGLOK - Track and version database changes.

`Changelog organization`:- Liquibase uses SQL, XML, JSON, and YAML changelog files to list database changes sequentially. Database changes have the format of changesets. Changesets contain Change Types, which are types of operations to apply to the database, such as adding a column or primary key. Context, Label, and Precondition changelog tags help precisely control when a database change is made and to which database environment it is deployed.

`Liquibase properties file`:- To set the connection between Liquibase with your database, you need the database connection information and parameters. Liquibase includes a properties file to store database connection information and parameters that rarely change. Setting the parameters as environment variables to handle sensitive database information or running them at the command prompt is an alternative option.

Liquibase runs six basic types of commands: update, rollback, snapshot, diff, status, and utility commands. When you use the update command to deploy your first changes, Liquibase checks the database connection information, including credentials, database URL, and JDBC driver.
When you deploy your changes, Liquibase creates two tables in your database: DATABASECHANGELOG and DATABASECHANGELOGLOCK. The DATABASECHANGELOG table tracks deployed changes so that you have a record. Liquibase compares the changesets in the changelog file with the DATABASECHANGELOG tracking table and deploys only new changesets.DATABASECHANGELOGLOCK prevents multiple instances of Liquibase from updating the database simultaneously. The table manages access to the DATABASECHANGELOG table during deployment and ensures that only one instance of Liquibase updates the database.
Liquibase offers many ways to manage your database changes:
1. Run the command-line client (CLI).
2. Use the Liquibase Java API and integrate Liquibase into your application to deploy database changes on application startup.
3. Integrate Liquibase into your build processes using Maven, Spring Boot, Ant, Jenkins, GitHub Actions, or other CI/CD tools.
4. With ephemeral environments in Docker.

**Create a Liquibase project**:- When you’re ready to use Liquibase, the first step whether you have an existing database or are implementing Liquibase while choosing a new database is to create a project.
Liquibase projects are separate from your Liquibase installation. While the Liquibase CLI is installed globally on your system, the project directory is where all change tracking, environment configuration, and automation settings live.

- Run the init project command:- Navigate to the folder where you want your Liquibase project to live. Then run:

```sh
liquibase init project
```

- Validate that your project creation was successful:- Liquibase generates several files in your current directory. You should see several files that have been created, including:

```
├── example-changelog.sql
├── liquibase.properties
├── liquibase.flowfile.yaml
├── liquibase.advanced.flowfile.yaml
├── liquibase.checks-package.yaml
├── liquibase.flowvariables.yaml
├── liquibase.endstage.flow
```

For most databases, you will now need to use the liquibase.properties file to connect your database to Liquibase.
This file allows you to avoid repeating common flags on every CLI command and is the standard approach in most Liquibase workflows.

**Generate your changelog from an existing database**:- If you already have a working database and want to start managing it with Liquibase, the first step is to generate a changelog that captures the current state of your schema. This allows you to bring Liquibase into your existing project without disrupting your database or rebuilding anything from scratch.

- Generate your changelog:- You can use the following example code.

1. Navigate to your Liquibase project folder in the CLI.
2. Set your_changelog_file_name to a name for the changelog file that will be generated, such as dbchangelog.
3. Set your_file_extension to the format you'd like to use, such as dbchangelog.xml.

Liquibase supports .sql, .yaml, .json, and .xml formats.

```sh
liquibase generate-changelog --changelog-file=your_changelog_file_name.your_extension
```

Note: After you create a Liquibase project using liquibase init project, Liquibase generates a standard project structure, including a file named example-changelog.sql. This file is only a sample, once you've generated your changelogs, you can delete it to avoid confusion.

- Sync the changelog with your database:- Once you have your changelog file, populate the DATABASECHANGELOG tracking table with the changesets from this changelog.
Liquibase keeps track of your already deployed changes with the help of its DATABASECHANGELOG tracking table.

To create this table for the first time, use the changelog-sync command. The changelog-sync command will populate the DATABASECHANGELOG table with the changesets metadata as if you have been using Liquibase all along.

```sh
liquibase changelog-sync --changelog-file=dbchangelog.xml
```

This command updates the tracking table so Liquibase knows your database is up to date with the changelog. It won’t make any schema changes.


**Embed Liquibase in Your Application**:- The Java API allows Liquibase to be embedded directly into an application. This allows you to do things such as run Liquibase automatically within an application startup process.

This can be particularly helpful in environments where you have less control over the deployment process or want a simpler deployment process, such as:

- For web applications that use continuous delivery and have an automated release process from code check-in through live production which gets executed multiple times per day.
- In packaged applications that are shipped to make the database management portion transparent.

Depending on how your application is written, you can use existing integrations such as Spring Boot or the Servlet Listener. However, you can also create a custom integration using the Liquibase APIs directly.

This guide covers running an "update" operation against a changelog packaged in your application, but the same approach can be used to perform any Liquibase logic from your custom integration including rolling back changes, generating SQL, or snapshotting the schema.


1. Create a changelog file within your application's source code to be packaged with your application.The location of the changelog in your source repository file will depend on your application's build process.
2. Create a class to run Liquibase.Where you put this class and how you run it will depend on your application's architecture.For example, if you are using Spring, you would add the @Service annotation. Or, if you are running a standalone application, you may add a call to that class from within the main method.

Configure The ResourceAccessor - Liquibase uses the liquibase.resource.ResourceAccessor interface to find and read changelog files. Because your changelog file is packaged with your application, you will configure Liquibase to use the liquibase.resource.ClassLoaderResourceAccessor.

With your connection and ResourceAccessor set up, you can now run the Liquibase update command.
Liquibase provides a Command API for running commands from Java code. Executing commands consists of 3 steps:

1. Create a new liquibase.command.CommandScope object. This provides the container for configuration and running the command.
2. Set arguments on the CommandScope with addArgumentValue()
3. Execute the command with execute().
While there are constants for the command names and argument names within the Liquibase code, they are found in the various liquibase.command.CommandStep implementations and can be difficult to find. Therefore, it's generally easiest to use the command name and argument strings you find in the Liquibase CLI.

```java
package com.example;

import liquibase.Scope;
import liquibase.command.CommandScope;
import liquibase.resource.ClassLoaderResourceAccessor;

public class MyLiquibaseRunner {


    public void runLiquibase() throws Exception {
        System.out.println("Running Liquibase...");

        Scope.child(Scope.Attr.resourceAccessor, new ClassLoaderResourceAccessor(), () -> {
            CommandScope update = new CommandScope("update");

            update.addArgumentValue("changelogFile", "com/example/changelog.xml");
            update.addArgumentValue("url", "YOUR_DB_URL");
            update.addArgumentValue("username", "YOUR_DB_USER");
            update.addArgumentValue("password", "YOUR_DB_PWD");

            update.execute();
        });

        System.out.println("Running Liquibase...DONE");
    }
}
```


Optional: Reuse an Existing Database Connection - The above example passes the url, username, and password that the update command which creates a new connection. However, if you already have logic to create a database connection, you can reuse that connection with Liquibase.

The update command requires a liquibase.database.Database object, which wraps the base java.sql.Connection object with additional Liquibase-specific logic. The easiest way to create a Database object is to use

```java
liquibase.database.Database database = liquibase.database.DatabaseFactory.getInstance().findCorrectDatabaseImplementation(new JdbcConnection(connection));
```

where connection is your existing java.sql.Connection object.

Once you have your database object, you can replace the url, username, and password arguments with a single"database" argument.

```java
package com.example;

import liquibase.Scope;
import liquibase.command.CommandScope;
import liquibase.database.Database;
import liquibase.database.DatabaseFactory;
import liquibase.database.jvm.JdbcConnection;
import liquibase.resource.ClassLoaderResourceAccessor;

import java.sql.Connection;

public class MyLiquibaseRunner {
    public void runLiquibase() throws Exception {
        System.out.println("Running Liquibase...");

        Connection connection = openConnection(); //your openConnection logic
        Database database = DatabaseFactory.getInstance().findCorrectDatabaseImplementation(new JdbcConnection(connection));

        Scope.child(Scope.Attr.resourceAccessor, new ClassLoaderResourceAccessor(), () -> {
            CommandScope update = new CommandScope("update");

            update.addArgumentValue("changelogFile", "com/example/changelog.xml");
            update.addArgumentValue("database", database);

            update.execute();
        });

        System.out.println("Running Liquibase...DONE");
    }
}
```





## Flyway

