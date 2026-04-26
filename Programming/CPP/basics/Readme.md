
## malloc

Defined in header <stdlib.h>

Allocates size bytes of uninitialized storage.If allocation succeeds, returns a pointer that is suitably aligned for any object type with fundamental alignment.
If size is zero, the behavior of malloc is implementation-defined. For example, a null pointer may be returned.Alternatively, a non-null pointer may be returned; but such a pointer should not be dereferenced, and should be passed to free to avoid memory leaks.

malloc is thread-safe: it behaves as though only accessing the memory locations visible through its argument, and not any static storage.

A previous call to free, free_sized, and free_aligned_sized(since C23) or realloc that deallocates a region of memory synchronizes-with a call to malloc that allocates the same or a part of the same region of memory. This synchronization occurs after any access to the memory by the deallocating function and before any access to the memory by malloc. There is a single total order of all allocation and deallocation functions operating on each particular region of memory. 

syntax :-
```
void *malloc( size_t size );
```

## Parameters
size - number of bytes to allocate

## Return value

On success, returns the pointer to the beginning of newly allocated memory. To avoid a memory leak, the returned pointer must be deallocated with free() or realloc().

On failure, returns a null pointer. 

Example
Run this code
```cpp
#include <stdio.h>   
#include <stdlib.h> 
 
int main(void) 
{
    int *p1 = malloc(4*sizeof(int));  // allocates enough for an array of 4 int
    int *p2 = malloc(sizeof(int[4])); // same, naming the type directly
    int *p3 = malloc(4*sizeof *p3);   // same, without repeating the type name
 
    if(p1) {
        for(int n=0; n<4; ++n) // populate the array
            p1[n] = n*n;
        for(int n=0; n<4; ++n) // print it back out
            printf("p1[%d] == %d\n", n, p1[n]);
    }
 
    free(p1);
    free(p2);
    free(p3);
}
```
Output:

p1[0] == 0
p1[1] == 1
p1[2] == 4
p1[3] == 9

std::free
 
C++
 
Utilities library
 
Dynamic memory management
 
Defined in header <cstdlib>
		
void free( void* ptr );
		
		

Deallocates the space previously allocated by std::malloc, std::calloc, std::aligned_alloc(since C++17), or std::realloc.

If ptr is a null pointer, the function does nothing.

The behavior is undefined if the value of ptr does not equal a value returned earlier by std::malloc, std::calloc, std::aligned_alloc(since C++17), or std::realloc.

The behavior is undefined if the memory area referred to by ptr has already been deallocated, that is, std::free or std::realloc has already been called with ptr as the argument and no calls to std::malloc, std::calloc, std::aligned_alloc(since C++17), or std::realloc resulted in a pointer equal to ptr afterwards.

The behavior is undefined if after std::free returns, an access is made through the pointer ptr (unless another allocation function happened to result in a pointer value equal to ptr).

The following functions are required to be thread-safe:

    The library versions of operator new and operator delete
    User replacement versions of global operator new and operator delete
    std::calloc, std::malloc, std::realloc, std::aligned_alloc(since C++17), std::free 

Calls to these functions that allocate or deallocate a particular unit of storage occur in a single total order, and each such deallocation call happens-before the next allocation (if any) in this order.
	(since C++11)
Parameters
ptr 	- 	pointer to the memory to deallocate
Return value

(none)
Notes

The function accepts (and does nothing with) the null pointer to reduce the amount of special-casing. Whether allocation succeeds or not, the pointer returned by an allocation function can be passed to std::free.
Example
Run this code

#include <cstdlib>
 
int main()
{
    int* p1 = (int*)std::malloc(10 * sizeof *p1);
    std::free(p1); // every allocated pointer must be freed
 
    int* p2 = (int*)std::calloc(10, sizeof *p2);
    int* p3 = (int*)std::realloc(p2, 1000 * sizeof *p3);
    if (!p3) // p3 null means realloc failed and p2 must be freed.
        std::free(p2);
    std::free(p3); // p3 can be freed whether or not it is null.
}

std::malloc
 
C++
 
Utilities library
 
Dynamic memory management
 
Defined in header <cstdlib>
		
void* malloc( std::size_t size );
		
		

Allocates size bytes of uninitialized storage.

If allocation succeeds, returns a pointer to the lowest (first) byte in the allocated memory block that is suitably aligned for any scalar type (at least as strictly as std::max_align_t) (implicitly creating objects in the destination area).

If size is zero, the behavior is implementation defined (null pointer may be returned, or some non-null pointer may be returned that may not be used to access storage, but has to be passed to std::free).

The following functions are required to be thread-safe:

    The library versions of operator new and operator delete
    User replacement versions of global operator new and operator delete
    std::calloc, std::malloc, std::realloc, std::aligned_alloc(since C++17), std::free 

Calls to these functions that allocate or deallocate a particular unit of storage occur in a single total order, and each such deallocation call happens-before the next allocation (if any) in this order.
	(since C++11)
Parameters
size 	- 	number of bytes to allocate
Return value

On success, returns the pointer to the beginning of newly allocated memory. To avoid a memory leak, the returned pointer must be deallocated with std::free() or std::realloc().

On failure, returns a null pointer.
Notes

This function does not call constructors or initialize memory in any way. There are no ready-to-use smart pointers that could guarantee that the matching deallocation function is called. The preferred method of memory allocation in C++ is using RAII-ready functions std::make_unique, std::make_shared, container constructors, etc, and, in low-level library code, new-expression.

For loading a large file, file mapping via OS-specific functions, e.g. mmap on POSIX or CreateFileMapping(A/W) along with MapViewOfFile on Windows, is preferable to allocating a buffer for file reading.
Example
Run this code

#include <cstdlib> 
#include <iostream>   
#include <memory>
#include <string>
 
int main() 
{
    constexpr std::size_t size = 4;
    if (auto ptr = reinterpret_cast<std::string*>(std::malloc(size * sizeof(std::string))))
    {
        try
        {
            for (std::size_t i = 0; i < size; ++i)
                std::construct_at(ptr + i, 5, 'a' + i);
            for (std::size_t i = 0; i < size; ++i)
                std::cout << "ptr[" << i << "] == " << ptr[i] << '\n';
            std::destroy_n(ptr, size);
        }
        catch (...) {}
        std::free(ptr);
    }
}

Output:

p[0] == aaaaa
p[1] == bbbbb
p[2] == ccccc
p[3] == ddddd


std::calloc
 
C++
 
Utilities library
 
Dynamic memory management
 
Defined in header <cstdlib>
		
void* calloc( std::size_t num, std::size_t size );
		
		

Allocates memory for an array of num objects of size size, initializes it to all bits zero (implicitly creating objects in the destination area).

If allocation succeeds, returns a pointer to the lowest (first) byte in the allocated memory block that is suitably aligned for any object type.

If size is zero, the behavior is implementation defined (null pointer may be returned, or some non-null pointer may be returned that may not be used to access storage).

The following functions are required to be thread-safe:

    The library versions of operator new and operator delete
    User replacement versions of global operator new and operator delete
    std::calloc, std::malloc, std::realloc, std::aligned_alloc(since C++17), std::free 

Calls to these functions that allocate or deallocate a particular unit of storage occur in a single total order, and each such deallocation call happens-before the next allocation (if any) in this order.
	(since C++11)
Parameters
num 	- 	number of objects
size 	- 	size of each object
Return value

On success, returns the pointer to the beginning of newly allocated memory. To avoid a memory leak, the returned pointer must be deallocated with std::free() or std::realloc().

On failure, returns a null pointer.
Notes

Due to the alignment requirements, the number of allocated bytes is not necessarily equal to num * size.

Initialization to all bits zero does not guarantee that a floating-point or a pointer would be initialized to 0.0 and the null pointer value, respectively (although that is true on all common platforms).

Originally (in C89), support for zero size was added to accommodate code such as

OBJ *p = calloc(0, sizeof(OBJ)); // "zero-length" placeholder
...
while (1)
{ 
    p = realloc(p, c * sizeof(OBJ)); // reallocations until size settles
    ... // code that may change c or break out of loop
}

Example
Run this code

#include <cstdlib>
#include <iostream>
 
int main()
{
    int* p1 = (int*)std::calloc(4, sizeof(int)); // allocate and zero out an array of 4 int
    int* p2 = (int*)std::calloc(1, sizeof(int[4])); // same, naming the array type directly
    int* p3 = (int*)std::calloc(4, sizeof *p3); // same, without repeating the type name
 
    if (p2)
        for (int n = 0; n < 4; ++n) // print the array
            std::cout << "p2[" << n << "] == " << p2[n] << '\n';
 
    std::free(p1);
    std::free(p2);
    std::free(p3);
}

Output:

p2[0] == 0
p2[1] == 0
p2[2] == 0
p2[3] == 0
