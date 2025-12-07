# Database Connections

## POSTGRESQL

- `pg_connect(string $connection_string,int $flags =0)`:-Opens a PostgreSQL connection specified by the connection_string.
If a second call is made to pg_connect() with same connection_string as an existing connection,the existing connection will be returned unless you pass `PGSQL_CONNECT_FORCE_NEW` as flag.
