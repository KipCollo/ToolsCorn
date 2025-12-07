# JSP

JSPs are Web pages coded with an extended HTML that makes it possible to embed Java code in a Web page. JSPs can call custom Java classes, called taglibs, using HTML-like tags.
JavaServer Pages (JSPs) are a Sun Microsystems specification for combining Java with HTML to provide dynamic content for Web pages. When you create dynamic content, JSPs are more convenient to write than HTTP servlets because they allow you to embed Java code directly into your HTML pages, in contrast with HTTP servlets, in which you embed HTML inside Java code.

JavaServer Pages are built on top of servlets.
When a JSP is first requested,the JSp engine translates it into a servlet and compiles it.Then,the servlet is run by servlet engine.For subsequent requests,the JSP engine runs the servlet that corresponds to the JSP.

The WebLogic appc compiler weblogic.appc generates JSPs and validates descriptors. You can also precompile JSPs into the WEB-INF/classes/ directory or as a JAR file under WEB-INF/lib/ and package the servlet class in the Web archive to avoid compiling in the server. Servlets and JSPs may require additional helper classes to be deployed with the Web application.

Because JSP is part of the J2EE standard, you can deploy JSPs on a variety of platforms,including WebLogic Server. In addition, third-party vendors and application developers can provide JavaBean components and define custom JSP tags that can be referenced from a JSP page to provide dynamic content.

JSPs enable you to separate the dynamic content of a Web page from its presentation. It caters to two different types of developers: HTML developers, who are responsible for the graphical design of the page, and Java developers, who handle the development of software to create the dynamic content
JSP code runs on web server in JSP servlet engines.JSP servlet engine dynamically generates HTML and sends HTML output to client's browser.

JSP Tags includes:-

1. Scriplet
2. JSP Expression
3. Comment
4. Declaration
5. Directive


When you code a JSP,you can use the methods of the request object in your scriplet or expressions.Since you don't have to explicitly create this object when you code JSPs,this object is sometimes referred to as `imlicit request object`.

## JSP Tags

`Scriplet`:- Used to code one or more Java statements that end with senmicolon.
To code a scriptlet that contains one or more Java statements, you use the <% and %> tags.Once the scriplet is executed,the values for parameters are available as variables to the rest of the page.
To get the values of the parameters that are passed to the JSP, you can use the getParameter method of implicit request object named request.

```jsp
<%
string firstName= request.getParameter("firstName");
string firstName= request.getParameter("lastName");
%>

<%!
int age = 0;
%>
```

`JSP Expressions`: To code an expression that can be converted to a string, you use the <%= and %> tags.If an expression evaluates to a primitive type like an int value or a double value,the JSP will automatically convert the primitive type to a string that represents the value.
If the expression evaluates to an object,the JSP will call the object's toString method to get a string that represents the object.As a result,if you code an expression that evaluates to an object, you  need to make sure that the object has a toString method that returns a String that represents the value.Otherwise,the object will use the toString method of the Object class,which includes the class name and hash code for the object.

```jsp
<td><%=firstName%></td>
<td><%=lastName%></td>
```

NOTE:- When coding a scriplet or an expression,you can use any of the methods of the implicit request object.

`Comments`:- Tells JSP Engine to ignore code.When you code JSP comments,they are not compiled or executed.When you code HTML comments,they are compiled and executed but browser won't display them.When you code Java comments within sciplets,they are not compiled or executed.

```jsp
<!--HTML Comment -->
<%-- <p>jsp comments <%=new Date()%> </p>--%>
<% // User user = new User()%>
```

`JSP Declarations`:- Used to declare instance variables and methods.When a JSP is requested for the first time,one instance of the JSP is created and loaded into memory,and a thread is started that executes Java code in the JSP.For each subsequent request request for JSP,another thread is started that access the one instance of the JSP.When you code variables in scriplets,they are known as local variables, and each thread gets its own copy of each local variable.However,you can also declare instance variables that can be shared between all of threads that are accessing a JSP.To do that,you use JSP declarations.

```jsp
<%! int globalCount = 0; %>
```

`JSP Directive`:- Used to import classes in a JSP.To code a page directive for importing classes,you code the starting tag and the word page followed by the Import attribute.Within the quotation marks after the equals sign for this attribute,you code the names of the Java classes that you want to import.

```jsp
<%@ page import="java.util.Date"%>
```

If you want to include the same block of code in several JSPs, you can store the code in a separate file.Then,you can include the code in that file in a JSP.Files like this are often referred to as *includes*.

```jsp
<%@ include file="/icludes/header.html"%>
--
<%@ include file="/icludes/footer.html"%>
```

```jsp
<jsp:include page="/includes/header.html"/>
```

To include a file at compile-time,you use the include directive.To do that, you code a JSP directive tag.
To include a file at runtime,you use the include action.To do that,you code the jsp:include tag.Within this tag,you set the page attribute to relative path of the include file.
When you include a file at compile-time,the code within the file becomes part of generated servlet.The advantage of this approach is that it allows the servlet engine to return a response to the browser more quickly.However,if you make change to the included file,the change might not be displayed until JSP is modified and recompiled.

If you are certain that the include files won't change often,you use the include directive.If yu want to display information that may change regularly,and you need to guarantee that these cahnges be displayed immediately,you should use include action.

## JSP Tags for JavaBeans

Standard JSP tags for working with JavaBean class reduces amount of Java code in your JSPs.
The standard JSP tags for working with JavaBeans are an older technology that was widely used before JSP 2.0 specification.

All of the JSP tags for working with JavaBeans use XML syntax.

`useBean` tag: It is used to access a bean and if necessary,create a bean from the JavaBean class.After the bean has been created,the `getProperty ` tags display the values of the properties that have been set in the bean.

```jsp
<jsp:useBean id="beanName" class="package.Class" scope="scopeValue"/>
```

The id attribute specifies the name that's used to access the bean,the class attribute specifies the package and class of the bean,and the scope attribute specifies the scope of the bean.
When you code the scope attribute,you can soecify one of four values: page,request,session and application.
The value of the scope attribute specifies the object that stores the bean and that determines how long the bean will be available to the rest of the appliaction.If you don't specify the scope attribute,the scope will be set to "page" by default,which means that bean will only be available to current JSP.

If a bean that matches the attributes specified in useBean tag exists,this tag creates a reference to that object.Otherwise,the useBean tag creates a new Object by calling zero-argument constructor of specified class.

`getProperty & setProperty`:- Once you code a useBean tag to access or create a bean,you can use the getProperty tag to get the values stored in the bean,and you can use the setProperty tag to set the values stored in the bean.
To get the value of a property that's stored in a bean,you code a getProperty tag.The name attribute specifies the name of the bean,so it should match the id attribute of useBean tag.

```jsp
<jsp:getProperty name="beanName" property="propertyName"/>
<jsp:setProperty name="beanName" property="propertyName" value="value"/>
```

To code special characters within an attribute,you can use escape sequences.However, if you enclose an attribute in double quotes,you don't need to use escape sequences for single quotes.Conversely,if you enclose an attribute in single quotes,you don't need to use the escape sequence for double quotes.

## Configuring Java Server Pages (JSPs)

In order to deploy Java Server Pages (JSP) files, you must place them in the root (or in a subdirectory below the root) of a Web application. You define JSP configuration parameters in subelements of the jsp-descriptor element in the WebLogic-specific deployment descriptor, weblogic.xml. These parameters define the following functionality:

1. Options for the JSP compiler
2. Debugging
3. How often WebLogic Server checks for updated JSPs that need to be recompiled
4. Character encoding


## JSP Expression Language(EL)

Expression Language(EL) was inroduced with JSP 2.0 to reduce the amount of scripting in your applications.
The JSP Expression Language(EL) provides a compact syntax that lets you get data from JavaBeans,maps,arrays and lists that have been stored as attributes of a web application.

`Advantages`:-
1. EL makes it easy to access nested properties.
2. EL lets you access collections such as arrays,maps,lists.
3. EL handles null values better than JSP tags.
4. EL provides functionality that isn't available from standard JSP tags e.g lets you work with HTTP headers,cookies and context initialization parameters.Also lets you perform calculations and comparisons.

```java
User user = new User(firstName,lastName,email);
session.setAttribute("user",user);
```

Standard JSP tags used to access a User object named user stored in session:-

```jsp
<jsp:useBean id="user" scope="session" class="business.User"/>
<table cellspacing="5" cellpadding="5" border="1">
    <tr>
       <td align="right">First name:</td>
       <td><jsp:getProperty name="user" proprty="firstName"/></td>
    </tr>
    <tr>
       <td align="right">Last name:</td>
       <td><jsp:getProperty name="user" proprty="lastName"/></td>
    </tr>
    <tr>
       <td align="right">Email:</td>
       <td><jsp:getProperty name="user" proprty="email"/></td>
    </tr>
</table>
```

JSP that uses EL to access a User object named user stored in session:-

```jsp
<table cellspacing="5" cellpadding="5" border="1">
    <tr>
       <td align="right">First name:</td>
       <td>{user.firstName}</td>
    </tr>
    <tr>
       <td align="right">Last name:</td>
       <td>{user.lastName}</td>
    </tr>
    <tr>
       <td align="right">Email:</td>
       <td>{user.email}</td>
    </tr>
</table>
```

Whenever you use EL,you begin by coding a dollar sign($) followed by an opening brackets({) and a closing bracket(}).Then you code the expression within the braces.

```jsp
${attribute}
```

NB:- You don't have to specify the scope when you use EL.Instead,EL automatically searches through all scopes starting with smallets scope(page scope) and moving towards largest scope(application scope).
The sequence of scpes that Java searches to find the attribute:-
1. page - The bean is stored in the implicit PageContext object.
2. request - The bean is stored in the HttpServletRequest object.
3. session - The bean is stored in the HttpSession object.
4. application - The bean is stored in the ServletContext object.

EL use the dot operator to specify the property of a JavaBean going to be displayed.The code on the left operator must specify a JavaBean or a map, and the code to the right of the operator must specify a JavaBean property or a map key.

```jsp
${attribute.property}
```

`Scope`:- Since Java automaatically searches through the scope objects when you use EL,you typically don't need to use the implicit EL objects for specifying scope.However,if you have a naming conflict,you may need to use them.
When you work with these objects,you should be aware that they are all maps.As a result,you can use the dot operator to specify a key when you want to return the object for that key.
The implicit EL objects for specifying scope incldes:-
1. page - pageScope
2. request - requestScope
3. sessioon - sessionScope
4. application - applicationScope

```jsp
${scope.attribute.property}
```

```jsp
<p>Hello ${scope.sessionScope.firstName}</p>
```

`[] operator`:- Although this operator can be used to work with JavaBeans and maps, it is commonly used to work with arrays and lists.

```jsp
${attribute["propertyKeyOrIndex"]}
```

## JSP Standard Tag Library

The JSP Standard Tag Library(JSTL) provides tags for common tasks that need to be performed in JSPs.
Before you can use JSTL tags within JSP,you must code a taglib directive to specify the URI and prefix for the JSTL library.

```jsp
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
```
