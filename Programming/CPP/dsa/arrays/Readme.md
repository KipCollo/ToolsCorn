# Arrays

In C++, an array is a data structure that is used to store multiple values of similar data types in a contiguous memory location.

## Properties of Arrays in C++

1. An Array is a collection of data of the same data type, stored at a contiguous memory location.
2. Indexing of an array starts from 0. It means the first element is stored at the 0th index, the second at 1st, and so on.
3. Elements of an array can be accessed using their indices.
4. Once an array is declared its size remains constant throughout the program.
5. An array can have multiple dimensions.
6. The size of the array in bytes can be determined by the sizeof operator using which we can also find the number of elements in the array.
7. We can find the size of the type of elements stored in an array by subtracting adjacent addresses.

## Array Declaration

In C++, we can declare an array by simply specifying the data type first and then the name of an array with its size.

data_type array_name[Size_of_array];

```java
int arr[5];
```
