# Introduction

SQL, which stands for Structured Query Language, is a programming language that is used to communicate with and manage databases. SQL is a standard language for manipulating data held in relational database management systems (RDBMS), or for stream processing in a relational data stream management system (RDSMS). It was first developed in the 1970s by IBM.

SQL uses a combination of relational-algebra and relational-calculus constructs.

SQL consists of several components, each serving their own unique purpose in database communication:

- `Queries:` This is the component that allows you to retrieve data from a database. The SELECT statement is most commonly used for this purpose.
- `Data Definition Language (DDL):` It lets you to create, alter, or delete databases and their related objects like tables, views, etc. Commands include CREATE, ALTER, DROP, and TRUNCATE.
- `Data Manipulation Language (DML):` It lets you manage data within database objects. These commands include SELECT, INSERT, UPDATE, and DELETE.
- `Data Control Language (DCL):` It includes commands like GRANT and REVOKE, which primarily deal with rights, permissions and other control-level management tasks for the database system.

SQL databases come in a number of forms, such as Oracle Database, Microsoft SQL Server, and MySQL. Despite their many differences, all SQL databases utilise the same language commands - SQL.


## Roadmap

1. Introduction - Includes:-
   - SQL definitions,Why learn It,Database and Types,SQL Commands,SQL Components, SQL Coding Style
2. Query Data(SELECT) :- SELECT,FROM,WHERE,ORDER BY, GROUP BY,HAVING,DISTINCT,TOP, QUERY ORDER & EXECUTION.
3. Data Definition(DDL):- CREATE,ALTER,DROP
4. Data Manipulation(DML):- INSERT, UPDATE,DELETE
5. Filtering Data:-
   - Comparison Operators
   - Logical Operators
   - BETWEEN, IN,LIKE
6. Combining Data:-
   - Joining Data - Basic Joins(INNER,LEFT,RIGHT,FULL Join), Advanced Joins(LEFT,RIGHT,FULL Anti Join,Cross Join)
   - SET Operators - UNION,UNION ALL,EXCEPT,INTERSECT
7. Row-Level Functions:- String, Number, date & time,Null functions, Case Statements
8. Aggregate & Analytical Functions:- aggregate Functions,Window basics,Window Aggregate func,Window Ranking Func, Window Value Func.
9. Advanced SQL Techniques:- Subqueries, CTE, Views,CTAS table & Temp tables,Stored Procedure,Triggers
10. Performance and Optimizations:- Indexes,Partitions.
11. AI & SQL

`Comments` - Comments are written to make our code more readable for other programmers. They are meant for humans only and are ignored by the DBMS
To add comments to our program, 

- we type two hyphens, followed by a space.
- Alternatively, we can also use the # symbol as shown below:
- Last, but not least, if we want to type multiple lines comments, we can use the /*...*/ symbols:


```sql
-- Using SELECT to display messages

# This is another way to add comment

/* This is a comment
This is also a comment
This is the third comment */
```

Filtering Data- Insert,update,delete
Sorting and Limiting Data - Order by,limit,distinct
Aggregating data - count(),sum(),avg(),min(),max(),group by,having
Set operations - Union,union all,intersect,except
Views - create view,drop view,alter view,insert into view,update view
Subqueries -  subqueries in SELECT,subqueries in WHERE,suqueries in FROM
Transcations - Begin transaction,commit,rollback,savepoint,set transaction isolation level
Window functions - row_number(),rank(),dense_rank(),ntile(),lead(),lag(),sum() over(),AVG() OVER(),PARTITION BY,ORDER BY
Date and Time functions - getdate(),current_timestamp,dateadd(),datediff(),datepart(),date_format(),now(),extract(),timestampdiff()
Triggers - create trigger,drop trigger,after insert/update/delete,before insert/update/delete
Conditional logic - ifnull(),coalesce(),case when
Date Modification - where,and ,or, not, in, between,like,is null,is not null,exists
Common table expressions - with cte as,recursive cte,with temporary cte
Indexing - Create index,drop index,unique index,full-text index,composite index
Joins - Inner,left,right,full,cross,self join.

