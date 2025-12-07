# Views

SQL views are virtual tables that do not store data directly. They are essentially a saved SQL query and can pull data from multiple tables or just present the data from one table in a different way.

## Creating Views

You can create a view using the `CREATE VIEW` statement. In the following example, a new view named `CustomerView` is created which contains customer's ID, name, and address from the `Customers` table:

```sql
CREATE VIEW CustomerView AS
SELECT CustomerID, Name, Address
FROM Customers;
```

In SQL, creating views can be achieved through the `CREATE VIEW` statement. A view is a virtual table based on the result-set of an SQL statement. It contains rows and columns from one or more tables. The syntax for the `CREATE VIEW` statement is:

```sql
CREATE VIEW view_name AS
SELECT column1, column2, ...
FROM table_name
WHERE condition;
```

Here:
- `CREATE VIEW view_name` : It creates a new view that you define with `view_name`.
- `AS SELECT column1, column2 ...` : These are the columns you want in your view. You can choose one or more columns from one or more tables.
- `FROM table_name` : `table_name` is the name of the table from which you want to create the view.
- `WHERE` : It is an optional clause that you can use to specify conditions for displaying records.

**Example:**

Let's say you have a table named `Employees` having following data:

| ID | NAME  | SALARY | DEPARTMENT_ID |
|----|-------|--------|---------------|
| 1  | John  | 3000   | 2             |
| 2  | Sue   | 3500   | 3             |
| 3  | Phil  | 4500   | 2             |
| 4  | Anna  | 5000   | 1             |

You can create a view that shows only the employees from department 2:

```sql
CREATE VIEW Department2 AS
SELECT Name, Salary
FROM Employees
WHERE Department_ID = 2;
```

After running this statement, `Department2` will be a saved view in your database, and you can query it like you would with a standard table:

```sql
SELECT *
FROM Department2;
```

This would bring up

| NAME | SALARY |
|------|--------|
| John | 3000   |
| Phil | 4500   |

In total, the `CREATE VIEW` statement is a useful command when you want to save a particular query and its result set for future use. This can simplify complex queries by breaking them up into manageable parts.

## Querying Views

After a view has been created, it can be used in the `FROM` clause of a `SELECT` statement, as if it's an actual table. For instance, to select all from `CustomerView`:

```sql
SELECT *
FROM CustomerView;
```

## Updating Views

The `CREATE OR REPLACE VIEW` statement is used to update a view. Consider the `CustomerView` we created earlier. If we want to include the customer's phone, we can update it as follows:

```sql
CREATE OR REPLACE VIEW CustomerView AS
SELECT CustomerID, Name, Address, Phone
FROM Customers;
```

## Dropping Views

To delete a view, use the `DROP VIEW` statement:

```sql
DROP VIEW CustomerView;
```


"Dropping" in SQL is the process of deleting an existing database object. In the context of views, "dropping" refers to deleting an existing view from the database. Once a view is dropped, it cannot be used any longer until it is recreated with the same or new definition. If you're going to drop a view, ensure it's not being used anywhere in your application or it will lead to errors.

## Dropping Views

You can drop a view in SQL using the `DROP VIEW` statement. The `DROP VIEW` statement removes one or more views from the database. You specify the name of the view that you want to remove after the `DROP VIEW` clause. 

Here is the basic syntax to drop an existing view:

```sql
DROP VIEW view_name;
```

To drop multiple views in a single command, you use a list of comma-separated views.

```sql
DROP VIEW view_name1, view_name2, ..., view_name_n;
```

**Note**: Be careful when dropping views. Once a view is dropped, all the permissions granted on it will also be dropped. 

Before dropping a view, you can check if the view exists by using the `IF EXISTS` parameter. If you drop a view that does not exist, you will get an error. To prevent this, you can use the `IF EXISTS` parameter. 

Here is how you do it:

```sql
DROP VIEW IF EXISTS view_name;
```

In this case, if the view exists, it will be dropped. If the view does not exist, nothing happens and you don't get an error.

Keep in mind that not all database systems support the `CREATE OR REPLACE VIEW` statement. Also, the updatability of a view depends on whether it includes functions, expressions, or multiple tables. Some databases might not let you update a view at all.

## Restrictions

There are a few restrictions to bear in mind when working with views. SQL views can't:

- Contain a `ORDER BY` clause in the view definition
- Be indexed
- Have triggers or default values

Each database may have its own specific limitations and capabilities with using views, so always refer to the official documentation for more information.

Note: The above examples use a hypothetical `Customers` table. Replace this with your actual table name when trying these in your environment.

In SQL, you can modify a VIEW in two ways:

- Using CREATE OR REPLACE VIEW: This command helps you modify a VIEW but keeps the VIEW name intact. This is beneficial when you want to change the definition of the VIEW but do not want to change the VIEW name.

- Using the DROP VIEW and then CREATE VIEW: In this method, you first remove the VIEW using the DROP VIEW command and then recreate the view using the new definition with the CREATE VIEW command.

## Modifying VIEW Using CREATE OR REPLACE VIEW

Syntax:

```sql
CREATE OR REPLACE VIEW view_name AS
SELECT column1, column2, ...
FROM table_name
WHERE condition;
```

Example:

```sql
CREATE OR REPLACE VIEW customer_view AS
SELECT customer_name, country
FROM customers
WHERE country='USA';
```
In this example, 'customer_view' will show the names and countries of customers only from the USA.

## Modifying VIEW Using DROP VIEW and CREATE VIEW

Syntax: 
Drop the VIEW:
```sql
DROP VIEW view_name;
```
Create a new VIEW:
```sql
CREATE VIEW view_name AS
SELECT column1, column2, ...
FROM table_name
WHERE condition;
```

Example: 
Drop the VIEW
```sql
DROP VIEW customer_view;
```
Create a new VIEW:
```sql
CREATE VIEW customer_view AS
SELECT customer_name, country
FROM customers
WHERE country='UK';
```
In this example, we first removed 'customer_view'. Then, we created it again with the new definition where it now shows the names and countries of the customers only from the UK.

**CAUTION**: If other views, stored procedures, or programs depend on this view, they will be affected after you drop the view. For this reason, using CREATE OR REPLACE VIEW is generally safer. 

## Modifying Data through VIEW

In some cases, you can modify the data of the underlying tables via a VIEW. 

Syntax:

```sql
UPDATE view_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
```

Example:

```sql
UPDATE customer_view
SET country = 'USA'
WHERE customer_name = 'John Doe';
```
This command will update the country of 'John Doe' to 'USA' in both the VIEW and the underlying table.

However, not every VIEW is updatable. You can only modify the data if the VIEW you're modifying is a simple VIEW that returns results from a single table without any aggregation or complex clauses. If you attempt to modify a complex view (i.e., it includes JOIN, GROUP BY, HAVING, DISTINCT), you will get an error.