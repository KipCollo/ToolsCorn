# Filtering Data

## WHERE Operators

- `Comparison Operators` -> =,<> =!, >, >=, <, <=
- `Logical Operators` -> AND, OR, NOT
- `Range operator` -> BETWEEN.
- `Membership operator` -> IN, NOT IN.
- `Search operator` -> LIKE

**Comparison operators** - Used to compare two values.
Condition -> Expression Operator Expression

column1 = column2 ---- first_name = last_name
column1v = value ---- first_name = 'John'
function = value --- UPER(first_name) = 'JOHN'
expression = value ----- price + quantity = 1000
subquery = value ---- SELECT AVG(sales) FROM orders = 1000

```id | first_name | country | score
----+------------+---------+-------
  1 | Maria      | Germany |   350
  2 |  John      | USA     |   900
  3 | Georg      | UK      |   750
  4 | Martin     | Germany |   500
  5 | Peter      | USA     |     0
```

- `=` -> checks if two values are equal.

```sh
SELECT * FROM customers WHERE country = 'USA';

 id | first_name | country | score
----+------------+---------+-------
  2 |  John      | USA     |   900
  5 | Peter      | USA     |     0
```

- `<> , !=` -> checks if two values are not equal.

```sh
 SELECT * FROM customers WHERE country != 'Germany';

 id | first_name | country | score
----+------------+---------+-------
  2 |  John      | USA     |   900
  3 | Georg      | UK      |   750
  5 | Peter      | USA     |     0
```

- `>` - checks if a value is greater than another value.

```sh
 SELECT * FROM customers WHERE score > 500;

 id | first_name | country | score
----+------------+---------+-------
  2 |  John      | USA     |   900
  3 | Georg      | UK      |   750
```

- `>=` - checks if a value is greater than or eqaul to another value.

```sh
 SELECT * FROM customers WHERE score >= 500;

 id | first_name | country | score
----+------------+---------+-------
  2 |  John      | USA     |   900
  3 | Georg      | UK      |   750
  4 | Martin     | Germany |   500
```

- `<` - checks if a value is less than another value.
- `<=` - checks if a value is less than or eqaul to another value.

**Logical operators** -

- `AND` - All conditions must be TRUE.

```sh
SELECT * FROM customers WHERE country = 'USA' AND score > 500;

 id | first_name | country | score
----+------------+---------+-------
  2 |  John      | USA     |   900
```

- `OR` - At least one condition must be TRUE.

```sh
SELECT * FROM customers WHERE country = 'USA' OR score > 500;

 id | first_name | country | score
----+------------+---------+-------
  2 |  John      | USA     |   900
  3 | Georg      | UK      |   750
  5 | Peter      | USA     |     0
```

- `NOT` - (Reverse) Excludes matching values.

```sh
 SELECT * FROM customers WHERE NOT country = 'USA';

 id | first_name | country | score
----+------------+---------+-------
  1 | Maria      | Germany |   350
  3 | Georg      | UK      |   750
  4 | Martin     | Germany |   500
```

**Range Operato** -
`BETWEEN` - Check if a value is within a range.Lower boundary and upper boundary are inclusive.

```sh
SELECT * FROM customers WHERE score BETWEEN 100 AND 500;

 id | first_name | country | score
----+------------+---------+-------
  1 | Maria      | Germany |   350
  4 | Martin     | Germany |   500
```

**Membership Operator** -

- `IN` - checks if a value exists in a list.
- `NOT IN` - checks if a value does not exists in a list.

```sh
SELECT * FROM customers WHERE country IN ('USA','Germany');

 id | first_name | country | score
----+------------+---------+-------
  1 | Maria      | Germany |   350
  2 |  John      | USA     |   900
  4 | Martin     | Germany |   500
  5 | Peter      | USA     |     0
```

**Search operator** -
`LIKE` - Search for a pattern in a text.

- % - Any character
- - Exactly 1.

```sh
 SELECT * FROM customers WHERE first_name LIKE 'M%';

 id | first_name | country | score
----+------------+---------+-------
  1 | Maria      | Germany |   350
  4 | Martin     | Germany |   500

SELECT * FROM customers WHERE first_name LIKE '__r%';

 id | first_name | country | score
----+------------+---------+-------
  1 | Maria      | Germany |   350
  4 | Martin     | Germany |   500
```
