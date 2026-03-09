# Hoisting

Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope (script or function). This means that variable and function declarations are processed before any code is executed.

Hoisting means that a construct is moved to the beginning of its scope, regardless of where it is located in that scope:

```js
assert.equal(func(), 123); // Works!
function func() {
return 123;
}
```

You can use func() before its declaration, because, internally, it is hoisted. That is, the previous code is actually executed like this:

```js
function func() {
return 123;
}
assert.equal(func(), 123);
```

The temporal dead zone can also be viewed as a form of hoisting, because the declaration affects what happens at the beginning of its scope.
