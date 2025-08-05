# Client JS

Synonym for JavaScript written to run in a web browser.
Includes:

1. Documents
2. Components
3. Graphics
4. Networking
5. Storage
6. Threads

What is the difference between innerHTML and textContent in JavaScript?

innerHTML: Sets or gets the HTML syntax describing the element's descendants.
textContent: Sets or gets the text content of the specified node.

What is the difference between event.preventDefault() and event.stopPropagation() in JavaScript?

event.preventDefault(): Prevents the default action the browser makes on that event.
event.stopPropagation(): Stops the event from bubbling up or capturing down the DOM.

## Adding Websites

- Inline javascript- Inserted inside HTML tags.

```html
<body onload="alert('Hello');">
    <b>Hello</b>
</body>
```

- In HTML,JS code can be inserted in btwn script tags.Old js may use a type attribute.It's though not required as Js is default scripting language in HTML.Script can be placed in head or body.

```html
 <script type="text/javascript"></script>
```

- Scripts can also be placed in external files.To use external scripts,put name of script in src attribute of script tag.
External script can be refernced in 3 ways:-

1. With ful url
2. With file path
3. Withuot any path

```html
<script src="https://www.kipcollo.com/js/script.js"></script>
<script src="js/script.js"></script>
<script src="script.js"></script>
```

Browser stops when rendering js is encountered.Js is executed before rendering continues.Often referred as context blocking.

Js shoul be placed at the end so that it can manipulates the already loaded html elements.It also leads to faster loading of websites.

```html
<head>
<script src="https://www.kipcollo.com/js/script.js"></script>
</head>
<body>
    <h1>JS</h1>
</body>
```

```js
document.querySelector("h1").appendElement("Learning")
```

This will say that js can manipulate a null element.

TODO Adding Javascript to HTML
