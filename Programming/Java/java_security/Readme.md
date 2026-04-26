# Security

The following are commonly used cryptography terms and their definitions.

`authentication` - The process of confirming the identity of a party with whom one is communicating.
`certificate` - A digitally signed statement vouching for the identity and public key of an entity (person, company, and so on). Certificates can either be self-signed or issued by a Certificate Authority (CA), an entity that is trusted to issue valid certificates for other entities. Well-known CAs include Comodo, DigiCert, and GoDaddy. X.509 is a common certificate format that can be managed by the JDK's keytool.
`cipher suite` - A combination of cryptographic parameters that define the security algorithms and key sizesUused for authentication, key agreement, encryption, and integrity protection.
`cryptographic hash function` - An algorithm that is used to produce a relatively small fixed-size string of bits (called a hash) from an arbitrary block of data. A cryptographic hash function is similar to a checksum and has three primary characteristics: it’s a one-way function, meaning that it is not possible to produce the original data from the hash; a small change in the original data produces a large change in the resulting hash; and it doesn’t require a cryptographic key.
`Cryptographic Service Provider (CSP)` - Sometimes referred to simply as providers for short, the Java Cryptography Architecture (JCA) defines it as a package (or set of packages) that implements one or more engine classes for specific cryptographic algorithms. An engine class defines a cryptographic service in an abstract fashion without a concrete implementation.

Three mechanisms help ensure safety:
1. Language design features (bounds checking on arrays, no unchecked type conversions, no pointer arithmetic, and so on).
2. An access control mechanism that controls what the code can do (such as file access, network access, and so on).
3. Code signing, whereby code authors can use standard cryptographic algorithms to authenticate Java code. Then, the users of the code can determine exactly who created the code and whether the code has been altered after it was signed.


`Class loaders` checks class files for integrity when they are loaded into the virtual machine.For maximum security, both the default mechanism for loading a class and a custom class loader need to work with a security manager class that controls what actions code can perform.
`cryptographic algorithms` supplied in the java.security package allows code signing and user authentication.


## Java Security

Java security includes a large set of APIs, tools, and implementations of commonly-used security algorithms, mechanisms, and protocols. The Java security APIs span a wide range of areas, including cryptography, public key infrastructure, secure communication, authentication, and access control. Java security technology provides the developer with a comprehensive security framework for writing applications, and also provides the user or administrator with a set of tools to securely manage applications.

The JDK is designed with a strong emphasis on security. At its core, the Java language itself is type-safe and provides automatic garbage collection, enhancing the robustness of application code. A secure class loading and verification mechanism ensures that only legitimate Java code is executed. The Java security architecture includes a large set of application programming interfaces (APIs), tools, and implementations of commonly-used security algorithms, mechanisms, and protocols.
The Java security APIs span a wide range of areas. Cryptographic and public key infrastructure (PKI) interfaces provide the underlying basis for developing secure applications. Interfaces for performing authentication and access control enable applications to guard against unauthorized access to protected resources.

The APIs allow for multiple interoperable implementations of algorithms and other security services. Services are implemented in providers, which are plugged into the JDK through a standard interface that makes it easy for applications to obtain security services without having to know anything about their implementations. This allows developers to focus on how to integrate security into their applications, rather than on how to actually implement complex
security mechanisms.
 
The JDK includes a number of providers that implement a core set of security services. It also allows for additional custom providers to be installed. This enables developers to extend the platform with new security mechanisms.
The JDK is divided into modules. Modules that contain security APIs include the following:

1. java.base - Defines the foundational APIs of Java SE; contained packages include java.security, javax.crypto, javax.net.ssl, and javax.security.auth.
2. java.security.jgss - Defines the Java binding of the IETF Generic Security Services API (GSS-API). This module also contains GSS-API mechanisms including Kerberos v5 and SPNEGO.
3. java.security.sasl - Defines Java support for the IETF Simple Authentication and Security Layer (SASL). This module also contains SASL mechanisms including DIGEST-MD5, CRAM-MD5, and NTLM.
4. java.smartcardio - Defines the Java Smart Card I/O API.
5. java.xml.crypto - Defines the API for XML cryptography.
6. jdk.jartool - Defines APIs for signing jar files.
7. jdk.security.auth - Provides implementations of the javax.security.auth.* interfaces and various authentication modules.
8. jdk.security.jgss - Defines Java extensions to the GSS-API and an implementation of the SASL GSS-API mechanism.


The Java language is designed to be type-safe and easy to use. It provides automatic memory management, garbage collection, and range-checking on arrays. This reduces the overall programming burden placed on developers, leading to fewer subtle programming errors and to safer, more robust code.
A compiler translates Java programs into a machine-independent bytecode representation. A bytecode verifier is invoked to ensure that only legitimate bytecodes are executed in the Java runtime. It checks that the bytecodes conform to the Java Language Specification and do not violate Java language rules or namespace restrictions. The verifier also checks for memory management violations, stack underflows or overflows, and illegal data typecasts. Once bytecodes have been verified, the Java runtime prepares them for execution.
In addition, the Java language defines different access modifiers that can be assigned to Java classes, methods, and fields, enabling developers to restrict access to their class implementations as appropriate.

The JDK defines a set of APIs spanning major security areas, including cryptography, public key infrastructure, authentication, secure communication, and access control. The APIs allow developers to easily integrate security into their application code.
The APIs are designed around the following principles:

- Implementation independence - Applications do not need to implement security themselves. Rather, they can request security services from the JDK. Security services are implemented in providers, which are plugged into the JDK via a standard interface. An application may rely on multiple independent providers for security functionality.
- Implementation interoperability - Providers are interoperable across applications. Specifically, an application is not bound to a specific provider if it does not rely on default values from the provider.
- Algorithm extensibility - The JDK includes a number of built-in providers that implement a basic set of security services that are widely used today. However, some applications may rely on emerging standards not yet implemented, or on proprietary services. The JDK supports the installation of custom providers that implement such services.


Java provides built-in libraries and APIs for security purposes:

**Encryption and Decryption**:- Encryption ensures confidentiality. The javax.crypto package provides encryption functionality.

Example using AES (Advanced Encryption Standard):

```java
import javax.crypto.Cipher;
import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;

public class AESCryptoExample {
    public static void main(String[] args) throws Exception {
        // Generate a key
        KeyGenerator keyGen = KeyGenerator.getInstance("AES");
        keyGen.init(128); // 128-bit AES
        SecretKey secretKey = keyGen.generateKey();

        // Initialize Cipher
        Cipher cipher = Cipher.getInstance("AES");

        // Encrypt data
        cipher.init(Cipher.ENCRYPT_MODE, secretKey);
        byte[] encryptedData = cipher.doFinal("Hello, World!".getBytes());
        System.out.println("Encrypted: " + new String(encryptedData));

        // Decrypt data
        cipher.init(Cipher.DECRYPT_MODE, secretKey);
        byte[] decryptedData = cipher.doFinal(encryptedData);
        System.out.println("Decrypted: " + new String(decryptedData));
    }
}
```
  
**Message Digests (Hashing)**:- Used for integrity. The java.security.MessageDigest class is used for hashing.

Example using SHA-256:

```java
import java.security.MessageDigest;

public class HashingExample {
    public static void main(String[] args) throws Exception {
        String data = "Hello, World!";
        MessageDigest digest = MessageDigest.getInstance("SHA-256");
        byte[] hash = digest.digest(data.getBytes());
        System.out.println("Hashed Data: " + bytesToHex(hash));
    }

    private static String bytesToHex(byte[] bytes) {
        StringBuilder hexString = new StringBuilder();
        for (byte b : bytes) {
            String hex = Integer.toHexString(0xff & b);
            if (hex.length() == 1) hexString.append('0');
            hexString.append(hex);
        }
        return hexString.toString();
    }
}
```


## Java Authentication and Authorization Service(JAAS)

JAAS is a standard Java API for user authentication and authorization.
Java Authentication and Authorization Service (JAAS), enables you to authenticate users and securely determine who is currently executing Java code, and authorize users to ensure that they have the access control rights, or permissions, required to do the actions performed.

JAAS can be used for two purposes:

1. for authentication of users, to reliably and securely determine who is currently executing Java code, regardless of whether the code is running as an application, an applet, a bean, or a servlet.
2. for authorization of users to ensure they have the access control rights (permissions) required to do the actions performed.

JAAS implements a Java version of the standard Pluggable Authentication Module (PAM) framework.
JAAS authentication is performed in a pluggable fashion. This permits applications to remain independent from underlying authentication technologies. New or updated authentication technologies can be plugged under an application without requiring modifications to the application itself. Applications enable the authentication process by instantiating a `LoginContext` object, which in turn references a `Configuration` to determine the authentication technology or technologies, or `LoginModule(s)`, to be used in performing the authentication. Typical LoginModules may prompt for and verify a user name and password.Others may read and verify a voice or fingerprint sample.

Once the user or service executing the code has been authenticated, the JAAS authorization component works in conjunction with the core Java SE access control model to protect access to sensitive resources. Access control decisions are based both on the executing code's CodeSource and on the user or service running the code, who is represented by a Subject object. The Subject is updated by a LoginModule with relevant Principals and credentials if authentication succeeds.

LoginModule for pluggable authentication.
Subject and Principal for identity representation.


The JAAS-related core classes and interfaces can be broken into three categories: Common,Authentication, and Authorization

## Network Security

Java supports network security via HTTPS, SSL/TLS, and other protocols using the javax.net.ssl package.

Example of creating an HTTPS server:

```java
import com.sun.net.httpserver.HttpsServer;
import java.net.InetSocketAddress;
import java.io.OutputStream;

public class SimpleHttpsServer {
    public static void main(String[] args) throws Exception {
        HttpsServer server = HttpsServer.create(new InetSocketAddress(8443), 0);
        server.createContext("/", exchange -> {
            String response = "Secure response";
            exchange.sendResponseHeaders(200, response.getBytes().length);
            OutputStream os = exchange.getResponseBody();
            os.write(response.getBytes());
            os.close();
        });
        server.setExecutor(null);
        server.start();
        System.out.println("HTTPS server started on port 8443");
    }
}
```


Security in the Java ecosystem evolved from protecting the local machine (Java SE) to protecting web sessions (Jakarta) and finally to securing distributed microservices (Spring).
🛡️ The Security Evolution Path
1. Java SE: The Foundation (java.security)
In the Standard Edition, security is focused on the JVM sandbox and cryptography.
Permissions: Managing what a local file can access (Policy files).
JAAS (Java Authentication and Authorization Service): A framework to verify who is running the code.
JCA/JCE: The "engine room" for encryption (AES), digital signatures, and message digests.
JSSE: Provides SSL/TLS support for java.net sockets.
2. Jakarta EE: The Web Standard (jakarta.security)
Jakarta extends SE by moving security to the Server/Container level.
Declarative Security: You define security roles in a web.xml file or via annotations (@RolesAllowed).
Container-Managed Auth: The server (Tomcat/Wildfly) handles the login popup or form, not your code.
Servlet Security: Adds methods like request.isUserInRole() and request.login().
JASPIC: A standard for integrating 3rd-party auth providers (like LDAP) into the server.
3. Spring Security: The Modern Powerhouse
Spring Security is the most widely used because it doesn't rely on the server. It sits inside your app.
Method-Level Security: You can lock down a single Java method with @PreAuthorize.
OAuth2 & JWT: Built-in support for modern "Login with Google/GitHub" and stateless Token-based security.
CORS & CSRF: Automatic protection against common web attacks that Jakarta requires manual handling for.
Filters: It uses a "Chain of Filters" to intercept every network request before it even reaches your logic.


