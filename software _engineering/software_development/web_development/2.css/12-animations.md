# Animations

CSS allows animation of HTML elements. An animation lets an element gradually change from one style to another. You can change as many CSS properties you want, as many times you want. To use CSS animation, you must first specify some keyframes for the animation. Keyframes hold what styles the element will have at certain times. Properties:

While CSS transitions are all about altering element properties as they move from state to state, CSS animations are dependent on keyframes and animation properties.

- keyframes: Used to define the styles an element will have at various times.
- animation properties: Used to assign @keyframes to a specific element and determine how it is animated.

**Keyframes** - Keyframes are the foundation of CSS animations. They define what the animation looks like at each stage of the animation timeline. Each @keyframes is composed of:

- Name of the animation: A name that describes the animation, for example, bounceIn.
- Stages of the animation: Each stage of the animation is represented as a percentage. 0% represents the beginning state of the animation. 100% represents the ending state of the animation. Multiple intermediate states can be added in between.
- CSS Properties: The CSS properties defined for each stage of the animation timeline.

Let’s take a look at a simple @keyframes I’ve named “bounceIn”. This @keyframes has three stages. At the first stage (0%), the element is at opacity 0 and scaled down to 10 percent of its default size, using CSS transform scale. At the second stage (60%) the element fades in to full opacity and grows to 120 percent of its default size. At the final stage (100%), it scales down slightly and returns to its default size.

The @keyframes are added to your main CSS file.

```css
@keyframes bounceIn {
  0% {
    transform: scale(0.1);
    opacity: 0;
  }
  60% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
}
```

```css
@keyframes example {
  from {
    background-color: red;
  }
  to {
    background-color: yellow;
  }
}
```

**Animation Properties** - Once the @keyframes are defined, the animation properties must be added in order for your animation to function.

Animation properties do two things:

- They assign the @keyframes to the elements you want to animate.
- They define how it is animated.

The animation properties are added to the CSS selectors(or elements) that you want to animate, You must add the following two animation properties for the animation to take effect.

- animation-name: The name of the animation defined in the @keyframes.
- animation-duration: The duration of the animations, in seconds (eg. 5s) or milliseconds (eg. 200ms).

Continuing with the above bounceIn example, we’ll add animation-name and animation-duration to the div that we want to animate.

```css
div {
  animation-duration: 2s;
  animation-name: bounceIn;
}
```

Shorthand syntax:

```css
div {
  animation: bounceIn 2s;
}
```

By adding both the @keyframes and the animation properties, we have a simple animation!

In addition to the required animation-name and animation-duration properties, you can further customize and create complex animations using the following properties:

- animation-timing-function – specifies the speed curve of the animation.
- animation-delay – specifies a delay for the start of an animation.
- animation-iteration-count – specifies the number of times an animation should be played.
- animation-direction – specifies whether an animation should play in reverse direction or alternate cycles.
- animation-fill-mode – specifies a style for the element when the animation is not playing. Such as when it is finished or when it has a delay.
- animation-play-state – specifies whether the animation is running or paused.

Order used in shorthand syntax:

animation: [animation-name] [animation-duration] [animation-timing-function]
[animation-delay] [animation-iteration-count] [animation-direction]
[animation-fill-mode] [animation-play-state];

To add multiple animations to a selector, you simply separate the values with a comma. Here’s an example:

```css
.div {
  animation:
    slideIn 2s,
    rotate 1.75s;
}
```

- `animation-name` To get an animation to work, you must bind the animation to an element using this property. Ex. animation-name: example;
- `animation-duration` defines how long an animation should take to complete. If the animation-duration property is not specified, no animation will occur, because the default value is 0s (0 seconds). Ex. animation-duration: 4s;
- `animation-delay` specifies a delay for the start of an animation. Ex. animation-delay: 2s;
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
- `animation-fill-mode` specifies a style for the target element when the animation is not playing (before it starts, after it ends, or both). Values: - none - Default value. Animation will not apply any styles to the element before or after it is executing - forwards - The element will retain the style values that is set by the last keyframe (depends on animation-direction and animation-iteration-count) - backwards - The element will get the style values that is set by the first keyframe (depends on animation-direction), and retain this during the animation-delay period - both - The animation will follow the rules for both forwards and backwards, extending the animation properties in both directions
  The shorthand is animation. Eg. animation: example 5s linear 2s infinite alternate; // name->duration->timing-function->delay->iteration-count->direction
