# Services

A service in Angular is a reusable singleton object that encapsulates a specific functionality and can be injected into components or other services.Services let you define code or functionalities that are then accessible and reusable in many other components in the Angular project. It also helps you with the abstraction of logic and data that is hosted independently but can be shared across other components.

Components shouldn't fetch or save data directly and shouldn't knowingly present fake data. They should focus on presenting data and delegate data access to a service. Service is where all the remote API calls exist to retrieve and provide data to components.

Service is a broad category encompassing any value, function, or feature that an application needs. A service is typically a class with a narrow, well-defined purpose. It should do something specific and do it well.

Angular distinguishes components from services to increase modularity and reusability.

Ideally, a component's job is to enable only the user experience. A component should present properties and methods for data binding to mediate between the view and the application logic. The view is what the template renders and the application logic is what includes the notion of a model.

A component should use services for tasks that don't involve the view or application logic. Services are good for tasks such as fetching data from the server, validating user input, or logging directly to the console. By defining such processing tasks in an injectable service class, you make those tasks available to any component. You can also make your application more adaptable by injecting different providers of the same kind of service, as appropriate in different circumstances.

Angular doesn't enforce these principles. Instead, Angular helps you follow these principles by making it easy to factor your application logic into services. In Angular, dependency injection makes those services available to components.

Service examples
Here's an example of a service class that logs to the browser console.

```ts
src/app/logger.service.ts (class)
export class Logger {
  log(msg: any)   { console.log(msg); }
  error(msg: any) { console.error(msg); }
  warn(msg: any)  { console.warn(msg); }
}
```

Services can depend on other services. For example, here's a HeroService that depends on the Logger service, and also uses BackendService to get heroes. That service in turn might depend on the HttpClient service to fetch heroes asynchronously from a server.

```ts
src/app/hero.service.ts (class)
export class HeroService {
  private heroes: Hero[] = [];

  constructor(
    private backend: BackendService,
    private logger: Logger) { }

  getHeroes() {
    this.backend.getAll(Hero).then( (heroes: Hero[]) => {
      this.logger.log(`Fetched ${heroes.length} heroes.`);
      this.heroes.push(...heroes); // fill cache
    });
    return this.heroes;
  }
}
```

`@Injectable`:- is used to annotate a service class in Angular. It allows the class to be injected with dependencies and enables the Angular dependency
injection system to create and provide instances of the service.

## ngZone in Angular

ngZone is a service in Angular that provides a way to execute code outside or inside the Angular zone. It helps in managing change detection and optimizing
performance.
Angular's ngZone service provides a way to execute code within or outside the Angular zone. The Angular zone is an execution context that tracks asynchronous
operations and triggers change detection when needed. The ngZone service is used to manage change detection and optimize the performance of the application. It is
used by injecting the ngZone service into a component or service and using its run() method to execute code within the Angular zone.

The "ngZone" service provides a way to execute code within or outside the Angular zone. It is used to handle change detection and trigger Angular's rendering cycle.

To generate a service using CLI:-

```sh
ng generate service <service-name>
```
