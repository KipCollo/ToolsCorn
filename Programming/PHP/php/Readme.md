# PHP(HyperTEXT )

PHP (recursive acronym for PHP: Hypertext Preprocessor) is a widely-used open source general-purpose scripting language that is especially suited for web development and can be embedded into HTML.
PHP is a general-purpose programming language used mostly for web development. Created by Rasmus Lerdorf in 1994, it allows developers to create dynamic web pages with ease.PHP is used as a server-side language. This means that PHP code is not processed on the user’s computer (also known as a client)

In other words, when you access a PHP page on your browser, the code is not processed on your computer. Instead, your browser sends a request to a web server, which then processes the code and returns the result to the browser in the form of a web page.

web server is a remote computer where the PHP files are stored. For the web server to process PHP code, a special software known as the PHP interpreter needs to be installed.

PHP is one of the most widely used web programming languages and is used in many popular content management systems such as Wordpress, Drupal and Joomla.

## XAMPP

To set up our web and database servers, we need to install three software: the Apache web server, the PHP interpreter and the MariaDB database server.
Installing all three software can be tedious if we do them one by one. Fortunately, some kind folks at Apache Friends created a free package that contains all the software we need. This package is known as XAMPP, which stands for Cross-platform (X), Apache web server (A), MarieDB database server(M), PHP (P) and Perl (P).

The MariaDB database server is a community-developed fork of the MySQL server. Although M in XAMPP officially stands for MarieDB, you’ll see that XAMPP labels the database server as MySQL in the software.

Many servers PHP has a direct module interface (also called SAPI). These servers include Apache, Microsoft Internet Information Server, Netscape and iPlanet servers. If PHP has no module support for your web server, you can always use it as a CGI or FastCGI processor. This means you set up your server to use the CGI executable of PHP to process all PHP file requests on the server.

**Installations**:-

1. `Linux` - Most Unix (and Linux) operating systems and distributions have a packaged version of PHP and extensions available through their packaging system.

## Uses of PHP

PHP is mainly focused on server-side scripting, so it can do anything any other CGI program can do, such as collect form data, generate dynamic page content, or send and receive cookies.

There are two main areas where PHP scripts are used.
   1. Server-side scripting. This is the most widely used and main target field for PHP. Three things are needed to make this work: the PHP parser (CGI or server module), a web server, and a web browser. All these can run on a local machine in order to just experiment with PHP programming. 
   2. Command line scripting. A PHP script can be run without any server or browser, only the PHP parser is needed to use it this way. This type of usage is ideal for scripts regularly executed using cron (on Unix or macOS) or Task Scheduler (on Windows). These scripts can also be used for simple text processing tasks.

PHP can be used on all major operating systems, including Linux, many Unix variants (including HP-UX, Solaris and OpenBSD), Microsoft Windows, macOS, RISC OS, and probably others. PHP also has support for most of the web servers today. This includes Apache, IIS, and many others. And this includes any web server that can utilize the FastCGI PHP binary, like lighttpd and nginx. PHP works as either a module, or as a CGI processor.

PHP is not limited to outputting HTML. PHP's abilities include outputting rich file types, such as images or PDF files, encrypting data, and sending emails. It can also output easily any text, such as JSON or XML. PHP can autogenerate these files, and save them in the file system, instead of printing it out, forming a server-side cache for dynamic content.


```bash
php -S <address>:<port>
```
