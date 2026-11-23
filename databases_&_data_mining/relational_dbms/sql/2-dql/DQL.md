# DQL(Data Query Language)

Each SQL Query has diff components called clauses (SELECT,FROM,WHERE,ORDER BY, GROUP BY,HAVING,DISTINCT,TOP ,JOIN)The SELECT clause is required while all others are optional.

_SELECT & FROM clause_(FILTER COLUMNS):- To select data from a single table, we use the syntax:-

```sql
SELECT column_names_or_other_information
FROM table_name;
```

- `Selecting Everything`:- If we want to select all the columns and rows from a table, we write

```sh
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
