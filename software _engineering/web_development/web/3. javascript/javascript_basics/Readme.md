# Javascript Basics

## Javascript Variables

Most of the time, a JavaScript application needs to work with information. To store and represent this information in the JavaScript codebase, we use variables. A variable is a container for a value.

**Variable Declarations** - To use variables in JavaScript, we first need to create it i.e. declare a variable. To declare variables, we use one of the `var`, `let`, or `const` keywords.

- [var] keyword - The var statement declares a function-scoped or globally-scoped variable, optionally initializing it to a value.Can be redeclared and updated into the scope.
- [let] keyword - The let variables are mutable i.e. their values can be changed. It works similar to the var keyword with some key differences like scoping which makes it a better option when compared to var.
The `let` declaration declares a block-scoped local variable, optionally initializing it to a value.Can be updated but not redeclared within the same scope.
- [const] keyword - The const keyword is used to declare constant variables whose values can’t be changed. It is an immutable variable except when used with objects.
Constants are block-scoped, much like variables declared using the `let` keyword. The value of a constant can't be changed through reassignment (i.e. by using the assignment operator), and it can't be redeclared (i.e. through a variable declaration). However, if a constant is an object or array its properties or items can be updated or removed.

```js
//const
const PI=3.14;
const name = 'Collins';
console.log(name);  // Will print 'Collins' to the console.
// Trying to reassign a const variable
name = 'KipCollo';
console.log(name); // Will give TypeError.
// Trying to declare const variable first and then initialise in another line
const org_name;
org_name = "kipcollo";
console.log(org_name); // Throws an syntax error: missing initializer in const declaration


// let
let name = 'Collins';
console.log(name);  // Prints Collins
name = 'KipCollo';
console.log(name); // Prints KipCollo
// Trying to declare let variable first and then initialise in another line
let org_name;
org_name = "kipcollo";
console.log(org_name); // Prints kipcollo


var car="Volvo";
car ="BMW";//redeclare

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


-------------

## Data Types

Data type refers to the type of data that a JavaScript variable can hold. There are seven primitive data types in JavaScript (Number, BigInt, String, Boolean, Null, Undefined and Symbol). Objects are non-primitives.

The primary data types in JavaScript are:

1. Primitive types: undefined, null, boolean, number, string, bigint, and symbol
2. Non-primitive types: object (includes arrays, functions,Objects and more)


**Primitive Types**:- In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object and has no methods or properties. A significant difference between primitive data types and non-primitives is that primitive types can only contain one value, and that value must be of the same primitive type. In contrast, non-primitives can accommodate a variable number of values, and these values can be of different primitive types. This flexibility is evident in data structures like arrays and objects.

In the context of primitives, it's important to note that they do not possess methods or properties. However, JavaScript enables access to methods and properties associated with primitive types such as string, number, and boolean. this functionality is due to JavaScript's ability to implicitly convert primitives to objects with wrapper objects when necessary. When properties are accessed on primitives, JavaScript auto-boxes the value into a wrapper object and accesses the property on that object instead.

There are 7 primitive data types:

- `string`: are a series of letters and numbers enclosed in quotation marks. JavaScript uses the string literally; it doesn't process it. You'll use strings for text you want displayed or values you want passed along.
- `number`: are values that can be processed and calculated. You don't enclose them in quotation marks. The numbers can be either positive or negative.
- `bigint`
- `boolean`: (true/false) - lets you evaluate whether a condition meets or does not meet specified criteria.
- `undefined`: Indicates that a variable has been declared but has not yet been assigned a value.
- `Symbol`
- `null`: Represents the intentional absence of any object value i.e no value. It is an assignment value.Used when you want to clear the variable.

```js
let name="Collins";
let age=21;
let price = 12.67;
let isapproved=true;
let work;//undefined
let work = undefined//undefined
let color= null
```

Since Javascript is dynamic language,variable data types is determined during runtime.To check the type of data use the keyword **typeof**

e.g

```js
typeof name//string
```

**Symbol**: Symbol is a type of primitive data type intriduced in ES6. It is used to specify the hidden identifiers that can not be directly accessed by any other code.

```js
const gfg = {
    name: "GeeksforGeeks",
    desc: "A Computer Science portal for all geeks."
}

let short_name = Symbol("short_name")
gfg.short_name = "GFG";
console.log(`${gfg.name}, \n${gfg.desc}`);
console.log(`Company's Short Name using gfg.short_name: ${gfg.short_name} `)
console.log(`Company's Short Name using gfg[short_name]: ${gfg[short_name]} `)
```


**Numbers** - 
*Internationalization Numbers* - Internationalization (i18n) is an important aspect of software development, especially when it comes to working with numbers. In JavaScript, you can use the Internationalization API (Intl) to format numbers according to a user's locale (i.e., specific to their language and region). Here are some examples of using Intl for formatting numbers:

`Formatting a number according to a user's locale`:- You can use the Intl.NumberFormat constructor to create a formatter object that formats a number according to a user's locale.

```js
let number = 12345.6789;
let formatter = new Intl.NumberFormat('en-US');
let formattedNumber = formatter.format(number); // returns "12,345.679"
```

In this example, the formatter object is created with the 'en-US' locale (i.e., English language and US region), and the number is formatted with commas as thousands separators and a period as the decimal separator.

`Customizing number formatting options`:- You can customize the formatting options used by the formatter object to format a number in a specific way.

```js
let number = 12345.6789;
let formatter = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});
let formattedNumber = formatter.format(number); // returns "12.345,68 €"
```

In this example, the formatter object is created with the 'de-DE' locale (i.e., German language and Germany region), and the options are set to format the number as a currency value in Euros with two decimal places and a comma as the decimal separator.

`Formatting percentages`:- You can use the Intl.NumberFormat constructor to format a number as a percentage value.

```js
let number = 0.05;
let formatter = new Intl.NumberFormat('en-US', { style: 'percent' });
let formattedNumber = formatter.format(number); // returns "5%"
```

In this example, the formatter object is created with the 'en-US' locale, and the style option is set to 'percent', which formats the number as a percentage value.


--------------


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

*`==` (Loose Equality)*: Compares two values for equality after converting both values to a common type (type coercion). For example, `5 == '5'` returns `true` because the string `'5'` is converted to the number `5` before comparison.(value check).
*`===` (Strict Equality)*: Compares both the value and the type without performing any type conversion. For example, `5 === '5'` returns `false` because the types (number and string) are different.(value and type check.)

```js
let a = 5;
let b ="5";

if(a == b){
   console.log("Match")//Match
}

if(a === b){
   console.log("Match")
} else {
   console.log("No match")
} //No match
```

4. **Logical Operators** - Used for boolean logic.

| Operator | Description | Example         | Result  |        |   |         |        |
| -------- | ----------- | --------------- | ------- | ------ | - | ------- | ------ |
| `&&`     | AND         | `true && false` | `false` |        |   |         |        |
| `||`     | OR          | `true || false` | `true`  |        |   |         |        |
| `!`      | NOT         | `!true`         | `false` |        |   |         |        |

`Short-circuit evaluation` refers to the process where JavaScript evaluates logical expressions from left to right and stops as soon as the outcome is determined.
*Logical AND (`&&`)*: If the first operand is falsy, the entire expression returns that falsy value without evaluating the second operand.It's used when all conditions need to be true.
*Logical OR (`||`)*: If the first operand is truthy, the entire expression returns that truthy value without evaluating the second operand.It's used when at least one condition needs to be true.
These operators are also used for control flow and setting default values.

```javascript
let result = null || "Default";
console.log(result); // Outputs: "Default"
```

Here, `null` is falsy, so the `||` operator returns the second operand.


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
let access = (age >= 18) ? "Allowed" : "Denied";
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
typeof(12) //output is "number"
typeof("Hello");//output "string"
```


11. **Comma Operator** - Evaluates multiple expressions and returns the last.

```js
let x = (1 + 2, 3 + 4); 
console.log(x); // 7
```


11. **Optional Chaining & Nullish Coalescing**:-

*Optional Chaining (`?.`)*: allows you to safely access deeply nested object properties without having to check each level manually.

```javascript
let user = {};
console.log(user.profile?.name); // Outputs: undefined
```

Without optional chaining, accessing `user.profile.name` would throw an error if `profile` is undefined. Optional chaining prevents such errors by short-circuiting the evaluation if any part of the chain is `null` or `undefined`.

*Nullish Coalescing (`??`)*: Returns right operand if left is `null` or `undefined`.

```js
let value = null ?? "Default";
console.log(value); // "Default"
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


**Spread and Rest Operators** - The Spread Operator in JavaScript is denoted by three consecutive dots (…) and it allows an iterable (like an array or a string) to be expanded into individual elements. 

```js
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];

console.log(arr3); // Output: [1, 2, 3, 4, 5, 6]
```

Here, the spread operator is used to concatenate the arrays `arr1` and `arr2` into a new array `arr3`. The resulting output is `[1, 2, 3, 4, 5, 6]`. 
Similarly, we can also use the spread operator to add elements to an existing array or pass an array as arguments to a function.

*Assign values using spread operator* - To assign values in JavaScript using the spread operator, you can use the spread syntax (...) to create a new array, object or function that includes all the elements of an existing array, object or function, plus additional elements.

Here's an example of how to use spread operator to assign values in JavaScript:

1. Assigning values in array:
```javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6]; //assigning new values using spread operator
console.log(arr2); // Output: [1, 2, 3, 4, 5, 6]
```

2. Assigning values in object:
```javascript
const obj1 = {a: 1, b: 2};
const obj2 = {...obj1, c: 3, d: 4}; // assigning new values using spread operator
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

*Copy Array spread operator* - To copy an array in JavaScript using the spread operator, you can simply use the spread operator followed by the variable name of the array that you want to copy. Here's an example:

```javascript
const originalArray = [1, 2, 3, 4];
const copiedArray = [...originalArray];

console.log(originalArray); // Output: [1, 2, 3, 4]
console.log(copiedArray); // Output: [1, 2, 3, 4]
```

In this example, we first create an array called `originalArray` with four elements. We then use the spread operator (`...`) to create a new array called `copiedArray`, which has all the elements of the `originalArray`.

Note that when using the spread operator to copy an array, it creates a shallow copy, meaning that any nested objects or arrays within the original array will not be copied but rather referenced to the same memory location.

*Join 2 Arrays using spread operator* - To join two arrays in JavaScript using the spread operator, you can simply place the spread operator (...) in front of each array variable separated by a comma inside a new array literal ([]). Here's an example:

```js
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArray = [...arr1, ...arr2];

console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]
```

In the above example, we create two arrays `arr1` and `arr2`. We then use the spread operator to combine them into a new array `combinedArray`. Finally, we log the contents of the `combinedArray` using `console.log()`.

*Convert String to array using spread* - To convert a string to an array using the spread syntax in JavaScript, you can use the `split()` method along with the spread operator (`...`) to split the string into individual characters and then convert them into an array.
Here's an example code snippet that demonstrates how to convert a string to an array using spread:

```javascript
const str = "hello";
const arr = [...str];

console.log(arr); // Output: ["h", "e", "l", "l", "o"]
```

In the above example, the spread operator `...` is used to spread the string `str` into individual characters. These individual characters are then wrapped in an array using square brackets `[...]` to create the resulting array `arr`.
Note that this technique only works for converting a string to an array of characters. If you want to split a string into an array of substrings based on a delimiter, you should use the `split()` method without the spread operator.

*Passing arguments in function using spread* - In JavaScript, the spread operator (`...`) can be used to pass an array or iterable object as individual arguments to a function. 
Here's an example of how to use the spread operator to pass arguments to a function:

```js
function myFunction(x, y, z) {
  console.log(x, y, z);
}
const args = [1, 2, 3];

myFunction(...args); // Output: 1 2 3
```

In this example, the `myFunction` function takes three arguments (`x`, `y`, and `z`). We then define an array `args` containing `[1, 2, 3]`. Finally, we call `myFunction` using the spread operator (`...args`) to pass each element of the `args` array as individual arguments to the function. This results in the output `1 2 3` being printed to the console.


*Shallow copy* - A shallow copy in JavaScript creates a new object that points to the same memory location as the original object. This means that if you make a change to the original object, it will also affect the copied object. 
Here's an example of creating a shallow copy using the spread operator:

```js
const originalObj = { 
  name: "John", 
  age: 30, 
  hobbies: ["reading", "writing"] 
};

const shallowCopyObj = {...originalObj};

originalObj.hobbies.push("coding");

console.log(originalObj); // {name: "John", age: 30, hobbies: ["reading", "writing", "coding"]}
console.log(shallowCopyObj); // {name: "John", age: 30, hobbies: ["reading", "writing", "coding"]}
```

As you can see, changes made to the `hobbies` array in the original object also affect the `hobbies` array in the shallow copied object, since they share the same memory location.

*Deep copy* - In JavaScript, a deep copy is a copy of an object or array that creates a new instance but also copies all nested objects and arrays rather than referencing them. This means that changes made to the original object will not affect the copied object.
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
console.log(copiedArray);    // [1, 2, [3, 4]]
```

In this case, changing the first element of the nested array in `originalArray` does not affect the corresponding element in `copiedArray`.


--------

## Controls

### Conditionals

In JavaScript we have the following conditional statements:

- if statement - use this statement if you want to execute some code only if a specified condition is true
- if...else statement - use this statement if you want to execute some code if the condition is true and another code if the condition is false
- if...else if....else statement - use this statement if you want to select one of many blocks of code to be executed
- switch statement - use this statement if you want to select one of many blocks of code to be executed

**`If` Statement** - You should use the if statement if you want to execute some code only if a specified condition is true.
Syntax:-

```javascript
if (condition) {
  // code to execute if condition is true
}
```

```javascript
let age = 18;
if (age >= 18) {
  console.log("You are an adult.");
}
```


**`If...else` Statement** - If you want to execute some code if a condition is true and another code if the condition is not true, use the if....else statement.
Syntax:-

```javascript
if (condition) {
  // code if condition is true
} else {
  // code if condition is false
}
```

```javascript
let age = 16;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
```

**`If...else if...else` Statement** - You should use the if....else if...else statement if you want to select one of many sets of lines to execute.Allows you to test multiple conditions.Evaluates boolean expressions and is suitable for complex conditions.
Syntax:-

```javascript
if (condition1) {
  // code if condition1 is true
} else if (condition2) {
  // code if condition2 is true
} else {
  // code if none of the conditions are true
}
```

```javascript
let score = 85;
if (score >= 90) {
  console.log("Grade A");
} else if (score >= 80) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}
```

**The JavaScript `Switch` Statement** - You should use the switch statement if you want to select one of many blocks of code to be executed.Evaluates an expression against multiple possible values. It's cleaner when checking a variable against many constant values.
Syntax:-

```javascript
switch (expression) {
  case value1:
    // code block
    break;
  case value2:
    // code block
    break;
  default:
    // default code block
}
```

```javascript
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Another day");
}
```


### Loops

Loops in JavaScript are used to execute the same block of code a specified number of times or while a specified condition is true.
In JavaScript there are two different kind of loops:
- for - loops through a block of code a specified number of times
- while - loops through a block of code while a specified condition is true

**The `for` Loop** - The for loop is used when you know in advance how many times the script should run.Best when the number of iterations is known.
Syntax:-

```javascript
for (initialization; condition; increment) {
  // code block to be executed
}
```

```javascript
for (let i = 0; i < 5; i++) {
  console.log("Iteration:", i);
}
```

**The `while` loop** - The while loop is used when you want the loop to execute and continue executing while the specified condition is true.Best when the number of iterations is not known in advance.
Syntax:-

```javascript
while (condition) {
  // code block to be executed
}
```

```javascript
let i = 0;
while (i < 5) {
  console.log("Iteration:", i);
  i++;
}
```

Note: The <= could be any comparing statement.

**The `do...while` Loop** - The do...while loop is a variant of the while loop. This loop will always execute a block of code ONCE, and then it will repeat the loop as long as the specified condition is true. This loop will always be executed at least once, even if the condition is false, because the code is executed before the condition is tested.
Syntax:-

```javascript
do {
  // code block to be executed
} while (condition);
```

```javascript
let i = 0;
do {
  console.log("Iteration:", i);
  i++;
} while (i < 5);
```

**`for...in` Loop** - The `for...in` loop iterates over the enumerable properties of an object(keys) of an object.Using `for...in` with arrays can lead to unexpected behavior because it iterates over all enumerable properties, including those inherited through the prototype chain. This can result in iterating over properties that are not actual elements of the array. It's recommended to use `for`, `for...of`, or array methods like `forEach` for arrays.
Syntax:-

```javascript
for (let key in object) {
  // code block to be executed
}
```

```javascript
const person = { name: "Alice", age: 25 };
for (let key in person) {
  console.log(key + ": " + person[key]);
}
```

**`for...of` Loop** - The `for...of` loop iterates over iterable objects like arrays, strings, etc accessing their values directly.
Syntax:-

```javascript
for (let value of iterable) {
  // code block to be executed
}
```

```javascript
const numbers = [1, 2, 3];
for (let num of numbers) {
  console.log(num);
}
```


NB - An off-by-one error occurs when a loop iterates one time too many or one time too few. This often happens due to incorrect loop boundaries, such as using `<` instead of `<=` in the loop condition.


### Control Flow Modifiers

There are two special statements that can be used inside loops: break and continue.

**`break` Statement** - The `break` statement terminates the current loop or `switch` statement.The break command will break the loop and continue executing the code that follows after the loop (if any).

```javascript
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
```

**`continue` Statement** - The `continue` statement skips the current iteration of a loop and continues with the next iteration.The continue command will break the current loop and continue with the next value.

```javascript
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue;
  }
  console.log(i);
}
```


## Scope

In JavaScript, scope refers to the visibility or accessibility of variables, functions, and objects within different parts of a program. It determines where in the program a particular variable or function can be accessed and manipulated.

There are two types of scopes in JavaScript:
- `Global scope`:- Variables declared outside of any function or block have global scope, which means they can be accessed from anywhere in the program, including within functions or blocks.

```js
var x = 10;
function myFunction() {
console.log(x); // 10
};
```

- `Local scope`:- Variables declared inside a function or block have local scope, which means they can only be accessed within that function or block.

When a variable is referenced in JavaScript, the interpreter searches for that variable first in the local scope of the current function, and then in the next outer scope, continuing until it reaches the global scope. If the variable is not found in any of the scopes, a reference error is thrown.

```js
function myFunction() {
var x = 10;
console.log(x); // 10
}

myFunction();
console.log(x); // ReferenceError: x is not defined
```

- `Functional scope`:- Functional scope is a concept in JavaScript that refers to the way scope works within functions. It means that variables declared inside a function are only accessible within that function and any nested functions, but not outside of it.
In other words, functional scope creates a private space for variables and functions within a function, which helps to avoid naming collisions and unexpected changes to variables.

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
