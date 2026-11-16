# Effects and Data Fetching

`API Calls` - APIs, short for Application Programming Interfaces, are software-to-software interfaces. Meaning, they allow different applications to talk to each other and exchange information or functionality. This allows businesses to access another business’s data, piece of code, software, or services in order to extend the functionality of their own products — all while saving time and money.

JSONPlaceholder - it is a fake online REST API for Testing and Prototyping.

There are several options available to make API calls from your React.js applications.

1. `Apollo` - Apollo is a platform for building a unified graph, a communication layer that helps you manage the flow of data between your application clients (such as web and native apps) and your back-end services.
2. `Relay` - Relay is a JavaScript client used in the browser to fetch GraphQL data. It's a JavaScript framework developed by Facebook for managing and fetching data in React applications. It is built with scalability in mind in order to power complex applications like Facebook. The ultimate goal of GraphQL and Relay is to deliver instant UI-response interactions.
3. `urql` - urql (Universal React Query Library) is a library for managing GraphQL data in React applications. It is developed and maintained by Formidable Labs and is available as open-source software.
   urql is designed to be easy to use and flexible, with a simple API for performing GraphQL queries and mutations. It is based on the concept of a client, which is used to manage the GraphQL data for an application. The client provides a set of utilities and APIs for managing GraphQL data, including:
   - executeQuery: A utility for executing a GraphQL query.
   - executeMutation: A utility for executing a GraphQL mutation.
   - useQuery: A hook for executing a GraphQL query and accessing the result in a component.
   - useMutation: A hook for executing a GraphQL mutation and accessing the result in a component.
     urql is often used as an alternative to other GraphQL libraries, such as Apollo Client, because of its simplicity and lightweight size. It is particularly well-suited for small to medium-sized React applications where the complexity of other GraphQL libraries may not be required.
4. `Fetch API`
5. `jQuery AJAX`
6. `SWR` - SWR is a React Hooks library for data fetching.
   The name “SWR” is derived from stale-while-revalidate, a cache invalidation strategy popularized by HTTP RFC 5861. SWR first returns the data from cache (stale), then sends the request (revalidate), and finally comes with the up-to-date data again.
   With just one hook, you can significantly simplify the data fetching logic in your project.
7. `Unfetch API`
8. `React Query` - Powerful asynchronous state management, server-state utilities and data fetching for TS/JS, React, Solid, Svelte and Vue.
9. `Superagent` - Small progressive client-side HTTP request library, and Node.js module with the same API, supporting many high-level HTTP client features
10. `rtk-query` - [RTK Query](https://redux-toolkit.js.org/rtk-query/overview) is a data fetching and caching tool that is included in the Redux Toolkit package. It is designed to simplify common use cases for fetching data, including caching, polling, and invalidation.

## Axios

The most common way for frontend programs to communicate with servers is through the HTTP protocol. You are probably familiar with the Fetch API and the XMLHttpRequest interface, which allows you to fetch resources and make HTTP requests.
Axios is a client HTTP API based on the XMLHttpRequest interface provided by browsers.

Installing axios:-

```bash
npm install axios
bower install axios
pnpm install axios
```

Once the package is installed, you can import the library using import or require approach:

```js
import axios, { isCancel, AxiosError } from "axios";
```

You can also use the default export, since the named export is just a re-export from the Axios factory:

```js
import axios from "axios";

console.log(axios.isCancel("something"));
```

If you use require for importing, only default export is available:

```js
const axios = require("axios");

console.log(axios.isCancel("something"));
```

For some bundlers and some ES6 linters you may need to do the following:

```js
import { default as axios } from "axios";
```

For cases where something went wrong when trying to import a module into a custom or legacy environment, you can try importing the module package directly:

```js
const axios = require("axios/dist/browser/axios.cjs"); // browser commonJS bundle (ES2017)
// const axios = require('axios/dist/node/axios.cjs'); // node commonJS bundle (ES2017)
```

CDN

Using jsDelivr CDN (ES5 UMD browser module):

```js
<script src="https://cdn.jsdelivr.net/npm/axios@1.6.7/dist/axios.min.js"></script>
```

Using unpkg CDN:

```js
<script src="https://unpkg.com/axios@1.6.7/dist/axios.min.js"></script>
```

Get Data - Performing a GET request.

```js

state = {
   products: []
};

async componentDidMount(){
   // pending > resolved (success) OR rejected (failure)
   const { data: products } = await axios.get('https://jsonplaceholder.typicode.com/users');
   this.setState({ products })
}

const [customers, setCustomers] = useState([]);

   useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users')
         .then( (response) => {
            setCustomers(response.data)
            console.log(response)
         })
         .catch((error) => {
            console.log(error)
      })
}, []);
```

POST request- Performing a POST request

```js
state = {
  products: [],
};

handleAdd = async () => {
  const product = { name: "Laptop", Price: 3000 };
  const { data: products } = await axios.get(
    "https://jsonplaceholder.typicode.com/products",
  );

  const products = [products, ...this.state.products];
  this.setState({ products });
};

axios
  .post("/user", {
    firstName: "Fred",
    lastName: "Flintstone",
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

const [user, setUser] = useState({
  name: "",
  email: "",
  username: "",
});

const handleChange = (e) => {
  setUser({ ...user, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
  e.preventDefault();

  axios
    .post("http://localhost:5000/api/users", user)
    .then((response) => {
      console.log("User added:", response.data);
      alert("User successfully added!");
    })
    .catch((error) => {
      console.error("There was an error!", error);
    });
};
```

Update request- Performing a PUT request

```js
handleUpdate = post => {
   product.name = "UPDATE"
   await axios.put(`https://jsonplaceholder.typicode.com/products/${product.id}`,product)
   axios.patch(`https://jsonplaceholder.typicode.com/products/{product.id}`,{ name: product.name}) //patch request

   const products = [ ...this.state.products]
   const index = products.indexOf(product)
   products[index] = {...product}
   this.setState({ products })

}

const [user, setUser] = useState({
    name: '',
    email: '',
    username: ''
  });

  const handleUpdate = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:5000/api/users/${userId}`, user)
      .then(response => {
        console.log('User updated:', response.data);
        alert('User successfully updated!');
      })
      .catch(error => {
        console.error('Update failed:', error);
      });
  };
```

Delete Data - Performing a DELETE request.

```js
handleDelete = asynce post => {
   await axios.delete(`https://jsonplaceholder.typicode.com/products/${product.id}`)

   const products = this.state.products.filter(p => p.id ! == product.id);
   this.setState({ products })
}

const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      axios.delete(`http://localhost:5000/api/users/${id}`)
        .then(() => {
          setUsers(users.filter(user => user.id !== id));
          alert('User deleted successfully!');
        })
        .catch(err => console.error('Delete failed:', err));
    }
  };
```

OPTIMISTIC $ PESSIMISTIC UPDATES - Optimistic Involves performing an operation before calling a server.

```js
handleDelete = asynce post => {
   const originalProducts = this.state.products;

   const products = this.state.products.filter(p => p.id ! == product.id);
   this.setState({ products })

try{
   await axios.delete(`https://jsonplaceholder.typicode.com/products/${product.id}`)
} catch (e){
   alert("Error deleting Data");
   this.setState({ products: originalProducts })
}

}
```

## Side Effects

A side effect is basically any interaction between a React component and the world outside the component.Examples are data fetching, setting up subscriptions, setting up timers, manually accessing the DOM.
Side effects can be created in two ways:-

1. Event Handlers - Triggered by events.
2. Effects - useEffect hook. Allows us to write code that will run at different moments: mount, re-render or unmount.

**useEffect Hook** - `useEffect` is a special hook that lets you run side effects in React. It is similar to componentDidMount and componentDidUpdate, but it only runs when the component (or some of its props) changes and during the initial mount.
The useEffect hook is used to perform side effects in functional components. It allows you to run code after the component has rendered and handle actions such as data fetching, subscriptions, or manually updating the DOM.It lets you synchronize a component with external system.

_Mechanics of effects_ - useEffect is like an event listener that is listening for one dependency to change. Whenever a dependency changes, it will execute the effect again.
Effects react to updates to state and props used inside the effect (the dependencies). So effects are “reactive” (like state updates re-rendering the UI)

```js
useEffect(setup,dependencies?)
```

```js
import { useEffect } from "react";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  useEffect(function () {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=interstellar`)
      .then((res) => res.json())
      .then((data) => setMovies(data.Search));
  }, []);
}
```

- `parameters`:-
  1.  setup - The functinwith your effect's logic.Can optionally return a cleanup function.When your component is added to the DOM,react will run your setup function.After every re-render with changed dependencies,react will first run cleanup function(if you provided it) with old values,and then run uyour setup function with new values.After your component is removed from the DOM,React will run your cleanup function.
  2.  optional dependency array - The list of all reactive values referenced inside of the setup code.By default,effects run after every render.We can prevent that by passing a dependency array.Without dependency array, React doesn't know when to run th effect.Each time one of the dependencies changes, the effect will be executed again.Every state variable and prop used inside the effect MUST be included in the dependency array.Otherwise we get stale closure.

```js
const [movies, setMovies] = useState([]);
const title = props.movie.Title;

useEffect(function () {}, [title, movies]);
```

_Setting up titles_ -

```js
useEffect(
  function () {
    if (!title) return;
    document.title = `Movie | ${title}`;
  },
  [title],
);
```

_Cleanup function_ - Is a function we can return from an effect(optional).Runs on two diff occasions:- Before the effect is executed again, after a component has unmounted.
Necessary whenever the side effect keeps happening after the component has been re-rendered or unmounted.

- HTTP request - Cancel request
- API subscription - Cancel subscription
- Start timer - Stop timer
- Add event listener - Remove listener.

```js
useEffect(
  function () {
    if (!title) return;
    document.title = `Movie | ${title}`;

    return function () {
      document.title = "usePopcorn";
    };
  },
  [title],
);
```
