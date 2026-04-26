# Authentication

PHP uses two predefined variables to authenticate a user: `$_SERVER['PHP_AUTH_USER']` and `$_SERVER['PHP_AUTH_PW']`. These variables store the username and password values, respectively. While authenticating is as simple as comparing the expected username and password to these variables, there are two important caveats to keep in mind when using these predefined variables:
1. Both variables must be verified at the start of every restricted page. You can easily accomplish this by authenticating the user prior to performing any other action on the restricted page, which typically means placing the authentication code in a separate file and then including that file in the restricted page using the require() function.
2. These variables do not function properly with the CGI version of PHP.

Two standard functions are commonly used when handling authentication via PHP: header() and isset().

- The `header() function` sends a raw HTTP header to the browser. The header parameter specifies the header information sent to the browser. Its prototype follows:

```php
void header(string header [, boolean replace [, int http_response_code]])
```

- The `isset() function` determines whether a variable has been assigned a value. Its prototype follows:

```php
boolean isset(mixed var [, mixed var [,...]])
```

It returns TRUE if the variable contains a value and FALSE if it does not. As applied to user authentication, the isset() function is useful for determining whether the $_SERVER['PHP_AUTH_USER'] and $_SERVER['PHP_AUTH_PW'] variables are properly set.

```php
// If the username or password isn't set, display the authentication window
if (! isset($_SERVER['PHP_AUTH_USER']) || ! isset($_SERVER['PHP_AUTH_PW'])) {
    header('WWW-Authenticate: Basic Realm="Authentication"');
    header("HTTP/1.1 401 Unauthorized");
// If the username and password are set, output their credentials
} else {
    echo "Your supplied username: {$_SERVER['PHP_AUTH_USER']}<br />";
    echo "Your password: {$_SERVER['PHP_AUTH_PW']}<br />";
}
```


When you are developing PHP application, security should always be a top priority and authentication mechanism forms it's very core. It ensures proper establishing of user identities before they can access your system's resources. PHP provides several methods to implement authentication like session-based, token-based, HTTP authentication, and more.

Visit the following resources to learn more:

- [@official@Auth Mechanisms](https://www.php.net/manual/en/features.http-auth.php)

## PHP Authentication Methodologies

There are several ways you can implement authentication via a PHP script. In doing so, you should always consider the scope and complexity of your authentication needs. This section discusses four implementation methodologies: hard-coding a login pair directly into the script, using file-based authentication, using database-based authentication, and using PEAR’s HTTP authentication functionality.

`Hard-Coded Authentication`:- The simplest way to restrict resource access is by hard-coding the username and password directly into the script.

```php
if (($_SERVER['PHP_AUTH_USER'] != 'client') || ($_SERVER['PHP_AUTH_PW'] != 'secret')) {
    header('WWW-Authenticate: Basic Realm="Secret Stash"');
    header('HTTP/1.0 401 Unauthorized');
    print('You must provide the proper credentials!');
    exit;
}
```


`Database-Based Authentication`:- Implementing a database-driven solution is the most powerful because it not only enhances administrative convenience and scalability, but also can be integrated into a larger database infrastructure.

```sql
CREATE TABLE logins (
    id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    pswd CHAR(32) NOT NULL
);
```

```php
/* Because the authentication prompt needs to be invoked twice,embed it within a function.*/
function authenticate_user() {
    header('WWW-Authenticate: Basic realm="Secret Stash"');
    header("HTTP/1.0 401 Unauthorized");
    exit;
}
/* If $_SERVER['PHP_AUTH_USER'] is blank, the user has not yet been prompted for the authentication information.*/
if (! isset($_SERVER['PHP_AUTH_USER'])) {
    authenticate_user();
} else {
    $db = new mysqli("localhost", "webuser", "secret", "chapter14");
    $stmt = $db->prepare("SELECT username, pswd FROM logins WHERE username=? AND pswd=MD5(?)");
    $stmt->bind_param('ss', $_SERVER['PHP_AUTH_USER'], $_SERVER['PHP_AUTH_PW']);
    $stmt->execute();
    $stmt->store_result();
    if ($stmt->num_rows == 0)
        authenticate_user();
}
```
