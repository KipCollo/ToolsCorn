# Concurrency Utilities

Concurrency is the concept of executing two or more tasks at the same time (in parallel). Tasks may include methods (functions), parts of a program, or even other programs. With current computer architectures, support for multiple cores and multiple processors in a single CPU is very common.
The Java Platform has always offered support for concurrent programming, which was the basis for implementing many of the services offered by Java EE containers. At Java SE 5, additional high-level API support for concurrency was provided by the java.util.concurrent package.

Prior to Java EE 7, there were no specific APIs that allowed enterprise developers to use concurrency utilities in a safely standard manner. The Java EE web and EJB containers instantiate objects using container-managed thread pools. Therefore, using Java SE concurrent APIs to instantiate Thread objects was strongly discouraged. If a developer creates a new (non-managed) Thread object, the container could not guarantee that other Java EE platform services (for example, transactions and security) would be part of this Thread.
