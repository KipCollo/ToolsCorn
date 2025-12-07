# Logging

`Logging` is the process of keeping track of application's flow execution.
Using logging,in the generated log messages we can find the state of the application execution on any given date and time.
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


## Logback

Log back is logging framework that was released in 2006. Designed by Ceki Gülcü, the creator of log4j, this framework was preconceived as a successor to log4j (Logback Home, 2017).


-------


## TinyLog

Tiny log is a lightweight logging framework for Java and android applications.It is open source, distributed under the Apache License 2.0 and was released in August 2012 (tinylog, 2017).
