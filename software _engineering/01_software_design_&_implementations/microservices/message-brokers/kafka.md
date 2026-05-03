# Kafka

Apache Kafka is an open-source distributed event streaming platform used by thousands of companies for high-performance data pipelines, streaming analytics, data integration, and mission-critical applications.

Apache Kafka is an open source, distributed, partitioned, and replicated commit-log-based publish-subscribe messaging system, mainly designed with the following characteristics:
1. Persistent messaging: To derive the real value from big data, any kind of information loss cannot be afforded. Apache Kafka is designed with O(1) disk
structures that provide constant-time performance even with very large volumes of stored messages that are in the order of TBs. With Kafka, messages are persisted on
disk as well as replicated within the cluster to prevent data loss.
2. High throughput: Keeping big data in mind, Kafka is designed to work on commodity hardware and to handle hundreds of MBs of reads and writes per second
from large number of clients.
3. Distributed: Apache Kafka with its cluster-centric design explicitly supports message partitioning over Kafka servers and distributing consumption over a cluster
of consumer machines while maintaining per-partition ordering semantics. Kafka cluster can grow elastically and transparently without any downtime.
4. Multiple client support: The Apache Kafka system supports easy integration of clients from different platforms such as Java, .NET, PHP, Ruby, and Python.
5. Real time: Messages produced by the producer threads should be immediately visible to consumer threads; this feature is critical to event-based systems such as
Complex Event Processing (CEP) systems.

Kafka provides a real-time publish-subscribe solution that overcomes the challenges of consuming the real-time and batch data volumes that may grow in order of magnitude to
be larger than the real data. Kafka also supports parallel data loading in the Hadoop systems.

`Producers and Consumers` - Kafka clients are users of the system, and there are two basic types: producers and consumers. There are also advanced client APIs—Kafka Connect API for data integration and Kafka Streams for stream processing. The advanced clients use producers and consumers as building blocks and provide higher-level functionality on top.

Producers create new messages. In other publish/subscribe systems, these may be called publishers or writers. In general, a message will be produced to a specific topic.
By default, the producer does not care what partition a specific message is written to and will balance messages over all partitions of a topic evenly. In some cases, the producer will direct messages to specific partitions. This is typically done using the message key and a partitioner that will generate a hash of the key and map it to a specific partition. This assures that all messages produced with a given key will get written to the same partition. The producer could also use a custom partitioner that follows other business rules for mapping messages to partitions.

Consumers read messages. In other publish/subscribe systems, these clients may be called subscribers or readers. The consumer subscribes to one or more topics and reads the messages in the order in which they were produced. The consumer keeps track of which messages it has already consumed by keeping track of the offset of messages. The offset is another bit of metadata—an integer value that continually increases—that Kafka adds to each message as it is produced. Each message in a given partition has a unique offset. By storing the offset of the last consumed message for each partition, either in Zookeeper or in Kafka itself, a consumer can stop and restart without losing its place.

Consumers work as part of a consumer group, which is one or more consumers that work together to consume a topic. The group assures that each partition is only consumed by one member.

`Brokers and Clusters` - A single Kafka server is called a broker. The broker receives messages from producers,assigns offsets to them, and commits the messages to storage on disk. It also services consumers, responding to fetch requests for partitions and responding with the mes‐sages that have been committed to disk. Depending on the specific hardware and its performance characteristics, a single broker can easily handle thousands of partitions and millions of messages per second.

Kafka brokers are designed to operate as part of a cluster. Within a cluster of brokers, one broker will also function as the cluster controller (elected automatically from the
live members of the cluster). The controller is responsible for administrative operations, including assigning partitions to brokers and monitoring for broker failures. A
partition is owned by a single broker in the cluster, and that broker is called the leader of the partition. A partition may be assigned to multiple brokers, which will result in the partition being replicated
This provides redundancy of messages in the partition, such that another broker can take over leadership if there is a broker failure. However, all consumers and producers operating on that partition must connect to the leader.

A key feature of Apache Kafka is that of retention, which is the durable storage of messages for some period of time. Kafka brokers are configured with a default retention setting for topics, either retaining messages for some period of time (e.g., 7 days) or until the topic reaches a certain size in bytes (e.g., 1 GB). Once these limits are reached, messages are expired and deleted so that the retention configuration is a minimum amount of data available at any time. Individual topics can also be configured with their own retention settings so that messages are stored for only as long as they are useful. For example, a tracking topic might be retained for several days,
whereas application metrics might be retained for only a few hours. Topics can also be configured as log compacted, which means that Kafka will retain only the last message produced with a specific key.

Within the context of Kafka,a cluster is a group of brokers/servers working together for three reasons: speed(low lwtency),durability and scalability.Several data streams can be processed by separate servers,which decreases the latency of data delivery.Data is replicated across multiple servers,so if one fails, another server has the data backed up,ensuring stability.Kafka also load balances across multiple servers to provide scalability.

Kafka brokers are servers with special jobs to do: managing the load balancing,replication and stream decoupling within kafka cluster.In order to start a kafka cluster,the developer authenticates to a bootsrap server.These are the fisrt servers in the cluster.Then, the brokers also balance the load and handle replication.

`Multiple Clusters` - As Kafka deployments grow, it is often advantageous to have multiple clusters. There are several reasons why this can be useful:
• Segregation of types of data
• Isolation for security requirements
• Multiple datacenters (disaster recovery)

When working with multiple datacenters in particular, it is often required that messages be copied between them. In this way, online applications can have access to user
activity at both sites. For example, if a user changes public information in their profile, that change will need to be visible regardless of the datacenter in which search
results are displayed. Or, monitoring data can be collected from many sites into a single central location where the analysis and alerting systems are hosted. The replication mechanisms within the Kafka clusters are designed only to work within a single cluster, not between multiple clusters.
The Kafka project includes a tool called MirrorMaker, used for this purpose. At its core, MirrorMaker is simply a Kafka consumer and producer, linked together with a queue. Messages are consumed from one Kafka cluster and produced for another.

## Kafka Cluster

With Kafka, we can create multiple types of clusters, such as the following:

1. A single node—single broker cluster
2. A single node—multiple broker clusters
3. Multiple nodes—multiple broker clusters

A Kafka cluster primarily has five main components:

`Topic`: A topic is a category or feed name to which messages are published by the message producers and from which records are consumed by consumers. In Kafka, topics are partitioned and each partition is represented by the ordered immutable sequence of messages. A Kafka cluster maintains the partitioned log for each topic. Each message in the partition is assigned a unique sequential ID called the offset.They serve as a way to organize and categorize the streams of messages within kafka messaging system.

`Broker`: A Kafka cluster consists of one or more servers where each one may have one or more server processes running and is called the broker. Topics are created
within the context of broker processes.

`Producers`: Producers publish data to the topics by choosing the appropriate partition within the topic. For load balancing, the allocation of messages to the topic partition can be done in a round-robin fashion or using a custom defined function.

`Consumer`: Consumers are the applications or processes that subscribe to topics and process the feed of published messages.

`Zookeeper`: ZooKeeper serves as the coordination interface between the Kafka broker and consumers.

`partition`:- A partition is a basic unit of parallelism and scalability.It is a way of horizontally dividing a topic into multiple independently managed units.Each partition is a strictly ordered,immutable sequence of records,and it plays a major role in the distribution,parallel processing and fault tolerance of data within a cluster.

`offset`: It is a sequence of ids given to messages as they arrive at a partition.Once the offset is assigned,it will never be changed.The first message gets an offset zero(0).The next offset one(1) and so on..

## Kafka Producers: Writing Messages to Kafka

Whether you use Kafka as a queue, message bus, or data storage platform, you will always use Kafka by writing a producer that writes data to Kafka, a consumer that
reads data from Kafka, or an application that serves both roles.
Apache Kafka ships with built-in client APIs that developers can use when developing applications that interact with Kafka.

Third-Party Clients - In addition to the built-in clients, Kafka has a binary wire protocol.This means that it is possible for applications to read messages
from Kafka or write messages to Kafka simply by sending the correct byte sequences to Kafka’s network port. There are multiple clients that implement Kafka’s wire protocol in different programming languages, giving simple ways to use Kafka not just in Java applications but also in languages like C++, Python, Go, and many more. Those clients are not part of Apache Kafka project, but a list of non-Java clients is maintained in the project wiki.

There are many reasons an application might need to write messages to Kafka:- recording user activities for auditing or analysis, recording metrics, storing log messages, recording information from smart appliances, communicating asynchronously with other applications, buffering information before writing to a database, and much more.

1. We start producing messages to Kafka by creating a `ProducerRecord`, which must include the `topic` we want to send the record to and a value. Optionally, we can also specify a key and/or a partition. Once we send the ProducerRecord, the first thing the producer will do is serialize the key and value objects to ByteArrays so they can be sent over the network.
2. Next, the data is sent to a partitioner. If we specified a partition in the ProducerRecord, the partitioner doesn’t do anything and simply returns the partition
we specified. If we didn’t, the partitioner will choose a partition for us, usually based on the ProducerRecord key. Once a partition is selected, the producer knows which
topic and partition the record will go to. It then adds the record to a batch of records that will also be sent to the same topic and partition. A separate thread is responsible for sending those batches of records to the appropriate Kafka brokers.
3. When the broker receives the messages, it sends back a response. If the messages were successfully written to Kafka, it will return a RecordMetadata object with the topic, partition, and the offset of the record within the partition. If the broker failed to write the messages, it will return an error. When the producer receives an error, it may retry sending the message a few more times before giving up and returning an error.

`Constructing a Kafka Producer`:- The first step in writing messages to Kafka is to create a producer object with the properties you want to pass to the producer. A Kafka producer has three mandatory properties:
   1. bootstrap.servers - List of host:port pairs of brokers that the producer will use to establish initial connection to the Kafka cluster. This list doesn’t need to include all brokers, since the producer will get more information after the initial connection. But it is recommended to include at least two, so in case one broker goes down, the producer will still be able to connect to the cluster.
   2. key.serializer - Name of a class that will be used to serialize the keys of the records we will produce to Kafka. Kafka brokers expect byte arrays as keys and values of messages.However, the producer interface allows, using parameterized types, any Java object to be sent as a key and value. This makes for very readable code, but it also means that the producer has to know how to convert these objects to byte arrays.key.serializer should be set to a name of a class that implements the org.apache.kafka.common.serialization.Serializer interface. The producer will use this class to serialize the key object to a byte array. The Kafka client package includes ByteArraySerializer (which doesn’t do much),StringSerializer, and IntegerSerializer, so if you use common types, there is no need to implement your own serializers. Setting key.serializer is required even if you intend to send only values.
   3. value.serializer - Name of a class that will be used to serialize the values of the records we will produce to Kafka. The same way you set key.serializer to a name of a class that will serialize the message key object to a byte array, you set value.serializer to a class that will serialize the message value object.

`Sending message`:- Once we instantiate a producer, it is time to start sending messages. There are three primary methods of sending messages:

- Fire-and-forget - We send a message to the server and don’t really care if it arrives succesfully or not. Most of the time, it will arrive successfully, since Kafka is highly available and the producer will retry sending messages automatically. However, some messages will get lost using this method.
- Synchronous send - We send a message, the send() method returns a Future object, and we use get() to wait on the future and see if the send() was successful or not.
- Asynchronous send - We call the send() method with a callback function, which gets triggered when it receives a response from the Kafka broker.

`Configuring Producers`:- The producer has a large number of configuration parameters; and many have reasonable defaults so there is no reason to tinker with every single parameter. However, some of the parameters have a significant impact on memory use, performance, and reliability of the producers.

1. acks - The acks parameter controls how many partition replicas must receive the record before the producer can consider the write successful. This option has a significant impact on how likely messages are to be lost. There are three allowed values for the acks parameter:
   - If acks=0, the producer will not wait for a reply from the broker before assuming the message was sent successfully. This means that if something went wrong and the broker did not receive the message, the producer will not know about it and the message will be lost. However, because the producer is not waiting for any response from the server, it can send messages as fast as the network will support, so this setting can be used to achieve very high throughput.
   - If acks=1, the producer will receive a success response from the broker the moment the leader replica received the message. If the message can’t be written to the leader (e.g., if the leader crashed and a new leader was not elected yet), the producer will receive an error response and can retry sending the message, avoiding potential loss of data. The message can still get lost if the leader crashes and a replica without this message gets elected as the new leader (via unclean leader election).
   - If acks=all, the producer will receive a success response from the broker once all in-sync replicas received the message. This is the safest mode since you can make sure more than one broker has the message and that the message will survive even in the case of crash.
2. buffer.memory - This sets the amount of memory the producer will use to buffer messages waiting to be sent to brokers. If messages are sent by the application faster than they can be delivered to the server, the producer may run out of space and additional send() calls will either block or throw an exception, based on the block.on.buffer.full parameter (replaced with max.block.ms in release 0.9.0.0, which allows blocking for a certain time and then throwing an exception).
3. compression.type - By default, messages are sent uncompressed. This parameter can be set to snappy,gzip, or lz4, in which case the corresponding compression algorithms will be used to compress the data before sending it to the brokers. Snappy compression was invented by Google to provide decent compression ratios with low CPU overhead and good performance, so it is recommended in cases where both performance and bandwidth are a concern. Gzip compression will typically use more CPU and time but result in
better compression ratios, so it recommended in cases where network bandwidth is more restricted. By enabling compression, you reduce network utilization and storage, which is often a bottleneck when sending messages to Kafka.
4. retries - When the producer receives an error message from the server, the error could be transient (e.g., a lack of leader for a partition). In this case, the value of the retries parameter will control how many times the producer will retry sending the message before giving up and notifying the client of an issue. By default, the producer will wait 100ms between retries, but you can control this using the retry.backoff.ms parameter.
5. batch.size - When multiple records are sent to the same partition, the producer will batch them together. This parameter controls the amount of memory in bytes (not messages!) that will be used for each batch. When the batch is full, all the messages in the batch will be sent. However, this does not mean that the producer will wait for the batch to become full.The producer will send half-full batches and even batches with just a single message in them
6. linger.ms - linger.ms controls the amount of time to wait for additional messages before sending the current batch. KafkaProducer sends a batch of messages either when the current batch is full or when the linger.ms limit is reached. By default, the producer will send messages as soon as there is a sender thread available to send them, even if
there’s just one message in the batch. By setting linger.ms higher than 0, we instruct the producer to wait a few milliseconds to add additional messages to the batch before sending it to the brokers. This increases latency but also increases throughput (because we send more messages at once, there is less overhead per message).
7. client.id - This can be any string, and will be used by the brokers to identify messages sent from the client. It is used in logging and metrics, and for quotas.
8. max.block.ms - This parameter controls how long the producer will block when calling send() and when explicitly requesting metadata via partitionsFor(). Those methods block
when the producer’s send buffer is full or when metadata is not available. When max.block.ms is reached, a timeout exception is thrown.
9. receive.buffer.bytes and send.buffer.bytes - These are the sizes of the TCP send and receive buffers used by the sockets when writing and reading data. If these are set to -1, the OS defaults will be used. It is a good idea to increase those when producers or consumers communicate with brokers in a different datacenter because those network links typically have higher latency and lower bandwidth.

`Serializers`:- producer configuration includes mandatory serializers.

`Ordering Guarantees` - Apache Kafka preserves the order of messages within a partition.This means that if messages were sent from the producer in a specific order, the broker will write them to a partition in that order and all consumers will read them in that order. For some use cases, order is very important.

Setting the retries parameter to nonzero and the max.in.flights.requests.per.session to more than one means  that it is possible that the broker will fail to write the first batch of messages, succeed to write the second (which was already in-flight), and then retry the first batch and succeed, thereby reversing the order.
Usually, setting the number of retries to zero is not an option in a reliable system, so if guaranteeing order is critical, we recommend setting in.flight.requests.per.session=1 to make sure that while a batch of messages is retrying, additional messages will not be sent (because this has the potential to reverse the correct order).
This will severely limit the throughput of the producer, so only use this when order is important

## Kafka Consumers: Reading Data from Kafka

Applications that need to read data from Kafka use a KafkaConsumer to subscribe to Kafka topics and receive messages from these topics. Reading data from Kafka is a bit
different than reading data from other messaging systems

`Consumers and Consumer Groups`: Kafka consumers are typically part of a consumer group. When multiple consumers are subscribed to a topic and belong to the same consumer group, each consumer in the group will receive messages from a different subset of the partitions in the topic.

A consumer group contains one or more consumers together to process messages.

The main way we scale data consumption from a Kafka topic is by adding more consumers to a consumer group. It is common for Kafka consumers to do high-latency operations such as write to a database or a time-consuming computation on the data.In these cases, a single consumer can’t possibly keep up with the rate data flows into a topic, and adding more consumers that share the load by having each consumer own just a subset of the partitions and messages is our main method of scaling. This is a good reason to create topics with a large number of partitions—it allows adding more consumers when the load increases.

In addition to adding consumers in order to scale a single application, it is very common to have multiple applications that need to read data from the same topic. In fact, one of the main design goals in Kafka was to make the data produced to Kafka topics available for many use cases throughout the organization. In those cases, we want each application to get all of the messages, rather than just a subset. To make sure an application gets all the messages in a topic, ensure the application has its own consumer group. Unlike many traditional messaging systems, Kafka scales to a large number of consumers and consumer groups without reducing performance.

`Creating a Kafka Consumer`:- The first step to start consuming records is to create a `KafkaConsumer` instance. Creating a KafkaConsumer is very similar to creating a KafkaProducer—you create a Java Properties instance with the properties you want to pass to the consumer.

To start we just need to use the three mandatory properties: bootstrap.servers, key.deserializer, and value.deserializer.
The first property, bootstrap.servers, is the connection string to a Kafka cluster. It is used the exact same way as in KafkaProducer
The other two properties, key.deserializer and value.deserializer, are similar to the serializers defined for the producer, but rather than specifying classes that turn Java objects to byte arrays, you need to specify classes that can take a byte array and turn it into a Java object.

There is a fourth property, which is not strictly mandatory, but for now we will pretend it is. The property is group.id and it specifies the consumer group the KafkaConsumer instance belongs to. While it is possible to create consumers that do not belong to any consumer group, this is uncommon, so for most of the chapter we will assume the consumer is part of a group.

`Subscribing to Topics` -- Once we create a consumer, the next step is to subscribe to one or more topics. The `subcribe()` method takes a list of topics as a parameter, so it’s pretty simple to use:

It is also possible to call subscribe with a regular expression. The expression can match multiple topic names, and if someone creates a new topic with a name that matches, a rebalance will happen almost immediately and the consumers will start consuming from the new topic. This is useful for applications that need to consume from multiple topics and can handle the different types of data the topics will contain.Subscribing to multiple topics using a regular expression is most commonly used in applications that replicate data between Kafka and another system.

## ADMINISTERING KAFKA

Kafka provides several command-line interface (CLI) utilities that are useful for making administrative changes to your clusters. The tools are implemented in Java classes, and a set of scripts are provided to call those classes properly. These tools provide basic functions, but you may find they are lacking for more complex operations.

`Authorizing Admin Operations` - While Apache Kafka implements authentication and authorization to control topic operations, most cluster operations are not yet supported. This means that these CLI tools can be used without any authentication required, which will allow operations such as topic changes to be executed with no security check or audit. This functionality is under development and should be added soon.

`Topic Operations` - The kafka-topics.sh tool provides easy access to most topic operations (configuration changes have been deprecated and moved to the kafka-configs.sh tool). It allows you to create, modify, delete, and list information about topics in the cluster.
To use this command, you are required to provide the Zookeeper connect string for the cluster with the --zookeeper argument. In the examples that follow, the Zookeeper connect string is assumed to be zoo1.example.com:2181/kafka-cluster.

- `Creating a New Topic` - You need three arguments to create a new topic in a cluster (these arguments must be provided, even though some of them have broker-level defaults configured already):
   1. Topic name - The name of the topic that you wish to create.
   2. Replication Factor - The number of replicas of the topic to maintain within the cluster.
   3. Partitions - The number of partitions to create for the topic.

Topic names may contain alphanumeric characters, as well as underscores, dashes, and periods.
Specifying Topic Configurations - It is also possible to explicitly set the replicas for a topic during creation, or set configuration overrides for the topic.

`Adding Partitions` - It is sometimes necessary to increase the number of partitions for a topic. Partitions are the way topics are scaled and replicated across a cluster, and the most common reason to increase the partition count is to spread out a topic further, or decrease the throughput for a single partition. Topics may also be increased if a consumer needs to expand to run more copies in a single group, as a partition can only be consumed by a single member in a group.

Topics that are produced with keyed messages can be very difficult to add partitions to from a consumer’s point of view. This is because the mapping of keys to partitions will change when the number of partitions is changed. For this reason, it is advisable to set the number of partitions for a topic that will contain keyed messages once, when the topic is created, and avoid resizing the topic.
