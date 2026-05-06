# Spring for Apache Kafka

The Spring for Apache Kafka (spring-kafka) project applies core Spring concepts to the development of Kafka-based messaging solutions. It provides a "template" as a high-level abstraction for sending messages. It also provides support for Message-driven POJOs with @KafkaListener annotations and a "listener container". These libraries promote the use of dependency injection and declarative. In all of these cases, you will see similarities to the JMS support in the Spring Framework and RabbitMQ support in Spring AMQP.

The Spring for Apache Kafka project applies core Spring concepts to the development of Kafka-based messaging solutions. We provide a “template” as a high-level abstraction for sending messages. We also provide support for Message-driven POJOs.

Prerequisites: You must install and run Apache Kafka. Then you must put the Spring for Apache Kafka (spring-kafka) JAR and all of its dependencies on your classpath. The easiest way to do that is to declare a dependency in your build tool.

If you are not using Spring Boot, declare the spring-kafka jar as a dependency in your project.

```xml
<dependency>
  <groupId>org.springframework.kafka</groupId>
  <artifactId>spring-kafka</artifactId>
  <version>3.3.4</version>
</dependency>
```

When using Spring Boot, (and you haven’t used start.spring.io to create your project), omit the version and Boot will automatically bring in the correct version that is compatible with your Boot version.

## Topics

- `Configuring Topics[SPRING]`:-If you define a KafkaAdmin bean in your application context, it can automatically add topics to the broker. To do so, you can add a NewTopic @Bean for each topic to the application context.TopicBuilder class to make creation of such beans more convenient.

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

- `Configuring Topics[SPRING BOOT]`:-When using Spring Boot, a KafkaAdmin bean is automatically registered so you only need the NewTopic (and/or NewTopics) @Beans.

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


## Producers

spring.kafka.producer.acks - Number of acknowledgments the producer requires the leader to have received before considering a request complete.
spring.kafka.producer.batch-size - Default batch size. A small batch size will make batching less common and may reduce throughput (a batch size of zero disables batching entirely).
spring.kafka.producer.bootstrap-servers - Comma-delimited list of host:port pairs to use for establishing the initial connections to the Kafka cluster. Overrides the global property, for producers.
spring.kafka.producer.buffer-memory - Total memory size the producer can use to buffer records waiting to be sent to the server.
spring.kafka.producer.client-id - ID to pass to the server when making requests. Used for server-side logging.
spring.kafka.producer.compression-type - Compression type for all data generated by the producer.
spring.kafka.producer.key-serializer - Serializer class for keys.
spring.kafka.producer.properties.* - Additional producer-specific properties used to configure the client.
spring.kafka.producer.retries - When greater than zero, enables retrying of failed sends.
spring.kafka.producer.ssl.key-password - Password of the private key in the key store file.
spring.kafka.producer.ssl.key-store-location - Location of the key store file.
spring.kafka.producer.ssl.key-store-password - Store password for the key store file.
spring.kafka.producer.ssl.key-store-type - Type of the key store.
spring.kafka.producer.ssl.protocol - SSL protocol to use.
spring.kafka.producer.ssl.trust-store-location - Location of the trust store file.
spring.kafka.producer.ssl.trust-store-password - Store password for the trust store file.
spring.kafka.producer.ssl.trust-store-type - Type of the trust store.
spring.kafka.producer.transaction-id-prefix - When non empty, enables transaction support for producer.
spring.kafka.producer.value-serializer - Serializer class for values.

```java
spring.kafka.producer.bootsrap-servers=localhost:9092
spring.kafka.producer.key-serializer=org.apache.kafka.common.serialization.StringSerializer
spring.kafka.producer.value-serializer=org.apache.kafka.common.serialization.StringSerializer
spring.kafka.producer.value-serializer=org.springframework.kafka.support.serializer.JsonSerializer//for JSON serialization
```

Kafka's producer system in Spring Boot is built on top of Kafka's native Producer API and integrates seamlessly with Spring’s dependency injection and auto-configuration.

- At the lowest level, Kafka provides a Producer<K, V> interface, which defines the contract for all producer implementations. This is a general interface that allows different implementations of producers.This interface ensures that any class implementing it must provide methods for:
    1. Sending messages (send): Asynchronously sends data to Kafka.
    2. Flushing (flush): Ensures all messages in memory are delivered.
    3. Closing (close): Releases resources used by the producer.

- KafkaProducer<K, V> is Kafka's default implementation of the Producer<K, V> interface. It handles:
    1. Message batching
    2. Retries on failure
    3. Acknowledgment from Kafka brokers
    4. Partitioning logic (how data is distributed across partitions)

- `Sending Messages`:- Using KafkaTemplate - The KafkaTemplate wraps a producer and provides convenience methods to send data to Kafka topics. The following listing shows the relevant methods from KafkaTemplate

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

- Spring Boot simplifies Kafka producer configuration and interaction through Spring Kafka, which provides high-level abstractions.
- `Sending Messages`:- Using KafkaTemplate - The KafkaTemplate wraps a producer and provides convenience methods to send data to Kafka topics.Kafka template is a class which spring provides to produce messages into the Kafka Topic.

```java
private KafkaTemplate<String,String> kafkaTemplate;

public void sendMessage(String message){
    kafkaTemplate.send("TopicName",message);
}
```

```java
@Getter
@Setter
public class Student{
    private int id;
    private String name;
}
```

```java
private KafkaTemplate<String,Student> kafkaTemplate;

public void sendJsonMessage(Student student){
    Message<Student> message = MessageBuilder
                                    .withPayload(student)
                                    .setHeader(KafkaHeaders.TOPIC,"TopicName")
                                    .build();
    kafkaTemplate.send(message);
}
```

```java
private final KafkaProducer kafkaProducer;

@PostMapping("/publish")
public ResponseEntity<String> publish(@RequestBody String message){
    kafkaProducer.sendMessage(message)
}

@PostMapping("/publish/json")
public ResponseEntity<String> publishJson(@RequestBody Student student){
    kafkaProducer.sendMessage(message)
}
```


## Consumers

spring.kafka.consumer.auto-commit-interval - Frequency with which the consumer offsets are auto-committed to Kafka if 'enable.auto.commit' is set to true.
spring.kafka.consumer.auto-offset-reset - What to do when there is no initial offset in Kafka or if the current offset no longer exists on the server.
spring.kafka.consumer.bootstrap-servers - Comma-delimited list of host:port pairs to use for establishing the initial connections to the Kafka cluster. Overrides the global property, for consumers.
spring.kafka.consumer.client-id - ID to pass to the server when making requests. Used for server-side logging.
spring.kafka.consumer.enable-auto-commit - Whether the consumer's offset is periodically committed in the background.
spring.kafka.consumer.fetch-max-wait - Maximum amount of time the server blocks before answering the fetch request if there isn't sufficient data to immediately satisfy the requirement given by "fetch-min-size".
spring.kafka.consumer.fetch-min-size - Minimum amount of data the server should return for a fetch request.
spring.kafka.consumer.group-id - Unique string that identifies the consumer group to which this consumer belongs.
spring.kafka.consumer.heartbeat-interval - Expected time between heartbeats to the consumer coordinator.
spring.kafka.consumer.isolation-level - Isolation level for reading messages that have been written transactionally.
spring.kafka.consumer.key-deserializer- Deserializer class for keys.
spring.kafka.consumer.max-poll-records - Maximum number of records returned in a single call to poll().
spring.kafka.consumer.properties.* - Additional consumer-specific properties used to configure the client.
spring.kafka.consumer.ssl.key-password - Password of the private key in the key store file.
spring.kafka.consumer.ssl.key-store-location - Location of the key store file.
spring.kafka.consumer.ssl.key-store-password - Store password for the key store file.
spring.kafka.consumer.ssl.key-store-type - Type of the key store.
spring.kafka.consumer.ssl.protocol - SSL protocol to use.
spring.kafka.consumer.ssl.trust-store-location - Location of the trust store file.
spring.kafka.consumer.ssl.trust-store-password - Store password for the trust store file.
spring.kafka.consumer.ssl.trust-store-type - Type of the trust store.
spring.kafka.consumer.value-deserializer - Deserializer class for values.

```java
spring.kafka.consumer.bootsrap-servers=localhost:9092
spring.kafka.consumer.group-id=myGroup
spring.kafka.consumer.auto-offset-reset=earliest
spring.kafka.consumer.key-deserializer=org.apache.kafka.common.serialization.StringDeserializer
spring.kafka.consumer.value-deserializer=org.apache.kafka.common.serialization.StringDeserializer
spring.kafka.consumer-serializer=org.springframework.kafka.support.serializer.JsonDeserializer//for JSON Deserialization
spring.kafka.consumer.properties=spring.json.trusted.packages='*'
```

This mechanism requires an @EnableKafka annotation on one of your @Configuration classes and a listener container factory, which is used to configure the underlying ConcurrentMessageListenerContainer. By default, a bean with name kafkaListenerContainerFactory is expected.
The following example shows how to use ConcurrentMessageListenerContainer:

```java
@Configuration
@EnableKafka
public class KafkaConfig {

    @Bean
    KafkaListenerContainerFactory<ConcurrentMessageListenerContainer<Integer, String>>
                        kafkaListenerContainerFactory() {
        ConcurrentKafkaListenerContainerFactory<Integer, String> factory =
                                new ConcurrentKafkaListenerContainerFactory<>();
        factory.setConsumerFactory(consumerFactory());
        factory.setConcurrency(3);
        factory.getContainerProperties().setPollTimeout(3000);
        return factory;
    }

    @Bean
    public ConsumerFactory<Integer, String> consumerFactory() {
        return new DefaultKafkaConsumerFactory<>(consumerConfigs());
    }

    @Bean
    public Map<String, Object> consumerConfigs() {
        Map<String, Object> props = new HashMap<>();
        props.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, "localhost:9092");
        ...
        return props;
    }
}
```

- `@KafkaListener Annotation`:- The @KafkaListener annotation is used to designate a bean method as a listener for a listener container. The bean is wrapped in a MessagingMessageListenerAdapter configured with various features, such as converters to convert the data, if necessary, to match the method parameters.

You can configure most attributes on the annotation with SpEL by using #{…​} or property placeholders (${…​}).
Record Listeners - The @KafkaListener annotation provides a mechanism for simple POJO listeners.

```java
public class Listener {

    @KafkaListener(id = "foo", topics = "myTopic", clientIdPrefix = "myClientId")
    public void listen(String data) {
        ...
    }

    @KafkaListener(id = "foo", topics = "myTopic")
    public void listen(Student student) {
        ...
    }
}
```

## Props

1. spring.kafka.admin.client-id |  | ID to pass to the server when making requests. Used for server-side logging.
2. spring.kafka.admin.fail-fast | false | Whether to fail fast if the broker is not available on startup.
3. spring.kafka.admin.properties.* |  | Additional admin-specific properties used to configure the client.
4. spring.kafka.admin.ssl.key-password |  | Password of the private key in the key store file.
5. spring.kafka.admin.ssl.key-store-location |  | Location of the key store file.
6. spring.kafka.admin.ssl.key-store-password |  | Store password for the key store file.
7. spring.kafka.admin.ssl.key-store-type |  | Type of the key store.
8. spring.kafka.admin.ssl.protocol |  | SSL protocol to use.
9. spring.kafka.admin.ssl.trust-store-location |  | Location of the trust store file.
10. spring.kafka.admin.ssl.trust-store-password |  | Store password for the trust store file.
11. spring.kafka.admin.ssl.trust-store-type |  | Type of the trust store.
12. spring.kafka.bootstrap-servers |  | Comma-delimited list of host:port pairs to use for establishing the initial connections to the Kafka cluster. Applies to all components unless overridden.
13. spring.kafka.client-id |  | ID to pass to the server when making requests. Used for server-side logging.
14. spring.kafka.consumer.auto-commit-interval |  | Frequency with which the consumer offsets are auto-committed to Kafka if 'enable.auto.commit' is set to true.
15. spring.kafka.consumer.auto-offset-reset |  | What to do when there is no initial offset in Kafka or if the current offset no longer exists on the server.
16. spring.kafka.consumer.bootstrap-servers |  | Comma-delimited list of host:port pairs to use for establishing the initial connections to the Kafka cluster. Overrides the global property, for consumers.
17. spring.kafka.consumer.client-id |  | ID to pass to the server when making requests. Used for server-side logging.
18. spring.kafka.consumer.enable-auto-commit |  | Whether the consumer's offset is periodically committed in the background.
19. spring.kafka.consumer.fetch-max-wait |  | Maximum amount of time the server blocks before answering the fetch request if there isn't sufficient data to immediately satisfy the requirement given by "fetch-min-size".
20. spring.kafka.consumer.fetch-min-size |  | Minimum amount of data the server should return for a fetch request.
21. spring.kafka.consumer.group-id |  | Unique string that identifies the consumer group to which this consumer belongs.
22. spring.kafka.consumer.heartbeat-interval |  | Expected time between heartbeats to the consumer coordinator.
23. spring.kafka.consumer.isolation-level |  | Isolation level for reading messages that have been written transactionally.
24. spring.kafka.consumer.key-deserializer |  | Deserializer class for keys.
25. spring.kafka.consumer.max-poll-records |  | Maximum number of records returned in a single call to poll().
26. spring.kafka.consumer.properties.* |  | Additional consumer-specific properties used to configure the client.
27. spring.kafka.consumer.ssl.key-password |  | Password of the private key in the key store file.
28. spring.kafka.consumer.ssl.key-store-location |  | Location of the key store file.
29. spring.kafka.consumer.ssl.key-store-password |  | Store password for the key store file.
30. spring.kafka.consumer.ssl.key-store-type |  | Type of the key store.
31. spring.kafka.consumer.ssl.protocol |  | SSL protocol to use.
32. spring.kafka.consumer.ssl.trust-store-location |  | Location of the trust store file.
33. spring.kafka.consumer.ssl.trust-store-password |  | Store password for the trust store file.
34. spring.kafka.consumer.ssl.trust-store-type |  | Type of the trust store.
35. spring.kafka.consumer.value-deserializer |  | Deserializer class for values.
36. spring.kafka.jaas.control-flag | required | Control flag for login configuration.
37. spring.kafka.jaas.enabled | false | Whether to enable JAAS configuration.
38. spring.kafka.jaas.login-module | com.sun.security.auth.module.Krb5LoginModule | Login module.
39. spring.kafka.jaas.options.* |  | Additional JAAS options.
40. spring.kafka.listener.ack-count |  | Number of records between offset commits when ackMode is "COUNT" or "COUNT_TIME".
41. spring.kafka.listener.ack-mode |  | Listener AckMode. See the  | spring-kafka documentation.
42. spring.kafka.listener.ack-time |  | Time between offset commits when ackMode is "TIME" or "COUNT_TIME".
43. spring.kafka.listener.client-id |  | Prefix for the listener's consumer client.id property.
44. spring.kafka.listener.concurrency |  | Number of threads to run in the listener containers.
45. spring.kafka.listener.idle-event-interval |  | Time between publishing idle consumer events (no data received).
46. spring.kafka.listener.log-container-config |  | Whether to log the container configuration during initialization (INFO level).
47. spring.kafka.listener.missing-topics-fatal | true | Whether the container should fail to start if at least one of the configured topics are not present on the broker.
48. spring.kafka.listener.monitor-interval |  | Time between checks for non-responsive consumers. If a duration suffix is not specified, seconds will be used.
49. spring.kafka.listener.no-poll-threshold |  | Multiplier applied to "pollTimeout" to determine if a consumer is non-responsive.
50. spring.kafka.listener.poll-timeout |  | Timeout to use when polling the consumer.
51. spring.kafka.listener.type | single | Listener type.
52. spring.kafka.producer.acks |  | Number of acknowledgments the producer requires the leader to have received before considering a request complete.
53. spring.kafka.producer.batch-size |  | Default batch size. A small batch size will make batching less common and may reduce throughput (a batch size of zero disables batching entirely).
54. spring.kafka.producer.bootstrap-servers |  | Comma-delimited list of host:port pairs to use for establishing the initial connections to the Kafka cluster. Overrides the global property, for producers.
55. spring.kafka.producer.buffer-memory |  | Total memory size the producer can use to buffer records waiting to be sent to the server.
56. spring.kafka.producer.client-id |  | ID to pass to the server when making requests. Used for server-side logging.
57. spring.kafka.producer.compression-type |  | Compression type for all data generated by the producer.
58. spring.kafka.producer.key-serializer |  | Serializer class for keys.
59. spring.kafka.producer.properties.* |  | Additional producer-specific properties used to configure the client.
60. spring.kafka.producer.retries |  | When greater than zero, enables retrying of failed sends.
61. spring.kafka.producer.ssl.key-password |  | Password of the private key in the key store file.
62. spring.kafka.producer.ssl.key-store-location |  | Location of the key store file.
63. spring.kafka.producer.ssl.key-store-password |  | Store password for the key store file.
64. spring.kafka.producer.ssl.key-store-type |  | Type of the key store.
65. spring.kafka.producer.ssl.protocol |  | SSL protocol to use.
66. spring.kafka.producer.ssl.trust-store-location |  | Location of the trust store file.
67. spring.kafka.producer.ssl.trust-store-password |  | Store password for the trust store file.
68. spring.kafka.producer.ssl.trust-store-type |  | Type of the trust store.
69. spring.kafka.producer.transaction-id-prefix |  | When non empty, enables transaction support for producer.
70. spring.kafka.producer.value-serializer |  | Serializer class for values.
71. spring.kafka.properties.* |  | Additional properties, common to producers and consumers, used to configure the client.
72. spring.kafka.ssl.key-password |  | Password of the private key in the key store file.
73. spring.kafka.ssl.key-store-location |  | Location of the key store file.
74. spring.kafka.ssl.key-store-password |  | Store password for the key store file.
75. spring.kafka.ssl.key-store-type |  | Type of the key store.
76. spring.kafka.ssl.protocol |  | SSL protocol to use.
77. spring.kafka.ssl.trust-store-location |  | Location of the trust store file.
78. spring.kafka.ssl.trust-store-password |  | Store password for the trust store file.
79. spring.kafka.ssl.trust-store-type |  | Type of the trust store.
80. spring.kafka.streams.application-id |  | Kafka streams application.id property; default  | spring.application.name.
81. spring.kafka.streams.auto-startup | true | Whether or not to auto-start the streams factory bean.
82. spring.kafka.streams.bootstrap-servers |  | Comma-delimited list of host:port pairs to use for establishing the initial connections to the Kafka cluster. Overrides the global property, for streams. | 
83. spring.kafka.streams.cache-max-size-buffering |  | Maximum memory size to be used for buffering across all threads.
84. spring.kafka.streams.client-id |  | ID to pass to the server when making requests. Used for server-side logging.
85. spring.kafka.streams.properties.* |  | Additional Kafka properties used to configure the streams.
86. spring.kafka.streams.replication-factor |  | The replication factor for change log topics and repartition topics created by the stream processing application. |
87. spring.kafka.streams.ssl.key-password |  | Password of the private key in the key store file.
88. spring.kafka.streams.ssl.key-store-location |  | Location of the key store file.
89. spring.kafka.streams.ssl.key-store-password |  | Store password for the key store file.
90. spring.kafka.streams.ssl.key-store-type |  | Type of the key store.
91. spring.kafka.streams.ssl.protocol |  | SSL protocol to use.
92. spring.kafka.streams.ssl.trust-store-location |  | Location of the trust store file.
93. spring.kafka.streams.ssl.trust-store-password |  | Store password for the trust store file.
94. spring.kafka.streams.ssl.trust-store-type |  | Type of the trust store.
95. spring.kafka.streams.state-dir |  | Directory location for the state store.
96. spring.kafka.template.default-topic |  | Default topic to which messages are sent.
