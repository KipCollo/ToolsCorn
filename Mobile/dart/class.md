# Class

A class is a blueprint or protoype(template) from which objects are created..

`Creating a class` - Use `class` keyword to declare a class in Dart.A class definition starts with the keyword class followed by the class name, and class body enclosed by pair of curly braces.

`constructors` - it is a block of code that inoitializes the newly created object.Dart represents a constructor with same na,e as that of class.

`Getter $ Setter` - Getters and Setters are used to effectively protect your data,particularly when creating classes.For each instance variable, a getter method returns its value while a setter method sets or updates its value.

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
