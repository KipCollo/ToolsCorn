# CSS Position

- static - Default value. Elements render in order, as they appear in the document ﬂow. The top, right, bottom, left and z-index properties do not apply.
- relative - The element is positioned relative to its normal position, so left:20px adds 20 pixels to the element's LEFT position
- ﬁxed - The element is positioned relative to the browser window
- absolute - The element is positioned relative to its ﬁrst positioned (not static) ancestor element
- initial - Sets this property to its default value.
- inherit - Inherits this property from its parent element.
- sticky - It behaves like position: static within its parent until a given oﬀset threshold is reached, then it acts as position: fixed.
- unset - Combination of initial and inherit.

`Absolute Position`:- When absolute positioning is used the box of the desired element is taken out of the Normal Flow and it no longer aﬀects the position of the other elements on the page. Oﬀset properties:

1. top
2. left
3. right
4. bottom

specify the element should appear in relation to its next non-static containing element.

```css
.abspos{
   position:absolute;
   top:0px;
   left:500px;
}
```

`Relative Position`:- Relative positioning moves the element in relation to where it would have been in normal ﬂow .Oﬀset properties:

1. top
2. left
3. right
4. bottom

are used to indicate how far to move the element from where it would have been in normal ﬂow.

```css
.relpos{
position:relative;
top:20px;
left:30px;
}
```

`Static positioning`:- The default position of an element is static.
This keyword lets the element use the normal behavior, that is it is laid out in its current position in the ﬂow. The top, right, bottom, left and z-index properties do not apply.

```css
.element{
position:static;
}
```

`Fixed position`:- Deﬁning position as ﬁxed we can remove an element from the document ﬂow and set its position relatively to the browser window. One obvious use is when we want something to be visible when we scroll to the bottom of a long page.

```css
#stickyDiv {
position:fixed;
top:10px;
left:10px;
}
```

`Overlapping Elements with z-index`:- To change the default stack order positioned elements (position property set to relative, absolute or fixed), use
the z-index property.
The higher the z-index, the higher up in the stacking context (on the z-axis) it is placed.

```css
div#div1 {
z-index: 1;
left: 0px;
top: 0px;
background-color: blue;
}
```
