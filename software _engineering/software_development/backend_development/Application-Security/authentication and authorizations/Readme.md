# Authentication & Authorization

Authentication and authorization are fundamental aspects of security that ensure only legitimate users have access to specific resources.

## Authentication Best Practices:-

1. Use Secure Authentication Protocols - Implement OAuth2/OpenID Connect for secure authentication.
   - Use JWT (JSON Web Token) for stateless authentication in APIs.

2. Enforce Multi-Factor Authentication (MFA)
   - Require an additional authentication factor such as TOTP (Time-Based One-Time Password) or biometric authentication.

3. Secure Password Storage - Hash passwords using BCrypt, Argon2, or PBKDF2 before storing them.
   - Enforce strong password policies with minimum complexity requirements.

4. Prevent Brute-Force Attacks - Implement account lockout mechanisms after multiple failed login attempts.
   - Use CAPTCHA to mitigate automated attacks.

## Authorization Best Practices:-

1. Implement Role-Based Access Control (RBAC) - Define roles with minimum necessary privileges.
   - Enforce the principle of least privilege for user accounts.

2. Use Attribute-Based Access Control (ABAC) Where Necessary
   - Define fine-grained access controls based on user attributes (e.g., department, location).

3. Validate Authorization at Every Request - Do not assume a user’s previous authorization applies to new actions.
   - Check permissions at both the frontend and backend.

4. Secure API Endpoints - Ensure proper authorization before processing API requests.
   - Implement scope-based access control for APIs.

## Authentication

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

## Authorization

Authorization is the second of two core security concepts that are crucial in implementing and understanding application security. Authorization uses the information that was validated during authentication to determine whether access should be granted to a particular resource. Built around the authorization model for the application, authorization partitions the application functionality and data so that the availability of these items can be controlled by matching the combination of
privileges, functionality, and data to users. Our application’s failure at this point of the audit indicates that the application’s functionality isn’t restricted by the user role. Imagine if you were running an e-commerce site and the ability to view, cancel, or modify orders and customer information was available to any user of the site!
Authorization typically involves the following two separate aspects that combine to describe the accessibility of the secured system:
1. The first is the mapping of an authenticated principal to one or more authorities (often called roles). For example, a casual user of your website might be viewed as having visitor authority,while a site administrator might be assigned administrative authority.
2. The second is the assignment of authority checks to secured resources in the system. This is typically done when the system is developed, either through an explicit declaration in code or through configuration parameters. For example, the screen that allows for the viewing of other users’ events should be made available only to those users with administrative authority.

A secured resource may be any aspect of the system that should be conditionally available based on the authority of the user.

Secured resources of a web-based application could be individual web pages, entire portions of the website, or portions of individual pages. Conversely, secured business resources might be method calls on classes or individual business objects.
You might imagine an authority check that would examine the principal (the identity of the current user or system interacting with the application), look up its user account, and determine whether the principal is, in fact, an administrator. If this authority check determines that the principal who is attempting to access the secured area is, in fact, an administrator, then the request will succeed. If, however, the principal does not have sufficient authority, the request should be denied.
