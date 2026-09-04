# Objects & Prototypes

An object is a composite value: it aggregates multiple values (primitive values or other objects) and allows you to store and retrieve those values by name. An object is an unordered collection of properties, each of which has a name and a value. Property names are usually strings (property names can also be Symbols), so we can say that objects map strings to values. This string-to-value mapping goes by various names—“hash,” “hashtable,” “dictionary,” or “associative array.” An object is more than a simple string-to-value map, however. In addition to maintaining its own set of properties, a JavaScript object also inherits the properties of another object, known as its `prototype`. The methods of an object are typically inherited properties, and this “prototypal inheritance” is a key feature of JavaScript.
JavaScript objects are dynamic — properties can usually be added and deleted — but they can be used to simulate the static objects and “structs” of statically typed languages. They can also be used (by ignoring the value part of the string-to-value mapping) to represent sets of strings.

Javascript is a prototype based object oriented programming language.Each object is a unique  instance of an object prototype.
Javascript Objects are collections of data and functionality stored as properties and methods that describes the object and what it can do.

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

Objects are typically constants - we can change the properties of the object inside the container.We can't remove or replace the object from the container.


- **Creating Objects** - There are three ways to create an object in JavaScript:-
    1. Object literals
    2. Constructor functions
    3. Using class


- `Object literal`

```js
let name={
   key1:value1,
   key2:value2
}
```

E.g

```js
const newItem ={
   type: 'floral',
   name: dataObject.itemname,
   flowers:{}
   logItem: function (){
      console.log('%c' + this.name, 'font-weight:bold')//making logs bold
   }
}
```

Note: this is the recommended way.


- `Object's create method`: The create method of Object creates a new object by passing the prototype object as a parameter

```js
var object = Object.create(null);
```

- `Constructor Functions OR object-constructor functions`:- Was majoly used before classes was introduced.Currently this approach is not recommended.

```js
var object = new Object();
```

```js
function Laptop(name,RAM,color){
    this.name = name;
    this.RAM = RAM;
    this.color = color;
    changeColor: function (){
      this.color = color;
   }
}

laptop =new Laptop('DELL',16,'Black');
```

- `Using classes`:-


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


## Accessing Objects Properties

To access objects properties,there are two ways:

- Dot Notation:-

```js
object.property
```

- Using bracket Notation

```js
object['property']
```

```js
let person ={
    name:"Collins";
    age:21
};

//Dot Notation
person.name;

//Bracket Notation
let selection ="name";
person[selection];
```

## preventing modification of an object property

You can prevent modification of an object property by using Object.defineProperty to set the property as non-writable, non-configurable, and non-enumerable. You can also use Object.freeze to freeze the entire object.

## use of the delete operator

The delete operator removes a property from an object.

## difference between a deep copy and a shallow copy

- Deep copy: A copy of an object and all objects it references, recursively.
- Shallow copy: A copy of an object that only copies the reference addresses of nested objects.

## Objects methods

- Object.create(): Used to create a new object and link it to prototype of existing object.It returns the new object with specified prototye object and properties.

```js
let Student={
    name:"Collins",
    age:21,
    show(){
        console.log("name is "+ this.name "and age is "+ this.age)
    }
    getNames: function(){
        return this.name;
    }
}

let std1 = Object.create(Student);//Object creation
std1.name="KipCollo";//same properties
std1.age=3;
std1.display()
```

- Object.keys() and Object.values(): It creates an array cntaining keys of an object and array containing values of an object respectfully.

```js
let Employee={
    Location: "location",
    age:24,
    role:"Frontend"
}

console.log(Object.keys(Employee))//['Location','age','role']
console.log(Object.keys(Employee))//['location',24,'Frontend']
```

- Object.entries() and Object.fromEntries(): creates a nested array of key/value pairs of an object and takes array of key/value pairs and convert them to single object.(Reverse of Object.entries)

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

- Object.seal() and Object.freeze(): The Object.freeze() method freezes an object, preventing new properties from being added to it, existing properties from being removed, and existing properties from being changed,Prevents any changes to an object.Object.seal(): Prevents new properties from being added to an object but allows modification of existing properties.

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

- Object.assign(): copies all enumerable own properties from one or more source objects to a target object.



**Prototype chaining** is used to build new types of objects based on existing ones. It is similar to inheritance in a class based language.
The prototype on object instance is available through Object.getPrototypeOf(object) or proto property whereas prototype on constructors function is available through Object.prototype.



**Object Enteries** - Object.entries() method is used to convert a single valued array into an array object with a key-value pair as array items.

```js
const myArr = 
    ["GeeksforGeeks", "A Computer Science Portal for all geeks"];

const arr = myArr.entries()
for(let item of arr){
    console.log(item);
}
```


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

Here's an example:

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
