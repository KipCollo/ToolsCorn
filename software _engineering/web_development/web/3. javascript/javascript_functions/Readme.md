# Functions

In JavaScript, a function is a block of code that can be executed by calling it by its name. Functions are a fundamental building block in JavaScript and are used to encapsulate and reuse code.
Functions exist so we can reuse code. They are blocks of code that execute whenever they are invoked. Each function is typically written to perform a particular task,like an addition function used to find the sum of two or more numbers. When numbers need to be added anywhere within your code, the addition function can be invoked as many times as necessary.

A function is defined using the function keyword, followed by the function name, a set of parentheses, and a block of code within curly braces. Here's an example of a simple function that takes no arguments and returns no value:
To execute the code within a function, you can call the function by its name, followed by a set of parentheses.

```js
function greet() {
  console.log("Hello, world!");
}

greet();  //output: "Hello, world!"
```


## Defining and Calling Functions

**Defining** - In JavaScript, there are two ways to define a function: function declarations and function expressions. Both methods allow you to create reusable code, but there are some key differences between them.

`Function Declarations`:- are defined using the `function` keyword, followed by the function name, a list of parameters, and the function body. are hoisted,which means that the JavaScript interpreter moves them to the top of their scope before any code is executed. This means that you can call a function before it is defined in your code. The name of the function is required.
`Function Expressions`:- are defined by assigning a function to a variable using the assignment operator (=).are not hoisted, which means that the JavaScript interpreter does not move them to the top of their scope before any code is executed. This means that you cannot call a function before it is defined in your code.The name of the function is optional, it can be anonymous, but it can be named as well."Arrow" functions are commonly used in this way.

```js
//Function declaration
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}

//Function expression
const name = function(param1, param2) {
  //code to be executed
}
```

*Function Declaration* - In JavaScript, a function declaration is a way to define a function by using the function keyword, followed by the function name, a set of parentheses, and a block of code within curly braces. The function name is followed by the function keyword, the function parameters are enclosed in parenthesis and the function body is enclosed in curly braces.
Function declarations are hoisted, which means that the JavaScript interpreter moves them to the top of their scope, before any code is executed. This means that you can call a function before it is defined in your code.

Here's an example of a simple function declaration:

```js
function greet() {
  console.log("Hello, world!");
}

greet(); // Output: "Hello, world!"
```

In this example, the function greet is defined and declared using the function keyword, and the code block that is executed when the function is called is placed within curly braces.

Function declarations can also take parameters, which allows the function to accept input from the calling code. For example:

```js
function add(a, b) {
  return a + b;
}
let result = add(3, 4);  // result = 7
```

In this example, the add function takes two parameters, a and b, and returns the sum of those two values.

It's important to note that function declaration should be defined before they are called, otherwise it will throw an error.

Function declarations are a common way to define functions in JavaScript and are widely used in the language. They are also easy to understand and use, making them a good choice for many programming tasks.


*Function expression* - In JavaScript, a function expression is a way to define a function by assigning it to a variable. It is similar to a function declaration, but instead of using the function keyword, a function expression is assigned to a variable using the assignment operator (=).
Function expressions are not hoisted, which means that the JavaScript interpreter does not move them to the top of their scope before any code is executed. This means that you cannot call a function before it is defined in your code.

Here's an example of a simple function expression:

```js
let greet = function() {
  console.log("Hello, world!");
}

greet(); // Output: "Hello, world!"
```

In this example, the function greet is defined and assigned to the variable greet using the assignment operator (=) and the code block that is executed when the function is called is placed within curly braces.

Function expressions can also take parameters, which allows the function to accept input from the calling code.
For example:

```js
let add = function(a, b) {
  return a + b;
}
let result = add(3, 4);  // result = 7

```

In this example, the add function takes two parameters, a and b, and returns the sum of those two values.

Function expressions are also often used as callback functions, for example when a function is passed as an argument to another function:


**Calling** - When a function is defined, it is not yet executed.To call and invoke a function's code, use the function's name followed by parentheses: `functionName()`.
The code inside the function will execute when "something" invokes (calls) the function:

1. When an event occurs (when a user clicks a button)
2. When it is invoked (called) from JavaScript code
3. Automatically (self invoked)


In JavaScript, a function can be invoked or called by using the function's name followed by parentheses, like this:

```js
function myFunction(parameters) {
    // code to be executed
}
myFunction(arguments);
```

The parentheses after the function name are used to pass in any arguments that the function may require. The code inside the function will then execute with the provided arguments.

Functions can also be invoked or called using a function reference, such as a variable that points to the function

```js
let myFunctionReference = myFunction;
myFunctionReference(arguments);

```

Functions can also be invoked using the call() or apply() methods, which allow you to specify the value of this within the function and pass arguments to the function respectively

```js
myFunction.call(thisValue, arguments);
myFunction.apply(thisValue, [arguments]);
```

It's important to note that a function must be defined before it can be invoked. If a function is invoked before it is defined, it will cause an error.


**Function calling from other function** - In JavaScript, a function can be called from within another function by simply invoking the function by its name, followed by parentheses to include any necessary arguments.

```js
function outerFunction() {
  console.log("This is the outer function.");
  innerFunction();
}

function innerFunction() {
  console.log("This is the inner function.");
}

outerFunction();
```

In the example above, the outerFunction calls the innerFunction by its name, innerFunction(), and thus the innerFunction is executed.


**Function as values** - In JavaScript, functions are first-class citizens, which means they can be treated like any other value, such as a number or a string. This means that they can be assigned to variables, passed as arguments to other functions, and returned from functions.
For example, a function can be assigned to a variable:

```js
let myFunction = function() {
  console.log("This is my function.");
};
```

It can also be passed as an argument to another function

```js
function callFunction(func) {
  func();
}

callFunction(myFunction);
```

It can also be returned from a function:

```js
function returnFunction() {
  return function() {
    console.log("This function is being returned.");
  }
}

let returnedFunction = returnFunction();
returnedFunction();
```

In the above example, the returnFunction returns an anonymous function that is assigned to the variable returnedFunction, which can then be invoked by invoking returnedFunction();

In JavaScript, functions are also objects, and they have additional properties and methods that can be accessed and used like any other object.


## Function Parameters

In JavaScript, parameters are variables that are used as placeholders for the values that are passed to a function when it is called. These values are known as arguments. When a function is called, the arguments are assigned to the corresponding parameters in the function definition.
The parameter is the name given to the variable declared inside the definition of a function. There are two special kinds of syntax: default and rest parameters.

`Default Parameters` - Default function parameters allow named parameters to be initialized with default values if no value or `undefined` is passed.
`Rest Parameters` - The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent [variadic functions](https://en.wikipedia.org/wiki/Variadic_function) in JavaScript.
parameters in JavaScript ?

For example, consider the following function definition:

```js
function add(x, y) {
  return x + y;
}
```

In this example, the function add takes two parameters, x and y. When the function is called, the values passed as arguments are assigned to these parameters, like this

```js
let result = add(5, 3);
```

In this case, the value 5 is assigned to the parameter x and the value 3 is assigned to the parameter y

*Default parameter* - In JavaScript, default parameters are values that are assigned to a function's parameters if no value is passed to the function when it is called. These default values can be defined in the function's definition, and are used when the function is called without passing any arguments for that parameter.
For example, consider the following function definition:

```js
function greet(name='John Doe') {
  console.log(`Hello, ${name}!`);
}

greet();  // Output: "Hello, John Doe!"
```

In this example, the function greet takes one parameter, name, which is assigned the default value 'John Doe'. If the function is called without passing an argument for name, it will use the default value.
However, if the function is called with an argument for name, that argument will be used instead of the default value:

```js
greet('Jane Smith');  // Output: "Hello, Jane Smith!"
```

So, it's a way to assign a default value for a function parameter in case no value is passed to the function during the call.

*The Rest Parameter* - The rest parameter in JavaScript allows a function to accept an indefinite number of arguments as an array. It is represented by three dots (…) followed by the parameter name.

```javascript
function sum(...numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5, 6, 7)); // Output: 22
```

In the above code, the `sum` function accepts an indefinite number of arguments using the rest parameter syntax `...numbers`. The function then iterates over the `numbers` array and adds them up to return the total sum. We can call the `sum` function with any number of arguments, and it will work correctly.

`Assigning values using rest parameter` - Rest parameters in JavaScript allow you to represent an indefinite number of arguments as an array. You can then use this array to assign values to variables. Here's an example:

```javascript
function sum(...numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}

const result = sum(1, 2, 3, 4, 5);
console.log(result); // Output: 15
```

In the above example, we have defined a function `sum` that takes any number of arguments using rest parameter syntax (`...numbers`). It then iterates through the array of numbers using a `for...of` loop and calculates the sum of all the numbers. Finally, it returns the total.

We can call the `sum` function with any number of arguments, and rest parameters will convert them into an array. In this case, we passed five arguments - 1, 2, 3, 4, and 5 - which were assigned to the `numbers` array inside the `sum` function.

We then assigned the return value of the `sum` function to a variable called `result`, which we logged to the console. The output is 15, which is the sum of all the numbers passed to the `sum` function.

`Rest element last element concept` - The rest element in JavaScript allows you to represent an indefinite number of arguments as an array. It is denoted by three dots (...) followed by the name of the array that will contain the rest of the elements.

```javascript
function sum(...numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5, 6, 7, 8)); // Output: 30
```

In this example, the `sum` function takes an indefinite number of arguments and uses the rest parameter `...numbers` to capture them into an array. The function then loops through the array and adds up all the numbers, returning the sum. 
Note that the rest parameter must be the last parameter in the function definition, as it collects all remaining arguments passed to the function.

`Assigning values using rest operator in object` - In JavaScript, the rest operator can be used to assign values to an object. The rest operator allows you to gather all remaining properties and pack them into an array. Here's an example:

```javascript
const { name, age, ...rest } = { name: "John", age: 30, city: "New York", country: "USA" };
```

In the above example, we have an object with four properties: `name`, `age`, `city` and `country`. We are using object destructuring to assign the values of `name` and `age` to variables of the same name, while the remaining properties are assigned to a variable called `rest` using the rest operator.
After executing this code, the value of `name` will be `"John"` and `age` will be `30`, while the `rest` variable will contain an object with the properties `city` and `country`.

You can also use the spread operator to merge two or more objects, as shown below:

```javascript
const obj1 = { name: "John", age: 30 };
const obj2 = { city: "New York", country: "USA" };

const newObj = { ...obj1, ...obj2 };
```

In the above example, we have two objects `obj1` and `obj2`, which have different properties. We are merging these two objects into a new object called `newObj`, using the spread operator. The resulting object has all the properties from both `obj1` and `obj2`.

`passing Variable arguments in function using rest parameter` - Rest parameter in JavaScript allows a function to accept an indefinite number of arguments as an array. To use rest parameter, you need to prefix the last named parameter of a function with an ellipsis (`...`).

```javascript
function sum(...numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5, 6, 7, 8)); // Output: 30
```

In the above example, the `sum` function accepts any number of arguments and stores them in an array `numbers` using the rest parameter syntax (`...numbers`). The `for` loop iterates through each element of the `numbers` array and adds them up to get the final result. 
Note that the rest parameter must be the last parameter in the function's parameter list.


**Arguments** - In JavaScript, arguments are the values passed to a function when it is called. These values are assigned to the corresponding parameters in the function definition.
For example, consider the following function definition:

```js
function add(x, y) {
  return x + y;
}
```

In this example, the function add takes two parameters, x and y. When the function is called, the values passed as arguments are assigned to these parameters, like this:

```js
let result = add(5, 3);
```

In this case, the value 5 is passed as the first argument and the value 3 is passed as the second argument to the function add.

JavaScript also provides the arguments object inside the function, which is an array-like object that contains all the arguments passed to the function

```js
function myFunction() {
  console.log(arguments);
}

myFunction(1, "hello", true);
```

In this example, myFunction is called with three arguments: 1, "hello" and true, and the arguments object inside the function contains [1, "hello", true]

It's worth noting that the arguments object is not an array and it doesn't have array methods like slice, map, filter etc. However, it can be converted to an array using Array.from(arguments) or using spread operator [...arguments]

*arguments Object* - In JavaScript, the arguments object is a special object that is available within the scope of all function calls. It contains an array-like collection of the arguments passed to the function. The arguments object allows a function to access the parameters passed to it, even if the function was not defined with a specific number of arguments. This can be useful for creating flexible or reusable functions. However, the arguments object is not an actual Array, and it does not have all of the methods of an Array.



**Function Scope** - When a variable is declared inside a function, it is only accessible within that function and cannot be used outside that function.


## Return in Functions

**Return two values from function** - In JavaScript, it is not possible to directly return two values from a function. However, there are several ways to achieve this:

1. Using an Array: We can create an array and store the values that we want to return in it. Then, we can return the array from the function.

```javascript
function twoValues() {
  var x = 10;
  var y = 20;

  return [x, y];
}

var result = twoValues();
console.log(result[0]); // Output: 10
console.log(result[1]); // Output: 20
```

2. Using an Object: We can create an object and assign the values that we want to return to its properties. Then, we can return the object from the function.

```javascript
function twoValues() {
  var x = 10;
  var y = 20;

  return { 
    a: x, 
    b: y 
  };
}

var result = twoValues();
console.log(result.a); // Output: 10
console.log(result.b); // Output: 20
```

3. Using Destructuring: We can use destructuring to extract the values returned by the function into separate variables.

```javascript
function twoValues() {
  var x = 10;
  var y = 20;

  return [x, y];
}

var [a, b] = twoValues();
console.log(a); // Output: 10
console.log(b); // Output: 20
```


## Built in functions

- A JavaScript method is a property containing a **function definition** . In other words, when the data stored on an object is a function we call that a method.
- To differentiate between properties and methods, we can think of it this way: **A property is what an object has, while a method is what an object does.**
- Since JavaScript methods are actions that can be performed on objects, we first need to have objects to start with. There are several objects built into JavaScript which we can use.


## Types of functions

**First Class function/Citizen** - In JavaScript, all functions are first-class citizens, which means they can be treated like any other value, such as a number or string. This means that a function can be:

- `Assigned to a variable`:

```js
let add = function(a, b) {
  return a + b;
};
```

- `Passed as an argument to another function`:

```js
let numbers = [1, 2, 3, 4, 5];
let double = function(x) { return x * 2; };
let doubledNumbers = numbers.map(double); // [2, 4, 6, 8, 10]
```

- `Returned as a value from a function`

```js
let createCounter = function() {
  let count = 0;
  return function() {
    return count++;
  };
};
let counter = createCounter();
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2
```

In the first example, the function add is assigned to a variable, in the second example the function double is passed as an argument to the map method, and in the third example, an anonymous function is returned as a value from the createCounter function.

It's important to note that functions in javascript are first class object, which means they are also objects and have properties and methods just like any other object.


**Anonymous function** - An anonymous function in JavaScript is a function that is defined without a name. Anonymous functions are often used as arguments for other functions, such as callbacks and event handlers. They can also be assigned to variables and used just like named functions.
Here's an example of an anonymous function being assigned to a variable:

```js
let myFunction = function() {
    console.log("Hello, world!");
};
myFunction(); // logs "Hello, world!"
```

Here's an example of an anonymous function being passed as an argument to another function

```js
setTimeout(function() {
    console.log("Hello, world!");
}, 1000);

```

This function will execute after 1 sec of delay.

Arrow function also can be used as anonymous function such as

```js
setTimeout(()=> {
    console.log("Hello, world!");
}, 1000);
```

In general, anonymous functions are used when a function is only needed once and will not be reused elsewhere in the code.


**Arrow Functions** - Arrow Function is a new way of creating functions with the '=>' operator with a shorter syntax.An arrow function is a shorter syntax for writing functions in JavaScript. It does not have its own this, arguments, super, or new.target.Arrow functions are a concise way of writing anonymous, lexically scoped functions in ECMAScript 2015 (ES6).
In JavaScript, an arrow function is a shorthand syntax for defining a function. It is also known as a "fat arrow" function because it uses the "=>" symbol to define the function. Arrow functions were introduced in ECMAScript 6 (ES6) and are considered more concise and easier to read than traditional function expressions or declarations.
Arrow functions have a number of syntax variations depending on the number of arguments and the complexity of the function body.

They are written like this:

```js
//Normal Function
function add(a,b) {
    return a+b;
}

// Arrow function
let add=(a,b)=>{
    return a+b;
}
const add = (a, b) => a + b;

console.log(add(2,6))
```

This function can be immediately invoked by providing an argument to the expression:
```js
(add = (a, b) => a + b)(1,2)
```

`Arrow function scope & this keyword` - Stays within current scope.
Arrow functions do not have their own this, they use this of the surrounding scope.

- Arrow functions do not have their own arguments object, they use arguments object of the surrounding scope.
- Arrow functions can't be used as constructors.
- Arrow functions can't be used with the new keyword.
- Arrow functions can't be used as generators.

Here's an example of a simple arrow function that takes no arguments and returns a string:

For example:

```js
let greet = () => {
  return "Hello, world!";
}
console.log(greet()); // Output: "Hello, world!"
```

In this example, the function greet is defined using an arrow function and the code block that is executed when the function is called is placed within curly braces.

Arrow functions can also take parameters and return values:

```js
let add = (a, b) => a + b;
console.log(add(3, 4));  // Output: 7
```

In this example, the add function takes two parameters, a and b, and returns the sum of those two values. The return statement is implicit, so you don't need to write the return keyword.


**generator function** - A generator function can pause and resume execution. It is defined using the function* syntax and uses yield to return a value and pause execution.


**Immediately Invoked Function Expression(IIFE)** - Immediately-Invoked Function Expression is a function that is executed immediately after it is created.

```js
// An Async IIFE
( async() => {
    
    const x = 1;
    const y = 9;

    console.log(`Hello, The Answer is ${x+y}`);

})();
```


**Callback function** - A callback function is a function passed into another function as an argument. This function is invoked inside the outer function to complete an action.

```js
function callbackFunction(name) {
  console.log('Hello ' + name);
}
function outerFunction(req_name,callback) {
  let name = req_name;
  callback(name);
}

outerFunction("Collins",callbackFunction);
```

The callbacks are needed because javascript is an event driven language. That means instead of waiting for a response javascript will keep executing while listening for other events.

```js
function firstFunction(){
  // Simulate a code delay
  setTimeout( function(){
  console.log('First function called');
}, 1000 );
}
function secondFunction(){
  console.log('Second function called');
}
firstFunction();
secondFunction();

// Second function called
// First function called
```

As observed from the output, javascript didn't wait for the response of the first function and the remaining code block got executed. So callbacks are used in a way to make sure that certain code doesn’t execute until the other code finishes execution.

`Callback Hell` is an anti-pattern with multiple nested callbacks which makes code hard to read and debug when dealing with asynchronous logic. The callback hell looks like below,

```js
async1(function(){
  async2(function(){
    async3(function(){
      async4(function(){
        ....
      });
    });
  });
});
```


**High Order function** - A higher-order function is a function that takes one or more functions as arguments and/or returns a function as its result. In JavaScript, functions are first-class citizens, meaning they can be passed around just like any other data type (e.g. numbers, strings, etc.).

```js
function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

function operateOnTwoNumbers(operatorFunc, x, y) {
  return operatorFunc(x, y);
}

console.log(operateOnTwoNumbers(add, 2, 3)); // prints 5
console.log(operateOnTwoNumbers(multiply, 2, 3)); // prints 6
```

Here operateOnTwoNumbers is a higher-order function because it takes a function (operatorFunc) as an argument and returns the result of calling that function with the given x and y values.


## How to use destrucutring in Function ?

Destructuring is a way to extract values from arrays or objects into distinct variables. You can use destructuring in function arguments to unpack arguments passed to the function.

Here's an example of how to use destructuring in a function:

```javascript
function printName({firstName, lastName}) {
  console.log(`${firstName} ${lastName}`);
}

const person = { firstName: 'John', lastName: 'Doe' };

printName(person); // output: "John Doe"
```

In the above example, we define a function `printName` that takes an object as an argument. The object has two properties, `firstName` and `lastName`. Instead of accessing these properties with dot notation (`person.firstName` and `person.lastName`), we use destructuring to extract the values and assign them to separate variables within the function signature.

We then define an object `person` with the same property names, and call the `printName` function with `person` as an argument. The function logs the full name to the console by combining the `firstName` and `lastName` variables.

Note that the argument provided to `printName` must be an object with the expected property names. If any of the properties are missing or have different names, the destructuring will fail and the function will throw an error.

Destructuring Function Parameters:

```js
// Destructuring function parameters
function printPersonDetails({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}

const person = { name: 'Alice', age: 28 };
printPersonDetails(person);
// Output: Name: Alice, Age: 28
```
