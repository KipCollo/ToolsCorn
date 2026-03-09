# Modules

An Angular module is a mechanism to organize the application into cohesive blocks of functionality. It encapsulates components, services, directives, and other features required for a specific part of the application.
Angular module is used to describe an application or a group of related features. Every application has a root module, which is the Angular module that provides Angular with the information that it needs to start the application.
A module is a way of bundling Angular building blocks like components,directives,services,pipes together.A module get's scanned by Angular to be aware of what features are being used in that Angular project.

`@NgModule` is a decorator that defines a class as an Angular module. It specifies the metadata required to configure the module and its dependencies.
An Angular module is a container for a set of related components, directives, services,and other building blocks of an application. The NgModule decorator is used to configure the module by specifying the declarations, imports, providers, and exports of the module. It is used by adding the NgModule decorator to a class and providing the module configuration as its argument.

An Angular application has one main module called `AppModule`.Each module can import other modules in an Angular application.(`Not in the case of standalone components`).We can split main module into multiple modules.

The main module of our Angular application uses a similar decorator called @NgModule to define its properties:

```ts
//app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      BrowserModule
   ],
   providers: [],
   bootstrap: [AppComponent]
   })
export class AppModule { }
```

The decorator of an Angular module defines a set of properties that can be used to configure the module. The most common ones are as follows:
- `declarations`: Defines Angular components that are part of the Angular module. Every component that exists in the Angular module must be added to the declarations array.
- `imports`: Defines other Angular modules that contain functionality the Angular module needs.

NOTE:- The component that is displayed when an Angular application is bootstrapped is indicated by the bootstrap property of the main module of the application. We rarely need to change this property. The selector of that component is used in the index.html file by default.

An Angular application can have many features that are called modules.Each module servers a block of single functionality that corresponds to particular application domain or workflow.Angular modules are used to group Angular Components that share similar functionality.

**Feature Module**:- We can split module into smaller feature modules.A feature module contains all building blocks like components,directives..of a given Angular application.
NOTE:- Every module is standalone and they work independently from each other.One module does not have access to imports or exports of other module.

```ts
//dashboard.module.ts
@NgModule({
   declarations: [DashboardComponent,TaskDetailComponent],
   exports: [DashboardComponent,TaskDetailComponent,SharedModule],
   imports: [CommonsModule,SharedModule]
})
export class DashboardModule{

}
```

```ts
//app.module.ts
@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      BrowserModule,
      DashboardModule
   ],
   providers: [],
   bootstrap: [AppComponent]
   })
export class AppModule { }
```

**Shared Module**:- A shared module contains all components,directives,pipes which can be shared between different modules.We only need to import shared Module in other modules, and all exports from shared module will be available in that module.
NOTE:- A component,directive,module,pipes can be declared only once in Angular application.

```ts
//shared.module.ts
@NgModule({
   declarations: [LoaderComponent],
   exports: [LoaderComponent],
   imports: [FormsModule]
})
export class SharedModule{

}
```