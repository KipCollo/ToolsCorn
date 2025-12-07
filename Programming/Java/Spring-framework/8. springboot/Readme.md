# Spring boot

Spring Boot is an open-source Java-based framework used to create stand-alone, production-ready Spring applications with minimal configuration. It simplifies the setup and development of new Spring applications by providing default configurations and features like embedded servers (Tomcat, Jetty, etc.),auto-configuration, and a range of built-in tools for rapid development.

Spring Boot makes it easy to create stand-alone, production-grade Spring-based Applications that you can run. We take an opinionated view of the Spring platform and third-party libraries, so that you can get started with minimum fuss. Most SpringBoot applications need very little Spring configuration.

You can use Spring Boot to create Java applications that can be started using java -jar or more traditional war deployments. We also provide a command line tool that runs “spring scripts”.
It does not require any code generation or xml configuration. It is an easy solution to create applications that can run stand-alone.

Spring Drawbacks:

1. A lot of boilerplate code(i.e common code for all project)
2. Dependency management was too hard 
3. Manual configurations(complex,time consuming)
4. Many configurations-More configurations less code.
5. Doesn't support non-functional requirements by default(i.e Healthy checks,metrics,logs,monitoring)

To overcome this drawbacks,spring boot was developed.It is a module in spring framework.we can develop any type of apps in spring boot(Standalone,web..etc)>It is on top of other spring modules.

SPRING     ------->     SPRING MVC,JDBC,SECURITY  -------------->   SPRING   -----------> APPS
CORE                     AOP,BATCH                                   BOOT



## Features of Spring boot

1. Removes boilerplate code
2. `Spring Boot Starters`: A set of dependency descriptors to include necessary libraries.Makes dependency management easier(Dev doesn't need to remember required dependencies)Uses spring boot starter dependencies.Spring Boot aggregates common dependencies together and eventually improves productivity.
3. `Auto-Configurations`- Developer doesn't need to configure the beans(No XML or Java-config).Automatically configures Spring application based on the project’s dependencies.
4. `Actuator`:-Provide a range of non-functional features that are common to large classes of projects (such as  metrics, health checks, and monitoring).
5. `Spring boot CLI`: For quick prototype apps.A command-line tool for quickly prototyping Spring applications and avoiding boilerplate code.
6. `DevTools`: improve developer productivity
7. `Embedded Servers`: Server inside the application.Provides built-in servers like Tomcat or Jetty, so you don't need to deploy WAR files.
8. `Spring Initializer`:- This is a web application which can create an internal project structure for you.


- **An embedded server** is a server that is packaged with your application,allowing it to run as a stand-alone Java application without needing to deploy WAR files to an external server. Spring Boot supports embedded servers like Tomcat, Jetty, and Undertow. This simplifies the deployment process and is especially useful for microservices and containerized applications.
  1. Traditional: Develop------>Deploy----------->External Tomcat server(Configuration(server.xml,catalina.properties))
  2. Modern: Develop------>Deploy-----------Tomcat server within App(embedded server(source code + server config)): Used mostly in cloud
You can also deploy Spring Boot applications to any Servlet 3.0+ compatible container.

## Dependency Management

- **Dependency Management**:- Spring-boot introduced 2 types of dependencies:
  1. spring-boot-starter-parent- For supporting open-source third party libraries.ie.(Jackson,validator,RedisCache,MongoDB..etc) Spring boot parent pom is used to declare and configure spring f/w and their 3rd party related version info.It provides info for all libraries.
  2. spring-boot-starter-xxxx(Where xxxx can be web,jdbc,security,data..)i.e Spring web requires (spring core,MVc,web MVC,jdbv,jackson).The spring-boot-starter-web combines all the modules and their dependencies.

- Spring Version:
  1. Spring Boot 1.x--------->(Spring core,spring mvc,spring JDBC: 3.x)
                    ---------->jackson-1.x,validator-2.x,hibernate-3.x
  2. Spring boot 2.3.5--------->spring core,spring-mvcjdbc: 4.x
                      --------->jackson: 2.x,validator 3.x,hibernate 4.x
  3. spring Boot 2.6.6-------->(Spring core,spring mvc,spring JDBC: 5.x)
                      --------->jackson: 2.5,validator 4.x,hibernate 5.x

Spring Boot Starters are a set of convenient dependency descriptors that aggregate commonly used libraries for specific functionalities that you can include in your application.
The starters contain a lot of the dependencies that you need to get a project up and running quickly and with a consistent, supported set of managed transitive dependencies.

All official starters follow a similar naming pattern; `spring-boot-starter-*`, where * is a particular type of application. This naming structure is intended to help when you need to find a starter.Third party starters should not start with spring-boot as it is reserved for official Spring Boot artifacts. A third-party starter for acme will be typically named acme-spring-boot-starter.

The following application starters org.springframework.boot group:

1. spring-boot-starters: Default starter in spring boot apps.Consists of spring core,spring-boot,spring-boot-autoconfigure,spring-boot-starter-logging,jakarta-annotation-api.
2. spring-boot-starter-web:- Starter for building web, including RESTful, applications using Spring MVC. Uses Tomcat as the default embedded container.
3. spring-boot-starter-data-jpa: Includes dependencies for JPA and Spring Data.
4. spring-boot-starter-security: Includes dependencies for Spring Security.
5. spring-boot-starter-thymeleaf:- Starter for building MVC web applications using Thymeleaf views.
6. spring-boot-starter-data-couchbase:- Starter for using Couchbase document-oriented database and Spring Data Couchbase.
7. spring-boot-starter-artemis:- Starter for JMS messaging using Apache Artemis.
8. spring-boot-starter-web-services:- Starter for using Spring Web Services.
9. spring-boot-starter-mail:- Starter for using Java Mail and Spring Framework’s email sending support.
10. spring-boot-starter-data-redis:- Starter for using Redis key-value data store with Spring Data Redis and the Jedis client.
11. spring-boot-starter-data-mongodb-reactive:- Starter for using MongoDB document-oriented database and Spring Data MongoDB Reactive.
12. spring-boot-starter-activemq:- Starter for JMS messaging using Apache ActiveMQ.
13. spring-boot-starter-data-elasticsearch:- Starter for using Elasticsearch search and analytics engine and Spring Data Elasticsearch.
14. spring-boot-starter-integration:- Starter for using Spring Integration.
15. spring-boot-starter-test:- Starter for testing Spring Boot applications with libraries.
16. spring-boot-starter-webflux:- Starter for building WebFlux applications using Spring Framework’s Reactive Web support.
17. spring-boot-starter-jdbc:- Starter for using JDBC with the Tomcat JDBC connection pool.
18. spring-boot-starter-mobile:- Starter for building web applications using Spring Mobile.
19. spring-boot-starter-validation:- Starter for using Java Bean Validation with Hibernate Validator.
20. spring-boot-starter-hateoas:- Starter for building hypermedia-based RESTful web application with Spring MVC and Spring HATEOAS.
21. spring-boot-starter-jersey:- Starter for building RESTful web applications using JAX-RS and Jersey. An alternative to spring-boot-starter-web.
22. spring-boot-starter-data-neo4j:- Starter for using Neo4j graph database and Spring Data Neo4j.
23. spring-boot-starter-data-ldap:- Starter for using Spring Data LDAP.
24. spring-boot-starter-data-cassandra-reactive:- Starter for using Cassandra distributed database and Spring Data Cassandra Reactive.
25. spring-boot-starter-websocket:- Starter for building WebSocket applications using Spring Framework’s WebSocket support.
26. spring-boot-starter-aop:- Starter for aspect-oriented programming with Spring AOP and AspectJ.
27. spring-boot-starter-amqp:- Starter for using Spring AMQP and Rabbit MQ.

In addition to the application starters, the following starters can be used to add production ready features:

1. spring-boot-starter-actuator:- Starter for using Spring Boot’s Actuator which provides production ready features to help you monitor and manage your application.

Spring Boot also includes some starters that can be used if you want to exclude or swap specific technical facets:

1. spring-boot-starter-undertow:- Starter for using Undertow as the embedded servlet container. An alternative to spring-boot-starter-tomcat.
2. spring-boot-starter-jetty:- Starter for using Jetty as the embedded servlet container. An alternative to spring-boot-starter-tomcat.
3. spring-boot-starter-reactor-netty:- Starter for using Reactor Netty as the embedded reactive HTTP server.
4. spring-boot-starter-logging:- Starter for logging using Logback. Default logging starter.
5. spring-boot-starter-tomcat:- Starter for using Tomcat as the embedded servlet container.Default servlet container starter used by spring-boot-starter-web
6. spring-boot-starter-log4j2:- Starter for using Log4j2 for logging. An alternative to spring-boot-starter-logging.


## Autoconfiguration

- **Autoconfiguration**:- Spring Boot's auto-configuration feature automatically configures your Spring application based on the dependencies present in the classpath. For example, if spring-boot-starter-web is in the classpath, it automatically configures Spring MVC, a dispatcher servlet, and a default embedded server (Tomcat). This reduces the need for manual configuration, allowing you to focus on your application's business logic.
Autoconfiguration file is locaed in /META-INF/spring.factories

You need to opt-in to auto-configuration by adding the `@EnableAutoConfiguration` or `@SpringBootApplication` annotations to one of your @Configuration classes.
You should only ever add one @EnableAutoConfiguration annotation. We generally recommend that you add it to your primary @Configuration class.

Auto-configuration is noninvasive, at any point you can start to define your own configuration to replace specific parts of the auto-configuration.
If you need to find out what auto-configuration is currently being applied, and why, start your application with the --debug switch. This will enable debug logs for a selection of core loggers and log an auto-configuration report to the console.

`Disabling specific auto-configuration`:- If you find that specific auto-configure classes are being applied that you don’t want, you can use the exclude attribute of @EnableAutoConfiguration to disable them.

```java
@Configuration
@EnableAutoConfiguration(exclude={DataSourceAutoConfiguration.class})
public class MyConfiguration {
}
```

If the class is not on the classpath, you can use the excludeName attribute of the annotation and specify the fully qualified name instead. Finally, you can also control the list of auto-configuration classes to exclude via the spring.autoconfigure.exclude property.

Tip - You can define exclusions both at the annotation level and using the property.

`@SpringBootApplication` annotation is responsible for enabling spring boot auto configurations.Consists of @ComponentScan,@EnableAutoConfiguration and @springBootConfiguration

1. @SpringBootConfiguration - Its like spring configuration.Its just renamed from @Configuration to @SpringBootConfiguration
2. @ComponentScan - Scans the Component classes at packages and class levels.Default packagename is current package.
3. @EnableAutoConfiguration - Provides framework related autoconfiguration.i.e enables autoconfiguration.Used to create framework\predefined classes with help of spring.factories file.

We configure beans using xml or java-config or @Autowire with components.Even though we use @Autowire,we still depend on manual configuration i.e we can't use @Component for all classes(We apply only to classes with source code)but can't apply for framework classes like DataSource,JDBCTemplate,RestTamplate,MongoTemplate..

If we want to use framework classes,we should either use @Bean or <bean> element.
i.e

```java
@Configuration
public class Config{

    @Bean
    public DataSource datasource(){
      return new DriverManagerDataSource();
    }

    @Bean
    public JdbcTemplate jdbcTemplate(){
      return new JdbcTemplate();
    }
}
```

```java
	public static void main(String[] args) {
		//SpringApplication.run(SpringSecurityApplication.class, args);
		ApplicationContext context = SpringApplication.run(SpringSecurityApplication.class, args);
		String[] beans = context.getBeanDefinitionNames();
		for (String bean : beans) {
			System.out.println(bean + context.getBeanDefinitionCount());
		}
	}
```

In spring boot apps, you'll write minimal configurations.Others are taken care off by Spring Boot autoconfigurations with help of @SpringBootApplication.
Using Spring Boot we can develop apps using configurations:

1. standalone- ApplicationContext context = new AnnotationconfigApplicationContext(JavaConfig);
2. Web apps- new AnnotationconfigServletWebServerApplicationContext()
3. Reactive apps- new AnnotationconfigReactiveWebServerApplicationContext()


## Developer Tools

- **Developer Tools**:- Spring Boot DevTools is a module that enhances the development experience by providing features like automatic restart, live reload, and configuration properties that are more suitable for development environments. It helps speed up the development process by reducing the need for manual application restarts after code changes.

Spring Boot includes an additional set of tools that can make the application development experience a little more pleasant. The spring-boot-devtools module can be included in any project to provide additional development-time features. To include devtools support, simply add the module dependency to your build:

```xml
<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-devtools</artifactId>
        <optional>true</optional>
    </dependency>
</dependencies>
```

```groovy
dependencies {
    compileOnly("org.springframework.boot:spring-boot-devtools")
}
```

Developer tools are automatically disabled when running a fully packaged application. If your application is launched using java -jar or if it’s started using a special classloader, then it is considered a “production application”. Flagging the dependency as optional in Maven or using compileOnly in Gradle is a best practice that prevents devtools from being transitively applied to other modules using your project.

Repackaged archives do not contain devtools by default. If you want to use certain remote devtools feature, you’ll need to disable the excludeDevtools build property to include it. The property is supported with both the Maven and Gradle plugins.

`Property defaults`:- Several of the libraries supported by Spring Boot use caches to improve performance. For example, template engines will cache compiled templates to avoid repeatedly parsing template files. Also, Spring MVC can add HTTP caching headers to responses when serving static resources.

Whilst caching is very beneficial in production, it can be counter productive during development, preventing you from seeing the changes you just made in your application. For this reason, spring-boot-devtools will disable those caching options by default.

Cache options are usually configured by settings in your application.properties file. For example, Thymeleaf offers the spring.thymeleaf.cache property. Rather than needing to set these properties manually, the spring-boot-devtools module will automatically apply sensible development-time configuration.

`Automatic restart`:- Applications that use *spring-boot-devtools* will automatically restart whenever files on the classpath change. This can be a useful feature when working in an IDE as it gives a very fast feedback loop for code changes. By default, any entry on the classpath that points to a folder will be monitored for changes. Note that certain resources such as static assets and view templates do not need to restart the application.


--------


## Actuator

Spring Boot includes a number of additional features to help you monitor and manage your application when you push it to production. You can choose to manage and monitor your application by using HTTP endpoints or with JMX. Auditing, health, and metrics gathering can also be automatically applied to your application.

Spring Boot Actuator provides a set of production-ready features to monitor and manage your application. It exposes various endpoints, such as:

1. /actuator/health: Displays the health status of the application.
2. actuator/metrics: Provides metrics data like memory usage, CPU usage, and other application statistics.
3. /actuator/env: Displays environment properties. Actuator endpoints can be customized and secured, and it integrates well with monitoring tools like Prometheus and Grafana.

The `spring-boot-actuator` module provides all of Spring Boot’s production-ready features. The recommended way to enable the features is to add a dependency on the spring-boot-starter-actuator ‘Starter’.
An actuator is a manufacturing term that refers to a mechanical device for moving or controlling something. Actuators can generate a large amount of motion from a small change.


**Endpoints**:- Actuator endpoints let you monitor and interact with your application. Spring Boot includes a number of built-in endpoints and lets you add your own. For example, the health endpoint provides basic application health information.
Each individual endpoint can be enabled or disabled and exposed (made remotely accessible) over HTTP or JMX. An endpoint is considered to be available when it is both enabled and exposed. The built-in endpoints will only be auto-configured when they are available. Most applications choose exposure via HTTP, where the ID of the endpoint along with a prefix of /actuator is mapped to a URL. For example, by default, the health endpoint is mapped to /actuator/health.

**Metrics**

Spring Boot Actuator provides dependency management and auto-configuration for Micrometer, an application metrics facade that supports numerous monitoring systems, including:

- AppOptics,Atlas,Datadog,Dynatrace,Elastic,Ganglia,Graphite,Humio,Influx,JMX,KairosDB,New Relic,Prometheus,SignalFx,Simple (in-memory),Stackdriver,StatsD,Wavefront.

Spring Boot auto-configures a composite MeterRegistry and adds a registry to the composite for each of the supported implementations that it finds on the classpath. Having a dependency on micrometer-registry-{system} in your runtime classpath is enough for Spring Boot to configure the registry.
Most registries share common features. For instance, you can disable a particular registry even if the Micrometer registry implementation is on the classpath. For example, to disable Datadog:

```java
management.metrics.export.datadog.enabled=false
```

You can also disable all registries unless stated otherwise by the registry-specific property, as shown in the following example:

```java
management.metrics.export.defaults.enabled=false
```


**Supported Metrics**:- Spring Boot registers the following core metrics when applicable:
1. JVM metrics, report utilization of:
   - Various memory and buffer pools
   - Statistics related to garbage collection
   - Threads utilization
   - Number of classes loaded/unloaded
2. CPU metrics
3. File descriptor metrics
4. Kafka consumer, producer, and streams metrics
5. Log4j2 metrics: record the number of events logged to Log4j2 at each level
6. Logback metrics: record the number of events logged to Logback at each level
7. Uptime metrics: report a gauge for uptime and a fixed gauge representing the application’s absolute start time
8. Tomcat metrics (server.tomcat.mbeanregistry.enabled must be set to true for all Tomcat metrics to be registered)
9. Spring Integration metrics.


---------


## Spring Boot CLI

The Spring Boot CLI is a command line tool that can be used if you want to quickly prototype with Spring.
It allows you to run Groovy scripts, which means that you have a familiar Java-like syntax, without so much boilerplate code.
Spring Boot CLI is a command-line abstraction that allows us to easily run Spring micro-services expressed as Groovy scripts. It also provides simplified and enhanced dependency management for those services.

**Installing the CLI**:-

- `Manual installation`:- You can download the Spring CLI distribution from the Spring software repository:
1. spring-boot-cli-2.0.0.BUILD-SNAPSHOT-bin.zip
2. spring-boot-cli-2.0.0.BUILD-SNAPSHOT-bin.tar.gz

- `Installation with SDKMAN`:- The Spring Boot CLI (Command-Line Interface) can be installed manually by using SDKMAN! (the SDK Manager) or by using Homebrew or MacPorts if you are an OSX user.

```bash
sdk install springboot
```

To verify the install, run the command:

```bash
spring --version
```


Spring Boot CLI provides several useful commands and features out-of-the-box. One of the most helpful features is Spring Shell, which wraps commands with the necessary spring prefix.
To start the embedded shell, we run:

```bash
spring shell
```


## Installation

Spring Boot can be used with “classic” Java development tools or installed as a command line tool.Regardless, you will need Java SDK v1.8 or higher.

## Creating Spring Boot application

There are several ways:

1. `Manually` - using IDEs(Eclipse,STS,IntelliJ):
  - Create maven project
  - Add spring boot parent and required dependencies to pom.xml

 ```xml
  <parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>3.3.5</version>
    <relativePath/> <!-- lookup parent from repository -->
  </parent>

    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
 ```

  - Write Spring boot entry class manually

 ```java

  @SpringBootApplication
   public class Application{

    public static main void(String[] args){
      SpringApplication.run(Application.class,args);
   }
  }
  ```

2. `Using start.spring.io`: No need to write manual code:- Go to the Spring Initializr website, select your project settings (dependencies, Java version, etc.), and generate the project. Import it into your IDE and start coding.
3. `Using Spring Boot CLI`: Install Spring Boot CLI and create a new project by running commands like spring init --dependencies=web myproject.
4. Using spring starter project using `IDEs`.


The main method delegates to Spring Boot’s SpringApplication class by calling run. SpringApplication will bootstrap our application, starting Spring which will in turn start the auto-configured Tomcat web server. We need to pass Example.class as an argument to the run method to tell SpringApplication which is the primary
Spring component. The args array is also passed through to expose any command-line arguments.

To run application:-

```bash
mvn spring-boot:run
```

To gracefully exit the application hit ctrl-c.


Spring Boot does not require any specific code layout to work, however, there are some best practices that help.

`Using the “default” package`:-When a class doesn’t include a package declaration it is considered to be in the “default package”.
The use of the “default package” is generally discouraged, and should be avoided. It can cause particular problems for Spring Boot applications that use @ComponentScan, @EntityScan or @SpringBootApplication annotations, since every class from every jar, will be read.

`Main application class`:- We generally recommend that you locate your main application class in a root package above other classes. The @EnableAutoConfiguration annotation is often placed on your main class, and it implicitly defines a base “search package” for certain items.
Using a root package also allows the @ComponentScan annotation to be used without needing to specify a basePackage attribute. You can also use the @SpringBootApplication annotation if your main class is in the root package.
The main method is a standard method that follows the Java convention for an application entry point. Our main method delegates to Spring Boot’s SpringApplication class by calling run. SpringApplication bootstraps our application, starting Spring, which, in turn, starts the auto-configured Tomcat web server. We need to pass Example.class as an argument to the run method to tell SpringApplication which is the primary Spring component. The args array is also passed through to expose any command-line arguments.


## SpringApplication

The SpringApplication class provides a convenient way to bootstrap a Spring application that is started from a main() method.
In many situations,you can delegate to the static SpringApplication.run method,If your application fails to start, registered FailureAnalyzers get a chance to provide a dedicated error message and a concrete action to fix the problem.
When SpringApplication.run is executed:

1. SpringApplication constructor will identify which container is required.The *deduceFromClassPath()* method will check in classpath,based on classes found in classpath then corresponding spring container is created.
2. An empty environment object will be created.
3. Detected configs of our apps will be loaded into environment object.(application.properties or application.yaml)
4. Prints the boot banner
5. Identifies WebApplicationtype:
   1. If spring mvc jars is found on path,then WebapplicationType=WEB and creates AnnotationConfigServletWebServerApplicationContext
   2. If spring webflux jars is found on path,then WebapplicationType=Reactive and creates AnnotationConfigReactiveWebServerApplicationContext
   3. If none of above is found; then Webapplicationtype=NONE,then it creates AnnotationApplicationContext. 
6. Instantiates spring factories and registers IoC container.
7. Execute ApplicationContextInializer(will detect all autoconfiguration)
8. Then it executes prepareContext
9. Refreshcontext.

- During above stages,it will publish various diff type of events and invokes listeners to perform operation.

`Properties File` - The application.properties (or application.yml) file is used to define application-level configurations in a Spring Boot project.

**Externalized Configuration**:- Spring Boot lets you externalize your configuration so that you can work with the same application code in different environments. You can use a variety of external configuration sources including Java properties files, YAML files, environment variables, and command-line arguments.

Property values can be injected directly into your beans by using the @Value annotation, accessed through Spring’s Environment abstraction, or be bound to structured objects through @ConfigurationProperties.
Spring Boot uses a very particular PropertySource order that is designed to allow sensible overriding of values. Later property sources can override the values defined in earlier ones.

Sources are considered in the following order:

1. Default properties (specified by setting SpringApplication.setDefaultProperties(Map)).
2. @PropertySource annotations on your @Configuration classes. Please note that such property sources are not added to the Environment until the application context is being refreshed. This is too late to configure certain properties such as logging.* and spring.main.* which are read before refresh begins.
3. Config data (such as application.properties files).
4. A RandomValuePropertySource that has properties only in random.*.
5. OS environment variables.
6. Java System properties (System.getProperties()).
7. JNDI attributes from java:comp/env.
8. ServletContext init parameters.
9. ServletConfig init parameters.
10. Properties from SPRING_APPLICATION_JSON (inline JSON embedded in an environment variable or system property).
11. Command line arguments.
12. properties attribute on your tests. Available on @SpringBootTest and the test annotations for testing a particular slice of your application.
13. @DynamicPropertySource annotations in your tests.
14. @TestPropertySource annotations on your tests.
15. Devtools global settings properties in the $HOME/.config/spring-boot directory when devtools is active.

Config data files are considered in the following order:

- Application properties packaged inside your jar (application.properties and YAML variants).
- Profile-specific application properties packaged inside your jar (application-{profile}.properties and YAML variants).
- Application properties outside of your packaged jar (application.properties and YAML variants).
- Profile-specific application properties outside of your packaged jar (application-{profile}.properties and YAML variants).

NOTE:- It is recommended to stick with one format for your entire application. If you have configuration files with both .properties and YAML format in the same location, .properties takes precedence.
If you use environment variables rather than system properties, most operating systems disallow period-separated key names, but you can use underscores instead (for example, SPRING_CONFIG_NAME instead of spring.config.name). 
If your application runs in a servlet container or application server, then JNDI properties (in java:comp/env) or servlet context initialization parameters can be used instead of, or as well as, environment variables or system properties. 

`External Application Properties` - Spring Boot will automatically find and load application.properties and application.yaml files from the following locations when your application starts:

- From the classpath
  1. classpath root
  2. The classpath /config package

- From the current directory
  1. The current directory
  2. The config/ subdirectory in the current directory
  3. Immediate child directories of the config/ subdirectory

The list is ordered by precedence (with values from lower items overriding earlier ones). Documents from the loaded files are added as PropertySource instances to the Spring Environment.

Use the prefix optional: if the locations are optional and you do not mind if they do not exist.
If spring.config.location contains directories (as opposed to files), they should end in /. At runtime they will be appended with the names generated from spring.config.name before being loaded. Files specified in spring.config.location are imported directly.

Locations configured by using spring.config.location replace the default locations. For example, if spring.config.location is configured with the value optional:classpath:/custom-config/,optional:file:./custom-config/, the complete set of locations considered is:

1. optional:classpath:custom-config/
2. optional:file:./custom-config/

`Profile Specific Files` - As well as application property files, Spring Boot will also attempt to load profile-specific files using the naming convention application-{profile}. For example, if your application activates a profile named prod and uses YAML files, then both `application.yaml` and `application-prod.yaml` will be considered.

Profile-specific properties are loaded from the same locations as standard application.properties, with profile-specific files always overriding the non-specific ones. If several profiles are specified, a last-wins strategy applies. For example, if profiles prod,live are specified by the spring.profiles.active property, values in application-prod.properties can be overridden by those in application-live.properties.



**Lazy Initialization**:- SpringApplication allows an application to be initialized lazily. When lazy initialization is enabled, beans are created as they are needed rather than during application startup. As a result, enabling lazy initialization can reduce the time that it takes your application to start. In a web application,
enabling lazy initialization will result in many web-related beans not being initialized until an HTTP request is received.
A downside of lazy initialization is that it can delay the discovery of a problem with the application.
If a misconfigured bean is initialized lazily, a failure will no longer occur during startup and the problem will only become apparent when the bean is initialized. Care must also be taken to ensure that the JVM has sufficient memory to accommodate all of the application’s beans and not just those
that are initialized during startup. For these reasons, lazy initialization is not enabled by default and it is recommended that fine-tuning of the JVM’s heap size is done before enabling lazy initialization.
Lazy initialization can be enabled programmatically using the lazyInitialization method on SpringApplicationBuilder or the setLazyInitialization method on SpringApplication. Alternatively,it can be enabled using the spring.main.lazy-initialization property.

```java
spring.main.lazy-initialization=true
```

`Customizing the Banner`:- The banner that is printed on start up can be changed by adding a banner.txt file to your classpath or by setting the spring.banner.location property to the location of such a file. If the file has an encoding other than UTF-8, you can set spring.banner.charset. In addition to a text file, you can also
add a banner.gif, banner.jpg, or banner.png image file to your classpath or set the spring.banner.image.location property. Images are converted into an ASCII art representation and printed above any text banner.
Inside your banner.txt file, you can use any of the following placeholders:
1. ${application.version} - The version number of your application, as declared in MANIFEST.MF. For example, Implementation-Version: 1.0 is printed as 1.0.
2. ${application.formatted-version} - The version number of your application, as declared in MANIFEST.MF and formatted for display (surrounded with brackets and prefixed
with v). For example (v1.0).
3. ${spring-boot.version} - The Spring Boot version that you are using. For example 2.4.3.
4. ${spring-boot.formatted-version} - The Spring Boot version that you are using, formatted for display (surrounded with brackets and prefixed with v). For example (v2.4.3).
5. ${Ansi.NAME} (or ${AnsiColor.NAME},${AnsiBackground.NAME}, ${AnsiStyle.NAME}):- Where NAME is the name of an ANSI escape code.
6. ${application.title} - The title of your application, as declared in MANIFEST.MF. For example Implementation-Title: MyApp is printed as MyApp.

`Customizing SpringApplication`:- If the SpringApplication defaults are not to your taste, you can instead create a local instance and customize it. For example, to turn off the banner, you could write:

```java
public static void main(String[] args) {
  SpringApplication app = new SpringApplication(MySpringConfiguration.class);
  app.setBannerMode(Banner.Mode.OFF);
  app.run(args);
}
```

**Runners**:- If we want to perform onetime startup activities after IoC container has been created,we use CommandLine Runner and ApplicationRunner.

`Using the ApplicationRunner or CommandLineRunner`:- If you need to run some specific code once the SpringApplication has started, you can implement the ApplicationRunner or CommandLineRunner interfaces. Both interfaces work in the same way and offer a single run method, which is called just before SpringApplication.run(…) completes.

This contract is well suited for tasks that should run after application startup but before it starts accepting traffic.
The CommandLineRunner interfaces provides access to application arguments as a string array,whereas the ApplicationRunner uses the ApplicationArguments interface.

```java
@Component
public class MyBean implements CommandLineRunner {
  public void run(String... args) {
    // Do something...
  }
}
```

If several CommandLineRunner or ApplicationRunner beans are defined that must be called in a specific order, you can additionally implement the org.springframework.core.Ordered interface or use the org.springframework.core.annotation.Order annotation.


---------

## Logging

Spring Boot uses Commons Logging for all internal logging but leaves the underlying log implementation open. Default configurations are provided for Java Util Logging, Log4j2, and Logback.In each case, loggers are pre-configured to use console output with optional file output also available.

By default, if you use the starters, Logback is used for logging. Appropriate Logback routing is also included to ensure that dependent libraries that use Java Util Logging, Commons Logging, Log4J, or SLF4J all work correctly.


When you deploy your application to a servlet container or application server, logging performed with the Java Util Logging API is not routed into your application’s logs. This prevents logging performed by the container or other applications that have been deployed to it from appearing in your application’s logs. 

`Log Format`:- The default log output from Spring Boot resembles the following example:

```bash
2025-11-20T16:37:12.913Z  INFO 127185 --- [myapp] [           main] o.s.b.d.f.logexample.MyApplication       : Starting MyApplication using Java 25.0.1 with PID 127185 (/opt/apps/myapp.jar started by myuser in /opt/apps/)
2025-11-20T16:37:12.925Z  INFO 127185 --- [myapp] [           main] o.s.b.d.f.logexample.MyApplication       : No active profile set, falling back to 1 default profile: "default"
2025-11-20T16:37:15.953Z  INFO 127185 --- [myapp] [           main] o.s.boot.tomcat.TomcatWebServer          : Tomcat initialized with port 8080 (http)
```

The following items are output:

1. Date and Time: Millisecond precision and easily sortable.
2. Log Level: ERROR, WARN, INFO, DEBUG, or TRACE.
3. Process ID.
4. A --- separator to distinguish the start of actual log messages.
5. Application name: Enclosed in square brackets (logged by default only if spring.application.name is set)
6. Application group: Enclosed in square brackets (logged by default only if spring.application.group is set)
7. Thread name: Enclosed in square brackets (may be truncated for console output).
8. Correlation ID: If tracing is enabled (not shown in the sample above)
9. Logger name: This is usually the source class name (often abbreviated).
10. The log message.

Logback does not have a FATAL level. It is mapped to ERROR. 


File Output - By default, Spring Boot logs only to the console and does not write log files. If you want to write log files in addition to the console output, you need to set a logging.file.name or logging.file.path property (for example, in your application.properties). If both properties are set, logging.file.path is ignored and only logging.file.name is used.


------


## Spring Boot Web

Spring Boot is well suited for web application development. You can create a self-contained HTTP server by using embedded Tomcat, Jetty, Undertow, or Netty. Most web applications use the `spring-boot-starter-web` module to get up and running quickly. You can also choose to build reactive web applications by using the `spring-boot-starter-webflux` module.

Initialization steps are typically as follows:
1. Initializing the DispatcherServlet of Spring MVC.
2. Setting up an encoding filter to ensure that client requests are encoded correctly.
3. Setting up a view resolver to tell Spring where to find our views and in which dialect they are written (jsp, Thymeleaf templates, and so on).
4. Configuring static resources locations (css, js).
5. Configuring supported locales and resource bundles.
6. Configuring a multipart resolver for file uploads to work.
7. Including tomcat or jetty to run our application on a web server.
8. Setting up the error pages (For example 404).
However, Spring Boot handles all that work for us. Because this configuration is typically up to your application, you can come up with an unlimited amount of combinations.
Spring boot, in a way, is an opinionated Spring project configurator. It is based on conventions and will enforce them on your project by default.

**The “Spring Web MVC Framework”**:- The Spring Web MVC framework (often referred to as “Spring MVC”) is a rich “model view controller” web framework. Spring MVC lets you create special @Controller or @RestController beans to handle incoming HTTP requests. Methods in your controller are mapped to HTTP by using @RequestMapping annotations.

`Spring MVC Auto-configuration`:- Spring Boot provides auto-configuration for Spring MVC that works well with most applications.
The auto-configuration adds the following features on top of Spring’s defaults:

1. Inclusion of ContentNegotiatingViewResolver and BeanNameViewResolver beans.
2. Support for serving static resources, including support for WebJars.
3. Automatic registration of Converter, GenericConverter, and Formatter beans.
4. Support for HttpMessageConverters.
5. Automatic registration of MessageCodesResolver.
6. Static index.html support.
7. Automatic use of a ConfigurableWebBindingInitializer bean.

If you want to keep those Spring Boot MVC customizations and make more MVC customizations (interceptors, formatters, view controllers, and other features), you can add your own @Configuration class of type WebMvcConfigurer but without @EnableWebMvc.

To make Spring web app:

1. Create a maven project
2. Add dependencies to pom.xml(spring core,MVC,jackson,validator)
3. Configure required beans in configuration using xml or java-config(DispatcherServlet,Viewresolver,Controller)
4. Write web.xml
5. Write controller class
6. configure annotations e,g(@requestBody)


## API Documentation

RESTful API documentation provides a detailed guide for developers on how to interact with a Representational State Transfer (REST) API. It serves as a crucial resource for understanding the API's functionalities, endpoints, request/response formats, authentication methods, and error handling.

**Springfox**:-

- The `springfox-boot-starter` includes:-
   1. springfox-oas
   2. springfox-data-rest
   3. springfox-bean-validators
   4. springfox-swagger2
   5. springfox-swagger-ui
   6. slf4j-api
   7. spring-plugin-core
   8. spring-plugin-metadata
   9. classmate

**Springdoc** - springdoc-openapi java library helps to automate the generation of API documentation using spring boot projects. springdoc-openapi works by examining an application at runtime to infer API semantics based on spring configurations, class structure and various annotations.
Automatically generates documentation in JSON/YAML and HTML format APIs. This documentation can be completed by comments using swagger-api annotations.
SpringDoc requires Spring Boot + Spring Web. It does not function with plain Spring MVC applications without Boot.

This library supports:

1. OpenAPI 3
2. Spring-boot v3 (Java 17 & Jakarta EE 9)
3. JSR-303, specifically for @NotNull, @Min, @Max, and @Size.
4. Swagger-ui
5. Scalar
6. OAuth 2
7. GraalVM native images

For the integration between spring-boot and swagger-ui, add the library to the list of your project dependencies (No additional configuration is needed)

```xml
   <dependency>
      <groupId>org.springdoc</groupId>
      <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
      <version>2.8.14</version>
   </dependency>
```

This will automatically deploy swagger-ui to a spring-boot application:

- Documentation will be available in HTML format, using the official swagger-ui jars
- The Swagger UI page will then be available at http://server:port/context-path/swagger-ui.html and the OpenAPI description will be available at the following url for json format: http://server:port/context-path/v3/api-docs
   1.  server: The server name or IP
   2.  port: The server port
   3.  context-path: The context path of the application
- Documentation will be available in yaml format as well, on the following path : /v3/api-docs.yaml

For custom path of the swagger documentation in HTML format, add a custom springdoc property, in your spring-boot configuration file.

```java
# swagger-ui custom path
springdoc.swagger-ui.path=/swagger-ui.html
```

Springdoc-openapi Features:- 

`API Information and Security documentation` - The library uses spring-boot application auto-configured packages to scan for the following annotations in spring beans: OpenAPIDefinition and Info. These annotations declare, API Information: Title, version, licence, security, servers, tags, security and externalDocs. For better performance of documentation generation, declare @OpenAPIDefinition and @SecurityScheme annotations within a spring managed bean.

`Error Handling for REST using @ControllerAdvice` - To generate documentation automatically, make sure all the methods declare the HTTP Code responses using the annotation: @ResponseStatus

Annotations:-

`@OpenAPIDefinition` - The annotation that may be used to populate OpenAPI Object fields info, tags, servers, security and externalDocs If more than one class is annotated with OpenAPIDefinition, with the same fields defined, behaviour is inconsistent.
   - Server[] servers() default {} - An array of Server Objects, which provide connectivity information to a target server. If the servers property is not provided, or is an empty array, the default value would be a Server Object with a url value of /.Returns the servers of this API.
   - Info info() default @Info - Provides metadata about the API. The metadata MAY be used by tooling as required.Returns the metadata about this API

`@Server`:- The annotation may be applied at class or method level, or in `io.swagger.v3.oas.annotations.Operation.servers()` to define servers for the single operation (when applied at method level) or for all operations of a class (when applied at class level).
It can also be used in `io.swagger.v3.oas.annotations.OpenAPIDefinition.servers()` to define spec level servers.
   - String url() default "" - Required. A URL to the target host. This URL supports Server Variables and may be relative, to indicate that the host location is relative to the location where the OpenAPI definition is being served. Variable substitutions will be made when a variable is named in {brackets}.Returns String url.
   - String description() default "" - An optional string describing the host designated by the URL. CommonMark syntax MAY be used for rich text representation.Returns String description


`Info`:- The annotation may be used in io.swagger.v3.oas.annotations.OpenAPIDefinition.info() to populate the Info section of the OpenAPI document.
   - String title() default "" - The title of the application.Returns the application's title.
   - String description() default "" - A short description of the application. CommonMark syntax can be used for rich text representation.Returns the application's description.
   - String version() default "" - The version of the API definition.Returns the application's version.
   - License license() default @License() - The license information for the exposed API.Returns the license of the application.
   - 


```java
@OpenAPIDefinition(
   info = @Info(
     title = "Pharmacy API",
     version = "1.0",
     description = "REST documentation for the pharmacy system",
     license = @License(
      name = "Apache 2.0",
      url = "https://www.apache.org/licenses/LICENSE-2.0"
    )),
   servers = {
      @Server(url = "http://localhost:8080", description = "Local"),
      @Server(url = "https://api.example.com", description = "Production")
   }
)
```


## Spring Boot Data

Working with NoSQL Technologies - Spring Data provides additional projects that help you access a variety of NoSQL technologies, including:

1. MongoDB
2. Neo4J
3. Elasticsearch
4. Solr
5. Redis
6. Gemfire or Geode
7. Cassandra
8. Couchbase
9. LDAP

Spring Boot provides auto-configuration for Redis, MongoDB, Neo4j, Elasticsearch, Solr Cassandra, Couchbase, and LDAP.You can make use of the other projects, but you must configure them yourself.

**Redis**:- Redis is a cache, message broker, and richly-featured key-value store. Spring Boot offers basic auto-configuration for the Lettuce and Jedis client libraries and the abstractions on top of them provided by Spring Data Redis.There is a spring-boot-starter-data-redis “Starter” for collecting the dependencies in a convenient way. By default, it uses Lettuce. That starter handles both traditional and reactive applications.

Note: we also provide a spring-boot-starter-data-redis-reactive “Starter” for consistency with the other stores with reactive support

- Connecting to Redis: You can inject an auto-configured RedisConnectionFactory , StringRedisTemplate , or vanilla RedisTemplate instance as you would any other Spring Bean. By default, the instance tries to connect to a Redis server at localhost:6379 . The following listing shows an example of such a bean:

```java
@Component
public class MyBean {
private StringRedisTemplate template;
@Autowired
public MyBean(StringRedisTemplate template) {
this.template = template;
}
// ...
}
```

You can also register an arbitrary number of beans that implementLettuceClientConfigurationBuilderCustomizer for more advanced customizations. If you use Jedis,
JedisClientConfigurationBuilderCustomizer is also available.

If you add your own @Bean of any of the auto-configured types, it replaces the default (except in the case of RedisTemplate , when the exclusion is based on the bean name, redisTemplate , not its type). By default, if commons-pool2 is on the classpath, you get a pooled connection factory.

**MongoDB**:- MongoDB is an open-source NoSQL document database that uses a JSON-like schema instead of traditional table-based relational data. Spring Boot offers several conveniences for working with MongoDB, including the spring-boot-starter-data-mongodb and spring-boot-starter-data-mongodb-reactive “Starters”.

- Connecting to a MongoDB Database: To access Mongo databases, you can inject an auto-configured org.springframework.data.mongodb.MongoDbFactory . By default, the instance tries to connect to a MongoDB server at mongodb://localhost/test . The following example shows how to connect to a MongoDB database:

```java
import org.springframework.data.mongodb.MongoDbFactory;
import com.mongodb.DB;
@Component
public class MyBean {
private final MongoDbFactory mongo;
@Autowired
public MyBean(MongoDbFactory mongo) {
this.mongo = mongo;
}
// ...
public void example() {
DB db = mongo.getDb();
// ...
}
}
```

You can set the spring.data.mongodb.uri property to change the URL and configure additional settings such as the replica set, as shown in the following example:

```java
spring.data.mongodb.uri=mongodb://user:secret@mongo1.example.com:12345,mongo2.example.com:23456/test
```

Alternatively, as long as you use Mongo 2.x, you can specify a host / port . For example, you might declare the following settings in your application.properties:

```java
spring.data.mongodb.host=mongoserver
spring.data.mongodb.port=27017
```

If you have defined your own MongoClient , it will be used to auto-configure a suitable MongoDbFactory . Both com.mongodb.MongoClient and com.mongodb.client.MongoClient are supported.

If you use the Mongo 3.0 Java driver, spring.data.mongodb.host and spring.data.mongodb.port are not supported. In such cases, spring.data.mongodb.uri should be used to provide all of the configuration.

If spring.data.mongodb.port is not specified, the default of 27017 is used. You could delete this line from the example shown earlier.

If you do not use Spring Data Mongo, you can inject com.mongodb.MongoClient beans instead of using MongoDbFactory . If you want to take complete control of establishing the MongoDB connection, you can also declare your own MongoDbFactory or MongoClient bean.

If you are using the reactive driver, Netty is required for SSL. The auto-configuration configures this factory automatically if Netty is available and the factory to use hasn’t been customized already.

- MongoTemplate: Spring Data MongoDB provides a MongoTemplate class that is very similar in its design to Spring’s JdbcTemplate . Aswith JdbcTemplate , Spring Boot auto-configures a bean for you to inject the template, as follows:

```java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Component;
@Component
public class MyBean {
private final MongoTemplate mongoTemplate;
@Autowired
public MyBean(MongoTemplate mongoTemplate) {
this.mongoTemplate = mongoTemplate;
}
// ...
}
```

- Spring Data MongoDB Repositories: Spring Data includes repository support for MongoDB. As with the JPA repositories discussed earlier, the basic principle is that
queries are constructed automatically, based on method names.

In fact, both Spring Data JPA and Spring Data MongoDB share the same common infrastructure. You could take the JPA example from earlier and, assuming that City is now a Mongo data class rather than a JPA @Entity , it works in the same way, as shown in the following example:

```java
package com.example.myapp.domain;
import org.springframework.data.domain.*;
import org.springframework.data.repository.*;
public interface CityRepository extends Repository<City, Long> {
Page<City> findAll(Pageable pageable);
City findByNameAndStateAllIgnoringCase(String name, String state);
}
```

You can customize document scanning locations by using the @EntityScan annotation.

- Embedded Mongo: Spring Boot offers auto-configuration for Embedded Mongo. To use it in your Spring Boot application, add a dependency on
de.flapdoodle.embed:de.flapdoodle.embed.mongo.

The port that Mongo listens on can be configured by setting the spring.data.mongodb.port property. To use a randomly allocated free port, use a value of 0. The MongoClient created by MongoAutoConfiguration is automatically configured to use the randomly allocated port.
If you do not configure a custom port, the embedded support uses a random port (rather than 27017) by default.
If you have SLF4J on the classpath, the output produced by Mongo is automatically routed to a logger named org.springframework.boot.autoconfigure.mongo.embedded.EmbeddedMongo .
You can declare your own IMongodConfig and IRuntimeConfig beans to take control of the Mongo instance’s configuration and logging routing.

**Neo4j**:- Neo4j is an open-source NoSQL graph database that uses a rich data model of nodes connected by first class relationships,which is better suited for connected big data than traditional RDBMS approaches. Spring Boot offers several conveniences for working with Neo4j, including the spring-boot-starter-data-neo4j “Starter”.

- Connecting to a Neo4j Database: To access a Neo4j server, you can inject an auto-configured org.neo4j.ogm.session.Session . By default, the instance
tries to connect to a Neo4j server at localhost:7687 using the Bolt protocol. The following example shows how to inject a Neo4j Session :

```java
@Component
public class MyBean {
private final Session session;
@Autowired
public MyBean(Session session) {
this.session = session;
}
// ...
}
```

You can configure the uri and credentials to use by setting the spring.data.neo4j.* properties, as shown in the following example:

```java
spring.data.neo4j.uri=bolt://my-server:7687
spring.data.neo4j.username=neo4j
spring.data.neo4j.password=secret
```

You can take full control over the session creation by either adding a org.neo4j.ogm.config.Configuration bean or a org.neo4j.ogm.session.SessionFactory bean.

- Using the Embedded Mode: If you add org.neo4j:neo4j-ogm-embedded-driver to the dependencies of your application, Spring Boot automatically configures an in-process embedded instance of Neo4j that does not persist any data when your application shuts down.
As the embedded Neo4j OGM driver does not provide the Neo4j kernel itself, you have to declare org.neo4j:neo4j as dependency yourself. Refer to the Neo4j OGM documentation for a list of compatible versions.
The embedded driver takes precedence over the other drivers when there are multiple drivers on the classpath. You can
explicitly disable the embedded mode by setting spring.data.neo4j.embedded.enabled=false .
Data Neo4j Tests automatically make use of an embedded Neo4j instance if the embedded driver and Neo4j kernel are on the
classpath as described above.
You can enable persistence for the embedded mode by providing a path to a database file in your configuration,
e.g. spring.data.neo4j.uri=file://var/tmp/graph.db .

- Neo4jSession: By default, if you are running a web application, the session is bound to the thread for the entire processing of the request (that
is, it uses the "Open Session in View" pattern). If you do not want this behavior, add the following line to your application.properties file:

```java
spring.data.neo4j.open-in-view=false
```

- Spring Data Neo4j Repositories: Spring Data includes repository support for Neo4j.
Spring Data Neo4j shares the common infrastructure with Spring Data JPA as many other Spring Data modules do. You could take the JPA example from earlier and define City as Neo4j OGM @NodeEntity rather than JPA @Entity and the repository abstraction works in the same way, as shown in the following example:

```java
package com.example.myapp.domain;
import java.util.Optional;
import org.springframework.data.neo4j.repository.*;
public interface CityRepository extends Neo4jRepository<City, Long> {
Optional<City> findOneByNameAndState(String name, String state);
}
```

The spring-boot-starter-data-neo4j “Starter” enables the repository support as well as transaction management. You can customize the locations to look for repositories and entities by using @EnableNeo4jRepositories and @EntityScan respectively on a @Configuration-bean.

**Solr**:- Apache Solr is a search engine. Spring Boot offers basic auto-configuration for the Solr 5 client library and the abstractions on top of it provided by Spring Data Solr. There is a spring-boot-starter-data-solr “Starter” for collecting the dependencies in a convenient way.

- Connecting to Solr: You can inject an auto-configured SolrClient instance as you would any other Spring bean. By default, the instance tries to connect to a server at localhost:8983/solr . The following example shows how to inject a Solr bean:

```java
@Component
public class MyBean {
private SolrClient solr;
@Autowired
public MyBean(SolrClient solr) {
this.solr = solr;
}
// ...
}
```

If you add your own @Bean of type SolrClient , it replaces the default. 32.4.2 Spring Data Solr Repositories

- Spring Data Solr Repositories: Spring Data includes repository support for Apache Solr. As with the JPA repositories discussed earlier, the basic principle is
that queries are automatically constructed for you based on method names. In fact, both Spring Data JPA and Spring Data Solr share the same common infrastructure. You could take the JPA example from earlier and, assuming that City is now a @SolrDocument class rather than a JPA @Entity , it works in the same
way

**Elasticsearch**:- Elasticsearch is an open source, distributed, RESTful search and analytics engine. Spring Boot offers basic auto-configuration for Elasticsearch.

Spring Boot supports several HTTP clients:

1. The official Java "Low Level" and "High Level" REST clients
2. Jest
The transport client is still being used by Spring Data Elasticsearch, which you can start using with the spring-boot-starter-data-elasticsearch “Starter”.

- Connecting to Elasticsearch by REST clients: Elasticsearch ships two different REST clients that you can use to query a cluster: the "Low Level" client and the "High Level" client.
If you have the org.elasticsearch.client:elasticsearch-rest-client dependency on the classpath, Spring Boot will auto-configure and register a RestClient bean that by default targets localhost:9200 . You can further tune how RestClient is configured, as shown in the following example:

```java
spring.elasticsearch.rest.uris=https://search.example.com:9200
spring.elasticsearch.rest.username=user
spring.elasticsearch.rest.password=secret
```

You can also register an arbitrary number of beans that implement RestClientBuilderCustomizer for more advanced customizations. To take full control over the registration, define a RestClient bean.

If you have the org.elasticsearch.client:elasticsearch-rest-high-level-client dependency on the classpath, Spring Boot will auto-configure a RestHighLevelClient , which wraps any existing RestClient bean, reusing its HTTP configuration.

- Connecting to Elasticsearch by Using Jest: If you have Jest on the classpath, you can inject an auto-configured JestClient that by default targets localhost:9200 . You can further tune how the client is configured, as shown in the following example:

```java
spring.elasticsearch.jest.uris=https://search.example.com:9200
spring.elasticsearch.jest.read-timeout=10000
spring.elasticsearch.jest.username=user
spring.elasticsearch.jest.password=secret
```

You can also register an arbitrary number of beans that implement HttpClientConfigBuilderCustomizer for more advanced customizations. The following example tunes additional HTTP settings:

```java
static class HttpSettingsCustomizer implements HttpClientConfigBuilderCustomizer {
@Override
public void customize(HttpClientConfig.Builder builder) {
builder.maxTotalConnection(100).defaultMaxTotalConnectionPerRoute(5);
}
}
```

To take full control over the registration, define a JestClient bean.

- Connecting to Elasticsearch by Using Spring Data: To connect to Elasticsearch, you must provide the address of one or more cluster nodes. The address can be specified by setting the spring.data.elasticsearch.cluster-nodes property to a comma-separated host:port list. With this configuration in place, an ElasticsearchTemplate or TransportClient can be injected like any other Spring bean, as shown in the following example:

```java
spring.data.elasticsearch.cluster-nodes=localhost:9300
```

```java
@Component
public class MyBean {
private final ElasticsearchTemplate template;
public MyBean(ElasticsearchTemplate template) {
this.template = template;
}
// ...
}
```

If you add your own ElasticsearchTemplate or TransportClient @Bean , it replaces the default.

- Spring Data Elasticsearch Repositories: Spring Data includes repository support for Elasticsearch. As with the JPA repositories discussed earlier, the basic principle is that queries are constructed for you automatically based on method names.

In fact, both Spring Data JPA and Spring Data Elasticsearch share the same common infrastructure. You could take the JPA example from earlier and, assuming that City is now an Elasticsearch @Document class rather than a JPA @Entity , it works in the same way.

**Cassandra**:- Cassandra is an open source, distributed database management system designed to handle large amounts of data across many commodity servers. Spring Boot offers auto-configuration for Cassandra and the abstractions on top of it provided by Spring Data Cassandra. There is a spring-boot-starter-data-cassandra “Starter” for collecting the dependencies in a convenient way.

- Connecting to Cassandra: You can inject an auto-configured CassandraTemplate or a Cassandra Session instance as you would with any other Spring Bean. The spring.data.cassandra.* properties can be used to customize the connection. Generally, you provide keyspace-name and contact-points properties, as shown in the following example:

```java
spring.data.cassandra.keyspace-name=mykeyspace
spring.data.cassandra.contact-points=cassandrahost1,cassandrahost2
```

You can also register an arbitrary number of beans that implement ClusterBuilderCustomizer for more advanced customizations.
The following code listing shows how to inject a Cassandra bean:

```java
@Component
public class MyBean {
private CassandraTemplate template;
@Autowired
public MyBean(CassandraTemplate template) {
this.template = template;
}
// ...
}
```

If you add your own @Bean of type CassandraTemplate , it replaces the default.

- Spring Data Cassandra Repositories: Spring Data includes basic repository support for Cassandra. Currently, this is more limited than the JPA repositories
discussed earlier and needs to annotate finder methods with @Query .

**Couchbase**:- Couchbase is an open-source, distributed, multi-model NoSQL document-oriented database that is optimized for interactive applications. Spring Boot offers auto-configuration for Couchbase and the abstractions on top of it provided by Spring Data Couchbase. There are spring-boot-starter-data-couchbase and
spring-boot-starter-data-couchbase-reactive “Starters” for collecting the dependencies in a convenient way.

- Connecting to Couchbase: You can get a Bucket and Cluster by adding the Couchbase SDK and some configuration. The spring.couchbase.* properties can be used to customize the connection. Generally, you provide the bootstrap hosts, bucket name, and password, as shown in the following example:

```java
spring.couchbase.bootstrap-hosts=my-host-1,192.168.1.123
spring.couchbase.bucket.name=my-bucket
spring.couchbase.bucket.password=secret
```

YNote: ou need to provide at least the bootstrap host(s), in which case the bucket name is default and the password is an empty String. Alternatively, you can define your own org.springframework.data.couchbase.config.CouchbaseConfigurer @Bean to take control over the whole configuration.

It is also possible to customize some of the CouchbaseEnvironment settings. For instance, the following configuration changes the timeout to use to open a new Bucket and enables SSL support:

```java
spring.couchbase.env.timeouts.connect=3000
spring.couchbase.env.ssl.key-store=/location/of/keystore.jks
spring.couchbase.env.ssl.key-store-password=secret
```

- Spring Data Couchbase Repositories: Spring Data includes repository support for Couchbase.

You can inject an auto-configured CouchbaseTemplate instance as you would with any other Spring Bean, provided a default CouchbaseConfigurer is available (which happens when you enable Couchbase support, as explained earlier).

The following examples shows how to inject a Couchbase bean:

```java
@Component
public class MyBean {
private final CouchbaseTemplate template;
@Autowired
public MyBean(CouchbaseTemplate template) {
this.template = template;
}
// ...
}
```

There are a few beans that you can define in your own configuration to override those provided by the auto-configuration:

1. A CouchbaseTemplate @Bean with a name of couchbaseTemplate .
2. An IndexManager @Bean with a name of couchbaseIndexManager .
3. A CustomConversions @Bean with a name of couchbaseCustomConversions .

To avoid hard-coding those names in your own config, you can reuse BeanNames provided by Spring Data Couchbase. For
instance, you can customize the converters to use, as follows:

```java
@Configuration
public class SomeConfiguration {
@Bean(BeanNames.COUCHBASE_CUSTOM_CONVERSIONS)
public CustomConversions myCustomConversions() {
return new CustomConversions(...);
}
// ...
}
```

If you want to fully bypass the auto-configuration for Spring Data Couchbase, provide your own implementation of org.springframework.data.couchbase.config.AbstractCouchbaseDataConfiguration.

**LDAP**:- LDAP (Lightweight Directory Access Protocol) is an open, vendor-neutral, industry standard application protocol for accessing and maintaining distributed directory information services over an IP network. Spring Boot offers auto-configuration for any compliant LDAP server as well as support for the embedded in-memory LDAP server from UnboundID.

LDAP abstractions are provided by Spring Data LDAP. There is a spring-boot-starter-data-ldap “Starter” for collecting the dependencies in a convenient way.

- Connecting to an LDAP Server: To connect to an LDAP server, make sure you declare a dependency on the spring-boot-starter-data-ldap “Starter” or spring-ldap-core and then declare the URLs of your server in your application.properties, as shown in the following example:

```java
spring.ldap.urls=ldap://myserver:1235
spring.ldap.username=admin
spring.ldap.password=secret
```

If you need to customize connection settings, you can use the spring.ldap.base and spring.ldap.base-environment properties.

An LdapContextSource is auto-configured based on these settings. If you need to customize it, for instance to use a PooledContextSource , you can still inject the auto-configured LdapContextSource . Make sure to flag your customized ContextSource as @Primary so that the auto-configured LdapTemplate uses it.

- Spring Data LDAP Repositories: Spring Data includes repository support for LDAP.
You can also inject an auto-configured LdapTemplate instance as you would with any other Spring Bean, as shown in the following example:

```java
@Component
public class MyBean {
private final LdapTemplate template;
@Autowired
public MyBean(LdapTemplate template) {
this.template = template;
}
// ...
}
```

- Embedded In-memory LDAP Server: For testing purposes, Spring Boot supports auto-configuration of an in-memory LDAP server from UnboundID. To configure the
server, add a dependency to com.unboundid:unboundid-ldapsdk and declare a base-dn property, as follows:

```java
spring.ldap.embedded.base-dn=dc=spring,dc=io
```

It is possible to define multiple base-dn values, however, since distinguished names usually contain commas, they must be defined using the correct notation.
In yaml files, you can use the yaml list notation:
spring.ldap.embedded.base-dn:

- dc=spring,dc=io
- dc=pivotal,dc=io

In properties files, you must include the index as part of the property name:

```java
spring.ldap.embedded.base-dn[0]=dc=spring,dc=io
spring.ldap.embedded.base-dn[1]=dc=pivotal,dc=io
```

By default, the server starts on a random port and triggers the regular LDAP support. There is no need to specify a spring.ldap.urls property.
If there is a schema.ldif file on your classpath, it is used to initialize the server. If you want to load the initialization script from a different resource, you can also use the spring.ldap.embedded.ldif property.
By default, a standard schema is used to validate LDIF files. You can turn off validation altogether by setting the spring.ldap.embedded.validation.enabled property. If you have custom attributes, you can use spring.ldap.embedded.validation.schema to define your custom attribute types or object classes.

**InfluxDB**:- InfluxDB is an open-source time series database optimized for fast, high-availability storage and retrieval of time series data in fields such as operations monitoring, application metrics, Internet-of-Things sensor data, and real-time analytics.

- Connecting to InfluxDB: Spring Boot auto-configures an InfluxDB instance, provided the influxdb-java client is on the classpath and the URL of the database is set, as shown in the following example:

```java
spring.influx.url=https://172.0.0.1:8086
```

If the connection to InfluxDB requires a user and password, you can set the spring.influx.user and spring.influx.password properties accordingly.
InfluxDB relies on OkHttp. If you need to tune the http client InfluxDB uses behind the scenes, you can register an InfluxDbOkHttpClientBuilderProvider bean.


`Spring Boot JPA`:- Spring Boot JPA is essentially a configuration and setup framework that integrates JPA with Spring Boot in a seamless way. It simplifies the process of connecting your application to a database and allows you to focus on the business logic instead of tedious configuration.

Key features of Spring Boot JPA:

1. Auto-configuration: Automatically configures JPA-related beans, including EntityManagerFactory, DataSource, and TransactionManager.
2. Repository Support: Spring Data JPA provides easy-to-use repository interfaces, and Spring Boot auto-configures them for you.
3. Integration with Hibernate: By default, Spring Boot uses Hibernate as the JPA implementation (though you can swap it out for other providers if needed).
4. DataSource Configuration: Spring Boot uses application.properties or application.yml to configure the database connection, reducing the need for XML configuration.

It has dependencies from:-

- JPA dependencies
- Hibernate dependencies
- Spring Data JPA dependencies
- AOP
- JDBC
- Transaction

To work with database,you need to configure JDBC URL,Database username,database password and hibernate properties.
You can configure your database connection and JPA properties in src/main/resources/application.properties. Spring Boot automatically picks up this configuration to set up the DataSource, EntityManagerFactory, and transaction management.

```java
spring.datasource.url=jdbc:{database-provider}://{hostname}:{port}/database-name
spring.datasource.username=
spring.datasource.password=
spring.datasource.driver-class-name=//org.postgresql.Driver, com.mysql.cj.jdbc.Driver, com.mysql.jdbc.Driver

//postgres
spring.datasource.url=jdbc:postgresql:localhost:5432/database-name
spring.datasource.username=postgres
spring.datasource.password=postgres
spring.datasource.driver-class-name=org.postgresql.Driver

//mysql
// Database Configuration
spring.datasource.url=jdbc:mysql:localhost:3306/database-name?createDatabaseIfNotExist=true//mysql can create database automatically if it doesn't exist
spring.datasource.username=root
spring.datasource.password=root
spring.datasource.driver-class-name= com.mysql.cj.jdbc.Driver

// JPA/Hibernate Configuration
spring.jpa.database-platform=//database platform postgresql,mysql
spring.jpa.show-sql=//true or false
spring.jpa.properties.hibernate.format_sql=true
spring.jpa.hibernate.ddl-auto=//create-drop,create,none,update,validate
spring.jpa.properties.hibernate.dialect=//org.hibernate.dialect.MySQL8Dialect
```

- spring.datasource.url: The URL for the database connection.
- spring.datasource.username: Database username.
- spring.datasource.password: Database password.
- spring.jpa.hibernate.ddl-auto: Specifies the DDL mode. It can be none, update, create, or create-drop.
    1. update: Keeps the schema in sync with your entities.Update the schema if necessary
    2. create: Creates the schema from scratch on every application startup.Create the schema and destroy previous data.
    3. create-drop: Creates and drops the schema on startup and shutdown.
    4. none- Disable DDL handling
    5. validate- Validate the schema, make no changes to the database
- spring.jpa.show-sql: When set to true, Hibernate will log all SQL queries.
- spring.jpa.properties.hibernate.format_sql: Makes SQL output easier to read in logs.



## Messaging


## IO


-------

## Spring boot Test

Spring Boot provides a number of utilities and annotations to help when testing your application.Test support is provided by two modules: spring-boot-test contains core items, and spring-boot-test-autoconfigure supports auto-configuration for tests.
Most developers use the spring-boot-starter-test “Starter”, which imports both Spring Boot test modules as well as JUnit Jupiter, AssertJ, Hamcrest, and a number of other useful libraries.

The spring-boot-starter-test “Starter” (in the test scope) contains the following provided libraries:
1. JUnit 5: The de-facto standard for unit testing Java applications.
2. Spring Test & Spring Boot Test: Utilities and integration test support for Spring Boot applications.
3. AssertJ: A fluent assertion library.
4. Hamcrest: A library of matcher objects (also known as constraints or predicates).
5. Mockito: A Java mocking framework.
6. JSONassert: An assertion library for JSON.
7. JsonPath: XPath for JSON.




## Deploying Spring Boot Applications

Spring Boot’s flexible packaging options provide a great deal of choice when it comes to deploying your application. You can deploy Spring Boot applications to a variety of cloud platforms, to container images (such as Docker), or to virtual/real machines.

**Creating an executable jar**:- Executable jars (sometimes called “fat jars”) are archives containing your compiled classes along with all of the jar dependencies that your code needs to run.
Java does not provide any standard way to load nested jar files (i.e. jar files that are themselves contained within a jar). This can be problematic if you are looking to distribute a self-contained application.
To solve this problem, many developers use “uber” jars. An uber jar simply packages all classes,from all jars, into a single archive. The problem with this approach is that it becomes hard to see which libraries you are actually using in your application. It can also be problematic if the same filename is used (but with different content) in multiple jars.
Spring Boot takes a different approach and allows you to actually nest jars directly.

To create an executable jar we need to add the spring-boot-maven-plugin to our pom.xml. Insert the following lines just below the dependencies section:

```xml
<build>
  <plugins>
    <plugin>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-maven-plugin</artifactId>
    </plugin>
  </plugins>
</build>
```

The spring-boot-starter-parent POM includes <executions> configuration to bind the repackage goal.
