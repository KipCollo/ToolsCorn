# Introductions

`PHP tags`:- When PHP processes a file, it recognizes the opening and closing tags, <?php and ?>, to define the boundaries of PHP code execution. Content outside these tags is ignored by the PHP parser, allowing PHP to seamlessly embed in various document types.
A whitespace character (space, tab, or newline) must follow <?php to ensure proper token separation. Omitting this whitespace will result in a syntax error.

```php
<?php echo 'if you want to serve PHP code in XHTML or XML documents, use these tags'; ?>
```

If a file ends with PHP code, it is preferable to omit the PHP closing tag at the end of the file. This prevents accidental whitespace or new lines being added after the PHP closing tag, which may cause unwanted effects because PHP will start output buffering when there is no intention from the programmer to send any output at that point in the script.

```php
<?php
echo "Hello world\n";

// ... more code

echo "Last statement\n";

// the script ends here with no PHP closing tag
```


`Instruction separation`:- As in C or Perl, PHP requires instructions to be terminated with a semicolon at the end of each statement. The closing tag of a block of PHP code automatically implies a semicolon; you do not need to have a semicolon terminating the last line of a PHP block. The closing tag for the block will include the immediately trailing newline if one is present.


`Comments`:- PHP supports 'C', 'C++' and Unix shell-style (Perl style) comments. For example:

```php
<?php
    echo "This is a test\n"; // This is a one-line c++ style comment
    /* This is a multi line comment
       yet another line of comment */
    echo "This is yet another test\n";
    echo "One Final Test\n"; # This is a one-line shell-style comment
?>
```

**Concatenations**:-

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