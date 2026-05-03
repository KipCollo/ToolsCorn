# Spring Framework

Spring Framework is an open-source framework for building enterprise Java applications.It aims to simplify the complex Enterprise Java application development.

Spring enables you to build applications from "plain old Java objects" (POJOs) and to apply enterprise services non-invasively to POJOs. This capability applies to the Java SE programming model and to full and partial Java EE.

1. `The core Spring Framework`:- The core Spring Framework is the foundation of everything else in the Spring universe. It provides the core container and dependency injection framework. But it also provides a few other essential features.Among these is Spring MVC, Spring’s web framework(Building web apss and web services),data persistence support,specifically, template-based JDBC support(JdbcTemplate),reactive-style programming, including a new reactive web framework called Spring WebFlux that borrows heavily from Spring MVC.

2. `Spring Boot` - The benefits of Spring Boot, includes starter dependencies and autoconfiguration.In addition Spring Boot also offers the following other useful features:
  - The Actuator provides runtime insight into the inner workings of an application, including metrics, thread dump information, application health, and environment properties available to the application.
  - Flexible specification of environment properties.
  - Additional testing support on top of the testing assistance found in the core framework.
Spring Boot offers an alternative programming model based on Groovy scripts that’s called the Spring Boot CLI (command-line interface). With the Spring Boot CLI, you can write entire applications as a collection of Groovy scripts and run them from the command line.

3. `Spring Data`:-Although the core Spring Framework comes with basic data persistence support,Spring Data provides something quite amazing: the ability to define your application’s data repositories as simple Java interfaces, using a naming convention when defining methods to drive how data is stored and retrieved.
Spring Data is capable of working with several different kinds of databases, including relational (via JDBC or JPA), document (Mongo), graph (Neo4j),and others.

4. `Spring Security`:- Spring Security addresses a broad range of application security needs, including authentication, authorization, and API security.

5. `Spring Integration and Spring Batch`:- At some point, most applications will need to integrate with other applications or even with other components of the same application. Several patterns of application integration have emerged to address these needs. Spring Integration and Spring Batch provide the implementation of these patterns for Spring applications.
Spring Integration addresses real-time integration where data is processed as it’s made available. In contrast, Spring Batch addresses batched integration where data is allowed to collect for a time until some trigger (perhaps a time trigger) signals that it’s time for the batch of data to be processed.

6. `Spring Cloud`:- A collection of projects for developing cloud-native applications with Spring.

7. `Spring Native` - A relatively new development in Spring is the Spring Native project. This experimental project enables compilation of Spring Boot projects into native executables using the GraalVM native-image compiler, resulting in images that start significantly faster and have a lighter footprint.


## Spring Boot

`Introduction`:-

1. Spring & spring boot.
2. Introduction to spring boot.
3. Features of spring boot.
4. Approach to create Spring Boot Application:- 
  - Manual approach
  - Using STS IDE
  - using https;//start.spring.io
5. Understanding entry point class & @SpringBootApplication annotation.
6. Customize spring boot appliction.
7. Application properties.

`Spring Boot starter dependencies and Auto-configuration`:-

1. Spring Boot starters.
2. Spring Boot starter dependencies and their configurations.
3. spring-boot-starter-web.
4. spring-boot-starter-cache.
5. spring-boot-starter-test.
6. spring-boot-starter-security.
7. spring-boot-starter-data-jpa.
8. spring-boot-starter-actuator.
9. spring-boot-starter-logging.
10. spring-boot-starter-aop.
11. autoconfigurations.
12. Conditional on Class
13. Conditional on bean.
14. conditional on property.

`spring core`:-

1. Dependencies injection - Setter injection,Constructor injector
2. Bean configuration:- XML,Java Config,Autowired.
3. Spring Bean lifecycle.
4. Spring core annotations:- @Bean, @Component,@ComponentScan,@Autowired,@Qualifier,@Import,@PropertySource,@Value,@Profile.

`Spring Boot Annotations`:-

1. @EnableAutoConfiguration.
2. @SpringBootApplication.
3. @SpringBootConfiguration.

`Spring MVC - Build web applications & RESTful services`:-

1. Spring MVC architecture.
2. embedded Servlet containers:- Tomcat,Jetty,Undertow,Netty
3. Spring MVC annotations:- @PathVariable, @RequestParam,@RequestHeader,@RequestBody,@ResponseBody,@RequestMapping,@GetMapping,@PostMapping
4. Web application Thymeleaf.
5. File upload & Download
6. Working with swagger API management tool
7. spring Boot jar and war packaging.

`Spring boot internals`:-

1. @SpringbootApplication annotation internals.
2. SpringApplication.run() method internals.
3. Autoconfiguration internal work.
4. Custom auto configuration.
5. Embedded server internals.
6. configuration properties file.
7. Custom properties file loading.
8. custom springboot starter dependencies.
9. customize embedded tomcat server.
10. Difference between normal jar and springboot jar.

`spring data JPA`:-

1. Spring JDBC intro.
2. Persistence layer.
3. ORM.
4. Difference between Spring ORM and Spring Data.
5. Spring Data JPA interfaces - CrudRepository,PagingAndSortingRepository,JpaRepository.
6. Jpa predefined methods - save() method,saveAll(),findById(),findAllById(),findAll(),deleteById(),deleteallById(),delete(),count().
7. JPA user defined methods - findByXXX()
8. DJPA custom queries execution.

`Spring Rest`:-

1. Distributed applications.
2. Distributed technologies.
3. SOAP & REST.
4. RESTful services.
5. XML
6. XSD.
7. JAXB 
8. JACKSON - XML vs JSON,JACKSON API,Json Data types, Json annotations, Json serialize & Deserialize,GSON API.
9. HTTP protocol
10. Rest annotations and HTTP annoations:- @RestController,@RequestBody,@ResponseBody,@RequestParam,@PathVariable,Media types,Consumes,Produces.
11. RESTful services testing:- SOAP UI,POSTMAN,SWAGGER.
12. Swagger implementation.
13. Exception Handling in REST API.
14. REST security - Message level security,SSL.
15. Rest client types:- RestTemplate,WebClient,Jessy,RestEasy.
16. Synchronous & Asynchronous calls.

`Spring Boot Actuator`:-

HEALTH,Info,Metrics,Threaddump,Beans,Mappings,Shutdown.

`Runner in Spring Boot`:-

1. Application Runner.
2. CommandLine Runner.

`Spring Boot Devtools`
`Spring boot logging`
`Spring Boot profiles`
`Spring Boot Events and Listeners`
`Advanced`:-

1. Spring boot Redis Cache Integration.
2. Spring Boot Parallel with docker
3. Spring boot Parallel calls implementation.
4. Spring boot application AWS deployments using Jenkins.
5. Spring boot Kafka integration.

## Spring Cloud with Microservices

`Introduction`:-

1. Introduction to Spring boot and REST API.
2. Cloud characteristics.
3. Horizontal & Vertical scaling.
4. Monolithic Applications & Microservices.
5. Splitting Monolithic application into microservices.

`Evolution of Spring cloud`:-

1. Spring cloud BOM and Dependency Management
2. Netflix Eureka,a discovery server.
3. Netflix Ribbon, a client-side load balancer.
4. Netflix Zuul,an edge server.
5. Netflix Hystrix,a circuit breaker.

`Spring cloud config server & Config Client`:-

`Service Discovery using Netflix Eureka`:_

1. Problem with DNS based service recovery.
2. Configuring Eureka server.
3. Configuring clients to Eureka server.
4. Register Microservices with Eureka server.
5. Register Config server with Eureka server.
6. Eureka Configuration parameters.

`Microservices Interservice communication`:-

1. Load balancewr(Cluster)
2. Load Balancing algorithms.
3. Discovery client(Server-side Load Balancing).
4. Ribbon Client(Client-Side Load Balancing).
5. Feign client.

`Resilient system`:-

1. Circuit breaker.
2. Resilience$j.
3. Time Limiter.
4. Retry mechanism.

`Spring Cloud Gateway`:-

1. Configuring microservices.
2. Routing Rules.
3. Configure Eureka server to route microservices.

`Distributed Logging & Centralized Logging`:-

1. Sleuth Logging.
2. Zipkin server.
3. ELK

`Security`:-

1. OAUTH2.0

`Microservices with Docker & Kubernetes`


## Three-Tier app

A multitier architecture provides our application with a more production-ready look.Most real-world applications follow this architecture pattern.They include:

1. `Client tier`:- Responsible for user interfaces.Maps to frontend.
2. `Application tier`:- It contains all business logic together with the interfaces to interact with it nd the data interfaces for persistence.Maps with what we call backend.
3. `Data store`:- It is database,file system,etc that persists application's data.

The applications tier is designed using layers:

1. `Business Layer`:-The classes that model our domain and business specifics.It's where intelligence of the application resides.Composed of entities and services providing business logic.Sometimes this layer is divided into two parts domains(entities) and applications(services).
2. `Presentation Layer`:- Represented by Controller classes,which will provide functionality to Web Client.REST API implementation resides here.
3. `Data Layer`:- Responsible for persisting entities in data storage,usually database.It can typically include Data Access Object(DAO) classes,which work with direct representation of database models or repository classes,which are domain-centric and translate from domains to database layer.

## FOLDER STRUCTURE(Best practises)

1. `Controller(API Layer)`: This folder contains REST APIs endpoints.Marked with @RestController annotation,it handles HTTP requests(GET,PUT,DELETE,POST)
It calls the Service layer and returns the results to user in JSON format.E.g
  - /products endpoints returns list of products
  - /products/{id} endpoint displays a specific products
2. `Service Layer(Business Logic)`: This layer handles business rules and logic.Processes data received from the Controller.
All dependencies are injected using using constructor injection E.g
 When adding a new product,stock and price limitations are checked here
3. `Repository layer(Database Operations)`: Establishes a connection with he database.It provides CRUD operations through JpaRepository or CrudRepository.
E.g
  productRepository is used to query product objects from database.
4. `Model Layer(Entity and DTO Objects)`: This layer stores both entity and DTO classes.Entity objects corresponds to database tables.DTO objects are used for data transfers and prevent direct sharing of Entities with the API.E.g
  ProductEntity
  ProductDTO: Object that Returns only necessary information
5. `Mapper Layer(Entity-DTO conversion)`: This layer handles conversation between Entity and DTO.Can utilize MapStruct or manual mapper classes.E.g
  The ProductMapper class converts  product object to ProductDTO.
6. `Exception Layer(error Handling)`: This layer contains specific exception classes and a Global Exception Handler to manage errors occurring in project
Global error management is ensured with @ControllerAdvice annotation.E.g
  ProductNotFoundException: thrown when a product is not found
  GlobalExceptionHandler: Returns a standard response for all errors occurring in project

