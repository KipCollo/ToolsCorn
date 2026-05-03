# Data Types

Data type refers to the type of data that a JavaScript variable can hold. There are seven primitive data types in JavaScript (Number, BigInt, String, Boolean, Null, Undefined and Symbol). Objects are non-primitives.

## Primitive Types

The primary data types in JavaScript are:

1. Primitive types: undefined, null, boolean, number, string, bigint, and symbol
2. Non-primitive types: object (includes arrays, functions,Objects and more)

In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object and has no methods or properties. A significant difference between primitive data types and non-primitives is that primitive types can only contain one value, and that value must be of the same primitive type. In contrast, non-primitives can accommodate a variable number of values, and these values can be of different primitive types. This flexibility is evident in data structures like arrays and objects.

In the context of primitives, it's important to note that they do not possess methods or properties. However, JavaScript enables access to methods and properties associated with primitive types such as string, number, and boolean. this functionality is due to JavaScript's ability to implicitly convert primitives to objects with wrapper objects when necessary. When properties are accessed on primitives, JavaScript auto-boxes the value into a wrapper object and accesses the property on that object instead.

There are 7 primitive data types:

- `string`
- `number`
- `bigint`
- `boolean`
- `undefined`: Indicates that a variable has been declared but has not yet been assigned a value.
- `Symbol`
- `null`: Represents the intentional absence of any object value. It is an assignment value.Used when you want to clear the variable.

```js
let name="Collins";
let age=21;
let price = 12.67;
let isapproved=true;
let work;//undefined
let work = undefined//undefined
let color= null
```

Since Javascript is dynamic language,variable data types is determined during runtime.To check the type of data use the keyword **typeof**

e.g

```js
typeof name//string
```
