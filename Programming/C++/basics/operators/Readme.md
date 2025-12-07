# Operators

In C++, operators are special symbols that perform operations on one or more operands. They are categorized based on the number of operands they work with and the type of operation they perform. Here are some common categories of operators:

1. Arithmetic Operators
Perform basic arithmetic operations.

+ (Addition)
- (Subtraction)
* (Multiplication)
/ (Division)
% (Modulus)
2. Relational Operators
Compare two values and return a boolean result.

== (Equal to)
!= (Not equal to)
> (Greater than)
< (Less than)
>= (Greater than or equal to)
<= (Less than or equal to)
3. Logical Operators
Perform logical operations and return a boolean result.

&& (Logical AND)
|| (Logical OR)
! (Logical NOT)
4. Bitwise Operators
Perform bit-level operations.

& (Bitwise AND)
| (Bitwise OR)
^ (Bitwise XOR)
~ (Bitwise NOT)
<< (Left shift)
>> (Right shift)
5. Assignment Operators
Assign values to variables.

= (Assignment)
+= (Add and assign)
-= (Subtract and assign)
*= (Multiply and assign)
/= (Divide and assign)
%= (Modulus and assign)
6. Increment and Decrement Operators
Increase or decrease the value of a variable by one.

++ (Increment)
-- (Decrement)
7. Conditional (Ternary) Operator
A shorthand for an if-else statement.

? : (Conditional)
A shorthand for an if-else statement.

? : (Conditional)

8. Scope Resolution Operator - The **scope resolution operator ::** in C++ is used to access members of a namespace, class, or enumeration. It helps in specifying the context in which an identifier is defined, thereby avoiding ambiguity and name collisions.

* Key Points:
- Namespace Members: Access variables, functions, or classes defined within a namespace.

```cpp
namespace MyNamespace {
    int value = 10;

    void display() {
        std::cout << "Value: " << value << std::endl;
    }
}

int main() {
    // Accessing namespace members using the scope resolution operator
    std::cout << "Namespace value: " << MyNamespace::value << std::endl;
    MyNamespace::display();
    return 0;
}
```
- Class Members: Access static members of a class or define member functions outside the class definition.

```cpp
class MyClass {
public:
    static int value;

    static void display();
};

// Define static member outside the class
int MyClass::value = 20;

// Define member function outside the class
void MyClass::display() {
    std::cout << "Class value: " << value << std::endl;
}

int main() {
    // Accessing class members using the scope resolution operator
    MyClass::value = 30;
    MyClass::display();
    return 0;
}
```

- Global Scope: Access global variables or functions when there is a local variable or function with the same name.

```cpp
int value = 40; // Global variable

int main() {
    int value = 50; // Local variable

    // Accessing global variable using the scope resolution operator
    std::cout << "Global value: " << ::value << std::endl;
    std::cout << "Local value: " << value << std::endl;
    return 0;
}
```