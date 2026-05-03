# Javascript console

- `console.log()` - Used to log general information or messages to the console.It's commonly used for debugging purposes or to display info about state of your app.
It prints the message to the screen.You can see the output of your code.

```js
console.log("Hello")
//output - Hello
```

- `console.error()`:- Outputs an error message to the console.Useful for logging errors that occur during execution of your code.
Dispalys an error message to the console

```js
console.error("Error")
//Display error message with red icon
```

- `console.table()`:- Displays tabular data as a table in the console.Useful for visualizing structured data such as arrays or objects in more organized formats.
Dispalys data in tabe format

```js
let users ={
    {name:"collo", age: 21}
    {name:"Collins", age:24}
};

console.table(users);
```

- `console.assert()`:- Writes an error message to the console if the specified condition is false.commonly used for adding assertions to your code to validate assumptions and catch potential bugs.
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

- `console.warn()`:- Outputs a warning message to the console.Warnings are often used to alert develpoers about potential issues in their code that may not necessarily cause errors but could lead to unexpected behaviours.

```js
console.warn("Warning message..")
```

- `console.info()`:- Outputs an informational message to the console.Similar to console.log(), but it's typically used for logging info that is informative or descriptive in nature.
