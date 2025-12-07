# Displaying Outputs

1. echo-The easiest way to display outputs in PHP is to use an echostatement. To do that, we enclose the text that we want to display in a
pair of matching quotation marks after the echo keyword. The echo keyword is not case sensitive. Hence, echo, Echo or ECHO will all work.
we can use an echo statement with or without parentheses.

2. print-Besides using echo statements to display outputs, we can use print statements.print statements are VERY similar to echo statements.

```php
<?php
echo 'PHP is fun<BR>and easy!';
print "My name is Brody.";
?>
```

```php
$message = "Hello";
<?= $message ?>//Shorthand echo
```