# Class

A class is a blueprint or protoype(template) from which objects are created..

`Creating a class` - Use `class` keyword to declare a class in Dart.A class definition starts with the keyword class followed by the class name, and class body enclosed by pair of curly braces.

`constructors` - it is a block of code that initializes the newly created object.Dart represents a constructor with same name as that of class.

`Getter & Setter` - Getters and Setters are used to effectively protect your data,particularly when creating classes.For each instance variable, a getter method returns its value while a setter method sets or updates its value.

Getter are defined using `get` keyword, whereas setters are defined using the `set` keyword.
NOTE:- '=>' operator is for returning a value in a brief way.

```dart
class Car {
   String color;
   String name;

   Car(color,name){
      this.color = color;
      this.name = name;
   }

   set setType(String value) => type = value;//setter
   String get getType => type//getter
}
```

## constructors

`Constructors` are special functions that create instances of classes.
Dart implements many types of constructors. Except for default constructors, these functions use the same name as their class.

1. Generative constructors - Creates new instances and initializes instance variables.
2. Default constructors - Used to create a new instance when a constructor hasn't been specified. It doesn't take arguments and isn't named.
3. Named constructors - Clarifies the purpose of a constructor or allows the creation of multiple constructors for the same class.
4. Constant constructors - Creates instances as compile-time constants.
5. Factory constructors - Either creates a new instance of a subtype or returns an existing instance from cache.
6. Redirecting constructor - Forwards calls to another constructor in the same class.

`Generative constructors`:- To instantiate a class, use a generative constructor.

```dart
class Person{
   //Instance variables
   string name;
   int age;

   //Generative constructor with initializing formal parameters
   Person(this.name,this.age);
}
```

`Default constructors`:- If you don't declare a constructor, Dart uses the default constructor. The default constructor is a generative constructor without arguments or name.

## Class Types

`Concrete class`:-

`Abstract class`:-

```dart
abstract class Vehicle{

   Vehicle(this.wheel);
   int wheels;
   void wheelsNum();
}

class Car extends Vehicle{

   Car(super.wheels);

   @override
   void wheelsNum(){
      //implementation
   }
}
```

The StatefulWidget and StatelessWidget classes are abstract classes.
