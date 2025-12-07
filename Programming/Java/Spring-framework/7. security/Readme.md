# Spring Security

Spring Security is a powerful and highly customizable framework for authentication and access control.Spring Security is the primary choice for implementing application-level security in Spring applications. Generally, its purpose is to offer you a highly customizable way of implementing authentication, authorization, and protection against common attacks.

Spring Security is open source software released under the Apache 2.0 license.
You can use Spring Security for both standard web servlets and reactive applications, as well as non-web apps.

Security features of J2EE's Servlet Specification or EJB Specification lack the depth required for typical enterprise application scenarios. Whilst mentioning these standards, it's important to recognise that they are not portable at a WAR or EAR level. Therefore, if you switch server environments, it is typically a lot of work to reconfigure your application's security in the new target environment. Using Spring Security overcomes these problems, and also brings you dozens of other useful, customisable security features

Generally, at the application level, one of the most frequently encountered use cases is when you’re deciding whether someone is allowed to perform an action or use some piece of data. Based on configurations, you write Spring Security components that intercept the requests and that ensure whoever makes the requests has permission to access protected resources.The developer configures components to do precisely what’s desired.

Other responsibilities of Spring Security components relate to data storage as well as data transit between different parts of the systems. By intercepting calls to these different parts, the components can act on the data. For example, when data is stored, these components can apply encryption or hashing algorithms. The data encodings keep the data accessible only to privileged entities.

Spring Security provides predefined functionality to help you avoid writing boilerplate code or repeatedly writing the same logic from app to app. However, it also allows you to configure any of its components, thus providing great flexibility.

Spring Security exists to fill a gap in the universe of Java third-party libraries, much as the Spring Framework originally did when it was first introduced. Standards such as Java Authentication and Authorization Service (JAAS) or Jakarta EE Security do offer some ways of performing some of the same authentication and authorization functions, but Spring Security is a winner because it includes everything you need to implement a top-to-bottom application security solution concisely and sensibly.

Additionally, Spring Security appeals to many because it offers out-of-the-box integration with many common enterprise authentication systems, so it’s adaptable to most situations with little effort (beyond configuration) on the part of the developer. It’s in wide use because there’s really no other mainstream framework quite like it!

## Alternatives to Spring Security

`Apache Shiro` (https://shiro.apache.org). It offers flexibility in configuration and is easy to integrate with Spring and Spring Boot applications. Apache Shiro sometimes makes a good alternative to the Spring Security approach.It offers its own annotations and design for web applications based on HTTP filters.

You can secure more than just web applications with Shiro, from smaller command-line and mobile applications to large-scale enterprise applications.


## Default Configurations

With the default configuration, the app has two different authentication mechanisms in place: `HTTP Basic` and `Form Login`.If you try accessing the URL in a browser, you’ll find that your app implements a nice form for user authentication.

`HTTP Basic` is a way in which a web app authenticates a user by means of a set of credentials (username and password) that the app gets in the header of the HTTP request.

Just by creating the project and adding the correct dependencies, Spring Boot applies default configurations, including a username and a password, when you start the application.
If you run the application, besides the other lines in the console, you should see something that looks like

```bash
Using generated security password: 93a01cf0-794b-4b98-86ef-54860f36f7f3
```

Each time you run the application, it generates a new password and prints this password in the console. You must use this password to call any of the application’s endpoints with HTTP Basic authentication. 

When you call the endpoint without using the Authorization header:

```bash
curl http://localhost:8080/hello
```

The response to the call is:-

```h
{
"status":401,
"error":"Unauthorized",
"message":"Unauthorized",
"path":"/hello"
}
```

By default, Spring Security expects the default username (user) with the provided password.

```bash
curl -u user:93a01cf0-794b-4b98-86ef-54860f36f7f3 http://localhost:8080/hello
```

**NOTE**- The HTTP 401 Unauthorized status code is a bit ambiguous. Usually, it’s used to represent a failed authentication rather than an authorization. Developers employ it in the design of the application for cases such as missing or incorrect credentials.

For a failed authorization, we’d probably use the 403 Forbidden status. Generally, an HTTP 403 means that the server identified the caller of the request, but they don’t have the needed privileges for the call that they are trying to make.

We mainly use the default configurations to prove that the correct dependencies are in place. It does little for authentication and authorization.

The relationships among the entities that are part of the authentication in spring security is:-

1. The authentication filter delegates the authentication request to the authentication manager, and based on the response, it configures the security context.
2. The authentication manager uses the authentication provider to process authentication.
3. The authentication provider implements the authentication logic.
4. The user details service implements user management responsibility, which the authentication provider uses in the authentication logic.
5. The password encoder implements password management, which the authentication provider uses in the authentication logic.
6. The security context keeps the authentication data after the authentication process. The security context will hold the data until the action ends. Usually, in a
thread-per-request app, that means until the app sends a response back to the client.

Spring autoconfigured beans in default configurations are:-

- UserDetailsService
- PasswordEncoder

An object that implements a `UserDetailsService` interface with Spring Security manages the details about users.

The default implementation only registers the default credentials in the internal memory of the application. These default credentials are “user” with a default password that’s a universally unique identifier (UUID). The default password is generated randomly when the Spring context is loaded (at the app startup). At this time, the application writes the password to the console where you can see it.

Then we have the `PasswordEncoder`. The PasswordEncoder does two things:

1. Encodes a password (usually using an encryption or a hashing algorithm)
2. Verifies if the password matches an existing encoding

Even if it’s not as obvious as the UserDetailsService object, the PasswordEncoder is mandatory for the Basic authentication flow.
PasswordEncoder exists together with the default UserDetailsService. When we replace the default implementation of the UserDetailsService, we must also specify
a PasswordEncoder

Spring Boot also chooses an authentication method when configuring the defaults: HTTP Basic access authentication. It’s the most straightforward access authentication
method. Basic authentication only requires the client to send a username and a password through the HTTP Authorization header. In the value of the header, the client
attaches the prefix Basic, followed by the Base64 encoding of the string that contains the username and password, separated by a colon (:).

The `AuthenticationProvider` defines the authentication logic, delegating the user and password management. A default implementation of an Authentication­ Provider uses the default implementations provided for the UserDetailsService and the PasswordEncoder. Implicitly, your application secures all the endpoints.


## Overriding default configurations

`configuring a UserDetailsService and a PasswordEncoder`. These two components usually take part in authentication, and most applications customize them depending on their requirements.

**Customizing user details management**:- The application uses `UserDetailsService` component in the authentication process.


*InMemoryUserDetailsManager implementation* - This implementation stores credentials in memory, which can then be used by Spring Security to authenticate a request.Mainly intended for testing and demonstration purposes, where a full blown persistent system isn't required.



When customizing,We need to:-

1. Create at least one user who has a set of credentials (username and password)
2. Add the user to be managed by our implementation of UserDetailsService
3. Define a bean of the type PasswordEncoder that our application can use to verify a given password with the one stored and managed by UserDetailsService 

we start by defining a configuration class.Generally, we declare configuration classes in a separate package named config.
First, we declare and add a set of credentials that we can use for authentication to the instance of InMemoryUserDetailsManager.When building the instance, we must provide the username, the password, and at least one authority. The authority is an action allowed for that user, and we can use any string for this.

We can use a predefined builder to create an object of the type `UserDetails`.You’ll find the class `User` in the org.springframework.security.core.userdetails package. It’s the builder implementation we use to create the object to represent the user.

When using the default UserDetailsService, a PasswordEncoder is also autoconfigured. Because we overrode UserDetailsService, we also have to declare a PasswordEncoder.

```java
@Configuration
public class Config{

  @Bean
  UserDetailsService userDetailsService(){

    var user = User.withUsername("Collins")
                .password("12345")
                .authorities("read")
                .build();

    return new InMemoryUserDetailsManager(user);
  }

  @Bean
  public PasswrdEncoder passwordEncoder(){
    return NoOpPasswordEncoder.getInstance();
  }
}
```


The NoOpPasswordEncoder instance treats passwords as plain text. It doesn’t encrypt or hash them. For matching, NoOpPasswordEncoder only compares the strings using the underlying equals(Object o) method of the String class. You shouldn’t use this type of PasswordEncoder in a production-ready app. NoOpPasswordEncoder is a good option for examples where you don’t want to focus on the hashing algorithm of the password. Therefore, the developers of the class marked it as @Deprecated, and your development environment will show its name with a strikethrough.





**Applying authorization at the endpoint level** - With the default configuration, all the endpoints assume you have a valid user managed by the application. Also, by default, your app uses HTTP Basic authentication, but you can easily override this configuration.

HTTP Basic authentication doesn’t fit into most application architectures. Sometimes, we’d like to change it to match our application.Similarly, not all endpoints of an application need to be secured, and for those that do, we might need to choose different authentication methods and authorization rules.
To customize the handling of authentication and authorization, we’ll need to define a bean of type `SecurityFilterChain`.

Below shows configuring endpoint authorization with the same behavior as the default one:-

```java
@Configuration
public class ProjectConfig {

  @Bean
  SecurityFilterChain configure(HttpSecurity http) throws Exception {

    http.httpBasic(Customizer.withDefaults());
    http.authorizeHttpRequests(
        c -> c.anyRequest().authenticated()

      );

      
    return http.build();
  }

}
```

1. httpBasic(), which helped us configure the authentication approach. By calling this method, you instructed your app to accept HTTP Basic as an authentication method.
2. authorizeHttpRequests(), which helped us configure the authorization rules at the endpoint level. By calling this method, you instructed the app on how to authorize the requests received on specific endpoints.


For both methods, you had to use a `Customizer` object as a parameter. Customizer is a contract you implement to define the customization for either Spring Security element you configure: the authentication, the authorization, or particular protection mechanisms such as CSRF or CORS.

The following snippet shows the definition of the Customizer interface. Observe that Customizer is a functional interface (so we can use lambda expressions to implement
it), and the withDefaults() method is, in fact, just a Customizer implementation that does nothing:

```java
@FunctionalInterface
public interface Customizer<T> {
  void customize(T t);
  
  static <T> Customizer<T> withDefaults() {
    return (t) -> {
    };
  }
}
```

In earlier Spring Security versions, you could apply configurations without a Customizer object by using a chaining syntax.Instead of providing a Customizer object to the authorizeHttp­Requests() method, the configuration just follows the method’s call:

```java
http.authorizeHttpRequests()
  .anyRequest().authenticated()
```

The reason this approach has been left behind is because a Customizer object allows you more flexibility in moving the configuration where needed. Sure, with simple
examples, using lambda expressions is comfortable. But in real-world apps, the configurations can grow a lot. In such cases, the ability to move these configurations in separate classes helps you keep the configurations easier to maintain and test.

`NOTE` In earlier versions of Spring Security, a security configuration class needed to extend a class named WebSecurityConfigurerAdapter. We don’t use this
practice anymore.





**Configuring in different ways** - We can directly use the SecurityFilterChain bean to set both the UserDetailsService and the PasswordEncoder.We also call the userDetailsService() method from the HttpSecurity to register the UserDetailsService instance.

```java
@Configuration
public class ProjectConfig {

  @Bean
  SecurityFilterChain configure(HttpSecurity http) throws Exception {

    http.httpBasic(Customizer.withDefaults());
    http.authorizeHttpRequests(
        c -> c.anyRequest().authenticated()
      );

    var user = User.withUsername("Collins")
                .password("12345")
                .authorities("read")
                .build();

    var userDetailsService = 
      new InMemoryUserDetailsManager(user);

    http.userDetailsService(userDetailsService);

    return http.build();
  }

  @Bean
  PasswordEncoder passwordEncoder() {
    return NoOpPasswordEncoder.getInstance();
}

}
```


Any of these configuration options are correct. The first option, where we add the beans to the context, lets you inject the values in another class where you might potentially need them. But if you don’t need that for your case, the second option would be equally good.









**Defining custom authentication logic** - `AuthenticationProvider` implements the authentication logic and delegates to the UserDetailsService and PasswordEncoder for user and password management.

The AuthenticationProvider implements the authentication logic. It receives the request from the AuthenticationManager and delegates finding the user to a
UserDetailsService, verifying the password to a PasswordEncoder.


```java
@Component
public class CustomAuthenticationProvider implements AuthenticationProvider {

  @Override
  public Authentication authenticate (Authentication authentication) throws AuthenticationException {
    // authentication logic here
  }

  @Override
  public boolean supports(Class<?> authenticationType) {
    // type of the Authentication implementation here
  }
}
```


The authenticate(Authentication authentication) method represents all the logic for authentication


```java
@Override
public Authentication authenticate(Authentication authentication)
  throws AuthenticationException {

  String username = authentication.getName();
  String password = String.valueOf(authentication.getCredentials());

  if ("john".equals(username) &&
      "12345".equals(password)) {
    return new UsernamePasswordAuthenticationToken(
                username,
                password
                Arrays.asList());
  } else {
    throw new AuthenticationCredentialsNotFoundException("Error!");
  }
}

@Override
public boolean supports(Class<?> authenticationType) {
  return UsernamePasswordAuthenticationToken
            .class
            .isAssignableFrom(authenticationType);
}
```


The condition of the if-else clause is replacing the responsibilities of User­ DetailsService and PasswordEncoder. You are not required to use the two beans,
but if you work with users and passwords for authentication, I strongly suggest you separate the logic of their management. Apply it as the Spring Security architecture
designed it, even when you override the authentication implementation.

You might find it useful to replace the authentication logic by implementing your own AuthenticationProvider. If the default implementation doesn’t fit entirely into
your application’s requirements, you can decide to implement custom authentication logic.


In the configuration class, you can register the AuthenticationProvider using the HttpSecurity authenticationProvider() method.


```java
@Configuration
public class ProjectConfig {

  private final CustomAuthenticationProvider authenticationProvider;

  public ProjectConfig( CustomAuthenticationProvider authenticationProvider) {
    this.authenticationProvider = authenticationProvider;
  }

  @Bean
  SecurityFilterChain configure(HttpSecurity http) throws Exception {

    http.httpBasic(Customizer.withDefaults());
    http.authenticationProvider(authenticationProvider);
    http.authorizeHttpRequests(
        c -> c.anyRequest().authenticated()
      );

    return http.build();
  }

}
```


- Spring Boot provides some default configurations when you add Spring Security to the dependencies of the application.
- You implement the following basic components for authentication and authorization: UserDetailsService,PasswordEncoder, and AuthenticationProvider.
- You can define users with the User class. A user should at least have a username, a password, and an authority. Authorities are actions that you allow a user to do in the context of the application.
- A simple implementation of a UserDetailsService that Spring Security provides is InMemoryUserDetailsManager. You can add users to such an instance
of UserDetailsService to manage the user in the application’s memory.
- The NoOpPasswordEncoder is an implementation of the PasswordEncoder contract that uses passwords in cleartext. This implementation is good for learning examples and (maybe) proofs of concept, but not for production-ready applications.
- You can use the AuthenticationProvider contract to implement custom authentication logic in the application.
- There are multiple ways to write configurations, but in a single application, you should choose and stick to one approach. This helps to make your code cleaner
and easier to understand.


---------------------


## Managing Users

With any robust framework, we use contracts to decouple the implementations of the framework from the application built on it. With Java, we use interfaces to define the contracts.

1. UserDetailsService
2. UserDetails - which describes the user for Spring Security.
3. GrantedAuthority - which allows us to define actions that the user can execute.
4. UserDetailsManager - extends the UserDetailsService contract.Beyond the inherited behavior, it also describes actions such as creating a user and modifying or deleting a user’s password.

As part of user management, we use the `UserDetailsService` and `UserDetailsManager` interfaces. The `UserDetailsService` is only responsible for retrieving the user by username. This action is the only one needed by the framework to complete authentication.The `UserDetailsManager` adds behavior that refers to adding, modifying, or deleting the user, which is a required functionality in most applications.

The separation between the two contracts is an excellent example of the interface segregation principle. Separating the interfaces allows for better flexibility because the framework doesn’t force you to implement behavior if your app doesn’t need it. If the app only needs to authenticate the users, then implementing the UserDetailsService contract is enough to cover the desired functionality. To manage the users, UserDetailsService and the UserDetailsManager components need a way to represent them.

Spring Security offers the `UserDetails` contract, which you must implement to describe a user in the way the framework understands.In Spring Security, a user has a set of privileges , which are the actions the user is allowed to do.Spring Security represents the actions that a user can do with the `GrantedAuthority` interface. We often call these authorities, and a user has one or more of them.

*Dependencies between the components involved in user management*. The UserDetailsService retrieves a user’s details by searching for the user by name. The user is
characterized by the UserDetails contract. Each user possesses one or more authorities, which are depicted by the GrantedAuthority interface. For incorporating operations such as create, delete, or modify password for a user, the UserDetailsManager contract, which expands on the UserDetailsService, is used to include these functionalities.

**Descibing a User**:- To represent users and make the framework aware of them is an essential step in building an authentication flow. Based on the user, the application makes a decision—whether a call to a certain functionality is allowed.Provides core user information.

Implementations are not used directly by Spring Security for security purposes. They simply store user information which is later encapsulated into Authentication objects. This allows non-security related user information (such as email addresses, telephone numbers etc) to be stored in a convenient location.
Concrete implementations must take particular care to ensure the non-null contract detailed for each method is enforced.

To work with users, you first need to understand how to define the prototype of the user in your application.For Spring Security, a user definition should fulfill the UserDetails contract. The UserDetails contract represents the user as understood by Spring Security. The class of your application that describes the user must implement this interface, and in this way, the framework understands it.

The methods declared by the UserDetails contract are:-

```java
public interface UserDetails extends Serializable {
  String getUsername();// These methods return the user credentials.Returns the username used to authenticate the user. Cannot return null.
  String getPassword();// These methods return the user credentials.Returns the password used to authenticate the user.
  Collection<? extends GrantedAuthority> getAuthorities(); //Returns the actions that the app allows the user to do as a collection of GrantedAuthority instances.Returns the authorities granted to the user. Cannot return null.Returns: the authorities, sorted by natural key (never null)
  boolean isAccountNonExpired(); // Indicates whether the user's account has expired. An expired account cannot be authenticated. Returns: true if the user's account is valid (ie non-expired), false if no longer valid (ie expired)
  boolean isAccountNonLocked();// Indicates whether the user is locked or unlocked. A locked user cannot be authenticated. Returns: true if the user is not locked, false otherwise
  boolean isCredentialsNonExpired(); // Indicates whether the user's credentials (password) has expired. Expired credentials prevent authentication.Returns: true if the user's credentials are valid (ie non-expired), false if no longer valid (ie expired)
  boolean isEnabled(); //Indicates whether the user is enabled or disabled. A disabled user cannot be authenticated. Returns:true if the user is enabled, false otherwise
}
```

The getUsername() and getPassword() methods return the username and the password. The app uses these values in the authentication process, and these are the only details related to authentication from this contract. The other five methods all relate to authorizing the user to access the application’s resources.
Generally, the app should allow a user to do some actions that are meaningful in the application’s context. For example, the user should be able to read, write, or delete data. We say a user has or doesn’t have the privilege to perform an action, and an authority represents the privilege a user has. We implement the getAuthorities() method to return the group of authorities granted to a user.

Furthermore, as seen in the UserDetails contract, a user can

1. Let the account expire
2. Lock the account
3. Let the credentials expire
4. Disable the account

Suppose you choose to implement these user restrictions in your application’s logic. In that case, you need to implement the methods isAccountNonExpired(),isAccountNonLocked(), isCredentialsNonExpired(), and isEnabled(), so that those needing to be enabled return true. Not all applications have accounts that expire or get locked with certain conditions. If you do not need to implement these functionalities in your application, you can simply make these four methods return true.

NOTE:-- The names of the last four methods in the UserDetails interface may sound strange. One could argue that these are not wisely chosen in terms of clean coding and maintainability. For example, the name isAccountNon­Expired() looks like a double negation, and at first sight, it might create confusion. But let’s analyze all four method names with attention. These are named so that they all return false when the authorization should fail and true otherwise.
This is the right approach because the human mind tends to associate the word “false” with negativity and the word “true” with positive scenarios.

- User:- Models core user information retrieved by a UserDetailsService.Developers may use this class directly, subclass it, or write their own UserDetails implementation from scratch. equals and hashcode implementations are based on the username property only, as the intention is that lookups of the same user principal object (in a user registry, for example) will match where the objects represent the same user, not just when all the properties (authorities, password for example) are the same.

**GrantedAuthority contract** - The actions granted for a user are called authorities.We write authorization configurations based on these user authorities.
The authorities represent what the user can do in your application. Without them, all users would be equal.An application might have users who can only read specific information, while others can also modify the data. And you need to make your application differentiate between them, depending on the functional requirements of the application, which are the authorities a user needs.

Represents an authority granted to an Authentication object.A GrantedAuthority must either represent itself as a String or be specifically supported by an AuthorizationManager.
To describe the authorities in Spring Security, you use the `GrantedAuthority` interface.We use this interface in the definition of the user details. It represents a privilege granted to the user. A user must have at least one authority. Here’s the implementation of the GrantedAuthority definition:

```java
public interface GrantedAuthority extends Serializable {
  String getAuthority();
}
```

To create an authority, you only need to find a name for that privilege so you can refer to it later when writing the authorization rules. For example, a user can read the records managed by the application or delete them. You write the authorization rules based on the names you give to these actions.

The GrantedAuthority interface has only one abstract method.we use a lambda expression for its implementation. Another possibility is to use the `SimpleGrantedAuthority` class to create authority instances. The SimpleGrantedAuthority class offers a way to create immutable instances of the type GrantedAuthority. You provide the authority name when building the instance.

```java
GrantedAuthority g1 = () -> "READ";
GrantedAuthority g2 = new SimpleGrantedAuthority("READ");
```

**implementation of UserDetails**

- `minimal implementation of UserDetails` - We start with a basic implementation in which each method returns a static value.

```java
public class DummyUser implements UserDetails {

  @Override
  public String getUsername(){
    return "Collins"
  }

  @Override
  public String getPassword(){
    return "12345"
  }

  @Override
  public Collections<? extends GrantedAuthority> getAuthorities(){
    return List.of(() -> "READ")
  }

  @Override
  public boolean isAccountNonExpired(){
    return true;
  }

  @Override
  public boolean isAccountNonLocked(){
    return true;
  }


  @Override
  public boolean isCredentialsNonExpired(){
    return true;
  }

  @Override
  public boolean isEnabled(){
    return true;
  }
}
```


- `Using a builder to create instances of the UserDetails type` - Some applications are simple and don’t need a custom implementation of the UserDetails interface.
A builder class is provided by Spring Security to create simple user instances. Instead of declaring one more class in your application, you quickly obtain an instance representing your user with the User builder class.

The User class from the org.springframework.security.core.userdetails package is a simple way to build instances of the UserDetails type. Using this class, you can
create immutable instances of UserDetails. You need to provide at least a username and a password, and the username shouldn’t be an empty string.



```java
UserDetails user = User.withUsername("Bill")
                    .password("12345")
                    .authorities("read", "write")
                    .accountExpired(false)
                    .disabled(true)
                    .build();
```


The User.withUsername(String username) method returns an instance of the builder class UserBuilder nested in the User class. 

Another way to create the builder is by starting from another instance of UserDetails.



```java
User.UserBuilder builder1 = User.withUsername("Collins");

UserDetails user1 = builder1
                    .password("12345")
                    .authorities("read", "write")
                    .accountExpired(false)
                    .passwordEncoder(p -> encode(p))
                    .disabled(true)
                    .build();

User.UserBuilder builder2 = User.withUserDetails(user)

UserDetails u2 = builder2.build();
```


`Note` that the password encoder is given here as a Function<String,String> and not in the form of the PasswordEncoder interface provided by Spring Security. This function’s only responsibility is to transform a password in a given encoding.



- `Combining multiple responsibilities related to the user` - In most cases, you find multiple responsibilities to which a user relates. And if you store users in a database, and then in the application, you would need a class to represent the persistence entity as well. Or if you retrieve users through a web service from another system, then you would probably need a data transfer object to represent the user instances.



```java
@Entity
public class User {

  @Id
  private int userId;
  private String name;
  private String password;
  private String authority;


  @Override
  public String getUsername(){
    return this.name;
  }

  @Override
  public String getPassword(){
    return this.password;
  }

  @Override
  public Collections<? extends GrantedAuthority> getAuthorities(){
    return List.of(() -> authority)
  }

}
```

- UserCache:- Provides a cache of UserDetails objects.Implementations should provide appropriate methods to set their cache parameters (e.g. time-to-live) and/or force removal of entities before their normal expiration. These are not part of the UserCache interface contract because they vary depending on the type of caching system used (in-memory, disk, cluster, hybrid etc.).
- Caching is generally only required in applications which do not maintain server-side state, such as remote clients or web services. The authentication credentials are then presented on each invocation and the overhead of accessing a database or other persistent storage mechanism to validate would be excessive. In this case, you would configure a cache to store the UserDetails information rather than loading it each time.


**Instructing Spring Security on how to manage users** - The framework defines a specific component to which the authentication process delegates user management: the `UserDetailsService` instance,Core interface which loads user-specific data.It is used throughout the framework as a user DAO and is the strategy used by the DaoAuthenticationProvider.
The interface requires only one read-only method, which simplifies support for new data-access strategies

The standard interfaces for implementing user data DAOs.Can be the traditional UserDetailsService which uses a unique username to identify the user or, for more complex requirements, the AuthenticationUserDetailsService.

1. memory- Exposes an in-memory authentication repository.
2. jdbc - Exposes a JDBC-based authentication repository, implementing org.springframework.security.core.userdetails.UserDetailsService UserDetailsService.
3. cache- Implementations of UserCache.

- UserDetailsService:- Core interface which loads user-specific data.It is used throughout the framework as a user DAO and is the strategy used by the DaoAuthenticationProvider.The interface requires only one read-only method, which simplifies support for new data-access strategies.
  - UserDetails loadUserByUsername(String username) throws UsernameNotFoundException- Locates the user based on the username. In the actual implementation, the search may possibly be case sensitive, or case insensitive depending on how the implementation instance is configured. In this case, the UserDetails object that comes back may have a username that is of a different case than what was actually requested..

- Note that this implementation is not immutable. It implements the CredentialsContainer interface, in order to allow the password to be erased after authentication. This may cause side-effects if you are storing instances in-memory and reusing them. If so, make sure you return a copy from your UserDetailsService each time it is invoked.

Core interface which loads user-specific data.It is used throughout the framework as a user DAO and is the strategy used by the DaoAuthenticationProvider.
The interface requires only one read-only method, which simplifies support for new data-access strategies.

UserDetails loadUserByUsername(String username) throws UsernameNotFoundException:- Locates the user based on the username. In the actual implementation, the search may possibly be case sensitive, or case insensitive depending on how the implementation instance is configured. In this case, the UserDetails object that comes back may have a username that is of a different case than what was actually requested..

The UserDetailsService interface contains only one method, as follows:

```java
public interface UserDetailsService {

  /*
  Locates the user based on the username. In the actual implementation, the search may possibly be case sensitive, or case insensitive depending on how the implementation instance is configured. In this case, the UserDetails object that comes back may have a username that is of a different case than what was actually requested.
  */
  UserDetails loadUserByUsername(String username)
    throws UsernameNotFoundException;
}
```

The authentication implementation calls the loadUserByUsername(String username) method to obtain the details of a user with a given username. The username is, of course, considered unique. The user returned by this method is an implementation of the UserDetails contract. If the username doesn’t exist, the method throws a UsernameNotFoundException.

`NOTE`-- The UsernameNotFoundException is a RuntimeException. The throws clause in the UserDetailsService interface is only for documentation purposes. The UsernameNotFoundException inherits directly from the type AuthenticationException, which is the parent of all the exceptions related to the process of authentication. AuthenticationException further inherits the RuntimeException class.
- UsernameNotFoundException:- Thrown if an UserDetailsService implementation cannot locate a User by its username.
  1. UsernameNotFoundException(String msg) - Constructs a UsernameNotFoundException with the specified message.
  2. UsernameNotFoundException(String msg, Throwable cause)- Constructs a UsernameNotFoundException with the specified message and root cause


The AuthenticationProvider is the element responsible for executing the authentication process and utilizes the UserDetailsService to gather user details. It invokes the loadUserByUsername(String username) method to locate the user based on their username.

Implementations include:-

`InMemoryUserDetailsManager`:- Non-persistent implementation of UserDetailsManager which is backed by an in-memory map.Mainly intended for testing and demonstration purposes, where a full blown persistent system isn't required.

`JdbcDaoImpl`:- UserDetailsService implementation which retrieves the user details (username, password, enabled flag, and authorities) from a database using JDBC queries.
Default Schema - A default database schema is assumed, with two tables "users" and "authorities".
The Users table - This table contains the login name, password and enabled status of the user.Column:- username, password,enabled
The Authorities Table - Column:- username,authority

If you are using an existing schema you will have to set the queries usersByUsernameQuery and authoritiesByUsernameQuery to match your database setup.
In order to minimise backward compatibility issues, this implementation doesn't recognise the expiration of user accounts or the expiration of user credentials. However, it does recognise and honour the user enabled/disabled column. This should map to a boolean type in the result set (the SQL type will depend on the database you are using). All the other columns map to Strings.
Group Support:- Support for group-based authorities can be enabled by setting the enableGroups property to true (you may also then wish to set enableAuthorities to false to disable loading of authorities directly). With this approach, authorities are allocated to groups and a user's authorities are determined based on the groups they are a member of. The net result is the same (a UserDetails containing a set of GrantedAuthoritys is loaded), but the different persistence strategy may be more suitable for the administration of some applications.
When groups are being used, the tables "groups", "group_members" and "group_authorities" are used. See DEF_GROUP_AUTHORITIES_BY_USERNAME_QUERY for the default query which is used to load the group authorities. Again you can customize this by setting the groupAuthoritiesByUsernameQuery property, but the format of the rows returned should match the default.

`JdbcUserDetailsManager`:- Jdbc user management service, based on the same table structure as its parent class, JdbcDaoImpl.
Provides CRUD operations for both users and groups. Note that if the enableAuthorities property is set to false, calls to createUser, updateUser and deleteUser will not store the authorities from the UserDetails or delete authorities for the user. Since this class cannot differentiate between authorities which were loaded for an individual or for a group of which the individual is a member, it's important that you take this into account when using this implementation for managing your users.

`LdapUserDetailsManager`:- An Ldap implementation of UserDetailsManager.
It is designed around a standard setup where users and groups/roles are stored under separate contexts, defined by the "userDnBase" and "groupSearchBase" properties respectively.
In this case, LDAP is being used purely to retrieve information and this class can be used in place of any other UserDetailsService for authentication. Authentication isn't performed directly against the directory, unlike with the LDAP authentication provider setup.

`LdapUserDetailsService`:- LDAP implementation of UserDetailsService based around an LdapUserSearch and an LdapAuthoritiesPopulator. The final UserDetails object returned from loadUserByUsername is created by the configured UserDetailsContextMapper.

`CachingUserDetailsService`:- Implementation of UserDetailsService that utilizes caching through a UserCache
If a null UserDetails instance is returned from UserCache.getUserFromCache(String) to the UserCache got from getUserCache(), the user load is deferred to the UserDetailsService provided during construction. Otherwise, the instance retrieved from the cache is returned.
It is initialized with a NullUserCache by default, so it's strongly recommended setting your own UserCache using setUserCache(UserCache), otherwise, the delegate will be called every time.

Utilize this class by defining a Bean that encapsulates an actual implementation of UserDetailsService and providing a UserCache implementation.
For example:

```java
 @Bean
 public CachingUserDetailsService cachingUserDetailsService(UserCache userCache) {
     UserDetailsService delegate = ...;
     CachingUserDetailsService service = new CachingUserDetailsService(delegate);
     service.setUserCache(userCache);
     return service;
 }
```


**Implementing the UserDetailsService contract**:- Your application manages details about credentials and other user aspects. It could be that these are stored in a database or handled by another system that you access through a web service or by other means. Regardless of how this happens in your system, the only thing Spring Security needs from you is an implementation to retrieve the user by username.

```java
public class InMemoryUserDetailsService implements UserDetailsService {

  public final List<UserDetails> users;

  public InMemoryUserDetailsService(List<UserDetails> users){
    this.users = users;
  }

  @Overrides
  UserDetails loadUserByUsername(String username) throws UsernameNotFoundException{

      return users.stream()
          .filter(
            u -> u.getUsername().equals(username)
          )
        .findFirst()
        .orElseThrow(
          () -> new UsernameNotFoundException("User not found");
        )
    }
}
```

The loadUserByUsername(String username) method searches the list of users for the given username and returns the desired UserDetails instance. If there is no
instance with that username, it throws a UsernameNotFoundException. We can now use this implementation as our UserDetailsService.


```java
@Configuration
public class Config {

  @Bean
  public UserDetailsService userDetailsService (){
    UserDetails user = new User("Collins","123","read");
    List<UserDetails> users = List.of(user);
    return new InMemoryUserDetailsService(users)
  }

  @Bean
  public PasswordEncoder passwordEncoder(){
    return NoOpPasswordEncoder.getInstance();
  }
}
```

`UserDetailsManager`:- An extension of the UserDetailsService which provides the ability to create new users and update existing ones.

**Implementing the UserDetailsManager contract** - This interface extends and adds more methods to the UserDetailsService contract. Spring Security needs the UserDetailsService contract to do the authentication. But generally, in applications, there is also a need for managing users. Most of the time, an app should be able to add new users or delete existing ones. In this case, we implement a more particular interface defined by Spring Security, UserDetailsManager. It extends UserDetailsService and adds more operations that we need to implement:

```java
public interface UserDetailsManager extends UserDetailsService {
  void createUser(UserDetails user);
  void updateUser(UserDetails user);
  void deleteUser(String username);
  void changePassword(String oldPassword, String newPassword);
  boolean userExists(String username);
}
```

The InMemoryUserDetailsManager object is actually a UserDetailsManager.

`Using a JdbcUserDetailsManager for user management` - Besides the InMemoryUserDetailsManager, we often use another UserDetail­Manager implementation, JdbcUserDetailsManager. The JdbcUserDetailsManager class manages users in an SQL database. It connects to the database directly through JDBC. This way, the JdbcUserDetailsManager is independent of any other framework or specification related to database connectivity.

The JdbcUserDetailsManager implementation expects three columns in the users table—a username, a password, and enabled—which you can use to deactivate the user.
You can choose to create the database and its structure yourself by using either the command-line tool for your database management system (DBMS) or a client application.For example, for MySQL, you can choose to use MySQL Workbench to do this. But the easiest thing to do would be to let Spring Boot itself run the scripts for you. To do this, just add two more files to your project in the resources folder: schema.sql and data.sql.

In the schema.sql file, you add the queries related to the database structure, such as creating, altering, or dropping tables. In the data.sql file, you add the queries that work with the data inside the tables, such as INSERT, UPDATE, or DELETE. Spring Boot automatically runs these files for you when you start the application.

In the configuration class of the project, you define the UserDetailsService and the PasswordEncoder. The JdbcUserDetailsManager needs the DataSource to connect to the database. The data source can be autowired through a parameter of the method or through an attribute of the class.

```java
@Configuration
public class ProjectConfig {
  @Bean
  public UserDetailsService userDetailsService(DataSource dataSource) {
    return new JdbcUserDetailsManager(dataSource);
  }

  @Bean
  public PasswordEncoder passwordEncoder() {
    return NoOpPasswordEncoder.getInstance();
  }
}
```

The JdbcUserDetailsManager also allows you to configure the queries used.

```java
@Bean
public UserDetailsService userDetailsService(DataSource dataSource) {
  String usersByUsernameQuery = "select username, password, enabled from users where username = ?";
  String authsByUserQuery = "select username, authority from spring.authorities where username = ?";
  var userDetailsManager = new JdbcUserDetailsManager(dataSource);
  userDetailsManager.setUsersByUsernameQuery(usersByUsernameQuery);
  userDetailsManager.setAuthoritiesByUsernameQuery(authsByUserQuery);
  return userDetailsManager;
}
```


`Using an LdapUserDetailsManager for user management` - Spring Security also offers an implementation of UserDetailsManager for LDAP.Even if it is less popular than the JdbcUserDetailsManager, you can count on it if you need to integrate with an LDAP system for user management.

To set up the embedded LDAP server in Spring Boot, you define a simple LDAP Data Interchange Format (LDIF) file.

```java
//Defines the base entity
dn: dc=springframework,dc=org
objectclass: top
objectclass: domain
objectclass: extensibleObject
dc: springframework

//Defines a group entity
dn: ou=groups,dc=springframework,dc=org
objectclass: top
objectclass: organizationalUnit
ou: groups

//Defines a user
dn: uid=john,ou=groups,dc=springframework,dc=org
objectclass: top
objectclass: person
objectclass: organizationalPerson
objectclass: inetOrgPerson
cn: John
sn: John
uid: john
userPassword: 12345
```

We can add the LDIF file directly to the resources folder. This way, it’s automatically in the classpath
Once you have an LDAP server for authentication, you can configure your application to use it. 


```java
@Configuration
public class ProjectConfig {

  @Bean
  public UserDetailsService userDetailsService() {
  var cs = new DefaultSpringSecurityContextSource("ldap://127.0.0.1:33389/dc=springframework,dc=org");
  cs.afterPropertiesSet();

  var manager = new LdapUserDetailsManager(cs);

  manager.setUsernameMapper(new DefaultLdapUsernameToDnMapper("ou=groups", "uid"));
  manager.setGroupSearchBase("ou=groups");

  return manager;
}
  @Bean
  public PasswordEncoder passwordEncoder() {
    return NoOpPasswordEncoder.getInstance();
}
}
```

------------


## Managing Passwords


**Using password encoders** - The AuthenticationProvider uses the PasswordEncoder to validate the user’s password in the authentication process.

In general, a system doesn’t manage passwords in plain text, these usually undergo a sort of transformation that makes it more challenging to read and steal them. For this responsibility, Spring Security defines a separate contract.


`The PasswordEncoder contract` - You implement this contract to tell Spring Security how to validate a user’s password. In the authentication process, the PasswordEncoder decides whether a password is valid. Every system stores passwords encoded in some way. You preferably store them hashed so that there’s no chance someone can read them. The PasswordEncoder can also encode passwords. The methods encode() and matches(), which the contract declares, are actually the definition of its responsibility. Both are parts of the same contract because these are strongly interlinked. The way the application encodes a password is related to the way the password is validated.

```java
public interface PasswordEncoder {
  String encode(CharSequence rawPassword);
  boolean matches(CharSequence rawPassword, String encodedPassword);

  default boolean upgradeEncoding(String encodedPassword) {
    return false;
}
}
```

The interface defines two abstract methods and one with a default implementation.
The abstract encode() and matches() methods are also the ones that you most often hear about when dealing with a PasswordEncoder implementation.

The purpose of the encode(CharSequence rawPassword) method is to return a transformation of a provided string. In terms of Spring Security functionality, it’s used
to provide encryption or a hash for a given password.

You can use the matches(CharSequence rawPassword, String encodedPassword) method afterward to check whether an encoded string matches a raw password. You use the matches() method in the authentication process to test a provided password against a set of known credentials. 

The third method, called upgradeEncoding(CharSequence encodedPassword),defaults to false in the contract. If you override it to return true, then the encoded password is encoded again for better security.
In some cases, encoding the encoded password can make it more challenging to obtain the cleartext password from the result. 


`Implementing your PasswordEncoder`:- The two methods matches() and encode() have a strong relationship. If you override them, they should always correspond in terms of functionality: a string returned by the encode() method should always be verifiable with the matches() method of the same PasswordEncoder.
Managing passwords in cleartext is what the instance of NoOpPasswordEncoder is precisely.

The simplest implementation of PasswordEncoder:-

```java
public class PlainTextPasswordEncoder implements PasswordEncoder {

  @Override
  public String encode(CharSequence rawPassword) {
    return rawPassword.toString();
  }

  @Override
  public boolean matches( CharSequence rawPassword, String encodedPassword) {
    return rawPassword.equals(encodedPassword);
  }

}
```

A simple implementation of PasswordEncoder that uses the hashing algorithm SHA-512 looks like the next listing.We use a method to hash the string value provided with SHA-512.We call this method from the encode() method, which now returns the hash value for its input. To validate a hash against an input, the matches() method hashes the raw password in its input and compares it for equality with the hash against which it does the validation.


```java
public class PlainTextPasswordEncoder implements PasswordEncoder {

  @Override
  public String encode(CharSequence rawPassword) {
    return hashWithSHA512(rawPassword.toString());
  }

  @Override
  public boolean matches( CharSequence rawPassword, String encodedPassword) {
    String hashedPassword = encode(rawPassword);
    return encodedPassword.equals(hashedPassword);
  }

}
```


The implementation of the method to hash the input with SHA-512:-


```java
private String hashWithSHA512(String input) {
  StringBuilder result = new StringBuilder();
  try {
    MessageDigest md = MessageDigest.getInstance("SHA-512");
    byte [] digested = md.digest(input.getBytes());
    for (int i = 0; i < digested.length; i++) {
      result.append(Integer.toHexString(0xFF & digested[i]));
    }
  } catch (NoSuchAlgorithmException e) {
    throw new RuntimeException("Bad algorithm");
  }
    return result.toString();
}
```


Spring Security already provides you with some advantageous implementations. If one of these matches your application, you don’t need to rewrite it.The PasswordEncoder implementation options that Spring Security provides. These are:-

1. `NoOpPasswordEncoder` — Doesn’t encode the password but keeps it in cleartext.We use this implementation only for examples. Because it doesn’t hash the password, you should never use it in a real-world scenario.
2. `StandardPasswordEncoder` — Uses SHA-256 to hash the password. This implementation is now deprecated, and you shouldn’t use it for your new implementations.
It’s deprecated because it uses a hashing algorithm that we don’t consider strong enough anymore, but you might still find this implementation used in existing
applications. Preferably, if you find it in existing apps, you should change it with some other, more powerful password encoder.
3. `Pbkdf2PasswordEncoder`—Uses the password-based key derivation function 2 (PBKDF2).
4. `BCryptPasswordEncoder` —Uses a bcrypt strong hashing function to encode the password.
5. `SCryptPasswordEncoder` —Uses a scrypt hashing function to encode the password.




The NoOpPasswordEncoder doesn’t encode the password.For this reason, we only use this password encoder with theoretical examples. Also, the NoOpPasswordEncoder class is designed as a singleton. You can’t call its constructor directly from outside the class, but you can use the `NoOpPasswordEncoder.getInstance()` method to obtain the instance of the class:-

```java
PasswordEncoder p = NoOpPasswordEncoder.getInstance();
```

The StandardPasswordEncoder implementation provided by Spring Security uses SHA-256 to hash the password. For the StandardPasswordEncoder, you can provide a secret used in the hashing process. You set the value of this secret by the constructor’s parameter. If you choose to call the no-arguments constructor, the implementation
uses the empty string as a value for the key. However, the StandardPasswordEncoder is deprecated now, and I don’t recommend that you use it with your new implementations.


```java
PasswordEncoder p = new StandardPasswordEncoder();
PasswordEncoder p = new StandardPasswordEncoder("secret");
```

The Pbkdf2PasswordEncoder implementation that uses the PBKDF2 for password encoding. To create instances of the Pbkdf2PasswordEncoder, you have the following option:

```java
PasswordEncoder p = new Pbkdf2PasswordEncoder("secret", 16, 310000, Pbkdf2PasswordEncoder.SecretKeyFactoryAlgorithm.PBKDF2WithHmacSHA256);
```

The PBKDF2 is a pretty easy, slow-hashing function that performs an HMAC as many times as specified by an iterations argument. The first three parameters received by the last call are the value of a key used for the encoding process, the number of iterations used to encode the password, and the size of the hash. The second and third parameters can influence the strength of the result. The fourth parameter gives the hash width. You can choose the following options:

1. PBKDF2WithHmacSHA1
2. PBKDF2WithHmacSHA256
3. PBKDF2WithHmacSHA512

It is possible to choose more or fewer iterations, as well as the length of the result. The longer the hash, the more powerful the password (the same is true for the hash width). However, be aware that performance is affected by these values: the more iterations, the more resources your application consumes. You should make a wise compromise between the resources consumed for generating the hash and the needed strength of the encoding.





The BCryptPasswordEncoder, which uses a bcrypt strong hashing function to encode the password. You can instantiate the BCryptPasswordEncoder by calling the no-arguments constructor. However,you also have the option to specify a strength coefficient representing the log rounds (logarithmic rounds) used in the encoding process. Moreover, you can also alter the SecureRandom instance used for encoding:

```java
PasswordEncoder p =                 new BCryptPasswordEncoder();
PasswordEncoder p = new BCryptPasswordEncoder(4);

SecureRandom s = SecureRandom.getInstanceStrong();
PasswordEncoder p = new BCryptPasswordEncoder(4, s);
```

The log rounds value that you provide affects the number of iterations the hashing operation uses. The number of iterations used is 2log rounds. For the iteration number computation, the value for the log rounds can only be between 4 and 31. You can specify this by calling one of the second or third overloaded constructors

The SCryptPasswordEncoder uses a scrypt hashing function. For the ScryptPasswordEncoder, you have the option to create its instances


```java
PasswordEncoder p = new SCryptPasswordEncoder(16384, 8, 1, 32, 64);
```

- Argon2PasswordEncoder:- Implements the Argon2 hashing algorithm, designed for secure password hashing.

```java
@Bean
public PasswordEncoder passwordEncoder() {
   return new Argon2PasswordEncoder();
}
```


`Multiple encoding strategies with DelegatingPasswordEncoder`:- In some applications, you might find it useful to have various password encoders and choose from these depending on some specific configuration. A common scenario
in which I find the DelegatingPasswordEncoder in production applications is when the encoding algorithm is changed, starting with a particular version of the application.

The DelegatingPasswordEncoder is an implementation of the PasswordEncoder interface that, instead of implementing its encoding algorithm, delegates to another
instance of an implementation of the same contract. The hash starts with a prefix naming the algorithm used to define that hash. The DelegatingPasswordEncoder delegates to the correct implementation of the PasswordEncoder based on the prefix of the password.

The Delegating­PasswordEncoder has a list of PasswordEncoder implementations to which it delegates. The DelegatingPasswordEncoder stores each of the instances
in a map. The NoOpPasswordEncoder is assigned to the key noop, while the BCryptPasswordEncoder implementation is assigned the key bcrypt. When the password has
the prefix {noop}, the DelegatingPasswordEncoder delegates the operation to the NoOpPasswordEncoder implementation. If the prefix is {bcrypt}, then the action is
delegated to the BCryptPasswordEncoder implementation


```java
@Configuration
public class ProjectConfig {

  @Bean
  public PasswordEncoder passwordEncoder() {
  Map<String, PasswordEncoder> encoders = new HashMap<>();

  encoders.put("noop", NoOpPasswordEncoder.getInstance());
  encoders.put("bcrypt", new BCryptPasswordEncoder());
  encoders.put("scrypt", new SCryptPasswordEncoder());

  return new DelegatingPasswordEncoder("bcrypt", encoders);
  } 
}
```

The DelegatingPasswordEncoder is just a tool that acts as a PasswordEncoder, so you can use it when you have to choose from a collection of implementations.
If there is no prefix, the DelegatingPasswordEncoder uses the default encoder. The default PasswordEncoder is the one given as the first parameter when constructing the DelegatingPasswordEncoder instance.


For convenience, Spring Security offers a way to create a DelegatingPasswordEncoder that has a map to all the standard provided implementations of PasswordEncoder.
The PasswordEncoderFactories class provides a createDelegatingPassword­ Encoder() static method that returns an implementation of DelegatingPassword­ Encoder with a full set of PasswordEncoder mappings and bcrypt as a default encoder:

```java
PasswordEncoder passwordEncoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();
```

**Encoding vs. encrypting vs. hashing**

1. `Encoding` refers to any transformation of a given input. For example, if we have a function x that reverses a string, function x -> y applied to ABCD produces DCBA.
2. `Encryption` is a particular type of encoding in which, to obtain the output, we provide both the input value and a key. The key makes it possible to choose afterward who should be able to reverse the function (obtain the input from the output). The simplest form of representing encryption as a function is
(x, k) -> y
where x is the input, k is the key, and y is the result of the encryption. This way, an individual who knows the key can use a known function to obtain the input from the output (y, k) -> x. We call this reverse function decryption. If the key used for encryption is the same as the one used for decryption, we usually call it a symmetric key. If we have two different keys for encryption ((x, k1) -> y) and decryption ((y, k2) -> x), then we say that the encryption is done with asymmetric keys. Then (k1, k2) is called a key pair. The key used for encryption, k1, is also referred to as the public key, while k2 is known as the private key. This way, only the owner of the private key can decrypt the data.

`Hashing` is a particular type of encoding, except the function is only one way. That is, from an output y of the hashing function, you cannot get back the input x. However, there should always be a way to check if an output y corresponds to an input x so we can understand the hashing as a pair of functions for encoding and matching. If hashing is x -> y, then we should also have a matching function (x,y) -> boolean.
Sometimes, the hashing function could also use a random value added to the input: (x,k) -> y. We refer to this value as the salt. The salt makes the function stronger, enforcing the difficulty of applying a reverse function to obtain the input from the result.


**Spring Security Crypto module(SSCM)**:-

It is the part of Spring Security that deals with cryptography. Using encryption and decryption functions and generating keys isn’t offered out of the box with the Java language, which constrains developers when adding dependencies that provide a more accessible approach to these features.
To make our lives easier, Spring Security also provides its own solution, which enables you to reduce the dependencies of your projects by eliminating the need to use a separate library. The password encoders are also part of the SSCM.

The two essential features from the SSCM:

1. `Key generators`—Objects used to generate keys for hashing and encryption algorithms
2. `Encryptors`—Objects used to encrypt and decrypt data

`Using key generators` - A key generator is an object used to generate a specific kind of key, generally required for an encryption or hashing algorithm. The
implementations of key generators that Spring Security offers are great utility tools.
You’ll prefer to use these implementations rather than adding another dependency to your application

Two interfaces represent the two main types of key generators: `BytesKey­Generator` and `StringKeyGenerator`. We can build them directly by making use of the factory class KeyGenerators. You can use a string key generator, represented by the StringKeyGenerator contract, to obtain a key as a string. Usually, we use this key as a salt value for a hashing or encryption algorithm. 

```java
public interface StringKeyGenerator {
String generateKey();
}
```

The generator has only a generateKey() method that returns a string representing the key value.

```java
StringKeyGenerator keyGenerator = KeyGenerators.string();
String salt = keyGenerator.generateKey();
```

The generator creates an 8-byte key, and it encodes that as a hexadecimal string. The method returns the result of these operations as a string. 

The second interface describing a key generator is the BytesKeyGenerator, which is defined as follows:

```java
public interface BytesKeyGenerator {
  int getKeyLength();
  byte[] generateKey();
}
```


In addition to the generateKey() method that returns the key as a byte[], the interface defines another method that returns the key length in number of bytes. A default BytesKeyGenerator generates keys of 8-byte length:

```java
BytesKeyGenerator keyGenerator = KeyGenerators.secureRandom();
byte [] key = keyGenerator.generateKey();
int keyLength = keyGenerator.getKeyLength();
```


If you want to specify a different key length, you can do this when obtaining the key generator instance by providing the desired value to the KeyGenerators.secureRandom() method:

```java
BytesKeyGenerator keyGenerator = KeyGenerators.secureRandom(16);
```

The keys generated by the BytesKeyGenerator created with the KeyGenerators.secureRandom() method are unique for each call of the generateKey() method. In
some cases, we prefer an implementation that returns the same key value for each call of the same key generator. In this case, we can create a BytesKeyGenerator with the KeyGenerators.shared(int length) method. In this code snippet, key1 and key2 have the same value:

```java
BytesKeyGenerator keyGenerator = KeyGenerators.shared(16);
byte [] key1 = keyGenerator.generateKey();
byte [] key2 = keyGenerator.generateKey();
```

## Filters

In Spring Security, HTTP filters delegate different responsibilities to an HTTP request. Furthermore, they generally manage each responsibility that must be applied to the request. The filters thus form a chain of responsibilities. A filter receives a request, executes its logic, and eventually delegates the request to the next filter in the chain
Spring Security provides filter implementations that you add to the filter chain through customization, but you can also define custom filters.
With the default implementation, you use the HTTP Basic authentication method, which allows you to rely on a username and password.
You have the option to personalize the filter chain by inserting new filters preceding, following, or in place of current ones. By doing this, you can tailor not only the authentication process but also the complete treatment of requests and responses.

`Implementing filters in the Spring Security architecture`:- The authentication filter intercepts the request and delegates authentication responsibility further to the authorization manager. If we want to execute certain logic before authentication, we do this by inserting a filter before the authentication filter.

The filters in Spring Security architecture are typical HTTP filters. We can create filters by implementing the Filter interface from the jakarta.servlet package. As for any other HTTP filter, you need to override the doFilter() method to implement its logic. This method receives the ServletRequest, ServletResponse, and FilterChain as parameters:

1. ServletRequest—Represents the HTTP request. We use the ServletRequest object to retrieve details about the request.
2. ServletResponse—Represents the HTTP response. We use the Servlet­Response object to alter the response before sending it back to the client or further along the filter chain.
3. FilterChain—Represents the chain of filters. We use the FilterChain object to forward the request to the next filter in the chain.

The filter chain represents a collection of filters with a defined order in which they act.Spring Security provides some filter implementations and their order for us. The following are among the provided filters:

1. BasicAuthenticationFilter takes care of HTTP Basic authentication, if present.
2. CsrfFilter takes care of cross-site request forgery (CSRF) protection.
3. CorsFilter takes care of cross-origin resource sharing (CORS) authorization rules.

An application doesn’t necessarily have instances of all these filters in the chain. The chain is longer or shorter, depending on how you configure the application. 
You need to call the `httpBasic()` method of the HttpSecurity class if you want to use the HTTP Basic authentication method. What happens is that if you call the httpBasic() method, an instance of BasicAuthenticationFilter is added to the chain. Similarly, depending on the configurations you write, the definition of the filter chain will be affected.

You can define the same order value for two or more filters in the filter chain. In this case, the order in which those filters having the same order value are called is not defined.You might have multiple filters with the same order value in the chain. In this case, Spring Security doesn’t guarantee the order in which they are called.

**Spring Security Filters**:- Spring Security provides a powerful and flexible filter chain to control access to application resources. Here's an overview of how the Spring Security filter chain works:

- `FilterChainProxy`:- FilterChainProxy is the central component in the Spring Security filter chain. It delegates the actual filtering to one or more security filters, which can be configured for different URLs.Several filters can be applied, each performing a specific security-related task. Some of the commonly used filters are:
  1. WebAsyncManagerIntegrationFilter: Integrates the SecurityContext with the WebAsyncManager.
  2. SecurityContextPersistenceFilter: Manages the SecurityContext persistence between requests.
  3. HeaderWriterFilter: Adds security headers to the response.
  4. CsrfFilter: Protects against Cross-Site Request Forgery attacks.
  5. LogoutFilter: Handles logout requests.
  6. UsernamePasswordAuthenticationFilter: Processes authentication requests for username and password.
  7. DefaultLoginPageGeneratingFilter: Generates a default login page.
  8. BasicAuthenticationFilter: Processes HTTP basic authentication.
  9. RequestCacheAwareFilter: Caches and retrieves previously requested URLs.
  10. SecurityContextHolderAwareRequestFilter: Makes the SecurityContext accessible through the HttpServletRequest.
  11. AnonymousAuthenticationFilter: Provides anonymous authentication support.
  12. SessionManagementFilter: Manages the security of HTTP sessions.
  13. ExceptionTranslationFilter: Translates authentication exceptions to HTTP responses.
  14. FilterSecurityInterceptor: Protects web resources by enforcing the configured access control rules.


`HttpSecurity` - HttpSecurity object in Spring Security is specifically designed to allow you to configure and add security filters to your web application, enabling you to define how different parts of your application should be secured by applying various filter types for authentication, authorization, and other security checks.
Key points about HttpSecurity and filters:

1. Adding filters:- You use methods on the HttpSecurity object like addFilter() or dedicated methods for specific filter types (e.g., formLogin() which internally adds a form login filter) to add filters to the security chain.
2. Filter chain:- When a request comes in, it will pass through the configured filters in the order they were added to the HttpSecurity object.
3. Custom filters:- You can also create your own custom filters and add them to the HttpSecurity to implement specific security logic.

It allows configuring web based security for specific http requests. By default it will be applied to all requests, but can be restricted using #requestMatcher(RequestMatcher) or other similar methods.

Methods:-

`headers`:- Adds the Security headers to the response.Returns the CorsConfigurer for customizations.
This is activated by default when using EnableWebSecurity.Accepting the default provided by EnableWebSecurity or only invoking headers() without invoking additional methods on it, is the equivalent of:

```java
@Bean
public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
          .headers((headers) ->
                headers
                  .contentTypeOptions(withDefaults())
                  .xssProtection(withDefaults())
                  .cacheControl(withDefaults())
                  .httpStrictTransportSecurity(withDefaults())
                  .frameOptions(withDefaults())
                        );
      return http.build();
}
```

You can disable the headers using the following:

```java
public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
                http
                  .headers((headers) -> headers.disable());
      return http.build();
}
```

`cors`:- Adds a CorsFilter to be used.It returns HttpSecurity for further customizations.
If a bean by the name of corsFilter is provided, that CorsFilter is used. Else if corsConfigurationSource is defined, then that CorsConfiguration is used. Otherwise, if Spring MVC is on the classpath a HandlerMappingIntrospector is used. You can enable CORS using:

```java
@Bean
public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    http
      .cors(withDefaults());
  return http.build();
}
```

`authorizeHttpRequests`:- Allows restricting access based upon the HttpServletRequest using RequestMatcher implementations (i.e. via URL patterns).Parameters:authorizeHttpRequestsCustomizer - the Customizer to provide more options for the AuthorizeHttpRequestsConfigurer.AuthorizationManagerRequestMatcherRegistry
Returns the HttpSecurity for further customizations.

```java
@Bean
public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
      http
        .authorizeHttpRequests((authorizeHttpRequests) -> authorizeHttpRequests
                                        .requestMatchers("/**").hasRole("USER")
                        )
       return http.build();
}
```

We can also configure multiple URLs. The configuration below requires authentication to every URL and will grant access to URLs starting with /admin/ to only the "admin" user. All other URLs either user can access.

```java
@Bean
public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
      http
          .authorizeHttpRequests((authorizeHttpRequests) -> authorizeHttpRequests
                                        .requestMatchers("/admin/**").hasRole("ADMIN")
                                        .requestMatchers("/**").hasRole("USER"))
      return http.build();
}
```

Note that the matchers are considered in order. Therefore, the following is invalid because the first matcher matches every request and will never get to the second mapping:

```java
http
  .authorizeHttpRequests((authorizeHttpRequests) -> authorizeHttpRequests
                          .requestMatchers("/**").hasRole("USER")
                          .requestMatchers("/admin/**").hasRole("ADMIN"));
return http.build();
```

`exceptionHandling`:- Allows configuring exception handling. This is automatically applied when using EnableWebSecurity.Returns the HttpSecurity for further customizations.

```java
http
                        // sample exception handling customization
  .exceptionHandling((exceptionHandling) -> exceptionHandling
                                        .accessDeniedPage("/errors/access-denied"));
return http.build();
```

`csrf`:- Enables CSRF protection. This is activated by default when using EnableWebSecurity.Returns the HttpSecurity for further customizations.You can disable it using:

```java
http.csrf((csrf) -> csrf.disable());
return http.build();
```

`logout`:- Provides logout support. This is automatically applied when using EnableWebSecurity. The default is that accessing the URL "/logout" will log the user out by invalidating the HTTP Session, cleaning up any rememberMe() authentication that was configured, clearing the SecurityContextHolder, and then redirect to "/login?success".

```java
http.logout((logout) -> logout
        .deleteCookies("remove")
        .invalidateHttpSession(false)
        .logoutUrl("/custom-logout")
        .logoutSuccessUrl("/logout-success"));
return http.build();
```

`formLogin`:- Specifies to support form based authentication. If FormLoginConfigurer.loginPage(String) is not specified a default login page will be generated.

```java
http.formLogin(withDefaults());
return http.build();
```

The configuration below demonstrates customizing the defaults.

```java
http.formLogin((formLogin) ->formLogin
                .usernameParameter("username")
                .passwordParameter("password")
                .loginPage("/authentication/login")
                .failureUrl("/authentication/login?failed")
                .loginProcessingUrl("/authentication/login/process"));
return http.build();
```

`httpBasic`:- Configures HTTP Basic authentication.

```java
http.httpBasic(withDefaults());
return http.build();
```

`authenticationManager`:- Configure the default AuthenticationManager.
`userDetailsService`:- Allows adding an additional UserDetailsService to be used

## Spring Security Configurations

- Java Config
- XML configuration

@EnableWebSecurity:- Add this annotation to an @Configuration class to have the Spring Security configuration defined in any WebSecurityConfigurer or more likely by exposing a SecurityFilterChain bean

SecurityFilterChain:- Defines a filter chain which is capable of being matched against an HttpServletRequest. in order to decide whether it applies to that request.Used to configure a FilterChainProxy.

WebSecurityConfigurer:- Allows customization to the WebSecurity. In most instances users will use EnableWebSecurity and create a Configuration that exposes a SecurityFilterChain bean. This will automatically be applied to the WebSecurity by the EnableWebSecurity annotation.

- **Configuring the Filter Chain**:- The filter chain can be configured using Java-based configuration (@Configuration) or XML-based configuration. Here's an example using Java-based configuration:

```java
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            .csrf().disable()
            .authorizeRequests()
                .antMatchers("/public/**").permitAll()
                .anyRequest().authenticated()
                .and()
            .formLogin()
                .loginPage("/login")
                .permitAll()
                .and()
            .logout()
                .permitAll();
    }

    @Bean
    public CustomFilter customFilter() {
        return new CustomFilter();
    }
}
```

- **Custom Filters** -You can also create and add custom filters to the filter chain. For example:

```java
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

import org.springframework.web.filter.OncePerRequestFilter;

public class CustomFilter extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {
        // Custom filter logic here
        filterChain.doFilter(request, response);
    }

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        // Initialization logic here
    }

    @Override
    public void destroy() {
        // Cleanup logic here
    }
}
```

To add the custom filter to the filter chain:

```java
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Override
protected void configure(HttpSecurity http) throws Exception {
    http
        .addFilterBefore(customFilter(), UsernamePasswordAuthenticationFilter.class)
        .csrf().disable()
        .authorizeRequests()
            .antMatchers("/public/**").permitAll()
            .anyRequest().authenticated()
            .and()
        .formLogin()
            .loginPage("/login")
            .permitAll()
            .and()
        .logout()
            .permitAll();
}
```

- **Understanding the Order**:The order in which filters are applied is crucial. Misordering can lead to unexpected behavior. Spring Security ensures the correct order by default, but custom filters need to be added in the right place.

By understanding and configuring the Spring Security filter chain correctly, you can effectively manage authentication, authorization, and other security concerns in your application.


---------------------


## Authentications

The `AuthenticationProvider` layer is responsible for the logic of authentication. The AuthenticationProvider is where you find the conditions and instructions that decide whether to authenticate a request. The component that delegates this responsibility to the AuthenticationProvider is the AuthenticationManager, which receives the request from the HTTP filter layer.

The authentication process has only two possible results:-

1. The entity making the request is not authenticated. The user is not recognized, and the application rejects the request without delegating to the authorization process. Usually, the response status sent back to the client in this case is HTTP 401 Unauthorized.
2. The entity making the request is authenticated. The details about the requester are stored so that the application can use them for authorization.SecurityContext is responsible for the details regarding the current authenticated request.

An application may require various methods of authentication implementation. Although a username and password suffice for most situations, there are instances where the process of authenticating a user may be more complex.A framework usually provides a set of the most used implementations, but of course, it cannot cover all the possible options. 
In terms of Spring Security, you can use the AuthenticationProvider contract to define any custom authentication logic.

`Authentication`:-
*Representing the request during authentication*:- Authentication is one of the essential interfaces involved in the process with the same name. The Authentication interface represents the authentication request event and holds the details of the entity that requests access to the application. You can use the information related to the authentication request event during and after the authentication process. The user requesting access to the application is called a principal.

The Authentication agreement extends the Principal agreement. It introduces additional stipulations, such as the necessity for a password or the option to provide further specifics regarding the authentication request. Certain aspects, such as the array of authorities, are specific to Spring Security.

The Authentication contract in Spring Security not only represents a principal, but it also adds information on whether the authentication process finishes, as well as a collection of authorities. The fact that this contract was designed to extend the Principal contract from Java Security is a plus in terms of compatibility with implementations of other frameworks and applications. This flexibility allows for more facile migrations to Spring Security from applications that implement authentication in another fashion.

Note that unless the Authentication has the authenticated property set to true, it will still be authenticated by any security interceptor (for method or web invocations) which encounters it.In most cases, the framework transparently takes care of managing the security context and authentication objects for you.

```java
public interface Principal{
  String getName(); // At a minimum, an individual seeking authentication must possess a name.
}

```java
public interface Authentication extends Principal, Serializable {
  Collection<? extends GrantedAuthority> getAuthorities(); // After authentication, it is essential to determine the user’s permissions. Within Spring Security, these permissions are denoted as authorities.
  Object getCredentials(); // In Spring Security’s authentication process, the user requires a confidential element: this could be a password, a code, a fingerprint, etc.
  Object getDetails(); // Should the system require additional information about the request, you can supply this by customizing the getDetails() method.
  Object getPrincipal();//The identity of the principal being authenticated. In the case of an authentication request with username and password, this would be the username. Callers are expected to populate the principal for an authentication request.The AuthenticationManager implementation will often return an Authentication containing richer information as the principal for use by the application. Many of the authentication providers will create a UserDetails object as the principal.
  boolean isAuthenticated(); // An authentication object is either authenticated or still in progress to be authenticated.
  void setAuthenticated(boolean isAuthenticated)
    throws IllegalArgumentException;
}
```

1. isAuthenticated()—Returns true if the authentication process ends or false if the authentication process is still in progress
2. getCredentials()—Returns a password or any secret used in the authentication process
3. getAuthorities()—Returns a collection of granted authorities for the authenticated request.
4. getDetails() - Stores additional details about the authentication request. These might be an IP address, certificate serial number etc.

`AuthenticationProvider`:- Indicates a class can process a specific Authentication implementation.
The AuthenticationProvider in Spring Security takes care of the authentication logic. The default implementation of the AuthenticationProvider interface delegates the responsibility of finding the system’s user to a UserDetailsService. It uses the PasswordEncoder as well for password management in the authentication process.

```java
public interface AuthenticationProvider {

  //Performs authentication with the same contract as AuthenticationManager.authenticate(Authentication) .
  Authentication authenticate(Authentication authentication)
    throws AuthenticationException;

  /*
    Returns true if this AuthenticationProvider supports the indicated Authentication object.Returning true does not guarantee an AuthenticationProvider will be able to authenticate the presented Authentication object. It simply indicates it can support closer evaluation of it. An AuthenticationProvider can still return null from the authenticate(Authentication) method to indicate another AuthenticationProvider should be tried.
  */
  boolean supports(Class<?> authentication);
}
```


The AuthenticationProvider is responsible for carrying out the authentication procedure, and the SecurityContext retains the information regarding the request that has been authenticated.The AuthenticationProvider responsibility is strongly coupled with the Authentication contract. The authenticate() method receives an Authentication object as a parameter and returns an Authentication object. We implement the authenticate() method to define the authentication logic.

- The method should throw an AuthenticationException if the authentication fails.
- If the method receives an authentication object not supported by your implementation of AuthenticationProvider, then the method should return null.This way, we have the possibility of using multiple Authentication types separated at the HTTP-filter level.
- The method should return an Authentication instance representing a fully authenticated object. For this instance, the isAuthenticated() method returns true, and it contains all the necessary details about the authenticated entity. Usually, the application also removes sensitive data, such as a password from this instance. After a successful authentication, the password is no longer required, and keeping these details can potentially expose them to unwanted eyes.

The second method in the AuthenticationProvider interface is supports (Class<?> authentication). You can implement this method to return true if the current AuthenticationProvider supports the type provided as an Authentication object. Observe that even if this method returns true for an object, there is still a chance that the authenticate() method will reject the request by returning null.
Spring Security is designed to be more flexible, allowing users to implement an AuthenticationProvider that can reject an authentication request based on its details, and not only based on its type.

The authentication manager and authentication provider work together to validate or invalidate an authentication request

The AuthenticationManager delegates to one of the available authentication providers. The AuthenticationProvider might not support the provided authentication type. However, if it does support the object type, it might not know how to authenticate that specific object. The authentication is evaluated, and an AuthenticationProvider that can say whether or not the request is correct responds to the AuthenticationManager.

If none of the AuthenticationProvider objects recognize the Authentication or any of them rejects it, the result is an AuthenticationException.
The alternative scenario where one of the Authentication­ rovider objects recognizes the Authentication but decides it’s not valid. In this case, the result will be an AuthenticationException that ends up as a 401 Unauthorized HTTP status in the HTTP response in a web app.

**AuthenticationManager**:- Processes an Authentication request.Common implementation is ProviderManager.

**ProviderManager**:-Iterates an Authentication request through a list of AuthenticationProviders.
AuthenticationProviders are usually tried in order until one provides a non-null response. A non-null response indicates the provider had authority to decide on the authentication request and no further providers are tried. If a subsequent provider successfully authenticates the request, the earlier authentication exception is disregarded and the successful authentication will be used. If no subsequent provider provides a non-null response, or a new AuthenticationException, the last AuthenticationException received will be used. If no provider returns a non-null response, or indicates it can even process an Authentication, the ProviderManager will throw a ProviderNotFoundException. A parent AuthenticationManager can also be set, and this will also be tried if none of the configured providers can perform the authentication. This is intended to support namespace configuration options though and is not a feature that should normally be required.

The exception to this process is when a provider throws an AccountStatusException, in which case no further providers in the list will be queried. Post-authentication, the credentials will be cleared from the returned Authentication object, if it implements the CredentialsContainer interface. This behaviour can be controlled by modifying the eraseCredentialsAfterAuthentication property.

`Applying custom authentication logic`:-

These steps are as follows:

1. Declare a class that implements the AuthenticationProvider contract.
2. Decide which kinds of Authentication objects are supported by the new AuthenticationProvider.
3. Implement the supports(Class<?> c) method to specify which type of authentication is supported by the AuthenticationProvider that we define.
4. Implement the authenticate(Authentication a) method to implement the authentication logic.
5. Register an instance of the new AuthenticationProvider implementation with Spring Security.


```java
@Component
public class CustomAuthenticationProvider implements AuthenticationProvider {
  // Omitted code
  @Override
  public boolean supports(Class<?> authenticationType) {
    return authenticationType
              .equals(UsernamePasswordAuthenticationToken.class);
  }
}
```

We must decide what kind of Authentication interface implementation this AuthenticationProvider supports. That depends on what type we expect to be provided as a parameter to the authenticate() method. If we don’t customize anything at the authentication filter level, then the class UsernamePasswordAuthenticationToken defines the type. This class is an implementation of the Authentication interface and represents a standard authentication request with username and password.


```java
@Component
public class CustomAuthenticationProvider implements AuthenticationProvider {

  private final UserDetailsService userDetailsService;
  private final PasswordEncoder passwordEncoder;

  @Override
  public Authentication authenticate(Authentication authentication) {
    String username = authentication.getName();
    String password = authentication.getCredentials().toString();

    UserDetails u = userDetailsService.loadUserByUsername(username);

  if (passwordEncoder.matches(password, u.getPassword())) {
    return new UsernamePasswordAuthenticationToken(
        username,
        password,
        u.getAuthorities());
  } else {
    throw new BadCredentialsException ("Something went wrong!");
  } 
  }
}
```

The AuthenticationProvider enacts a tailored authentication procedure. It confirms the authentication request by retrieving user details through a specific UserDetailsService implementation, and it validates the password using a PasswordEncoder if the password is correct. If the user is not found or the password is inaccurate, the AuthenticationProvider will raise an AuthenticationException.

- AuthenticationProvider:- Indicates a class can process a specific Authentication implementation.Implementing class includes DaoAuthenticationProvider, JaasAuthenticationProvider, JwtAuthenticationProvider,LdapAuthenticationProvider, OAuth2AuthorizationCodeAuthenticationProvider, OAuth2LoginAuthenticationProvider, OidcAuthorizationCodeAuthenticationProvider, OneTimeTokenAuthenticationProvider
  1. In-Memory Authentication:- Useful for simple applications or testing
  2. Database Authentication:- Authenticate using relational database
  3. LDAP Authentication:- Authentiate users against LDAP directory.
  4. OAuth2 and JWT:- For token-based authentication,Spring Security integrates with OAuth2 and supports JWTs for stateless application.

To plug in the new implementation of the AuthenticationProvider, we define a SecurityFilterChain bean.

```java
@Configuration
public class ProjectConfig {
  private final AuthenticationProvider authenticationProvider;

  @Bean
  public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    http.httpBasic(Customizer.withDefaults());
    http.authenticationProvider(authenticationProvider);
    http.authorizeHttpRequests(c -> c.anyRequest().authenticated());

    return http.build();
}
// Omitted code
}
```

`DaoAuthenticationProvider` - An AuthenticationProvider implementation that retrieves user details from a UserDetailsService.Used by Form Login,Basic Auth,Digest Auth,Programmatic login.
Methods:-

1. setPasswordEncoder(PasswordEncoder passwordEncoder) - Sets the PasswordEncoder instance to be used to encode and validate passwords. If not set, the password will be compared using PasswordEncoderFactories.createDelegatingPasswordEncoder()
2. setUserDetailsPasswordService(UserDetailsPasswordService userDetailsPasswordService)
3. setUserDetailsService(UserDetailsService userDetailsService)
4. public void setCompromisedPasswordChecker(CompromisedPasswordChecker compromisedPasswordChecker) - Sets the CompromisedPasswordChecker to be used before creating a successful authentication. Defaults to null.

```java
@Bean
public AuthenticationManager authenticationManager(UserDetailsService userDetailsService,PasswordEncoder passwordEncoder) {

  DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider();
  authenticationProvider.setUserDetailsService(userDetailsService);
  authenticationProvider.setPasswordEncoder(passwordEncoder);

  ProviderManager providerManager = new ProviderManager(authenticationProvider);
  providerManager.setEraseCredentialsAfterAuthentication(false);
  return providerManager;
}
```

`JwtAuthenticationProvider`:- An AuthenticationProvider implementation of the Jwt-encoded Bearer Tokens for protecting OAuth 2.0 Resource Servers.This AuthenticationProvider is responsible for decoding and verifying a Jwt-encoded access token, returning its claims set as part of the Authentication statement.Used by bearer token authentication with Spring security OAuth2 Resource server.

Scopes are translated into GrantedAuthoritys according to the following algorithm: 1. If there is a "scope" or "scp" attribute, then if a String, then split by spaces and return, or if a Collection, then simply return 2. Take the resulting Collection of Strings and prepend the "SCOPE_" keyword, adding as GrantedAuthoritys.


`JaasAuthenticationProvider`:- An AuthenticationProvider implementation that retrieves user details from a JAAS login configuration.This AuthenticationProvider is capable of validating UsernamePasswordAuthenticationToken requests contain the correct username and password.
This implementation is backed by a JAAS configuration. The loginConfig property must be set to a given JAAS configuration file. This setter accepts a Spring Resource instance. It should point to a JAAS configuration file containing an index matching the loginContextName property.

1. afterPropertiesSet() - Validates the required properties are set.
2. setLoginConfig(org.springframework.core.io.Resource loginConfig) - Set the JAAS login configuration file.
3. setRefreshConfigurationOnStartup(boolean refresh) - If set, a call to Configuration#refresh() will be made by #configureJaas(Resource) method.
4. configureJaas(org.springframework.core.io.Resource loginConfig) - Hook method for configuring Jaas.

`OAuth2LoginAuthenticationProvider`:- An implementation of an AuthenticationProvider for OAuth 2.0 Login, which leverages the OAuth 2.0 Authorization Code Grant Flow. This AuthenticationProvider is responsible for authenticating an Authorization Code credential with the Authorization Server's Token Endpoint and if valid, exchanging it for an Access Token credential.
It will also obtain the user attributes of the End-User (Resource Owner) from the UserInfo Endpoint using an OAuth2UserService, which will create a Principal in the form of an OAuth2User. The OAuth2User is then associated to the OAuth2LoginAuthenticationToken to complete the authentication.

1. authenticate(Authentication authentication) - Performs authentication with the same contract as AuthenticationManager.authenticate(Authentication) .
2. setAuthoritiesMapper(GrantedAuthoritiesMapper authoritiesMapper) - Sets the GrantedAuthoritiesMapper used for mapping OAuth2AuthenticatedPrincipal.getAuthorities() to a new set of authorities which will be associated to the OAuth2LoginAuthenticationToken.
3. supports(Class<?> authentication) - Returns true if this AuthenticationProvider supports the indicated Authentication object.

`RememberMeAuthenticationProvider`:- An AuthenticationProvider implementation that validates RememberMeAuthenticationTokens.To be successfully validated, the RememberMeAuthenticationToken.getKeyHash() must match this class' getKey().
Used by Apps with remember-me cookies.

`AnonymousAuthenticationProvider`:- Assign anonymous Authentication when no authentication exists.Used by apps that allows anonymous access.
`LdapAuthenticationProvider`:- Authenticate against LDAP/Active Directory.Used by Enterprise LDAP authentication.


**The SecurityContext**

Once the AuthenticationManager completes the authentication process successfully, it stores the Authentication instance for the rest of the request. The instance storing the Authentication object is called the security context.


The security context of Spring Security is described by the SecurityContext interface

```java
public interface SecurityContext extends Serializable {
  Authentication getAuthentication();
  void setAuthentication(Authentication authentication);
}
```

The primary responsibility of the Security­ Context is to store the Authentication object.
Spring Security offers three strategies to manage the Security­ Context with an object in the role of a manager. It’s named the SecurityContextHolder:

1. MODE_THREADLOCAL—Allows each thread to store its own details in the security context. In a thread-per-request web application, this is a common approach, as
each request has an individual thread.
2. MODE_INHERITABLETHREADLOCAL—Similar to MODE_THREADLOCAL, but it also instructs Spring Security to copy the security context to the next thread in case of
an asynchronous method. This way, we can say that the new thread running the @Async method inherits the security context. The @Async annotation is used with
methods to instruct Spring to call the annotated method on a separate thread.
3. MODE_GLOBAL—Makes all the threads of the application see the same security context instance.

`Using a holding strategy for the security context`:- The first strategy for managing the security context is the MODE_THREADLOCAL strategy, and it is also the default for managing the security context used by Spring Security.
With this strategy, Spring Security uses ThreadLocal to manage the context. ThreadLocal is an implementation provided by the JDK. This implementation works as a collection of data but ensures that each thread of the application can only see the data stored in its dedicated part of the collection. This way, each request has access to its security context. No thread will have access to another’s ThreadLocal. That means that in a web application, each request can see only its own security context. We could say that this is also what you generally want to have for a backend web application.

Being the default strategy for managing the security context, this process does not need to be explicitly configured. Just ask for the security context from the holder using the static getContext() method wherever you need it after the end of the authentication process.From the security context, you can further get the
Authentication object, which stores the details about the authenticated entity.

```java
@GetMapping("/")
public String home(){
  SecurityContext context = SecurityContextHolder.getContext();
  Authentication a = context.getAuthentication();

  return a.getName();
}
```

Obtaining the authentication from the context is even more comfortable at the endpoint level, as Spring knows to inject it directly into the method parameters. You
don’t need to refer every time to the SecurityContextHolder class explicitly.


```java
@GetMapping("/")
public String home(Authentication a){

  return a.getName();
}
```

A security context is usually associated with the current execution thread for the duration of the request, making the authentication information it contains available throughout all the layers of an application.

The SecurityContext can be accessed at any point by calling the SecurityContextHolder.

- SecurityContext:- Interface defining the minimum security information associated with the current thread of execution.The security context is stored in a SecurityContextHolder.
  1. Authentication getAuthentication() - Obtains the currently authenticated principal, or an authentication request token.
  2. void setAuthentication(Authentication authentication) - Changes the currently authenticated principal, or removes the authentication information.

- SecurityContextHolder:- Associates a given SecurityContext with the current execution thread.This class provides a series of static methods that delegate to an instance of SecurityContextHolderStrategy. The purpose of the class is to provide a convenient way to specify the strategy that should be used for a given JVM. This is a JVM-wide setting, since everything in this class is static to facilitate ease of use in calling code.
- To specify which strategy should be used, you must provide a mode setting. A mode setting is one of the three valid MODE_ settings defined as static final fields, or a fully qualified classname to a concrete implementation of SecurityContextHolderStrategy that provides a public no-argument constructor.
- There are two ways to specify the desired strategy mode String. The first is to specify it via the system property keyed on SYSTEM_PROPERTY. The second is to call setStrategyName(String) before using the class. If neither approach is used, the class will default to using MODE_THREADLOCAL, which is backwards compatible, has fewer JVM incompatibilities and is appropriate on servers (whereas MODE_GLOBAL is definitely inappropriate for server use).


**HTTP Basic and form-based login authentications**


`Using and configuring HTTP Basic`:- HTTP Basic is the default authentication method.

```java
@Configuration
public class ProjectConfig {

  @Bean
  SecurityFilterChain configure(HttpSecurity http) throws Exception {

    http.httpBasic(Customizer.withDefaults());
    return http.build();
  }
}
```

You can call the httpBasic() method of the HttpSecurity instance with a parameter of Customizer type. This parameter allows you to set up some configurations related to the authentication method, for example, the realm name.
You can think about the realm as a protection space that uses a specific authentication method.

`Implementing authentication with form-based login`:- When developing a web application, you would probably like to present a user-friendly login form where the users can input their credentials. Furthermore, you might like your authenticated users to be able to surf through the web pages after they logged in and to be able to log out. For a small web application, you can take advantage of the form-based login method.


To change the authentication method to form-based login, using the HttpSecurity object of the SecurityFilterChain bean instead of httpBasic(), call the formLogin() method of the HttpSecurity parameter.

```java
@Configuration
public class ProjectConfig {

  @Bean
  SecurityFilterChain configure(HttpSecurity http) throws Exception {

    http.httpBasic(Customizer.withDefaults());
    http.formLogin(Customizer>withDefaults());
    return http.build();
  }
}
```


Even with the minimal configuration, Spring Security has already configured a login form, as well as a log-out page for your project.

You can access the /logout path, and this should redirect you to a log-out page
The formLogin() method returns an object of type FormLoginConfigurer<HttpSecurity>, which allows us to work on customizations.

```java
@Configuration
public class ProjectConfig {

  @Bean
  SecurityFilterChain configure(HttpSecurity http) throws Exception {

    http.formLogin(c -> c.defaultSucessUrl("/home",true));
    return http.build();
  }
}
```


If you need to go even more into depth with this, using the AuthenticationSuccess­Handler and AuthenticationFailureHandler objects offers a more detailed customization approach. These interfaces let you implement an object through which you can apply the logic executed for authentication. If you want to customize the logic for successful authentication, you can define an AuthenticationSuccessHandler. The onAuthenticationSuccess() method receives the servlet request, servlet response, and the Authentication object as parameters. 



```java
@Component
public class CustomAuthenticationSuccessHandler implements AuthenticationSuccessHandler {

  @Override
  public void onAuthenticationSuccess( HttpServletRequest httpServletRequest,HttpServletResponse httpServletResponse,Authentication authentication)
    throws IOException {

    var authorities = authentication.getAuthorities();
    var auth = authorities.stream()
                  .filter(a -> a.getAuthority().equals("read"))
                  .findFirst();

    if (auth.isPresent()) {
          httpServletResponse.sendRedirect("/home");
    } else {
        httpServletResponse.sendRedirect("/error");
    }
  }
}
```


## Authorization

Authorization is the process during which the system decides whether an identified client has permission to access the requested resource.Authorization is the process during which the application decides whether an authenticated entity is allowed to access a resource.
Authorization always happens after authentication.

Once an application determines your identity, the crucial phase of deciding your permissions ensues: authorization. Implementing it correctly is pivotal,
as missteps can compromise user privacy and data integrity.


**Configuring endpoint-level authorization: Restricting**:- Authorization is the process during which the system decides whether an identified client has permission to access the requested resource.Authorization always happens after authentication.


In Spring Security, once the application ends the authentication flow, it delegates the request to an authorization filter. The filter allows or rejects the request based on the configured authorization rules.

1. The client makes a request.
2. After a successful authentication, the user details are stored in the security context. The request is delegated to the authorization filter.
3. The authorization filter decides whether to allow the request.
4. If authorized, the request is forwarded to the controller.

Upon the client’s request initiation, the authentication filter verifies the user’s identity.Following successful verification, the authentication filter places the user’s details into the security context and passes the request on to the authorization filter. This filter then assesses whether the request should be allowed. It makes this determination using the user information provided in the security context


`Restricting access based on authorities and roles`:- Based on the privileges users have, they can only execute a specific action. The application provides privileges as authorities and roles.

A user possesses one or more authorities (permissible actions). Throughout the  authentication phase, the UserDetailsService retrieves comprehensive details about the user,encompassing their authorities. Following a successful authentication, the application employs these authorities, as depicted by the GrantedAuthority interface, to carry out authorization.


An authority is an action that a user can perform with a system resource. An authority has a name that the getAuthority() behavior of the object returns as a String. We use the name of the authority when defining the custom authorization rule.


```java
public interface GrantedAuthority extends Serializable {
  String getAuthority();
}
```


The UserDetails, which is the contract describing the user in Spring Security, has a collection of GrantedAuthority instances.You can allow a user one or more privileges. The getAuthorities() method returns the collection of GrantedAuthority instances.We implement this method so that it returns all the authorities granted for the user. After the authentication ends, the authorities become part of the details about the user that logged in, which the application can use to grant
permissions.


```java
public interface UserDetails extends Serializable {

  Collection<? extends GrantedAuthority> getAuthorities();
    // Omitted code
}
```


`Restricting access for all endpoints based on user authorities`:- Authorities define the permissible operations users can execute within the application. These operations inform the creation of authorization protocols, restricting certain requests to endpoints to users with designated authorities. For instance, Jane is limited to reading and writing at the endpoint, whereas John has the capacity to read, write, delete, and modify at that endpoint.


There are three ways in which you can configure access using these methods:

1. hasAuthority()—Receives as parameters only one authority for which the application configures the restrictions. Only users having that authority can call
the endpoint.
2. hasAnyAuthority()—Can receive more than one authority for which the application configures the restrictions. I remember this method as “has any of the
given authorities.” The user must have at least one of the specified authorities to make a request.I recommend using this method or the hasAuthority() method for their simplicity, depending on the number of privileges you assign. These are simple to read in configurations and make your code easier to understand.
3. access()—Offers unlimited possibilities for configuring access because the application builds the authorization rules based on a custom object named
AuthorizationManager that you implement. You can provide any implementation for the AuthorizationManager contract, depending on your case. Spring
Security provides a few implementations as well. The most common implementation is the WebExpressionAuthorizationManager, which helps you apply
authorization rules based on Spring Expression Language (SpEL). But using the access() method can make the authorization rules more difficult to read and
understand. For this reason, I recommend it as the lesser solution and only if you cannot apply the hasAnyAuthority() or hasAuthority() methods.

```java
```java
@Configuration
public class ProjectConfig {

  @Bean
  public UserDetailsService userDetailsService() {
  var manager = new InMemoryUserDetailsManager();

  var user1 = User.withUsername("john")
                  .password("12345")
                  .authorities("read")
                  .build();

  var user2 = User.withUsername("jane")
                .password("12345")
                .authorities("write","read")
                .build();

  manager.createUser(user1);
  manager.createUser(user2);

  return manager;
  }
  // Omitted code
}
```


```java
@Configuration
public class ProjectConfig {

  @Bean
  public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    http.httpBasic(Customizer.withDefaults());
    http.authorizeHttpRequests( c -> c.anyRequest().permitAll());
    return http.build();
}
}
```


The authorizeHttpRequests() method lets us continue with specifying authorization rules on endpoints. The anyRequest() method indicates that the rule applies
to all the requests, regardless of the URL or HTTP method used. The permitAll() method allows access to all matched requests, authenticated or not.



```java
@Configuration
public class ProjectConfig {

  @Bean
  public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    http.httpBasic(Customizer.withDefaults());
    http.authorizeHttpRequests( c -> c.anyRequest().hasAuthority("WRITE"));
    return http.build();
}
}
```


You provide the name of the authority allowed to the user as a parameter of the hasAuthority() method. The application needs to authenticate the request first,
and then, based on the user’s authorities, the app decides whether to allow the call.


```java
@Configuration
public class ProjectConfig {

  @Bean
  public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    http.httpBasic(Customizer.withDefaults());
    http.authorizeHttpRequests( c -> c.anyRequest().hasAnyAuthority("WRITE","READ"));
    return http.build();
}
}
```




The access() method is more general, however. It receives as a parameter an AuthorizationManager implementation. You can provide any implementation for this object that can apply any kind of logic that defines the authorization rules. This method is powerful, and it doesn’t refer only to authorities.However, this method also makes the code more difficult to read and understand.



```java
@Configuration
public class ProjectConfig {

  @Bean
  public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    http.httpBasic(Customizer.withDefaults());
    http.authorizeHttpRequests( c -> c.anyRequest().access("hasAnyAuthority('WRITE')")
    );
    return http.build();
  }
}
```



`Restricting access for all endpoints based on user roles`:- Roles are another way to refer to what a user can do.

Roles are coarse grained. Each user with a specific role can only do the actions granted by that role. When applying this philosophy in authorization, a request is allowed based on the purpose of the user in the system. Only users who have a specific role can call a certain endpoint.


Spring Security understands authorities as fine-grained privileges on which we apply restrictions. Roles are like badges for users. These give a user privileges for a group of actions. Some applications always provide the same groups of authorities to specific users.



NOTE:- When using an approach with roles in the application, you won’t have to define authorities anymore. The authorities exist, in this case as a concept,
and can appear in the implementation requirements. But in the application, you only have to define a role to cover one or more such actions a user is privileged
to do.


Roles are represented using the same contract in Spring Security, GrantedAuthority. When defining a role, its name should start with the ROLE_ prefix. At the implementation level, this prefix specifies the difference between a role and an authority.



```java
@Configuration
public class ProjectConfig {

  @Bean
  public UserDetailsService userDetailsService() {
  var manager = new InMemoryUserDetailsManager();

  var user1 = User.withUsername("john")
                  .password("12345")
                  .authorities("ROLE_ADMIN")
                  .build();

  var user2 = User.withUsername("jane")
                .password("12345")
                .authorities("ROLE_MANAGER")
                .build();

  manager.createUser(user1);
  manager.createUser(user2);

  return manager;
  }
  // Omitted code
}
```


To set constraints for user roles, you can use one of the following methods:

1. hasRole()—Receives as a parameter the role name for which the application authorizes the request.
2. hasAnyRole()—Receives as parameters the role names for which the application approves the request.
3. access()—Uses an AuthorizationManager to specify the role or roles for which the application authorizes requests. In terms of roles, you could use hasRole()
or hasAnyRole() as SpEL expressions together with the WebExpression­ AuthorizationManager implementation.



```java
@Configuration
public class ProjectConfig {

  @Bean
  public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    http.httpBasic(Customizer.withDefaults());
    http.authorizeHttpRequests( c -> c.anyRequest().hasRole("ADMIN"));
    return http.build();
  }
}
```


NOTE:- A critical thing to observe is that we use the ROLE_ prefix only to declare the role. But when we use the role, we do it only by its name.

Make sure the parameter you provide for the roles() method does not include the ROLE_ prefix. If that prefix is inadvertently included in the role() parameter, the method throws an exception. In short, when using the authorities() method, include the ROLE_ prefix. When using the roles() method, do not include the ROLE_ prefix.

```java
@Configuration
public class ProjectConfig {
  @Bean
  public UserDetailsService userDetailsService() {
    var manager = new InMemoryUserDetailsManager();

    var user1 = User.withUsername("john")
                    .password("12345")
                    .roles("ADMIN")
                    .build();

    var user2 = User.withUsername("jane")
                    .password("12345")
                    .roles("MANAGER")
                    .build();
  manager.createUser(user1);
  manager.createUser(user2);
  return manager;
  }
// Omitted code
}
```





`Restricting access to all endpoints`:- The denyAll() method is just the opposite of the permitAll()method.The permitAll() method, you can permit access for all requests.

```java
http.authorizeHttpRequests(
c -> c.anyRequest().denyAll()
);
```


- **Applying Restrictions**:- To choose the requests to which we apply authorization configuration, we use the requestMatchers() method.


```java
http.authorizeHttpRequests(
  c -> c.requestMatchers("/hello").hasRole("ADMIN")
        .requestMatchers("/ciao").hasRole("MANAGER")
        .anyRequest().permitAll()
);
```

NOTE When you use matchers to refer to requests, the order of the rules should be from particular to general. This is why the anyRequest() method cannot be called before a more specific requestMatchers() method.


You could decide, of course, to make all the other endpoints accessible only for authenticated users. To do this, you would change the permitAll() method with authenticated() as presented in the following listing. Similarly, you could even deny all other requests by using the denyAll() method.


```java
.anyRequest().authenticated()
```


Using the requestMatchers() method is a common approach to refer to requests for applying authorization configuration. Thus, I expect you to have many opportunities to use this method to refer to requests in the applications you develop.
This matcher uses the standard ANT syntax for referring to paths. The syntax is the same as the one you use when writing endpoint mappings with annotations such as @RequestMapping, @GetMapping, @PostMapping, and so forth. The two methods you can use to declare MVC matchers are:-

1. requestMatchers(HttpMethod method, String... patterns)—Lets you specify both the HTTP method to which the restrictions apply and the paths.This method is useful if you want to apply different restrictions for different HTTP methods for the same path.
2. requestMatchers(String... patterns)—Simpler and easier to use if you only need to apply authorization restrictions based on paths. The restrictions can automatically apply to any HTTP method used with the path.



## Authorization at method level

Method security allows you to be more granular and apply authorization rules at any specifically chosen level of your application.

Applying authorization rules at the method level allows you to be more specific with the action to which the rules apply. For example, you can apply the authorization rules that apply specifically to invoice generation at the invoice generator.

For non-web applications, method security allows us to implement authorization rules even if we don’t have endpoints. In web applications, this approach gives us the flexibility to apply authorization rules to different app layers, not just at the endpoint level.



`Enabling method security`:- By default, method security is disabled, so if you want to use this functionality, you first need to enable it. Furthermore, method security offers multiple approaches for applying authorization.

You can do two main things with global method security:
1. Call authorization — Decides whether someone can call a method according to some implemented privilege rules (preauthorization) or if someone can access what the method returns after the method executes (postauthorization).
2. Filtering — Decides what a method can receive through its parameters (prefiltering) and what the caller can receive back from the method after the method executes (postfiltering).

One of the approaches for configuring authorization rules used with method security is call authorization. The call authorization approach refers to applying authorization rules that decide if a method can be called or that allow the method to be called and then decide if the caller can access the value returned by the method. Often, we need to decide if someone can access a piece of logic depending on either the provided parameters or its result.

When we enable method security in our application, we actually enable a
Spring aspect. This aspect intercepts the calls to the method for which we apply authorization rules, and based on these authorization rules, it decides whether to forward the call to the intercepted method























The Spring Security framework provides the WebSecurity and HttpSecurity classes to provide both global and resource-specific mechanisms to restrict access to APIs and assets. The WebSecurity class helps to configure security at a global level, while HttpSecurity provides methods to configure security for a specific resource.

**HttpSecurity**:- The HttpSecurity class helps to configure security for specific HTTP requests.Also, it permits using the requestMatcher() method to restrict security configuration to a specific HTTP endpoint.

To enable HTTP Security in Spring, we need to create a SecurityFilterChain bean.

Furthermore, it provides flexibility to configure authorization for a specific HTTP request. We can create a role-based authentication with the hasRole() method.

```java
@Bean
SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    http.authorizeHttpRequests((authorize) -> authorize.requestMatchers("/admin/**")
      .authenticated()
      .anyRequest()
      .permitAll())
      .formLogin(withDefaults());
    return http.build();
}
```

In the code above, we use the HttpSecurity class to restrict access to the “/admin/**” endpoint. Any request made to the endpoint will require authentication before access is granted.

Furthermore, HttpSecurity provides a method to configure authorization for a restricted endpoint. Let’s modify our example code to permit only a user with an admin role to access the “/admin/**” endpoint:

```java
// ...
http.authorizeHttpRequests((authorize) -> authorize.requestMatchers("/admin/**").hasRole("ADMIN"))
// ...
```

```java
@Bean 
 public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http.authorizeRequests()
      .anyRequest().authenticated()
      .and().httpBasic();
    return http.build();
}
```

The above configuration makes sure any request to the application is authenticated with form based login or HTTP basic authentication.

Also, it is exactly similar to the following XML configuration:

```xml
<http>
    <intercept-url pattern="/**" access="isAuthenticated()"/>
    <form-login />
    <http-basic />
</http>
```

Form Login - Interestingly, Spring Security generates a login page automatically, based on the features that are enabled and using standard values for the URL which processes the submitted login:

```java
@Bean
public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http.authorizeRequests()
      .anyRequest().authenticated()
      .and().formLogin()
      .loginPage("/login").permitAll();
    return http.build();
}
```

Here the automatically generated login page is convenient to get up and running quickly.

**WebSecurity**:- The WebSecurity class helps to configure security at a global level in a Spring application. We can customize WebSecurity by exposing the WebSecurityCustomizer bean.Unlike the HttpSecurity class, which helps configure security rules for specific URL patterns or individual resources, WebSecurity configuration applies globally to all requests and resources.

Furthermore, it provides methods to debug logging for Spring Security filters, ignore security checks for certain requests and resources, or configure a firewall for a Spring application.

Additionally, the WebSecurity class provides a method named ignoring(). The ignoring() method helps Spring Security to ignore an instance of a RequestMatcher. It’s recommended that register requests are of only static resources.

Here’s an example that uses the ignoring() method to ignore static resources in a Spring application:

```java
@Bean
WebSecurityCustomizer ignoringCustomizer() {
    return (web) -> web.ignoring().requestMatchers("/resources/**", "/static/**");
}
```

Here, we use the ignoring() method to bypass static resources from a security check.

Notably, Spring advises that the ignoring() method shouldn’t be used for dynamic requests but only for static resources because it bypasses the Spring Security filter chain. This is recommended for static assets like CSS, images, etc.

However, dynamic requests need to pass through authentication and authorization to provide different access rules because they carry sensitive data. Also, if we ignore dynamic endpoints completely, we lose total security control. This could open an application for different attacks like CSRF attacks or SQL injection.

The debug() Method

Additionally, the debug() method enables logging of Spring Security internals to assist with debugging configuration or request failures. This could be helpful in diagnosing security rules without the need for a debugger.

Let’s see an example code that uses the debug() method to debug security:

```java
@Bean
WebSecurityCustomizer debugSecurity() {
    return (web) -> web.debug(true);
}
```

Here, we invoke debug() on the WebSecurity instance and set it to true. This globally enables debug logging across all security filters.

The httpFirewall() Method

Also, the WebSecurity class provides the httpFirewall() method to configure a firewall for a Spring application. It helps to set rules to permit certain actions at the global level.

Let’s use the httpFirewall() method to determine which HTTP methods should be allowed in our application:

```java
@Bean
HttpFirewall allowHttpMethod() {
    List<String> allowedMethods = new ArrayList<String>();
    allowedMethods.add("GET");
    allowedMethods.add("POST");
    StrictHttpFirewall firewall = new StrictHttpFirewall();
    firewall.setAllowedHttpMethods(allowedMethods);
    return firewall;
}

@Bean
WebSecurityCustomizer fireWall() {
    return (web) -> web.httpFirewall(allowHttpMethod());
}
```

In this tutorial, we’ll look in detail at the key usage of HttpSecurity and WebSecurity. Also, we’ll see the differences between the two classes.

HttpSecurity and WebSecurity configurations can work together to provide global and resource-specific security rules.

However, if similar security rules are configured in both, the WebSecurity configuration takes the highest precedence:

```java
@Bean
WebSecurityCustomizer ignoringCustomizer() {
    return (web) -> web.ignoring().antMatchers("/admin/**");
}

// ...
 http.authorizeHttpRequests((authorize) -> authorize.antMatchers("/admin/**").hasRole("ADMIN"))
// ...
```

Two main areas that Spring Security targets:

1. “Authentication” is the process of establishing a principal is who they claim to be (a “principal” generally means a user,device or some other system which can perform an action in your application).
2. “Authorization” refers to the process of deciding whether a principal is allowed to perform an action within your application.To arrive at the point where an authorization decision is needed, the identity of the principal has already been established by the authentication process

Spring security is a framework for in Spring ecosystem for securing Java applications.It is highly customizable and can be integreted in web applications and RESful web services.It provides features i.e authentication,authorization,protection against common vulnerabilities and intergration with various security standards and protocols.

Spring Security provides comprehensive security services for J2EE-based enterprise software applications. There is a particular emphasis on supporting projects built using The Spring Framework,which is the leading J2EE solution for enterprise software development. If you're not using Spring for developing enterprise applications, we warmly encourage you to take a closer look at it. Some familiarity with Spring - and in particular dependency injection principles - will help you get up to speed with Spring Security more easily.

- Auhentication

At an authentication level, Spring Security supports a wide range of authentication models. Most of these authentication models are either provided by third parties, or are developed by relevant standards bodies such as the Internet Engineering Task Force. In addition, Spring Security provides its own set of authentication features. Specifically, Spring Security currently supports authentication integration with all of these technologies:

1. HTTP BASIC authentication headers (an IEFT RFC-based standard)
2. HTTP Digest authentication headers (an IEFT RFC-based standard)
3. HTTP X.509 client certificate exchange (an IEFT RFC-based standard)
4. LDAP (a very common approach to cross-platform authentication needs, especially in large environments)
5. Form-based authentication (for simple user interface needs)
6. OpenID authentication
7. Authentication based on pre-established request headers (such as Computer Associates Siteminder)
8. JA-SIG Central Authentication Service (otherwise known as CAS, which is a popular open source single sign on system)
9. Transparent authentication context propagation for Remote Method Invocation (RMI) and HttpInvoker (a Spring remoting protocol)
10. Automatic "remember-me" authentication (so you can tick a box to avoid re-authentication for a predetermined period of time)
11. Anonymous authentication (allowing every call to automatically assume a particular security identity)Spring Security

- Authorization: -Supports role-based access control(RBAC) and permission-based access control.Provides fine-grained control over URLs,methods and resources.

- Protection Against Attacks:-
   1. Cross-Site Scripting(XSS):- Escapes malicious input in web responses.
   2. Cross-Site Request Forgery(CSRF):- Protects against unauthorized actions from authenticated users.
   3. Session Fixation:- Prevents session hijacking
   4. Clickjacking:- Defends against UI redness attacks.

- Intergration:- Works seamlessly with other Spring projects i.e Spring MVC,Spring Boot.It also supports OAuth2,OpenID Connect,SAML and JWT for modern authentication.

## Spring Security Features

1. Authorization:This functionality is provided by Spring Security and allows the user to be authorized before accessing resources. It enables developers to set access controls for resources.
2. Single sign-on:  This feature allows a user to utilize a single account to access different apps (user name and password).
3. Software Localization: This capability enables us to create user interfaces for applications in any language.
4. Remember-me: With the help of HTTP Cookies, Spring Security provides this capability. It remembers the user and prevents them from logging in from the same workstation until they log out.
5. LDAP (Lightweight Directory Access Protocol): That is an open application protocol for managing and interacting with dispersed directory information services over the Internet Protocol.
6. JAAS (Java Authentication and Authorization Service) LoginModule: This is a Java-based Pluggable Authentication Module. It is supported by Spring Security’s authentication procedure.
7. Web Form Authentication: Web forms capture and authenticate user credentials from the web browser during this procedure. While we wish to build web form authentication, Spring Security supports it.
8. Digest Access Authentication: We can make the authentication procedure more secure with this functionality than with Basic Access Authentication. Before delivering sensitive data over the network, it requests that the browser verify the user’s identity.
9. HTTP Authorization:Using Apache Ant paths or regular expressions, Spring provides this functionality for HTTP authorization of web request URLs.
10. Basic Access Authentication: Spring Security has support for Basic Access Authentication, which is used to give a user name and password when performing network requests.

## Features Added in Spring Security 6.0

1. OAuth 2.0 Login: This feature allows users to connect to the app using their current GitHub or Google accounts. The Authorization Code Grant defined in the OAuth 2.0 Authorization Framework is used to implement this functionality.
2. Reactive Support: Spring Security 6.0 adds support for reactive programming and reactive web runtimes, as well as the ability to interact with Spring WebFlux.
3. Modernized Password Encoding: Spring Security 6.0 introduces the DelegatingPasswordEncoder, a new way to store passwords. The format for storing passwords is: {id} encodedPassword. List of ids for various password encoders are:

    - {bcrypt}$2a$10$dXJ3SW6G7P50lGmMkkmwe.20cQQubK3.HZWzG3YB1tlRy.fqvM/BG
    - {noop}password
    - {pbkdf2}5d923b44a6d129f3ddf3e3c8d29412723dcbde72445e8ef6bf3b508fbf17fa4ed4d6b99ca763d8dc
    - {scrypt}$e0801$8bWJaSu2IKSn9Z9kM+TPXfOc/9bdYSrN1oD9qfVThWEwdRTnO7re7Ei+fUZRJ68k9lTyuTeUp4of4g24hHnazw==$OAOec05+bXxvuu/1qZ6NUR+xQYvYv7BeL1QxwRpY5Pc=
    - {sha256}97cde38028ad898ebc02e690819fa220e88c62e0699403e94fff291cfffaf8410849f27605abcbc0

requestMatchers() configures if an URL will be processed by that SecurityFilterChain. So if an URL does not match it , the whole SecurityFilterChain will be skipped which means Spring Security will not handle this URL after that. If you do not configure it , the default is to match all URLs.

The authorizeRequests() configures the authorisation stuff for an URL such as things like if it requires to be authenticated or if only certain roles can access it etc. It only has effect for those URLs that are processed by that SecurityFilterChain (i.e. Those URLs that are matched by requestMatchers())

## Core

Core classes and interfaces related to user authentication and authorization, as well as the maintenance of a security context.

AuthenticatedPrincipal- Representation of an authenticated Principal once an Authentication request has been successfully authenticated by the AuthenticationManager.authenticate(Authentication) method.
Authentication - Represents the token for an authentication request or for an authenticated principal once the request has been processed by the AuthenticationManager.authenticate(Authentication) method.
AuthenticationException- Abstract superclass for all exceptions related to an Authentication object being invalid for whatever reason.
CredentialsContainer- Indicates that the implementing object contains sensitive data, which can be erased using the eraseCredentials method.
GrantedAuthority - Represents an authority granted to an Authentication object.
SpringSecurityCoreVersion- Internal class used for checking version compatibility in a deployed application.
SpringSecurityMessageSource- The default MessageSource used by Spring Security.
Transient - A marker for Authentications that should never be stored across requests, for example a bearer token authentication

Authentication:- Represents the token for an authentication request or for an authenticated principal once the request has been processed by the AuthenticationManager.authenticate(Authentication) method.

Once the request has been authenticated, the Authentication will usually be stored in a thread-local SecurityContext managed by the SecurityContextHolder by the authentication mechanism which is being used. An explicit authentication can be achieved, without using one of Spring Security's authentication mechanisms, by creating an Authentication instance and using the code:

```java
 SecurityContext context = SecurityContextHolder.createEmptyContext();
 context.setAuthentication(anAuthentication);
 SecurityContextHolder.setContext(context);
```

Note that unless the Authentication has the authenticated property set to true, it will still be authenticated by any security interceptor (for method or web invocations) which encounters it.

In most cases, the framework transparently takes care of managing the security context and authentication objects for you.

## authentication

Core classes and interfaces related to user authentication, which are used throughout Spring Security.
Of key importance is the AuthenticationManager and its default implementation ProviderManager, which maintains a list AuthenticationProviders to which it delegates authentication requests.

- AuthenticationManager - This is a functional interface and can therefore be used as the assignment target for a lambda expression or method reference.Processes an Authentication request.
  - Authentication authenticate(Authentication authentication) - Attempts to authenticate the passed Authentication object, returning a fully populated Authentication object (including granted authorities) if successful.
An AuthenticationManager must honour the following contract concerning exceptions:
  1. A DisabledException must be thrown if an account is disabled and the AuthenticationManager can test for this state.
  2. A LockedException must be thrown if an account is locked and the AuthenticationManager can test for account locking.
  3. A BadCredentialsException must be thrown if incorrect credentials are presented. Whilst the above exceptions are optional, an AuthenticationManager must always test credentials.

Exceptions should be tested for and if applicable thrown in the order expressed above (i.e. if an account is disabled or locked, the authentication request is immediately rejected and the credentials testing process is not performed). This prevents credentials being tested against disabled or locked accounts.
Implementing class include ObservationAuthenticationManager, ProviderManager.

- AuthenticationProvider:- Indicates a class can process a specific Authentication implementation.Implementing class includes DaoAuthenticationProvider, JaasAuthenticationProvider, JwtAuthenticationProvider,LdapAuthenticationProvider, OAuth2AuthorizationCodeAuthenticationProvider, OAuth2LoginAuthenticationProvider, OidcAuthorizationCodeAuthenticationProvider, OneTimeTokenAuthenticationProvider
  1. In-Memory Authentication:- Useful for simple applications or testing
  2. Database Authentication:- Authenticate using relational database
  3. LDAP Authentication:- Authentiate users against LDAP directory.
  4. OAuth2 and JWT:- For token-based authentication,Spring Security integrates with OAuth2 and supports JWTs for stateless application.

- ProviderManager:- Iterates an Authentication request through a list of AuthenticationProviders.AuthenticationProviders are usually tried in order until one provides a non-null response. A non-null response indicates the provider had authority to decide on the authentication request and no further providers are tried. If a subsequent provider successfully authenticates the request, the earlier authentication exception is disregarded and the successful authentication will be used. If no subsequent provider provides a non-null response, or a new AuthenticationException, the last AuthenticationException received will be used. If no provider returns a non-null response, or indicates it can even process an Authentication, the ProviderManager will throw a ProviderNotFoundException. A parent AuthenticationManager can also be set, and this will also be tried if none of the configured providers can perform the authentication. This is intended to support namespace configuration options though and is not a feature that should normally be required.
- The exception to this process is when a provider throws an AccountStatusException, in which case no further providers in the list will be queried. Post-authentication, the credentials will be cleared from the returned Authentication object, if it implements the CredentialsContainer interface. This behaviour can be controlled by modifying the eraseCredentialsAfterAuthentication property.

### OAuth2

Spring Security’s OAuth 2.0 support consists of two primary feature sets:

   1. OAuth2 Resource Server
   2. OAuth2 Client

- OAuth2 Resource Server

Protect Access with an OAuth2 Access Token
It is very common to protect access to an API using OAuth2 access tokens. In most cases, Spring Security requires only minimal configuration to secure an application
with OAuth2

There are two types of Bearer tokens supported by Spring Security which each use a different component for validation:
• JWT support uses a JwtDecoder bean to validate signatures and decode tokens
• Opaque token support uses an OpaqueTokenIntrospector bean to introspect tokens

JWT Support
The following example configures a JwtDecoder bean using Spring Boot configuration properties:

```yaml
spring:
 security:
  oauth2:
  resourceserver:
   jwt:
    issuer-uri: https://my-auth-server.com
```

Opaque Token Support
The following example configures an OpaqueTokenIntrospector bean using Spring Boot configuration properties:

```yaml
spring:
 security:
  oauth2:
  resourceserver:
   opaquetoken:
    introspection-uri: https://my-auth-server.com/oauth2/introspect
    client-id: my-client-id
    client-secret: my-client-secret
```

You can add trace leve of logging to check the logs

## CSRF(cross-site request forgery)

CSRF is a widespread type of attack, and vulnerable applications can force users to execute unwanted actions on a web application following authentication.

CSRF attacks assume that a user is logged into a web application. The attacker tricks users into opening a page containing scripts that execute actions in the same application the user was working on. Because the user has already logged in (as we’ve assumed from the beginning), the forgery code can now impersonate the user and do actions on their behalf.

The reason why you can’t call an endpoint with HTTP POST directly is because of CSRF protection, which is enabled by default in Spring Security.

CSRF protection aims to ensure that only the frontend of web applications can perform mutating operations (by convention, HTTP methods other than GET, HEAD, TRACE, or OPTIONS). Then a foreign page can’t act on behalf of the user.
What you know for sure is that before being able to do any action that could change data, a user must send a request using HTTP GET to see the web page at least once. When this happens, the application generates a unique token. The application now accepts only requests for mutating operations (POST, PUT, DELETE, etc.) that contain this unique value in the header.

The application considers that knowing the token’s value is proof that it is the app itself making the mutating request and not another system. Any page containing mutating calls, such as POST, PUT, DELETE, and so on, should receive through the CSRF token the response, and the page must use this token when making mutating calls.

The starting point of CSRF protection is a filter in the filter chain called Csrf­ Filter. The CsrfFilter intercepts requests and allows all those that use these HTTP methods: GET, HEAD, TRACE, and OPTIONS. For all other requests, the filter expects to receive a header containing a token. If this header does not exist or contains an incorrect token value, the application rejects the request and sets the response status to HTTP 403 Forbidden.

These tokens are string values. You must add the token in the request’s header when you use any method other than GET, HEAD, TRACE, or OPTIONS. If you don’t do this, the application doesn’t accept the request.

The CsrfFilter uses a component named CsrfTokenRepository to manage the CSRF token values that generate new tokens, store tokens, and eventually invalidate these. By default, the CsrfTokenRepository stores the token on the HTTP session and generates the tokens as random string values.You can use your own implementation of CsrfTokenRepository if the default one doesn’t apply to the requirements you need to implement.


The CsrfFilter adds the generated CSRF token to the attribute of the HTTP request named _csrf.


For the default form login, Spring Security correctly applies CSRF protection for us. The framework takes care of adding the CSRF token to the login request.

`Customizing CSRF protection`:- We use CSRF protection only when the page that consumes resources produced by theserver is itself generated by the same server. It can be a web application where the consumed endpoints are exposed by a different origin.
It can be a web application where the consumed endpoints are exposed by a different origin or a mobile application. In the case of mobile applications, you can use the OAuth 2 flow.

```java
http.csrf(c -> {
  c.ignoringRequestMatchers("/ciao");
});
```


Calling the ignoringRequestMatchers(String paths) method, you can specify the path expressions representing the paths that you want to exclude from the CSRF protection mechanism. A more general approach is to use a RequestMatcher. Using this allows you to apply the exclusion rules with regular path expressions as well as with regexes (regular expressions). When using the ignoringRequestMatchers() method of the CsrfCustomizer object, you can provide any RequestMatcher as a parameter.

The next code snippet shows how to use the ignoringRequestMatchers() method with an MvcRequestMatcher instead of using ignoringRequestMatchers() with a path given as a String value:

```java
HandlerMappingIntrospector i = new HandlerMappingIntrospector();
MvcRequestMatcher r = new MvcRequestMatcher(i, "/ciao");
c.ignoringRequestMatchers(r);
```

Or you can similarly use a regex matcher:

```java
String pattern = ".*[0-9].*";
String httpMethod = HttpMethod.POST.name();
RegexRequestMatcher r = new RegexRequestMatcher(pattern, httpMethod);
c.ignoringRequestMatchers(r);
```



## CORS(cross-origin resource sharing)

By default, browsers don’t allow requests made for any domain other than the one from which the site is loaded. For example, if you access the site from example.com, the browser won’t let the site make requests to api.example.com.

The web client is restricted to communicating solely with the source from which the web content was obtained.
For instance, if the content was sourced from example.com, the web client is prohibited from initiating requests to a different origin, such as api.example.com.


An app uses the CORS mechanism to relax this strict policy and allow requests made between different origins in some conditions. You need to know this because it’s likely you will have to use it for your applications, especially nowadays where the frontend and backend are separate applications. It is common that a front­ end application is developed using frameworks such as Angular, ReactJS, or Vue and hosted at a domain such as example.com, but it calls endpoints on the backend hosted at another domain, such as api.example.com.

Any situation in which an application makes calls between two different domains isprohibited. Of course, you can encounter situations in which you need to make such calls, and this is when CORS will allow you to specify from which domain your application allows requests and what details can be shared. The CORS mechanism works based on HTTP headers.
The most important are
1. `Access-Control-Allow-Origin` — Specifies the foreign domains (origins) that
can access resources on your domain.
2. `Access-Control-Allow-Methods` — Lets us refer only to some HTTP meth-
ods in situations when we want to allow access to a different domain, but only
to specific HTTP methods. For example, you use this if you’re going to enable
example.com to call some endpoint, but only with HTTP GET.
3. `Access-Control-Allow-Headers` — Adds limitations to which headers you can
use in a specific request. For example, you don’t want the client to be able to send
a specific header for a given request.

With Spring Security, by default, none of these headers are added to the response.
When the application makes the request, it expects that the response has an Access-Control-Allow-Origin header containing the origins accepted by the server. If this doesn’t happen, as in the case of default Spring Security behavior, the browser won’t accept the response.

Instead of being a restriction, CORS helps to relax a rigid constraint for cross-domain calls. And even with restrictions applied,in some situations, the endpoint can be called. This behavior doesn’t always happen.
Sometimes, the browser first makes a call using the HTTP OPTIONS method to test whether the request should be allowed. We call this test request a preflight request. If the preflight request fails, the browser won’t attempt to honor the original request.
The preflight request and the decision whether to make it are the responsibility of the browser. You don’t have to implement this logic. However, it is important to understand it so you won’t be surprised to see cross-origin calls to the backend, even if you did not specify any CORS policies for specific domains. This could also happen when you have a client-side app developed with a framework such as Angular or ReactJS.

- **Applying CORS policies with the @CrossOrigin annotation**:- You can place the @CrossOrigin annotation directly above the method that defines the endpoint and configure it using the allowed origins and methods. The advantage of using the @CrossOrigin annotation is that it makes it easy to configure CORS for each endpoint.

```java
@PostMapping("/test")
@ResponseBody
@CrossOrigin("http://localhost:8080")
public String test() {
logger.info("Test method called");
return "HELLO";
}
```

The value parameter of @CrossOrigin receives an array to let you define multiple origins; for example, @CrossOrigin({"example.com", "example.org"}). You can also set the allowed headers and methods using the allowedHeaders attribute and the methods attribute of the annotation. For both origins and headers, you can use the asterisk (*) to represent all headers or all origins.

By allowing all origins, you expose the application to cross-site scripting (XSS) requests, which eventually can lead to DDoS attacks.

The advantage of using @CrossOrigin to specify the rules directly where the endpoints are defined is that it creates good transparency of the rules. The disadvantage is that it might become wordy, forcing you to repeat a lot of code. It also imposes the risk that the developer might forget to add the annotation for newly implemented endpoints.

- **Applying CORS using a CorsConfigurer**:- Although using the @CrossOrigin annotation is easy,you might find it more comfortable in a lot of cases to define CORS configuration in one place.

```java
Configuration
public class ProjectConfig {
@Bean
public SecurityFilterChain securityFilterChain(HttpSecurity http)
throws Exception {
http.cors(c -> {
CorsConfigurationSource source = request -> {
CorsConfiguration config = new CorsConfiguration();
config.setAllowedOrigins(
List.of("example.com", "example.org"));
config.setAllowedMethods(
List.of("GET", "POST", "PUT", "DELETE"));
config.setAllowedHeaders(List.of("*"));
return config;
};
c.configurationSource(source);
});
}
}
```

The cors() method that we call from the HttpSecurity object receives as a parameter a Customizer<CorsConfigurer> object. For this object, we set a Cors­ConfigurationSource, which returns CorsConfiguration for an HTTP request. CorsConfiguration is the object that states which are the allowed origins, methods, and headers. If you use this approach, you must at least specify the origins and the methods. If you only specify the origins, your application won’t allow the requests. This behavior happens because a CorsConfiguration object doesn’t define any methods by default.


## OAuth 2 and OpenID Connect

`OAuth 2` is a specification that tells one how to separate the authentication responsibilities in a system. This way, multiple apps can use one other app that implements the authentication, helping the users to authenticate faster, keeping their details more secure, and minimizing the costs of implementation in the apps.

With an OAuth 2 system, you’ll find the following actors:
1. The user—The person who uses the application. The users usually work with a frontend application, which we call a client. Users don’t always exist in an OAuth 2 system.
2. The client—The application that calls a backend and needs authentication and authorization. The client can be a web app, a mobile app, or even a desktop app or a separate backend service. The system usually doesn’t have a user when the client is a backend service.
3. The resource server—A backend application that authorizes and serves calls sent by one or more client applications.
4. The authorization server—An app that implements authentication and safe storage of credentials.

The participants in an OAuth 2 framework. Users interact through a client that requires authorization for certain operations on the backend service, known as a resource server. For backend authorization, the client’s initial step is authentication by the authorization server.
