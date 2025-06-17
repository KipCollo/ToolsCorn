# Android Project Structure

When you create a new Android project in Android Studio, the IDE generates files and directories in a specific structure.
Before we dive in, it’s helpful to know that the project structure varies slightly depending on the template you choose when creating your project. In this topic, we’ll focus on the two most common templates for building Android apps:

- Empty Activity: This template uses Jetpack Compose, Android’s modern toolkit for building user interfaces (UIs).
- Empty Views Activity: This template follows the traditional View-based approach for creating UIs.

While the core components are similar, these templates differ in structure because of their unique approaches to building UIs.
By default, Android Studio displays files and folders in the Project tool window using the Android view. This view hides less commonly used files and organizes the structure to make navigation between key project files easier. However, sometimes you'll need to access hidden files. Our first task will be to switch to the Project view, which reveals the actual file structure as it exists on your system, giving you access to those hidden files.

AndroidManifest & MainActivity files

To make it easier to find files, switch back to the Android view in the Project tool window. The first file we’ll explore is the "AndroidManifest.xml", located at "app/manifests/AndroidManifest.xml":

File directory showing AndroidManifest.xml selected in an IDE.

The manifest file describes essential information about your app in an XML file where XML stands for eXtensible Markup Language.

Within the <application> tag, you’ll find attributes that define certain app properties. For example, the android:icon attribute specifies the app’s icon, while the android:label attribute defines the text label users see in their list of applications:

...
<manifest 
    ...>
    
    <application
        ...
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        ...
    </application>
    
</manifest>

There are several other attributes specified within the <application> tag. Some of which are self-explanatory, while others you'll understand better as you continue learning Android development. Within the <application> tag, you’ll also find an <activity> tag:

Jetpack Compose template:

<activity
    android:name=".MainActivity"
    android:exported="true"
    android:label="@string/app_name"
    android:theme="@style/Theme.HelloCompose">
    <intent-filter>
        <action android:name="android.intent.action.MAIN" />

        <category android:name="android.intent.category.LAUNCHER" />
    </intent-filter>
</activity>

View-based template:

<activity
    android:name=".MainActivity"
    android:exported="true">
    <intent-filter>
        <action android:name="android.intent.action.MAIN" />

        <category android:name="android.intent.category.LAUNCHER" />
    </intent-filter>
</activity>

Unlike in regular Kotlin applications, where the program starts at the main function, in Android, activities serve as entry points to your app. Each activity provides a window for the app to draw its UI and interact with the user. Within the <activity> tag, there’s a required attribute: android:name. In a new project, this attribute points to ".MainActivity", let’s talk about it.

Open the "MainActivity.kt" file located at "app/kotlin+java/<your app's namespace>/MainActivity":

Screenshot of Android Studio project structure with MainActivity.kt selected

The contents of this file will vary depending on the template you used to create the project:

Jetpack Compose template:

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            ...
        }
    }
}
...

View-based template:

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_main)
        ...
    }
}

Android Studio generated a MainActivity class that extends either ComponentActivity or AppCompatActivity, depending on the template. Both of these classes are indirect subclasses of Activity, which makes MainActivity an Android activity. However, for the app to use the activity, it must be specified in the app’s manifest, as we saw earlier, using the android:name attribute to point to this class.

In the manifest, the leading period in ".MainActivity" is resolved to the fully qualified name based on the app’s namespace, which is outside the scope of this topic.

As mentioned, an activity provides an entry point to the app and a window for drawing the UI. While having one activity is often sufficient, some cases benefit from multiple activities within the same app. Because you can have multiple activities, the <intent-filter> tag in the manifest specifies MainActivity as the activity to open when a user launches the app, for instance, from the home screen. Other activities in the manifest may use <intent-filter> tag for different purposes or omit it altogether.

Returning to our MainActivity class, you’ll notice an overridden onCreate() function. This function is called by the Android system when the activity is first created. Inside, you’ll see either the setContent() or setContentView() method, depending on whether you’re using Jetpack Compose or the View-based system, respectively. This is where we specify the UI for the activity. For now, you can ignore the remaining code in onCreate().

In the next section, we’ll give a brief overview of the two main approaches to creating native UIs in Android apps.

Jetpack Compose and Views

As mentioned, the primary difference between the two templates covered here is that one uses Jetpack Compose to build the UI, while the other relies on the traditional View-based system.

Jetpack Compose is the newer, preferred approach for building native UIs in Android. In Compose, the UI is defined declaratively in Kotlin. If you look at the rest of the "MainActivity.kt" file:

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        ...
        setContent {
            HelloComposeTheme {
                Scaffold(modifier = Modifier.fillMaxSize()) { innerPadding ->
                    Greeting(
                        // Try changing the name here, run the app, and see what happens
                        name = "Android",
                        modifier = Modifier.padding(innerPadding)
                    )
                }
            }
        }
    }
}

@Composable
fun Greeting(name: String, modifier: Modifier = Modifier) {
    Text(
        text = "Hello $name!",
        modifier = modifier
    )
}

...

You’ll see functions annotated with @Composable. These functions are used to compose the UI and are called directly in code as seen above.

The ui.theme package also contains files related to Jetpack Compose.

Before Jetpack Compose, Android developers created UIs using the View-based system, where UIs were described in XML files. In projects created with the View-based template, you can find an example layout at "app/res/layout/activity_main.xml":

...
<androidx.constraintlayout.widget.ConstraintLayout
    ...>

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Hello World!"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toTopOf="parent" />

</androidx.constraintlayout.widget.ConstraintLayout>

The "res" folder contains app resources like images, layout files, and raw files (e.g., audio), as well as value files that we’ll explore later. These resources are accessible through the R class, which is automatically generated. The R class contains resource identifiers which can be accessed in code, using the following format: R.resource_type.resource_name. For instance, in the View-based MainActivity, the setContentView() function references the activity_main.xml layout file as R.layout.activity_main:

...
setContentView(R.layout.activity_main)
...

Since we are setting "res/layout/activity_main.xml" as the content view of our MainActivity, our activity will look as described in the activity_main XML layout file.

When you run the apps for both templates, they will each display a simple text.

While developers are encouraged to build new apps using Jetpack Compose, you’ll still encounter older apps that use the View-based system. For this reason, it’s beneficial to have a working knowledge of both approaches.

It’s possible to combine Jetpack Compose and Views in the same app, so it’s common to see both @Composable functions and layout files within a single project.
