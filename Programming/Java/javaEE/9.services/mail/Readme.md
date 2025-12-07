# JavaMail

The JavaMail API is programming interface that makes it easy for java developers to write code that automatically sends an email.
It depends on another API known as JavaBeans Activation Framework(JAF) API.

mail.jar - Contains Java classes for the JavaMail API.
activation.jar - Contains the Java classes for JavaBean Activation Framework.These classes are necessary for the JavaMail API to run.


## How Mails work

Mail client software such as Outlook or Eudora allows you to send and retrieve messages.This software communiactes with the mail server software that actually sends and retrieves your email.Mail server software is provided by your Internet Service Provider(ISP) or through your company.

The SMTP protocol is commonly used to send email messages.When you send an email message,the message is first sent from mail client software on your computer to your email server using SMTP protocol.Then, your mail server uses SMTP to send the mail to the recipient's mail server.Finally, the recipient's mail client uses the POP protocol or IMAP protocol to retrieve the mail from recipient's mail server.

There is also MIME protocol,It isn't used to transfer email messages.Instead, it defines how the content of an email message and its attachments are formatted.

- Protocols for sending and retrieving email messages:-
    1. `SMTP(Simple Mail Transfer Protocol)` used to send a message from one mail server to another.
    2. `POP(Post office Protocol)` used to retrieve messages from a mail server.This protocol transfers all messages from mail server to mail client.Currently, POP is version 3 and is known as POP3
    3. `IMAP(Internet Message Access Protocol)` is used by web-based services such as Yahoo,Gmail and Hotmail.It allows a web browser to read messages stored on mail server.

- `MIME(Multipurpose Internet Message Extension)` type specifies the type of content that can be sent as a message or attachment.

## JavaMail API

The JavaMail API provides a set of abstract classes defining objects that comprise a mail system. The API defines classes like Message, Store and Transport. The API can be extended and can be subclassed to provide new protocols and to add functionality when necessary.

In addition, the API provides concrete subclasses of the abstract classes. These subclasses,including MimeMessage and MimeBodyPart, implement widely used Internet mail protocols and conform to specifications RFC822 and RFC2045. They are ready to be used in application development.

The JavaMailTM API provides classes that model a mail system.

1. The `javax.mail` package defines classes that are common to all mail systems.General email-handling classes(protocol handling,authentication,sending/receiving).It's key classes are:-
   1. Session - Manages configuration for connecting to mail server.
   2. Message - Represents the email message.
   3. Transport - Handles sending emails.
   4. Store - Used for retrieving emails.

2. The `javax.mail.internet` package defines classes that are specific to mail systems based on internet standards such as MIME, SMTP, POP3, and IMAP.Provide advanced internet email features.(MIME,HTML,attachments) to send an email across the Internet.
   1. MimeMessage - A subclass of Message that supports rich content like HTML and attachments.
   2. InternetAddress - Helps manage email addresses.
   3. MimeBodyPart and MimeMultipart - Enable you to build emails parts(texts + attachments).

- The JavaMail API is designed to serve several audiences:
   1. Client, server, or middleware developers interested in building mail and messaging applications using the Java programming language.
   2. Application developers who need to “mail-enable” their applications.
   3. Service Providers who need to implement specific access and transfer protocols. For example; a telecommunications company can use the JavaMail API to implement a PAGER Transport protocol that sends mail messages to alphanumeric pagers.

`java.util` - Contains the Properties class that's used to set the properties for the email session.

## Goals and Design Principles

The JavaMail API is designed to make adding electronic mail capability to simple applications easy, while also supporting the creation of sophisticated user interfaces. It includes appropriate convenience classes which encapsulate common mail functions and protocols. It fits with other packages for the Java platform in order to facilitate its use with other Java APIs, and it uses familiar programming models.
The JavaMail API is therefore designed to satisfy the following development and runtime requirements:

- Simple, straightforward class design is easy for a developer to learn and implement.
- Use of familiar concepts and programming models support code development that interfaces well with other Java APIs.
    1. Uses familiar exception-handling and JDK 1.1 event-handling programming models.
    2. Uses features from the JavaBeans Activation Framework (JAF) to handle access to data based on data-type and to facilitate the addition of data types and commands on
those data types. The JavaMail API provides convenience functions to simplify these coding tasks.
- Lightweight classes and interfaces make it easy to add basic mail-handling tasks to any application.
- Supports the development of robust mail-enabled applications, that can handle a variety of complex mail message formats, data types, and access and transport protocols.

The JavaMail API draws heavily from IMAP, MAPI, CMC, c-client and other messaging system APIs: many of the concepts present in these other systems are also present in the
JavaMail API. It is simpler to use because it uses features of the Java programming language not available to these other APIs, and because it uses the Java programming language’s object
model to shelter applications from implementation complexity.

The JavaMail API design is driven by the needs of the applications it supports—but it is also important to consider the needs of API implementors. It is critically important to enable the
implementation of messaging systems written using the Java programming language that interoperate with existing messaging systems—especially Internet mail. It is also important to
anticipate the development of new messaging systems. The JavaMail API conforms to current standards while not being so constrained by current standards that it stifles future innovation.

## Architectural Overview

JavaMail provides elements that are used to construct an interface to a messaging system, including system components and interfaces. While this specification does not define any specific implementation, JavaMail does include several classes that implement RFC822 and MIME Internet messaging standards. These classes are delivered as part of the JavaMail class package.

The JavaMail architectural components are layered as:

1. The Abstract Layer declares classes, interfaces and abstract methods intended to support mail handling functions that all mail systems support. API elements comprising the Abstract Layer are intended to be subclassed and extended as necessary in order to support standard data types, and to interface with message access and message transport protocols as necessary.It defines what should be done, not how to do it.Developers can extend or implement these to work with any email system.
2. The internet implementation layer implements part of the abstract layer using internet standards - RFC822 and MIME.RFC 822 = rules for email format (headers like To, From, Subject),MIME = rules for attachments, images, HTML in email.
3. JavaMail uses the JavaBeans Activation Framework (JAF) in order to encapsulate message data, and to handle commands intended to interact with that data. Interaction with message data should take place via JAF-aware JavaBeans, which are not provided by the JavaMail API.JAF lets Java understand what to do with content like: .txt → Show text, .jpg → Show image, .pdf → Open or attachJAF uses JavaBeans that are specially built to understand and display this content.

JavaMail clients use the JavaMail API and Service Providers implement the JavaMail API.The layered design architecture allows clients to use the same JavaMail API calls to send,receive and store a variety of messages using different data-types from different message stores and using different message transport protocols.These are plug-ins or drivers that do the actual work of sending and receiving email.For example: SMTP provider → sends email, IMAP or POP3 provider → reads email from a server. You can switch between providers and still use the same Jakarta Mail API.

Message----->Transport-------->Network Infrastructure------->Store---------->Folders-------->Message

- `The JavaMail Framework`:-The JavaMail API is intended to perform the following functions, which comprise the standard mail handling process for a typical client application:

1. Create a mail message consisting of a collection of header attributes and a block of data of some known data type as specified in the Content-Type header field. JavaMail uses the Part interface and the Message class to define a mail message. It uses the JAF defined DataHandler object to contain data placed in the message.
2. Create a Session object, which authenticates the user, and controls access to the message store and transport.
3. Send the message to its recipient list.
4. Retrieve a message from a message store.
5. Execute a high-level command on a retrieved message. High-level commands like view and print are intended to be implemented via JAF-Aware JavaBeans.

Note – The JavaMail framework does not define mechanisms that support message delivery,security, disconnected operation, directory services or filter functionality.

- **Major JavaMail API Components**:- Major components comprising the JavaMail architecture.

1. `The Message Class`:- The Message class is an abstract class that defines a set of attributes and a content for a mail message. Attributes of the Message class specify addressing information and define the structure of the content, including the content type. The content is represented as a DataHandler object that wraps around the actual data.
The Message class implements the `Part interface`. The Part interface defines attributes that are required to define and format data content carried by a Message object, and to interface successfully to a mail system. The Message class adds From, To, Subject,Reply-To, and other attributes necessary for message routing via a message transport system. When contained in a folder, a Message object has a set of flags associated with it.JavaMail provides Message subclasses that support specific messaging implementations.
 The content of a message is a collection of bytes, or a reference to a collection of bytes,encapsulated within a Message object. JavaMail has no knowledge of the data type or format of the message content. A Message object interacts with its content through an intermediate layer—the JavaBeans Activation Framework (JAF). This separation allows a Message object to handle any arbitrary content and to transmit it using any appropriate transmission protocol by using calls to the same API methods. The message recipient usually knows the content data type and format and knows how to handle that content.The JavaMail API also supports multipart Message objects, where each Bodypart defines its own set of attributes and content.
The JavaMail API also supports multipart Message objects, where each Bodypart defines its own set of attributes and content

2. `Message Storage and Retrieval`:- Messages are stored in Folder objects. A Folder object can contain subfolders as well as messages, thus providing a tree-like folder hierarchy. The Folder class declares methods that fetch, append, copy and delete messages. A Folder object can also send events to components registered as event listeners.
 The Store class defines a database that holds a folder hierarchy together with its messages.The Store class also specifies the access protocol that accesses folders and retrieves messages stored in folders. The Store class also provides methods to establish a connection to the database, to fetch folders and to close a connection. Service providers implementing Message Access protocols (IMAP4, POP3, etc.) start off by subclassing the Store class. A user typically starts a session with the mail system by connecting to a particular Store implementation.

3. `Message Composition and Transport`:- A client creates a new message by instantiating an appropriate Message subclass. It sets attributes like the recipient addresses and the subject, and inserts the content into the Message object. Finally, it sends the Message by invoking the Transport.send method.
The Transport class models the transport agent that routes a message to its destination addresses. This class provides methods that send a message to a list of recipients. Invoking the Transport.send method with a Message object identifies the appropriate transport based on its destination addresses.

4. `The Session Class`:- The Session class defines global and per-user mail-related properties that define the interface between a mail-enabled client and the network. JavaMail system components use the Session object to set and get specific properties. The Session class also provides a default authenticated session object that desktop applications can share. The Session class is a final concrete class. It cannot be subclassed.
The Session class also acts as a factory for Store and Transport objects that implement specific access and transport protocols. By calling the appropriate factory method on a Session object, the client can obtain Store and Transport objects that support specific protocols.

- **The JavaMail Event Model**:- The JavaMail event model conforms to the JDK 1.1 event-model specification, as described in the JavaBeans Specification. The JavaMail API follows the design patterns defined in the JavaBeans Specification for naming events, event methods and event listener registration.
All events are subclassed from the MailEvent class. Clients listen for specific events by registering themselves as listeners for those events. Events notify listeners of state changes as a session progresses. During a session, a JavaMail component generates a specific event-type to notify objects registered as listeners for that event-type. The JavaMail Store, Folder,and Transport classes are event sources. This specification describes each specific event in the section that describes the class that generates that event.

## Basic Workflow

1. Set Up Mail Server Properties:- Configure settings such as SMTP server address,port and whether to use authentication
2. Create a session:- This is your connection context to the mail server.It includes your credentials and configuration properties.
3. Build The Email Message:- Construct your email.You can set the sender,recipient,subject and content(plain text or HTML)
4. Send the email:- Use Transport class to send message through configured SMTP server.

```java
import java.util.Properties;
import javax.mail.*;
import javax.mail.internet.*;

public class SimpleEmailSender {
    public static void main(String[] args) {
        // Step 1: Configure the mail server properties
        Properties props = new Properties();
        props.put("mail.smtp.host", "smtp.gmail.com"); // Your SMTP server
        props.put("mail.smtp.port", "587"); // Port for TLS
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true"); // Enable TLS

        // Step 2: Create a Session with authentication
        Session session = Session.getInstance(props, new Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication("your_email@gmail.com", "your_app_password");
            }
        });
        try {
            // Step 3: Create the email message using MimeMessage
            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress("your_email@gmail.com"));
            message.setRecipients(Message.RecipientType.TO, InternetAddress.parse("recipient@example.com"));
            message.setSubject("Hello from JavaMail API");
            message.setText("This is a simple email sent using JavaMail API.");

            // Step 4: Send the message
            Transport.send(message);
            System.out.println("Email sent successfully!");
        } catch (MessagingException e) {
            e.printStackTrace();
        }
    }
}

```


## Mail Session

The `Session class(public final class Session)` represents a mail session and is not subclassed. It collects together properties and defaults used by the mail API's. A single default session can be shared by multiple applications on the desktop. Unshared sessions can also be created.

A mail Session object manages the configuration options and user authentication information used to interact with messaging systems.
Each javamail.X resource file is searched for using three methods in the following order:
- java. home/conf/ javamail.X
- META-INF/ javamail.X
- META-INF/ javamail. default.X

The JavaMail API supports simultaneous multiple sessions. Each session can access multiple message stores and transports. Any desktop application that needs to access the current primary message store can share the default session. Typically the mail-enabled application establishes the default session, which initializes the authentication information necessary to access the user’s Inbox folder. Other desktop applications then use the default session when sending or accessing mail on behalf of the user. When sharing the session object, all applications share authentication information, properties, and the rest of the state of the object.

To create a mail session,you can call the `getDefaultInstance` method of Session class to get a Session object that has all default settings for a mail session.
After creating session object,you can use setDebug method of Session object to turn on debugging for the session.As a result,the Session object will print debugging information to the console.

Before you create a mail session,you need to create a `Properties` object that contains any properties that session needs to send or receive mail.A Properties object stores a list of properties where each property has a name,which is often referred to as a key, and a value.To specify properties for a mail session,you can use the put method of Properties class to define any of standard properties available in JavaMail API.


```java
Session session = Session.getInstance(props, authenticator);//To create a Session using a static factory method:
Session defaultSession =Session.getDefaultInstance(props, authenticator); //To create the default shared session, or to access the default shared session:
```


The JavaMail API supports the following standard properties, which may be set in the Session object, or in the Properties object used to create the Session object. The properties are always set as strings; the Type column describes how the string is interpreted. For example, use to set the mail.debug property, which is of type boolean.

```java
props.put("mail.debug", "true");
```


1. mail.debug -	boolean - The initial debug mode. Default is false.
2. mail.from - String -	The return email address of the current user, used by the InternetAddress method getLocalAddress.
3. mail.mime.address.strict - boolean - The MimeMessage class uses the InternetAddress method parseHeader to parse headers in messages. This property controls the strict flag passed to the parseHeader method. The default is true.
4. mail.host -	String - The default host name of the mail server for both Stores and Transports. Used if the mail.protocol.host property isn't set.
5. mail.store.protocol - String  - Specifies the default message access protocol. The Session method getStore() returns a Store object that implements this protocol. By default the first Store provider in the configuration files is returned.
6. mail.transport.protocol - String - Specifies the default message transport protocol. The Session method getTransport() returns a Transport object that implements this protocol. By default the first Transport provider in the configuration files is returned.
7. mail.user 	String 	The default user name to use when connecting to the mail server. Used if the mail.protocol.user property isn't set.
8. mail.protocol.class 	String 	Specifies the fully qualified class name of the provider for the specified protocol. Used in cases where more than one provider for a given protocol exists; this property can be used to specify which provider to use by default. The provider must still be listed in a configuration file.
9. mail.protocol.host -	String -	The host name of the mail server for the specified protocol. Overrides the mail.host property.
10. mail.protocol.port -	int -	The port number of the mail server for the specified protocol. If not specified the protocol's default port number is used.
11. mail.protocol.user -	String -	The user name to use when connecting to mail servers using the specified protocol. Overrides the mail.user property.

The following properties are supported by Sun's implementation of JavaMail, but are not currently a required part of the specification. The names, types, defaults, and semantics of these properties may change in future releases.

1. mail.debug.auth 	boolean 	Include protocol authentication commands (including usernames and passwords) in the debug output. Default is false.
2. mail.transport.protocol.address-type 	String 	Specifies the default message transport protocol for the specified address type. The Session method getTransport(Address) returns a Transport object that implements this protocol when the address is of the specified type (e.g., "rfc822" for standard internet addresses). By default the first Transport configured for that address type is used. This property can be used to override the behavior of the send method of the Transport class so that (for example) the "smtps" protocol is used instead of the "smtp" protocol by setting the property mail.transport.protocol.rfc822 to "smtps".

The JavaMail API also supports several System properties; see the javax.mail.internet package documentation for details.

The Properties object that initializes the Session contains default values and other configuration information. It is expected that clients using the APIs set the values for the listed properties, especially mail.host , mail.user , and mail.from , since the defaults are unlikely to work in all cases.

`Environment Properties`:- Common environment properties that are used by the JavaMail APIs icludes:-

1. mail.store.protocol - Specifies the default Message Access Protocol.The Session.getStore() method returns a Store object that implements this protocol.The client can override this property and explicitly specify the protocol with the Session.getStore(String protocol) method.Default Value is The first appropriate protocol in the config files.
2. mail.transport.protocol - Specifies the default Transport Protocol. The Session.getTransport() method returns a Transport object that implements this protocol. The client can override this property and explicitly specify the protocol by using Session.getTransport(String protocol) method.
3. mail.host - Specifies the default Mail server. The Store and Transport object’s connect methods use this property, if the protocol-specific host property is absent, to locate the target host.- The local machine.
4. mail.user - Specifies the username to provide when connecting to a Mail server. The Store and Transport object’s connect methods use this property, if the protocol-specific username property is absent, to obtain the username.
5. mail.protocol.host - Specifies the protocol-specific default Mail server. This overrides the mail.host property.
6. mail.protocol.user - Specifies the protocol-specific default username for connecting to the Mail server.This overrides the mail.user property.
7. mail.from - Specifies the return address of the current user.Used by the InternetAddress.getLocalAddress method to specify the current user’s email address.
8. mail.debug - Specifies the initial debug mode. Setting this property to true will turn on debug mode, while setting it to false turns debug mode off.
9. mail.smtp.quitwait - Prevents an SSLException that sometimes occur when you use GMAIL SMTP server.
10. mail.smtp.auth - Indicates that the user must be authenticated before session can connect to SMTP server.

```java
//Local SMTP server
Properties props = new Properties();
props.put("mail.trancport.protocol", "smtps");
props.put("mail.smtp.host", "localhost"); // Your SMTP server
props.put("mail.smtp.port", 25); // Port for TLS
props.put("mail.smtp.auth", "true");
props.put("mail.smtp.starttls.enable", "true"); // Enable TLS

Session session = Session.getDefaultInstance(props);
session.setDebug(true);

// Mail session for remote SMTP server
Properties props = new Properties();
props.put("mail.trancport.protocol", "smtps");
props.put("mail.smtp.host", "smtp.gmail.com");
props.put("mail.smtp.port", 465);
props.put("mail.smtp.auth", "true");
props.put("mail.smtp.starttls.enable", "true");
props.put("mail.smtp.quitwait", "false");

Session session = Session.getDefaultInstance(props);
session.setDebug(true);
```

Some messaging system implementations can use additional properties. Typically the properties object contains user-defined customizations in addition to system-wide defaults.Mail-enabled application logic determines the appropriate set of properties. Lacking a specific requirement, the application can use the system properties object retrieved from the System.getProperties method.

The Authenticator object controls security aspects for the Session object. The messaging system uses it as a callback mechanism to interact with the user when a password is required to login to a messaging system. It indirectly controls access to the default session,as described below.

Clients using JavaMail can register PasswordAuthentication objects with the Session object for use later in the session or for use by other users of the same session.Because PasswordAuthentication objects contain passwords, access to this informationmust be carefully controlled. Applications that create Session objects must restrict access to those objects appropriately. In addition, the Session class shares some responsibility for controlling access to the default session object.

The first call to the getDefaultInstance method creates a new Session object and associates it with the Authenticator object. Subsequent calls to the getDefaultInstance method compare the Authenticator object passed in with the
Authenticator object saved in the default session. Access to the default session is allowed if both objects have been loaded by the same class loader. Typically, this is the case when both the default session creator and the program requesting default session access are in the same "security domain." Also, if both objects are null, access is allowed. Using null to gain access is discouraged, because this allows access to the default session from any security domain.
A mail-enabled client uses the Session object to retrieve a Store or Transport object in order to read or send mail. Typically, the client retrieves the default Store or Transport object based on properties loaded for that session:

```java
Store store = session.getStore();
```

The client can override the session defaults and access a Store or Transport object that implements a particular protocol.
Store store = session.getStore("imap");
See “The Provider Registry” on page 26 for details.
Implementations of Store and Transport objects will be told the session to which they have been assigned. They can then make the Session object available to other objects contained within this Store or Transport objects using application-dependent logic.


## Message

Part(interface)----> Message(abstract class)------->MimeMessage(concrete class).


- **The Message Class**:- The Message class defines a set of attributes and a content for a mail message. Message attributes specify message addressing information and define the structure of the content,including the content type. The content is represented by a DataHandler object that wraps around the actual data. The Message class is an abstract class that implements the `Part interface`.
Message inherits all content-handling logic from Part.I.e you can call setContent(),getContent(),setDataHandler() directly on message.But Message adds email-specific fields.
This class models an email message. This is an abstract class. Subclasses provide actual implementations.
Message implements the Part interface. Message contains a set of attributes and a "content". Messages within a folder also have a set of flags that describe its state within the folder.
Message defines some new attributes in addition to those defined in the Part interface. These attributes specify meta-data for the message - i. e., addressing and descriptive information about the message.
Message objects are obtained either from a Folder or by constructing a new Message object of the appropriate subclass. Messages that have been received are normally retrieved from a folder named "INBOX".
A Message object obtained from a folder is just a lightweight reference to the actual message. The Message is 'lazily' filled up (on demand) when each item is requested from the message. Note that certain folder implementations may return Message objects that are pre-filled with certain user-specified items. To send a message, an appropriate subclass of Message (e. g., MimeMessage) is instantiated, the attributes and content are filled in, and the message is sent using the Transport. send method.

Subclasses of the Message classes can implement several standard message formats. For example, the JavaMail API provides the `MimeMessage class`, that extends the Message class to implement the RFC822 and MIME standards. Implementations can typically construct themselves from byte streams and generate byte streams for transmission.

It represents email message.It provides methods to set and retrieve email attributes like sender,recipient,subject and content.Since it is an abstract class, you cannot initiate it directly,instead you use MimeMessage to create email.
A Message subclass instantiates an object that holds message content, together with attributes that specify addresses for the sender and recipients, structural information about the message, and the content type of the message body. Messages placed into a folder also have a set of flags that describe the state of the message within the folder.

The Message object has no direct knowledge of the nature or semantics of its content. This separation of structure from content allows the message object to contain any arbitrary content.

Message objects are either retrieved from a `Folder object` or constructed by instantiating a new Message object of the appropriate subclass. Messages stored within a Folder object are sequentially numbered, starting at one. An assigned message number can change when the folder is expunged, since the expunge operation removes deleted messages from the folder and also renumbers the remaining messages.

A Message object can contain multiple parts, where each part contains its own set of attributes and content. The content of a multipart message is a `Multipart object` that contains BodyPart objects representing each individual part. The `Part interface` defines the structural and semantic similarity between the Message class and the `BodyPart class`.

This class models an email message. This is an abstract class. Subclasses provide actual implementations.

Direct Known Subclasses:- MimeMessage

Message implements the Part interface. Message contains a set of attributes and a "content". Messages within a folder also have a set of flags that describe its state within the folder.
Message defines some new attributes in addition to those defined in the Part interface. These attributes specify meta-data for the message - i.e., addressing and descriptive information about the message.

Message objects are obtained either from a Folder or by constructing a new Message object of the appropriate subclass. Messages that have been received are normally retrieved from a folder named "INBOX".
A Message object obtained from a folder is just a lightweight reference to the actual message. The Message is 'lazily' filled up (on demand) when each item is requested from the message. Note that certain folder implementations may return Message objects that are pre-filled with certain user-specified items. To send a message, an appropriate subclass of Message (e.g., MimeMessage) is instantiated, the attributes and content are filled in, and the message is sent using the Transport.send method.

Subclasses of the Message classes can implement several standard message formats. For example, the JavaMail API provides the MimeMessage class, that extends the Message class to implement the RFC822 and MIME standards. Implementations can typically construct themselves from byte streams and generate byte streams for transmission.

A Message subclass instantiates an object that holds message content, together with attributes that specify addresses for the sender and recipients, structural information about the message, and the content type of the message body. Messages placed into a folder also have a set of flags that describe the state of the message within the folder.

The Message object has no direct knowledge of the nature or semantics of its content. This separation of structure from content allows the message object to contain any arbitrary content.Message objects are either retrieved from a Folder object or constructed by instantiating a new Message object of the appropriate subclass. Messages stored within a Folder object are sequentially numbered, starting at one. An assigned message number can change when the folder is expunged, since the expunge operation removes deleted messages from the folder and also renumbers the remaining messages.

A Message object can contain multiple parts, where each part contains its own set of attributes and content. The content of a multipart message is a Multipart object that contains BodyPart objects representing each individual part. The Part interface defines the structural and semantic similarity between the Message class and the BodyPart class.

**The Part Interface**:- The Part interface is the common base interface for Messages and BodyParts.Part consists of a set of attributes and a "Content".
- Defines core abstraction of something that has content and headers - not necessarily an entire email message.
    1. Headers(e.g Content-Type, Content-Disposition).
    2. Body Content(plain text, binary data)

It represents an email component(such as text or attachment).Both email messages and email attachments are considered "parts" in email system.Since emails have multiple sections,the `Part` interface provides methods to manage these sections.

The Part interface defines a set of standard headers common to most mail systems, specifies the data-type assigned to data comprising a content block, and defines set and get methods for each of these members. It is the basic data component in the JavaMail API and provides a common interface for both the Message and BodyPart classes.

Note – A Message object can not be contained directly in a Multipart object, but must be embedded in a BodyPart first

1. Attributes: The JavaMail API defines a set of standard Part attributes that are considered to be common to most existing Mail systems. These attributes have their own settor and gettor methods. Mail systems may support other Part attributes as well, these are represented as name-value pairs where both the name and value are Strings.
2. Content: The data type of the "content" is returned by the getContentType() method. The MIME typing system is used to name data types.
The "content" of a Part is available in various formats:

- As a DataHandler - using the getDataHandler() method. The "content" of a Part is also available through a javax.activation.DataHandler object. The DataHandler object allows clients to discover the operations available on the content, and to instantiate the appropriate component to perform those operations.
- As an input stream - using the getInputStream() method. Any mail-specific encodings are decoded before this stream is returned.
- As a Java object - using the getContent() method. This method returns the "content" as a Java object. The returned object is of course dependent on the content itself. In particular, a "multipart" Part's content is always a Multipart or subclass thereof. That is, getContent() on a "multipart" type Part will always return a Multipart (or subclass) object.


- `Message Attributes`:- The Message class adds its own set of standard attributes to those it inherits from the Part interface. These attributes include the sender and recipient addresses, the subject, flags, and sent and received dates. The Message class also supports non-standard attributes in the form of headers.Not all messaging systems will support arbitrary headers, and the availability and meaning of particular header names is specific to the messaging system implementation.

- `The ContentType Attribute`:- The contentType attribute specifies the data type of the content, following the MIME typing specification (RFC 2045). A MIME type is composed of a primary type that declares the general type of the content, and a subtype that specifies a specific format for the content.
A MIME type also includes an optional set of type-specific parameters

JavaMail API components can access content via these mechanisms:
1. As an input streamThe Part interface declares the getInputStream method that returns an input stream to the content. Note that Part implementations must decode any mail-specific transfer encoding before providing the input stream.
2. As a DataHandler objectThe Part interface declares the getDataHandler method that returns a javax.activation.DataHandler object that wraps around the content. The DataHandler object allows clients to discover the operations available to perform on the content, and to instantiate the appropriate component to perform those operations. See The JavaBeans Activation Framework” on page 41 for details describing the data typing framework
3. As an object in the Java programming languageThe Part interface declares the getContent method that returns the content as an object in the Java programming language. The type of the returned object is dependent on the content’s data type. If the content is of type multipart, the getContent method returns a Multipart object, or a Multipart subclass object. The getContent method returns an input stream for unknown content-types. Note that the getContent method uses the DataHandler internally to obtain the native form

The setDataHandler(DataHandler) method specifies content for a new Part object, as a step toward the construction of a new message. The Part also provides some convenience methods to set up most common content types.
Part provides the writeTo method that writes its byte stream in mail-safe form suitable for transmission. This byte stream is typically an aggregation of the Part attributes and the byte stream for its content.

Part provides the writeTo() method that streams out its bytestream in mail-safe form suitable for transmission. This bytestream is typically an aggregation of the Part attributes and its content's bytestream.

Message and BodyPart implement the Part interface. Note that in MIME parlance, Part models an Entity (RFC 2045, Section 2.4).

1. Message(implements Part):- Represents the entire email.
2. BodyPart(implements Part):- Represents parts of an email(text,attachments,images).
3. MimeMessage(extends Message):- Represents a full email message.
4. MimeBodyPart(extends BodyPart):- Represents a part of a MIME email(text,images or attachment).

Note – A Message object can not be contained directly in a Multipart object, but must be embedded in a BodyPart first.

- **The Address Class**:- The Address class represents email addresses. The Address class is an abstract class. Subclasses provide implementation-specific semantics.
This abstract class models the addresses in a message. Subclasses provide specific implementations. Subclasses will typically be serializable so that (for example) the use of Address objects in search terms can be serialized along with the search terms.
Implementation includes:- InternetAddress and NewsAddress.

`InternetAddress`:- This class represents an Internet email address using the syntax of RFC822.Typical address syntax is of the form "user@host.domain" or "Personal Name <user@host.domain>".
`NewsAddress`:- This class models an RFC1036 newsgroup address.


```java
message.setFrom(new InternetAddress("from@gmail.com"));
```

- **The BodyPart Class**:- The BodyPart class is an abstract class that implements the Part interface in order to define the attribute and content body definitions that Part declares. It does not declare attributes that set From, To, Subject, ReplyTo, or other address header fields, as a Message object does.
A BodyPart object is intended to be inserted into a Multipart container, later accessed via a multipart message.

This class models a Part that is contained within a Multipart. This is an abstract class. Subclasses provide actual implementations.
BodyPart implements the Part interface. Thus, it contains a set of attributes and a "content".



- **The Multipart Class**:- The Multipart class implements multipart messages. A multipart message is a Message object where the content-type specifier has been set to multipart. The Multipart class is a container class that contains objects of type Bodypart. A Bodypart object is an instantiation of the Part interface—it contains either a new Multipart container object, or a DataHandler object.

Note that Multipart objects can be nested to any reasonable depth within a multipart message, in order to build an appropriate structure for data carried in DataHandler objects.Therefore, it is important to check the ContentType header for each BodyPart element stored within a Multipart container.'

Typically, the client calls the getContentType method to get the content type of a message. If getContentType returns a MIME-type whose primary type is multipart, then the client calls getContent to get the Multipart container object.
The Multipart object supports several methods that get, create, and remove individual BodyPart objects.

The Multipart class implements the javax.beans.DataSource interface. It can act as the DataSource object for javax.beans.DataHandler and javax.beans.DataContentHandler objects. This allows message-aware content handlers to handle multipart data sources more efficiently, since the data has already been parsed into individual parts.

```java
Multipart multipart = new MimeMultipart();
multipart.addBodyPart(mimeBodyPart);
multipart.addBodyPart(attachPart);
```

- `The Flags Class`:- The Flags class represents the set of flags on a Message. Flags are composed of predefined system flags, and user defined flags.A System flag is represented by the Flags.Flag inner class. A User defined flag is represented as a String. User flags are case-independent.

A set of standard system flags are predefined. Most folder implementations are expected to support these flags. Some implementations may also support arbitrary user-defined flags. The getPermanentFlags method on a Folder returns a Flags object that holds all the flags that are supported by that folder implementation.

A Flags object is serializable so that (for example) the use of Flags objects in search terms can be serialized along with the search terms.

Warning: Serialized objects of this class may not be compatible with future JavaMail API releases. The current serialization support is appropriate for short term storage.

Flags objects carry flag settings that describe the state of a Message object within its containing folder. The Message.getFlags method returns a Flags object that holds all the flags currently set for that message.
The setFlags(Flags f, boolean set) method sets the specified flags for that message. The add(Flags.Flag f) method on a Flags object sets the specified flag; the contains(Flags.Flag f) method returns whether the specified flag is set.

public static final class Flags.Flag - This inner class represents an individual system flag. A set of standard system flag objects are predefined here.

Field Detail:

1. ANSWERED - This message has been answered. This flag is set by clients to indicate that this message has been answered to.
2. DRAFT - Indicates that this message is a draft.This message is a draft. This flag is set by clients to indicate that the message is a draft message.
3. FLAGGED - No defined semantics. Clients can use this flag to mark a message in some user-defined manner.This message is flagged. No semantic is defined for this flag. Clients alter this flag.
4. RECENT - This message is newly arrived in this folder. This flag is set when the message is first delivered into the folder and cleared when the containing folder is closed.Clients cannot set this flag. This message is recent. Folder implementations set this flag to indicate that this message is new to this folder, that is, it has arrived since the last time this folder was opened.Clients cannot alter this flag.
5. SEEN - Marks a message that has been opened. A client sets this flag implicitly when the message contents are retrieved.This message is seen. This flag is implicitly set by the implementation when the this Message's content is returned to the client in some form. The getInputStream and getContent methods on Message cause this flag to be set.Clients can alter this flag.
6. DELETED - Allows undoable message deletion. Setting this flag for a message marks it deleted but does not physically remove the message from its folder. The client calls the expunge method on a folder to remove all deleted messages in that folder.This message is marked deleted. Clients set this flag to mark a message as deleted. The expunge operation on a folder removes all messages in that folder that are marked for deletion.
7. USER - A special flag that indicates that this folder supports user defined flags.The implementation sets this flag. Clients cannot alter this flag but can use it to determine if a folder supports user defined flags by using folder.getPermanentFlags().contains(Flags.Flag.USER).

Note that a folder is not guaranteed to support either standard system flags or arbitrary user flags. The getPermanentFlags method in a folder returns a Flags object that contains all the system flags supported by that Folder implementation. The presence of the special USER flag indicates that the client can set arbitrary user-definable flags on any message belonging to this folder.

The below code sample illustrates how to set, examine, and get the flags for a message.

```java
Message m = folder.getMessage(1);
m.setFlag(Flags.Flag.DELETED, true); // set the DELETED flag

// Check if DELETED flag is set on this message
if (m.isSet(Flags.Flag.DELETED))
    System.out.println("DELETED message");

// Examine ALL system flags for this message
Flags flags = m.getFlags();
Flags.Flag[] sf = flags.getSystemFlags();
    for (int i = 0; i < sf.length; i++) {
        if (sf[i] == Flags.Flag.DELETED)
            System.out.println("DELETED message");
        else if (sf[i] == Flags.Flag.SEEN)
            System.out.println("SEEN message");
          ......
          ......
}
```  

## Message Storage And Retrieval

This section describes JavaMail message storage facilities supported by the Store and Folder classes.Messages are contained in Folders. New messages are usually delivered to folders by a transport protocol or a delivery agent. Clients retrieve messages from folders using an access protocol.

- `The Store Class`: The Store class defines a database that holds a Folder hierarchy and the messages within.The Store also defines the access protocol used to access folders and retrieve messages from folders. Store is an abstract class. Subclasses implement specific message databases and access protocols.

Clients gain access to a Message Store by obtaining a Store object that implements the database access protocol. Most message stores require the user to be authenticated before they allow access. The connect method performs that authentication.

      
1. void addProvider(Provider provider) - Add a provider to the session.
2. boolean getDebug() - Get the debug setting for this Session.
3. PrintStream getDebugOut() - Returns the stream to be used for debugging output.
4. static Session getDefaultInstance(Properties props) - Get the default Session object.
5. static Session getDefaultInstance(Properties props, Authenticator authenticator) - Get the default Session object.
6. Folder getFolder(URLName url) - Get a closed Folder object for the given URLName.
7. static Session getInstance(Properties props) - Get a new Session object.
8. static Session getInstance(Properties props, Authenticator authenticator) - Get a new Session object.
9. PasswordAuthentication 	getPasswordAuthentication(URLName url) - Return any saved PasswordAuthentication for this (store or transport) URLName.
10. Properties getProperties() - Returns the Properties object associated with this Session
11. String 	getProperty(String name) - Returns the value of the specified property.
12. Provider getProvider(String protocol) - Returns the default Provider for the protocol specified.
13. Provider[] getProviders() - This method returns an array of all the implementations installed via the javamail.[default.]providers files that can be loaded using the ClassLoader available to this application.
14. Store getStore() - Get a Store object that implements this user's desired Store protocol.
15. Store getStore(Provider provider) - Get an instance of the store specified by Provider.
16. Store getStore(String protocol) - Get a Store object that implements the specified protocol.
17. Store getStore(URLName url) - Get a Store object for the given URLName.
18. Transport getTransport() - Get a Transport object that implements this user's desired Transport protcol.
19. Transport getTransport(Address address) - Get a Transport object that can transport a Message of the specified address type.
20. Transport getTransport(Provider provider) - Get an instance of the transport specified in the Provider.
21. Transport getTransport(String protocol) - Get a Transport object that implements the specified protocol.
22. Transport getTransport(URLName url) - Get a Transport object for the given URLName.
23. PasswordAuthentication 	requestPasswordAuthentication(InetAddress addr, int port, String protocol, String prompt, String defaultUserName) - Call back to the application to get the needed user name and password.
24. void setDebug(boolean debug) - Set the debug setting for this Session.
25. void setDebugOut(PrintStream out) - Set the stream to be used for debugging output for this session.
26. void setPasswordAuthentication(URLName url, PasswordAuthentication pw) - Save a PasswordAuthentication for this (store or transport) URLName.
27. void setProtocolForAddress(String addresstype, String protocol) - Set the default transport protocol to use for addresses of the specified type.
28. void setProvider(Provider provider) - Set the passed Provider to be the default implementation for the protocol in Provider.protocol overriding any previous values.


## Transport Protocols and Mechanisms

The Transport abstract class defines the message submission and transport protocol. Subclasses of the Transport class implement SMTP and other transport protocols.
An abstract class that models a message transport. Subclasses provide actual implementations.
Note that Transport extends the Service class, which provides many common methods for naming transports, connecting to transports, and listening to connection events.

The Transport object is seldom explicitly created. The getTransport method obtains a Transport object from the Session factory. The Jakarta Mail API provides three versions of the getTransport method:

```java
public class Session {
public Transport getTransport(Address address);
public Transport getTransport(String protocol);
public Transport getTransport();
}
```

- getTransport(Address address) returns the implementation of the transport class based on the address type. A user-extensible map defines which transport type to use for a particular address.
For example, if the address is an InternetAddress, and InternetAddress is mapped to a protocol that supports SMTP then SMTPTransport can be returned.
- The client can also call getTransport(“smtp”) to request SMTP, or another transport implementation protocol.
- getTransport() returns the transport specified in the mail.transport.protocol property.

`Sending a Message`:- Once you've created and addressed a MimeMessage object, you can send the message.For an SMTP server that doesn't require authentication, you can call the static send method of the Transport class with MimeMessage object as argument.
However,if the SMTP server requires authentication,you use the staic getTransport method of Transport class to return a Transport object.Then you can use the connect method to specify a username and password that can be used to connect to the server.

Once you've connected to SMTP server,you can use the sendMessage method to send the message.When you use this method you can specify the MimeMessage object as first argument,and you can specify the second argument by calling the getAllRecipients method of MimeMessage object.Finally, you can use the close method to close the connection.

If the message can't be sent,the send or sendMessage method will throw an exception of the SendFailedException type.This exception contains a list of invalid addresses to which message could not be sent, valid addresses to which the message wasn't sent and valid addresses to which the message was sent.If necessary,you can use this exception to perform some processing such as writing these addresses to a log file.

```java
Transport.send(message);

// Authentication Required
Transport transport = session.getTransport();
transport.connect("example@gmail.com","password");
transport.sendMessage(message, message.getAllRecipients());
transport.close();
```


## Internet Mail

The JavaMail specification does not define any implementation. However, the API does include a set of classes that implement Internet Mail standards. Although not part of the specification, these classes can be considered part of the JavaMail package. They show how to adapt an existing messaging architecture to the JavaMail framework.
These classes implement the Internet Mail Standards defined by the RFCs listed below:

1. RFC822 (Standard for the Format of Internet Text Messages)
2. RFC2045, RFC2046, RFC2047 (MIME)

RFC822 describes the structure of messages exchanged across the Internet. Messages are viewed as having a header and contents. The header is composed of a set of standard and optional header fields. The header is separated from the content by a blank line. The RFC specifies the syntax for all header fields and the semantics of the standard header fields. It does not however, impose any structure on the message contents.

The MIME RFCs 2045, 2046 and 2047 define message content structure by defining structured body parts, a typing mechanism for identifying different media types, and a set of encoding schemes to encode data into mail-safe characters.

The Internet Mail package allows clients to create, use and send messages conforming to the standards listed above. It gives service providers a set of base classes and utilities they can use to implement Stores and Transports that use the Internet mail protocols. See “MimeMessage
Object Hierarchy” on page 89 for a Mime class and interface hierarchy diagram.
The JavaMail MimePart interface models an entity as defined in RFC2045, Section 2.4. MimePart extends the JavaMail Part interface to add MIME-specific methods and semantics.
The MimeMessage and MimeBodyPart classes implement the MimePart interface. The following figure shows the class hierarchy of these classes.

- `The MimeMessage Class`:- The MimeMessage class extends Message and implements MimePart. This class implements an email message that conforms to the RFC822 and MIME standards.
It implements all of Part's behaviour for MIME content.i.e It can hold a single plain text body or it can hold a `MimeMultipart`(collection of other parts).
- The Multipurpose Internet Mail Extensions(MIME) standard allows email to include different type of contents in a  structured way.This includes:-
  1. Plain text(simple text content)
  2. HTML Content(formatted emails with colors,images and links).
  3. Attachments(PDFs,images,documents).
  4. Multiple Recipients(To,CC,BCC)

If we just send a raw text string using SMTP,it won't support (HTML formatting,Attachments,Multiple parts-text + HTML together)

Clients wanting to create new MIME style messages will instantiate an empty MimeMessage object and then fill it with appropriate attributes and content. Service providers that implement MIME compliant backend stores may want to subclass MimeMessage and override certain methods to provide specific implementations. The simplest case is probably a provider that generates a MIME style input stream and leaves the parsing of the stream to this class.
MimeMessage uses the InternetHeaders class to parse and store the top level RFC 822 headers of a message.

The mail.mime.address.strict session property controls the parsing of address headers. By default, strict parsing of address headers is done. If this property is set to "false", strict parsing is not done and many illegal addresses that sometimes occur in real messages are allowed. See the InternetAddress class for details.

A note on RFC 822 and MIME headers :- RFC 822 header fields must contain only US-ASCII characters. MIME allows non ASCII characters to be present in certain portions of certain headers, by encoding those characters. RFC 2047 specifies the rules for doing this. The MimeUtility class provided in this package can be used to to achieve this. Callers of the setHeader, addHeader, and addHeaderLine methods are responsible for enforcing the MIME requirements for the specified headers. In addition, these header fields must be folded (wrapped) before being sent if they exceed the line length limitation for the transport (1000 bytes for SMTP). Received headers may have been folded. The application is responsible for folding and unfolding headers as appropriate.

The MimeMessage class provides a default constructor that creates an empty MimeMessage object. The client can fill in the message later by invoking the parse method on an RFC822 input stream. Note that the parse method is protected, so that only this class and its subclasses can use this method. Service providers implementing ’light-
weight’ Message objects that are filled in on demand can generate the appropriate byte stream and invoke the parse method when a component is requested from a message.
Service providers that can provide a separate byte stream for the message body (distinct from the message header) can override the getContentStream method

The client can also use the default constructor to create new MimeMessage objects for sending. The client sets appropriate attributes and headers, inserts content into the message object, and finally calls the send method for that MimeMessage object.

```java
MimeMessage m = new MimeMessage(session);
// Set FROM:
m.setFrom(new InternetAddress("jmk@Sun.COM"));
// Set TO:
InternetAddress a[] = new InternetAddress[1];
a[0] = new InternetAddress("javamail@Sun.COM");
m.setRecipients(Message.RecipientType.TO, a);
// Set content
m.setContent(data, "text/plain");
// Send message
Transport.send(m);
```

The MimeMessage class also provides a constructor that uses an input stream to instantiate itself. The constructor internally invokes the parse method to fill in the message. The InputStream object is left positioned at the end of the message body.

```java
InputStream in = getMailSource(); // a stream of mail messages
MimeMessage m = null;
for (; ;) {
try {
m = new MimeMessage(session,in);
} catch (MessagingException ex) {
// reached end of message stream
break;
}
}
```

MimeMessage implements the writeTo method by writing an RFC822-formatted byte stream of its headers and body. This is accomplished in two steps: First, the MimeMessage
object writes out its headers; then it delegates the rest to the DataHandler object representing the content

- `The MimeBodyPart Class`:- The MimeBodyPart class extends BodyPart and implements the MimePart interface.This class represents a Part inside a Multipart. MimeBodyPart implements a Body Part as defined by RFC2045.
The getBodyPart(int index) returns the MimeBodyPart object at the given index.MimeMultipart also allows the client to fetch MimeBodyPart objects based on their
Content-IDs.
The addBodyPart method adds a new MimeBodyPart object to a MimeMultipart as a step towards constructing a new multipart MimeMessage.

```java
MimeBodyPart mimeBodyPart = new MimeBodyPart();
mimeBodyPart.setContent(msg, "text/html; charset=utf-8");
```

The JavaMail reference implementation from Sun includes protocol providers in subpackages of com.sun.mail. Note that the APIs to these protocol providers are not part of the standard JavaMail API. Portable programs will not use these APIs.

Nonportable programs may use the APIs of the Sun protocol providers by (for example) casting a returned Folder object to a com.sun.mail.imap.IMAPFolder object. Similarly for Store and Message objects returned from the standard JavaMail APIs.

The Sun protocol providers also support properties that are specific to those providers. The package documentation for the IMAP, POP3, and SMTP packages provide details.

In addition to printing debugging output as controlled by the Session configuration, the current implementation of classes in this package log the same information using Logger as described in the following table:

Logger Name 	Logging Level 	Purpose
javax.mail 	CONFIG 	Configuration of the Session
javax.mail 	FINE 	General debugging output

The JavaMail API provides a platform-independent and protocol-independent framework to build mail and messaging applications. The JavaMail API is available as an optional package for use with the Java SE platform and is also included in the Java EE platform.

In the years since its first release, the JavaTM programming language has matured to become a platform. The Java platform has added functionality, including distributed computing with RMI and CORBA, and a component architecture (JavaBeansTM). Java applications have also matured, and many need an addition to the Java platform: a mail and messaging framework.The JavaMailTM API described in this specification satisfies that need.

The JavaMail API provides a set of abstract classes defining objects that comprise a mail system. The API defines classes like Message, Store and Transport. The API can be extended and can be subclassed to provide new protocols and to add functionality when necessary.

In addition, the API provides concrete subclasses of the abstract classes. These subclasses,including MimeMessage and MimeBodyPart, implement widely used Internet mail protocols and conform to specifications RFC822 and RFC2045. They are ready to be used in application development.


- `The MimeMultipart Class`:- The MimeMultipart class extends Multipart and models a MIME multipart content within a message or a body part.
A MimeMultipart is obtained from a MimePart containing a ContentType attribute set to multipart, by invoking that part's getContent method.
The client creates a new MimeMultipart object by invoking its default constructor. To create a new multipart MimeMessage, create a MimeMultipart object (or its subclass);use set methods to fill in the appropriate MimeBodyParts; and finally, use setContent(Multipart) to insert it into the MimeMessage.
MimeMultipart also provides a constructor that takes an input stream positioned at the beginning of a MIME multipart stream. This class parses the input stream and creates the child body parts.
The getSubType method returns the multipart message MIME subtype. The subtype defines the relationship among the individual body parts of a multipart message. More semantically complex multipart subtypes are implemented as subclasses of MimeMultipart, providing additional methods that expose specific functionality.
Note that a multipart content object is treated like any other content. When parsing a MIME Multipart stream, the JavaMail implementation uses the JAF framework to locate a suitable DataContentHandler for the specific subtype and uses that handler to create the appropriate Multipart instance. Similarly, when generating the output stream for a Multipart object, the appropriate DataContentHandler is used to generate the stream.

## Examples
