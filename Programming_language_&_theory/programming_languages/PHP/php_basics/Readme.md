# Introductions

## Basic Syntax:
PHP has certain syntax and structure to create a valid script that executes on web server. 

**Embedding PHP Code in Your Web Pages**:- One of PHP’s advantages is that you can embed PHP code directly alongside HTML. For the code to do anything, the page must be passed to the PHP engine for interpretation. But the web server doesn’t just pass every page; rather, it passes only those pages identified by a specific file extension (typically .php).But even selectively passing only certain pages to the engine would nonetheless be highly inefficient for the engine to consider every line as a potential PHP command. Therefore, the engine needs some means to immediately determine which areas of the page are PHP-enabled. This is logically accomplished by delimiting the PHP code. There are four delimitation variants.

- *Default Syntax* - The default delimiter syntax opens with <?php and concludes with ?>.
`PHP tags`:- When PHP processes a file, it recognizes the opening and closing tags, <?php and ?>, to define the boundaries of PHP code execution. Content outside these tags is ignored by the PHP parser, allowing PHP to seamlessly embed in various document types.
A whitespace character (space, tab, or newline) must follow <?php to ensure proper token separation. Omitting this whitespace will result in a syntax error.

```php
<h3>Welcome!</h3>
<?php
    echo "<p>Some dynamic output here</p>";
?>
<p>Some static output here</p>
```

If a file ends with PHP code, it is preferable to omit the PHP closing tag at the end of the file. This prevents accidental whitespace or new lines being added after the PHP closing tag, which may cause unwanted effects because PHP will start output buffering when there is no intention from the programmer to send any output at that point in the script.

```php
<?php
echo "Hello world\n";

// ... more code

echo "Last statement\n";

// the script ends here with no PHP closing tag
```

- *Short-Tags*:- This syntax forgoes the php reference required in the default syntax. However, to use this feature, you need to enable PHP’s short_open_tag directive.

```php
<?
print "This is another PHP example.";
?>
```

When short-tags syntax is enabled and you want to quickly escape to and from PHP to output a bit of dynamic text, you can omit these statements using an output variation known as short-circuit syntax:

```php
<?="This is another PHP example.";?>

//This is functionally equivalent to both of the following variations:
<? echo "This is another PHP example."; ?>
<?php echo "This is another PHP example.";?>

$message = "Hello";
<?= $message ?>//Shorthand echo
```

- *Script*:- Certain editors have historically had problems dealing with PHP’s more commonly used escape syntax variants. Therefore, support for another mainstream delimiter variant, <script>, is offered:

```php
<script language="php">
    print "This is another PHP example.";
</script>
```

- *ASP Style*:- Microsoft ASP pages employ a delimiting strategy similar to that used by PHP, delimiting static from dynamic syntax by using a predefined character pattern: opening dynamic syntax with <%, and concluding with %>. If you’re coming from an ASP background and prefer to continue using this escape syntax, PHP supports it. Here’s an example:

```php
<%
print "This is another PHP example.";
%>
```

NOTE:- The ASP Style and Script delimiting variants are rarely used and should be avoided unless you have ample reason for doing so.

Embedding Multiple Code Blocks - You can escape to and from PHP as many times as required within a given page. For instance, the following example is perfectly acceptable:

```htm
<html>
    <head>
        <title><?php echo "Welcome to my web site!";?></title>
    </head>
    <body>
        <?php
            $date = "July 26, 2010";
        ?>
        <p>Today's date is <?=$date;?></p>
    </body>
</html>
```

`Instruction separation`:- As in C or Perl, PHP requires instructions to be terminated with a semicolon at the end of each statement. The closing tag of a block of PHP code automatically implies a semicolon; you do not need to have a semicolon terminating the last line of a PHP block. The closing tag for the block will include the immediately trailing newline if one is present.


**Comments**:- PHP offers several syntactical variations.PHP supports 'C', 'C++' and Unix shell-style (Perl style) comments.

- *Single-Line C++ Syntax*:- PHP supports C++ single-line comment syntax, which is prefaced with a double slash (//).
- *Shell Syntax*:- Is prefaced with a hash mark (#).
- *Multiple-Line C Syntax*:- PHP also offers a multiple-line variant that can open and close the comment on different lines.

```php
<?php
    echo "This is a test\n"; // This is a one-line c++ style comment
    /* This is a multi line comment
       yet another line of comment */
    echo "This is yet another test\n";
    echo "One Final Test\n"; # This is a one-line shell-style comment
?>
```

Because documentation is such an important part of effective code creation and management,considerable effort has been put into devising solutions for helping developers automate the process. In fact, these days advanced documentation solutions are available for all mainstream programming languages, PHP included. phpDocumentor (www.phpdoc.org) is an open source project that facilitates the documentation process by converting the comments embedded within the source code into a variety of easily readable formats, including HTML and PDF.
phpDocumentor works by parsing an application’s source code, searching for special comments known as DocBlocks. Used to document all code within an application, including scripts, classes, functions,variables, and more, DocBlocks contain human-readable explanations along with formalized descriptors such as the author’s name, code version, copyright statement, function return values, and much more.


**Concatenations**:- The string concatenation character (.) can be used to merge the two strings together.When merging a string and integer, PHP will convert the integer to a string (123) to allow it to be concatenated with the other string (Help ) to produce a string “Help 123” which will be placed into the variable.

```php
echo "Hello " . "World";//Hello World

$greeting = "Hello";
echo $greeting . " " . "world!";//Hello world!

echo "$greeting world!";//Hello world!
echo '$greeting world!';//$greeting world!
```

**require("")**:-

```php
require "index.view.php";
```


## Displaying Outputs

- *echo statement*:- The easiest way to display outputs in PHP is to use an echostatement. To do that, we enclose the text that we want to display in a pair of matching quotation marks after the echo keyword. The echo keyword is not case sensitive. Hence, echo, Echo or ECHO will all work. we can use an echo statement with or without parentheses.echo()’s prototype looks like this:- void echo(string argument1 [, ...string argumentN])

```php
echo 'PHP is fun<BR>and easy!';
$heavyweight = "Lennox Lewis";
$lightweight = "Floyd Mayweather";
echo $heavyweight, " and ", $lightweight, " are great fighters.";
```

- *print() statement*:- Besides using echo statements to display outputs, we can use print statements.print statements are VERY similar to echo statements.The print() statement outputs data passed to it . Its prototype looks like this:- int print(argument)

```php
print "My name is Brody.";
print("<p>I love the summertime.</p>");
print "<p>I love the
summertime.</p>";
$season = "summertime";
print "<p>I love the $season.</p>";
```

Note:- Although the official syntax calls for the use of parentheses to enclose the argument, they’re not required because print() isn’t technically a function; it’s a language construct.
A prototype is simply the function’s definition, formalizing its name, input parameters, and the type of value it returns, defined by a data type.

- *The printf() Statement*:- The printf() statement is ideal when you want to output a blend of static text and dynamic information stored within one or several variables. It’s ideal for two reasons. First, it neatly separates the static and dynamic data into two distinct sections, allowing for easy maintenance. Second, printf() allows you to wield considerable control over how the dynamic information is rendered to the screen in terms of its type, precision, alignment, and position. Its prototype looks like this: integer printf(string format [, mixed args])

```php
printf("Bar inventory: %d bottles of tonic water.", 100);
```

In this example, %d is a placeholder known as a type specifier, and the d indicates an integer value will be placed in that position.ceholder known as a type specifier, and the d indicates an integer value will be placed in that position. When the printf() statement executes, the lone argument, 100, will be inserted into the placeholder. Remember that an integer is expected, so if you pass along a number including a decimal value (known as a float), it will be rounded down to the closest integer. If you pass along 100.2 or 100.6, then 100 will be output. Pass along a string value such as “one hundred”, and 0 will be output, although if you pass along 123food, then 123 will be output.
Commonly Used Type Specifiers:-

1. %b - Argument considered an integer; presented as a binary number
2. %c - Argument considered an integer; presented as a character corresponding to that ASCII value
3. %d - Argument considered an integer; presented as a signed decimal number
4. %f - Argument considered a floating-point number; presented as a floating-point number
5. %o - Argument considered an integer; presented as an octal number
6. %s - Argument considered a string; presented as a string
7. %u - Argument considered an integer; presented as an unsigned decimal number
8. %x - Argument considered an integer; presented as a lowercase hexadecimal number
9. %X - Argument considered an integer; presented as an uppercase hexadecimal number

- *The sprintf() Statement*:- The sprintf() statement is functionally identical to printf() except that the output is assigned to a string rather than rendered to the browser. The prototype follows:- string sprintf(string format [, mixed arguments])

```php
$cost = sprintf("$%.2f", 43.2); // $cost = $43.20
```


------

## Variables
It is used to store data that can be handled throughout the program. To declare a variable in PHP using a `$` symbol followed by a name. The variable name should follow certain rules:
  - It can start with a letter or underscore (_).
  - It can contain letters, numbers, and followed by underscores.
  - Variable names are case-sensitive (e.g., `$age` is different from `$Age`).
  - It cannot be a reserved keyword in PHP.

```php
$name = '';
$age = ''
$is_loggedin = false;
$value1 = 0;
$value_2 = 0;
```
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

```html
<form method="get" action="test.php">
    Name: <input type="text" name="fname">
    <input type="submit">
</form>
```

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


# Data Types
PHP defines the kind of information that a variable can hold. That data types does not required to explicitly declare in most cases. PHP automatically takes the data type based on the value assigned to the variable. PHP has several built-in data types: 
- **Integer:** Whole numbers (e.g., 10, -5).
- **Float:** Decimal numbers (e.g., 3.14, -2.5).
- **String:** Sequence of characters that enclosed with quotes (single '' or double "").
- **Boolean:** Represents TRUE or FALSE state.
- **Enum:** Enumeration can holds a set of named constants.
- **Array:** Series collection of items of any data type.
- **Object:** Represents a complex data structure with associated properties and methods.

```php
$name = "User name";    // String variable
$age = 30;              // Integer variable
$pi = 3.14159;          // Float variable
$is_loggedin = true;    // Boolean variable (TRUE)
```

A data type describes the data that you plan on storing, such as strings (text), integers (whole numbers), or floating-point numbers (decimals). This information is used by the operating system to determine the amount of space required to store the information.
Since PHP 7, the developers have provided the option to declare data types in many situations.

Every single expression in PHP has one of the following built-in types depending on its value:

1. null
2. bool
3. int
4. float (floating-point number)
5. string
6. array
7. object
8. callable
9. resource

PHP is a dynamically typed language, which means that by default there is no need to specify the type of a variable, as this will be determined at runtime. However, it is possible to statically type some aspect of the language via the use of type declarations.
Types restrict the kind of operations that can be performed on them. However, if an expression/variable is used in an operation which its type does not support, PHP will attempt to type juggle the value into a type that supports the operation. This process depends on the context in which the value is used.

To check the value and type of an expression, use the var_dump() function. To retrieve the type of an expression, use the get_debug_type() function. However, to check if an expression is of a certain type use the is_type functions instead.


*Scalar Data Types*:- Scalar data types are used to represent a single value. Several data types fall under this category, including Boolean, integer, float, and string.

- **Boolean**:- The Boolean datatype is named after George Boole (1815–1864), a mathematician who is considered to be one of the founding fathers of information theory. The Boolean data type represents truth, supporting only two values: TRUE and FALSE (case insensitive). Alternatively, you can use zero to represent FALSE, and any nonzero value to represent TRUE.

```php
$alive = false; // $alive is false.
$alive = 1; // $alive is true.
$alive = -1; // $alive is true.
$alive = 5; // $alive is true.
$alive = 0; // $alive is false.
```

- **Integer**:- An integer is representative of any whole number or, in other words, a number that does not contain fractional parts. PHP supports integer values represented in base 10 (decimal), base 8 (octal), and base 16 (hexadecimal) numbering systems, although it’s likely you’ll only be concerned with the first of those systems. Several examples follow: 42(decimal), -678900(decimal), 0755(octal), 0xC4E(hexadecimal).
The maximum supported integer size is platform-dependent, although this is typically positive or negative 2^31 for PHP version 5 and earlier. PHP 6 introduced a 64-bit integer value, meaning PHP will support integer values up to positive or negative 2^63 in size.

- **Float**:- Floating-point numbers, also referred to as floats, doubles, or real numbers, allow you to specify numbers that contain fractional parts. Floats are used to represent monetary values, weights, distances, and a whole host of other representations in which a simple integer value won’t suffice. PHP’s floats can be specified in a variety of ways, several of which are demonstrated here:- 4.5678, 4.0, 8.7e4, 1.23E+11

- **String**:- a string is a sequence of characters treated as a contiguous group. Strings are delimited by single or double quotes, although PHP also supports another delimitation methodology, String Interpolation.
The following are all examples of valid strings:- "PHP is a great language", "whoop-de-do", '*9subway\n', "123$%^789"
A string is a sequence of characters in PHP. Which is enclosed within single quotes (`'`) or double quotes (`"`). 

- Basic String Declaration:

```php
$string1 = 'Welcome, User!';
$string2 = "This is a sample string with \"double quotes\".";
```

- String Concatenation:
It is a process of joining two or more strings together. The `.` (dot) operator is used to concatenate strings in PHP.

```php
$firstName = "Kumar";
$lastName = "Velan";
$fullName = $firstName . " " . $lastName;
echo $fullName; // Output: Kumar Velan
```

- String Functions:
PHP provides a variety of built-in functions for handling and manipulating strings:

	- `strlen()`: Returns the length of a string.
	- `strpos()`: Returns the position of a substring within a string.
	- `strrpos()`: Returns the last occurrence of a substring within a string.
	- `substr()`: Extracts a portion of substring from a string.
	- `str_replace()`: Replaces all occurrences of a substring with another string.
	- `strtolower()`: Converts a string to lowercase.
	- `strtoupper()`: Converts a string to uppercase.
	- `trim()`: Removes whitespace from the beginning and end of a string.
	- `explode()`: Splits a string into an array based on given a delimiter.
	- `implode()`: Joins the elements of an array into a string.
	- `str_shuffle()`: Returns shuffled characters of a given string.
	- `md5()`: Calculates the MD5 hash of a string.
	- `sha1()`: Calculates the SHA-1 hash of a string.

*Compound Data Types*:- Compound data types allow for multiple items of the same type to be aggregated under a single representative entity. The array and the object fall into this category.

**Arrays**:- An array in PHP is actually an ordered map. A map is a type that associates values to keys. This type is optimized for several different uses; it can be treated as an array, list (vector), hash table (an implementation of a map), dictionary, collection, stack, queue, and probably more. As array values can be other arrays, trees and multidimensional arrays are also possible.

An array can be created using the array() language construct. It takes any number of comma-separated key => value pairs as arguments.

array(
    key  => value,
    key2 => value2,
    key3 => value3,
    ...
)

The comma after the last array element is optional and can be omitted. This is usually done for single-line arrays, i.e. array(1, 2) is preferred over array(1, 2, ). For multi-line arrays on the other hand the trailing comma is commonly used, as it allows easier addition of new elements at the end.

Note:- A short array syntax exists which replaces array() with [].

```php
$array1 = array(
    "foo" => "bar",
    "bar" => "foo",
);

// Using the short array syntax
$array2 = [
    "foo" => "bar",
    "bar" => "foo",
];

var_dump($array1, $array2);
```


```php
$books = [
      [
      "name" => "Do Androids Dream of Electric Sheep",
      "author" => "Philip K. Dick",
      "purchaseUrl" => "http://example.com"
      ],
      [
      "name" => "The langoliers",
      "author" => "Andy",
      "purchaseUrl" => "http://example.com"
      ],
      [
      "name" => "Hail Mary",
      "author" => "Andy Wair",
      "purchaseUrl" => "http://example.com"
      ]
   ]
   ?>

<ul>
   <?php foreach($books as $book): ?>
      <li>
         <h3><?= $book["author"] ?></h3>
         <a href="<?= $book["purchaseUrl"]?> " ><?= $book["name"]?></a>
      </li>
   <?php endforeach; ?>
</ul>
```


All `numerical arrays` in PHP begin with a `subscript` (index) of zero. However, when dynamically creating an array, you can start at any subscript and even skip positions. Array names require the same syntax as variables with the addition of the array subscript which is contained in square brackets ([]).
The `array keyword` must be located to the right of the assignment operator followed by the items to be stored with parentheses. Each item is separated by a comma. PHP will place the first item in subscript position zero (0), and each additional item will be placed in the next positions.

PHP provides us with `associative arrays`, which allow us to name our position (key) instead of using numbers (although technically we could name them with a number) and to associate the key with a value.

```php
$class_array["class number"] = "CS122";
$class_array["class name"] = "Programming Concepts 1";
```

The `arrow (=>) symbol` provides a visual association between the key and the value in each position in the array.

```php
$class_array = array ("class number" =>"CS122","class name" => "Programming Concepts 1")
```


There are lots of PHP functions available to work with arrays.
`array_merge` can be used to add the contents of one or more arrays to the end of any existing array, or to an array that has been defined but does not currently contain any values.

```php
$colors1 = array("red", "green");
$colors2 = array("blue", "yellow");
$result = array_merge($colors1, $colors2);
print_r($result);
```


Since PHP 7.4, you can use the spread operator to merge two arrays together.

```php
$fords = ['falcon', 'mustang'];
$cars = ['civic', 'smart', ...$fords, 'tuson’];
var_dump($cars);
```

The spread operator (…) allows you to place one array inside of another array at any location. The var_dump function is a great tool to discover what is inside of any array and the data type for the position in the array. It provides more details than the print_f function.


**Object**:- The other compound datatype supported by PHP is the object. The object is a central concept of the object-oriented programming paradigm.
Unlike the other data types contained in the PHP language, an object must be explicitly declared.

```php
$blender = new Appliance;
```


`Converting Between Data Types Using Type Casting`  -  Converting values from one datatype to another is known as type casting. A variable can be evaluated once as a different type by casting it to another. This is accomplished by placing the intended type in front of the variable to be cast.
Type Casting Operators:-

1. (array) - Array
2. (bool) or (boolean) - Boolean
3. (int) or (integer) - Integer
4. (object) - Object
5. (real) or (double) or (float) - Float
6. (string) - String

- Type casting a double to an integer will result in the integer value being rounded down, regardless of the decimal value.
- You can cast a datatype to be a member of an array. The value being cast simply becomes the first element of the array.
- any datatype can be cast as an object. The result is that the variable becomes an attribute of the object, the attribute having the name scalar.

```php
$score = (double) 13; // $score = 13.0
$score = (int) 14.8; // $score = 14

sentence = "This is a sentence";
echo (int) $sentence; // returns 0

$score = 1114;
$scoreboard = (array) $score;
echo $scoreboard[0]; // Outputs 1114

$model = "Toyota";
$obj = (object) $model;
//The value can then be referenced as follows:
print $obj->scalar; // returns "Toyota"
```


------

## Operators
It can perform operations on variables and values. Common operators in PHP:
- **Arithmetic Operators:** can perform calculations like,
	- `+`: Addition
	- `-`: Subtraction
	- `*`: Multiplication
	- `/`: Division
	- `%`: Modulus (remainder after division)

- **Comparison Operators:** can compare between two values using operators like,
	- `==`: Equal to
	- `!=`: Not equal to
	- `<`: Less than
	- `>`: Greater than
	- `<=`: Less than or equal to
	- `>=`: Greater than or equal to

- **Logical Operators:** can combine conditions using operators like,
	- `&&`: AND (both conditions must be true)
	- `||`: OR (at least one condition must be true)
	- `!`: NOT (inverts the truth value)

```php
$a = 5;
$b = 6;

echo $a + $b;      // Output: 11 (addition)
echo $a > $b;      // Output: false (greater than)
echo $a && $b;     // Output: true (both conditions true)
```
`Arithmetic operations` work in a similar way to mathematics. The exception is that the calculation is done on the right side of the assignment operator (right side of the = sign) and the result is placed into the variable, function, or other object on the left side of the expression.
PHP allows you to use parentheses () to change the order in which values are calculated. Otherwise, for numerical values, the language usually follows a mathematical order of operations. This order is similar to normal mathematics but does have a few differences.
