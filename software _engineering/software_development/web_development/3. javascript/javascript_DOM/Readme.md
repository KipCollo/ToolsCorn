# DOM & BOM

DOM gives us power to:-
- Change HTML elements:- Modify,update or remove elements on the page.
- Modify HTML attributes:- Update or add attributes to enhance elements functionality.
- Control CSS styles - Dynamically change the visual appearance of elements.
- Remove existing elements and attributes - Get rid of unnecessary content.

## The BOM

- **Browser Object Model (BOM)** sometimes also called the `window browser object`, holds all the methods and properties for JavaScript to interact with the browser. This is information related to previous pages visited, the size of the window of the browser, and also the DOM.
The window object contains all the properties required to represent the window of the browser, so for example, the size of the window and the history of previously visited web pages. The window object has global variables and functions.The exact implementation of the BOM depends on the browser and the version of the browser.

*Window Properties* -
closed - Checks whether a window has been closed or not and returns true or false
defaultStatus - Sets or returns the default text in the statusbar of a window
document - Returns the document object for the window
frames - Returns all <iframe> elements in the current window
history - Provides the History object for the window
innerHeight - The inner height of a window’s content area
innerWidth - The inner width of the content area
length - Find out the number of <iframe> elements in the window
location - Returns the location object for the window
name - Sets or returns the name of a window
navigator - Returns the Navigator object for the window
opener - Returns a reference to the window that created the window
outerHeight - The outer height of a window, including toolbars/ scrollbars
outerWidth - The outer width of a window, including toolbars/ scrollbars
pageXOffset - Number of pixels the current document has been scrolled horizontally
pageYOffset - Number of pixels the document has been scrolled vertically
parent - The parent window of the current window
screen - Returns the Screen object for the window
screenLeft - The horizontal coordinate of the window (relative to screen)
screenTop - The vertical coordinate of the window
screenX - Same as screenLeft but needed for some browsers
screenY - Same as screenTop but needed for some browsers
self - Returns the current window
status - Sets or returns the text in the statusbar of a window
top - Returns the topmost browser window

*Window Methods* -
alert() - Displays an alert box with a message and an OK button
blur() - Removes focus from the current window
clearInterval() - Clears a timer set with setInterval()
clearTimeout() - Clears a timer set with setTimeout()
close() - Closes the current window
confirm() - Displays a dialogue box with a message and an OK and Cancel button
focus() - Sets focus to the current window
moveBy() - Moves a window relative to its current position
moveTo() - Moves a window to a specified position
open() - Opens a new browser window
print() - Prints the content of the current window
prompt() - Displays a dialogue box that prompts the visitor for input
resizeBy() - Resizes the window by the specified number of pixels
resizeTo() - Resizes the window to a specified width and height
scrollBy() - Scrolls the document by a specified number of pixels
scrollTo() - Scrolls the document to specific coordinates
setInterval() - Calls a function or evaluates an expression at specified intervals
setTimeout() - Calls a function or evaluates an expression after a specified interval
stop() - Stops the window from loading

*Screen Properties* -
availHeight - Returns the height of the screen (excluding the Windows Taskbar)
availWidth - Returns the width of the screen (excluding the Windows Taskbar)
colorDepth - Returns the bit depth of the color palette for displaying images
height - The total height of the screen
pixelDepth - The color resolution of the screen in bits per pixel
width - The total width of the screen


Examples of objects of BOM includes:- History, Navigator,Location.
we can explore the BOM and see the objects of it with the command -

```js
console.dir(window)
```

`Window history object` - The window browser object also contains a history object. This object can actually be written without the prefix of window because it has been made globally available, so we can get the exact same object by using the `console.dir(window.history)` or simply the `console.dir(history)` command in the console.Rep array of URLs visited by the user.You can use to load previous,forward or any page.
This object is actually what you can use to go back to a previous page. It has a built-in function for that called go.

```js
function goBack() {
  window.history.back()//loads previous page
}
function goForward() {
  window.history.forward()//loads next page
}
window.history.go(-1)//loads given page
```

`Window navigator object` - This property it contains information about the browser we are using, such as what browser it is and what version we are using, and what operating system the browser is running on.
This can be handy for customizing the website for certain operating systems.

```js
console.dir(window.navigator);
```

`Window location object` - This contains the URL of the current web page. If you override (parts of) that property, you force the browser to go to a new page. How to do this exactly differs per browser.
The location object consists of a few properties. You can see them by using the command console.dir(window.location) or console.dir(location) in the console.

```js
console.dir(location)
```

There are many objects on the location object,We can access the nested objects and properties using dot notation.

```js
location.ancestorOrigins.length;
```

This will get the length of the ancestorOrigins object, which represents how many browsing contexts our page is associated with. This can be useful to determine whether the web page is framed in an unexpected context. Not all browsers have this object though; again, this BOM and all the elements of it vary per browser.

`window Document object` - It refers to page which will display browser window.Every HTML elements has Javascript Object with properties and methods to manipulate it.E.g for a button properties can be (innerHTML,style,firstChild) and methods could be (click(),append(),setattribute())

`Screen Object` - Holds information of browser screen.Can be used to display screen width,height, color depth,pixel depth.

```js
console.dir(screen)
```


## The DOM

- **Document Object Model (DOM)** connects web pages to scripts or programming languages by representing the structure of a document—such as the HTML representing a web page—in memory. Usually it refers to JavaScript, even though modeling HTML, SVG, or XML documents as objects are not part of the core JavaScript language.
The Document Object Model (DOM) is a programming interface built for HTML and XML documents. It represents the page that allows programs and scripts to dynamically update the document structure, content, and style. With DOM, we can easily access and manipulate tags, IDs, classes, attributes, etc.
The Document Object Model (DOM) is a cross-platform, language-independent convention for representing and interacting with objects in HTML, XHTML and XML documents. Objects in the DOM tree may be addressed and manipulated by using methods on the objects. Nowadays, the DOM core spec is maintained by WHATWG (superseding the W3C version). It defines language-agnostic interfaces that abstract HTML and XML documents as objects, and also defines mechanisms to manipulate this abstraction. This includes: Node, Element, DocumentFragment, Document, DOMImplementation, Event, EventTarget, and more.

The Document Object Model (DOM) is the data representation of the objects that comprise the structure and content of a document on the web. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.Nodes can also have event handlers attached to them. Once an event is triggered, the event handlers get executed.DOM methods allow programmatic access to the tree. With them, you can change the document's structure, style, or content.

From the ECMAScript point of view, objects defined in the DOM specification are called "host objects".

Visit the following resources to learn more:

- [DOM Tree](https://javascript.info/dom-nodes)
- [GeeksForGeeks - DOM (Document Object Model)](https://www.geeksforgeeks.org/dom-document-object-model/)
- [What is the DOM?](https://www.freecodecamp.org/news/what-is-the-dom-document-object-model-meaning-in-javascript/)
- [Eloquent JavaScript, 3rd Edition: The Document Object Model](https://eloquentjavascript.net/14_dom.html)
- [JavaScript HTML DOM](https://www.w3schools.com/js/js_htmldom.asp)
- [JavaScript DOM](https://www.javascripttutorial.net/javascript-dom/)
- [Learn the HTML DOM with Exercises - CodeGuage](https://www.codeguage.com/courses/js/html-dom-introduction)
- [What is DOM, Shadow DOM and Virtual DOM?](https://www.youtube.com/watch?v=7Tok22qxPzQ)
- [JavaScript DOM Crash Course](https://www.youtube.com/watch?v=0ik6X4DJKCc)


DOM is a way of displaying the structure of an HTML document as a logical tree.Each branch of the tree ends in a node, and each node contains objects. This is possible because of the very important rule that inner elements need to be closed before outer elements get closed.
The DOM contains the HTML elements on the web page.The DOM was designed to be independent of any particular programming language, making the structural representation of the document available from a single, consistent API. Even if most web developers will only use the DOM through JavaScript, implementations of the DOM can be built for any language

The DOM is built using multiple APIs that work together. The core DOM defines the entities describing any document and the objects within it. This is expanded upon as needed by other APIs that add new features and capabilities to the DOM. For example, the HTML DOM API adds support for representing HTML documents to the core DOM, and the SVG API adds support for representing SVG documents.
 
*DOM tree* - A DOM tree is a tree structure whose nodes represent an HTML or XML document's contents. Each HTML or XML document has a DOM tree representation.When a web browser parses an HTML document, it builds a DOM tree and then uses it to display the document.

The DOM tree includes elements such as <body> and <table>, among many others. It provides functionality globally to the document, like how to obtain the page's URL and create new elements in the document.

It covers:

1. How to query or select individual elements from a document.
2. How to traverse a document, and how to find the ancestors, siblings, and descendants of any document element.
3. How to query and set the attributes of document elements.
4. How to query, set, and modify the content of a document.
5. How to modify the structure of a document by creating, inserting, and deleting nodes.

All of the properties, methods, and events available for manipulating and creating web pages are organized into objects. For example, the document object that represents the document itself, any table objects that implement the HTMLTableElement DOM interface for accessing HTML tables, and so forth, are all objects.

*DOM and JavaScript* - The DOM is not part of the JavaScript language, but is instead a Web API used to build websites. JavaScript can also be used in other contexts. For example, Node.js runs JavaScript programs on a computer, but provides a different set of APIs, and the DOM API is not a core part of the Node.js runtime.
JavaScript uses the DOM to access the document and its elements. The DOM is not a programming language, but without it, the JavaScript language wouldn't have any model or notion of web pages, HTML documents, SVG documents, and their component parts. The document as a whole, the head, tables within the document, table headers, text within the table cells, and all other elements in a document are parts of the document object model for that document. They can all be accessed and manipulated using the DOM and a scripting language like JavaScript.
With JavaScript, we can select and manipulate parts of the DOM. This leads to interactive web pages instead of static ones.

A `web page` is a document that can be either displayed in the browser window or as the HTML source. In both cases, it is the same document but the Document Object Model (DOM) representation allows it to be manipulated. As an object-oriented representation of the web page, it can be modified with a scripting language such as JavaScript.

Client-side JavaScript exists to turn static HTML documents into interactive web applications. So scripting the content of web pages is really the central purpose of JavaScript.Every Window object has a document property that refers to a Document object. The Document object represents the content of the window. The Document object does not stand alone, however. It is the central object in the DOM for representing and manipulating document content.

The primary purpose of using JavaScript in a web page is to make that page interactive: the JavaScript language is used to program logical decisions that will effect what is shown on the page. It does this primarily by changing the HTML rendered by the browser. For example, JavaScript can be used to change the text inside a <p>, add addition <li> elements to a list, or to give a <div> a new CSS class attribute. The programmatic representation of the HTML elements currently being shown by the browser is known as the Document Object Model (DOM). In web programming JavaScript code is used to modify the DOM (HTML elements currently being shown by the browser) in response to user input, thereby making the page interactive. This chapter introduces the Document Object Model and how to use JavaScript to manipulate it through user-driven interaction.

*HTML DOM* - A document containing HTML is described using the Document interface, which is extended by the HTML specification to include various HTML-specific features. In particular, the Element interface is enhanced to become HTMLElement and various subclasses, each representing one of (or a family of closely related) elements.The HTML DOM API provides access to various browser features such as tabs and windows, CSS styles and stylesheets, browser history, etc.
HTML, the Web's markup language, is specified in terms of the DOM. Layered above the abstract concepts defined in DOM Core, HTML also defines the meaning of elements. The HTML DOM includes such things as the className property on HTML elements, or APIs such as Document.body.The HTML specification also defines restrictions on documents; for example, it requires all children of a <ul> element, which represents an unordered list, to be <li> elements, as those represent list items. In general, it also forbids using elements and attributes that aren't defined in a standard.

*SVG DOM* - Similarly, a document containing SVG is also described using the Document interface, which is extended by the SVG specification to include various SVG-specific features. In particular, the Element interface is enhanced to become SVGElement and various subclasses, each representing an element or a family of closely related elements. 

*Accessing the DOM* - You don't have to do anything special to begin using the DOM. You use the API directly in JavaScript from within what is called a script, a program run by a browser.When you create a script, whether inline in a `<script>` element or included in the web page, you can immediately begin using the API for the document or window objects to manipulate the document itself, or any of the various elements in the web page (the descendant elements of the document).

**DOM interfaces** - The Document interface represents any web page loaded in the browser and serves as an entry point into the web page's content, which is the DOM tree.

JS <-------DOM------>Browser

The following are interfaces defined by the DOM specification:

1. `Document` When a member returns an object of type document (e.g., the ownerDocument property of an element returns the document to which it belongs), this object is the root document object itself.The document object is the root of the tree and your entry point into the web page. It represents the entire web page loaded in the browser.
2. `Node` Every object located within a document is a node of some kind.A Node is a generic, umbrella term. In the DOM tree, absolutely everything is a node. The tree is made up of different types of nodes. In an HTML document, an object can be an element node(The HTML tags themselves), a text node(The actual text written inside those HTML tags),Comment Nodes(The hidden notes you leave in your HTML code (<!-- comment -->)) or attribute node.
3. `Element` The element type is based on node. It refers to an element or a node of type element returned by a member of the DOM API. Rather than saying, for example, that the document.createElement() method returns an object reference to a node, we just say that this method returns the element that has just been created in the DOM. Element objects implement the DOM Element interface and also the more basic Node interface, both of which are included together in this reference. In an HTML document, elements are further enhanced by the HTML DOM API's HTMLElement interface as well as other interfaces describing capabilities of specific kinds of elements (for instance, HTMLTableElement for <table> elements).An Element is just a specific type of Node. It represents an actual HTML tag on the page.
4. `NodeList` A nodeList is an array of elements, like the kind that is returned by the method document.querySelectorAll(). Items in a nodeList are accessed by index in either of two ways:
  - list.item(1)
  - list[1]
  These two are equivalent. In the first, item() is the single method on the nodeList object. The latter uses the typical array syntax to fetch the second item in the list.
5. `Attr` When an attribute is returned by a member (e.g., by the createAttribute() method), it is an object reference that exposes a special (albeit small) interface for attributes. Attributes are nodes in the DOM just like elements are, though you may rarely use them as such.
NamedNodeMap. A namedNodeMap is like an array, but the items are accessed by name or index, though this latter case is merely a convenience for enumeration, as they are in no particular order in the list. A namedNodeMap has an item() method for this purpose, and you can also add and remove items from a namedNodeMap.

Every Element is a Node, but not every Node is an Element.
Note: Because the vast majority of code that uses the DOM revolves around manipulating HTML documents, it's common to refer to the nodes in the DOM as elements, although strictly speaking not every node is an element.

`Interfaces and objects` - Many objects implement several different interfaces. The table object, for example, implements a specialized HTMLTableElement interface, which includes such methods as createCaption and insertRow. But since it's also an HTML element, table implements the Element interface described in the DOM Element Reference chapter. And finally, since an HTML element is also, as far as the DOM is concerned, a node in the tree of nodes that make up the object model for an HTML or XML page, the table object also implements the more basic Node interface, from which Element derives.

The document and window objects are the objects whose interfaces you generally use most often in DOM programming. In simple terms, the window object represents something like the browser, and the document object is the root of the document itself. Element inherits from the generic Node interface, and together these two interfaces provide many of the methods and properties you use on individual elements.


**DOM Manipulation** -

*Document* - It refers to page which will display browser window.Every HTML elements has Javascript Object with properties and methods to manipulate it.E.g for a button properties can be (innerHTML,style,firstChild) and methods could be (click(),append(),setattribute())
Client-side JavaScript programs often need to manipulate one or more elements within the document. The global document property refers to the Document object,and the Document object has head and body properties that refer to the Element objects for the <head> and <body> tags, respectively. But a program that wants to manipulate an element embedded more deeply in the document must somehow obtain or select the Element objects that refer to those document elements.

Has the methods:

1. write()/writeln()-Used to diaplay data on docuent.
2. forms()-used to process elements in a from.
3. links()- Used to hold number of links in webpage.
4. close()-Used to stop current process on document.

```js
console.dir(document)

document;
document.firstElementChild
document.firstElementChild.lastElementChild
```

`Accessing elements` - To access elements in the DOM, you can use various methods provided by the document object. Here are some common methods:
1. document.getElementById() - This method returns the element that has the ID attribute with the specified value.
2. document.getElementsByClassName() - This method returns a live HTMLCollection of elements with the given class name.
3. document.getElementsByTagName() - This method returns a live HTMLCollection of elements with the given tag name.
4. document.querySelector() - This method returns the first element that matches a specified CSS selector.
5. document.querySelectorAll() - This method returns a static NodeList of all elements that match a specified CSS selector.

```js
document.documentElement
document.head
document.body
const element = document.getElementById('myElementId');
const element = document.querySelector('#myElementId');
const elements = document.getElementsByClassName('myClassName');
const elements = document.getElementsByTagName('div');
const element = document.querySelector('.myClassName');
const elements = document.querySelectorAll('.myClassName');
```

The Document interface describes the common properties and methods for any kind of document.

```js
document.title="Document" // sets the title of a page
```

A web page is a document that can be either displayed in the browser window or as the HTML source.In both cases, it is the same document but the Document Object Model (DOM) representation allows it to be manipulated. As an object-oriented representation of the web page, it can be modified with a scripting language such as JavaScript.


`Add DOM Elements` -

1. document.createElement:- In an HTML document,the document.createElement() method creates the HTML element specified by tagName, or an HTMLUnkownElement if tagName isn't recognized.
2. insertAdjacentHTML() - 
3. ParentNode.append():- Inserts a set of Node objects or DOMString objects after the last child of the ParentNode.DOMString objects are inserted as equivalent Text nodes.
4. ParentNode.prepend():- Inserts a set of Node objects or DOMString objects before the first child of the ParentNode.DOMString are inserted as equivalent Text Nodes.
5. ParentNode.before()
6. ParentNode.after()

```js
header.append(message)
header.append(message.CloneNode(true))
```

*Node*

`Node Properties` -
attributes - Returns a live collection of all attributes registered to and element
baseURI - Provides the absolute base URL of an HTML element
childNodes - Gives a collection of an element’s child nodes
firstChild - Returns the first child node of an element
lastChild - The last child node of an element
nextSibling - Gives you the next node at the same node tree level
nodeName - Returns the name of a node
nodeType - Returns the type of a node
nodeValue - Sets or returns the value of a node
ownerDocument - The top-level document object for this node
parentNode - Returns the parent node of an element
previousSibling - Returns the node immediately preceding the current one
textContent - Sets or returns the textual content of a node and its descendants

`Node Methods`  -
appendChild() - Adds a new child node to an element as the last child node
cloneNode() - Clones an HTML element
compareDocumentPosition() - Compares the document position of two elements
getFeature() - Returns an object which implements the APIs of a specified feature
hasAttributes() - Returns true if an element has any attributes, otherwise false
hasChildNodes() - Returns true if an element has any child nodes, otherwise false
insertBefore() - Inserts a new child node before a specified, existing child node
isDefaultNamespace() - Returns true if a specified namespaceURI is the default, otherwise false
isEqualNode() - Checks if two elements are equal
isSameNode() - Checks if two elements are the same node
isSupported() - Returns true if a specified feature is supported on the element
lookupNamespaceURI() - Returns the namespaceURI associated with a given node
lookupPrefix() - Returns a DOMString containing the prefix for a given namespaceURI, if present
normalize() - Joins adjacent text nodes and removes empty text nodes in an element
removeChild() - Removes a child node from an element
replaceChild() - Replaces a child node in an element


*Element* -

`Element Methods` -
getAttribute() - Returns the specified attribute value of an element node
getAttributeNS() - Returns string value of the attribute with the specified namespace and name
getAttributeNode() - Gets the specified attribute node
getAttributeNodeNS() - Returns the attribute node for the attribute with the given namespace and name
getElementsByTagName() - Provides a collection of all child elements with the specified tag name
getElementsByTagNameNS() - Returns a live HTMLCollection of elements with a certain tag name belonging to the given namespace
hasAttribute() - Returns true if an element has any attributes, otherwise false
hasAttributeNS() - Provides a true/false value indicating whether the current element in a given namespace has the specified attribute
removeAttribute() - Removes a specified attribute from an element
removeAttributeNS() - Removes the specified attribute from an element within a certain namespace
removeAttributeNode() - Takes away a specified attribute node and returns the removed node
setAttribute() - Sets or changes the specified attribute to a specified value
setAttributeNS() - Adds a new attribute or changes the value of an attribute with the given namespace and name
setAttributeNode() - Sets or changes the specified attribute node
setAttributeNodeNS() - Adds a new namespaced attribute node to an element


`Modifying Classes of An Element` - A common task in Javascript is to modify the classes of an element in some way.This is a simple way of changing the appearance or behaviour of an element wothout injecting CSS into the HTML itself.Instead we just add a class or remove a class to make something happen.

Examples of his includes:- Hiding and showing panel,highlighting a button when something else has happened.
There is two specialized properties for it:-

1. Element.className - The className property of the Element interface gets and sets the value of the Class attribute of specified element.Problematic in JS frammeworks.

```html
<h1 class="backpack__name">Everyday Backpack</h1>
```

```js
const bags = document.querySelector("h1")
console.log(bags.className)//backpack__name
bags.className = "new_name"
console.log(bags.className)//new_name
```

2. Element.classList:- Is a read-only parameter that returns a live DOMTokenList collection of class attributes of the element.This can be used to manipulate the class list.It comes with several handy methods.

```js
const bags = document.querySelector("main li:first-child");
bags.classList.add("new-class");
bag.classList.remove("hidden")
player0El.classList.toggle("player--active")
player1El.classList.toggle("player--active")
if (e.key === `Escape` && !modal.classList.contains("hidden")) closeModal()
```

`Modifying Attributes of An Element` - 

Element.attributes:- Returns a live collection of all attribute nodes registered to the specified node.It is a NamedNodeMap, not an Array,so it has no Array methods and the Attr nodes' indxes may differ among browsers.To be more specific, attributes is a key/value pair of strings that represents any information regarding that attribute. 

```js
const bags = document.querySelector("img").attributes
diceImg.src = `dice-${dice}.png` //dice-1.png, dice-2.png
document.querySelector(".site-title").src = "message.png"
document.querySelector("img").hasAttribute("alt")//true
document.querySelector("img").getAttribute("alt")//""
document.querySelector("img").setAttribute("alt","Image of bag")
document.querySelector("img").removeAttribute("loading")
```

Everything inside a tag is an attribute even classes.

Data attributes -

```js
<a href="#" data-version-number="3.0"></a>
document.querySelector("a").dataset.versionNumber//3.0
```

`Inline CSS` - ElementCSSInlineStyle.style:- The style property is used to get as well as set the inline style of an element.When getting it,it returns a CSSStyleDeclaration object that contains a list of all styles properties for that element with values assigned for the attributes that are defined in the element's inline style attribute.

```js
document.querySelector(".site-title").style
document.querySelector(".site-title").style.color ="red"
document.querySelector(".site-title").style.fontSize ="2rem"
document.documentElement.style.setProperty('--color-primary','oranged')
```

To access the inline styles on element -

```js
document.querySelector(".site-title").style.color //red
document.querySelector(".site-title").style.fontSize//2rem
```

To access all CSS properties, use `getComputedStyle()
```js
getComputedStyle(document.querySelector(".site-title"))
```


`Delete Elements`
1. element.remove()


`Add Text Message, image & form value` - 

innerHTML: Sets or gets the HTML syntax describing the element's descendants.
textContent: Sets or gets the text content of the specified node.
value: 

```js
document.querySelector(".site-title").textContent = "message"
document.querySelector(".site-title").innerHTML = "message</br>"
document.querySelector(".site-title").value = "message"
```


**DOM traversing** - We can traverse the DOM using the document object.This document object contains all the HTML and is a representation of the web page. Traversing over these elements can get you to the element you need in order to manipulate it.
We can do this by stepping into the document object and navigating our way from there onwards.We can start by using the body property from the document. This contains everything that's inside the body element.

`parentNode` - The parentNode property is used to access the parent node of an element in the DOM. It allows traversal and manipulation of the DOM tree by accessing the immediate parent of an element.

```js
console.dir(document.body);
const h1 = document.querySelector("h1")

//Going downwords: child
h1.querySelectorAll(".highlight")//childern oh h1
h1.childNodes
h1.children
h1.firstElementChild
h1.lastElementChild

//Going upwards: parents
h1.parentNode
h1.parentElement
h1.closest()

//Going sideways: sibings
h1.previousElementSibling
h1.nextElementSibling
h1.nextSibling
h1.previousSibling
```

*Scrolling* - 

```js
const btnScrollTo = document.querySelector("btn")
const section1 = document.querySelector("#section1")

btnScroolTo.addEventListener("click", function(){
  //
  const s1coords = section1.getBoundingClientRect();
  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behaviour: 'smooth'})

  section1.scrollIntoView({behaviour: "smooth"})//works in modern browsers
})
```


**Shadow DOM** - Shadow DOM allows a “shadow root” to be attached to a custom element (and also to a <div>, <span>, <body>, <article>, <main>, <nav>, <header>, <footer>, <section>,<p>, <blockquote>, <aside>, or <h1> through <h6> element) known as a “shadow host.” Shadow host elements, like all HTML elements, are already the root of a normal DOM tree of descendant elements and text nodes. A shadow root is the root ofanother, more private, tree of descendant elements that sprouts from the shadow host
and can be thought of as a distinct minidocument.

The word “shadow” in “shadow DOM” refers to the fact that elements that descend from a shadow root are “hiding in the shadows”: they are not part of the normal DOM tree, do not appear in the children array of their host element, and are not visited by normal DOM traversal methods such as querySelector(). For contrast, the normal, regular DOM children of a shadow host are sometimes referred to as the “light DOM.”


- CSSOM
- Critical Rendering Path
- Browser APIs
- Browser Internals


Learn and understand the concepts such as Hoisting, Event Bubbling, Scope, Prototype, Shadow DOM and strict.

Visit the following resources to learn more:


- [Event Bubbling and Capturing](https://javascript.info/bubbling-and-capturing)
- [Scope in JavaScript](https://developer.mozilla.org/en-US/docs/Glossary/Scope)
- [Var, Let and Const — Whats the difference?](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/)
- [Inheritance and Prototype Chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [JavaScript Strict Mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)
- [JavaScript Visualized (7 Part Series)](https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif)
- [DOM vs Shadow DOM vs Virtual DOM](https://www.youtube.com/watch?v=7Tok22qxPzQ)
- [Demystifying JavaScript Promises](https://blog.greenroots.info/series/javascript-promises)


## DOM Events

An event is an action or occurrence that happens in the browser, such as a button click or page load. JavaScript can respond to these events by executing code in response.

JavaScript’s interaction with HTML is handled through events that occur when the user or browser manipulates a page. When the page loads, that’s an event. When the user clicks a button, that click, too, is an event.Everything that happens on the browser is events.
Client-side JavaScript programs use an asynchronous event-driven programming model. In this style of programming, the web browser generates an event whenever something interesting happens to the document or browser or to some element or object associated with it. For example, the web browser generates an event when it finishes loading a document, when the user moves the mouse over a hyperlink, or when the user strikes a key on the keyboard.

If a JavaScript application cares about a particular type of event, it can register one or more functions to be invoked when events of that type occur. Note that this is not unique to web programming: all applications with graphical user interfaces are designed this way—they sit around waiting to be interacted with (i.e., they wait for events to occur), and then they respond.

Each event is represented by an object that is based on the Event interface, and may have additional custom fields and/or functions to provide information about what happened. 
In client-side JavaScript, events can occur on any element within an HTML document, and this fact makes the event model of web browsers significantly more complex than Node’s event model.

Events model:

1. EventType - This string specifies what kind of event occurred.
2. Event target - This is the object on which the event occurred or with which the event is associated.
3. Event handler/Event Listeners -This function handles or responds to an event. Applications register their event handler functions with the web browser, specifying an event type and an event target.
4. Event Objects - This object is associated with a particular event and contains details about that event. Event objects are passed as an argument to the event handler function. All event objects have a type property that specifies the event type and a target property that specifies the event target. Each event type defines a set of properties for its associated event object.
5. Event propagation - This is the process by which the browser decides which objects to trigger event handlers on. For events that are specific to a single object—such as the “load” event on the Window object or a “message” event on a Worker object—no propagation is required.


**Event Types**:-
`Event Categories` - 

1. Device-dependent input events - These events are directly tied to a specific input device, such as the mouse or keyboard.They include event types such as `mousedown`, `mousemove`,`mouseup`,`touchstart`,`touchmove`,`touchend`,`keydown`, and `keyup`.
2. Device-independent input events-These input events are not directly tied to a specific input device. The `click` event, for example, indicates that a link or button (or other document element)has been activated. This is often done via a mouse click, but it could also be done by keyboard or (on touch-sensitive devices) with a tap. The `input` event is a device-independent alternative to the `keydown` event and supports keyboard input as well as alternatives such as cut-and-paste and input methods used for ideographic scripts. The `pointerdown`,`pointermove`, and `pointerup` event types are device-independent alternatives to mouse and touch events. They work for mouse-type pointers, for touch screens, and for pen- or stylus-style input as well.
3. User interface events - UI events are higher-level events, often on HTML form elements that define a user interface for a web application. They include the `focus` event (when a text input field gains keyboard focus), the `change` event (when the user changes the value displayed by a form element), and the `submit` event (when the user clicks a Submit button in a form).
4. State-change events - Some events are not triggered directly by user activity, but by network or browser activity, and indicate some kind of life-cycle or state-related change. The `load` and `DOMContentLoaded` events—fired on the Window and Document objects, respectively, at the end of document loading—are probably the most commonly used of these events. Browsers fire `online` and `offline` events on the Window object when network connectivity changes. The browser’s history management mechanism  fires the `popstate` event in response to the browser’s Back button.
5. API-specific events - A number of web APIs defined by HTML and related specifications include their own event types. The HTML <video> and <audio> elements define a long list of associated event types such as `waiting`,`playing`,`seeking`,`volumechange`, and so on, and you can use them to customize media playback.

*Mouse* -
onclick - The event occurs when the user clicks on an element
oncontextmenu - User right-clicks on an element to open a context menu
ondblclick - The user double-clicks on an element
onmousedown - User presses a mouse button over an element
onmouseenter - The pointer moves onto an element
onmouseleave - Pointer moves out of an element
onmousemove - The pointer is moving while it is over an element
onmouseover - When the pointer is moved onto an element or one of its children
onmouseout - User moves the mouse pointer out of an element or one of its children
onmouseup - The user releases a mouse button while over an element

*Keyboard* - Are global events.
keydown - When the user is pressing a key down
keypress - The moment the user starts pressing a key
keyup - The user releases a key

*Frame* -
onabort - The loading of a media is aborted
onbeforeunload - Event occurs before the document is about to be unloaded
onerror - An error occurs while loading an external file
onhashchange - There have been changes to the anchor part of a URL
onload - When an object has loaded
onpagehide - The user navigates away from a webpage
onpageshow - When the user navigates to a webpage
onresize - The document view is resized
onscroll - An element’s scrollbar is being scrolled
onunload - Event occurs when a page has unloaded

*Form* -
onblur - When an element loses focus
onchange - The content of a form element changes (for <input>, <select>and <textarea>)
onfocus - An element gets focus
onfocusin - When an element is about to get focus
onfocusout - The element is about to lose focus
oninput - User input on an element
oninvalid - An element is invalid
onreset - A form is reset
onsearch - The user writes something in a search field (for <input="search">)
onselect - The user selects some text (for <input> and <textarea>)
onsubmit - A form is submitted

*Drag*
ondrag - An element is dragged
ondragend - The user has finished dragging the element
ondragenter - The dragged element enters a drop target
ondragleave - A dragged element leaves the drop target
ondragover - The dragged element is on top of the drop target
ondragstart - User starts to drag an element
ondrop - Dragged element is dropped on the drop target

*Clipboard* -
oncopy - User copies the content of an element
oncut - The user cuts an element’s content
onpaste - A user pastes content in an element

*Media* -
onabort - Media loading is aborted
oncanplay - The browser can start playing media (e.g. a file has buffered enough)
oncanplaythrough - When browser can play through media without stopping
ondurationchange - The duration of the media changes
onended - The media has reached its end
onerror - Happens when an error occurs while loading an external file
onloadeddata - Media data is loaded
onloadedmetadata - Meta Metadata (like dimensions and duration) are loaded
onloadstart - Browser starts looking for specified media
onpause - Media is paused either by the user or automatically
onplay - The media has been started or is no longer paused
onplaying - Media is playing after having been paused or stopped for buffering
onprogress - Browser is in the process of downloading the media
onratechange - The playing speed of the media changes
onseeked - User is finished moving/skipping to a new position in the media
onseeking - The user starts moving/skipping
onstalled - The browser is trying to load the media but it is not available
onsuspend - Browser is intentionally not loading media
ontimeupdate - The playing position has changed (e.g. because of fast forward)
onvolumechange - Media volume has changed (including mute)
onwaiting - Media paused but expected to resume (for example, buffering)

*Animation* -
animationend - A CSS animation is complete
animationiteration - CSS animation is repeated
animationstart - CSS animation has started

*Other* -
transitionend - Fired when a CSS transition has completed
onmessage  -A message is received through the event source
onoffline - Browser starts to work offline
ononline - The browser starts to work online
onpopstate - When the window’s history changes
onshow - A <menu> element is shown as a context menu
onstorage - A Web Storage area is updated
ontoggle - The user opens or closes the <details> element
onwheel - Mouse wheel rolls up or down over an element
ontouchcancel - Screen touch is interrupted
ontouchend - User finger is removed from a touch screen
ontouchmove - A finger is dragged across the screen
ontouchstart - Finger is placed on touch screen


**Event Target** - Event targets are the objects on which events occur or with which events are associated. In the context of the DOM, common event targets include elements, the document, and the window. When an event occurs, it is dispatched to the event target, and event listeners attached to that target can respond to the event.

1. Element: Any HTML element can be an event target. For example, a button element can be the target of a click event.
2. Document: The entire HTML document can be an event target. For example, the document can be the target of a keydown event.
3. Window: The browser window can be an event target. For example, the window can be the target of a resize event.

```js
// Element event target
const button = document.getElementById('myButton');
button.addEventListener('click', () => {
    alert('Button was clicked!');
    });

// Document event target
document.addEventListener('keydown', (event) => {
    console.log(`Key pressed: ${event.key}`);
    });

// Window event target
window.addEventListener('resize', () => {
    console.log('Window was resized!');
    });
```

**Event Handler/Listeners**

*Registering Event Handlers* - There are two basic ways to register event handlers.

1. Setting a property on the object or document element that is the event target.
2. The second (newer and more general) technique is to pass the handler to the addEventListener() method of the object or element.

`Setting property` -

```js
// Register an event handler by setting a property
button.onclick = function() {
    alert('Button was clicked!');
}
h1.onmouseenter = function(){
  //body
}
```

`addEventListener() method` - The addEventListener() method is used to attach an event listener to an element. It allows you to listen for specific events and execute a function when the event is triggered
```js
target.addEventListener(event,callback,[options])
```

Optional: Options - Typically false or left blank.

```js
// Register an event handler using addEventListener
button.addEventListener('click', () => {
    alert('Button was clicked!');
        });

//keyboard Esc button
document.addEventListener("keydown",function(e){
  if(e.key === "Escpae")
    if(bags.classList.contain("class"))
      //body
})
```

*Removing event listener* -

```js
button.removeEventListener("event",callback)
```

**Event Objects**

**Event Propagation** - Event propagation is the process of an event being triggered on an element and then propagating to its parent elements or capturing down from its parent elements. It allows handling events at different levels of the DOM hierarchy.

- `Event bubbling`: The event is first captured and handled by the innermost element and then propagated to outer elements.Event bubbling is a mechanism in which an event triggered on a specific element will also trigger the same event on all of its parent elements. It starts from the innermost element and propagates upwards in the DOM tree.
- `Event capturing`: The event is first captured by the outermost element and propagated to the innermost element.Event capturing is the process of an event being triggered on an element's parent elements first, before reaching the target element. It allows capturing events at the outermost level of the DOM hierarchy.

```js
e.stopPropagation()
```

*event delegation* - Event delegation is a technique where you attach an event listener to a parent element instead of individual child elements. It allows handling events efficiently, especially for dynamically added elements.


**Event Cancellation** - Browsers respond to many user events, even if your code does not: when the user clicks the mouse on a hyperlink, the browser follows the link. If an HTML text input element has the keyboard focus and the user types a key, the browser will enter the user’s input.If you register an event handler for events like these, you can prevent the browser from performing its default action by invoking the preventDefault() method of the event object. (Unless you registered the handler with the passive option, which makes preventDefault() ineffective.)
Canceling the default action associated with an event is only one kind of event cancellation. We can also cancel the propagation of events by calling the stopPropagation() method of the event object.

`event.preventDefault()`: Prevents the default action the browser makes on that event.
`event.stopPropagation()`: Stops the event from bubbling up or capturing down the DOM.

## Dispatching Custom Events

Client-side JavaScript’s event API is a relatively powerful one, and you can use it to define and dispatch your own events.
