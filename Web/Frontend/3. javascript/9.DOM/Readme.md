# Introduction to the DOM

Client-side JavaScript exists to turn static HTML documents into interactive web applications. So scripting the content of web pages is really the central purpose ofJavaScript.Every Window object has a document property that refers to a Document object. The Document object represents the content of the window. The Document object does not stand alone, however. It is the central object in the DOM for representing and manipulating document content.

The Document Object Model (DOM) is the data representation of the objects that comprise the structure and content of a document on the web. The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.

A web page is a document that can be either displayed in the browser window or as the HTML source.
It covers:

- How to query or select individual elements from a document.
- How to traverse a document, and how to find the ancestors, siblings, and
descendants of any document element.
- How to query and set the attributes of document elements.
- How to query, set, and modify the content of a document.
- How to modify the structure of a document by creating, inserting, and deleting
nodes.

## Fundamental data types

This page tries to describe the various objects and types in simple terms. But there are a number of different data types being passed around the API that you should be aware of.

Note: Because the vast majority of code that uses the DOM revolves around manipulating HTML documents, it's common to refer to the nodes in the DOM as elements, although strictly speaking not every node is an element.

1. **Document** When a member returns an object of type document (e.g., the ownerDocument property of an element returns the document to which it belongs), this object is the root document object itself. The DOM document Reference chapter describes the document object.
2. **Node** Every object located within a document is a node of some kind. In an HTML document, an object can be an element node but also a text node or attribute node.
3. **Element** The element type is based on node. It refers to an element or a node of type element returned by a member of the DOM API. Rather than saying, for example, that the document.createElement() method returns an object reference to a node, we just say that this method returns the element that has just been created in the DOM. element objects implement the DOM Element interface and also the more basic Node interface, both of which are included together in this reference. In an HTML document, elements are further enhanced by the HTML DOM API's HTMLElement interface as well as other interfaces describing capabilities of specific kinds of elements (for instance, HTMLTableElement for <table> elements).
4. **NodeList** A nodeList is an array of elements, like the kind that is returned by the method document.querySelectorAll(). Items in a nodeList are accessed by index in either of two ways:
list.item(1)
list[1]
These two are equivalent. In the first, item() is the single method on the nodeList object. The latter uses the typical array syntax to fetch the second item in the list.
5. **Attr** When an attribute is returned by a member (e.g., by the createAttribute() method), it is an object reference that exposes a special (albeit small) interface for attributes. Attributes are nodes in the DOM just like elements are, though you may rarely use them as such.
NamedNodeMap. A namedNodeMap is like an array, but the items are accessed by name or index, though this latter case is merely a convenience for enumeration, as they are in no particular order in the list. A namedNodeMap has an item() method for this purpose, and you can also add and remove items from a namedNodeMap.

## Document

It refers to page which will display browser window.

Every HTML elements has Javascript Object with properties and methods to manipulate it.E.g for a button properties can be (innerHTML,style,firstChild) and methods could be (click(),append(),setattribute())

Has the methods:

1. write()/writeln()-Used to siaplay data on docuent.
2. forms()-used to process elements in a from.
3. links()- Used to hold number of links in webpage.
4. close()-Used to stop current process on document.

```js
document;
document.firstElementChild
document.firstElementChild.lastElementChild
```

## Accessing the DOM

Client-side JavaScript programs often need to manipulate one or more elements within the document. The global document property refers to the Document object,and the Document object has head and body properties that refer to the Element objects for the <head> and <body> tags, respectively. But a program that wants to manipulate an element embedded more deeply in the document must somehow obtain or select the Element objects that refer to those document elements.

You don't have to do anything special to begin using the DOM. You use the API directly in JavaScript from within what is called a script, a program run by a browser.

When you create a script, whether inline in a <script> element or included in the web page, you can immediately begin using the API for the document or window objects to manipulate the document itself, or any of the various elements in the web page (the descendant elements of the document). Your DOM programming may be something as simple as the following example, which displays a message on the console by using the console.log() function:

The Document interface represents any web page loaded in the browser and serves as an entry point into the web page's content, which is the DOM tree.

The DOM tree includes elements such as <body> and <table>, among many others. It provides functionality globally to the document, like how to obtain the page's URL and create new elements in the document.

```js
console.dir(document)
```

The Document interface describes the common properties and methods for any kind of document.

```js
document.title="Document" // sets the title of a page
```

## Accessing elements

To access elements in the DOM, you can use various methods provided by the document object. Here are some common methods:

1. getElementById() - This method returns the element that has the ID attribute with the specified value.
2. getElementsByClassName() - This method returns a live HTMLCollection of elements with the given class name.
3. getElementsByTagName() - This method returns a live HTMLCollection of elements with the given tag name.
4. querySelector() - This method returns the first element that matches a specified CSS selector.
5. querySelectorAll() - This method returns a static NodeList of all elements that match a specified CSS selector.


```js
const element = document.getElementById('myElementId');
const elements = document.getElementsByClassName('myClassName');
const elements = document.getElementsByTagName('div');
const element = document.querySelector('.myClassName');
const elements = document.querySelectorAll('.myClassName');
```

## Shadow DOM

Shadow DOM allows a “shadow root” to be attached to a custom element (and also to a <div>, <span>, <body>, <article>, <main>, <nav>, <header>, <footer>, <section>,<p>, <blockquote>, <aside>, or <h1> through <h6> element) known as a “shadow host.” Shadow host elements, like all HTML elements, are already the root of a normal DOM tree of descendant elements and text nodes. A shadow root is the root ofanother, more private, tree of descendant elements that sprouts from the shadow host
and can be thought of as a distinct minidocument.

The word “shadow” in “shadow DOM” refers to the fact that elements that descend from a shadow root are “hiding in the shadows”: they are not part of the normal DOM tree, do not appear in the children array of their host element, and are not visited by normal DOM traversal methods such as querySelector(). For contrast, the normal, regular DOM children of a shadow host are sometimes referred to as the “light DOM.”

## Modifying Classes of An Element

A common task in Javascript is to modify the classes of an element in some way.This is a simple way of changing the appearance or behaviour of an element wothout injecting CSS into the HTML itself.Instead we just add a class or remove a class to make something happen.

Examples of his includes:- Hiding and showing panel,highlighting a button when something else has happened.
There is two specialized properties for it:-

- `Element.className` - The className property of the Element interface gets and sets the value of the Class attribute of specified element.Problematic in JS frammeworks.

```html
<h1 class="backpack__name">Everyday Backpack</h1>
```

```js
const bags = document.querySelector("h1")
console.log(bags.className)//backpack__name
bags.className = "new_name"
console.log(bags.className)//new_name
```

- `Element.classList`:- Is a read-only parameter that returns a live DOMTokenList collection of class attributes of the element.This can be used to manipulate the class list.It comes with several handy methods.

```js
const bags = document.querySelector("main li:first-child");
bags.classList.add("new-class");
console.log(bags.classList);

/*
DOMTokenList [ "feature", "backpack__volume" "new-class"]
0: "feature"
1: "backpack__volume"
length: 2
value: "feature backpack__volume"
<prototype>: DOMTokenListPrototype { item: item(), contains: contains(), add: add(), … }
script.js:12:9
*/
```

## Modifying Attributes of An Element

`Element.attributes`:- Returns a live collection of all attribute nodes registered to the specified node.It is a NamedNodeMap, not an Array,so it has no Array methods and the Attr nodes' indxes may differ among browsers.To be more specific, attributes is a key/value pair of strings that represents any information regarding that attribute.


```js
const bags = document.querySelector("img").attributes
console.log(bags)

/*
NamedNodeMap(3) [ src="../../assets/images/everyday.svg", alt="", loading="lazy" ]
0: src="../../assets/images/everyday.svg"
1: alt=""
2: loading="lazy"
alt: alt=""
length: 3
loading: loading="lazy"
src: src="../../assets/images/everyday.svg"
<prototype>: NamedNodeMapPrototype { getNamedItem: getNamedItem(), setNamedItem: setNamedItem(), removeNamedItem: removeNamedItem(), … }
script.js:15:9
*/

document.querySelector("img").hasAttribute("alt")//true
document.querySelector("img").getAttribute("alt")//""
document.querySelector("img").setAttribute("alt","Image of bag")
document.querySelector("img").removeAttribute("loading")

/*
NamedNodeMap(3) [ src="../../assets/images/everyday.svg", alt="", loading="lazy" ]
0: src="../../assets/images/everyday.svg"
1: alt="Image of bag"
*/
```

Everything inside a tag is an attribute even classes.

## Inline CSS

`ElementCSSInlineStyle.style`:- The style property is used to get as well as set the inline style of an element.When getting it,it returns a CSSStyleDeclaration object that contains a list of all styles properties for that element with values assigned for the attributes that are defined in the element's inline style attribute.

```js
document.querySelector(".site-title").style
document.querySelector(".site-title").style.color ="red"
document.querySelector(".site-title").style.fontSize ="2 rem"
```

## Add DOM Elements

`Document.createElement`:- In an HTML document,the document.createElement() method creates the HTML element specified by tagName, or an HTMLUnkownElement if tagName isn't recognized.

`ParentNode.append()`:- Inserts a set of Node objects or DOMString objects after the last child of the ParentNode.DOMString objects are inserted as equivalent Text nodes.

`ParentNode.prepend()`:- Inserts a set of Node objects or DOMString objects before the first child of the ParentNode.DOMString are inserted as equivalent Text Nodes.

```html
  <body>
    <header class="siteheader">
      <div class="site-title">BackpackPacker</div>
      <div class="site-description">All backpack packing, all the time.</div>
    </header>
    <main class="maincontent">
      <div class="page-header">
        <h2 class="page-header__heading">A pack for every purpose</h2>
        <p>
          If you're carrying a heavy load, you can't find a better tool than a
          backpack. Distributing the weight evenly across your shoulders, back,
          and hips, the backpack lets you use the natural frame of your body to
          literally <em>shoulder</em> the weight while your legs do the
          carrying.
        </p>
      </div>
    </main>
    <footer class="sitefooter">
      <p>
        Demo project for JavaScript Essential Training, a LinkedIn Learning
        course.
      </p>
    </footer>
  </body>
```

```js

const content = `
    <figure class="backpack__image">
      <img src=${everydayPack.image} alt="" />
    </figure>
    <h1 class="backpack__name">${everydayPack.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        everydayPack.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        everydayPack.color
      }</span></li>
      <li class="backpack__age">Age:<span> ${everydayPack.backpackAge()} days old</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        everydayPack.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        everydayPack.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        everydayPack.strapLength.right
      } inches</span></li>
      <li class="packprop backpack__lid">Lid status:<span> ${
        everydayPack.lidOpen
      }</span></li>
    </ul>

`;

const main = document.querySelector(".maincontent");
const article = document.createElement("article");
article.classList.add("backpack")
article.setAttribute("id","everyday")
article.innerHTML = content;

main.append(article)
```
