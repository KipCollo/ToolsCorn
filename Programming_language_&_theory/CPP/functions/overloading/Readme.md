# Overloading

Function Overloading is defined as the process of having two or more functions with the same name, but different parameters. In function overloading, the function is redefined by using either different types or number of arguments. It is only through these differences a compiler can differentiate between the functions.

The advantage of Function overloading is that it increases the readability of the program because you don’t need to use different names for the same action.

In C++, we can overload:

1. methods,
2. constructors
3. indexed properties

Types of overloading in C++ are:

1. Function overloading
2. Operator overloading

```cpp
// program of function overloading when number of arguments vary
#include <iostream>
using namespace std;
class Cal {
public:
    static int add(int a, int b) { return a + b; }
    static int add(int a, int b, int c)
    {
        return a + b + c;
    }
};
int main(void)
{
    Cal C; // class object declaration.
    cout << C.add(10, 20) << endl;
    cout << C.add(12, 20, 23);
    return 0;
}
```

```cpp
// Program of function overloading with different types of arguments.
#include <iostream>
using namespace std;
int mul(int, int);
float mul(float, int);

int mul(int a, int b) { return a * b; }
float mul(double x, int y) { return x * y; }
int main()
{
    int r1 = mul(6, 7);
    float r2 = mul(0.2, 3);
    cout << "r1 is : " << r1 << endl;
    cout << "r2 is : " << r2 << endl;
    return 0;
}
```

## Function Overloading and Ambiguity

When the compiler is unable to decide which function is to be invoked among the overloaded function, this situation is known as function overloading ambiguity.
When the compiler shows the ambiguity error, the compiler does not run the program.

Causes of Ambiguity:

1. Type Conversion.
2. Function with default arguments.
3. Function with pass-by-reference.

```cpp
#include <iostream>
using namespace std;
void fun(int);
void fun(float);
void fun(int i) { cout << "Value of i is : " << i << endl; }
void fun(float j)
{
    cout << "Value of j is : " << j << endl;
}
int main()
{
    fun(12);
    fun(1.2);
    return 0;
}
```
