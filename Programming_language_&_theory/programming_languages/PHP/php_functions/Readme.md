# Functions
Functions are blocks of code that perform specific tasks. That promote code re-usability, code modularity and improve maintainability.
A function may be defined using syntax such as the following:

```php
<?php
function foo($arg_1, $arg_2, /* ..., */ $arg_n)
{
    echo "Example function.\n";
    return $retval;
}
?>
```

**Function Definition**:- It means creating function by defining the details.

*Syntax:*
```php
function functionName(argument1, argument2, ...) { // Arguments are optional
  // Block of code
  return returnValue; // Return value is optional
}
```

**Function Calling**:- It executes a block of code which is defined as function, To call by their `functionName` followed by parentheses to pass parameters if any arguments are defined.

*Syntax:*
```php
functionName(parameter1, parameter2, ...);
```

*Example:*
```php
function greet($name) {
  echo "Good Morning, $name!";
}

greet("Kumar"); // Outputs "Good Morning, Kumar!"
```


## Function Arguments and Parameters
- **Arguments:** are values that accept by a function when calling it. These arguments treated as input data for the function to work with their logic. Arguments are defined as one by one separated by a comma `,` and listed within parentheses after the function name. This is technical term used in function definition.
- **Parameters:** are values that pass to a function when calling it. This is technical term used in function call.

*Function arguments and function parameters are same, but differs by the place of usage.*

Information may be passed to functions via the argument list, which is a comma-delimited list of expressions. 

```php

<?php
function takes_array($input)
{
    echo "$input[0] + $input[1] = ", $input[0]+$input[1];
}
?>
```

**Pass by Reference**
Function arguments has two mechanism. The another one is, the function handles the arguments by the reference of the value, which means exact memory location of the value. This allows the function to directly modify the original variable if any modification takes places and that reflect the outside of the function.

*Syntax: Ampersand symbol (`&`) before an argument in a function definition.*

```php
function incrementOne(&$number) {
  $number++;
}

$x = 5;
incrementOne($x);
echo $x; // Outputs 6 (original variable is modified)
```

By default, function arguments are passed by value (so that if the value of the argument within the function is changed, it does not get changed outside of the function). To allow a function to modify its arguments, they must be passed by reference.

To have an argument to a function always passed by reference, prepend an ampersand (&) to the argument name in the function definition: 

```php


<?php
function add_some_extra(&$string)
{
    $string .= 'and something extra.';
}
$str = 'This is a string, ';
add_some_extra($str);
echo $str;    // outputs 'This is a string, and something extra.'
?>
```

**Pass by Value**:
Function arguments has two mechanism. The one is, the function handles the arguments by the value has passed to it. That value is a copy of the parameter value is passed to the function. Any modifications made on the arguments value within the function that affects only the copy, but not the original variable outside the function.

```php
function updateString($text) {
  $text = "Modified message";
}

$message = "Original message";
updateString($message);
echo $message; // Outputs "Original message" (original string remains unchanged)
```

**Default argument values** - A function may define default values for arguments using syntax similar to assigning a variable. The default is used only when the parameter is not specified; in particular, note that passing null does not assign the default value.

Example #4 Use of default parameters in functions
```php
<?php
function makecoffee($type = "cappuccino")
{
    return "Making a cup of $type.\n";
}
echo makecoffee();
echo makecoffee(null);
echo makecoffee("espresso");
?>

#Making a cup of cappuccino.
#Making a cup of .
#Making a cup of espresso.
```


**Variable Length Argument Lists**:
To get list of arguments that the passed to the function when it called by the function `func_get_args()` and get number of arguments that passed to the function by `func_num_args()` methods.

*Example:*
```php
function myFunction() {
    $args = func_get_args();
    $argsCount = func_num_args();
    foreach ($args as $arg) {
        echo $arg . "&nbsp;";
    }
    echo "<br> Total arguments passed : $argsCount";
}

myFunction("Good", "Morning", 123);
```

To get `n` number of arguments as array by using variable length arguments.

*Example:*
```php
function sum(...$numbers) { 
  return array_sum($numbers);
}

$result = sum(1, 2, 3, 4, 5);
echo $result; // Outputs 15
```


## Function Return Values:
The function may return some useful response as a output at the end of the function execution. The `return` statement in a block of function code that allows a function to end their execution at the place where it is mentioned and send a value back to the place where the function was called. 

*Syntax: `return returnValue;`*


*Example:*
```php
function addNumbers($num1, $num2) {
  $sum = $num1 + $num2;
  return $sum; // end of execution and returns the value
}

$result = addNumbers(10, 5);
echo $result; // Outputs 15
```

Values are returned by using the optional return statement. Any type may be returned, including arrays and objects. This causes the function to end its execution immediately and pass control back to the line from which it was called. See return for more information.

Note:

If the return is omitted the value null will be returned.

```php
<?php
function square($num)
{
    return $num * $num;
}
echo square(4);   // outputs '16'.
?>
```

A function can not return multiple values, but similar results can be obtained by returning an array

```php
<?php
function small_numbers()
{
    return [0, 1, 2];
}
// Array destructuring will collect each member of the array individually
[$zero, $one, $two] = small_numbers();

// Prior to 7.1.0, the only equivalent alternative is using list() construct
list($zero, $one, $two) = small_numbers();

?>
```
To return a reference from a function, use the reference operator & in both the function declaration and when assigning the returned value to a variable: 

```php
<?php
function &returns_reference()
{
    return $someref;
}

$newref =& returns_reference();
?>
```





## Scope of Variables:
It decides the visibility of a variable within the program. 
- Variables declared inside a function blocks, that have local scope. Which means accessible within function block. 
- Variables declared outside of function blocks, that have global scope. Which means accessible throughout of the script.

*Example:*
```php
$globalVariable = "This is a global variable";

function showScope() {
  $localVariable = "This is a local variable";
  echo "Inside function: $localVariable, $globalVariable <br>";
}

showScope();
echo "Outside function: $localVariable, $globalVariable"; // Local variable not accessible
```


## Anonymous Functions

Anonymous functions in PHP, also known as closures, are functions that do not have a specified name. They are most frequently used as a value for callback parameters, but can be used in many other ways. When creating an anonymous function, you can also inherit variables from the parent scope. Here's a basic usage example:

    $greet = function($name)
    {
        printf("Hello %s\r\n", $name);
    };
    
    $greet('World');
    $greet('PHP');
    

In this example, we're creating an anonymous function and assigning it to the variable `$greet`. We then call this anonymous function using $greet with 'World' and 'PHP' as arguments.

Visit the following resources to learn more:

- [@official@Anonymous Functions](https://www.php.net/manual/en/functions.anonymous.php)

Anonymous functions, also known as closures, allow the creation of functions which have no specified name. They are most useful as the value of callable parameters, but they have many other uses. 

Anonymous functions are implemented using the Closure class.

```php
<?php
echo preg_replace_callback('~-([a-z])~', function ($match) {
    return strtoupper($match[1]);
}, 'hello-world');
// outputs helloWorld
?>
```

It is used to create anonymous functions on the go within the script by simple definition without function name.

*Example:*
```php
// Anonymous function definition
$greet = function($name) {
    echo "Good Morning, $name!";
};

// function call
$greet("Kumar");
```


## Arrow Functions

Arrow functions provide a more concise syntax to create anonymous functions. The feature enthusiastically borrowed from modern Javascript significantly improves PHP's functional programming credibility. The primary difference between regular PHP closures and PHP Arrow functions is the automatic capturing of variables from the parent scope.

Visit the following resources to learn more:

- [@official@Arrow Functions](https://www.php.net/manual/en/functions.arrow.php)
Arrow functions were introduced in PHP 7.4 as a more concise syntax for anonymous functions.Both anonymous functions and arrow functions are implemented using the Closure class.Arrow functions have the basic form fn (argument_list) => expr.

Arrow functions support the same features as anonymous functions, except that using variables from the parent scope is always automatic.
When a variable used in the expression is defined in the parent scope it will be implicitly captured by-value. In the following example, the functions $fn1 and $fn2 behave the same way.



## Recursion:
To Calling a function within itself again and again for solving problems that can be broken down into smaller or similar subproblems.

*Example:*
```php
function factorial($n) {
    if ($n === 0) {
        return 1;
    } else {
        return $n * factorial($n - 1);
    }
}

echo factorial(5); // Outputs 120
```


### &#10022; String Functions:

- `strlen()`: Returns the length or number of characters in a string.
- `str_replace()`: Replaces occurrences of one string with another.
- `strpos()`: Returns the position or index of the first occurrence of a substring within a string.
- `strtoupper()`: Converts a string to uppercase.
- `strtolower()`: Converts a string to lowercase.
- `trim()`: Removes whitespace from the beginning and end of a string.
- `explode()`: Splits a string into an array of substrings by the separator.
- `implode()`: Joins elements of an array into a string with the separator.

### &#10022; Mathematical Functions:

- `abs()`: Returns the absolute value of a number.
- `round()`: Rounds a floating-point number to the nearest integer.
- `ceil()`: Rounds a floating-point number up to the nearest integer.
- `floor()`: Rounds a floating-point number down to the nearest integer.
- `sqrt()`: Calculates the square root of a number.
- `pow()`: Raises a number to a power.
- `sin()`, `cos()`, `tan()`, etc.: Trigonometric functions.
- `rand()`: Generates a random integer within a specified range.

### &#10022; Date and Time Functions:

- `date()`: Returns a timestamp into a human-readable date and time string based on given format.
- `time()`: Returns the current time in seconds since the Unix epoch.
- `strtotime()`: Converts a human-readable date and time string into a Unix timestamp.
- `mktime()`: Creates a Unix timestamp from specified date and time.

### &#10022; File and Directory Functions:

- `file_exists()`: Checks if a file or directory exists.
- `fopen()`: Opens a file.
- `fclose()`: Closes a file.
- `fread()`: Reads data from a file.
- `fwrite()`: Writes data to a file.
- `file_get_contents()`: Reads the contents of a file into a string.
- `file_put_contents()`: Writes data to a file.
- `mkdir()`: Creates a directory.
- `rmdir()`: Deletes a directory.

### &#10022; Array Functions:

- `count()`: Returns the number of elements in an array.
- `array_push()`: Adds elements to the end of an array.
- `array_pop()`: Removes the last element from an array and returns it.
- `array_shift()`: Removes the first element from an array and returns it.
- `array_unshift()`: Adds elements to the beginning of an array.
- `array_keys()`: Returns an array containing the keys from an associative array.
- `array_values()`: Returns an array containing the values from an associative array.

### &#10022; Other Common Functions:

- `is_array()`: Checks if a variable is an array.
- `is_string()`: Checks if a variable is a string.
- `is_numeric()`: Checks if a variable is numeric.
- `empty()`: Checks if a variable is empty.
- `isset()`: Checks if a variable is set or exist.
- `json_encode()`: Encodes a PHP value to JSON.
- `json_decode()`: Decodes a JSON string into a PHP value.
- `var_dump()`: Dumps information about a variable.
- `print_r()`: Prints a human-readable representation of a variable.
- `die()`: Stops the execution of the script and optionally displays a message.

