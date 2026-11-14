# React Events and EventListeners

_An event_ is an action or occurrence recognized by a software. To make an event more clear let's use the daily activities we do when we use a computer such as clicking on a button, hover on an image, pressing a keyboard, scrolling the mouse wheel and etc.

Just like HTML DOM events, React can perform actions based on user events.Handling events with React elements is very similar to handling events on DOM elements. There are some differences:

- React events are named using camelCase, rather than lowercase.
- With JSX you pass a function as the event handler, rather than a string.
- Default behavior can not be prevented by returning false(only by using preventDefault())
- Attach Capture if you need to handle during capture phase(e.g onClickCapture)

React registers all event handlers on the root DOM container.This is where all events are handled.Behind the scenes,React performs event delegation for all events in our applications.

`Adding Events`:- React events are written in camelCase syntax: onClick instead of onclick.React event handlers are written inside curly braces: onClick={shoot} instead of onClick="shoot()".

```jsx
class ClassName extends Component {
  state = {};

  handleEvent() {
    //event body
  }

  render() {
    return <button onClick={this.handleEvent}></button>;
  }
}
```

```jsx
function Football() {
  const handleShoot = () => {
    alert("Great Shot!");
  };

  return <button onClick={handleShoot}>Take the shot!</button>;
}
```

`Passing Arguments`:- To pass an argument to an event handler, use an arrow function.

```jsx
function Football() {
  const shoot = (a) => {
    alert(a);
  };

  return <button onClick={() => shoot("Goal!")}>Take the shot!</button>;
}
```

## React Event Object

Event handlers have access to the React event that triggered the function.
`Synthetic events` are wrapper around the DOM's native event object.Has same interface as native event objects, like stopPropagation() and preventDefault().Fixes browser inconsistencies, so that events work in exac same way in all browsers.Most synthetic events bubble(including focus, blur and change) except scroll.

```jsx
function Football() {
  const shoot = (a, b) => {
    alert(b.type);
    /*
    'b' represents the React event that triggered the function,in this case the 'click' event
    */
  };

  return (
    <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
  );
}
```
