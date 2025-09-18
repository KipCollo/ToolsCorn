# async/await

async and await build on top of promises and generators to express asynchronous actions inline. This makes asynchronous or callback code much easier to maintain.
Functions with the async keyword return a Promise, and can be called with that syntax.

Inside an async function the await keyword can be applied to any Promise, and will cause all of the function body after the await to be executed after the promise resolves.