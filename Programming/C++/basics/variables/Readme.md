# Variables

Variables are containers for storing data values.In C++, all the variables must be declared before use.

In C++, there are different types of variables (defined with different keywords), for example:

- **int** - stores integers (whole numbers), without decimals, such as 123 or -123
- **double** - stores floating point numbers, with decimals, such as 19.99 or -19.99
- **char** - stores single characters, such as 'a' or 'B'. Char values are surrounded by single quotes
- **string** - stores text, such as "Hello World". String values are surrounded by double quotes
- **bool** - stores values with two states: true or false

## Declaring (Creating) Variables

To create a variable, specify the type and assign it a value:

Syntax:

type variableName = value;

Where type is one of C++ types (such as int), and variableName is the name of the variable (such as x or myName). The equal sign is used to assign values to the variable.

To create a variable that should store a number, look at the following example:

```cpp
int myNum = 15;
cout << myNum; 
```

The variable declaration refers to the part where a variable is first declared or introduced before its first use. A variable definition is a part where the variable is assigned a memory location and a value. Most of the time, variable declaration and definition are done together.

```cpp
// C++ program to show difference between
// definition and declaration of a 
// variable
#include <iostream>
using namespace std;

int main()
{
    // this is declaration of variable a
    int a;
  
    // this is initialisation of a
    a = 10;
  
    // this is definition = declaration + initialisation
    int b = 20;

    // declaration and definition
    // of variable 'a123'
    char a123 = 'a';

    // This is also both declaration and definition
    // as 'c' is allocated memory and
    // assigned some garbage value.
    float c;

    // multiple declarations and definitions
    int _c, _d45, e;

    // Let us print a variable
    cout << a123 << endl;

    return 0;
}
```

## Types of Variables

There are three types of variables based on the scope of variables in C++

1. Local Variables
2. Instance Variables
3. Static Variables

- Local Variables: A variable defined within a block or method or constructor is called a local variable.
These variables are created when entered into the block or the function is called and destroyed after exiting from the block or when the call returns from the function.
The scope of these variables exists only within the block in which the variable is declared. i.e. we can access this variable only within that block.
Initialization of local variables is not mandatory, but it is highly recommended to ensure they have a defined value before use.

- Instance Variables: Instance variables are non-static variables and are declared in a class outside any method, constructor, or block.
As instance variables are declared in a class, these variables are created when an object of the class is created and destroyed when the object is destroyed.
Unlike local variables, we may use access specifiers for instance variables. If we do not specify any access specifier then the default access specifier will be used.
Initialization of Instance Variable is not Mandatory.
Instance Variable can be accessed only by creating objects.

- Static Variables: Static variables are also known as Class variables.
These variables are declared similarly as instance variables, the difference is that static variables are declared using the static keyword within a class outside any method constructor or block.
Unlike instance variables, we can only have one copy of a static variable per class irrespective of how many objects we create.
Static variables are created at the start of program execution and destroyed automatically when execution ends.
Initialization of Static Variable is not Mandatory. Its default value is 0
If we access the static variable like the Instance variable (through an object), the compiler will show the warning message and it won’t halt the program. The compiler will replace the object name with the class name automatically.
If we access the static variable without the class name, the Compiler will automatically append the class name.

## Instance Variable Vs Static Variable

Each object will have its own copy of the instance variable whereas We can only have one copy of a static variable per class irrespective of how many objects we create.
Changes made in an instance variable using one object will not be reflected in other objects as each object has its own copy of the instance variable. In the case of static, changes will be reflected in other objects as static variables are common to all objects of a class.
We can access instance variables through object references and Static Variables can be accessed directly using the class name.
The syntax for static and instance variables:

```cpp
class Example
{
    static int a; // static variable
    int b;        // instance variable
}
```
