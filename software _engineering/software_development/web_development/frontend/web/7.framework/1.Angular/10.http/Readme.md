# HTTP Services

Most front-end applications need to communicate with a server over the HTTP protocol, to download or upload data and access other back-end services. Angular provides a client HTTP API for Angular applications, the HttpClient service class in @angular/common/http.

- Perform CRUD operations
- Extract reusable data service
- Properly handle diff kind of errors
- Build app with proper separation of service

- HTTP Client:- Angular HTTP Client is a module that provides an API to make HTTP requests to a server. It simplifies the process of communicating with a backend and handling responses.
The HTTP client service offers the following major features.

1. The ability to request typed response objects
2. Streamlined error handling
3. Testability features
4. Request and response interception

You can use JsonPlaceholder for testing backend services.<jsonplaceholder.typicode.com>

`Angular's HttpClient` is a built-in module that provides an API for making HTTP requests to a server. It supports various HTTP methods such as GET, POST, PUT, DELETE, and provides features like handling request headers, request/response interception, and error handling. It is used by injecting the HttpClient service into a component or service and invoking its methods to perform HTTP operations.

Angular's HttpClient is a built-in module that provides an API for making HTTP requests to a server. It supports various HTTP methods such as GET, POST, PUT, DELETE, and provides features like handling request headers, request/response interception, and error handling. It is used by injecting the HttpClient service into a component or service and invoking its methods to perform HTTP operations.


## HTTP: Setup for server communication

Before you can use HttpClient, you must add it to the application's root dependency injector.

Setting up HttpClient - Before you can use HttpClient in your app, you must configure it using dependency injection.

- `Providing HttpClient through dependency injection` - HttpClient is provided using the provideHttpClient helper function, which most apps include in the application providers in app.config.ts.

```ts
export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
  ]
};
```

If your app is using NgModule-based bootstrap instead, you can include provideHttpClient in the providers of your app's NgModule:

```ts
@NgModule({
  providers: [
    provideHttpClient(),
  ],
  // ... other application configuration
})
export class AppModule {}
```

You can then inject the HttpClient service as a dependency of your components, services, or other classes:-

```ts
@Injectable({providedIn: 'root'})
export class ConfigService {
  constructor(private http: HttpClient) {
    // This service can now make HTTP requests via `this.http`.
  }
}
```

- `Configuring features of HttpClient` - provideHttpClient accepts a list of optional feature configurations, to enable or configure the behavior of different aspects of the client. This section details the optional features and their usages.

withFetch:-

```ts
export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withFetch(),
    ),
  ]
};
```

Most apps do so in the providers array of bootstrapApplication() in main.ts.

```ts
import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';

import {AppComponent} from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule),
  ]
});
```

OR

```ts
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { CourseComponent } from './courses.component'
import { HttpModule } from '@aangular/common/http'

@NgModule({
   declarations: [
      AppComponent,
      CourseComponent
   ],
   imports: [
      BrowserModule,
      HttpModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule{}
```

You can then inject the HttpClient service as a dependency of an application class, as shown in the following ConfigService example.

```ts
app/config/config.service.ts (excerpt)
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }
}
```

## Making HTTP requests

Asynchronous HTTP requests allow Angular applications to interact with web services so that persistent data can be loaded into the application and changes can be sent to the server and saved.Requests are made using the `HttpClient` class, which is delivered as a service through dependency injection. This class provides an Angular-friendly wrapper around the browser’s XMLHttpRequest feature.
Using the Angular HTTP feature requires the use of Reactive Extensions Observable objects.

HttpClient has methods corresponding to the different HTTP verbs used to make requests, both to load data and to apply mutations on the server. Each method returns an RxJS Observable which, when subscribed, sends the request and then emits the results when the server responds.

Note: Observables created by HttpClient may be subscribed any number of times and will make a new backend request for each subscription.

Through an options object passed to the request method, various properties of the request and the returned response type can be adjusted.
The HttpClient class defines a set of methods for making HTTP requests, each of which uses a different HTTP verb:-
1. get(url) - This method sends a GET request to the specified URL.
2. post(url, body)  This method sends a POST request using the specified object as the body.
3. put(url, body) - This method sends a PUT request using the specified object as the body.
4. patch(url, body) - This method sends a PATCH request using the specified object as the body.
5. delete(url) - This method sends a DELETE request to the specified URL.
6. head(url) - This method sends a HEAD request, which has the same effect as a GET request except that the server will return only the headers and not the request body.
7. options(url) - This method sends an OPTIONS request to the specified URL.
8. request(method, url, options) - This method can be used to send a request with any verb.

`Setting Up the HTTP Request`:- Angular provides the ability to make asynchronous HTTP requests through the HttpClient class,which is defined in the @angular/common/http JavaScript module and is provided as a service in the HttpClientModule feature module. The data source declared a dependency on the HttpClient class using its constructor, like this:

```ts
constructor(private http: HttpClient, @Inject(REST_URL) private url: string) { }
```

The other constructor argument is used so that the URL that requests are sent to doesn’t have to be hardwired into the data source.The HttpClient object received through the constructor is used to make an HTTP GET request in the data source’s getData method, like this:

```ts
getData(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
}
```


- `Fetching JSON data`:- Fetching data from a backend often requires making a GET request using the HttpClient.get() method. This method takes two arguments: the string endpoint URL from which to fetch, and an optional options object to configure the request.

For example, to fetch configuration data from a hypothetical API using the HttpClient.get() method:

```ts
http.get<Config>('/api/config').subscribe(config => {
  // process the configuration.
});
```

```ts
http.post(this.url, data, {header: {}})
```

Note the generic type argument which specifies that the data returned by the server will be of type Config. This argument is optional, and if you omit it then the returned data will have type Object.

- Setting URL parameters:- Specify request parameters that should be included in the request URL using the params option.
Passing an object literal is the simplest way of configuring URL parameters:

```ts
http.get('/api/config', {
  params: {filter: 'all'},
}).subscribe(config => {
  // ...
});
```

Alternatively, pass an instance of HttpParams if you need more control over the construction or serialization of the parameters.
NOTE:- Instances of HttpParams are immutable and cannot be directly changed. Instead, mutation methods such as append() return a new instance of HttpParams with the mutation applied.

```ts
const baseParams = new HttpParams().set('filter', 'all');
http.get('/api/config', {
  params: baseParams.set('details', 'enabled'),
}).subscribe(config => {
  // ...
});
```

You can instantiate HttpParams with a custom HttpParameterCodec that determines how HttpClient will encode the parameters into the URL.

- Handling request failure:- There are two ways an HTTP request can fail:

1. A network or connection error can prevent the request from reaching the backend server.
2. The backend can receive the request but fail to process it, and return an error response.

## Errors

HttpClient captures both kinds of errors in an HttpErrorResponse which it returns through the Observable's error channel. Network errors have a status code of 0 and an error which is an instance of ProgressEvent. Backend errors have the failing status code returned by the backend, and the error response as the error. Inspect the response to identify the error's cause and the appropriate action to handle the error.

The RxJS library offers several operators which can be useful for error handling.You can use the catchError operator to transform an error response into a value for the UI. This value can tell the UI to display an error page or value, and capture the error's cause if necessary.

Sometimes transient errors such as network interruptions can cause a request to fail unexpectedly, and simply retrying the request will allow it to succeed. RxJS provides several retry operators which automatically re-subscribe to a failed Observable under certain conditions. For example, the retry() operator will automatically attempt to re-subscribe a specified number of times.

- Http Observables

Each request method on HttpClient constructs and returns an Observable of the requested response type. Understanding how these Observables work is important when using HttpClient.

HttpClient produces what RxJS calls "cold" Observables, meaning that no actual request happens until the Observable is subscribed. Only then is the request actually dispatched to the server. Subscribing to the same Observable multiple times will trigger multiple backend requests. Each subscription is independent.

TIP: You can think of HttpClient Observables as blueprints for actual server requests.

Once subscribed, unsubscribing will abort the in-progress request. This is very useful if the Observable is subscribed via the async pipe, as it will automatically cancel the request if the user navigates away from the current page. Additionally, if you use the Observable with an RxJS combinator like switchMap, this cancellation will clean up any stale requests.

Once the response returns, Observables from HttpClient usually complete (although interceptors can influence this).Because of the automatic completion, there is usually no risk of memory leaks if HttpClient subscriptions are not cleaned up. However, as with any async operation, we strongly recommend that you clean up subscriptions when the component using them is destroyed, as the subscription callback may otherwise run and encounter errors when it attempts to interact with the destroyed component.

TIP: Using the async pipe or the toSignal operation to subscribe to Observables ensures that subscriptions are disposed properly.

## Best practices

While HttpClient can be injected and used directly from components, generally we recommend you create reusable, injectable services which isolate and encapsulate data access logic. For example, this UserService encapsulates the logic to request data for a user by their id:-

```ts
@Injectable({providedIn: 'root'})
export class UserService {
  constructor(private http: HttpClient) {}
  getUser(id: string): Observable<User> {
    return this.http.get<User>(`/api/user/${id}`);
  }
}
```

Within a component, you can combine @if with the async pipe to render the UI for the data only after it's finished loading:

```ts
import { AsyncPipe } from '@angular/common';
@Component({
  imports: [AsyncPipe],
  template: `
    @if (user$ | async; as user) {
      <p>Name: {{ user.name }}</p>
      <p>Biography: {{ user.biography }}</p>
    }
  `,
})
export class UserProfileComponent {
  @Input() userId!: string;

  user$!: Observable<User>;

  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.user$ = this.userService.getUser(this.userId);
  }
}
```


----------

## Interceptors

`Angular Interceptor`:- Angular Interceptor is a feature that allows you to intercept HTTP requests or responses before they are sent or received. It is used to modify or handle requests globally in an application.

Interceptors are middleware that allows common patterns around retrying,caching,logging and authentication to be abstracted away from individual requests.

They are generally functions which you can run for each request, and have broad capabilities to affect the contents and overall flow of requests and responses. You can install multiple interceptors, which form an interceptor chain where each interceptor processes the request or response before forwarding it to the next interceptor in the chain.

You can use interceptors to implement a variety of common patterns, such as:

1. Adding authentication headers to outgoing requests to a particular API.
2. Retrying failed requests with exponential backoff.
3. Caching responses for a period of time, or until invalidated by mutations.
4. Customizing the parsing of responses.
5. Measuring server response times and log them.
6. Driving UI elements such as a loading spinner while network operations are in progress.
7. Collecting and batch requests made within a certain timeframe.
8. Automatically failing requests after a configurable deadline or timeout.
9. Regularly polling the server and refreshing results.

HttpClient supports two kinds of interceptors: functional and DI-based. Our recommendation is to use functional interceptors because they have more predictable behavior, especially in complex setups.
HttpClient supports a form of middleware known as interceptors.


**Defining an Interceptor**:-The basic form of an interceptor is a function which receives the outgoing HttpRequest and a next function representing the next processing step in the interceptor chain.
For example, this loggingInterceptor will log the outgoing request URL to console.log before forwarding the request:

```ts
export function loggingInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  console.log(req.url);
  return next(req);
}
```

In order for this interceptor to actually intercept requests, you must configure HttpClient to use it.

- Configuring interceptors:- You declare the set of interceptors to use when configuring HttpClient through dependency injection, by using the withInterceptors feature:

```ts
bootstrapApplication(AppComponent, {providers: [
  provideHttpClient(
    withInterceptors([loggingInterceptor, cachingInterceptor]),
  )
]});
```

The interceptors you configure are chained together in the order that you've listed them in the providers. In the above example, the loggingInterceptor would process the request and then forward it to the cachingInterceptor.

- Intercepting response events:- An interceptor may transform the Observable stream of HttpEvents returned by next in order to access or manipulate the response. Because this stream includes all response events, inspecting the .type of each event may be necessary in order to identify the final response object

```ts
export function loggingInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  return next(req).pipe(tap(event => {
    if (event.type === HttpEventType.Response) {
      console.log(req.url, 'returned a response with status', event.status);
    }
  }));
}
```

NB:- Interceptors naturally associate responses with their outgoing requests, because they transform the response stream in a closure that captures the request object.

- Modifying requests:- Most aspects of HttpRequest and HttpResponse instances are immutable, and interceptors cannot directly modify them. Instead, interceptors apply mutations by cloning these objects using the .clone() operation, and specifying which properties should be mutated in the new instance. This might involve performing immutable updates on the value itself (like HttpHeaders or HttpParams).

```ts
const reqWithHeader = req.clone({
  headers: req.headers.set('X-New-Header', 'new header value'),
});
```

This immutability allows most interceptors to be idempotent if the same HttpRequest is submitted to the interceptor chain multiple times. This can happen for a few reasons, including when a request is retried after failure.

**Dependency injection in interceptors**:- Interceptors are run in the injection context of the injector which registered them, and can use Angular's inject API to retrieve dependencies.
For example, suppose an application has a service called AuthService, which creates authentication tokens for outgoing requests. An interceptor can inject and use this service:

```ts
export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {
  // Inject the current `AuthService` and use it to get an authentication token:
  const authToken = inject(AuthService).getAuthToken();
  // Clone the request to add the authentication header.
  const newReq = req.clone({
    headers: req.headers.append('X-Authentication-Token', authToken),
  });
  return next(newReq);
}
```

- Request and response metadata:- Often it's useful to include information in a request that's not sent to the backend, but is specifically meant for interceptors. HttpRequests have a .context object which stores this kind of metadata as an instance of HttpContext. This object functions as a typed map, with keys of type HttpContextToken.

 Defining context tokens:- To store whether the caching interceptor should cache a particular request in that request's .context map, define a new HttpContextToken to act as a key:

```ts
export const CACHING_ENABLED = new HttpContextToken<boolean>(() => true);
```

 Reading the token in an interceptor

An interceptor can then read the token and choose to apply caching logic or not based on its value:

```ts
export function cachingInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  if (req.context.get(CACHING_ENABLED)) {
    // apply caching logic
    return ...;
  } else {
    // caching has been disabled for this request
    return next(req);
  }
}
```

 Setting context tokens when making a request

When making a request via the HttpClient API, you can provide values for HttpContextTokens:

```ts
const data$ = http.get('/sensitive/data', {
  context: new HttpContext().set(CACHING_ENABLED, false),
});
```

The request context is mutable - Unlike other properties of HttpRequests, the associated HttpContext is mutable. If an interceptor changes the context of a request that is later retried, the same interceptor will observe the context mutation when it runs again. This is useful for passing state across multiple retries if needed.

## Synthetic responses

Most interceptors will simply invoke the next handler while transforming either the request or the response, but this is not strictly a requirement. This section discusses several of the ways in which an interceptor may incorporate more advanced behavior.

Interceptors are not required to invoke next. They may instead choose to construct responses through some other mechanism, such as from a cache or by sending the request through an alternate mechanism.

```ts
const resp = new HttpResponse({
  body: 'response body',
});
```

## DI-based interceptors

HttpClient also supports interceptors which are defined as injectable classes and configured through the DI system. The capabilities of DI-based interceptors are identical to those of functional interceptors, but the configuration mechanism is different.

```ts
@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, handler: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Request URL: ' + req.url);
    return handler.handle(req);
  }
}
```

DI-based interceptors are configured through a dependency injection multi-provider:

```ts
bootstrapApplication(AppComponent, {providers: [
  provideHttpClient(
    // DI-based interceptors must be explicitly enabled.
    withInterceptorsFromDi(),
  ),
  {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true},
]});
```

DI-based interceptors run in the order that their providers are registered. In an app with an extensive and hierarchical DI configuration, this order can be very hard to predict.

`Angular's HttpClientInterceptor` is an interface that allows for intercepting and modifying HTTP requests and responses made with the HttpClient module.
Interceptors can be used to add headers, handle authentication, modify the request or response payload, or perform other actions. Interceptors are used by implementing
the HttpInterceptor interface and registering the interceptor in the application's module or using the providedIn property to automatically provide the interceptor.


## updates

Angular 21 makes HttpClient be built in by default.It no longer requires a provider function.It is now provided un the root,so it is automatically available across your app.
You can still call a provider function manually to use additional options.E.g when registering HTTP interceptors.
As a result we can now immediately import and start using HttpClient or HttpResource.
