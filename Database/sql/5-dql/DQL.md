# DQL(Data Query Language)

Each SQL Query has diff components called clauses (SELECT,FROM,WHERE,ORDER BY, GROUP BY,HAVING,DISTINCT,TOP ,JOIN)
The SELECT clause is required while all others are optional.

`SELECT & FROM clause`:-

- To select data from a single table, we use the syntax:-

```sql
SELECT column_names_or_other_information
FROM table_name;
```

- Selecting Everything:- If we want to select all the columns and rows from a table, we write

```sql
SELECT * 
FROM table_name;
```

`WHERE clause`:- Use for filtering data based on condition.

```sql
SELECT * 
FROM table_name;
WHERE condition
```

```sql
SELECT first_name,country
FROM customers
WHERE country = 'Germany';
```

`GROUP BY clause`:- Using GROUP BY ... HAVING to filter aggregate records is analogous to using SELECT ... WHERE to filter individual
records.It combines rows with the same values.It aggregates a column by another column.

```sql
SELECT column_name, AGGREGATE_FUN()
FROM table_name;
GROUP BY column_name
```

```sql
SELECT first_name,SUM(score)
FROM customers
GROUP BY country
```

`HAVING clause`:- used to filter data after aggregation.Can only be used with group by.

```sql
SELECT column_name, AGGREGATE_FUN()
FROM table_name;
GROUP BY column_name
HAVING condition;
```

```sql
SELECT first_name,SUM(score)
FROM customers
GROUP BY country
HAVING SUM(score) > 800
```

WHERE clause is used before aggregation while HAVING is used after aggregation.

`ORDER BY clause`:- Used for ordering  and sorting your data results.

ORDER BY x
   - x can be any datatype.

NULLs precede non-NULLs.
The default is ASC (lowest to highest)
Strings (VARCHAR, etc) are ordered according the COLLATION of the declaration
ENUMs are ordered by the declaration order of its strings.

```sql
SELECT * 
FROM table_name;
WHERE condition
ORDER BY x ASC, y DESC
```