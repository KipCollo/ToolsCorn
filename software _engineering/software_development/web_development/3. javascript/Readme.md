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
- `Multi Paradigm` - JavaScript is a multi-paradigm programming language, which means it supports several programming paradigms such as:
    - Object-oriented programming (OOP) - JavaScript supports classes, objects, inheritance, and encapsulation through the use of prototypes.
    - Functional programming - JavaScript supports the use of first-class functions and closures, making it easy to use functional programming techniques.
    - Event driven programming - JavaScript supports the event based programming in which events like mouse click, keypress can be handled.
    - Imperative programming - JavaScript supports the use of statements that change a program's state, and can be used in an imperative style.
JavaScript's flexibility and support for different paradigms make it a versatile language that can be used for a wide range of tasks, from simple scripts to complex web applications. This also allows developers to use the best approach for their specific use case, and to write more expressive, maintainable and efficient code.
- `Prototype based object-oriented` - In JavaScript, prototypes are a way of implementing object-oriented programming (OOP) concepts such as inheritance and encapsulation. A prototype is an object that serves as a template for creating other objects. Each object in JavaScript has a prototype, which can be accessed using the \_\_proto\_\_ property.
When a property or method is accessed on an object, the JavaScript engine first looks for it on that object. If it is not found, it then looks for it on the object's prototype, and so on, until it reaches the top of the prototype chain. This is called "prototype-based inheritance"
This prototype-based approach to OOP in JavaScript differs from class-based OOP, which is used in languages like Java, C#, and C++. In class-based OOP, objects are instances of classes, which define the properties and methods that the objects will have. In prototype-based OOP, objects inherit properties and methods from other objects directly, without the need for classes.
This approach to OOP in JavaScript allows for more flexibility and expressiveness in solving problems and makes it easy to add or change behavior of an object without having to change the object's definition.
- `First Class Function` - In JavaScript, a first-class function is a function that can be treated like any other value, such as a number or a string. This means that a first-class function can be:
    - Assigned to a variable
    - Passed as an argument to a function
    - Returned as a value from a function
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

*Javascript Ecosystem* - 
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
        - ES2016 (ES7): Included features like the exponentiation operator (**) and Array.prototype.includes.
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
<head>
</head>
<body>
    <h1>JS</h1>
    <script src="https://www.kipcollo.com/js/script.js"></script>
</body>
```

```js
document.querySelector("h1").appendElement("Learning")
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


*Call Stack & Execution Context* - JavaScript uses the call stack to manage function execution, and each function runs inside its own execution context.
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


*Execution Context* - In JavaScript, an execution context is an abstract concept used by the JavaScript engine to manage the execution of code. Whenever a function is called in JavaScript, a new execution context is created for that function.
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

*Call Stack in JavaScript Engine* - In JavaScript, the call stack is a data structure that keeps track of where in the program we currently are. Whenever a function is called, a new frame is added to the top of the call stack representing that function call. When that function completes, its frame is removed from the top of the call stack and control returns to the previous frame.
A call stack is important because it allows JavaScript to keep track of function calls and their parameters. It also makes sure that functions are executed in the order they were called, with each function completing before the next one starts.

Here's an example of how the call stack works:

```js
function foo() {
  console.log('foo');
}

function bar() {
  console.log('bar');
  foo();
}

bar();
```

When the `bar` function is called, a new frame is added to the top of the call stack representing the `bar` function call. The `console.log('bar')` statement is then executed, followed by the call to the `foo` function. This adds another frame to the top of the call stack representing the `foo` function call.
When the `foo` function completes, its frame is removed from the top of the call stack and control returns to the `bar` function. The `bar` function then completes and its frame is removed from the top of the call stack as well.

In summary, the call stack is a crucial part of how JavaScript engines execute code. It keeps track of function calls and their parameters, ensuring that functions are executed in the correct order and allowing for the orderly execution of complex programs.


*Memory/Heap* - In JavaScript, the memory or heap is a region of memory managed by the JavaScript engine where objects are allocated and stored. The heap is where dynamic memory allocation takes place, meaning that objects are created and destroyed during runtime.
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
let obj = {name: "JS"}
obj = null //eligible for garbage collection
```



## Resources

- javascript practise github - Javascript practise lab
- github.com/jonasschmedtmann/complete-javascript-course
- https://www.appbrewery.co/p/web-development-course-resources
- https://github.com/LinkedInLearning/javascript-essential-training-2832077
- codewars challenges
- MDN Web Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript


## Dev skills & Editor setup

- *Prettier* - Default formatter to prettier
configuration file - `.prettierrc` e.g

```prettierrc
{
    "singleQuote" : true,
    "arrowParens": "avoid"
}
```


## Awesome JavaScript 

A collection of awesome browser-side [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) libraries, resources and shiny things.

**Package Managers** - Host the JavaScript libraries and provide tools for fetching and packaging them.

* [npm](https://www.npmjs.com/) - npm is the package manager for JavaScript.
* [Bower](https://github.com/bower/bower) - A package manager for the web.
* [component](https://github.com/componentjs/component) - Client package management for building better web applications.
* [spm](https://github.com/spmjs/spm) - Brand new static package manager.
* [jam](https://github.com/caolan/jam) - A package manager using a browser-focused and RequireJS compatible repository.
* [jspm](https://github.com/jspm/jspm-cli) - Frictionless browser package management.
* [Ender](https://github.com/ender-js/Ender) - The no-library library.
* [volo](https://github.com/volojs/volo) - Create front end projects from templates, add dependencies, and automate the resulting projects.
* [Duo](https://github.com/duojs/duo) - Next-generation package manager that blends the best ideas from Component, Browserify and Go to make organizing and writing front-end code quick and painless.
* [yarn](https://yarnpkg.com/) - Fast, reliable, and secure dependency management.
* [pnpm](https://pnpm.io/) - Fast, disk space efficient package manager.

**Component Management** -

* [Bit](https://github.com/teambit/bit) - Create, find and reuse components (React, Angular, Node etc.) across applications.

**Loaders** - Module or loading system for JavaScript.

* [RequireJS](https://github.com/requirejs/requirejs) - A file and module loader for JavaScript.
* [browserify](https://github.com/substack/node-browserify) - Browser-side require() the node.js way.
* [SeaJS](https://github.com/seajs/seajs) - A Module Loader for the Web.
* [HeadJS](https://github.com/headjs/headjs) - The only script in your HEAD.
* [lazyload](https://github.com/rgrove/lazyload/) - Tiny, dependency-free async JavaScript and CSS loader.
* [script.js](https://github.com/ded/script.js) - Asynchronous JavaScript loader and dependency manager.
* [systemjs](https://github.com/systemjs/systemjs) - AMD, CJS & ES6 spec-compliant module loader.
* [LodJS](https://github.com/yanhaijing/lodjs) - Module loader based on AMD.
* [ESL](https://github.com/ecomfe/esl) - Module loader browser first, support lazy define and AMD.
* [modulejs](https://github.com/lrsjng/modulejs) - Lightweight JavaScript module system.

**Transpilers** - Software that converts the modern JavaScript syntax into the older JavaScript syntax.

* [SWC](https://swc.rs/) - Extensible Rust-based platform for compilation.

**Bundlers** -

* [webpack](https://github.com/webpack/webpack) - Packs CommonJs/AMD modules for the browser.
* [Rollup](https://github.com/rollup/rollup) - Next-generation ES6 module bundler.
* [Brunch](https://github.com/brunch/brunch) - Fast front-end web app build tool with simple declarative config.
* [Parcel](https://github.com/parcel-bundler/parcel) - Blazing fast, zero configuration web application bundler.
* [Microbundle](https://github.com/developit/microbundle) - Zero-configuration bundler for tiny modules.
* [FuseBox](https://github.com/fuse-box/fuse-box) - A bundler that does it right
* [Snowpack](https://www.snowpack.dev/) - A lightning-fast frontend build tool, designed for the modern web.
* [bundle](https://bundle.js.org) - A quick online npm package size checker.
* [Vite](https://vite.dev/) - Next Generation Frontend Tooling.

# Minimizers

* [Terser](https://github.com/terser/terser) - parser, mangler and compressor toolkit for ES6+
* [Uglify](https://github.com/mishoo/UglifyJS) - parser / mangler / compressor / beautifier toolkit

## Type Checkers

* [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript that compiles to plain JavaScript.
* [Flow.js](https://flow.org/) - A static type checker for JavaScript from Facebook.
* [Hegel](https://hegel.js.org/) -  A static type checker for JavaScript with a bias on type inference an strong type system.
* [TypL](https://github.com/getify/TypL) - the JavaScript Type Linter with a bias on type inference.
* [Hindley Milner Definitions](https://github.com/xodio/hm-def) - runtime type checking for JavaScript functions using Haskell-alike Hindley Milner type signatures.
* [Zod](https://github.com/colinhacks/zod) - TypeScript-first schema validation with built-in static type inference.

## Testing Frameworks

### Frameworks

* [mocha](https://github.com/mochajs/mocha) - Simple, flexible, fun JavaScript test framework for node.js & the browser.
* [jasmine](https://github.com/jasmine/jasmine) - DOM-less simple JavaScript testing framework.
* [qunit](https://github.com/jquery/qunit) - An easy-to-use JavaScript Unit Testing framework.
* [jest](https://github.com/facebook/jest) - Painless JavaScript Unit Testing.
* [prova](https://github.com/azer/prova) - Node & Browser test runner based on Tape and Browserify
* [DalekJS](https://github.com/dalekjs/dalek) - Automated cross browser functional testing with JavaScript
* [Protractor](https://github.com/angular/protractor) - Protractor is an end-to-end test framework for AngularJS applications.
* [tape](https://github.com/substack/tape) - Tap-producing test harness for node and browsers.
* [TestCafe](https://github.com/DevExpress/testcafe) - Automated browser testing for the modern web development stack.
* [ava](https://github.com/avajs/ava) - 🚀 Futuristic JavaScript test runner
* [Cypress](https://www.cypress.io/) - Complete end-to-end testing framework for anything that runs in a browser and beyond.
* [WebdriverI/O](https://webdriver.io/) - Next-gen browser and mobile automation test framework for Node.js

### Assertion

* [chai](https://github.com/chaijs/chai) - BDD / TDD assertion framework for node.js and the browser that can be paired with any testing framework.
* [Enzyme](https://airbnb.io/enzyme/index.html) - Enzyme is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output.
* [react testing library](https://github.com/kentcdodds/react-testing-library) - Simple and complete React DOM testing utilities that encourage good testing practices.
* [Sinon.JS](https://github.com/sinonjs/sinon) - Test spies, stubs, and mocks for JavaScript.
* [expect.js](https://github.com/Automattic/expect.js) - Minimalistic BDD-style assertions for Node.JS and the browser.
* [proxyquire](https://github.com/thlorenz/proxyquire) - Stub nodejs's require.
* [Supertest](https://github.com/visionmedia/supertest) - A popular HTTP assertion library for testing REST APIs, often used with other testing frameworks like Mocha or Jest

### Coverage

* [istanbul](https://github.com/gotwarlost/istanbul) - Yet another JS code coverage tool.
* [blanket](https://github.com/alex-seville/blanket) - A simple code coverage library for JavaScript. Designed to be easy to install and use, for both browser and nodejs.
* [JSCover](https://github.com/tntim96/JSCover) - JSCover is a tool that measures code coverage for JavaScript programs.

### Runner

* [phantomjs](https://github.com/ariya/phantomjs) - Scriptable Headless WebKit.
* [slimerjs](https://github.com/laurentj/slimerjs) - A PhantomJS-like tool running Gecko.
* [casperjs](https://github.com/casperjs/casperjs) - Navigation scripting & testing utility for PhantomJS and SlimerJS.
* [zombie](https://github.com/assaf/zombie) - Insanely fast, full-stack, headless browser testing using node.js.
* [totoro](https://github.com/totorojs/totoro) - A simple and stable cross-browser testing tool.
* [karma](https://github.com/karma-runner/karma) - Spectacular Test Runner for JavaScript.
* [nightwatch](https://github.com/nightwatchjs/nightwatch) - UI automated testing framework based on node.js and selenium webdriver.
* [intern](https://github.com/theintern/intern) - A next-generation code testing stack for JavaScript.
* [puppeteer](https://github.com/GoogleChrome/puppeteer) - Headless Chrome Node.js API by official Google Chrome team.
* [webdriverio](https://github.com/webdriverio/webdriverio) - Next-gen WebDriver test automation framework for Node.js.
* [taiko](https://github.com/getgauge/taiko) - A Node.js library with a simple API to automate Chromium based browsers.
* [Playwright](https://github.com/microsoft/playwright) - Node.js library to automate Chromium, Firefox and WebKit with a single API.

## QA Tools

* [prettier](https://github.com/prettier/prettier) - Prettier is an opinionated code formatter.
* [JSHint](https://github.com/jshint/jshint/) - JSHint is a tool that helps to detect errors and potential problems in your JavaScript code.
* [jscs](https://github.com/jscs-dev/node-jscs) - JavaScript Code Style checker.
* [jsfmt](https://github.com/rdio/jsfmt) - For formatting, searching, and rewriting JavaScript.
* [jsinspect](https://github.com/danielstjules/jsinspect) - Detect copy-pasted and structurally similar code.
* [buddy.js](https://github.com/danielstjules/buddy.js) - Magic number detection for JavaScript.
* [ESLint](https://github.com/eslint/eslint) - A fully pluggable tool for identifying and reporting on patterns in JavaScript.
* [JSLint](https://github.com/douglascrockford/JSLint) - High-standards, strict & opinionated code quality tool, aiming to keep only good parts of the language.
* [JavaScript Standard Style](https://github.com/feross/standard) - Opinionated, no-configuration style guide, style checker, and formatter
* [Pre-evaluate code at buildtime](https://github.com/kentcdodds/preval.macro) - Pre-evaluate your front end javascript code at build-time
* [JS-Beautifier](https://github.com/beautify-web/js-beautify) - Npm cli and library to format JS code.
* [husky](https://github.com/typicode/husky) - Prevents bad git commit, git push and more.

**MVC Frameworks and Libraries** -

* [angular.js](https://github.com/angular/angular.js) - HTML enhanced for web apps. (deprecated)
* [angular](https://github.com/angular/angular) - Angular is a development platform for building mobile and desktop web applications using Typescript/JavaScript and other languages.
* [aurelia](http://aurelia.io) - A JavaScript client framework for mobile, desktop and web.
* [backbone](https://github.com/jashkenas/backbone) - Give your JS App some Backbone with Models, Views, Collections, and Events.
* [ember.js](https://github.com/emberjs/ember.js) - A JavaScript framework for creating ambitious web applications.
* [meteor](https://github.com/meteor/meteor) - An ultra-simple, database-everywhere, data-on-the-wire, pure-javascript web framework.
* [ractive](https://github.com/ractivejs/ractive) - Next-generation DOM manipulation.
* [vue](https://github.com/vuejs/vue) - Intuitive, fast & composable MVVM for building interactive interfaces.
* [svelte](https://github.com/sveltejs/svelte) - Svelte is a new way to build web applications. It's a compiler that takes your declarative components and converts them into efficient JavaScript that surgically updates the DOM.
* [knockout](https://github.com/knockout/knockout) - Knockout makes it easier to create rich, responsive UIs with JavaScript.
* [spine](https://github.com/spine/spine) - Lightweight MVC library for building JavaScript applications.
* [espresso.js](https://github.com/techlayer/espresso.js) - A minimal JavaScript library for crafting user interfaces.
* [canjs](https://github.com/canjs/canjs) - Can do JS, better, faster, easier.
* [react](https://reactjs.org/) - A library for building user interfaces. It's declarative, efficient, and extremely flexible. Works with a Virtual DOM.
* [hyperapp](https://github.com/hyperapp/hyperapp) - 1kb JavaScript library for building frontend applications.
* [preact](https://github.com/developit/preact) - Fast 3kb React alternative with the same ES6 API. Components & Virtual DOM.
* [nativescript](https://github.com/NativeScript/NativeScript) - Build truly native cross-platform iOS and Android apps with JavaScript.
* [react-native](https://github.com/facebook/react-native) - A framework for building native apps with React.
* [riot](https://github.com/riot/riot) - React-like library, but with very small size.
* [thorax](https://github.com/walmartlabs/thorax) - Strengthening your Backbone.
* [chaplin](https://github.com/chaplinjs/chaplin) - An architecture for JavaScript applications using the Backbone.js library.
* [marionette](https://github.com/marionettejs/backbone.marionette) - A composite application library for Backbone.js that aims to simplify the construction of large scale JavaScript applications.
* [ripple](https://github.com/ripplejs/ripple) - A tiny foundation for building reactive views.
* [rivets](https://github.com/mikeric/rivets) - Lightweight and powerful data binding + templating solution.
* [derby](https://github.com/derbyjs/derby) - MVC framework making it easy to write realtime, collaborative applications that run in both Node.js and browsers.
    * [derby-awesome](https://github.com/russll/awesome-derby) - A collection of awesome derby components
* [way.js](https://github.com/gwendall/way.js) - Simple, lightweight, persistent two-way databinding.
* [mithril.js](https://github.com/lhorie/mithril.js) - Mithril is a client-side MVC framework (Light-weight, Robust, Fast).
* [jsblocks](https://github.com/astoilkov/jsblocks) - jsblocks is better MV-ish framework.
* [feathers](https://github.com/feathersjs/feathers) - A minimalist real-time JavaScript framework for tomorrow's apps.
* [Keo](https://github.com/Wildhoney/Keo) - Functional stateless React components with Shadow DOM support.
* [atvjs](https://github.com/emadalam/atvjs) - Blazing fast Apple TV application development using pure JavaScript.
* [Alpine.js](https://github.com/alpinejs/alpine) - offers you the reactive and declarative nature of big frameworks like Vue or React at a much lower cost.
* [inferno](https://github.com/infernojs/inferno) - 🔥 An extremely fast, React-like JavaScript library for building modern user interfaces.
* [FoalTS](https://foalts.org) - Elegant and all-inclusive Node.JS framework for building web applications (TypeScript).
* [Lucia](https://github.com/aidenybai/lucia) - 3kb library for tiny web apps.
* [Adonis](https://github.com/adonisjs/core) - The Node.js Framework highly focused on developer ergonomics, stability and confidence.
* [GrapesJS](https://github.com/artf/grapesjs) - Free and Open source Web Builder Framework. Next generation tool for building templates without coding.
* [Rete.js](https://github.com/retejs/rete) - A modular framework for visual programming allows to create node based editor in browser.
* [litegraph.js](https://github.com/jagenjo/litegraph.js) - A graph node engine and editor similar to PD or UDK Blueprints, comes with its own editor in HTML5 Canvas2D.
* [Drawflow](https://github.com/jerosoler/Drawflow) - This allow you to create data flows easily and quickly.
* [Blockly](https://github.com/google/blockly) - A library that adds a visual code editor to web and mobile apps by Google.
* [Million](https://github.com/aidenybai/million) - <1kb compiler-focused virtual DOM. It's fast!
* [Whatsup](https://github.com/whatsup/whatsup) - A frontend framework for chillout-mode development 🥤. JSX components on generators, fast mobx-like state management and exclusive cssx style system.
* [Remult](https://github.com/remult/remult) - A CRUD framework for full-stack TypeScript.

## Node-Powered CMS Frameworks

* [KeystoneJS](https://github.com/keystonejs/keystone) - powerful CMS and web app framework.
* [Reaction Commerce](https://github.com/reactioncommerce/reaction) - reactive CMS, real-time architecture and design.
* [Ghost](https://github.com/tryghost/Ghost) - simple, powerful publishing platform.
* [Apostrophe](https://github.com/punkave/apostrophe) - CMS with content editing and essential services.
* [We.js](https://github.com/wejs/we/) - framework for real time apps, sites or blogs.
* [Hatch.js](https://github.com/inventures/hatchjs) - CMS platform with social features.
* [TaracotJS](https://github.com/xtremespb/taracotjs-generator/) - fast and minimalist CMS based on Node.js.
* [Nodizecms](https://github.com/nodize/nodizecms) - CMS for CoffeeScript lovers.
* [Cody](https://github.com/jcoppieters/cody) - CMS with WSYWYG editor.
* [PencilBlue](https://github.com/pencilblue/pencilblue/) - CMS and blogging platform.
* [Strapi](https://github.com/strapi/strapi) - Open source Node.js Headless CMS to easily build customisable APIs.
* [Factor](https://github.com/fiction-com/factor) - The Javascript CMS

**Templating Engines** - Templating engines allow you to perform string interpolation.*

* [mustache.js](https://github.com/janl/mustache.js) - Minimal templating with {{mustaches}} in JavaScript.
* [handlebars.js](https://github.com/handlebars-lang/handlebars.js) - An extension to the Mustache templating language.
* [nunjucks](https://mozilla.github.io/nunjucks/) - A rich and powerful templating language for JavaScript from Mozilla.
* [hogan.js](https://github.com/twitter/hogan.js) - A compiler for the Mustache templating language.
* [doT](https://github.com/olado/doT) - The fastest + concise JavaScript template engine for nodejs and browsers.
* [dustjs](https://github.com/linkedin/dustjs/) - Asynchronous templates for the browser and node.js.
* [eco](https://github.com/sstephenson/eco/) - Embedded CoffeeScript templates.
* [JavaScript-Templates](https://github.com/blueimp/JavaScript-Templates) - < 1KB lightweight, fast & powerful JavaScript templating engine with zero dependencies.
* [t.js](https://github.com/jasonmoo/t.js) - A tiny JavaScript templating framework in ~400 bytes gzipped.
* [Pug](https://github.com/pugjs/pug) - Robust, elegant, feature rich template engine for nodejs. (formerly known as Jade)
* [EJS](https://github.com/mde/ejs) - Effective JavaScript templating.
* [xtemplate](https://github.com/xtemplate/xtemplate) - eXtensible Template Engine lib for node and the browser
* [marko](https://github.com/marko-js/marko) - A fast, lightweight, HTML-based templating engine for Node.js and the browser with async, streaming, custom tags and CommonJS modules as compiled output.
* [swig](https://github.com/paularmstrong/swig) - (Archived) A simple, powerful, and extendable Node.js and browser-based JavaScript template engine.
* [hmpl](https://hmpl-lang.dev) - Server-oriented customizable templating for JavaScript.

## Game Engines
* [A-Frame](https://aframe.io) - Make WebVR.
* [Cocos](https://www.cocos.com) - Open Source Cross-Platform Game Development Framework.
* [Impact](https://impactjs.com) - Impact - HTML5 Canvas & JavaScript Game Engine.
* [GDevelop](https://gdevelop.io) - Free and Easy Game-Making App.
* [Kaboom.js](https://kaboomjs.com) - A game programming library that helps you make games fast and fun.
* [Matter.js](https://brm.io/matter-js) - A 2D rigid body JavaScript physics engine.
* [melonJS](https://melonjs.org) - Open source HTML5 game engine that empowers developers and designers to focus on content.
* [Phaser](https://phaser.io) - Phaser - A fast, fun and free open source HTML5 game framework.
* [PixiJS](https://pixijs.com) - The HTML5 Creation Engine.
* [PlayCanvas](https://playcanvas.com) - PlayCanvas WebGL Game Engine.

## Articles and Posts

* [The JavaScript that you should know](https://medium.com/@pedropolisenso/o-javasscript-que-voc%C3%AA-deveria-conhecer-b70e94d1d706) - Article about concepts of JavaScript Functional.
* [Multi-threading using web-workers](https://www.loginradius.com/blog/async/adding-multi-threading-to-javascript-using-web-workers/) - Web Workers: Adding Multi-threading to JavaScript
* [this keyword in JavaScript](https://www.loginradius.com/blog/async/breaking-down-this-keyword-in-javascript/) - Breaking down the 'this' keyword in JavaScript

**Data Visualization** - Data visualization tools for the web.*

* [d3](https://github.com/d3/d3) - A JavaScript visualization library for HTML and SVG.
* [metrics-graphics](https://github.com/mozilla/metrics-graphics) - A library optimized for concise, principled data graphics and layouts.
* [three.js](https://github.com/mrdoob/three.js) - JavaScript 3D library.
* [Chart.js](https://github.com/chartjs/Chart.js) - Simple HTML5 Charts using the &lt;canvas&gt; tag.
* [paper.js](https://github.com/paperjs/paper.js) - The Swiss Army Knife of Vector Graphics Scripting – Scriptographer ported to JavaScript and the browser, using HTML5 Canvas.
* [fabric.js](https://github.com/kangax/fabric.js) - JavaScript Canvas Library, SVG-to-Canvas (& canvas-to-SVG) Parser.
* [peity](https://github.com/benpickles/peity) - Progressive <svg> bar, line and pie charts.
* [raphael](https://github.com/DmitryBaranovskiy/raphael) - JavaScript Vector Library.
* [echarts](https://github.com/apache/echarts) - Enterprise Charts.
* [visjs](https://github.com/visjs) - Multiple Libraries for dynamic, browser-based data visualization.
* [two.js](https://github.com/jonobr1/two.js) - A renderer agnostic two-dimensional drawing api for the web.
* [g.raphael](https://github.com/DmitryBaranovskiy/g.raphael) - Charts for Raphaël.
* [sigma.js](https://github.com/jacomyal/sigma.js) - A JavaScript library dedicated to graph drawing.
* [arbor](https://github.com/samizdatco/arbor) - A graph visualization library using web workers and jQuery.
* [cubism](https://github.com/square/cubism) - A D3 plugin for visualizing time series.
* [dc.js](https://github.com/dc-js/dc.js) - Multi-Dimensional charting built to work natively with crossfilter rendered with d3.js
* [vega](https://github.com/trifacta/vega) - A visualization grammar.
* [envisionjs](https://github.com/HumbleSoftware/envisionjs) - Dynamic HTML5 visualization.
* [rickshaw](https://github.com/shutterstock/rickshaw) - JavaScript toolkit for creating interactive real-time graphs.
* [flot](https://github.com/flot/flot) - Attractive JavaScript charts for jQuery.
* [morris.js](https://github.com/morrisjs/morris.js) - Pretty time-series line graphs.
* [nvd3](https://github.com/novus/nvd3) - Build re-usable charts and chart components for d3.js.
* [svg.js](https://github.com/wout/svg.js) - A lightweight library for manipulating and animating SVG.
* [heatmap.js](https://github.com/pa7/heatmap.js) - JavaScript Library for HTML5 canvas based heatmaps.
* [jquery.sparkline](https://github.com/gwatts/jquery.sparkline) - A plugin for the jQuery JavaScript library to generate small sparkline charts directly in the browser.
* [trianglify](https://github.com/qrohlf/trianglify) - Low poly style background generator with d3.js.
* [d3-cloud](https://github.com/jasondavies/d3-cloud) - Create word clouds in JavaScript.
* [d4](https://github.com/heavysixer/d4) - A friendly reusable charts DSL for D3.
* [dimple.js](http://dimplejs.org) - Easy charts for business analytics powered by d3.
* [chartist-js](https://github.com/gionkunz/chartist-js) - Simple responsive charts.
* [epoch](https://github.com/epochjs/epoch) - A general purpose real-time charting library.
* [c3](https://github.com/c3js/c3) - D3-based reusable chart library.
* [BabylonJS](https://github.com/BabylonJS/Babylon.js) - A framework for building 3D games with HTML 5 and WebGL.
* [recharts](https://github.com/recharts/recharts) - Redefined chart library built with React and D3.
* [GraphicsJS](https://github.com/AnyChart/GraphicsJS) - A lightweight JavaScript graphics library with the intuitive API, based on SVG/VML technology.
* [mxGraph](https://github.com/jgraph/mxgraph) - Diagramming library that enables interactive graph and charting applications to be quickly created that run natively in any major browser that is supported by its vendor.
* [Frappe Charts](https://github.com/frappe/charts) - GitHub-inspired simple and modern SVG charts for the web with zero dependencies.
* [Frappe Gantt](https://github.com/frappe/gantt) - A simple, interactive, modern gantt chart library for the web.
* [G2](https://github.com/antvis/G2) - A highly interactive data-driven visualization grammar for statistical charts.
* [G2Plot](https://github.com/antvis/G2Plot) - An interactive and responsive charting library. Based on the grammar of graphics.
* [Cytoscape.js](https://github.com/cytoscape/cytoscape.js) - A fully featured graph theory library.
* [cola.js](https://ialab.it.monash.edu/webcola/) - library for arranging your HTML5 documents and diagrams using constraint-based optimization techniques
* [jointjs](https://github.com/clientIO/joint) - Diagramming library to create static diagrams or fully interactive diagramming tools.
* [vizzu](https://github.com/vizzuhq/vizzu-lib) - Library for animated data visualizations and data stories.

There're also some great commercial libraries, like [amchart](https://www.amcharts.com/), [anychart](https://www.anychart.com/), [plotly](https://plotly.com/), and [lightning chart](https://www.arction.com/lightningchart-js/).

## Timeline

* [TimelineJS v3](https://github.com/NUKnightLab/TimelineJS3) - A Storytelling Timeline built in JavaScript.
* [timesheet.js](https://github.com/sbstjn/timesheet.js) - JavaScript library for simple HTML5 & CSS3 time sheets.

## Spreadsheet

* [HANDSONTABLE](https://github.com/handsontable/handsontable) - Handsontable is a JavaScript/HTML5 Spreadsheet Library for Developers
* [Frappe Datatable](https://github.com/frappe/datatable) - Frappe DataTable is a simple, modern and interactive datatable library for displaying tabular data.
* [Luckysheet](https://github.com/mengshukeji/Luckysheet) - Luckysheet is an online spreadsheet like excel that is powerful, simple to configure, and completely open source.
 * [Jspreadsheet CE](https://github.com/jspreadsheet/ce) - Jspreadsheet is a lightweight vanilla javascript plugin to create amazing web-based interactive tables and spreadsheets compatible with other spreadsheet software.
 * [RevoGrid](https://github.com/revolist/revogrid) - RevoGrid is a fast, responsive excel like data grid library for modern web applications.

## Editors

* [ace](https://github.com/ajaxorg/ace) - Ace (Ajax.org Cloud9 Editor).
* [CodeMirror](https://github.com/codemirror/CodeMirror) - In-browser code editor.
* [esprima](https://github.com/ariya/esprima) - ECMAScript parsing infrastructure for multipurpose analysis.
* [quill](https://github.com/quilljs/quill) - A cross browser rich text editor with an API.
* [medium-editor](https://github.com/yabwe/medium-editor) - Medium.com WYSIWYG editor clone.
* [pen](https://github.com/sofish/pen) - enjoy live editing (+markdown).
* [jquery-notebook](https://github.com/raphaelcruzeiro/jquery-notebook) - A simple, clean and elegant text editor. Inspired by the awesomeness of Medium.
* [bootstrap-wysiwyg](https://github.com/mindmup/bootstrap-wysiwyg) - Tiny bootstrap-compatible WYSIWYG rich text editor.
* [ckeditor-releases](https://github.com/ckeditor/ckeditor-releases) - The best web text editor for everyone.
* [editor](https://github.com/lepture/editor) - A markdown editor. still on development.
* [EpicEditor](https://github.com/OscarGodson/EpicEditor) - An embeddable JavaScript Markdown editor with split fullscreen editing, live previewing, automatic draft saving, offline support, and more.
* [jsoneditor](https://github.com/josdejong/jsoneditor) - A web-based tool to view, edit and format JSON.
* [vim.js](https://github.com/coolwanglu/vim.js) - JavaScript port of Vim with a persistent `~/.vimrc`.
* [Squire](https://github.com/neilj/Squire) - HTML5 rich text editor.
* [TinyMCE](https://github.com/tinymce/tinymce) - The JavaScript Rich Text editor.
* [trix](https://github.com/basecamp/trix) - A rich text editor for everyday writing. By Basecamp.
* [Trumbowyg](https://github.com/Alex-D/Trumbowyg) - A lightweight and amazing WYSIWYG JavaScript editor.
* [Draft.js](https://github.com/facebook/draft-js) - A React framework for building text editors.
* [bootstrap-wysihtml5](https://github.com/jhollingworth/bootstrap-wysihtml5) - Simple, beautiful wysiwyg editor
* [wysihtml5](https://github.com/xing/wysihtml5) - Open source rich text editor based on HTML5 and the progressive-enhancement approach. Uses a sophisticated security concept and aims to generate fully valid HTML5 markup by preventing unmaintainable tag soups and inline styles.
* [raptor-editor](https://github.com/PANmedia/raptor-editor) - Raptor, an HTML5 WYSIWYG content editor!
* [popline](https://github.com/kenshin54/popline) - Popline is an HTML5 Rich-Text-Editor Toolbar.
* [Summernote](https://github.com/summernote/summernote) - Super simple WYSIWYG editor.
* [Everright-formEditor](https://github.com/Liberty-liu/Everright-formEditor) - A visual drag-and-drop low-code form editor

## Documentation

* [DevDocs](https://devdocs.io/) is an all-in-one API documentation reader with a fast, organized, and consistent interface.
* [docco](http://ashkenas.com/docco/) is a quick-and-dirty, hundred-line-long, literate-programming-style documentation generator.
* [styledocco](http://jacobrask.github.io/styledocco/) generates documentation and style guide documents from your stylesheets.
* [Ronn](https://github.com/rtomayko/ronn) builds manuals. It converts simple, human readable textfiles to roff for terminal display, and also to HTML for the web.
* [dox](https://github.com/tj/dox) is a JavaScript documentation generator written with node. Dox no longer generates an opinionated structure or style for your docs, it simply gives you a JSON representation, allowing you to use markdown and JSDoc-style tags.
* [jsdox](https://github.com/sutoiku/jsdox) is a JSDoc3 to Markdown documentation generator.
* [ESDoc](https://github.com/esdoc/esdoc) is a good documentation generator for JavaScript.
* [YUIDoc](http://yui.github.io/yuidoc/) is a Node.js application that generates API documentation from comments in source, using a syntax similar to tools like Javadoc and Doxygen.
* [coddoc](http://doug-martin.github.io/coddoc/) is a jsdoc parsing library. Coddoc is different in that it is easily extensible by allowing users to add tag and code parsers through the use of coddoc.addTagHandler and coddoc.addCodeHandler. coddoc also parses source code to be used in APIs.
* [sphinx](http://www.sphinx-doc.org/) a tool that makes it easy to create intelligent and beautiful documentation
* [Beautiful docs](https://github.com/beautiful-docs/beautiful-docs) is a documentation viewer based on markdown files.
* [documentation.js](http://documentation.js.org) - API documentation generator with support for ES2015+ and flow annotation.
* [jsduck](https://github.com/senchalabs/jsduck) - API documentation generator made for Sencha JavaScript frameworks, but can be used for other frameworks too.
* [codecrumbs](https://github.com/Bogdan-Lyashenko/codecrumbs) is a visual tool for learning and documenting a codebase by putting breadcrumbs in source code.

**Files** - Libraries for working with files.

* [Papa Parse](https://github.com/mholt/PapaParse) - A powerful CSV library that supports parsing CSV files/strings and also exporting to CSV.
* [jBinary](https://github.com/jDataView/jBinary) - High-level I/O (loading, parsing, manipulating, serializing, saving) for binary files with declarative syntax for describing file types and data structures.
* [diff2html](https://github.com/rtfpessoa/diff2html) - Git diff output parser and pretty HTML generator.
* [jsPDF](https://github.com/MrRio/jsPDF) - JavaScript PDF generation.
* [PDF.js](https://github.com/mozilla/pdf.js) - PDF Reader in JavaScript.

## Functional Programming
*Functional programming libraries to extend JavaScript’s capabilities.*

* [underscore](https://github.com/jashkenas/underscore) - JavaScript's utility _ belt.
* [lodash](https://github.com/lodash/lodash) - A utility library delivering consistency, customization, performance, & extras.
* [Sugar](https://github.com/andrewplummer/Sugar) - A JavaScript library for working with native objects.
* [lazy.js](https://github.com/dtao/lazy.js) - Like Underscore, but lazier.
* [ramda](https://github.com/ramda/ramda) - A practical functional library for JavaScript programmers.
* [mout](https://github.com/mout/mout) - Modular JavaScript Utilities.
* [preludejs](https://github.com/alanrsoares/prelude-js) - Hardcore Functional Programming for JavaScript.
* [rambda](https://github.com/selfrefactor/rambda) - Faster and smaller alternative to *Ramda*.
* [fxts](https://github.com/marpple/FxTS) - Lazy evaluation and concurrency.
* [wild-wild-path](https://github.com/ehmicky/wild-wild-path) - Object property paths with wildcards and regexps.
* [sweet-monads](https://github.com/JSMonk/sweet-monads) - A utility library containing popular monads and lazy iterators.

**Reactive Programming** - Reactive programming libraries to extend JavaScript’s capabilities.

* [RxJS](https://github.com/ReactiveX/rxjs) - A reactive programming library for JavaScript.
* [Bacon](https://github.com/baconjs/bacon.js) - FRP (functional reactive programming) library for JavaScript.
* [Kefir](https://github.com/pozadi/kefir) - FRP library for JavaScript inspired by Bacon.js and RxJS with focus on high performance and low memory consumption.
* [Highland](https://caolan.github.io/highland/) - Re-thinking the JavaScript utility belt, Highland manages synchronous and asynchronous code easily, using nothing more than standard JavaScript and Node-like Streams.
* [Most.js](https://github.com/cujojs/most) - high performance FRP library.
* [MobX](https://github.com/mobxjs/mobx) - TFRP library for simple, scalable state management.
* [Cycle.js](https://cycle.js.org) - A functional and reactive JavaScript library for cleaner code.
* [concent](https://github.com/concentjs/concent) - Definitely the ❤️ simplest but ⚡️ strongest state management for react, it is predictable、progressive and efficient.
* [stunk](https://github.com/I-am-abdulazeez/stunk) A framework-agnostic state management library that keeps your app’s state clean and simple. It uses a fine-grained state model, breaking state into independent, manageable chunks.

## Data Structure
*Data structure libraries to build a more sophisticated application.*

* [immutable-js](https://github.com/facebook/immutable-js) - Immutable Data Collections including Sequence, Range, Repeat, Map, OrderedMap, Set and a sparse Vector.
* [mori](https://github.com/swannodette/mori) - A library for using ClojureScript's persistent data structures and supporting API from the comfort of vanilla JavaScript.
* [buckets](https://github.com/mauriciosantos/Buckets-JS) - A complete, fully tested and documented data structure library written in JavaScript.
* [hashmap](https://github.com/flesler/hashmap) - Simple hashmap implementation that supports any kind of keys.
* [ngraph.graph](https://github.com/anvaka/ngraph.graph) - Graph data structure in javascript.
* [js-sdsl](https://github.com/zly201/js-sdsl) - Refer to the javascript standard data structure library implemented by c++ stl, which supports c++ bidirectional iterator mode.

## Date
*Date Libraries.*

* [moment](https://github.com/moment/moment) - Parse, validate, manipulate, and display dates in JavaScript.
* [moment-timezone](https://github.com/moment/moment-timezone) - Timezone support for moment.js.
* [jquery-timeago](https://github.com/rmm5t/jquery-timeago) - A jQuery plugin that makes it easy to support automatically updating fuzzy timestamps (e.g. "4 minutes ago").
* [timezone-js](https://github.com/mde/timezone-js) - Timezone-enabled JavaScript Date object. Uses Olson zoneinfo files for timezone data.
* [date](https://github.com/MatthewMueller/date) - Date() for humans.
* [ms.js](https://github.com/rauchg/ms.js) - Tiny millisecond conversion utility.
* [countdown.js](https://github.com/gumroad/countdown.js) - Super simple countdowns.
* [timeago.js](https://github.com/hustcc/timeago.js) - Simple library (less then 2kb) used to format date with `*** time ago` statement.
* [fecha](https://github.com/taylorhakes/fecha) - Lightweight date formatting and parsing (~2KB). Meant to replace parsing and formatting functionality of moment.js.
* [date-fns](https://github.com/date-fns/date-fns) - Modern JavaScript date utility library.
* [map-countdown](https://github.com/dawidjaniga/map-countdown) - A browser countdown built on top of the Google Maps.
* [dayjs](https://github.com/iamkun/dayjs) - Day.js 2KB immutable date library alternative to Moment.js with the same modern API.
* [luxon](https://github.com/moment/luxon) - Luxon is a library for working with dates and times in JavaScript.
* [tempo](https://github.com/formkit/tempo) - Parsing, formatting, and timezones — Tempo is a small tree-shakable library for native Date objects.

## String
*String Libraries.*

* [voca](https://github.com/panzerdp/voca) - The ultimate JavaScript string library
* [selecting](https://github.com/EvandroLG/selecting) - A library that allows you to access the text selected by the user.
* [underscore.string](https://github.com/epeli/underscore.string) - String manipulation extensions for Underscore.js JavaScript library.
* [string.js](https://github.com/jprichardson/string.js) - Extra JavaScript string methods.
* [he](https://github.com/mathiasbynens/he) - A robust HTML entity encoder/decoder written in JavaScript.
* [multiline](https://github.com/sindresorhus/multiline) - Multiline strings in JavaScript.
* [query-string](https://github.com/sindresorhus/query-string) - Parse and stringify URL query strings.
* [URI.js](https://github.com/medialize/URI.js/) - JavaScript URL mutation library.
* [jsurl](https://github.com/Mikhus/domurl) - Lightweight URL manipulation with JavaScript.
* [sprintf.js](https://github.com/alexei/sprintf.js) - A sprintf implementation.
* [url-pattern](https://github.com/snd/url-pattern) - Easier than regex string matching patterns for urls and other strings. Turn strings into data or data into strings.
* [plexis](https://github.com/plexis-js/plexis) - Lo-fi, powerful, community-driven string manipulation library.
* [url-state-machine](https://github.com/anonrig/url-js) - Super fast spec-compliant URL parser state machine for Node.js.

## Number

* [Numeral-js](https://github.com/adamwdraper/Numeral-js) - A JavaScript library for formatting and manipulating numbers.
* [chance.js](https://github.com/chancejs/chancejs) - Random generator helper in JavaScript. Can generate numbers, strings etc.
* [odometer](https://github.com/HubSpot/odometer) - Smoothly transitions numbers with ease.
* [accounting.js](https://github.com/josscrowcroft/accounting.js) - A lightweight JavaScript library for number, money and currency formatting - fully localisable, zero dependencies.
* [money.js](https://github.com/josscrowcroft/money.js) - A tiny (1kb) JavaScript currency conversion library, for web & nodeJS.
* [Fraction.js](https://github.com/infusion/Fraction.js) - A rational number library for JavaScript.
* [Complex.js](https://github.com/infusion/Complex.js) - A complex number library for JavaScript.
* [Polynomial.js](https://github.com/infusion/Polynomial.js) - A polynomials library for JavaScript.
* [Quaternion.js](https://github.com/infusion/Quaternion.js) - A quaternion library for JavaScript

## Storage

* [store.js](https://github.com/marcuswestin/store.js) - LocalStorage wrapper for all browsers without using cookies or flash. Uses localStorage, globalStorage, and userData behavior under the hood.
* [localForage](https://github.com/mozilla/localForage) - Offline storage, improved. Wraps IndexedDB, WebSQL, or localStorage using a simple but powerful API.
* [jStorage](https://github.com/andris9/jStorage) - jStorage is a simple key/value database to store data on browser side.
* [cross-storage](https://github.com/zendesk/cross-storage) - Cross domain local storage, with permissions.
* [basket.js](https://github.com/addyosmani/basket.js) - A script and resource loader for caching & loading scripts with localStorage.
* [bag.js](https://github.com/nodeca/bag.js) - A caching script and resource loader, similar to basket.js, but with additional k/v interface and localStorage / websql / indexedDB support.
* [basil.js](https://github.com/Wisembly/basil.js) - The missing JavaScript smart persistent layer.
* [jquery-cookie](https://github.com/carhartl/jquery-cookie) - A simple, lightweight jQuery plugin for reading, writing and deleting cookies.
* [js-cookie](https://github.com/js-cookie/js-cookie) - A simple, lightweight JavaScript API for handling browser cookies.
* [Cookies](https://github.com/ScottHamper/Cookies) - JavaScript Client-Side Cookie Manipulation Library.
* [DB.js](https://github.com/aaronpowell/db.js/) - Promise based IndexDB Wrapper library.
* [lawnchair.js](https://github.com/brianleroux/lawnchair/) - Simple client-side JSON storage.
* [sql.js](https://github.com/kripken/sql.js) - SQLite compiled to JavaScript through Emscripten.
* [pouchdb](https://github.com/pouchdb/pouchdb) - Javascript db inspired by Apache CouchDB to run well within the browser.
* [crumbsjs](https://github.com/nirtz89/crumbsjs) - A lightweight vanilla ES6 cookies and local storage JavaScript library.
* [awesome-web-storage](https://github.com/softvar/awesome-web-storage) - Everything you need to know about client-side storage.
* [datavore](https://github.com/StanfordHCI/datavore) - A small, fast, in-browser database engine written in JavaScript.
* [Hoodie](https://github.com/hoodiehq/hoodie) - Offline First backend to work in browser without internet connectivity.
* [NeDB](https://github.com/louischatriot/nedb) - Embedded Persistent database for Browsers, nw.js, electron.
* [Lovefield](https://google.github.io/lovefield) - Lovefield is a relational database for web apps, By Google.
* [Dexie.js](https://github.com/dexie/Dexie.js) - Dexie.js is a wrapper library for indexedDB.
* [proxy-web-storage](https://github.com/KID-joker/proxy-web-storage) - Keep the type of storage value unchanged and change array and object directly. Supports listening to the changes and setting expires.
* [PostgreSQL Browser](https://github.com/datawan-labs/pg) - Browser PostgreSQL Playground, no server, just client and pglite (postgresql wasm)
  
## Color

* [randomColor](https://github.com/davidmerfield/randomColor) - A color generator for JavaScript.
* [chroma.js](https://github.com/gka/chroma.js) - JavaScript library for all kinds of color manipulations.
* [color](https://github.com/Qix-/color) - JavaScript color conversion and manipulation library.
* [colors](https://github.com/mrmrs/colors) - Smarter defaults for colors on the web.
* [PleaseJS](https://github.com/Fooidge/PleaseJS) - JavaScript Library for creating random pleasing colors and color schemes.
* [TinyColor](https://github.com/bgrins/TinyColor) - Fast, small color manipulation and conversion for JavaScript.
* [Vibrant.js](https://github.com/jariz/vibrant.js/) - Extract prominent colors from an image.

## I18n And L10n
*Localization (l10n) and internationalization (i18n) JavaScript libraries.*

* [i18next](https://github.com/i18next/i18next) - internationalisation (i18n) with JavaScript the easy way.
* [polyglot](https://github.com/airbnb/polyglot.js) - tiny i18n helper library.
* [babelfish](https://github.com/nodeca/babelfish/) - i18n with human friendly API and built in plurals support.
* [ttag](https://github.com/ttag-org/ttag) - Modern javascript i18n localization library based on ES6 tagged templates and the good old GNU gettext.
* [attranslate](https://github.com/fkirc/attranslate) - A JavaScript-tool for synchronizing translation-files, including JSON/YAML/XML and other formats.

## Control Flow

* [async](https://github.com/caolan/async) - Async utilities for node and the browser.
* [q](https://github.com/kriskowal/q) - A tool for making and composing asynchronous promises in JavaScript.
* [step](https://github.com/creationix/step/) - An async control-flow library that makes stepping through logic easy.
* [contra](https://github.com/bevacqua/contra/) - Asynchronous flow control with a functional taste to it.
* [Bluebird](https://github.com/petkaantonov/bluebird/) - fully featured promise library with focus on innovative features and performance.
* [when](https://github.com/cujojs/when) - A solid, fast Promises/A+ and when() implementation, plus other async goodies.
* [ObjectEventTarget](https://github.com/gartz/ObjectEventTarget) - Provide a prototype that add support to event listeners (with same behavior of EventTarget from DOMElements available on browsers).
* [sporadic](https://github.com/marcoonroad/sporadic) - Composable concurrency abstractions (such as streams, coroutines and Go-like channels) on top of promises, for Node and browser engines.

## Routing

* [director](https://github.com/flatiron/director) - A tiny and isomorphic URL router for JavaScript.
* [page.js](https://github.com/visionmedia/page.js) - Micro client-side router inspired by the Express router (~1200 bytes).
* [pathjs](https://github.com/mtrpcic/pathjs) - Simple, lightweight routing for web browsers.
* [crossroads](https://github.com/millermedeiros/crossroads.js) - JavaScript Routes.
* [davis.js](https://github.com/olivernn/davis.js) - RESTful degradable JavaScript routing using pushState.
* [navaid](https://github.com/lukeed/navaid) - A navigation aid (aka, router) for the browser in 850 bytes~!

## Security

* [DOMPurify](https://github.com/cure53/DOMPurify) - A DOM-only, super-fast, uber-tolerant XSS sanitizer for HTML, MathML and SVG.
* [js-xss](https://github.com/leizongmin/js-xss) - Sanitize untrusted HTML (to prevent XSS) with a configuration specified by a Whitelist.
* [xss-filters](https://github.com/yahoo/xss-filters) - Secure XSS Filters by Yahoo.
* [sanitize-html](https://github.com/apostrophecms/sanitize-html) - sanitize-html provides a simple HTML sanitizer with a clear API.

## Log

* [log](https://github.com/adamschwartz/log) - Console.log with style.
* [Conzole](https://github.com/Oaxoa/Conzole) - A debug panel built in JavaScript that wraps JavaScript native console object methods and functionality in a panel displayed inside the page.
* [console.log-wrapper](https://github.com/patik/console.log-wrapper) - Log to the console in any browser with clarity.
* [loglevel](https://github.com/pimterry/loglevel) - Minimal lightweight logging for JavaScript, adding reliable log level methods to wrap any available console.log methods.
* [minilog](http://mixu.net/minilog/) – Lightweight client & server-side logging with Stream-API backends.
* [storyboard](http://guigrpa.github.io/storyboard/) - Universal logging library + Chrome extension; it lets you see all client and server tasks triggered by a user action in a single place.
* [LogTape](https://logtape.org/) - Simple logging library with zero dependencies for Deno, Node.js, Bun, browsers, and edge functions.

## RegExp
* [RegEx101](https://regex101.com/#javascript) - Online regex tester and debugger for JavaScript. Also supports Python, PHP and PCRE.
* [RegExr](https://regexr.com/) - HTML/JS based tool for creating, testing, and learning about Regular Expressions.
* [Regulex](https://jex.im/regulex/) - JavaScript Regular Expression Parser & Visualizer.
* [Regex-Vis](https://regex-vis.com/) - Regex visualizer & editor.

## Voice Command

* [annyang](https://github.com/TalAter/annyang) - A JavaScript library for adding voice commands to your site, using speech recognition.
* [voix.js](https://github.com/pazguille/voix) - A JavaScript library to add voice commands to your sites, apps or games.

**API** -

* [axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js.
* [bottleneck](https://github.com/SGrondin/bottleneck) - A powerful rate limiter that makes throttling easy.
* [oauth-signature-js](https://github.com/bettiolo/oauth-signature-js) - JavaScript OAuth 1.0a signature generator for node and the browser.
* [amygdala](https://github.com/lincolnloop/amygdala) - RESTful HTTP client for JavaScript powered web applications.
* [jquery.rest](https://github.com/jpillora/jquery.rest) - A jQuery plugin for easy consumption of RESTful APIs.
* [Rails Ranger](https://github.com/victor-am/rails-ranger) - An opinionated REST client for Ruby on Rails APIs.
* [wretch](https://github.com/elbywan/wretch) - A tiny wrapper built around fetch with an intuitive syntax.
* [FarFetch](https://github.com/WebsiteBeaver/far-fetch) - Modern Fetch API wrapper for simplicity, with concise file uploading.
* [Optic](https://github.com/opticdev/optic) - Optic automatically documents and tests your APIs.
* [SWR](https://github.com/vercel/swr) - React Hooks library for remote data fetching.
* [React Query](https://github.com/tannerlinsley/react-query) - Hooks for fetching, caching and updating asynchronous data in React.
* [SWRV](https://github.com/Kong/swrv) - Stale-while-revalidate data fetching for Vue.
* [Vue Query](https://github.com/DamianOsipiuk/vue-query) - Hooks for fetching, caching and updating asynchronous data in Vue.

## Streaming

* [Tailor](https://github.com/zalando/tailor) - Streaming layout service for front-end microservices, inspired by Facebook's BigPipe.

## Vision Detection

* [tracking.js](https://github.com/eduardolundgren/tracking.js) - A modern approach for Computer Vision on the web.
* [ocrad.js](https://github.com/antimatter15/ocrad.js) - OCR in JavaScript via Emscripten.

## Machine Learning

* [ConvNetJS](https://github.com/karpathy/convnetjs) - Deep Learning in JavaScript. Train Convolutional Neural Networks (or ordinary ones) in your browser.
* [DN2A](https://github.com/dn2a/dn2a-javascript) - Digital Neural Networks Architecture.
* [Brain.js](https://github.com/harthur/brain) - Neural networks in JavaScript.
* [Mind.js](https://github.com/stevenmiller888/mind) - A flexible neural network library.
* [Synaptic.js](https://github.com/cazala/synaptic) - Architecture-free neural network library for node.js and the browser.
* [TensorFlow.js](https://www.tensorflow.org/js/) - A JavaScript library for training and deploying ML models in the browser and on Node.js.
* [ml5.js](https://ml5js.org) - Friendly Machine Learning for the Web.
* [Synapses](https://github.com/mrdimosthenis/Synapses) - Lightweight cross-platform Neural Network library.
* [m2cgen](https://github.com/BayesWitnesses/m2cgen) - A CLI tool to transpile trained classic ML models into a native JavaScript code with zero dependencies.
* [JS-PyTorch](https://github.com/eduardoleao052/js-pytorch) - GPU accelerated PyTorch in JavaScript.

## Browser Detection

* [bowser](https://github.com/ded/bowser) - a browser detector.

## Operating System
* [os.js](https://github.com/os-js/OS.js) - An open-source web desktop platform with a window manager, application APIs, GUI toolkit, filesystem abstractions and much more.

## Benchmark

* [benchmark.js](https://github.com/bestiejs/benchmark.js) - A benchmarking library. As used on jsPerf.com.
* [matcha](https://github.com/logicalparadox/matcha) - A caffeine driven, simplistic approach to benchmarking.
* [bencher](https://github.com/bencherdev/bencher) - A suite of continuous benchmarking tools designed to catch performance regressions in CI.

## Web Worker

* [partytown](https://github.com/BuilderIO/partytown) - Relocate resource intensive third-party scripts off of the main thread and into a web worker.
* [comlink](https://github.com/GoogleChromeLabs/comlink) - Comlink is a tiny library (1.1kB), that removes the mental barrier of thinking about postMessage and hides the fact that you are working with workers.
* [greenlet](https://github.com/developit/greenlet) - Move an async function into its own thread.
* [workerize](https://github.com/developit/workerize) - Moves a module into a Web Worker, automatically reflecting exported functions as asynchronous proxies.
* [worker-dom](https://github.com/ampproject/worker-dom) - An in-progress implementation of the DOM API intended to run within a Web Worker.
* [threads.js](https://github.com/andywer/threads.js) - Offload CPU-intensive tasks to worker threads in node.js, web browsers and electron using one uniform API.
* [workly](https://github.com/pshihn/workly) - A really simple way to move a function or class to a web worker.
* [stockroom](https://github.com/developit/stockroom) - Offload your store management to a worker easily.
* [workerpool](https://github.com/josdejong/workerpool) - Offload tasks to a pool of workers on node.js and in the browser.
* [clooney](https://github.com/GoogleChromeLabs/clooney) - Clooney is an actor library for the web. Use workers without thinking about workers.

## Code highlighting

* [Highlight.js](https://github.com/isagalaev/highlight.js) - JavaScript syntax highlighter.
* [PrismJS](https://github.com/PrismJS/prism) - Lightweight, robust, elegant syntax highlighting.

## Loading Status
*Libraries for indicate load status.*

* [Mprogress.js](https://github.com/lightningtgc/MProgress.js) - Create Google Material Design progress linear bars.
* [NProgress](https://ricostacruz.com/nprogress/) - Slim progress bars for Ajax'y applications.
* [Spin.js](https://github.com/fgnass/spin.js) - A spinning activity indicator.
* [progress.js](https://github.com/usablica/progress.js) - Create and manage progress bar for every objects on the page.
* [progressbar.js](https://github.com/kimmobrunfeldt/progressbar.js) - Beautiful and responsive progress bars with animated SVG paths.
* [pace](https://github.com/HubSpot/pace) - Automatically add a progress bar to your site.
* [topbar](https://github.com/buunguyen/topbar) - Tiny & beautiful site-wide progress indicator.
* [nanobar](https://github.com/jacoborus/nanobar) - Very lightweight progress bars. No jQuery.
* [PageLoadingEffects](https://github.com/codrops/PageLoadingEffects) - Modern ways of revealing new content using SVG animations.
* [SpinKit](https://github.com/tobiasahlin/SpinKit) - A collection of loading indicators animated with CSS.
* [Ladda](https://github.com/hakimel/Ladda) - Buttons with built-in loading indicators.
* [css-loaders](https://github.com/lukehaas/css-loaders) - A collection of loading spinners animated with CSS

## Validation

* [Parsley.js](https://github.com/guillaumepotier/Parsley.js) - Validate your forms, frontend, without writing a single line of JavaScript.
* [jquery-validation](https://github.com/jzaefferer/jquery-validation) - jQuery Validation Plugin.
* [validator.js](https://github.com/chriso/validator.js) - String validation and sanitization.
* [validate.js](https://github.com/rickharrison/validate.js) - Lightweight JavaScript form validation library inspired by CodeIgniter.
* [validatr](https://github.com/jaymorrow/validatr/) - Cross Browser HTML5 Form Validation.
* [FormValidation](https://formvalidation.io/) - The best jQuery plugin to validate form fields. Formerly BootstrapValidator.
* [is.js](https://github.com/arasatasaygin/is.js) - Check types, regexps, presence, time and more.
* [FieldVal](https://github.com/FieldVal/fieldval-js) - multipurpose validation library. Supports both sync and async validation.
* [Funval](https://github.com/neuledge/funval) - Data validation using functions interfaces (support TypeScript).
* [vest](https://github.com/ealush/vest) - 🦺 Declarative form validation framework inspired by unit testing.

## Keyboard Wrappers

* [mousetrap](https://github.com/ccampbell/mousetrap) - Simple library for handling keyboard shortcuts in JavaScript.
* [keymaster](https://github.com/madrobby/keymaster) - A simple micro-library for defining and dispatching keyboard shortcuts.
* [Keypress](https://github.com/dmauro/Keypress) - A keyboard input capturing utility in which any key can be a modifier key.
* [KeyboardJS](https://github.com/RobertWHurst/KeyboardJS) - A JavaScript library for binding keyboard combos without the pain of key codes and key combo conflicts.
* [jquery.hotkeys](https://github.com/jeresig/jquery.hotkeys) - jQuery Hotkeys lets you watch for keyboard events anywhere in your code supporting almost any key combination.
* [jwerty](https://github.com/keithamus/jwerty) - Awesome handling of keyboard events.

## Tours And Guides

* [intro.js](https://github.com/usablica/intro.js) - A better way for new feature introduction and step-by-step users guide for your website and project.
* [shepherd](https://github.com/HubSpot/shepherd) - Guide your users through a tour of your app.
* [bootstrap-tour](https://github.com/sorich87/bootstrap-tour) - Quick and easy product tours with Twitter Bootstrap Popovers.
* [tourist](https://github.com/easelinc/tourist) - Simple, flexible tours for your app.
* [hopscotch](https://github.com/linkedin/hopscotch) - A framework to make it easy for developers to add product tours to their pages.
* [joyride](https://github.com/zurb/joyride) - jQuery feature tour plugin.
* [focusable](https://github.com/zzarcon/focusable) - Set a spotlight focus on DOM element adding a overlay layer to the rest of the page.
* [driver.js](https://github.com/kamranahmedse/driver.js) - Powerful yet light-weight, vanilla JavaScript engine to drive the user's focus across the page

## Notifications

* [iziToast](https://github.com/dolce/iziToast) - Elegant, responsive, flexible and lightweight notification plugin with no dependencies.
* [messenger](https://github.com/HubSpot/messenger) - Growl-style alerts and messages for your app.
* [noty](https://github.com/needim/noty) - jQuery notification plugin.
* [pnotify](https://github.com/sciactive/pnotify) - JavaScript notifications for Bootstrap, jQuery UI, and the Web Notifications Draft.
* [toastr](https://github.com/CodeSeven/toastr) - Simple JavaScript toast notifications.
* [humane-js](https://github.com/wavded/humane-js) - A simple, modern, browser notification system.
* [smoke.js](https://github.com/hxgf/smoke.js) - Framework-agnostic styled alert system for JavaScript.
* [notie](https://github.com/jaredreich/notie) - Simple notifications and inputs with no dependencies.
* [notifire](https://github.com/notifirehq/notifire) - Open-source notification infrastructure for products.
* [toastify-js](https://github.com/apvarun/toastify-js) - Pure JavaScript library for better notification messages.

## Sliders

* [Swiper](https://github.com/nolimits4web/Swiper) - Mobile touch slider and framework with hardware accelerated transitions.
* [slick](https://github.com/kenwheeler/slick) - The last carousel you'll ever need.
* [slidesJs](http://www.slidesjs.com) - Is a responsive slideshow plug-in for JQuery(1.7.1+) with features like touch and CSS3 transitions
* [FlexSlider](https://github.com/woothemes/FlexSlider) - An awesome, fully responsive jQuery slider plugin.
* [sly](https://github.com/darsain/sly) - JavaScript library for one-directional scrolling with item based navigation support.
* [vegas](https://github.com/jaysalvat/vegas) - A jQuery plugin to add beautiful fullscreen backgrounds to your webpages. It even allows Slideshows.
* [Sequence](https://github.com/IanLunn/Sequence) - CSS animation framework for creating responsive sliders, presentations, banners, and other step-based applications.
* [reveal.js](https://github.com/hakimel/reveal.js) - A framework for easily creating beautiful presentations using HTML.
* [impress.js](https://github.com/impress/impress.js) - It's a presentation framework based on the power of CSS3 transforms and transitions in modern browsers and inspired by the idea behind prezi.com.
* [bespoke.js](https://github.com/bespokejs/bespoke) - DIY Presentation Micro-Framework
* [Strut](https://github.com/tantaman/Strut) - Strut - An Impress.js and Bespoke.js Presentation Editor
* [PhotoSwipe](https://github.com/dimsemenov/PhotoSwipe) - JavaScript image gallery for mobile and desktop, modular, framework independent.
* [jcSlider](https://github.com/JoanClaret/jcSlider) - A responsive slider jQuery plugin with CSS animations.
* [basic-jquery-slider](https://github.com/jcobb/basic-jquery-slider) - Simple to use, simple to theme, simple to customise.
* [jQuery.adaptive-slider](https://github.com/creative-punch/jQuery.adaptive-slider/) - A jQuery plugin for a slider with adaptive colored figcaption and navigation.
* [slidr](https://github.com/bchanx/slidr) - add some slide effects.
* [Flickity](https://github.com/metafizzy/flickity) - Touch, responsive, flickable galleries.
* [Glide.js](https://github.com/jedrzejchalubek/glidejs) - Responsive and touch-friendly jQuery slider. It's simple, lightweight and fast.
* [Embla Carousel](https://github.com/davidcetinkaya/embla-carousel) - An extensible low level carousel for the web, written in TypeScript.

## Range Sliders

* [Ion.RangeSlider](https://github.com/IonDen/ion.rangeSlider) - Powerful and easily customizable range slider with many options and skin support.
* [jQRangeSlider](https://github.com/ghusse/jQRangeSlider) - A JavaScript slider selector that supports dates.
* [noUiSlider](https://github.com/leongersen/noUiSlider) - A lightweight, highly customizable range slider without bloat.
* [rangeslider.js](https://github.com/andreruffert/rangeslider.js) - HTML5 input range slider element polyfill.


## Form Widgets

### Input

* [typeahead.js](https://github.com/twitter/typeahead.js) - A fast and fully-featured autocomplete library.
* [tag-it](https://github.com/aehlke/tag-it) - A jQuery UI plugin to handle multi-tag fields as well as tag suggestions/autocomplete.
* [At.js](https://github.com/ichord/At.js) - Add GitHub like mentions autocomplete to your application.
* [Placeholders.js](https://github.com/jamesallardice/Placeholders.js) - A JavaScript polyfill for the HTML5 placeholder attribute.
* [fancyInput](https://github.com/yairEO/fancyInput) - Makes typing in input fields fun with CSS3 effects.
* [jQuery-Tags-Input](https://github.com/xoxco/jQuery-Tags-Input) - Magically convert a simple text input into a cool tag list with this jQuery plugin.
* [vanilla-masker](https://github.com/BankFacil/vanilla-masker) - A pure JavaScript mask input.
* [Ion.CheckRadio](https://github.com/IonDen/ion.checkRadio) - jQuery plugin for styling checkboxes and radio-buttons. With skin support.
* [awesomplete](https://github.com/LeaVerou/awesomplete) - Ultra lightweight, usable, beautiful autocomplete with zero dependencies. - https://projects.verou.me/awesomplete/

### Calendar

* [pickadate.js](https://github.com/amsul/pickadate.js) - The mobile-friendly, responsive, and lightweight jQuery date & time input picker.
* [bootstrap-datepicker](https://github.com/eternicode/bootstrap-datepicker) - A datepicker for @twitter bootstrap forked from Stefan Petre's (of eyecon.ro), improvements by @eternicode.
* [Pikaday](https://github.com/dbushell/Pikaday) - A refreshing JavaScript Datepicker — lightweight, no dependencies, modular CSS.
* [fullcalendar](https://github.com/fullcalendar/fullcalendar) - Full-sized drag & drop event calendar (jQuery plugin).
* [rome](https://github.com/bevacqua/rome) - A customizable date (and time) picker. Dependency free, opt-in UI.
* [Date Range Picker](https://github.com/dangrossman/daterangepicker) - creates a dropdown menu from which a user can select a range of dates.
* [Duet Date Picker](https://github.com/duetds/date-picker) - open source version of Duet Design System’s accessible date picker, WCAG 2.1 accessibility complaint
* [tui.calendar](https://github.com/nhn/tui.calendar) - A JavaScript schedule calendar that is full featured. Now your service just got the customizable calendar.
* [Schedule-X](https://github.com/schedule-x/schedule-x) - Material design event calendar. Features drag & drop, dark mode, multiple views and more.

### Select

* [selectize.js](https://github.com/selectize/selectize.js) - Selectize is the hybrid of a textbox and `<select>` box. It's jQuery based and it has autocomplete and native-feeling keyboard navigation; useful for tagging, contact lists, etc.
* [select2](https://github.com/select2/select2) - a jQuery based replacement for select boxes. It supports searching, remote data sets, and infinite scrolling of results.
* [chosen](https://github.com/harvesthq/chosen) - A library for making long, unwieldy select boxes more friendly.

### File Uploader

* [jQuery-File-Upload](https://github.com/blueimp/jQuery-File-Upload) - File Upload widget with multiple file selection, drag&amp;drop support, progress bar, validation and preview images, audio and video for jQuery.
* [dropzone](https://github.com/enyo/dropzone) - Dropzone is an easy to use drag'n'drop library. It supports image previews and shows nice progress bars.
* [flow.js](https://github.com/flowjs/flow.js) - A JavaScript library providing multiple simultaneous, stable, fault-tolerant and resumable/restartable file uploads via the HTML5 File API.
* [fine-uploader](https://github.com/FineUploader/fine-uploader) - Multiple file upload plugin with progress-bar, drag-and-drop, direct-to-S3 uploading.
* [FileAPI](https://github.com/mailru/FileAPI) - A set of JavaScript tools for working with files. Multiupload, drag'n'drop and chunked file upload. Images: crop, resize and auto orientation by EXIF.
* [plupload](https://github.com/moxiecode/plupload) - A JavaScript API for dealing with file uploads it supports features like multiple file selection, file type filtering, request chunking, client side image scaling and it uses different runtimes to achieve this such as HTML 5, Silverlight and Flash.
* [filepond](https://github.com/pqina/filepond) - A JavaScript library that can upload anything you throw at it, optimizes images for faster uploads, and offers a great, accessible, silky smooth user experience.

### Other

* [form](https://github.com/jquery-form/form) - jQuery Form Plugin.
* [Garlic.js](https://github.com/guillaumepotier/Garlic.js) - Automatically persist your forms' text and select field values locally, until the form is submitted.
* [Countable](https://github.com/RadLikeWhoa/Countable) - A JavaScript function to add live paragraph-, word- and character-counting to an HTML element.
* [card](https://github.com/jessepollak/card) - Make your credit card form better in one line of code.
* [stretchy](https://github.com/LeaVerou/stretchy) - Form element autosizing, the way it should be.
* [analytics](https://github.com/davidwells/analytics) - A lightweight, extendable analytics library designed to work with any third-party analytics provider to track page views, custom events, & identify users.
* [dat.GUI](https://github.com/dataarts/dat.gui) - A lightweight gui controller for changing variables in JavaScript.
## Tips

* [tipsy](https://github.com/jaz303/tipsy) - Facebook-style tooltips plugin for jQuery.
* [opentip](https://github.com/enyo/opentip) - An open source JavaScript tooltip based on the prototype framework.
* [qTip2](https://github.com/qTip2/qTip2) - Pretty powerful tooltips.
* [tooltipster](https://github.com/iamceege/tooltipster) - A jQuery tooltip plugin.
* [simptip](https://github.com/arashmanteghi/simptip) - A simple CSS tooltip made with Sass.
* [toolbar](https://github.com/paulkinzett/toolbar) - A tooltip style toolbar jQuery plugin
* [hint.css](https://github.com/chinchang/hint.css) - A tooltip library in CSS for your lovely websites.

## Modals and Popups

* [Magnific-Popup](https://github.com/dimsemenov/Magnific-Popup) - Light and responsive lightbox script with focus on performance.
* [jquery-popbox](https://github.com/gristmill/jquery-popbox) - jQuery PopBox UI Element.
* [jquery.avgrund.js](https://github.com/voronianski/jquery.avgrund.js) - A jQuery plugin with new modal concept for popups.
* [vex](https://github.com/HubSpot/vex) - A modern dialog library which is highly configurable and easy to style.
* [bootstrap-modal](https://github.com/jschr/bootstrap-modal) - Extends the default Bootstrap Modal class. Responsive, stackable, ajax and more.
* [css-modal](https://github.com/drublic/css-modal) - A modal built out of pure CSS.
* [jquery-popup-overlay](https://github.com/vast-engineering/jquery-popup-overlay) - jQuery plugin for responsive and accessible modal windows and tooltips.
* [SweetAlert](https://github.com/t4t5/sweetalert) - An awesome replacement for JavaScript's alert.
* [SweetAlert2](https://github.com/sweetalert2/sweetalert2) - An awesome replacement for JavaScript's alert.
* [baguetteBox.js](https://github.com/feimosi/baguetteBox.js) - Simple and easy to use lightbox script written in pure JavaScript.
* [colorbox](https://github.com/jackmoore/colorbox) - A light-weight, customizable lightbox plugin for jQuery.
* [fancyBox](https://github.com/fancyapps/fancyBox) - A tool that offers a nice and elegant way to add zooming functionality for images, html content and multi-media on your webpages.
* [swipebox](https://github.com/brutaldesign/swipebox) - A touchable jQuery lightbox
* [jBox](https://github.com/StephanWagner/jBox) - jBox is a powerful and flexible jQuery plugin, taking care of all your popup windows, tooltips, notices and more.
* [lightGallery](https://github.com/sachinchoolur/lightGallery) - A customizable, modular, responsive, lightbox gallery plugin for jQuery.
* [keukenhof](https://github.com/Alexandrshy/keukenhof) - Lightweight, no dependencies, accessibility enabled TypeScript library for creating modal windows.
* [screenfull.js](https://github.com/sindresorhus/screenfull.js) - the JavaScript Fullscreen API, which lets you bring the page or any element into fullscreen. Smoothens out the browser implementation differences, so you don't have to.

## Scroll

* [scrollMonitor](https://github.com/stutrek/scrollMonitor) - A simple and fast API to monitor elements as you scroll.
* [headroom](https://github.com/WickyNilliams/headroom.js) - Give your pages some headroom. Hide your header until you need it.
* [onepage-scroll](https://github.com/peachananr/onepage-scroll) - Create an Apple-like one page scroller website (iPhone 5S website) with One Page Scroll plugin.
* [iscroll](https://github.com/cubiq/iscroll) - iScroll is a high performance, small footprint, dependency free, multi-platform JavaScript scroller.
* [skrollr](https://github.com/Prinzhorn/skrollr) - Stand-alone parallax scrolling library for mobile (Android + iOS) and desktop. No jQuery.
* [parallax](https://github.com/wagerfield/parallax) - Parallax Engine that reacts to the orientation of a smart device.
* [stellar.js](https://github.com/markdalgleish/stellar.js) - Parallax scrolling made easy.
* [plax](https://github.com/cameronmcefee/plax) - jQuery powered parallaxing.
* [jparallax](https://github.com/stephband/jparallax) - jQuery plugin for creating interactive parallax effect.
* [fullPage](https://github.com/alvarotrigo/fullPage.js) - A simple and easy to use plugin to create fullscreen scrolling websites (also known as single page websites).
* [ScrollMenu](https://github.com/s-yadav/ScrollMenu) - A new interface to replace old boring scrollbar.
* [Clusterize.js](https://github.com/NeXTs/Clusterize.js) - Tiny vanilla JS plugin to display large data sets easily.
* [simpleParallax](https://github.com/geosigno/simpleParallax) - Simple and tiny JavaScript library to add parallax animations on any images
* [rellax](https://github.com/dixonandmoe/rellax) - Buttery smooth, super lightweight, vanilla javascript parallax library.
* [asscroll](https://github.com/ashthornton/asscroll) - A hybrid smooth scroll setup that combines the performance gains of virtual scroll with the reliability of native scroll.
* [stroll](https://github.com/hakimel/stroll.js) - A collection of CSS List scroll effects bind to dom through javascript.
* [locomotive-scroll](https://github.com/locomotivemtl/locomotive-scroll) - Detects the elements in viewport and smooth scrolling with parallax.
* [elevator.js](https://github.com/tholman/elevator.js) - Finally, a "back to top" button that behaves like a real elevator.

## Menu

* [jQuery-menu-aim](https://github.com/kamens/jQuery-menu-aim) - jQuery plugin to fire events when user's cursor aims at particular dropdown menu items. For making responsive mega dropdowns like Amazon's.
* [jQuery contextMenu](https://github.com/swisnl/jQuery-contextMenu) - contextMenu manager.
* [Slideout](https://github.com/mango/slideout) - A responsive touch slideout navigation menu for mobile web apps.
* [Slide and swipe](https://github.com/JoanClaret/slide-and-swipe-menu) - A sliding swipe menu that works with touchSwipe library.
* [mmenu](https://github.com/FrDH/jQuery.mmenu) - The best jQuery plugin for app look-alike on- and off-canvas menus with sliding submenus for your website and webapp.

## Table/Grid

* [jTable](https://github.com/hikalkan/jtable) - A jQuery plugin to create AJAX based CRUD tables.
* [DataTables](https://www.datatables.net/) - (jQuery plug-in) It is a highly flexible tool, based upon the foundations of progressive enhancement, and will add advanced interaction controls to any HTML table.
* [Tabulator](http://olifolkerd.github.io/tabulator/) - (jQuery plug-in) An extremely flexible library that create tables with a range of interactive features from any JSON data source or existing HTML table.
* [Bootstrap Table](https://bootstrap-table.com/) - An Extension to the popular Bootstrap framework for creating tables that fit the style of your site with no need for additional markup.
* [floatThead](https://github.com/mkoryak/floatThead) - (jQuery plug-in) lock any table's header while scrolling within the body. Works on any table and requires no custom html or css.
* [Masonry](https://masonry.desandro.com/) - A cascading grid layout library.
* [Packery](https://packery.metafizzy.co/) - A grid layout library that uses a bin-packing algorithm. Useable for draggable layouts.
* [Isotope](https://isotope.metafizzy.co/) - A filterable, sortable, grid layout library. Can implement Masonry, Packery, and other layouts.
* [flexboxgrid](https://github.com/kristoferjoseph/flexboxgrid/) - Grid based on CSS3 flexbox.

## Frameworks

* [Semantic UI](https://semantic-ui.com/) - UI Kit with lots of themes and elements.
* [w2ui](http://w2ui.com/) - A set of jQuery plugins for front-end development of data-driven web applications.
* [fluidity](https://github.com/mrmrs/fluidity) - The worlds smallest fully-responsive css framework.
* [Ink](https://github.com/sapo/Ink) - An HTML5/CSS3 framework used at SAPO for fast and efficient website design and prototyping.
* [DataFormsJS](https://github.com/dataformsjs/dataformsjs) - A minimal JavaScript Framework and standalone components for rapid development of sites and SPA's.
* [EHTML](https://github.com/Guseyn/EHTML) - HTML Framework that allows you not to write JavaScript code.

## Boilerplates

 * [html5-boilerplate](https://github.com/h5bp/html5-boilerplate) - A professional front-end template for building fast, robust, and adaptable web apps or sites.
 * [mobile-boilerplate](https://github.com/h5bp/mobile-boilerplate) - A front-end template that helps you build fast, modern mobile web apps.
 * [webplate](https://github.com/chrishumboldt/webplate) - An awesome front-end framework that lets you stay focused on building your site or app while remaining really easy to use.
 * [Cerberus](https://github.com/TedGoas/Cerberus) - A few simple, but solid patterns for responsive HTML emails. Even in Outlook.
 * [full-page-intro-and-navigation](https://github.com/CodyHouse/full-page-intro-and-navigation) - An intro page with a full width background image, a bold animated menu and an iOS-like blurred effect behind the navigation.
 * [Fluid-Squares](https://github.com/crozynski/Fluid-Squares) - A fluid grid of square units.
 * [Mobile-First-RWD](https://github.com/bradfrost/Mobile-First-RWD) - An example of a mobile-first responsive web design.
 * [this-is-responsive](https://github.com/bradfrost/this-is-responsive) - This Is Responsive.
 * [npm run-scripts](https://gist.github.com/addyosmani/9f10c555e32a8d06ddb0) Task automation with NPM run-scripts.
 * [Wasp](https://github.com/wasp-lang/wasp) Wasp is a declarative domain-specific language for developing, building, and deploying modern Javascript full-stack web apps with less code.

## Images

 * [Drift](https://github.com/imgix/drift) - Easily add "zoom on hover" functionality to your site's images. Lightweight, no-dependency JavaScript.
 * [Magnificent.js](https://github.com/AndersDJohnson/magnificent.js) - Zoom responsively, images & more, w/ jQuery.
 * [Panolens.js](https://github.com/pchen66/panolens.js) - Panolens.js is an event-driven and WebGL based panorama viewer. Lightweight and flexible
## Gesture

* [hammer.js](https://github.com/hammerjs/hammer.js) - A JavaScript library for multi-touch gestures.
* [touchemulator](https://github.com/hammerjs/touchemulator) - Emulate touch input on your desktop.
* [Dragula](https://github.com/bevacqua/dragula/) - Drag and drop so simple it hurts.

## Maps

* [Leaflet](https://github.com/Leaflet/Leaflet) - JavaScript library for mobile-friendly interactive maps.
* [Cesium](https://github.com/AnalyticalGraphicsInc/cesium) - Open Source WebGL virtual globe and map engine.
* [gmaps](https://github.com/HPNeo/gmaps) - The easiest way to use Google Maps.
* [polymaps](https://github.com/simplegeo/polymaps) - A free JavaScript library for making dynamic, interactive maps in modern web browsers.
* [kartograph.js](https://github.com/kartograph/kartograph.js) - Open source JavaScript renderer for Kartograph SVG maps.
* [mapbox.js](https://github.com/mapbox/mapbox.js) - Mapbox JavaScript API, a Leaflet Plugin.
* [jqvmap](https://github.com/manifestinteractive/jqvmap) - jQuery Vector Map Library.
* [OpenLayers3](https://openlayers.org/) - A high-performance, feature-packed library for all your mapping needs.
* [H3js](https://github.com/uber/h3) - Hexagonal hierarchical geospatial indexing system ported to javascript by Uber for geospatial visualization.

## Video/Audio

 * [prettyembed.js](https://github.com/mike-zarandona/prettyembed.js) - Prettier embeds for your YouTubes - with nice options like high-res preview images, advanced customization of embed options, and optional FitVids support.
 * [Play-em JS](https://github.com/adrienjoly/playemjs) - Play'em is a JavaScript component that manages a music/video track queue and plays a sequence of songs by embedding several players in a HTML DIV including Youtube, Soundcloud and Vimeo.
 * [polyplayer](https://github.com/Acconut/polyplayer) - Rule YouTube, Soundcloud and Vimeo player with one API.
 * [flowplayer](https://github.com/flowplayer/flowplayer) - The HTML5 video player for the web
 <https://flowplayer.com/>
 * [mediaelement](https://github.com/johndyer/mediaelement) - HTML5 <audio> or <video> player with Flash and Silverlight shims that mimics the HTML5 MediaElement API, enabling a consistent UI in all browsers. <http://www.mediaelementjs.com/>
 * [SoundJS](https://github.com/CreateJS/SoundJS) - A library to make working with audio on the web easier. It provides a consistent API for playing audio in different browsers.
 * [video.js](https://github.com/videojs/video.js) - Video.js - open source HTML5 & Flash video player.
 * [FitVids.js](https://github.com/davatron5000/FitVids.js) - A lightweight, easy-to-use jQuery plugin for fluid width video embeds.
 * [Ion.Sound](https://github.com/IonDen/ion.sound) - Simple sounds on any web page.
 * [photobooth-js](https://github.com/WolframHempel/photobooth-js) - A widget that allows users to take their avatar pictures on your site.
 * [clappr](https://github.com/clappr/clappr) - An extensible media player for the web http://clappr.io
 * [ts-audio](https://github.com/EvandroLG/ts-audio) - an agnostic and easy-to-use library to work with the `AudioContext` API.
 * [AmplitudeJS](https://521dimensions.com/open-source/amplitudejs) - Open Source HTML5 Web Audio Library. Design your web audio player, the way you want. No dependencies required.
 * [ractive-player](https://github.com/ysulyma/ractive-player) - A library for making interactive videos in React.js.
 * [ffmpeg.js](https://github.com/Kagami/ffmpeg.js) - FFmpeg optimized for in-browser use: minimal size for faster loading, asm.js, performance tunings, etc.
 * [flv.js](https://github.com/bilibili/flv.js) - An HTML5 Flash Video (FLV) Player written in pure JavaScript without Flash.
 * [hls.js](https://github.com/video-dev/hls.js) -  A JavaScript library that implements an HTTP Live Streaming client. It relies on HTML5 video and MediaSource Extensions for playback.

## Typography

 * [FlowType.JS](https://github.com/simplefocus/FlowType.JS) - Web typography at its finest: font-size and line-height based on element width.
 * [BigText](https://github.com/zachleat/BigText) - jQuery plugin, calculates the font-size and word-spacing needed to match a line of text to a specific width.
 * [circletype](https://github.com/peterhry/circletype) - A jQuery plugin that lets you curve type on the web.
 * [slabText](https://github.com/freqDec/slabText/) - A jQuery plugin for producing big, bold & responsive headlines.
 * [simple-text-rotator](https://github.com/peachananr/simple-text-rotator) - Add a super simple rotating text to your website with little to no markup.
 * [novacancy.js](https://github.com/chuckyglitch/novacancy.js) - Text Neon Golden effect jQuery plug-in.
 * [jquery-responsive-text](https://github.com/ghepting/jquery-responsive-text) - Make your text sizing responsive!
 * [FitText.js](https://github.com/davatron5000/FitText.js) - A jQuery plugin for inflating web type.
 * [Lettering.js](https://github.com/davatron5000/Lettering.js) - A lightweight, easy to use JavaScript `<span>` injector for radical Web Typography.

## Animations

* [velocity](https://github.com/julianshapiro/velocity) - Accelerated JavaScript animation.
* [jquery.transit](https://github.com/rstacruz/jquery.transit) - Super-smooth CSS3 transformations and transitions for jQuery.
* [bounce.js](https://github.com/tictail/bounce.js) - Create tasty CSS3 powered animations in no time.
* [GreenSock-JS](https://github.com/greensock/GreenSock-JS) - High-performance HTML5 animations that work in all major browsers.
* [TransitionEnd](https://github.com/EvandroLG/transitionEnd) - TransitionEnd is an agnostic and cross-browser library to work with transitioned event.
* [Dynamic.js](https://github.com/michaelvillar/dynamics.js) - JavaScript library to create physics-based CSS animations.
* [the-cube](https://github.com/pstadler/the-cube) - The Cube is an experiment with CSS3 transitions.
* [Effeckt.css](https://github.com/h5bp/Effeckt.css) - A Performant Transitions and Animations Library.
* [animate.css](https://github.com/daneden/animate.css) - A cross-browser library of CSS animations. As easy to use as an easy thing.
* [textillate](https://github.com/jschr/textillate) - A simple plugin for CSS3 text animations.
* [move.js](https://github.com/visionmedia/move.js) - CSS3 backed JavaScript animation framework.
* [animatable](https://github.com/LeaVerou/animatable) - One property, two values, endless possibilities.
* [shuffle-images](https://github.com/peachananr/shuffle-images) - The Simplest Way to shuffle through images in a Creative Way.
* [smoothState.js](https://github.com/miguel-perez/smoothState.js) - Unobtrusive page transitions with jQuery.
* [Anime.js](https://animejs.com/) - A JavaScript animation engine.
* [Mo.js](https://mojs.github.io/) - Motion graphics toolbelt for the web.
* [particles.js](https://github.com/VincentGarreau/particles.js) - A lightweight JavaScript library for creating particles.
* [tsParticles](https://github.com/matteobruni/tsparticles) - A new and improved version of particles.js with bug fixes and many new features.
* [particles-bg](https://github.com/lindelof/particles-bg) - A lightweight React particles animation background component.
* [barbajs](https://github.com/barbajs/barba) - It helps you create fluid and smooth transitions between your website's pages.
* [typicaljs](https://github.com/camwiegert/typical) - Animated typing in ~400 bytes 🐡 of JavaScript
* [AutoAnimate](https://auto-animate.formkit.com) - Add motion to your apps with a single line of code.

## Image Processing

* [lena.js](https://github.com/davidsonfellipe/lena.js) - A Library for image processing with filters and util functions.
* [pica](https://github.com/nodeca/pica) - High quality image resize (with fast Lanczos filter, implemented in pure JS).
* [cropper](https://github.com/fengyuanchen/cropper) - A simple jQuery image cropping plugin.

## ES6

* [es6features](https://github.com/lukehoban/es6features) - Overview of ECMAScript 6 features.
* [es6-features](https://github.com/rse/es6-features) - ECMAScript 6: Feature Overview & Comparison.
* [es6-cheatsheet](https://github.com/DrkSephy/es6-cheatsheet) - ES2015 [ES6] cheatsheet containing tips, tricks, best practices and code snippets.
* [ECMAScript 6 compatibility table](https://compat-table.github.io/compat-table/es6/) - Compatibility tables for all ECMAScript 6 features on a variety of environments.
* [Babel (Formerly 6to5)](https://github.com/babel/babel) - Turn ES6+ code into vanilla ES5 with no runtime.
* [Traceur compiler](https://github.com/google/traceur-compiler) - ES6 features > ES5. Includes classes, generators, promises, destructuring patterns, default parameters & more.


## Generators

* [Gatsby.js](https://github.com/gatsbyjs/gatsby) - React-based static site generator.
* [Gridsome](https://github.com/gridsome/gridsome) - Vue-powered static site generator.
* [Docusaurus](https://github.com/facebook/docusaurus) - React-based static site generator by Facebook, ideal for content-centric websites.
* [Next.js](https://github.com/vercel/next.js) - React powered static site generator, and they say "All the tools you need to make the Web. Faster.".
* [Lume](https://github.com/lumeland/lume) - Static site generator for Deno.
* [Astro](https://github.com/withastro/astro) - The web framework for content-driven websites.

## SDK

* [javascript-sdk-design](https://github.com/huei90/javascript-sdk-design) - JavaScript SDK design guide extracted from work and personal experience.
* [Spotify SDK](https://github.com/loverajoel/spotify-sdk) - Entity oriented SDK to work with the Spotify Web API.
* [Square Node.js SDK](https://github.com/square/connect-nodejs-sdk/) - JavaScript client library for payments and other Square APIs.
* [OpenAI SDK](https://github.com/openai/openai-node) - Official JavaScript / TypeScript library for the OpenAI API.

## Full Text Search

* [lunr](https://github.com/olivernn/lunr.js) - Library for use in the browser and It indexes JSON documents and provides a simple search interface for retrieving documents that best match text queries.
* [flexsearch](https://github.com/nextapps-de/flexsearch) - It is a Next-Generation full text search library for Browser and Node.js.
* [Elasticlunr](https://github.com/weixsong/elasticlunr.js) - This library is based on lunr.js, but more flexible and customized.
  
## ORM

* [Prisma](https://github.com/prisma/prisma) Next-generation ORM for Node.js & TypeScript | PostgreSQL, MySQL, MariaDB, SQL Server, SQLite, MongoDB and CockroachDB.
* [Sequelize](https://github.com/sequelize/sequelize) Feature-rich ORM for modern Node.js and TypeScript | PostgreSQL, MySQL, MariaDB, SQLite, MS SQL Server, Snowflake, Oracle DB...
* [Mongoose](https://github.com/Automattic/mongoose) MongoDB object modeling designed to work in an asynchronous environment.
* [TypeORM](https://github.com/typeorm/typeorm) ORM for TypeScript and JavaScript, Works in NodeJS, Browser, Ionic, Cordova and Electron platforms.
* [Drizzle ORM](https://github.com/drizzle-team/drizzle-orm) Headless TypeScript ORM with a head. Runs on Node, Bun and Deno.
* [Kysely](https://github.com/kysely-org/kysely) A type-safe typescript SQL query builder.
* [Knex](https://github.com/knex/knex) A query builder for PostgreSQL, MySQL, CockroachDB, SQL Server, SQLite3 and Oracle, designed to be flexible, portable, and fun to use.
* [MikroORM](https://github.com/mikro-orm/mikro-orm) TypeScript ORM for Node.js based on Data Mapper, Unit of Work and Identity Map patterns.

## WebSockets

* [Socket.io](https://github.com/socketio/socket.io) The most widely used WebSocket library for real-time applications. Supports auto-reconnection, rooms, and fallbacks (e.g., polling).
* [ws](https://github.com/websockets/ws) Simple to use, blazing fast and thoroughly tested WebSocket client and server for Node.js.

## Misc

* [echo](https://github.com/toddmotto/echo) - Lazy-loading images with data-* attributes.
* [picturefill](https://github.com/scottjehl/picturefill) - A responsive image polyfill for &lt;picture&gt;, srcset, sizes.
* [platform.js](https://github.com/bestiejs/platform.js) - A platform detection library that works on nearly all JavaScript platforms.
* [json3](https://github.com/bestiejs/json3) - A modern JSON implementation compatible with nearly all JavaScript platforms.
* [Logical Or Not](https://gabinaureche.com/logicalornot/) - A game about JavaScript specificities.
* [BitSet.js](https://github.com/infusion/BitSet.js) - A JavaScript Bit-Vector implementation.
* [spoiler-alert](https://github.com/joshbuddy/spoiler-alert) - SPOILER ALERT! A happy little jquery plugin to hide spoilers on your site.
* [jquery.vibrate.js](https://github.com/illyism/jquery.vibrate.js) - Vibration API Wrappers
* [list.js](https://github.com/javve/list.js) - Adds search, sort, filters and flexibility to tables, lists and various HTML elements. Built to be invisible and work on existing HTML.
https://listjs.com
* [mixitup](https://github.com/patrickkunka/mixitup) - MixItUp - A Filter & Sort Plugin.
* [grid](https://github.com/hootsuite/grid) - Drag and drop library for two-dimensional, resizable and responsive lists.
* [jquery-match-height](https://github.com/liabru/jquery-match-height) - a responsive equal heights plugin for jQuery.
* [SurveyJS](https://github.com/surveyjs/survey-library) - SurveyJS is a JavaScript Survey and Form Library. https://surveyjs.io/
* [Array Explorer](https://github.com/sdras/array-explorer) and [Object Explorer](https://objectexplorer.netlify.app/) - Resources to help figure out what native JavaScript method would be best to use at any given time.
* [Clipboard.js](https://clipboardjs.com/) - "Copy to clipboard" without Flash or use of Frameworks.
* [ky](https://github.com/sindresorhus/ky) - Tiny and elegant HTTP client based on the browser Fetch API.
* [Fcal](https://github.com/5anthosh/fcal) -  Math expression evaluator.
* [emoji-button](https://github.com/joeattardi/emoji-button) - Vanilla JavaScript emoji picker component.
* [iooxa](https://github.com/iooxa/article) - Components for interactive scientific writing, reactive documents and explorable explanations.
* [Idyll](https://github.com/idyll-lang/idyll) - Create explorable explanations and interactive storytelling essays. Can be [embedded in HTML](https://github.com/idyll-lang/idyll-embed).
* [javascript-algorithms](https://github.com/trekhleb/javascript-algorithms) - Algorithms and data structures implemented in JavaScript with explanations and links to further readings.
* [FingerprintJS](https://github.com/fingerprintjs/fingerprintjs) - Makes a visitor identifier from a browser fingerprint that stays the same in incognito mode and when browser data is purged.
* [Peg.js](https://github.com/pegjs/pegjs) - A simple parser generator for JavaScript that produces fast parsers with excellent error reporting. Usable from your browser, from the command line, or via JavaScript API.
* [lune](https://github.com/ryanseys/lune) - Library to calculate the phases of the moon accurately.
* [jsemu](https://github.com/fcambus/jsemu) - A list of emulators written in the JavaScript programming language.

# Worth Reading
 
* [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS) - Possibly the best book written on modern JavaScript, completely readable online for free, or can be bought to support the author.
* [braziljs/js-the-right-way](https://github.com/braziljs/js-the-right-way/) - An easy-to-read, quick reference for JS best practices, accepted coding standards, and links around the Web.
* [JSbooks](https://github.com/revolunet/JSbooks) - Directory of free JavaScript ebooks.
* [Superhero.js](http://superherojs.com) - A collection of resources about creating, testing and maintaining a large JavaScript code base.
* [SJSJ](https://github.com/KittyGiraudel/SJSJ) - Simplified JavaScript Jargon is a community-driven attempt at explaining the loads of buzzwords making the current JavaScript ecosystem in a few simple words.
* [How to Write an Open Source JavaScript Library](https://github.com/sarbbottam/write-an-open-source-js-lib) - A comprehensive guide through a set of steps to publish a JavaScript open source library.
* [JavaScript Tutorials](https://hackr.io/tutorials/learn-javascript) - Learn Javascript online from a diverse range of user ranked online tutorials.
* [Functional-Light JavaScript](https://github.com/getify/Functional-Light-JS) - Pragmatic, balanced FP in JavaScript.
* [Clean Code JavaScript](https://github.com/ryanmcdermott/clean-code-javascript) - Clean Code concepts adapted for JavaScript.
* [Roadmap.sh JavaScript Roadmap](https://roadmap.sh/javascript) - Learn JavaScript from a community sourced learning roadmap.


# Other Awesome Lists
 
* [sotayamashita/awesome-css](https://github.com/sotayamashita/awesome-css)
* [emijrp/awesome-awesome](https://github.com/emijrp/awesome-awesome)
* [bayandin/awesome-awesomeness](https://github.com/bayandin/awesome-awesomeness)
* [sindresorhus/awesome](https://github.com/sindresorhus/awesome)
* [jnv/list](https://github.com/jnv/lists)
* [gianarb/angularjs](https://github.com/gianarb/awesome-angularjs)
* [peterkokot/awesome-dojo](https://github.com/peterkokot/awesome-dojo)
* [addyosmani/es6-tools](https://github.com/addyosmani/es6-tools)
* [ericdouglas/ES6-Learning](https://github.com/ericdouglas/ES6-Learning)
* [obetomuniz/awesome-webcomponents](https://github.com/obetomuniz/awesome-webcomponents)
* [willianjusten/awesome-svg](https://github.com/willianjusten/awesome-svg)
* [davidsonfellipe/awesome-wpo](https://github.com/davidsonfellipe/awesome-wpo)
* [instanceofpro/awesome-backbone](https://github.com/sadcitizen/awesome-backbone)
* [enaqx/awesome-react](https://github.com/enaqx/awesome-react)
* [bolshchikov/js-must-watch](https://github.com/bolshchikov/js-must-watch)
* [peterkokot/awesome-jquery](https://github.com/peterkokot/awesome-jquery)
* [davidyezsetz/you-might-not-need-jquery-plugins](https://github.com/davidyezsetz/you-might-not-need-jquery-plugins)
* [MaximAbramchuck/awesome-interviews](https://github.com/MaximAbramchuck/awesome-interview-questions)
* [denolib/awesome-deno](https://github.com/denolib/awesome-deno)
* [apvarun/awesome-bun](https://github.com/apvarun/awesome-bun)

