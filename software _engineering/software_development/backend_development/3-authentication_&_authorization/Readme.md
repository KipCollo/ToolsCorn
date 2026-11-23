# Authentication & Authorization

Authentication and authorization are fundamental aspects of security that ensure only legitimate users have access to specific resources.

## Authentication

Authentication verifies the identity of a user or system trying to access an API. It answers: "Who are you?".
Authentication is the process of verifying someone's identity. When you log in to an application with a username and password, you are authenticating.

Advantages of Auth:-

1. Ensure security
2. Control access
3. Monitor usage
4. Apply rate limiting.

Authentication is one of two key security concepts that you must internalize when developing secure applications (the other being authorization). Authentication identifies who is attempting to request a resource. You may be familiar with authentication in your daily online and offline life, in very different contexts, as follows:

- `Credential-based authentication`: When you log in to your web-based email account, you most likely provide your username and password. The email provider matches your username with a known user in its database and verifies that your password matches what they have on record. These credentials are what the email system uses to validate that you are a valid user of the system.Technically speaking, the email system can check credentials not only in the database but anywhere, for example, a corporate directory server such as Microsoft Active Directory
- `security codes`:
- `Hardware authentication:` i.e Biometrics
- `Hard Tokens/Soft Tokens`

Typically, a software system will be divided into two high-level realms, such as unauthenticated (or anonymous) and authenticated.
Application functionality in the anonymous realm is the functionality that is independent of a user’s identity (think of a welcome page for an online application).
Anonymous areas do not do the following:

1. Require a user to log in to the system or otherwise identify themselves to be usable
2. Display sensitive information, such as names, addresses, credit cards, and orders
3. Provide functionality to manipulate the overall state of the system or its data

Unauthenticated areas of the system are intended for use by everyone, even by users whom we haven’t specifically identified yet. However, it may be that additional functionality appears to identify users in these areas (for example, the ubiquitous Welcome {First Name} text). The selective displaying of content to authenticated users is fully supported through the use of the Spring Security tag library.

The API authentication process validates the identity of the client attempting to make a connection by using an authentication protocol. The protocol sends the credentials from the remote client requesting the connection to the remote access server in either plain text or encrypted form. The server then knows whether it can grant access to that remote client or not.

_Two-factor authentication & Multi-factor Authentication_ -

`Two-factor authentication (2FA)` strengthens access security by requiring two methods (also referred to as factors) to verify a user’s identity.It is a type of multi-factor authentication which provides an extra layer of security.
You must have the correct combination of the bank card (something you possess) and the PIN (something you know) to be authenticated. If someone steals your ATM card, it is of not much use until they also know your PIN.

That means, in a two-factor authentication system, a user is granted access only after successfully presenting several separate pieces of evidence to an authentication mechanism.
Two-factor authentication is based on the user providing two of the following three somethings:

1. Something you know — the password or pin for an account.
2. Something you have — a physical device, such as a mobile phone or a software application, that can generate one-time passwords.
3. Something you are — a biologically unique feature to you, such as your fingerprints, voice, or retina.

_Types of Authentication_:-

1. `HTTP Basic authentication(Username and password)` - API requests can use typical username and password credentials for authentication via a method called HTTP authentication. In HTTP authentication, a username and password are encoded and added to the HTTP header for all API requests. The server can check these credentials against the credentials of allowed clients to authenticate the requests.This approach comes with all the challenges normally associated with passwords: passwords can be lost, leaked, stolen, guessed, or shared with untrusted parties. Passwords are also subject to credential stuffing and brute force attacks, among others.
2. `Session based Authentication`
3. `Token based Authentication` - Stateless authentication mechanism.Uses a signed token for secure identity verification.
4. `API Key Authentication` - A unique key is assigned to each client.Simple but lacks fine-grained control.The key is attached to each API request. The API server checks for the key when it receives an API request to make sure it is from an authenticated client.The downside of this authentication method is that if the key is stolen, an attacker can use it to impersonate a legitimate client and can then carry out a variety of attacks. It is important to encrypt requests and responses to and from an API using an encryption protocol like Transport Layer Security (TLS) — that way, the key is not exposed in plaintext as it crosses the Internet.
5. `OAuth 2.0 Authentication` - Token-based authentication framework.Grants access based on client credentials.Supports Access Tokens and Refresh Tokens.Instead of requiring authentication directly from the client, an API server can get an authentication token from a trusted authentication server using the OAuth protocol. To use the API, a user logs in to a third-party service instead of directly logging in to the API. Like the username-and-password approach, this authentication method is vulnerable to credential stuffing and other attacks.Secure authorization framework for third-party access.
6. `OpenID Connect (OIDC)` - Built on OAuth 2.0, adds user identity verification.Used by Keycloak, Auth0, Google Sign-In.
7. `SSO - Single Sign On`
8. `Passwordless`.
9. `SAML`

**Session-Based/ Cookie-based Authentication** - The HTTP protocol is stateless. This means that, if we authenticate a user with a username and password, on the next request our application won’t know that this is the same person as the previous request.We would have to authenticate again. At each request, HTTP doesn’t know anything about what happened before, it just carries the request.So, for any request for private data, you would have to log in again to make sure the application knows this is really you. This would be very annoying.
To avoid this problem, session or cookie-based authentication was introduced.It makes the authentication process stateful, meaning that an authentication record or session must be kept at both server and client-side.The server needs to keep track of active sessions in a database or memory, while a cookie is created on the front end that holds a session identifier. This is why it’s called cookie-based authentication.
It is one of the most common and best-known methods of authentication that has been used for a long time.

Cookies are pieces of data used to identify the user and their preferences. The browser returns the cookie to the server every time the page is requested. Specific cookies like HTTP cookies are used to perform cookie-based authentication to maintain the session for each user.

`Basic Flow of Session-Based Authentication`:-

![Session based authentication flow](session-based-auth.webp)

1. In the browser, the user enters their username and password, and the request goes from the client application to the server.
2. Server checks for the user, authenticates it and sends a unique token to the user’s client application. (It also saves this unique token in memory or database)
3. The client application stores the token in cookies and sends it back with each subsequent request.
4. The server receives every request that requires authentication and uses the token to authenticate the user and returns the requested data back to the client application.
5. When someone logs out, the client application removes that token, so that subsequent requests from the client become unauthorized.

`A few major problems arise with this method of authentication`:

- Every time a user is authenticated, the server will need to create a record somewhere on the server. This is usually done in memory and when there are many users authenticating, the overhead on the server increases.
- As sessions are stored in memory, this causes problems with scalability. If you replicate your server to multiple instances, you have to replicate all of the user sessions to all your servers, which complicates the scalability process. (Although it can be avoided by having a single dedicated server for session management but that is not always feasible and easy to implement.)

**HTTP Authentication**:- HTTP provides a general framework for access control and authentication.
HTTP protocol provides built-in authentication support—called basic authentication—based on a simple challenge/response, username/password model. With this technique, the web server maintains a database of usernames and passwords and identifies certain resources (files, directories, servlets, etc.) as protected. When a user requests access to a protected resource, the server responds with a request for the client's username and password. At this point, the browser usually pops up a dialog box where the user enters the information, and that input is sent back to the server as part of a second authorized request. If the submitted username and password match the information in the server's database, access is granted. The whole authentication process is handled by the server itself.

The general HTTP authentication framework:- RFC 7235 defines the HTTP authentication framework, which can be used by a server to challenge a client request, and by a client to provide authentication information.The challenge and response flow works like this:

1. The server responds to a client with a 401 (Unauthorized) response status and provides information on how to authorize with a WWW-Authenticate response header containing at least one challenge.
2. A client that wants to authenticate itself with the server can then do so by including an Authorization request header with the credentials.
3. Usually a client will present a password prompt to the user and will then issue the request including the correct Authorization header.

![basic auth flow](basic-auth.svg)

- Three types of authentication:-
  1. `Basic authantication` causes the browser to display a dialog box that requests a username and a password.then,when the user enters a username and password,it sends this data as a plain text to the server so the server can attempt to authorize the user.since you don't have to code a form for this type of authentication,it is easy to implement.However,you can't control the appearance of this dialog box.
  2. `Digest authentication` is a variation on the basic authentication scheme. Instead of transmitting a password over the network directly, a digest of the password is used instead. The digest is produced by taking a hash (using the very secure MD5 encryption algorithm) of the username, password, URI, HTTP request method, and a randomly generated nonce value provided by the server.Uses MD5 algorithm.
  3. `Form` allows programmer esign choice of form page for gathering credentials.
  4. `Bearer` - a string representing an access authorization issued to the client.
  5. `HOBA`
  6. `Mutual`
  7. `Negotiate / NTLM`
  8. `SCRAM`

Configuring HTTP Authentication - In versions of the Servlet API before 2.2, the technique for configuring authentication varied depending on the server. Beginning with API 2.2, the technique has been standardized and now configuration of security policies can be accomplished in a portable manner using the web.xml deployment descriptor.

Role-based authentication - Using tags in the web application deployment descriptor, security constraints can be set up to indicate that certain pages in the web application are to be accessed only by users with certain credentials. Servlets use role-based authorization to manage access. With this model, access permissions are granted to an abstract entity called a security role , and access is allowed only to users or groups of users who are part of that given role.

_Basic authentication_ - Basic authentication is a part of the HTTP specification that transmits credentials as user-id/password pairs, encoded using Base64.Because it is a part of the HTTP specifications, all the browsers have native support for "HTTP Basic Authentication". It uses username & password(Base64 encoded).
Basic authentication alone is very weak. It provides no confidentiality, no integrity, and only the most basic authentication. The problem is that passwords are transmitted over the network, thinly disguised by a well-known and easily reversed Base64 encoding. Anyone monitoring the TCP/IP data stream has full and immediate access to all the information being exchanged, including the username and password, unless there is additional SSL encryption employed.Plus, passwords are often stored on the server in clear text, making them vulnerable to anyone cracking into the server's filesystem. While it's certainly better than nothing, sites that rely exclusively on basic authentication cannot be considered really secure.

The Basic authentication scheme is based on the model that the client needs to authenticate itself with a user-id and a password for each protection space ("realm"). The realm value is a free-form string that can only be compared for equality with other realms on that server. The server will service the request only if it can validate the user-id and password for the protection space applying to the requested resource.

In a web application with a user interface,we might implement this by presenting the user with a form to enter their username and password. An API is not responsible for rendering a UI, so you can instead use the standard HTTP Basic authentication mechanism to prompt for a password in a way that doesn’t depend on any UI.
This is a simple standard scheme, specified in RFC 7617 (https://tools.ietf.org/html/rfc7617), in which the username and password are encoded (using Base64 encoding; https://en.wikipedia.org/wiki/Base64) and sent in a header(Base64 encoded is simple encoding that's easily reversible).

The Authorization header is a standard HTTP header for sending credentials to the server. It’s extensible, allowing different authentication schemes,but in this case you’re using the Basic scheme. The credentials follow the authentication scheme identifier. For Basic authentication, these consist of a string of the username followed by a colon and then the password. The string is then converted into bytes (usually in UTF-8, but the standard does not specify) and Base64-encoded.

`How it works` -

- Upon receipt of a request for a URI within the protection space that lacks credentials, the server can reply with a challenge using the 401 (Unauthorized) status codemand the WWW-Authenticate header field.
  When the browser first requests the server, the server tries to check the availability of the Authorization header in the request. Because it is the first request, no Authorization header is found in the request. So the server responds with the 401 Unauthorized response code and also sends the WWW-Authenticate header with the value set to Basic, which tells the browser that it needs to trigger the basic authentication flow.
  For instance:

HTTP/1.1 401 Unauthorized
Date: Mon, 04 Feb 2014 16:50:53 GMT
WWW-Authenticate: Basic realm="WallyWorld"

where "WallyWorld" is the string assigned by the server to identify the protection space.
If you notice the response, we have an additional parameter called realm, which is just a value assigned to a group of pages that share the same credentials.
The browser might use Realm to cache the credential. In the future, when there is an authentication failure browser will check if it has the credentials in the cache for the given realm of the domain, and it may use the same credentials.

- Upon receiving the response from the server, the browser will notice the WWW-Authenticate header and will show the authentication popup.

- After the user submits the credentials through this authentication popup, the browser will automatically encode the credentials using the base64 encoding and send them in the Authorization header of the same request.To receive authorization, the client
  1.  obtains the user-id and password from the user,
  2.  constructs the user-pass by concatenating the user-id, a single colon (":") character, and the password,
  3.  encodes the user-pass into an octet sequence,
  4.  and obtains the basic-credentials by encoding this octet sequence using Base64 into a sequence of US-ASCII characters.

An example of a Basic authentication header for the username demo and password changeit is as follows:

Authorization: Basic ZGVtbzpjaGFuZ2VpdA==

- Upon receiving the request, the server will decode and verify the credentials. If the credentials are valid, the server will send the response to the client.

`Security Considerations`

The Basic authentication scheme is not a secure method of user authentication, nor does it in any way protect the entity, which is transmitted in cleartext across the physical network used as the carrier. HTTP does not prevent the addition of enhancements (such as schemes to use one-time passwords) to Basic authentication.

The most serious flaw of Basic authentication is that it results in the cleartext transmission of the user's password over the physical network. Many other authentication schemes address this problem.Because Basic authentication involves the cleartext transmission of passwords, it SHOULD NOT be used (without enhancements such as HTTPS [RFC2818]) to protect sensitive or valuable information.

A common use of Basic authentication is for identification purposes -- requiring the user to provide a user-id and password as a means of identification, for example, for purposes of gathering accurate usage statistics on a server. When used in this way it is tempting to think that there is no danger in its use if illicit access to the protected documents is not a major concern. This is only correct if the server issues both user-id and password to the users and, in particular, does not allow the user to choose his or her own password. The danger arises because naive users frequently reuse a single password to avoid the task of maintaining multiple passwords.

Basic authentication is also vulnerable to spoofing by counterfeit servers. If a user can be led to believe that she is connecting to a host containing information protected by Basic authentication when, in fact, she is connecting to a hostile server or gateway, then the attacker can request a password, store it for later use, and feign an error. Server implementers ought to guard against this sort of counterfeiting; in particular, software components that can take over control over the message framing on an existing connection need to be used carefully or not at all

`Drawbacks of HTTP authentication`:-

1. The user’s password is sent on every API call, increasing the chance of it accidentally being exposed by a bug in one of those operations.
2. Verifying a password is an expensive operation and performing this validation on every API call adds a lot of overhead. Modern password-hashing algorithms are designed to take around 100ms for interactive logins, which limits your API to handling 10 operations per CPU core per second.
3. The dialog box presented by browsers for HTTP Basic authentication is pretty ugly, with not much scope for customization. The user experience leaves a lot to be desired.
4. There is no obvious way for the user to ask the browser to forget the password.Even closing the browser window may not work and it often requires configuring advanced settings or completely restarting the browser. On a public terminal, this is a serious security problem if the next user can visit pages using your stored password just by clicking the Back button.

For these reasons, HTTP Basic authentication and other standard HTTP auth schemes are not often used for APIs that must be accessed from web browser clients. On the other hand, HTTP Basic authentication is a simple solution for APIs that are called from command-line utilities and scripts, such as system administrator APIs, and has a place in service-to-service API calls where no user is involved at all and passwords can be assumed to be strong.

_Digest authentication_ - The Digest scheme is based on a simple challenge-response paradigm.The Digest scheme challenges using a nonce value and might indicate that username hashing is supported. A valid response contains an unkeyed digest of the username, the password, the given nonce value, the HTTP method, and the requested URI. In this way, the password is never sent in the clear, and the username can be hashed, depending on the indication received from the server. The username and password must be prearranged in some fashion not addressed by this document.

Both sides of the transaction know the password and use it to compute digests. If the digests match, access is granted. Transactions are thus somewhat more secure than they would be otherwise because digests are valid for only a single URI request and nonce value. The server, however, must still maintain a database of the original passwords. And, as of this writing, digest authentication is not supported by very many browsers.

- [@video@Illustrated HTTP Basic Authentication](https://www.youtube.com/watch?v=mwccHwUn7Gc)

_Other authentication schemes_:- HTTP Basic authentication is just one of several authentication schemes that are supported by HTTP. The most common alternative is HTTP Digest authentication, which sends a salted hash of the password instead of sending the raw value. Although this sounds like a security improvement, the hashing algorithm used by HTTP Digest,MD5, is considered insecure by modern standards and the widespread adoption of HTTPS has largely eliminated its advantages. Certain design choices in HTTP Digest also prevent the server from storing the password more securely, because the weakly-hashed value must be available. An attacker who compromises the database therefore has a much easier job than they would if a more secure algorithm had been used.
If that wasn’t enough, there are several incompatible variants of HTTP Digest in use.You should avoid HTTP Digest authentication in new applications.
While there are a few other HTTP authentication schemes, most are not widely used.The exception is the more recent HTTP Bearer authentication scheme introduced by OAuth2 in RFC 6750 (https://tools.ietf.org/html/rfc6750). This is a flexible token-based authentication scheme that is becoming widely used for API authentication.

```java
String digestHeader = "Digest username=\"user\", realm=\"example\", nonce=\"abc123\", uri=\"/\", response=\"<hash>\"";
HttpURLConnection conn = (HttpURLConnection)new URL("https://kipcollo.com/resource")
               .openConnection();
conn.setRequestProperty("Authorization", digestHeader);
```

**Token-based authentication**:- Token-based authentication is a protocol which allows users to verify their identity, and in return receive a unique `access token`. During the life of the token, users then access the website or app that the token has been issued for, rather than having to re-enter credentials each time they go back to the same webpage, app, or any resource protected with that same token.
Auth tokens work like a stamped ticket. The user retains access as long as the token remains valid. Once the user logs out or quits an app, the token is invalidated.

Token-based authentication is different from traditional password-based or server-based authentication techniques. Tokens offer a second layer of security, and administrators have detailed control over each action and transaction.

In traditional password-based or server-based authentication you have required API clients to submit a username and password on every API request to enforce authentication. Although simple, this approach has several downsides from both a security and usability point of view.An alternative known as `token-based authentication`, where the username and password are supplied once to a dedicated login endpoint. A time-limited token is then issued to the client that can be used in place of the user’s credentials for subsequent API calls.
Token-based authentication is a little more complicated than the HTTP Basic authentication.Rather than send the username and password directly to each API endpoint,the client instead sends them to a dedicated login endpoint. The login endpoint verifies the username and password and then issues a time-limited token. The client then includes that token on subsequent API requests to authenticate. The API endpoint can validate the token because it is able to talk to a token store that is shared between the login endpoint and the API endpoint.

The CPU overhead of password hashing on every request is killing performance and driving up energy costs too. What you want is a way for users to login once and then be trusted for the next hour or so while they use the API. This is the purpose of token-based authentication, and in the form of session cookies has been a backbone of web development since very early on. When a user logs in by presenting their username and password, the API will generate a random string (the token) and give it to the client. The client then presents the token on each subsequent request, and the API can look up the token in a database on the server to see which user is associated with that session. When the user logs out, or the token expires, it is deleted from the database,and the user must log in again if they want to keep using the API.

Token-based authentication replaces repeated password entry with a time-limited access token issued after a one-time verification.

Different types of authentication tokens - All authentication tokens allow access, but each type works a little differently.These are three common types of authentication tokens:

- `Connected`: Keys, discs, drives, and other physical items plug into the system for access. If you've ever used a Universal Serial Bus (USB) device or smartcard to log into a system, you've used a connected token.
- `Contactless`: A device is close enough to a server to communicate with it, but it doesn't plug in. Microsoft's so-called "magic ringopens in a new tab" would be an example of this type of token.
- `Disconnected`: A device can communicate with the server across long distances, even if it never touches another device at all. If you've ever used your phone for a two-factor authentication process, you've used this type of token.

In all three of these scenarios, a user must do something to start the process. They may need to enter a password or answer a question. But even when they complete those preliminary steps perfectly, they can't gain access without the help of an access token.

`JSON Web Tokens (JWTs)` are a popular open-standard variant suited for mobile and web apps, offering compact size and granular access control, though they carry risks if cryptographic keys are mismanaged. Following best practices—keeping tokens private, encrypted, tested, and appropriately matched to the use case—is essential for a secure implementation.

In token-based authentication, a user’s real credentials are presented once, and the client is then given a short-lived token. A token is typically a short, random string that can be used to authenticate API calls until the token expires.

Tokens used for token-based authentication are mostly JSON Web Tokens (JWT). There are different implementations of tokens but JWT has become the de-facto standard.

Token-based authentication is stateless. We will not store any information about our user on the server or in a session, not even which JWTs have been issued to the clients.

In the simplest case, this token store is a shared database indexed by the token ID, but more advanced (and loosely coupled) solutions are also possible.
A short-lived token that is intended to authenticate a user while they are directly interacting with a site (or API) is often referred to as a `session token`, `session cookie`, or just `session`.

For web browser clients, there are several ways you can store the token on the client. Traditionally, the only option was to store the token in an HTTP cookie, which the browser remembers and sends on subsequent requests to the same site until the cookie expires or is deleted.

Cookies are still a great choice for first-party clients running on the same origin as the API they are talking to but can be difficult when dealing with third-party clients and clients hosted on other domains.An alternative to cookies is using HTML 5 local storage that solves these problems, but with new challenges of its own.

NOTE:- A first-party client is a client developed by the same organization or company that develops an API, such as a web application or mobile app.Third-party clients are developed by other companies and are usually less trusted.

Token-based authentication is a protocol which allows users to verify their identity, and in return receive a unique access token. During the life of the token, users then access the website or app that the token has been issued for, rather than having to re-enter credentials each time they go back to the same webpage, app, or any resource protected with that same token.

Auth tokens work like a stamped ticket. The user retains access as long as the token remains valid. Once the user logs out or quits an app, the token is invalidated.

Token-based authentication is different from traditional password-based or server-based authentication techniques. Tokens offer a second layer of security, and administrators have detailed control over each action and transaction.

Basic Flow of Token-Based Authentication:-

1. User enters their login credentials.
2. Server verifies the credentials and returns a signed token (the JWT) which can contain some additional information as metadata, such as user_id, permissions, etc.
3. This token is stored client-side, most commonly in local storage, but it can be stored in session storage or a cookie as well.
4. Subsequent requests to the server include this token, generally as an additional authorization header in the form of a Bearer, but it can additionally be sent in the body of a POST request, or even as a query parameter.
5. The server decodes the JWT, and, if the token is valid, processes the request.That could involve checking the password against the username, or it could involve another process you specify.
6. Once a user logs out, the token is destroyed client-side, no interaction with the server is necessary.

![Token based auth](token-based-auth.webp)

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

`Bearer Token Authentication` - Uses a token in the Authorization header.

`Access & Refresh Tokens`:- Refresh tokens should be stored generally in server-side for security reasons.
Access tokens - Expires fast.Used for Api calls.
Refresh tokens - Lives longer.
When access tokens expires,refresh tokens gets a new on behind the scene.Users don't have to login again,and your system stays secure.

`JSON Web Tokens`:- JSON Web Tokens (JWTs, pronounced “jots”) are a standard format for self-contained security tokens. A JWT consists of a set of claims about a user represented as a JSON object, together with a header describing the format of the token. JWTs are cryptographically protected against tampering and can also be encrypted.

Storing token state on the client - The idea behind stateless tokens is simple. Rather than store the token state in the database, you can instead encode that state directly into the token ID and send it to the client. For example, you could serialize the token fields into a JSON object, which you then Base64url-encode to create a string that you can use as the token ID. When the token is presented back to the API, you then simply decode the token and parse the JSON to recover the attributes of the session.

Benefits of This Method

1. Stateless - The biggest advantage of this method is that it is completely stateless, the server doesn’t need to store any record of the user tokens/sessions.Each token is self-contained, containing all the data required to check its validity, as well as convey user information through claims. That’s why it doesn’t add any complexity in scalability.
2. Store any type of metadata - With a cookie-based approach, you simply store the session ID in a cookie. JWT’s, on the other hand, allow you to store any type of metadata, as long as it’s valid JSON.
3. Single calls to database - When using cookie-based authentication, the back end has to do a lookup, whether that be a traditional SQL database or a NoSQL alternative, and the roundtrip is likely to take longer compared to decoding a token.
   Additionally, as you can store additional data inside the JWT, such as the user’s permission level, you can save yourself additional lookup calls to get and process the requested data.For example, say you had an API resource /api/orders that retrieves the latest orders placed via your app, but only users with the role of admin have access to view this data.
   In a cookie-based approach, once the request is made you’d have one call to the database to verify that the session is valid, another to get the user data and verify that the user has the role of admin, and finally a third call to get the data.
   On the other hand, with a JWT approach, you can store the user role in the JWT, so once the request is made and the JWT verified, you can make a single call to the database to retrieve the orders.
4. Simpler to implement - While possible, there are many limitations and considerations for using cookies with mobile platforms.

Tokens, on the other hand, are much easier to implement on both iOS and Android. Tokens are also easier to implement for Internet-of-Things applications and services that do not have the concept of a cookie store.

Because of these benefits and the simplified approach, token-based authentication is on the rise.

**OAuth** - OAuth stands for *O*pen *Auth*orization and is an open standard for authorization. It works to authorize devices, APIs, servers and applications using access tokens rather than user credentials, known as "secure delegated access".

In its most simplest form, OAuth delegates authentication to services like Facebook, Amazon, Twitter and authorizes third-party applications to access the user account without having to enter their login and password.

Visit the following resources to learn more:

- [@roadmap.sh@SSO - Single Sign On](https://roadmap.sh/guides/sso)
- [@roadmap.sh@OAuth - Open Authorization](https://roadmap.sh/guides/oauth)
- [@roadmap.sh@JWT Authentication](https://roadmap.sh/guides/jwt-authentication)
- [@roadmap.sh@Token Based Authentication](https://roadmap.sh/guides/token-authentication)

It is mostly utilized for REST/APIs and only provides a limited scope of a user's data.

- [Okta - What the Heck is OAuth](https://developer.okta.com/blog/2017/06/21/what-the-heck-is-oauth)
- [DigitalOcean - An Introduction to OAuth 2](https://www.digitalocean.com/community/tutorials/an-introduction-to-oauth-2)
- [What is OAuth really all about](https://www.youtube.com/watch?v=t4-416mg6iU)
- [OAuth 2.0: An Overview](https://www.youtube.com/watch?v=CPbvxxslDTU)

`SSO & Identity Protocols`:- One login.
SAML- For enterprise tools salesforce,internal Older,XML-based.
OAuth2 - For consummer apps.Modern,JSON-based.

Identity protocol define how apps securely exchange user login info.

`OAuth` - OAuth stands for **O**pen **Auth**orization and is an open standard for authorization. It works to authorize devices, APIs, servers and applications using access tokens rather than user credentials, known as "secure delegated access".

In its most simplest form, OAuth delegates authentication to services like Facebook, Amazon, Twitter and authorizes third-party applications to access the user account **without** having to enter their login and password.

It is mostly utilized for REST/APIs and only provides a limited scope of a user's data.

- [@article@Okta - What the Heck is OAuth](https://developer.okta.com/blog/2017/06/21/what-the-heck-is-oauth)
- [@article@DigitalOcean - An Introduction to OAuth 2](https://www.digitalocean.com/community/tutorials/an-introduction-to-oauth-2)
- [@video@What is OAuth really all about](https://www.youtube.com/watch?v=t4-416mg6iU)
- [@video@OAuth 2.0: An Overview](https://www.youtube.com/watch?v=CPbvxxslDTU)
- [@feed@Explore top posts about OAuth](https://app.daily.dev/tags/oauth?ref=roadmapsh)

**API key Authentication**:- API key authentication is a type of authentication that uses long-lived access tokens embedded directly into an application to authenticate requests to access secure services and items. The access tokens are called API keys and managed through API key credentials.
API key authentication is the easiest type of authentication to use, but it is not sufficient to protect confidential information.

You can use API key authentication to:

1. Create public applications that do not require users to sign in.
2. Build applications that access location services and private items such as hosted layers and data services.
3. Create personal automation scripts that access the portal service and spatial analysis services.
4. Quickly and easily generate access tokens.
5. Embed an access token directly into apps that remains valid for up to 1 year.
6. Access secure resources with the privileges of your account.

API keys are often included in the request header of an API call, although they can also be embedded in query strings or cookies. API key authentication is also stateless; an API key must be added to every API request because the server doesn’t store per-request session state.
Because the API provider manages each API key, the provider can easily track usage and discard keys to revoke access if it detects a cybersecurity threat or a breach of API guidelines. The provider can also apply fine-grained permissions to precisely control each key’s scope. In basic auth frameworks, meanwhile, users create their own passwords, and API providers have limited ability to monitor and manage them. Finally, organizations can apply rate limits to particular projects, improving performance across services.

API key authentication is often best for public API environments because it enables service providers to monitor the developers who use their APIs. For example, for a restaurant to add a Google Maps integration to its website, it needs an API key.

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

API key authentication requires creating and configuring API key credentials so you can get an API key. An API key is a long-lived access token. API key credentials are an item created in your portal that are used to create API keys and manage their privileges.
The general steps to implement API key authentication are:

1. Create API key credentials to get an API key.
2. Paste the API key access token into your application.
3. Your application uses the API key as an access token to access secure resources.

Your API key must have the correct privileges to access secure resources. It is also recommended that you set referrer URLs in order to enhance the security of the token. These properties are managed through setting page of API key credentials.

**OpenID Connect** - OpenID is a protocol that utilizes the authorization and authentication mechanisms of OAuth 2.0 and is now widely adopted by many identity providers on the Internet.
It solves the problem of needing to share user's personal info between many different web services(e.g. online shops, discussion forums etc.)
OpenID Connect (OIDC) is a modern authentication protocol that achieves federated authentication through SSO. However, OIDC is optimized for mobile, API-driven and cloud-native applications and is different from SAML in several ways.

Visit the following resources to learn more:

- [OAuth vs OpenID](https://securew2.com/blog/oauth-vs-openid-which-is-better)
- [An Illustrated Guide to OAuth and OpenID Connect](https://www.youtube.com/watch?v=t18YB3xDfXI)
- [OAuth 2.0 and OpenID Connect (in plain English)](https://www.youtube.com/watch?v=996OiexHze0)

_OpenID_ - OpenID is a protocol that utilizes the authorization and authentication mechanisms of OAuth 2.0 and is now widely adopted by many identity providers on the Internet.
It solves the problem of needing to share user's personal info between many different web services(e.g. online shops, discussion forums etc.)

- [@official@Official Website](https://openid.net/)
- [@official@What is OpenID](https://openid.net/connect/)
- [@article@OAuth vs OpenID](https://securew2.com/blog/oauth-vs-openid-which-is-better)
- [@video@An Illustrated Guide to OAuth and OpenID Connect](https://www.youtube.com/watch?v=t18YB3xDfXI)
- [@video@OAuth 2.0 and OpenID Connect (in plain English)](https://www.youtube.com/watch?v=996OiexHze0)
- [@feed@Explore top posts about Authentication](https://app.daily.dev/tags/authentication?ref=roadmapsh)

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

**Passwordless** - The general idea to implement a passwordless authentication is the following:

1. Instead of a user giving an email/username and password, they enter only their email address.
2. Your application sends them a one-time-use link to that email, which the user clicks on to be automatically logged in to your website or application.
3. In the case of a passwordless login, the app assumes that you will get the login link from your inbox if the email provided is indeed yours.

There is a similar approach. Instead of sending a one-time-link to the email, it sends a code or one-time-password (OTP) through SMS. But you need to incorporate your application with an SMS service, such as Twilio, to make it work (it will also cost you money).

_Authentication Best Practices_:-

1. Use Secure Authentication Protocols - Implement OAuth2/OpenID Connect for secure authentication.Use JWT (JSON Web Token) for stateless authentication in APIs.
2. Enforce Multi-Factor Authentication (MFA) - Require an additional authentication factor such as TOTP (Time-Based One-Time Password) or biometric authentication.
3. Secure Password Storage - Hash passwords using BCrypt, Argon2, or PBKDF2 before storing them.- Enforce strong password policies with minimum complexity requirements.
4. Prevent Brute-Force Attacks - Implement account lockout mechanisms after multiple failed login attempts. - Use CAPTCHA to mitigate automated attacks.

---

## Authorization

Authorization is the process of verifying that you have access to something. That means the set of permissions you are allowed to. As an example, if you created a resource in an application you might be the only person allowed to remove it (as an owner), other users are not ‘authorized’ to remove this resource.

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
