# HTML

HTML stands for HyperText Markup Language. It is used on the frontend and gives the structure to the webpage which you can style using CSS and make interactive using JavaScript.

HyperText refers to the pieces of text which can link to other documents in the website.
Markup Language is done by HTML tags.

HTML5 is dynamic nature hence usable for far more than just mobile and desktop browsers. It can be compiled into a native mobile app through platforms such as PhoneGap and appMobi

## HTML Versions

The major versions of HTML are:

1. HTML 1.0 (1993) – The first official release; limited capabilities.
2. HTML 2.0 (1995) – Standardized existing practices; basic structure tags.
3. HTML 3.2 (1997) – Added tables, scripting support (JavaScript), and applets.
4. HTML 4.01 (1999) – Introduced strict, transitional, and frameset DOCTYPES; better CSS integration.
5. XHTML 1.0 (2000) – Reformulation of HTML 4.01 using XML syntax.
6. HTML5 (2014) – Major update; added semantic elements (<article>, <section>), multimedia (<audio>, <video>), canvas, local storage, and more.

HTML5 is the latest version of the markup language for the web and defines a whole new standard for developing web applications
Previous iterations of HTML (and its rigid XML-based sibling, XHTML) have been centered primarily on the concept of HTML as a markup language for documents. HTML5 is the first version to embrace the web as a platform for web application development.

HTML5 defines a series of new elements that you can use to develop rich internet applications as well as a range of standard JavaScript APIs for browsers to implement natively.A good example of HTML5’s new elements is <video>, which provides a means of playing video content in the browser without requiring an additional plug-in. HTML5 also provides the Media Element Interface that allows you to control video playback with JavaScript. It lets you create games, build mobile applications, and much more.

## Basic structure of an HTML5 document

HTML5 documents are structured in the same way as older versions of HTML: you put a <!DOCTYPE> declaration at the top of the document and open and close the HTML
document with matching <html> and </html> tags. Between these tags, you have a <head> section, where you place <meta> information and other noncontent items
such as stylesheets, and a <body> section, where your page content should go.

```html
<!DOCTYPE html>
<html lan="en">
<head>
   <meta charset="utf-8">
   <title>Page Title</title>
   <link rel="stylesheet" href="style.css">
   <script src="app.js"></script>
</head>

<body>
   <h1>Head<h1>
</body>
</html>
```

## HTML5 new semantic elements

`<header>`
`<hgroup>`
`<nav>`
`<section>`
`<article>`
<`time>`
`<footer>` - Usually appears at the bottom of a page or section,typically used for things like related posts or links,copyright information, and metadata.
`<aside>` - Used to define a section of a page that’s separate from the content area in which it’s defined.In a web application, you might use <aside> for a
pop-up or a floating window that appears over the main part of the application itself.
`<mark> `element is used to represent a part of text in your document that should be marked or highlighted. A common use for this would be to highlight search
terms within a document.

<CanIuse.com> - Checking browsers if it supports some elements and properties.