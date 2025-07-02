# os module

The node:os module provides operating system-related utility methods and properties. It can be accessed using:

```js
const os = require('node:os');
```

```js
const os = require('node:os')

var cpu = os.networkInterfaces()
console.log(cpu)

var cpu = os.machine()
console.log(cpu)

var cpu = os.cpus()
console.log(cpu)
```