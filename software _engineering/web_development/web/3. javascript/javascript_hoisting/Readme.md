# Hoisting

In JavaScript, `hoisting` refers to the behavior of variable and function declarations being moved to the top of their scope. This means that a variable or function can be used before it is declared in the code. However, it is important to note that only the declarations themselves are hoisted, not the assignments. So, if a variable is assigned a value before it is declared, the value will be undefined when accessed before the assignment.

```js
console.log(x); // undefined
var x = 5;
console.log(x); // 5
```

In this example, the declaration of the variable "x" is hoisted to the top of the scope, so the first console.log statement can access it, even though it is not assigned a value until later in the code. The second console.log statement then outputs the assigned value of 5.
It's important to remember that only the declarations are hoisted, not the assignment. If you try to access the value of a variable before the assignment, it will return undefined, even if the variable was declared before the point of reference.

```js
console.log(x); // ReferenceError: x is not defined
let x;
```

In this example, the variable x was declared with let keyword but it is not assigned a value yet, so trying to access it will throw a ReferenceError.

Also, function declarations are hoisted as well, so a function can be called before it is defined in the code.

```js
foo(); // "I am a hoisted function"
function foo(){
    console.log("I am a hoisted function")
}
```

In this example, the function foo is hoisted to the top of the scope, so it can be called before it is defined in the code.


## Temporal Dead Zone (TDZ)

In JavaScript, the `Temporal Dead Zone (TDZ)` refers to the period of time before a variable declared with the let or const keyword is initialized. During this period, trying to access the variable will result in a ReferenceError.
The TDZ is different from hoisting, which only affects the scope of the variable. The TDZ applies to the variable's initialization as well. This is because, unlike variables declared with var, variables declared with let and const are not initialized until they are assigned a value.


```js
console.log(x); // ReferenceError: x is not defined
let x;
x = 5;
console.log(x); // 5
```

In this example, the variable x is declared with the let keyword, but it is not assigned a value until the next line of code. Trying to access x before it is assigned a value will result in a ReferenceError.

It's worth noting that if you try to re-declare a variable declared with let or const, it will throw a SyntaxError, this is different from using var where you can re-declare the variable and it will not throw any error.

```js
let x = 1;
let x = 2; // SyntaxError: Identifier 'x' has already been declared
```

In summary, the Temporal Dead Zone is the period of time before a variable declared with let or const is initialized, trying to access the variable during this period will result in a ReferenceError.
