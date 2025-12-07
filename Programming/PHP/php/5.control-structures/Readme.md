# Control Strutures

Any PHP script is built out of a series of statements. A statement can be an assignment, a function call, a loop, a conditional statement or even a statement that does nothing (an empty statement). Statements usually end with a semicolon. In addition, statements can be grouped into a statement-group by encapsulating a group of statements with curly braces. A statement-group is a statement by itself as well.

## if

It allows for conditional execution of code fragments. PHP features an if structure that is similar to that of C:

if (expr)
  statement


```php
if ($a > $b)
  echo "a is bigger than b";
```

```php
<?php if (condition): ?>
//html code to run if condition is true
<?php else: ?>
//html code to run if condition is false
<?php endif ?>
```

```php
<? php
$bookName = "Dark Matter";
$hasBeenRead = false;
?>

<h2>
   <?php if($hasBeenRead): ?>
      You have Read "<?php echo $bookName?>"

   <?php else: ?>
      You have NOT Read "<?php echo $bookName?>"

   <?php endif ?>
</h2>
```

## foreach

The foreach construct provides an easy way to iterate over arrays and Traversable objects. foreach will issue an error when used with a variable containing a different data type or with an uninitialized variable.
foreach can optionally get the key of each element:

foreach (iterable_expression as $value) {
    statement_list
}

foreach (iterable_expression as $key => $value) {
    statement_list
}


The first form traverses the iterable given by iterable_expression. On each iteration, the value of the current element is assigned to $value.
The second form will additionally assign the current element's key to the $key variable on each iteration.
Note that foreach does not modify the internal array pointer, which is used by functions such as current() and key().

```php
/* Example: value only */
$array = [1, 2, 3, 17];

foreach ($array as $value) {
    echo "Current element of \$array: $value.\n";
}

/* Example: key and value */
$array = [
    "one" => 1,
    "two" => 2,
    "three" => 3,
    "seventeen" => 17
];

foreach ($array as $key => $value) {
    echo "Key: $key => Value: $value\n";
}

/* Example: multi-dimensional key-value arrays */
$grid = [];
$grid[0][0] = "a";
$grid[0][1] = "b";
$grid[1][0] = "y";
$grid[1][1] = "z";

foreach ($grid as $y => $row) {
    foreach ($row as $x => $value) {
        echo "Value at position x=$x and y=$y: $value\n";
    }
}

/* Example: dynamic arrays */
foreach (range(1, 5) as $value) {
    echo "$value\n";
}
```

```php
<?php 
$books = [
   "Do Androids Dream of Electric Sheep",
   "The langoliers",
   "Hail Mary"
]
?>

<ul>
   <?php foreach($books as $book) {
      echo "<li> {$book}^TM </li>";
   }
   ?>
</ul>

//ShortHand syntax
<ul>
   <?php foreach($books as $book): ?>
      <li><?= $book ?></li>
   <?php endforeach; ?>
</ul>
```