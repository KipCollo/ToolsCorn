# Test

Spring’s support for integration testing and best practices for unit testing. The Spring team advocates test-driven development (TDD). The Spring team has found that the correct use of inversion of control (IoC) certainly does make both unit and integration testing easier (in that the presence of setter methods and appropriate constructors on classes makes them easier to wire together in a test without having to set up service locator registries and similar structures).
The `Test module` supports the testing of Spring components with JUnit or TestNG. It provides consistent loading of Spring ApplicationContexts and caching of those contexts. It also provides mock objects that you can use to test your code in isolation.


## Unit Testing

Dependency injection should make your code less dependent on the container than it would be with traditional J2EE / Java EE development. The POJOs that make up your application should be testable in JUnit or TestNG tests, with objects instantiated by using the new operator, without Spring or any other container. You can use mock objects (in conjunction with other valuable testing techniques) to test your code in isolation. If you follow the architecture recommendations for Spring, the resulting clean layering and componentization of your codebase facilitate easier unit testing. For example, you can test service layer objects by stubbing or mocking DAO or repository interfaces, without needing to access persistent data while running unit tests.

Unit tests typically run extremely quickly, as there is no runtime infrastructure to set up.Emphasizing true unit tests as part of your development methodology can boost your productivity.

**Mock Objects**:- 

`Environment` - The org.springframework.mock.env package contains mock implementations of the Environment and PropertySource abstractions.MockEnvironment and MockPropertySource are useful for developing out-of-container tests for code that depends on environment-specific properties.
`JNDI` - The org.springframework.mock.jndi package contains an implementation of the JNDI SPI, which you can use to set up a simple JNDI environment for test suites or stand-alone applications.If, for example, JDBC DataSources get bound to the same JNDI names in test code as within a Java EE container, you can reuse both application code and configuration in testing scenarios without modification.
`Servlet API` - The org.springframework.mock.web package contains a comprehensive set of Servlet API mock objects, targeted at usage with Spring’s Web MVC framework, which are useful for testing web contexts and controllers. These mock objects are generally more convenient to use than dynamic mock objects such as EasyMock or existing Servlet API mock objects such as MockObjects.
`Portlet API` - The org.springframework.mock.web.portlet package contains a set of Portlet API mock objects, targeted at usage with Spring’s Portlet MVC framework.


## Annotations

**Spring Testing Annotations**:- The Spring Framework provides the following set of Spring-specific annotations that you can use in your unit and integration tests in conjunction with the TestContext framework.

`@ContextConfiguration`:- Defines class-level metadata that is used to determine how to load and configure an ApplicationContext for integration tests. Specifically, @ContextConfiguration declares the application context resource locations or the annotated classes that will be used to load the context.
Resource locations are typically XML configuration files located in the classpath; whereas, annotated classes are typically @Configuration classes. However, resource locations can also refer to files in the file system, and annotated classes can be component classes, etc.