# Variables

Variables in PHP are represented by a dollar sign followed by the name of the variable. The variable name is case-sensitive.Variables must always include the $ as the first character and other alphanumeric characters to complete the name. You can also include the underscore (_). However, no other special symbols or spaces are allowed
A valid variable name starts with a letter (A-Z, a-z, or the bytes from 128 through 255) or underscore, followed by any number of letters, numbers, or underscores. As a regular expression, it would be expressed thus: ^[a-zA-Z_\x80-\xff][a-zA-Z0-9_\x80-\xff]*$

```php
<?php
$var = 'Bob';
$Var = 'Joe';
echo "$var, $Var";      // outputs "Bob, Joe"

$_4site = 'not yet';    // valid; starts with an underscore
$täyte = 'mansikka';    // valid; 'ä' is (Extended) ASCII 228.
?>
```

By default, variables are always assigned by value. That is to say, when an expression is assigned to a variable, the entire value of the original expression is copied into the destination variable. This means, for instance, that after assigning one variable's value to another, changing one of those variables will have no effect on the other.
PHP also offers another way to assign values to variables: assign by reference. This means that the new variable simply references (in other words, "becomes an alias for" or "points to") the original variable. Changes to the new variable affect the original, and vice versa.

To assign by reference, simply prepend an ampersand (&) to the beginning of the variable which is being assigned (the source variable).

```php
$foo = 'Bob';              // Assign the value 'Bob' to $foo
$bar = &$foo;              // Reference $foo via $bar.
$bar = "My name is $bar";  // Alter $bar...
echo $bar;
echo $foo;                 // $foo is altered too.
```

variable declaration rules:

1. start with dollar sign($)
2. first letter of variable name comes from a-zA-z_
3. next letters of variable name comes from a-zA-Z0-9_
4. no space,no syntex

Variable are mainly Two types:

- Predefined Variable
- User Define Variable

There are 12 predefined variables in php 8
1. $GLOBALS
2. $_SERVER
3. $_REQUEST
4. $_FILES
5. $_ENV
6. $_SESSION
7. $_COOKIE
8. $_GET
9. $_POST
10. $http_response_header
11. $argc
12. $argv

User Define variable are 3 types
1. variable scope
2. variable variables
3. reference variable


**$_GET**:- $_GET is a pre-defined array in PHP, that's used to collect form-data sent through HTTP GET method. It's useful whenever you need to process or interact with data that has been passed in via a URL's query string. For an example if you have a form with a GET method, you can get the values of the form elements through this global $_GET array. Here’s an example:

    <form method="get" action="test.php">
      Name: <input type="text" name="fname">
      <input type="submit">
    </form>
    
Using $\_GET in `test.php`, you can fetch the 'fname' value from the URL:

    echo "Name is: " . $_GET['fname'];

- [@official@$_GET](https://www.php.net/manual/en/reserved.variables.get.php)


**$_POST**:- $_POST is a superglobal variable in PHP that's used to collect form data submitted via HTTP POST method. Your PHP script can access this data through `$_POST`. Let's say you have a simple HTML form on your webpage. When the user submits this form, the entered data can be fetched using `$_POST`. Here's a brief example:

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = $_POST["name"];
    }
    ?>
    
In this code, `$_POST["name"]` fetches the value entered in the 'name' field of the form. Always be cautious when using `$_POST` as it may contain user input which is a common source of vulnerabilities. Always validate and sanitize data from `$_POST` before using it.

- [@official@$_POST](https://www.php.net/manual/en/reserved.variables.post.php)


**$_REQUEST**:- $_REQUEST is a PHP superglobal variable that contains the contents of both $_GET, $_POST, and $_COOKIE. It is used to collect data sent via both the GET and POST methods, as well as cookies. $_REQUEST is useful if you do not care about the method used to send data, but its usage is generally discouraged as it could lead to security vulnerabilities. Here's a simple example:

    $name = $_REQUEST['name'];
    
This statement will store the value of the 'name' field sent through either a GET or POST method. Always remember to sanitize user input to avoid security problems.

Visit the following resources to learn more:

- [@official@$_REQUEST](https://www.php.net/manual/en/reserved.variables.request.php)


**$_SERVER**:- The `$_SERVER` is a superglobal in PHP, holding information about headers, paths, and script locations. $_SERVER is an associative array containing server variables created by the web server. This can include specific environmental configurations, the server signature, your PHP script's paths and details, client data, and the active request/response sequence. Among its many uses, `$_SERVER['REMOTE_ADDR']` can help get the visitor's IP while `$_SERVER['HTTP_USER_AGENT']` offers information about their browser. Don't forget to sanitize the content before use to prevent security exploits.

Here's an easy code sample that prints the client's IP:

    echo 'Your IP is: ' . $_SERVER['REMOTE_ADDR'];

Visit the following resources to learn more:

- [@official@$_SERVER](https://www.php.net/reserved.variables.server)


## Variable scope

The location of the declaration greatly influences the realm in which a variable can be accessed, however. This accessibility domain is known as its scope.
variable scope are 3 types
1. local scope
2. global scope
3. static variable
4. Function parameters


## Constants

A constant is a value that cannot be modified throughout the execution of a program. Constants are particularly useful when working with values that definitely will not require modification, such as Pi (3.141592) or the number of feet in a mile (5,280). Once a constant has been defined, it cannot be changed (or redefined) at any other point of the program. Constants are defined using the define() function.
The `define() function` defines a constant by assigning a value to a name. Its prototype follows:- boolean define(string name, mixed value [, bool case_insensitive])
If the optional parameter case_insensitive is included and assigned TRUE, subsequent references to the constant will be case insensitive. Consider the following example in which the mathematical constant Pi is defined:

```php
define("PI", 3.141592);
```

---------
