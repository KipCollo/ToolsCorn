# Application protocols

The application layer enables the user,whether human or software,to access the network.It provides user interfaces and support for services such as electronic mail,remote file access and transfer,shared database management, and other types of distributed information systems.
The application layer in TCP/IP is equivalent to the combined session,presentation, and application layers in the OSI model. Many protocols are defined at this layer some include the following:-

`Simple Mail Transfer Protocol (SMTP)` - Simple Mail Transfer Protocol (SMTP) is responsible for making sure that e-mail is delivered. SMTP only handles the delivery of mail to servers and between servers. It does not handle the delivery to the final e-mail client application.
Mail transfer is done through message transfer agents (MTA).SMTP simply defines how commands and responses must be sent back and forth.

`File Transfer Protocol (FTP)` - Mechanism provided by TCP/IP for copying a file from one host to another.
Establishes two connections between the hosts. One connection is used for data transfer, the other for control information (commands and responses).
FTP uses the services of TCP. It needs two TCP connections.
1. The well-known port 21 is used for the control connection.
2. The well-known port 20 for the data connection.

`Domain Name System (DNS)` - Protocol used to map a name to an IP address or an address to a user friendly name. DNS client program sends a request to a DNS server to map the e-mail address to the corresponding IP address. People prefer to use names instead of numeric addresses.

Some network application that utilizes application layer - Social Networking,Web,Text Messaging,E-mail,Multi-User Network Games,Streaming Stored Video(Youtube,Netflix),P2P File sharing,Voice Over IP(Skype),real-Time Video Conference(Zoom),Internet search,Remote Login.

Internet transport protocols services on application layer:-

- TCP service:-
   1. Reliable Transport between sending and receiving process.
   2. Flow control: sender won't overwhelm receiver.
   3. Congestion Control: throttle sender when network overloaded.
   4. Connection-Oriented: setup required between client and server processes.
- UDP service:-
   1. Unrealiable Data Transfer between sending and receiving process.
   2. Does not provide reliability,flow control,congestion,timing,throughput guarantee,security or connection setup.

**HTTP** - HTTP: hypertext transfer protocol. Web’s application-layer protocol for client/server model: Client browser requests, receives, (using HTTP protocol) and “displays” Web objects and Web server sends (using HTTP protocol) objects in response to requests from clients.

Client initiates TCP connection (creates socket) to server, port 80 and server accepts TCP connection from client. HTTP messages (application-layer protocol messages) exchanged between browser (HTTP client) and Web server (HTTP server) and TCP connection closed.
HTTP is “stateless” where server maintains no information about past client requests

## Network Application Architectures

`client-server architecture` - There is an always-on host, called the server, which services requests from many other hosts, called clients.A classic example is the Web application for which an always-on Web server services requests from browsers running on client hosts. When a Web server receives a request for an object from a client host, it responds by sending the requested object to the client host.
Another characteristic of the client-server architecture is that the server has a fixed, well-known address, called an IP address.Because the server has a fixed, well-known address, and because the server is always on, a client can always contact the server by sending a packet to the server’s IP address.
Some of the better-known applications with a client-server architecture include the Web, FTP, Telnet, and e-mail.

`P2P architecture`, there is minimal (or no) reliance on dedicated servers in data centers. Instead the application exploits direct communication between pairs of intermittently connected hosts, called peers. The peers are not owned by the service provider, but are instead desktops and laptops controlled by users, with most of the
