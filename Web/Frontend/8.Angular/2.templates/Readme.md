# Template

A template in Angular is an HTML file that defines the structure and layout of a component. It includes placeholders and binding expressions to dynamically display data.Uses special syntax within a template to build on many of Angular's features.

A template looks like regular HTML, except that it also contains Angular template syntax, which alters the HTML based on your application's logic and the state of application and DOM data. Your template can use data binding to coordinate the application and DOM data, pipes to transform data before it is displayed, and directives to apply application logic to what gets displayed.

## Template syntax

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

## Property binding

Property binding helps you set values for properties of HTML elements or directives. To bind to an element's property, enclose it in square brackets `[]` which causes Angular to evaluate the right-hand side of the assignment as a dynamic expression.

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
