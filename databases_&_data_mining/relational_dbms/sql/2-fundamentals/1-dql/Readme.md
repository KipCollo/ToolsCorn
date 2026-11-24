# DQL(Data Query Language)

Each SQL Query has diff components called clauses (SELECT,FROM,WHERE,ORDER BY, GROUP BY,HAVING,DISTINCT,TOP ,JOIN)The SELECT clause is required while all others are optional.

_SELECT & FROM clause_(FILTER COLUMNS):- This command is used to select data from a database. The data returned is stored in a result table, called the result-set.

Example:

```sql
SELECT column1, column2, ...
FROM table_name
```

To select data from a single table, we use the syntax:-

```sql
SELECT column_names_or_other_information
FROM table_name;
```

- `Selecting Everything`:- If we want to select all the columns and rows from a table, we write

```sh
SELECT first_name, last_name,salary, (salary * 0.10) AS "bonus" FROM employees;
SELECT * FROM orders;

 order_id | customer_id | order_date | sales
----------+-------------+------------+-------
     1001 |           1 | 2021-01-11 |    35
     1002 |           2 | 2021-04-05 |    15
     1003 |           3 | 2021-06-18 |    20
     1004 |           6 | 2021-08-31 |    10
```

```sh
select * from customers;

 id | first_name | country | score
----+------------+---------+-------
  1 | Maria      | Germany |   350
  2 |  John      | USA     |   900
  3 | Georg      | UK      |   750
  4 | Martin     | Germany |   500
  5 | Peter      | USA     |     0
```

- `Select few columns` -

```sh
SELECT order_id, order_date,sales FROM orders;

 order_id | order_date | sales
----------+------------+-------
     1001 | 2021-01-11 |    35
     1002 | 2021-04-05 |    15
     1003 | 2021-06-18 |    20
     1004 | 2021-08-31 |    10
```

A SELECT without FROM is the SQL equivalent of a calculator. PostgreSQL, MySQL, SQLite, and SQL Server all allow it. Oracle is the famous exception — it requires a FROM clause, so you use the special one-row table DUAL.

```sql
SELECT 1 + 1 AS result;
```

_DISTINCT_(FILTER DUPLICATES) - Removes duplicates(Repeated values). Each value appears only once.

```sh
 SELECT DISTINCT country FROM customers;

 country
---------
 UK
 USA
 Germany
```

_LIMIT/TOP clause_(FILTER RESULT ROWS):- Used to limit number of records returned by table.

```sql
SELECT column_name
FROM table_name;
LIMIT argument
```

```sh
SELECT * FROM customers LIMIT 3;

 id | first_name | country | score
----+------------+---------+-------
  1 | Maria      | Germany |   350
  2 |  John      | USA     |   900
  3 | Georg      | UK      |   750
```

```sql
--page 1: 1-3
--page 2: 4-6
SELECT column_name
FROM table_name;
LIMIT offset,argument
```

```sh
SELECT * FROM customers LIMIT 2 OFFSET 1;
 id | first_name | country | score
----+------------+---------+-------
  2 |  John      | USA     |   900
  3 | Georg      | UK      |   750

SELECT * FROM customers LIMIT 2 OFFSET 3;
 id | first_name | country | score
----+------------+---------+-------
  4 | Martin     | Germany |   500
  5 | Peter      | USA     |     0
```

_WHERE clause_(Filter Rows brfore Aggregations):- Use for filtering data based on condition.

```sql
SELECT *
FROM table_name;
WHERE condition
```

```sh
SELECT order_id, order_date,sales FROM orders WHERE sales >= 20;
select * from customers WHERE country ='Germany';

 order_id | order_date | sales
----------+------------+-------
     1001 | 2021-01-11 |    35
     1003 | 2021-06-18 |    20
```

_GROUP BY clause_:- Using GROUP BY ... HAVING to filter aggregate records is analogous to using SELECT ... WHERE to filter individual records.It combines rows with the same values.It aggregates a column by another column.
The result of GROUP BY determined by the unique values of grouped columns.

```sql
SELECT column_name, AGGREGATE_FUN()
FROM table_name;
GROUP BY column_name DESC
```

```sh
SELECT country, SUM(score), COUNT(id) AS total_score FROM customers GROUP BY country;

 country | sum | total_score
---------+-----+-------------
 UK      | 750 |           1
 USA     | 900 |           2
 Germany | 850 |           2
```

_ORDER BY clause_:- Used for ordering and sorting your data results.

ORDER BY x - x can be any datatype.

NULLs precede non-NULLs.The default is ASC (lowest to highest)Strings (VARCHAR, etc) are ordered according the COLLATION of the declaration. ENUMs are ordered by the declaration order of its strings.

```sql
SELECT *
FROM table_name;
WHERE condition
ORDER BY x ASC, y DESC
```

```sh
 SELECT * FROM orders ORDER BY sales DESC;

 order_id | customer_id | order_date | sales
----------+-------------+------------+-------
     1001 |           1 | 2021-01-11 |    35
     1003 |           3 | 2021-06-18 |    20
     1002 |           2 | 2021-04-05 |    15
     1004 |           6 | 2021-08-31 |    10
```

- `Nested Sorting` -

```sh
select * from customers ORDER BY country ASC, score DESC;

 id | first_name | country | score
----+------------+---------+-------
  4 | Martin     | Germany |   500
  1 | Maria      | Germany |   350
  3 | Georg      | UK      |   750
  2 |  John      | USA     |   900
  5 | Peter      | USA     |     0
```

_HAVING clause_(Filter rows after aggregations):- used to filter data after aggregation.Can only be used with group by.

```sql
SELECT column_name, AGGREGATE_FUN()
FROM table_name;
GROUP BY column_name
HAVING condition;
```

```sh
SELECT country, SUM(score), COUNT(id) AS total_score FROM customers GROUP BY country HAVING SUM(score) > 800;

 country | sum | total_score
---------+-----+-------------
 USA     | 900 |           2
 Germany | 850 |           2
```

WHERE clause is used before aggregation while HAVING is used after aggregation.

**Coding Order** - SELECT, DISTINCT, TOP,FROM,WHERE,GROUP BY,HAVING, ORDER BY.
**Execution Order** - FROM, WHERE, GROUP BY,HAVING,SELECT DISTINCT, ORDER BY, TOP.

```sql
SELECT country, SUM(score)
FROM customer
WHERE score > 400
GROUP BY country
HAVING SUM(score) > 800
```

---

# SELECT

The `SELECT` statement in SQL is majorly used for fetching data from the database. It is one of the most essential elements of SQL.

## Syntax

Here's how your `SELECT` command will look like:

```sql
SELECT column1, column2, ...
FROM table_name;
```

If you want to select all the columns of a table, you can use `*` like this:

```sql
SELECT * FROM table_name;
```

## Example

For instance, consider we have a table `EMPLOYEES` with columns `name`, `designation`, and `salary`. We can use `SELECT` in the following way:

```sql
SELECT name, designation FROM EMPLOYEES;
```

This will retrieve all the names and designations of all employees from the table `EMPLOYEES`.

## SELECT DISTINCT

The `SELECT DISTINCT` statement is used to return only distinct (different) values. The DISTINCT keyword eliminates duplicate records from the results.

Here's how you can use it:

```sql
SELECT DISTINCT column1, column2, ...
FROM table_name;
```

For example, if we want to select all unique designations from the `EMPLOYEES` table, the query will look like this:

```sql
SELECT DISTINCT designation FROM EMPLOYEES;
```

DISTINCT ON multiple Columns - DISTINCT operates on the whole projected row. So `SELECT DISTINCT a, b` returns each unique (a, b) pair, not each unique a and each unique b separately.

```sql
SELECT DISTINCT department_id,  job_id FROM employees;
```

## SELECT WHERE

`SELECT` statement combined with `WHERE` gives us the ability to filter records based on a condition.

Syntax:

```sql
SELECT column1, column2, ...
FROM table_name
WHERE condition;
```

For example, to select employees with salary more than 50000, you can use this query:

```sql
SELECT * FROM EMPLOYEES WHERE salary > 50000;
```

## SELECT ORDER BY

Using `SELECT` statement in conjunction with `ORDER BY`, we can sort the result-set in ascending or descending order.

Syntax:

```sql
SELECT column1, column2, ...
FROM table_name
ORDER BY column ASC|DESC;
```

For example, to select all employees and order them by their name in ascending fashion:

```sql
SELECT * FROM EMPLOYEES ORDER BY name ASC;
```

Remember that the default sort order is ascending if the ASC|DESC parameter is not defined.

# FROM

The `FROM` clause in SQL specifies the tables from which the retrieval should be made. It is an integral part of `SELECT` statements and variants of `SELECT` like `SELECT INTO` and `SELECT WHERE`. `FROM` can be used to join tables as well.

Typically, `FROM` is followed by space delimited list of tables in which the SELECT operation is to be executed. If you need to pull data from multiple tables, you would separate each table with a comma.

Here are some examples:

**Example 1 - Simple Usage**

If you've a table called `employees`, you can select all employees' data like this:

```sql
SELECT *
FROM employees;
```

In this example, `*` means "all columns". So, `SELECT * FROM employees;` will retrieve all data from the `employees` table.

**Example 2 - FROM with Multiple Tables**

If you've multiple tables, say `employees` and `departments`, and you want to select data from both, you can do the following:

```sql
SELECT employees.name, departments.department
FROM employees, departments
WHERE employees.dept_id = departments.dept_id;
```

In this example, the `FROM` clause is following by two tables: `employees` and `departments`. `employees.name` and `departments.department` indicate that we're selecting the `name` column from the `employees` table and the `department` column from the `departments` table.

Remember, always respect the order of operations in SQL. The `FROM` clause works only after tables are identified.

In complex SQL queries where you might need to pull data from multiple tables, aliases are used to temporarily rename the tables within the individual SQL statement.

**Example 3 - FROM with Aliases**

Below is an example of a `FROM` clause with aliases:

```sql
SELECT e.name, d.department
FROM employees AS e, departments AS d
WHERE e.dept_id = d.dept_id;
```

In this example, `employees` and `departments` tables are termed as `e` and `d` respectively.

That's it! Remember that `FROM` is not limited only to `SELECT`. It is applicable to `UPDATE` and `DELETE` operations as well.

# WHERE

SQL provides a WHERE clause that is basically used to filter the records. If the condition specified in the WHERE clause satisfies, then only it returns the specific value from the table. You should use the WHERE clause to filter the records and fetching only the necessary records.

The WHERE clause is not only used in SELECT statement, but it is also used in UPDATE, DELETE statement, etc., which we will learn in subsequent chapters.

An example of its implementation is:

```sql
SELECT * FROM Students WHERE Age>10;
```

In this example, the statement selects all fields from the 'Students' table where the 'Age' field value is greater than 10.

WHERE clause can be combined with AND, OR, and NOT operators. Here's an example:

```sql
SELECT * FROM Students WHERE Age > 10 AND Gender = 'Female';
```

In this example, the statement selects all fields from 'Students' table where the 'Age' field value is greater than 10 and the 'Gender' is Female.

The syntax generally looks like this:

```sql
SELECT column1, column2, ...
FROM table_name
WHERE condition;
```

# ORDER BY

The `ORDER BY` clause in SQL is used to sort the result-set from a SELECT statement in ascending or descending order. It sorts the records in ascending order by default. If you want to sort the records in descending order, you have to use the `DESC` keyword.

## Syntax for Ascending Order:

```sql
SELECT column1, column2, ...
FROM table_name
ORDER BY column1, column2, ... ASC;
```

Here, `ASC` is used for ascending order. If you use `ORDER BY` without `ASC` or `DESC`, `ASC` is used by default.

## Syntax for Descending Order:

```sql
SELECT column1, column2, ...
FROM table_name
ORDER BY column1, column2, ... DESC;
```

Here, `DESC` is used for descending order.

## Usage Example

Consider the following `Customers` table:

| ID  | NAME     | AGE | ADDRESS   | SALARY |
| --- | -------- | --- | --------- | ------ |
| 1   | Ramesh   | 32  | Ahmedabad | 2000.0 |
| 2   | Khilan   | 25  | Delhi     | 1500.0 |
| 3   | kaushik  | 23  | Kota      | 2000.0 |
| 4   | Chaitali | 25  | Mumbai    | 6500.0 |
| 5   | Hardik   | 27  | Bhopal    | 8500.0 |
| 6   | Komal    | 22  | MP        | 4500.0 |

**Example 1 - Ascending Order:**

Sort the table by the `NAME` column in ascending order:

```sql
SELECT * FROM Customers
ORDER BY NAME ASC;
```

**Example 2 - Descending Order:**

Sort the table by the `SALARY` column in descending order:

```sql
SELECT * FROM Customers
ORDER BY SALARY DESC;
```

**Example 3 - Multiple Columns:**

You can also sort by multiple columns. Sort the table by the `AGE` column in ascending order and then `SALARY` in descending order:

```sql
SELECT * FROM Customers
ORDER BY AGE ASC, SALARY DESC;
```

In this instance, the `ORDER BY` clause first sorts the `Customers` table by the `AGE` column and then sorts the sorted result further by the `SALARY` column.

# HAVING

`HAVING` is a clause in SQL that allows you to filter result sets in a `GROUP BY` clause. It is used to mention conditions on the groups being selected. In other words, `HAVING` is mainly used with the `GROUP BY` clause to filter the results that a `GROUP BY` returns.

It’s similar to a `WHERE` clause, but operates on the results of a grouping. The `WHERE` clause places conditions on the selected columns, whereas the `HAVING` clause places conditions on groups created by the `GROUP BY` clause.

## Syntax

The basic syntax is as follows:

```sql
SELECT column_name, function(column_name)
FROM table_name
WHERE condition
GROUP BY column_name
HAVING function(column_name) condition value;
```

## Example

Suppose we have a `Sales` table with the following data:

| SaleID | Product | Quantity |
| ------ | ------- | -------- |
| 1      | A       | 30       |
| 2      | B       | 20       |
| 3      | A       | 100      |
| 4      | B       | 50       |
| 5      | C       | 60       |
| 6      | A       | 70       |

And we want to find products which have total quantity sold more than 100. We can use the `HAVING` clause as follows:

```sql
SELECT Product, SUM(Quantity) as TotalQuantity
FROM Sales
GROUP BY Product
HAVING TotalQuantity > 100;
```

In this query,

- `GROUP BY Product` would group the sales figures by Product.
- `SUM(Quantity)` would calculate total quantity sold for each product.
- `HAVING TotalQuantity > 100` would filter out the groups which have total quantity sold less than or equal to 100.-

# GROUP BY

"Group By" is a clause in SQL that is used to arrange identical data into groups. This clause comes under the category of Group Functions, alongside the likes of Count, Sum, Average, etc.

The syntax for 'Group by' is:

```sql
SELECT column1, column2
FROM table_name
GROUP BY column1, column2;
```

Here, column1, column2, are the names of the columns based on which we want to group the results.

## Example:

Assume we have a "Sales" table. This table has three columns: ID, Item, and Amount.

```sql
ID     Item    Amount
---   ------   ------
1      A        150
2      B        200
3      A        100
4      B        50
5      A        200
6      A        100
7      B        150
```

Execute the following SQL statement...

```sql
SELECT Item, SUM(Amount)
FROM Sales
GROUP BY Item;
```

This will concatenate, or "group", all items that are the same into one row, applying the SUM() function on their respective Amounts. The output will then be:

```sql
Item    SUM(Amount)
------  ----------
A        550
B        400
```

## Group By with Having Clause

The Group By clause can also be used with the Having keyword. The Having keyword allows you to filter the results of the group function.

For example:

```sql
SELECT Item, SUM(Amount)
FROM Sales
GROUP BY Item
HAVING SUM(Amount) > 150;
```

This will return all grouped items where the total amount is more than 150. Hence, the result will be:

```sql
Item    SUM(Amount)
------  ----------
A        550
B        400
```

## Aliases

Table aliases shorten table names and disambiguate columns when multiple tables share a column name (e.g. id). Even in single-table queries, aliasing is a good habit because it makes the query trivial to extend with JOINs later.

```sql
SELECT e.first_name, e.salary FROM employees AS e;
```

## Constant Literals

In SQL, a constant (also called a literal) is a fixed, hardcoded data value written directly into a query or procedural block. Because standard SQL does not support global named constants like traditional programming languages, how you use them depends on whether you are writing a basic query or procedural SQL.

- `Constants (Literals) in Standard SQL Queries` - In standard SELECT, INSERT, or UPDATE statements, constants are hardcoded values categorized by data type:
  1. String constants. Text enclosed in single quotes (e.g., 'Active', '2026-11-24'). In SQL Server, prefix with an uppercase N for Unicode (e.g., N'Michél').
  2. Numeric constants. Unquoted numbers, including integers (42), decimals (19.99), and scientific notation (1.5E3).
  3. Date and time constants. Formatted strings representing dates or timestamps (e.g., DATE '2026-11-24').
  4. Boolean and Null constants. Keywords representing fixed states, such as TRUE, FALSE, or NULL.

```SQL
SELECT
    employee_name,
    'Full-Time' AS status, -- String constant
    500 AS bonus           -- Numeric constant
FROM employees
WHERE department_id = 10;  -- Numeric constant
```
