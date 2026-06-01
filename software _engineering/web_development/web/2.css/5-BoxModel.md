# CSS Box Model

The box model refers to the composition of elements on a page. When you specify the height or width of an element, you’re setting the content size—any padding, border, and margin will be added to that.

Applying box-sizing: border-box to an element changes the box model to a more predictable behavior. Setting height or width will control the size of the entire element, including its padding and border.

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


`Width and Height of an Element` - Important: When you set the width and height properties of an element with CSS, you just set the width and height of the content area. To calculate the total width and height of an element, you must also include the padding and borders.

The total width of an element should be calculated like this:- 
Total element width = width + left padding + right padding + left border + right border

The total height of an element should be calculated like this:- 
Total element height = height + top padding + bottom padding + top border + bottom border

Note: The margin property also affects the total space that the box will take up on the page, but the margin is not included in the actual size of the box. The box's total width and height stops at the border.

**Padding** - Padding properties are used to generate space around an element's content, inside of any defined borders. CSS has properties for specifying the padding for each side of an element:- padding-top, padding-right, padding-bottom, padding-left.

Padding properties can have the following values(Negative values are not allowed):
   - length - specifies a padding in px, pt, cm, etc.
   - % - specifies a padding in % of the width of the containing element
   - inherit - specifies that the padding should be inherited from the parent element
The shorthand is padding. Eg. padding: 25px 50px 75px 100px;

The CSS width specifies the width of the element's content area. The content area is the portion inside the padding, border, and margin of an element (the box model). So, if an element has a specified width, the padding added to that element will be added to the total width of the element. This is undesirable. To keep the desired width, no matter the amount of padding, you can use the box-sizing: border-box. This causes the element to maintain its width; if you increase the padding, the available content space will decrease.


**CSS Borders** - The CSS border properties allow you to specify the style, width, and color of an element's border.

`CSS Border Style` - The border-style property specifies what kind of border to display.
The following values are allowed:

- dotted - Defines a dotted border
- dashed - Defines a dashed border
- solid - Defines a solid border
- double - Defines a double border
- groove - Defines a 3D grooved border. The effect depends on the border-color value
- ridge - Defines a 3D ridged border. The effect depends on the border-color value
- inset - Defines a 3D inset border. The effect depends on the border-color value
- outset - Defines a 3D outset border. The effect depends on the border-color value
- none - Defines no border
- hidden - Defines a hidden border

The border-style property can have from one to four values (for the top border, right border, bottom border, and the left border).

`CSS Border Width` - The border-width property specifies the width of the four borders.
The width can be set as a specific size (in px, pt, cm, em, etc) or by using one of the three pre-defined values: thin, medium, or thick:

```css
p.two {
  border-style: solid;
  border-width: medium;
}

p.three {
  border-style: dotted;
  border-width: 2px;
}
```

Specific Side Widths - The border-width property can have from one to four values (for the top border, right border, bottom border, and the left border):

```css
p.two {
  border-style: solid;
  border-width: 20px 5px; /* 20px top and bottom, 5px on the sides */
}

p.three {
  border-style: solid;
  border-width: 25px 10px 4px 35px; /* 25px top, 10px right, 4px bottom and 35px left */
}
```

`CSS Border Color` - The border-color property is used to set the color of the four borders.
The color can be set by:

- name - specify a color name, like "red"
- HEX - specify a HEX value, like "#ff0000"
- RGB - specify a RGB value, like "rgb(255,0,0)"
- HSL - specify a HSL value, like "hsl(0, 100%, 50%)"
- transparent

Note: If border-color is not set, it inherits the color of the element.

```css
p.one {
  border-style: solid;
  border-color: red;
}
```

Specific Side Colors - The border-color property can have from one to four values (for the top border, right border, bottom border, and the left border). 

```css
p.one {
  border-style: solid;
  border-color: red green blue yellow; /* red top, green right, blue bottom and yellow left */
}
```


`CSS Border - Shorthand Property` - Like you saw in the previous page, there are many properties to consider when dealing with borders.
To shorten the code, it is also possible to specify all the individual border properties in one property.

The border property is a shorthand property for the following individual border properties:

- border-width
- border-style (required)
- border-color

```css
p {
  border: 5px solid red;
}
```

`CSS Rounded Borders` - The border-radius property is used to add rounded borders to an element:

```css
p {
  border: 2px solid red;
  border-radius: 5px;
}
```


**CSS Outline** - An outline is a line that is drawn around elements, OUTSIDE the borders, to make the element "stand out".
Note: Outline differs from borders! The outline is drawn outside the element's border, and may overlap other content. Also, the outline is NOT a part of the element's dimensions; the element's total width and height is not affected by the width of the outline.

CSS has the following outline properties:

- outline-style - Specifies the style of the outline
- outline-color - Specifies the color of the outline
- outline-width - Specifies the width of the outline
- outline-offset - Adds space between the outline and the edge/border of an element
- outline - A shorthand property


**Margin** - Margin properties are used to create space around elements, outside of any defined borders. CSS has properties for specifying the margin for each side of an element:- margin-top, margin-right, margin-bottom, margin-left.

Margin properties can have the following values(Negative values are allowed):
   - auto - the browser calculates the margin.
   - length - specifies a margin in px, pt, cm, etc.
   - % - specifies a margin in % of the width of the containing element.
   - inherit - specifies that the margin should be inherited from the parent element.
The shorthand is margin. Eg. margin: 25px 50px 75px 100px;

Horizontally Center: We can set the value to auto to horizontally center the element within its container. The element will take up the specified width, and the remaining space will be split equally between left and right margins.
Margin Collapse: Top and bottom margins of elements are sometimes collapsed into a single margin that is equal to the largest of the two margins. This does not happen on left and right margins! Only top and bottom margins.

