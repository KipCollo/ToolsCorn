## Animations

Flutter’s animation support makes it easy to implement a variety of animation types. Many widgets, especially Material widgets, come with the standard motion effects defined in their design spec, but it’s also possible to customize these effects.

`Hero` is a widget in Flutter that allows you to create smooth animations between screens or within a single screen, for widgets that are used in multiple places. It animates the transition of a widget from one screen to another or from one position to another within a screen. The widget that is being animated should have a unique tag property so that Flutter can match the source and destination widgets. Hero widgets are used for visual continuity between screens, so when the user navigates from one screen to another, the hero widget smoothly transitions to its new position instead of abruptly appearing or disappearing. This can make the navigation between screens feel more seamless and enjoyable for the user.

`Opacity `is a Flutter widget that allows you to control the transparency of its child widget. It takes a single opacity argument, which is a value between 0.0 and 1.0, where 0.0 represents complete transparency and 1.0 represents complete opacity. The child widget is drawn with the specified opacity, making it appear translucent or transparent, depending on the value of the opacity argument. This can be useful for creating visual effects such as fading in or out, or to create partially transparent backgrounds or overlays. By using Opacity in combination with other widgets and animations, you can create sophisticated visual effects in your Flutter app.

`Curved animations` in Flutter can be achieved using the "CurvedAnimation" class. This class takes in a "Curve" object that defines the rate of change of the animation over time. The most commonly used curve is the "Curves.easeInOut" curve, which starts slow, speeds up in the middle, and then slows down again towards the end.

`AnimatedBuilder` is a widget in Flutter that allows you to build animations. It takes an Animation object and a builder function as input, and it returns a widget that is rebuilt whenever the animation changes. The builder function is called with the BuildContext and the animation object and it should return the widget that should be animated. This can be used to create complex animations with ease, without having to manage animation state or listen to animation events in the widget tree.

`AnimatedWidget` is a Flutter widget that takes an Animation object as an argument and automatically updates whenever the animation changes. This can be useful when you want to create animations that are tightly coupled to a widget, for example, to animate the size or color of a widget. With AnimatedWidget, you can encapsulate the animation logic into a single widget and reuse it throughout your app. This makes it easier to manage and maintain your animations, as the animation code is centralized and decoupled from the widget tree.

`AnimationController` - This class lets you perform tasks such as:

1. Play an animation forward or in reverse, or stop an animation.
2. Set the animation to a specific value.
3. Define the upperBound and lowerBound values of an animation.
4. Create a fling animation effect using a physics simulation.

By default, an AnimationController linearly produces values that range from 0.0 to 1.0, during a given duration.