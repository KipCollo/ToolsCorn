# Asynchronous Js

Most real-world computer programs, however, are significantly asynchronous. This means that they often have to stop computing while waiting for data to arrive or for some event to occur. JavaScript programs in a web browser are typically event-driven, meaning that they wait for the user to click or tap before they actually do anything. And JavaScript-based servers typically wait for client requests to arrive over the network before they do anything.

1. Promises - ES6
2. The keywords async and await were introduced in ES2017 and provide new syntax that simplifies asynchronous programming by allowing you to structure your Promise-based code as if it was synchronous.
3. Asynchronous iterators the for/await loop were introduced in ES2018 and allow you to work with streams of asynchronous events using simple loops that appear synchronous

## PROMISES

A Promise is an object that represents the result of an asynchronous computation.That result may or may not be ready yet, and the Promise API is intentionally vague about this: there is no way to synchronously get the value of a Promise; you can only ask the Promise to call a callback function when the value is ready. If you are defining an asynchronous API like the getText() function in the previous section, but want to make it Promise-based, omit the callback argument, and instead return a Promise object. The caller can then register one or more callbacks on this Promise object, andthey will be invoked when the asynchronous computation is done.
