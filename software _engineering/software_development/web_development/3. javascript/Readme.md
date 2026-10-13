# JavaScript

`JavaScript` is a high-level, interpreted(JIT compiled),protyped-based object-oriented, multi-paradigm and Dynamic programming language that is commonly used to create interactive effects within web browsers. It is a core technology of the World Wide Web, alongside HTML and CSS.
It was created by Brendan in 10 days.It was earlier called LiveScript.The microsoft team re-engineered and called it JScript.This led to confusion which ECMAscript(European Computer Manufacturers Association Cript) was introduced to standardize the language.

Javascript can be run in the Browser(contains Javascript Engine) e.g FireFox(SpiderMonkey), Chrome(v8) and also can be run in Node.It allows you to add interactivity to your pages. Common examples that you may have seen on the websites are sliders, click interactions, popups and so on.In most cases, JavaScript is used to create responsive, interactive elements for web pages, enhancing the user experience. Things like menus, animations, video players, interactive maps, and even simple in-browser games can be created quickly and easily with JavaScript.
It can be used to build: Web/Mobile Apps/desktop apps,Real-Time Networking apps,Command-line tools and games.

JavaScript is a scripting language of the web. As the web evolves from a static to a dynamic environment, technology focus is shifting from static markup and styling—frequently handled by content management systems or automated scripts—to dynamic interfaces and advanced interaction.
Disabling Javascript enables adds free web sites.

**JavaScript Features** -

- `High level language` - A high-level programming language is a type of programming language that provides a higher level of abstraction from the computer's hardware reources and is designed to be more human-readable and easier to use than low-level languages. Examples of high-level languages include Python, Java, C#, and JavaScript. High-level languages are often used for general-purpose programming, and they often provide a higher level of functionality and convenience than low-level languages.
- `Garbage Collected` - Garbage collection is a feature of Javascript where the runtime system automatically manages the memory used by the program. It periodically checks for and frees memory that is no longer being used by the program. This eliminates the need for the programmer to manually manage memory allocation and deallocation, which can be a source of bugs and memory leaks. Garbage collection is a technique used in many modern programming languages like Java, C#, Python, Ruby, among others to manage the memory allocation and deallocation. This is a key feature of these languages, as it reduces the risk of memory-related bugs, improves performance and increases developer productivity.
- `Interpreted Language (Just in time compiler)` - JavaScript is an interpreted language, which means that the code is not compiled into machine-readable code before it is executed. Instead, the code is read and executed line-by-line by a JavaScript engine such as V8 (used in Chrome and Node.js), SpiderMonkey (used in Firefox) or Chakra (used in Edge) .
  JIT or Just-In-Time compilation is a technique used by JavaScript engines to improve the performance of interpreted languages like JavaScript. JIT compilation is a way of converting JavaScript code into machine code at runtime, typically just before it is executed. This allows the JavaScript engine to execute the code faster and more efficiently, as the machine code can be directly executed by the CPU. This is done dynamically at runtime, hence the name Just-In-Time. This technique improves the performance of JavaScript and allows it to run large and complex applications.
- `Multi Paradigm` - JavaScript is a multi-paradigm programming language, which means it supports several programming paradigms such as: - Object-oriented programming (OOP) - JavaScript supports classes, objects, inheritance, and encapsulation through the use of prototypes. - Functional programming - JavaScript supports the use of first-class functions and closures, making it easy to use functional programming techniques. - Event driven programming - JavaScript supports the event based programming in which events like mouse click, keypress can be handled. - Imperative programming - JavaScript supports the use of statements that change a program's state, and can be used in an imperative style.
  JavaScript's flexibility and support for different paradigms make it a versatile language that can be used for a wide range of tasks, from simple scripts to complex web applications. This also allows developers to use the best approach for their specific use case, and to write more expressive, maintainable and efficient code.
- `Prototype based object-oriented` - In JavaScript, prototypes are a way of implementing object-oriented programming (OOP) concepts such as inheritance and encapsulation. A prototype is an object that serves as a template for creating other objects. Each object in JavaScript has a prototype, which can be accessed using the \_\_proto\_\_ property.
  When a property or method is accessed on an object, the JavaScript engine first looks for it on that object. If it is not found, it then looks for it on the object's prototype, and so on, until it reaches the top of the prototype chain. This is called "prototype-based inheritance"
  This prototype-based approach to OOP in JavaScript differs from class-based OOP, which is used in languages like Java, C#, and C++. In class-based OOP, objects are instances of classes, which define the properties and methods that the objects will have. In prototype-based OOP, objects inherit properties and methods from other objects directly, without the need for classes.
  This approach to OOP in JavaScript allows for more flexibility and expressiveness in solving problems and makes it easy to add or change behavior of an object without having to change the object's definition.
- `First Class Function` - In JavaScript, a first-class function is a function that can be treated like any other value, such as a number or a string. This means that a first-class function can be: - Assigned to a variable - Passed as an argument to a function - Returned as a value from a function
  This is in contrast to languages that have restrictions on how functions can be used. For example, in some languages, functions can only be used as subroutines and cannot be passed as arguments or returned as values.
  First-class functions in JavaScript make it easy to use functional programming techniques, such as higher-order functions and closures, which allow for more expressive, flexible, and reusable code. This is a key feature of JavaScript, which allows it to be used for a wide range of tasks, from simple scripts to complex web applications.
  It is also one of the reason why JavaScript is also called as Functional Programming Language.
- `Dynamically Typed/ Dynamic` - In JavaScript, a variable's type is determined at runtime, rather than being explicitly set by the programmer. This is known as dynamic typing or dynamic language.
  In a statically typed language, variable types are set at compile time, and cannot be changed later on. This means that if a variable is declared as an integer, it can only hold integers and trying to assign anything else will result in an error.
  In contrast, in a dynamically typed language like JavaScript, variables don't have a fixed type. A variable can hold any type of value, and its type can change during the execution of the program. For example, a variable can be assigned a number value and then later be reassigned a string value without any issues.
  This can make the code more flexible and easier to write, but it can also make it harder to catch errors early on. Because of this, JavaScript provides typeof operator which can be used to check the type of a variable at runtime.
  This dynamic feature of JavaScript also allows for more expressive, flexible, and reusable code, making it easy to use for a wide range of tasks, from simple scripts to complex web applications.

```javascript
let x = 10; // type will be number
x = "learnjavascript"; //type will be string
x = false; //type will be boolean
```

- `Single Threaded` - In JavaScript, a single-threaded model means that only one operation can be executed at a time. JavaScript runs on a single thread, which means that only one task can be executed at a time.
  This is in contrast to multi-threaded languages, which allow multiple threads to run simultaneously and can perform multiple tasks in parallel.
  Single-threaded programming model has an advantage that it is less complex and easier to reason about, since there's only one call stack and one heap to worry about. It also ensures that the program state is always consistent and predictable.
  However, it also has a drawback that it can lead to performance issues when running long-running or heavy tasks, as it can block the execution of other tasks. To overcome this issue, JavaScript provides mechanisms such as Web Workers and Asynchronous programming which allows to run heavy tasks in a different thread, without blocking the main thread.
  In summary, JavaScript single-threaded model allows it to be simple and predictable, but also limits its performance when it comes to heavy workloads.

- `Non-Blocking Event Loop` - In JavaScript, the event loop is a mechanism that enables the execution of code in a non-blocking way. It is a single-threaded loop that continually checks the message queue for new messages (also known as events) to process.
  JavaScript's event loop allows the execution of code to be non-blocking, meaning that it will not halt the execution of the program while waiting for a long-running task to complete. Instead, the task is added to the message queue, and the event loop will continue to process other messages (such as user input or other events) while the task is being executed.
  When the task is complete, its result is added to the message queue, and the event loop will process it in the next iteration. This allows for a responsive and smooth user experience, as the program can continue to handle user input and other events even when long-running tasks are being executed.
  This approach is also known as "asynchronous programming" and it is one of the key features of JavaScript that makes it suitable for building responsive and high-performance web applications.

## JavaScript evolution

JavaScript was created in 1995 by Brendan Eich, a programmer at Netscape Communications Corporation. It was initially called Mocha and then changed to LiveScript before finally being named JavaScript. It was first released in the Netscape Navigator 2.0 web browser as a way to add interactivity and dynamic content to websites. In 1996, JavaScript was submitted to the European Computer Manufacturers Association (ECMA) and became an ECMA standard, and later an international standard under ISO/IEC. The language has since evolved and is now supported by all major web browsers, as well as on the server-side with technologies like Node.js.

_Javascript Ecosystem_ -
`Javascript`:- The core language; sometimes referred to as vanilla Javascript or Vanilla JS.
`ECMAScript`:- The browser specification of the Javascript language.
`ES6, ES2015, ES2017,ES2020`:- Refers to the use of features defined in ECMAScript,but not necessarilty supported by modern browsers.Using ECMAScript usually means also using `Babel.js` to make it work in current browser implementations.
`TypeScript`:- Variation,dialect or flavor of Javascript introducing features like strong typing.

1. Creation and Early Days (1995-1996)
   - 1995: Brendan Eich developed JavaScript in just 10 days while working at Netscape Communications. It was originally named Mocha, then renamed to LiveScript, and finally to JavaScript.
   - 1996: Microsoft introduced JScript, a reverse-engineered version of JavaScript, in Internet Explorer 3.0.
2. Standardization (1997-1999)
   - 1997: JavaScript was submitted to ECMA International for standardization. The first edition of ECMAScript (ECMA-262) was published.
   - 1998-1999: ECMAScript 2 and ECMAScript 3 were released, with ECMAScript 3 introducing many of the language's core features still in use today.
3. The "Dark Ages" (2000-2004)
   - Development of JavaScript slowed down. The lack of new features and browser inconsistencies made JavaScript challenging to use for complex applications.
4. AJAX and Web 2.0 (2005-2008)
   - 2005: AJAX (Asynchronous JavaScript and XML) was popularized by applications like Google Maps and Gmail, which enabled dynamic content updates without full page reloads.
   - 2006: jQuery, a fast, small, and feature-rich JavaScript library, was released, simplifying DOM manipulation and event handling.
5. Modern JavaScript and ECMAScript 5 (2009-2014)
   - 2009: ECMAScript 5 (ES5) was released, adding many useful features like strict mode, JSON support, Array methods (forEach, map, filter, etc.), and more.
   - 2009: Node.js, a runtime that allows JavaScript to run on the server side, was introduced, greatly expanding the language's use cases.
6. The Rise of ECMAScript 6 (ES6/ES2015) and Beyond (2015-Present)
   - 2015: ECMAScript 6 (also known as ES2015 or ES6) was released, marking a major update with many new features such as:
     - Block-scoped variables (let and const)
     - Arrow functions
     - Template literals
     - Destructuring assignments
     - spread operators
     - Classes
     - Modules
     - Promises
     - The for...of loop
   - 2016-Present: ECMAScript versions started following an annual release cycle, bringing incremental improvements and new features:
     - ES2016 (ES7): Included features like the exponentiation operator (\*\*) and Array.prototype.includes.
     - ES2017 (ES8): Introduced async/await for asynchronous programming.
     - ES2018 (ES9): Brought rest/spread properties for objects, asynchronous iteration, and other minor improvements.
     - ES2019 (ES10): Added features like Array.prototype.flat, Array.prototype.flatMap, and Object.fromEntries.
     - ES2020: Included BigInt, dynamic import(), nullish coalescing operator (??), and optional chaining (?.).
     - ES2021: Introduced features like logical assignment operators (&&=, ||=, ??=), String.prototype.replaceAll, and Promise.any.
7. Modern Ecosystem and Tooling
   - The JavaScript ecosystem has grown significantly with tools like Babel (for transpiling modern JavaScript to ES5), Webpack (a module bundler), and various frameworks/libraries like React, Angular, and Vue.js.
   - TypeScript: A superset of JavaScript that adds static typing, has gained popularity for building large-scale applications.
8. Current Trends and Future Directions
   - Serverless architectures: Platforms like AWS Lambda use JavaScript for serverless computing.
   - WebAssembly (Wasm): Allows languages other than JavaScript to run on the web with near-native performance.
   - Continued evolution: The language continues to evolve with proposals and features being regularly added, driven by community needs and technological advancements.

JavaScript has transformed from a simple scripting language for adding interactivity to web pages into a powerful, versatile language used for both client-side and server-side development, shaping the modern web development landscape.

**ECMA** is the European Association for Standardizing Information and Communication Systems. It is a standards organization that develops and publishes technical standards for a wide range of information and communication systems, including programming languages such as JavaScript. The organization was founded in 1961 and is based in Switzerland. It is responsible for the standardization of many technologies including ECMAScript (ECMA-262) which is the standard for JavaScript. The goal of ECMA is to promote and facilitate the use of these standards in order to improve interoperability and encourage innovation in the industry.

The following are some of the most widely-used versions of ECMAScript:

- ECMAScript 1 (release in 1997) - First edition
- ECMAScript 2 (release in 1998) - Editorial changes
- ECMAScript 3 (released in 1999) - This version introduced regular expressions, try-catch exception handling, and other features.
- ECMAScript 5 (released in 2009) - This version added features such as strict mode, JSON support, and additional methods for arrays and objects.
- ECMAScript 6 (released in 2015) - Also known as ECMAScript 2015, this version introduced major changes such as the addition of arrow functions, template literals, and the let and const variable declarations.
- ECMAScript 7 (released in 2016) - This version introduced the Array.prototype.includes() method and the Array.prototype.padStart() and Array.prototype.padEnd() method.
- ECMAScript 8 (released in 2017) - This version introduced the Object.values(), Object.entries() and Object.getOwnPropertyDescriptors() method and async/await syntax for asynchronous programming.
- ECMAScript 9 (released in 2018) - This version introduced the Rest/Spread properties, Asynchronous Iteration, Promise.prototype.finally() method.
- ECMAScript 10 (released in 2020) - This version introduced features such as globalThis, nullish coalescing operator, optional chaining operator, BigInt and String.prototype.matchAll() method.
- ECMAScript continues to evolve and new versions are planned to be released every year, with new features and improvements.

ECMAScript is a specification while JavaScript is a programming language that follows ECMAScript.

The web server for Node is **http-server**

```bash
sudo npm i -g http-server
```

## Formatting and Linting

- Prettier helps automatically clean up your formatting.
- ESLint helps automatically detect coding errors and can do basic cleanup automatically.
  Both requires Node.js.

```bash
npm install eslint
npm install prettier
```

## Frontend Libraries

1. Animate On Scroll(AOS):- brings website to life by transitioning elements as they appear during scrolling.
2. Chart.js - Versatile data visualization library that supports various charts types including pie,bar,line..
3. Luxon - Modern successor of Mement.js,offering robust set of utilites for working with dates and times.
4. SweetAlert2 - highly customizable libarary for creating modals and alerts.
5. Floating UI(Popper.js) - It is a library for creating dynamic and responsive tooltips,pop-overs,dropdowns and other floating widgets.
6. FullCalender - Is an exhaustive calender library offering extensive customization options.Supports features like dragging,resizing and event handling making it ideal for scheduling applications.
7. Axios - For handling HTTP requests.
8. D3.js - Ideal for complex and interactive Data visualizations.Perfect for creating Data-Driven Documents using HTML,SVG and CSS.
9. TensorFlow.Js - Allows you to run ML Models in the Browser,making it easy to intergrate ML functionalities into Web apps.
10. Socket.io - For real-time,event-driven communication.Essential for applications like Chat systems or Live Notifications.

`Ui Libraries`:-

1. React - Frontend library for building user interfaces.
2. Svelte - Uses compile-time,resulting in faster runtime performance and smaller bundles.Used fro building web applications.

`Chart Libraries`:-

1. D3.js - Helps you bring data to life using HTML,SVG and CSS
2. ChartistJS - Create responsive,scalable and good looking charts with ChartistJS.
3. ChartJS - Simple yet flexible Javascipt charting libarry for modern web.
4. BillboardJS - Re-usbale,easy interface JavaScript chart library,based on D3 v+.
5. ApexCharts - Modern charting library that helps developers to create beautiful and interactive visualizations for web pages.
6. HighCharts - The Highcharts library comes with all the tools you need to create reliable and secure data visualizations.

## Linking Javascript

`Inline javascript`- Inserted inside HTML tags.

```html
<body onload="alert('Hello');">
  <b>Hello</b>
</body>
```

`Javascript in HTML`:-In HTML,JS code can be inserted in between <script> and </script> tag.It can be placed in head or body.
Old Javascript may use a type attribute <script type="text/javascript"></script>.It is not required as JS is default scripting language in HTML.
In HTML,JS code can be inserted in btwn script tags.Old js may use a type attribute.It's though not required as Js is default scripting language in HTML.Script can be placed in head or body.

script tag: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script

```htm
<body>
  <h1>Hello</h1>
  <script type="text/javascript">
    alert("Hello");
  </script>
</body>
```

`External Javascript`:- Script can also be placed in external files.To use external script,put the name of script in src attribute of script tag.
External script can be referenced in three ways:-

1. With full URL(full web address)
2. With full path
3. Without any part

```html
<script src="https://www.kipcollo.com/js/script.js"></script>
<script src="js/script.js"></script>
<script src="script.js"></script>
```

Browser stops when rendering js is encountered.Js is executed before rendering continues.Often referred as context blocking.

Js should be placed at the end so that it can manipulates the already loaded html elements.It also leads to faster loading of websites.

```html
<head> </head>
<body>
  <h1>JS</h1>
  <script src="https://www.kipcollo.com/js/script.js"></script>
</body>
```

```js
document.querySelector("h1").appendElement("Learning");
```

This will say that js can manipulate a null element.

**Javascript Loading**:-

Browser stops rendering when Javascript is encountered.The Javascript is executed before rendering continues.It is often referred to as `content locking`.

`async`:- Browser downloads Javascript in parallel while HTML renders.When JS is fully loaded,rendering stops while Javascript is executed.
`defer`:- Browser downloads Javascript in parallel while HTML renders,then defers execution of Javascript until HTML rendering is complete.

```html
<script src="script.js" async></script>
<script src="script.js" defer></script>
```

## Javacsript Engine & Runtime

**JS Engine** - A JavaScript engine is a program that executes JavaScript code. It's responsible for compiling JavaScript code into machine code, optimizing the code for performance, and executing it. Some popular JavaScript engines include:

- JavaScript engines used in current web browsers include:
  - `Mozilla's SpiderMonkey`, used in Firefox, Servo, and Flow. Other non-browser usage includes MongoDB, CouchDB, and more. This was the first ever JavaScript engine, created by Brendan Eich at Netscape.
  - `Google's V8`, used in Chrome and Chromium-based browsers such as Opera, Edge, and Brave. Other non-browser usage includes Node.js, Deno, Electron, and more.
  - `Apple's JavaScriptCore (also known as SquirrelFish/Nitro)`, used in Safari and other WebKit-based browsers. Other non-browser usage includes Bun.
  - `LibJS`, used in Ladybird.
- Some JavaScript engines used in earlier browsers include:
  - `Carakan`, used in Opera before it became a Chromium-based browser.
  - `Microsoft's Chakra`, used in Internet Explorer (although the language it implements is formally called "JScript" to avoid trademark issues). Earlier versions of Edge used another JavaScript engine, confusingly also called Chakra, before it became a Chromium-based browser.
- Some JavaScript engines specifically tailored for non-browser purposes include:
  - `Engine262`, written in JavaScript and intended essentially as a reference implementation of the language.
  - `Meta's Hermes`, optimized for React Native.
  - `Mozilla's Rhino`, written in Java.
  - `Oracle's GraalJS`, written in Java and built on top of GraalVM.
  - `Moddable XS`, intended for IoT/embedded systems.
  - `QuickJS`, intended to be small and lightweight.

JavaScript engines expose a public API which application developers can use to integrate JavaScript into their software. By far, the most common host environment for JavaScript is web browsers. Web browsers typically use the public API to create host objects responsible for reflecting the DOM into JavaScript.
Another common application for JavaScript is as a (Web) server-side scripting language. A JavaScript web server exposes host objects representing a HTTP request and response objects, which can then be manipulated by a JavaScript program to dynamically generate web pages. `Node.js` is a popular example of this.
JS Engine contains a Call Stack(Execution context)- where code is executed and a Heap -where objects are stored.

_Call Stack & Execution Context_ - JavaScript uses the call stack to manage function execution, and each function runs inside its own execution context.
Execution Context has three phases: Creation, Execution, and Deletion.
The Global Execution Context is created before any code runs.

`Compiler` - A compiler is a program that translates source code written in one language into another language. In the context of JavaScript, there are several types of compilers that are commonly used:

1. Just-In-Time (JIT) compilers: These compilers compile JavaScript code at runtime, while the code is executing. JIT compilers are built into most modern web browsers and are responsible for optimizing the performance of JavaScript code.
2. Ahead-of-Time (AOT) compilers: These compilers translate JavaScript code into machine code before runtime. AOT compilers are typically used in server-side JavaScript environments, such as Node.js.
3. Transpilers: These compilers translate code from one version of JavaScript to another. For example, a transpiler might convert code written in ES6 syntax to ES5 syntax, so that it can be executed in older web browsers.

Regardless of the type of compiler, the goal is generally the same: to produce optimized code that runs as quickly and efficiently as possible. This is achieved through a variety of techniques, such as reducing the number of instructions that need to be executed, minimizing memory usage, and leveraging hardware-specific features like SIMD (Single Instruction Multiple Data) instructions.
In addition to improving performance, compilers can also help catch errors early in the development process by providing feedback on syntax and type errors. Overall, compilers are an essential tool for building complex, high-performance JavaScript applications.

`Interpreter` - In JavaScript, an interpreter is a program that executes code directly, line by line, without compiling it into machine code beforehand. When you run JavaScript code in a web browser or on the server with Node.js, the interpreter reads each line of code and immediately executes it.
The interpreter processes each statement one at a time, converting each statement into machine code and executing it before moving on to the next statement. This allows for interactive development and debugging, as changes can be made to the code and immediately executed.

In contrast to a compiler, which translates an entire program into machine code before execution, an interpreter allows for more flexibility and dynamic behavior. However, it can also result in slower performance, as the interpreter has to perform the translation and execution steps repeatedly for each statement.
JavaScript interpreters are implemented in various ways depending on the environment they're used in. In web browsers, the interpreter is built into the browser engine and runs in a sandboxed environment to prevent security issues. In Node.js, the interpreter is based on the V8 engine and provides additional functionality for server-side scripting.

`Difference Compiler and Interpreter` - A compiler and an interpreter are both software programs used to convert human-readable code into machine-executable instructions. The main difference between them is how they perform this conversion.
A compiler converts the entire source code into object code or machine code before the program is executed. It takes the entire program as input, analyzes it, and translates it into machine code all at once. This process is called compilation. Once compiled, the executable file can be run repeatedly without the need for recompilation unless changes are made to the source code itself. Examples of programming languages that use compilers include C, C++, Java, and Fortran.

On the other hand, an interpreter works by translating and executing one line of code at a time. It takes the source code as input, reads it line-by-line, and immediately executes each line. This process is called interpretation. Interpreted languages typically do not produce a separate executable file, but rather the interpreter directly executes the code. Examples of interpreted languages include Python, Ruby, and JavaScript.

One advantage of using a compiler is that the resulting executable file is generally faster to execute than interpreted code because it has already been translated into machine code. However, compiling large programs can take more time and resources upfront. Interpreted languages are often easier to debug since errors are caught as soon as the code is executed. Additionally, interpreted languages can be more flexible in that changes to the code can be made and immediately tested without the need for recompilation.
Overall, the choice between a compiler and an interpreter depends on the specific needs of the project, including performance requirements, development speed, and debugging capabilities.

`Creation Phase` - In JavaScript, the creation phase is the initial stage of execution during which the JavaScript engine allocates memory and creates certain data structures required for the code to run. During this phase, the engine performs the following tasks:

1. Creation of the Global Object: JavaScript has a global object that acts as the container for all global variables and functions. During the creation phase, the engine creates this object.
2. Creation of the 'this' Keyword: The 'this' keyword in JavaScript refers to the object that the function belongs to. During the creation phase, the engine sets the value of 'this' based on how the function is called.
3. Creation of the Scope Chain: JavaScript uses a mechanism called scope chaining to resolve variable names. During the creation phase, the engine creates the scope chain, which is a series of nested objects that contain variables.
4. Variable Declarations: During the creation phase, the engine scans the code for variable declarations and allocates memory for them. However, it does not assign any values to them at this stage.
5. Function Declarations: In JavaScript, functions are first-class citizens, meaning they can be assigned to variables or passed as arguments to other functions. During the creation phase, the engine scans the code for function declarations and stores them in memory.

Once the creation phase is complete, the engine moves on to the execution phase where it assigns values to variables, executes statements, and runs functions. It's important to note that JavaScript is a dynamically-typed language, which means that variables can hold different types of values at different points in the code.

`Code Phase` - In JavaScript, code phase generally refers to the process of parsing, compiling, and executing code in a particular order. This order is determined by the rules of the JavaScript language, which dictate how statements and expressions are evaluated and executed.
Modern JS is Just-In-Time compiled:-

- Parsing
- Compilation
- Executed

When a JavaScript program is loaded into memory and executed, it goes through several phases. The first phase is the `parsing` phase, where the JavaScript engine reads the code and converts it into an abstract syntax tree (AST) representation. This AST is then used by the engine to generate bytecode, which can be executed more efficiently than the original source code.
During the parsing phase, the JavaScript engine also identifies and creates variables and functions that are defined in the code. This process is called "hoisting," and it allows variables and functions to be used before they are actually declared in the code.

The next phase is the `compilation` phase, where the JavaScript engine generates executable code from the bytecode that was generated during parsing. This involves optimizing the code for efficiency and generating machine code that can be executed directly by the CPU.

Finally, the `execution` phase begins, where the JavaScript engine runs the code and evaluates each statement and expression in the order specified by the language rules. This includes calling functions, assigning values to variables, and executing control flow statements like if-else and while loops.

The code phase in JavaScript is important because it determines the order in which statements and expressions are executed, as well as how variables and functions are defined and used. Understanding the code phase can help developers write more efficient and reliable code, and can also help them diagnose and fix errors that may occur during execution.

_Execution Context_ - In JavaScript, an execution context is an abstract concept used by the JavaScript engine to manage the execution of code. Whenever a function is called in JavaScript, a new execution context is created for that function.
Execution in Execution Context:-

1. Creation of global execution context(for top-level code)
2. Execution of top-level code(inside global EC)
3. Execution of functions and waiting for callbacks.

Each execution context contains information about the function being executed, including its variables, parameters, and inner functions. It also maintains a reference to the scope chain that determines the visibility of variables and functions within the function's lexical environment.
The JavaScript engine maintains a stack of execution contexts called the `call stack`. When a function is called, a new execution context is created and pushed onto the call stack. When the function finishes executing, its execution context is popped off the stack, and control is returned to the calling context.

There are three types of execution contexts in JavaScript:

1. Global Execution Context: This is the default context that is created when the JavaScript program starts running. It represents the global environment and contains all the variables, functions, and objects that are available globally.
2. Function Execution Context: This context is created whenever a function is invoked. It contains the variables, parameters, and inner functions of the function.
3. Eval Execution Context: This context is created whenever the eval() function is called. It is used to evaluate code dynamically.

Each execution context has its own variable object, which stores the function's local variables, parameters, and inner functions. The variable object is initialized with the function arguments and any locally defined variables. It also includes a reference to the outer environment, which is used to resolve variable names that are not found in the local scope.

In summary, an execution context is an internal data structure used by the JavaScript engine to manage the execution of code. It contains information about the currently executing function, its variables, and its lexical environment. Understanding execution contexts is essential to understanding how JavaScript works and how to write efficient and effective code.

Inside execution context:-

- Variable Environment
- Scope chain
- this keyword

`Variable Environment` - Variable environment is a concept in JavaScript that refers to the set of variables and their values that are accessible within a particular scope at a given point in time. Each time a function is invoked, a new variable environment is created. The variable environment includes all of the function's parameters, as well as any variables declared within the function using the `var`, `let`, or `const` keywords.
The variable environment also contains a reference to the outer environment, which is the set of variables and their values that were accessible at the time the function was defined. This is known as the function's closure, and allows the function to access variables that were defined outside of its own scope.

In summary, the variable environment in JavaScript is a crucial aspect of how variables are scoped and accessed within functions and their closures.

`Type of execution context - Global and Functional` - In JavaScript, execution context refers to the environment in which code is executed. There are two types of execution contexts - global and functional.
The global execution context is created when the script is first loaded into the browser. It includes any variables and functions declared outside of a function. The global object, `window` in a browser environment, is also part of the global execution context.On the other hand, a functional execution context is created whenever a function is invoked. It includes the function arguments, local variables, and any nested functions within the current function. Each time a function is called, a new functional execution context is created and added to the call stack.

Both global and functional execution contexts have their own lexical environments, which determine variable scope and accessibility. In the case of the global context, this will be the entire script file. In the case of a functional context, it will be the function body.

Understanding execution contexts is crucial for understanding how JavaScript code is interpreted and executed.

_Call Stack in JavaScript Engine_ - In JavaScript, the call stack is a data structure that keeps track of where in the program we currently are. Whenever a function is called, a new frame is added to the top of the call stack representing that function call. When that function completes, its frame is removed from the top of the call stack and control returns to the previous frame.
A call stack is important because it allows JavaScript to keep track of function calls and their parameters. It also makes sure that functions are executed in the order they were called, with each function completing before the next one starts.

Here's an example of how the call stack works:

```js
function foo() {
  console.log("foo");
}

function bar() {
  console.log("bar");
  foo();
}

bar();
```

When the `bar` function is called, a new frame is added to the top of the call stack representing the `bar` function call. The `console.log('bar')` statement is then executed, followed by the call to the `foo` function. This adds another frame to the top of the call stack representing the `foo` function call.
When the `foo` function completes, its frame is removed from the top of the call stack and control returns to the `bar` function. The `bar` function then completes and its frame is removed from the top of the call stack as well.

In summary, the call stack is a crucial part of how JavaScript engines execute code. It keeps track of function calls and their parameters, ensuring that functions are executed in the correct order and allowing for the orderly execution of complex programs.

_Memory/Heap_ - In JavaScript, the memory or heap is a region of memory managed by the JavaScript engine where objects are allocated and stored. The heap is where dynamic memory allocation takes place, meaning that objects are created and destroyed during runtime.
The heap is an important part of the JavaScript engine because it allows for the creation of complex data structures such as arrays and objects, which can be resized and modified on the fly.

The JavaScript engine uses a garbage collector to automatically manage memory allocation and deallocation. When an object is no longer needed, the garbage collector frees up the memory associated with that object so that it can be used by other parts of the program.
One important thing to note about the heap is that it has limited space, so it's important for developers to be aware of memory usage and avoid creating unnecessary objects or holding onto objects that are no longer needed.

To optimize memory usage, modern JavaScript engines use several techniques such as object pooling, mark-and-sweep garbage collection, and generational garbage collection.
Overall, the memory/heap in JavaScript is a fundamental component of the language and plays a crucial role in allowing developers to create efficient and powerful applications.

**JS Runtime** - Mostly is the browser.Is container including all the things that we need to use Javascript.Contains Javascript Engine, Web APIs(DOM,Timers,FetchAPI), callback queue(click,timer,data)

## Use strict

`use strict` is a directive that can be placed at the beginning of a JavaScript file or a function to indicate that the code should be executed in "strict mode." When in strict mode, JavaScript will enforce a more strict set of rules and throw errors when certain actions are taken that would be allowed in non-strict mode. This can be useful for catching common coding mistakes and ensuring that your code runs as intended.

"Strict mode" ('use strict') is a way to enforce stricter parsing and error handling in your JavaScript code. It helps in catching common coding bugs and preventing the use of certain JavaScript features.

Some examples of things that will cause errors in strict mode include:

- Using a variable that has not been declared
- Deleting a variable or object property
- Using a variable or object property that has the same name as a reserved word in JavaScript
- Using a reserved word as a variable or function name
- Attempting to change the value of a read-only property
- Octal numeric literals

It is important to note that strict mode only applies to the code within the scope of the "use strict" directive. So, if you have a file that contains both strict and non-strict code, you will need to place the "use strict" directive at the appropriate scope level.

It is also important to note that some older browsers don't support strict mode, so you should consider browser compatibility when using strict mode. To active the strict mode you need to add the "use strict" string expression right at the first line of your code.

```javascript
//Using a variable, without declaring it, is not allowed:
x = 3.14; // This will cause an error

//Below Code witout use strict will work and will not give error
x = 10;
console.log(x); //output will be 10

function x(p1, p1) {
  console.log(p1);
}
```

## Memory Management & Garbage Collection

JavaScript automatically allocates and frees memory when variables are no longer used.

Key Points:

- Uses reference counting and mark-and-sweep algorithm.
- Memory leaks happen if references aren’t released

```js
let obj = { name: "JS" };
obj = null; //eligible for garbage collection
```

## Resources

- javascript practise github - Javascript practise lab
- github.com/jonasschmedtmann/complete-javascript-course
- https://www.appbrewery.co/p/web-development-course-resources
- https://github.com/LinkedInLearning/javascript-essential-training-2832077
- codewars challenges
- MDN Web Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript

## Dev skills & Editor setup

- _Prettier_ - Default formatter to prettier
  configuration file - `.prettierrc` e.g

```prettierrc
{
    "singleQuote" : true,
    "arrowParens": "avoid"
}
```

## Modern Javascript Development

```
Module + 3rd party module ------> Bundling ----> Transpiling/Polyfilling -------> Javscript Bundle
    DEV                                 BUILD PROCESS                               PRODUCTION
```

_Package Managers_ - Package managers allow you to manage the dependencies (external code written by you or someone else) that your project needs to work correctly.

`npm` - npm is a package manager for the JavaScript programming language maintained by npm, Inc. npm is the default package manager for the JavaScript runtime environment Node.js.
`Yarn` - Yarn is a software packaging system developed in 2016 by Facebook for Node.js JavaScript runtime environment that provides speed, consistency, stability, and security as an alternative to npm (package manager).
`pnpm` - PNPM is an alternative package manager for Node. js which stands for “Performant NPM”. The main purpose of PNPM is to hold all the packages at a global (centralized) store and use them if needed by other projects too by creating hard links to it.

_Transpiling/polyfilling_ - Polyfilling in JavaScript refers to the technique of adding new functionalities to older versions of the language that are not natively supported by those versions. This is typically done using modern code that detects whether a certain feature is available in the current version of JavaScript, and provides a fallback implementation if it is not.

`Babel` - Babel is a popular open-source JavaScript compiler that can translate modern JavaScript code into an older version of JavaScript that is supported by most browsers. This process is called "transpiling".

_Module Bundlers_ - A module bundler is a tool that takes pieces of JavaScript and their dependencies and bundles them into a single file, usually for use in the browser. You may have used tools such as Browserify, Webpack, Rollup or one of many others.
It usually starts with an entry file, and from there it bundles up all of the code needed for that entry file.

- `Webpack` - Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.It bundles all your JS modules,CSS and other assets.Does this every time you make a change,which can get really slow as your app grows.
- `esbuild` -Our current build tools for the web are 10-100x slower than they could be. The main goal of the esbuild bundler project is to bring about a new era of build tool performance, and create an easy-to-use modern bundler along the way.
- `Parcel` - Parcel is a web application bundler, differentiated by its developer experience. It offers blazing-fast performance utilizing multicore processing and requires zero configuration.
- `Rollup` - Rollup is a module bundler for JavaScript which compiles small pieces of code into something larger and more complex, such as a library or application.

_Build Tools_

- `Vite` - Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects.Vite takes advantage of native ES Modules.Serves directly to the browser.It uses rollup to bundle files for production(npm run build).
