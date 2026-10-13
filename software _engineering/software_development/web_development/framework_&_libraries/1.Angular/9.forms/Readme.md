# Forms

Web applications use HTML forms to collect data from users and validate them, such as when logging in to an application, performing a search, or completing an online payment.

Angular Forms is a set of features and techniques used to handle and validate user input in forms.Applications use forms to enable users to log in, to update a profile, to enter sensitive information, and to perform many other data-entry tasks.

Angular provides two different approaches to handling user input through forms: reactive and template-driven. Both capture user input events from the view, validate the user input, create a form model and data model to update, and provide a way to track changes.

- Reactive forms and template-driven forms process and manage form data differently. Each approach offers different advantages.
  1. Reactive forms - Provide direct, explicit access to the underlying form's object model. Compared to template-driven forms, they are more robust: they're more scalable, reusable, and testable. If forms are a key part of your application, or you're already using reactive patterns for building your application, use reactive forms.
  2. Template-driven forms - Rely on directives in the template to create and manipulate the underlying object model. They are useful for adding a simple form to an app, such as an email list signup form. They're straightforward to add to an app, but they don't scale as well as reactive forms. If you have very basic form requirements and logic that can be managed solely in the template, template-driven forms could be a good fit.

They both capture user input events from the view, validate the user input, create a form model and data model to update, and provide a way to track changes.

Template-driven forms rely on directives in the template to create and handle forms, while reactive forms use explicit form controls and reactive programming to manage form data and validation.

`Validating form input`:- You can improve overall data quality by validating user input for accuracy and completeness. This page shows how to validate user input from the UI and display useful validation messages, in both reactive and template-driven forms.

## Data flow in forms

When an application contains a form, Angular must keep the view in sync with the component model and the component model in sync with the view. As users change values and make selections through the view, the new values must be reflected in the data model. Similarly, when the program logic changes values in the data model, those values must be reflected in the view.

Reactive and template-driven forms differ in how they handle data flowing from the user or from programmatic changes.

## Common form foundation classes

Both reactive and template-driven forms are built on the following base classes.

1. FormControl - Tracks the value and validation status of an individual form control.
2. FormGroup - Tracks the same values and status for a collection of form controls.Each form is part of FormGroup.
3. FormArray -  the same values and status for an array of form controls.
4. ControlValueAccessor - Creates a bridge between Angular FormControl instances and built-in DOM elements.

Angular's `FormBuilder` is a utility class that provides a concise way to define and create form controls and form groups. It simplifies the process of creating and
managing form controls by providing methods to define form controls with validation rules and default values. It is used by injecting the FormBuilder service into a component and invoking its methods to create form controls and groups.

Angular's `FormGroup class` is used to represent a group of form controls. It is used to create a container for multiple form controls that are related to each other. Angular's
`FormControl class` is used to represent a single form control. It is used to define and manage the value, validation rules, and state of an individual form control.

Angular's `Validators class` is a utility class that provides a set of pre-built validators that can be used to validate form controls in Angular forms. It includes validators for required fields, minimum and maximum values, email addresses, and more.Validators are typically used when defining form controls in reactive forms or
template-driven forms.
The `"ngOnInit" method` is a lifecycle hook in Angular that is used in forms to initialize and set up the form controls and validators. It is called after the component has been initialized and is a good place to set the initial values of the form or set up any form-related logic.

`Why not use normal HTML Form`:- When a normal HTMl form is submitted,it reloads the page by making an HTTP request to the server.Since we create a single page application using Angular,we can say that it will restart the complete Angular application.
To avoid this,we need Angular's help to stop this default behaviour.This can be achieved using template driven form or reactive form.

Provide direct, explicit access to the underlying form's object model. Compared to template-driven forms, they are more robust: they're more scalable, reusable, and testable. If forms are a key part of your application, or you're already using reactive patterns for building your application, use reactive forms.

Reactive Forms in angular are those which used to handle the inputs coming from the user. We can define controls by using classes such as FormGroup and FormControl.


## Reactive Forms

Angular's reactive forms approach is a way of building forms using reactive programming principles. It involves creating form controls and form groups programmatically in the component using the FormBuilder service. It provides more flexibility and control over form validation and handling complex form scenarios.
They are based on a reactive programming approach. Reactive forms operate in the TypeScript class of the component, and they are easier to test and scale better than template-driven forms.

- `ReactiveFormsModule` contains all necessary Angular directives and services that we will need to work with reactive forms.
- `FormBuilder` is an Angular service that we use to build a reactive form in an easy and convenient way.
- `FormGroup` is used to group individual controls into a logical representation of a form. The group method of the FormBuilder class is used to build the form.
It accepts an object as a parameter where each key is the unique name of a form control and each value an array that contains its default value.
- `formControlName` connects inputs to the form controls.

With reactive forms, you define the form model directly in the component class. The [formControl] directive links the explicitly created FormControl instance to a specific form element in the view, using an internal value accessor.
The following component implements an input field for a single control, using reactive forms. In this example, the form model is the FormControl instance.

```ts
import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-reactive-favorite-color',
  template: `
    Favorite Color: <input type="text" [formControl]="favoriteColorControl">
  `,
  standalone: false,
})
export class FavoriteColorComponent {
  favoriteColorControl = new FormControl('');
}
```

In reactive forms, the form model is the source of truth; it provides the value and status of the form element at any given point in time, through the [formControl] directive on the <input> element.

The formGroup and clrForm directives are used to associate the HTML form element with the issueForm property and identify it as a Clarity form.The formControlName directive is used to associate HTML elements with form controls using their name. Each control is also defined using a Clarity container element.

To add validations in a form control, we use the Validators class from the @angular/forms npm package.A validator is added in each form control instance that we build using the FormBuilder service.

Import ReactiveFormsModule In app.module.ts:

```ts
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [ReactiveFormsModule]
})
```

Define Form in TypeScript (app.component.ts)

```ts
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  submitForm() {
    console.log(this.userForm.value);
  }
}
```

Create the Form in HTML

```html
<form [formGroup]="userForm" (ngSubmit)="submitForm()">
  <label>Name:</label>
  <input type="text" formControlName="name">
  <div *ngIf="userForm.get('name').invalid && userForm.get('name').touched">
    Name is required (min 3 characters).
  </div>

  <label>Email:</label>
  <input type="email" formControlName="email">
  <div *ngIf="userForm.get('email').invalid && userForm.get('email').touched">
    Enter a valid email.
  </div>

  <button type="submit" [disabled]="userForm.invalid">Submit</button>
</form>

<p>Form Value: {{ userForm.value | json }}</p>
```

`Data flow in reactive forms` - In reactive forms each form element in the view is directly linked to the form model (a FormControl instance). Updates from the view to the model and from the model to the view are synchronous and do not depend on how the UI is rendered.


**Validating Input**:- In a reactive form, the source of truth is the component class. Instead of adding validators through attributes in the template, you add validator functions directly to the form control model in the component class. Angular then calls these functions whenever the value of the control changes.

Validator functions can be either synchronous or asynchronous:-
1. Sync validators	- Synchronous functions that take a control instance and immediately return either a set of validation errors or null. Pass these in as the second argument when you instantiate a FormControl.
2. Async validators	- Asynchronous functions that take a control instance and return a Promise or Observable that later emits a set of validation errors or null. Pass these in as the third argument when you instantiate a FormControl.

For performance reasons, Angular only runs async validators if all sync validators pass. Each must complete before errors are set.


-------


## Template Driven Forms

Angular's template-driven forms approach is a way of building forms using template syntax and directives. It allows the form controls and validation rules to be defined directly in the template, with Angular automatically managing the form state and validation. It is suitable for simpler forms with less complex validation requirements.

Rely on directives in the template to create and manipulate the underlying object model. They are useful for adding a simple form to an app, such as an email list signup form.If you have very basic form requirements and logic that can be managed solely in the template, template-driven forms could be a good fit.
They are easy and straightforward to set up in an Angular application. Template-driven forms do not scale well and are difficult to test because they are defined in the template of the component.

The "ngOnInit" method is a lifecycle hook in Angular that is used in forms to initialize and set up the form controls and validators. It is called after the component has been initialized and is a good place to set the initial values of the form or set up any form-related logic.
It uses two-way data-binding (ngModel) to create and handle the form components.
Template-driven forms use two-way data binding to update the data model in the component as changes are made in the template and vice versa.

Template-driven forms rely on directives defined in the FormsModule.

1. NgModel- Reconciles value changes in the attached form element with changes in the data model, allowing you to respond to user input with input validation and error handling.
2. NgForm- Creates a top-level FormGroup instance and binds it to a <form> element to track aggregated form value and validation status. As soon as you import FormsModule, this directive becomes active by default on all <form> tags. You don't need to add a special selector.
3. NgModelGroup- Creates and binds a FormGroup instance to a DOM element.

Import FormsModule - Before using ngModel, add FormsModule in app.module.ts:

```ts
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule], // Add FormsModule here
  bootstrap: [AppComponent]
})
export class AppModule {}
```


Create the Form in HTML

```html
<form #userForm="ngForm" (ngSubmit)="submitForm(userForm)">
  <label>Name:</label>
  <input type="text" name="name" [(ngModel)]="user.name" required #name="ngModel">

  <label>Email:</label>
  <input type="email" name="email" [(ngModel)]="user.email" required #email="ngModel">

  <button type="submit" [disabled]="userForm.invalid">Submit</button><!-- Button should be type submit-->
</form>
```

Handle Form Submission in TypeScript

```ts
export class AppComponent {
  user = { name: '', email: '' };

  submitForm(form: any) {
    console.log('Form Submitted:', form.value);
  }
}
```

- Setup in template-driven forms

In template-driven forms, the form model is implicit, rather than explicit. The directive NgModel creates and manages a FormControl instance for a given form element.
The following component implements the same input field for a single control, using template-driven forms.

```ts
import {Component} from '@angular/core';
@Component({
  selector: 'app-template-favorite-color',
  template: `
    Favorite Color: <input type="text" [(ngModel)]="favoriteColor">
  `,
  standalone: false,
})
export class FavoriteColorComponent {
  favoriteColor = '';
}
```

`Data flow in template-driven forms` - In template-driven forms, each form element is linked to a directive that manages the form model internally.
In a template-driven form the source of truth is the template. The NgModel directive automatically manages the FormControl instance for you.


**Validating Input**:- To add validation to a template-driven form, you add the same validation attributes as you would with native HTML form validation. Angular uses directives to match these attributes with validator functions in the framework.
Every time the value of a form control changes, Angular runs validation and generates either a list of validation errors that results in an INVALID status, or null, which results in a VALID status.You can then inspect the control's state by exporting ngModel to a local template variable.

```html
<input type="text" id="name" name="name" class="form-control"
                 required minlength="4" appForbiddenName="bob"
                 [(ngModel)]="actor.name" #name="ngModel">
@if (name.invalid && (name.dirty || name.touched)) {
            <div class="alert">
              @if (name.hasError('required')) {
                <div>
                  Name is required.
                </div>
              }
              @if (name.hasError('minlength')) {
                <div>
                  Name must be at least 4 characters long.
                </div>
              }
              @if (name.hasError('forbiddenName')) {
                <div>
                  Name cannot be Bob.
                </div>
              }
           </div>
}
```


## Building dynamic forms

Many forms, such as questionnaires, can be very similar to one another in format and intent. To make it faster and easier to generate different versions of such a form, you can create a dynamic form template based on metadata that describes the business object model. Then, use the template to generate new forms automatically, according to changes in the data model.
