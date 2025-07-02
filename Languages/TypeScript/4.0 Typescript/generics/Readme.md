# Generics

Generics in TypeScript are a way to write code that can work with multiple data types, instead of being limited to a single data type. Generics allow you to write functions, classes, and interfaces that take one or more type parameters, which act as placeholders for the actual data types that will be used when the function, class, or interface is used.

For example, the following is a generic function that takes a single argument of any data type and returns the same data type:

```typescript
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>('Hello'); // type of output will be 'string'
```

In this example, the `identity` function takes a single argument of any data type and returns the same data type. The actual data type is specified when the function is called by using `<string>` before the argument `"Hello"`.

## Generic Types

Generic types in TypeScript allow you to write objects, functions and classes that work with multiple data types, instead of being limited to a single data type. A generic type is defined using angle brackets `<T>` and can be used as a placeholder for a specific data type. The actual data type is specified when the function or class is used.

For example, the following is a generic function that takes a single argument of any data type and returns the same data type:

```typescript
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>('Hello'); // type of output will be 'string'
```

In this example, the `identity` function takes a single argument of any data type and returns the same data type. The actual data type is specified when the function is called by using `<string>` before the argument `Hello`.

Generics can also be used with classes, interfaces, and object types, allowing them to work with multiple data types as well.

For example:

```typescript
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};
```

## Generic Constraints

Generic constraints in TypeScript allow you to specify the requirements for the type parameters used in a generic type. These constraints ensure that the type parameter used in a generic type meets certain requirements.

Constraints are specified using the `extends` keyword, followed by the type that the type parameter must extend or implement.

```typescript
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  // Now we know it has a .length property, so no more error
  console.log(arg.length);

  return arg;
}

loggingIdentity(3); // Error, number doesn't have a .length property
loggingIdentity({ length: 10, value: 3 }); // OK
```

In this example, the `Lengthwise` interface defines a `length` property. The `loggingIdentity` function uses a generic type parameter `T` that is constrained by the `Lengthwise` interface, meaning that the type parameter must extend or implement the `Lengthwise` interface. This constraint ensures that the length property is available on the argument passed to the `loggingIdentity` function.

```ts
function getItems<Type>(items: Type[]): Type[]{
  return new Array<Type>().concat(items)
}

getItems<number>([1,2,4,5,6]);
getItems<string>(["a","b","c"]);
```
