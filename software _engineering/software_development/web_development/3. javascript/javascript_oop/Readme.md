# OOP

Object-oriented programming(OOP)is a programming paradigm based on concepts of objects.Objects can contain data(properties) and code(methods).By using objects,we pack data and corresponding behavior in one block.
OOP was developed with goal of organizing code,to make it flexible and easier to maintain(avoid spaghetti)

- Inheritance
- Encapsulation
- Polymorphism
- Abstraction

In JavaScript, OOPs is based on the concept of prototypes, which is different from class-based OOPs in other languages like Java and C++.

In JavaScript, every object has a prototype object, which acts as a template for the object. When a property or method is accessed on an object, JavaScript first looks for that property or method on the object itself. If it's not found, JavaScript looks for it on the object's prototype. If it's still not found, JavaScript continues up the prototype chain until it reaches the Object.prototype, which is the root of the prototype chain.

To create an object in JavaScript, we can use either the object literal notation or the Object() constructor. For example, here's how we can create an object using the object literal notation:

```javascript
const person = {
  name: 'Alice',
  age: 30,
  gender: 'female',
  walk() {
    console.log(`${this.name} is walking.`);
  },
  talk() {
    console.log(`${this.name} is talking.`);
  }
};

```

In this example, we create an object called "person" that has properties for the person's name, age, and gender, as well as methods for walking and talking.

We can also create objects using constructor functions, which act as blueprints for creating objects with shared properties and methods. For example:

```javascript
function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

Person.prototype.walk = function() {
  console.log(`${this.name} is walking.`);
};

Person.prototype.talk = function() {
  console.log(`${this.name} is talking.`);
};

const person1 = new Person('Alice', 30, 'female');
const person2 = new Person('Bob', 40, 'male');

person1.walk(); // logs "Alice is walking."
person2.talk(); // logs "Bob is talking."
```

In this example, we define a constructor function called "Person" that takes in arguments for the person's name, age, and gender, and sets those properties on the newly created object using this. We then add the walk() and talk() methods to the Person.prototype object, which will be shared by all instances of the "Person" object.

Overall, JavaScript's approach to OOPs is based on prototypes rather than classes, which can take some getting used to if you are coming from a class-based OOPs language. However, once you understand the concept of prototypes and how they work, you can create powerful and flexible object-oriented code in JavaScript.


## Prototypes

Prototype is used to add new properties and methods to an existing object construction.
In JavaScript, every object has a prototype object, which acts as a template for the object. When a property or method is accessed on an object, JavaScript first looks for that property or method on the object itself. If it's not found, JavaScript looks for it on the object's prototype. If it's still not found, JavaScript continues up the prototype chain until it reaches the Object.prototype, which is the root of the prototype chain.
To demonstrate how prototypes work in JavaScript, let's create an object and a constructor function, and add some properties and methods to their prototypes.

```javascript
// create an object
const person = {
  name: 'Alice',
  age: 30,
  gender: 'female'
};

// add a method to the object's prototype
person.walk = function() {
  console.log(`${this.name} is walking.`);
};

// create a constructor function
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

// add a method to the constructor function's prototype
Car.prototype.start = function() {
  console.log(`Starting the ${this.make} ${this.model}.`);
};

// create an instance of the Car object
const car1 = new Car('Toyota', 'Corolla', 2020);

// access properties and methods on the object and its prototype
console.log(person.name); // logs "Alice"
person.walk(); // logs "Alice is walking."
console.log(car1.make); // logs "Toyota"
car1.start(); // logs "Starting the Toyota Corolla."
console.log(car1.__proto__)
```

In this example, we create an object called "person" with properties for the person's name, age, and gender. We then add a walk() method to the person object's prototype using dot notation.

Next, we create a constructor function called "Car" that takes in arguments for the car's make, model, and year, and sets those properties on the newly created object using this. We then add a start() method to the Car.prototype object using dot notation.

Finally, we create an instance of the "Car" object called "car1". We can access properties and methods on the object and its prototype using dot notation.

Note that adding methods to an object's prototype instead of the object itself can be more memory-efficient, as the method is shared by all instances of the object rather than being duplicated for each instance. It can also make the code more readable and easier to maintain, as all the methods are grouped together in one place.


**Prototypal inheritance** - Objects inherit properties and methods from a prototype accessible to all objects linked to that protoype.Every JavaScript object has a prototype from which it can inherit properties and methods.Prototype chain enables inheritance.
Prototypal inheritance is a mechanism in JavaScript that allows objects to inherit properties and methods from other objects, known as their prototypes. When a property or method is accessed on an object, JavaScript first looks for it directly on the object, and if it's not found, it looks for it on the object's prototype, and then on the prototype's prototype, and so on, following the prototype chain until the property or method is found or until the end of the chain is reached (which is the object `Object.prototype`, the final fallback).

The prototype chain is the chain of prototypes that an object follows to access properties and methods. Each object has an internal property called `[[Prototype]]` (also accessible via the `__proto__` property) that points to its prototype object. When an object is created using object literals, the default prototype is `Object.prototype`. However, you can create custom prototypes by defining constructor functions and setting their `prototype` property to an object that will be used as the prototype for the objects created with that constructor function.


*Prototypal inheritance on Built-in objects in JavaScript* - Prototypal inheritance is a fundamental concept in JavaScript that allows objects to inherit properties and methods from other objects. In the case of built-in objects, such as arrays or strings, they inherit their properties and methods from their prototype object. This means that any instance of an array, for example, will have access to all the properties and methods defined on the Array.prototype object. Similarly, instances of strings will have access to the properties and methods defined on the String.prototype object. This feature makes JavaScript highly flexible and extensible.

```js
const num = [1,2]
num.map(...)

//Array.protoype.map()
//num.__proto__.__proto__
```

*Ways of implementing protypal inheritance* -

1. `Object.create()` -  can create objects with a specific prototype.
2. `Constructor functions` - Techniques to create objects from a function.How built in objects like Arrays,Maps or Sets are actually implemented.
3. `ES6 classes` - Modern alternative to constructor function syntax."Syntatic sugar" behind the scenes,Es6 classes work exactly like constructor funtion.Does not behave like classes in classical OOP.


## Object.create

In JavaScript, you can use the `Object.create()` method to create a new object with an existing object as its prototype. Here's an example:

```js
const parent = {
  sayHello: function() {
    console.log('Hello!');
  }
};

const child = Object.create(parent);
child.sayHello(); // outputs "Hello!"
```

In this example, the `parent` object is the prototype of the `child` object. The `sayHello()` method is defined on the `parent` object, but it can be called on the `child` object because of the prototype chain.

You can also pass a second argument to `Object.create()` to define additional properties for the new object. For example:

```js
const child = Object.create(parent, {
  name: { value: 'Alice' }
});

console.log(child.name); // outputs "Alice"
```

In JavaScript, the `Object.create()` method is used to create a new object with the specified prototype object and properties. Here's an example of how to use it:

```js
// Create a prototype object
const personPrototype = {
  greet: function() {
    console.log(`Hello, my name is ${this.name}.`);
  }
};

// Create a new object with personPrototype as its prototype
const person1 = Object.create(personPrototype);

// Add properties to person1
person1.name = "John";
person1.age = 30;

// Call the greet method on person1
person1.greet(); // Output: Hello, my name is John.
```

In this example, we first create a `personPrototype` object that has a `greet` method. We then use `Object.create()` to create a new object called `person1`, with `personPrototype` as its prototype. We add some properties to `person1`, including `name` and `age`. Finally, we call the `greet` method on `person1`, which outputs "Hello, my name is John."


## Constructor functions

Object constructor function: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor
In JavaScript, a constructor function is a function that is used to create and initialize objects created with the new keyword.
Constructor functions in JavaScript are used to create objects with shared properties and methods. Here's an example of how to use a constructor function:

Here's an example of a constructor function for creating a Person object:

```javascript
function Person(){console.log(this)} //Person{}
function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.walk = function() {// do not create method in constructor function,causes performance issues instead use prototypal inheritance
    console.log(`${this.name} is walking.`);
  };
}
// add a method to the constructor function's prototype
Person.prototype.walk = function() {
  console.log(`${this.name} is walking.`);
};
```

In this example, we define a constructor function called Person that takes in arguments for the person's name, age, and gender. Inside the constructor function, we use the this keyword to set those properties on the newly created object. We also define a walk() method on the object using a function expression.

To create a new Person object using the constructor function, we use the new keyword:
```javascript
const person1 = new Person('Alice', 30, 'female');
```

In this example, we create a new Person object called person1 and pass in the arguments 'Alice', 30, and 'female' to the constructor function.

We can then access the properties and methods on the person1 object using dot notation:

```javascript
console.log(person1.name); // logs "Alice"
person1.walk(); // logs "Alice is walking."
```

Note that using a constructor function to create objects can be more memory-efficient than using object literals, as methods defined inside the constructor function are shared by all instances of the object. Additionally, using a constructor function can make the code more modular and easier to read and maintain.

`Static method` - 

```js
Person.hello = function(){...}
```

**new keyword in JavaScript** - In JavaScript, the new keyword is used to create a new instance of an object that was defined with a constructor function.
When you use the new keyword with a constructor function, JavaScript creates a new object and sets its prototype property to the prototype property of the constructor function. It then calls the constructor function with the this keyword set to the newly created object.

Here's an example:

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person('Alice', 30);
console.log(person1.name); // logs "Alice"
console.log(person1.age); // logs 30
```

In this example, we define a constructor function called Person that takes in arguments for the person's name and age. We then create a new instance of the Person object using the new keyword and passing in the arguments 'Alice' and 30.
When we log the person1.name and person1.age properties, we can see that they have been set to the values we passed in to the constructor function.

Note that using the new keyword with a constructor function is important for setting up the prototype chain correctly. Without the new keyword, the this keyword inside the constructor function would refer to the global window object instead of the new object that you're trying to create.


1. Define the constructor function: 
```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}
```

2. Create new instances of the object using the `new` keyword:
```js
let person1 = new Person('John', 30);
let person2 = new Person('Jane', 25);
```

3. Access the object's properties using dot notation:
```js
console.log(person1.name); // Output: John
console.log(person2.age); // Output: 25
```

You can also add methods to the constructor function's prototype, which will be shared by all instances of the object:
```js
Person.prototype.sayHello = function() {
  console.log(`Hello, my name is ${this.name}.`);
}

person1.sayHello(); // Output: Hello, my name is John.
person2.sayHello(); // Output: Hello, my name is Jane.
```


## ES6 Classes

Classes: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

ES6 introduced classes in JavaScript. Classes in javascript can be used to create new Objects with the help of a constructor, each class can only have one constructor inside it.Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are unique to classes.
JavaScript classes are a way to define objects with shared properties and behaviors.They provide a template for creating multiple instances of objects with similar characteristics.
ES6 classes in JavaScript are a syntactic sugar that provides a cleaner and more concise way of defining constructor functions and creating objects with prototype-based inheritance. They use the `class` keyword to define a constructor function, which can have a constructor method, instance methods, and static methods. ES6 classes also support inheritance through the use of the `extends` keyword, allowing for easier code reuse and organization.

Classes are not hoisted.Class are first class citizens.

**Defining classes** - A class can be defined in two ways: a class expression or a class declaration.
Use the keyword class to create a class.

```js
class ClassName {
  constructor() { ... }
}
```

Example - 

```js
// Declaration
class Rectangle {}

// Expression; the class is anonymous but assigned to a variable
const Rectangle = class {};

// Expression; the class has its own name
const Rectangle = class Rectangle2 {};
```

When you have a class, you can use the class to create objects:

```js
const myCar1 = new Car("Ford", 2014);
```

The this keyword refers to the object from which the function was called.
The new keyword is used to create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.

"use strict":- The syntax in classes must be written in "strict mode".You will get an error if you do not follow the "strict mode" rules.

**Class body** - The body of a class is the part that is in curly braces {} . This is where you define class members, such as methods or constructor.
The body of a class is executed in strict mode even without the "use strict" directive.

A class element can be characterized by three aspects:
- Kind: Getter, setter, method, or field
- Location: Static or instance
- Visibility: Public or private

*Constructor* - The constructor method is a special method for creating and initializing an object created with a class. There can only be one special method with the name "constructor" in a class — a SyntaxError is thrown if the class contains more than one occurrence of a constructor method.
A constructor can use the super keyword to call the constructor of the super class.It is called automatically when a new object is created.
The constructor method is a special method:

1. It has to have the exact name "constructor"
2. It is executed automatically when a new object is created
3. It is used to initialize object properties

If you do not define a constructor method, JavaScript will add an empty constructor method.
You can create instance properties inside the constructor:

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
    this.area = []
  }
}
```

*Static initialization blocks* - Static initialization blocks allow flexible initialization of static properties, including the evaluation of statements during initialization, while granting access to the private scope.
Multiple static blocks can be declared, and these can be interleaved with the declaration of static fields and methods (all static items are evaluated in declaration order).

*Methods* - Methods are defined on the prototype of each class instance and are shared by all instances. Methods can be plain functions, async functions, generator functions, or async generator functions.
Class methods are created with the same syntax as object methods.

```js
class ClassName {
  constructor() { ... }
  //method will be added to .prototype property
  method_1() { ... }
  method_2() { ... }
  method_3() { ... }
}
```

`Chaining methods for custom functions` - Chaining methods in JavaScript is a technique where multiple methods are called on the same object in sequence, with each method returning the object itself, allowing for a fluent syntax. 
To create custom functions that can be chained together, you need to modify the function so that it returns the object itself at the end of the function definition, like so:

```js
function myFunction(param) {
  // do something with param
  return this;
}
```

By returning `this` (which refers to the object the function is called on), you allow the next function in the chain to be called on the same object. Here's an example:

```js
const myObject = {
  value: 0,
  increment() {
    this.value++;
    return this;
  },
  multiply(n) {
    this.value *= n;
    return this;
  }
}

myObject.increment().multiply(3);
console.log(myObject.value); // Output: 3
```

In this example, the `increment()` and `multiply()` methods both return `this`, enabling them to be chained together in a single statement.


**Static methods and fields** - The static keyword defines a static method or field for a class. Static properties (fields and methods) are defined on the class itself instead of each instance. Static methods are often used to create utility functions for an application, whereas static fields are useful for caches, fixed-configuration, or any other data that doesn't need to be replicated across instances.

In JavaScript, static methods are methods that are defined on a class and can be called on the class itself, rather than on an instance of the class. These methods are typically used for utility functions or operations that don't depend on any specific instance of the class. To define a static method in JavaScript, you can use the `static` keyword before the method name. For example:

```js
class MyClass {
  static myStaticMethod() {
    console.log('This is a static method.');
  }
}

MyClass.myStaticMethod(); // Outputs: "This is a static method."
```

Note that unlike instance methods, static methods cannot access instance-specific properties or methods using `this`. Instead, they operate solely on the class itself or any arguments passed into them.

Static class methods are defined on the class itself.You cannot call a static method on an object, only on an object class.

```js
 class Car {
  constructor(name) {
    this.name = name;
  }
  static hello() {
    return "Hello!!";
  }
}

const myCar = new Car("Ford");

// You can call 'hello()' on the Car Class:
document.getElementById("demo").innerHTML = Car.hello();

// But NOT on a Car Object:
// document.getElementById("demo").innerHTML = myCar.hello();
// this will raise an error. 
```


**Setters and Getters** - Setters and getters are functions in JavaScript that allow you to define object properties with special behavior. A setter function is used to set the value of a property, while a getter function is used to retrieve the value of a property. They can be useful for enforcing data validation, accessing private variables, or triggering side effects when a property is accessed or modified. In ES6 and later versions of JavaScript, setters and getters can be defined using the `set` and `get` keywords respectively.
Getters and setters are special methods used to get and set the values of object properties, respectively. They provide control over property access and enable data validation and encapsulation

```javascript
class Rectangle {
  constructor(height, width) {
    this._height = height;
    this._width = width;
  }

  get height() {
    return this._height;
  }

  set height(value) {
    if (value <= 0) {
      throw new Error('Height must be positive');
    }
    this._height = value;
  }

  get width() {
    return this._width;
  }

  set width(value) {
    if (value <= 0) {
      throw new Error('Width must be positive');
    }
    this._width = value;
  }

  get area() {
    return this._height * this._width;
  }
}

const rectangle1 = new Rectangle(10, 20);
console.log(rectangle1.height); // logs 10
console.log(rectangle1.width); // logs 20
console.log(rectangle1.area); // logs 200

rectangle1.height = 5;
console.log(rectangle1.height); // logs 5

rectangle1.width = 0; // throws an error
```

In this example, we define a class called Rectangle with properties for height and width. We define getter methods for the height and width properties, as well as a setter method for each property that checks if the value being set is positive. We also define a getter method for the area property, which calculates the area of the rectangle based on its height and width.

We then create a new Rectangle object called rectangle1 with a height of 10 and a width of 20. We log the height, width, and area properties of rectangle1 to the console.
We then set the height property of rectangle1 to 5, and log the height property again to verify that it was set correctly.
Finally, we try to set the width property of rectangle1 to 0, which throws an error because the width value must be positive according to the setter method.

To use ES6 classes in JavaScript, you can follow these basic steps:

1. Define a class using the `class` keyword followed by the class name.
2. Define the class constructor method using the `constructor` keyword.
3. Add class methods to the class using the regular function syntax within the class definition.
4. Create an instance of the class using the `new` keyword followed by the class name and any arguments required for the constructor.

Here's an example:

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  sayHi() {
    console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

const john = new Person('John', 30);
john.sayHi(); // logs "Hi, my name is John and I'm 30 years old."
```

In this example, we define a `Person` class with a constructor that takes a `name` and `age` argument. We also add a `sayHi` method to the class that logs a message to the console. We then create a `john` object as an instance of the `Person` class using the `new` keyword, passing in the necessary arguments to the constructor. Finally, we call the `sayHi` method on the `john` object to log the message to the console.

**Instance** -Objects(instances) are instantiated from a class,which functions like a blueprint.


## Inheritance

Inheritance is a mechanism in JavaScript where an object can inherit properties and methods from another object. It allows for code reuse and creating hierarchical relationships between objects.

*Inheritance vs classes* - In JavaScript, classes are blueprints for creating objects with specific properties and methods. Inheritance, on the other hand, is a mechanism that allows an object to inherit properties and methods from another object. 
Classes provide a way to define objects with similar behavior and characteristics in a reusable way. They can be used to create multiple instances of an object with their own unique characteristics.

Inheritance allows objects to share properties and methods with other objects, which can simplify code and avoid repetition. It provides a way to create new objects based on existing ones, inheriting their properties and methods while also adding or modifying them as needed.

In summary, classes are used to define objects while inheritance is a mechanism for sharing properties and methods between objects.

```js
const Person = functin(fname,birthYear){
  this.fname = fname;
  this.birthYear = birthYear;
}
Person.prototype = function sayHi() {
    console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old.`);
  }
// const Student = functin(fname,birthYear,course){
//   this.fname = fname;
//   this.birthYear = birthYear;
//   this.course = course;
// }
const Student = functin(fname,birthYear,course){
  Person.call(this,fname,birthYear)
  this.course = course;
}
student.sayHi()//undefined
//Linking prototypes
Student.prototype = Object.create(Person.prototype)
student.sayHi()//consoles to log


class Person{
  constructor(fname,birthYear){
    this.fname = fname;
    this.birthYear = birthYear;
  }
  sayHi() {
    console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

class Student{
  constructor(fname,birthYear,course){
    //Always needs to happen first
    super(fname,birthYear)
    this.course = course
  }
}

const Student = Object.create(Person)
const student1 = Object.create(Student)
```


## Encapsulation

Encapsulation in JavaScript refers to the practice of binding data and functions within a single unit, called a class or object, and restricting access to them from outside. 

**Protected Properties and Methods** - In terms of protected properties and methods, encapsulation allows you to define properties and methods as "protected," meaning they can only be accessed from within the class or object, or from derived classes.
To create protected properties in JavaScript, you can use the underscore (_) prefix to indicate that a property should not be accessed outside the class or object. For example:

```js
class MyClass {
  constructor() {
    this._myProtectedProperty = 'some value';
  }
}
```

To create protected methods, you can either use the same underscore prefix or define the method inside the class using the `#` symbol. For example:

```js
class MyClass {
  _myProtectedMethod() {
    // some code
  }
  
  #myOtherProtectedMethod() {
    // some other code
  }
}
```

By using encapsulation and defining properties and methods as protected, you can help ensure that your code is more secure, maintainable, and less prone to errors caused by unintended external access.


**Private Class Fields and Methods** - Encapsulation refers to the principle of wrapping data and functions into a single unit, such as a class, in order to control access to that data and functions from outside the class. Private class fields and methods are a way to implement encapsulation in JavaScript.

Private class fields are class properties that can only be accessed or modified from within the class itself, and not from outside it. They are marked with the hash symbol (#) before their name:

```js
class MyClass {
  #privateField = "private";

  publicMethod() {
    console.log(this.#privateField);
  }
}
```

In this example, `#privateField` is a private field that can only be accessed from within the `MyClass` class.

Private class methods are similar, but they are methods that can only be called from within the class itself:

```js
class MyClass {
  #privateMethod() {
    console.log("private method");
  }

  publicMethod() {
    this.#privateMethod();
  }
}
```

In this example, `#privateMethod` is a private method that can only be called from within the `MyClass` class.

Using private class fields and methods helps to prevent unintentional modification of class data and ensures that certain functionality is only available to the class itself.
