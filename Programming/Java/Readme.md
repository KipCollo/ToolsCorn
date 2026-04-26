# Java Ecosystem

It incudes all Frameworks,Tools and Technologies for modern development.

## Frameworks

1. Spring Framework:- For building enterprise-level applications.Spring is a powerful open-source Java platform (framework), that is used to create and maintain web applications. It starts as the Spring Framework providing a Dependency Injection Container. Spring Boot is an autoconfigurable packaging of multiple Spring projects (like Data, MVC, REST etc) initially created for creating microservices or quick PoC (Proof of concepts).
2. Spring Boot:- Simplifies Spring-based application development.Spring Boot is an open source, microservice-based Java web framework. The Spring Boot framework creates a fully production-ready environment that is completely configurable using its prebuilt code within its codebase. The microservice architecture provides developers with a fully enclosed application, including embedded application servers.
3. Hibernate:- For Object-Relational Mapping(ORM) Hibernate is an open source object-relational mapping tool that provides a framework to map object-oriented domain models to relational databases for web applications. Hibernate implements the specifications of JPA. Performance is key so Hibernate supports first-level and second-level caching.A powerful ORM tool that simplifies database operations and maps Java objects to tables, enhancing productivity and reducing boilerplate code.Core features are ORM, caching, and database abstraction.Use cases are Best for database-driven applications like ERP systems or apps requiring complex database interactions.
4. Jakarta EE(Java EE):- Enterprise Edition for large scale applications.Core features are APIs for distributed computing, EJB, and transaction management.Used for Enterprise-grade B2B systems, banking applications, and large-scale financial apps.
5. Apache Struts:- For building MVC-based web applications.MVC framework , a classic framework for building extensible web applications, known for its use in traditional enterprise projects.Used for Suitable for legacy systems and enterprise web portals
6. Grails:- A Groovy-based framework for Java Developers.A simplified framework for rapid application development,built on Spring Boot and Hibernate.Used for Web apps, CMS platforms, and small-to-medium enterprise applications.
7. Micronaut:- Lightweight framework for microservices and serverless apps.A modern, cloud-ready framework designed to optimize memory usage and performance for microservices development.Core features are Lightweight framework, reactive programming, and fast startup times.Ideal for Ideal for microservices, cloud-native apps, and serverless architectures.
8. Quarkus:- Optimized for Kubernetes and cloud-native development.Quarkus is a Kubernetes Native Java stack tailored for OpenJDK HotSpot and GraalVM, crafted from the best of breed Java libraries and standards. It is a full-stack, Kubernetes-native Java framework made for Java virtual machines (JVMs) and native compilation, optimizing Java specifically for containers and enabling it to become an effective platform for serverless, cloud, and Kubernetes environments.A modern framework optimized for cloud environments,offering excellent integration with Kubernetes and container ecosystems.Features are Kubernetes-native, optimized runtime, and fast startup.Cloud-native microservices and containerized applications.
9. Spark:- Spark is a micro framework for creating web applications in Kotlin and Java 8. Sinatra, a popular Ruby micro framework, was the inspiration for it.
10. Play Framework:- Play Framework is a high-productivity web application framework that allows the model-view-controller pattern. It is written in Scala but can also be used for other programming languages that are compiled and run on the JVM. e.g.Java.A scalable framework built for high-performance web applications, emphasizing reactive programming for modern use cases.Core Features are Reactive streams, asynchronous I/O, and high scalability.Used for Real-time analytics platforms, streaming services, and highly concurrent applications
11. DropWizard:- A minimalist framework focused on quickly building RESTful APIs and small-scale enterprise applications.Features includes RESTful APIs, lightweight libraries, and rapid development.Used for Low; beginner-friendly and straightforward.
12. Vaadin:- A developer-friendly framework for creating interactive and responsive web UIs using Java without extensive frontend coding.Features includes Rich UI components and server-side Java for building modern UIs..Used for Dashboards, admin panels, and enterprise reporting tools.

## Build Tools

Tools to automate the process of building,testing and deploying applications.
1. Maven:- Dependency management and bild tool.
2. Gradle:- Build automation tool for multi-language projects
3. Ant:- XML-based build tool

## Web Development

There are many ways to develop Java web applications.When developing a Java web applications, you typically use parts of the Java Enterprise Edition(Java EE) specification.This specification describe how web servers can interact with all Java web technologies including servlets, JavaServer Pages(JSP),JavaServer Faces(JSF),Java Persistence API(JPA),Enterprise JavaBeans(EJB) and more.

1. Servlets & JSPs:- For building dynamic web pages.Servlets store Java code that does server-side processing, and JSP store HTML that defines User Interfaces.Servlet/JSP API are relatively low-level API,it doesn't do much work for the developer.However,the servlet/JSP gives the developer a high degree of control over HTML,CSS and Javascript that is returned to the browser.In addition it is the foundation of other approaches in building web applicatios.
2. Thymeleaf:- Modern server-side template engine.
3. Vaadin:- Framework for building modern web applications.
4. JSF (JavaServer Faces):- Component-based UI framework.It is newer technology designed to replace both servlets and JSPs.Provides higher-level API that does more work for the programmer.You typically use more Java EE features more than you do with servlet/JSP approach.You can also use Enterprise JavaBeans to define server-side components.
5. Spring Framework:- It is higher-level API that does more work for programmer than servlet APIs.However,due to it's structure, the Spring Framework still gives the developer a high degree of control over HTML/CSS/Javascript that's returned to the browser.

## Testing

1. JUnit:- Unit testing framework.
2. TestNG:- Advanced testing framework.
3. Mockito:- Mocking framework for testing dependencies.
4. Cucumber:- Behavior-driven development (BDD).
5. Selenium:- Browser-based testing framework.

## Persistence & Databases

1. JPA (Java Persistence API):- ORM standard for database integration.
2. MyBatis:- For custom SQL queries and ORM.
3. JDBC :- Standard Java API for database connectivity.

## Logging

1. SLF4J:- Logging facade for different implementations.
2. Log4j:- Advanced logging framework.
3. Logback:- Logging framework with better performance.

## Java GUI

Building Java GUIs require use of frameworks:

1. AWT
2. Swing
3. JavaFX (part of Java since JSE 8, 2014)

## Security

1. Spring Security:- Comprehensive security framework.
2. Apache Shiro:- General-purpose security framework.
3. Keycloak:- Identity and access management solution.

## Messaging

1. JMS (Java Message Service):- Messaging standard for communication between systems.
2. RabbitMQ Java Client:- For RabbitMQ integration.
3. Apache Kafka (Java API):- Distributed streaming platform.

## RESTful & Web Services

1. JAX-RSAPI:- for building RESTful web services.
2. OpenAPI:- documentation and testing tool.
3. SwaggerAPI:- documentation and testing tool.

## Development Tools

1. Eclipse IDE:- Popular integrated development environment for Java.
2. IntelliJ IDE:- AAdvanced IDE for Java development.
3. NetBeans:- Java development IDE.
4. Visual Studio Code:- Lightweight editor with Java extensions.

## AI & Machine Learning

1. Deeplearning4j:- Deep learning library for Java.
2. Weka:- Machine learning library.
3. Apache Mahout:- Scalable machine learning algorithms.

## Concurrency & Parallelism

1. Akka:- Actor-based concurrency library.
2. RxJava:- For reactive programming.
3. Project Loom:- Lightweight threads and continuations.

## Networking

1. Netty:- Asynchronous networking library.
2. Grizzly:- NIO framework for building web servers.
3. Apache MINA:- Network application framework.

## Utilities

1. Apache Commons:- A collection of reusable Java components for various tasks.
2. Guava:- Google's utility library for Java, including collections, caching, and more.
3. Jackson:- A JSON data-binding library for Java.
4. Gson:- A library for converting Java objects to and from JSON.
5. Joda-Time:- Library for better date and time management in Java.
6. Apache POI:- For reading and writing Microsoft Office documents.
7. JSoup:- Library for parsing and manipulating HTML.
8. Apache PDFBox:- For creating, reading, and editing PDF documents.
9. ZXing (Zebra Crossing):- A barcode and QR code scanning library for Java.
10. Google Truth:- Library for writing readable and easy-to-maintain test assertions.
11. FasterXML:- High-performance serialization/deserialization library.
12. Apache Lucene:- A powerful search engine library for full-text search.
13. SnakeYAML:- For working with YAML configurations in Java.
14. JavaFX:- Toolkit for building rich client applications.
15. OpenCSV:- For reading and writing CSV files in Java.
16. Lombok:- Project Lombok is a java library that automatically plugs into your editor and build tools, spicing up your java.

## Profiling tools

These tools help developers to analyze the performance of their java applications and identify bottlenecks and other issues.Includes:-
1. JProfiler
2. YourKit Java Profiler
3. VisualVM.

## Code Quality tools

These tools help to identify code quality issues and ensure that the code meets certain standards.Inncludes:-
1. SonarQube
2. Checkstyle
3. PMD

## Code Coverage

Code coverage tools can be used to measure the extent to which your tests are covering your code,helping you identify areas that may need more testing.
1. JaCoCo
2. Cobertura

Repositories:-

1. Awesome-Java



Evolution of Key Java SE Features
1. Networking (java.net) ➡️ Servlets ➡️ Spring MVC
Java SE: Provides ServerSocket and Socket. You must manually handle bytes and ports.
Jakarta EE: Extends this into the Servlet API. It abstracts TCP into HTTP, providing HttpServletRequest and Response.
Spring: Extends Servlets with Spring MVC (DispatcherServlet). It automates data binding and routing, so you work with Java objects instead of raw HTTP parameters.
2. Database Connectivity (java.sql) ➡️ JPA ➡️ Spring Data
Java SE: Provides JDBC. You write raw SQL strings and manually manage database connections.
Jakarta EE: Extends this into JPA (Jakarta Persistence API). It introduces ORM (Object-Relational Mapping), allowing you to map Java classes to database tables.
Spring: Extends JPA with Spring Data JPA. It eliminates the need to write "Boilerplate" code; you can perform database queries just by naming an interface method (e.g., findByLastName).
3. Object Creation (new Object()) ➡️ CDI ➡️ Spring IoC
Java SE: You manually instantiate classes using the new keyword.
Jakarta EE: Introduces CDI (Contexts and Dependency Injection). The server manages the lifecycle of your objects.
Spring: Built entirely on the IoC (Inversion of Control) Container. It uses Dependency Injection (@Autowired) to wire the entire network of your application together automatically.
4. Remote Invocation (java.rmi) ➡️ EJB ➡️ Spring Boot/Cloud
Java SE: Uses RMI (Remote Method Invocation) to call code on another JVM. It is notoriously difficult to configure.
Jakarta EE: Extends this into EJB (Enterprise JavaBeans), adding transaction management and security to remote calls.
Spring: Simplifies this into RestTemplates or Feign Clients, treating remote network calls like simple local method calls.


String Examples

```java
//Reverse string
public class ReverseString {
public static void main(String[] args) {
String str = "Interview";
StringBuilder reversed = new StringBuilder();
for (int i = str.length() - 1; i >= 0; i--) {
reversed.append(str.charAt(i));
}
System.out.println("Reversed String: " + reversed);
}
}

//Check if Two Strings are Anagrams
import java.util.Arrays;
public class AnagramCheck {
public static void main(String[] args) {
String str1 = "listen";
String str2 = "silent";
char[] arr1 = str1.toCharArray();
char[] arr2 = str2.toCharArray();
Arrays.sort(arr1);
Arrays.sort(arr2);
if (Arrays.equals(arr1, arr2)) {
System.out.println("The strings are anagrams.");
} else {
System.out.println("The strings are not anagrams.");
}
}
}

// Count the Frequency of Characters in a String
import java.util.HashMap;
public class CharFrequency {
public static void main(String[] args) {
String str = "hello world";
HashMap<Character, Integer> freq = new HashMap<>();
for (char c : str.toCharArray()) {
freq.put(c, freq.getOrDefault(c, 0) + 1);
}
System.out.println(freq);
}
}

//Check if a String is a Palindrome
public class PalindromeCheck {
public static void main(String[] args) {
String str = "madam";
String reversed = new StringBuilder(str).reverse().toString();
if (str.equals(reversed)) {
System.out.println("The string is a palindrome.");
} else {
System.out.println("The string is not a palindrome.");
}
}
}

//Find the Longest Palindromic Substring
public class LongestPalindrome {
public static void main(String[] args) {
String str = "babad";
String result = "";
for (int i = 0; i < str.length(); i++) {
for (int j = i; j < str.length(); j++) {
String sub = str.substring(i, j + 1);
if (isPalindrome(sub) && sub.length() >
result.length()) {
result = sub;
}
}
}
System.out.println("Longest Palindromic Substring: " +
result);
}
public static boolean isPalindrome(String s) {
return s.equals(new StringBuilder(s).reverse().toString());
}
}

//Count Vowels and Consonants
public class VowelConsonantCount {
public static void main(String[] args) {
String str = "Java Programming";
int vowels = 0, consonants = 0;
for (char c : str.toLowerCase().toCharArray()) {
if (c >= 'a' && c <= 'z') {
if ("aeiou".indexOf(c) != -1) {
vowels++;
} else {
consonants++;
}
}
}
System.out.println("Vowels: " + vowels);
System.out.println("Consonants: " + consonants);
}
}
```



# Java

Java is an OOP language developed by Sun Microsystems.It was originally called Oak, developed by James Gosling.It was later purchased by Oracle.Originally designed for consumer electronics.

Java Editions includes:

1. Java Standard Edition - Java core platform.It lets you develop and deploy Java applications on desktops and servers. Java offers the rich user interface, performance, versatility, portability, and security that today's applications require.
2. Enterprise Edition - Used for building large scale and distributive systems.Built on top of java standard edition.It is the standard in community-driven enterprise software. Java EE is developed using the Java Community Process, with contributions from industry experts, commercial and open source organizations, Java User Groups, and countless individuals.
3. Java ME Micro Edition - Designed for mobile devices.
4. Java Card - Used in smart cards and sim cards.
5. Java MP Micro-profile - Used with microservices and allows you to define ,for a server,how your application should ne deployed and run as microservice.
6. Java Embedded - Oracle Java Embedded: Unlocking the Value of the Internet of Things with Intelligence on Devices
7. Java DB
8. Java TV


•1. What is the difference between JDK and JRE?
•2. Why is Java a platform independent language?
•3. What is the difference between an abstract class and an interface?
•4. What is the difference between final, finally, and finalize?
•5. What is the difference between stack and heap memory?
•6. What is the difference between method overloading and method overriding?
•7. What is the difference between an abstract class and an interface?
•8. What is the difference between a private and a protected modifier?
•9. What is constructor overloading in Java?
•10. What is the use of super keyword in Java?
•11. What is the difference between static methods, static variables, and static classes in Java?
•12. What exactly is System.out.println in Java?
•13. What part of memory - Stack or Heap - is cleaned in the garbage collection process?

## JDK8

1. JDK8 was created to simplify programming i.e way of writing code in less no. of lines.
2. It's also influenced by the hardware influence i.e CPU became multicore, majority of java programs used only one core.JDK8 enabled parallel programming/procesing so that Java programs can run in multi-processors.

Before writing Java program,you have to install JDK.There are two versions of JDKs:-

1. Proprietary JDK of Oracle.Every six months, Oracle releases a new version of Java.
2. JDK open version

## Java Development Kit(JDK)

The Java Development Kit (JDK) contains the minimum software(tools) you need to do Java development.JDK includes JRE,compiler(javac),an archiver(jar),interpreter/loader(java),documentation generator and other tools.

Key commands include:

1. javac: Converts .java source files into .class bytecode
2. java: Executes the program
3. jar: Packages files together
4. javadoc: Generates documentation

The javac program generates instructions in a special format called bytecode that the java command can run. Then java launches the Java Virtual Machine (JVM) before running the code. The JVM knows how to run bytecode on the actual machine it is on. You can think of the JVM as a special magic box on your machine that knows how to run your .class file within your particular operating system and hardware.

You'll need to add the JDK to the system variables.

To check if java is installed,you use the command:-

```bash
java --version
javac --version
```

TODO jshell

To enter into jshell prompt,use the command jshell in your shell:-

```bash
jshell

Picked up _JAVA_OPTIONS: -Dawt.useSystemAAFontSettings=on -Dswing.aatext=true
|  Welcome to JShell -- Version 21.0.4
|  For an introduction type: /help intro

jshell>
```

A Java program begins execution with its main() method.The main() method is often called an entry point into the program, because it is the starting point that the JVM looks for when it begins running a new program.

The main() method lets the JVM call our code.

```java
public static void main(String[] args) {
   System.out.println("Hello World");
}
```

The main() method’s parameter list, represented as an array of java.lang.String objects. You can use any valid variable name along with any of these three formats:

- String[] args
- String options[]
- String... friends

The compiler accepts any of these. The variable name args is common because it hints that this list contains values that were read in (arguments) when the JVM started. The characters [] are brackets and represent an array. An array is a fixed-­size list of items that are all of the same type. The characters ... are called varargs (variable argument lists).

To compile Java code with the javac command, the file must have the extension .java.The name of the file must match the name of the public class. The result is a file of bytecode with the same name but with a .class filename extension. Remember that bytecode consists of instructions that the JVM knows how to execute.

## Java Runtime Environment(JRE)

Is an environment required to run Java applications.Includes JVM class libraries and other supporting files.It is updated regularly to keep up with security issues.Allows running of Java apps without needing development tools. It is the implementation of JVM.It physically exist.

## Java Virtual Machine(JVM)

It is an abstract machine that executes Java Bytecode.It is a specification that provides runtime environment in which java bytecode can be executed.It is platform dependent.Called virtual machine because it doesn't exist physically.

JVM is responsible for loading, verifying and executing the Bytecode on a platform.
Each Java Program only needs to be written and compiled once.A single compiled version of a program can only run on any platform.

In java, JVM allocates memory to different processes, methods and objects. Some of the memory areas allocated by JVM are:

1. ClassLoader: It is a component of JVM used to load class files.
2. Class (Method) Area: It stores per-class structures such as the runtime constant pool, field and method data, and the code for methods.
3. Heap: Heap is created a runtime and it contains the runtime data area in which objects are allocated.
4. Stack: Stack stores local variables and partial results at runtime. It also helps in method invocation and return value. Each thread creates a private JVM stack at the time of thread creation.
5. Program Counter Register: This memory area contains the address of the Java virtual machine instruction that is currently being executed.
6. Native Method Stack: This area is reserved for all the native methods used in the application.

In Java, ClassLoader is a class that is used to load files in JVM. ClassLoader loads files from their physical file locations e.g. Filesystem, Network location etc.
There are three main types of ClassLoaders in Java.

- Bootstrap ClassLoader: This is the first ClassLoader. It loads classes from rt.jar file.
- Extension ClassLoader: It loads class files from jre/lib/ext location.
- Application ClassLoader: This ClassLoader depends on CLASSPATH to find the location of class files. If you specify your jars in CLASSPATH, then this ClassLoader
will load them.

By design, the JVM allows compiled Java code to be transported across networks, operate seamlessly on various client machines, and provide safety assurance. The JVM’s architecture and execution model ensures that Java programs behave consistently, regardless of their origin or the host machine they run on. This evolution from small, networked devices to large-scale servers showcases Java’s versatility and enduring impact on the world of software development.

To ensure security, the JVM enforces robust syntactic and structural constraints on the code contained within class files. However, this is where the JVM’s inclusive nature shines. Any programming language with functionality that can be expressed in terms of a valid class file can find a hospitable home within the JVM. This inclusivity allows implementers of various languages to leverage the JVM as a delivery vehicle for their software, thanks to its machine-independent platform.
The JVM operates at the operating system layer, serving as a critical bridge between Java applications and the underlying hardware and operating system. It plays a crucial role in executing Java code while abstracting hardware complexities and providing a secure and consistent environment for Java applications.
It also acts as an interpreter for Java bytecode, transforming high-level Java code into low-level instructions that the underlying hardware can understand. It manages memory, handles multithreading, and provides various runtime services, allowing Java applications to run seamlessly across different platforms and operating systems.

`Just In Time compiler` also known as JIT compiler is used for performance improvement in Java. It is enabled by default. It is compilation done at execution time rather earlier. Java has popularized the use of JIT compiler by including it in JVM.


Java is a platform independent language. Java compiler converts Java code in to byte code that can be interpreted by JVM. There are JVM written for almost all the popular platforms in the world.
Java byte code can run on any supported platform in same way. Where as other languages require libraries compiled for a specific platform to run.


## Comments

Comments help programmers to communicate and understand the program. They are not programming statements and thus are ignored by the compiler.
There are 3 types of comments in Java:-

- `Single-line comment`:- It begins with two slashes.The compiler ignores anything you type after that on the same line.

```java
//comment
```

- `Multiple-line comments` - It includes anything starting from the symbol /* until the symbol */.People often type an aesterik(*) at the beginning of each line of a multiline comment to make it easier to read,but you don't have to.

```java
/*
* Multiline comments
*/
```

- `Javadoc Comment`- Starts with /**.This special syntax tells the javadoc tool to pay attention to the comment.Javadoc comments have a specific structure that the javadoc tool knows how to read.

```java
/**
 * Javadoc comment
 * @author Collins
*/
```

## Java Versions

- `First Release 1991`:- Green project for consumer electronics market.
- `1994`:- Hot Java Web browser
- `1995`:- Sun announces Java.
- `JDK 1.0 (1996)`:-Featuring core language features,basic networking,Threads.

- `JDK 1.1 (1997)`:- Improved inner classes,JavaBeans,JDBC/RMI/Reflection.

- `J2SE 1.2 (1998)`:- Java versions were given codenames.The Java version 1.2 codename was **Playground**.J2SE replaced JDK because the Java platform was now composed of three parts:
   1. J2SE (Java 2 Platform, Standard Edition), which later became JSE, a computing platform for the development and deployment of portable code for desktop and server environments
   2. J2EE (Java 2 Platform, Enterprise Edition), which later became JEE, a set of specifications extending Java SE with specifications for enterprise features such as distributed computing and web services
   3. J2ME (Java 2 Platform, Micro Edition), which later became JME, a computing platform for development and deployment of portable code for embedded and mobile devices
Features includes:-
   1. RMI/Reflection
   2. JDBC
   3. Introduced Inner classes.

- `J2SE 1.3 (2000)`:- The codename was **Kestrel** (maybe as a reference to the newly introduced Java sound classes).This release also contained Java XML APIs.JNDI/JSSE/Javasound.HotSpot JVM.

- `J2SE 1.4 (2002)`:- codename was **Merlin**.This is the first year that the Java Community Process members were involved in deciding which features the release
should contain, and thus, the release was quite consistent.his is the first release of the Java platform developed under the Java Community Process as JSR 59.Features included:-
   1. Support for IPv6 (basically applications that run over a network can now be written to work using networking protocol IPv6).
   2. **Non-blocking IO**(IO is an acronym for input-output, which refers to reading and writing data— a very slow operation. Making IO non-­blocking means to optimize these operations to increase speed of the running application.)
   3. **Logging API** (Operations that get executed need to be reported to a file or a resource, which can be read in case of failure to determine the cause and find a solution. This process is called logging and apparently only in this version components to support this operation were introduced.)
   4. **Image processing API** (Components developers can use this to manipulate images with Java code.)
   5. Assertion.
   6. Introduced Regular Expressions.

Java’s coffee cup logo made its entrance in 2003 (between releases 1.4 and 5.0) at the JavaOne conference.

- `J2SE 1.5 (2005)`(Major Change):- codename **Tiger**.Initially, it followed the typical versioning, and was named 1.5, but because this was a major release with a significant number of new features that proved a serious improvement of maturity, stability, scalability, and security of the J2SE, the version was labeled 5.0 and presented like that to the public, even if internally 1.5 was still used.Features:-
   1. **Generics** provide compile-time (static) type safety for collections and eliminates the need for most type conversions (which means the type used in a certain context is decided while the application is running).
   2. **Annotations**, also known as metadata, are used to tag classes and methods to allow metadata-aware utilities to process them (which means a component is labeled as something another component recognizes and does specific operations with it).
   3. **Autoboxing/unboxing** are automatic conversion between primitive types and matching object types (wrappers).
   4. **Enumerations** define static final ordered sets of values using the enum keyword.
   5.** Varargs** are the last parameter of a method is declared using a type name followed by three dots (String...), which implies that any number of arguments of that type can be provided and is placed into an array.
   6. **Enhanced for each loop** is used to iterate over collections and arrays too.
   7. Improved semantics for multithreaded Java programs(Executor).
   8. Static imports.
   9. Improvements for RMI,Swing, concurrency utilities(Executor) and introduction to the Scanner class.

Java 5 was the first available for Mac OS X (version 10.4) and the default version installed on Mac OS X (version 10.5). There were a lot of updates8 released for this version to fix issues related to security and performance.

- `Java SE 6 (2006)`:- codename **Mustang**.This was the last major Java release by Sun Microsystems. Oracle acquired the company in January 2010.Features:-
   1. Dramatic performance improvements for the core platform (applications run faster, need less memory or CPU to execute).
   2. Improved web service support (optimized components that are required for development of web applications).
   3. JDBC 4.0 (optimized components that are required for development of applications using databases).
   4. Java Compiler API (basically, from your code you can components that are used to compile code).
   5. Many GUI improvements, such as integration of SwingWorker in the API, table sorting and filtering, and true Swing double-buffering (eliminating the gray-area effect); basically, improvement of components used to create interfaces for desktop applications.
   7. Pluggable Annotations.
   8. Scripting support.
In December 2008, Java FX 1.0 SDK was released. JavaFX is used to create graphical user interfaces for any platform, and the initial version was a scripting language. Until
2008, there were two ways to create a user interface in Java:
   1. AWT (Abstract Window Toolkit) components, which are rendered and controlled by a native peer component specific to the underlying operating system; that is why AWT components are also called heavyweight components.
   2. Swing components, which are called lightweight because they do not require allocation of native resources in the operating system’s windowing toolkit. The Swing API is a complimentary extension of AWT.
In the first versions, it was never really clear if JavaFX would actually have a future and grow up to replace Swing.

- `Java SE 7 (2011)`:- codename **Dolphin**, was the first Java version released by Oracle.It was the result of an extensive collaboration between Oracle engineers and
members of the worldwide Java communities, like the OpenJDK Community and the Java Community Process (JCP).Features:-
   1. JVM support for dynamic languages with the new invokedynamic bytecode (basically, Java code can use code implemented in non-Java languages, such as C).
   2. Compressed 64-bit pointers (internal optimization of the JVM, so less memory is consumed).
   3. Small language changes grouped under project Coin:-
      - strings in switch
      - automatic resource management in try-statement
      - improved type inference for generics—the diamond <> operator.
      - binary integer literals.
      - multiple exceptions handling improvements.
   4. Concurrency improvements(ForkJoin).
   5. New I/O library (new classes added to read/write data to/from files).
   6. Timsort to sort collections and arrays of objects instead of merge sort (Sets of data that are ordered need to be sorted using an algorithm, basically, in this version, the algorithm was replaced with one that has better performance. Better performance usually means reducing of consumed resources: memory and/or CPU, or reducing the time needed for execution.)
JavaFX 2.0 was released with Java 7. This confirmed that the JavaFX project had a future with Oracle. As a major change, JavaFX stopped being a scripting language and
became a Java API.JavaFX started gaining ground over Swing because of its hardware-accelerated graphical engine called Prism that did a better job at rendering.

- `Java SE 8 (2014)`:- codename **Spider**.Included features that were initially intended to be part of Java 7.Features:-
   1. Language syntax changes:-
      - Language-level support for lambda expressions (functional programming features).
      - Support for default methods in interfaces.
      - New date and time API.
      - New way to do parallel processing by using streams.
      - CompletableFuture
   2. Improvements of the garbage collection process.
   3. Improved integration with JavaScript (the Nashorn project).

- `Java SE 9 (2017)`:- called **Jigsaw** project.The Java platform is finally modular.Features introduced in Java modules:-
   1. The Java Shell tool, an interactive command-line interface for evaluation declarations, statements, and expressions written in Java.
   2. Quite a few security updates.
   3. Improved try-with-resources: final variables can now be used as resources.
   4. "_" is removed from the set of legal identifier names.
   5. Support for private interface methods.
   6. Enhancements for the Garbage-First (G1) garbage collector; this becomes the default garbage collector.
   7. Internally, a new more compact String representation is used.
   8. Concurrency updates (related to parallel execution).
   9. Factory methods for collections.
   10. Updates of the image processing API optimization of components used to write code that processes images.
   11. HTTP/2 client.
   12. multi-release JARs

- `Java SE 10(Java 18.3) (2018)`:- Oracle changed the Java release style, so a new version is released every six months.Also, Java 10 uses the new versioning convention set up by Oracle: the version numbers follow a $YEAR.$MONTH format.Features:-
   1. A local-variable type inference to enhance the language to extend type inference to local variables.
   2. More optimizations for garbage collection.
   3. Application Class-Data Sharing to reduce the footprint by sharing common class metadata across processes.
   4. More concurrency updates (related to parallel execution).
   5. Heap allocation on alternative memory devices (The memory needed by JVM to run a Java program—called heap memory—can be allocated on an alternative memory device, so the heap can also be split between volatile and non-volatile RAM).
   6. JIT compiler.
   7. Local variable type inference(var).

- `Java SE 11 (2018)`:-
   1. LTS release with HTTP client/flight recorder.
   2. ZGC/Epsilon GC.

- `Java SE 12 (2019)`:-
   1. Switch Expressions.
   2. Raw string literals.
   3. Shenandoh GC(production).
   4. Microbenchmark suite.
   5. JVM constants API.

- `Java SE 13 (2019)`:-
   1. Dynamic class-file constants.
   2. switch expressions/Text blocks(preview).
   3. Legacy socket API removal.

- `Java SE 14 (2020)`:-
   1. packaging tool/switch expressions(standard).
   2. foreign-memory access API(incubator)/instanceof.

- `Java SE 15 (2020)`:-
   1. Sealed classes/text blocks(standard).
   2. Hidden classes/records(standard).
   3. Multi-line string/API removal.

- `Java SE 16 (2021)`:-
   1. Pattern matching for instanceof(standard).
   2. records(standard)/foreign-memory access API(preview).

- `Java SE 17 (2021)` :-
   1. Foreign-linker API(incubator).
   2. LTS release with pattern matching for instanceof.
   3. records/sealed classes(preview).

- `Java SE 18 (2022)`:-
   1. Simple web server.
   2. UTF-8 by default.
   3. Vector API(second incubator).
   4. foreign function & memory API(incubator).

- `Java SE 19 (2022)`:-
   1. Value-based classes.
   2. virtual threads.
   3. switch pattern matching.

- `Java SE 20 (2023)`:-
   1. Runtime class-file patching.
   2. Annotations on Java types/vector API(third incubator).
   3. generic specialization.
   4. enhanced pseudorandom number generators.

- `Java SE 21 (2023)`:-
   1. Virtual threads(standard).
   2. Vector APIs(fourth incubator).
   3. macOS/AArch64 port.

- `Java SE 22 (2024)`:-
   1. Foreign Function & Memory API(standard).
   2. Unnamed variables & Patterns/String templates(preview).

- `Java SE 23 (2024)`:-
   1. Pattern Matching for Primitives(preview).
   2. Module import declarations(preview).
   3. Generational ZGC/Vector API(incubator).
   4. Simplified class Declarations(preview).

- `Java SE 24 (2025)`:-
   1. Compact Object Headers.
   2. Enhanced Pattern Matching by allowing primitive types in all pattern contexts, and extend instanceof and switch to work with all primitive types.Align type patterns with instance of, and align instanceof with safe casting.
   3. Improved Foreign Function & Memory API.


## Reflection API

Java Reflection API allows inspection and manipulation of classes, methods, and fields at runtime.
It enables dynamic behavior in Java applications.
Used for frameworks, libraries, and testing tools.

Key Capabilities of Reflection API:-

1. Inspect Classes & Interfaces: Get class metadata dynamically.
2. Access Private Fields & Methods: Modify inaccessible members.
3. Invoke Methods Dynamically: Call methods at runtime.
4. Create Objects at Runtime: Instantiate classes without knowing their names at compile time.

Use Reflection API:-

1. Obtain **Class** object using `Class.forName("classname")`.
2. Retrieve methods, fields, and constructors dynamically.
3. Modify private fields using `setAccessible(true)`.
4. Invoke methods using `invoke()`.

Reflection API is Used:-

- **Frameworks & Libraries**: Spring,Hibernate, JUnit.
- **Dependency Injection**: Creating instances dynamically.
- **Serialization & Deserialization**: Handling object transformation.
- **Debugging & Testing Tools**: Mocking private methods in testing.

Reflection is slower than direct method calls.It Should be used only when necessary.It may break encapsulation and security policies.

```java
Class<?> clazz = Class.forName("com.example.MyClass");
Method[] methods = clazz.getDeclaredMethods();
for (Method method : methods) {
   System.out.println("Method: " + method.getName());
}

Field field = clazz.getDeclaredField("privateVar");
field.setAccessible(true);
Object value = field.get(instance);
System.out.println("Value: " + value);
```



Custom Networking — An introduction to the Java platform's powerful networking features.
The Extension Mechanism — How to make custom APIs available to all applications running on the Java platform.
Full-Screen Exclusive Mode API — How to write applications that more fully utilize the user's graphics hardware.
Generics — An enhancement to the type system that supports operations on objects of various types while providing compile-time type safety. Note that this lesson is for advanced users. The Java Language trail contains a Generics lesson that is suitable for beginners.
Internationalization — An introduction to designing software so that it can be easily adapted (localized) to various languages and regions.
JavaBeans — The Java platform's component technology.
JAXB — Introduces the Java architecture for XML Binding (JAXB) technology.
JAXP — Introduces the Java API for XML Processing (JAXP) technology.
JDBC Database Access — Introduces an API for connectivity between the Java applications and a wide range of databases and data sources.
JMX— Java Management Extensions provides a standard way of managing resources such as applications, devices, and services.
JNDI— Java Naming and Directory Interface enables accessing the Naming and Directory Service such as DNS and LDAP.
Reflection — An API that represents ("reflects") the classes, interfaces, and objects in the current Java Virtual Machine.
RMI — The Remote Method Invocation API allows an object to invoke methods of an object running on another Java Virtual Machine.
Security — Java platform features that help protect applications from malicious software.
Sockets Direct Protocol — How to enable the Sockets Direct Protocol to take advantage of InfiniBand.
Sound — An API for playing sound data from applications.
2D Graphics — How to display and print 2D graphics in applications.

Creating Graphical User Interfaces
Creating a GUI with Swing — A comprehensive introduction to GUI creation on the Java platform.
Creating a JavaFX GUI — A collection of JavaFX tutorials.


- *Java Fundamentals*
- *Java Object-Oriented Programming*
- *Java Collections Framework*
- *I/O & Networking in Java*
- *Concurrency in Java*
- *Databases in Java*
- *Design Patterns in Java*
- *Data Structures in Java*
- *Algorithms in Java*
- *Kotlin - Modern JVM Language*
- *Android Development (Kotlin)*
- *Android Libraries (Kotlin)*
- *Unit Testing in Java/Kotlin*
