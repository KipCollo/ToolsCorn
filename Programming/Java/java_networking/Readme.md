# Networking

The Internet is the global network of millions of computers. Your computer can connect to the Internet through an Internet Service Provider (ISP) using a dialup, DSL, or cable modem, or through a local area network (LAN).
When a computer needs to communicate with another computer, it needs to know the other computer’s address.

An `Internet Protocol (IP)` address uniquely identifies the computer on the Internet. An IP address consists of four dotted decimal numbers between 0 and 255, such as 130.254.204.31. Since it is not easy to remember so many numbers, they are often mapped to meaningful names called domain names, such as liang.armstrong.edu. Special servers called Domain Name Servers (DNS) on the Internet translate host names into IP addresses.

When a computer contacts liang.armstrong.edu, it first asks the DNS to translate this domain name into a numeric IP address and then sends the request using the IP address.
The Internet Protocol is a low-level protocol for delivering data from one computer to another across the Internet in packets. Two higher-level protocols used in conjunction with the IP are the Transmission Control Protocol (TCP) and the User Datagram Protocol (UDP).

`TCP` enables two hosts to establish a connection and exchange streams of data. TCP guarantees delivery of data and also guarantees that packets will be delivered in the same order in which they were sent.
`UDP` is a standard, low-overhead, connectionless, host-to-host protocol that is used over the IP. UDP allows an application program on one computer to send a datagram to an application program on another computer.

Java supports both stream-based and packet-based communications. Stream-based communications use TCP for data transmission, whereas packet-based communications use UDP.
Since TCP can detect lost transmissions and resubmit them, transmissions are lossless and reliable. UDP, in contrast, cannot guarantee lossless transmission. Stream-based communications are used in most areas of Java programming.

Common networking tasks include:

1. Browsing pages on the Web
2. Parsing and rendering HTML
3. Sending email with SMTP
4. Receiving email with POP and IMAP
5. Writing multithreaded servers
6. Installing new protocol and content handlers into browsers
7. Encrypting communications for confidentiality, authentication, and guaranteed message integrity
8. Designing GUI clients for network services
9. Posting data to CGI programs
10. Looking up hosts using DNS
11. Downloading files with anonymous FTP
12. Connecting sockets for low-level network communication
13. Distributing applications across multiple systems with Remote Method Invocation

With networks, a single program can retrieve information stored in millions of computers located anywhere in the world. A single program can communicate with tens of millions of people. A single program can harness the power of many computers to work on one problem.



## Java Networking


Java's core library includes classes for communicating with Internet hosts using the TCP and UDP protocols of the TCP/IP family. You just tell Java what IP address and port you want, and Java handles the low-level details.
A Java program can connect to a network time-server to synchronize itself with an atomic clock.A Java program can speak any custom protocols it needs to speak, including the one to control the HAWC.

Once a program has connected to a server, the local program must understand the protocol that the remote server speaks and properly interpret the data the server sends back.

Java Networking is a concept of connecting two or more computing devices together so that we can share resources.
When computing devices such as laptops, desktops, servers, smartphones, and tablets and an eternally-expanding arrangement of IoT gadgets such as cameras, door locks, doorbells, refrigerators, audio/visual systems, thermostats, and various sensors are sharing information and data with each other is known as networking.
With networks, a single program can regain information stored in millions of computers positioned anywhere in the world. Java Networking is a notion of combining two or more computing devices together to share resources.

Java Socket Programming provides facility to share data between different computing devices.

- Advantage of Java Networking :-
    1. sharing resources
    2. centralized software management

All the Java program communications over the network are done at the application layer. 
The `java.net` package of the J2SE APIs comprises various classes and interfaces that execute the low-level communication features, enabling the user to formulate programs that focus on resolving the problem.

The java.net Package Supports 2 Protocols:

- TCP:- Transmission Control Protocol provides reliable communication between the sender and receiver. TCP is used along with the Internet Protocol referred as TCP/IP.
- UDP:- User Datagram Protocol provides a connection-less protocol service by allowing packet of data to be transferred along two or more nodes

Some of the widely used java networking terminologies are as follows:

1. IP Address- IP address is a unique number assigned to a node of a network e.g. 192.168.0.1. It is composed of octets that range from 0 to 255. It is a logical address that can be changed.
2. Protocol- A protocol is a set of rules basically that is followed for communication. For example: TCP, FTP, Telnet, SMTP, POP, etc.
3. Port Number- The port number is used to uniquely identify different applications. It acts as a communication endpoint between applications. The port number is associated with the IP address for communication between two applications.
4. MAC Address- MAC (Media Access Control) Address is a unique identifier of NIC (Network Interface Controller). A network node can have multiple NIC but each with unique MAC. The main difference between MAC and IP address is that, MAC Address is used to ensure the physical address of computer. It uniquely identifies the devices on a network. While IP address are used to uniquely identifies the connection of network with that device take part in a network.
5. Socket- A socket is one endpoint of a two-way communication connection between the two applications running on the network. The socket mechanism presents a method of inter-process communication (IPC) by setting named contact points between which the communication occurs. A socket is tied to a port number so that the TCP layer can recognize the application to which the data is intended to be sent.
6. Connection-oriented protocol- In connection-oriented protocol, acknowledgement is sent by the receiver. So, it is reliable but slow. The example of connection-oriented protocol is TCP.
7. Connection-less protocol- In connection-less protocol, acknowledgement is not sent by the receiver. So, it is not reliable but fast. The example of connection-less protocol is UDP.
8. Sockets:-Endpoints for communication between two machines.Types:
    - TCP Sockets: Use Socket and ServerSocket classes.
    - UDP Sockets: Use DatagramSocket and DatagramPacket.

The java.net package of the Java programming language includes various classes that provide an easy-to-use means to access network resources. The classes covered in the java.net package are given as follows:-

| <!-- -->    | <!-- -->    | <!-- -->    | <!-- -->    | <!-- -->    |
|-------------|-------------|-------------|-------------|-------------|
|Authenticator|CacheRequest|CacheResponse|ContentHandler|CookieHandler|
|CookieManager|DatagramPacket|DatagramSocket|DatagramSocketImpl|InterfaceAddress|
|JarURLConnection|MulticastSocket|InetSocketAddress|InetAddress|Inet4Address|
|Inet6Address|IDN|HttpURLConnection|HttpCookie|NetPermission|
|NetworkInterface|PasswordAuthentication|Proxy|ProxySelector|ResponseCache|
|SecureCacheResponse|ServerSocket|Socket|SocketAddress|SocketImpl|
|SocketPermission|StandardSocketOptions|URI|URL|URLClassLoader|
|URLConnection|URLDecoder|URLEncoder|URLStreamHandler|-|

1. CacheRequest - The CacheRequest class is used in java whenever there is a need to store resources in ResponseCache. The objects of this class provide an edge for the OutputStream object to store resource data into the cache. 
2. CookieHandler- The CookieHandler class is used in Java to implement a callback mechanism for securing up an HTTP state management policy implementation inside the HTTP protocol handler. The HTTP state management mechanism specifies the mechanism of how to make HTTP requests and responses.
3. CookieManager - The CookieManager class is used to provide a precise implementation of CookieHandler. This class separates the storage of cookies from the policy surrounding accepting and rejecting cookies. A CookieManager comprises a CookieStore and a CookiePolicy.
4. DatagramPacket- The DatagramPacket class is used to provide a facility for the connectionless transfer of messages from one system to another. This class provides tools for the production of datagram packets for connectionless transmission applying the datagram socket class.
5. InetAddress- The InetAddress class is used to provide methods to get the IP address of any hostname. An IP address is expressed by a 32-bit or 128-bit unsigned number. InetAddress can handle both IPv4 and IPv6 addresses.
6. Server Socket- The ServerSocket class is used for implementing system-independent implementation of the server-side of a client/server Socket Connection. The constructor for ServerSocket class throws an exception if it can’t listen on the specified port. For example – it will throw an exception if the port is already being used.
7. Socket- The Socket class is used to create socket objects that help the users in implementing all fundamental socket operations. The users can implement various networking actions such as sending, reading data, and closing connections. Each Socket object built using java.net.Socket class has been connected exactly with 1 remote host; for connecting to another host, a user must create a new socket object.
8. DatagramSocket- The DatagramSocket class is a network socket that provides a connection-less point for sending and receiving packets. Every packet sent from a datagram socket is individually routed and delivered. It can further be practiced for transmitting and accepting broadcast information. Datagram Sockets is Java’s mechanism for providing network communication via UDP instead of TCP.
9. Proxy- A proxy is a changeless object and a kind of tool or method or program or system, which serves to preserve the data of its users and computers. It behaves like a wall between computers and internet users. A Proxy Object represents the Proxy settings to be applied with a connection.
10. URL- The URL class in Java is the entry point to any available sources on the internet. A Class URL describes a Uniform Resource Locator, which is a signal to a “resource” on the World Wide Web. A source can denote a simple file or directory, or it can indicate a more difficult object, such as a query to a database or a search engine.
11. URLConnection- The URLConnection class in Java is an abstract class describing a connection of a resource as defined by a similar URL. The URLConnection class is used for assisting two distinct yet interrelated purposes. Firstly it provides control on interaction with a server(especially an HTTP server) than a URL class. Furthermore, with a URLConnection, a user can verify the header transferred by the server and can react consequently. A user can also configure header fields used in client requests using URLConnection.

The java.net package includes various interfaces also that provide an easy-to-use means to access network resources. The interfaces included in the java.net package are as follows:-

1. CookiePolicy- The CookiePolicy interface in the java.net package provides the classes for implementing various networking applications. It decides which cookies should be accepted and which should be rejected. In CookiePolicy, there are three pre-defined policy implementations, namely ACCEPT_ALL, ACCEPT_NONE, and ACCEPT_ORIGINAL_SERVER.
2. CookieStore- A CookieStore is an interface that describes a storage space for cookies. CookieManager combines the cookies to the CookieStore for each HTTP response and recovers cookies from the CookieStore for each HTTP request.
3. FileNameMap- The FileNameMap interface is an uncomplicated interface that implements a tool to outline a file name and a MIME type string. FileNameMap charges a filename map ( known as a mimetable) from a data file.
4. SocketOption- The SocketOption interface helps the users to control the behavior of sockets. Often, it is essential to develop necessary features in Sockets. SocketOptions allows the user to set various standard options.
5. SocketImplFactory- The SocketImplFactory interface defines a factory for SocketImpl instances. It is used by the socket class to create socket implementations that implement various policies.
6. ProtocolFamily- This interface represents a family of communication protocols. The ProtocolFamily interface contains a method known as name(), which returns the name of the protocol family.

## URI(Uniform Resource Identifier)

`URI`:- This class provides constructors for creating URI instances from their components or by parsing their string forms, methods for accessing the various components of an instance, and methods for normalizing, resolving, and relativizing URI instances. Instances of this class are immutable.

## URL

The URL class in Java is the entry point to any available sources on the internet. A Class URL describes a Uniform Resource Locator, which is a signal to a “resource” on the World Wide Web. A source can denote a simple file or directory, or it can indicate a more difficult object, such as a query to a database or a search engine. URL is a string of text that recognizes all the sources on the Internet, showing us the address of the source, how to interact with it, and recover something from it.

#### Components of a URL

A URL can have many forms. The most general however follows a three-components system-  
 > Protocol – The protocol in a URL defines how information is transported among the host and a client (or web browser).
 > Hostname – The hostname is the name of the device on which the resource exists.
 > File Name – The filename is the pathname to the file on the device.
 > Port Number – The port number is used to identify different applications uniquely. It is typically optional.

 InetAddress: Used to represent an IP address.

```java
import java.net.*;

public class InetAddressExample {
    public static void main(String[] args) throws Exception {
        InetAddress address = InetAddress.getByName("www.google.com");
        System.out.println("IP Address: " + address.getHostAddress());
        System.out.println("Host Name: " + address.getHostName());
    }
}
```

DatagramSocket (UDP): For sending and receiving datagrams.

Sender:

```java
import java.net.*;

public class UDPSender {
    public static void main(String[] args) throws Exception {
        DatagramSocket socket = new DatagramSocket();
        String message = "Hello, UDP Receiver!";
        InetAddress address = InetAddress.getByName("localhost");
        DatagramPacket packet = new DatagramPacket(message.getBytes(), message.length(), address, 5000);
        socket.send(packet);
        socket.close();
    }
}
```

Receiver:

```java
import java.net.*;

public class UDPReceiver {
    public static void main(String[] args) throws Exception {
        DatagramSocket socket = new DatagramSocket(5000);
        byte[] buffer = new byte[1024];
        DatagramPacket packet = new DatagramPacket(buffer, buffer.length);

        socket.receive(packet);
        String message = new String(packet.getData(), 0, packet.getLength());
        System.out.println("Received: " + message);

        socket.close();
    }
}
```

## Client/Server Computing

Networking is tightly integrated in Java. The Java API provides the classes for creating sockets to facilitate program communications over the Internet.
Network programming usually involves a server and one or more clients. The client sends requests to the server, and the server responds. The client begins by attempting to establish a connection to the server. The server can accept or deny the connection. Once a connection is established, the client and the server communicate through sockets.
The server must be running when a client attempts to connect to the server. The server waits for a connection request from the client.
Java Socket programming is used for communication between the applications running on different JRE. Java Socket programming can be connection-oriented or connection-less.

Sockets are the endpoints of logical connections between two hosts and can be used to send and receive data. Java treats socket communications much as it treats I/O operations; thus, programs can read from or write to sockets as easily as they can read from or write to files.
Java provides the `ServerSocket` class for creating a server socket and the `Socket` class for creating a client socket. Two programs on the Internet communicate through a server socket and a client socket using I/O streams.

Socket and ServerSocket classes are used for connection-oriented socket programming and DatagramSocket and DatagramPacket classes are used for connection-less socket programming.


**Server Sockets**:-To establish a server, you need to create a server socket and attach it to a port, which is where the server listens for connections. The port identifies the TCP service on the socket. Port numbers range from 0 to 65536, but port numbers 0 to 1024 are reserved for privileged services.

A server socket waits for requests to come in over the network. It performs some operation based on that request, and then possibly returns a result to the requester.
The actual work of the server socket is performed by an instance of the SocketImpl class.The ServerSocket class defines convenience methods to set and get several socket options. This class also defines the setOption and getOption methods to set and query socket options.

The server creates a server socket and, once a connection to a client is established, connects to the client with a client socket.
For instance, the email server runs on port 25, and the Web server usually runs on port 80.You can choose any port number that is not currently used by other programs. The following statement creates a server socket serverSocket:

```java
ServerSocket serverSocket = new ServerSocket(port);
```

NOTE:- Attempting to create a server socket on a port already in use would cause a java.net.BindException.


For every client connecting to server a new socket is created.

1. Create a server socket on a port, e.g.,8000, using the following statement.
2. Create a socket to connect to a client,using the following statement.
3. A client program uses the following statement to connect to the server.

```java
ServerSocket serverSocket = new ServerSocket(8000);
Socket socket =serverSocket.accept();

Socket socket = new Socket(serverHost, 8000);
```


**Client Sockets**:-After a server socket is created, the server can use the following statement to listen for connections:

```java
Socket socket = new Socket(serverName, port);
```


```java
Socket socket = serverSocket.accept();
```

This statement waits until a client connects to the server socket. The client issues the following statement to request a connection to a server:
connect to client

The client in socket programming must know two information:

1. IP Address of Server
2. Port number.


This statement opens a socket so that the client program can communicate with the server.serverName is the server’s Internet host name or IP address. The following statement creates a socket on the client machine to connect to the host 130.254.204.33 at port 8000:

```java
Socket socket = new Socket("130.254.204.33", 8000)
```

Alternatively, you can use the domain name to create a socket, as follows:

```java
Socket socket = new Socket("liang.armstrong.edu", 8000);
```

When you create a socket with a host name, the JVM asks the DNS to translate the host name into the IP address.

NOTE:- A program can use the host name localhost or the IP address 127.0.0.1 to refer to the machine on which a client is running.

If the server is not running, the client program terminates with a java.net.ConnectException. After it is connected, the client gets input and output streams—wrapped by data input and output streams—in order to receive and send data to the server.

**Data Transmission through Sockets**:- After the server accepts the connection, communication between the server and the client is conducted in the same way as for I/O streams. The statements needed to create the streams and to exchange data between them.

To get an input stream and an output stream, use the getInputStream() and getOutputStream() methods on a socket object. For example, the following statements
create an InputStream stream called input and an OutputStream stream called output from a socket:

```java
InputStream input = socket.getInputStream();
OutputStream output = socket.getOutputStream();
```

The InputStream and OutputStream streams are used to read or write bytes. You can use DataInputStream, DataOutputStream, BufferedReader, and PrintWriter to
wrap on the InputStream and OutputStream to read or write data, such as int, double, or String. The following statements, for instance, create the DataInputStream stream
input and the DataOutput stream output to read and write primitive data values:

```java

DataOutputStream output = new DataOutputStream(socket.getOutputStream());
```

The server can use input.readDouble() to receive a double value from the client and output.writeDouble(d) to send the double value d to the client.

Recall that binary I/O is more efficient than text I/O because text I/O requires encoding and decoding. Therefore, it is better to use binary I/O for transmitting data between a server and a client to improve performance

**The InetAddress Class**:- The InetAddress class is used to encapsulate both the numerical IP address and the domain name for that address. You interact with this class by using the name of an IP host, which is more convenient and understandable than its IP address. The InetAddress class hides the number inside. InetAddress can handle both IPv4 and IPv6 addresses.

This class represents an Internet Protocol (IP) address.
An IP address is either a 32-bit or 128-bit unsigned number used by IP, a lower-level protocol on which protocols like UDP and TCP are built.
An instance of an InetAddress consists of an IP address and possibly its corresponding host name (depending on whether it is constructed with a host name or whether it has already done reverse host name resolution).

`Factory Methods` - The InetAddress class has no visible constructors. To create an InetAddress object, you have to use one of the available factory methods. Factory methods are merely a convention whereby static methods in a class return an instance of that class. This is done in lieu of overloading a constructor with various parameter lists when having unique method names makes the results much clearer. Three commonly used InetAddress factory methods are shown here:

```java
static InetAddress getLocalHost( ) throws UnknownHostException
static InetAddress getByName(String hostName) throws UnknownHostException
static InetAddress[ ] getAllByName(String hostName) throws UnknownHostException
```

The getLocalHost( ) method simply returns the InetAddress object that represents the local host. The getByName( ) method returns an InetAddress for a host name passed to it. If these methods are unable to resolve the host name, they throw an UnknownHostException.

InetAddress also includes the factory method getByAddress( ), which takes an IP address and returns an InetAddress object. Either an IPv4 or an IPv6 address can be used.

The server program can use the InetAddress class to obtain the information about the IP address and host name for the client.
Occasionally, you would like to know who is connecting to the server. You can use the InetAddress class to find the client’s host name and IP address. The InetAddress class
models an IP address. You can use the following statement in the server program to get an instance of InetAddress on a socket that connects to the client.

```java
InetAddress inetAddress = socket.getInetAddress();
System.out.println("Client's IP Address is " + inetAddress.getHostAddress());
```

You can also create an instance of InetAddress from a host name or IP address using the static getByName method. For example, the following statement creates an InetAddress
for the host liang.armstrong.edu.

```java
InetAddress address = InetAddress.getByName("liang.armstrong.edu");
```

Java includes support for both IPv4 and IPv6 addresses. Because of this, two subclasses of InetAddress were created: Inet4Address and Inet6Address. Inet4Address represents a
traditional-style IPv4 address. Inet6Address encapsulates a newer IPv6 address. Because they are subclasses of InetAddress, an InetAddress reference can refer to either. This is one way that Java was able to add IPv6 functionality without breaking existing code or adding many more classes. For the most part, you can simply use InetAddress when working with IP addresses because it can accommodate both styles.

**Serving Multiple Clients**:-A server can serve multiple clients. The connection to each client is handled by one thread.
Multiple clients are quite often connected to a single server at the same time. Typically, a server runs continuously on a server computer, and clients from all over the Internet can connect to it. You can use threads to handle the server’s multiple clients simultaneously—simply create a thread for each connection. Here is how the server handles the establishment of a connection:

```java
while (true) {
Socket socket = serverSocket.accept(); // Connect to a client
Thread thread = new ThreadClass(socket);
thread.start();
}
```

The server socket can have many connections. Each iteration of the while loop creates a new connection. Whenever a connection is established, a new thread is created to handle communication between the server and the new client, and this allows multiple connections to run at the same time.

## Socket Class

A socket is simply an endpoint for communications between the machines. The Socket class can be used to create a socket.

**Important methods :**

- void connect(SocketAddress host, int timeout)|connects the socket to the particularized host|
- int getPort()|returns the port to which the socket is pinned on the remote machine|
- InetAddress getInetAddress()|returns the location of the other computer to which the socket is connected|
- int getLocalPort()|returns the port to which the socket is joined on the local machine|
- SocketAddress getRemoteSocketAddress()|returns the location of the remote socket|
- InputStream getInputStream()|returns the input stream of the socket|
- OutputStream getOutputStream()|returns the output stream of the socket|
- synchronized void close()|closes the socket|

### ServerSocket Class

The ServerSocket class can be used to create a server socket. This object is used to establish communication with the clients.

**Important methods :**

- int getLocalPort()|returns the port that the server socket is monitoring on|
- void setSoTimeout(int timeout)|sets the time-out in which the server socket pauses for a client during the accept() method|
- Socket accept()|waits for an incoming client; returns the socket and establish a connection between server and client|
- void bind(SocketAddress host, int backlog)|bind the socket to the particularized server and port in the object of SocketAddress|
- synchronized void close()|closes the server socket|


## Networking Libraries in Java

1. HTTP and REST APIs: Use the java.net.HttpURLConnection class or third-party libraries like Apache HttpClient, OkHttp, or Spring RestTemplate.
2. NIO (Non-blocking I/O): For scalable network applications, use Java NIO with Selector, Channel, and Buffer.
3. WebSockets: Use Java EE's WebSocket API or third-party libraries like Tyrus for real-time communication.

Key Points About Java 21 and OkHttp

Java 21 supports HTTP/2 through the HttpClient API, just like earlier versions, and it also supports HTTP/3 in a limited experimental mode.
OkHttp (version 4.x and newer) has native support for HTTP/2, HTTP/3, and WebSockets, and it offers more flexibility and advanced features like connection pooling, retry logic, and interceptors.

So while Java 21 supports HTTP/2, OkHttp may still be preferred in some situations due to its additional features and broader support for modern protocols.
What Java 21 Offers Natively:

HTTP/2 support through the HttpClient API (fully supported from Java 11).
HTTP/3 support is now in experimental mode (via the java.net.http client).
Enhanced SSL/TLS support, such as the use of the ALPN (Application-Layer Protocol Negotiation) protocol for negotiating HTTP/2 and HTTP/3 connections.
Asynchronous and synchronous support for requests.
Improvements in performance and security.

What OkHttp Offers Beyond Java 21:

Better HTTP/2 support: OkHttp has fine-tuned HTTP/2 support, including connection multiplexing, header compression, and the ability to make use of features like server push.
HTTP/3 support: OkHttp fully supports HTTP/3 (over QUIC protocol), which Java’s native HttpClient does not support out of the box (though Java 21 introduces experimental HTTP/3 support).
    WebSockets: OkHttp has a robust WebSocket implementation, which Java's native HTTP client only partially supports with its WebSocket API in Java 11+.
    Interceptors: OkHttp’s interceptor mechanism allows for request and response modifications, logging, and custom authentication in a cleaner, more flexible way than Java's native HttpClient.
    Connection pooling and retries: OkHttp manages connections more efficiently with connection pooling and automatic retries for failed requests, which isn't as straightforward in Java's HttpClient.

When to Use OkHttp Over Java 21’s HttpClient:

Advanced features like connection pooling, retry strategies, interceptors for logging or adding custom headers, and WebSockets.
If you're targeting HTTP/3 (OkHttp offers full HTTP/3 support, whereas Java's support is still experimental).
    More control over low-level details like connection management or network configurations.

Using OkHttp with Java 21:

You can still use OkHttp in a Java 21 project. OkHttp works alongside the HttpClient API, and you can choose to use OkHttp for its extended features while using Java’s native client for simpler use cases.

Here’s a basic example of how to integrate OkHttp in a Java 21 project:

Add OkHttp dependency (in Gradle or Maven).

Gradle:

```groovy
implementation 'com.squareup.okhttp3:okhttp:4.11.0'  // Or use the latest version
```

Maven:

```xml
    <dependency>
        <groupId>com.squareup.okhttp3</groupId>
        <artifactId>okhttp</artifactId>
        <version>4.11.0</version>  <!-- Or use the latest version -->
    </dependency>
```

Use OkHttp:

```java
    import okhttp3.OkHttpClient;
    import okhttp3.Request;
    import okhttp3.Response;

    public class OkHttpWithJava21 {
        public static void main(String[] args) {
            OkHttpClient client = new OkHttpClient();

            Request request = new Request.Builder()
                    .url("https://httpbin.org/get")
                    .build();

            try (Response response = client.newCall(request).execute()) {
                System.out.println(response.body().string());
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
```

Conclusion:

Java 21 provides solid support for HTTP/2 and HTTP/3 (experimental), making it a good choice for many networking tasks.
OkHttp, however, is still a better choice for advanced features like connection pooling, HTTP/3 support, WebSockets, interceptors, and more granular control over the networking behavior.
If you're working on complex, performance-sensitive applications or need full HTTP/3 and WebSocket support, OkHttp is likely the better choice, even in Java 21.




Networking Basics
Computers running on the Internet communicate to each other using either the Transmission Control Protocol (TCP) or the User Datagram Protocol (UDP), as this diagram illustrates:

Example of network communication.
When you write Java programs that communicate over the network, you are programming at the application layer. Typically, you don't need to concern yourself with the TCP and UDP layers. Instead, you can use the classes in the java.net package. These classes provide system-independent network communication. However, to decide which Java classes your programs should use, you do need to understand how TCP and UDP differ.

TCP - TCP (Transmission Control Protocol) is a connection-based protocol that provides a reliable flow of data between two computers.

When two applications want to communicate to each other reliably, they establish a connection and send data back and forth over that connection. This is analogous to making a telephone call. If you want to speak to Aunt Beatrice in Kentucky, a connection is established when you dial her phone number and she answers. You send data back and forth over the connection by speaking to one another over the phone lines. Like the phone company, TCP guarantees that data sent from one end of the connection actually gets to the other end and in the same order it was sent. Otherwise, an error is reported.

TCP provides a point-to-point channel for applications that require reliable communications. The Hypertext Transfer Protocol (HTTP), File Transfer Protocol (FTP), and Telnet are all examples of applications that require a reliable communication channel. The order in which the data is sent and received over the network is critical to the success of these applications. When HTTP is used to read from a URL, the data must be received in the order in which it was sent. Otherwise, you end up with a jumbled HTML file, a corrupt zip file, or some other invalid information.

UDP
The UDP protocol provides for communication that is not guaranteed between two applications on the network. UDP is not connection-based like TCP. Rather, it sends independent packets of data, called datagrams, from one application to another. Sending datagrams is much like sending a letter through the postal service: The order of delivery is not important and is not guaranteed, and each message is independent of any other.

Definition: 
UDP (User Datagram Protocol) is a protocol that sends independent packets of data, called datagrams, from one computer to another with no guarantees about arrival. UDP is not connection-based like TCP.

For many applications, the guarantee of reliability is critical to the success of the transfer of information from one end of the connection to the other. However, other forms of communication don't require such strict standards. In fact, they may be slowed down by the extra overhead or the reliable connection may invalidate the service altogether.

Consider, for example, a clock server that sends the current time to its client when requested to do so. If the client misses a packet, it doesn't really make sense to resend it because the time will be incorrect when the client receives it on the second try. If the client makes two requests and receives packets from the server out of order, it doesn't really matter because the client can figure out that the packets are out of order and make another request. The reliability of TCP is unnecessary in this instance because it causes performance degradation and may hinder the usefulness of the service.

Another example of a service that doesn't need the guarantee of a reliable channel is the ping command. The purpose of the ping command is to test the communication between two programs over the network. In fact, ping needs to know about dropped or out-of-order packets to determine how good or bad the connection is. A reliable channel would invalidate this service altogether.

The UDP protocol provides for communication that is not guaranteed between two applications on the network. UDP is not connection-based like TCP. Rather, it sends independent packets of data from one application to another. Sending datagrams is much like sending a letter through the mail service: The order of delivery is not important and is not guaranteed, and each message is independent of any others.

Note: 
Many firewalls and routers have been configured not to allow UDP packets. If you're having trouble connecting to a service outside your firewall, or if clients are having trouble connecting to your service, ask your system administrator if UDP is permitted.

Understanding Ports
Generally speaking, a computer has a single physical connection to the network. All data destined for a particular computer arrives through that connection. However, the data may be intended for different applications running on the computer. So how does the computer know to which application to forward the data? Through the use of ports.

Data transmitted over the Internet is accompanied by addressing information that identifies the computer and the port for which it is destined. The computer is identified by its 32-bit IP address, which IP uses to deliver data to the right computer on the network. Ports are identified by a 16-bit number, which TCP and UDP use to deliver the data to the right application.

In connection-based communication such as TCP, a server application binds a socket to a specific port number. This has the effect of registering the server with the system to receive all data destined for that port. A client can then rendezvous with the server at the server's port, as illustrated here:

A client communicating to a server through its port
Definition: 
The TCP and UDP protocols use ports to map incoming data to a particular process running on a computer.

In datagram-based communication such as UDP, the datagram packet contains the port number of its destination and UDP routes the packet to the appropriate application, as illustrated in this figure:

Routing the packet to the appropriate application.
Port numbers range from 0 to 65,535 because ports are represented by 16-bit numbers. The port numbers ranging from 0 - 1023 are restricted; they are reserved for use by well-known services such as HTTP and FTP and other system services. These ports are called well-known ports. Your applications should not attempt to bind to them.

Networking Classes in the JDK
Through the classes in java.net, Java programs can use TCP or UDP to communicate over the Internet. The URL, URLConnection, Socket, and ServerSocket classes all use TCP to communicate over the network. The DatagramPacket, DatagramSocket, and MulticastSocket classes are for use with UDP.



**URLs**:- URL is the acronym for Uniform Resource Locator. It is a reference (an address) to a resource on the Internet. You provide URLs to your favorite Web browser so that it can locate files on the Internet in the same way that you provide addresses on letters so that the post office can locate your correspondents.
Java programs that interact with the Internet also may use URLs to find the resources on the Internet they wish to access. Java programs can use a class called URL in the java.net package to represent a URL address.

The term URL can be ambiguous. It can refer to an Internet address or a URL object in a Java program. Where the meaning of URL needs to be specific, this text uses "URL address" to mean an Internet address and "URL object" to refer to an instance of the URL class in a program.

A URL takes the form of a string that describes how to find a resource on the Internet. URLs have two main components: the protocol needed to access the resource and the location of the resource.

Within your Java programs, you can create a URL object that represents a URL address. The URL object always refers to an absolute URL but can be constructed from an absolute URL, a relative URL, or from URL components.

Gone are the days of parsing a URL to find out the host name, filename, and other information. With a valid URL object you can call any of its accessor methods to get all of that information from the URL without doing any string parsing!

Reading Directly from a URL

Connecting to a URL
If you want to do more than just read from a URL, you can connect to it by calling openConnection() on the URL. The openConnection() method returns a URLConnection object that you can use for more general communications with the URL, such as reading from it, writing to it, or querying it for content and other information.

Reading from and Writing to a URLConnection
Some URLs, such as many that are connected to cgi-bin scripts, allow you to (or even require you to) write information to the URL. For example, a search script may require detailed query data to be written to the URL before the search can be performed. This section shows you how to write to a URL and how to get results back.

It's often easiest, although not entirely accurate, to think of a URL as the name of a file on the World Wide Web because most URLs refer to a file on some machine on the network. However, remember that URLs also can point to other resources on the network, such as database queries and command output.

Definition: 
URL is an acronym for Uniform Resource Locator and is a reference (an address) to a resource on the Internet.

A URL has two main components:
1. Protocol identifier: For the URL http://example.com, the protocol identifier is http.
2. Resource name: For the URL http://example.com, the resource name is example.com.

Note that the protocol identifier and the resource name are separated by a colon and two forward slashes. The protocol identifier indicates the name of the protocol to be used to fetch the resource. The example uses the Hypertext Transfer Protocol (HTTP), which is typically used to serve up hypertext documents. HTTP is just one of many different protocols used to access different types of resources on the net. Other protocols include File Transfer Protocol (FTP), Gopher, File, and News.

The resource name is the complete address to the resource. The format of the resource name depends entirely on the protocol used, but for many protocols, including HTTP, the resource name contains one or more of the following components:

Host Name - The name of the machine on which the resource lives.
Filename - The pathname to the file on the machine.
Port Number - The port number to which to connect (typically optional).
Reference - A reference to a named anchor within a resource that usually identifies a specific location within a file (typically optional).
For many protocols, the host name and the filename are required, while the port number and reference are optional. For example, the resource name for an HTTP URL must specify a server on the network (Host Name) and the path to the document on that machine (Filename); it also can specify a port number and a reference.

`Creating a URL`:- The easiest way to create a URL object is from a String that represents the human-readable form of the URL address. This is typically the form that another person will use for a URL. In your Java program, you can use a String containing this text to create a URL object:

```java
URL myURL = new URL("http://example.com/");
```

The URL object created above represents an absolute URL. An absolute URL contains all of the information necessary to reach the resource in question. You can also create URL objects from a relative URL address.

Creating a URL Relative to Another - A relative URL contains only enough information to reach the resource relative to (or in the context of) another URL.
Relative URL specifications are often used within HTML files. For example, suppose you write an HTML file called JoesHomePage.html. Within this page, are links to other pages, PicturesOfMe.html and MyKids.html, that are on the same machine and in the same directory as JoesHomePage.html. The links to PicturesOfMe.html and MyKids.html from JoesHomePage.html could be specified just as file names, like this:

<a href="PicturesOfMe.html">Pictures of Me</a>
<a href="MyKids.html">Pictures of My Kids</a>

These URL addresses are relative URLs. That is, the URLs are specified relative to the file in which they are contained — JoesHomePage.html.

In your Java programs, you can create a URL object from a relative URL specification. For example, suppose you know two URLs at the site example.com:

http://example.com/pages/page1.html
http://example.com/pages/page2.html

You can create URL objects for these pages relative to their common base URL: http://example.com/pages/ like this:

```java
URL myURL = new URL("http://example.com/pages/");
URL page1URL = new URL(myURL, "page1.html");
URL page2URL = new URL(myURL, "page2.html");
```

This code snippet uses the URL constructor that lets you create a URL object from another URL object (the base) and a relative URL specification. The general form of this constructor is:

URL(URL baseURL, String relativeURL)

The first argument is a URL object that specifies the base of the new URL. The second argument is a String that specifies the rest of the resource name relative to the base. If baseURL is null, then this constructor treats relativeURL like an absolute URL specification. Conversely, if relativeURL is an absolute URL specification, then the constructor ignores baseURL.

This constructor is also useful for creating URL objects for named anchors (also called references) within a file. For example, suppose the page1.html file has a named anchor called BOTTOM at the bottom of the file. You can use the relative URL constructor to create a URL object for it like this:

URL page1BottomURL = new URL(page1URL,"#BOTTOM");
Other URL Constructors
The URL class provides two additional constructors for creating a URL object. These constructors are useful when you are working with URLs, such as HTTP URLs, that have host name, filename, port number, and reference components in the resource name portion of the URL. These two constructors are useful when you do not have a String containing the complete URL specification, but you do know various components of the URL.

For example, suppose you design a network browsing panel similar to a file browsing panel that allows users to choose the protocol, host name, port number, and filename. You can construct a URL from the panel's components. The first constructor creates a URL object from a protocol, host name, and filename. The following code snippet creates a URL to the page1.html file at the example.com site:

new URL("http", "example.com", "/pages/page1.html");
This is equivalent to

new URL("http://example.com/pages/page1.html");
The first argument is the protocol, the second is the host name, and the last is the pathname of the file. Note that the filename contains a forward slash at the beginning. This indicates that the filename is specified from the root of the host.

The final URL constructor adds the port number to the list of arguments used in the previous constructor:

URL gamelan = new URL("http", "example.com", 80, "pages/page1.html"); 
This creates a URL object for the following URL:

http://example.com:80/pages/page1.html
If you construct a URL object using one of these constructors, you can get a String containing the complete URL address by using the URL object's toString method or the equivalent toExternalForm method.

URL addresses with Special characters
Some URL addresses contain special characters, for example the space character. Like this:

http://example.com/hello world/
To make these characters legal they need to be encoded before passing them to the URL constructor.

URL url = new URL("http://example.com/hello%20world");
Encoding the special character(s) in this example is easy as there is only one character that needs encoding, but for URL addresses that have several of these characters or if you are unsure when writing your code what URL addresses you will need to access, you can use the multi-argument constructors of the java.net.URI class to automatically take care of the encoding for you.

URI uri = new URI("http", "example.com", "/hello world/", "");
And then convert the URI to a URL.

URL url = uri.toURL();
MalformedURLException
Each of the four URL constructors throws a MalformedURLException if the arguments to the constructor refer to a null or unknown protocol. Typically, you want to catch and handle this exception by embedding your URL constructor statements in a try/catch pair, like this:

try {
    URL myURL = new URL(...);
} 
catch (MalformedURLException e) {
    // exception handler code here
    // ...
}
Note: 
URLs are "write-once" objects. Once you've created a URL object, you cannot change any of its attributes (protocol, host name, filename, or port number).


Parsing a URL
The URL class provides several methods that let you query URL objects. You can get the protocol, authority, host name, port number, path, query, filename, and reference from a URL using these accessor methods:

getProtocol
Returns the protocol identifier component of the URL.
getAuthority
Returns the authority component of the URL.
getHost
Returns the host name component of the URL.
getPort
Returns the port number component of the URL. The getPort method returns an integer that is the port number. If the port is not set, getPort returns -1.
getPath
Returns the path component of this URL.
getQuery
Returns the query component of this URL.
getFile
Returns the filename component of the URL. The getFile method returns the same as getPath, plus the concatenation of the value of getQuery, if any.
getRef
Returns the reference component of the URL.
Note: 
Remember that not all URL addresses contain these components. The URL class provides these methods because HTTP URLs do contain these components and are perhaps the most commonly used URLs. The URL class is somewhat HTTP-centric.

You can use these getXXX methods to get information about the URL regardless of the constructor that you used to create the URL object.

The URL class, along with these accessor methods, frees you from ever having to parse URLs again! Given any string specification of a URL, just create a new URL object and call any of the accessor methods for the information you need. This small example program creates a URL from a string specification and then uses the URL object's accessor methods to parse the URL:

import java.net.*;
import java.io.*;

public class ParseURL {
    public static void main(String[] args) throws Exception {

        URL aURL = new URL("http://example.com:80/docs/books/tutorial"
                           + "/index.html?name=networking#DOWNLOADING");

        System.out.println("protocol = " + aURL.getProtocol());
        System.out.println("authority = " + aURL.getAuthority());
        System.out.println("host = " + aURL.getHost());
        System.out.println("port = " + aURL.getPort());
        System.out.println("path = " + aURL.getPath());
        System.out.println("query = " + aURL.getQuery());
        System.out.println("filename = " + aURL.getFile());
        System.out.println("ref = " + aURL.getRef());
    }
}
Here is the output displayed by the program:

protocol = http
authority = example.com:80
host = example.com
port = 80
path = /docs/books/tutorial/index.html
query = name=networking
filename = /docs/books/tutorial/index.html?name=networking
ref = DOWNLOADING



Reading Directly from a URL
After you've successfully created a URL, you can call the URL's openStream() method to get a stream from which you can read the contents of the URL. The openStream() method returns a java.io.InputStream object, so reading from a URL is as easy as reading from an input stream.

The following small Java program uses openStream() to get an input stream on the URL http://www.oracle.com/. It then opens a BufferedReader on the input stream and reads from the BufferedReader thereby reading from the URL. Everything read is copied to the standard output stream:

import java.net.*;
import java.io.*;

public class URLReader {
    public static void main(String[] args) throws Exception {

        URL oracle = new URL("http://www.oracle.com/");
        BufferedReader in = new BufferedReader(
        new InputStreamReader(oracle.openStream()));

        String inputLine;
        while ((inputLine = in.readLine()) != null)
            System.out.println(inputLine);
        in.close();
    }
}
When you run the program, you should see, scrolling by in your command window, the HTML commands and textual content from the HTML file located at http://www.oracle.com/. Alternatively, the program might hang or you might see an exception stack trace. If either of the latter two events occurs, you may have to set the proxy host so that the program can find the Oracle server.



Connecting to a URL
After you've successfully created a URL object, you can call the URL object's openConnection method to get a URLConnection object, or one of its protocol specific subclasses, for example java.net.HttpURLConnection

You can use this URLConnection object to setup parameters and general request properties that you may need before connecting. Connection to the remote object represented by the URL is only initiated when the URLConnection.connect method is called. When you do this you are initializing a communication link between your Java program and the URL over the network. For example, the following code opens a connection to the site example.com:

try {
    URL myURL = new URL("http://example.com/");
    URLConnection myURLConnection = myURL.openConnection();
    myURLConnection.connect();
} 
catch (MalformedURLException e) { 
    // new URL() failed
    // ...
} 
catch (IOException e) {   
    // openConnection() failed
    // ...
}
A new URLConnection object is created every time by calling the openConnection method of the protocol handler for this URL.

You are not always required to explicitly call the connect method to initiate the connection. Operations that depend on being connected, like getInputStream, getOutputStream, etc, will implicitly perform the connection, if necessary.

Now that you've successfully connected to your URL, you can use the URLConnection object to perform actions such as reading from or writing to the connection. The next section shows you how.



Reading from and Writing to a URLConnection
The URLConnection class contains many methods that let you communicate with the URL over the network. URLConnection is an HTTP-centric class; that is, many of its methods are useful only when you are working with HTTP URLs. However, most URL protocols allow you to read from and write to the connection. This section describes both functions.

Reading from a URLConnection
The following program performs the same function as the URLReader program shown in Reading Directly from a URL.

However, rather than getting an input stream directly from the URL, this program explicitly retrieves a URLConnection object and gets an input stream from the connection. The connection is opened implicitly by calling getInputStream. Then, like URLReader, this program creates a BufferedReader on the input stream and reads from it. The bold statements highlight the differences between this example and the previous:

import java.net.*;
import java.io.*;

public class URLConnectionReader {
    public static void main(String[] args) throws Exception {
        URL oracle = new URL("http://www.oracle.com/");
        URLConnection yc = oracle.openConnection();
        BufferedReader in = new BufferedReader(new InputStreamReader(
                                    yc.getInputStream()));
        String inputLine;
        while ((inputLine = in.readLine()) != null) 
            System.out.println(inputLine);
        in.close();
    }
}
The output from this program is identical to the output from the program that opens a stream directly from the URL. You can use either way to read from a URL. However, reading from a URLConnection instead of reading directly from a URL might be more useful. This is because you can use the URLConnection object for other tasks (like writing to the URL) at the same time.

Again, if the program hangs or you see an error message, you may have to set the proxy host so that the program can find the Oracle server.

Writing to a URLConnection
Many HTML pages contain forms — text fields and other GUI objects that let you enter data to send to the server. After you type in the required information and initiate the query by clicking a button, your Web browser writes the data to the URL over the network. At the other end the server receives the data, processes it, and then sends you a response, usually in the form of a new HTML page.

Many of these HTML forms use the HTTP POST METHOD to send data to the server. Thus writing to a URL is often called posting to a URL. The server recognizes the POST request and reads the data sent from the client.

For a Java program to interact with a server-side process it simply must be able to write to a URL, thus providing data to the server. It can do this by following these steps:

Create a URL.
Retrieve the URLConnection object.
Set output capability on the URLConnection.
Open a connection to the resource.
Get an output stream from the connection.
Write to the output stream.
Close the output stream.
Here is a small servlet named ReverseServlet (or if you prefer a cgi-bin script). You can use this servlet to test the following example program.

The servlet running in a container reads from its InputStream, reverses the string, and writes it to its OutputStream. The servlet requires input of the form string=string_to_reverse, where string_to_reverse is the string whose characters you want displayed in reverse order.

Here's an example program that runs the ReverseServlet over the network through a URLConnection:

import java.io.*;
import java.net.*;

public class Reverse {
    public static void main(String[] args) throws Exception {

        if (args.length != 2) {
            System.err.println("Usage:  java Reverse "
                + "http://<location of your servlet/script>"
                + " string_to_reverse");
            System.exit(1);
        }

        String stringToReverse = URLEncoder.encode(args[1], "UTF-8");

        URL url = new URL(args[0]);
        URLConnection connection = url.openConnection();
        connection.setDoOutput(true);

        OutputStreamWriter out = new OutputStreamWriter(
                                         connection.getOutputStream());
        out.write("string=" + stringToReverse);
        out.close();

        BufferedReader in = new BufferedReader(
                                    new InputStreamReader(
                                    connection.getInputStream()));
        String decodedString;
        while ((decodedString = in.readLine()) != null) {
            System.out.println(decodedString);
        }
        in.close();
    }
}
Let's examine the program and see how it works. First, the program processes its command-line arguments:

if (args.length != 2) {
    System.err.println("Usage:  java Reverse "
        + "http://<location of your servlet/script>"
        + " string_to_reverse");
    System.exit(1);
}       

String stringToReverse = URLEncoder.encode(args[1], "UTF-8");
These statements ensure that the user provides two and only two command-line arguments to the program. The command-line arguments are the location of the ReverseServlet and the string that will be reversed. It may contain spaces or other non-alphanumeric characters. These characters must be encoded because the string is processed on its way to the server. The URLEncoder class methods encode the characters.

Next, the program creates the URL object, and sets the connection so that it can write to it:

URL url = new URL(args[0]);
URLConnection connection = url.openConnection();
connection.setDoOutput(true);
The program then creates an output stream on the connection and opens an OutputStreamWriter on it:

OutputStreamWriter out = new OutputStreamWriter(connection.getOutputStream());
If the URL does not support output, getOutputStream method throws an UnknownServiceException. If the URL does support output, then this method returns an output stream that is connected to the input stream of the URL on the server side — the client's output is the server's input.

Next, the program writes the required information to the output stream and closes the stream:

out.write("string=" + stringToReverse);
out.close();
This code writes to the output stream using the write method. So you can see that writing data to a URL is as easy as writing data to a stream. The data written to the output stream on the client side is the input for the servlet on the server side. The Reverse program constructs the input in the form required by the script by prepending string= to the encoded string to be reversed.

The servlet reads the information you write, performs a reverse operation on the string value, and then sends this back to you. You now need to read the string the server has sent back. The Reverse program does it like this:

BufferedReader in = new BufferedReader(
                            new InputStreamReader(
                            connection.getInputStream()));
String decodedString;
while ((decodedString = in.readLine()) != null) {
    System.out.println(decodedString);
}
in.close();
If your ReverseServlet is located at http://example.com/servlet/ReverseServlet, then when you run the Reverse program using

http://example.com/servlet/ReverseServlet "Reverse Me"
as the argument (including the double quote marks), you should see this output:

Reverse Me
 reversed is: 
eM esreveR




All About Sockets
URLs and URLConnections provide a relatively high-level mechanism for accessing resources on the Internet. Sometimes your programs require lower-level network communication, for example, when you want to write a client-server application.

In client-server applications, the server provides some service, such as processing database queries or sending out current stock prices. The client uses the service provided by the server, either displaying database query results to the user or making stock purchase recommendations to an investor. The communication that occurs between the client and the server must be reliable. That is, no data can be dropped and it must arrive on the client side in the same order in which the server sent it.

TCP provides a reliable, point-to-point communication channel that client-server applications on the Internet use to communicate with each other. To communicate over TCP, a client program and a server program establish a connection to one another. Each program binds a socket to its end of the connection. To communicate, the client and the server each reads from and writes to the socket bound to the connection.

What Is a Socket?
A socket is one end-point of a two-way communication link between two programs running on the network. Socket classes are used to represent the connection between a client program and a server program. The java.net package provides two classes--Socket and ServerSocket--that implement the client side of the connection and the server side of the connection, respectively.

Reading from and Writing to a Socket
This page contains a small example that illustrates how a client program can read from and write to a socket.

Writing a Client/Server Pair
The previous page showed an example of how to write a client program that interacts with an existing server via a Socket object. This page shows you how to write a program that implements the other side of the connection—a server program.



What Is a Socket?
Normally, a server runs on a specific computer and has a socket that is bound to a specific port number. The server just waits, listening to the socket for a client to make a connection request.

On the client-side: The client knows the hostname of the machine on which the server is running and the port number on which the server is listening. To make a connection request, the client tries to rendezvous with the server on the server's machine and port. The client also needs to identify itself to the server so it binds to a local port number that it will use during this connection. This is usually assigned by the system.

A client's connection request
If everything goes well, the server accepts the connection. Upon acceptance, the server gets a new socket bound to the same local port and also has its remote endpoint set to the address and port of the client. It needs a new socket so that it can continue to listen to the original socket for connection requests while tending to the needs of the connected client.

The connection is made
On the client side, if the connection is accepted, a socket is successfully created and the client can use the socket to communicate with the server.

The client and server can now communicate by writing to or reading from their sockets.

Definition: 
A socket is one endpoint of a two-way communication link between two programs running on the network. A socket is bound to a port number so that the TCP layer can identify the application that data is destined to be sent to.

An endpoint is a combination of an IP address and a port number. Every TCP connection can be uniquely identified by its two endpoints. That way you can have multiple connections between your host and the server.

The java.net package in the Java platform provides a class, Socket, that implements one side of a two-way connection between your Java program and another program on the network. The Socket class sits on top of a platform-dependent implementation, hiding the details of any particular system from your Java program. By using the java.net.Socket class instead of relying on native code, your Java programs can communicate over the network in a platform-independent fashion.

Additionally, java.net includes the ServerSocket class, which implements a socket that servers can use to listen for and accept connections to clients. This lesson shows you how to use the Socket and ServerSocket classes.

If you are trying to connect to the Web, the URL class and related classes (URLConnection, URLEncoder) are probably more appropriate than the socket classes. In fact, URLs are a relatively high-level connection to the Web and use sockets as part of the underlying implementation. See Working with URLs for information about connecting to the Web via URLs.


Reading from and Writing to a Socket
Let's look at a simple example that illustrates how a program can establish a connection to a server program using the Socket class and then, how the client can send data to and receive data from the server through the socket.

The example program implements a client, EchoClient, that connects to an echo server. The echo server receives data from its client and echoes it back. The example EchoServer implements an echo server. (Alternatively, the client can connect to any host that supports the Echo Protocol.)

The EchoClient example creates a socket, thereby getting a connection to the echo server. It reads input from the user on the standard input stream, and then forwards that text to the echo server by writing the text to the socket. The server echoes the input back through the socket to the client. The client program reads and displays the data passed back to it from the server.

Note that the EchoClient example both writes to and reads from its socket, thereby sending data to and receiving data from the echo server.

Let's walk through the program and investigate the interesting parts. The following statements in the try-with-resources statement in the EchoClient example are critical. These lines establish the socket connection between the client and the server and open a PrintWriter and a BufferedReader on the socket:

String hostName = args[0];
int portNumber = Integer.parseInt(args[1]);

try (
    Socket echoSocket = new Socket(hostName, portNumber);        // 1st statement
    PrintWriter out =                                            // 2nd statement
        new PrintWriter(echoSocket.getOutputStream(), true);
    BufferedReader in =                                          // 3rd statement 
        new BufferedReader(
            new InputStreamReader(echoSocket.getInputStream()));
    BufferedReader stdIn =                                       // 4th statement 
        new BufferedReader(
            new InputStreamReader(System.in))
)
The first statement in the try-with resources statement creates a new Socket object and names it echoSocket. The Socket constructor used here requires the name of the computer and the port number to which you want to connect. The example program uses the first command-line argument as the name of the computer (the host name) and the second command line argument as the port number. When you run this program on your computer, make sure that the host name you use is the fully qualified IP name of the computer to which you want to connect. For example, if your echo server is running on the computer echoserver.example.com and it is listening on port number 7, first run the following command from the computer echoserver.example.com if you want to use the EchoServer example as your echo server:

java EchoServer 7
Afterward, run the EchoClient example with the following command:

java EchoClient echoserver.example.com 7
The second statement in the try-with resources statement gets the socket's output stream and opens a PrintWriter on it named out. Similarly, the third statement gets the socket's input stream and opens a BufferedReader on it named in. The example uses readers and writers so that it can write Unicode characters over the socket. If you are not yet familiar with the Java platform's I/O classes, you may wish to read Basic I/O.

The next interesting part of the program is the while loop. The loop reads a line at a time from the standard input stream with the BufferedReader object stdIn, which is created in the fourth statement in the try-with resources statement. The loop then immediately sends the line to the server by writing it to the PrintWriter connected to the socket:

String userInput;
while ((userInput = stdIn.readLine()) != null) {
    out.println(userInput);
    System.out.println("echo: " + in.readLine());
}
The last statement in the while loop reads a line of information from the BufferedReader connected to the socket. The readLine method waits until the server echoes the information back to EchoClient. When readline returns, EchoClient prints the information to the standard output.

The while loop continues until the user types an end-of-input character. That is, the EchoClient example reads input from the user, sends it to the Echo server, gets a response from the server, and displays it, until it reaches the end-of-input. (You can type an end-of-input character by pressing Ctrl-C.) The while loop then terminates, and the Java runtime automatically closes the readers and writers connected to the socket and to the standard input stream, and it closes the socket connection to the server. The Java runtime closes these resources automatically because they were created in the try-with-resources statement. The Java runtime closes these resources in reverse order that they were created. (This is good because streams connected to a socket should be closed before the socket itself is closed.)

This client program is straightforward and simple because the echo server implements a simple protocol. The client sends text to the server, and the server echoes it back. When your client programs are talking to a more complicated server such as an HTTP server, your client program will also be more complicated. However, the basics are much the same as they are in this program:

Open a socket.
Open an input stream and output stream to the socket.
Read from and write to the stream according to the server's protocol.
Close the streams.
Close the socket.
Only step 3 differs from client to client, depending on the server. The other steps remain largely the same.



Writing the Server Side of a Socket
This section shows you how to write a server and the client that goes with it. The server in the client/server pair serves up Knock Knock jokes. Knock Knock jokes are favored by children and are usually vehicles for bad puns. They go like this:

Server: "Knock knock!"
Client: "Who's there?"
Server: "Dexter."
Client: "Dexter who?"
Server: "Dexter halls with boughs of holly."
Client: "Groan."

The example consists of two independently running Java programs: the client program and the server program. The client program is implemented by a single class, KnockKnockClient, and is very similar to the EchoClient example from the previous section. The server program is implemented by two classes: KnockKnockServer and KnockKnockProtocol. KnockKnockServer, which is similar to EchoServer, contains the main method for the server program and performs the work of listening to the port, establishing connections, and reading from and writing to the socket. The class KnockKnockProtocol serves up the jokes. It keeps track of the current joke, the current state (sent knock knock, sent clue, and so on), and returns the various text pieces of the joke depending on the current state. This object implements the protocol—the language that the client and server have agreed to use to communicate.

The following section looks in detail at each class in both the client and the server and then shows you how to run them.

The Knock Knock Server
This section walks through the code that implements the Knock Knock server program, KnockKnockServer.

The server program begins by creating a new ServerSocket object to listen on a specific port (see the statement in bold in the following code segment). When running this server, choose a port that is not already dedicated to some other service. For example, this command starts the server program KnockKnockServer so that it listens on port 4444:

java KnockKnockServer 4444
The server program creates the ServerSocket object in a try-with-resources statement:

int portNumber = Integer.parseInt(args[0]);

try ( 
    ServerSocket serverSocket = new ServerSocket(portNumber);
    Socket clientSocket = serverSocket.accept();
    PrintWriter out =
        new PrintWriter(clientSocket.getOutputStream(), true);
    BufferedReader in = new BufferedReader(
        new InputStreamReader(clientSocket.getInputStream()));
) {
ServerSocket is a java.net class that provides a system-independent implementation of the server side of a client/server socket connection. The constructor for ServerSocket throws an exception if it can't listen on the specified port (for example, the port is already being used). In this case, the KnockKnockServer has no choice but to exit.

If the server successfully binds to its port, then the ServerSocket object is successfully created and the server continues to the next step—accepting a connection from a client (the next statement in the try-with-resources statement):

clientSocket = serverSocket.accept();
The accept method waits until a client starts up and requests a connection on the host and port of this server. (Let's assume that you ran the server program KnockKnockServer on the computer named knockknockserver.example.com.) In this example, the server is running on the port number specified by the first command-line argument. When a connection is requested and successfully established, the accept method returns a new Socket object which is bound to the same local port and has its remote address and remote port set to that of the client. The server can communicate with the client over this new Socket and continue to listen for client connection requests on the original ServerSocket This particular version of the program doesn't listen for more client connection requests. However, a modified version of the program is provided in Supporting Multiple Clients.

After the server successfully establishes a connection with a client, it communicates with the client using this code:

try (
    // ...
    PrintWriter out =
        new PrintWriter(clientSocket.getOutputStream(), true);
    BufferedReader in = new BufferedReader(
        new InputStreamReader(clientSocket.getInputStream()));
) {
    String inputLine, outputLine;
            
    // Initiate conversation with client
    KnockKnockProtocol kkp = new KnockKnockProtocol();
    outputLine = kkp.processInput(null);
    out.println(outputLine);

    while ((inputLine = in.readLine()) != null) {
        outputLine = kkp.processInput(inputLine);
        out.println(outputLine);
        if (outputLine.equals("Bye."))
            break;
    }
This code does the following:

Gets the socket's input and output stream and opens readers and writers on them.
Initiates communication with the client by writing to the socket (shown in bold).
Communicates with the client by reading from and writing to the socket (the while loop).
Step 1 is already familiar. Step 2 is shown in bold and is worth a few comments. The bold statements in the code segment above initiate the conversation with the client. The code creates a KnockKnockProtocol object—the object that keeps track of the current joke, the current state within the joke, and so on.

After the KnockKnockProtocol is created, the code calls KnockKnockProtocol's processInput method to get the first message that the server sends to the client. For this example, the first thing that the server says is "Knock! Knock!" Next, the server writes the information to the PrintWriter connected to the client socket, thereby sending the message to the client.

Step 3 is encoded in the while loop. As long as the client and server still have something to say to each other, the server reads from and writes to the socket, sending messages back and forth between the client and the server.

The server initiated the conversation with a "Knock! Knock!" so afterwards the server must wait for the client to say "Who's there?" As a result, the while loop iterates on a read from the input stream. The readLine method waits until the client responds by writing something to its output stream (the server's input stream). When the client responds, the server passes the client's response to the KnockKnockProtocol object and asks the KnockKnockProtocol object for a suitable reply. The server immediately sends the reply to the client via the output stream connected to the socket, using a call to println. If the server's response generated from the KnockKnockServer object is "Bye." this indicates that the client doesn't want any more jokes and the loop quits.

The Java runtime automatically closes the input and output streams, the client socket, and the server socket because they have been created in the try-with-resources statement.

The Knock Knock Protocol
The KnockKnockProtocol class implements the protocol that the client and server use to communicate. This class keeps track of where the client and the server are in their conversation and serves up the server's response to the client's statements. The KnockKnockProtocol object contains the text of all the jokes and makes sure that the client gives the proper response to the server's statements. It wouldn't do to have the client say "Dexter who?" when the server says "Knock! Knock!"

All client/server pairs must have some protocol by which they speak to each other; otherwise, the data that passes back and forth would be meaningless. The protocol that your own clients and servers use depends entirely on the communication required by them to accomplish the task.

The Knock Knock Client
The KnockKnockClient class implements the client program that speaks to the KnockKnockServer. KnockKnockClient is based on the EchoClient program in the previous section, Reading from and Writing to a Socket and should be somewhat familiar to you. But we'll go over the program anyway and look at what's happening in the client in the context of what's going on in the server.

When you start the client program, the server should already be running and listening to the port, waiting for a client to request a connection. So, the first thing the client program does is to open a socket that is connected to the server running on the specified host name and port:

String hostName = args[0];
int portNumber = Integer.parseInt(args[1]);

try (
    Socket kkSocket = new Socket(hostName, portNumber);
    PrintWriter out = new PrintWriter(kkSocket.getOutputStream(), true);
    BufferedReader in = new BufferedReader(
        new InputStreamReader(kkSocket.getInputStream()));
)
When creating its socket, the KnockKnockClient example uses the host name of the first command-line argument, the name of the computer on your network that is running the server program KnockKnockServer.

The KnockKnockClient example uses the second command-line argument as the port number when creating its socket. This is a remote port number—the number of a port on the server computer—and is the port to which KnockKnockServer is listening. For example, the following command runs the KnockKnockClient example with knockknockserver.example.com as the name of the computer that is running the server program KnockKnockServer and 4444 as the remote port number:

java KnockKnockClient knockknockserver.example.com 4444
The client's socket is bound to any available local port—a port on the client computer. Remember that the server gets a new socket as well. If you run the KnockKnockClient example with the command-line arguments in the previous example, then this socket is bound to local port number 4444 on the computer from which you ran the KnockKnockClient example. The server's socket and the client's socket are connected.

Next comes the while loop that implements the communication between the client and the server. The server speaks first, so the client must listen first. The client does this by reading from the input stream attached to the socket. If the server does speak, it says "Bye." and the client exits the loop. Otherwise, the client displays the text to the standard output and then reads the response from the user, who types into the standard input. After the user types a carriage return, the client sends the text to the server through the output stream attached to the socket.

while ((fromServer = in.readLine()) != null) {
    System.out.println("Server: " + fromServer);
    if (fromServer.equals("Bye."))
        break;

    fromUser = stdIn.readLine();
    if (fromUser != null) {
        System.out.println("Client: " + fromUser);
        out.println(fromUser);
    }
}
The communication ends when the server asks if the client wishes to hear another joke, the client says no, and the server says "Bye."

The client automatically closes its input and output streams and the socket because they were created in the try-with-resources statement.

Running the Programs
You must start the server program first. To do this, run the server program using the Java interpreter, just as you would any other Java application. Specify as a command-line argument the port number on which the server program listens:

java KnockKnockServer 4444
Next, run the client program. Note that you can run the client on any computer on your network; it does not have to run on the same computer as the server. Specify as command-line arguments the host name and the port number of the computer running the KnockKnockServer server program:

java KnockKnockClient knockknockserver.example.com 4444
If you are too quick, you might start the client before the server has a chance to initialize itself and begin listening on the port. If this happens, you will see a stack trace from the client. If this happens, just restart the client.

If you try to start a second client while the first client is connected to the server, the second client just hangs. The next section, Supporting Multiple Clients, talks about supporting multiple clients.

When you successfully get a connection between the client and server, you will see the following text displayed on your screen:

Server: Knock! Knock!
Now, you must respond with:

Who's there?
The client echoes what you type and sends the text to the server. The server responds with the first line of one of the many Knock Knock jokes in its repertoire. Now your screen should contain this (the text you typed is in bold):

Server: Knock! Knock!
Who's there?
Client: Who's there?
Server: Turnip
Now, you respond with:

Turnip who?
Again, the client echoes what you type and sends the text to the server. The server responds with the punch line. Now your screen should contain this:

Server: Knock! Knock!
Who's there?
Client: Who's there?
Server: Turnip
Turnip who?
Client: Turnip who?
Server: Turnip the heat, it's cold in here! Want another? (y/n)   
If you want to hear another joke, type y; if not, type n. If you type y, the server begins again with "Knock! Knock!" If you type n, the server says "Bye." thus causing both the client and the server to exit.

If at any point you make a typing mistake, the KnockKnockServer object catches it and the server responds with a message similar to this:

Server: You're supposed to say "Who's there?"!
The server then starts the joke over again:

Server: Try again. Knock! Knock!
Note that the KnockKnockProtocol object is particular about spelling and punctuation but not about capitalization.

Supporting Multiple Clients
To keep the KnockKnockServer example simple, we designed it to listen for and handle a single connection request. However, multiple client requests can come into the same port and, consequently, into the same ServerSocket. Client connection requests are queued at the port, so the server must accept the connections sequentially. However, the server can service them simultaneously through the use of threads—one thread per each client connection.

The basic flow of logic in such a server is this:

while (true) {
    accept a connection;
    create a thread to deal with the client;
}
The thread reads from and writes to the client connection as necessary.

Try This: 
Modify the KnockKnockServer so that it can service multiple clients at the same time. Two classes compose our solution: KKMultiServer and KKMultiServerThread. KKMultiServer loops forever, listening for client connection requests on a ServerSocket. When a request comes in, KKMultiServer accepts the connection, creates a new KKMultiServerThread object to process it, hands it the socket returned from accept, and starts the thread. Then the server goes back to listening for connection requests. The KKMultiServerThread object communicates to the client by reading from and writing to the socket. Run the new Knock Knock server KKMultiServer and then run several clients in succession.



Datagrams
Some applications that you write to communicate over the network will not require the reliable, point-to-point channel provided by TCP. Rather, your applications might benefit from a mode of communication that delivers independent packages of information whose arrival and order of arrival are not guaranteed.

The UDP protocol provides a mode of network communication whereby applications send packets of data, called datagrams, to one another. A datagram is an independent, self-contained message sent over the network whose arrival, arrival time, and content are not guaranteed. The DatagramPacket and DatagramSocket classes in the java.net package implement system-independent datagram communication using UDP.

What Is a Datagram?
A datagram is an independent, self-contained message sent over the network whose arrival, arrival time, and content are not guaranteed.

Writing a Datagram Client and Server
This section walks you through an example that contains two Java programs that use datagrams to communicate. The server side is a quote server that listens to its DatagramSocket and sends a quotation to a client whenever the client requests it. The client side is a simple program that simply makes a request of the server.

Broadcasting to Multiple Recipients
This section modifies the quote server so that instead of sending a quotation to a single client upon request, the quote server broadcasts a quote every minute to as many clients as are listening. The client program must be modified accordingly.

Note: 
Many firewalls and routers are configured not to allow UDP packets. If you have trouble connecting to a service outside your firewall, or if clients have trouble connecting to your service, ask your system administrator if UDP is permitted.

Datagram?
Clients and servers that communicate via a reliable channel, such as a TCP socket, have a dedicated point-to-point channel between themselves, or at least the illusion of one. To communicate, they establish a connection, transmit the data, and then close the connection. All data sent over the channel is received in the same order in which it was sent. This is guaranteed by the channel.

In contrast, applications that communicate via datagrams send and receive completely independent packets of information. These clients and servers do not have and do not need a dedicated point-to-point channel. The delivery of datagrams to their destinations is not guaranteed. Nor is the order of their arrival.

Definition: 
A datagram is an independent, self-contained message sent over the network whose arrival, arrival time, and content are not guaranteed.

The java.net package contains three classes to help you write Java programs that use datagrams to send and receive packets over the network: DatagramSocket, DatagramPacket, and MulticastSocketAn application can send and receive DatagramPackets through a DatagramSocket. In addition, DatagramPackets can be broadcast to multiple recipients all listening to a MulticastSocket.


Datagram Client and Server
The example featured in this section consists of two applications: a client and a server. The server continuously receives datagram packets over a datagram socket. Each datagram packet received by the server indicates a client request for a quotation. When the server receives a datagram, it replies by sending a datagram packet that contains a one-line "quote of the moment" back to the client.

The client application in this example is fairly simple. It sends a single datagram packet to the server indicating that the client would like to receive a quote of the moment. The client then waits for the server to send a datagram packet in response.

Two classes implement the server application: QuoteServer and QuoteServerThread. A single class implements the client application: QuoteClient.

Let's investigate these classes, starting with the class that contains the main method for the server application. Working With a Server-Side Application contains an applet version of the QuoteClient class.

The QuoteServer Class
The QuoteServer class, shown here in its entirety, contains a single method: the main method for the quote server application. The main method simply creates a new QuoteServerThread object and starts it:

import java.io.*;

public class QuoteServer {
    public static void main(String[] args) throws IOException {
        new QuoteServerThread().start();
    }
}
The QuoteServerThread class implements the main logic of the quote server.

The QuoteServerThread Class
When created, the QuoteServerThread creates a DatagramSocket on port 4445 (arbitrarily chosen). This is the DatagramSocket through which the server communicates with all of its clients.

public QuoteServerThread() throws IOException {
    this("QuoteServer");
}

public QuoteServerThread(String name) throws IOException {
    super(name);
    socket = new DatagramSocket(4445);

    try {
        in = new BufferedReader(new FileReader("one-liners.txt"));
    }   
    catch (FileNotFoundException e){
        System.err.println("Couldn't open quote file.  Serving time instead.");
    }
}  
Remember that certain ports are dedicated to well-known services and you cannot use them. If you specify a port that is in use, the creation of the DatagramSocket will fail.

The constructor also opens a BufferedReader on a file named one-liners.txt which contains a list of quotes. Each quote in the file is on a line by itself.

Now for the interesting part of the QuoteServerThread: its run method. The run method overrides run in the Thread class and provides the implementation for the thread. For information about threads, see Defining and Starting a Thread.

The run method contains a while loop that continues as long as there are more quotes in the file. During each iteration of the loop, the thread waits for a DatagramPacket to arrive over the DatagramSocket. The packet indicates a request from a client. In response to the client's request, the QuoteServerThread gets a quote from the file, puts it in a DatagramPacket and sends it over the DatagramSocket to the client that asked for it.

Let's look first at the section that receives the requests from clients:

byte[] buf = new byte[256];
DatagramPacket packet = new DatagramPacket(buf, buf.length);
socket.receive(packet);
The first statement creates an array of bytes which is then used to create a DatagramPacket. The DatagramPacket will be used to receive a datagram from the socket because of the constructor used to create it. This constructor requires only two arguments: a byte array that contains client-specific data and the length of the byte array. When constructing a DatagramPacket to send over the DatagramSocket, you also must supply the Internet address and port number of the packet's destination. You'll see this later when we discuss how the server responds to a client request.

The last statement in the previous code snippet receives a datagram from the socket (the information received from the client gets copied into the packet). The receive method waits forever until a packet is received. If no packet is received, the server makes no further progress and just waits.

Now assume that, the server has received a request from a client for a quote. Now the server must respond. This section of code in the run method constructs the response:

String dString = null;
if (in == null)
    dString = new Date().toString();
else
    dString = getNextQuote();
buf = dString.getBytes();
If the quote file did not get opened for some reason, then in equals null. If this is the case, the quote server serves up the time of day instead. Otherwise, the quote server gets the next quote from the already opened file. Finally, the code converts the string to an array of bytes.

Now, the run method sends the response to the client over the DatagramSocket with this code:

InetAddress address = packet.getAddress();
int port = packet.getPort();
packet = new DatagramPacket(buf, buf.length, address, port);
socket.send(packet);
The first two statements in this code segment get the Internet address and the port number, respectively, from the datagram packet received from the client. The Internet address and port number indicate where the datagram packet came from. This is where the server must send its response. In this example, the byte array of the datagram packet contains no relevant information. The arrival of the packet itself indicates a request from a client that can be found at the Internet address and port number indicated in the datagram packet.

The third statement creates a new DatagramPacket object intended for sending a datagram message over the datagram socket. You can tell that the new DatagramPacket is intended to send data over the socket because of the constructor used to create it. This constructor requires four arguments. The first two arguments are the same required by the constructor used to create receiving datagrams: a byte array containing the message from the sender to the receiver and the length of this array. The next two arguments are different: an Internet address and a port number. These two arguments are the complete address of the destination of the datagram packet and must be supplied by the sender of the datagram. The last line of code sends the DatagramPacket on its way.

When the server has read all the quotes from the quote file, the while loop terminates and the run method cleans up:

socket.close();
The QuoteClient Class
The QuoteClient class implements a client application for the QuoteServer. This application sends a request to the QuoteServer, waits for the response, and, when the response is received, displays it to the standard output. Let's look at the code in detail.

The QuoteClient class contains one method, the main method for the client application. The top of the main method declares several local variables for its use:

int port;
InetAddress address;
DatagramSocket socket = null;
DatagramPacket packet;
byte[] sendBuf = new byte[256];
First, the main method processes the command-line arguments used to invoke the QuoteClient application:

if (args.length != 1) {
    System.out.println("Usage: java QuoteClient <hostname>");
    return;
}
The QuoteClient application requires one command-line arguments: the name of the machine on which the QuoteServer is running.

Next, the main method creates a DatagramSocket:

DatagramSocket socket = new DatagramSocket();
The client uses a constructor that does not require a port number. This constructor just binds the DatagramSocket to any available local port. It doesn't matter what port the client is bound to because the DatagramPackets contain the addressing information. The server gets the port number from the DatagramPackets and send its response to that port.

Next, the QuoteClient program sends a request to the server:

byte[] buf = new byte[256];
InetAddress address = InetAddress.getByName(args[0]);
DatagramPacket packet = new DatagramPacket(buf, buf.length, 
                                address, 4445);
socket.send(packet);
The code segment gets the Internet address for the host named on the command line (presumably the name of the machine on which the server is running). This InetAddress and the port number 4445 (the port number that the server used to create its DatagramSocket) are then used to create DatagramPacket destined for that Internet address and port number. Therefore the DatagramPacket will be delivered to the quote server.

Note that the code creates a DatagramPacket with an empty byte array. The byte array is empty because this datagram packet is simply a request to the server for information. All the server needs to know to send a response—the address and port number to which reply—is automatically part of the packet.

Next, the client gets a response from the server and displays it:

packet = new DatagramPacket(buf, buf.length);
socket.receive(packet);
String received = new String(packet.getData(), 0, packet.getLength());
System.out.println("Quote of the Moment: " + received);
To get a response from the server, the client creates a "receive" packet and uses the DatagramSocket receive method to receive the reply from the server. The receive method waits until a datagram packet destined for the client comes through the socket. Note that if the server's reply is somehow lost, the client will wait forever because of the no-guarantee policy of the datagram model. Normally, a client sets a timer so that it doesn't wait forever for a reply; if no reply arrives, the timer goes off and the client retransmits.

When the client receives a reply from the server, the client uses the getData method to retrieve that data from the packet. The client then converts the data to a string and displays it.

Running the Server and Client
After you've successfully compiled the server and the client programs, you run them. You have to run the server program first. Just use the Java interpreter and specify the QuoteServer class name.

Once the server has started, you can run the client program. Remember to run the client program with one command-line argument: the name of the host on which the QuoteServer is running.

After the client sends a request and receives a response from the server, you should see output similar to this:

Quote of the Moment:
Good programming is 99% sweat and 1% coffee.


Broadcasting to Multiple Recipients
In addition to DatagramSocket, which lets programs send packets to one another, java.net includes a class called MulticastSocket. This kind of socket is used on the client-side to listen for packets that the server broadcasts to multiple clients.

Let's rewrite the quote server so that it broadcasts DatagramPackets to multiple recipients. Instead of sending quotes to a specific client that makes a request, the new server now needs to broadcast quotes at a regular interval. The client needs to be modified so that it passively listens for quotes and does so on a MulticastSocket.

This example is comprised of three classes which are modifications of the three classes from the previous example: MulticastServer, MulticastServerThread, and MulticastClient. This discussion highlights the interesting parts of these classes.

Here is the new version of the server's main program. The differences between this code and the previous version, QuoteServer, are shown in bold:

import java.io.*;

public class MulticastServer {
    public static void main(String[] args) throws IOException {
        new MulticastServerThread().start();
    }
}
Basically, the server got a new name and creates a MulticastServerThread instead of a QuoteServerThread. Now let's look at the MulticastServerThread which contains the heart of the server. Here's its class declaration:

public class MulticastServerThread extends QuoteServerThread {
    // ...
}
We've made this class a subclass of QuoteServerThread so that it can use the constructor, and inherit some member variable and the getNextQuote method. Recall that QuoteServerThread creates a DatagramSocket bound to port 4445 and opens the quote file. The DatagramSocket's port number doesn't actually matter in this example because the client never send anything to the server.

The only method explicitly implemented in MulticastServerThread is its run method. The differences between this run method and the one in QuoteServerThread are shown in bold:

public void run() {
    while (moreQuotes) {
        try {
            byte[] buf = new byte[256];
            // don't wait for request...just send a quote

            String dString = null;
            if (in == null)
                dString = new Date().toString();
            else
                dString = getNextQuote();
            buf = dString.getBytes();

            InetAddress group = InetAddress.getByName("203.0.113.0");
            DatagramPacket packet;
            packet = new DatagramPacket(buf, buf.length, group, 4446);
            socket.send(packet);

            try {
                sleep((long)Math.random() * FIVE_SECONDS);
            } 
            catch (InterruptedException e) { }
        }
        catch (IOException e) {
            e.printStackTrace();
            moreQuotes = false;
        }
    }
    socket.close();
}
The interesting change is how the DatagramPacket is constructed, in particular, the InetAddress and port used to construct the DatagramPacket. Recall that the previous example retrieved the InetAddress and port number from the packet sent to the server from the client. This was because the server needed to reply directly to the client. Now, the server needs to address multiple clients. So this time both the InetAddress and the port number are hard-coded.

The hard-coded port number is 4446 (the client must have a MulticastSocket bound to this port). The hard-coded InetAddress of the DatagramPacket is "203.0.113.0" and is a group identifier (rather than the Internet address of the machine on which a single client is running). This particular address was arbitrarily chosen from the reserved for this purpose.

Created in this way, the DatagramPacket is destined for all clients listening to port number 4446 who are member of the "203.0.113.0" group.

To listen to port number 4446, the new client program just created its MulticastSocket with that port number. To become a member of the "203.0.113.0" group, the client calls the MulticastSocket's joinGroup method with the InetAddress that identifies the group. Now, the client is set up to receive DatagramPackets destined for the port and group specified. Here's the relevant code from the new client program (which was also rewritten to passively receive quotes rather than actively request them). The bold statements are the ones that interact with the MulticastSocket:

MulticastSocket socket = new MulticastSocket(4446);
InetAddress group = InetAddress.getByName("203.0.113.0");
socket.joinGroup(group);

DatagramPacket packet;
for (int i = 0; i < 5; i++) {
    byte[] buf = new byte[256];
    packet = new DatagramPacket(buf, buf.length);
    socket.receive(packet);

    String received = new String(packet.getData());
    System.out.println("Quote of the Moment: " + received);
}

socket.leaveGroup(group);
socket.close();
Notice that the server uses a DatagramSocket to broadcast packet received by the client over a MulticastSocket. Alternatively, it could have used a MulticastSocket. The socket used by the server to send the DatagramPacket is not important. What's important when broadcasting packets is the addressing information contained in the DatagramPacket, and the socket used by the client to listen for it

Try this: 
Run the MulticastServer and several clients. Watch how the clients all get the same quotes.


Programmatic Access to Network Parameters
Systems often run with multiple active network connections, such as wired Ethernet, 802.11 b/g (wireless), and bluetooth. Some applications might need to access this information to perform the particular network activity on a specific connection.

The java.net.NetworkInterface class provides access to this information.

This lesson guides you through some of the more common uses of this class and provides examples that list all the network interfaces on a machine as well as their IP addresses and status.

What Is a Network Interface?
This page describes a network interface and explains why you might want to use it.

Retrieving Network Interfaces
This page contains an example that illustrates how a client program can retrieve all the network interfaces on a machine.

Listing Network Interface Addresses
This page shows you how to list the IP addresses assigned to all the network interfaces on a machine.

Network Interface Parameters
This page shows you how to determine whether a network interface is running or if the network interface is a loopback interface, a point-to-point interface, or a virtual interface. You can also learn how to determine if the interface supports multicasting.


What Is a Network Interface?
A network interface is the point of interconnection between a computer and a private or public network. A network interface is generally a network interface card (NIC), but does not have to have a physical form. Instead, the network interface can be implemented in software. For example, the loopback interface (127.0.0.1 for IPv4 and ::1 for IPv6) is not a physical device but a piece of software simulating a network interface. The loopback interface is commonly used in test environments.

The java.net.NetworkInterface class represents both types of interfaces.

NetworkInterface is useful for a multi-homed system, which is a system with multiple NICs. Using NetworkInterface, you can specify which NIC to use for a particular network activity.

For example, assume you have a machine with two configured NICs, and you want to send data to a server. You create a socket like this:

Socket soc = new java.net.Socket();
soc.connect(new InetSocketAddress(address, port));
To send the data, the system determines which interface is used. However, if you have a preference or otherwise need to specify which NIC to use, you can query the system for the appropriate interfaces and find an address on the interface you want to use. When you create the socket and bind it to that address, the system uses the associated interface. For example:

NetworkInterface nif = NetworkInterface.getByName("bge0");
Enumeration<InetAddress> nifAddresses = nif.getInetAddresses();

Socket soc = new java.net.Socket();
soc.bind(new InetSocketAddress(nifAddresses.nextElement(), 0));
soc.connect(new InetSocketAddress(address, port));
You can also use NetworkInterface to identify the local interface on which a multicast group is to be joined. For example:

NetworkInterface nif = NetworkInterface.getByName("bge0");
MulticastSocket ms = new MulticastSocket();
ms.joinGroup(new InetSocketAddress(hostname, port), nif);
NetworkInterface can be used with Java APIs in many other ways beyond the two uses described here.


Retrieving Network Interfaces
The NetworkInterface class has no public constructor. Therefore, you cannot just create a new instance of this class with the new operator. Instead, the following static methods are available so that you can retrieve the interface details from the system: getByInetAddress(), getByName(), and getNetworkInterfaces(). The first two methods are used when you already know the IP address or the name of the particular interface. The third method, getNetworkInterfaces() returns the complete list of interfaces on the machine.

Network interfaces can be hierarchically organized. The NetworkInterface class includes two methods, getParent() and getSubInterfaces(), that are pertinent to a network interface hierarchy. The getParent() method returns the parent NetworkInterface of an interface. If a network interface is a subinterface, getParent() returns a non-null value. The getSubInterfaces() method returns all the subinterfaces of a network interface.

The following example program lists the name of all the network interfaces and subinterfaces (if any exist) on a machine.

import java.io.*;
import java.net.*;
import java.util.*;
import static java.lang.System.out;

public class ListNIFs 
{
    public static void main(String args[]) throws SocketException {
        Enumeration<NetworkInterface> nets = NetworkInterface.getNetworkInterfaces();
        
        for (NetworkInterface netIf : Collections.list(nets)) {
            out.printf("Display name: %s\n", netIf.getDisplayName());
            out.printf("Name: %s\n", netIf.getName());
            displaySubInterfaces(netIf);
            out.printf("\n");
        }
    }

    static void displaySubInterfaces(NetworkInterface netIf) throws SocketException {
        Enumeration<NetworkInterface> subIfs = netIf.getSubInterfaces();
        
        for (NetworkInterface subIf : Collections.list(subIfs)) {
            out.printf("\tSub Interface Display name: %s\n", subIf.getDisplayName());
            out.printf("\tSub Interface Name: %s\n", subIf.getName());
        }
     }
}  
The following is sample output from the example program:

Display name: bge0
Name: bge0
    Sub Interface Display name: bge0:3
    Sub Interface Name: bge0:3
    Sub Interface Display name: bge0:2
    Sub Interface Name: bge0:2
    Sub Interface Display name: bge0:1
    Sub Interface Name: bge0:1

Display name: lo0
Name: lo0



Listing Network Interface Addresses
One of the most useful pieces of information you can get from a network interface is the list of IP addresses that are assigned to it. You can obtain this information from a NetworkInterface instance by using one of two methods. The first method, getInetAddresses(), returns an Enumeration of InetAddress. The other method, getInterfaceAddresses(), returns a list of java.net.InterfaceAddress instances. This method is used when you need more information about an interface address beyond its IP address. For example, you might need additional information about the subnet mask and broadcast address when the address is an IPv4 address, and a network prefix length in the case of an IPv6 address.

The following example program lists all the network interfaces and their addresses on a machine:

import java.io.*;
import java.net.*;
import java.util.*;
import static java.lang.System.out;

public class ListNets {

    public static void main(String args[]) throws SocketException {
        Enumeration<NetworkInterface> nets = NetworkInterface.getNetworkInterfaces();
        for (NetworkInterface netint : Collections.list(nets))
            displayInterfaceInformation(netint);
    }

    static void displayInterfaceInformation(NetworkInterface netint) throws SocketException {
        out.printf("Display name: %s\n", netint.getDisplayName());
        out.printf("Name: %s\n", netint.getName());
        Enumeration<InetAddress> inetAddresses = netint.getInetAddresses();
        for (InetAddress inetAddress : Collections.list(inetAddresses)) {
            out.printf("InetAddress: %s\n", inetAddress);
        }
        out.printf("\n");
     }
}  
The following is sample output from the example program:

Display name: TCP Loopback interface
Name: lo
InetAddress: /127.0.0.1

Display name: Wireless Network Connection
Name: eth0
InetAddress: /192.0.2.0


Network Interface Parameters
You can access network parameters about a network interface beyond the name and IP addresses assigned to it

You can discover if a network interface is “up” (that is, running) with the isUP() method. The following methods indicate the network interface type:

isLoopback() indicates if the network interface is a loopback interface.
isPointToPoint() indicates if the interface is a point-to-point interface.
isVirtual() indicates if the interface is a virtual interface.
The supportsMulticast() method indicates whether the network interface supports multicasting. The getHardwareAddress() method returns the network interface's physical hardware address, usually called MAC address, when it is available. The getMTU() method returns the Maximum Transmission Unit (MTU), which is the largest packet size.

The following example expands on the example in Listing Network Interface Addresses by adding the additional network parameters described on this page:

import java.io.*;
import java.net.*;
import java.util.*;
import static java.lang.System.out;

public class ListNetsEx {

    public static void main(String args[]) throws SocketException {
        Enumeration<NetworkInterface> nets = NetworkInterface.getNetworkInterfaces();
        for (NetworkInterface netint : Collections.list(nets))
            displayInterfaceInformation(netint);
    }

    static void displayInterfaceInformation(NetworkInterface netint) throws SocketException {
        out.printf("Display name: %s\n", netint.getDisplayName());
        out.printf("Name: %s\n", netint.getName());
        Enumeration<InetAddress> inetAddresses = netint.getInetAddresses();
        
        for (InetAddress inetAddress : Collections.list(inetAddresses)) {
            out.printf("InetAddress: %s\n", inetAddress);
        }
       
        out.printf("Up? %s\n", netint.isUp());
        out.printf("Loopback? %s\n", netint.isLoopback());
        out.printf("PointToPoint? %s\n", netint.isPointToPoint());
        out.printf("Supports multicast? %s\n", netint.supportsMulticast());
        out.printf("Virtual? %s\n", netint.isVirtual());
        out.printf("Hardware address: %s\n",
                    Arrays.toString(netint.getHardwareAddress()));
        out.printf("MTU: %s\n", netint.getMTU());
        out.printf("\n");
     }
}  
The following is sample output from the example program:

Display name: bge0
Name: bge0
InetAddress: /fe80:0:0:0:203:baff:fef2:e99d%2
InetAddress: /129.156.225.59
Up? true
Loopback? false
PointToPoint? false
Supports multicast? false
Virtual? false
Hardware address: [0, 3, 4, 5, 6, 7]
MTU: 1500

Display name: lo0
Name: lo0
InetAddress: /0:0:0:0:0:0:0:1%1
InetAddress: /127.0.0.1
Up? true
Loopback? true
PointToPoint? false
Supports multicast? false
Virtual? false
Hardware address: null
MTU: 8232


Cookies
Though you are probably already familiar with cookies, you might not know how to take advantage of them in your Java application. This lesson guides you through the concept of cookies and explains how to set a cookie handler so that your HTTP URL connections will use it.

Java SE provides one main class for this functionality, java.net.CookieHandler, and the following supporting classes and interfaces: java.net.CookieManager, java.net.CookiePolicy, java.net.CookieStore, and java.net.HttpCookie.

HTTP State Management With Cookies
This page describes cookies and explains how they are used to provide sessions.

CookieHandler Callback Mechanism
This page explains how a cookie handler is called when you access a web site and how to set a cookie handler.

Default CookieManager
Java SE provides a default cookie handler implementation that is sufficient in most cases and highly customizable.

Custom CookieManager
Here are some examples of how to customize the cookie policy and write your own cookie store.


HTTP State Management With Cookies
The HTTP state management mechanism specifies a way to create a stateful session with HTTP requests and responses.

Generally, HTTP request/response pairs are independent of each other. However, the state management mechanism enables clients and servers that can exchange state information to put these pairs in a larger context, which is called a session. The state information used to create and maintain the session is called a cookie.

A cookie is a piece of data that can be stored in a browser's cache. If you visit a web site and then revisit it, the cookie data can be used to identify you as a return visitor. Cookies enable state information, such as an online shopping cart, to be remembered. A cookie can be short term, holding data for a single web session, that is, until you close the browser, or a cookie can be longer term, holding data for a week or a year.

For more information about HTTP state management, see RFC 2965: HTTP State Management Mechanism.



CookieHandler Callback Mechanism
HTTP state management is implemented in Java SE through the java.net.CookieHandler class. A CookieHandler object provides a callback mechanism to provide an HTTP state management policy implementation in the HTTP protocol handler. That is, URLs that use HTTP as the protocol, new URL("http://example.com") for example, will use the HTTP protocol handler. This protocol handler calls back to the CookieHandler object, if set, to handle the state management.

The CookieHandler class is an abstract class that has two pairs of related methods. The first pair, getDefault() and setDefault(cookieHandler), are static methods that enable you to discover the current handler that is installed and to install your own handler.

No default handler is installed, and installing a handler is done on a system-wide basis. For applications running within a secure environment, that is, they have a security manager installed, you must have special permission to get and set the handler. For more information, see java.net.CookieHandler.getDefault.

The second pair of related methods, put(uri, responseHeaders) and get(uri, requestHeaders), enable you to set and get all the applicable cookies to and from a cookie cache for the specified URI in the response/request headers, respectively. These methods are abstract, and a concrete implementation of a CookieHandler must provide the implementation.

Java Web Start and Java Plug-in have a default CookieHandler installed. However, if you are running a stand-alone application and want to enable HTTP state management, you must set a system-wide handler. The next two pages in this lesson show you how to do so.

Default CookieManager
java.net.CookieManager provides a concrete implementation of a CookieHandler and for most users is sufficient for handling HTTP state management. CookieManager separates the storage of cookies from the policy surrounding, accepting, and rejecting them. A CookieManager is initialized with a java.net.CookieStore and a java.net.CookiePolicy. CookieStore manages the storage of the cookies. CookiePolicy makes policy decisions on cookie acceptance and rejection.

The following code shows how to create and set a system-wide CookieManager:

java.net.CookieManager cm = new java.net.CookieManager();
java.net.CookieHandler.setDefault(cm);
The first line calls the default CookieManager constructor to create the instance. The second line calls the static setDefault method of CookieHandler to set the system-wide handler.

The default CookieManager constructor creates a new CookieManager instance with a default cookie store and accept policy. CookieStore is the place where any accepted HTTP cookie is stored. If not specified when created, a CookieManager instance will use an internal in-memory implementation. This implementation is not persistent and only lives for the lifetime of the Java Virtual Machine. Users requiring a persistent store must implement their own store.

The default cookie policy used by CookieManager is CookiePolicy.ACCEPT_ORIGINAL_SERVER, which only accepts cookies from the original server. So, the Set-Cookie response from the server must have a “domain” attribute set, and it must match the domain of the host in the URL. For more information, see java.net.HttpCookie.domainMatches. Users requiring a different policy must implement the CookiePolicy interface and pass it to the CookieManager constructor or set it to an already constructed CookieManager instance by using the setCookiePolicy(cookiePolicy) method.

When retrieving cookies from the cookie store, CookieManager also enforces the path-match rule from section 3.3.4 of RFC 2965 . So, a cookie must also have its “path” attribute set so that the path-match rule can be applied before the cookie is retrieved from the cookie store.

In summary, CookieManager provides the framework for handling cookies and provides a good default implementation for CookieStore. CookieManager is highly customizable by enabling you to set your own CookieStore, CookiePolicy, or both.


Custom CookieManager
Two aspects of the CookieManager class can be customized, the CookiePolicy and the CookieStore.

CookiePolicy
For convenience, CookiePolicy defines the following pre-defined policies for accepting cookies:

CookiePolicy.ACCEPT_ORIGINAL_SERVER only accepts cookies from the original server.
CookiePolicy.ACCEPT_ALL accepts all cookies.
CookiePolicy.ACCEPT_NONE accepts no cookies.
You can also define your own cookie policy by implementing the shouldAccept method of CookiePolicy. You can then use this CookiePolicy by passing it to the multi-argument CookieManager constructor or by calling the setCookiePolicy(cookiePolicy) method to change an already existing cookie manager.
The following is an example of a cookie policy that rejects cookies from domains that are on a blacklist, before applying the CookiePolicy.ACCEPT_ORIGINAL_SERVER policy:

import java.net.*;

public class BlacklistCookiePolicy implements CookiePolicy {
    String[] blacklist;

    public BlacklistCookiePolicy(String[] list) {
        blacklist = list;
    }

    public boolean shouldAccept(URI uri, HttpCookie cookie)  {
        String host;
        try {
            host =  InetAddress.getByName(uri.getHost()).getCanonicalHostName();
        } catch (UnknownHostException e) {
            host = uri.getHost();
        }

        for (int i = 0; i<blacklist.length; i++) {
	    if (HttpCookie.domainMatches(blacklist[i], host)) {
                return false;
            }
        }

        return CookiePolicy.ACCEPT_ORIGINAL_SERVER.shouldAccept(uri, cookie);
    }
}
When you create a BlacklistCookiePolicy instance, you pass it an array of strings representing the domains that you do not want to accept cookies from. Then, you set this BlacklistCookiePolicy instance as the cookie policy for your CookieManager. For example:
String[] list = new String[]{ ".example.com" };
CookieManager cm = new CookieManager(null, new BlacklistCookiePolicy(list));
CookieHandler.setDefault(cm);
The sample code will not accept cookies from hosts such as the following:
host.example.com
domain.example.com
However, this sample code will accept cookies from hosts such as the following:
example.com
example.org
myhost.example.org
CookieStore
A CookieStore is an interface that represents a storage area for cookies. CookieManager adds the cookies to the CookieStore for every HTTP response and retrieves cookies from the CookieStore for every HTTP request.
You can implement this interface to provide your own CookieStore and pass it to the CookieManager during creation. You cannot set the CookieStore after the CookieManager instance has been created. However, you can get a reference to the cookie store by calling CookieManager.getCookieStore(). Doing so can be useful as it enables you to leverage the default in-memory CookieStore implementation that is provided by Java SE and complement its functionality.

For example, you might want to create a persistent cookie store that would save cookies so that they can be used even if the Java Virtual Machine is restarted. Your implementation would work similar to the following:

Any cookies that were previously saved are read in.
During runtime, cookies are stored and retrieved from memory.
Cookies are written out to persistent storage before exiting.
The following is an incomplete example of this cookie store. This example shows you how to leverage the Java SE default in-memory cookie store and how you might extend its functionality.

import java.net.*;
import java.util.*;

public class PersistentCookieStore implements CookieStore, Runnable {
    CookieStore store;

    public PersistentCookieStore() {
        // get the default in memory cookie store
        store = new CookieManager().getCookieStore();

        // todo: read in cookies from persistant storage
        // and add them store

        // add a shutdown hook to write out the in memory cookies
        Runtime.getRuntime().addShutdownHook(new Thread(this)); 
    }

    public void run() {
        // todo: write cookies in store to persistent storage
    }

    public void	add(URI uri, HttpCookie cookie) {
        store.add(uri, cookie);
    }

    public List<HttpCookie> get(URI uri) {
        return store.get(uri);
    }

    public List<HttpCookie> getCookies() {
        return store.getCookies();
    }
    
    public List<URI> getURIs() {
        return store.getURIs();
    }

    public boolean remove(URI uri, HttpCookie cookie) {
        return store.remove(uri, cookie);
    }

    public boolean removeAll()  {
        return store.removeAll();
    }
}




Evaluation often differs based on which API layer you use:
Low-Level (java.net.Socket): Provides fine-grained control over IP addresses and bidirectional data streams.
High-Level (java.net.URL, java.net.HttpURLConnection): Simpler to use but adds more overhead as it handles protocol-specific details like HTTP headers.
Non-blocking I/O (java.nio): Scalable for thousands of concurrent connections but requires more complex evaluation of selector and buffer management. 



Servlet is an extension of Java's networking capabilities, specifically designed for the request-response model of the web.
While the core java.net package provides the "plumbing" (sockets and packets), the Jakarta Servlet API (formerly Java Servlet) provides the "architecture" for building server-side applications.

Servlets sit on top of the standard Java networking stack to simplify complex tasks:
Protocol Management: You don't have to parse raw TCP/IP streams; the Servlet container (like Tomcat) handles the headers, cookies, and body.
Lifecycle Management: The container manages the creation, execution, and destruction of Servlet instances (init, service, destroy).
Multithreading: Instead of manually managing a ServerSocket and spawning threads for every user, the container manages a Thread Pool for you.
Session Tracking: It provides built-in mechanisms to remember users across multiple requests (HTTPSession), which isn't possible with raw sockets alone.




- JDK 19:- HTTPS Channel Binding support for Java GSS/Kerberos.
    - MD5 and SHA-1 are disabled by default for HTTP Digest Authentication.
    - Improved HTTP Proxy Detction on Windows.
    - Make HttpURLConnection default Keep Alive Timeout Configurable.

- JDK 18:- JEP 408: Simple Web Server.
    - InetAddress resolution SPI
    - Removal of support for Pre JDK 1.4 DatagramSocketImpl implementations.