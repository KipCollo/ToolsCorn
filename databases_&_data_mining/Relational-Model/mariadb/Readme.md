# MySQL(MariaDB)

## Installtion

Already preinstalled in Unix.

```sh
sudo dpkg -i mysql-workbench-community_<version>.deb
sudo apt -f install
```

## CommandLine

```sh
mysql -u root -p
```

- u - User
- p - Password

```sh
MariaDB [demo]> status
```

## Importing Data

- Using mysql program in commandline:-

```sh
mysql -u root -p <db_name> < <path_to_db>
```

- Import inside MySQL command line client:-

```sh
MariaDB [import]> source <path_to_db>
```

- Import data to a remote MySQL server:-

```sh
mysql -u root -p -h 192.168.1.3 -P 3306 --protocol=tcp
```
