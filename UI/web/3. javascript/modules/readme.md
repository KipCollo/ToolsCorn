# Modules

JavaScript modules allow you to break up your code into separate files.This makes it easier to maintain the code-base.
JavaScript modules rely on the import and export statements.

## Export

You can export a function or variable from any file.

Let us create a file named person.js, and fill it with the things we want to export.

There are two types of exports: Named and Default.

### Named Exports

You can create named exports two ways. In-line individually, or all at once at the bottom.

- In-line individually:

```js
export const name = "Jesse";
export const age = 40;
```

- All at once at the bottom:

```js
const name = "Jesse";
const age = 40;

export {name, age};
```

### Default Exports

You can only have one default export in a file.

Example

```js
const message = () => {
const name = "Jesse";
const age = 40;
return name + ' is ' + age + 'years old.';
};

export default message;
```

## Module systems created prior to ES6

Prior to ECMAScript 6, JavaScript did not have built-in modules. Therefore, the flexible syntax of the language was used to implement custom module systems within the language. Two popular ones are CommonJS (targeted at the server side) and AMD (Asynchronous Module Definition, targeted at the client side).

- Server side: CommonJS modules:- The original CommonJS standard for modules was mainly created for server and desktop platforms. It was the foundation of the module system of Node.js where it achieved incredible popularity. Contributing to that popularity were Node’s package manager, npm, and tools that enabled using Node modules on the client side (browserify and webpack).

```js
// Imports
var importedFunc1 = require('other-module1').importedFunc1;
var importedFunc2 = require('other-module2').importedFunc2;
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

- Client side: AMD (Asynchronous Module Definition) modules:- The AMD module format was created to be easier to use in browsers than the CommonJS
format. Its most popular implementation is RequireJS. The following is an example of a RequireJS module.

```js
define(['other-module1', 'other-module2'],
function (otherModule1, otherModule2) {
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

AMD can be characterized as follows:

1. Designed for browsers.
2. Modules are meant to be loaded asynchronously. That’s a crucial requirement for browsers, where code can’t wait until a module has finished downloading. It has
to be notified once the module is available.
3. The syntax is slightly more complicated. On the plus side, AMD modules can be executed directly, without customized creation and execution of source code (think
eval()). That is not always permitted on the web.

### Characteristics of JavaScript modules

Looking at CommonJS and AMD, similarities between JavaScript module systems emerge:

1. There is one module per file (AMD also supports more than one module per file).
2. Such a file is basically a piece of code that is executed:
   - Exports: That code contains declarations (variables, functions, etc.). By de-fault, those declarations remain local to the module, but you can mark some
of them as exports.
   - Imports: The module can import entities from other modules. Those other modules are identified via module specifiers (usually paths, occasionally URLs).
3. Modules are singletons: Even if a module is imported multiple times, only a single
instance of it exists.
4. No global variables are used. Instead, module specifiers serve as global IDs.

## ECMAScript modules

ECMAScript modules were introduced with ES6: They stand firmly in the tradition of JavaScript modules and share many of the characteristics of existing module systems:

1. With CommonJS, ES modules share the compact syntax, better syntax for single exports than for named exports (so far, we have only seen named exports) and support
for cyclic dependencies.
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

From now on, “module” means “ECMAScript module”.
24.3.1 ECMAScript modules: three parts

ECMAScript modules comprise three parts:

1. Declarative module syntax: What is a module? How are imports and exports declared?
2. The semantics of the syntax: How are the variable bindings handled that are created by imports? How are exported variable bindings handled?
3. A programmatic loader API for configuring module loading.
Parts 1 and 2 were introduced with ES6. Work on Part 3 is ongoing.
24.4 Named exports
Each module can have zero or more named exports.
As an example, consider the following three files:
