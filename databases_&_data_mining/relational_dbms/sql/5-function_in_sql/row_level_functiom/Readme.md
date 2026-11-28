# Row-level SQL Functions

Advanced SQL functions provide complex data manipulation and query capabilities enabling the user to perform tasks that go beyond the capabilities of basic SQL commands.

## String Functions

Functions that manipulate the string data types. For example, `LEFT()`, `LENGTH()`, `LOWER()`, etc.

`Manipulation` - CONCAT, UPPER, LOWER, TRIM, REPLACE.
`Calculation` - LEN.
`String Extraction` - LEFT, RIGHT, SUBSTRING.

_CONCAT_ - Combines multiple strings into one.

```sh
SELECT first_name, country , CONCAT(first_name,' ', country) AS name_country FROM customers;

 first_name | country |  name_country
------------+---------+----------------
 Maria      | Germany | Maria Germany
  John      | USA     |  John USA
 Georg      | UK      | Georg UK
```

_UPPER & LOWER_ - Converst all characters to uppercase and lowercase respectively.

```sh
SELECT LOWER(first_name) as lower_fname, UPPER(country) AS upper_country FROM customers;

 lower_fname | upper_country
-------------+---------------
 maria       | GERMANY
  john       | USA
 georg       | UK
```

_TRIM_ - Removes leading and trailing spaces.

```sh
MyDatabase=# SELECT TRIM(first_name) AS trimmed_fname FROM customers;
 trimmed_fname
---------------
 Maria
 John
 Georg
```

_REPLACE_ - Replace specific character with a new character.

```sh
SELECT '123-456-789'AS phone, REPLACE('123-456-789', '-','/') AS clean_phone;

  phone      | clean_phone
-------------+-------------
 123-456-789 | 123/456/789
```

## Window Function

Windowing Functions provide the ability to perform calculations across sets of rows related to the current query row.

```sql
SELECT productName, productLine, buyPrice,
       AVG(buyPrice) OVER(PARTITION BY productLine) as avg_price
FROM products
ORDER BY productLine, buyPrice;
```

## Aggregate Function

Aggregate functions return a single result row based on groups of rows, rather than on single rows.

```sql
SELECT COUNT(*) FROM products;
```

## Analytic Functions

Analytic functions compute an aggregate value based on a group of rows. They differ from aggregate functions in that they return multiple rows for each group.

```sql
SELECT department_id, last_name, hire_date,
       COUNT(*) OVER (PARTITION BY department_id) as dept_count,
       RANK() OVER (PARTITION BY department_id ORDER BY hire_date) as ranking
FROM employees;
```

## Scalar Function

A scalar function returns a single value each time it is invoked. It is based on the input value.

```sql
SELECT UPPER(productName) FROM products;
```

## Stored Procedures

Stored Procedures are a prepared SQL code that you can save so the code can be reused over and over again.

```sql
CREATE PROCEDURE SelectAllProducts @Product varchar(50)
AS
SELECT * FROM products WHERE Product = @Product
GO;
```

## Date Functions

Functions that manipulate the date data types. For example, `GETDATE()`, `DATEADD()`, `DATEDIFF()`, etc.

```sql
SELECT GETDATE() AS CurrentDateTime;
```

Remember, not all types or functions are supported by every SQL distribution but most of them have some sort of equivalent.
