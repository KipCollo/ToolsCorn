# Monolithic

In software architecture, monolithic architecture is a design approach in which a software system is built as a single, integrated, and self-contained unit. In a monolithic architecture, all the components of the system are tightly coupled and depend on each other. This means that changes in one part of the system may affect other parts of the system.

A monolithic architecture is often used for small to medium-sized systems, where the complexity of the system is manageable and the need for scalability and flexibility is not as high. In a monolithic architecture, the entire system is typically built, deployed, and executed as a single unit, which can make it easier to understand and manage the system.

The benefits of the monolithic architecture:-

1. `Simple to develop`—IDEs and other developer tools are focused on building a single application.
2. `Easy to make radical changes to the application`—You can change the code and the database schema, build, and deploy.
3. `Straightforward to test`—The developers wrote end-to-end tests that launched the application, invoked the REST API, and tested the UI with Selenium.
4. `Straightforward to deploy`—All a developer had to do was copy the WAR file to a server that had Tomcat installed.
5. `Easy to scale` —FTGO ran multiple instances of the application behind a load balancer.

Demerits of monolithics includes:-

1. COMPLEXITY INTIMIDATES DEVELOPERS - Monolithic applications becomes too complex.It’s too large for any developer to fully understand. As a result, fixing bugs and correctly implementing new features have become difficult and time consuming. Deadlines are missed.To make matters worse, this overwhelming complexity tends to be a downward spiral. If the code base is difficult to understand, a developer won’t make changes correctly.
2. DEVELOPMENT IS SLOW - The large application overloads and slows down a developer’s IDE.Moreover, because it’s so large, the application takes a long time to start up. As a result, the edit-build-run-test loop takes a long time, which badly impacts productivity.
3. PATH FROM COMMIT TO DEPLOYMENT IS LONG AND ARDUOUS
4. SCALING IS DIFFICULT - Different application modules have conflicting resource requirements.