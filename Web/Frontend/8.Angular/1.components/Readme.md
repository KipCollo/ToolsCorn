# Component

The basic building blocks of the Angular framework are Angular components.
Components define views, which are sets of screen elements that Angular can choose among and modify according to your program logic and data
Components use services, which provide background functionality not directly related to views such as fetching data. Such services can be injected into components as dependencies, making your code modular, reusable, and efficient.

Components and services are classes marked with decorators. These decorators provide metadata that tells Angular how to use them.
The metadata for a component class associates it with a template that defines a view. A template combines ordinary HTML with Angular directives and binding markup that allow Angular to modify the HTML before rendering it for display.

The metadata for a service class provides the information Angular needs to make it available to components through dependency injection (DI)
An application's components typically define many views, arranged hierarchically. Angular provides the Router service to help you define navigation paths among views. The router provides sophisticated in-browser navigational capabilities.

Every Angular application has at least one component, the root component that connects a component hierarchy with the page document object model (DOM). Each component defines a class that contains application data and logic, and is associated with an HTML template that defines a view to be displayed in a target environment.

The @Component() decorator identifies the class immediately below it as a component, and provides the template and related component-specific metadata.

Decorators are functions that modify JavaScript classes. Angular defines a number of decorators that attach specific kinds of metadata to classes, so that the system knows what those classes mean and how they should work.

A component in Angular is a reusable building block that encapsulates the template,logic, and styling required to render a part of the user interface.

Controllers, which are known as components in Angular, are the connective tissue in an Angular web app,acting as conduits between the data model and views. Components add business domain logic required to present some aspect of the model and perform operations on it. A component that follows the MVC pattern should
1. Contain the logic required to set up the initial state of the template
2. Contain the logic/behaviors required by the template to present data from the model
3. Contain the logic/behaviors required to update the model based on user interaction

A component should not
1. Contain logic that manipulates the DOM (that is the job of the template)
2. Contain logic that manages the persistence of data (that is the job of the model)

The application source code resides inside the src\app folder, in the root of our Angular CLI project. It contains all the files needed to build and test our Angular application,including a component and a module. The component is the main component of the Angular application:

```ts
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular';
}
```

Components are the main building blocks for Angular applications. Each component consists of:

1. An HTML template that declares what renders on the page
2. A TypeScript class that defines behavior
3. A CSS selector that defines how the component is used in a template
4. Optionally, CSS styles applied to the template

The following properties characterize an Angular component:
- `selector`: A unique name that is used to identify and declare the component inside HTML content. It is used as an HTML tag, just like any native HTML element, such as <app-root></app-root>.

NOTE:- The Angular CLI provides the app prefix by default in component selectors.We can use a custom one using the --prefix option when creating a new Angular CLI application from scratch. A custom prefix can be based on the name of an organization or a particular product, and it helps avoid collisions with other libraries or modules.

- `templateUrl`: The path pointing to an HTML file that contains the HTML content of the component, which is called the template of the component.
- `styleUrls`: A list of paths where each one points to a stylesheet file containing the CSS styles of the component.

The preceding properties are defined using the `@Component decorator`. It is a function that decorates the TypeScript class of the component and recognizes it as an Angular component.


**Component metadata**:- The @Component decorator identifies the class immediately below it as a component class, and specifies its metadata.
The metadata for a component tells Angular where to get the major building blocks that it needs to create and present the component and its view. In particular, it associates a template with the component, either directly with inline code, or by reference. Together, the component and its template describe a view.
In addition to containing or pointing to the template, the @Component metadata configures, for example, how the component can be referenced in HTML and what services it requires.
Useful @Component configuration options:
1. standalone	- true when this is a self-describing, "Standalone" component. If false or unspecified, the component must be declared in an ngModule which is an older style. Prefer true if you can.
2. selector -	A CSS selector that tells Angular to create and insert an instance of this component wherever it finds the corresponding tag in template HTML.
3. templateUrl	The relative address of this component's HTML template. Alternatively, you can provide the HTML template inline, as the value of the template property. This template defines the component's host view.
4. imports	- An array of the components, directives, and packages that your template references. Essential for "Standalone" components.
5. providers	- An array of providers for services that the component requires. In the example, this tells Angular how to provide the HeroService instance that the component's constructor uses to get the list of heroes to display.



## Creating a Component

There are two ways of creating a component:

1. The best way to create a component is with the Angular CLI.
2. You can also create a component manually.

- **To create a component using the Angular CLI**:-

From a terminal window, navigate to the directory containing your application.
Run the `ng generate component <component-name>` command, where component-name is the name of your new component.

By default, this command creates the following:

 1. A directory named after the component
 2. A component file, component-name.component.ts
 3. A template file, component-name.component.html
 4. A CSS file, component-name.component.css
 5. A testing specification file, component-name.component.spec.ts

- **Creating a component manually**:-

Navigate to your Angular project directory.
Create a new file, component-name.component.ts.
At the top of the file, add the following import statement.

```ts
import { Component } from '@angular/core';
```

After the import statement, add a @Component decorator.

```ts
@Component({
})
```

Choose a CSS selector for the component.

```ts
@Component({
  selector: 'app-component-overview',
})
```

Define the HTML template that the component uses to display information. In most cases, this template is a separate HTML file.

```ts
@Component({
  selector: 'app-component-overview',
  templateUrl: './component-overview.component.html',
})
```

Select the styles for the component's template. In most cases, you define the styles for your component's template in a separate file.

```ts
@Component({
  selector: 'app-component-overview',
  templateUrl: './component-overview.component.html',
  styleUrls: ['./component-overview.component.css']
})
```

Add a class statement that includes the code for the component.

```ts
export class ComponentOverviewComponent {

}
```

## Using components

1. Create a component.
2. Register component in the module.
3. Add an element in an HTML markup.

- Creating a Component

```ts

import {Component} from '@angular/core'

@Component({
   selector:'courses',
   template:'<h2>Courses</h2>'
})
export class CourseComponent{

}
```

- Register component in the module:

```ts
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { CourseComponent } from './courses.component'

@NgModule({
   declarations: [
      AppComponent,
      CourseComponent
   ],
   imports: [
      BrowserModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule{}
```

```ts
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
   CourseComponent
 
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'collo';
}
```

- adding element in an HTML markup:

```html
<courses></courses>
```

## Accepting data with input properties

When you use a component, you commonly want to pass some data to it. A component specifies the data that it accepts by declaring inputs:

`@Input()` is a decorator in Angular that allows data to be passed from a parent component to a child component.
Declaring inputs with the @Input decorator:-You can alternatively declare component inputs by adding the @Input decorator to a property:

```ts
@Component({...})
export class CustomSlider {
  @Input() name: string = '';// @Input() name: string makes name available for the parent component to pass data into the child.
}
```

Pass Data from Parent to Child.
Binding to an input is the same in both signal-based and decorator-based inputs:

```html
<app-child [name]="'John Doe'"></app-child>
```

Customizing decorator-based inputs - The @Input decorator accepts a config object that lets you change the way that input works.

```ts
@Component({...})
export class CustomSlider {
  @Input({required: true}) value = 0;
}
```

If you try to use a component without specifying all of its required inputs, Angular reports an error at build-time.

`@Output()` allows the Child → Parent communication.

```ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <h3>Welcome, {{ name }}!</h3>
    <button (click)="sendData()">Send Data to Parent</button>
  `
})
export class ChildComponent {
  @Input() name: string = '';

  @Output() notify = new EventEmitter<string>();

  sendData() {
    this.notify.emit(`Hello from ${this.name}`);
  }
}
```

```ts
export class AppComponent {
  parentMessage = '';

  receiveMessage(data: string) {
    this.parentMessage = data;
  }
}
```

```html
<app-child [name]="'Alice'" (notify)="receiveMessage($event)"></app-child>
<p>Message from Child: {{ parentMessage }}</p>
```

`@ViewChild and @ContentChild`:- @ViewChild and @ContentChild are used to access child elements or components in Angular. @ViewChild is used to access a single child component or element, while @ContentChild is used to access projected content within a component.
Angular's ViewChild decorator is used to access child elements or components in a parent component. It allows the parent component to obtain a reference to a child
component or DOM element and interact with it. It is used by adding the ViewChild decorator to a property in the parent component and specifying the selector of the
child component or element to be referenced.

Angular's ContentChild decorator is used to access projected content within a component. It allows the component to obtain a reference to a projected component,
directive, or template variable and interact with it. It is used by adding theContentChild decorator to a property in the component and specifying the selector of
the projected content to be referenced.

@ViewChild() lets you directly access a child component instance from the parent.

```ts
@Component({
  selector: 'app-child',
  template: `<h3>Child Component</h3>`
})
export class ChildComponent {
  sayHello() {
    return 'Hello from Child!';
  }
}
```

```ts
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  template: `
    <app-child></app-child>
    <button (click)="callChildMethod()">Call Child Method</button>
    <p>{{ message }}</p>
  `
})
export class AppComponent implements AfterViewInit {
  @ViewChild(ChildComponent) child!: ChildComponent;

  message = '';

  ngAfterViewInit() {
    this.message = this.child.sayHello();
  }

  callChildMethod() {
    this.message = this.child.sayHello();
  }
}
```

@ContentChild() - Access Content Passed via <ng-content>.Used when the child does not own the projected content.

```ts
@Component({
  selector: 'app-child',
  template: `<ng-content></ng-content>`
})
export class ChildComponent {}
```

```html
<app-child>
  <p #projectedContent>Projected Content inside Child</p>
</app-child>
```

```ts
@ContentChild('projectedContent') content!: any;
```

## component lifecycle

A component's lifecycle is the sequence of steps that happen between the component's creation and its destruction. Each step represents a different part of Angular's process for rendering components and checking them for updates over time.

In your components, you can implement lifecycle hooks to run code during these steps. Lifecycle hooks that relate to a specific component instance are implemented as methods on your component class. Lifecycle hooks that relate the Angular application as a whole are implemented as functions that accept a callback.

Angular components can get data either from external sources such as HTTP or from other Angular components. In the latter case, they interact with components that have data using a public API:
• @Input(): This is used to pass data into a component.
• @Output(): This is used to get notified about changes or get data back from a component.

Clarity is a design system that contains a set of UX and UI guidelines for building web applications. It also consists of a proprietary HTML and CSS framework packed with these
guidelines. Luckily, we do not have to use this framework since Clarity already provides a wide variety of Angular-based UI components that we can use in our Angular applications.

```bash
ng add @clr/angular
```

Data grid UI component of the Clarity library is used to display data in a tabular format. A data grid also provides mechanisms for filtering and sorting out of the box.
Angular components of the Clarity library:
• clr-datagrid: Defines a table.
• clr-dg-column: Defines a column of a table. Each column uses the clrDgField directive to bind to the property name of the issue represented by that column. The clrDgField directive provides us with sorting and filtering capabilities without writing even a single line of code in the TypeScript class file.Sorting works automatically only with string-based content. If we want to sort by a different primitive type, we must use the clrDgColType directive and specify the particular type.
• clr-dg-row: Defines a row of a table. It uses the clrDgItems directive to iterate over the issues and create one row for each issue.
• clr-dg-cell: Each row contains a collection of clr-dg-cell components to display the value of each column using interpolation. In the last cell, we add the label-danger class when an issue has a high priority to indicate its importance.
• clr-dg-footer: Defines the footer of a table. In this case, it displays the total number of issues.
