# Rendering

## Rendering Lists

In React, you will render lists with some type of loop.The JavaScript `map() array method` is generally the preferred method.

```jsx
function Car(props) {
  return <li>I am a {props.brand}</li>;
}

function Garage() {
  const cars = ["Ford", "BMW", "Audi"];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => (
          <Car brand={car} />
        ))}
      </ul>
    </>
  );
}
```

`Keys`:- Keys allow React to keep track of elements. This way, if an item is updated or removed, only that item will be re-rendered instead of the entire list.Keys need to be unique to each sibling. But they can be duplicated globally.
Generally, the key should be a unique ID assigned to each item. As a last resort, you can use the array index as a key.

keys in React lists - Keys are used to give a unique identity to each element in a list of components. They help React efficiently update and re-render the components by identifying which items have changed, been added, or removed.

```jsx
function Car(props) {
  return (
    <li>
      <h2> {props.car.brand}</h2>
      <p>{props.car.color}</p>
    </li>
  );
}

function Garage() {
  const cars = [
    { id: 1, brand: "Ford", color: "red" },
    { id: 2, brand: "BMW", color: "blue" },
    { id: 3, brand: "Audi", color: "black" },
  ];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => (
          <Car brand={car} key={car.id} />
        ))}
      </ul>
    </>
  );
}
```

## Conditional Rendering

In React, you can create distinct components that encapsulate behavior you need. Then, you can render only some of them, depending on the state of your application.

Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript operators like [if](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) or the [conditional operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) to create elements representing the current state, and let React update the UI to match them.

`if Statement`:- We can use the if JavaScript operator to decide which component to render.

```jsx
function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <MadeGoal />;
  }
  return <MissedGoal />;
}
```

`Logical && Operator`:- Another way to conditionally render a React component is by using the && operator.

```jsx
function Garage(props) {
  const cars = props.cars;
  return (
    <>
      <h1>Garage</h1>
      {cars.length > 0 && <h2>You have {cars.length} cars in your garage.</h2>}
    </>
  );
}
```

If cars.length is equates to true, the expression after && will render.

`Ternary Operator`:- Another way to conditionally render elements is by using a ternary operator.

```jsx
function Goal(props) {
  const isGoal = props.isGoal;
  return <>{isGoal ? <MadeGoal /> : <MissedGoal />}</>;
}

<li className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}>
  <img src={pizza.photoName} alt={pizza.name} />
  <div>
    <h3>{pizza.name}</h3>
    <p>{pizza.ingredients}</p>
    <span>{pizza.soldOut ? pizza.price : "SOLD OUT"}</span>
  </div>
</li>;
```
