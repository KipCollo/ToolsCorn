# Javascript console

* console.log()
It prints the message to the screen.You can see the output of your code.

```js
console.log("Hello")
//output - Hello
```

* console.error()
Dispalys an error message to the console

```js
console.error("Error")
//Display error message with red icon
```

* console.table()
Dispalys data in tabe format

```js
let users ={
    {name:"collo", age: 21}
    {name:"Collins", age:24}
};

console.table(users);
```

* console.assert()
Logs a message if provided assertion is false.

```js
let age=8;
consoe.assert(age>=18, "User is not an adult")
```

* console.clear()
Clears the console

```js
console.clear();
```

* console.group() & console.groupEnd()
Groups logging statements together

```js
console.group("User details")
 console.log("Name: Collo")
 console.log("Age: 21")
console.groupEnd();
```
