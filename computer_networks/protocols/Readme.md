# Protocols

Protocols are rules or guidelines that regulate the following characteristics of a network: access method, allowed physical topologies, types of cabling and speed of data transfer. Protocols can be implemented either in hardware or software or a mixture of both the lower layers is implemented in hardware, with the higher layers being implemented in software as follows:-

1. Protocols are how computers on a network communicate.
2. Protocols may determine packet size, information in the headers, and how data is stored in the packet.
3. Both sides of the conversation must understand these rules for a successful transmission.
4. Most protocols actually consist of several protocols grouped together in a suite.
5. Protocols are how computers on a network communicate. Rules governing communicate between LAN devices.
6. Protocols may determine packet size, information in the headers, and how data is stored in the packet.
7. Both sides of the conversation must understand these rules for a successful transmission.

**TCP/IP Protocol suite**:- TCP/IP protocol suite is made of five layers: physical, data link, network, transport, and application. The first four layers provide physical standards,network interfaces, internetworking, and transport functions that correspond to Protocols the first four layers of the OSI model.

Types of Protocols:-

- Network protocols
- Transport protocols
- Application protocols


## Physical/data link Protocols

At the physical and data link layers, TCPIIP does not define any specific protocol.It supports all the standard and proprietary protocols. A network in a TCPI/IP internetwork can be a local-area network or a wide-area network.


## Network Application Architectures

`client-server architecture` - There is an always-on host, called the server, which services requests from many other hosts, called clients.A classic example is the Web application for which an always-on Web server services requests from browsers running on client hosts. When a Web server receives a request for an object from a client host, it responds by sending the requested object to the client host.
Another characteristic of the client-server architecture is that the server has a fixed, well-known address, called an IP address.Because the server has a fixed, well-known address, and because the server is always on, a client can always contact the server by sending a packet to the server’s IP address.
Some of the better-known applications with a client-server architecture include the Web, FTP, Telnet, and e-mail.

`P2P architecture`, there is minimal (or no) reliance on dedicated servers in data centers. Instead the application exploits direct communication between pairs of intermittently connected hosts, called peers. The peers are not owned by the service provider, but are instead desktops and laptops controlled by users, with most of the

Network Layer Protocols:-

- **Internetworking Protocol (IP)*: (IP) is the transmission mechanism used by the TCP/IP protocols.
It is an unreliable and connectionless protocol-a best-effort delivery service. IP transports data in packets called datagrams, each of which is transported separately. Datagrams can travel along different routes and can arrive out of sequence or be duplicated. Does not keep track of the routes and has no facility for reordering datagrams once they arrive at their destination.IP provides barebones transmission functions that free the user to add only those facilities necessary for a given application and thereby allows for maximum efficiency.

- **Address Resolution Protocol (ARP)*:- Used to associate a logical address with a physical address. Used to find the physical address of the node when its Internet address is known. Handles the conversion of the address by sending out a discovery packet. To find out the MAC address of a particular IP address, Maintains a list of IP and MAC addresses so a discovery packet is not needed every time communication takes place. ARP is used to find the physical address of the node when its Internet address is known.

- **Internet Control Message Protocol (ICMP)*:- Mechanism used by hosts and gateways to send notification of datagram problems back to the sender by sending query and error reporting messages.The query messages, which occur in pairs, help a host or a network manager get specific information from a router or another host. The error-reporting messages report problems that a router or a host (destination) may encounter when it processes an IP packet.

- **Internet Group Message Protocol (IGMP)*:- Used to facilitate the simultaneous transmission of a message to a group of recipients. Gives the multicast routers information about the membership status of hosts (routers) connected to the network as group management protocol. It helps a multicast router create and update a list of loyal members related to each router interface.


## Transport protocols

UDP and TCP are transport level protocols responsible for delivery of a message from a process (running program) to another process.SCTP, has been devised to meet the needs of some newer applications.

- *User Datagram Protocol (UDP)*:- The User Datagram Protocol (UDP) is the simpler of the two standard TCP/IP transport protocols. It is a process-to-process protocol that adds only port addresses, checksum error control, and length information to the data from the upper layer.

- *Transmission Control Protocol*:- The Transmission Control Protocol (TCP) provides full transport-layer services to applications. TCP is a reliable stream transport protocol. The term stream, in this context, means connection-oriented: A connection must be established between both ends of a transmission before either can transmit data. At the sending end of each transmission, TCP divides a stream of data into smaller units called segments. Each segment includes a sequence number for reordering after receipt, together with an acknowledgment number for the segments received. Segments are carried across the internet inside of IP datagrams. At the receiving end, TCP collects each datagram as it comes in and reorders the transmission based on sequence numbers.

- *Stream Control Transmission Protocol*: The Stream Control Transmission Protocol (SCTP) provides support for newer applications such as voice over the Internet. It is a transport layer protocol that combines the best features of UDP and TCP. Designed for Internet applications e.g ISDN over IP, telephony signaling, media gateway control, IP telephony.
Provides this enhanced performance and reliability. Preserves the message boundaries and at the same time detects lost data, duplicate data, and out-of-order data and has congestion control and flow control mechanisms.

Internet transport protocols services on application layer:-

- TCP service:-
   1. Reliable Transport between sending and receiving process.
   2. Flow control: sender won't overwhelm receiver.
   3. Congestion Control: throttle sender when network overloaded.
   4. Connection-Oriented: setup required between client and server processes.
- UDP service:-
   1. Unrealiable Data Transfer between sending and receiving process.
   2. Does not provide reliability,flow control,congestion,timing,throughput guarantee,security or connection setup.


## Application protocols

The application layer enables the user,whether human or software,to access the network.It provides user interfaces and support for services such as electronic mail,remote file access and transfer,shared database management, and other types of distributed information systems.
Some network application that utilizes application layer - Social Networking,Web,Text Messaging,E-mail,Multi-User Network Games,Streaming Stored Video(Youtube,Netflix),P2P File sharing,Voice Over IP(Skype),real-Time Video Conference(Zoom),Internet search,Remote Login.
The application layer in TCP/IP is equivalent to the combined session,presentation, and application layers in the OSI model. Many protocols are defined at this layer some include the following:-

- **Simple Mail Transfer Protocol (SMTP)** - Simple Mail Transfer Protocol (SMTP) is responsible for making sure that e-mail is delivered. SMTP only handles the delivery of mail to servers and between servers. It does not handle the delivery to the final e-mail client application.Mail transfer is done through message transfer agents (MTA).SMTP simply defines how commands and responses must be sent back and forth.
SMTP is a push protocol and is used to send the mail wheres `POP`(Post Office Protocol) or `IMAP`(Internet Message Access Protocol) is used to retrieve those mails at receiver's side.

The client who wants to send the mail opens a TCP connection to SMTP server and then sends the mail across the connection.The SMTP server is an always-on listening mode.As soon as it listens for a TCP connection from any client,the SMTP process initiates a connection through port 25.After successfully establishig a TCP connection the client process sends mail instantly.

The SMTP model is of two types:
1. End-to-End method
2. Store-and-Forward method.

The end-to-end model is used to communicate between different organizations whereas the store-and-forward method is used within an organization.

`Model of SMTP system`:- In the SMTP model user deals with user agent(UA),e.g Microsoft Outlook,Netscape,Mozilla. To exchange the mail using TCP,MTA is used.The user sending the mail doesn't have to deal with MTA as it is the responsibility of system admin to set up local MTA.
The MTA maintains a small queue of mail so that it can schedule repeat delivery of mail in case the receiver is not available.The MTA delivers the mail to the mailboxes.

- Components of SMTP:
    - Mail User Agent(MUA):- It is a computer application that helps you in sending and retreiving mail.Responsible for creating email messages for transfer to the mail transfer agent(MTA).
    - Mail Submission Agent(MSA):- Computer program that receives email from a Mail User Agent(MUA) and interacts with Mail Transfer Agent(MTA) for transfer of email.
    - Mail Transfer Agent(MTA):- Software that has the work to transfer mail from one system to another with help of SMTP.
    - Mail Delivery Agent(MDA):- A system that helps in delivery of mail to local system.

`Working with SMTP`:- Steps for working with SMTP:-

1. Communication between sender and receiver - The sender's user agent prepares message and sends it to MTA.The MTA's responsibility is to transfer mail across neytwork to receivers MTA.To send mail,system must have a client MTA,and to receive mail,system must have a server MTA.
2. Sending Mails:- Mail is sent by series of request and responses messages between client and server.The message which is sent across consists of a header and a body.A null line is used to terminate mail header and everything after null line is considered body of message,which is a sequence of ASCII characters.The body contains actual info read by recipt.
3. Receiving mails - User agent on server side checks mailboxes at particular time of intervals.If any info is received,it informs user about the mail.

*Extended SMTP*:- Is an extended version of SMTP.Is a set of protocols for sending and receiving electronic messages on the internet.


- **POP3**:- POP3 is an extremely simple mail access protocol. It is defined in [RFC 1939], which is short and quite readable. Because the protocol is so simple, its functionality is rather limited. POP3 begins when the user agent (the client) opens a TCP connection to the mail server (the server) on port 110. With the TCPconnection established, POP3 progresses through three phases: authorization, transaction, and update.
During the first phase, authorization, the user agent sends a username and a password (in the clear) to authenticate the user. During the second phase, transaction, the user agent retrieves messages; also during this phase, the user agent can mark messages for deletion, remove deletion marks, and obtain mail statistics. The third phase, update, occurs after the client has issued the quit command, ending the POP3 session; at this time, the mail server deletes the messages that were marked for deletion.

- **IMAP**:- IMAP protocol, defined in [RFC 3501], was invented. Like POP3,IMAP is a mail access protocol. It has many more features than POP3, but it is also significantly more complex. (And thus the client and server side implementations are significantly more complex.)
An IMAP server will associate each message with a folder; when a message first arrives at the server, it is associated with the recipient’s INBOX folder. The recipient can then move the message into a new, user-created folder, read the message, delete the message, and so on. The IMAP protocol provides commands to allow users to create folders and move messages from one folder to another. IMAP also provides commands that allow users to search remote folders for messages matching specific criteria.
Note that, unlike POP3, an IMAP server maintains user state information across IMAP sessions—for example, the names of the folders and which messages are associated with which folders.
Another important feature of IMAP is that it has commands that permit a user agent to obtain components of messages. For example, a user agent can obtain just the message header of a message or just one part of a multipart MIME message. This feature is useful when there is a low-bandwidth connection (for example, a slow-speed modem link) between the user agent and its mail server. With a low-bandwidth connection, the user may not want to download all of the messages in its mailbox, particularly avoiding long messages that might contain, for example, an audio or video clip.


- **File Transfer Protocol (FTP)** - Mechanism provided by TCP/IP for copying a file from one host to another.Establishes two connections between the hosts. One connection is used for data transfer, the other for control information (commands and responses).FTP uses the services of TCP. It needs two TCP connections.
    1. The well-known port 21 is used for the control connection.
    2. The well-known port 20 for the data connection.

- **Domain Name System (DNS)** - Protocol used to map a name to an IP address or an address to a user friendly name. DNS client program sends a request to a DNS server to map the e-mail address to the corresponding IP address. People prefer to use names instead of numeric addresses.

- **Simple Network Management Protocol (SNMP)**:- (SNMP) is a framework for managing devices in an internet using the TCP/IP protocol suite provides a set of fundamental operations for monitoring and maintaining an internet, controls and monitors a set of agents, usually routers SNMP frees management tasks from both the physical characteristics of the managed devices and the underlying networking technology. Used in a heterogeneous internet made of different LANs and WANs connected by routers made by different manufacturers. SNMP uses two other protocols Structure of Management Information (SMI) and Management Information Base(MIB).


- **Web and Hypertext Transfer Protocol (HTTP)** - Web’s application-layer protocol for client/server model: Client browser requests, receives, (using HTTP protocol) and “displays” Web objects and Web server sends (using HTTP protocol) objects in response to requests from clients.This protocol can be used to request a resource from a server, and it can be used to return a response from a server.
HTTP is a protocol for fetching resources such as HTML documents. It is the foundation of any data exchange on the Web and it is a client-server protocol, which means requests are initiated by the recipient, usually the Web browser. A complete document is typically constructed from resources such as text content, layout instructions, images, videos, scripts, and more.
HTTP is an application-layer protocol for transmitting hypermedia documents, such as HTML. It was designed for communication between web browsers and web servers, but it can also be used for other purposes, such as machine-to-machine communication, programmatic access to APIs, and more.

Client initiates TCP connection (creates socket) to server, port 80 and server accepts TCP connection from client. HTTP messages (application-layer protocol messages) exchanged between browser (HTTP client) and Web server (HTTP server) and TCP connection closed.
HTTP is “stateless” where server maintains no information about past client requests

HTTP follows a classical client-server model, with a client opening a connection to make a request, then waiting until it receives a response from the server. HTTP is a stateless protocol, meaning that the server does not keep any session data between two requests, although the later addition of cookies adds state to some client-server interactions.

Clients and servers communicate by exchanging individual messages (as opposed to a stream of data). The messages sent by the client are called requests and the messages sent by the server as an answer are called responses.
Designed in the early 1990s, HTTP is an extensible protocol which has evolved over time. It is an application layer protocol that is sent over TCP, or over a TLS-encrypted TCP connection, though any reliable transport protocol could theoretically be used. Due to its extensibility, it is used to not only fetch hypertext documents, but also images and videos or to post content to servers, like with HTML form results. HTTP can also be used to fetch parts of documents to update Web pages on demand.

`Components of HTTP-based systems` - HTTP is a client-server protocol: requests are sent by one entity, the user-agent (or a proxy on behalf of it). Most of the time the user-agent is a Web browser, but it can be anything, for example, a robot that crawls the Web to populate and maintain a search engine index.Each individual request is sent to a server, which handles it and provides an answer called the response. Between the client and the server there are numerous entities, collectively called proxies, which perform different operations and act as gateways or caches.

Client: the user-agent - The user-agent is any tool that acts on behalf of the user. This role is primarily performed by the Web browser, but it may also be performed by programs used by engineers and Web developers to debug their applications.
The browser is always the entity initiating the request. It is never the server (though some mechanisms have been added over the years to simulate server-initiated messages).
To display a Web page, the browser sends an original request to fetch the HTML document that represents the page. It then parses this file, making additional requests corresponding to execution scripts, layout information (CSS) to display, and sub-resources contained within the page (usually images and videos). The Web browser then combines these resources to present the complete document, the Web page. Scripts executed by the browser can fetch more resources in later phases and the browser updates the Web page accordingly.
A Web page is a hypertext document. This means some parts of the displayed content are links, which can be activated (usually by a click of the mouse) to fetch a new Web page, allowing the user to direct their user-agent and navigate through the Web. The browser translates these directions into HTTP requests, and further interprets the HTTP responses to present the user with a clear response.

The Web server:- On the opposite side of the communication channel is the server, which serves the document as requested by the client. A server appears as only a single machine virtually; but it may actually be a collection of servers sharing the load (load balancing), or other software (such as caches, a database server, or e-commerce servers), totally or partially generating the document on demand.
A server is not necessarily a single machine, but several server software instances can be hosted on the same machine. With HTTP/1.1 and the Host header, they may even share the same IP address.

Proxies:- Between the Web browser and the server, numerous computers and machines relay the HTTP messages. Due to the layered structure of the Web stack, most of these operate at the transport, network or physical levels, becoming transparent at the HTTP layer and potentially having a significant impact on performance. Those operating at the application layers are generally called proxies. These can be transparent, forwarding on the requests they receive without altering them in any way, or non-transparent, in which case they will change the request in some way before passing it along to the server. Proxies may perform numerous functions:
1. caching (the cache can be public or private, like the browser cache)
2. filtering (like an antivirus scan or parental controls)
3. load balancing (to allow multiple servers to serve different requests)
4. authentication (to control access to different resources)
5. logging (allowing the storage of historical information)

`Basic aspects of HTTP`:-

1. HTTP is simple:- HTTP is generally designed to be human-readable, even with the added complexity introduced in HTTP/2 by encapsulating HTTP messages into frames. HTTP messages can be read and understood by humans, providing easier testing for developers, and reduced complexity for newcomers.
2. HTTP is extensible:- Introduced in HTTP/1.0, HTTP headers make this protocol easy to extend and experiment with. New functionality can even be introduced by an agreement between a client and a server about a new header's semantics.
3. HTTP is stateless, but not sessionless:- HTTP is stateless: there is no link between two requests being successively carried out on the same connection. This immediately has the prospect of being problematic for users attempting to interact with certain pages coherently, for example, using e-commerce shopping baskets. But while the core of HTTP itself is stateless, HTTP cookies allow the use of stateful sessions. Using header extensibility, HTTP Cookies are added to the workflow, allowing session creation on each HTTP request to share the same context, or the same state.

`HTTP and connections` - A connection is controlled at the transport layer, and therefore fundamentally out of scope for HTTP. HTTP doesn't require the underlying transport protocol to be connection-based; it only requires it to be reliable, or not lose messages (at minimum, presenting an error in such cases). Among the two most common transport protocols on the Internet, TCP is reliable and UDP isn't. HTTP therefore relies on the TCP standard, which is connection-based.
Before a client and server can exchange an HTTP request/response pair, they must establish a TCP connection, a process which requires several round-trips. The default behavior of HTTP/1.0 is to open a separate TCP connection for each HTTP request/response pair. This is less efficient than sharing a single TCP connection when multiple requests are sent in close succession.

In order to mitigate this flaw, HTTP/1.1 introduced pipelining (which proved difficult to implement) and persistent connections: the underlying TCP connection can be partially controlled using the Connection header. HTTP/2 went a step further by multiplexing messages over a single connection, helping keep the connection warm and more efficient.

Experiments are in progress to design a better transport protocol more suited to HTTP. For example, Google is experimenting with QUIC which builds on UDP to provide a more reliable and efficient transport protocol.

What can be controlled by HTTP - This extensible nature of HTTP has, over time, allowed for more control and functionality of the Web. Cache and authentication methods were functions handled early in HTTP history. The ability to relax the origin constraint, by contrast, was only added in the 2010s.

Here is a list of common features controllable with HTTP:

- Caching: How documents are cached can be controlled by HTTP. The server can instruct proxies and clients about what to cache and for how long. The client can instruct intermediate cache proxies to ignore the stored document.
- Relaxing the origin constraint: To prevent snooping and other privacy invasions, Web browsers enforce strict separation between websites. Only pages from the same origin can access all the information of a Web page. Though such a constraint is a burden to the server, HTTP headers can relax this strict separation on the server side, allowing a document to become a patchwork of information sourced from different domains; there could even be security-related reasons to do so.
- Authentication: Some pages may be protected so that only specific users can access them. Basic authentication may be provided by HTTP, either using the WWW-Authenticate and similar headers, or by setting a specific session using HTTP cookies.
- Proxy and tunneling: Servers or clients are often located on intranets and hide their true IP address from other computers. HTTP requests then go through proxies to cross this network barrier. Not all proxies are HTTP proxies. The SOCKS protocol, for example, operates at a lower level. Other protocols, like ftp, can be handled by these proxies.
- Sessions: Using HTTP cookies allows you to link requests with the state of the server. This creates sessions, despite basic HTTP being a stateless protocol. This is useful not only for e-commerce shopping baskets, but also for any site allowing user configuration of the output.

HTTP flow - When a client wants to communicate with a server, either the final server or an intermediate proxy, it performs the following steps:

1. Open a TCP connection: The TCP connection is used to send a request, or several, and receive an answer. The client may open a new connection, reuse an existing connection, or open several TCP connections to the servers.
2. Send an HTTP message: HTTP messages (before HTTP/2) are human-readable. With HTTP/2, these messages are encapsulated in frames, making them impossible to read directly, but the principle remains the same. 
3. Read the response sent by the server.
4. Close or reuse the connection for further requests.

If HTTP pipelining is activated, several requests can be sent without waiting for the first response to be fully received. HTTP pipelining has proven difficult to implement in existing networks, where old pieces of software coexist with modern versions. HTTP pipelining has been superseded in HTTP/2 with more robust multiplexing requests within a frame.


`HTTP Messages`:- HTTP messages, as defined in HTTP/1.1 and earlier, are human-readable. In HTTP/2, these messages are embedded into a binary structure, a frame, allowing optimizations like compression of headers and multiplexing. Even if only part of the original HTTP message is sent in this version of HTTP, the semantics of each message is unchanged and the client reconstitutes (virtually) the original HTTP/1.1 request. It is therefore useful to comprehend HTTP/2 messages in the HTTP/1.1 format.
HTTP messages are the mechanism used to exchange data between a server and a client in the HTTP protocol.

There are two types of messages: requests sent by the client to trigger an action on the server, and responses, the answer that the server sends in response to a request.

Developers rarely, if ever, build HTTP messages from scratch. Applications such as a browser, proxy, or web server use software designed to create HTTP messages in a reliable and efficient way. How messages are created or transformed is controlled via APIs in browsers, configuration files for proxies or servers, or other interfaces.
In HTTP protocol versions up to HTTP/2, messages are text-based, and are relatively straightforward to read and understand after you've familiarized yourself with the format. In HTTP/2, messages are wrapped in binary framing, which makes them slightly harder to read. However the underlying semantics of the protocol are the same, so you can learn the structure and meaning of HTTP messages based on the text-based format of HTTP/1.x messages, and apply this understanding to HTTP/2 and beyond.

Both requests and responses share a similar structure:

1. A start-line is a single line that describes the HTTP version along with the request method or the outcome of the request.
2. An optional set of HTTP headers containing metadata that describes the message. For example, a request for a resource might include the allowed formats of that resource, while the response might include headers to indicate the actual format returned.
3. An empty line indicating the metadata of the message is complete.
4. An optional body containing data associated with the message. This might be POST data to send to the server in a request, or some resource returned to the client in a response. Whether a message contains a body or not is determined by the start-line and HTTP headers.

The start-line and headers of the HTTP message are collectively known as the head of the requests, and the part afterwards that contains its content is known as the body.


`HTTP Request`:- The first line of HTTP request is known as *request line*.This line contains request method,the request URL, and the request Protocol.Typically,the request is Get or Post,but other methods are supported by HTTP.Similarly,request protocol is usually HTTP 1.1,but could possibly be HTTP 1.0 or HTTP 1.2.
After the request line,an HTTP request contains the *request headers*.These headers contain information about client that's making the request.A request can contain several headers.Each request header begins with the name of request header,followed by a colon and a space,followed by the value of request header.
After the request headers,an HTTP request that uses the Post method may include a blank line followed by the parameters for te request.Unlike a Get request,a Post request doesn't include its parameters in URL.
Requests consist of the following elements:

- An HTTP method, usually a verb like GET, POST, or a noun like OPTIONS or HEAD that defines the operation the client wants to perform. Typically, a client wants to fetch a resource (using GET) or post the value of an HTML form (using POST), though more operations may be needed in other cases.
- The path of the resource to fetch; the URL of the resource stripped from elements that are obvious from the context, for example without the protocol (http://), the domain (here, developer.mozilla.org), or the TCP port (here, 80).
- The version of the HTTP protocol.
- Optional headers that convey additional information for the servers.
- A body, for some methods like POST, similar to those in responses, which contain the resource sent.


```http
GET /demo_war_exploded/ HTTP/1.1
Host: localhost:8080
User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:128.0) Gecko/20100101 Firefox/128.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/png,image/svg+xml,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br, zstd
Connection: keep-alive
Cookie: JSESSIONID=0B199FCB7A7F982D873615C29036C4B0; grafana_session=ec793070c88d06e8dd74b111e6a94306; grafana_session_expiry=1759250475; iconSize=16x16; JSESSIONID=B47F93F6C583E1A61A4C6633A774003D
Upgrade-Insecure-Requests: 1
Sec-Fetch-Dest: document
Sec-Fetch-Mode: navigate
Sec-Fetch-Site: none
Sec-Fetch-User: ?1
Priority: u=0, i
Pragma: no-cache
Cache-Control: no-cache
```

Common HTTP request headers:- Most of the time, a web browser automatically sets these request headers when it makes a request.Then,when the server receives the request,it can check these headers to learn about the browser.In addition,though,you can write servlets that set some of these request headers.

1. accept - Specifies the preferred order of MIME types tht browser can accept.The "*/*" type indicates that the browser can handle any MIME type.
2. accept-encoding - Specifies the types of compression encoding that the browser can support.
3. accept-charset - Specifies the character sets that the browser can accept.
4. accept-language - Specifies the Standard language codes for the languages that browser prefers.The standard language code for English is "en" or "en-us".
5. authorization - Identifie the authorization level for browser.When you use container-managed security,the servlet automatically sets this header.
6. connection - Indicates the type of connection that's being used by the browser.in HTTP 1.0, a value of "keep-alive" means that the browser can use a persistent connection that allows it to accept multiple files with single connection.In HTTP 1.1,this type of connection is default.
7. cookie - Specifies any cookies that were previously sent by current server.
8. host - Specifies the host and port of the machine that originally sent the request.This header was optional in HTTP 1.0 and required in HTTP 1.1
9. pragma- A value of "no-cache" indicates that any servlet that's forwarding requests shouldn't cache this page.
10. referer - Indicates the URL of the referring web page.
11. user-agent - Indicates the type of browser and its environments.


`HTTP Response`:- The first line of HTTP response is known as *status line*.This line specifices the version of HTTP that's being used, a status code, and a message that's associated with status code.After status line,an HTTP response contains the *response headers*.These headers contain information about server and about response that's being returned to the client.Like request headers,each response header takes one line.
After the response headers,an HTTP response contains a blank line,followed by the *response entity* or *response body*.The response body could be XML document,a video file,PDF file,HTML document,sound file..
Responses consist of the following elements:

1. The version of the HTTP protocol they follow.
2. A status code, indicating if the request was successful or not, and why.
3. A status message, a non-authoritative short description of the status code.
4. HTTP headers, like those for requests.
5. Optionally, a body containing the fetched resource.

```http
HTTP/1.1 200 
Content-Type: text/html;charset=UTF-8
Content-Length: 614
Date: Thu, 30 Oct 2025 21:12:26 GMT
Keep-Alive: timeout=20
Connection: keep-alive


<html>
<head>
    <title>Add</title>
</head>
<body>

<p style="color: red"></p>
<form action="mail" method="post">
    <h2>Join our Mailing List.</h2>
    <p>Please Input your Details to join our mailing Lists.</p>
    <label for="firstname">First Name</label><input type="text" id="firstname" name="firstname" value=""><br/>
    <label for="lastname">Last Name</label><input type="text" id="lastname" name="lastname" value=""><br/>
    <label for="email">Email</label><input type="email" id="email" name="email" value=""><br/>
    <input type="submit" value="Submit" >
</form>

```


`Media types (MIME types)`:- A media type (formerly known as a Multipurpose Internet Mail Extensions or MIME type) indicates the nature and format of a document, file, or assortment of bytes. MIME types are defined and standardized in IETF's RFC 6838.
The Internet Assigned Numbers Authority (IANA) is responsible for all official MIME types, and you can find the most up-to-date and complete list at their Media Types page.
The Multipurpose Internet Mail Extension(MIME) types provide standards for the various types of data that can be transferred across the internet.
It can be included in accept header of request or the content-type header of response.
To specify an officially registered MIME type,you use the format(type/subtype).To specify a MIME type that isn't officially registered,you use the format(type/x-subtype).

Structure of a MIME type - A MIME type most commonly consists of just two parts: a type and a subtype, separated by a slash (/) — with no whitespace between:

1. type/subtype - The type represents the general category into which the data type falls, such as video or text.The subtype identifies the exact kind of data of the specified type the MIME type represents. For example, for the MIME type text, the subtype might be plain (plain text), html (HTML source code), or calendar (for iCalendar/.ics) files.
Each type has its own set of possible subtypes. A MIME type always has both a type and a subtype, never just one or the other.
An optional parameter can be added to provide additional details:

type/subtype;parameter=value

For example, for any MIME type whose main type is text, you can add the optional charset parameter to specify the character set used for the characters in the data. If no charset is specified, the default is ASCII (US-ASCII) unless overridden by the user agent's settings. To specify a UTF-8 text file, the MIME type text/plain;charset=UTF-8 is used.
MIME types are case-insensitive but are traditionally written in lowercase. The parameter values can be case-sensitive.

2. Types:- There are two classes of type: discrete and multipart. Discrete types are types which represent a single file or medium, such as a single text or music file, or a single video. A multipart type represents a document that's comprised of multiple component parts, each of which may have its own individual MIME type; or, a multipart type may encapsulate multiple files being sent together in one transaction. For example, multipart MIME types are used when attaching multiple files to an email.

Discrete types - The discrete types currently registered with the IANA are:

- application - Any kind of binary data that doesn't fall explicitly into one of the other types; either data that will be executed or interpreted in some way or binary data that requires a specific application or category of application to use. Generic binary data (or binary data whose true type is unknown) is application/octet-stream. Other common examples include application/pdf, application/pkcs8, and application/zip. (See application type registry at IANA)
- audio - Audio or music data. Examples include audio/mpeg, audio/vorbis. (See audio type registry at IANA)
example
    Reserved for use as a placeholder in examples showing how to use MIME types. These should never be used outside of sample code listings and documentation. example can also be used as a subtype; for instance, in an example related to working with audio on the web, the MIME type audio/example can be used to indicate that the type is a placeholder and should be replaced with an appropriate one when using the code in the real world.
- font - Font/typeface data. Common examples include font/woff, font/ttf, and font/otf. (See font type registry at IANA)
- image - Image or graphical data including both bitmap and vector still images as well as animated versions of still image formats such as animated GIF or APNG. Common examples are image/jpeg, image/png, and image/svg+xml. (See image type registry at IANA)
- model - Model data for a 3D object or scene. Examples include model/3mf and model/vrml. (See model type registry at IANA)
- text - Text-only data including any human-readable content, source code, or textual data such as comma-separated value (CSV) formatted data. Examples include: text/plain, text/csv, and text/html. (See text type registry at IANA)
- video - Video data or files, such as MP4 movies (video/mp4). (See video type registry at IANA)

For text documents without a specific subtype, text/plain should be used. Similarly, for binary documents without a specific or known subtype, application/octet-stream should be used.

Multipart types - Multipart types indicate a category of document broken into pieces, often with different MIME types; they can also be used — especially in email scenarios — to represent multiple, separate files which are all part of the same transaction. They represent a composite document.
Except for multipart/form-data, used in the POST method of HTML Forms, and multipart/byteranges, used with 206 Partial Content to send part of a document, HTTP doesn't handle multipart documents in a special way: the message is transmitted to the browser (which will likely show a "Save As" window if it doesn't know how to display the document).
There are two multipart types:

- message - A message that encapsulates other messages. This can be used, for instance, to represent an email that includes a forwarded message as part of its data, or to allow sending very large messages in chunks as if it were multiple messages. Examples include message/rfc822 (for forwarded or replied-to message quoting) and message/partial to allow breaking a large message into smaller ones automatically to be reassembled by the recipient. (See message type registry at IANA)
- multipart - Data that consists of multiple components which may individually have different MIME types. Examples include multipart/form-data (for data produced using the FormData API) and multipart/byteranges (defined in RFC 7233, section 5.4.1 and used with HTTP's 206 "Partial Content" response returned when the fetched data is only part of the content, such as is delivered using the Range header). (See multipart type registry at IANA)

Important MIME types for Web developers:-

1. application/octet-stream - This is the default for binary files. As it means unknown binary file, browsers usually don't execute it, or even ask if it should be executed. They treat it as if the Content-Disposition header was set to attachment, and propose a "Save As" dialog.
2. text/plain - This is the default for textual files. Even if it really means "unknown textual file," browsers assume they can display it.
Note: text/plain does not mean "any kind of textual data." If they expect a specific kind of textual data, they will likely not consider it a match. Specifically if they download a text/plain file from a <link> element declaring a CSS file, they will not recognize it as a valid CSS file if presented with text/plain. The CSS mime type text/css must be used.
3. text/css - CSS files used to style a Web page must be sent with text/css. If a server doesn't recognize the .css suffix for CSS files, it may send them with text/plain or application/octet-stream MIME types. If so, they won't be recognized as CSS by most browsers and will be ignored.
4. text/html - All HTML content should be served with this type. Alternative MIME types for XHTML (like application/xhtml+xml) are mostly useless nowadays.
Note: Use application/xml or application/xhtml+xml if you want XML's strict parsing rules, <![CDATA[…]]> sections, or elements that aren't from HTML/SVG/MathML namespaces.
5. text/javascript - JavaScript content should always be served with the MIME type text/javascript. For historic reasons, browsers may support some legacy JavaScript types listed below, but you should not assume scripts served with any MIME type other than text/javascript will always load or run.Note that in HTML the type attribute for script elements may only contain the JavaScript MIME type essence: text/javascript. Including any parameter, such as charset=utf-8, is the same as setting the type to any other MIME type: the script content is treated as a data block and is not executed as JavaScript. (Note that setting the type to a JavaScript MIME type is a deprecated feature itself: you should omit the type in this case.) In contrast, when using the HTTP Content-Type header you may optionally specify the charset parameter as usual.
    - Legacy JavaScript MIME types - In addition to the text/javascript MIME type, for historical reasons, the MIME Sniffing Standard (the definition of how browsers should interpret MIME types and figure out what to do with content that doesn't have a valid one) also allows JavaScript to be served using any of the following legacy JavaScript MIME types:
        - application/javascript Deprecated
        - application/ecmascript Deprecated
        - application/x-ecmascript Non-standard
        - application/x-javascript Non-standard
        - text/ecmascript Deprecated
        - text/javascript1.0 Non-standard
        - text/javascript1.1 Non-standard
        - text/javascript1.2 Non-standard
        - text/javascript1.3 Non-standard
        - text/javascript1.4 Non-standard
        - text/javascript1.5 Non-standard
        - text/jscript Non-standard
        - text/livescript Non-standard
        - text/x-ecmascript Non-standard
        - text/x-javascript Non-standard
Note: Even though any given user agent may support any or all of these, you should only use text/javascript. It's the only MIME type guaranteed to work now and into the future.
6. application/json - JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax. It is commonly used for transmitting data in web applications.

- Image types - Files whose MIME type is image contain image data. The subtype specifies which specific image file format the data represents.The following image types are used commonly enough to be considered safe for use on web pages:
    - image/apng: Animated Portable Network Graphics (APNG)
    - image/avif : AV1 Image File Format (AVIF)
    - image/gif: Graphics Interchange Format (GIF)
    - image/jpeg: Joint Photographic Expert Group image (JPEG)
    - image/png: Portable Network Graphics (PNG)
    - image/svg+xml: Scalable Vector Graphics (SVG)
    - image/webp: Web Picture format (WEBP)
The Image file type and format guide provides information and recommendations about when to use the different image formats.

Audio and video types:- As is the case for images, HTML doesn't mandate that web browsers support any specific file and codec types for the <audio> and <video> elements, so it's important to consider your target audience and the range of browsers (and versions of those browsers) they may be using when choosing the file type and codecs to use for media.
Our media container formats guide provides a list of the file types that are commonly supported by web browsers, including information about what their special use cases may be, any drawbacks they have, and compatibility information, along with other details.
The audio codec and video codec guides list the various codecs that web browsers often support, providing compatibility details along with technical information such as how many audio channels they support, what sort of compression is used, and what bit rates and so forth they're useful at. The codecs used by WebRTC guide expands upon this by specifically covering the codecs supported by the major web browsers, so you can choose the codecs that best cover the range of browsers you wish to support.
As for MIME types of audio or video files, they typically specify the container format (file type). The optional codecs parameter can be added to the MIME type to further specify which codecs to use and what options were used to encode the media, such as codec profile, level, or other such information.

multipart/form-data - The multipart/form-data type can be used when sending the values of a completed HTML Form from browser to server.
As a multipart document format, it consists of different parts, delimited by a boundary (a string starting with a double dash --). Each part is its own entity with its own HTTP headers, Content-Disposition, and Content-Type for file uploading fields.

`HTTP Methods`:
GET - Retrieves data from server
POST - submit data to server
PUT - update data already on server
DELETE - delete data from server.

`HTTP Status Code`:- HTTP status codes are three-digit numbers returned by a server in response to an HTTP request, indicating the outcome of the request. These codes are grouped into five classes, each representing a general category of response:

1. 1xx: Informational - The request was received, and the server is continuing the process. Examples include 100 Continue and 101 Switching Protocols.
2. 2xx: Successful - The action requested by the client was successfully received, understood, and accepted. Examples include 200 OK, 201 Created, and 204 No Content.
3. 3xx: Redirection - Further action is required by the client to complete the request. Examples include 301 Moved Permanently, 302 Found, and 304 Not Modified.
4. 4xx: Client Error - The request contains bad syntax or cannot be fulfilled due to a client-side issue. Examples include 400 Bad Request, 401 Unauthorized, 403 Forbidden, and 404 Not Found.
5. 5xx: Server Error - The server failed to fulfill an apparently valid request due to a server-side issue. Examples include 500 Internal Server Error, 502 Bad Gateway, and 503 Service Unavailable.

Informational responses:

- 100 Continue - This interim response indicates that the client should continue the request or ignore the response if the request is already finished.
- 101 Switching Protocols - This code is sent in response to an Upgrade request header from the client and indicates the protocol the server is switching to.
- 102 Processing Deprecated - This code was used in WebDAV contexts to indicate that a request has been received by the server, but no status was available at the time of the response.
- 103 Early Hints - This status code is primarily intended to be used with the Link header, letting the user agent start preloading resources while the server prepares a response or preconnect to an origin from which the page will need resources.

Successful responses:

- 200 OK - The request succeeded. The result and meaning of "success" depends on the HTTP method:
   1. GET: The resource has been fetched and transmitted in the message body.
   2. HEAD: Representation headers are included in the response without any message body.
   3. PUT or POST: The resource describing the result of the action is transmitted in the message body.
   4. TRACE: The message body contains the request as received by the server.
- 201 Created - The request succeeded, and a new resource was created as a result. This is typically the response sent after POST requests, or some PUT requests.
- 202 Accepted - The request has been received but not yet acted upon. It is noncommittal, since there is no way in HTTP to later send an asynchronous response indicating the outcome of the request. It is intended for cases where another process or server handles the request, or for batch processing.
- 203 Non-Authoritative Information - This response code means the returned metadata is not exactly the same as is available from the origin server, but is collected from a local or a third-party copy. This is mostly used for mirrors or backups of another resource. Except for that specific case, the 200 OK response is preferred to this status.
- 204 No Content - There is no content to send for this request, but the headers are useful. The user agent may update its cached headers for this resource with the new ones.
- 205 Reset Content - Tells the user agent to reset the document which sent this request.
- 206 Partial Content - This response code is used in response to a range request when the client has requested a part or parts of a resource.
- 207 Multi-Status (WebDAV) - Conveys information about multiple resources, for situations where multiple status codes might be appropriate.
- 208 Already Reported (WebDAV) - Used inside a <dav:propstat> response element to avoid repeatedly enumerating the internal members of multiple bindings to the same collection.
- 226 IM Used (HTTP Delta encoding) - The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.

Redirection messages:-

- 300 Multiple Choices - In agent-driven content negotiation, the request has more than one possible response and the user agent or user should choose one of them. There is no standardized way for clients to automatically choose one of the responses, so this is rarely used.
- 301 Moved Permanently - The URL of the requested resource has been changed permanently. The new URL is given in the response.
- 302 Found - This response code means that the URI of requested resource has been changed temporarily. Further changes in the URI might be made in the future, so the same URI should be used by the client in future requests.
- 303 See Other - The server sent this response to direct the client to get the requested resource at another URI with a GET request.
- 304 Not Modified - This is used for caching purposes. It tells the client that the response has not been modified, so the client can continue to use the same cached version of the response.
- 305 Use Proxy Deprecated - Defined in a previous version of the HTTP specification to indicate that a requested response must be accessed by a proxy. It has been deprecated due to security concerns regarding in-band configuration of a proxy.
- 306 unused - This response code is no longer used; but is reserved. It was used in a previous version of the HTTP/1.1 specification.
- 307 Temporary Redirect - The server sends this response to direct the client to get the requested resource at another URI with the same method that was used in the prior request. This has the same semantics as the 302 Found response code, with the exception that the user agent must not change the HTTP method used: if a POST was used in the first request, a POST must be used in the redirected request.
- 308 Permanent Redirect - This means that the resource is now permanently located at another URI, specified by the Location response header. This has the same semantics as the 301 Moved Permanently HTTP response code, with the exception that the user agent must not change the HTTP method used: if a POST was used in the first request, a POST must be used in the second request.

Client error responses:

- 400 Bad Request - The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).
- 401 Unauthorized - Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.
- 402 Payment Required - The initial purpose of this code was for digital payment systems, however this status code is rarely used and no standard convention exists.
- 403 Forbidden - The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the server.
- 404 Not Found - The server cannot find the requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of 403 Forbidden to hide the existence of a resource from an unauthorized client. This response code is probably the most well known due to its frequent occurrence on the web.
- 405 Method Not Allowed - The request method is known by the server but is not supported by the target resource. For example, an API may not allow DELETE on a resource, or the TRACE method entirely.
- 406 Not Acceptable - This response is sent when the web server, after performing server-driven content negotiation, doesn't find any content that conforms to the criteria given by the user agent.
- 407 Proxy Authentication Required - This is similar to 401 Unauthorized but authentication is needed to be done by a proxy.
- 408 Request Timeout - This response is sent on an idle connection by some servers, even without any previous request by the client. It means that the server would like to shut down this unused connection. This response is used much more since some browsers use HTTP pre-connection mechanisms to speed up browsing. Some servers may shut down a connection without sending this message.
- 409 Conflict - This response is sent when a request conflicts with the current state of the server. In WebDAV remote web authoring, 409 responses are errors sent to the client so that a user might be able to resolve a conflict and resubmit the request.
- 410 Gone - This response is sent when the requested content has been permanently deleted from server, with no forwarding address. Clients are expected to remove their caches and links to the resource. The HTTP specification intends this status code to be used for "limited-time, promotional services". APIs should not feel compelled to indicate resources that have been deleted with this status code.
- 411 Length Required - Server rejected the request because the Content-Length header field is not defined and the server requires it.
- 412 Precondition Failed - In conditional requests, the client has indicated preconditions in its headers which the server does not meet.
- 413 Content Too Large - The request body is larger than limits defined by server. The server might close the connection or return a Retry-After header field.
- 414 URI Too Long - The URI requested by the client is longer than the server is willing to interpret.
- 415 Unsupported Media Type - The media format of the requested data is not supported by the server, so the server is rejecting the request.
- 416 Range Not Satisfiable - The ranges specified by the Range header field in the request cannot be fulfilled. It's possible that the range is outside the size of the target resource's data.
- 417 Expectation Failed - This response code means the expectation indicated by the Expect request header field cannot be met by the server.
- 418 I'm a teapot - The server refuses the attempt to brew coffee with a teapot.
- 421 Misdirected Request - The request was directed at a server that is not able to produce a response. This can be sent by a server that is not configured to produce responses for the combination of scheme and authority that are included in the request URI.
- 422 Unprocessable Content (WebDAV) - The request was well-formed but was unable to be followed due to semantic errors.
- 423 Locked (WebDAV) - The resource that is being accessed is locked.
- 424 Failed Dependency (WebDAV) - The request failed due to failure of a previous request.
- 425 Too Early Experimental - Indicates that the server is unwilling to risk processing a request that might be replayed.
- 426 Upgrade Required - The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol. The server sends an Upgrade header in a 426 response to indicate the required protocol(s).
- 428 Precondition Required - The origin server requires the request to be conditional. This response is intended to prevent the 'lost update' problem, where a client GETs a resource's state, modifies it and PUTs it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict.
- 429 Too Many Requests - The user has sent too many requests in a given amount of time (rate limiting).
- 431 Request Header Fields Too Large - The server is unwilling to process the request because its header fields are too large. The request may be resubmitted after reducing the size of the request header fields.
- 451 Unavailable For Legal Reasons - The user agent requested a resource that cannot legally be provided, such as a web page censored by a government.

`Server error responses`:-

- 500 Internal Server Error - The server has encountered a situation it does not know how to handle. This error is generic, indicating that the server cannot find a more appropriate 5XX status code to respond with.
- 501 Not Implemented - The request method is not supported by the server and cannot be handled. The only methods that servers are required to support (and therefore that must not return this code) are GET and HEAD.
- 502 Bad Gateway - This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.
- 503 Service Unavailable - The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent. This response should be used for temporary conditions and the Retry-After HTTP header should, if possible, contain the estimated time before the recovery of the service. The webmaster must also take care about the caching-related headers that are sent along with this response, as these temporary condition responses should usually not be cached.
- 504 Gateway Timeout - This error response is given when the server is acting as a gateway and cannot get a response in time.
- 505 HTTP Version Not Supported - The HTTP version used in the request is not supported by the server.
- 506 Variant Also Negotiates - The server has an internal configuration error: during content negotiation, the chosen variant is configured to engage in content negotiation itself, which results in circular references when creating responses.
- 507 Insufficient Storage (WebDAV) - The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.
- 508 Loop Detected (WebDAV) - The server detected an infinite loop while processing the request.
- 510 Not Extended - The client request declares an HTTP Extension (RFC 2774) that should be used to process the request, but the extension is not supported.
- 511 Network Authentication Required - Indicates that the client needs to authenticate to gain network access.


`Evolution of HTTP`:- HTTP (HyperText Transfer Protocol) is the underlying protocol of the World Wide Web. Developed by Tim Berners-Lee and his team between 1989-1991, HTTP has gone through many changes that have helped maintain its simplicity while shaping its flexibility.HTTP evolved from a protocol designed to exchange files in a semitrusted laboratory environment into a modern internet maze that carries images and videos in high resolution and 3D.

- Invention of the World Wide Web:- In 1989, while working at CERN, Tim Berners-Lee wrote a proposal to build a hypertext system over the internet. Initially called the Mesh, it was later renamed the World Wide Web during its implementation in 1990. Built over the existing TCP and IP protocols, it consisted of 4 building blocks:
    1. A textual format to represent hypertext documents, the HyperText Markup Language (HTML).
    2. A protocol to exchange these documents, the HyperText Transfer Protocol (HTTP).
    3. A client to display (and edit) these documents, the first web browser called the WorldWideWeb.
    4. A server to give access to the document, an early version of httpd.

These four building blocks were completed by the end of 1990, and the first servers were running outside of CERN by early 1991. On August 6, 1991, Tim Berners-Lee posted on the public alt.hypertext newsgroup. This is now considered to be the official start of the World Wide Web as a public project.
The HTTP protocol used in those early phases was very simple. It was later dubbed HTTP/0.9 and is sometimes called the one-line protocol.

- HTTP/0.9 – The one-line protocol:- The initial version of HTTP had no version number; it was later called 0.9 to differentiate it from later versions. HTTP/0.9 was extremely simple: requests consisted of a single line and started with the only possible method GET followed by the path to the resource. The full URL wasn't included as the protocol, server, and port weren't necessary once connected to the server.
Unlike subsequent evolutions, there were no HTTP headers. This meant that only HTML files could be transmitted. There were no status or error codes. If there was a problem, a specific HTML file was generated and included a description of the problem for human consumption.

- HTTP/1.0 – Building extensibility:-mHTTP/0.9 was very limited, but browsers and servers quickly made it more versatile:
    1. Versioning information was sent within each request (HTTP/1.0 was appended to the GET line).
    2. A status code line was also sent at the beginning of a response. This allowed the browser itself to recognize the success or failure of a request and adapt its behavior accordingly. For example, updating or using its local cache in a specific way.
    3. The concept of HTTP headers was introduced for both requests and responses. Metadata could be transmitted and the protocol became extremely flexible and extensible.
    4. Documents other than plain HTML files could be transmitted thanks to the Content-Type header.

Between 1991-1995, these were introduced with a try-and-see approach. A server and a browser would add a feature and see if it got traction. Interoperability problems were common. In an effort to solve these issues, an informational document that described the common practices was published in November 1996. This was known as RFC 1945 and defined HTTP/1.0.

- HTTP/1.1 – The standardized protocol:- In the meantime, proper standardization was in progress. This happened in parallel to the diverse implementations of HTTP/1.0. The first standardized version of HTTP, HTTP/1.1, was published in early 1997, only a few months after HTTP/1.0.HTTP/1.1 clarified ambiguities and introduced numerous improvements:
    1. A connection could be reused, which saved time. It no longer needed to be opened multiple times to display the resources embedded in the single original document.
    2. Pipelining was added. This allowed a second request to be sent before the answer to the first one was fully transmitted. This lowered the latency of the communication.
    3. Chunked responses were also supported.
    4. Additional cache control mechanisms were introduced.
    5. Content negotiation, including language, encoding, and type, was introduced. A client and a server could now agree on which content to exchange.
    6. Thanks to the Host header, the ability to host different domains from the same IP address allowed server collocation.

- HTTP/2 – A protocol for greater performance:- Over the years, web pages became more complex. Some of them were even applications in their own right. More visual media was displayed and the volume and size of scripts adding interactivity also increased. Much more data was transmitted over significantly more HTTP requests and this created more complexity and overhead for HTTP/1.1 connections. To account for this, Google implemented an experimental protocol SPDY in the early 2010s. This alternative way of exchanging data between client and server amassed interest from developers working on both browsers and servers. SPDY defined an increase in responsiveness and solved the problem of duplicate data transmission, serving as the foundation for the HTTP/2 protocol.The HTTP/2 protocol differs from HTTP/1.1 in a few ways:
    1. It's a binary protocol rather than a text protocol. It can't be read and created manually. Despite this hurdle, it allows for the implementation of improved optimization techniques.
    2. It's a multiplexed protocol. Parallel requests can be made over the same connection, removing the constraints of the HTTP/1.x protocol.
    3. It compresses headers. As these are often similar among a set of requests, this removes the duplication and overhead of data transmitted.

Officially standardized in May 2015, HTTP/2 use peaked in January 2022 at 46.9% of all websites (see these stats). High-traffic websites showed the most rapid adoption in an effort to save on data transfer overhead and subsequent budgets.
This rapid adoption was likely because HTTP/2 didn't require changes to websites and applications. To use it, only an up-to-date server that communicated with a recent browser was necessary. Only a limited set of groups was needed to trigger adoption, and as legacy browser and server versions were renewed, usage was naturally increased, without significant work for web developers.

- Post-HTTP/2 evolution:- HTTP's extensibility is still being used to add new features. Notably, we can cite new extensions of the HTTP protocol that appeared in 2016:
    1. Support for Alt-Svc allowed the dissociation of the identification and the location of a given resource. This meant a smarter CDN caching mechanism.
    2. The introduction of client hints allowed the browser or client to proactively communicate information about its requirements and hardware constraints to the server.
    3. The introduction of security-related prefixes in the Cookie header helped guarantee that secure cookies couldn't be altered.

- HTTP/3 - HTTP over QUIC:- The next major version of HTTP, HTTP/3 has the same semantics as earlier versions of HTTP but uses QUIC instead of TCP for the transport layer portion. By October 2022, 26% of all websites were using HTTP/3.
QUIC is designed to provide much lower latency for HTTP connections. Like HTTP/2, it is a multiplexed protocol, but HTTP/2 runs over a single TCP connection, so packet loss detection and retransmission handled at the TCP layer can block all streams. QUIC runs multiple streams over UDP and implements packet loss detection and retransmission independently for each stream, so that if an error occurs, only the stream with data in that packet is blocked.

Defined in RFC 9114, HTTP/3 is supported by most major browsers including Chromium (and its variants such as Chrome and Edge) and Firefox.

`APIs based on HTTP`:- The most commonly used API based on HTTP is the Fetch API, which can be used to make HTTP requests from JavaScript. The Fetch API replaces the XMLHttpRequest API.
Another API, server-sent events, is a one-way service that allows a server to send events to the client, using HTTP as a transport mechanism. Using the EventSource interface, the client opens a connection and establishes event handlers. The client browser automatically converts the messages that arrive on the HTTP stream into appropriate Event objects. Then it delivers them to the event handlers that have been registered for the events' type if known, or to the onmessage event handler if no type-specific event handler was established.

HTTP is an extensible protocol that is easy to use. The client-server structure, combined with the ability to add headers, allows HTTP to advance along with the extended capabilities of the Web.

Though HTTP/2 adds some complexity by embedding HTTP messages in frames to improve performance, the basic structure of messages has stayed the same since HTTP/1.0. Session flow remains basic, allowing it to be investigated and debugged with a HTTP network monitor.


`HTTP authentication`:- HTTP provides a general framework for access control and authentication. This page is an introduction to the HTTP framework for authentication, and shows how to restrict access to your server using the HTTP "Basic" scheme.

The general HTTP authentication framework - RFC 7235 defines the HTTP authentication framework, which can be used by a server to challenge a client request, and by a client to provide authentication information.
- The challenge and response flow works like this:
    1. The server responds to a client with a 401 (Unauthorized) response status and provides information on how to authorize with a WWW-Authenticate response header containing at least one challenge.
    2. A client that wants to authenticate itself with the server can then do so by including an Authorization request header with the credentials.
    3. Usually a client will present a password prompt to the user and will then issue the request including the correct Authorization header.

NOTE:- HTTP vs App - Application Layer Protocol (HTTP): The set of rules for the conversation (e.g., "I will say GET, and you will give me a file").Your Software Application: The logic that decides what to say (e.g., "I need the user's profile picture").


**WebSocket**:- is an application protocol that provides full-duplex communications between two peers over the TCP protocol.
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
