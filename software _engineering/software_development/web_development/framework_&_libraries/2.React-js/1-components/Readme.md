# Components

A React component is a modular, reusable piece of code responsible for rendering a part of a user interface. It encapsulates HTML, CSS, and JavaScript logic, representing specific sections or elements within an application's UI. Components can be composed, combined, and reused to build complex user interfaces. They can manage their own state, receive data via props, and are the fundamental building blocks used in React applications to structure and render UI elements.

Components are the building blocks of React applications. They let us split the UI into independent, reusable pieces, and think about each piece in isolation.Every React app has on root component called _App_.This component rep the entire application and contains other child components and pass data between them.
Each component has its own data, logic and appearance(how it looks and works).

Components can either be created using the `class based approach` or a `functional approach`.

1. `Functional components` are stateless and are typically written as plain JavaScript functions. They are simpler and easier to test.
2. `Class components` - have a state, can use lifecycle methods, and are written as ES6 classes.

A controlled component is a component where the form data is handled by React components. The React component that renders the form also controls what happens in that form on subsequent user input.
Higher-order components are functions that take a component and return a new component with additional functionality. They are used for code reuse, abstraction, and sharing common logic between components.

In older React code bases, you may find Class components primarily used. It is now suggested to use Function components along with Hooks, which were added in React 16.8. There is an optional section on Class components for your reference.

Use React snippets to help in development of components

_Benefits of the Component Approach_ -

- Prevents unwieldy HTML files, aids in code navigation, and minimizes complexity.
- Enables code reusability, reducing errors by allowing changes in one location.
- Organizes related code cohesively, unlike scattered markup and JavaScript files.

**Class Components** - These components are simple classes (made up of multiple functions that add functionality to the application). All class based components are child classes for the Component class of ReactJS.These components are JavaScript Classes that extends React Component and have their own state and lifecycle methods.

A class component must include the extends React.Component statement. This statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.
The component also requires a render() method, this method returns HTML.

```jsx
class ClassName extends Component {
  state = {};
  render() {
    return <h1></h1>;
  }
}

export default ClassName;
```

TODO More on Lists and unique keys in lists

- Rendering Lits in React:-

```jsx
state={
    tags:["tag1","tag2","tag3"]
};
render(){
    return (<
    <ul>
    {this.state.tags.map(tag => <li key={tag.id}>{tag}</li>)}
     </ul>)
 }
```

- Conditional Rendering:-

```jsx
state={
    tags:["tag1","tag2","tag3"]
};

renderItems(){
    if(this.state.tags.length==0) return <p>No Items</p>
    else return <ul>{this.state.tags.map(tag => <li key={tag.id}>{tag}</li>)}</ul>
}
render(){
    return (<
    <div>{this.renderItems()}</div>)
 }
```

**Functional Components** - Functional components are simply JavaScript functions that returns JSX. We can create a functional component to React by writing a JavaScript function. These functions may or may not receive data as parameters. In the functional Components, the return value is the JSX code to render to the DOM tree. Functional components can also have state which is managed using React hooks.

```jsx
function FunctionName() {
  return <h1></h1>;
}

const FunctionName = () => <h1></h1>;
export default FunctionName;
```

_Components in Components_ - We can refer to components inside other components:

```jsx
function Car() {
  return <h2>I am a Car!</h2>;
}

function Garage() {
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Car />
    </>
  );
}
```

Props vs State

Props (short for “properties”) and state are both plain JavaScript objects. While both hold information that influences the output of component render, they are different in one important way: props get passed to the component (similar to function parameters) whereas state is managed within the component (similar to variables declared within a function).

Composition vs Inheritance

React has a powerful composition model, and it is recommended to use composition instead of inheritance to reuse code between components.

**Rendering a Component** - To use component in your application, use similar syntax as normal HTML: <Car />

```jsx
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Car />);
```

**Separation of Concerns** - - Components follow the principle of handling distinct UI functionalities, fostering clarity and ease of development.
React is all about re-using code, and it is recommended to split your components into separate files.To do that, create a new file with a .js file extension and put the code inside it.
Functional components are stateless and are typically written as plain JavaScript functions. They are simpler and easier to test. Class components, on the other hand,have a state, can use lifecycle methods, and are written as ES6 classes.

```js
import React from "react"; //compiles jsx to plain js
import ReactDOM from "react-dom/client"; //renders element in the DOM

const element = <h1>Hello World</h1>;
ReactDOM.render(element, document.getElementById("root")); //element is referenced in a div inside index.html
```

The constructor is used to initialize the state and bind event handlers in a class component. It is called before the component is mounted.

---

## JSX

JSX (JavaScript XML) is an extension to JavaScript that allows you to write HTML-like syntax within JavaScript file. It is used to describe the structure and appearance of React components.JSX stands for JavaScript XML. It allows writing HTML in JavaScript and converts the HTML tags into React elements.
JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement() and/or appendChild() methods.JSX converts HTML tags into react elements.

JSX is an extension of the JavaScript language based on ES6, and is translated into regular JavaScript at runtime by BABEL.

```jsx
const myElement = <h1>I Love JSX!</h1>;
const myElement = React.createElement("h1", {}, "I do not use JSX!");
```

NOTE:- You are not required to use JSX, but JSX makes it easier to write React applications.

**Expressions in JSX** - With JSX you can write expressions inside curly braces { }.The expression can be a React variable, or property, or any other valid JavaScript expression. JSX will execute the expression and return the result.Statements are not allowed e.g if/else statements.

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

_Attribute class = className_: The class attribute is a much used attribute in HTML, but since JSX is rendered as JavaScript, and the class keyword is a reserved word in JavaScript, you are not allowed to use it in JSX.Use attribute className instead.
JSX solved this by using className instead. When JSX is rendered, it translates className attributes into class attributes.

```jsx
const myElement = <h1 className="myclass">Hello World</h1>;
```

_Logic inside React components_ -

`Conditions - if statements`: React supports if statements, but not inside JSX.To be able to use conditional statements in JSX, you should put the if statements outside of the JSX, or you could use a ternary expression instead:

```jsx
const x = 5;
let text = "Goodbye";
if (x < 10) {
  text = "Hello";
}

const myElement = <h1>{text}</h1>;
const myElement = <h1>{x < 10 ? "Hello" : "Goodbye"}</h1>;
```

**One Top Level Element** - The HTML code must be wrapped in ONE top level element.So if you like to write two paragraphs, you must put them inside a parent element, like a div element.

```jsx
const myElement = (
  <div>
    <p>I am a paragraph.</p>
    <p>I am a paragraph too.</p>
  </div>
);
```

JSX will throw an error if the HTML is not correct, or if the HTML misses a parent element.

_React.Fragment[(<></>)]_ is a built-in component in React that allows you to group multiple elements without adding an extra node to the DOM. It is useful when you need to return multiple elements from a component's render method without introducing unnecessary wrapping elements,cycle methods, and in constructors of their child component tree. They help to prevent the entire application from crashing and allow for graceful error handling.
It allows you to group multiple elements without adding an extra node to the DOM. They are useful when you need to return multiple elements from a component's render method without introducing unnecessary wrapping elements.This will prevent unnecessarily adding extra nodes to the DOM.A fragment looks like an empty HTML tag: <></>.

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

---

## Styling

While "CSS in JS" is the most predominant way of styling modern frontend applications, there are several different ways to style your React applications whether it is vanilla CSS, [CSS Modules](https://github.com/css-modules/css-modules), or [CSS in JS](https://css-tricks.com/a-thorough-analysis-of-css-in-js/) etc and each has several frameworks available.

There are multiple ways to style components in React, including `inline styles`, using `CSS classes with className`,using`CSS stylesheets`,using `CSS Modules`, `CSS-in-JS libraries`like styled-components, and using`preprocessor-based solutions` like Sass or Less.

**Inline Styling**:- To style an element with the inline style attribute, the value must be a JavaScript object:
camelCased Property Names - Since the inline CSS is written in a JavaScript object, properties with hyphen separators, like background-color, must be written with camel case syntax

```jsx
const Header = () => {
  return (
    <>
      <h1 style={{ color: "red" }}>Hello Style!</h1>
      <p style={{ fontSize: "32px" }}>Add a little style!</p>
    </>
  );
};
```

Note: In JSX, JavaScript expressions are written inside curly braces, and since JavaScript objects also use curly braces, the styling in the example above is written inside two sets of curly braces {{}}.

JavaScript Object - You can also create an object with styling information, and refer to it in the style attribute:

```jsx
const Header = () => {
  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif",
  };
  return (
    <>
      <h1 style={myStyle}>Hello Style!</h1>
      <p>Add a little style!</p>
    </>
  );
};
```

**CSS Stylesheet**:- You can write your CSS styling in a separate file, just save the file with the .css file extension, and import it in your application.
Note: You can call the file whatever you like, just remember the correct file extension.

```jsx
import "./App.css";

const Header = () => {
  return (
    <>
      <h1>Hello Style!</h1>
      <p>Add a little style!.</p>
    </>
  );
};
```

**CSS Modules**:- Another way of adding styles to your application is to use CSS Modules.CSS Modules are convenient for components that are placed in separate files. CSS files in which all class names and animation names are scoped locally by default.
The CSS inside a module is available only for the component that imported it, and you do not have to worry about name conflicts.
Create the CSS module with the .module.css extension, example: my-style.module.css.
Import the stylesheet in your component:

```js
import styles from "./my-style.module.css";

const Car = () => {
  return <h1 className={styles.bigblue}>Hello Car!</h1>;
};

export default Car;
```

Styled components

Styled-components is a CSS-in-JS library that enables you to write regular CSS and attach it to JavaScript components. With styled-components, you can use the CSS you’re already familiar with instead of having to learn a new styling structure.

Emotion

Emotion is a library designed for writing css styles with JavaScript. It provides powerful and predictable style composition in addition to a great developer experience with features such as source maps, labels, and testing utilities. Both string and object styles are supported.

Mantine

Mantine is a React components library with more than 100 customizable components and 40 hooks to cover you in any situation.

Tailwind CSS

CSS Framework that provides atomic CSS classes to help you style components e.g. `flex`, `pt-4`, `text-center` and `rotate-90` that can be composed to build any design, directly in your markup.

Material UI

Material-UI is an open-source framework that features React components that implement Google’s Material Design.

Chakra UI

Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.
