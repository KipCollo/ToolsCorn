# CSS Layout

CSS provides several tools you can use to control the layout of a web page.Methods to alter document flow—floats, flexbox, and grid layout.
The flexbox and grid layouts are both new to CSS and are proving to be essential tools.

1. none Hide the element and prevent it from occupying space.
2. block Block element, occupy 100% of the available width, break after element.
3. inline Inline element, occupy no width, no break after element.
4. inline-block Taking special properties from both inline and block elements, no break, but can have width.
5. inline-flex Displays an element as an inline-level ﬂex container.
6. inline-table The element is displayed as an inline-level table.
7. grid Behaves like a block element and lays out its content according to the grid model.
8. flex Behaves like a block element and lays out its content according to the ﬂexbox model.
9. inherit Inherit the value from the parent element.
10. initial - Reset the value to the default value taken from behaviors described in the HTML speciﬁcations or from the browser/user default stylesheet.
table Behaves like the HTML table element.
table-cell Let the element behave like a <td> element
table-column Let the element behave like a <col> element
table-row Let the element behave like a <tr> element
list-item Let the element behave like a <li> element.

## The display property

The display CSS property is fundamental for controlling the layout and ﬂow of an HTML document. Most elements have a default display value of either block or inline (though some elements have other default values).

`Inline`:- An inline element occupies only as much width as necessary. It stacks horizontally with other elements of the same type and may not contain other non-inline elements.

```html
<span>This is some <b>bolded</b> text!</span>
```

`Block`:- A block element occupies the maximum available width of its' parent element. It starts with a new line and, in contrast to inline elements, it does not restrict the type of elements it may contain.

```html
<div>Hello world!</div><div>This is an example!</div>
```

`Inline Block`:- The inline-block value gives us the best of both worlds: it blends the element in with the ﬂow of the text while allowing us to use padding, margin, height and similar properties which have no visible eﬀect on inline elements.
Elements with this display value act as if they were regular text and as a result are aﬀected by rules controlling the ﬂow of text such as text-align. By default they are also shrunk to the the smallest size possible to accommodate their content.

`none`:- An element that is given the none value to its display property will not be displayed at all.
When an element has been set to be display:none; the browser ignores every other layout property for that speciﬁc element (both position and float). No box will be rendered for that element and its existence in html does not aﬀect the position of following elements.

Note that this is diﬀerent from setting the visibility property to hidden. Setting visibility: hidden; for an element would not display the element on the page but the element would still take up the space in the rendering process as if it would be visible. This will therefore aﬀect how following elements are displayed on the page.
The none value for the display property is commonly used along with JavaScript to show or hide elements at will, eliminating the need to actually delete and re-create them.

## Columns

The CSS multi-column layout makes it easy to create multiple columns of text.

```css
section {
columns: 3;
column-gap: 40px;
column-rule: 2px solid gray;
break-inside: avoid;
}
```



## Floats

Floats are the oldest method for laying out a web page, and for many years were the only way. They’re a little odd, however.
Making sense of floats begins with an understanding of their original purpose.Although floats were not originally intended to construct page layouts, they have
served that job well.

A float pulls an element (often an image) to one side of its container, allowing the document flow to wrap around it.This layout is common in newspapers
and magazines, so floats were added to CSS to achieve this effect.

A floated element is removed from the normal document flow and pulled to the edge of the container. The document flow then resumes, but it’ll wrap around
the space where the floated element now resides. If you float multiple elements in the same direction, they’ll stack alongside one another.

`clear property`:- The clear property is directly related to ﬂoats. Property Values:-

1. none - Default. Allows ﬂoating elements on both sides
2. left - No ﬂoating elements allowed on the left side
3. right - No ﬂoating elements allowed on the right side
4. both - No ﬂoating elements allowed on either the left or the right side
5. initial - Sets this property to its default value. Read about initial
6. inherit - Inherits this property from its parent element. Read about inherit

## Flexbox

`Flexbox`—formally `Flexible Box Layout`—is a new method for laying out elements on the page. It’s more predictable and offers far more specific control than floats. It’s also a simple solution to the long-standing problems of vertical centering and equal height columns.

The Flexible Box module, or just 'ﬂexbox' for short, is a box model designed for user interfaces, and it allows users to align and distribute space among items in a container such that elements behave predictably when the page layout must accommodate diﬀerent, unknown screen sizes. A ﬂex container expands items to ﬁll available space and shrinks them to prevent overﬂow.

`Flexbox principles`:- Flexbox begins with the familiar display property. Applying display: flex to an element turns it into a flex container, and its direct children turn into flex items. By default,flex items align side by side, left to right, all in one row. The flex container fills the available width like a block element, but the flex items may not necessarily fill the width of their flex container. The flex items are all the same height, determined naturally by their contents.

```css
.items{
   display: flex;
}
```

- align-items- This centers the elements along the axis other than the one speciﬁed by flex-direction i.e., vertical centering for a horizontal ﬂexbox and horizontal centering for a vertical ﬂexbox.
- justify-content - This centers the elements along the axis speciﬁed by flex-direction. I.e., for a justify-content center horizontal (flex-direction: row) ﬂexbox, this centers horizontally, and for a vertical ﬂexbox (flex-direction: column) ﬂexbox, this centers vertically.
- flex-wrap
- flex-direction
- align-content
- flex-basis
- flex-grow
- flex-shrink

## Grid

Grid layout is a new and powerful CSS layout system that allows to divide a web page content into rows and columns in an easy way.
The CSS Grid is deﬁned as a display property. It applies to a parent element and its immediate children only.

The easiest way to deﬁne the markup structure above as a grid is to simply set its display property to grid:

```css
.container {
display: grid;
}
```

However, doing this will invariably cause all the child elements to collapse on top of one another. This is because the children do not currently know how to position themselves within the grid. But we can explicitly tell them.
First we need to tell the grid element .container how many rows and columns will make up its structure and we can do this using the grid-columns and grid-rows properties (note the pluralisation):

```css
.container {
display: grid;
grid-columns: 50px 50px 50px;
grid-rows: 50px 50px;
}
```

- grid-auto-flow
- grid-template-columns
- grid-auto-rows 
- grid-template-rows
- column-gap
- row-gap
- gap
- grid-column-start
- grid-column-end
- grid-row-start
- grid-row-end
- grid-template-ares
