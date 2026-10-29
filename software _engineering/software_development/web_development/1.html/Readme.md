# HTML(HyperText Markup Language)

HTML stands for HyperText Markup Language. It is used on the frontend and gives the structure to the webpage which you can style using CSS and make interactive using JavaScript.It defines meaning and structure of web content.
HTML stands for HyperText Markup Language. It's a markup language that web developers use to structure and describe the content of a webpage (not a programming language).

HyperText refers to the pieces of text which can link to other documents in the website.Markup Language is done by HTML tags.
HTML utilizes a system of tags,known as `Markup`,to define the structure and elements within a document.These tags tell the browser how to display the content,whether it's text,images,links,or other media.

HTML5 is dynamic nature hence usable for far more than just mobile and desktop browsers. It can be compiled into a native mobile app through platforms such as PhoneGap and appMobi.

**HTML Evolutions** - In early 1990s, sir Tim Berners-Lee conceptualised HTML to facilitate document sharing among researchers,marking the inception of the World Wide Web.
The major versions of HTML are:

1. HTML 1.0 (1993) – The first official release; limited capabilities.Included simple tags,focusing on basic text formatting and linking.
2. HTML 2.0 (1995) – Standardized existing practices; basic structure tags.
3. HTML 3.2 (1997) – Added tables, scripting support (JavaScript), and applets.Standardizes various features including forms,tables,image maps and internalization.
4. HTML 4.01 (1999) – Introduced strict, transitional, and frameset DOCTYPES; better CSS integration.
5. XHTML 1.0 (2000) – Reformulation of HTML 4.01 using XML syntax.
6. HTML5 (2014) – Major update; added semantic elements (<article>, <section>), multimedia (<audio>, <video>), canvas, local storage, and more.

HTML5 is the latest version of the markup language for the web and defines a whole new standard for developing web applications
Previous iterations of HTML (and its rigid XML-based sibling, XHTML) have been centered primarily on the concept of HTML as a markup language for documents. HTML5 is the first version to embrace the web as a platform for web application development.

HTML5 defines a series of new elements that you can use to develop rich internet applications as well as a range of standard JavaScript APIs for browsers to implement natively.A good example of HTML5’s new elements is <video>, which provides a means of playing video content in the browser without requiring an additional plug-in. HTML5 also provides the Media Element Interface that allows you to control video playback with JavaScript. It lets you create games, build mobile applications, and much more.

HTML is often called a programming language,but it doesn't have logic like other programming language do.Instead,it's a markup language.It uses tags to give meaning and make content on a webpage readable by machines.

**HTML Document** - An HTML document is atext file named with an `.html extnsion`.It contains text content and HTML markup to tell browser how that content should be structured.
_Page structure of an HTML5 document_ - HTML documents follows a basic structure,often referred to as HTML document structure, consisting of two main sections:the head and the body.

1. `Head`: Contains meta-information about the document,such as the title,character set, and linked stylesheets.
2. `Body`: Houses the actual content visible on the web page,including text,images,links and other elements.

HTML5 documents are structured in the same way as older versions of HTML: you put a <!DOCTYPE> declaration at the top of the document and open and close the HTML document with matching <html> and </html> tags. Between these tags, you have a <head> section, where you place <meta> information and other noncontent items such as stylesheets, and a <body> section, where your page content should go.

```html
<!DOCTYPE html>
<html lang="en">
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

`Doctypes`:- short for 'document type' - help browsers to understand the version of HTML the document is written in for better interpretability. Doctype declarations are not HTML tags and belong at the very top of a document.`<!DOCTYPE html>`:- Declares the HTML version for correct browser interpretation.

```htm
<!DOCTYPE html public "- //W3C//DTD html 4.01 Transitional//EN">
<!--HTML 4.0 -->
<!DOCTYPE html>
<!--HTML 5.0 -->
```

`html`:- Has a lang attribute.This defines the language.
`head`:- Can contain meta,title.Used by search engine to know more about our page.

```html
<head>
  <meta charset="UTF-8" />
  <meta name="author" content="Collins Kipkosgei" />
  <meta
    name="description"
    content="Content visible on browser as it displays list of searched item which are related."
  />
  <title>My web</title>
  <link rel="icon" href="./login.jpg" type="image/x-icon" />
</head>
```

`<meta charset="UTF-8">`: Specifies the character encoding for the document.UTF-8 is a widely used encoding that supports a vast range of characters.

_Document metadata_ - Metadata contains information about the page. This includes information about styles, scripts and data to help software (search engines, browsers, etc.) use and render the page. Metadata for styles and scripts may be defined in the page or linked to another file that has the information.

1. <base>	- Specifies the base URL to use for all relative URLs in a document. There can be only one such element in a document.
2. <meta> - Represents metadata that cannot be represented by other HTML meta-related elements, like <base>, <link>, <script>, <style> and <title>.
3. <style> - Contains style information for a document or part of a document. It contains CSS, which is applied to the contents of the document containing this element.
4. <title>	- Defines the document's title that is shown in a browser's title bar or a page's tab. It only contains text; HTML tags within the element, if any, are also treated as plain text.
5. <link> - Specifies relationships between the current document and an external resource. This element is most commonly used to link to CSS but is also used to establish site icons (both "favicon" style icons and icons for the home screen and apps on mobile devices) among other things.

HTML consists of elements that describe different types of content: paragraphs, links, headings, images, video, etc. Web browsers understand HTML and render HTML code as websites.

## HTML5 semantic elements

Semantic element are elemnts with some meaning.Semantic elements increase accessibility,improve SEO,improve code structure and makes code more readable for both humans and machines.

Metadata content - for example <link>,<meta>,<style>
Flow content - <a>,<p>,<strong>,<em>
Sectioning content - <header>,<aside>,<main>,<footer>,<nav>,<article>
Heading content - <h1>,<h2>
Phrasing content - <span>,<input>
Embedded content - <audio>,<canvas>
Interactive content - <textarea>,<a>

<CanIuse.com> - Checking browsers if it supports some elements and properties.

Semantic element clearly describes its meaning to both the browser and the developer. In HTML, semantic element are the type of elements that can be used to define different parts of a web page such as `<form>`, `<table>`, `<article>`, `<header>`, `<footer>`, etc.

Visit the following resources to learn more:

- [@article@Guide to Writing Semantic HTML](https://cs.fyi/guide/writing-semantic-html)
- [@article@W3Schools: Semantic HTML](https://www.w3schools.com/html/html5_semantic_elements.asp)
- [@article@How To Write Semantic HTML](https://hackernoon.com/how-to-write-semantic-html-dkq3ulo)
- [@article@HTML Best Practices – How to Build a Better HTML-Based Website](https://www.freecodecamp.org/news/html-best-practices/)
- [@article@Semantic HTML: What It Is and How It Improves Your Site](https://blog.hubspot.com/website/semantic-html)
- [@article@Semantic Markup](https://html.com/semantic-markup)
- [@article@Semantic HTML - web.dev](https://web.dev/learn/html/semantic-html/)
- [@feed@Explore top posts about HTML](https://app.daily.dev/tags/html?ref=roadmapsh)

## Accessibility

Web accessibility means that websites, tools, and technologies are designed and developed in such a way that people with disabilities can use them easily.

## Basics of SEO

SEO or Search Engine Optimization is the technique used to optimize your website for better rankings on search engines such as Google, Bing etc.

TODO:-

- Local & Session storage
- Events basics
- meta tags & imports
- Responsive images
- Mulimedia - Audio,Video
- SVG animations
- Web components
- IndexedDB
- iFrame
- Canvas
- WebGL
- Workers:- web worker, service worker, shared worker

## HTML Comments(<!-- … -->)

n HTML comment is used to add explanatory notes to the markup or to prevent the browser from interpreting specific parts of the document.

Comments start with the string <!-- and end with the string -->, generally with text in between. This text cannot start with the string > or ->, cannot contain the strings --> or --!>, nor end with the string <!-, though <! is allowed.

The browser ignores comments as it renders the code. In other words, they are not visible on the page - just in the code. HTML comments are a way for you to write helpful notes about your code or logic.

The above is true for XML comments as well. In addition, in XML, such as in SVG or MathML markup, a comment cannot contain the character sequence --.

Comments can be used on a single line, or span multiple lines. They can be used in the following places:

Before and after the Doctype
Before and after the <html> element
As the content of most elements except: <script>, <style>, <title>, <textarea>, because these elements interpret their content as raw text

```html
<!-- A one-line comment -->

<!--
A comment
that stretches
over several
lines
-->
```

## HTML Templates

The `<template>` HTML element is a mechanism for holding HTML that is not to be rendered immediately when a page is loaded but may be instantiated subsequently during runtime using JavaScript. Think of a template as a content fragment that is being stored for subsequent use in the document.

Visit the following resources to learn more:

- [@article@Using templates and slots | MDN web docs](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots)
- [@feed@Explore top posts about HTML](https://app.daily.dev/tags/html?ref=roadmapsh)

## Custom Elements

One of the key features of the Web Components standard is the ability to create custom elements that encapsulate your functionality on an HTML page, rather than having to make do with a long, nested batch of elements that together provide a custom page feature.

Visit the following resources to learn more:

- [@article@Using custom elements | MDN web docs](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements)
- [@feed@Explore top posts about Web Development](https://app.daily.dev/tags/webdev?ref=roadmapsh)
