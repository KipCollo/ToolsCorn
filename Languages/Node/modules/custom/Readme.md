# Custom modules

Modules are the collection of JavaScript codes in a separate logical file that can be used in external applications based on their related functionality. There are two ways to create modules in Node.js i.e. either via CommonJS or ESM.

```js
//sum.js
const add = (num1,num2)=> num1 + num2;

module.exports = add
```

```js
//cust.js
const add = (num1,num2)=> num1 + num2;
const PI  =3.14;
class MathsObj{
  constructor(){
    console.log("Math obj")
  }
}
module.exports.add = add;
module.exports.PI= PI;
module.exports.MathsObj = MathsObj;

//Alternative to export
module.exports ={ sum: sum, PI : PI, MathsObj: MathsObj}
```

```js

const sum = require('./sum');
const cust =require('./cust');
sum(1,3)
cust.add(2,9)
cust.PI;
new cust.MathsObj();
```
