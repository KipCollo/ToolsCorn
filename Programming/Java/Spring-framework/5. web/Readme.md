# Web Layer

The Web layer consists of the Web, Web-Servlet, WebSocket and Web-Portlet modules.

1. `Spring’s Web module` provides basic web-oriented integration features such as multipart file-upload functionality and the initialization of the IoC container using servlet listeners and a web-oriented application context. It also contains the web-related parts of Spring’s remoting support.
2. `The Web-Servlet module` contains Spring’s model-view-controller (MVC) implementation for web applications. Spring’s MVC framework provides a clean separation between domain model code and web forms, and integrates with all the other features of the Spring Framework.
3. `The Web-Portlet module` provides the MVC implementation to be used in a portlet environment and mirrors the functionality of Web-Servlet module.
4. `WebSocket module` Support for Web Socket style messaging.


## Consuming REST services

It’s not uncommon for Spring applications to both provide an API and make requests to another application’s API. In fact, this is becoming prevalent in the world of microservices.
A Spring application can consume a REST API with:-

1. RestTemplate — A straightforward, synchronous REST client provided by the core Spring Framework.
2. Traverson—A hyperlink-aware, synchronous REST client provided by Spring HATEOAS. Inspired from a JavaScript library of the same name.
3. WebClient—A reactive, asynchronous REST client introduced in Spring 5.Uses different programming approach named reactive programming.
4. OpenFeign - A tool offered by Spring Cloud.


**Consuming REST endpoints with RestTemplate**:- Working with low-level HTTP libraries, the client needs to create a client instance and a request object, execute the request, interpret the response, map the response to domain objects, and handle any exceptions that may be thrown along the way. And all of this boilerplate is repeated, regardless of what HTTP request is sent.

```java
HttpClient client = HttpClients.createDefault();

HttpGet request = new HttpGet("http://graph.facebook.com/" + id);
request.setHeader("Accept", "application/json");

HttpResponse response = client.execute(request);

HttpEntity entity = response.getEntity();
ObjectMapper mapper = new ObjectMapper();
return mapper.readValue(entity.getContent(), Profile.class);
```

To avoid such boilerplate code, Spring provides RestTemplate which frees you from dealing with the tedium of consuming REST resources.
RestTemplate provides 41 methods for interacting with REST resources.It defines 12 unique operations, each of which is overloaded, providing a total of 41 methods.

1. delete(…) - Performs an HTTP DELETE request on a resource at a specified URL
2. exchange(…) - Executes a specified HTTP method against a URL, returning a ResponseEntity containing an object mapped from the response body
3. execute(…) - Executes a specified HTTP method against a URL, returning an object mapped from the response body
4. getForEntity(…) - Sends an HTTP GET request, returning a ResponseEntity containing an object mapped from the response body
5. getForObject(…) - Sends an HTTP GET request, returning an object mapped from a response body
6. headForHeaders(…) - Sends an HTTP HEAD request, returning the HTTP headers for the specified resource URL
7. optionsForAllow(…) - Sends an HTTP OPTIONS request, returning the Allow header for the specified URL
8. patchForObject(…) - Sends an HTTP PATCH request, returning the resulting object mapped from the response body
9. postForEntity(…) - POSTs data to a URL, returning a ResponseEntity containing an object mapped from the response body
10. postForLocation(…) - POSTs data to a URL, returning the URL of the newly created resource
11. postForObject(…) - POSTs data to a URL, returning an object mapped from the response body
12. put(…) - PUTs resource data to the specified URL

With the exception of TRACE, RestTemplate has at least one method for each of the standard HTTP methods. In addition, execute() and exchange() provide lower-level, general-purpose methods for sending requests with any HTTP method.

Most of the methods are overloaded into three method forms:
- One accepts a String URL specification with URL parameters specified in a variable argument list.
- One accepts a String URL specification with URL parameters specified in a Map<String,String>.
- One accepts a java.net.URI as the URL specification, with no support for parameterized URLs.

`GETting resources`:- There are two kinds of methods for performing GET requests: getForObject() and getForEntity().
Except for the return type, the getForEntity() methods are mirror images of the getForObject() methods. And they work much the same way. They both perform a GET request, retrieving a resource given a URL. And they both map that resource to an instance of some type specified by the responseType parameter. The only difference is that getForObject() returns an object of the type requested, whereas getForEntity() returns that object along with extra information about the response.


**Spring Cloud OpenFeign**:- To implement the REST endpoint call using OpenFeign, we only need to define an interface and use annotations to instruct OpenFeign on how to implement this interface.
Openfeign implements the given interface and defines a bean of the implementation in the Spring context.You can inject the bean from the Spring context anywhere you need it in your app.


----------------

# Web module

Spring provides support for developing web application by using Web module. This module is built on application context module that provides context for web-based applications.
This module also supports web-oriented integration features like- transparently handling multipart requests for uploading files,programmatically binding request parameters to business objects etc.
This module also supports integration with popular web frameworks like Jakarta Struts, JSF, and Tapestry etc.

**Spring web annotations**:- Annotations for binding requests to controllers and handler methods as well as for binding request parameters to method arguments.Defined in the package **org.springframework.web.bind.**

It includes:

* @BindParam - Annotation to bind values from a web request such as request parameters or path variables to fields of a Java object.
* @CookieValue - Annotation to indicate that a method parameter is bound to an HTTP cookie.
* @CrossOrigin - Annotation for permitting cross-origin requests on specific handler classes and/or handler methods.
* @InitBinder - Annotation that identifies methods that initialize the WebDataBinder which will be used for populating command and form object arguments of annotated handler methods.
* @Mapping - Meta annotation that indicates a web mapping annotation.
* @MatrixVariable - Annotation which indicates that a method parameter should be bound to a name-value pair within a path segment.
* @RequestHeader - Annotation which indicates that a method parameter should be bound to a web request header.
* @RequestPart - Annotation that can be used to associate the part of a "multipart/form-data" request with a method argument.
* @SessionAttribute - Annotation to bind a method parameter to a session attribute.
* @SessionAttributes - Annotation that indicates the session attributes that a specific handler uses.
ValueConstants - Common value constants shared between bind annotations.


-----------------


## Webservlet and Spring MVC

The Web-Servlet module contains Spring’s model-view-controller (MVC) implementation for web applications. Spring’s MVC framework provides a clean separation between domain model code and web forms, and integrates with all the other features of the Spring Framework.
Used to develop `web applications` and `distributed applications`.

Spring Web MVC is the original web framework built on the Servlet API and has been included in the Spring Framework from the very beginning.Servlets and JSP can develop web apps but has alot of boilerplate code and mixing of business logic and presentation logic.

Spring MVC simplifies web development with its separation of concern and robust and scalable capabilities.
Spring MVC provides a variety of annotations that simplify the development of web applications by allowing developers to define behavior and configurations directly in their code.

Parallel to Spring Web MVC, Spring Framework 5.0 introduced a reactive-stack web framework, `Spring WebFlux`,which is also based on its source module (spring-webflux).

**The Benefits of Spring MVC**:-

When writing a Model 2 application without a framework, it is your responsibility to write a dispatcher servlet and controller classes. Your dispatcher servlet must be capable of doing these things:

1. Determine from the URI what action to invoke.
2. Instantiate the correct controller class.
3. Populate a form bean with request parameter values.
4. Call the correct method in the controller object.
5. Forward control to a view (JSP page).

Spring MVC is an MVC framework that employs a dispatcher servlet that invokes methods in controllers and forwards control to a view. This is the first benefit of using Spring MVC: You don’t need to write your own dispatcher servlet. Here is the list of features that Spring MVC is equipped with to make development more rapid.

1. Spring MVC provides a dispatcher servlet, saving your writing one.
2. Spring MVC employs an XML-based configuration file that you can edit without recompiling the application.
3. Spring MVC instantiates controller classes and populates beans with user inputs.
4. Spring MVC automatically binds user input with the correct type. For example, Spring MVC can automatically parse a string and sets a property of type float or decimal.
5. Spring MVC validates user input and redirects the user back to the input form if validation failed. Input validation is optional and can be done programmatically or declaratively. On top of that, Spring MVC provides built-in validators for most of the tasks you may encounter when building a web application.
6. Spring MVC is part of the Spring framework. You get everything Spring has to offer.
7. Spring MVC supports internationalization and localization. This means, you can display messages in multiple languages depending on the user locale.
8. Spring MVC supports multiple view technologies. Most of the time you’ll be using JSP, but other technologies are supported, including Velocity and FreeMarker.


### Web Applications

Using servlets and JSPs we can develop web apps but dev has to write lots of boiler-plate codes.Boiler-plate code is code common for all apps,i.e

1. converting HTTP request params into java bean.i.e getting email = req.getParameter("email") from HttpRequest ,then converting it into Java Object i.e ,setting fields with req params customer.setMail("email").Suppose in a project there is 100 servlets then we'll need to prepare 100 java Beans.
2. There's mixing of business logic and presentation logics.In servlet class you write both business and presentation logics,hence changing business or presentation logic is difficult.

To overcome those problems,Spring MVC was introduced.
- Spring MVC helps to remove boilerplate code with help of FrontController(DispatcherServlet).
- It separates business logic from presentation logics.
- Its one of Gang of Four design Pattern.It includes 3 design patterns: trategy,Observer and Composite.

**MVC Architecture**:- Has 5 components

1. `FrontController(DispatcherServlet)`-Spring MVC is designed around the front controller pattern where a central Servlet, the DispatcherServlet, provides a shared algorithm for request processing, while actual work is performed by configurable delegate components. This model is flexible and supports diverse workflows.
Takes care common processing logic that should be applied to all request coming into applications.It will bind URL patterns i.e *.htm,*.web,*.mvc,*.do,*.action..etc
The DispatcherServlet needs to be declared and mapped according to the Servlet specification by using Java configuration or in web.xml. In turn, the DispatcherServlet uses Spring configuration to discover the delegate components it needs for request mapping, view resolution, exception handling, and more.
2. `Handler Mapping(RequestMapping)`-Helps in identifying the controller to be used for a request.Based on URI,Handler Mapping will return controller name then DispatcherServlet will execute the controller.
3. `Controller`-Responsible for processing logics to handle the request.Always gives logical name as response to DispatcherServlet.The DispatcherServlet will send logical name to ViewResolver.
4. `ViewResolver`-Converts logical name into physical names.i.e fail---fail.jsp,orders---order.jsp.
5. `View`-Views is rendering/displaying the data.i.e what format to display data.Different views are available ie pdf,webpage,excel.We can change one view to another in view layer.
i.e   Jsp----------->Thymeleaf


```java
                 1                           2
  CLIENT-------------->DispatcherServlet----------------->HandlerMapping
 |                        |   |   |          3
 |                        |   |   |----------><---------------Controller
 |                        |   |              4
 |   Http Response        |   |------------><--------------ViewRessolver
  -------<-------------VIEW
```


The first stop in the request’s travels is at Spring’s DispatcherServlet. Like most Java-based web frameworks, Spring MVC funnels requests through a single front controller servlet. A front controller is a common web application pattern where a single servlet delegates responsibility for a request to other components of an application to perform actual processing. In the case of Spring MVC, DispatcherServlet is the front controller.

The DispatcherServlet’s job is to send the request on to a Spring MVC controller.A controller is a Spring component that processes the request. But a typical application may have several controllers, and DispatcherServlet needs some help deciding which controller to send the request to. So the DispatcherServlet consults one or more handler mappings to figure out where the request’s next stop will be. The handler mapping pays particular attention to the URL carried by the request when making its decision.

Once an appropriate controller has been chosen, DispatcherServlet sends the request to the chosen controller. At the controller, the request drops off its payload (the information submitted by the user) and patiently waits while the controller processes that information. (Actually, a well-designed controller performs little or no processing itself and instead delegates responsibility for the business logic to one or more service objects.)

The logic performed by a controller often results in some information that needs to be carried back to the user and displayed in the browser. This information is referred to as the model. But sending raw information back to the user isn’t sufficient—it needs to be formatted in a user-friendly format, typically HTML. For that, the information needs to be given to a view, typically a JavaServer Page (JSP).

One of the last things a controller does is package up the model data and identify the name of a view that should render the output. It then sends the request, along with the model and view name, back to the DispatcherServlet.

So that the controller doesn’t get coupled to a particular view, the view name passed back to DispatcherServlet doesn’t directly identify a specific JSP. It doesn’t even necessarily suggest that the view is a JSP. Instead, it only carries a logical name that will be used to look up the actual view that will produce the result. The DispatcherServlet consults a view resolver to map the logical view name to a specific view implementation, which may or may not be a JSP.

Now that DispatcherServlet knows which view will render the result, the request’s job is almost over. Its final stop is at the view implementation, typically a JSP, where it delivers the model data. The request’s job is finally done. The view will use the model data to render output that will be carried back to the client by the response object.

Spring MVC has following main features:

1. Clear separation of role: In Spring MVC, each role like- controller, validator, command object, form object, model object, DispatcherServlet, handler mapping, view resolver etc. is fulfilled by a specialized object.
2. Reusability: Spring MVC promotes reusable business code that reduces the need for duplication. We can use existing business objects as command or form objects instead of copying them to extend a particular framework base class.
3. Flexible Model Transfer: Spring MVC Model transfer supports easy integration with other view technologies as well.
4. Customizable binding and validation: In Spring MVC, we can to custom binding between Requests and Controllers.Even validation can be done on non-String values as well.
5. JSP form tag library: From Spring 2.0, there is a powerful JSP form tag library that makes writing forms in JSP pages much easier.
6. Customizable locale, time zone and theme resolution:Spring MVC supports customization in locale, timezone etc.


**DISPATCHERSERVLET**: DispatcherServlet is the centerpiece of Spring MVC. It’s where the request first hits the framework, and it’s responsible for routing the request through all the other components.
The DispatcherServlet, as any Servlet, needs to be declared and mapped according to the Servlet specification by using Java configuration or in web.xml. In turn, the DispatcherServlet uses Spring configuration to discover the delegate components it needs for request mapping, view resolution,exception handling, and more.

Historically, servlets like DispatcherServlet have been configured in a web.xml file that’s carried in the web application’s WAR file.
Spring MVC web application can have more than one DispatcherServlets.Each DispatcherServlet has to operate in its own namespace. It has to load its own ApplicationContext with mappings, handlers, etc.Only the root application context will be shared among these Servlets.

`Spring MVC DispatcherServlet` - Spring MVC comes with a dispatcher servlet that you can instantly use. Its fully qualified name is org.springframework.web.servlet.DispatcherServlet.
Configuration essentials:
- web.xml registers DispatcherServlet in legacy setups.
- Java-based config uses @EnableWebMvc and a WebMvcConfigurer implementation.

To use this servlet, you need to configure it in your deployment descriptor (web.xml file) using the servlet and servlet-mapping elements, like this.

```xml
<web-app>
 <listener>
  <listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>
 </listener>
 <context-param>
  <param-name>contextConfigLocation</param-name>
  <!--<param-value>/WEB-INF/applicationContext.xml</param-value> -->
  <param-value>classpath:/applicationContext.xml</param-value> 
 </context-param>

 <servlet>
  <servlet-name>dispatcher</servlet-name>
  <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
  <load-on-startup>1</load-on-startup>
 </servlet>

 <servlet-mapping>
  <servlet-name>app</servlet-name>
   <!-- map htm,mvc,do requests to the DispatcherServlet --> 
  <url-pattern>/app/*.htm,*.mvc,*.do</url-pattern>

  <!-- map all requests to the DispatcherServlet -->
   <url-pattern>/</url-pattern>
 </servlet-mapping>
</web-app>
```

The load-on-startup element under <servlet> is optional. If it is present, it will load the servlet and call its init method when the application is started. Without the load-on-startup element, the servlet will be loaded when it is first requested.
By itself the dispatcher servlet will use many default components that come with Spring MVC. In addition, at initialization it will look for a configuration file in the WEB-INF directory of the application. The name of the XML file must conform to this pattern `servletName-servlet.xml` where servletName is the name given to the Spring dispatcher servlet in the deployment descriptor. If you have given the servlet the name dispatcher, you will need to have a dispatcher-servlet.xml file under the WEB-INF directory of your application directory.

However, you can place your Spring MVC configuration file anywhere within your application directory as long as you tell the dispatcher servlet where to find it. You do this by using an init-param element under the servlet declaration. The init-param element would have a param-name element that has the value contextConfigLocation. It would also have a param-value element containing the path to your configuration file. For example, you can change the default name and location of the configuration file to /WEB-INF/config/simple-config.xml by using this init-param element.

```xml
<servlet>
   <servlet-name>springmvc</servlet-name>
   <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>

   <init-param>
      <param-name>contextConfigLocation</param-name>
      <param-value>/WEB-INF/config/simple-config.xml</param-value>
   </init-param>
   <load-on-startup>1</load-on-startup>
</servlet>
```

When a request hits i.e <http://localhost:8080/login.htm>,a new Servlet container is created and creates an object of DispatcherSevlet class.DispatcherServlet always looks for <servlet-name>-servlet.xml file e.g dispatcher-servlet.xml and creates a spring container.In spring container there is controllers,viewresolver,handlermapping beans.

`Java Config`:- When web container starts,it will look for web.xml,if not found it looks for ServletContainerInitializer.This will internally call SpringServletContainerInitializer which internally calls WebApplicationInitializer then AbstractContextLoaderListener then AbstractDispatcherServletInitializer then AbstractAnnotationConfigDispatcherServletInitializer.

```java
import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

public class SpittrWebAppInitializer extends AbstractAnnotationConfigDispatcherServletInitializer {
   @Override
   protected String[] getServletMappings() {
      return new String[] { "/" };
   }
   @Override
   protected Class<?>[] getRootConfigClasses() {
      return new Class<?>[] { RootConfig.class };
   }

   @Override
   protected Class<?>[] getServletConfigClasses() {
      return new Class<?>[] { WebConfig.class };
   }
}
```

The first method, getServletMappings(), identifies one or more paths that DispatcherServlet will be mapped to. In this case, it’s mapped to /, indicating that it will be the application’s default servlet. It will handle all requests coming into the application.
Under the covers, AbstractAnnotationConfigDispatcherServletInitializer creates both a DispatcherServlet and a ContextLoaderListener. The @Configuration classes returned from getServletConfigClasses() will define beans for DispatcherServlet’s application context. Meanwhile, the @Configuration class’s returned getRootConfigClasses() will be used to configure the application context created by ContextLoaderListener.
In this case, your root configuration is defined in RootConfig, whereas DispatcherServlet’s configuration is declared in WebConfig.

`ENABLING SPRING MVC` - Just as there are several ways of configuring DispatcherServlet, there’s more than one way to enable Spring MVC components. Historically, Spring has been configured using XML, and there’s an <mvc:annotation-driven> element that you can use to enable annotation-driven Spring MVC.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:mvc="http://www.springframework.org/schema/mvc"
       xsi:schemaLocation="
           http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
           http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context.xsd
           http://www.springframework.org/schema/mvc http://www.springframework.org/schema/mvc/spring-mvc.xsd">

    <context:component-scan base-package="com.kipcollo.controller"/>

    <mvc:annotation-driven/>

    <bean class="org.springframework.web.servlet.view.InternalResourceViewResolver">
        <property name="prefix" value="/WEB-INF/jsp/"/>
        <property name="suffix" value=".jsp"/>
    </bean>

</beans>
```

```java
@Configuration
@EnableWebMvc
public class WebConfig {
}
```

This will work, and it will enable Spring MVC. But it leaves a lot to be desired:
1. No view resolver is configured. As such, Spring will default to using BeanNameViewResolver, a view resolver that resolves views by looking for beans whose
ID matches the view name and whose class implements the View interface.
2. Component-scanning isn’t enabled. Consequently, the only way Spring will find any controllers is if you declare them explicitly in the configuration.
3. As it is, DispatcherServlet is mapped as the default servlet for the application and will handle all requests, including requests for static resources, such as images and stylesheets (which is probably not what you want in most cases).
Therefore, you need to add a bit more configuration in WebConfig on top of this bare minimum Spring MVC configuration to make it useful.

```java
@Configuration
@EnableWebMvc
@ComponentScan("spitter.web")
public class WebConfig extends WebMvcConfigurerAdapter{

   @Bean
   public ViewResolver viewResolver() {
   InternalResourceViewResolver resolver = new InternalResourceViewResolver();
   resolver.setPrefix("/WEB-INF/views/");
   resolver.setSuffix(".jsp");
   resolver.setExposeContextBeansAsAttributes(true);
   return resolver;
}

   @Override
   public void configureDefaultServletHandling(
      DefaultServletHandlerConfigurer configurer) {
   configurer.enable();
   }
}
```

WebConfig class extends WebMvcConfigurerAdapter and overrides its configureDefaultServletHandling() method. By calling enable() on the given
DefaultServletHandlerConfigurer, you’re asking DispatcherServlet to forward requests for static resources to the servlet container’s default servlet and not to try to
handle them itself.

Applications can declare the infrastructure beans listed in Special Bean Types that are required to process requests. The DispatcherServlet checks the WebApplicationContext for each special bean. If there are no matching bean types, it falls back on the default types listed in DispatcherServlet.properties.

In most cases, the MVC Config is the best starting point. It declares the required beans in either Java or XML and provides a higher-level configuration callback API to customize it.Spring Boot relies on the MVC Java configuration to configure Spring MVC and provides many extra convenient options.
In Spring container there is:controllers,viewressolver,handler mapping.
The following example of the Java configuration registers and initializes the DispatcherServlet, which is auto-detected by the Servlet container

```java
public class MyWebApplicationInitializer implements WebApplicationInitializer {

 @Override
 public void onStartup(ServletContext servletContext) {

  // Load Spring web application configuration
  AnnotationConfigWebApplicationContext context = new AnnotationConfigWebApplicationContext();
  context.register(AppConfig.class);

  // Create and register the DispatcherServlet
  DispatcherServlet servlet = new DispatcherServlet(context);
  ServletRegistration.Dynamic registration = servletContext.addServlet("app", servlet);
  registration.setLoadOnStartup(1);
  registration.addMapping("/app/*");
 }
}
```

Spring Boot follows a different initialization sequence. Rather than hooking into the lifecycle of the Servlet container, Spring Boot uses Spring configuration to bootstrap itself and the embedded Servlet container. Filter and Servlet declarations are detected in Spring configuration and registered with the Servlet container.

Child container --Spring MVC related bean like Controller,RequestMapping classes,ViewResolver are created in child container.Will be created by DispatcherServlet with help of xml or Java config.
Container parent --Non-MVC classes e.g Service,DAO,Transaction will be created in Parent container.ContextLoaderListener is responsible for creating parent container with help of `applicationContext.xml`
If we create independent container then they can't share object,that's why we should go for hierarchial containers.If there are any non-MVC classes present in classpath,DispatcherServlet looks for ParentContainer,if it is created then only child container will be created.

`Context Hierarchy`:- DispatcherServlet expects a WebApplicationContext (an extension of a plain ApplicationContext) for its own configuration. WebApplicationContext has a link to the ServletContext and the Servlet with which it is associated. It is also bound to the ServletContext such that applications can use static methods on RequestContextUtils to look up the WebApplicationContext if they need access to it.

For many applications, having a single WebApplicationContext is simple and suffices. It is also possible to have a context hierarchy where one root WebApplicationContext is shared across multiple DispatcherServlet (or other Servlet) instances, each with its own child WebApplicationContext configuration.

The root WebApplicationContext typically contains infrastructure beans, such as data repositories and business services that need to be shared across multiple Servlet instances. Those beans are effectively inherited and can be overridden (that is, re-declared) in the Servlet-specific child WebApplicationContext, which typically contains beans local to the given Servlet.
When DispatcherServlet starts up, it creates a Spring application context and starts loading it with beans declared in the configuration files or classes that it’s given. With the getServletConfigClasses() method, you’ve asked that DispatcherServlet load its application context with beans defined in the WebConfig configuration class (using Java configuration).

WebApplicationContext is the child of plain ApplicationContext. It is used in web applications. It provides features to deal with web-related components like-controllers, view resolvers etc.A Web Application can have multiple WebApplicationContext to handle requests.Each DispatcherServlet is associated with one WebApplicationContext.
Creating a spring container.

```java
//Normal Container creation - Standalone apps:- Creating a container for standalone application:
ApplicationContext context= new XMLApplicationContext();
ApplicationContext context= new AnnotationConfigApplicationContext();
ApplicationContext context= new ClassPathXmlApplicationContext();

//Web Container Creation
ApplicationContext context= new XMLWebApplicationContext();
AnnotationConfigWebApplicationContext context = new AnnotationConfigWebApplicationContext();
```

But in Spring web applications, there’s often another application context. This other application context is created by ContextLoaderListener.Whereas DispatcherServlet is expected to load beans containing web components such as controllers, view resolvers, and handler mappings, ContextLoaderListener is expected to load the other beans in your application. These beans are typically the middle-tier and data-tier components that drive the back end of the application.
In case we have enabled annotations in Spring config file, it also scans the packages and configures any bean annotated with @Component, @Controller, @Repository or @Service annotations.
ContextLoaderListener is a listener to start up and shut down Spring’s root WebApplicationContext. ContextLoaderListener links the lifecycle of ApplicationContext to the lifecycle of the ServletContext. It automates the creation of ApplicationContext. It can also be used to define shared beans used across different spring contexts.

If an application context hierarchy is not required, applications can return all configuration through getRootConfigClasses() and null from getServletConfigClasses().
If an application context hierarchy is not required, applications may configure a “root” context only and leave the contextConfigLocation Servlet parameter empty.

```xml
<!--applicationContext.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="
           http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
           http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context.xsd">

    <context:component-scan base-package="com.kipcollo.service"/>
    <context:annotation-config/>

</beans>
```

```java
@Configuration
@ComponentScan(basePackages={"com.kipcollo.service"},excludeFilters={@Filter(type=FilterType.ANNOTATION, value=EnableWebMvc.class)})
public class RootConfig {
}
```


`Special Bean Types`:- The DispatcherServlet delegates to special beans to process requests and render the appropriate responses. By “special beans” we mean Spring-managed Object instances that implement framework contracts. Those usually come with built-in contracts, but you can customize their properties and extend or replace them.

1. HandlerMapping - Map a request to a handler along with a list of interceptors for pre- and post-processing. The mapping is based on some criteria, the details of which vary by HandlerMapping implementation.The two main HandlerMapping implementations are RequestMappingHandlerMapping (which supports @RequestMapping annotated methods) and SimpleUrlHandlerMapping (which maintains explicit registrations of URI path patterns to handlers).
2. HandlerAdapter - Help the DispatcherServlet to invoke a handler mapped to a request, regardless of how the handler is actually invoked. For example, invoking an annotated controller requires resolving annotations. The main purpose of a HandlerAdapter is to shield the DispatcherServlet from such details.
3. HandlerExceptionResolver- Strategy to resolve exceptions, possibly mapping them to handlers, to HTML error views, or other targets. See Exceptions.
4. ViewResolver - Resolve logical String-based view names returned from a handler to an actual View with which to render to the response. See View Resolution and View Technologies.
5. LocaleResolver, LocaleContextResolver - Resolve the Locale a client is using and possibly their time zone, in order to be able to offer internationalized views. See Locale.
6. ThemeResolver - Resolve themes your web application can use — for example, to offer personalized layouts. See Themes.
7. MultipartResolver - Abstraction for parsing a multi-part request (for example, browser form file upload) with the help of some multipart parsing library. See Multipart Resolver.
8. FlashMapManager - Store and retrieve the “input” and the “output” FlashMap that can be used to pass attributes from one request to another, usually across a redirect.


**HANDLER MAPPING**:- The mechanism that decides which controller method handles which URL.

`Using xml`

```xml
<bean id="userController" class="com.example.UserController"/>

<bean class="org.springframework.web.servlet.handler.SimpleUrlHandlerMapping">
    <property name="mappings">
        <props>
            <prop key="/user/list">userController</prop>
            <prop key="/user/add">userController</prop>
        </props>
    </property>
</bean>
```

`Using Annotatins`:- In Spring MVC, we use @RequestMapping annotation to map a web request to either a class or a handler method.
In @RequestMapping we can specify the path of URL as well as HTTP method like- GET, PUT, POST etc.@RequestMapping also supports specifying HTTP Headers as attributes.We can also map different media types produced by a controller in @RequestMapping. We use HTTP Header Accepts for this purpose.
You can use the @RequestMapping annotation to map requests to controllers methods. It has various attributes to match by URL, HTTP method, request parameters, headers, and media types. You can use it at the class level to express shared mappings or at the method level to narrow down to a specific endpoint mapping.

All modern annotations:
1. @RequestMapping
2. @GetMapping
3. @PostMapping
4. @PutMapping
5. @DeleteMapping
6. @PatchMapping

- @RequestMapping - Annotation for mapping web requests onto methods in request-handling classes with flexible method signatures.Both Spring MVC and Spring WebFlux support this annotation.Can be used both at the class and at the method level.Cannot be used in conjunction with other @RequestMapping annotations that are declared on the same element (class, interface, or method)
    1. String[] consumes- Narrows the primary mapping by media types that can be consumed by the mapped handler.
    2. String[] headers - The headers of the mapped request, narrowing the primary mapping.
    3. RequestMethod[] method - The HTTP request methods to map to, narrowing the primary mapping: GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE, TRACE.
    4. String name - Assign a name to this mapping.
    5. String[] params - The parameters of the mapped request, narrowing the primary mapping.
    6. String[] path - The path mapping URIs — for example, "/profile".
    7. String[] produces - Narrows the primary mapping by media types that can be produced by the mapped handler.
    8. String[] value - The path mapping URIs — for example, "/profile".

```java
@Controller
@RequestMapping("/api")//class level
public class Customer {

    @RequestMapping("/home")// Method level
    public String hello(){
        return "home";
    }

    @RequestMapping(value={"/student","/teacher"},//Multiple URI
         method=RequestMethod.GET//HTTP Methods
         produces={MediaType.APPLICATION_XML_VALUE,MediaType.APPLICATION_JSON_VALUE},
         consumes=MediaType.APPLICATION_XML_VALUE)
    public Student getStudent(){
        Student student = new Student(1, "Collins", "Finalist");
        return student;
    }
}
```

```java
@RequestMapping(value = "/home", method = RequestMethod.GET)

@PostMapping(value="/save", consumes="application/json", produces="application/json")
public User save(@RequestBody User user) { }

@RequestMapping(value="/info", method={RequestMethod.GET, RequestMethod.POST},headers = "Accept=application/json")
public String info() { }
```

- @PostMapping - Annotation for mapping HTTP POST requests onto specific handler methods.
- @PutMapping - Annotation for mapping HTTP PUT requests onto specific handler methods.
- @RequestAttribute - Annotation to bind a method parameter to a request attribute.
- @GetMapping - Annotation for mapping HTTP GET requests onto specific handler methods.is a composed annotation that acts as a shortcut for @RequestMapping(method = RequestMethod.GET).
- @DeleteMapping - Annotation for mapping HTTP DELETE requests onto specific handler methods.
- @PatchMapping - Annotation for mapping HTTP PATCH requests onto specific handler methods.


**CONTROLLERS**:- Controller is an interface in Spring MVC. It receives HttpServletRequest and HttpServletResponse in web app just like an HttpServlet, but it is able to participate in an MVC flow.Controllers are similar to a Struts Action in a Struts based Web application.
Spring recommends that the implementation of Controller interface should be a reusable, thread-safe class, capable of handling multiple HTTP requests throughout the lifecycle of an application.It is preferable to implement Controller by using a JavaBean.Controller interprets user input and transforms it into a model. The model is represented to the user by a view.
Spring implements a controller in a very generic way. This enables us to create a wide variety of controllers.

In Spring MVC, controllers are just classes with methods that are annotated with `@RequestMapping` or extends `Controller interface` to declare the kind of requests they’ll handle.A component that handles incoming requests.
There are two ways to write controllers: Either by implementing Controller interface or using annotations.

`Legacy Controller (implements Controller interface)`:- Used before annotations. Mapping was defined in XML, not on the controller class.

```java
public interface Controller{
 ModelandView handleRequest(HandleServletRequest req,HandleServletResponse res)
}
```

```java
public class HomeController implements Controller{

   @Override
   ModelandView handleRequest(HandleServletRequest req,HandleServletResponse res){
   ModelandView mav= new ModelandView();
   mav.setViewName("/home")

   return mav;
 }
}

public class UserController extends MultiActionController {

    public ModelAndView list(HttpServletRequest req, HttpServletResponse res) {
        return new ModelAndView("user-list");
    }

    public ModelAndView add(HttpServletRequest req, HttpServletResponse res) {
        return new ModelAndView("user-add");
    }
}
```

`@Controller annotation`:- use @Controller annotation to indicate that a class is a Controller in Spring MVC.The dispatcher in Spring scans for @Controller annotated classes for mapped methods and detects @RequestMapping.
Classes annotated with the @Controller, handle HTTP requests and return responses. They can contain methods that process input and return view names with model data through ModelAndView objects or String view names.
Add the controller in the controller subpackage so that it is picked up by the @ComponentScan annotation:

```java
@Controller
@RequestMapping("/")
public class HomeController{

   @RequestMapping(method=GET)
   public String home(){
      return "home";
 }
}
```

- *Passing model data to the view*: The method is given a `Model` as a parameter so that it can populate the model with the data list it retrieves.
The Model is essentially a map (that is, a collection of key-value pairs) that will be handed off to the view so that the data can be rendered to the client. When addAttribute() is called without specifying a key, the key is inferred from the type of object being set as the value.

```java
@Controller
@RequestMapping("/students")
public class HomeController{

   @RequestMapping(method=GET)
   public String students(Model model){
      model.addAttribute("key",value)
      return "students";
 }
}
```

Likewise, if you’d prefer to work with a non-Spring type, you can ask for a java.util.Map instead of Model.

```java
public String students(Map model)
```

Now that there’s data in the model,when the view is a JSP, the model data is copied into the request as request attributes.
Therefore, the .jsp file can use JavaServer Pages Standard Tag Library’s (JSTL) <c:forEach> tag to render the list.


- *Accepting request input*: Spring MVC provides several ways that a client can pass data into a controller’s handler method. These include
    1. Query parameters
    2. Form parameters
    3. Path variables

Taking query parameters - Query parameters are a common way to pass information to a controller in a request.Query strings are used to extract the query string data from uri.In query string data is optional,if you will not send then default value will be used.

- @PathVariable - Annotation which indicates that a method parameter should be bound to a URI template variable.Binds request parameters to the method parameters and extracts query parameters from the URL. It can handle multiple parameter types. It supports the following attributes:-
    1. required: Specifies if the parameter is mandatory
    2. defaultValue: Default value if the parameter is missing
    3. value/name: Parameter name

```java
@RequestMapping(method=RequestMethod.GET)
public List<Spittle> spittles(
      @RequestParam(name="max",required=false,default="10") long max,
      @RequestParam("count") int count) {
   return spittleRepository.findSpittles(max, count);
}
```

Taking input via path parameters:- Used to etract uri path data from uri.Data is mandatory,if you will not send data 404 error is thrown.
To accommodate path variables, Spring MVC allows for placeholders in an @RequestMapping path. The placeholders are names surrounded by curly braces ({ and }). Although all the other parts of the path need to match exactly for the request to be handled, the placeholder can carry any value.

- @RequestParam - Annotation which indicates that a method parameter should be bound to a web request parameter.

Here’s a handler method that uses placeholders to accept a Spittle ID as part of the path:

```java
@RequestMapping(value="/{spittleId}", method=RequestMethod.GET)
public String spittle(@PathVariable("spittleId") long spittleId,Model model) {
   model.addAttribute(spittleRepository.findOne(spittleId));
   return "spittle";
}
```

Query parameters and path parameters are fine for passing small amounts of data on a request. But often you need to pass a lot of data (perhaps data coming from a form submission), and query parameters are too awkward and limited for that.

- Processing forms: Web applications typically do more than just push content out to the user. Most also let users participate in the conversation by filling out forms and submitting data back into the application. Spring MVC controllers are well-suited for form processing as well as serving content.
There are two sides to working with forms: displaying the form and processing the data the user submits from the form.

```java
@RequestMapping(value="/register", method=GET)
public String showRegistrationForm() {
   return "registerForm";
}
```

Because the view name is registerForm, you’ll need a JSP named registerForm.jsp. This JSP must include an HTML <form> where the user will enter information to sign up with the application.

- Writing a form-handling controller: When processing the POST request from the registration form, the controller needs to accept the form data and save the form data. Finally, in order to prevent a duplicate submission (such as might happen if the user clicked their browser’s Refresh button), it should redirect the browser.
As part of that POST request, user information is passed as parameters on the request to simulate a form being submitted.

When handling a POST request, it’s usually a good idea to send a redirect after the POST has completed processing so that a browser refresh won’t accidentally submit the
form a second time.


`Validation, Data Binding, and Type Conversion` - There are pros and cons for considering validation as business logic, and Spring offers a design for validation and data binding that does not exclude either one of them. Specifically, validation should not be tied to the web tier and should be easy to localize, and it should be possible to plug in any available validator. Considering these concerns, Spring provides a Validator contract that is both basic and eminently usable in every layer of an application.

Data binding is useful for letting user input be dynamically bound to the domain model of an application (or whatever objects you use to process user input). Spring provides the aptly named DataBinder to do exactly that. The Validator and the DataBinder make up the validation package, which is primarily used in but not limited to the web layer.

The BeanWrapper is a fundamental concept in the Spring Framework and is used in a lot of places. However, you probably do not need to use the BeanWrapper directly. Because this is reference documentation, however, we feel that some explanation might be in order. We explain the BeanWrapper in this chapter, since, if you are going to use it at all, you are most likely do so when trying to bind data to objects.

Spring’s DataBinder and the lower-level BeanWrapper both use PropertyEditorSupport implementations to parse and format property values. The PropertyEditor and PropertyEditorSupport types are part of the JavaBeans specification and are also explained in this chapter. Spring’s core.convert package provides a general type conversion facility, as well as a higher-level format package for formatting UI field values. You can use these packages as simpler alternatives to PropertyEditorSupport implementations. They are also discussed in this chapter.

Spring supports Java Bean Validation through setup infrastructure and an adaptor to Spring’s own Validator contract. Applications can enable Bean Validation once globally, as described in Java Bean Validation, and use it exclusively for all validation needs. In the web layer, applications can further register controller-local Spring Validator instances per DataBinder, as described in Configuring a DataBinder, which can be useful for plugging in custom validation logic.
Resources


- Validating forms: You can take advantage of Spring’s support for the Java Validation API (a.k.a. JSR-303). Starting with Spring 3.0, Spring supports the Java Validation API in Spring MVC. No extra configuration is required to make Java Validation work in Spring MVC. You just need to make sure an implementation of the Java API, such as Hibernate Validator, is in the project’s classpath.
The Java Validation API defines several annotations that you can put on properties to place constraints on the values of those properties. All of these annotations are in the javax.validation.constraints package.
The controller is annotated with @Valid to indicate to Spring that the command object has validation constraints that should be enforced.
@ModelAttribute - Annotation that binds a method parameter or method return value to a named model attribute, exposed to a web view.Binds a method parameter or method return value to a named model attribute and automatically populates the object with data from the form submissions.

Validation ensures:

1. Data integrity in your APIs.
2. Better user experience with meaningful error messages.
3. Reduced bugs in the business logic.


Handle Errors with @ExceptionHandler:- Customize error responses for invalid data.

```java
@ControllerAdvice
public class GlobalExceptionHandler{
   @ExceptionHandler(MethodArgumentNotValidException.class)
   public ResponseEntity<Map<String,String>> handleValidationExceptions(@MethodArgumentNotValidException ex){
      Map<String,String> errors = new HashMap<>();
      ex.getBindingResult().getFieldErrors().forEach(error -> errors.put(
         error.getField(), error.getDefaultMessage()
      ));
      return new ResponseEntity<>(errors,HttpStatus.BAD_REQUEST);
   }
}
```

Extracts validation errors and returns them as a structured JSON response.

- Best Practices for Validation
   1. Validate at the DTO level using annotations.
   2. Use custom constraints for specific requirements.
   3. Handle exceptions globally with @ControllerAdvice.
   4. Avoid mixing validation logic with business logic.

Bean Validation:-  Bean Validation provides a common way of validation through constraint declaration and metadata for Java applications. To use it, you annotate domain model properties with declarative validation constraints which are then enforced by the runtime. There are built-in constraints, and you can also define your own custom constraints.


```java
public class User{
    @NotNull
    private String username;
    @NotNull
    private String password
}
---
@RequestMapping("/user")
public String login(@Valid @ModelAttribute User user,BindingResult result,Model model){
    if(result.hasErrors()){
        model.addAttrribute("status","false");
        return user;
    }

    model.addAttribute("status","true");
    return user;
}

```

```jsp
<form action="<%=contextPath%>/sample/form" method="post">
    <c:if test="${status== false}">
        <p>Error</p>
    <c:if test="${status== true}">
        <p>Successful</p>        
```

In Spring MVC framework we can use MultipartResolver interface to upload a file. We need to make configuration changes to make it work. After uploading the file, we have to create Controller handler method to process the uploaded file in application.


- *Reading Data from Request Body*:- Generally,HTTP request body will send data in from of POST method.ModelAttribute will take care of reading form data and bind to JavaBean,during binding,if any errors are found then `BindingResult` will be executed which will hold all errors details.


**VIEW RESOLVER(Rendering web views)**:- Controllers populate the model with some data and then pass the model off to a view for rendering.
Decoupling request-handling logic in the controller from the view-rendering of a view is an important feature of Spring MVC. If the controller methods were directly responsible for producing HTML, it would be difficult to maintain and update the view without getting your hands dirty in request-handling logic. At most, the controller methods and view implementations should agree on the contents of the model; apart from that, they should keep an arms-length distance from each other.

Spring’s view resolvers helps Spring determine which actual view implementation it should use to render the model.
Spring MVC defines an interface named `ViewResolver` that looks a little something like this:

```java
public interface ViewResolver {
   View resolveViewName(String viewName, Locale locale)
      throws Exception;
}
```

The resolveViewName() method, when given a view name and a Locale, returns a View instance. View is another interface that looks like this:

```java
public interface View {
   String getContentType();
   void render(Map<String, ?> model,
      HttpServletRequest request,
      HttpServletResponse response) throws Exception;
}
```

The View interface’s job is to take the model, as well as the servlet request and response objects, and render output into the response.

Although you can write your own custom implementations of ViewResolver and View, and although there are some special cases where that’s necessary, typically you needn’t worry yourself with these interfaces.
Spring comes with 13 view resolvers to translate logical view names into physical view implementations:-
1. BeanNameViewResolver - Resolves views as beans in the Spring application context whose ID is the same as the view name.
2. ContentNegotiatingViewResolver - Resolves views by considering the content type desired by the client and delegating to another view resolver that can produce that type.
3. FreeMarkerViewResolver - Resolves views as FreeMarker templates.
4. InternalResourceViewResolver - Resolves views as resources internal to the web application (typically JSPs).
5. JasperReportsViewResolver - Resolves views as JasperReports definitions.
6. ResourceBundleViewResolver - Resolves views from a resource bundle (typically a properties file).
7. TilesViewResolver - Resolves views as Apache Tile definitions, where the tile ID is the same as the view name. Note that there are two different TilesViewResolver implementations, one each for Tiles 2.0 and Tiles 3.0.
8. UrlBasedViewResolver - Resolves views directly from the view name, where the view name matches the name of a physical view definition.
9. VelocityLayoutViewResolver - Resolves views as Velocity layouts to compose pages from different Velocity templates.
10. VelocityViewResolver - Resolves views as Velocity templates.
11. XmlViewResolver - Resolves views as bean definitions from a specified XML file. Similar to BeanNameViewResolver.
12. XsltViewResolver - Resolves views to be rendered as the result of an XSLT transformation.


**VIEWS**:-

`Creating JSP views`:- Spring supports JSP views in two ways:
- InternalResourceViewResolver can be used to resolve view names into JSP files. Moreover, if you’re using JavaServer Pages Standard Tag Library (JSTL)
tags in your JSP pages, InternalResourceViewResolver can resolve view names into JSP files fronted by JstlView to expose JSTL locale and resource bundle
variables to JSTL’s formatting and message tags.
- Spring provides two JSP tag libraries, one for form-to-model binding and one providing general utility features.

Whether or not you use JSTL or intend to use Spring’s JSP tag libraries, it’s important to configure a view resolver to resolve JSP views. Although a few of Spring’s other view resolvers could be used to map view names to JSP files, InternalResourceViewResolver is the simplest and most commonly used view resolver for this task.

`Configuring a JSP-ready view resolver`: Whereas some view resolvers, such as ResourceBundleViewResolver, directly map a logical view name to a specific implementation of the View interface, InternalResourceViewResolver takes a more indirect approach. It follows a convention whereby a prefix and a suffix are attached to the view name to determine the physical path to a view resource in the same web application.

As an example, consider the simple case where the logical view name is home. It’s a common practice to place JSP files under the web application’s WEB-INF folder to prevent direct access.
If you were to keep all your JSP files in /WEB-INF/views/, and if your home page JSP is named home.jsp, then you could derive the physical view path by prefixing the logical
view name home with /WEB-INF/views/ and adding a suffix of .jsp.

You can configure InternalResourceViewResolver to apply this convention when resolving views by configuring it with this @Bean-annotated method:

```java
@Bean
public ViewResolver viewResolver() {
   InternalResourceViewResolver resolver = new InternalResourceViewResolver();
   resolver.setPrefix("/WEB-INF/views/");
   resolver.setSuffix(".jsp");
   return resolver;
}
```

Optionally, if you prefer to use Spring’s XML-based configuration, you can configure InternalResourceViewResolver like this:

```xml
<bean id="viewResolver" 
   class="org.springframework.web.servlet.view.InternalResourceViewResolver"
   p:prefix="/WEB-INF/views/"
   p:suffix=".jsp" />
```

With this configuration of InternalResourceViewResolver in place, you can expect it to resolve logical view names into JSP files such as this:
- home resolves to /WEB-INF/views/home.jsp
- productList resolves to /WEB-INF/views/productList.jsp
- books/detail resolves to /WEB-INF/views/books/detail.jsp


**Handling exceptions**:- No matter what happens, good or bad, the outcome of a servlet request is a servlet response. If an exception occurs during request processing, the outcome is still a servlet response. Somehow, the exception must be translated into a response.

Spring MVC Framework provides following mechanisms to help us achieve exception handling:
1. Controller Based: A developer can define exception handler methods in a Controller class. To do so, they have to annotate the methods with @ExceptionHandler annotation.
2. Global Exception Handler: Spring provides @ControllerAdvice annotation for exception handling as cross-cutting concern. We can mark any class as global exception handler by using this annotation.
3. HandlerExceptionResolver implementation: Spring Framework provides HandlerExceptionResolver interface that can be implemented to create a global exception handler.

The simplest way to handle an exception is to map it to the HTTP status code to be placed on the response.

@ControllerAdvice - Specialization of @Component for classes that declare @ExceptionHandler, @InitBinder, or @ModelAttribute methods to be shared across multiple @Controller classes.
@ExceptionHandler - Annotation for handling exceptions in specific handler classes and/or handler methods.
@ResponseStatus - Marks a method or exception class with the status ResponseStatus.code() and ResponseStatus.reason() that should be returned.

Spring offers a handful of ways to translate exceptions to responses:
1. Certain Spring exceptions are automatically mapped to specific HTTP status codes.
2. An exception can be annotated with @ResponseStatus to map it to an HTTP status code.
3. A method can be annotated with @ExceptionHandler to handle the exception.

The simplest way to handle an exception is to map it to the HTTP status code to be placed on the response.

- `Mapping exceptions to HTTP status codes`:- Out of the box, Spring automatically maps a dozen of its own exceptions to appropriate status codes.
    1. BindException - 400 - Bad Request
    2. ConversionNotSupportedException -500 - Internal Server Error
    3. HttpMediaTypeNotAcceptableException - 406 - Not Acceptable
    4. HttpMediaTypeNotSupportedException - 415 - Unsupported Media Type
    5. HttpMessageNotReadableException - 400 - Bad Request
    6. HttpMessageNotWritableException - 500 - Internal Server Error
    7. HttpRequestMethodNotSupportedException - 405 - Method Not Allowed
    8. MethodArgumentNotValidException - 400 - Bad Request
    9. MissingServletRequestParameterException - 400 - Bad Request
    10. MissingServletRequestPartException - 400 - Bad Request
    11. NoSuchRequestHandlingMethodException - 404 - Not Found
    12. TypeMismatchException - 400 - Bad Request

The exceptions are usually thrown by Spring itself as the result of something going wrong in DispatcherServlet or while performing validation. For example, if DispatcherServlet can’t find a controller method suitable to handle a request, a NoSuchRequestHandlingMethodException will be thrown, resulting in a response with a status code of 404 (Not Found).
Although these built-in mappings are helpful, they do no good for any application exceptions that may be thrown. Fortunately, Spring offers a way to map exceptions to HTTP status codes via the @ResponseStatus annotation.

```java
@RequestMapping(value="/{spittleId}", method=RequestMethod.GET)
public String spittle( @PathVariable("spittleId") long spittleId,Model model) {
    Spittle spittle = spittleRepository.findOne(spittleId);
    if (spittle == null) { throw new SpittleNotFoundException();}
    model.addAttribute(spittle);
    return "spittle";
}
```

Here, a Spittle is retrieved by its ID from the SpittleRepository. If findOne() returns a Spittle object, that Spittle is put into the model, and the view whose name is spittle is tasked with rendering it in the response. But if findOne() returns null, then a SpittleNotFoundException is thrown. For now, SpittleNotFoundException is a simple unchecked exception that looks like this:

```java
public class SpittleNotFoundException extends RuntimeException {
    public SpittleNotFoundException(String message){
        super(message);
    }
}
```

If the spittle() method is called on to handle a request, and the given ID comes up empty, the SpittleNotFoundException will (by default) result in a response with a 500 (Internal Server Error) status code. In fact, in the event of any exception that isn’t otherwise mapped, the response will always have a 500 status code. But you can change that by mapping SpittleNotFoundException otherwise.
When SpittleNotFoundException is thrown, it’s a situation where a requested resource isn’t found. The HTTP status code of 404 is precisely the appropriate response status code when a resource isn’t found. So, let’s use @ResponseStatus to map SpittleNotFoundException to HTTP status code 404.

```java
@ResponseStatus(value=HttpStatus.NOT_FOUND,reason="Spittle Not Found")
public class SpittleNotFoundException extends RuntimeException {
}
```

After introducing this @ResponseStatus annotation, if a SpittleNotFoundException were to be thrown from a controller method, the response would have a status code of 404 and a reason of Spittle Not Found.

`Exception-handling methods`:- Mapping exceptions to status codes is simple and sufficient for many cases. But what if you want the response to carry more than just a status code that represents the error that occurred, Rather than treat the exception generically as some HTTP error, maybe you’d like to handle the exception the same way you might handle the request itself.

If @ExceptionHandler methods can handle exceptions thrown from any handler method in the same controller class, you might be wondering if there’s a way they can handle exceptions thrown from handler methods in any controller. As of Spring 3.2 they certainly can, but only if they’re defined in a controller advice class.


**Advising controllers**:- Certain aspects of controller classes might be handier if they could be applied broadly across all controllers in a given application. @ExceptionHandler methods, for instance, could prove useful in handling exceptions across multiple controllers. If a particular exception is thrown from multiple controller classes, you might find yourself duplicating the same @ExceptionHandler method in all of those controllers. Or, to avoid the duplication, you might create a base controller class that all of your controllers could extend to inherit the common @ExceptionHandler method.
Spring 3.2 brings another option to the table: controller advice. A controller advice is any class that’s annotated with @ControllerAdvice and has one or more of the following kinds of methods:
1. @ExceptionHandler-annotated
2. @InitBinder-annotated
3. @ModelAttribute-annotated

Those methods in an @ControllerAdvice-annotated class are applied globally across all @RequestMapping-annotated methods on all controllers in an application.
The @ControllerAdvice annotation is itself annotated with @Component. Therefore,an @ControllerAdvice-annotated class will be picked up by component-scanning, just like an @Controller-annotated class.

One of the most practical uses for @ControllerAdvice is to gather all @ExceptionHandler methods in a single class so that exceptions from all controllers are handled consistently in one place.

```java
@ControllerAdvice
public class AppWideExceptionHandler {
    @ExceptionHandler(DuplicateSpittleException.class)
    public String duplicateSpittleHandler() {
    return "error/duplicate";}
}
```

Now, if a DuplicateSpittleException is thrown from any controller method, no matter which controller it’s in, this duplicateSpittleHandler() method will be called to handle the exception. The @ExceptionHandler-annotated method can be written much like an @RequestMapping-annotated method.


Spring MVC is not used in developing web applications commonly nowadays coz:-
1. Web container is required.
2. Takes more processing time.
3. Not lightweight.

Market is using Javascript MVC frameworks to develop web applications instead of Java MVC e.g Angular,React,Vue.

---

### (Distributed Applications)Web Services

Starting with Spring 3.0, Spring introduced first-class support for creating REST APIs. And Spring’s REST implementation has continued to evolve through Spring.
Spring’s REST support builds on Spring MVC.
The REST capabilities are provided by the Spring MVC module (same module that provides model-view-controller capabilities). It is not a JAX-RS implementation and can be seen as a Spring alternative to the JAX-RS standard.


**The fundamentals of REST**:-

- `Representational`- REST resources can be represented in virtually any form, including XML, JavaScript Object Notation (JSON), or even HTML—whatever form best suits the consumer of those resources.
- `State` — When working with REST, you’re more concerned with the state of a resource than with the actions you can take against resources.
- `Transfer` — REST involves transferring resource data, in some representational form, from one application to another.

Resources in REST are identified and located with URLs. There are no strict rules regarding RESTful URL structure, but the URL should identify a resource, not bark a command to the server. Again, the focus is on things, not actions.

Spring has long had some of the ingredients needed for exposing REST resources.Starting with version 3.0, however, Spring began adding enhancements to Spring MVC to provide first-class REST support.Spring supports the creation of REST resources in the following ways:
1. Controllers can handle requests for all HTTP methods, including the four primary REST methods: GET, PUT, DELETE, and POST. Spring 3.2 and higher also supports the PATCH method.
2. The @PathVariable annotation enables controllers to handle requests for parameterized URLs (URLs that have variable input as part of their path).
3. Resources can be represented in a variety of ways using Spring views and view resolvers, including View implementations for rendering model data as XML,JSON, Atom, and RSS.
4. The representation best suited for the client can be chosen using ContentNegotiatingViewResolver.
5. View-based rendering can be bypassed altogether using the @ResponseBody annotation and various HttpMethodConverter implementations.
6. Similarly, the @RequestBody annotation, along with HttpMethodConverter implementations, can convert inbound HTTP data into Java objects passed in to a controller’s handler methods.
7. Spring applications can consume REST resources using RestTemplate.


NOTE:- Although Spring supports a variety of formats for representing resources, you aren’t obligated to use them all when defining your REST API.JSON and XML are often sufficient representations expected by most clients.
Certainly, if you’ll be presenting content to be consumed by a human, you should probably support HTML formatted resources. Depending on the nature of the resource and the requirements of your application, you may even choose to present the resource as a PDF document or an Excel spreadsheet.
For non-human consumers, such as other applications or code that invokes your REST endpoints, the leading choices for resource representation are XML and JSON.
It’s easy enough to support both of these options using Spring, so there’s no need to make a choice.

Spring offers two options to transform a resource’s Java representation into the representation that’s shipped to the client:
- `Content negotiation` — A view is selected that can render the model into a representation to be served to the client.
- `Message conversion` — A message converter transforms an object returned from the controller into a representation to be served to the client.

**Negotiating resource representation**:- When a controller’s handler method finishes, a logical view name is usually returned. If the method doesn’t directly return a logical view name (if the method returns void, for example), the logical view name is derived from the request’s URL. DispatcherServlet then passes the view name to a view resolver, asking it to help determine which view should render the results of the request.

In a human-facing web application, the view chosen is almost always rendered as HTML; view resolution is a one-dimensional activity. If the view name matches a view,then that’s the view you go with.When it comes to resolving view names into views that can produce resource representations, there’s an additional dimension to consider. Not only does the view need to match the view name, but the view also needs to be chosen to suit the client. If the client wants JSON data, then an HTML-rendering view won’t do—even if the view name matches.

Spring’s ContentNegotiatingViewResolver is a special view resolver that takes the content type that the client wants into consideration. In it’s simplest possible form, ContentNegotiatingViewResolver can be configured like this:

```java
@Bean
public ViewResolver cnViewResolver() {
return new ContentNegotiatingViewResolver();
}
```

A lot is going on in that simple bean declaration. Understanding how ContentNegotiatingViewResolver works involves getting to know the content-negotiation two-step:
1. Determine the requested media type(s).
2. Find the best view for the requested media type(s).

`DETERMINING THE REQUESTED MEDIA TYPES`:- The first step in the content-negotiation two-step is determining what kind of resource representation the client wants.
ContentNegotiatingViewResolver considers the Accept header and uses whatever media types it asks for, but only after it first looks at the URL’s file extension. If the URL has a file extension on the end, ContentNegotiatingViewResolver tries to figure out the desired type based on that extension. If the extension is .json, then the desired content type must be application/json. If it’s .xml, then the client is asking for application/xml. Of course, an .html extension indicates that the client wants the resource represented as HTML (text/html).

If the file extension doesn’t produce any usable clues for the media type, then the Accept header in the request is considered. In that case, the Accept header’s value indicates the MIME type(s) that the client wants; there’s no need to look it up. In the end, if there is no Accept header and the extension is no help, ContentNegotiatingViewResolver falls back to / as the default content type, meaning the client has to take whatever representation the server sends it.

Once a content type has been determined, it’s time for ContentNegotiatingViewResolver to resolve the logical view name into a View for rendering the model. Unlike Spring’s other view resolvers, ContentNegotiatingViewResolver doesn’t resolve views on its own. Instead, it delegates to other view resolvers, asking them to resolve the view.
ContentNegotiatingViewResolver asks the other view resolvers to resolve the logical view name into a view. Every view that’s resolved is added to a list of candidate views. With the candidate view list assembled, ContentNegotiatingViewResolver cycles through all the requested media types, trying to find a view from among the candidate views that produces a matching content type. The first match found is the one that’s used to render the model.

`INFLUENCING HOW MEDIA TYPES ARE CHOSEN`:-


The key benefit of using ContentNegotiatingViewResolver is that it layers REST resource representation on top of the Spring MVC with no change in controller code.The same controller method that serves human-facing HTML content can also serve JSON or XML to a non-human client.
Content negotiation is a convenient option when there’s a great deal of overlap between your human and non-human interfaces. In practice, though, human-facing views rarely deal at the same level of detail as a REST API. The benefit of ContentNegotiatingViewResolver isn’t realized when there isn’t much overlap between the human and non-human interfaces.
ContentNegotiatingViewResolver also has a serious limitation. As a ViewResolver implementation, it only has an opportunity to determine how a resource is rendered to a client. It has no say in what representations a controller can consume from the client. If the client is sending JSON or XML, then ContentNegotiatingViewResolver isn’t much help.

Because of these limitations, it is not generally preferred to use ContentNegotiatingViewResolver. Instead,I lean heavily toward using Spring’s message converters for producing resource representations.

**HTTP message converters**:- Message conversion is a more direct way to transform data produced by a controller into a representation that’s served to a client. When using message conversion,DispatcherServlet doesn’t bother with ferrying model data to a view. In fact, there is no model, and there is no view. There is only data produced by the controller and a resource representation produced when a message converter transforms that data.
Spring comes with a variety of message converters to handle the most common object-to-representation conversion needs.

1. AtomFeedHttpMessageConverter - Converts Rome Feed objects to and from Atom feeds (media type application/atom+xml).Registered if the Rome library is present on the classpath.
2. BufferedImageHttpMessageConverter - Converts BufferedImage to and from image binary data.
3. ByteArrayHttpMessageConverter - Reads and writes byte arrays. Reads from all media types (*/*), and writes as application/octet-stream.
4. FormHttpMessageConverter - Reads content as application/x-www-form-urlencoded into a MultiValueMap<String,String>. Also writes MultiValueMap<String,String> as application/x-www-form-urlencoded and MultiValueMap<String, Object> as multipart/form-data.
5. Jaxb2RootElementHttpMessage - ConverterReads and writes XML (either text/xml or application/xml) to and from JAXB2-annotated objects. Registered if JAXB v2 libraries are present on the classpath.
6. MappingJacksonHttpMessageConverter - Reads and writes JSON to and from typed objects or untyped HashMaps. Registered if the Jackson JSON library is present on the classpath.
7. MappingJackson2HttpMessageConverter - Reads and writes JSON to and from typed objects or untyped HashMaps. Registered if the Jackson 2 JSON library is present on the classpath.
8. MarshallingHttpMessageConverter - Reads and writes XML using an injected marshaler and unmarshaler. Supported (un)marshalers include Castor, JAXB2, JIBX, XMLBeans, and XStream.
9. ResourceHttpMessageConverter - Reads and writes org.springframework.core.io.Resource.
10. RssChannelHttpMessageConverter - Reads and writes RSS feeds to and from Rome Channel objects. Registered if the Rome library is present on the classpath.
11. SourceHttpMessageConverter - Reads and writes XML to and from javax.xml.transform.Source objects.
12. StringHttpMessageConverter - Reads all media types (*/*) into a String. Writes String to text/plain.
13. XmlAwareFormHttpMessageConverter - An extension of FormHttpMessageConverter that adds support for XML-based parts using a SourceHttpMessageConverter.

For example, suppose the client has indicated via the request’s Accept header that it can accept application/json. Assuming that the Jackson JSON library is in the application’s classpath, the object returned from the handler method is given to MappingJacksonHttpMessageConverter for conversion into a JSON representation to be returned to the client. On the other hand, if the request header indicates that the client prefers text/xml, then Jaxb2RootElementHttpMessageConverter is tasked  with producing an XML response to the client.

Note that all but five of the HTTP message converters are registered by default, so no Spring configuration is required to use them. But you may need to add additional libraries to your application’s classpath to support them. For instance, if you want to use MappingJacksonHttpMessageConverter to convert JSON messages to and from Java objects, you’ll need to add the Jackson JSON Processor library to the classpath. Similarly, the JAXB library is required for Jaxb2RootElementHttpMessageConverter to convert messages between XML and Java objects. And the Rome library is required for AtomFeedHttpMessageConverter and RssChannelHttpMessageConverter when the message comes in Atom or RSS format.


`RETURNING RESOURCE STATE IN THE RESPONSE BODY`:- Normally, when a handler method returns a Java object (anything other than String or an implementation of View), that object ends up in the model for rendering in the view. But if you’re going to employ message conversion, you need to tell Spring to skip the normal model/view flow and use a message converter instead. There are a handful of ways to do this, but the simplest is to annotate the controller method with @ResponseBody.

```java
@RequestMapping(method=RequestMethod.GET,produces="application/json")
public @ResponseBody List<Spittle> spittles(){}
```

The @ResponseBody annotation tells Spring that you want to send the returned object as a resource to the client, converted into some representational form that the client can accept. More specifically, DispatcherServlet considers the request’s Accept header and looks for a message converter that can give the client the representation it wants.
For illustration’s sake, if the client’s Accept header specifies that the client will accept application/json, and if the Jackson JSON library is in the application’s classpath, then either MappingJacksonHttpMessageConverter or MappingJackson2HttpMessageConverter will be chosen (depending on which version of Jackson is in the classpath). The message converter will convert the Spittle list returned from the controller into a JSON document that will be written to the body of the response.


`RECEIVING RESOURCE STATE IN THE REQUEST BODY`:- A REST API can also receive resource representations from the client. It’d be inconvenient if your controller had to convert a JSON or XML representation sent from a client into an object it can use.
Just as @ResponseBody tells Spring to employ a message converter when sending data to a client, the @RequestBody tells Spring to find a message converter to convert a resource representation coming from a client into an object.

```java
@RequestMapping(method=RequestMethod.POST,consumes="application/json")
public @ResponseBody Spittle saveSpittle(@RequestBody Spittle spittle) {}
```

@RequestBody - Annotation indicating a method parameter should be bound to the body of the web request.Spring treats result of method as response.Converts response to JSON.Binds HTTP request body to method parameter and automatically deserialize JSON/XML. It is used in POST or PUT requests to read data sent by the client and supports content negotiations.
@ResponseBody - Annotation that indicates a method return value should be bound to the web response body.Indicates that the method returns the data directly to the HTTP response body,bypassing the view resolution. This is used in RESTful APIs and can automatically serialize objects to JSON/XML.


`DEFAULTING CONTROLLERS FOR MESSAGE CONVERSION`:- The @ResponseBody and @RequestBody annotations are succinct yet powerful ways to engage Spring’s message converters when handling requests. But if you’re writing a controller that has several methods, all of which should use message conversion, then those annotations get somewhat repetitive.
Spring 4.0 introduced the @RestController annotation to help with that. If you annotate your controller class with @RestController instead of @Controller, Spring applies message conversion to all handler methods in the controller. You don’t need to annotate each method with @ResponseBody.

@RestController - A convenience annotation that is itself annotated with @Controller and @ResponseBody.Used to develop RESTful web apps.Used to define a controller class that handles RESTful web services. It returns data directly (like JSON) instead of views,eliminating the need for @ResponseBody on each method.
It is a specialized version of the @Controller that combines @Controller and @ResponseBody. It is specifically designed for RESTful web services where every method returns data rather than a view.

```java
@RestController
@RequestMapping("/spittles")
public class SpittleController {
    @RequestMapping(method=RequestMethod.GET,produces="application/json")
    public List<Spittle> spittles(){}

    @RequestMapping(method=RequestMethod.POST,consumes="application/json")
    public Spittle saveSpittle(@RequestBody Spittle spittle) {}
}
```

Neither of the handler methods are annotated with @ResponseBody. But because the controller is annotated with @RestController, the objects returned from those methods will still go through message conversion to produce a resource representation for the client.

**Validation**:- Use @Valid to validate incoming request data automatically.
@Validated - Variant of JSR-303's jakarta. validation. Valid, supporting the specification of validation groups. Designed for convenient use with Spring's JSR-303 support but not JSR-303 specific.
Can be used, for example, with Spring MVC handler methods arguments. Supported through org. springframework. validation. SmartValidator's validation hint concept, with validation group classes acting as hint objects.

```java
@RestController
@Validated
@RequestMapping("/user")
public class UserController{
   @PostMapping
   public ResponseEntity<String> createUser(@Valid @RequestBody UserRequest request){
        return ResponseEntity.ok("user created");
   }

    //Validating PathVariable
    @GetMapping("/{userId}")
    public ResponseEntity<User> getUserById(@PathVariable 
                            @Min(value = 1,message = "{min_user_id_value}")  Integer userId) throws UsernotFoundException {
        return ResponseEntity.status(HttpStatus.OK).body(userService.getUserById(userId));
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity<User> getUserById(@PathVariable 
                            @Min(value = 1,message = "${min_user_id_value}")  Integer userId) throws UsernotFoundException {
        return ResponseEntity.status(HttpStatus.OK).body(userService.deleteUser(userId));
    }

    //Validating RequestParam
    @GetMapping
    public ResponseEntity<User> getUserBetween(
        @RequestParam(defaultValue = "2025-10-01") @PastOrPresent(message = "{start_date}") LocalDate startDate,
        @RequestParam(defaultValue = "2025-12-01") @PastOrPresent(message = "{end_date}") LocalDate endDate) throws UsernotFoundException {
        return ResponseEntity.status(HttpStatus.OK).body(userService.getUserBetweeen(startDate,endDate));
    }

    //validating dto
    @PostMapping("/register")
    public void register(@Valid @RequestBody UserRequest request){
        authService.register(request);
   }
}

//message.properties
min_user_id_value="User Id must be greater than 1"
start_date=
end_date=
```

When a method returns more than one error,e.g getUserBetween can return two errors at once.

```java
@ExceptionHandler(ConstraintViolationException.class)
public ResponseEntity<List<ErrorDTO>> handleInternalError(ConstraintViolationException exception){
    List<ErrorDTO> errorDTO = exception.getConstraintViolations()
            .stream()
            .map(error -> ErrorDTO.builder()
                .message(error.getMessage())
                .code(HttpStatus.BAD_REQUEST.value())
                .status(HttpStatus.BAD_REQUEST)
                .timestamp(LocalDateTime.now())
                .build())
            .toList();

    return ResponseEntity.status(errorDTO.get(0).getStatus()).body(errorDTO);
}

    @ExceptionHandler
    public ResponseEntity<List<ErrorDTO>> methodArg(MethodArgumentNotValidException exception){
        List<ErrorDTO> errorDTO = exception.
                getBindingResult().getAllErrors().stream()
                .map(error -> ErrorDTO.builder()
                        .message(error.getDefaultMessage())
                        .code(HttpStatus.BAD_REQUEST.value())
                        .status(HttpStatus.BAD_REQUEST)
                        .timestamp(LocalDateTime.now())
                        .build())
                .toList();

        return ResponseEntity.status(errorDTO.get(0).getStatus()).body(errorDTO);
    }
```

@Valid: Automatically triggers validation based on annotations in the UserRequest class.

- Use built-in annotations to validate fields in your DTOs

```java
public class UserRequest{

   @NotNull(message ="Name cannot be null")
   private String name;

   @Email(message ="Invalid Email")
   private String email;

   @Size(min =10, max =10, message ="Phone must be 10 digits")
   private String email;
}
```

**Pagination**:- Spring Boot provides many features to support Pagination natively. 
As of Spring version 3.3, a class PagedModel is available to enable the serialization of a page in the API. The last section describes the old approach providing our own implementation.

```java
@GetMapping("/tutorials")
public ResponseEntity<Map<String, Object>> getAllTutorialsPage(
    @RequestParam(required = false) String title,
    @RequestParam(defaultValue = "0") int page,
    @RequestParam(defaultValue = "3") int size,
    @RequestParam(defaultValue = "id,desc") String[] sort)
```


**Data Transfer Object (DTO)**:- is a design pattern used to transfer data between software application subsystems or layers, particularly over a network or between different parts of a system like a client and a server. Think of DTOs as specialized containers that carry data from one place to another without containing any business logic.
A DTO is typically a simple object with no business logic — just fields and corresponding getters/setters. It acts as a structured data container that defines exactly what information should be shared between different parts of your application.

```java
// Simple DTO example
public class UserDTO {
    private String name;
    private String email;

    public UserDTO(String name, String email) {
        this.name = name;
        this.email = email;
    }

    // Getters and Setters
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
}
```

DTOs solve several critical problems in modern software development by creating a clear boundary between your internal domain models and the data you expose externally. This separation is particularly valuable when building APIs, microservices, or any system where different layers need to communicate.
Key scenarios where DTOs shine:

1. API Communication: REST APIs, GraphQL endpoints, and RPC calls
2. Serialization/Deserialization: Converting objects to JSON, XML, or other formats
3. Data Privacy: Controlling what sensitive information gets exposed
4. Network Optimization: Reducing payload size by including only necessary fields
5. Version Management: Maintaining API compatibility while evolving internal models

Benefits of Using DTOs:-

1. `Encapsulation and Security` - DTOs act as a protective barrier around your internal domain models. They expose only the necessary data fields, protecting sensitive information like passwords, internal IDs, or business logic details.
2. `Simplified API Responses` - DTOs allow you to craft responses that include exactly what your API consumers need, reducing payload size and improving performance.
3. `Decoupling Layers` - DTOs create a clean separation between your data persistence layer (database entities) and your presentation layer (API responses), making your application more maintainable and flexible.
4. `Improved Testability` - By isolating data structures, DTOs make unit testing easier and more focused. You can test your API layer independently from your domain logic.
5. `Validation and Transformation` - DTOs serve as excellent input models where you can apply validation rules and transform raw user input into domain-specific structures.

Records can be used for DTOs to avoid relying on Lombok. Records automatically give us a concise syntax, built-in immutability, generated equals, hashCode, and toString methods, and clear intent without extra boilerplate.

```java
// Java Record (Java 14+) - Immutable, concise
public record UserRecord(String name, String email, LocalDateTime createdAt, boolean active) {
    
    // Compact constructor for validation and normalization
    public UserRecord {
        if (name == null || name.isBlank()) {
            throw new IllegalArgumentException("Name cannot be blank");
        }
        if (email == null || !email.contains("@")) {
            throw new IllegalArgumentException("Invalid email format");
        }
        // Normalize name
        name = name.trim();
        email = email.toLowerCase().trim();
    }
}
```

```java
// Records with Bean Validation
public record CreateUserRecord(
    @NotBlank(message = "Name is required")
    @Size(min = 2, max = 50, message = "Name must be between 2 and 50 characters")
    String name,
    
    @Email(message = "Invalid email format")
    @NotBlank(message = "Email is required")
    String email,
    
    @Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$", 
             message = "Password must be at least 8 characters with letters and numbers")
    String password,
    
    @Valid
    AddressRecord address
) {
    // Validation logic in compact constructor
    public CreateUserRecord {
        if (name != null) {
            name = name.trim();
        }
        if (email != null) {
            email = email.toLowerCase().trim();
        }
    }
}
```


**Serving more than resources**:- The @ResponseBody annotation is helpful in transforming a Java object returned from a controller to a resource representation to send to the client.A good REST API does more than transfer resources between the client and server. It also gives the client additional metadata to help the client understand the resource or know what has just taken place in the request.


`Communicating errors to the client`:-

```java
@RequestMapping(value="/{id}", method=RequestMethod.GET)
public @ResponseBody Spittle spittleById(@PathVariable long id) {
return spittleRepository.findOne(id);
}
```

That ID is passed in to the id parameter and used to look up a Spittle from the repository by calling findOne(). The Spittle returned from findOne() will be returned from the handler method, and message conversion will take care of producing a resource representation consumable by the client.If spittleById() returns null, the body of the response is empty. No useful data is returned to the client. Meanwhile, the default HTTP status code carried on the response is 200 (OK), which means everything is fine.
But everything is not fine. The client asks for a Spittle, but it gets nothing. It receives neither a Spittle nor any indication that anything is wrong.At the least, the status code shouldn’t be 200. It should be 404 (Not Found) to tell the client that what they asked for wasn’t found. And it would be nice if the response body carried an error message instead of being empty.
Spring offers a few options for dealing with such scenarios:
1. Status codes can be specified with the @ResponseStatus annotation.
2. Controller methods can return a ResponseEntity that carries more metadata concerning the response.
3. An exception handler can deal with the error cases, leaving the handler methods to focus on the happy path.

```java
public User getUserById(Integer userId) {
    return userRepository.findById(userId).orElseThrow(()-> new UsernotFoundException("User with ID " + userId + " NOT FOUND"));
}
```

```java
public class UsernotFoundException extends RuntimeException {

    public UsernotFoundException(String message) {
        super(message);
    }
}
```

`RESPONSEENTITY`:- As an alternative to @ResponseBody, controller methods can return a ResponseEntity.ResponseEntity is an object that carries metadata (such as headers and the status code) about a response in addition to the object to be converted to a resource representation.
ResponseEntity represents the whole HTTP response,status code,headers and body.
ResponseEntity is a generic type.Consequently,we can use any type as the response type.

```java
return new ResponseEntity<>("Custom header set",headers,HttpStatus.OK)
```

Furthermore,ResponseEntity provides two nested builder interfaces: HeadersBuilder and its subinterface, BodyBuilder.Therefore,we can access their capabilities through static methods of ResponseEntity.
The simplest case is a response with a body and HTTP 200 response code.

```java
return ResponseEntity.ok("Created user");
```

In addition,we can use the BodyBuilder status(HttpStatus status) and the BodyBuilder status(int status) methods to set any HTTP status.

```java
return ResponseEntity.status(HttpStatus.CREATED).body("User created");
```

We can also set custom headers:-

```java
return ResponseEntity.ok().header("Custom-Header","foo").body("User created");
```

Since BodyBuilder.body() returns a ResponseEntity instead of BodyBuilder, it should be last call.
NOTE: In HeaderBuilder we can't set any properties of the response body.

Because ResponseEntity allows you to specify the response’s status code, it seems like a good choice for communicating an HTTP 404 error when the Spittle can’t be found.


```java
@RequestMapping(value="/{id}", method=RequestMethod.GET)
public ResponseEntity<Spittle> spittleById(@PathVariable long id) {
    Spittle spittle = spittleRepository.findOne(id);
    HttpStatus status = spittle != null ? HttpStatus.OK : HttpStatus.NOT_FOUND;
    return new ResponseEntity<Spittle>(spittle, status);
}
```

A new ResponseEntity is created to carry the Spittle and the status code to the client.
In addition to carrying response headers, a status code, and a payload, ResponseEntity implies the semantics of @ResponseBody, so the payload will be rendered into the response body just as if the method were annotated with @ResponseBody. There’s no need to annotate the method with @ResponseBody if it returns ResponseEntity.

```java
@GetMapping("/{userId}")
public ResponseEntity<?> getUserById(@PathVariable Integer userId){
    try {
        return ResponseEntity.status(HttpStatus.OK).body(userService.getUserById(userId));
    } catch (UsernotFoundException e) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
    }
}
```

```bash
User with ID 103 NOT FOUND
```

Now the client is given a proper status code if the Spittle it asks for can’t be found. But the body of the response is still empty in that case. You’d like for the body to carry additional error information.Let’s try again. First, define an Error object to carry the error information:

```java
public class Error {
    private int code;
    private String message;

    public Error(int code, String message) {
        this.code = code;
        this.message = message;
    }
    public int getCode() {
        return code;
    }
    public String getMessage() {
        return message;
    }
}
```

```java
@RequestMapping(value="/{id}", method=RequestMethod.GET)
public ResponseEntity<?> spittleById(@PathVariable long id) {
    Spittle spittle = spittleRepository.findOne(id);
    if (spittle == null) {
        Error error = new Error(4, "Spittle [" + id + "] not found");
        return new ResponseEntity<Error>(error, HttpStatus.NOT_FOUND);
    }
    return new ResponseEntity<Spittle>(spittle, HttpStatus.OK);
}
```

Now this controller method should behave as you wish. If the Spittle is found, it’s returned, wrapped in a ResponseEntity with a status code of 200 (OK). On the other hand, if findOne() returns null, you construct an Error object and return it wrapped in a ResponseEntity with a status code of 404 (Not Found).

First, it’s a bit more involved than when we started. There’s a bit more logic involved, including a conditional statement. And the fact that the method returns ResponseEntity<?> feels wrong. The generic use of ResponseEntity leaves too much open for interpretation or mistake.Fortunately, you can fix this with an error handler.

```java
@GetMapping("/{userId}")
public ResponseEntity<User> getUserById(@PathVariable Integer userId) throws UsernotFoundException {
    return ResponseEntity.status(HttpStatus.OK).body(userService.getUserById(userId));
}
```

```bash
{
    "timestamp": "2025-12-05T20:14:25.078+00:00",
    "status": 500,
    "error": "Internal Server Error",
    "path": "/users/103"
}
```


`HANDLING ERRORS & EXCEPTIONS`:-

```java
@ExceptionHandler(SpittleNotFoundException.class)
public ResponseEntity<Error> spittleNotFound(SpittleNotFoundException e) {
    long spittleId = e.getSpittleId();
    Error error = new Error(4, "Spittle [" + spittleId + "] not found");
    return new ResponseEntity<Error>(error, HttpStatus.NOT_FOUND);
}
```

The @ExceptionHandler annotation can be applied to controller methods to handle specific exceptions. Here, it’s indicating that if a SpittleNotFoundException is thrown from any of the handler methods in the same controller, the spittleNotFound() method should be called to handle that exception.

```java
public class SpittleNotFoundException extends RuntimeException {
    private long spittleId;
    public SpittleNotFoundException(long spittleId) {
        this.spittleId = spittleId;
    }
    public long getSpittleId() {
        return spittleId;
    }
}
```

Now you can remove most of the error handling from the spittleById() method:

```java
@RequestMapping(value="/{id}", method=RequestMethod.GET)
public ResponseEntity<Spittle> spittleById(@PathVariable long id) {
    Spittle spittle = spittleRepository.findOne(id);
    if (spittle == null) { throw new SpittleNotFoundException(id); }
    return new ResponseEntity<Spittle>(spittle, HttpStatus.OK);
}
```

Knowing that the error handler method always returns an Error and always responds with an HTTP status code of 404 (Not Found), you can apply a similar cleanup process to spittleNotFound():

```java
@ExceptionHandler(SpittleNotFoundException.class)
@ResponseStatus(HttpStatus.NOT_FOUND)
public @ResponseBody Error spittleNotFound(SpittleNotFoundException e) {
    long spittleId = e.getSpittleId();
    return new Error(4, "Spittle [" + spittleId + "] not found");
}
```

@ResponseStatus - Marks method or exception class with HTTP status code and reason. It is possible to provide a custom reason message.


```java
@GetMapping("/{userId}")
public ResponseEntity<User> getUserById(@PathVariable Integer userId) throws UsernotFoundException {
    return ResponseEntity.status(HttpStatus.OK).body(userService.getUserById(userId));
}
```

```java
public class ErrorDTO {
    private String message;
    private HttpStatus status;
    private Integer code;
    private LocalDateTime timestamp;
    //NoArgsConstructor
    //AllArgsConstructor
    //setters and getters
}
```

@RestControllerAdvice - A convenience annotation that is itself annotated with @ControllerAdvice and @ResponseBody.

```java
@RestControllerAdvice
public class ExceptionController {

    @ExceptionHandler(UsernameNotFoundException.class)
    public ResponseEntity<ErrorDTO> handleUserNotFoundException(UsernotFoundException exception){
        ErrorDTO errorDTO = new ErrorDTO();
        errorDTO.setMessage(exception.getMessage());
        errorDTO.setCode(HttpStatus.NOT_FOUND.value());
        errorDTO.setStatus(HttpStatus.NOT_FOUND);
        errorDTO.setTimestamp(LocalDateTime.now());

        return ResponseEntity.status(errorDTO.getStatus()).body(errorDTO);
    }
}

```

```sh
{
    "message": "User with ID 103 NOT FOUND",
    "status": "NOT_FOUND",
    "code": 404,
    "timestamp": "2025-12-05T23:58:08.262514567"
}
```

```java
@Getter
@Setter
public class User{
    @JsonProperty("f-name")
    String firstName;
    String lastName;
    @JsonProperty("pass")
    String password;
}
```


**API Versioning**:- At the core of server-side handling is the ApiVersionStrategy, a key contract with knowledge of all application preferences for API versioning. It can resolve, parse, and validate request versions; it knows about the range of supported versions; and it can help to send deprecation hints in the response.

You configure it through the MVC config or the WebFlux config.

```java
@Configuration
public class WebConfiguration implements WebMvcConfigurer {

	@Override
	public void configureApiVersioning(ApiVersionConfigurer configurer) {
		configurer.useRequestHeader("API-Version");
	}
}
```

For Spring Boot applications, there are equivalent properties for the same. For example:

```java
spring.mvc.apiversion.use.header=API-Version
```

Once configured, this is then available to support API versioning in request handling.
For annotated controllers, you can use the new version attribute of the @RequestMapping annotation and its specialized forms such as @GetMapping:

```java
@RestController
public class AccountController {
	@GetMapping(path = "/account/{id}", version = "1.1") 
	public Account getAccount() {
	}
}
```

If the API version is in a request header, query param, or media type, there is nothing further to do in the mappings.
If the API version is in the path, it must be declared as a URI variable (with any name), for example, "/api/{version}". Typically, this is best configured externally as a common path prefix for all handlers through the Path Matching options, so that it does not need to be repeated in every mapping.
By default, the request version is parsed into a semantic version with major, minor, and patch values where minor and patch values are set to 0 if not present. This is important in order to be able to compare versions. The parser can be customized or replaced if you want to use a date or any other format.

```java
@GetMapping
@GetMapping("v2")

@GetMapping
@GetMapping(header="version-2")
```

-------------------



## WebSockets

The WebSocket protocol, RFC 6455, provides a standardized way to establish a full-duplex, two-way communication channel between client and server over a single TCP connection. It is a different TCP protocol from HTTP but is designed to work over HTTP, using ports 80 and 443 and allowing re-use of existing firewall rules.

`A WebSocket interaction` begins with an HTTP request that uses the HTTP Upgrade header to upgrade or, in this case, to switch to the WebSocket protocol. The following example shows such an interaction:

```h
GET /spring-websocket-portfolio/portfolio HTTP/1.1
Host: localhost:8080
Upgrade: websocket 
Connection: Upgrade 
Sec-WebSocket-Key: Uc9l9TMkWGbHFD2qnFHltg==
Sec-WebSocket-Protocol: v10.stomp, v11.stomp
Sec-WebSocket-Version: 13
Origin: http://localhost:8080
```

Instead of the usual 200 status code, a server with WebSocket support returns output similar to the following:

```r
HTTP/1.1 101 Switching Protocols 
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: 1qVdfYHU9hPOl4JYYNXF623Gzn0=
Sec-WebSocket-Protocol: v10.stomp
```

`After a successful handshake`, the TCP socket underlying the HTTP upgrade request remains open for both the client and the server to continue to send and receive messages.

Note that, if a WebSocket server is running behind a web server (e.g. nginx), you likely need to configure it to pass WebSocket upgrade requests on to the WebSocket server. Likewise, if the application runs in a cloud environment, check the instructions of the cloud provider related to WebSocket support.

HTTP Versus WebSocket

Even though WebSocket is designed to be HTTP-compatible and starts with an HTTP request, it is important to understand that the two protocols lead to very different architectures and application programming models.

In HTTP and REST, an application is modeled as many URLs. To interact with the application, clients access those URLs, request-response style. Servers route requests to the appropriate handler based on the HTTP URL, method, and headers.

By contrast, in WebSockets, there is usually only one URL for the initial connect. Subsequently, all application messages flow on that same TCP connection. This points to an entirely different asynchro nous, event-driven, messaging architecture.

WebSocket is also a low-level transport protocol, which, unlike HTTP, does not prescribe any semantics to the content of messages. That means that there is no way to route or process a message unless the client and the server agree on message semantics.

WebSocket clients and servers can negotiate the use of a higher-level, messaging protocol (for example, STOMP), through the Sec-WebSocket-Protocol header on the HTTP handshake request. In the absence of that, they need to come up with their own conventions.

When to Use WebSockets

WebSockets can make a web page be dynamic and interactive. However, in many cases, a combination of AJAX and HTTP streaming or long polling can provide a simple and effective solution.

For example, news, mail, and social feeds need to update dynamically, but it may be perfectly okay to do so every few minutes. Collaboration, games, and financial apps, on the other hand, need to be much closer to real-time.

Latency alone is not a deciding factor. If the volume of messages is relatively low (for example, monitoring network failures) HTTP streaming or polling can provide an effective solution. It is the combination of low latency, high frequency, and high volume that make the best case for the use of WebSocket.

Keep in mind also that over the Internet, restrictive proxies that are outside of your control may preclude WebSocket interactions, either because they are not configured to pass on the Upgrade header or because they close long-lived connections that appear idle. This means that the use of WebSocket for internal applications within the firewall is a more straightforward decision than it is for public facing applications.

WebSocket API

The Spring Framework provides a WebSocket API that you can use to write client- and server-side applications that handle WebSocket messages.

`WebSocketHandler` - Creating a WebSocket server is as simple as implementing WebSocketHandler or, more likely, extending either TextWebSocketHandler or BinaryWebSocketHandler. The following example uses TextWebSocketHandler:

```java
public class MyHandler extends TextWebSocketHandler {
 @Override
 public void handleTextMessage(WebSocketSession session, TextMessage message) {
  // ...
 }

}

```

There is dedicated WebSocket Java configuration and XML namespace support for mapping the preceding WebSocket handler to a specific URL, as the following example shows:

```java
@Configuration
@EnableWebSocket
public class WebSocketConfig implements WebSocketConfigurer {

 @Override
 public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
  registry.addHandler(myHandler(), "/myHandler");
 }

 @Bean
 public WebSocketHandler myHandler() {
  return new MyHandler();
 }

}
```

The following example shows the XML configuration equivalent of the preceding example:

```xml
<beans xmlns="http://www.springframework.org/schema/beans"
 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
 xmlns:websocket="http://www.springframework.org/schema/websocket"
 xsi:schemaLocation="
  http://www.springframework.org/schema/beans
  https://www.springframework.org/schema/beans/spring-beans.xsd
  http://www.springframework.org/schema/websocket
  https://www.springframework.org/schema/websocket/spring-websocket.xsd">

 <websocket:handlers>
  <websocket:mapping path="/myHandler" handler="myHandler"/>
 </websocket:handlers>

 <bean id="myHandler" class="org.springframework.samples.MyHandler"/>

</beans>
```

The preceding example is for use in Spring MVC applications and should be included in the configuration of a DispatcherServlet. However, Spring’s WebSocket support does not depend on Spring MVC. It is relatively simple to integrate a WebSocketHandler into other HTTP-serving environments with the help of WebSocketHttpRequestHandler.

When using the WebSocketHandler API directly vs indirectly, e.g. through the STOMP messaging, the application must synchronize the sending of messages since the underlying standard WebSocket session (JSR-356) does not allow concurrent sending. One option is to wrap the WebSocketSession with ConcurrentWebSocketSessionDecorator.

WebSocket Handshake

See equivalent in the Reactive stack

The easiest way to customize the initial HTTP WebSocket handshake request is through a HandshakeInterceptor, which exposes methods for “before” and “after” the handshake. You can use such an interceptor to preclude the handshake or to make any attributes available to the WebSocketSession. The following example uses a built-in interceptor to pass HTTP session attributes to the WebSocket session:

```java
@Configuration
@EnableWebSocket
public class WebSocketConfig implements WebSocketConfigurer {

 @Override
 public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
  registry.addHandler(new MyHandler(), "/myHandler")
   .addInterceptors(new HttpSessionHandshakeInterceptor());
 }

}
```

The following example shows the XML configuration equivalent of the preceding example:

```xml
<beans xmlns="http://www.springframework.org/schema/beans"
 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
 xmlns:websocket="http://www.springframework.org/schema/websocket"
 xsi:schemaLocation="
  http://www.springframework.org/schema/beans
  https://www.springframework.org/schema/beans/spring-beans.xsd
  http://www.springframework.org/schema/websocket
  https://www.springframework.org/schema/websocket/spring-websocket.xsd">

 <websocket:handlers>
  <websocket:mapping path="/myHandler" handler="myHandler"/>
  <websocket:handshake-interceptors>
   <bean class="org.springframework.web.socket.server.support.HttpSessionHandshakeInterceptor"/>
  </websocket:handshake-interceptors>
 </websocket:handlers>

 <bean id="myHandler" class="org.springframework.samples.MyHandler"/>

</beans>
```

STOMP

The WebSocket protocol defines two types of messages (text and binary), but their content is undefined. The protocol defines a mechanism for client and server to negotiate a sub-protocol (that is, a higher-level messaging protocol) to use on top of WebSocket to define what kind of messages each can send, what the format is, the content of each message, and so on. The use of a sub-protocol is optional but, either way, the client and the server need to agree on some protocol that defines message content.

STOMP (Simple Text Oriented Messaging Protocol) was originally created for scripting languages (such as Ruby, Python, and Perl) to connect to enterprise message brokers. It is designed to address a minimal subset of commonly used messaging patterns. STOMP can be used over any reliable two-way streaming network protocol, such as TCP and WebSocket. Although STOMP is a text-oriented protocol, message payloads can be either text or binary.

STOMP is a frame-based protocol whose frames are modeled on HTTP. The following listing shows the structure of a STOMP frame:

COMMAND
header1:value1
header2:value2

Body^@

Clients can use the SEND or SUBSCRIBE commands to send or subscribe for messages, along with a destination header that describes what the message is about and who should receive it. This enables a simple publish-subscribe mechanism that you can use to send messages through the broker to other connected clients or to send messages to the server to request that some work be performed.

When you use Spring’s STOMP support, the Spring WebSocket application acts as the STOMP broker to clients. Messages are routed to @Controller message-handling methods or to a simple in-memory broker that keeps track of subscriptions and broadcasts messages to subscribed users. You can also configure Spring to work with a dedicated STOMP broker (such as RabbitMQ, ActiveMQ, and others) for the actual broadcasting of messages. In that case, Spring maintains TCP connections to the broker, relays messages to it, and passes messages from it down to connected WebSocket clients. Thus, Spring web applications can rely on unified HTTP-based security, common validation, and a familiar programming model for message handling.

The following example shows a client subscribing to receive stock quotes, which the server may emit periodically (for example, via a scheduled task that sends messages through a SimpMessagingTemplate to the broker):

SUBSCRIBE
id:sub-1
destination:/topic/price.stock.*

^@

The following example shows a client that sends a trade request, which the server can handle through an @MessageMapping method:

SEND
destination:/queue/trade
content-type:application/json
content-length:44

{"action":"BUY","ticker":"MMM","shares",44}^@

After the execution, the server can broadcast a trade confirmation message and details down to the client.

The meaning of a destination is intentionally left opaque in the STOMP spec. It can be any string, and it is entirely up to STOMP servers to define the semantics and the syntax of the destinations that they support. It is very common, however, for destinations to be path-like strings where /topic/.. implies publish-subscribe (one-to-many) and /queue/ implies point-to-point (one-to-one) message exchanges.

STOMP servers can use the MESSAGE command to broadcast messages to all subscribers. The following example shows a server sending a stock quote to a subscribed client:

MESSAGE
message-id:nxahklf6-1
subscription:sub-1
destination:/topic/price.stock.MMM

{"ticker":"MMM","price":129.45}^@

A server cannot send unsolicited messages. All messages from a server must be in response to a specific client subscription, and the subscription header of the server message must match the id header of the client subscription.

The preceding overview is intended to provide the most basic understanding of the STOMP protocol. We recommended reviewing the protocol specification in full.

Benefits

Using STOMP as a sub-protocol lets the Spring Framework and Spring Security provide a richer programming model versus using raw WebSockets. The same point can be made about HTTP versus raw TCP and how it lets Spring MVC and other web frameworks provide rich functionality. The following is a list of benefits:

    No need to invent a custom messaging protocol and message format.

    STOMP clients, including a Java client in the Spring Framework, are available.

    You can (optionally) use message brokers (such as RabbitMQ, ActiveMQ, and others) to manage subscriptions and broadcast messages.

    Application logic can be organized in any number of @Controller instances and messages can be routed to them based on the STOMP destination header versus handling raw WebSocket messages with a single WebSocketHandler for a given connection.

    You can use Spring Security to secure messages based on STOMP destinations and message types.

Annotations

1. @EnableWebSocketMessageBroker - This annotation enables WebSocket message handling, backed by a message broker.Typically placed on a configuration class.

```java
@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {
    // Configuration methods
}
```

2. @MessageMapping - Maps a WebSocket message to a specific method in a controller. Similar to @RequestMapping for HTTP requests.Used On methods within a controller class that handles incoming messages.

```java
@MessageMapping("/send")
@SendTo("/topic/messages")
public String sendMessage(String message) {
    return message;
}
```

3. @SendTo - Specifies the destination to which the return value from a @MessageMapping method should be sent. This is where the response will be broadcasted.Used in conjunction with @MessageMapping.

```java
    @SendTo("/topic/messages")
    public String sendMessage(String message) {
        return message;
    }
```

4. @SubscribeMapping - Used to handle subscription requests from clients. It allows you to process logic when a client subscribes to a particular destination.On methods within a controller that handle subscription messages.

```java
    @SubscribeMapping("/user/queue/reply")
    public String handleSubscription() {
        return "Welcome!";
    }
```

5. @MessageExceptionHandler

    Usage: Handles exceptions that occur during message handling. You can define a method that will respond to specific exceptions.

    Where to Use: On methods within a controller to catch and handle exceptions.

```java
    @MessageExceptionHandler
    public String handleException(Throwable exception) {
        return "Error: " + exception.getMessage();
    }
```

6. @SendToUser - Used to send a message back to a specific user. This is typically used in conjunction with user sessions.Used Within a message-handling method.

```java
@MessageMapping("/private")
@SendToUser("/queue/reply")
public String sendPrivateMessage(String message) {
    return message;
}
```

**WebSocketMessageBrokerConfigurer**

WebSocketMessageBrokerConfigurer is an interface provided by Spring that allows you to configure WebSocket messaging. By implementing this interface, you can customize various aspects of the WebSocket message broker, including the message broker configuration, endpoint registration, and STOMP protocol settings

Here are the main methods you typically override when implementing WebSocketMessageBrokerConfigurer:

1. configureMessageBroker(MessageBrokerRegistry config) -Configures the message broker used for routing messages. You can specify options such as enabling a simple in-memory broker, setting prefixes for destinations, and enabling a full-featured message broker like RabbitMQ.

```java
    @Override
    public void configureMessageBroker(MessageBrokerRegistry config) {
        config.enableSimpleBroker("/topic", "/queue"); // Configure simple broker
        config.setApplicationDestinationPrefixes("/app"); // Prefix for client messages
    }
```

2. registerStompEndpoints(StompEndpointRegistry registry)

    PurpRegisters STOMP endpoints that clients can connect to. You can also configure SockJS fallback options here.
    Example:

```java

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint("/ws").setAllowedOrigins("*").withSockJS(); // Endpoint with SockJS fallback
    }
```

3. configureClientInboundChannel(ChannelRegistration registration)

    Purpose: Customize the inbound channel for messages sent by clients. You can add interceptors here to handle or modify messages.
    Example:

```java
@Override
    public void configureClientInboundChannel(ChannelRegistration registration) {
        registration.interceptors(new MyChannelInterceptor()); // Custom interceptor
    }
```

4. configureClientOutboundChannel(ChannelRegistration registration)

    Purpose: Customize the outbound channel for messages sent to clients. Similar to the inbound channel configuration.
    Example:

```java

@Override
public void configureClientOutboundChannel(ChannelRegistration registration) {
    registration.interceptors(new MyOutboundChannelInterceptor()); // Custom interceptor
}
```

----------------