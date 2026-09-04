# Arrays

JavaScript Array is used to store multiple elements in a single variable. It can hold various data types, including numbers, strings, objects, and even other arrays. It is often used when we want to store a list of elements and access them by a single variable.
An Array is a type of object

Syntax:

```js
const arr = ["Item1", "Item2", "Item3", ...];
```

Arrays in Javascript is of dynamic size.You can also add any type of data type.

```js
let newArray = []; // Create a new empty array 
let courses = ["HTML", "CSS", "JavaScript", "React"]; // Create and initialize an array
const items = [1, 2, true, "collins", 8.0]

// Display the array items 
console.log(courses);//  ["HTML", "CSS", "JavaScript", "React"]

// Adding element to arry
courses[4]=2;
console.log(courses);// ["HTML", "CSS", "JavaScript", "React",2]
courses[9]="JAVA"
console.log(courses);// ["HTML", "CSS", "JavaScript", "React",2,"JAVA"]
courses.length //10
courses[7]//undefined

//accessing elemnts in array
courses[1]//CSS

// forEach loop to push elements 
// into new array 
courses.forEach(function (course) { 
newArray.push(course); 
}); 

```

*JavaScript Array Constructor* - In JavaScript, a constructor gets called when an object is created using the new keyword.

*JavaScript Array Properties* - A JavaScript property is a member of an object that associates a key with a value.
Instance Property:- An instance property is a property that has a new copy for every new instance of the class.

1. length - 


## JavaScript Array Methods

JavaScript methods are actions that can be performed on objects.

`Static Method`:-If the method is called using the array class itself then it is called a static method.
`Instance Method`:- If the method is called on an instance of a array then it is called an instance method.

1. at() - Returns the element of that index 	
2. concat() - Merge two or more arrays together. 	
3. copyWithin() - Copies part of an array to the same array itself and returns. 	
4. entries() - Fetch all the entries of the same data structure. 	
5. every() - checks that whether all the elements of the array satisfy the given condition. 	
6. fill() - Fill the array with a given static value. 	
7. filter() - Builds a new array containing elements that satisfy a function’s test.The filter function creates a new array with all elements that pass the test implemented by the provided function.	
8. find() - Get the value of the first element in the array that satisfies the provided condition. 	
9. findIndex() - Return the first index of the element in a given array that satisfies the provided testing function. 	
10. flat() - Flatten an array, to reduce the nesting of an array. 	
11. flatMap() - This is used to flatten the input array element into a new array. 	
12. forEach() - It is provided a function once for each element of the array.The forEach function executes a provided function once for each array element.
13. includes() - If an array contains the certain value, it returns true. 	
14. indexOf() - Return the first index at which a given element may be found, or -1 if it does not exist. 	
15. join() - Join the elements of an array into a string. 	
16. keys() - Return a new array iterator which contains the keys for each index in the given input array. 	
17. lastIndexOf() - Return the last index at which a given element may be found, or -1 if it does not exist. 	
18. map() - Calls the argument function once for each element of the given array in order.The map function creates a new array by calling a provided function on every element in the calling array.	
19. pop() -	Remove the last element of the array and also returns the removed element. 	
20. push() -	Push one or more values into the array. 	
21. reduce() 	Reduce the array to a single value and executes a provided function for each value of the array.The reduce function executes a reducer function on each element of the array, resulting in a single output value.	
22. reduceRight() 	Convert elements of the given array from right to left to a single value. 	
23. reverse() 	This is used for the in-place reversal of the array. 	
24. shift() - Removes the first element of the array thus reducing the size of the original array by 1. 	
25. slice() - Returns a new array containing a portion of the array on which it is implemented.Returns a shallow copy of a portion of an array into a new array object.	
26. some() - Each array element’s callback function is run once. 	
27. sort() - Sort an array in place in a given order according to the compare() function. 	
28. splice() - Modify the contents of an array by removing the existing elements.Changes the contents of an array by removing or replacing existing elements and/or adding new elements.
29. toLocaleString() - Convert the elements of the given array to string. 	
30. toString() - Return the string representation of the array elements. 	
31. unshift() - Add one or more elements to the beginning of the given array. 	
32. values() - Return a new array Iterator object that contains the values for each index in the array.

```js
items.forEach(
    (item) => console.log(item)
)
```

Array.from() - The Array.from() method creates a new, shallow-copied array instance from an array-like or iterable object.
Array.isArray() method - The Array.isArray() method determines whether the passed value is an array.
Array.prototype.sort() method - The Array.prototype.sort() method sorts the elements of an array in place and returns the sorted array.

Array.from() - Convert a string into an array.

```js
const str = "Hello"
const strArray = Array.from(str)

console.log(strArray)//["H","e","l","l","o"]
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
console.log(rest);  // Output: [4, 5]
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

