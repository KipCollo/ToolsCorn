# Routing

## SPA

SPA is a single page applications.It does not make requests to server for every URL requests.You can use modern framework to create SPAs i.e Angular.

Angular applications follow SPA architecture,where different views of web page can be activated according to browser URL.Any changes to that URL can be intercepted by Angular router and translated to routes that can activate a particular Angular component

Angular has Routing functionality to create SPA.Also it offers SSR(Server Side Rendering) which supports SPA

Scully is static website generator based on Jamstack architecture.It can cooperate with Angular router to prerender the content of an Angular application according to each route.

## THEORY AND CONTEXT

In old days,client-side applications were highly coupled with underlying server infrastructure.Much machinery was involved when we wanted to visit the page of a website using URL.The browser would send requested URL to the server,and the server should response with matching HTML file for that URL.This was complicated process that would result in delays and varying round-trip times.

Modern web applications eliminate these problems using SPA architecture.A client needs to request a single HTML file only once from the server.Any subsequent changes to URL of the browser are handled internally from client infrastructure.In Angular,the router is responsible for intercepting in-app URL requests and handling them according to a defined route configuration.

Jamstack is a hot,emerging technology that allows us to create fast and secure web applications.Can be used for any application type,i.e e-commerce website,SaaS web application or personal blog.Jamstack architecture is based on the pillars:-

1. Performance - Pages are generated and prerendered during production,eliminating need to wait for content to load.
2. Scaling - Content is a static files that can be served from anywhere,even from Content Delivery Network(CDN) provider that improves performance of application.
3. Security - The serverless nature of server side processes and fact that content is already static eliminates potential attacks that target server infrastructures.

Scully is first static website generator for Angular that embraces Jamstack approach.It essentially generates pages of Angular application during build time to be immediately available when requested

## Angular Routing

Routing in Angular allows the users to create a single-page application with multiple views and navigation between them. Users can switch between these views without losing the application state and properties.

@angular/router Implements the Angular Router service , which enables navigation from one view to the next as users perform application tasks.The Router enables navigation by interpreting a browser URL as an instruction to change the view.

Angular Router is a built-in module in Angular that provides navigation and routing functionality. It allows developers to create single-page applications with multiple views and handle navigation between them.

Defines the Route object that maps a URL path to a component, and the RouterOutlet directive that you use to place a routed view in a template, as well as a complete API for configuring, querying, and controlling the router state.Import RouterModule to use the Router service in your app.

Angular's Router is a module that provides a way to implement navigation and routing in an Angular application. It allows for defining routes, navigating between routes, and handling route parameters and query parameters. The Router module is used by importing the RouterModule in the application's module and configuring the routes using the RouterModule.forRoot() method. The Router module is then used by injecting the Router service into components and using its methods to navigate and interact with the routing system.

1. @angular/router:- Implements the Angular Router service , which enables navigation from one view to the next as users perform application tasks.
2. @angular/router/testing:- Supplies a testing module for the Angular Router subsystem.
3. @angular/router/upgrade:- Provides support for upgrading routing applications from Angular JS to Angular.

- NgModules
RouterModule:- Adds directives and providers for in-app navigation among views defined in an application. Use the Angular Router service to declaratively specify application states and manage state transitions.

Key concepts in Angular Routing:

- Routes: Configuration that maps URLs to components.
- RouterOutlet: A directive that acts as a placeholder for rendering components.
- RouterLink: A directive used to navigate between routes.
- Router: The service that manages navigation.

The following command uses the Angular CLI to generate a basic Angular application with application routes. The application name in the following example is routing-app.

```bash
ng new routing-app --routing
```

When we enable routing in an Angular application, the Angular CLI imports several
artifacts from the @angular/router npm package in our application:

- It creates the app-routing.module.ts file, which is the main routing module
of our application:

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

## Defining a basic route

There are three fundamental building blocks to creating a route.

- Import the routes into app.config.ts and add it to the provideRouter function.- The Angular CLI performs this step for you. However, if you are creating an application manually or working with an existing, non-CLI application, verify that the imports and configuration are correct. The following is the default ApplicationConfig using the CLI.

```ts
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
```

- Set up a Routes array for your routes.The Angular CLI performs this step automatically.

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

- Add your routes to your application - Now that you have defined your routes, add them to your application. First, add links to the two components. Assign the anchor tag that you want to add the route to the routerLink attribute. Set the value of the attribute to the component to show when a user clicks on each link. Next, update your component template to include *router-outlet*. This element informs Angular to update the application view with the component for the selected route.

```html
<h1>Angular Router App</h1>
<nav>
  <ul>
    <li><a routerLink="/first-component" routerLinkActive="active" ariaCurrentWhenActive="page">First Component</a></li>
    <li><a routerLink="/second-component" routerLinkActive="active" ariaCurrentWhenActive="page">Second Component</a></li>
  </ul>
</nav>
<!-- The routed views render in the <router-outlet>-->
<router-outlet />
```

You also need to add the RouterLink, RouterLinkActive, and RouterOutlet to the imports array of AppComponent.

```ts
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-app';
}
```

Route order- The order of routes is important because the Router uses a first-match wins strategy when matching routes, so more specific routes should be placed above less specific routes. List routes with a static path first, followed by an empty path route, which matches the default route. The wildcard route comes last because it matches every URL and the Router selects it only if no other routes match first.

## Accessing query parameters and fragments

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

## Lazy loading

Lazy loading is a technique in Angular that allows you to load JavaScript components asynchronously when a specific route is activated. It improves the application load time speed by splitting the application into several bundles. The bundles are loaded as required when the user navigates through the app.

## Getting route information

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

## Setting up wildcard

A well-functioning application should gracefully handle when users attempt to navigate to a part of your application that does not exist. To add this functionality to your application, you set up a wildcard route. The Angular router selects this route any time the requested URL doesn't match any router paths.

To set up a wildcard route, add the following code to your routes definition.

```ts
{ path: '**', component: &lt;component-name&gt; }
```

The two asterisks, **, indicate to Angular that this routes definition is a wildcard route. For the component property, you can define any component in your application. Common choices include an application-specific PageNotFoundComponent, which you can define to display a 404 page to your users; or a redirect to your application's main component. A wildcard route is the last route because it matches any URL. For more detail on why order matters for routes, see Route order.

## Displaying a 404 page

To display a 404 page, set up a wildcard route with the component property set to the component you'd like to use for your 404 page as follows:

```ts
const routes: Routes = [
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];
```

The last route with the path of ** is a wildcard route. The router selects this route if the requested URL doesn't match any of the paths earlier in the list and sends the user to the PageNotFoundComponent.

## Setting up redirects

To set up a redirect, configure a route with the path you want to redirect from, the component you want to redirect to, and a pathMatch value that tells the router how to match the URL.

```ts
const routes: Routes = [
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
  { path: '',   redirectTo: '/first-component', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];
```

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

Angular 5 - Introduced RouterLinkWithHref for better handling of links.
Added support for custom URL serialization.

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

Angular 14 - Introduced Standalone Components, which can be used without modules.
This allows for simpler route configurations:

```ts
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent }
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});
```

Modern Angular routing setup:

```ts
// app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { 
    path: 'admin', 
    loadChildren: () => import('./admin/admin.routes').then(m => m.adminRoutes) 
  },
  { path: '**', redirectTo: '' } // Wildcard route for 404
];

// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

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

## AuthGuard

In Angular applications, it is often necessary to protect certain routes to prevent unauthorized access. The Angular Router provides a feature called Route Guards, which allows you to control access to routes based on specific conditions.

One of the commonly used Route Guards is AuthGuard, which checks if the user is authenticated before allowing access to a particular route.

STEPS:-

1. Create AuthGuard Service: Start by creating an AuthGuard service in your Angular app. Implement the CanActivate interface to control access to routes based on user authentication.
2. Authenticate Users: Implement authentication logic within the AuthGuard service to determine if a user is authenticated and allowed to access a route.
3. Provide the AuthGuard: Ensure the AuthGuard service is provided either at the root level or within a specific module to make it available throughout the app.
4. Apply AuthGuard to Routes: Add the AuthGuard to the routes that require protection by specifying it in the canActivate property of the route definition.
5. Handle Redirects: Handle redirection for unauthorized users within the AuthGuard service to ensure a smooth user experience and prevent unauthorized access to protected routes.

Types of auth guard available in angular.

- CanActivate: Guards the entry to a route, deciding if the user can access it or not (e.g., authentication check).
- CanActivateChild: Guards the entry to child routes within a parent route, allowing or denying access to specific child routes.
- CanDeactivate: Guards the exit from a route or component, prompting the user before navigating away (e.g., unsaved changes check).
- CanMatch: Guards whether a specific route should be considered during navigation or not, dynamically enabling or disabling routes based on conditions.

Generating guard using cli:-

```bash
ng g g <guard-name>
```

The `"resolve" property` in Angular route configuration is used to specify a set of data to be resolved before activating a route. It allows for fetching data from a server or
performing other tasks asynchronously before the route is activated.

`CanActivate" guard`:- The "CanActivate" guard is used in Angular to control access to a route based on certain conditions. It allows for preventing navigation to a route if specific criteria are not met, such as user authentication.
Angular's CanActivate guard is an interface that defines a guard that controls access to a route based on certain conditions. It allows for preventing navigation to a route if
specific criteria are not met, such as user authentication or authorization. It is used by implementing the CanActivate interface in a guard class and providing the guard in
the route configuration.

`CanDeactivate" guard`:- The "CanDeactivate" guard is used in Angular to control whether a user can leave a route or component. It allows for prompting the user with a confirmation message or performing other actions before leaving the current route.
Angular's CanDeactivate guard is an interface that defines a guard that controls whether a user can leave a route or component. It allows for prompting the user with
a confirmation message or performing other actions before leaving the current route.
It is used by implementing the CanDeactivate interface in a guard class and providing the guard in the route configuration.

`CanLoad" guard`:- The "CanLoad" guard is used in Angular to control whether a module can be loaded lazily. It allows for preventing the loading of a module based on certain conditions, such as user permissions.
Angular's CanLoad guard is an interface that defines a guard that controls whether a module can be loaded lazily. It allows for preventing the loading of a module based on
certain conditions, such as user permissions or feature flags. It is used by implementing the CanLoad interface in a guard class and providing the guard in the route configuration.

Angular's ActivatedRoute is a service that provides information about the currently activated route. It contains route parameters, query parameters, data resolved for the
route, and other route-related information. It is used by injecting the ActivatedRoute service into a component and accessing its properties and methods to retrieve
information about the current route.

Angular's ActivatedRouteSnapshot is an interface that represents the state of a route at a particular moment in time. It contains information about the route's parameters,
data, URL segments, and more. It is used to access the route snapshot in Angular's route guards or resolver services.

Angular's ActivatedRouteData is an interface that represents additional data associated with a route. It can be used to store custom data related to a route, such as breadcrumbs, page titles, or any other information that needs to be accessed during route navigation or rendering.

Angular's RouterLink directive is used to create links to navigate between different routes in an Angular application. It automatically updates the URL and activates the
corresponding route when the link is clicked. It is used by adding the RouterLink directive to an anchor tag or any other clickable element and providing it with the
route path or a link parameters array.

Angular's ActivatedRouteLink directive is used to create links that navigate to a specific route based on the current route's context. It allows for relative navigation
and generating links dynamically based on the current route's parameters and data.It is used by adding the ActivatedRouteLink directive to an anchor tag or any other clickable element and providing it with the desired route parameters.

Angular's RouterOutlet directive is used to define the location where the router should render the components associated with different routes. It acts as a placeholder for
dynamically loaded components based on the current route. It is used by adding the RouterOutlet directive to a container element in the template where the routed components should be rendered.

Angular's RouterStateSnapshot is an interface that represents the state of the router at a particular moment in time. It contains information about the current URL, the activated route hierarchy, and the state of the route guards. It is used to access the current router state in Angular's route guards or resolver services.

Angular's RouteResolver is an interface that defines a resolver service that retrieves data before activating a route. It allows for fetching data from a server or performing other tasks asynchronously before the route is activated. It is used by implementing the resolve() method in a resolver service class and providing the resolver in the route configuration.
