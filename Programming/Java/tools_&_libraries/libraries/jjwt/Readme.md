# JJWT

JJWT :: Impl - Internal implementation module for JJWT, a Java library for creating and verifying JSON Web Tokens (JWTs).
JJWT :: API - The public API for the JJWT library, used to create and consume JSON Web Tokens in Java.

**Creating a JWT**:- You create a JWT as follows:

1. Use the `Jwts.builder()` method to create a JwtBuilder instance.
2. Optionally set any header parameters as desired.
3. Call builder methods to set the payload content or claims.
4. Optionally call signWith or encryptWith methods if you want to digitally sign or encrypt the JWT.
5. Call the compact() method to produce the resulting compact JWT string.

```java
String jwt = Jwts.builder()                     
    .header()                                  
        .keyId("aKeyId")
        .and()
    .subject("Bob")                             // JSON Claims, or
    //.content(aByteArray, "text/plain")        //     any byte[] content, with media type
    .signWith(signingKey)                       // (if signing, or
    //.encryptWith(key, keyAlg, encryptionAlg)  //     if encrypting
    .compact();                                
```

The JWT payload may be either byte[] content (via content) or JSON Claims (such as subject, claims, etc), but not both.
Either digital signatures (signWith) or encryption (encryptWith) may be used, but not both.


**JWT Header**:- A JWT header is a JSON Object that provides metadata about the contents, format, and any cryptographic operations relevant to the JWT payload. JJWT provides a number of ways of setting the entire header and/or multiple individual header parameters (name/value pairs).
JwtBuilder Header - The easiest and recommended way to set one or more JWT header parameters (name/value pairs) is to use the JwtBuilder's header() builder as desired, and then call its and() method to return back to the JwtBuilder for further configuration. 

```java
String jwt = Jwts.builder()
    .header()                        // <----
        .keyId("aKeyId")
        .x509Url(aUri)
        .add("someName", anyValue)
        .add(mapValues)
        // ... etc ...
        .and()                      // go back to the JwtBuilder
    .subject("Joe")                 // resume JwtBuilder calls...
    // ... etc ...
    .compact();
```

The JwtBuilder header() builder also supports automatically calculating X.509 thumbprints and other builder-style benefits that a simple property getter/setter object would not do.
NOTE:- Automatic Headers: You do not need to set the alg, enc or zip headers - JJWT will always set them automatically as needed.


**JWT Payload**:- A JWT payload can be anything at all - anything that can be represented as a byte array, such as text, images, documents, and more. But since a JWT header is always JSON, it makes sense that the payload could also be JSON, especially for representing identity claims.

As a result, the JwtBuilder supports two distinct payload options:
1. content if you would like the payload to be arbitrary byte array content, or
2. claims (and supporting helper methods) if you would like the payload to be a JSON Claims Object.

Either option may be used, but not both. Using both will cause compact() to throw an exception.

`JWT Claims` - Instead of a content byte array, a JWT payload may contain assertions or claims for a JWT recipient. In this case, the payload is a Claims JSON Object, and JJWT supports claims creation with type-safe builder methods.

Standard Claims - The JwtBuilder provides convenient builder methods for standard registered Claim names defined in the JWT specification. They are:

1. issuer: sets the iss (Issuer) Claim
2. subject: sets the sub (Subject) Claim
3. audience: sets the aud (Audience) Claim
4. expiration: sets the exp (Expiration Time) Claim
5. notBefore: sets the nbf (Not Before) Claim
6. issuedAt: sets the iat (Issued At) Claim
7. id: sets the jti (JWT ID) Claim

```java
String jws = Jwts.builder()
    .issuer("me")
    .subject("Bob")
    .audience().add("you").and()
    .expiration(expiration) //a java.util.Date
    .notBefore(notBefore) //a java.util.Date
    .issuedAt(new Date()) // for example, now
    .id(UUID.randomUUID().toString()) //just an example id
    /// ... etc ...
```

Custom Claims - If you need to set one or more custom claims that don’t match the standard setter method claims shown above, you can simply call the JwtBuilder claim method one or more times as needed:

```java
String jws = Jwts.builder()
    .claim("hello", "world")
    // ... etc ...
```

Each time claim is called, it simply appends the key-value pair to an internal Claims builder, potentially overwriting any existing identically-named key/value pair.
Obviously, you do not need to call claim for any standard claim name, and it is recommended instead to call the standard respective type-safe named builder method as this enhances readability.

`JWT Compression` - If your JWT payload is large (contains a lot of data), you might want to compress the JWT to reduce its size. Note that this is not a standard feature for all JWTs - only JWEs - and is not likely to be supported by other JWT libraries for non-JWE tokens. JJWT supports compression for both JWSs and JWEs, however.


**Reading a JWT**:-  You read (parse) a JWT as follows:

1. Use the Jwts.parser() method to create a JwtParserBuilder instance.
2. Optionally call keyLocator, verifyWith or decryptWith methods if you expect to parse signed or encrypted JWTs.
3. Call the build() method on the JwtParserBuilder to create and return a thread-safe JwtParser.
4. Call one of the various parse* methods with your compact JWT string, depending on the type of JWT you expect.
5. Wrap the parse* call in a try/catch block in case parsing, signature verification, or decryption fails.

```java
Jwt<?,?> jwt;

try {
    jwt = Jwts.parser()     // (1)
    .keyLocator(keyLocator) // (2) dynamically locate signing or encryption keys
    //.verifyWith(key)      //     or a constant key used to verify all signed JWTs
    //.decryptWith(key)     //     or a constant key used to decrypt all encrypted JWTs
    .build()                // (3)
    .parse(compact);        // (4) or parseSignedClaims, parseEncryptedClaims, parseSignedContent, etc
    // we can safely trust the JWT
}catch (JwtException ex) {   // (5)
    // we *cannot* use the JWT as intended by its creator
}
```

Constant Parsing Key - If the JWT parsed is a JWS or JWE, a key will be necessary to verify the signature or decrypt it. If a JWS and signature verification fails, or if a JWE and decryption fails, the JWT cannot be safely trusted and should be discarded.

- If parsing a JWS and the JWS was signed with a SecretKey, the same SecretKey should be specified on the JwtParserBuilder.

```java
Jwts.parser()
  .verifyWith(secretKey) // <----
  .build()
  .parseSignedClaims(jwsString);
```

- If parsing a JWS and the JWS was signed with a PrivateKey, that key’s corresponding PublicKey (not the PrivateKey) should be specified on the JwtParserBuilder.

```java
Jwts.parser()
  .verifyWith(publicKey) // <---- publicKey, not privateKey
  .build()
  .parseSignedClaims(jwsString);
```

- If parsing a JWE and the JWE was encrypted with direct encryption using a SecretKey, the same SecretKey should be specified on the JwtParserBuilder. For example:

```java
Jwts.parser()
  .decryptWith(secretKey) // <---- or a Password from Keys.password(charArray)
  .build()
  .parseEncryptedClaims(jweString);
```

- If parsing a JWE and the JWE was encrypted with a key algorithm using with a PublicKey, that key’s corresponding PrivateKey (not the PublicKey) should be specified on the JwtParserBuilder. For example:

```java
Jwts.parser()
  .decryptWith(privateKey) // <---- privateKey, not publicKey
  .build()
  .parseEncryptedClaims(jweString);
```


**JWT Signed with HMAC** - This is an example showing how to digitally sign a JWT using an HMAC (hash-based message authentication code). The JWT specifications define 3 standard HMAC signing algorithms:

1. HS256: HMAC with SHA-256. This requires a 256-bit (32 byte) SecretKey or larger.
2. HS384: HMAC with SHA-384. This requires a 384-bit (48 byte) SecretKey or larger.
3. HS512: HMAC with SHA-512. This requires a 512-bit (64 byte) SecretKey or larger.

```java
MacAlgorithm alg = Jwts.SIG.HS512; //or HS384 or HS256
// Create the compact JWS:
String jws = Jwts.builder()
               .signWith(key, alg)
               .compact();
```