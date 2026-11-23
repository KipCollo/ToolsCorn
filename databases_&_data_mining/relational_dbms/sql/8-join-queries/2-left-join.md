# LEFT JOIN

The SQL LEFT JOIN combines rows from two or more tables based on a related column between them and returns all rows from the left table (table1) and the matched rows from the right table (table2). If there is no match, the result is `NULL` on the right side.

## Syntax
```
SELECT column_name(s)
FROM table1
LEFT JOIN table2
ON table1.column_name = table2.column_name;
```

## How SQL LEFT JOIN Works

The `LEFT JOIN` keyword returns all records from the left table (table1), and the matched records from the right table (table2). The result is `NULL` from the right side, if there is no match.

![LEFT JOIN Diagram](https://www.w3schools.com/sql/img_leftjoin.gif)

## SQL LEFT JOIN Example

Let's assume we have two tables: `Orders` and `Customers`.


**Table1: `Orders`**

|OrderID|CustomerID|OrderAmount|
|-------|----------|-----------|
|1      |100       |30         |
|2      |101       |40         |
|3      |102       |50         |

**Table2: `Customers`**

|CustomerID|Name    |Country  |
|----------|--------|---------|
|100       |Ana     |Germany  |
|101       |Ben     |USA      |
|103       |Charlie |Australia|

```sql
SELECT *
FROM Orders
LEFT JOIN Customers
ON Orders.CustomerID = Customers.CustomerID;
```

This SQL statement would return all Orders and the matching Customers. If there is no match, the result is `NULL`.

| OrderID | CustomerID | OrderAmount | CustomerID | Name | Country |
| ------- | ---------- | ----------- | ---------- | ---- | ------- |
| 1       | 100        | 30          | 100        | Ana  | Germany |
| 2       | 101        | 40          | 101        | Ben  | USA     |
| 3       | 102        | 50          | NULL       | NULL | NULL    |
