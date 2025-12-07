# Java Message Service API

Java Message Service (JMS) API is a Java API that allows applications to create, send, receive, and read messages using reliable, asynchronous,loosely coupled communication.

- `Messaging`:- Messaging is a method of communication between software components or applications. A messaging system is a peer-to-peer facility: A messaging client can send messages to, and receive messages from, any other client. Each client connects to a messaging agent that provides facilities for creating, sending, receiving, and reading messages.
Messaging enables distributed communication that is loosely coupled. A component sends a message to a destination, and the recipient can retrieve the message from the destination.

Messaging also differs from electronic mail (email), which is a method of communication between people or between software applications and people. Messaging is used for communication between software applications or software components.

The sender and the receiver do not have to be available at the same time in order to communicate. In fact, the sender does not need to know anything about the receiver; nor does the receiver need to know anything about the sender. The sender and the receiver need to know only which message format and which destination to use. In this respect, messaging differs from tightly coupled technologies, such as Remote Method Invocation (RMI), which require an application to know a remote application’s methods.

- `JMS API`:- The Java Message Service is a Java API that allows applications to create, send, receive, and read messages. Designed by Sun and several partner companies, the JMS API defines a common set of interfaces and associated semantics that allow programs written in the Java programming language to communicate with other messaging implementations.

The JMS API minimizes the set of concepts a programmer must learn in order to use messaging products but provides enough features to support sophisticated messaging applications. It also strives to maximize the portability of JMS applications across JMS providers in the same messaging domain.

- The JMS API enables communication that is not only loosely coupled but also:-
  1. Asynchronous: A JMS provider can deliver messages to a client as they arrive; a client does not have to request messages in order to receive them.
  2. Reliable: The JMS API can ensure that a message is delivered once and only once. Lower levels of reliability are available for applications that can afford to miss messages or to receive duplicate messages.

- An enterprise application provider is likely to choose a messaging API over a tightly coupled API, such as remote procedure call (RPC), under the following circumstances.
  1. The provider wants the components not to depend on information about other components’ interfaces, so that components can be easily replaced.
  2. The provider wants the application to run whether or not all components are up and running simultaneously.
  3. The application business model allows a component to send information to another and to continue to operate without receiving an immediate response.


When the JMS API was first introduced, its most important purpose was to allow Java applications to access existing messaging-oriented middleware (MOM) systems. Since that time, many vendors have adopted and implemented the JMS API, so a JMS product can now provide a complete messaging capability for an enterprise.
The JMS API in the Java EE platform has the following features.

1. Application clients, Enterprise JavaBeans (EJB) components, and web components can send or synchronously receive a JMS message. Application clients can in addition receive JMS messages asynchronously. (Applets, however, are not required to support the JMS API.)
2. Message-driven beans, which are a kind of enterprise bean, enable the asynchronous consumption of messages. A JMS provider can optionally implement concurrent processing of messages by message-driven beans.
3. Message send and receive operations can participate in distributed transactions, which allow JMS operations and database accesses to take place within a single transaction.

The JMS API enhances the Java EE platform by simplifying enterprise development, allowing loosely coupled, reliable, asynchronous interactions among Java EE components and legacy systems capable of messaging. A developer can easily add new behavior to a Java EE application that has existing business events by adding a new message-driven bean to operate on specific business events. The Java EE platform, moreover, enhances the JMS API by providing support for distributed transactions and allowing for the concurrent consumption of messages.

The JMS provider can be integrated with the application server using the Java EE Connector architecture. You access the JMS provider through a resource adapter. This capability allows vendors to create JMS providers that can be plugged in to multiple application servers, and it allows application servers to support multiple JMS providers.

## JMS API Architecture

A JMS application is composed of the following parts:-

1. A JMS provider - is a messaging system that implements the JMS interfaces and provides administrative and control features. An implementation of the Java EE platform includes a JMS provider.
2. JMS clients - are the programs or components, written in the Java programming language, that produce and consume messages. Any Java EE application component can act as a JMS client.Java SE applications can also act as JMS clients.
3. Messages  - are the objects that communicate information between JMS clients.
4. Administered objects - are pre-configured JMS objects created by an administrator for the use of clients. The two kinds of JMS administered objects are destinations and connection factories.

**Messaging Styles**:- Before the JMS API existed, most messaging products supported either the point-to-point or the publish/subscribe style of messaging. The JMS specification defines compliance for each style. A JMS provider must implement both styles, and the JMS API provides interfaces that are specific to each.
The JMS API, however, makes it unnecessary to use only one of the two styles. It allows you to use the same code to send and receive messages using either the PTP or the pub/sub style. The destinations you use remain specific to one style, and the behavior of the application will depend in part on whether you are using a queue or a topic. However, the code itself can be common to both styles, making your applications flexible and reusable.

`Point-to-Point Messaging Style` - A point-to-point (PTP) product or application is built on the concept of message queues, senders, and receivers. Each message is addressed to a specific queue, and receiving clients extract messages from the queues established to hold their messages.Queues retain all messages sent to them until the messages are consumed or expire.
Use PTP messaging when every message you send must be processed successfully by one consumer.

PTP messaging has the following characteristics.

1. Each message has only one consumer.
2. The receiver can fetch the message whether or not it was running when the client sent the message.

`Publish/Subscribe Messaging Style`:- In a publish/subscribe (pub/sub) product or application, clients address messages to a topic, which functions somewhat like a bulletin board. Publishers and subscribers can dynamically publish or subscribe to the topic. The system takes care of distributing the messages arriving from a topic's multiple publishers to its multiple subscribers. Topics retain messages only as long as it takes to distribute them to subscribers.
With pub/sub messaging, it is important to distinguish between the consumer that subscribes to a topic (the subscriber) and the subscription that is created. The consumer is a JMS object within an application, while the subscription is an entity within the JMS provider. Normally, a topic can have many consumers, but a subscription has only one subscriber. It is possible, however, to create shared subscriptions.
Use pub/sub messaging when each message can be processed by any number of consumers (or none).

Pub/sub messaging has the following characteristics.
1. Each message can have multiple consumers.
2. A client that subscribes to a topic can consume only messages sent after the client has created a subscription, and the consumer must continue to be active in order for it to consume messages.

The JMS API relaxes this requirement to some extent by allowing applications to create durable subscriptions, which receive messages sent while the consumers are not active. Durable subscriptions provide the flexibility and reliability of queues but still allow clients to send messages to many recipients.


**Message Consumption**:- Messaging products are inherently asynchronous: There is no fundamental timing dependency between the production and the consumption of a message. However, the JMS specification uses this term in a more precise sense. Messages can be consumed in either of two ways.

- `Synchronously`: A consumer explicitly fetches the message from the destination by calling the receive method. The receive method can block until a message arrives or can time out if a message does not arrive within a specified time limit.
- `Asynchronously`: An application client or a Java SE client can register a message listener with a consumer. A message listener is similar to an event listener. Whenever a message arrives at the destination, the JMS provider delivers the message by calling the listener's onMessage method, which acts on the contents of the message. In a Java EE application, a message-driven bean serves as a message listener (it too has an onMessage method), but a client does not need to register it with a consumer.
