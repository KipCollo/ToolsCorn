# JavaMail

The JavaMail API is programming interface that makes it easy for java developers to write code that automatically sends an email.
It depends on another API known as JavaBeans Activation Framework(JAF) API.

mail.jar - Contains Java classes for the JavaMail API.
activation.jar - Contains the Java classes for JavaBean Activation Framework.These classes are necessary for the JavaMail API to run.

**How Mails work**:- Mail client software such as Outlook or Eudora allows you to send and retrieve messages.This software communicates with the mail server software that actually sends and retrieves your email.Mail server software is provided by your Internet Service Provider(ISP) or through your company.
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


The JavaMail API is designed to make adding electronic mail capability to simple applications easy, while also supporting the creation of sophisticated user interfaces. It includes appropriate convenience classes which encapsulate common mail functions and protocols. It fits with other packages for the Java platform in order to facilitate its use with other Java APIs, and it uses familiar programming models.

- The JavaMail API is therefore designed to satisfy the following development and runtime requirements:
    - Simple, straightforward class design is easy for a developer to learn and implement.
    - Use of familiar concepts and programming models support code development that interfaces well with other Java APIs.
        1. Uses familiar exception-handling and JDK 1.1 event-handling programming models.
        2. Uses features from the JavaBeans Activation Framework (JAF) to handle access to data based on data-type and to facilitate the addition of data types and commands on those data types. The JavaMail API provides convenience functions to simplify these coding tasks.
    - Lightweight classes and interfaces make it easy to add basic mail-handling tasks to any application.
    - Supports the development of robust mail-enabled applications, that can handle a variety of complex mail message formats, data types, and access and transport protocols.

The JavaMail API draws heavily from IMAP, MAPI, CMC, c-client and other messaging system APIs: many of the concepts present in these other systems are also present in the JavaMail API. It is simpler to use because it uses features of the Java programming language not available to these other APIs, and because it uses the Java programming language’s object model to shelter applications from implementation complexity.
The JavaMail API design is driven by the needs of the applications it supports—but it is also important to consider the needs of API implementors. It is critically important to enable the implementation of messaging systems written using the Java programming language that interoperate with existing messaging systems—especially Internet mail. It is also important to anticipate the development of new messaging systems. The JavaMail API conforms to current standards while not being so constrained by current standards that it stifles future innovation.


**Architectural Overview**:- JavaMail provides elements that are used to construct an interface to a messaging system, including system components and interfaces. While this specification does not define any specific implementation, JavaMail does include several classes that implement RFC822 and MIME Internet messaging standards. These classes are delivered as part of the JavaMail class package.

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

- *Major JavaMail API Components*:- Major components comprising the JavaMail architecture.
    1. `The Message Class`:- The Message class is an abstract class that defines a set of attributes and a content for a mail message. Attributes of the Message class specify addressing information and define the structure of the content, including the content type. The content is represented as a DataHandler object that wraps around the actual data.The Message class implements the `Part interface`. The Part interface defines attributes that are required to define and format data content carried by a Message object, and to interface successfully to a mail system. The Message class adds From, To, Subject,Reply-To, and other attributes necessary for message routing via a message transport system. When contained in a folder, a Message object has a set of flags associated with it.JavaMail provides Message subclasses that support specific messaging implementations.The content of a message is a collection of bytes, or a reference to a collection of bytes,encapsulated within a Message object. JavaMail has no knowledge of the data type or format of the message content. A Message object interacts with its content through an intermediate layer—the JavaBeans Activation Framework (JAF). This separation allows a Message object to handle any arbitrary content and to transmit it using any appropriate transmission protocol by using calls to the same API methods. The message recipient usually knows the content data type and format and knows how to handle that content.The JavaMail API also supports multipart Message objects, where each Bodypart defines its own set of attributes and content.
    The JavaMail API also supports multipart Message objects, where each Bodypart defines its own set of attributes and content
    2. `Message Storage and Retrieval`:- Messages are stored in Folder objects. A Folder object can contain subfolders as well as messages, thus providing a tree-like folder hierarchy. The Folder class declares methods that fetch, append, copy and delete messages. A Folder object can also send events to components registered as event listeners.The Store class defines a database that holds a folder hierarchy together with its messages.The Store class also specifies the access protocol that accesses folders and retrieves messages stored in folders. The Store class also provides methods to establish a connection to the database, to fetch folders and to close a connection. Service providers implementing Message Access protocols (IMAP4, POP3, etc.) start off by subclassing the Store class. A user typically starts a session with the mail system by connecting to a particular Store implementation.
    3. `Message Composition and Transport`:- A client creates a new message by instantiating an appropriate Message subclass. It sets attributes like the recipient addresses and the subject, and inserts the content into the Message object. Finally, it sends the Message by invoking the Transport.send method.The Transport class models the transport agent that routes a message to its destination addresses. This class provides methods that send a message to a list of recipients. Invoking the Transport.send method with a Message object identifies the appropriate transport based on its destination addresses.
    4. `The Session Class`:- The Session class defines global and per-user mail-related properties that define the interface between a mail-enabled client and the network. JavaMail system components use the Session object to set and get specific properties. The Session class also provides a default authenticated session object that desktop applications can share. The Session class is a final concrete class. It cannot be subclassed.The Session class also acts as a factory for Store and Transport objects that implement specific access and transport protocols. By calling the appropriate factory method on a Session object, the client can obtain Store and Transport objects that support specific protocols.

- *The JavaMail Event Model*:- The JavaMail event model conforms to the JDK 1.1 event-model specification, as described in the JavaBeans Specification. The JavaMail API follows the design patterns defined in the JavaBeans Specification for naming events, event methods and event listener registration.
All events are subclassed from the MailEvent class. Clients listen for specific events by registering themselves as listeners for those events. Events notify listeners of state changes as a session progresses. During a session, a JavaMail component generates a specific event-type to notify objects registered as listeners for that event-type. The JavaMail Store, Folder,and Transport classes are event sources. This specification describes each specific event in the section that describes the class that generates that event.

- **Basic Workflow**:-
    1. Set Up Mail Server Properties:- Configure settings such as SMTP server address,port and whether to use authentication
    2. Create a session:- This is your connection context to the mail server.It includes your credentials and configuration properties.
    3. Build The Email Message:- Construct your email.You can set the sender,recipient,subject and content(plain text or HTML)
    4. Send the email:- Use Transport class to send message through configured SMTP server.


**Mail Session**:- The `Session class(public final class Session)` represents a mail session and is not subclassed. It collects together properties and defaults used by the mail API's. A single default session can be shared by multiple applications on the desktop. Unshared sessions can also be created.A mail Session object manages the configuration options and user authentication information used to interact with messaging systems.
Each javamail.X resource file is searched for using three methods in the following order:
- java.home/conf/javamail.X
- META-INF/ javamail.X
- META-INF/ javamail.default.X

The JavaMail API supports simultaneous multiple sessions. Each session can access multiple message stores and transports. Any desktop application that needs to access the current primary message store can share the default session. Typically the mail-enabled application establishes the default session, which initializes the authentication information necessary to access the user’s Inbox folder. Other desktop applications then use the default session when sending or accessing mail on behalf of the user. When sharing the session object, all applications share authentication information, properties, and the rest of the state of the object.

To create a mail session,you can call the `getDefaultInstance` method of Session class to get a Session object that has all default settings for a mail session.After creating session object,you can use setDebug method of Session object to turn on debugging for the session.As a result,the Session object will print debugging information to the console.

Before you create a mail session,you need to create a `Properties` object that contains any properties that session needs to send or receive mail.A Properties object stores a list of properties where each property has a name,which is often referred to as a key, and a value.To specify properties for a mail session,you can use the put method of Properties class to define any of standard properties available in JavaMail API.

- The JavaMail API supports the following standard properties, which may be set in the Session object, or in the Properties object used to create the Session object. The properties are always set as strings; the Type column describes how the string is interpreted. For example, use to set the mail.debug property, which is of type boolean.
    1. mail.debug -	boolean - The initial debug mode. Default is false.
    2. mail.from - String -	The return email address of the current user, used by the InternetAddress method getLocalAddress.
    3. mail.mime.address.strict - boolean - The MimeMessage class uses the InternetAddress method parseHeader to parse headers in messages. This property controls the strict flag passed to the parseHeader method. The default is true.
    4. mail.host -	String - The default host name of the mail server for both Stores and Transports. Used if the mail.protocol.host property isn't set.
    5. mail.store.protocol - String  - Specifies the default message access protocol. The Session method getStore() returns a Store object that implements this protocol. By default the first Store provider in the configuration files is returned.
    6. mail.transport.protocol - String - Specifies the default message transport protocol. The Session method getTransport() returns a Transport object that implements this protocol. By default the first Transport provider in the configuration files is returned.
    7. mail.user 	String 	The default user name to use when connecting to the mail server. Used if the mail.protocol.user property isn't set.
    8. mail.protocol.class 	String 	Specifies the fully qualified class name of the provider for the specified protocol. Used in cases where more than one provider for a given protocol exists; this property can be used to specify which provider to use by default. The provider must still be listed in a configuration file.
    9. mail.protocol.host -	String -	The host name of the mail server for the specified protocol. Overrides the mail.host property.i.e smtp.gmail.com,smtp.outlook.com
    10. mail.protocol.port -	int -	The port number of the mail server for the specified protocol. If not specified the protocol's default port number is used.
    11. mail.protocol.user -	String -	The user name to use when connecting to mail servers using the specified protocol. Overrides the mail.user property.
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

- The following properties are supported by Sun's implementation of JavaMail, but are not currently a required part of the specification. The names, types, defaults, and semantics of these properties may change in future releases.
    1. mail.debug.auth 	boolean 	Include protocol authentication commands (including usernames and passwords) in the debug output. Default is false.
    2. mail.transport.protocol.address-type 	String 	Specifies the default message transport protocol for the specified address type. The Session method getTransport(Address) returns a Transport object that implements this protocol when the address is of the specified type (e.g., "rfc822" for standard internet addresses). By default the first Transport configured for that address type is used. This property can be used to override the behavior of the send method of the Transport class so that (for example) the "smtps" protocol is used instead of the "smtp" protocol by setting the property mail.transport.protocol.rfc822 to "smtps".

The Properties object that initializes the Session contains default values and other configuration information. It is expected that clients using the APIs set the values for the listed properties, especially mail.host , mail.user , and mail.from , since the defaults are unlikely to work in all cases.

```java
//Local SMTP server
Properties props = new Properties();
props.put("mail.transport.protocol", "smtps");
props.put("mail.smtp.host", "localhost"); // Your SMTP server
props.put("mail.smtp.port", 25); // Port for TLS
props.put("mail.smtp.auth", "true");
props.put("mail.smtp.starttls.enable", "true"); // Enable TLS

// Mail session for remote SMTP server
Properties props = new Properties();
props.put("mail.trancport.protocol", "smtps");
props.put("mail.smtp.host", "smtp.gmail.com");
props.put("mail.smtp.port", 465);
props.put("mail.smtp.auth", "true");
props.put("mail.smtp.starttls.enable", "true");
props.put("mail.smtp.quitwait", "false");

props.put("mail.debug", "true");

Session session = Session.getDefaultInstance(props);
Session session = Session.getInstance(props, authenticator);//To create a Session using a static factory method:
Session defaultSession =Session.getDefaultInstance(props, authenticator); //To create the default shared session, or to access the default shared session:
session.setDebug(true);
```

Some messaging system implementations can use additional properties. Typically the properties object contains user-defined customizations in addition to system-wide defaults.Mail-enabled application logic determines the appropriate set of properties. Lacking a specific requirement, the application can use the system properties object retrieved from the System.getProperties method.

The `Authenticator object` controls security aspects for the Session object. The messaging system uses it as a callback mechanism to interact with the user when a password is required to login to a messaging system. It indirectly controls access to the default session.
Clients using JavaMail can register PasswordAuthentication objects with the Session object for use later in the session or for use by other users of the same session.Because PasswordAuthentication objects contain passwords, access to this information must be carefully controlled. Applications that create Session objects must restrict access to those objects appropriately. In addition, the Session class shares some responsibility for controlling access to the default session object.

The first call to the getDefaultInstance method creates a new Session object and associates it with the Authenticator object. Subsequent calls to the getDefaultInstance method compare the Authenticator object passed in with the Authenticator object saved in the default session. Access to the default session is allowed if both objects have been loaded by the same class loader. Typically, this is the case when both the default session creator and the program requesting default session access are in the same "security domain." Also, if both objects are null, access is allowed. Using null to gain access is discouraged, because this allows access to the default session from any security domain.

A mail-enabled client uses the Session object to retrieve a Store or Transport object in order to read or send mail. Typically, the client retrieves the default Store or Transport object based on properties loaded for that session:

```java
Store store = session.getStore();
```

The client can override the session defaults and access a Store or Transport object that implements a particular protocol.

```java
Store store = session.getStore("imap");
```

Implementations of Store and Transport objects will be told the session to which they have been assigned. They can then make the Session object available to other objects contained within this Store or Transport objects using application-dependent logic.


**Message**:-- `The Message Class` defines a set of attributes and a content for a mail message. Message attributes specify message addressing information and define the structure of the content,including the content type. The content is represented by a DataHandler object that wraps around the actual data. The Message class is an abstract class that implements the `Part interface`.Message inherits all content-handling logic from Part.I.e you can call setContent(),getContent(),setDataHandler() directly on message.But Message adds email-specific fields.This class models an email message. This is an abstract class. Subclasses provide actual implementations.

Subclasses of the Message classes can implement several standard message formats. For example, the JavaMail API provides the `MimeMessage class`, that extends the Message class to implement the RFC822 and MIME standards. Implementations can typically construct themselves from byte streams and generate byte streams for transmission.
A Message subclass instantiates an object that holds message content, together with attributes that specify addresses for the sender and recipients, structural information about the message, and the content type of the message body. Messages placed into a folder also have a set of flags that describe the state of the message within the folder.

Structure of Message class:-

- Header Attributes:-
    - Attributes defined by the Part interface,including Content-Type(Part Interface).
    - Attributes added by the Message class.
    - Optional attributes added by a Message Subclass,such as MimeMessage.
- Content Body:-
    - DataHandler Object - Contains data that conforms to the Content Type attribute,together with methods that provide access to data(DataHandler class)- JavaBean queries the DataHandler object in order to view and handle content body.

The Message object has no direct knowledge of the nature or semantics of its content. This separation of structure from content allows the message object to contain any arbitrary content.
Message objects are either retrieved from a `Folder object` or constructed by instantiating a new Message object of the appropriate subclass. Messages stored within a Folder object are sequentially numbered, starting at one. An assigned message number can change when the folder is expunged, since the expunge operation removes deleted messages from the folder and also renumbers the remaining messages.Messages that have been received are normally retrieved from a folder named "INBOX".A Message object obtained from a folder is just a lightweight reference to the actual message. The Message is 'lazily' filled up (on demand) when each item is requested from the message. Note that certain folder implementations may return Message objects that are pre-filled with certain user-specified items. To send a message, an appropriate subclass of Message (e. g., MimeMessage) is instantiated, the attributes and content are filled in, and the message is sent using the Transport. send method.
Messages within a folder also have a set of flags that describe its state within the folder.

A Message object can contain multiple parts, where each part contains its own set of attributes and content. The content of a multipart message is a `Multipart object` that contains BodyPart objects representing each individual part. The `Part interface` defines the structural and semantic similarity between the Message class and the `BodyPart class`.
 
Message defines some new attributes in addition to those defined in the Part interface. These attributes specify meta-data for the message - i. e., addressing and descriptive information about the message.

```
                      Part
                        | implements
      contains          |          references
Flags-----------------Message---------------------Attributes
                        |
                        | contains
                     Content
```

It represents email message.It provides methods to set and retrieve email attributes like sender,recipient,subject and content.Since it is an abstract class, you cannot initiate it directly,instead you use MimeMessage to create email.

Part(interface)----> Message(abstract class)------->MimeMessage(concrete class).


*The Part Interface*:- The Part interface defines a set of standard headers common to most mail systems, specifies the data-type assigned to data comprising a content block, and defines set and get methods for each of these members. It is the basic data component in the Jakarta Mail API and provides a common interface for both the Message and BodyPart classes.
A Message object can not be contained directly in a Multipart object, but must be embedded in a BodyPart first.

Part consists of a set of attributes and a "Content".

`Message Attributes`:- The Message class adds its own set of standard attributes to those it inherits from the Part interface. These attributes include the sender and recipient addresses, the subject, flags, and sent and received dates. The Message class also supports non-standard attributes in the form of headers.Not all messaging systems will support arbitrary headers, and the availability and meaning of particular header names is specific to the messaging system implementation.The JavaMail API defines a set of standard Part attributes that are considered to be common to most existing Mail systems. These attributes have their own settor and gettor methods. Mail systems may support other Part attributes as well, these are represented as name-value pairs where both the name and value are Strings.

`The ContentType Attribute`:- The contentType attribute specifies the data type of the content, following the MIME typing specification (RFC 2045). A MIME type is composed of a primary type that declares the general type of the content, and a subtype that specifies a specific format for the content.A MIME type also includes an optional set of type-specific parameters.The data type of the "content" is returned by the getContentType() method. The MIME typing system is used to name data types.
- Jakarta Mail API components can access content via these mechanisms:
    - As a DataHandler - using the getDataHandler() method. The "content" of a Part is also available through a javax.activation.DataHandler object. The DataHandler object allows clients to discover the operations available on the content, and to instantiate the appropriate component to perform those operations.
    - As an input stream - using the getInputStream() method. Any mail-specific encodings are decoded before this stream is returned.The Part interface declares the getInputStream method that returns an input stream to the content. Note that Part implementations must decode any mail-specific transfer encoding before providing the input stream.The Part interface declares the getDataHandler method that returns a jakarta.activation.DataHandler object that wraps around the content.The DataHandler object allows clients to discover the operations available to perform on the content, and to instantiate the appropriate component to perform those operations.
    - As a Java object - using the getContent() method. This method returns the "content" as a Java object. The returned object is of course dependent on the content itself. In particular, a "multipart" Part's content is always a Multipart or subclass thereof. That is, getContent() on a "multipart" type Part will always return a Multipart (or subclass) object.The Part interface declares the getContent method that returns the content as an object in the Java programming language. The type of the returned object is dependent on the content’s data type. If the content is of type multipart, the getContent method returns a Multipart object, or a Multipart subclass object. The getContent method returns an input stream for unknown content-types. Note that the getContent method uses the DataHandler internally to obtain the native form.

The setDataHandler(DataHandler) method specifies content for a new Part object, as a step toward the construction of a new message. The Part also provides some convenience methods to set up most common content types.
Part provides the writeTo method that writes its byte stream in mail-safe form suitable for transmission. This byte stream is typically an aggregation of the Part attributes and the byte stream for its content.

It represents an email component(such as text or attachment).Both email messages and email attachments are considered "parts" in email system.Since emails have multiple sections,the `Part` interface provides methods to manage these sections.


*The Address Class*:- The Address class represents email addresses(models the addresses in a message). The Address class is an abstract class. Subclasses provide implementation-specific semantics.Subclasses will typically be serializable so that (for example) the use of Address objects in search terms can be serialized along with the search terms.

*The BodyPart Class*:- This class models a Part that is contained within a Multipart.The BodyPart class is an abstract class that implements the Part interface in order to define the attribute and content body definitions that Part declares. It does not declare attributes that set From, To, Subject, ReplyTo, or other address header fields, as a Message object does.
A BodyPart object is intended to be inserted into a Multipart container, later accessed via a multipart message.

*The Multipart Class*:- The Multipart class implements multipart messages. A multipart message is a Message object where the content-type specifier has been set to multipart. The Multipart class is a container class that contains objects of type Bodypart. A Bodypart object is an instantiation of the Part interface—it contains either a new Multipart container object, or a DataHandler object.
Note that Multipart objects can be nested to any reasonable depth within a multipart message, in order to build an appropriate structure for data carried in DataHandler objects.Therefore, it is important to check the ContentType header for each BodyPart element stored within a Multipart container.

- Message
    - Header Attributes- Normal Messages,includes a Content-Type attribute set to 'Multipart'
    - Content Body - Normal Message, includes a Content body of type ‘Multipart’.
        - Multipart Object:-
            - BodypartObject 
                - Header Attributes -Attributes defined by the Part interface only.Attributes include a second Content-Type attribute.
                - Content Body - The content body itself can be either a DataHandler object containing data, or another Multipart object.
            - Bodypart Object:- A Multipart Message can hold more than one Bodypart object.

A multipart message is a simple message object where the Content-Type is set to ‘multipart,’ and the Content Body carries a reference to a Multipart object.
A Multipart object is a container of Bodypart objects, where each Bodypart can contain either a DataHandler or another Multipart object.

Note that Multipart objects can be nested to any reasonable depth within a multipart message, in order to build an appropriate structure for data carried in DataHandler objects. Therefore, it is important to check the ContentType header for each BodyPart element stored within a Multipart container.

Typically, the client calls the getContentType method to get the content type of a message. If getContentType returns a MIME-type whose primary type is multipart, then the client calls getContent to get the Multipart container object.
The Multipart object supports several methods that get, create, and remove individual BodyPart objects.

The Multipart class implements the javax.beans.DataSource interface. It can act as the DataSource object for javax.beans.DataHandler and javax.beans.DataContentHandler objects. This allows message-aware content handlers to handle multipart data sources more efficiently, since the data has already been parsed into individual parts.

*The Flags Class*:- Flags objects carry flag settings that describe the state of a Message object within its containing folder.The Message.getFlags method returns a Flags object that holds all the flags currently set for that message.The Flags class represents the set of flags on a Message. Flags are composed of predefined system flags, and user defined flags.A System flag is represented by the `Flags.Flag inner class`.This inner class represents an individual system flag. A set of standard system flag objects are predefined here.. A User defined flag is represented as a String. User flags are case-independent.
Most folder implementations are expected to support these flags. Some implementations may also support arbitrary user-defined flags. The getPermanentFlags method on a Folder returns a Flags object that holds all the flags that are supported by that folder implementation.

The setFlags(Flags f, boolean set) method sets the specified flags for that message. The add(Flags.Flag f ) method on a Flags object sets the specified flag; the contains(Flags.Flag f ) method returns whether the specified flag is set.
A Flags object is serializable so that (for example) the use of Flags objects in search terms can be serialized along with the search terms.

1. ANSWERED - This message has been answered. This flag is set by clients to indicate that this message has been answered to.
2. DRAFT - Indicates that this message is a draft.This message is a draft.This flag is set by clients to indicate that the message is a draft message.
3. FLAGGED - No defined semantics. Clients can use this flag to mark a message in some user-defined manner.This message is flagged. No semantic is defined for this flag. Clients alter this flag.
4. RECENT - This message is newly arrived in this folder. This flag is set when the message is first delivered into the folder and cleared when the containing folder is closed.Clients cannot set this flag. This message is recent. Folder implementations set this flag to indicate that this message is new to this folder, that is, it has arrived since the last time this folder was opened.Clients cannot alter this flag.
5. SEEN - Marks a message that has been opened. A client sets this flag implicitly when the message contents are retrieved.This message is seen. This flag is implicitly set by the implementation when the this Message's content is returned to the client in some form. The getInputStream and getContent methods on Message cause this flag to be set.Clients can alter this flag.
6. DELETED - Allows undoable message deletion. Setting this flag for a message marks it deleted but does not physically remove the message from its folder. The client calls the expunge method on a folder to remove all deleted messages in that folder.This message is marked deleted. Clients set this flag to mark a message as deleted. The expunge operation on a folder removes all messages in that folder that are marked for deletion.
7. USER - A special flag that indicates that this folder supports user defined flags.The implementation sets this flag. Clients cannot alter this flag but can use it to determine if a folder supports user defined flags by using folder.getPermanentFlags().contains(Flags.Flag.USER).

Note that a folder is not guaranteed to support either standard system flags or arbitrary user flags. The getPermanentFlags method in a folder returns a Flags object that contains all the system flags supported by that Folder implementation. The presence of the special USER flag indicates that the client can set arbitrary user-definable flags on any message belonging to this folder.

*Message Creation And Transmission*:- The Message class is abstract, so an appropriate subclass must be instantiated to create a new Message object. A client creates a message by instantiating an appropriate Message subclass.
For example, the MimeMessage subclass handles Internet email messages. Typically, the client application creates an email message by instantiating a MimeMessage object, and passing required attribute values to that object. In an email message, the client defines Subject, From, and To attributes.The client then passes message content into the MimeMessage object by using a suitably configured DataHandler object.
After the Message object is constructed, the client calls the Transport.send method to route it to its specified recipients.


**Message Storage And Retrieval**:- Messages are contained in Folders. New messages are usually delivered to folders by a transport protocol or a delivery agent. Clients retrieve messages from folders using an access protocol.

*The Store Class*: The Store class defines a database that holds a Folder hierarchy and the messages within.The Store also defines the access protocol used to access folders and retrieve messages from folders. Store is an abstract class. Subclasses implement specific message databases and access protocols.
Clients gain access to a Message Store by obtaining a Store object that implements the database access protocol. Most message stores require the user to be authenticated before they allow access. The connect method performs that authentication.

For many message stores, a host name, user name, and password are sufficient to authenticate a user.The Jakarta Mail API provides a connect method that takes this information as input parameters. Store also provides a default connect method. In either case, the client can obtain missing information from the Session object’s properties, or by interacting with the user by accessing the Session’s Authenticator object.

The default implementation of the connect method in the Store class uses these techniques to retrieve all needed information and then calls the protocolConnect method. The messaging system must provide an appropriate implementation of this method. The messaging system can also choose to directly override the connect method.
By default, Store queries the following properties for the user name and host name:

- mail.user property, or user.name system property (if mail.user is not set)
- mail.host

The Store presents a default namespace to clients. Store implementations can also present other namespaces. The getDefaultFolder method on Store returns the root folder for the default namespace.
Clients terminate a session by calling the close method on the Store object. Once a Store is closed (either explicitly using the close method; or externally, if the Mail server fails), all Messaging components belonging to that Store become invalid. Typically, clients will try to recover from an unexpected termination by calling connect to reconnect to the Store object, and then fetching new Folder objects and new Message objects.


**Transport Protocols and Mechanisms**:- The `Transport abstract class` defines the message submission and transport protocol. Subclasses of the Transport class implement SMTP and other transport protocols.An abstract class that models a message transport. Subclasses provide actual implementations.

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


### Message Composition

The process used to instantiate a message object, add content to that message, and send it to its intended list of recipients.
The Jakarta Mail API allows a client program to create a message of arbitrary complexity. Messages are instantiated from the Message subclass. The client program can manipulate any message as if it had been retrieved from a Store.

**Building a Message Object**:- To create a message, a client program instantiates a Message object, sets appropriate attributes, and then inserts the content.
- The attributes specify the message address and other values necessary to send, route, receive, decode and store the message. Attributes also specify the message structure and data content type.
- Message content is carried in a DataHandler object, that carries either data or a Multipart object. A DataHandler carries the content body and provides methods the client uses to handle the content. A Multipart object is a container that contains one or more Bodypart objects, each of which can in turn contain DataHandler objects.

`Message Creation` - jakarta.mail.Message is an abstract class that implements the Part interface. Therefore, to create a message object, select a message subclass that implements the appropriate message type.
For example,to create a Mime message,a Jakarta Mail client instantiates an empty jakarta.mail.internet.MimeMessage object passing the current Session object to it:

```java
Message msg = new MimeMessage(session);
```

`Setting Message Attributes`:- The Message class provides a set of methods that specify standard attributes common to all messages.The MimeMessage class provides additional methods that set MIME-specific attributes. The client program can also set non-standard attributes (custom headers) as name-value pairs.
The methods for setting standard attributes are listed below:

```java
public class Message {
    public void setFrom(Address addr);
    public void setFrom(); // retrieves from system
    public void setRecipients(RecipientType type, Address[] addrs);
    public void setReplyTo(Address[] addrs);
    public void setSentDate(Date date);
    public void setSubject(String subject);
    ...
}
```

The Part interface specifies the following method, that sets custom headers:

```java
public void setHeader(String name, String value)
```

The setRecipients method takes a RecipientType as its first parameter, which specifies which recipient field to use.Currently, Message.RecipientType.TO,Message.RecipientType.CC, and Message.RecipientType.BCC are defined. Additional RecipientTypes may be defined as necessary.
The Message class provides two versions of the setFrom method:
- setFrom(Address addr) specifies the sender explicitly from an Address object parameter.
- setFrom() retrieves the sender’s username from the local system.

```java
toAddrs[] = new InternetAddress[1];
toAddrs[0] = new InternetAddress("luke@rebellion.gov");
Address fromAddr = new InternetAddress("han.solo@smuggler.com");

msg.setFrom(fromAddr);
msg.setRecipients(Message.RecipientType.TO, toAddrs);
msg.setSubject("Takeoff time.");
msg.setSentDate(new Date());
```

`Setting Message Content`:- The Message object carries content data within a DataHandler object. To add content to a Message, a client creates content, instantiates a DataHandler object, places content into that DataHandler object, and places that object into a Message object that has had its attributes defined.
The Jakarta Mail API provides two techniques that set message content. The first technique uses the setDataHandler method. The second technique uses the setContent method.

Typically, clients add content to a DataHandler object by calling setDataHandler(DataHandler) on a Message object. The DataHandler is an object that encapsulates data. The data is passed to the DataHandler’s constructor as either a DataSource (a stream connected to the data) or as an object in the Java programming language. The InputStream object creates the DataSource.

```java
public class DataHandler {
    DataHandler(DataSource dataSource);
    DataHandler(Object data, String mimeType);
}
```

```java
// create brief message text
String content = "Leave at 300.";
// instantiate the DataHandler object
DataHandler data = new DataHandler(content, "text/plain");
// Use setDataHandler() to insert data into the
// new Message object
msg.setDataHandler(data);
```

Alternately, setContent implements a simpler technique that takes the data object and its MIME type.setContent creates the DataHandler object automatically:

```java
// create the message text
String content = "Leave at 300.";
// call setContent to pass content and content type
// together into the message object
msg.setContent(content, "text/plain");
```

**Building a Multipart Message**:- Follow these steps to create a MIME Multipart Message:
1. Instantiate a new MimeMultipart object, or a subclass.
2. Create MimeBodyParts for the specific message parts. Use the setContent method or the setDataHandler method to create the content for each Bodypart.
3. Insert the Multipart object into the Message object by calling setContent(Multipart) within a newly-constructed Message object.

The default subtype for a MimeMultipart object is mixed. It can be set to other subtypes as required. MimeMultipart subclasses might already have their subtype set appropriately.

```java
Multipart multipart = new MimeMultipart();

MimeBodyPart b1 = new MimeBodyPart();
b1.setContent("Spaceport Map","text/plain");
multipart.addBodyPart(b1);

MimeBodyPart b2 = new MimeBodyPart();
b2.setContent(map,"application/postscript");
multipart.addBodyPart(b2);

Message msg = new MimeMessage(session);

msg.setContent(multipart);
msg.saveChanges();
```


-------------


## Internet Mail

The JavaMail specification does not define any implementation. However, the API does include a set of classes that implement Internet Mail standards. Although not part of the specification, these classes can be considered part of the JavaMail package. They show how to adapt an existing messaging architecture to the JavaMail framework.
These classes implement the Internet Mail Standards defined by the RFCs listed below:

1. RFC822 (Standard for the Format of Internet Text Messages)
2. RFC2045, RFC2046, RFC2047 (MIME)

RFC822 describes the structure of messages exchanged across the Internet. Messages are viewed as having a header and contents. The header is composed of a set of standard and optional header fields. The header is separated from the content by a blank line. The RFC specifies the syntax for all header fields and the semantics of the standard header fields. It does not however, impose any structure on the message contents.
The MIME RFCs 2045, 2046 and 2047 define message content structure by defining structured body parts, a typing mechanism for identifying different media types, and a set of encoding schemes to encode data into mail-safe characters.

The Internet Mail package allows clients to create, use and send messages conforming to the standards listed above. It gives service providers a set of base classes and utilities they can use to implement Stores and Transports that use the Internet mail protocols.

The JavaMail MimePart interface models an entity as defined in RFC2045. MimePart extends the JavaMail Part interface to add MIME-specific methods and semantics.
The MimeMessage and MimeBodyPart classes implement the MimePart interface.

- `The MimeMessage Class`:- The MimeMessage class extends Message and implements MimePart. This class implements an email message that conforms to the RFC822 and MIME standards.This class represents a MIME style email message.

The MimeMessage class provides a default constructor that creates an empty MimeMessage object. The client can fill in the message later by invoking the parse method on an RFC822 input stream. Note that the parse method is protected, so that only this class and its subclasses can use this method. Service providers implementing ’light-weight’ Message objects that are filled in on demand can generate the appropriate byte stream and invoke the parse method when a component is requested from a message.Service providers that can provide a separate byte stream for the message body (distinct from the message header) can override the getContentStream method.

The client can also use the default constructor to create new MimeMessage objects for sending. The client sets appropriate attributes and headers, inserts content into the message object, and finally calls the send method for that MimeMessage object.

Clients wanting to create new MIME style messages will instantiate an empty MimeMessage object and then fill it with appropriate attributes and content. Service providers that implement MIME compliant backend stores may want to subclass MimeMessage and override certain methods to provide specific implementations. The simplest case is probably a provider that generates a MIME style input stream and leaves the parsing of the stream to this class.
MimeMessage uses the InternetHeaders class to parse and store the top level RFC 822 headers of a message.

```java
MimeMessage m = new MimeMessage(session);

m.setFrom(new InternetAddress("jmk@Sun.COM"));// Set FROM:

InternetAddress a[] = new InternetAddress[1];
a[0] = new InternetAddress("javamail@Sun.COM");
m.setRecipients(Message.RecipientType.TO, a);

m.setContent(data, "text/plain");
Transport.send(m);
```

MimeMessage implements the writeTo method by writing an RFC822-formatted byte stream of its headers and body. This is accomplished in two steps: First, the MimeMessage
object writes out its headers; then it delegates the rest to the DataHandler object representing the content

MimeMessage uses the InternetHeaders class to parse and store the top level RFC 822 headers of a message.

The mail.mime.address.strict session property controls the parsing of address headers. By default, strict parsing of address headers is done. If this property is set to "false", strict parsing is not done and many illegal addresses that sometimes occur in real messages are allowed. See the InternetAddress class for details. 

It implements all of Part's behaviour for MIME content.i.e It can hold a single plain text body or it can hold a `MimeMultipart`(collection of other parts).
- The Multipurpose Internet Mail Extensions(MIME) standard allows email to include different type of contents in a  structured way.This includes:-
  1. Plain text(simple text content)
  2. HTML Content(formatted emails with colors,images and links).
  3. Attachments(PDFs,images,documents).
  4. Multiple Recipients(To,CC,BCC)

If we just send a raw text string using SMTP,it won't support (HTML formatting,Attachments,Multiple parts-text + HTML together)

A note on RFC 822 and MIME headers :- RFC 822 header fields must contain only US-ASCII characters. MIME allows non ASCII characters to be present in certain portions of certain headers, by encoding those characters. RFC 2047 specifies the rules for doing this. The MimeUtility class provided in this package can be used to to achieve this. Callers of the setHeader, addHeader, and addHeaderLine methods are responsible for enforcing the MIME requirements for the specified headers. In addition, these header fields must be folded (wrapped) before being sent if they exceed the line length limitation for the transport (1000 bytes for SMTP). Received headers may have been folded. The application is responsible for folding and unfolding headers as appropriate.


- `The MimeBodyPart Class`:- The MimeBodyPart class extends BodyPart and implements the MimePart interface.This class represents a Part inside a Multipart. MimeBodyPart implements a Body Part as defined by RFC2045.

The getBodyPart(int index) returns the MimeBodyPart object at the given index.MimeMultipart also allows the client to fetch MimeBodyPart objects based on their
Content-IDs.

The addBodyPart method adds a new MimeBodyPart object to a MimeMultipart as a step towards constructing a new multipart MimeMessage.

```java
MimeBodyPart mimeBodyPart = new MimeBodyPart();
mimeBodyPart.setContent(msg, "text/html; charset=utf-8");
```

- `The MimeMultipart Class`:- The MimeMultipart class extends Multipart and models a MIME multipart content within a message or a body part.

A MimeMultipart is obtained from a MimePart containing a ContentType attribute set to multipart, by invoking that part's getContent method.

The client creates a new MimeMultipart object by invoking its default constructor. To create a new multipart MimeMessage, create a MimeMultipart object (or its subclass);use set methods to fill in the appropriate MimeBodyParts; and finally, use setContent(Multipart) to insert it into the MimeMessage.

MimeMultipart also provides a constructor that takes an input stream positioned at the beginning of a MIME multipart stream. This class parses the input stream and creates the child body parts.
The getSubType method returns the multipart message MIME subtype. The subtype defines the relationship among the individual body parts of a multipart message. More semantically complex multipart subtypes are implemented as subclasses of MimeMultipart, providing additional methods that expose specific functionality.

Note that a multipart content object is treated like any other content. When parsing a MIME Multipart stream, the JavaMail implementation uses the JAF framework to locate a suitable DataContentHandler for the specific subtype and uses that handler to create the appropriate Multipart instance. Similarly, when generating the output stream for a Multipart object, the appropriate DataContentHandler is used to generate the stream.

*NOTE*:- The JavaMail reference implementation from Sun includes protocol providers in subpackages of com.sun.mail. Note that the APIs to these protocol providers are not part of the standard JavaMail API. Portable programs will not use these APIs.
Nonportable programs may use the APIs of the Sun protocol providers by (for example) casting a returned Folder object to a com.sun.mail.imap.IMAPFolder object. Similarly for Store and Message objects returned from the standard JavaMail APIs.

The Sun protocol providers also support properties that are specific to those providers. The package documentation for the IMAP, POP3, and SMTP packages provide details.

In addition to printing debugging output as controlled by the Session configuration, the current implementation of classes in this package log the same information using Logger as described in the following table:

Logger Name 	Logging Level 	Purpose
javax.mail 	CONFIG 	Configuration of the Session
javax.mail 	FINE 	General debugging output

The JavaMail API provides a platform-independent and protocol-independent framework to build mail and messaging applications. The JavaMail API is available as an optional package for use with the Java SE platform and is also included in the Java EE platform.


**The Address Class**
Implementation includes:- InternetAddress and NewsAddress.

`InternetAddress`:- This class represents an Internet email address using the syntax of RFC822.Typical address syntax is of the form "user@host.domain" or "Personal Name <user@host.domain>".
`NewsAddress`:- This class models an RFC1036 newsgroup address.

```java
message.setFrom(new InternetAddress("from@gmail.com"));
```


-----------


## Spring Mail

The Spring Framework provides a helpful utility library for sending email that shields you from the specifics of the underlying mailing system and is responsible for low-level resource handling on behalf of the client.
Both plain vanilla Spring Framework as well as SpingBoot handles composing and sending emails similar way.

The *org.springframework.mail* package is the root level package for the Spring Framework’s email support. The central interface for sending emails is the `MailSender interface`. A simple value object that encapsulates the properties of a simple mail such as from and to (plus many others) is the `SimpleMailMessage class`.This package also contains a hierarchy of checked exceptions that provide a higher level of abstraction over the lower level mail system exceptions, with the root exception being `MailException`.

The org.springframework.mail.javamail.JavaMailSender interface adds specialized JavaMail features such as MIME message support to the MailSender interface (from which it inherits). JavaMailSender also provides a callback interface for preparation of JavaMail MIME messages, called org.springframework.mail.javamail.MimeMessagePreparator.

JavaMail support for Spring's mail infrastructure. Provides an extended `JavaMailSender` interface and a `MimeMessageHelper` class for convenient population of a JavaMail MimeMessage.

- **Configuring Spring to send email**:- At the heart of Spring’s email abstraction is the MailSender interface. As its name implies,a MailSender implementation sends email by connecting with an email server.Spring comes with one implementation of the MailSender interface, JavaMailSenderImpl, which uses the JavaMail API to send email. Before you can send email messages from your Spring application, you must wire JavaMailSenderImpl as a bean in the Spring application context.

`Configuring a mail sender`:- In its simplest form, JavaMailSenderImpl can be configured as a bean with only a few lines in an @Bean method:

```java
@Bean
public MailSender mailSender(Environment env) {
    JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
    mailSender.setHost(env.getProperty("mailserver.host"));
    return mailSender;
}
```

The host property is optional (it defaults to the host of the underlying JavaMail session), but you’ll probably want to set it. It specifies the hostname for the mail server that will be used to send the email. Here it’s configured by fetching the value from the injected Environment so that you can manage the mail-server configuration outside of Spring (for example, in a properties file).By default, JavaMailSenderImpl assumes that the mail server is listening on port 25 (the standard SMTP port). If your mail server is listening on a different port, specify the correct port number using the port property. For example,

```java
mailSender.setHost(env.getProperty("mailserver.host"));
mailSender.setPort(env.getProperty("mailserver.port"));
```

Mail properties that are needed to specify, e.g the SMTP server may be defined using `JavaMailSenderImpl`.For gmail:-

```java
@Bean
public JavaMailSender javaMailSender(){
    JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
    mailSender.setHost("smtp.gmail.com");
    mailSender.setPort(587);

    mailSender.setUsername("my.gmail@gmail.com");
    mailSender.setPassword("password");

    Properties prop = mailSender.getJavaMailProperties();
    props.put("mail.transport.protocol", "smtp");
    props.put("mail.smtp.auth", "true");
    props.put("mail.smtp.starttls.enable", "true");
    props.put("mail.debug", "true");

    return mailSender;
}
```

`Wiring and using the mail sender`: With the mail sender configured, it’s time to wire it into the bean that will use it.

```java
@Autowired
JavaMailSender mailSender;
```

- **Sending Email**:- 
    - `MailSender` - This interface defines a strategy for sending simple mails. Can be implemented for a variety of mailing systems due to the simple requirements. For richer functionality like MIME messages, consider JavaMailSender.Allows for easy testing of clients, as it does not depend on JavaMail's infrastructure classes: no mocking of JavaMail Session or Transport necessary.
        1. default voidsend(SimpleMailMessage simpleMessage) - Send the given simple mail message.
        2. void send(SimpleMailMessage... simpleMessages) - Send the given array of simple mail messages in batch.
    - `JavaMailSender`: - Extended MailSender interface for JavaMail, supporting MIME messages both as direct arguments and through preparation callbacks. Typically used in conjunction with the MimeMessageHelper class for convenient creation of JavaMail MimeMessages, including attachments etc.The org.springframework.mail.javamail.JavaMailSender interface adds specialized JavaMail features, such as MIME message support to the MailSender interface (from which it inherits). JavaMailSender also provides a callback interface called org.springframework.mail.javamail.MimeMessagePreparator for preparing a MimeMessage.Clients should talk to the mail sender through this interface if they need mail functionality beyond SimpleMailMessage. The production implementation is JavaMailSenderImpl; for testing, mocks can be created based on this interface. Clients will typically receive the JavaMailSender reference through dependency injection.
    The recommended way of using this interface is the MimeMessagePreparator mechanism, possibly using a MimeMessageHelper for populating the message.
    - `JavaMailSenderImpl`: - Production implementation of the JavaMailSender interface, supporting both JavaMail MimeMessages and Spring SimpleMailMessages. Can also be used as a plain MailSender implementation.Allows for defining all settings locally as bean properties. Alternatively, a pre-configured JavaMail Session can be specified, possibly pulled from an application server's JNDI environment.Non-default properties in this object will always override the settings in the JavaMail Session. Note that if overriding all values locally, there is no added value in setting a pre-configured Session.


The entire JavaMail Session management is abstracted by the JavaMailSender. Client code should not deal with a Session in any way, rather leave the entire JavaMail configuration and resource handling to the JavaMailSender implementation. This also increases testability.
- A JavaMailSender client is not as easy to test as a plain MailSender client, but still straightforward compared to traditional JavaMail code: Just let createMimeMessage() return a plain MimeMessage created with a Session.getInstance(new Properties()) call, and check the passed-in messages in your mock implementations of the various send methods.
    1. MimeMessage createMimeMessage() - Create a new JavaMail MimeMessage for the underlying JavaMail Session of this sender.
    2. MimeMessage createMimeMessage(InputStream contentStream) - Create a new JavaMail MimeMessage for the underlying JavaMail Session of this sender, using the given input stream as the message source.
    3. default void send(MimeMessage mimeMessage) - Send the given JavaMail MIME message.
    4. void send(MimeMessage... mimeMessages) - Send the given array of JavaMail MIME messages in batch.
    5. default void send(MimeMessagePreparator mimeMessagePreparator) - Send the JavaMail MIME message prepared by the given MimeMessagePreparator.
    6. default void send(MimeMessagePreparator... mimeMessagePreparators) - Send the JavaMail MIME messages prepared by the given MimeMessagePreparator.


**Messages**:- `MailMessage`:-- This is a common interface for mail messages, allowing a user to set key values required in assembling a mail message, without needing to know if the underlying message is a simple text message or a more sophisticated MIME message.
- Implemented by both `SimpleMailMessage` and `MimeMessageHelper`, to let message population code interact with a simple message or a MIME message through a common interface.
    - `SimpleMailMessage`: - Models a simple mail message, including data such as the from, to, cc, subject, and text fields.Consider JavaMailSender and JavaMail MimeMessages for creating more sophisticated messages, for example messages with attachments, special character encodings, or personal names that accompany mail addresses.
        1. SimpleMailMessage() - Create a new SimpleMailMessage.
        2. SimpleMailMessage(SimpleMailMessage original) - Copy constructor for creating a new SimpleMailMessage from the state of an existing SimpleMailMessage instance.
    - `MimeMailMessage` - Implementation of the MailMessage interface for a JavaMail MIME message, to let message population code interact with a simple message or a MIME message through a common interface.Uses a MimeMessageHelper underneath. Can either be created with a MimeMessageHelper instance or with a JavaMail MimeMessage instance.
        1. MimeMailMessage(MimeMessage mimeMessage) - Create a new MimeMailMessage based on the given JavaMail MimeMessage.
        2. MimeMailMessage(MimeMessageHelper mimeMessageHelper) - Create a new MimeMailMessage based on the given MimeMessageHelper.
    - `MimeMessagePreparator` - Callback interface for the preparation of JavaMail MIME messages.The corresponding send methods of JavaMailSender will take care of the actual creation of a MimeMessage instance, and of proper exception conversion.It is often convenient to use a MimeMessageHelper for populating the passed-in MimeMessage, in particular when working with attachments or special character encodings. See MimeMessageHelper's javadoc for an example.
        1. void prepare(MimeMessage mimeMessage) - Prepare the given new MimeMessage instance.
    - `MimeMessageHelper` is a Helper class for populating a MimeMessage.Mirrors the simple setters of SimpleMailMessage, directly applying the values to the underlying MimeMessage. Allows for defining a character encoding for the entire message, automatically applied by all methods of this helper class.Offers support for HTML text content, inline elements such as images, and typical mail attachments. Also supports personal names that accompany mail addresses. Note that advanced settings can still be applied directly to the underlying MimeMessage object.Typically used in `MimeMessagePreparator` implementations or `JavaMailSender` client code: simply instantiating it as a MimeMessage wrapper, invoking setters on the wrapper, using the underlying MimeMessage for mail sending. Also used internally by JavaMailSenderImpl.
        1. MimeMessageHelper(MimeMessage mimeMessage) - Create a new MimeMessageHelper for the given MimeMessage, assuming a simple text message (no multipart content)
        2. MimeMessageHelper(MimeMessage mimeMessage, boolean multipart) - Create a new MimeMessageHelper for the given MimeMessage, in multipart mode (supporting alternative texts, inline elements and attachments) if requested.
        3. MimeMessageHelper(MimeMessage mimeMessage, boolean multipart, String encoding) - Create a new MimeMessageHelper for the given MimeMessage, in multipart mode (supporting alternative texts, inline elements and attachments) if requested.
        4. MimeMessageHelper(MimeMessage mimeMessage, int multipartMode) - Create a new MimeMessageHelper for the given MimeMessage, in multipart mode (supporting alternative texts, inline elements and attachments) if requested.
        5. MimeMessageHelper(MimeMessage mimeMessage, int multipartMode, String encoding) - Create a new MimeMessageHelper for the given MimeMessage, in multipart mode (supporting alternative texts, inline elements and attachments) if requested.
        6. MimeMessageHelper(MimeMessage mimeMessage, String encoding) - Create a new MimeMessageHelper for the given MimeMessage, assuming a simple text message (no multipart content)
        
Basic MailSender and SimpleMailMessage usage:-

```java
private MailSender mailSender;

SimpleMailMessage message = new SimpleMailMessage();
message.setTo("recipient@example.com");
message.setSubject("Test Subject");
message.setText("Hello, this is a plain text email!");
message.setFrom("your_email@example.com");

mailSender.send(message);
```

Using the JavaMailSender and the MimeMessagePreparator:- Here is another implementation of OrderManager using the MimeMessagePreparator callback interface.

```java
private JavaMailSender mailSender;

MimeMessagePreparator preparator = new MimeMessagePreparator() {
   public void prepare(MimeMessage message) throws MessagingException {
     message.setFrom(new InternetAddress("mail@mycompany.com"));
     message.setTo(Message.RecipientType.TO,new InternetAddress("you@gmail"));
     message.setSubject("my subject");
     message.setText("my text <img src='cid:myLogo'>", true);
     message.addInline("myLogo", new ClassPathResource("img/mylogo.gif"));
     message.addAttachment("myDocument.pdf", new ClassPathResource("doc/myDocument.pdf"));
   }
}

mailSender.send(preparator)
```

Using the JavaMail MimeMessageHelper:- A class that comes in pretty handy when dealing with JavaMail messages is the org.springframework.mail.javamail.MimeMessageHelper class, which shields you from having to use the verbose JavaMail API. Using the MimeMessageHelper it is pretty easy to create a MimeMessage:

```java
JavaMailSenderImpl sender = new JavaMailSenderImpl();
sender.setHost("mail.host.com");

MimeMessage message = sender.createMimeMessage();
MimeMessageHelper helper = new MimeMessageHelper(message,true,"UTF-8");
helper.setTo("test@host.com");
helper.setText("Thank you for ordering!");

sender.send(message);
```

Consider using MimeMailMessage (which implements the common MailMessage interface, just like SimpleMailMessage) on top of this helper, in order to let message population code interact with a simple message or a MIME message through a common interface.

*Warning* regarding multipart mails: Simple MIME messages that just contain HTML text but no inline elements or attachments will work on more or less any email client that is capable of HTML rendering. However, inline elements and attachments are still a major compatibility issue between email clients: It's virtually impossible to get inline elements and attachments working across Microsoft Outlook, Lotus Notes and Mac Mail. Consider choosing a specific multipart mode for your needs.

Sending attachments and inline resources:- Multipart email messages allow for both attachments and inline resources. Examples of inline resources would be images or astylesheet you want to use in your message, but that you don’t want displayed as an attachment.

Attachments:- The following example shows you how to use the MimeMessageHelper to send an email along with a single JPEG image attachment.

```java
JavaMailSenderImpl sender = new JavaMailSenderImpl();
sender.setHost("mail.host.com");
MimeMessage message = sender.createMimeMessage();
// use the true flag to indicate you need a multipart message
MimeMessageHelper helper = new MimeMessageHelper(message, true);
helper.setTo("test@host.com");
helper.setText("Check out this image!");
// let's attach the infamous windows Sample file (this time copied to c:/)
FileSystemResource file = new FileSystemResource(new File("c:/Sample.jpg"));
helper.addAttachment("CoolImage.jpg", file);
sender.send(message);
```

Inline resources:- The following example shows you how to use the MimeMessageHelper to send an email along with an inline image.

```java
JavaMailSenderImpl sender = new JavaMailSenderImpl();
sender.setHost("mail.host.com");
MimeMessage message = sender.createMimeMessage();
// use the true flag to indicate you need a multipart message
MimeMessageHelper helper = new MimeMessageHelper(message, true);
helper.setTo("test@host.com");
// use the true flag to indicate the text included is HTML
helper.setText("<html><body><img src=cid:identifier1234></body></html>", true);
// let's include the infamous windows Sample file (this time copied to c:/)
FileSystemResource res = new FileSystemResource(new File("c:/Sample.jpg"));
helper.addInline("identifier1234", res);
sender.send(message);
```

Inline resources are added to the mime message using the specified Content-ID. The order in which you are adding the text and the resource are very important. Be sure to first add the text and after that the resources.


**Creating email content using a templating library**:- The code in the previous examples explicitly created the content of the email message, using methods calls such as message.setText(..). This is fine for simple cases, and it is okay in the context of the aforementioned examples, where the intent was to show you the very basics of the API.
In your typical enterprise application though, you are not going to create the content of your emails using the above approach for a number of reasons.
1. Creating HTML-based email content in Java code is tedious and error prone
2. There is no clear separation between display logic and business logic
3. Changing the display structure of the email content requires writing Java code, recompiling, redeploying…

Typically the approach taken to address these issues is to use a template library such as FreeMarker or Velocity to define the display structure of email content. This leaves your code tasked only with creating the data that is to be rendered in the email template and sending the email. It is definitely a best practice for when the content of your emails becomes even moderately complex, and with the Spring Framework’s support classes for FreeMarker and Velocity becomes quite easy to do.
