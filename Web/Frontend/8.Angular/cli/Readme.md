# Angular CLI

Angular CLI (Command Line Interface) is a powerful command-line tool that helps in initializing, developing,scaffolding and maintaining Angular applications directly from command shell. It provides various commands to generate components, services, modules, etc.The Angular CLI is a command-line interface tool which allows you to scaffold, develop, test, deploy, and maintain Angular applications directly from a command shell.

Angular CLI is published on npm as the @angular/cli package and includes a binary named ng. Commands invoking ng are using the Angular CLI.

The Angular CLI is a tool created by Angular team that improves developer experience while building Angular applications.It hides much of complexity of scaffolding and configuring an Angular application while allowing the developer to concentrate on coding.

To install Angular CLI on your local system, you need to install Node.js. Angular CLI uses Node and its associated package manager, npm, to install and run JavaScript tools outside the browser.We can install angular latest CLI using the following command

`npm install -g @angular/cli` - npm
`pnpm install -g @angular/cli` - pnpm
`yarn global add @angular/cli` - yarn
`bun install -g @angular/cli` - bun

On some Unix-like setups, global scripts may be owned by the root user, so to the above command may fail with a permission error. Run with `sudo` to execute the command as the root user and enter your password when prompted:

On Windows client computers, the execution of PowerShell scripts is disabled by default, so the above command may fail with an error. To allow the execution of PowerShell scripts, which is needed for npm global binaries, you must set the following execution policy:

`Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned`.

To verify that Angular CLI has been installed correctly,we can run the command:-

`ng version`

## CLI command-language syntax

Angular CLI roughly follows Unix/POSIX conventions for option syntax.

1. Boolean options - Boolean options have two forms: --this-option sets the flag to true, --no-this-option sets it to false. You can also use --this-option=false or --this-option=true. If neither option is supplied, the flag remains in its default state.
2. Array options - Array options can be provided in two forms: --option value1 value2 or --option value1 --option value2.
3. Key/value options - Some options like --define expect an array of key=value pairs as their values. Just like array options, key/value options can be provided in two forms: --define 'KEY_1="value1"' KEY_2=true or --define 'KEY_1="value1"' --define KEY_2=true.
4. Relative paths - Options that specify files can be given as absolute paths, or as paths relative to the current working directory, which is generally either the workspace or project root.

## CLI Commands

- `ng new <project-name> [ options ]` - The new command is used to create a new Angular application or a new Angular workspace. By default, the project is created under the current directory.Creates and initializes a new Angular application that is the default project for a new workspace.Alias is 'n'.The Angular CLI installs the necessary Angular npm packages and other dependencies. This can take a few minutes.
That’s the default usage of the command and creating a new project folder with name. The project which is created in that folder is containing:- The default Angular project, All dependencies installed in node_modules folder , Testing files for each components

An Angular workspace is an Angular CLI project that contains one or more Angular applications,where some of them can be Angular libraries.You develop apps in the context of an Angular workspace. A workspace can contain multiple applications and libraries.

The CLI creates a new workspace and a small welcome app in a new directory with the same name as the workspace, ready to run. Navigate to the new directory so subsequent commands use this workspace.

Provides interactive prompts for optional configuration, such as adding routing support. All prompts can safely be allowed to default.

1. The new workspace folder is given the specified project name, and contains configuration files at the top level.
2. By default, the files for a new initial application (with the same name as the workspace) are placed in the src/ subfolder.
3. The new application's configuration appears in the projects section of the angular.json workspace configuration file, under its project name.
4. Subsequent applications that you generate in the workspace reside in the projects/ subfolder.

Options:
--dry-run - only output the files created and operations performed not actually create the project. Alias: 'd'.
--verbose - output more information.Alias: 'v'.
--skip-npm - do not run any npm command once the project is created
--skip-git  do not create a git repository for the project.
--directory - parent directory to create the new project into.
-p, --prefix - The prefix to apply to generated selectors for the initial project.

If you plan to have multiple applications in the workspace, you can create an empty workspace by using the *--no-create-application* option. You can then use *ng generate application* to create an initial application. This allows a workspace name different from the initial app name, and ensures that all applications reside in the /projects subfolder, matching the structure of the configuration file.

The Angular CLI initiates creation process of your Angular application,which consists of the following:-

1. Scaffolding the necessary folder structure of a typical Angular CLI project
2. Installing the required npm dependencies and Angular packages
3. Initializing Git in the Angular CLI project

The Angular CLI creates a minimal Angular application by default to provide us with a starting point for our Angular project. It contains some ready-made CSS styles and
HTML content

- `ng init *project-name* [options ]` - Creates a new Angular project in the current folder.

Options:
--dry-run - only output the files created and operations performed not actually create the project Alias: 'd'.
--verbose - output more information. Alias:'v'.
--skip-npm - do not run any npm command once the project is created
-- name - The name of the project to create.

- `ng completion` - Adds autocomplete functionalitY to your shell for ng commands.

- `ng doc <keyword>` - Opens a browser window with the keyword as search in Angular documentation.

- `ng e2e` - Runs all end-to-end tests defined in your application,using protractor.End-to-end testing (E2E) of Angular applications is performed using the Protractor testing framework, which is created by the Angular team themselves. Protractor can perform end to end tests on Angular applications that are running in a real browser by interacting with it, similar to that of an end-user.

- `ng format` - Formats the code of this project using clang-format.

- `ng generate *type* [options]` - Generate new code inside your project.Alias: 'g'

Valid types:-

1. component <path/to/component-name> - Generates a component.
2. directive <path/to/directive-name> - Generates a directive.
3. route <route/to/route-component> - Generates a route. The name should nbe the route used in the RouteConfig.
4. pipe <path/to/pipe-name>Generates a pipe.
5. service <path/to/service-name> - Generates a service.
6. modules - Create a new module

The generated component has its own directory, unless the --flat options is specified.

Options
--flat - Do not create the code in its own directory.
--route=`route` - Specify the parent route. only for generating components and routes. Default to the path specified.
--skip-router-generation - Skip generating the route config for the parent.only usable for routes.
--default - Specify that the route should be a default route.
--lazy - Specify that the route is lazy. Default to true.

- `ng get pathl, path2, ...pathN> [options ]` - Get a value from the Angular CLI configuration. The pathN arguments is a val Javascript path like "users[ 1].userName ". If the value isn't set,"undefined" will be shown. This command by default only works inside a project directory
Options:
--global - Returns the global configuration value instead of the local one (if both are set). This option also makes the command
work outside of a project directory.

- `ng set path1=valuel, path2=value2, ...pathN=valueN> [options]` - Set a value in the Angular CLI configuration. By default, sets the value in the project ' s configuration if ran inside a project, or fails if not inside a project.The pathN arguments is a valid JavaScript path 1ike "users[1].userName". The value will be coerced to the proper type or will throw an error if the type cannot be coerced.
Options
--global - Sets the global configuration value instead of a local one. This also makes ng set works outside a project.

- `ng github-pages :deploy [options ]` -Build the application for production,setup the GitHub repository,then publish the app.
options
--message=<message> - Commit message to include with the build.Defaults to "new gh-pages version"
--environment=<env> - The Angular environment to build.Defaults to "production"
--branch=<branch-name> - The git branch to push the pages to.Defaults to "gh-branch".
--skip-build - Skip building the project before publishing.
--gh-token=<token>API token to use to deploy. Required.
--gh-username=<username>The Github username to use. Required.

- `ng lint` - Run the codelyzer linter on your project.Check the project source code for common errors and formatting issues.

- `ng test [options]`,`ng test <project> [options]` | `ng t <project> [options]` - Run unit tests, using karma.
Options:
--watch - Keep running the tests. Default to true.
--browsers, --colors, --reporters, --port, --log-level - Those arguments are passed directlY to karma.

- `ng version(ng v)` - Outputs the version of angular-cli,node and the operating system.

- `Ng build`:- The command can be used to build a project of type "application" or "library". When used to build a library, a different builder is invoked, and only the ts-config, configuration, and watch options are applied. All other options apply only to building applications.
The Angular CLI command to build the application for production is:

```bash
ng build --prod
```

- `Ng serve`:-This command builds, deploy, serves and every time watches your code changes.If it find any change in code it builds and serves that code automatically.After coding our Angular apps using TypeScript, we use the Angular CLI command to build the app.

Note that if you get the message:Port 4200 is already in use. Use '--port' to specify a different port.This means that you already have another service running on port 4200. If this is the case you can either 1. shut down the other service or 2. use the --port flag when running ng serve like this:

ng serve --port 9001

The above command would change the URL you open in your browser to something like: <http://localhost:9001>

Another thing to notice is that, on some machines, the domain localhost may not work. You may see a set of numbers such as 127.0.0.1. When you run ng serve it should show you what URL the server is running on, so be sure to read the messages on your machine to find your exact development URL.

`ng help`:- To view all commands you can use this command.

- The command ng help also provides the following functionality:
   1. Command List: A list of commands (like build, serve, generate, test, etc.) that you can run.
   2. Command Options: Each command comes with specific flags or options (like --prod for production builds or --port for serving on a specific port).
   3. Subcommands: Some commands may have subcommands that you can use for more specific tasks (e.g., ng generate component or ng serve --open).
If you want more information about a specific command, you can use the following: `ng <command> --help`

## Schematics

A schematic is a template-based code generator that supports complex logic. It is a set of instructions for transforming a software project by generating or modifying code.

Angular schematics are command-line tools provided by the Angular CLI that automate the process of generating and modifying code in an Angular application.
They can be used to generate components, modules, services, and more.

## Building Angular apps

You can build your Angular CLI application or library with the `ng build` command. This will compile your TypeScript code to JavaScript, as well as optimize, bundle, and minify the output as appropriate.
ng build only executes the builder for the build target in the default project as specified in angular.json. Angular CLI includes four builders typically used as build targets:

1. @angular-devkit/build-angular:application - Builds an application with a client-side bundle, a Node server, and build-time prerendered routes with esbuild.
2. @angular-devkit/build-angular:browser-esbuild - Bundles a client-side application for use in a browser with esbuild.
3. @angular-devkit/build-angular:browser - Bundles a client-side application for use in a browser with webpack.
4. @angular-devkit/build-angular:ng-packagr - Builds an Angular library adhering to Angular Package Format.

Applications generated by ng new use @angular-devkit/build-angular:application by default. Libraries generated by ng generate library use @angular-devkit/build-angular:ng-packagr by default.

You can determine which builder is being used for a particular project by looking up the build target for that project

```json
{
  "projects": {
    "my-app": {
      "architect": {
        // `ng build` invokes the Architect target named `build`.
        "build": {
          "builder": "@angular-devkit/build-angular:application",
          …
        },
        "serve": { … }
        "test": { … }
        …
      }
    }
  }
}
```

 Output directory - The result of this build process is output to a directory (dist/${PROJECT_NAME} by default).

## Angular versions updates

Updating an Angular application to the latest version can sometimes be a complex process, especially when dealing with breaking changes or migrating to a new major version. The Angular team provides detailed guides to help developers through this process, ensuring a smooth transition when updating.

`Angular Update Guide`:- The official Angular Update Guide provides a comprehensive step-by-step guide for updating your Angular application. It’s tailored to your specific needs, depending on your current Angular version and the version you want to upgrade to.

- You can select:
   1. Current version of your Angular application.
   2. Target version you want to update to.
   3. Features you're using (e.g., Angular Material, RxJS, etc.).

The guide will then generate specific instructions, covering:

1. Code changes to make.
2. Configuration updates.
3. Dependency upgrades.

`ng update Command`:- Angular CLI has a built-in update tool that helps with updating your dependencies.

1. Update Angular CLI and Core:- ng update @angular/cli @angular/core
2. Update Other Dependencies: To update additional dependencies like @angular/material or rxjs:- ng update @angular/material,ng update rxjs
3. Update All Dependencies: You can update all packages (including Angular CLI, Angular core, and other dependencies) using:- ng update --all
4. Check Available Updates: If you want to check for all available updates without applying them, use:- ng update

Angular CLI ng update with Migration Strategy - For more complex migrations, you might need to follow specific strategies:

- Automatic Migrations: Angular CLI can handle some migrations automatically.
- Manual Migrations: For certain cases, Angular CLI might ask you to perform manual steps, especially for breaking changes.
