# Events

Client-side JavaScript programs use an asynchronous event-driven programming model. In this style of programming, the web browser generates an event whenever something interesting happens to the document or browser or to some element or object associated with it. For example, the web browser generates an event when it finishes loading a document, when the user moves the mouse over a hyperlink, or when the user strikes a key on the keyboard.

If a JavaScript application cares about a particular type of event, it can register one or more functions to be invoked when events of that type occur. Note that this is not unique to web programming: all applications with graphical user interfaces are designed this way—they sit around waiting to be interacted with (i.e., they wait for events to occur), and then they respond.

In client-side JavaScript, events can occur on any element within an HTML document, and this fact makes the event model of web browsers significantly more complex than Node’s event model.
Events model:

1. EventType - This string specifies what kind of event occurred.
2. Event target - This is the object on which the event occurred or with which the event is associated.
3. Event handler/Event Listeners -This function handles or responds to an event.2 Applications register their event handler functions with the web browser, specifying an event type and an event target.
4. Event Objects - This object is associated with a particular event and contains details about that event. Event objects are passed as an argument to the event handler function. All event objects have a type property that specifies the event type and a target property that specifies the event target. Each event type defines a set of properties for its associated event object.
5. Event propagation - This is the process by which the browser decides which objects to trigger event handlers on. For events that are specific to a single object—such as the “load” event on the Window object or a “message” event on a Worker object—no propagation is required.

## EVENT TPYE

### Event Categories

1. Device-dependent input events-These events are directly tied to a specific input device, such as the mouse or keyboard.They include event types such as “mousedown,” “mousemove,” “mouseup,” 3“touchstart,” “touchmove,” “touchend,” “keydown,” and “keyup.”
2. Device-independent input events-These input events are not directly tied to a specific input device. The “click” event, for example, indicates that a link or button (or other document element)has been activated. This is often done via a mouse click, but it could also be done by keyboard or (on touch-sensitive devices) with a tap. The “input” event is a device-independent alternative to the “keydown” event and supports keyboard input as well as alternatives such as cut-and-paste and input methods used for ideographic scripts. The “pointerdown,” “pointermove,” and “pointerup” event types are device-independent alternatives to mouse and touch events. They work for mouse-type pointers, for touch screens, and for pen- or stylus-style input as well.
3. User interface events-UI events are higher-level events, often on HTML form elements that define a user interface for a web application. They include the “focus” event (when a text input field gains keyboard focus), the “change” event (when the user changes the value displayed by a form element), and the “submit” event (when the user clicks a Submit button in a form).
4. State-change events-Some events are not triggered directly by user activity, but by network or browser activity, and indicate some kind of life-cycle or state-related change. The “load” and “DOMContentLoaded” events—fired on the Window and Document objects, respectively, at the end of document loading—are probably the most commonly used of these events (see “Client-side JavaScript timeline” on page 420). Browsers fire “online” and “offline” events on the Window object when net‐
work connectivity changes. The browser’s history management mechanism (§15.10.4) fires the “popstate” event in response to the browser’s Back button.
5. API-specific events-A number of web APIs defined by HTML and related specifications include their own event types. The HTML <video> and <audio> elements define a long list of associated event types such as “waiting,” “playing,” “seeking,” “volumechange,”
and so on, and you can use them to customize media playback.

429speaking, web platform APIs that are asynchronous and were developed before
Promises were added to JavaScript are event-based and define API-specific
events. The IndexedDB API, for example (§15.12.3), fires “success” and “error”
events when database requests succeed or fail. And although the new fetch()
API (§15.11.1) for making HTTP requests is Promise-based, the XMLHttpRe‐
quest API that it replaces defines a number of API-specific event types.

## EVENT TARGET

Event targets are the objects on which events occur or with which events are associated. In the context of the DOM, common event targets include elements, the document, and the window. When an event occurs, it is dispatched to the event target, and event listeners attached to that target can respond to the event.

1. Element: Any HTML element can be an event target. For example, a button element can be the target of a click event.
2. Document: The entire HTML document can be an event target. For example, the document can be the target of a keydown event.
3. Window: The browser window can be an event target. For example, the window can be the target of a resize event.

```js
// Element event target
const button = document.getElementById('myButton');
button.addEventListener('click', () => {
    alert('Button was clicked!');
    });

// Document event target
document.addEventListener('keydown', (event) => {
    console.log(`Key pressed: ${event.key}`);
    });

// Window event target
window.addEventListener('resize', () => {
    console.log('Window was resized!');
    });
```

## EVENT HANDLER/TARGET

## Registering Event Handlers

There are two basic ways to register event handlers.

1. Setting a property on the object or document element that is the event target.
2. The second (newer and more general) technique is to pass the handler to the addEventListener() method of the object or element.

```js
// Register an event handler by setting a property
button.onclick = function() {
    alert('Button was clicked!');
}

// Register an event handler using addEventListener
button.addEventListener('click', () => {
    alert('Button was clicked!');
        });
```

## EVENT OBJECTS

## EVENT PROPAGATION

## Event Cancellation

Browsers respond to many user events, even if your code does not: when the user
clicks the mouse on a hyperlink, the browser follows the link. If an HTML text input
element has the keyboard focus and the user types a key, the browser will enter the
user’s input.If you register an event handler for events like these, you can prevent the
browser from performing its default action by invoking the preventDefault()
method of the event object. (Unless you registered the handler with the passive
option, which makes preventDefault() ineffective.)
Canceling the default action associated with an event is only one kind of event cancel‐
lation. We can also cancel the propagation of events by calling the stopPropaga
tion() method of the event object.

## Dispatching Custom Events

Client-side JavaScript’s event API is a relatively powerful one, and you can use it to define and dispatch your own events.

## event bubbling and event capturing

- Event bubbling: The event is first captured and handled by the innermost element and then propagated to outer elements.
- Event capturing: The event is first captured by the outermost element and propagated to the innermost element.
