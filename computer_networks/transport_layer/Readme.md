# Transport Layer

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

