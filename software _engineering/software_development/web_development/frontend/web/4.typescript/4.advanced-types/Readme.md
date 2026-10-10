# Advanced Types

Advanced types in TypeScript are a set of advanced type constructs that allow for more complex and expressive type systems. Some of the most commonly used advanced types in TypeScript include:

- Intersection Types
- Union Types
- Type Aliases
- Conditional Types
- Index Types
- Mapped Types
- Type Guards

These advanced types allow for more complex and expressive type systems, and enable you to write code that is safer, more maintainable, and easier to understand. By leveraging these advanced types, you can write code that is more robust, less prone to errors, and easier to maintain.

## Mapped Types

Mapped types in TypeScript are a way to create a new type based on an existing type, where each property of the existing type is transformed in some way. Mapped types are declared using a combination of the `keyof` operator and a type that maps each property of the existing type to a new property type.

For example, the following is a mapped type that takes an object type and creates a new type with all properties of the original type but with their type changed to `readonly`:

```typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

let obj = { x: 10, y: 20 };
let readonlyObj: Readonly<typeof obj> = obj;
```

In this example, the `Readonly` mapped type takes an object type `T` and creates a new type with all properties of `T` but with their type changed to `readonly`. The keyof `T` operator is used to extract the names of the properties of `T`, and the `T[P]` syntax is used to access the type of each property of `T`. The `readonly` keyword is used to make the properties of the new type `readonly`.

## Conditional Types

Conditional types in TypeScript are a way to select a type based on a condition. They allow you to write a type that dynamically chooses a type based on the types of its inputs. Conditional types are declared using a combination of the `infer` keyword and a type that tests a condition and selects a type based on the result of the test.

For example, the following is a conditional type that takes two types and returns the type of the first argument if it extends the second argument, and the type of the second argument otherwise:

```typescript
type Extends<T, U> = T extends U ? T : U;

type A = Extends<string, any>; // type A is 'string'
type B = Extends<any, string>; // type B is 'string'
```

In this example, the Extends conditional type takes two types T and U and returns the type of the first argument `T` if it extends the second argument `U`, and the type of the second argument `U` otherwise. The T extends `U` syntax is used to test whether `T extends U`, and the `? T : U` syntax is used to select the type `T` if the test passes and the type `U` otherwise.

## Literal Types

Literal types in TypeScript are a way to specify a value exactly, rather than just a type. Literal types can be used to enforce that a value must be of a specific type and a specific value. Literal types are created by using a literal value, such as a string, number, or boolean, as a type.

For example, the following is a literal type that represents a value of 42:

```typescript
type Age = 42;

let age: Age = 42; // ok
let age: Age = 43; // error
```

In this example, the `Age` literal type is created by using the number `42` as a type. This type can then be used to enforce that a value must be of type `number` and have the value `42`.

## Template Literal Types

Template literal types in TypeScript are a way to manipulate string values as types. They allow you to create a type based on the result of string manipulation or concatenation. Template literal types are created using the backtick (``) character and string manipulation expressions within the type.

For example, the following is a template literal type that concatenates two strings:

```typescript
type Name = `Mr. ${string}`;

let name: Name = `Mr. Smith`;  // ok
let name: Name = `Mrs. Smith`;  // error
```

In this example, the `Name` template literal type is created by concatenating the string `"Mr. "` with the type `string`. This type can then be used to enforce that a value must be a string that starts with `"Mr. "`.

## Recursive Types

Recursive types in TypeScript are a way to define a type that references itself. Recursive types are used to define complex data structures, such as trees or linked lists, where a value can contain one or more values of the same type.

For example, the following is a recursive type that represents a linked list:

```typescript
type LinkedList<T> = {
  value: T;
  next: LinkedList<T> | null;
};

let list: LinkedList<number> = {
  value: 1,
  next: { value: 2, next: { value: 3, next: null } },
};
```

In this example, the `LinkedList` type is defined as a type that extends `T` and contains a property `next` of the same type `LinkedList<T>`. This allows us to create a linked list where each node contains a value of type `T` and a reference to the next node in the list.
