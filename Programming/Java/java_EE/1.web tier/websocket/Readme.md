# WebSocket

`WebSocket` is an application protocol that provides full-duplex communications between two peers over the TCP protocol.
In a WebSocket application, the server publishes a WebSocket `endpoint`, and the client uses the endpoint's URI to connect to the server. The WebSocket protocol is symmetrical after the connection has been established; the client and the server can send messages to each other at any time while the connection is open, and they can close the connection at any time. Clients usually connect only to one server, and servers accept connections from multiple clients.

In the traditional request-response model used in HTTP, the client requests resources,and the server provides responses. The exchange is always initiated by the client; the server cannot send any data without the client requesting it first. This model worked well for the World Wide Web when clients made occasional requests for documents that changed infrequently, but the limitations of this approach are increasingly relevant as content changes quickly and users expect a more interactive experience on the Web. The WebSocket protocol addresses these limitations by providing a full-duplex communication channel between the client and the server. Combined with other client technologies, such as JavaScript and HTML5, WebSocket enables web applications to deliver a richer user experience.

The WebSocket protocol has two parts: handshake and data transfer. The client initiates the handshake by sending a request to a WebSocket endpoint using its URI.The handshake is compatible with existing HTTP-based infrastructure: web servers interpret it as an HTTP connection upgrade request. An example handshake from a client looks like this:

```http
GET /path/to/websocket/endpoint HTTP/1.1
Host: localhost
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: xqBt3ImNzJbYqRINxEFlkg==
Origin: http://localhost
Sec-WebSocket-Version: 13
```

An example handshake from the server in response to the client looks like this:

```http
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: K7DJLdLooIwIG/MOpvWFB3y3FE8=
```

The server applies a known operation to the value of the Sec-WebSocket-Key header to generate the value of the Sec-WebSocket-Accept header. The client applies the same operation to the value of the Sec-WebSocket-Key header, and the connection is established successfully if the result matches the value received from the server. The client and the server can send messages to each other after a successful handshake.
WebSocket supports text messages (encoded as UTF-8) and binary messages. The control frames in WebSocket are close, ping, and pong (a response to a ping frame). Ping and pong frames may also contain application data.

WebSocket endpoints are represented by URIs that have the following form:
ws://host:port/path?query
wss://host:port/path?query

The ws scheme represents an unencrypted WebSocket connection, and the wss scheme represents an encrypted connection. The port component is optional; the default port number is 80 for unencrypted connections and 443 for encrypted connections. The path component indicates the location of an endpoint within a server. The query component is optional.
Modern web browsers implement the WebSocket protocol and provide a JavaScript API to connect to endpoints, send messages, and assign callback methods for WebSocket events (such as opened connections, received messages, and closed connections).

## Java API for WebSocket (JSR 356)

The Java EE platform includes the Java API for WebSocket (JSR 356), which enables you to create, configure, and deploy WebSocket endpoints in web applications. The WebSocket client API specified in JSR 356 also enables you to access remote WebSocket endpoints from any Java application.
It was introduced in Java EE 7 under JSR 356.

The Java API for WebSocket consists of the following packages.

1. The javax.websocket.server package contains annotations, classes, and interfaces to create and configure server endpoints.
2. The javax.websocket package contains annotations, classes, interfaces, and exceptions that are common to client and server endpoints.

WebSocket endpoints are instances of the javax.websocket.Endpoint class. 
The Java API for WebSocket enables you to create two kinds of endpoints: 

1. programmatic endpoints - To create a programmatic endpoint, you extend the Endpoint class and override its lifecycle methods.
2. annotated endpoints - To create an annotated endpoint, you decorate a Java class and some of its methods with the annotations.

After you have created an endpoint,you deploy it to an specific URI in the application so that remote clients can connect to it.

`NOTE`:- As opposed to servlets, WebSocket endpoints are instantiated multiple times. The container creates an instance of an endpoint per connection to its deployment URI. Each instance is associated with one and only one connection. This facilitates keeping user state for each connection and makes development easier, because there is only one thread executing the code of an endpoint instance at any given time.

## Programmatic Endpoints

The following example shows how to create an endpoint by extending the Endpoint class:

```java
public class EchoEndpoint extends Endpoint {

   @Override
   public void onOpen(final Session session, EndpointConfig config) {
      session.addMessageHandler(new MessageHandler.Whole<String>() {
         @Override
         public void onMessage(String msg) {
            try {
               session.getBasicRemote().sendText(msg);
            } catch (IOException e) { ... }
         }
      });
   }
}
```

This endpoint echoes every message received. The Endpoint class defines three lifecycle methods: onOpen, onClose, and onError. The EchoEndpoint class implements the onOpen method, which is the only abstract method in the Endpoint class.
The Session parameter represents a conversation between this endpoint and the remote endpoint. The addMessageHandler method registers message handlers, and the getBasicRemote method returns an object that represents the remote endpoint. The Session interface is covered in detail in the rest of this chapter.

The message handler is implemented as an anonymous inner class. The onMessage method of the message handler is invoked when the endpoint receives a text message.
To deploy this programmatic endpoint, use the following code in your Java EE application:
ServerEndpointConfig.Builder.create(EchoEndpoint.class, "/echo").build();

When you deploy your application, the endpoint is available at
ws://<host>:<port>/<application>/echo; for example,
ws://localhost:8080/echoapp/echo.

## Annotated Endpoints

The following example shows how to create the same endpoint from Programmatic Endpoints using annotations instead:

```java
@ServerEndpoint("/echo")
public class EchoEndpoint {
   @OnMessage
   public void onMessage(Session session, String msg) {
      try {
         session.getBasicRemote().sendText(msg);
      } catch (IOException e) { ... }
   }
}
```

The annotated endpoint is simpler than the equivalent programmatic endpoint, and it is deployed automatically with the application to the relative path defined in the
ServerEndpoint annotation. Instead of having to create an additional class for the message handler, this example uses the OnMessage annotation to designate the method
invoked to handle messages.

Lists of the annotations available in the javax.websocket package to designate the methods that handle lifecycle events includes:-

1. OnOpen - Connection opened
2. OnMessage - Message received
3. OnError - Connection error
4. OnClose - Connection closed

```java
@OnOpen
public void open(Session session,EndpointConfig conf) { }

@OnMessage
public void message(Session session,String msg) { }

@OnError
public void error(Session session,Throwable error) { }

@OnClose
public void close(Session session,CloseReason reason) { }
```

## Sending and Receiving Messages

WebSocket endpoints can send and receive text and binary messages. In addition, they can also send ping frames and receive pong frames.
