# Web API(Browser API)

These are built-in interfaces provided natively by modern browsers.They extend the capability of Javascript allowing code running on web page to interact with hardware or the browser environment.
Synonym for JavaScript written to run in a web browser.
Includes:

1. Documents
2. Components
3. Graphics
4. Networking
5. Web Storage
6. Threads
7. Console 
8. Fecth API
9. Geolocation API

## The Console API

- `console.log()` - Used to log general information or messages to the console.It's commonly used for debugging purposes or to display info about state of your app.
It prints the message to the screen.You can see the output of your code.

```js
console.log("Hello")
//output - Hello
```

- `console.error()`:- Outputs an error message to the console.Useful for logging errors that occur during execution of your code.
Dispalys an error message to the console

```js
console.error("Error")
//Display error message with red icon
```

- `console.table()`:- Displays tabular data as a table in the console.Useful for visualizing structured data such as arrays or objects in more organized formats.
Dispalys data in tabe format

```js
let users ={
    {name:"collo", age: 21}
    {name:"Collins", age:24}
};

console.table(users);
```

- `console.assert()`:- Writes an error message to the console if the specified condition is false.commonly used for adding assertions to your code to validate assumptions and catch potential bugs.
Logs a message if provided assertion is false.

```js
let age=8;
consoe.assert(age>=18, "User is not an adult")
```

`console.clear()` - Clears the console

```js
console.clear();
```

`console.group() & console.groupEnd()` - Groups logging statements together

```js
console.group("User details")
 console.log("Name: Collo")
 console.log("Age: 21")
console.groupEnd();
```

- `console.warn()`:- Outputs a warning message to the console.Warnings are often used to alert develpoers about potential issues in their code that may not necessarily cause errors but could lead to unexpected behaviours.

```js
console.warn("Warning message..")
```

- `console.info()`:- Outputs an informational message to the console.Similar to console.log(), but it's typically used for logging info that is informative or descriptive in nature.

```js
let users={
    fname:"collo", age:22
};

console.table(users)

console.clear()

let age= 17;
console.assert(age>=18, "Is an adult")

console.group("User details")
 console.log("Name: Collo")
 console.log("Age: 21")
console.groupEnd();
console.group("Purchase details")
 console.log("Product: laptop")
 console.log("Price: 2100")
console.groupEnd();
```

- The` console.dir()` method shows a list of all the properties of the specified object.


---------


## Web Fetch API

The Fetch API is a built-in JavaScript interface that allows you to make asynchronous HTTP requests to fetch resources from the web. The Fetch API is typically used to retrieve data from a web server or API endpoint, but it can also be used to send data to the server using the HTTP POST method.
Fetch is a function used for making HTTP requests to fetch resources.It simplifies asynchronous data fetching in Javascript and used for intercating with APIs to retrieve and send data asynchronously over the web.

Sytax:-

```js
fetch(uri, {options})
```

options - method e.g GET,POST

Here's an example of how to use the Fetch API to retrieve data from a web API:

```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

fetchData();
async function fetchData(){
   try{
      const response = await fetch("https://api.stackexchange.com/2.2/questions/featured?order=desc&sort=activity&site=stackoverflow")
      const data = await response.json()

   } catch(error){
      //
   }
}
```

In this example, we use the fetch method to send an HTTP GET request to the URL https://api.example.com/data. The fetch method returns a Promise that resolves to a Response object, which contains information about the HTTP response.
We then use the json method on the Response object to parse the response body as JSON data, and return another Promise that resolves to the parsed JSON data.
Finally, we use the then method to log the parsed JSON data to the console, and the catch method to log any errors that occur during the fetch operation.

Here's another example that shows how to use the Fetch API to send data to a server using the HTTP POST method:

```javascript
const data = {
  name: 'John Doe',
  email: 'johndoe@example.com',
  message: 'Hello world!'
};

fetch('https://api.example.com/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

In this example, we define an object data that contains some data we want to send to the server. We then use the fetch method to send an HTTP POST request to the URL https://api.example.com/contact, with the request body set to the JSON stringified version of the data object.
We also include a Content-Type header with the value application/json to indicate that we are sending JSON data in the request body.
As before, we use the then method to parse the JSON response data and log it to the console, and the catch method to handle any errors that occur during the fetch operation.

Visit the following resources to learn more:

- [@article@Fetch API MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [@article@A Simple Guide to JavaScript Fetch API](https://www.javascripttutorial.net/javascript-fetch-api/)
- [@article@Introduction to Fetch](https://web.dev/introduction-to-fetch/)
- [@video@JavaScript Fetch API](https://www.youtube.com/watch?v=-ZI0ea5O2oA)


------

## Web STorage API

*(localStorage)* -  The localStorage object allows web applications to store key-value pairs locally within the user's browser. It provides a simple way to store and retrieve data persistently.Persistent storage in browser memory.

```js
//store data
localStorage.setItem('key', 'value')
// Retrieve data
const storedValue = localStorage.getItem('key')
//Remove data
localStorage.removeItem('key')
```

*sessionStorge* - Session specific storage.

```js
sessionStorage.setItem('key','value')
const storedValue = sessionStorage.getItem('key')
sessionStorage.removeItem('key')
```


----------

`encodeURIComponent() function` - The encodeURIComponent() function is used to encode special characters in a URL component. It ensures that the component can be included in a URL without causing any parsing errors.

`decodeURIComponent() function` - The decodeURIComponent() function is used to decode URL-encoded components.It converts URL-encoded characters back to their original form.


--------

## Web Speech API

```js
const textToSpeak = "Hello There"
const utterance = new SpeechSynthesisUtterance(textToSpeak)
window.speechSynthesis.speak(utterance)
```

-------

## Web Geolocation API

Get user location

```js
navigator.geolocation.getCurrentPosition(
  position => {
    console.log(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`)
  },
  error => {
    concole.error()
  }
)
```


------

## Web Canvas API

```js
```

----


## Web Audio API

```js

```

-------

## Web Sockets API

-------

## Web IndexedDB API

----------

## Web File API

---------

## Web Notification API


--------

## Web Workers API

---------

## Web Intersectio Observer API

--------

## Web Mutation Observer API

-------

## Web Pointer Lock API

--------

## Web Battery Status API

--------

## Web Gamepad API

--------

## Web DeviceOrientation and Motion API

--------

## Web Push API

---------

## Web Payment Request API\

