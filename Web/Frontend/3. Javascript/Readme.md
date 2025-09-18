# JavaScript

`JavaScript` is a high-level, interpreted and Dynamic programming language that is commonly used to create interactive effects within web browsers. It is a core technology of the World Wide Web, alongside HTML and CSS.

Javascript can be run in the Browser(contains Javascript Engine) e.g FireFox(SpiderMonkey), Chrome(v8) and also can be run in Node.  
JavaScript allows you to add interactivity to your pages. Common examples that you may have seen on the websites are sliders, click interactions, popups and so on.

JavaScript is a scripting language of the web. As the web evolves from a static to a dynamic environment, technology focus is shifting from static markup and styling—frequently handled by content management systems or automated scripts—to dynamic interfaces and advanced interaction.

"Strict mode" ('use strict') is a way to enforce stricter parsing and error handling in your JavaScript code. It helps in catching common coding bugs and preventing the use of certain JavaScript features.

Disabling Javascript enables adds free web sites.

It was created by Brendan in 10 days.It was earlier called LiveScript.The microsoft team re-engineered and called it JScript.This led to confusion which ECMAscript(European Computer Manufacturers Association Cript) was introduced to standardize the language.  

It can be used to build: Web/Mobile Apps,Real-Time Networking apps,Command-line tools and games.
JavaScript is an object orient programming language designed to make web development easier and more attractive. In most cases, JavaScript is used to create
responsive, interactive elements for web pages, enhancing the user experience. Things like menus, animations, video players, interactive maps, and even simple in-browser games can be created quickly and easily with JavaScript.

* ECMAScript is a specification while JavaScript is a programming language that follows ECMAScript.

## JavaScript evolution

1. Creation and Early Days (1995-1996)

    * 1995: Brendan Eich developed JavaScript in just 10 days while working at Netscape Communications. It was originally named Mocha, then renamed to LiveScript, and finally to JavaScript.
    * 1996: Microsoft introduced JScript, a reverse-engineered version of JavaScript, in Internet Explorer 3.0.

2. Standardization (1997-1999)

    * 1997: JavaScript was submitted to ECMA International for standardization. The first edition of ECMAScript (ECMA-262) was published.
    * 1998-1999: ECMAScript 2 and ECMAScript 3 were released, with ECMAScript 3 introducing many of the language's core features still in use today.

3. The "Dark Ages" (2000-2004)

    Development of JavaScript slowed down. The lack of new features and browser inconsistencies made JavaScript challenging to use for complex applications.

4. AJAX and Web 2.0 (2005-2008)

    * 2005: AJAX (Asynchronous JavaScript and XML) was popularized by applications like Google Maps and Gmail, which enabled dynamic content updates without full page reloads.
    * 2006: jQuery, a fast, small, and feature-rich JavaScript library, was released, simplifying DOM manipulation and event handling.

5. Modern JavaScript and ECMAScript 5 (2009-2014)

    * 2009: ECMAScript 5 (ES5) was released, adding many useful features like strict mode, JSON support, Array methods (forEach, map, filter, etc.), and more.
    * 2009: Node.js, a runtime that allows JavaScript to run on the server side, was introduced, greatly expanding the language's use cases.

6. The Rise of ECMAScript 6 (ES6/ES2015) and Beyond (2015-Present)

    2015: ECMAScript 6 (also known as ES2015 or ES6) was released, marking a major update with many new features such as:
    * Block-scoped variables (let and const)
    * Arrow functions
    * Template literals
    * Destructuring assignments
    * Classes
    * Modules
    * Promises
    * The for...of loop

    2016-Present: ECMAScript versions started following an annual release cycle, bringing incremental improvements and new features:
    * ES2016 (ES7): Included features like the exponentiation operator (**) and Array.prototype.includes.
    * ES2017 (ES8): Introduced async/await for asynchronous programming.
    * ES2018 (ES9): Brought rest/spread properties for objects, asynchronous iteration, and other minor improvements.
    * ES2019 (ES10): Added features like Array.prototype.flat, Array.prototype.flatMap, and Object.fromEntries.
    * ES2020: Included BigInt, dynamic import(), nullish coalescing operator (??), and optional chaining (?.).
    * ES2021: Introduced features like logical assignment operators (&&=, ||=, ??=), String.prototype.replaceAll, and Promise.any.

7. Modern Ecosystem and Tooling

    * The JavaScript ecosystem has grown significantly with tools like Babel (for transpiling modern JavaScript to ES5), Webpack (a module bundler), and various frameworks/libraries like React, Angular, and Vue.js.
    * TypeScript: A superset of JavaScript that adds static typing, has gained popularity for building large-scale applications.

8. Current Trends and Future Directions

    * Serverless architectures: Platforms like AWS Lambda use JavaScript for serverless computing.
    * WebAssembly (Wasm): Allows languages other than JavaScript to run on the web with near-native performance.
    * Continued evolution: The language continues to evolve with proposals and features being regularly added, driven by community needs and technological advancements.

JavaScript has transformed from a simple scripting language for adding interactivity to web pages into a powerful, versatile language used for both client-side and server-side development, shaping the modern web development landscape.

The web server for Node is **http-server**

```bash
sudo npm i -g http-server
```

## Javascript Ecosystem

`Javascript`:- The core language; sometimes referred to as vanilla Javascript or Vanilla JS.
`ECMAScript`:- The browser specification of the Javascript language.
`ES6, ES2015, ES2017,ES2020`:- Refers to the use of features defined in ECMAScript,but not necessarilty supported by modern browsers.Using ECMAScript usually means also using `Babel.js` to make it work in current browser implementations.
`TypeScript`:- Variation,dialect or flavor of Javascript introducing features like strong typing.

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

## Comments

Used to add annotations, hints, or exclude some code from being executed JavaScript provides two ways of commenting code lines.

`Single line Comment //`:- Everything after the // until the end of the line is excluded from execution.

```js
function elementAt( event ) {
// Gets the element from Event coordinates
return document.elementFromPoint(event.clientX, event.clientY);
}
// TODO: write more cool stuff!
```

`Multi-line Comment /**/`:- Everything between the opening /* and the closing */ is excluded from execution, even if the opening and closing
are on diﬀerent lines.

```js
/*
Gets the element from Event coordinates.
Use like:
var clickedEl = someEl.addEventListener("click", elementAt, false);
*/
function elementAt( event ) {
return document.elementFromPoint(event.clientX, event.clientY);
}
/* TODO: write more useful comments! */
```

`JSDoc /** */`:-

```js
/** function update()
 * Outputs HTML
 * * @param {string} update
*/
```

HTML comments (optionally preceded by whitespace) will cause code (on the same line) to be ignored by the browser also, though this is considered bad practice.

## Linking Javascript

`Javascript in HTML`:-In HTML,JS code can be inserted in between <script> and </script> tag.It can be placed in head or body.
Old Javascript may use a type attribute <script type="text/javascript"></script>.It is not required as JS is default scripting language in HTML.

`External Javascript`:- Script can also be placed in external files.To use external script,put the name of script in src attribute of script tag.
External script can be referenced in three ways:-
1. With full URL(full web address)
2. With full path
3. Without any part

```html
<script src="https://www.hssoftworks.site/js/script.js"></script>
<script src="js/script.js"></script>
<script src="script.js"></script>
```

## Javascript Loading

Browser stops rendering when Javascript is encountered.The Javascript is executed before rendering continues.It is often referred to as `content locking`.

`async`:- Browser downloads Javascript in parallel while HTML renders.When JS is fully loaded,rendering stops while Javascript is executed.
`defer`:- Browser downloads Javascript in parallel while HTML renders,then defers execution of Javascript until HTML rendering is complete.

```html
<script src="script.js" async></script>
<script src="script.js" defer></script>
```

## Javascript Modules

Javascript modules allows us to break pieces out of Javascript file and place them in separate file and then import them back into the original file again.

```html
<script type="module" src="back.js"></script>
<script type="module" src="script.js"></script>
```

```js
//back.js
--
export default back;
```

```js
//script,js
import back from './back.js';
--
```

