# Computer Networking

This branch of computer science aims studies the construction and behavior of computer networks.

## The Internet

Internet is interconnection of different networks. It evolved from the ARPANET,developed in 1969 by the Advanced Research Projects Agency (ARPA) of the U.S. Department of Defense. It was the first operational packet-switching network. The network was so successful that ARPA applied the same packet-switching technology to tactical radio communication (packet radio) and to satellite communication (SATNET). The need for interworking between these led to Vint Cerf and Bob Kahn of ARPA developing methods and protocols for such internetworking, which led eventually to the development of TCP/IP.
The Internet is a computer network that interconnects billions of computing devices throughout the world.

Computing devices were primarily traditional desktop PCs, Linux workstations, and so-called servers that store and transmit information such as Web pages and e-mail messages. Increasingly, however, nontraditional Internet “things” such as laptops, smartphones, tablets,TVs, gaming consoles, thermostats, home security systems, home appliances, watches, eye glasses,cars, traffic control systems and more are being connected to the Internet.
In Internet jargon, all of these devices are called `hosts` or `end systems`.

```
Mobile Network---------National or Global ISP
                                |
                                |
                        Local or Regional ISP-------Home Network
                        |
                        |
                Enterprise Network
```

End systems are connected together by a network of `communication links` and `packet switches`.
There are many types of *communication links*, which are made up of different types of physical media, including coaxial cable, copper wire, optical fiber, and radio spectrum.Different links can transmit data at different rates, with the transmission rate of a link measured in bits/second. When one end system has data to send to another end system, the sending end system segments the data and adds header bytes to each segment. The resulting packages of information,known as packets in the jargon of computer networks, are then sent through the network to the destination end system, where they are reassembled into the original data.
A *packet switch* takes a packet arriving on one of its incoming communication links and forwards that packet on one of its outgoing communication links. Packet switches come in many shapes and flavors, but the two most prominent types in today’s Internet are routers and link-layer switches. Both types of switches forward packets toward their ultimate destinations. Link-layer switches are typically used in access networks, while routers are typically used in the network core. The sequence of communication links and packet switches traversed by a packet from the sending end system to the receiving end system is known as a route or path through the network.

End systems access the Internet through Internet Service Providers (ISPs), including residential ISPs such as local cable or telephone companies; corporate ISPs; university ISPs; ISPs that provide WiFi access in airports, hotels, coffee shops, and other public places; and cellular data ISPs, providing mobile access to our smartphones and other devices. Each ISP is in itself a network of packet switches and communication links. ISPs provide a variety of types of network access to the end systems,including residential broadband access such as cable modem or DSL, high-speed local area network access, and mobile wireless access. ISPs also provide ­Internet access to content providers,connecting Web sites and video servers directly to the Internet. The Internet is all about connecting end systems to each other, so the ISPs that provide access to end systems must also be interconnected.
These lower-tier ISPs are interconnected through national and international upper-tier ISPs such as Level 3 Communications, AT&T, Sprint, and NTT. An upper-tier ISP consists of high-speed routers interconnected with high-speed fiber-optic links. Each ISP network, whether upper-tier or lower-tier, is managed independently, runs the IP protocol, and conforms to certain naming and address conventions.

End systems, packet switches, and other pieces of the Internet run protocols that control the sending and receiving of information within the Internet. The `Transmission Control Protocol (TCP)` and the `Internet Protocol (IP)` are two of the most important protocols in the Internet. The IP protocol specifies the format of the packets that are sent and received among routers and end systems. The Internet’s principal protocols are collectively known as `TCP/IP`.


*A Services Description*:- wWe can also describe the Internet from an entirely different angle—namely, as an infrastructure that provides services to distributed applications.
Because applications run on end systems, you are going to need to write programs that run on the end systems. You might, for example, write your programs in Java, C, or Python. Now, because you are developing a distributed Internet application, the programs running on the different end systems will need to send data to each other.
End systems attached to the Internet provide a `socket interface` that specifies how a program running on one end system asks the Internet infrastructure to deliver data to a specific destination program running on another end system. This Internet socket interface is a set of rules that the sending program must follow so that the Internet can deliver the data to the destination program.

**Protocol**:- A `protocol` defines the format and the order of messages exchanged between two or more communicating entities, as well as the actions taken on the transmission and/or receipt of a message or other event.
Different protocols are used to accomplish different communication tasks.


## Network Edge

The computers and other devices connected to the Internet are often referred to as end systems. They are referred to as end systems because they sit at the edge of the Internet.
The Internet’s end systems include desktop computers (e.g. desktop PCs, Macs, and Linux boxes), servers (e.g., Web and e-mail servers),and mobile devices (e.g., laptops, smartphones, and tablets). Furthermore, an increasing number of non-traditional “things” are being attached to the Internet as end ­systems.

End systems are also referred to as `hosts` because they host (that is, run) application programs such as a Web browser program, a Web server program, an e-mail client program, or an e-mail server program.
Hosts are sometimes further divided into two categories: clients and servers. Informally, clients tend to be desktop and mobile PCs, smartphones, and so on, whereas servers tend to be more powerful machines that store and distribute Web pages, stream video, relay e-mail, and so on.

*Access Networks*:- The network that physically connects an end system to the first router (also known as the “edge router”) on a path from the end system to any other distant end system.

Home Access: DSL, Cable, FTTH, Dial-Up, and Satellite
Access in the Enterprise (and the Home): Ethernet and WiFi
Wide-Area Wireless Access: 3G and LTE


## Protocol Layers and Their Service Models

*Layered Architecture*:- A layered architecture allows us to discuss a well-defined, specific part of a large and complex system.This simplification itself is of considerable value by providing modularity, making it much easier to change the implementation of the service provided by the layer. As long as the layer provides the same service to the layer above it, and uses the same services from the layer below it, the remainder of the system remains unchanged when a layer’s implementation is changed.


*Protocol Layering*:- To provide structure to the design of network protocols, network designers organize protocols—and the network hardware and software that implement the protocols—in layers. Each protocol belongs to one of the layers.
Each layer provides its service by performing certain actions within that layer and by using the services of the layer directly below it. For example, the services provided by layer n may include reliable delivery of messages from one edge of the network to the other. This might be implemented by using an unreliable edge-to-edge message delivery service of layer n−1, and adding layer n functionality to detect and retransmit lost messages.

A protocol layer can be implemented in software, in hardware, or in a combination of the two.Application-layer protocols—such as HTTP and SMTP—are almost always implemented in software in the end systems; so are transport-layer protocols. Because the physical layer and data link layers are responsible for handling communication over a specific link, they are typically implemented in a network interface card (for example, Ethernet or WiFi interface cards) associated with a given link. The network layer is often a mixed implementation of hardware and software.

When taken together, the protocols of the various layers are called the `protocol stack`. The **Internet protocol stack(TCP/IP model)** consists of five layers: the physical, link, network, transport, and application layers.

`Application Layer`:- The application layer is where network applications and their application-layer protocols reside.An application-layer protocol is distributed over multiple end systems, with the application in one end system using the protocol to exchange packets of information with the application in another end system.
We’ll refer to this packet of information at the application layer as a *message*.
The Internet’s application layer includes many protocols, such as the HTTP protocol (which provides for Web document request and transfer), SMTP (which provides for the transfer of e-mail messages), and FTP (which provides for the transfer of files between two end systems),the DNS.

`Transport Layer`:- The Internet’s transport layer transports application-layer messages between application endpoints.
we’ll refer to a transport-layer packet as a *segment*.
In the Internet there are two transport protocols, TCP and UDP, either of which can transport application-layer messages. TCP provides a ­connection-oriented service to its applications. This service includes guaranteed delivery of application-layer messages to the destination and flow control (that is, sender/receiver speed matching). TCP also breaks long messages into shorter ­segments and provides a congestion-control mechanism, so that a source throttles its transmission rate when the network is congested. The UDP protocol provides a connectionless service to its applications. This is a no-frills service that provides no reliability, no flow control, and no congestion control.

`Network Layer`:- The Internet’s network layer is responsible for moving network-layer packets known as *datagrams* from one host to another.
The Internet’s network layer includes the celebrated IP protocol, which defines the fields in the datagram as well as how the end systems and routers act on these fields. There is only one IP protocol, and all Internet components that have a network layer must run the IP protocol. The Internet’s network layer also contains routing protocols that determine the routes that datagrams take between sources and destinations. The Internet has many routing protocols.
Within a network, the network administrator can run any routing protocol desired. Although the network layer contains both the IP protocol and numerous routing protocols, it is often simply referred to as the IP layer, reflecting the fact that IP is the glue that binds the Internet together.

`Link Layer`:- The Internet’s network layer routes a datagram through a series of routers between the source and destination. To move a packet from one node (host or router) to the next node in the route, the network layer relies on the services of the link layer. In particular, at each node, the network layer passes the datagram down to the link layer, which delivers the datagram to the next node along the route. At this next node, the link layer passes the datagram up to the network layer.
The services provided by the link layer depend on the specific link-layer protocol that is employed over the link.
Examples of link-layerprotocols include Ethernet, WiFi, and the cable access network’s DOCSIS protocol. As datagrams typically need to traverse several links to travel from source to destination, a datagram may be handled by different link-layer protocols at different links along its route. For example, a datagram may be handled by Ethernet on one link and by PPP on the next link. The network layer will receive a different service from each of the different link-layer protocols.
We’ll refer to the link-layer packets as *frames*.

`Physical Layer`:- While the job of the link layer is to move entire frames from one network element to an adjacent network element, the job of the physical layer is to move the individual bits within the frame from one node to the next. The protocols in this layer are again link dependent and further depend on the actual transmission medium of the link (for example, twisted-pair copper wire, single-mode fiber optics). For example,Ethernet has many physical-layer protocols: one for twisted-pair copper wire, another for coaxial cable, another for fiber, and so on. In each case, a bit is moved across the link in a different way.

**The OSI Model**:- International Organization for Standardization (ISO) proposed that computer networks be organized around seven layers, called the Open Systems Interconnection (OSI) model [ISO 2016]. The OSI model took shape when the protocols that were to become the Internet protocols were in their infancy, and were but one of many different protocol suites under development; in fact, the inventors of the original OSI model probably did not have the Internet in mind when creating it. Nevertheless, beginning in the late 1970s, many training and university courses picked up on the ISO mandate and organized courses around the seven-layer model. Because of its early impact on networking education, the seven-layer model continues to linger on in some networking textbooks and training courses.

The seven layers of the OSI reference model are: application layer,presentation layer, session layer, transport layer, network layer, data link layer, and physical layer.
The role of the presentation layer is to provide services that allow communicating applications to interpret the meaning of data exchanged. These services include data compression and data encryption (which are self-explanatory) as well as data description (which frees the applications from having to worry about the internal format in which data are represented/stored—formats that may differ from one computer to another). The session layer provides for delimiting and synchronization of data exchange, including the means to build a checkpointing and recovery scheme.

The Open Systems Interconnection model (OSI) is a conceptual model that characterizes and standardizes the internal functions of a communication system by partitioning it into abstraction layers.The model groups communication functions into seven logical layers. A layer serves the layer above it and is served by the layer below it.


## Virtual Network

A virtual network is a software-based network that abstracts hardware, allowing devices and servers to communicate as if they were physically connected, regardless of their actual location. It relies on virtualization software to create logical overlays, reducing the need for physical routers and switches.

Key Types of Virtual Networks:-
1. VLANs (Virtual Local Area Networks): Logical partitions of physical networks that isolate traffic and improve security on the same physical switch.
2. VPNs (Virtual Private Networks): Secure, encrypted tunnels over the internet that allow remote users or branch offices to safely access a private corporate network.
3. Cloud Virtual Networks: Provided by cloud platforms like Microsoft Azure Virtual Network,VPC or Oracle Virtual Cloud Network, these allow organizations to build isolated, scalable cloud infrastructures
