# Promises

A Promise object represents an operation which has produced or will eventually produce a value. Promises provide a robust way to wrap the (possibly pending) result of asynchronous work, mitigating the problem of deeply nested callbacks (known as "callback hell").

A promise can be in one of three states:
1. pending — The underlying operation has not yet completed, and the promise is pending fulﬁllment.
2. fulﬁlled — The operation has ﬁnished, and the promise is fulﬁlled with a value. This is analogous to returning a value from a synchronous function.
3. rejected — An error has occurred during the operation, and the promise is rejected with a reason. This is analogous to throwing an error in a synchronous function.

A promise is said to be settled (or resolved) when it is either fulﬁlled or rejected. Once a promise is settled, it becomes immutable, and its state cannot change. The `then` and `catch` methods of a promise can be used to attach callbacks that execute when it is settled. These callbacks are invoked with the fulﬁllment value and rejection reason,respectively.

```js
const promise = new Promise((resolve, reject) => {
   // Perform some work (possibly asynchronous)
   // ...
   if (/* Work has successfully finished and produced "value" */) {
      resolve(value);
   } else {
      // Something went wrong because of "reason"
      // The reason is traditionally an Error object, although
      // this is not required or enforced.
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
   // Work has completed successfully,
   // promise has been fulfilled with "value"
}).catch(reason => {
   // Something went wrong,
   // promise has been rejected with "reason"
});
```

Note: Calling promise.then(...) and promise.catch(...) on the same promise might result in an Uncaught exception in Promise if an error occurs, either while executing the promise or inside one of the callbacks, so the preferred way would be to attach the next listener on the promise returned by the previous then / catch.

Alternatively, both callbacks can be attached in a single call to then:

```js
promise.then(onFulfilled, onRejected);
```

Attaching callbacks to a promise that has already been settled will immediately place them in the microtask queue, and they will be invoked "as soon as possible" (i.e. immediately after the currently executing script). It is not necessary to check the state of the promise before attaching callbacks, unlike with many other event-emitting
implementations.
