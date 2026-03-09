# HTML Lists

HTML supports ordered, unordered, and definition lists. You can also nest one list within another.
1. Unordered Lists
2. Ordered Lists
3. Definition Lists
4. Nested Lists

`Unordered Lists`:- An unordered list is a list of items. The list items are marked with bullets (typically small black circles)
An unordered list starts with the <ul> tag. Each list item starts with the <li> tag.

```html
<ul>
   <li>Coffee</li>
   <li>Tea</li>
   <li>Milk</li>
</ul>
```

Inside a list item, you can put paragraphs, line breaks, images, links, other lists, and so on.
You can display different kinds of bullets in an unordered list by using the type attribute.

```html
<h4>Disc bullets list:</h4>
<ul type="disc">
   <li>Apples</li>
   <li>Bananas</li>
   <li>Lemons</li>
</ul>

<h4>Circle bullets list:</h4>
<ul type="circle">
   <li>Apples</li>
   <li>Bananas</li>
   <li>Lemons</li>
</ul>

<h4>Square bullets list:</h4>
<ul type="square">
   <li>Apples</li>
   <li>Bananas</li>
   <li>Lemons</li>
</ul>
```

`Ordered Lists`:- An ordered list is also a list of items; the list items are numbered sequentially rather than bulleted.
An ordered list starts with the <ol> tag. Each list item starts with the <li> tag.

```html
<ol>
   <li>Coffee</li>
   <li>Tea</li>
   <li>Milk</li>
</ol>
```

You can display different kinds of ordered lists by using the type attribute.

```html
<h4>Letters list:</h4>
<ol type="A">
   <li>Apples</li>
   <li>Bananas</li>
   <li>Lemons</li>
</ol>

<h4>Lowercase letters list:</h4>
<ol type="a">
   <li>Apples</li>
   <li>Bananas</li>
   <li>Lemons</li>
</ol>

<h4>Roman numbers list:</h4>
<ol type="I">
   <li>Apples</li>
   <li>Bananas</li>
   <li>Lemons</li>
</ol>

<h4>Lowercase Roman numbers list:</h4>
<ol type="i">
   <li>Apples</li>
   <li>Bananas</li>
   <li>Lemons</li>
</ol>
```

`Definition Lists`:- A definition list is not a list of single items. It is a list of items (terms), together with a description of each item (term).
A definition list starts with a <dl> tag (definition list).Each term starts with a <dt> tag (definition term).Each description starts with a <dd> tag (definition description).

```html
<h4>A Definition List:</h4>
<dl>
   <dt>Coffee</dt>
   <dd>Black hot drink</dd>
   <dt>Milk</dt>
   <dd>White cold drink</dd>
</dl>
```

Inside the <dd> tag you can put paragraphs, line breaks, images, links, other lists,and so on.

`Nested Lists`:- A nested list is a list within another list. Usually the second list is indented another level and the item markers will appear differently than the original list.

```html
<h4>A nested List:</h4>
<ul>
   <li>Coffee</li>
   <li>Tea
   <ul>
      <li>Black tea</li>
      <li>Green tea</li>
   </ul>
   </li>
   <li>Milk</li>
</ul>
```
