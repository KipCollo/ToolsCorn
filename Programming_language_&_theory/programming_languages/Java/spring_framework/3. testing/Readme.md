# Test

Spring’s support for integration testing and best practices for unit testing. The Spring team advocates test-driven development (TDD). The Spring team has found that the correct use of inversion of control (IoC) certainly does make both unit and integration testing easier (in that the presence of setter methods and appropriate constructors on classes makes them easier to wire together in a test without having to set up service locator registries and similar structures).
The `Test module` supports the testing of Spring components with JUnit or TestNG. It provides consistent loading of Spring ApplicationContexts and caching of those contexts. It also provides mock objects that you can use to test your code in isolation.

**Unit Testing**:-

Dependency injection should make your code less dependent on the container than it would be with traditional J2EE / Java EE development. The POJOs that make up your application should be testable in JUnit or TestNG tests, with objects instantiated by using the new operator, without Spring or any other container. You can use mock objects (in conjunction with other valuable testing techniques) to test your code in isolation. If you follow the architecture recommendations for Spring, the resulting clean layering and componentization of your codebase facilitate easier unit testing. For example, you can test service layer objects by stubbing or mocking DAO or repository interfaces, without needing to access persistent data while running unit tests.

Unit tests typically run extremely quickly, as there is no runtime infrastructure to set up.Emphasizing true unit tests as part of your development methodology can boost your productivity.

*Mock Objects*:- 

`Environment` - The org.springframework.mock.env package contains mock implementations of the Environment and PropertySource abstractions.MockEnvironment and MockPropertySource are useful for developing out-of-container tests for code that depends on environment-specific properties.
`JNDI` - The org.springframework.mock.jndi package contains an implementation of the JNDI SPI, which you can use to set up a simple JNDI environment for test suites or stand-alone applications.If, for example, JDBC DataSources get bound to the same JNDI names in test code as within a Java EE container, you can reuse both application code and configuration in testing scenarios without modification.
`Servlet API` - The org.springframework.mock.web package contains a comprehensive set of Servlet API mock objects, targeted at usage with Spring’s Web MVC framework, which are useful for testing web contexts and controllers. These mock objects are generally more convenient to use than dynamic mock objects such as EasyMock or existing Servlet API mock objects such as MockObjects.
`Portlet API` - The org.springframework.mock.web.portlet package contains a set of Portlet API mock objects, targeted at usage with Spring’s Portlet MVC framework.


**Integration Testing**:- It is important to be able to perform some integration testing without requiring deployment to your application server or connecting to other enterprise infrastructure. This will enable you to test things such as:
1. The correct wiring of your Spring IoC container contexts.
2. Data access using JDBC or an ORM tool. This would include such things as the correctness of SQL statements, Hibernate queries, JPA entity mappings, etc.

The Spring Framework provides first-class support for integration testing in the spring-test module.


In Spring 2.5 and later, unit and integration testing support is provided in the form of the annotation-driven `Spring TestContext Framework`. The TestContext framework is agnostic of the actual testing framework in use, thus allowing instrumentation of tests in various environments including JUnit, TestNG, and so on.
Spring’s integration testing support has the following primary goals:
- To manage Spring IoC container caching between test execution.
- To provide Dependency Injection of test fixture instances.
- To provide transaction management appropriate to integration testing.
- To supply Spring-specific base classes that assist developers in writing integration tests.

*Context management and caching*:- The Spring TestContext Framework provides consistent loading of Spring ApplicationContexts and WebApplicationContexts as well as caching of those contexts. Support for the caching of loaded contexts is important, because startup time can become an issue — not because of the overhead of Spring itself, but because the objects instantiated by the Spring container take time to instantiate. For example, a project with 50 to 100 Hibernate mapping files might take 10 to 20 seconds to load the mapping files, and incurring that cost before running every test in every test fixture leads to slower overall test runs that reduce developer productivity.
Test classes typically declare either an array of resource locations for XML configuration metadata — often in the classpath — or an array of annotated classes that is used to configure the application. These locations or classes are the same as or similar to those specified in web.xml or other deployment configuration files.

By default, once loaded, the configured ApplicationContext is reused for each test. Thus the setup cost is incurred only once per test suite, and subsequent test execution is much faster. In this context, the term test suite means all tests run in the same JVM — for example, all tests run from an Ant, Maven, or Gradle build for a given project or module. In the unlikely case that a test corrupts the application context and requires reloading — for example, by modifying a bean definition or the state of an application object — the TestContext framework can be configured to reload the configuration and rebuild the application context before executing the next test.


*Annotations*:-

**Spring Testing Annotations**:- The Spring Framework provides the following set of Spring-specific annotations that you can use in your unit and integration tests in conjunction with the TestContext framework.

`@ContextConfiguration`:- Defines class-level metadata that is used to determine how to load and configure an ApplicationContext for integration tests. Specifically, @ContextConfiguration declares the application context resource locations or the annotated classes that will be used to load the context.
Resource locations are typically XML configuration files located in the classpath; whereas, annotated classes are typically @Configuration classes. However, resource locations can also refer to files in the file system, and annotated classes can be component classes, etc.

## Spring TestContext Framework

The Spring TestContext Framework (located in the org.springframework.test.context
package) provides generic, annotation-driven unit and integration testing support that is agnostic of the testing framework in use. The TestContext framework also places a great deal of importance on convention over configuration with reasonable defaults that can be overridden through annotation-based configuration.
In addition to generic testing infrastructure, the TestContext framework provides explicit support for JUnit and TestNG in the form of abstract support classes. For JUnit, Spring also provides a custom JUnit Runner that allows one to write so-called POJO test classes. POJO test classes are not required to extend a particular class hierarchy.

- *Annotated Classes*:- The term annotated class can refer to any of the following.
    - A class annotated with @Configuration
    - A component (i.e., a class annotated with @Component, @Service, @Repository, etc.)
    - A JSR-330 compliant class that is annotated with javax.inject annotations
    - Any other class that contains @Bean-methods.


`Declaring test property sources` - Test properties files can be configured via the `locations` or `value` attribute of @TestPropertySource as shown in the following example.
Both traditional and XML-based properties file formats are supported — for example, "classpath:/ com/example/test.properties" or "file:/path/to/file.xml".

```java
@ContextConfiguration
@TestPropertySource("/test.properties")
public class MyIntegrationTests {
    // class body...
}
```


**Spring MVC Test Framework**:- The Spring MVC Test framework provides first class JUnit support for testing client and server-side Spring MVC code through a fluent API. Typically it loads the actual Spring configuration through the TestContext framework and always uses the DispatcherServlet to process requests thus approximating full integration tests without requiring a running Servlet container.
Client-side tests are RestTemplate-based and allow tests for code that relies on the RestTemplate without requiring a running server to respond to the requests.

*Server-Side Tests*:- Before Spring Framework 3.2, the most likely way to test a Spring MVC controller was to write a unit test that instantiates the controller, injects it with mock or stub dependencies, and then calls its methods directly, using a MockHttpServletRequest and MockHttpServletResponse where necessary.

Below is an example of a test requesting account information in JSON format:

```java
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration("test-servlet-context.xml")
public class ExampleTests {
    @Autowired
    private WebApplicationContext wac;
    private MockMvc mockMvc;

    @Before
    public void setup() {
        this.mockMvc = MockMvcBuilders.webAppContextSetup(this.wac).build();
    }

    @Test
    public void getAccount() throws Exception {
        this.mockMvc.perform(get("/accounts/1").accept(MediaType.parseMediaType("application/json;charset=UTF-8")))
            .andExpect(status().isOk())
            .andExpect(content().contentType("application/json"))
            .andExpect(jsonPath("$.name").value("Lee"));
    }
}
```