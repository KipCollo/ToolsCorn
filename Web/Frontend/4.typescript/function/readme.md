# Functions

Functions are a core building block in TypeScript. Functions allow you to wrap a piece of code and reuse it multiple times. Functions in TypeScript can be either declared using function declaration syntax or function expression syntax.

> Function Declaration Syntax:

```typescript
function name(param1: type1, param2: type2, ...): returnType {
  return value;
}
```

> Function Expression Syntax:

```typescript
let name = function(param1: type1, param2: type2, ...): returnType {
  return value;
};
```

## Arrow Functions

```Typescript
let log = function(message){
    console.log(message);
}
```

```Typescript
let log = (message) => console.log(message);

```

## Typing Functions

In TypeScript, functions can be typed in a few different ways to indicate the input parameters and return type of the function.

Function declaration with types:

```typescript
function add(a: number, b: number): number {
  return a + b;
}
```

Arrow function with types:

```typescript
const multiply = (a: number, b: number): number => {
  return a * b;
};
```

Function type:

```typescript
let divide: (a: number, b: number) => number;

divide = (a, b) => {
  return a / b;
};
```

## Function Overloading

Function Overloading in TypeScript allows multiple functions with the same name but with different parameters to be defined. The correct function to call is determined based on the number, type, and order of the arguments passed to the function at runtime.

```typescript
function add(a: number, b: number): number;
function add(a: string, b: string): string;

function add(a: any, b: any): any {
  return a + b;
}

console.log(add(1, 2)); // 3
console.log(add('Hello', ' World')); // "Hello World"
```

## Parameters

- Optional Parameters

```ts
function add(nu1: number,num2: number,num3?: number): number{
  return num3? num1 + num2 + num3 : num1 + num2;
}

add(2,3)
add(2,3,4)
```

- Required Parameters

```ts
function add(nu1: number,num2: number,num3=10): number{
  return num1 + num2 + num3;
}

add(2,3)
add(2,3,4)
```

- Rest Parameter

```ts
function add(nu1: number,num2: number, ...num3: number[]){
  return num1 + num2 + num3.reduce((a,b) => a +b, 0);
}

let nums = [1,2,4,5]
add(2,3, ...nums)
add(2,3,1,2,4,5)
```
