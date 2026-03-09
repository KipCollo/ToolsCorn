# Lexical Structure

The lexical structure of a programming language is the set of elementary rules that specifies how you write programs in that language. It is the lowest-level syntax of a
language: it specifies what variable names look like, the delimiter characters for comments, and how one program statement is separated from the next.

It covers:

- Case sensitivity, spaces, and line breaks
- Comments
- Literals
- Identifiers and reserved words
- Unicode
- Optional semicolons

## Comments

JavaScript supports two styles of comments. Any text between a // and the end of a line is treated as a comment and is ignored by JavaScript. Any text between the characters /*and*/ is also treated as a comment; these comments may span multiple lines but may not be nested. The following lines of code are all legal JavaScript
comments:

```js
// This is a single-line comment.

/* This is also a comment */

// and here is another comment.

/*
* This is a multi-line comment. The extra * characters at the start of
* each line are not a required part of the syntax; they just look cool!
*/
```

## Literals

A literal is a data value that appears directly in a program. The following are all literals:

```js
12 // The number twelve
1.2 // The number one point two
"hello world" // A string of text
'Hi' // Another string
true // A Boolean value
false // The other Boolean value
null // Absence of an object
```

## Identifiers and Reserved Words

An identifier is simply a name. In JavaScript, identifiers are used to name constants, variables, properties, functions, and classes and to provide labels for certain loops in JavaScript code. A JavaScript identifier must begin with a letter, an underscore (_), or a dollar sign ($). Subsequent characters can be letters, digits underscores, or dollar signs. (Digits are not allowed as the first character so that JavaScript can easily distinguish identifiers from numbers.) These are all legal identifiers:

```js
i
my_variable_name
v13
_dummy
$str
```

## Unicode

JavaScript programs are written using the Unicode character set, and you can use any Unicode characters in strings and comments.For portability and ease of editing, it is
common to use only ASCII letters and digits in identifiers. But this is a programming convention only, and the language allows Unicode letters, digits, and ideographs (but not emojis) in identifiers. This means that programmers can use mathematical sym‐
bols and words from non-English languages as constants and variables:

```js
const π = 3.14;
const sí = true;
```
