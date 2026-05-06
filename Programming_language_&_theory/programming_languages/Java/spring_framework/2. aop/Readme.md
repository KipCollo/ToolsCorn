# AOP and Instrumentation

Aspect-oriented Programming (AOP) complements Object-oriented Programming (OOP) by providing another way of thinking about program structure. The key unit of modularity in OOP is the class, whereas in AOP the unit of modularity is the aspect. Aspects enable the modularization of concerns (such as transaction management) that cut across multiple types and objects. (Such concerns are often termed `crosscutting` concerns in AOP literature.)

One of the key components of Spring is the AOP framework. While the Spring IoC container does not depend on AOP, AOP complements Spring IoC to provide a very capable middleware solution.
Spring provides simple and powerful ways of writing custom aspects by using either a schema-based approach or the @AspectJ annotation style. Both of these styles offer fully typed advice and use of the AspectJ pointcut language while still using Spring AOP for weaving

AOP is used in the Spring Framework to:
1. Provide declarative enterprise services. The most important such service is declarative transaction management.
2. Let users implement custom aspects, complementing their use of OOP with AOP.

AOP Concepts:-

- `Aspect`: A modularization of a concern that cuts across multiple classes. Transaction management is a good example of a crosscutting concern in enterprise Java applications. In Spring AOP, aspects are implemented by using regular classes (the schema-based approach) or regular classes annotated with the @Aspect annotation(the @AspectJ style).
- `Join point`: A point during the execution of a program, such as the execution of a method or the handling of an exception. In Spring AOP, a join point always represents a method execution.
- `Advice`: Action taken by an aspect at a particular join point. Different types of advice include “around”, “before” and “after” advice.Many AOP frameworks, including Spring, model an advice as an interceptor and maintain a chain of interceptors around the join point.
- `Pointcut`: A predicate that matches join points. Advice is associated with a pointcut expression and runs at any join point matched by the pointcut (for example, the execution of a method with a certain name). The concept of join points as matched by pointcut expressions is central to AOP, and Spring uses the AspectJ pointcut expression language by default.
- `Introduction`: Declaring additional methods or fields on behalf of a type. Spring AOP lets you introduce new interfaces (and a corresponding implementation) to any advised object. For example, you could use an introduction to make a bean implement an IsModified interface, to simplify caching. (An introduction is known as an inter-type declaration in the AspectJ community.)
- `Target object`: An object being advised by one or more aspects. Also referred to as the “advised object”. Since Spring AOP is implemented by using runtime proxies, this object is always a proxied object.
- `AOP proxy`: An object created by the AOP framework in order to implement the aspect contracts (advise method executions and so on). In the Spring Framework, an AOP proxy is a JDK dynamic proxy or a CGLIB proxy.
- `Weaving`: linking aspects with other application types or objects to create an advised object. This can be done at compile time (using the AspectJ compiler, for example), load time, or at runtime.Spring AOP, like other pure Java AOP frameworks, performs weaving at runtime.


----

1. `Spring’s AOP module` provides an AOP Alliance-compliant aspect-oriented programming implementation allowing you to define, for example, method-interceptors and pointcuts to cleanly decouple code that implements functionality that should be separated. Using source-level metadata functionality, you can also incorporate behavioral information into your code, in a manner similar to that of .NET attributes.
2. The `separate Aspects module` provides integration with AspectJ.
3. The `Instrumentation module` provides class instrumentation support and classloader implementations to be used in certain application servers.

Development of aspects in a Spring based application.Provides interoperability between Spring and other frameworks Supports metadata programming to Spring.

Although DI makes it possible to tie software components together loosely, aspect-oriented programming enables you to capture functionality that’s used throughout your application in reusable components.

In software development, functions that span multiple points of an application are called cross-cutting concerns. Typically, these cross-cutting concerns are conceptually
separate from (but often embedded directly within) the application’s business logic.
Separating these cross-cutting concerns from the business logic is where aspect-oriented programming (AOP) goes to work.


Aspect-oriented programming is often defined as a technique that promotes separation of concerns within a software system. Systems are composed of several components, each responsible for a specific piece of functionality. Often these components also carry additional responsibility beyond their core functionality. System services such as logging, transaction management, and security often find their way into components whose core responsibility is something else. These system services are commonly referred to as cross-cutting concerns because they tend to cut across multiple
components in a system.
By spreading these concerns across multiple components, you introduce two levels of complexity to your code:

- The code that implements the systemwide concerns is duplicated across multiple components. This means that if you need to change how those concerns work, you’ll need to visit multiple components. Even if you’ve abstracted the concern to a separate module so that the impact to your components is a single method call, that method call is duplicated in multiple places.
- Your components are littered with code that isn’t aligned with their core functionality. A method to add an entry to an address book should only be concerned with how to add the address and not with whether it’s secure or transactional.


AOP makes it possible to modularize these services and then apply them declaratively to the components that they should affect. This results in components that are more
cohesive and that focus on their own specific concerns, completely ignorant of any sys-tem services that may be involved. In short, aspects ensure that POJOs remain plain.

At its core, an application consists of modules that implement business functionality. With AOP, you can then cover your core application with layers of functionality. These layers can be applied declaratively throughout your application in a flexible manner without your core application even knowing they exist. This is a powerful concept, as it keeps the security, transaction, and logging concerns from littering the application’s core business logic.

Aspect Oriented Programming (AOP) is a programming paradigm that promotes programmers to develop code in different modules that can be parallel or in crosscutting concerns.
E.g. To develop banking software, one team can work on business logic for Money withdrawal, Money deposit, Money Transfer etc.
The other team can work on Transaction Management for committing the transaction across multiple accounts.
In an Auto company, one team can work on software to integrate with different components of car. The other team can work on how all the components will send signal and current information to a common dashboard.


An Aspect is the core construct of AOP. It encapsulates the behavior that affects multiple classes in a reusable module.
An Aspect can have a group of APIs that provide cross-cutting features.
E.g. A logging module can be an Aspect in an Application.
An application can have multiple of Aspects based on the different requirements.
An Aspect can be implemented by using annotation @Aspect on a class.


A Concern in Spring is the behavior or expectation from an
application. It can be the main feature that we want to implement in
the application.
A Cross cutting concern is also a type of Concern. It is the feature or
functionality that is spread throughout the application in a thin way.
E.g. Security, Logging, Transaction Management etc. are cross
cutting concerns in an application.


In Spring AOP, Joinpoint refers to a candidate point in application
where we can plug in an Aspect.
Joinpoint can be a method or an exception or a field getting
modified.
This is the place where the code of an Aspect is inserted to add new
behavior in the existing execution flow.


An Advice in Spring AOP, is an object containing the actual action
that an Aspect introduces.
An Advice is the code of cross cutting concern that gets executed.
There are multiple types of Advice in Spring AOP.


Spring AOP provides five kinds of Advice:
1.Before Advice: This type of advice runs just before a
method executes. We can use @Before annotation for this.
2.After (finally) Advice: This type of advice runs just after a
method executes. Even if the method fails, this advice will
run. We can use @After annotation here.
3.After Returning Advice: This type of advice runs after a
method executes successfully. @AfterReturning annotation
can be used here.
4.After Throwing Advice: This type of advice runs after a
method executes and throws an exception. The annotation
to be used is @AfterThrowing.
5.Around Advice: This type of advice runs before and after
the method is invoked. We use @Around annotation for
this.


A Pointcut in Spring AOP refers to the group of one or more
Joinpoints where an advice can be applied.
We can apply Advice to any Joinpoint. But we want to limit the
places where a specific type of Advice should be applied. To
achieve this we use Pointcut.
We can use class names, method names or regular expressions to
specify the Pointcuts for an Advice.


In Spring AOP we can declare additional methods or fields on
behalf of a type. To do this we use an Introduction. It is also known
as inter-type declaration.
E.g. We can use an Introduction for making a bean implement
IsModified interface


A Target object is the object that gets Advice from one or more
Aspects.
This is also known as advised object.
In most cases it is a proxy object.


In Spring AOP, a Proxy is an object created by the AOP framework
to implement Aspect contracts. It is generally a JDK dynamic proxy
or CGLIB proxy.


Spring AOP provides following standard types of Autoproxy
creators:
1.BeanNameAutoProxyCreator:
This
is
a
BeanPostProcessor that creates AOP proxies for beans
automatically by matching names.
2.DefaultAdvisorAutoProxyCreator: This creator is more
powerful that other Proxy Creators. This also applies
eligible advisors automatically to bean in the current
context.
3.AbstractAdvisorAutoProxyCreator: This is the parent
class of DefaultAdvisorAutoProxyCreator. We can create
our own auto-proxy creators by extending this class.


In Aspect oriented programming, linking Aspects with the other
application types creates an Advised object. This process is known
as Weaving.
Without Weaving, we just have definition of Aspects. Weaving
makes use realize full potential of the AOP.
Weaving can be done at compile time, load time or at run time.

Spring container performs Weaving at run time.

Spring allows for implementing Aspect by using regular classes and
XML based configurations. This is different from Annotation based
Aspect implementation. But it achieves the same goal of AOP.
We can use elements like <aop:aspect id=”testAspect"
ref="testBean" /> and <aop:pointcut id="testPointcut" /> in Spring
XML config file.
To use this we need to import Spring AOP schema as follows:
<beans xmlns="http://www.springframework.org/schema/beans"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xmlns:aop="http://www.springframework.org/schema/aop"
xsi:schemaLocation="http://www.springframework.org/schema/beans
http://www.springframework.org/schema/beans/spring-beans-
3.0.xsd
http://www.springframework.org/schema/aop
http://www.springframework.org/schema/aop/spring-aop-3.0.xsd
">


This is a declarative style AOP implementation. In this case, we use
annotations like @Aspect, @Pointcut, @Joinpoint etc. to annotate
code with different types of AOP elements.
This can be used Java 5 onwards, when the support for Annotations
was introduced.


Practical applications of aspects, includes declarative transactions, security,Logging, and caching.

Aspects offer an alternative to inheritance and delegation that can be cleaner in  many circumstances. With AOP, you still define the common functionality in one
place, but you can declaratively define how and where this functionality is applied without having to modify the class to which you’re applying the new feature. Cross-
cutting concerns can now be modularized into special classes called `aspects`. 

This has two benefits:-

1. First, the logic for each concern is in one place, as opposed to being scattered all over the code base. 
2. Second, your service modules are cleaner because they only contain code for their primary concern (or core functionality), and secondary concerns have been moved to aspects.

Aspects are often described in terms of advice, pointcuts, and join points.

`ADVICE`: aspects have a purpose—a job they’re meant to do. In AOP terms, the job of an aspect is called advice.
Advice defines both the what and the when of an aspect. In addition to describing the job that an aspect will perform, advice addresses the question of when to perform the job.

Spring aspects can work with five kinds of advice:
1. Before—The advice functionality takes place before the advised method is invoked.
2. After—The advice functionality takes place after the advised method completes,regardless of the outcome.
3. After-returning—The advice functionality takes place after the advised method successfully completes.
4. After-throwing—The advice functionality takes place after the advised method throws an exception.
5. Around—The advice wraps the advised method, providing some functionality before and after the advised method is invoked



