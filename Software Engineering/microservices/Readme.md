# Microservices

Microservices is an architectural pattern that is used to design software systems as a collection of small, independent, and loosely-coupled services. Each service is responsible for a specific functionality and can be developed, deployed, and scaled independently. The main advantage of a microservices architecture is that it allows for a more flexible and scalable system, it also improves fault isolation and enables faster deployment. It's often used in combination with other architectural patterns and styles such as event-driven architecture, CQRS, and service-oriented architecture.

`Microservices as a form of modularity`- Modularity is essential when developing large, complex applications.Applications must be decomposed into modules that are developed and understood by different people. In a monolithic application,modules are defined using a combination of programming language constructs (such as Java packages) and build artifacts (such as Java JAR files).

The microservice architecture uses services as the unit of modularity. A service has an API, which is an impermeable boundary that is difficult to violate.

`Each service has its own database`:A key characteristic of the microservice architecture is that the services are loosely coupled and communicate only via APIs. One way to achieve loose coupling is by each service having its own datastore.

`Modern tooling for microservices`:- Includes:-

1. Docker—To package and publish our services
2. Docker Compose—To test our microservices application on our development computer
3. Kubernetes—To host our application in the cloud
4. Terraform—To build our production infrastructure in the cloud
5. GitHub Actions—To build a continuous deployment pipeline

The microservice architecture has the following benefits:

- It enables the continuous delivery and deployment of large, complex applications.
- Services are small and easily maintained.
- Services are independently deployable.
- Services are independently scalable.
- The microservice architecture enables teams to be autonomous.
- It allows easy experimenting and adoption of new technologies.
- It has better fault isolation.

## The Microservice architecture pattern language

A `pattern `is a reusable solution to a problem that occurs in a particular context. It’s an idea that has its origins in real-world architecture and that has proven to be useful in software architecture and design.
`Pattern language`, a collection of related patterns that solve problems within a particular domain.
A software pattern solves a software architecture or design problem by defining a set of collaborating software elements.

The Microservice architecture pattern language is a collection of patterns that help you architect an application using the microservice architecture.
The patterns are also divided into three layers:-

1. Infrastructure patterns —These solve problems that are mostly infrastructure issues outside of development.
2. Application infrastructure —These are for infrastructure issues that also impact development.
3. Application patterns—These solve problems faced by developers.