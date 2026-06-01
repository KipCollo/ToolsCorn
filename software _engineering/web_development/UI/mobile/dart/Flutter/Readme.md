# Flutter

Flutter is an open-source user interface software development kit(app SDK) created by google.Used for building high performance,high-fidelity apps for IOS,Android, and web from single codebase.

Advantages of flutter include:-
1. Highly productive:-
   - Develop IOS and Android from a single codebase.
   - Prototype and iterate easily where you can change your code and reload it as your app runs(hot reload feature) and also fixes crashes and continue debugging from where the app is left off.
2. Create beautiful,highly-customized user experience(UI):-
   - Rich set of Material design and Cupertino(iOS-flavor) widgets using Flutter's own framework.
   - Custom.beautiful,brand-driven designs without limitations of OEM widget sets.

## Flutter Framework

The Flutter framework is organized into a series of layers.Each layer is built upon the previous layer.The upper layer is more frequently used than the lower layers.

You can compose the ready-made widgets Flutter provoides, or create your custom widgets using same tools and techniques that flutter Team uses to build the framework.
Flutter is special in that it makes it truly possible to “write once, and deploy everywhere.” As of this writing, Flutter apps will deploy to Android, iOS, and ChromeOS. In the near future, Flutter apps will also run as web apps and desktop apps on all major operating systems.

It’s a platform that provides everything you need to build applications: rendering engine, UI components, testing frameworks, tooling, router, and many more features
Flutter apps are written in the programming language called Dart.Dart is also owned and maintained by Google.

**Why does Flutter use Dart**:-

1. Dart supports both just-in-time (JIT) compiling and ahead-of-time (AOT) compiling:
   - The AOT compiler changes Dart into efficient native code. This makes Flutter fast (a win for the user and the developer), but it also means that (nearly) the entire framework is written in Dart. For you, the developer, that means you can customize almost everything.
   - Dart’s optional JIT compiling allows hot reloading to exist. Fast development and iteration is a key to the joy of using Flutter.
2. Dart is object-oriented. This makes it easy to write visual user experiences with Dart, with no need for a markup language.
3. Dart is a productive, predictable language. It’s easy to learn, and it feels familiar.Whether you come from a dynamic language or a static language, you can get up and running with ease.


At a high level, Flutter is a reactive, declarative, and composable view-layer library, much like ReactJS on the web (but more like React mixed with the browser, because Flutter is a complete rendering engine as well). In a nutshell, you build a mobile UI by composing together a bunch of smaller components called widgets. Everything is a widget, and widgets are just Dart classes that know how to describe their view. Structure is defined with widgets, styles are defined with widgets, and so are animations and anything else you can think of that makes up a UI.

## Hot Reload

Flutter's hot reload feature helps you quickly and easily experiment,build UIs,add features and fix bugs.Hot reload works by injecting updated source code files into the running Dart Virtual Machine(VM).After the VM updates classes with newer versions of fields and functions,the Flutter framework automatically rebuilds your app structure,allowing you to quickly view the effects of your changes.

1. Dart Basics - Dart Pad, Variables,Built-In types,Functions,Operators,Control flow
2. Dev Environments - Flutter CLI,FVM
3. Widgets - Inherited widgets, Stateless widgets,Statefule widgets,Styled widgets,Material/Cupertino
4. APIs - Serialization,Deserialization,RESTful APIs,GraphQL,Web Sockets
5. Advanced - Animations, Streams,Futures,Lambdas,Isolates,Async/await, Collections,Functional Programming
6. Deployments - App store, Playstore
7. TESTING - Unit Testing, Widget testing,TDD,BDD
8. Design Principles - Dependency injection,Design patterns,SOLID principles,OOP

## Tools and Technologies

1. DartPad
2. Android Studio
3. Flutter command-line.

## Flutter Channel

Flutter has the following channels in increasing order of stability:-

1. Master - Active development channel;extremely experimental and likely unstable.
2. Beta - Fast-moving alternative to stable;releases every month.
3. Stable - Most stable and mature branch;releases once  a quarter.

```bash
flutter channel # Checking current channel
flutter channel <channel_name> #Switching to other channel.
```

## Folder Structure

1. lib
2. pubspec.yaml
3. android
4. ios
5. build
6. web
7. windows
8. test
