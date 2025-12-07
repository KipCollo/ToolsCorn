# Laravel

Laravel is a web application framework with expressive, elegant syntax. A web framework provides a structure and starting point for creating your application, allowing you to focus on creating something amazing while we sweat the details.

Laravel strives to provide an amazing developer experience while providing powerful features such as thorough dependency injection, an expressive database abstraction layer, queues and scheduled jobs, unit and integration testing, and more.

## Installation

**Installing PHP and the Laravel Installer** - Before creating your first Laravel application, make sure that your local machine has PHP, Composer, and the Laravel installer installed. In addition, you should install either Node and NPM or Bun so that you can compile your application's frontend assets.
If you already have PHP and Composer installed, you may install the Laravel installer via Composer:

```sh
composer global require laravel/installer
```

After you have installed PHP, Composer, and the Laravel installer, you're ready to create a new Laravel application. The Laravel installer will prompt you to select your preferred testing framework, database, and starter kit:

```sh
laravel new example-app
```

Once the application has been created, you can start Laravel's local development server, queue worker, and Vite development server using the dev Composer script:

```sh
cd example-app
npm install && npm run build
composer run dev
```

**Herd** is a blazing fast, native Laravel and PHP development environment for macOS and Windows. It provides everything that you need to get started with Laravel development. It ships with PHP, nginx, dnsmasq and Node.js.
Herd uses native binaries for PHP, nginx, and other services, making it faster than other PHP development environments.Herd includes binaries for Composer, the Laravel installer, and Expose, making them available to your CLI automatically.
Herd provides everything that you need to get started with Laravel development for free but it offers great capabilities with Herd Pro.
Herd comes with PHP 7.4 - 8.4, and you can switch between these versions in seconds. Herd even lets you pin sites to specific PHP versions.Herd keeps all of your PHP installations up to date and notifies you about new updates in time.

Laravel Herd is a blazing fast, native Laravel and PHP development environment for macOS and Windows. Herd includes everything you need to get started with Laravel development, including PHP and Nginx.
Once you install Herd, you're ready to start developing with Laravel. Herd includes command line tools for php, composer, laravel, expose, node, npm, and nvm.
Herd Pro augments Herd with additional powerful features, such as the ability to create and manage local MySQL, Postgres, and Redis databases, as well as local mail viewing and log monitoring.

**IDE Support**:- You are free to use any code editor you wish when developing Laravel applications; however, PhpStorm offers extensive support for Laravel and its ecosystem, including Laravel Pint.
In addition, the community maintained Laravel Idea PhpStorm plugin offers a variety of helpful IDE augmentations, including code generation, Eloquent syntax completion, validation rule completion, and more.
If you develop in Visual Studio Code (VS Code), the official Laravel VS Code Extension is now available. This extension brings Laravel-specific tools directly into your VS Code environment, enhancing productivity.

## Starter Kits

To give you a head start building your new Laravel application, we are happy to offer authentication and application starter kits. These kits automatically scaffold your application with the routes, controllers, and views you need to register and authenticate your application's users.
While you are welcome to use these starter kits, they are not required. You are free to build your own application from the ground up by simply installing a fresh copy of Laravel.

`Laravel Breeze`:- is a minimal, simple implementation of all of Laravel's authentication features, including login, registration, password reset, email verification, and password confirmation. In addition, Breeze includes a simple "profile" page where the user may update their name, email address, and password.
Laravel Breeze's default view layer is made up of simple Blade templates styled with Tailwind CSS. Additionally, Breeze provides scaffolding options based on Livewire or Inertia, with the choice of using Vue or React for the Inertia-based scaffolding.

`Laravel Jetstream`:- While Laravel Breeze provides a simple and minimal starting point for building a Laravel application, Jetstream augments that functionality with more robust features and additional frontend technology stacks. For those brand new to Laravel, we recommend learning the ropes with Laravel Breeze before graduating to Laravel Jetstream.
Jetstream provides a beautifully designed application scaffolding for Laravel and includes login, registration, email verification, two-factor authentication, session management, API support via Laravel Sanctum, and optional team management. Jetstream is designed using Tailwind CSS and offers your choice of Livewire or Inertia driven frontend scaffolding.


## Directory Structure

The default Laravel application structure is intended to provide a great starting point for both large and small applications. But you are free to organize your application however you like. Laravel imposes almost no restrictions on where any given class is located - as long as Composer can autoload the class.

* The Root Directory

1. The app Directory-The app directory contains the core code of your application,almost all of the classes in your application will be in this directory.
2. The bootstrap Directory-The bootstrap directory contains the app.php file which bootstraps the framework. This directory also houses a cache directory which contains framework generated files for performance optimization such as the route and services cache files.
3. The config Directory-The config directory contains all of your application's configuration files.
4. The database Directory-The database directory contains your database migrations, model factories, and seeds. You may also use this directory to hold an SQLite database.
5. The public Directory-The public directory contains the index.php file, which is the entry point for all requests entering your application and configures autoloading. This directory also houses your assets such as images, JavaScript, and CSS.
6. The resources Directory-The resources directory contains your views as well as your raw, un-compiled assets such as CSS or JavaScript.
7. The routes Directory-The routes directory contains all of the route definitions for your application. By default, two route files are included with Laravel: web.php and console.php.
8. The storage Directory-The storage directory contains your logs, compiled Blade templates, file based sessions, file caches, and other files generated by the framework. This directory is segregated into app, framework, and logs directories. The app directory may be used to store any files generated by your application. The framework directory is used to store framework generated files and caches. Finally, the logs directory contains your application's log files.
9. The tests Directory-The tests directory contains your automated tests. Example Pest or PHPUnit unit tests and feature tests are provided out of the box. Each test class should be suffixed with the word Test. You may run your tests using the /vendor/bin/pest or /vendor/bin/phpunit commands. Or, if you would like a more detailed and beautiful representation of your test results, you may run your tests using the php artisan test Artisan command.
10. The vendor Directory-The vendor directory contains your Composer dependencies.

The App Directory-The majority of your application is housed in the app directory. By default, this directory is namespaced under App and is autoloaded by Composer using the PSR-4 autoloading standard.

1. The Broadcasting Directory-The Broadcasting directory contains all of the broadcast channel classes for your application. These classes are generated using the make:channel command. This directory does not exist by default, but will be created for you when you create your first channel.
2. The Console Directory-The Console directory contains all of the custom Artisan commands for your application. These commands may be generated using the make:command command.
3. The Events Directory-This directory does not exist by default, but will be created for you by the event:generate and make:event Artisan commands. The Events directory houses event classes. Events may be used to alert other parts of your application that a given action has occurred, providing a great deal of flexibility and decoupling.
4. The Exceptions Directory-The Exceptions directory contains all of the custom exceptions for your application. These exceptions may be generated using the make:exception command.
5. The Http Directory-The Http directory contains your controllers, middleware, and form requests. Almost all of the logic to handle requests entering your application will be placed in this directory.
6. The Jobs Directory-This directory does not exist by default, but will be created for you if you execute the make:job Artisan command. The Jobs directory houses the queueable jobs for your application. Jobs may be queued by your application or run synchronously within the current request lifecycle. Jobs that run synchronously during the current request are sometimes referred to as "commands" since they are an implementation of the command pattern.
7. The Listeners Directory-This directory does not exist by default, but will be created for you if you execute the event:generate or make:listener Artisan commands. The Listeners directory contains the classes that handle your events. Event listeners receive an event instance and perform logic in response to the event being fired. For example, a UserRegistered event might be handled by a SendWelcomeEmail listener.
8. The Mail Directory-This directory does not exist by default, but will be created for you if you execute the make:mail Artisan command. The Mail directory contains all of your classes that represent emails sent by your application. Mail objects allow you to encapsulate all of the logic of building an email in a single, simple class that may be sent using the Mail::send method.
9. The Models Directory-The Models directory contains all of your Eloquent model classes. The Eloquent ORM included with Laravel provides a beautiful, simple ActiveRecord implementation for working with your database. Each database table has a corresponding "Model" which is used to interact with that table. Models allow you to query for data in your tables, as well as insert new records into the table.
10. The Notifications Directory-This directory does not exist by default, but will be created for you if you execute the make:notification Artisan command. The Notifications directory contains all of the "transactional" notifications that are sent by your application, such as simple notifications about events that happen within your application. Laravel's notification feature abstracts sending notifications over a variety of drivers such as email, Slack, SMS, or stored in a database.
11. The Policies Directory-This directory does not exist by default, but will be created for you if you execute the make:policy Artisan command. The Policies directory contains the authorization policy classes for your application. Policies are used to determine if a user can perform a given action against a resource.
12. The Providers Directory-The Providers directory contains all of the service providers for your application. Service providers bootstrap your application by binding services in the service container, registering events, or performing any other tasks to prepare your application for incoming requests.
In a fresh Laravel application, this directory will already contain the AppServiceProvider. You are free to add your own providers to this directory as needed.
13. The Rules Directory-This directory does not exist by default, but will be created for you if you execute the make:rule Artisan command. The Rules directory contains the custom validation rule objects for your application. Rules are used to encapsulate complicated validation logic in a simple object. For more information, check out the validation documentation.


## Difference between config files and the .env file

Environment variables in .env can be changed depending on the deployment, for example locally in development you can have debug enabled, while on the production server you don’t want that.Some options in config files, like the ones you see above, make use of the env() Laravel helper function to get the environment variable.
While options stored directly in the config folder hardcoded are “one for all environments”.

Notice that any URL that does not have a specific entry in renders a “404 not found” page:You can customize this error page. Here’s how: create an resources/views , and in there create a 404.blade.php errors folder in file. Add any content in the file.

## Uses

`Laravel the Full Stack Framework`:- Laravel may serve as a full stack framework. By "full stack" framework we mean that you are going to use Laravel to route requests to your application and render your frontend via Blade templates or a single-page application hybrid technology like Inertia. This is the most common way to use the Laravel framework, and, in our opinion, the most productive way to use Laravel.

`Laravel the API Backend`:- Laravel may serve as an API backend to a JavaScript single-page application or mobile application. For example, you might use Laravel as an API backend for your Next.js application. In this context, you may use Laravel to provide authentication and data storage / retrieval for your application, while also taking advantage of Laravel's powerful services such as queues, emails, notifications, and more.
