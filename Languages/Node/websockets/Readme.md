The WebSocket API makes it possible to open a two-way interactive communication session between the user's browser and a server. With this API, you can send messages to a server and receive responses without having to poll the server for a reply.

The WebSocket API provides two alternative mechanisms for creating and using web socket connections: the WebSocket interface and the WebSocketStream interface.

    The WebSocket interface is stable and has good browser and server support. However it doesn't support backpressure. As a result, when messages arrive faster than the application can process them it will either fill up the device's memory by buffering those messages, become unresponsive due to 100% CPU usage, or both.
    The WebSocketStream interface is a Promise-based alternative to WebSocket. It uses the Streams API to handle receiving and sending messages, meaning that socket connections can take advantage of stream backpressure automatically, regulating the speed of reading or writing to avoid bottlenecks in the application. However, WebSocketStream is non-standard and currently only supported in one rendering engine.

Additionally, the WebTransport API is expected to replace the WebSocket API for many applications. WebTransport is a versatile, low-level API that provides backpressure and many other features not supported by either WebSocket or WebSocketStream, such as unidirectional streams, out-of-order delivery, and unreliable data transmission via datagrams. WebTransport is more complex to use than WebSockets and its cross-browser support is not as wide, but it enables the implementation of sophisticated solutions. If standard WebSocket connections are a good fit for your use case and you need wide browser compatibility, you should employ the WebSockets API to get up and running quickly. However, if your application requires a non-standard custom solution, then you should use the WebTransport API.

Note: While a WebSocket connection is functionally somewhat similar to standard Unix-style sockets, they are not related.
Interfaces

WebSocket

    The primary interface for connecting to a WebSocket server and then sending and receiving data on the connection.
WebSocketStream Non-standard

    Promise-based interface for connecting to a WebSocket server; uses streams to send and receive data on the connection.
CloseEvent

    The event sent by the WebSocket object when the connection closes.
MessageEvent

    The event sent by the WebSocket object when a message is received from the server.

Related HTTP headers

The HTTP headers are used in the WebSocket handshake:

Sec-WebSocket-Key

    An HTTP request header that contains a nonce from the client. This is used in the WebSocket opening handshake to verify that the client explicitly intends to open a WebSocket. It is added automatically by the browser.
Sec-WebSocket-Accept

    An HTTP response header used in the WebSocket opening handshake to indicate that the server is willing to upgrade to a WebSocket connection. The value in the directive is calculated from the value of Sec-WebSocket-Key in the corresponding request.
Sec-WebSocket-Version

    An HTTP header that in requests indicates the version of the WebSocket protocol understood by the client. In responses, it is sent only if the requested protocol version is not supported by the server, and lists the versions that the server supports.
Sec-WebSocket-Protocol

    An HTTP header that in requests indicates the sub-protocols supported by the client in preferred order. In responses, it indicates the the sub-protocol selected by the server from the client's preferences.
Sec-WebSocket-Extensions

    An HTTP header that in requests indicates the WebSocket extensions supported by the client in preferred order. In responses, it indicates the extension selected by the server from the client's preferences.

Guides

    Writing WebSocket client applications
    Writing WebSocket servers
    Writing a WebSocket server in C#
    Writing a WebSocket server in Java
    Writing a WebSocket server in JavaScript (Deno)
    Using WebSocketStream to write a client

Tools

    AsyncAPI: A specification for describing event-driven architectures based on protocols like WebSocket. You can use it to describe WebSocket-based APIs just as you would describe REST APIs with the OpenAPI specification. Learn why you should consider using AsyncAPI with WebSocket and how to do so.
    µWebSockets: Highly scalable WebSocket server and client implementation for C++11 and Node.js.
    Socket.IO: A long polling/WebSocket based third party transfer protocol for Node.js.
    SocketCluster: A pub/sub WebSocket framework for Node.js with a focus on scalability.
    WebSocket-Node: A WebSocket server API implementation for Node.js.
    Total.js: Web application framework for Node.js (Example: WebSocket chat)
    SignalR: SignalR will use WebSockets under the covers when it's available, and gracefully fallback to other techniques and technologies when it isn't, while your application code stays the same.
    Caddy: A web server capable of proxying arbitrary commands (stdin/stdout) as a websocket.
    ws: a popular WebSocket client & server library for Node.js.
    cowboy: Cowboy is a small, fast and modern HTTP server for Erlang/OTP with WebSocket support.
    ZeroMQ: ZeroMQ is embeddable networking library that carries messages across in-process, IPC, TCP, UDP, TIPC, multicast and WebSocket.
    WebSocket King: A client tool to help develop, test and work with WebSocket servers.
    PHP WebSocket Server: Server written in PHP to handle connections via websockets wss:// or ws:// and normal sockets over ssl://, tcp://
    Django Channels: Django library that adds support for WebSockets (and other protocols that require long running asynchronous connections).
    (Phoenix) Channels: Scalable real-time communication using WebSocket in Elixir Phoenix framework.
    Phoenix LiveView: Real-time interactive web experiences through WebSocket in Elixir Phoenix framework.
    Flask-SocketIO: gives Flask applications access to low latency bi-directional communications between the clients and the server.
    Gorilla WebSocket: Gorilla WebSocket is a Go implementation of the WebSocket protocol.
