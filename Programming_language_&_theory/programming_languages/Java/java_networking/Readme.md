# Networking

The Internet is the global network of millions of computers. Your computer can connect to the Internet through an Internet Service Provider (ISP) using a dialup, DSL, or cable modem, or through a local area network (LAN).
With networks, a single program can retrieve information stored in millions of computers located anywhere in the world. A single program can communicate with tens of millions of people. A single program can harness the power of many computers to work on one problem.

When a computer needs to communicate with another computer, it needs to know the other computer’s address.
An `Internet Protocol (IP)` address uniquely identifies the computer on the Internet. An IP address consists of four dotted decimal numbers between 0 and 255, such as 130.254.204.31. Since it is not easy to remember so many numbers, they are often mapped to meaningful names called domain names, such as liang.armstrong.edu. Special servers called Domain Name Servers (DNS) on the Internet translate host names into IP addresses.

When a computer contacts liang.armstrong.edu, it first asks the DNS to translate this domain name into a numeric IP address and then sends the request using the IP address.
The Internet Protocol is a low-level protocol for delivering data from one computer to another across the Internet in packets. Two higher-level protocols used in conjunction with the IP are the Transmission Control Protocol (TCP) and the User Datagram Protocol (UDP).

Computers running on the Internet communicate to each other using either the Transmission Control Protocol (TCP) or the User Datagram Protocol (UDP):

- `TCP` enables two hosts to establish a connection and exchange streams of data. TCP guarantees delivery of data and also guarantees that packets will be delivered in the same order in which they were sent.TCP - TCP (Transmission Control Protocol) is a connection-based protocol that provides a reliable flow of data between two computers.
  TCP provides a point-to-point channel for applications that require reliable communications. The Hypertext Transfer Protocol (HTTP), File Transfer Protocol (FTP), and Telnet are all examples of applications that require a reliable communication channel. The order in which the data is sent and received over the network is critical to the success of these applications. When HTTP is used to read from a URL, the data must be received in the order in which it was sent. Otherwise, you end up with a jumbled HTML file, a corrupt zip file, or some other invalid information.

- `UDP` is a standard, low-overhead, connectionless, host-to-host protocol that is used over the IP. UDP allows an application program on one computer to send a datagram to an application program on another computer.UDP (User Datagram Protocol) is a protocol that sends independent packets of data, called datagrams, from one computer to another with no guarantees about arrival. UDP is not connection-based like TCP.
  The UDP protocol provides for communication that is not guaranteed between two applications on the network. UDP is not connection-based like TCP. Rather, it sends independent packets of data, called datagrams, from one application to another. Sending datagrams is much like sending a letter through the postal service: The order of delivery is not important and is not guaranteed, and each message is independent of any other.

Java supports both stream-based and packet-based communications. Stream-based communications use TCP for data transmission, whereas packet-based communications use UDP.Since TCP can detect lost transmissions and resubmit them, transmissions are lossless and reliable. UDP, in contrast, cannot guarantee lossless transmission. Stream-based communications are used in most areas of Java programming.

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

`Example of network communication` - When you write Java programs that communicate over the network, you are programming at the application layer. Typically, you don't need to concern yourself with the TCP and UDP layers. Instead, you can use the classes in the java.net package. These classes provide system-independent network communication. However, to decide which Java classes your programs should use, you do need to understand how TCP and UDP differ.

When two applications want to communicate to each other reliably, they establish a connection and send data back and forth over that connection. This is analogous to making a telephone call. If you want to speak to Aunt Beatrice in Kentucky, a connection is established when you dial her phone number and she answers. You send data back and forth over the connection by speaking to one another over the phone lines. Like the phone company, TCP guarantees that data sent from one end of the connection actually gets to the other end and in the same order it was sent. Otherwise, an error is reported.

For many applications, the guarantee of reliability is critical to the success of the transfer of information from one end of the connection to the other. However, other forms of communication don't require such strict standards. In fact, they may be slowed down by the extra overhead or the reliable connection may invalidate the service altogether.

Consider, for example, a clock server that sends the current time to its client when requested to do so. If the client misses a packet, it doesn't really make sense to resend it because the time will be incorrect when the client receives it on the second try. If the client makes two requests and receives packets from the server out of order, it doesn't really matter because the client can figure out that the packets are out of order and make another request. The reliability of TCP is unnecessary in this instance because it causes performance degradation and may hinder the usefulness of the service.

Another example of a service that doesn't need the guarantee of a reliable channel is the ping command. The purpose of the ping command is to test the communication between two programs over the network. In fact, ping needs to know about dropped or out-of-order packets to determine how good or bad the connection is. A reliable channel would invalidate this service altogether.

The UDP protocol provides for communication that is not guaranteed between two applications on the network. UDP is not connection-based like TCP. Rather, it sends independent packets of data from one application to another. Sending datagrams is much like sending a letter through the mail service: The order of delivery is not important and is not guaranteed, and each message is independent of any others.

Note:- Many firewalls and routers have been configured not to allow UDP packets. If you're having trouble connecting to a service outside your firewall, or if clients are having trouble connecting to your service, ask your system administrator if UDP is permitted.

`Ports` - Generally speaking, a computer has a single physical connection to the network. All data destined for a particular computer arrives through that connection. However, the data may be intended for different applications running on the computer. So how does the computer know to which application to forward the data? Through the use of ports.

Data transmitted over the Internet is accompanied by addressing information that identifies the computer and the port for which it is destined. The computer is identified by its 32-bit IP address, which IP uses to deliver data to the right computer on the network. Ports are identified by a 16-bit number, which TCP and UDP use to deliver the data to the right application.

In connection-based communication such as TCP, a server application binds a socket to a specific port number. This has the effect of registering the server with the system to receive all data destined for that port. A client can then rendezvous with the server at the server's port, as illustrated here:

A client communicating to a server through its port
Definition:
The TCP and UDP protocols use ports to map incoming data to a particular process running on a computer.

In datagram-based communication such as UDP, the datagram packet contains the port number of its destination and UDP routes the packet to the appropriate application, as illustrated in this figure:

`Routing the packet to the appropriate application.`Port numbers range from 0 to 65,535 because ports are represented by 16-bit numbers. The port numbers ranging from 0 - 1023 are restricted; they are reserved for use by well-known services such as HTTP and FTP and other system services. These ports are called well-known ports. Your applications should not attempt to bind to them.

## Java Networking

Java Networking is a concept of connecting two or more computing devices together so that we can share resources.With networks, a single program can regain information stored in millions of computers positioned anywhere in the world. Java Networking is a notion of combining two or more computing devices together to share resources.
Java Socket Programming provides facility to share data between different computing devices.All the Java program communications over the network are done at the application layer.

Java's core library includes classes for communicating with Internet hosts using the TCP and UDP protocols of the TCP/IP family. You just tell Java what IP address and port you want, and Java handles the low-level details.Once a program has connected to a server, the local program must understand the protocol that the remote server speaks and properly interpret the data the server sends back.

A Java program can connect to a network time-server to synchronize itself with an atomic clock.A Java program can speak any custom protocols it needs to speak, including the one to control the HAWC.

- Advantage of Java Networking :-
  1. sharing resources
  2. centralized software management

The `java.net` package of the J2SE APIs comprises various classes and interfaces that provide an easy-to-use means to access network resources, enabling the user to formulate programs that focus on resolving the problem.
Package `javax.net`, introduced in J2SE 1.4, contains factory classes for creating sockets in an implementation-independent fashion. Using classes from these packages (primarily from the former), the network programmer can communicate with any server on the Internet or implement his/her own Internet server.

Networking Classes in the JDK - Through the classes in java.net, Java programs can use TCP or UDP to communicate over the Internet. The URL, URLConnection, Socket, and ServerSocket classes all use TCP to communicate over the network. The DatagramPacket, DatagramSocket, and MulticastSocket classes are for use with UDP.

Some of the widely used java networking terminologies are as follows:

1. IP Address- IP address is a unique number assigned to a node of a network e.g. 192.168.0.1. It is composed of octets that range from 0 to 255. It is a logical address that can be changed.An IP address is either a 32-bit or 128-bit unsigned number used by IP, a lower-level protocol on which protocols like UDP and TCP are built.
2. Protocol- A protocol is a set of rules basically that is followed for communication. For example: TCP, FTP, Telnet, SMTP, POP, etc.
3. Port Number- The port number is used to uniquely identify different applications. It acts as a communication endpoint between applications. The port number is associated with the IP address for communication between two applications.
4. MAC Address- MAC (Media Access Control) Address is a unique identifier of NIC (Network Interface Controller). A network node can have multiple NIC but each with unique MAC. The main difference between MAC and IP address is that, MAC Address is used to ensure the physical address of computer. It uniquely identifies the devices on a network. While IP address are used to uniquely identifies the connection of network with that device take part in a network.
5. Socket- A socket is one endpoint of a two-way communication connection between the two applications running on the network. The socket mechanism presents a method of inter-process communication (IPC) by setting named contact points between which the communication occurs. A socket is tied to a port number so that the TCP layer can recognize the application to which the data is intended to be sent.Includes:-
   - TCP Sockets: Use Socket and ServerSocket classes.
   - UDP Sockets: Use DatagramSocket and DatagramPacket.
6. Connection-oriented protocol- In connection-oriented protocol, acknowledgement is sent by the receiver. So, it is reliable but slow. The example of connection-oriented protocol is TCP.
7. Connection-less protocol- In connection-less protocol, acknowledgement is not sent by the receiver. So, it is not reliable but fast. The example of connection-less protocol is UDP.

| <!-- -->            | <!-- -->               | <!-- -->          | <!-- -->           | <!-- -->         |
| ------------------- | ---------------------- | ----------------- | ------------------ | ---------------- |
| Authenticator       | CacheRequest           | CacheResponse     | ContentHandler     | CookieHandler    |
| CookieManager       | DatagramPacket         | DatagramSocket    | DatagramSocketImpl | InterfaceAddress |
| JarURLConnection    | MulticastSocket        | InetSocketAddress | InetAddress        | Inet4Address     |
| Inet6Address        | IDN                    | HttpURLConnection | HttpCookie         | NetPermission    |
| NetworkInterface    | PasswordAuthentication | Proxy             | ProxySelector      | ResponseCache    |
| SecureCacheResponse | ServerSocket           | Socket            | SocketAddress      | SocketImpl       |
| SocketPermission    | StandardSocketOptions  | URI               | URL                | URLClassLoader   |
| URLConnection       | URLDecoder             | URLEncoder        | URLStreamHandler   | -                |

1. CacheRequest - The CacheRequest class is used in java whenever there is a need to store resources in ResponseCache. The objects of this class provide an edge for the OutputStream object to store resource data into the cache.
2. CookieHandler- The CookieHandler class is used in Java to implement a callback mechanism for securing up an HTTP state management policy implementation inside the HTTP protocol handler. The HTTP state management mechanism specifies the mechanism of how to make HTTP requests and responses.
3. CookieManager - The CookieManager class is used to provide a precise implementation of CookieHandler. This class separates the storage of cookies from the policy surrounding accepting and rejecting cookies. A CookieManager comprises a CookieStore and a CookiePolicy.
4. Proxy- A proxy is a changeless object and a kind of tool or method or program or system, which serves to preserve the data of its users and computers. It behaves like a wall between computers and internet users. A Proxy Object represents the Proxy settings to be applied with a connection.
5. URLConnection- The URLConnection class in Java is an abstract class describing a connection of a resource as defined by a similar URL. The URLConnection class is used for assisting two distinct yet interrelated purposes. Firstly it provides control on interaction with a server(especially an HTTP server) than a URL class. Furthermore, with a URLConnection, a user can verify the header transferred by the server and can react consequently. A user can also configure header fields used in client requests using URLConnection.

The java.net package includes various interfaces also that provide an easy-to-use means to access network resources. The interfaces included in the java.net package are as follows:-

1. CookiePolicy- The CookiePolicy interface in the java.net package provides the classes for implementing various networking applications. It decides which cookies should be accepted and which should be rejected. In CookiePolicy, there are three pre-defined policy implementations, namely ACCEPT_ALL, ACCEPT_NONE, and ACCEPT_ORIGINAL_SERVER.
2. CookieStore- A CookieStore is an interface that describes a storage space for cookies. CookieManager combines the cookies to the CookieStore for each HTTP response and recovers cookies from the CookieStore for each HTTP request.
3. FileNameMap- The FileNameMap interface is an uncomplicated interface that implements a tool to outline a file name and a MIME type string. FileNameMap charges a filename map ( known as a mimetable) from a data file.
4. SocketOption- The SocketOption interface helps the users to control the behavior of sockets. Often, it is essential to develop necessary features in Sockets. SocketOptions allows the user to set various standard options.
5. SocketImplFactory- The SocketImplFactory interface defines a factory for SocketImpl instances. It is used by the socket class to create socket implementations that implement various policies.
6. ProtocolFamily- This interface represents a family of communication protocols. The ProtocolFamily interface contains a method known as name(), which returns the name of the protocol family.

_Java Network evolution_ - Networking capabilities of java was originally centered around java.net package.It has undergone transformation from basic, blocking socket operations into modern, asynchronous and cloud-optimized frameworks.Three major transitions are:- blocking API to non-blocking NIO, intoduxtion of modern native HTTP clint(java.net.http) and optimizations for virtual threads.

- `Foundations` - Socket, ServerSocket, URLConnection, etc - Introduced low-level TCP/UDP socket streams.Relied entirely on native, synchronous blocking I/O, requiring one OS thread per connection.
- `NIO` - java.nio.channels(Selectors, Channels) - Introduced non-blocking and asynchronous I/O to handle concurrent connections efficiently.
- `HTTP Client` - java.net.http module - Standardized a fluent, modern HTTP Client API. Replaced HttpURLConnection with built-in support for HTTP/1.1, HTTP/2, asynchronous callbacks and wbsockets.
- `Reimplementation` - Completely replaced legacy underlying implementations(NioSocketImpl).Maintained backward compatibility while managing sockets with virtual threads.
- `Modern standards & HTTP/3` - Added early native infrastructure for HTTP/3 protocols with automated response limiting features for improved security.

The java.net package can be roughly divided in two sections:

- A Low Level API provides fine-grained control over IP addresses and bidirectional data streams, which deals with the following abstractions:
  1. Addresses, which are networking identifiers, like IP addresses.
  2. Sockets, which are basic bidirectional data communication mechanisms.
  3. Interfaces, which describe network interfaces.
- A High Level API is simpler to use but adds more overhead as it handles protocol-specific details like HTTP headers., which deals with the following abstractions:
  1. URIs, which represent Universal Resource Identifiers.
  2. URLs, which represent Universal Resource Locators.
  3. Connections, which represents connections to the resource pointed to by URLs.

URLs and URLConnections provide a relatively high-level mechanism for accessing resources on the Internet. Sometimes your programs require lower-level network communication, for example, when you want to write a client-server application.

## Low level API

**Addresses** - Devices connected to the Internet are called `nodes`. Nodes that are computers are called hosts. Each node or host is identified by at least one unique number called an Internet address or an IP address. Most current IP addresses are 4-byte-long IPv4 addresses.
However, a small but growing number of IP addresses are 16-byte-long IPv6 addresses.(4 and 6 refer to the version of the Internet Protocol, not the number of the bytes in the address.) Both IPv4 and IPv6 addresses are ordered sequences of bytes, like an array.They aren’t numbers, and they aren’t ordered in any predictable or useful sense.

Addresses are used throughout the java.net APIs as either host identifiers, or socket endpoint identifiers.

_The InetAddress Class_:- The java.net.InetAddress class is Java’s high-level representation of an IP address, both IPv4 and IPv6. It is used by most of the other networking classes, including Socket, ServerSocket, URL, DatagramSocket, DatagramPacket, and more. Usually, it includes both a hostname and an IP address.
The InetAddress class is used to encapsulate both the numerical IP address and the domain name for the address. You interact with this class by using the name of an IP host, which is more convenient and understandable than its IP address. The InetAddress class hides the number inside. InetAddress can handle both IPv4 and IPv6 addresses.
An instance of an InetAddress consists of an IP address and possibly its corresponding host name (depending on whether it is constructed with a host name or whether it has already done reverse host name resolution).

Java includes support for both IPv4 and IPv6 addresses. Because of this, two subclasses of InetAddress were created: Inet4Address and Inet6Address.
`Inet4Address` represents a traditional-style IPv4 address. `Inet6Address` encapsulates a newer IPv6 address. Because they are subclasses of InetAddress, an InetAddress reference can refer to either. This is one way that Java was able to add IPv6 functionality without breaking existing code or adding many more classes. For the most part, you can simply use InetAddress when working with IP addresses because it can accommodate both styles.

_Factory Methods_ - The InetAddress class has no visible constructors. To create an InetAddress object, you have to use one of the available factory methods. Factory methods are merely a convention whereby static methods in a class return an instance of that class. This is done in lieu of overloading a constructor with various parameter lists when having unique method names makes the results much clearer.

- Static method `getByName` of this class uses DNS (Domain Name System) to return the Internet address of a specified host name as an InetAddress object. In order to display the IP address from this object, we can simply use method println (which will cause the object’s toString method to be executed).
- InetAddress also includes the factory method `getByAddress( )`, which takes an IP address and returns an InetAddress object. Either an IPv4 or an IPv6 address can be used.
- The `getLocalHost( ) method` simply returns the InetAddress object that represents the local host.

If these methods are unable to resolve the host name, they throw an UnknownHostException.

The server program can use the InetAddress class to obtain the information about the IP address and host name for the client.Occasionally, you would like to know who is connecting to the server. You can use the InetAddress class to find the client’s host name and IP address. The InetAddress class models an IP address. You can use the following statement in the server program to get an instance of InetAddress on a socket that connects to the client.

```java
InetAddress inetAddress = socket.getInetAddress();
System.out.println("Client's IP Address is " + inetAddress.getHostAddress());

InetAddress address = InetAddress.getByName("liang.armstrong.edu");
```

**Sockets** - In client-server applications, the server provides some service, such as processing database queries or sending out current stock prices. The client uses the service provided by the server, either displaying database query results to the user or making stock purchase recommendations to an investor. The communication that occurs between the client and the server must be reliable. That is, no data can be dropped and it must arrive on the client side in the same order in which the server sent it.
In order to support the inter-process communication, specific support has to be provided by both the operating system and the programming language used.Sockets,is one of the major solutions employed by network programming for the inter-process communications.

`Sockets` provide the application developer with direct basic access to transport protocols, offering data packet transport services between a sender and a receiver host over the network, while hiding the complexity and implementation details of the protocol stack below.

Sockets are network communication link end-points between two applications (i.e., server and client). They offer basic transport data communication support and hide lower layer implementation details. They provide a higher level of abstraction for the communication infrastructure beneath and enable support for fast and easy network- based applications development.

- There are two type of sockets that can be used for application development:- transport layer sockets and application layer sockets.
  - `Transport layer sockets` make use of transport-layer protocols such as the Transmission Control Protocol (TCP) and User Datagram Protocol (UDP). UDP is a connectionless non-reliable transmission of datagrams protocol, similar to the postal service. TCP is a connection-based reliable, orderly transmission of data packets, similar to the telephone service.
  - `Application layer sockets` make use of application-layer protocols such as the Hypertext Transfer Protocol (HTTP) and Simple Mail Transfer Protocol (SMTP). HTTP is a TCP-based web page delivery service, while SMTP is a TCP-based e-mail delivery service.

TCP provides a reliable, point-to-point communication channel that client-server applications on the Internet use to communicate with each other. To communicate over TCP, a client program and a server program establish a connection to one another. Each program binds a socket to its end of the connection. To communicate, the client and the server each reads from and writes to the socket bound to the connection.

Sockets offer the basic mechanisms for data communication between two processes, each running on a distinct machine.Client–server is a request–response remote communication model that involves processes requesting services from other processes which offer these services via the network.

The Java API provides the classes for creating sockets to facilitate program communications over the Internet.Java Socket programming is used for communication between the applications running on different JRE. Java Socket programming can be connection-oriented or connection-less.

Network programming usually involves a server and one or more clients. The client sends requests to the server, and the server responds. The client begins by attempting to establish a connection to the server. The server can accept or deny the connection. Once a connection is established, the client and the server communicate through sockets.The server must be running when a client attempts to connect to the server. The server waits for a connection request from the client.

Sockets are the endpoints of logical connections between two hosts and can be used to send and receive data. Java treats socket communications much as it treats I/O operations; thus, programs can read from or write to sockets as easily as they can read from or write to files.
Java implements both TCP/IP sockets and datagram sockets (UDP sockets).

_Socket_ - A socket is one end-point of a two-way communication link between two programs running on the network. Socket classes are used to represent the connection between a client program and a server program. The java.net package provides two classes--Socket and ServerSocket--that implement the client side of the connection and the server side of the connection, respectively.
A socket is one endpoint of a two-way communication link between two programs running on the network. A socket is bound to a port number so that the TCP layer can identify the application that data is destined to be sent to.

Normally, a server runs on a specific computer and has a socket that is bound to a specific port number. The server just waits, listening to the socket for a client to make a connection request.

On the client-side: The client knows the hostname of the machine on which the server is running and the port number on which the server is listening. To make a connection request, the client tries to rendezvous with the server on the server's machine and port. The client also needs to identify itself to the server so it binds to a local port number that it will use during this connection. This is usually assigned by the system.

A client's connection request - If everything goes well, the server accepts the connection. Upon acceptance, the server gets a new socket bound to the same local port and also has its remote endpoint set to the address and port of the client. It needs a new socket so that it can continue to listen to the original socket for connection requests while tending to the needs of the connected client.
The connection is made - On the client side, if the connection is accepted, a socket is successfully created and the client can use the socket to communicate with the server.
The client and server can now communicate by writing to or reading from their sockets.

An endpoint is a combination of an IP address and a port number. Every TCP connection can be uniquely identified by its two endpoints. That way you can have multiple connections between your host and the server.

The java.net package in the Java platform provides a class, `Socket`, that implements one side of a two-way connection between your Java program and another program on the network. The Socket class sits on top of a platform-dependent implementation, hiding the details of any particular system from your Java program. By using the java.net.Socket class instead of relying on native code, your Java programs can communicate over the network in a platform-independent fashion.

Additionally, java.net includes the ServerSocket class, which implements a socket that servers can use to listen for and accept connections to clients.

If you are trying to connect to the Web, the URL class and related classes (URLConnection, URLEncoder) are probably more appropriate than the socket classes. In fact, URLs are a relatively high-level connection to the Web and use sockets as part of the underlying implementation.

The server program begins by creating a new ServerSocket object to listen on a specific port . When running this server, choose a port that is not already dedicated to some other service.
ServerSocket is a java.net class that provides a system-independent implementation of the server side of a client/server socket connection. The constructor for ServerSocket throws an exception if it can't listen on the specified port (for example, the port is already being used).
If the server successfully binds to its port, then the ServerSocket object is successfully created and the server continues to the next step—accepting a connection from a client.

clientSocket = serverSocket.accept();

The accept method waits until a client starts up and requests a connection on the host and port of this server. When a connection is requested and successfully established, the accept method returns a new Socket object which is bound to the same local port and has its remote address and remote port set to that of the client. The server can communicate with the client over this new Socket and continue to listen for client connection requests on the original ServerSocket This particular version of the program doesn't listen for more client connection requests.

The Java runtime automatically closes the input and output streams, the client socket, and the server socket because they have been created in the try-with-resources statement.

All client/server pairs must have some protocol by which they speak to each other; otherwise, the data that passes back and forth would be meaningless. The protocol that your own clients and servers use depends entirely on the communication required by them to accomplish the task.

When you start the client program, the server should already be running and listening to the port, waiting for a client to request a connection.

If you try to start a second client while the first client is connected to the server, the second client just hangs.

Supporting Multiple Clients - multiple client requests can come into the same port and, consequently, into the same ServerSocket. Client connection requests are queued at the port, so the server must accept the connections sequentially. However, the server can service them simultaneously through the use of threads—one thread per each client connection.

The basic flow of logic in such a server is this:

while (true) {
accept a connection;
create a thread to deal with the client;
}
The thread reads from and writes to the client connection as necessary.

The network communication using sockets involves several basic steps which have to be followed by the application developer in order to have a functional transport mechanism between the two communicating parties.

- The first step involves creating and opening sockets. Each communicating party requires a separate socket. When creating/opening a socket, the important parameters to be provided include the IP address, port number, and communication protocol(TCP or UDP).
- The second step involves establishing contact or associating the socket with another socket. In order to be able to communicate, the sockets have to use the same protocol. In general, the client knows the server’s IP address, port number, and the protocol used and contacts it using these details. Depending on the protocol, it can either request a service or establish a connection.
- The third step consists of exchanging data between the two parties and represents the main stage of network application’s communication tasks. This step usually happens recursively. Information is sent and received by the two communicating sockets.
- The last step involves closing and destroying the sockets which closes the communication end-point. After this step the socket cannot be used for communication any more.

_TCP Sockets_:- As TCP is a connection-oriented protocol, when TCP sockets are used, connections are established between client and server hosts. Client and server TCP sockets are created first and are bound for the duration of the data communication session.Following connection establishment, TCP packets are sent to the partner’s socket.
These packets are guaranteed to arrive (if lost, retransmission occurs) and are received in order at the destination.
Exchanging messages using TCP sockets involves a set of steps that must be followed by the application developer. Next these steps are presented, with the focus on server and client side, respectively.

A communication link created via TCP/IP sockets is a connection-orientated link.This means that the connection between server and client remains open throughout the duration of the dialogue between the two and is only broken (under normal circumstances) when one end of the dialogue formally terminates the exchanges (via an agreed protocol).
Java provides the `ServerSocket` class for creating a server socket and the `Socket` class for creating a client socket. Two programs on the Internet communicate through a server socket and a client socket using I/O streams.

`Server Sockets`:-To establish a server, you need to create a server socket and attach it to a port, which is where the server listens for connections. The port identifies the TCP service on the socket. Port numbers range from 0 to 65536, but port numbers 0 to 1024 are reserved for privileged services.

The server creates a server socket and, once a connection to a client is established, connects to the client with a client socket.A server socket waits for requests to come in over the network. It performs some operation based on that request, and then possibly returns a result to the requester.The actual work of the server socket is performed by an instance of the SocketImpl class.The ServerSocket class defines convenience methods to set and get several socket options. This class also defines the setOption and getOption methods to set and query socket options.

- Server Socket- The ServerSocket class is used for implementing system-independent implementation of the server-side of a client/server Socket Connection. The constructor for ServerSocket class throws an exception if it can’t listen on the specified port. For example – it will throw an exception if the port is already being used.
- Socket- The Socket class is used to create socket objects that help the users in implementing all fundamental socket operations. The users can implement various networking actions such as sending, reading data, and closing connections. Each Socket object built using java.net.Socket class has been connected exactly with 1 remote host; for connecting to another host, a user must create a new socket object.

NOTE:- Attempting to create a server socket on a port already in use would cause a java.net.BindException.

For every client connecting to server a new socket is created.

1. Create a server socket object a port. The ServerSocket constructor requires a port number (1024–65535, for non-reserved ones) as an argument., e.g.,8000.
2. Put the server into a waiting state.The server waits indefinitely (‘blocks’) for a client to connect. It does this by calling method accept of class ServerSocket, which returns a Socket object when a connection is made.
3. Set up input and output streams.Methods getInputStream and getOutputStream of class Socket are used to get references to streams associated with the socket returned in step 2. These streams will be used for communication with the client that has just made connection.Similarly, we can wrap a PrintWriter object around the OutputStream object returned by method getOutputStream. Supplying the PrintWriter constructor with a second argument of true will cause the output buffer to be flushed for every call of println (which is usually desirable).
4. Close the connection (after completion of the dialogue).This is achieved via method close of class Socket.

`TCP Sockets—Client Side` Java TCP client communication steps:

1. Step 1—Create a TCP client socket and establish a connection to the server.

```java
InetAddress srvIPAddr;
int srvPortNo = 1234;
Socket sock = new Socket(srvIPAddr.getLocalHost(),srvPortNo);/*sock is a socket object*/
```

`TCP Sockets—Server Side`:- Java TCP server communication steps:

1. Step 1—Create a TCP server socket object.
2. Step 2—Set the server to wait (block) for clients to connect.
3. Step 3—Set input and output streams.
4. Step 4—Send and receive data.
5. Step 5—Close the connection.

```java
ServerSocket servSock = new ServerSocket(portno);/*1024 <= portno <= 65535*/
Socket sock = servSock.accept();/*sock is a socket object.*/
BufferedReader in = new BufferedReader(new InputStreamReader(sock.getInputStream()));
PrintWriter out = new PrintWriter(sock.getOutputStream(), true);
out.println("Waiting...");
String msg = in.readLine();
sock.close();
```

```java
ServerSocket serverSocket = new ServerSocket(8000);
Socket socket =serverSocket.accept();
Scanner input = new Scanner(socket.getInputStream());
String input = input.nextLine();
PrintWriter output = new PrintWriter(socket.getOutputStream(),true);
socket.close();
```

`Client Sockets`: - The client in socket programming must know two information:- IP Address of Server and Port number.

Open a socket.
Open an input stream and output stream to the socket.
Read from and write to the stream according to the server's protocol.
Close the streams.
Close the socket.

1. Establish a connection to the server.We create a Socket object, supplying its constructor with the following two arguments:- the server’s IP address (of type InetAddress); the appropriate port number for the service.
2. Set up input and output streams.These are set up in exactly the same way as the server streams were set up (by calling methods getInputStream and getOutputStream of the Socket object)
3. Close the connection.This is exactly the same as for the server process (using method close of class Socket).

Alternatively, you can use the domain name to create a socket.When you create a socket with a host name, the JVM asks the DNS to translate the host name into the IP address.

```java
Socket socket = new Socket(InetAddress.geLocalHost(), 8000)
Socket socket = new Socket("kali/localhost", 8000);
```

NOTE:- A program can use the host name localhost or the IP address 127.0.0.1 to refer to the machine on which a client is running.

If the server is not running, the client program terminates with a java.net.ConnectException. After it is connected, the client gets input and output streams—wrapped by data input and output streams—in order to receive and send data to the server.

`Data Transmission through Sockets`:- After the server accepts the connection, communication between the server and the client is conducted in the same way as for I/O streams. The statements needed to create the streams and to exchange data between them.

To get an input stream and an output stream, use the getInputStream() and getOutputStream() methods on a socket object. For example, the following statements create an InputStream stream called input and an OutputStream stream called output from a socket:

```java
InputStream input = socket.getInputStream();
OutputStream output = socket.getOutputStream();
```

The InputStream and OutputStream streams are used to read or write bytes. You can use DataInputStream, DataOutputStream, BufferedReader, and PrintWriter to wrap on the InputStream and OutputStream to read or write data, such as int, double, or String. The following statements, for instance, create the DataInputStream stream input and the DataOutput stream output to read and write primitive data values:

```java
DataOutputStream output = new DataOutputStream(socket.getOutputStream());
```

The server can use input.readDouble() to receive a double value from the client and output.writeDouble(d) to send the double value d to the client.

Recall that binary I/O is more efficient than text I/O because text I/O requires encoding and decoding. Therefore, it is better to use binary I/O for transmitting data between a server and a client to improve performance

`Serving Multiple Clients`:-A server can serve multiple clients. The connection to each client is handled by one thread.
Multiple clients are quite often connected to a single server at the same time. Typically, a server runs continuously on a server computer, and clients from all over the Internet can connect to it. You can use threads to handle the server’s multiple clients simultaneously—simply create a thread for each connection. Here is how the server handles the establishment of a connection:

```java
while (true) {
Socket socket = serverSocket.accept(); // Connect to a client
Thread thread = new ThreadClass(socket);
thread.start();
}
```

The server socket can have many connections. Each iteration of the while loop creates a new connection. Whenever a connection is established, a new thread is created to handle communication between the server and the new client, and this allows multiple connections to run at the same time.

_UDP Sockets_:- When using UDP sockets the connection between the client and the server is not maintained throughout the communication session. Each datagram packet is sent as an isolated transmission when necessary. There are no guarantees that the packets arrive in order at the destination or that the packets arrive at the destination at all.

Unlike TCP/IP sockets, datagram sockets are connectionless. That is to say, the connection between client and server is not maintained throughout the duration of the dialogue. Instead, each datagram packet is sent as an isolated transmission whenever necessary.Datagram (UDP) sockets provide a (usually) faster means of transmitting data than TCP/IP sockets, but they are unreliable.

Since the connection is not maintained between transmissions, the server does not create an individual Socket object for each client, as it did in our TCP/IP example. A further difference from TCP/IP sockets is that, instead of a ServerSocket object, the server creates a `DatagramSocket` object, as does each client when it wants to send datagram(s) to the server. The final and most significant difference is that `DatagramPacket` objects are created and sent at both ends, rather than simple strings.

`Datagram` - A datagram is an independent, self-contained message sent over the network whose arrival, arrival time, and content are not guaranteed.
Clients and servers that communicate via a reliable channel, such as a TCP socket, have a dedicated point-to-point channel between themselves, or at least the illusion of one. To communicate, they establish a connection, transmit the data, and then close the connection. All data sent over the channel is received in the same order in which it was sent. This is guaranteed by the channel.
In contrast, applications that communicate via datagrams send and receive completely independent packets of information. These clients and servers do not have and do not need a dedicated point-to-point channel. The delivery of datagrams to their destinations is not guaranteed. Nor is the order of their arrival.

Some applications that you write to communicate over the network will not require the reliable, point-to-point channel provided by TCP. Rather, your applications might benefit from a mode of communication that delivers independent packages of information whose arrival and order of arrival are not guaranteed.

The UDP protocol provides a mode of network communication whereby applications send packets of data, called datagrams, to one another. A datagram is an independent, self-contained message sent over the network whose arrival, arrival time, and content are not guaranteed. The DatagramPacket and DatagramSocket classes in the java.net package implement system-independent datagram communication using UDP.

`Note`:- Many firewalls and routers are configured not to allow UDP packets. If you have trouble connecting to a service outside your firewall, or if clients have trouble connecting to your service, ask your system administrator if UDP is permitted.

The java.net package contains three classes to help you write Java programs that use datagrams to send and receive packets over the network: `DatagramSocket`, `DatagramPacket`, and `MulticastSocket`. An application can send and receive DatagramPackets through a DatagramSocket. In addition, DatagramPackets can be broadcast to multiple recipients all listening to a MulticastSocket.

- DatagramPacket- The DatagramPacket class is used to provide a facility for the connectionless transfer of messages from one system to another. This class provides tools for the production of datagram packets for connectionless transmission applying the datagram socket class.
- DatagramSocket- The DatagramSocket class is a network socket that provides a connection-less point for sending and receiving packets. Every packet sent from a datagram socket is individually routed and delivered. It can further be practiced for transmitting and accepting broadcast information. Datagram Sockets is Java’s mechanism for providing network communication via UDP instead of TCP.

1. Create a DatagramSocket object.Just as for the creation of a ServerSocket object, this means supplying the object’s constructor with the port number.
2. Create a buffer for incoming datagrams.This is achieved by creating an array of bytes.
3. Create a DatagramPacket object for the incoming datagrams.The constructor for this object requires two arguments: the previously-created byte array; the size of this array.
4. Accept an incoming datagram.This is effected via the receive method of our DatagramSocket object, using our DatagramPacket object as the receptacle.
5. Accept the sender’s address and port from the packet.Methods getAddress and getPort of our DatagramPacket object are used for this.

`UDP Sockets—Server Side`:- Java UDP server communication steps include the following:

1. Step 1—Create a datagram socket object.
2. Step 2—Create a buffer to store the incoming datagrams
3. Step 3—Create a datagram packet object for incoming datagrams
4. Step 4—Accept an incoming datagram:
5. Step 5—Get sender’s address and port number from the datagram:
6. Step 6—Retrieve the data from the buffer

```java
DatagramSocket dgramSocket = new DatagramSocket(portno);/*1024 <= portno <= 65535*/
byte[] buffer = new byte[256];/*-128 <= byte value <= 127*/
DatagramPacket inPkt = new DatagramPacket(buffer, buffer.length);
dgramSocket.receive(inPkt);
InetAddress cliAddress = inPkt.getAddress();
int cliPort = inPkt.getPort();
String msgIn = new String(inPkt.getData(), 0, inPkt.getLength());
```

The client application in this example is fairly simple. It sends a single datagram packet to the server indicating that the client would like to receive a quote of the moment. The client then waits for the server to send a datagram packet in response.

Two classes implement the server application: QuoteServer and QuoteServerThread. A single class implements the client application: QuoteClient.

Let's investigate these classes, starting with the class that contains the main method for the server application. Working With a Server-Side Application contains an applet version of the QuoteClient class.

The QuoteServer Class
The QuoteServer class, shown here in its entirety, contains a single method: the main method for the quote server application. The main method simply creates a new QuoteServerThread object and starts it:

import java.io.\*;

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

import java.io.\*;

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

The java.net package contains three classes to help you write Java programs that use datagrams to send and receive packets over the network: DatagramSocket, DatagramPacket, and MulticastSocketAn application can send and receive DatagramPackets through a DatagramSocket. In addition, DatagramPackets can be broadcast to multiple recipients all listening to a MulticastSocket.

`UDP Sockets—Client Side`:- Java UDP client communication steps include:

1. Step 1—Create a datagram socket object:
2. Step 2—Create the outgoing datagram:
3. Step 3—Send the response datagram:

```java
DatagramSocket dgramSocket = new DatagramSocket;/*a default port no will be selected*/
BufferedReader userEntry = new BufferedReader(new InputStreamReader(System.in));
System.out.print("Enter message: ");
String msg = userEntry.readLine();
DatagramPacket outPkt = new DatagramPacket(msg.getBytes(),msg.length(), host, portno);
dgramSocket.send(outPkt);
```

### Interfaces

Systems often run with multiple active network connections, such as wired Ethernet, 802.11 b/g (wireless), and bluetooth. Some applications might need to access this information to perform the particular network activity on a specific connection.The `java.net.NetworkInterface` class provides access to this information.

**Network Interface** - A network interface is the point of interconnection between a computer and a private or public network. A network interface is generally a network interface card (NIC), but does not have to have a physical form. Instead, the network interface can be implemented in software. For example, the loopback interface (127.0.0.1 for IPv4 and ::1 for IPv6) is not a physical device but a piece of software simulating a network interface. The loopback interface is commonly used in test environments.
The java.net.NetworkInterface class represents both types of interfaces.

NetworkInterface is useful for a multi-homed system, which is a system with multiple NICs. Using NetworkInterface, you can specify which NIC to use for a particular network activity.For example, assume you have a machine with two configured NICs, and you want to send data to a server. You create a socket like this:

```java
Socket soc = new java.net.Socket();
soc.connect(new InetSocketAddress(address, port));
```

To send the data, the system determines which interface is used. However, if you have a preference or otherwise need to specify which NIC to use, you can query the system for the appropriate interfaces and find an address on the interface you want to use. When you create the socket and bind it to that address, the system uses the associated interface. For example:

```java
NetworkInterface nif = NetworkInterface.getByName("bge0");
Enumeration<InetAddress> nifAddresses = nif.getInetAddresses();

Socket soc = new java.net.Socket();
soc.bind(new InetSocketAddress(nifAddresses.nextElement(), 0));
soc.connect(new InetSocketAddress(address, port));
```

You can also use NetworkInterface to identify the local interface on which a multicast group is to be joined. For example:

```java
NetworkInterface nif = NetworkInterface.getByName("bge0");
MulticastSocket ms = new MulticastSocket();
ms.joinGroup(new InetSocketAddress(hostname, port), nif);
NetworkInterface can be used with Java APIs in many other ways beyond the two uses described here.
```

_Retrieving Network Interfaces_ - The NetworkInterface class has no public constructor. Therefore, you cannot just create a new instance of this class with the new operator. Instead, the following static methods are available so that you can retrieve the interface details from the system: getByInetAddress(), getByName(), and getNetworkInterfaces(). The first two methods are used when you already know the IP address or the name of the particular interface. The third method, getNetworkInterfaces() returns the complete list of interfaces on the machine.

Network interfaces can be hierarchically organized. The NetworkInterface class includes two methods, getParent() and getSubInterfaces(), that are pertinent to a network interface hierarchy. The getParent() method returns the parent NetworkInterface of an interface. If a network interface is a subinterface, getParent() returns a non-null value. The getSubInterfaces() method returns all the subinterfaces of a network interface.

The following example program lists the name of all the network interfaces and subinterfaces (if any exist) on a machine.

```java
Enumeration<NetworkInterface> nets = NetworkInterface.getNetworkInterfaces();

        for (NetworkInterface netIf : Collections.list(nets)) {
            out.printf("Display name: %s\n", netIf.getDisplayName());
            out.printf("Name: %s\n", netIf.getName());
            displaySubInterfaces(netIf);
            out.printf("\n");
        }


    static void displaySubInterfaces(NetworkInterface netIf) throws SocketException {
        Enumeration<NetworkInterface> subIfs = netIf.getSubInterfaces();

        for (NetworkInterface subIf : Collections.list(subIfs)) {
            out.printf("\tSub Interface Display name: %s\n", subIf.getDisplayName());
            out.printf("\tSub Interface Name: %s\n", subIf.getName());
        }
     }


/*

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
*/
```

_Listing Network Interface Addresses_ - One of the most useful pieces of information you can get from a network interface is the list of IP addresses that are assigned to it. You can obtain this information from a NetworkInterface instance by using one of two methods. The first method, getInetAddresses(), returns an Enumeration of InetAddress. The other method, getInterfaceAddresses(), returns a list of java.net.InterfaceAddress instances. This method is used when you need more information about an interface address beyond its IP address. For example, you might need additional information about the subnet mask and broadcast address when the address is an IPv4 address, and a network prefix length in the case of an IPv6 address.

The following example program lists all the network interfaces and their addresses on a machine:

```java
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

/*
Display name: TCP Loopback interface
Name: lo
InetAddress: /127.0.0.1

Display name: Wireless Network Connection
Name: eth0
InetAddress: /192.0.2.0
*/
```

_Network Interface Parameters_ - You can access network parameters about a network interface beyond the name and IP addresses assigned to it.You can discover if a network interface is “up” (that is, running) with the isUP() method. The following methods indicate the network interface type:

- isLoopback() indicates if the network interface is a loopback interface.
- isPointToPoint() indicates if the interface is a point-to-point interface.
- isVirtual() indicates if the interface is a virtual interface.
- The supportsMulticast() method indicates whether the network interface supports multicasting. The getHardwareAddress() method returns the network interface's physical hardware address, usually called MAC address, when it is available. The getMTU() method returns the Maximum Transmission Unit (MTU), which is the largest packet size.

The following example expands on the example in Listing Network Interface Addresses by adding the additional network parameters described on this page:

```java
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


/*
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
*/
```

## High level API

A number of classes in the java.net package do provide for a much higher level of abstraction and allow for easy access to resources on the network. The classes are:

- `URI` is the class representing a Universal Resource Identifier, as specified in RFC 2396. As the name indicates, this is just an Identifier and doesn't provide directly the means to access the resource.
- `URL` is the class representing a Universal Resource Locator, which is both an older concept for URIs and a means to access the resources.
- `URLConnection` is created from a URL and is the communication link used to access the resource pointed by the URL. This abstract class will delegate most of the work to the underlying protocol handlers like http or https.
- `HttpURLConnection` is a subclass of URLConnection and provides some additional functionalities specific to the HTTP protocol. This API has been superseded by the newer HTTP Client API.

The recommended usage is to use URI to identify resources, then convert it into a URL when it is time to access the resource. From that URL, you can either get the URLConnection for fine control, or get directly the InputStream.

### URL(Uniform Resource Locator) & URI(Uniform Resource Identifier)

HTML is a hypertext markup language because it includes a way to specify links to other documents identified by URLs. A URL unambiguously identifies the location of a resource on the Internet. A URL is the most common type of URI, or Uniform Resource Identifier. A URI can identify a resource by its network location, as in a URL, or by its name, number, or other characteristics.
The `URL class` is the simplest way for a Java program to locate and retrieve data from the network. You do not need to worry about the details of the protocol being used, or how to communicate with the server; you simply tell Java the URL and it gets the data for you.

**URI**:- A Uniform Resource Identifier (URI) is a string of characters in a particular syntax that identifies a resource. The resource identified may be a file on a server; but it may also be an email address, a news message, a book, a person’s name, an Internet host, the current stock price of Oracle, or something else.
A `resource` is a thing that is identified by a URI. A URI is a string that identifies a resource.All you ever receive from a server is a `representation of a resource` which comes in the form of bytes. However a single resource may have different representations. For instance, https://www.un.org/en/documents/udhr/ identifies the Universal Declaration of Human Rights; but there are representations of the declaration in plain text, XML, PDF, and other formats. There are also representations of this resource in English, French, Arabic, and many other languages.

The syntax of a URI is composed of a scheme and a scheme-specific part, separated by a colon, like this: `scheme:scheme-specific-part`. The syntax of the scheme-specific part depends on the scheme being used. Current schemes include:

1. data - Base64-encoded data included directly in a link.
2. file - A file on a local disk
3. ftp - An FTP server
4. http - A World Wide Web server using the Hypertext Transfer Protocol
5. mailto - An email address
6. magnet - A resource available for download via peer-to-peer networks such as BitTorrent.
7. telnet - A connection to a Telnet-based service
8. urn - A Uniform Resource Name.

In addition, Java makes heavy use of nonstandard custom schemes such as rmi, jar, jndi, and doc for various purposes.

This class provides constructors for creating URI instances from their components or by parsing their string forms, methods for accessing the various components of an instance, and methods for normalizing, resolving, and relativizing URI instances. Instances of this class are immutable.

**URLs**:- URL is the acronym for Uniform Resource Locator. It is a reference (an address) to a resource on the Internet. You provide URLs to Web browser so that it can locate files on the Internet in the same way that you provide addresses on letters so that the post office can locate your correspondents.
Java programs that interact with the Internet also may use URLs to find the resources on the Internet they wish to access. Java programs can use a class called URL in the java.net package to represent a URL address.

The term URL can be ambiguous. It can refer to an Internet address or a URL object in a Java program. Where the meaning of URL needs to be specific, this text uses "URL address" to mean an Internet address and "URL object" to refer to an instance of the URL class in a program.
A URL takes the form of a string that describes how to find a resource on the Internet.

Within your Java programs, you can create a URL object that represents a URL address. The URL object always refers to an absolute URL but can be constructed from an absolute URL, a relative URL, or from URL components.
Gone are the days of parsing a URL to find out the host name, filename, and other information. With a valid URL object you can call any of its accessor methods to get all of that information from the URL without doing any string parsing!

The URL class in Java is the entry point to any available sources on the internet. A Class URL describes a Uniform Resource Locator, which is a signal to a “resource” on the World Wide Web. A source can denote a simple file or directory, or it can indicate a more difficult object, such as a query to a database or a search engine. URL is a string of text that recognizes all the sources on the Internet, showing us the address of the source, how to interact with it, and recover something from it.

_Components of a URL_ - URLs have two main components: the protocol needed to access the resource and the location of the resource. A URL has two main components:

1. Protocol identifier: For the URL http://example.com, the protocol identifier is http.
2. Resource name: For the URL http://example.com, the resource name is example.com.

A URL can have many forms. The most general however follows a three-components system-

> Protocol – The protocol in a URL defines how information is transported among the host and a client (or web browser).
> Hostname – The hostname is the name of the device on which the resource exists.
> File Name – The filename is the pathname to the file on the device.
> Port Number – The port number is used to identify different applications uniquely. It is typically optional.

**The URL Class** - The java.net.URL class is an abstraction of a Uniform Resource Locator such as http://www.lolcats.com/ or ftp://ftp.redhat.com/pub/. It extends java.lang.Object, and it is a final class that cannot be subclassed. Rather than relying on inheritance to configure instances for different kinds of URLs, it uses the strategy design pattern. Protocol handlers are the strategies, and the URL class itself forms the context through which the different strategies are selected.
The URL class in Java is the entry point to any available sources on the internet. A Class URL describes a Uniform Resource Locator, which is a signal to a “resource” on the World Wide Web. A source can denote a simple file or directory, or it can indicate a more difficult object, such as a query to a database or a search engine.

_Creating a URL_:- The easiest way to create a URL object is from a String that represents the human-readable form of the URL address. This is typically the form that another person will use for a URL. In your Java program, you can use a String containing this text to create a URL object:

```java
URL myURL = new URL("http://example.com/");
```

The URL object created above represents an absolute URL. An absolute URL contains all of the information necessary to reach the resource in question. You can also create URL objects from a relative URL address.

_Creating a URL Relative to Another_ - A relative URL contains only enough information to reach the resource relative to (or in the context of) another URL.Relative URL specifications are often used within HTML files. For example, suppose you write an HTML file called JoesHomePage.html. Within this page, are links to other pages, PicturesOfMe.html and MyKids.html, that are on the same machine and in the same directory as JoesHomePage.html. The links to PicturesOfMe.html and MyKids.html from JoesHomePage.html could be specified just as file names, like this:

```htm
<a href="PicturesOfMe.html">Pictures of Me</a>
<a href="MyKids.html">Pictures of My Kids</a>
```

These URL addresses are relative URLs. That is, the URLs are specified relative to the file in which they are contained — JoesHomePage.html.

In your Java programs, you can create a URL object from a relative URL specification. For example, suppose you know two URLs at the site example.com:- http://example.com/pages/page1.html, http://example.com/pages/page2.html
You can create URL objects for these pages relative to their common base URL: http://example.com/pages/ like this:

```java
URL myURL = new URL("http://example.com/pages/");
URL page1URL = new URL(myURL, "page1.html");
URL page2URL = new URL(myURL, "page2.html");
```

This code snippet uses the URL constructor that lets you create a URL object from another URL object (the base) and a relative URL specification. The general form of this constructor is:- `URL(URL baseURL, String relativeURL)`.
The first argument is a URL object that specifies the base of the new URL. The second argument is a String that specifies the rest of the resource name relative to the base. If baseURL is null, then this constructor treats relativeURL like an absolute URL specification. Conversely, if relativeURL is an absolute URL specification, then the constructor ignores baseURL.

This constructor is also useful for creating URL objects for named anchors (also called references) within a file. For example, suppose the page1.html file has a named anchor called BOTTOM at the bottom of the file. You can use the relative URL constructor to create a URL object for it like this:

```java
URL page1BottomURL = new URL(page1URL,"#BOTTOM");
```

`Other URL Constructors` - The URL class provides two additional constructors for creating a URL object. These constructors are useful when you are working with URLs, such as HTTP URLs, that have host name, filename, port number, and reference components in the resource name portion of the URL. These two constructors are useful when you do not have a String containing the complete URL specification, but you do know various components of the URL.

For example, suppose you design a network browsing panel similar to a file browsing panel that allows users to choose the protocol, host name, port number, and filename. You can construct a URL from the panel's components. The first constructor creates a URL object from a protocol, host name, and filename. The following code snippet creates a URL to the page1.html file at the example.com site:

```java
new URL("http", "example.com", "/pages/page1.html");

//This is equivalent to
new URL("http://example.com/pages/page1.html");
```

The first argument is the protocol, the second is the host name, and the last is the pathname of the file. Note that the filename contains a forward slash at the beginning. This indicates that the filename is specified from the root of the host.
The final URL constructor adds the port number to the list of arguments used in the previous constructor:

```java
URL gamelan = new URL("http", "example.com", 80, "pages/page1.html");
```

This creates a URL object for the following URL:- http://example.com:80/pages/page1.html

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

```java
try {
URL myURL = new URL(...);
}
catch (MalformedURLException e) {
// exception handler code here
// ...
}
```

Note:
URLs are "write-once" objects. Once you've created a URL object, you cannot change any of its attributes (protocol, host name, filename, or port number).

`Connecting to a URL` - If you want to do more than just read from a URL, you can connect to it by calling openConnection() on the URL. The openConnection() method returns a URLConnection object that you can use for more general communications with the URL, such as reading from it, writing to it, or querying it for content and other information.

Reading from and Writing to a URLConnection
Some URLs, such as many that are connected to cgi-bin scripts, allow you to (or even require you to) write information to the URL. For example, a search script may require detailed query data to be written to the URL before the search can be performed. This section shows you how to write to a URL and how to get results back.

It's often easiest, although not entirely accurate, to think of a URL as the name of a file on the World Wide Web because most URLs refer to a file on some machine on the network. However, remember that URLs also can point to other resources on the network, such as database queries and command output.

Note that the protocol identifier and the resource name are separated by a colon and two forward slashes. The protocol identifier indicates the name of the protocol to be used to fetch the resource. The example uses the Hypertext Transfer Protocol (HTTP), which is typically used to serve up hypertext documents. HTTP is just one of many different protocols used to access different types of resources on the net. Other protocols include File Transfer Protocol (FTP), Gopher, File, and News.

The resource name is the complete address to the resource. The format of the resource name depends entirely on the protocol used, but for many protocols, including HTTP, the resource name contains one or more of the following components:

Host Name - The name of the machine on which the resource lives.
Filename - The pathname to the file on the machine.
Port Number - The port number to which to connect (typically optional).
Reference - A reference to a named anchor within a resource that usually identifies a specific location within a file (typically optional).
For many protocols, the host name and the filename are required, while the port number and reference are optional. For example, the resource name for an HTTP URL must specify a server on the network (Host Name) and the path to the document on that machine (Filename); it also can specify a port number and a reference.

_Parsing a URL_ - The URL class provides several methods that let you query URL objects. You can get the protocol, authority, host name, port number, path, query, filename, and reference from a URL using these accessor methods:

- getProtocol - Returns the protocol identifier component of the URL.
- getAuthority - Returns the authority component of the URL.
- getHost - Returns the host name component of the URL.
- getPort - Returns the port number component of the URL. The getPort method returns an integer that is the port number. If the port is not set, getPort returns -1.
- getPath - Returns the path component of this URL.
- getQuery - Returns the query component of this URL.
- getFile - Returns the filename component of the URL. The getFile method returns the same as getPath, plus the concatenation of the value of getQuery, if any.
- getRef - Returns the reference component of the URL.

Note:- Remember that not all URL addresses contain these components. The URL class provides these methods because HTTP URLs do contain these components and are perhaps the most commonly used URLs. The URL class is somewhat HTTP-centric.
You can use these getXXX methods to get information about the URL regardless of the constructor that you used to create the URL object.

The URL class, along with these accessor methods, frees you from ever having to parse URLs again! Given any string specification of a URL, just create a new URL object and call any of the accessor methods for the information you need. This small example program creates a URL from a string specification and then uses the URL object's accessor methods to parse the URL:

```java
URL aURL = new URL("http://example.com:80/docs/books/tutorial/index.html?name=networking#DOWNLOADING");
System.out.println("protocol = " + aURL.getProtocol()); // protocol = http
System.out.println("authority = " + aURL.getAuthority());// authority = example.com:80
System.out.println("host = " + aURL.getHost());//host = example.com
System.out.println("port = " + aURL.getPort());//port = 80
System.out.println("path = " + aURL.getPath());//path = /docs/books/tutorial/index.html
System.out.println("query = " + aURL.getQuery());//query = name=networking
System.out.println("filename = " + aURL.getFile());//filename = /docs/books/tutorial/index.html?name=networking
System.out.println("ref = " + aURL.getRef());//ref = DOWNLOADING
```

_Reading Directly from a URL_ - After you've successfully created a URL, you can call the URL's openStream() method to get a stream from which you can read the contents of the URL. The openStream() method returns a java.io.InputStream object, so reading from a URL is as easy as reading from an input stream.

The following small Java program uses openStream() to get an input stream on the URL http://www.oracle.com/. It then opens a BufferedReader on the input stream and reads from the BufferedReader thereby reading from the URL. Everything read is copied to the standard output stream:

```java
URL oracle = new URL("http://www.oracle.com/");
BufferedReader in = new BufferedReader(new InputStreamReader(oracle.openStream()));

String inputLine;
while ((inputLine = in.readLine()) != null)
    System.out.println(inputLine);
    in.close();
```

When you run the program, you should see, scrolling by in your command window, the HTML commands and textual content from the HTML file located at http://www.oracle.com/. Alternatively, the program might hang or you might see an exception stack trace. If either of the latter two events occurs, you may have to set the proxy host so that the program can find the Oracle server.

**Connections** -

_URLConnection_ The abstract class URLConnection is the superclass of all classes that represent a communications link between the application and a URL. Instances of this class can be used both to read from and to write to the resource referenced by the URL.
In general, creating a connection to a URL is a multistep process:

- The connection object is created by invoking the openConnection method on a URL.
- The setup parameters and general request properties are manipulated.
- The actual connection to the remote object is made, using the connect method.
- The remote object becomes available. The header fields and the contents of the remote object can be accessed.

URLConnection is an abstract class that represents an active connection to a resource specified by a URL. The URLConnection class has two different but related purposes.

- First, it provides more control over the interaction with a server (especially an HTTP server) than the URL class. A URLConnection can inspect the header sent by the server and respond accordingly. It can set the header fields used in the client request. Finally, a URLConnection can send data back to a web server with POST, PUT, and other HTTP request methods.
- Second, the URLConnection class is part of Java’s protocol handler mechanism, which also includes the URLStreamHandler class. The idea behind protocol handlers is simple: they separate the details of processing a protocol from processing particular data types, providing user interfaces, and doing the other work that a monolithic web browser performs. The base java.net.`URLConnection class` is abstract; to implement a specific protocol, you write a subclass. These subclasses can be loaded at runtime by applications.
  For example, if the browser runs across a URL with a strange scheme, such as compress, rather than throwing up its hands and issuing an error message, it can download a protocol handler for this unknown protocol and use it to communicate with the server.

Note - URLConnection does not have the best-designed API in the Java class library. One of several problems is that the URLConnection class is too closely tied to the HTTP protocol. For instance, it assumes that each file transferred is preceded by a MIME header or something very much like one. However, most classic protocols such as FTP and SMTP don’t use MIME headers.

Only abstract URLConnection classes are present in the java.net package. The concrete subclasses are hidden inside the sun.net package hierarchy. Many of the methods and fields as well as the single constructor in the URLConnection class are protected. In other words, they can only be accessed by instances of the URLConnection class or its subclasses. It is rare to instantiate URLConnection objects directly in your source code; instead, the runtime environment creates these objects as needed, depending on the protocol in use. The class (which is unknown at compile time) is then instantiated using the forName() and newInstance() methods of the java.lang.Class class.

Writing to a URLConnection - Many HTML pages contain forms — text fields and other GUI objects that let you enter data to send to the server. After you type in the required information and initiate the query by clicking a button, your Web browser writes the data to the URL over the network. At the other end the server receives the data, processes it, and then sends you a response, usually in the form of a new HTML page.
Many of these HTML forms use the HTTP POST METHOD to send data to the server. Thus writing to a URL is often called posting to a URL. The server recognizes the POST request and reads the data sent from the client.

_Opening URLConnections_ - A program that uses the URLConnection class directly follows this basic sequence of steps
For a Java program to interact with a server-side process it simply must be able to write to a URL, thus providing data to the server. It can do this by following these steps:

- Construct a URL object.
- Invoke the URL object’s openConnection() method to retrieve a URLConnection object for that URL.
- Configure the URLConnection.Set output capability on the URLConnection.
- Read the header fields.
- Get an input stream and read data.
- Get an output stream from the connection.
- Write to the output stream.
- Close the output stream.

The single constructor for the URLConnection class is protected:- `protected URLConnection(URL url)`.
Consequently, unless you’re subclassing URLConnection to handle a new kind of URL(i.e., writing a protocol handler), you create one of these objects by invoking the `open Connection()` method of the URL class.

```java
URL u = new URL("http://www.overcomingbias.com/");
URLConnection uc = u.openConnection();
// read from the URL...
```

The URLConnection class is declared abstract. However, all but one of its methods are implemented. You may find it convenient or necessary to override other methods in the class; but the single method that subclasses must implement is connect(), which makes a connection to a server and thus depends on the type of service (HTTP, FTP, and so on). For example, a sun.net.www.protocol.file.FileURLConnection’s connect() method converts the URL to a filename in the appropriate directory, creates MIME information for the file, and then opens a buffered FileInputStream to the file. The connect() method of sun.net.www.protocol.http.HttpURLConnection creates a sun.net.www.http.HttpClient object, which is responsible for connecting to the server:- `public abstract void connect() throws IOException`.

When a URLConnection is first constructed, it is unconnected; that is, the local and remote host cannot send and receive data. There is no socket connecting the two hosts. The connect() method establishes a connection—normally using TCP sockets but possibly through some other mechanism—between the local and remote host so they can send and receive data. However, getInputStream(), getContent(), getHeaderField(), and other methods that require an open connection will call connect() if the connection isn’t yet open. Therefore, you rarely need to call connect() directly.

The differences between URL and URLConnection aren’t apparent with just a simple input stream as in this example. The biggest differences between the two classes are:

- URLConnection provides access to the HTTP header.
- URLConnection can configure the request parameters sent to the server.
- URLConnection can write data to the server as well as read data from the server.

_Connecting to a URL_ - After you've successfully created a URL object, you can call the URL object's openConnection method to get a `URLConnection` object, or one of its protocol specific subclasses, for example java.net.HttpURLConnection.
You can use this URLConnection object to setup parameters and general request properties that you may need before connecting. Connection to the remote object represented by the URL is only initiated when the URLConnection.connect method is called. When you do this you are initializing a communication link between your Java program and the URL over the network. For example, the following code opens a connection to the site example.com:

```java
URL myURL = new URL("http://example.com/");
URLConnection myURLConnection = myURL.openConnection();
myURLConnection.connect();
```

A new URLConnection object is created every time by calling the openConnection method of the protocol handler for this URL.You are not always required to explicitly call the connect method to initiate the connection. Operations that depend on being connected, like getInputStream, getOutputStream, etc, will implicitly perform the connection, if necessary.

Now that you've successfully connected to your URL, you can use the URLConnection object to perform actions such as reading from or writing to the connection. The next section shows you how.
Reading from and Writing to a URLConnection - The URLConnection class contains many methods that let you communicate with the URL over the network. URLConnection is an HTTP-centric class; that is, many of its methods are useful only when you are working with HTTP URLs. However, most URL protocols allow you to read from and write to the connection. This section describes both functions.

_Reading from and Writing to a URLConnection_ - The URLConnection class contains many methods that let you communicate with the URL over the network. URLConnection is an HTTP-centric class; that is, many of its methods are useful only when you are working with HTTP URLs. However, most URL protocols allow you to read from and write to the connection.

`Reading Data `- The following is the minimal set of steps needed to retrieve data from a URL using a URLConnection object:

1. Construct a URL object.
2. Invoke the URL object’s openConnection() method to retrieve a URLConnection object for that URL.
3. Invoke the URLConnection’s getInputStream() method.
4. Read from the input stream using the usual stream API.

The getInputStream() method returns a generic InputStream that lets you read and parse the data that the server sends.

```java
URL oracle = new URL("http://www.oracle.com/");
URLConnection yc = oracle.openConnection();
BufferedReader in = new BufferedReader(new InputStreamReader(yc.getInputStream()));
String inputLine;
while ((inputLine = in.readLine()) != null)
    System.out.println(inputLine);
    in.close();
```

`Reading the Header` - HTTP servers provide a substantial amount of information in the header that precedes each response.
In general, an HTTP header may include the content type of the requested document, the length of the document in bytes, the character set in which the content is encoded, the date and time, the date the content expires, and the date the content was last modified. However, the information depends on the server; some servers send all this information for each request, others send some information, and a few don’t send anything.

Aside from HTTP, very few protocols use MIME headers (and technically speaking, even the HTTP header isn’t actually a MIME header; it just looks a lot like one). When writing your own subclass of URLConnection, it is often necessary to override these methods so that they return sensible values. The most important piece of information you may be lacking is the content type. URLConnection provides some utility methods that guess the data’s content type based on its filename or the first few bytes of the data itself.

Here is a small servlet named ReverseServlet (or if you prefer a cgi-bin script). You can use this servlet to test the following example program.The servlet running in a container reads from its InputStream, reverses the string, and writes it to its OutputStream. The servlet requires input of the form string=string_to_reverse, where string_to_reverse is the string whose characters you want displayed in reverse order.

Here's an example program that runs the ReverseServlet over the network through a URLConnection:

```java
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
```

Let's examine the program and see how it works. First, the program processes its command-line arguments:

if (args.length != 2) {
System.err.println("Usage: java Reverse " + "http://<location of your servlet/script>" + " string_to_reverse");
System.exit(1);
}

String stringToReverse = URLEncoder.encode(args[1], "UTF-8");
These statements ensure that the user provides two and only two command-line arguments to the program. The command-line arguments are the location of the ReverseServlet and the string that will be reversed. It may contain spaces or other non-alphanumeric characters. These characters must be encoded because the string is processed on its way to the server. The URLEncoder class methods encode the characters.

Next, the program creates the URL object, and sets the connection so that it can write to it:

```java
URL url = new URL(args[0]);
URLConnection connection = url.openConnection();
connection.setDoOutput(true);
```

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

However, rather than getting an input stream directly from the URL, this program explicitly retrieves a URLConnection object and gets an input stream from the connection. The connection is opened implicitly by calling getInputStream. Then, like URLReader, this program creates a BufferedReader on the input stream and reads from it. The bold statements highlight the differences between this example and the previous:

import java.net._;
import java.io._;

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

## HTTP

The Hypertext Transfer Protocol (HTTP) is a standard that defines how a web client talks to a server and how data is transferred from the server back to the client. Although HTTP is usually thought of as a means of transferring HTML files and the pictures embedded in them, HTTP is data format agnostic. It can be used to transfer TIFF pictures, Microsoft Word documents, Windows .exe files, or anything else that can be represented in bytes. To write programs that use HTTP, you’ll need to understand HTTP at a deeper level than the average web page designer.

HTTP is the standard protocol for communication between web browsers and web servers. HTTP specifies how a client and server establish a connection, how the client requests data from the server, how the server responds to that request, and finally, how the connection is closed. HTTP connections use the TCP/IP protocol for data transfer. For each request from client to server, there is a sequence of four steps:

1. The client opens a TCP connection to the server on port 80, by default; other ports may be specified in the URL.
2. The client sends a message to the server requesting the resource at a specified path.The request includes a header, and optionally (depending on the nature of the request) a blank line followed by data for the request.
3. The server sends a response to the client. The response begins with a response code,followed by a header full of metadata, a blank line, and the requested document or an error message.
4. The server closes the connection.

**Cookies** - Many websites use small strings of text known as cookies to store persistent client-side state between connections. Cookies are passed from server to client and back again in the HTTP headers of requests and responses. Cookies can be used by a server to indicate session IDs, shopping cart contents, login credentials, user preferences, and more.

Though you are probably already familiar with cookies, you might not know how to take advantage of them in your Java application. This lesson guides you through the concept of cookies and explains how to set a cookie handler so that your HTTP URL connections will use it.
Java SE provides one main class for this functionality, java.net.CookieHandler, and the following supporting classes and interfaces: java.net.CookieManager, java.net.CookiePolicy, java.net.CookieStore, and java.net.HttpCookie.

_HTTP State Management With Cookies_ - The HTTP state management mechanism specifies a way to create a stateful session with HTTP requests and responses.
Generally, HTTP request/response pairs are independent of each other. However, the state management mechanism enables clients and servers that can exchange state information to put these pairs in a larger context, which is called a session. The state information used to create and maintain the session is called a cookie.

A cookie is a piece of data that can be stored in a browser's cache. If you visit a web site and then revisit it, the cookie data can be used to identify you as a return visitor. Cookies enable state information, such as an online shopping cart, to be remembered. A cookie can be short term, holding data for a single web session, that is, until you close the browser, or a cookie can be longer term, holding data for a week or a year.

_CookieHandler Callback Mechanism_ - HTTP state management is implemented in Java SE through the java.net.CookieHandler class. A CookieHandler object provides a callback mechanism to provide an HTTP state management policy implementation in the HTTP protocol handler. That is, URLs that use HTTP as the protocol, new URL("http://example.com") for example, will use the HTTP protocol handler. This protocol handler calls back to the CookieHandler object, if set, to handle the state management.
The CookieHandler class is an abstract class that has two pairs of related methods. The first pair, getDefault() and setDefault(cookieHandler), are static methods that enable you to discover the current handler that is installed and to install your own handler.

No default handler is installed, and installing a handler is done on a system-wide basis. For applications running within a secure environment, that is, they have a security manager installed, you must have special permission to get and set the handler. For more information, see java.net.CookieHandler.getDefault.

The second pair of related methods, put(uri, responseHeaders) and get(uri, requestHeaders), enable you to set and get all the applicable cookies to and from a cookie cache for the specified URI in the response/request headers, respectively. These methods are abstract, and a concrete implementation of a CookieHandler must provide the implementation.

Java Web Start and Java Plug-in have a default CookieHandler installed. However, if you are running a stand-alone application and want to enable HTTP state management, you must set a system-wide handler. The next two pages in this lesson show you how to do so.

_Default CookieManager_ - java.net.CookieManager provides a concrete implementation of a CookieHandler and for most users is sufficient for handling HTTP state management. CookieManager separates the storage of cookies from the policy surrounding, accepting, and rejecting them. A CookieManager is initialized with a java.net.CookieStore and a java.net.CookiePolicy. CookieStore manages the storage of the cookies. CookiePolicy makes policy decisions on cookie acceptance and rejection.

The following code shows how to create and set a system-wide CookieManager:

```java
java.net.CookieManager cm = new java.net.CookieManager();
java.net.CookieHandler.setDefault(cm);
```

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

import java.net.\*;

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

```java
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
```

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

## HTTP Client and WebSocket APIs

Provides high-level client interfaces to HTTP (versions 1.1 and 2) and low-level client interfaces to WebSocket. The main types defined are:- HttpClient, HttpRequest, HttpResponse,
WebSocket

The protocol-specific requirements are defined in the Hypertext Transfer Protocol Version 2 (HTTP/2), the Hypertext Transfer Protocol (HTTP/1.1), and The WebSocket Protocol.

In general, asynchronous tasks execute in either the thread invoking the operation, e.g. sending an HTTP request, or by the threads supplied by the client's executor. Dependent tasks, those that are triggered by returned CompletionStages or CompletableFutures, that do not explicitly specify an executor, execute in the same default executor as that of CompletableFuture, or the invoking thread if the operation completes before the dependent task is registered.

CompletableFutures returned by this API will throw UnsupportedOperationException for their obtrudeValue and obtrudeException methods. Unless otherwise specified, invoking the cancel method on a CompletableFuture returned by this API may not interrupt the underlying operation, but may be useful to complete, exceptionally, dependent stages that have not already completed.

**HTTP CLIENT** - HTTP Client API is a Java based framework for communication with Web Services.The HTTP Client was added in Java 11. It can be used to request HTTP resources over the network. It supports HTTP/1.1, HTTP/2 and HTTP/3, both synchronous and asynchronous programming models, handles request and response bodies as reactive-streams, and follows the familiar builder pattern.

HTTP Client provides the following capabilities:

- easy way of creating and configuring of HTTP requests,
- synchronous and asynchronous executing of request,
- performing request pre-processing and response post-processing.

An HttpClient can be used to send requests and retrieve their responses. An HttpClient is created through a builder. The newBuilder method returns a builder that creates instances of the default HttpClient implementation. The builder can be used to configure per-client state, like: the preferred protocol version ( HTTP/1.1 or HTTP/2 ), whether to follow redirects, a proxy, an authenticator, etc. Once built, an HttpClient is immutable, and can be used to send multiple requests.

**HttpClient** - An HttpClient provides configuration information, and resource sharing, for all requests sent through it. An HttpClient instance typically manages its own pools of connections, which it may then reuse as and when necessary. Connection pools are typically not shared between HttpClient instances. Creating a new client for each operation, though possible, will usually prevent reusing such connections.

A BodyHandler must be supplied for each HttpRequest sent. The BodyHandler determines how to handle the response body, if any. Once an HttpResponse is received, the headers, response code, and body (typically) are available. Whether the response body bytes have been read or not depends on the type, T, of the response body.

Requests can be sent either synchronously or asynchronously:

send(HttpRequest, BodyHandler) blocks until the request has been sent and the response has been received.
sendAsync(HttpRequest, BodyHandler) sends the request and receives the response asynchronously. The sendAsync method returns immediately with a CompletableFuture<HttpResponse>. The CompletableFuture completes when the response becomes available. The returned CompletableFuture can be combined in different ways to declare dependencies among several asynchronous tasks.

To send a request, first create an HttpClient from its builder. The builder can be used to configure per-client state, like:

- The preferred protocol version ( HTTP/1.1, HTTP/2, or HTTP/3 )
- Whether to follow redirects
- A proxy
- An authenticator

```java
HttpClient client = HttpClient.newBuilder()
      .version(Version.HTTP_2)
      .followRedirects(Redirect.NORMAL)
      .proxy(ProxySelector.of(new InetSocketAddress("www-proxy.com", 8080)))
      .authenticator(Authenticator.getDefault())
      .build();
```

**HttpRequest** - An HttpRequest is created from its builder. The request builder can be used to set:

- The request URI
- The request method ( GET, PUT, POST )
- The request body ( if any )
- A timeout
- Request headers

```java
HttpRequest request = HttpRequest.newBuilder()
      .uri(URI.create("http://openjdk.org/"))
      .timeout(Duration.ofMinutes(1))
      .header("Content-Type", "application/json")
      .POST(BodyPublishers.ofFile(Paths.get("file.json")))
      .build()
```

Once built an HttpRequest is immutable, and can be sent multiple times.

## Server-Side Network Programming

Server-side network programming involves designing and implementing programs to be run on a server. Server-side applications run as processes on a dedicated physical machine, virtual machine, or cloud infrastructure. Server-side applications receive requests from the clients and perform tasks as requested by the clients. This chapter introduces various server-side methods and techniques used to generate and deliver web documents to requesting clients, including Java specific solutions such as Java Servlets and Java Servlet Pages.

Server-side network programming involves designing and implementing programs to be run on the server.Server-side applications run as processes on a dedicated physical machine, virtual machine or Cloud infrastructure.
Server-side applications perform tasks requested by the clients. The most popular server-side applications are Web server applications which deliver Web documents over the Internet to Web clients at their request.

_Java Servlets_ - Java Servlets are programs that run on the server side and generate content dynamically following client requests.Java API provides the basic functionality for implementing Java servlets.

_Java Server Pages_ - Java Server Pages (JSP) are web pages that have embedded Java code which runs on the server side and generates content dynamically.
Generating HTML code using servlets is inconvenient as multiple out.println() calls are required, even for typical HTML content generation. Writing servlets requires Java programming expertise, whereas writing HTML content can be performed by a less skilled a person. However, Java code flexibility is still provided via HTML-like tags embedded in the HTML code.JSP represents a powerful development tool for web applications.

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

## RMI

The Java Remote Method Invocation (RMI) system allows an object running in one Java virtual machine to invoke methods on an object running in another Java virtual machine. RMI provides for remote communication between programs written in the Java programming language.

RMI applications often comprise two separate programs, a server and a client. A typical server program creates some remote objects, makes references to these objects accessible, and waits for clients to invoke methods on these objects. A typical client program obtains a remote reference to one or more remote objects on a server and then invokes methods on them. RMI provides the mechanism by which the server and the client communicate and pass information back and forth. Such an application is sometimes referred to as a distributed object application.

Distributed object applications need to do the following:

Locate remote objects. Applications can use various mechanisms to obtain references to remote objects. For example, an application can register its remote objects with RMI's simple naming facility, the RMI registry. Alternatively, an application can pass and return remote object references as part of other remote invocations.
Communicate with remote objects. Details of communication between remote objects are handled by RMI. To the programmer, remote communication looks similar to regular Java method invocations.
Load class definitions for objects that are passed around. Because RMI enables objects to be passed back and forth, it provides mechanisms for loading an object's class definitions as well as for transmitting an object's data.

Advantages of Dynamic Code Loading
One of the central and unique features of RMI is its ability to download the definition of an object's class if the class is not defined in the receiver's Java virtual machine. All of the types and behavior of an object, previously available only in a single Java virtual machine, can be transmitted to another, possibly remote, Java virtual machine. RMI passes objects by their actual classes, so the behavior of the objects is not changed when they are sent to another Java virtual machine. This capability enables new types and behaviors to be introduced into a remote Java virtual machine, thus dynamically extending the behavior of an application. The compute engine example in this trail uses this capability to introduce new behavior to a distributed program.

Remote Interfaces, Objects, and Methods
Like any other Java application, a distributed application built by using Java RMI is made up of interfaces and classes. The interfaces declare methods. The classes implement the methods declared in the interfaces and, perhaps, declare additional methods as well. In a distributed application, some implementations might reside in some Java virtual machines but not others. Objects with methods that can be invoked across Java virtual machines are called remote objects.

An object becomes remote by implementing a remote interface, which has the following characteristics:

A remote interface extends the interface java.rmi.Remote.
Each method of the interface declares java.rmi.RemoteException in its throws clause, in addition to any application-specific exceptions.
RMI treats a remote object differently from a non-remote object when the object is passed from one Java virtual machine to another Java virtual machine. Rather than making a copy of the implementation object in the receiving Java virtual machine, RMI passes a remote stub for a remote object. The stub acts as the local representative, or proxy, for the remote object and basically is, to the client, the remote reference. The client invokes a method on the local stub, which is responsible for carrying out the method invocation on the remote object.

A stub for a remote object implements the same set of remote interfaces that the remote object implements. This property enables a stub to be cast to any of the interfaces that the remote object implements. However, only those methods defined in a remote interface are available to be called from the receiving Java virtual machine.

Creating Distributed Applications by Using RMI
Using RMI to develop a distributed application involves these general steps:

Designing and implementing the components of your distributed application.
Compiling sources.
Making classes network accessible.
Starting the application.
Designing and Implementing the Application Components
First, determine your application architecture, including which components are local objects and which components are remotely accessible. This step includes:

Defining the remote interfaces. A remote interface specifies the methods that can be invoked remotely by a client. Clients program to remote interfaces, not to the implementation classes of those interfaces. The design of such interfaces includes the determination of the types of objects that will be used as the parameters and return values for these methods. If any of these interfaces or classes do not yet exist, you need to define them as well.
Implementing the remote objects. Remote objects must implement one or more remote interfaces. The remote object class may include implementations of other interfaces and methods that are available only locally. If any local classes are to be used for parameters or return values of any of these methods, they must be implemented as well.
Implementing the clients. Clients that use remote objects can be implemented at any time after the remote interfaces are defined, including after the remote objects have been deployed.
Compiling Sources
As with any Java program, you use the javac compiler to compile the source files. The source files contain the declarations of the remote interfaces, their implementations, any other server classes, and the client classes.

Note: With versions prior to Java Platform, Standard Edition 5.0, an additional step was required to build stub classes, by using the rmic compiler. However, this step is no longer necessary.
Making Classes Network Accessible
In this step, you make certain class definitions network accessible, such as the definitions for the remote interfaces and their associated types, and the definitions for classes that need to be downloaded to the clients or servers. Classes definitions are typically made network accessible through a web server.

Starting the Application
Starting the application includes running the RMI remote object registry, the server, and the client.

The rest of this section walks through the steps used to create a compute engine.

Building a Generic Compute Engine
This trail focuses on a simple, yet powerful, distributed application called a compute engine. The compute engine is a remote object on the server that takes tasks from clients, runs the tasks, and returns any results. The tasks are run on the machine where the server is running. This type of distributed application can enable a number of client machines to make use of a particularly powerful machine or a machine that has specialized hardware.

The novel aspect of the compute engine is that the tasks it runs do not need to be defined when the compute engine is written or started. New kinds of tasks can be created at any time and then given to the compute engine to be run. The only requirement of a task is that its class implement a particular interface. The code needed to accomplish the task can be downloaded by the RMI system to the compute engine. Then, the compute engine runs the task, using the resources on the machine on which the compute engine is running.

The ability to perform arbitrary tasks is enabled by the dynamic nature of the Java platform, which is extended to the network by RMI. RMI dynamically loads the task code into the compute engine's Java virtual machine and runs the task without prior knowledge of the class that implements the task. Such an application, which has the ability to download code dynamically, is often called a behavior-based application. Such applications usually require full agent-enabled infrastructures. With RMI, such applications are part of the basic mechanisms for distributed computing on the Java platform.

---

# RESTful WebServices

## Distributed Technologies

An object in one JVM trying to access with another object in another JVM is called **Java Distribute Technologies**.

OBJ 1(JVM3)---------(N/W)-----------------------------> OBJ 2(JVM2)
|
|--------------------(N/W)--------> OBJ3(JVM1)

Ther are many Java Distributed Tech:

1. EJB
2. RMI
3. Socket Programming
4. Corba

- The drawback for using RMI and EJB is that it only supports JVM(Java) and is limited to only Java programming language.

Java Distributed Technologies--------->java clients only can access
.NET Distributed Technologies--------->.net clients only can access

> To overcome the limitation, WEBSERVICES was introduced.

        |------Java request object-------xml----------xml-----------java object request---------|

consumer provider
|------Java response object------xml-----------xml---------java object response---------|

1. For every request--consumer end req object is converted to xml,provider end converts from xml to Java object
2. For every response--consumer end response object is converted to xml,consumer end converts from xml to Java object

## Web service in Java

- REST API(JAXRS and Spring REST)
- SOAP (Simple Object Access Protocol)(JAXWS)
- JAXB - converts object to xml and xml to objects.
- JACKSON- converts object to json and json to objects.

## JSR 311: JAX-RS: The JavaTM API for RESTful Web Services

This JSR will develop an API for providing support for RESTful(Representational State Transfer) Web Services in the Java Platform.

1. Services
2. API's
3. Endpoint url
4. Service userguides

JAX-RS is a specification (which basically tells what to implement/follow) and Jersey is an implementation (which means how those specifications should be implemented).We can have multiple implementations for a Specification. We have libs for JAX-RS because we can use JAX-RS API's in your code so that in future if you change your implementation (in this case Jersey to something else) you code will still work fine.

JAXRS implementations include:

1. Jersey (shipped with GlassFish and Payara)
2. Apache axis2
3. Apache cxf(shipped with TomEE and WebSphere)
4. RESTeasy(shipped with JBoss EAP and WildFly)

### JAX-RS Annotations

1. @Path-It identifies the URI path. It can be specified on class or method.
2. @GET,@PUT,@DELETE,@POST,@HEAD-specifies method responds to GET,PUT,DELETE,POST,HEAD request.
3. @Produces-defines media type for the response such as XML, PLAIN, JSON etc. It defines the media type that the methods of a resource class or MessageBodyWriter can produce.
4. @PathParam-Used to read value from URI path.
5. @Singleton
6. @CookieParam-represents the parameter of the cookie.
7. @BeanParam
8. @FormParam-represents the parameter of the form.
9. @QueryParam-represents the parameter of the query string of an URL.
10. @Headerparam
11. @matrixParam
12. @Consumes-used to specify the MIME media types of representations a resource can consume that were sent by the client.

```java
@Path("/greetings")
public class JaxRsController {

    @GET
    @Path("/{name}")
    @Produces(MediaType.TEXT_PLAIN)
    public Response greeting(@PathParam("name") String name) {

        String greeting = "Hello " + name;
        return Response.ok(greeting).build();
    }
}
```

Deployment descriptor config

```xml
<web-app>
//jaxrs implementation vendor e.g jersey
//servlet configs

<url-mapping>/order</url-mapping>
</web-app>
```

- Plain Java Rest(JAXRS) is no longer used.Spring Rest is commonly used instead.

## Importance of HTTP in REST

Used to transfer data from client to server.Its stateless protocol.
HTTP Request
Client--<------------------------>---Server
HTTP Response

1. HTTP Request Format- Has 3 parts(Request Line,Headers,Body).Request Line includes mathod name and URI.Header include metadata of the request i.e client,user-agent.Body is optional ie Its not in GET methods,required in POST.
2. HTTP Response- Has (Status Line,headers,Body).Status code shows request status.Metadata of response i.e content-length,content-type.Body is mandatory.

example:

GET | /orders | user-agent="mozilla" | No body
POST | /orders/123 | user-agent="mozilla" | `<order><orderid>1234</orderid><name>Mobile</name></order>`

200 | OK | content-length |`<orderresp><status>Delivered</status></orderrep>`

Reading from HTTP Request - Request Line {Methods(GET for @GET,.etc.) and URI(Extract info from uri @PathParam,@QueryParam,etc)},Headers includes(@HeaderParam-can read only one header at a time,@Context HttpHeaders header-Can read one or more header),Body(Content Handler-Reading from body i.e Predefined- Java.io.File,byte[],jaxb classes,jackson classes.Custom-MessageBodyReader,MessageBodyReader)

HTTP Response- Status Line{Status code-1XX and Message OK},Headers,Body(Content Handler-Custom-MessageBodyReader and MessageBodyWriter.Predefined-jaxb classes,jackson classes,String,java.io.OutputStream).To get only Response body use JAXB or Jackson classes,to get full response use javax.ws.rs.core.Response.Classes

- Use Cases:

1. ONLY GET Services-Reading data from URI using @QueryParam,@PathParam.
2. GET service and Headers-Use @XXXParams and @HeaderParams
3. POST Service-Reading data from body using predefined content handlers or custom handlers
4. POST Service and Headers-Use content handlers and @HeaderParams or @Context HttpHeaders headers

In GET,data is in URI while in POST data is in the body.

## Steps to develop REST api at Provider endPoint

1. Create maven web project
2. add jaxrs vendor dependency in pom.xml
3. Write resources that rep @Path annotation
4. Write subresources rep @Path,@Get,@Produce annotation
5. Write business logic in sub resources
6. Write web.xml-configure servlet

---

# JSON

1. Introduction
2. Syntax
3. XML vs JSON
4. Json Serializion and Json Deserialization
5. JACKSON
6. JSON Annotations

## Introduction

JSON stands for JAvascript Object Notation.it is derived from Javascript but not dependending on javascript.JSON data is lightweight and human readable text.
It has file extension of .json and its Media Type is "application/json"

### Why Learn JSON

Json is used in communication btwn application,since Json is not specific to any technologies,its generic for all technologies.

## JSON Syntax and Data Types

JSON Data is in the form of key value pair.
JSON syntax is: {key1:value1,key2:value2..} where key is String and value can be String,number,Boolean,Object,null,Array

There are 6 JSON Data types:

1. Boolean
2. String
3. Number
4. Object
5. Null
6. Arrays -Enclosed with a square brackets

eg

```json
{"orderId":123,"name":"book","isDelivered":true,"desc":null}
{
    "orders":[
        {"orderId":234,
        "name":"laptop",
        "isDelivered":true
        },
        {"orderId":908,
        "name":"watch",
        "isDelivered":false
        }
    ]
}
```

## XML vs JSON

- XML is heavy weight while JSON is lightweight

```xml
<orders>
  <order>
    <orderId>567</orderId>
    <name>Phone</name>
    <isDelivered>false</isDelivered>
  </order>
</orders>
```

- JSON Data is less in size, so data transfer in network is of high speed than XML

## Json Serializion and Json Deserialization

JSON Serialization is the process of converting Java Object into JSON and Deserialization is converting from JSON into Java Object.For every request consumer: JSON Serialization happens and for every response provider end.For every response consumer and request provider deserilization happens

Jackson library takes care json serilization and deserialization in java

## JACKSON

Jackson is used to perform JSON Serialization and Deserialization.We add Jackson dependency(jackson-databind) to our project.

It comes with other dependencies ie:

- Jackson-core
- Jackson-Annotations

Jackson has provided utility classes to perform Json Serialization and Deserialization.
The class is called ObjectMapper with the methods:

- writeValue()- Java Object to Json
- readValue()- JSON to Java Object

Eg

```java
public class Order{
    private int orderId;
    private String name;
    private boolean delivered;

    //Setters and Getters
}
```

JSON Serialization

```java
Order order1 =new Order();
order1.setOrderId(1234);
order1.setName("Monitor");
order1.setDelivered(true);

ObjectMapper mapper =new ObjectMapper();
String json = mapper.writeValueAsString(order1)
```

NOTE: While doing serialization, Java Properties is converted to JSON Keys

## JSON Annotations
