# Testing Angular Apps

In any software development process, Testing the application plays a vital role. If Bugs and crashes are not figured out and solved they can defame the development company as well as hurt the clients too. But, Angular’s architecture comes with built-in testability features. As soon as you create a new project with Angular CLI, two essential testing tools are installed.They are: Jasmine and Karma. Jasmine is the testing library which structures individual tests into specifications (“specs”) and suites. And Karma is the test runner, which enables the different browsers to run the tests mentioned by Jasmine and the browsers will finally report the test results back.

Angular testing involves writing tests to verify the behavior and functionality of Angular components, services, and other parts of the application. It includes unit testing, integration testing, and end-to-end testing.

Testing your Angular application helps you check that your application is working as you expect.

## Set up testing

The Angular CLI downloads and installs everything you need to test an Angular application with Jasmine testing framework.

The project you create with the CLI is immediately ready to test. Just run the ng test CLI command:

```sh
ng test
```

The ng test command builds the application in watch mode, and launches the Karma test runner.

The test output is displayed in the browser using Karma Jasmine HTML Reporter.
The ng test command is watching for changes.

## Configuration

The Angular CLI takes care of Jasmine and Karma configuration for you. It constructs the full configuration in memory, based on options specified in the angular.json file.

If you want to customize Karma, you can create a karma.conf.js by running the following command:

```bash
ng generate config karma
```

- Other test frameworks:- You can also unit test an Angular application with other testing libraries and test runners. Each library and runner has its own distinctive installation procedures, configuration, and syntax.

## Test file name and location

Inside the src/app folder the Angular CLI generated a test file for the AppComponent named app.component.spec.ts.
IMPORTANT: The test file extension must be .spec.ts so that tooling can identify it as a file with tests (also known as a spec file).

The app.component.ts and app.component.spec.ts files are siblings in the same folder. The root file names (app.component) are the same for both files.
Adopt these two conventions in your own projects for every kind of test file.

## Testing in continuous integration

One of the best ways to keep your project bug-free is through a test suite, but you might forget to run tests all the time.

Continuous integration (CI) servers let you set up your project repository so that your tests run on every commit and pull request.

To test your Angular CLI application in Continuous integration (CI) run the following command:

```sh
ng test --no-watch --no-progress --browsers=ChromeHeadless
```

## Code coverage

The Angular CLI can run unit tests and create code coverage reports. Code coverage reports show you any parts of your code base that might not be properly tested by your unit tests.

To generate a coverage report run the following command in the root of your project.

```bash
ng test --no-watch --code-coverage
```

When the tests are complete, the command creates a new /coverage directory in the project. Open the index.html file to see a report with your source code and code coverage values.

If you want to create code-coverage reports every time you test, set the following option in the Angular CLI configuration file, angular.json:

```json
"test": {
  "options": {
    "codeCoverage": true
  }
}
```

- Code coverage enforcement:- The code coverage percentages let you estimate how much of your code is tested. If your team decides on a set minimum amount to be unit tested, enforce this minimum with the Angular CLI.

For example, suppose you want the code base to have a minimum of 80% code coverage. To enable this, open the Karma test platform configuration file, karma.conf.js, and add the check property in the coverageReporter: key.

```js
coverageReporter: {
  dir: require('path').join(__dirname, './coverage/<project-name>'),
  subdir: '.',
  reporters: [
    { type: 'html' },
    { type: 'text-summary' }
  ],
  check: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80
    }
  }
}
```

The check property causes the tool to enforce a minimum of 80% code coverage when the unit tests are run in the project.

Basics of testing components - Basics of testing Angular components.
Component testing scenarios - Various kinds of component testing scenarios and use cases.
Testing attribute directives - How to test your attribute directives.
Testing pipes - How to test pipes.
Debugging tests - Common testing bugs.
Testing utility APIs - Angular testing features.

## Testing services

In an Angular application, Services are responsible for fetching, storing and processing data. Services are singletons, meaning there is only one instance of a Service during runtime. They are fit for central data storage, HTTP and WebSocket communication as well as data validation.

To check that your services are working as you intend, you can write tests specifically for them.

Services are often the smoothest files to unit test. Here are some synchronous and asynchronous unit tests of the ValueService written without assistance from Angular testing utilities.

```ts
// Straight Jasmine testing without Angular's testing support
  describe('ValueService', () => {
    let service: ValueService;
    beforeEach(() => {
      service = new ValueService();
    });
    it('#getValue should return real value', () => {
      expect(service.getValue()).toBe('real value');
    });
    it('#getObservableValue should return value from observable', (done: DoneFn) => {
      service.getObservableValue().subscribe((value) => {
        expect(value).toBe('observable value');
        done();
      });
    });
    it('#getPromiseValue should return value from a promise', (done: DoneFn) => {
      service.getPromiseValue().then((value) => {
        expect(value).toBe('promise value');
        done();
      });
    });
  });
```

- Services with dependencies:- Services often depend on other services that Angular injects into the constructor. In many cases, you can create and inject these dependencies by hand while calling the service's constructor.

- Testing services with the TestBed

Your application relies on Angular dependency injection (DI) to create services. When a service has a dependent service, DI finds or creates that dependent service. And if that dependent service has its own dependencies, DI finds-or-creates them as well.

As a service consumer, you don't worry about any of this. You don't worry about the order of constructor arguments or how they're created.

As a service tester, you must at least think about the first level of service dependencies but you can let Angular DI do the service creation and deal with constructor argument order when you use the TestBed testing utility to provide and create services.

- `Angular TestBed`:- TestBed is an Angular utility that creates a testing module for configuring and initializing the environment for unit testing Angular components.

## Testing pipes

An Angular Pipe is a special function that is called from a Component template. Its purpose is to transform a value: You pass a value to the Pipe, the Pipe computes a new value and returns it.

- Testing the TitleCasePipe

A pipe class has one method, transform, that manipulates the input value into a transformed output value. The transform implementation rarely interacts with the DOM. Most pipes have no dependence on Angular other than the @Pipe metadata and an interface.

## Testing component bindings

Angular processes all data bindings once for each JavaScript event cycle, from the root of the application component tree through all child components. Data binding plays an important role in communication between a template and its component, and is also important for communication between parent and child components.

## Testing directives

Directives are classes that add new behavior or modify the existing behavior to the elements in the template. Basically directives are used to manipulate the DOM, for example adding/removing the element from DOM or changing the appearance of the DOM elements.

## Testing component templates

With a component template , you can save and reuse component processes and properties and create components from them; template-based components inherit the template's properties and process.
