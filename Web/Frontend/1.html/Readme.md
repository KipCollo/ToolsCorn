# HTML

HTML stands for HyperText Markup Language. It is used on the frontend and gives the structure to the webpage which you can style using CSS and make interactive using JavaScript.It defines meaning and structure of web content.

HyperText refers to the pieces of text which can link to other documents in the website.
Markup Language is done by HTML tags.
HTML utilizes a system of tags,known as `Markup`,to define the structure and elements within a document.These tags tell the browser how to display the content,whether it's text,images,links,or other media.

HTML5 is dynamic nature hence usable for far more than just mobile and desktop browsers. It can be compiled into a native mobile app through platforms such as PhoneGap and appMobi

## HTML Evolutions

In early 1990s, sir Tim Berners-Lee conceptualised HTML to facilitate document sharing among researchers,marking the inception of the World Wide Web.

The major versions of HTML are:

1. HTML 1.0 (1993) – The first official release; limited capabilities.Included simple tags,focusing on basic text formatting and linking.
2. HTML 2.0 (1995) – Standardized existing practices; basic structure tags.
3. HTML 3.2 (1997) – Added tables, scripting support (JavaScript), and applets.
4. HTML 4.01 (1999) – Introduced strict, transitional, and frameset DOCTYPES; better CSS integration.
5. XHTML 1.0 (2000) – Reformulation of HTML 4.01 using XML syntax.
6. HTML5 (2014) – Major update; added semantic elements (<article>, <section>), multimedia (<audio>, <video>), canvas, local storage, and more.

HTML5 is the latest version of the markup language for the web and defines a whole new standard for developing web applications
Previous iterations of HTML (and its rigid XML-based sibling, XHTML) have been centered primarily on the concept of HTML as a markup language for documents. HTML5 is the first version to embrace the web as a platform for web application development.

HTML5 defines a series of new elements that you can use to develop rich internet applications as well as a range of standard JavaScript APIs for browsers to implement natively.A good example of HTML5’s new elements is <video>, which provides a means of playing video content in the browser without requiring an additional plug-in. HTML5 also provides the Media Element Interface that allows you to control video playback with JavaScript. It lets you create games, build mobile applications, and much more.

HTML is often called a programming language,but it doesn't have logic like other programming language do.Instead,it's a markup language.It uses tags to give meaning and make content on a webpage readable by machines.

## Basic structure of an HTML5 document

HTML documents follows a basic structure,often referred to as HTML document structure, consisting of two main sections:the head and the body.

1. `Head`: Contains meta-information about the document,such as the title,character set, and linked stylesheets.
2. `Body`: Houses the actual content visible on the web page,including text,images,links and other elements.

HTML5 documents are structured in the same way as older versions of HTML: you put a <!DOCTYPE> declaration at the top of the document and open and close the HTML
document with matching <html> and </html> tags. Between these tags, you have a <head> section, where you place <meta> information and other noncontent items
such as stylesheets, and a <body> section, where your page content should go.

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

Doctypes:- short for 'document type' - help browsers to understand the version of HTML the document is written in for better interpretability. Doctype declarations are not HTML tags and belong at the very top of a document.
`<!DOCTYPE html>`:- Declares the HTML version for correct browser interpretation.
`html`:- Has a lang attribute.This defines the language.
`head`:- Can contain meta,title.Used by search engine to know more about our page.

```html
   <head>
      <meta charset="UTF-8">
      <meta name="author" content="Collins Kipkosgei">
      <meta name="description" content="Content visible on browser as it displays list of searched item which are related.">
      <title>My web</title>
      <link rel="icon" href="./login.jpg" type="image/x-icon">
   </head>
```

`<meta charset="UTF-8">`: Specifies the character encoding for the document.UTF-8 is a widely used encoding that supports a vast range of characters.

## HTML5 semantic elements

- Header Element- `<header>`:- The <header> element represents introductory content for its nearest ancestor sectioning content or sectioning root element. A <header> typically contains a group of introductory or navigational aids.
Note: The header element is not sectioning content; it doesn’t introduce a new section.

- Main Element - `<main>`:- The <main> element contains the main content for your web page. This content is unique to the individual page, and should not appear elsewhere on the site. Repeating content like headers, footers, navigation, logos, etc., is placed outside the element.
The <main> element should only ever be used at most once on a single page.
The <main> element must not be included as a descendant of an article, aside, footer, header or nav element.

`<hgroup>`

- Nav Element- `<nav>`:- The <nav> element is primarily intended to be used for sections that contain main navigation blocks for the website, this can include links to other parts of the web page (e.g. anchors for a table of contents) or other pages entirely.
Adding a role="navigation" ARIA role to the <nav> element is advised to aid user agents that don't support HTML5 and also to provide more context for those that do.

- Section Element - `<section>` The <section> element represents a generic section to thematically group content. Every section, typically, should be able to be identiﬁed with a heading element as a child of the section.
   1. You can use the <section> element within an <article> and vice-versa.
   2. Every section should have a theme (a heading element identifying this region)
   3. Don't use the <section> element as a general styling 'container'.If you need a container to apply styling, use a <div> instead.

- Article Element - `<article>` - The <article> element contains self-contained content like articles, blog posts, user comments or an interactive
widget that could be distributed outside the context of the page, for example by RSS.
When article elements are nested, the contents of the inner article node should be related to the outer article element.

`<time>`

- Footer Element - `<footer>` - Usually appears at the bottom of a page or section,typically used for things like related posts or links,copyright information, and metadata.

- Aside Element - `<aside>` - Used to define a section of a page that’s separate from the content area in which it’s defined.In a web application, you might use <aside> for a pop-up or a floating window that appears over the main part of the application itself.

`<mark> `element is used to represent a part of text in your document that should be marked or highlighted. A common use for this would be to highlight search
terms within a document.

<CanIuse.com> - Checking browsers if it supports some elements and properties.

## Accessibility

Web accessibility means that websites, tools, and technologies are designed and developed in such a way that people with disabilities can use them easily.

## Basics of SEO

SEO or Search Engine Optimization is the technique used to optimize your website for better rankings on search engines such as Google, Bing etc.
