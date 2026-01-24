# Angular reactivity & signals

Change detection is the process by which Angular identifies changes in the application state and reacts by updating the HTML presented to the user.Change detection is the basis by which user interaction or data updates are reflected in the HTML content displayed by an application.
Conventionally, the developer simply presents the data that is displayed in templates and Angular has to determine which data values have changed. With the introduction of signals, the developer describes the relationships between data values, which Angular uses to minimize the amount of work required to respond to changes.
`signals` can be used to make dealing with changes more efficient.

## Angular change detection

Angular automatically reflects changes in the application state in the HTML presented to the user. Modern browsers are excellent at dealing with the complexities of displaying HTML, but operations using the browser’s DOM API are still relatively slow and expensive to perform and Angular is careful to change as little content as possible when reflecting a state change.

Angular uses a library called Zone.js, which modifies the standard browser JavaScript API so that operations that are likely to indicate a change in application state – such as using an event handler - trigger its change detection process.
During the change detection process, Angular works its way through the components in the application and evaluates the data bindings expressions in their templates, looking for values that change. When a change is detected, Angular is able to update only the section of the HTML content that is affected by the change, making as efficient use of the browser’s DOM API as possible.

During development, Angular evaluates the expressions in templates multiple times to check that components produce stable values for use in templates.This check is not performed when an application is built for deployment and can be ignored.

The `advantage` of the way that Angular deals with changes is simplicity for the developer. The zone.js package seamlessly modifies the JavaScript API to trigger change detection and the entire process happens smoothly and without the developer having to tell Angular what the impact of any particular change will be.
For every operation that may represent a change, Angular will automatically go through all of the components that are displaying content and evaluate all of the bindings in their templates to make sure that the HTML displayed to the user is up to date.
The main `problem` with change detection is that Angular doesn’t have any insight into the relationship between data values or the impact of a change on those values.
Angular has to evaluate all of the template expressions regardless of what change – if any –has been made to the application’s data.
Once Angular has evaluated all of the template expressions, it can discard any values that have not changed and efficiently update the HTML displayed to the user. But this means that template expressions are evaluated even when the data they rely on hasn’t changed, and that can be a problem for expensive or time-consuming operations, which can be performed only for the result to be discarded.

## Angular Signals

Signals require the developer to describe the connections between data values, which undercuts the simplicity of the approach conventionally used by Angular but means that Angular knows which values are affected by a change in state and doesn’t have to evaluate every template expression.

Angular Signals is a system that granularly tracks how and where your state is used throughout an application, allowing the framework to optimize rendering updates.
Angular tracks where signals are read and when they're updated. The framework uses this information to do additional work, such as updating the DOM with new state. This ability to respond to changing signal values over time is known as reactivity.

A signal is a wrapper around a value that notifies interested consumers when that value changes. Signals can contain any value, from primitives to complex data structures.You read a signal's value by calling its getter function, which allows Angular to track where the signal is used.
Signals may be either writable or read-only.

The signals functions:-

1. signal - This function creates a writeable signal, which has a value that can be changed.The result is an object that implements the WritableSignal<T> interface, where T represents the type of the data value managed by the signal.
2. computed - This function creates a read-only signal, whose value is derived from one or more other signals. The result is an object that implements the Signal<T> interface,where T represents the type of the data value computed by the signal.
3. effect - This function creates an effect, which is a function that is executed when one or more specified writable or computed signals changes. The result is an EffectRef object.

- **Writable signals**:- Writable signals provide an API for updating their values directly.Writable signals are created with an initial value that can be modified to reflect changes in the application state. You create writable signals by calling the signal function with the signal's initial value:

```ts
const count = signal(0);
// Signals are getter functions - calling them reads their value.
console.log('The count is: ' + count());
```

Unlike a normal JavaScript value, signals are not modified using the assignment operator.Instead, signals are modified using one of the methods:
1. set - This method accepts a new value for the signal
2. update - This method accepts a function that receives the current signal value and returns a new value.
3. mutate - This method accepts a function that receives the current signal value and modifies it in place.
4. asReadonly - This method returns a Signal<T> object, which provides a read-only version of the signal.

To change the value of a writable signal, either .set() it directly:

```ts
count.set(3);
```

or use the .update() operation to compute a new value from the previous one:

```ts
// Increment the count by 1.
count.update(value => value + 1);
```

Writable signals have the type WritableSignal.


- **Computed signals**:- Computed signal are read-only signals that derive their value from other signals. Computed signals are read-only and will be recomputed when the value is read after one of the signals used to produce a value changes. (Or, put another way, signals are lazily evaluated, and their values are memoized).
Computed signals are created using the computed function, which accepts a function that produces a value. When the function is invoked, Angular keeps track of the signals whose values are read in order to understand the relationship between data values.You define computed signals using the computed function and specifying a derivation:

```ts
const count: WritableSignal<number> = signal(0);
const doubleCount: Signal<number> = computed(() => count() * 2);
``` 

The doubleCount signal depends on the count signal. Whenever count updates, Angular knows that doubleCount needs to update as well.

- Computed signals are both lazily evaluated and memoized

doubleCount's derivation function does not run to calculate its value until the first time you read doubleCount. The calculated value is then cached, and if you read doubleCount again, it will return the cached value without recalculating.

If you then change count, Angular knows that doubleCount's cached value is no longer valid, and the next time you read doubleCount its new value will be calculated.

As a result, you can safely perform computationally expensive derivations in computed signals, such as filtering arrays.

- Computed signals are not writable signals

You cannot directly assign values to a computed signal. That is,

```ts
doubleCount.set(3);
```

produces a compilation error, because doubleCount is not a WritableSignal.

- Computed signal dependencies are dynamic

Only the signals actually read during the derivation are tracked. For example, in this computed the count signal is only read if the showCount signal is true:

```ts
const showCount = signal(false);
const count = signal(0);
const conditionalCount = computed(() => {
  if (showCount()) {
    return `The count is ${count()}.`;
  } else {
    return 'Nothing to see here!';
  }
});
```

When you read conditionalCount, if showCount is false the "Nothing to see here!" message is returned without reading the count signal. This means that if you later update count it will not result in a recomputation of conditionalCount.

If you set showCount to true and then read conditionalCount again, the derivation will re-execute and take the branch where showCount is true, returning the message which shows the value of count. Changing count will then invalidate conditionalCount's cached value.

Note that dependencies can be removed during a derivation as well as added. If you later set showCount back to false, then count will no longer be considered a dependency of conditionalCount.

- Reading signals in OnPush components:- When you read a signal within an OnPush component's template, Angular tracks the signal as a dependency of that component. When the value of that signal changes, Angular automatically marks the component to ensure it gets updated the next time change detection runs. Refer to the Skipping component subtrees guide for more information about OnPush components.

- **Effects**:- Signals are useful because they notify interested consumers when they change. An effect is an operation that runs whenever one or more signal values change.Effects are used to execute statements when the value of another signal changes. Effects are less useful than writable or computed signals because the code they execute occurs outside of the change detection process. One use of effects is to generate logging messages when the value of another signal changes
You can create an effect with the effect function:

```ts
effect(() => {
  console.log(`The current count is: ${count()}`);
});
```

Effects always run at least once. When an effect runs, it tracks any signal value reads. Whenever any of these signal values change, the effect runs again. Similar to computed signals, effects keep track of their dependencies dynamically, and only track signals which were read in the most recent execution.

Effects always execute asynchronously, during the change detection process.
Effects are rarely needed in most application code, but may be useful in specific circumstances. Here are some examples of situations where an effect might be a good solution:

1. Logging data being displayed and when it changes, either for analytics or as a debugging tool.
2. Keeping data in sync with window.localStorage.
3. Adding custom DOM behavior that can't be expressed with template syntax.
4. Performing custom rendering to a `canvas`, charting library, or other third party UI library.


Signals can be used anywhere in an Angular application and shared resources can implement signals to ensure that changes made by one part of the application result in updates elsewhere.
