# Functions

Functions exist so we can reuse code. They are blocks of code that execute whenever they are invoked. Each function is typically written to perform a particular task.

## Defining and Calling Functions

**Defining:**

- JavaScript function _declarations_ are made by using the `function` keyword.
- Functions can also be defined by saving function _expressions_ to a variable. "Arrow" functions are commonly used in this way.

```js
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}
```

**Calling:**

- When a function is defined, it is not yet executed.
- To call and invoke a function's code, use the function's name followed by parentheses: `functionName()`.
The code inside the function will execute when "something" invokes (calls) the function:

1. When an event occurs (when a user clicks a button)
2. When it is invoked (called) from JavaScript code
3. Automatically (self invoked)

## Function Parameters

The parameter is the name given to the variable declared inside the definition of a function. There are two special kinds of syntax: default and rest parameters.

### Default Parameters

Default function parameters allow named parameters to be initialized with default values if no value or `undefined` is passed.

### Rest Parameters

The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent [variadic functions](https://en.wikipedia.org/wiki/Variadic_function) in JavaScript.

## Built in functions

- A JavaScript **method** is a property containing a **function definition** . In other words, when the data stored on an object is a function we call that a method.
- To differentiate between properties and methods, we can think of it this way: **A property is what an object has, while a method is what an object does.**
- Since JavaScript methods are actions that can be performed on objects, we first need to have objects to start with. There are several objects built into JavaScript which we can use.

## Difference between a function declaration and a function expression

- Function declaration: A function, defined with the function keyword, that is hoisted to the top of its scope.
- Function expression: A function, defined with the function keyword or as an arrow function, that is not hoisted.
