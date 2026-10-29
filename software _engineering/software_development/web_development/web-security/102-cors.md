# CORS

Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.

CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.

Visit the following resources to learn more:

- [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
- [CORS in 100 Seconds](https://www.youtube.com/watch?v=4KHiSt0oLJ0)
- [CORS in 6 minutes](https://www.youtube.com/watch?v=PNtFSVU-YTI)
- [Understanding CORS](https://rbika.com/blog/understanding-cors)


An example of a cross-origin request: the front-end JavaScript code served from https://domain-a.com uses fetch() to make a request for https://domain-b.com/data.json.
For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts. For example, fetch() and XMLHttpRequest follow the same-origin policy. This means that a web application using those APIs can only request resources from the same origin the application was loaded from unless the response from other origins includes the right CORS headers.

The CORS mechanism supports secure cross-origin requests and data transfers between browsers and servers. Browsers use CORS in APIs such as fetch() or XMLHttpRequest to mitigate the risks of cross-origin HTTP requests.

