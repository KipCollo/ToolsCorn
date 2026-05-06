# Integration

1. REST Clients
2. JMS (Java Message Service)
3. JMX
4. Email
5. Task Execution and Scheduling
6. Cache Abstraction
7. Observability Support
8. JVM Checkpoint Restore
9. CDS

## REST Clients

The Spring Framework provides the following choices for making calls to REST endpoints:

1. RestClient - synchronous client with a fluent API.
2. WebClient - non-blocking, reactive client with fluent API.
3. RestTemplate - synchronous client with template method API.
4. HTTP Interface - annotated interface with generated, dynamic proxy implementation.

- **RestClients**:- The RestClient is a synchronous HTTP client that offers a modern, fluent API. It offers an abstraction over HTTP libraries that allows for convenient conversion from a Java object to an HTTP request, and the creation of objects from an HTTP response.

Creating a RestClient- The RestClient is created using one of the static create methods. You can also use builder() to get a builder with further options, such as specifying which HTTP library to use and which message converters to use, setting a default URI, default path variables, default request headers, or uriBuilderFactory, or registering interceptors and initializers.

Once created (or built), the RestClient can be used safely by multiple threads.

```java
RestClient defaultClient = RestClient.create();

RestClient customClient = RestClient.builder()
  .requestFactory(new HttpComponentsClientHttpRequestFactory())
  .messageConverters(converters -> converters.add(new MyCustomMessageConverter()))
  .baseUrl("https://example.com")
  .defaultUriVariables(Map.of("variable", "foo"))
  .defaultHeader("My-Header", "Foo")
  .defaultCookie("My-Cookie", "Bar")
  .requestInterceptor(myCustomInterceptor)
  .requestInitializer(myCustomInitializer)
  .build();
```

Using the RestClient - When making an HTTP request with the RestClient, the first thing to specify is which HTTP method to use. This can be done with method(HttpMethod) or with the convenience methods get(), head(), post(), and so on.

Request URL - Next, the request URI can be specified with the uri methods. This step is optional and can be skipped if the RestClient is configured with a default URI. The URL is typically specified as a String, with optional URI template variables. The following example configures a GET request to example.com/orders/42:

```java
int id = 42;
restClient.get()
  .uri("https://example.com/orders/{id}", id)
  ....
```

A function can also be used for more controls, such as specifying request parameters.

String URLs are encoded by default, but this can be changed by building a client with a custom uriBuilderFactory. The URL can also be provided with a function or as a java.net.URI, both of which are not encoded. For more details on working with and encoding URIs, see URI Links.

Request headers and body

**WebClient**:- WebClient is a non-blocking, reactive client to perform HTTP requests. It was introduced in 5.0 and offers an alternative to the RestTemplate, with support for synchronous, asynchronous, and streaming scenarios.

WebClient supports the following:

1. Non-blocking I/O
2. Reactive Streams back pressure
3. High concurrency with fewer hardware resources
4. Functional-style, fluent API that takes advantage of Java 8 lambdas
5. Synchronous and asynchronous interactions
6. Streaming up to or streaming down from a server

**RestTemplate**:- The RestTemplate provides a high-level API over HTTP client libraries in the form of a classic Spring Template class. It exposes the following groups of overloaded methods:
The RestClient offers a more modern API for synchronous HTTP access. For asynchronous and streaming scenarios, consider the reactive WebClient.

- getForObject - Retrieves a representation via GET.
- getForEntity - Retrieves a ResponseEntity (that is, status, headers, and body) by using GET.
- headForHeaders - Retrieves all headers for a resource by using HEAD.
- postForLocation - Creates a new resource by using POST and returns the Location header from the response.
- postForObject- Creates a new resource by using POST and returns the representation from the response.
- postForEntity - Creates a new resource by using POST and returns the representation from the response.
- put - Creates or updates a resource by using PUT.
- patchForObject - Updates a resource by using PATCH and returns the representation from the response. Note that the JDK HttpURLConnection does not support PATCH, but Apache HttpComponents and others do.
- delete - Deletes the resources at the specified URI by using DELETE.
- optionsForAllow - Retrieves allowed HTTP methods for a resource by using ALLOW.
- exchange - More generalized (and less opinionated) version of the preceding methods that provides extra flexibility when needed. It accepts a RequestEntity (including HTTP method, URL, headers, and body as input) and returns a ResponseEntity.
These methods allow the use of ParameterizedTypeReference instead of Class to specify a response type with generics.
- execute - The most generalized way to perform a request, with full control over request preparation and response extraction through callback interfaces.

Initialization - RestTemplate uses the same HTTP library abstraction as RestClient. By default, it uses the SimpleClientHttpRequestFactory, but this can be changed via the constructor.

Body - Objects passed into and returned from RestTemplate methods are converted to and from HTTP messages with the help of an HttpMessageConverter.

**HTTP Interface**:- The Spring Framework lets you define an HTTP service as a Java interface with @HttpExchange methods. You can pass such an interface to HttpServiceProxyFactory to create a proxy which performs requests through an HTTP client such as RestClient or WebClient. You can also implement the interface from an @Controller for server request handling.


------

## JMS(Java Message Service)

`The Java Messaging Service (JMS) module` contains features for producing and consuming messages.

Spring provides a JMS integration framework that simplifies the use of the JMS API in much the same way as Spring’s integration does for the JDBC API.
JMS can be roughly divided into two areas of functionality, namely the production and consumption of messages. The JmsTemplate class is used for message production and synchronous message reception. For asynchronous reception similar to Jakarta EE’s message-driven bean style, Spring provides a number of message-listener containers that you can use to create Message-Driven POJOs (MDPs). Spring also provides a declarative way to create message listeners.

`The Java Messaging Service (JMS) module` contains features for producing and consuming messages.
Synchronous communication, which is what we’ve seen with REST, has its place.Asynchronous messaging is a way of indirectly sending messages from one application to
another without waiting for a response. This indirection affords looser coupling and greater scalability between the communicating applications.

Spring offers three options that  for asynchronous messaging: 
1. The Java Message Service (JMS)
2. RabbitMQ and Advanced Message Queueing Protocol (AMQP)
3. Apache Kafka. 

In addition to the basic sending and receiving of messages, we’ll look at Spring’s support for message-driven POJOs: a way to receive messages that resembles EJB’s message-driven beans (MDBs).


**Sending messages with JMS**:- JMS is a Java standard that defines a common API for working with message brokers.
First introduced in 2001, JMS has been the go-to approach for asynchronous messaging in Java for a very long time. Before JMS, each message broker had a proprietary API, making an application’s messaging code less portable between brokers.
But with JMS, all compliant implementations can be worked with via a common interface in much the same way that JDBC has given relational database operations a common interface.

Spring supports JMS through a template-based abstraction known as JmsTemplate.Using JmsTemplate, it’s easy to send messages across queues and topics from the producer side and to receive those messages on the consumer side. Spring also supports the notion of message-driven POJOs: simple Java objects that react to messages arriving on a queue or topic in an asynchronous fashion.


With a JMS starter dependency (either Artemis or ActiveMQ) in your build, SpringBoot will autoconfigure a JmsTemplate (among other things) that you can inject and
use to send and receive messages.
JmsTemplate is the centerpiece of Spring’s JMS integration support. Much like
Spring’s other template-oriented components, JmsTemplate eliminates a lot of boiler-
plate code that would otherwise be required to work with JMS. Without JmsTemplate,
you’d need to write code to create a connection and session with the message broker,

**Messages Annotations**:- Annotations and support classes for handling messages.Found in package **org.springframework.messaging.handler.annotation**

1. @DestinationVariable - Annotation that indicates a method parameter should be bound to a template variable in a destination template string.
2. @Header - Annotation which indicates that a method parameter should be bound to a message header.
3. @Headers - Annotation which indicates that a method parameter should be bound to the headers of a message.
4. @MessageExceptionHandler - Annotation for handling exceptions thrown from message-handling methods within a specific handler class.
5. @MessageMapping - Annotation for mapping a Message onto a message-handling method by matching the declared patterns to a destination extracted from the message.
6. @MessageMappingReflectiveProcessor - ReflectiveProcessor implementation for types annotated with @MessageMapping, @SubscribeMapping and @MessageExceptionHandler.
7. @Payload - Annotation that binds a method parameter to the payload of a message.
8. @SendTo - Annotation that indicates a method's return value should be converted to a Message if necessary and sent to the specified destination.
9. @ValueConstants - Common annotation value constants.

**Kafka**:-

- `Configuring Topics`:-If you define a KafkaAdmin bean in your application context, it can automatically add topics to the broker. To do so, you can add a NewTopic @Bean for each topic to the application context.TopicBuilder class to make creation of such beans more convenient.

```java
@Bean
public KafkaAdmin admin() {
    Map<String, Object> configs = new HashMap<>();
    configs.put(AdminClientConfig.BOOTSTRAP_SERVERS_CONFIG, "localhost:9092");
    return new KafkaAdmin(configs);
}

@Bean
public NewTopic topic1() {
    return TopicBuilder.name("thing1")
            .partitions(10)
            .replicas(3)
            .compact()
            .build();
}

@Bean
public NewTopic topic2() {
    return TopicBuilder.name("thing2")
            .partitions(10)
            .replicas(3)
            .config(TopicConfig.COMPRESSION_TYPE_CONFIG, "zstd")
            .build();
}

@Bean
public NewTopic topic3() {
    return TopicBuilder.name("thing3")
            .assignReplicas(0, List.of(0, 1))
            .assignReplicas(1, List.of(1, 2))
            .assignReplicas(2, List.of(2, 0))
            .config(TopicConfig.COMPRESSION_TYPE_CONFIG, "zstd")
            .build();
}
```

Starting with version 2.6, you can omit partitions() and/or replicas() and the broker defaults will be applied to those properties. The broker version must be at least 2.4.0 to support this feature

```java
@Bean
public NewTopic topic4() {
    return TopicBuilder.name("defaultBoth")
            .build();
}

@Bean
public NewTopic topic5() {
    return TopicBuilder.name("defaultPart")
            .replicas(1)
            .build();
}

@Bean
public NewTopic topic6() {
    return TopicBuilder.name("defaultRepl")
            .partitions(3)
            .build();
}
```

Starting with version 2.7, you can declare multiple NewTopics in a single KafkaAdmin.NewTopics bean definition:

```java
@Bean
public KafkaAdmin.NewTopics topics456() {
    return new NewTopics(
            TopicBuilder.name("defaultBoth")
                .build(),
            TopicBuilder.name("defaultPart")
                .replicas(1)
                .build(),
            TopicBuilder.name("defaultRepl")
                .partitions(3)
                .build());
}
```

- `Sending Messages`:- Using KafkaTemplate - The KafkaTemplate wraps a producer and provides convenience methods to send data to Kafka topics.Kafka template is a class which spring provides to produce messages into the Kafka Topic.

The Kafka Producer is defined in Apache Kafka. The KafkaTemplate is Spring's implementation of it (although it does not implement Producer directly) and so it provides more methods for you to use. So you can use KafkaTemplate to get started or implement your own solution through implementing the Producer yourself.
There are different layers in which Kafka Template does its tasks -

1. SERLIALIZER Any record that we intend to send to the Kafka topic, needs to be serialised to bytes. ( 2 techniques involved - a) key.serializer b) value.serializer )
2. Partitioner It determines in which partition the message is going to go.
3. Record Accumulator It buffers all the records sent by Kafka template and these records only sent to the Kafka Topics when this buffer gets full.(However, linger.ms file is there where we can set the time limit)

The following listing shows the relevant methods from KafkaTemplate:-

```java
CompletableFuture<SendResult<K, V>> sendDefault(V data);

CompletableFuture<SendResult<K, V>> sendDefault(K key, V data);

CompletableFuture<SendResult<K, V>> sendDefault(Integer partition, K key, V data);

CompletableFuture<SendResult<K, V>> sendDefault(Integer partition, Long timestamp, K key, V data);

CompletableFuture<SendResult<K, V>> send(String topic, V data);

CompletableFuture<SendResult<K, V>> send(String topic, K key, V data);

CompletableFuture<SendResult<K, V>> send(String topic, Integer partition, K key, V data);

CompletableFuture<SendResult<K, V>> send(String topic, Integer partition, Long timestamp, K key, V data);

CompletableFuture<SendResult<K, V>> send(ProducerRecord<K, V> record);

CompletableFuture<SendResult<K, V>> send(Message<?> message);

Map<MetricName, ? extends Metric> metrics();

List<PartitionInfo> partitionsFor(String topic);

<T> T execute(ProducerCallback<K, V, T> callback);

<T> T executeInTransaction(OperationsCallback<K, V, T> callback);

// Flush the producer.
void flush();

interface ProducerCallback<K, V, T> {

    T doInKafka(Producer<K, V> producer);

}

interface OperationsCallback<K, V, T> {

    T doInOperations(KafkaOperations<K, V> operations);

}
```

The sendDefault API requires that a default topic has been provided to the template.

The API takes in a timestamp as a parameter and stores this timestamp in the record. How the user-provided timestamp is stored depends on the timestamp type configured on the Kafka topic. If the topic is configured to use CREATE_TIME, the user-specified timestamp is recorded (or generated if not specified). If the topic is configured to use LOG_APPEND_TIME, the user-specified timestamp ignored and the broker adds in the local broker time.

The metrics and partitionsFor methods delegate to the same methods on the underlying Producer. The execute method provides direct access to the underlying Producer.

To use the template, you can configure a producer factory and provide it in the template’s constructor. The following example shows how to do so:

```java
@Bean
public ProducerFactory<Integer, String> producerFactory() {
    return new DefaultKafkaProducerFactory<>(producerConfigs());
}

@Bean
public Map<String, Object> producerConfigs() {
    Map<String, Object> props = new HashMap<>();
    props.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, "localhost:9092");
    props.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, IntegerSerializer.class);
    props.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
    return props;
}

@Bean
public KafkaTemplate<Integer, String> kafkaTemplate() {
    return new KafkaTemplate<Integer, String>(producerFactory());
}
```

--------

## JMX(Java Management Extensions)

The JMX (Java Management Extensions) support in Spring provides features that let you easily and transparently integrate your Spring application into a JMX infrastructure.


-----------


## Task Execution and Scheduling

The Spring Framework provides abstractions for the asynchronous execution and scheduling of tasks with the TaskExecutor and TaskScheduler interfaces, respectively. Spring also features implementations of those interfaces that support thread pools or delegation to CommonJ within an application server environment. Ultimately, the use of these implementations behind the common interfaces abstracts away the differences between Java SE 5, Java SE 6, and Jakarta EE environments.



-------

## Cache Abstraction
