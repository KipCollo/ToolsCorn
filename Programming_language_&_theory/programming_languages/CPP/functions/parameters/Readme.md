# Passing Parameters

In c++ we can pass string as as argument in various way

1. Pass by Value
2. Pass by Reference
3. Pass by Pointer

* Pass by Value- In this when you are passing a values as string it will make a copy of a string values.

```cpp
#include <iostream>
#include <string>

void printString(std::string str) {
    std::cout << str << std::endl;
}

int main() {
    std::string myString = "Hello, GFG!";
    printString(myString);
    return 0;
}
```

* Pass by Reference- This can be done by using ‘&’ operator

```cpp
#include <iostream>
#include <string>

void printString(const std::string& str) { // Note the 'const' to prevent modification
    std::cout << str << std::endl;
}

int main() {
    std::string myString = "welcome to gfg";
    printString(myString);
    return 0;
}
```

* Pass by Pointer - This can be done by using * operator

```cpp
#include <iostream>
#include <string>

void printString(const std::string* str) { // Note the 'const' to prevent modification
    std::cout << *str << std::endl;
}

int main() {
    std::string myString = "This is Pss by pointer";
    printString(&myString);
    return 0;
}
```
