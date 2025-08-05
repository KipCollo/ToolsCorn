# CSS Colors

`Color Keywords`:- Most browsers support using color keywords to specify a color. For example, to set the color of an element to blue,use the blue keyword:

```css
.some-class {
color: blue;
}
```

CSS keywords are not case sensitive—blue, Blue and BLUE will all result in #0000FF.

`Hexadecimal Value`:- CSS colors may also be represented as a hex triplet, where the members represent the red, green and blue components of a color. Each of these values represents a number in the range of 00 to FF, or 0 to 255 in decimal notation. Uppercase and/or lowercase Hexadecimal values may be used (i.e. #3fc = #3FC = #33ffCC). The browser interprets #369 as #336699. If that is not what you intended but rather wanted #306090, you need to specify that explicitly.
The total number of colors that can be represented with hex notation is 256 ^ 3 or 16,777,216.

Syntax
color: #rrggbb;
color: #rgb

- rr 00 - FF for the amount of red
- gg 00 - FF for the amount of green
- bb 00 - FF for the amount of blue

```css
.some-class {
/* This is equivalent to using the color keyword 'blue' */
color: #0000FF;
}
.also-blue {
/* If you want to specify each range value with a single number, you can!
This is equivalent to '#0000FF' (and 'blue') */
color: #00F;
}
```

Hexadecimal notation is used to specify color values in the RGB color format, per the W3C's 'Numerical color values'.
Hex values always start with a pound sign (#), are up to six "digits" long, and are case-insensitive: that is, they don't care about capitalization. #FFC125 and #ffc125 are the same color.


`rgb() Notation`:- RGB is an additive color model which represents colors as mixtures of red, green, and blue light. In essence, the RGB representation is the decimal equivalent of the Hexadecimal Notation. In Hexadecimal each number ranges from 00-FF which is equivalent to 0-255 in decimal and 0%-100% in percentages.

```css
.some-class {
/* Scalar RGB, equivalent to 'blue'*/
color: rgb(0, 0, 255);
}

.also-blue {
/* Percentile RGB values*/
color: rgb(0%, 0%, 100%);
}
```

Syntax:- 
rgb(<red>, <green>, <blue>)

<red> - an integer from 0 - 255 or percentage from 0 - 100%
<green> - an integer from 0 - 255 or percentage from 0 - 100%
<blue> - an integer from 0 - 255 or percentage from 0 - 100%

`rgba() Notation`:- Similar to rgb() notation, but with an additional alpha (opacity) value.

```css
.red {
/* Opaque red */
color: rgba(255, 0, 0, 1);
}

.red-50p {
/* Half-translucent red. */
color: rgba(255, 0, 0, .5);
}
```

Syntax:-

rgba(<red>, <green>, <blue>, <alpha>);

<red> - an integer from 0 - 255 or percentage from 0 - 100%
<green> - an integer from 0 - 255 or percentage from 0 - 100%
<blue> - an integer from 0 - 255 or percentage from 0 - 100%
<alpha> - a number from 0 - 1, where 0.0 is fully transparent and 1.0 is fully opaque

`hsl() Notation`:- HSL stands for hue ("which color"), saturation ("how much color") and lightness ("how much white").Hue is represented as an angle from 0° to 360° (without units), while saturation and lightness are represented as percentages.

```css
p {
color: hsl(240, 100.00%, 50.00%); /* Blue */
}
```

Syntax:-

color: hsl(<hue>, <saturation>%, <lightness>%);

<hue> - speciﬁed in degrees around the color wheel (without units), where 0° is red, 60° is yellow, 120° is green, 180° is cyan, 240° is blue, 300° is magenta, and 360° is red
<saturation> - speciﬁed in percentage where 0% is fully desaturated (grayscale) and 100% is fully saturated (vividly colored)
<lightness> speciﬁed in percentage where 0% is fully black and 100% is fully white

A saturation of 0% always produces a grayscale color; changing the hue has no eﬀect.
A lightness of 0% always produces black, and 100% always produces white; changing the hue or saturation has no eﬀect.

`hsla() Notation`:- Similar to hsl() notation, but with an added alpha (opacity) value.

hsla(240, 100%, 50%, 0) /* transparent */
hsla(240, 100%, 50%, 0.5) /* half-translucent blue */
hsla(240, 100%, 50%, 1) /* fully opaque blue */

Syntax:-

hsla(<hue>, <saturation>%, <lightness>%, <alpha>);

<hue> - speciﬁed in degrees around the color wheel (without units), where 0° is red, 60° is yellow, 120° is green, 180° is cyan, 240° is blue, 300° is magenta, and 360° is red
<saturation> - percentage where 0% is fully desaturated (grayscale) and 100% is fully saturated (vividly colored)
<lightness> - percentage where 0% is fully black and 100% is fully white
<alpha> - a number from 0 - 1 where 0 is fully transparent and 1 is fully opaque
