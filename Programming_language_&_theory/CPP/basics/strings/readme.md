# Strings

Strings are used for storing text/characters.
A string variable contains a collection of characters surrounded by double quotes

- To use strings, you must include an additional header file in the source code, the <string> library:

```cpp
// Include the string library
#include <string>
// Create a string variable
string greeting = "Hello"; 
```
## string Functions

The <string> library has many functions that allow you to perform tasks on strings.

A list of popular string functions include:

- **at()** -Returns an indexed character from a string
- **length()** 	Returns the length of a string
- **size()** 	Alias of length(). Returns the length of a string
- **max_size()** 	Returns the maximum length of a string
- **empty()** 	Checks wheter a string is empty or not
- **append()**	Appends a string (or a part of a string) to another string
- **substr()** 	Returns a part of a string from a start index (position) and length
- **find()** 	Returns the index (position) of the first occurrence of a string or character
- **rfind()** 	Returns the index (position) of the last occurrence of a string or character
- **replace()** 	Replaces a part of a string with another string
- **insert()** 	Inserts a string at a specified index (position)
- **erase()** 	Removes characters from a string
- **compare()** 	Compares two strings