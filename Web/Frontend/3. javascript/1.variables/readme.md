# Javascript Variables

Most of the time, a JavaScript application needs to work with information. To store and represent this information in the JavaScript codebase, we use variables. A variable is a container for a value.

## Variable Declarations

To use variables in JavaScript, we first need to create it i.e. declare a variable. To declare variables, we use one of the `var`, `let`, or `const` keywords.

### [var] keyword

The var statement declares a function-scoped or globally-scoped variable, optionally initializing it to a value.Can be redeclared and updated.

### [let] keyword

The `let` declaration declares a block-scoped local variable, optionally initializing it to a value.an be updated but not redeclared within the same scope.

### [const] keyword

Constants are block-scoped, much like variables declared using the `let` keyword. The value of a constant can't be changed through reassignment (i.e. by using the assignment operator), and it can't be redeclared (i.e. through a variable declaration). However, if a constant is an object or array its properties or items can be updated or removed.

```js
var car="Volvo";
car ="BMW";//redeclare

let student;
const PI=3.14;
```

## Variables Naming

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

- JavaScript Underscore (_):- Since JavaScript treats underscore as a letter, identifiers containing *_* are valid variable names:

```js
let _lastName = "Johnson";
let _x = 2;
let _100 = 5;
```
