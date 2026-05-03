## OPEN SYSTEMS INTERCONNECTION (OSI) REFERENCE MODEL

The Open Systems Interconnection model (OSI) is a conceptual model that characterizes and standardizes the internal functions of a communication system by partitioning it into abstraction layers.The model groups communication functions into seven logical layers. A layer serves the layer above it and is served by the layer below it.


## Application Layer

*Application Layer*:- The application layer enables the user, whether human or software, to access the network. It provides user interfaces and support for services such as electronic mail, remote file access and transfer, shared database management, and other types of distributed information services.

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


## Transport Layer

*Transport Layer*:- The transport layer is responsible for process-to-process delivery of the entire message. A process is an application program running on a host. Whereas the network layer oversees source-to-destination delivery of individual packets, it does not recognize any relationship between those packets. It treats each one independently, as though each piece belonged to a separate message, whether or not it does. The transport layer, on the other hand, ensures that the whole message arrives intact and in order, overseeing both error control and flow control at the source-to- destination level.
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

`Transport-layer Multiplexing and Demultiplexing`:- extending the host-to-host delivery service provided by the network layer to a process-to-process delivery service for applications running on the hosts.
At the destination host, the transport layer receives segments from the network layer just below. The transport layer has the responsibility of delivering the data in these segments to the appropriate application process running in the host.

A process (as part of a network application) can have one or more sockets, doors through which data passes from the network to the process and through which data passes from the process to the network.The transport layer in the receiving host does not actually deliver data directly to a process, but instead to an intermediary socket.Because at any given time there can be more than one socket in the receiving host, each socket has a unique identifier. The format of the identifier depends on whether the socket is a UDP or a TCP socket.

Each transport-layer segment has a set of fields in the segment for this purpose. At the receiving end, the transport layer examines these fields to identify the receiving socket and then directs the segment to that socket. This job of delivering the data in a transport-layer segment to the correct socket is called *demultiplexing*. The job of gathering data chunks at the source host from different sockets,encapsulating each data chunk with header information (that will later be used in demultiplexing) to create segments, and passing the segments to the network layer is called *multiplexing*. Note that the transport layer in the middle host.

Transport-layer multiplexing requires that sockets have unique identifiers and that each segment have special fields that indicate the socket to which the segment is to be delivered.
These special fields are the source port number field and the destination port number field. (The UDP and TCP segments have other fields as well) Each port number is a 16-bit number, ranging from 0 to 65535. The port numbers ranging from 0 to 1023 are called well-known port numbers and are restricted, which means that they are reserved for use by well-known application protocols such as HTTP (which uses port number 80) and FTP (which uses port number 21).

It should now be clear how the transport layer could implement the demultiplexing service: Each socket in the host could be assigned a port number, and when a segment arrives at the host, the transport layer examines the destination port number in the segment and directs the segment to the corresponding socket. The segment’s data then passes through the socket into the attached process. As we’ll see, this is basically how UDP does it. However, we’ll also see that multiplexing/demultiplexing in TCP is yet more subtle.


## The Network Layer

Unlike the transport and application layers, there is a piece of the network layer in each and every host and router in the network.
Network layer can be decomposed into two interacting parts, `the data plane` and the `control plane`.

The primary data-plane role of each router is to forward datagrams from its input links to its output links; the primary role of the network control plane is to coordinate these local, per-router forwarding actions so that datagrams are ultimately transferred end-to-end, along paths of routers between source and destination hosts.

Data plane functions of the network layer—the per-router functions in the network layer that determine how a datagram (that is, a network-layer packet) arriving on one of a router’s input links is forwarded to one of that router’s output links.

`Forwarding and Routing: The Data and Control Planes`:- The primary role of the network layer is deceptively simple—to move packets from a sending host to a receiving host. To do so, two important network-layer functions can be identified:

1. *Forwarding*. When a packet arrives at a router’s input link, the router must move the packet to the appropriate output link. For example, a packet arriving from Host H1 to Router R1 must be forwarded to the next router on a path to H2. As we will see, forwarding is but one function implemented in the data plane.A packet might also be blocked from exiting a router (e.g., if the packet originated at a known malicious sending host, or if the packet were destined to a forbidden destination host), or might be duplicated and sent over multiple outgoing links.
2. *Routing*. The network layer must determine the route or path taken by packets as they flow from a sender to a receiver. The algorithms that calculate these paths are referred to as routing algorithms. A routing algorithm would determine, for example, the path along which packets flowfrom H1 to H2.

The terms forwarding and routing are often used interchangeably by authors discussing the network layer.Forwarding refers to the router-local action of transferring a packet from an input link interface to the appropriate output link interface.Forwarding takes place at very short timescales (typically a few nanoseconds), and thus is typically implemented in hardware. Routing refers to the network-wide process that determines the end-to-end paths that packets take from source to destination. Routing takes place on much longer timescales (typically seconds), and as we will see is often implemented in software.

A key element in every network router is its forwarding table. A router forwards a packet by examining the value of one or more fields in the arriving packet’s header, and then using these header values to index into its forwarding table. The value stored in the forwarding table entry for those values indicates the outgoing link interface at that router to which that packet is to be forwarded.For example a packet with header field value of 0110 arrives to a router. The router indexes into its forwarding table and determines that the output link interface for this packet is interface 2. The router then internally forwards the packet to interface 2.

### The Network Layer: Data Plane

Forwarding is the key function performed by the data-plane functionality of the network layer.

### The Network Layer: Control Plane
