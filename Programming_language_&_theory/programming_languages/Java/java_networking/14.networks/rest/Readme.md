# RESTful WebServices

## Distributed Technologies

An object in one JVM trying to access with another object in another JVM is called **Java Distribute Technologies**.

OBJ 1(JVM3)---------(N/W)-----------------------------> OBJ 2(JVM2)
|
|--------------------(N/W)--------> OBJ3(JVM1)

Ther are many Java Distributed Tech:

1. EJB
2. RMI
3. Socket Programming
4. Corba

- The drawback for using RMI and EJB is that it only supports JVM(Java) and is limited to only Java programming language.

Java Distributed Technologies--------->java clients only can access
.NET Distributed Technologies--------->.net clients only can access

> To overcome the limitation, WEBSERVICES was introduced.

        |------Java request object-------xml----------xml-----------java object request---------|

consumer provider
|------Java response object------xml-----------xml---------java object response---------|

1. For every request--consumer end req object is converted to xml,provider end converts from xml to Java object
2. For every response--consumer end response object is converted to xml,consumer end converts from xml to Java object

## Web service in Java

- REST API(JAXRS and Spring REST)
- SOAP (Simple Object Access Protocol)(JAXWS)
- JAXB - converts object to xml and xml to objects.
- JACKSON- converts object to json and json to objects.

## JSR 311: JAX-RS: The JavaTM API for RESTful Web Services

This JSR will develop an API for providing support for RESTful(Representational State Transfer) Web Services in the Java Platform.

1. Services
2. API's
3. Endpoint url
4. Service userguides

JAX-RS is a specification (which basically tells what to implement/follow) and Jersey is an implementation (which means how those specifications should be implemented).We can have multiple implementations for a Specification. We have libs for JAX-RS because we can use JAX-RS API's in your code so that in future if you change your implementation (in this case Jersey to something else) you code will still work fine.

JAXRS implementations include:

1. Jersey (shipped with GlassFish and Payara)
2. Apache axis2
3. Apache cxf(shipped with TomEE and WebSphere)
4. RESTeasy(shipped with JBoss EAP and WildFly)

### JAX-RS Annotations

1. @Path-It identifies the URI path. It can be specified on class or method.
2. @GET,@PUT,@DELETE,@POST,@HEAD-specifies method responds to GET,PUT,DELETE,POST,HEAD request.
3. @Produces-defines media type for the response such as XML, PLAIN, JSON etc. It defines the media type that the methods of a resource class or MessageBodyWriter can produce.
4. @PathParam-Used to read value from URI path.
5. @Singleton
6. @CookieParam-represents the parameter of the cookie.
7. @BeanParam
8. @FormParam-represents the parameter of the form.
9. @QueryParam-represents the parameter of the query string of an URL.
10. @Headerparam
11. @matrixParam
12. @Consumes-used to specify the MIME media types of representations a resource can consume that were sent by the client.

```java
@Path("/greetings")
public class JaxRsController {

    @GET
    @Path("/{name}")
    @Produces(MediaType.TEXT_PLAIN)
    public Response greeting(@PathParam("name") String name) {

        String greeting = "Hello " + name;
        return Response.ok(greeting).build();
    }
}
```

Deployment descriptor config

```xml
<web-app>
//jaxrs implementation vendor e.g jersey
//servlet configs

<url-mapping>/order</url-mapping>
</web-app>
```

- Plain Java Rest(JAXRS) is no longer used.Spring Rest is commonly used instead.

## Importance of HTTP in REST

Used to transfer data from client to server.Its stateless protocol.
HTTP Request
Client--<------------------------>---Server
HTTP Response

1. HTTP Request Format- Has 3 parts(Request Line,Headers,Body).Request Line includes mathod name and URI.Header include metadata of the request i.e client,user-agent.Body is optional ie Its not in GET methods,required in POST.
2. HTTP Response- Has (Status Line,headers,Body).Status code shows request status.Metadata of response i.e content-length,content-type.Body is mandatory.

example:

GET | /orders | user-agent="mozilla" | No body
POST | /orders/123 | user-agent="mozilla" | `<order><orderid>1234</orderid><name>Mobile</name></order>`

200 | OK | content-length |`<orderresp><status>Delivered</status></orderrep>`

Reading from HTTP Request - Request Line {Methods(GET for @GET,.etc.) and URI(Extract info from uri @PathParam,@QueryParam,etc)},Headers includes(@HeaderParam-can read only one header at a time,@Context HttpHeaders header-Can read one or more header),Body(Content Handler-Reading from body i.e Predefined- Java.io.File,byte[],jaxb classes,jackson classes.Custom-MessageBodyReader,MessageBodyReader)

HTTP Response- Status Line{Status code-1XX and Message OK},Headers,Body(Content Handler-Custom-MessageBodyReader and MessageBodyWriter.Predefined-jaxb classes,jackson classes,String,java.io.OutputStream).To get only Response body use JAXB or Jackson classes,to get full response use javax.ws.rs.core.Response.Classes

- Use Cases:

1. ONLY GET Services-Reading data from URI using @QueryParam,@PathParam.
2. GET service and Headers-Use @XXXParams and @HeaderParams
3. POST Service-Reading data from body using predefined content handlers or custom handlers
4. POST Service and Headers-Use content handlers and @HeaderParams or @Context HttpHeaders headers

In GET,data is in URI while in POST data is in the body.

## Steps to develop REST api at Provider endPoint

1. Create maven web project
2. add jaxrs vendor dependency in pom.xml
3. Write resources that rep @Path annotation
4. Write subresources rep @Path,@Get,@Produce annotation
5. Write business logic in sub resources
6. Write web.xml-configure servlet
