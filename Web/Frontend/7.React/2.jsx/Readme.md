# JSX

JSX (JavaScript XML) is an extension to JavaScript that allows you to write HTML-like syntax within JavaScript code. It is used to describe the structure and appearance of React components.JSX stands for JavaScript XML. It allows writing HTML in JavaScript and converts the HTML tags into React elements.

JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods.
JSX converts HTML tags into react elements.

NOTE:- You are not required to use JSX, but JSX makes it easier to write React applications.

```jsx
const myElement = <h1>I Love JSX!</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```

```js
const myElement = React.createElement('h1', {}, 'I do not use JSX!');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```

JSX is an extension of the JavaScript language based on ES6, and is translated into regular JavaScript at runtime.

## Expressions in JSX

With JSX you can write expressions inside curly braces { }.
The expression can be a React variable, or property, or any other valid JavaScript expression. JSX will execute the expression and return the result:

```jsx
const myElement = <h1>React is {5 + 5} times better with JSX</h1>;
```

To write HTML on multiple lines, put the HTML inside parentheses:

```jsx
const myElement = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
);
```

## One Top Level Element

The HTML code must be wrapped in ONE top level element.
So if you like to write two paragraphs, you must put them inside a parent element, like a div element.

```jsx
const myElement = (
  <div>
    <p>I am a paragraph.</p>
    <p>I am a paragraph too.</p>
  </div>
);
```

JSX will throw an error if the HTML is not correct, or if the HTML misses a parent element.


`Fragment`:-  Alternatively, you can use a "fragment" to wrap multiple lines. This will prevent unnecessarily adding extra nodes to the DOM.A fragment looks like an empty HTML tag: <></>.
React Fragments allow you to group multiple elements without adding an extra node to the DOM. They are useful when you need to return multiple elements from a component's render method without introducing unnecessary wrapping elements.

```jsx
const myElement = (
  <>
    <p>I am a paragraph.</p>
    <p>I am a paragraph too.</p>
  </>
);
```

JSX follows XML rules, and therefore HTML elements must be properly closed.Close empty elements with />

```jsx
const myElement = <input type="text" />;
```

JSX will throw an error if the HTML is not properly closed.

`Attribute class = className`: The class attribute is a much used attribute in HTML, but since JSX is rendered as JavaScript, and the class keyword is a reserved word in JavaScript, you are not allowed to use it in JSX.Use attribute className instead.
JSX solved this by using className instead. When JSX is rendered, it translates className attributes into class attributes.

```jsx
const myElement = <h1 className="myclass">Hello World</h1>;
```

`Conditions - if statements`:React supports if statements, but not inside JSX.
To be able to use conditional statements in JSX, you should put the if statements outside of the JSX, or you could use a ternary expression instead:

```jsx
const x = 5;
let text = "Goodbye";
if (x < 10) {
  text = "Hello";
}

const myElement = <h1>{text}</h1>;
```

```jsx
const x = 5;

const myElement = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>;
```
