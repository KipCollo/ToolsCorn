# JWT

JWT stands for JSON Web Token is a token-based encryption open standard/methodology that is used to transfer information securely as a JSON object. Clients and Servers use JWT to securely share information, with the JWT containing encoded JSON objects and claims. JWT tokens are designed to be compact, safe to use within URLs, and ideal for SSO contexts.

The JSON Object Signing and Encryption group (JOSE) was formed in the year 20119 . The group’s objective was to “standardize the mechanism for integrity protection (signature and MAC) and encryption as well as the format for keys and algorithm identifiers to support interoperability of security services for protocols that use JSON

JSON Web Token, or JWT (“jot”) for short, is a standard for safely passing claims in space constrained environments.

A JSON Web Token looks like this:

```bash
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ
```

While this looks like gibberish, it is actually a very compact, printable representation of a series of claims, along with a signature to verify its authenticity.

```json
{
   "alg": "HS256",
   "typ": "JWT"
}
{
   "sub": "1234567890",
   "name": "John Doe",
   "admin": true
}
```

Claims are definitions or assertions made about a certain party or object. Some of these claims and their meaning are defined as part of the JWT spec. Others are user defined. The magic behind JWTs is that they standardize certain claims that are useful in the context of some common operations. For example, one of these common operations is establishing the identity of certain party.

Another key aspect of JWTs is the possiblity of signing them, using JSON Web Signatures (JWS, RFC 75156 ), and/or encrypting them, using JSON Web Encryption (JWE, RFC 75167 ). Together with JWS and JWE, JWTs provide a powerful, secure solution to many different problems.

Although the main purpose of JWTs is to transfer claims between two parties, arguably the most important aspect of this is the standardization effort in the form of a simple, optionally validated and/or encrypted, container format. Ad hoc solutions to this same problem have been implemented both privately and publicly in the past. Older standards8 for establishing claims about certain parties are also available. What JWT brings to the table is a simple, useful, standard container format.

Some of these applications include:
1. Authentication
2. Authorization
3. Federated identity
4. Client-side sessions (“stateless” sessions)
5. Client-side secrets


All JWTs are constructed from three different elements: the header, the payload, and the signature/encryption data. The first two elements are JSON objects of a certain structure. The third is dependent on the algorithm used for signing or encryption, and, in the case of unencrypted JWTs it is omitted. JWTs can be encoded in a compact representation known as JWS/JWE Compact Serialization.

The JWS and JWE specifications define a third serialization format known as JSON Serialization, a non-compact representation that allows for multiple signatures or recipients in the same JWT.

The compact serialization is a Base641 URL-safe encoding of the UTF-82 bytes of the first two JSON elements (the header and the payload) and the data, as required, for signing or encryption (which is not a JSON object itself). This data is Base64-URL encoded as well. These three elements are separated by dots (“.”).

JWT uses a variant of Base64 encoding that is safe for URLs. This encoding basically substitutes the “+” and “/” characters for the “-” and “_” characters, respectively.
Padding is removed as well. This variant is known as base64url3 . Note that all references to Base64 encoding in this document refer to this variant.

The resulting sequence is a printable string like the following (newlines inserted for readability):

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.
TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ

Notice the dots separating the three elements of the JWT (in order: the header, the payload, and the signature).

The decoded header is:

```json
{
   "alg": "HS256",
   "typ": "JWT"
}
```

The decoded payload is:

```json
{
   "sub": "1234567890",
   "name": "John Doe",
   "admin": true
}
```

And the secret required for verifying the signature is secret.

## The Header

Every JWT carries a header (also known as the JOSE header) with claims about itself. These claims establish the algorithms used, whether the JWT is signed or encrypted, and in general, how to parse the rest of the JWT.

According to the type of JWT in question, more fields may be mandatory in the header. For instance, encrypted JWTs carry information about the cryptographic algorithms used for key encryption and content encryption. These fields are not present for unencrypted JWTs.

The only mandatory claim for an unencrypted JWT header is the alg claim:

- `alg`: the main algorithm in use for signing and/or decrypting this JWT.

For unencrypted JWTs this claim must be set to the value none.

Optional header claims include the typ and cty claims:

- `typ`: the media type5 of the JWT itself. This parameter is only meant to be used as a help for uses where JWTs may be mixed with other objects carrying a JOSE header. In practice,this rarely happens. When present, this claim should be set to the value JWT.
- `cty`:- the content type. Most JWTs carry specific claims plus arbitrary data as part of their payload. For this case, the content type claim must not be set. For instances where the payload is a JWT itself (a nested JWT), this claim must be present and carry the value JWT.
This tells the implementation that further processing of the nested JWT is required. Nested JWTs are rare, so the cty claim is rarely present in headers.

So, for unencrypted JWTs, the header is simply:

```json
{
"alg": "none"
}
```

which gets encoded to:

eyJhbGciOiJub25lIn0

It is possible to add additional, user-defined claims to the header. This is generally of limited use, unless certain user-specific metadata is required in the case of encrypted JWTs before decryption.

## The Payload

```json
{
"sub": "1234567890",
"name": "John Doe",
"admin": true
}
```

The payload is the element where all the interesting user data is usually added. In addition, certain claims defined in the spec may also be present. Just like the header, the payload is a JSON object. No claims are mandatory, although specific claims have a definite meaning. The JWT spec specifies that claims that are not understood by an implementation should be ignored. The claims with specific meanings attached to them are known as registered claims.

`Registered Claims`:-

1. iss: from the word issuer. A case-sensitive string or URI that uniquely identifies the party that issued the JWT. Its interpretation is application specific (there is no central authority managing issuers).
2. sub: from the word subject. A case-sensitive string or URI that uniquely identifies the party that this JWT carries information about. In other words, the claims contained in this JWT are statements about this party. The JWT spec specifies that this claim must be unique in the context of the issuer or, in cases where that is not possible, globally unique. Handling of this claim is application specific.
3. aud: from the word audience. Either a single case-sensitive string or URI or an array of such values that uniquely identify the intended recipients of this JWT. In other words, when this claim is present, the party reading the data in this JWT must find itself in the aud claim ordisregard the data contained in the JWT. As in the case of the iss and sub claims, this claim is application specific.
4. exp: from the word expiration (time). A number representing a specific date and time in the format “seconds since epoch” as defined by POSIX6 . This claims sets the exact moment from which this JWT is considered invalid. Some implementations may allow for a certain skew between clocks (by considering this JWT to be valid for a few minutes after the expiration date).
5. 