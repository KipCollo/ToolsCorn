# Pointers

Pointers are a fundamental feature in C++ that allow you to directly manage memory and manipulate the addresses of variables.
They are variables that store the memory address of another variable.

* Key Concepts:

1. Declaration: A pointer is declared using the * operator.
2. Initialization: A pointer is initialized with the address of a variable using the & operator.
3. Dereferencing: Accessing the value stored at the address a pointer is pointing to using the * operator.
4. Pointer Arithmetic: Performing arithmetic operations on pointers to navigate through memory.

The address of the variable you’re working with is assigned to the pointer variable that points to the same data type (such as an int or string).

```cpp
#include <iostream>

int main() {
    int var = 10;       // Declare an integer variable
    int* ptr = &var;    // Declare a pointer and initialize it with the address of var

    std::cout << "Value of var: " << var << std::endl;           // Output the value of var
    std::cout << "Address of var: " << &var << std::endl;        // Output the address of var
    std::cout << "Value of ptr: " << ptr << std::endl;           // Output the value of ptr (address of var)
    std::cout << "Value pointed to by ptr: " << *ptr << std::endl; // Output the value pointed to by ptr (value of var)

    return 0;
}
```

## Pointer Arithmetic

Pointer arithmetic allows you to navigate through arrays and memory blocks.

* Pointers to pointers-In C++, we can create a pointer to a pointer that in turn may point to data or another pointer. The syntax simply requires the unary operator (*) for each level of indirection while declaring the pointer.

```cpp
#include <iostream>

int main() {
    int var = 10;
    int* ptr = &var;
    int** ptr2 = &ptr;

    std::cout << "Value of var: " << var << std::endl;
    std::cout << "Value pointed to by ptr: " << *ptr << std::endl;
    std::cout << "Value pointed to by ptr2: " << **ptr2 << std::endl;

    return 0;
}
```

* Void Pointers-This is a special type of pointer available in C++ which represents the absence of type. Void pointers are pointers that point to a value that has no type (and thus also an undetermined length and undetermined dereferencing properties). This means that void pointers have great flexibility as they can point to any data type.

* Null Pointers-A pointer that is not assigned any address.

```cpp
int *ptr1 = 0;
int *ptr2 = NULL;
```

```cpp
#include <iostream>

int main() {
    int* ptr = nullptr; // or int* ptr = 0;

    if (ptr == nullptr) {
        std::cout << "Pointer is null" << std::endl;
    }

    return 0;
}
```

* Function Pointers:

## References and Pointers

There are 3 ways to pass C++ arguments to a function:

1. Call-By-Value
2. Call-By-Reference with a Pointer Argument
3. Call-By-Reference with a Reference Argument

```cpp
#include <iostream>

void display() {
    std::cout << "Hello, World!" << std::endl;
}

int main() {
    void (*funcPtr)() = display; // Declare and initialize a function pointer
    funcPtr(); // Call the function using the pointer

    return 0;
}
```
