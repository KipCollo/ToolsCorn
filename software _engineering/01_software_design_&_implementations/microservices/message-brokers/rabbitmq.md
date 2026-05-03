# RabbitMQ

With tens of thousands of users, RabbitMQ is one of the most popular open-source message brokers. RabbitMQ is lightweight and easy to deploy on-premises and in the cloud. It supports multiple messaging protocols. RabbitMQ can be deployed in distributed and federated configurations to meet high-scale, high-availability requirements.

It is an open source distributed message broker.Developed in 2007 using Erlang.It is implementation of AMQP(Advanced Message Queue Protocol).

Message queueing is a way of exchanging data between processes, applications, and servers. With tens of thousands of users, RabbitMQ is one of the most popular open-source message brokers in the world.

RabbitMQ is a message broker. It is software used to define queues, connect applications, and accept messages. Message queues enable asynchronous communication,
allowing other applications (endpoints) that are producing and consuming messages to interact with the queue instead of communicating directly with each other.

A message can include any type of information. For example, a message could contain information about a process or job that should start on another application, possibly even on another server, or it might be a simple text message.

The message broker stores the messages until a receiving application connects and consumes a message from the queue. The receiving application then processes the
message appropriately. A message producer adds messages to a queue without having to wait for them to be processed.

1. Cloud-friendly
2. Cross-language.
3. Secure
4. acknowledgement message.
5. open source 
6. Supports other message models i.e MQTT,STOMP.

`rabbitmqctl` - Commandline tool for managing RabbitMQ.
`rabbitmq-plugins` - Manages plugins in RabbitMQ

```bash
rabbitmq-pluggins list
sudo rabbitmq-plugins enable rabbitmq_management
```

The rabbitMQ management default server port is `15672`.Default username and password in `guest`.

## Publish and Consume Messages

RabbitMQ speaks the AMQP 0.9.1 protocol by default, so to be able to communicate with RabbitMQ, a client library that understands the same protocol should be used. A
RabbitMQ client library (sometimes called helper library) abstracts the complexity of the AMQP protocol into simple methods which, in this case, is communicating with
RabbitMQ. These methods should be used when connecting to the RabbitMQ broker with parameters including, for example, hostname, port number, or when declaring a queue
or an exchange. Libraries are available for all major programming languages.

The following steps represent the standard flow when setting up a connection and a channel in RabbitMQ via the client library, and how messages are published and
consumed.

1. Set up a connection object. This is where the username, password, connection URL, port, etc., will be specified. A TCP connection will be set up between the
application and RabbitMQ.
2. Open a channel. You are now ready to send and receive messages.
3. Declare/create a queue. Declaring a queue will cause it to be created if it does not already exist. All queues need to be declared before they can be used.
4. Set up exchanges and bind a queue to an exchange.
5. Publish a message to an exchange and consume a message from the queue.
6. Close the channel and the connection.


## Exchange

1. Fanout
2. Direct
3. Topic
4. Header
5. Default
