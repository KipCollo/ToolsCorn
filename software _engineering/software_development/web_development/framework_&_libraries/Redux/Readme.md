# Redux

`Redux` is a predictable state container for JavaScript applications. It provides a centralized store to manage application state and uses actions and reducers to
modify and update that state in a predictable manner.

Actions in Redux are plain JavaScript objects that describe an event or userinteraction. They are dispatched to the store and trigger the corresponding reducer to
update the state based on the action's type and payload.

Reducers in Redux are pure functions that specify how the application's state changes in response to actions. They take the current state and an action as input
and return a new state based on that action.

The connect function is used to connect a React component to the Redux store. It provides the component with access to the store's state and actions, allowing it to
subscribe to changes and dispatch actions.

Middleware in Redux provides a way to intercept and modify actions before they reach the reducers. It can be used for handling asynchronous actions, logging, and
other tasks that need to be done outside the normal action flow.

Redux Thunk is a middleware for Redux that allows you to write action creators that return functions instead of plain action objects. This enables handling of
asynchronous actions, such as API calls, inside action creators.
