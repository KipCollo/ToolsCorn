# Java GUI

GUI provides user-friendly human interaction.
Building Java GUIs require use of frameworks:-
1. AWT
2. Swing
3. JavaFX.

Swing and AWT are replaced by the JavaFX platform for developing rich internet applications in JDK8.
**History**:-
- When Java was introduced (1996), the GUI classes were bundled in a library known as the Abstract Windows Toolkit (AWT).AWT was prone to platform-specific bugs.AWT was fine for developing simple graphical user interfaces, but not for developing comprehensive GUI projects.
- The AWT user-interface components was replaced by a more robust,versatile, and flexible library known as Swing components (1997). Swing components was painted directly on canvases using Java code. Swing components depend less on the target platform and use less of the native GUI resource.
- With the release of Java 8, Swing was replaced by a completely new GUI platform: JavaFX.


## JavaFX

JavaFX is an open source, next generation client application platform for desktop, mobile and embedded systems built on Java. It is a collaborative effort by many individuals and companies with the goal of producing a modern, efficient, and fully featured toolkit for developing rich client applications.

JavaFX is a set of graphics and media packages that enables developers to design, create, test, debug, and deploy rich client applications that operate consistently across diverse platforms.JavaFX library is written as a Java API, JavaFX application code can reference APIs from any Java library. For example, JavaFX applications can use Java API libraries to access native system capabilities and connect to server-based middleware applications.

JavaFX applications can target desktop, mobile and embedded systems. Libraries and software are available for the entire life-cycle of an application.
Scene Builder - Create beautiful user interfaces and turn your design into an interactive prototype. Scene Builder closes the gap between designers and developers by creating user interfaces which can be directly used in a JavaFX application.
TestFX - allows developers to write simple assertions to simulate user interactions and verify expected states of JavaFX scene-graph nodes.

- JavaFX builds on top of JDK and is a standalone component. There are 2 different options for developing JavaFX applications:
    1. Use the JavaFX SDK (choosing between 17 or 21 LTS, latest release 26, or an early access build).
    2. Use a build system (e.g. maven/gradle) to download the required modules from Maven Central (choosing as well between the same mentioned versions).

Swing and AWT were replaced by the JavaFX platform for developing rich Internet applications in JDK8 (2014).

**Key Features**:- The following features are included in JavaFX 8 and later releases. Items that were introduced in JavaFX 8 release are indicated accordingly:

1. Java APIs. JavaFX is a Java library that consists of classes and interfaces that are written in Java code. The APIs are designed to be a friendly alternative to Java Virtual Machine (Java VM) languages, such as JRuby and Scala.
2. FXML and Scene Builder. FXML is an XML-based declarative markup language for constructing a JavaFX application user interface. A designer can code in FXML or use JavaFX Scene Builder to interactively design the graphical user interface(GUI). Scene Builder generates FXML markup that can be ported to an IDE where a developer can add the business logic.
3. WebView. A web component that uses WebKitHTML technology to make it possible to embed web pages within a JavaFX application. JavaScript running in WebView can call Java APIs, and Java APIs can call JavaScript running in WebView. Support for additional HTML5 features, including Web Sockets, Web Workers, and Web Fonts, and printing capabilities have been added in JavaFX 8.
4. Swing interoperability. Existing Swing applications can be updated with JavaFX features, such as rich graphics media playback and embedded Web content. The SwingNode class, which enables you to embed Swing content into JavaFX applications, has been added in JavaFX 8.
5. Built-in UI controls and CSS. JavaFX provides all the major UI controls that are required to develop a full-featured application. Components can be skinned with standard Web technologies such as CSS. The DatePicker and TreeTableView UI controls are now available with the JavaFX 8 release.Also, the CSS Styleable* classes have become public API, allowing objects to be styled by CSS.
6. Modena theme. The Modena theme replaces the Caspian theme as the default for JavaFX 8 applications. The Caspian theme is still available for your use by adding the setUserAgentStylesheet(STYLESHEET_CASPIAN) line in your Application start() method.
7. 3D Graphics Features. The new API classes for Shape3D (Box, Cylinder,MeshView, and Sphere subclasses), SubScene, Material, PickResult,LightBase (AmbientLight and PointLight subclasses), and SceneAntialiasing have been added to the 3D Graphics library in JavaFX 8. The Camera API class has also been updated in this release.
8. Canvas API. The Canvas API enables drawing directly within an area of the JavaFX scene that consists of one graphical element (node).
9. Printing API. The javafx.print package has been added in Java SE 8 release and provides the public classes for the JavaFX Printing API.
10. Rich Text Support. JavaFX 8 brings enhanced text support to JavaFX, including bi-directional text and complex text scripts, such as Thai and Hindu in controls, and multi-line, multi-style text in text nodes.
11. Multitouch Support. JavaFX provides support for multitouch operations, based on the capabilities of the underlying platform.
12. Hi-DPI support. JavaFX 8 now supports Hi-DPI displays.
13. Hardware-accelerated graphics pipeline. JavaFX graphics are based on the graphics rendering pipeline (Prism). JavaFX offers smooth graphics that render quickly through Prism when it is used with a supported graphics card or graphics processing unit (GPU). If a system does not feature one of the recommended GPUs supported by JavaFX, then Prism defaults to the software rendering stack.
14. High-performance media engine. The media pipeline supports the playback of web multimedia content. It provides a stable, low-latency media framework that is based on the GStreamer multimedia framework.
15. Self-contained application deployment model. Self-contained application packages have all of the application resources and a private copy of the Java and JavaFX runtimes. They are distributed as native installable packages and provide the same installation and launch experience as native applications for that operating system.

NOTE:- Before you can run a sample JavaFX application, you need to have the JavaFX runtime libraries on your machine. Before you proceed with these steps, either install the latest version of the JDK 8 or the latest version of the JRE.


**JavaFX Architecture**:-

`javafx.application.Application` is the entry point for JavaFX applications.JavaFX creates an application thread for running the application start method, processing input events, and running animation timelines.Override the start(Stage) method.
`javafx.stage.Stage` is the top level JavaFX container.The primary Stage is constructed by the platform.
`javafx.scene.Scene` class is the container for all content in a scene graph.
`javafx.scene.Node` is the base class for scene graph nodes.

```java
import javafx.application.Application;
import javafx.stage.Stage;
import javafx.scene.Scene;
import javafx.scene.control.Button;

public class MultipleStageDemo extends Application {

    @Override // Override the start method in the Application class
    public void start(Stage primaryStage) {
        // Create a scene and place a button in the scene
        Scene scene = new Scene(new Button("OK"), 200, 250);
        primaryStage.setTitle("MyJavaFX"); // Set the stage title
        primaryStage.setScene(scene); // Place the scene in the stage
        primaryStage.show(); // Display the stage

        Stage stage = new Stage(); // Create a new stage
        stage.setTitle("Second Stage"); // Set the stage title
        // Set a scene with a button in the stage
        stage.setScene(new Scene(new Button("New Stage"), 100, 100));
        stage.show(); // Display the stage
    }

    public static void main(String[] args) {
        launch(args);
    }
}
```

**Shapes**:- JavaFX provides many shape classes for drawing texts,lines, circles, rectangles, ellipses, arcs, polygons, and polylines.

**JavaFX CSS**:- JavaFX Cascading Style Sheets (CSS) is based on the W3C CSS and allows to customize and develop themes for JavaFX controls and scene graph objects.JavaFX uses the prefix "-fx-" to define its vendor CSS properties (separate from W3C CSS).

```CSS
.circleborder {
    -fx-stroke-width: 5;
    -fx-stroke-dash-array: 12 2 4 2;
}
.border {
    -fx-border-color: black;
    -fx-border-width: 5;
}
```

```java
// Load the stylesheet
scene.getStylesheets().add("mystyle.css");

circle1.getStyleClass().add("plaincircle"); // Add a style class
circle2.getStyleClass().add("plaincircle"); // Add a style class
circle3.setId("redcircle"); // Add a style id
```

