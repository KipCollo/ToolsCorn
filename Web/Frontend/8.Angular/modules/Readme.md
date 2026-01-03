# Modules

An Angular module is a mechanism to organize the application into cohesive blocks of functionality. It encapsulates components, services, directives, and other features required for a specific part of the application.

`@NgModule` is a decorator that defines a class as an Angular module. It specifies the metadata required to configure the module and its dependencies.

Angular's NgModule is a decorator that is used to define an Angular module. An Angular module is a container for a set of related components, directives, services,and other building blocks of an application. The NgModule decorator is used to configure the module by specifying the declarations, imports, providers, and exports of the module. It is used by adding the NgModule decorator to a class and providing the module configuration as its argument.

The main module of our Angular application uses a similar decorator called @NgModule
to define its properties:

```java
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

The decorator of an Angular module defines a set of properties that can be used to
configure the module. The most common ones are as follows:
• *declarations*: Defines Angular components that are part of the Angular module. Every component that exists in the Angular module must be added to the declarations array.
• *imports*: Defines other Angular modules that contain functionality the Angular module needs.

NOTE:- The component that is displayed when an Angular application is bootstrapped is indicated by the bootstrap property of the main module of the application. We rarely need to change this property. The selector of that component is used in the index.html file by default.
