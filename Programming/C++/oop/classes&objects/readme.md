# Classes

A class is a user-defined data type that we can use in our program, and it works as an object constructor, or a "blueprint" for creating objects.

Attributes and methods are basically variables and functions that belongs to the class. These are often referred to as "class members".

## Create a class

- To create a class, use the **class** keyword:

```C++
class Student {       // The class
  public:             // Access specifier
    int id;        // Attribute (int variable)
    string name;  // Attribute (string variable)
};
```

## Creating an object

In C++, an object is created from a class.To create an object of MyClass, specify the class name, followed by the object name.

To access the class attributes (myNum and myString), use the dot syntax (.) on the object:

```cpp
Student std;  // Create an object of MyClass

  // Access attributes and set values
  std.id = 15; 
  std.name = "Collins";
```

## Class Methods

Methods are functions that belongs to the class.

There are two ways to define functions that belongs to a class:

1. Inside class definition
2. Outside class definition

### Inside Class

```cpp
class MyClass {        // The class

  public:              // Access specifier
    void myMethod() {  // Method/function defined inside the class
      cout << "Hello World!";
    }
};
```

### Outside class

To define a function outside the class definition, you have to declare it inside the class and then define it outside of the class. This is done by specifiying the name of the class, followed the scope resolution **:: operator**, followed by the name of the function:

```cpp
class Student {        // The class
  public:              // Access specifier
    void getMarks();   // Method/function declaration
};

// Method/function definition outside the class
void Student::getMarks() {
  cout << "Hello World!";
}

int main() {
  Student std;     // Create an object of MyClass
  std.myMethod();  // Call the method
  return 0;
}
```

### Parameters

You can also add parameters:

```cpp
class Car {
  public:
    int speed(int maxSpeed);
};
```

## Constructors

A constructor in C++ is a special method that is automatically called when an object of a class is created.

To create a constructor, use the same name as the class, followed by parentheses ():

```cpp
class MyClass {     // The class
  public:           // Access specifier
    MyClass() {     // Constructor
      cout << "Hello World!";
    }
};
```
