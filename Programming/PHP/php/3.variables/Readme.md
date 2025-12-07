# Variables

Variables in PHP are represented by a dollar sign followed by the name of the variable. The variable name is case-sensitive.
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

variable scope are 3 types
1. local scope
2. global scope
3. static variable