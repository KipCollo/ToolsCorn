# API Security

API security focuses on protecting the integrity, confidentiality, and availability of APIs from unauthorized access and cyber threats.
Security mechanisms include:-

1. Authorization:-
   - Identity-based- ACLs,Roles,ABAC.
   - capabilities.
   - OAuth2
2. Audit Logging(Audit logging is the basis for accountability, to prevent repudiation threats).
3. Authentication:-
   - Passwords
   - Token-based - Cookies,Macaroons,JWTs
   - Certificates
   - End-to-end
4. Encryption.
5. Rate-limiting(Rate-limiting is used to prevent users overwhelming your API with requests, limiting denial of service threats).

An audit log records details of significant actions taken on a system, so that you can later work out who did what and when. Audit logs are crucial evidence when investigating potential security breaches.

API Security lies at the intersection of several security disciplines.The most important of these are the following three areas:

- Information security (InfoSec) is concerned with the protection of information over its full life cycle from creation, storage, transmission, backup, and eventual destruction.
- Network security deals with both the protection of data flowing over a network and prevention of unauthorized access to the network itself.
- Application security (AppSec) ensures that software systems are designed and built to withstand attacks and misuse.

From information security you will learn how to:

1. Define your security goals and identify threats
2. Protect your APIs using access control techniques
3. Secure information using applied cryptography(Cryptography is the science of protecting information so that two or more people can communicate without their messages being read or tampered with by anybody else. It can also be used to protect information written to disk.)

From network security you will learn:

1. The basic infrastructure used to protect an API on the internet, including firewalls, load-balancers, and reverse proxies, and roles they play in protecting your API (see the next section)
2. Use of secure communication protocols such as HTTPS to protect data transmitted to or from your API.

Finally, from application security you will learn:

1. Secure coding techniques
2. Common software security vulnerabilities
3. How to store and manage system and user credentials used to access your APIs

NOTE:- Only rate-limiting and access control directly reject requests. A failure in authentication does not immediately cause a request to fail, but a later access control decision may reject a request if it is not authenticated. This is important because we want to ensure that even failed requests are logged, which they would not be if the authentication process immediately rejected unauthenticated requests.

## Best Practices for API Security:-

1. Use API Gateways - API gateways provide a centralized entry point for all API requests and help manage authentication, rate limiting, and security enforcement.
2. Authentication & Authorization - Use OAuth2/OpenID Connect for secure authentication.
   - Implement JWT (JSON Web Token) or API keys for access control.
   - Enforce role-based access control (RBAC) to restrict permissions.
3. Input Validation & Data Sanitization - Validate and sanitize user input to prevent SQL Injection, XSS, and other injection attacks.
   - Use schemas (e.g., JSON Schema) to enforce strict data validation.
4. Rate Limiting & Throttling - Implement rate limiting to prevent abuse and DDoS attacks.
   - Define request quotas per user/IP to mitigate excessive API calls.
5. Encryption & Secure Communication:- Enforce HTTPS/TLS to encrypt API traffic and prevent data interception.
   - Encrypt sensitive API responses and payloads using strong encryption algorithms.
6. API Logging & Monitoring - Log all API requests and responses for auditing and security analysis.
   - Use monitoring tools like AWS CloudWatch, ELK Stack, or Prometheus.
7. Use Web Application Firewalls (WAF) - Deploy WAF solutions to filter and block malicious API traffic.
   - Protect against automated attacks such as bots and brute force.
8. Zero-Trust Security Model - Implement the principle of least privilege (PoLP) for API access.
   - Require re-authentication for sensitive operations.
9. Versioning & Deprecation - Maintain API versioning to manage changes securely.
   - Deprecate outdated API endpoints safely to prevent security risks.
10. Security Testing - Perform regular penetration testing and security assessments.Use API security tools like OWASP ZAP, Burp Suite, or Postman Security scans.

11. Use a Service Mesh - Like API gateways, service mesh technology applies different layers of management and control when routing requests from one service to the next. A service mesh optimizes the way these moving parts work together, including correct authentication, access control and other security measures.
    As the use of microservices increases, service meshes are especially important. API management is shifting to the service communication layer, and service meshes can provide automation and security for large deployments with multiple APIs.

## REST API Security vs SOAP Security

There are two main architectural styles used in modern APIs:

1. SOAP—a highly structured message protocol that supports multiple low-level protocols.
2. REST—a simpler approach to APIs using HTTP/S as the transport protocol, and typically using JSON format for data transfer.

Both types of APIs support HTTP requests and responses and Secure Sockets Layer (SSL), but the similarity ends there.

SOAP API security

- SOAP offers extensions to the protocol that address security matters
- SOAP is based on W3C and OASIS recommendations, including SAML tokens, XML encryption, and XML signatures.
- SOAP supports the Web Services (WS) specifications, which lets you use security extensions like WS-Security, which provides enterprise-grade security for web services
- SOAP supports WS-ReliableMessaging which provides built-in error handling

REST API security

- REST APIs do not have any built-in security capabilities—security depends on the design of the API itself.
- Security must be built in for data transmission, deployment, and interaction with clients
- REST APIs do not have built-in error handling and need to resend data when an error occurs.
- A common architectural choice is to deploy REST APIs behind an API gateway. Clients connect to the gateway, which acts as a proxy, not directly to the REST API. This allows many security concerns to be addressed by the API gateway.

In conclusion, SOAP APIs are more secure by design, but REST APIs can be made secure, depending on their implementation and the architecture selected.

GraphQL Security

GraphQL is a query language that describes how clients can request information via an application programming interface (API). Developers can use GraphQL syntax to request specific data and receive it from a single source or multiple sources. Once a client defines the required data structure for a request, a server returns data using that exact structure.

Since clients can craft highly complex queries, the server must be ready to properly handle them. The server should be able to handle abusive queries from malicious clients, as well as large queries by legitimate clients. If the server does not handle these scenarios properly, the client might take the server down.

Here are a several strategies that can help you mitigate GraphQL security risks:

- Timeout – a timeout can help you defend against large queries. It is the simplest strategy because it does not require the server to know any details about incoming queries. The server only needs to know the maximum time allowed per query.
- Maximum query depth – can help you prevent clients from abusing query depth. Maximum query depth is the analysis of a query document’s abstract syntax tree (AST) to determine what is acceptable. The GraphQL server can then use this depth to accept or reject requests.
- Query complexity – query depth is not always enough to understand the scope of a GraphQL query. This usually happens when certain schema fields are more complex to compute than others. Query complexity can help you define the level of complexity of these fields, and restrict queries that exceed a complexity threshold.
- Throttling – the above options can stop large queries, but they cannot stop clients that make many medium-sized queries. For GraphQL, even a few queries could be too much to handle, if queries are expensive. You can determine the server time needed to complete each type of query, and use this estimation to throttle queries.

## Top Open Source API Testing Tools

Securing production APIs, especially those that have a regular development and release process, requires automated tools. The following open source tools can help you design security-related test cases, run them against API endpoints, and remediate issues you discover. They can also discover business logic vulnerabilities, which can also be an opening for attackers.

1. Postman - Postman is an API development platform. Its key features include:
   Automating manual API tests
   Integrating tests into the CI/CD pipeline
   Simulating expected behavior of API endpoints and responses
   Checking API performance and response times
   Enables collaboration between developers with built-in version control

2. Swagger - Swagger is an open source toolkit that can help you create RESTful APIs. Its enables two API development styles:
   Top-down API design, letting you build an API in Swagger and then generate code from specifications
   Bottom-up API design, in which Swagger takes existing code and generates documentation about API operations, parameters and outputs

3. JMeter - JMeter is a load testing tool, which can also be used for security testing. Key features include:
   Inputting CSV files and using them for load testing—this lets you perform tests with different values to simulate risky scenarios and cyber attacks.
   Embedding API tests into the build process with Jenkins
   Advanced performance testing, with the ability to replay test results

4. SoapUI- Soap UI is a popular API functional testing tool. Its key features include:
   A large library of functional testing elements that let you automate API tests
   Fully customizable, provides source code so you can build your own features
   Easy drag and drop interface to create tests
   Lets you reuse existing load test or security scans for functional tests
   In the pro package, lets you perform data-driven testing, simulating how users work with the API using spreadsheets or databases

5. Karate - Karate DSL is a Java API testing tool using the behavior-driven development (BDD) approach. Its key features include:
   Writing BDD for APIs with ready-made step definitions
   Generates standard Java reports.
   Does not require Java knowledge to write tests for Java-based APIs
   Enables multi-threaded execution
   Supports switching configuration between staging and production

6. Fiddler - Fiddler is a tool that monitors and replays HTTP requests, with an API testing extension for .NET, Java, Ruby, and other popular frameworks. Its key features include:

   Debugging requests from any type of client—including Windows, MacOs, Linux, and mobile devices
   Tests cookies, cache, and headers in client-server communication
   Provides a convenient UI for grouping and organizing API requests
   Creates mock requests and responses with no code changes

**security controls**:-
