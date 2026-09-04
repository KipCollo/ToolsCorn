# PHP

PHP stands for Hypertext Preprocessor. It is one of a server-side scripting language and specifically designed for web development. Which is widely used for creating dynamic and interactive web pages. PHP code executes on the web server before the resulting HTML content to the browser. 
`PHP`, an acronym for Hypertext Preprocessor, is a popular server-side scripting language favored for web development. It's versatile, dynamic, and can be embedded seamlessly into HTML code. PHP scripts are executed on the server, and the result is sent back to the browser as plain HTML.

PHP (recursive acronym for PHP: Hypertext Preprocessor) is a widely-used open source general-purpose scripting language that is especially suited for web development and can be embedded into HTML.
PHP is a general-purpose programming language used mostly for web development. Created by Rasmus Lerdorf in 1994, it allows developers to create dynamic web pages with ease.PHP is used as a server-side language. This means that PHP code is not processed on the user’s computer (also known as a client)

PHP, also known as Hypertext Preprocessor, is a powerful scripting language used predominantly for creating dynamic web pages and applications. It provides seamless interaction with databases, easier control of content, session tracking, and cookies. Being an open-source language, it's favored by developers for its flexibility, speed, and security.

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

PHP can:
- Access and manipulate databases,
- Process user input from forms and requests,
- Generate dynamic content based on different conditions and logics,
- Create interactive features like user authentication and handling user data.

PHP code can be embedded within HTML files using special tags. When a web server receives a request for the web page, That server executes the PHP code first, then it generating HTML content that is then sent back to the user's browser.


## PHP Versions and Features

PHP (Hypertext Preprocessor) versions are critically important as each release comes with new features, improvements, and bug fixes. PHP versions start from PHP 1.0 released in 1995 and have improved over the years. The more recent version as of writing is PHP 8.0, which introduced features like the JIT compiler, named arguments, match expressions, and more. Remember, sticking to officially supported versions, like PHP 7.4 or 8.0, ensures security updates and performance improvements. For instance, the code `echo "Current PHP version: " . phpversion();` would tell you the PHP version in use.

Visit the following resources to learn more:

- [@official@Versions and Features](https://www.php.net/manual/en/history.php.php)

The origins of PHP date back to 1995 when an independent software development contractor named Rasmus Lerdorf developed a Perl/CGI script that enabled him to know how many visitors were reading his online résumé. His script performed two tasks: logging visitor information, and displaying the count of visitors to the web page.Lerdorf began giving away his toolset, dubbed Personal Home Page (PHP).
The clamor prompted Lerdorf to continue developing the language, with perhaps the most notable early change being a new feature for converting data entered in an HTML form into symbolic variables,encouraging exportation into other systems. To accomplish this, he opted to continue development in C code rather than Perl. Ongoing additions to the PHP toolset culminated in November 1997 with the release of *PHP 2.0*, or Personal Home Page/Form Interpreter (PHP/FI). The 2.0 release was accompanied by a number of enhancements and improvements from programmers worldwide.
The new PHP release was extremely popular, and a core team of developers soon joined Lerdorf.They kept the original concept of incorporating code directly alongside HTML and rewrote the parsing engine, giving birth to *PHP 3.0*.

- **1994:** Initial PHP version 1.0 released, It was created by *Rasmus Lerdorf*. As a set of Common Gateway Interface (CGI) scripts to manage his personal website.
- **1995:** PHP 3.0 introduced, Which offering features like database access and forms processing. That gaining popularity for its simplicity and ease of use.
- **1997-1998:** During, PHP/FI (Fast Interpreter) released, That significantly improving performance.
- **1999-2004:** During, PHP 3 and 4 released, Which introducing features like object-oriented programming and database integration.
- **2004-2010:** During, PHP 5 and later versions focused on improvements for performance, security, introduced namespaces, closures, generators, traits and object-oriented programming.
- **2010 and beyond:** That emphasis on PHP related frameworks (like Laravel and Symfony) to streamline web development, provides possibility to integrate with modern technologies like JSON and REST APIs, and focus on security best practices.

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

## PHP Database Migrations

PHP Database migrations are system for version-controlling your database schema,allowing you to define,share and update database structures programmatically rather than through manual scripts.
Popular migration tools includes:-

- `Laravel Migrations`:- The industry standard for Laravel Users.Uses PHP fluent interface(Blueprint) to define tables and columns.
- `Phinx`:- Powerful framework-agnostic tool.Highly recommended for developers who need standalone library or working on legacy projects.Supports both PHP and pure SQL migrations,easy CLI integration.
- `Doctrine Migrations`:- Often paired with symfony framework but can be used as standalone.Works on top of Doctrine Database Abstraction Layer(DBAL).
- `Phoenix`:- Specialisezes in generating migration files directly from existing database structures via dump command.

## Role in Web Development:
PHP plays a crucial and important role in web development:

- **Building Web Applications:**  PHP can be used to create powerful, scalable and interactive web applications that go beyond the limits of static websites.
- **Dynamic Content Generation:**  PHP can interact with databases and other resources to generate customized content for each user. 
- **Request Processing:** It can handle user input from forms and user requests, validate and perform actions like storing data in databases, providing results and sending emails.
- **Server-Side Logic:** PHP can perform complex calculations, data handling and database operations that are not possible with client-side languages.
- **Session Management:** PHP can track user sessions and maintain identity and state across multiple pages.


## Benefits of Using PHP:

- **Open Source and Free:** PHP is a free and open-source server-side scripting language, makes it accessible to anyone.
- **Large Community and Resources:** PHP has a vast community of developers for support and a enormous amount of online resources for learning, support and troubleshooting.
- **Versatile and Scalable:**  It can be used from simple websites to large complex web applications and API development.
- **Integration with Various Technologies:**  PHP can easily integrate with databases, frameworks, and other web technologies.
