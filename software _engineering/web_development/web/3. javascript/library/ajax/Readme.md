# Ajax

AJAX is an acronym for Asynchronous JavaScript and XML. It is a group of inter-related technologies like JavaScript, DOM, XML, HTML/XHTML, CSS, XMLHttpRequest etc.AJAX allows you to send and receive data asynchronously without reloading the web page. So it is fast.

AJAX allows you to send only important information to the server not the entire page. So only valuable data from the client side is routed to the server side. It makes your application interactive and faster.

There are too many web applications running on the web that are using ajax technology like gmail, facebook,twitter,google map, youtube etc.

AJAX (Asynchronous JavaScript and XML) is a technique used in web development to create more dynamic and interactive web pages. AJAX allows web pages to retrieve and send data to a server asynchronously, meaning that the page can be updated without requiring a full page reload.

AJAX is commonly used to fetch data from a server and update the content of a web page without requiring the user to refresh the page. This can lead to a smoother and more responsive user experience, as the page can be updated in real-time as the user interacts with it.

Here's an example of using AJAX in JavaScript to fetch data from a server:

```javascript
const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    console.log(data);
  }
};

xhr.open('GET', 'https://example.com/data.json');
xhr.send();
```

In this example, we create a new XMLHttpRequest object, which is a built-in JavaScript object that allows us to communicate with a server over HTTP. We set the onreadystatechange property of the object to a callback function that will be called whenever the state of the request changes.

When the readyState property of the request object is equal to 4 (indicating that the request is complete) and the status property is equal to 200 (indicating a successful response from the server), we parse the response text as JSON and log it to the console.

We then use the open() method of the request object to specify the HTTP method (GET in this case) and the URL of the resource we want to fetch (https://example.com/data.json). Finally, we use the send() method to send the request to the server.

When the server responds, the onreadystatechange callback function is called, and we process the response as necessary.

Note that there are also many libraries and frameworks available that simplify the process of making AJAX requests in JavaScript, such as jQuery, Axios, and fetch.


Ajax is the technique that lets us send and receive the data asynchronously from the servers e.g. updating the user profile or asynchronously fetching the list of searched products without reloading the page.

Visit the following resources to learn more:

- [Fetch API MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [A Simple Guide to JavaScript Fetch API](https://www.javascripttutorial.net/javascript-fetch-api/)
- [Introduction to Fetch](https://web.dev/introduction-to-fetch/)
- [JavaScript Fetch API](https://www.youtube.com/watch?v=-ZI0ea5O2oA)
