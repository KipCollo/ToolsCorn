# Java Apache Kafka implementations

`package org.apache.kafka.clients.producer` - Provides a Kafka client for producing records to topics and/or partitions in a Kafka cluster.It contains the classes:-

1. KafkaProducer<K,V> - A Kafka client that publishes records to the Kafka cluster.K (Key) and V (Value) represent the data types of the message.Handles message serialization, partitioning, batching, and retries.
2. Producer<K,V> - The interface for the KafkaProducer
3. ProducerConfig - Configuration for the Kafka Producer.
4. RecordMetadata - The metadata for a record that has been acknowledged by the server
5. RoundRobinPartitioner - The "Round-Robin" partitioner This partitioning strategy can be used when user wants to distribute the writes to all partitions equally.
6. Callback - A callback interface that the user can implement to allow code to execute when the request is complete.
7. MockProducer<K,V> - A mock of the producer interface you can use for testing code that uses Kafka.
8. ProducerRecord<K,V> - A key/value pair to be sent to Kafka.
9. ProducerInterceptor<K,V> - A plugin interface that allows you to intercept (and possibly mutate) the records received by the producer before they are published to the Kafka cluster.
10. Partitioner - Partitioner Interface
11. BufferExhaustedException - This exception is thrown if the producer cannot allocate memory for a record within max.block.ms due to the buffer being too full.

- As the first step, we need to import the following classes:

```java
import kafka.javaapi.producer.Producer;
import kafka.producer.KeyedMessage;
import kafka.producer.ProducerConfig;
```

- As the next step in writing the producer, we need to define properties for making a connection with the Kafka broker and pass these properties to the Kafka producer:

```java
Properties props = new Properties();
kafkaProps.put("bootstrap.servers", "broker1:9092,broker2:9092");
kafkaProps.put("key.serializer","org.apache.kafka.common.serialization.StringSerializer");
kafkaProps.put("value.serializer","org.apache.kafka.common.serialization.StringSerializer");
props.put("request.required.acks", "1");

ProducerConfig config = new ProducerConfig(props);
Producer<String, String> producer = new Producer<String, String> (config);
```

```java

producer = new KafkaProducer<String, String>(kafkaProps);
```

The simplest way to send a message is as follows:

```java
ProducerRecord<String, String> record = new ProducerRecord<>("topic", "key","value");
   try {
      producer.send(record);
   } catch (Exception e) {
      e.printStackTrace();
}
```

The following code snippet shows how to create a new producer by setting just the mandatory parameters and using defaults for everything else:

```java
private Properties kafkaProps = new Properties();

kafkaProps.put("bootstrap.servers", "broker1:9092,broker2:9092");
kafkaProps.put("key.serializer","org.apache.kafka.common.serialization.StringSerializer");
kafkaProps.put("value.serializer","org.apache.kafka.common.serialization.StringSerializer");

producer = new KafkaProducer<String, String>(kafkaProps);
```

`Sending a Message to Kafka`:-

```java
ProducerRecord<String, String> record = new ProducerRecord<>("CustomerCountry", "Precision Products","France");
try {
   producer.send(record);
} catch (Exception e) {
   e.printStackTrace();
}
```

The producer accepts ProducerRecord objects.ProducerRecord has multiple constructors.Here we use one that requires the name of the topic we are sending data to, which is
always a string, and the key and value we are sending to Kafka, which in this case are also strings. The types of the key and value must match our serializer and
producer objects.

We use the producer object send() method to send the ProducerRecord.The message will be placed in a buffer and will be sent to the broker in a separate thread. The
send() method returns a Java Future object with RecordMetadata, but since we simply ignore the returned value, we have no way of knowing whether the message was sent successfully or not. This method of sending messages can be used when dropping a message silently is acceptable. This is not typically the case in production applications.

While we ignore errors that may occur while sending messages to Kafka brokers or in the brokers themselves, we may still get an exception if the producer
encountered errors before sending the message to Kafka. Those can be a SerializationException when it fails to serialize the message, a BufferExhaustedException or TimeoutException if the buffer is full, or an InterruptException if the sending thread was interrupted.

`Sending a Message Synchronously`

```java
ProducerRecord<String, String> record = new ProducerRecord<>("CustomerCountry", "Precision Products", "France");
try {
   producer.send(record).get();
} catch (Exception e) {
   e.printStackTrace();
}
```

Here, we are using Future.get() to wait for a reply from Kafka. This method will throw an exception if the record is not sent successfully to Kafka. If there were no errors, we will get a RecordMetadata object that we can use to retrieve the offset the message was written to.

If there were any errors before sending data to Kafka, while sending, if the Kafka brokers returned a nonretriable exceptions or if we exhausted the available
retries, we will encounter an exception. In this case, we just print any exception we ran into.

KafkaProducer has two types of errors. Retriable errors are those that can be resolved by sending the message again. For example, a connection error can be resolved
because the connection may get reestablished. A “no leader” error can be resolved when a new leader is elected for the partition. KafkaProducer can be configured to
retry those errors automatically, so the application code will get retriable exceptions only when the number of retries was exhausted and the error was not resolved. Some
errors will not be resolved by retrying. For example, “message size too large.” In those cases, KafkaProducer will not attempt a retry and will return the exception immediately.

`Sending a Message Asynchronously`:- In order to send messages asynchronously and still handle error scenarios, the producer supports adding a callback when sending a record.

```java
private class DemoProducerCallback implements Callback {

   @Override
   public void onCompletion(RecordMetadata recordMetadata, Exception e) {
      if (e != null) {
         e.printStackTrace();
      }
   }
}

ProducerRecord<String, String> record = new ProducerRecord<>("CustomerCountry", "Biomedical Materials", "USA");
producer.send(record, new DemoProducerCallback());
```

To use callbacks, you need a class that implements the org.apache.kafka.clients.producer.Callback interface, which has a single function—onCompletion().

If Kafka returned an error, onCompletion() will have a nonnull exception. Here we “handle” it by printing, but production code will probably have more robust
error handling functions.

`Kafka consumers`:-

The following code snippet shows how to create a KafkaConsumer:

```java
Properties props = new Properties();
props.put("bootstrap.servers", "broker1:9092,broker2:9092");
props.put("group.id", "CountryCounter");
props.put("key.deserializer","org.apache.kafka.common.serialization.StringDeserializer");
props.put("value.deserializer","org.apache.kafka.common.serialization.StringDeserializer");
KafkaConsumer<String, String> consumer = new KafkaConsumer<String,String>(props);
```

```java
consumer.subscribe(Collections.singletonList("customerCountries"));
```

To subscribe to all test topics, we can call:

```java
consumer.subscribe("test.*");
```
