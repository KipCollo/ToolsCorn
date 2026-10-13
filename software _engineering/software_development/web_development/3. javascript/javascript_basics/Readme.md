# Javascript Basics

Statement in a programming means any line of code that instructs the compiler to perform a specific task.A computer program is a set of such statements. There can be multiple types of statements in a program code that controls the input and output of the actions that a program is designed for.
A code block in JavaScript is a section of code that is enclosed within curly braces "{ }". It is used to group one or more statements together and can be used to define the scope of a variable or function, or to create control structures such as loops and if-else statements. Code blocks are often used to organize and structure a program's logic.

`Lexical Structure` - The lexical structure of a programming language is the set of elementary rules that specifies how you write programs in that language. It is the lowest-level syntax of a language: it specifies what variable names look like, the delimiter characters for comments, and how one program statement is separated from the next.
It covers:

- Case sensitivity, spaces, and line breaks
- Comments
- Literals
- Identifiers and reserved words
- Unicode
- Optional semicolons

_Literals_ - A literal is a data value that appears directly in a program. The following are all literals:

```js
12; // The number twelve
1.2; // The number one point two
("hello world"); // A string of text
("Hi"); // Another string
true; // A Boolean value
false; // The other Boolean value
null; // Absence of an object
```

_Identifiers and Reserved Words_ - An identifier is simply a name. In JavaScript, identifiers are used to name constants, variables, properties, functions, and classes and to provide labels for certain loops in JavaScript code. A JavaScript identifier must begin with a letter, an underscore (\_), or a dollar sign ($). Subsequent characters can be letters, digits underscores, or dollar signs. (Digits are not allowed as the first character so that JavaScript can easily distinguish identifiers from numbers.) These are all legal identifiers:

```js
i;
my_variable_name;
v13;
_dummy;
$str;
```

_Unicode_ - JavaScript programs are written using the Unicode character set, and you can use any Unicode characters in strings and comments.For portability and ease of editing, it is common to use only ASCII letters and digits in identifiers. But this is a programming convention only, and the language allows Unicode letters, digits, and ideographs (but not emojis) in identifiers. This means that programmers can use mathematical symbols and words from non-English languages as constants and variables:

```js
const π = 3.14;
const sí = true;
```

## Comments

JavaScript supports two styles of comments. Any text between a // and the end of a line is treated as a comment and is ignored by JavaScript. Any text between the characters /_and_/ is also treated as a comment; these comments may span multiple lines but may not be nested.
Used to add annotations, hints, or exclude some code from being executed JavaScript provides two ways of commenting code lines.

`Single line Comment //`:- Everything after the // until the end of the line is excluded from execution.

```js
function elementAt(event) {
  // Gets the element from Event coordinates
  return document.elementFromPoint(event.clientX, event.clientY);
}
// TODO: write more cool stuff!
```

`Multi-line Comment /**/`:- Everything between the opening /_ and the closing _/ is excluded from execution, even if the opening and closing
are on diﬀerent lines.

```js
/*
Gets the element from Event coordinates.
Use like:
var clickedEl = someEl.addEventListener("click", elementAt, false);
*/
function elementAt(event) {
  return document.elementFromPoint(event.clientX, event.clientY);
}
/* TODO: write more useful comments! */
```

`JSDoc /** */`:-

```js
/** function update()
 * Outputs HTML
 * * @param {string} update
 */
```

HTML comments (optionally preceded by whitespace) will cause code (on the same line) to be ignored by the browser also, though this is considered bad practice.

## Javascript Variables

Most of the time, a JavaScript application needs to work with information. To store and represent this information in the JavaScript codebase, we use variables. A variable is a container for a value.

**Variable Declarations** - To use variables in JavaScript, we first need to create it i.e. declare a variable. To declare variables, we use one of the `var`, `let`, or `const` keywords.

- [var] keyword - The var statement declares a function-scoped or globally-scoped variable, optionally initializing it to a value.Can be redeclared and updated into the scope.Variables declared with var are hoisted, while variables declared with let are not.
- [let] keyword - The let variables are mutable i.e. their values can be changed. It works similar to the var keyword with some key differences like scoping which makes it a better option when compared to var.The `let` declaration declares a block-scoped local variable, optionally initializing it to a value.Can be updated but not redeclared within the same scope.
- [const] keyword - The const keyword is used to declare constant variables whose values can’t be changed. It is an immutable variable except when used with objects.Constants are block-scoped, much like variables declared using the `let` keyword. The value of a constant can't be changed through reassignment (i.e. by using the assignment operator), and it can't be redeclared (i.e. through a variable declaration). However, if a constant is an object or array its properties or items can be updated or removed.Needs to be initialized.

```js
//const
const PI = 3.14;
const name = "Collins";
console.log(name); // Will print 'Collins' to the console.
// Trying to reassign a const variable
name = "KipCollo";
console.log(name); // Will give TypeError.
// Trying to declare const variable first and then initialise in another line
const org_name;
org_name = "kipcollo";
console.log(org_name); // Throws an syntax error: missing initializer in const declaration

// let
let name = "Collins";
console.log(name); // Prints Collins
name = "KipCollo";
console.log(name); // Prints KipCollo
// Trying to declare let variable first and then initialise in another line
let org_name;
org_name = "kipcollo";
console.log(org_name); // Prints kipcollo

function hello() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i); //still accessible
}
var car = "Volvo";
car = "BMW"; //redeclare
```

**Variables Naming** -

1. They are case sensitive
2. They must begin with letter,underscore or dollar sign
3. There should be no space between words
4. Should be camelCase notations

- JavaScript Dollar Sign $ - Since JavaScript treats a dollar sign as a letter, identifiers containing $ are valid variable names:

```js
let $ = "Hello World";
let $$$ = 2;
let $myMoney = 5;
```

- JavaScript Underscore (_):- Since JavaScript treats underscore as a letter, identifiers containing `_` are valid variable names:

```js
let _lastName = "Johnson";
let _x = 2;
let _100 = 5;
```

**Truthy and Falsy values** - In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy. That is, all values are truthy except below 6 values:- `false, 0 or -0 or 0n, "", null, undefined, NaN`.
Falsy values is a value that is considered false when encountered in a Boolean context.

```js
if (NaN) {
  console.log("Yes");
} else {
  console.log("No"); //answer because NaN is a falsy value
}
```

```js
if (10) {
  console.log("Yes"); //answer because 10 is a truthy value
} else {
  console.log("No");
}
```

---

## Data Types & Values

Data type refers to the type of data that a JavaScript variable can hold. There are seven primitive data types in JavaScript (Number, BigInt, String, Boolean, Null, Undefined and Symbol). Objects are non-primitives.

The primary data types in JavaScript are:

1. Primitive types: undefined, null, boolean, number, string, bigint, and symbol
2. Non-primitive types/ Refrence values: object (includes arrays, functions,Objects, RegExp and more)

**Primitive Types**:- In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object and has no methods or properties. A significant difference between primitive data types and non-primitives is that primitive types can only contain one value, and that value must be of the same primitive type. In contrast, non-primitives can accommodate a variable number of values, and these values can be of different primitive types. This flexibility is evident in data structures like arrays and objects.

In the context of primitives, it's important to note that they do not possess methods or properties. However, JavaScript enables access to methods and properties associated with primitive types such as string, number, and boolean. this functionality is due to JavaScript's ability to implicitly convert primitives to objects with wrapper objects when necessary. When properties are accessed on primitives, JavaScript auto-boxes the value into a wrapper object and accesses the property on that object instead.

There are 7 primitive data types:

- `string`: are a series of letters and numbers enclosed in quotation marks. JavaScript uses the string literally; it doesn't process it. You'll use strings for text you want displayed or values you want passed along.
- `number`: are values that can be processed and calculated. You don't enclose them in quotation marks. The numbers can be either positive or negative.Used for decimals and integers
- `bigint`(ES2020): An integer with arbitrary precision. For example: 9007199254740992n.
- `boolean`: (true/false) - lets you evaluate whether a condition meets or does not meet specified criteria.Used for taking decisions.
- `undefined`: Indicates that a variable has been declared but has not yet been assigned a value.
- `Symbol`(ES2015): A data type whose instances are unique and immutable.
- `null`: Represents the intentional absence of any object value i.e no value. It is an assignment value.Used when you want to clear the variable.

```js
let name = "Collins";
let age = 21;
let price = 12.67;
let isapproved = true;
let work; //undefined
let work = undefined; //undefined
let color = null;
```

Since Javascript is dynamic language,variable data types is determined during runtime.To check the type of data use the keyword **typeof**

```js
typeof name; //string
```

**Symbol**: Symbol is a type of primitive data type intriduced in ES6. It is used to specify the hidden identifiers that can not be directly accessed by any other code.

```js
const gfg = {
  name: "GeeksforGeeks",
  desc: "A Computer Science portal for all geeks.",
};

let short_name = Symbol("short_name");
gfg.short_name = "GFG";
console.log(`${gfg.name}, \n${gfg.desc}`);
console.log(`Company's Short Name using gfg.short_name: ${gfg.short_name} `);
console.log(`Company's Short Name using gfg[short_name]: ${gfg[short_name]} `);
```

**BigInt** - In JavaScript, BigInt is a built-in object that provides a way to represent integers larger than the maximum safe integer value of 2^53 - 1. BigInts can be used for calculations involving very large numbers, such as cryptography, scientific computations, and financial applications.
To create a BigInt, you can append the n suffix to an integer literal or use the BigInt() constructor function.

```js
let x = 123456789012345678901234567890n;
let y = BigInt("987654321098765432109876543210");
```

In these examples, the n suffix and the BigInt() constructor are used to create BigInts.

BigInts can be used with standard arithmetic operators, such as +, -, \*, /, and %. However, you must use the BigInt() function when mixing BigInts with regular numbers, as shown in the following example:

```js
let x = 123n;
let y = 456;
let z = x + BigInt(y); // output: 579n
```

In this example, the BigInt() function is used to convert the regular number y to a BigInt, so it can be added to the BigInt x.

BigInts can also be compared using standard comparison operators, such as <, <=, >, >=, ==, and !=. However, you cannot mix BigInts and regular numbers in a comparison, so you must use the BigInt() function to convert regular numbers to BigInts.

```js
let x = 123n;
let y = 456;
console.log(x < BigInt(y)); // output: true
```

In this example, the BigInt() function is used to convert the regular number y to a BigInt, so it can be compared to the BigInt x.

BigInts also support bitwise operators, such as &, |, ^, ~, <<, and >>. However, you cannot mix BigInts and regular numbers in a bitwise operation, so you must use the BigInt() function to convert regular numbers to BigInts.

```js
let x = 0b1010n;
let y = 0b1100;
let z = x & BigInt(y); // output: 8n
```

In this example, the BigInt() function is used to convert the regular number y to a BigInt, so it can be bitwise-ANDed with the BigInt x.

In summary, BigInt is a built-in object in JavaScript that provides a way to represent integers larger than the maximum safe integer value. BigInts can be created using the n suffix or the BigInt() constructor function and can be used with standard arithmetic, comparison, and bitwise operators. However, you must use the BigInt() function when mixing BigInts and regular numbers.

- `Exceptions in BigInt` - In JavaScript, BigInts can throw exceptions when certain operations are performed on them. These exceptions are similar to regular JavaScript exceptions and are designed to help you catch errors in your code.
  The most common exception that can be thrown when working with BigInts is RangeError, which occurs when a BigInt operation results in a value that is outside the range of valid BigInt values. For example, the following code will throw a RangeError exception:

```js
let x = 1n << 1000000n; // RangeError: BigInt too big
```

In this example, the << operator is used to shift the BigInt 1n left by 1000000 bits, which results in a BigInt value that is too large to be represented.

Another exception that can be thrown when working with BigInts is TypeError, which occurs when a function or operator is used on a non-BigInt value. For example, the following code will throw a TypeError exception:

```js
let x = 123n;
let y = "456";
let z = x + y; // TypeError: Cannot mix BigInt and other types
```

In this example, the + operator is used to add the BigInt x to the string "456", which is not a BigInt and cannot be mixed with BigInts.

To handle exceptions when working with BigInts, you can use the standard JavaScript try/catch statement.

```js
try {
  let x = 1n << 1000000n;
} catch (e) {
  console.error(e); // RangeError: BigInt too big
}
```

In this example, the try statement is used to attempt the << operation on the BigInt 1n. If a RangeError exception is thrown, the catch statement will catch the exception and log an error message to the console.
In summary, BigInts in JavaScript can throw exceptions when certain operations are performed on them. The most common exception is RangeError, which occurs when a BigInt value is outside the range of valid BigInt values. To handle exceptions, you can use the standard JavaScript try/catch statement.

**Numbers** - In JavaScript, Number is a built-in object that represents numeric values. It is a primitive data type that can represent both integers and floating-point numbers. In JavaScript, all numbers are stored as double-precision floating-point numbers, so you can represent a wide range of values with a high degree of precision.

_Number Properties_ -
MAX_VALUE - The maximum numeric value representable in JavaScript
MIN_VALUE - Smallest positive numeric value representable in JavaScript
NaN - The “Not-a-Number” value
NEGATIVE_INFINITY - The negative Infinity value
POSITIVE_INFINITY - Positive Infinity value

`NaN` - NaN is an acronym for "Not a Number" in JavaScript. It's a special value that represents the result of an operation that cannot produce a valid number. For example, if you divide 0 by 0, the result is NaN:

```js
console.log(0 / 0); // Output: NaN
```

NaN is also returned when you try to perform an operation with non-numeric values, such as

```js
console.log(parseInt("Hello World")); // Output: NaN
```

In JavaScript, NaN is considered a "truthy" value, meaning that it's considered truthy in a boolean context. However, NaN is not equal to any value, including itself. To check for NaN, you can use the isNaN() function

```js
console.log(isNaN(NaN)); // Output: true
```

`Infinity` - In JavaScript, "Infinity" is a special value representing the positive infinity, which is a numerical value that is greater than any other number. It is a constant in the global JavaScript scope and can be used as a value in mathematical operations.

```js
console.log(Infinity + 1); // outputs Infinity
console.log(Infinity * 2); // outputs Infinity
console.log(1 / 0); // outputs Infinity
```

- Note - that division by zero in JavaScript results in "Infinity" or "-Infinity", depending on the signs of the operands.

_Number System_ - In JavaScript, the number system is used to represent numbers in a particular format. JavaScript supports two number systems, which are:

1. `Decimal number system`:- In JavaScript, the decimal number system is the default and most commonly used number system. It uses base-10 format and represents numbers using the 10 digits, 0 to 9. You can represent decimal numbers using the standard notation,

```js
let decimal = 10;
console.log(decimal); // 10
```

In JavaScript, all numbers are stored as 64-bit floating-point numbers, which means that some precision can be lost when performing mathematical operations on very large or very small numbers. However, JavaScript provides several methods to perform arithmetic operations with integers, such as bitwise operators and the Math.floor() method.
It's important to note that JavaScript does not have a specific type for representing integers, so all numbers are treated as floating-point numbers. To ensure that you are working with integers, you may need to use methods such as Math.floor() or parseInt() to convert numbers to integers or use bitwise operators to perform bit-level operations.

2. `Binary number system`:- Binary is a base-2 number system that uses only two digits, 0 and 1, to represent numbers. In JavaScript, you can represent binary numbers by prefixing the number with "0b" or "0B".

```js
let binary = 0b10;
console.log(binary); // 2
```

Binary numbers are often used in low-level programming and computer hardware, as well as in certain mathematical operations. In JavaScript, you can perform bitwise operations on binary numbers, such as shifting bits to the left or right, or performing logical operations like AND, OR, and XOR.
It is important to note that binary support was added in ECMAScript 6 (ES6) and may not be supported in older JavaScript engines. To ensure compatibility, it's best to use decimal or hexadecimal representations for numbers in your code

3. `Octal number system`:- The octal number system is a base-8 number system that uses 8 digits, 0 to 7, to represent numbers. In JavaScript, you can represent octal numbers by prefixing the number with "0o" or "0O".

```js
let octal = 0o10;
console.log(octal); // 8
```

It is important to note that octal support was added in ECMAScript 6 (ES6) and may not be supported in older JavaScript engines. To ensure compatibility, it's best to use decimal or hexadecimal representations for numbers in your code. Octal numbers can be useful for certain low-level operations, such as working with file permissions or representing values in a compact form.

4.  `HexaDecimal Number system`:- Hexadecimal is a numeral system that uses base 16, and it's often used in computer science and programming. In JavaScript, hexadecimal numbers are represented as strings that begin with "0x".

```js
let hex = 0xff;
console.log(hex); // Output: 255
```

_Number Methods_ - These functions provide powerful tools for working with numbers in JavaScript. They can be used to validate input, convert between number formats, and manipulate numbers in various ways.

toPrecision() - String of a number written with a specified length
toString() - Returns a number as a string
valueOf() - Returns a number as a number
toExponential() - Returns a string with a rounded number written as exponential notation
toFixed() - Returns the string of a number with a specified number of decimals
`isNaN() function` - The isNaN() function is used to check if a value is NaN (Not-a-Number). It returns true if the value is NaN, and false otherwise.
`isFinite() function` - The isFinite() function is used to check if a value is a finite number. It returns true if the value is a finite number, and false otherwise. It also returns false for NaN, Infinity, and -Infinity.
`parseFloat() function` - The parseFloat() function is used to parse a string and extract a floating-point number from it. It converts the initial portion of the string that represents a valid floating-point number into a number value.

`Number.isNaN(value)` - Returns true if the given value is NaN (Not a Number), and false otherwise.

```js
console.log(Number.isNaN(10)); // false
console.log(Number.isNaN("Hello")); // true
console.log(Number.isNaN(NaN)); // true
```

`Number.isFinite(value)` - Returns true if the given value is a finite number, and false otherwise. This function does not convert the value to a number before checking it, so it will return false for non-numeric values.
`Number.parseInt(string, radix)` - Parses a string into an integer using the specified radix (base). The radix can be any integer between 2 and 36. If the string cannot be parsed into an integer, this function returns NaN.

```js
console.log(Number.parseInt("100")); // 100
console.log(Number.parseInt("100", 2)); // 4
console.log(Number.parseInt("FF", 16)); // 255
```

`Number.parseFloat(string)` - Parses a string into a floating-point number. If the string cannot be parsed into a number, this function returns NaN.
`Number.MAX_VALUE` - Returns the largest representable number in JavaScript.

```js
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324
```

`Number.MIN_VALUE` - Returns the smallest representable number in JavaScript.
`Number.POSITIVE_INFINITY` - Represents positive infinity in JavaScript.
`Number.NEGATIVE_INFINITY` - Represents negative infinity in JavaScript.

- `Number.MAX_SAFE_INTEGER` -
  `Number.EPSILON` - Represents the smallest representable difference between two numbers in JavaScript.
  `Number.prototype.toFixed(digits)` - Returns a string representing the given number with a fixed number of decimal places (specified by the digits argument).

```js
let x = 10.12345;
console.log(x.toFixed(2)); // "10.12"
```

`Number.prototype.toPrecision(digits)` - Returns a string representing the given number with a specified number of significant digits (specified by the digits argument).
`Number.prototype.toString(radix)` - Returns a string representation of the given number in the specified radix (base).
`Number.toFixed()`: The Number.toFixed() method rounds a number to a specified number of decimal places and returns a string representation of the rounded number.

```js
let x = 4.5678;
x.toFixed(2); // output: "4.57"
console.log((2.7).toFixed(3)); //2.700
```

_Converting numbers_ - In JavaScript, converting numbers involves changing a number from one data type to another, such as converting a number to a string or converting a string to a number
In JavaScript, you can convert numbers to strings and vice versa using the following methods:

- toString():- Converts a number to a string.

```js
let num = 42;
let str = num.toString();
console.log(typeof str); // Output: "string"
```

- Number():- Converts its argument to a number.

```js
let str = "42";
let num = Number(str);
console.log(typeof num); // Output: "number"
```

- parseInt():- Parses a string argument and returns an integer.

```js
let str = "42";
let num = parseInt(str);
console.log(typeof num); // Output: "number"
console.log(num % 1 === 0); // Output: true
```

- parseFloat():- Parses a string argument and returns a floating-point number.

```js
let str = "3.14";
let num = parseFloat(str);
console.log(typeof num); // Output: "number"
console.log(num % 1 !== 0); // Output: true
```

It's important to note that parseInt() and parseFloat() only return numbers if the string argument represents a valid number. If the argument cannot be parsed as a number, these methods return NaN (Not-a-Number).

_Numeric Separators_ - Numeric separators in JavaScript are a way to make large numbers more readable by separating groups of digits with underscores. This is especially useful for large numbers, such as millions or billions, where it can be difficult to quickly count the number of digits.
Numeric separators are represented by an underscore (\_) character and can be used in the middle of a number.

```js
let x = 1_000_000;
console.log(x); // output: 1000000
```

In this example, the numeric separator is used to separate the groups of digits in the number 1_000_000, making it easier to read.

Numeric separators can be used with integers, floating-point numbers, and binary, octal, and hexadecimal literals.

```js
let y = 0b1010_0001_0010;
console.log(y); // output: 4162
```

In this example, the binary literal 0b1010_0001_0010 is used with a numeric separator to represent the decimal number 4162.

It's important to note that numeric separators are ignored by JavaScript when parsing a number, so they have no effect on the actual value of the number.

```js
let z = 1_2_3 + 4_5_6;
console.log(z); // output: 579
```

In this example, the numeric separators are used to make the number 579 more readable, but they have no effect on the actual value of the expression 1_2_3 + 4_5_6.

Numeric separators were introduced in ECMAScript 2017 (ES8) and are supported in modern browsers and Node.js. However, they may not be supported in older browsers or environments, so it's important to check for compatibility before using them in your code.

_Internationalization Numbers_ - Internationalization (i18n) is an important aspect of software development, especially when it comes to working with numbers. In JavaScript, you can use the Internationalization API (Intl) to format numbers according to a user's locale (i.e., specific to their language and region). Here are some examples of using Intl for formatting numbers:

`Formatting a number according to a user's locale`:- You can use the Intl.NumberFormat constructor to create a formatter object that formats a number according to a user's locale.

```js
let number = 12345.6789;
let formatter = new Intl.NumberFormat("en-US");
let formattedNumber = formatter.format(number); // returns "12,345.679"
```

In this example, the formatter object is created with the 'en-US' locale (i.e., English language and US region), and the number is formatted with commas as thousands separators and a period as the decimal separator.

`Customizing number formatting options`:- You can customize the formatting options used by the formatter object to format a number in a specific way.

```js
let number = 12345.6789;
let formatter = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
let formattedNumber = formatter.format(number); // returns "12.345,68 €"
```

In this example, the formatter object is created with the 'de-DE' locale (i.e., German language and Germany region), and the options are set to format the number as a currency value in Euros with two decimal places and a comma as the decimal separator.

`Formatting percentages`:- You can use the Intl.NumberFormat constructor to format a number as a percentage value.

```js
let number = 0.05;
let formatter = new Intl.NumberFormat("en-US", { style: "percent" });
let formattedNumber = formatter.format(number); // returns "5%"
```

In this example, the formatter object is created with the 'en-US' locale, and the style option is set to 'percent', which formats the number as a percentage value.

### Type Conversion & Type Coercion

`Coercion/Implicit Type conversion/Automatic Type conversion` refers to the process of automatic or implicit conversion of values from one data type to another. This includes conversion from Number to String, String to Number, Boolean to Number etc. when different types of operators are applied to the values.
`Type Conversion` In case the behavior of the implicit conversion is not sure, the constructors of a data type can be used to convert any value to that datatype, like the Number(), String() or Boolean() constructor.
Type conversion is when we manually convert from one type to another while type coersion is when Javascript automatically converts types.

_Coercion_ - The Number 10 is converted to string '10' and then '+' concatenates both strings

```javascript
var x = 10 + "";//"10"
var y = "20" + 10;//30
console.log('I am ' + 23 ' years old')
console.log('23' / '2')//11.5
console.log('10' + 1 - 2)//9
console.log('19' - '13' + '17')//617
console.log('19' - '13' + 17)//23
```

_type conversion_ - implicit type conversion /automatic type conversion

- for example
  number se string me conversion
  string se number me convrsion

```js
//String to Number
const inputYear = "1990";
const inputYearNum = Number(inputYear); // 1991
Number("Collo"); // NaN

//Number to String
String(23);
```

---

## Operators

JavaScript operators are symbols or keywords used to perform operations on values and variables. Operators are essential to almost every JavaScript expression.

1. **Arithmetic Operators** - Used for numeric calculations.

| Operator | Description         | Example          | Result |
| -------- | ------------------- | ---------------- | ------ |
| `+`      | Addition            | `5 + 3`          | `8`    |
| `-`      | Subtraction         | `10 - 4`         | `6`    |
| `*`      | Multiplication      | `2 * 4`          | `8`    |
| `/`      | Division            | `8 / 2`          | `4`    |
| `%`      | Modulus (remainder) | `7 % 3`          | `1`    |
| `**`     | Exponentiation      | `2 ** 3`         | `8`    |
| `++`     | Increment           | `let i = 1; i++` | `2`    |
| `--`     | Decrement           | `let i = 1; i--` | `0`    |

2. **Assignment Operators** - Used to assign values to variables.

| Operator | Example   | Meaning            |
| -------- | --------- | ------------------ |
| `=`      | `x = 10`  | Assign `10` to `x` |
| `+=`     | `x += 5`  | `x = x + 5`        |
| `-=`     | `x -= 3`  | `x = x - 3`        |
| `*=`     | `x *= 2`  | `x = x * 2`        |
| `/=`     | `x /= 4`  | `x = x / 4`        |
| `%=`     | `x %= 2`  | `x = x % 2`        |
| `**=`    | `x **= 3` | `x = x ** 3`       |

3. **Comparison Operators** - Used to compare values.

| Operator | Description           | Example     | Result  |
| -------- | --------------------- | ----------- | ------- |
| `==`     | Equal to (loose)      | `5 == '5'`  | `true`  |
| `===`    | Equal to (strict)     | `5 === '5'` | `false` |
| `!=`     | Not equal to          | `5 != '5'`  | `false` |
| `!==`    | Strict not equal      | `5 !== '5'` | `true`  |
| `>`      | Greater than          | `8 > 5`     | `true`  |
| `<`      | Less than             | `3 < 4`     | `true`  |
| `>=`     | Greater than or equal | `5 >= 5`    | `true`  |
| `<=`     | Less than or equal    | `7 <= 6`    | `false` |

_`==` (Loose Equality)_: Compares two values for equality after converting both values to a common type (type coercion). For example, `5 == '5'` returns `true` because the string `'5'` is converted to the number `5` before comparison.(value check).
_`===` (Strict Equality)_: Compares both the value and the type without performing any type conversion. For example, `5 === '5'` returns `false` because the types (number and string) are different.(value and type check.)

```js
let a = 5;
let b = "5";

if (a == b) {
  console.log("Match"); //Match
}

if (a === b) {
  console.log("Match");
} else {
  console.log("No match");
} //No match
```

4. **Logical Operators** - Used for boolean logic.

```
| Operator | Description | Example         | Result  |
| -------- | ----------- | --------------- | ------- |
| `&&`     | AND         | `true && false` | `false` |
| `||`     | OR          | `true || false` | `true`  |
| `!`      | NOT         | `!true`         | `false` |
```

`Short-circuit evaluation` refers to the process where JavaScript evaluates logical expressions from left to right and stops as soon as the outcome is determined.
_Logical AND (`&&`)_: If the first operand is falsy, the entire expression returns that falsy value without evaluating the second operand.It's used when all conditions need to be true.
_Logical OR (`||`)_: If the first operand is truthy, the entire expression returns that truthy value without evaluating the second operand.It's used when at least one condition needs to be true.
These operators are also used for control flow and setting default values.

```javascript
let result = null || "Default";
console.log(result); // Outputs: "Default"

restraurant.orderPizza && restraunt.orderPizza("Mushroom");
if (restraurant.orderPizza) {
  restraunt.orderPizza("Mushroom");
}
```

Here, `null` is falsy, so the `||` operator returns the second operand.

```js
const rest1 = {
  name: "cappri",
  numGuests: 20,
};
const rest2 = {
  name: "La Piazza",
  owner: "Collin",
};
//OR assignment operator
rest1.numGuests = rest1.numGuests || 10; //20
rest2.numGuests = rest2.numGuests || 10; //10
rest1.numGuests ||= 10;

//AND assignment operator
rest1.owner = rest1.owner && "<ANONYMOUS"; //ANONYMOUS
rest2.owner = rest2.owner && "<ANONYMOUS"; //undefined
rest2.owner &&= "<ANONYMOUS";
```

5. **Bitwise Operators** - Operate on binary representations.

| Operator | Description | Example          |     |          |
| -------- | ----------- | ---------------- | --- | -------- |
| `&`      | AND         | `5 & 1` => `1`   |     |          |
| \`       | \`          | OR               | \`5 | 1`=>`5\` |
| `^`      | XOR         | `5 ^ 1` => `4`   |     |          |
| `~`      | NOT         | `~5` => `-6`     |     |          |
| `<<`     | Left shift  | `5 << 1` => `10` |     |          |
| `>>`     | Right shift | `5 >> 1` => `2`  |     |          |

7. **Unary Operators** - Operate on a single operand.

| Operator | Description         | Example                  |
| -------- | ------------------- | ------------------------ |
| `typeof` | Returns type        | `typeof 42` → `"number"` |
| `delete` | Deletes object prop | `delete obj.name`        |
| `void`   | Returns undefined   | `void(0)` → `undefined`  |
| `!`      | Logical NOT         | `!false` → `true`        |

8. **Ternary Operator** - A shorthand for if-else.The ternary operator is a concise way to perform conditional operations. It takes three operands:

```javascript
condition ? expressionIfTrue : expressionIfFalse;
```

```js
let age = 18;
let access = age >= 18 ? "Allowed" : "Denied";
console.log(access); // Allowed
```

9. **String Operators** - Used to concatenate strings.

```js
let first = "Code";
let second = "Harbor";
console.log(first + second); // "CodeHarbor"
```

10. **Type Operators** - Check the data type or construct.

| Operator     | Use Case                        |
| ------------ | ------------------------------- |
| `typeof`     | `typeof "hello"` → `"string"`   |
| `instanceof` | `arr instanceof Array` → `true` |

- instanceof operator:- The instanceof operator tests whether an object has in its prototype chain the prototype property of a constructor.
- typeof operator:- The typeof operator returns a string indicating the type of the unevaluated operand.

```js
typeof 12; //output is "number"
typeof "Hello"; //output "string"
```

11. **Comma Operator** - Evaluates multiple expressions and returns the last.

```js
let x = (1 + 2, 3 + 4);
console.log(x); // 7
```

11. **Optional Chaining & Nullish Coalescing**:-

_Optional Chaining (`?.`)_: allows you to safely access deeply nested object properties without having to check each level manually.

```javascript
let user = {};
console.log(user.profile?.name); // Outputs: undefined
restraunt.order?.(o, 1) ?? "Method does not exist";
users[0]?.name ?? "User array empty";
```

Without optional chaining, accessing `user.profile.name` would throw an error if `profile` is undefined. Optional chaining prevents such errors by short-circuiting the evaluation if any part of the chain is `null` or `undefined`.

_Nullish Coalescing (`??`)_: Returns right operand if left is `null` or `undefined`.

```js
let value = null ?? "Default";
console.log(value); // "Default"
```

```js
const rest1 = {
  name: "La Piazza",
  numGuests: 0,
};

//nullish assignment operator
rest1.numGuests = rest1.numGuests ?? 10; //0
rest1.numGuests = rest1.numGuests || 10; //10, 0 is falsy
rest1.numGuests ??= 10;
```

12. **Delete Operator** - The **`delete`** operator is used to remove a property from an object.

```javascript
let obj = { name: "Alice", age: 25 };
delete obj.age;
console.log(obj); // Outputs: { name: "Alice" }
```

- It removes the property from the object, and the property becomes undefined.
- It does not affect variables or functions declared with `var`, `let`, or `const`.
- When used on arrays, it removes the element but does not update the length, leading to sparse arrays.

[MDN JavaScript Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)

13. **Spread Operators** - The Spread Operator in JavaScript is denoted by three consecutive dots (…) and it allows an iterable (like an array or a string) to be expanded into individual elements.

```js
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];

console.log(arr3); // Output: [1, 2, 3, 4, 5, 6]
```

Here, the spread operator is used to concatenate the arrays `arr1` and `arr2` into a new array `arr3`. The resulting output is `[1, 2, 3, 4, 5, 6]`.
Similarly, we can also use the spread operator to add elements to an existing array or pass an array as arguments to a function.

_Assign values using spread operator_ - To assign values in JavaScript using the spread operator, you can use the spread syntax (...) to create a new array, object or function that includes all the elements of an existing array, object or function, plus additional elements.

Here's an example of how to use spread operator to assign values in JavaScript:

1. Assigning values in array:

```javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6]; //assigning new values using spread operator
console.log(arr2); // Output: [1, 2, 3, 4, 5, 6]
```

2. Assigning values in object:

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3, d: 4 }; // assigning new values using spread operator
console.log(obj2); // Output: {a: 1, b: 2, c: 3, d: 4}
```

3. Assigning values in function:

```javascript
function sum(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers)); //assigning values using spread operator
// Output: 6
```

In the above example, we used the spread operator to pass the `numbers` array as arguments to the `sum()` function. The spread operator expands the array into individual values, which are then passed as arguments to the function.

_Copy Array spread operator_ - To copy an array in JavaScript using the spread operator, you can simply use the spread operator followed by the variable name of the array that you want to copy. Here's an example:

```javascript
const originalArray = [1, 2, 3, 4];
const copiedArray = [...originalArray];

console.log(originalArray); // Output: [1, 2, 3, 4]
console.log(copiedArray); // Output: [1, 2, 3, 4]
```

In this example, we first create an array called `originalArray` with four elements. We then use the spread operator (`...`) to create a new array called `copiedArray`, which has all the elements of the `originalArray`.

Note that when using the spread operator to copy an array, it creates a shallow copy, meaning that any nested objects or arrays within the original array will not be copied but rather referenced to the same memory location.

_Join 2 Arrays using spread operator_ - To join two arrays in JavaScript using the spread operator, you can simply place the spread operator (...) in front of each array variable separated by a comma inside a new array literal ([]). Here's an example:

```js
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArray = [...arr1, ...arr2];

console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]
```

In the above example, we create two arrays `arr1` and `arr2`. We then use the spread operator to combine them into a new array `combinedArray`. Finally, we log the contents of the `combinedArray` using `console.log()`.

_Convert String to array using spread_ - To convert a string to an array using the spread syntax in JavaScript, you can use the `split()` method along with the spread operator (`...`) to split the string into individual characters and then convert them into an array.
Here's an example code snippet that demonstrates how to convert a string to an array using spread:

```javascript
const str = "hello";
const arr = [...str];

console.log(arr); // Output: ["h", "e", "l", "l", "o"]
```

In the above example, the spread operator `...` is used to spread the string `str` into individual characters. These individual characters are then wrapped in an array using square brackets `[...]` to create the resulting array `arr`.
Note that this technique only works for converting a string to an array of characters. If you want to split a string into an array of substrings based on a delimiter, you should use the `split()` method without the spread operator.

_Passing arguments in function using spread_ - In JavaScript, the spread operator (`...`) can be used to pass an array or iterable object as individual arguments to a function.
Here's an example of how to use the spread operator to pass arguments to a function:

```js
function myFunction(x, y, z) {
  console.log(x, y, z);
}
const args = [1, 2, 3];

myFunction(...args); // Output: 1 2 3
```

In this example, the `myFunction` function takes three arguments (`x`, `y`, and `z`). We then define an array `args` containing `[1, 2, 3]`. Finally, we call `myFunction` using the spread operator (`...args`) to pass each element of the `args` array as individual arguments to the function. This results in the output `1 2 3` being printed to the console.

_Shallow copy_ - A shallow copy in JavaScript creates a new object that points to the same memory location as the original object. This means that if you make a change to the original object, it will also affect the copied object.
Here's an example of creating a shallow copy using the spread operator:

```js
const originalObj = {
  name: "John",
  age: 30,
  hobbies: ["reading", "writing"],
};

const shallowCopyObj = { ...originalObj };

originalObj.hobbies.push("coding");

console.log(originalObj); // {name: "John", age: 30, hobbies: ["reading", "writing", "coding"]}
console.log(shallowCopyObj); // {name: "John", age: 30, hobbies: ["reading", "writing", "coding"]}
```

As you can see, changes made to the `hobbies` array in the original object also affect the `hobbies` array in the shallow copied object, since they share the same memory location.

_Deep copy_ - In JavaScript, a deep copy is a copy of an object or array that creates a new instance but also copies all nested objects and arrays rather than referencing them. This means that changes made to the original object will not affect the copied object.
Here's an example:

```js
let originalArray = [1, 2, [3, 4]];
let copiedArray = JSON.parse(JSON.stringify(originalArray));
```

In this example, `originalArray` contains an array with two numbers and another nested array. To create a deep copy of this array, we can use the `JSON.parse()` and `JSON.stringify()` methods.

The `JSON.stringify()` method converts the `originalArray` into a string, including all nested objects and arrays. The `JSON.parse()` method then creates a new object by parsing the stringified version of the `originalArray`.

With this method of copying, any changes made to `originalArray` after creating the `copiedArray` will not affect the `copiedArray`, as they are completely separate instances in memory. For example:

```js
originalArray[2][0] = 5;
console.log(originalArray); // [1, 2, [5, 4]]
console.log(copiedArray); // [1, 2, [3, 4]]
```

In this case, changing the first element of the nested array in `originalArray` does not affect the corresponding element in `copiedArray`.

**operator precedence** - Determines how operators are parsed concerning each other.Operators with higher precedence become the operands of operators with lower precedence.Refer to mdn docs on precedence.

---

## Scope

In JavaScript, `scoping` refers to the visibility or accessibility of variables, functions, and objects within different parts of a program. It determines where in the program a particular variable or function can be accessed and manipulated.
When a variable is referenced in JavaScript, the interpreter searches for that variable first in the local scope of the current function, and then in the next outer scope, continuing until it reaches the global scope. If the variable is not found in any of the scopes, a reference error is thrown.
`scope` - Space or environment in which a certain variable is declared(variable environment in case of functions).There is global scope,function scope and block scope.
`Scope of a variable`: Region of our code where a certain variable can be accessed.

- _Global scope_:- Variables declared outside of any function or block have global scope, which means they can be accessed from anywhere in the program, including within functions or blocks.

```js
var x = 10;
function myFunction() {
  console.log(x); // 10
}
```

- _Block scope(ES6)_:- Variables declared inside a block have block scope, which means they can only be accessed within that block.Applies only to `let` and `const` keywords.The variable is accessible wthin the block{}

```js
if (year >= 1981 && year <= 1996) {
  //if block,for block, etc
  const millenial = true;
}
console.log(millenial); //ReferenceError: x is not defined
```

- _Functional scope/Local scope_:- Functional scope is a concept in JavaScript that refers to the way scope works within functions. It means that variables declared inside a function are only accessible within that function and any nested functions, but not outside of it.
  In other words, functional scope creates a private space for variables and functions within a function, which helps to avoid naming collisions and unexpected changes to variables.
  Functions are also block scoped(only in strict mode)

```js
function myFunction() {
  var x = 10;
  console.log(x); // 10

  function nestedFunction() {
    var y = 5;
    console.log(x + y); // 15
  }

  nestedFunction();
  console.log(y); // ReferenceError: y is not defined
}
```

It's important to understand scope in JavaScript because it affects how variables and functions are accessed and manipulated. When variables have global scope, they can be accessed and modified from anywhere in the program, which can lead to unexpected behavior and bugs. On the other hand, when variables have local scope, they are protected from unwanted changes and can be reused with different values in different parts of the program.

## this Keyword

The this keyword refers to the context where a piece of code, such as a function's body, is supposed to run. Most typically, it is used in object methods, where this refers to the object that the method is attached to, thus allowing the same method to be reused on different objects.

The value of this in JavaScript depends on how a function is invoked (runtime binding), not how it is defined. When a regular function is invoked as a method of an object (obj.method()), this points to that object. When invoked as a standalone function (not attached to an object: func()), this typically refers to the global object (in non-strict mode) or undefined (in strict mode). The Function.prototype.bind() method can create a function whose this binding doesn't change, and methods Function.prototype.apply() and Function.prototype.call() can also set the this value for a particular call.

Arrow functions differ in their handling of this: they inherit this from the parent scope at the time they are defined. This behavior makes arrow functions particularly useful for callbacks and preserving context. However, arrow functions do not have their own this binding. Therefore, their this value cannot be set by bind(), apply() or call() methods, nor does it point to the current object in object methods.

In non–strict mode, this is always a reference to an object. In strict mode, it can be any value.

The value of this depends on in which context it appears: function, class, or global.

**Function context** - Inside a function, the value of this depends on how the function is called. Think about this as a hidden parameter of a function — just like the parameters declared in the function definition, this is a binding that the language creates for you when the function body is evaluated.

_Regular function_ (not an arrow function, bound function, etc.), the value of this is the window object or undefined in strict mode.

```js
function getThis() {
  return this;
}
console.log(obj1.getThis()); // window object

function getThisStrict() {
  "use strict"; // Enter strict mode
  return this;
}
console.log(getThisStrict()); // undefined
```

_Callbacks_ - When a function is passed as a callback, the value of this depends on how the callback is called, which is determined by the implementor of the API. Callbacks are typically called with a this value of undefined (calling it directly without attaching it to any object), which means if the function is non–strict, the value of this is the global object (globalThis). This is the case for iterative array methods, the Promise() constructor, etc.

```js
const person(){
  talk(){
    setTimeout(function(){
      console.log(this)
    },1000)
  }
}
person.talk()// window object

const person(){
  talk(){
    var self = this
    setTimeout(function(){
      console.log(self)
    },1000)
  }
}
person.talk()// person object
```

_Event listener_ - this is bound to DOM element that the handler is attached to.

_Arrow functions_ - In arrow functions, this retains the value of the enclosing lexical context's this. In other words, when evaluating an arrow function's body, the language does not create a new this binding.
Arrow functions create a closure over the this value of its surrounding scope, which means arrow functions behave as if they are "auto-bound" — no matter how it's invoked, this is bound to what it was when the function was created. The same applies to arrow functions created inside other functions: their this remains that of the enclosing lexical context.
Furthermore, when invoking arrow functions using call(), bind(), or apply(), the thisArg parameter is ignored. You can still pass other arguments using these methods, though.Inherits this from the surrounding scope

```js
const person(){
  talk(){
    setTimeout(() => {
      console.log(this)
    },1000)
  }
}
person.talk()//person object
```

_Constructors_ - When a function is used as a constructor (with the new keyword), its this is bound to the new object being constructed, no matter which object the constructor function is accessed on. The value of this becomes the value of the new expression unless the constructor returns another non–primitive value.

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const john = new Person("John", 30);
console.log(john.name); // logs "John"
```

_super_ - When a function is invoked in the super.method() form, the this inside the method function is the same value as the this value around the super.method() call, and is generally not equal to the object that super refers to. This is because super.method is not an object member access like the ones above — it's a special syntax with different binding rules.

_Method_ - this is bound to the Object calling the method.

```js
function getThis() {
  return this;
}
const obj1 = { name: "obj1" };
obj1.getThis = getThis;

console.log(obj1.getThis()); // { name: 'obj1', getThis: [Function: getThis] }
```

If the value that the method is accessed on is a primitive, this will be a primitive value as well — but only if the function is in strict mode.

```js
function getThisStrict() {
  "use strict"; // Enter strict mode
  return this;
}
Number.prototype.getThisStrict = getThisStrict;
console.log(typeof (1).getThisStrict()); // "number"
```

**Class context** - A class can be split into two contexts: static and instance. Constructors, methods, and instance field initializers (public or private) belong to the instance context. Static methods, static field initializers, and static initialization blocks belong to the static context. The this value is different in each context.
Class constructors are always called with new, so their behavior is the same as function constructors: the this value is the new instance being created. Class methods behave like methods in object literals — the this value is the object that the method was accessed on. If the method is not transferred to another object, this is generally an instance of the class.

Static methods are not properties of this. They are properties of the class itself. Therefore, they are generally accessed on the class, and this is the value of the class (or a subclass). Static initialization blocks are also evaluated with this set to the current class.
Field initializers are also evaluated in the context of the class. Instance fields are evaluated with this set to the instance being constructed. Static fields are evaluated with this set to the current class. This is why arrow functions in field initializers are bound to the instance for instance fields and to the class for static fields.

**Global context** - In the global execution context (outside of any functions or classes; may be inside blocks or arrow functions defined in the global scope), the this value depends on what execution context the script runs in. Like callbacks, the this value is determined by the runtime environment (the caller).
At the top level of a script, this refers to globalThis whether in strict mode or not. This is generally the same as the global object — for example, if the source is put inside an HTML <script> element and executed as a script, this === window.

```js
console.log(this); // logs the global object (window in browsers, global in Node.js)
```

**Object context** - Referring to an object's properties or methods:

```js
const person = {
  name: "John",
  age: 30,
  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

person.sayHello(); // logs "Hello, my name is John"
```

## Prompt
