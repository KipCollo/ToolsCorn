# Wireless and Mobile Networks

*Wireless hosts*. As in the case of wired networks, hosts are the end-system devices that run applications. A wireless host might be a laptop, tablet, smartphone, or desktop computer. The hosts themselves may or may not be mobile.
*Wireless links*. A host connects to a base station or to another wireless host through a wireless communication link. Different wireless link technologies have different transmission rates and can transmit over different distances.
*Base station*. The base station is a key part of the wireless network infrastructure. Unlike the wireless host and wireless link, a base station has no obvious counterpart in a wired network. A base station is responsible for sending and receiving data (e.g., packets) to and from a wireless host that is associated with that base station. A base station will often be responsible for coordinating the transmission of multiple wireless hosts with which it is associated. When we say a wireless host is“associated” with a base station, we mean that (1) the host is within the wireless communication distance of the base station, and (2) the host uses that base station to relay data between it (the host) and the larger network. `Cell towers` in cellular networks and `access points` in 802.11 wireless LANs are examples of base stations.

Base station is connected to the larger network (e.g., the ­Internet, corporate or home network, or telephone network), thus functioning as a link-layer relay between the wireless host and the rest of the world with which the host communicates.
Hosts associated with a base station are often referred to as operating in `­infrastructure mode`,since all traditional network services (e.g., address assignment and routing) are provided by the network to which a host is connected via the base station. In `ad hoc networks`, wireless hosts have no such infrastructure with which to connect. In the absence of such infrastructure, the hosts themselves must provide for services such as routing, address assignment, DNS-like name translation, and more.

When a mobile host moves beyond the range of one base station and into the range of another, it will change its point of attachment into the larger network (i.e., change the base station with which it is associated)—a process referred to as `handoff`.

*Network infrastructure*.This is the larger network with which a wireless host may wish to communicate.


At the highest level we can classify wireless networks according to two criteria:
1. whether a packet in the wireless network crosses exactly one wireless hop or multiple wireless hops.
2. whether there is infrastructure such as a base station in the network:

- `Single-hop, infrastructure-based`.These networks have a base station that is connected to a larger wired network (e.g., the Internet). Furthermore, all communication is between this base station and a wireless host over a single wireless hop. The 802.11 networks you use in the classroom, café, or library; and the 4G LTE data networks fall in this category. The vast majority of our daily interactions are with single-hop, infrastructure-based ­wireless networks.
- `Single-hop, infrastructure-less`. In these networks, there is no base station that is connected to a wireless network. However, one of the nodes in this single-hop network may coordinate the transmissions of the other nodes. ­Bluetooth networks (that connect small wireless devices such as keyboards, speakers, and headsets) and 802.11 networks in ad hoc mode are single-hop, infrastructure-less networks.
- `Multi-hop, infrastructure-based`. In these networks, a base station is present that is wired to the larger network. However, some wireless nodes may have to relay their communication through other wireless nodes in order to communicate via the base station. Some wireless sensor networks and so-called wireless mesh networks fall in this category.
- `Multi-hop, infrastructure-less`. There is no base station in these networks, and nodes may have to relay messages among several other nodes in order to reach a destination. Nodes may also be mobile, with connectivity changing among nodes—a class of networks known as mobile ad hoc networks (MANETs). If the mobile nodes are vehicles, the network is a vehicular ad hoc network (VANET).


**Wireless Links and Network Characteristics**:- If we replace the wired Ethernet with a wireless 802.11 network, a wireless network interface would replace the host’s wired Ethernet interface, and an access point would replace the Ethernet switch, but virtually no changes would be needed at the network layer or above.

- Decreasing signal strength. Electromagnetic radiation attenuates as it passes through matter (e.g., a radio signal passing through a wall). Even in free space, the signal will disperse, resulting in decreased signal strength (sometimes referred to as path loss) as the distance between sender and receiver increases.
- Interference from other sources. Radio sources transmitting in the same frequency band will interfere with each other. For example, 2.4 GHz wireless phones and 802.11b wireless LANs transmit in the same frequency band. Thus, the 802.11b wireless LAN user talking on a 2.4 GHz wireless phone can expect that neither the network nor the phone will perform particularly well. In addition to interference from transmitting sources, electromagnetic noise within the environment (e.g., a nearby motor, a microwave) can result in interference.
- Multipath propagation. Multipath propagation occurs when portions of the electromagnetic wave reflect off objects and the ground, taking paths of different lengths between a sender and receiver.This results in the blurring of the received signal at the receiver. Moving objects between the sender and receiver can cause multipath propagation to change over time.

The discussion above suggests that bit errors will be more common in wireless links than in wired links.


## WiFi: 802.11 Wireless LANs

Although many technologies and standards for wireless LANs were developed in the 1990s, one particular class of standards has clearly emerged as the winner: the `IEEE 802.11 wireless LAN`, also known as `WiFi`.
There are several 802.11 standards for wireless LAN technology in the IEEE 802.11 (“WiFi”) family:-

-------------------------------------------
| Standard|  Frequency Range   |  Data Rate |
-------------------------------------------
802.11b   | 2.4 GHz            | up to 11 Mbps
802.11a   | 5 GHz              | up to 54 Mbps
802.11g   | 2.4 GHz            | up to 54 Mbps
802.11n   | 2.5 GHz and 5 GHz  | up to 450 Mbps
802.11ac  | 5 GHz              | up to 1300 Mbps

The different 802.11 standards all share some common characteristics. They
all use the same medium access protocol, `CSMA/CA`.All three use the same frame structure for their link-layer frames as well. All three standards have the ability to reduce their transmission rate in order to reach out over greater distances. And, importantly, 802.11 products are also all backwards compatible, meaning, for example, that a mobile capable only of 802.11g may still interact with a newer 802.11ac base station.

802.11 devices operate in two difference frequency ranges: 2.4–2.485 GHz (referred to as the 2.4 GHz range) and 5.1 – 5.8 GHz (referred to as the 5 GHz range). The 2.4 GHz range is an unlicensed frequency band, where 802.11 devices may compete for frequency spectrum with 2.4 GHz phones and microwave ovens. At 5 GHz, 802.11 LANs have a shorter transmission distance for a given power level and suffer more from multipath propagation. The two most recent standards, 802.11n [IEEE 802.11n 2012] and 802.11ac [IEEE 802.11ac 2013; Cisco 802.11ac 2015] uses multiple input multiple-output (MIMO) antennas; i.e., two or more antennas on the sending side and two or more antennas on the receiving side that are transmitting/receiving different signals [Diggavi 2004]. 802.11ac base stations may transmit to multiple stations simultaneously, and use “smart” antennas to adaptively beamform to target transmissions in the direction of a receiver. This decreases interference and increases the distance reached at a given data rate.

**The 802.11 Architecture**:- The fundamental building block of the 802.11 architecture is the `basic service set (BSS)`. A BSS contains one or more wireless stations and a central base station, known as an access point (AP) in 802.11 parlance.In a typical home network, there is one AP and one router (typically integrated together as one unit) that connects the BSS to the Internet.
As with Ethernet devices, each 802.11 wireless station has a 6-byte MAC address that is stored in the firmware of the station’s adapter (that is, 802.11 network interface card). Each AP also has a MAC address for its wireless interface. As with Ethernet, these MAC addresses are administered by IEEE and are (in theory) ­globally unique.
wireless LANs that deploy APs are often referred to as infrastructure wireless LANs, with the “infrastructure” being the APs along with the wired Ethernet infrastructure that interconnects the APs and a router.
IEEE 802.11 stations can also group themselves together to form an ad hoc network—a network with no central control and with no connections to the ­“outside world.” Here, the network is formed “on the fly,” by mobile devices that have found themselves in proximity to each other, that have a need to communicate, and that find no preexisting network infrastructure in their location. An ad hoc network might be formed when people with laptops get together (for example, in a conference room, a train, or a car) and want to exchange data in the absence of a centralized AP.

*Channels and Association*:- In 802.11, each wireless station needs to associate with an AP before it can send or receive network-layer data.
When a network administrator installs an AP, the administrator assigns a one- or two-word `Service Set Identifier (SSID)` to the access point. (When you choose Wi-Fi under Setting on your iPhone, for example, a list is displayed showing the SSID of each AP in range.) The administrator must also assign a channel number to the AP. To understand channel numbers, recall that 802.11 operates in the frequency range of 2.4 GHz to 2.4835 GHz. Within this 85 MHz band, 802.11 defines 11 partially overlapping channels. Any two channels are non-overlapping if and only if they are separated by four or more channels. In particular, the set of channels 1, 6, and 11 is the only set of three non-overlapping channels. This means that an administrator could create a wireless LAN with an aggregate maximum transmission rate of 33 Mbps by installing three 802.11b APs at the same physical location, assigning channels 1, 6, and 11 to the APs, and interconnecting each of the APs with a switch.

`WiFi jungle` is any physical location where a wireless station receives a sufficiently strong signal from two or more APs.Each of these APs would likely be located in a different IP subnet and would have been independently assigned a channel.

## Cellular Internet Access

