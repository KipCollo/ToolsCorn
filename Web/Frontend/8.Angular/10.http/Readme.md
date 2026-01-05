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

## HTTP: Setup for server communication

Before you can use HttpClient, you must add it to the application's root dependency injector.

Setting up HttpClient - Before you can use HttpClient in your app, you must configure it using dependency injection.

- Providing HttpClient through dependency injection - HttpClient is provided using the provideHttpClient helper function, which most apps include in the application providers in app.config.ts.

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

- Configuring features of HttpClient - provideHttpClient accepts a list of optional feature configurations, to enable or configure the behavior of different aspects of the client. This section details the optional features and their usages.

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

HttpClient has methods corresponding to the different HTTP verbs used to make requests, both to load data and to apply mutations on the server. Each method returns an RxJS Observable which, when subscribed, sends the request and then emits the results when the server responds.

Note: Observables created by HttpClient may be subscribed any number of times and will make a new backend request for each subscription.

Through an options object passed to the request method, various properties of the request and the returned response type can be adjusted.

- Fetching JSON data:- Fetching data from a backend often requires making a GET request using the HttpClient.get() method. This method takes two arguments: the string endpoint URL from which to fetch, and an optional options object to configure the request.

For example, to fetch configuration data from a hypothetical API using the HttpClient.get() method:

```ts
http.get<Config>('/api/config').subscribe(config => {
  // process the configuration.
});
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

HttpClient captures both kinds of errors in an HttpErrorResponse which it returns through the Observable's error channel. Network errors have a status code of 0 and an error which is an instance of ProgressEvent. Backend errors have the failing status code returned by the backend, and the error response as the error. Inspect the response to identify the error's cause and the appropriate action to handle the error.

The RxJS library offers several operators which can be useful for error handling.

You can use the catchError operator to transform an error response into a value for the UI. This value can tell the UI to display an error page or value, and capture the error's cause if necessary.

Sometimes transient errors such as network interruptions can cause a request to fail unexpectedly, and simply retrying the request will allow it to succeed. RxJS provides several retry operators which automatically re-subscribe to a failed Observable under certain conditions. For example, the retry() operator will automatically attempt to re-subscribe a specified number of times.

- Http Observables

Each request method on HttpClient constructs and returns an Observable of the requested response type. Understanding how these Observables work is important when using HttpClient.

HttpClient produces what RxJS calls "cold" Observables, meaning that no actual request happens until the Observable is subscribed. Only then is the request actually dispatched to the server. Subscribing to the same Observable multiple times will trigger multiple backend requests. Each subscription is independent.

TIP: You can think of HttpClient Observables as blueprints for actual server requests.

Once subscribed, unsubscribing will abort the in-progress request. This is very useful if the Observable is subscribed via the async pipe, as it will automatically cancel the request if the user navigates away from the current page. Additionally, if you use the Observable with an RxJS combinator like switchMap, this cancellation will clean up any stale requests.

Once the response returns, Observables from HttpClient usually complete (although interceptors can influence this).

Because of the automatic completion, there is usually no risk of memory leaks if HttpClient subscriptions are not cleaned up. However, as with any async operation, we strongly recommend that you clean up subscriptions when the component using them is destroyed, as the subscription callback may otherwise run and encounter errors when it attempts to interact with the destroyed component.

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

`Angular's HttpClient` is a built-in module that provides an API for making HTTP requests to a server. It supports various HTTP methods such as GET, POST, PUT, DELETE, and provides features like handling request headers, request/response interception, and error handling. It is used by injecting the HttpClient service into a component or service and invoking its methods to perform HTTP operations.

Angular's HttpClient is a built-in module that provides an API for making HTTP requests to a server. It supports various HTTP methods such as GET, POST, PUT, DELETE, and provides features like handling request headers, request/response interception, and error handling. It is used by injecting the HttpClient service into a component or service and invoking its methods to perform HTTP operations.
