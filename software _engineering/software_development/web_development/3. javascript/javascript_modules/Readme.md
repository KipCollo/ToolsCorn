# Modules

JavaScript modules: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

Prior to ECMAScript 6, JavaScript did not have built-in modules. Therefore, the flexible syntax of the language was used to implement custom module systems within the language. Two popular ones are CommonJS (targeted at the server side) and AMD (Asynchronous Module Definition, targeted at the client side).

JavaScript modules allow you to break up your code into separate files and then import them back into the original file again.This makes it easier to maintain the code-base.JavaScript modules rely on the import and export statements.
In JavaScript, modules are a way to organize code into separate files or units of functionality. They allow developers to write reusable code and improve the maintainability and scalability of their applications. There are two main types of modules in JavaScript:

1. CommonJS modules: This is the module format used in Node.js. It uses the `require()` function to import modules and the `module.exports` object to export them.
2. ES6 modules: This is the module format introduced in ECMAScript 2015, also known as ES6. It uses the `import` statement to import modules and the `export` keyword to export them. ES6 modules can be used both in Node.js and in modern web browsers that support them.

Both CommonJS and ES6 modules can be used to create reusable code libraries and to organize code within a single application.

```html
<script type="module" src="back.js"></script>
<script type="module" src="script.js"></script>
```

```js
//back.js
--
export default back;

//script,js
import back from './back.js';
```

_**Export**_ You can export a function or variable from any file.There are two types of exports: Named and Default.

- `Named Exports` - You can create named exports two ways. In-line individually, or all at once at the bottom.

```js
export const name = "Jesse"; // In-line individually
export const age = 40;

const name = "Jesse";
const age = 40;
export { name, age }; // All at once at the bottom
```

- `Default Exports` - You can only have one default export in a file.

```js
export default function () {
  const name = "Jesse";
  const age = 40;
  return name + " is " + age + "years old.";
}
```

_**import**_

```js
import "./shopping.js";
```

_ECMAScript modules_ - ECMAScript modules were introduced with ES6: They stand firmly in the tradition of JavaScript modules and share many of the characteristics of existing module systems:

1. With CommonJS, ES modules share the compact syntax, better syntax for single exports than for named exports (so far, we have only seen named exports) and support for cyclic dependencies.
2. With AMD, ES modules share a design for asynchronous loading and configurable module loading (e.g. how specifiers are resolved).

ES modules also have new benefits:

1. Their syntax is even more compact than CommonJS’s.
2. Their modules have a static structure (that can’t be changed at runtime). That enables static checking, optimized access of imports, better bundling (delivery of less code) and more.
3. Their support for cyclic imports is completely transparent.

This is an example of ES module syntax:

```js
import {importedFunc1} from 'other-module1';
import {importedFunc2} from 'other-module2';
function internalFunc() {
···
}
export function exportedFunc() {
importedFunc1();
importedFunc2();
internalFunc();
}
```

ECMAScript modules comprise three parts:

1. Declarative module syntax: What is a module? How are imports and exports declared?
2. The semantics of the syntax: How are the variable bindings handled that are created by imports? How are exported variable bindings handled?
3. A programmatic loader API for configuring module loading.

_CommonJS modules_:- The original CommonJS standard for modules was mainly created for server and desktop platforms. It was the foundation of the module system of Node.js where it achieved incredible popularity. Contributing to that popularity were Node’s package manager, npm, and tools that enabled using Node modules on the client side (browserify and webpack).

```js
// Imports
var importedFunc1 = require("other-module1").importedFunc1;
var importedFunc2 = require("other-module2").importedFunc2;
// Body
function internalFunc() {
  // ···
}
function exportedFunc() {
  importedFunc1();
  importedFunc2();
  internalFunc();
}
// Exports
module.exports = {
  exportedFunc: exportedFunc,
};
```

CommonJS can be characterized as follows:

1. Designed for servers.
2. Modules are meant to be loaded synchronously.
3. Compact syntax.

- Client side: AMD (Asynchronous Module Definition) modules:- The AMD module format was created to be easier to use in browsers than the CommonJS format. Its most popular implementation is RequireJS. The following is an example of a RequireJS module.

```js
define(["other-module1", "other-module2"], function (
  otherModule1,
  otherModule2,
) {
  var importedFunc1 = otherModule1.importedFunc1;
  var importedFunc2 = otherModule2.importedFunc2;
  function internalFunc() {
    // ···
  }
  function exportedFunc() {
    importedFunc1();
    importedFunc2();
    internalFunc();
  }
  return {
    exportedFunc: exportedFunc,
  };
});
```

_**Characteristics of JavaScript modules**_ - Looking at CommonJS and AMD, similarities between JavaScript module systems emerge:

1. There is one module per file (AMD also supports more than one module per file).
2. Such a file is basically a piece of code that is executed:
   - Exports: That code contains declarations (variables, functions, etc.). By de-fault, those declarations remain local to the module, but you can mark some of them as exports.
   - Imports: The module can import entities from other modules. Those other modules are identified via module specifiers (usually paths, occasionally URLs).
3. Modules are singletons: Even if a module is imported multiple times, only a single instance of it exists.
4. No global variables are used. Instead, module specifiers serve as global IDs.

## Creating custom module

Creating a custom module in JavaScript involves exporting functions, variables, or objects that can be imported and used in other parts of your codebase. Here's an example of how to create a custom module:

1. Create a new file, myModule.js, in your project directory.
2. In myModule.js, define the functions or variables you want to export. For example:

```javascript
export const PI = 3.14;

export function double(num) {
  return num * 2;
}
```

In this example, we're exporting a constant PI and a function double() that doubles a number.

3. To use these exported functions or variables in another file, you can import them using the import statement. For example, create a new file main.js in the same directory as myModule.js and import the PI constant and double() function like this:

```javascript
import { PI, double } from "./myModule.js";

console.log(PI); // Output: 3.14
console.log(double(5)); // Output: 10
```

In this example, we're importing the PI constant and double() function from myModule.js and using them in main.js.

4. Note that you can also export a default value from a module, which can be imported without using braces. For example, if myModule.js only exports a single value, you can do:

```javascript
export default function square(num) {
  return num * num;
}
```

And import it like this:

```javascript
import square from "./myModule.js";

console.log(square(5)); // Output: 25
```

This imports the default export from myModule.js and assigns it to the variable square.

## Top-Level await (ES2022)

Top-level await is a new feature in JavaScript that allows you to use the `await` keyword outside of an asynchronous function at the top level of your code. This means that you can directly use `await` when importing modules or loading data from external APIs without having to wrap them inside an immediately invoked async function expression (IIFE) or inside an async function.

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

## Module Pattern

The Module Pattern is a design pattern in JavaScript that allows you to create encapsulated and reusable code by creating a self-contained module that can expose public APIs to the outside world while keeping the implementation details hidden from other parts of your code.

Here's an example of the Module Pattern in JavaScript:

```javascript
var myModule = (function () {
  // private variable
  var message = "Hello World!";

  // private function
  function showMessage() {
    console.log(message);
  }

  // public API
  return {
    displayMessage: function () {
      showMessage();
    },
  };
})();

myModule.displayMessage(); // outputs "Hello World!"
```

In this example, we create a new module by defining an immediately invoked function expression (IIFE) that returns an object with the public API of our module. Inside the IIFE, we define private variables and functions that are not exposed to the outside world.

The message variable and the showMessage() function are private, meaning they cannot be accessed from outside the module. The displayMessage() function is part of the public API, so it can be accessed from outside the module.

When we call myModule.displayMessage(), the displayMessage() function calls the private showMessage() function, which displays the message "Hello World!" in the console.

The Module Pattern allows us to create reusable and encapsulated code, avoiding potential naming conflicts with other parts of our code. It also helps to keep our code organized and easier to maintain by hiding implementation details.

## Module Bundlers

A module bundler is a tool that takes pieces of JavaScript and their dependencies and bundles them into a single file, usually for use in the browser. You may have used tools such as Browserify, Webpack, Rollup or one of many others.

It usually starts with an entry file, and from there it bundles up all of the code needed for that entry file.

Visit the following resources to learn more:

- [@article@Let’s learn how module bundlers work](https://www.freecodecamp.org/news/lets-learn-how-module-bundlers-work-and-then-write-one-ourselves-b2e3fe6c88ae/)
- [@video@Module Bundlers Explained](https://www.youtube.com/watch?v=5IG4UmULyoA)

## Webpack

Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.

Visit the following resources to learn more:

- [@article@Webpack Official Website](https://webpack.js.org/)
- [@article@Webpack Documentation](https://webpack.js.org/concepts/)
- [@article@A Complete Guide to Webpack 5](https://www.valentinog.com/blog/webpack)
- [@feed@Explore top posts about Webpack](https://app.daily.dev/tags/webpack?ref=roadmapsh)

## Rollup

Rollup is a module bundler for JavaScript which compiles small pieces of code into something larger and more complex, such as a library or application.

Visit the following resources to learn more:

- [@article@Official Website and Docs](https://rollupjs.org/)
- [@video@How to Set Up JavaScript Bundling Using Rollup](https://www.youtube.com/watch?v=ICYLOZuFMz8)
- [@feed@Explore top posts about Web Development](https://app.daily.dev/tags/webdev?ref=roadmapsh)
