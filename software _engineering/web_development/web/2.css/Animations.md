# Animations

CSS allows animation of HTML elements. An animation lets an element gradually change from one style to another. You can change as many CSS properties you want, as many times you want. To use CSS animation, you must first specify some keyframes for the animation. Keyframes hold what styles the element will have at certain times. Properties:

- `@keyframes` When you specify CSS styles inside the @keyframes rule, the animation will gradually change from the current style to the new style at certain times. Ex.

```css
@keyframes example {
  from {background-color: red;}
  to {background-color: yellow;}
}
@keyframes example {
  0%   {background-color: red;}
  25%  {background-color: yellow;}
  50%  {background-color: blue;}
  100% {background-color: green;}
}
```

- `animation-name` To get an animation to work, you must bind the animation to an  element using this property. Ex.
animation-name: example;

- `animation-duration` defines how long an animation should take to complete. If the animation-duration property is not specified, no animation will occur, because the default value is 0s (0 seconds). Ex. 
animation-duration: 4s;

- `animation-delay` specifies a delay for the start of an animation. Ex.
animation-delay: 2s;

- `animation-iteration-count` specifies the number of times an animation should run. Ex. animation-iteration-count: 3; //can be a numerical value or infinite

- `animation-direction` specifies whether an animation should be played forwards, backwards or in alternate cycles. Values:
    - normal - The animation is played as normal (forwards). This is default
    - reverse - The animation is played in reverse direction (backwards)
    - alternate - The animation is played forward first, then backwards
    - alternate-reverse - The animation is played backwards first, then forwards

- `animation-timing-function` specifies the speed curve of the animation. Values:
    - ease - Specifies an animation with a slow start, then fast, then end slowly (this is default)
    - linear - Specifies an animation with the same speed from start to end
    - ease-in - Specifies an animation with a slow start
    - ease-out - Specifies an animation with a slow end
    - ease-in-out - Specifies an animation with a slow start and end
    - cubic-bezier(n,n,n,n) - Lets you define your own values in a cubic-bezier function.

- `animation-fill-mode` specifies a style for the target element when the animation is not playing (before it starts, after it ends, or both). Values:
    - none - Default value. Animation will not apply any styles to the element before or after it is executing
    - forwards - The element will retain the style values that is set by the last keyframe (depends on animation-direction and animation-iteration-count)
    - backwards - The element will get the style values that is set by the first keyframe (depends on animation-direction), and retain this during the animation-delay period
    - both - The animation will follow the rules for both forwards and backwards, extending the animation properties in both directions
The shorthand is animation. Eg. animation: example 5s linear 2s infinite alternate; // name->duration->timing-function->delay->iteration-count->direction