# CSS Box Model

`The Edges`:- The browser creates a rectangle for each element in the HTML document. The Box Model describes how the padding, border, and margin are added to the content to create this rectangle.
The perimeter of each of the four areas is called an edge. Each edge deﬁnes a box.

1. The innermost rectangle is the content box. The width and height of this depends on the element's rendered content (text, images and any child elements it may have).
2. Next is the padding box, as deﬁned by the padding property. If there is no padding width deﬁned, the padding edge is equal to the content edge.
3. Then we have the border box, as deﬁned by the border property. If there is no border width deﬁned, the border edge is equal to the padding edge.
4. The outermost rectangle is the margin box, as deﬁned by the margin property. If there is no margin width deﬁned, the margin edge is equal to the border edge.

The default box model (content-box) can be counter-intuitive, since the width / height for an element will not represent its actual width or height on screen as soon as you start adding padding and border styles to the element.
The following example demonstrates this potential issue with content-box:

```css
textarea {
width: 100%;
padding: 3px;
box-sizing: content-box; /* default value */
}
```

Since the padding will be added to the width of the textarea, the resulting element is a textarea that is wider than 100%.
Fortunately, CSS allows us to change the box model with the box-sizing property for an element. There are three diﬀerent values for the property available:

- content-box: The common box model - width and height only includes the content, not the padding or border.
- padding-box: Width and height includes the content and the padding, but not the border.
- border-box: Width and height includes the content, the padding as well as the border.
