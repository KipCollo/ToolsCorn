# RxJS

Reactive Extensions Library for JavaScript.
RxJS is a library for composing asynchronous and event-based programs by using observable sequences. It provides one core type, the Observable, satellite types (Observer, Schedulers, Subjects) and operators inspired by Array methods (map, filter, reduce, every, etc) to allow handling asynchronous events as collections.

ReactiveX combines the Observer pattern with the Iterator pattern and functional programming with collections to fill the need for an ideal way of managing sequences of events.

The essential concepts in RxJS which solve async event management are:
1. Observable: represents the idea of an invokable collection of future values or events.
2. Observer: is a collection of callbacks that knows how to listen to values delivered by the Observable.
3. Subscription: represents the execution of an Observable, is primarily useful for cancelling the execution.
4. Operators: are pure functions that enable a functional programming style of dealing with collections with operations like map, filter, concat, reduce, etc.
5. Subject: is equivalent to an EventEmitter, and the only way of multicasting a value or event to multiple Observers.
6. Schedulers: are centralized dispatchers to control concurrency, allowing us to coordinate when computation happens on e.g. setTimeout or requestAnimationFrame or others.
