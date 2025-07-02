# TypeScript

TypeScript is a statically-typed programming language that is a superset of JavaScript. It was developed and is maintained by Microsoft. TypeScript was created to address the challenges of building large-scale JavaScript applications and adds optional type annotations, classes, interfaces, and other features to the language.

The main benefits of using TypeScript include:

- Type Safety:- Keeps your app free from Type Errors.
- Improved Tooling
- Improved Maintainability
- Backwards Compatibility

## TypeScript vs JavaScript

TypeScript is a superset of JavaScript that adds optional type annotations and other features such as interfaces, classes, and namespaces. JavaScript is a dynamically-typed language that is primarily used for client-side web development and can also be used for server-side development.

Here are a few key differences between TypeScript and JavaScript:

- **Types**: TypeScript has optional type annotations while JavaScript is dynamically-typed. This means that in TypeScript, you can specify the data type of variables, parameters, and return values, which can help catch type-related errors at compile-time.
- **Syntax**: TypeScript extends JavaScript syntax with features like interfaces, classes, and namespaces. This provides a more robust and organized structure for large-scale projects.
- **Tooling**: TypeScript has better tooling support, such as better editor integration, type checking, and code refactoring.
- **Backwards Compatibility**: TypeScript is fully compatible with existing JavaScript code, which means you can use TypeScript in any JavaScript environment.

## TS/JS Interoperability

TypeScript and JavaScript have full interoperability, meaning you can use TypeScript code in JavaScript projects and vice versa. TypeScript is a superset of JavaScript, which means that any valid JavaScript code is also valid TypeScript code.

You can use JavaScript libraries in TypeScript projects by either including the JavaScript files directly or using type definitions for the library. Type definitions provide type information for JavaScript libraries, making it easier to use them in TypeScript.

On the other hand, you can use TypeScript code in JavaScript projects by simply compiling the TypeScript code into JavaScript. The generated JavaScript code can be used in any JavaScript environment, and it will work the same way as regular JavaScript code.

## Fundamentals

Typescript is a superset of Javascript.It supports strong typing, object-oriented features and compile-time errors detection & offers great tooling.

Browsers doesn't understand Javascript.It is transpiled(compiled) to javascript

  Typescript ----------------->Javascript

- Type annotations
- Arrow functions
- Interfaces
- Classes
- Modules
- Access Modifiers

## Installing Typescript

To install the TypeScript Compiler tsc globally. You can use npx or similar tools if you’d prefer to run tsc from a local node_modules package instead.

```js
npm install -g typescript
```

To check if it's installed use the command:

```ts
tsc --version
```

To transpile file from js to ts, use the command:

```ts
tsc <filename.ts>
```

However it's transpiled under the hood in frameworks.Typescript is supported by all major libraries and frameworks.

To create a typescript code:-

1. Create a package json file i.e npm init.
2. Initialize typescript i.e tsc --init.
