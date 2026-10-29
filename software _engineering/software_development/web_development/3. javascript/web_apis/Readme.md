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
console.log("Hello");
//output - Hello
```

- `console.error()`:- Outputs an error message to the console.Useful for logging errors that occur during execution of your code.
  Dispalys an error message to the console

```js
console.error("Error");
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
let age = 8;
consoe.assert(age >= 18, "User is not an adult");
```

`console.clear()` - Clears the console

```js
console.clear();
```

`console.group() & console.groupEnd()` - Groups logging statements together

```js
console.group("User details");
console.log("Name: Collo");
console.log("Age: 21");
console.groupEnd();
```

- `console.warn()`:- Outputs a warning message to the console.Warnings are often used to alert develpoers about potential issues in their code that may not necessarily cause errors but could lead to unexpected behaviours.

```js
console.warn("Warning message..");
```

- `console.info()`:- Outputs an informational message to the console.Similar to console.log(), but it's typically used for logging info that is informative or descriptive in nature.

```js
let users = {
  fname: "collo",
  age: 22,
};

console.table(users);

console.clear();

let age = 17;
console.assert(age >= 18, "Is an adult");

console.group("User details");
console.log("Name: Collo");
console.log("Age: 21");
console.groupEnd();
console.group("Purchase details");
console.log("Product: laptop");
console.log("Price: 2100");
console.groupEnd();
```

- The` console.dir()` method shows a list of all the properties of the specified object.

---

## Web Fetch API

The Fetch API is a built-in JavaScript interface that allows you to make asynchronous HTTP requests to fetch resources from the web. The Fetch API is typically used to retrieve data from a web server or API endpoint, but it can also be used to send data to the server using the HTTP POST method.
Fetch is a function used for making HTTP requests to fetch resources.It simplifies asynchronous data fetching in Javascript and used for intercating with APIs to retrieve and send data asynchronously over the web.

Sytax:-

```js
fetch(uri, { options });
```

options - method e.g GET,POST

Here's an example of how to use the Fetch API to retrieve data from a web API:

```javascript
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

fetchData();
async function fetchData() {
  try {
    const response = await fetch(
      "https://api.stackexchange.com/2.2/questions/featured?order=desc&sort=activity&site=stackoverflow",
    );
    const data = await response.json();
  } catch (error) {
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
  name: "John Doe",
  email: "johndoe@example.com",
  message: "Hello world!",
};

fetch("https://api.example.com/contact", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

In this example, we define an object data that contains some data we want to send to the server. We then use the fetch method to send an HTTP POST request to the URL https://api.example.com/contact, with the request body set to the JSON stringified version of the data object.
We also include a Content-Type header with the value application/json to indicate that we are sending JSON data in the request body.
As before, we use the then method to parse the JSON response data and log it to the console, and the catch method to handle any errors that occur during the fetch operation.

Visit the following resources to learn more:

- [@article@Fetch API MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [@article@A Simple Guide to JavaScript Fetch API](https://www.javascripttutorial.net/javascript-fetch-api/)
- [@article@Introduction to Fetch](https://web.dev/introduction-to-fetch/)
- [@video@JavaScript Fetch API](https://www.youtube.com/watch?v=-ZI0ea5O2oA)

---

## Web STorage API

The Web Storage API provides mechanisms for storing key-value pairs in a web browser. It includes two storage objects: localStorage and sessionStorage, which allow you to save data on the client side and persist it across multiple browser sessions, respectively.

The Web Storage API is designed to be simple and easy to use, and it is widely supported across modern web browsers. It is often used as an alternative to cookies, as it allows for larger amounts of data to be stored and is more efficient in terms of performance.

Visit the following resources to learn more:

- [@article@Web Storage API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)
- [@feed@Explore top posts about Storage](https://app.daily.dev/tags/storage?ref=roadmapsh)

_(localStorage)_ - The localStorage object allows web applications to store key-value pairs locally within the user's browser. It provides a simple way to store and retrieve data persistently.Persistent storage in browser memory.

```js
//store data
localStorage.setItem("key", "value");
// Retrieve data
const storedValue = localStorage.getItem("key");
//Remove data
localStorage.removeItem("key");
```

_sessionStorge_ - Session specific storage.

```js
sessionStorage.setItem("key", "value");
const storedValue = sessionStorage.getItem("key");
sessionStorage.removeItem("key");
```

---

`encodeURIComponent() function` - The encodeURIComponent() function is used to encode special characters in a URL component. It ensures that the component can be included in a URL without causing any parsing errors.

`decodeURIComponent() function` - The decodeURIComponent() function is used to decode URL-encoded components.It converts URL-encoded characters back to their original form.

---

## Web Speech API

```js
const textToSpeak = "Hello There";
const utterance = new SpeechSynthesisUtterance(textToSpeak);
window.speechSynthesis.speak(utterance);
```

---

## Web Geolocation API

The Geolocation API is a web API that provides access to the device's location data, such as latitude and longitude. It allows web developers to build location-based applications, such as mapping and location sharing, by using the device's GPS, Wi-Fi, and other sensors to determine the user's location.

To use the Geolocation API, a web page must first request permission from the user to access their location. If permission is granted, the page can then use the `navigator.geolocation` object to access the device's location data. The API provides several methods for getting the user's current location, watching for location changes, and calculating distances between two locations.

Visit the following resources to learn more:

- [@article@Geolocation API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)

Get user location

```js
navigator.geolocation.getCurrentPosition(
  (position) => {
    console.log(
      `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`,
    );
  },
  (error) => {
    concole.error();
  },
);
```

---

## Web Canvas API

```js

```

---

## Web Audio API

```js

```

---

## Web Sockets API

---

## Web IndexedDB API

---

## Web File API

---

## Web Notification API

The Notifications API is a web API that allows web pages to display system-level notifications to the user. These notifications can be used to alert the user of important events, such as new messages or updates, even when the web page is not open in the browser.

To use the Notifications API, a web page must first request permission from the user to display notifications. If permission is granted, the page can then use the `Notification` constructor to create a new notification and display it to the user. The notification can include a title, body text, and an icon, and it can be customized with options such as a timeout and a click action.

Visit the following resources to learn more:

- [@article@Notifications API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API)
- [@video@Create React Notifications With the Web Notifications API](https://www.youtube.com/watch?v=mfrppinfmz0)

---

## Web Workers API

---

## Web Intersectio Observer API

---

## Web Mutation Observer API

---

## Web Pointer Lock API

---

## Web Battery Status API

---

## Web Gamepad API

---

## Web DeviceOrientation and Motion API

**Device Orientation API** - The Device Orientation API is a web API that provides access to the device's orientation and motion data, such as its pitch, roll, and yaw. It allows web developers to build applications that can respond to the device's orientation and motion, such as augmented reality and motion-controlled games.

To use the Device Orientation API, a web page must first request permission from the user to access the device's orientation data. If permission is granted, the page can then use the DeviceOrientationEvent object to access the device's orientation data and respond to changes in orientation. The API provides several properties for accessing the device's orientation and motion data, as well as events for detecting changes in orientation.

The Device Orientation API is supported by most modern web browsers and is often used in conjunction with other APIs, such as the Geolocation API, to build location-based applications.

Visit the following resources to learn more:

- [@article@Device Orientation API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Device_orientation_events)

---

## Web Push API

---

## Web Payment Request API

The Payment Request API is a web API that allows web developers to build checkout flows within their web applications. It provides a standardized, browser-based interface for collecting payment and shipping information from the user, and it supports a wide range of payment methods, including credit cards, debit cards, and digital wallets.

To use the Payment Request API, a web page must first create a `PaymentRequest` object and specify the payment and shipping options that are available to the user. The page can then invoke the Payment Request UI by calling the `show()` method on the `PaymentRequest` object. The user can then select their preferred payment and shipping options and confirm the payment, at which point the Payment Request API will return a payment response object that can be used to complete the transaction.

The Payment Request API is supported by most modern web browsers and is designed to be simple and efficient for both the developer and the user.

Visit the following resources to learn more:

- [@article@Payment Request API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Payment_Request_API)
