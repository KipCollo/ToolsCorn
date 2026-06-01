# Fetching APIs Data

1. Fetch API - The Fetch API provides a JavaScript interface for making HTTP requests and processing the responses.Fetch is the modern replacement for XMLHttpRequest: unlike XMLHttpRequest, which uses callbacks, Fetch is promise-based and is integrated with features of the modern web such as service workers and Cross-Origin Resource Sharing (CORS).With the Fetch API, you make a request by calling fetch(), which is available as a global function in both window and worker contexts. You pass it a Request object or a string containing the URL to fetch, along with an optional argument to configure the request.The fetch() function returns a Promise which is fulfilled with a Response object representing the server's response. You can then check the request status and extract the body of the response in various formats, including text and JSON, by calling the appropriate method on the response.

## To make a request, call fetch()

* a definition of the resource to fetch. This can be any one of:
    1. a string containing the URL
    2. an object, such an instance of URL, which has a stringifier that produces a string containing the URL
    3. a Request instance

```js
fetch('https://..')
fetch(url, options)
```

* optionally, an object containing options to configure the request.

## Setting the method

By default, fetch() makes a GET request, but you can use the method option to use a different request method:

```js
const response = await fetch("https://example.org/post", {
  method: "POST",
  // ...
});
```

If the mode option is set to no-cors, then method must be one of GET, POST or HEAD.
2. Axios
3. SuperAgent
4. XMLHttpRequest
