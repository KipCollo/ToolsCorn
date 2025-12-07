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


## API Authentication

`Authentication in API Security`:- Authentication verifies the identity of a user or system trying to access an API. It answers: "Who are you?".

Advantages of Auth:-
1. Ensure security
2. Control access
3. Mobnitor usage
4. Apply rate limiting.

Types of Authentication for APIs:-

1. `API Key Authentication` - A unique key is assigned to each client.Simple but lacks fine-grained control.The key is attached to each API request. The API server checks for the key when it receives an API request to make sure it is from an authenticated client.The downside of this authentication method is that if the key is stolen, an attacker can use it to impersonate a legitimate client and can then carry out a variety of attacks. It is important to encrypt requests and responses to and from an API using an encryption protocol like Transport Layer Security (TLS) — that way, the key is not exposed in plaintext as it crosses the Internet.
2. `OAuth 2.0 Authentication` - Token-based authentication framework.Grants access based on client credentials.Supports Access Tokens and Refresh Tokens.Instead of requiring authentication directly from the client, an API server can get an authentication token from a trusted authentication server using the OAuth protocol. To use the API, a user logs in to a third-party service instead of directly logging in to the API. Like the username-and-password approach, this authentication method is vulnerable to credential stuffing and other attacks.
3. `JWT (JSON Web Token) Authentication` - Stateless authentication mechanism.Uses a signed token for secure identity verification.
4. `OpenID Connect (OIDC)` - Built on OAuth 2.0, adds user identity verification.Used by Keycloak, Auth0, Google Sign-In.
5. `HTTP Basic authentication(Username and password)` - API requests can use typical username and password credentials for authentication via a method called HTTP authentication. In HTTP authentication, a username and password are encoded and added to the HTTP header for all API requests. The server can check these credentials against the credentials of allowed clients to authenticate the requests.This approach comes with all the challenges normally associated with passwords: passwords can be lost, leaked, stolen, guessed, or shared with untrusted parties. Passwords are also subject to credential stuffing and brute force attacks, among others.


**HTTP Basic authentication**:-

There are many ways of authenticating a user, but one of the most widespread is simple username and password authentication.
In a web application with a user interface,we might implement this by presenting the user with a form to enter their username and password. An API is not responsible for rendering a UI, so you can instead use the standard HTTP Basic authentication mechanism to prompt for a password in a way that doesn’t depend on any UI.
This is a simple standard scheme, specified in RFC 7617 (https://tools.ietf.org/html/rfc7617), in which the username and password are encoded (using Base64 encoding; https://en.wikipedia.org/wiki/Base64) and sent in a header(Base64 encoded is simple encoding that's easily reversible). 
An example of a Basic authentication header for the username demo and password changeit is as follows:

Authorization: Basic ZGVtbzpjaGFuZ2VpdA==

The Authorization header is a standard HTTP header for sending credentials to the server. It’s extensible, allowing different authentication schemes,but in this case you’re using the Basic scheme. The credentials follow the authentication scheme identifier. For Basic authentication, these consist of a string of the username followed by a colon and then the password. The string is then converted into bytes (usually in UTF-8, but the standard does not specify) and Base64-encoded.

```java
String user = "Colins";
String password = "pass"
String basic = Base64.getEncoder().encodeToString((user + ":" + password).getBytes());

HttpURLConnection conn = (HttpURLConnection)new URL("https://kipcollo.com")
               .openConnection();
conn.setRequestMethod("GET");
conn.setRequestProperty("Authorization","Basic"+ basic);
```

`Drawbacks of HTTP authentication`:-

1. The user’s password is sent on every API call, increasing the chance of it accidentally being exposed by a bug in one of those operations.
2. Verifying a password is an expensive operation and performing this validation on every API call adds a lot of overhead. Modern password-hashing algorithms are designed to take around 100ms for interactive logins, which limits your API to handling 10 operations per CPU core per second.
3. The dialog box presented by browsers for HTTP Basic authentication is pretty ugly, with not much scope for customization. The user experience leaves a lot to be desired.
4. There is no obvious way for the user to ask the browser to forget the password.Even closing the browser window may not work and it often requires configuring advanced settings or completely restarting the browser. On a public terminal, this is a serious security problem if the next user can visit pages using your stored password just by clicking the Back button.

For these reasons, HTTP Basic authentication and other standard HTTP auth schemes are not often used for APIs that must be accessed from web browser clients. On the other hand, HTTP Basic authentication is a simple solution for APIs that are called from command-line utilities and scripts, such as system administrator APIs, and has a place in service-to-service API calls where no user is involved at all and passwords can be assumed to be strong.                   


`HTTP Digest and other authentication schemes`:- HTTP Basic authentication is just one of several authentication schemes that are supported by HTTP. The most common alternative is HTTP Digest authentication, which sends a salted hash of the password instead of sending the raw value. Although this sounds like a security improvement, the hashing algorithm used by HTTP Digest,MD5, is considered insecure by modern standards and the widespread adoption of HTTPS has largely eliminated its advantages. Certain design choices in HTTP Digest also prevent the server from storing the password more securely, because the weakly-hashed value must be available. An attacker who compromises the database therefore has a much easier job than they would if a more secure algorithm had been used.
If that wasn’t enough, there are several incompatible variants of HTTP Digest in use.You should avoid HTTP Digest authentication in new applications.
While there are a few other HTTP authentication schemes, most are not widely used.The exception is the more recent HTTP Bearer authentication scheme introduced by OAuth2 in RFC 6750 (https://tools.ietf.org/html/rfc6750). This is a flexible token-based authentication scheme that is becoming widely used for API authentication.

```java
String digestHeader = "Digest username=\"user\", realm=\"example\", nonce=\"abc123\", uri=\"/\", response=\"<hash>\"";
HttpURLConnection conn = (HttpURLConnection)new URL("https://kipcollo.com/resource")
               .openConnection();
conn.setRequestProperty("Authorization", digestHeader);
```


**API key Authentication**:-

```java
String apiKey = "agy3rnf";
HttpURLConnection conn = (HttpURLConnection)new URL("https://kipcollo.com/resource")
               .openConnection();
conn.setRequestProperty("Authorization","Api-Key"+ apiKey);
```

custom API key in header without Authorization:-

```java
String apiKey = "agy3rnf";
HttpURLConnection conn = (HttpURLConnection)new URL("https://kipcollo.com/resource")
               .openConnection();
conn.setRequestProperty("X-API-KEY",apiKey);
```


**Token-based authentication**:- So far, you have required API clients to submit a username and password on every API request to enforce authentication. Although simple, this approach has several downsides from both a security and usability point of view.
An alternative known as `token-based authentication`, where the username and password are supplied once to a dedicated login endpoint. A time-limited token is then issued to the client that can be used in place of the user’s credentials for subsequent API calls.

The CPU overhead of password hashing on every request is killing performance and driving up energy costs too. What you want is a way for users to login once and then be trusted for the next hour or so while they use the API. This is the purpose of token-based authentication, and in the form of session cookies has been a backbone of web development since very early on. When a user logs in by presenting their username and password, the API will generate a random string (the token) and give it to the client. The client then presents the token on each subsequent request, and the API can look up the token in a database on the server to see which user is associated with that session. When the user logs out, or the token expires, it is deleted from the database,and the user must log in again if they want to keep using the API.

In token-based authentication, a user’s real credentials are presented once, and the client is then given a short-lived token. A token is typically a short, random string that can be used to authenticate API calls until the token expires.

Token-based authentication is the dominant approach to securing APIs,with a wide variety of techniques and approaches. Each approach has different trade-offs and are suitable in different scenarios.

Token-based authentication is a little more complicated than the HTTP Basic authentication.Rather than send the username and password directly to each API endpoint,the client instead sends them to a dedicated login endpoint. The login endpoint verifies the username and password and then issues a time-limited token. The client then includes that token on subsequent API requests to authenticate. The API endpoint can validate the token because it is able to talk to a token store that is shared between the login endpoint and the API endpoint.

In the simplest case, this token store is a shared database indexed by the token ID, but more advanced (and loosely coupled) solutions are also possible.
A short-lived token that is intended to authenticate a user while they are directly interacting with a site (or API) is often referred to as a `session token`, `session cookie`, or just `session`.

For web browser clients, there are several ways you can store the token on the client. Traditionally, the only option was to store the token in an HTTP cookie, which the browser remembers and sends on subsequent requests to the same site until the cookie expires or is deleted.

Cookies are still a great choice for first-party clients running on the same origin as the API they are talking to but can be difficult when dealing with third-party clients and clients hosted on other domains.An alternative to cookies is using HTML 5 local storage that solves these problems, but with new challenges of its own.

NOTE:- A first-party client is a client developed by the same organization or company that develops an API, such as a web application or mobile app.Third-party clients are developed by other companies and are usually less trusted.

*Token store abstraction*:- You can implement several storage options for tokens with different pros and cons.Each token has an associated username and an expiry time, and a collection of attributes that you can use to associate information with the token, such as how the user was authenticated or other details that you want to use to make access control decisions. Creating a token in the store returns its ID, allowing different store implementations to decide how the token should be named. You can later look up a token by ID, and you can use the Optional class to handle the fact that the token might not exist; either because the user passed an invalid ID in the request or because the token has expired.
The user controller authenticates the user with HTTP Basic authentication. If that succeeds, then the request continues to the token login endpoint, which can retrieve the authenticated subject from the request attributes. Otherwise, the request is rejected because the endpoint requires authentication.

You can set whatever expiry time you want for the tokens, and this will control how frequently the user will be forced to reauthenticate.


`Session cookies`:- The simplest implementation of token-based authentication, and one that is widely implemented on almost every website, is cookie-based. After the user authenticates,the login endpoint returns a Set-Cookie header on the response that instructs the web browser to store a random session token in the cookie storage. Subsequent requests to the same site will include the token as a Cookie header. The server can then look up the cookie token in a database to see which user is associated with that token.

One of the key principles of the REST architectural style is that interactions between
the client and the server should be stateless. That is, the server should not store any client-specific state between requests. Cookies appear to violate this principle because the server stores state associated with the cookie for each client. Early uses of session cookies included using them as a place to store temporary state such as a shopping cart of items that have been selected by the user but not yet paid for.
These abuses of cookies often broke expected behavior of web pages, such as the behavior of the back button or causing a URL to display differently for one user compared to another.

Token database is struggling to cope with this level of traffic. You’ve evaluated different database backends, but you’ve heard about stateless tokens that would allow you to get rid of the database entirely.


`The Bearer authentication scheme` Passing the token in a X-CSRF-Token header is less than ideal for tokens that have nothing to do with CSRF. You could just rename the header, and that would be perfectly acceptable. However, a standard way to pass non-cookie-based tokens to an API exists in the form of the Bearer token scheme for HTTP authentication defined by RFC 6750 (https://tools.ietf.org/html/rfc6750). While originally designed for OAuth2 usage, the scheme has been widely adopted as a general mechanism for API token-based authentication.
A bearer token is a token that can be used at an API simply by including it in the request. Any client that has a valid token is authorized to use that token and does not need to supply any further proof of authentication.A bearer token can be given to a third party to grant them access without revealing user credentials but can also be used easily by attackers if stolen.

To send a token to an API using the Bearer scheme, you simply include it in an Authorization header, much like you did with the encoded username and password for HTTP Basic authentication. The token is included without additional encoding:

Authorization: Bearer QDAmQ9TStkDCpVK5A9kFowtYn2k

```java
String token = "eyJhbGhdisr90450tginhydkjj..";
HttpURLConnection conn = (HttpURLConnection)new URL("https://kipcollo.com/data")
               .openConnection();
conn.setRequestProperty("Authorization","Bearer"+ token);
```

The standard also describes how to issue a WWW-Authenticate challenge header for bearer tokens, which allows our API to become compliant with the HTTP specifications once again, because you removed that header.The challenge can include a realm parameter, just like any other HTTP authentication scheme, if the API requires different tokens for different endpoints. For example, you might return realm="users" from one endpoint and realm="admins" from another, to indicate to the client that they should obtain a token from a different login endpoint for administrators compared to regular users. Finally, you can also return a standard error code and description to tell the client why the request was rejected. Of the three error codes defined in the specification, the only one you need to worry about now is invalid_token, which indicates that the token passed in the request was expired or otherwise invalid. For example, if a client passed a token that has expired you could return:

HTTP/1.1 401 Unauthorized
WWW-Authenticate: Bearer realm="users", error="invalid_token",
   error_description="Token has expired"

`Access & Refresh Tokens`:- Refresh tokens should be stored generally in server-side for security reasons.
Access tokens - Expires fast.Used for Api calls.
Refresh tokens - Lives longer.
When access tokens expires,refresh tokens gets a new on behind the scene.Users don't have to login again,and your system stays secure.

`JSON Web Tokens`:- JSON Web Tokens (JWTs, pronounced “jots”) are a standard format for self-contained security tokens. A JWT consists of a set of claims about a user represented as a JSON object, together with a header describing the format of the token. JWTs are cryptographically protected against tampering and can also be encrypted.

Storing token state on the client - The idea behind stateless tokens is simple. Rather than store the token state in the database, you can instead encode that state directly into the token ID and send it to the client. For example, you could serialize the token fields into a JSON object, which you then Base64url-encode to create a string that you can use as the token ID. When the token is presented back to the API, you then simply decode the token and parse the JSON to recover the attributes of the session.


**OAuth 2.0 Authentication**:-

`SSO & Identity Protocols`:- One login.
SAML- For enterprise tools salesforce,internal Older,XML-based.
OAuth2 - For consummer apps.Modern,JSON-based.

Identity protocol define how apps securely exchange user login info.

## Api Authorization

Authorization determines what actions a user can perform after authentication. It answers: "What are you allowed to do?".

Types of Authorization

1. Role-Based Access Control (RBAC) - Access is granted based on roles (e.g., Admin, User).
2. Attribute-Based Access Control (ABAC) - Access is based on user attributes like location, device, time.More dynamic than RBAC.
3. Scope-Based Authorization (OAuth2 Scopes) - Defines fine-grained permissions.Example: read:users, write:products.
4. Policy-Based Access Control (PBAC) - Uses external policy engines (e.g., Open Policy Agent).

**OAuth2 and OpenID Connect**:- OAuth2 Authorization Server (AS) allows your users to delegate access to third-party clients. By using scoped tokens,users can restrict which parts of the API those clients can access.
OAuth provides a standard way to centralize token-based authentication within your organization to achieve single sign-on across different APIs and services. The OpenID Connect standard builds on top of OAuth2 to provide a more complete authentication framework when you need finer control over how a user is authenticated.

`Scoped tokens` - 


`Single sign-on`:- One of the advantages of OAuth2 is the ability to centralize authentication of users at the AS, providing a single sign-on (SSO) experience.When the user’s client needs to access an API, it redirects the user to the AS authorization endpoint to get an access token. At this point the AS authenticates the user and asks for consent for the client to be allowed access. Because this happens within a web browser, the AS typically creates a session cookie, so that the user does not have to login again.


**Role-based access control**:-
