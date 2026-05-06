# Introductions

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
