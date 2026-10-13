# CSS(Cascading Style Sheets)

`CSS or Cascading Style Sheets` is a stylesheet language used to describe the presentation of a document written in HTML or XML(including XML dialects such as SVG,MathML or XHTML) of any website. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.
CSS was proposed in 1994 and first implemented (partially) by Internet Explorer 3 in 1996.

CSS or Cascading Style Sheets is the language used to style the frontend of any website. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.
CSS will apply styles to the HTML elements as a top to bottom approach. Which means the CSS style will be applied into web pages as line by line based on selectors and it's properties and values.CSS will apply styles to the HTML elements as a top to bottom approach. Which means the CSS style will be applied into web pages as line by line based on selectors and it's properties and values.

CSS styles are mainly used for presenting and styling the web pages as per the requirements. Without CSS Styles, the web pages, you have seen now will be a skeleton alone

**CSS Ruleset** - A CSS rule-set consists of a selector and a declaration block, `CSS selector` points to the HTML element you want to style.The `declaration block` contains one or more declarations separated by semicolons.Each declaration includes a CSS property name and a value, separated by a colon.A CSS declaration always ends with a semicolon, and declaration blocks are surrounded by curly braces.

## Inserting/Adding CSS

There are three ways of inserting a style sheet:-

1. `External CSS` - With an external style sheet, you can change the look of an entire website by changing just one file!. Each HTML page must include a reference to the external style sheet file inside the _<link>_ element, inside the head section. An external style sheet can be written in any text editor, and must be saved with a .css extension. The external .css file should not contain any HTML tags. Eg.

```java
<link rel="stylesheet" type="text/css" href="mystyle.css">
```

2. `Internal CSS` - An internal style sheet may be used if one single HTML page has a unique style. The internal style is defined inside the <style> element, inside the head section. Eg.

```css
<style>
  body {
    background-color: linen;
  }
</style>
```

3. `Inline CSS` - An inline style may be used to apply a unique style for a single element. To use inline styles, add the style attribute to the relevant element. The style attribute can contain any CSS property. Eg.

```html
<h1 style="color:blue;text-align:center;">This is a heading</h1>
```

If some properties have been defined for the same selector (element) in different style sheets, the value from the last read stylesheet will be used.

`Cascading Order`:-When there is more than one style specified for an HTML element, all the styles in a page will "cascade" into a new "virtual" style sheet by the following rules, where number one has the highest priority:

1. Inline style (inside an HTML element)
2. External and internal style sheets (in the head section)
3. Browser default.

So, an inline style has the highest priority, and will override external and internal styles and browser defaults.

## Selectors

Selectors are used to find (or select) the HTML elements you want to style. To group selectors, separate each selector with a comma. The universal selector (\*) selects all HTML elements on the page. We can divide them into five categories:

1. Simple selectors (select elements based on name, id, class)
2. Combinator selectors (select elements based on a specific relationship between them)
3. Pseudo-class selectors (select elements based on a certain state) - (:)
4. Pseudo-elements selectors (select and style a part of an element) - (::)
5. Attribute selectors (select elements based on an attribute or attribute value).

**Simple Selectors**:-

`Element Selector`:- It selects HTML elements based on the element name.

```css
p {
  color: red;
}
```

`id Selector`:- It uses the id attribute of an HTML element to select a specific element. The id of an element is unique within a page, so the id selector is used to select one unique element.To select an element with a specific id, write a hash (#) character, followed by the id of the element. An id name cannot start with a number. Example:

```css
#param {
  color: red;
}
```

`class Selector`:- It selects HTML elements with a specific class attribute. To select elements with a specific class, write a period (.) character, followed by the class name. A class name cannot start with a number. Example:

```css
.cent {
  color: red;
}
```

You can also specify that only specific HTML elements should be affected by a class. Example:

```css
p.center {
  text-align: center;
  color: red;
}
```

`Universal Selector(*)`:- It selects all HTML elements on the page.

```css
* {
  color: blue;
}
```

`Grouping Selector`:- It selects all the HTML elements with the same style definitions. It will be better to group the selectors, to minimize the code. To group selectors, separate each selector with a comma. Example:

```css
h1,
h2,
p {
  text-align: center;
  color: red;
}
```

`Descendant selector` - It targets elements that are descendants of another element.

```css
footer p {
  font-size: 16px;
}
article header p {
  font-style: italic;
}
```

`Child Selectors` - It targets elements that are direct children of another element.

```css
div > p {
  color: green;
}
```

`Adjacent Sibling Selectors` - It targets the next element that is a sibling of the current element.

```css
p + span {
  font-style: italic;
}
```

`General Sibling Selectors` - It targets all elements that are siblings of the current element.

```css
h1 ~ p {
  color: red;
}
```

**pseudo-class selector** - It allows to style elements based on their state or relationship to other elements. They provide additional flexibility in CSS styling.
There are 3 common type of pseudo-selectors in CSS.

1. Structural Pseudo Selectors
2. State Pseudo Selectors
3. Content Pseudo Selectors

_Structural Pseudo Selectors_ - This type of pseudo-selectors targets element based on the HTML document positions.The list of structural pseudo-selectors:-

- :root: Targets the root element of the document (typically <html>).
- :first-child: Targets the first child element of its parent.
- :last-child: Targets the last child element of its parent.
- :nth-child(n): Targets the nth child element of its parent, where n is an integer.
- :nth-of-type(n): Targets the nth element of a specific type within its parent.
- :only-child: Targets an element that is the only child of its parent.
- :first-of-type: Targets the first element of a specific type within its parent.
- :last-of-type: Targets the last element of a specific type within its parent.
- :only-of-type: Targets an element that is the only element of its type within its parent.
- :empty: Targets an element that has no children.
- :target: Targets an element that is the current target of a hyperlink.
- :not(): Targets elements that do not match a specified selector or set of selectors.
- :has(): Targets elements that have a specific child or descendant element or property or value or anything related to the element.

```css
/* Root pseudo-selectors used for defining CSS variables */
:root {
  --text-color: black;
}

/* This will set style to first child of the div elements */
div:first-child {
  color: blue;
}

/* not pseudo-selectors */
button:not(:first-child) {
  ...
}

li:nth-child(2) {
  color: red;
}
li:nth-child(odd) {
}
/* has pseudo-selectors */
button:has(.icon-button) {
  ...
}

button:has(svg) {
  ...
}

/* light and dark theme selection based css selector */
body:has(#theme option[value="dark"]:checked) {
  background: black;
  color: white;
}
```

_State Pseudo Selectors_ - It targets elements based on their current state of behavior.The list of structural pseudo-selectors:-

- :hover: Targets an element when the mouse pointer is hovering over it.
- :active: Targets an element when it is activated (e.g., clicked or tapped).
- :focus: Targets an element when it is focused (e.g., by keyboard or mouse).
- :visited: Targets an element that has been visited by the user.
- :link: Targets an anchor element that has not been visited.
- :checked: Targets a checked input element (e.g., checkbox, radio button).
- :disabled: Targets a disabled element.
- :enabled: Targets an enabled element.
- :focus-within: Targets an element and its descendants when any of them is focused.

```css
/* It bolds the text of anchor tag when it is hovered */
a:hover {
  font-weight: bold;
}
```

_Content Pseudo Selectors_ (pseudo elements)- It targets a element on before or after basis.

```css
/* This will insert '+' before the paragraph tag */
p::before {
  content: "+";
  color: red;
}

/* This will insert '\' after the paragraph tag */
p::after {
  content: "\";
  color: blue;
}
```

**Attribute Selectors** - It targets elements based on their attributes.

_Syntax:_

- `[attribute_name]`
- `[attribute_name="value"]`
- `[attribute_name^="value"] (starts with)`
- `[attribute_name$="value"] (ends with)`
- `[attribute_name*="value"] (contains)`

> Apply style to the a tag having the attribute name

```css
a[href] {
  color: blue;
}
```

> Apply style to the a tag with attribute value equals to `aboutus.html`

```css
a[href="aboutus.html"] {
  color: blue;
}
```

> Apply style to the a tag with attribute value starts with `https://`

```css
a[href^="https://"] {
  color: blue;
}
```

> Apply style to the a tag with attribute value ends with `.html`

```css
a[href$=".html"] {
  color: blue;
}
```

> Apply style to the a tag with attribute value contains `products`

```css
a[href*="products"] {
  color: blue;
}
```

## Comments

CSS comments are not displayed in the browser, but they can help document your source code. Comments are used to explain the code, and may help when you edit the source code at a later date. Comments are ignored by browsers.
A CSS comment is placed inside the <style> element, and starts with /_* and ends with *_/. Example:

```css
/* This is a single-line comment */
p {
  color: red;
}
```

You can add comments wherever you want in the code. Example:

```css
p {
  color: red; /* Set text color to red */
}
```

Comments can also span multiple lines. Example:

```css
/* This is
a multi-line
comment */
p {
  color: red;
}
```

## Inheritance & Specificity

Inheritance is a fundamental mechanism of CSS by which the computed values of some properties of an element are applied to its' children. This is particularly useful when you want to set a global style to your elements rather than having to set said properties to each and every element in your markup.
Common properties that are automatically inherited are: font, color, text-align, line-height.

Some properties are not automatically inherited from an element down to its' children. This is because those properties are typically desired to be unique to the element (or selection of elements) to which the property is applied to. Common such properties are margin, padding, background, display, etc.
However, sometimes inheritance is desired anyway. To achieve this, we can apply the inherit value to the property that should be inherited. The inherit value can be appied to any CSS property and any HTML element.

```css
body {
  font-size: 22px;
}

button,
input,
textarea,
select {
  font: inherit;
}
```

## variables

Used in other declarations using the var() function.E.g --variable-name: value
Used in other declarations using the var() function.E.g var(--variable-name)

`Counter Reset` - Create a new counter or reversed counter with the given name on the specified element.E.g counter-reset: name-of-counter
`Counter Increment` - Increases or decreases the value of a CSS counter by a given value.E.g counter-increment: name-of-counter
`Counter Dynamic value` - Adjust appearance of content based on its location in a document.E.g content: counter(name-of-counter)

TODO:-

- Overflow
- Masking & Blending
- Container queries
- Subgrid
- BEM standards
