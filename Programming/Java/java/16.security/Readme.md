# Security

## Terms and Definitions

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
