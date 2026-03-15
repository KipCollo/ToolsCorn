# Events and EventListeners

Just like HTML DOM events, React can perform actions based on user events.React has the same events as HTML: click, change, mouseover etc.

`Adding Events`:- React events are written in camelCase syntax: onClick instead of onclick.
React event handlers are written inside curly braces: onClick={shoot}  instead of onClick="shoot()".


```jsx
class ClassName extends Component{
    state={};

    handleEvent(){
      //event body
    }

    render(){
        return (
         <div>
            <button onClick={this.handleEvent}></button>
         </div>
        )
    }
}

export default ClassName;
```

```jsx
function Football() {
  const shoot = () => {
    alert("Great Shot!");
  }

  return (
    <button onClick={shoot}>Take the shot!</button>
  );
}
```

`Passing Arguments`:- To pass an argument to an event handler, use an arrow function.

```jsx
function Football() {
  const shoot = (a) => {
    alert(a);
  }

  return (
    <button onClick={() => shoot("Goal!")}>Take the shot!</button>
  );
}
```

## React Event Object

Event handlers have access to the React event that triggered the function.

```jsx
function Football() {
  const shoot = (a, b) => {
    alert(b.type);
    /*
    'b' represents the React event that triggered the function,
    in this case the 'click' event
    */
  }

  return (
    <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
  );
}
```
