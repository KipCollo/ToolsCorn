# Data Types

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

## Arrays

An array in PHP is actually an ordered map. A map is a type that associates values to keys. This type is optimized for several different uses; it can be treated as an array, list (vector), hash table (an implementation of a map), dictionary, collection, stack, queue, and probably more. As array values can be other arrays, trees and multidimensional arrays are also possible.

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
