# PHP(HyperTEXT )

PHP, an acronym for Hypertext Preprocessor, is a popular server-side scripting language favored for web development. It's versatile, dynamic, and can be embedded seamlessly into HTML code. PHP scripts are executed on the server, and the result is sent back to the browser as plain HTML.

Visit the following resources to learn more:

- [@official@What is PHP?](https://www.php.net/manual/en/introduction.php)
- [@article@Introduction to PHP](https://www.phptutorial.net/php-tutorial/what-is-php/)

PHP (recursive acronym for PHP: Hypertext Preprocessor) is a widely-used open source general-purpose scripting language that is especially suited for web development and can be embedded into HTML.
PHP is a general-purpose programming language used mostly for web development. Created by Rasmus Lerdorf in 1994, it allows developers to create dynamic web pages with ease.PHP is used as a server-side language. This means that PHP code is not processed on the user’s computer (also known as a client)

PHP, also known as Hypertext Preprocessor, is a powerful scripting language used predominantly for creating dynamic web pages and applications. It provides seamless interaction with databases, easier control of content, session tracking, and cookies. Being an open-source language, it's favored by developers for its flexibility, speed, and security.

Here's a simple PHP code to print a text:

      <?php
       echo "Hello, World!";
      ?>
    

Here the "echo" command in PHP helps to output one or more strings.

Visit the following resources to learn more:

- [@official@PHP](https://www.php.net/)
- [@official@PHP Documentation](https://www.php.net/docs.php)
- [@article@PHP Tutorial](https://www.phptutorial.net/)
- [@article@Learn PHP Interactively](https://www.learn-php.org/about)
- [@video@Introduction to PHP](https://www.youtube.com/watch?v=KBT2gmAfav4)
- [@video@PHP Tutorial - Full Course](https://www.youtube.com/watch?v=OK_JCtrrv-c)


In other words, when you access a PHP page on your browser, the code is not processed on your computer. Instead, your browser sends a request to a web server, which then processes the code and returns the result to the browser in the form of a web page.
web server is a remote computer where the PHP files are stored. For the web server to process PHP code, a special software known as the PHP interpreter needs to be installed.

PHP is one of the most widely used web programming languages and is used in many popular content management systems such as Wordpress, Drupal and Joomla.The language has evolved to allow use of both `procedural` and `object-oriented` programming techniques.Provides ability to use many preexisting libraries either that comes with basic installation or can be installed within PHP.

PHP is a scripting language. A `scripting language` is different than an actual programming language. Programming languages (such as Java) are written by the programmer in an English-like syntax. The program is compiled, which means it is converted from the English syntax into machine (executable) code (0s and 1s). This code is then executed (run) within a compatible operating system and hardware. The first-­time code is accessed, Scripting languages interpreted commands line by line. They do not precompile the code before initial execution.
In PHP 8, the code is first transformed into opcode, which can quickly be transformed into efficient machine-level (executable) code. The executable code can, optionally, stay in the memory of the computer, or server, for other executions. If the programmer changes this code, a new version can replace the previous version in memory. Although, this may require rebooting the web server to take effect.

------

The PHP download page provides the ability to gain easy access to the latest versions of the language. However, as you will note, only the language itself is provided. It is more common, and recommended, that the beginning user use a `WAMP` (Windows, Apache, MySQL/MariaDB, PHP), `LAMP` (Linux, Apache, MySQL/MariaDB, PHP), or `MAMP` (Mac, Apache, MySQL/MariaDB, PHP) stack package for initial installation. These packages (which we will look at later) allow for easy installation of multiple products at the same time. Otherwise, you have to run many separate installations.

To set up our web and database servers, we need to install three software: the Apache web server, the PHP interpreter and the MariaDB database server.
Installing all three software can be tedious if we do them one by one. Fortunately, some kind folks at Apache Friends created a free package that contains all the software we need. This package is known as `XAMPP`, which stands for Cross-platform (X), Apache web server (A), MarieDB database server(M), PHP (P) and Perl (P).

WAMP/LAMP/MAMP—Open source (free) combinations,including Apache web server, MySQL/MariaDB, and PHP for a specific operating system (Windows, Linux, and Mac). These packages are open source. The combination of software is used for creating dynamic web sites and web applications.

The MariaDB database server is a community-developed fork of the MySQL server. Although M in XAMPP officially stands for MarieDB, you’ll see that XAMPP labels the database server as MySQL in the software.

Many servers PHP has a direct module interface (also called SAPI). These servers include Apache, Microsoft Internet Information Server, Netscape and iPlanet servers. If PHP has no module support for your web server, you can always use it as a CGI or FastCGI processor. This means you set up your server to use the CGI executable of PHP to process all PHP file requests on the server.


An `application` is a program or a group of programs designed for use by an end user (for example, customers, members, circus acrobats, and so on). If the end user interacts with the application via a Web browser, the application is a `Web-based` or `Web application`. If the Web application requires the long-term storage of information, using a database, it is a `Web database applica­tion`.
The Web pages created with HTML alone are static,meaning the user can’t interact with the Web page. All users see the same Web page. Dynamic Web pages, on the other hand, allow the user to interact with the Web page. Different users might see different Web pages. For instance,one user looking at a furniture store’s online product catalog might choose to view information about the sofas, whereas another user might choose to view information about coffee tables. To create dynamic Web pages, you must use another language in addition to HTML.
One language widely used to make Web pages dynamic is JavaScript.JavaScript is useful for several purposes, such as mouse-overs (for example, to highlight a navigation button when the user moves the mouse pointer over it) or accepting and validating information that users type into a Web form.However, it’s not useful for interacting with a database. You wouldn’t use JavaScript to move the information from the Web form into a database. PHP, however, is a language that is particularly well suited to interacting with data­bases. PHP can accept and validate the information that users type into a Web form and can also move the information into a database.

`XAMPP`:- is an open-source development environment that stands for Cross-Platform (X), Apache server (A), MariaDB (M), PHP (P), and Perl (P). If you're working with PHP, it's a handy tool because it creates a local web server for testing or development purposes. It's especially useful if you plan to use a database in your project, as it includes MariaDB. It integrates seamlessly with PHP, enabling you to manage your server, scripting language, and database from a unified platform with less hassle. A code sample isn't really applicable here as XAMPP is more about setup and management. For more information, you can visit the official PHP documentation: .

Visit the following resources to learn more:

- [@official@Installing Apache2](https://www.php.net/manual/en/install.windows.apache2.php)
- [@official@XAMPP](https://www.apachefriends.org/)


`WAMP`:- is a popular software stack used for developing PHP web applications on Windows systems. Acting as an abbreviation for Windows, Apache, MySQL, and PHP, WAMP provides all the components necessary to set up a local web server. Apache is used to handle HTTP requests, MySQL manages the databases, and PHP serves as the programming language. The benefit of using WAMP lies in its convenience as it pre-packages all these components, saving time for the developer. You can download WAMP from its official website, then after installation, testing of your PHP scripts can be done locally without needing an internet connection.

Visit the following resources to learn more:

- [@official@Windows Installation](https://www.php.net/manual/en/install.windows.manual.php)


`LAMP` refers to the combined use of Linux OS, Apache HTTP Server, MySQL relational database management system, and PHP; it's a popular stack for creating and hosting websites. For PHP, LAMP is a robust, open-source web development platform that supports a wide range of dynamic websites and applications. Suppose you plan to develop a content management system (CMS), forums, or e-commerce shops. In that case, PHP, as a part of the LAMP stack, helps provide a flexible development environment. Here, PHP works hand-in-hand with MySQL to access and manage databases, get queried results, and embed them into HTML pages by the Apache HTTP Server before sending them to the client side.

Visit the following resources to learn more:

- [@official@PHP Lamp](https://www.php.net/manual/en/introduction.php)


`MAMP` stands for Macintosh, Apache, MySQL, and PHP. It is a popular software stack that enables developers to run a local server environment. While other technology stacks might be more relevant to different languages or platform-specific development, MAMP is highly beneficial for PHP development. MAMP allows PHP developers to run their code in a localhost environment on their systems, making testing and debugging more straightforward. MAMP bundles all the required software packages (Apache, MySQL, PHP) into one convenient installation, supporting developers in creating a reliable, consistent development environment without tussle. However, as an assistant, I cannot provide a code sample for this topic since it's not directly related to coding in PHP.

Visit the following resources to learn more:

- [@official@MAMP](https://www.mamp.info/en/)


**Installations**:- Installing PHP is an essential process to start developing PHP applications. PHP can be installed on Windows, macOS, and various distributions of Linux. Places to get PHP include the official PHP website, package managers like APT for Linux and Homebrew for macOS, or bundled solutions like XAMPP or WAMP that provide PHP along with a web server and database. After successful installation, you can run a simple PHP script to verify the installation. Here's an example, `<?php echo 'Hello, World!'; ?>`, which should display "Hello, World!" when accessed in a web browser.

Visit the following resources to learn more:

- [@official@Installation Guide](https://www.php.net/manual/en/install.php)

1. `Linux` - Most Unix (and Linux) operating systems and distributions have a packaged version of PHP and extensions available through their packaging system.

*Testing Installation*:- The best way to verify your PHP installation is by attempting to execute a PHP script.

```php
phpinfo();
```

```bash
php -S <address>:<port>
php -v
```

## Uses of PHP

PHP is mainly focused on server-side scripting, so it can do anything any other CGI program can do, such as collect form data, generate dynamic page content, or send and receive cookies.

There are two main areas where PHP scripts are used.
   1. Server-side scripting. This is the most widely used and main target field for PHP. Three things are needed to make this work: the PHP parser (CGI or server module), a web server, and a web browser. All these can run on a local machine in order to just experiment with PHP programming. 
   2. Command line scripting. A PHP script can be run without any server or browser, only the PHP parser is needed to use it this way. This type of usage is ideal for scripts regularly executed using cron (on Unix or macOS) or Task Scheduler (on Windows). These scripts can also be used for simple text processing tasks.

PHP can be used on all major operating systems, including Linux, many Unix variants (including HP-UX, Solaris and OpenBSD), Microsoft Windows, macOS, RISC OS, and probably others. PHP also has support for most of the web servers today. This includes Apache, IIS, and many others. And this includes any web server that can utilize the FastCGI PHP binary, like lighttpd and nginx. PHP works as either a module, or as a CGI processor.

PHP is not limited to outputting HTML. PHP's abilities include outputting rich file types, such as images or PDF files, encrypting data, and sending emails. It can also output easily any text, such as JSON or XML. PHP can autogenerate these files, and save them in the file system, instead of printing it out, forming a server-side cache for dynamic content.


## PHP Versions and Features

PHP (Hypertext Preprocessor) versions are critically important as each release comes with new features, improvements, and bug fixes. PHP versions start from PHP 1.0 released in 1995 and have improved over the years. The more recent version as of writing is PHP 8.0, which introduced features like the JIT compiler, named arguments, match expressions, and more. Remember, sticking to officially supported versions, like PHP 7.4 or 8.0, ensures security updates and performance improvements. For instance, the code `echo "Current PHP version: " . phpversion();` would tell you the PHP version in use.

Visit the following resources to learn more:

- [@official@Versions and Features](https://www.php.net/manual/en/history.php.php)

The origins of PHP date back to 1995 when an independent software development contractor named Rasmus Lerdorf developed a Perl/CGI script that enabled him to know how many visitors were reading his online résumé. His script performed two tasks: logging visitor information, and displaying the count of visitors to the web page.Lerdorf began giving away his toolset, dubbed Personal Home Page (PHP).
The clamor prompted Lerdorf to continue developing the language, with perhaps the most notable early change being a new feature for converting data entered in an HTML form into symbolic variables,encouraging exportation into other systems. To accomplish this, he opted to continue development in C code rather than Perl. Ongoing additions to the PHP toolset culminated in November 1997 with the release of *PHP 2.0*, or Personal Home Page/Form Interpreter (PHP/FI). The 2.0 release was accompanied by a number of enhancements and improvements from programmers worldwide.
The new PHP release was extremely popular, and a core team of developers soon joined Lerdorf.They kept the original concept of incorporating code directly alongside HTML and rewrote the parsing engine, giving birth to *PHP 3.0*.

- *PHP 4*:- Two core developers, Zeev Suraski and Andi Gutmans, took the initiative to completely rethink the way PHP operated, culminating in a rewriting of the PHP parser, dubbed the Zend scripting engine. The result of this work was in the PHP 4 release.PHP 4 added several enterprise-level improvements to the language, including the following:
   1. Improved resource handling: One of version 3.X’s primary drawbacks was scalability. This was largely because the designers underestimated how rapidly the language would be adopted for large-scale applications. The language wasn’t originally intended to run enterprise-class web sites, and continued interest in using it for such purposes caused the developers to rethink much of the language’s mechanics in this regard.
   2. Object-oriented support: Version 4 incorporated a degree of object-oriented functionality, although it was largely considered an unexceptional and even poorly conceived implementation. Nonetheless, the new features played an important role in attracting users used to working with traditional object-oriented programming (OOP) languages. Standard class and object development methodologies were made available in addition to features such as object overloading and run-time class information. (A much more comprehensive OOP implementation is available in version 5; see Chapter 6 for details.)
   3. Native session-handling support: HTTP session handling, available to version 3.X users only through a third-party solution, was natively incorporated into version 4.This feature offered developers a means for tracking user activity and preferences with unparalleled efficiency and ease. Chapter 18 covers PHP’s session-handling capabilities.
   4. Encryption: The MCrypt library was incorporated into the default distribution,offering users both full and hash encryption using encryption algorithms including Blowfish, MD5, SHA1, and TripleDES, among others. Chapter 21 delves into PHP’s encryption capabilities.
   5. ISAPI support: ISAPI support gave users the ability to use PHP in conjunction with Microsoft’s IIS Web server. A later joint collaboration between Zend and Microsoft greatly improved IIS’ PHP support using FastCGI. In Chapter 2, I’ll show you how to install PHP on both the IIS and Apache Web servers.
   6. Native COM/DCOM support: Another bonus for Windows users is PHP 4’s ability to access and instantiate COM objects. This functionality opened up a wide range of interoperability with Windows applications.
   7. Native Java support: In another boost to PHP’s interoperability, version 4 offered support for binding to Java objects from a PHP application.
   8. Perl Compatible Regular Expressions (PCRE) library: The Perl language has long been heralded as the reigning royalty of the string-parsing kingdom. The developers knew that powerful regular expression functionality would play a major role in the widespread acceptance of PHP and opted to simply incorporate Perl’s functionality rather than reproduce it, rolling the PCRE library package into PHP’s default distribution (as of version 4.2.0). Chapter 9 covers this important feature in great detail and offers a general introduction to the often confusing regular expression syntax.
In addition to these features, literally hundreds of functions were added to version 4, greatly enhancing the language’s capabilities

- *PHP 5*:- Although previous major releases had enormous numbers of new library additions, version 5 contained improvements over existing functionality and added several features commonly associated with mature programming language architectures:
   1. Vastly improved object-oriented capabilities: Improvements to PHP’s object-oriented architecture were version 5’s most visible feature. Version 5 included numerous functional additions such as explicit constructors and destructors, object cloning, class abstraction, variable scope, and interfaces, and a major improvement regarding how PHP handles object management.
   2. Try/catch exception handling: Devising error-handling strategies within programming languages is, ironically, error-prone and inconsistent. To remedy this problem, version 5 added support for exception handling. Long a mainstay of error management in many languages, such as C++, C#, Python, and Java, exception handling offers an excellent means for standardizing your error- reporting logic.
   3. Improved XML and Web Services support: As of version 5, XML support is based on the libxml2 library; and a new and rather promising extension for parsing and manipulating XML, known as SimpleXML, was introduced.
   4. Native support for SQLite: Always keen on providing developers with a multitude of choices, support was added for the powerful yet compact SQLite database server (www.sqlite.org). SQLite offers a convenient solution for developers looking for many of the features found in some of the heavyweight database products without incurring the accompanying administrative overhead.

- *PHP 5.3*:- Although officially a point release, PHP 5.3 is actually the most significant upgrade to the language since the release of 5.0. Heralding a powerful array of new features including namespaces, late static binding, lambda functions and closures, a new MySQL driver, and a variety of syntactical additions such as NOWDOC syntax.

- *PHP 6*:-

- *PHP 7*:- is based on the PHPNG project (PHP Next-Gen), that was led by Zend to speed up PHP applications. The performance gains realized from PHP 7 are huge! They vary between 25% and 70% on real-world apps, and all of that just from upgrading PHP, without having to change a single line of code.
PHP 7 also replaces fatal errors, which previously would crash a program, with exceptions that can be handled within the program itself. PHP 7 added many additional features, including type declarations for classes and functions, and a spaceship operator.
In addition to bug fixes and security enhancements, PHP 7.4 introduced the spread operator which provides much better performance for merging arrays than array_merge. The preload of functions and classes available in PHP 7.4 greatly increases PHP performance on heavy used systems.
Arrow functions have been introduced to provide easier use of anonymous functions. Type declarations in class properties have also been improved and expanded.
The order of preference for concatenation of strings and numbers has been adjusted to reduce error situations.

- *PHP 8*:- With the introduction of PHP 8, code is compiled using a JIT (just-in-time) compiler. This technique has been used for many years in other languages, such as Java. Code compiled with JIT will initially be transformed into opcode. When the opcode is executed, it transitions into executable machine-level code. This change in combination with the preloaded classes and functions introduced in PHP 7.4 dramatically increases ode efficiency and speed.
In addition, PHP 8 introduces union types and static return types. It builds upon PHP 7.4’s introduction of weak references and allows a weakmap relationship with objects to allow them to remain in memory without being destroyed by the server’s garbage collector. The str_contains function (finally) allows us to search more efficiently for contents in a string. Internal function errors now behave in the same way as user-defined function errors. The @ operator, which you may have seen in older PHP code, is removed.To stop errors from being displayed, you must set this feature within your server.


## PHP, JavaScript, CSS, HTML, and Apache Web Server

JavaScript code is downloaded to the user’s computer. It is interpreted and executed within the browser. PHP code resides on a web server. The code is also interpreted and executed, but within the web server, not by the browser. The results of executing the PHP code are returned to the browser, not to the actual code itself. PHP returns statements the browser can interpret, such as JavaScript, HTML, and CSS code.

If code is placed in a file (such as index.php) on a web server, we would use our web browser to request this file by entering its name and location in the URL (address) box (such as www.servera.com/index.php). The address entered instructs the browser to send an HTTP Get request to the web server (mysita.com) to return the web page (index.php).
The web server receiving the request will determine that PHP code must first be interpreted and executed. It determines this simply by looking at the file extension (.php) of the file requested. Any PHP code within the file (code between the <?php and ?> tags) is then sent to the PHP processor for interpretation and execution. The results of the execution of the code are returned to the web server, which in turn sends it (and any other HTML and/or JavaScript code) back to the browser.
The PHP print or echo functions will return any HTML (or JavaScript or CSS) code that has been placed between the "". The browser will interpret any code returned by the web server.

There are many choices of web servers that will work with PHP and MySQL/MariaDB databases. Some of the most popular choices include
   - Microsoft Internet Information Server (IIS): www.iis.net/
   - Lighttpd: www.lighttpd.net/
   - NGINX: www.nginx.com/ (event-driven, good for static pages)
   - Apache: www.apache.org/ (process-driven, good for dynamic pages)


## PHP Three-Tier Architecture

One unique issue is the separation of HTML markup and program code. Another is the handling of the HTTP request. Among PHP developers, the standard solution to the first problem is web templates, and the object-oriented solution to the second one is the Model-View-Controller (MVC) pattern.

Modular three-tier applications, design, programming—three-tier design provides the ability to create programs that can be separated into an interface tier, business rules tier, and data tier. The interface tier contains all graphics and program code related to displaying information to the user. The business rules tier does not contain an interface. However, it processes any information submitted from the interface tier and can then submit information to the data tier to be stored. The data tier is the primary storage location for the application, which may include the use of a database. Each tier can be independently changed and built (compiled) without affecting the other tiers.

`The interface tier (IT)` displays information and provides the user the ability to interact with the application. Most interfaces provide a graphical user interface (GUI), which allows the user an attractive way to view information and interaction with the application. GUI interfaces provide common objects, including text boxes and buttons, which help the user to quickly adapt to new applications. In addition, pictures, images,icons, video, and sound can often be included to keep the user’s interest. Menus and other navigation objects are also commonly included to help the user move through the application successfully.
This tier will display information using objects (such as labels and picture boxes) or scripting code.The tier will also accept information from the user through interactive objects (such as text boxes and buttons). Static information can be provided from within the tier (via menus, logos, or footers). Dynamic information is usually provided to the tier from the business rules tier.
The interface usually provides code with the ability to react to user interactions (clicking the Submit button), commonly called user events. Code may also be provided that prepares information provided by the user for use by other tiers (such as converting text entered by the user into number format for a calculation in the business rules tier).
The interface tier should not directly interact with a database management system or a database itself.

`Business Rules Tier` The business rules tier processes all information and data received from the interface tier and the data tier. This tier will also return information requested by the interface tier and submit information to the data tier for storage.
Most of the actual programming code is contained in this tier.The business rules tier code usually makes an application truly unique from another application.
Unlike the interface tier, which may contain code in the browser, all coding in the business tier is completed using a program(s) (such as PHP) on a server. Scripting and programming code residing on a server is secured by the server itself and cannot be accessed by the user. Business tier code can also reside on an application server (as a service) or on a web server (as a web service). Servers ensure that code in this tier is secure by not allowing direct access by the user.
Service—Services are applications that reside in the memory of a computer or server that responds to requests from other applications.Services can be automatically loaded into memory when the computer or server is booted, or they can manually be started and stopped when required. Services do not have GUI interfaces. The business rules tier can reside as a service(s) on a computer or server.
The business rules tier returns values to the tiers that request it.

`Data Tier` The data tier’s main function is to store information on a secondary device or to return data to the business rules tier. Data can (and usually is) be stored in a database using a Database Management System (like MySQL or MariaDB). The tier interfaces with the business rules tier, since data may be manipulated before being displayed, as in the creation of a report. Data is returned from the tier in a format that the business rules tier (and programming languages) can accept. Common formats include JSON, XML, SOAP,and datasets.
Data storage can be local and/or remote. Mobile devices can restrict storage to local databases (smart phones) but can also use WSDL (web services) to store and retrieve information remotely on a server or within a cloud.Additionally, many applications save small amounts of information locally with cookies,or larger amounts of information in remote databases.


**MVC and Dependency Injection**:- MVC (Model-View-Controller) is a design pattern used by software engineers (including PHP application designers) to communicate between the view and model using a controller. The controller is software that transfers any user input to the model. MVC design can be considered circular because the model, controller, and view have the ability to communicate with each other. The standard three-tier model is linear; for the Interface to receive or pass information to the data tier, it must pass the information through the business rules tier.
MVC and component-based design can use dependency injection. Dependency injection allows the program (client) that will use a block of code (such as a class) while not know the actual implementation of the block of code. This allows for independent development, updating, testing, and reusability of modules.
