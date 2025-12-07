# Class

A JavaScript class is not an object.It is a template for JavaScript objects.

The this keyword refers to the object from which the function was called.
The new keyword is used to create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.

Use the keyword class to create a class.

```js
class ClassName {
  constructor() { ... }
}
```

When you have a class, you can use the class to create objects:

```js
const myCar1 = new Car("Ford", 2014);
```

The constructor method is called automatically when a new object is created.
The constructor method is a special method:

1. It has to have the exact name "constructor"
2. It is executed automatically when a new object is created
3. It is used to initialize object properties

If you do not define a constructor method, JavaScript will add an empty constructor method.

Class Methods - Class methods are created with the same syntax as object methods.

```js
class ClassName {
  constructor() { ... }
  method_1() { ... }
  method_2() { ... }
  method_3() { ... }
}
```

"use strict":- The syntax in classes must be written in "strict mode".You will get an error if you do not follow the "strict mode" rules.

## JavaScript Static Methods

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
