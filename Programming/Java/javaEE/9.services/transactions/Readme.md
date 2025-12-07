# Transactions

Jakarta Transactions specifies local Java interfaces between a transaction manager and the parties involved in a distributed transaction system: the application, the resource manager, and the application server.

The Jakarta Transactions package consists of two parts:
1. A high-level application interface that allows a transactional application to demarcate transaction boundaries
2. A high-level transaction manager interface that allows an application server to control transaction boundary demarcation for an application being managed by the application server.

Note – The Jakarta Transactions interfaces are presented as high-level from the transaction manager’s perspective. In contrast, a low-level API for the transaction manager consists of interfaces that are used to implement the transaction manager. For example, the Java mapping of the OTS are low-level interfaces used internally by a transaction manager.

The Jakarta Transactions API consists of three elements: a high-level application transaction demarcation interface, a high-level transaction manager interface intended for an application server, and a standard Java mapping of the X/Open XA protocol intended for a transactional resource manager.



`Java Transaction Service (JTS)` is a specification for building a transaction manager which supports the Jakarta Transactions interfaces at the high-level and the standard Java mapping of the CORBA Object Transaction Service 1.1 specification at the low-level. JTS provides transaction interoperability using the CORBA standard IIOP protocol for transaction propagation between servers. JTS is intended for vendors that provide the transaction system infrastructure for enterprise middleware.
