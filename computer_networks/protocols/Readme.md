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


-------------

## Network Application Architectures

`client-server architecture` - There is an always-on host, called the server, which services requests from many other hosts, called clients.A classic example is the Web application for which an always-on Web server services requests from browsers running on client hosts. When a Web server receives a request for an object from a client host, it responds by sending the requested object to the client host.
Another characteristic of the client-server architecture is that the server has a fixed, well-known address, called an IP address.Because the server has a fixed, well-known address, and because the server is always on, a client can always contact the server by sending a packet to the server’s IP address.
Some of the better-known applications with a client-server architecture include the Web, FTP, Telnet, and e-mail.

`P2P architecture`, there is minimal (or no) reliance on dedicated servers in data centers. Instead the application exploits direct communication between pairs of intermittently connected hosts, called peers. The peers are not owned by the service provider, but are instead desktops and laptops controlled by users, with most of the

Network Layer Protocols- 


- **Internetworking Protocol (IP)**: (IP) is the transmission mechanism used by the TCP/IP protocols.
It is an unreliable and connectionless protocol-a best-effort delivery service. IP transports data in packets called `datagrams`, each of which is transported separately. Datagrams can travel along different routes and can arrive out of sequence or be duplicated. Does not keep track of the routes and has no facility for reordering datagrams once they arrive at their destination.IP provides barebones transmission functions that free the user to add only those facilities necessary for a given application and thereby allows for maximum efficiency.
There are two versions of IP in use today:- IP protocol version 4 and IP version 6.

The key fields in the IPv4 datagram are the following:

- `Version number`.These 4 bits specify the IP protocol version of the datagram. By looking at the version number, the router can determine how to interpret the remainder of the IP datagram.Different versions of IP use different datagram formats.
- `Header length`.Because an IPv4 datagram can contain a variable number of options (which are included in the IPv4 datagram header), these 4 bits are needed to determine where in the IP datagram the payload (e.g., the transport-layer segment being encapsulated in this datagram) actually begins. Most IP datagrams do not contain options, so the typical IP datagram has a 20-byte header.


*Network Address Translation (NAT)*:- 


- **Address Resolution Protocol (ARP)**:- Used to associate a logical address with a physical address. Used to find the physical address of the node when its Internet address is known. Handles the conversion of the address by sending out a discovery packet. To find out the MAC address of a particular IP address, Maintains a list of IP and MAC addresses so a discovery packet is not needed every time communication takes place. ARP is used to find the physical address of the node when its Internet address is known.

- **Internet Control Message Protocol (ICMP)**:- Mechanism used by hosts and gateways to send notification of datagram problems back to the sender by sending query and error reporting messages.The query messages, which occur in pairs, help a host or a network manager get specific information from a router or another host. The error-reporting messages report problems that a router or a host (destination) may encounter when it processes an IP packet.

- **Internet Group Message Protocol (IGMP)**:- Used to facilitate the simultaneous transmission of a message to a group of recipients. Gives the multicast routers information about the membership status of hosts (routers) connected to the network as group management protocol. It helps a multicast router create and update a list of loyal members related to each router interface.


---------------



------------


