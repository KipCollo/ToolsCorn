# CSS(Cascading Style Sheets)

CSS or Cascading Style Sheets is a stylesheet language used to describe the presesntation of a document written in HTML or XML(including XML dialects such as SVG,MathML or XHTML) of any website. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.
CSS was proposed in 1994 and first implemented (partially) by Internet Explorer 3 in 1996.

A CSS rule-set consists of a selector and a declaration block: CSS selector.The declaration block contains one or more declarations separated by semicolons.Each declaration includes a CSS property name and a value, separated by a colon.A CSS declaration always ends with a semicolon, and declaration blocks are surrounded by curly braces.

## Inserting CSS

There are three ways of inserting a style sheet:-

1. External CSS - With an external style sheet, you can change the look of an entire website by changing just one file!. Each HTML page must include a reference to the external style sheet file inside the *<link>* element, inside the head section. An external style sheet can be written in any text editor, and must be saved with a .css extension. The external .css file should not contain any HTML tags. Eg.

```java
<link rel="stylesheet" type="text/css" href="mystyle.css">
```

2. Internal CSS - An internal style sheet may be used if one single HTML page has a unique style. The internal style is defined inside the <style> element, inside the head section. Eg.

```css
<style>
  body {
    background-color: linen;
  }
</style>
```

3. Inline CSS - An inline style may be used to apply a unique style for a single element. To use inline styles, add the style attribute to the relevant element. The style attribute can contain any CSS property. Eg.

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

Selectors are used to "find" (or select) the HTML elements you want to style. To group selectors, separate each selector with a comma. The universal selector (*) selects all HTML elements on the page. We can divide them into five categories:

1. Simple selectors (select elements based on name, id, class)
2. Combinator selectors (select elements based on a specific relationship between them)
3. Pseudo-class selectors (select elements based on a certain state)
4. Pseudo-elements selectors (select and style a part of an element)
5. Attribute selectors (select elements based on an attribute or attribute value).

**Simple Selectors**:-

`Element Selector`:- It selects HTML elements based on the element name.

```css
p{
   color:red;
}
```

`id Selector`:- It uses the id attribute of an HTML element to select a specific element. The id of an element is unique within a page, so the id selector is used to select one unique element! To select an element with a specific id, write a hash (#) character, followed by the id of the element. An id name cannot start with a number. Example:

```css
#param{
   color:red;
}
```

`class Selector`:- It selects HTML elements with a specific class attribute. To select elements with a specific class, write a period (.) character, followed by the class name. A class name cannot start with a number. Example:

```css
.cent{
   color:red;
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
*{
   color:blue;
}
```

`Grouping Selector`:- It selects all the HTML elements with the same style definitions. It will be better to group the selectors, to minimize the code. To group selectors, separate each selector with a comma. Example:

```css
h1, h2, p {
  text-align: center;
  color: red;
}
```

## Inheritance

Inheritance is a fundamental mechanism of CSS by which the computed values of some properties of an element are applied to its' children. This is particularly useful when you want to set a global style to your elements rather than having to set said properties to each and every element in your markup.
Common properties that are automatically inherited are: font, color, text-align, line-height.

Some properties are not automatically inherited from an element down to its' children. This is because those properties are typically desired to be unique to the element (or selection of elements) to which the property is applied to. Common such properties are margin, padding, background, display, etc.
However, sometimes inheritance is desired anyway. To achieve this, we can apply the inherit value to the property that should be inherited. The inherit value can be appied to any CSS property and any HTML element.

```css
body{
  font-size: 22px;
}

button,input,textarea,select{
  font: inherit;
}
```
