# Widgets

Widgets in Flutter are the basic building blocks of the user interface. They define how the UI looks and behaves. Widgets can be combined to create complex user interfaces and can be easily customized. Widgets in Flutter are also designed to be highly reusable, allowing developers to build complex UIs quickly and efficiently.Almost everything in Flutter app is a widget such as images,icons,texts,menus,row,column,buttons.

A widget is immutable object that describes a specific part of your user interface.Also, you can combine existing widgets to make more sophisticated widgets.

Flutter widgets are built using a modern framework that takes inspiration from React. The central idea is that you build your UI out of widgets. Widgets describe what their view should look like given their current configuration and state. When a widget's state changes, the widget rebuilds its description, which the framework diffs against the previous description in order to determine the minimal changes needed in the underlying render tree to transition from one state to the next.

Row and Column are classes that contain and layout widgets.Widgets inside of a Row or Column are called children,and Row and Column widgets are referred to as parents.Row lays out widgets horizontally,and Column lays out its widgets vertically.

## Stateful and Stateless Widgets

`A stateful widget` is dynamic: for example, it can change its appearance in response to events triggered by user interactions or when it receives data. Checkbox, Radio, Slider, InkWell, Form, and TextField are examples of stateful widgets.


`Stateless widgets` in Flutter are widgets that don't maintain any mutable state. They are designed to be immutable and rebuild each time the framework needs to update the UI. They are suitable for static, unchanging views or simple animations. They can be created using the StatelessWidget class and have a single build method that returns a widget tree.It never changes.Includes:- Icon,IconButton anmd Text.Stateless widgets subclass StatelessWidget.

A widget's state is stored in a State object,separating the widget's state from its appearance.The state consists of values that can change.When the widget's state changes,the state object calls setState(),telling framework to redraw the widget.

To create a Stateful widget,you should create two classes, a class of StatefulWidget and a class of State.The state class contains the widget mutable state and the widget build() method.When the widget's state changes,the state object calls setState(), telling the framework to redraw the widget.

## Styled Widgets

`Styled Widgets` are Flutter widgets that are decorated with custom styles, such as colors, fonts, and shapes. They can be created by wrapping existing widgets with other widgets, such as Container, Theme, or BoxDecoration.
`Cupertino widgets` are a set of Flutter widgets that mimic the look and feel of Apple's iOS user interface. They are designed to provide a consistent look and feel on both iOS and Android devices, and include widgets such as CupertinoButton, CupertinoAlertDialog, and CupertinoSlider. These widgets are useful for building cross-platform apps that need to conform to the iOS design aesthetics.
`Material Widgets` are a set of Flutter widgets that implement Material Design, Google's visual language for design. They are designed to provide a consistent look and feel on both Android and iOS devices.

These widgets are commonly used in Flutter apps to provide a familiar look and feel that follows Material Design guidelines.

To attach the Flutter widgets to the device screen,you need to use `runApp` function.All widgets will belong to this function.
The runApp method renders the provided app widget into the PlatformDispatcher. implicitView by wrapping it in a View widget, which will bootstrap the render tree for the app. Apps that want to control which FlutterView they render into can use runWidget instead.

Calling runApp again will detach the previous root widget from the view and attach the given widget in its place. The new widget tree is compared against the previous widget tree and any differences are applied to the underlying render tree, similar to what happens when a StatefulWidget rebuilds after calling State. setState.

```dart
runApp(
   Widget app
);
```

Directionality widget is introduced by the MaterialApp or WidgetsApp at the top of your application widget tree.It determines the ambient reading direction and is used for example, to determine how to lay out text,how to interpret "start" and "end" values.and to ressolve EdgeInsetsDirectionsl, and other Directional objects.

## MaterialApp widget

At the first step in creating a Flutter app,you will add a `MaterialApp` class.MaterialApp is the starting point of your app,it tells Flutter that you are going to use material components widgets and will follow a material design in your app.

MaterialApp class wraps a number of widgets that are commonly required for material design applications such as Scaffold,AppBar,Bottom navigation bars,Column,Row,Logo,Icon,Image,raised Button,text and other widgets.

```dart
void main(){
   runApp(MaterialApp(
      home: Center(
         child: Text('Hello')
      )
   ))
}
```

## Scaffold Widget

When you create Flutter app,you need to configure a lot of widgets and change their format.You don't need to create everything from scratch.You can easily add the `scaffold` class or widget to your app.This class implements the basic material design visual layout structure for your app.This class provides application programming interface for displaying drawers,snack bars,bottom sheets and other Flutter widgets.

The scaffold() widget works as a container for other Flutter widgets,such as app body.

```dart
void main(){
   runApp(
      MaterialApp(
         home: Scaffold(
            appBar: AppBar(
               title: Text('Kipcollo App'),
               backgroundColor: Colors.Blue
            ),
            body: Text('Hello',textDirection: TextDirection.ltr)
         ),
      ),
   ),
}
```

Items in scaffold includes:- key,appBar,body,floatingActionButton,drawer,bottomNavigationBar,backgroundColor..

## Image Widget

This class or widget is used to display an image in Flutter app.In Flutter, the following image formats are supported: JPEG,PNG,GIF,Animated GIF,WebP,Animated WebP,BMP,and WBMP.
You can add image using different sources:- From internet and asset folder.

```dart
void main(){
   runApp(
      MaterialApp(
         home: Scaffold(
            appBar: AppBar(
               title: Text('Kipcollo App'),
               backgroundColor: Colors.Blue
            ),
            body: Center(
               child: Image(
                  image: NetworkImage('https://kipcollo.com/logo.jpg')
               )
            )
         ),
      ),
   ),
}
```

When using asset folder,you should configure your Flutter app to default location(folder) of the images in the app.To do that you must configure the `pubspec.yaml` file.This file includes all of your app configurations.

```yaml
flutter:
   assets:
      - assets/images/
      - assets/icons/
```

```dart
void main(){
   runApp(
      MaterialApp(
         home: Scaffold(
            appBar: AppBar(
               title: Text('Kipcollo App'),
               backgroundColor: Colors.Blue
            ),
            body: Center(
               child: Image(
                  image: AssetImage('assets/images/login.jpg')
               )
            )
         ),
      ),
   ),
}
```

## Container Widget

When we want to have full control in a location when it comes to width and height of any Flutter widget,we use Container widget and configure the other widget which we want to control as a child widget.You may add a lot of properties to your Container widget such as background,color,size,padding,margins,borders or shape of text, and other properties.

The Container widget is a widget class that allows you to customize,compose,decorate and position its child widget.Similar to DIV tag in HTML.

```dart
body: SafeArea(
   child: Container(
      decoration: BoxDecoration(
         color: Colors.blue,
         shape: BoxShape.circle
      )
   )
)
```

Container widget can only have one child.

## Column and Row Widgets

Rows and Columns are classes that contain and lay out widgets.Widgets inside of a Row or Column are called children widgets.

```dart
void main() {
   runApp(MaterialApp(
      home: Scaffold(
         body: SafeArea(
            child: Column(
               children: <Widget>[
                  Text('Data 1'),
                  Text ('Data 2'),
               Container(
                  child: Text('Data 3'),
                  color: Colors.grey,
                  margin: EdgeInsets.only(left: 20.0),
                  height: 50.0,
                  width: 70.0,
               ),
                  Container(
                     child: Text('Data 4'),
                     color: Colors.amber,
                     margin: EdgeInsets.only(left: 20.0),
                     height: 50.0,
                     width: 70.0,
                  ),
               ],
            ),
         ),     
      ),
   ));
}
```

## Icon Widget

When you add an Icon widget, you are actually calling a specific code which represents this icon name,and it will draw all the sides and the edges of the icon onto the app screen.

```dart
body: SafeArea(
   child: Container(
     child: Icon(
      Icons.shopping_cart,
      size: 50,
      color: Colors.blue
     )
   )
)
```


`Inherited widgets`in Flutter are a powerful mechanism for efficiently propagating data down the widget tree. They essentially create a shared data scope that descendant widgets can access without needing to explicitly pass the data through constructors. When a widget needs to access data from an ancestor, it can simply look up the nearest inherited widget of the desired type.


`Responsive widgets` in Dart, primarily within Flutter, are crucial for building applications that adapt to diverse screen sizes and orientations. Developers achieve this adaptability using tools like LayoutBuilder to respond to available space, MediaQuery to gather device information, and Expanded and Flexible for dynamic space distribution. AspectRatio maintains proportions, OrientationBuilder adjusts for landscape or portrait modes, and Wrap handles overflow by moving widgets to new lines. Adaptive widgets and custom layouts further enhance platform-specific responsiveness. By employing these techniques and considering breakpoints and thorough testing, developers can create Flutter apps that provide a consistent and optimal user experience across various devices.


`Responsive widgets` in Dart, primarily within Flutter, are crucial for building applications that adapt to diverse screen sizes and orientations. Developers achieve this adaptability using tools like LayoutBuilder to respond to available space, MediaQuery to gather device information, and Expanded and Flexible for dynamic space distribution. AspectRatio maintains proportions, OrientationBuilder adjusts for landscape or portrait modes, and Wrap handles overflow by moving widgets to new lines. Adaptive widgets and custom layouts further enhance platform-specific responsiveness. By employing these techniques and considering breakpoints and thorough testing, developers can create Flutter apps that provide a consistent and optimal user experience across various devices.

