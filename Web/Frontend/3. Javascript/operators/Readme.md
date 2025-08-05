# Operators

## == and === operators

1. == (loose equality): Compares two values for equality after converting both values to a common type.
2. === (strict equality): Compares two values for equality without performing type conversion.

```js
let a = 5;
let b ="5";

if(a == b){
   console.log("Match")
}

//Match

let a = 5;
let b ="5";

if(a === b){
   console.log("Match")
} else {
   console.log("No match")
}

//No match
```

- instanceof operator: The instanceof operator tests whether an object has in its prototype chain the prototype property of a constructor.

- typeof operator: The typeof operator returns a string indicating the type of the unevaluated operand.

```js
typeof(12)
//output is "number"
typeof("Hello");
//output "string"
```
