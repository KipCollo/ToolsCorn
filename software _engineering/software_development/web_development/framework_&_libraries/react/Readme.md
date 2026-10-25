# React

React is an open-source JavaScript library for building user interfaces.It component based architecture, declarative, state-driven Javascript library for building user interfaces.
Created by Jordan Walke,an engineer working at Facebook.It allows developers to create reusable UI components and efficiently update the UI when the data changes.It allows developers to create reusable UI components and efficiently update the UI when the data changes.

React can also render on the server using Node and power mobile apps using React Native.

**Key Features of React**

_Component-based_ - Components are the building blocks of user interfaces in React.React is all about components such as buttons,input fields, search bars, and so on.And in fact, basically all React does is to take components and draw them on a webpage.And so we built complex UIs in React by building multiple components and then combining these components.
A React application is made up of multiple components, each responsible for outputting a small,reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks. A component may also maintain internal state - for example, a TabList component may store a variable corresponding to the currently open tab.
Components in React enable developers to create reusable interfaces, which can be easily modified and reused throughout the application.

_Declarative_ - In order to describe what each component looks like and how it works,we use a special declarative syntax called JSX. Declarative simply means that we tell React what a component and ultimately the entire UI should look like based on the current state.So React is basically a huge abstraction away from the DOM so that we never have to work with a DOM directly as we would with vanilla JavaScript.So we simply tell React what we want to happen when some data changes, but not how to do it.
React allows us to write components using a domain-speciﬁc language called JSX. JSX allows us to write our components using HTML, whilst mixing in JavaScript events. React will internally convert this into a virtual DOM, and will ultimately output our HTML for us.
JSX is basically a syntax that combines parts of HTML,CSS, JavaScript, and it even allows us to reference other React components.

_State-driven_ - React "reacts" to state changes in your components quickly and automatically to rerender the components in the HTML DOM by utilizing the virtual DOM. The virtual DOM is an in-memory representation of an actual DOM. By doing most of the processing inside the virtual DOM rather than directly in the browser's DOM, React can act quickly and only add, update, and remove components which have changed since the last render cycle occurred.

_Unidirectional Data flow_- It is also known as one-way data flow, which means the data has one, and only one way to be transferred to other parts of the application. In essence, this means child components are not able to update the data that is coming from the parent component. In React, data coming from a parent is called `props`.
In React this means that:

- state is passed to the view and to child components
- actions are triggered by the view
- actions can update the state
- the state change is passed to the view and to child components

The view is a result of the application state. State can only change when actions happen. When actions happen, the state is updated. One-way data binding provides us with some key advantages

- Easier to debug, as we know what data is coming from where.
- Less prone to errors, as we have more control over our data.
- More efficient, as the library knows what the boundaries are of each part of the system.

In React, a state is always owned by one component. Any changes made by this state can only affect the components below it, i.e its `children`. Changing state on a component will never affect its parent or its siblings, only the children will be affected. This is the main reason that the state is often moved up in the component tree so that it can be shared between the components that need to access it.

**Virtual DOM**:- React uses a Virtual DOM, a lightweight replica of the browser's DOM, which enables fast and efficient rendering.
The virtual DOM is a lightweight copy of the actual DOM. React uses the virtual DOM to optimize and speed up the process of updating the real DOM by comparing the current virtual DOM with the previous one.
ReactJS uses virtual DOM based mechanism to ﬁll in data (views) in HTML DOM. The virtual DOM works fast owning to the fact that it only changes individual DOM elements instead of reloading complete DOM every time
React creates a VIRTUAL DOM in memory.Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.React only changes what needs to be changed.
React finds out what changes have been made, and changes only what needs to be changed.

## Vanilla Javascript vs React code

https://codesandbox.io/s/react-first-app-advice-52879f
https://gist.githubusercontent.com/gaearon/0275b1e1518599bbeafcde4722e79ed1/raw/db72dcbf3384ee1708c4a07d3be79860db04bff0/example.html

## Installation or Setup

**Pure React** - ReactJS is a JavaScript library contained in a single ﬁle react-<version>.js that can be included in any HTML page.People also commonly install the React DOM library react-dom-<version>.js along with the main React ﬁle:
React also supports JSX syntax. JSX is an extension created by Facebook that adds XML syntax to JavaScript. In order to use JSX you need to include the Babel library and change <script type="text/javascript"> to <script type="text/babel"> in order to translate JSX to Javascript code.

```html
<html>
  <head>
    <script
      src="https://unpkg.com/react@18/umd/react.development.js"
      crossorigin
    ></script>
    <script
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
      crossorigin
    ></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  </head>
  <body>
    <div id="mydiv"></div>

    <!-- without using JSX-->
    <script>
      function Hello() {
        return React.createElement("header", null, "Hello");
      }

      const root = ReactDOM.createRoot(document.getElementById("mydiv"));
      rootrender(React.createElement(Hello));
    </script>

    <!--Using JSX-->
    <script type="text/babel">
      function Hello() {
        return <h1>Hello World!</h1>;
      }

      ReactDOM.render(<Hello />, document.getElementById("mydiv"));
    </script>
  </body>
</html>
```

**CLI Tools** - Here is the list of most common CLI tools for React development:

_create-react-app_:- create-react-app is a command line application, aimed at getting you up to speed with React in no time(https://create-react-app.dev).Create React App is the CLI based tool and is the best way to start building a new single-page application in React.
Everything is already configurered- `ESLint,Prettier,Jest` etc.

You start by using npx , which is an easy way to download and execute Node.js commands without installing them.
npx comes with npm (since version 5.2) and if you don't have npm installed already, do it now from nodejs.org (npm is installed with Node).
When you run npx create-react-app app-name , the most recent create-react-app npx is going to download release, run it, and then remove it from your system. This is great because you will never have an outdated version on your system, and every time you run it, you're getting the latest and greatest code available.

```bash
npx create-react-app <app-name>
npx create-react-app@5 <app-name>
```

Running any of these commands will create a directory with specified inside the current folder. Inside that directory, it will generate the initial project structure and install the transitive dependencies:

```js
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── serviceWorker.js
    └── setupTests.js
```

Below are the list of some of the features provided by create react app.

- React, JSX, ES6, Typescript and Flow syntax support.
- Autoprefixed CSS
- CSS Reset/Normalize
- Live-editing CSS and JS in local development server.
- A fast interactive unit test runner with built-in support for coverage reporting
- A build script to bundle JS, CSS, and images for production, with hashes and sourcemaps
- An offline-first service worker and a web app manifest, meeting all the Progressive Web App criteria.

The `create-react-app` commands generate React App with an excellent configuration and helps you build your React app with the best practices in mind to optimize it. However, running the `eject` script will remove the single build dependency from your project. That means it will copy the configuration files and the transitive dependencies (e.g. `Webpack`, `Babel`, etc.) as dependencies in the `package.json` file. If you do that, you\'ll have to ensure that the dependencies are installed before building your project.
After running the `eject`, commands like `npm start` and `npm run build` will still work, but they will point to the copied scripts so you can tweak them. It won\'t be possible to run it again since all scripts will be available except the eject one.

create-react-app can get quite laggy as your application grows as it uses Webpack bundler under the hood.

_Using Vite_:- Vite (French word for "quick", pronounced /vit/, like "veet") is a build tool that aims to provide a faster and leaner development experience for modern web projects.(https://vitejs.dev).

Instant server start - On deman file serving over native ESM,no bundling required.
Lightning Fast HMR - Hot Module Replacement(HMR) that stays fast regardless of app size.
Optimized build - Pre-configured Rollup build with multi-page and library mode support.
Server-side rendering

It consists of two major parts:

1. A dev server that provides rich feature enhancements over native ES modules, for example extremely fast Hot Module Replacement (HMR) and bundling.
2. A build command that bundles your code with Rollup, pre-configured to output highly optimized static assets for production.

Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects.Vite has a React plugin,which makes it great replacement of create-react-app for faster experience.
Need to manually set up ESLint and others.

```bash
npm create vite@latest <app-name>
```

The index.html will be served on <http://localhost:5173.>
Running vite starts the dev server using the current working directory as root. You can specify an alternative root with vite serve some/sub/dir. Note that Vite will also resolve its config file (i.e. vite.config.js) inside the project root, so you'll need to move it if the root is changed.
When running vite from the command line, Vite will automatically try to resolve a config file named vite.config.js inside project root (other JS and TS extensions are also supported).

```js
//vite.config.js
export default defineConfig{
  // config options
  plugins: [react()],
  server: {
    port: 3000
  }
}
```

You can also explicitly specify a config file to use with the --config CLI option (resolved relative to cwd):

```bash
vite --config my-config.js
```

`CONFIG LOADING`:- By default, Vite uses esbuild to bundle the config into a temporary file and load it. This may cause issues when importing TypeScript files in a monorepo. If you encounter any issues with this approach, you can specify --configLoader runner to use the module runner instead, which will not create a temporary config and will transform any files on the fly. Note that module runner doesn't support CJS in config files, but external CJS packages should work as usual.
Alternatively, if you're using an environment that supports TypeScript (e.g. node --experimental-strip-types), or if you're only writing plain JavaScript, you can specify --configLoader native to use the environment's native runtime to load the config file. Note that updates to modules imported by the config file are not detected and hence would not auto-restart the Vite server.

**Using React Sandbox** - One of the speediest ways to initiate React coding is by typing [react.new](https://codesandbox.io/p/sandbox/react-new?file=%2Fsrc%2Findex.js&utm_source=dotnew) in your browser's URL bar. Upon hitting Enter, CodeSandbox, a website, swiftly generates a fresh React project workspace for you. This platform offers an in-browser development space, enabling file manipulation, code writing, and live previews of your website—all without local installations.

This approach is particularly advantageous for rapid starts and ideal if local software installation isn't feasible, perhaps due to restricted permissions on a company-issued computer.

## React versions

- React 0.3 – 0.14 (2013–2015) - Initial Release i.e open-sourced & Core Concepts
  1.  JSX: JavaScript syntax extension for describing UI (HTML-like in JS).
  2.  Components: Reusable, stateful UI elements.
  3.  Virtual DOM: Efficient UI updates.
  4.  Unidirectional Data Flow: Props from parent → child.
  5.  ReactDOM.render() introduced for mounting.

- React 0.14 (2015)
  1.  Split: react (core) and react-dom (DOM rendering).
  2.  Stateless Functional Components introduced.
  3.  PureComponent introduced for performance optimization.

- React 15 (2016) - Custom DOM Attributes: Non-standard attributes are passed to the DOM (e.g., data-_, aria-_).
  1. Improved SVG Support
  2. Development & Production Builds separated.

- React 16 (2017) – “Fiber”
  1.  New Core Architecture (Fiber): Enables async rendering.
  2.  Fragments: Return multiple elements (<> </>) without a parent div.
  3.  Error Boundaries: Catch errors in component trees.
  4.  Portals: Render children outside the parent DOM hierarchy.
  5.  render() can return strings, arrays, and booleans.

- React 16.8 (2019) – Hooks
  1.  Hooks API introduced:- useState, useEffect, useContext, useReducer, etc.
  2.  Replaces many class component patterns with functional approaches.
  3.  Makes logic reuse easier without HOCs or render props.

- React 17 (2020) – No New Features
  1.  Focused on:
  - Gradual upgrades
  - Improved event delegation to root instead of document
  2.  New JSX Transform: No need to import React in every file.

- React 18 (2022) – Concurrent Features
  1.  Automatic Batching of state updates.
  2.  createRoot() API replaces ReactDOM.render() for concurrent rendering.
  3.  useTransition, useDeferredValue for smooth interactions.
  4.  Suspense for Data Fetching support expanded.
  5.  Streaming SSR with support for selective hydration.

- React 19 (RC as of 2024)
  1.  New use() hook for async/await in components (Suspense-first APIs).
  2.  New Form Features: useFormStatus, useFormState
  3.  Actions API: For server mutations.
  4.  React Compiler (experimental): Automatic memoization and optimization.
  5.  Improved Server Components Support

React Native is a framework for building native mobile applications using React. It allows developers to write mobile apps using JavaScript and leverage the power of React to create reusable UI components.
React is a JavaScript library for building user interfaces, primarily for web applications, while React Native is a framework for building native mobile applications. React Native uses native components and APIs specific to each platform.

React Native components are similar to React components but are built specifically for mobile app development. They include components for handling user input, displaying data, navigating between screens, and more.

StyleSheet is a built-in component in React Native that allows you to define styles for your components. It provides a way to write styles using JavaScript objects or create reusable style constants.

The difference between state and props in React Native is the same as in React.js. State is managed within a component and can be changed, while propsare passed to a component from its parent and cannot be modified directly by the component receiving them.

AsyncStorage is a simple, asynchronous, persistent key-value storage system provided by React Native. It allows you to store data on the device's disk and retrieve it later, making it useful for caching data or storing user preferences.
Expo is a set of tools, libraries, and services built on top of React Native. It provides a simplified development workflow, pre-configured native modules, and access to device features, allowing developers to build and deploy React Native apps faster.

React.memo() is a higher-order component that memoizes the rendering of a functional component, similar to the shouldComponentUpdate() lifecycle method for class components. It prevents unnecessary re-renders of the component if its props have not changed.
A controlled component is a component where form data is handled by React stateand is fully controlled by React. An uncontrolled component, on the other hand, manages its own stateand stores form data internally without relying on React state.

Error boundaries are React components that catch JavaScript errors during rendering, in lifec

## React Render HTML

Since React can be rendered in other environment such as native application or mobile application using react native,ReactDOM renders it to browser.React's goal is in many ways to render HTML in a web page.React renders HTML to the web page by using a function called ReactDOM.render().

`The Render Function`: The ReactDOM.render() function takes two arguments, HTML code and an HTML element.The purpose of the function is to display the specified HTML code inside the specified HTML element.

There is another folder in the root directory of your React project, named "public". In this folder, there is an index.html file.It has a single <div> in the body of this file. This is where our React application will be rendered.

```js
React.render(<App />, document.getElementById("root")); //before version 18

const root = ReactDOM.createRoot(document.getElementById("root")); //after v18
root.render(<App />);
```

```html
<body>
  <div id="root"></div>
</body>
```

Note that the element id does not have to be called "root", but this is the standard convention.

`The Root Node`: The root node is the HTML element where you want to display the result.It is like a container for content managed by React.It does NOT have to be a <div> element and it does NOT have to have the id='root'.

## React JS packages

1. React Router
2. React Query
3. Axios
4. React Hook Form
5. Styled components
6. Storybook
7. Framer Motion.
8. Zustand/Redux
9. Styled Components/Emotion
10. Material react

- React Hook Form
- Tanstack Query
- React intl
- Jest
- React Testing Loibrary
- Apollo client
- NextJS

## UI Frameworks

1. Material UI
2. Ant Design
3. Chakra UI
4. React Bootstrap
5. Rebass
6. Blueprint
7. Semantic UI.

- Render props
- Forward refs
- React.lazy
- context API
- High order components
- Advanced & custom hooks
- Error boundaries
- Reconciliation
- React internals

## How React.js Compares to Other Frameworks

- React vs Angular:-Angular is based on MVC pattern while React uses an MVVM pattern.
- React vs jQuery:- React is full-fledged frontend library,whereas jQuery is a library that focuses on DOM manipulation and event handling.

`Context` provides a way to pass data through the component tree without having to pass props manually at every level. It is used for sharing data that can be considered "global" for a tree of React components.

## Thinking in React

The "thinking in react" process:-

1. Break desired UI into components and establish component tree.
2. Build static version in React(without state)
3. Think about state - When to use state, types of state(local vs global),where to place each piece of state.
4. Establish data flow - One-way data flow, child-to-parent communication, accessing global state.

## Tools

**React.StrictMode** is a component that helps highlight potential problems in an application. It enables additional checks and warnings in the development mode to help identify and address potential bugs and deprecated features.

```js
<React.StrictMode>
  <App />
</React.StrictMode>
```

**React DevTools** is a browser extension that allows you to inspect and debug React component hierarchies. It provides a set of tools for inspecting components, examining props and state, and profiling performance.
