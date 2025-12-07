# Angular pipes

Angular pipes are a feature that transforms data before displaying it in the template.They are used for tasks such as formatting dates, numbers, and strings, as well as creating custom transformations.

Angular's Pipe is a class that allows for the creation of custom data transformation functions that can be applied in templates using the pipe syntax. Pipes are used to format, filter, or transform data before displaying it in the template. They are used by creating a custom pipe class with the @Pipe decorator and implementing the transform() method to define the transformation logic. The pipe can then be used in the template by adding it to the pipe syntax.

## Custom Pipes

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
