# PostgreSQL Roles

PostgreSQL utilizes *roles* as a flexible method for managing user authentication, access control, and permissions within a database.
PostgreSQL manages database access permissions using the concept of roles. A role can be thought of as either a database user, or a group of database users, depending on how the role is set up. Roles can own database objects (for example, tables and functions) and can assign privileges on those objects to other roles to control who has access to which objects. Furthermore, it is possible to grant membership in a role to another role, thus allowing the member role to use privileges assigned to another role.

## What are roles?

A role in PostgreSQL represents a user or a group of users, depending on the context. Roles can be used to control which actions a user can perform on a specific database object. There are two types of roles: login roles and group roles. A login role can be assigned to a user who needs to access the database, while a group role can be assigned to multiple users for easier control over access and permissions.
Database roles are global across a database cluster installation (and not per individual database).

## Creating Roles

To create a new role, you can use the `CREATE ROLE` command followed by the role name. For example:

```sql
CREATE ROLE new_role;
```

new_role follows the rules for SQL identifiers: either unadorned without special characters, or double-quoted. (In practice, you will usually want to add additional options, such as LOGIN, to the command.)

To create a role with login capabilities, you can use the `LOGIN` clause:

```sql
CREATE ROLE user_role WITH LOGIN;
```

*Role Attributes*:- Roles can be assigned various attributes to control their behavior and privileges within the PostgreSQL environment.A database role can have a number of attributes that define its privileges and interact with the client authentication system. Some common role attributes include:

- `LOGIN` - login privilege: Allows the role to log in and establish a new database session.Only roles that have the LOGIN attribute can be used as the initial role name for a database connection. A role with the LOGIN attribute can be considered the same as a “database user”.
- `SUPERUSER` - superuser status: Grants all privileges to the role, including overriding access restrictions.A database superuser bypasses all permission checks, except the right to log in.
- `CREATEDB` - database creation: Allows the role to create new databases.A role must be explicitly given permission to create databases (except for superusers, since those bypass all permission checks).
- `CREATEROLE` - role creation: Allows the role to create and manage other roles.A role with CREATEROLE privilege can alter and drop roles which have been granted to the CREATEROLE user with the ADMIN option.Altering a role includes most changes that can be made using ALTER ROLE, including, for example, changing passwords. It also includes modifications to a role that can be made using the COMMENT and SECURITY LABEL commands.
- `REPLICATION` - initiating replication: A role used for streaming replication must have LOGIN permission as well.A role must explicitly be given permission to initiate streaming replication (except for superusers,since those bypass all permission checks).
- `PASSWORD` - password: A password is only significant if the client authentication method requires the user to supply a password when connecting to the database. The password and md5 authentication methods make use of passwords. Database passwords are separate from operating system passwords.
- `INHERT & INHERT TRUE or FALSE` - inheritance of privileges: A role inherits the privileges of roles it is a member of, by default. However, to create a role which does not inherit privileges by default, use CREATE ROLE name NOINHERIT. Alternatively,inheritance can be overridden for individual grants by using WITH INHERIT TRUE or WITH INHERIT FALSE.
- `BYPASSRLS` - bypassing row-level security: A role must be explicitly given permission to bypass every row-level security (RLS) policy (except for superusers, since those bypass all permission checks). To create such a role, use CREATE ROLE name BYPASSRLS as a superuser.
- `CONNECTION LIMIT` - connection limit: Connection limit can specify how many concurrent connections a role can make. -1 (the default) means no limit. Specify connection limit upon role creation with CREATE ROLE name CONNECTION LIMIT 'integer'.


You can also specify multiple attributes for a role when using the `CREATE ROLE` command:

```sql
CREATE ROLE admin_role WITH LOGIN CREATEDB CREATEROLE;
CREATE ROLE role_name PASSWORD 'string';
```

## Altering and Dropping Roles

To modify an existing role, you can use the `ALTER ROLE` command, followed by the role name and the attributes you wish to change. For example:

```sql
ALTER ROLE user_role WITH CREATEDB;
```

To remove a role from the PostgreSQL environment, you can use the `DROP ROLE` command:

```sql
DROP ROLE unwanted_role;
```

For convenience, the programs create user and drop user are provided as wrappers around CREATE & DROP ROLE SQL commands that can be called from the shell command line.(CREATE USER is equivalent to CREATE ROLE except that CREATE USER includes LOGIN by default, while CREATE ROLE does not.):

```sql
CREATE USER name;
DROP USER name;
```

## Checking Roles

To determine the set of existing roles, examine the pg_roles system catalog, for example:

```sql
SELECT rolname FROM pg_roles;
```

or to see just those capable of logging in:

```sql
SELECT rolname FROM pg_roles WHERE rolcanlogin;
```

The psql program's *\du* meta-command is also useful for listing the existing roles.
In order to bootstrap the database system, a freshly initialized system always contains one predefined login-capable role. This role is always a *superuser*, and it will have the same name as the operating system user that initialized the database cluster with initdb unless a different name is specified.This role is often named postgres. In order to create more roles you first have to connect as this initial role.

The set of database roles a given client connection can connect as is determined by the client authentication setup.(Thus, a client is not limited to connect as the role matching its operating system user, just as a person's login name need not match his or her real name.) Since the role identity determines the set of privileges available to a connected client, it is important to carefully configure privileges when setting up a multiuser environment.


## Role Membership

Roles can be members of other roles, inheriting the attributes and privileges of the parent role. This mechanism makes it easier to manage access and permissions for groups of users. To grant membership to a role, you can use the `GRANT` command:

```sql
GRANT parent_role TO member_role;
```

To remove role membership, you can use the `REVOKE` command:

```sql
REVOKE parent_role FROM member_role;
```


## Predefined Roles

PostgreSQL provides a set of predefined roles that provide access to certain, commonly needed, privileged capabilities and information. Administrators (including roles that have the CREATEROLE privilege) can GRANT these roles to users and/or other roles in their environment, providing those users with access to the specified capabilities and information.
It includes:-

- `pg_read_all_data` - Read all data (tables, views, sequences), as if having SELECT rights on those objects, and USAGE rights on all schemas, even without having it explicitly. This role does not have the role attribute BYPASSRLS set. If RLS is being used, an administrator may wish to set BYPASSRLS on roles which this role is GRANTed to.
- `pg_write_all_data` - Write all data (tables, views, sequences), as if having INSERT,UPDATE, and DELETE rights on those objects, and USAGE rights on all schemas, even without having it explicitly.This role does not have the role attribute BYPASSRLS set. If RLS is being used, an administrator may wish to set BYPASSRLS on roles which this role is GRANTed to.


In conclusion, roles are a crucial concept in PostgreSQL security that enables efficient management of user access and permissions within a database. By understanding how to create, modify, and manage roles in PostgreSQL, you can ensure a secure and well-organized database environment.
