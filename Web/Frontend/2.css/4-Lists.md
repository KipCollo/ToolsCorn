# CSS Lists

1. list-style-type - the type of list-item marker.
2. list-style-position - speciﬁes where to place the marker
3. list-style-image - speciﬁes the type of list-item marker
4. initial - sets this property to its default value
5. inherit - inherits this property from its parent element

`Bullet Position`:- A list consists of <li> elements inside a containing element (<ul> or <ol>). Both the list items and the container can have margins and paddings which inﬂuence the exact position of the list item content in the document. The default values for the margin and padding may be diﬀerent for each browser. In order to get the same layout cross-browser, these need to be set speciﬁcally.

Each list item gets a 'marker box', which contains the bullet marker. This box can either be placed inside or outside of the list item box.

```css
list-style-position: inside;
```

places the bullet within the <li> element, pushing the content to the right as needed.

```css
list-style-position: outside;
```

places the bullet left of the <li> element. If there is not enough space in the padding of the containing element, the marker box will extend to the left even if it would fall oﬀ the page.

`Removing Bullets / Numbers`:- Sometimes, a list should just not display any bullet points or numbers. In that case, remember to specify margin and padding.

```css
ul {
list-style-type: none;
}
li {
margin: 0;
padding: 0;
}
```

`Type of Bullet or Numbering`:-

- Speciﬁc for <li> tags within an unordered list (<ul>):

```cs
list-style: disc;/* A filled circle (default) */
list-style: circle;/* A hollow circle */
list-style: square;/* A filled square */
list-style: '-';/* any string */
```

- Speciﬁc for <li> tags within an ordered list (<ol>):

```css
list-style: decimal;/* Decimal numbers beginning with 1 (default) */
list-style: decimal-leading-zero;/* Decimal numbers padded by initial zeros (01, 02, 03, … 10) */
list-style: lower-roman;/* Lowercase roman numerals (i., ii., iii., iv., ...) */
list-style: upper-roman;/* Uppercase roman numerals (I., II., III., IV., ...) */
list-style-type: lower-greek;/* Lowercase roman letters (α., β., γ., δ., ...) */
list-style-type: lower-alpha;/* Lowercase letters (a., b., c., d., ...) */
list-style-type: lower-latin;/* Lowercase letters (a., b., c., d., ...) */
list-style-type: upper-alpha;/* Uppercase letters (A., B., C., D., ...) */
list-style-type: upper-latin;/* Uppercase letters (A., B., C., D., ...) */
```

- Non-speciﬁc:

```css
list-style: none;/* No visible list marker */
list-style: inherit;/* Inherits from parent */
```
