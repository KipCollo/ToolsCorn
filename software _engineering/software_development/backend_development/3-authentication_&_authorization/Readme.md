# Authentication & Authorization

Authentication and authorization are fundamental aspects of security that ensure only legitimate users have access to specific resources.

## Authentication

Authentication verifies the identity of a user or system trying to access an API. It answers: "Who are you?".

Advantages of Auth:-

1. Ensure security
2. Control access
3. Mobnitor usage
4. Apply rate limiting.

Authentication is one of two key security concepts that you must internalize when developing secure applications (the other being authorization). Authentication identifies who is attempting to request a resource. You may be familiar with authentication in your daily online and offline life, in very different contexts, as follows:

- `Credential-based authentication`: When you log in to your web-based email account, you most likely provide your username and password. The email provider matches your username with a known user in its database and verifies that your password matches what they have on record. These credentials are what the email system uses to validate that you are a valid user of the system.Technically speaking, the email system can check credentials not only in the database but anywhere, for example, a corporate directory server such as Microsoft Active Directory
- `Two-factor authentication:`
- `Hardware authentication:`

Typically, a software system will be divided into two high-level realms, such as unauthenticated (or anonymous) and authenticated.
Application functionality in the anonymous realm is the functionality that is independent of a user’s identity (think of a welcome page for an online application).
Anonymous areas do not do the following:

1. Require a user to log in to the system or otherwise identify themselves to be usable
2. Display sensitive information, such as names, addresses, credit cards, and orders
3. Provide functionality to manipulate the overall state of the system or its data

Unauthenticated areas of the system are intended for use by everyone, even by users whom we haven’t specifically identified yet. However, it may be that additional functionality appears to identify users in these areas (for example, the ubiquitous Welcome {First Name} text). The selective displaying of content to authenticated users is fully supported through the use of the Spring Security tag library.

The API authentication process validates the identity of the client attempting to make a connection by using an authentication protocol. The protocol sends the credentials from the remote client requesting the connection to the remote access server in either plain text or encrypted form. The server then knows whether it can grant access to that remote client or not.

Types of Authentication for APIs:-

1. `API Key Authentication` - A unique key is assigned to each client.Simple but lacks fine-grained control.The key is attached to each API request. The API server checks for the key when it receives an API request to make sure it is from an authenticated client.The downside of this authentication method is that if the key is stolen, an attacker can use it to impersonate a legitimate client and can then carry out a variety of attacks. It is important to encrypt requests and responses to and from an API using an encryption protocol like Transport Layer Security (TLS) — that way, the key is not exposed in plaintext as it crosses the Internet.
2. `OAuth 2.0 Authentication` - Token-based authentication framework.Grants access based on client credentials.Supports Access Tokens and Refresh Tokens.Instead of requiring authentication directly from the client, an API server can get an authentication token from a trusted authentication server using the OAuth protocol. To use the API, a user logs in to a third-party service instead of directly logging in to the API. Like the username-and-password approach, this authentication method is vulnerable to credential stuffing and other attacks.
3. `JWT (JSON Web Token) Authentication` - Stateless authentication mechanism.Uses a signed token for secure identity verification.
4. `OpenID Connect (OIDC)` - Built on OAuth 2.0, adds user identity verification.Used by Keycloak, Auth0, Google Sign-In.
5. `HTTP Basic authentication(Username and password)` - API requests can use typical username and password credentials for authentication via a method called HTTP authentication. In HTTP authentication, a username and password are encoded and added to the HTTP header for all API requests. The server can check these credentials against the credentials of allowed clients to authenticate the requests.This approach comes with all the challenges normally associated with passwords: passwords can be lost, leaked, stolen, guessed, or shared with untrusted parties. Passwords are also subject to credential stuffing and brute force attacks, among others.
6. `Session based Authentication`
7. `SSO - Single Sign On`
8. `Token based Authentication`

_HTTP Authentication_:- HTTP protocol provides built-in authentication support—called basic authentication—based on a simple challenge/response, username/password model. With this technique, the web server maintains a database of usernames and passwords and identifies certain resources (files, directories, servlets, etc.) as protected. When a user requests access to a protected resource, the server responds with a request for the client's username and password. At this point, the browser usually pops up a dialog box where the user enters the information, and that input is sent back to the server as part of a second authorized request. If the submitted username and password match the information in the server's database, access is granted. The whole authentication process is handled by the server itself.

- Three types of authentication:-
  1. `Basic authantication` causes the browser to display a dialog box that requests a username and a password.then,when the user enters a username and password,it sends this data as a plain text to the server so the server can attempt to authorize the user.since you don't have to code a form for this type of authentication,it is easy to implement.However,you can't control the appearance of this dialog box.
     Basic authentication alone is very weak. It provides no confidentiality, no integrity, and only the most basic authentication. The problem is that passwords are transmitted over the network, thinly disguised by a well-known and easily reversed Base64 encoding. Anyone monitoring the TCP/IP data stream has full and immediate access to all the information being exchanged, including the username and password, unless there is additional SSL encryption employed.Plus, passwords are often stored on the server in clear text, making them vulnerable to anyone cracking into the server's filesystem. While it's certainly better than nothing, sites that rely exclusively on basic authentication cannot be considered really secure.
  2. `Digest authentication` is a variation on the basic authentication scheme. Instead of transmitting a password over the network directly, a digest of the password is used instead. The digest is produced by taking a hash (using the very secure MD5 encryption algorithm) of the username, password, URI, HTTP request method, and a randomly generated nonce value provided by the server.Uses MD5 algorithm.
     Both sides of the transaction know the password and use it to compute digests. If the digests match, access is granted. Transactions are thus somewhat more secure than they would be otherwise because digests are valid for only a single URI request and nonce value. The server, however, must still maintain a database of the original passwords. And, as of this writing, digest authentication is not supported by very many browsers.
  3. `Form` allows programmer esign choice of form page for gathering credentials.

`Configuring HTTP Authentication`:- In versions of the Servlet API before 2.2, the technique for configuring authentication varied depending on the server. Beginning with API 2.2, the technique has been standardized and now configuration of security policies can be accomplished in a portable manner using the web.xml deployment descriptor.

Role-based authentication - Using tags in the web application deployment descriptor, security constraints can be set up to indicate that certain pages in the web application are to be accessed only by users with certain credentials. Servlets use role-based authorization to manage access. With this model, access permissions are granted to an abstract entity called a security role , and access is allowed only to users or groups of users who are part of that given role.

**Basic authentication** - Given the name "Basic Authentication", you should not confuse Basic Authentication with the standard username and password authentication. Basic authentication is a part of the HTTP specification, and the details can be [found in the RFC7617](https://www.rfc-editor.org/rfc/rfc7617.html).

Because it is a part of the HTTP specifications, all the browsers have native support for "HTTP Basic Authentication".

- [HTTP Basic Authentication](https://roadmap.sh/guides/http-basic-authentication)
- [Illustrated HTTP Basic Authentication](https://www.youtube.com/watch?v=mwccHwUn7Gc)

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

**Cookie-Based Authentication** - Cookies are pieces of data used to identify the user and their preferences. The browser returns the cookie to the server every time the page is requested. Specific cookies like HTTP cookies are used to perform cookie-based authentication to maintain the session for each user.

- [How does cookie based authentication work?](https://stackoverflow.com/questions/17769011/how-does-cookie-based-authentication-work)

**OAuth** - OAuth stands for *O*pen *Auth*orization and is an open standard for authorization. It works to authorize devices, APIs, servers and applications using access tokens rather than user credentials, known as "secure delegated access".

In its most simplest form, OAuth delegates authentication to services like Facebook, Amazon, Twitter and authorizes third-party applications to access the user account without having to enter their login and password.

It is mostly utilized for REST/APIs and only provides a limited scope of a user's data.

- [Okta - What the Heck is OAuth](https://developer.okta.com/blog/2017/06/21/what-the-heck-is-oauth)
- [DigitalOcean - An Introduction to OAuth 2](https://www.digitalocean.com/community/tutorials/an-introduction-to-oauth-2)
- [What is OAuth really all about](https://www.youtube.com/watch?v=t4-416mg6iU)
- [OAuth 2.0: An Overview](https://www.youtube.com/watch?v=CPbvxxslDTU)

`SSO & Identity Protocols`:- One login.
SAML- For enterprise tools salesforce,internal Older,XML-based.
OAuth2 - For consummer apps.Modern,JSON-based.

Identity protocol define how apps securely exchange user login info.

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

**OpenID** - OpenID is a protocol that utilizes the authorization and authentication mechanisms of OAuth 2.0 and is now widely adopted by many identity providers on the Internet.
It solves the problem of needing to share user's personal info between many different web services(e.g. online shops, discussion forums etc.)

Visit the following resources to learn more:

- [Official Website](https://openid.net/)
- [What is OpenID](https://openid.net/connect/)
- [OAuth vs OpenID](https://securew2.com/blog/oauth-vs-openid-which-is-better)
- [An Illustrated Guide to OAuth and OpenID Connect](https://www.youtube.com/watch?v=t18YB3xDfXI)
- [OAuth 2.0 and OpenID Connect (in plain English)](https://www.youtube.com/watch?v=996OiexHze0)

**SAML** stands for Security Assertion Markup Language. It is an XML-based standard for exchanging authentication and authorization data between parties, particularly between an identity provider (IdP) and a service provider (SP). In a SAML-based system, a user requests access to a protected resource. The service provider asks the identity provider to authenticate the user and assert whether they are granted access to the resource.

Some advantages of using SAML include:

- Single Sign-On (SSO): Users can log in once at the IdP and access multiple service providers without needing to authenticate again.
- Improved security: Passwords and user credentials are not required to be stored and managed by the service provider, reducing the potential vectors for attack.
- Increased efficiency: As users no longer need to maintain multiple sets of credentials, managing access becomes easier for both the user and the system administrators.
- Interoperability: SAML enables a wide range of applications to work together, regardless of the underlying technology or platform.

Three main components are involved in the SAML architecture:

1. _Identity Provider (IdP)_: The entity that manages users' identities and authenticates them by providing security tokens, also called assertions.
2. _Service Provider (SP)_: The entity that provides a service (such as a web application or API) and relies on the identity provider to authenticate users and grant/deny access to the resources.
3. _User/Principal_: The end user seeking access to the service provided by the service provider.

The SAML authentication process consists of the following steps:

1. The user requests access to a protected resource from the service provider.
2. If the user is not already authenticated, the service provider generates and sends a SAML authentication request to the identity provider.
3. The identity provider authenticates the user (using, e.g., a username and password, multi-factor authentication, or another method).
4. The identity provider constructs a SAML response, which includes details about the user and asserts whether the user is authorized to access the requested resource.
5. The SAML response is sent back to the service provider, typically via the user's web browser or API client.
6. The service provider processes the SAML response, extracts the necessary information, and grants or denies access to the user based on the identity provider's assertion.

With SAML, you can streamline user authentication and authorization across various applications and systems, providing a better user experience and improving your overall backend security.

_Authentication Best Practices_:-

1. Use Secure Authentication Protocols - Implement OAuth2/OpenID Connect for secure authentication.Use JWT (JSON Web Token) for stateless authentication in APIs.
2. Enforce Multi-Factor Authentication (MFA) - Require an additional authentication factor such as TOTP (Time-Based One-Time Password) or biometric authentication.
3. Secure Password Storage - Hash passwords using BCrypt, Argon2, or PBKDF2 before storing them.- Enforce strong password policies with minimum complexity requirements.
4. Prevent Brute-Force Attacks - Implement account lockout mechanisms after multiple failed login attempts. - Use CAPTCHA to mitigate automated attacks.

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

Token-based authentication is a protocol which allows users to verify their identity, and in return receive a unique access token. During the life of the token, users then access the website or app that the token has been issued for, rather than having to re-enter credentials each time they go back to the same webpage, app, or any resource protected with that same token.

Auth tokens work like a stamped ticket. The user retains access as long as the token remains valid. Once the user logs out or quits an app, the token is invalidated.

Token-based authentication is different from traditional password-based or server-based authentication techniques. Tokens offer a second layer of security, and administrators have detailed control over each action and transaction.

But using tokens requires a bit of coding know-how. Most developers pick up the techniques quickly, but there is a learning curve.

- [What Is Token-Based Authentication?](https://www.okta.com/identity-101/what-is-token-based-authentication/)

_Token store abstraction_:- You can implement several storage options for tokens with different pros and cons.Each token has an associated username and an expiry time, and a collection of attributes that you can use to associate information with the token, such as how the user was authenticated or other details that you want to use to make access control decisions. Creating a token in the store returns its ID, allowing different store implementations to decide how the token should be named. You can later look up a token by ID, and you can use the Optional class to handle the fact that the token might not exist; either because the user passed an invalid ID in the request or because the token has expired.
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

---

## Authorization

Authorization is the second of two core security concepts that are crucial in implementing and understanding application security. Authorization uses the information that was validated during authentication to determine whether access should be granted to a particular resource. Built around the authorization model for the application, authorization partitions the application functionality and data so that the availability of these items can be controlled by matching the combination of
privileges, functionality, and data to users. Our application’s failure at this point of the audit indicates that the application’s functionality isn’t restricted by the user role. Imagine if you were running an e-commerce site and the ability to view, cancel, or modify orders and customer information was available to any user of the site!
Authorization typically involves the following two separate aspects that combine to describe the accessibility of the secured system:

1. The first is the mapping of an authenticated principal to one or more authorities (often called roles). For example, a casual user of your website might be viewed as having visitor authority,while a site administrator might be assigned administrative authority.
2. The second is the assignment of authority checks to secured resources in the system. This is typically done when the system is developed, either through an explicit declaration in code or through configuration parameters. For example, the screen that allows for the viewing of other users’ events should be made available only to those users with administrative authority.

A secured resource may be any aspect of the system that should be conditionally available based on the authority of the user.

Secured resources of a web-based application could be individual web pages, entire portions of the website, or portions of individual pages. Conversely, secured business resources might be method calls on classes or individual business objects.
You might imagine an authority check that would examine the principal (the identity of the current user or system interacting with the application), look up its user account, and determine whether the principal is, in fact, an administrator. If this authority check determines that the principal who is attempting to access the secured area is, in fact, an administrator, then the request will succeed. If, however, the principal does not have sufficient authority, the request should be denied.

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

_Authorization Best Practices_:-

1. Implement Role-Based Access Control (RBAC) - Define roles with minimum necessary privileges. - Enforce the principle of least privilege for user accounts.
2. Use Attribute-Based Access Control (ABAC) Where Necessary. - Define fine-grained access controls based on user attributes (e.g., department, location).
3. Validate Authorization at Every Request - Do not assume a user’s previous authorization applies to new actions. - Check permissions at both the frontend and backend.
4. Secure API Endpoints - Ensure proper authorization before processing API requests. - Implement scope-based access control for APIs.
