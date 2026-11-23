# Stored Procedures and Functions

A SQL stored procedure is a set of SQL code that can be saved and reused. In other words, it's a precompiled object because it's compiled at a time when it's created on the database. Stored procedures can take parameters, process the tasks or query the database, and return a result.

Advantages:-
1. Stores and organize SQL.
2. Faster Execution.
3. Data security.

Here's a basic example:

```sql
CREATE PROCEDURE getEmployeesBySalary
  @minSalary int
AS
BEGIN
  SELECT firstName, lastName
  FROM Employees
  WHERE salary > @minSalary
END
GO
```

To call this stored procedure, we would use:

```sql
EXEC getEmployeesBySalary 50000
```


```mysql
DELIMITER $$
CREATE PROCEDURE get_clients()
BEGIN
   SELECT * FROM clients;
END$$
DELIMITER ;
```

```mysql
call get_clients()l;
```

```sql
DROP PROCEDURE <procedure_name>
```
