# CSS Layout

Layout is the way text,images and other content is placed and arranged on a webpage.It gives a page visual structure,into which we place our content.
Building layout is arranging page elemnts into a visual structure,instead of simply having them placed one after another(normal flow).

There are two types of layouts:-

1. Page layout.
2. Component Layout.

CSS provides several tools you can use to control the layout of a web page.Methods to alter document flow—floats, flexbox, and grid layout.Float, grid, flexbox, positioning, display and box model are some of the key topics that are used for making layouts.
The flexbox and grid layouts are both new to CSS and are proving to be essential tools.

**The display property** - The display CSS property is fundamental for controlling the layout and ﬂow of an HTML document. Most elements have a default display value of either block or inline (though some elements have other default values).

- `Inline`:- An inline element occupies only as much width as necessary. It stacks horizontally with other elements of the same type and may not contain other non-inline elements.
- `Block`:- A block element occupies the maximum available width of its' parent element. It starts with a new line and, in contrast to inline elements, it does not restrict the type of elements it may contain.
- `Inline Block`:- The inline-block value gives us the best of both worlds: it blends the element in with the ﬂow of the text while allowing us to use padding, margin, height and similar properties which have no visible eﬀect on inline elements.
  Elements with this display value act as if they were regular text and as a result are aﬀected by rules controlling the ﬂow of text such as text-align. By default they are also shrunk to the the smallest size possible to accommodate their content.
- `none`:- An element that is given the none value to its display property will not be displayed at all.
  When an element has been set to be display:none; the browser ignores every other layout property for that speciﬁc element (both position and float). No box will be rendered for that element and its existence in html does not aﬀect the position of following elements.

Note that this is diﬀerent from setting the visibility property to hidden. Setting visibility: hidden; for an element would not display the element on the page but the element would still take up the space in the rendering process as if it would be visible. This will therefore aﬀect how following elements are displayed on the page.
The none value for the display property is commonly used along with JavaScript to show or hide elements at will, eliminating the need to actually delete and re-create them.

1. none - Hide the element and prevent it from occupying space.
2. block - Block element, occupy 100% of the available width, break after element.
3. inline - Inline element, occupy no width, no break after element.
4. inline-block - Taking special properties from both inline and block elements, no break, but can have width.
5. inline-flex - Displays an element as an inline-level ﬂex container.
6. inline-table - The element is displayed as an inline-level table.
7. grid - Behaves like a block element and lays out its content according to the grid model.
8. flex - Behaves like a block element and lays out its content according to the ﬂexbox model.
9. inherit - Inherit the value from the parent element.
10. initial - Reset the value to the default value taken from behaviors described in the HTML speciﬁcations or from the browser/user default stylesheet.
11. table - Behaves like the HTML table element.
12. table-cell - Let the element behave like a <td> element
13. table-column - Let the element behave like a <col> element
14. table-row - Let the element behave like a <tr> element
15. list-item - Let the element behave like a <li> element.

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

Floats are the oldest method for laying out a web page, and for many years were the only way. They’re a little odd, however.Elements is removed from the normal flow:"out of flow.Text and inline elements will wrap around floated elemnt.The container will not adjust its height to the elemnt.
Making sense of floats begins with an understanding of their original purpose.Although floats were not originally intended to construct page layouts, they have served that job well.

A float pulls an element (often an image) to one side of its container, allowing the document flow to wrap around it.This layout is common in newspapers and magazines, so floats were added to CSS to achieve this effect.
A floated element is removed from the normal document flow and pulled to the edge of the container. The document flow then resumes, but it’ll wrap around the space where the floated element now resides. If you float multiple elements in the same direction, they’ll stack alongside one another.

- Floated elements are first laid out according to the normal flow, then taken out of the normal flow and sent as far to the right or left (depending on which value is applied) of the parent element.In other words, they go from stacking on top of each other to sitting next to each other, given that there is enough room in the parent element for each floated element to sit.
- Generally, a floated element should have an explicitly set width (unless it is a replaced element, like an image). This ensures that the float behaves as expected and helps to avoid issues in certain browsers.
- Non-positioned, non-floated, block-level elements act as if the floated element is not there, since the floated element is out of flow in relation to other block elements. When we use a floated image in a paragraph - the text in the paragraph is inline, so it flows around the floated element.
- The clear property has five values available: left, right, both, inherit, and none. Assigning a value of left says the top edge of this element must sit below any element that has the float: left property applied to it.
- A rule that I have found that works nicely for my layouts is float first. That is, in my HTML, I almost always place my floated elements first in the markup, and before any non-floated elements that my float will interact with,
  such as the paragraph in the example above. Most of the time, this gives the desired result.
- Collapsing is when a parent element that contains any number of floated elements doesn’t expand to completely surround those elements in the way it would if the elements were not floated.
- There is a method that allows a parent element to clear itself of any floated elements inside it. It uses a CSS property called overflow with a value of hidden.
  Note that the overflow property was not intended for this type of use, and could cause some issues such as hiding content or causing unwanted scrollbars to appear.
- _Trick: For clearing floats adding a ‘overflow:auto’ to the parent element also does the trick._
- Note that overflow: auto doesn't clear floats — it causes the element to contain its floats by way of establishing a new block formatting context for them so that they don't intrude to other elements in the parent context.
  That is what forces the parent to stretch to contain them. You can only clear a float if you add a clearing element after the float. A parent element cannot clear its floating children.
- A better way to clear floats is to add a `clearfix` class to the container element with the following styles
  ```css
  .clearfix:after {
    content: "";
    display: table;
    clear: both;
  }
  ```

**9 Rules governing Floats**

1. Floated elements are pushed to the edge of their containers, no further.
2. Any floated element will either appear next to or below a previous floated element. If the elements are floated left, the second element will appear to the right of the first. If they’re floated right, the second element will appear to the left of the first.
3. A left-floating box can't be further right than a right-floating box.
4. Floated elements can't go higher than their container’s top edge (this gets more complicated when collapsing margins are involved, see original rule).
5. A floated element can't be higher than a previous block level or floated element.
6. A floated element can't be higher than a previous line of inline elements.
7. One floated element next to another floated element can’t stick out past the edge of its container.
8. A floating box must be placed as high as possible.
9. A left-floating box must be put as far to the left as possible, a right-floating box as far to the right as possible. A higher position is preferred over one that is further to the left/right.

`clear property`:- The clear property is directly related to ﬂoats. Property Values:-

1. none - Default. Allows ﬂoating elements on both sides
2. left - No ﬂoating elements allowed on the left side
3. right - No ﬂoating elements allowed on the right side
4. both - No ﬂoating elements allowed on either the left or the right side
5. initial - Sets this property to its default value. Read about initial
6. inherit - Inherits this property from its parent element. Read about inherit

```css
h1 {
  float: left;
}
```

---

## Flexbox

The full name of flexbox is CSS Flexible Box Layout. By the name, we can see that flexbox is all about making our layout flexible. And that's right, it changes the way the modern layout is built.
`Flexbox` is a new method for laying out elements on the page. It’s more predictable and offers far more specific control than floats. It’s also a simple solution to the long-standing problems of vertical centering and equal height columns.Perfect for component layouts.

The Flexible Box module, or just 'ﬂexbox' for short, is a box model designed for user interfaces, and it allows users to align and distribute space among items in a container such that elements behave predictably when the page layout must accommodate diﬀerent, unknown screen sizes. A ﬂex container expands items to ﬁll available space and shrinks them to prevent overﬂow.

The main advantage of flexbox is it allows the flex container to change the width, height, and most importantly the order of its elements to best fill the available space.This was not possible (almost) before the flexbox.

_Flexbox principles_:- Flexbox begins with the familiar display property. Applying display: flex to an element turns it into a flex container, and its direct children turn into flex items. By default,flex items align side by side, left to right, all in one row. The flex container fills the available width like a block element, but the flex items may not necessarily fill the width of their flex container. The flex items are all the same height, determined naturally by their contents.

```css
.items {
  display: flex;
}
```

Flexbox is an entire module and not a single property. It involves a lot of things including a whole set of properties.

_Flexbox Terminology_:- The flex container is the `parent element`. All child elements inside it are called `flex items`. Flex items are only one-level deep children. So if we have some other elements inside flex items these elements are not called children of the flex container and the flexbox style of the container doesn’t apply to them.

The next major part of the flexbox is the axis. A Flexbox has a cross axis and main axis.The main axis of a flex container is the primary axis along which flex items are laid out. It can be horizontal and vertical, depending on the flex-direction property.The cross axis is always perpendicular to the main axis.
`main-start` and `main-end` refer to the start and the end of the element by the main axis.
`cross-start` and `cross-end` refer to the start and the end of the element by the cross axis.
`main-size` and `cross-size` refer to the size of the element by main and cross axis.

- _justify-content_ - defines how the browser distributes space between and around items horizontally (also called main-axis).This centers the elements along the axis speciﬁed by flex-direction. I.e., for a justify-content center horizontal (flex-direction: row) ﬂexbox, this centers horizontally, and for a vertical ﬂexbox (flex-direction: column) ﬂexbox, this centers vertically. It has many values but only 6 are widely used:
  1.  center align items at the center of the container.
  2.  flex-start (default) align items at the start of the container.
  3.  flex-end align items at the end of the container.
  4.  space-between align the first and last item will be flush with the ends of the container and all of the space shared equally between the items.
  5.  space-around align items evenly. Items have a half-size space on either end.
  6.  space-evenly align items evenly. Items have equal space around them.

- _align-items_ defines how the browser distributes space between and around items vertically. Think of it as justify-content but for the vertical axis.This centers the elements along the axis other than the one speciﬁed by flex-direction i.e., vertical centering for a horizontal ﬂexbox and horizontal centering for a vertical ﬂexbox. Property values:
  1.  center align items at the center of the container.
  2.  flex-start align items at the start of the container.
  3.  flex-end align items at the end of the container.
  4.  baseline items are aligned such as their baselines align.
  5.  stretch items are stretched to fill the container.

- _flex-direction_ The flex-direction property specifies the direction of flexible items. Property values:
  1.  row (default) flexible items are displayed horizontally, as a row.
  2.  row-reverse same as row, but in reverse order.
  3.  column items are displayed vertically, as a column.
  4.  column-reverse items are displayed vertically, as a column.

- The _order_ property specifies the order of a flexible item relative to the rest of the flexible items inside the same container. By default, items have a value of 0. But we can set any positive or negative integer value (-2, -1, 0, 1, 2).

- The _align-self_ property specifies the alignment for the selected item inside the flexible container. Property values (align-self in examples applied to box number 1):
  1.  center element is positioned at the center of the container.
  2.  flex-start element is positioned at the beginning of the container.
  3.  flex-end element is positioned at the end of the container.
  4.  stretch element is positioned to fit the container.

- The _flex-wrap_ property specifies whether the flexible items should wrap or not. Property values:
  1.  nowrap (default) specifies that the flexible items will not wrap.
  2.  wrap specifies that the flexible items will wrap if necessary.
  3.  wrap-reverse same as wrap, but reverse.

- The _align-content_ property modifies the behavior of the flex-wrap property. It is similar to align-items, but instead of aligning flex items, it aligns flex lines. Property values:
  1.  center lines stretch to take up the remaining space.
  2.  flex-start lines are packed toward the start of the flex container.
  3.  flex-end lines are packed toward the end of the flex container.
  4.  space-between lines are evenly distributed in the flex container.
  5.  space-around lines are evenly distributed in the flex container, with half-size spaces on either end.
- gap
- flex-basis - default is auto.This technically the width of flex items.
- flex-grow
- flex-shrink

---

## Grid

Grid layout is a new and powerful CSS layout system that allows to divide a web page content into rows and columns in an easy way.The CSS Grid is deﬁned as a display property. It applies to a parent element and its immediate children only.
Perfect for page layouts and complex components layouts.
The easiest way to deﬁne the markup structure above as a grid is to simply set its display property to grid:

```css
.container {
  display: grid;
}
```

The CSS grid lets you define a two-dimensional layout of columns and rows and then place elements within the grid. Some elements may only fill one cell of the grid; others can span multiple columns or rows. The size of the grid can be defined precisely, or you can allow it to automatically size itself as needed to fit the contents within. You can place items precisely within the grid, or allow them to flow naturally to fill in the gaps.
However, doing this will invariably cause all the child elements to collapse on top of one another. This is because the children do not currently know how to position themselves within the grid. But we can explicitly tell them.

Anatomy of a grid:-

- Grid line—These make up the structure of the grid. A grid line can be vertical or horizontal and lie on either side of a row or column. The grid-gap, if defined,lies atop the grid lines.
- Grid track—A grid track is the space between two adjacent grid lines. A grid has horizontal tracks (rows) and vertical tracks (columns).
- Grid cell—A single space on the grid, where a horizontal grid track and a vertical grid track overlap.
- Grid area—A rectangular area on the grid made up by one or more grid cells.The area is between two vertical grid lines and two horizontal grid lines.
- Gutters(gaps)

If grid items aren't explicitly placed with grid-area, grid-column, grid-row, etc., they are automatically placed according to their order in the source code. We can override this using the order property, which is one of the advantages of grid over table-based layout.
By default, all grid items have an order of 0, but this can be set to any positive or negative value, similar to z-index.

First we need to tell the grid element .container how many rows and columns will make up its structure and we can do this using the grid-columns and grid-rows properties (note the pluralisation):

```css
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 0.5em;
}
```

As with flexbox, grid layout applies to two levels of the DOM hierarchy. An element with display: grid becomes a grid container. Its child elements then become grid items.

- `display: grid` defines a grid container. The container behaves like a block display element, filling 100% of the available width. You could also use the value inline-grid; in which case, the element will flow inline and will only be as wide as is necessary to contain its children.
- `grid-template-columns` and `grid-template-rows` defines the size of each of the columns and rows in the grid.
- `fr` represents each column’s (or row’s) fraction unit.
- `grid-gap` property defines the amount of space to add to the gutter between each grid cell. You can optionally provide two values to specify vertical and
  horizontal spacing individually (for example, grid-gap: 0.5em 1em).

Grid also introduces a new unit, the fractional fr. Each fr unit allocates one share of the available space. For example, if two elements are set to 1fr and 3fr respectively, the space is divided into 4 equal shares; the first element occupies 1/4 and the second element 3/4 of any leftover space.
When columns are set with pixels, percentages, or ems, any other columns set with fr will divvy up the space that's left over.
You don’t necessarily have to use fraction units for each column or row. You can also use other measures such as px, em, or percent. Or, you could mix and match. For instance, grid-template-columns: 300px 1fr would define a fixed-size column of 300 px followed by a second column that will grow to fill the rest of the available space. A 2 fr column would be twice as wide as a 1 fr column.

Specifying a bunch of columns with identical widths can get tedious. Luckily there's a repeat function to help with that.
For example, we previously defined five 20% columns with the rule grid-template-columns: 20% 20% 20% 20% 20%;. This can be simplified as grid-template-columns: repeat(5, 20%);

```css
grid-template-columns: repeat(5, 12.5%);
```

- `grid-template` is a shorthand property that combines grid-template-rows and grid-template-columns.For example, grid-template: 50% 50% / 200px; will create a grid with two rows that are 50% each, and one column that is 200 pixels wide.

- `- grid-column-start` and `grid-column-end` - Specifies where to start the grid item and Specifies where to end the grid item respectively. If you want to count grid lines from the right instead of the left, you can give grid-column-start and grid-column-end negative values. For example, you can set it to -1 to specify the first grid line from the right.

```css
grid-column-start: 1;
grid-column-end: -2;
```

Instead of defining a grid item based on the start and end positions of the grid lines, you can define it based on your desired column width using the span keyword. Keep in mind that span only works with positive values. For example, water these carrots with the rule grid-column-end: span 2;.

```css
grid-column-start: 1;
grid-column-end: span 2;
```

You can also use the span keyword with grid-column-start to set your item's width relative to the end position.

Typing both grid-column-start and grid-column-end every time can get tiring. Fortunately, `grid-column` is a shorthand property that can accept both values at once, separated by a slash.For example, grid-column: 2 / 4; will set the grid item to start on the 2nd vertical grid line and end on the 4th grid line.

```css
grid-column: 2 / 4;
grid-column: 2 / span 3;
grid-column: span 2;
```

One of the things that sets CSS grids apart from flexbox is that you can easily position items in two dimensions: columns and rows. grid-row-start works much like grid-column-start except along the vertical axis.

```css
grid-row-start: 3;
```

If typing out both grid-column and grid-row is too much for you, there's yet another shorthand for that. grid-area accepts four values separated by slashes: grid-row-start, grid-column-start, grid-row-end, followed by grid-column-end.
One example of this would be grid-area: 1 / 1 / 3 / 6;.

```css
grid-area: 1/2/4/6;
```

- grid-auto-flow
- grid-auto-rows
- column-gap
- row-gap
- grid-row-start
- grid-row-end
- grid-template-ares
- place-items
- justify-items
- align-items
