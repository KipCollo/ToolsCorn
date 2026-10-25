# State

State is an object that holds data over time and determines how a component renders and behaves. It is private and fully controlled by the component itself.Component's memory.Updating component state triggers React to re-render the component.State is preserved throughout re-renders.
State is managed within a component and can be changed, while props are passed to a component from its parent and cannot be modified directly by the component receiving them.

State allows developers to:-

- Update the component's view by re-rendering it.
- Persist local variables between renders.

`Difference between State and Props`:

| Props                                                                           | State                                                                |
| ------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Props are read-only.                                                            | State changes can be asynchronous.                                   |
| Props allow to pass data from one component to other components as an argument. | State holds information about the components.                        |
| Props can be accessed by the child component.                                   | State cannot be accessed by child components.                        |
| Props are used to communicate between components.                               | States can be used for rendering dynamic changes with the component. |
| Stateless component can have Props.                                             | Stateless components cannot have State.                              |
| Props are external and controlled by whatever renders the component.            | The State is internal and controlled by the React Component itself.  |

## State Management

State manageement is deciding when to create pieces of state, what types of state are necessary, where to place each piece of state, and how data flows through the app.
State Management is the implementation of a design pattern to synchronize the state of the application throghout all components of the application.
State management solutions includes:- React API:- useState and useReducer,context API,Redux,MobX,VueX,Recoil,Zustand,Hookstate,Akita.

_Types of state_ -

- `Local state` - State needed only by one or few components.State that is defined in a component and only that component and child components have access to it(by passing via props).
- `Global state` - State that many components might need. Shared state that is accessible to every component in the entire application.Defined by Context API, Redux.

**_Sharing state with sibling component_** - Data can only flow down to children(via props), not sideways to siblings.The solution is lifting state up.The sate is lifted up to the closest common parent.By lifting state up, we share one piece of state with multiple components in different positions in the component tree.
Child-to-parent communication(inverse data flow)- child updating parent state(data flowing up)

```js
function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  return (
    <div>
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} />
    </div>
  );
}

function PackingList({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(0);

  function handleSubmit(e) {

    const newItem = { description, quantity, packed: false, id: Date.now() };
    onAddItems(newItem);
  }
  return (
      <select
        onChange={(e) => setQuantity(Number(e.target.value))}
        value={quantity}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

  );
}
```

**_Derived State_** - It is state computed from another existing piece of state or from props.

```js
const [cart, setCart] = useState([]);
const numItems = cart.length;
const totalPrice = cart.reduce((acc, cur) => acc + cur.price, 0);
```

## Hooks

Hooks were introduced in React 16.8 and they let us use React's features-like managing your component's state and or performing an after effect when certain changes occur in state(s) without writing a class.Hooks are functions that allow you to use state and other React features without writing a class. They were introduced in React 16.8 to provide a simpler and more readable way to write React components.

Hooks have some rules: They must be used only at the top level of a function component, hooks mustbe called in the same order every time the component renders, and they cannot be called conditionally.

1. The `useState` hook is used to add state to functional components. It returns a stateful value and a function to update that value. By calling the update function, the component can trigger a re-render with the updated state.
2. The `useEffect` hook is used to perform side effects in functional components. It allows you to run code after the component has rendered and handle actions such as data fetching, subscriptions, or manually updating the DOM.
3. `useCallback` is used to memoize functions, preventing unnecessary re-creation of functions on re-renders. useMemo is used to memoize values, caching the result of expensive calculations and avoiding recomputation.
4. The `useCallback()` hook is used to memoize functions in functional components. It returns a memoized version of the callback function that only changes if one of the dependencies has changed. It is useful for optimizing performance in scenarios where functions are passed as props.
5. The `useMemo()` hook is used to memoize values in functional components. It allows you to cache the result of an expensive computation and only recalculate it when the dependencies have changed. It is useful for optimizing performance in scenarios where calculations are computationally expensive.
6. The `useRef()` hook is used to create a mutable reference that persists across component renders. It returns a mutable object with a current property that can be used to store values or reference DOM nodes or other React elements.
7. The `useReducer()` hook is used to manage state in functional components using the reducer pattern. It is an alternative to useState() and is suitable for managing more complex state or state transitions. It returns the current state and a dispatch function to update the state
8. The `useContext()` hook is used to consume values from a React context. It allows functional components to access context values without nesting multiple layers of components or using render props.

**useState** - `useState` hook is used to add and manage the state of a component in functional components. Calling useState returns an array with two elements: the current state value and a function to update the state.By calling the update function, the component can trigger a re-render with the updated state.
useState is a Hook,it's called only at the top level of your component or your own hooks.It can't be called inside loops or conditions,if you need to,extract a new component and move state into it.

In Strict Mode,React will call your initializer function twice in order to help you find accidental impurities.

```js
const [state, setState] = useState(initialState);
```

- Usage:

1. Adding state to a component
2. Updating state based on previous state.
3. Updating objects and arrays in state
4. Avoiding recreating initial state
5. Resetting state with key
6. Storing info from previous renders

Example:

```js
import { useState } from "react";

function MyComponent() {
  const [age, setAge] = useState(21);
  const [name, setName] = useState({ name: "Collo" });
  const [todos, setTodos] = usestate(() => createTodos());
}
```

- `Parameters`: - initialState:- The value you want the state to be initially.It can be value of any type,but there is special behaviour for functions.This argument is ignored after initial render.If you pass a function as initialState,it will be treated as an initializer function.It should be pure,shoud take no arguments and should return a value of any type.React will call your initializer function when initializing the component,and store its return value as the initial state.

- `Returns`: useState returns an array with two values:-
  1.  The current state,which during first render it will match initialState you passed
  2.  set function that lets you update state to a diff value and trigger a re-render.

- _Set Functions_:-The set function returned by useState lets you update the state to a diff value and trigger a re-render.You can pass next state directly,or a function that calculates it from previous state.It does not have a return value.

```js
const [name, setName] = useState("Coolins");

function handleClick() {
  setName(() => "Kosgei");
}
```

**seEffect Hook** - `useEffect` is a special hook that lets you run side effects in React. It is similar to componentDidMount and componentDidUpdate, but it only runs when the component (or some of its props) changes and during the initial mount.

The useEffect hook is used to perform side effects in functional components. It allows you to run code after the component has rendered and handle actions such as data fetching, subscriptions, or manually updating the DOM.It lets you synchronize a component with external system.

```js
useEffect(setup,dependencies?)
```

```js
import { useEffect } from 'react'
import { createConnectio } from './chat.js'

function ChatRoom({ roomId }){
   const [serverurl, setserverUrl] = useState('https://localhost:1234');

   useeffect(() => {
      const connection = createConnection(serverUrl, roomId);
      connection.connect();
      return () + {
         connection.disconnect();
      }
   },[serverUrl, roomId]);
   // ...
}
```

- `parameters`:-
  1.  setup - The functinwith your effect's logic.Can optionally return a cleanup function.When your component is added to the DOM,react will run your setup function.After every re-render with changed dependencies,react will first run cleanup function(if you provided it) with old values,and then run uyour setup function with new values.After your component is removed from the DOM,React will run your cleanup function.
  2.  optional dependencies - The list of all reactive values referenced inside of the setup code.

## useContext

## Writing Custom Hooks

Building your own Hooks lets you extract component logic into reusable functions.
