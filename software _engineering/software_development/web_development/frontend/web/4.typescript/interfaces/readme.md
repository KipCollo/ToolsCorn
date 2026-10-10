# Interfaces

Interfaces in TypeScript provide a way to define a contract for a type, which includes a set of properties, methods, and events. It's used to enforce a structure for an object, class, or function argument. Interfaces are not transpiled to JavaScript and are only used by TypeScript at compile-time for type-checking purposes.

Here's an example of defining and using an interface in TypeScript:

```typescript
interface User {
  name: string;
  age: number;
}

const user: User = {
  name: 'John Doe',
  age: 30,
};
```

In this example, the `User` interface defines the structure of the `user` object with two properties, `name` and `age`. The object is then typed as User using a type-assertion: `User`.

## Types vs Interfaces

In TypeScript, both types and interfaces can be used to define the structure of objects and enforce type checks. However, there are some differences between the two.

Types are used to create a new named type based on an existing type or to combine existing types into a new type. They can be created using the type keyword. For example:

```typescript
type Person = {
  name: string;
  age: number;
};

const person: Person = {
  name: 'John Doe',
  age: 30,
};
```

Interfaces, on the other hand, are used to describe the structure of objects and classes. They can be created using the interface keyword. For example:

```typescript
interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: 'John Doe',
  age: 30,
};
```

## Extending Interfaces

In TypeScript, you can extend an interface by creating a new interface that inherits from the original interface using the "extends" keyword. The new interface can include additional properties, methods, or redefine the members of the original interface.

```typescript
interface Shape {
  width: number;
  height: number;
}

interface Square extends Shape {
  sideLength: number;
}

let square: Square = {
  width: 10,
  height: 10,
  sideLength: 10,
};
```

In this example, the `Square` interface extends the `Shape` interface and adds an additional property `sideLength`. A variable of type `Square` must have all the properties defined in both `Shape` and `Square` interfaces.

## Interface Declaration

An `interface` in TypeScript is a blueprint for creating objects with specific structure. An `interface` defines a set of properties, methods, and events that a class or object must implement. The interface is a contract between objects and classes and can be used to enforce a specific structure for objects in your code.

Here is an example of an interface declaration in TypeScript:

```typescript
interface Person {
  firstName: string;
  lastName: string;
  age?: number;

  getFullName(): string;
}
```

In this example, the Person interface defines four properties: `firstName`, `lastName`, `age`, and a method `getFullName()`. The age property is optional, indicated by the `?` symbol. Any class or object that implements the `Person` interface must have these properties and method.

## Hybrid Types

In TypeScript, a hybrid type is a type that combines multiple types into a single type. The resulting type is considered a union of those types. This allows you to specify that a value can have multiple types, rather than just one.

For example, you can create a hybrid type that can accept either a string or a number:

```typescript
type StringOrNumber = string | number;
```

You can also use hybrid types to create more complex types that can represent a combination of several different types of values. For example:

```typescript
type Education = {
  degree: string;
  school: string;
  year: number;
};

type User = {
  name: string;
  age: number;
  email: string;
  education: Education;
};
```
