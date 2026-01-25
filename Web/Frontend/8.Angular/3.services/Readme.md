# Services

Service is a broad category encompassing any value, function, or feature that an application needs. A service is typically a class with a narrow, well-defined purpose. It should do something specific and do it well.
Angular distinguishes components from services to increase modularity and reusability.

Ideally, a component's job is to enable only the user experience. A component should present properties and methods for data binding to mediate between the view and the application logic. The view is what the template renders and the application logic is what includes the notion of a model.

A component should use services for tasks that don't involve the view or application logic. Services are good for tasks such as fetching data from the server, validating user input, or logging directly to the console. By defining such processing tasks in an injectable service class, you make those tasks available to any component. You can also make your application more adaptable by injecting different providers of the same kind of service, as appropriate in different circumstances.
Angular doesn't enforce these principles. Instead, Angular helps you follow these principles by making it easy to factor your application logic into services. In Angular, dependency injection makes those services available to components.

Angular service should follow single responsibility principle,and it should not cross boundaries between different Angular modules.Some can be:-

1. Access data from a backend API using HTTP protocol.
2. Interact with local storage of browser.
3. Error logging
4. Data transformations

Services can depend on other services.

For data or logic that isn't associated with a specific view, and that you want to share across components, you create a service class. A service class definition is immediately preceded by the @Injectable() decorator. The decorator provides the metadata that allows other providers to be injected as dependencies into your class.
Dependency injection (DI) lets you keep your component classes lean and efficient. They don't fetch data from the server, validate user input, or log directly to the console; they delegate such tasks to services.

A service in Angular is a reusable singleton object that encapsulates a specific functionality and can be injected into components or other services.Services let you define code or functionalities that are then accessible and reusable in many other components in the Angular project. It also helps you with the abstraction of logic and data that is hosted independently but can be shared across other components.

Components shouldn't fetch or save data directly and shouldn't knowingly present fake data. They should focus on presenting data and delegate data access to a service. Service is where all the remote API calls exist to retrieve and provide data to components.

Service is a broad category encompassing any value, function, or feature that an application needs. A service is typically a class with a narrow, well-defined purpose. It should do something specific and do it

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


## Dependency Injection

Dependency injection (DI) is the part of the Angular framework that provides components with access to services and other resources. Angular provides the ability for you to inject a service into a component to give that component access to the service.

Add the @Injectable() decorator to a service class so that Angular can inject it into a component as a dependency; the optional argument tells Angular where to register this class by default.

```ts
@Injectable({providedIn: 'root'})
export class HeroService {}
```

Something injectable must be registered with an injector before it can be created and used.

Register an injectable with a provider, an object that tells an injector how to obtain or create a dependency. For a service class, the provider is typically the class itself.
You don't have to create injectors. Under the hood Angular creates an application-wide root injector for you during the bootstrap process. It creates additional child injectors as needed.

An injectable dependency doesn't have to be a class — it could be a function, for example, or a value.

When Angular creates a new instance of a component class, it determines which services or other dependencies that component needs by looking at the constructor parameter types.
When Angular discovers that a component depends on a service, it first checks if the injector has any existing instances of that service. If a requested service instance doesn't yet exist, the injector makes one using the registered provider and adds it to the injector before returning the service to Angular.

When all requested services have been resolved and returned, Angular can call the component's constructor with those services as arguments.


# Dependency Injection

Dependency Injection is one of the fundamental concepts in Angular. DI is wired into the Angular framework and allows classes with Angular decorators, such as Components, Directives, Pipes, and Injectables, to configure dependencies that they need.

Dependency injection is a design pattern used in Angular to provide dependencies toa component from an external source. It helps in creating loosely coupled and
testable code.

Angular's Dependency Injection (DI) is a design pattern and mechanism for providing dependencies to components, services, and other objects in an application. It allows for the decoupling of components and the reusability of services. In Angular, DI is managed by the Angular injector, which is responsible for creating and providing instances of dependencies. DI is used by specifying dependencies in the constructor of a class and allowing Angular to resolve and inject the dependencies automatically.

Two main roles exist in the DI system: `dependency consumer` and `dependency provider`.

Angular facilitates the interaction between dependency consumers and dependency providers using an abstraction called Injector. When a dependency is requested, the injector checks its registry to see if there is an instance already available there. If not, a new instance is created and stored in the registry. Angular creates an application-wide injector (also known as "root" injector) during the application bootstrap process, as well as any other injectors as needed. In most cases you don't need to manually create injectors, but you should know that there is a layer that connects providers and consumers.

- Providing dependency
Imagine there is a class called HeroService that needs to act as a dependency in a component.

The first step is to add the @Injectable decorator to show that the class can be injected.

```ts
@Injectable()
class HeroService {}
```

The next step is to make it available in the DI by providing it. A dependency can be provided in multiple places:

At the Component level, using the providers field of the @Component decorator. In this case the HeroService becomes available to all instances of this component and other components and directives used in the template. For example:

```ts
@Component({
  standalone: true,
  selector: 'hero-list',
  template: '...',
  providers: [HeroService]
})
class HeroListComponent {}
```

When you register a provider at the component level, you get a new instance of the service with each new instance of that component.

Use the providers field of the ApplicationConfig object passed to the bootstrapApplication function to provide a service or other Injectable at the application level. In this scenario, the HeroService is available to all components, directives, and pipes declared in this NgModule or other NgModule which is within the same ModuleInjector applicable for this NgModule. When you register a provider in the ApplicationConfig, the same instance of a service is available to all applicable components, directives and pipes.

For NgModule based applications, use the providers field of the @NgModule decorator to provide a service or other Injectable available at the application level.

To understand all edge-cases, see Hierarchical injectors. For example:

```ts
export const appConfig: ApplicationConfig = {
    providers: [
      { provide: HeroService },
    ]
};
```

Then, in main.ts:

```ts
bootstrapApplication(AppComponent, appConfig)
```

At the application root level, which allows injecting it into other classes in the application. This can be done by adding the providedIn: 'root' field to the @Injectable decorator:

```ts
@Injectable({
  providedIn: 'root'
})
class HeroService {}
```

When you provide the service at the root level, Angular creates a single, shared instance of the HeroService and injects it into any class that asks for it. Registering the provider in the @Injectable metadata also allows Angular to optimize an app by removing the service from the compiled application if it isn't used, a process known as tree-shaking.

- Injecting a dependency:- The most common way to inject a dependency is to declare it in a class constructor. When Angular creates a new instance of a component, directive, or pipe class, it determines which services or other dependencies that class needs by looking at the constructor parameter types. For example, if the HeroListComponent needs the HeroService, the constructor can look like this:

```ts
@Component({ … })
class HeroListComponent {
  constructor(private service: HeroService) {}
}
```

Another option is to use the inject method:

```ts
@Component({ … })
class HeroListComponent {
  private service = inject(HeroService);
}
```

When Angular discovers that a component depends on a service, it first checks if the injector has any existing instances of that service. If a requested service instance doesn't yet exist, the injector creates one using the registered provider, and adds it to the injector before returning the service to Angular.

When all requested services have been resolved and returned, Angular can call the component's constructor with those services as arguments.

## Dependency injection (DI)

Dependency injection (DI) is the part of the Angular framework that provides components with access to services and other resources. Angular provides the ability for you to inject a service into a component to give that component access to the service.

Add the @Injectable() decorator to a service class so that Angular can inject it into a component as a dependency; the optional argument tells Angular where to register this class by default.

```ts
@Injectable({providedIn: 'root'})
export class HeroService {}
```

Something injectable must be registered with an injector before it can be created and used.

Register an injectable with a provider, an object that tells an injector how to obtain or create a dependency. For a service class, the provider is typically the class itself.

You don't have to create injectors. Under the hood Angular creates an application-wide root injector for you during the bootstrap process. It creates additional child injectors as needed.

An injectable dependency doesn't have to be a class — it could be a function, for example, or a value.

When Angular creates a new instance of a component class, it determines which services or other dependencies that component needs by looking at the constructor parameter types. For example, the constructor of HeroListComponent needs HeroService.

```ts
src/app/hero-list.component.ts (constructor)
constructor(private service: HeroService) { }
```

When Angular discovers that a component depends on a service, it first checks if the injector has any existing instances of that service. If a requested service instance doesn't yet exist, the injector makes one using the registered provider and adds it to the injector before returning the service to Angular.

When all requested services have been resolved and returned, Angular can call the component's constructor with those services as arguments.

- Providing services

You must register at least one provider of any service you are going to use. The provider can be part of the service's own metadata, making that service available everywhere, or you can register providers with specific components. You register providers in the metadata of the service (in the @Injectable() decorator) or @Component() metadata

By default, the Angular CLI command ng generate service registers a provider with the root injector for your service by including provider metadata in the @Injectable() decorator. The tutorial uses this method to register the provider of HeroService class definition.

```ts
hero.service.ts (provide in root)
@Injectable({providedIn: 'root'})
export class HeroService {}
```

When you provide the service at the root level, Angular creates a single, shared instance of HeroService and injects it into any class that asks for it. Registering the provider in the @Injectable() metadata also allows Angular to optimize an app by removing the service from the compiled application if it isn't used, a process known as tree-shaking.

When you register a provider at the component level, you get a new instance of the service with each new instance of that component. At the component level, register a service provider in the providers property of the @Component() metadata.

```ts
src/app/hero-list.component.ts (component providers)
@Component({
  standalone: true,
  selector:    'app-hero-list',
  templateUrl: './hero-list.component.html',
  imports:     [ NgFor, NgIf, HeroDetailComponent ],
  providers:  [ HeroService ]
})
```


The functionality of a module can be analyzed in presentational and business logic of a feature.Angular Components should only be responsible for handling the presentational logic and delegating business logic tasks to services.The Angular framework provides Angular services to components using built-in `dependency injection (DI)` mechanism.

The Angular DI framework uses special-purpose objects,called injectors,to hide much of complexity of providing dependencies to an Angular application.Components are not required to know any of the actual implementation of Angular service.They only need to ask for it from an injector.
