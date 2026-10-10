# Arrays

JavaScript Array is used to store multiple elements in a single variable. It can hold various data types, including numbers, strings, objects, and even other arrays. It is often used when we want to store a list of elements and access them by a single variable.
An array in JavaScript is a data structure that stores a collection of elements, such as numbers or strings, in a linear fashion. Each element in an array is assigned a unique index starting from 0, which can be used to access and modify its value. Arrays in JavaScript can dynamically grow or shrink in size and support various methods for manipulating their contents.

In JavaScript, an array is an object that stores a collection of values in a list-like structure. It can hold any type of data, including numbers, strings, objects, and even other arrays. The elements in an array are identified by their index, which starts at 0 for the first element and increments by 1 for each subsequent element. You can create an array using the array literal notation, or by using the Array constructor function. Arrays have many built-in methods for manipulating and iterating over their elements, such as push(), pop(), slice(), forEach(), map(), and reduce().

**Array Declaration** - In JavaScript, an array can be declared using square brackets with comma-separated values inside the brackets or by calling the Array constructor. 

For example:

1. *Array Literal (Using square brackets)* - An array literal in JavaScript is a way to create an array by enclosing a comma-separated list of values inside square brackets, like this: `[value1, value2, value3]`. For example, `let myArray = [1, 2, 3];` creates an array named `myArray` with three elements containing the values 1, 2, and 3. Array literals are a convenient way to initialize arrays with known values.

```js
// empty array
let myArray = [];
// array with values
let anotherArray = [1, 2, 3, "hello", true];
```

In the example above, `myArray` is an empty array and `anotherArray` is an array that contains five elements of different data types. Note that arrays in JavaScript are dynamic, which means you can add or remove elements from them at any time.
Arrays in Javascript is of dynamic size.You can also add any type of data type.

2. *Using the Array constructor*:- In JavaScript, a constructor gets called when an object is created using the new keyword.

```js
const myArray = new Array(1, 2, 3, 4, 5);
const x = new Array(7)
``` 

Note that in both cases, the values inside the array can be of any data type (such as numbers, strings, objects, etc.). Additionally, arrays in JavaScript are dynamic and can grow or shrink as needed.


Arrays are an essential data structure in JavaScript as they allow you to store and manipulate collections of data, such as lists of numbers or strings. They provide a way to access elements using index positions, add or remove elements, sort the array, and perform various operations on the data efficiently. Arrays are also useful for organizing and structuring code, and many programming tasks involve working with arrays in some form.


```js
courses = ["HTML", "CSS", "JavaScript", "React"]
// Display the array items 
console.log(courses);//  ["HTML", "CSS", "JavaScript", "React"]

// Adding element to arry
courses[4]=2;
console.log(courses);// ["HTML", "CSS", "JavaScript", "React",2]
courses[9]="JAVA"
console.log(courses);// ["HTML", "CSS", "JavaScript", "React",2,"JAVA"]
courses.length //10
courses[7]//undefined

```

**Index of Array** - In JavaScript, the index of an array is a numerical value used to access and manipulate its elements. The first element in an array has an index of 0, the second element has an index of 1, and so on. You can access an element in an array using its index by placing the index within square brackets after the name of the array. For example:

```js
let myArray = ["apple", "banana", "orange"];
console.log(myArray[0]); // Output: "apple"
console.log(myArray[1]); // Output: "banana"
console.log(myArray[2]); // Output: "orange"
```

## JavaScript Array Properties

A JavaScript property is a member of an object that associates a key with a value.
Instance Property:- An instance property is a property that has a new copy for every new instance of the class.

`Array length property` - In JavaScript, the length property of an array returns the number of elements in the array. For example, if an array has three elements, its length property will return 3. The length property is automatically updated when elements are added to or removed from the array.


## JavaScript Array Methods

JavaScript methods are actions that can be performed on objects.

**Static Method**:-If the method is called using the array class itself then it is called a static method.

Array.from() - The Array.from() method creates a new, shallow-copied array instance from an array-like or iterable object.
Array.isArray() - The Array.isArray() method determines whether the passed value is an array.It returns true if the value is an array, and false otherwise.
Array.prototype.sort() method - The Array.prototype.sort() method sorts the elements of an array in place and returns the sorted array.
Array.of()

Array.from() - Convert a string into an array.

```js
const str = "Hello"
const strArray = Array.from(str)

console.log(strArray)//["H","e","l","l","o"]
```


**Instance Method**:- If the method is called on an instance of a array then it is called an instance method.

*Looping Array* - To loop through an array in JavaScript, you can use a `for` loop or the `forEach()` method.

Using a `for` loop:

```javascript
let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

Using the `forEach()` method:- It is provided a function once for each element of the array.The forEach function executes a provided function once for each array element.

```javascript
let arr = [1, 2, 3, 4, 5];

arr.forEach(function(item,index, array) {
  console.log(item,index);
});
```

Both methods will output each item in the array to the console.

*sort function*- The `sort()` function in JavaScript is used to sort an array in ascending or descending order. By default, it sorts the elements in ascending order based on their Unicode values.Sort an array in place in a given order according to the compare() function.
The basic syntax for using the `sort()` function is:

```js
array.sort()
```

To sort an array in descending order, you can use the following syntax:

```js
array.sort((a, b) => b - a)
```

This uses a compare function that subtracts `b` from `a` instead of subtracting `a` from `b`, which results in sorting the array in descending order.
Note that the `sort()` function modifies the original array and returns the sorted array.


*push function* - The `push()` function is a built-in method in JavaScript arrays that adds one or more elements to the end of an array and returns the new length of the array.Push one or more values into the array.
The syntax for using the push() function is: 

```javascript
array.push(element1, element2, ..., elementN)
```

where "array" is the name of the array, and "element1", "element2", ..., "elementN" are the elements to be added to the end of the array.


*pop function*- In JavaScript, the `pop()` function can be used on an array to remove and return the last element of the array.Remove the last element of the array and also returns the removed element. The array's length is reduced by 1 after calling this function. Here's an example:

```js
let fruits = ['apple', 'banana', 'orange'];
let lastFruit = fruits.pop(); // removes 'orange' from the array and returns it
console.log(lastFruit); // output: 'orange'
console.log(fruits); // output: ['apple', 'banana']
```


*unshift function* - The unshift() function in JavaScript is an array method that adds one or more elements to the beginning of an array and returns the new length of the array. The original array is modified by adding the elements at the beginning. The syntax is as follows: 

```js
array.unshift(element1, element2, ..., elementN)
```

where `element1`, `element2`, ..., `elementN` are the elements to be added to the beginning of the array.


*shift function* - In JavaScript, the shift() function is used to remove the first element from an array and return it. This function also updates the length and indexes of the remaining elements in the array. 

```js
let fruits = ['apple', 'banana', 'orange'];
let shiftedFruit = fruits.shift(); // removes the first element 'apple'
console.log(shiftedFruit); // output: 'apple'
console.log(fruits); // output: ['banana', 'orange']
```

*toString function* - In JavaScript, the `toString` function is a method that can be called on an object to convert it into a string representation. By default, the `toString` method returns a string representing the object. However, some built-in objects like `Date`, `Array`, and `RegExp` override this method to provide a more meaningful string representation of the object. Additionally, developers can also override the `toString` method for their own custom objects to provide a customized string representation.
Return the string representation of the array elements.

*join function* - The `join()` function is a built-in method in JavaScript that converts an array into a string by concatenating all elements of the array with a specified separator.Join the elements of an array into a string. The syntax for using `join()` is as follows:

```js
array.join(separator)
```

Here, `separator` is an optional parameter that specifies the character to be used between each element of the array. If no separator is provided, a comma will be used as the default.

For example, suppose we have an array of strings:

```js
const myArray = ['apple', 'banana', 'cherry'];
```

We can use the `join()` method to convert this array into a single string, separated by commas:

```js
const myString = myArray.join(); // "apple,banana,cherry"
```

Alternatively, we could specify a different separator, such as a hyphen:

```js
const myString = myArray.join('-'); // "apple-banana-cherry"
```

*concat function* - In JavaScript, the `concat()` function is used to merge two or more arrays together and create a new array that contains all the elements from the original arrays. The syntax for `concat()` is as follows:

```js
newArray = array1.concat(array2, array3, ..., arrayN);
```

where `array1` is the initial array, and `array2`, `array3`, ..., `arrayN` are additional arrays that will be concatenated onto `array1`. The resulting `newArray` will contain all the elements from each of the input arrays in the order they were passed into the function.


*splice function* - The `splice()` function in JavaScript is used to add or remove elements from an array at a specified index.Modify the contents of an array by removing the existing elements.Changes the contents of an array by removing or replacing existing elements and/or adding new elements i.e mutates the array. It has the following syntax:

```js
array.splice(startIndex, deleteCount, element1, ..., elementN);
```

- `startIndex`: The index at which to start modifying the array.
- `deleteCount`: Optional. The number of elements to remove from the array starting at `startIndex`. If set to 0, no elements will be removed.
- `element1, ..., elementN`: Optional. The elements to be added to the array at `startIndex`.

The `splice()` function returns an array containing the deleted elements, or an empty array if no elements were deleted. If elements were added to the array, the original array is modified and returned.

```js
const arr = ["a","b","c","d"]
arr.splice(2) //["c","d"]
arr //["a","b"]
```

*slice function* - The slice() function in JavaScript creates a new array by copying a portion of an existing array. It takes two arguments: the starting index (inclusive) and the ending index (exclusive) of the portion to be copied. If no ending index is provided, the slice includes all elements from the starting index to the end of the array. The original array is not modified by the slice function.
Returns a new array containing a portion of the array on which it is implemented.Returns a shallow copy of a portion of an array into a new array object.

```js
const arr = ["a","b","c","d"]
arr.slice(2) //["a","b"]
arr//["a","b","c","d"]
```

*sort function* - The `sort()` function in JavaScript is a built-in method that allows you to sort the elements of an array in place, meaning it modifies the original array. You can call the `sort()` function on an array and pass in a compare function as its argument to specify how the elements should be sorted. If no compare function is passed in, the elements are sorted alphabetically by default. 

```js
const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
numbers.sort(); // sorts alphabetically: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

const ascending = (a, b) => a - b;
numbers.sort(ascending); // sorts numerically in ascending order: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

const descending = (a, b) => b - a;
numbers.sort(descending); // sorts numerically in descending order: [9, 6, 5, 5, 5, 4, 3, 3, 2, 1, 1]
```

*reverse function* - In JavaScript, you can reverse a string or an array using the `reverse()` method.This is used for the in-place reversal of the array.It mutates the array.

```javascript
let str = "hello";
let reversedStr = str.split("").reverse().join("");
console.log(reversedStr); // Output: "olleh"
```

And to reverse an array:

```javascript
let arr = [1, 2, 3, 4];
let reversedArr = arr.reverse();
console.log(reversedArr); // Output: [4, 3, 2, 1]
```

*forEach function* - The forEach function is a built-in method in JavaScript that is used to iterate over an array or array-like object and execute a callback function for each element. The callback function is passed three arguments: the current element, its index, and the entire array being iterated. The forEach function does not return anything, it simply executes the provided function on each element of the array.

*at function* - The `at` function in JavaScript is used to retrieve an element from an array at a specific index. It takes one parameter, which is the index of the element to be retrieved. The index can be a positive or negative integer, where negative indices are counted from the end of the array. The function returns the element if it exists at the specified index, and undefined otherwise. 
Note that the `at` function is relatively new and may not be supported by all browsers. In older browsers or environments without support for `at`, you can use bracket notation (e.g., `myArray[index]`) instead to access array elements.


*map function* - The `map()` function in JavaScript is a built-in method available in Array objects. It creates a new array by calling a provided function on each element of the original array. The provided function takes three arguments: the current element being processed, its index, and the array being processed. The `map()` function does not modify the original array.
Calls the argument function once for each element of the given array in order.The map function creates a new array by calling a provided function on every element in the calling array.

```js
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
movements.map(function(mov){
  return mov * 1.1
})
```

*filter function* - The `filter()` function in JavaScript is an array method that creates a new array with all the elements that pass the test implemented by the provided function.Builds a new array containing elements that satisfy a function’s test.The filter function creates a new array with all elements that pass the test implemented by the provided function. The syntax for using `filter()` is:

```js
array.filter(callback(element[, index[, array]])[, thisArg])
```

The `callback` function takes up to three arguments: the current element being processed in the array, its index, and the array itself. The `thisArg` parameter is optional and refers to the value of `this` in the callback function.

For example, to filter out all even numbers from an array, you could use the following code:

```js
const numbers = [1, 2, 3, 4, 5, 6];
const filteredNumbers = numbers.filter(function(number) {
  return number % 2 === 1;
});
console.log(filteredNumbers); // Output: [1, 3, 5]
```

*reduce function* - The `reduce()` function in JavaScript is a higher-order function that allows you to iterate over an array and accumulate the values into a single value. It takes a callback function as its first parameter, which is applied to each element in the array, and then returns the final accumulated value. The callback function takes two parameters: an accumulator (which starts with an initial value or the first element of the array) and the current element being iterated over.
Reduce the array to a single value and executes a provided function for each value of the array.The reduce function executes a reducer function on each element of the array, resulting in a single output value. Here's an example usage:

```js
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0); // 0 is the initial value for the accumulator

console.log(sum); // output: 15

const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 },
  );

console.log(deposits, withdrawals);
```

In this example, the `reduce()` function adds up all the numbers in the `numbers` array and returns the accumulated sum, which is 15.


*find function* - The `find()` function is a built-in method in JavaScript used to search for an element in an array that satisfies a provided condition. It takes in a callback function and returns the first element in the array that meets the condition specified by the callback, or undefined if no such element is found.Get the value of the first element in the array that satisfies the provided condition.

Syntax:
```js
array.find(callback(element[, index[, array]])[, thisArg])
```
Example:
```js
const numbers = [1, 2, 3, 4, 5];
const foundNumber = numbers.find(number => number > 3);
console.log(foundNumber); // output: 4
```


*findIndex function* - The `findIndex` function in JavaScript is an array method that returns the index of the first element in the array that satisfies a provided testing function. If no such element is found, it returns -1. The syntax for using `findIndex` is as follows:

```js
array.findIndex(function(currentValue, index, arr), thisValue)
```

The first argument is a callback function that takes in three parameters: `currentValue` (the current element being processed), `index` (the index of the current element), and `arr` (the array being processed). The second argument (`thisValue`) is optional and sets the value of `this` when executing the callback function.

```js
const arr = [2, 4, 6, 8];
const evenIndex = arr.findIndex((element) => element % 2 === 0);
console.log(evenIndex); // Output: 0
```

In this example, `findIndex` searches through the `arr` array and finds the first element that is even, which is 2 at index 0. Therefore, `evenIndex` is set to 0.


*flat function* - In JavaScript, a flat function is used to flatten a multidimensional array into a one-dimensional array. The flat() function returns a new array with all elements flattened recursively up to the specified depth (by default it flattens all levels). Flatten an array, to reduce the nesting of an array.Here's an example:

```js
const arr = [1, 2, [3, 4], [5, [6, 7]]];
const flattenedArr = arr.flat(); // [1, 2, 3, 4, 5, [6, 7]]
const flattenedArr = arr.flat(2); // [1, 2, 3, 4, 5, 6, 7]
```

Note that the flat() function is only available in newer versions of JavaScript (ECMAScript 2019), so it may not be supported in older browsers. In that case, you can use a polyfill or a custom implementation to achieve the same result.

*flatMap function* - The `flatMap()` function in JavaScript is an array method that combines mapping and flattening into a single step. It takes each element in the array, applies a mapping function to it, and then flattens the result into a new array. The resulting array has the same length as the original array, but the elements may be different due to the mapping and flattening process. The `flatMap()` function can also be used to remove empty or undefined values from an array.

```js
const arr = [1, 2, 3];
const result = arr.flatMap(num => [num, num * 2]);
console.log(result); // [1, 2, 2, 4, 3, 6]
```
In this example, we start with an array [1, 2, 3]. We then call flatMap() on the array, passing in a function that takes each element of the array and returns a new array containing the original number and that number multiplied by 2.

The flatMap() function then flattens the resulting array, giving us the output [1, 2, 2, 4, 3, 6].

So, the flatMap() function allows us to apply a function to each element of an array, and then flatten the resulting array into a single dimension.

3. copyWithin() - Copies part of an array to the same array itself and returns. 	
4. entries() - Fetch all the entries of the same data structure. 	
5. every() - checks that whether all the elements of the array satisfy the given condition. 	
6. fill() - Fill the array with a given static value. 	
13. includes() - If an array contains the certain value, it returns true. 	
14. indexOf() - Return the first index at which a given element may be found, or -1 if it does not exist. 		
16. keys() - Return a new array iterator which contains the keys for each index in the given input array. 	
17. lastIndexOf() - Return the last index at which a given element may be found, or -1 if it does not exist. 		
22. reduceRight() 	Convert elements of the given array from right to left to a single value. 	
26. some() - Each array element’s callback function is run once. 	
29. toLocaleString() - Convert the elements of the given array to string. 		
32. values() - Return a new array Iterator object that contains the values for each index in the array.
33. findLastIndex()
34. findLast()
35. toSorted()
36. toReversed()
37. toSpliced()
38. with()

```js
// EQUALITY
console.log(movements.includes(-130));

// SOME: CONDITION
console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

// EVERY
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

// Separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
```


## Arrays destructuring

`Destructuring` is a feature in JavaScript that allows you to extract values from arrays, objects, and other structures into distinct variables.Destructuring in ES6 is a convenient feature that allows you to extract values from arrays or objects and assign them to variables in a more concise and readable way. It simplifies the process of extracting specific data from complex structures.
`Destructuring Arrays` is the process of breaking down an array into individual elements, and assigning those elements to separate variables. This can be done using array destructuring syntax, which uses square brackets on the left-hand side of the assignment operator to specify the variables to which the array elements should be assigned.

```javascript
const numbers = [1, 2, 3];

// Destructuring the array into individual variables
const [a, b, c] = numbers;

console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 3
```

In this example, we have an array `numbers` containing three values. We use array destructuring to assign each value to a separate variable `a`, `b`, and `c`. Now we can use these variables independently, as shown in the console.log statements.

Destructuring array with the help of spread operator:

```js
const numbers = [1, 2, 3, 4, 5];

// Skipping the second element
const [first, , third, ...rest] = numbers;

console.log(first); // Output: 1
console.log(third); // Output: 3
console.log(rest);  // Output: [4, 5] //Rest Pattern
```

**Reverse values using destructuring** - To reverse values using destructuring in JavaScript, you can use an array with the `reverse()` method and then destructure the reversed array into new variables. Here's an example:

```javascript
const numbers = [1, 2, 3, 4, 5];

// reverse the array
numbers.reverse();

// destructure the reversed array
const [five, four, three, two, one] = numbers;

console.log(one); // Output: 5
console.log(two); // Output: 4
console.log(three); // Output: 3
console.log(four); // Output: 2
console.log(five); // Output: 1
```

In this example, we first create an array of numbers, then use the `reverse()` method to reverse the order of the elements in the array. We then destructure the reversed array into variables named `one`, `two`, `three`, `four`, and `five`. Finally, we log each variable to the console to confirm that the values have been reversed.


**Destructure a nested array** - Destructuring of nested array in JavaScript is a way to extract values from an array that contains other arrays, objects or primitives.
For example, consider the following nested array:

```javascript
const nestedArr = [1, [2, 3], [4, 5, [6, 7]]];
```

To extract the values of this array using destructuring, we can do the following:

```javascript
const [a, [b, c], [d, e, [f, g]]] = nestedArr;
```

Here, the variables `a`, `b`, `c`, `d`, `e`, `f` and `g` are assigned the values from the corresponding positions in the `nestedArr` array.
So, after running the above code, `a` will contain 1, `b` will contain 2, `c` will contain 3, `d` will contain 4, `e` will contain 5, `f` will contain 6, and `g` will contain 7.

