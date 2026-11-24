# Data Manipulation Language (DML)

_DML_ is a subcategory of `SQL` which stands for _Data Manipulation Language_. The purpose of DML is to insert, retrieve, update and delete data from the database. With this, we can perform operations on existing records.

DML contains four commands which are:

1. `INSERT INTO` - This command is used to insert new rows (records) into a table.
2. `UPDATE` - This command is used to modify the existing rows in a table.
3. `DELETE FROM` - This command is used to delete existing rows (records) from a table.

_INSERT_ - The "INSERT" statement is used to add new rows of data to a table in a database. There are two main forms of the INSERT command: `INSERT INTO` which, if columns are not named, expects a full set of columns, and `INSERT INTO table_name (column1, column2, ...)` where only named columns will be filled with data.

- `Insert full set of columns`:- Code example:

```sql
INSERT INTO table_name
VALUES (value1, value2, ..., valueN),
       (value1, value2, ..., valueN) ;
```

In the example above, you need to provide values for all columns available in the table.

Example when specifying all columns:

```sql
INSERT INTO table_name ( column1, column2, column3, ... )
VALUES ( value1, value2, value3, ... )
```

- `Selectively insert data` - Code example:

```sql
INSERT INTO table_name (column1, column2, ..., columnN)
VALUES (value1, value2, ..., valueN);
```

Here, you only provide values for certain columns of the table. Other columns will take on their default values (if any).

- `Insert data from another table`:- Another useful form of the `INSERT` command is `INSERT INTO SELECT`, which allows you to copy data from one table and add it into another table.

```sql
INSERT INTO table1 (column1, column2, ... , columnN)
SELECT column1, column2, ... , columnN
FROM table2
WHERE condition;
```

In this scenario, `table2` should already have the data we need and the WHERE clause can be used to select only those rows that satisfy certain conditions.

> Note: The crucial point is that your columns in both SELECT and INSERT INTO command must be in same order and their datatypes must be compatible.
> Kindly ensure that database table has enough space to hold inserted data, else it will resulting in OVERFLOW error.
> Always make sure to provide correct and compatible data types for the columns. The SQL engine won't allow you to add data that doesn't match the column's declared data type.

_UPDATE_ - The `UPDATE` command in SQL is used to modify the existing records in a table. This command is useful when you need to update existing data within a database.
Here are important points to remember before updating records in SQL:

- The `WHERE` clause in the `UPDATE` statement specifies which records to modify. If you omit the `WHERE` clause, all records in the table will be updated!
- Be careful when updating records in SQL. If you inadvertently run an `UPDATE` statement without a `WHERE` clause, you will rewrite all the data in the table.

Here is a basic syntax of SQL UPDATE command:

```sql
UPDATE table_name
SET column1 = value1, column2 = value2...., columnN = valueN
WHERE [condition];
```

In this syntax:

- `table_name`: Specifies the table where you want to update records.
- `SET`: This keyword is used to set the column values.
- `column1, column2... columnN`: These are the columns of the table that you want to change.
- `value1, value2... valueN`: These are the new values that you want to assign for your columns.
- `WHERE`: This clause specifies which records need to be updated. It selects records based on one or more conditions.

Let's assume we have the following `Students` table:

| StudentID | FirstName | LastName | Age |
| --------- | --------- | -------- | --- |
| 1         | John      | Doe      | 20  |
| 2         | Jane      | Smith    | 22  |
| 3         | Bob       | Johnson  | 23  |

And we want to update the `Age` of the student with `StudentID` as 2. We can use the `UPDATE` command as follows:

```sql
UPDATE Students
SET Age = 23
WHERE StudentID = 2;
```

After executing the above SQL command, the `Age` of the student with `StudentID` 2 will be updated to 23.

| StudentID | FirstName | LastName | Age |
| --------- | --------- | -------- | --- |
| 1         | John      | Doe      | 20  |
| 2         | Jane      | Smith    | 23  |
| 3         | Bob       | Johnson  | 23  |

_DELETE_ - The DELETE statement is used to delete existing records in a table. This is a straightforward process, but care must be taken because the DELETE statement is destructive and cannot be undone by default.
The basic syntax of a DELETE query with WHERE clause in SQL is as follows:

```sql
DELETE FROM table_name [WHERE condition]
```

- `table_name`: Specifies the table where you want to delete data.
- `WHERE condition`: It is optional. You can use the WHERE clause with a DELETE query to delete the selected rows, otherwise all the records would be deleted.

1. `DELETE ALL Rows` - Deletes all rows from a table named 'students'.

```sql
DELETE FROM students;
```

2. `DELETE Specified Rows` - Deletes the student whose student_id is '1001' from the 'students' table.

```sql
DELETE FROM students WHERE student_id = '1001';
```

**Caution:** Be very careful when using the DELETE statement. If you omit the WHERE clause, all records will be deleted!

Multi-table deletions - Some database systems allow for deleting from multiple tables in a single DELETE statement. This is database-specific and beyond the scope of the basic SQL DELETE command.

Remember, always make sure to have a backup and confirm you're deleting the correct data before running a DELETE command, especially in production environments.
