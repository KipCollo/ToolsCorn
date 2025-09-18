# Routing

Routing is an essential concept in Single Page Applications (SPA). When your application is divided into separated logical sections, and all of them are under their own URL, your users can easily share links among each other.It allows you to create single page internet applications(SPA) that have navigation.

Routing in React can be handled using libraries like React Router. React Router allows you to define routes, map them to specific components, and handle navigation between different views in a React application.

## React Router

React router is the most famous library when it comes to implementing routing in React applications.React Router makes use of component structure to invoke components,that display relevant info.It also permits users to make use of browser functions e.g back button and refresh page while maintaining original display that app provides.

React Router is a popular library for handling routing in React applications. It allows
you to define different routes, render components based on the current URL, and
navigate between different views in a single-page application.

React Router makes use of component structure to invoke components,that display relevant information.It also permits users to make use of browser functions like back button and refresh page while maintaining original display that app provides.

To use react-router library, you install it:

```bash
npm install react-router-dom
```

They are technically 3 diff packages:- React Router,React Router DOM and React Router Native.React Router DOM is for web applications and React Router Native is for mobile applications made with React Native.

- **BrowserRouter component**:- Once installed,the BrowserRouter component is used as it is required by React router.It's common practice to alias(rename) BrowserRoute as simply Router when importing.If we want to provide routes within our entire application it needs to be wrapped around entire component tree.

```js
import { BrowserRouter as Router } from 'react-router-dom'

export default function App(){
   return (
      <Router>
      /*routes goes here as children*/
      </Router>
   )
}
```

The primary function of BrowserRouter is to be able to declare individual routes within our application.

- **Route component**:- We declare routes within Router component as children.We can declare as many routes and provide at least two *props* to each route i.e path and *component*(or render)

```js
import { BrowserRouter as Router,Route } from 'react-router-dom'

export default function App(){
   return (
      <Router>
      <Route path="/" component={component}/>
      </Router>
   )
}
```

The *path* prop specifies on what path of our app a given route is located.The *component* props can only receive a reference to a given component,whereas *render* is used for applying some conditional logic to render one component or another.

```js
<Router>
   <Route path="/" component={component}/>
   <Route path="/about" render={() => <About/>}/>
</Router>
```

**Switch component**:-Used for multiple routes within our router.Should be included within router and can place all of our routes within it.

```js
import { BrowserRouter as Router,Route } from 'react-router-dom'

export default function App(){
   return (
      <Router>
      <Switch>
        <Route path="/" component={component}/>
        <Route path="*" component={NotFound}/>
      </Switch>
      </Router>
   )
}
```

**404 Route**:-If a user attempts to go to a page for which we don't have a defined route,we can create a route and then set the path to an asterisk(*).

```js
import { BrowserRouter as Router,Route } from 'react-router-dom'

export default function App(){
   return (
      <Router>
      <Route path="/" component={component}/>
      <Route path="*" component={NotFound}/>
      </Router>
   )
}
```

**Link component**:- It accepts to prop,which specifies where we want the link to navigate our user to.

```js
import { Link} from 'react-router-dom'

export default function NavBar(){
   return (
      <nav>
      <Link to="/"> Home <Link/>
      <Link to="/about"> About <Link/>
      </nav>
   )
}
```

**NavLink component**:-The NavLink component is useful in the event that we want to apply some special styles.If we are on the current path that links points to,this allows us to create some active links styles to tell our users,by looking at our link,what page they are on.

```js
import { NavLink} from 'react-router-dom'

export default function NavBar(){
   return (
      <nav>
      <NavLink activeStyle={{ color: "red",fontWeight: "bold"}} to="/"> Home <NavLink/>
      <NavLink activeClassName="active" to="/about"> About <NavLink/>
      </nav>
   )
}
```

**Redirect component**:-

**useHistory Hook**:- Called at the top of any component declared within our router component and get back *history* data,which includes information such as location associated with our component.This tells us all about where the user currently is,ie pathname they're on,as well as any query parameters that might be appended to our url.All of location data is accessible from location.

```js
import { useHistory } from 'react-router-dom'

function About(){
   const history = useHistory();
   console.log(history.location.pathname);
}
```

Additionally,history object directly includes helpful methods that allows us to programmatically direct our user to different pages in our application.We can push users from one page to another using history.push.When we use push method,we just need to supply the path that we want to take our users to using this method.It adds this new page on to the stack of our history.

```js
import { useHistory } from 'react-router-dom'

function About(){
   const history = useHistory();
   return(
      <>
      <button onClick={()=> history.push('/')}>Go to Home</button>
      </>
   )
}
```

We can also redirect our users with history.replace,which also accepts a path value,but clears out everything in history,after navigation is performed.Helpfu; for situations where going back in history is no longer needed,such as after users have been logged out.

**useLocation Hook**:- Used if you want location data or when you want to get back all of location data on an object that is identical to the data provided on history.location.

NOTE:- If you need both location data and to use history to programmatically navigate your user,make use of useHistory.

```js
import { useLocation } from 'react-router-dom'

function About(){
   const location = useLocation();
   console.log(location.pathname);
}
```

**useParams Hook and Dynamic Routes**:-Dynamic routes are routes that are not fixed and determined,but can be any number of characters.
To declare a route parameter on a given route,it must be prefixed with a colon(:).

```js
import { useLocation } from 'react-router-dom'

import { BrowserRouter as Router,Route } from 'react-router-dom'

export default function App(){
   return (
      <Router>
      <Route path="/" component={component}/>
      <Route path="/product/:prodId" component={Product}/>
      </Router>
   )
}
```

We can access any route params of a declared route with it's associated component using the *useParams* hook.

```js
import { useRouteMatch } from 'react-router-dom'

function Product(){
   const { prodId } = useParams();

   React.useEffect(() => {
      fetch(`http://localhost:8080/product/${prodId}`)
      .then((res)=> res.json())
   },[prodId]);
}
```

**useRouteMatch Hook**:- Used if we want to know whether given component is on certain page.

```js
import { useRouteMatch } from 'react-router-dom'

function About(){

   const location = useRouteMatch('/blog/:id');
   //display,hide content,or...
}
```

Useful in conditions in which we want to show something specific based off of whether we're on a certain route or not.

## Reach Router

Reach Router is a small, simple router for React that borrows from React Router, Ember, and Preact Router. Reach Router has a small footprint, supports only simple route patterns by design, and has strong (but experimental) accessibility features.
