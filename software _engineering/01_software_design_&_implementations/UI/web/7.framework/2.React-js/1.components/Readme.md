# Components

Components are the building blocks of React applications. They let us split the UI into independent, reusable pieces, and think about each piece in isolation.Every React app has on root component called *App*.This component rep the entire application and contains other child components.

Use React snippets to help in development of components
Components can either be created using the class based approach or a functional approach.

Functional components are stateless and are typically written as plain JavaScript functions. They are simpler and easier to test. Class components, on the other hand, have a state, can use lifecycle methods, and are written as ES6 classes.

A controlled component is a component where the form data is handled by React components. The React component that renders the form also controls what happens
in that form on subsequent user input.

Higher-order components are functions that take a component and return a new component with additional functionality. They are used for code reuse, abstraction,
and sharing common logic between components.

In older React code bases, you may find Class components primarily used. It is now suggested to use Function components along with Hooks, which were added in React 16.8. There is an optional section on Class components for your reference.

## Class Components

These components are simple classes (made up of multiple functions that add functionality to the application). All class based components are child classes for the Component class of ReactJS.These components are JavaScript Classes that extends React Component and have their own state and lifecycle methods.

A class component must include the extends React.Component statement. This statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.
The component also requires a render() method, this method returns HTML.

```jsx
class ClassName extends Component{
    state={};
    render(){
        return (<h1></h1>)
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

## Functional Components

Functional components are simply JavaScript functions that returns JSX. We can create a functional component to React by writing a JavaScript function. These functions may or may not receive data as parameters. In the functional Components, the return value is the JSX code to render to the DOM tree. Functional components can also have state which is managed using React hooks.

```jsx
function FunctionName(){
    return (<h1></h1>)
}

export default FunctionName;

const FunctionName = () => <h1></h1>
```

## Props vs State

Props (short for “properties”) and state are both plain JavaScript objects. While both hold information that influences the output of component render, they are different in one important way: props get passed to the component (similar to function parameters) whereas state is managed within the component (similar to variables declared within a function).

## Composition vs Inheritance

React has a powerful composition model, and it is recommended to use composition instead of inheritance to reuse code between components.


## Rendering a Component

To use component in your application, use similar syntax as normal HTML: <Car />

```jsx
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);
```

## Components in Components

We can refer to components inside other components:

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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);
```

## Components in Files

React is all about re-using code, and it is recommended to split your components into separate files.
To do that, create a new file with a .js file extension and put the code inside it.

Functional components are stateless and are typically written as plain JavaScript functions. They are simpler and easier to test. Class components, on the other hand,have a state, can use lifecycle methods, and are written as ES6 classes.

```js
import React from "react"//compiles jsx to plain js
import ReactDOM from "react-dom"//renders element in the DOM

const element = <h1>Hello World</h1>
ReactDOM.render(element,document.getElementById("root"));//element is referenced in a div inside index.html
```

The constructor is used to initialize the state and bind event handlers in a class component. It is called before the component is mounted.
