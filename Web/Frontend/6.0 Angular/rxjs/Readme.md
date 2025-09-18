# RXJS

RxJS (Reactive Extensions for JavaScript) is a powerful library that makes handling asynchronous programming in Angular more efficient. Instead of relying on traditional callbacks or Promises,RxJS allows us to work with reactive streams, making code cleaner,more scalable, and easier to manage.It provides a way to work with data streams and handle events efficiently. It is commonly used in Angular but can be used with other JavaScript frameworks as well.

- Common Use Cases in Angular
   1. Handling HTTP Requests – Process API responses, manage retries, and handle errors efficiently.
   2. Managing User Input – Optimize form changes, search fields,and button clicks without unnecessary API calls.
   3. Combining Multiple API Calls – Execute dependent or parallel requests in a structured way.
   4. State Management & UI Updates – Avoid race conditions and ensure real-time updates.
   5. WebSockets & Real-Time Data – Great for live dashboards, chat apps, and notifications.
   6. Better Performance & Memory Management – Prevent memory leaks using operators like takeUntil and unsubscribe.

Features:-

- Handles asynchronous data: Works well with APIs, WebSockets, or user input.
- Better event handling: Helps manage events like button clicks or keystrokes.
- Prevents callback hell: Avoids deeply nested callbacks using a declarative approach.
- Powerful operators: Functions like map, filter, and merge make data transformations easier.

## Observables

Observables are a technique for event handling, asynchronous programming, and handling multiple values emitted over time.

The observer pattern is a software design pattern in which an object, called the subject, maintains a list of its dependents, called observers, and notifies them automatically of state changes. This pattern is similar (but not identical) to the publish/subscribe design pattern.

Angular apps tend to use the RxJS library for Observables. This overview covers just the basics of observables as implemented by that library.

Observables are declarative. You define a function for publishing values — the source — but that function is not executed until a consumer subscribes to the observable by calling the observable's subscribe method.

This subscriber then receives notifications from the observable until it completes, emits an error, or the consumer unsubscribes.

An observable can deliver multiple values of any type — literals, messages, or events — depending on the context. A stream of keystrokes, an HTTP response, and the ticks of an interval timer are among the typical observable sources. The observable API applies consistently across all of these diverse sources.

An observable can emit one, many, or no values while subscribed. It can emit synchronously (emit the first value immediately) or asynchronously (emit values over time).

Because setup and teardown logic are both handled by the observable, your application code only needs to worry about subscribing to consume values and unsubscribing when done.

RxJS Operators enable transformations of observable values. An Operator takes an observable source, manipulates the values from that source in some useful way, and returns a new observable of the transformed values. When you subscribe to that new observable, you get the results of the intermediate transformations.

This ability to progressively transform observable values - and even combine multiple observable sources into a consolidated observable - is one of the most powerful and appealing of RxJS features.

Accordingly, observables are used extensively within Angular applications and within Angular itself.

- Observable:- An observable is an object that can emit one or more values over time.

Here's a simple observable that will emit 1, then 2, then 3, and then completes.

An observable emitting 3 integers

```ts
import { of } from 'rxjs';

const numbers$ = of(1, 2, 3); // simple observable that emits three values
```

The RxJS method, of(...values), creates an Observable instance that synchronously delivers each of the values provided as arguments.

Naming conventions for observables
Notice the "$" on the end of the observable name. The "$" signifies that the variable is an observable "$tream" of values.

This is a widely adopted naming convention for observables.

Not everyone likes it. Because Angular applications are written in TypeScript and code editors are good at revealing an object's type, you can usually tell when a variable is an observable. Many feel the "$" suffix is unnecessary and potentially misleading.

On the other hand, the trailing "$" can help you quickly identify observables when scanning the code. Also, if you want a property to hold the most recent value emitted from an observable, it can be convenient to use the source observable's root name without the "$".

The Angular framework and tooling do not enforce this convention. Feel free to use it or not.

- Subscribing:- An observable begins publishing values only when someone subscribes to it. That "1-2-3" observable won't emit any numbers until you subscribe by calling the observable's subscribe() method.

If you want to begin publishing but don't care about the values or when it completes, you can call subscribe with no arguments at all

Start publishing

```ts
numbers$.subscribe();
```

You're more likely interested in doing something with the values. Pass in a method - called a "next" handler - that does something every time the observable emits a value.

Subscribe to emitted values

```ts
numbers$.subscribe(
  value => console.log('Observable emitted the next value: ' + value)
);
```

Passing a next() function into subscribe is a convenient syntax for this most typical case. If you also need to know when the observable emits an error or completes, you'll have to pass in an Observer instead.

- Defining observers
An observable has three types of notifications: "next", "error", and "complete".

An Observer is an object whose properties contain handlers for these notifications.

NOTIFICATION TYPE DETAILS

next- A handler for each delivered value. Called zero or more times after execution starts.
error- A handler for an error notification. An error halts execution of the observable instance and unsubscribes.
complete- A handler for the execution-complete notification. Do not expect next or error to be called again. Automatically unsubscribes.
Here is an example of passing an observer object to subscribe:

Subscribe with full observer object

```ts
numbers$.subscribe({
  next: value => console.log('Observable emitted the next value: ' + value),
  error: err => console.error('Observable emitted an error: ' + err),
  complete: () => console.log('Observable emitted the complete notification')
});
```

Alternatively, you can create the Observer object with functions named next(), error() and complete().

```ts
numbers$.subscribe({
  next(value) { console.log('Observable emitted the next value: ' + value); },
  error(err)  { console.error('Observable emitted an error: ' + err); },
  complete()  { console.log('Observable emitted the complete notification'); }
});
```

This works because JavaScript turns the function names into the property names.

All of the handler properties are optional. If you omit a handler for one of these properties, the observer ignores notifications of that type.

- Error handling
Because observables can produce values asynchronously, try/catch will not effectively catch errors. Instead, you handle errors by specifying an error function on the observer.

Producing an error also causes the observable to clean up subscriptions and stop producing values.

```ts
numbers$.subscribe({
  next: value => console.log('Observable emitted the next value: ' + value),
  error: err => console.error('Observable emitted an error: ' + err),
});
```

Error handling (and specifically recovering from an error) is covered in more detail in a later section.

- Creating observables
The RxJS library contains a number of functions for creating observables. Some of the most useful are covered later.

You can also use the Observable constructor to create an observable stream of any type. The constructor takes as its argument the subscriber function to run when the observable's subscribe() method executes.

A subscriber function receives an Observer object, and can publish values to the observer's next(), error, and complete handlers.

For example, to create an observable equivalent to the of(1, 2, 3) above, you could write something like this:

Create observable with constructor

```ts
// This function runs when subscribe() is called
function sequenceSubscriber(observer: Observer<number>) {
  // synchronously deliver 1, 2, and 3, then completes
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.complete();

  // Return the unsubscribe function.
  // This one doesn't do anything
  // because values are delivered synchronously
  // and there is nothing to clean up.
  return {unsubscribe() {}};
}

// Create a new Observable that will deliver the above sequence
const sequence = new Observable(sequenceSubscriber);

// Execute the Observable and print the result of each notification
sequence.subscribe({
  next(num) { console.log(num); },
  complete() { console.log('Finished sequence'); }
});

// Logs:
// 1
// 2
// 3
// Finished sequence
```

Geolocation example
The following example demonstrates the concepts above by showing how to create and consume an observable that reports geolocation updates.

Observe geolocation updates

```ts
// Create an Observable that will start listening to browser geolocation updates
// when a consumer subscribes.
const locations = new Observable((observer) => {
  let watchId: number;

  // The geolocation API (if it exists) provides values to publish
  if ('geolocation' in navigator) {
    watchId = navigator.geolocation.watchPosition(
      (position: GeolocationPosition) => observer.next(position),
      (error: GeolocationPositionError) => observer.error(error)
    );
  } else {
    observer.error('Geolocation not available');
  }

  // When the consumer unsubscribes, stop listening to geolocation changes.
  return {
    unsubscribe() {
      navigator.geolocation.clearWatch(watchId);
    }
  };
});

// Call subscribe() to start listening for geolocation updates.
const locationsSubscription = locations.subscribe({
  next(position) {
    console.log('Current Position: ', position);
  },
  error(msg) {
    console.log('Error Getting Location: ', msg);
  }
});

// Stop listening for location after 10 seconds
setTimeout(() => {
  locationsSubscription.unsubscribe();
}, 10000);
```

## RxJS Operators

Essential RxJS Operators:-

`Transforming Data`:-

map – Transforms emitted values.
pluck – Extracts a specific property from an object.
switchMap – Cancels the previous observable and switches to a new one.
mergeMap – Runs multiple observables concurrently.
concatMap – Ensures observables execute sequentially.

```ts
this.activatedRoute.params.pipe(
   map(params => params['id']),
   switchMap(id => this.userService.getUserById(id)),
   map(user => ({
      ...user,
      fullName: `${user.firstName} ${user.lastName}`
   }))
).subscribe(user => console,log(user))
```

Pro Tip: Use switchMap when making API requests that should cancel previous ones (e.g., search queries).

`Controlling Streams`

tap – Executes side effects without altering data (useful for logging).
filter – Filters emitted values based on a condition.
take – Takes only a specific number of emissions.
first – Emits only the first value and completes.
debounceTime – Waits before emitting a new value (useful for search fields).

```ts
this.searchInput.valueChanges.pipe(
   debounceTime(300), //wait 300ms before emitting
   distinctUntilChanged()
   switchMap(value => this.userService.searchUsers(value))
).subscribe(users => console.log(users));
```

Pro Tip: debounceTime is a must for optimizing real-time searches.

`Combining Observables`

forkJoin – Waits for all observables to complete before emitting.
combineLatest – Emits whenever any observable changes.
withLatestFrom – Combines a stream with the latest value of another.

```ts
this.activatedRoute.params.pipe(
   map(params => params['id']),
   switchMap(id =>
      forkJoin({
         user: this.userService.getUserById(id),
         permissions: this.authService.getUserPermissions(id)
      })
   )
).subscribe(({ user, permissions }) => console.log(user,permissions));
```

Pro Tip: debounceTime is a must for optimizing real-time searches.

`Handling Errors`

catchError – Catches and handles errors without breaking the stream.
retry – Retries an observable if it fails.
retryWhen – Defines custom retry logic.

```ts
this.activatedRoute.params.pipe(
   map(params => params['id']),
   switchMap(id => this.userService.getUserById(id).pipe(
      retry(3)// Retries upto 3 times
      catchError(error => {
         console.error("error fetching user", error);
         return of(null);//Returns a fallback value
      })
   ))
).subscribe(user => console,log(user))
```

Pro Tip: retry is useful when dealing with unstable network conditions.

`subscription Management`

subscribe – Consumes an observable stream.
unsubscribe – Cancels a subscription to free up resources.
takeUntil – Automatically unsubscribes when a condition is met.

```ts
destroy$ = new Subject();

this.someService.getData().pipe(
   takeUntil(this.destroy$)
).subscribe(data => console.log(data));

ngOnDestroy(){
   this.destroy$.next();
   this.destroy$.complete();
}
```

Pro Tip: Always clean up subscriptions to prevent memory leaks in Angular.

## Subjects
