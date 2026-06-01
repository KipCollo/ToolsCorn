# Distributed Software Engineering

A distributed system is one involving several computers,in contrast with centralized systems where all of the system components execute on a single computer.

Distributed SE is a collection of independent computers that appears to the user as a single coherent system - Tanenbaum.
A system in which hardware or software components located at networked computers communicate and coordinate their actions only by message passing - Coulouris.
A distributed system is one on which I cannot get any work done because some machine I have never heard of has crashed.

`Example Distributed Systems`:
Cluster:- A type of parallel or distributed processing system, which consists of a collection of interconnected stand-alone computers cooperatively working together as a single, integrated computing resource” [Buyya].
Cloud: “A type of parallel and distributed system consisting of a collection of interconnected and virtualised computers that are dynamically provisioned and presented as one or more unified computing resources based on service-level agreements established through negotiation between the service provider and consumers”[Buyya].

*Architectural patterns for distributed systems*:- Designers of distributed systems have to organize their system designs to find a balance between performance, dependability, security, and manageability of the system. There is no universal model of system organization that is appropriate for all circumstances so various distributed architectural styles have emerged. When designing a distributed application,you should choose an architectural style that supports the critical non-functional requirements of your system.

- `Master-slave architectures`:- Master-slave architectures for distributed systems are commonly used in real-time systems where there may be separate processors associated with data acquisition from the system’s environment, data processing, and computation and actuator management.
- `Two-tier client–server architectures`:- which is used for simple client–server systems, and in situations where it is important to centralize the system for security reasons.In such cases, communication between the client and server is normally encrypted.

