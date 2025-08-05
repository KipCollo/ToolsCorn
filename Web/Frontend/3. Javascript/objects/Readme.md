# Objects

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

## There are three ways to create an object in JavaScript

- Object literals
- Constructor functions
- Using class

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

- `Constructor Functions OR object-constructor functions`:- Was majoly used before classes was introduced.

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
