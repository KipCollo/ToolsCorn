# CSS Position

- static - Default value. Elements render in order, as they appear in the document ﬂow. The top, right, bottom, left and z-index properties do not apply.
- relative - The element is positioned relative to its normal position, so left:20px adds 20 pixels to the element's LEFT position
- ﬁxed - The element is positioned relative to the browser window
- absolute - The element is positioned relative to its ﬁrst positioned (not static) ancestor element
- initial - Sets this property to its default value.
- inherit - Inherits this property from its parent element.
- sticky - It behaves like position: static within its parent until a given oﬀset threshold is reached, then it acts as position: fixed.
- unset - Combination of initial and inherit.

```css
div {
  position: static; /* default */
  position: relative;
  position: absolute;
  position: fixed;
  position: sticky;
  position: inherit; /* Not very common */
}
```

Any element that has its position set to absolute, relative, or fixed automatically becomes a reference point (an "anchor") for any absolutely positioned items inside it.

_Static positioning_:- The default position of an element is static.This keyword lets the element use the normal behavior, that is it is laid out in its current position in the ﬂow. The top, right, bottom, left and z-index properties do not apply.
The only reason you would ever set an element to position: static is to forcefully-remove some positioning that got applied to an element outside of your control. This is fairly rare, as positioning doesn't cascade.

_Relative Position_:- Relative positioning moves the element in relation to where it would have been in normal ﬂow .Oﬀset properties:- `top,left,right,bottom`.
Are used to indicate how far to move the element from where it would have been in normal ﬂow.Its starting point is where it normally lies in the flow of the document, not the top left of the page.
When set to position relative, elements take up the same amount of space at the same exact position it was supposed to take as if its position was static.
It introduces the ability to use z-index on that element, which doesn't really work with statically positioned elements. Even if you don't set a z-index value, this element will now appear on top of any other statically positioned element.It limits the scope of absolutely positioned child elements. Any element that is a child of the relatively positioned element can be absolutely positioned within that block.

_Absolute Position_:- When absolute positioning is used the box of the desired element is taken out of the Normal Flow and it no longer aﬀects the position of the other elements on the page. Oﬀset properties:- `top,left,right,bottom`.Remember that these values will be relative to the next parent element with relative (or absolute) positioning. If there is no such parent, it will default all the way back up to the html element itself meaning it will be placed relatively to the page itself.
specify the element should appear in relation to its next non-static containing element.
The trade-off, and most important thing to remember, about absolute positioning is that these elements are removed from the flow of elements on the page. An element with this type of positioning is not affected by other elements and it doesn't affect other elements.

_Fixed position_:- Similar to position absolute, an element that has fixed position is taken out of the document flow.The element is positioned relative to the viewport, or the browser window itself.
Deﬁning position as ﬁxed we can remove an element from the document ﬂow and set its position relatively to the browser window. One obvious use is when we want something to be visible when we scroll to the bottom of a long page.

_Sticky:_ - This is a hybrid of relative and fixed positioning.The element is treated as relative positioned until it crosses a specified threshold, at which point it is treated as fixed positioning.

_Inherits:_ - It works as the name implies: The element inherits the value of its parent element. Typically, position property elements do not naturally inherit their parent’s values—the static value is assigned if no position value is given. Ultimately, you can type inherit or the parent element’s value and get the same result.

**Notes** - Margins don’t [collapse](http://www.sitepoint.com/web-foundations/collapsing-margins/) on absolutely positioned elements. Suppose you have a paragraph with a margin-bottom of 20px applied. Right below the paragraph is an image with a margin-top of 30px applied.
The space between the paragraph and the image will not be 50px (20px + 30px), but rather 30px (30px > 20px). This is known as collapsing margins. The simplest way to stop the margin collapse from occurring is to add padding or borders to each element.
The two margins combine (or collapse) to become one margin. Absolutely positioned elements do not have margins that collapse, which might make them act differently than expected.

## index

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
