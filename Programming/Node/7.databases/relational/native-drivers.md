# Native drivers

NativeDriver is an implementation of the WebDriver API which drives the UI of a native application rather than a web application. It extends the WebDriver API in a few key places, and re-interprets the existing API for native applications.

- MySQL:
  - [mysql](https://www.npmjs.com/package/mysql)
  - [mysql2](https://www.npmjs.com/package/mysql2)
- MariaDB:
  - [mariadb](https://www.npmjs.com/package/mariadb)
- PostgreSQL:
  - [pg](https://www.npmjs.com/package/pg)
- Microsoft SQL Server:
  - [tedious](https://www.npmjs.com/package/tedious)
  - [mssql](https://www.npmjs.com/package/mssql)
- Oracle:
  - [oracledb](https://www.npmjs.com/package/oracledb)

## PostgreSQL Intergration

**pg** - using the pg module.

Install the dependency:-

```bash
npm install pg
```

Requiring the module:-

```js
const pg = require('pg');
```

Creating a connection:- `Client` class can be used to create connection.

```js
new pg.Client(conectionString)
```

```js
const dbURL = "pg://postgres:postgres@localhost:5432"
const client = new pg.Client(dbURL);
client.connect();

const client = pg.Client({
  user: <user>
  host:<host>
  database:<database>
  password:<password>
  port:<port>
});

client.connect();
```

Query with Connection Object - If you want to use connection object for query database you can use this sample code.

```js
var queryString = "SELECT name, age FROM students " ;
var query = client.query(queryString);

query.on("row", (row, result)=> {
result.addRow(row);
});

query.on("end", function (result) {
//LOGIC
});
```
