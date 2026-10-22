# Backend

A backend developer focuses entirely on writing business logic for an application and much of the supporting logic as well.
That said, there might be applications where the business logic is split into the frontend and the backend. However, while the frontend dev might have to share their time between UI code and business logic, the backend dev will focus most of their time on core business logic. That’s the main difference between the two.

## Backend Principles

1. High level understanding - How backend systems work.
2. HTTP protocol:- HTTP headers,Types of headers(Request,Representational,General,Security),CORS,HTTP Requests and Response,HTTP Caching,HTTP compression,SSL/TLS, HTTP Methods, HTTP Status code,HTTP Versions,Content Negotiation.
3. Routing:-(Routing components - Query strings, Path param),Route Deprication,Route grouping,securing and optimizing routes,static and dynamic routes.
4. Serialization and Deserialization - (Formats in serialization and deserialization -JSON,XML,Binary fromats),Error handling in serialization & desrialization,security in deserialization.
5. Authentication and Authorization - (Types of authentication- stateless,basic),OAuth,JWT,API keys,Mutli-factor authentication,Salting , Hashing, Crptograpy techniques,CSRF,Auditing,priviledge escalating,Rate limiting.
6. Validation and Transformation - (Validation types - syntatic validation,semantic validation,type validation),client side validation,server side validation,Fail-first principle,Normalizations,Sanitizations,Error handling in validation,Handle failed transformation,trade-offs of validations.
7. Middlewares - Role of middleware, flow of middleware, common middleware - (security middlewares, authentication middleware,logging middleware, error handling middleware, compression middleware,data parsing middleware).
8. Request context - Metadata passed to middlewares,services.
9. API - REST(CRUD),API versioning,SOAP, API pagination.
10. Databases - Relational vs Non-relational databases, indexing, Query optimizations,transactions, ORM, Migrations.
11. Business Logic Layers - Layers of request layer, Separation of Concerns, Service layer design.
12. Caching - Types of caching,caching strategy, level of caching, caching for web aps.
13. Transactional Emails.
14. Task queueing and Scheduling - Batch processing, scheduling - (data backups), task groups,retries in task queues.
15. Elasticsearch - Full text search, indexes, optimization, Search patterns.
16. Error Handling - Error types.
17. Configurations Management - Different Environments, Managing sensitive data,Dynamic enabling and disabling features.
18. Logging, Monitoring & Observability - Types of logging, levels of logging, log rotation.
19. Graceful shutdown - Server restarts, long running jobs.
20. Security - Avoid attacks i.e SQL injection.
21. Scaling & Performance - Bottlenecks, N+1 problems, lazy loading, Memory leaks, Performance testing, modularizations.
22. Concurrency & Parallelism - I/O bounds, CPU bounds.
23. Object Storage & Large files - Multiparts uploads.
24. Real-time backend systems - Websockets, server side events.
25. Testing & Code Quality - TDD, Test coverage.
26. OpenAPI standard - Documentations.
27. WebHooks - 3rd party integration.
28. DevOps for backend.

**High level overview** -

_DNS_ - The Domain Name System (DNS) is the phonebook of the Internet. Humans access information online through domain names, like nytimes.com or espn.com. Web browsers interact through Internet Protocol (IP) addresses. DNS translates domain names to IP addresses so browsers can load Internet resources.

- [@article@What is DNS?](https://www.cloudflare.com/en-gb/learning/dns/what-is-dns/)
- [@article@How DNS works (comic)](https://howdns.works/)
- [@article@Understanding Domain names](https://developer.mozilla.org/en-US/docs/Glossary/DNS/)
- [@video@DNS and How does it Work?](https://www.youtube.com/watch?v=Wj0od2ag5sk)
- [@video@DNS Records](https://www.youtube.com/watch?v=7lxgpKh_fRY)
- [@video@Complete DNS mini-series](https://www.youtube.com/watch?v=zEmUuNFBgN8&list=PLTk5ZYSbd9MhMmOiPhfRJNW7bhxHo4q-K)
- [@feed@Explore top posts about DNS](https://app.daily.dev/tags/dns?ref=roadmapsh)

_Domain Name_ - A domain name is a unique, easy-to-remember address used to access websites, such as ‘google.com’, and ‘facebook.com’. Users can connect to websites using domain names thanks to the DNS system.

- [@article@What is a Domain Name?](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_domain_name)
- [@article@What is a Domain Name? | Domain name vs. URL](https://www.cloudflare.com/en-gb/learning/dns/glossary/what-is-a-domain-name/)
- [@video@A Beginners Guide to How Domain Names Work](https://www.youtube.com/watch?v=Y4cRx19nhJk)
  **HTTP**-

_HTTP_ - HTTP is the `TCP/IP` based application layer communication protocol which standardizes how the client and server communicate with each other. It defines how the content is requested and transmitted across the internet.

- [@article@Everything you need to know about HTTP](https://cs.fyi/guide/http-in-depth)
- [@article@What is HTTP?](https://www.cloudflare.com/en-gb/learning/ddos/glossary/hypertext-transfer-protocol-http/)
- [@video@Full HTTP Networking Course](https://www.youtube.com/watch?v=2JYT5f2isg4)
- [@article@An overview of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)
- [@article@HTTP/3 From A To Z: Core Concepts](https://www.smashingmagazine.com/2021/08/http3-core-concepts-part1/)
- [@video@HTTP/1 to HTTP/2 to HTTP/3](https://www.youtube.com/watch?v=a-sBfyiXysI)
- [@video@HTTP Crash Course & Exploration](https://www.youtube.com/watch?v=iYM2zFP3Zn0)
- [@video@SSL, TLS, HTTPS Explained](https://www.youtube.com/watch?v=j9QmMEWmcfo)

_HTTPS_ - HTTPS is a secure way to send data between a web server and a browser.
A communication through HTTPS starts with the handshake phase during which the server and the client agree on how to encrypt the communication, in particular they choose an encryption algorithm and a secret key. After the handshake all the communication between the server and the client will be encrypted using the agreed upon algorithm and key.

The handshake phase uses a particular kind of cryptography, called asymmetric cryptography, to communicate securely even though client and server have not yet agreed on a secret key. After the handshake phase the HTTPS communication is encrypted with symmetric cryptography, which is much more efficient but requires client and server to both have knowledge of the secret key.

- [@article@What is HTTPS?](https://www.cloudflare.com/en-gb/learning/ssl/what-is-https/)
- [@article@Why HTTPS Matters](https://developers.google.com/web/fundamentals/security/encrypt-in-transit/why-https)
- [@article@Enabling HTTPS on Your Servers](https://web.dev/articles/enable-https)
- [@article@How HTTPS works (comic)](https://howhttps.works/)
- [@video@SSL, TLS, HTTP, HTTPS Explained](https://www.youtube.com/watch?v=hExRDVZHhig)
- [@video@HTTPS — Stories from the field](https://www.youtube.com/watch?v=GoXgl9r0Kjk)
- [@article@HTTPS explained with carrier pigeons](https://baida.dev/articles/https-explained-with-carrier-pigeons)

**Authentication and Authorization** -

_Authentication_ - The API authentication process validates the identity of the client attempting to make a connection by using an authentication protocol. The protocol sends the credentials from the remote client requesting the connection to the remote access server in either plain text or encrypted form. The server then knows whether it can grant access to that remote client or not.

Here is the list of common ways of authentication:

- JWT Authentication
- Token based Authentication
- Session based Authentication
- Basic Authentication
- OAuth - Open Authorization
- SSO - Single Sign On

Visit the following resources to learn more:

- [@article@User Authentication: Understanding the Basics & Top Tips](https://swoopnow.com/user-authentication/)
- [@article@An overview about authentication methods](https://betterprogramming.pub/how-do-you-authenticate-mate-f2b70904cc3a)
- [@roadmap.sh@SSO - Single Sign On](https://roadmap.sh/guides/sso)
- [@roadmap.sh@OAuth - Open Authorization](https://roadmap.sh/guides/oauth)
- [@roadmap.sh@JWT Authentication](https://roadmap.sh/guides/jwt-authentication)
- [@roadmap.sh@Token Based Authentication](https://roadmap.sh/guides/token-authentication)
- [@roadmap.sh@Session Based Authentication](https://roadmap.sh/guides/session-authentication)
- [@roadmap.sh@Basic Authentication](https://roadmap.sh/guides/basic-authentication)
- [@feed@Explore top posts about Authentication](https://app.daily.dev/tags/authentication?ref=roadmapsh)

`Basic authentication` -Given the name "Basic Authentication", you should not confuse Basic Authentication with the standard username and password authentication. Basic authentication is a part of the HTTP specification, and the details can be [found in the RFC7617](https://www.rfc-editor.org/rfc/rfc7617.html).
Because it is a part of the HTTP specifications, all the browsers have native support for "HTTP Basic Authentication".

- [@roadmap.sh@HTTP Basic Authentication](https://roadmap.sh/guides/http-basic-authentication)
- [@video@Illustrated HTTP Basic Authentication](https://www.youtube.com/watch?v=mwccHwUn7Gc)
- [@feed@Explore top posts about Authentication](https://app.daily.dev/tags/authentication?ref=roadmapsh)

`OAuth` - OAuth stands for **O**pen **Auth**orization and is an open standard for authorization. It works to authorize devices, APIs, servers and applications using access tokens rather than user credentials, known as "secure delegated access".

In its most simplest form, OAuth delegates authentication to services like Facebook, Amazon, Twitter and authorizes third-party applications to access the user account **without** having to enter their login and password.

It is mostly utilized for REST/APIs and only provides a limited scope of a user's data.

- [@article@Okta - What the Heck is OAuth](https://developer.okta.com/blog/2017/06/21/what-the-heck-is-oauth)
- [@article@DigitalOcean - An Introduction to OAuth 2](https://www.digitalocean.com/community/tutorials/an-introduction-to-oauth-2)
- [@video@What is OAuth really all about](https://www.youtube.com/watch?v=t4-416mg6iU)
- [@video@OAuth 2.0: An Overview](https://www.youtube.com/watch?v=CPbvxxslDTU)
- [@feed@Explore top posts about OAuth](https://app.daily.dev/tags/oauth?ref=roadmapsh)

`Token authentication` - Token-based authentication is a protocol which allows users to verify their identity, and in return receive a unique access token. During the life of the token, users then access the website or app that the token has been issued for, rather than having to re-enter credentials each time they go back to the same webpage, app, or any resource protected with that same token.

Auth tokens work like a stamped ticket. The user retains access as long as the token remains valid. Once the user logs out or quits an app, the token is invalidated.

Token-based authentication is different from traditional password-based or server-based authentication techniques. Tokens offer a second layer of security, and administrators have detailed control over each action and transaction.

But using tokens requires a bit of coding know-how. Most developers pick up the techniques quickly, but there is a learning curve.

- [@article@What Is Token-Based Authentication?](https://www.okta.com/identity-101/what-is-token-based-authentication/)
- [@feed@Explore top posts about Authentication](https://app.daily.dev/tags/authentication?ref=roadmapsh)

`Cookie-Based Authentication` - Cookies are pieces of data used to identify the user and their preferences. The browser returns the cookie to the server every time the page is requested. Specific cookies like HTTP cookies are used to perform cookie-based authentication to maintain the session for each user.

- [@article@How does cookie based authentication work?](https://stackoverflow.com/questions/17769011/how-does-cookie-based-authentication-work)

_OpenID_ - OpenID is a protocol that utilizes the authorization and authentication mechanisms of OAuth 2.0 and is now widely adopted by many identity providers on the Internet.
It solves the problem of needing to share user's personal info between many different web services(e.g. online shops, discussion forums etc.)

- [@official@Official Website](https://openid.net/)
- [@official@What is OpenID](https://openid.net/connect/)
- [@article@OAuth vs OpenID](https://securew2.com/blog/oauth-vs-openid-which-is-better)
- [@video@An Illustrated Guide to OAuth and OpenID Connect](https://www.youtube.com/watch?v=t18YB3xDfXI)
- [@video@OAuth 2.0 and OpenID Connect (in plain English)](https://www.youtube.com/watch?v=996OiexHze0)
- [@feed@Explore top posts about Authentication](https://app.daily.dev/tags/authentication?ref=roadmapsh)

_SAML_ stands for Security Assertion Markup Language. It is an XML-based standard for exchanging authentication and authorization data between parties, particularly between an identity provider (IdP) and a service provider (SP). In a SAML-based system, a user requests access to a protected resource. The service provider asks the identity provider to authenticate the user and assert whether they are granted access to the resource.

Benefits of SAML - Some advantages of using SAML include:

- Single Sign-On (SSO): Users can log in once at the IdP and access multiple service providers without needing to authenticate again.
- Improved security: Passwords and user credentials are not required to be stored and managed by the service provider, reducing the potential vectors for attack.
- Increased efficiency: As users no longer need to maintain multiple sets of credentials, managing access becomes easier for both the user and the system administrators.
- Interoperability: SAML enables a wide range of applications to work together, regardless of the underlying technology or platform.

SAML Components - Three main components are involved in the SAML architecture:

1. Identity Provider (IdP): The entity that manages users' identities and authenticates them by providing security tokens, also called assertions.
2. Service Provider (SP): The entity that provides a service (such as a web application or API) and relies on the identity provider to authenticate users and grant/deny access to the resources.
3. User/Principal: The end user seeking access to the service provided by the service provider.

SAML Workflow - The SAML authentication process consists of the following steps:

1. The user requests access to a protected resource from the service provider.
2. If the user is not already authenticated, the service provider generates and sends a SAML authentication request to the identity provider.
3. The identity provider authenticates the user (using, e.g., a username and password, multi-factor authentication, or another method).
4. The identity provider constructs a SAML response, which includes details about the user and asserts whether the user is authorized to access the requested resource.
5. The SAML response is sent back to the service provider, typically via the user's web browser or API client.
6. The service provider processes the SAML response, extracts the necessary information, and grants or denies access to the user based on the identity provider's assertion.

With SAML, you can streamline user authentication and authorization across various applications and systems, providing a better user experience and improving your overall backend security.

**APIs** - API is the acronym for Application Programming Interface, which is a software intermediary that allows two applications to talk to each other.

- [@article@What is an API?](https://aws.amazon.com/what-is/api/)
- [@video@What is an API?](https://www.youtube.com/watch?v=s7wmiS2mSXY)

_REST_ - REST, or REpresentational State Transfer, is an architectural style for providing standards between computer systems on the web, making it easier for systems to communicate with each other.

- [@article@REST Fundamental](https://dev.to/cassiocappellari/fundamentals-of-rest-api-2nag)
- [@article@What is a REST API?](https://www.redhat.com/en/topics/api/what-is-a-rest-api)
- [@article@Roy Fieldings dissertation chapter, Representational State Transfer (REST)](https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm)
- [@article@Learn REST: A RESTful Tutorial](https://restapitutorial.com/)
- [@feed@Explore top posts about REST API](https://app.daily.dev/tags/rest-api?ref=roadmapsh)

`Hateoas` - HATEOAS is an acronym for <b>H</b>ypermedia <b>A</b>s <b>T</b>he <b>E</b>ngine <b>O</b>f <b>A</b>pplication <b>S</b>tate, it's the concept that when sending information over a RESTful API the document received should contain everything the client needs in order to parse and use the data i.e they don't have to contact any other endpoint not explicitly mentioned within the Document.

- [@article@What is HATEOAS and why is it important for my REST API?](https://restcookbook.com/Basics/hateoas/)

_SOAP_ - Simple Object Access Protocol (SOAP) is a message protocol for exchanging information between systems and applications. When it comes to application programming interfaces (APIs), a SOAP API is developed in a more structured and formalized way. SOAP messages can be carried over a variety of lower-level protocols, including the web-related Hypertext Transfer Protocol (HTTP).

- [@article@w3school SOAP explanation](https://www.w3schools.com/xml/xml_soap.asp)

_gRPC_ - gRPC is a high-performance, open source universal RPC framework
RPC stands for Remote Procedure Call, there's an ongoing debate on what the g stands for. RPC is a protocol that allows a program to execute a procedure of another program located on another computer. The great advantage is that the developer doesn’t need to code the details of the remote interaction. The remote procedure is called like any other function. But the client and the server can be coded in different languages.

- [@official@gRPC Website](https://grpc.io/)
- [@official@gRPC Docs](https://grpc.io/docs/)
- [@article@What Is GRPC?](https://www.wallarm.com/what/the-concept-of-grpc)
- [@video@What Is GRPC?](https://www.youtube.com/watch?v=hVrwuMnCtok)
- [@feed@Explore top posts about gRPC](https://app.daily.dev/tags/grpc?ref=roadmapsh)

_GraphQL_ - GraphQL is a query language and runtime system for APIs (application programming interfaces). It is designed to provide a flexible and efficient way for clients to request data from servers, and it is often used as an alternative to REST (representational state transfer) APIs.

One of the main features of GraphQL is its ability to specify exactly the data that is needed, rather than receiving a fixed set of data from an endpoint. This allows clients to request only the data that they need, and it reduces the amount of data that needs to be transferred over the network.

GraphQL also provides a way to define the structure of the data that is returned from the server, allowing clients to request data in a predictable and flexible way. This makes it easier to build and maintain client applications that depend on data from the server.

GraphQL is widely used in modern web and mobile applications, and it is supported by a large and active developer community.

- [@official@GraphQL Official Website](https://graphql.org/)
- [@feed@Explore top posts about GraphQL](https://app.daily.dev/tags/graphql?ref=roadmapsh)

**Serializatin and Deserialization** -

_JSON or JavaScript Object Notation_ is an encoding scheme that is designed to eliminate the need for an ad-hoc code for each application to communicate with servers that communicate in a defined way. JSON API module exposes an implementation for data stores and data structures, such as entity types, bundles, and fields.

- [@official@Official Website](https://jsonapi.org/)
- [@official@Official Docs](https://jsonapi.org/implementations/)
- [@video@JSON API: Explained in 4 minutes ](https://www.youtube.com/watch?v=N-4prIh7t38)

**Task queueing and Scheduling** -

_Message Brokers_ - Message brokers are an inter-application communication technology to help build a common integration mechanism to support cloud-native, microservices-based, serverless, and hybrid cloud architectures. Two of the most famous message brokers are `RabbitMQ` and `Apache Kafka`

- [@video@Introduction to Message Brokers](https://www.youtube.com/watch?v=57Qr9tk6Uxc)

_Kafka_ - Apache Kafka is an open-source distributed event streaming platform used by thousands of companies for high-performance data pipelines, streaming analytics, data integration, and mission-critical applications.

- [@article@Apache Kafka quickstart](https://kafka.apache.org/quickstart)
- [@video@Apache Kafka Fundamentals](https://www.youtube.com/watch?v=B5j3uNBH8X4)
- [@feed@Explore top posts about Kafka](https://app.daily.dev/tags/kafka?ref=roadmapsh)

_RabbitMQ_ - With tens of thousands of users, RabbitMQ is one of the most popular open-source message brokers. RabbitMQ is lightweight and easy to deploy on-premises and in the cloud. It supports multiple messaging protocols. RabbitMQ can be deployed in distributed and federated configurations to meet high-scale, high-availability requirements.

- [@official@RabbitMQ Tutorials](https://www.rabbitmq.com/getstarted.html)
- [@video@RabbitMQ Tutorial - Message Queues and Distributed Systems](https://www.youtube.com/watch?v=nFxjaVmFj5E)
- [@feed@Explore top posts about RabbitMQ](https://app.daily.dev/tags/rabbitmq?ref=roadmapsh)

**Elasticsearch** - Elastic search at its core is a document-oriented search engine. It is a document based database that lets you INSERT, DELETE , RETRIEVE and even perform analytics on the saved records. But, Elastic Search is unlike any other general purpose database you have worked with, in the past. It's essentially a search engine and offers an arsenal of features you can use to retrieve the data stored in it, as per your search criteria. And that too, at lightning speeds.

- [@official@Elasticsearch Website](https://www.elastic.co/elasticsearch/)
- [@official@Elasticsearch Documentation](https://www.elastic.co/guide/index.html)
- [@feed@Explore top posts about ELK](https://app.daily.dev/tags/elk?ref=roadmapsh)

**Graceful Shutdown** -

_Graceful Degradation_ - Graceful degradation is a design principle that states that a system should be designed to continue functioning, even if some of its components or features are not available. In the context of web development, graceful degradation refers to the ability of a web page or application to continue functioning, even if the user's browser or device does not support certain features or technologies.

Graceful degradation is often used as an alternative to progressive enhancement, a design principle that states that a system should be designed to take advantage of advanced features and technologies if they are available.

- [@article@What is Graceful Degradation & Why Does it Matter?](https://blog.hubspot.com/website/graceful-degradation)
- [@article@Four Considerations When Designing Systems For Graceful Degradation](https://newrelic.com/blog/best-practices/design-software-for-graceful-degradation)
- [@article@The Art of Graceful Degradation](https://farfetchtechblog.com/en/blog/post/the-art-of-failure-ii-graceful-degradation/)

**Caching** - Caching is a technique of storing frequently used data or information in a local memory, for a certain time period. So, next time, when the client requests the same information, instead of retrieving the information from the database, it will give the information from the local memory. The main advantage of caching is that it improves the performance by reducing the processing burden.

_Client Side Caching_ - Client-side caching is the storage of network data to a local cache for future re-use. After an application fetches network data, it stores that resource in a local cache. Once a resource has been cached, the browser uses the cache on future requests for that resource to boost performance.

- [@video@Everything you need to know about HTTP Caching](https://www.youtube.com/watch?v=HiBDZgTNpXY)

_Server side_ - Server-side caching temporarily stores web files and data on the origin server to reuse later.
When the user first requests for the webpage, the website goes under the normal process of retrieving data from the server and generates or constructs the webpage of the website. After the request has happened and the response has been sent back, the server copies the webpage and stores it as a cache.

Next time the user revisits the website, it loads the already saved or cached copy of the webpage, thus making it faster.

- [@article@Server-side caching ](https://www.starwindsoftware.com/resource-library/server-side-caching/)
- [@article@Server-side caching and Client-side caching](https://www.codingninjas.com/codestudio/library/server-side-caching-and-client-side-caching)
- [@feed@Explore top posts about Web Development](https://app.daily.dev/tags/webdev?ref=roadmapsh)

_Memcached_ - Memcached (pronounced variously mem-cash-dee or mem-cashed) is a general-purpose distributed memory-caching system. It is often used to speed up dynamic database-driven websites by caching data and objects in RAM to reduce the number of times an external data source (such as a database or API) must be read. Memcached is free and open-source software, licensed under the Revised BSD license. Memcached runs on Unix-like operating systems (Linux and macOS) and on Microsoft Windows. It depends on the `libevent` library.

Memcached's APIs provide a very large hash table distributed across multiple machines. When the table is full, subsequent inserts cause older data to be purged in the least recently used (LRU) order. Applications using Memcached typically layer requests and additions into RAM before falling back on a slower backing store, such as a database.

Memcached has no internal mechanism to track misses which may happen. However, some third-party utilities provide this functionality.

- [@article@Memcached, From Wikipedia](https://en.wikipedia.org/wiki/Memcached)
- [@opensource@Memcached, From Official Github](https://github.com/memcached/memcached#readme)
- [@article@Memcached Tutorial](https://www.tutorialspoint.com/memcached/index.htm)

_CDN (Content Delivery Network)_ - A Content Delivery Network (CDN) service aims to provide high availability and performance improvements of websites. This is achieved with fast delivery of website assets and content typically via geographically closer endpoints to the client requests.
Traditional commercial CDNs (Amazon CloudFront, Akamai, CloudFlare and Fastly) provide servers across the globe which can be used for this purpose.
Serving assets and contents via a CDN reduces bandwidth on website hosting, provides an extra layer of caching to reduce potential outages and can improve website security as well

- [@article@CloudFlare - What is a CDN? | How do CDNs work?](https://www.cloudflare.com/en-ca/learning/cdn/what-is-a-cdn/)
- [@article@Wikipedia - Content Delivery Network](https://en.wikipedia.org/wiki/Content_delivery_network)
- [@video@What is Cloud CDN?](https://www.youtube.com/watch?v=841kyd_mfH0)
- [@video@What is a Content Delivery Network (CDN)?](https://www.youtube.com/watch?v=Bsq5cKkS33I)

**Logging, Monitoring & Observability** -

_Instrumentation, Monitoring, and Telemetry_ -

Instrumentation refers to the measure of a product's performance, in order to diagnose errors and to write trace information. Instrumentation can be of two types: source instrumentation and binary instrumentation.
Backend monitoring allows the user to view the performance of infrastructure i.e. the components that run a web application. These include the HTTP server, middleware, database, third-party API services, and more.

Telemetry is the process of continuously collecting data from different components of the application. This data helps engineering teams to troubleshoot issues across services and identify the root causes. In other words, telemetry data powers observability for your distributed applications.

- [@article@What is Instrumentation?](<https://en.wikipedia.org/wiki/Instrumentation_(computer_programming)>)
- [@article@What is Monitoring?](https://www.yottaa.com/performance-monitoring-backend-vs-front-end-solutions/)
- [@article@What is Telemetry?](https://www.sumologic.com/insight/what-is-telemetry/)
- [@feed@Explore top posts about Monitoring](https://app.daily.dev/tags/monitoring?ref=roadmapsh)

_Observability_ -

In software development, observability is the measure of how well we can understand a system from the work it does, and how to make it better.

So what makes a system to be "observable"? It is its ability of producing and collecting metrics, logs and traces in order for us to understand what happens under the hood and identify issues and bottlenecks faster.

You can of course implement all those features by yourself, but there are a lot of softwares out there that can help you with it like Datadog, Sentry and CloudWatch.

- [@article@DataDog Docs](https://docs.datadoghq.com/)
- [@article@AWS CloudWatch Docs](https://aws.amazon.com/cloudwatch/getting-started/)
- [@article@Sentry Docs](https://docs.sentry.io/)
- [@video@AWS re:Invent 2017: Improving Microservice and Serverless Observability with Monitor](https://www.youtube.com/watch?v=Wx0SHRb2xcI)
- [@article@Observability and Instrumentation: What They Are and Why They Matter](https://newrelic.com/blog/best-practices/observability-instrumentation)
- [@feed@Explore top posts about Observability](https://app.daily.dev/tags/observability?ref=roadmapsh)

**Security** -

_OWASP Security Risks_ - OWASP or Open Web Application Security Project is an online community that produces freely-available articles, methodologies, documentation, tools, and technologies in the field of web application security.

- [@article@Wikipedia - OWASP](https://en.wikipedia.org/wiki/OWASP)
- [@opensource@OWASP Application Security Verification Standard](https://github.com/OWASP/ASVS)
- [@article@OWASP Top 10 Security Risks](https://cheatsheetseries.owasp.org/IndexTopTen.html)
- [@article@OWASP Cheatsheets](https://cheatsheetseries.owasp.org/cheatsheets/AJAX_Security_Cheat_Sheet.html)

_Web Security Knowledge_ - Web security refers to the protective measures taken by the developers to protect the web applications from threats that could affect the business.

- [@article@Why HTTPS Matters](https://developers.google.com/web/fundamentals/security/encrypt-in-transit/why-https)
- [@article@Wikipedia - OWASP](https://en.wikipedia.org/wiki/OWASP)
- [@opensource@OWASP Web Application Security Testing Checklist](https://github.com/0xRadi/OWASP-Web-Checklist)
- [@article@OWASP Top 10 Security Risks](https://sucuri.net/guides/owasp-top-10-security-vulnerabilities-2021/)
- [@article@OWASP Cheatsheets](https://cheatsheetseries.owasp.org/cheatsheets/AJAX_Security_Cheat_Sheet.html)
- [@article@Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [@feed@Explore top posts about Security](https://app.daily.dev/tags/security?ref=roadmapsh)

_Cors_ - Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.

- [@article@Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
- [@video@CORS in 100 Seconds](https://www.youtube.com/watch?v=4KHiSt0oLJ0)
- [@video@CORS in 6 minutes](https://www.youtube.com/watch?v=PNtFSVU-YTI)
- [@article@Understanding CORS](https://rbika.com/blog/understanding-cors)

_Content Security Policy_ - Content Security Policy is a computer security standard introduced to prevent cross-site scripting, clickjacking and other code injection attacks resulting from execution of malicious content in the trusted web page context.

- [@article@MDN — Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [@article@Google Devs — Content Security Policy (CSP)](https://developers.google.com/web/fundamentals/security/csp)
- [@feed@Explore top posts about Security](https://app.daily.dev/tags/security?ref=roadmapsh)

_MD5_ - MD5 (Message-Digest Algorithm 5) is a hash function that is currently advised not to be used due to its extensive vulnerabilities. It is still used as a checksum to verify data integrity.

- [@article@Wikipedia - MD5](https://en.wikipedia.org/wiki/MD5)
- [@article@What is MD5?](https://www.techtarget.com/searchsecurity/definition/MD5)
- [@article@Why is MD5 not safe?](https://infosecscout.com/why-md5-is-not-safe/)

_SSL/TLS_ - Secure Sockets Layer (SSL) and Transport Layer Security (TLS) are cryptographic protocols used to provide security in internet communications. These protocols encrypt the data that is transmitted over the web, so anyone who tries to intercept packets will not be able to interpret the data. One difference that is important to know is that SSL is now deprecated due to security flaws, and most modern web browsers no longer support it. But TLS is still secure and widely supported, so preferably use TLS.

- [@article@Wikipedia - SSL/TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security)
- [@article@Cloudflare - What is SSL?](https://www.cloudflare.com/learning/ssl/what-is-ssl/)

_SHA family_ - SHA (Secure Hash Algorithms) is a family of cryptographic hash functions created by the NIST (National Institute of Standards and Technology). The family includes:

- SHA-0: Published in 1993, this is the first algorithm in the family. Shortly after its release, it was discontinued for an undisclosed significant flaw.
- SHA-1: Created to replace SHA-0 and which resembles MD5, this algorithm has been considered insecure since 2010.
- SHA-2: This isn't an algorithm, but a set of them, with SHA-256 and SHA-512 being the most popular. SHA-2 is still secure and widely used.
- SHA-3: Born in a competition, this is the newest member of the family. SHA-3 is very secure and doesn't carry the same design flaws as its brethren.

Visit the following resources to learn more:

- [@article@Wikipedia - SHA-1](https://en.wikipedia.org/wiki/SHA-1)
- [@article@Wikipedia - SHA-2](https://en.wikipedia.org/wiki/SHA-2)
- [@article@Wikipedia - SHA-3](https://en.wikipedia.org/wiki/SHA-3)

_Scrypt_ - Scrypt (pronounced "ess crypt") is a password hashing function (like bcrypt). It is designed to use a lot of hardware, which makes brute-force attacks more difficult. Scrypt is mainly used as a proof-of-work algorithm for cryptocurrencies.

- [@article@Wikipedia - Scrypt](https://en.wikipedia.org/wiki/Scrypt)

_Bcrypt_ - bcrypt is a password hashing function, that has been proven reliable and secure since it's release in 1999. It has been implemented into most commonly-used programming languages.

- [@article@bcrypts npm package](https://www.npmjs.com/package/bcrypt)
- [@article@Understanding bcrypt](https://auth0.com/blog/hashing-in-action-understanding-bcrypt/)
- [@video@bcrypt explained](https://www.youtube.com/watch?v=O6cmuiTBZVs)

_Server Security_ - Learn about the security of your server and how to secure it. Here are some of the topics off the top of my head:

- Use a firewall: One of the most effective ways to secure a server is to use a firewall to block all unnecessary incoming traffic. You can use iptables on Linux systems or a hardware firewall to do this.
- Close unnecessary ports: Make sure to close any ports that are not needed for your server to function properly. This will reduce the attack surface of your server and make it more difficult for attackers to gain access.
- Use strong passwords: Use long, complex passwords for all of your accounts, and consider using a password manager to store them securely.
- Keep your system up to date: Make sure to keep your operating system and software up to date with the latest security patches. This will help to prevent vulnerabilities from being exploited by attackers.
- Use SSL/TLS for communication: Use Secure Sockets Layer (SSL) or Transport Layer Security (TLS) to encrypt communication between your server and client devices. This will help to protect against man-in-the-middle attacks and other types of cyber threats.
- Use a intrusion detection system (IDS): An IDS monitors network traffic and alerts you to any suspicious activity, which can help you to identify and respond to potential threats in a timely manner.
- Enable two-factor authentication: Two-factor authentication adds an extra layer of security to your accounts by requiring a second form of authentication, such as a code sent to your phone, in addition to your password.

Also learn about OpenSSL and creating your own PKI as well as managing certs, renewals, and mutual client auth with x509 certs

Learn more from the following resources:

- [@article@How to Defend Against Server-Side Request Forgery](https://www.freecodecamp.org/news/defending-against-ssrf-attacks/)

**Testing & Code Quality** - A key to building software that meets requirements without defects is testing. Software testing helps developers know they are building the right software. When tests are run as part of the development process (often with continuous integration tools), they build confidence and prevent regressions in the code.

- [@article@What is Software Testing?](https://www.guru99.com/software-testing-introduction-importance.html)
- [@article@Testing Pyramid](https://www.browserstack.com/guide/testing-pyramid-for-test-automation)
- [@feed@Explore top posts about Testing](https://app.daily.dev/tags/testing?ref=roadmapsh)

_Test Driven Development_ - Test driven development (TDD) is the process of writing tests for software's requirements which will fail until the software is developed to meet those requirements. Once those tests pass, then the cycle repeats to refactor code or develop another feature/requirement. In theory, this ensures that software is written to meet requirements in the simplest form, and avoids code defects.

- [@article@What is Test Driven Development (TDD)?](https://www.guru99.com/test-driven-development.html)
- [@article@Test-driven development](https://www.ibm.com/garage/method/practices/code/practice_test_driven_development/)
- [@video@Agile in Practice: Test Driven Development](https://youtu.be/uGaNkTahrIw)
- [@feed@Explore top posts about TDD](https://app.daily.dev/tags/tdd?ref=roadmapsh)

_Unit Testing_ - Unit testing is where individual units (modules, functions/methods, routines, etc.) of software are tested to ensure their correctness. This low-level testing ensures smaller components are functionally sound while taking the burden off of higher-level tests. Generally, a developer writes these tests during the development process and they are run as automated tests.

- [@article@Unit Testing Tutorial](https://www.guru99.com/unit-testing-guide.html)
- [@video@What is Unit Testing?](https://youtu.be/3kzHmaeozDI)
- [@feed@Explore top posts about Testing](https://app.daily.dev/tags/testing?ref=roadmapsh)

_Integration Testing_ - Integration testing is a broad category of tests where multiple software modules are integrated and tested as a group. It is meant to test the interaction between multiple services, resources, or modules. For example, an API's interaction with a backend service, or a service with a database.

- [@article@Integration Testing](https://www.guru99.com/integration-testing.html)
- [@article@How to Integrate and Test Your Tech Stack](https://thenewstack.io/how-to-integrate-and-test-your-tech-stack/)
- [@video@What is Integration Testing?](https://youtu.be/QYCaaNz8emY)
- [@feed@Explore top posts about Testing](https://app.daily.dev/tags/testing?ref=roadmapsh)

_Functional Testing_ - Functional testing is where software is tested to ensure functional requirements are met. Usually, it is a form of black box testing in which the tester has no understanding of the source code; testing is performed by providing input and comparing expected/actual output.
It contrasts with non-functional testing, which includes performance, load, scalability, and penetration testing.

- [@article@What is Functional Testing?](https://www.guru99.com/functional-testing.html)
- [@video@Functional Testing vs Non-Functional Testing](https://youtu.be/j_79AXkG4PY)
- [@feed@Explore top posts about Testing](https://app.daily.dev/tags/testing?ref=roadmapsh)

**OpenAPI standard** -

_Building for Scale_ - Speaking in general terms, scalability is the ability of a system to handle a growing amount of work by adding resources to it.
A software that was conceived with a scalable architecture in mind, is a system that will support higher workloads without any fundamental changes to it, but don't be fooled, this isn't magic. You'll only get so far with smart thinking without adding more sources to it.

For a system to be scalable, there are certain things you must pay attention to, like:

- Coupling
- Observability
- Evolvability
- Infrastructure

When you think about the infrastructure of a scalable system, you have two main ways of building it: using on-premises resources or leveraging all the tools a cloud provider can give you.

The main difference between on-premises and cloud resources will be FLEXIBILITY, on cloud providers you don't really need to plan ahead, you can upgrade your infrastructure with a couple of clicks, while with on-premises resources you will need a certain level of planning.

- [@article@Scalable Architecture: A Definition and How-To Guide](https://www.sentinelone.com/blog/scalable-architecture/)
- [@video@Scaling Distributed Systems - Software Architecture Introduction](https://www.youtube.com/watch?v=gxfERVP18-g)

_Open api spec_ - The OpenAPI Specification (OAS) defines a standard, language-agnostic interface to RESTful APIs which allows both humans and computers to discover and understand the capabilities of the service without access to source code, documentation, or through network traffic inspection. When properly defined, a consumer can understand and interact with the remote service with a minimal amount of implementation logic.

An OpenAPI definition can then be used by documentation generation tools to display the API, code generation tools to generate servers and clients in various programming languages, testing tools, and many other use cases.

- [@article@OpenAPI Specification Website](https://swagger.io/specification/)
- [@article@Open API Live Editor](https://swagger.io/tools/swagger-editor/)
- [@article@Official training guide](https://swagger.io/docs/specification/about/)
- [@video@OpenAPI 3.0: How to Design and Document APIs with the Latest OpenAPI Specification 3.0](https://www.youtube.com/watch?v=6kwmW_p_Tig)

**Scaling & Performance** -

_Horizontal/Vertical Scaling_ -
Horizontal scaling is a change in the **number** of a resource. For example, increasing the number of virtual machines processing messages in a queue. Vertical scaling is a change in the **size/power** of a resource. For example, increasing the memory or disk space available to a machine. Scaling can be applied to databases, cloud resources, and other areas of computing.

- [@article@Horizontal vs Vertical Scaling](https://touchstonesecurity.com/horizontal-vs-vertical-scaling-what-you-need-to-know/)
- [@video@System Design Basics: Horizontal vs. Vertical Scaling](https://youtu.be/xpDnVSmNFX0)
- [@video@System Design 101](https://www.youtube.com/watch?v=Y-Gl4HEyeUQ)

_Scaling Databases_ - Scaling databases is the process of adapting them to handle more data and users efficiently. It's achieved by either upgrading existing hardware (vertical scaling) or adding more servers (horizontal scaling). Techniques like sharding and replication are key. This ensures databases continue to be a robust asset as they grow.

- [@article@MongoDB: Database Scaling Basics](https://www.mongodb.com/basics/scaling)
- [@feed@Explore top posts about Backend Development](https://app.daily.dev/tags/backend?ref=roadmapsh)

_Profiling Performance_ - There are several ways to profile the performance of a database:

- Monitor system performance: You can use tools like the Windows Task Manager or the Unix/Linux top command to monitor the performance of your database server. These tools allow you to see the overall CPU, memory, and disk usage of the system, which can help identify any resource bottlenecks.
- Use database-specific tools: Most database management systems (DBMSs) have their own tools for monitoring performance. For example, Microsoft SQL Server has the SQL Server Management Studio (SSMS) and the sys.dm_os_wait_stats dynamic management view, while Oracle has the Oracle Enterprise Manager and the v$waitstat view. These tools allow you to see specific performance metrics, such as the amount of time spent waiting on locks or the number of physical reads and writes.
- Use third-party tools: There are also several third-party tools that can help you profile the performance of a database. Some examples include SolarWinds Database Performance Analyzer, Quest Software Foglight, and Redgate SQL Monitor. These tools often provide more in-depth performance analysis and can help you identify specific issues or bottlenecks.
- Analyze slow queries: If you have specific queries that are running slowly, you can use tools like EXPLAIN PLAN or SHOW PLAN in MySQL or SQL Server to see the execution plan for the query and identify any potential issues. You can also use tools like the MySQL slow query log or the SQL Server Profiler to capture slow queries and analyze them further.
- Monitor application performance: If you are experiencing performance issues with a specific application that is using the database, you can use tools like Application Insights or New Relic to monitor the performance of the application and identify any issues that may be related to the database.

Have a look at the documentation for the database that you are using.

_N plus one problem_ - The N+1 query problem happens when your code executes N additional query statements to fetch the same data that could have been retrieved when executing the primary query.

- [@article@In Detail Explanation of N+1 Problem](https://medium.com/doctolib/understanding-and-fixing-n-1-query-30623109fe89)
- [@article@What is the N+1 Problem](https://planetscale.com/blog/what-is-n-1-query-problem-and-how-to-solve-it)
- [@article@Solving N+1 Problem: For Java Backend Developers](https://dev.to/jackynote/solving-the-notorious-n1-problem-optimizing-database-queries-for-java-backend-developers-2o0p)

**Twelve-Factor Apps** - The Twelve-Factor App is a methodology for building scalable and maintainable software-as-a-service (SaaS) applications. It is based on a set of best practices that were identified by the authors of the methodology as being essential for building modern, cloud-native applications.

The Twelve-Factor App methodology consists of the following principles:

- Codebase: There should be a single codebase for the application, with multiple deployments.
- Dependencies: The application should explicitly declare and isolate its dependencies.
- Config: The application should store configuration in the environment.
- Backing services: The application should treat backing services as attached resources.
- Build, release, run: The application should be built, released, and run as an isolated unit.
- Processes: The application should be executed as one or more stateless processes.
- Port binding: The application should expose its services through port binding.
- Concurrency: The application should scale out by adding more processes, not by adding threads.- Disposability: The application should be designed to start and stop quickly.
- Dev/prod parity: The development, staging, and production environments should be as similar as possible.
- Logs: The application should treat logs as event streams.
- Admin processes: The application should run admin/maintenance tasks as one-off processes.

The Twelve-Factor App methodology is widely adopted by developers of SaaS applications, and it is seen as a best practice for building cloud-native applications that are scalable, maintainable, and easy to deploy.

- [@article@The Twelve-Factor App](https://12factor.net/)

**Real-time backend systems** - Real Time Data - There are many ways to get real time data from the backend. Some of them are:

1. Websockets
2. Server Sent Events
3. Long Polling
4. Short Polling

- [@video@Introduction to HTTP Polling and Web Sockets](https://www.youtube.com/watch?v=OsgrJDMPl58)
- [@article@Introduction to Long Polling](https://www.pubnub.com/guides/long-polling/)

_Web sockets_ - Web sockets are defined as a two-way communication between the servers and the clients, which mean both the parties, communicate and exchange data at the same time. This protocol defines a full duplex , bi-directional, real-time communication over a single, long-lived connection. Web sockets take a step forward in bringing desktop rich functionalities to the web browsers.

- [Introduction to WebSockets](https://www.tutorialspoint.com/websockets/index.htm)
- [A Beginners Guide to WebSockets](https://www.youtube.com/watch?v=8ARodQ4Wlf4)
- [Socket.io Library Bidirectional and low-latency communication for every platform](https://socket.io/)

_Server Sent Events_ - Server-Sent Events (SSE) is a technology that allows a web server to push data to a client in real-time. It uses an HTTP connection to send a stream of data from the server to the client, and the client can listen for these events and take action when they are received.

SSE is useful for applications that require real-time updates, such as chat systems, stock tickers, and social media feeds. It is a simple and efficient way to establish a long-lived connection between a client and a server, and it is supported by most modern web browsers.

To use SSE, the client must create an EventSource object and specify the URL of the server-side script that will send the events. The server can then send events by writing them to the response stream with the proper formatting.

- [@article@Server-Sent Events - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events)

_Long Polling_ - Long polling is a technique where the client polls the server for new data. However, if the server does not have any data available for the client, instead of sending an empty response, the server holds the request and waits for some specified period of time for new data to be available. If new data becomes available during that time, the server immediately sends a response to the client, completing the open request. If no new data becomes available and the timeout period specified by the client expires, the server sends a response indicating that fact. The client will then immediately re-request data from the server, creating a new request-response cycle.

_Short Polling_ - Short polling is a technique where the client repeatedly polls the server for new data. This is the most common approach to polling. It's simple to implement and understand, but it's not the most efficient way of doing things.

**DevOps for backend** -

_CI/CD_ - CI/CD (Continuous Integration/Continuous Deployment) is the practice of automating building, testing, and deployment of applications with the main goal of detecting issues early, and provide quicker releases to the production environment.

CI/CD (Continuous Integration/Continuous Deployment) is the practice of automating building, testing, and deployment of applications with the main goal of detecting issues early, and provide quicker releases to the production environment.

- [@video@DevOps CI/CD Explained in 100 Seconds by Fireship](https://www.youtube.com/watch?v=scEDHsr3APg)
- [@video@Automate your Workflows with GitHub Actions](https://www.youtube.com/watch?v=nyKZTKQS_EQ)
- [@article@What is CI/CD?](https://about.gitlab.com/topics/ci-cd/)
- [@article@A Primer: Continuous Integration and Continuous Delivery (CI/CD)](https://thenewstack.io/a-primer-continuous-integration-and-continuous-delivery-ci-cd/)
- [@article@3 Ways to Use Automation in CI/CD Pipelines](https://thenewstack.io/3-ways-to-use-automation-in-ci-cd-pipelines/)
- [@article@Articles about CI/CD](https://thenewstack.io/category/ci-cd/)
- [@feed@Explore top posts about CI/CD](https://app.daily.dev/tags/cicd?ref=roadmapsh)

_Containerization vs. Virtualization_ - Containers and virtual machines are the two most popular approaches to setting up a software infrastructure for your organization.

- [@article@Containerization vs. Virtualization: Everything you need to know](https://middleware.io/blog/containerization-vs-virtualization/)
- [@video@Containerization or Virtualization - The Differences ](https://www.youtube.com/watch?v=1WnDHitznGY)
- [@feed@Explore top posts about Containers](https://app.daily.dev/tags/containers?ref=roadmapsh)

`LXC` is an abbreviation used for Linux Containers which is an operating system that is used for running multiple Linux systems virtually on a controlled host via a single Linux kernel. LXC is a userspace interface for the Linux kernel containment features. Through a powerful API and simple tools, it lets Linux users easily create and manage system or application containers.

Visit the following resources to learn more:

- [@article@LXC Documentation](https://linuxcontainers.org/lxc/documentation/)
- [@article@What is LXC?](https://linuxcontainers.org/lxc/introduction/)
- [@video@Linux Container (LXC) Introduction](https://youtu.be/_KnmRdK69qM)
- [@video@Getting started with LXC containers](https://youtu.be/CWmkSj_B-wo)

_Version Control Systems_ - Version control/source control systems allow developers to track and control changes to code over time. These services often include the ability to make atomic revisions to code, branch/fork off of specific points, and to compare versions of code. They are useful in determining the who, what, when, and why code changes were made.

- [@article@Git](https://git-scm.com/)
- [@article@What is Version Control?](https://www.atlassian.com/git/tutorials/what-is-version-control)

`Git` - [Git](https://git-scm.com/) is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

- [@article@Introduction to Git](https://learn.microsoft.com/en-us/training/modules/intro-to-git/)
- [@video@Git & GitHub Crash Course For Beginners](https://www.youtube.com/watch?v=SWYqp7iY_Tc)
- [@article@Learn Git with Tutorials, News and Tips - Atlassian](https://www.atlassian.com/git)
- [@article@Git Cheat Sheet](https://cs.fyi/guide/git-cheatsheet)
- [@article@Learn Git Branching](https://learngitbranching.js.org/)
- [@article@Git Tutorial](https://www.w3schools.com/git/)
- [@feed@Explore top posts about Git](https://app.daily.dev/tags/git?ref=roadmapsh)

`GitHub` - GitHub is a provider of Internet hosting for software development and version control using Git. It offers the distributed version control and source code management functionality of Git, plus its own features.

- [@opensource@GitHub Website](https://github.com)
- [@article@GitHub Documentation](https://docs.github.com/en/get-started/quickstart)
- [@article@How to Use Git in a Professional Dev Team](https://ooloo.io/project/github-flow)
- [@video@What is GitHub?](https://www.youtube.com/watch?v=w3jLJU7DT5E)
- [@video@Git vs. GitHub: Whats the difference?](https://www.youtube.com/watch?v=wpISo9TNjfU)
- [@video@Git and GitHub for Beginners](https://www.youtube.com/watch?v=RGOj5yH7evk)
- [@video@Git and GitHub - CS50 Beyond 2019](https://www.youtube.com/watch?v=eulnSXkhE7I)
- [@article@Learn Git Branching](https://learngitbranching.js.org/?locale=en_us)
- [@feed@Explore top posts about GitHub](https://app.daily.dev/tags/github?ref=roadmapsh)

`GitLab` - GitLab is a provider of internet hosting for software development and version control using Git. It offers the distributed version control and source code management functionality of Git, plus its own features.

- [@opensource@GitLab Website](https://gitlab.com/)
- [@article@GitLab Documentation](https://docs.gitlab.com/)
- [@feed@Explore top posts about GitLab](https://app.daily.dev/tags/gitlab?ref=roadmapsh)

`Bitbucket` - Bitbucket is a Git based hosting and source code repository service that is Atlassian's alternative to other products like GitHub, GitLab etc
Bitbucket offers hosting options via Bitbucket Cloud (Atlassian's servers), Bitbucket Server (customer's on-premise) or Bitbucket Data Centre (number of servers in customers on-premise or cloud environment)

- [@official@Bitbucket Website](https://bitbucket.org/product)
- [@official@Getting started with Bitbucket](https://bitbucket.org/product/guides/basics/bitbucket-interface)
- [@article@Using Git with Bitbucket Cloud](https://www.atlassian.com/git/tutorials/learn-git-with-bitbucket-cloud)
- [@official@A brief overview of Bitbucket](https://bitbucket.org/product/guides/getting-started/overview#a-brief-overview-of-bitbucket)
- [@video@Bitbucket tutorial | How to use Bitbucket Cloud](https://www.youtube.com/watch?v=M44nEyd_5To)
- [@video@Bitbucket Tutorial | Bitbucket for Beginners](https://www.youtube.com/watch?v=i5T-DB8tb4A)
- [@feed@Explore top posts about Bitbucket](https://app.daily.dev/tags/bitbucket?ref=roadmapsh)

## Web Servers

Web servers can be either hardware or software, or perhaps a combination of the two.

**Hardware Side**:- A hardware web server is a computer that houses web server software and the files that make up a website (for example, HTML documents, images, CSS stylesheets, and JavaScript files). A web server establishes a connection to the Internet and facilitates the physical data exchange with other web-connected devices.

**Software side**:A software web server has a number of software components that regulate how hosted files are accessed by online users. This is at the very least an HTTP server. Software that knows and understands HTTP and URLs (web addresses) is known as an HTTP server (the protocol your browser uses to view webpages). The content of these hosted websites is sent to the end user's device through an HTTP server, which may be accessed via the domain names of the websites it holds.

Basically, an HTTP request is made by a browser anytime it wants a file that is stored on a web server. The relevant (hardware) web server receives the request, which is then accepted by the appropriate (software) HTTP server, which then locates the requested content and returns it to the browser over HTTP. (If the server cannot locate the requested page, it responds with a 404 error.)

- [@article@What is a Web Server ](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_web_server)
- [@video@Web Server Concepts and Examples](https://youtu.be/9J1nJOivdyw)

_Nginx_ - NGINX is a powerful web server and uses a non-threaded, event-driven architecture that enables it to outperform Apache if configured correctly. It can also do other important things, such as load balancing, HTTP caching, or be used as a reverse proxy.

- [@official@Official Website](https://nginx.org/)
- [@video@NGINX Explained in 100 Seconds](https://www.youtube.com/watch?v=JKxlsvZXG7c)
- [@feed@Explore top posts about Nginx](https://app.daily.dev/tags/nginx?ref=roadmapsh)

_MS IIS_ - Internet Information Services (IIS) for Windows® Server is a flexible, secure and manageable Web server for hosting anything on the Web.

- [@official@Official Website](https://www.iis.net/)
- [@video@Learn Windows Web Server IIS](https://www.youtube.com/watch?v=1VdxPWwtISA)
- [@feed@Explore top posts about .NET](https://app.daily.dev/tags/.net?ref=roadmapsh)

_Caddy_ - The Caddy web server is an extensible, cross-platform, open-source web server written in Go. It has some really nice features like automatic SSL/HTTPs and a really easy configuration file.

- [@article@Official Website](https://caddyserver.com/)
- [@video@Getting started with Caddy the HTTPS Web Server from scratch](https://www.youtube.com/watch?v=t4naLFSlBpQ)

_Apache_ - Apache is a free, open-source HTTP server, available on many operating systems, but mainly used on Linux distributions. It is one of the most popular options for web developers, as it accounts for over 30% of all the websites, as estimated by W3Techs.

- [@article@Apache Server Website](https://httpd.apache.org/)
- [@video@What is Apache Web Server?](https://www.youtube.com/watch?v=kaaenHXO4t4)
- [@feed@Explore top posts about Apache](https://app.daily.dev/tags/apache?ref=roadmapsh)

## Architectural Patterns

An architectural pattern is a general, reusable solution to a commonly occurring problem in software architecture within a given context. The architectural patterns address various issues in software engineering, such as computer hardware performance limitations, high availability and minimization of a business risk.

Visit the following resources to learn more:

- [@article@Architectural Patterns in a nutshell](https://towardsdatascience.com/10-common-software-architectural-patterns-in-a-nutshell-a0b47a1e9013)

## Backpressure

Backpressure is a design pattern that is used to manage the flow of data through a system, particularly in situations where the rate of data production exceeds the rate of data consumption. It is commonly used in cloud computing environments to prevent overloading of resources and to ensure that data is processed in a timely and efficient manner.

There are several ways to implement backpressure in a cloud environment:

- Buffering: This involves storing incoming data in a buffer until it can be processed, allowing the system to continue receiving data even if it is temporarily unable to process it.
- Batching: This involves grouping incoming data into batches and processing the batches in sequence, rather than processing each piece of data individually.
- Flow control: This involves using mechanisms such as flow control signals or windowing to regulate the rate at which data is transmitted between systems.

Backpressure is an important aspect of cloud design, as it helps to ensure that data is processed efficiently and that the system remains stable and available. It is often used in conjunction with other design patterns, such as auto-scaling and load balancing, to provide a scalable and resilient cloud environment.

Visit the following resources to learn more:

- [@article@Awesome Architecture: Backpressure](https://awesome-architecture.com/back-pressure/)

## Circuit Breaker

The circuit breaker design pattern is a way to protect a system from failures or excessive load by temporarily stopping certain operations if the system is deemed to be in a failed or overloaded state. It is commonly used in cloud computing environments to prevent cascading failures and to improve the resilience and availability of a system.

A circuit breaker consists of three states: closed, open, and half-open. In the closed state, the circuit breaker allows operations to proceed as normal. If the system encounters a failure or becomes overloaded, the circuit breaker moves to the open state, and all subsequent operations are immediately stopped. After a specified period of time, the circuit breaker moves to the half-open state, and a small number of operations are allowed to proceed. If these operations are successful, the circuit breaker moves back to the closed state; if they fail, the circuit breaker moves back to the open state.

The circuit breaker design pattern is useful for protecting a system from failures or excessive load by providing a way to temporarily stop certain operations and allow the system to recover. It is often used in conjunction with other design patterns, such as retries and fallbacks, to provide a more robust and resilient cloud environment.

Visit the following resources to learn more:

- [@article@Circuit Breaker - AWS Well-Architected Framework](https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/rel_mitigate_interaction_failure_graceful_degradation.html)
- [@article@Circuit Breaker - Complete Guide](https://mateus4k.github.io/posts/circuit-breakers/)

## Core and Emerging Programming Languages

Even if you’re a beginner the least you would have known is that Web Development is majorly classified into two facets: Frontend Development and Backend Development. And obviously, they both have their respective set of tools and technologies. For instance, when we talk about Frontend Development, there always comes 3 names first and foremost – HTML, CSS, and JavaScript.

In the same way, when it comes to Backend Web Development – we primarily require a backend (or you can say server-side) programming language to make the website function along with various other tools & technologies such as databases, frameworks, web servers, etc.

Pick a language from the given list and make sure to learn its quirks, core details about its runtime e.g. concurrency, memory model etc.

- _Go_

Go is an open source programming language supported by Google. Go can be used to write cloud services, CLI tools, used for API development, and much more.

- [@roadmap@Visit Dedicated Go Roadmap](/golang)
- [@official@A Tour of Go – Go Basics](https://go.dev/tour/welcome/1)
- [@official@Go Reference Documentation](https://go.dev/doc/)
- [@article@Go by Example - annotated example programs](https://gobyexample.com/)
- [@article@W3Schools Go Tutorial ](https://www.w3schools.com/go/)
- [@article@Making a RESTful JSON API in Go](https://thenewstack.io/make-a-restful-json-api-go/)
- [@article@Go, the Programming Language of the Cloud](https://thenewstack.io/go-the-programming-language-of-the-cloud/)
- [@video@Go Class by Matt](https://www.youtube.com/playlist?list=PLoILbKo9rG3skRCj37Kn5Zj803hhiuRK6)
- [@feed@Explore top posts about Golang](https://app.daily.dev/tags/golang?ref=roadmapsh)

- _Java_

Java is general-purpose language, primarily used for Internet-based applications.
It was created in 1995 by James Gosling at Sun Microsystems and is one of the most popular options for backend developers.

Visit the following resources to learn more:

- [@roadmap@Visit Dedicated Java Roadmap](/java)
- [@official@Java Website](https://www.java.com/)
- [@article@W3 Schools Tutorials](https://www.w3schools.com/java/)
- [@video@Java Crash Course](https://www.youtube.com/watch?v=eIrMbAQSU34)
- [@video@Complete Java course](https://www.youtube.com/watch?v=xk4_1vDrzzo)
- [@feed@Explore top posts about Java](https://app.daily.dev/tags/java?ref=roadmapsh)

One of the most basic skills you should focus on as a backend developer is on identifying key programming languages to learn (or at least keep an eye out for).
There are some essential backend languages that the industry has adopted as de facto standards. This means most new projects are usually coded using one (or multiple) of these programming languages.

- _JavaScript_

Apart from being used in the browser, JavaScript is also used in backend e.g. using [Node.js](https://nodejs.org/) or [Deno](https://deno.land/) for writing server-side code in JavaScript.

If you pick up JavaScript for the Backend, my personal recommendation would be to learn [JavaScript](/javascript) and then go with [Node.js](/nodejs) as it is the most popular and widely used option. Also, I would recommend learning TypeScript later on as you continue with your backend development Journey; it's a superset of JavaScript and is used in many projects.

- [@roadmap@Visit Dedicated JavaScript Roadmap](/javascript)
- [@article@W3Schools – JavaScript Tutorial](https://www.w3schools.com/js/)
- [@article@The Modern JavaScript Tutorial](https://javascript.info/)
- [@article@Eloquent Javascript - Book](https://eloquentjavascript.net/)
- [@opensource@You Dont Know JS Yet (book series) ](https://github.com/getify/You-Dont-Know-JS)
- [@video@JavaScript Crash Course for Beginners](https://youtu.be/hdI2bqOjy3c)
- [@roadmap@Visit Dedicated Node.js Roadmap](/nodejs)
- [@video@Node.js Crash Course](https://www.youtube.com/watch?v=fBNz5xF-Kx4)
- [@video@Node.js Tutorial for Beginners](https://www.youtube.com/watch?v=TlB_eWDSMt4)
- [@official@Official JavaScript Documentation](https://www.javascript.com/)
- [@feed@Explore top posts about JavaScript](https://app.daily.dev/tags/javascript?ref=roadmapsh)

- _PHP_

PHP is a general purpose scripting language often used for making dynamic and interactive Web pages. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1994. The PHP reference implementation is now produced by The PHP Group and supported by PHP Foundation. PHP supports procedural and object-oriented styles of programming with some elements of functional programming as well.

- [@official@PHP Website](https://php.net/)
- [@article@Learn PHP - W3Schools](https://www.w3schools.com/php/)
- [@article@PHP - The Right Way](https://phptherightway.com/)
- [@video@PHP for Beginners](https://www.youtube.com/watch?v=U2lQWR6uIuo&list=PL3VM-unCzF8ipG50KDjnzhugceoSG3RTC)
- [@video@PHP For Absolute Beginners](https://www.youtube.com/watch?v=2eebptXfEvw)
- [@video@Full PHP 8 Tutorial - Learn PHP The Right Way In 2022](https://www.youtube.com/watch?v=sVbEyFZKgqk&list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-)
- [@feed@Explore top posts about PHP](https://app.daily.dev/tags/php?ref=roadmapsh)

- _Ruby_ - Ruby is a high-level, interpreted programming language that blends Perl, Smalltalk, Eiffel, Ada, and Lisp. Ruby focuses on simplicity and productivity along with a syntax that reads and writes naturally. Ruby supports procedural, object-oriented and functional programming and is dynamically typed.

- [@article@Ruby Website](https://www.ruby-lang.org/en/)
- [@article@Learn Ruby in 20 minutes](https://www.ruby-lang.org/en/documentation/quickstart/)
- [@article@Ruby, An Introduction to a Programmer’s Best Friend](https://thenewstack.io/ruby-a-programmers-best-friend/)
- [@video@Ruby Comprehensive courses](https://www.youtube.com/playlist?list=PL_EzhIKp343lBMH4UuklrMRL_WkilGoXe)
- [@feed@Explore top posts about Ruby](https://app.daily.dev/tags/ruby?ref=roadmapsh)

- _Rust_

Rust is a modern systems programming language focusing on safety, speed, and concurrency. It accomplishes these goals by being memory safe without using garbage collection.

- [@article@The Rust Programming Language - online book](https://doc.rust-lang.org/book/)
- [@article@Rust by Example - collection of runnable examples](https://doc.rust-lang.org/stable/rust-by-example/index.html)
- [@article@Rust vs. Go: Why They’re Better Together](https://thenewstack.io/rust-vs-go-why-theyre-better-together/)
- [@article@Rust by the Numbers: The Rust Programming Language in 2021](https://thenewstack.io/rust-by-the-numbers-the-rust-programming-language-in-2021/)
- [@feed@Explore top posts about Rust](https://app.daily.dev/tags/rust?ref=roadmapsh)

_C#_ - C# (pronounced "C sharp") is a general purpose programming language made by Microsoft. It is used to perform different tasks and can be used to create web apps, games, mobile apps, etc.

Visit the following resources to learn more:

- [@article@C# Learning Path](https://docs.microsoft.com/en-us/learn/paths/csharp-first-steps/?WT.mc_id=dotnet-35129-website)
- [@article@C# on W3 schools](https://www.w3schools.com/cs/index.php)
- [@article@Introduction to C#](https://docs.microsoft.com/en-us/shows/CSharp-101/?WT.mc_id=Educationalcsharp-c9-scottha)
- [@video@C# tutorials](https://www.youtube.com/watch?v=gfkTfcpWqAY&list=PLTjRvDozrdlz3_FPXwb6lX_HoGXa09Yef)
- [@feed@Explore top posts about C#](https://app.daily.dev/tags/c#?ref=roadmapsh)

**Java.** One of the most common alternatives for enterprise solutions, Java, has been constantly evolving since its first release back in 1995. All that time making its way into big enterprises that trust its robustness and ever-growing community of developers. While not the easiest language to learn, it’s definitely up there in the top 10 most popular [backend languages](https://roadmap.sh/backend/languages) (according to [StackOverflow’s 2023 Developer survey](https://survey.stackoverflow.co/2023/#technology-most-popular-technologies)).

Java has a massive presence and for good reason (according to [JetBrain’s survey in 2022, Java was used by 48% of developers](https://w3techs.com/technologies/details/pl-php)).It's the kind of programming language that's everywhere – serving up websites, running your favorite apps, and even powering big-scale enterprise systems.

While there are other options, the ones mentioned above, from the backend point of view, are some of the most relevant languages to pay attention to. Here are the top 10 most popular ones amongst professional developers (screenshot taken from SO’s survey of 2023):

Now, learning Java, (a strongly typed, object oriented programming language (OOP), is a journey worth taking, but it's not a walk in the park. It's a bit like climbing a mountain – you start at the bottom with the basics, and as you ascend, you get into the nitty-gritty of things like object-oriented programming. The process will force you to learn a lot, which is a great thing, by the end you’ll have a lot of understanding of mechanics and concepts around OOP that can be extrapolated into other languages. However, that can also be overwhelming to some developers who just want to learn by building mini-projects. In those situations, the learning curve of Java might be too long (not steep, but long because there is a lot more to cover than with alternatives such as Python or JavaScript).

That said, the community is big and there are tons of resources, from online courses to forums, helping you navigate the Java landscape. And good reason, considering Java has been around for quite a while.

Java's everywhere. From web development to mobile apps, and even diving into the world of big data, Java's got its fingerprints all over. And if it’s not the language itself, it’s the Java Virtual Machine (JVM) powering some other language, like Spark.

Java’s the language of choice for many big enterprises given its innate robustness (the first version of the language was released in 1995, it’s had quite a long time to evolve), and its robust ecosystem of libraries and frameworks makes it a go-to for developers.

_Pros and Cons of Java_ - For all its power and robustness, there are some negative (and positive) aspects to picking Java as your first backend language.

- `Pros` -
  - Java has a mature ecosystem with a varied array of libraries and frameworks for you to try. The community has been working on them and evolving them for years in many cases, so they’re quite ready to develop enterprise-ready solutions.
  - Java’s multithreading support makes it ideal for some processing-heavy tasks in the backend of big applications.
  - Java’s heavy focus on object oriented programming makes it a great option for developers who enjoy that paradigm.
- Cons
  - Java’s verbose syntax might be a problem for some people. While you can still code without an issue, it all comes down to personal preference. If you like to write less and do more with your code, Java might not be the ideal pick for you. It’s verbosity can increase development time in some situations.
  - Java applications can have higher memory consumption than others, especially compared to others like PHP. While the reason for this is their entire architecture, the fact remains.

**JavaScript (or any of its variants, such as TypeScript)- (Node.js).** This is a very common option because it’s also the language used by frontend developers, thus making it easier for developers to work on both sides of the same project.
With Node.js, you can use the JavaScript language both for the frontend (client side) and for the backend (server side) of your application.

![Stackoverflow Survey Result](https://assets.roadmap.sh/guest/6529303b545cb53d4aa730ca_1709057007054.png)

They’re some of the most known and used languages in the industry right now (see [StackOverflow’s 2023 Developer Survey](https://survey.stackoverflow.co/2023/#most-popular-technologies-language-prof)). That said, keep in mind that these are all great options, and they’re not presented here in any particular order.

If you've got the basics of JavaScript down, even if your experience has only been on the frontend, diving into Node.js is like leveling up. It lets you use the same language for both frontend and backend, which means less time juggling languages and more time building cool stuff.

The event-driven, non-blocking architecture is one of the main features that make the language so special – it makes your web apps fast and efficient without you having to learn more complex concepts such as multi-threading. Plus, the community is constantly growing and there are tutorials everywhere to guide you through the Node.js universe.

If you were to rank languages based on the amount of content out there to learn them, JavaScript would be one of the first ones (if not the first one) on the list.

Now, let's talk about frameworks. In the case of JavaScript, this topic is so varied that recommending a single option for someone just getting started is really hard.

For example, if you want to go frontend agnostic, or in other words, you don’t care about the technology being used to develop the client side of your app, then a good starting option would be [Express.js](https://expressjs.com/). This framework used to be the industry standard. And while that’s no longer the case, it’s still a perfect first choice if you’re looking for something with the required functionality to make your life a lot easier.

Now, if on the other hand, you’re looking to build the frontend and the backend at the same time, then I would recommend going with [Next.js](https://nextjs.org/) if you’re already familiar with React. Or if on the other hand, you prefer Vue.js, then definitely try [Nuxt](https://nuxt.com/). Either one of those will help you get the job done with all the bells and whistles you can think of.

According to [StackOverflow’s 2023 survey, JavaScript is the most used language by professionals](https://survey.stackoverflow.co/2023/#most-popular-technologies-language-prof) (with 65.85% of the votes).

![JavaScript Interest](/guides/backend-languages/javascript-interest.png)

If you’re coming from the client side, then adopting JS for your backend will let you start working in minutes. You’ll probably spend more time learning the backend-specific concepts than the language itself.

On the other hand, if you’re coming from zero, or from other programming languages, JS has some quirks, for sure, but if you go the JS route, you’re already making way for a potential switch into the frontend in the future. Who knows, maybe in a few months you’ll also want to start working on the frontend, and by having picked up JS as your main backend language, you have 90% of the work already cut for you.

There is really no downside to picking JS as your first backend language.

_Pros and Cons of JavaScript_ - While there might not be a downside to picking JS, there is no perfect language out there, so let’s take a look at some of the pros and cons before moving on to the next one.

- `Pros` -
  - Going with JavaScript, you’re using the same language on the backend and on the frontend. There is less cognitive load while switching environments if you’re the one coding both sides of the app.
  - The ecosystem around JavaScript is one of the richest ones you can find. The community is constantly pushing the limits of the language and coming up with new solutions to everyday problems.
  - The simple syntax allows you to reduce development time because you don’t have to write as much code to achieve good results.

`Cons` -

- Asynchronous programming can be hard for some developers coming from other languages, like Python for example.
- The lack of strong types in JavaScript can cause some problems for big codebases.
- The single-thread nature of the language makes it really hard to implement CPU-intensive tasks. While there is support for multi-threading, it’s not extensive nor commonly used.
- Debugging asynchronous code can be difficult for new developers given the non-linear nature of it.

**PHP** - Now, if you’re looking for something very well established in the web development industry, just like Java but with a shorter learning curve, then you’re probably looking for PHP.
As a note about PHP’s relevancy, while many developers might claim that PHP is a dying tech, according to [W3Techs, over 75% of websites with a backend use PHP](https://w3techs.com/technologies/details/pl-php).
It's the glue that holds a ton of websites together, and its longevity in the web development scene is no accident.

If you're diving into PHP, you wouldn’t be so wrong (no matter what others might tell you). It's got a gentle learning curve, which means you can start building things pretty quickly. Getting everything set up and working will probably take you 10 minutes, and you’ll be writing your first “hello world” 5 minutes after that.
The vast community support and an ocean of online resources make mastering PHP a breeze. Plus, its library support is like having a toolkit that's always expanding – you'll find what you need, whether you're wrangling databases, handling forms, or making your website dance with dynamic content.

If you’re looking to pick up PHP, look for the LAMP stack, which stands for **L**inux, **A**pache, **M**ySQL, and **P**HP. With that tech stack, you’ll have everything you need to start creating websites in no time.

_Modern PHP Frameworks and Their Impact_ - If we’re talking about PHP frameworks, then we gotta talk about [Laravel](https://laravel.com/) and [Symfony](https://symfony.com/). They are like the rockstars of the modern PHP world.
Laravel comes with a lot of tools and features that help you speed up your development process. On the other side, Symfony has a modular architecture, making it a solid choice for projects of all sizes.
These frameworks showcase how PHP has evolved, staying relevant and powerful in the ever-changing landscape of web development.

_Pros and Cons of PHP_ - Let’s take a look at some of the most common advantages of going with PHP for the backend and some cons to discuss why it might not be the best choice for you.

- `Pros` -
  - PHP is designed for web development, which still makes it a very popular choice for a backend language.
  - PHP’s community is quite big, considering how old the language is, so if you need help, chances are, someone has the answer you’re looking for.

- Cons - One of the major complaints developers have about the language is its inconsistent function naming convention. While not a huge problem, it makes it very hard for developers to intuitively find the right function by name. This causes you to constantly verify your code against the documentation to make sure you’re not making mistakes.

**Go** - Now, let's close in on Go, the programming language born at Google that's all about simplicity and efficiency. Go embraces a clean and straightforward syntax. Despite its simplicity, it focuses heavily on performance, making it an excellent choice for building modern, scalable applications.

According to the [PYPL index](https://pypl.github.io/PYPL.html) (using Google searches to weigh interest of developers in a particular language), we can see a clear worldwide growing interest in Go from the development community:

- **Go (A.K.A Golang).** This programming language was developed by Google. It was designed with simplicity, efficiency, and concurrency in mind. That’s made it gain popularity in the backend development space, making it an interesting option for projects that prioritize performance and concurrency.
  [Go Interest](/guides/backend-languages/pypl-go-index.png)

Go stands out in the crowd, especially when it comes to handling concurrency and scalability. Its built-in support for concurrent programming, through goroutines and channels, makes it a standout choice for applications that need to juggle multiple tasks simultaneously. This makes Go particularly adept at handling the demands of today's highly concurrent and distributed systems. In other words, Go is a great choice for building microservices, a type of system that is very commonly used as the backend for complex web applications.

Learning Go is a smooth ride, thanks to its simplicity and extensive documentation. Developers often find themselves quickly transitioning from understanding the basics to building robust applications.

The language's focus on developer productivity is evident in its quick compilation times and the absence of excessive boilerplate code, allowing developers to concentrate on building features rather than wrestling with the language itself.

_Pros and Cons of Go_ - Let’s take a look at some pros and cons for the last programming language on our list.

`Pros` -

- Go code compiles quickly, which in turn leads to very fast development cycles. This is a big plus if you’re developing a big application with a large codebase because other options might slow down your process with their compilation times.
- Go's syntax is simple enough to make it easy to learn and understand for new developers.

`Cons`

- Go’s ecosystem is quite young when compared to the other alternatives here, so the maturity of the tools available might not be the same as, for example, Java or JavaScript tooling.

**Python** - Python is a well known programming language which is both a strongly typed and a dynamically typed language. Being an interpreted language, code is executed as soon as it is written and the Python syntax allows for writing code in functional, procedural or object-oriented programmatic ways.
Python has been around for decades already and while it’s never been the most popular option, it has always managed to stay within the top 5 choices. People love it for being easy to read, straightforward, and able to handle all sorts of tasks, making it a top pick for developers globally. Sure, Python's got a big name in data processing and machine learning, but let's not forget its solid impact on web development!.

While a very common option for other types of projects (such as data processing and [data science](https://roadmap.sh/ai-data-scientist)), it’s still very popular in the web development world. Python has many good qualities and supporting frameworks that make it a very easy-to-pick-up option for coding backend systems.

What makes Python extra appealing, especially for beginners, is the fact that reading and writing it feels very much like English (or at least, as pseudo code). This makes it a top choice for folks just starting out in coding.

Visit the following resources to learn more:

- [@roadmap@Visit Dedicated Python Roadmap](/python)
- [@official@Python Website](https://www.python.org/)
- [@official@Python Getting Started](https://www.python.org/about/gettingstarted/)
- [@article@Automate the Boring Stuff](https://automatetheboringstuff.com/)
- [@article@FreeCodeCamp.org - How to Learn Python ? ](https://www.freecodecamp.org/news/how-to-learn-python/)
- [@article@Python principles - Python basics](https://pythonprinciples.com/)
- [@article@W3Schools - Python Tutorial ](https://www.w3schools.com/python/)
- [@article@Python Crash Course](https://ehmatthes.github.io/pcc/)
- [@article@An Introduction to Python for Non-Programmers](https://thenewstack.io/an-introduction-to-python-for-non-programmers/)
- [@article@Getting Started with Python and InfluxDB](https://thenewstack.io/getting-started-with-python-and-influxdb/)
- [@video@Python for Beginners - Learn Python in 1 Hour](https://www.youtube.com/watch?v=kqtD5dpn9C8&ab_channel=ProgrammingwithMosh)
- [@feed@Explore top posts about Python](https://app.daily.dev/tags/python?ref=roadmapsh)

One of Python's standout features is its beginner-friendly syntax, making it an ideal language for those new to programming. The emphasis on readability and the absence of complex syntax (for the most part), eases the learning curve, enabling new developers to quickly grasp fundamental concepts.

Python's community plays a critical role in its accessibility. Abundant learning resources, tutorials, and documentation are readily available, empowering beginners to progress from basic programming principles to advanced backend development seamlessly. Online platforms like Codecademy, Coursera, realpython.com, and even Google offer comprehensive courses tailored to all skill levels.

_Practical Applications and Popular Frameworks_ - Python's versatility is evident in its applicability across a spectrum of industries, from web development and data science to artificial intelligence and automation. In the context of backend development, Python shines brightly with its two standout frameworks: [Django](https://www.djangoproject.com/) and [Flask](https://github.com/pallets/flask).

`Django` - So, let's talk about Django – it's like the superhero of web frameworks, at least in the world of Python. This high-level powerhouse is all about that "batteries-included" style, giving you a whole package of tools and features that make development lightning-fast. It follows the [Model-View-Controller](https://www.crio.do/blog/understand-mvc-architecture/) (MVC) architecture that gives your web applications a solid structure, making them scalable and easy to keep up.
Part of that whole “batteries-included” motto means that it comes with an admin panel, an [ORM](https://www.freecodecamp.org/news/what-is-an-orm-the-meaning-of-object-relational-mapping-database-tools/) (Object-Relational Mapping) for smooth data handling, and security features that make sure your project is secured out-of-the-box. All these goodies work together, making Django a top choice for projects, whether they're a walk in the park or a brain-bending challenge.

`Flask` - On the other hand, Flask, a micro-framework, takes a minimalist approach, providing developers with the flexibility to choose components as needed. While Flask may be lighter than Django, it doesn't compromise on functionality. Its simplicity and modularity make it an excellent choice for small to medium-sized projects, allowing developers to tailor the framework to meet specific project requirements.

Both Django and Flask underscore Python's suitability for backend development, offering developers frameworks that cater to diverse project needs while maintaining Python's hallmark readability and efficiency.

_Pros and Cons of Python_ - As with all other backend languages in this article, Python has some pros and cons you should consider before picking it as your first backend language.

- `Pros` -
  - The syntax is very easy to learn because it’s very much like writing English.
  - The ecosystem is quite mature and has some nice frameworks that will contain all the tools you need to get started

- `Cons` -
  - It’s not the most popular backend language, so while the frameworks available are constantly updated, they aren’t necessarily using the latest technology trends.
  - The GIL (Global Interpreter Lock) limits Python’s performance in multi-threaded applications.

### Keeping an eye on the rising stars

If working with at least one of the most common backend languages was important, understanding what are the rising technologies in the backend world is just as crucial.

You won’t see a new programming language being released every month. However, in the span of a few years, you might see the release of several, and out of those, some might stick long enough to become new standards.

For example, take a look at the period between 2012 and 2015; in just 3 years, 9 programming languages were released, out of which most of them are being used to this day.

![Famous Languages](https://assets.roadmap.sh/guest/6529303b545cb53d4aa730ca_1709058257292.png)

- In 2012, we got Julia, Elm, Go, and TypeScript.
- In 2013, we got Dart
- In 2014, we got Swift, Hack, and Crystal
- And in 2015, we got Rust.

Some of those languages are very relevant to this day, such as TypeScript and Rust, while others, such as Hack and Crystal, might be known to only a few in very niche sectors.

Of course, it’s impossible to predict which programming language will become a standard. However, the skill that you need to hone is that of keeping an eye on the industry to spot new and emerging trends.

### The importance of supporting frameworks

Frameworks for a specific programming language do change a lot faster than the language itself, though.

Frameworks are there to provide you with a simplified gateway into the functionalities that you’d normally need for common tasks. For example, in the context of backend web development, frameworks usually take care of:

- **Parsing HTTP requests** and turning them into objects you can easily interact with (so you don’t have to learn how the HTTP protocol works).
- **Abstracting concepts,** such as a request or a response, into objects and functions that you can reason about at a higher level. This gives you an easier time thinking about how to solve a problem using these tools.
- **Accessing data becomes a lot easier when there are abstractions.** Some frameworks provide what is known as an ORM (Object Relational Mapping). Through ORM, you can interact with databases without having to think about writing SQL queries or even database schemas.
- And many more.

Frameworks are an essential aspect of the work you’ll do as a backend developer, which is why you should not neglect them. Of course, learning and mastering every single framework out there is impossible. Instead, learn to keep an eye out in the industry and see what are the most common frameworks, and focus on one (or two) of them.

## API Development

Now, if you’re inside the “**The System**” box, then you need to understand how to interact with these APIs using the right tools. If you’re inside the “**External System**” box, then you need to understand the type of standards these APIs need to follow and how to implement them.

Don’t worry though, for both situations, there are always frameworks and libraries you can use to simplify your task and ensure you’re following the proper industry standards.

**common API types** - The most common types of APIs used in the industry currently are REST and GraphQL.

- _RESTful APIs_ These are APIs that work over HTTP and make extensive use of the HTTP Verbs to give meaning to each request. They’ve been the most popular type of API until recently, so there are still a lot of projects and teams that make use of it.
- _GraphQL_ GraphQL APIs operate over HTTP as well, leveraging the HTTP protocol and its verbs. In contrast to the conventional RESTful APIs, GraphQL has emerged as a powerful alternative, offering a flexible and efficient approach to data querying and manipulation. GraphQL allows clients to request only the data they need, providing a more tailored and efficient interaction between clients and servers.

Is there one better than the other? There is no easy way to answer that question as both are capable of doing everything you’d need. It’s more about your particular requirements and the preferences of your dev team.

## Software Design and Architecture

Coding is not just about writing code.

While that statement might be a bit confusing, the truth is there is a lot of architecture involved in software development (both in frontend and backend development). Sometimes, working on these aspects of a system is the job of a specific role called “architect.” However, for backend systems, it’s not uncommon for backend developers to also be involved in architecture conversations and decisions. You’re helping design the underlying backend infrastructure, after all.

The following diagram shows an example of what a very simple system’s architecture might look like:

![Simple System Architecture](https://assets.roadmap.sh/guest/6529303b545cb53d4aa730ca_1709057266440.png)

While the example is oversimplified, it gives you an idea of what the practice of “architecting a system” is.

Essentially, architecting a system means coming up with concepts that represent different aspects of the solution and then deciding how you want to make them interact with each other.

Why is architecture so important here? Because it gives you properties such as code encapsulation, separation of concerns, reusability, and even scalability as a byproduct of the architecture itself.

Let’s take a quick look at some of the most common architectures used for creating backend systems.

### Most common backend architectures

Microservice architecture is a pattern in which highly cohesive, loosely coupled services are separately developed, maintained, and deployed. Each component handles an individual function, and when combined, the application handles an overall business function.

Visit the following resources to learn more:

- [@official@Pattern: Microservice Architecture](https://microservices.io/patterns/microservices.html)
- [@article@What is Microservices?](https://smartbear.com/solutions/microservices/)
- [@article@Microservices 101](https://thenewstack.io/microservices-101/)
- [@article@Primer: Microservices Explained](https://thenewstack.io/primer-microservices-explained/)
- [@article@Articles about Microservices](https://thenewstack.io/category/microservices/)
- [@feed@Explore top posts about Microservices](https://app.daily.dev/tags/microservices?ref=roadmapsh)

There are too many different architectural styles and patterns to cover them all inside a single article, but let's just look at some of the most common ones and how they can help you while working on your backend system.

- **Monolithic architecture:** In a monolithic architecture, the entire application is built as a single, tightly coupled unit. All components (frontend, backend, database, etc) are part of the same codebase. This is a great first architecture because it feels very natural to develop under, and if your project is not going to grow out of proportion, then you will probably not hit any of the cons.
- **Microservice-based architecture:** The application is divided into small, independent services, each responsible for a specific business capability. These services communicate through APIs.
- **Service-Oriented Architecture:** Similar to microservices, a service-oriented architecture splits functionality into individual services. The main difference is that these services aren’t as granular as a microservice, so they might incorporate functionalities related to different business entities.
- **Event-driven architecture:** With this architecture, each system (or service) responds to events (e.g., user actions and messages from other services) by triggering actions or processes. All services communicate with each other indirectly through an event bus (also known as a “message bus”), so it removes the possibility of having two or more services coupled with each other (meaning that they can’t be treated individually).
- **Serverless Architecture:** Also known as Function as a Service (FaaS), serverless architecture allows you to focus on writing code without worrying about the server where they’ll run. Functions are executed in response to events without the need for provisioning or managing servers (this is done FOR you automatically).
- **Microkernel architecture:** This architecture lets you build the core, essential functionality into a small microkernel and have the rest of the features built as plugins that can be added, removed or exchanged easily.

And if you want to know more about the patterns and principles mentioned here, please check out the [Software Design and Architecture roadmap](https://roadmap.sh/software-design-architecture).

Serverless is an architecture in which a developer builds and runs applications without provisioning or managing servers. With cloud computing/serverless, servers exist but are managed by the cloud provider. Resources are used as they are needed, on demand and often using auto scaling.

Visit the following resources to learn more:

- [@article@Serverless](https://www.ibm.com/cloud/learn/serverless)
- [@article@AWS Services](https://aws.amazon.com/serverless/)
- [@video@Serverless Computing in 100 Seconds](https://www.youtube.com/watch?v=W_VV2Fx32_Y&ab_channel=Fireship)
- [@feed@Explore top posts about Serverless](https://app.daily.dev/tags/serverless?ref=roadmapsh)

Monolithic architecture is a pattern in which an application handles requests, executes business logic, interacts with the database, and creates the HTML for the front end. In simpler terms, this one application does many things. It's inner components are highly coupled and deployed as one unit.

Visit the following resources to learn more:

- [@article@Pattern: Monolithic Architecture](https://microservices.io/patterns/monolithic.html)
- [@article@Monolithic Architecture - Advantages & Disadvantages](https://datamify.medium.com/monolithic-architecture-advantages-and-disadvantages-e71a603eec89)

A service mesh is an architectural pattern for enhancing communication, security, and management between microservices in a distributed network. It employs a collection of intelligent proxies to manage service-to-service communication, ensuring high availability, efficient load balancing, and robust service discovery. Additionally, a service mesh offers advanced features like observability for monitoring network behavior, and various traffic management capabilities.

In a typical service mesh setup, each microservice is paired with a proxy. This proxy, often deployed using a sidecar pattern, is responsible not only for handling communication to and from its associated microservice but also for implementing various network functionalities. These functionalities include load balancing, intelligent routing, and ensuring secure data transfer.

The sidecar pattern, integral to service meshes, involves deploying the proxy as a sidecar container alongside the main microservice container, especially in Kubernetes environments. This design allows the service mesh to function independently from the microservices themselves, simplifying management and updates.

Popular service mesh implementations include Istio and Linkerd, which offer robust solutions tailored to modern, cloud-based application architectures.

Visit the following resources to learn more:

- [@article@What is a Service Mesh?](https://www.nginx.com/blog/what-is-a-service-mesh/)
- [@video@Microservices pain points and how service mesh can help solve those issues](https://www.youtube.com/watch?v=QiXK0B9FhO0)
- [@feed@Explore top posts about Service Mesh](https://app.daily.dev/tags/service-mesh?ref=roadmapsh)

SOA, or service-oriented architecture, defines a way to make software components reusable via service interfaces. These interfaces utilize common communication standards in such a way that they can be rapidly incorporated into new applications without having to perform deep integration each time.

Visit the following resources to learn more:

- [@article@Reference Architecture Foundation for Service Oriented Architecture](http://docs.oasis-open.org/soa-rm/soa-ra/v1.0/soa-ra.html)
- [@feed@Explore top posts about Architecture](https://app.daily.dev/tags/architecture?ref=roadmapsh)

## Domain-Driven Design

Domain-driven design (DDD) is a software design approach focusing on modeling software to match a domain according to input from that domain's experts.

In terms of object-oriented programming, it means that the structure and language of software code (class names, class methods, class variables) should match the business domain. For example, if a software processes loan applications, it might have classes like LoanApplication and Customer, and methods such as AcceptOffer and Withdraw.

DDD connects the implementation to an evolving model and it is predicated on the following goals:

- Placing the project's primary focus on the core domain and domain logic;
- Basing complex designs on a model of the domain;
- Initiating a creative collaboration between technical and domain experts to iteratively refine a conceptual model that addresses particular domain problems.

Visit the following resources to learn more:

- [@article@Domain-Driven Design](https://redis.com/glossary/domain-driven-design-ddd/)
- [@article@Domain-Driven Design: Tackling Complexity in the Heart of Software](https://www.amazon.com/Domain-Driven-Design-Tackling-Complexity-Software/dp/0321125215)
- [@feed@Explore top posts about Domain-Driven Design](https://app.daily.dev/tags/domain-driven-design?ref=roadmapsh)

## Databases

A database is a collection of useful data of one or more related organizations structured in a way to make data an asset to the organization. A database management system is a software designed to assist in maintaining and extracting large collections of data in a timely fashion.

- [@article@Oracle: What is a Database?](https://www.oracle.com/database/what-is-database/)
- [@article@Prisma.io: What are Databases?](https://www.prisma.io/dataguide/intro/what-are-databases)
- [@feed@Explore top posts about Backend Development](https://app.daily.dev/tags/backend?ref=roadmapsh)

**ACID** - ACID are the four properties of relational database systems that help in making sure that we are able to perform the transactions in a reliable manner. It's an acronym which refers to the presence of four properties: atomicity, consistency, isolation and durability

- [@article@What is ACID Compliant Database?](https://retool.com/blog/whats-an-acid-compliant-database/)
- [@article@What is ACID Compliance?: Atomicity, Consistency, Isolation](https://fauna.com/blog/what-is-acid-compliance-atomicity-consistency-isolation)
- [@video@ACID Explained: Atomic, Consistent, Isolated & Durable](https://www.youtube.com/watch?v=yaQ5YMWkxq4)

**ORMs** - Object-Relational Mapping (ORM) is a technique that lets you query and manipulate data from a database using an object-oriented paradigm. When talking about ORM, most people are referring to a library that implements the Object-Relational Mapping technique, hence the phrase "an ORM".

- [@article@Object Relational Mapping - Wikipedia](https://en.wikipedia.org/wiki/Object–relational_mapping)
- [@article@What is an ORM and how should I use it?](https://stackoverflow.com/questions/1279613/what-is-an-orm-how-does-it-work-and-how-should-i-use-one)
- [@article@What is an ORM, how does it work, and how should I use one?](https://stackoverflow.com/a/1279678)
- [@feed@Explore top posts about Backend Development](https://app.daily.dev/tags/backend?ref=roadmapsh)

**Transactions** - In short, a database transaction is a sequence of multiple operations performed on a database, and all served as a single logical unit of work — taking place wholly or not at all. In other words, there's never a case where only half of the operations are performed and the results saved.

- [@article@What are Transactions?](https://fauna.com/blog/database-transaction)

**Database Normalization** - Database normalization is the process of structuring a relational database in accordance with a series of so-called normal forms in order to reduce data redundancy and improve data integrity. It was first proposed by Edgar F. Codd as part of his relational model.

Normalization entails organizing the columns (attributes) and tables (relations) of a database to ensure that their dependencies are properly enforced by database integrity constraints. It is accomplished by applying some formal rules either by a process of synthesis (creating a new database design) or decomposition (improving an existing database design).

- [@article@What is Normalization in DBMS (SQL)? 1NF, 2NF, 3NF, BCNF Database with Example](https://www.guru99.com/database-normalization.html)
- [@article@Database normalization](https://en.wikipedia.org/wiki/Database_normalization)
- [@video@Basic Concept of Database Normalization](https://www.youtube.com/watch?v=xoTyrdT9SZI)
- [@feed@Explore top posts about Database](https://app.daily.dev/tags/database?ref=roadmapsh)

_Migration Strategies_ - Learn how to run database migrations effectively. Especially zero downtime multi-phase schema migrations. Rather than make all changes at once, do smaller incremental changes to allow old code, and new code to work with the database at the same time, before removing old code, and finally removing the parts of the database schema which is no longer used.

- [@article@Databases as a Challenge for Continuous Delivery](https://phauer.com/2015/databases-challenge-continuous-delivery/)

_Database Indexes_ - An index is a data structure that you build and assign on top of an existing table that basically looks through your table and tries to analyze and summarize so that it can create shortcuts.

- [@article@An in-depth look at Database Indexing](https://www.freecodecamp.org/news/database-indexing-at-a-glance-bb50809d48bd/)
- [@video@Database Indexing Explained](https://www.youtube.com/watch?v=-qNSXK7s7_w)
- [@feed@Explore top posts about Database](https://app.daily.dev/tags/database?ref=roadmapsh)

_Sharding strategies_ - Sharding strategy is a technique to split a large dataset into smaller chunks (logical shard) in which we distribute these chunks in different machines/database nodes in order to distribute the traffic load. It’s a good mechanism to improve the scalability of an application. Many databases support sharding, but not all.

- [@article@Wikipedia - Sharding in Database Architectures](<https://en.wikipedia.org/wiki/Shard_(database_architecture)>)
- [@article@How sharding a database can make it faster](https://stackoverflow.blog/2022/03/14/how-sharding-a-database-can-make-it-faster/)
- [@feed@Explore top posts about Backend Development](https://app.daily.dev/tags/backend?ref=roadmapsh)

**N plus one problem** - The N+1 query problem happens when your code executes N additional query statements to fetch the same data that could have been retrieved when executing the primary query.

- [In Detail Explanation of N+1 Problem](https://medium.com/doctolib/understanding-and-fixing-n-1-query-30623109fe89)

**Profiling Performance** - There are several ways to profile the performance of a database:

- Monitor system performance: You can use tools like the Windows Task Manager or the Unix/Linux top command to monitor the performance of your database server. These tools allow you to see the overall CPU, memory, and disk usage of the system, which can help identify any resource bottlenecks.
- Use database-specific tools: Most database management systems (DBMSs) have their own tools for monitoring performance. For example, Microsoft SQL Server has the SQL Server Management Studio (SSMS) and the sys.dm_os_wait_stats dynamic management view, while Oracle has the Oracle Enterprise Manager and the v$waitstat view. These tools allow you to see specific performance metrics, such as the amount of time spent waiting on locks or the number of physical reads and writes.
- Use third-party tools: There are also several third-party tools that can help you profile the performance of a database. Some examples include SolarWinds Database Performance Analyzer, Quest Software Foglight, and Redgate SQL Monitor. These tools often provide more in-depth performance analysis and can help you identify specific issues or bottlenecks.
- Analyze slow queries: If you have specific queries that are running slowly, you can use tools like EXPLAIN PLAN or SHOW PLAN in MySQL or SQL Server to see the execution plan for the query and identify any potential issues. You can also use tools like the MySQL slow query log or the SQL Server Profiler to capture slow queries and analyze them further.
- Monitor application performance: If you are experiencing performance issues with a specific application that is using the database, you can use tools like Application Insights or New Relic to monitor the performance of the application and identify any issues that may be related to the database.

Have a look at the documentation for the database that you are using.

**Failure Modes** - There are several different failure modes that can occur in a database, including:

- Read contention: This occurs when multiple clients or processes are trying to read data from the same location in the database at the same time, which can lead to delays or errors.
- Write contention: This occurs when multiple clients or processes are trying to write data to the same location in the database at the same time, which can lead to delays or errors.
- Thundering herd: This occurs when a large number of clients or processes try to access the same resource simultaneously, which can lead to resource exhaustion and reduced performance.
- Cascade: This occurs when a failure in one part of the database system causes a chain reaction that leads to failures in other parts of the system.
- Deadlock: This occurs when two or more transactions are waiting for each other to release a lock on a resource, leading to a standstill.
- Corruption: This occurs when data in the database becomes corrupted, which can lead to errors or unexpected results when reading or writing to the database.
- Hardware failure: This occurs when hardware components, such as disk drives or memory, fail, which can lead to data loss or corruption.
- Software failure: This occurs when software components, such as the database management system or application, fail, which can lead to errors or unexpected results.
- Network failure: This occurs when the network connection between the database and the client is lost, which can lead to errors or timeouts when trying to access the database.
- Denial of service (DoS) attack: This occurs when a malicious actor attempts to overwhelm the database with requests, leading to resource exhaustion and reduced performance.

**Relational Databases** - A relational database is a type of database that stores and provides access to data points that are related to one another. Relational databases store data in a series of tables. Interconnections between the tables are specified as foreign keys. A foreign key is a unique reference from one row in a relational table to another row in a table, which can be the same table but is most commonly a different table.
_SQL databases_ - These are the standard structured databases (A.K.A relational databases) where you need to define the schema for your data (essentially the data structures you’re dealing with), and then you’ll use a language called [SQL (Structured Query Language)](https://roadmap.sh/sql) to interact with the data inside it. Most backend developers will interact with SQL databases at some point in their career, as this is the most common type of database.

- [@article@Relational Databases](https://www.ibm.com/cloud/learn/relational-databases)
- [@article@51 Years of Relational Databases](https://learnsql.com/blog/codd-article-databases/)
- [@course@Databases and SQL](https://www.edx.org/course/databases-5-sql)
- [@article@Intro To Relational Databases](https://www.udacity.com/course/intro-to-relational-databases--ud197)
- [@video@What is Relational Database](https://youtu.be/OqjJjpjDRLc)
- [@feed@Explore top posts about Backend Development](https://app.daily.dev/tags/backend?ref=roadmapsh)

_PostgreSQL_ - PostgreSQL, also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and SQL compliance.

- [@roadmap@Visit Dedicated PostgreSQL DBA Roadmap](/postgresql-dba)
- [@official@Official Website](https://www.postgresql.org/)
- [@article@Learn PostgreSQL - Full Tutorial for Beginners](https://www.postgresqltutorial.com/)
- [@video@Learn PostgreSQL Tutorial - Full Course for Beginners](https://www.youtube.com/watch?v=qw--VYLpxG4)
- [@video@Postgres tutorial for Beginners](https://www.youtube.com/watch?v=eMIxuk0nOkU)
- [@feed@Explore top posts about PostgreSQL](https://app.daily.dev/tags/postgresql?ref=roadmapsh)

_Oracle_ - Oracle Database Server or sometimes called Oracle RDBMS or even simply Oracle is a world leading relational database management system produced by Oracle Corporation.

- [@official@Official Website](https://www.oracle.com/database/)
- [@article@Official Docs](https://docs.oracle.com/en/database/index.html)
- [@video@Oracle SQL Tutorial for Beginners](https://www.youtube.com/watch?v=ObbNGhcxXJA)
- [@feed@Explore top posts about Oracle](https://app.daily.dev/tags/oracle?ref=roadmapsh)

_SQLite_ - SQLite is a relational database management system that is embedded into the end program. It is self-contained, serverless, zero-configuration, transactional SQL database engine.

- [@official@SQLite website](https://www.sqlite.org/index.html)
- [@article@SQLite Tutorial](https://www.sqlitetutorial.net/)
- [@feed@Explore top posts about SQLite](https://app.daily.dev/tags/sqlite?ref=roadmapsh)

_MariaDB_ - MariaDB server is a community developed fork of MySQL server. Started by core members of the original MySQL team, MariaDB actively works with outside developers to deliver the most featureful, stable, and sanely licensed open SQL server in the industry. MariaDB was created with the intention of being a more versatile, drop-in replacement version of MySQL

- [@official@MariaDB website](https://mariadb.org/)
- [@article@MariaDB vs MySQL](https://www.guru99.com/mariadb-vs-mysql.html)
- [@article@W3Schools - MariaDB tutorial ](https://www.w3schools.blog/mariadb-tutorial)
- [@video@MariaDB Tutorial For Beginners in One Hour](https://www.youtube.com/watch?v=_AMj02sANpI)
- [@feed@Explore top posts about Infrastructure](https://app.daily.dev/tags/infrastructure?ref=roadmapsh)

_MySQL_ - MySQL is an incredibly popular open source relational database management system (RDBMS). MySQL can be used as a stand-alone client or in conjunction with other services to provide database connectivity. The **M** in LAMP stack stands for MySQL; that alone should provide an idea of its prevalence.

- [@official@MySQL website](https://www.mysql.com/)
- [@article@W3Schools - MySQL tutorial ](https://www.w3schools.com/mySQl/default.asp)
- [@video@MySQL tutorial for beginners](https://www.youtube.com/watch?v=7S_tz1z_5bA)
- [@article@MySQL for Developers](https://planetscale.com/courses/mysql-for-developers/introduction/course-introduction)
- [@article@MySQL Tutorial](https://www.mysqltutorial.org/)
- [@feed@Explore top posts about MySQL](https://app.daily.dev/tags/mysql?ref=roadmapsh)

_MS SQL_ - MS SQL (or Microsoft SQL Server) is the Microsoft developed relational database management system (RDBMS). MS SQL uses the T-SQL (Transact-SQL) query language to interact with the relational databases. There are many different versions and editions available of MS SQL

- [@article@MS SQL website](https://www.microsoft.com/en-ca/sql-server/)
- [@article@Tutorials for SQL Server](https://docs.microsoft.com/en-us/sql/sql-server/tutorials-for-sql-server-2016?view=sql-server-ver15)
- [@video@SQL Server tutorial for beginners](https://www.youtube.com/watch?v=-EPMOaV7h_Q)

**NoSQL databases** - NoSQL databases offer data storage and retrieval that is modelled differently to "traditional" relational databases. NoSQL databases typically focus more on horizontal scaling, eventual consistency, speed and flexibility and is used commonly for big data and real-time streaming applications.
NoSQL is often described as a BASE system (**B**asically **A**vailable, **S**oft state, **E**ventual consistency) as opposed to SQL/relational which typically focus on ACID (Atomicity, Consistency, Isolation, Durability). Common NoSQL data structures include key-value pair, wide column, graph and document.
_NoSQL databases_ - As the name implies, these are not your standard SQL databases; in fact, within this category, there are columnar databases, document-based ones (such as MongoDB), key-value-based ones (like Redis), and more. They don’t use predefined data structures, giving you more flexibility and control over what you can store and how you store it. Backend developers will deal with only a handful of these, as there are many different sub-types, and more are created every year.

Some examples of these databases are:

- MongoDB, a document-based database (see here a mongoDB roadmap if you’re interested).
- Redis, an in-memory key-value pair database.
- Neo4J, a graph database.
- ElasticSearch, a document-based search engine.

In the end, the decision between SQL and NoSQL is about trade-offs and figuring out what works best for your particular use case.

- [@article@NoSQL Explained](https://www.mongodb.com/nosql-explained)
- [@video@How do NoSQL Databases work](https://www.youtube.com/watch?v=0buKQHokLK8)
- [@video@SQL vs NoSQL Explained](https://www.youtube.com/watch?v=ruz-vK8IesE)
- [@feed@Explore top posts about NoSQL](https://app.daily.dev/tags/nosql?ref=roadmapsh)

_Document Databases_ - MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License (SSPL).

- [@roadmap@Visit Dedicated MongoDB Roadmap](/mongodb)
- [@article@MongoDB Website](https://www.mongodb.com/)
- [@article@MongoDB Documentation](https://docs.mongodb.com/)
- [@article@MongoDB Online Sandbox](https://mongoplayground.net/)
- [@article@Learning Path for MongoDB Developers](https://learn.mongodb.com/catalog)
- [@article@Dynamo DB Docs](https://docs.aws.amazon.com/dynamodb/index.html)
- [@article@Official Developers Guide](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html)
- [@feed@Explore top posts about Backend Development](https://app.daily.dev/tags/backend?ref=roadmapsh)

_Graph databases_ - A graph database stores nodes and relationships instead of tables, or documents. Data is stored just like you might sketch ideas on a whiteboard. Your data is stored without restricting it to a pre-defined model, allowing a very flexible way of thinking about and using it.

- [@article@What is a Graph Database?](https://neo4j.com/developer/graph-database/)
- [@article@Graph Databases VS Relational Databases](https://www.freecodecamp.org/news/graph-database-vs-relational-database/)
- [@feed@Explore top posts about Backend Development](https://app.daily.dev/tags/backend?ref=roadmapsh)

_Key-Value Databases_ -A key-value database (KV database) is a type of database that stores data as a collection of key-value pairs. In a KV database, each piece of data is identified by a unique key, and the value is the data associated with that key.
KV databases are designed for fast and efficient storage and retrieval of data, and they are often used in applications that require high performance and low latency. They are particularly well-suited for storing large amounts of unstructured data, such as log data and user profiles.

Some popular KV databases include Redis, Memcached, and LevelDB. These databases are often used in combination with other types of databases, such as relational databases or document databases, to provide a complete and scalable data storage solution.

- [@article@Key-Value Databases - Wikipedia](https://en.wikipedia.org/wiki/Key-value_database)
- [@feed@Explore top posts about Backend Development](https://app.daily.dev/tags/backend?ref=roadmapsh)

`Redis` - Redis is an open source (BSD licensed), in-memory **data structure store** used as a database, cache, message broker, and streaming engine. Redis provides data structures such as [strings](https://redis.io/topics/data-types-intro#strings), [hashes](https://redis.io/topics/data-types-intro#hashes), [lists](https://redis.io/topics/data-types-intro#lists), [sets](https://redis.io/topics/data-types-intro#sets), [sorted sets](https://redis.io/topics/data-types-intro#sorted-sets) with range queries, [bitmaps](https://redis.io/topics/data-types-intro#bitmaps), [hyperloglogs](https://redis.io/topics/data-types-intro#hyperloglogs), [geospatial indexes](https://redis.io/commands/geoadd), and [streams](https://redis.io/topics/streams-intro). Redis has built-in [replication](https://redis.io/topics/replication), [Lua scripting](https://redis.io/commands/eval), [LRU eviction](https://redis.io/topics/lru-cache), [transactions](https://redis.io/topics/transactions), and different levels of [on-disk persistence](https://redis.io/topics/persistence), and provides high availability via [Redis Sentinel](https://redis.io/topics/sentinel) and automatic partitioning with [Redis Cluster](https://redis.io/topics/cluster-tutorial).

- [@official@Redis Website](https://redis.io/)
- [@video@Redis in 100 Seconds](https://www.youtube.com/watch?v=G1rOthIU-uo)
- [@feed@Explore top posts about Redis](https://app.daily.dev/tags/redis?ref=roadmapsh)

`Column Databases` - A **<u>wide-column database</u>** (sometimes referred to as a column database) is similar to a relational database. It store data in tables, rows and columns. However in opposite to relational databases here each row can have its own format of the columns. Column databases can be seen as a two-dimensional key-value database. One of such database system is **Apache Cassandra**.

_Realtime databases_ - A real-time database is broadly defined as a data store designed to collect, process, and/or enrich an incoming series of data points (i.e., a data stream) in real time, typically immediately after the data is created.

[Firebase](https://firebase.google.com/)
[RethinkDB](https://rethinkdb.com/)

**Warning:** <a href="https://en.wikipedia.org/wiki/Wide-column_store#Wide-column_stores_versus_columnar_databases">note that a "columnar database" and a "column database" are two different terms!</a>

- [@article@Apache Cassandra](https://cassandra.apache.org/_/index.html)
- [@video@Apache Cassandra - Course for Beginners](https://www.youtube.com/watch?v=J-cSy5MeMOA)
- [@feed@Explore top posts about Backend Development](https://app.daily.dev/tags/backend?ref=roadmapsh)

`Timeseries databases` - InfluxDB - InfluxDB was built from the ground up to be a purpose-built time series database; i.e., it was not repurposed to be time series. Time was built-in from the beginning. InfluxDB is part of a comprehensive platform that supports the collection, storage, monitoring, visualization and alerting of time series data. It’s much more than just a time series database.

- [@article@InfluxDB Website](https://www.influxdata.com/)
- [@article@Time series database](https://www.influxdata.com/time-series-database/)
- [@feed@Explore top posts about Backend Development](https://app.daily.dev/tags/backend?ref=roadmapsh)

## Version Control

Version control references the ability for you and other developers to share code with each other while you’re working on the same files.While Git is the industry standard at the moment, GitHub has created such a popular platform around Git.

## Tools

**IDEs and Editors** - Other than the actual programming languages, the Integrated Development Environment (A.K.A your IDE) is the single most important tool you’ll have to pick and use throughout your career in software development.

Some of them are generic (as in, they work for all types of development), and others will have specific backend development tools (which is what we’re focusing on right now).

1. _Jetbrains Products_ - The [Jetbrains family](https://www.jetbrains.com/) of IDEs targets multiple programming languages, including JavaScript, .NET, JAVA (and the Java Virtual Machine), Python, PHP, and more (mostly great options for web development).

The benefit of using these IDEs, in comparison with others, is that given how they’re language/technology specific, they have tools designed for those programming languages and specifically for this list to help in your backend development tasks, such as:

- Debuggers.
- Improved IntelliSense.
- Improved development environment.

The only minor issue with these IDEs, especially when compared to the rest of the options listed here, is that they’re not all free. While not all of them are priced the same, I recommend you check out your IDE’s pricing page to understand what options you have (there are free plans if you qualify for them).

2. _Visual Studio Code_ - [VSCode](https://code.visualstudio.com/) is definitely one of the most popular alternatives these days for all types of web developers, but definitely for backend developers. This IDE’s strongest selling point is that it’s incredibly extensible through plugins. And the community using it is so big and varied that there are plugins for literally anything you need.

The other major benefit of VSCode over JetBrains products is that it gives developers a fully working IDE for FREE. While some of the extensions don’t provide exactly the same developer experience as a JetBrains IDE, the proper combination of extensions can provide a very close alternative through VSCode.

3. _Zed_ - [Zed](https://zed.dev/) is a different type of code editor, and because of that, it might just be the right one for you.

Zed, like VSCode, is an all-purpose code editor, letting you code in whatever language you want (whether you’re doing web development or not). The main reasons why you’d pick Zed over others are:

- Improved performance - Zed takes advantage of your CPU AND GPU to improve the speed at which the IDE responds to your commands.
- Multi-user support.
- Team features - Zed lets you build software while working with others by sharing notes and letting you interact with teammates through the IDE.

Zed is an [open-source project](https://github.com/zed-industries/zed), but at the time of writing this article, it’s only available for macOS, so Linux and Windows users are still unable to try this excellent option.

4. _Sublime Text_ - Before VSCode, [Sublime Text](https://www.sublimetext.com/) was probably one of the most popular code editors for web developers who wanted something powerful for free.

Just like VSCode, Sublime supports extensibility through plugins, and the rich ecosystem of plugins makes it quite a versatile editor. As a note, this code editor also supports GPU rendering of the UI, like Zed does, so if performance is important to you, then you’ll want to keep reading.

With a refreshed UI (if you’ve used Sublime Text in the past, you’ll be happily surprised!) and better internal tooling, the latest version of this editor (version 4) is trying to regain the portion of the market that VSCode took from it at the time.

5. _VIM - a developer-focused editor_ - [VIM](https://www.vim.org/) is a tool that you either hate or love as a developer, but there is no middle ground.

This is such an iconic text editor that all the previously mentioned IDE have what is called a “vim mode,” which allows you to use them as if you were using VIM (with the visual and input modes).

Vim lets you write code without having to move your fingers away from the home row (the row where you “rest” your fingers, the one with the F and G keys). That means you can navigate documents, write code, move through projects, and more, all with minimum hand movement.

This is the key philosophy behind Vim’s design, and if you embrace it, it should help to make you a very proficient developer. Of course, adapting to this way of working is not trivial, and there is a lot of muscle memory that has to be re-trained. But once you do it, it’s really hard to go back.

Just like with all the generic IDEs here, you’ll have to [customize it through “scripts”](https://www.vim.org/scripts/script_search_results.php?order_by=creation_date&direction=descending) to make it work exactly as you want for your environment.

**Database Tools** - While doing backend development, you will definitely be interacting with databases. They’re a ubiquitous backend tool in the realm of web development.Let’s take a look at some great database tools you can use as a backend developer to interact with your favorite database management systems (DBMS).

6. _DataGrip_ - [Datagrip](https://www.jetbrains.com/datagrip/) is a JetBrains product, which makes it a great option if you’re also going with a JetBrains IDE.

This tool lets you access all SQL databases from within the same user interface, it provides great help while browsing the data stored in the database, and it also has features that help you write better SQL queries.

While the pricing of these tools might be a bit steep (especially if you go with the IDE as well), it’s definitely a solid option if you’re looking for feature-rich and stable software development tools.

7. _Navicat_ - [Navicat](https://navicat.com/en/products) actually has a family of alternatives based on what you need, from the standard set of SQL databases (such as MySQL, Oracle, Postgre, and so on) up to other NoSQL databases such as MongoDB and Redis.

In general, the Navicat alternatives are quite lightweight and powerful to use. They might not be as feature-rich as Datagrip, but they let you easily browse and query the data you need.

The free trial for Navicat only lasts 14 days, and then you’ll have to pay a monthly fee. That said, for non-commercial use, the license is quite low, which makes it accessible to almost all developers.

As for features, it has all the ones you’d expect from a tool like this:

- Ability to connect to multiple databases and visually browse their content.
- Query editor with some IntelliSense built-in.
- Model representation (automatically converts a database into ER Diagrams).
- Simple object designer to create entities through a visual IDE.

The Navicat series of apps are great backend tools to have at your disposal, if you don’t mind their price, that is.

8. _TablePlus_ - [Tableplus](https://tableplus.com/) is very similar to Navicat in the sense that it’s another lightweight database manager. The main differences are:

- Tableplus only supports SQL-based databases.
- The pricing model is simpler, by only charging a one-time license without you having to commit to a monthly subscription.

Some of the most relevant features of Tableplus are:

- Inline data editing.
- Advanced filtering lets you combine different filtering conditions when searching.
- Code auto-complete, which comes in very handy when writing SQL queries.
- Extensible through JavaScript plugins (currently in Beta).

This is a solid backend tool alternative to any of the previous options and with a simpler price tag.

9. _DBeaver_ - [DBeaver](https://dbeaver.io/) is a free, cross-platform tool that lets you connect and interact with multiple databases. While there is a PRO version with extra features, the free version is more than powerful enough to get you started with almost any database you can think of, both SQL and NoSQL alike.

For a full list of supported databases on the free version, check out their [about page](https://dbeaver.io/about/).

Some of the major features of DBeaver are:

- SQL editor with completion.
- ER-diagram creation from a table definition.
- In-line data editing.

Task management to kill any long-lasting queries that block your database.

**Collaboration tools for web development** - Unless you’re working as a solo-dev (and even then!), collaboration tools allow you to coordinate your work and understand who’s working on what and what you should be working on next.
While these might not be considered “backend tools” per se, they definitely help improve your performance and organization, so we can still call them “development tools” as a broader term.

10. _Trello_ - [Trello](https://trello.com/) is a very simple yet powerful organizational tool that lets teams build a Kanban-like board with clear states and simple UX (drag&drop is king in Trello).

Setting up a new project and a team takes minutes in Trello, and through the plugin system, you can get extra features such as date reminders, calendar integrations, and more.

The simple UI and intuitive UX make Trello one of the best options out there for collaborative tools as long as the needs of the team are met with simple column-based layouts and minimal information.

11. _Monday_ - [Monday](https://monday.com/) is a relatively new online platform for project management and collaboration. I say “new” because some of the other alternatives here have been around for over 5+ years.

Their limited free plan lasts forever, so if you have a small team and limited requirements, this might just be the perfect tool for you. Also, if you actually need to pay, Monday’s plans are accessible, especially when compared to other alternatives.

Monday’s fully customizable UI lets you build the collaborative environment you need. This is a huge advantage over others who've been around for longer and have a fixed UI that you have to adapt to.

12. _Basecamp_ - [Basecamp](https://basecamp.com/) is a mix between Trello, Monday, and Notion in the sense that it tries to provide developers with the best and most relevant tools from those worlds, leaving out the ones that just create “noise.”

Basecamp’s philosophy is to keep things simple and only focus on the features that truly add to collaboration:

- Simple card tables like Trello.
- Ability to upload and manage documents and files with your team.
- Integrated chat.
- Message boards to send notifications to everyone.

The only “downside” to basecamp, if you will, is that there is no “forever free” plan. Both their plans are paid and have a 30-day free trial, so you can definitely give it a shot and figure out if what they offer is enough for your needs.

13. _Wrike_ - [Wrike](https://www.wrike.com/) is yet another attempt at making project management and collaboration feel organic and seamless. They have a minimalistic UI and provide you with over 400 integrations to create your own workflows based on your needs and current ecosystem.

They have a free plan that, while feature-limited, it’s perfect for understanding the basic way of using Wrike and how useful it can be to you in your current project.

Their innovative use of AI allows you to create content faster, analyze project and task descriptions, and create subtasks based on it.

Wrike feels efficient and powerful, even for its free plan. Give it a chance if you’re a freelancer or if you have a small team looking for something new and powerful.

**Hosting Services** - When it comes to backend development, deploying your code and running it on the cloud will be a common thing; this is a practice known as continuous integration and continuous deployment (CI/CD). While in some situations, you’ll be dealing with a custom, in-house infrastructure, there are platforms that will make the entire process very lightweight (as in deploying with a couple of clicks).
Let’s take a look at some of the most common alternatives!

14. _Railway_ - [Railway.app](https://railway.app/) aims at giving developers all the tools they need at a click’s distance. We’re talking about:

- PR-triggered deployments.
- Support for all popular programming languages.
- Autoscaling.
- Load balancing.
- Monitoring.
- A great uptime (99.95%)
- With more than 200 ready-made templates for you to get going.

Railway has no free plan, but their basic one is very accessible. Careful though, they also charge per resource utilization. Lucky for you, they have a [very handy consumption calculator](https://railway.app/pricing) to avoid surprises at the end of the month!

15. _Heroku_ - [Heroku](https://www.heroku.com/) is another Platform as a Service provider. This one provides the basic services most of them do, such as autoscaling, monitoring, GitHub integration, and more.

The list of supported programming languages is not huge, but the most common ones are definitely covered: Node.js, Ruby, JAVA, PHP, Python, Go, Scala, and even Clojure.

Another great selling point for Heroku is that on top of their infrastructure, they also offer a managed Postgre database as a service and a Redis one. In both situations, you’ll have to pay for the services as you use them, so keep that in mind.

16. _Digital Ocean_ - As opposed to platforms such as Heroku, [Digital Ocean](https://www.digitalocean.com/) is known as an Infrastructure as a Service provider (IaaS). They give you all the servers you need and all the resources (memory, CPU, etc) you want to pay for. However, setting up your deployment process, automating your integration tests, or even having all the required libraries to run your code is up to you.

This is by no means something bad, some teams do prefer to have that freedom over other platforms like Railway and Heroku, where everything’s already managed.

Large-scale applications will usually require to have custom infrastructure that managed services can hardly provide. This is where IaaS providers come in.

On top of their basic offering, they do offer managed databases such as MongoDB, MySQL, Redis, and others.

17. _Hetzner_ - [Hetzner](https://www.hetzner.com/) is yet another IaaS that offers everything you need to get going if you know what to do with it. In other words, they offer all the hardware you might dream of, even in the cloud, but you have to configure it and maintain it.

Their only “managed” offer is for web hosting though, so if you’re looking to host your website or app and you don’t want to have to deal with server maintenance and configuration, then this is a good option for you.

Other than that, their offering is quite standard, although their pricing model might not be. While they do have the standard pricing tiers like the rest of them, they also give you the option to “bid” for used hardware that is no longer needed.

18. _Vercel_ - If you’re building a NextJS application and you’re looking for a quick way to deploy it, then there is probably no better place than [Vercel](https://vercel.com/) (the owner of NextJS).

Their platform allows you to link your GitHub account to their systems and deploy your entire application with a single push to the repo.

And since they’re experts on NextJS, your app will “just work.”

Even their free plan is perfect for quick SaaS prototypes and small applications. On top of this, they offer monitoring, auto-scaling, load balancing, and everything you’d expect from a PaaS provider.

While it’s true they don’t support other technologies or even offer other related services, such as managed databases, there is hardly anyone who can provide a better developer experience when it comes to deploying a NextJS application.

19. _Render_ - You can think of [Render](https://render.com/) as if Vercel and Heroku had a love child. Render gives you the amazing developer experience provided by Vercel but the flexibility (or more) from Heroku.

You’re not tied to a single technology; instead, you have all the major runtimes available out of the box. Much higher HTTP timeouts (up to 100 minutes, which is incredible compared to the standard 10 or 30 seconds most providers give you) and tons of other security and quality-of-life improvements.

Render also offers managed MySQL and managed Redis instances for you to use, even in their free tier. In the end, unless you’ve been using Heroku for a while and you’re happy with their DX, it might be a good idea to check out Render instead.

20. _OVHCloud_ - [OVHCloud](https://www.ovhcloud.com/) is an all-in-one solution that seems to provide you with everything you need, from “bare metal” (as in infrastructure) to managed hosting for web applications, managed databases (they have many to choose from), and many other services.

However, they do not seem to offer quality-of-life integrations to make your deployment workflow simple and intuitive.

Now, given how they centralize all related services from domain name registration all the way up to analytics, identity management, file storage (CDN), and even one-click install CMS (content management systems, such as WordPress), etc, it might just be a good option for you. That is if you have the expertise in your team to deal with all these options.

**API-Related Tools** - As backend developers, we’ll always be dealing with APIs (Application Programming Interface), either through using the ones created by others or writing our own.
Whatever you’re doing, it’s always good to have some backend tools to help you build and test them faster, so let’s take a look at a few options.

21. _Swagger_ - Some developers would argue that one of the hardest parts of creating an API is documenting it. Not only because it might sound like a boring task, but explaining what the API endpoint is doing well enough is not trivial.

That’s where [Swagger](https://swagger.io/) comes into play.

This tool allows you to create interactive documentation that provides developers with all they need to understand how to use your endpoints, and at the same time, it also gives them the option to test them directly from the generated UI.

22. _Postman_ - [Postman](https://www.postman.com/) is less of a documentation-only app and has grown over the years to become a testing API tool that every developer and development team should know about. Backend developers are especially benefited from using Postman because of how well it helps organize and manage APIs.

With Postman, you can organize all your company’s APIs, share them with the associated dev teams, and let them use and interact with them without having to write a single line of code.

While Swagger is more of a development tool that every backend developer should know about, Postman is the tool that every development team should use to share & control internal API access and documentation.

**Productivity** - Finally, the last category is about productivity. While some of the products and services mentioned already do provide productivity enhancements, they weren’t there for that. The following list of backend tools is created thinking only about the benefits they can bring to your productivity while working as a backend developer.

23. _iTerm_ - If you’re a macOS user, then [iTerm](https://iterm2.com/) is definitely one of the “must haves” you need to look into. As a backend developer, you’ll spend a lot of your day in the terminal.

iTerm will take that experience to the next level by bringing in features such as:

- Parallel panes inside the same window making it easy to multi-task.
- Improved auto-complete
- In-window search outside of the current program you’re using.
- Instant replay lets you review the latest content on the screen before cleaning it.
- Paste history, letting you move through the latest pasted content into the terminal.

Mind you, none of these features are mandatory; you can easily work without them, but they do improve your quality of life as a developer. Hence the reason why iTerm leads this list.

24. _Zsh/OhMyZsh_ - The combination of these two gives your terminal superpowers. [Zsh](https://zsh.sourceforge.io/) is an improved shell that lets you work much faster and more efficiently if you’re spending several hours typing commands in your terminal. For example, you get features such as:

- Advanced tab auto-complete
- Extensibility
- Spelling corrections
- And more.

As mentioned above, after you have your ZSH installed and set up, you should look into installing oh-my-zsh, which helps with configuring all the customization options you have on this shell:

- It comes bundled with [over 300 plugins](https://github.com/ohmyzsh/ohmyzsh/wiki/Plugins), ranging from 1password integrations to the “jump” plugin, which lets you move around the filesystem by moving from mark to mark (you can assign marks to folders).
- [Plenty of themes](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes) out of the box.

If you find yourself spending hours on the terminal, consider installing this combo.

25. _Raycast_ - [Raycast](https://www.raycast.com/) allows you to improve your productivity by giving you a better application launcher. Instead of using the default launcher, you can replace it with Raycast and gain superpowers.

Now, you suddenly have access to hundreds of [community-created extensions](https://www.raycast.com/store) that allow you to directly interact with chatGPT from the app launcher, use GitHub, interact with VSCode directly, and more.

While it is only available for macOS users, Raycast has become a must-have application for backend developers on this platform. In the end, the faster you can reach for your tools, the more productive you become. And a properly configured Raycast can make your web development process feel like a breeze.

- Keeping an eye on core and new backend programming languages
- Understanding the basics of software design and architecture
- Understanding databases and how to use them
- API development
- The basics of version control
- Testing and debugging
- CI/CD and DevOps fundamentals
- Soft skills

## Testing

Understanding both what testing is and the importance of it within the backend development workflow is crucial for all developers, and one of the mandatory backend developer skills to focus on.

Testing is the development process of making sure your code works in a way that doesn’t involve you manually testing every feature but rather using tools that allow you to test and reproduce any problems that can be found programmatically.

This, of course, helps to remove potential human error from the equation when testing big systems and to increase the speed at which these tests can be done (think seconds vs hours of you doing it manually).

Testing is a far more complex discipline than I can describe here. Just know that there are many different ways to test a system, and all backend developers should be aware of the following:

- **Unit testing:** This is the most common way of doing code testing. You’ll write tests using a testing framework for every publicly available function/method in your code. This way you’re making sure every piece of code that can be used is tested and performs according to plan. Running these tests is usually quite fast, so you’ll be doing it before every commit (usually).
- **Integration testing:** If you’re building a system that consists of multiple independent systems working together (think, for instance, a microservice-based architecture), then testing each individual part is not enough. You also have to make sure systems that should interact with each other do so correctly. This is where integration tests come into play.
- **End-to-end testing (E2E):** These tests are similar to integration tests, but they also include the UI of the system. There are tools you can use to automate actions in your UI as if a real user were performing them and then checking the result. For example, clicking on a log-out button and checking if you’re later redirected to the log-in screen. This flow would involve the backend performing some actions that result in the user being logged out.
- **Load testing:** While not exactly the same process as with the previous test types, load testing is great for backend systems because it helps you determine if your backend is ready to deal with high amounts of traffic.

You can think of the list in graphical format as the following diagram:

![Testing types](https://assets.roadmap.sh/guest/6529303b545cb53d4aa730ca_1709057834295.png)

If you’re just getting started with testing, I’d recommend focusing only on unit testing for the time being. Once you have a grasp on it, start moving out following the above diagram and slowly move into the other types as you progress.

## CI/CD and DevOps Familiarity

As a backend developer, your code will be constantly deployed, either into cloud environments or perhaps even into normal, on-premise servers. The point is that what you build will run through CI/CD (Continuous Integration and Continuous Deployment) processes.

![ci-cd](https://assets.roadmap.sh/guest/6529303b545cb53d4aa730ca_1709058122541.png)

These processes will automatically test it (Continuous Integration) and automatically deploy it (if all tests go well). As a backend developer, you’re not usually expected to know and understand how to configure these processes; however, it’s important that you know about them.

DevOps is yet another tangential area to that of a backend developer. When teams are small enough, backend devs might be “gently pushed” into tasks such as configuring CI/CD pipelines, setting up servers, and more. These tasks are usually performed by dedicated professionals with the role of DevOps. Their specialty is automation, making the deployment process efficient and ensuring that everything runs smoothly in the real-world server environment. They play a crucial role in maintaining the reliability and performance of applications and websites.

So, while they’re not strictly the responsibilities of backend developers, they’re close enough to the role’s day-to-day that it would be a good idea to learn about them. If you’re interested in learning more about DevOps, check out [our DevOps roadmap](https://roadmap.sh/devops) containing all the key topics you should learn about if you want to become a DevOps engineer.

## Soft Skills

Finally, the last set of backend developer skills you should focus on are, actually, not technical skills, nor are they exclusively useful for backend developers. These are skills that every developer should work on during their career: soft skills.

### Improving communication

The ability to communicate with others, both technical and non-technical people, is crucial in any developer's career.

For backend developers, it’s especially important because communicating their work and the effects of it is definitely harder than other roles, such as frontend developers who can actually showcase what they’re building.

As a backend developer, you’ll be able to better explain problems or blockers to your colleagues, you’ll be able to perform requirement gathering much more effectively, and you’ll even improve your own problem-solving skills by being better at articulating the problems and potential solutions to yourself.

### Critical thinking

Honing your critical thinking as a backend developer will help your ability to analyze complex problems, identify patterns much faster, and come up with innovative solutions to the problems you’re facing.

Pushing the limits of your critical thinking skills will also foster a more systematic and strategic approach to coding and architecting robust and efficient solutions.

In other words, it’ll make you a better and more efficient coder. And who doesn’t want that?

## Conclusion

To summarize, if you expect to become a backend developer or to grow in the area of backend development:

- Keep an eye on the industry to understand what’s the status quo and what’s new and hot.
- Understand the basics of software design and architecture.
- Look into relational databases and NoSQL databases as well; they’re both important.
- Learn how to build and use APIs; they’ll be part of almost every project you work on.
- Remember, testing might look like it’s not mandatory, but it’s definitely a standard practice when it comes to backend development.
- CI/CD and DevOps are practices you’ll be involved with, either directly or indirectly, so learn about them.
- Soft skills are just as important as technical skills if you expect to grow in your career.

That said, do not take this list as the ultimate roadmap but rather as a starting point. If you’re willing to take your backend developer career to the next level, push yourself out of your comfort zone and pursue the skills listed here and the ones listed in this detailed [backend development roadmap](https://roadmap.sh/backend).

Remember, constant learning is the only absolute truth in the software development world (this is true for backend developers, too). If you keep your skillset updated with the latest trends, you’ll remain adaptable and effective as a backend developer.

Web development is typically divided into two main categories: [backend development](https://roadmap.sh/backend) and [frontend development](https://roadmap.sh/frontend). Frontend development focuses on the visible part of the application for end-users, i.e. the part that users interact with, while backend development involves writing code that remains unseen but is essential for the functioning of all applications—the business logic.

Two of the key components when it comes to backend development are the programming language that you are going to code in and the database. In this article, we will be looking into a subset of programming languages that could be used for backend development. We will be discussing the pros and cons of each and the community to help you pick the best programming language for backend development.

Diving straight in, I will cover the top 5 backend programming languages that you should to learn if you’re looking to broaden your horizons in the server-side world.

## Choosing the Ideal Backend Language

So, are these the best backend programming languages out there? Is there an absolute “best” backend programming language?

As you’ve probably seen by now, there is no “perfect” or “ideal” backend language. When it comes to picking one out of the huge number of alternatives, you have to consider other aspects outside of the language itself:

- What’s the size of your project? Are you building a large-scale platform? Or just a basic static website?
- Do you mind spending more time learning or do you need to be efficient and start coding right away?
- Do you already have some programming knowledge and would like to pick something that resembles what you already know? Or would you like to pick up something that’s entirely different?
- Are you alone? Or are you part of a team?

Once you’ve answered those questions, you’ll probably have some idea of where to go, but then you should look into the language itself, specifically into:

- Does it have enough learning resources for you?
- How big and active is the community around it?
- Are the main frameworks still under development? Or have they been parked for a while?

In the end, you’re evaluating the language and its ecosystem, making sure they’re both evolving right along the web industry. If you find that there are aspects that are falling behind, then it probably isn’t a good choice.

A handy tool when trying to evaluate a language like that is [roadmap.sh](https://roadmap.sh).

[![Roadmap.sh](/guides/backend-languages/backend-roadmap-part.png)](https://roadmap.sh/backend)

<p align="center" style="font-size: 14px; margin-top: -10px; text-align: center">Small section of the full backend roadmap available on <a href="https://roadmap.sh/backend">roadmap.sh</a></p>

There you’ll find community-maintained roadmaps for many career paths within software development. In particular, for this article, the [backend roadmap](https://roadmap.sh/backend) is a great place to start, because while picking a backend language is important, you’ll see there that it’s not just about the language. In fact, there is a lot of tech around the language that is also required (I’m referring to databases, git, understanding how client-server communication works, and a big “etc).

## Backend languages

When it comes to web development, there is a very clear distinction between frontend and backend technologies.

While the frontend ecosystem is quite limited to JavaScript (and other JavaScript-based languages, like TypeScript) due to Browser compatibility, the backend (A.K.A server-side) is a very different scenario.

Please note that neither of those lists is extensive, as they’re both constantly growing.

You can think of a backend language as one that “runs on the server side”. That said, by that definition, any language is a backend language because even JavaScript nowadays can be used on the backend as well (thanks to Node, Bun, and Deno).

However, we can go one step further and say:

> “A backend language is a server side programming language that has the tools and frameworks required to build web backends”

That will narrow down the list a little bit. But essentially, we can think of backend languages as anything that fits the following list:

- Is able to listen for incoming HTTP/S connections.
- Can access databases.
- Can send HTTP/S requests.
- Can access the filesystem.
- Has a rich ecosystem of tools and frameworks to build web applications.

With those features and a rich ecosystem of libraries and frameworks, a language can definitely be considered “backend-ready”.

## Guided Learning: From Online Courses to Bootcamps

Online courses and bootcamps serve as invaluable companions on your learning expedition. Platforms like Udemy, Coursera, and freeCodeCamp offer comprehensive backend development courses.

These resources not only cover programming languages like Python, Java, or JavaScript but also dive deep into frameworks like Django, Express.js, or Laravel. For those seeking a more immersive experience, coding bootcamps provide intensive, hands-on training to fast-track your backend development skills.

Whatever choice you go for, make sure you’re not following trends or just copying the learning methods of others. Learning is a very personal experience and what works for others might not work for you, and vice versa. So make sure to do the proper research and figure out what option works best for you.

## Building Community Connections for Learning Support

Joining developer communities (there are several on Twitter for example), forums like Stack Overflow, or participating in social media groups dedicated to backend development creates a network of support.

Engaging with experienced developers, sharing challenges, and seeking advice fosters a collaborative learning environment. Attend local meetups or virtual events if you can to connect with professionals in the field, gaining insights and building relationships that can prove invaluable throughout your journey.

## Think about you and your project

There are many ways to go about picking the ideal backend language for you. If there is anything you should take home with you after reading this article, it is that most languages are equivalent in the sense that you’ll be able to do pretty much everything with any of them.

So what criteria can you use to pick the “right one” for you?

The questions you should also be asking yourself are:

- What’s your preference for a language? Do you like Object Oriented Programming (OOP) or are you more of a functional programming type of dev? Do you like statically typed programming languages or loosely typed ones? Personal preferences should also play an important role at the time of picking your ideal programming language.
- What does my project need? After all, project requirements sometimes dictate technology. Keep that in mind, check if the project’s needs and your personal preferences align, and try to weigh in pros and cons if they don’t.

In the end, personal preference and actual project requirements (if you have any) are very important, because both will influence how much you enjoy (or don’t enjoy) the learning process.

## Crafting a Portfolio to Display Your Backend Skills:

As you accumulate skills and knowledge, showcase your journey through a well-crafted portfolio. Include projects that highlight your backend skills, demonstrating your ability to - design databases, implement server-side logic, and integrate with client side technologies. Whether it's a dynamic web application, a RESTful API, or a data-driven project, your portfolio becomes a tangible representation of your backend development capabilities for potential employers or collaborators.

When it comes to deciding where to publish this portfolio, you have some options, such as directly on your GitHub profile (if you have one), or perhaps on your own personal website where you can share some design thoughts about each project along with the code.

In the end, the important thing is that you should be sharing your experience somewhere, especially when you don’t have working experience in the field.

## Conclusion

In the end, there are many backend programming languages to choose from, and what language you go for, is up to you and your particular context/needs. All I can do is guide you to the door, but you have to cross it yourself. Some interesting options are:

- Python with its English-like syntax.
- Java with its formal syntax and enterprise support.
- JavaScript with its flexibility and ability to jump between frontend and backend.
- PHP with its proven record of success.
- And Go, with its performance and scalability focus.

You’re the one who gets to decide, but just know that no matter what you choose, getting started in backend development is a one-way street. You’ll be learning from this moment on, and you’ll be jumping from one language to the other as the field evolves.

Remember that there is a very detailed version of a [backend roadmap here](https://roadmap.sh/backend), it might be a great place to get started! And if you’re also interested in frontend development, there is an [equally handy roadmap](https://roadmap.sh/frontend) here as well!

As backend developers, showcasing our work to others is not straightforward, given that what we do is not very visible.

That said, having a project portfolio, even as backend developers, it’s very important, as it can lead to new job opportunities.

As an added bonus, the experience you get out of the entire process of building the apps for your portfolio will help you improve your coding skills.

Let’s take a look at 20 of the best backend projects you can work on to improve both your project portfolio and to [learn backend development](https://roadmap.sh/backend).

Keep in mind that these project ideas are organized from easiest to hardest to complete, and the entire list should take you at least a year to complete, if you’re not rushing the process.

So sit back, grab a cup of your favorite hot drink, and let’s get started!

## 1. Personal Blogging Platform API

**Difficulty**: Easy

**_Skills and technologies used_**: CRUD for main operations, databases (SQL or NoSQL), server-side RESTful API.

![Blogging Platform API](https://assets.roadmap.sh/guest/blogging-platform-api.png)

Let’s start with a very common one when it comes to backend projects.

This is a RESTful API that would power a personal blog. This implies that you’d have to create a backend API with the following responsibilities:

- Return a list of articles. You can add filters such as publishing date, or tags.
- Return a single article, specified by the ID of the article.
- Create a new article to be published.
- Delete a single article, specified by the ID.
- Update a single article, again, you’d specify the article using its ID.

And with those endpoints you’ve covered the basic CRUD operations (**C**reate, **R**ead, **U**pdate and **D**elete).

As a recommendation for techstack, you could use [Fastify](https://fastify.dev/) as the main backend framework if you’re going with Node, or perhaps [Django](https://www.djangoproject.com/) for Python or even [Ruby on Rails](https://rubyonrails.org/) or [Sinatra](https://sinatrarb.com/) for Ruby. As for your database, you could use [MongoDB](https://www.mongodb.com/) if you want to try NoSQL or [MySQL](https://www.mysql.com/) if you’re looking to get started with relational databases first.

## 2. To-Do List API

**_Difficulty_**: Easy

**_Skills and technologies used_**: REST API design, JSON, basic authentication middleware.

![To-Do List API](https://assets.roadmap.sh/guest/todo-list-api-bsrdd.png)

We’re continuing with the APIs for our backend project ideas, this time around for a To-Do application. Why is it different from the previous one?

While the previous project only focused on the main CRUD operations, here we’ll add some more interesting responsibilities, such as:

1. An authentication logic, which means you’ll have to keep a new table of users and their credentials
2. You’ll have to create both users and tasks.
3. You’ll also have to be able to update tasks (their status) and even delete them.
4. Get a list of tasks, filter them by status and get the details of each one.

You’re free to implement this with whatever programming language and framework you want, however, you could continue using the same stack from the previous project.

## 3. Weather API Wrapper Service

**_Difficulty_**: Easy

**_Skills and technologies used_**: Third-party API integration, caching strategy, environment variable management.

![Weather API Wrapper Service](https://assets.roadmap.sh/guest/weather-api-f8i1q.png)

Let’s take our API magic to the next level with this new backend project. Now instead of just relying on a database, we’re going to tackle two new topics:

- Using external services.
- Adding caching through the use of a quick in-memory storage.

As for the actual weather API to use, you can use your favorite one, as a suggestion, here is a link to [Visual Crossing’s API](https://www.visualcrossing.com/weather-api), it’s completely FREE and easy to use.

Regarding the in-memory cache, a pretty common recommendation is to use [Redis](https://redis.io/), you can read more about it [here](https://redis.io/docs/manual/client-side-caching/), and as a recommendation, you could use the city code entered by the user as the key, and save there the result from calling the API.

At the same time, when you “set” the value in the cache, you can also give it an expiration time in seconds (using the EX flag on the [SET command](https://redis.io/commands/set/)). That way the cache (the keys) will automatically clean itself when the data is old enough (for example, giving it a 12-hours expiration time).

## 4. Expense Tracker API

**_Difficulty_**: Easy

**_Skills and technologies used_**: Data modeling, user authentication (JWT).

![Expense Tracker API](https://assets.roadmap.sh/guest/expense-tracker-api-m72p5.png)

For the last of our “easy” backend projects, let’s cover one more API, an expense tracker API. This API should let you:

- Sign up as a new user.
- Generate and validate JWT tokens for handling authentication and user session.
- List and filter your past expenses. You can add the following filters:
  - Past week.
  - Last month.
  - Last 3 months.
  - Custom (to specify a start and end date of your choosing).
- Add new expenses.
- Remove existing expenses.
- Update existing expenses.

Let’s now add some constraints:

- You’ll be using [JWT](https://itnext.io/demystifying-jwt-a-guide-for-front-end-developers-ead6574531c3) (JSON Web Token) to protect the endpoints and to identify the requester.
- For the different expense categories, you can use the following list (feel free to decide how to implement this as part of your data model):
  - Groceries
  - Leisure
  - Electronics
  - Utilities
  - Clothing
  - Health
  - Others.

As a recommendation, you can use MongoDB or an ORM for this project, such as [Mongoose](https://mongoosejs.com/) (if you’re using JavaScript/Node for this).

From everything you’ve done so far, you should feel pretty confident next time you have to build a new API.

## 5. Markdown Note-taking App

**_Difficulty_**: Moderate

**_Skills and technologies used_**: Text processing, Markdown libraries, persistent storage, REST API with file upload.

![Markdown Note-taking App](https://assets.roadmap.sh/guest/markdown-note-taking-app-tymi3.png)

You’ve been building APIs all this time, so that concept alone should not be a problem by now. However, we’re increasing the difficulty by allowing file uploads through your RESTful API. You’ll need to understand how that part works inside a RESTful environment and then figure out a strategy to store those files while avoiding name collisions.

You’ll also have to process the text in the following ways:

- You’ll provide an endpoint to check the grammar of the note.
- You’ll also provide an endpoint to save the note that can be passed in as Markdown text.
- Return the HTML version of the Markdown note (rendered note) through another endpoint.

As a recommendation, if you’re using JavaScript for this particular project, you could use a library such as [Multer](https://www.npmjs.com/package/multer), which is a Node.js module.

## 6. URL Shortening Service

**_Difficulty_**: Moderate

**_Skills and technologies used_**: Database indexing, HTTP redirects, RESTful endpoints

![URL Shortening Service](https://assets.roadmap.sh/guest/url-shortening-service-c1nzi.png)

We’re now moving away from your standard APIs, and tackling URL shortening. This is a very common service, which allows you to shorten very long URLs, especially when looking to share them on social media or make them easily memorable.

For this project idea let’s focus on the following features, which you should be more than capable of implementing on your local environment, no matter your OS.

- Ability to pass a long URL as part of the request and get a shorter version of it. You’re free to decide how you’ll perform the shortening .
- Save the shorter and longer versions of the URL in the database to be used later during redirection.
- Configure a catch-all route on your service that gets all the traffic (no matter the URI used), finds the correct longer version and performs a redirection so the user is seamlessly redirected to the proper destination.

## 7. Real-time Polling App

**_Difficulty_**: Moderate

**_Skills and technologies used_**: WebSockets, live data updates, state management

![Real-time Polling App](https://assets.roadmap.sh/guest/realtime-polling-app-8qx5h.png)

Time to leave APIs alone for a while and focus on real-time interactions, another hot topic in web development. In fact, let’s try to use some sockets.

Sockets are a fantastic way of enabling 2-way communication between two or more parties (systems) with very few lines of code. Read more about sockets [here](https://www.digitalocean.com/community/tutorials/understanding-sockets).

That being said, we’re building both a client and a server for this project. The client can easily be a CLI (Command Line Interface) tool or a terminal program that will connect to the server and show the information being returned in real-time.

The flow for this first socket-based project is simple:

- The client connects to the server and sends a pre-defined request.
- The server upon receiving this request, will send, through the same channel, an automatic response.

While the flow might seem very similar to how HTTP-based communication works, the implementation is going to be very different. Keep in mind that from the client perspective, the request is sent, and there is no waiting logic, instead, the client will have code that gets triggered when the message from the server is received.

This is a great first step towards building more complex socket-based systems.

## 8. Simple E-commerce API

**_Difficulty_**: Moderate

**_Skills and technologies used_**: Shopping cart logic, payment gateway integration (Stripe, PayPal), product inventory management

![Simple E-commerce API](https://assets.roadmap.sh/guest/simple-ecommerce-api-thzqo.png)

Back to the world of APIs, this time around we’re pushing for a logic-heavy implementation.

For this one, you’ll have to keep in mind everything we’ve been covering so far:

- JWT authentication to ensure many users can interact with it.
- Interaction with external services. Here you’ll be integrating with payment gateways such as Stripe.
- A complex data model that can handle products, shopping carts, and more.

With that in mind, let’s take a look at the responsibilities of this system:

- JWT token creation and validation to handle authorization.
- Ability to create new users.
- Shopping cart management, which involves payment gateway integration as well.
- Product listings.
- Ability to create and edit products in the database.

This project might not seem like it has a lot of features, but it compensates in complexity, so don’t skip it, as it acts as a great progress check since it’s re-using almost every skill you’ve picked up so far.

## 9. Fitness Workout Tracker

**_Difficulty_**: Moderate

**_Skills and technologies used_**: User-specific data storage, CRUD for workout sessions, date-time manipulation.

![Fitness Workout Tracker](https://assets.roadmap.sh/guest/fitness-workout-tracker-82uux.png)

This backend project is not just about taking in user-generated notes, but rather, about letting users create their own workout schedules with their own exercises and then go through them, checking the ones they’ve done, and the ones they haven't.

Making sure you also give them the space to add custom notes, with remarks about how the exercise in question felt and if they want to tweak it in the future.

Keep in mind the following responsibilities for this backend project:

- There needs to be a user sign-up and log-in flow in this backend system, as many users should be able to use it.
- There needs to be a secure JWT flow for authentication.
- The system should let users create workouts composed of multiple exercises.
- For each workout, the user will be able to update it and provide comments on it.
- The schedule the user creates needs to be associated to a specific date, and any listing of active or pending workouts needs to also be sorted by date (and time if you want to take it one step further).
- There should also be a report of past workouts, showing the percentage of finished workouts during the queried period.

The data model for this one can also be complex, as you’ll have predefined exercises that need to be grouped into workout sessions, and those can then have associated comments (input from the user).

![Fitness Workout Tracker Data Model](https://assets.roadmap.sh/guest/fitness-workout-tracker-datamodel-5mrkq.png)

Consider the benefits of using a structured model here vs something document-based, such as MongoDB and pick the one that feels better for your implementation.

## 10. Recipe Sharing Platform

**_Difficulty_**: Moderate

**_Skills and technologies used_**: File uploads and image processing (like Sharp), user permissions, complex querying

![Recipe Sharing Platform](https://assets.roadmap.sh/guest/recipe-sharing-platform-jzs08.png)

While this project might feel a lot like the first one, the personal blogging platform, we’re taking the same concept, and then adding a lot more on top of it.

We’re building a RESTful API (or rather several) that will let you perform the following actions:

- Access a list of recipes. You should be able to filter by keywords (text input), publication date, by chef, and by labels. Access to this endpoint should be public.
- The list should be paginated, and as part of the response on every page.
- Users should be able to sign up as chefs to the system to upload their own recipes.
- A JWT-secured login flow must be present to protect the endpoints in charge of creating new recipe posts.
- Images uploaded as part of the recipe should be processed to be re-sized into a standard size (you pick the dimensions). You can use a library such as [Sharp](https://sharp.pixelplumbing.com/) for this.

## 11. Movie Reservation System

**_Difficulty_**: Difficult

**_Skills and technologies used_**: Relational data modeling (SQL), seat reservation logic, transaction management, schedule management.

![Movie Reservation System](https://assets.roadmap.sh/guest/movie-reservation-system-5823e.png)

There are very expensive pre-made tools that handle all this logic for companies, and the following diagram shows you a glimpse of that complexity.

As backend projects go, this one is a great example of the many different problems you might need to solve while working in web development.

A movie reservation system should allow any user to get tickets and their associated seats for any movie playing the specific day the user is looking to attend. This description alone already provides a lot of features and constraints we have to keep in mind:

- We’re going to have a list of movies (and maybe theaters as well).
- Each movie will have a recurring schedule for some time and then it’ll be taken out to never return.
- Users should be able to list movies, search for them and filter by dates, genres and even actors.
- Once found, the user should be able to pick the seats for their particular movie of choice, and for their date of choice.
- This leads us to you having to keep a virtual representation of your movie theater to understand seating distribution and availability.
- In the end, the user should also be able to pay using an external payment gateway such as Stripe (we’ve already covered this step in the past).

## 12. Restaurant Review Platform (API) with automatic NLP analysis

**_Difficulty_**: Difficult

**_Skills and technologies used_**: RESTful API, In-memory database (for live leaderboard), SQL, Natural Language Processing to auto-label positive and negative comments.

![Restaurant Review Platform](https://assets.roadmap.sh/guest/restaurant-review-platform-26c1f.png)

Now this project takes a turn into the land of noSQL and AI by leading with user input. The aim of this particular backend project is to provide a very simple API that will let users:

- Input their own review of a restaurant (ideally, the API should request the restaurant’s ID to make sure users are reviewing the correct one).
- Keep a leaderboard of restaurants with a generic positive or negative score, based on the type of reviews these restaurants get. For this, you can use Redis as an in-memory leaderboard to have your API query it, instead of hitting the database you’re using. This also implies that you’ll have to keep the leaderboard updated on Redis as well (as a hint: look for type [SortedSet](https://redis.io/docs/data-types/sorted-sets/) data type to understand how to do this).
- Perform NLP (Natural Language Processing) on the user’s text portion of the review, to understand if it’s a positive one or a negative one.
- Use the result of the NLP as a scoring system for the leaderboard.

As a recommendation, you might want to use Python on this project, as there tend to be more libraries around NLP for this language.

## 13. Multiplayer Battleship Game Server

**Difficulty**: Difficult

**_Skills and technologies used_**: Game state synchronization, low-latency networking, concurrency control.

![Multiplayer Battleship Game Server](https://assets.roadmap.sh/guest/multiplayer-battleship-lv5oj.png)

For this project you’re not going to build a full game from scratch, so don’t worry.

You will however, build a game server. Your game server will have to maintain the internal state of each player’s board, and it should also enable communication between them by broadcasting their actions and results. Since we have “low-latency networking” as a constraint here, the logical implementation would be through the use of Sockets (so if you haven’t done it yet, go back to project 7 and work on it first).

You’re free to pick the programming language you feel more comfortable with, however, keep the mind that you’ll have to:

- Keep track of the player's state and game state.
- Enable 2-way communication between players and server.
- Allow players to join the game and set up their initial state somehow.

This can be a very fun project to work on, even if you’re “just” building a terminal version of this multiplayer game, as you’ll be using several of the concepts and technologies covered so far on this list.

## 14. Database Backup CLI utility

**_Difficulty_**: Difficult

**_Skills and technologies used_**: Advanced SQL, Database fundamentals, CLI development, Node.js (for CLI)

![Database Backup CLI utility](https://assets.roadmap.sh/guest/database-backup-cli-jwrcj.png)

We’re now moving away from the API world for a while, and into the world of command line interfaces, which is another very common space for backend developers to work on.

This time around, the project is a CLI utility to back up an entire database.

So for this project, you’ll be creating a command line utility that takes the following attributes:

- **Host:** the host of your database (it can be localhost or anything else).
- **Username**: the utility will need a username to login and query the database.
- **Password**: same with the password, usually databases are protected this way.
- **DB Name**: the name of the database to backup. We’re backing up the entire set of tables inside this database.
- **Destination folder**: the folder where all the dump files will be stored.

With all that information, your utility should be able to connect to the database, pull the list of tables, and for each one understand its structure and its data. In the end, the resulting files inside the destination folder should have everything you need to restore the database on another server simply by using these files.

Finally, if you haven’t heard of it yet, you might want to check out the [SHOW CREATE TABLE](https://dev.mysql.com/doc/refman/8.3/en/show-create-table.html) statement.

## 15. Online Code Compiler API

**_Difficulty_**: Difficult

**_Skills and technologies used_**: Sandboxing code execution, integration with compilers, WebSocket communication.

![Online Code Compiler API](https://assets.roadmap.sh/guest/online-code-compiler-c7xjb.png)

For this project, you’ll be building the backend of a remote code execution application. In other words, your APIs will allow you to receive source code written using a specific language of choice (you can pick the one you want, and only allow that one), run it and then return the output of that execution.

Of course, doing this without any restrictions is not worth it for being in the “difficult” section of this list, so let’s kick it up a notch:

- The code execution should be done inside a safe sandbox, which means that the code can’t hurt or affect the system it’s running on, no matter what the code or the logic dictates.
- On top of that, for long-running tasks, the API should also provide a status report containing the following information:
- Time running.
- Start time of the execution.
- Lines of code being executed.

## 16. Messaging Platform Backend

**_Difficulty_**: Difficult

**_Skills and technologies used_**: Real-time messaging, end-to-end encryption, contact synchronization

![Messaging Platform Backend](https://assets.roadmap.sh/guest/messaging-platform-backend-96jpw.png)

Yes, we’re talking about a chat platform here. And as a backend developer you’re more than ready to implement both the server and the client application.

This backend project would take project #7 to the next level, by implementing the following responsibilities:

- Adding message encryption between client applications
- The ability to understand who’s online
- Understand if those users are interacting with you (a.k.a showing the “\[username\] is typing” message in real-time).
- Sending a message from one of the clients into the server should be broadcasted to the rest of the clients connected.

As a recommendation for technology implementing this project, [Socket.io](http://socket.io) would be a perfect match. This means you’d be using JavaScript (node.js) for this.

## 17. Content Delivery Network (CDN) Simulator

**_Difficulty_**: Very Difficult

**_Skills and technologies used_**: Load balancing algorithms, caching strategies, network latency simulation

![Content Delivery Network (CDN) Simulator](https://assets.roadmap.sh/guest/cdn-simulator-lv7kl.png)

For this particular backend project, we’re not going to focus on coding, but rather on backend tools and their configuration. A [CDN](https://aws.amazon.com/es/what-is/cdn/) (or Content Delivery Network) is a platform that allows you to serve static content (like text files, images, audio, etc) safely and reliably.

Instead of having all files inside the same server, the content is replicated and distributed across a network of servers that can provide you with the files at any given point in time.

The point of this project is for you to figure out a way to set up your own CDN keeping in mind the following points:

- Use cloud servers (you can pick your favorite cloud provider for this)
- Configure a load balancer to distribute the load between all servers.
- Set up a caching strategy.

Remember that all major cloud providers have a free tier that allows you to use all their services for some time. AWS for example, allows for a full year of free tier limited to the type of resources you can use.

## 18. Time-tracking CLI for Freelancers

**_Difficulty_**: Very Difficult

**_Skills and technologies used_**: time tracking, interactive CLI, Day.js for time operations, reporting.

![Time-tracking CLI for Freelancers](https://assets.roadmap.sh/guest/time-tracking-cli-freelancers-x7ldv.png)

As freelancers, sometimes understanding what you’re working on, or understanding how much time you’ve spent on a particular project once it’s time to get paid, can be a challenge.

So, with this command line interface tool, we’ll try to solve that pain for freelancers. The tool you’re developing should let you specify that you’re starting to work on a project, and once you’re done, you should also be able to say that you’ve stopped.

On top of that, there should be an interactive reporting mode that should tell you the amount of time spent so far on a particular project (with the ability to filter by date and time), so you can know exactly how much to charge each client.

From the user’s POV, you could have commands like this:

- freelance start project1
- freelance stop project2

And when in interactive mode, something like this should work:

- report project1 since 1/2/24

The challenge on this backend project is not just the CLI itself, which you’ve built in the past, but the actual time tracking logic that needs to happen internally. You’ll be keeping track of small chunks of time associated with different backend projects, and once the report is requested, you need to properly query your DB and get only the right chunks, so you can later add them up and return a valid number.

## 19. JS Obfuscator CLI utility

**_Difficulty_**: Very Difficult

**_Skills and technologies used_**: code obfuscation, batch processing of files using a CLI, Node.js.

![JS Obfuscator CLI utility](https://assets.roadmap.sh/guest/js-obfuscator-utility-f0dfi.png)

Code obfuscation happens when you turn a perfectly readable code into something that only a machine can understand, without changing the plain text nature of the file. In other words, you just make it impossible for a human to read and understand.

Many tools do this in the JS ecosystem, it’s now your turn to create a new tool and perform the exact same action. As an added difficulty, you’ll be coding a tool that does this to an entire folder filled with files (not just one at the time).

Make sure the output for each file is placed inside the same folder, with a “.obs.js” extension, and that you’re also navigating sub-folders searching for more files.

Try to avoid libraries that already perform these exact same tasks, as you’ll be skipping through all the potential problems you can find, and effectively learning nothing from the experience.

## 20. Web Scraper CLI

**_Difficulty_**: Very Difficult

**_Skills and technologies used_**: Web scraping, headless browsing, rules engine

![Web Scraper CLI](https://assets.roadmap.sh/guest/webscraper-cli-ja5h2.png)

A web scraper is a tool that allows you to navigate a website through code, and in the process, capture information from the presented web pages.

As part of the last backend project of this list, you’ll be implementing your very own web scraper CLI tool. This tool will take input from the user with a list of preset commands, such as:

- show code: to list the HTML code of the current page.
- navigate: to open a new URL
- capture: this will return a subsection of the HTML of the current page using the CSS selector you specify.
- click on: this command will trigger a click on a particular HTML element using a CSS selector provided.

Feel free to add extra commands to make the navigation even more interactive.

With the last of our backend project ideas, you’ve covered all the major areas involved in backend development and you’re more than ready to apply for a backend development job if you haven’t already.

If you find a piece of technology that wasn’t covered here, you’ll have the skills required to pick it up in no time.

## Testing

Manual QA Tester - Manually testing software for bugs, usability issues and functionality defects.Use tools i.e Bug reporting tools(JIRA, Bugzilla)
Automation QA Engineer - Writing automated scripts to test applications using tools such as Selenium, Appium, JUnit.

## Throttling

Throttling is a design pattern that is used to limit the rate at which a system or component can be used. It is commonly used in cloud computing environments to prevent overuse of resources, such as compute power, network bandwidth, or storage capacity.

There are several ways to implement throttling in a cloud environment:

- Rate limiting: This involves setting a maximum number of requests that can be made to a system or component within a specified time period.
- Resource allocation: This involves allocating a fixed amount of resources to a system or component, and then limiting the use of those resources if they are exceeded.
- Token bucket: This involves using a "bucket" of tokens to represent the available resources, and then allowing a certain number of tokens to be "consumed" by each request. When the bucket is empty, additional requests are denied until more tokens become available.

Throttling is an important aspect of cloud design, as it helps to ensure that resources are used efficiently and that the system remains stable and available. It is often used in conjunction with other design patterns, such as auto-scaling and load balancing, to provide a scalable and resilient cloud environment.

Visit the following resources to learn more:

- [@article@Throttling - AWS Well-Architected Framework](https://docs.aws.amazon.com/wellarchitected/2022-03-31/framework/rel_mitigate_interaction_failure_throttle_requests.html)

## Design Patterns

Design patterns are typical solutions to commonly occurring problems in software design. They can be broken into three categories:

- Creational Patterns for the creation of objects
- Structural Patterns to provide relationship between objects
- Behavioral Patterns to help define how objects interact

Visit the following resources to learn more:

- [@opensource@Design Patterns for Humans](https://github.com/kamranahmedse/design-patterns-for-humans)
- [@article@GOF design patterns](https://springframework.guru/gang-of-four-design-patterns/)
- [@article@Design Patterns](https://refactoring.guru/design-patterns)

## Event Sourcing

Event sourcing is a design pattern in which the state of a system is represented as a sequence of events that have occurred over time. In an event-sourced system, changes to the state of the system are recorded as events and stored in an event store. The current state of the system is derived by replaying the events from the event store.

One of the main benefits of event sourcing is that it provides a clear and auditable history of all the changes that have occurred in the system. This can be useful for debugging and for tracking the evolution of the system over time.

Event sourcing is often used in conjunction with other patterns, such as Command Query Responsibility Segregation (CQRS) and domain-driven design, to build scalable and responsive systems with complex business logic. It is also useful for building systems that need to support undo/redo functionality or that need to integrate with external systems.

Visit the following resources to learn more:

- [@article@Event Sourcing - Martin Fowler](https://martinfowler.com/eaaDev/EventSourcing.html)
- [@feed@Explore top posts about Architecture](https://app.daily.dev/tags/architecture?ref=roadmapsh)

## others

•
Develop & Maintain Backend Systems: Build scalable server-side applications using
Node.js (including NestJS), Python or PHP.
•
API Development & Integration: Design and maintain RESTful & GraphQL APIs using
frameworks like NestJS, Express.js or Laravel.
•
Database Management: Work with SQL (PostgreSQL, MySQL) and NoSQL (MongoDB,
Firebase) databases, ensuring efficient data modeling and indexing.
•
Performance & Scalability: Optimize backend systems with caching (Redis), load
balancing, and cloud services (AWS, Azure, GCP).
•
Authentication & Security: Implement OAuth, JWT, Role-Based Access Control (RBAC)
and follow best practices for OWASP, GDPR, PCI DSS compliance.
•
DevOps & CI/CD: Automate deployments with Docker, Kubernetes, GitHub Actions,
and monitor applications with Prometheus.
•
Testing & Code Quality: Ensure high code quality with unit and integration testing (Jest,
Mocha) and conduct regular code reviews.
•
Agile Development: Work in Scrum environments, participate in sprint planning, daily
stand-ups, and retrospectives.
•
Documentation & Collaboration: Maintain API documentation with Swagger, Postman,
and collaborate with front-end developers (React, Angular, Vue) for seamless
integration.

## Data Replication

Data replication is the process by which data residing on a physical/virtual server(s) or cloud instance (primary instance) is continuously replicated or copied to a secondary server(s) or cloud instance (standby instance). Organizations replicate data to support high availability, backup, and/or disaster recovery.

Visit the following resources to learn more:

- [@video@What is Data Replication?](https://youtu.be/fUrKt-AQYtE)

## Failure Modes

There are several different failure modes that can occur in a database, including:

- Read contention: This occurs when multiple clients or processes are trying to read data from the same location in the database at the same time, which can lead to delays or errors.
- Write contention: This occurs when multiple clients or processes are trying to write data to the same location in the database at the same time, which can lead to delays or errors.
- Thundering herd: This occurs when a large number of clients or processes try to access the same resource simultaneously, which can lead to resource exhaustion and reduced performance.
- Cascade: This occurs when a failure in one part of the database system causes a chain reaction that leads to failures in other parts of the system.
- Deadlock: This occurs when two or more transactions are waiting for each other to release a lock on a resource, leading to a standstill.
- Corruption: This occurs when data in the database becomes corrupted, which can lead to errors or unexpected results when reading or writing to the database.
- Hardware failure: This occurs when hardware components, such as disk drives or memory, fail, which can lead to data loss or corruption.
- Software failure: This occurs when software components, such as the database management system or application, fail, which can lead to errors or unexpected results.
- Network failure: This occurs when the network connection between the database and the client is lost, which can lead to errors or timeouts when trying to access the database.
- Denial of service (DoS) attack: This occurs when a malicious actor attempts to overwhelm the database with requests, leading to resource exhaustion and reduced performance.

## Load Shifting

Load shifting is a design pattern that is used to manage the workload of a system by shifting the load to different components or resources at different times. It is commonly used in cloud computing environments to balance the workload of a system and to optimize the use of resources.

There are several ways to implement load shifting in a cloud environment:

- Scheduling: This involves scheduling the execution of tasks or workloads to occur at specific times or intervals.
- Load balancing: This involves distributing the workload of a system across multiple resources, such as servers or containers, to ensure that the workload is balanced and that resources are used efficiently.
- Auto-scaling: This involves automatically adjusting the number of resources that are available to a system based on the workload, allowing the system to scale up or down as needed.

Load shifting is an important aspect of cloud design, as it helps to ensure that resources are used efficiently and that the system remains stable and available. It is often used in conjunction with other design patterns, such as throttling and backpressure, to provide a scalable and resilient cloud environment.

## CQRS

CQRS, or command query responsibility segregation, defines an architectural pattern where the main focus is to separate the approach of reading and writing operations for a data store. CQRS can also be used along with Event Sourcing pattern in order to persist application state as an ordered of sequence events, making it possible to restore data to any point in time.

Visit the following resources to learn more:

- [@article@CQRS Pattern](https://docs.microsoft.com/en-us/azure/architecture/patterns/cqrs)

## Solr

Solr is highly reliable, scalable and fault tolerant, providing distributed indexing, replication and load-balanced querying, automated failover and recovery, centralized configuration and more. Solr powers the search and navigation features of many of the world's largest internet sites.

- [@article@Official Website](https://solr.apache.org/)
- [@article@Official Documentation](https://solr.apache.org/resources.html#documentation)

## Hosting

Web hosting is an online service that allows you to publish your website files onto the internet. So, anyone who has access to the internet has access to your website.

- [@video@What Is Web Hosting? Explained](https://www.youtube.com/watch?v=htbY9-yggB0)
- [@video@Different Types of Web Hosting Explained](https://www.youtube.com/watch?v=AXVZYzw8geg)
- [@video@Where to Host a Fullstack Project on a Budget](https://www.youtube.com/watch?v=Kx_1NYYJS7Q)
- [@article@What is the difference between webpage, website, web server, and search engine?](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/Pages_sites_servers_and_search_engines)
- [@article@What is a web server?](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server)

**Repo Hosting Services** - When working on a team, you often need a remote place to put your code so others can access it, create their own branches, and create or review pull requests. These services often include issue tracking, code review, and continuous integration features. A few popular choices are GitHub, GitLab, BitBucket, and AWS CodeCommit.

- [@opensource@GitHub](https://github.com/features/)
- [@article@GitLab](https://about.gitlab.com/)
- [@article@BitBucket](https://bitbucket.org/product/guides/getting-started/overview)
- [@article@How to choose the best source code repository](https://bitbucket.org/product/code-repository)

# Design and Development Principles

In this section, we'll discuss some essential design and development principles to follow while building the backend of any application. These principles will ensure that the backend is efficient, scalable, and maintainable.

## 1. Separation of Concerns (SoC)

Separation of Concerns is a fundamental principle that states that different functionalities of a system should be as independent as possible. This approach improves maintainability and scalability by allowing developers to work on separate components without affecting each other. Divide your backend into clear modules and layers, such as data storage, business logic, and network communication.

## 2. Reusability

Reusability is the ability to use components, functions, or modules in multiple places without duplicating code. While designing the backend, look for opportunities where you can reuse existing code. Use techniques like creating utility functions, abstract classes, and interfaces to promote reusability and reduce redundancy.

## 3. Keep It Simple and Stupid (KISS)

KISS principle states that the simpler the system, the easier it is to understand, maintain, and extend. When designing the backend, try to keep the architecture and code as simple as possible. Use clear naming conventions and modular structures, and avoid over-engineering and unnecessary complexity.

## 4. Don't Repeat Yourself (DRY)

Do not duplicate code or functionality across your backend. Duplication can lead to inconsistency and maintainability issues. Instead, focus on creating reusable components, functions or modules, which can be shared across different parts of the backend.

## 5. Scalability

A scalable system is one that can efficiently handle an increasing number of users, requests, or data. Design the backend with scalability in mind, considering factors such as data storage, caching, load balancing, and horizontal scaling (adding more instances of the backend server).

## 6. Security

Security is a major concern when developing any application. Always follow best practices to prevent security flaws, such as protecting sensitive data, using secure communication protocols (e.g., HTTPS), implementing authentication and authorization mechanisms, and sanitizing user inputs.

## 7. Testing

Testing is crucial for ensuring the reliability and stability of the backend. Implement a comprehensive testing strategy, including unit, integration, and performance tests. Use automated testing tools and set up continuous integration (CI) and continuous deployment (CD) pipelines to streamline the testing and deployment process.

## 8. Documentation

Proper documentation helps developers understand and maintain the backend codebase. Write clear and concise documentation for your code, explaining the purpose, functionality, and how to use it. Additionally, use comments and appropriate naming conventions to make the code itself more readable and self-explanatory.

By following these design and development principles, you'll be well on your way to creating an efficient, secure, and maintainable backend for your applications.
