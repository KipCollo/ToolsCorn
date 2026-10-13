# CSS Typography

Typography is the way that text is arranged and presented.
`Text Styling` - The various method of styling a text element via CSS.

## Fonts

Font properties define the font family, boldness, size, and the style of a text.

- `font-family` sets font family of a text & should hold several font names as a "fallback" system. If the browser does not support the first font, it tries the next font, and so on. Start with the font you want, and end with a generic family, to let the browser pick a similar font in the generic family, if no other fonts are available. Eg. font-family: "Times New Roman", Times, serif; There are two types of font family names:
  - generic family - a group of font families with a similar look (like "Serif" or "Monospace")
  - font family - a specific font family (like "Times New Roman" or "Arial")
- `font-style` is mostly used to specify italic text. It has three values:
  - normal - The text is shown normally
  - italic - The text is shown in italics
  - oblique - The text is "leaning" (similar to italic, but less supported)
- `font-variant` specifies whether or not a text should be displayed in a small-caps font. In a small-caps font, all lowercase letters are converted to uppercase letters. However, the converted uppercase letters appear in a smaller font size than the original uppercase letters in the text. Eg. font-variant: normal; font-variant: small-caps;
- `font-size` sets the size of the text. Note: If you do not specify a font size, the default size for normal text, like paragraphs, is 16px. em size unit is recommended. 1em is equal to the current font size. The default text size in browsers is 16px. So, the default size of 1em is 16px. The size can be calculated from pixels to em using this formula: pixels/16=em. The text size can also be set with a vw unit, which means the "viewport width". That way the text size will follow the size of the browser window. Note: Viewport is the browser window size. 1vw = 1% of viewport width. If the viewport is 50cm wide, 1vw is 0.5cm. The font-size value can be an absolute, or relative size.
  - Absolute size Eg. pc, pt, etc.:
    - Sets the text to a specified size
    - Does not allow a user to change the text size in all browsers (bad for accessibility reasons)
    - Absolute size is useful when the physical size of the output is known
  - Relative size. Eg. vw, %, etc.:
    - Sets the size relative to surrounding elements
    - Allows a user to change the text size in browser
- `font-weight` specifies the weight of a font. Eg. font-weight: normal; font-weight: bold; font-weight: 400;

`Font Size`:- The font size given in %, px, em, or any other valid CSS measurement

```css
#element-one {
  font-size: 30px;
}
```

`color`:- Any valid CSS color representation, like red, #00FF00, hsl(240, 100%, 50%) etc.
`font-stretch`:- Whether or not to use a confenced or expanded face from font. Valid values are normal, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded or ultra-expanded.--obsolete/depricated
`text-align`:- start, end, left, right, center, justify, match-parent
`text-decoration`:- none, underline, overline, line-through, initial, inherit;
`font-style`:- italics or oblique.
`font-variant`:- normal or small-caps
`font-weight`:- normal, bold or numeric from 100 to 900.
`line-height`:- The line height given in %, px, em, or any other valid CSS measurement
`font-family`:- This is for deﬁning the family's name.

## Links

Links can be styled differently depending on what state they are in. The four links states are:

- a:link - a normal, unvisited link
- a:visited - a link the user has visited
- a:hover - a link when the user mouses over it
- a:active - a link the moment it is clicked

There are some order rules:

- a:hover MUST come after a:link and a:visited
- a:active MUST come after a:hover

`cursor`

```css
a:visited {
  color: red;
}

a:hover {
  color: blue;
}

a:active {
  color: yellow;
}
```

```css
a:link {
  color: red;
}
a:visited {
}
a:hover {
}
a:active {
}
```

## CSS Background

It's used to define the background effects for elements. CSS background properties:

- background-color - sets the background color of an element. Eg. background-color: "green;
- background-image - specifies an image to use as the background of an element. By default, the image is repeated both horizontally and vertically so it covers the entire element. Eg. background-image: url("img_tree.gif"), url("paper.gif");
- background-repeat - background images can be repeated individually or both horizontally or vertically. Eg.
  - background-repeat: repeat-x; // horizontally
  - background-repeat: repeat-y; // vertically
  - background-repeat: repeat; // both(default)
  - background-repeat: no-repeat; // no repeated, shown only once
- background-attachment - specifies whether the background image should scroll or not. Eg.
  - background-attachment: fixed; // not scroll with the rest of the page
  - background-attachment: scroll; // scroll with the rest of the page
  - background-attachment: local; // scroll with the element's contents
- background-position - specifies the position of the background image. Eg.
  - background-position: right top; // one/two values using left, top, center & bottom
  - background-position: 50% 50%;
  - background-position: 50px 150px;

## Text

Text is styled with some of the text formatting properties.

- `color` is used to set the color of the text. Eg. color: blue;
- `text-align` is used to set the horizontal alignment of a text. A text can be left or right aligned, centered, or justified. Left alignment is default if text direction is left-to-right, and right alignment is default if text direction is right-to-left. Eg. text-align: center; When the text-align is set to "justify", each line is stretched so that every line has equal width, and the left and right margins are straight.
- `text-decoration` is used to set or remove decorations from text. The value text-decoration: none; is often used to remove underlines from links. Eg. text-decoration: none/overline/line-through/underline;
- `text-transform` is used to specify uppercase and lowercase letters in a text. It can be used to turn everything into uppercase or lowercase letters, or capitalize the first letter of each word. Eg. text-transform: uppercase; text-transform: lowercase; text-transform: capitalize;
- `text-indent` is used to specify the indentation of the first line of a text. Eg. text-indent: 50px;
  letter-spacing is used to specify the space between the characters in a text. It can be used to increase or decrease the space between characters. Eg. letter-spacing: 3px; letter-spacing: -3px;
- `line-height` is used to specify the space between lines. Eg. line-height: 0.8;
- `direction` is used to change the text direction of an element. Eg. direction: rtl;
- `word-spacing` is used to specify the space between the words in a text. It can be used to increase or decrease the space between words: Eg. word-spacing: 10px; word-spacing: -5px;
- `text-shadow` adds shadow to text. It can be used to specify the position of the horizontal shadow (3px), vertical shadow (2px) and the color (red). Eg. text-shadow: 3px 2px red;
- `text-overflow` specifies how overflowed content that is not displayed should be signaled to the user. It can be clipped, display an ellipsis (...), or display a custom string. Eg.
- `text-shadow` Text shadows are like box shadows except that they are shadows for text rather than the whole element. Luckily, there is no vendor prefix necessary for text shadow.The options for text shadow are the same as for box-shadow except that there is _no inset_ text shadow support.As with box shadows, it is possible to have multiple text shadows just by separating them with commas. Here is an example that creates a flaming text effect.

```css
div {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-shadow: 0 0 50px #333;
}
```

## Height/Width

Height and Width properties are used to set the height and width of an element. It may have the following values:

- `o` - This is default. The browser calculates the height and width
- `length` - Defines the height/width in px, cm etc.
- `%` - Defines the height/width in percent of the containing block
  Note: Remember that the height and width properties do not include padding, borders, or margins.They set the height/width of the content area inside the padding, border, and margin of the element.

- `max-width` sets the maximum width of an element. It adds a horizontal scrollbar to the page when the browser window is smaller than the width of the element.
- `min-width` sets the minimum width of an element. Only if the content is smaller than the minimum width, the minimum width will be applied.
- `max-height` sets the maximum height of an element. It adds a vertical scrollbar to the page when the browser window is smaller than the height of the element.
- `min-height` sets the minimum height of an element. Only if the content is smaller than the minimum height, the minimum height will be applied.
  Block-level elements always take up the full width available. Setting the width prevents it from stretching out to the edges of its container. Set the margin to auto, to horizontally center the element within its container. The problem occurs when the browser window is smaller than the width of the element. The browser then adds a horizontal scrollbar to the page. Using max-width instead, in this situation, will improve the browser's handling of small windows. This is important when making a site usable on small devices.aut

## CSS Sprites

​A CSS sprite is a performance optimization technique that combines multiple images into a single image called a sprite sheet or tile set. Sprites reduce network congestion by reducing the number of downloads needed to render a web page.
While combining several images into one with sprites, all images are loaded with a single HTTP request. Browsers limit the number of concurrent requests a site can make and HTTP requests require a bit of handshaking. Thus, sprites are important for the same reasons that minifying and concatenating CSS and JavaScript are important.

**Using Sprites in CSS**

You set the same background-image on several CSS classes and set the background position and dimensions of the individual classes to display a single portion of the sprite.

```css
.flags-canada,
.flags-mexico,
.flags-usa {
  background-image: url("../images/flags.png");
  background-repeat: no-repeat;
}

.flags-canada {
  height: 128px;
  background-position: -5px -5px;
}

.flags-usa {
  height: 135px;
  background-position: -5px -143px;
}

.flags-mexico {
  height: 147px;
  background-position: -5px -288px;
}
```

**Benefits**

​CSS sprites reduce overall page load time while giving enterprises more control over the performance of their website.

- Users experience faster page load times since images appear as soon as the sprite sheet is downloaded.
- Enterprises see greater throughput and lower resource usage as fewer HTTP requests are made, reducing the amount of network congestion.

## Shadows

## Vertical Alignment

Vertical alignment is one of the main reasons some people think CSS is confusing. You wonder, I guess, why is it so _hard_ to align content vertically with CSS? Why don't they create a property that does it automatically? _Why does `vertical-align` not work for me?!_

About the `vertical-align` question: this property is only for aligning inline or table-cell elements, hope it ends your doubt about it.

And about being hard, well, turns out it is not that hard, but there are some questions you have to do to yourself when wanting do align something vertically:

- Is it a inline or block-level element?
- If it's a text, is it single or multi-line?
- Do you always know the height of the content?
- Can you use CSS3?

**The line-height method:**

This method can be used when you're vertically aligning a single-line text, single-line inline-level element or a image.

Let's say you have the following HTML:

```html
<div class="parent">
  <span class="child">Hello!</span>
</div>
```

You'll then align the `.child` content with:

```css
.parent {
  height: 150px;
}

.child {
  line-height: 150px;
}
```

But if the content of `.child` is directly inside `.parent` like this:

```html
<div class="parent">Hello!</div>
```

You then can put the `line-height` property on it:

```css
.parent {
  height: 150px;
  line-height: 150px;
}
```

If, instead of a `<span>` you have a `<img>`:

```html
<div class="parent">
  <img src="image.jpg" class="child-image" />
</div>
```

You got to change to:

```css
.parent {
  height: 150px;
  line-height: 150px;
}

.child-image {
  vertical-align: middle; /* Aha! Here it does work :) */
}
```
