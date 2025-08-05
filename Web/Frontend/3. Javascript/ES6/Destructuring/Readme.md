# Destructuring

Destructuring in ES6 is a convenient feature that allows you to extract values from arrays or objects and assign them to variables in a more concise and readable way. It simplifies the process of extracting specific data from complex structures.

* Destructuring Arrays:
Basic Array Destructuring:

```js
const numbers = [1, 2, 3];

// Destructuring assignment
const [a, b, c] = numbers;

console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 3
```

Destructuring array with the help of spread operator:

```js
const numbers = [1, 2, 3, 4, 5];

// Skipping the second element
const [first, , third, ...rest] = numbers;

console.log(first); // Output: 1
console.log(third); // Output: 3
console.log(rest);  // Output: [4, 5]
```

* Destructuring Objects:
Basic Object Destructuring:

```js
const person = { name: 'John', age: 30 };

// Destructuring assignment
const { name, age } = person;

console.log(name); // Output: John
console.log(age);  // Output: 30
```

Alias (Renaming Variables):

```js
const person = { name: 'John', age: 30 };

// Destructuring assignment with alias
const { name: personName, age: personAge } = person;

console.log(personName); // Output: John
console.log(personAge);  // Output: 30
```

Default Values:

```js
const person = { name: 'John' };

// Destructuring assignment with default value
const { name, age = 25 } = person;

console.log(name); // Output: John
console.log(age);  // Output: 25 (default value)
```

Destructuring Function Parameters:

```js
// Destructuring function parameters
function printPersonDetails({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}

const person = { name: 'Alice', age: 28 };
printPersonDetails(person);
// Output: Name: Alice, Age: 28
```
