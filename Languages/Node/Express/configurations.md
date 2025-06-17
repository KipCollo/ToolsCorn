# Configuration

- app.set() and app.get():- The method app.set(name, value) accepts two parameters: name and value, and as you might guess, it sets the value for the name. For example, we often want to store the value of the port on which we plan to start our server:

```js
app.set('port', 3000);
```

Or, for a more advanced and realistic use case, we can grab the port from system environment variable PORT:

```js
app.set('port', process.env.PORT || 3000);
```

The name value could be an Express.js setting or an arbitrary string.
To get the value, we can use app.set(name) with a single parameter or more explicit method
app.get(name), for example:

```js
console.log('Express server listening on port ' + app.get('port'));
```

The app.set() also exposes variables to templates app-wide, e.g.,

```js
app.set('appName', 'HackHall');
```

Will be available in all templates, e.g., in a Jade template layout, this would be valid:

```js
doctype 5
html
head
title= appName
body
block content
```
