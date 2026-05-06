# Abstraction

Abstraction means displaying only essential information and ignoring the details. Data abstraction refers to providing only essential information about the data to the outside world, ignoring unnecessary details or implementation.

## Types of Abstraction

1. Data abstraction – This type only shows the required information about the data and ignores unnecessary details.
2. Control Abstraction – This type only shows the required information about the implementation and ignores unnecessary details.

* Abstraction using Classes - We can implement Abstraction in C++ using classes. The class helps us to group data members and member functions using available access specifiers. A Class can decide which data member will be visible to the outside world and which is not.

* Abstraction in Header files - One more type of abstraction in C++ can be header files. For example, consider the pow() method present in math.h header file. Whenever we need to calculate the power of a number, we simply call the function pow() present in the math.h header file and pass the numbers as arguments without knowing the underlying algorithm according to which the function is actually calculating the power of numbers.

* Abstraction using Access Specifiers - Access specifiers are the main pillar of implementing abstraction in C++. We can use access specifiers to enforce restrictions on class members. For example:

1. Members declared as public in a class can be accessed from anywhere in the program.
2. Members declared as private in a class, can be accessed only from within the class. They are not allowed to be accessed from any part of the code outside the class.

```cpp
// C++ Program to Demonstrate the working of Abstraction
#include <iostream>
using namespace std;

class implementAbstraction {
private:
    int a, b;

public:
    // method to set values of
    // private members
    void set(int x, int y)
    {
        a = x;
        b = y;
    }

    void display()
    {
        cout << "a = " << a << endl;
        cout << "b = " << b << endl;
    }
};

int main()
{
    implementAbstraction obj;
    obj.set(10, 20);
    obj.display();
    return 0;
}
```

## Advantages of Data Abstraction

1. Helps the user to avoid writing the low-level code
2. Avoids code duplication and increases reusability.
3. Can change the internal implementation of the class independently without affecting the user.
4. Helps to increase the security of an application or program as only important details are provided to the user.
5. It reduces the complexity as well as the redundancy of the code, therefore increasing the readability.
6. New features or changes can be added to the system with minimal impact on existing code.
