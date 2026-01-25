# Declaring variables

You can declare variables using the keyword: **let** and **var**.

```ts
let name ="Collo" // It's scope is to nearest block
var age =21 // It's scope to function.
```

- Always use **let** keyword when declaring variables

## Type Annotations on Variables

When you declare a variable using const, var, or let, you can optionally add a type annotation to explicitly specify the type of the variable.

Types can include:

- number (Integer or floating)
- boolean (true or false)
- string
- any
- array
- enum

```ts
let num: number=20;
let name: string = "Collins";
let pay: boolean = true;
let id: any ='A'
let num: any[]= [1, "Call", 'A']
```

## Type assertion

You can show the type using two ways:

- Prefexing the variable with angle brackets

 ```ts

 let name;
 name = "Egerton"
 let endwithN = (<string>name).endsWith('n')
 let endwithN = (name as string).endsWith('n') // alternative 
 ```
