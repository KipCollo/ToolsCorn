# State Management

Application state management is the process of maintaining knowledge of an application's inputs across multiple related data flows that form a complete business transaction -- or a session -- to understand the condition of the app at any given moment. In computer science, an input is information put into the program by the user and state refers to the condition of an application according to its stored inputs -- saved as variables or constants. State can also be described as the collection of preserved information that forms a complete session.

## Ngxs

Ngxs is a state management pattern for the Angular framework. It acts as a single source of truth for our application. Ngxs is very simple and easily implementable. It reduce lots of boilerplate code . It is a replacement for Ngrx. In Ngrx we are creating state, action, reducer, and effects but in Ngxs, we are creating only state and actions instead of all of this. Like Ngrx, Ngxs is also asynchronous and when we dispatch any action we can get a response back.

## Ngrx

Ngrx is a group of Angular libraries for reactive extensions that implements the Redux pattern and it’s supercharged with RXJS.
