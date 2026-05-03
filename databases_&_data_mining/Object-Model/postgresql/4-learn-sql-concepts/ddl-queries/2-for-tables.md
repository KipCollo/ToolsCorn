# Tables in PostgreSQL

Tables are essential components of a database, and they store the data in rows and columns. Understanding how to manage and manipulate tables is crucial for effective database administration and development.

## CREATE TABLE

To create a new table, we use the `CREATE TABLE` command in PostgreSQL. This command allows you to define the columns, their data types, and any constraints that should be applied to the table. Here's an example:

```sql
CREATE TABLE employees (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  birth_date DATE NOT NULL,
  hire_date DATE NOT NULL,
  department_id INTEGER,
  salary NUMERIC(10, 2) NOT NULL
);
```

There is a limit on how many columns a table can contain. Depending on the column types, it is between 250 and 1600.

*Default Values*:- A column can be assigned a default value. When a new row is created and no values are specified for some of the columns, those columns will be filled with their respective default values. A data manipulation command can also request explicitly that a column be set to its default value, without having to know what that value is.
If no default value is declared explicitly, the default value is the null value. This usually makes sense because a null value can be considered to represent unknown data.

```sql
CREATE TABLE products (
  product_no integer,
  name text,
  price numeric DEFAULT 9.99
);
```

The default value can be an expression, which will be evaluated whenever the default value is inserted (not when the table is created). A common example is for a timestamp column to have a default of CURRENT_TIMESTAMP, so that it gets set to the time of row insertion. Another common example is generating a “serial number” for each row.In PostgreSQL this is typically done by something like:

```sql
CREATE TABLE products (
  product_no integer DEFAULT nextval('products_product_no_seq'),
  ...
);
```

where the nextval() function supplies successive values from a sequence object.
This arrangement is sufficiently common that there's a special shorthand for it:

```sql
CREATE TABLE products (
  product_no SERIAL,
  ...
);
```


## ALTER TABLE

When you need to modify an existing table's structure, the `ALTER TABLE` command comes in handy. You can use this query to add, modify, or drop columns, and to add, alter, or drop table constraints. Some common examples include:

- Add a column:

```sql
ALTER TABLE employees ADD COLUMN email VARCHAR(255) UNIQUE;
```

- Modify a column's data type:

```sql
ALTER TABLE employees ALTER COLUMN salary TYPE NUMERIC(12, 2);
```

- Drop a column:

```sql
ALTER TABLE employees DROP COLUMN email;
```

- Add a foreign key constraint:

```sql
ALTER TABLE employees ADD CONSTRAINT fk_department_id FOREIGN KEY (department_id) REFERENCES departments(id);
```


## DROP TABLE

If you want to delete a table and all of its data permanently, use the `DROP TABLE` command. Be careful with this query, as it cannot be undone. Here's an example:

```sql
DROP TABLE employees;
```

You can also use the `CASCADE` option to drop any dependent objects that reference the table:

```sql
DROP TABLE employees CASCADE;
```

Attempting to drop a table that does not exist is an error. Nevertheless, it is common in SQL script files to unconditionally try to drop each table before creating it, ignoring any error messages, so that the script works whether or not the table exists. (If you like, you can use the DROP TABLE IF EXISTS variant to avoid the error messages, but this is not standard SQL.)


## TRUNCATE TABLE

In some cases, you might want to delete all the data in a table without actually deleting the table itself. The `TRUNCATE TABLE` command does just that. It leaves the table structure intact but removes all rows:

```sql
TRUNCATE TABLE employees;
```


## COPY TABLE

To copy data to and from a table in PostgreSQL, you can use the `COPY` command. This is especially useful for importing or exporting large quantities of data. Here's an example:

- Copy data from a CSV file into a table:

```sql
COPY employees (id, first_name, last_name, birth_date, hire_date, department_id, salary)
FROM '/path/to/employees.csv' WITH CSV HEADER;
```

- Copy data from a table to a CSV file:

```sql
COPY employees (id, first_name, last_name, birth_date, hire_date, department_id, salary)
TO '/path/to/employees_export.csv' WITH CSV HEADER;
```

In conclusion, understanding DDL queries for tables is essential when working with PostgreSQL databases. This topic covered the basics of creating, altering, dropping, truncating, and copying tables. Keep practicing these commands and exploring the PostgreSQL documentation to become more proficient and confident in managing your database tables.


## Generated Columns

A `generated column` is a special column that is always computed from other columns. Thus, it is for columns what a view is for tables. There are two kinds of generated columns: stored and virtual. A stored generated column is computed when it is written (inserted or updated) and occupies storage as if it were a normal column. A virtual generated column occupies no storage and is computed when it is read. Thus, a virtual generated column is similar to a view and a stored generated column is similar to a materialized view (except that it is always updated automatically). PostgreSQL currently implements only stored generated columns.

To create a generated column, use the GENERATED ALWAYS AS clause in CREATE TABLE, for example:

```sql
CREATE TABLE people (
  ...,
  height_cm numeric,
  height_in numeric GENERATED ALWAYS AS (height_cm / 2.54) STORED
);
```

The keyword STORED must be specified to choose the stored kind of generated column.