# Anguar signals

Angular Signals is a system that granularly tracks how and where your state is used throughout an application, allowing the framework to optimize rendering updates.

Angular tracks where signals are read and when they're updated. The framework uses this information to do additional work, such as updating the DOM with new state. This ability to respond to changing signal values over time is known as reactivity.

A signal is a wrapper around a value that notifies interested consumers when that value changes. Signals can contain any value, from primitives to complex data structures.

You read a signal's value by calling its getter function, which allows Angular to track where the signal is used.
Signals may be either writable or read-only.

## Writable signals

Writable signals provide an API for updating their values directly. You create writable signals by calling the signal function with the signal's initial value:

```ts
const count = signal(0);
// Signals are getter functions - calling them reads their value.
console.log('The count is: ' + count());
```

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

## Computed signals

Computed signal are read-only signals that derive their value from other signals. You define computed signals using the computed function and specifying a derivation:

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

## Effects

Signals are useful because they notify interested consumers when they change. An effect is an operation that runs whenever one or more signal values change. You can create an effect with the effect function:

```ts
effect(() => {
  console.log(`The current count is: ${count()}`);
});
```

Effects always run at least once. When an effect runs, it tracks any signal value reads. Whenever any of these signal values change, the effect runs again. Similar to computed signals, effects keep track of their dependencies dynamically, and only track signals which were read in the most recent execution.

Effects always execute asynchronously, during the change detection process.
Use cases for effects

Effects are rarely needed in most application code, but may be useful in specific circumstances. Here are some examples of situations where an effect might be a good solution:

1. Logging data being displayed and when it changes, either for analytics or as a debugging tool.
2. Keeping data in sync with window.localStorage.
3. Adding custom DOM behavior that can't be expressed with template syntax.
4. Performing custom rendering to a `canvas`, charting library, or other third party UI library.
