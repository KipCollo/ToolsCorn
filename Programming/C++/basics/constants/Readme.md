# Constants

Constants are values that remain fixed throughout the execution of a program.When you do not want others (or yourself) to change existing variable values, use the const keyword (this will declare the variable as "constant", which means unchangeable and read-only):

## Define Constants

We can define the constants in C++ using three ways:

1. Using const Keyword
2. Using constexpr Keyword
3. Using #define Preprocessor

* Constant using const Keyword - Defining constants using const keyword is one of the older methods that C++ inherited from C language. In this method, we add the const keyword in the variable definition.

```cpp
const int myNum = 15;  // myNum will always be 15
myNum = 10;  // error: assignment of read-only variable 'myNum' 
```

Note: We have to initialize the constant variable at the time of declaration as we cannot modify the value of it later in the program.

* Constants using constexpr Keyword - The constexpr keyword is similar to const keyword and is also used to declare constants in C++. But the major difference is that the constexpr constants are initialized at compiler time, which is why their value must be known at the compile time.

```cpp
#include <iostream> 
using namespace std; 

int main() 
{ 
int constexpr hoursIn_day = 24; // defining constant 
cout << "Total hours in a day: " << hoursIn_day; // printing value 

}
```

* Constants using #define Preprocessor - We can also define constants using the #define. Constants created using the #define preprocessor are called “macro constants”. Unlike the other methods, constants defined using this method simply work as an alias for their value which is substituted during preprocessing.

It is the less preferable way to define a constant in C++ due to the lack of type safety.

```cpp
// constant 
#include <iostream> 
using namespace std; 

// using #define to create a macro 
#define Side 5 

int main() 
{ 
const double area = Side * Side; // using constant 
cout << "The area of square with side 5 is "; 
cout << area; 

return 0; 
}
```
