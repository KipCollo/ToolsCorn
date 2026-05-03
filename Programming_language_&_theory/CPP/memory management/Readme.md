# Memory Management

Memory management in C++ involves the allocation, deallocation, and management of memory during the runtime of a program. Proper memory management is crucial for efficient and error-free execution of programs. Here are some key concepts and functions related to memory management in C++:

* Dynamic Memory Allocation

new: Allocates memory on the heap.
delete: Deallocates memory allocated with new.

```cpp
int main() {
    // Allocate memory for an integer
    int* ptr = new int(10);
    std::cout << "Value: " << *ptr << std::endl;

    // Deallocate memory
    delete ptr;
    return 0;
}
```

* Arrays

new[]: Allocates memory for an array on the heap.
delete[]: Deallocates memory allocated with new[].

```cpp
int main() {
    // Allocate memory for an array of integers
    int* arr = new int[5];
    for (int i = 0; i < 5; ++i) {
        arr[i] = i * 10;
    }

    for (int i = 0; i < 5; ++i) {
        std::cout << "Value at index " << i << ": " << arr[i] << std::endl;
    }

    // Deallocate memory
    delete[] arr;
    return 0;
}
```

* Smart Pointers-Smart pointers are part of the C++ Standard Library and help manage the lifetime of dynamically allocated objects.

std::unique_ptr: Manages a single object, ensuring that it is deleted when the unique_ptr goes out of scope.
std::shared_ptr: Manages a shared ownership of an object, deleting it when the last shared_ptr goes out of scope.
std::weak_ptr: Holds a non-owning reference to an object managed by shared_ptr.

* Memory Management Functions
From the provided excerpt, here are some memory management functions and templates:

get_pointer_safety: Returns the current pointer safety model (C++11, removed in C++23).
start_lifetime_as: Implicitly creates objects in given storage with the object representation reused (C++23).
pointer_traits: Provides information about pointer-like types (C++11).
to_address: Obtains a raw pointer from a pointer-like type (C++20).
addressof: Obtains the actual address of an object, even if the & operator is overloaded (C++11).
align: Aligns a pointer in a buffer (C++11).
