# Combining Data

There are two ways of combinig data:-

1. JOINS - Used to combine columns.
2. SET Operators - Used to combine rows.

## SQL JOINS

JOIN clause is used to combine rows from two or more tables, based on a related column between them.
Uses of SQL joins:-

1. To combine data.
2. Use for data enrichment i.e getting extra data.
3. Checks for existence/ filtering.

Types include:-

- Inner Join - Inner join returns records that have matching values in both tables.
- Full Join - Returns all records from the left table, and the matched records from the right table. Also returns NULL if there is no match.
- Left Join - Returns all records when there is a match in either left (table1) or right (table2) table records. Also returns null if there is no match.
- Right Join - Returns all records from the right table, and the matched records from the left table. Also returns null if there is no match.
- Self Join - Self join is a regular join, but the table is joined with itself.
- Natural Join - The natural join is akin to an inner join, automatically linking two columns based on identical names.
  Note: Columns should have same data type in both tables
- Left Anti Join
- Right Anti Join
- Full Anti Join
- Cross Join

```
 order_id | customer_id | order_date | sales
----------+-------------+------------+-------
     1001 |           1 | 2021-01-11 |    35
     1002 |           2 | 2021-04-05 |    15
     1003 |           3 | 2021-06-18 |    20
     1004 |           6 | 2021-08-31 |    10

 id | first_name | country | score
----+------------+---------+-------
  1 | Maria      | Germany |   350
  2 |  John      | USA     |   900
  3 | Georg      | UK      |   750
  4 | Martin     | Germany |   500
  5 | Peter      | USA     |     0
```

**INNER JOIN** - An `INNER JOIN` in SQL is a type of join that returns the records with matching values in both tables. This operation compares each row of the first table with each row of the second table to find all pairs of rows that satisfy the join predicate.

Few things to consider in case of `INNER JOIN`:

- It is a default join in SQL. If you mention `JOIN` in your query without specifying the type, SQL considers it as an `INNER JOIN`.
- It returns only the matching rows from both the tables.
- If there is no match, the returned is an empty result.

Syntax:-

```sql
SELECT column_name(s)
FROM table1
INNER JOIN table2
ON table1.column_name = table2.column_name;
```

The `INNER JOIN` keyword selects records that have matching values in both tables.

Consider two tables:

```sh
SELECT * FROM customers INNER JOIN orders ON customers.id = orders.customer_id;

 id | first_name | country | score | order_id | customer_id | order_date | sales
----+------------+---------+-------+----------+-------------+------------+-------
  1 | Maria      | Germany |   350 |     1001 |           1 | 2021-01-11 |    35
  2 |  John      | USA     |   900 |     1002 |           2 | 2021-04-05 |    15
  3 | Georg      | UK      |   750 |     1003 |           3 | 2021-06-18 |    20
```

**LEFT JOIN** - The SQL LEFT JOIN combines rows from two or more tables based on a related column between them and returns all rows from the left table (table1) and the matched rows from the right table (table2). If there is no match, the result is `NULL` on the right side.

Syntax:-

```
SELECT column_name(s)
FROM table1
LEFT JOIN table2
ON table1.column_name = table2.column_name;
```

The `LEFT JOIN` keyword returns all records from the left table (table1), and the matched records from the right table (table2). The result is `NULL` from the right side, if there is no match.

![LEFT JOIN Diagram](https://www.w3schools.com/sql/img_leftjoin.gif)

```sh
SELECT * FROM customers LEFT JOIN orders ON id = customer_id

 id | first_name | country | score | order_id | customer_id | order_date | sales
----+------------+---------+-------+----------+-------------+------------+-------
  1 | Maria      | Germany |   350 |     1001 |           1 | 2021-01-11 |    35
  2 |  John      | USA     |   900 |     1002 |           2 | 2021-04-05 |    15
  3 | Georg      | UK      |   750 |     1003 |           3 | 2021-06-18 |    20
  5 | Peter      | USA     |     0 |          |             |            |
  4 | Martin     | Germany |   500 |          |             |            |
```

**RIGHT JOIN** - The `RIGHT JOIN` keyword returns all records from the right table (table2), and the matched records from the left table (table1). If there is no match, the result is `NULL` on the left side.

Syntax:- Below is the common syntax used for writing a `RIGHT JOIN`:

```sql
SELECT column_name(s)
FROM table1
RIGHT JOIN table2
ON table1.column_name = table2.column_name;
```

```sh
 SELECT * FROM customers RIGHT JOIN orders ON id = customer_id;

 id | first_name | country | score | order_id | customer_id | order_date | sales
----+------------+---------+-------+----------+-------------+------------+-------
  1 | Maria      | Germany |   350 |     1001 |           1 | 2021-01-11 |    35
  2 |  John      | USA     |   900 |     1002 |           2 | 2021-04-05 |    15
  3 | Georg      | UK      |   750 |     1003 |           3 | 2021-06-18 |    20
    |            |         |       |     1004 |           6 | 2021-08-31 |    10
```

**FULL OUTER JOIN** - A `FULL OUTER JOIN` in SQL is a method to combine rows from two or more tables, based on a related column between them. It returns all rows from the left table (`table1`) and from the right table (`table2`).

The `FULL OUTER JOIN` keyword combines the results of both left and right outer joins and returns all (matched or unmatched) rows from the tables on both sides of the join clause.

If there are records in the "Customers" table that do not have matches in the "Orders" table, those will be included. Also, if there are records in the "Orders" table that do not have matches in the "Customers" table, those will be included.

Syntax:-

```
SELECT column_name(s)
FROM table1
FULL OUTER JOIN table2
ON table1.column_name = table2.column_name;
```

```sh
 SELECT * FROM customers FULL JOIN orders ON id = customer_id;
 id | first_name | country | score | order_id | customer_id | order_date | sales
----+------------+---------+-------+----------+-------------+------------+-------
  1 | Maria      | Germany |   350 |     1001 |           1 | 2021-01-11 |    35
  2 |  John      | USA     |   900 |     1002 |           2 | 2021-04-05 |    15
  3 | Georg      | UK      |   750 |     1003 |           3 | 2021-06-18 |    20
    |            |         |       |     1004 |           6 | 2021-08-31 |    10
  5 | Peter      | USA     |     0 |          |             |            |
  4 | Martin     | Germany |   500 |          |             |            |
```

This response includes all customers and all orders. If no matching orders exist for a customer, or if no matching customer exists for an order, the missing side will contain NULL.

**LEFT ANTI JOIN** - Returns row from left that has NO MATCH in right table.

Syntax:-

```
SELECT column_name(s)
FROM table1
LEFT JOIN table2
ON table1.column_name = table2.column_name;
WHERE table2.key IS NULL
```

```sh
SELECT * FROM customers LEFT JOIN orders ON customers.id = orders.customer_id WHERE orders.customer_id IS NULL;

 id | first_name | country | score | order_id | customer_id | order_date | sales
----+------------+---------+-------+----------+-------------+------------+-------
  5 | Peter      | USA     |     0 |          |             |            |
  4 | Martin     | Germany |   500 |          |             |            |
```

**RIGHT ANTI JOIN** - Returns rows from right that has NO MATCH in left table.

Syntax:-

```
SELECT column_name(s)
FROM table1
RIGHT JOIN table2
ON table1.column_name = table2.column_name;
WHERE table1.key IS NULL
```

```sh
 SELECT * FROM customers RIGHT JOIN orders ON customers.id = orders.customer_id WHERE customers.id IS NULL;

 id | first_name | country | score | order_id | customer_id | order_date | sales
----+------------+---------+-------+----------+-------------+------------+-------
    |            |         |       |     1004 |           6 | 2021-08-31 |    10
```

**FULL ANTI JOIN** - Returns only rows that don't match in either tables.

Syntax:-

```
SELECT column_name(s)
FROM table1
RIGHT JOIN table2
ON table1.column_name = table2.column_name;
WHERE table1.key IS NULL OR table2.key IS NULL
```

```sh
SELECT * FROM customers FULL JOIN orders ON customers.id = orders.customer_id WHERE customers.id IS NULL OR  orders.customer_id IS NULL;

 id | first_name | country | score | order_id | customer_id | order_date | sales
----+------------+---------+-------+----------+-------------+------------+-------
    |            |         |       |     1004 |           6 | 2021-08-31 |    10
  5 | Peter      | USA     |     0 |          |             |            |
  4 | Martin     | Germany |   500 |          |             |            |
```

**NATURAL JOIN**:

```sql
SELECT *
FROM Customers
NATURAL JOIN Orders;
```

_Note_: JOINS can be used with SELECT, UPDATE, and DELETE statements.

**Cross Join** - The cross join in SQL is used to combine every row of the first table with every row of the second table. It's also known as the Cartesian product of the two tables. The most important aspect of performing a cross join is that it does not require any condition to join.

The issue with cross join is it returns the Cartesian product of the two tables, which can result in large numbers of rows and heavy resource usage. It's hence critical to use them wisely and only when necessary.

Syntax:-

```
SELECT column_name(s)
FROM table1
CROSS JOIN table2;
```

You can alternatively use the below syntax to achieve the same result:

```sql
SELECT column_name(s)
FROM table1, table2;
```

Both syntax return the Cartesian product of `table1` and `table2`.

```sh
 SELECT * FROM customers CROSS JOIN orders;

 id | first_name | country | score | order_id | customer_id | order_date | sales
----+------------+---------+-------+----------+-------------+------------+-------
  1 | Maria      | Germany |   350 |     1001 |           1 | 2021-01-11 |    35
  2 |  John      | USA     |   900 |     1001 |           1 | 2021-01-11 |    35
  3 | Georg      | UK      |   750 |     1001 |           1 | 2021-01-11 |    35
  4 | Martin     | Germany |   500 |     1001 |           1 | 2021-01-11 |    35
  5 | Peter      | USA     |     0 |     1001 |           1 | 2021-01-11 |    35
  1 | Maria      | Germany |   350 |     1002 |           2 | 2021-04-05 |    15
  2 |  John      | USA     |   900 |     1002 |           2 | 2021-04-05 |    15
  3 | Georg      | UK      |   750 |     1002 |           2 | 2021-04-05 |    15
  4 | Martin     | Germany |   500 |     1002 |           2 | 2021-04-05 |    15
  5 | Peter      | USA     |     0 |     1002 |           2 | 2021-04-05 |    15
  1 | Maria      | Germany |   350 |     1003 |           3 | 2021-06-18 |    20
  2 |  John      | USA     |   900 |     1003 |           3 | 2021-06-18 |    20
  3 | Georg      | UK      |   750 |     1003 |           3 | 2021-06-18 |    20
  4 | Martin     | Germany |   500 |     1003 |           3 | 2021-06-18 |    20
  5 | Peter      | USA     |     0 |     1003 |           3 | 2021-06-18 |    20
  1 | Maria      | Germany |   350 |     1004 |           6 | 2021-08-31 |    10
  2 |  John      | USA     |   900 |     1004 |           6 | 2021-08-31 |    10
  3 | Georg      | UK      |   750 |     1004 |           6 | 2021-08-31 |    10
  4 | Martin     | Germany |   500 |     1004 |           6 | 2021-08-31 |    10
  5 | Peter      | USA     |     0 |     1004 |           6 | 2021-08-31 |    10
```

**ACROSS DATABASE** -

```sql
SELECT *
FROM product
JOIN Pharmacy.Orders p
ON product.id = p.id;
```

## SET

Types include:-

- Union
- Union All
- Except(Minus)
- Intersect
