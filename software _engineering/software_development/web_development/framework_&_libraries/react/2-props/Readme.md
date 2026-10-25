# Props

Props are used to pass data from parent components to child components (down the component tree).They make a component reusable.Props are arguments passed into React components.Props are passed to components via HTML attributes.
props stands for properties.

Props are read-only,they are immutable.If you need to mutate props,you need state.Mutating props would affect parent,creating side effects(not pure).Components have to be pure functions in terms of props and state.This allows React to optimize apps, avoid bugs, make apps predictable.
React Props are like function arguments in JavaScript and attributes in HTML.To send props into a component, use the same syntax as HTML attributes:

```jsx
function App(){
    return (
      <Car name="Toyota" color="red"/>
      <Car name="Mercedes" color="blue"/>
      )
}

export default App;
```

The component receives the argument as a props object:

```jsx
function Car(props) {
  return (
    <>
      <h1>{props.name}</h1>
      <p>{props.color}</p>
      <p>{props.ratings}</p>
    </>
  );
}

// props destructuring
/*
function Car({car}){
return (
    <>
      <h1>{car.name}</h1>
      <p>{car.color}</p>
      <p>{car.ratings}</p>
    </>
  );
  }
*/

export default Car;
```

If you have a variable to send, and not a string as in the example above, you just put the variable name inside curly brackets:

```jsx
function App(){
    return (
      <Car
         name="Toyota"
         color="red"
         ratings={4}
         isCheap ={true}
         comments={[{author:"", body:"",title=""},{author:"", body:"",title=""}]}
      />
      <Car
         name="Mercedes"
         color="blue"
         ratings={5}
         isCheap={false}
         comments={[{author:"", body:"",title=""},{author:"", body:"",title=""}]}
      />
      )
}

export default App;
```

The `key prop` is used to give a unique identity to each element in a list of components.It helps React efficiently update and re-render the components by identifying which items have changed, been added, or removed.

**Children props** -

The `children prop` is a special prop that allows you to pass components, elements, or text as children to other components. It enables the composition of components and the creation of more flexible and reusable component APIs.
An empty "hole" that can be filled by any JSX the component receives as children.The children prop allows us to pass JSX into an elemnt(besides regular props).Useful for generic components that don't know their content before being used(e.g modal)

```jsx
<div>
  <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
    <span>👈</span> Previous{/*children props */}
  </Button>

  <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
    Next <span>👉</span>s{/*children props */}
    <span>🤓</span>
  </Button>
</div>;

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
```
