# Modules

In TypeScript, modules are used to organize and reuse code. There are two types of modules in TypeScript:

- Internal
- External

Internal modules are used to organize code within a file and are also referred to as namespaces. They are defined using the "namespace" keyword.

External modules are used to organize code across multiple files. They are defined using the "export" keyword in one file and the "import" keyword in another file. External modules in TypeScript follow the CommonJS or ES modules standards.

Here is an example of how you can use internal modules in TypeScript:

```typescript
// myModule.ts
namespace MyModule {
  export function doSomething() {
    console.log('Doing something...');
  }
}

// main.ts
/// <reference path="myModule.ts" />
MyModule.doSomething(); // Output: "Doing something..."
```

## Namespaces

In TypeScript, namespaces are used to organize and share code across multiple files. Namespaces allow you to group related functionality into a single unit and prevent naming conflicts.

Here's an example of how you can use namespaces in TypeScript:

```typescript
// myNamespace.ts
namespace MyNamespace {
  export function doSomething() {
    console.log('Doing something...');
  }
}

// main.ts
/// <reference path="myNamespace.ts" />
MyNamespace.doSomething(); // Output: "Doing something..."
```

In this example, we use the `namespace` keyword in the "myNamespace.ts" file to define a namespace "MyNamespace". Within the namespace, we export a function "doSomething".

## Ambient Modules

Ambient modules in TypeScript are used to declare external modules or third-party libraries in a TypeScript program. Ambient modules provide type information for modules that have no TypeScript declarations, but are available in the global scope.

Here's an example of how you can use ambient modules in TypeScript:

```typescript
// myModule.d.ts
declare module 'my-module' {
  export function doSomething(): void;
}

// main.ts
import * as myModule from 'my-module';
myModule.doSomething();
```

In this example, we declare an ambient module "my-module" in the `myModule.d.ts` file. This declaration provides type information for the "my-module" module, including the "doSomething" function that is exported from the module.

## External Modules

In TypeScript, external modules allow you to organize and share code across multiple files. External modules in TypeScript follow the CommonJS or ES modules standards.

Here's an example of how you can use external modules in TypeScript:

```typescript
// myModule.ts
export function doSomething() {
  console.log('Doing something...');
}

// main.ts
import { doSomething } from './myModule';
doSomething(); // Output: "Doing something..."
```

In this example, we use the "export" keyword in the "myModule.ts" file to export the "doSomething" function, making it available for other files to use.

## Namespace Augmentation

In TypeScript, namespace augmentation is a way to extend or modify existing namespaces. This is useful when you want to add new functionality to existing namespaces or to fix missing or incorrect declarations in third-party libraries.

Here's an example of how you can use namespace augmentation in TypeScript:

```typescript
// myModule.d.ts
declare namespace MyModule {
  export interface MyModule {
    newFunction(): void;
  }
}

// main.ts
/// <reference path="myModule.d.ts" />
namespace MyModule {
  export class MyModule {
    public newFunction() {
      console.log('I am a new function in MyModule!');
    }
  }
}

const obj = new MyModule.MyModule();
obj.newFunction(); // Output: "I am a new function in MyModule!"
```

In this example, we use namespace augmentation to add a new function "newFunction" to the "MyModule" namespace. This is done in the declaration file `myModule.d.ts` by declaring a new interface "MyModule" within the "MyModule" namespace and adding the "newFunction" function to it.

## Global Augmentation

In TypeScript, global augmentation is a way to add declarations to the global scope. This is useful when you want to add new functionality to existing libraries or to augment the built-in types in TypeScript.

Here's an example of how you can use global augmentation in TypeScript:

```typescript
// myModule.d.ts
declare namespace NodeJS {
  interface Global {
    myGlobalFunction(): void;
  }
}

// main.ts
global.myGlobalFunction = function () {
  console.log('I am a global function!');
};

myGlobalFunction(); // Output: "I am a global function!"
```

In this example, we declare a new namespace "NodeJS" and add an interface "Global" to it. Within the "Global" interface, we declare a new function "myGlobalFunction".
