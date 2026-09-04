# Concurrency

There are three strategies in JavaScript that you'll need to know of when working with concurrency: `callbacks`, `Promises`, and the `async and await` keyword.

- Synchronous programming: Code is executed sequentially, blocking the following code from executing until the current task is complete.
- Asynchronous programming: Code can execute without waiting for the previous code to complete, often using callbacks, promises, or async/await.

*Asynchronous JavaScript* refers to a style of programming in which certain operations can be executed independently of the main program flow. This is typically achieved through the use of callbacks, promises, and other mechanisms that allow JavaScript to execute code in the background while other code is still running.
Asynchronous JavaScript is particularly useful for web applications, where users might interact with the page in various ways that require the application to perform background operations, such as fetching data from a server, updating the UI, or handling user input.

In contrast to synchronous JavaScript, which executes code in a linear, blocking manner, asynchronous JavaScript allows multiple operations to be executed simultaneously, without blocking the main program flow.

Examples of asynchronous operations in JavaScript include:

- Fetching data from a server using the fetch() API
- Handling user input events, such as mouse clicks or keyboard input
- Performing animations or other visual effects on a web page
- Updating the state of a web application in response to user actions or external events

Asynchronous programming in JavaScript can be somewhat challenging to master, as it requires a solid understanding of concepts like callbacks, promises, and the event loop. However, once you've mastered these concepts, you'll be able to write more efficient, responsive, and user-friendly web applications.


## The Event Loop

In JavaScript, the event loop is a mechanism that handles asynchronous operations by continuously monitoring the call stack and the task queue. When an asynchronous operation completes, it is placed in the task queue. The event loop then checks the call stack, and if it's empty, it takes the next task from the queue and pushes it onto the call stack to be executed.
The event loop runs continuously, constantly checking the call stack and task queue for new tasks to execute. This allows JavaScript to handle multiple tasks at the same time without blocking the main thread.

For example, when you make an AJAX request or set up a timer with `setTimeout()`, those operations are sent to the browser's event loop to be processed asynchronously. While those operations are waiting for their completion, other code can continue to execute on the main thread.

```javascript
console.log('start');

setTimeout(() => {
  console.log('setTimeout');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise');
});

console.log('end');
```

In this example, we have three tasks: a setTimeout function, a Promise, and a series of console.log statements.When we run this code, the following happens:

1. The first console.log statement prints 'start' to the console.
2. The setTimeout function is added to the task queue, with a delay of 0 milliseconds. Note that this does not mean that the function will run immediately; it will only be executed when the event loop gets to it.
3. The Promise is resolved and the then callback is added to the microtask queue.
4. The second console.log statement prints 'end' to the console.
5. At this point, the call stack is empty, so the event loop checks the queues for pending tasks.
6. It first checks the microtask queue, finds the then callback, and executes it, printing 'Promise' to the console.
Next, it checks the task queue, finds the setTimeout function, and executes it, printing 'setTimeout' to the console.
So the final output will be:

```
start
end
Promise
setTimeout
```
In summary, the event loop is a key concept in JavaScript's ability to handle asynchronous operations, allowing for non-blocking I/O and concurrent execution of code.


## Promise and Callback

- `Promise`: Provides a more readable and manageable way to handle asynchronous operations, with methods like then, catch, and finally.
- `Callback`: A function passed into another function as an argument to be executed later. Can lead to "callback hell" with nested callbacks.

In JavaScript, a **Promise** is an object that represents the eventual completion (or failure) of an asynchronous operation, and allows you to write code that can handle the result of that operation once it's complete.
A Promise object represents an operation which has produced or will eventually produce a value. Promises provide a robust way to wrap the (possibly pending) result of asynchronous work, mitigating the problem of deeply nested callbacks (known as "callback hell").

Promises are a powerful tool in JavaScript for handling asynchronous operations, and they provide a way to write cleaner, more readable code that is easier to reason about. They are widely used in modern web development, particularly when making HTTP requests or working with other external APIs or services.

A Promise can be in one of three states:

- Pending: The initial state, representing the fact that the operation is still ongoing and the result is not yet available.
- Fulfilled: The operation has completed successfully, and the result is available.This is analogous to returning a value from a synchronous function.
- Rejected: The operation has failed, and an error has occurred.This is analogous to throwing an error in a synchronous function.

Once a Promise is fulfilled or rejected, it cannot change its state again.
A promise is said to be settled (or resolved) when it is either fulﬁlled or rejected. Once a promise is settled, it becomes immutable, and its state cannot change. The `then` and `catch` methods of a promise can be used to attach callbacks that execute when it is settled. These callbacks are invoked with the fulﬁllment value and rejection reason,respectively.

`Creating Promise` - To create a Promise in JavaScript, you can use the Promise constructor, which takes a function that defines the asynchronous operation. This function takes two parameters: resolve and reject, which are functions that you can call to either fulfill or reject the Promise.To create a simple Promise in JavaScript, you can use the following syntax:

```js
const myPromise = new Promise((resolve, reject) => {
  // Do some asynchronous operation here
  // If successful, call resolve()
  // If there's an error, call reject()
});
```

You can replace the comments with actual code that performs an asynchronous operation, such as making an HTTP request or reading a file. Within the Promise constructor function, you can call the `resolve()` method to indicate that the operation was successful and pass any data you want to return. Alternatively, you can call the `reject()` method to indicate that an error occurred and pass an error message or object. 

Once you've created a Promise, you can use methods like `then()` and `catch()` to handle the results of the operation. For example:

```js
myPromise.then(data => {
  // Handle successful result here
}).catch(error => {
  // Handle error here
});
```

The `then()` method takes a function that will be called if the Promise is resolved successfully, and the `catch()` method takes a function that will be called if the Promise is rejected.

Here's an example of creating a Promise that represents an asynchronous operation that resolves after a set amount of time:

```javascript
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

delay(1000)
  .then(() => console.log('Operation complete!'))
  .catch((error) => console.error(error));
```

In this example, the delay function returns a new Promise that resolves after a specified number of milliseconds (in this case, 1000ms, or 1 second). We then use the then method to specify what should happen when the Promise is fulfilled (in this case, we simply log a message to the console), and the catch method to specify what should happen if the Promise is rejected (in this case, we log the error message to the console).

```js
const promise = new Promise((resolve, reject) => {
   // Perform some work (possibly asynchronous)
   if (/* Work has successfully finished and produced "value" */) {
      resolve(value);
   } else {
      // Something went wrong because of "reason".The reason is traditionally an Error object, although this is not required or enforced.
      let reason = new Error(message);
      reject(reason);
   // Throwing an error also rejects the promise.
   throw reason;
   }
});
```

The then and catch methods can be used to attach fulﬁllment and rejection callbacks:

```js
promise.then(value => {
   // Work has completed successfully,promise has been fulfilled with "value"
}).catch(reason => {
   // Something went wrong,promise has been rejected with "reason"
});
```

Note: Calling promise.then(...) and promise.catch(...) on the same promise might result in an Uncaught exception in Promise if an error occurs, either while executing the promise or inside one of the callbacks, so the preferred way would be to attach the next listener on the promise returned by the previous then / catch.

Alternatively, both callbacks can be attached in a single call to then:

```js
promise.then(onFulfilled, onRejected);
```

Attaching callbacks to a promise that has already been settled will immediately place them in the microtask queue, and they will be invoked "as soon as possible" (i.e. immediately after the currently executing script). It is not necessary to check the state of the promise before attaching callbacks, unlike with many other event-emitting implementations.

*Consuming Promises* - In JavaScript, you can consume a Promise using the then method, which takes two callbacks as arguments: one to handle the case where the Promise is fulfilled, and another to handle the case where the Promise is rejected.
Here's an example of how to consume a Promise in JavaScript using the then method:

```javascript
const promise = new Promise((resolve, reject) => {
  // Asynchronous operation
  setTimeout(() => {
    const data = { message: 'Promise resolved!' };
    resolve(data);
  }, 1000);
});

promise
  .then(data => console.log(data.message))
  .catch(error => console.error(error));
```

In this example, we create a new Promise that represents an asynchronous operation that will resolve after 1 second. Inside the Promise constructor, we define the asynchronous operation using a setTimeout function, and then call the resolve method to fulfill the Promise with some data (in this case, an object with a message property).

We then use the then method to specify what should happen when the Promise is fulfilled, passing in a callback function that takes the data returned by the Promise as an argument. In this case, we simply log the message property of the data object to the console.
If the Promise is rejected (for example, if an error occurs during the asynchronous operation), the catch method will be called, passing in the error as an argument.

Here's an example of how to handle errors using the catch method:

```javascript
const promise = new Promise((resolve, reject) => {
  // Asynchronous operation that throws an error
  setTimeout(() => {
    const error = new Error('Promise rejected!');
    reject(error);
  }, 1000);
});

promise
  .then(data => console.log(data.message))
  .catch(error => console.error(error.message));
```

In this example, we create a new Promise that represents an asynchronous operation that will reject after 1 second. Inside the Promise constructor, we define the asynchronous operation using a setTimeout function, and then call the reject method to reject the Promise with an error.

We then use the catch method to specify what should happen when the Promise is rejected, passing in a callback function that takes the error returned by the Promise as an argument. In this case, we simply log the error message to the console.

`Chaining Promises` - Chaining Promises in JavaScript is a technique for handling asynchronous operations where multiple Promise objects are linked together in a chain, with the output of one Promise becoming the input of the next. This allows for more efficient and readable code compared to nested callback functions. Each Promise in the chain can be modified or transformed using methods such as .then(), .catch(), and .finally() to handle success, error, and completion cases respectively.
Chaining promises in JavaScript allows you to execute asynchronous operations in a sequence, where the output of one operation feeds as input to the next one. 

Here's an example:

```javascript
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${data[0].id}`);
  })
  .then(response => response.json())
  .then(posts => console.log(posts))
  .catch(error => console.error(error));
```

In this code, we start by performing a GET request to retrieve a list of users from a public API. We then parse the JSON response using the `json()` method, and extract the first user from the array.
Next, we use the extracted user's ID to construct a new URL, which we pass to another `fetch()` call to obtain a list of posts made by that user. Again, we parse the JSON response, and finally log the posts to the console.

If any errors occur while executing the promises, we catch them with the `catch()` method and log them to the console. The chain of promises ensures that each operation is executed in the correct order, without blocking the main thread, and that the output of one operation becomes the input of the next.

*Handling Rejected Promises* - In JavaScript, you can handle rejected promises using the catch() method or the second argument to the then() method. Here is an example:

```javascript
const promise = new Promise((resolve, reject) => {
  // Asynchronous operation that will throw an error
  setTimeout(() => {
    const error = new Error('Something went wrong');
    reject(error);
  }, 1000);
});

promise.catch((error) => {
  console.error(error);
  // Handle the error here
});
```

In this example, we create a new promise that represents an asynchronous operation which will reject after one second. Inside the promise constructor, we define the asynchronous operation using a setTimeout function, and then call the reject() method to reject the promise with an error.

We then use the catch() method to specify what should happen when the promise is rejected, passing in a callback function that takes the error returned by the promise as an argument. In this case, we simply log the error to the console.
You can also handle rejected promises using the second argument to the then() method:

```javascript
const promise = new Promise((resolve, reject) => {
  // Asynchronous operation that will throw an error
  setTimeout(() => {
    const error = new Error('Something went wrong');
    reject(error);
  }, 1000);
});

promise.then(
  (result) => {
    // Handle the result here
  },
  (error) => {
    console.error(error);
    // Handle the error here
  }
);
```

In this example, we pass two callback functions to the then() method: one to handle the case where the promise is fulfilled, and another to handle the case where the promise is rejected. The second argument to the then() method is the rejection handler, which takes the error returned by the promise as an argument.


**Callback function** - A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed.
It is just a function that takes another function as an argument, which is then called when the rest of the initial function has finished. In other words, it's just a function calling a function, like this:

```js
function doSomething(callback) {
   callback();
}
```


**Running promises in Parallel in javascript** - Running promises in parallel in JavaScript refers to executing multiple asynchronous operations simultaneously, without waiting for one operation to complete before starting the next one. This can improve performance and reduce overall execution time. One way to achieve this is by using Promise.all() method which takes an array of promises and returns a new promise that resolves when all the input promises have resolved or rejects when any of the input promises reject.
Running promises in parallel means executing multiple asynchronous operations at the same time, without waiting for any of them to complete before starting the next one. This can greatly improve performance in situations where there are many independent and time-consuming tasks to be performed.

In JavaScript, you can run promises in parallel using Promise.all() method. This method takes an array of Promises as its argument, and returns a new Promise that resolves with an array of all the resolved values or rejects with the reason of the first rejected promise.

Here is an example of running promises in parallel:

```javascript
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise 1 resolved"), 500);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise 2 resolved"), 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise 3 resolved"), 1500);
});

Promise.all([p1, p2, p3])
  .then(results => console.log(results))
  .catch(error => console.log(error));
 ```
 
 In this example, we create three promises (p1, p2, p3) that resolve after different amounts of time using the `setTimeout()` function. We then pass these promises to `Promise.all()` method, which returns a new Promise that resolves with an array of all the resolved values. We log the results to the console using `.then()` method.

Since `p1` resolves after 500ms, `p2` after 1000ms, and `p3` after 1500ms, we would expect to see the following output after 1500ms:

```
["Promise 1 resolved", "Promise 2 resolved", "Promise 3 resolved"]
```

Note that if any of the promises passed to `Promise.all()` method reject, the whole sequence will be rejected and `.catch()` method will be called with the reason of the first rejected promise.


**Promise Combinators: race, allSettled and any** - Promise Combinators in JavaScript are methods that operate on multiple promises and return a new promise. The three Promise Combinators are:

1. Promise.race(iterable): Returns a new promise that resolves or rejects as soon as one of the promises in the iterable resolves or rejects, with the value or reason from that promise. Promise.race() takes an array of promises and returns a new promise that resolves or rejects as soon as one of the input promises resolves or rejects. Here's an example:

```javascript
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'Promise 1');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'Promise 2');
});

Promise.race([promise1, promise2])
  .then(result => console.log(result)); // Output: 'Promise 1'
```

In this example, Promise.race() returns a new promise that resolves with the value of promise1, because promise1 resolves before promise2.

2. Promise.allSettled(iterable): Returns a new promise that resolves with an array of objects that describe the outcome of each promise in the iterable, whether fulfilled or rejected. Promise.allSettled() takes an array of promises and returns a new promise that resolves with an array of objects that describe the state of each input promise (whether it resolved or rejected and with what value). Here's an example:

```javascript
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'Promise 1');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 1000, 'Promise 2');
});

Promise.allSettled([promise1, promise2])
  .then(results => console.log(results));
// Output: [{status: 'fulfilled', value: 'Promise 1'}, {status: 'rejected', reason: 'Promise 2'}]
```

In this example, Promise.allSettled() returns a new promise that resolves with an array of objects, one for each input promise, that describes the status and value or reason of each promise.

3. Promise.any(iterable): Returns a new promise that resolves with the value of the first fulfilled promise in the iterable. If all promises are rejected, it rejects with an AggregateError containing an array of rejection reasons. Note that this method is not yet supported by all browsers. Promise.any() takes an array of promises and returns a new promise that resolves as soon as one of the input promises resolves. If all input promises reject, Promise.any() returns a rejected promise. Here's an example:

```javascript
const promise1 = new Promise((resolve, reject) => {
  setTimeout(reject, 500, 'Promise 1');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'Promise 2');
});

Promise.any([promise1, promise2])
  .then(result => console.log(result)); // Output: 'Promise 2'
```

In this example, Promise.any() returns a new promise that resolves with the value of promise2, because promise2 resolves before promise1.


## Async/Await

async and await build on top of promises and generators to express asynchronous actions inline. This makes asynchronous or callback code much easier to maintain.Functions with the async keyword return a Promise, and can be called with that syntax.Inside an async function the await keyword can be applied to any Promise, and will cause all of the function body after the await to be executed after the promise resolves.
Async/await is a syntax for consuming promises in JavaScript. Async functions return a promise that resolves with the value returned by the function, or rejects with an error thrown from the function. Await can be used to wait for the resolution of a promise before continuing execution of the function.

Here's an example:

```javascript
async function myFunction() {
  try {
    const result1 = await promise1();
    const result2 = await promise2(result1);
    return result2;
  } catch (error) {
    console.error(error);
  }
}

myFunction()
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

In this example, `myFunction` is an async function that uses `await` to wait for the resolution of `promise1`, and then uses the result of `promise1` as an input to `promise2`. The `try`/`catch` block is used to handle any errors that may occur during the execution of the promises.

To call `myFunction`, we use `myFunction().then()` to log the result to the console if the promise is resolved successfully, and `.catch()` to log any errors that may occur during the execution.


**Returning values from Async functions in javascript** - Async functions in JavaScript use the `async/await` syntax to allow for asynchronous behavior. When an async function is called and awaited, it returns a promise that will eventually resolve with a value. The value can be returned using the `return` keyword inside the async function, and it will be wrapped in a resolved promise when the function is completed.
If an error is thrown inside the async function, the promise returned by the function will be rejected with the thrown error as the reason.

Async functions in JavaScript use the `async` and `await` keywords to handle asynchronous operations. They always return a Promise, which can be resolved with any value.

Here is an example of an Async function that returns a Promise with a string value:

```javascript
async function greet(name) {
  return "Hello, " + name + "!";
}

// calling the async function
greet("John").then(result => console.log(result));
// Output: "Hello, John!"
```

In the example above, the `greet` function takes a `name` parameter and returns a Promise that resolves to a string value. We call this function and use the `then` method to log the result to the console.

We can also use the `await` keyword to get the resolved value directly from an async function:

```javascript
async function getName() {
  return "John";
}

async function greet() {
  const name = await getName();
  return "Hello, " + name + "!";
}

// calling the async function
greet().then(result => console.log(result));
// Output: "Hello, John!"
```

In this example, the `getName` function returns a Promise that resolves to the string "John". We then call the `greet` function, which uses the `await` keyword to wait for the resolved value of `getName()` before concatenating it with the greeting string.


**Top-Level await (ES2022)** - Top-level await is a new feature in JavaScript that allows you to use the `await` keyword outside of an asynchronous function at the top level of your code. This means that you can directly use `await` when importing modules or loading data from external APIs without having to wrap them inside an immediately invoked async function expression (IIFE) or inside an async function.

Before top-level await, you had to use workarounds like IIFEs or async functions to await module imports or API requests, which made the code more verbose and harder to read. With top-level await, you can simplify your code and make it more elegant.
However, top-level await is only available in modules or scripts with the `"module"` type. If you're using CommonJS modules (`require()`), you still need to use IIFEs or async functions to await module imports.

Example:

```javascript
// Await an asynchronous operation at the top level
const result = await fetch("https://jsonplaceholder.typicode.com/todos/1");
const data = await result.json();

console.log(data);
```
In this example, we use the await keyword at the top level of the module to fetch some data from an API and parse it as JSON. In previous versions of JavaScript, we would have had to wrap this code in an IIFE with an async function to achieve the same result.

Top-level await can be useful for simplifying your code and reducing boilerplate when working with asynchronous operations at the top level of a module. However, it's important to note that top-level await can only be used in modules, not in scripts, and it may have some performance implications if not used correctly.
