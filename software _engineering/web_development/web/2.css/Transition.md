# CSS Transitions

CSS transitions allows you to change property values smoothly, over a given duration.
To create a transition effect, you must specify the CSS property you want to add a transition to, and the duration of the transition.

The CSS transition property is a shorthand property for:
- transition-property
- transition-duration
- transition-timing-function
- transition-delay

The transition is triggered when there is a change in the element's properties. This often happens within pseudo-classes (:hover, :active, :focus, or :checked).

So, from the code above, the transition effect will start when the width property changes value.

```css
div:hover {
  width: 300px;
}
```

You can change multiple properties by separating them by commas.

```css
div {
  transition: width 2s, height 4s, background-color 3s;
}
```

It allows you to change property values smoothly, over a given duration. Properties:

- `transition` To create a transition effect, you must specify two things:
    - the CSS property you want to add an effect to
    - the duration of the effect. If the duration is not specified, the transition will have no effect, because the default value is 0.
transition: width 2s; //single property transition
transition: width 2s, height 4s; //multiple property transition

- `transition-delay` specifies a delay (in seconds) for the transition effect. Ex.
transition-delay: 1s;

- `transition-duration` specifies a duration (in seconds) for the transition effect. Ex.
transition-duration: 1s;

- `transition-property` specifies a property on which the transition effect applies. Ex.
transition-property: width;

- `transition-timing-function` specifies the speed curve of the transition effect. Values:
    - ease - specifies a transition effect with a slow start, then fast, then end slowly (this is default)
    - linear - specifies a transition effect with the same speed from start to end
    - ease-in - specifies a transition effect with a slow start
    - ease-out - specifies a transition effect with a slow end
    - ease-in-out - specifies a transition effect with a slow start and end
    - cubic-bezier(n,n,n,n) - lets you define your own values in a cubic-bezier function
The shorthand is transition. Eg. 
transition: width 2s linear 1s; // property->duration->timing-function->delay