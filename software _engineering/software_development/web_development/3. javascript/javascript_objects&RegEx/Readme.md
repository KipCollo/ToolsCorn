# Objects & RegEx

Object: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
Object basics: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics#Object_basics

In JavaScript, an object is a collection of key-value pairs, where the keys are strings (or symbols) and the values can be any JavaScript data type, including other objects. Objects in JavaScript are dynamic, meaning that their properties can be added, modified, or removed at runtime. They are also reference types, which means that when you assign an object to a variable, the variable holds a reference to the object in memory rather than a copy of its value.

`An object is a composite value`: it aggregates multiple values (primitive values or other objects) and allows you to store and retrieve those values by name. An object is an unordered collection of properties, each of which has a name and a value. Property names are usually strings (property names can also be Symbols), so we can say that objects map strings to values. This string-to-value mapping goes by various names—“hash,” “hashtable,” “dictionary,” or “associative array.” An object is more than a simple string-to-value map, however. In addition to maintaining its own set of properties, a JavaScript object also inherits the properties of another object, known as its `prototype`. The methods of an object are typically inherited properties, and this “prototypal inheritance” is a key feature of JavaScript.
`JavaScript objects are dynamic` — properties can usually be added and deleted — but they can be used to simulate the static objects and “structs” of statically typed languages. They can also be used (by ignoring the value part of the string-to-value mapping) to represent sets of strings.
`Objects are typically constants` - we can change the properties of the object inside the container.We can't remove or replace the object from the container.

Javascript is a prototype based object oriented programming language.Each object is a unique  instance of an object prototype.
Javascript Objects are collections of data and functionality stored as properties and methods that describes the object and what it can do.


**Creating Objects** - There are three ways to create an object in JavaScript:-
1. Object literals
2. Constructor functions
3. Using class

*Object literal*:- Object literal syntax in JavaScript is a way to create an object by directly defining its properties and values within curly braces. It is a shorthand notation for creating objects without using the constructor function. For example:

```js
let name={
   key1:value1,
   key2:value2
}
```

```js
const address = {
  location: "Missipi",
  po_bos: 102928
}
const gender = ['male','female']
const myObject = { 
  name: 'John', 
  age: 30,
  gender: [gender[1]]
  city: 'New York',
  address //ES6 Enhanced object literal
};
```

Note: this is the recommended way.

*Object's create method*: The create method of Object creates a new object by passing the prototype object as a parameter.
Used to create a new object and link it to prototype of existing object.It returns the new object with specified prototye object and properties.

```js
var object = Object.create(null);
```

```js
let Student={
    name:"Collins",
    age:21,
}

let std1 = Object.create(Student);//Object creation
std1.name="KipCollo";//same properties
std1.age=3;
```

*Constructor Functions OR object-constructor functions*:- Was majoly used before classes was introduced.Currently this approach is not recommended.To create an object use the `new` keyword in JavaScript, you can define a constructor function and use the `new` keyword to instantiate an object of that type. Here's an example:

```js
var object = new Object();
```

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Create a new instance of the Person object
const john = new Person('John', 30);

console.log(john); // Output: { name: 'John', age: 30 }
```

In this example, we define a constructor function called `Person`, which takes two parameters (`name` and `age`) and assigns them to properties on the newly created object using the `this` keyword. To create a new instance of the `Person` object, we use the `new` keyword followed by the name of the constructor function and any arguments that need to be passed to it.
When the `new` keyword is used with a constructor function, it creates a new object, sets the `this` keyword to refer to that object, executes the code inside the constructor function (which typically sets up the object's properties), and then returns the new object.

*Using classes*:-

```js
class Laptop{
    constructor(name,RAM,color){
        this.name = name;
        this.RAM = RAM;
        this.color = color;
    }

    changeColor(color){
        this.color = color;
    }
}

const laptop = new Laptop(
    'Samsung',
    8,
    'Black'
);

```


Properties are defined using key-value pairs.

```js
const backpack = {
    name: "everday Backpack",
    color: "grey",
    volume: 30,
    strapLength: {
        left: 26,
        right: 26
    }
    lidOpen: false,

    toggleLid: function(lidStatus){
        this.lidOpen = lidStatus;
    }
}
```


**Object properties : Key and Value** - In JavaScript, an object is a collection of key-value pairs. The "key" in an object refers to the unique identifier that is used to access its corresponding "value". 
For example, consider an object representing a person:

```js
let person = {
  name: "John",
  age: 30,
  address: "123 Main St"
};
```

In this case, `name`, `age`, and `address` are the keys, while `"John"`, `30`, and `"123 Main St"` are their corresponding values.


*Array inside an Object* - In JavaScript, an array inside an object is a way to store multiple values in a single property of an object. This property can be accessed using the dot notation or square bracket notation. 
For example, let's say we have an object called "car" with properties such as "make", "model", and "year". We can add an array called "features" that includes additional information about the car, such as its color, engine size, and transmission type.

Here's an example:

```js
const car = {
  make: "Toyota",
  model: "Camry",
  year: 2021,
  features: ["red", "2.5L", "automatic"]
};
```

We can access the values in the "features" array using the dot notation or square bracket notation:

```js
console.log(car.features[0]); // Output: "red"
console.log(car["features"][1]); // Output: "2.5L"
``` 

So, by using an array inside an object, we can organize related data together and easily access it when needed.

*Function inside an Object* - In JavaScript, objects can contain functions as properties, which are called "methods". These methods can be accessed and invoked using dot notation.
For example, consider an object representing a car:

```js
let car = {
  make: 'Toyota',
  model: 'Camry',
  year: 2018,
  start: function() {
    console.log('Starting the car...')
  },
  drive: function(speed) {
    console.log(`Driving at ${speed} mph...`)
  },
  stop: function() {
    console.log('Stopping the car.')
  }
}
```

Here, `start`, `drive`, and `stop` are all methods of the `car` object. They can be invoked by calling them using dot notation:

```js
car.start(); // Output: Starting the car...
car.drive(50); // Output: Driving at 50 mph...
car.stop(); // Output: Stopping the car.
```

Inside these methods, you can access other properties of the object using the `this` keyword:

```js
let car = {
  make: 'Toyota',
  model: 'Camry',
  year: 2018,
  start: function() {
    console.log(`Starting the ${this.make} ${this.model}...`)
  },
  // ...
}
```

Here, `this.make` and `this.model` refer to the `make` and `model` properties of the `car` object.


**Object Annotations** - Object Annotations in javascript are a way to define and initialize objects. An object is created by enclosing key-value pairs within curly braces `{}`. The keys represent the properties of the object and the values represent the values of those properties.
There are two ways to add properties to an object using object annotations:

1. `Dot notation`: Here, the object property is accessed using the dot `.` operator and assigned a value.

```js
const myObject = {};
myObject.property1 = "value1";
myObject.property2 = "value2";
```

2. `Bracket notation`: Here, the object property is accessed using the square brackets `[]` and assigned a value.

```js
const myObject = {};
myObject["property1"] = "value1";
myObject["property2"] = "value2";
```

Object annotations can also be used to define object literals, which are objects that are defined with their properties and values at the same time. Here's an example:

```js
const myObject = {
  property1: "value1",
  property2: "value2"
};
``` 

In this case, the properties are defined inside the curly braces `{}` separated by commas `,`.


**Accessing Objects Properties**:- To access objects properties,there are two ways:

*Dot Notation*:- In JavaScript, dot notation is a way to access properties and methods of an object using the dot (.) operator. Using dot notation, you can access properties and methods of an object by specifying the object name followed by a dot and then the property or method name.
For example, if you have an object called "person" with properties "name" and "age", you can access the name property using dot notation like this:

```js
object.property
```

```js
var person = {
  name: "John",
  age: 30
};

console.log(person.name); // Output: "John"
```

Similarly, you can call a method of an object using dot notation like this:

```js
var person = {
  name: "John",
  age: 30,
  sayHello: function() {
    console.log("Hello!");
  }
};

person.sayHello(); // Output: "Hello!"
``` 

Note that dot notation only works for accessing properties and methods that have valid identifier names. For properties or methods with special characters or reserved words in their names, you must use bracket notation instead.

*Using bracket Notation* - Bracket annotation in JavaScript is a way of accessing an object's property using square brackets and a string key instead of the traditional dot notation. For example, instead of writing `object.property`, you can write `object['property']`. This is useful when the property name is dynamic or contains special characters that are not valid as identifier names. 
For instance, if you have an object `myObj` with a property whose name is stored in a variable `propName`, you can access it using bracket annotation like this: `myObj[propName]`. Similarly, if the property name contains special characters like spaces or hyphens, you can use bracket annotation to access it: `myObj['special-prop']`.

Note that while most objects in JavaScript support bracket annotation, there are some exceptions, such as primitive values (e.g., strings, numbers) and some built-in objects like `Math` or `Date`.

```js
object['property']
```

```js
let person ={
    name:"Collins";
    age:21
};

//Bracket Notation
person['name']//Collins
let selection ="Choose info from person, either age or name";
person[selection];
```


**this inside an Object** - In JavaScript, `this` refers to the current object that a method is being called on, or the object that a function is invoked with. It allows you to access and modify properties and methods of the object within which `this` is used.

Some common uses of `this` inside an object include:

1. Accessing object properties: you can use `this.propertyName` to access a property of the current object.
2. Modifying object properties: you can use `this.propertyName = value` to modify a property of the current object.
3. Calling object methods: you can use `this.methodName()` to call a method defined in the current object.
4. Creating new properties or methods: you can use `this.newPropertyName = value` or `this.newMethodName = function() { }` to add new properties or methods to the current object.

Note that the value of `this` depends on how a function is called. When a function is called without an explicit context (i.e., as a standalone function), `this` refers to the global object (e.g., `window` in the browser). To avoid this, you can use the `bind`, `call`, or `apply` methods to explicitly set the value of `this`.


```js
const person = {
    name: "Collins",
    birthYear: 2020,
    calcAge: function () {
        this.age = 2030 - this.birthYear
        return this.age
    },
    summary: function () {
        return `${this.name} is a ${this.calcAge()} year old person`
    }
}
console.log(person.summary())//Collins is a 10 year old person
```

**Deep copy and a shallow copy** - Deep copy is a copy of an object and all objects it references, recursively.Shallow copy is a copy of an object that only copies the reference addresses of nested objects.


## Objects methods

In JavaScript, object functions `keys()`, `values()`, and `entries()` are used to extract information from an object.

- The `keys()` function takes an object and returns an array of all the keys within an object.
- The `values()` function takes an object and returns an array of all the values within an object.
- The `entries()` function takes an object and returns an array of arrays that contain key-value pairs as `[key, value]`.

Here's an example:

```javascript
const obj = { a: 1, b: 2, c: 3 };

console.log(Object.keys(obj)); // output: ["a", "b", "c"]
console.log(Object.values(obj)); // output: [1, 2, 3]
console.log(Object.entries(obj)); // output: [["a", 1], ["b", 2], ["c", 3]]
```

Note that these functions iterate over the enumerable properties of an object. If you want to include non-enumerable properties, you can use `Object.getOwnPropertyNames()`, `Object.getOwnPropertySymbols()`, or `Reflect.ownKeys()`.

- *Object.keys() and Object.values()*: It creates an array cntaining keys of an object and array containing values of an object respectfully.

```js
let Employee={
    Location: "location",
    age:24,
    role:"Frontend"
}

console.log(Object.keys(Employee))//['Location','age','role']
console.log(Object.keys(Employee))//['location',24,'Frontend']
```

- *Object.entries() and Object.fromEntries()*: creates a nested array of key/value pairs of an object and takes array of key/value pairs and convert them to single object.(Reverse of Object.entries)

```js
let Employee={
    Location: "location",
    age:24,
    role:"Frontend"
}

let EmployeeArray=[{"Location","location"},{"age",24},{"role","Frontend"}]

Object.entries(Employee)//[["Location","location"],["age",24],]"role","Frontend"}]
Object.fromEntries(EmployeeArray)//{ Location: "location",age:24,role:"Frontend"}
```

- *Object.seal() and Object.freeze()*: The Object.freeze() method freezes an object, preventing new properties from being added to it, existing properties from being removed, and existing properties from being changed,Prevents any changes to an object.Object.seal(): Prevents new properties from being added to an object but allows modification of existing properties.

```js
const frozen = Object.freeze({name:"Collins"});
const sealed = Object.seal({name:"Collins"});

//New property
frozen.name="KipCollo";//frozen = {name:"Collins"}
frozen.name="KipCollo";//sealed = {name:"Collins"}

//Removing existing one
delete frozen.name;//frozen = {name:"Collins"}
delete sealed.name;//sealed = {name:"Collins"}

//update existing one
frozen.name="KipCollo";//frozen = {name:"Collins"}
frozen.name="KipCollo";//sealed = {name:"KipCollo"}

```

- *Object.assign()*: copies all enumerable own properties from one or more source objects to a target object.It shallow copies.

```js
const collo = {
  fname: "Collo",
  lname: "Kosgei",
  age: 30
}

const colloCopy = Object.assign({},collo)
```

- *Object.defineProperty()* - You can prevent modification of an object property by using Object.defineProperty to set the property as non-writable, non-configurable, and non-enumerable. You can also use Object.freeze to freeze the entire object.


**Prototype chaining** is used to build new types of objects based on existing ones. It is similar to inheritance in a class based language.
The prototype on object instance is available through Object.getPrototypeOf(object) or proto property whereas prototype on constructors function is available through Object.prototype.


## Destructuring Objects

Destructuring objects in JavaScript is a way to extract values from an object and assign them to variables in a concise and readable manner.

Here's an example:

```javascript
const person = {
  name: 'Alice',
  age: 30,
  address: {
    city: 'New York',
    state: 'NY'
  }
};

// Destructuring assignment
const { name, age, address: { city } } = person;

console.log(name); // 'Alice'
console.log(age); // 30
console.log(city); // 'New York'
```

In the above example, we are using destructuring assignment to extract the `name`, `age`, and `city` properties from the `person` object. The syntax `{ name, age, address: { city } }` specifies which properties to extract and how to assign them to variables.

Note that we can also rename variables during destructuring:

```javascript
const { name: fullName, age: yearsOld } = person;

console.log(fullName); // 'Alice'
console.log(yearsOld); // 30
``` 

This allows us to use a different variable name for clarity or to avoid naming conflicts.

Default Values:

```js
const person = { name: 'John' };

// Destructuring assignment with default value
const { name, age = 25 } = person;

console.log(name); // Output: John
console.log(age);  // Output: 25 (default value)
```

*Extract any value from object using destructring* - To extract any value from an object in JavaScript using destructuring, you can use the following syntax:

```javascript
const { property } = object;
```

where `property` is the name of the property you want to extract and `object` is the object containing that property.

Here's an example:

```javascript
const person = {
  name: "John",
  age: 30,
  gender: "male"
};

const { name } = person;

console.log(name); // Output: "John"
```

In this example, we're extracting the value of the `name` property from the `person` object using destructuring. The value is assigned to a variable named `name`, which we then log to the console. 

You can also extract multiple properties at once by separating them with commas:

```javascript
const { name, age } = person;

console.log(name, age); // Output: "John" 30
```

*rename Object property name in destrcutring* - In JavaScript destructuring, you can rename an object property by using the colon (:) syntax. Here's an example:

```javascript
const person = { firstName: 'John', lastName: 'Doe' };
const { firstName: first, lastName: last } = person;

console.log(first); // Output: "John"
console.log(last); // Output: "Doe"
```

In the above example, we are renaming `firstName` to `first` and `lastName` to `last` while destructuring the `person` object. This means that we are creating two new variables `first` and `last` whose values are the respective values of the `firstName` and `lastName` properties of the `person` object.

*Setting Default values in destructuring* - In JavaScript, it's possible to set default values for variables when using destructuring assignment. This means that if the value being destructured is undefined or null, a default value will be used instead.

In JavaScript, default values can be set in destructuring by using the `=` operator. The default value will be used if the corresponding variable in the destructuring assignment is undefined.

Here's an example:

```javascript
// Without default values
let person = { name: "John" };
let { name, age } = person;
console.log(name); // "John"
console.log(age); // undefined

// With default values
let personWithAge = { name: "Jane" };
let { name: newName, age = 25 } = personWithAge;
console.log(newName); // "Jane"
console.log(age); // 25
```

In the second example, we're setting a default value of 25 for the `age` variable. If `age` is undefined in the object being destructured (`personWithAge`), the default value of 25 will be used instead. We're also renaming the `name` variable to `newName` using the syntax `{ name: newName }`.

```javascript
const { name = "Anonymous", age = 18 } = {};
console.log(name); // Output: "Anonymous"
console.log(age); // Output: 18
```

In this code, we are using object destructuring to create two variables `name` and `age`, with default values of "Anonymous" and 18 respectively. Since we're destructuring an empty object `{}`, the values of `name` and `age` will be the defaults we specified.


*Destructuring of Nested Object* - Destructuring is a feature in JavaScript that allows you to extract values from objects and arrays and assign them to variables. When dealing with nested objects, destructuring can provide a concise way to access their properties.

Here's an example of destructuring a nested object:

```javascript
const user = {
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zip: '12345'
  }
};

// Extracting nested object properties using destructuring
const { name, age, address: { street, city, state, zip }} = user;

console.log(name); // Output: John
console.log(age); // Output: 30
console.log(street); // Output: 123 Main St
console.log(city); // Output: Anytown
console.log(state); // Output: CA
console.log(zip); // Output: 12345
```

In the example above, we have an object `user` with a nested object `address`. We use destructuring to extract the properties `name`, `age`, `street`, `city`, `state`, and `zip` from the `user` object by assigning them to variables with the same names. We also use the syntax `address: { ... }` to destructure the nested `address` object.


```js
let a = 10;
let b =6;
const obj = {a:23, b:7, c: 8}
({a,b} = obj)//wrap in parenthesis
```


---------

## Regular Expressions

*Pattern Modifiers* -
e — Evaluate replacement
i — Perform case-insensitive matching
g — Perform global matching
m — Perform multiple line matching
s — Treat strings as single line
x — Allow comments and whitespace in pattern
U — Non Greedy pattern

*Brackets* -
[abc] - Find any of the characters between the brackets
[^abc] - Find any character not in the brackets
[0-9] - Used to find any digit from 0 to 9
[A-z] - Find any character from uppercase A to lowercase z
(a|b|c) - Find any of the alternatives separated with |

*Metacharacters* -
. — Find a single character, except newline or line terminator
\w — Word character
\W — Non-word character
\d — A digit
\D — A non-digit character
\s — Whitespace character
\S — Non-whitespace character
\b — Find a match at the beginning/end of a word
\B — A match not at the beginning/end of a word
\0 — NUL character
\n — A new line character
\f — Form feed character
\r — Carriage return character
\t — Tab character
\v — Vertical tab character
\xxx — The character specified by an octal number xxx
\xdd — Character specified by a hexadecimal number dd
\uxxxx — The Unicode character specified by a hexadecimal number xxxx

*Quantifiers* -
n+ — Matches any string that contains at least one n
n* — Any string that contains zero or more occurrences of n
n? — A string that contains zero or one occurrences of n
n{X} — String that contains a sequence of X n’s
n{X,Y} — Strings that contains a sequence of X to Y n’s
n{X,} — Matches any string that contains a sequence of at least X n’s
n$ — Any string with n at the end of it
^n — String with n at the beginning of it
?=n — Any string that is followed by a specific string n
?!n — String that is not followed by a specific string n




`Assigning values using rest operator in object` - In JavaScript, the rest operator can be used to assign values to an object. The rest operator allows you to gather all remaining properties and pack them into an array. Here's an example:

```javascript
const { name, age, ...rest } = { name: "John", age: 30, city: "New York", country: "USA" };
```

In the above example, we have an object with four properties: `name`, `age`, `city` and `country`. We are using object destructuring to assign the values of `name` and `age` to variables of the same name, while the remaining properties are assigned to a variable called `rest` using the rest operator.
After executing this code, the value of `name` will be `"John"` and `age` will be `30`, while the `rest` variable will contain an object with the properties `city` and `country`.

You can also use the spread operator to merge two or more objects, as shown below:

```javascript
const obj1 = { name: "John", age: 30 };
const obj2 = { city: "New York", country: "USA" };

const newObj = { ...obj1, ...obj2 };
```

In the above example, we have two objects `obj1` and `obj2`, which have different properties. We are merging these two objects into a new object called `newObj`, using the spread operator. The resulting object has all the properties from both `obj1` and `obj2`.

