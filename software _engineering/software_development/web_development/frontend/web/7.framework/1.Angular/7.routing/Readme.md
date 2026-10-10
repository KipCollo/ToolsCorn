# Routing

## SPA

SPA is a single page applications.It does not make requests to server for every URL requests.You can use modern framework to create SPAs i.e Angular.

Angular applications follow SPA architecture,where different views of web page can be activated according to browser URL.Any changes to that URL can be intercepted by Angular router and translated to routes that can activate a particular Angular component

Angular has Routing functionality to create SPA.Also it offers SSR(Server Side Rendering) which supports SPA

Scully is static website generator based on Jamstack architecture.It can cooperate with Angular router to prerender the content of an Angular application according to each route.

`Why is routing necessary in a SPA`:-

When you navigate to a URL in your web browser, the browser normally makes a network request to a web server and displays the returned HTML page. When you navigate to a different URL, such as clicking a link, the browser makes another network request and replaces the entire page with a new one.

A single-page application (SPA) differs in that the browser only makes a request to a web server for the first page, the index.html. After that, a client-side router takes over, controlling which content displays based on the URL. When a user navigates to a different URL, the router updates the page's content in place without triggering a full-page reload.

## THEORY AND CONTEXT

In old days,client-side applications were highly coupled with underlying server infrastructure.Much machinery was involved when we wanted to visit the page of a website using URL.The browser would send requested URL to the server,and the server should response with matching HTML file for that URL.This was complicated process that would result in delays and varying round-trip times.

Modern web applications eliminate these problems using SPA architecture.A client needs to request a single HTML file only once from the server.Any subsequent changes to URL of the browser are handled internally from client infrastructure.In Angular,the router is responsible for intercepting in-app URL requests and handling them according to a defined route configuration.

Jamstack is a hot,emerging technology that allows us to create fast and secure web applications.Can be used for any application type,i.e e-commerce website,SaaS web application or personal blog.Jamstack architecture is based on the pillars:-

1. Performance - Pages are generated and prerendered during production,eliminating need to wait for content to load.
2. Scaling - Content is a static files that can be served from anywhere,even from Content Delivery Network(CDN) provider that improves performance of application.
3. Security - The serverless nature of server side processes and fact that content is already static eliminates potential attacks that target server infrastructures.

Scully is first static website generator for Angular that embraces Jamstack approach.It essentially generates pages of Angular application during build time to be immediately available when requested

## Angular Routing

Angular Router (@angular/router) is the official library for managing navigation in Angular applications and a core part of the framework. It is included by default in all projects created by Angular CLI.
Routing in Angular allows the users to create a single-page application with multiple views and navigation between them. Users can switch between these views without losing the application state and properties.

@angular/router Implements the Angular Router service , which enables navigation from one view to the next as users perform application tasks.The Router enables navigation by interpreting a browser URL as an instruction to change the view.

Angular Router is a built-in module in Angular that provides navigation and routing functionality. It allows developers to create single-page applications with multiple views and handle navigation between them.Defines the Route object that maps a URL path to a component, and the RouterOutlet directive that you use to place a routed view in a template, as well as a complete API for configuring, querying, and controlling the router state.Import RouterModule to use the Router service in your app.
It allows for defining routes, navigating between routes, and handling route parameters and query parameters. The Router module is used by importing the RouterModule in the application's module and configuring the routes using the RouterModule.forRoot() method. The Router module is then used by injecting the Router service into components and using its methods to navigate and interact with the routing system.

`How Angular manages routing`:-

Routing in Angular is comprised of three primary parts:

1. Routes define which component displays when a user visits a specific URL.Configuration that maps URLs to components.
2. RouterOutlets are placeholders in your templates that dynamically load and render components based on the active route.A directive that acts as a placeholder for rendering components.
3. RouterLinks provide a way for users to navigate between different routes in your application without triggering a full page reload.A directive used to navigate between routes.
4. Router: The service that manages navigation.

In addition, the Angular Routing library offers additional functionality such as:

- Nested routes
- Programmatic navigation
- Route params, queries and wildcards
- Activated route information with ActivatedRoute
- View transition effects
- Navigation guards

1. @angular/router:- Implements the Angular Router service , which enables navigation from one view to the next as users perform application tasks.
2. @angular/router/testing:- Supplies a testing module for the Angular Router subsystem.
3. @angular/router/upgrade:- Provides support for upgrading routing applications from Angular JS to Angular.


The following command uses the Angular CLI to generate a basic Angular application with application routes. The application name in the following example is routing-app.

```bash
ng new routing-app --routing
```

When we enable routing in an Angular application, the Angular CLI imports several artifacts from the @angular/router npm package in our application:

- It creates the app-routing.module.ts file, which is the main routing module of our application:

```ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [];
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
```

- It imports AppRoutingModule into the main module of our application,app.module.ts:

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [
  AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

**base href** - This guide works with a CLI-generated Angular application. If you are working manually, make sure that you have `base href="/"` in the `head` of your index.html file. This assumes that the app folder is the application root, and uses "/".



### Defining routes

Routes serve as the fundamental building blocks for navigation within an Angular app.
In Angular, a route is an object that defines which component should render for a specific URL path or pattern, as well as additional configuration options about what happens when a user navigates to that URL.

Most projects define routes in a separate file that contains routes in the filename.
- Set up a Routes array for your routes.The Angular CLI performs this step automatically.Defined in src/app/app.routes.ts.

```ts
import { Routes } from '@angular/router';
export const routes: Routes = [];
```

Define your routes in your Routes array:- Each route in this array is a JavaScript object that contains two properties. The first property, path, defines the URL path for the route. The second property, component, defines the component Angular should use for the corresponding path.

```ts
const routes: Routes = [
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
];
```


- **Adding the router to your application**:-

RouterModule:- Adds directives and providers for in-app navigation among views defined in an application. Use the Angular Router service to declaratively specify application states and manage state transitions.

```ts
const routes: Routes = [];
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
```

Import AppRoutingModule into the main module of our application,app.module.ts:

```ts
@NgModule({
  declarations: [
  AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```


When bootstrapping an Angular application without the Angular CLI, you can pass a configuration object that includes a providers array.
Inside of the providers array, you can add the Angular router to your application by adding a provideRouter function call with your routes.

- Import the routes into app.config.ts and add it to the provideRouter function.- The Angular CLI performs this step for you. However, if you are creating an application manually or working with an existing, non-CLI application, verify that the imports and configuration are correct. The following is the default ApplicationConfig using the CLI.

```ts
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
```


**Route URLs path**:-

- `Static URL Paths`:- Static URL Paths refer to routes with predefined paths that don't change based on dynamic parameters. These are routes that match a path string exactly and have a fixed outcome.
Examples of this include:- "/admin", "/settings/account".

-  `Paths with Route Parameters`:- Parameterized URLs allow you to define dynamic paths that allow multiple URLs to the same component while dynamically displaying data based on parameters in the URL.
You can define this type of pattern by adding parameters to your route’s path string and prefixing each parameter with the colon (:) character.

```ts
const routes: Routes = [
  { path: 'user/:id', component: UserProfile }
];
```

This component can then read the id parameter and use it to perform additional work, such as fetching data.
Valid route parameter names must start with a letter (a-z, A-Z) and can only contain:
1. Letters (a-z, A-Z)
2. Numbers (0-9)
3. Underscore (_)
4. Hyphen (-)

You can also define paths with multiple parameters:

```ts
const routes: Routes = [
  { path: 'user/:id/:social-media', component: SocialMediaFeed },
  { path: 'user/:id/', component: UserProfile },
];
```

- `wildcard`:- A well-functioning application should gracefully handle when users attempt to navigate to a part of your application that does not exist. To add this functionality to your application, you set up a wildcard route. The Angular router selects this route any time the requested URL doesn't match any router paths.
To set up a wildcard route, add the following code to your routes definition.

```ts
{ path: '**', component: &lt;component-name&gt; }
```

The two asterisks, **, indicate to Angular that this routes definition is a wildcard route. For the component property, you can define any component in your application. Common choices include an application-specific PageNotFoundComponent, which you can define to display a 404 page to your users; or a redirect to your application's main component. A wildcard route is the last route because it matches any URL. For more detail on why order matters for routes, see Route order.

Displaying a 404 page - To display a 404 page, set up a wildcard route with the component property set to the component you'd like to use for your 404 page as follows:

```ts
const routes: Routes = [
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];
```

The last route with the path of ** is a wildcard route. The router selects this route if the requested URL doesn't match any of the paths earlier in the list and sends the user to the PageNotFoundComponent.


**Matching URLs**:- When you define routes, the order is important because Angular uses a first-match wins strategy. This means that once Angular matches a URL with a route path, it stops checking any further routes. As a result, always put more specific routes before less specific routes.

Route order- The order of routes is important because the Router uses a first-match wins strategy when matching routes, so more specific routes should be placed above less specific routes. List routes with a static path first, followed by an empty path route, which matches the default route. The wildcard route comes last because it matches every URL and the Router selects it only if no other routes match first.


**Page titles**:- You can associate a title with each route. Angular automatically updates the page title when a route activates. Always define appropriate page titles for your application, as these titles are necessary to create an accessible experience.

```ts
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home Page'
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About Us'
  },
];
```

The page title property can be set dynamincally to a resolver function using ResolveFn.

```ts
const titleResolver: ResolveFn<string> = (route) => route.queryParams['id'];
const routes: Routes = [
   ...
  {
    path: 'products',
    component: ProductsComponent,
    title: titleResolver,
  }
];
```

Route titles can also be set via a service extending the TitleStrategy abstract class. By default, Angular uses the DefaultTitleStrategy.

`Using TitleStrategy for page titles`:- For advanced scenarios where you need centralized control over how the document title is composed, implement a TitleStrategy.
TitleStrategy is a token you can provide to override the default title strategy used by Angular. You can supply a custom TitleStrategy to implement conventions such as adding an application suffix, formatting titles from breadcrumbs, or generating titles dynamically from route data.

```ts
@Injectable()
export class AppTitleStrategy extends TitleStrategy {
  private readonly title = inject(Title);
  updateTitle(snapshot: RouterStateSnapshot): void {
    // PageTitle is equal to the "Title" of a route if it's set
    // If its not set it will use the "title" given in index.html
    const pageTitle = this.buildTitle(snapshot) || this.title.getTitle();
    this.title.setTitle(`MyAwesomeApp - ${pageTitle}`);
  }
}
```

To use the custom strategy, provide it with the TitleStrategy token at the application level:

```ts
export const appConfig = {
  providers: [
    provideRouter(routes),
    { provide: TitleStrategy, useClass: AppTitleStrategy },
  ],
};
```

**Redirects**:- To set up a redirect, configure a route with the path you want to redirect from, the component you want to redirect to, and a pathMatch value that tells the router how to match the URL.

```ts
const routes: Routes = [
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
  { path: '',   redirectTo: '/first-component', pathMatch: 'full' }, // redirect to `first-component`
];
```

**Nested Routes**:- Nested routes, also known as child routes, are a common technique for managing more complex navigation routes where a component has a sub-view that changes based on the URL.
You can add child routes to any route definition with the children property:

```ts
const routes: Routes = [
  {
    path: 'product/:id',
    component: ProductComponent,
    children: [
      {
        path: 'info',
        component: ProductInfoComponent
      },
      {
        path: 'reviews',
        component: ProductReviewsComponent
      }
    ]
  }
]
```

The children property accepts an array of Route objects.

To display child routes, the parent component (ProductComponent in the example above) includes its own <router-outlet>.

```html
<!-- ProductComponent -->
<article>
  <h1>Product {{ id }}</h1>
  <router-outlet />
</article>
```

After adding child routes to the configuration and adding a <router-outlet> to the component, navigation between URLs that match the child routes updates only the nested outlet.


```ts
//course-route.module.ts
const routes: Routes = [
  { path: '', component: CourseComponent },
  { path: 'featured', component: FeaturedComponent }
];
@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class CourseRouteModule{}
```

```ts
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent}
  { path: 'courses', loadChildren: () => import('./courses/course-route.module').then(mod => mod.CourseRouteModule) }
];
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
```

Standalone components:-

```ts
//course-route.ts
export const COURSE_ROUTES: Route[] = [
  { path: '', component: CourseComponent },
  { path: 'featured', component: FeaturedComponent }
];
```

```ts
//app-route.ts
export const APP_ROUTES: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'about', loadComponent: () => import('./about/about.component').then(comp => comp.AboutComponent)}//available for standalone only
  { path: 'courses', loadChildren: () => import('./courses/course-route').then(mod => mod.COURSE_ROUTES) }
];
```

```ts
providers: [
  provideRouter(APP_ROUTES)
]
```

### Route outlets

The RouterOutlet directive is a placeholder that marks the location where the router should render the component for the current URL.

```html
<app-header />
<router-outlet />  <!-- Angular inserts your route content here -->
<app-footer />
```

When displaying a route, the <router-outlet> element remains present in the DOM as a reference point for future navigations. Angular inserts routed content just after the outlet element as a sibling.

```html
<!-- Contents of the component's template -->
<app-header />
<router-outlet />
<app-footer />

<!-- Content rendered on the page when the user visits /admin -->
<app-header>...</app-header>
<router-outlet></router-outlet>
<app-admin-page>...</app-admin-page>
<app-footer>...</app-footer>
```


**Nesting routes with child routes**:- As your application grows more complex, you might want to create routes that are relative to a component other than your root component. This enables you to create experiences where only part of the application changes when the URL changes, as opposed to the users feeling like the entire page is refreshed.

These types of nested routes are called child routes. This means you're adding a second <router-outlet> to your app, because it is in addition to the <router-outlet> in AppComponent.

```html
<h1>Settings</h1>
<nav>
  <ul>
    <li><a routerLink="profile">Profile</a></li>
    <li><a routerLink="security">Security</a></li>
  </ul>
</nav>
<router-outlet />
```

A child route is like any other route, in that it needs both a path and a component. The one difference is that you place child routes in a children array within the parent route.


**Outlet lifecycle events**:- There are four lifecycle events that a router outlet can emit:

1. activate	- When a new component is instantiated
2. deactivate	- When a component is destroyed
3. attach	- When the RouteReuseStrategy instructs the outlet to attach the subtree
4. detach	- When the RouteReuseStrategy instructs the outlet to detach the subtree



### Navigating to routes

The RouterLink directive is Angular's declarative approach to navigation. It allows you to use standard anchor elements (<a>) that seamlessly integrate with Angular's routing system.

Instead of using regular anchor elements <a> with an href attribute, you add a RouterLink directive with the appropriate path in order to leverage Angular routing.

```ts
import {RouterLink} from '@angular/router';
@Component({
  template: `
    <nav>
      <a routerLink="/user-profile">User profile</a>
      <a routerLink="/settings">Settings</a>
    </nav>
  `
  imports: [RouterLink],
  ...
})
export class App {}
```


- **Absolute & relative links**:- Relative URLs in Angular routing allow you to define navigation paths relative to the current route's location. This is in contrast to absolute URLs which contain the full path with the protocol (e.g., http://) and the root domain (e.g., google.com).

```html
<!-- Absolute URL -->
<a href="https://www.angular.dev/essentials">Angular Essentials Guide</a>

<!-- Relative URL -->
<a href="/essentials">Angular Essentials Guide</a>
```

Generally speaking, relative URLs are preferred because they are more maintainable across applications because they don’t need to know their absolute position within the routing hierarchy.

Angular routing has two syntaxes for defining relative URLs: strings and arrays.

```html
<a routerLink="dashboard">Dashboard</a>
<a [routerLink]="['dashboard']">Dashboard</a>
```


**Programmatic navigation to routes**:- While RouterLink handles declarative navigation in templates, Angular provides programmatic navigation for scenarios where you need to navigate based on logic, user actions, or application state. By injecting Router, you can dynamically navigate to routes, pass parameters, and control navigation behavior in your TypeScript code.

`router.navigate()`:- You can use the router.navigate() method to programmatically navigate between routes by specifying a URL path array.

```ts
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  template: `
    <button (click)="navigateToProfile()">View Profile</button>
  `
})
export class AppDashboard {
  private router = inject(Router);
  navigateToProfile() {
    // Standard navigation
    this.router.navigate(['/profile']);
    // With route parameters
    this.router.navigate(['/users', userId]);
    // With query parameters
    this.router.navigate(['/search'], {
      queryParams: { category: 'books', sort: 'price' }
    });
    // With matrix parameters
    this.router.navigate(['/products', { featured: true, onSale: true }]);
  }
}
```

router.navigate() supports both simple and complex routing scenarios, allowing you to pass route parameters, query parameters, and control navigation behavior.

`router.navigateByUrl()` - The router.navigateByUrl() method provides a direct way to programmatically navigate using URL path strings rather than array segments. This method is ideal when you have a full URL path and need to perform absolute navigation, especially when working with externally provided URLs or deep linking scenarios.

```ts
// Standard route navigation
router.navigateByUrl('/products');
// Navigate to nested route
router.navigateByUrl('/products/featured');
// Complete URL with parameters and fragment
router.navigateByUrl('/products/123?view=details#reviews');
// Navigate with query parameters
router.navigateByUrl('/search?category=books&sortBy=price');
// With matrix parameters
router.navigateByUrl('/sales-awesome;isOffer=true;showModal=false')
```


### Route state

Angular Router allows you to read and use information associated with a route to create responsive and context-aware components.


- **Get information about the current route with ActivatedRoute**:- ActivatedRoute is a service from @angular/router that provides all the information associated with the current route.
The ActivatedRoute can provide different information about the route. Some common properties include:

1. url - An Observable of the route paths,represented as an array of strings for each part of route path.
2. data - An Observable that contains the data object provided for the route. Also contains any resolved values from the resolve guard.
3. params	- An Observable that contains the required and optional parameters specific to the route.
4. queryParams	- An Observable that contains the query parameters available to all routes.


- **route snapshots**:- Page navigations are events over time, and you can access the router state at a given time by retrieving a route snapshot.
Route snapshots contain essential information about the route, including its parameters, data, and child routes. In addition, snapshots are static and will not reflect future changes.


- **Reading parameters on a route**:- There are two types of parameters that developers can utilize from a route: route and query parameters.

`Route Parameters`:- Route parameters allow you to pass data to a component through the URL. This is useful when you want to display specific content based on an identifier in the URL, like a user ID or a product ID.
You can define route parameters by prefixing the parameter name with a colon (:).

```ts
const routes: Routes = [
  { path: 'product/:id', component: ProductComponent }
];
```

You can access parameters by subscribing to route.params.

```ts
@Component({
  selector: 'app-product-detail',
  template: `<h1>Product Details: {{ productId() }}</h1>`,
})

productId = signal('');
private activatedRoute = inject(ActivatedRoute)

this.activatedRoute.params.subscribe((params) => {
  this.productId.set(params['id']);
});
```


`Query Parameters`:- Query parameters provide a flexible way to pass optional data through URLs without affecting the route structure. Unlike route parameters, query parameters can persist across navigation events and are perfect for handling filtering, sorting, pagination, and other stateful UI elements.

You can access query parameters with route.queryParams.


`Matrix Parameters`:- Matrix parameters are optional parameters that belong to a specific URL segment, rather than applying to the entire route. Unlike query parameters which appear after a ? and apply globally, matrix parameters use semicolons (;) and are scoped to individual path segments.

Matrix parameters are useful when you need to pass auxiliary data to a specific route segment without affecting the route definition or matching behavior. Like query parameters, they don't need to be defined in your route configuration.

**Detect active current route with RouterLinkActive**:- You can use the RouterLinkActive directive to dynamically style navigation elements based on the current active route. This is common in navigation elements to inform users what the active route is.This makes sure that visually impaired users(which may not perceive different styling applied) can also identify active button.


```html
<nav>
  <a class="button"
     routerLink="/about"
     routerLinkActive="active-button"
     ariaCurrentWhenActive="page">
    About
  </a> 
  <a class="button"
     routerLink="/settings"
     routerLinkActive="active-button"
     ariaCurrentWhenActive="page">
    Settings
  </a>
</nav>
```


`Route matching strategy`:- By default, RouterLinkActive considers any ancestors in the route a match.

```html
<a [routerLink]="['/user/jane']" routerLinkActive="active-link"> User </a>
<a [routerLink]="['/user/jane/role/admin']" routerLinkActive="active-link"> Role </a>
```

When the user visits /user/jane/role/admin, both links would have the active-link class.


`Only apply RouterLinkActive on exact route matches`:- If you only want to apply the class on an exact match, you need to provide the routerLinkActiveOptions directive with a configuration object that contains the value exact: true.

```html
<a [routerLink]="['/user/jane']"
  routerLinkActive="active-link"
  [routerLinkActiveOptions]="{exact: true}"
>
  User
</a>
<a [routerLink]="['/user/jane/role/admin']"
  routerLinkActive="active-link"
  [routerLinkActiveOptions]="{exact: true}"
>
  Role
</a>
```

`Apply RouterLinkActive to an ancestor`: -The RouterLinkActive directive can also be applied to an ancestor element in order to allow developers to style the elements as desired.

```html
<div routerLinkActive="active-link" [routerLinkActiveOptions]="{exact: true}">
  <a routerLink="/user/jim">Jim</a>
  <a routerLink="/user/bob">Bob</a>
</div>
```


### Accessing query parameters and fragments

**Link parameters array**:- A link parameters array holds the following ingredients for router navigation:

- The path of the route to the destination component
- Required and optional route parameters that go into the route URL

Bind the RouterLink directive to such an array like this:

```html
<a [routerLink]="['/heroes']">Heroes</a>
```

The following is a two-element array when specifying a route parameter:

```html
<a [routerLink]="['/hero', hero.id]">  <span class="badge">{{ hero.id }}</span>{{ hero.name }}</a>
```

*Router Outlet*:- (`router-outlet`)The router-outlet is a directive that's available from the @angular/router package and is used by the router to mark where in a template, a matched component should be inserted.Acts as a placeholder for dynamically loading components based on the current route.When the route changes, Angular dynamically loads the corresponding component into the `router-outlet`.
Thanks to the router outlet, your app will have multiple views/pages and the app template acts like a shell of your application. Any element, you add to the shell will be rendered in each view, only the part marked by the router outlet will be changed between views.

*Router links*:- In Angular, routerLink when applied to an element in a template, makes that element a link that initiates navigation to a route. Navigation opens one or more routed components in one or more `<router-outlet>` locations on the page.Defined as `routerLink = "/url"`

*Router Events*:- The Angular Router raises events when it navigates from one route to another route. It raises several events such as `NavigationStart`, `NavigationEnd`, `NavigationCancel`, `NavigationError`, `ResolveStart`, etc. You can listen to these events and find out when the state of the route changes. Some of the useful events are route change start (NavigationStart) and route change end (NavigationEnd).

*Route Guards*:- Angular route guards are interfaces provided by Angular which, when implemented, allow us to control the accessibility of a route based on conditions provided in class implementation of that interface.

*ActivatedRoute*:- Angular's ActivatedRoute is a service that provides information about the currently activated route. It contains route parameters, query parameters, data resolved for the route, and other route-related information. It is used by injecting the ActivatedRoute service into a component and accessing its properties and methods to retrieve information about the current route

Some types of angular guards are `CanActivate`, `CanActivateChild`, `CanLoad`, `CanDeactivate` and `Resolve`.

### Getting route information

Often, as a user navigates your application, you want to pass information from one component to another. For example, consider an application that displays a shopping list of grocery items. Each item in the list has a unique id. To edit an item, users click an Edit button, which opens an EditGroceryItem component. You want that component to retrieve the id for the grocery item so it can display the right information to the user.

Use a route to pass this type of information to your application components. To do so, you use the *withComponentInputBinding* feature with provideRouter or the *bindToComponentInputs* option of *RouterModule.forRoot*.

To get information from a route:

- Add the withComponentInputBinding feature to the provideRouter method.

```ts
provideRouter feature
providers: [
  provideRouter(appRoutes, withComponentInputBinding()),
]
```

- Add an Input to the component:- Update the component to have an Input matching the name of the parameter.

```ts
@Input()
set id(heroId: string) {
  this.hero$ = this.service.getHero(heroId);
}
```

NOTE: You can bind all route data with key, value pairs to component inputs: static or resolved route data, path parameters, matrix parameters, and query parameters. If you want to use the parent components route info you will need to set the router paramsInheritanceStrategy option: withRouterConfig({paramsInheritanceStrategy: 'always'})


## Lazy loading

Lazy loading is a technique in Angular that allows you to load JavaScript components asynchronously when a specific route is activated. It improves the application load time speed by splitting the application into several bundles. The bundles are loaded as required when the user navigates through the app.

**Loading Route Component Strategies**:- Understanding how and when components load in Angular routing is crucial for building responsive web applications. Angular offers two primary strategies to control component loading behavior:

1. Eagerly loaded: Components that are loaded immediately.
2. Lazily loaded: Components loaded only when needed.

`Eagerly loaded components`:- When you define a route with the component property, the referenced component is eagerly loaded as part of the same JavaScript bundle as the route configuration.

```ts
export const routes: Routes = [
  // HomePage and LoginPage are both directly referenced in this config,
  // so their code is eagerly included in the same JavaScript bundle as this file.
  {path: "",component: HomePage},
  {path: "login",component: LoginPage}
]
```

Eagerly loading route components like this means that the browser has to download and parse all of the JavaScript for these components as part of your initial page load, but the components are available to Angular immediately.
While including more JavaScript in your initial page load leads to slower initial load times, this can lead to more seamless transitions as the user navigates through an application.

`Lazily loaded components`:- You can use the loadComponent property to lazily load the JavaScript for a route only at the point at which that route would become active.

```ts
export const routes: Routes = [
  // The HomePage and LoginPage components are loaded lazily at the point at which
  // their corresponding routes become active.
  {
    path: 'login',loadComponent: () => import('./components/auth/login-page').then(m => m.LoginPage)
  },
  {
    path: '',loadComponent: () => import('./components/home/home-page').then(m => m.HomePage)
  }
]
```

The loadComponent property accepts a loader function that returns a Promise that resolves to an Angular component. In most cases, this function uses the standard JavaScript dynamic import API. You can, however, use any arbitrary async loader function.
Lazily loading routes can significantly improve the load speed of your Angular application by removing large portions of JavaScript from the initial bundle. These portions of your code compile into separate JavaScript "chunks" that the router requests only when the user visits the corresponding route.

`Injection context lazy loading`:- The Router executes loadComponent and loadChildren within the injection context of the current route, allowing you to call inject inside these loader functions to access providers declared on that route, inherited from parent routes through hierarchical dependency injection, or available globally. This enables context-aware lazy loading.

```ts
export const routes: Routes = [
  {
    path: 'dashboard',
    // Runs inside the route's injection context
    loadComponent: () => {
      const flags = inject(FeatureFlags);
      return flags.isPremium
        ? import('./dashboard/premium-dashboard').then(m => m.PremiumDashboard)
        : import('./dashboard/basic-dashboard').then(m => m.BasicDashboard);
    },
  },
];
```

There are many factors to consider when deciding on whether a route should be eager or lazy.
In general, eager loading is recommended for primary landing page(s) while other pages would be lazy-loaded.

Note: While lazy routes have the upfront performance benefit of reducing the amount of initial data requested by the user, it adds future data requests that could be undesirable. This is particularly true when dealing with nested lazy loading at multiple levels, which can significantly impact performance.

---------------


## Routing Evolution

Angular 2 - Introduced the RouterModule and Routes array for configuration.

Key features:

1. Routes were defined using the Routes array.
2. Used RouterModule.forRoot() to configure routes.

```ts
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' } // Wildcard route for 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
```

Angular 5 - Introduced RouterLinkWithHref for better handling of links.Added support for custom URL serialization.
Angular 7 - Introduced pathMatch: 'full' to ensure exact route matching.

```ts
{ path: '', redirectTo: '/home', pathMatch: 'full' }
```

Angular 8 - Introduced Dynamic Imports for lazy loading modules.

```ts
{
  path: 'admin',
  loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
}
```

Angular 14 - Introduced Standalone Components, which can be used without modules.This allows for simpler route configurations:

```ts
// app.routes.ts
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { 
    path: 'admin', 
    loadChildren: () => import('./admin/admin.routes').then(m => m.adminRoutes) 
  },
];

// main.ts
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});
```

- Router imports:- The Angular Router is an optional service that presents a particular component view for a given URL. It isn't part of the Angular core and thus is in its own library package, @angular/router.

Import what you need from it as you would from any other Angular package.

```ts
import { provideRouter } from '@angular/router';
```

- Configuration:- A routed Angular application has one singleton instance of the Router service. When the browser's URL changes, that router looks for a corresponding Route from which it can determine the component to display.

A router has no routes until you configure it.

- Router outlet:- The RouterOutlet is a directive from the router library that is used like a component. It acts as a placeholder that marks the spot in the template where the router should display the components for that outlet.The "RouterOutlet" directive is used in Angular to define the location where the router should render the components associated with different routes. It acts as a placeholder for dynamically loaded components.

```html
<router-outlet></router-outlet><!-- Routed components go here -->
```

Given the preceding configuration, when the browser URL for this application becomes /heroes, the router matches that URL to the route path /heroes and displays the HeroListComponent as a sibling element to the RouterOutlet that you've placed in the host component's template.

- Router links:- To navigate as a result of some user action such as the click of an anchor tag, use RouterLink.

Consider the following template:

```html
<h1>Angular Router</h1><nav>  <a routerLink="/crisis-center" routerLinkActive="active" ariaCurrentWhenActive="page">Crisis Center</a>  <a routerLink="/heroes" routerLinkActive="active" ariaCurrentWhenActive="page">Heroes</a></nav><router-outlet></router-outlet>
```

The RouterLink directives on the anchor tags give the router control over those elements. The navigation paths are fixed, so you can assign a string as a one-time binding to the routerLink.
Had the navigation path been more dynamic, you could have bound to a template expression that returned an array of route link parameters; that is, the link parameters array. The router resolves that array into a complete URL.

- Active router links:- The RouterLinkActive directive toggles CSS classes for active RouterLink bindings based on the current RouterState.

On each anchor tag, you see a property binding to the RouterLinkActive directive that looks like

```html
routerLinkActive="..."
```

The template expression to the right of the equal sign, =, contains a space-delimited string of CSS classes that the Router adds when this link is active and removes when the link is inactive. You set the RouterLinkActive directive to a string of classes such as routerLinkActive="active fluffy" or bind it to a component property that returns such a string. For example,

```html
[routerLinkActive]="someStringProperty"

```

Active route links cascade down through each level of the route tree, so parent and child router links can be active at the same time. To override this behavior, bind to the [routerLinkActiveOptions] input binding with the { exact: true } expression. By using { exact: true }, a given RouterLink is only active if its URL is an exact match to the current URL.

RouterLinkActive also allows you to easily apply the aria-current attribute to the active element, thus providing a more accessible experience for all users. For more information see the Accessibility Best Practices Active links identification section.

- Router state

After the end of each successful navigation lifecycle, the router builds a tree of ActivatedRoute objects that make up the current state of the router. You can access the current RouterState from anywhere in the application using the Router service and the routerState property.
Each ActivatedRoute in the RouterState provides methods to traverse up and down the route tree to get information from parent, child, and sibling routes.

- Activated route:- The route path and parameters are available through an injected router service called the ActivatedRoute. It has a great deal of useful information including:

1. url - An Observable of the route paths, represented as an array of strings for each part of the route path.
2. data - An Observable that contains the data object provided for the route. Also contains any resolved values from the resolve guard.
3. params - An Observable that contains the required and optional parameters specific to the route.
4. paramMap - An Observable that contains a map of the required and optional parameters specific to the route. The map supports retrieving single and multiple values from the same parameter.
5. queryParamMap - An Observable that contains a map of the query parameters available to all routes. The map supports retrieving single and multiple values from the query parameter.
6. queryParams - An Observable that contains the query parameters available to all routes.
7. fragment - An Observable of the URL fragment available to all routes.
8. outlet - The name of the RouterOutlet used to render the route. For an unnamed outlet, the outlet name is primary.
9. routeConfig  - The route configuration used for the route that contains the origin path.
10. parent - The route's parent ActivatedRoute when this route is a child route.
11. firstChild - Contains the first ActivatedRoute in the list of this route's child routes.
12. children - Contains all the child routes activated under the current route.

- Router events:- During each navigation, the Router emits navigation events through the Router.events property. These events are shown in the following table.

1. NavigationStart - Triggered when navigation starts.
2. RouteConfigLoadStart - Triggered before the Router lazy loads a route configuration.
3. RouteConfigLoadEnd - Triggered after a route has been lazy loaded.
4. RoutesRecognized - Triggered when the Router parses the URL and the routes are recognized.
5. GuardsCheckStart - Triggered when the Router begins the Guards phase of routing.
6. ChildActivationStart - Triggered when the Router begins activating a route's children.
7. ActivationStart - Triggered when the Router begins activating a route.
8. GuardsCheckEnd - Triggered when the Router finishes the Guards phase of routing successfully.
9. ResolveStart - Triggered when the Router begins the Resolve phase of routing.
10. ResolveEnd - Triggered when the Router finishes the Resolve phase of routing successfully.
11. ChildActivationEnd - Triggered when the Router finishes activating a route's children.
12. ActivationEnd - Triggered when the Router finishes activating a route.
13. NavigationEnd - Triggered when navigation ends successfully.
14. NavigationCancel - Triggered when navigation is canceled. This can happen when a Route Guard returns false during navigation, or redirects by returning a UrlTree or RedirectCommand.
15. NavigationError - Triggered when navigation fails due to an unexpected error.
16. Scroll - Represents a scrolling event.

When you enable the withDebugTracing feature, Angular logs these events to the console.

Angular's ActivatedRoute is a service that provides information about the currently activated route. It contains route parameters, query parameters, data resolved for the
route, and other route-related information. It is used by injecting the ActivatedRoute service into a component and accessing its properties and methods to retrieve
information about the current route.

Angular's ActivatedRouteSnapshot is an interface that represents the state of a route at a particular moment in time. It contains information about the route's parameters, data, URL segments, and more. It is used to access the route snapshot in Angular's route guards or resolver services.

Angular's ActivatedRouteData is an interface that represents additional data associated with a route. It can be used to store custom data related to a route, such as breadcrumbs, page titles, or any other information that needs to be accessed during route navigation or rendering.

Angular's RouterLink directive is used to create links to navigate between different routes in an Angular application. It automatically updates the URL and activates the
corresponding route when the link is clicked. It is used by adding the RouterLink directive to an anchor tag or any other clickable element and providing it with the
route path or a link parameters array.

Angular's ActivatedRouteLink directive is used to create links that navigate to a specific route based on the current route's context. It allows for relative navigation
and generating links dynamically based on the current route's parameters and data.It is used by adding the ActivatedRouteLink directive to an anchor tag or any other clickable element and providing it with the desired route parameters.

Angular's RouterOutlet directive is used to define the location where the router should render the components associated with different routes. It acts as a placeholder for dynamically loaded components based on the current route. It is used by adding the RouterOutlet directive to a container element in the template where the routed components should be rendered.

Angular's RouterStateSnapshot is an interface that represents the state of the router at a particular moment in time. It contains information about the current URL, the activated route hierarchy, and the state of the route guards. It is used to access the current router state in Angular's route guards or resolver services.

Angular's RouteResolver is an interface that defines a resolver service that retrieves data before activating a route. It allows for fetching data from a server or performing other tasks asynchronously before the route is activated. It is used by implementing the resolve() method in a resolver service class and providing the resolver in the route configuration.


-----------


## AuthGuard

The Angular Router provides a feature called Route Guards, which allows you to control access to routes based on specific conditions.
In Angular applications, it is often necessary to protect certain routes to prevent unauthorized access. One of the commonly used Route Guards is AuthGuard, which checks if the user is authenticated before allowing access to a particular route.

Angular guards can be used for following scenarios:-
1. Restrict a user from accessing a route.
2. Ask a user to save changes before moving away from a view.
3. Validating the route parameters before navigating to the route.
4. Fetch some data before you display component view of a route.

Types of auth guard available in angular.

- `CanActivate" guard`:- The "CanActivate" guard is used in Angular to control access to a route based on certain conditions. It allows for preventing navigation to a route if specific criteria are not met, such as user authentication.
Angular's CanActivate guard is an interface that defines a guard that controls access to a route based on certain conditions. It allows for preventing navigation to a route if specific criteria are not met, such as user authentication or authorization. It is used by implementing the CanActivate interface in a guard class and providing the guard in the route configuration.
Guards the entry to a route, deciding if the user can access it or not (e.g., authentication check).
- `CanDeactivate" guard`:- The "CanDeactivate" guard is used in Angular to control whether a user can leave a route or component. It allows for prompting the user with a confirmation message or performing other actions before leaving the current route.
Angular's CanDeactivate guard is an interface that defines a guard that controls whether a user can leave a route or component. It allows for prompting the user with
a confirmation message or performing other actions before leaving the current route.
It is used by implementing the CanDeactivate interface in a guard class and providing the guard in the route configuration.
Guards the exit from a route or component, prompting the user before navigating away (e.g., unsaved changes check).
- `CanActivateChild`: Guards the entry to child routes within a parent route, allowing or denying access to specific child routes.
- `CanMatch`: Guards whether a specific route should be considered during navigation or not, dynamically enabling or disabling routes based on conditions.
- The `Resolve" property` in Angular route configuration is used to specify a set of data to be resolved before activating a route. It allows for fetching data from a server or performing other tasks asynchronously before the route is activated.
- `CanLoad" guard`:- The "CanLoad" guard is used in Angular to control whether a module can be loaded lazily. It allows for preventing the loading of a module based on certain conditions, such as user permissions.
Angular's CanLoad guard is an interface that defines a guard that controls whether a module can be loaded lazily. It allows for preventing the loading of a module based on certain conditions, such as user permissions or feature flags. It is used by implementing the CanLoad interface in a guard class and providing the guard in the route configuration.


Generating guard using cli:-

```bash
ng g g <guard-name>
```


Route Guard implementation:-

- `Angular 14 & lower versions`:-
STEPS:-

1. Create AuthGuard Service: Start by creating an AuthGuard service in your Angular app. Implement the CanActivate interface to control access to routes based on user authentication.
2. Authenticate Users: Implement authentication logic within the AuthGuard service to determine if a user is authenticated and allowed to access a route.
3. Provide the AuthGuard: Ensure the AuthGuard service is provided either at the root level or within a specific module to make it available throughout the app.
4. Apply AuthGuard to Routes: Add the AuthGuard to the routes that require protection by specifying it in the canActivate property of the route definition.
5. Handle Redirects: Handle redirection for unauthorized users within the AuthGuard service to ensure a smooth user experience and prevent unauthorized access to protected routes.

- `Angular 15 & higher versions`:-
STEPS:-

1. Create a function which should return a boolean value/data.
2. Assign the function to specific route guard property of route object.
