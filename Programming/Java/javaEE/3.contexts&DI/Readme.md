# Contexts and Dependency Injection

`Contexts and Dependency Injection (CDI)` enables your objects to have their dependencies provided to them automatically, instead of creating them or receiving them as parameters. CDI also manages the lifecycle of those dependencies for you

Contexts and Dependency Injection for Java EE (CDI) is one of several Java EE features that help to knit together the web tier and the transactional tier of the Java EE platform. CDI is a set of services that, used together, make it easy for developers to use enterprise beans along with JavaServer Faces technology in web applications.
Designed for use with stateful objects, CDI also has many broader uses, allowing developers a great deal of flexibility to integrate various kinds of components in a loosely coupled but typesafe way.

CDI 1.1 is specified by JSR 346. Related specifications that CDI uses include the following:

1. JSR 330, Dependency Injection for Java
2. The Managed Beans specification, an offshoot of the Java EE 7 platform specification (JSR 342)

The most fundamental services provided by CDI are as follows.

- Contexts: This service enables you to bind the lifecycle and interactions of stateful components to well-defined but extensible lifecycle contexts.
- Dependency injection: This service enables you to inject components into an application in a typesafe way and to choose at deployment time which implementation of a particular interface to inject.

In addition, CDI provides the following services:
1. Integration with the Expression Language (EL), which allows any component to be used directly within a JavaServer Faces page or a JavaServer Pages page
2. The ability to decorate injected components
3. The ability to associate interceptors with components using typesafe interceptor bindings
4. An event-notification model
5. A web conversation scope in addition to the three standard scopes (request, session, and application) defined by the Java Servlet specification
6. A complete Service Provider Interface (SPI) that allows third-party frameworks to integrate cleanly in the Java EE environment

A major theme of CDI is loose coupling. CDI does the following:
1. Decouples the server and the client by means of well-defined types and qualifiers, so that the server implementation may vary
2. Decouples the lifecycles of collaborating components by
   - Making components contextual, with automatic lifecycle management
   - Allowing stateful components to interact like services, purely by message passing
3. Completely decouples message producers from consumers, by means of events
4. Decouples orthogonal concerns by means of Java EE interceptors

Along with loose coupling, CDI provides strong typing by
- Eliminating lookup using string-based names for wiring and correlations so that the compiler will detect typing errors
- Allowing the use of declarative Java annotations to specify everything, largely eliminating the need for XML deployment descriptors, and making it easy to provide tools that introspect the code and understand the dependency structure at development time

For example, consider the following servlet:

```java
@WebServlet("/cdiservlet")
public class NewServlet extends HttpServlet {
   private Message message;

   @Override
   public void init() {
      message = new MessageB();
   }

   @Override
   public void doGet(HttpServletRequest request, HttpServletResponse response)
      throws IOException {
      response.getWriter().write(message.get());
   }
}
```

This servlet needs an instance of an object that implements the Message interface:

```java
public interface Message {
   public String get();
}
```

The servlet creates itself an instance of the following object:

```java
public class MessageB implements Message {
   public MessageB() { }

   @Override
   public String get() {
      return "message B";
   }
}
```

Using CDI, this servlet can declare its dependency on a Message instance and have it injected automatically by the CDI runtime. The new servlet code is the following:

```java
@WebServlet("/cdiservlet")
public class NewServlet extends HttpServlet {
   @Inject private Message message;

   @Override
   public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
      response.getWriter().write(message.get());
   }
}
```

The CDI runtime looks for classes that implement the Message interface, finds the MessageB class, creates a new instance of it, and injects it into the servlet at runtime. To manage the lifecycle of the new instance, the CDI runtime needs to know what the scope of the instance should be. In this example, the servlet only needs the instance to process an HTTP request; the instance can then be garbage collected. This is specified using the javax.enterprise.context.RequestScoped annotation:

```java
@RequestScoped
public class MessageB implements Message { ... }
```

The MessageB class is a CDI bean. CDI beans are classes that CDI can instantiate, manage, and inject automatically to satisfy the dependencies of other objects. Almost any Java class can be managed and injected by CDI.
A JAR or WAR file that contains a CDI bean is a bean archive.
If an application has more than one implementation of an interface, CDI provides mechanisms that you can use to select which implementation to inject.

## Beans

CDI redefines the concept of a bean beyond its use in other Java technologies, such as the JavaBeans and Enterprise JavaBeans (EJB) technologies.
In CDI, a bean is a source of contextual objects that define application state or logic. A Java EE component is a bean if the lifecycle of its instances may be managed by the container according to the lifecycle context model defined in the CDI specification.
A bean has following attributes:-

1. A (nonempty) set of bean types
2. A (nonempty) set of qualifiers
3. A scope
4. Optionally, a bean EL name.
5. A set of interceptor bindings.
6. A bean implementation.

A bean type defines a client-visible type of the bean. Almost any Java type may be a bean type of a bean.
- A bean type may be an interface, a concrete class, or an abstract class and may be declared final or have final methods.
- A bean type may be a parameterized type with type parameters and type variables.
- A bean type may be an array type. Two array types are considered identical only if the element type is identical.
- A bean type may be a primitive type. Primitive types are considered to be identical to their corresponding wrapper types in java.lang .
- A bean type may be a raw type.

A managed bean is implemented by a Java class, which is called its bean class. A top-level Java class is a managed bean if it is defined to be a managed bean by any other Java EE technology specification, such as the JavaServer Faces technology specification, or if it meets all the following conditions.
1. It is not a nonstatic inner class.
2. It is a concrete class or is annotated @Decorator .
3. It is not annotated with an EJB component-defining annotation or declared as an EJB bean class in ejb-jar.xml .
4. It has an appropriate constructor. That is, one of the following is the case.
   - The class has a constructor with no parameters.
   - The class declares a constructor annotated @Inject .

No special declaration, such as an annotation, is required to define a managed bean.

`Beans as Injectable Objects`:- The concept of injection has been part of Java technology for some time. Since the Java EE 5 platform was introduced, annotations have made it possible to inject resources and some other kinds of objects into container-managed objects. CDI makes it possible to inject more kinds of objects and to inject them into objects that are not container-managed.
The following kinds of objects can be injected:

1. Almost any Java class
2. Session beans
3. Java EE resources: data sources,Java Message Service topics,queues,connection factories
4. Persistence contexts(Java Persistence API EntityManager objects).
5. Producer fields.
6. Objects returned by producer methods.
7. Web service references
8. Remote enterprise bean references.

## Qualifiers

You can use qualifiers to provide various implementations of a particular bean type. A qualifier is an annotation that you apply to a bean. A qualifier type is a Java annotation defined as @Target({METHOD, FIELD, PARAMETER, TYPE}) and @Retention(RUNTIME) .

For example, you could declare an @Informal qualifier type and apply it to another class that extends the Greeting class. To declare this qualifier type, use the following code:

```java
@Qualifier
@Retention(RUNTIME)
@Target({TYPE, METHOD, FIELD, PARAMETER})
public @interface Informal {}
```

You can then define a bean class that extends the Greeting class and uses this qualifier:

```java
@Informal
public class InformalGreeting extends Greeting {
   public String greet(String name) {
      return "Hi, " + name + "!";
   }
}
```

Both implementations of the bean can now be used in the application.

If you define a bean with no qualifier, then the bean automatically has the qualifier @Default . The unannotated Greeting class could be declared as follows:

```java
@Default
public class Greeting {
   public String greet(String name) {
      return "Hello, " + name + ".";
   }
}
```
