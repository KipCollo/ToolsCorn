# String

In JavaScript, a string is a sequence of characters used to represent text. Strings can be enclosed in single or double quotes, and can be created using string literals or the String constructor. They are often used to store and manipulate text in JavaScript programs.


**Create String in JavaScript** - There are several ways to create a string in JavaScript:

1. *Using a string literal*: You can create a string by enclosing characters in single or double quotes. For example:

```js
var str = "Hello World!";
```

2. *Using the String constructor*: You can create a string using the String constructor and passing in the string as an argument. For example:

```js
var str = new String("Hello World!");
```

3. *Using template literals*: You can create a string using template literals. For example:

```js
var name = "John";
var str = `Hello ${name}!`;
```

4. *Using String.fromCharCode() method*: You can create a string from the specified sequence of Unicode values using String.fromCharCode() method . For example:

```js
var str = String.fromCharCode(72, 101, 108, 108, 111); // "Hello"
```

5. *Using String.fromCodePoint() method*: You can create a string from the specified sequence of code points using String.fromCodePoint() method. For example:

```js
var str = String.fromCodePoint(72, 101, 108, 108, 111); // "Hello"
```

Note: In javascript string are immutable, so once string is created it can't be changed, but it can be replaced.


`String Literal vs String Object` - In JavaScript, there are two ways to create strings: using a string literal or using the String constructor.String literals are more efficient in terms of memory usage and performance. They are also easier to read and write.String objects are less efficient in terms of memory usage and performance. They also have additional methods and properties that are not available on string literals.
In general, it is recommended to use string literals instead of string objects, because they are more efficient and easier to use. However, in some cases, using the String constructor and its methods may be useful, for example, when working with methods such as valueOf() and toString().

Also, one important thing to note that in javascript, string literals and string objects are interchangeable and can be used interchangeably in most cases.


## String property

**String length property** - In JavaScript, you can use the length property to determine the number of characters in a string. The length property returns the number of characters in the string, including spaces and special characters.

```js
var str = "Hello World!";
console.log(str.length); // Output: 12
```

It's also worth noting that the length property is a property and not a function, so you don't need to use parentheses when calling it.
It's important to note that the length property counts each individual character in the string, including spaces, so the output will be the number of characters, not words or sentences.


## String functions

**slice()** - In JavaScript, the slice() function is used to extract a section of a string and return it as a new string. The slice() function takes two arguments: the starting index and the ending index (not including the ending index).

```js
var str = "Hello World!";
var sliced = str.slice(0, 5);
console.log(sliced); // Output: "Hello"
```

Here, the slice() function is used to extract the characters from the 0th index to the 5th index of the string, which results in the substring "Hello".

You can also use negative values as indexes, it will be counted from the end of the string:

```js
var str = "Hello World!";
var sliced = str.slice(-5);
console.log(sliced); // Output: "World!"
```

Here, the slice() function is used to extract the characters from the -5th index to the end of the string, which results in the substring "World!".

It's also worth noting that the slice() method does not change the original string, it returns a new string.


**substring()** - In JavaScript, the substring() function is similar to the slice() function in that it is used to extract a section of a string and return it as a new string. The substring() function also takes two arguments: the starting index and the ending index (not including the ending index).

```js
var str = "Hello World!";
var substring = str.substring(0, 5);
console.log(substring); // Output: "Hello"
```

Here, the substring() function is used to extract the characters from the 0th index to the 5th index of the string, which results in the substring "Hello".

Also, similar to slice function, if the starting index is greater than the ending index, the function will swap them:

```js
var str = "Hello World!";
var substring = str.substring(5, 0);
console.log(substring); // Output: "Hello"
```

It's also worth noting that the substring() method does not change the original string, it returns a new string.

The main difference between substring() and slice() is that substring() does not accept negative indexes.


**substr()** - In JavaScript, the substr() function is also used to extract a section of a string and return it as a new string. The substr() function takes two arguments: the starting index and the number of characters to extract.

```js
var str = "Hello World!";
var substr = str.substr(0, 5);
console.log(substr); // Output: "Hello"
```

Here, the substr() function is used to extract the first 5 characters of the string, which results in the substring "Hello".

You can also use negative values as starting index, it will be counted from the end of the string:

```js
var str = "Hello World!";
var substr = str.substr(-5);
console.log(substr); // Output: "World!"
```

Here, the substr() function is used to extract the last 5 characters of the string, which results in the substring "World!".
It's also worth noting that the substr() method does not change the original string, it returns a new string.

In summary, the main difference between substr(), slice() and substring() is that substr() takes the starting index and the number of characters to extract, while slice() and substring() take the starting and ending indexes.


**replace()** - In JavaScript, the replace() function is used to replace a specified value in a string with a new value. The replace() function takes two arguments: the value to be replaced and the new value.

```js
var str = "Hello World!";
var replaced = str.replace("World", "Universe");
console.log(replaced); // Output: "Hello Universe!"
```

Here, the replace() function is used to replace the substring "World" with the substring "Universe" in the string "Hello World!", which results in the new string "Hello Universe!".

You can also use regular expression as first argument:

```js
var str = "Hello World!";
var replaced = str.replace(/W/g, "w");
console.log(replaced); // Output: "hello world!"
```

Here, the replace() function is used to replace all the capital 'W' in the string "Hello World!" with small 'w'.

It's also worth noting that the replace() method does not change the original string, it returns a new string.
In summary, the replace() function is a useful way to replace specified values in a string with new values in JavaScript.


**repeat()** - In JavaScript, the repeat() function is used to repeat a string a specified number of times. The repeat() function takes one argument: the number of times to repeat the string.

```js
var str = "Hello";
var repeated = str.repeat(3);
console.log(repeated); // Output: "HelloHelloHello"
```

Here, the repeat() function is used to repeat the string "Hello" three times, which results in the new string "HelloHelloHello".

You can also use fractional or negative numbers, but it will be rounded to the nearest integer:

```js
var str = "Hello";
var repeated = str.repeat(1.5);
console.log(repeated); // Output: "HelloHello"
```

Here, the repeat() function is used to repeat the string "Hello" 1.5 times, which will round to the nearest integer and results in the new string "HelloHello".

It's also worth noting that the repeat() method does not change the original string, it returns a new string.
In summary, the repeat() function is a useful way to repeat a string multiple times in JavaScript.


**toUpperCase()** - In JavaScript, the toUpperCase() function is used to convert all the characters in a string to uppercase. The toUpperCase() function does not take any arguments.

```js
var str = "Hello World!";
var upperCase = str.toUpperCase();
console.log(upperCase); // Output: "HELLO WORLD!"
```

Here, the toUpperCase() function is used to convert all the characters in the string "Hello World!" to uppercase, which results in the new string "HELLO WORLD!".

It's also worth noting that the toUpperCase() method does not change the original string, it returns a new string.
In summary, the toUpperCase() function is a useful way to convert all the characters in a string to uppercase in JavaScript.


**toLowerCase()** - In JavaScript, the toLowerCase() function is used to convert all the characters in a string to lowercase. The toLowerCase() function does not take any arguments.

```js
var str = "Hello World!";
var lowerCase = str.toLowerCase();
console.log(lowerCase); // Output: "hello world!"
```

Here, the toLowerCase() function is used to convert all the characters in the string "Hello World!" to lowercase, which results in the new string "hello world!".

It's also worth noting that the toLowerCase() method does not change the original string, it returns a new string.
In summary, the toLowerCase() function is a useful way to convert all the characters in a string to lowercase in JavaScript.


**concat()** - In JavaScript, the concat() function is used to join two or more strings together. The concat() function takes one or more strings as arguments, and returns a new string that is the concatenation of the original string and the given strings.

```js
var str1 = "Hello";
var str2 = " World";
var concatenated = str1.concat(str2);
console.log(concatenated); // Output: "Hello World"
```

Here, the concat() function is used to join the strings "Hello" and " World", which results in the new string "Hello World".

You can also concatenate more than two strings using concat method:

```js
var str1 = "Hello";
var str2 = " World";
var str3 = "!";
var concatenated = str1.concat(str2, str3);
console.log(concatenated); // Output: "Hello World!"
```

It's also worth noting that the concat() method does not change the original string, it returns a new string.

You can also use "+" operator for concatenation:

```js
var str1 = "Hello";
var str2 = " World";
var concatenated = str1 + str2;
console.log(concatenated); // Output: "Hello World"
```

In summary, the concat() function is a useful way to join two or more strings together in JavaScript.


**trim()** - In JavaScript, the trim() function is used to remove whitespace from the beginning and end of a string. The trim() function does not take any arguments and returns a new string with the whitespace removed.

```js
var str = "   Hello World!   ";
var trimmed = str.trim();
console.log(trimmed); // Output: "Hello World!"
```

Here, the trim() function is used to remove the whitespace before and after the string " Hello World! ", which results in the new string "Hello World!".

It's also worth noting that the trim() method does not change the original string, it returns a new string.
In summary, the trim() function is a useful way to remove whitespace from the beginning and end of a string in JavaScript.
It's worth mentioning that trim method only removes the whitespace from the start and end of the string, if you want to remove whitespace between words you need to use other methods like replace() or regular expressions.


**padStart()** - In JavaScript, the padStart() function is used to add padding to the beginning of a string. The padStart() function takes two arguments:

1. The first argument is the length of the final string after padding
2. The second argument is the character(s) to use for padding

If the original string's length is less than the first argument, it will add the padding characters to the start of the string until the final string reaches the desired length. If the original string's length is greater than or equal to the first argument, it will return the original string.

```js
var str = "Hello";
var padded = str.padStart(10, "*");
console.log(padded); // Output: "****Hello"
```


**padEnd()** - In JavaScript, the padEnd() function is used to add padding to the end of a string. The padEnd() function takes two arguments:

1. The first argument is the length of the final string after padding
2. The second argument is the character(s) to use for padding

If the original string's length is less than the first argument, it will add the padding characters to the end of the string until the final string reaches the desired length. If the original string's length is greater than or equal to the first argument, it will return the original string.

```js
var str = "Hello";
var padded = str.padEnd(10, "*");
console.log(padded); // Output: "Hello****"
```

Here, the padEnd() function is used to add padding to the end of the string "Hello" with the character "" until the final string has a length of 10, which results in the new string "Hello\*\*\*".

```js
var str = "Hello";
var padded = str.padEnd(2, "*");
console.log(padded); // Output: "Hello"
```

Here, the padEnd() function is used to add padding to the end of the string "Hello" with the character "\*" until the final string has a length of 2, but since the original string is already of length 5, it returns the original string.

It's also worth noting that the padEnd() method does not change the original string, it returns a new string.
In summary, the padEnd() function is a useful way to add padding to the end of a string in JavaScript, to a desired length.


**charAt()** - In JavaScript, the charAt() function is used to retrieve the character at a specified index in a string.
The charAt() function takes a single argument, which is the index of the character you want to retrieve. The index is zero-based, meaning that the first character in the string has an index of 0, the second character has an index of 1, and so on.

```js
var str = "Hello";
var firstChar = str.charAt(0);
console.log(firstChar); // Output: "H"
```

Here, the charAt() function is used to retrieve the first character (index 0) of the string "Hello", which is "H".

```js
var str = "Hello";
var thirdChar = str.charAt(2);
console.log(thirdChar); // Output: "l"
```

Here, the charAt() function is used to retrieve the third character (index 2) of the string "Hello", which is "l".

If the index passed to the charAt() function is greater than or equal to the length of the string, it returns an empty string.

```js
var str = "Hello";
var sixthChar = str.charAt(5);
console.log(sixthChar); // Output: ""
```

It's worth noting that the charAt() method is not chainable, it returns a new string and does not change the original string
In summary, the charAt() function is a useful way to retrieve the character at a specific index in a string in JavaScript.


**split()** - In JavaScript, the split() function is used to split a string into an array of substrings.
The split() function takes two arguments:

- The first argument is the separator, which is the character or characters that are used to separate the substrings.
- The second argument is the limit, which is an optional parameter that specifies the maximum number of elements to be returned in the array.

```js
var str = "Hello, World";
var substrings = str.split(",");
console.log(substrings); // Output: ["Hello", " World"]
```

Here, the split() function is used to split the string "Hello, World" using the separator ",", which separates the string into an array of two substrings: "Hello" and " World".

```js
var str = "Hello World";
var substrings = str.split(" ");
console.log(substrings); // Output: ["Hello", "World"]
```

Here, the split() function is used to split the string "Hello World" using the separator " ", which separates the string into an array of two substrings: "Hello" and "World".

You can also use split() with a limit:

```js
var str = "Hello World";
var substrings = str.split(" ", 2);
console.log(substrings); // Output: ["Hello", "World"]
```

Here, the split() function is used to split the string "Hello World" using the separator " ", and the limit is 2, which means the function will return an array of maximum 2 elements.

It's worth noting that the split() method does not change the original string, it returns a new array.
In summary, the split() function is a useful way to split a string into an array of substrings in JavaScript using a separator. Additionally, you can use the limit parameter to limit the number of elements in the array.


**indexOf()** - In JavaScript, the indexOf() function is used to find the index of the first occurrence of a specified value in a string.
The indexOf() function takes one or two arguments:

- The first argument is the value you want to find in the string.
- The second argument is an optional parameter that specifies the starting index position in the string where the search should begin.

```js
var str = "Hello World";
var index = str.indexOf("World");
console.log(index); // Output: 6
```

Here, the indexOf() function is used to find the index of the first occurrence of the value "World" in the string "Hello World". It returns 6, which is the starting index of the substring "World" in the string.

```js
var str = "Hello World";
var index = str.indexOf("world");
console.log(index); // Output: -1
```

Here, the indexOf() function is used to find the index of the first occurrence of the value "world" in the string "Hello World". It returns -1, which means the specified value does not exist in the string.

You can also use indexOf() with a starting position:

```js
var str = "Hello World";
var index = str.indexOf("o", 4);
console.log(index); // Output: 7
```

Here, the indexOf() function is used to find the index of the first occurrence of the value "o" in the string "Hello World", starting from index 4. It returns 7, which is the index of the second 'o' in the string.
It's worth noting that the indexOf() method is case sensitive, it will only return the index of the first occurrence of the specified value if the case is matched.
In summary, the indexOf() function is a useful way to find the index of the first occurrence of a specified value in a string in JavaScript. Additionally, you can use the second parameter to specify the starting position in the string where the search should begin.


**lastIndexOf()** - In JavaScript, the lastIndexOf() function is similar to the indexOf() function, but it searches for the last occurrence of a specified value in a string instead of the first occurrence.
The lastIndexOf() function also takes one or two arguments:

- The first argument is the value you want to find in the string.
- The second argument is an optional parameter that specifies the starting index position in the string where the search should begin (searching backwards).

```js
var str = "Hello World";
var index = str.lastIndexOf("l");
console.log(index); // Output: 9
```

Here, the lastIndexOf() function is used to find the index of the last occurrence of the value "l" in the string "Hello World". It returns 9, which is the index of the last "l" in the string.

```js
var str = "Hello World";
var index = str.lastIndexOf("z");
console.log(index); // Output: -1
```

Here, the lastIndexOf() function is used to find the index of the last occurrence of the value "z" in the string "Hello World". It returns -1, which means the specified value does not exist in the string.

You can also use lastIndexOf() with a starting position:

```js
var str = "Hello World";
var index = str.lastIndexOf("l", 5);
console.log(index); // Output: 2
```

Here, the lastIndexOf() function is used to find the index of the last occurrence of the value "l" in the string "Hello World", starting from index 5 (searching backwards). It returns 2, which is the index of the first 'l' in the string.

It's worth noting that the lastIndexOf() method is case sensitive, it will only return the index of the last occurrence of the specified value if the case is matched.
In summary, the lastIndexOf() function is a useful way to find the index of the last occurrence of a specified value in a string in JavaScript. Additionally, you can use the second parameter to specify the starting position in the string where the search should begin (searching backwards).


**startsWith()** - In JavaScript, the startsWith() function is a method of the String object that determines whether a string begins with a specified value.
The startsWith() function takes two arguments:

- The first argument is the value you want to find at the beginning of the string.
- The second argument is an optional parameter that specifies the starting index position in the string where the search should begin.

```js
var str = "Hello World";
var result = str.startsWith("Hello");
console.log(result); // Output: true
```

Here, the startsWith() function is used to check if the string "Hello World" starts with the value "Hello". It returns true, indicating that the string does indeed start with "Hello".

```js
var str = "Hello World";
var result = str.startsWith("world", 6);
console.log(result); // Output: false
```

Here, the startsWith() function is used to check if the string "Hello World" starts with the value "world" starting from index 6. It returns false, indicating that the string does not start with "world" starting from index 6.

You can also use startsWith() with a RegExp:

```js
var str = "Hello World";
var result = str.startsWith(/H/i);
console.log(result); // Output: true
```

Here, the startsWith() function is used to check if the string "Hello World" starts with the letter 'H' (case-insensitive). It returns true, indicating that the string starts with 'H'(case-insensitive)

It's worth noting that the startsWith() method is case sensitive, it will only return true if the case of the specified value matches the case of the characters at the start of the string.
In summary, the startsWith() function is a useful way to check whether a string starts with a specified value in JavaScript. Additionally, you can use the second parameter to specify the starting position in the string where the search should begin.


**endsWith** - In JavaScript, the endsWith() function is a method of the String object that determines whether a string ends with a specified value.
The endsWith() function takes two arguments:
- The first argument is the value you want to find at the end of the string.
- The second argument is an optional parameter that specifies the ending index position in the string where the search should end.

```js
var str = "Hello World";
var result = str.endsWith("World");
console.log(result); // Output: true
```

Here, the endsWith() function is used to check if the string "Hello World" ends with the value "World". It returns true, indicating that the string does indeed end with "World".:

```js
var str = "Hello World";
var result = str.endsWith("Hello", 5);
console.log(result); // Output: false
```

Here, the endsWith() function is used to check if the string "Hello World" ends with the value "Hello" ending at index 5. It returns false, indicating that the string does not end with "Hello" ending at index 5.

You can also use endsWith() with a RegExp:

```js
var str = "Hello World";
var result = str.endsWith(/d$/i);
console.log(result); // Output: true
```

Here, the endsWith() function is used to check if the string "Hello World" ends with the letter 'd' (case-insensitive). It returns true, indicating that the string ends with 'd'(case-insensitive)

It's worth noting that the endsWith() method is case sensitive, it will only return true if the case of the specified value matches the case of the characters at the end of the string.
In summary, the endsWith() function is a useful way to check whether a string ends with a specified value in JavaScript. Additionally, you can use the second parameter to specify the ending position in the string where the search should end.


**search()** - In JavaScript, the search() function is a method of the String object that searches a string for a specified value, and returns the position of the match.
The search() function takes one argument:
- The argument is the value you want to find in the string.

```js
var str = "Hello World";
var result = str.search("World");
console.log(result); // Output: 6
```

Here, the search() function is used to find the position of the value "World" in the string "Hello World". It returns 6, indicating that the value "World" is found at the 6th position in the string.

```js
var str = "Hello World";
var result = str.search(/l/i);
console.log(result); // Output: 2
```

Here, the search() function is used to find the position of the letter 'l' (case-insensitive) in the string "Hello World". It returns 2, indicating that the first occurrence of 'l'(case-insensitive) is found at the 2nd position in the string.
In summary, the search() function is a useful way to find the position of a specified value in a string in JavaScript. Additionally, you can also use RegExp as argument to find the position of a regular expression in a string. It returns -1 if the value is not found in the string.


**match()** - In JavaScript, the match() function is a method of the String object that searches for a match between a regular expression and a string, and returns the matches as an array.
The match() function takes one argument:
- The argument is the regular expression that you want to use to search the string.

```js
var str = "Hello World";
var result = str.match(/l/gi);
console.log(result); // Output: ["l", "l"]
```

Here, the match() function is used to find all occurrences of the letter 'l' (case-insensitive) in the string "Hello World" using regular expression /l/gi. It returns an array with two elements, ["l", "l"], indicating that the letter 'l' is found twice in the string.

```js
var str = "Hello World";
var result = str.match(/world/i);
console.log(result); // Output: ["World"]
```

Here, the match() function is used to find the first occurrence of the word "world" (case-insensitive) in the string "Hello World" using regular expression /world/i. It returns an array with one element, ["World"], indicating that the word "world" is found once in the string.
In summary, the match() function is a useful way to find all matches of a regular expression in a string in JavaScript. It returns null if no match is found.
You can also use test() function to check whether a string matches a regular expression.


**includes()** - In JavaScript, the includes() function is a method of the String object that checks whether a string contains a specified substring.
The includes() function takes one argument:
- The argument is the substring that you want to check for in the string.

```js
var str = "Hello World";
var result = str.includes("World");
console.log(result); // Output: true
```

Here, the includes() function is used to check if the string "Hello World" contains the substring "World". It returns true as the substring is present in the string.

```js
var str = "Hello World";
var result = str.includes("world", 6);
console.log(result); // Output: true
```

Here, the includes() function is used to check if the string "Hello World" contains the substring "world" after the 6th position. It returns true as the substring is present in the string.

In summary, the includes() function is a simple and efficient way to check whether a substring is present in a string in JavaScript. It returns true if the substring is found and false if it is not.
You can also use indexOf() function to check whether a string contains a substring, but it returns the index of the first occurrence of the substring, it returns -1 if substring is not present in the string.


**valueOf()** - In JavaScript, the valueOf() function is a method of the String object that returns the primitive value of a string.

```js
var str = "Hello World";
var result = str.valueOf();
console.log(result); // Output: "Hello World"
```

Here, the valueOf() function is used to get the primitive value of the string "Hello World" and returns the string "Hello World".

In summary, the valueOf() function is a method of the String object that returns the primitive value of the string. It is similar to using the string variable directly and it does not change the original string. It returns the primitive string. This function is mostly used when we want to get the primitive value of an object.
This function is not very commonly used in practice, as most of the time, the string variable can be used directly to get its value.


## Template literal

Template literals are string literals allowing embedded expressions. They are enclosed by backticks (`) and can contain placeholders indicated by ${expression}.It allows us to use the JavaScript variables with the string without using the ‘+’ operator. Template literal defined using (“) quotes.
Template literals are a type of string literal that allows values to be interpolated, and optionally the interpolation and construction behaviour to be controlled using a "tag" function.

In ES6 and later, string literals can be delimited with backticks:-

```js
let s = `hello world`;
```

The final value of a string literal in backticks is computed by evaluating any included expressions, converting the values of those expressions to strings and combining those computed strings with the literal characters within the backticks:

```js
let name = "Bill";
let greeting = `Hello ${ name }.`;// greeting == "Hello Bill."
```

Everything between the ${ and the matching } is interpreted as a JavaScript expression. Everything outside the curly braces is normal string literal text. The expression inside the braces is evaluated and then converted to a string and inserted into the template, replacing the dollar sign, the curly braces, and everything in between them.
A template literal may include any number of expressions. It can use any of the escape characters that normal strings can, and it can span any number of lines, with no special escaping required. The following template literal includes four JavaScript expressions, a Unicode escape sequence, and at least four newlines (the expression values may include newlines as well):

```js
let errorMessage = `\
\u2718 Test failure at ${filename}:${linenumber}:
${exception.message}
Stack trace:
${exception.stack}
`;
```

The backslash at the end of the first line here escapes the initial newline so that the resulting string begins with the Unicode ✘ character (\u2718) rather than a newline.

A typical use of Javascript is to either generate HTML,modify existing HTML or remove HTML from a live document in the browser.
It is an interactive layer on top of the content,the HTML and its presentation,the CSS.We can use Javascript to manipulate the CSS and HTML to get browser to do what we want.

The basic is to use js to inject new HTML content into the document.The entire document is an object in the browser.
When a browser renders a document, it creates a document object model of that document.We can then access that document object using javascript.

```js
class Backpack {
  constructor(
    name,
    volume,
    color,
    pocketNum,
    strapLengthL,
    strapLengthR,
    lidOpen,
    dateAcquired
  ) {
    this.name = name;
    this.volume = volume;
    this.color = color;
    this.pocketNum = pocketNum;
    this.strapLength = {
      left: strapLengthL,
      right: strapLengthR,
    };
    this.lidOpen = lidOpen;
    this.dateAcquired = dateAcquired;
  }
  toggleLid(lidStatus) {
    this.lidOpen = lidStatus;
  }
  newStrapLength(lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  }
  backpackAge() {
    let now = new Date();
    let acquired = new Date(this.dateAcquired);
    let elapsed = now - acquired; // elapsed time in milliseconds
    let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24));
    return daysSinceAcquired;
  }
}

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);


const content = `
    <main>
      <article>
        <h1>${everydayPack.name}</h1>
        <ul>
          <li>Volume: ${everydayPack.volume}</li>
          <li>Color: ${everydayPack.color}</li>
          <li>Age: ${everydayPack.backpackAge()}</li>
          <li>Number of pockets: ${everydayPack.pocketNum}</li>
          <li>Left strap length: ${everydayPack.strapLength.left}</li>
          <li>Right strap length: ${everydayPack.strapLength.right}</li>
          <li>Lid status: ${everydayPack.lidOpen}</li>
        </ul>
      </article>
    </main>
`

document.body.innerHTML= content;

```

`Traditional String`:- Using plain old Javascript string.

```js
const content = "<h1>" + everydayPack.name + "</h1>"
document.body.innerHTML= content;
```

