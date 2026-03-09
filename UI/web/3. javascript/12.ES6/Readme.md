# ES6

ES6 or ECMAScript 2015 is the 6th version of the ECMAScript programming language. ECMAScript is the standardization of Javascript which was released in 2015 and subsequently renamed as ECMAScript 2015.

ECMAScript and Javascript are both different.

## ECMAScript vs JavaScript

ECMAScript: It is the specification defined in ECMA-262 for creating a general-purpose scripting language. In simple terms, it is a standardization for creating a scripting language. It was introduced by ECMA International and is an implementation with which we learn how to create a scripting language.

JavaScript: A general-purpose scripting language that confirms the ECMAScript specification. It is an implementation that tells us how to use a scripting language.
Javascript ES6 has been around for a few years now, and it allows us to write code in a clever way which basically makes the code more modern and more readable. It’s fair to say that with the use of ES6 features we write less and do more, hence the term ‘write less, do more’ definitely suits ES6.

ES6 introduced several key features: -

1. const
2. let
3. Arrow functions
4. Template literal
5. Object and Array Desctructuring
6. Default Parameters
7. Classes
8. Rest parameter and spread operator
9. for/of Loop
10. JavaScript Maps and Sets
11. Promises
12. Symbol
13. String Methods
14. Array Methods
15. Object Enteries

- const: The const keyword is used to declare constant variables whose values can’t be changed. It is an immutable variable except when used with objects.

```js
// Const 
const name = 'Mukul';
console.log(name); 
// Will print 'Mukul' to the console.

// Trying to reassign a const variable
name = 'Rahul';
console.log(name); 
// Will give TypeError.

// Trying to declare const variable first
// and then initialise in another line
const org_name;
org_name = "GeeksforGeeks";
console.log(org_name);
// Throws an syntax error: missing initializer in const declaration
```

- let: The let variables are mutable i.e. their values can be changed. It works similar to the var keyword with some key differences like scoping which makes it a better option when compared to var.

```js
// let
let name = 'Mukul';
console.log(name); 
// Prints Mukul

name = 'Rahul';
console.log(name); 
// Prints Rahul

// Trying to declare let variable first and then initialise in another line
let org_name;
org_name = "GeeksforGeeks";
console.log(org_name); 
// Prints GeeksforGeeks
```

- Arrow functions: Arrow functions are a more concise syntax for writing function expressions. These function expressions make your code more readable, and more modern.

```js
// Function declaration using function keyword
function simpleFunc(){
    console.log("Declared using the function keyword");
}
simpleFunc(); 

// Function declared using arrow functions
const arrowFunc = () => {
    console.log("Declared using the arrow functions");
}
arrowFunc();
```

- Template literal: It allows us to use the JavaScript variables with the string without using the ‘+’ operator. Template literal defined using (“) quotes.

- Object and Array Desctructuring: Destructing in javascript basically means the breaking down of a complex structure(Objects or arrays) into simpler parts. With the destructing assignment, we can ‘unpack’ array objects into a bunch of variables.

```js
// Object Destructuring
const college = {
    name : 'DTU',
    est : '1941',
    isPvt : false
};
let {name, est, isPvt} = college;
console.log(name, est, isPvt);

// Array Destructuring
const arr = ['lionel', 'messi', 'barcelona'];
let[value1,value2,value3] = arr;
console.log(value1, value2, value3);

Output

DTU 1941 false
lionel messi barcelona
```

- Default Parameters: In ES6, we can declare a function with a default parameter with a default value.

```js
function fun(a, b=1){
    return a + b;
}
console.log(fun(5,2));
console.log(fun(3));
```

- Classes: ES6 introduced classes in JavaScript. Classes in javascript can be used to create new Objects with the help of a constructor, each class can only have one constructor inside it. 

```js
// classes in ES6
class Vehicle{
    constructor(name,engine){
        this.name = name;
        this.engine = engine;
    }
}

const bike1 = new Vehicle('Ninja ZX-10R','998cc');
const bike2 = new Vehicle('Duke','390cc');

console.log(bike1.name); // Ninja ZX-10R
console.log(bike2.name); // Duke
```

- Rest parameter and spread operator: Rest Parameter: It is used to represent a number of parameter in an array to pass them together to a function.

```js
// ES6 rest parameter
function fun(...input){
    let sum = 0;
    for(let i of input){
        sum += i;
    }
    return sum;
}
console.log(fun(1,2)); // 3
console.log(fun(1,2,3)); // 6 
console.log(fun(1,2,3,4,5)); // 15
```

Spread Operator: It simply changes an array of n elements into a list of n different elements.

```js
// Spread operator
let arr = [1,2,3,-1];
console.log(...arr);
console.log(Math.max(...arr)); // -1
```

- for/of Loop: The for/of loop allows you to iterate through the iterable items but in a short syntax as compared to other loops.

```js
const myArr = [5, 55, 33, 9, 6]
for(let element of myArr){
    console.log(element);
}
```

- JavaScript Maps and Sets

Map: The maps in JavaScript are used to store multiple items in the form of key-value pairs. The keys of a map can be of any datatype.

Set: A set consist of only unique value, a value can be stored only once in a set. It can store any value of any datatype.

```js
// Maps in JavaScript
const myMap = new Map([
    ["stringKey", 23], 
    [48, "numberedKey"]
]);
myMap.set(false, 0);
myMap.set(1, true);
console.log(myMap.get("stringKey"), 
    myMap.get(48), myMap.get(false), 
    myMap.get(1));

// Sets in JavaScript
const mySet = 
    new Set(["string value", "string value"]);
mySet.add(24);
mySet.add(24);
mySet.add(3);
console.log(mySet);
```

- Promises: JavaScript promises are used to perform the asynchronous tasks, that takes some time to get executed. It combines the synchronous and asynchronous code together.

```js
const JSpromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise is Working")
    }, 2000);
});

JSpromise.then((value) => {console.log(value)});
```

- Symbol: Symbol is a type of primitive data type intriduced in ES6. It is used to specify the hidden identifiers that can not be directly accessed by any other code.

```js
const gfg = {
    name: "GeeksforGeeks",
    desc: "A Computer Science portal for all geeks."
}

let short_name = Symbol("short_name")
gfg.short_name = "GFG";
console.log(`${gfg.name}, \n${gfg.desc}`);
console.log(`Company's Short Name using gfg.short_name: ${gfg.short_name} `)
console.log(`Company's Short Name using gfg[short_name]: ${gfg[short_name]} `)
```

String Methods

JavaScript startsWith(): This method will return true only if the testing string starts with the passed or specified string.
JavaScript endsWith(): This mthod will return true, if the string ends with the passes or specified string value.
JavaScript includes(): It will return true, if the testing string contains the specified or passes value.

```js
// String startsWith()
const useStart = "This string implements the startsWith() method.";
console.log(useStart.startsWith("This string"), 
useStart.startsWith("This is"));

// String endsWith()
const useEnd = "This string implements the endsWith() method.";
console.log(useEnd.endsWith("clear() method."), 
useEnd.endsWith("method."));

// String includes()
const useIncludes = "This string implements the includes() method.";
console.log(useIncludes.includes("includes()"), 
useIncludes.includes("My name"));
```

Array Methods

JavaScript Array.from(): It will return a array from any object which is iterable and has the length property associated with it.
JavaScript Array.keys(): It returns an array of the iterator keys of the array.
JavaScript Array.find(): It will return the value of the first array element that matches or passes the condition of the passed function.
JavaScript Array.findIndex(): It will return the index of the first array element that matches or passes the condition of the passed function.

```js
// Array.from() method
const newArr = Array.from("GeekdforGeeks");
console.log("Implementing Array.from(): ", newArr)

// Array.keys() method
const milkProducts = ["Curd", "Cheese", "Butter", "Ice-Cream"];
const arrayKeys = milkProducts.keys();
console.log("Implementing Array.keys(): ")
for(let key of arrayKeys){
    console.log(key)
}

// Array.find() method
const findArray = ["clock", "strong", "planet", "earth"];
const lessThanSix = (item) => {
    return item.trim.length < 6;
}
console.log("Implementing Array.find(): ", 
findArray.find(lessThanSix));
console.log("Implementing Array.findIndex(): ", 
findArray.findIndex(lessThanSix));
```

Object Enteries

Object.entries() method is used to convert a single valued array into an array object with a key-value pair as array items.

```js
const myArr = 
    ["GeeksforGeeks", "A Computer Science Portal for all geeks"];

const arr = myArr.entries()
for(let item of arr){
    console.log(item);
}
```
