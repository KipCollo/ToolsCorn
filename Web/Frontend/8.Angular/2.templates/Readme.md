# Template

A template in Angular is an HTML file that defines the structure and layout of a component. It includes placeholders and binding expressions to dynamically display data.Uses special syntax within a template to build on many of Angular's features.

A template looks like regular HTML, except that it also contains Angular template syntax, which alters the HTML based on your application's logic and the state of application and DOM data. Your template can use data binding to coordinate the application and DOM data, pipes to transform data before it is displayed, and directives to apply application logic to what gets displayed.

A template combines HTML with Angular markup that can modify HTML elements before they are displayed. Template directives provide program logic, and binding markup connects your application data and the DOM. There are two types of data binding:
1. Event binding -	Lets your application respond to user input in the target environment by updating your application data.
2. Property binding -	Lets you interpolate values that are computed from your application data into the HTML.

Before a view is displayed, Angular evaluates the directives and resolves the binding syntax in the template to modify the HTML elements and the DOM, according to your program data and logic. Angular supports two-way data binding, meaning that changes in the DOM, such as user choices, are also reflected in your program data.
Your templates can use pipes to improve the user experience by transforming values for display. For example, use pipes to display dates and currency values that are appropriate for a user's locale. Angular provides predefined pipes for common transformations, and you can also define your own pipes.

You define a component's view with its companion template. A template is a form of HTML that tells Angular how to render the component.
Views are typically organized hierarchically, allowing you to modify or show and hide entire UI sections or pages as a unit. The template immediately associated with a component defines that component's host view. The component can also define a view hierarchy, which contains embedded views, hosted by other components.


## Template syntax

A template looks like regular HTML, except that it also contains Angular template syntax, which alters the HTML based on your application's logic and the state of application and DOM data. Your template can use data binding to coordinate the application and DOM data, pipes to transform data before it is displayed, and directives to apply application logic to what gets displayed.

Each Angular template in your application is a section of HTML to include as a part of the page that the browser displays. An Angular HTML template renders a view, or user interface, in the browser, just like regular HTML, but with a lot more functionality.

When you generate an Angular application with the Angular CLI, the `app.component.html` file is the default template containing placeholder HTML.
Angular helps you get and set DOM (Document Object Model) values dynamically with features such as built-in template functions, variables, event listening, and data binding.

Almost all HTML syntax is valid template syntax. However, because an Angular template is part of an overall webpage, and not the entire page, you don't need to include elements such as *html*, *body*, or *base*, and can focus exclusively on the part of the page you are developing.

To eliminate the risk of script injection attacks, Angular does not support the *script* element in templates. Angular ignores the *script* tag and outputs a warning to the browser console.

- Interpolation :- Interpolation refers to embedding expressions into marked up text. By default, interpolation uses the double curly braces {{ and }} as delimiters.

```ts
<h2>{{title}}</h2>

title: string ="Home";
```


## Template statements

Template statements are methods or properties that you can use in your HTML to respond to user events. With template statements, your application can engage users through actions such as displaying dynamic content or submitting forms. Enclose the event in `()` which causes Angular to evaluate the right hand side of the assignment as one or more template statements chained together using semicolon `;`.

## Binding data props attrs events

In an Angular template, a binding creates a live connection between view and the model and keeps them both in sync.

- **property**: helps you set values for properties of HTML elements or directives.
- **attributes**: helps you set values for attributes of HTML elements directly.
- **event**: lets you listen for and respond to user actions such as keystrokes, mouse movements, clicks, and touches.
- **data**: It's a combination of property and event binding and helps you share data between components.

## Reference vars

Template reference variables help you use data from one part of a template in another part of the template. A template variable can refer to a DOM element within a template, component or directive. In the template, use the hash symbol, `#`, to declare a template reference variable.

## Input output

`@Input()` and `@Output()` give a child component a way to communicate with its parent component. `@Input()` lets a parent component update data in the child component. Conversely, `@Output()` lets the child send data to a parent component.

## ng-template in Angular

ng-template is a directive in Angular that defines a template block that can be conditionally rendered or used as a template for other structural directives like ngIf
and ngFor. It allows for greater flexibility in rendering dynamic content.

## "ngContent" selector in Angular

The "ngContent" selector is used in the template of a component to define a content projection slot. It allows the component to accept and render content provided by its parent component.

## Variables in templates

Angular has two types of variable declarations in templates: local template variables and template reference variables.

- **Local template variables with @let**:- Angular's @let syntax allows you to define a local variable and re-use it across a template, similar to the JavaScript let syntax.

Using @let - Use @let to declare a variable whose value is based on the result of a template expression. Angular automatically keeps the variable's value up-to-date with the given expression, similar to bindings.

```ts
@let name = user.name;
@let greeting = 'Hello, ' + name;
@let data = data$ | async;
@let pi = 3.1459;
@let coordinates = {x: 50, y: 100};
@let longExpression = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ' +
                      'sed do eiusmod tempor incididunt ut labore et dolore magna ' +
                      'Ut enim ad minim veniam...';
```

Each @let block can declare exactly one variable. You cannot declare multiple variables in the same block with a comma.

- Assignability :- A key difference between @let and JavaScript's let is that @let cannot be reassigned after declaration. However, Angular automatically keeps the variable's value up-to-date with the given expression.

```ts
@let value = 1;
<!-- Invalid - This does not work! -->
<button (click)="value = value + 1">Increment the value</button>
```

- Variable scope:- @let declarations are scoped to the current view and its descendants. Angular creates a new view at component boundaries and wherever a template might contain dynamic content, such as control flow blocks, @defer blocks, or structural directives.

Since @let declarations are not hoisted, they cannot be accessed by parent views or siblings:

```ts
@let topLevel = value;
<div>
  @let insideDiv = value;
</div>
{{topLevel}} <!-- Valid -->
{{insideDiv}} <!-- Valid -->
@if (condition) {
  {{topLevel + insideDiv}} <!-- Valid -->
  @let nested = value;
  @if (condition) {
    {{topLevel + insideDiv + nested}} <!-- Valid -->
  }
}
<div *ngIf="condition">
  {{topLevel + insideDiv}} <!-- Valid -->
  @let nestedNgIf = value;
  <div *ngIf="condition">
     {{topLevel + insideDiv + nestedNgIf}} <!-- Valid -->
  </div>
</div>
{{nested}} <!-- Error, not hoisted from @if -->
{{nestedNgIf}} <!-- Error, not hoisted from *ngIf -->
```

- Full syntax:- The @let syntax is formally defined as:

1. The @let keyword.
2. Followed by one or more whitespaces, not including new lines.
3. Followed by a valid JavaScript name and zero or more whitespaces.
4. Followed by the = symbol and zero or more whitespaces.
5. Followed by an Angular expression which can be multi-line.
6. Terminated by the ; symbol.

- **Template reference variables**:- Template reference variables give you a way to declare a variable that references a value from an element in your template.
A template reference variable can refer to the following:

1. a DOM element within a template (including custom elements)
2. an Angular component or directive
3. a TemplateRef from an ng-template

- Declaring a template reference variable:- You can declare a variable on an element in a template by adding an attribute that starts with the hash character (#) followed by the variable name.

```ts
<!-- Create a template reference variable named "taskInput", referring to the HTMLInputElement. -->
<input #taskInput placeholder="Enter task name">
```

- Assigning values to template reference variables:- Angular assigns a value to template variables based on the element on which the variable is declared.
If you declare the variable on a Angular component, the variable refers to the component instance.

```ts
<!-- The `startDate` variable is assigned the instance of `MyDatepicker`. -->
<my-datepicker #startDate />
```

## "preserveWhitespaces" configuration in Angular templates

The "preserveWhitespaces" configuration in Angular templates is used to control the handling of whitespace characters in the template. When set to "true", it preserves
all whitespace characters, including line breaks and spaces. When set to "false" or not specified, it removes unnecessary whitespace characters to minimize the size of the rendered HTML.

---------

## Data Binding

Data binding is a mechanism in Angular that establishes a connection between the component and the template, allowing the synchronization of data between them.Data binding automatically keeps your page up-to-date based on your application's state. You use data binding to specify things such as the source of an image, the state of a button, or data for a particular user.

The different types of data binding in Angular are:

1. Interpolation ({{}})
2. Property binding ([...])
3. Event binding ((...))
4. Two-way binding ([(...)])

Without a framework, you would be responsible for pushing data values into the HTML controls and turning user responses into actions and value updates. Writing such push and pull logic by hand is tedious, error-prone, and a nightmare to read, as any experienced front-end JavaScript programmer can attest.

Angular supports two-way data binding, a mechanism for coordinating the parts of a template with the parts of a component. Add binding markup to the template HTML to tell Angular how to connect both sides.
Angular processes all data bindings once for each JavaScript event cycle, from the root of the application component tree through all child components.
Data binding plays an important role in communication between a template and its component, and is also important for communication between parent and child components.


**Interpolation**:- Interpolation refers to embedding expressions into marked up text. By default, interpolation uses the double curly braces {{ and }} as delimiters.
To illustrate how interpolation works, consider an Angular component that contains a currentCustomer variable:

```ts
currentCustomer = 'Maria';
```

Use interpolation to display the value of this variable in the corresponding component template:

```html
<h3>Current customer: {{ currentCustomer }}</h3>
```

Angular replaces currentCustomer with the string value of the corresponding component property. In this case, the value is Maria.

In the following example, Angular evaluates the title and itemImageUrl properties to display some title text and an image.

```html
<p>{{ title }}</p>
<div><img alt="item" src="{{itemImageUrl}}"></div>
```


**Property Binding**:- Property binding in Angular helps you set values for properties of HTML elements or directives. Use property binding to do things such as toggle button features, set paths programmatically, and share values between components.Property binding moves a value in one direction, from a component's property into a target element property.
Property binding helps you set values for properties of HTML elements or directives. To bind to an element's property, enclose it in square brackets `[]` which causes Angular to evaluate the right-hand side of the assignment as a dynamic expression.

To bind to an element's property, enclose it in square brackets, [], which identifies the property as a target property.A target property is the DOM property to which you want to assign a value.

To bind the src property of an *img* element to a component's property, place src in square brackets followed by an equal sign and then the property.

Using the property itemImageUrl, type the following code:

```html
src/app/app.component.html
<img alt="item" [src]="itemImageUrl">
```

Declare the itemImageUrl property in the class, in this case AppComponent.

```ts
src/app/app.component.ts
itemImageUrl = '../assets/phone.svg';
```


**Event Binding**:- Event binding lets you listen for and respond to user actions such as keystrokes, mouse movements, clicks, and touches.To bind to an event you use the Angular event binding syntax. This syntax consists of a target event name within parentheses to the left of an equal sign, and a quoted template statement to the right.

```html
<button (click)="onSave()">Save</button>
```

The event binding listens for the button's click events and calls the component's onSave() method whenever a click occurs.
To determine an event target, Angular checks if the name of the target event matches an event property of a known directive.


**Two way binding**:- Two-way binding gives components in your application a way to share data. Use two-way binding to listen for events and update values simultaneously between parent and child components.
Two-way binding combines the syntax from property binding, [], and the syntax from event binding, ()

1. Property binding - Sets a specific element property.
2. Event binding- Listens for an element change event.

Angular's two-way binding syntax is a combination of square brackets and parentheses, [()]. The [()] syntax combines the brackets of property binding, [], with the parentheses of event binding, (), as follows.

```ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  imports: [FormsModule],
  template: `
    <main>
      <h2>Hello {{ firstName }}!</h2>
      <input type="text" [(ngModel)]="firstName" />
    </main>
  `
})
export class AppComponent {
  firstName = 'Collins';
}
```

- Two-way binding between components:- Leveraging two-way binding between a parent and child component requires more configuration compared to form elements.

```ts
// ./app.component.ts
import { Component } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
@Component({
  selector: 'app-root',
  imports: [CounterComponent],
  template: `
    <main>
      <h1>Counter: {{ initialCount }}</h1>
      <app-counter [(count)]="initialCount"></app-counter>
    </main>
  `,
})
export class AppComponent {
  initialCount = 18;
}
```

```ts
// './counter/counter.component.ts';
import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-counter',
  template: `
    <button (click)="updateCount(-1)">-</button>
    <span>{{ count }}</span>
    <button (click)="updateCount(+1)">+</button>
  `,
})
export class CounterComponent {
  @Input() count: number;
  @Output() countChange = new EventEmitter<number>();
  updateCount(amount: number): void {
    this.count += amount;
    this.countChange.emit(this.count);
  }
}
```

- Enabling two-way binding between components

If we break down the example above to its core , each two-way binding for components requires the following:

The child component must contain:

1. An @Input() property
2. A corresponding @Output() event emitter that has the exact same name as the input property plus "Change" at the end. The emitter must also emit the same type as the input property.
3. A method that emits to the event emitter with the updated value of the @Input().

```ts
// './counter/counter.component.ts';
import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({ 
   // Omitted for brevity 
})
export class CounterComponent {
  @Input() count: number;
  @Output() countChange = new EventEmitter<number>();
  updateCount(amount: number): void {
    this.count += amount;
    this.countChange.emit(this.count);
  }
}
```

The parent component must:

1. Wrap the @Input() property name in the two-way binding syntax.
2. Specify the corresponding property to which the updated value is assigned

```ts
// ./app.component.ts
import { Component } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
@Component({
  selector: 'app-root',
  imports: [CounterComponent],
  template: `
    <main>
      <app-counter [(count)]="initialCount"></app-counter>
    </main>
  `,
})
export class AppComponent {
  initialCount = 18;
}
```


------------

## Pipes

Angular pipes let you declare display-value transformations in your template HTML. A class with the @Pipe decorator defines a function that transforms input values to output values for display in a view.

Angular defines various pipes, such as the date pipe and currency pipe.You can also define new pipes.
To specify a value transformation in an HTML template, use the pipe operator (|).

You can chain pipes, sending the output of one pipe function to be transformed by another pipe function. A pipe can also take arguments that control how it performs its transformation. For example, you can pass the desired format to the date pipe.

Angular pipes are a feature that transforms data before displaying it in the template.They are used for tasks such as formatting dates, numbers, and strings, as well as creating custom transformations.

Angular's Pipe is a class that allows for the creation of custom data transformation functions that can be applied in templates using the pipe syntax. Pipes are used to format, filter, or transform data before displaying it in the template. They are used by creating a custom pipe class with the @Pipe decorator and implementing the transform() method to define the transformation logic. The pipe can then be used in the template by adding it to the pipe syntax.

**Custom Pipes**:-

Pipes to transform strings, currency amounts, dates, and other data for display. Pipes are simple functions in template expressions to accept an input value and return a transformed value. Pipes are helpful because you can use them throughout your application while only declaring each pipe once. For example, you would use a pipe to show the date as April 15, 1988, rather than the raw string format.

- JsonPipe - Converts a value into its JSON-format representation. Useful for debugging.**{{ value_expression | json }}**
- AsyncPipe - The async pipe subscribes to an Observable or Promise and returns the latest value it has emitted. When a new value is emitted, the async pipe marks the component to be checked for changes. When the component gets destroyed, the async pipe unsubscribes automatically to avoid potential memory leaks. When the reference of the expression changes, the async pipe automatically unsubscribes from the old Observable or Promise and subscribes to the new one.**{{ obj_expression | async }}**
- CurrencyPipe - Transforms a number to a currency string, formatted according to locale rules that determine group sizing and separator, decimal-point character, and other locale-specific configurations.**{{ value_expression | currency [ : currencyCode [ : display [ : digitsInfo [ : locale ] ] ] ] }}**
- DatePipe - Formats a date value according to locale rules.DatePipe is executed only when it detects a pure change to the input value. A pure change is either a change to a primitive input value (such as String, Number, Boolean, or Symbol), or a changed object reference (such as Date, Array, Function, or Object).Note that mutating a Date object does not cause the pipe to be rendered again. To ensure that the pipe is executed, you must create a new Date object.
Only the en-US locale data comes with Angular. To localize dates in another language, you must import the corresponding locale data.**{{ value_expression | date [ : format [ : timezone [ : locale ] ] ] }}**
- DecimalPipe - Formats a value according to digit options and locale rules. Locale determines group sizing and separator, decimal point character, and other locale-specific configurations.**{{ value_expression | number [ : digitsInfo [ : locale ] ] }}**
- PercentPipe - Transforms a number to a percentage string, formatted according to locale rules that determine group sizing and separator, decimal-point character, and other locale-specific configurations.**{{ value_expression | percent [ : digitsInfo [ : locale ] ] }}**
- KeyValuePipe - Transforms Object or Map into an array of key value pairs.**{{ input_expression | keyvalue [ : compareFn ] }}**
- UpperCasePipe - Transforms text to all upper case.**{{ value_expression | uppercase }}**
- TitleCasePipe - Transforms text to title case. Capitalizes the first letter of each word and transforms the rest of the word to lower case. Words are delimited by any whitespace character, such as a space, tab, or line-feed character.**{{ value_expression | titlecase }}**
- SlicePipe - Creates a new Array or String containing a subset (slice) of the elements.**{{ value_expression | slice : start [ : end ] }}**
- PercentPipe - Transforms a number to a percentage string, formatted according to locale rules that determine group sizing and separator, decimal-point character, and other locale-specific configurations.**{{ value_expression | percent [ : digitsInfo [ : locale ] ] }}**
- LowerCasePipe - Transforms text to all lower case.**{{ value_expression | lowercase }}**
- I18nPluralPipe - Maps a value to a string that pluralizes the value according to locale rules.**{{ value_expression | i18nPlural : pluralMap [ : locale ] }}**
- I18nSelectPipe - Generic selector that displays the string that matches the current value.**{{ value_expression | i18nSelect : mapping }}**

```ts
import { AsyncPipe, CurrencyPipe, DatePipe, DecimalPipe, I18nSelectPipe, JsonPipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [
    JsonPipe, 
    AsyncPipe,
    UpperCasePipe,
    LowerCasePipe,
    CurrencyPipe,
    DecimalPipe,
    DatePipe,
    I18nSelectPipe
    ],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {

  student ={
    name: 'John Doe',
    age:10
  }
  names= [1,2,3,4,5,6,7,8,9]
  schoolToUpperCase = "egerton university"
  schoolToLowerCase="EGERTON UNIVERSITY"
  amount =20.00
  PI=3.14159265359
  promise = new Promise((ressolve,reject)=> {
      setTimeout (()=> {
        ressolve(this.names.length),3000
      })
  })
  today = Date.now()
  gender: string = 'female';
  inviteMap: any = {'male': 'Invite him.', 'female': 'Invite her.', 'other': 'Invite them.'};
}
```

```html
<p>{{student}}</p>
<p>{{student|json}}</p>
<p>{{promise|async }}</p>
<p>{{schoolToUpperCase|uppercase}}</p>
<p>{{schoolToLowerCase|lowercase}}</p>
<p>{{amount|currency:"USD"}}</p>
<p>{{PI|number:"1.1-5"}}</p>
<p>{{today|date:"medium"}}</p>
<div>{{gender | i18nSelect: inviteMap}} </div>
```

The "async" pipe in Angular is used to subscribe to an asynchronous data source, such as an Observable or Promise, and automatically update the view with the emitted values.


-------

## Directives

Angular templates are dynamic. When Angular renders them, it transforms the DOM according to the instructions given by directives. A directive is a class with a @Directive() decorator.

A component is technically a directive. However, components are so distinctive and central to Angular applications that Angular defines the @Component() decorator, which extends the @Directive() decorator with template-oriented features.
In addition to components, there are two other kinds of directives: structural and attribute. Angular defines a number of directives of both kinds, and you can define your own using the @Directive() decorator.

Just as for components, the metadata for a directive associates the decorated class with a selector element that you use to insert it into HTML. In templates, directives typically appear within an element tag as attributes, either by name or as the target of an assignment or a binding.

Structural directives - Structural directives alter layout by adding, removing, and replacing elements in the DOM.*ngFor	An iterative, which tells Angular to create one <li> per hero in the heroes list.*ngIf	A conditional, which includes the HeroDetail component only if a selected hero exists.

Attribute directives - alter the appearance or behavior of an existing element. In templates they look like regular HTML attributes, hence the name.The ngModel directive, which implements two-way data binding, is an example of an attribute directive. ngModel modifies the behavior of an existing element (typically <input>) by setting its display value property and responding to change events.

Directives are core feature that allows you to extend HTML by attaching custom behavior to elements and components.They help to manipulate the DOM,add event and control rendering dynamically. A directive is a class with a @Directive() decorator.

Types of directives includes:-

1. Component directives - custom HTML elements with templates and behavior.
2. Structural directives - Modify DOM structure.
3. Attribute directives - Change behavior or appearance of an element.


**Component directives**:- A Component is a special type of directive that has a template(view).It is commonly used directive in Angular.Component directive must have a selector and a template.
A component is technically a directive. However, components are so distinctive and central to Angular applications that Angular defines the @Component() decorator, which extends the @Directive() decorator with template-oriented features.

Angular templates are dynamic. When Angular renders them, it transforms the DOM according to the instructions given by directives.

You can define your own using the @Directive() decorator.

Just as for components, the metadata for a directive associates the decorated class with a selector element that you use to insert it into HTML. In templates, directives typically appear within an element tag as attributes, either by name or as the target of an assignment or a binding.

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-direct',
  standalone: true,
  templateUrl: './direct.component.html',
  styleUrl: './direct.component.css'
})
export class DirectComponent {

}
```

The common directive that can be used in HTML is `<app-direct> </app-direct>`


**Structural directives**:- Structural directives are directives which change the DOM layout by adding and removing DOM elements.Structural directives alter layout by adding, removing, and replacing elements in the DOM. The example template uses two built-in structural directives to add application logic to how the view is rendered.
Angular provides a set of built-in structural directives (such as NgIf, NgForOf, NgSwitch and others) which are commonly used in all Angular projects.
Structural directives are directives applied to an <ng-template> element that conditionally or repeatedly render the content of that <ng-template>.

If a directive modifies the structure of template by removing or adding an element you use an aestrik.E.g *ngFor

- The [ngIf] directive - is used to conditionally display or hide elements based on a given expression. It adds or removes elements from the DOM based on the truthiness of the expression.Angular's ngIf directive is used to conditionally render content in the template based on an expression in the component. It allows the component to control the visibility of elements based on certain conditions. It is used by adding the ngIf directive to an element and providing it with the expression to evaluate.

A structural directive that conditionally includes a template based on the value of an expression coerced to Boolean. When the expression evaluates to true, Angular renders the template provided in a then clause, and when false or null, Angular renders the template provided in an optional else clause. The default template for the else clause is blank.

When NgIf is false, Angular removes an element and its descendants from the DOM. Angular then disposes of their components, which frees up memory and resources.

```ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-direct',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './direct.component.html',
  styleUrl: './direct.component.css'
})
export class DirectComponent {

  courses =[1]
}
```

```html
<div *ngIf="courses.length>0">
   List of courses
</div>
<div *ngIf="courses.length==0">
   No courses Yet
</div>
```

OR to avoid repeating ngIf use:-

```html
<div *ngIf="courses.length>0; else noCourses">
   List of courses
</div>
<ng-template #noCourses>
   No courses Yet
</ng-template>
```

Or use this approach for consistency:-

```html
<div *ngIf="courses.length>0; then Courses else noCourses">
</div>
<ng-template #Courses>
   List of courses
</ng-template>
<ng-template #noCourses>
   No courses Yet
</ng-template>
```

- The [ngFor] directive - The "ngFor" directive is used to iterate over a collection of items in Angular and generate the corresponding HTML elements for each item.
Angular's ngFor directive is used to iterate over a collection and generate HTML elements for each item in the collection. It allows the component to dynamically
render elements based on the data in the collection. It is used by adding the ngFor directive to an element and providing it with the collection to iterate over.

The "trackBy" function is used in conjunction with the ngFor directive in Angular to improve the performance of rendering lists. It provides away to uniquely identify and track items in the collection, allowing Angular to optimize the rendering process by reusing existing DOM elements instead of recreating them.

The "trackBy" function in Angular ngFor is used to optimize the rendering of lists by providing a unique identifier for each item. It helps Angular in identifying changes in the list and updating only the necessary elements in the DOM.

```ts
courses = ["course1","course2","course3"]
```

```html
<ul>
   <li *ngFor="let course of courses; index as i">{{ course }}</li>
</ul>
```

- The [ngSwitch] directive on a container specifies an expression to match against. The expressions to match are provided by ngSwitchCase directives on views within the container.The `"ngSwitch"` directive is used to conditionally render content based on the value of an expression. It allows for multiple cases and provides an alternative to nested ngIf statements.

Angular's ngSwitch directive is used to conditionally render content based on the value of an expression in the component. It allows the component to choose among
multiple templates based on the value of an expression. It is used by adding the ngSwitch directive to a container element and providing it with the expression to evaluate.

1. Every view that matches is rendered.
2. If there are no matches, a view with the ngSwitchDefault directive is rendered.
3. Elements within the [NgSwitch] statement but outside of any NgSwitchCase or ngSwitchDefault directive are preserved at the location.

The @for block is part of the new control flow syntax introduced in Angular 17.0
The control flow blocks ( @if , @for , @switch ) are here to replace the 3 structural directives ngIf , ngFor and ngSwitch .
In the case of the @for block, feature wise they serve the same purpse with a few advantages :
1. No need to import the directive in standalone components
2. Generate a bit less code in the final bundle
3. enable better DX for track by passing a key directly.
4. Make devs more concious about the track functionality by making it required.
5. Nice DX for empty for-loops with the @empty block

```ts
@for (car of cars; track car.id) {
<option [value]="car.value">{{car.viewValue}}</option>
}
```

instead of *ngFor

```ts
<option *ngFor="let car of cars" [value]="car.value">{{car.viewValue}}</option>
```

The @for block makes it easier to loop through items in a collection and manage them efficiently.Unlike NgFor, which needs a trackBy function to identify each item uniquely, @for just needs a simple tracking expression.
If the collection is empty, you can use the @empty block to display something specific.Also, @for automatically figures out the least amount of changes needed to update the list on the screen, making it more efficient than NgFor, which allowed for custom ways to track changes but @for doesn't support that.


**Attribute directives**:- Change the appearance or behavior of DOM elements and Angular components with attribute directives.Attribute directives alter the appearance or behavior of an existing element. In templates they look like regular HTML attributes, hence the name.

The `ngModel` directive, which implements two-way data binding, is an example of an attribute directive. ngModel modifies the behavior of an existing element (typically <input>) by setting its display value property and responding to change events.

The `ng-app` directive is used to define the root element of an AngularJS application.It initializes the application and auto-bootstraps the AngularJS framework.

The `"ngStyle"` directive is used to dynamically apply styles to an element based on the values of expressions in the component. It allows for dynamic styling without directly manipulating the CSS classes.Angular's ngStyle directive is used to conditionally apply inline styles to an element based on expressions in the component. It allows dynamic style binding by evaluating the expressions and applying the styles accordingly. It is used by adding the ngStyle directive to an element and providing it with the desired style bindings.

The `"ngClass"` directive is used to conditionally apply CSS classes to an element based on the values of expressions in the component. It allows for dynamic class binding.Angular's ngClass directive is used to conditionally apply CSS classes to an element based on expressions in the component. It allows dynamic class binding by evaluating the expressions and adding or removing CSS classes accordingly. It is used by adding the ngClass directive to an element and providing it with the desired class bindings.

The `"ngModel"` directive is used for two-way data binding between a form input element and a component property. It allows the component to get and set the value
of the input element.

The `"ng-container"` directive is a structural directive that acts as a grouping element without rendering any additional element to the DOM. It is often used to apply structural directives to multiple elements.
Angular's ng-container directive is a grouping element that does not generate any additional DOM element. It is used to apply structural directives to multiple elements without the need for a wrapping element. It is often used in conjunction with ngIf, ngFor, and ngTemplateOutlet to structure the layout and logic of the template.

The `"ng-content"` directive is used to project content from a parent component into a child component. It allows for dynamic composition of components and flexible content insertion.
ng-content directive is used to project content from a parent component into a child component. It allows for dynamic composition of components and flexible content insertion. It is used by adding the ng-content directive to the template of the child component and using it as a placeholder for the projected content.
ng-content is a placeholder element in Angular that allows the insertion of content from the parent component into a child component. It is used to create reusable components with customizable content.

The `"RouterOutlet"` directive is used in Angular to define the location where the router should render the components associated with different routes. It acts as a placeholder for dynamically loaded components.

Angular's `ng-template` directive is used to define a template block that can be conditionally rendered or used as a template for other structural directives like ngIf and ngFor. It allows for the creation of reusable templates that can be dynamically rendered or applied to elements. It is used by adding the ng-template directive to the template and providing it with a template block to be rendered or used as a template.

Angular's `ngTemplateOutlet` directive is used to render a template dynamically within the current component's view. It allows the reuse of templates and the dynamic insertion of content. It is used by adding the ngTemplateOutlet directive to an element and providing it with the template reference to be rendered.Angular's ngTemplateOutlet directive is used to render a template dynamically within the current component's view. It allows the reuse of templates and the dynamic insertion of content. It is used by adding the ngTemplateOutlet directive to an element and providing it with the template reference to be rendered.


-------

## Control flow

Angular templates support control flow blocks that let you conditionally show, hide, and repeat elements.

**Conditionally display content with `@if`, `@else-if` and `@else`**:- The @if block conditionally displays its content when its condition expression is truthy:

```ts
@if (a > b) {
  {{a}} is greater than {{b}}
}
```

The @if block might have one or more associated branches. Immediately after an @if block, you can optionally specify any number of @else if blocks and one @else block:

```ts
@if (a > b) {
{{a}} is greater than {{b}}
} @else if (b > a) {
{{a}} is less than {{b}}
} @else {
{{a}} is equal to {{b}}
}
```

You can create a reference to the result of an @if block's conditional expression and use that reference inside the block's content.

```ts
@if (users$ | async; as users) {
{{ users.length }}
}
```

**`@for` block-repeaters**:- The @for block loops through a collection and repeatedly renders the content of a block. The collection can be any JavaScript iterable, but Angular has additional performance optimizations for Array values.The @for block renders its content for each item in a collection.
Angular's @for block does not support flow-modifying statements like JavaScript's continue or break.

```ts
@for (item of items; track item.id) {
  {{ item.name }}
}
```

The @for block requires a track expression. Angular uses the value of this expression as a unique identity for each item. This identity allows the framework to perform the minimal set of DOM operations necessary after items are added, removed, or reordered.
The track expression allows Angular to maintain a relationship between your data and the DOM nodes on the page. This allows Angular to optimize performance by executing the minimum necessary DOM operations when the data changes.
Using track effectively can significantly improve your application's rendering performance when looping over data collections.

Select a property that uniquely identifies each item in the track expression. If your data model includes a uniquely identifying property, commonly id or uuid, use this value. If your data does not include a field like this, strongly consider adding one.

For static collections that never change, you can use $index to tell Angular to track each item by its index in the collection.

If no other option is available, you can specify identity. This tells Angular to track the item by its reference identity using the triple-equals operator (===). Avoid this option whenever possible as it can lead to significantly slower rendering updates, as Angular has no way to map which data item corresponds to which DOM nodes.

- Inside @for contents, several implicit variables are always available:
  1. $count - Number of items in a collection iterated over
  2. $index - Index of the current row
  3. $first - Whether the current row is the first row
  4. $last - Whether the current row is the last row
  5. $even - Whether the current row index is even
  6. $odd - Whether the current row index is odd

These variables are always available with these names, but can be aliased via a let segment:

```ts
@for (item of items; track item.id; let idx = $index, e = $even) {
  Item #{{ idx }}: {{ item.name }}
}
```

Aliasing is useful when nesting @for blocks so that you can reference these variable values in deeper blocks.

`Providing a fallback for @for blocks with the @empty block`:- You can optionally include an @empty section immediately after the @for block content. The content of the @empty block displays when there are no items:

```ts
@for (item of items; track item.name) {
   <li>{{ item.name }}</li>
} @empty {
   <li>There are no items.<li>
}
```

**Conditionally display content with the @switch block `@switch` block section**:- The syntax for switch is similar to if , inspired by the JavaScript switch statement:

```ts
@switch (condition) {
   @case (caseA) {
      Case A.
   }
   @case (caseB) {
      Case B.
   }
   @default {
      Default case.
   }
}
```

The value of the conditional expression is compared to the case expression using the === operator.
@switch does not have fallthrough, so you do not need an equivalent to a break or return statement.
The @default block is optional and can be omitted. If no @case matches the expression and there is no @default block, nothing is shown.

**NOTE**:-

- The @if block replaces *ngIf for expressing conditional parts of the UI.
- The @switch block replaces ngSwitch with major benefits:
   • The @switch block does not require a container element for the condition expression or each conditional template.
   • The @switch block supports template type-checking, including type narrowing within each branch.
- The @for block replaces *ngFor for iteration, and has several differences compared to its structural directive NgFor predecessor:
   • The @for block requires a tracking expression to uniquely identify items in the collection. While NgFor requires a trackBy method, however, the @for block simpli�es tracking by accepting a track expression.
   • You can specify content to show when the collection is empty with the @empty block.
   • The @for block uses an optimized algorithm for determining a minimal number of DOM operations necessary after a collection is modi�ed. While NgFor allowed developers to provide a custom IterableDiffer implementation, the @for block does not support custom differs.
- The track setting replaces NgFor 's concept of a trackBy function. Because @for is built-in, we can provide a better experience than passing a trackBy function, and directly use an expression representing the key instead. Migrating from trackBy to track is possible by invoking the trackBy function:

```ts
@for (item of items; track itemId($index, item)) {
{{ item.name }}
}
```

With NgFor,loops over immutable data without trackBy are the most common cause of performance bugs across Angular applications.
