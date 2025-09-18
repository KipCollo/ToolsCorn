# Styling

While "CSS in JS" is the most predominant way of styling modern frontend applications, there are several different ways to style your React applications whether it is vanilla CSS, [CSS Modules](https://github.com/css-modules/css-modules), or [CSS in JS](https://css-tricks.com/a-thorough-analysis-of-css-in-js/) etc and each has several frameworks available.

## Styled components

Styled-components is a CSS-in-JS library that enables you to write regular CSS and attach it to JavaScript components. With styled-components, you can use the CSS you’re already familiar with instead of having to learn a new styling structure.

## Emotion

Emotion is a library designed for writing css styles with JavaScript. It provides powerful and predictable style composition in addition to a great developer experience with features such as source maps, labels, and testing utilities. Both string and object styles are supported.

## Mantine

Mantine is a React components library with more than 100 customizable components and 40 hooks to cover you in any situation.

## Tailwind CSS

CSS Framework that provides atomic CSS classes to help you style components e.g. `flex`, `pt-4`, `text-center` and `rotate-90` that can be composed to build any design, directly in your markup.

## Material UI

Material-UI is an open-source framework that features React components that implement Google’s Material Design.

## Chakra UI

Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.

## CSS Modules

CSS files in which all class names and animation names are scoped locally by default.

There are multiple ways to style components in React, including inline styles, using
CSS classes with className, CSS-in-JS libraries like styled-components, and using
preprocessor-based solutions like Sass or Less.


There are many ways to style React with CSS, this tutorial will take a closer look at three common ways:
   1. Inline styling
   2. CSS stylesheets
   3. CSS Modules


`Inline Styling`:- To style an element with the inline style attribute, the value must be a JavaScript object:

```jsx
const Header = () => {
  return (
    <>
      <h1 style={{color: "red"}}>Hello Style!</h1>
      <p>Add a little style!</p>
    </>
  );
}
```

Note: In JSX, JavaScript expressions are written inside curly braces, and since JavaScript objects also use curly braces, the styling in the example above is written inside two sets of curly braces {{}}.

camelCased Property Names - Since the inline CSS is written in a JavaScript object, properties with hyphen separators, like background-color, must be written with camel case syntax:

```jsx
const Header = () => {
  return (
    <>
      <h1 style={{backgroundColor: "lightblue"}}>Hello Style!</h1>
      <p>Add a little style!</p>
    </>
  );
}
```

JavaScript Object - You can also create an object with styling information, and refer to it in the style attribute:

```jsx
const Header = () => {
  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif"
  };
  return (
    <>
      <h1 style={myStyle}>Hello Style!</h1>
      <p>Add a little style!</p>
    </>
  );
}
```


`CSS Stylesheet`:- You can write your CSS styling in a separate file, just save the file with the .css file extension, and import it in your application.
Note: You can call the file whatever you like, just remember the correct file extension.
Import the stylesheet in your application:

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

const Header = () => {
  return (
    <>
      <h1>Hello Style!</h1>
      <p>Add a little style!.</p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />);
```


`CSS Modules`:- Another way of adding styles to your application is to use CSS Modules.CSS Modules are convenient for components that are placed in separate files.
The CSS inside a module is available only for the component that imported it, and you do not have to worry about name conflicts.
Create the CSS module with the .module.css extension, example: my-style.module.css.
Import the stylesheet in your component:

```js
import styles from './my-style.module.css'; 

const Car = () => {
  return <h1 className={styles.bigblue}>Hello Car!</h1>;
}

export default Car;
```
