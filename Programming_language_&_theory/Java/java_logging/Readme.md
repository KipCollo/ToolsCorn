# Logging

`Logging` is the process of keeping track of application's flow execution.Using logging,in the generated log messages we can find the state of the application execution on any given date and time.
Logging keeps track of components(reusable classes) and code involved in Application's execution.

`Auditing` keeps track of various activities done by end-user while operating the application.
Auditing is usecase of Logging.
The special log messages of logging that keeps track of user activities in application's execution is called Auditing.

Use cases of logging:-

1. Useful when performing unit testing - If test results become negative,we need to debug the code to know the reason.In that case,log messages are useful for developers.
2. 


We can do logging in any Java application by using the following- System.out.println() and System.out.err() method,but the following limitations are there:-
1. Log messages on console monitor will be lost after a certain amount of time.
2. We cannot categorize log messages.
3. We cannot format log messages.
4. We cannot log message to different destinations like files,Database,Mail server.
5. We cannot filter log messages when retrieving it.
6. Writing message to console is a single threaded process,so if multiple log messages at a time from app will render the app to have a delay.

To overcome these problems,we have multiple alternatives for logging activities:-

1. Java assetions - From JDK(Sun MicroSystsems)
2. Java logging Api(java.util)
3. Commons logging(Apache)
4. Jboss logging(RedHat)
5. log4j(Apache)
6. logback(Adobe)


**SLF4J**:- SLF4J is Simple Logging Façade for Java which is a framework or abstraction for logging that allows the user to plug-in the logging framework dynamically at deployment time. It provides a layer (SLF4J layer) of abstraction between the application and the underlying logging framework used (SLF4J manual, 2017).

`SLF4J`(Simple Logging Facade for Java):- It is not a basic logging api but it provides abstraction on multiple logging api/frameworks/tools and provides unified api for logging by internally using choice logging API.

This framework was created by Ceki Gulcu in 2004. The latest stable release is version 1.7.25 (SLF4J News, 2017).SLF4J acts as a channel between the application and the underlying base logging framework of the application.
To use slf4j in your project, we need to add the slf4j-api.jar in the classpath of the project. In addition to this, the jars of the underlying framework must be provided as well.


## Java Logging

A Java logging framework is a computer data logging package for the Java platform (Java Logging Framework, 2016).
A logging framework is typically made up of the following components:

- `Logger`:- This is the object which performs the logging operation in applications and is typically just called ‘Logger’ (Lars Vogel, 2016). A log entry can have different levels of criticality based on the nature of the application. Typically, a log message can be of type DEBUG, INFO, ERROR, WARNING etc.This is called as a logging level. The logging levels vary based on the logging framework.
The logger provides the ability to define different levels of importance of the logged messages and the ability to use different destinations for the output such as the console, a file, etc. Additionally, a logger is configurable and hence we have the choice of disabling certain types of log messages from the log output.

- `Appender`:- Once the log messages have been captured by the logger, this logging information needs to be sent to an appropriate destination. This destination is the appender, which writes the log messages to the specified destination.
The appender is attached to the logger and it listens for messages of particular logging levels (Error, debug, etc). Its main goal is to take the logging information and post it to the correct destination such as a console or file.
The appender is capable of writing messages to the following destinations:- File,Console,Send via Email,Append/add to a table in database,Network Socket,Distribute via JMS.

- `Formatter`:- A formatter is the component that is used to configure the format of the log messages. A formatter usually displays the log in a string format. It is used as a means to enhance the quality of the log and provide additional information about the logs such as time zones in addition to the log level,date and time and log message. Formatters help represent the data in a better way that is suited to needs of the application.

There are several logging frameworks that have been developed over the past few years for the Java language. Some of the commonly used Java logging frameworks are as follows:
1. Java logging;
2. Log4j;
3. SL4J;
4. Logback;
5. TinyLog.

## Java Logging Framework

This is the default logging framework provided as part of the Java Language Packages. The Java API provides a sub-package in the java.util package called the logging that consists of the logging API. The java.util.logging package was introduced in the Java SE 4 (1.4) release in 2001.
This package provides several classes and interfaces that support and implement the core logging functionalities. This package was introduced in order to provide a means to maintain, troubleshoot and repair the software at the client side in a simple way.

------

## Log4j

Log4j is another logging framework based on the Java language owned and released by Apache. It was written by Ceki Gülcü. It is a part of the logging services project of the entity Apache Software Foundation. It was first released in 1996.
Then, after several enhancements and evolutions, this API gradually became log4j which is now an extremely popular logging framework for Java. The package for this framework is now distributed under the Apache Software License which is an open source certified license.

Log4j is a flexible framework that is written completely in Java but can also be used in other languages such as C++, C#, Perl, Python, Ruby, etc. An excellent feature of log4j is its ability of dynamic configuration via external files at runtime.Additionally, it provides good methods of remote logging. Using this framework, logs can easily be written to various targets such as Databases, Remote files, Syslog and so on.


`Level`:- In log4j several different values for the Log Level can be set. These levels are provided by the org.apache.log4j.Level class. The available options have been described below.
1. TRACE - 
2. DEBUG
3. INFO
4. WARN
5. ERROR
6. FATAL
7. ALL
8. OFF


------


**Logback**:- Log back is logging framework that was released in 2006. Designed by Ceki Gülcü, the creator of log4j, this framework was preconceived as a successor to log4j (Logback Home, 2017).
Logback: The "native" implementation of SLF4J (created by the same author). It is the default for Spring Boot and generally considered the standard choice. It’s fast and supports advanced features like automatic reloading of configuration files.
Dependency: logback-classic

Log back is faster and has a smaller footprint as compared to the other logging systems.
Log back provides an array of features big and small that make it an easy logging system to understand and use. It is very similar in concept to log4j but has several improvements.
features of Log back:-

1. Log back is faster as compared to log4j as the internal source code has been written to perform operations faster. The executions of certain paths that are critical have been made faster by the rewriting of the code. The Log back components are faster and occupy less memory as well.
2. Log back is a framework that comes with a long list of tests that ensure the strength, durability, and dependability of this framework even under stress conditions.
3. Logback is compatible with SL4j. Logback implementation is built upon sl4j api natively and hence an sl4j logger can be used easily with logback being the underlying logging framework used for logging. As logback integrates seamlessly with SL4J, it is easy to switch between logging frameworks without having to change your code.
4. Logback framework supports either XML or Groovy file types for the configuration file. The groovy file types us widely used by developers as its syntax is shorter, consistent and easy to understand and configure.
5. logback provides an automatic tool that helps migrate configuration files written in XML to the Groovy format.
6. The Logback framework provides automated reload of the configuration files. Once a change has been made to the file, it is reloaded on its own. It uses a scanning process to scan the configuration files. This mechanism is extremely rapid, dynamic and scalable in terms of a large amount of parallelly executing threads and is free of contention. Additionally, it doesn’t make use of another separate thread for the purpose of scanning which saves memory.
7. Logback has a strong failure recovery system in terms of I/O. The File Appender and all its subclasses have the capability of handling I/O failures without additional overhead.
8. Provides API to handle the removal/deletion of archived log records automatically. A property called <<max History>> for rolling appenders is provided which stands for the maximum number of archived log records that can be kept.
9. Logback also has the capability of being able to compress log files that are archived at the time of a file rollover in the rolling file appender.
10. The logback framework supports the writing of a single file by several File Appenders that run on multiple JVM machines. This is done via the prudent mode.
11. Logback supports Lilith which is a logging and access event viewer for logback. It is capable of handling large amounts of log records.
12. Provides us the possibility to execute only parts of the configuration based on certain conditions. For example, in a software development life cycle, the developers make use of different environments such as development, testing, pre-production, and production. Although these files have many properties in common, we generally have to create separate configuration files for each environment.
13. Logback has an advanced Filtering mechanism as compared to other logging frameworks. It allows filtering on a user basis. Imagine an application that has been deployed on a server.
14. Logback gives us an option of maintaining the original log level for all users except for a particular user (the user who is analyzing the issue) who can see the logs at a more detailed level than everyone else.
15. Logback comes with an excellent appender namely the sifting appender.This appender can be used to filter/sift the log information based on any attribute at runtime.
16. Another useful feature of logback is that when an exception occurs, not only is the stack trace printed in the logs, but also the packaging data is printed along with it.
17. The logback family provides us with another smart module called as the logback-access. This module is part of the logback package and it integrates containers for servlets such as Tomcat, Jetty thereby providing http-access with logging functionalities.


*LOG BACK’S ARCHITECTURE*:- The architecture of Logback is similar to that of Log4j. It is made up of three modules:

`logback-core`:- The core module is the base module for the logback-classic and logback- access module. This module consists of the basic api and components that are used by the other two modules.
`logback-classic`:- This module extends the core module. It is a subclass of the logback- core module and internally it implements SL4J. SL4J API implemented by this module enables switching between various logging frameworks
`logback-access`:- This module extends the core module as well. It implements sl4j as well.It provides logging in an HTTP environment. It integrates Servlet containers that help provide HTTP access logging functionality (Gülcü & Pennec, 2011).

Initially, the Java application calls the logging API. The control is then passed on to the SLF4J API which then passes the control it on to the logback-core and logback-classic modules to compete the logging process.As SLF4J is implemented by logback internally, any logging framework can be plugged in at runtime which offers logback an edge over other logging frameworks.


*CONFIGURATION*:- Logback is distributed under a dual license under the LPGL and EPL.Similar to log4j and java util logging, the configuration in logback is done with a configuration file. This file is named as logback-test.xml or logback.xml or logback.groovy.
If no file is found, it still lets you add logging to your application. It defaults to the Basic Configurator configuration. This configuration logs to the console.



## TinyLog

Tiny log is a lightweight logging framework for Java and android applications.It is open source, distributed under the Apache License 2.0 and was released in August 2012 (tinylog, 2017).



-------------


## Spring Boot Logging

Spring Boot uses Commons Logging for all internal logging but leaves the underlying log implementation open. Default configurations are provided for Java Util Logging, Log4j2, and Logback.In each case, loggers are pre-configured to use console output with optional file output also available.
Spring Boot has no mandatory logging dependency, except for the Commons Logging API, which is typically provided by Spring Framework’s spring-jcl module. To use Logback, you need to include it and spring-jcl on the classpath. The recommended way to do that is through the starters, which all depend on spring-boot-starter-logging . For a web application, you need only spring-boot-starter-web , since it depends transitively on the logging starter.
By default, if you use the starters, Logback is used for logging. Appropriate Logback routing is also included to ensure that dependent libraries that use Java Util Logging, Commons Logging, Log4J, or SLF4J all work correctly.

Spring Boot has a LoggingSystem abstraction that attempts to configure logging based on the content of the classpath. If Logback is available, it is the first choice.
If the only change you need to make to logging is to set the levels of various loggers, you can do so in application.properties by using the "logging.level" prefix, as shown in the following example:

```java
logging.level.org.springframework.web=debug
logging.level.org.hibernate=error
```

When you deploy your application to a servlet container or application server, logging performed with the Java Util Logging API is not routed into your application’s logs. This prevents logging performed by the container or other applications that have been deployed to it from appearing in your application’s logs. 

`Log Format`:- The default log output from Spring Boot resembles the following example:

```bash
2025-11-20T16:37:12.913Z  INFO 127185 --- [myapp] [   main] o.s.b.d.f.logexample.MyApplication       : Starting MyApplication using Java 25.0.1 with PID 127185 (/opt/apps/myapp.jar started by myuser in /opt/apps/)
2025-11-20T16:37:12.925Z  INFO 127185 --- [myapp] [   main] o.s.b.d.f.logexample.MyApplication       : No active profile set, falling back to 1 default profile: "default"
2025-11-20T16:37:15.953Z  INFO 127185 --- [myapp] [   main] o.s.boot.tomcat.TomcatWebServer          : Tomcat initialized with port 8080 (http)
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


`File Output` - By default, Spring Boot logs only to the console and does not write log files. If you want to write log files in addition to the console output, you need to set a logging.file.name or logging.file.path property (for example, in your application.properties). If both properties are set, logging.file.path is ignored and only logging.file.name is used.

```java
logging.file.path=logs
logging.file.name=${logging.file.path}/demo.log
```

Logging Data:-

```java
private static final Logger LOGGER = LoggerFactory.getLogger(Demo.class);
LOGGER.info(..)
LOGGER.error(..,exception)
```

To configure the more fine-grained settings of a logging system, you need to use the native configuration format supported by the LoggingSystem in question. By default, Spring Boot picks up the native configuration from its default location for the system (such as classpath:logback.xml for Logback), but you can set the location of the config file by using the logging.config property.

**Configure Logback for Logging**:- If you need to apply customizations to logback beyond those that can be achieved with application.properties , you will need to add a standard logback configuration file. You can add a logback.xml file to the root of your classpath for logback to find. You can also use logback-spring.xml if you want to use the Spring Boot Logback extensions.
Spring Boot provides a number of logback configurations that be included from your own configuration. These includes are designed to allow certain common Spring Boot conventions to be re-applied.
The following files are provided under org/springframework/boot/logging/logback/:
1. defaults.xml - Provides conversion rules, pattern properties and common logger configurations.
2. console-appender.xml - Adds a ConsoleAppender using the CONSOLE_LOG_PATTERN.
3. file-appender.xml - Adds a RollingFileAppender using the FILE_LOG_PATTERN and ROLLING_FILE_NAME_PATTERN with appropriate settings.
In addition, a legacy base.xml file is provided for compatibility with earlier versions of Spring Boot.

A typical custom `logback.xml` file would look something like this:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
    <include resource="org/springframework/boot/logging/logback/defaults.xml"/>
    <include resource="org/springframework/boot/logging/logback/console-appender.xml"/>
    <root level="INFO">
        <appender-ref ref="CONSOLE" />
    </root>
    <logger name="org.springframework.web" level="DEBUG"/>
</configuration>
```

Your logback configuration file can also make use of System properties that the LoggingSystem takes care of creating for you:
1. ${PID} : The current process ID.
2. ${LOG_FILE} : Whether logging.file.name was set in Boot’s external configuration.
3. ${LOG_PATH} : Whether logging.file.path (representing a directory for log files to live in) was set in Boot’s external configuration.
4. ${LOG_EXCEPTION_CONVERSION_WORD} : Whether logging.exception-conversion-word was set in Boot’s external configuration.
5. ${ROLLING_FILE_NAME_PATTERN} : Whether logging.pattern.rolling-file-name was set in Boot’s external configuration.

Spring Boot also provides some nice ANSI color terminal output on a console (but not in a log file) by using a custom Logback converter. See the CONSOLE_LOG_PATTERN in the defaults.xml configuration for an example.
If Groovy is on the classpath, you should be able to configure Logback with logback.groovy as well. If present, this setting is given preference.

`Configure Logback for File-only Output`:- If you want to disable console logging and write output only to a file, you need a custom logback-spring.xml that imports file-appender.xml but not console-appender.xml , as shown in the following example:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
    <include resource="org/springframework/boot/logging/logback/defaults.xml" />
    <property name="LOG_FILE" value="${LOG_FILE:-${LOG_PATH:-${LOG_TEMP:-${java.io.tmpdir:-/tmp}}"/>
    <include resource="org/springframework/boot/logging/logback/file-appender.xml" />
    <root level="INFO">
        <appender-ref ref="FILE" />
    </root>
</configuration>
```

You also need to add logging.file.name to your application.properties or application.yaml , as shown in the following example:

```java
logging.file.name=myapplication.log

//Demo-28-07-2020-00.log
//Demo-28-07-2020-01.log
//Demo-29-07-2020-00.log
//Demo-29-07-2020-01.log

//10MB
logging.logback.rollingpolicy.file-name-pattern=${log-name}-%d(yyyy-MM-dd)-%i.log
logging.logback.rollingpolicy.max-file-size=10MB
```


**Configure Log4j for Logging**:- Spring Boot supports Log4j2 for logging configuration if it is on the classpath. If you use the starters for assembling dependencies, you have to exclude Logback and then include log4j2 instead. If you do not use the starters, you need to provide (at least) spring-jcl in addition to Log4j2.
The recommended path is through the starters, even though it requires some jiggling. The following example shows how to set up the starters in Maven:

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter</artifactId>
    <exclusions>
        <exclusion>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-logging</artifactId>
        </exclusion>
    </exclusions>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-log4j2</artifactId>
</dependency>
```

```groovy
dependencies {
    implementation "org.springframework.boot:spring-boot-starter-log4j2"
    modules {
        module("org.springframework.boot:spring-boot-starter-logging") {
            replacedBy("org.springframework.boot:spring-boot-starter-log4j2", "Use Log4j2 instead")
        }
    }
}
```

The Log4j starters gather together the dependencies for common logging requirements (such as having Tomcat use java.util.logging but configuring the output using Log4j 2).
In addition to its default XML configuration format, Log4j 2 also supports YAML and JSON configuration files. To configure Log4j 2 to use an alternative configuration file format, add the appropriate dependencies to the classpath and name your configuration files to match your chosen file format.
