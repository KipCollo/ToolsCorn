# Javascript Standard Libraries

## The Console API

- `console.log()` - Used to log general information or messages to the console.It's commonly used for debugging purposes or to display info about state of your app.
It prints the message to the screen.You can see the output of your code.

```js
console.log("Hello")
//output - Hello
```

- `console.error()`:- Outputs an error message to the console.Useful for logging errors that occur during execution of your code.
Dispalys an error message to the console

```js
console.error("Error")
//Display error message with red icon
```

- `console.table()`:- Displays tabular data as a table in the console.Useful for visualizing structured data such as arrays or objects in more organized formats.
Dispalys data in tabe format

```js
let users ={
    {name:"collo", age: 21}
    {name:"Collins", age:24}
};

console.table(users);
```

- `console.assert()`:- Writes an error message to the console if the specified condition is false.commonly used for adding assertions to your code to validate assumptions and catch potential bugs.
Logs a message if provided assertion is false.

```js
let age=8;
consoe.assert(age>=18, "User is not an adult")
```

`console.clear()` - Clears the console

```js
console.clear();
```

`console.group() & console.groupEnd()` - Groups logging statements together

```js
console.group("User details")
 console.log("Name: Collo")
 console.log("Age: 21")
console.groupEnd();
```

- `console.warn()`:- Outputs a warning message to the console.Warnings are often used to alert develpoers about potential issues in their code that may not necessarily cause errors but could lead to unexpected behaviours.

```js
console.warn("Warning message..")
```

- `console.info()`:- Outputs an informational message to the console.Similar to console.log(), but it's typically used for logging info that is informative or descriptive in nature.

```js
let users={
    fname:"collo", age:22
};

console.table(users)

console.clear()

let age= 17;
console.assert(age>=18, "Is an adult")

console.group("User details")
 console.log("Name: Collo")
 console.log("Age: 21")
console.groupEnd();
console.group("Purchase details")
 console.log("Product: laptop")
 console.log("Price: 2100")
console.groupEnd();
```

- The` console.dir()` method shows a list of all the properties of the specified object.


-------------


## Date and Time

**Creating Dates and different ways of creating Date object** - In JavaScript, there are several ways to create Date objects. Here are some of the most common ways:
1. `Using the Date() constructor`:- You can create a Date object using the Date() constructor. This creates a Date object that represents the current date and time.

```js
let currentDate = new Date();
```

2. `Using a specific date and time string`:- You can also create a Date object by passing in a specific date and time string as an argument to the Date() constructor. The string must be in a specific format, such as "MM/DD/YYYY hh:mm:ss".

```js
let specificDate = new Date('03/31/2023 12:00:00');
```

3. `Using individual date and time components`:- You can also create a Date object by passing in individual date and time components as arguments to the Date() constructor. These components include the year, month (0-11), day, hour, minute, second, and millisecond.

```js
let specificDate = new Date(2023, 2, 31, 12, 0, 0, 0);
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

You can also use the built-in methods provided by the Date object to extract individual components of a date, such as the year, month, day, hour, minute, second, and millisecond. For example, to get the current year, you can use the getFullYear() method:

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

setTimeout and setInterval are two commonly used functions in JavaScript that allow you to delay the execution of code. Here's a brief explanation of each:

**setTimeout**:- The setTimeout function allows you to execute a function after a specified amount of time has passed. The function takes two arguments: the first is the function you want to execute, and the second is the delay time in milliseconds.

```js
setTimeout(() => {
  console.log('This code will execute after 3 seconds');
}, 3000);
```

In this example, the setTimeout function is called with a delay of 3 seconds (3000 milliseconds). After the specified delay, the anonymous function is executed and logs the message to the console.

**setInterval**:- The setInterval function is similar to setTimeout, but instead of executing the function once, it executes the function repeatedly at a specified interval. The function also takes two arguments: the first is the function you want to execute, and the second is the interval time in milliseconds.

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


--------


## Timers


---------


## Fetch API

The Fetch API is a built-in JavaScript interface that allows you to make asynchronous HTTP requests to fetch resources from the web. The Fetch API is typically used to retrieve data from a web server or API endpoint, but it can also be used to send data to the server using the HTTP POST method.
Fetch is a function used for making HTTP requests to fetch resources.It simplifies asynchronous data fetching in Javascript and used for intercating with APIs to retrieve and send data asynchronously over the web.

Sytax:-

```js
fetch(uri, {options})
```

options - method e.g GET,POST

Here's an example of how to use the Fetch API to retrieve data from a web API:

```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

fetchData();
async function fetchData(){
   try{
      const response = await fetch("https://api.stackexchange.com/2.2/questions/featured?order=desc&sort=activity&site=stackoverflow")
      const data = await response.json()

   } catch(error){
      //
   }
}
```

In this example, we use the fetch method to send an HTTP GET request to the URL https://api.example.com/data. The fetch method returns a Promise that resolves to a Response object, which contains information about the HTTP response.
We then use the json method on the Response object to parse the response body as JSON data, and return another Promise that resolves to the parsed JSON data.
Finally, we use the then method to log the parsed JSON data to the console, and the catch method to log any errors that occur during the fetch operation.

Here's another example that shows how to use the Fetch API to send data to a server using the HTTP POST method:

```javascript
const data = {
  name: 'John Doe',
  email: 'johndoe@example.com',
  message: 'Hello world!'
};

fetch('https://api.example.com/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

In this example, we define an object data that contains some data we want to send to the server. We then use the fetch method to send an HTTP POST request to the URL https://api.example.com/contact, with the request body set to the JSON stringified version of the data object.
We also include a Content-Type header with the value application/json to indicate that we are sending JSON data in the request body.
As before, we use the then method to parse the JSON response data and log it to the console, and the catch method to handle any errors that occur during the fetch operation.
