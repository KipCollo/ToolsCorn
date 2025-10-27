# Callback function

A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed.
It is just a function that takes another function as an argument, which is then called when the rest of the initial function has finished. In other words, it's just a function calling a function, like this:

```js
function doSomething(callback) {
   callback();
}
```
