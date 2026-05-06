# Security


## Operational Security: Firewalls and Intrusion Detection Systems

In a computer network, when traffic entering/leaving a network is security-checked, logged, dropped, or forwarded, it is done by operational devices known as `firewalls`, `intrusion detection systems (IDSs)`, and `intrusion prevention systems (IPSs)`.

**Firewalls**:- A firewall is a combination of hardware and software that isolates an organization’s internal network from the Internet at large, allowing some packets to pass and blocking others. A firewall allows a network administrator to control access between the outside world and resources within the administered network by managing the traffic flow to and from these resources. A firewall has three goals:
1. All traffic from outside to inside, and vice versa, passes through the firewall.
2. Only authorized traffic, as defined by the local security policy, will be allowed to pass. With all traffic entering and leaving the institutional network passing through the firewall, the firewall can restrict access to authorized traffic.
3. The firewall itself is immune to penetration. The firewall itself is a device connected to the network. If not designed or installed properly, it can be compromised, in which case it provides only a false sense of security (which is worse than no firewall at all!).

Cisco and Check Point are two of the leading firewall vendors today. You can also easily create a firewall (packet filter) from a Linux box using iptables (public-domain software that is normally shipped with Linux).Furthermore firewalls are now frequently implemented in routers and controlled remotely using SDNs.

Firewalls can be classified in three categories: traditional packet filters, stateful filters, and application gateways.

*Traditional Packet Filters*:-

*Application Gateway*:- An application gateway is an application-specific server through which all application data (inbound and outbound) must pass. Multiple application gateways can run on the same host, but each gateway is a separate server with its own processes.
Information about the identity of the internal users is application-layer data and is not included in the IP/TCP/UDP headers.To have finer-level security, firewalls must combine packet filters with application gateways. Application gateways look beyond the IP/TCP/UDP headers and make policy decisions based on application data.
