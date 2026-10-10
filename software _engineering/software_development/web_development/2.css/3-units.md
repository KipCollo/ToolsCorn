# CSS Units

The CSS Units are used to specify the unit of measurements for value of the properties.
There are almost 5 type of Units in CSS.

1. Pixels (px)
2. Percentages (%)
3. Ems (em)
4. Rems (rem)
5. Viewport units (vw, vh, vmax, vmin)
6. Functions
   - Min Function
   - Max Function
   - Minmax Function
   - Calc Function
   - Clamp Function
   - Repeat Function

- % - Deﬁne sizes in terms of parent objects or current object dependent on property
- em - Relative to the font-size of the element (2em means 2 times the size of the current font)
- rem - Relative to font-size of the root element.
- vw - Relative to 1% of the width of the viewport\*
- vh - Relative to 1% of the height of the viewport\*
- vmin - Relative to 1% of viewport's\* smaller dimension
- vmax - Relative to 1% of viewport's\* larger dimension
- cm - centimeters
- mm - millimeters
- in - inches (1in = 96px = 2.54cm)
- px - pixels (1px = 1/96th of in) are relative to the viewing device.
- pt - points (1pt = 1/72 of 1in)
- pc - picas (1pc = 12 pt)
- s - seconds (used for animations and transitions)
- ms - milliseconds (used for animations and transitions)
- ex - Relative to the x-height of the current font
- ch - Based on the width of the zero (0) character
- fr - fractional unit (used for CSS Grid Layout)

A CSS distance measurement is a number immediately followed by a length unit (px, em, pc, in, …)
CSS supports a number of length measurements units. They are absolute or relative.

_Pixels_ - It is a fixed unit of measurement that represents one pixel on the screen.

```css
p {
  font-size: 16px;
}
```

_Percentages_ - It is a relative unit of measurement that represents a percentage of the parent element's size.

```css
div {
  width: 50%;
}
```

_Ems_- It is a relative unit of measurement that represents the font size of the element's parent

```css
p {
  font-size: 1.2em;
}
```

_Rems_ - It is a relative unit of measurement that represents the font size of the root element (usually the `<html>` element).

```css
p {
  font-size: 1.5rem;
}
```

_Viewport Units_ - It is a relative units of measurement based on the viewport size (the visible area of the browser window)

- `vw`: Viewport width,
- `vh`: Viewport height,
- `vmax`: Maximum of viewport width and height,
- `vmin`: Minimum of viewport width and height.

```css
div {
  font-size: 2vw;
  height: 100vh;
}
```

_Functions_:- CSS has predefined functions that may accepts certain parameters. Which return value for the properties to assign them.The list of commonly used functions:\*\*

- `min()`
- `max()`
- `minmax()`
- `clamp()`
- `repeat()`

- `Min Function`:- It will give the minimum value among the comma separated given units by comparing them. This will gives smallest (most negative) value from the list of comma separated values.This function can be used anywhere that accepts the units such as `number`, `integer`, `percentage`, `length`, `angle`, `time`, `frequency`.Syntax: `min(value1, value2);`

> The example assigns the minimum possible width either 800px or 90%.

```css
.container {
  width: min(800px, 90%);
}
```

> The long description of the above min function can be possible by the below code.

```css
.container {
  width: 800px;
  max-width: 90%;
}
```

This `min` function will set width to the container that if 800px is smaller than 90% of the viewport then it will return 800px as value and vice versa.

- `Max Function`:-It will give the maximum value among the comma separated given units by comparing them. This will gives largest (most positive) value from the list of comma separated values.This function can be used anywhere that accepts the units such as `number`, `integer`, `percentage`, `length`, `angle`, `time`, `frequency`.Syntax: `max(value1, value2);`

> The example assigns the maximum possible width either 200px or 90%.

```css
.container {
  width: max(200px, 90%);
}
```

> The long description of the above max function can be possible by the below code.

```css
.container {
  width: 90%;
  min-width: 200px;
}
```

This `max` function will set width to the container that if 200px is larger than 90% of the viewport then it will return 200px as value and vice versa.

- `Minmax Function`:- This function in CSS is used to specify a range of values for a property, allowing you to set a minimum and maximum value for a property. This is particularly useful for creating responsive layouts and ensuring that elements don't become too large or too small.Syntax: `minmax(min-value, max-value)`.

```css
.container {
  width: minmax(300px, 80%);
}
```

- `Calc Function`:- This function in CSS is used to performs mathematical calculations on CSS values.Syntax: `calc(expression)`

```css
.container {
  width: calc(100% - 20px);
  margin: calc(2rem / 2);
}
```

- `Clamp Function`:- This function in CSS is used to clamps a value between a minimum and maximum.Syntax:- `clamp(min-value, preferred-value, max-value)`

```css
.container {
  font-size: clamp(12px, 2vw, 24px);
}
```

- `Repeat Function`:- This function in CSS is used to repeat a value to the specified number of times.Syntax: `repeat(count, value)`

```css
.container {
  grid-template-area: repeat(3, 1fr);
}
```

- `calc()` performs a calculation to be used as the property value. Ex.
  width: calc(100% - 100px);

- `var()` can be used to insert the value of a custom property. Variables in CSS should be declared within a CSS selector that defines its scope. For a global scope you can use either the :root or the body selector. The variable name must begin with two dashes (--) and is case sensitive! The syntax of the var() function is as follows: var(custom-name, value). Ex.

```css
:root {
  --main-bg-color: coral;
}

#div1 {
  background-color: var(--main-bg-color);
}
```
