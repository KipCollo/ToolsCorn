# List

A list is similar to a vector in that it can store multiple elements of the same type and dynamically grow in size.

However, two major differences between lists and vectors are:

- You can add and remove elements from both the beginning and at the end of a list, while vectors are generally optimized for adding and removing at the end.
- Unlike vectors, a list does not support random access, meaning you cannot directly jump to a specific index, or access elements by index numbers.

To use a list, you have to include the **list** header file:

```cpp
// Include the list library
#include <list>
```

## create a List

To create a list, use the list keyword, and specify the type of values it should store within angle brackets <> and then the name of the list.

```cpp
// Create a list called cars that will store strings
list<string> cars;
```

If you want to add elements at the time of declaration, place them in a comma-separated list, inside curly braces {}:
Example

```cpp
// Create a list called cars that will store strings
list<string> cars = {"Volvo", "BMW", "Ford", "Mazda"};

// Print list elements
for (string car : cars) {
  cout << car << "\n";
}
```

## Access a List

You cannot access list elements by referring to index numbers, like with arrays and vectors.

However, you can access the first or the last element with the .front() and .back() functions, respectively:
Example

```cpp
// Create a list called cars that will store strings
list<string> cars = {"Volvo", "BMW", "Ford", "Mazda"};

// Get the first element
cout << cars.front();  // Outputs Volvo

// Get the last element
cout << cars.back();  // Outputs Mazda
```
