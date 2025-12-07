# Spring Security

Spring Security is a security framework that provides declarative security for your Spring-based applications. Spring Security provides a comprehensive security solution, handling authentication and authorization at both the web request level and at the method invocation level. Based on the Spring Framework, Spring Security takes
full advantage of dependency injection (DI) and aspect-oriented techniques.

Spring Security got its start as Acegi Security. Acegi was a powerful security framework, but it had one big turn-off: it required a lot of XML configuration.

With version 2.0, Acegi Security became Spring Security. But the 2.0 release brought more than just a superficial name change. Spring Security 2.0 introduced a
new security-specific XML namespace for configuring security in Spring. The new namespace, along with annotations and reasonable defaults, slimmed typical security
configuration from hundreds of lines to only a dozen or so lines of XML. Spring Security 3.0 added SpEL to the mix, simplifying security configuration even more.

At version 3.2, Spring Security tackles security from two angles. To secure web requests and restrict access at the URL level, Spring Security uses servlet filters. Spring
Security can also secure method invocations using Spring AOP, proxying objects and applying advice to ensure that the user has the proper authority to invoke secured
methods.

## Spring Security modules

Spring Security 3.2 is divided into eleven modules:
In Spring Security 3.0, the codebase has been sub-divided into separate jars which more clearly separate different functionaltiy areas and third-party dependencies

1. Core - spring-security-core.jar:- Contains core authentication and access-contol classes and interfaces, remoting support and basic provisioning APIs. Required by any application which uses Spring Security. Supports standalone applications, remote clients, method (service layer) security and JDBC user provisioning. Contains the top-level packages:
• org.springframework.security.core
• org.springframework.security.access
• org.springframework.security.authentication
• org.springframework.security.provisioning
• org.springframework.security.remoting

2. Web - spring-security-web.jar:- Contains filters and related web-security infrastructure code. Anything with a servlet API dependency.You'll need it if you require Spring Security web authentication services and URL-based access-control.The main package is org.springframework.security.web

3. Config - spring-security-config.jar:- Contains the security namespace parsing code (and hence nothing that you are likely yo use directly in your application). You need it if you are using the Spring Security XML namespace for configuration.The main package is org.springframework.security.config

4. LDAP - spring-security-ldap.jar:- LDAP authentication and provisioning code. Required if you need to use LDAP authentication or manage LDAP user entries. The top-level package is org.springframework.security.ldap.

5. ACL - spring-security-acl.jar:- Specialized domain object ACL implementation. Used to apply security to specific domain object instances within your application. The top-level package is org.springframework.security.acls.

6. CAS - spring-security-cas-client.jar:- Spring Security's CAS client integration. If you want to use Spring Security web authentication with a CAS single sign-on server. The top-level package is org.springframework.security.cas.

7. OpenID - spring-security-openid.jar:- OpenID web authentication support. Used to authenticate users against an external OpenID server. org.springframework.security.openid. Requires OpenID4Java.


ACL - Provides support for domain object security through access control lists(ACLs).
Aspects - A small module providing support for AspectJ-based aspects instead of standard Spring AOP when using Spring Security annotations.
CAS Client - Support for single sign-on authentication using Jasig’s Central Authentication Service (CAS).
Configuration - Contains support for configuring Spring Security with XML and Java. (Java configuration support introduced in Spring Security 3.2.)
Core - Provides the essential Spring Security library.
Cryptography - Provides support for encryption and password encoding.
LDAP - Provides support for LDAP-based authentication.
OpenID - Contains support for centralized authentication with OpenID.
Remoting - Provides integration with Spring Remoting.
Tag Library - Spring Security’s JSP tag library.
Web - Provides Spring Security’s filter-based web security support.

At the least, you’ll want to include the Core and Configuration modules modules in your application’s classpath. Spring Security is often used to secure web applications.

## Filtering web requests

Spring Security employs several servlet filters to provide various aspects of security.
`DelegatingFilterProxy` is a special servlet filter that, by itself, doesn’t do much. Instead, it delegates to an implementation of javax.servlet.Filter that’s registered
as a <bean> in the Spring application context.

If you like configuring servlets and filters in the traditional web.xml file, you can do that with the <filter> element, like this:

```xml
<filter>
   <filter-name>springSecurityFilterChain</filter-name>
   <filter-class> org.springframework.web.filter.DelegatingFilterProxy </filter-class>
</filter>
```

```java
import org.springframework.security.web.context.AbstractSecurityWebApplicationInitializer;
public class SecurityWebInitializer extends AbstractSecurityWebApplicationInitializer {}
```

AbstractSecurityWebApplicationInitializer implements WebApplicationInitializer, so it will be discovered by Spring and be used to register DelegatingFilterProxy with the web container. Although you can override its appendFilters() or insertFilters() methods to register filters of your own choosing, you need not override anything to register DelegatingFilterProxy.

Whether you configure DelegatingFilterProxy in web.xml or by subclassing AbstractSecurityWebApplicationInitializer, it will intercept requests coming
into the application and delegate them to a bean whose ID is springSecurityFilterChain.

As for the springSecurityFilterChain bean itself, it’s another special filter known as FilterChainProxy. It’s a single filter that chains together one or more additional filters. Spring Security relies on several servlet filters to provide different security features, but you should almost never need to know these details, as you likely
won’t need to explicitly declare the springSecurityFilterChain bean or any of the filters it chains together. Those filters will be created when you enable web security.
