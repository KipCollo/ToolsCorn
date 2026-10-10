# Controls

Statement in a programming means any line of code that instructs the compiler to perform a specific task

## Conditionals

Conditional statements are basically checks to see if a certain condition is either true or false.
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
  case 3: //day === 3
    console.log("Wednesday");
    break;
  default:
    console.log("Another day");
}
```

-----


## Loops

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

To get the index of element in arrays you use `.entries()`

```javascript
const numbers = [1, 2, 3];
for (let num of numbers.entries()) {
  console.log(num);
}
```

To get object key and name you use `Object.entries()`. This makes objects iterable.

```javascript
for (let num of Object.entries(obj_name)) {
  //body
}
```

NB - An off-by-one error occurs when a loop iterates one time too many or one time too few. This often happens due to incorrect loop boundaries, such as using `<` instead of `<=` in the loop condition.


## Control Flow Modifiers

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

