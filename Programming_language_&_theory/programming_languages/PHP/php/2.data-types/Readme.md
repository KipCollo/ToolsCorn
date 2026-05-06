# Data Types

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


## Converting Between Data Types Using Type Casting

Converting values from one datatype to another is known as type casting. A variable can be evaluated once as a different type by casting it to another. This is accomplished by placing the intended type in front of the variable to be cast.
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
