# Angular

Angular is a front-end JavaScript framework that can run on a broad range of platforms,including web, desktop, and mobile i.e it enforces a certain style of application development and project structure that developers need to follow to develop apps with Angular. However, it also offers enough flexibility to allow you to structure your project in an understandable and manageable manner.Angular is written in TypeScript.

Angular is a popular open-source JavaScript framework developed by Google for building dynamic web applications.Maintained by a dedicated team at Google, Angular provides a broad suite of tools, APIs, and libraries to simplify and streamline your development workflow. Angular gives you a solid platform on which to build fast, reliable applications that scale with both the size of your team and the size of your codebase.

The key features of Angular include two-way data binding, dependency injection, modular architecture, component-based development, and a powerful template system.

## AngularJS vs. Angular

AngularJS, also known as Angular 1.x, is an older version of Angular, whose support officially ended in January 2022. Angular, starting from version 2, is a complete rewrite of AngularJS with improved performance and enhanced features.

@angular/core,@angular/compiler and @angular/http were introduced in version 2.3.0 while @angular/router came in version 3.3.0.To align this version Angular team decided to avoid confusion it went to Angular 4.0 directly.Later to avoid confusion it dropped the version and used the name "Angular".

## Angular Features

1. Angular is component-based and is built on TypeScript, which includes a collection of well-integrated libraries that include features like routing, forms management, client-server communication, and more.
2. Angular requires Node.js runtime environment.
3. Angular applications are built around a design pattern called Model-View-Controller (MVC).
4. Angular supports both server-side rendering (SSR) and static site generation including support for (SSG) along with full DOM hydration.blocks in templates make it templates simple to declaratively divide your into lazy-loadable parts.
Angular router provides a feature-rich navigation toolkit, route guards, data resolution, lazy-loading, and much more.
Angular form module provides a standardized system for form participation and validation.


Angular applications are created and developed using a command-line tool made by the Angular team called the `Angular CLI`.It automates many development tasks, such as scaffolding, testing, and deploying an Angular application, which would take a lot of time to configure manually.

**Angular libraries**:-

1. @angular/common:- Implements fundamental Angular framework functionality, including directives and pipes, location services used in routing, HTTP services, localization support, and so on.The CommonModule exports are re-exported by BrowserModule, which is included automatically in the root AppModule when you create a new app with the CLI new command.
    - @angular/common/http:- Implements an HTTP client API for Angular apps that relies on the XMLHttpRequest interface exposed by browsers.
    - @angular/common/http/testing:- Supplies a testing module for the Angular HTTP subsystem.
    - @angular/common/testing:- Supplies infrastructure for testing functionality supplied by @angular/common.
    - @angular/common/upgrade:- Provides tools for upgrading from the $location service provided in AngularJS to Angular's unified location service.
2. @angular/core:- Implements Angular's core functionality, low-level services, and utilities.
    - Defines the class infrastructure for components, view hierarchies, change detection, rendering, and event handling.
    - Defines the decorators that supply metadata and context for Angular constructs.
    - Defines infrastructure for dependency injection (DI), internationalization (i18n), and various testing and debugging facilities.
@angular/core/global:- Exposes a set of functions in the global namespace which are useful for debugging the current state of your application. These functions are exposed via the global ng "namespace" variable automatically when you import from @angular/core and run your application in development mode. These functions are not exposed when the application runs in a production mode.
@angular/core/rxjs-interop:- Includes utilities related to using the RxJS library in conjunction with Angular's signal-based reactivity system.
@angular/core/testing:- Provides infrastructure for testing Angular core functionality.
3. @angular/forms:- Implements a set of directives and providers to communicate with native DOM elements when building forms to capture user input.
4. @angular/animations:- Implements a domain-specific language (DSL) for defining web animation sequences for HTML elements as multiple transformations over time.
5. @angular/service-worker:- Implements a service worker for Angular apps. Adding a service worker to an Angular app is one of the steps for turning it into a Progressive Web App (also known as a PWA).

## Angular versions

Key Features and Changes Across Angular Versions

1. Angular 2 (September 2016) - Angular 2 was a complete rewrite of the original AngularJS (version 1.x), making it one of the most transformative versions of Angular. Some key features included:
    - TypeScript Support: Angular 2 was built using TypeScript, bringing in the benefits of strong typing, classes, and interfaces.
    - Component-Based Architecture: Angular 2 introduced components as the fundamental building blocks of applications.
    - Angular CLI: The Angular Command Line Interface (CLI) was introduced to simplify project creation, configuration, and build processes.
    - Improved Dependency Injection: A more flexible and powerful dependency injection system.
2. Angular 4 (March 2017) - Angular 4 brought important performance improvements and new features
    - Smaller Bundle Sizes: Optimized the application size for better performance.
    - Angular Animation Package: Angular 4 made animations easier with a dedicated @angular/animations module.
    - Enhanced Template Syntax: Improved handling of dynamic content and template syntax for better developer experience.
3. Angular 5 (November 2017) - Angular 5 focused on optimizing applications and improving features like
    - Build Optimizer: Introduced a build optimizer to reduce the size of production builds.
    - Angular Universal (SSR): Improved server-side rendering support, enabling better SEO and performance.
    - AOT Compilation: Advanced Ahead-of-Time compilation to improve application startup time.
4. Angular 6 (May 2018) - Angular 6 introduced more tools and improvements to keep the framework modern and flexible
    - CLI Updates: New commands like ng add were introduced to simplify adding libraries and tools.
    - Angular Elements: A new feature that allowed Angular components to be packaged as custom elements (Web Components).
    - RxJS 6: Angular 6 upgraded to RxJS 6, simplifying the API for reactive programming.
5. Angular 7 (October 2018) - Angular 7 included several enhancements
    - CLI Prompts: Interactive CLI prompts made it easier to work with the Angular CLI.
    - Virtual Scrolling: Optimized large list rendering with virtual scrolling.
    - Angular Material Updates: Further refinements to Angular Material, including better performance and new components.
6. Angular 8 (May 2019) - Angular 8 introduced exciting new capabilities
    - Differential Loading: Angular 8 used differential loading to generate separate bundles for modern and legacy browsers, improving load time.
    - Lazy Loading Ivy: Ivy compiler and renderer were introduced in Angular 8, although fully available in Angular 9.
    - Web Workers: Enhanced support for Web Workers for offloading computation to background threads.
7. Angular 9 (February 2020) - Angular 9 marked a significant milestone with the introduction of
    - Ivy Rendering Engine: Ivy became the default rendering engine, significantly improving performance and reducing bundle sizes.
    - Type Checking Improvements: Angular 9 enhanced type-checking for templates, reducing runtime errors.
8. Angular 10 (June 2020) - Angular 10 was focused on improving tooling, deprecations, and stability
    - TypeScript 3.9 Support: Angular 10 upgraded to TypeScript 3.9.
    - End of Support for IE 9/10: Dropped support for older browsers to focus on modern web technologies.
    - Angular CLI Improvements: Enhancements for faster builds and better performance.
9. Angular 11 (November 2020) - Angular 11 included
    - Faster Build Performance: Optimized build speeds and improved error messages in the development environment.
    - Component Test Harness: Introduced a standardized way of testing Angular components.
    - Angular Language Service: Improvements in the Angular Language Service, offering better code completion and inline documentation.
10. Angular 12 (May 2021) - Angular 12 continued the focus on making the framework more modern
    - Deprecation of View Engine: Angular 12 fully moved to Ivy, deprecating the old View Engine.
    - Ivy Everywhere: Improved performance with the Ivy rendering engine, and enhanced type-checking for templates.
    - TypeScript 4.2: Support for TypeScript 4.2 introduced new features like improved type inference.
11. Angular 13 (November 2021) - Angular 13 continued optimizing performance
    - Ivy Everywhere: Fully embraced Ivy, making it easier to work with modern features and improving overall performance.
    - Angular Material Enhancements: Updated Angular Material components for better accessibility and usability.
    - Build Times: Faster build times, especially in large applications.
12. Angular 14 (March 2022) - Angular 14 introduced new features like
    - Standalone Components: Allowed the use of components without requiring an Angular module, making the framework more flexible.
    - Typed Reactive Forms: Improved support for strongly typed forms with better type safety.
13. Angular 15 (November 2022) - Angular 15 improved the framework with
    - Simplified Component APIs: Made components even easier to create and manage.
    - Tree-Shakable Routes: Enhanced support for tree-shaking routes to reduce bundle sizes.
14. Angular 16 (2023) - Angular 16 focused on
    - Structural Directive API: Introduced a new API for working with structural directives.
    - CLI Enhancements: Further optimizations in the Angular CLI, improving overall developer experience
15. Angular 17 (2023) - Angular 17 continued to improve the ecosystem with
    - Improved Hydration Support: Better support for server-side rendering.
    - Server-Side Rendering Tools: Enhanced tools for easier SSR integration.
16. Angular 18 (2024) - Angular 18 focuses on
    - Performance Optimization: Even more performance tweaks to make Angular applications faster and more efficient.
    - Improved Tree-Shaking: Enhancements to tree-shaking for better bundling and load times.
    - Better Tooling for Large-Scale Applications: Introduces features for making large Angular applications more manageable and faster to build.


## Development Environment

There is some preparation required for Angular development.It includes:-

1. Install Node.js - Many of the tools used for Angular development rely on Node.js.
2. Install the angular-cli Package - The angular-cli package has become the standard way to create and manage Angular projects during development.


**Creating and Preparing the Project**:- Once you have Node.js, angular-cli, an editor, and a browser, you have enough of a foundation to start the development process.
To create the project, select a convenient location and use a command prompt to run the following command to create a new project called todo:

```sh
ng new todo
```
The ng command is provided by the angular-cli package, and ng new sets up a new project. The installation process creates a folder called todo that contains all of the configuration files that are needed to start Angular development, some placeholder files to start development, and the NPM packages required for developing, running, and deploying Angular applications. (There are a large number of NPM packages, which means that project creation can take a while.)

Starting the Development Tools - Everything is in place, so it is time to test the Angular development tools.

```sh
ng serve --port 3000 --open
```

This command starts the Angular development tools, which go through an initial build process to prepare the application for the development session.
The development tools in the project include an HTTP server. Once the build process is completed, a new browser window will open, and you will see the content.
The Angular development tools include a feature that automatically updates the browser when there is a change in the project. As soon as you save a file, the server will detect the change and update the application, reflecting the new content.

When you are making changes to a series of files, there may be times when the browser won’t be able to load and execute the example application.For the most part, the development HTTP server will trigger a reload in the browser, and everything will be fine, but if it gets stuck, you may have to manually reload the browser to get going again.

## Workspace and project file structure

You develop applications in the context of an Angular workspace. A workspace contains the files for one or more projects. A project is the set of files that comprise a standalone application or a shareable library.

- `Workspace configuration files`: All projects within a workspace share a CLI configuration context. The top level of the workspace contains workspace-wide configuration files, configuration files for the root-level application, and subfolders for the root-level application source and test files.

1. .editorconfig: Configuration for code editors.
2. .gitignore -Specifies intentionally untracked files that Git should ignore.
3. README.md- Introductory documentation for the root application.
4. angular.json- CLI configuration defaults for all projects in the workspace, including configuration options for build, serve, and test tools that the CLI uses, such as Karma, and Protractor.
5. package.json - Configures npm package dependencies that are available to all projects in the workspace.
6. package-lock.json - Provides version information for all packages installed into node_modules by the npm client.If you use the yarn client, this file will be yarn.lock instead.
7. src/ - Source files for the root-level application project.
8. node_modules/ - Provides npm packages to the entire workspace. Workspace-wide node_modules dependencies are visible to all projects.
9. tsconfig.json - The base TypeScript configuration for projects in the workspace. All other configuration files inherit from this base file.
10. karma.conf.js - Test runner use by cli to run tests.
11. browserlistrc -
12. server.ts -

- `Application configuration files`: The application-specific configuration files for the root application reside at the workspace root level. For a multi-project workspace, project-specific configuration files are in the project root, under projects/project-name/.

Project-specific TypeScript configuration files inherit from the workspace-wide tsconfig.json.

1. tsconfig.app.json - Application-specific TypeScript configuration, including TypeScript and Angular template compiler options.
2. tsconfig.spec.json - TypeScript configuration for the application tests.

- `Application source files`: Files at the top level of src/ support testing and running your application. Subfolders contain the application source and application-specific configuration.

1. app/ - Contains the component files in which your application logic and data are defined.
2. assets/ - Contains image and other asset files to be copied as-is when you build your application.
3. favicon.ico - An icon to use for this application in the bookmark bar.
4. index.html - The main HTML page that is served when someone visits your site. The CLI automatically adds all JavaScript and CSS files when building your app, so you typically don't need to add any <script> or <link> tags here manually.
5. main.ts - The main entry point for your application. Compiles the application with the JIT compiler and bootstraps the application's root module (AppModule) to run in the browser. You can also use the AOT compiler without changing any code by appending the --aot flag to the CLI build and serve commands.
6. styles.css - Lists CSS files that supply styles for a project. The extension reflects the style preprocessor you have configured for the project.
7. test.ts -
8. polyfills.ts -

Inside the src folder, the app folder contains your project's logic and data. Angular components, templates, and styles go here.

1. app/app.config.ts - Defines the application config logic that tells Angular how to assemble the application. As you add more providers to the app, they must be declared here.
2. app/app.component.ts - Defines the logic for the application's root component, named AppComponent. The view associated with this root component becomes the root of the view hierarchy as you add components and services to your application.
3. app/app.component.html - Defines the HTML template associated with the root AppComponent.
4. app/app.component.css - Defines the base CSS stylesheet for the root AppComponent.
5. app/app.component.spec.ts - Defines a unit test for the root AppComponent.
6. app/app.module.ts - Defines the root module, named AppModule, that tells Angular how to assemble the application. Initially declares only the AppComponent. As you add more components to the app, they must be declared here.

This file is not generated when using --no-standalone option.

## webpack

Angular uses webpack to bundle and minify the styles and html.When app changes webpack recompiles the app and refreshes the browser.This feature is called hot Module Replacement

## Angular service worker overview

Service workers augment the traditional web deployment model and empower applications to deliver a user experience with the reliability and performance on par with code that is written to run on your operating system and hardware. Adding a service worker to an Angular application is one of the steps for turning an application into a Progressive Web App (also known as a PWA).

At its simplest, a service worker is a script that runs in the web browser and manages caching for an application.

Service workers function as a network proxy. They intercept all outgoing HTTP requests made by the application and can choose how to respond to them. For example, they can query a local cache and deliver a cached response if one is available. Proxying isn't limited to requests made through programmatic APIs, such as fetch; it also includes resources referenced in HTML and even the initial request to index.html. Service worker-based caching is thus completely programmable and doesn't rely on server-specified caching headers.

Unlike the other scripts that make up an application, such as the Angular application bundle, the service worker is preserved after the user closes the tab. The next time that browser loads the application, the service worker loads first, and can intercept every request for resources to load the application. If the service worker is designed to do so, it can completely satisfy the loading of the application, without the need for the network.

Even across a fast reliable network, round-trip delays can introduce significant latency when loading the application. Using a service worker to reduce dependency on the network can significantly improve the user experience.

 Service workers in Angular

Angular applications, as single-page applications, are in a prime position to benefit from the advantages of service workers. Angular ships with a service worker implementation. Angular developers can take advantage of this service worker and benefit from the increased reliability and performance it provides, without needing to code against low-level APIs.

Angular's service worker is designed to optimize the end user experience of using an application over a slow or unreliable network connection, while also minimizing the risks of serving outdated content.

To achieve this, the Angular service worker follows these guidelines:

1. Caching an application is like installing a native application. The application is cached as one unit, and all files update together.
2. A running application continues to run with the same version of all files. It does not suddenly start receiving cached files from a newer version, which are likely incompatible.
3. When users refresh the application, they see the latest fully cached version. New tabs load the latest cached code.
4. Updates happen in the background, relatively quickly after changes are published. The previous version of the application is served until an update is installed and ready.
5. The service worker conserves bandwidth when possible. Resources are only downloaded if they've changed.

To support these behaviors, the Angular service worker loads a manifest file from the server. The file, called ngsw.json (not to be confused with the web app manifest), describes the resources to cache and includes hashes of every file's contents. When an update to the application is deployed, the contents of the manifest change, informing the service worker that a new version of the application should be downloaded and cached. This manifest is generated from a CLI-generated configuration file called ngsw-config.json.

Installing the Angular service worker is as straightforward as running an Angular CLI command. In addition to registering the Angular service worker with the browser, this also makes a few services available for injection which interact with the service worker and can be used to control it. For example, an application can ask to be notified when a new update becomes available, or an application can ask the service worker to check the server for available updates.

For service workers to be registered, the application must be accessed over HTTPS, not HTTP. Browsers ignore service workers on pages that are served over an insecure connection. The reason is that service workers are quite powerful, so extra care is needed to ensure the service worker script has not been tampered with.

There is one exception to this rule: to make local development more straightforward, browsers do not require a secure connection when accessing an application on localhost.
Browser support

To benefit from the Angular service worker, your application must run in a web browser that supports service workers in general. Currently, service workers are supported in the latest versions of Chrome, Firefox, Edge, Safari, Opera, UC Browser (Android version) and Samsung Internet. Browsers like IE and Opera Mini do not support service workers.

If the user is accessing your application with a browser that does not support service workers, the service worker is not registered and related behavior such as offline cache management and push notifications does not happen. More specifically:

- The browser does not download the service worker script and the ngsw.json manifest file
- Active attempts to interact with the service worker, such as calling SwUpdate.checkForUpdate(), return rejected promises
- The observable events of related services, such as SwUpdate.available, are not triggered

It is highly recommended that you ensure that your application works even without service worker support in the browser. Although an unsupported browser ignores service worker caching, it still reports errors if the application attempts to interact with the service worker. For example, calling SwUpdate.checkForUpdate() returns rejected promises. To avoid such an error, check whether the Angular service worker is enabled using SwUpdate.isEnabled.

PWA stands for Progressive Web App, a web app that can be installed on a device like a native app. PWAs are built using web technologies and can run on many devices and operating systems
How PWAs work:-

1. PWAs are installed using the device's web browser's offline cache.
2. They can operate in the background and while offline.
3. They can integrate with the device and other installed apps.
4. They can be accessed directly from the web.
5. They provide a native-like experience to users on supporting devices.

Benefits of PWAs

- PWAs can be developed using a single codebase, which can save time and money.
- PWAs can provide a reliable experience that feels fast and dependable regardless of the network.
- PWAs can provide a more integrated experience.
- PWAs can reach anyone, anywhere, on any device

Angular consists of a collection of JavaScript libraries that we can use for building highly performant and scalable web applications. The architecture of an Angular application is based on a hierarchical representation of components. Components are the fundamental building blocks of an Angular application. They represent and control a particular portion of a web page called the `view`.

An Angular Application has one AppComponent,by convention.Each component in the tree can communicate and interact with its siblings using API defined by each one.

An Angular application can have many features that are called modules.Each module servers a block of single functionality that corresponds to particular application domain or workflow.Angular modules are used to group Angular Components that share similar functionality.

An Angular application has one main module called `AppModule`.Each module can import other modules in an Angular application.

The functionality of a module can be analyzed in presentational and business logic of a feature.Angular Components should only be responsible for handling the presentational logic and delegating business logic tasks to services.The Angular framework provides Angular services to components using built-in `dependency injection (DI)` mechanism.

The Angular DI framework uses special-purpose objects,called injectors,to hide much of complexity of providing dependencies to an Angular application.Components are not required to know any of the actual implementation of Angular service.They only need to ask for it from an injector.

Angular service should follow single responsibility principle,and it should not cross boundaries between different Angular modules.Some can be:-

1. Access data from a backend API using HTTP protocol.
2. Interact with local storage of browser.
3. Error logging
4. Data transformations

The Angular tooling ecosystem is full of extensions and utilities that can help us when developing Angular Applications.There are many extensions available in VSCode Marketplace:-

1. Nx Console - Developed by Nrwl team that provides a GUI over Angular CLI.Contains most Angular CLI commands,and it uses Angular CLI internally to execute each one.
2. Angular Language Service - Provides various enhancements while editing HTML templates in Angular application:-
    A. Code autocompletion - Is a feature that helps us find the right property or method to use while while typing.Works by displaying a list of suggestions while we start typing in HTML content.
    B. Compile error messages - Can be solved partially by the Angular compiler,which is bootstrapped upon building an Angular application for production.It can display compilation error messages before our application reaches compilation process.
    C. Go-to definition techniques
3. Angular Snippets - Contains a collection of Angular code snippets for Typescript and HTML.In Typescript,we can use it to create components,modules or services in a blank Typescript file.In an HTML template,we can use the extension to create Angular artifacts e.g the *ngFor directive.
4. Angular Evergreen- It compares the Angular and Angular CLI versions of an Angular CLI project with latest ones and alerts you about whether you need to update it.Provides an easy-to-user interface for executing the commands:-
  A. Upgrading Angular dependencies to latest version
  B. Upgrading Angular dependencies to next version
  C. Upgrading all npm dependencies.
5. Material Icon Theme - Contains ton of icons that are based on Material Design.It can understand type of each file in your project and display related icon automatically.

## Deployment

There are 2 methods:-

1. Copy/paste Deployment - Large sizes of node_modules and bundlers.

Optimization Techniques:

1. Minification
2. Uglification
3. Bundling
4. Dead code elimination
5. Ahead-of-time(AOT) compilation.

The `ng build -prod` produces highly optimized bundles.




## Angular Modules

Modules in Angular act like a container where we can group the components, directives, pipes, and services, related to the application.

## Directive

Directives are the functions that will execute whenever the Angular compiler finds them. Angular Directives enhance the capability of HTML elements by attaching custom behaviors to the DOM.

From the core concept, Angular directives are categorized into three categories: Attribute Directives, Structural Directives, and Component Directives.

## Library

Use the Angular CLI and the npm package manager to build and publish your library as an npm package.

## Standalone Component

Standalone components provide a simplified way to build Angular applications. Standalone components, directives, and pipes aim to streamline the authoring experience by reducing the need for NgModules. Existing applications can optionally and incrementally adopt the new standalone style without any breaking changes.

`Lazy Loading`:- Lazy loading is a technique in Angular where modules are loaded on-demand when the user navigates to a specific route. It helps in improving the initial loading time of the application by loading only the necessary modules.

`Angular Ivy`:- Angular Ivy is the next-generation rendering engine and compiler introduced in Angular version 9. It offers improved performance, smaller bundle sizes, and better debugging and build times.

`Angular Ivy Renderer`:- Angular Ivy Renderer is the rendering engine introduced with Angular Ivy. It is responsible for transforming the component template into executable code,optimizing rendering performance, and enabling features like incremental DOM updates.

`Angular Ivy's differential loading` is a feature that generates different bundles for modern browsers and older browsers. Modern browsers receive a smaller bundle with
ES2015+ syntax, while older browsers receive a larger bundle transpiled to ES5 syntax.

Angular Ivy's improved tree shaking is a feature that allows for better elimination of unused code during the build process. It analyzes the application's dependencies
more accurately, resulting in smaller bundle sizes and improved performance.

`Angular change detection`:- Angular change detection is a mechanism that detects and propagates changes made to data in an application. It automatically updates the view to reflect the
updated data.

`AOT (Ahead-of-Time) compilation in Angular`:- AOT compilation is a process in Angular where the application's templates and components are compiled during the build phase rather than at runtime. It results in faster rendering and smaller bundle sizes.

`JIT (Just-in-Time) compilation in Angular`:- JIT compilation is the default compilation mode in Angular, where the templates and components are compiled at runtime in the browser. It offers a faster development cycle but slightly slower performance compared to AOT.

`tree shaking in Angular`:- Tree shaking is a technique used in Angular (enabled by the underlying TypeScript and webpack) to eliminate unused code from the final bundle during the build process. It helps in reducing the bundle size and improving performance.

`Angular Renderer`:- Angular Renderer is an API that provides a way to manipulate the DOM directly in Angular. It is used when there is a need to modify the DOM that is not covered by Angular's declarative templates.

Angular's Renderer2 is a class that provides a way to manipulate the DOM directly in Angular. It is used when there is a need to modify the DOM that is not covered by
Angular's declarative templates. It provides methods for creating, modifying, and removing DOM elements, as well as for manipulating element properties, attributes,
and styles. It is used by injecting the Renderer2 service into a component or directive and using its methods to perform DOM manipulations.

`ViewEncapsulation in Angular`:- ViewEncapsulation is a feature in Angular that encapsulates the styles of a component to prevent them from leaking and affecting other components. It provides different encapsulation modes like Emulated, Native, and None.

`zone.js in Angular`:- zone.js is a library used by Angular to provide a zone-based execution context. It helps in tracking asynchronous operations and triggering change detection when needed.

Angular's ngZone service provides a way to execute code within or outside the Angular zone. The Angular zone is an execution context that tracks asynchronous
operations and triggers change detection when needed. The ngZone service is used to manage change detection and optimize the performance of the application. It is
used by injecting the ngZone service into a component or service and using its run() method to execute code within the Angular zone.

The "ngZone.runOutsideAngular()" method is used to run a specific code block outside the Angular zone. It helps to prevent unnecessary change detection cycles and
improves the performance of the code executed within the block.

`HostListener`:- The "HostListener" decorator is used to add event listeners to the host element of a component in Angular. It allows the component to listen to and react to events raised on the host element.

`HostBinding`:- The "HostBinding" decorator is used to bind a property of a component to a property of its host element. It allows the component to modify or reflect the state of the host element.

`NoopAnimationsModule`:- The "NoopAnimationsModule" module is a module provided by Angular that disables animations in Angular Material components. It is useful in scenarios where animations are not desired or need to be turned off for testing purposes.

`@Host decorator`:- The "@Host" decorator is used in Angular to restrict the dependency resolution to only the host component, excluding any parent components. It ensures that the dependency is obtained from the immediate host component.

The `"ErrorHandler" interface` in Angular is used to define a custom error handler for handling errors that occur in the application. It allows for centralizing error handling
logic and providing a consistent error-handling strategy.
Angular's ErrorHandler interface is used to define a custom error handler for handling errors that occur in the application. It allows for centralizing error handling logic and
providing a consistent error-handling strategy. It is used by implementing the handleError() method in an error handler class and providing the error handler in the application's dependency injection system.

The `ContentChild decorator` in Angular is used to obtain a reference to a child component, directive, or template variable projected into the component's view. It
allows the component to interact with and access the properties and methods of the projected content.

The `ContentChildren decorator` in Angular is used to obtain a reference to multiple instances of a child component, directive, or template variable projected into the
component's view. It allows the component to interact with and access multiple instances of the projected content.

Angular's `EventEmitter` is a class that provides a way to emit custom events from a component. It allows the component to define custom events and emit them when
certain actions or conditions occur. It is used by declaring an EventEmitter property in the component and emitting events using the emit() method.

`Angular's ngUpgrade module` is used to facilitate the gradual migration of an AngularJS (Angular 1.x) application to Angular. It allows for running AngularJS and
Angular components side by side in the same application and provides utilities for interoperability between the two frameworks. The ngUpgrade module is used when
transitioning from AngularJS to Angular in an existing application. It allows for a step-by-step migration approach without the need to rewrite the entire application at once.

`Angular's ElementRef` is a class that represents a reference to a DOM element. It provides access to the underlying DOM element and allows for direct manipulation of
its properties and methods. It is used by injecting the ElementRef into a component or directive and accessing its nativeElement property to interact with the DOM element.

The `"StrictNullChecks" compiler` option in TypeScript enforces stricter null and undefined checks during type checking. It helps in catching potential null or
undefined errors at compile-time and promotes safer coding practices.

