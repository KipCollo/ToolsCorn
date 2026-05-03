# Rendering

## Builtin directives

SKDirectives are classes that add additional behavior to elements in your Angular applications. Use Angular's built-in directives to manage forms, lists, styles, and what users see.

`NgClass` Adds and removes a set of CSS classes. | `NgStyle` Adds and removes a set of HTML styles. | `NgModel` Adds two-way data binding to an HTML form element.

## Builtin pipes

Use pipes to transform strings, currency amounts, dates, and other data for display. Pipes are simple functions to use in template expressions to accept an input value and return a transformed value. Pipes are useful because you can use them throughout your application , some common pipes are

`DatePipe` | `UpperCasePipe` | `LowerCasePipe` | `CurrencyPipe` | `DecimalPipe` | `PercentPipe`

## Change detection

Change detection is the process through which Angular checks to see whether your application state has changed, and if any DOM needs to be updated. At a high level, Angular walks your components from top to bottom, looking for changes. Angular runs its change detection mechanism periodically so that changes to the data model are reflected in an application’s view. Change detection can be triggered either manually or through an asynchronous event
