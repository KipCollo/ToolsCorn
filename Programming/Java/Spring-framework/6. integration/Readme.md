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


## Mail

JavaMail support for Spring's mail infrastructure. Provides an extended `JavaMailSender` interface and a `MimeMessageHelper` class for convenient population of a JavaMail MimeMessage.

The Spring Framework provides a helpful utility library for sending email that shields you from the specifics of the underlying mailing system and is responsible for low-level resource handling on behalf of the client.

The org.springframework.mail package is the root level package for the Spring Framework’s email support. The central interface for sending emails is the MailSender interface. A simple value object that encapsulates the properties of a simple mail such as from and to (plus many others) is the SimpleMailMessage class. This package also contains a hierarchy of checked exceptions that provide a higher level of abstraction over the lower level mail system exceptions, with the root exception being MailException. See the javadoc for more information on the rich mail exception hierarchy.

The org.springframework.mail.javamail.JavaMailSender interface adds specialized JavaMail features, such as MIME message support to the MailSender interface (from which it inherits). JavaMailSender also provides a callback interface called org.springframework.mail.javamail.MimeMessagePreparator for preparing a MimeMessage.

**MailSender** - This interface defines a strategy for sending simple mails. Can be implemented for a variety of mailing systems due to the simple requirements. For richer functionality like MIME messages, consider JavaMailSender.

Allows for easy testing of clients, as it does not depend on JavaMail's infrastructure classes: no mocking of JavaMail Session or Transport necessary.

Method Summary:-
1. default voidsend(SimpleMailMessage simpleMessage) - Send the given simple mail message.
2. void send(SimpleMailMessage... simpleMessages) - Send the given array of simple mail messages in batch.

**MailMessage** - This is a common interface for mail messages, allowing a user to set key values required in assembling a mail message, without needing to know if the underlying message is a simple text message or a more sophisticated MIME message.

Implemented by both `SimpleMailMessage` and `MimeMessageHelper`, to let message population code interact with a simple message or a MIME message through a common interface.

**SimpleMailMessage** - Models a simple mail message, including data such as the from, to, cc, subject, and text fields.
Consider JavaMailSender and JavaMail MimeMessages for creating more sophisticated messages, for example messages with attachments, special character encodings, or personal names that accompany mail addresses.

1. SimpleMailMessage() - Create a new SimpleMailMessage.
2. SimpleMailMessage(SimpleMailMessage original) - Copy constructor for creating a new SimpleMailMessage from the state of an existing SimpleMailMessage instance.


**JavaMailSender**  - Extended MailSender interface for JavaMail, supporting MIME messages both as direct arguments and through preparation callbacks. Typically used in conjunction with the MimeMessageHelper class for convenient creation of JavaMail MimeMessages, including attachments etc.

Clients should talk to the mail sender through this interface if they need mail functionality beyond SimpleMailMessage. The production implementation is JavaMailSenderImpl; for testing, mocks can be created based on this interface. Clients will typically receive the JavaMailSender reference through dependency injection.

The recommended way of using this interface is the MimeMessagePreparator mechanism, possibly using a MimeMessageHelper for populating the message.
The entire JavaMail Session management is abstracted by the JavaMailSender. Client code should not deal with a Session in any way, rather leave the entire JavaMail configuration and resource handling to the JavaMailSender implementation. This also increases testability.

A JavaMailSender client is not as easy to test as a plain MailSender client, but still straightforward compared to traditional JavaMail code: Just let createMimeMessage() return a plain MimeMessage created with a Session.getInstance(new Properties()) call, and check the passed-in messages in your mock implementations of the various send methods.

Method Summary:-
1. MimeMessage createMimeMessage() - Create a new JavaMail MimeMessage for the underlying JavaMail Session of this sender.
2. MimeMessage createMimeMessage(InputStream contentStream) - Create a new JavaMail MimeMessage for the underlying JavaMail Session of this sender, using the given input stream as the message source.
3. default void send(MimeMessage mimeMessage) - Send the given JavaMail MIME message.
4. void send(MimeMessage... mimeMessages) - Send the given array of JavaMail MIME messages in batch.
5. default void send(MimeMessagePreparator mimeMessagePreparator) - Send the JavaMail MIME message prepared by the given MimeMessagePreparator.
6. default void send(MimeMessagePreparator... mimeMessagePreparators) - Send the JavaMail MIME messages prepared by the given MimeMessagePreparator

**JavaMailSenderImpl** - Production implementation of the JavaMailSender interface, supporting both JavaMail MimeMessages and Spring SimpleMailMessages. Can also be used as a plain MailSender implementation.
Allows for defining all settings locally as bean properties. Alternatively, a pre-configured JavaMail Session can be specified, possibly pulled from an application server's JNDI environment.

Non-default properties in this object will always override the settings in the JavaMail Session. Note that if overriding all values locally, there is no added value in setting a pre-configured Session.

**MimeMessage** - This class represents a MIME style email message. It implements the `Message` abstract class and the `MimePart` interface.
Clients wanting to create new MIME style messages will instantiate an empty MimeMessage object and then fill it with appropriate attributes and content.

Service providers that implement MIME compliant backend stores may want to subclass MimeMessage and override certain methods to provide specific implementations. The simplest case is probably a provider that generates a MIME style input stream and leaves the parsing of the stream to this class.

MimeMessage uses the InternetHeaders class to parse and store the top level RFC 822 headers of a message.

The mail.mime.address.strict session property controls the parsing of address headers. By default, strict parsing of address headers is done. If this property is set to "false", strict parsing is not done and many illegal addresses that sometimes occur in real messages are allowed. See the InternetAddress class for details. 

**MimeMailMessage** - Implementation of the MailMessage interface for a JavaMail MIME message, to let message population code interact with a simple message or a MIME message through a common interface.

Uses a MimeMessageHelper underneath. Can either be created with a MimeMessageHelper instance or with a JavaMail MimeMessage instance.

1. MimeMailMessage(MimeMessage mimeMessage) - Create a new MimeMailMessage based on the given JavaMail MimeMessage.
2. MimeMailMessage(MimeMessageHelper mimeMessageHelper) - Create a new MimeMailMessage based on the given MimeMessageHelper.

**MimeMessagePreparator** - Callback interface for the preparation of JavaMail MIME messages.
The corresponding send methods of JavaMailSender will take care of the actual creation of a MimeMessage instance, and of proper exception conversion.

It is often convenient to use a MimeMessageHelper for populating the passed-in MimeMessage, in particular when working with attachments or special character encodings. See MimeMessageHelper's javadoc for an example.

void prepare(MimeMessage mimeMessage) - Prepare the given new MimeMessage instance.


**MimeMessageHelper** is a Helper class for populating a MimeMessage.
Mirrors the simple setters of SimpleMailMessage, directly applying the values to the underlying MimeMessage. Allows for defining a character encoding for the entire message, automatically applied by all methods of this helper class.

Offers support for HTML text content, inline elements such as images, and typical mail attachments. Also supports personal names that accompany mail addresses. Note that advanced settings can still be applied directly to the underlying MimeMessage object.

Typically used in `MimeMessagePreparator` implementations or `JavaMailSender` client code: simply instantiating it as a MimeMessage wrapper, invoking setters on the wrapper, using the underlying MimeMessage for mail sending. Also used internally by JavaMailSenderImpl.

Sample code for an HTML mail with an inline image and a PDF attachment:

```java
mailSender.send(new MimeMessagePreparator() {
   public void prepare(MimeMessage mimeMessage) throws MessagingException {
     MimeMessageHelper message = new MimeMessageHelper(mimeMessage, true, "UTF-8");
     message.setFrom("me@mail.com");
     message.setTo("you@mail.com");
     message.setSubject("my subject");
     message.setText("my text <img src='cid:myLogo'>", true);
     message.addInline("myLogo", new ClassPathResource("img/mylogo.gif"));
     message.addAttachment("myDocument.pdf", new ClassPathResource("doc/myDocument.pdf"));
   }
});
```

Consider using MimeMailMessage (which implements the common MailMessage interface, just like SimpleMailMessage) on top of this helper, in order to let message population code interact with a simple message or a MIME message through a common interface.

*Warning* regarding multipart mails: Simple MIME messages that just contain HTML text but no inline elements or attachments will work on more or less any email client that is capable of HTML rendering. However, inline elements and attachments are still a major compatibility issue between email clients: It's virtually impossible to get inline elements and attachments working across Microsoft Outlook, Lotus Notes and Mac Mail. Consider choosing a specific multipart mode for your needs: The javadoc on the MULTIPART_MODE constants contains more detailed information.

Constructor Summary:-
1. MimeMessageHelper(MimeMessage mimeMessage) - Create a new MimeMessageHelper for the given MimeMessage, assuming a simple text message (no multipart content)
2. MimeMessageHelper(MimeMessage mimeMessage, boolean multipart) - Create a new MimeMessageHelper for the given MimeMessage, in multipart mode (supporting alternative texts, inline elements and attachments) if requested.
3. MimeMessageHelper(MimeMessage mimeMessage, boolean multipart, String encoding) - Create a new MimeMessageHelper for the given MimeMessage, in multipart mode (supporting alternative texts, inline elements and attachments) if requested.
4. MimeMessageHelper(MimeMessage mimeMessage, int multipartMode) - Create a new MimeMessageHelper for the given MimeMessage, in multipart mode (supporting alternative texts, inline elements and attachments) if requested.
5. MimeMessageHelper(MimeMessage mimeMessage, int multipartMode, String encoding) - Create a new MimeMessageHelper for the given MimeMessage, in multipart mode (supporting alternative texts, inline elements and attachments) if requested.
6. MimeMessageHelper(MimeMessage mimeMessage, String encoding) - Create a new MimeMessageHelper for the given MimeMessage, assuming a simple text message (no multipart content)


```java
JavaMailSenderImpl sender = new JavaMailSenderImpl();
sender.setHost("mail.host.com");

MimeMessage message = sender.createMimeMessage();
MimeMessageHelper helper = new MimeMessageHelper(message);
helper.setTo("test@host.com");
helper.setText("Thank you for ordering!");

sender.send(message);
```

```java
@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    public void sendSimpleMail(String to, String subject, String text) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("your-email@gmail.com");
        message.setTo(to);
        message.setSubject(subject);
        message.setText(text);
        mailSender.send(message);
    }
}
```

```java
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.mail.SimpleMailMessage;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.util.Properties;

public class MailService {

    private JavaMailSenderImpl mailSender;

    public MailService() {
        mailSender = new JavaMailSenderImpl();
        mailSender.setHost("smtp.example.com");
        mailSender.setPort(587);
        mailSender.setUsername("your_email@example.com");
        mailSender.setPassword("your_password");

        Properties props = mailSender.getJavaMailProperties();
        props.put("mail.transport.protocol", "smtp");
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.debug", "true");
    }

    public void sendSimpleEmail() {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo("recipient@example.com");
        message.setSubject("Test Subject");
        message.setText("Hello, this is a plain text email!");
        message.setFrom("your_email@example.com");

        mailSender.send(message);
    }

    public void sendMimeEmail() throws MessagingException {
        MimeMessage mimeMessage = mailSender.createMimeMessage();

        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true, "UTF-8");
        helper.setFrom("your_email@example.com");
        helper.setTo("recipient@example.com");
        helper.setSubject("Test MIME Email");
        helper.setText("<h1>Hello</h1><p>This is an <b>HTML</b> email.</p>", true);

        // Optional: Add attachment or inline resource
        // helper.addAttachment("document.pdf", new File("path/to/file"));

        mailSender.send(mimeMessage);
    }
}
```

Frequently, email messages are sent by applications to users.

**Configuring Spring to send email**

At the heart of Spring’s email abstraction is the MailSender interface. As its name implies,a MailSender implementation sends email by connecting with an email server.
Spring comes with one implementation of the MailSender interface, JavaMailSenderImpl, which uses the JavaMail API to send email. Before you can send email
messages from your Spring application, you must wire JavaMailSenderImpl as a bean in the Spring application context.

`Configuring a mail sender`:- In its simplest form, JavaMailSenderImpl can be configured as a bean with only a few lines in an @Bean method:

```java
@Bean
public MailSender mailSender(Environment env) {
    JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
    mailSender.setHost(env.getProperty("mailserver.host"));
    return mailSender;
}
```

The host property is optional (it defaults to the host of the underlying JavaMail session), but you’ll probably want to set it. It specifies the hostname for the mail server
that will be used to send the email. Here it’s configured by fetching the value from the injected Environment so that you can manage the mail-server configuration outside of
Spring (for example, in a properties file).
By default, JavaMailSenderImpl assumes that the mail server is listening on port 25 (the standard SMTP port). If your mail server is listening on a different port, specify the correct port number using the port property. For example,

```java
@Bean
public MailSender mailSender(Environment env) {
JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
mailSender.setHost(env.getProperty("mailserver.host"));
mailSender.setPort(env.getProperty("mailserver.port"));
return mailSender;
}
```

`Wiring and using the mail sender`: With the mail sender configured, it’s time to wire it into the bean that will use it.

```java
@Autowired
JavaMailSender mailSender;
```


`Generating email with templates`:


----------


## Task Execution and Scheduling

The Spring Framework provides abstractions for the asynchronous execution and scheduling of tasks with the TaskExecutor and TaskScheduler interfaces, respectively. Spring also features implementations of those interfaces that support thread pools or delegation to CommonJ within an application server environment. Ultimately, the use of these implementations behind the common interfaces abstracts away the differences between Java SE 5, Java SE 6, and Jakarta EE environments.



-------

## Cache Abstraction
