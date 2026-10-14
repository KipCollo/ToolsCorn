# CSS Transform & Transition

## CSS Transform

**2D Transform** - CSS transform allow you to move, rotate, scale, and skew elements. Some older browsers need specific prefixes (-ms- or -webkit-) to understand the 2D transform properties. Ex.

```css
div {
  -ms-transform: rotate(20deg); /* IE 9 */
  -webkit-transform: rotate(20deg); /* Safari prior 9.0 */
  transform: rotate(20deg); /* Standard syntax */
}
```

2D transformation methods:

- `translate()` moves an element from its current position (according to the parameters given for the X-axis and the Y-axis). Ex. transform: translate(50px, 100px); //50px right & 100px down from current position.
- `rotate()` rotates an element clockwise or counter-clockwise according to a given degree. Ex. transform: rotate(20deg); //rotates element clockwise with 20 degrees
- `scaleX()` increases or decreases the width of an element. Ex. transform: scaleX(2); //increases width twice to its original
- `scaleY()` increases or decreases the height of an element. Ex. transform: scaleY(3); //increases height thrice to its original
- `scale()` increases or decreases the size of an element (according to the parameters given for the width and height). Ex. transform: scale(2, 3); //increases width twice & height thrice to its original
- `skewX()` skews an element along the X-axis by the given angle. Ex. transform: skewX(20deg); //skews element 20 degrees along the X-axis
- `skewY()` skews an element along the Y-axis by the given angle. Ex. transform: skewY(20deg); //skews element 20 degrees along the Y-axis
- `skew()` skews an element along the X and Y-axis by the given angles. Ex. transform: skew(20deg, 10deg); //skews element 20 degrees along the X-axis, and 10 degrees along the Y-axis
- `matrix()` combines all the 2D transform methods into one. The parameters are as follows: matrix(scaleX(),skewY(),skewX(),scaleY(),translateX(),translateY()). Ex.
  transform: matrix(1, -0.3, 0, 1, 0, 0);

**3D Transform** - CSS transform property allows to use following 3D transformation methods:

- `rotateX()` rotates an element around its X-axis at a given degree. Ex. transform: rotateX(150deg);
- `rotateY()` rotates an element around its Y-axis at a given degree. Ex. transform: rotateY(150deg);
- `rotateZ()` rotates an element around its Z-axis at a given degree. Ex. transform: rotateZ(150deg);

---

## CSS Transitions

CSS transitions allows you to change property values smoothly, over a given duration.To create a transition effect, you must specify the CSS property you want to add a transition to, and the duration of the transition.
The CSS transition property is a shorthand property for:

- transition-property
- transition-duration
- transition-timing-function
- transition-delay

The timing function value allows the speed of the transition to change over time by defining one of six possibilities: _ease, linear, ease-in, ease-out, ease-in-out, and cubic-bezier_ (which allows you to define your own timing curve).
The transition is triggered when there is a change in the element's properties. This often happens within pseudo-classes (:hover, :active, :focus, or :checked).Instead of having to add the transition property stack to each of those declarations, the transition instructions are attached to the normal state and therefore declared only once.

So, from the code above, the transition effect will start when the width property changes value.

```css
div:hover {
  width: 300px;
}
```

You can change multiple properties by separating them by commas.

```css
div {
  transition:
    width 2s,
    height 4s,
    background-color 3s;
}
```

It allows you to change property values smoothly, over a given duration. Properties:

- `transition` To create a transition effect, you must specify two things: - the CSS property you want to add an effect to - the duration of the effect. If the duration is not specified, the transition will have no effect, because the default value is 0.
- `transition-delay` specifies a delay (in seconds) for the transition effect. Ex. transition-delay: 1s;
- `transition-duration` specifies a duration (in seconds) for the transition effect. Ex. transition-duration: 1s;
- `transition-property` specifies a property on which the transition effect applies. Ex. transition-property: width;
- `transition-timing-function` specifies the speed curve of the transition effect. Values: - ease - specifies a transition effect with a slow start, then fast, then end slowly (this is default) - linear - specifies a transition effect with the same speed from start to end - ease-in - specifies a transition effect with a slow start - ease-out - specifies a transition effect with a slow end - ease-in-out - specifies a transition effect with a slow start and end - cubic-bezier(n,n,n,n) - lets you define your own values in a cubic-bezier function
- `transition` - The shorthand is transition. Eg. transition: width 2s linear 1s; // property->duration->timing-function->delay

```css
a.foo {
  padding: 5px 10px;
  background: #9c3;
  -webkit-transition:
    background 0.3s ease,
    color 0.2s linear;
  -moz-transition:
    background 0.3s ease,
    color 0.2s linear;
  -o-transition:
    background 0.3s ease,
    color 0.2s linear;
  transition:
    background 0.3s ease,
    color 0.2s linear;
}
a.foo:hover,
a.foo:focus {
  color: #030;
  background: #690;
}
```

Let’s say that along with the background color, we also want to change the link’s text color and transition that as well. We can do that by stringing multiple transitions together, separated by a comma. Each can have their varying duration and timing functions. An alternative to listing multiple properties is using the all value. This will transition all available properties.

Another basic use of changing states is to change the background of an input box on focus.

```css
input.ourInputBox:focus {
  -webkit-transition: background-color 0.5s linear;
  background: #ccc;
}
```

This time, we put the transition declaration into the hover state, so that we aren’t adding additional unnecessary classes to the CSS. We apply the transition once the input box acquires focus.
