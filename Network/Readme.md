# Network

## The Internet

Internet is interconnection of different networks. It evolved from the ARPANET,developed in 1969 by the Advanced Research Projects Agency (ARPA) of the
U.S. Department of Defense. It was the first operational packet-switching network. The network was so successful that ARPA applied the same packet-switching technology to tactical radio communication (packet radio) and to satellite communication (SATNET). The need for interworking between these led to Vint Cerf and Bob Kahn of ARPA developing methods and protocols for such internetworking, which led eventually to the development of TCP/IP.

## OPEN SYSTEMS INTERCONNECTION (OSI) REFERENCE MODEL

The Open Systems Interconnection model (OSI) is a conceptual model that characterizes and standardizes the internal functions of a communication system by partitioning it into abstraction layers.The model groups communication functions into seven logical layers. A layer serves the layer above it and is served by the layer below it.

**Application Layer**:- The application layer enables the user, whether human or software, to access the network. It provides user interfaces and support for services such as electronic mail, remote file access and transfer, shared database management, and other types of distributed information services.

Specific services provided by the application layer include the following:
- Network virtual terminal: A network virtual terminal is a software version of a physical terminal, and it allows a user to log on to a remote host. To do so, the application creates a software emulation of a terminal at the remote host. The user's computer talks to the software terminal which, in turn, talks to the host, and vice versa. The remote host believes it is communicating with one of its own terminals and allows the user to log on.
- File transfer, access and management: This application allows a user to access files in a remote host (to make changes or read data), to retrieve files from a remote computer for use in the local computer, and to manage or control files in a remote computer locally.
- Mail services: This application provides the basis for e-mail forwarding and storage.Directory services. This application provides distributed database sources and access for global information about various objects and services.

Creating a Network Application
Write programs that:
- run on (different) end systems
- communicate over network  e.g., web server software communicates with browser software

No need to write software for network-core devices
- network-core devices do not run user applications
- applications on end systems allows for rapid app development, propagation

**Transport Layer**:- The transport layer is responsible for process-to-process delivery of the entire message. A process is an application program running on a host. Whereas the network layer oversees source-to-destination delivery of individual packets, it does not recognize any relationship between those packets. It treats each one independently, as though each piece belonged to a separate message, whether or not it does. The transport layer, on the other hand, ensures that the whole message arrives intact and in order, overseeing both error control and flow control at the source-to- destination level.
It is easy to get tripped up by the name Transport, In networking, "Transport" doesn’t mean the physical movement of data across cables; it means the management of the conversation.

Responsibilities of the transport layer include the following:-

1. Segmentation(Breaking it down) and reassembly: A message is divided into transmittable segments, with each segment containing a sequence number. These numbers enable the transport layer to reassemble the message correctly upon arriving at the destination and to identify and replace packets that were lost in transmission.Data is often too big to send in one go. The Transport Layer chops a giant file into smaller segments.TCP gives every segment a number (1, 2, 3...) so they can be put back together.
2. Multiplexing(Port Delivery) Service-point addressing: Computers often run several programs at the same time. For this reason, source-to-destination delivery means delivery not only from one computer to the next but also from a specific process (running program) on one computer to a specific process (running program) on the other. The transport layer header must therefore includea type of address called a service-point address (or port address). The network layer gets each packet to the correct computer; the transport layer gets the entire message to the correct process on that computer.Your computer has one internet connection but many apps open.It uses Ports to make sure the Netflix data goes to the Netflix app and the Postgres data goes to the Database.
3. Error control: Like the data link layer, the transport layer is responsible for error control.However, error control at this layer is performed process-to-process rather than across a single link: The sending transport layer makes sure that the entire message arrives at the receiving transport layer without error (damage, loss, or duplication). Error correction is usually achieved through retransmission.This is unique to TCP.If Segment #3 gets lost in a storm, the Transport Layer notices it's missing and asks the sender to resend it.The physical wires (Lower layers) don't care if data is lost; the Transport Layer is the one that fixes it.
4. Flow control: Like the data link layer, the transport layer is responsible for flow control.However, flow control at this layer is performed end to end rather than across a single link.If a fast server is sending data to a slow phone, the phone’s Transport Layer tells the server, "Slow down, you're overwhelming my memory!"


`Transport services and protocols`:- Provide logical communication between application processes running on different hosts. Transport protocols actions in end systems: Sender breaks application messages into segments, passes to network layer and receiver reassembles segments into messages, passes to application layer. Two transport protocols available to Internet applications are TCP, and UDP

- TCP: Transmission Control Protocol main function and services in transport layer
    - Reliable, in-order delivery
    - Congestion control
    - Flow control
    - Connection setup
- UDP: User Datagram Protocol
    - Unreliable, unordered delivery
    - No-frills extension of “best-effort” IP services not available:
    - Delay guarantees
    - Bandwidth guarantees

*UDP transport Layer*:- No connection establishment (which can add RTT delay), with no connection state at sender and receiver uses small header size. Also no congestion control, UDP can blast away as fast as desired and can function in the face of congestion.
UDP uses streaming multimedia apps (loss tolerant, rate sensitive), DNS, SNMP, HTTP/3 protocols. If reliable transfer needed over UDP (e.g., HTTP/3) reliability is needed at application layer as well as congestion control at application layer

UDP: Transport Layer Actions - 
- UDP sender actions is to passed an application-layer message, determines UDP segment header fields values and passes segment to IP.
- UDP receiver actions checks UDP checksum header value, extracts application-layer message, demultiplexes message up to application via socket.
