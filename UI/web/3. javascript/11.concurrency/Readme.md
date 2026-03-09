# Concurrency

There are three strategies in JavaScript that you'll need to know of when working with concurrency: `callbacks`, `Promises`, and the `async and await` keyword.

- Synchronous programming: Code is executed sequentially, blocking the following code from executing until the current task is complete.
- Asynchronous programming: Code can execute without waiting for the previous code to complete, often using callbacks, promises, or async/await.

## promise and callback

- `Promise`: Provides a more readable and manageable way to handle asynchronous operations, with methods like then, catch, and finally.
- `Callback`: A function passed into another function as an argument to be executed later. Can lead to "callback hell" with nested callbacks.

