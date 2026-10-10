# Javascript Standard Libraries(Standard built-in objects(`global objects`))

Global objects: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects

The term global objects(or standard built-in objects) should not be confused with the global object."global objects" refer to objects in the global scope.
The global object itself can be accessed using the `this` operator in the global scope.The global scope consists of the properties of the global object,including inherited properties if any.

Other objects in global scope are either created by the user script or provided by the host application.The host objects available in browser contexts are documented.

Includes:-

1. Date Object
2. Math object


## Date and Time

**Creating Dates and different ways of creating Date object** - In JavaScript, there are several ways to create Date objects. Here are some of the most common ways:
1. `Using the Date() constructor`:- You can create a Date object using the Date() constructor. This creates a Date object that represents the current date and time.

```js
let currentDate = new Date();
```

2. `Using a specific date and time string`:- You can also create a Date object by passing in a specific date and time string as an argument to the Date() constructor. The string must be in a specific format, such as "MM/DD/YYYY hh:mm:ss".

```js
let specificDate = new Date('03/31/2023 12:00:00');
console.log(new Date('Aug 02 2020 18:05:41'));
console.log(new Date('December 24, 2015'));
console.log(new Date(account1.movementsDates[0]));
```

3. `Using individual date and time components`:- You can also create a Date object by passing in individual date and time components as arguments to the Date() constructor. These components include the year, month (0-11), day, hour, minute, second, and millisecond.

```js
let specificDate = new Date(2023, 2, 31, 12, 0, 0, 0);
console.log(new Date(2037, 10, 31));
console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));
```

4. `Using the Date.parse() method`:- You can also create a Date object by calling the Date.parse() method with a date string. The date string must be in a specific format, such as "MM/DD/YYYY".

```js
let specificDate = new Date(Date.parse('03/31/2023'));
```

These are just a few of the most common ways to create Date objects in JavaScript. There are many other ways to create Date objects depending on your specific needs.


*Understanding milliseconds and other units of time* - In JavaScript, time is represented in milliseconds, which is a unit of time measurement equal to 1/1000th of a second. This means that when you create a Date object, the value returned represents the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC (also known as the Unix epoch).
For example, if you create a Date object representing the current date and time using the following code:

```js
let currentDate = new Date();
```

The value of currentDate represents the number of milliseconds that have elapsed since the Unix epoch.
You can perform various operations on Date objects using methods provided by the Date object. For example, you can get the current timestamp in milliseconds using the getTime() method:

```js
let currentDate = new Date();
let timestamp = currentDate.getTime();
```

You can also perform calculations with units of time other than milliseconds by using conversion factors. For example, to convert milliseconds to seconds, you can divide by 1000:

```js
let milliseconds = 5000;
let seconds = milliseconds / 1000;
```

You can also use the built-in methods provided by the Date object to extract individual components of a date, such as the year, month, day, hour, minute, second, and millisecond.

`The getFullYear() method` - is used to retrieve the four-digit year value of a JavaScript Date object. It returns the year as a four-digit number, such as 2023.

```js
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
```

Overall, understanding milliseconds and other units of time in JavaScript is important for working with Date objects and performing time-related operations in your code.


**Operations with Dates** - In JavaScript, you can perform various operations with Date objects. Here are some examples:

`Comparing dates`:- You can compare two Date objects using comparison operators such as <, >, <=, >=, ===, and !==. When you compare two Date objects, JavaScript compares their underlying timestamps (which represent the number of milliseconds since the Unix epoch).

```js
let date1 = new Date('2022-01-01');
let date2 = new Date('2022-01-02');
if (date1 < date2) {
  console.log('date1 is before date2');
} else {
  console.log('date1 is after date2');
}
```

`Adding and subtracting time`:- You can add or subtract time from a Date object using the set\*() methods. For example, to add one day to a date, you can use the setDate() method:

```js
let date = new Date();
date.setDate(date.getDate() + 1); // add one day
```

You can also subtract time from a date by passing a negative value to the set\*() method.

`Formatting dates`:- You can format a Date object as a string using the toLocaleString() method. This method returns a string that represents the date and time in a localized format (i.e., specific to the user's language and region).

```js
let date = new Date();
let dateString = date.toLocaleString(); // returns something like "3/31/2023, 11:23:45 AM"
```

You can also use other formatting methods such as toDateString(), toTimeString(), and toISOString() to format the date in different ways.

`Getting individual components of a date`:- You can get individual components of a Date object such as the year, month, day, hour, minute, second, and millisecond using the corresponding get\*() methods.

```js
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth(); // returns a value from 0 (January) to 11 (December)
let day = date.getDate();
```

These are just a few examples of the operations you can perform with Date objects in JavaScript. There are many other methods and techniques for working with dates, depending on your specific needs.

`Convert to string` - The toLocaleString() method is used to convert a JavaScript Date object to a localized string representation based on the current locale. It considers the user's time zone and regional settings to format the date and time.
The toDateString() method is used to convert the date portion of a JavaScript Date object to a human-readable string representation. It returns the date in the format 'Day Mon DD YYYY', such as 'Thu Jun 24 2023'.

**Date setter methods** - In JavaScript, you can use the setter methods provided by the Date object to set individual components of a date such as the year, month, day, hour, minute, second, and millisecond. Here are some examples of the Date setter methods:

`setFullYear()`:- The setFullYear() method sets the year (as a four-digit number) for a given date.

```js
let date = new Date();
date.setFullYear(2024);
```

`setMonth()`:- The setMonth() method sets the month (from 0 for January to 11 for December) for a given date.

```js
let date = new Date();
date.setMonth(11); // sets the month to December
```

`setDate()`:- The setDate() method sets the day of the month for a given date (from 1 to 31).

```js
let date = new Date();
date.setDate(15); // sets the day to the 15th
```

`setHours()`:- The setHours() method sets the hour for a given date (from 0 to 23).

```js
let date = new Date();
date.setHours(14); // sets the hour to 2:00 PM
```

`setMinutes()`:- The setMinutes() method sets the minute for a given date (from 0 to 59).

```js
let date = new Date();
date.setMinutes(30); // sets the minute to 30
```

`setSeconds()`:- The setSeconds() method sets the second for a given date (from 0 to 59).

```js
let date = new Date();
date.setSeconds(45); // sets the second to 45
```

`setMilliseconds()`:- The setMilliseconds() method sets the millisecond for a given date (from 0 to 999).

```js
let date = new Date();
date.setMilliseconds(500); // sets the millisecond to 500
```

These are just a few examples of the setter methods you can use to set individual components of a date in JavaScript. By using these methods, you can easily modify a date object to represent a specific date and time.


**Internationalization Dates** - Internationalization (i18n) is an important aspect of software development, especially when it comes to working with dates and times. In JavaScript, you can use the Internationalization API (Intl) to format dates according to a user's locale (i.e., specific to their language and region). Here are some examples of using Intl for formatting dates:

`Formatting a date according to a user's locale`: You can use the Intl.DateTimeFormat constructor to create a formatter object that formats a date according to a user's locale.

```js
let date = new Date();
let formatter = new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' });
let formattedDate = formatter.format(date); // returns something like "Mar 31, 2023"
```

In this example, the formatter object is created with the 'en-US' locale (i.e., English language and US region), and the dateStyle option is set to 'medium', which formats the date as a medium-length string (i.e., with the month name abbreviated).

`Customizing date formatting options`: You can customize the formatting options used by the formatter object to format a date in a specific way.

```js
let date = new Date();
let formatter = new Intl.DateTimeFormat('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});
let formattedDate = formatter.format(date); // returns something like "Saturday, March 31, 2023"
```

In this example, the formatter object is created with the 'en-US' locale, and the options are set to format the date with the full weekday name, the full month name, and the numeric day and year.

`Formatting relative dates`: You can use the Intl.RelativeTimeFormat constructor to create a formatter object that formats a date or time difference as a relative time string (e.g., "in 5 minutes", "1 day ago").

```js
let now = new Date();
let later = new Date(now.getTime() + 300000); // 5 minutes later
let formatter = new Intl.RelativeTimeFormat('en-US', { style: 'long' });
let relativeTime = formatter.format(later - now, 'minute'); // returns something like "in 5 minutes"
```


## setTimeOut and setInterval

setTimeout and setInterval are two commonly used functions in JavaScript that allow you to delay the execution of code.

**setTimeout**:- The setTimeout function allows you to execute a function after a specified amount of time has passed. The function takes two arguments: the first is the function you want to execute, and the second is the delay time in milliseconds.

```js
setTimeout(() => {
  console.log('This code will execute after 3 seconds');
}, 3000);
```

In this example, the setTimeout function is called with a delay of 3 seconds (3000 milliseconds). After the specified delay, the anonymous function is executed and logs the message to the console.
`The clearTimeout() function` is used to cancel a timeout set by the setTimeout() function. It clears the scheduled execution of a function before it is triggered.

**setInterval**:- The setInterval function that executes the function repeatedly at a specified interval. The function also takes two arguments: the first is the function you want to execute, and the second is the interval time in milliseconds.

```js
let count = 0;
let interval = setInterval(() => {
  console.log(`The count is ${count}`);
  count++;
  if (count > 5) {
    clearInterval(interval);
  }
}, 1000);
```

In this example, the setInterval function is called with an interval of 1 second (1000 milliseconds). The anonymous function logs the current count to the console and increments it by 1. If the count reaches 5, the clearInterval function is called to stop the interval from executing further.

The `clearInterval() function` is used to cancel an interval set by the setInterval() function. It stops the repeated execution of a function at a fixed interval.


--------


## Timers


-------


## Math Object

Math is a built-in object in JavaScript that provides mathematical constants and functions. One of the most common uses of Math in JavaScript is for rounding numbers.
The Math object has no constructor.It is static.All methods and properties can be used without creating a Math object.

**Math Properties(Constants)**:-The syntax for any Math property is : *Math.property.*

```js
Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E
```

**Math Methods**: Defined by *Math.method(number)*:-

`Math.round(x)` - Returns x rounded to its nearest integer.It rounds the number up or down based on the decimal part.
`Math.ceil(x)` -Returns x rounded up to its nearest integer.It increases the number to the next higher integer, regardless of the decimal part.
`Math.floor(x)`- Returns x rounded down to its nearest integer.It removes the decimal part of the number and returns the largest integer less than or equal to the given number.
`Math.trunc(x)`- Returns the integer part of x (new in ES6)
`Math.abs(x)` - Returns the absolute value of x.It returns the magnitude of the number without considering its sign.
`Math.acos(x)` - Returns the arccosine of x, in radians
`Math.acosh(x)` - Returns the hyperbolic arccosine of x
`Math.asin(x)` - Returns the arcsine of x, in radians
`Math.asinh(x)` - Returns the hyperbolic arcsine of x
`Math.atan(x)` - Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
`Math.atan2(y, x)` - Returns the arctangent of the quotient of its arguments
`Math.atanh(x)` - Returns the hyperbolic arctangent of x
`Math.cbrt(x)` - Returns the cubic root of x
`Math.cos(x)`- Returns the cosine of x (x is in radians)
`Math.cosh(x)` - Returns the hyperbolic cosine of x
`Math.exp(x)`- Returns the value of Ex
`Math.log(x)` - Returns the natural logarithm (base E) of x
`Math.max(x, y, z, ..., n)` - Returns the number with the highest value
`Math.min(x, y, z, ..., n)` - Returns the number with the lowest value
`Math.pow(x, y)` - Returns the value of x to the power of y
`Math.random()`- Returns a random number between 0 and 1.The Math.random() function is used to generate a random floating-point number between 0 (inclusive) and 1 (exclusive). It is often used to introduce randomness in JavaScript programs.
`Math.sign(x)` - Returns if x is negative, null or positive (-1, 0, 1)
`Math.sin(x)` - Returns the sine of x (x is in radians)
`Math.sinh(x)` - Returns the hyperbolic sine of x
`Math.sqrt(x)` - Returns the square root of x
`Math.tan(x)`- Returns the tangent of an angle
`Math.tanh(x)` - Returns the hyperbolic tangent of a number

Math.round(): The Math.round() method rounds a number to the nearest integer. If the fractional part of the number is 0.5 or greater, the number is rounded up. If the fractional part is less than 0.5, the number is rounded down.

```js
Math.round(4.6); // output: 5
Math.round(4.4); // output: 4
```

Math.floor(): The Math.floor() method rounds a number down to the nearest integer.

```js
Math.floor(4.6); // output: 4
Math.floor(4.4); // output: 4
Math.trunc(-23.3) //-24
```

Math.ceil(): The Math.ceil() method rounds a number up to the nearest integer.

```js
Math.ceil(4.6); // output: 5
Math.ceil(4.4); // output: 5

```

Math.trunc(): The Math.trunc() method returns the integer part of a number by removing any fractional digits.

```js
Math.trunc(4.6); // output: 4
Math.trunc(4.4); // output: 4
Math.trunc(-23.3) //-23
```


--------

## JSON(Javascript Object Notation)

`JSON.stringify() method` - The JSON.stringify() method is used to convert a JavaScript object or value to a JSON string. It is commonly used for data serialization and communication with web servers.

`JSON.parse() method` - The JSON.parse() method is used to parse a JSON string and convert it into a JavaScript object or value. It is commonly used to deserialize JSON data received from a server.


--------

## Iterators & Iterables
