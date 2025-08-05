# Classes

Classes in TypeScript are a blueprint for creating objects (instances of a class), providing a way to structure objects and encapsulate data and behavior. Classes in TypeScript have a similar syntax to classes in other object-oriented programming languages, such as Java and C#.

A class in TypeScript is defined using the class keyword, followed by the name of the class. The class definition can include fields (also known as properties or attributes), methods (functions), and a constructor.

TypeScript offers full support for the class keyword introduced in ES2015.Class groups variables(properties) and functions(methods) that are highly related.
TypeScript adds type annotations and other syntax to allow you to express relationships between classes and other types.

Syntax:

```ts
class Point {}
```

## Fields

A field declaration creates a public writeable property on a class:

```ts
class Point {
  x: number;
  y: number;
}
 
const pt = new Point();
pt.x = 0;
pt.y = 0;
```

## Constructors

Class constructors are very similar to functions. You can add parameters with type annotations, default values, and overloads:

```ts
class Point {
  x: number;
  y: number;
 
  // Normal signature with defaults
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}
```

## Constructor Params

In TypeScript, constructor parameters can be declared with access modifiers (e.g. `public`, `private`, `protected`) and/or type annotations. The parameters are then automatically assigned to properties of the same name within the constructor, and can be accessed within the class. For example:

```ts
class Example {
  constructor(private name: string, public age: number) {}
}
```

In this example, the constructor has two parameters: name and age. name has a private access modifier, so it can only be accessed within the Example class. age has a public access modifier, so it can be accessed from outside the class as well.

## Constructor Overloading

In TypeScript, you can achieve constructor overloading by using multiple constructor definitions with different parameter lists in a single class. Given below is the example where we have multiple definitions for the constructor:

```ts
class Point {
  // Overloads
  constructor(x: number, y: string);
  constructor(s: string);
  constructor(xs: any, y?: any) {
    // TBD
  }
}
```

Note that, similar to function overloading, we only have one implementation of the consructor and it's the only the signature that is overloaded.

## Access Modifiers

In TypeScript, access modifiers are keywords used to control the visibility and accessibility of class properties and methods. There are three access modifiers in TypeScript:

- `public:` This is the default access modifier. Properties and methods declared as public can be accessed from anywhere, both inside and outside the class.
- `private:` Properties and methods declared as private can only be accessed within the same class. They are not accessible from outside the class.
- `protected:` Properties and methods declared as protected can be accessed within the class and its subclasses. They are not accessible from outside the class and its subclasses.

Access modifiers in TypeScript allow you to define the level of visibility and accessibility of properties and methods in your class, making your code more maintainable and secure.

```ts
class Animal {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log(`${this.name} is making a sound`);
  }
}

const dog = new Animal('Dog');
dog.makeSound(); // Output: Dog is making a sound
```

In this example, the `Animal` class has a name field, a constructor that sets the value of the `name` field, and a `makeSound` method. An instance of the `Animal` class can be created using the `new` keyword, and its methods and properties can be accessed using dot notation.

## Abstract Classes

Abstract classes in TypeScript are classes that cannot be instantiated on their own and must be subclassed by other classes. Abstract classes provide a blueprint for other classes and can have abstract methods, which are methods without a body and must be overridden by the subclass. These classes are useful for defining a common interface or basic functionality that other classes can inherit and build upon.

```ts
abstract class Animal {
  abstract makeSound(): void;

  move(): void {
    console.log('moving...');
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log('bark');
  }
}
```

## Inheritance vs Polymorphism

Inheritance and polymorphism are two fundamental concepts in object-oriented programming, and they are supported in TypeScript as well.

Inheritance refers to a mechanism where a subclass inherits properties and methods from its parent class. This allows a subclass to reuse the code and behavior of its parent class while also adding or modifying its own behavior. In TypeScript, inheritance is achieved using the extends keyword.

Polymorphism refers to the ability of an object to take on many forms. This allows objects of different classes to be treated as objects of a common class, as long as they share a common interface or inheritance hierarchy. In TypeScript, polymorphism is achieved through method overriding and method overloading.

```ts
class Animal {
  makeSound(): void {
    console.log('Making animal sound');
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log('Bark');
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log('Meow');
  }
}

let animal: Animal;

animal = new Dog();
animal.makeSound(); // Output: Bark

animal = new Cat();
animal.makeSound(); // Output: Meow
```

## Method Overriding

In TypeScript, method overriding is a mechanism where a subclass provides a new implementation for a method that is already defined in its parent class. This allows the subclass to inherit the behavior of the parent class, but change its behavior to fit its own needs.

To override a method in TypeScript the signature of the method in the subclass must match exactly with the signature of the method in the parent class.

```typescript
class Animal {
  makeSound(): void {
    console.log('Making animal sound');
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log('Bark');
  }
}

let animal: Animal;

animal = new Dog();
animal.makeSound(); // Output: Bark
```

In this example, the `Dog` class overrides the makeSound method defined in the Animal class and provides its own implementation. When the `makeSound` method is called on an instance of the `Dog` class, it will use the implementation in the `Dog` class rather than the implementation in the `Animal` class.

## Built in Classes

1. RegExp
2. Set
3. Array
