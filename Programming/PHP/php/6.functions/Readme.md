# Functions

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

## Function arguments

Information may be passed to functions via the argument list, which is a comma-delimited list of expressions. 

```php

<?php
function takes_array($input)
{
    echo "$input[0] + $input[1] = ", $input[0]+$input[1];
}
?>
```

### Passing arguments by reference 

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

### Default argument values 

A function may define default values for arguments using syntax similar to assigning a variable. The default is used only when the parameter is not specified; in particular, note that passing null does not assign the default value.

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

## Returning values

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

## Anonymous functions 

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

## Arrow Functions

Arrow functions were introduced in PHP 7.4 as a more concise syntax for anonymous functions.Both anonymous functions and arrow functions are implemented using the Closure class.Arrow functions have the basic form fn (argument_list) => expr.

Arrow functions support the same features as anonymous functions, except that using variables from the parent scope is always automatic.
When a variable used in the expression is defined in the parent scope it will be implicitly captured by-value. In the following example, the functions $fn1 and $fn2 behave the same way.
